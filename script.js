const navItems = document.getElementsByClassName("navItem");
const underlines = document.getElementsByClassName("underline");
const titleColorChange = document.getElementById("titleColorChange");

Array.from(navItems).forEach((navItem, index) => {
    let timeoutId;

    navItem.addEventListener("mouseover", () => {
        clearTimeout(timeoutId);
        underlines[index].style.height = "1px";
        underlines[index].style.width = "35px";
    });

    navItem.addEventListener("mouseout", () => {
        underlines[index].style.width = "1px";
        timeoutId = setTimeout(() => {
            underlines[index].style.height = "unset";
        }, 200);
    });
});




// colors 
const first = "#af0029";
const second = "#d62828";
const third = "#ef476f";
const forth = "#a4133c"; 
const fifth = "#d90429";

const randomNumber = () => {
    return Math.floor(Math.random() * 6);
}

setInterval(() => { // change shops's "op" color
    
    switch (randomNumber()) {
        case 1:
            titleColorChange.style.color = first;
            break;
        case 2: 
            titleColorChange.style.color = second;
            break;
        case 3: 
            titleColorChange.style.color = third;
            break;
        case 4:
            titleColorChange.style.color = forth;
            break;
        case 5:
            titleColorChange.style.color = fifth;
            break;
    }

}, 100);





// parallax effect
document.addEventListener('mousemove', function(e) {
    const elements = document.getElementsByClassName("parallaxElement");
    const speed = 0.05;

    Array.from(elements).forEach(element => {
        const x = (window.innerWidth / 2 - e.pageX) * speed;
        const y = (window.innerHeight / 2 - e.pageY) * speed;

        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// open navItem
Array.from(navItems).forEach((element) => {
    element.addEventListener("click", () => {

    })
})