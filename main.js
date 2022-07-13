const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.onclick = () => {
    // menu.className = "menuFalse"
    if (menu.className == "menu") {
        menu.className = "menuShow"
    }
    else if (menu.className == "menuShow") {
        menu.className = "menu"
    }
}
