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
  analityka: {
    /* Identyfikator pomiaru Google Analytics 4. Skrypt Google ładuje się dopiero po zgodzie
       na statystyki w banerze cookies. */
    gaId: 'G-YWJBJ44WZN'
  },
  instagram: {
    url: 'https://www.instagram.com/sunday_swimming_club/',
    /* TODO (klient): identyfikator widżetu z lightwidget.com (ciąg znaków z adresu osadzenia). */
    lightwidgetId: ''
  }
};
