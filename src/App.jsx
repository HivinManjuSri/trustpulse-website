import { useState, useEffect } from 'react'
import hivinImage from '../member_face/Hivin Mnaju Sri.png'
import senarthImage from '../member_face/Senarth  Rajapakse.jpeg'
import pahansaraImage from '../member_face/Pahansara Sithmini.png'
import pavaniImage from '../member_face/Pawani roziro.png'
import harindraImage from '../member_face/harindra.jpg'
import thiiniImage from '../member_face/dinithip.jpeg'
const CONTACT_EMAIL = 'hivinmanjusri@gmail.com'

/* SITE CONTENT - Replace this object for other groups */
const SITE = {
  projectTitle: 'MEDIconsult',
  projectSubtitle: 'Doctor Verification for Online Consultations',
  projectTagline: 'A Zero Trust telehealth platform that continuously verifies clinicians so patients can trust who is on the other side of the consultation.',
  groupNo: '25-26J-046',
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  department: 'Department of Computer Systems Engineering',
  

  abstract: `Remote healthcare consultations require strong assurance that the doctor who logs in is the same authorized clinician who remains active throughout the session. Traditional login methods such as passwords, OTPs, and two-factor authentication verify identity only at the start, but they do not continuously validate the doctor during the live consultation. This research addresses that limitation by applying a Zero Trust approach with continuous biometric and behavioral authentication for telehealth environments.`,

  researchProblem: `Remote healthcare consultations require strong assurance that the doctor who logs in is the same authorized clinician who remains active throughout the session. Traditional login methods such as passwords, OTPs, and two-factor authentication verify identity only at the start, but they do not continuously validate the doctor during the live consultation. This research addresses that limitation by applying a Zero Trust approach with continuous biometric and behavioral authentication for telehealth environments.`,

  researchGap: `Current telemedicine systems mainly depend on one-time authentication methods, which are insufficient when identity assurance must be maintained throughout a live consultation. Existing research often treats face recognition, voice verification, keystroke dynamics, mouse behavior, and Zero Trust security as separate areas. There is limited practical integration of these modalities into a real-time telehealth platform that continuously evaluates doctor identity using a dynamic trust score.`,

  objectives: [
    {
      title: 'Face Verification',
      desc: 'Implement a face recognition module for continuous doctor verification during remote consultations using deep learning-based facial embeddings.',
    },
    {
      title: 'Voiceprint Analysis',
      desc: 'Develop a voice biometric module that extracts speaker embeddings and verifies the doctor\'s identity during live interaction.',
    },
    {
      title: 'Keystroke Dynamics',
      desc: 'Analyze typing behavior such as dwell time, flight time, and rhythm to provide lightweight, non-intrusive continuous authentication.',
    },
    {
      title: 'Mouse Movement Analysis',
      desc: 'Evaluate mouse movement behavior and workflow consistency to support real-time verification of the active doctor.',
    },
    {
      title: 'Zero Trust Integration',
      desc: 'Combine multiple biometric and behavioral signals into a continuous trust-based authentication system for secure telehealth sessions.',
    },
  ],


  methodology: `The system follows a multi-modal Zero Trust authentication workflow. Doctors first register and enroll biometric and behavioral samples across four modalities: face, voice, keystroke, and mouse movement patterns. During a consultation, the web application captures live interaction signals and sends them to separate Python-based ML services for verification. The backend combines verification responses into a trust score, enabling real-time monitoring, alerts, and session-level identity assurance.`,

  architecture: `The platform uses a React frontend for doctor registration, consultation flow, and live biometric capture. A Node.js/Express backend handles authentication, sessions, database operations, and communication with Python FastAPI ML services. Real-time verification updates are handled through Socket.IO, while MongoDB stores doctor, session, and verification data.`,

  technologies: [
    {
      group: 'Frontend',
      items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Axios', 'Socket.IO Client', 'Recharts', 'Lucide React'],
    },
    {
      group: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT Authentication', 'Socket.IO', 'Axios', 'Multer', 'Helmet', 'Express Rate Limit'],
    },
    {
      group: 'Machine Learning / AI',
      items: ['Python', 'FastAPI', 'Uvicorn', 'PyTorch', 'Torchvision', 'Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'Pillow'],
    },
    {
      group: 'Biometric Models',
      items: ['Face Verification: ResNet50 with Triplet Loss', 'Voiceprint Analysis: ECAPA-TDNN / SpeechBrain-based speaker recognition', 'Keystroke Dynamics: Deep Neural Network', 'Mouse Movement Analysis: Siamese Network'],
    },
    {
      group: 'Security / System Features',
      items: ['Zero Trust Architecture', 'Continuous Authentication', 'Multi-modal Biometric Verification', 'Dynamic Trust Score', 'Real-time Alerts', 'JWT-based Session Security', 'Audit / Verification Logs'],
    },
  ],

  components: [
    {
      id: 'face-recognition',
      number: '01',
      title: 'Face Recognition',
      owner: 'Hivin Manju Sri',
      color: '#0066cc',
      icon: 'F',
      tagline: 'Webcam-Based Doctor Verification',
      description: 'Continuously verifies the doctor\'s identity through webcam-based face verification during live telehealth consultations.',
      highlights: [
        'Technical summary: Uses a Siamese-style ResNet50 Triplet Loss model to generate 128-dimensional L2-normalized facial embeddings.',
        'Compares live webcam embeddings with enrolled doctor templates using similarity-based verification.',
        'Supports repeated identity checks during the consultation instead of relying only on login authentication.',
        'Provides open-set face verification for real-time or near-real-time continuous authentication.',
      ],
      metrics: [
        { label: 'Dataset', value: '131,405' },
        { label: 'Triplets', value: '108,000' },
        { label: 'ROC-AUC', value: '0.915718' },
        { label: 'EER', value: '16.29%' },
        { label: 'Accuracy', value: '84.36%' },
        { label: 'Latency', value: '110.651 ms' },
        { label: 'Throughput', value: '18.10 img/s' },
      ],
      tech: ['Webcam Capture', 'ResNet50', 'Triplet Loss', '128D Embeddings', 'Open-Set Verification', 'Template Matching'],
    },
    {
      id: 'voice-recognition',
      number: '02',
      title: 'Voice Recognition',
      owner: 'Senarth Rajapakse',
      color: '#1a7f4f',
      icon: 'V',
      tagline: 'Voiceprint-Based Speaker Verification',
      description: 'Verifies the active doctor through voiceprint analysis during consultation speech.',
      highlights: [
        'Technical summary: Captures microphone audio in short windows and extracts speaker embeddings using an ECAPA-TDNN-based speaker verification pipeline.',
        'Uses Voice Activity Detection, noise reduction, and cosine similarity scoring for continuous speaker verification.',
        'Includes replay, synthetic speech, and voice-cloning anti-spoofing checks.',
        'Stores encrypted embeddings instead of raw audio to support privacy-conscious verification.',
      ],
      metrics: [
        { label: 'Embedding', value: '192D' },
        { label: 'Window', value: '2.5 sec' },
        { label: 'Overlap', value: '50%' },
        { label: 'Enrollment', value: 'min 3' },
        { label: 'Latency', value: '<800 ms' },
        { label: 'EER Target', value: '<3%' },
      ],
      tech: ['Microphone Capture', 'ECAPA-TDNN', 'Speaker Embeddings', 'VAD', 'Noise Reduction', 'Cosine Similarity', 'Anti-Spoofing'],
    },
    {
      id: 'keystroke-dynamics',
      number: '03',
      title: 'Keystroke Dynamics',
      owner: 'pahansara Dias',
      color: '#b45309',
      icon: 'K',
      tagline: 'Typing Rhythm Authentication',
      description: 'Analyzes the doctor\'s typing rhythm as a lightweight behavioral biometric for continuous identity verification.',
      highlights: [
        'Technical summary: Captures timing-based typing features such as dwell time, flight time, and rhythm patterns.',
        'A deep neural network converts 31 timing features into 128-dimensional L2-normalized behavioral embeddings.',
        'Uses similarity scoring and sliding-window analysis for continuous authentication.',
        'Supports adaptive template updating and anomaly detection with Isolation Forest / One-Class SVM.',
      ],
      metrics: [
        { label: 'Input Features', value: '31' },
        { label: 'Embedding', value: '128D' },
        { label: 'Architecture', value: '31-256-512-256-128' },
        { label: 'Parameters', value: '~450K' },
        { label: 'EER', value: '~4.2%' },
        { label: 'Latency', value: '~245 ms' },
        { label: 'Throughput', value: '~75 req/s' },
        { label: 'Model Size', value: '~2 MB' },
      ],
      tech: ['Behavioral Biometrics', 'Dwell Time', 'Flight Time', 'Deep Neural Network', 'Triplet Loss', 'Contrastive Loss', 'Sliding Windows'],
    },
    {
      id: 'mouse-movement',
      number: '04',
      title: 'Mouse Movement Analysis',
      owner: 'Pavani Rozairo',
      color: '#7c3aed',
      icon: 'M',
      tagline: 'Mouse Behavior Verification',
      description: 'Monitors mouse movement behavior to support continuous verification of the active doctor during telehealth workflow interaction.',
      highlights: [
        'Technical summary: Analyzes behavioral patterns from mouse movement data, including interaction consistency and genuine versus impostor behavior.',
        'Contributes a supporting behavioral signal to the multimodal Zero Trust score.',
        'Uses checkpoint-based model loading and scaler persistence for stable inference.',
        'Includes NaN/Inf handling, gradient clipping, terminal test reporting, and metric output for prototype evaluation.',
      ],
      metrics: [
        { label: 'Dataset', value: 'Balabit' },
        { label: 'Total Samples', value: '9,412' },
        { label: 'Genuine', value: '7,632' },
        { label: 'Impostor', value: '1,780' },
        { label: 'Accuracy', value: '81.09%' },
        { label: 'Precision', value: '81.09%' },
        { label: 'Recall', value: '100.00%' },
        { label: 'F1 Score', value: '89.56%' },
        { label: 'AUC', value: '63.16%' },
        { label: 'EER', value: '37.15%' },
      ],
      tech: ['Mouse Dynamics', 'Behavioral Features', 'Genuine vs Impostor', 'Checkpoint Loading', 'Scaler Persistence', 'Training Stability'],
    },
  ],

  milestones: [
    { id: 1, title: 'Project Proposal', date: 'Aug 2025', status: 'done', desc: 'Initial research proposal submitted. Research gap identified, scope defined, and methodology outlined.' },
    { id: 2, title: 'Progress Presentation I', date: 'Nov 2025', status: 'done', desc: 'System architecture finalised. Individual component designs presented.' },
    { id: 3, title: 'Progress Presentation II', date: 'Mar 2026', status: 'done', desc: 'Core components implemented. Evaluation data implemented. 90% of the project is finished.' },
    { id: 4, title: 'Final Assessment', date: 'May 2026', status: 'upcoming', desc: 'Final platform integration, evaluation, and project demonstration.' },
    { id: 5, title: 'Research Paper Submission', date: 'May 2026', status: 'upcoming', desc: 'Research paper preparation and submission planned.' },
    { id: 6, title: 'Viva', date: 'Jul 2026', status: 'upcoming', desc: 'Defence of research contributions and live demonstration of the MEDIconsult platform.' },
  ],

  documents: [
    {
      title: 'Project Proposal',
      type: 'PDF',
      status: 'available',
      members: [
        { name: 'Hivin Manju Sri', id: 'IT22576552', url: 'https://drive.google.com/file/d/15UxhWnsedzuRQDQ04o84RLXOTpJ33Pzt/view?usp=sharing' },
        { name: 'Senarth Rajapakse', id: 'IT22602664', url: 'https://drive.google.com/file/d/1DZAHf5tx52fpefNtxsl3O7VC5_P0NHnB/view?usp=sharing' },
        { name: 'pahansara Dias', id: 'IT22133090', url: 'https://drive.google.com/file/d/1dikkMutIIWksD_Qe884qBnGkaMaJN-0h/view?usp=sharing' },
        { name: 'Pavani Rozairo', id: 'IT22194008', url: 'https://drive.google.com/file/d/12Q1jhlo955eFB-ckU2HRUb4j_3MGOOTG/view?usp=sharing' },
      ],
    },
    { title: 'Research Paper', type: 'PDF', status: 'pending', url: '#' },
    { title: 'Final Report', type: 'PDF', status: 'pending', url: '#' },
  ],

  presentations: [
    { title: 'Proposal Presentation', date: 'Aug 2024', status: 'available', url: 'https://docs.google.com/presentation/d/1a03uzNqkGAerf57tM_2Y8pQx5dCwsgU_/edit?usp=sharing&ouid=113698697415352410216&rtpof=true&sd=true' },
    { title: 'Progress Presentation I', date: 'Nov 2024', status: 'available', url: 'https://docs.google.com/presentation/d/1o47gejtrDAXjdi5LWFkQVl-blIYodMgi/edit?usp=sharing&ouid=113698697415352410216&rtpof=true&sd=true' },
    { title: 'Progress Presentation II', date: 'Mar 2025', status: 'available', url: 'https://docs.google.com/presentation/d/1fRkMGmiOk01h2zWDiD9jvA4cnBKkmKHi/edit?usp=sharing&ouid=113698697415352410216&rtpof=true&sd=true' },
    { title: 'Final Presentation', date: 'Jun 2025', status: 'pending', url: '#' },
  ],

  team: [
    {
      name: 'Hivin Manju Sri',
      id: 'IT22576552',
      role: 'Group Team Leader',
      email: 'hivinmanjusri@gmail.com',
      initials: 'HM',
      image: hivinImage,
      color: '#0066cc',
      type: 'member',
    },
    {
      name: 'Senarth Rajapakse',
      id: 'IT22602664',
      role: 'Team Member',
      email: 'senathrajapaksemail@gmail.com',
      initials: 'SR',
      image: senarthImage,
      color: '#1a7f4f',
      type: 'member',
    },
    {
      name: 'Pahansara Dias',
      id: 'IT22133090',
      role: 'Team Member',
      email: 'pahansara.s@gmail.com',
      initials: 'PD',
      image: pahansaraImage,
      color: '#7c3aed',
      type: 'member',
    },
    {
      name: 'Pavani Rozairo',
      id: 'IT22194008',
      role: 'Team Member',
      email: 'rozairopawani001@gmail.com',
      initials: 'PR',
      image: pavaniImage,
      color: '#b45309',
      type: 'member',
    },
    {
      name: 'Dr. Harinda Fernando',
      id: '',
      role: 'Research Supervisor',
      email: 'harinda.f@sliit.lk',
      initials: 'HF',
      image: harindraImage,
      color: '#515154',
      type: 'supervisor',
    },
    {
      name: 'Ms. Dinithi Pandithage',
      id: '',
      role: 'Research Co-Supervisor',
      email: 'dinithi.p@sliit.lk',
      initials: 'DP',
      image: thiiniImage,
      color: '#515154',
      type: 'supervisor',
    },
  ],
}
/* END SITE CONTENT */

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'domain', label: 'Domain' },
  { id: 'components', label: 'Components' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'documents', label: 'Documents' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'team', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ active, scrollTo }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: '56px',
      background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '0.5px solid rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '0 24px',
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={() => scrollTo('home')} style={{
          fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
          color: 'var(--black)', background: 'none', border: 'none', cursor: 'pointer',
          letterSpacing: '-0.03em',
        }}>
          MEDI<span style={{ color: 'var(--accent)' }}>consult</span>
        </button>

        <div style={{ display: 'flex', gap: 4 }} className="desktop-nav">
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: active === item.id ? 500 : 400,
              color: active === item.id ? 'var(--accent)' : 'var(--gray-600)',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px 10px', borderRadius: 6,
              transition: 'color 0.2s',
            }}>
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--black)', fontSize: '20px' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {menuOpen ? 'x' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '56px', left: 0, right: 0,
          background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(20px)',
          borderBottom: '0.5px solid var(--gray-100)',
          padding: '16px 24px',
        }}>
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => { scrollTo(item.id); setMenuOpen(false) }} style={{
              display: 'block', width: '100%', textAlign: 'left',
              fontFamily: 'var(--font-body)', fontSize: '15px',
              color: active === item.id ? 'var(--accent)' : 'var(--gray-800)',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 0',
              borderBottom: '0.5px solid var(--gray-100)',
            }}>
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

