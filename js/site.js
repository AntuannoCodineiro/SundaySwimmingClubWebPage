(function () {
  'use strict';

  var CONF = window.SSC_CONFIG || {};
  var CENY = {
    solo: 'Solo: 160 zł za 45 minut, pakiet 4 zajęć 600 zł, 8 zajęć 1150 zł.',
    para: 'W parze: 200 zł za 45 minut, pakiet 4 zajęć 750 zł.',
    grupowe: 'Grupa: próbny trening 100 zł, ceny pakietów grupowych ustalamy indywidualnie.'
  };

  /* ---------- menu ---------- */
  var przycisk = document.querySelector('.menu-przycisk');
  var menu = document.getElementById('menu');
  if (przycisk && menu) {
    var etykieta = przycisk.querySelector('.menu-tekst');
    var ustawMenu = function (otwarte) {
      menu.classList.toggle('otwarte', otwarte);
      przycisk.setAttribute('aria-expanded', otwarte ? 'true' : 'false');
      if (etykieta) etykieta.textContent = otwarte ? 'Zamknij' : 'Menu';
    };
    przycisk.addEventListener('click', function () {
      ustawMenu(przycisk.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && przycisk.getAttribute('aria-expanded') === 'true') {
        ustawMenu(false);
        przycisk.focus();
      }
    });
    var szeroki = window.matchMedia('(min-width: 760px)');
    var reset = function () { if (szeroki.matches) ustawMenu(false); };
    if (szeroki.addEventListener) szeroki.addEventListener('change', reset);
    else if (szeroki.addListener) szeroki.addListener(reset);
  }

  /* ---------- adres profilu na Instagramie ---------- */
  var igUrl = CONF.instagram && CONF.instagram.url;
  document.querySelectorAll('[data-instagram]').forEach(function (a) {
    if (igUrl) {
      a.href = igUrl;
      a.target = '_blank';
      a.rel = 'noopener';
    }
  });
  document.querySelectorAll('[data-instagram-konto]').forEach(function (el) {
    if (igUrl) {
      var m = igUrl.match(/instagram\.com\/([^\/?#]+)/i);
      if (m) el.textContent = '@' + m[1];
    }
  });

  /* ---------- treści zewnętrzne (LightWidget) tylko po zgodzie ---------- */
  var zgody = window.SSC_ZGODY || { stan: function () { return { zewnetrzne: false }; }, zezwolZewnetrzne: function () {} };
  var odswiezanie = [];
  var bylaZgoda = zgody.stan().zewnetrzne;

  document.addEventListener('ssc:zgody', function () {
    var jest = zgody.stan().zewnetrzne;
    if (bylaZgoda && !jest) { location.reload(); return; }
    bylaZgoda = jest;
    odswiezanie.forEach(function (f) { f(jest); });
  });

  /* widżet LightWidget */
  var lwId = CONF.instagram && CONF.instagram.lightwidgetId;
  if (lwId) {
    var lwZaladowany = false;
    odswiezanie.push(function lw(jest) {
      document.querySelectorAll('[data-lightwidget-uwaga]').forEach(function (p) {
        if (jest) { p.hidden = true; return; }
        p.hidden = false;
        p.innerHTML = 'Widżet Instagrama wymaga zgody na treści zewnętrzne. <button type="button" class="link-przycisk">Włącz widżet</button>';
        p.querySelector('button').addEventListener('click', function () { zgody.zezwolZewnetrzne(); });
      });
      if (!jest || lwZaladowany) return;
      lwZaladowany = true;
      document.querySelectorAll('[data-lightwidget]').forEach(function (box) {
        box.innerHTML = '<iframe src="https://lightwidget.com/widgets/' + encodeURIComponent(lwId) +
          '.html" title="Najnowsze posty na Instagramie" class="lightwidget-widget" loading="lazy" scrolling="no" style="min-height:240px"></iframe>';
      });
      var s = document.createElement('script');
      s.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
      document.body.appendChild(s);
    });
  }

  odswiezanie.forEach(function (f) { f(bylaZgoda); });

  /* ---------- tryb zapisów: indywidualne / grupowe, solo / para ---------- */
  document.querySelectorAll('[data-zapisy]').forEach(function (box) {
    var przyciski = box.querySelectorAll('.przelacznik--tryb button');
    var panele = box.querySelectorAll('[data-panel]');
    var cena = box.querySelector('[data-cena]');

    function ustaw(tryb) {
      var forma = box.querySelector('input[name="forma"]:checked');
      przyciski.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.tryb === tryb ? 'true' : 'false'); });
      panele.forEach(function (p) { p.hidden = p.dataset.panel !== tryb; });
      box.querySelectorAll('[data-dla]').forEach(function (el) { el.hidden = el.dataset.dla !== tryb; });
      box.querySelectorAll('[data-dla]').forEach(function (el) {
        var kol = el.parentElement;
        kol.hidden = Array.prototype.every.call(kol.children, function (c) { return c.hidden; });
      });
      if (cena) cena.textContent = tryb === 'grupowe' ? CENY.grupowe : CENY[forma ? forma.value : 'solo'];
    }

    przyciski.forEach(function (b) {
      b.addEventListener('click', function () { ustaw(b.dataset.tryb); });
    });
    box.querySelectorAll('input[name="forma"]').forEach(function (r) {
      r.addEventListener('change', function () { if (cena) cena.textContent = CENY[r.value]; });
    });

    var start = 'indywidualne';
    if (box.hasAttribute('data-url-tryb')) {
      var m = /[?&]tryb=([a-z]+)/.exec(location.search);
      if (m) {
        if (m[1] === 'grupa' || m[1] === 'grupowe') start = 'grupowe';
        else if (m[1] === 'para') {
          var radio = box.querySelector('input[name="forma"][value="para"]');
          if (radio) radio.checked = true;
        }
      }
    }
    ustaw(start);
  });

  /* ---------- formularze ---------- */
  var EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  function poprawne(el) {
    var v = (el.value || '').trim();
    if (!v) return false;
    if (el.type === 'email') return EMAIL.test(v);
    if (el.type === 'tel') return /^[+\d][\d\s\-().]*$/.test(v) && v.replace(/\D/g, '').length >= 9;
    return true;
  }

  function oznacz(el, ok) {
    var pole = el.closest('.pole');
    var komunikat = pole.querySelector('.pole-blad');
    pole.classList.toggle('blad', !ok);
    if (ok) {
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
    } else {
      el.setAttribute('aria-invalid', 'true');
      if (komunikat) {
        komunikat.textContent = el.dataset.blad || 'Uzupełnij to pole.';
        el.setAttribute('aria-describedby', komunikat.id);
      }
    }
  }

  function skonfigurowane() {
    var c = CONF.formularze || {};
    if (!c.endpoint || /TODO/.test(c.endpoint)) return false;
    if (c.dostawca === 'web3forms' && !c.klucz) return false;
    return true;
  }

  function pokazBlad(form, tekst) {
    var k = form.querySelector('.komunikat');
    var mail = (CONF.formularze || {}).emailKlubu || '';
    k.innerHTML = tekst + (mail ? ' Możesz też napisać na <a href="mailto:' + mail + '">' + mail + '</a>.' : '');
    k.classList.add('pokaz');
  }

  function wyslij(form) {
    var c = CONF.formularze || {};
    var dane = {};
    new FormData(form).forEach(function (v, k) { if (k !== 'botcheck' && v !== '') dane[k] = typeof v === 'string' ? v.trim() : v; });
    dane.formularz = form.dataset.nazwa || 'Formularz';
    dane.subject = (form.dataset.temat || 'Wiadomość ze strony') + (dane.imie ? ': ' + dane.imie + (dane.nazwisko ? ' ' + dane.nazwisko : '') : '');
    if (c.dostawca === 'web3forms') {
      dane.access_key = c.klucz;
      dane.from_name = 'Strona Sunday Swimming Club';
      if (dane.email) dane.replyto = dane.email;
    }
    var ctl = window.AbortController ? new AbortController() : null;
    var limit = setTimeout(function () { if (ctl) ctl.abort(); }, 15000);
    return fetch(c.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(dane),
      signal: ctl ? ctl.signal : undefined
    }).then(function (res) {
      clearTimeout(limit);
      return res.json().catch(function () { return {}; }).then(function (json) {
        if (!res.ok || json.success === false || json.error) throw new Error('odpowiedź serwera');
      });
    }, function (err) { clearTimeout(limit); throw err; });
  }

  document.querySelectorAll('form[data-formularz]').forEach(function (form) {
    var pola = form.querySelectorAll('[required]');
    var sukces = form.parentElement.querySelector('.sukces');
    var przycisk = form.querySelector('button[type="submit"]');
    var etykietaPrzycisku = przycisk.textContent;

    pola.forEach(function (el) {
      el.addEventListener('blur', function () { if (el.closest('.pole').classList.contains('blad')) oznacz(el, poprawne(el)); });
      el.addEventListener('input', function () { if (el.closest('.pole').classList.contains('blad') && poprawne(el)) oznacz(el, true); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.querySelector('.komunikat').classList.remove('pokaz');
      var pierwszy = null;
      pola.forEach(function (el) {
        var ok = poprawne(el);
        oznacz(el, ok);
        if (!ok && !pierwszy) pierwszy = el;
      });
      if (pierwszy) { pierwszy.focus(); return; }

      var pulapka = form.querySelector('input[name="botcheck"]');
      if (pulapka && pulapka.checked) { form.hidden = true; if (sukces) sukces.classList.add('pokaz'); return; }

      if (!skonfigurowane()) {
        pokazBlad(form, 'Wysyłka formularza nie jest jeszcze skonfigurowana.');
        return;
      }

      przycisk.disabled = true;
      przycisk.textContent = 'Wysyłam…';
      wyslij(form).then(function () {
        form.hidden = true;
        if (sukces) {
          var opis = sukces.querySelector('[data-opis]');
          var forma = form.querySelector('input[name="forma"]:checked');
          if (opis && form.dataset.typ === 'indywidualne') {
            opis.textContent = 'Trener potwierdzi zgłoszenie (' + (forma && forma.value === 'para' ? 'w parze' : 'solo') + ') i ustali z Tobą termin mailowo lub telefonicznie.';
          }
          sukces.classList.add('pokaz');
          sukces.focus();
        }
        var prz = form.closest('[data-zapisy]');
        if (prz) prz.querySelectorAll('.przelacznik--tryb, .segment').forEach(function (x) { x.hidden = true; });
      }).catch(function () {
        pokazBlad(form, 'Nie udało się wysłać formularza. Spróbuj ponownie za chwilę.');
      }).then(function () {
        przycisk.disabled = false;
        przycisk.textContent = etykietaPrzycisku;
      });
    });
  });
})();
