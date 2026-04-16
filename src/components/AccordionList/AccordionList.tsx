import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';
import s from './AccordionList.module.css';
import {useTranslations} from 'next-intl';

export default function AccordionList() {
  const t = useTranslations('Steps');

  const steps = [
    {
      number: 1,
      title: t('steps.0.title'),
      text: t('steps.0.text')
    },
    {
      number: 4,
      title: t('steps.1.title'),
      text: t('steps.1.text')
    },
    {
      number: 2,
      title: t('steps.2.title'),
      text: t('steps.2.text')
    },
    {
      number: 5,
      title: t('steps.3.title'),
      text: t('steps.3.text')
    },
    {
      number: 3,
      title: t('steps.4.title'),
      text: t('steps.4.text')
    },
    {
      number: 6,
      title: t('steps.5.title'),
      text: t('steps.5.text')
    }
  ];

  const stepsSorted = steps.sort((a, b) => a.number - b.number);

  const leftColumn = stepsSorted.filter((step) => step.number <= 3);
  const rightColumn = stepsSorted.filter((step) => step.number > 3);
  return (
    <Accordion type="single" collapsible className={s.accordionWrapper}>
      <div className={s.column}>
        {leftColumn.map((step) => (
          <AccordionItem
            key={step.number}
            value={`step-${step.number}`}
            className={s.accordionItem}
          >
            <AccordionTrigger className={s.accordionTrigger}>
              <div className={s.accordionTriggerBtn}>
                <span className={s.stepNumber}>{step.number}</span>
                <h4 className={`title ${s.accordionTitle}`}>{step.title}</h4>
              </div>
            </AccordionTrigger>
            <AccordionContent className={s.accordionContent}>
              <p className={s.accordionContentText}>{step.text}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
      <div className={s.column}>
        {rightColumn.map((step) => (
          <AccordionItem
            key={step.number}
            value={`step-${step.number}`}
            className={s.accordionItem}
          >
            <AccordionTrigger className={s.accordionTrigger}>
              <div className={s.accordionTriggerBtn}>
                <span className={s.stepNumber}>{step.number}</span>
                <h4 className={`title ${s.accordionTitle}`}>{step.title}</h4>
              </div>
            </AccordionTrigger>
            <AccordionContent className={s.accordionContent}>
              <p className={s.accordionContentText}>{step.text}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </Accordion>
  );
}
