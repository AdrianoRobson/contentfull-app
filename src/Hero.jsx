import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby taiyaki lumbersexual bitters, readymade mumblecore
            post-ironic gentrify banh mi tousled gorpcore edison bulb migas.
            Leggings cornhole taxidermy, biodiesel keytar VHS art party af small
            batch helvetica praxis.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
