import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full"  >
                <SidebarTrigger className="text-white bg-transparent hover:bg-transparent hover:text-white" />
               <div className="px-4  md:px-8 w-full h-full overflow-y-auto relative">
               {children}
               <Footer />
               </div>
            </main>
        </SidebarProvider>
    );
}