import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    title: { en: 'Data Scientist', de: 'Data Scientist', es: 'Científico de Datos' },
    company: 'Helmholtz-Zentrum Hereon',
    location: { en: 'Geesthacht, Germany', de: 'Geesthacht, Deutschland', es: 'Geesthacht, Alemania' },
    period: { start: '07/2025', end: null },
    description: {
      en: [
        'Development of physics-informed models (PINNs, PINO, MBAE) for solving PDE-governed systems.',
        'Parameter estimation for corrosion kinetics from polarization data and validation beyond the Tafel region.',
        'Utilization of versioned configurations and quality assurance checks for robust training pipelines.',
      ],
      de: [
        'Entwicklung physik-informierter Modelle (PINNs, PINO, MBAE) zur Lösung PDE-gesteuerter Systeme.',
        'Parameterschätzung für Korrosionskinetik aus Polarisationsdaten und Validierung über den Tafel-Bereich hinaus.',
        'Nutzung versionierter Konfigurationen und Qualitätssicherungschecks für robuste Trainings-Pipelines.',
      ],
      es: [
        'Desarrollo de modelos informados por física (PINNs, PINO, MBAE) para resolver sistemas gobernados por PDE.',
        'Estimación de parámetros de cinética de corrosión a partir de datos de polarización y validación más allá de la región de Tafel.',
        'Utilización de configuraciones versionadas y controles de aseguramiento de calidad para pipelines de entrenamiento robustos.',
      ],
    },
  },
  {
    title: { en: 'IT Systems & Automation Engineer', de: 'IT Systems & Automation Engineer', es: 'Ingeniero de Sistemas TI y Automatización' },
    company: 't2consult',
    location: { en: 'Preetz, Germany', de: 'Preetz, Deutschland', es: 'Preetz, Alemania' },
    period: { start: '04/2025', end: null },
    description: {
      en: [
        'Development and maintenance of backend integrations between Jira Data Center, custom apps, JS injections and monitoring databases; building Python-based ETL pipelines that transfer logs and metrics from Linux/Windows servers to Zabbix/Grafana and AWS monitoring (incl. CloudWatch).',
        'Automation of deployments and system tasks with GitHub Actions, PowerShell, Bash and AWS Lambda (backups, log lifecycle) to reduce manual steps and error rates; implementation of workflow, permission and data automations in Jira using scripts, webhooks and n8n.',
        'Analysis of performance bottlenecks in Jira/Confluence Cloud/Data Center (database queries, JVM metrics, add-ons) and contribution to tuning and capacity planning for high-availability setups; support for app release and upgrade processes (Forge and Data Center apps).',
      ],
      de: [
        'Entwicklung und Wartung von Backend-Integrationen zwischen Jira Data Center, maßgeschneiderten Apps, JS Injections und Monitoring-Datenbanken; Aufbau von Python-basierten ETL-Pipelines, die Logs und Metriken von Linux/Windows-Servern in Zabbix/Grafana und AWS-Monitoring (inkl. CloudWatch) überführen.',
        'Automatisierung von Deployments und Systemaufgaben mit GitHub Actions, PowerShell, Bash und AWS Lambda (Backups, Log-Lifecycle), um manuelle Schritte und Fehlerraten zu reduzieren; Implementierung von Workflow-, Berechtigungs- und Datenautomatisierungen in Jira mittels Skripten, Webhooks und n8n.',
        'Analyse von Performance-Engpässen in Jira/Confluence Cloud/Data Center (Datenbankabfragen, JVM-Metriken, Add-ons) und Mitarbeit an Tuning- und Kapazitätsplanung für hochverfügbare Setups; Unterstützung von App-Freigabe- und Upgrade-Prozessen (Forge- und Data-Center-Apps).',
      ],
      es: [
        'Desarrollo y mantenimiento de integraciones backend entre Jira Data Center, apps personalizadas, inyecciones JS y bases de datos de monitoreo; construcción de pipelines ETL basados en Python que transfieren logs y métricas desde servidores Linux/Windows a Zabbix/Grafana y monitoreo AWS (incl. CloudWatch).',
        'Automatización de despliegues y tareas del sistema con GitHub Actions, PowerShell, Bash y AWS Lambda (backups, ciclo de vida de logs) para reducir pasos manuales y tasas de error; implementación de automatizaciones de flujos de trabajo, permisos y datos en Jira usando scripts, webhooks y n8n.',
        'Análisis de cuellos de botella de rendimiento en Jira/Confluence Cloud/Data Center (consultas de base de datos, métricas JVM, add-ons) y contribución a tuning y planificación de capacidad para setups de alta disponibilidad; soporte para procesos de lanzamiento y actualización de apps (Forge y Data Center).',
      ],
    },
  },
  {
    title: { en: 'Data Science Project Collaborator', de: 'Data Science Projektmitarbeiter', es: 'Colaborador de Proyecto de Ciencia de Datos' },
    company: '80s80s Radio GmbH & Co. KG',
    location: { en: 'Kiel, Germany', de: 'Kiel, Deutschland', es: 'Kiel, Alemania' },
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
    location: { en: 'Famagusta, Cyprus', de: 'Famagusta, Zypern', es: 'Famagusta, Chipre' },
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
    location: { en: 'Famagusta, Cyprus', de: 'Famagusta, Zypern', es: 'Famagusta, Chipre' },
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
    location: { en: 'Tehran, Iran', de: 'Teheran, Iran', es: 'Teherán, Irán' },
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
                          <span>{exp.location[language]}</span>
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
