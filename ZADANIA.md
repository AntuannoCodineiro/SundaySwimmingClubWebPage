# Sunday Swimming Club: lista zadań

✅ zrobione, ⬜ do zrobienia

Kolejność: najpierw rzeczy, które blokują publikację, potem treści od klienta, potem dopracowanie. W kodzie wszystkie braki są oznaczone `TODO` (szukaj: `TODO` w plikach HTML i w `js/`).

## 1. Blokuje publikację

- ✅ **Domena i hosting.** Domena `sundayswimmingclub.pl` działa na GitHub Pages (repo `SundaySwimmingClubWebPage`, DNS u SEOhost, HTTPS włączony). Materiały klienta zostają poza repo (`.gitignore`).
- ✅ **Wysyłka formularzy.** Klucz Web3Forms jest wpisany w `js/config.js`.
- ✅ **Test wysyłki na prawdziwym kluczu.** Przetestowane na stronie produkcyjnej: wszystkie trzy formularze przyjęły zgłoszenie (zgłoszenia idą na tymczasowy adres, do przełączenia na adres klubu w panelu Web3Forms).
- ⬜ **Przełączenie odbioru zgłoszeń na adres klubu.** Po potwierdzeniu ze strony klubu zmienić adres przy kluczu w panelu Web3Forms na `sundayswimmingclubpoznan@gmail.com`.
- ✅ **Reprezentacja stowarzyszenia.** Stowarzyszenie reprezentuje Kacper Matysiak.
- ✅ **Regulamin działalności stowarzyszenia zwykłego.** Zapytać Kacpra, czy klub ma regulamin działalności (stowarzyszenie zwykłe zwykle go ma, składa się go przy wpisie do ewidencji) i czy forma prawna pozwala pobierać opłaty za zajęcia. Potwierdzić z księgowym lub prawnikiem.
- ⬜ **Polityka prywatności.** Wersja robocza jest napisana (administrator, cele, odbiorcy, prawa, cookies z tabelą). Uzupełnić pola TODO (dostawca formularzy i hostingu, okresy przechowywania, zgody na wizerunek), przejrzeć z prawnikiem, usunąć `noindex` i dopisać do `sitemap.xml`.
- ✅ **Regulamin zajęć.** Nie jest publikowany na stronie, dostępny jest na zajęciach. Strona regulaminu i link w stopce usunięte.
- ⬜ **Zgody na wizerunek.** Zebrać zgody osób widocznych na zdjęciach (galeria, oferta, klub). Nowa osoba na zdjęciu z odkrytego basenu (`IMG_3514`). Czekamy na informację od klienta.
- ✅ **Google Analytics.** Identyfikator pomiaru `G-YWJBJ44WZN` jest wpisany w `js/config.js`. Skrypt ładuje się po zgodzie w banerze cookies.
- ⬜ **Ustawienia Google Analytics.** Ustawić retencję danych na 14 miesięcy (Administracja → Zbieranie danych → Przechowywanie danych) i przetestować w Raporty → Czas rzeczywisty po zaakceptowaniu cookies na stronie.
- ⬜ **Czcionki Google Fonts.** Ładują się z serwerów Google bez zgody (przeglądarka przekazuje adres IP). Zdecydować, czy hostujemy je u siebie, żeby uniknąć tej kwestii.
- ⬜ **Baner cookies.** Przetestować na prawdziwej domenie i sprawdzić listę cookies w przeglądarce po zgodzie, uzupełnić tabelę w polityce prywatności.

## 2. Treści i dane od klienta