function Hero({ scrollTo }) {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'linear-gradient(160deg, #000000 0%, #0a0a1a 50%, #000c1a 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,102,204,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,153,255,0.08) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 24px 80px' }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(41,151,255,1)',
            background: 'rgba(0,102,204,0.15)',
            border: '0.5px solid rgba(0,102,204,0.3)',
            padding: '5px 12px', borderRadius: 20,
            marginBottom: 24,
          }}>
            Zero Trust Telehealth
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 800, color: 'var(--white)',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            marginBottom: 24,
          }}>
            {SITE.projectTitle}
            <span style={{ display: 'block', color: 'var(--accent-light)', fontWeight: 700 }}>
              Continuous Doctor Verification
            </span>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontWeight: 400, fontSize: '60%' }}>
              for Remote Consultations
            </span>
          </h1>

          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7, marginBottom: 40, maxWidth: 560,
            fontWeight: 300,
          }}>
            {SITE.projectTagline}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => scrollTo('components')} style={{ fontSize: '15px' }}>
              Explore Platform
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('domain')} style={{
              borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)',
            }}>
              Research Overview
            </button>
          </div>

          <div style={{
            display: 'flex', gap: 40, marginTop: 64,
            paddingTop: 32, borderTop: '0.5px solid rgba(255,255,255,0.1)',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '4', label: 'AI Components' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700,
                  color: 'var(--white)', letterSpacing: '-0.02em',
                }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ marginBottom: 56, maxWidth: 600 }}>
      {tag && <div className="tag">{tag}</div>}
      <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: 16, color: 'var(--gray-800)' }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontSize: '16px', color: 'var(--gray-400)', lineHeight: 1.7 }}>{subtitle}</p>}
    </div>
  )
}

