const plus = document.querySelectorAll ('.plus')
const minus = document.querySelectorAll ('.minus')
const content = document.querySelectorAll ('.content')
const title = document.querySelectorAll ('.tit')

    for (let i = 0; i<plus.length; i++) {
        plus[i].addEventListener('click', () => {
            plus[i].classList.toggle("hide")
            minus[i].classList.toggle("hide")
            content[i].classList.toggle("hide")
        })
    }

    for (let i=0; i<minus.length; i++) {
        minus[i].addEventListener('click', () => {
            minus[i].classList.toggle("hide")
            plus[i].classList.toggle("hide")
            content[i].classList.toggle("hide")
        })
    }

    for (let i=0; i<title.length; i++) {
        title[i].addEventListener('click', () => {
            minus[i].classList.toggle("hide")
            plus[i].classList.toggle("hide")
            content[i].classList.toggle("hide")
        })
    }