import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    title: { en: 'Data Scientist (Master Thesis)', de: 'Data Scientist (Masterarbeit)', es: 'Científico de Datos (Tesis de Maestría)' },
    company: 'Helmholtz-Zentrum Hereon',
    location: { en: 'Geesthacht, Germany', de: 'Geesthacht, Deutschland', es: 'Geesthacht, Alemania' },
    period: { start: '07/2025', end: null },
    techStack: ['Python', 'Deep Learning', 'PINNs/PINO', 'TensorFlow', 'NumPy', 'Git', 'MLOps'],
    description: {
      en: [
        'Advanced Deep Learning (PINNs): Development and implementation of novel physics-informed neural networks (PINNs, PINO, MBAE) for efficient solution of PDE-controlled systems in materials research.',
        'Scientific ML & Optimization: Execution of complex parameter estimations for corrosion kinetics through data-driven inversion of polarization data, including model validation beyond the standard Tafel range.',
        'MLOps & Uncertainty Quantification: Integration of Uncertainty Quantification (UQ) and versioned configurations into training pipelines to evaluate model uncertainties and ensure experiment reproducibility.',
      ],
      de: [
        'Advanced Deep Learning (PINNs): Entwicklung und Implementierung neuartiger physik-informierter neuronaler Netze (PINNs, PINO, MBAE) zur effizienten Lösung PDE-gesteuerter Systeme in der Materialforschung.',
        'Scientific ML & Optimization: Durchführung komplexer Parameterschätzungen für Korrosionskinetiken durch datengetriebene Invertierung von Polarisationsdaten, inklusive Modell-Validierung jenseits des Standard-Tafel-Bereichs.',
        'MLOps & Uncertainty Quantification: Integration von Uncertainty Quantification (UQ) und versionierten Konfigurationen in die Trainings-Pipelines, um Modell-Unsicherheiten zu bewerten und die Reproduzierbarkeit der Experimente sicherzustellen.',
      ],
      es: [
        'Deep Learning Avanzado (PINNs): Desarrollo e implementación de redes neuronales informadas por física (PINNs, PINO, MBAE) para solución eficiente de sistemas controlados por PDE en investigación de materiales.',
        'ML Científico y Optimización: Ejecución de estimaciones de parámetros complejos para cinética de corrosión mediante inversión basada en datos.',
        'MLOps y Cuantificación de Incertidumbre: Integración de UQ y configuraciones versionadas en pipelines de entrenamiento para evaluar incertidumbres del modelo.',
      ],
    },
  },
  {
    title: { en: 'IT Systems & Automation Engineer', de: 'IT Systems & Automation Engineer', es: 'Ingeniero de Sistemas TI y Automatización' },
    company: 't2consult',
    location: { en: 'Preetz, Germany', de: 'Preetz, Deutschland', es: 'Preetz, Alemania' },
    period: { start: '04/2025', end: null },
    techStack: ['Python', 'AWS', 'n8n', 'Flyway', 'Docker', 'JavaScript', 'Lambda', 'Redshift'],
    description: {
      en: [
        'Data Engineering & Observability: Conception of robust Python ETL pipelines that aggregate logs from Linux and Windows servers and transfer them to monitoring systems (Zabbix, Grafana, AWS CloudWatch) as well as Data Warehouses (Redshift).',
        'Hybrid Automation: Orchestration of complex workflows using n8n, webhooks, and Python to generate Jira reports – this reduced manual effort by approx. 30%.',
        'DevOps & IaC: Automation of system tasks (e.g., backups, log lifecycle) using AWS Lambda and Bash/PowerShell as well as implementation of GitHub Actions for deployments and Flyway for database migrations.',
        'Jira Engineering & Custom Apps: Development of tailored Jira apps using JavaScript as well as backend integrations to extend platform functionality.',
        'Performance & Release QA: Performance tuning (JVM, SQL) for high-availability data center environments and technical control of app releases (Forge & Data Center) through security checks.',
      ],
      de: [
        'Data Engineering & Observability: Konzeption robuster Python-ETL-Pipelines, die Logs von Linux- und Windows-Servern aggregieren und in Monitoring-Systeme (Zabbix, Grafana, AWS CloudWatch) sowie Data Warehouses (Redshift) überführen.',
        'Hybrid Automation: Orchestrierung komplexer Workflows mittels n8n, Webhooks und Python zur Generierung von Jira-Reports – dies reduzierte den manuellen Aufwand um ca. 30%.',
        'DevOps & IaC: Automatisierung von Systemaufgaben (z.B. Backups, Log-Lifecycle) mittels AWS Lambda und Bash/PowerShell sowie Implementierung von GitHub Actions für Deployments und Flyway für Datenbank-Migrationen.',
        'Jira Engineering & Custom Apps: Entwicklung maßgeschneiderter Jira-Apps mittels JavaScript sowie Backend-Integrationen zur Erweiterung der Plattform-Funktionalität.',
        'Performance & Release QA: Performance-Tuning (JVM, SQL) für hochverfügbare Data-Center-Umgebungen und technische Steuerung von App-Releases (Forge & Data Center) durch Security-Checks.',
      ],
      es: [
        'Data Engineering y Observabilidad: Concepción de pipelines ETL robustos en Python que agregan logs de servidores Linux y Windows.',
        'Automatización Híbrida: Orquestación de workflows complejos usando n8n, webhooks y Python para generar reportes de Jira.',
        'DevOps e IaC: Automatización de tareas del sistema usando AWS Lambda y Bash/PowerShell e implementación de GitHub Actions.',
        'Ingeniería Jira y Apps Personalizadas: Desarrollo de apps Jira personalizadas usando JavaScript e integraciones backend.',
        'Performance y QA de Releases: Ajuste de rendimiento (JVM, SQL) para entornos de data center de alta disponibilidad.',
      ],
    },
  },
  {
    title: { en: 'NLP & Recommender Systems Engineer', de: 'NLP & Recommender Systems Engineer', es: 'Ingeniero de NLP y Sistemas de Recomendación' },
    company: '80s80s Radio GmbH & Co. KG',
    location: { en: 'Kiel, Germany', de: 'Kiel, Deutschland', es: 'Kiel, Alemania' },
    period: { start: '08/2023', end: '01/2024' },
    techStack: ['Python', 'NLP', 'LLMs', 'Spotify API', 'Musixmatch API', 'Scikit-learn', 'Pandas'],
    description: {
      en: [
        'GenAI & LLM Implementation: Implementation of Large Language Models (LLMs) and NLP algorithms for targeted personalization of User Experience (UX) and increasing listener interaction.',
        'API Data Enrichment: Building scalable integration pipelines for external music services (Spotify, Musixmatch APIs) to automatically enrich metadata and maximize the quality of recommender systems.',
        'NLP Model Engineering: End-to-end development and optimization of machine learning models for sentiment analysis and text classification as well as tuning data pipelines for more efficient inference times.',
      ],
      de: [
        'GenAI & LLM Implementation: Implementierung von Large Language Models (LLMs) und NLP-Algorithmen zur gezielten Personalisierung der User Experience (UX) und Steigerung der Hörer-Interaktion.',
        'API Data Enrichment: Aufbau skalierbarer Integrations-Pipelines für externe Musik-Dienste (Spotify, Musixmatch APIs), um Metadaten automatisiert anzureichern und die Qualität der Recommender-Systeme zu maximieren.',
        'NLP Model Engineering: End-to-End Entwicklung und Optimierung von Machine-Learning-Modellen für Sentiment-Analyse und Textklassifikation sowie Tuning der Datenpipelines für effizientere Inferenzzeiten.',
      ],
      es: [
        'Implementación GenAI & LLM: Implementación de modelos de lenguaje grande (LLMs) y algoritmos NLP para personalización dirigida de la experiencia del usuario.',
        'Enriquecimiento de Datos API: Construcción de pipelines de integración escalables para servicios de música externos.',
        'Ingeniería de Modelos NLP: Desarrollo end-to-end y optimización de modelos de machine learning para análisis de sentimiento y clasificación de texto.',
      ],
    },
  },
  {
    title: { en: 'Business Intelligence Analyst (Real Estate)', de: 'Business Intelligence Analyst (Immobilien)', es: 'Analista de Inteligencia de Negocios (Inmobiliaria)' },
    company: 'Satrap Investment Group Co.',
    location: { en: 'Famagusta, Cyprus', de: 'Famagusta, Zypern', es: 'Famagusta, Chipre' },
    period: { start: '07/2019', end: '11/2022' },
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'SQL', 'Predictive Modeling', 'Time-Series'],
    description: {
      en: [
        'Predictive Analytics & Valuation: Development of machine learning models (Regression, Time-Series) for precise forecasting of real estate prices and market trends to back investment decisions with data.',
        'Data-Driven Strategy: Implementation of analytical strategies to optimize transaction processes, thereby increasing the efficiency of real estate sales and reducing turnaround times.',
      ],
      de: [
        'Predictive Analytics & Valuation: Entwicklung von Machine-Learning-Modellen (Regression, Time-Series) zur präzisen Prognose von Immobilienpreisen und Markttrends, um Investitionsentscheidungen datengestützt abzusichern.',
        'Data-Driven Strategy: Implementierung analytischer Strategien zur Optimierung von Transaktionsprozessen, wodurch die Effizienz von Immobilienverkäufen gesteigert und Durchlaufzeiten reduziert wurden.',
      ],
      es: [
        'Análisis Predictivo y Valuación: Desarrollo de modelos de machine learning (Regresión, Series Temporales) para pronóstico preciso de precios inmobiliarios.',
        'Estrategia Basada en Datos: Implementación de estrategias analíticas para optimizar procesos de transacción.',
      ],
    },
  },
  {
    title: { en: 'IT Assistant (System Administration)', de: 'IT-Assistent (Systemadministration)', es: 'Asistente de TI (Administración de Sistemas)' },
    company: 'Eastern Mediterranean University',
    location: { en: 'Famagusta, Cyprus', de: 'Famagusta, Zypern', es: 'Famagusta, Chipre' },
    period: { start: '07/2019', end: '07/2021' },
    techStack: ['System Administration', 'Network Diagnostics', 'Linux', 'Windows', 'Troubleshooting'],
    description: {
      en: [
        'System Stability & Troubleshooting: Conducting systematic error analyses (Root Cause Analysis) for hardware and software disruptions, significantly minimizing downtime.',
        'Technical Operations: Ensuring operational IT availability through proactive maintenance and fast support to optimize Mean Time to Repair (MTTR).',
      ],
      de: [
        'System Stability & Troubleshooting: Durchführung systematischer Fehleranalysen (Root Cause Analysis) bei Hardware- und Softwarestörungen, wodurch die Ausfallzeiten signifikant minimiert wurden.',
        'Technical Operations: Sicherstellung der operativen IT-Verfügbarkeit durch proaktive Wartung und schnellen Support zur Optimierung der Mean Time to Repair (MTTR).',
      ],
      es: [
        'Estabilidad del Sistema y Solución de Problemas: Realización de análisis de errores sistemáticos (Root Cause Analysis) para interrupciones de hardware y software.',
        'Operaciones Técnicas: Asegurar la disponibilidad operativa de TI mediante mantenimiento proactivo y soporte rápido.',
      ],
    },
  },
  {
    title: { en: 'Web Developer', de: 'Web Developer', es: 'Desarrollador Web' },
    company: 'Ratin Company',
    location: { en: 'Tehran, Iran', de: 'Teheran, Iran', es: 'Teherán, Irán' },
    period: { start: '01/2017', end: '05/2019' },
    techStack: ['JavaScript', 'Node.js', 'Vue.js', 'PHP', 'SQL', 'MySQL', 'REST APIs'],
    description: {
      en: [
        'Performance Engineering: Optimization of backend architecture (Node.js/PHP) and database queries (SQL) for significant reduction of load times (Page Speed) for E-Commerce applications.',
        'Technical UX & Scalability: Technical further development of frontend components using Vue.js to improve User Experience and ensure system stability during high traffic.',
      ],
      de: [
        'Performance Engineering: Optimierung der Backend-Architektur (Node.js/PHP) und Datenbank-Abfragen (SQL) zur signifikanten Reduktion von Ladezeiten (Page Speed) für E-Commerce-Anwendungen.',
        'Technical UX & Scalability: Technische Weiterentwicklung der Frontend-Komponenten mittels Vue.js zur Verbesserung der User Experience und Sicherstellung der Systemstabilität bei hohem Traffic.',
      ],
      es: [
        'Ingeniería de Rendimiento: Optimización de arquitectura backend (Node.js/PHP) y consultas de base de datos (SQL) para reducción significativa de tiempos de carga.',
        'UX Técnico y Escalabilidad: Desarrollo técnico de componentes frontend usando Vue.js para mejorar la experiencia del usuario.',
      ],
    },
  },
];

export function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4 animate-fade-in">
              <Briefcase className="w-4 h-4" />
              <span>{t('experience.title')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display animate-fade-in">
              {t('experience.title')}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line with animated gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-0 md:pl-20 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot with enhanced pulse */}
                  <div className="absolute left-6 top-6 hidden md:flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-primary shadow-glow animate-glow-pulse" />
                    <div className="absolute w-8 h-8 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
                  </div>

                  <div className="glass-card rounded-2xl p-6 md:p-8 group hover:shadow-glow transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold font-display group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                          {exp.title[language]}
                          {!exp.period.end && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-mono">
                              <Sparkles className="w-3 h-3" />
                              Current
                            </span>
                          )}
                        </h3>
                        <p className="text-primary font-medium text-lg mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2 text-sm text-muted-foreground shrink-0">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-mono">
                            {exp.period.start} — {exp.period.end || t('experience.present')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{exp.location[language]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-mono bg-accent/50 text-accent-foreground rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.description[language].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground group/item">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-primary-glow mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-sm" />
                          <span className="group-hover/item:text-foreground transition-colors duration-300 leading-relaxed">{item}</span>
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
