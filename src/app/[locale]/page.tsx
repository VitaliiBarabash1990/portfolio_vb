import About from '@/components/About/About';
import FaqSection from '@/components/FaqSection/FaqSection';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Heeder/Header';
import Programs from '@/components/Programs/Programs';
import Projects from '@/components/Projects/Projects';
import ProjectsNew from '@/components/ProjectsNew/ProjectsNew';
import Services from '@/components/Services/Services';
import Steps from '@/components/Steps/Steps';
import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function IndexPage({params}: Props) {
  const {locale} = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <About />
      <Programs />
      {/* <Projects /> */}
      <ProjectsNew />
      <Steps />
      <Services />
      <FaqSection />
      <Footer />
    </>
  );
}
