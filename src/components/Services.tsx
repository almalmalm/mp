import React, { useState } from 'react';

const Services = () => {
  const [showPath, setShowPath] = useState(false);
  const [showNails, setShowNails] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const [showMac, setShowMac] = useState(false);
  return (
    <div className="services">
      <h3>Услуги</h3>
      <div className="services-list">
        <ul>
          <li onClick={() => setShowPath(!showPath)}>Курс "Глубокий путь"</li>
          {showPath ? (
            <div className="services-description">
              <div className="services-text">
                Глубокий путь - работа на внутренним и внешним. Через понимание
                себя вы получите экологичные отношения с людьми. Проработаем
                травмы, которые мешают во всех сферах жизни. Подготовим сознание
                к новым достижениям(денежное мышление).
              </div>
              <div className="services-price">Бесплатно</div>
              <div>
                <a href="https://wa.me/79196908647?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%83%D1%8E%20%D0%B4%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%F0%9F%98%8A">
                  Записаться
                </a>
              </div>
            </div>
          ) : null}
          <li onClick={() => setShowNails(!showNails)}>
            Практика "Гвоздестояния"
          </li>
          {showNails ? (
            <div className="services-description">
              <div className="services-text">
                Это мой авторский курс. Единоразовая работа, которая позволяет
                сэкономить ваше время и деньги, так как одна практика заменяет
                несколько психологических консультаций.
              </div>
              <div className="services-price">5000р</div>
              <div>
                <a href="https://wa.me/79196908647?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%20%C2%AB%D0%93%D0%B2%D0%BE%D0%B7%D0%B4%D0%B5%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5%C2%BB%20%F0%9F%98%8A">
                  Записаться
                </a>
              </div>
            </div>
          ) : null}
          <li onClick={() => setShowConsultation(!showConsultation)}>
            Личная консультация
          </li>
          {showConsultation ? (
            <div className="services-description">
              <div className="services-text">
                Ты сформируешь видение куда хочешь прийти в жизни. Получишь
                глубокий пошаговый план выхода на новый уровень.
              </div>
              <div className="services-price">3500р</div>
              <div>
                <a href="https://wa.me/79196908647?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%F0%9F%98%8A">
                  Записаться
                </a>
              </div>
            </div>
          ) : null}
          <li onClick={() => setShowMac(!showMac)}>Разбор по картам МАК</li>
          {showMac ? (
            <div className="services-description">
              <div className="services-text">
                МАК - метофорические ассоциативные карты, с помощью которых
                отбрасываем лишнее и усиливаем нужное, эта работа с состоянием
                ЗДЕСЬ и СЕЙЧАС.
              </div>
              <div className="services-price">1000р</div>
              <div>
                <a href="https://wa.me/79196908647?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D0%BF%D0%BE%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%D0%BC%20%D0%9C%D0%90%D0%9A%20%E2%9C%A8">
                  Записаться
                </a>
              </div>
            </div>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Services;
