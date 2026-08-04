const btn = document.getElementById('surpriseBtn');
const card = document.getElementById('greetingCard');

// Набор эмодзи для праздника
const items = ['🎈', '💖', '🎂', '✨', '🌸', '🎁', '💗', '⭐', '🛍️', '🎀'];

btn.addEventListener('click', () => {
  // Показываем карточку с поздравлением
  card.style.display = 'block';

  // Запускаем салют из эмодзи и шариков
  for (let i = 0; i < 40; i++) {
    setTimeout(createFloatingItem, i * 100);
  }
});

function createFloatingItem() {
  const item = document.createElement('div');
  item.classList.add('floating-item');
  
  // Случайный выбор эмодзи
  item.innerText = items[Math.floor(Math.random() * items.length)];

  // Случайное положение по горизонтали и размер
  item.style.left = Math.random() * 90 + 5 + 'vw';
  item.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
  
  // Случайная скорость подъема
  item.style.animationDuration = (Math.random() * 2 + 3) + 's';

  document.body.appendChild(item);

  // Удаляем элемент после завершения анимации
  setTimeout(() => {
    item.remove();
  }, 5000);
}