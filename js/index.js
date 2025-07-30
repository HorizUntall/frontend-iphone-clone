const card1 = document.getElementById('box1');
const card2 = document.getElementById('box2');
const card3 = document.getElementById('box3');
const card4 = document.getElementById('box4');
const card5 = document.getElementById('box5');

function navigateToPage(id) {
    window.location.href = `html/product_details.html?id=${id}`;

}

card1.addEventListener('click', () => navigateToPage(1));
card2.addEventListener('click', () => navigateToPage(2));
card3.addEventListener('click', () => navigateToPage(3));
card4.addEventListener('click', () => navigateToPage(4));
card5.addEventListener('click', () => navigateToPage(5));