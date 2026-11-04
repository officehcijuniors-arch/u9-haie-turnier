/* Zentrale Turnierdaten. Teilnehmerlinks verwenden, niemals Formular-Bearbeitungslinks. */
window.TOURNAMENT = {
  photos: [
    {src:'assets/entrance.jpg', de:'Einlauf durch das Haifischmaul auf das Eis', en:'A player takes to the ice through the shark entrance'},
    {src:'assets/team.jpg', de:'Gemeinsamer Jubel der Nachwuchsmannschaft auf dem Eis', en:'The youth team celebrates together on the ice'},
    {src:'assets/fanclub.jpg', de:'Fans feiern gemeinsam beim Turnier', en:'Fans celebrating together at the tournament'},
    {src:'assets/fans.jpg', de:'Haie-Fans sorgen auf der Tribüne für Stimmung', en:'Sharks fans cheering from the stands'}
  ],
  links: {
    registration: 'https://forms.gle/6WPdacHNJNkLcabc6',
    merchandise: 'https://docs.google.com/forms/d/e/1FAIpQLSeb8JIW73X0lfuIteYP1Gy-FXsZ3QvVUD9qtgwRteNRJZJW1w/viewform',
    tournify: null // Hier später den echten Teilnehmerlink für 2027 eintragen.
  },
  winners: [
    {year: 2023, name: 'HC TIWAG Innsbruck', logo: 'assets/winner-innsbruck.png'},
    {year: 2024, name: 'SC Rheintal Future', logo: 'assets/winner-rheintal.png'},
    {year: 2025, name: 'USG Zoldo', logo: 'assets/winner-zoldo.png'},
    {year: 2026, name: 'HC TIWAG Innsbruck', logo: 'assets/winner-innsbruck.png'},
    {year: 2027, name: null, logo: null, upcoming: true}
  ]
};
window.TRANSLATIONS = {
  de: {
    skip:'Zum Inhalt',navInfo:'Das Turnier',navTeams:'Für Teams',navGames:'Spielplan',menu:'Menü',heroEyebrow:'Internationales U9-Eishockeyturnier',heroSub:'Kleine Haie. Großes Eishockey.',date:'13. & 14. März 2027',register:'Mannschaft melden',discover:'Turnier entdecken',age:'Nachwuchs',international:'International',teamArea:'Alles für euer Team',infoLabel:'Eishockey verbindet',infoTitle:'Ein Wochenende.\nEin Eis. Viele Nationen.',infoText:'Willkommen beim internationalen U9 TIWAG HAIE TURNIER. Am 13. und 14. März 2027 treffen sich Nachwuchsteams in Innsbruck – für Eishockey, Teamgeist und gemeinsame Erlebnisse.',venue:'Tirol, Österreich',venueLink:'Zur Olympiaworld ↗',teamsLabel:'Für eure Vorbereitung',teamsTitle:'Euer Team. Alles bereit.',teamsIntro:'Die wichtigsten Meldungen an einem Ort.\nEinfach online ausfüllen.',teamTag:'Team & Verpflegung',registrationTitle:'Mannschafts­meldung',registrationText:'Mannschaft und Kader melden, vorläufigen Mittagessenbedarf angeben sowie Vereinslogo und Mannschaftsfoto hochladen.',registrationLink:'Zur Mannschaftsmeldung',merchTag:'Turnierartikel',merchText:'Interesse an Turniertrikots, Mini-Sticks und Pucks? Teilt uns euren Bedarf über das Formular mit.',merchLink:'Zur Bedarfsmeldung',formNote:'Die Formulare öffnen sich in einem neuen Tab.',scheduleLabel:'Mitten im Spiel',scheduleTitle:'Spielplan.\nErgebnisse. Emotionen.',scheduleText:'Spielplan, Ergebnisse und Tabellen zum U9 TIWAG HAIE TURNIER 2027 findet ihr auf Tournify.',tournifyLabel:'TURNIER 2027',tournifyLink:'Zum Spielplan 2027',fameLabel:'Unsere Turniergeschichte',fameIntro:'Große Momente für kleine Champions.\nUnsere Sieger seit 2023.',fameNote:'2027 schreiben wir das nächste Kapitel.',winner:'Turniersieger',pending:'Sieger folgt',upcoming:'Wer holt den Pokal?',logoPending:'Logo folgt',footerLine:'Nachwuchs. Leidenschaft. Haie.',backTop:'Nach oben ↑',draftNote:'Vorschau · Betreiber- und Datenschutzhinweise folgen vor Veröffentlichung.'
  },
  en: {
    skip:'Skip to content',navInfo:'The tournament',navTeams:'For teams',navGames:'Schedule',menu:'Menu',heroEyebrow:'International U9 ice hockey tournament',heroSub:'Little sharks. Big hockey.',date:'13 & 14 March 2027',register:'Register your team',discover:'Explore the tournament',age:'Youth hockey',international:'International',teamArea:'Everything for your team',infoLabel:'Hockey brings us together',infoTitle:'One weekend.\nOne rink. Many nations.',infoText:'Welcome to the international U9 TIWAG HAIE TURNIER. On 13 and 14 March 2027, youth teams meet in Innsbruck for ice hockey, team spirit and shared experiences.',venue:'Tyrol, Austria',venueLink:'Visit Olympiaworld ↗',teamsLabel:'Get ready for the tournament',teamsTitle:'Your team. All set.',teamsIntro:'Your essential forms in one place.\nQuick and easy to complete online.',teamTag:'Team & meals',registrationTitle:'Team registration',registrationText:'Register your team and roster, submit your provisional lunch requirements, and upload your club logo and team photo.',registrationLink:'Open team registration',merchTag:'Tournament merchandise',merchText:'Interested in tournament jerseys, mini sticks and pucks? Let us know what your team needs using the form.',merchLink:'Open merchandise enquiry',formNote:'Forms open in a new tab.',scheduleLabel:'Follow the action',scheduleTitle:'Fixtures.\nResults. Emotions.',scheduleText:'Find fixtures, results and standings for the U9 TIWAG HAIE TURNIER 2027 on Tournify.',tournifyLabel:'2027 TOURNAMENT',tournifyLink:'View 2027 fixtures',fameLabel:'Our tournament history',fameIntro:'Big moments for little champions.\nOur winners since 2023.',fameNote:'In 2027, we write the next chapter.',winner:'Tournament winner',pending:'Winner to be added',upcoming:'Who will lift the trophy?',logoPending:'Logo coming soon',footerLine:'Youth. Passion. Sharks.',backTop:'Back to top ↑',draftNote:'Preview · Organiser and privacy information will be added before publication.'
  }
};

