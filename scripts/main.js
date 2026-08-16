const myImage = document.getElementById("imagem-1");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image-viola.jpg") {
    myImage.setAttribute("src", "images/image-viola-2.jpg");
  } else {
    myImage.setAttribute("src", "images/image-viola.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor, digite o seu nome");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Olá ${myName}, Conheça a Viola Clássica`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Olá ${storedName}, Conheça a Viola Clássica`;
}

myButton.onclick = () => {
  setUserName();
};
