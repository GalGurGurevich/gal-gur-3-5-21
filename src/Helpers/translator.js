import { languages } from '../Theme/i18n/index'

export default function translate(lang, key) {
    return languages[lang].resources[key];
}
