'use client';
import React, {useEffect, useState} from 'react';
import s from './About.module.css';
import {useTranslations} from 'next-intl';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations('About');
  const parts = t('description').split('br');

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10);
  }, []);

  return (
    <section
      id="About"
      className={`section ${s.sectionAbout} ${s.adWrap} ${isLoaded ? s.lazyLoaded : ''}`}
    >
      <div className={`container`}>
        <ul className={s.about}>
          <li className={s.aboutMe}>
            <div className={s.aboutMeHead}>
              <h2 className={`title ${s.aboutMeTitle}`}>{t('about')}</h2>
              <div className={s.fadingLine}></div>
            </div>
            <p className={s.aboutMeText}>  {parts.map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < parts.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <button className={`button ${s.downloadBtn}`}>
              {t('download')}
              <svg className={s.iconFile}>
                <use href="/symbol-defs.svg#icon-filetype-pdf"></use>
              </svg>
            </button>
          </li>
          <li className={s.aboutMePhoto}>
            <div className={s.aboutMeShadow}></div>
            <picture className={s.aboutMePhotoPicture}>
              <source
                srcSet="/img/about/my_photo_x1_.webp 1x, /img/about/my_photo_x2_.webp 2x"
                type="image/webp"
              />
              <img src="/img/about/my_photo_x1_.webp" alt="Мое зображення" />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
