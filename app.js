document.addEventListener('click', e => {
    // options btn
    if(e.target.id === 'accessOptions'){
        e.preventDefault()
        e.composedPath()[2].children[1].classList.replace('d-none', 'd-block')
        
        document.querySelector('#closeMenus').classList.replace('d-none', 'd-block')

        // left
        if (e.composedPath()[2].children[1].getBoundingClientRect().left < document.body.getBoundingClientRect().left) {
            e.composedPath()[2].children[1].style.right = 'auto'
            e.composedPath()[2].children[1].style.left = '0px'
        }
    }

    // bg close menu options direct access
    if(e.target.id === 'closeMenus'){
        document.querySelectorAll('#options').forEach(btn => {
            btn.classList.replace('d-block', 'd-none')
        })

        e.target.classList.replace('d-block', 'd-none')
    }

    // open menu icons nav
    if(e.target.id === 'btnNavMenu') {
        document.querySelector('#menuIcons').classList.toggle('d-none')
        document.querySelector('#menuIcons').classList.toggle('d-block')
        e.target.classList.toggle('bg-btn-nav-active')

        document.querySelector('#closeMenusNavs').classList.toggle('d-none')
        document.querySelector('#closeMenusNavs').classList.toggle('d-block')
    }

    // bg close menu icons nav
    if(e.target.id === 'closeMenusNavs'){
        document.querySelector('#menuIcons').classList.replace('d-block', 'd-none')
        document.querySelector('#btnNavMenu').classList.remove('bg-btn-nav-active')

        e.target.classList.replace('d-block', 'd-none')
    }

    // btn edit ripple effect
    if (e.target.id === 'btnEdit') {
        const $span = document.createElement('span')
        $span.id = 'rippleBg'

        $span.classList.add('ripple')
        $span.style.top = `${e.offsetY}px`
        $span.style.left = `${e.offsetX}px`
        e.target.append($span)
        setTimeout(() => {
            e.target.removeChild($span)
        }, 500);
    }

    // delete direct access
    if (e.target.id === 'btnDeleleDirectAccess') {
        e.composedPath()[4].removeChild(e.composedPath()[3])
        document.querySelector('#closeMenus').classList.replace('d-block', 'd-none')
    }
})

document.querySelector('#btnAccountMenu').addEventListener('mouseover', () => {
    document.querySelector('#googleAccountPopup').style.opacity = '1'
})

document.querySelector('#btnAccountMenu').addEventListener('mouseleave', () => {
    document.querySelector('#googleAccountPopup').style.opacity = '0'
})

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'hidden') {
        document.querySelector('#menuIcons').classList.replace('d-block', 'd-none')
        document.querySelector('#btnNavMenu').classList.remove('bg-btn-nav-active')
        document.querySelector('#closeMenusNavs').classList.replace('d-block', 'd-none')
    }
});

document.querySelectorAll('#menuIcons ul li > a').forEach(a => {
    a.id = 'btnEdit'
})