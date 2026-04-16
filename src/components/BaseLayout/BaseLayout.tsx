import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
// import Footer from '@/components/Footer/Footer';
// import Header from '../Heeder/Header';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({children, locale}: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* <Header /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </NextIntlClientProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
