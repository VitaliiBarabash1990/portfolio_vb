'use client';

import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/i18n/routing';
import {useState, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/routing';
import s from './Switcher.module.css';

export default function Switcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLocale = (newLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace({pathname}, {locale: newLocale});
    });
  };

  return (
    <div className={s.languageSwitcher} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={s.selectedLang}
        onClick={toggleDropdown}
        disabled={isPending}
      >
        {t('locale', {locale})}
        <span className={`${s.arrow} ${isOpen ? s.open : ''}`}>
          <svg className={s.iconLocale}>
            <use href="/symbol-defs.svg#icon-arrow-in-bottom"></use>
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul className={s.langDropdown}>
          {routing.locales
            .filter((cur) => cur !== locale)
            .map((cur) => (
              <li key={cur}>
                <button
                  className={`${s.langItem} ${locale === cur ? s.active : ''}`}
                  onClick={() => changeLocale(cur)}
                >
                  {t('locale', {locale: cur})}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
