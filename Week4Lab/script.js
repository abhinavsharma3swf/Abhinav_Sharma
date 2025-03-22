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
    const lname = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    const address1 = document.getElementById('address1').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipcode = document.getElementById('zipcode').value;
    const tellme = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;

    const marital = document.getElementById('radios').value;
    let mar_value;
    if( marital === 'yes') {
        mar_value = document.getElementById('rd1').value;
    } else {
        mar_value = document.getElementById('rd2').value;
    }




    let isValid = true;

    document.getElementById("fname-error").innerText = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("age-error").textContent = "";

    const nameRegex = /^[a-zA-Z]{1,30}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const numberRegex = /[0-9]$/;

    if (!nameRegex.test(name)) {
        document.getElementById("fname-error").innerText = "First name must be entered and 1-30 letters.";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById("email-error").innerText = "Please enter a valid email";
        isValid = false;
    }

    if (age <21 || age > 99) {
        document.getElementById("age-error").innerText = "Age must be in between 21-99";
        isValid = false;
    }

    if (!numberRegex.test(phone)) {
        document.getElementById("phone-error").innerText = "Please enter a phone number in 111-111-1111 format";
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted Successfully");
        let formdata = {name,lname,address,address1,city,state,zipcode,email,phone,age,mar_value,tellme}
        console.log(formdata);
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