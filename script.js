let currentImage = 1;
    
// Funktion för att generera en slumpmässig färg
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Function for "Change Background" button
function changeBg() 
{
    document.body.style.backgroundColor = getRandomColor();
}


  
  // Function for "Good Vibes" button
  function goodVibes() {
    const vibes = document.getElementById("vibes");
    vibes.style.display = (vibes.style.display === "none") ? "block" : "none";
  }
  
  // Function for "Show Time" button
  function showTime() {
    const time = document.getElementById("time");
    time.style.display = (time.style.display === "none" || time.style.display === "") ? (time.innerHTML = new Date(), "block") : (time.innerHTML = "", "none");
  }
  
  
  // Function for "Change Picture" button
  function changePicture() 
  {
        const imageUrl1 = "ChildWithDog.png";
        const imageUrl2 = "https://via.placeholder.com/300/0000FF";
    
        // byter image source baserade på den nuvarande bilden 
        if (currentImage === 1) {
            document.getElementById("image").src = imageUrl2;
            currentImage = 2;
        } else {
            document.getElementById("image").src = imageUrl1;
            currentImage = 1;
        }
    }
  
  // Function for "Hide Picture" button
  function hidePicture() 
  {
    document.getElementById("image").style.display = "none";
  }
  
  // Function for "Show Picture" button
  function showPicture() 
  {
        const imgElement = document.getElementById("image");
        imgElement.classList.remove("hidden");
        imgElement.style.display = "block";
  }
  
  // Function for "Show Header" button
  function showHeader() {
    document.getElementById("header").style.display = "flex";
    document.getElementById("vibes").style.display = "block";
    document.getElementById("time").style.display = "block";
    document.getElementById("image").style.display = "block";
    // Lägger till en text längst ner på sidan. 
    document.getElementById("thanks").innerHTML = "Thank you for visiting my website"
  }
  
  // Function for "Remove Header" button
  function removeHeader() {
    document.getElementById("header").style.display = "none";
  }
  

  function header() {
    const header = document.getElementById("header");
    const isReset = header.style.backgroundColor === "gray";
    
    if (isReset) {
      // Reset to original state
      header.style.backgroundColor = "";
      header.style.alignItems = "";
      document.getElementById("vibes").style.display = "";
      document.getElementById("vibes").style.color = "";
      document.getElementById("time").style.display = "";
      document.getElementById("time").innerHTML = "";
      document.getElementById("time").style.color = "";
      document.getElementById("image").style.border = "";
    } else {
      // Apply new styles
      header.style.backgroundColor = "gray";
      header.style.alignItems = "center";
      document.getElementById("vibes").style.display = "block";
      document.getElementById("vibes").style.color = "white";
      document.getElementById("time").style.display = "block";
      document.getElementById("time").innerHTML = new Date();
      document.getElementById("time").style.color = "white";
      document.getElementById("image").style.border = "1vw solid green";
    }
  }
  
  


function show_header()
{
    // Ändrar allt till display = block
    document.getElementById("header").style.display = "flex";
    document.getElementById("vibes").style.display = "block";
    document.getElementById("time").style.display = "block";
    document.getElementById("image").style.display = "block";
    // Lägger till en text längst ner på sidan. 
    document.getElementById("thanks").innerHTML = "Thank you for visiting my website"
}



// let currentImage = 1;

// // Ändra bakgrundsfärgen
// function changeBgColor() {
//     document.body.style.backgroundColor = getRandomColor();
// }

// // Visa "Be yourself" i rubriken
// function goodVibes() {
//     const goodVibesText = document.getElementById("good-vibes-text");
//     goodVibesText.classList.toggle("hidden");
// }

// // Visa aktuell tid i rubriken
// function showTime() {
//     const liveDate = new Date().toLocaleDateString();
//     const liveDateElement = document.getElementById("live-date");
//     liveDateElement.textContent = liveDate;
//     liveDateElement.classList.toggle('hidden');
// }

// // Byt bild
// function changeImage() {
//     const imageUrl1 = "ChildWithDog.png";
//     const imageUrl2 = "https://via.placeholder.com/300/0000FF";

//     // byter image source baserade på den nuvarande bilden 
//     if (currentImage === 1) {
//         document.getElementById("image").src = imageUrl2;
//         currentImage = 2;
//     } else {
//         document.getElementById("image").src = imageUrl1;
//         currentImage = 1;
//     }
// }

// // Funktion för att generera en slumpmässig färg
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }



// function hideImage() {
//     const imgElement = document.getElementById("image");
//     imgElement.classList.add("hidden");
//     imgElement.style.display = "none";
// }

// function removeHeader() {
//     const headerElement = document.querySelector(".header");
//     headerElement.classList.add("hidden");
//     headerElement.style.display = "none";
// }

// function showHeader() {
//     const headerElement = document.querySelector(".header");
//     headerElement.classList.remove("hidden");
//     headerElement.style.display = "block";
// }

// function createHeader() { 
//     // Add custom classes to the elements
//     const headerElement = document.querySelector(".header");
//     headerElement.classList.add("header-centered");

//     const goodVibesText = document.getElementById("good-vibes-text");
//     goodVibesText.classList.add("text-changes", "good-vibes-custom-position");

//     const liveDateElement = document.getElementById("live-date");
//     liveDateElement.classList.add("text-changes", "live-date-custom-position");

//     const imageElement = document.getElementById("image");
//     imageElement.classList.add("image-custom-position");

//     // Create and add the rectangle div
//     const rectangle = document.createElement('div');
//     rectangle.classList.add("custom-rectangle");

//     const container = document.querySelector(".container");
//     container.appendChild(rectangle);
//     rectangle.appendChild(imageElement);
//     rectangle.appendChild(goodVibesText);
//     rectangle.appendChild(liveDateElement);

//     // Adjust the container's margin-top to create space for the rectangle
//     container.style.marginTop = "200px"; // Adjust the value as needed
// }
