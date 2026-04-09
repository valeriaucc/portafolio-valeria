"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLang } from "../LangProvider";
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
  const tr = translations.terminal;

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
    <section className="py-24 bg-navy dark:bg-cream" id="terminal">
      <div className="always-dark max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-blush/70 text-sm font-medium">{t(tr.tag)}</span>
          <h2 className="font-playfair text-5xl font-bold text-cream mt-1 mb-3">{t(tr.title)}</h2>
          <p className="text-cream/50 text-sm">{t(tr.intro)}</p>
        </div>

        {/* Terminal window */}
        <div className="rounded-2xl overflow-hidden border border-cream/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          {/* Title bar */}
          <div className="bg-[#1e1e1e] px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs text-white/40 font-mono mx-auto">valeria@portfolio ~ </span>
          </div>

          {/* Terminal body */}
          <div
            ref={outputRef}
            className="bg-[#0d1117] p-5 h-72 overflow-y-auto cursor-text font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => {
              if (line.type === "command") {
                return (
                  <p key={i} className="text-[#00ff88] mb-1">{line.content}</p>
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
                    className="text-[#e2e8f0] mb-2"
                    dangerouslySetInnerHTML={{ __html: line.content }}
                  />
                );
              }
              return (
                <p key={i} className="text-[#94a3b8] mb-1">{line.content}</p>
              );
            })}

            {/* Input line */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#00ff88] whitespace-nowrap">valeria@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 bg-transparent text-[#e2e8f0] outline-none caret-[#00ff88]"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </div>

        {/* Command chips */}
        <div className="mt-5">
          <p className="text-cream/40 text-xs mb-3 text-center">{t(tr.suggestedLabel)}</p>
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
                className="px-3 py-1.5 text-xs font-mono bg-cream/5 border border-cream/10 text-cream/60 rounded-lg hover:bg-cream/10 hover:text-cream transition-all"
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
