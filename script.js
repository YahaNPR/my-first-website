document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');

    heading.addEventListener('click', function() {
        alert('Поебалу по тыкай!!!');
    });
});

const button = document.createElement('button');
button.textContent = 'Показать дату';
button.className = 'date-button';

function showDate() {
    const currentDate = new Date();
    alert('Сегодня: ' + currentDate.toLocaleDateString());
}

document.body.appendChild(button);

button.addEventListener('click', showDate);

const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма отправлена!');
});