import { Outlet } from "react-router"
import CustomSidebar from "../sidebar/sidebar"
import { Sidebar } from "@/data/route"
import Header from "../header/header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const Main = () => {
  return (
    <div>
        <SidebarProvider>
        <CustomSidebar items={Sidebar} />
        <div className="border w-full">
            <div className="bg-white flex items-center">
                <SidebarTrigger className="text-black">close</SidebarTrigger>
                <Header />
            </div>
            <Outlet />
        </div>
        </SidebarProvider>
    </div>
  )
}

export default Main