import translate from "./translate";

class I18nService {
  /**
   * @param services {Services} Менеджер сервисов
   * @param config {Object}
   */
  constructor(services, config = {}) {
    this.services = services;
    this.config = config;
    this.lang = this.config.lang;
  }

  setLang = (lang) => {
    this.lang = lang;
    this.services.api.setHeader('Accept-Language', lang);
  }

  t = (text, number) => {
    return translate(this.lang, text, number);
  }
}

export default I18nService;
