"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLang } from "../LangProvider";
import { useTheme } from "../ThemeProvider";
import { translations } from "@/lib/i18n";
import { terminalCommands } from "@/lib/terminal-commands";

interface TerminalLine {
  type: "command" | "response" | "error" | "welcome";
  content: string;
  isHtml?: boolean;
}

const CHIPS = ["help", "about", "skills", "projects", "contact", "fun", "clear"];

export default function Terminal() {
  const { lang, t } = useLang();
  const { theme } = useTheme();
  const tr = translations.terminal;
  const isDark = theme === "dark";

  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Re-init welcome message when language changes
  useEffect(() => {
    setLines([
      { type: "welcome", content: t(tr.welcome) },
      { type: "welcome", content: t(tr.helpHint) },
    ]);
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll to bottom on new lines
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      if (!trimmed) return;

      const commands = terminalCommands[lang];

      setLines((prev) => [
        ...prev,
        { type: "command", content: `valeria@portfolio:~$ ${cmd}` },
      ]);

      if (trimmed === "clear") {
        setLines([
          {
            type: "welcome",
            content:
              lang === "es"
                ? '¡Terminal limpiada! Escribe "help" para ver comandos.'
                : 'Terminal cleared! Type "help" to see commands.',
          },
        ]);
        return;
      }

      if (commands[trimmed]) {
        setLines((prev) => [
          ...prev,
          { type: "response", content: commands[trimmed], isHtml: true },
        ]);
      } else {
        const errMsg =
          lang === "es"
            ? `Comando no reconocido: "${trimmed}". Escribe "help" para ver comandos.`
            : `Command not recognized: "${trimmed}". Type "help" to see available commands.`;
        setLines((prev) => [...prev, { type: "error", content: errMsg }]);
      }
    },
    [lang]
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  return (
    <section
      className={`py-16 md:py-24 scroll-mt-20 transition-colors duration-300 ${
        isDark ? "always-dark bg-navy" : "bg-cream"
      }`}
      id="terminal"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center">
          <span className={`text-sm font-medium ${isDark ? "text-blush/70" : "text-accent/80"}`}>{t(tr.tag)}</span>
          <h2 className={`font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-1 mb-3 ${isDark ? "text-cream" : "text-navy"}`}>{t(tr.title)}</h2>
          <p className={`text-sm ${isDark ? "text-cream/78" : "text-navy/82"}`}>{t(tr.intro)}</p>
        </div>

        {/* Terminal window */}
        <div className={`rounded-2xl overflow-hidden ${isDark ? "dark-surface border border-cream/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]" : "light-surface border border-blush/30 shadow-[0_24px_60px_rgba(20,30,50,0.10)]"}`}>
          {/* Title bar */}
          <div className={`px-4 py-3 flex items-center gap-3 ${isDark ? "dark-inset bg-[#1e1e1e]" : "light-inset bg-[rgb(246,240,234)] border-b border-blush/25"}`}>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className={`text-xs font-mono mx-auto ${isDark ? "text-white/70" : "text-navy/72"}`}>valeria@portfolio ~ </span>
          </div>

          {/* Terminal body */}
          <div
            ref={outputRef}
            className={`p-4 sm:p-5 h-60 sm:h-72 overflow-y-auto cursor-text font-mono text-xs sm:text-sm ${isDark ? "bg-[#0d1117]" : "bg-white"}`}
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => {
              if (line.type === "command") {
                return (
                  <p key={i} className={`mb-1 ${isDark ? "text-[#00ff88]" : "text-emerald-600"}`}>{line.content}</p>
                );
              }
              if (line.type === "error") {
                return (
                  <p key={i} className="text-red-400 mb-1">{line.content}</p>
                );
              }
              if (line.isHtml) {
                return (
                  <div
                    key={i}
                    className={`mb-2 ${isDark ? "text-[#e2e8f0]" : "text-slate-700"}`}
                    dangerouslySetInnerHTML={{ __html: line.content }}
                  />
                );
              }
              return (
                <p key={i} className={`mb-1 ${isDark ? "text-[#cbd5e1]" : "text-slate-700"}`}>{line.content}</p>
              );
            })}

            {/* Input line */}
            <div className="flex items-center gap-2 mt-2">
              <span className={`whitespace-nowrap ${isDark ? "text-[#00ff88]" : "text-emerald-600"}`}>valeria@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className={`flex-1 bg-transparent outline-none ${isDark ? "text-[#e2e8f0] caret-[#00ff88]" : "text-slate-700 caret-emerald-600"}`}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </div>

        {/* Command chips */}
        <div className="mt-5">
          <p className={`text-xs mb-3 text-center ${isDark ? "text-cream/72" : "text-navy/72"}`}>{t(tr.suggestedLabel)}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {CHIPS.map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  if (cmd === "clear") {
                    setLines([
                      {
                        type: "welcome",
                        content:
                          lang === "es"
                            ? '¡Terminal limpiada! Escribe "help" para ver comandos.'
                            : 'Terminal cleared! Type "help" to see commands.',
                      },
                    ]);
                  } else {
                    executeCommand(cmd);
                  }
                  inputRef.current?.focus();
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${isDark ? "dark-inset bg-cream/5 border border-cream/10 text-cream/82 hover:bg-cream/10 hover:text-cream" : "bg-white border border-blush/30 text-navy/82 hover:bg-warm hover:text-accent"}`}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
