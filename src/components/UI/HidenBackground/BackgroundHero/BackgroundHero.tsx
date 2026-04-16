import React from 'react';
import s from './BackgroundHero.module.css';

const BackgroundHero = () => {
  return (
    <div className={s.backgroundHero}>
      <div className={s.group_1}>
        <div className={s.backgroundHero_img_1}></div>
        <div className={s.backgroundHero_img_1_1}></div>
      </div>

      <div className={s.group_2}>
        <div className={s.backgroundHero_img_2}></div>
        <div className={s.backgroundHero_img_2_2}></div>
      </div>

      <div className={s.group_3}>
        <div className={s.backgroundHero_img_3}></div>
        <div className={s.backgroundHero_img_3_3}></div>
      </div>
    </div>
  );
};

export default BackgroundHero;
