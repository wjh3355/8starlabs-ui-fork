import StatusIndicator from "@/registry/8starlabs-ui/blocks/status-indicator";
import Hero from "@/app/_section/hero";

export default function Home() {
  return (
    <div className="max-w-10xl  px-6 sm:px-16  mx-auto flex flex-col min-h-svh py-8 gap-8">
      <Hero />
      <StatusIndicator state="active" label="Systems up" />
    </div>
  );
}
