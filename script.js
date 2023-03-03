const butSymbols = document.querySelectorAll('.symbols')

butSymbols.forEach(button => {
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