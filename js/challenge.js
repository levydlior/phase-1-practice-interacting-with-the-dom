const counter = document.querySelector("#counter");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const heartBtn = document.querySelector("#heart");
const pauseBtn = document.querySelector("#pause");
const likeList = document.querySelector("ul");
const commentSection = document.querySelector("#list");
const formComments = document.querySelector("#comment-form");
const likeUl = document.querySelector(".likes");
const likeObj = {};

let runClock = setInterval(function () {
  counter.textContent++;
  return;
}, 1000);

pauseBtn.addEventListener("click", () => {
  const allBtns = document.querySelectorAll("button:not(#pause)");
  if (pauseBtn.textContent === " pause ") {
    allBtns.forEach((btn) => {
      btn.disabled = true;
      pauseBtn.textContent = " resume ";
    });
    clearInterval(runClock);
  } else {
    allBtns.forEach((btn) => {
      btn.disabled = false;
      pauseBtn.textContent = " pause ";
    });
    runClock = setInterval(function () {
      counter.textContent++;
      return;
    }, 1000);
  }
});

minusBtn.addEventListener("click", () => {
  counter.textContent--;
});

plusBtn.addEventListener("click", () => {
  counter.textContent++;
});

heartBtn.addEventListener("click", () => {
  const likeText = counter.textContent;
  if (likeText in likeObj) {
    likeObj[likeText] = likeObj[likeText] + 1;
  } else {
    likeObj[likeText] = 1;
  }
  renderLikesToPage();
});

function renderLikesToPage() {
  likeUl.innerHTML = "";
  for (const like in likeObj) {
    const li = document.createElement("li");
    li.textContent = `${like} has been liked ${likeObj[like]} times!`;
    likeUl.append(li);
  }
}

formComments.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentInput = document.querySelector("#comment-input");
  const pComment = document.createElement("p");
  pComment.textContent = commentInput.value;

  commentSection.appendChild(pComment);
  commentInput.value = "";
});
