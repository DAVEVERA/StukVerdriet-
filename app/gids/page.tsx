'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

// ─── AGENDA DATA ────────────────────────────────────────────────
interface AgendaEvent {
  title: string
  date: string
  dateSort: string
  location: string
  snippet: string
  url: string
  provincies: string[]
  types: string[]
  month: string
}

const agendaEvents: AgendaEvent[] = [
  {
    title: 'Weet jij wat je wilt? Praat mee over leven tot het laatst',
    date: '07 april 2026',
    dateSort: '2026-04-07',
    location: 'Mariënstein, IJsselstein',
    snippet: 'Praten over wensen rondom de laatste levensfase is soms moeilijk. Toch helpt het om hier op tijd over na te denken.',
    url: 'https://overpalliatievezorg.nl/agenda/informatiebijeenkomst-weet-u-wat-u-wilt-in-amersfoort',
    provincies: ['Utrecht'],
    types: ['Bijeenkomst'],
    month: 'april',
  },
  {
    title: 'Workshop Naasten nabij — Breda',
    date: '07 april 2026',
    dateSort: '2026-04-07',
    location: 'Breda',
    snippet: 'In deze workshop leer je wat er gebeurt in de verschillende fases van het sterven.',
    url: 'https://overpalliatievezorg.nl/agenda/naasten-nabij-7eeffab4eb0788880ad4445f882491b7-579d93b9e2125fe59ee4eef9192fc5c0-c796f7a550cf7a5f07e7fb9d04df51fc',
    provincies: ['Noord-Brabant'],
    types: ['Lezing of workshop'],
    month: 'april',
  },
  {
    title: 'Dood uit de pot',
    date: '08 april 2026',
    dateSort: '2026-04-08',
    location: 'Noorderbreedte, Klazienaveen',
    snippet: 'Zorg als iemand ziek is, is normaal. Maar wat als genezing niet meer mogelijk is? Ook dan is er zorg: palliatieve zorg.',
    url: 'https://overpalliatievezorg.nl/agenda/dood-uit-de-pot',
    provincies: ['Drenthe'],
    types: ['Bijeenkomst'],
    month: 'april',
  },
  {
    title: 'Leven tot het laatst',
    date: '17 april 2026',
    dateSort: '2026-04-17',
    location: 'Hertenheym, Herten',
    snippet: 'Bijeenkomst over palliatieve zorg in Herten.',
    url: 'https://overpalliatievezorg.nl/agenda/leven-tot-het-laatst',
    provincies: ['Limburg'],
    types: ['Bijeenkomst'],
    month: 'april',
  },
  {
    title: 'Nadenken over de toekomst bij longziekten: behandelwensen en behandelgrenzen',
    date: '20 april 2026',
    dateSort: '2026-04-20',
    location: 'Ciro, Horn',
    snippet: 'Nadenken over de toekomst, behandelwensen en behandelgrenzen bij longziekten.',
    url: 'https://overpalliatievezorg.nl/agenda/longziekten-behandelwensen-behandelgrenzen-ciro-horn',
    provincies: ['Limburg'],
    types: ['Bijeenkomst', 'Lotgenotencontact'],
    month: 'april',
  },
  {
    title: 'Cafe Doodgewoon Land van Cuijk',
    date: '07 mei 2026',
    dateSort: '2026-05-07',
    location: 'Sociom, Boxmeer',
    snippet: 'Tijdens deze avond vind je waardevolle informatie, ervaringsverhalen en ontmoetingen met anderen in een vergelijkbare situatie.',
    url: 'https://overpalliatievezorg.nl/agenda/cafe-doodgewoon-land-van-cuijk',
    provincies: ['Noord-Brabant'],
    types: ['Bijeenkomst', 'Lotgenotencontact'],
    month: 'mei',
  },
  {
    title: 'Leven tot het laatst — Stichting Parkinson de Kempen',
    date: '18 mei 2026',
    dateSort: '2026-05-18',
    location: 'In d\'n Aacherum, Reusel',
    snippet: 'Vanuit Cordaad komt een sociaal werker de inleiding verzorgen ondersteund door iemand van de VPTZ en een huisarts.',
    url: 'https://overpalliatievezorg.nl/agenda/leven-tot-het-laatst-stichting-parkinson-de-kempen',
    provincies: ['Noord-Brabant'],
    types: ['Bijeenkomst', 'Lotgenotencontact'],
    month: 'mei',
  },
  {
    title: 'Live video podcast — Landelijk Expertisecentrum Sterven',
    date: '20 mei 2026',
    dateSort: '2026-05-20',
    location: 'Online',
    snippet: 'Op woensdagavond 20 mei wordt stilgestaan bij het 10-jarig bestaan van het Landelijk Expertisecentrum Sterven.',
    url: 'https://overpalliatievezorg.nl/agenda/live-video-podcast-landelijk-expertisecentrum-sterven',
    provincies: ['Online'],
    types: ['Bijeenkomst'],
    month: 'mei',
  },
  {
    title: 'Informatiemarkt palliatieve zorg Hoogezand-Sappemeer',
    date: '22 mei 2026',
    dateSort: '2026-05-22',
    location: 'Hoogezand-Sappemeer',
    snippet: 'Algemene informatie over palliatieve zorg met verschillende stands, informatiepanelen, film en mogelijk VR.',
    url: 'https://overpalliatievezorg.nl/agenda/informatiemarkt-palliatieve-zorg-hoogezand-sappemeer',
    provincies: ['Groningen'],
    types: ['Informatiemarkt'],
    month: 'mei',
  },
  {
    title: 'Workshop Naasten nabij — Kapelle',
    date: '27 mei 2026',
    dateSort: '2026-05-27',
    location: 'De Vroone, Kapelle',
    snippet: 'In deze workshop leer je wat er gebeurt in de verschillende fases van het sterven.',
    url: 'https://overpalliatievezorg.nl/agenda/naasten-nabij-7eeffab4eb0788880ad4445f882491b7',
    provincies: ['Zeeland'],
    types: ['Lezing of workshop'],
    month: 'mei',
  },
  {
    title: 'Workshop Naasten nabij — Breda',
    date: '15 juni 2026',
    dateSort: '2026-06-15',
    location: 'Breda',
    snippet: 'In deze workshop leer je wat er gebeurt in de verschillende fases van het sterven.',
    url: 'https://overpalliatievezorg.nl/agenda/naasten-nabij-7eeffab4eb0788880ad4445f882491b7-579d93b9e2125fe59ee4eef9192fc5c0-c796f7a550cf7a5f07e7fb9d04df51fc-279cbf997132c930cb28cbef173f7214',
    provincies: ['Noord-Brabant'],
    types: ['Lezing of workshop'],
    month: 'juni',
  },
  {
    title: 'Workshop Naasten nabij — Breda',
    date: '27 augustus 2026',
    dateSort: '2026-08-27',
    location: 'Breda',
    snippet: 'In deze workshop leer je wat er gebeurt in de verschillende fases van het sterven.',
    url: 'https://overpalliatievezorg.nl/agenda/naasten-nabij-7eeffab4eb0788880ad4445f882491b7-579d93b9e2125fe59ee4eef9192fc5c0',
    provincies: ['Noord-Brabant'],
    types: ['Lezing of workshop'],
    month: 'augustus',
  },
  {
    title: 'Lezing leven tot het laatst — Kerkrade',
    date: '09 september 2026',
    dateSort: '2026-09-09',
    location: 'Alzheimer Café Kerkrade',
    snippet: 'Wat is goede palliatieve zorg en wat kan het voor jou betekenen?',
    url: 'https://overpalliatievezorg.nl/agenda/lezing-leven-tot-het-laatst-landgraaf-74208bb31918e5ce697c637b057ac8ca',
    provincies: ['Limburg'],
    types: ['Bijeenkomst', 'Lezing of workshop'],
    month: 'september',
  },
  {
    title: 'Lezing leven tot het laatst — Landgraaf',
    date: '09 september 2026',
    dateSort: '2026-09-09',
    location: '\'t Ströatje, Landgraaf',
    snippet: 'Wat is goede palliatieve zorg en wat kan het voor jou betekenen?',
    url: 'https://overpalliatievezorg.nl/agenda/lezing-leven-tot-het-laatst-landgraaf',
    provincies: ['Limburg'],
    types: ['Bijeenkomst', 'Lezing of workshop'],
    month: 'september',
  },
  {
    title: 'Week van de Palliatieve Zorg 2026',
    date: '03 – 10 oktober 2026',
    dateSort: '2026-10-03',
    location: 'Landelijk',
    snippet: 'Tijdens de Week van de Palliatieve Zorg staat ook in 2026 palliatieve zorg volop in de spotlights!',
    url: 'https://overpalliatievezorg.nl/agenda/week-van-de-palliatieve-zorg-2026',
    provincies: ['Online'],
    types: ['Bijeenkomst'],
    month: 'oktober',
  },
]

