# Sunday Swimming Club: lista zadań

Kolejność: najpierw rzeczy, które blokują publikację, potem treści od klienta, potem dopracowanie. W kodzie wszystkie braki są oznaczone `TODO` (szukaj: `TODO` w plikach HTML i w `js/`).

## 1. Blokuje publikację

- [x] **Domena i hosting.** Domena `sundayswimmingclub.pl` działa na GitHub Pages (repo `SundaySwimmingClubWebPage`, DNS u SEOhost, HTTPS włączony). Materiały klienta zostają poza repo (`.gitignore`).
- [ ] **Wysyłka formularzy.** Założyć klucz Web3Forms (albo konto Formspree) dla `sundayswimmingclubpoznan@gmail.com` i wpisać go w `js/config.js` (`formularze.klucz`, ewentualnie `endpoint`). Bez tego formularze pokazują komunikat błędu z adresem e-mail klubu.
- [ ] **Test wysyłki na prawdziwym kluczu.** Wysłać po jednym zgłoszeniu z każdego z trzech formularzy (indywidualny, grupowy, kontaktowy) i sprawdzić, czy mail dochodzi z poprawnym tematem i polami.
- [x] **Reprezentacja stowarzyszenia.** Stowarzyszenie reprezentują Kacper Matysiak i Albert Warzocha.
- [ ] **Polityka prywatności.** Wersja robocza jest napisana (administrator, cele, odbiorcy, prawa, cookies z tabelą). Uzupełnić pola TODO (potwierdzenie z prawnikiem, kto jest administratorem danych w stowarzyszeniu zwykłym, dostawca formularzy i hostingu, okresy przechowywania, zgody na wizerunek), przejrzeć z prawnikiem, usunąć `noindex` i dopisać do `sitemap.xml`.
- [ ] **Regulamin.** Uzupełnić `regulamin.html` (płatności, ważność pakietów, odwoływanie zajęć, zdrowie i bezpieczeństwo, reklamacje). Usunąć `noindex`, dodać do `sitemap.xml`.
- [ ] **Zgody na wizerunek.** Zebrać zgody osób widocznych na zdjęciach (galeria, oferta, klub). Nowa osoba na zdjęciu z odkrytego basenu (`IMG_3514`).
- [ ] **Google Analytics.** Wpisać identyfikator pomiaru GA4 w `js/config.js` (`analityka.gaId`, np. `G-XXXXXXXXXX`). Skrypt ładuje się dopiero po zgodzie w banerze cookies. Ustawić w GA retencję danych zgodnie z polityką prywatności.
- [ ] **Czcionki Google Fonts.** Ładują się z serwerów Google bez zgody (przeglądarka przekazuje adres IP). Zdecydować, czy hostujemy je u siebie, żeby uniknąć tej kwestii.
- [ ] **Baner cookies.** Przetestować na prawdziwej domenie i sprawdzić listę cookies w przeglądarce po zgodzie, uzupełnić tabelę w polityce prywatności.

## 2. Treści i dane od klienta

- [ ] **Widżet Instagrama.** Adres profilu jest wpisany (`instagram.url` w `js/config.js`). Brakuje identyfikatora widżetu z LightWidget (`instagram.lightwidgetId`), do tego czasu pokazuje się podgląd ze zdjęć.
- [ ] **Zdjęcie hero.** Zdjęcie zgodne z konceptem (podwodne, pełny kadr). Na razie jest `IMG_4040`.
- [ ] **Czarny czepek.** Jest wariantem wygenerowanym, klub go jeszcze nie ma. Użyty w sekcji o grupach, na kartach planów i w sekcji zamykającej na stronie głównej.
- [ ] **Park Kasprowicza i openwater.** Zdecydować, czy dopisać je też do stopki, strony kontaktu i danych strukturalnych (na razie tylko dopisek na stronie Klub).
- [ ] **Pływalnie w formularzach.** Sprawdzić, czy lista basenów w formularzach zapisów ma obejmować też Park Kasprowicza.
- [ ] **Zdjęcia do galerii.** Na Dysku nie ma więcej nowych zdjęć niż `IMG_3514`. Dosłać kolejne, jeśli mają wejść do galerii.
- [ ] **Treść „Gdzie pływamy”.** Zatwierdzić, czy na stronie głównej zostaje lista dni przy pływalniach.

## 3. Rezerwacje i harmonogram

- [ ] **Harmonogram grup.** Strona rezerwacji pokazuje grupy MiddleMan, MiddleMan+ i PRO (Grunwald, Chwiałka, Rataje) według informacji od klienta. Potwierdzić godziny, nazwy grup i czy jest jeszcze grupa dla początkujących.
- [ ] **Zmiany harmonogramu.** Godziny są wpisane w `rezerwacje.html` (sekcja „Harmonogram zajęć grupowych”). Ustalić, kto i jak je zmienia.
- [ ] **Kalendarz Cal.com.** Odłożony. Wrócić do tematu, gdy klub będzie gotowy na rezerwacje online (wcześniejszy kod i ustawienia są w historii gita).
- [ ] **Lista rezerwowa.** Ustalić, jak jest prowadzona (strona mówi: limit 10 osób na tor, kolejne zgłoszenia na listę rezerwową).

## 4. Dopracowanie wyglądu i treści

- [ ] **Poziomy grup.** Kolor czepka nie oznacza poziomu, ale w sekcji „Jak dobieramy grupy” (klub) każdy z czterech poziomów ma czepek w innym kolorze. Zostawić, zrobić jednokolorowo albo usunąć czepki.
- [ ] **Zdjęcie hero.** Sprawdzić kadr na różnych telefonach i dobrać `object-position`.
- [ ] **Kroki „Twoja droga”.** Zatwierdzić teksty z prototypu (są roboczymi propozycjami).
- [ ] **Teksty z prototypu.** Przejrzeć nagłówki i opisy ofert. Treści FAQ, kadry i opisu klubu są od klienta i zostają bez zmian.
- [ ] **Logo i ikony.** Sprawdzić favicon i grafikę udostępniania (`img/og.jpg`) po ustaleniu domeny, np. w podglądzie linku na Facebooku.
- [x] **Analityka.** Zdecydowano: Google Analytics po zgodzie w banerze cookies (zostaje wpisać identyfikator, patrz wyżej).

## 5. Techniczne przed startem

- [ ] **Przeglądarki.** Przetestować w Safari (iPhone), Firefoxie i Edge. Sprawdzono tylko Chrome na 360, 768 i 1280 px.
- [ ] **Dostępność.** Przejść stronę klawiaturą i czytnikiem ekranu, sprawdzić kontrast narzędziem automatycznym.
- [ ] **Wydajność.** Zmierzyć Lighthouse na wdrożonej stronie (szczególnie hero i galeria).
- [ ] **SEO.** Zgłosić `sitemap.xml` w Google Search Console, sprawdzić dane strukturalne (SportsClub, FAQPage) w teście wyników rozszerzonych, uzupełnić adres, godziny i `sameAs`.
- [ ] **Nagłówek i stopka.** Są powtórzone w 10 plikach HTML. Każda zmiana menu lub stopki wymaga poprawki we wszystkich.
- [x] **Repozytorium.** Kod jest w `AntuannoCodineiro/SundaySwimmingClubWebPage` na GitHubie (czysta historia, bez materiałów klienta).
- [ ] **Po wdrożeniu.** Wysłać testowe zgłoszenie z produkcji (po wpisaniu klucza Web3Forms). Strona 404 jest gotowa. Certyfikat HTTPS i domena działają.
