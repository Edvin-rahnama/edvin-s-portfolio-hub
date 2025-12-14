import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    title: { en: 'Data Scientist', de: 'Data Scientist', es: 'Científico de Datos' },
    company: 'Helmholtz-Zentrum Hereon',
    location: 'Geesthacht, Germany',
    period: { start: '07/2025', end: null },
    description: {
      en: [
        'Built physics-informed models (PINNs and PINO) to solve PDE-governed systems; tracked data/BC/PDE residual losses and training curves.',
        'Performed corrosion kinetics parameter estimation from polarization data, fitting key quantities (exchange current density, transfer coefficients, equilibrium terms) and validating fits against full I–E behavior.',
        'Used disciplined workflows (versioned configs, explicit snapshot inputs), plus sanity checks for loss balance and stability during training.',
      ],
      de: [
        'Entwicklung physik-informierter Modelle (PINNs und PINO) zur Lösung PDE-gesteuerter Systeme; Verfolgung von Daten-/BC-/PDE-Residualverlusten und Trainingskurven.',
        'Parameterschätzung für Korrosionskinetik aus Polarisationsdaten, Anpassung von Schlüsselgrößen (Austauschstromdichte, Übertragungskoeffizienten, Gleichgewichtsterme) und Validierung gegen volles I-E-Verhalten.',
        'Nutzung disziplinierter Workflows (versionierte Konfigurationen, explizite Snapshot-Eingaben) sowie Plausibilitätsprüfungen für Verlustbalance und Stabilität während des Trainings.',
      ],
      es: [
        'Construí modelos informados por física (PINNs y PINO) para resolver sistemas gobernados por PDE; seguimiento de pérdidas residuales de datos/BC/PDE y curvas de entrenamiento.',
        'Realicé estimación de parámetros de cinética de corrosión a partir de datos de polarización, ajustando cantidades clave y validando contra el comportamiento completo I-E.',
        'Utilicé flujos de trabajo disciplinados (configuraciones versionadas, entradas de snapshot explícitas) más verificaciones de cordura para balance de pérdidas y estabilidad durante el entrenamiento.',
      ],
    },
  },
  {
    title: { en: 'IT Systems & Automation Engineer', de: 'IT Systems & Automation Engineer', es: 'Ingeniero de Sistemas TI y Automatización' },
    company: 't2consult',
    location: 'Preetz, Germany',
    period: { start: '04/2025', end: null },
    description: {
      en: [
        'Jira Software customization, multi-env GitHub Actions pipelines, and CI/CD deployment with workflow and permission automation.',
        'Windows Server file system automation (PowerShell for file ops, log lifecycle, safe cleanup); Linux server scripting (bash/cron/systemd) for build/deploy/maintenance.',
        'Zabbix monitoring integration; Python automation log pipeline for observability.',
        'n8n workflow automation across Jira/DB/webhooks.',
        'Userscripts and targeted JS injections for Jira Data Center diagnostics.',
        'Data Center App Approval for Confluence/Jira and enterprise instance readiness (performance, security, supportability).',
      ],
      de: [
        'Jira-Software-Anpassung, Multi-Env GitHub-Actions-Pipelines und CI/CD-Deployment mit Workflow- und Berechtigungsautomatisierung.',
        'Windows-Server-Dateisystemautomatisierung (PowerShell für Dateioperationen, Log-Lifecycle, sichere Bereinigung); Linux-Server-Scripting (bash/cron/systemd) für Build/Deploy/Wartung.',
        'Zabbix-Monitoring-Integration; Python-Automatisierungs-Log-Pipeline für Observability.',
        'n8n-Workflow-Automatisierung über Jira/DB/Webhooks.',
        'Userscripts und gezielte JS-Injections für Jira Data Center-Diagnose.',
        'Data-Center-App-Genehmigung für Confluence/Jira und Enterprise-Instanz-Bereitschaft (Performance, Sicherheit, Supportfähigkeit).',
      ],
      es: [
        'Personalización de Jira Software, pipelines multi-entorno de GitHub Actions y despliegue CI/CD con automatización de flujos de trabajo y permisos.',
        'Automatización del sistema de archivos de Windows Server (PowerShell para operaciones de archivos); scripting de servidor Linux (bash/cron/systemd) para construcción/despliegue/mantenimiento.',
        'Integración de monitoreo Zabbix; pipeline de logs de automatización Python para observabilidad.',
        'Automatización de flujos de trabajo n8n a través de Jira/DB/webhooks.',
        'Userscripts e inyecciones JS dirigidas para diagnósticos de Jira Data Center.',
        'Aprobación de apps Data Center para Confluence/Jira y preparación de instancias empresariales.',
      ],
    },
  },
  {
    title: { en: 'Data Science Project Collaborator', de: 'Data Science Projektmitarbeiter', es: 'Colaborador de Proyecto de Ciencia de Datos' },
    company: '80s80s Radio GmbH & Co. KG',
    location: 'Kiel, Germany',
    period: { start: '08/2023', end: '01/2024' },
    description: {
      en: [
        'Developed a recommender system for 1980s music as part of a university team project.',
        'Gathered data from Musixmatch and Spotify APIs for analysis of music features and merged datasets for input into the recommender.',
        'Classified song languages (lyrics) algorithmically using spaCy for tagging, tokenization, and Named Entity Recognition (NER); vectorized lyrical content with Doc2Vec.',
        'Conducted sentiment analysis on lyrical content using transformers and word embeddings; experimented with models for non-English songs.',
        'Ran surveys to control for recommendation quality progress; handled survey analysis and data visualization.',
        'Applied advanced NLP and large language models (LLMs) to create personalized user experiences.',
      ],
      de: [
        'Entwicklung eines Empfehlungssystems für Musik der 1980er Jahre als Teil eines Universitätsteamprojekts.',
        'Sammlung von Daten aus Musixmatch- und Spotify-APIs zur Analyse von Musikmerkmalen und Zusammenführung von Datensätzen für den Recommender.',
        'Algorithmische Klassifizierung von Songsprachen (Lyrics) mit spaCy für Tagging, Tokenisierung und Named Entity Recognition (NER); Vektorisierung von Lyrikinhalten mit Doc2Vec.',
        'Sentimentanalyse von Lyrikinhalten mit Transformern und Word Embeddings; Experimente mit Modellen für nicht-englische Songs.',
        'Durchführung von Umfragen zur Kontrolle des Empfehlungsqualitätsfortschritts; Umfrageanalyse und Datenvisualisierung.',
        'Einsatz von fortschrittlichem NLP und Large Language Models (LLMs) zur Erstellung personalisierter Nutzererlebnisse.',
      ],
      es: [
        'Desarrollé un sistema de recomendación para música de los 80 como parte de un proyecto de equipo universitario.',
        'Recopilé datos de APIs de Musixmatch y Spotify para análisis de características musicales y fusión de datasets.',
        'Clasifiqué idiomas de canciones algorítmicamente usando spaCy para etiquetado, tokenización y NER; vectoricé contenido lírico con Doc2Vec.',
        'Realicé análisis de sentimiento en contenido lírico usando transformers y word embeddings; experimenté con modelos para canciones no inglesas.',
        'Ejecuté encuestas para controlar el progreso de calidad de recomendaciones; manejé análisis de encuestas y visualización de datos.',
        'Apliqué NLP avanzado y modelos de lenguaje grande (LLMs) para crear experiencias de usuario personalizadas.',
      ],
    },
  },
  {
    title: { en: 'Business Intelligence Analyst', de: 'Business Intelligence Analyst', es: 'Analista de Inteligencia de Negocios' },
    company: 'Satrap Investment Group Co.',
    location: 'Famagusta, Cyprus',
    period: { start: '07/2019', end: '11/2022' },
    description: {
      en: [
        'Developed data-driven strategies to improve real estate transaction efficiency.',
        'Forecasted market trends and property valuations using machine learning models.',
      ],
      de: [
        'Entwicklung datengetriebener Strategien zur Steigerung der Effizienz von Immobilientransaktionen.',
        'Prognose von Markttrends und Immobilienbewertungen mit Machine-Learning-Modellen.',
      ],
      es: [
        'Desarrollé estrategias basadas en datos para mejorar la eficiencia de transacciones inmobiliarias.',
        'Pronostiqué tendencias del mercado y valuaciones de propiedades usando modelos de machine learning.',
      ],
    },
  },
  {
    title: { en: 'Computer System Operator', de: 'Computersystembetreiber', es: 'Operador de Sistemas Informáticos' },
    company: 'Eastern Mediterranean University - Faculty of Tourism',
    location: 'Famagusta, Cyprus',
    period: { start: '2019', end: '2021' },
    description: {
      en: [
        'Managed computer systems and provided technical support for the Faculty of Tourism.',
        'Demonstrated strong work ethic and excellent English communication skills.',
        'Maintained good rapport with faculty and staff while managing IT operations.',
      ],
      de: [
        'Verwaltung von Computersystemen und technischer Support für die Fakultät für Tourismus.',
        'Starke Arbeitsmoral und ausgezeichnete Englischkenntnisse demonstriert.',
        'Gutes Verhältnis zu Fakultät und Mitarbeitern bei der Verwaltung von IT-Operationen.',
      ],
      es: [
        'Gestioné sistemas informáticos y proporcioné soporte técnico para la Facultad de Turismo.',
        'Demostré una fuerte ética de trabajo y excelentes habilidades de comunicación en inglés.',
        'Mantuve buena relación con facultad y personal mientras gestionaba operaciones de TI.',
      ],
    },
  },
  {
    title: { en: 'Web Developer', de: 'Web Developer', es: 'Desarrollador Web' },
    company: 'Ratin Company',
    location: 'Tehran, Iran',
    period: { start: '01/2017', end: '05/2019' },
    description: {
      en: [
        'Performance optimization of web applications and UX/UI improvements in e-commerce.',
      ],
      de: [
        'Performance-Optimierung von Webanwendungen und UX/UI-Verbesserungen im E-Commerce.',
      ],
      es: [
        'Optimización del rendimiento de aplicaciones web y mejoras de UX/UI en comercio electrónico.',
      ],
    },
  },
];

export function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
            {t('experience.title')}
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-0 md:pl-20 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary shadow-glow hidden md:block" />

                  <div className="glass-card rounded-2xl p-6 hover:shadow-glow transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold font-display">
                          {exp.title[language]}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {exp.period.start} — {exp.period.end || t('experience.present')}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description[language].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
