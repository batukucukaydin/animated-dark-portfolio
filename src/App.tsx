import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, ChevronRight, Sparkles, Code2, Briefcase, BookOpen, User, Stars, Rocket, Cpu, Laptop, Monitor, HardDrive } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const SKILLS = ['Swift', 'SwiftUI', 'Python', 'Java', 'Machine Learning', 'JavaScript', 'SQL', 'iOS Development', 'OpenCV', 'MVVM', 'ARKit', 'ML', 'Git', 'Photoshop', 'Premiere Pro', 'Final Cut Pro', 'Canva', 'Excel', 'PowerPoint'];

const PROFILE = {
  name: 'Batuhan Kucukaydin',
  role: 'Software Engineer • Computer Engineer',
  tagline: '“A computer engineer who turns ideas into intelligent experiences.”',
  location: 'Istanbul, Türkiye',
  email: 'batuhankucukaydin@icloud.com',
  social: {
    github: 'https://github.com/batukucukaydin',
    linkedin: 'https://linkedin.com/in/batuhankucukaydin',
    medium: 'https://medium.com/@batukucukaydin',
  },
};

const PROJECTS = [
  {
    title: 'Inamorata Shopping App (AR)',
    description: 'Swift tabanlı AR alışveriş uygulaması. Firebase kimlik doğrulama ve gerçek zamanlı veri. Odak: UX ve yenilikçi AR etkileşimleri.',
    tags: ['Swift','ARKit','Firebase'],
    links: { demo: '#', code: 'https://github.com/batukucukaydin/InamorataShoppingApp' },
  },
  {
    title: 'TripMate Travel App',
    description: 'AI-powered itinerary planner with multilingual support and map pins.',
    tags: ['AI', 'Travel', 'Multilingual'],
    links: { demo: '#', code: '#' },
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 20 } } }
const glow = 'before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:to-white/0 before:blur-xl before:opacity-0 hover:before:opacity-100 transition relative overflow-hidden'

