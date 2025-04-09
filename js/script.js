// Обработчик отправки формы
document.getElementById('order-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Здесь можно добавить код для отправки данных формы на сервер
    
    // Сбрасываем форму
    this.reset();
    
    // Показываем сообщение об успехе
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});