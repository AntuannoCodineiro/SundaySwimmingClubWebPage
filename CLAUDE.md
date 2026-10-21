# Sunday Swimming Club: strona internetowa

Prawdziwa, responsywna strona klubu pływackiego z Poznania. Powstaje na bazie klikalnego prototypu wybranego przez klienta: **Immersja (jasna)**.

## Punkt wyjścia

- `reference/immersja-jasna/index.html`: prototyp (jeden plik, układ stały 1200 px skalowany do okna). To wzór wyglądu, treści i zachowania. Do przepisania na układ responsywny, nie do kopiowania 1:1.
- `reference/koncept-immersja.pdf`: oryginalny koncept od klienta (czarny hero „Poniedziałek? Wtorek? Sunday.”).
- `reference/brief.pdf`, `reference/notatki-ze-spotkania.docx`: brief i ustalenia.
- `assets/`: logo (`logo-black.png`, `logo-white.png`), czepki wycięte z tła (`czepki/ssc-*.png`), zdjęcia w pełnej rozdzielczości (`zdjecia/`), czepki partnera (`partnerzy/plc-*.png`).

## Decyzje

- **Technologia:** czysty HTML, CSS i JS, bez frameworka i bez kroku budowania. Wspólne elementy (menu, stopka) trzeba powtórzyć na każdej stronie, więc trzymaj je w jednym wzorcu i kopiuj świadomie. Można dodać mały skrypt wstawiający menu i stopkę, jeśli to uprości pracę, ale strona ma działać po otwarciu plików z dysku i na zwykłym hostingu statycznym.
- **Podstrony (osobne pliki):** `index.html` (start), `klub.html`, `oferta.html`, `cennik.html`, `galeria.html`, `faq.html`, `kontakt.html`, `rezerwacje.html`, plus `polityka-prywatnosci.html` i `regulamin.html`.
- **Język:** tylko polski.
- **Formularze:** wysyłka przez Web3Forms lub Formspree na `sundayswimmingclubpoznan@gmail.com`. Klucz/endpoint są w jednym miejscu w konfiguracji (`js/config.js`). Klucz Web3Forms jest publiczny z założenia (strona statyczna), więc jest wpisany w repozytorium. Nie wpisuj tam żadnych tajnych kluczy.
- **Rezerwacje:** na razie bez kalendarza Cal.com (odłożone na później). Strona pokazuje harmonogram zajęć grupowych, a zapisy idą przez formularz albo kontakt bezpośredni. Ręczna akceptacja przez trenerów, limit 8 osób w grupie plus 2 miejsca rezerwowe, lista rezerwowa prowadzona ręcznie.
- **Instagram zamiast bloga:** widget LightWidget (placeholder do czasu podania konta).
- **Hero:** zdjęcie, nie wideo.
- **SEO:** podstawy (tytuły, opisy, nagłówki, alt, Open Graph, `sitemap.xml`, `robots.txt`, dane strukturalne `SportsClub`/`LocalBusiness`).

## Marka

- Turkus `#2EC5B6`, róż `#FF5EA2`, czerń `#0B0B0B`, biel `#FFFFFF`. Czepki mają własne barwy marki (`#46A2A6`, `#CE6389`), zostają jak są.
- Nagłówki: Unbounded. Tekst: Hanken Grotesk. Etykiety: DM Mono (Google Fonts).
- Motywy: czepki wynurzające się zza falującej linii wody, czepek jako miernik miejsc w grupie. Kolor czepka nie oznacza poziomu grupy (decyzja klienta).
- Ton: na luzie, bez typowych haseł reklamowych. Teksty z prototypu są roboczymi propozycjami, FAQ, kadra i opis klubu pochodzą od klienta i mają zostać.

## Treści i dane (z materiałów klienta)

- Kontakt: sundayswimmingclubpoznan@gmail.com, 501 066 121.
- Pływalnie: POSiR Grunwald, Winogrady, Rataje, Chwiałka.
- Kadra: Albert Warzocha (medale Mistrzostw Polski), Kacper Matysiak (dawniej zawodnik, trener).
- Doświadczenie: 15 lat zawodniczo, 5 lat w zawodzie trenera.
- Cennik (45 min): solo 1× 160 zł, 4× 600 zł + plan 150 zł, 8× 1150 zł + plan 150 zł, sam plan solo 200 zł. Para: 1× 200 zł, 4× 750 zł. Analiza wideo 300 zł (+200 zł plan). Próbny trening grupowy 100 zł. Ceny pakietów grupowych są ustalane indywidualnie (informacja od klienta).
- Pola formularzy: imię, nazwisko, e-mail, telefon, preferowany basen. Formularz indywidualny dodatkowo: solo lub para. Dwa osobne formularze: grupowy i indywidualny.

## Do uzupełnienia przez klienta (nie zgaduj, oznacz w kodzie jako TODO)

- Potwierdzenie harmonogramu zajęć grupowych (podany przez klienta, wpisany na stronie rezerwacji).
- Klucz LightWidget (adres profilu na Instagramie jest już wpisany).
- Adres domeny i hostingu.
- Zdjęcie hero zgodne z konceptem (podwodne, pełny kadr). Na razie IMG_4040.
- Zgody osób widocznych na zdjęciach, polityka prywatności i regulamin.
- Czarny czepek jest wariantem wygenerowanym, klub go jeszcze nie ma.

## Wymagania jakości

- Responsywność od 360 px: menu zwijane na telefonie, siatki przechodzą w jedną kolumnę, formularze i kalendarz czytelne w pionie.
- Dostępność: kontrast, widoczny fokus, etykiety pól, `alt` na zdjęciach, szanuj `prefers-reduced-motion` (kołysanie czepków w hero).
- Wydajność: zdjęcia w kilku rozmiarach (WebP/JPG), `loading="lazy"`, fonty z `display=swap`.
- Brak komentarzy z oczywistościami, nazwy plików i klas po polsku lub angielsku konsekwentnie jedno z nich.
- Nie dodawaj nic, o co klient nie prosił (sklep, logowanie, panel CMS są poza zakresem).
