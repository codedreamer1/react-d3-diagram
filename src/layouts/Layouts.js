import React from "react";
import Footer from "./Footer/Footer";
import MainHeader from "./Header/Header"

export default function  Layouts({children}){
    return(
        <div>
            <MainHeader />
            {children}
            {/* <Footer /> */}
        </div>
    )
}