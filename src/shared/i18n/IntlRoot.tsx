import type { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { useLocale } from "./locale";
import { en } from "./messages/en";
import { fr } from "./messages/fr";

const catalogs = { en, fr };

export function IntlRoot({ children }: { children: ReactNode }) {
  const locale = useLocale();
  return (
    <IntlProvider locale={locale} messages={catalogs[locale]} defaultLocale="en">
      {children}
    </IntlProvider>
  );
}
