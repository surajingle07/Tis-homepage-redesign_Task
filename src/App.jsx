import { HomeSections } from './components/HomeSections.jsx'
import { ScrollProgress } from './components/ScrollProgress.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import './App.css'

function App() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">Tulas International School · Dehradun</p>
            <h1 id="hero-title">Welcome to a world of <em>possibility.</em></h1>
            <p className="hero__description">
              TIS is one of India’s top boarding and day schools in Dehradun, India.
              Our CBSE curriculum focuses on academic excellence, holistic development,
              and preparing students to be global leaders.
            </p>
            <div className="hero__actions">
              <a className="button button--light" href="https://admission.tis.edu.in">
                Apply to TIS <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link text-link--light" href="#about">
                Discover our school <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero__note">
              <span className="hero__note-dot" /> Boarding & day school excellence
            </div>
          </div>
          <div className="hero__visual" role="img" aria-label="Students learning together in a bright classroom">
            <div className="hero__image" />
            <div className="hero__image-caption">
              <span>Curiosity takes you further</span>
              <span className="caption-line" />
            </div>
            <div className="hero__stamp" aria-hidden="true">
              <span>LEARN</span>
              <span className="hero__stamp-star">✳</span>
              <span>LEAD</span>
            </div>
          </div>
          <a className="hero__scroll" href="#about" aria-label="Scroll to learn more">
            <span>Scroll to explore</span><span className="hero__scroll-line" />
          </a>
        </section>
        <HomeSections />
      </main>
    </>
  )
}

export default App