Object.assign(window.TRANSLATIONS.de, {pausePhotos:'Pause',playPhotos:'Abspielen',pastMoments:'Momente vergangener Turniere',galleryLabel:'Mehr als ein Spiel',galleryTitle:'Das sind unsere Momente.',galleryIntro:'Einblicke in vergangene Turniere.\nAuf dem Eis und daneben.',closePhoto:'Schließen ×',previousPhoto:'Vorheriges Foto',nextPhoto:'Nächstes Foto',showPhoto:'Foto anzeigen',enlargePhoto:'Foto vergrößern',photoRegion:'Turniermomente'});
Object.assign(window.TRANSLATIONS.en, {pausePhotos:'Pause',playPhotos:'Play',pastMoments:'Moments from past tournaments',galleryLabel:'More than a game',galleryTitle:'These are our moments.',galleryIntro:'A look back at past tournaments.\nOn the ice and beyond.',closePhoto:'Close ×',previousPhoto:'Previous photo',nextPhoto:'Next photo',showPhoto:'Show photo',enlargePhoto:'Enlarge photo',photoRegion:'Tournament moments'});

Object.assign(window.TRANSLATIONS.de, {tournifyPending:'Link folgt in Kürze.'});
Object.assign(window.TRANSLATIONS.en, {tournifyPending:'Link coming soon.'});
