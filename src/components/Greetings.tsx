import React from 'react';

const Greetings = () => {
  return (
    <div className="greetings">
      <h1>Привет! Я Мария, психолог и наставник по "Гвоздестоянию"</h1>
      {/* <img src={Photo} alt="Фотография Марии" /> */}
      <a href="https://wa.me/79196908647?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%83%D1%8E%20%D0%B4%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%F0%9F%98%8A">
        Записаться на бесплатную диагностическую сессию
      </a>
      <div className="pulse"></div>
    </div>
  );
};

export default Greetings;
