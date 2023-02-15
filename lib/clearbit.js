const apiKey = 'Bearer xxx';

const form = document.querySelector("#clearbitForm");
const mail = document.querySelector("#clearbitEmail");

const nameField = document.querySelector("#userName");
const emailField = document.querySelector("#userEmail");
const twitterField = document.querySelector("#userTwitter");
const locationField = document.querySelector("#userLocation");

// Get the value from the form (not every letter)
form.addEventListener("submit", (event) => {
  fetch(`https://person.clearbit.com/v1/people/email/${mail.value}`, {
    headers: {authorization: apiKey}
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.name.fullName);
      nameField.innerHTML = data.name.fullName;
      emailField.innerHTML = mail.value;
      twitterField.innerHTML = data.twitter.handle;
      locationField.innerHTML = data.location;
    })
})


// Fetch from the ClearBit API



// Parse response
// Go over each element of the object
// Put each element in the right place
