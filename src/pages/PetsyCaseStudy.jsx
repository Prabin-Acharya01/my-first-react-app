import { Link } from 'react-router-dom'
import MaskReveal from '../components/MaskReveal.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './PetsyCaseStudy.css'

const OBJECTIVES = [
  'Create one platform for pet owners to connect, share, and shop easily.',
  'Build a trusted and engaging pet community.',
  'Offer reliable products and services for better pet care.',
  'Make pet interactions fun and social.',
  'Simplify pet care and shopping in one place.',
  'Help pet businesses connect with the right audience.',
]

const BUSINESS_CHALLENGES = [
  'Building trust and engagement within a new pet-focused community.',
  'Attracting both individual users and business sellers to the same platform.',
  'Managing affiliate commissions and product tracking efficiently.',
]

const PRODUCT_USERS = [
  'Age Group: 18–40 years old (young adults, working professionals, and families).',
  'Current or potential pet owners (dogs, cats, birds, rabbits, etc.).',
]

const USER_NEEDS = [
  'A single platform to connect with other pet owners and share pet moments.',
  'Easy access to trusted pet products and services.',
  'A safe, engaging space to interact, learn, and earn through pet-related activities.',
]

const UNIQUE_FEATURES = [
  'All-in-one platform to connect, share, and shop for pets.',
  'Trusted space for pet owners, lovers, and businesses.',
  'Earn through product tagging and pet-driven content.',
]

const COMPETITORS = [
  {
    name: 'Pet Swipe',
    badge: 'PS',
    description:
      'PetSwipe is a mobile app designed to help people find adoptable pets using a swipe-style interface.',
    features: [
      'Helps pet owners connect for playdates and matchmaking.',
      'Includes pet adoption and activity tracking features.',
    ],
  },
  {
    name: 'Pet Bar',
    badge: 'PB',
    description:
      "It's a social networking app where pet owners can create profiles for themselves and their pets, share photos/ideas, and connect with a global pet-lover community.",
    features: [
      'A social app to share pet moments and find pet-friendly services.',
      'Lets pet owners and businesses connect in one space.',
    ],
  },
]

const IA_GROUPS = [
  {
    title: 'Onboarding',
    flows: [
      ['Splash Screen', 'Walkthrough', 'Sign Up', 'Login'],
      ['User Profile', 'Business Profile'],
    ],
  },
  {
    title: 'Home',
    flows: [['Social Feed'], ['Explore'], ['Notifications']],
  },
  {
    title: 'Profile',
    flows: [
      ['My Profile', 'User + Pet Profile', 'Add New Pet / Edit Profile'],
      ['Post', 'Stories', 'Affiliate'],
      ['Settings'],
    ],
  },
  {
    title: 'Explore',
    flows: [
      ['Pet Match', 'View Profile', 'Swipe Left/Right', 'Push Notification'],
      ['Chat / Message', 'Message Inbox', 'Media Sharing'],
    ],
  },
  {
    title: 'Shop',
    flows: [
      ['Browse / Search / Filter Product', 'Filter by Category'],
      ['Product Details', 'Like Goods & Foods'],
      ['Add to Cart', 'Checkout', 'Payment Method', 'Order History'],
    ],
  },
  {
    title: 'Seller Tools',
    flows: [
      ['Business for Seller'],
      ['Add New Product', 'Manage Listing'],
      ['View Order', 'Tracking Order'],
    ],
  },
]

const USER_FLOW_STAGES = [
  {
    title: 'Entry',
    description:
      'The app checks for an existing session and routes the user to login or registration.',
    branches: [
      ['Open app', 'has account?', 'Login'],
      ['No account', 'Register'],
    ],
  },
  {
    title: 'Authentication',
    description:
      'New users verify their identity before a profile is created.',
    branches: [['Email verification'], ['Phone number verification']],
  },
  {
    title: 'Profile Setup',
    description:
      "Owners create their account and their pet's profile in one guided flow.",
    branches: [
      ['Owner info', 'username, password, photo'],
      ['Pet info', 'name, photos, type, breed, nature'],
      ['Option to create a business account directly'],
    ],
  },
  {
    title: 'Home',
    description: 'All onboarding paths converge on the home page.',
    branches: [],
  },
  {
    title: 'Navigation',
    description:
      'Three entry points branch from Home into the core product surfaces.',
    branches: [
      ['Top nav', 'Search, Notifications, Messages'],
      ['Feed', 'Explore, Follows', 'Post'],
      ['Button nav', 'Profile, Default feed', 'Posts, Create post'],
    ],
  },
  {
    title: 'Engagement Loops',
    description:
      'Notifications pull users back into social and matching interactions.',
    branches: [
      ['New follower / following'],
      ['Reaction to post', 'likes, comments, shares'],
      ['Meet match', 'view match', 'follow back'],
      ['Affiliate notification', 'sales dashboard'],
    ],
  },
]

