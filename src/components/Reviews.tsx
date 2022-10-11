import React from 'react';
import Photo from '../img/photo-2.jpeg';

const Reviews = () => {
  return (
    <div className="reviews">
      <h3>Отзывы</h3>
      {/* <img src={Photo} alt="Фото для отзывов" /> */}
      <div className="reviews-text">
        Мне легко дышать, ходить и ни о чем не думаю, просто наслаждаюсь!
        Вечером вообще села писать свои мысли , прощение попросила у себя. Даже
        папе позвонила, поговорили просто, легче стало. Обиды нет, а есть только
        благодарность к родителям. Спасибо тебе большое!
      </div>
    </div>
  );
};

export default Reviews;
