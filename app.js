const btn = document.querySelector('.dice img');
const quote = document.querySelector('.quoteDetails');
const quoteContainer = document.querySelector('.quote');
const headingNumber = document.querySelector('.headingNumber');
const container = document.querySelector('.container');
const spinner = document.querySelector('.loader');

btn.addEventListener('click', () => {
    spinner.classList.add('active');
    quoteContainer.classList.add('active');
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        quote.innerText = data.slip.advice
        headingNumber.innerText = `advice #${data.slip.id}`
        spinner.classList.remove('active');
        quoteContainer.classList.remove('active');
    });


})