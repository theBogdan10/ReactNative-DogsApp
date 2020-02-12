import I18n from './index';
import * as en from './en.json';
import * as ar from './ar.json';

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
    en,
    ar
}

export default I18n;
