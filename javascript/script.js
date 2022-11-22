const bgPopup = document.querySelector('.bg-dash')
const detalheDash = document.querySelector('.receita button')
const dashIbx = document.querySelector('#sairdash')
const dashCancel = document.querySelector('.btn-dash button:nth-child(1)')

if(detalheDash) {
    detalheDash.addEventListener('click', () => {
        if(!bgPopup.classList.contains('active')) {
            bgPopup.classList.add('active')
        }
    })
}

if(dashIbx) {
    dashIbx.addEventListener('click', () => {
        if(bgPopup.classList.contains('active')) {
            bgPopup.classList.remove('active')
        }
    })
}

if(dashCancel) {
    dashCancel.addEventListener('click', () => {
        if(bgPopup.classList.contains('active')) {
            bgPopup.classList.remove('active')
        }
    })
}

const bg = document.querySelector('.bg-popup')
const btnRegistrar = document.querySelector('.registrarcaixa button')
const btnCancel = document.querySelector('.btn-group button:nth-child(1)')
const ibx = document.querySelector('#sair')

if(btnRegistrar) {
    btnRegistrar.addEventListener('click', () => {
        if(!bg.classList.contains('active')) {
            bg.classList.add('active')
        }
    })
}

if(btnCancel) {
    btnCancel.addEventListener('click', () => {
        if(bg.classList.contains('active')) {
            bg.classList.remove('active')
        }
    })
}

if(ibx) {
    ibx.addEventListener('click', () => {
        if(bg.classList.contains('active')) {
            bg.classList.remove('active')
        }
    })
}


const colabBg = document.querySelector('.bg-colab')
const colabIbx = document.querySelector('#saircl')
const btnCadastrar = document.querySelector('.bt button')
const colabCancel = document.querySelector('.btn-colabp button:nth-child(1)')

if(btnCadastrar) {
    btnCadastrar.addEventListener('click', () => {
        if(!colabBg.classList.contains('active')) {
            colabBg.classList.add('active')
        }
    })
}

if(colabIbx) {
    colabIbx.addEventListener('click', () => {
        if(colabBg.classList.contains('active')) {
            colabBg.classList.remove('active')
        }
    })
}

if(colabCancel) {
    colabCancel.addEventListener('click', () => {
        if(colabBg.classList.contains('active')) {
            colabBg.classList.remove('active')
        }
    })
    
}

const fornBg = document.querySelector('.bg-forn')
const fornIbx = document.querySelector('#sairforn')
const fornBtn = document.querySelector('.tb button')
const fornCancel = document.querySelector('.btn-forn button:nth-child(1)')

if(fornBtn) {
    fornBtn.addEventListener('click', () => {
        if(!fornBg.classList.contains('active')) {
            fornBg.classList.add('active')
        }
    })
}

if(fornIbx) {
    fornIbx.addEventListener('click', () => {
        if(fornBg.classList.contains('active')) {
            fornBg.classList.remove('active')
        }
    })
}

if(fornCancel) {
    fornCancel.addEventListener('click', () => {
        if(fornBg.classList.contains('active')) {
            fornBg.classList.remove('active')
        }
    })
}
