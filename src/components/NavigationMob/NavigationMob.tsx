// import {useTranslations} from 'next-intl';
import Link from 'next/link';
import s from './NavigationMob.module.css';
import clsx from 'clsx';
import {useTranslations} from 'next-intl';
import Switcher from '../LocaleSwitcher/Switcher';
import NavigationLink from '../NavigationLink/NavigationLink';

type MyComponentProps = {
  isModal: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const NavigationMob = ({isModal, setMenuOpen}: MyComponentProps) => {
  const t = useTranslations('Navigation');
  const handlerSubmit = () => {
    isModal && setMenuOpen(false);
  };

  const linkDatas = [
    {id: 0, link: '#About', text: t('about')},
    {id: 1, link: '#Projects', text: t('projects')},
    {id: 2, link: '#Services', text: t('price')},
    {id: 3, link: '#Steps', text: t('steps')}
  ];
  return (
    <>
      <ul className={clsx(s.navMenu, isModal && s.navMenu_modal)}>
        {linkDatas.map((linkData) => (
          <li key={linkData.id} className={s.navMenu__item_link}>
            <Link
              href={linkData.link}
              onClick={handlerSubmit}
              className={s.navMenu__link}
            >
              {linkData.text}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={s.navBarMessage}>
        <li className={s.navBarMessageItem}>
          <a href="#" className={s.heroMobLink}>
            <svg className={s.socIcon}>
              <use href="/symbol-defs.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
        <li className={s.navBarMessageItem}>
          <a href="#" className={s.heroMobLink}>
            <svg className={s.socIcon}>
              <use href="/symbol-defs.svg#icon-watsapp"></use>
            </svg>
          </a>
        </li>
      </ul>
      <div className={s.local__switcher}>
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
          <div className={s.heroLinkBtnMob}>
            <a href="#Projects" className={s.heroMobLink}>
              {t('toProjects')}
              <svg className={s.heroMobLinkIcon}>
                <use href="/symbol-defs.svg#icon-arrow-bottom-left"></use>
              </svg>
            </a>
          </div>
        </div>
        <Switcher />
      </div>
    </>
  );
};
