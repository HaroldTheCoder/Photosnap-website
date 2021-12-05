window.addEventListener("scroll", ()=> {
    const sideBar = document.querySelector('.gradient-bar')
    if((window.innerHeight + window.scrollY) >= document.body.scrollHeight){
        sideBar.classList.toggle("active");
    } else {
        sideBar.classList.remove("active");
    }
})