function Header() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className='sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/5'>
      <div className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
        <a href='#top' className='flex items-center gap-2'>
          <Rocket className='h-5 w-5' />
          <span className='font-semibold tracking-tight'>BK</span>
        </a>
        <nav className='hidden md:flex items-center gap-6 text-sm'>
          {links.map(l => (
            <a key={l.href} href={l.href} className='text-gray-300 hover:text-foreground transition'>
              {l.label}
            </a>
          ))}
        </nav>
        <div className='flex items-center gap-2'>
          <a href={PROFILE.social.github} target='_blank' rel='noreferrer' aria-label='GitHub' className='p-2 rounded-full hover:bg-white/5 transition'><Github className='h-5 w-5' /></a>
          <a href={PROFILE.social.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn' className='p-2 rounded-full hover:bg-white/5 transition'><Linkedin className='h-5 w-5' /></a>
          <a href={PROFILE.social.medium} target='_blank' rel='noreferrer' aria-label='Medium' className='p-2 rounded-full hover:bg-white/5 transition'>
            <BookOpen className='h-5 w-5' />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label='Email' className='p-2 rounded-full hover:bg-white/5 transition'>
            <Mail className='h-5 w-5' />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id='top' className='relative overflow-hidden'>
      <div className='mx-auto max-w-6xl px-4 py-16'>
        <div className='relative flex flex-col items-center text-center gap-6'>

          {/* 🎬 Video: küçültülmüş, başlığın hemen üstünde */}
          <div className="w-full flex justify-center">
            <video
              controls
              playsInline
              preload='metadata'
              className='w-[65%] md:w-[55%] aspect-video rounded-xl shadow-xl border border-white/10 bg-black/40'
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Üst yazı */}
          <div className='flex items-center gap-2 justify-center text-xs uppercase tracking-widest text-gray-400 mt-4'>
            <Stars className='h-4 w-4' /> <span>My • Portfolio</span>
          </div>

          {/* Başlık */}
          <h1 className='text-4xl md:text-6xl font-bold leading-tight mt-2'>
            Hi, I&apos;m{' '}
            <span className='bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent'>
              {PROFILE.name}
            </span>
          </h1>

          {/* Tagline */}
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl'>
            {PROFILE.tagline}
          </p>

          {/* Butonlar */}
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <a href='#projects'>
              <Button size='lg' className={`group ${glow}`}>
                <Sparkles className='mr-2 h-4 w-4 transition group-hover:rotate-12' /> See Projects
              </Button>
            </a>
            <a href='#contact'>
              <Button size='lg' variant='secondary'>
                <Send className='mr-2 h-4 w-4' /> Contact Me
              </Button>
            </a>
          </div>

          {/* Küçük skill grid */}
          <div className='mt-6 grid w-full grid-cols-2 gap-2 md:grid-cols-4 text-xs text-gray-400'>
            {SKILLS.slice(0, 8).map(s => (
              <div key={s} className='rounded-md border border-white/5 bg-white/2 py-2 px-3 text-center flex items-center justify-center gap-2'>
                <span>{s}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}



function About() {
  return (
    <section id='about' className='mx-auto max-w-6xl px-4 py-16'>
      <div className='grid gap-8 md:grid-cols-3'>
        <div className='md:col-span-2'>
          <Card className={glow}>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'><User className='h-5 w-5' /> About Me</CardTitle>
              <CardDescription>
                {PROFILE.role} • {PROFILE.location}
              </CardDescription>
            </CardHeader>
            <CardContent className='text-gray-300 leading-relaxed'>
              <p className='mb-3'>
                I’m Batuhan, a Computer Engineer passionate about creating intelligent and seamless mobile experiences. I specialize in iOS development and enjoy building apps that combine design, performance, and AI-driven functionality. With a strong focus on Swift, SwiftUI, and machine learning integration, I aim to turn innovative ideas into real, impactful products. Confident, fast-learning, and detail-oriented — I’m ready to contribute to teams that shape the future of technology.
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className='h-full'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'><Code2 className='h-5 w-5' /> Tech Focus</CardTitle>
              <CardDescription>Things I reach for a lot</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-2'>
              {SKILLS.slice(0, 12).map(skill => (<Badge key={skill} className='backdrop-blur'>{skill}</Badge>))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id='skills' className='mx-auto max-w-6xl px-4 py-16'>
      <div className='flex items-center gap-3 mb-8'>
        <Separator className='hidden md:block w-8' />
        <h2 className='text-2xl font-semibold flex items-center gap-2'><Sparkles className='h-5 w-5' /> Skills</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
        {SKILLS.map(s => {
          return (
            <div key={s} className='rounded-md border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-3 text-center text-sm flex items-center justify-center gap-2'>
              <span>{s}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <div className={`h-full ${glow} rounded-2xl border border-white/10 bg-white/5`}>
      <CardHeader>
        <CardTitle className='text-lg flex items-center gap-2'>
          <Briefcase className='h-5 w-5' /> {p.title}
        </CardTitle>
        <CardDescription>{p.tags.join(' • ')}</CardDescription>
      </CardHeader>
      <CardContent className='text-sm text-gray-300'>
        <p>{p.description}</p>
        <div className='mt-4 flex gap-2'>
          <a href={p.links.code} target='_blank' rel='noreferrer'>
            <Button size='sm'><Github className='mr-2 h-4 w-4' />Code</Button>
          </a>
        </div>
      </CardContent>
    </div>
  )
}

function Projects() {
  return (
    <section id='projects' className='mx-auto max-w-6xl px-4 py-16'>
      <div className='flex items-center gap-3 mb-8'>
        <Separator className='hidden md:block w-8' />
        <h2 className='text-2xl font-semibold flex items-center gap-2'><Briefcase className='h-5 w-5' /> Featured Projects</h2>
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}

function TechPlayground() {
  const tile = (children:any, d:number) => (
    <motion.div
      className='rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-center gap-3'
      animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
      transition={{ duration: d, repeat: Infinity, ease: 'easeInOut' }}
    >{children}</motion.div>
  )
  return (
    <section className='mx-auto max-w-6xl px-4 py-8'>
      <div className='flex items-center gap-3 mb-6'>
        <Separator className='hidden md:block w-8' />
        <h2 className='text-2xl font-semibold flex items-center gap-2'><Cpu className='h-5 w-5' /> Tech Playground</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {tile(<><Cpu /><span>OOP</span></>, 3)}
        {tile(<><Laptop /><span>Algorithms Analysis</span></>, 3.4)}
        {tile(<><Monitor /><span>Software Methodology</span></>, 2.8)}
        {tile(<><HardDrive /><span>Computer Architecture</span></>, 3.2)}
      </div>
    </section>
  )
}

// Contact section: direct links + mailto

function Contact() {
  return (
    <section id='contact' className='mx-auto max-w-6xl px-4 py-16'>
      <div className='flex items-center gap-3 mb-8'>
        <Separator className='hidden md:block w-8' />
        <h2 className='text-2xl font-semibold flex items-center gap-2'><Mail className='h-5 w-5' /> Contact</h2>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <CardDescription>Reach me via email or socials.</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            <a href={`mailto:${PROFILE.email}`}>
              <Button><Mail className='h-4 w-4 mr-2'/>Email</Button>
            </a>
            <a href={PROFILE.social.github} target='_blank' rel='noreferrer'>
              <Button variant='secondary'><Github className='h-4 w-4 mr-2'/>GitHub</Button>
            </a>
            <a href={PROFILE.social.linkedin} target='_blank' rel='noreferrer'>
              <Button variant='secondary'><Linkedin className='h-4 w-4 mr-2'/>LinkedIn</Button>
            </a>
            <a href={PROFILE.social.medium} target='_blank' rel='noreferrer'>
              <Button variant='secondary'><BookOpen className='h-4 w-4 mr-2'/>Medium</Button>
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Availability</CardTitle>
            <CardDescription>“Open to software engineering roles across mobile, and AI.</CardDescription>
          </CardHeader>
          <CardContent className='text-sm text-gray-300'>Based in {PROFILE.location}. I usually respond within 24 hours.</CardContent>
        </Card>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className='py-10 text-center text-xs text-gray-400'>
      © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind & framer-motion.
    </footer>
  )
}

export default function App() {
  return (
    <div className='min-h-screen bg-[#0b0b12] text-[#e7e7ea]'>
      <Header />
      <main className='space-y-8'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechPlayground />
        <Contact />
      </main>
      <a href='#contact' className='fixed bottom-6 right-6 hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur hover:bg-white/10 transition'>
        <ChevronRight className='h-4 w-4' /> Hire Me
      </a>
      <Footer />
    </div>
  )
}
