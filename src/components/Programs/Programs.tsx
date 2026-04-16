'use client';

import React, {useEffect, useState} from 'react';
import s from './Programs.module.css';
import {useTranslations} from 'next-intl';

const ProgramsList = [
  {id: 0, icon: '/img/programs/1_wordpress.svg', name: 'WordPress'},
  {id: 1, icon: '/img/programs/2_woocommerce.svg', name: 'WooCommerce'},
  {id: 2, icon: '/img/programs/3_opencart.svg', name: 'OpenCart'},
  {id: 3, icon: '/img/programs/4_shopify.svg', name: 'Shopify'},
  {id: 4, icon: '/img/programs/5_framer.svg', name: 'Framer'},
  {id: 5, icon: '/img/programs/6_mysql.svg', name: 'MySql'},
  {id: 6, icon: '/img/programs/7_mongodb.svg', name: 'MongoDB'},
  {id: 7, icon: '/img/programs/8_bootstrap.svg', name: 'Bootstrap'},
  {id: 8, icon: '/img/programs/9_tailwindcss.svg', name: 'TailwindCSS'},
  {id: 9, icon: '/img/programs/10_material_ua.svg', name: 'Material UI'},
  {id: 10, icon: '/img/programs/11_git.svg', name: 'Git'},
  {id: 11, icon: '/img/programs/12_github.svg', name: 'GitHub'},
  {id: 12, icon: '/img/programs/13_react.svg', name: 'React'},
  {id: 13, icon: '/img/programs/14_redux.svg', name: 'Redax'},
  {id: 14, icon: '/img/programs/15_nextjs.svg', name: 'Next.Js'},
  {id: 15, icon: '/img/programs/16_nodejs.svg', name: 'Nodejs'}
];

const Programs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations('Programs');

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10);
  }, []);

  return (
    <section
      id="Programs"
      className={`section ${s.sectionPrograms} ${s.adWrap} ${isLoaded ? s.lazyLoaded : ''}`}
    >
      <div className={`container`}>
        <ul className={s.programsWrapper}>
          <li className={s.programsHead}>
            <div className={s.fadingLine}></div>
            <h2 className={`title ${s.programsHeadTitle}`}>{t('title')}</h2>
          </li>
          <li className={s.programsTech}>
            <ul className={s.programsTechList}>
              {ProgramsList.map((list) => (
                <li key={list.id} className={s.programsTechItem}>
                  <img
                    src={list.icon}
                    alt={`icon-${list.id}`}
                    className={s.iconPrograms}
                  />
                  <p className={s.programsTechText}>{list.name}</p>
                </li>
              ))}
            </ul>
          </li>
          <li className={s.programsDescrTitle}>
            <h3 className={`title ${s.programsTitle}`}>
              {t('bottomTitle_1')} <br />
              <span className={s.programsTitleBottom}>
                {t('bottomTitle_2')}
              </span>
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Programs;
