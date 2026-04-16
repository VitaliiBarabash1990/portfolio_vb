'use client';

import {useTranslations} from 'next-intl';
import Switcher from '../LocaleSwitcher/Switcher';
import NavigationLink from '../NavigationLink/NavigationLink';
import s from './Navigation.module.css';
import BurgerButton from '@/components/UI/BurgerButton/BurgerButton';
import {useEffect, useState} from 'react';
// import {NavigationMob} from '../NavigationMob/NavigationMob';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className={s.navigation}>
      <nav className={s.containerNav}>
        <div className={s.navBar}>
          <ul className={s.navBarMenu}>
            <li className={s.navBarMenu_item}>
              <NavigationLink
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('About')
                    ?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                {t('about')}
              </NavigationLink>
            </li>
            <li className={s.navBarMenu_item}>
              <NavigationLink
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('Projects')
                    ?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                {t('projects')}
              </NavigationLink>
            </li>
            <li className={s.navBarMenu_item}>
              <NavigationLink
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('Services')
                    ?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                {t('price')}
              </NavigationLink>
            </li>
            <li className={s.navBarMenu_item}>
              <NavigationLink
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('Steps')
                    ?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                {t('steps')}
              </NavigationLink>
            </li>
          </ul>
          <ul className={s.navBarMessage}>
            <li className={s.navBarMessageItem}>
              <svg className={s.socIcon}>
                <use href="/symbol-defs.svg#icon-telegram"></use>
              </svg>
            </li>
            <li className={s.navBarMessageItem}>
              <svg className={s.socIcon}>
                <use href="/symbol-defs.svg#icon-watsapp"></use>
              </svg>
            </li>
          </ul>
          <div className={s.local__switcher}>
            <Switcher />
          </div>
        </div>

        <div className={s.linkBtn}>
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
            <svg className={s.linkIcon}>
              <use href="/symbol-defs.svg#icon-arrow-bottom-left"></use>
            </svg>
          </NavigationLink>
        </div>

        <div className={s.nav__bar_mob}>
          <div className={s.local__switcher_mob}>
            <Switcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
