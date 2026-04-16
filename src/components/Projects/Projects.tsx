'use client';

import React, {useState} from 'react';
import s from './Projects.module.css';
// import CustomSwiper from '../CustomSwiper/CustomSwiper';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Project} from '@/types/types';
import dynamic from 'next/dynamic';

const CustomSwiper = dynamic(() => import('../CustomSwiper/CustomSwiper'), {
  ssr: false
});

const Projects = () => {
  const t = useTranslations('Projects');
  const projectText = [
    {
      id: 1,
      name: 'Kolibry Studio',
      text_short: t('text_short.0'),
      text_long: t('text_long.0'),
      type: t('type.0'),
      image: '/img/projects/project_1_x1.jpg',
      image_mob: '/img/projects/mob/project_1.1_mob_x1.png',
      image_mob_x2:
        '/img/projects/mob/project_1.1_mob_x1.png 1x, /img/projects/mob/project_1.1_mob_x2.png 2x',
      image_x2:
        '/img/projects/project_1_x1.jpg 1x, /img/projects/project_1_x2.jpg 2x',
      image_project_x1: [
        '/img/projects/project_1.2_x1.jpg',
        '/img/projects/project_1.3_x1.jpg',
        '/img/projects/project_1.4_x1.jpg',
        '/img/projects/project_1.1_x1.jpg'
      ],
      image_project_mob_x1: [
        '/img/projects/mob/project_1.2_mob_x1.png',
        '/img/projects/mob/project_1.3_mob_x1.png',
        '/img/projects/mob/project_1.4_mob_x1.png',
        '/img/projects/mob/project_1.1_mob_x1.png'
      ],
      image_project_x2: [
        '/img/projects/project_1.2_x1.jpg 1x, /img/projects/project_1.2_x2.jpg 2x',
        '/img/projects/project_1.3_x1.jpg 1x, /img/projects/project_1.3_x2.jpg 2x',
        '/img/projects/project_1.4_x1.jpg 1x, /img/projects/project_1.4_x2.jpg 2x',
        '/img/projects/project_1.1_x1.jpg 1x, /img/projects/project_1.1_x2.jpg 2x'
      ],
      image_project_mob_x2: [
        '/img/projects/mob/project_1.2_mob_x1.png 1x, /img/projects/mob/project_1.2_mob_x2.png 2x',
        '/img/projects/mob/project_1.3_mob_x1.png 1x, /img/projects/mob/project_1.3_mob_x2.png 2x',
        '/img/projects/mob/project_1.4_mob_x1.png 1x, /img/projects/mob/project_1.4_mob_x2.png 2x',
        '/img/projects/mob/project_1.1_mob_x1.png 1x, /img/projects/mob/project_1.1_mob_x2.png 2x'
      ],
      href: 'https://kolibry-studio-product-version.vercel.app/ua',
      technology: ['Next.js', 'Redux', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 2,
      name: 'Ventiliation System',
      text_short: t('text_short.1'),
      text_long: t('text_long.1'),
      type: t('type.0'),
      image: '/img/projects/project_2_x1.jpg',
      image_mob: '/img/projects/mob/project_2.1_mob_x1.png',
      image_mob_x2:
        '/img/projects/mob/project_2.1_mob_x1.png 1x, /img/projects/mob/project_2.1_mob_x2.png 2x',
      image_x2:
        '/img/projects/project_2_x1.jpg 1x, /img/projects/project_2_x2.jpg 2x',
      image_project_x1: [
        '/img/projects/project_2.2_x1.jpg',
        '/img/projects/project_2.3_x1.jpg',
        '/img/projects/project_2.4_x1.jpg',
        '/img/projects/project_2.1_x1.jpg'
      ],
      image_project_mob_x1: [
        '/img/projects/mob/project_2.2_mob_x1.png',
        '/img/projects/mob/project_2.3_mob_x1.png',
        '/img/projects/mob/project_2.4_mob_x1.png',
        '/img/projects/mob/project_2.1_mob_x1.png'
      ],
      image_project_x2: [
        '/img/projects/project_2.2_x1.jpg 1x, /img/projects/project_2.2_x2.jpg 2x',
        '/img/projects/project_2.3_x1.jpg 1x, /img/projects/project_2.3_x2.jpg 2x',
        '/img/projects/project_2.4_x1.jpg 1x, /img/projects/project_2.4_x2.jpg 2x',
        '/img/projects/project_2.1_x1.jpg 1x, /img/projects/project_2.1_x2.jpg 2x'
      ],
      image_project_mob_x2: [
        '/img/projects/mob/project_2.2_mob_x1.png 1x, /img/projects/mob/project_2.2_mob_x2.png 2x',
        '/img/projects/mob/project_2.3_mob_x1.png 1x, /img/projects/mob/project_2.3_mob_x2.png 2x',
        '/img/projects/mob/project_2.4_mob_x1.png 1x, /img/projects/mob/project_2.4_mob_x2.png 2x',
        '/img/projects/mob/project_2.1_mob_x1.png 1x, /img/projects/mob/project_2.1_mob_x2.png 2x'
      ],
      href: 'https://ventilation-system.vercel.app/',
      technology: ['Next.js', 'Redux', 'JavaScript', 'HTML', 'CSS']
    }
  ];

  const [activeProject, setActiveProject] = useState<Project>(projectText[0]);
  const [short, setShort] = useState(true);

  const handleClick = () => {
    setShort((prev) => !prev);
  };

  return (
    <section id="Projects" className={`section ${s.projectSection}`}>
      <div
        className={
          short
            ? `container ${s.projectContainer}`
            : `container ${s.projectContainerSwipe}`
        }
      >
        <ul className={s.projectWraper}>
          <li className={short ? `${s.projectleftTitle}` : `${s.displayNone}`}>
            <div className={s.projectleftTitleRotate}>
              <div className={s.fadingLine}></div>
              <h3 className={`title ${s.projectTitle}`}>{t('title')}</h3>
            </div>
          </li>
          <li className={s.projectRightSwiper}>
            <ul
              className={
                short ? `${s.projectSwiperList}` : `${s.projectSwiperListShort}`
              }
            >
              <li className={`${s.projectSwiperItem} ${s.projectTopClose}`}>
                <h4
                  className={
                    short ? `title ${s.swiperNumberTitle}` : `visually-hidden`
                  }
                >
                  {`0` + `${activeProject.id}`}
                </h4>
                {!short && (
                  <button className={s.projectBtnClose} onClick={handleClick}>
                    <svg className={s.projectClose}>
                      <use href="/symbol-defs.svg#icon-close"></use>
                    </svg>
                  </button>
                )}
              </li>
              <li className={s.projectSwiperItem}>
                <CustomSwiper
                  activeProject={activeProject}
                  setActiveProject={setActiveProject}
                  projects={projectText}
                  isShort={short}
                />
              </li>
              <li
                className={
                  short
                    ? `${s.projectSwiperItem} ${s.projectSwiperItemMob}`
                    : `${s.projectSwiperItem}`
                }
              >
                {short && (
                  <h5 className={`title ${s.swiperNameTitle}`}>
                    {activeProject.name}
                  </h5>
                )}
                <p className={short ? `${s.swiperText}` : `${s.swiperTextTop}`}>
                  {short
                    ? activeProject.text_short
                    : activeProject.text_long.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                </p>
                {short && (
                  <div className={s.swiperTypeWraper}>
                    <h5 className={`title ${s.swiperTypeTitle}`}>
                      {activeProject.type}
                    </h5>
                    <div className={s.swiperViewWraper}>
                      <button className={s.swiperBtn} onClick={handleClick}>
                        {short ? t('button_1') : t('button_2')}
                        <svg className={s.swiperIcon}>
                          <use href="/symbol-defs.svg#icon-arrow-bottom-left"></use>
                        </svg>
                      </button>
                      <Link
                        className={s.swiperViewLink}
                        href={activeProject.href}
                        target="_blank"
                      >
                        {t('button_3')}
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              {short && (
                <>
                  <li
                    className={`${s.projectSwiperItem} ${s.projectSwiperItemSeparator}`}
                  ></li>
                  <li
                    className={`${s.projectSwiperItem} ${s.projectSwiperSkils}`}
                  >
                    <ul className={s.swiperSkilsList}>
                      {activeProject.technology.map((tech, index) => (
                        <li key={index} className={s.swiperSkilsItem}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className={s.swiperLink}
                      href={activeProject.href}
                      target="_blank"
                    >
                      {t('button_3')}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