const ALL_PROVINCIES = ['Alle', 'Drenthe', 'Groningen', 'Limburg', 'Noord-Brabant', 'Online', 'Utrecht', 'Zeeland']
const ALL_TYPES = ['Alle', 'Bijeenkomst', 'Informatiemarkt', 'Lezing of workshop', 'Lotgenotencontact']

// ─── ERVARINGSVERHALEN ──────────────────────────────────────────
interface Verhaal {
  naam: string
  leeftijd?: string
  titel: string
  teaser: string
  volledig: string
  url: string
  thema: string
}

const verhalen: Verhaal[] = [
  {
    naam: 'Loraine',
    leeftijd: '27 jaar',
    titel: 'Palliatief en sportief',
    teaser: '"Als ik stop met bewegen, geef ik me gewonnen." Loraine heeft stadium 4 eierstokkanker en traint nog steeds — twee keer per week.',
    volledig: 'Loraine is 27 jaar en heeft stadium 4 eierstokkanker. Palliatief. Toch staat ze twee keer per week in de sportschool. Niet omdat ze denkt dat het haar geneest, maar omdat het haar het gevoel geeft dat ze nog leeft. Dat ze nog iets kan. "Als ik stop met bewegen, geef ik me gewonnen. En dat doe ik niet." Lees haar volledig verhaal op de website van Over Palliatieve Zorg.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/loraine-sporten-palliatieve-fase',
    thema: 'Jong & palliatief',
  },
  {
    naam: 'Roger',
    leeftijd: '67 jaar',
    titel: 'Ik wil niet dat mijn vrouw mijn zorgverlener wordt',
    teaser: 'Al acht jaar leeft Roger met kanker. Over liefde, grenzen en hoe je voorkomt dat je partner je verzorger wordt.',
    volledig: 'Roger heeft al acht jaar kanker. In die tijd heeft hij geleerd wat hij wel en niet wil. Eén ding is hem helder: zijn vrouw moet zijn vrouw blijven, niet zijn zorgverlener. "Als zij mijn zorg op zich neemt, verliezen we iets wat ik niet wil verliezen." Een verhaal over liefde, grenzen bewaken en open communicatie in de palliatieve fase.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/roger-praten-met-partner',
    thema: 'Naasten & mantelzorg',
  },
  {
    naam: 'Willeke',
    leeftijd: '53 jaar',
    titel: 'Wij praten er veel over',
    teaser: 'Hoe vertel je je kinderen dat hun vader sterft? Willeke koos voor openheid. Over rouw, kinderen en het taboe doorbreken.',
    volledig: 'Willeke\'s man was ongeneeslijk ziek aan galblaaskanker. Ze had drie kinderen. Ze koos ervoor om met hen open te praten — over de ziekte, over de dood, over wat er zou komen. "Ik wilde niet dat ze het nieuws hoorden als een klap. Ik wilde dat ze mee mochten dragen." Over hoe kinderen rouwen, en hoe je als ouder eerlijk kunt zijn zonder te overweldigen.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/rouw-bij-kinderen-willeke',
    thema: 'Kinderen & rouw',
  },
  {
    naam: 'Dinie',
    leeftijd: '64 jaar',
    titel: 'Even mijn zinnen verzetten',
    teaser: 'Na het overlijden van haar man weet Dinie niet meer hoe ze verder moet. Over de leegte, de nazorg en hoe je langzaam weer adem haalt.',
    volledig: 'Dinie\'s man overleed in het hospice. Na zijn dood stond de wereld stil. "Ik wist niet meer hoe ik de dag door moest komen. Alles deed pijn." Ze schrijft over de nazorg die ze ontving — en over wat er ontbrak. Over de leegte na het verlies, de kleine stappen terug naar het leven, en het belang van mensen die er gewoon zijn zonder iets te hoeven zeggen.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/rouw-na-overlijden',
    thema: 'Rouw na overlijden',
  },
  {
    naam: 'Eva',
    leeftijd: '24 jaar',
    titel: "Het stukje 'ongeneeslijk' heeft er flink ingehakt",
    teaser: 'Eva is 24 en heeft een zeldzame vorm van longkanker. Over jong zijn, de toekomst die er niet meer is, en hoe ze toch verder gaat.',
    volledig: 'Eva is 24 jaar als ze te horen krijgt dat ze ongeneeslijk ziek is. Een zeldzame vorm van longkanker, stadium 4. "Het stukje \'ongeneeslijk\' heeft er flink ingehakt. Ik had zoveel plannen." Over hoe het is om zo jong te leven met de wetenschap dat het einde nabij is. Over energie bewust verdelen, over wat er écht toe doet — en over de momenten dat je gewoon even niet aan de kanker wil denken.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/accepteren-dat-je-niet-meer-beter-wordt-eva',
    thema: 'Jong & palliatief',
  },
  {
    naam: 'Mara',
    leeftijd: '29 jaar',
    titel: 'Praten over de dood met je partner',
    teaser: 'Mara\'s man heeft een hersentumor. Ze zijn allebei 29. Hoe praat je met je partner over de dood als jullie net begonnen zijn?',
    volledig: 'Mara en haar man Stef zijn 29 jaar als hij de diagnose krijgt: een hersentumor. Palliatief. "Ik wilde zijn vrouw zijn, niet zijn verpleegster. Maar soms kon ik het niet scheiden." Over jong zijn en rouwen terwijl je geliefde er nog is. Over hoe je praat over de dood als je net begonnen bent met leven. Over de zorg die thuis gegeven wordt, en de momenten die er het meest toe doen.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/mara-praten-over-de-dood-met-je-partner',
    thema: 'Naasten & mantelzorg',
  },
  {
    naam: 'Carin',
    leeftijd: undefined,
    titel: 'Die drie weken waren lang, en veel te kort tegelijk',
    teaser: 'Carins man overleed in drie weken tijd aan alvleesklierkanker. Over de stervensfase, het afscheid en alles wat daartussenin zit.',
    volledig: '"We hadden net geen tijd gehad om te wennen aan de diagnose, of hij was al aan het sterven." Carin beschrijft de drie weken tussen de diagnose en het overlijden van haar man aan alvleesklierkanker. Over de stervensfase, de palliatieve zorg die ze ontvingen, het afscheid nemen, en de stilte die daarna komt. Een verhaal dat laat zien hoe kostbaar — en hoe snel — de laatste tijd kan zijn.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/carin-stervensfase',
    thema: 'Stervensfase',
  },
  {
    naam: 'Joost',
    leeftijd: '59 jaar',
    titel: 'Ik ben niet van porselein, ik kan wel tegen een stootje',
    teaser: 'Joost heeft ongeneeslijke longkanker. Wat hij wil van zijn vrienden? Gewoon praten. Niet omheen draaien. Hem als mens zien.',
    volledig: '"Mensen weten niet wat ze moeten zeggen, dus zeggen ze niets. Of ze zeggen dingen die pijn doen." Joost heeft uitgezaaide longkanker en vraagt zijn omgeving om gewoon te blijven praten. Niet om hem te sparen, maar om bij hem te blijven. Een eerlijk verhaal over wat ongeneeslijk ziek zijn doet met vriendschappen — en wat mensen écht kunnen doen.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/joost-praten-met-iemand-die-ongeneeslijk-ziek-is',
    thema: 'Omgeving & communicatie',
  },
  {
    naam: 'Ria',
    leeftijd: '77 jaar',
    titel: 'Donderslag bij heldere hemel',
    teaser: 'Ria\'s man bleek plotseling ongeneeslijk ziek. In no time was het voorbij. Over de schok, het verlies en het leven daarna.',
    volledig: 'Ria\'s man was gezond — tot hij dat ineens niet meer was. De diagnose kwam als een donderslag bij heldere hemel: uitgezaaide kanker, ongeneeslijk. Korte tijd later was hij er niet meer. "Ik had geen tijd om te wennen. Ik had nauwelijks tijd om afscheid te nemen." Over de schok van plotseling verlies, de nazorg die volgde, en hoe je een leven opbouwt na iemand die er zo ineens niet meer is.',
    url: 'https://overpalliatievezorg.nl/ervaringsverhalen/rouw-nazorg',
    thema: 'Rouw na overlijden',
  },
]

