const checkbox = document.getElementById('chk');

checkbox.addEventListener('change', () => {
    // change of theme of the website
    document.body.classList.toggle('dark');
});

