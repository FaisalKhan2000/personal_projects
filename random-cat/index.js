// // https://aws.random.cat/meow

// let imageContainer = document.querySelector(".image");
// let btn = document.querySelector(".btn");
// let img = document.createElement("img");

// function API() {
//   fetch("https://aws.random.cat/meow")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       // Change the src attribute of the img element
//       img.setAttribute("class", "img");
//       img.setAttribute("src", data.file);
//       img.setAttribute("width", "400px");
//       img.setAttribute("alt", "A description of the image");
//       img.setAttribute("srcset", "");
//       // Append the img element to the image container
//       imageContainer.appendChild(img);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// btn.addEventListener("click", () => {
//   API();
// });

let imageContainer = document.querySelector(".image");
let btn = document.querySelector(".btn");

let img = document.createElement("img");

// Create a loading indicator element
let loadingIndicator = document.createElement("img");
loadingIndicator.setAttribute("src", "./Spinner-1s-200px.gif");
loadingIndicator.style.display = "none"; // Hide the element by default
imageContainer.appendChild(loadingIndicator);

function generateImage() {
  return new Promise((resolve, reject) => {
    // Show the loading indicator
    loadingIndicator.style.display = "block";

    // Delay the image generation by 5 seconds
    setTimeout(() => {
      // Generate the image
      fetch("https://aws.random.cat/meow")
        .then((response) => response.json())
        .then((data) => {
          // Hide the loading indicator
          loadingIndicator.style.display = "none";

          // Resolve the promise with the image data
          resolve(data);
        })
        .catch((error) => {
          // Hide the loading indicator
          loadingIndicator.style.display = "none";

          // Reject the promise with the error
          reject(error);
        });
    }, 5000); // 5 seconds delay
  });
}

btn.addEventListener("click", () => {
  // Call the generateImage() function and handle the promise
  generateImage()
    .then((data) => {
      // Create an img element and set its attributes
      img.setAttribute("class", "img");
      img.setAttribute("src", data.file);
      img.setAttribute("width", "400px");
      img.setAttribute("alt", "A description of the image");
      img.setAttribute("srcset", "");
      // Append the img element to the image container
      imageContainer.appendChild(img);
    })
    .catch((error) => {
      console.error(error);
    });
});
