'use client';

import {useTranslations} from 'next-intl';
import s from './Footer.module.css';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import toast, {Toaster} from 'react-hot-toast';
import {useEffect, useState} from 'react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function Footer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations('Footer');

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10);
  }, []);

  const initialValues: FormValues = {
    name: '',
    email: '',
    message: ''
  };

  const onlyWords = /^[a-zA-Zа-яА-ЯіІєЄїЇ]+$/;

  const req = [
    {p0: t('req.0')},
    {p1: t('req.1')},
    {p2: t('req.2')},
    {p3: t('req.3')},
    {p4: t('req.4')},
    {p5: t('req.5')},
    {p6: t('req.6')}
  ];

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .matches(onlyWords, `${req[0].p0}`)
      .min(3, `${req[1].p1}`)
      .max(30, `${req[2].p2}`)
      .required(`${req[3].p3}`),
    email: Yup.string().email(`${req[4].p4}`).required(`${req[5].p5}`),
    message: Yup.string()
      .min(10, `${req[6].p6}`)
      .max(500, `${req[6].p6}`)
      .required(`${req[3].p3}`)
  });

  const handleAdd = async (
    values: FormValues,
    {resetForm}: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      });

      if (response.ok) {
        toast.success('Повідомлення успішно відправлено!');
        resetForm();
      } else {
        toast.error('Помилка при відправці повідомлення.');
      }
    } catch (error) {
      console.error('Помилка відправки:', error);
      toast.error('Помилка при відправці повідомлення.');
    }
  };
  return (
    <section
      id="Contacts"
      className={`section ${s.sectionFooter} ${s.adWrap} ${isLoaded ? s.lazyLoaded : ''}`}
    >
      <div className="container">
        <div className={s.footerWrapper}>
          <div className={s.footerTitleBlock}>
            <h3 className={`title ${s.footerTitle}`}>{t('title')}</h3>
            <div className={s.fadingLine}></div>
          </div>
          <ul className={s.footerTop}>
            <li className={s.footerDescrItem}>
              <p className={s.footerText}>{t('description')}</p>
              <ul className={s.footerContact}>
                <li className={s.footerContactItem}>
                  <a href="tel:+380639124311" className={s.footerText}>
                    +38 (063) 912 43 11
                  </a>
                </li>
                <li className={s.footerContactItem}>
                  <a
                    href="mailto:vitalij.barabash007@gmail.com"
                    className={s.footerText}
                  >
                    vitalij.barabash007@gmail.com
                  </a>
                </li>
                <li className={s.footerSocial}>
                  <ul className={s.footerSocialList}>
                    <li className={s.footerSocialItem}>
                      <a href="">
                        <svg className={s.footerSocIcon}>
                          <use href="/symbol-defs.svg#icon-telegram"></use>
                        </svg>
                      </a>
                    </li>
                    <li className={s.footerSocialItem}>
                      <a href="">
                        <svg className={s.footerSocIcon}>
                          <use href="/symbol-defs.svg#icon-watsapp"></use>
                        </svg>
                      </a>
                    </li>
                    <li className={s.footerSocialItem}>
                      <a href="">
                        <svg className={s.footerSocIcon}>
                          <use href="/symbol-defs.svg#icon-instagram"></use>
                        </svg>
                      </a>
                    </li>
                    <li className={s.footerSocialItem}>
                      <a href="">
                        <svg className={s.footerSocIcon}>
                          <use href="/symbol-defs.svg#icon-linkedin"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={s.footerFormItem}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleAdd}
                validationSchema={orderSchema}
              >
                <Form className={s.form}>
                  <label className={s.label}>
                    <p className={s.nameLabel}>{t('name')}</p>
                    <Field
                      className={s.input}
                      type="text"
                      name="name"
                      placeholder={t('nameDescr')}
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className={s.error}
                    />
                  </label>
                  <label className={s.label}>
                    <p className={s.nameLabel}>{t('email')}</p>
                    <Field
                      className={s.input}
                      type="email"
                      name="email"
                      placeholder={t('emailDescr')}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className={s.error}
                    />
                  </label>
                  <label className={s.label}>
                    <p className={s.nameLabel}>{t('answer')}</p>
                    <Field
                      className={`${s.input} ${s.textArea}`}
                      as="textarea"
                      name="message"
                      row={3}
                      placeholder={t('answerDescr')}
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className={s.error}
                    />
                  </label>
                  <button className={s.formBtn}>{t('button')}</button>
                </Form>
              </Formik>
            </li>
          </ul>

          <div className={s.footerBootom}>
            <p className={s.footerBootomText}>Created by Vitalii Barabash</p>
            <p className={`${s.footerBootomText} ${s.footerBootomTextMob}`}>
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
