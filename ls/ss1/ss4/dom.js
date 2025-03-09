// Trả về ID
let element = document.getElementById('Hello');
console.log(element);//Trả về thành phần
let elements1 = document.getElementsByTagName('h2')
console.log(elements1);
// //Trả về Class
let element2 = document.getElementsByClassName('Introduction');
console.log(element2);
// //Trả về phần tử đầu tiên
let element3 = document.querySelector('.Introduction');
console.log(element3);
// //Them 1 phan tu moi vao html
let newElement = document.createElement('h3');
newElement.textContent = "Xin chao moi nguoi";
newElement.style.color = "red";
document.body.appendChild(newElement);
// //Trả về tất cả phần tử
let element4 = document.querySelectorAll('.Introduction');
console.log(element4);
// //Thay đổi thành phần trong HTML
let element5 = document.getElementById('Hello');
element.innerHTML = '<h2>New content</h2>';