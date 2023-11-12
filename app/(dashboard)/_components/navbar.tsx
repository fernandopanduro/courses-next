import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-transparent shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
