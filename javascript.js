// Select TinCan Image Navbar
const tincanDate = document.getElementById("tincanDate");
// select logo ID element navbar
const logo = document.getElementById('tincanLogo');

// tincanDate ID selected, addEventlistener for click event
tincanDate.addEventListener('click', () => {
  // create a variable to store current date
    let currentDate = new Date().toDateString();
    // alert current date to website when function executes
    alert(currentDate);
});

function logoSpin() {
  // set CSS styling property to rotate 360 to constant logo value
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
  // relevant hexadecimal characters stored in string acting like array
  const letters = '0123456789ABCDEF';
  // create color variable, instantiated with hash key
  let color = '#';
  // create 6 additional random colour numerals from letters string acting like array
  for (let i = 0; i < 6; i++) {
    // add to colour letter array select random, create a random number and using Math.floor round down to nearest numeral 
    // * 16 to get whole number which is number of Hexidecimal characters
    color += letters[Math.floor(Math.random() * 16)];
  }
  // return hexidecimal value stored in color variable
  return color;
}
