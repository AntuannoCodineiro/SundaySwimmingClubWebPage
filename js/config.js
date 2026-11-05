/* Konfiguracja strony. Tu, w jednym miejscu, wpisujemy klucze i adresy zewnętrznych usług.
   Strona jest statyczna, więc wszystko tutaj jest publiczne. Nie wpisuj żadnych tajnych kluczy. */
window.SSC_CONFIG = {
  formularze: {
    /* 'web3forms' albo 'formspree' */
    dostawca: 'web3forms',
    /* web3forms: https://api.web3forms.com/submit
       formspree: https://formspree.io/f/<ID_FORMULARZA> */
    endpoint: 'https://api.web3forms.com/submit',
    /* Klucz dostępu Web3Forms dla sundayswimmingclubpoznan@gmail.com. Jest publiczny z założenia
       (strona statyczna musi go zawierać w kodzie). Przy Formspree zostaw pusty, ID jest w endpoincie. */
    klucz: '7846be8c-3fcc-4eba-b641-f9190c10f8fb',
    emailKlubu: 'sundayswimmingclubpoznan@gmail.com'
  },
  /* Mail zwrotny po zapisie na zajęcia (EmailJS). Dopóki któreś z pól jest puste, strona go nie wysyła.
     Identyfikatory i klucz publiczny bierze się z panelu EmailJS, nie są tajne. Prywatnego klucza tu nie wpisuj. */
  mailZwrotny: {
    serviceId: '',
    templateId: '',
    publicKey: ''
  },
  analityka: {
    /* Identyfikator pomiaru Google Analytics 4. Skrypt Google ładuje się dopiero po zgodzie
       na statystyki w banerze cookies. */
    gaId: 'G-YWJBJ44WZN'
  },
  instagram: {
    url: 'https://www.instagram.com/sunday_swimming_club/',
    /* Adres własnego feedu (Cloudflare Worker). Posty ładują się dopiero po zgodzie na treści zewnętrzne. */
    feedUrl: 'https://sunday-instagram-feed.sunday-instagram-feed.workers.dev/feed'
  }
};
