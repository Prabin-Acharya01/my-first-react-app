import './HeroVisual.css'

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__label hero-visual__label--top">
        UI COMPOSITION
      </div>

      <div className="hv-desktop">
        <div className="hv-desktop__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="hv-desktop__body">
          <div className="hv-desktop__nav">
            <div className="hv-block hv-block--sm" />
            <div className="hv-block hv-block--sm" />
            <div className="hv-block hv-block--sm" />
          </div>
          <div className="hv-desktop__content">
            <div className="hv-block hv-block--wide" />
            <div className="hv-block hv-block--wide hv-block--short" />
            <div className="hv-grid">
              <div className="hv-block" />
              <div className="hv-block" />
            </div>
          </div>
        </div>
      </div>

      <div className="hv-mobile">
        <div className="hv-mobile__notch" />
        <div className="hv-block hv-block--wide" />
        <div className="hv-block hv-block--short" />
        <div className="hv-mobile__pill" />
      </div>

      <div className="hv-chip hv-chip--1">AA</div>
      <div className="hv-chip hv-chip--2" />
      <div className="hv-wireframe" />

      <div className="hero-visual__label hero-visual__label--bottom">
        DESIGN SYSTEM · v1
      </div>
    </div>
  )
}

export default HeroVisual
