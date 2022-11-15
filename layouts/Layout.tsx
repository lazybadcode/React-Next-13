import { ReactNode } from "react";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppNavbar />

      {children}

      <AppFooter />
    </>
  );
};

export default Layout;