// ─── HANDIGE LINKS ───────────────────────────────────────────────
interface Link {
  naam: string
  url: string
  omschrijving: string
}

interface LinkCategorie {
  titel: string
  links: Link[]
}

const linkCategorieën: LinkCategorie[] = [
  {
    titel: 'Palliatieve zorg',
    links: [
      { naam: 'PZNL', url: 'https://pznl.nl', omschrijving: 'Nationale kennisorganisatie voor palliatieve zorg in Nederland.' },
      { naam: 'Over Palliatieve Zorg', url: 'https://overpalliatievezorg.nl', omschrijving: 'Begrijpelijke informatie voor iedereen die te maken heeft met palliatieve zorg.' },
      { naam: 'Agora', url: 'https://agora.nl', omschrijving: 'Expertisecentrum palliatieve zorg voor zorgprofessionals en het publiek.' },
      { naam: 'Palliaweb', url: 'https://palliaweb.nl', omschrijving: 'Richtlijnen, tools en informatie over palliatieve zorg voor zorgverleners.' },
      { naam: 'Expertisecentrum Sterven', url: 'https://expertisecentrumsterven.nl', omschrijving: 'Aandacht voor het sterven en de kwaliteit van de laatste levensfase.' },
      { naam: 'Hospice Nederland', url: 'https://hospicenederland.nl', omschrijving: 'Landelijk netwerk van hospices en bijna-thuis-huizen.' },
      { naam: 'Toon Hermans Huis', url: 'https://toonhermanshuis.nl', omschrijving: 'Inloophuizen voor mensen met kanker, hun naasten en nabestaanden.' },
    ],
  },
  {
    titel: 'Rouw & verliesverwerking',
    links: [
      { naam: 'Steun bij Verlies', url: 'https://steunbijverlies.nl', omschrijving: 'Nationaal steunpunt met informatie en een overzicht van rouwbegeleiders.' },
      { naam: 'Rouw.nl', url: 'https://rouw.nl', omschrijving: 'Informatie, tips en begeleiding bij rouw en verlies.' },
      { naam: 'Humanitas', url: 'https://humanitas.nl', omschrijving: 'Vrijwillige thuishulp en maatschappelijke ondersteuning, ook bij rouw.' },
      { naam: 'Korrelatie', url: 'https://korrelatie.nl', omschrijving: 'Telefonische en online psychosociale hulp bij verlies en verdriet.' },
      { naam: 'Achter de Regenboog', url: 'https://achterderegenboog.nl', omschrijving: 'Rouwbegeleiding, lotgenotengroepen en educatie voor iedereen die rouwt.' },
      { naam: 'VHV Rouwbegeleiding', url: 'https://vhv-bg.nl', omschrijving: 'Beroepsorganisatie voor holistisch vormgegeven begeleiders.' },
      { naam: 'IPSO', url: 'https://ipso.nl', omschrijving: 'Psychosociale ondersteuning voor mensen met kanker en hun naasten.' },
    ],
  },
  {
    titel: 'Baby- en kindverlies',
    links: [
      { naam: 'Sterrenkind', url: 'https://sterrenkind.nl', omschrijving: 'Lotgenotencontact en begeleiding na het verlies van een baby of jong kind.' },
      { naam: 'Kindverlies', url: 'https://kindverlies.nl', omschrijving: 'Steun en verbinding voor ouders die een kind verloren hebben.' },
      { naam: 'In de Wolken', url: 'https://in-de-wolken.nl', omschrijving: 'Ondersteuning na zwangerschapsverlies, doodgeboorte en babyloss.' },
    ],
  },
  {
    titel: 'Kinderen & jongeren in rouw',
    links: [
      { naam: 'NJI — Rouw bij kinderen', url: 'https://nji.nl/rouw', omschrijving: 'Informatie voor ouders en professionals over kinderen en jongeren in rouw.' },
      { naam: 'Vilans', url: 'https://vilans.nl', omschrijving: 'Kenniscentrum voor langdurige zorg, mantelzorg en rouw bij kinderen.' },
      { naam: 'Kinderpalliatief Netwerk', url: 'https://kinderpalliatief.nl', omschrijving: 'Netwerk voor palliatieve zorg voor kinderen en hun gezinnen.' },
    ],
  },
  {
    titel: 'Kanker & ziekte',
    links: [
      { naam: 'Kanker.nl', url: 'https://kanker.nl', omschrijving: 'Informatie, lotgenotencontact en ondersteuning bij kanker.' },
      { naam: 'NFK', url: 'https://nfk.nl', omschrijving: 'Federatie van kankerpatiëntenorganisaties in Nederland.' },
      { naam: 'NVPZ', url: 'https://nvpz.nl', omschrijving: 'Nederlandse Vereniging voor Psychosociale Oncologie.' },
      { naam: 'Nederlands Kanker Collectief', url: 'https://nederlandskankercollectief.nl', omschrijving: 'Samenwerking voor betere palliatieve zorg bij kanker.' },
    ],
  },
  {
    titel: 'Praktische hulp & informatie',
    links: [
      { naam: 'Thuisarts.nl — Rouw', url: 'https://thuisarts.nl', omschrijving: 'Betrouwbare medische informatie over rouw, verlies en palliatieve zorg.' },
      { naam: '113 Zelfmoordpreventie', url: 'https://113.nl', omschrijving: 'Als verdriet te groot wordt — 24/7 bereikbaar via chat of telefoon.' },
      { naam: 'ZonMw — Rouw & Nazorg', url: 'https://zonmw.nl', omschrijving: 'Onderzoek en beleid rondom rouw en nazorg in Nederland.' },
      { naam: 'Centrumonline', url: 'https://centrumonline.nl', omschrijving: 'Online therapie voor rouw, angst en verdriet.' },
    ],
  },
]

