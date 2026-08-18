const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
let count = 0;
btn.addEventListener("click", () => {
  count += 1;
  msg.textContent = count === 1 ? "You clicked once!" : `You clicked ${count} times!`;
});