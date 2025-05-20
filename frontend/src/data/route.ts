import { Inbox, LucideProps, Search, Settings } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface SidebarProps{
    title: string,
    url: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}
export const Sidebar = [
  {
    title: "Inbox",
    url: "/chats",
    icon: Inbox,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]