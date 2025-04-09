// Красивые уведомления
function showAlert(message, isError = false) {
    const alert = document.createElement('div');
    alert.className = `alert ${isError ? 'error' : ''}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => alert.classList.add('show'), 100);
    
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 500);
    }, 5000);
}

// Обработчик формы
document.getElementById('order-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Валидация
    const name = this.querySelector('#name').value.trim();
    const phone = this.querySelector('#phone').value.trim();
    
    if (!name || !phone) {
        showAlert('Пожалуйста, заполните все обязательные поля', true);
        return;
    }
    
    // Здесь должна быть отправка на сервер
    // Для примера просто покажем уведомление
    showAlert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    
    // Сброс формы
    this.reset();
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});