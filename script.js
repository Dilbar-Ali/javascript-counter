const increment = document.getElementById("incrementbtn");
const decrement = document.getElementById("decrementbtn");
const reset = document.getElementById("resetbtn");
const counter = document.getElementById("counter");
let count = 0;
increment.addEventListener("click", () => {
    count = count + 1;
    counter.innerHTML = count;
});
reset.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
});
decrement.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
    else {
        count = 0;
        alert("Number reached in 0");
    }

    counter.innerHTML = count;
}) 