import { setLangCookie } from '@utils/lang-utils';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Lang = 'ro' | 'en';

interface LangStore {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
  hydrated: boolean;
  setHydrated: () => void;
}

export const LANG_STORAGE_KEY = 'lang-storage';

export const useLang = create<LangStore>()(
  persist(
    (set, get) => ({
      lang: 'ro',
      hydrated: false,
      toggleLang: () => {
        const newLang = get().lang === 'ro' ? 'en' : 'ro';
        set({ lang: newLang });
        setLangCookie(newLang);
      },
      setLang: (lang: Lang) => {
        set({ lang });
        setLangCookie(lang);
      },
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: 'lang-storage',
      onRehydrateStorage: () => state => {
        state?.setHydrated();
      },
    }
  )
);

export default useLang;
