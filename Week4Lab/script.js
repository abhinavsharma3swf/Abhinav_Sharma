let menu = [];
    menu[0] = {pic: './Assests/Dosa.jpg',alt:"Masala Dosa", desc: "A dosa is a popular Indian dish that is a thin, crispy made from fermented rice and urad dal (black gram) batter. It's typically served with a variety of accompaniments, such as sambar (a spicy lentil soup) and coconut chutney", price: "$15.99"}
    menu[1] = {pic: './Assests/Butterchicken.jpg', alt:"Butter Chicken", desc: "Butter chicken, is a rich and flavorful North Indian dish that has become beloved worldwide. It's made with tender chicken pieces cooked in a creamy, mildly spiced tomato-based sauce.", price: "$20.99" }
    menu[2] = {pic: './Assests/Dalmakhani.webp', desc:"Dal Makhani is a rich, hearty, and flavorful North Indian dish made from whole black lentils (known as urad dal) and kidney beans (rajma). It's cooked with a combination of butter, cream, and a blend of aromatic spices, giving it a creamy, smooth texture and a rich taste.", price: "$14.99"}
    menu[3] = {pic: './Assests/Chickencurry.jpg', desc: "Chicken curry is a flavorful and aromatic dish made by simmering chicken in a spiced gravy or sauce. The curry is typically made with a blend of ingredients like onions, garlic, ginger, tomatoes, and a variety of spices such as turmeric, cumin, coriander, garam masala, and chili powder.", price: "$16.99"}
    menu[4] = {pic: './Assests/Naan.jpeg', alt:"Naan", desc: "Butter chicken, is a rich and flavorful North Indian dish that has become beloved worldwide. It's made with tender chicken pieces cooked in a creamy, mildly spiced tomato-based sauce.", price: "$5.99"}

let count = -1;

        function previous() {
            count--;
            if(count <0)
                count = menu.length-1;
            loadImage();
        }

        function showNext() {
            count++;
            if(count >=menu.length)
                count=0;
            loadImage();
}


function loadImage() {

    let img = document.getElementById('menuImage');
    img.src = menu[count].pic;
    img.alt = menu[count].alt;
    document.getElementById('desc').textContent= menu[count].desc;
    document.getElementById('price').textContent  = menu[count].price;
}


//Hiring form validation script//

document.getElementById('btn_submit').addEventListener('click', (e)=> {
    e.preventDefault()

    const name = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;

    let isValid = true;

    document.getElementById("fname-error").innerText = "First name must be entered and 1-30 letters.";
    document.getElementById("email-error").textContent = "Please enter a valid email";
    document.getElementById("phone-error").textContent = "Please enter a phone number in 111-111-1111 format";
    document.getElementById("age-error").textContent = " Age must be in between 21-99";

    const nameRegex = /^[a-zA-Z]{1,30}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const numberRegex = /\b([0-9]|10)\b$/;

    if (!nameRegex.test(name)) {
        document.getElementById("fname-error").textContent = "";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "";
        isValid = false;
    }

    if (!numberRegex.test(age)) {
        document.getElementById("age-error").textContent = "";
        isValid = false;
    }

    if (!numberRegex.test(phone)) {
        document.getElementById("phone-error").textContent = "";
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted Successfully");
    }

});







//const carousel = new bootstrap.Carousel('myCarousel')


// validateInput();
//
// const validateInput = () =>{
//     const age = document.forms["form"]["age"].value;
//     if(age < 21 || age >99){
//         alert("You cannot be younger than 18 or older than 99");
//     }