let darkMode = false;

function changeDarkMode() {
    if (darkMode){
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "black")
        document.documentElement.style.setProperty("--lien-color", "red")
        document.documentElement.style.setProperty("--span-color", "#6d8bab")
        document.documentElement.style.setProperty("--fond-sae","#ecd9d5")
        document.documentElement.style.setProperty("--barre","#f8ab9b")
        document.documentElement.style.setProperty("--background-color", "#efe7e5")
        document.getElementById("dark-light-mode").innerHTML = "Dark Mode"
    }else{
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "#F5F7FA")
        // document.documentElement.style.setProperty("--text-color", "white")
         document.documentElement.style.setProperty("--lien-color", "red")
        // document.documentElement.style.setProperty("--lien-color", "white")
        document.documentElement.style.setProperty("--span-color", "#ecd9d5")
        // document.documentElement.style.setProperty("--span-color", "#ecd9d5")
         document.documentElement.style.setProperty("--fond-sae","#3E4C59")
        // document.documentElement.style.setProperty("--fond-sae","#5a5f7a")
         document.documentElement.style.setProperty("--barre","#7B8794")
        // document.documentElement.style.setProperty("--barre","#898da5")
         document.documentElement.style.setProperty("--background-color", "#1F2933")
        // document.documentElement.style.setProperty("--background-color", "	#2a314e")#4a6582
        document.getElementById("dark-light-mode").innerHTML = "Light Mode"
    }
}

const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav_links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

