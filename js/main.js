const burger = document.getElementById('burger')
const cross = document.getElementById('cross')
const menu = document.getElementById('menu')
const menuItem = document.getElementById('menuItem')

burger.onclick = () => {
    // menu.className = "menuFalse"
    if (menu.className == "menu") {
        menu.className = "menuShow"
    }
    else if (menu.className == "menuShow") {
        menu.className = "menu"
    }
}
cross.onclick = () => {
    // menu.className = "menuFalse"
    if (menu.className == "menu") {
        menu.className = "menuShow"
    }
    else if (menu.className == "menuShow") {
        menu.className = "menu"
    }
}
menuItem.onclick = () => {
    // menu.className = "menuFalse"
    if (menu.className == "menuShow") {
        menu.className = "menu"
    }
}
