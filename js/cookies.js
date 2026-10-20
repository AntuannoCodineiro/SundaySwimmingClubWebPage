(function () {
  'use strict';

  var CONF = window.SSC_CONFIG || {};
  var KLUCZ = 'ssc-zgody';
  var WERSJA = 1;
  var WAZNOSC = 365 * 24 * 3600 * 1000;
  var GA_ID = (CONF.analityka && CONF.analityka.gaId) || '';
  var GA_POPRAWNE = /^G-[A-Z0-9]{4,}$/.test(GA_ID);

  var zapisane = null;
  try {
    var z = JSON.parse(localStorage.getItem(KLUCZ));
    if (z && z.wersja === WERSJA && Date.now() - z.czas < WAZNOSC) zapisane = z;
  } catch (e) {}

  var stan = zapisane || { analityczne: false, zewnetrzne: false };

  /* ---------- Google Analytics, ładowany dopiero po zgodzie ---------- */
  var gaZaladowane = false;

  function usunCookiesGA() {
    var nazwy = document.cookie.split(';').map(function (c) { return c.split('=')[0].trim(); })
      .filter(function (n) { return n === '_ga' || n.indexOf('_ga_') === 0 || n === '_gid' || n.indexOf('_gat') === 0; });
    var host = location.hostname.split('.');
    var domeny = ['', location.hostname];
    for (var i = 1; i < host.length - 1; i++) domeny.push('.' + host.slice(i).join('.'));
    nazwy.forEach(function (n) {
      domeny.forEach(function (d) {
        document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  function ga() {
    if (!GA_POPRAWNE) return;
    if (stan.analityczne) {
      window['ga-disable-' + GA_ID] = false;
      if (gaZaladowane) return;
      gaZaladowane = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, { anonymize_ip: true });
    } else {
      window['ga-disable-' + GA_ID] = true;
      usunCookiesGA();
    }
  }

  /* ---------- zapis i powiadomienie reszty strony ---------- */
  function ustaw(analityczne, zewnetrzne) {
    stan = { wersja: WERSJA, czas: Date.now(), analityczne: !!analityczne, zewnetrzne: !!zewnetrzne };
    try { localStorage.setItem(KLUCZ, JSON.stringify(stan)); } catch (e) {}
    ga();
    document.dispatchEvent(new CustomEvent('ssc:zgody'));
  }

  window.SSC_ZGODY = {
    stan: function () { return { analityczne: stan.analityczne, zewnetrzne: stan.zewnetrzne }; },
    zezwolZewnetrzne: function () { ustaw(stan.analityczne, true); if (baner && !baner.hidden) ukryj(); },
    otworz: function () { pokaz(true); }
  };

  /* ---------- baner ---------- */
  var baner = null;

  function zbuduj() {
    var el = document.createElement('div');
    el.className = 'cookies';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-labelledby', 'cookies-tytul');
    el.setAttribute('aria-describedby', 'cookies-opis');
    el.tabIndex = -1;
    el.innerHTML =
      '<h2 id="cookies-tytul">Pliki cookies</h2>' +
      '<p id="cookies-opis">Niezbędne pliki działają zawsze, bo strona nie zadziała bez nich. Za Twoją zgodą włączymy też statystyki odwiedzin (Google Analytics) i treści zewnętrzne (kalendarz rezerwacji, Instagram). ' +
      '<a href="polityka-prywatnosci.html#cookies">Polityka prywatności</a></p>' +
      '<div class="cookies-ustawienia" hidden>' +
        '<label class="cookies-opcja"><input type="checkbox" checked disabled><span><b>Niezbędne</b>Zapamiętują Twój wybór dotyczący cookies. Nie da się ich wyłączyć.</span></label>' +
        '<label class="cookies-opcja"><input type="checkbox" name="analityczne"><span><b>Statystyki</b>Google Analytics pokazuje nam, które podstrony są odwiedzane. Dane są zbiorcze.</span></label>' +
        '<label class="cookies-opcja"><input type="checkbox" name="zewnetrzne"><span><b>Treści zewnętrzne</b>Kalendarz rezerwacji Cal.com i widżet Instagrama mogą zapisywać własne pliki cookies.</span></label>' +
      '</div>' +
      '<div class="cookies-przyciski">' +
        '<button type="button" class="przycisk przycisk--kontur" data-c="odrzuc">Tylko niezbędne</button>' +
        '<button type="button" class="przycisk przycisk--kontur" data-c="ustawienia" aria-expanded="false">Ustawienia</button>' +
        '<button type="button" class="przycisk" data-c="akceptuj">Akceptuję wszystkie</button>' +
      '</div>';
    document.body.appendChild(el);

    var panel = el.querySelector('.cookies-ustawienia');
    var wybor = el.querySelector('[data-c="ustawienia"]');
    var analityczne = el.querySelector('[name="analityczne"]');
    var zewnetrzne = el.querySelector('[name="zewnetrzne"]');

    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-c]');
      if (!b) return;
      var akcja = b.dataset.c;
      if (akcja === 'odrzuc') { ustaw(false, false); ukryj(); }
      else if (akcja === 'akceptuj') { ustaw(true, true); ukryj(); }
      else if (panel.hidden) {
        panel.hidden = false;
        wybor.textContent = 'Zapisz wybór';
        wybor.setAttribute('aria-expanded', 'true');
        analityczne.checked = stan.analityczne;
        zewnetrzne.checked = stan.zewnetrzne;
      } else {
        ustaw(analityczne.checked, zewnetrzne.checked);
        ukryj();
      }
    });

    el.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && zapisane) ukryj();
    });
    return el;
  }

  var poprzedniFocus = null;

  function pokaz(przezUzytkownika) {
    if (!baner) baner = zbuduj();
    var panel = baner.querySelector('.cookies-ustawienia');
    var wybor = baner.querySelector('[data-c="ustawienia"]');
    panel.hidden = true;
    wybor.textContent = 'Ustawienia';
    wybor.setAttribute('aria-expanded', 'false');
    baner.hidden = false;
    if (przezUzytkownika) {
      poprzedniFocus = document.activeElement;
      baner.focus();
    }
  }

  function ukryj() {
    if (baner) baner.hidden = true;
    zapisane = stan;
    if (poprzedniFocus && poprzedniFocus.focus) poprzedniFocus.focus();
    poprzedniFocus = null;
  }

  document.addEventListener('click', function (e) {
    var l = e.target.closest('[data-cookies]');
    if (l) { e.preventDefault(); pokaz(true); }
  });

  ga();
  if (!zapisane) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { pokaz(false); });
    else pokaz(false);
  }
})();
