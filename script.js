const navItems = document.getElementsByClassName("navItem");
const underlines = document.getElementsByClassName("underline");

Array.from(navItems).forEach((navItem, index) => {
    let timeoutId;

    navItem.addEventListener("mouseover", () => {
        clearTimeout(timeoutId);
        underlines[index].style.height = "1px";
        underlines[index].style.width = "40px";
    });

    navItem.addEventListener("mouseout", () => {
        underlines[index].style.width = "1px";
        timeoutId = setTimeout(() => {
            underlines[index].style.height = "unset";
        }, 310);
    });
});
