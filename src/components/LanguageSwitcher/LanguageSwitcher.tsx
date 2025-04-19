import { Button } from '@mui/material';

import useLangStore from '@store/useLangStore';

const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLangStore();

  const label = lang === 'ro' ? 'EN' : 'RO';

  return (
    <Button variant='outlined' onClick={toggleLang}>
      {label}
    </Button>
  );
};

export default LanguageSwitcher;
