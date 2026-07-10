// Localized long-form content for the About and FAQ pages, in all 6 languages.
// Kept separate from translations.ts (short UI strings) to stay readable.
import type { Lang } from "./translations";

export interface AboutContent {
  title: string;
  lead: string;
  sections: { h: string; p: string }[];
  disclaimerLabel: string;
  disclaimer: string;
  availability: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}
export interface FaqContent {
  title: string;
  lead: string;
  items: FaqEntry[];
  disclaimerLabel: string;
  disclaimer: string;
}

const about: Record<Lang, AboutContent> = {
  nl: {
    title: "Over CheckjeIjzer",
    lead: "CheckjeIjzer is een gratis, meertalig hulpmiddel dat zorgverleners ondersteunt bij het inschatten van de waarschijnlijkheid van ijzertekort (iron deficiency) op basis van biomarkers en symptomen.",
    sections: [
      { h: "Wat het doet", p: "De toepassing stelt gestructureerde vragen over laboratoriumwaarden (ferritine, transferrinesaturatie, hemoglobine, MCV en CRP), symptomen en risicofactoren. Op basis van conventionele referentiewaarden berekent het een waarschijnlijkheidsscore en geeft het een onderbouwd advies: laag, matig of hoog risico. Alle vragen en drempelwaarden zijn configureerbaar." },
      { h: "Privacy", p: "Er zijn geen gebruikersaccounts. Alle patiëntsessies worden uitsluitend lokaal in de browser opgeslagen en verlaten het apparaat niet. Er worden geen gegevens naar een server verzonden." },
      { h: "Voor wie", p: "CheckjeIjzer is bedoeld als hulpmiddel voor zorgverleners. Het vervangt geen klinische beoordeling of bevestigend laboratoriumonderzoek." },
    ],
    disclaimerLabel: "Medische disclaimer:",
    disclaimer: "Dit is een educatief, beslissingsondersteunend screeningsinstrument en stelt geen diagnose. Klinisch oordeel en bevestigende tests blijven essentieel.",
    availability: "Beschikbaar in het Nederlands, Engels, Frans, Duits, Italiaans en Spaans — gebruik de taalkiezer bovenaan.",
  },
  en: {
    title: "About CheckjeIjzer",
    lead: "CheckjeIjzer is a free, multilingual tool that helps clinicians estimate the likelihood of iron deficiency based on biomarkers and symptoms.",
    sections: [
      { h: "What it does", p: "The app asks structured questions about laboratory values (ferritin, transferrin saturation, haemoglobin, MCV and CRP), symptoms and risk factors. Using conventional reference ranges it computes a likelihood score and gives a reasoned recommendation: low, moderate or high risk. All questions and thresholds are configurable." },
      { h: "Privacy", p: "There are no user accounts. All patient sessions are stored only locally in the browser and never leave the device. No data is sent to a server." },
      { h: "Who it is for", p: "CheckjeIjzer is intended as an aid for clinicians. It does not replace clinical judgement or confirmatory laboratory testing." },
    ],
    disclaimerLabel: "Medical disclaimer:",
    disclaimer: "This is an educational, decision-support screening tool and does not provide a diagnosis. Clinical judgement and confirmatory testing remain essential.",
    availability: "Available in Dutch, English, French, German, Italian and Spanish — use the language selector at the top.",
  },
  fr: {
    title: "À propos de CheckjeIjzer",
    lead: "CheckjeIjzer est un outil gratuit et multilingue qui aide les cliniciens à estimer la probabilité d'une carence en fer à partir de biomarqueurs et de symptômes.",
    sections: [
      { h: "Ce qu'il fait", p: "L'application pose des questions structurées sur les valeurs de laboratoire (ferritine, saturation de la transferrine, hémoglobine, VGM et CRP), les symptômes et les facteurs de risque. À partir de valeurs de référence conventionnelles, elle calcule un score de probabilité et fournit une recommandation raisonnée : risque faible, modéré ou élevé. Toutes les questions et tous les seuils sont configurables." },
      { h: "Confidentialité", p: "Il n'y a pas de comptes utilisateurs. Toutes les sessions patients sont enregistrées uniquement localement dans le navigateur et ne quittent jamais l'appareil. Aucune donnée n'est envoyée à un serveur." },
      { h: "À qui il s'adresse", p: "CheckjeIjzer est conçu comme une aide pour les cliniciens. Il ne remplace pas le jugement clinique ni les tests de laboratoire de confirmation." },
    ],
    disclaimerLabel: "Avertissement médical :",
    disclaimer: "Il s'agit d'un outil éducatif d'aide à la décision et il ne pose pas de diagnostic. Le jugement clinique et les tests de confirmation restent essentiels.",
    availability: "Disponible en néerlandais, anglais, français, allemand, italien et espagnol — utilisez le sélecteur de langue en haut.",
  },
  de: {
    title: "Über CheckjeIjzer",
    lead: "CheckjeIjzer ist ein kostenloses, mehrsprachiges Werkzeug, das Behandelnde dabei unterstützt, die Wahrscheinlichkeit eines Eisenmangels anhand von Biomarkern und Symptomen einzuschätzen.",
    sections: [
      { h: "Was es tut", p: "Die Anwendung stellt strukturierte Fragen zu Laborwerten (Ferritin, Transferrinsättigung, Hämoglobin, MCV und CRP), Symptomen und Risikofaktoren. Auf Basis konventioneller Referenzwerte berechnet sie einen Wahrscheinlichkeits-Score und gibt eine begründete Empfehlung: niedriges, mäßiges oder hohes Risiko. Alle Fragen und Schwellenwerte sind konfigurierbar." },
      { h: "Datenschutz", p: "Es gibt keine Benutzerkonten. Alle Patientensitzungen werden ausschließlich lokal im Browser gespeichert und verlassen das Gerät nicht. Es werden keine Daten an einen Server gesendet." },
      { h: "Für wen", p: "CheckjeIjzer ist als Hilfsmittel für Behandelnde gedacht. Es ersetzt weder die klinische Beurteilung noch bestätigende Laboruntersuchungen." },
    ],
    disclaimerLabel: "Medizinischer Hinweis:",
    disclaimer: "Dies ist ein edukatives Entscheidungshilfe-Werkzeug und stellt keine Diagnose. Klinische Beurteilung und bestätigende Tests bleiben unerlässlich.",
    availability: "Verfügbar in Niederländisch, Englisch, Französisch, Deutsch, Italienisch und Spanisch — verwenden Sie die Sprachauswahl oben.",
  },
  it: {
    title: "Informazioni su CheckjeIjzer",
    lead: "CheckjeIjzer è uno strumento gratuito e multilingue che aiuta i clinici a stimare la probabilità di una carenza di ferro sulla base di biomarcatori e sintomi.",
    sections: [
      { h: "Cosa fa", p: "L'app pone domande strutturate su valori di laboratorio (ferritina, saturazione della transferrina, emoglobina, MCV e PCR), sintomi e fattori di rischio. Utilizzando valori di riferimento convenzionali calcola un punteggio di probabilità e fornisce una raccomandazione motivata: rischio basso, moderato o alto. Tutte le domande e le soglie sono configurabili." },
      { h: "Privacy", p: "Non ci sono account utente. Tutte le sessioni paziente vengono salvate solo localmente nel browser e non lasciano mai il dispositivo. Nessun dato viene inviato a un server." },
      { h: "A chi è rivolto", p: "CheckjeIjzer è pensato come ausilio per i clinici. Non sostituisce il giudizio clinico né gli esami di laboratorio di conferma." },
    ],
    disclaimerLabel: "Avvertenza medica:",
    disclaimer: "Questo è uno strumento educativo di supporto decisionale e non fornisce una diagnosi. Il giudizio clinico e i test di conferma restano essenziali.",
    availability: "Disponibile in olandese, inglese, francese, tedesco, italiano e spagnolo — usa il selettore di lingua in alto.",
  },
  es: {
    title: "Acerca de CheckjeIjzer",
    lead: "CheckjeIjzer es una herramienta gratuita y multilingüe que ayuda a los clínicos a estimar la probabilidad de una carencia de hierro a partir de biomarcadores y síntomas.",
    sections: [
      { h: "Qué hace", p: "La aplicación formula preguntas estructuradas sobre valores de laboratorio (ferritina, saturación de transferrina, hemoglobina, VCM y PCR), síntomas y factores de riesgo. Con valores de referencia convencionales calcula una puntuación de probabilidad y ofrece una recomendación razonada: riesgo bajo, moderado o alto. Todas las preguntas y umbrales son configurables." },
      { h: "Privacidad", p: "No hay cuentas de usuario. Todas las sesiones de paciente se almacenan solo localmente en el navegador y nunca salen del dispositivo. No se envían datos a ningún servidor." },
      { h: "Para quién es", p: "CheckjeIjzer está pensado como ayuda para los clínicos. No sustituye el juicio clínico ni las pruebas de laboratorio de confirmación." },
    ],
    disclaimerLabel: "Aviso médico:",
    disclaimer: "Esta es una herramienta educativa de apoyo a la decisión y no proporciona un diagnóstico. El juicio clínico y las pruebas de confirmación siguen siendo esenciales.",
    availability: "Disponible en neerlandés, inglés, francés, alemán, italiano y español — use el selector de idioma en la parte superior.",
  },
};

