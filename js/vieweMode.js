var changeModeElement = document.querySelector("changeMode");
var header = document.getElementById("changeMode");

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark')
  header.classList.toggle('dark')
})