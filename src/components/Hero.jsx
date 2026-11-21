import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="about" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Applications open</p>
          <h1 className="hero__heading" id="hero-heading">
            <span>Build skills.</span>
            <span className="hero__heading-accent">Find your path.</span>
          </h1>
          <p className="hero__description">
            Practical learning programs for ambitious people ready to take the next step in their careers.
          </p>
          <div className="hero__actions">
            <a className="button" href="#registration">Join the next cohort</a>
            <a className="text-link hero__secondary" href="#programs">
              Explore programs <span className="text-link__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="hero__art">
          <img
            src="/assets/hero_learning.svg"
            alt="Illustration of a learning dashboard showing a mentor-led session, flexible scheduling and community support"
            width="680"
            height="550"
          />
        </div>
      </div>
    </section>
  );
}
