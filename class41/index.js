
const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")
const errorMessage = document.querySelector("#error-message")


const LIMIT = 150

charCount.textContent = `${LIMIT} characters remaining`

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    // const password = document.querySelector("#password").value

if(username.value.trim().length === 0){
    console.log("Enter your name");
    
   errorMessage.textContent = "Please enter your name"
   return
}

    const email = document.querySelector("#email").value

    console.log({ username : username.value , password : password.value, email});
})


// bio.addEventListener("input",  (e) => {
//     const remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} characters remaining`;
// })


// // username.addEventListener("change",  (e) => {
// //     console.log("change event", username.value);
// // })


// // username.addEventListener("input",  (e) => {
// //     console.log("input event", username.value);

// // })


// checkbox.addEventListener("change",  (e) => {
//     console.log(checkbox.checked);

// })

// country.addEventListener("change",  (e) => {
//     console.log(country.value);

// })

// username.addEventListener("focus",  (e) => {
//     console.log("focus");

// })


// username.addEventListener("blur",  (e) => {
//     console.log("blur");

// })



// password.addEventListener("focus",  (e) => {
//     passwordHint.classList.remove("hidden")

// })


// password.addEventListener("blur",  (e) => {
//     passwordHint.classList.add("hidden")


// })
