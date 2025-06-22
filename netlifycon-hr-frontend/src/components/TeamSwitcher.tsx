import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <img
            src={
              "https://www.logoai.com/uploads/output/2023/11/08/8c7ea8425720a4f5fb1b3a34bd20c7a5.jpg"
            }
            className="w-12 h-12 object-cover"
          />
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
