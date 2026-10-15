document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("wynik").textContent = "Działa! " + new Date().toLocaleTimeString();
});
