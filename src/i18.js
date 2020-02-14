import I18n from './index';
import * as en from './en.json';
import * as ar from './ar.json';
import * as ru from './ru.json';

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
	en,
	ar,
	ru
};

export default I18n;
