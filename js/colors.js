var colors = document.querySelectorAll('.colors div');
var root = document.querySelector(':root');
console.log(colors);
colors.forEach(color => {
  color.addEventListener('click', e => {
    console.log(e.target.style.backgroundColor)
    root.style.setProperty('--selected-color', e.target.style.backgroundColor)
  })
})