export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  hi: {
    iso: "hi-IN",
    name: "Hindi",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
