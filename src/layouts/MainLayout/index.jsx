import React from "react";
import { Footer, Navbar } from "./components";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-32">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
