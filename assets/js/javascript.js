
let galleryActiveMobile = false;
let galleryActivePC = true;
let runOnlyOnce = true;










// ===============NAVBAR==============

function navBar(id) {
    const nav = document.querySelector(id);
    const menuButton = nav.querySelector("#menu-btn");
    const navItems = nav.querySelector(".nav-items-wrapper");
    const navLine = navItems.querySelector(".nav-line2");

    menuButton.addEventListener("click", () => {
        const visibility = menuButton.getAttribute("data-visible");

        if (visibility === "false") {
            menuButton.setAttribute("data-visible", true);
            navItems.setAttribute("data-visible", true);
            navLine.setAttribute("data-visible", true);
        } else {
            menuButton.setAttribute("data-visible", false);
            navItems.setAttribute("data-visible", false);
            navLine.setAttribute("data-visible", false);
        }
    })
}


navBar(".navbar")

// ===============NAVBAR==============


// ===============GALLERY PC==============

function galleryDesktop(id) {
    let gallery = document.querySelector(id);
    let actualGridClass = gallery.className;
    let pics = gallery.querySelectorAll(".hpics");




    function picfx(pic, classname) {
        pic.querySelector("img").classList.add("img-active");
        gallery.classList.replace(actualGridClass, classname);
        actualGridClass = gallery.className;
    }

    function standard(classname) {
        gallery.classList.replace(actualGridClass, classname);
        actualGridClass = gallery.className;
    }

    function picfxRemover(pic) {
        pic.querySelector("img").classList.remove("img-active");
    }

    // image slide fx + shadow fx
    for (let i = 1; i <= pics.length; i++) {

        pics[i - 1].addEventListener("mouseover", function () { picfx(pics[i - 1], "layout" + i) })
        pics[i - 1].addEventListener("mouseout", function () { picfxRemover(pics[i - 1]) })

    }

    // return to standard layout
gallery.addEventListener("mouseout", function () { standard("layout3") })
}





// ===============GALLERY PC==============






