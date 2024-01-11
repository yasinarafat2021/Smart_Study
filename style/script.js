let header = document.querySelector("header");
window.onscroll = () => {
    /*-----Sticky Header-----*/
    let pos = document.createElement.scrollTop;
    if(pos > 0) {
        header.classList.add("sticky");
    }
else {
    header.classList.remove("sticky");
}
};