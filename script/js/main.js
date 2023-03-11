// Header Code
// Toggle Open Menu
const $menuBtn = document.querySelector(".menu-button");
const $mainNav = document.querySelector(".main-nav");
const $bag = document.querySelector(".bag")

// const $ = document.querySelector.bind(document)
// const $ = document.querySelectorAll.bind(document)


function clickMenuButton () {
    if ($menuBtn.classList.contains("-active")) {
        $menuBtn.classList.remove("-active")
        $mainNav.classList.remove("-active")
        $bag.classList.remove("-hidden")
    } else {
        $menuBtn.classList.add("-active")
        $mainNav.classList.add("-active")
        $bag.classList.add("-hidden")
    }
};

$menuBtn.addEventListener("click", clickMenuButton);

// Toggle Change Product

const $listOption = document.querySelectorAll(".list-option");
let $listOptionActive = document.querySelector(".list-option.-active");
let $productActive = document.querySelector(".product.-active")

function clickInListOption() {
    let $listOptionClicked = this;
    $listOptionActive.classList.remove("-active");
    $listOptionClicked.classList.add("-active");
    $listOptionActive = $listOptionClicked;

    $productActive.classList.remove("-active")
    let idProduct = $listOptionClicked.querySelector("a").getAttribute("href")
    let $targetProduct = document.querySelector(idProduct)
    $targetProduct.classList.add("-active")
    $productActive = $targetProduct
}

$listOption.forEach(function(item) {
    item.addEventListener("click", clickInListOption)
})


