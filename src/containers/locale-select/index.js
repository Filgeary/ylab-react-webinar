import { memo, useCallback, useMemo, useState } from 'react';
import Select from '../../components/select';
import useTranslate from '../../hooks/use-translate';

function LocaleSelect() {

  const {lang, setLang} = useTranslate();

  const [localLang, setLocalLang] = useState(() => lang);

  const handleChange = useCallback((locale) => {
    setLang(locale);
    setLocalLang(locale);
  }, [setLang]);

  const options = {
    lang: useMemo(() => ([
      {value: 'ru', title: 'Русский'},
      {value: 'en', title: 'English'},
    ]), [])
  };

  return (
    <Select onChange={handleChange} value={localLang} options={options.lang}/>
  );
}

export default memo(LocaleSelect);
