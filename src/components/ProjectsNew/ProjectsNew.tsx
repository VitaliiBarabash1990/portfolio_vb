'use client';

import React, {useEffect, useState} from 'react';
import s from './ProjectsNew.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

const ProjectsNew = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [itemsPerClick, setItemsPerClick] = useState(3);
  const t = useTranslations('Projects');

  // Динамічна кількість елементів на клік
  const updateItemsPerClick = () => {
    const width = window.innerWidth;
    if (width <= 767) {
      setItemsPerClick(2);
      setVisibleCount(4);
    } else if (width <= 1279) {
      setItemsPerClick(3);
      setVisibleCount(6);
    } else {
      setItemsPerClick(3);
      setVisibleCount(6);
    }
  };

  useEffect(() => {
    updateItemsPerClick();
    window.addEventListener('resize', updateItemsPerClick);
    return () => window.removeEventListener('resize', updateItemsPerClick);
  }, []);

  const addItem = () => setVisibleCount((prev) => prev + itemsPerClick);
  const resetItem = () => updateItemsPerClick();

  const cardsProject = [
    {
      id: 0,
      src: '/',
      link: 'https://kolibry-studio-lyart.vercel.app/ua',
      technology: 'Next.js',
      descr_short: t('descr_short.0'),
      descr_long: t('descr_long.0'),
      img_src: '/img/projects/1_lashes.webp'
    },
    {
      id: 1,
      src: '/',
      link: 'https://ventilation-system.vercel.app/',
      technology: 'Next.js',
      descr_short: t('descr_short.1'),
      descr_long: t('descr_long.1'),
      img_src: '/img/projects/2_ventilation.webp'
    },
    {
      id: 2,
      src: '/',
      link: '/',
      descr_short: t('descr_short.2'),
      technology: 'WordPress',
      descr_long: t('descr_long.2'),
      img_src: '/img/projects/3_noctra.webp'
    },
    {
      id: 3,
      src: '/',
      link: 'https://zeryva.com.ua/',
      technology: 'Next.js',
      descr_short: t('descr_short.3'),
      descr_long: t('descr_long.3'),
      img_src: '/img/projects/4_zeryva.webp'
    },
    {
      id: 4,
      src: '/',
      link: 'https://estetikmed.pl/pl',
      technology: 'Next.js',
      descr_short: t('descr_short.4'),
      descr_long: t('descr_long.4'),
      img_src: '/img/projects/5_esteticmed.webp'
    },
    {
      id: 5,
      src: '/',
      link: 'https://www.art-bud-sofia.com/',
      technology: 'Next.js',
      descr_short: t('descr_short.5'),
      descr_long: t('descr_long.5'),
      img_src: '/img/projects/6_art-bud-sofia.webp'
    },
    {
      id: 6,
      src: '/',
      link: 'https://www.pan-sirko.com.ua/',
      technology: 'Next.js',
      descr_short: t('descr_short.6'),
      descr_long: t('descr_long.6'),
      img_src: '/img/projects/7_pan-sirko.webp'
    },
    {
      id: 7,
      src: '/',
      link: 'https://floristics-agency.vercel.app/',
      technology: 'Next.js',
      descr_short: t('descr_short.7'),
      descr_long: t('descr_long.7'),
      img_src: '/img/projects/8_floristics.webp'
    },
    {
      id: 8,
      src: '/',
      link: 'https://www.7flows.studio/uk',
      technology: 'Next.js',
      descr_short: t('descr_short.8'),
      descr_long: t('descr_long.8'),
      img_src: '/img/projects/9_7flows.webp'
    },
    {
      id: 9,
      src: '/',
      link: 'https://sky-master-dusky.vercel.app/en',
      technology: 'Next.js',
      descr_short: t('descr_short.9'),
      descr_long: t('descr_long.9'),
      img_src: '/img/projects/10_skymaster.webp'
    },
    {
      id: 10,
      src: '/',
      link: 'https://www.octopusstudio.top/',
      technology: 'Next.js',
      descr_short: t('descr_short.10'),
      descr_long: t('descr_long.10'),
      img_src: '/img/projects/11_octopus.webp'
    },
    {
      id: 11,
      src: '/',
      link: 'https://photo-studio-olive.vercel.app/',
      technology: 'Next.js',
      descr_short: t('descr_short.11'),
      descr_long: t('descr_long.11'),
      img_src: '/img/projects/12_photostudio.webp'
    },
    {
      id: 12,
      src: '/',
      link: 'https://www.postil-service.com.ua/',
      technology: 'Next.js',
      descr_short: t('descr_short.12'),
      descr_long: t('descr_long.12'),
      img_src: '/img/projects/13_postil-service.webp'
    }
  ];

  return (
    <section id="Projects" className={`section ${s.projectSection}`}>
      <div className={`container ${s.projectContainer}`}>
        <div className={s.projectWraper}>
          <div className={s.projectleftTitle}>
            <div className={s.projectleftTitleRotate}>
              <div className={s.fadingLine}></div>
              <h3 className={`title ${s.projectTitle}`}>{t('title')}</h3>
            </div>
          </div>
          <div className={s.projectRightWrapper}>
            <ul className={s.projectsList}>
              {cardsProject.slice(0, visibleCount).map((item) => (
                <li key={item.id} className={s.projectItem}>
                  <div className={s.itemWrapper}>
                    <div className={s.imageWrapper}>
                      <Image
                        src={item.img_src}
                        fill
                        alt={`image_${item.id}`}
                        className={s.image}
                      />
                    </div>
                    <p className={s.text}>
                      {t('created_on')}{' '}
                      <b className={s.textBold}>{item.technology}</b>
                    </p>
                    <p className={s.text}>{item.descr_short}</p>
                    <button className={s.btnInfo}>
                      <svg className={s.btnIcon}>
                        <use href="/symbol-defs.svg#icon-arrow-bottom-left"></use>
                      </svg>
                    </button>
                  </div>
                  <button className={s.btn}>
                    {t('button_1')}
                    <div className={s.IconBlock}>
                      <svg className={s.btnIcon}>
                        <use href="/symbol-defs.svg#icon-arrow-bottom-left"></use>
                      </svg>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
            <div className={s.separatorLine}></div>
            <div className={s.btnBlock}>
              <button
                className={`${s.btn} ${s.btnMore}`}
                onClick={
                  visibleCount < cardsProject.length ? addItem : resetItem
                }
              >
                {visibleCount < cardsProject.length
                  ? t('button_2')
                  : t('button_3')}
                <div className={s.MoreBlock}>
                  <svg
                    className={`${s.btnIcon} ${visibleCount < cardsProject.length ? s.rotateDown : s.rotateTop}`}
                  >
                    <use href="/symbol-defs.svg#icon-arrow-bottom-left"></use>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsNew;
