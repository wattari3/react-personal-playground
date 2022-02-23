import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIsNavmenuOpenLocalStorage, setIsNavmenuOpenLocalStorage } from "../utils/localStorage";

const MainLayout = (props: { children: React.ReactNode }) => {
    const [isNavmenuOpen, setIsNavmenuOpen] = useState(getIsNavmenuOpenLocalStorage());
    const navigate = useNavigate()

    function updateNavmenuOpen(isOpen: boolean) {
        setIsNavmenuOpen(isOpen);
        setIsNavmenuOpenLocalStorage(isOpen);
    }


    function createNavmenuElement() {
        return isNavmenuOpen ? <div className='navmenu_background'>
            <div className={`navmenu_item_container ${isNavMenuSelected("/home") ? "navmenu_item_container--selected" : ""}`} onClick={() => navigate("/home")}>
                <svg className="navmenu_item_icon--home" />
                <div className="navmenu_item_title">HOME</div>
            </div>
            <div className={`navmenu_item_container ${isNavMenuSelected("/tesseract") ? "navmenu_item_container--selected" : ""}`} onClick={() => navigate("/tesseract")}>
                <div className="navmenu_item_icon--video" />
                <div className="navmenu_item_title" >OCR</div>
            </div>
            <div className={`navmenu_item_container ${isNavMenuSelected("/about") ? "navmenu_item_container--selected" : ""}`} onClick={() => navigate("/about")}>
                <div className="navmenu_item_icon--about" />
                <div className="navmenu_item_title" >ABOUT</div>
            </div>
        </div > : <></>
    }

    function isNavMenuSelected(menuPath: string) {
        return window.location.pathname.includes(menuPath);
    }

    return (
        <>
            <div className="page_background">
                <div className="header_menu_background">
                    <div className='header_menu_icon'>
                        <svg onClick={() => { updateNavmenuOpen(!isNavmenuOpen) }} />
                    </div>
                    <div className='header_menu_title' onClick={() => navigate("/home")}>
                        <svg className="header_menu_title_icon" />
                        <p>SAMPLE APP</p>
                    </div>
                    <div className='header_menu_account_icon'>
                        <svg />
                    </div>
                </div>
                <div className="content_background">
                    {createNavmenuElement()}
                    <div className="page_content_background">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainLayout;