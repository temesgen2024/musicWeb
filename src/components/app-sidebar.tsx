import {Disc ,Home,Compass, User,Clock3  ,Settings, RotateCcw, Heart, ListMusic, CopyPlus, LogOut , } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Discover",
        url: "#",
        icon: Compass,
    },
    {
        title: "Alubm",
        url: "#",
        icon: Disc,
    },
    {
        title: "Artist",
        url: "#",
        icon: User,
    },
    {
        title: "Recently added",
        url: "#",
        icon: Clock3,
    },
    {
        title: "Recently played",
        url: "#",
        icon:  RotateCcw ,
    },
    {
        title: "Favourites",
        url: "#",
        icon: Heart,
    },
    {
        title: "Your Playlist",
        url: "#",
        icon: ListMusic
    },
    {
        title: "Add Playlist",
        url: "#",
        icon :CopyPlus
    },
   
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title: "Logout",
        url: "#",
        icon: LogOut,
    },
];

export function AppSidebar() {
    return (
        <Sidebar className="bg-black text-white">
            <SidebarContent className="bg-black" >
                <SidebarGroup className="bg-black text-white w-[80%] mx-auto mt-6">
                    <SidebarGroupLabel  className="text-center mb-6 font-bold text-3xl melody bg-clip-text text-transparent" 
                        style={{
                            backgroundImage: "linear-gradient(90deg, rgba(190, 13, 141, 1) 39%, rgba(14, 158, 239, 1) 100%)",
                        }}>Melodies</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarGroupLabel className="text-center mb-3 text-fuchsia-700">Menu</SidebarGroupLabel>
                        <SidebarMenu>
                            {items.slice(0,4).map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="text-white hover:bg-fuchsia-700 hover:text-white py-4">
                                        <a href={item.url} className="text-white py-5">
                                            <item.icon size={32} className="text-white text-2xl"/>
                                            <span className="text-white text-xl">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <SidebarGroupLabel className="text-center mb-3 text-fuchsia-700">Library</SidebarGroupLabel>
                        <SidebarMenu>
                            {items.slice(4,6).map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="text-white hover:bg-fuchsia-700 hover:text-white py-4">
                                        <a href={item.url} className="text-white py-5">
                                            <item.icon size={32} className="text-white text-2xl"/>
                                            <span className="text-white text-xl">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <SidebarGroupLabel className="text-center mb-3 text-fuchsia-700">playlist and favority</SidebarGroupLabel>
                        <SidebarMenu>
                            {items.slice(6,9).map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="text-white hover:bg-fuchsia-700 hover:text-white py-4">
                                        <a href={item.url} className="text-white py-5">
                                            <item.icon size={32} className="text-white text-2xl"/>
                                            <span className="text-white text-xl">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <SidebarGroupLabel className="text-center mb-3 text-fuchsia-700">General</SidebarGroupLabel>
                        <SidebarMenu>
                            {items.slice(9).map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="text-white hover:bg-fuchsia-700 hover:text-white py-4">
                                        <a href={item.url} className="text-white py-5">
                                            <item.icon size={32} className="text-white text-2xl"/>
                                            <span className="text-white text-xl">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
