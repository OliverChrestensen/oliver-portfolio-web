'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  technologies?: string[]
  color: string
}

interface Education {
  degree: string
  institution: string
  period: string
  description?: string[]
  color: string
}

interface Language {
  language: string
  proficiency: string
}

export default function CV() {
  const { ref, isInView } = useScrollAnimation()
  const [isApplicationExpanded, setIsApplicationExpanded] = useState(false)

  const resume = "Jeg har gennem 3 år som udvikler for virksomheden Brand by Hand opnået en bred og faglig viden indenfor udvikling. Som person er jeg utrolig struktureret, kommunikativ dygtig og har en stor passion for at tilegne mig ny viden og arbejde med nye teknologier. Min videregående uddannelse som Datamatiker gjorde mig netop bevist om at udvikling af systemer og integrationer er hvad der motiverer mig. På arbejdet er jeg udadvendt, med et altid godt humør og smil på læben, god til at samarbejde, men samtidigt nyder jeg at arbejde selvstændigt. Som kollega er jeg engageret, ansvarsbevidst og omstillingsparat, og jeg bidrager aktivt til et positivt arbejdsmiljø."

  const experiences: Experience[] = [
    {
      title: 'Backend Udvikler',
      company: 'Brand by Hand',
      period: 'FEB. 2023 - OKT. 2025',
      description: [
        'Udvikling af REST API',
        'Udvikling af API-integrationer mellem WordPress, Visma, Terapeutbooking, Microsoft 365, Google m.m.',
        'Automatisering af workflows i Power Automate og cron job-administration via SSH',
        'Opsætning og vedligeholdelse af hostingmiljøer, inkl. servermigration og fejlfinding',
        'Opsætning og visualisering af data i Looker Studio fra GA4, GSC, WooCommerce og Ahrefs',
        'Strukturering af datakilder og optimering af rapporteringsflows',
        'Rådgivning om tekniske løsninger og forretningsudvikling for kunder',
        'Afholdelse af kundemøder, kravspecificering og koordinering af udviklingsopgaver',
        'Dokumentation af løsninger og samarbejde med eksterne leverandører'
      ],
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Sass', 'Node.js', 'Express', 'MySQL', 'Java', 'Spring Boot'],
      color: 'from-blue-500/30 to-blue-600/30'
    },
    {
      title: 'Deltids Junior Udvikler',
      company: 'Brand by Hand',
      period: 'DEC. 2022 - FEB. 2023',
      description: [
        'Udvikling og vedligeholdelse af WordPress websites',
        'Support og fejlfinding',
        'Læring af interne systemer og workflows'
      ],
      technologies: ['PHP', 'WordPress', 'JavaScript', 'CSS', 'HTML'],
      color: 'from-green-500/30 to-green-600/30'
    },
    {
      title: 'Praktikant',
      company: 'Brand by Hand',
      period: 'SEP. 2022 - NOV. 2022',
      description: [
        'Praktikperiode som del af Datamatiker uddannelsen',
        'Deltagelse i udviklingsprojekter',
        'Læring af best practices og workflows'
      ],
      technologies: ['PHP', 'WordPress', 'JavaScript'],
      color: 'from-purple-500/30 to-purple-600/30'
    },
    {
      title: 'Studentermedarbejder',
      company: 'Brand by Hand',
      period: 'MAJ. 2022 - AUG. 2022',
      description: [
        'Deltidsarbejde ved siden af studiet',
        'Support og mindre udviklingsopgaver',
        'Introduktion til virksomhedens systemer'
      ],
      technologies: ['PHP', 'WordPress'],
      color: 'from-yellow-500/30 to-yellow-600/30'
    },
    {
      title: 'Assistent',
      company: 'Netto',
      period: 'SEP. 2019 - SEP. 2022',
      description: [
        'Åbning og lukning af butikken',
        'Opfyldning af vare',
        'Forskellige ansvarsområder (kød, mejeri, frugt og grønt, spot osv.)',
        'Betjening af kunder',
        'Kundeklagehåndtering',
        'Rengøring af butikken',
        'Leder af butikken',
        'Sørgede for den generelle drift af butikken',
        'Modtage vare og sende retur'
      ],
      color: 'from-gray-500/30 to-gray-600/30'
    },
    {
      title: 'Servicemedarbejder',
      company: '7-Eleven',
      period: 'NOV. 2018 - SEP. 2019',
      description: [
        'Betjene kunder',
        'Ansvar for butikkens drift om aftenen',
        'Smøre sandwiches og lave bake-off',
        'Opfyldning af vare'
      ],
      color: 'from-orange-500/30 to-orange-600/30'
    }
  ]

  const education: Education[] = [
    {
      degree: 'Datamatiker',
      institution: 'KEA',
      period: 'AUG. 2020 - JAN. 2023',
      description: [
        'Valgfag: React Native, Python',
        'Java og JavaScript',
        'Systemudvikling',
        'API-udvikling',
        'Databasedesign og -optimering',
        'Scrum'
      ],
      color: 'from-purple-500/30 to-purple-600/30'
    },
    {
      degree: 'Gymnasium',
      institution: 'Ørestad Gymnasium',
      period: 'AUG. 2015 - JUN. 2018',
      color: 'from-indigo-500/30 to-indigo-600/30'
    }
  ]

  const languages: Language[] = [
    { language: 'Dansk', proficiency: 'Modersmål' },
    { language: 'Engelsk', proficiency: 'Gode kundskaber mundtligt og skriftligt' },
    { language: 'Tysk', proficiency: 'Basiskundskaber' },
    { language: 'Svensk', proficiency: 'Problemfri kommunikation' },
    { language: 'Norsk', proficiency: 'Problemfri kommunikation' }
  ]

  const personalInfo = "Jeg er 26 år, og bor i Kastrup sammen med min forlovede og vores hund, Carlo på 1,5 år. I min fritid elsker jeg at bruge tid sammen med min familie og venner, desuden er jeg stor fodboldfan både på stadion og på sofaen."

  const reference = {
    name: 'Mikkel Andersen',
    title: 'CEO - Brand by Hand',
    phone: '+45 69 15 72 20'
  }

  const applicationParagraphs = [
    "En struktureret, veludført og lærerig arbejdsproces i høj kvalitet af udvikling, er hvad jeg ser som tilfredsstillende. Med min drive, positivitet og store motivation for udvikling kan jeg, ved at blive udvikler hos jer, bidrage til et professionelt og ambitiøst arbejde, samt et godt arbejdsmiljø. Jeg sikrer altid et højt niveau, på en professionel og positiv måde, og er meget beslutningsstærk. Det er hvad, jeg er stærk i.",
    "Jeg har de seneste år arbejdet som backend-udvikler med særligt fokus på at bygge stabile og skalerbare løsninger. Jeg har dybdegående erfaring med REST API integrationer, hvilket har gjort mig i stand til at bygge fleksible og skalerbare systemer. Derudover har jeg udviklet egne Node.js-applikationer med Express, hvor jeg bl.a. har bygget REST API'er kombineret med webscraping-funktionalitet. Her er dataen blevet struktureret og gemt i en MySQL-database, hvilket har givet mig en solid forståelse for databasedesign og -optimering i praksis. Det har været lærerigt at arbejde med hele kæden fra datakilden over API'et til databasen og sikre, at det hele spiller effektivt sammen. Jeg sætter en ære i, altid at yde mit bedste på arbejdspladsen. Når jeg kommer i mål, er det altid en succesoplevelse for mig.",
    "Som udvikler er det vigtigt at være løsningsorienteret og nysgerrig - og jeg gør derfor altid mit bedste for, at tilegne mig ny viden. Desuden ligger jeg stor vægt på det sociale på arbejdspladsen, da man med gode rammer yder bedst.",
    "Som person er jeg ekstrem passioneret, detaljeorienteret og respektfuld. Jeg er mødestabil og elsker at arbejde som et team, og udveksle ideer om, hvordan opgaven bliver løst bedst, men samtidigt er jeg en handlekraftig person, samt nyder at arbejde selvstændigt. Jeg har massere gå på mod og er frisk på at blive kastet ud i forskellige udfordringer, med et altid godt humør, derfor er jeg den rette udvikler for jer.",
    "Med i baggagen har jeg en videregående uddannelse som Datamatiker. Det var især under uddannelse at jeg fik interesse for udvikling af systemer. Desuden fik jeg undervisning i objektorienteret programmering og relations databaser som bl.a. Java og MySQL.",
    "Jeg kan garantere, at med min baggrund og erfaring fra Brand by Hand og videregående uddannelse, har jeg mange færdigheder som jeg kan tilbyde jer. "
  ]

  return (
    <div ref={ref} className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <h1 className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
            📄 CV & Karriere
          </h1>
          <p className="text-xl text-blue-300 font-semibold">Min professionelle rejse</p>
        </motion.div>
      </motion.div>


      {/* Resume Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
          <span className="mr-3 text-4xl">📝</span>
          Resume
        </h2>
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
          <p className="text-gray-200 leading-relaxed">{resume}</p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Erfaring Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3 text-4xl">💼</span>
            Erfaring
          </h2>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              className={`group bg-gradient-to-br ${exp.color} backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl relative`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-200 font-semibold">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm border border-white/30 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-200 text-sm flex items-start">
                      <span className="mr-2 text-blue-400">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/10 text-white rounded text-xs border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Uddannelse & Certificeringer Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-8"
        >
          {/* Uddannelse */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3 text-4xl">🎓</span>
              Uddannelse
            </h2>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                className={`group bg-gradient-to-br ${edu.color} backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl relative mb-6`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-purple-200 font-semibold">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm border border-white/30 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  {edu.description && (
                    <ul className="space-y-1 mt-3">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-gray-200 text-sm flex items-start">
                          <span className="mr-2 text-purple-400">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sprogkundskaber */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3 text-4xl">🌍</span>
              Sprogkundskaber
            </h2>
            
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                  className="group bg-gradient-to-br from-teal-500/30 to-teal-600/30 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{lang.language}</span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm border border-white/30">
                      {lang.proficiency}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Personal Info & Reference Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Personlige Oplysninger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3 text-4xl">👤</span>
            Personlige Oplysninger
          </h2>
          <div className="bg-gradient-to-br from-pink-500/30 to-pink-600/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
            <p className="text-gray-200 leading-relaxed">{personalInfo}</p>
          </div>
        </motion.div>

        {/* Reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.55, duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3 text-4xl">📞</span>
            Reference
          </h2>
          <div className="bg-gradient-to-br from-amber-500/30 to-amber-600/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">{reference.name}</h3>
            <p className="text-amber-200 font-semibold mb-2">{reference.title}</p>
            <a 
              href={`tel:${reference.phone}`}
              className="text-gray-200 hover:text-white transition-colors flex items-center"
            >
              <span className="mr-2">📱</span>
              {reference.phone}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ansøgning Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.58, duration: 0.4 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <span className="mr-3 text-4xl">✉️</span>
            Ansøgning
          </h2>
          <motion.button
            onClick={() => setIsApplicationExpanded(!isApplicationExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg border border-indigo-400/50 hover:border-indigo-300 transition-all duration-300 flex items-center gap-2"
          >
            <span>{isApplicationExpanded ? 'Skjul' : 'Vis'}</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: isApplicationExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isApplicationExpanded ? 'auto' : 0,
            opacity: isApplicationExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="bg-gradient-to-br from-indigo-500/30 to-indigo-600/30 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
            <div className="space-y-6">
              {applicationParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isApplicationExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="text-gray-200 leading-relaxed text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isApplicationExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: applicationParagraphs.length * 0.1, duration: 0.3 }}
                className="text-gray-200 mt-8 pt-6 border-t border-white/20"
              >
                <span className="font-semibold text-white">Med venlig hilsen</span>
                <br />
                <span className="text-lg">Oliver Chrestensen</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Download CV Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="text-center mt-12"
      >
        <motion.a
          href="/cv.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-2xl border-2 border-blue-400/50 hover:border-blue-300 transition-all duration-300"
        >
          <span className="mr-2 text-xl">📥</span>
          Download CV som PDF
        </motion.a>
      </motion.div>
    </div>
  )
}

