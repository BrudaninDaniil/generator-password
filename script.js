const butSymbolsAll = document.querySelectorAll('.symbols')

butSymbolsAll.forEach(button => {
    button.addEventListener('click', (a) => {
        if (a.target.style.borderColor !=='palevioletred' && a.target.style.backgroundColor !== '#ee9bb7' ) {
            a.target.style.borderColor = 'palevioletred';
            a.target.style.backgroundColor = '#ee9bb7'
        } else {
            a.target.style.borderColor = '#949494'
            a.target.style.backgroundColor = 'white'
        }
    })
});

const inputPass = document.querySelector('.input-pass')
const inputLenght = document.querySelector('.input-lenght-pass')
const butGenerate = document.querySelector('.but-generate')
const butSmallLetters = document.querySelectorAll('.symbols')[0]
const butUpLetters = document.querySelectorAll('.symbols')[1]
const butNumbers = document.querySelectorAll('.symbols')[2]
const butSymbols = document.querySelectorAll('.symbols')[3]
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function checkButton(button) {
    return button.style.borderColor == 'palevioletred' ? true : false ;
}

function getRandomPassword() {
    let numbers = '0123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let $ymbols = '!@#$%^&-_+='
    let allowedSymbols = ''
    let randomPassword = ''

    if (checkButton(butSmallLetters)) {
        allowedSymbols += letters ;
    }
    
    if (checkButton(butUpLetters)) {
        allowedSymbols += upLetters ;
    }

    if (checkButton(butNumbers)) {
        allowedSymbols += numbers ;
    }

    if (checkButton(butSymbols)) {
        allowedSymbols += $ymbols ;
    }
    
    for (let i = 0; i < inputLenght.value; i++) {
        randomPassword += allowedSymbols[getRandomInt(0, allowedSymbols.length-1)]

    }

    return randomPassword ;
}    

butGenerate.addEventListener('click', () => {
    inputPass.value = getRandomPassword()
})
