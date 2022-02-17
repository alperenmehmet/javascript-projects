const panels = document.querySelectorAll('.panel');

//if you want to use it map, you need to use spread

//const newArr = [...panels];

// newArr.map((panel) => {
//   console.log(panel);
// });

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
