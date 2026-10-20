/* Konfiguracja strony. Tu, w jednym miejscu, wpisujemy klucze i adresy zewnętrznych usług.
   Nie wpisuj tu prawdziwego klucza przed wdrożeniem w repozytorium, tylko na hostingu (klucz Web3Forms
   i tak jest publiczny z założenia, ale nie trzymamy go w kodzie). */
window.SSC_CONFIG = {
  formularze: {
    /* 'web3forms' albo 'formspree' */
    dostawca: 'web3forms',
    /* web3forms: https://api.web3forms.com/submit
       formspree: https://formspree.io/f/<ID_FORMULARZA> */
    endpoint: 'https://api.web3forms.com/submit',
    /* TODO (klient): klucz dostępu Web3Forms wygenerowany dla sundayswimmingclubpoznan@gmail.com.
       Przy Formspree zostaw pusty, ID jest w endpoincie. */
    klucz: '',
    emailKlubu: 'sundayswimmingclubpoznan@gmail.com'
  },
  analityka: {
    /* TODO (klient): identyfikator pomiaru Google Analytics 4, np. 'G-XXXXXXXXXX'.
       Skrypt Google ładuje się dopiero po zgodzie na statystyki w banerze cookies. */
    gaId: ''
  },
  instagram: {
    url: 'https://www.instagram.com/sunday_swimming_club/',
    /* TODO (klient): identyfikator widżetu z lightwidget.com (ciąg znaków z adresu osadzenia). */
    lightwidgetId: ''
  }
};
