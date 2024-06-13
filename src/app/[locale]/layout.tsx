import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getLangDir } from "rtl-detect";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const direction = getLangDir(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={direction}>
      <body className="h-screen flex flex-col justify-center">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
