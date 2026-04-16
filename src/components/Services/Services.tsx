'use client';
import React, {useEffect, useState} from 'react';
import s from './Services.module.css';
import {useTranslations} from 'next-intl';
import {useMediaQuery} from 'react-responsive';
import useIsMobile from '@/lib/IsMobile';

const Services = () => {
  const t = useTranslations('Services');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hundler, setHundler] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  // const isMobile = useMediaQuery({maxWidth: 767});
  const isMobile = useIsMobile();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10);
  }, []);

  const handleCollapse = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const Services = [
    {
      id: 0,
      type: t('services.0.type'),
      price: t('services.0.price'),
      text_short_individual: t('services.0.text_short_individual'),
      text_long_individual: t('services.0.text_long_individual'),
      text_short_complex: t('services.0.text_short_complex'),
      text_long_complex: t('services.0.text_long_complex')
    },
    {
      id: 1,
      type: t('services.1.type'),
      price: t('services.1.price'),
      text_short_individual: t('services.1.text_short_individual'),
      text_long_individual: t('services.1.text_long_individual'),
      text_short_complex: t('services.0.text_short_complex'),
      text_long_complex: t('services.0.text_long_complex')
    },
    {
      id: 2,
      type: t('services.2.type'),
      price: t('services.2.price'),
      text_short_individual: t('services.2.text_long_individual'),
      text_long_individual: t('services.2.text_long_individual'),
      text_short_complex: t('services.0.text_short_complex'),
      text_long_complex: t('services.0.text_long_complex')
    },
    {
      id: 3,
      type: t('services.3.type'),
      price: t('services.3.price'),
      text_short_individual: t('services.3.text_short_individual'),
      text_long_individual: t('services.3.text_long_individual'),
      text_short_complex: t('services.0.text_short_complex'),
      text_long_complex: t('services.0.text_long_complex')
    }
  ];

  const handlerIndividual = () => {
    setHundler(false);
  };
  const handlerComplex = () => {
    setHundler(true);
  };

  return (
    <section
      id="Services"
      className={`section ${s.sectionServices} ${s.adWrap} ${isLoaded ? s.lazyLoaded : ''}`}
    >
      <div className={isMobile ? `${s.containerMob}` : `container`}>
        <div className={s.servicesWrapper}>
          <ul className={s.servicesContent}>
            <li
              className={`${s.servicesContentList} ${s.servicesContentListMob}`}
            >
              <button
                className={
                  hundler
                    ? `${s.nowrapTitle} ${s.servicesHundler}`
                    : `${s.nowrapTitle} ${s.servicesHundlerActive}`
                }
                onClick={handlerIndividual}
              >
                {t('handler_1')}
              </button>
              <div className={s.servicesSeparatorArrow}>
                <svg className={s.separatorArrowIcon}>
                  <use href="/symbol-defs.svg#icon-separator-arrow"></use>
                </svg>
              </div>
              <button
                className={
                  hundler
                    ? `${s.widthTitle} ${s.servicesHundlerActive}`
                    : `${s.widthTitle} ${s.servicesHundler}`
                }
                onClick={handlerComplex}
              >
                {isMobile ? t('handler_3') : t('handler_2')}
              </button>
            </li>
            {Services.map((service, index) => (
              <li key={index} className={s.servicesContentList}>
                <ul className={s.servicesList}>
                  <li className={s.servicesListItemleft}>
                    <div className={s.serviceListDescr}>
                      <h4 className={`title ${s.servicesType}`}>
                        {service.type}
                      </h4>
                      <p className={s.servicesPrice}>{service.price}</p>
                    </div>
                    <button
                      className={s.servicesTabBtn}
                      onClick={() => handleCollapse(index)}
                    >
                      {activeIndex !== index ? (
                        <>
                          {t('button_1')}{' '}
                          <svg className={s.serviceIconTab}>
                            <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                          </svg>
                        </>
                      ) : (
                        <>
                          {t('button_2')}{' '}
                          <svg className={s.serviceIconReverseTab}>
                            <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                          </svg>
                        </>
                      )}
                    </button>
                  </li>
                  <li className={s.servicesListItemCenter}>
                    <p className={s.servicesTextShort}>
                      {hundler
                        ? service.text_short_complex
                        : service.text_short_individual}
                    </p>
                    {activeIndex === index && (
                      <>
                        <br />
                        <p className={s.servicesTextShort}>
                          {hundler
                            ? service.text_long_complex
                                .split('\n')
                                .map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))
                            : service.text_long_individual
                                .split('\n')
                                .map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))}
                        </p>
                      </>
                    )}
                  </li>
                  <li className={s.servicesListItemRight}>
                    <button
                      className={s.servicesBtn}
                      onClick={() => handleCollapse(index)}
                    >
                      {activeIndex !== index ? (
                        <>
                          {t('button_1')}{' '}
                          <svg className={s.serviceIcon}>
                            <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                          </svg>
                        </>
                      ) : (
                        <>
                          <svg className={s.serviceIconReverse}>
                            <use href="/symbol-defs.svg#icon-arrow_bottom"></use>
                          </svg>{' '}
                          {t('button_2')}
                        </>
                      )}
                    </button>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          <div className={s.servicesTitleBlock}>
            <div className={s.servicesTitleContent}>
              <h3 className={`title ${s.servicesTitle}`}>{t('title')}</h3>
              <div className={s.fadingLine}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
