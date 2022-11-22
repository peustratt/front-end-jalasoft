const btn1El = document.querySelector(".btn.b1");
const btn2El = document.querySelector(".btn.b2");
const btn3El = document.querySelector(".btn.b3");
const container1El = document.querySelector(".container1");
const container2El = document.querySelector(".container2");
let counter = 0;

btn1El.addEventListener("click", () => {
  console.log("clicou");
  const newArticle = document.createElement("article");
  newArticle.innerHTML = "Lorem ipsum new article";
  container2El.appendChild(newArticle);
});

btn2El.addEventListener("click", () => {
  const counterEl = document.querySelector(".counter");
  if (!counterEl) {
    const newCounter = document.createElement("div");
    newCounter.className = "counter";
    newCounter.innerHTML = counter;
    container1El.appendChild(newCounter);
  }
  counter += 1;
  document.querySelector(".counter").innerHTML = counter;
});

btn3El.addEventListener("click", () => {
  const invertal = setInterval(() => {
    console.log(`second ${counter}`);
    counter = counter - 1;
    document.querySelector(".counter").innerHTML = counter;
    if (counter < 1) {
        clearInterval(invertal)
    }
  }, 1000);
});
