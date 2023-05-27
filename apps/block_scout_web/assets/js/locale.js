import moment from 'moment'
import numeral from 'numeral'
import 'numeral/locales'
import $ from 'jquery'

export const localeKey = "locale"
export const locale = 'en'

moment.locale(locale)
numeral.locale(locale)

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

window.setLocale = (locale) => {
  setCookie(localeKey, locale, 365);
  window.location.reload();
}

(function () {
  let locale = getCookie(localeKey);
  if (!locale) {
    locale = "en";
  }
  let $langLabelElement = $('#navbarLocaleDropdown');
  if ($langLabelElement.length > 0) {
    let $localeSelect = $('#locale-selection-' + locale);
    if ($localeSelect.length > 0) {
      $langLabelElement.text($localeSelect.text());
    }
  }
})()
