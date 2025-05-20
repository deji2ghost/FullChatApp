import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarProps } from "@/data/route";
import { Link } from "react-router-dom";

export interface CustomSidebarProps {
  items: SidebarProps[];
}

const CustomSidebar: React.FC<CustomSidebarProps> = ({ items }) => {
    
  return (
    <div>
      <Sidebar>
        <SidebarContent>
          <SidebarGroupContent>
            <SidebarGroup>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarGroupContent>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
