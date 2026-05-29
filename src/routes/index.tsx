import { createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import SiteHeader from "@/components/SiteHeader";
import SectionCards from "#/components/SectionCards";

export const Route = createFileRoute("/")({ component: Dashboard });

function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="p-4">
          <SectionCards />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
