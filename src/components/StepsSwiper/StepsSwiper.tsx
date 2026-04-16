'use client';

import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import s from './StepsSwiper.module.css';

const StepsSwiper = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeSlide, setActiveSlide] = useState<Number | null>(null);
  console.log('ActiveSlide', activeSlide);
  useEffect(() => setIsClient(true), []);

  const isMobile = useMediaQuery({maxWidth: 767});
  const Steps = [
    {
      id: 1,
      name: 'Вибір технологій',
      description:
        'На цьому етапі ми визначаємо, які технології найкраще підходять для вашого проекту. Аналізуємо вимоги до швидкості, безпеки та масштабованості сайту. Обираємо між Next.js, React, базою даних та іншими необхідними інструментами для ефективної роботи.'
    },
    {
      id: 2,
      name: 'Розробка структури',
      description:
        'Формуємо логічну структуру майбутнього сайту або веб-додатку. Визначаємо ключові сторінки, компоненти та маршрути, щоб забезпечити зручну навігацію та ефективний UX/UI.'
    },
    {
      id: 3,
      name: 'Верстка та інтеграція',
      description:
        'Розробляємо адаптивну та швидку верстку на основі макета. Інтегруємо готові компоненти React, налаштовуємо взаємодію між фронтендом і бекендом, якщо потрібно.'
    },
    {
      id: 4,
      name: 'Налаштування бекенду',
      description:
        'Підключаємо бекенд-систему, якщо проект цього вимагає. Реалізуємо API, налаштовуємо базу даних, авторизацію та інші серверні функції для стабільної роботи сайту.'
    },
    {
      id: 5,
      name: 'Тестування та оптимізація',
      description:
        'Перевіряємо функціональність сайту на різних пристроях і браузерах.Оптимізуємо продуктивність, зменшуємо час завантаження, налаштовуємо SEO та усуваємо можливі баги.'
    },
    {
      id: 6,
      name: 'Деплой та підтримка',
      description:
        'Розгортаємо сайт на обраному хостингу або сервері. Надаємо технічну підтримку, оновлення та моніторинг продуктивності для безперебійної роботи проєкту.'
    }
  ];

  if (!isClient) return null;

  return (
    <div className={s.sliderContainer}>
      <Swiper
        className={s.swiper}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        modules={[Navigation]}
        loop={true}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        breakpoints={{
          320: {slidesPerView: 1, spaceBetween: 0},
          768: {slidesPerView: 1, spaceBetween: 0},
          1280: {slidesPerView: 1, spaceBetween: 0}
        }}
      >
        {Steps.map((step) => (
          <SwiperSlide key={step.id} className={s.slide}>
            <div className={s.reviewCard}>
              <ul className={s.cardList}>
                <li className={s.cardItem}>
                  <h3>{step.id}</h3>
                  <h4>{step.name}</h4>
                </li>
                <li className={s.cardItemDescr}>
                  <p>{step.description}</p>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={s.wraperArrow}>
        <button className={`custom-prev ${s.wrapButton}`}>
          <svg className={s.navButton_icon}>
            <use href="/symbol-defs.svg#icon-left-swiper" />
          </svg>
        </button>

        <div className={s.paginationWraper}>
          {Steps.map((step, index) => (
            <div key={index} className={s.paginationItem}>
              {index === activeSlide ? (
                <svg
                  className={s.boolitLongIcon}
                  preserveAspectRatio="none"
                  viewBox="0 0 100 1"
                >
                  <use href="/symbol-defs.svg#icon-Line-long"></use>
                </svg>
              ) : (
                <svg
                  className={s.boolitShortIcon}
                  preserveAspectRatio="none"
                  viewBox="0 0 100 1"
                >
                  <use href="/symbol-defs.svg#icon-Line-short"></use>
                </svg>
              )}
            </div>
          ))}
        </div>

        <button className={`custom-next ${s.wrapButton}`}>
          <svg className={`${s.navButton_icon} ${s.right}`}>
            <use href="/symbol-defs.svg#icon-left-swiper" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StepsSwiper;
