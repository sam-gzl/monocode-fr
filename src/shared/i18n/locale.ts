import { useSyncExternalStore } from "react";

export type Locale = "en" | "fr";

const LOCALE_KEY = "monocode.locale";
const LOCALE_CHANGE_EVENT = "monocode:localechange";
const DEFAULT_LOCALE: Locale = "fr";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "fr";
}

function readLocale(): Locale | null {
  try {
    const raw = localStorage.getItem(LOCALE_KEY);
    return isLocale(raw) ? raw : null;
  } catch {
    return null;
  }
}

function writeLocale(value: Locale) {
  try {
    localStorage.setItem(LOCALE_KEY, value);
  } catch {
    // private mode / quota
  }
}

let unsaved: Locale | null = null;

export function loadLocale(): Locale {
  return unsaved ?? readLocale() ?? DEFAULT_LOCALE;
}

export function saveLocale(value: Locale) {
  writeLocale(value);
  unsaved = readLocale() === value ? null : value;
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<Locale>(LOCALE_CHANGE_EVENT, { detail: value }),
  );
}

export function subscribeLocale(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (storage: StorageEvent) => {
    if (storage.key !== LOCALE_KEY && storage.key !== null) return;
    unsaved = null;
    onStoreChange();
  };
  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribeLocale, loadLocale, () => DEFAULT_LOCALE);
}
