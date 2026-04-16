import React from 'react';
import s from './Hero.module.css';
import {useTranslations} from 'next-intl';
import NavigationLink from '../NavigationLink/NavigationLink';

const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <div className={s.heroLeftSide}>
      <div className={s.heroDescription}>
        <p className={s.heroTextBig}>{t('description_1')}</p>
        <h1 className={`title ${s.heroTitle}`}>{t('title')}</h1>
        <p className={s.heroTextSmall}>{t('description_2')}</p>
      </div>
      <div className={s.heroBtnWrap}>
        <button
          className={`button ${s.heroBtn}`}
          onClick={() => {
            document
              .getElementById('Contacts')
              ?.scrollIntoView({behavior: 'smooth'});
          }}
        >
          {t('button')}
          <svg className={s.btn_icon}>
            <use href="/symbol-defs.svg#icon-arrow-right"></use>
          </svg>
        </button>
        <div className={s.heroLinkBtn}>
          <NavigationLink
            href="/"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('Projects')
                ?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            {t('toProjects')}
            <svg className={s.heroLinkIcon}>
              <use href="/symbol-defs.svg#icon-arrow-bottom-left"></use>
            </svg>
          </NavigationLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
