import { vi } from "vitest";

// Legacy component tests predate the app-level IntlRoot. Keep their original
// English assertions while tests that mount IntlProvider still exercise it.
vi.mock("react-intl", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-intl")>();
  const { en } = await import("./messages/en");
  const fallback = actual.createIntl(
    { locale: "en", messages: en },
    actual.createIntlCache(),
  );
  return {
    ...actual,
    useIntl: () => {
      try {
        return actual.useIntl();
      } catch {
        return fallback;
      }
    },
  };
});

// Node 26's experimental localStorage can be undefined in happy-dom tests.
if (!globalThis.localStorage) {
  const entries = new Map<string, string>();
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => entries.get(key) ?? null,
      setItem: (key: string, value: string) => {
        entries.set(key, String(value));
      },
      removeItem: (key: string) => {
        entries.delete(key);
      },
      clear: () => {
        entries.clear();
      },
      key: (index: number) => [...entries.keys()][index] ?? null,
      get length() {
        return entries.size;
      },
    },
  });
}