- ⬜ **Widżet Instagrama.** Adres profilu jest wpisany (`instagram.url` w `js/config.js`). Robimy autorski widżet zamiast LightWidget. Czekamy na potwierdzenie od klienta i dostęp do konta na Instagramie. Do tego czasu pokazuje się podgląd ze zdjęć.
- ⬜ **Zdjęcie hero.** Zdjęcie zgodne z konceptem (podwodne, pełny kadr). Na razie jest `IMG_4040`.
- ⬜ **Czarny czepek.** Jest wariantem wygenerowanym, klub go jeszcze nie ma. Użyty w sekcji o grupach, na kartach planów i w sekcji zamykającej na stronie głównej.
- ⬜ **Park Kasprowicza i openwater.** Zdecydować, czy dopisać je też do stopki, strony kontaktu i danych strukturalnych (na razie tylko dopisek na stronie Klub).
- ⬜ **Pływalnie w formularzach.** Sprawdzić, czy lista basenów w formularzach zapisów ma obejmować też Park Kasprowicza.
- ⬜ **Zdjęcia do galerii.** Na Dysku nie ma więcej nowych zdjęć niż `IMG_3514`. Dosłać kolejne, jeśli mają wejść do galerii.
- ⬜ **Treść „Gdzie pływamy”.** Zatwierdzić, czy na stronie głównej zostaje lista dni przy pływalniach.

## 3. Rezerwacje i harmonogram

- ⬜ **Harmonogram grup.** Strona rezerwacji pokazuje grupy MiddleMan, MiddleMan+ i PRO (Grunwald, Chwiałka, Rataje) według informacji od klienta. Potwierdzić godziny, nazwy grup i czy jest jeszcze grupa dla początkujących.
- ⬜ **Zmiany harmonogramu.** Godziny są wpisane w `rezerwacje.html` (sekcja „Harmonogram zajęć grupowych”). Ustalić, kto i jak je zmienia.
- ⬜ **Kalendarz Cal.com.** Odłożony. Wrócić do tematu, gdy klub będzie gotowy na rezerwacje online (wcześniejszy kod i ustawienia są w historii gita).
- ⬜ **Lista rezerwowa.** Ustalić, jak jest prowadzona (strona mówi: 8 miejsc w grupie i 2 miejsca rezerwowe).

## 4. Dopracowanie wyglądu i treści

- ⬜ **Poziomy grup.** Kolor czepka nie oznacza poziomu, ale w sekcji „Jak dobieramy grupy” (klub) każdy z czterech poziomów ma czepek w innym kolorze. Zostawić, zrobić jednokolorowo albo usunąć czepki.
- ⬜ **Zdjęcie hero.** Sprawdzić kadr na różnych telefonach i dobrać `object-position`.
- ⬜ **Kroki „Twoja droga”.** Zatwierdzić teksty z prototypu (są roboczymi propozycjami).
- ⬜ **Teksty z prototypu.** Przejrzeć nagłówki i opisy ofert. Treści FAQ, kadry i opisu klubu są od klienta i zostają bez zmian.
- ⬜ **Logo i ikony.** Sprawdzić favicon i grafikę udostępniania (`img/og.jpg`) po ustaleniu domeny, np. w podglądzie linku na Facebooku.
- ✅ **Analityka.** Zdecydowano: Google Analytics po zgodzie w banerze cookies (zostaje wpisać identyfikator, patrz wyżej).

## 5. Techniczne przed startem

- ⬜ **Przeglądarki.** Przetestować w Safari (iPhone), Firefoxie i Edge. Sprawdzono tylko Chrome na 360, 768 i 1280 px.
- ⬜ **Dostępność.** Przejść stronę klawiaturą i czytnikiem ekranu, sprawdzić kontrast narzędziem automatycznym.
- ⬜ **Wydajność.** Zmierzyć Lighthouse na wdrożonej stronie (szczególnie hero i galeria).
- ⬜ **SEO.** Zgłosić `sitemap.xml` w Google Search Console, sprawdzić dane strukturalne (SportsClub, FAQPage) w teście wyników rozszerzonych, uzupełnić adres, godziny i `sameAs`.
- ⬜ **Nagłówek i stopka.** Są powtórzone w 10 plikach HTML. Każda zmiana menu lub stopki wymaga poprawki we wszystkich.
- ✅ **Repozytorium.** Kod jest w `AntuannoCodineiro/SundaySwimmingClubWebPage` na GitHubie (czysta historia, bez materiałów klienta).
- ⬜ **Po wdrożeniu.** Wysłać testowe zgłoszenie z produkcji (po wpisaniu klucza Web3Forms). Strona 404 jest gotowa. Certyfikat HTTPS i domena działają.
