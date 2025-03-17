// Adding an image changer
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/20240906_Casual_Christmas-round.png") {
    myImage.setAttribute("src", "images/20240906_Headshot_LinkedIn-round.png");
  } else {
    myImage.setAttribute("src", "images/20240906_Casual_Christmas-round.png");
  }
});
