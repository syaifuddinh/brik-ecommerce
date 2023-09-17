import React from "react";
import Navbar from "./navbar";

type LayoutType = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
    return (
        <div className="main-layout-container">
            <Navbar />
            <div className="layout-container">
                { children }
            </div>
        </div>
    )
}

export default Layout;