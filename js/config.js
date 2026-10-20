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
  /* Kalendarz zajęć grupowych (Cal.com). Dopóki lista jest pusta, strona pokazuje podgląd z przykładowymi danymi.
     Lista wydarzeń, po jednym na grupę. Jedno wydarzenie to sam kalendarz,
     kilka to zakładki z nazwami. Nowa grupa to jedna linijka w tej liście.
     Zajęcia indywidualne (solo / para) nie mają kalendarza, tylko formularz. */
  calcom: {
    grupowe: [
      { nazwa: 'Początkujący', adres: 'https://cal.com/sundayswimmingclub/zajecia-poczatkujacy' },
      { nazwa: 'Middle Man', adres: 'https://cal.com/sundayswimmingclub/zajecia-middle-man' },
      { nazwa: 'PRO', adres: 'https://cal.com/sundayswimmingclub/zajecia-pro' }
    ]
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
