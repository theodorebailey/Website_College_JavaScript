// Select TinCan Image Navbar
const tincanDate = document.getElementById("tincanDate");
// select logo ID element navbar
const logo = document.getElementById('tincanLogo');
// Select id element
const textElement = document.getElementById("company-about");
// Select CEO paragraph
const paraCEO = document.getElementById("para-ceo")

tincanDate.addEventListener('click', () => {
    const currentDate = new Date().toDateString();
    alert(currentDate);
});

function logoSpin() {
  // set CSS styling property to rotate 360
  logo.style.transform = 'rotate(360deg)';
}


function changeColor (ele) {

  // create random colour
  const randomColor = getRandomColor();
  // get element for reusability
  let element = document.getElementById(ele);
  // set random colour to text element
  element.style.color = randomColor;

}

function getRandomColor() {
  // hexadecimal color code
  const letters = '0123456789ABCDEF';
  // create color, instantiated with hash key
  let color = '#';
  // create 6 additional random colour numerals
  for (let i = 0; i < 6; i++) {
    // add to colour letter array select random 
    color += letters[Math.floor(Math.random() * 16)];
  }
  // return hexidecimal value
  return color;
}
