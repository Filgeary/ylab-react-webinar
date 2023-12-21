import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useServices from './use-services';

/**
 * Хук возвращает функцию для локализации текстов, код языка и функцию его смены
 */
export default function useTranslate() {
  const { lang: langService, setLang, t } = useServices().i18n
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(() => langService);

  useEffect(() => {
    setValue(langService);
    navigate(location.pathname, {replace: true});
  }, [langService]);

  return {
    lang: value,
    setLang,
    t
  };
}