// ─── FAQ DATA ─────────────────────────────────────────────────────
interface FAQ {
  vraag: string
  antwoord: string
}

const faqItems: FAQ[] = [
  { vraag: 'Wat is palliatieve zorg?', antwoord: 'Palliatief betekent: verzachtend. Palliatieve zorg is zorg die niet gericht is op genezing, maar op de kwaliteit van leven. Het gaat om het verlichten van pijn en andere klachten, én om aandacht voor emotioneel, sociaal en spiritueel welzijn — voor de patiënt én de naasten.' },
  { vraag: 'Wanneer krijg je palliatieve zorg?', antwoord: 'Palliatieve zorg begint wanneer genezing niet meer mogelijk is door een ongeneeslijke ziekte zoals kanker, COPD, ALS of hartfalen, of door gevorderde ouderdom. De behandeling richt zich dan op het voorkomen en verlichten van klachten, niet op genezing. Dit kan soms al vroeg in het ziekteproces beginnen.' },
  { vraag: 'Wie krijgt palliatieve zorg?', antwoord: 'Iedereen die in de laatste levensfase verkeert door ziekte of ouderdom heeft recht op palliatieve zorg. De zorg geldt ook voor familieleden en naasten, die eveneens begeleiding kunnen krijgen — ook na het overlijden (nazorg).' },
  { vraag: 'Waarom is palliatieve zorg zo belangrijk?', antwoord: 'Onderzoek laat zien dat mensen die goede palliatieve zorg ontvangen minder somber en angstig zijn, minder complicaties ervaren, een betere kwaliteit van leven hebben en minder noodopnames nodig hebben. Het stelt mensen in staat om waardig en zo comfortabel mogelijk te leven tot het einde.' },
  { vraag: 'Wie betaalt voor palliatieve zorg?', antwoord: 'Palliatieve zorg wordt vergoed via drie wegen: de reguliere zorgverzekering (Zvw), de Wet langdurige zorg (Wlz) en de Wet maatschappelijke ondersteuning (Wmo). Wat vergoed wordt hangt af van de situatie en het type zorg. Overleg met je huisarts of zorgverzekeraar.' },
  { vraag: 'Hoe lang duurt palliatieve zorg?', antwoord: 'De duur varieert sterk per persoon — van weken tot maanden of zelfs jaren. Palliatieve zorg is niet hetzelfde als terminale zorg: iemand kan al palliatieve zorg ontvangen terwijl het overlijden nog lang niet nabij is.' },
  { vraag: 'Wie verleent palliatieve zorg?', antwoord: 'Palliatieve zorg wordt verleend door een team van zorgverleners: huisarts, wijkverpleegkundige, medisch specialisten, psychologen, geestelijk verzorgers en vrijwilligers. Afhankelijk van de behoeften kunnen meer of minder disciplines betrokken zijn.' },
  { vraag: 'Waar wordt palliatieve zorg gegeven?', antwoord: 'Palliatieve zorg kan thuis gegeven worden, in het ziekenhuis, in een verpleeghuis, in een bijna-thuis-huis of in een hospice. Veel mensen geven de voorkeur aan zorg thuis. Het is belangrijk dat je wensen hierover vroeg worden besproken met je zorgverleners.' },
  { vraag: 'Wat is het verschil tussen palliatieve zorg en palliatieve terminale zorg?', antwoord: 'Palliatieve zorg richt zich op leven en kan maanden of jaren duren. Palliatieve terminale zorg richt zich op de laatste weken of dagen voor het overlijden. Beide vormen van zorg zijn gericht op kwaliteit van leven, maar de terminale fase vraagt specifieke aandacht voor het stervensproces.' },
  { vraag: 'Wat is het verschil tussen palliatieve sedatie en euthanasie?', antwoord: 'Bij palliatieve sedatie wordt iemand in slaap gebracht om ondraaglijk lijden te verlichten. Het leven wordt niet actief beëindigd. Bij euthanasie wordt het leven door een arts beëindigd op uitdrukkelijk verzoek van de patiënt. Beide zijn legaal in Nederland, maar onder heel andere voorwaarden.' },
  { vraag: 'Begint rouw pas na het overlijden?', antwoord: 'Nee. Rouw kan al beginnen bij de diagnose — dit heet anticiperende rouw. Naasten rouwen soms al lang vóór het overlijden: om het verlies van de toekomst die ze hadden gepland, om de verandering in de relatie, om het zien achteruitgaan van iemand van wie ze houden. Dit is normaal en verdient erkenning.' },
  { vraag: 'Hoe help je iemand die rouwt?', antwoord: 'Het allerbelangrijkste is aanwezig zijn — zonder oordeel, zonder de druk om iemand op te vrolijken. Vraag hoe het écht gaat. Noem de naam van degene die er niet meer is. Doe concrete dingen: boodschappen, koken, rijden. Vermijd uitspraken als "het wordt beter" of "hij/zij is er nu beter aan toe." Blijf er ook na weken en maanden nog zijn.' },
  { vraag: 'Hoe rouwen kinderen?', antwoord: 'Kinderen rouwen anders dan volwassenen. Ze kunnen even spelen en dan ineens huilen — dat is normaal. Ze hebben eerlijkheid nodig, in taal die bij hun leeftijd past. Vermijd eufemismen als "ingeslapen" — dit kan verwarring of angst geven. Geef kinderen de ruimte om vragen te stellen, ook de moeilijke. Structuur en veiligheid zijn essentieel.' },
  { vraag: 'Is er nazorg na het overlijden?', antwoord: 'Ja. Palliatieve zorg eindigt niet bij het overlijden. Naasten en nabestaanden hebben recht op nazorg. Dit kan begeleiding zijn door de huisarts, maatschappelijk werk, een rouwtherapeut of lotgenotengroepen. Het is belangrijk om hier actief naar te vragen, want nazorg is helaas niet altijd vanzelfsprekend.' },
  { vraag: 'Wat zijn de vier dimensies van palliatieve zorg?', antwoord: 'Palliatieve zorg bestaat uit vier dimensies: (1) Lichamelijke zorg — pijn, vermoeidheid, benauwdheid. (2) Psychologische zorg — angst, rouw, emotionele ondersteuning. (3) Sociale zorg — relaties, afscheid nemen, praktische ondersteuning. (4) Spirituele zorg — zingeving, levensvragen, geloof of levensovertuiging.' },
  { vraag: 'Wanneer vraag je om palliatieve zorg?', antwoord: 'Zo vroeg mogelijk. Palliatieve zorg is het meest effectief als het tijdig wordt gestart — niet pas als iemand stervende is. Bespreek het met je huisarts of specialist. Je kunt zelf het gesprek beginnen door te vragen: "Wat als genezing niet meer mogelijk is? Welke zorg is er dan voor mij?"' },
]

