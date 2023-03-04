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

function getRandomPassword() {
    let numbers = '0123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let $ymbols = '!@#$%^&-_+='
    let randomPassword = ''
    let randomPassword2 = ''
    let randomletters, randomUpLetters, randomNumbers, random$ymbols

    for (let i = 0; i < inputLenght.value; i++) {
        if (butSmallLetters.style.borderColor == 'palevioletred' 
        && butUpLetters.style.borderColor !== 'palevioletred' 
        && butNumbers.style.borderColor !== 'palevioletred' 
        && butSymbols.style.borderColor !== 'palevioletred' ) {
            randomPassword = randomPassword + letters[Math.floor(Math.random() * 26)];
        } 
        if (butUpLetters.style.borderColor == 'palevioletred' 
        && butSmallLetters.style.borderColor !== 'palevioletred' 
        && butNumbers.style.borderColor !== 'palevioletred' 
        && butSymbols.style.borderColor !== 'palevioletred' ) {
            randomPassword += upLetters[Math.floor(Math.random() * 26)];
        }
        if (butNumbers.style.borderColor == 'palevioletred' 
        && butUpLetters.style.borderColor !== 'palevioletred' 
        && butSmallLetters.style.borderColor !== 'palevioletred' 
        && butSymbols.style.borderColor !== 'palevioletred' ) {
            randomPassword += numbers[Math.floor(Math.random() * 10)];
        }
        if (butSymbols.style.borderColor == 'palevioletred' 
        && butUpLetters.style.borderColor !== 'palevioletred' 
        && butSmallLetters.style.borderColor !== 'palevioletred' 
        && butNumbers.style.borderColor !== 'palevioletred' ) {
            randomPassword += $ymbols[Math.floor(Math.random() * 11)];
        } 
        if (butSmallLetters.style.borderColor == 'palevioletred' 
        && butUpLetters.style.borderColor == 'palevioletred' 
        && butNumbers.style.borderColor !== 'palevioletred' 
        && butSymbols.style.borderColor !== 'palevioletred' ) {
            if (i % 2 == 0) {
                i < inputLenght / 2;
                randomPassword += upLetters[Math.floor(Math.random() * 26)] + letters[Math.floor(Math.random() * 26)];
            }
        }
        if (butSmallLetters.style.borderColor == 'palevioletred' 
        && butUpLetters.style.borderColor !== 'palevioletred' 
        && butNumbers.style.borderColor == 'palevioletred' 
        && butSymbols.style.borderColor !== 'palevioletred' ) {
            if (i % 2 == 0) {
                i < inputLenght / 2;
                randomPassword += numbers[Math.floor(Math.random() * 10)] + letters[Math.floor(Math.random() * 26)];
            } 
            console.log(randomPassword);
        }
        if (butSmallLetters.style.borderColor == 'palevioletred' 
        && butUpLetters.style.borderColor == 'palevioletred' 
        && butNumbers.style.borderColor == 'palevioletred' 
        && butSymbols.style.borderColor !== 'palevioletred' ) {
            randomPassword += numbers[Math.floor(Math.random() * 10)] + letters[Math.floor(Math.random() * 26)] + upLetters[Math.floor(Math.random() * 26)];
        }


    }    
    return randomPassword ;
}    


butGenerate.addEventListener('click', () => {
    inputPass.value = getRandomPassword()
})


