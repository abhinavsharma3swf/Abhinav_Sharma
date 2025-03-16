const BASEURL = "https://dog.ceo/api/breed"
const urlEnd = "/images/random";
let route = "s/image/random"

let imgArr=[];
const maxlength=10;
let currentImage = 0;


function updateImageArray(image){
    if(imgArr.length >= maxlength) {
        imgArr.shift();
    }
    imgArr.push(image);
    currentImage = imgArr.length -1;
}


let button = document.getElementsByTagName("button")
button[0].addEventListener("click", () => {
    let endpoint = `${BASEURL}${route}`;
    if(document.getElementById("breed").value){
        endpoint = `${BASEURL}/${document.getElementById("breed").value}${urlEnd}`;
    }
    console.log(endpoint)
    fetch(endpoint)
        .then(data => {
            console.log(data)
            if(data.ok) {
                let result = data.json()
                return result;
            } else{
                throw Error ("Error")
            }
        })

        .then(parsedData => {
            let img = document.querySelector("img")
            console.log(parsedData)
            img.setAttribute("src", parsedData.message)
            updateImageArray(parsedData.message);
            updateNavigationInfo();
        })
        .catch(error => {
            console.log(error)
        })
})


// Update the displayed navigation info
function updateNavigationInfo() {
    document.getElementById("info").innerHTML = `${currentImage +1}/${maxlength}`;
}

// Function to show the previous image
function showPrev() {
    if (currentImage > 0) {
        let img = document.querySelector("img");
        img.src = imgArr[currentImage];  // Update the image source
        updateNavigationInfo();
        currentImage--;
          // Decrement the index to show the previous image
    } else {
        let img = document.querySelector("img");
        img.src = imgArr[currentImage];  // Update the image source
        updateNavigationInfo();
        currentImage = imgArr.length - 1;  // If at the start, loop to the last image
    }

}

// Function to show the next image
function showNext() {
    if (currentImage < imgArr.length - 1) {
        currentImage++;  // Increment the index to show the next image
    } else {
        currentImage = 0;  // If at the end, loop to the first image
    }
    let img = document.querySelector("img");
    img.src = imgArr[currentImage];  // Update the image source
    updateNavigationInfo();  // Update the navigation info
}

function play() {
    const sound = document.getElementById("audio");
    sound.play()
}