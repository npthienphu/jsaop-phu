document.addEventListener('DOMContentLoaded', function() {
    let firstInput = document.querySelector('input[name="first"]');
    let lastInput = document.querySelector('input[name="last"]');
    console.log("First value:", firstInput.value);
    console.log("Last value:", lastInput.value);
    let paragraph = document.querySelector('p');
    paragraph.style.backgroundColor = 'lightblue';
    let listItems = document.querySelectorAll('li');
    console.log("Số mục trong danh sách:", listItems.length);
});