function Domain() {
  const [activeTab, setActiveTab] = useState('research')
  const tabs = [
    { id: 'research', label: 'Research' },
    { id: 'gap', label: 'Research Gap' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'technologies', label: 'Technologies' },
  ]

  return (
    <section id="domain" className="section" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <SectionHeader
          tag="Domain"
          title="Research Foundation"
          subtitle="A Zero Trust approach for continuous doctor authentication during remote medical consultations."
        />

        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: activeTab === tab.id ? 500 : 400,
              padding: '8px 18px', borderRadius: 980,
              background: activeTab === tab.id ? 'var(--black)' : 'transparent',
              color: activeTab === tab.id ? 'var(--white)' : 'var(--gray-600)',
              border: `1px solid ${activeTab === tab.id ? 'var(--black)' : 'var(--gray-200)'}`,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{
          background: 'var(--white)', borderRadius: 'var(--radius-lg)',
          border: '0.5px solid var(--gray-200)', padding: '40px',
          minHeight: 280,
        }}>
          {activeTab === 'research' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 16 }}>Securing Remote Medical Consultations with Continuous Doctor Authentication</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: 1.8, maxWidth: 700 }}>{SITE.researchProblem}</p>
            </div>
          )}
          {activeTab === 'gap' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 16 }}>Research Gap</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: 1.8, maxWidth: 700 }}>{SITE.researchGap}</p>
            </div>
          )}
          {activeTab === 'objectives' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 20 }}>Objectives</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
                {SITE.objectives.map((obj, i) => (
                  <div key={obj.title} style={{
                    background: 'var(--gray-50)', borderRadius: 'var(--radius-md)',
                    border: '0.5px solid var(--gray-200)', padding: '18px',
                  }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', marginBottom: 8 }}>0{i + 1}</div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--gray-800)', marginBottom: 8 }}>{obj.title}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--gray-600)', lineHeight: 1.65 }}>{obj.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'methodology' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 16 }}>Methodology</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: 1.8, maxWidth: 700 }}>{SITE.methodology}</p>
              <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: 1.8, maxWidth: 760, marginTop: 18 }}>{SITE.architecture}</p>
              <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {[
                  { label: 'Architecture', value: 'Zero Trust Workflow' },
                  { label: 'Modalities', value: 'Four modalities' },
                  { label: 'Backend', value: 'Node.js / Express' },
                  { label: 'Real-time', value: 'Socket.IO Updates' },
                ].map(item => (
                  <div key={item.label} style={{
                    background: 'var(--gray-50)', borderRadius: 'var(--radius-md)',
                    padding: '14px 16px',
                  }}>
                    <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'technologies' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 20 }}>Technologies</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                {SITE.technologies.map(group => (
                  <div key={group.group} style={{
                    background: 'var(--gray-50)', borderRadius: 'var(--radius-md)',
                    border: '0.5px solid var(--gray-200)',
                    padding: '18px',
                  }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gray-800)', marginBottom: 12 }}>{group.group}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {group.items.map(item => (
                        <span key={item} style={{
                          fontSize: '12px', color: 'var(--gray-600)',
                          background: 'var(--white)', border: '0.5px solid var(--gray-200)',
                          borderRadius: 20, padding: '4px 9px',
                        }}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function ComponentCard({ comp }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div style={{
      background: 'var(--white)', border: '0.5px solid var(--gray-200)',
      borderRadius: 'var(--radius-xl)', padding: '32px',
      transition: 'all 0.3s ease',
      borderTop: `3px solid ${comp.color}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 'var(--radius-md)',
          background: `${comp.color}15`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', color: comp.color,
        }}>{comp.icon}</div>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 700,
          color: comp.color, opacity: 0.6, letterSpacing: '0.05em',
        }}>{comp.number}</span>
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700,
        marginBottom: 6, color: 'var(--gray-800)',
      }}>{comp.title}</h3>
      <div style={{ fontSize: '12px', color: comp.color, fontWeight: 500, marginBottom: 4 }}>{comp.tagline}</div>
      <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginBottom: 16 }}>by {comp.owner}</div>

      <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 20 }}>
        {comp.description}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        {comp.metrics.map(m => (
          <div key={m.label} style={{
            background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)',
            padding: '10px 12px',
          }}>
            <div style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 700, color: comp.color }}>{m.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--gray-400)', marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {expanded && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: 10, color: 'var(--gray-800)' }}>Key Features</div>
          {comp.highlights.map((h, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, marginBottom: 10,
              fontSize: '13px', color: 'var(--gray-600)', lineHeight: 1.6,
            }}>
              <span style={{ color: comp.color, marginTop: 2, flexShrink: 0 }}>-</span>
              <span>{h}</span>
            </div>
          ))}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: 8, color: 'var(--gray-800)' }}>Technologies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {comp.tech.map(t => (
                <span key={t} style={{
                  fontSize: '11px', padding: '4px 10px',
                  background: `${comp.color}10`, color: comp.color,
                  borderRadius: 20, fontWeight: 500,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setExpanded(!expanded)} style={{
        fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
        color: comp.color, background: 'none', border: 'none', cursor: 'pointer',
        padding: 0, display: 'flex', alignItems: 'center', gap: 4,
      }}>
        {expanded ? 'Show less' : 'Explore details'}
      </button>
    </div>
  )
}

function Components() {
  return (
    <section id="components" className="section">
      <div className="container-wide">
        <SectionHeader
          tag="Platform Components"
          title="Core Authentication Components"
          subtitle="The platform combines face verification, voiceprint analysis, keystroke dynamics, and mouse movement behavior to support continuous doctor authentication in a Zero Trust telehealth environment. Each component contributes a separate identity signal, allowing the system to evaluate trust throughout the consultation instead of relying only on one-time login."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {SITE.components.map(comp => (
            <ComponentCard key={comp.id} comp={comp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Milestones() {
  return (
    <section id="milestones" className="section" style={{ background: 'var(--gray-800)' }}>
      <div className="container">
        <SectionHeader
          tag="Milestones"
          title={<span style={{ color: 'var(--white)' }}>Project Timeline</span>}
          subtitle={<span style={{ color: 'rgba(255,255,255,0.4)' }}>Key assessments and research deliverables throughout the Bachelor of Science Honours in IT specializing in Cybersecurity programme.</span>}
        />
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: '1px',
            background: 'rgba(255,255,255,0.1)',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SITE.milestones.map((m, i) => (
              <div key={m.id} style={{
                display: 'flex', gap: 28, paddingLeft: 0, marginBottom: 32,
                opacity: m.status === 'upcoming' ? 0.5 : 1,
              }}>
                <div style={{ position: 'relative', flexShrink: 0, width: 40 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: m.status === 'done' ? 'var(--accent)' : 'var(--gray-600)',
                    border: `2px solid ${m.status === 'done' ? 'var(--accent)' : 'rgba(255,255,255,0.2)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '14px', fontWeight: 600,
                  }}>
                    {m.status === 'done' ? '✓' : m.id}
                  </div>
                </div>
                <div style={{ paddingBottom: 32, borderBottom: i < SITE.milestones.length - 1 ? '0.5px solid rgba(255,255,255,0.05)' : 'none', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h4 style={{
                      fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600,
                      color: 'var(--white)',
                    }}>{m.title}</h4>
                    <span style={{
                      fontSize: '12px', color: m.status === 'done' ? '#4ade80' : 'rgba(255,255,255,0.3)',
                      background: m.status === 'done' ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.05)',
                      padding: '3px 10px', borderRadius: 20, flexShrink: 0, marginLeft: 12,
                    }}>
                      {m.date} - {m.status === 'done' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DocCard({ item, type }) {
  const isPending = item.status === 'pending'
  const [open, setOpen] = useState(false)
  if (item.members) {
    return (
      <div style={{
        background: 'var(--white)', borderRadius: 'var(--radius-md)',
        border: '0.5px solid var(--gray-200)', padding: '16px 20px',
        transition: 'all 0.2s',
        color: 'inherit',
      }}>
        <button onClick={() => setOpen(!open)} style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'none', border: 'none', padding: 0, cursor: 'pointer',
          fontFamily: 'var(--font-body)', color: 'inherit', textAlign: 'left',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'rgba(0,102,204,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', color: 'var(--accent)',
            }}>
              PDF
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--gray-800)' }}>{item.title}</div>
            </div>
          </div>
          <span style={{
            fontSize: '12px', fontWeight: 500,
            color: 'var(--accent)', background: 'rgba(0,102,204,0.08)',
            padding: '4px 10px', borderRadius: 20,
          }}>
            {open ? 'Hide' : 'PDFs'}
          </span>
        </button>

        {open && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            {item.members.map(member => (
              <div key={member.id} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 12, padding: '8px 0', borderTop: '0.5px solid var(--gray-100)',
              }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--gray-800)' }}>{member.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--gray-400)', marginTop: 1 }}>{member.id}</div>
                </div>
                <a href={member.url} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '12px', fontWeight: 500,
                  color: 'var(--accent)', background: 'rgba(0,102,204,0.08)',
                  padding: '4px 10px', borderRadius: 20, flexShrink: 0,
                }}>
                  PDF
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <a href={item.url} style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'var(--white)', borderRadius: 'var(--radius-md)',
      border: '0.5px solid var(--gray-200)', padding: '16px 20px',
      transition: 'all 0.2s', opacity: isPending ? 0.45 : 1,
      textDecoration: 'none', color: 'inherit',
    }}
    onMouseEnter={e => { if (!isPending) e.currentTarget.style.borderColor = 'var(--accent)' }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-200)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: isPending ? 'var(--gray-100)' : 'rgba(0,102,204,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '14px', color: isPending ? 'var(--gray-400)' : 'var(--accent)',
        }}>
          {type === 'slides' ? 'Slides' : 'PDF'}
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--gray-800)' }}>{item.title}</div>
          {item.date && <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginTop: 2 }}>{item.date}</div>}
        </div>
      </div>
      <span style={{
        fontSize: '12px', fontWeight: 500,
        color: isPending ? 'var(--gray-400)' : 'var(--accent)',
        background: isPending ? 'var(--gray-50)' : 'rgba(0,102,204,0.08)',
        padding: '4px 10px', borderRadius: 20,
      }}>
        {isPending ? 'Pending' : item.type || 'Slides'}
      </span>
    </a>
  )
}

