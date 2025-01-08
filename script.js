function showAlert(bagName) {
    alert("You clicked on the " + bagName + "!");
}

document.querySelectorAll('.bag').forEach(item => {
    item.addEventListener('click', event => {
        showAlert(item.querySelector('h3').innerText);
    });
});