// ─── COMPONENT ───────────────────────────────────────────────────
export default function GidsPage() {
  const [activeProvincia, setActiveProvincia] = useState('Alle')
  const [activeType, setActiveType] = useState('Alle')
  const [selectedVerhaal, setSelectedVerhaal] = useState<Verhaal | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Body scroll lock for modal
  useEffect(() => {
    document.body.style.overflow = selectedVerhaal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedVerhaal])

  const filteredEvents = agendaEvents.filter(event => {
    const matchProv = activeProvincia === 'Alle' || event.provincies.includes(activeProvincia)
    const matchType = activeType === 'Alle' || event.types.includes(activeType)
    return matchProv && matchType
  })

  // Group by month
  const eventsByMonth = filteredEvents.reduce<Record<string, AgendaEvent[]>>((acc, ev) => {
    if (!acc[ev.month]) acc[ev.month] = []
    acc[ev.month].push(ev)
    return acc
  }, {})

  return (
    <div className="w-full overflow-x-hidden bg-[#F7F4F0]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#2F4F4F] pt-32 pb-20 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #78A179 0%, transparent 60%), radial-gradient(circle at 80% 20%, #78A179 0%, transparent 50%)' }} />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#78A179]/80" />
            <p className="text-[#78A179] text-[10px] font-bold uppercase tracking-[0.28em]">Wegwijzer</p>
          </div>
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Handvatten bij<br />rouw en verlies
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Betrouwbare Nederlandse organisaties, ervaringsverhalen van mensen die het kennen, en een agenda vol bijeenkomsten — bij elkaar gezet voor iedereen die zoekt.
          </p>

          {/* PZNL badge */}
          <div className="mt-10 inline-flex items-center gap-3 bg-white/8 border border-white/15 rounded-2xl px-5 py-3 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-[#78A179] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <div>
              <p className="text-white text-sm font-bold leading-none">In samenwerking met PZNL</p>
              <a href="https://pznl.nl" target="_blank" rel="noopener noreferrer" className="text-[#78A179] text-xs hover:text-[#96c497] transition-colors">pznl.nl →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Agenda ───────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-5xl py-20">
        <div className="flex items-end justify-between mb-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#78A179] mb-2">Via overpalliatievezorg.nl</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F]">Agenda</h2>
          </div>
          <a href="https://overpalliatievezorg.nl/agenda" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#78A179] hover:text-[#556B2F] transition-colors hidden sm:block">
            Bekijk alle agenda-items →
          </a>
        </div>
        <p className="text-[#2F4F4F]/60 mb-8 max-w-2xl">Bijeenkomsten, lezingen en workshops over palliatieve zorg en rouw in Nederland.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white rounded-2xl border border-[#2F4F4F]/8 shadow-sm">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F4F4F]/40 mr-1">Provincie</span>
            {ALL_PROVINCIES.map(p => (
              <button
                key={p}
                onClick={() => setActiveProvincia(p)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${activeProvincia === p ? 'bg-[#2F4F4F] text-white border-[#2F4F4F]' : 'bg-white text-[#2F4F4F]/60 border-[#2F4F4F]/15 hover:border-[#2F4F4F]/30 hover:text-[#2F4F4F]'}`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="w-full h-px bg-[#2F4F4F]/8 my-1" />
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2F4F4F]/40 mr-1">Type</span>
            {ALL_TYPES.map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${activeType === t ? 'bg-[#78A179] text-white border-[#78A179]' : 'bg-white text-[#2F4F4F]/60 border-[#2F4F4F]/15 hover:border-[#78A179]/30 hover:text-[#78A179]'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Event list */}
        {Object.keys(eventsByMonth).length === 0 ? (
          <div className="py-16 text-center border-2 border-dashed border-[#2F4F4F]/10 rounded-2xl">
            <p className="text-[#2F4F4F]/40 font-medium">Geen evenementen gevonden voor deze filter.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {Object.entries(eventsByMonth).map(([month, events]) => (
              <div key={month}>
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#78A179] capitalize">{month}</h3>
                  <div className="flex-1 h-px bg-[#2F4F4F]/8" />
                </div>
                <div className="space-y-3">
                  {events.map((event, i) => (
                    <a
                      key={i}
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-2xl border border-[#2F4F4F]/8 hover:border-[#78A179]/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="shrink-0 sm:w-28 text-left">
                        <p className="text-sm font-bold text-[#2F4F4F] leading-snug">{event.date.split(' ')[0]}</p>
                        <p className="text-xs text-[#2F4F4F]/40 capitalize">{event.date.split(' ').slice(1).join(' ')}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-[#2F4F4F] group-hover:text-[#78A179] transition-colors leading-snug mb-1">{event.title}</h4>
                        <p className="text-sm text-[#2F4F4F]/55 leading-relaxed mb-2 line-clamp-2">{event.snippet}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {event.location && (
                            <span className="text-[10px] font-medium text-[#2F4F4F]/40 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                              {event.location}
                            </span>
                          )}
                          {event.provincies.map(p => (
                            <span key={p} className="px-2 py-0.5 bg-[#78A179]/10 text-[#78A179] text-[10px] font-bold rounded-full uppercase tracking-wide">{p}</span>
                          ))}
                          {event.types.map(t => (
                            <span key={t} className="px-2 py-0.5 bg-[#2F4F4F]/8 text-[#2F4F4F]/50 text-[10px] font-bold rounded-full uppercase tracking-wide">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 self-center text-[#78A179] opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a href="https://overpalliatievezorg.nl/agenda" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#78A179] hover:text-[#556B2F] transition-colors">
            Bekijk de volledige agenda op overpalliatievezorg.nl →
          </a>
        </div>
      </section>

      {/* ── Ervaringsverhalen ────────────────────────────────── */}
      <section className="bg-[#2F4F4F] py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#78A179] mb-2">Via overpalliatievezorg.nl</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ervaringsverhalen</h2>
          <p className="text-white/50 mb-10 max-w-2xl">Mensen die het van dichtbij meemaakten. Klik op een verhaal om verder te lezen.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verhalen.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelectedVerhaal(v)}
                className="group text-left bg-white/6 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#78A179]/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78A179]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#78A179]/20 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-[#78A179]">{v.naam[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-none">{v.naam}{v.leeftijd ? `, ${v.leeftijd}` : ''}</p>
                    <p className="text-[#78A179] text-[10px] mt-0.5">{v.thema}</p>
                  </div>
                </div>
                <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-[#78A179] transition-colors">{v.titel}</h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{v.teaser}</p>
                <p className="text-[#78A179] text-xs font-bold mt-4 group-hover:translate-x-1 transition-transform inline-block">Lees verder →</p>
              </button>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="https://overpalliatievezorg.nl/ervaringsverhalen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#78A179] hover:text-[#96c497] transition-colors">
              Bekijk alle 150+ ervaringsverhalen →
            </a>
          </div>
        </div>
      </section>

      {/* Verhaal modal */}
      {selectedVerhaal && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6" onClick={() => setSelectedVerhaal(null)}>
          <div className="relative w-full max-w-xl bg-[#F7F4F0] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[88vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="h-1 bg-gradient-to-r from-[#78A179] to-transparent shrink-0" />
            <div className="flex items-start justify-between px-7 pt-6 pb-4 border-b border-[#2F4F4F]/10 shrink-0">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#78A179] mb-1">{selectedVerhaal.naam}{selectedVerhaal.leeftijd ? ` · ${selectedVerhaal.leeftijd}` : ''} · {selectedVerhaal.thema}</p>
                <h2 className="text-xl font-bold text-[#2F4F4F] leading-snug">{selectedVerhaal.titel}</h2>
              </div>
              <button onClick={() => setSelectedVerhaal(null)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2F4F4F]/10 hover:bg-[#2F4F4F]/20 text-[#2F4F4F] transition-colors shrink-0 ml-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="overflow-y-auto px-7 py-5 flex-1">
              <p className="text-[#2F4F4F]/75 leading-relaxed text-base">{selectedVerhaal.volledig}</p>
            </div>
            <div className="px-7 pb-6 shrink-0 pt-4 border-t border-[#2F4F4F]/10">
              <a href={selectedVerhaal.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#78A179] hover:bg-[#688a68] text-white px-6 py-3 rounded-full font-bold text-sm transition-all">
                Lees het volledige verhaal op overpalliatievezorg.nl →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Handige Links ─────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-5xl py-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#78A179] mb-2">Doorverwijzing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-3">Handige links</h2>
        <p className="text-[#2F4F4F]/60 mb-12 max-w-2xl">Betrouwbare Nederlandse organisaties voor informatie, begeleiding en lotgenotencontact bij rouw en palliatieve zorg.</p>

        <div className="space-y-12">
          {linkCategorieën.map((cat) => (
            <div key={cat.titel}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#78A179] mb-5 flex items-center gap-3">
                {cat.titel}
                <span className="flex-1 h-px bg-[#2F4F4F]/10" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.links.map((link) => (
                  <a
                    key={link.naam}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2 p-5 bg-white rounded-2xl border border-[#2F4F4F]/8 hover:border-[#78A179]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#2F4F4F] group-hover:text-[#78A179] transition-colors text-sm">{link.naam}</span>
                      <svg className="w-3.5 h-3.5 text-[#2F4F4F]/20 group-hover:text-[#78A179] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </div>
                    <p className="text-xs text-[#2F4F4F]/50 leading-relaxed">{link.omschrijving}</p>
                    <span className="text-[10px] font-bold text-[#78A179]/60 group-hover:text-[#78A179] transition-colors truncate">{link.url.replace('https://', '')}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#78A179] mb-2">Via overpalliatievezorg.nl</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-3">Veelgestelde vragen</h2>
          <p className="text-[#2F4F4F]/60 mb-10">Antwoorden op de meest gestelde vragen over palliatieve zorg en rouw.</p>

          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-[#2F4F4F]/8 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F7F4F0] transition-colors gap-4"
                >
                  <span className="font-semibold text-[#2F4F4F] text-sm sm:text-base leading-snug">{item.vraag}</span>
                  <svg className={`w-4 h-4 text-[#78A179] shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-[#2F4F4F]/70 leading-relaxed border-t border-[#2F4F4F]/8 pt-4 animate-in slide-in-from-top-1 fade-in duration-200">
                    {item.antwoord}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="https://overpalliatievezorg.nl/veelgestelde-vragen-en-antwoorden-over-palliatieve-zorg" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#78A179] hover:text-[#556B2F] transition-colors">
              Meer vragen & antwoorden op overpalliatievezorg.nl →
            </a>
          </div>
        </div>
      </section>

      {/* ── Instagram @overpalliatievezorg ───────────────────── */}
      <section className="container mx-auto px-6 max-w-5xl py-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#78A179] mb-2">Volg ons op Instagram</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-8">@overpalliatievezorg</h2>
        <div className="flex justify-center">
          <blockquote
            className="instagram-media w-full max-w-xl"
            data-instgrm-permalink="https://www.instagram.com/overpalliatievezorg/"
            data-instgrm-version="14"
            style={{ background: '#FFF', border: 0, borderRadius: '12px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.08), 0 4px 24px 0 rgba(47,79,79,0.08)', margin: '1px', minWidth: '326px', padding: 0 }}
          />
          <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
        </div>
      </section>

    </div>
  )
}
