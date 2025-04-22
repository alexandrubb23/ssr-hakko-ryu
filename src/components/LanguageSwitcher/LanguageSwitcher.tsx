import { Button } from '@mui/material';

import useLangStore from '@store/useLangStore';

const LanguageSwitcher = () => {
  const lang = useLangStore(state => state.lang);
  const toggleLang = useLangStore(state => state.toggleLang);

  const label = lang === 'ro' ? 'EN' : 'RO';

  return (
    <Button variant='outlined' onClick={toggleLang}>
      {label}
    </Button>
  );
};

export default LanguageSwitcher;