// Each shot can be a plain label string (renders a placeholder tile) or
// { label, src } once a real exported image is dropped into /public and
// wired up here.
const MOODBOARD_SHOTS = [
  { label: 'MOOD 01', src: '/petsymoodboard0.png' },
  { label: 'MOOD 02', src: '/petsymoodboard1.png' },
  { label: 'MOOD 03', src: '/petsymoodboard2.png' },
]
const WIREFRAME_SHOTS = [
  { label: 'WIREFRAME 01', src: '/Wireframe1.png' },
  { label: 'WIREFRAME 02', src: '/Wireframe4.png' },
  { label: 'WIREFRAME 03', src: '/Wireframe5.png' },
  { label: 'WIREFRAME 04', src: '/Wireframe3.png' },
  { label: 'WIREFRAME 05', src: '/Wireframe2.png' },
]
const FINAL_SCREEN_HERO_SHOTS = [
  { label: 'SPLASH', src: '/mockup5.png' },
  { label: 'ONBOARDING · PET CARE', src: '/mockup2.png' },
  { label: 'ONBOARDING · SHARE MOMENTS', src: '/mockup3.png' },
  { label: 'ONBOARDING · MARKETPLACE', src: '/mockup4.png' },
  { label: 'SIGN IN', src: '/mockup1.png' },
]
const FINAL_SCREEN_SHOTS = [
  { label: 'DISCOVER FEED', src: '/mockup7.png' },
  { label: 'NEW POST', src: '/mockup8.png' },
  { label: 'PET PROFILE', src: '/mockup9.png' },
  { label: 'CAMERA CAPTURE', src: '/mockup10.png' },
  { label: 'VIDEO FEED', src: '/mockup11.png' },
  { label: 'SELLER DASHBOARD', src: '/mockup12.png' },
  { label: 'SHOP · BEST SELLERS', src: '/mockup13.png' },
  { label: 'PRODUCT DETAIL', src: '/mockup14.png' },
  { label: 'SHOP CATEGORIES', src: '/mockup15.png' },
  { label: 'VETS NEAR ME', src: '/mockup16.png' },
  { label: 'VET CLINIC DETAIL', src: '/mockup17.png' },
]

