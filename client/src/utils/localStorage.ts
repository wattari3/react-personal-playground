
export function setIsNavmenuOpenLocalStorage(isOpen: boolean) {
    localStorage.setItem("isNavmenuOpen", isOpen.toString());
}

export function getIsNavmenuOpenLocalStorage(): boolean {
    return localStorage.getItem("isNavmenuOpen") === "true";
}