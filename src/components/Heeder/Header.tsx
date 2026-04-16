'use client';

import React, {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import s from './Header.module.css';
import BurgerButton from '../UI/BurgerButton/BurgerButton';
import {NavigationMob} from '../NavigationMob/NavigationMob';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isModal = true;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, [menuOpen]);
  return (
    <div
      className={`${s.headerSection} ${s.adWrap} ${isLoaded ? s.lazyLoaded : ''}`}
    >
      <div className={s.headerContainer}>
        <div className={s.headerWrapper}>
          <Navigation />
          <Hero />
          <div className={s.headerBurgerButton}>
            <BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>

          <div className={`${s.menu_burger} ${menuOpen ? s.open : ''}`}>
            <NavigationMob isModal={isModal} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
