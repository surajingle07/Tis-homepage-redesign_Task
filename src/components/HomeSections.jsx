import { ArrowRight, ArrowUpRight, GraduationCap, House, MapPin, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal.jsx'


const learningPaths = [
  {
    number: '01',
    title: 'Academic excellence',
    description: 'A CBSE curriculum built to encourage deep thinking, confident questions, and a lifelong love of learning.',
    image: '/Student.jpg',
    alt: 'Students working together in a classroom',
    icon: GraduationCap,
  },
  {
    number: '02',
    title: 'A place to belong',
    description: 'A nurturing boarding and day school community where students grow in confidence, care, and independence.',
    image: '/joy.jpg',
    alt: 'Students sharing a joyful moment at school',
    icon: House,
  },
  {
    number: '03',
    title: 'Beyond the classroom',
    description: 'Space to discover new interests, build leadership, and learn through culture, creativity, and play.',
    image: '/Outdoor.jpg',
    alt: 'Students taking part in an outdoor activity',
    icon: Sparkles,
  },
]

export function HomeSections() {
  return (
    <>
      <section className="story-section" id="about" aria-labelledby="story-title">
        <div className="section-kicker"><span>01</span><span>Our school, our story</span></div>
        <div className="story-layout">
          <Reveal className="story-heading">
            <p className="eyebrow">A foundation for what comes next</p>
            <h2 id="story-title">Seamless opportunities.<br /><em>Limitless potential.</em></h2>
          </Reveal>
          <Reveal className="story-copy" delay={100}>
            <p className="story-lead">Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.</p>
            <p>We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.</p>
            <a className="text-link" href="#learning">Get to know TIS <ArrowRight size={17} aria-hidden="true" /></a>
          </Reveal>
        </div>
        <div className="story-stats" aria-label="School facts">
          <div><strong>2012</strong><span>Year established</span></div>
          <div><strong>CBSE</strong><span>Curriculum</span></div>
          <div><strong>Day + boarding</strong><span>School community</span></div>
        </div>
      </section>

      <section className="learning-section" id="learning" aria-labelledby="learning-title">
        <div className="section-heading">
          <Reveal>
            <p className="eyebrow">A whole world of learning</p>
            <h2 id="learning-title">Find your way to <em>flourish.</em></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-intro">Explore our programs, campus life, achievements, and the many ways TIS helps every student move forward.</p>
          </Reveal>
        </div>
        <div className="path-grid" id="beyond">
          {learningPaths.map(({ number, title, description, image, alt, icon: Icon }, index) => (
            <Reveal className="path-card" key={number} delay={index * 90}>
              <div className="path-card__image-wrap">
                <img src={image} alt={alt} loading="lazy" />
                <span className="path-card__number">{number}</span>
              </div>
              <div className="path-card__body">
                <div className="path-card__title"><Icon size={19} strokeWidth={1.7} aria-hidden="true" /><h3>{title}</h3></div>
                <p>{description}</p>
                <span className="path-card__arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="campus-section" id="campus" aria-labelledby="campus-title">
        <div className="campus-photo" role="img" aria-label="A welcoming school campus surrounded by greenery" />
        <div className="campus-copy">
          <Reveal>
            <p className="eyebrow eyebrow--light">Room to grow</p>
            <h2 id="campus-title">A nurturing place to <em>become.</em></h2>
            <p>Join a community that encourages leadership, innovation, and lifelong learning. At TIS, each day brings new ways to discover what you can do.</p>
            <a className="button button--outline" href="https://tis.edu.in/">Explore campus life <ArrowUpRight size={17} aria-hidden="true" /></a>
          </Reveal>
          <div className="campus-location"><MapPin size={16} aria-hidden="true" /><span>Dhoolkot · Selaqui · Dehradun</span></div>
        </div>
      </section>

      <section className="admissions-section" id="admissions" aria-labelledby="admissions-title">
        <Reveal className="admissions-copy">
          <p className="eyebrow">Your next chapter starts here</p>
          <h2 id="admissions-title">Let’s do it <em>with Tulas.</em></h2>
          <p>Take the first step toward a school experience shaped around curiosity, character, and possibility.</p>
        </Reveal>
        <Reveal className="admissions-action" delay={120}>
          <a className="button button--dark" href="https://admission.tis.edu.in">Begin your application <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="text-link" href="tel:+919837983791">Speak with admissions <ArrowRight size={17} aria-hidden="true" /></a>
        </Reveal>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark wordmark--footer" href="#home" aria-label="Tulas International School home">
              <span className="wordmark__seal" aria-hidden="true">T</span>
              <span className="wordmark__text"><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span>
            </a>
            <p>Let’s do it with Tulas.</p>
          </div>
          <div className="footer-contact">
            <h2>Come say hello.</h2>
            <a href="tel:+919837983791">+91 98379 83791</a>
            <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
            <a href="https://maps.app.goo.gl/maBF8syXueQkw31E6" target="_blank" rel="noreferrer">Dhoolkot, P.O. Selaqui, Chakrata Road,<br />Dehradun-248011, Uttarakhand</a>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <a href="#about">About TIS</a>
            <a href="#learning">Academics</a>
            <a href="#campus">Campus life</a>
            <a href="https://admission.tis.edu.in">Admissions <ArrowUpRight size={13} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Tulas International School</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </>
  )
}
