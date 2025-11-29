"use client";

// import { ENVIRONMENT } from "@/lib/config";
import SystemBanner from "@/registry/8starlabs-ui/blocks/system-banner";
import { usePathname } from "next/navigation";

export default function SystemBannerClientWrapper() {
  const path = usePathname();

  if (!path.startsWith("/docs/components/system-banner")) {
    return null;
  }

  return <SystemBanner show={true} text="System Banner is visible" />;
}
