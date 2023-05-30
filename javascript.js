var tincanDate = document.getElementById("tincanDate");

tincanDate.addEventListener('click', () => {
    const currentDate = new Date().toDateString();
    alert(currentDate);
});

function logoSpin() {
  const logo = document.getElementById('tincanLogo');
  logo.style.transform = 'rotate(360deg)';
}

