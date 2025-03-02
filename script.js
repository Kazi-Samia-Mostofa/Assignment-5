const button = document.querySelectorAll(".btn");
const counter2 = document.getElementById("middle");
const counter1 = document.getElementById("top");
const sideBar = document.getElementById("side");
const text = document.querySelectorAll("text");
const sideBtn = document.getElementById("sideBtn");
const tagTime = document.getElementsByClassName("tag-time");

let count = 0;
for (let i = 0; i < button.length; i++) {
  const comBtn = button[i];
  comBtn.addEventListener("click", function (event) {
    // Last Button
    count++;
    if (count === button.length) {
      alert("congrats!!! You have completed all the current task");
      event.target.classList.add("clicked");
      event.target.disabled = true;

      let value = parseInt(counter2.innerText);
      value--;
      counter2.innerText = value;

      let value1 = parseInt(counter1.innerText);
      value1++;
      counter1.innerText = value1;

      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const customMessage = "You have completed the task at";

      const text1 = text.innerText;

      const timeElement = document.createElement("p");
      timeElement.innerText =` ${customMessage} ${text1} ${timeString}`;
      timeElement.classList.add("time-tag");
      sideBar.appendChild(timeElement);

      return;
    }

    alert("Board Updated Successfully");

    let value = parseInt(counter2.innerText);
    value--;
    counter2.innerText = value;

    let value1 = parseInt(counter1.innerText);
    value1++;
    counter1.innerText = value1;

    event.target.classList.add("clicked");

    event.target.disabled = true;

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const customMessage = "You have completed the task at";

    const text1 = text.innerText;

    const timeElement = document.createElement("p");
    timeElement.innerText =  ${customMessage} ${text1} ${timeString};
    timeElement.classList.add("time-tag");
    sideBar.appendChild(timeElement);
  });
}

sideBtn.addEventListener("click", function () {
  const tagTimeElements = document.querySelectorAll(".time-tag");
  for (let i = 0; i < tagTimeElements.length; i++) {
    tagTimeElements[i].remove();
  }
});






  const colors = ["#E0E0E0", "#B0BEC5", "#78909C", "#455A64", "#D7D7D7", "#A9A9A9","#607D8B"];
  let currentIndex = 0;

  function change (){
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;

  }
  document.getElementById("themeBtn").addEventListener("click", change);

  // date
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[today.getDay()];
  const month = today.toLocaleString("en-US", { month: "short" });
  const date = today.getDate().toString().padStart(2, "0");
  const year = today.getFullYear();
  document.getElementById("day").textContent = ${dayName},;
  document.getElementById("time").textContent = ${month} ${date} ${year};