// ===============MOBILE GALLERY==============
function mobileGallery(id) {
    let slider = document.querySelector(id);
    let galleryContent = slider.querySelector("#highlight-pics");
    let pictures = galleryContent.querySelectorAll(".hpics");
    let nextButton = slider.querySelector(".right-bkg");
    let previousButton = slider.querySelector(".left-bkg");
    let counterButtonsWrapper = slider.querySelector(".slider-buttons")
    let counterButtons


    const state = {
        startingPoint: 0,
        currentPoint: 0,
        savedPosition: 0,
        movement: 0,
        currentPicIndex: 0
    }


    function translateSlide({ position }) {
        if (galleryActiveMobile) {
            state.savedPosition = position
            galleryContent.style.transform = `translateX(${position}px)`
        }
    }

    function setVisibleSlide({ index, animate }) {
        if (galleryActiveMobile) {
            if (index === 0 || index === pictures.length - 1) {
                index = state.currentPicIndex
            }
            const pic = pictures[index]
            const picWidth = pic.clientWidth
            const position = index * picWidth
            state.currentPicIndex = index
            galleryContent.style.transition = animate === true ? "transform 1000ms ease-out" : "none"
            translateSlide({ position: -position })
            activeCounterButton({ index })
        }
    }

    function nextSlide() {
        setVisibleSlide({ index: state.currentPicIndex + 1, animate: true })
    }

    function previousSlide() {
        setVisibleSlide({ index: state.currentPicIndex - 1, animate: true })
    }

    function createCounterButtons() {

        if (runOnlyOnce) {

            pictures.forEach(function () {
                const counterButton = document.createElement("button")
                counterButton.classList.add("slide-counter-button")
                counterButton.dataset.slide = "counter-button"
                counterButtonsWrapper.append(counterButton)
                console.log("lalo")
                runOnlyOnce = false;

            })
        }
    }

    function activeCounterButton({ index }) {
        const picItem = pictures[index]
        const dataIndex = Number(picItem.dataset.index)
        const counterButton = counterButtons[dataIndex]
        counterButtons.forEach(function (counterButtonItem) {
            counterButtonItem.classList.remove("active")
        })
        if (counterButton) counterButton.classList.add("active")
    }

    function createPicClones() {
        const firstPic = pictures[0].cloneNode(true)
        firstPic.classList.add("slide-cloned")
        // firstPic.dataset.index = pictures.length

        const secondPic = pictures[1].cloneNode(true)
        secondPic.classList.add("slide-cloned")
        // secondPic.dataset.index = pictures.length + 1


        const lastPic = pictures[pictures.length - 1].cloneNode(true)
        lastPic.classList.add("slide-cloned")
        // lastPic.dataset.index = -1


        const penultimatePic = pictures[pictures.length - 2].cloneNode(true)
        penultimatePic.classList.add("slide-cloned")
        // penultimatePic.dataset.index = -2

        galleryContent.append(firstPic)
        galleryContent.append(secondPic)
        galleryContent.prepend(lastPic)
        galleryContent.prepend(penultimatePic)

        pictures = galleryContent.querySelectorAll(".hpics");
    }





    //DESKTOP FUNCTION EVENTS
    function onMouseDown(event, index) {
        if (galleryActiveMobile) {
            const pic = event.currentTarget
            state.startingPoint = event.clientX
            state.currentPoint = event.clientX - state.savedPosition
            state.currentPicIndex = index
            galleryContent.style.transition = "none"

            pic.addEventListener("mousemove", onMouseMove)
        }
    }

    function onMouseMove(event) {
        state.movement = event.clientX - state.startingPoint
        const position = event.clientX - state.currentPoint
        translateSlide({ position: position })
    }

    function onMouseUp(event) {
        const ptsToMove = event.type.includes("touch") ? 50 : 150
        const pic = event.currentTarget
        if (state.movement < -ptsToMove) {
            nextSlide()
        } else if (state.movement > ptsToMove) {
            previousSlide()
        } else {
            setVisibleSlide({ index: state.currentPicIndex, animate: true })
        }
        pic.removeEventListener("mousemove", onMouseMove)
    }


    //MOBILE FUNCTION EVENTS
    function onTouchStart(event, index) {
        event.clientX = event.touches[0].clientX
        onMouseDown(event, index)
        const pic = event.currentTarget
        pic.addEventListener("touchmove", onTouchMove)

    }

    function onTouchMove(event) {
        event.clientX = event.touches[0].clientX
        onMouseMove(event)
    }

    function onTouchEnd(event) {
        onMouseUp(event)
        const pic = event.currentTarget
        pic.removeEventListener("touchmove", onTouchMove)
    }


    function onCounterButtonClick(index) {
        setVisibleSlide({ index: index + 2, animate: true })
    }

    function onTransitionEnd() {

        if (state.currentPicIndex === pictures.length - 2) {
            setVisibleSlide({ index: 2, animate: false })

        } else if (state.currentPicIndex === 1) {
            setVisibleSlide({ index: pictures.length - 3, animate: false })
        }
    }
    //FOREACH
    function setListeners() {

        counterButtons = slider.querySelectorAll('[data-slide="counter-button"]')

        counterButtons.forEach(function (counterButton, index) {
            counterButton.addEventListener("click", function (event) {
                onCounterButtonClick(index)
            })
        })

        pictures.forEach(function (pic, index) {
            pic.addEventListener("dragstart", (event) => {
                event.preventDefault()

            })
            //DESKTOP
            pic.addEventListener("mousedown", function (event) {
                onMouseDown(event, index)
            })

            pic.addEventListener("mouseup", onMouseUp);

            //MOBILE
            pic.addEventListener("touchstart", function (event) {
                onTouchStart(event, index)
            })

            pic.addEventListener("touchend", onTouchEnd);

        })

        nextButton.addEventListener("click", nextSlide)
        previousButton.addEventListener("click", previousSlide)
        galleryContent.addEventListener("transitionend", onTransitionEnd)
    }
    createCounterButtons()
    createPicClones()
    setListeners()
    setVisibleSlide({ index: 2, animate: false })

}




