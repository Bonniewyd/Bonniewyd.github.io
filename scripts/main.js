const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Taylor.jpg") {
    myImage.setAttribute("src", "images/快乐星球.gif");
  } else {
    myImage.setAttribute("src", "images/Taylor.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("名字", myName);
    myHeading.textContent = `泰勒·斯威夫特 ${myName}`;
  }
}

if (!localStorage.getItem("名字")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("名字");
  myHeading.textContent = `泰勒·斯威夫特 ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};
