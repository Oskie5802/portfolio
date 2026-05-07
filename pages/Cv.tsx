import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Globe, Linkedin, Mail, MapPin, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Background } from '../components/Background';

const links = {
  email: 'mailto:minoroskar2009@gmail.com',
  github: 'https://github.com/oskie5802',
  linkedin: 'https://www.linkedin.com/in/oskar-minor-704245343/',
  portfolio: 'https://oskarminor.com',
  googlePlay: 'https://play.google.com/store/apps/dev?id=7728087098258584312',
};

type Language = 'en' | 'pl';

type Project = {
  name: string;
  role: string;
  href: string;
  status: string;
  description: string;
  bullets: string[];
};

const content = {
  en: {
    back: 'Back to portfolio',
    print: 'Print / save PDF',
    switchLabel: 'PL',
    eyebrow: 'Summer internship candidate',
    title: 'Software developer and ambitious founder building products people actually use.',
    intro: 'I am a 17-year-old developer from the Brzesko area in Poland. I learn fastest by shipping real things: mobile apps, web products, games and AI-powered tools. I am looking for a summer internship where I can work with experienced engineers, contribute to production code and bring the same ownership I put into my own projects.',
    location: 'Brzesko area, Lesser Poland, Poland',
    availability: 'Available for a summer internship',
    contact: 'Contact',
    profileTitle: 'Profile',
    profile: 'I am not trying to look like a “finished” developer. I am early, hungry and practical. I have already taken products from an idea to public release, handled real users, built waitlists, published mobile apps and presented technical topics live. I care about simple interfaces, fast iteration and products that solve a real problem instead of just looking good in a repository.',
    highlightsTitle: 'Highlights',
    highlights: [
      'Built and shipped mobile, web and desktop projects as a teenager.',
      'Reached 60,000+ downloads with I Am Dog on Google Play.',
      'Collected 600 people on the czytajdalej waitlist in the first two weeks.',
      'Co-founder of Omni, an AI assistant/productivity product currently in development.',
      'Finalist in Zwolnieni z Teorii with SafeLabs and nominated for a top award.',
    ],
    skillsTitle: 'Skills',
    skillGroups: [
      { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Vite', 'responsive UI'] },
      { title: 'Backend & data', items: ['Supabase', 'databases', 'authentication flows', 'API integrations'] },
      { title: 'Mobile & games', items: ['mobile apps', 'Google Play releases', 'game mechanics', 'user feedback'] },
      { title: 'AI products', items: ['AI-assisted workflows', 'product prototyping', 'automation ideas'] },
      { title: 'Product mindset', items: ['founder thinking', 'waitlists', 'launching', 'public presenting'] },
    ],
    projectsTitle: 'Selected projects',
    projects: [
      {
        name: 'czytajdalej',
        role: 'Founder / builder',
        href: 'https://czytajdalej.app',
        status: 'In development',
        description: 'A local book-sharing app that helps people discover books through neighbours and nearby readers instead of anonymous algorithms.',
        bullets: [
          'Collected 600 waitlist signups in the first two weeks.',
          'Designing the product, user flow and launch strategy from scratch.',
          'Working on a product where trust, simplicity and community matter as much as code.',
        ],
      },
      {
        name: 'Omni',
        role: 'Co-founder',
        href: 'https://heyomni.app',
        status: 'Early 2026',
        description: 'An AI assistant designed to help users find files, install apps, manage email and calendar tasks, and complete computer actions through natural language.',
        bullets: [
          'Building a product at the intersection of AI, productivity and personal computing.',
          'Responsible for shaping product direction and turning broad ideas into usable flows.',
          'Learning how to build with a team, not only as a solo developer.',
        ],
      },
      {
        name: 'I Am Dog',
        role: 'Creator',
        href: 'https://play.google.com/store/apps/details?id=com.ronimstudio.iamdog',
        status: '60,000+ downloads',
        description: 'A mobile dog simulator for children, published on Google Play, with exploration, missions and unlockable levels.',
        bullets: [
          'Reached more than 60,000 downloads on Google Play.',
          'Learned how to ship, maintain and improve a product used by real people.',
          'Built gameplay around a simple idea that was easy for younger users to understand.',
        ],
      },
      {
        name: 'SafeLabs',
        role: 'Co-creator / presenter',
        href: 'https://safelabs.pl',
        status: 'Zwolnieni z Teorii finalist',
        description: 'Interactive cybersecurity workshops for primary school students, created with friends and presented live during public events.',
        bullets: [
          'Finalist in Zwolnieni z Teorii and nominated for one of the top awards.',
          'Presented cybersecurity topics in a clear, practical way for younger students.',
          'Combined technical knowledge with teamwork, communication and social impact.',
        ],
      },
      {
        name: 'streść.to',
        role: 'Founder',
        href: 'https://strescto.pl',
        status: 'Web product',
        description: 'A Polish study-focused web product that helps students understand school readings through plot summaries, character profiles and key themes.',
        bullets: [
          'Built around a clear student problem: understanding required readings faster.',
          'Focused on simple content structure, fast access and practical usefulness.',
        ],
      },
    ] as Project[],
    educationTitle: 'Education',
    education: {
      school: 'Complex of Technical and Vocational Schools in Brzesko',
      details: 'Technical secondary school, programmer profile, 3rd year',
      note: 'Combining school with independent product work, public projects and continuous learning through shipping.',
    },
    languagesTitle: 'Languages',
    languages: ['Polish - native', 'English - B1'],
    lookingForTitle: 'What I am looking for',
    lookingFor: 'A summer internship where I can work close to real product development: frontend, Next.js/React, Supabase-backed apps, mobile products, AI features or internal tools. I want honest feedback, real tasks and the chance to learn how strong teams build software professionally.',
  },
  pl: {
    back: 'Wróć do portfolio',
    print: 'Drukuj / zapisz PDF',
    switchLabel: 'EN',
    eyebrow: 'Kandydat na staż wakacyjny',
    title: 'Developer i ambitny founder, który buduje produkty używane przez prawdziwych ludzi.',
    intro: 'Mam 17 lat i pochodzę z okolic Brzeska. Najszybciej uczę się przez tworzenie rzeczy od zera: aplikacji mobilnych, produktów webowych, gier i narzędzi opartych o AI. Szukam wakacyjnego stażu, na którym będę mógł pracować z doświadczonymi inżynierami, pisać realny kod produkcyjny i wnieść odpowiedzialność, z jaką podchodzę do własnych projektów.',
    location: 'Okolice Brzeska, Małopolska, Polska',
    availability: 'Dostępny na staż wakacyjny',
    contact: 'Kontakt',
    profileTitle: 'Profil',
    profile: 'Nie próbuję udawać „skończonego” developera. Jestem na początku, ale jestem głodny rozwoju, konkretny i praktyczny. Doprowadzałem już projekty od pomysłu do publicznego wydania, pracowałem z realnymi użytkownikami, budowałem waitlisty, publikowałem aplikacje mobilne i prezentowałem techniczne tematy na żywo. Zależy mi na prostych interfejsach, szybkim iterowaniu i produktach, które rozwiązują realny problem.',
    highlightsTitle: 'Najważniejsze punkty',
    highlights: [
      'Tworzę i publikuję projekty mobile, web i desktop jako nastolatek.',
      'Osiągnąłem 60 000+ pobrań aplikacji I Am Dog w Google Play.',
      'Zebrałem 600 osób na waitliście czytajdalej w pierwsze dwa tygodnie.',
      'Jestem co-founderem Omni, produktu AI/productivity będącego w trakcie rozwoju.',
      'Jestem finalistą Zwolnionych z Teorii z projektem SafeLabs i nominacją do jednej z głównych nagród.',
    ],
    skillsTitle: 'Umiejętności',
    skillGroups: [
      { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Vite', 'responsywne UI'] },
      { title: 'Backend i dane', items: ['Supabase', 'bazy danych', 'logowanie', 'integracje API'] },
      { title: 'Mobile i gry', items: ['aplikacje mobilne', 'publikacje w Google Play', 'mechaniki gier', 'feedback użytkowników'] },
      { title: 'Produkty AI', items: ['workflow z AI', 'prototypowanie produktów', 'automatyzacje'] },
      { title: 'Podejście produktowe', items: ['myślenie founderowe', 'waitlisty', 'launch', 'wystąpienia publiczne'] },
    ],
    projectsTitle: 'Wybrane projekty',
    projects: [
      {
        name: 'czytajdalej',
        role: 'Founder / builder',
        href: 'https://czytajdalej.app',
        status: 'W trakcie budowy',
        description: 'Lokalna aplikacja do dzielenia się książkami, która pomaga odkrywać książki przez sąsiadów i osoby w pobliżu, a nie anonimowe algorytmy.',
        bullets: [
          '600 zapisów na waitlistę w pierwsze dwa tygodnie.',
          'Projektuję produkt, flow użytkownika i strategię startu od zera.',
          'Buduję produkt, w którym zaufanie, prostota i społeczność są równie ważne jak kod.',
        ],
      },
      {
        name: 'Omni',
        role: 'Co-founder',
        href: 'https://heyomni.app',
        status: 'Early 2026',
        description: 'Asystent AI, który ma pomagać użytkownikom znajdować pliki, instalować aplikacje, zarządzać mailem i kalendarzem oraz wykonywać akcje na komputerze przez język naturalny.',
        bullets: [
          'Buduję produkt na styku AI, produktywności i personal computingu.',
          'Pomagam przekładać szeroką wizję na użyteczne flow produktu.',
          'Uczę się pracy zespołowej przy produkcie, a nie tylko solowego programowania.',
        ],
      },
      {
        name: 'I Am Dog',
        role: 'Creator',
        href: 'https://play.google.com/store/apps/details?id=com.ronimstudio.iamdog',
        status: '60 000+ pobrań',
        description: 'Mobilny symulator psa dla dzieci, opublikowany w Google Play, z eksploracją, misjami i odblokowywanymi poziomami.',
        bullets: [
          'Ponad 60 000 pobrań w Google Play.',
          'Nauczyłem się publikować, utrzymywać i poprawiać produkt używany przez realnych ludzi.',
          'Zbudowałem gameplay wokół prostego pomysłu zrozumiałego dla młodszych użytkowników.',
        ],
      },
      {
        name: 'SafeLabs',
        role: 'Co-creator / presenter',
        href: 'https://safelabs.pl',
        status: 'Finalista Zwolnionych z Teorii',
        description: 'Interaktywne warsztaty cyberbezpieczeństwa dla uczniów szkół podstawowych, tworzone ze znajomymi i prezentowane na żywo podczas wydarzeń.',
        bullets: [
          'Finalista Zwolnionych z Teorii i nominacja do jednej z głównych nagród.',
          'Prezentuję tematy cyberbezpieczeństwa w prosty i praktyczny sposób dla młodszych uczniów.',
          'Łączę wiedzę techniczną z pracą zespołową, komunikacją i wpływem społecznym.',
        ],
      },
      {
        name: 'streść.to',
        role: 'Founder',
        href: 'https://strescto.pl',
        status: 'Produkt webowy',
        description: 'Polski produkt edukacyjny pomagający uczniom zrozumieć lektury przez streszczenia, profile bohaterów i najważniejsze motywy.',
        bullets: [
          'Projekt zbudowany wokół konkretnego problemu uczniów: szybszego zrozumienia lektur.',
          'Skupienie na prostej strukturze treści, szybkim dostępie i praktycznej użyteczności.',
        ],
      },
    ] as Project[],
    educationTitle: 'Edukacja',
    education: {
      school: 'Zespół Szkół Technicznych i Branżowych w Brzesku',
      details: 'Technikum, profil programista, klasa 3',
      note: 'Łączę szkołę z samodzielnym tworzeniem produktów, publicznymi projektami i nauką przez wdrażanie.',
    },
    languagesTitle: 'Języki',
    languages: ['Polski - ojczysty', 'Angielski - B1+'],
    lookingForTitle: 'Czego szukam',
    lookingFor: 'Wakacyjnego stażu blisko realnego tworzenia produktów: frontend, Next.js/React, aplikacje oparte o Supabase, produkty mobilne, funkcje AI albo narzędzia wewnętrzne. Chcę szczerego feedbacku, prawdziwych zadań i możliwości zobaczenia, jak mocne zespoły profesjonalnie budują software.',
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section variants={itemVariants} className="cv-print-section rounded-3xl border border-white/[0.07] bg-[#111]/80 p-6 md:p-8 shadow-2xl shadow-black/20 print:border-[#e5e5e5] print:bg-white print:p-0 print:shadow-none">
    <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#777] print:text-[#666]">{title}</h2>
    {children}
  </motion.section>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="cv-print-pill rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] text-[#bdbdbd] print:border-[#d7d7d7] print:bg-white print:text-[#333]">
    {children}
  </span>
);

const ExternalAnchor = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

export const Cv: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = content[language];

  const flatSkills = useMemo(() => t.skillGroups.flatMap(group => group.items), [t.skillGroups]);

  return (
    <div className="cv-print-root min-h-screen bg-[#0c0c0c] text-[#e0e0e0] selection:bg-white selection:text-[#0c0c0c] print:bg-white print:text-[#111]">
      <style>{`
        @media print {
          @page { size: A4; margin: 11mm; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          html, body, #root { width: 100% !important; background: #fff !important; }
          body { color: #111 !important; font-size: 10.5pt !important; }
          .cv-no-print { display: none !important; }
          .cv-print-root, .cv-page, .cv-section-gap, .cv-grid, .cv-grid > div, .cv-grid > aside { background: #fff !important; }
          .cv-page { max-width: none !important; min-height: auto !important; padding: 0 !important; }
          .cv-section-gap { display: block !important; }
          .cv-section-gap > * + * { margin-top: 5mm !important; }
          .cv-print-header { overflow: visible !important; border-bottom: 1px solid #d8d8d8 !important; border-radius: 0 !important; padding-bottom: 4mm !important; }
          .cv-print-header > div { display: grid !important; grid-template-columns: minmax(0, 1fr) 64mm !important; gap: 8mm !important; align-items: end !important; }
          .cv-print-contact-list { gap: 1.6mm !important; min-width: 0 !important; font-size: 8.4pt !important; }
          .cv-print-contact-card { border: 1px solid #e2e2e2 !important; border-radius: 7px !important; padding: 2mm 2.6mm !important; background: #fafafa !important; }
          .cv-grid { display: block !important; background: #fff !important; }
          .cv-grid > div, .cv-grid > aside { display: block !important; background: #fff !important; }
          .cv-grid > div > .cv-print-section + .cv-print-section, .cv-grid > aside > .cv-print-section + .cv-print-section { margin-top: 4.6mm !important; }
          .cv-grid > aside { margin-top: 4.6mm !important; column-count: 2 !important; column-gap: 8mm !important; }
          .cv-grid > aside .cv-print-section { display: inline-block !important; width: 100% !important; margin: 0 0 4.6mm !important; break-inside: avoid !important; page-break-inside: avoid !important; }
          .cv-grid > div > .cv-print-section:first-child { column-count: 2 !important; column-gap: 8mm !important; }
          .cv-grid > div > .cv-print-section:first-child h2 { column-span: all !important; }
          .cv-print-section { overflow: visible !important; border: 0 !important; border-top: 1px solid #dcdcdc !important; border-radius: 0 !important; background: #fff !important; padding-top: 3mm !important; }
          .cv-print-section h2 { margin-bottom: 2.2mm !important; color: #555 !important; font-size: 7pt !important; letter-spacing: 0.16em !important; }
          .cv-print-project { break-inside: avoid !important; page-break-inside: avoid !important; border: 0 !important; border-left: 2px solid #dedede !important; border-radius: 0 !important; padding: 0 0 0 3mm !important; background: #fff !important; }
          .cv-print-project + .cv-print-project { margin-top: 3mm !important; }
          .cv-print-skills { gap: 1.5mm !important; }
          .cv-print-pill { border: 1px solid #d9d9d9 !important; border-radius: 999px !important; background: #fafafa !important; padding: 1.4mm 2.2mm !important; font-size: 7.8pt !important; line-height: 1.2 !important; }
          .cv-print-header h1 { font-size: 25pt !important; line-height: 1 !important; }
          .cv-print-header p { margin-top: 2.6mm !important; }
          .cv-print-header p:first-of-type { font-size: 11.2pt !important; line-height: 1.24 !important; }
          .cv-print-header p:last-of-type { font-size: 8.5pt !important; line-height: 1.45 !important; }
          .cv-print-project h3, .cv-print-project a { font-size: 11.4pt !important; }
          .cv-print-project p, .cv-print-project li, .cv-print-section p, .cv-print-section li { font-size: 8.3pt !important; line-height: 1.42 !important; }
          svg { width: 11px !important; height: 11px !important; }
          a { color: #111 !important; text-decoration: none !important; }
        }
      `}</style>
      <div className="cv-no-print">
        <Background />
      </div>

      <main className="cv-page relative z-10 mx-auto max-w-6xl px-6 py-8 md:py-12 print:relative print:z-auto">
        <div className="cv-no-print mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#747474] transition-colors hover:text-white">
            <ArrowLeft size={16} />
            {t.back}
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-[#d0d0d0] transition-colors hover:border-white/[0.16] hover:bg-white/[0.07]"
              type="button"
            >
              {t.switchLabel}
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white text-[#111] px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02]"
              type="button"
            >
              <Printer size={15} />
              {t.print}
            </button>
          </div>
        </div>

        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.06 }} className="cv-section-gap space-y-6 print:space-y-0">
          <motion.header variants={itemVariants} className="cv-print-header overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#111]/90 p-7 md:p-10 shadow-2xl shadow-black/30 print:border-0 print:bg-white print:p-0 print:shadow-none">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#888] print:border-[#d7d7d7] print:bg-white print:text-[#555]">
                  {t.eyebrow}
                </div>
                <h1 className="text-4xl font-bold leading-[0.98] tracking-tight text-white md:text-6xl print:text-4xl print:text-[#111]">
                  Oskar Minor
                </h1>
                <p className="mt-5 max-w-2xl text-xl leading-snug text-[#d7d7d7] md:text-2xl print:text-lg print:text-[#111]">
                  {t.title}
                </p>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#858585] print:text-[13px] print:leading-6 print:text-[#333]">
                  {t.intro}
                </p>
              </div>

              <div className="cv-print-contact-list grid min-w-[260px] gap-3 text-sm text-[#bdbdbd] print:text-[#222]">
                <div className="cv-print-contact-card flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#0c0c0c]/70 px-4 py-3 print:border-[#e5e5e5] print:bg-white">
                  <MapPin size={16} className="text-[#777]" />
                  {t.location}
                </div>
                <a href={links.email} className="cv-print-contact-card flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#0c0c0c]/70 px-4 py-3 transition-colors hover:border-white/[0.14] hover:text-white print:border-[#e5e5e5] print:bg-white print:text-[#111]">
                  <Mail size={16} className="text-[#777]" />
                  minoroskar2009@gmail.com
                </a>
                <div className="cv-print-contact-card rounded-2xl border border-white/[0.07] bg-[#0c0c0c]/70 px-4 py-3 text-[#8f8f8f] print:border-[#e5e5e5] print:bg-white print:text-[#333]">
                  {t.availability}
                </div>
              </div>
            </div>
          </motion.header>

          <div className="cv-grid grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-6 print:space-y-0">
              <Section title={t.profileTitle}>
                <p className="text-[15px] leading-8 text-[#b8b8b8] print:text-[13px] print:leading-6 print:text-[#222]">{t.profile}</p>
              </Section>

              <Section title={t.projectsTitle}>
                <div className="space-y-5">
                  {t.projects.map(project => (
                    <article key={project.name} className="cv-print-project rounded-2xl border border-white/[0.06] bg-[#0c0c0c]/60 p-5 print:border-[#e5e5e5] print:bg-white print:p-0 print:pt-4">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <ExternalAnchor href={project.href} className="group inline-flex items-center gap-2 text-xl font-semibold text-white print:text-[#111]">
                            {project.name}
                            <ExternalLink size={14} className="text-[#555] transition-colors group-hover:text-[#aaa] print:hidden" />
                          </ExternalAnchor>
                          <p className="mt-1 text-sm text-[#777] print:text-[#444]">{project.role}</p>
                        </div>
                        <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[12px] text-[#a7a7a7] print:border print:border-[#d7d7d7] print:bg-white print:text-[#333]">
                          {project.status}
                        </span>
                      </div>
                      <p className="mb-3 text-[14px] leading-7 text-[#a8a8a8] print:text-[12px] print:leading-5 print:text-[#333]">{project.description}</p>
                      <ul className="space-y-2 text-[13px] leading-6 text-[#838383] print:text-[12px] print:leading-5 print:text-[#333]">
                        {project.bullets.map(bullet => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-[0.72em] h-1 w-1 flex-shrink-0 rounded-full bg-[#777] print:bg-[#555]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </Section>
            </div>

            <aside className="space-y-6 print:space-y-0">
              <Section title={t.highlightsTitle}>
                <ul className="space-y-3 text-sm leading-6 text-[#b6b6b6] print:text-[12px] print:leading-5 print:text-[#222]">
                  {t.highlights.map(highlight => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-[0.7em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white print:bg-[#111]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title={t.skillsTitle}>
                <div className="cv-print-skills mb-5 flex flex-wrap gap-2 print:mb-4">
                  {flatSkills.map(skill => <Pill key={skill}>{skill}</Pill>)}
                </div>
                <div className="space-y-4">
                  {t.skillGroups.map(group => (
                    <div key={group.title}>
                      <h3 className="mb-1 text-sm font-semibold text-white print:text-[#111]">{group.title}</h3>
                      <p className="text-[13px] leading-6 text-[#888] print:text-[12px] print:leading-5 print:text-[#333]">{group.items.join(' · ')}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={t.educationTitle}>
                <h3 className="text-lg font-semibold text-white print:text-base print:text-[#111]">{t.education.school}</h3>
                <p className="mt-2 text-sm text-[#9c9c9c] print:text-[12px] print:text-[#333]">{t.education.details}</p>
                <p className="mt-4 text-[13px] leading-6 text-[#777] print:text-[12px] print:leading-5 print:text-[#444]">{t.education.note}</p>
              </Section>

              <Section title={t.languagesTitle}>
                <div className="flex flex-wrap gap-2">
                  {t.languages.map(languageItem => <Pill key={languageItem}>{languageItem}</Pill>)}
                </div>
              </Section>

              <Section title={t.lookingForTitle}>
                <p className="text-[14px] leading-7 text-[#b4b4b4] print:text-[12px] print:leading-5 print:text-[#222]">{t.lookingFor}</p>
              </Section>

              <Section title={t.contact}>
                <div className="grid gap-3 text-sm">
                  <a href={links.email} className="flex items-center gap-3 text-[#cfcfcf] transition-colors hover:text-white print:text-[#111]">
                    <Mail size={16} className="text-[#777]" />
                    Email
                  </a>
                  <ExternalAnchor href={links.github} className="flex items-center gap-3 text-[#cfcfcf] transition-colors hover:text-white print:text-[#111]">
                    <Github size={16} className="text-[#777]" />
                    GitHub
                  </ExternalAnchor>
                  <ExternalAnchor href={links.linkedin} className="flex items-center gap-3 text-[#cfcfcf] transition-colors hover:text-white print:text-[#111]">
                    <Linkedin size={16} className="text-[#777]" />
                    LinkedIn
                  </ExternalAnchor>
                  <ExternalAnchor href={links.portfolio} className="flex items-center gap-3 text-[#cfcfcf] transition-colors hover:text-white print:text-[#111]">
                    <Globe size={16} className="text-[#777]" />
                    oskarminor.com
                  </ExternalAnchor>
                </div>
              </Section>
            </aside>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
