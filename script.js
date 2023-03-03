const butSymbols = document.querySelectorAll('.symbols')

butSymbols.forEach(button => {
    button.addEventListener('click', (a) => {
        if (a.target.style.borderColor !=='palevioletred') {
            a.target.style.borderColor = 'palevioletred';
        } else {
            a.target.style.borderColor = 'black'
        }
    })
});