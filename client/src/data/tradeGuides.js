/**
 * Trade guide content for SEO pages at /guides/:tradeSlug.
 * Add one object per trade — everything else (TradeGuidePage, sitemap) is automatic.
 */

export const tradeGuides = [
  {
    slug: 'hairstylist',
    courseSlug: 'hairstylist-332a',
    tradeName: 'Hairstylist',
    tradeCode: '332A',
    examQuestions: 120,
    passMark: 70,
    apprenticeshipHours: 3640,
    apprenticeshipLevels: 2,
    examWeighting: [
      { area: 'Workplace Practices', percent: 10 },
      { area: 'Hair and Scalp', percent: 15 },
      { area: 'Haircutting', percent: 20 },
      { area: 'Hair Styling', percent: 15 },
      { area: 'Chemical Texture Services', percent: 20 },
      { area: 'Hair Colouring and Lightening', percent: 20 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Hairstylist exam?',
        answer: 'The Red Seal Hairstylist interprovincial exam contains 100 multiple-choice questions. You must achieve a minimum of 70% (70 correct answers) to pass.',
      },
      {
        question: 'What is the hardest part of the Red Seal Hairstylist exam?',
        answer: 'Chemical services (perms, relaxers) and hair colouring and lightening together account for 40% of the exam, making them the highest-weighted and most challenging sections for most candidates.',
      },
      {
        question: 'How long is the Hairstylist apprenticeship in Ontario?',
        answer: 'The Skilled Trades Ontario Hairstylist (332A) apprenticeship requires 3,640 hours of on-the-job training across 2 levels, plus in-school technical training.',
      },
      {
        question: 'Can I use study materials during the Red Seal exam?',
        answer: 'No. The Red Seal interprovincial exam is closed-book. You must rely on your knowledge and preparation.',
      },
    ],
    topStudyTips: [
      'Focus on chemical services first — perms and relaxers together are 20% of the exam',
      'Memorize the pH scale and how it applies to each chemical service',
      'Understand the difference between oxidation and reduction in chemical services',
      'Know every WHMIS hazard class and which salon products fall into each',
      'Practice all formulation calculations — mixing ratios appear in multiple questions',
    ],
  },
  {
    slug: 'plumber',
    courseSlug: 'plumber-306a',
    tradeName: 'Plumber',
    tradeCode: '306A',
    examQuestions: 125,
    passMark: 70,
    apprenticeshipHours: 7200,
    apprenticeshipLevels: 4,
    examWeighting: [
      { area: 'Common Occupational Skills', percent: 11 },
      { area: 'Tube, Tubing and Pipe', percent: 10 },
      { area: 'DWV Systems', percent: 26 },
      { area: 'Water Service and Distribution', percent: 19 },
      { area: 'Fixtures, Appliances and Water Treatment', percent: 13 },
      { area: 'Low-Pressure Steam and Hydronic Systems', percent: 13 },
      { area: 'Specialized Systems', percent: 8 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Plumber exam?',
        answer: 'The Red Seal Plumber interprovincial exam contains 125 multiple-choice questions. A minimum score of 70% is required to pass.',
      },
      {
        question: 'What is the most important topic on the Red Seal Plumber exam?',
        answer: 'DWV (Drainage, Waste and Vent) systems carry the highest weighting at 26% of the exam — roughly 33 questions. This is the single most important area to study.',
      },
      {
        question: 'How long is the Plumber apprenticeship in Canada?',
        answer: 'The Plumber Red Seal apprenticeship requires 7,200 hours of training across 4 levels, combining on-the-job experience with in-school technical training.',
      },
      {
        question: 'Is a formula sheet provided during the Red Seal Plumber exam?',
        answer: 'An official Plumber Formulas reference sheet is provided. Familiarize yourself with all formulas in advance so you can apply them quickly under exam conditions.',
      },
    ],
    topStudyTips: [
      'Prioritize DWV systems — at 26% it is by far the most tested area',
      'Memorize all hydronic formulas: Btuh = gpm × 500 × ΔT and its variations',
      'Understand cross connection control thoroughly — it appears in both water and fixture sections',
      'Practice metric/imperial conversions using the official formula sheet',
      'Know all pipe joining methods and which materials they apply to',
    ],
  },
  {
    slug: 'autoservtech',
    courseSlug: 'autoservtech-310s',
    tradeName: 'Automotive Service Technician',
    tradeCode: '310S',
    examQuestions: 125,
    passMark: 70,
    apprenticeshipHours: 7200,
    apprenticeshipLevels: 4,
    examWeighting: [
      { area: 'Common Occupational Skills', percent: 10 },
      { area: 'Engine Systems', percent: 20 },
      { area: 'Vehicle Electrical Systems', percent: 15 },
      { area: 'Brakes and Suspension', percent: 15 },
      { area: 'Heating, Ventilation & Air Conditioning', percent: 10 },
      { area: 'Diagnosis and Repair', percent: 20 },
      { area: 'Service Practices & Communication', percent: 10 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Automotive Service Technician exam?',
        answer: 'The Automotive Service Technician exam contains 125 multiple-choice questions. You must achieve at least 70% to pass.',
      },
      {
        question: 'What is the most important part of the Automotive Service Technician exam?',
        answer: 'Engine systems and diagnostic/problem-solving questions are the most heavily weighted, so mastering fault diagnosis and engine performance is critical.',
      },
      {
        question: 'How long is the Automotive Service Technician apprenticeship?',
        answer: 'The Automotive Service Technician apprenticeship typically requires roughly 7,200 hours of combined work and technical training.',
      },
      {
        question: 'Can I use tools or reference materials during the exam?',
        answer: 'No. The exam is closed-book and closed-tools, so you should practice using only memory and quick calculation techniques.',
      },
    ],
    topStudyTips: [
      'Learn OBD and electrical system diagnostics thoroughly — they appear throughout the exam',
      'Memorize common engine performance formulas and service procedures',
      'Practice brake, steering, and suspension troubleshooting using symptom-based reasoning',
      'Understand HVAC service, refrigerant handling, and air distribution system principles',
      'Drill time management with full-length 125-question practice tests',
    ],
  },
  {
    slug: 'carpenter',
    courseSlug: 'carpenter-403a',
    tradeName: 'Carpenter',
    tradeCode: '403A',
    examQuestions: 100,
    passMark: 70,
    apprenticeshipHours: 7200,
    apprenticeshipLevels: 4,
    examWeighting: [
      { area: 'Performs Common Occupational Skills (MWA A)', percent: 12 },
      { area: 'Performs Planning and Layout (MWA B)', percent: 14 },
      { area: 'Performs Concrete Work (MWA C)', percent: 16 },
      { area: 'Performs Framing (MWA D)', percent: 20 },
      { area: 'Performs Exterior Finishing (MWA E)', percent: 14 },
      { area: 'Performs Interior Finishing (MWA F)', percent: 14 },
      { area: 'Performs Renovations (MWA G)', percent: 10 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Carpenter exam?',
        answer: 'The Red Seal Carpenter (403A) interprovincial exam contains 100 multiple-choice questions to be completed in 3 hours. A minimum score of 70% (70 correct answers) is required to pass.',
      },
      {
        question: 'What is the most important topic on the Red Seal Carpenter exam?',
        answer: 'MWA D (Performs Framing) has the highest weighting at 20% of the exam. MWA C (Performs Concrete Work), especially formwork, is also heavily tested at 16%.',
      },
      {
        question: 'How long is the Carpenter apprenticeship in Canada?',
        answer: 'The Red Seal Carpenter (403A) apprenticeship requires 7,200 hours of training across 4 levels, combining on-the-job experience with in-school technical training.',
      },
      {
        question: 'Are acronyms or formulas provided during the Red Seal Carpenter exam?',
        answer: 'An official list of trade acronyms (e.g. CMHC, ICF, OSB, WHMIS) is provided with the exam. You must still know what they mean to answer questions correctly.',
      },
    ],
    topStudyTips: [
      'Focus on Framing (MWA D) first — 20% of the exam; master rafter calculations, I-joist rules, and wall components',
      'Concrete and formwork (MWA C) — 16 questions; lateral pressure, form components, and stripping times are tested',
      'Practise layout and calculation questions — diagonal check, stud count, rafter and stair calculations',
      'Know safety hierarchy, PPE, LOTO, and PAT (powder-actuated tool) certification requirements',
      'Memorize key terms from the RSOS glossary — they appear in scenario-based questions',
    ],
  },
  {
    slug: 'construction-electrician',
    courseSlug: 'construction-electrician-309a',
    tradeName: 'Construction Electrician',
    tradeCode: '309A',
    examQuestions: 100,
    passMark: 70,
    apprenticeshipHours: 7200,
    apprenticeshipLevels: 4,
    examWeighting: [
      { area: 'Common Occupational Skills (MWA A)', percent: 12 },
      { area: 'Installation (MWA B)', percent: 26 },
      { area: 'Maintenance & Commissioning (MWA C)', percent: 34 },
      { area: 'Fault Diagnosis & Repair (MWA D)', percent: 18 },
      { area: 'Other (MWA E)', percent: 10 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Construction Electrician exam?',
        answer: 'The Red Seal Construction Electrician (309A) interprovincial exam contains 100 multiple-choice questions. A minimum score of 70% is required to pass.',
      },
      {
        question: 'What is the most important topic on the Red Seal Construction Electrician exam?',
        answer: 'MWA C (Maintenance & Commissioning) has the highest weighting at 34% of the exam — roughly 34 questions. MWA B (Installation) is next at 26%.',
      },
      {
        question: 'How long is the Construction Electrician apprenticeship in Canada?',
        answer: 'The Construction Electrician Red Seal apprenticeship requires 7,200 hours of training across 4 levels, combining on-the-job experience with in-school technical training.',
      },
      {
        question: 'Is the Canadian Electrical Code (CEC) referenced on the exam?',
        answer: 'Yes. The Red Seal exam is based on the Red Seal Occupational Standard and references the Canadian Electrical Code. Familiarity with CEC sections and application is essential.',
      },
    ],
    topStudyTips: [
      'Focus on MWA C first — at 34% it is the most tested area',
      'Know safety (PPE, arc flash, LOTO) and tools thoroughly — MWA A is 12%',
      'Memorize key CEC formulas and application (voltage drop, conduit fill, etc.)',
      'Understand commissioning and testing procedures for various systems',
      'Practice fault diagnosis scenarios across all system types',
    ],
  },
  {
    slug: 'refrigeration-air-conditioning-mechanic',
    courseSlug: 'refrigeration-air-conditioning-mechanic-313a',
    tradeName: 'Refrigeration & Air Conditioning Mechanic',
    tradeCode: '313A',
    examQuestions: 125,
    passMark: 70,
    apprenticeshipHours: 9000,
    apprenticeshipLevels: 3,
    examWeighting: [
      { area: 'Common Occupational Skills (MWA A)', percent: 8 },
      { area: 'Routine Trade Activities (MWA B)', percent: 16 },
      { area: 'Plans Installation (MWA C)', percent: 13 },
      { area: 'Performs Installation (MWA D)', percent: 21 },
      { area: 'Performs Commissioning (MWA E)', percent: 17 },
      { area: 'Performs Maintenance and Service (MWA F)', percent: 25 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Refrigeration and Air Conditioning (313A) exam?',
        answer: 'The Skilled Trades Ontario HVAC/R (313A) exam contains 125 multiple-choice questions to be completed in 4 hours. A minimum score of 70% is required to pass.',
      },
      {
        question: 'What is the most important topic on the HVAC 313A exam?',
        answer: 'MWA F (Performs Maintenance and Service) has the highest weighting at 25% of the exam. MWA D (Performs Installation) is next at 21%. Together they represent 46% of the exam.',
      },
      {
        question: 'How long is the HVAC/R apprenticeship in Ontario?',
        answer: 'The Refrigeration and Air Conditioning Systems Mechanic (313A) apprenticeship requires 9,000 hours of training across 3 levels, combining on-the-job experience with in-school technical training.',
      },
      {
        question: 'What references are used on the 313A exam?',
        answer: 'The exam is based on the RSOS and references CSA B52, B149, ASHRAE standards, WHMIS, and the Canadian Electrical Code. Familiarity with refrigerant tables and machinery room ventilation requirements is essential.',
      },
    ],
    topStudyTips: [
      'Prioritize MWA F and MWA D — together they are 46% of the exam',
      'Master the pressure-enthalpy (P-H) diagram for thermodynamic and troubleshooting questions',
      'Know CSA B52 refrigerant classifications and machinery room ventilation requirements',
      'Practice superheat, subcooling, and compression ratio calculations',
      'Understand VFD safety: capacitor discharge times and verification before servicing',
    ],
  },
  {
    slug: 'welder',
    courseSlug: 'welder-456a',
    tradeName: 'Welder',
    tradeCode: '456A',
    examQuestions: 125,
    passMark: 70,
    apprenticeshipHours: 5400,
    apprenticeshipLevels: 3,
    examWeighting: [
      { area: 'Performs Common Occupational Skills (MWA A)', percent: 16 },
      { area: 'Performs Fabricating Activities (MWA B)', percent: 38 },
      { area: 'Performs Thermal Cutting and Gouging Activities (MWA C)', percent: 18 },
      { area: 'Performs Welding Activities (MWA D)', percent: 28 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Welder exam?',
        answer: 'The Red Seal Welder interprovincial exam contains 125 multiple-choice questions. A minimum score of 70% is required to pass.',
      },
      {
        question: 'What is the highest-weighted area on the Welder exam?',
        answer: 'MWA B (Performs Fabricating Activities) is the largest section at 38% of the exam, so it should be a top study priority.',
      },
      {
        question: 'How long is the Welder apprenticeship?',
        answer: 'The Welder apprenticeship typically includes 5,400 total hours of combined on-the-job and in-school training across 3 levels.',
      },
      {
        question: 'Do I need to memorize formulas for the Welder exam?',
        answer: 'Yes. Heat input, basic fabrication math, and unit conversions are commonly tested, so you should practice using them quickly.',
      },
    ],
    topStudyTips: [
      'Prioritize MWA B first; it carries the biggest exam weight',
      'Master WPS/WPDS interpretation and weld symbols',
      'Drill process selection, polarity, and parameter ranges',
      'Review cutting, gouging, and rigging safety scenarios',
      'Run timed practice to build pace for 125 questions',
    ],
  },
];

export function getGuideBySlug(slug) {
  return tradeGuides.find((g) => g.slug === slug) || null;
}

export function getGuideByCourseSlug(courseSlug) {
  return tradeGuides.find((g) => g.courseSlug === courseSlug) || null;
}

export function getAllGuideSlugs() {
  return tradeGuides.map((g) => g.slug);
}

/** Derive guide slug from course slug (e.g. hairstylist-332a -> hairstylist) for internal linking */
export function getGuideSlugFromCourseSlug(courseSlug) {
  const guide = getGuideByCourseSlug(courseSlug);
  return guide ? guide.slug : (courseSlug || '').split('-')[0] || null;
}
