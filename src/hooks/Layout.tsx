import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full"  >
                <SidebarTrigger className="text-white bg-black hover:bg-black" />
               <div className="px-4  md:px-8 w-full h-full overflow-y-auto">
               {children}
               </div>
            </main>
        </SidebarProvider>
    );
}