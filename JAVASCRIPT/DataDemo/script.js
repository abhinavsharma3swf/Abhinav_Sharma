let form = document.getElementsByTagName("form")[0]
form.addEventListener("submit", (event) =>{
    event.preventDefault();


    let username =  document.getElementById("userName").value
    let password =  document.getElementById("pw").value
    let areMarried =  document.querySelector('input[name="isMarried"]:checked').value

    let person = {
        username: username,
        password: password,
        areMarried: areMarried
    }

    console.log(event.target[0].value);
let str = JSON.stringify(person);
console.log(person)

// fetch(endpoint,
//     {method: "POST"})
console.log(str)
    username.value=""
})