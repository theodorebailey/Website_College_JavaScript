var tincanDate = document.getElementById("tincanDate");

tincanDate.addEventListener('click', () => {
    const currentDate = new Date().toDateString();
    alert(currentDate);
});

function logoSpin() {
  // select logo ID element
  const logo = document.getElementById('tincanLogo');
  // set CSS styling property to rotate 360
  logo.style.transform = 'rotate(360deg)';
}


function changeColor () {
  
  // Select id element
  const textElement = document.getElementById("company-about");
  
  // create random colour
  const randomColor = getRandomColor();

  // set random colour to text element
  textElement.style.color = randomColor;

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
