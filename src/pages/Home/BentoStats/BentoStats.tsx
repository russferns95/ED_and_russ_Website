import "./BentoStats.css";

const BentoStats = () => {
  return (
    <section className="bento-stats" aria-label="Key statistics and highlights">
      <div className="bento-stats__grid">

        {/* ── CARD 1 ── Large dark card (left) */}
        <article className="bento-card bento-card--dark bento-card--main">
          <div className="bento-card__body">
            <h2 className="bento-card__heading">
              Next-Gen SEO to<br />
              Elevate Your<br />
              Rankings
            </h2>
            <p className="bento-card__description">
              AI-powered SEO (Search Engine Optimization) offers a
              bunch of benefits that can save time, boost rankings,
              and make your digital strategy way more efficient.
            </p>
            <button className="bento-btn bento-btn--outline" type="button">
              DISCOVER MORE
            </button>
          </div>

          {/* Image placeholder — add your 3D wave/ribbon image here */}
          <div className="bento-card__image-slot bento-card__image-slot--main" aria-hidden="true">
            {<img src="/assets/images/3d-geometric-abstract-background-removebg-preview 1.png" alt="" />}
            <div className="bento-image-placeholder">
              <span>3D Wave Image</span>
            </div>
          </div>

          {/* Arrow button bottom-right */}
          <button className="bento-arrow-btn" type="button" aria-label="Go to SEO section">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
        </article>

        {/* ── CARD 2 ── Light stat card (top-center) */}
        <article className="bento-card bento-card--light bento-card--stat-top">
          {/* Image placeholder — add your 3D crystal/gem image here */}
          <div className="bento-card__image-slot bento-card__image-slot--top-stat" aria-hidden="true">
            {<img src="/assets/images/3d-shapes-glowing-with-bright-holographic-colors-removebg-preview 1.png" alt="" />}
            <div className="bento-image-placeholder bento-image-placeholder--light">
              <span>3D Crystal Image</span>
            </div>
          </div>

          <div className="bento-card__stat-body">
            <span className="bento-card__stat-number">+150k</span>
            <p className="bento-card__stat-label">Satisfied Clients</p>
          </div>
        </article>

        {/* ── CARD 3 ── Dark stat card (bottom-center) */}
        <article className="bento-card bento-card--dark bento-card--stat-bottom">
          {/* Image placeholder — add your 3D sphere image here */}
          <div className="bento-card__image-slot bento-card__image-slot--bottom-stat" aria-hidden="true">
            {<img src="/assets/images/Group 1.png" alt="" />}
            <div className="bento-image-placeholder">
              <span>3D Sphere Image</span>
            </div>
          </div>

          <div className="bento-card__stat-body">
            <span className="bento-card__stat-number bento-card__stat-number--white">+70k</span>
            <p className="bento-card__stat-label bento-card__stat-label--white">Successful Projects</p>
          </div>

          {/* Arrow button */}
          <button className="bento-arrow-btn" type="button" aria-label="View projects">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
        </article>

        {/* ── CARD 4 ── Light text card (right) */}
        <article className="bento-card bento-card--light bento-card--promo">
          {/* Arrow button top-right */}
          <button className="bento-arrow-btn bento-arrow-btn--dark" type="button" aria-label="Learn about AI innovation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>

          <div className="bento-card__promo-body">
            <h2 className="bento-card__promo-heading">
              AI Innovation<br />
              Globally<br />
              Proven
            </h2>
            <p className="bento-card__description bento-card__description--dark">
              Used by 50k+ people around the world.
            </p>
            <button className="bento-btn bento-btn--outline bento-btn--dark-outline" type="button">
              DISCOVER MORE
            </button>
          </div>
        </article>

      </div>
    </section>
  );
};

export default BentoStats;
