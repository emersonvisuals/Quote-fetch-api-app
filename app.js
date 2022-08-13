const btn = document.querySelector('.dice img');
const quote = document.querySelector('.quoteDetails');
const headingNumber = document.querySelector('.headingNumber');
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        quote.innerText = data.slip.advice
        headingNumber.innerText = `advice #${data.slip.id}`
    })
})