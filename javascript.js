var tincanDate = document.getElementById("tincanDate");

tincanDate.addEventListener('click', () => {
    const currentDate = new Date().toDateString();
    alert(currentDate);
});
