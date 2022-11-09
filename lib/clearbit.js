const authorization = "Bearer xxx";
const input = document.querySelector('#clearbitEmail')

const button = document.querySelector('#clearbitSubmit')
const url = "https://person.clearbit.com/v1/people/email/"

const userName = document.querySelector('#userName')
const userEmail = document.querySelector('#userEmail')
const userTitle = document.querySelector('#userTitle')
const userLocation = document.querySelector('#userLocation')

const addInfo = (value, position) => {
    position.insertAdjacentHTML('afterbegin', value)
}

const getInfo = () => {
    fetch(`${url}${input.value}`, {
        headers: { authorization: authorization }
    })
        .then(response => response.json())
        .then(data => {
            addInfo(data.name.fullName, userName)
            addInfo(data.email, userEmail)
            addInfo(data.employment.title, userTitle)
            addInfo(data.location, userLocation)
        })
}

button.addEventListener('click', getInfo)
