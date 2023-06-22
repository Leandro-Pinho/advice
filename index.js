const message = document.getElementById('message')
const id = document.querySelector('span')
const button = document.getElementById('button')

button.addEventListener('click', () => {
    searchAdvice()
})


document.addEventListener('DOMContentLoaded', e => {
    searchAdvice()
}) 



const searchAdvice = async () => {

    try {
        const url = `https://api.adviceslip.com/advice`;

        const response = await fetch(url);
        const data = await response.json();
        const results = data.slip;

        advices(results)

    } catch (error) {
        console.log(error)
    }
}


const advices = results => {

    const p = document.createElement('p')
    p.innerHTML = `${results.advice}`

    const span = document.createElement('span')
    span.innerHTML = `${results.id}`

    id.append(span)
    message.append(p)
}

