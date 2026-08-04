const btn = document.getElementById('surpriseBtn');
const card = document.getElementById('greetingCard');

// Набор праздничных эмодзи
const items = ['🎈', '💖', '🎂', '✨', '🌸', '🎁', '💗', '⭐', '🌹', '🎀'];

btn.addEventListener('click', () => {
  // Показываем карточку
  card.style.display = 'block';

  // Запускаем конфетти и эмодзи
  for (let i = 0; i < 40; i++) {
    setTimeout(createFloatingItem, i * 100);
  }
});

function createFloatingItem() {
  const item = document.createElement('div');
  item.classList.add('floating-item');
  
  item.innerText = items[Math.floor(Math.random() * items.length)];

  item.style.left = Math.random() * 90 + 5 + 'vw';
  item.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
  item.style.animationDuration = (Math.random() * 2 + 3) + 's';

  document.body.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 5000);
}