import CustomCursor from "./components/ui/CustomCursor";
import ParticleField from "./components/ui/ParticleField";
import ScrollProgress from "./components/ui/ScrollProgress";
import PageClient from "./components/PageClient";

export default function Home() {
  return (
    <>
      <ParticleField />
      <CustomCursor />
      <ScrollProgress />
      <PageClient />
    </>
  );
}