function Block({ title, children, wide = false }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal case-block__grid">
      <MaskReveal as="h2" className="case-block__title">
        {title}
      </MaskReveal>
      <div
        className={`case-block__content${wide ? ' case-block__content--wide' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}

function ShotGrid({ shots, aspect = 'default' }) {
  return (
    <div className={`case-shot-grid case-shot-grid--${aspect}`}>
      {shots.map((shot) => {
        const { label, src } =
          typeof shot === 'string' ? { label: shot, src: null } : shot

        return (
          <div key={label} className="case-shot">
            {src ? (
              <img src={src} alt={label} loading="lazy" />
            ) : (
              <span>{label}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

function FlowArrow() {
  return (
    <svg className="flow-arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 12h15M13 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FlowChain({ steps }) {
  const parts = []
  steps.forEach((step, index) => {
    parts.push(
      <span className="flow-node" key={`node-${index}`}>
        {step}
      </span>
    )
    if (index < steps.length - 1) {
      parts.push(<FlowArrow key={`arrow-${index}`} />)
    }
  })
  return <div className="flow-chain">{parts}</div>
}

function PetsyCaseStudy() {
  const heroRef = useReveal()

  return (
    <section className="petsy-case">
      <div className="container">
        <div ref={heroRef} className="reveal petsy-case__hero">
          <p className="eyebrow">UI/UX DESIGN &middot; SOCIAL &middot; MOBILE APP</p>
          <MaskReveal as="h1" className="petsy-case__title" delay={80}>
            PETSY
          </MaskReveal>
          <p className="petsy-case__tagline">
            A pet social and marketplace app where pet owners connect, share,
            and shop trusted products — all in one place.
          </p>

          <div className="petsy-case__meta">
            <div>
              <span className="case-block__label">ROLE</span>
              <p>UI/UX Designer</p>
            </div>
            <div>
              <span className="case-block__label">YEAR</span>
              <p>2025</p>
            </div>
            <div>
              <span className="case-block__label">PLATFORM</span>
              <p>Mobile App</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="petsy-case__note">
          <h2 className="petsy-case__note-title">
            Please <span className="accent">Note</span>
          </h2>
          <p>
            This case study explores Petsy, a pet social and marketplace app
            where pet owners can connect, share moments, access pet
            services, and shop trusted products — all in one place.
          </p>
        </div>

        <Block title="PROBLEM STATEMENT">
          <p>
            Pet owners lack a single trusted space to connect, share moments,
            and find reliable pet products and services — everything feels
            scattered across different apps.
          </p>
        </Block>

        <Block title="OBJECTIVES & GOALS">
          <ul className="case-list case-list--columns">
            {OBJECTIVES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="BUSINESS CHALLENGES">
          <ul className="case-list case-list--arrow case-list--warn">
            {BUSINESS_CHALLENGES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="PRODUCT USERS">
          <ul className="case-list">
            {PRODUCT_USERS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="USER NEEDS">
          <ul className="case-list case-list--arrow">
            {USER_NEEDS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="COMPETITOR ANALYSIS">
          <div className="case-competitors">
            {COMPETITORS.map((competitor) => (
              <div key={competitor.name} className="case-competitor">
                <div className="case-competitor__head">
                  <div>
                    <h3 className="case-competitor__name">
                      {competitor.name}
                    </h3>
                    <p>{competitor.description}</p>
                  </div>
                  <div
                    className="case-competitor__badge"
                    aria-hidden="true"
                  >
                    {competitor.badge}
                  </div>
                </div>

                <span className="case-block__label">FEATURES</span>
                <ul className="case-list case-list--arrow">
                  {competitor.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        <Block title="UNIQUE FEATURES">
          <ul className="case-list case-list--arrow">
            {UNIQUE_FEATURES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="INFORMATION ARCHITECTURE" wide>
          <div className="case-ia-grid">
            {IA_GROUPS.map((group) => (
              <div key={group.title} className="case-ia-card">
                <h3 className="case-ia-card__title">{group.title}</h3>
                <div className="case-ia-card__flows">
                  {group.flows.map((flow, index) => (
                    <FlowChain steps={flow} key={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="USER FLOW DIAGRAMS" wide>
          <div className="case-flow">
            {USER_FLOW_STAGES.map((stage, index) => (
              <div key={stage.title} className="case-flow__stage">
                <div className="case-flow__marker" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="case-flow__body">
                  <h3 className="case-flow__title">{stage.title}</h3>
                  <p>{stage.description}</p>
                  {stage.branches.length > 0 && (
                    <div className="case-flow__branches">
                      {stage.branches.map((branch, branchIndex) => (
                        <div className="case-flow__branch" key={branchIndex}>
                          <span
                            className="case-flow__branch-glyph"
                            aria-hidden="true"
                          />
                          <FlowChain steps={branch} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Block>
      </div>

      <div className="petsy-case__design-phase">
        <div className="container">
          <MaskReveal as="h2" className="petsy-case__phase-title">
            DESIGN PHASE
          </MaskReveal>

          <Block title="MOODBOARD">
            <ShotGrid shots={MOODBOARD_SHOTS} aspect="wide" />
          </Block>

          <Block title="WIREFRAMES">
            <ShotGrid shots={WIREFRAME_SHOTS} aspect="wireframe" />
          </Block>

          <Block title="FINAL SCREENS">
            <span className="case-block__label case-shot-group__label">
              Onboarding &amp; Sign In
            </span>
            <ShotGrid shots={FINAL_SCREEN_HERO_SHOTS} aspect="device" />

            <span className="case-block__label case-shot-group__label case-shot-group__label--spaced">
              Core Screens
            </span>
            <ShotGrid shots={FINAL_SCREEN_SHOTS} aspect="device" />
          </Block>
        </div>
      </div>

      <div className="container">
        <Link to="/#work" className="case-study__back">
          ← BACK TO WORK
        </Link>
      </div>
    </section>
  )
}

export default PetsyCaseStudy
