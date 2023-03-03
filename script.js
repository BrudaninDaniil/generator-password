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
inputPass.value = getRandomPassword()
const inputLenght = document.querySelector('.input-lenght-pass')
const butGenerate = document.querySelector('.but-generate')
const butSmallLetters = document.querySelectorAll('.symbols')[0]
const butUpLetters = document.querySelectorAll('.symbols')[1]
const butNumbers = document.querySelectorAll('.symbols')[2]
const butSymbols = document.querySelectorAll('.symbols')[3]
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;



function getRandomPassword() {
    let numbers = '123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let $ymbols = '!@#$%^&'
    let randomPassword

    let randomletters, randomUpLetters, randomNumbers, random$ymbols

    for (let i = 0; i <= inputLenght.value; i++) {
        
    }
    return 'dfagrehashaesdfsdfh'
}
