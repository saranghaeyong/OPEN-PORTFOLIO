import { PortfolioData } from '../types';

/**
 * ============================================================================
 * SARANG R N — PORTFOLIO CONFIGURATION
 * ============================================================================
 * 
 * Configurable variables:
 * - Update your project repository or live demo link in `project.projectUrlPlaceholder`
 * - Update your social media and resume links in `socialPlaceholders`
 * - Change the hero image path in `heroImage` if you want to replace it
 */

export const PORTFOLIO_CONFIG: PortfolioData = {
  name: 'SARANG R N',
  titleRoles: [
    'MCA GRADUATE',
    'SOFTWARE DEVELOPMENT',
    'PYTHON',
    'MACHINE LEARNING'
  ],
  tagline: 'Quiet, technical, intelligent, futuristic.',
  email: 'rnsarang@gmail.com',
  phone: '7994963196',
  location: 'Kakkanad, Ernakulam, Kerala, India',
  statusBadge: 'AVAILABLE FOR OPPORTUNITIES',
  
  // Hero artwork asset generated for the cinematic anime atmosphere
  heroImage: '/src/assets/images/hero_anime_cybercity_1789702783927.jpg',
  
  aboutIntro:
    'MCA graduate from Cochin University of Science and Technology with a foundation in software development, Python, machine learning, deep learning, cybersecurity, and web technologies.',
  aboutFocus:
    'Currently focused on building practical solutions using Python, machine learning, deep learning, and modern web technologies.',

  education: [
    {
      id: 'mca',
      degree: 'MCA',
      fullDegreeName: 'Master of Computer Applications',
      institution: 'Cochin University of Science and Technology',
      campus: 'Kalamassery',
      period: '2024 – 2026',
      score: 'CGPA: 7.66/10',
      gradeClassification: 'First Class',
    },
    {
      id: 'bca',
      degree: 'BCA',
      fullDegreeName: 'Bachelor of Computer Applications',
      institution: 'Bharata Mata College of Science and Arts',
      period: '2019 – 2022',
      score: 'CCPA: 6.24/10',
      gradeClassification: 'B Class',
    },
  ],

  project: {
    title: 'TOWARDS THE DETECTION OF PHISHING WEBSITES USING LLM & CNN',
    institution: 'Cochin University of Science and Technology',
    date: 'April 2026',
    grade: 'Grade S — Highest Grade',
    credits: 16,
    technologies: [
      'Python',
      'PyTorch',
      'CNN',
      'LLM',
      'NumPy',
      'Pandas',
      'Selenium',
      'Playwright',
    ],
    areas: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Large Language Models',
      'Computer Vision',
      'Cybersecurity',
      'Web Automation',
    ],
    description:
      'Worked on a hybrid phishing detection approach combining webpage content analysis with CNN-based URL classification.',
    appliedTechniques: [
      'Brand recognition',
      'Brand-domain matching',
      'Logo analysis',
      'Credential-taking intention detection',
      'Webpage assessment',
    ],
    coreArchitecture: [
      'Character-level CNN',
      'Attention Mechanisms',
    ],
    evaluationMetrics: [
      'Accuracy',
      'Precision',
      'Recall',
      'F1-score',
    ],
    pipeline: [
      {
        id: 'webpage',
        stepNumber: 1,
        label: 'WEBPAGE',
        subtitle: 'Target Input Extraction',
        detail: 'Ingestion of target web documents and DOM structure through automated headless browsing.',
        badge: 'Selenium & Playwright',
      },
      {
        id: 'content-analysis',
        stepNumber: 2,
        label: 'CONTENT ANALYSIS',
        subtitle: 'Structural & Semantic Parsing',
        detail: 'Analysis of on-page text tokens, input forms, login fields, and structural layouts.',
        badge: 'Natural Language Processing',
      },
      {
        id: 'brand-recognition',
        stepNumber: 3,
        label: 'BRAND RECOGNITION',
        subtitle: 'Target Entity Identification',
        detail: 'Determining claimed or simulated brand identities using multimodal language understanding.',
        badge: 'LLM & Vision',
      },
      {
        id: 'brand-domain-matching',
        stepNumber: 4,
        label: 'BRAND-DOMAIN MATCHING',
        subtitle: 'Legitimacy Cross-Verification',
        detail: 'Verification of recognized brands against authentic registered hostname patterns.',
        badge: 'Domain Verification',
      },
      {
        id: 'logo-analysis',
        stepNumber: 5,
        label: 'LOGO ANALYSIS',
        subtitle: 'Visual Similarity Inspection',
        detail: 'Extracting and analyzing rendered brand visual assets and visual spoofing artifacts.',
        badge: 'Computer Vision',
      },
      {
        id: 'credential-intention',
        stepNumber: 6,
        label: 'CREDENTIAL INTENTION',
        subtitle: 'Behavioral Threat Detection',
        detail: 'Detection of malicious credential-harvesting mechanisms and password capture fields.',
        badge: 'Cybersecurity Logic',
      },
      {
        id: 'url-classification',
        stepNumber: 7,
        label: 'URL CLASSIFICATION',
        subtitle: 'Deep Sequence Representation',
        detail: 'Character-level sequence modeling with attention mechanisms for lexicographical anomaly detection.',
        badge: 'Character-level CNN + Attention',
      },
      {
        id: 'phishing-assessment',
        stepNumber: 8,
        label: 'PHISHING ASSESSMENT',
        subtitle: 'Hybrid Decision Synthesis',
        detail: 'Final threat scoring and benign vs. phishing classification evaluated via standard statistical metrics.',
        badge: 'Ensemble Evaluation',
      },
    ],
    // PLACEHOLDER: Insert your project repository or paper link here (e.g. 'https://github.com/your-username/phishing-detection')
    projectUrlPlaceholder: '',
  },

  skillCategories: [
    {
      id: 'programming',
      category: 'PROGRAMMING',
      skills: ['Python', 'Java', 'C', 'Object-Oriented Programming'],
    },
    {
      id: 'ai-ml',
      category: 'AI / MACHINE LEARNING',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'LLM',
        'Computer Vision',
        'PyTorch',
        'NumPy',
        'Pandas',
      ],
    },
    {
      id: 'web',
      category: 'WEB DEVELOPMENT',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
    },
    {
      id: 'database',
      category: 'DATABASE',
      skills: ['SQL', 'MySQL'],
    },
    {
      id: 'automation',
      category: 'AUTOMATION',
      skills: ['Selenium', 'Playwright'],
    },
    {
      id: 'tools',
      category: 'TOOLS',
      skills: ['VS Code', 'Adobe Photoshop', 'CorelDRAW', 'Dreamweaver'],
    },
  ],

  certifications: [
    {
      id: 'web-designing',
      title: 'Diploma in Web Designing',
      year: '2019',
      institution: 'Softmedia Computer Training',
    },
    {
      id: 'dtp',
      title: 'Desktop Publishing (DTP)',
      year: '2018',
      institution: 'Softmedia Computer Training',
    },
    {
      id: 'dca',
      title: 'Diploma in Computer Applications',
      year: '2017',
      institution: 'Softmedia Computer Training',
    },
  ],

  /**
   * ==========================================================================
   * SOCIAL / PROFILE PLACEHOLDERS
   * ==========================================================================
   * Configure your external profiles and document links here when ready.
   */
  socialPlaceholders: {
    github: '', // e.g., 'https://github.com/sarangrn'
    linkedin: '', // e.g., 'https://linkedin.com/in/sarangrn'
    resume: '', // e.g., '/resume.pdf' or cloud document URL
  },
};
