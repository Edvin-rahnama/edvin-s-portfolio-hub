import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    title: { en: 'Data Scientist', de: 'Data Scientist' },
    company: 'Helmholtz-Zentrum Hereon',
    location: 'Geesthacht, Germany',
    period: { start: '07/2025', end: null },
    description: {
      en: [
        'Developing physics-informed models (PINNs, PINO, MBAE) for PDE-driven systems.',
        'Parameter estimation for corrosion kinetics from polarization data with validation beyond the Tafel range.',
        'Implementing versioned configurations and quality assurance checks for robust training pipelines.',
      ],
      de: [
        'Entwicklung physik-informierter Modelle (PINNs, PINO, MBAE) zur Lösung PDE-gesteuerter Systeme.',
        'Parameterschätzung für Korrosionskinetik aus Polarisationsdaten und Validierung über den Tafel-Bereich hinaus.',
        'Nutzung versionierter Konfigurationen und Qualitätssicherungschecks für robuste Trainings-Pipelines.',
      ],
    },
  },
  {
    title: { en: 'IT Systems & Automation Engineer', de: 'IT Systems & Automation Engineer' },
    company: 't2consult',
    location: 'Preetz, Germany',
    period: { start: '04/2025', end: null },
    description: {
      en: [
        'Building backend integrations between Jira Data Center, custom apps, and monitoring databases.',
        'Developing Python-based ETL pipelines for logs and metrics from Linux/Windows servers to Zabbix/Grafana and AWS monitoring.',
        'Automating deployments and system tasks with GitHub Actions, PowerShell, Bash, and AWS Lambda.',
      ],
      de: [
        'Entwicklung und Wartung von Backend-Integrationen zwischen Jira Data Center und Monitoring-Datenbanken.',
        'Aufbau von Python-basierten ETL-Pipelines für Logs und Metriken in Zabbix/Grafana und AWS-Monitoring.',
        'Automatisierung von Deployments und Systemaufgaben mit GitHub Actions, PowerShell, Bash und AWS Lambda.',
      ],
    },
  },
  {
    title: { en: 'NLP & Recommender Systems', de: 'NLP & Recommender Systems' },
    company: '80s80s Radio GmbH & Co. KG',
    location: 'Kiel, Germany',
    period: { start: '08/2023', end: '01/2024' },
    description: {
      en: [
        'Deployed NLP and LLM models to enhance user experience.',
        'Integrated Spotify and Musixmatch APIs for music content enrichment.',
        'Optimized data pipelines and developed models for text classification and sentiment analysis.',
      ],
      de: [
        'Einsatz von NLP- und LLM-Modellen zur Verbesserung der Nutzererfahrung.',
        'Integration von Spotify- und Musixmatch-APIs zur Anreicherung von Musikcontent.',
        'Optimierung von Datenpipelines und Entwicklung von Modellen für Textklassifikation und Sentimentanalyse.',
      ],
    },
  },
  {
    title: { en: 'Business Intelligence Analyst', de: 'Business Intelligence Analyst' },
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
    },
  },
  {
    title: { en: 'Web Developer', de: 'Web Developer' },
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
