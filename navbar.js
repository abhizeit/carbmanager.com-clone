function showMenu() {
  let mobileview = document.querySelector(".mobile-access-btn");
  let data = document.getElementById("nav");
  let mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu.style.display == "none") {
    mobileMenu.style.display = "block";
    mobileview.innerHTML=null;
    mobileview.append(data);
  } else {
    mobileMenu.style.display = "none";
  }
}