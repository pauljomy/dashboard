import { SidebarTrigger } from "./ui/sidebar";

const SiteHeader = () => {
  return (
    <header className="flex h-12 items-center shrink-0 gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <h1 className="text-base nt-medium">Documents</h1>
    </header>
  );
};

export default SiteHeader;