function Documents() {
  return (
    <section id="documents" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64 }}>
          <div>
            <SectionHeader tag="Documents" title="Project Documents" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SITE.documents.map(doc => <DocCard key={doc.title} item={doc} type="doc" />)}
            </div>
          </div>
          <div id="presentations">
            <SectionHeader tag="Presentations" title="Slide Decks" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SITE.presentations.map(p => <DocCard key={p.title} item={p} type="slides" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const members = SITE.team.filter(m => m.type === 'member')
  const supervisors = SITE.team.filter(m => m.type === 'supervisor')

  const MemberCard = ({ person, large }) => {
    const [imageFailed, setImageFailed] = useState(false)
    const showImage = person.image && !imageFailed
    const avatarSize = large ? 52 : 44

    return (
      <div style={{
        background: 'var(--white)', borderRadius: 'var(--radius-lg)',
        border: '0.5px solid var(--gray-200)', padding: '24px',
        transition: 'all 0.25s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <div style={{
            width: avatarSize, height: avatarSize,
            borderRadius: '50%', flexShrink: 0,
            background: `${person.color}18`,
            border: `2px solid ${person.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700,
            color: person.color, overflow: 'hidden',
          }}>
            {showImage ? (
              <img
                src={person.image}
                alt={`${person.name} profile`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={() => setImageFailed(true)}
              />
            ) : (
              person.initials
            )}
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--gray-800)' }}>{person.name}</div>
            {person.id && <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginTop: 1 }}>{person.id}</div>}
          </div>
        </div>
        <div style={{
          fontSize: '12px', fontWeight: 500,
          color: person.color,
          background: `${person.color}10`,
          display: 'inline-block', padding: '3px 10px', borderRadius: 20, marginBottom: 10,
        }}>
          {person.role}
        </div>
        <a href={`mailto:${person.email}`} style={{
          display: 'block', fontSize: '13px', color: 'var(--gray-400)',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--gray-400)'}
        >
          {person.email}
        </a>
      </div>
    )
  }

  return (
    <section id="team" className="section" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <SectionHeader
          tag="About Us"
          title="Research Team"
          subtitle={`Final year research group ${SITE.groupNo} - ${SITE.department}, ${SITE.institution}.`}
        />
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: '13px', color: 'var(--gray-400)', marginBottom: 16, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Group Members</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {members.map(m => <MemberCard key={m.name} person={m} />)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '13px', color: 'var(--gray-400)', marginBottom: 16, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Supervisors</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {supervisors.map(m => <MemberCard key={m.name} person={m} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (feedback) setFeedback('')
  }

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = form.email.trim()
    const subject = form.subject.trim()
    const message = form.message.trim()

    if (!email || !isValidEmail(email)) {
      setStatus('error')
      setFeedback('Please enter a valid email address.')
      return
    }

    if (!subject) {
      setStatus('error')
      setFeedback('Subject is required.')
      return
    }

    if (!message) {
      setStatus('error')
      setFeedback('Content is required.')
      return
    }

    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: CONTACT_EMAIL,
      su: subject,
      body: `From: ${email}\n\n${message}`,
    })
    const gmailUrl = `https://mail.google.com/mail/?${params.toString()}`
    const gmailWindow = window.open(gmailUrl, '_blank')

    if (!gmailWindow) {
      window.location.href = gmailUrl
      return
    }

    gmailWindow.opener = null
    setStatus('success')
    setFeedback('Gmail opened with your message details.')
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--gray-200)', background: 'var(--white)',
    fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          tag="Contact"
          title="Get in Touch"
          subtitle="Reach out to the MEDIconsult research team for questions, collaborations, or more information about the platform."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <div style={{
            background: 'var(--black)', borderRadius: 'var(--radius-xl)',
            padding: '40px', color: 'var(--white)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: 12 }}>MEDIconsult Research</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
              {SITE.institution}<br />{SITE.department}<br />Malabe, Sri Lanka
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SITE.team.filter(m => m.type === 'supervisor').map(s => (
                <a key={s.email} href={`mailto:${s.email}`} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  color: 'rgba(255,255,255,0.6)', fontSize: '14px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  <span style={{ fontSize: '13px', fontWeight: 700 }}>Email</span>
                  <span>{s.email}</span>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 28, paddingTop: 24, borderTop: '0.5px solid rgba(255,255,255,0.1)' }}>
              <a href={SITE.cdapUrl} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '13px', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                
              </a>
            </div>
          </div>

          <div style={{
            background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)',
            border: '0.5px solid var(--gray-200)', padding: '40px',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 20 }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }} noValidate>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={e => updateField('email', e.target.value)}
                aria-label="Your email"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={e => updateField('subject', e.target.value)}
                aria-label="Subject"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
              />
              <textarea
                placeholder="Content"
                rows={4}
                value={form.message}
                onChange={e => updateField('message', e.target.value)}
                aria-label="Content"
                style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
              />
              {feedback && (
                <div
                  role={status === 'error' ? 'alert' : 'status'}
                  style={{
                    fontSize: '13px',
                    color: status === 'error' ? 'var(--red)' : 'var(--green)',
                    lineHeight: 1.5,
                  }}
                >
                  {feedback}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  alignSelf: 'flex-start',
                }}
              >
                Open Gmail
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ scrollTo }) {
  return (
    <footer style={{
      background: 'var(--gray-800)', color: 'rgba(255,255,255,0.4)',
      padding: '40px 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>
            MEDI<span style={{ color: 'var(--accent-light)' }}>consult</span>
          </div>
          <div style={{ fontSize: '13px' }}>
            Group {SITE.groupNo} - {SITE.institution}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {NAV_ITEMS.slice(0, 5).map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none',
              cursor: 'pointer', transition: 'color 0.2s', padding: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div style={{ fontSize: '12px', textAlign: 'right', marginLeft: 'auto', maxWidth: 280, lineHeight: 1.6 }}>
          © 2026 MEDIconsult Research Team<br />BSc (Hons) in IT<br />Specializing in Cybersecurity, SLIIT
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-40% 0px -55% 0px' })
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar active={activeSection} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Domain />
      <Components />
      <Milestones />
      <Documents />
      <Team />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </>
  )
}
