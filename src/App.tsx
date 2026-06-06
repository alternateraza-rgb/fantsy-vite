import { useState } from 'react';

type TabId = 'login' | 'signup' | 'pricing';

type PricingPlan = {
  name: string;
  price: string;
  edits: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const tabs: { id: TabId; label: string }[] = [
  { id: 'login', label: 'Login' },
  { id: 'signup', label: 'Sign up' },
  { id: 'pricing', label: 'Pricing' },
];

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    edits: '5 free edits',
    description: 'Explore Fantsy with polished AI image edits on us.',
    features: ['Magic retouch tools', 'Prompt-based edits', 'Community support'],
    cta: 'Start free',
  },
  {
    name: 'Creator',
    price: '$20',
    edits: '100 edits',
    description: 'For creators turning ideas into campaign-ready visuals.',
    features: ['Priority render queue', 'Style presets', 'Commercial exports'],
    cta: 'Choose Creator',
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '$50',
    edits: '200 edits',
    description: 'Scale a content pipeline with deeper editing capacity.',
    features: ['Batch image editing', 'Brand style memory', 'Team workspaces'],
    cta: 'Choose Studio',
  },
  {
    name: 'Enterprise',
    price: '$300',
    edits: '1500 edits',
    description: 'High-volume AI editing for teams and production studios.',
    features: ['Dedicated support', 'Advanced permissions', 'Launch reviews'],
    cta: 'Talk to sales',
  },
];

const featureCards = [
  {
    kicker: 'Describe it',
    title: 'Prompt-to-perfect edits',
    copy: 'Change backgrounds, lighting, wardrobe, mood, and composition with conversational precision.',
  },
  {
    kicker: 'Refine it',
    title: 'Pixel-aware control',
    copy: 'Brush in localized changes while Fantsy preserves identity, texture, shadows, and detail.',
  },
  {
    kicker: 'Ship it',
    title: 'Studio-grade exports',
    copy: 'Create hero shots, ads, product images, avatars, and social content in minutes.',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('pricing');

  return (
    <main className="app-shell">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="grain" />

      <header className="nav">
        <a className="brand" href="#hero" aria-label="Fantsy home">
          <span className="brand-mark">F</span>
          <span>Fantsy</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#access">Access</a>
        </nav>
        <a className="nav-cta" href="#access">
          Open studio
        </a>
      </header>

      <section className="hero" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">State-of-the-art AI image editor</p>
          <h1>Turn every image into a finished masterpiece.</h1>
          <p className="hero-text">
            Fantsy combines generative editing, pro-grade retouching, and cinematic style controls so
            anyone can create impossible visuals without opening a complex design suite.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#access">
              Start creating
            </a>
            <a className="secondary-button" href="#pricing">
              View pricing
            </a>
          </div>
          <div className="hero-stats" aria-label="Fantsy highlights">
            <span>
              <strong>4K</strong>
              Smart exports
            </span>
            <span>
              <strong>12x</strong>
              Faster edits
            </span>
            <span>
              <strong>AI</strong>
              Retouch engine
            </span>
          </div>
        </div>

        <div className="editor-stage" aria-label="Animated AI editor preview">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="editor-card">
            <div className="editor-toolbar">
              <span />
              <span />
              <span />
              <p>Fantsy Studio</p>
            </div>
            <div className="canvas-wrap">
              <div className="image-before" />
              <div className="image-after" />
              <div className="scan-line" />
              <div className="magic-cursor">AI</div>
            </div>
            <div className="prompt-panel">
              <span>Prompt</span>
              <p>Make this portrait glow with neon rain, cinematic depth, and flawless skin detail.</p>
            </div>
          </div>
          <div className="floating-chip chip-one">Background replaced</div>
          <div className="floating-chip chip-two">Lighting enhanced</div>
          <div className="floating-chip chip-three">Skin retouched</div>
        </div>
      </section>

      <section className="features" id="features">
        <p className="section-kicker">Why creators choose Fantsy</p>
        <h2>All the magic of a creative studio, guided by AI.</h2>
        <div className="feature-grid">
          {featureCards.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span>{feature.kicker}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="access-panel" id="access">
        <div className="access-copy">
          <p className="section-kicker">Logged-out experience</p>
          <h2>Welcome users with a beautiful path into Fantsy.</h2>
          <p>
            Visitors who are not logged in can explore pricing, sign up for free edits, or return to
            their account through this polished access panel.
          </p>
        </div>

        <div className="tab-card">
          <div className="tab-list" role="tablist" aria-label="Account and pricing">
            {tabs.map((tab) => (
              <button
                aria-selected={activeTab === tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'login' && <LoginForm />}
          {activeTab === 'signup' && <SignupForm />}
          {activeTab === 'pricing' && <Pricing />}
        </div>
      </section>
    </main>
  );
}

function LoginForm() {
  return (
    <form className="auth-form" aria-label="Login form">
      <div>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" name="email" placeholder="you@studio.com" type="email" />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input id="login-password" name="password" placeholder="Enter your password" type="password" />
      </div>
      <button className="primary-button full" type="submit">
        Login to Fantsy
      </button>
      <p className="form-note">Forgot your password? We will add account recovery when auth is wired.</p>
    </form>
  );
}

function SignupForm() {
  return (
    <form className="auth-form" aria-label="Sign up form">
      <div>
        <label htmlFor="signup-name">Name</label>
        <input id="signup-name" name="name" placeholder="Your creative name" type="text" />
      </div>
      <div>
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" name="email" placeholder="you@studio.com" type="email" />
      </div>
      <div>
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          name="password"
          placeholder="Create a secure password"
          type="password"
        />
      </div>
      <button className="primary-button full" type="submit">
        Create free account
      </button>
      <p className="form-note">Includes 5 free edits on the $0 Starter plan.</p>
    </form>
  );
}

function Pricing() {
  return (
    <div className="pricing" id="pricing">
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article className={plan.highlighted ? 'price-card highlighted' : 'price-card'} key={plan.name}>
            {plan.highlighted && <span className="badge">Most popular</span>}
            <h3>{plan.name}</h3>
            <p className="price">
              {plan.price}
              <span>/month</span>
            </p>
            <p className="edits">{plan.edits}</p>
            <p className="plan-description">{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="secondary-button full" type="button">
              {plan.cta}
            </button>
          </article>
        ))}
        <article className="price-card custom-plan">
          <span className="badge soft">Custom</span>
          <h3>Custom plan</h3>
          <p className="price">Let us build it</p>
          <p className="edits">Flexible edit volume</p>
          <p className="plan-description">
            Need special limits, integrations, procurement, or dedicated creative workflows?
          </p>
          <a className="primary-button full" href="mailto:hello@fantsy.ai?subject=Custom%20Fantsy%20plan">
            Contact us
          </a>
        </article>
      </div>
    </div>
  );
}

export default App;