const faq: Record<Lang, FaqContent> = {
  nl: {
    title: "Veelgestelde vragen",
    lead: "Antwoorden op veelgestelde vragen over ijzertekort en het gebruik van CheckjeIjzer.",
    disclaimerLabel: "Medische disclaimer:",
    disclaimer: "Deze informatie is educatief en vervangt geen professioneel medisch advies of onderzoek.",
    items: [
      { q: "Wat is ijzertekort?", a: "IJzertekort (iron deficiency) is een toestand waarbij het lichaam onvoldoende ijzer heeft voor normale functies zoals de aanmaak van hemoglobine. Het kan bestaan met of zonder bloedarmoede en veroorzaakt onder meer vermoeidheid, bleekheid en kortademigheid." },
      { q: "Welke bloedwaarde is het belangrijkst?", a: "Serumferritine is de meest informatieve losse marker. Een ferritine onder 30 µg/L wijst sterk op uitgeputte ijzervoorraden. Bij ontsteking kan ferritine vals verhoogd zijn; dan zijn transferrinesaturatie (<20%) en CRP nuttig." },
      { q: "Kan ik ijzertekort hebben zonder bloedarmoede?", a: "Ja. IJzertekort zonder anemie komt vaak voor: de voorraden zijn uitgeput (lage ferritine) terwijl het hemoglobine nog normaal is. Symptomen zoals vermoeidheid kunnen dan al aanwezig zijn." },
      { q: "Hoe berekent CheckjeIjzer de waarschijnlijkheid?", a: "De toepassing kent aan elk antwoord punten toe op basis van conventionele referentiewaarden en weegt deze. De som wordt genormaliseerd naar 0–100 en ingedeeld als laag, matig of hoog risico. De logica staat in een configuratiebestand." },
      { q: "Worden patiëntgegevens opgeslagen of gedeeld?", a: "Nee. Er zijn geen accounts en er wordt niets naar een server gestuurd. Alle sessies worden uitsluitend lokaal in de browser bewaard." },
      { q: "Vervangt dit een arts of laboratoriumonderzoek?", a: "Nee. CheckjeIjzer is een beslissingsondersteunend screeningsinstrument, geen diagnose. Klinisch oordeel en bevestigend onderzoek blijven essentieel." },
      { q: "In welke talen is de tool beschikbaar?", a: "In het Nederlands, Engels, Frans, Duits, Italiaans en Spaans. U kunt de taal wisselen met de keuzelijst in de bovenbalk." },
    ],
  },
  en: {
    title: "Frequently asked questions",
    lead: "Answers to common questions about iron deficiency and using CheckjeIjzer.",
    disclaimerLabel: "Medical disclaimer:",
    disclaimer: "This information is educational and does not replace professional medical advice or testing.",
    items: [
      { q: "What is iron deficiency?", a: "Iron deficiency is a condition in which the body lacks enough iron for normal functions such as producing haemoglobin. It can occur with or without anaemia and causes symptoms including fatigue, pallor and shortness of breath." },
      { q: "Which blood value matters most?", a: "Serum ferritin is the most informative single marker. A ferritin below 30 µg/L strongly suggests depleted iron stores. During inflammation ferritin can be falsely raised; transferrin saturation (<20%) and CRP then help." },
      { q: "Can I have iron deficiency without anaemia?", a: "Yes. Iron deficiency without anaemia is common: stores are depleted (low ferritin) while haemoglobin is still normal. Symptoms such as fatigue may already be present." },
      { q: "How does CheckjeIjzer calculate the likelihood?", a: "The app assigns points to each answer based on conventional reference ranges and weights them. The sum is normalised to 0–100 and classed as low, moderate or high risk. The logic lives in a configuration file." },
      { q: "Is patient data stored or shared?", a: "No. There are no accounts and nothing is sent to a server. All sessions are kept only locally in the browser." },
      { q: "Does this replace a doctor or lab testing?", a: "No. CheckjeIjzer is a decision-support screening tool, not a diagnosis. Clinical judgement and confirmatory testing remain essential." },
      { q: "Which languages are supported?", a: "Dutch, English, French, German, Italian and Spanish. You can switch language using the selector in the top bar." },
    ],
  },
  fr: {
    title: "Questions fréquentes",
    lead: "Réponses aux questions courantes sur la carence en fer et l'utilisation de CheckjeIjzer.",
    disclaimerLabel: "Avertissement médical :",
    disclaimer: "Ces informations sont éducatives et ne remplacent pas un avis médical professionnel ni des examens.",
    items: [
      { q: "Qu'est-ce que la carence en fer ?", a: "La carence en fer est un état dans lequel l'organisme manque de fer pour des fonctions normales comme la production d'hémoglobine. Elle peut exister avec ou sans anémie et provoque fatigue, pâleur et essoufflement." },
      { q: "Quelle valeur sanguine est la plus importante ?", a: "La ferritine sérique est le marqueur isolé le plus informatif. Une ferritine inférieure à 30 µg/L évoque fortement des réserves épuisées. En cas d'inflammation, la ferritine peut être faussement élevée ; la saturation de la transferrine (<20 %) et la CRP aident alors." },
      { q: "Puis-je avoir une carence en fer sans anémie ?", a: "Oui. La carence en fer sans anémie est fréquente : les réserves sont épuisées (ferritine basse) alors que l'hémoglobine est encore normale. Des symptômes comme la fatigue peuvent déjà être présents." },
      { q: "Comment CheckjeIjzer calcule-t-il la probabilité ?", a: "L'application attribue des points à chaque réponse selon des valeurs de référence conventionnelles et les pondère. La somme est normalisée de 0 à 100 et classée en risque faible, modéré ou élevé. La logique est dans un fichier de configuration." },
      { q: "Les données patient sont-elles stockées ou partagées ?", a: "Non. Il n'y a pas de comptes et rien n'est envoyé à un serveur. Toutes les sessions sont conservées uniquement localement dans le navigateur." },
      { q: "Cela remplace-t-il un médecin ou des examens ?", a: "Non. CheckjeIjzer est un outil d'aide à la décision, pas un diagnostic. Le jugement clinique et les tests de confirmation restent essentiels." },
      { q: "Quelles langues sont prises en charge ?", a: "Néerlandais, anglais, français, allemand, italien et espagnol. Vous pouvez changer de langue avec le sélecteur dans la barre supérieure." },
    ],
  },
  de: {
    title: "Häufig gestellte Fragen",
    lead: "Antworten auf häufige Fragen zu Eisenmangel und zur Nutzung von CheckjeIjzer.",
    disclaimerLabel: "Medizinischer Hinweis:",
    disclaimer: "Diese Informationen sind edukativ und ersetzen keine professionelle medizinische Beratung oder Untersuchung.",
    items: [
      { q: "Was ist Eisenmangel?", a: "Eisenmangel ist ein Zustand, in dem dem Körper nicht genügend Eisen für normale Funktionen wie die Bildung von Hämoglobin zur Verfügung steht. Er kann mit oder ohne Anämie auftreten und verursacht u. a. Müdigkeit, Blässe und Atemnot." },
      { q: "Welcher Blutwert ist am wichtigsten?", a: "Serumferritin ist der aussagekräftigste Einzelmarker. Ein Ferritin unter 30 µg/L spricht stark für erschöpfte Speicher. Bei Entzündung kann Ferritin falsch erhöht sein; dann helfen Transferrinsättigung (<20 %) und CRP." },
      { q: "Kann ich Eisenmangel ohne Anämie haben?", a: "Ja. Eisenmangel ohne Anämie ist häufig: Die Speicher sind erschöpft (niedriges Ferritin), während das Hämoglobin noch normal ist. Symptome wie Müdigkeit können bereits vorhanden sein." },
      { q: "Wie berechnet CheckjeIjzer die Wahrscheinlichkeit?", a: "Die Anwendung vergibt für jede Antwort Punkte anhand konventioneller Referenzwerte und gewichtet sie. Die Summe wird auf 0–100 normiert und als niedriges, mäßiges oder hohes Risiko eingestuft. Die Logik liegt in einer Konfigurationsdatei." },
      { q: "Werden Patientendaten gespeichert oder geteilt?", a: "Nein. Es gibt keine Konten und es wird nichts an einen Server gesendet. Alle Sitzungen werden ausschließlich lokal im Browser gespeichert." },
      { q: "Ersetzt dies einen Arzt oder Laboruntersuchungen?", a: "Nein. CheckjeIjzer ist ein Entscheidungshilfe-Werkzeug, keine Diagnose. Klinische Beurteilung und bestätigende Tests bleiben unerlässlich." },
      { q: "Welche Sprachen werden unterstützt?", a: "Niederländisch, Englisch, Französisch, Deutsch, Italienisch und Spanisch. Sie können die Sprache über die Auswahl in der oberen Leiste wechseln." },
    ],
  },
  it: {
    title: "Domande frequenti",
    lead: "Risposte alle domande comuni sulla carenza di ferro e sull'uso di CheckjeIjzer.",
    disclaimerLabel: "Avvertenza medica:",
    disclaimer: "Queste informazioni sono educative e non sostituiscono un parere medico professionale o gli esami.",
    items: [
      { q: "Che cos'è la carenza di ferro?", a: "La carenza di ferro è una condizione in cui il corpo non ha abbastanza ferro per funzioni normali come la produzione di emoglobina. Può presentarsi con o senza anemia e causa affaticamento, pallore e affanno." },
      { q: "Quale valore del sangue è più importante?", a: "La ferritina sierica è il marcatore singolo più informativo. Una ferritina inferiore a 30 µg/L suggerisce fortemente riserve esaurite. In caso di infiammazione la ferritina può essere falsamente elevata; aiutano allora la saturazione della transferrina (<20%) e la PCR." },
      { q: "Posso avere carenza di ferro senza anemia?", a: "Sì. La carenza di ferro senza anemia è comune: le riserve sono esaurite (ferritina bassa) mentre l'emoglobina è ancora normale. Sintomi come l'affaticamento possono già essere presenti." },
      { q: "Come calcola CheckjeIjzer la probabilità?", a: "L'app assegna punti a ogni risposta in base a valori di riferimento convenzionali e li pondera. La somma è normalizzata a 0–100 e classificata come rischio basso, moderato o alto. La logica è in un file di configurazione." },
      { q: "I dati del paziente vengono salvati o condivisi?", a: "No. Non ci sono account e nulla viene inviato a un server. Tutte le sessioni sono conservate solo localmente nel browser." },
      { q: "Sostituisce un medico o gli esami di laboratorio?", a: "No. CheckjeIjzer è uno strumento di supporto decisionale, non una diagnosi. Il giudizio clinico e i test di conferma restano essenziali." },
      { q: "Quali lingue sono supportate?", a: "Olandese, inglese, francese, tedesco, italiano e spagnolo. Puoi cambiare lingua con il selettore nella barra superiore." },
    ],
  },
  es: {
    title: "Preguntas frecuentes",
    lead: "Respuestas a preguntas comunes sobre la carencia de hierro y el uso de CheckjeIjzer.",
    disclaimerLabel: "Aviso médico:",
    disclaimer: "Esta información es educativa y no sustituye el consejo médico profesional ni las pruebas.",
    items: [
      { q: "¿Qué es la carencia de hierro?", a: "La carencia de hierro es un estado en el que el cuerpo carece de hierro suficiente para funciones normales como producir hemoglobina. Puede darse con o sin anemia y causa fatiga, palidez y dificultad para respirar." },
      { q: "¿Qué valor sanguíneo es el más importante?", a: "La ferritina sérica es el marcador aislado más informativo. Una ferritina por debajo de 30 µg/L sugiere fuertemente reservas agotadas. Con inflamación la ferritina puede estar falsamente elevada; entonces ayudan la saturación de transferrina (<20%) y la PCR." },
      { q: "¿Puedo tener carencia de hierro sin anemia?", a: "Sí. La carencia de hierro sin anemia es común: las reservas están agotadas (ferritina baja) mientras la hemoglobina aún es normal. Síntomas como la fatiga pueden estar ya presentes." },
      { q: "¿Cómo calcula CheckjeIjzer la probabilidad?", a: "La aplicación asigna puntos a cada respuesta según valores de referencia convencionales y los pondera. La suma se normaliza a 0–100 y se clasifica como riesgo bajo, moderado o alto. La lógica está en un archivo de configuración." },
      { q: "¿Se almacenan o comparten los datos del paciente?", a: "No. No hay cuentas y no se envía nada a un servidor. Todas las sesiones se guardan solo localmente en el navegador." },
      { q: "¿Sustituye a un médico o a las pruebas de laboratorio?", a: "No. CheckjeIjzer es una herramienta de apoyo a la decisión, no un diagnóstico. El juicio clínico y las pruebas de confirmación siguen siendo esenciales." },
      { q: "¿Qué idiomas son compatibles?", a: "Neerlandés, inglés, francés, alemán, italiano y español. Puede cambiar el idioma con el selector de la barra superior." },
    ],
  },
};

export const aboutContent = about;
export const faqContent = faq;
