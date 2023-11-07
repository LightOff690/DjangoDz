// Обработчик события для клика по ссылкам в меню
document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    var href = this.getAttribute('href'); // Получаем адрес страницы, на которую нужно перейти
    showPage(href); // Вызываем функцию отображения содержимого страницы
  });
});

// Функция отображения содержимого страницы
function showPage(href) {
  var xhttp = new XMLHttpRequest(); // Создаем объект XMLHttpRequest
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('content').innerHTML = this.responseText; // Загружаем содержимое страницы в блок с id "content"
    }
  };
  xhttp.open('GET', href, true); // Устанавливаем адрес и метод запроса
  xhttp.send(); // Отправляем запрос на сервер
}