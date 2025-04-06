import { Button } from '@mui/material';

import useLang from '@store/useLang';

const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLang();

  const label = lang === 'ro' ? 'RO' : 'EN';

  return (
    <Button variant='contained' onClick={toggleLang}>
      {label}
    </Button>
  );
};

export default LanguageSwitcher;