// ===============MOBILE GALLERY==============

// ===============LOGIN FORM==============

function loginModal() {

    const loginBtn = document.querySelector(".nav-login-btn")
    const registerBtn = document.querySelector(".nav-register-btn")
    const loginWrapper = document.querySelector("#sign-in")
    const loginContainer = document.querySelector(".sign-in-c")
    const loginBackground = document.querySelector(".background-login")
    const closeBtn = document.querySelector(".close-modal-btn")
    const createAccountBtn = document.querySelector(".create-account-btn")
    const accountRecoveryBtn = document.querySelector(".account-recovery-btn")
    const returnLoginBtn = document.querySelector(".login-now")
    const returnBtn = document.querySelector(".returnLogin-btn")

    function modalIsOpen() {
        const x = loginWrapper.dataset.visible === "false" ? false : true;
        return x
    }


    function reSizeAnimationOff() {
        loginContainer.style.transition = "transform 300ms ease-in-out, opacity 300ms ease-in-out, width 0ms ease-in-out, height 0ms ease-in-out"
    }

    function reSizeAnimationOn() {
        loginContainer.style.transition = "transform 300ms ease-in-out, opacity 300ms ease-in-out, width 800ms ease-in-out, height 600ms ease-in-out"
    }

    function openModal() {
        loginWrapper.dataset.visible = true;
    }

    function closeModal() {
        loginWrapper.dataset.visible = false;
    }
    function setRegisterForm() {
        if (modalIsOpen()) reSizeAnimationOn()
        loginContainer.dataset.form = "register";
        returnBtn.style.display = "inline";
    }

    function setLoginForm() {
        if (modalIsOpen()) reSizeAnimationOn()
        loginContainer.dataset.form = "login";
        returnBtn.style.display = "none";
    }

    function setAccountRecoveryForm() {
        if (modalIsOpen()) reSizeAnimationOn()
        loginContainer.dataset.form = "account-recovery";
        returnBtn.style.display = "inline";
    }

    function openLogin() {
        reSizeAnimationOff()
        setLoginForm()
        openModal()
    }

    function openRegister() {
        reSizeAnimationOff()
        setRegisterForm()
        openModal()
    }

    loginBtn.addEventListener("click", openLogin)
    registerBtn.addEventListener("click", openRegister)

    loginBackground.addEventListener("click", closeModal)
    closeBtn.addEventListener("click", closeModal)

    createAccountBtn.addEventListener("click", setRegisterForm)
    returnLoginBtn.addEventListener("click", setLoginForm)
    accountRecoveryBtn.addEventListener("click", setAccountRecoveryForm)
    returnBtn.addEventListener("click", setLoginForm)
}

loginModal();

















// ===============LOGIN FORM==============










//removeCloned
function removeClonedSlides() {
    const element = document.querySelectorAll(".slide-cloned")
    element.forEach(function (cloned) {
        cloned.remove();
    })
}




//mediaquery()
function mediaQuery(media) {
    if (media.matches) {
        const galleryContent = document.querySelector("#highlight-pics")
        galleryActiveMobile = false
        galleryContent.style = "none"
        removeClonedSlides()
        galleryActivePC = true
        galleryDesktop("#highlight-pics")
    } else {
        galleryActiveMobile = true
        galleryActivePC = false
        galleryDesktop("#highlight-pics")
        mobileGallery("#slider")
    }
}

var media = window.matchMedia("(min-width: 780px)")

mediaQuery(media)

media.addEventListener("change", function () {
    mediaQuery(media);
})