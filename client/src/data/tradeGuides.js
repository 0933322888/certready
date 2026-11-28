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
    practiceContent: {
      overviewHeading: 'What to Expect on the Hairstylist Red Seal Exam',
      overviewBody: 'The Red Seal Hairstylist (332A) exam is a multiple-choice examination based on the trade\'s National Occupational Analysis. It tests the theory behind hair and scalp care, cutting, styling, chemical texture services, and colour — not just hands-on salon work. Practising exam-style questions is one of the most effective ways to get comfortable with how questions are worded before exam day.',
      topicsHeading: 'Topics Covered in Our Hairstylist Practice Questions',
      topicsIntro: 'Our practice questions mirror the Red Seal weighting for Hairstylists, so you spend your study time where it matters most:',
      prepareHeading: 'How to Prepare for the Hairstylist Certification Exam',
      prepareBody: 'Start with the official Red Seal Occupational Standard for Hairstylists, review the chemistry behind chemical texture services and colour, and practise formulation and mixing-ratio calculations. Then test yourself with exam-style practice questions to find and close knowledge gaps. The full CertReady Hairstylist course adds chapter-by-chapter study material, 320+ practice questions, and a timed mock exam.',
      courseLink: 'Explore the full Hairstylist course →',
    },
    practiceFaqs: [
      {
        question: 'What topics are covered on the Hairstylist Red Seal exam?',
        answer: 'The Hairstylist Red Seal exam covers workplace practices, hair and scalp, haircutting, hair styling, chemical texture services, and hair colouring and lightening. Chemical texture services and colour together carry the highest weighting.',
      },
      {
        question: 'How should I prepare for the Hairstylist certification exam?',
        answer: 'Review the official Red Seal Occupational Standard for Hairstylists, study the chemistry behind chemical texture services and colour, practise formulation and mixing-ratio calculations, and test yourself with exam-style practice questions to find and close knowledge gaps.',
      },
      {
        question: 'Are practice questions useful for Red Seal exam preparation?',
        answer: 'Yes. Working through exam-style questions helps you get comfortable with how questions are worded, strengthens recall under time pressure, and shows you which topic areas need more review before exam day.',
      },
      {
        question: 'Can I use practice tests to identify knowledge gaps?',
        answer: 'Absolutely. Topic-by-topic feedback shows where your answers are weak, so you can focus your remaining study time on the areas that will move your score the most.',
      },
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
    practiceContent: {
      overviewHeading: 'What to Expect on the Plumber Red Seal Exam',
      overviewBody: 'The Red Seal Plumber (306A) exam is a multiple-choice examination based on the trade\'s National Occupational Analysis. It tests the theory, code knowledge, and trade math behind safe, code-compliant plumbing work — from drainage and venting to water distribution and hydronic systems. Practising exam-style questions is one of the most effective ways to get comfortable with how questions are worded before exam day.',
      topicsHeading: 'Topics Covered in Our Plumber Practice Questions',
      topicsIntro: 'Our practice questions mirror the Red Seal weighting for Plumbers, so you spend your study time where it matters most:',
      prepareHeading: 'How to Prepare for the Plumber Certification Exam',
      prepareBody: 'Start with the official Red Seal Occupational Standard for Plumbers, review the code references used in your province, and work through calculation questions by hand. Then test yourself with exam-style practice questions to find and close knowledge gaps. The full CertReady Plumber course adds chapter-by-chapter study material, 500+ practice questions, and a timed mock exam.',
      courseLink: 'Explore the full Plumber course →',
    },
    practiceFaqs: [
      {
        question: 'What topics are covered on the Plumber Red Seal exam?',
        answer: 'The Plumber Red Seal exam covers common occupational skills, tube and pipe, drainage, waste and vent (DWV) systems, water service and distribution, fixtures and appliances, low-pressure steam and hydronic systems, and specialized systems. DWV systems carry the highest weighting.',
      },
      {
        question: 'How should I prepare for the Plumber certification exam?',
        answer: 'Review the official Red Seal Occupational Standard for Plumbers, study the plumbing code references used in your province, practise trade calculations by hand, and test yourself with exam-style practice questions to find and close knowledge gaps.',
      },
      {
        question: 'Are practice questions useful for Red Seal exam preparation?',
        answer: 'Yes. Working through exam-style questions helps you get comfortable with how questions are worded, strengthens recall under time pressure, and shows you which topic areas need more review before exam day.',
      },
      {
        question: 'Can I use practice tests to identify knowledge gaps?',
        answer: 'Absolutely. Topic-by-topic feedback shows where your answers are weak, so you can focus your remaining study time on the areas that will move your score the most.',
      },
    ],
  },
  {
    slug: 'autoservtech',
    courseSlug: 'autoservtech-310s',
    tradeName: 'Automotive Service Technician',
    tradeCode: '310S',
    seoTitle: 'Automotive Service Technician Red Seal Exam — 310S Study Guide',
    seoDescription: 'Prepare for the Automotive Service Technician Red Seal exam with exam weighting, study guidance, practice questions, and a full prep course for Skilled Trades Ontario Trade 310S.',
    seoKeywords: 'Automotive Service Technician, 310S, Red Seal exam, study guide, practice questions, Ontario trade certification',
    ogImage: '/og-default.png',
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
    practiceContent: {
      overviewHeading: 'What to Expect on the Automotive Service Technician Red Seal Exam',
      overviewBody: 'The Red Seal Automotive Service Technician (310S) exam is a multiple-choice examination based on the trade\'s National Occupational Analysis. It tests the theory behind engine systems, vehicle electrical, brakes and suspension, HVAC, and fault diagnosis. Practising exam-style questions is one of the most effective ways to get comfortable with how questions are worded before exam day.',
      topicsHeading: 'Topics Covered in Our Automotive Service Technician Practice Questions',
      topicsIntro: 'Our practice questions mirror the Red Seal weighting for Automotive Service Technicians, so you spend your study time where it matters most:',
      prepareHeading: 'How to Prepare for the Automotive Service Technician Certification Exam',
      prepareBody: 'Start with the official Red Seal Occupational Standard for Automotive Service Technicians, review diagnostics and electrical theory, and practise fault-finding by symptom. Then test yourself with exam-style practice questions to find and close knowledge gaps. The full CertReady course adds chapter-by-chapter study material, 500+ practice questions, and a timed mock exam.',
      courseLink: 'Explore the full Automotive Service Technician course →',
    },
    practiceFaqs: [
      {
        question: 'What topics are covered on the Automotive Service Technician Red Seal exam?',
        answer: 'The Automotive Service Technician Red Seal exam covers common occupational skills, engine systems, vehicle electrical systems, brakes and suspension, heating, ventilation and air conditioning, diagnosis and repair, and service practices. Engine systems and diagnosis and repair carry the highest weighting.',
      },
      {
        question: 'How should I prepare for the Automotive Service Technician certification exam?',
        answer: 'Review the official Red Seal Occupational Standard for Automotive Service Technicians, study diagnostics and electrical theory, practise fault-finding by symptom, and test yourself with exam-style practice questions to find and close knowledge gaps.',
      },
      {
        question: 'Are practice questions useful for Red Seal exam preparation?',
        answer: 'Yes. Working through exam-style questions helps you get comfortable with how questions are worded, strengthens recall under time pressure, and shows you which topic areas need more review before exam day.',
      },
      {
        question: 'Can I use practice tests to identify knowledge gaps?',
        answer: 'Absolutely. Topic-by-topic feedback shows where your answers are weak, so you can focus your remaining study time on the areas that will move your score the most.',
      },
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
    practiceContent: {
      overviewHeading: 'What to Expect on the Carpenter Red Seal Exam',
      overviewBody: 'The Red Seal Carpenter (403A) exam is a multiple-choice examination based on the trade\'s National Occupational Analysis. It tests the theory behind layout, concrete work, framing, and interior and exterior finishing, along with trade math. Practising exam-style questions is one of the most effective ways to get comfortable with how questions are worded before exam day.',
      topicsHeading: 'Topics Covered in Our Carpenter Practice Questions',
      topicsIntro: 'Our practice questions mirror the Red Seal weighting for Carpenters, so you spend your study time where it matters most:',
      prepareHeading: 'How to Prepare for the Carpenter Certification Exam',
      prepareBody: 'Start with the official Red Seal Occupational Standard for Carpenters, review the RSOS glossary and trade acronyms, and practise layout and rafter/stair calculations by hand. Then test yourself with exam-style practice questions to find and close knowledge gaps. The full CertReady Carpenter course adds chapter-by-chapter study material, 500+ practice questions, and a timed mock exam.',
      courseLink: 'Explore the full Carpenter course →',
    },
    practiceFaqs: [
      {
        question: 'What topics are covered on the Carpenter Red Seal exam?',
        answer: 'The Carpenter Red Seal exam covers common occupational skills, planning and layout, concrete work, framing, exterior finishing, interior finishing, and renovations. Framing (MWA D) carries the highest weighting, followed by concrete work.',
      },
      {
        question: 'How should I prepare for the Carpenter certification exam?',
        answer: 'Review the official Red Seal Occupational Standard for Carpenters, study the RSOS glossary and trade acronyms, practise layout and rafter/stair calculations, and test yourself with exam-style practice questions to find and close knowledge gaps.',
      },
      {
        question: 'Are practice questions useful for Red Seal exam preparation?',
        answer: 'Yes. Working through exam-style questions helps you get comfortable with how questions are worded, strengthens recall under time pressure, and shows you which topic areas need more review before exam day.',
      },
      {
        question: 'Can I use practice tests to identify knowledge gaps?',
        answer: 'Absolutely. Topic-by-topic feedback shows where your answers are weak, so you can focus your remaining study time on the areas that will move your score the most.',
      },
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
    practiceContent: {
      overviewHeading: 'What to Expect on the Construction Electrician Red Seal Exam',
      overviewBody: 'The Red Seal Construction Electrician (309A) exam is a multiple-choice examination based on the trade\'s National Occupational Analysis. It tests the theory behind installation, maintenance and commissioning, and fault diagnosis, with the Canadian Electrical Code as a key reference. Practising exam-style questions is one of the most effective ways to get comfortable with how questions are worded before exam day.',
      topicsHeading: 'Topics Covered in Our Construction Electrician Practice Questions',
      topicsIntro: 'Our practice questions mirror the Red Seal weighting for Construction Electricians, so you spend your study time where it matters most:',
      prepareHeading: 'How to Prepare for the Construction Electrician Certification Exam',
      prepareBody: 'Start with the official Red Seal Occupational Standard for Construction Electricians, review the Canadian Electrical Code sections you will be tested on, and practise voltage-drop and conduit-fill calculations. Then test yourself with exam-style practice questions to find and close knowledge gaps. The full CertReady Construction Electrician course adds chapter-by-chapter study material, 500+ practice questions, and a timed mock exam.',
      courseLink: 'Explore the full Construction Electrician course →',
    },
    practiceFaqs: [
      {
        question: 'What topics are covered on the Construction Electrician Red Seal exam?',
        answer: 'The Construction Electrician Red Seal exam covers common occupational skills, installation, maintenance and commissioning, fault diagnosis and repair, and other related tasks. Maintenance and commissioning (MWA C) carries the highest weighting, followed by installation.',
      },
      {
        question: 'How should I prepare for the Construction Electrician certification exam?',
        answer: 'Review the official Red Seal Occupational Standard for Construction Electricians, study the Canadian Electrical Code sections you will be tested on, practise voltage-drop and conduit-fill calculations, and test yourself with exam-style practice questions to find and close knowledge gaps.',
      },
      {
        question: 'Are practice questions useful for Red Seal exam preparation?',
        answer: 'Yes. Working through exam-style questions helps you get comfortable with how questions are worded, strengthens recall under time pressure, and shows you which topic areas need more review before exam day.',
      },
      {
        question: 'Can I use practice tests to identify knowledge gaps?',
        answer: 'Absolutely. Topic-by-topic feedback shows where your answers are weak, so you can focus your remaining study time on the areas that will move your score the most.',
      },
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
    practiceContent: {
      overviewHeading: 'What to Expect on the Refrigeration & Air Conditioning Mechanic Red Seal Exam',
      overviewBody: 'The Red Seal Refrigeration & Air Conditioning Mechanic (313A) exam is a multiple-choice examination based on the trade\'s National Occupational Analysis. It tests the theory behind installation, commissioning, and maintenance and service, including the pressure-enthalpy diagram and refrigerant handling. Practising exam-style questions is one of the most effective ways to get comfortable with how questions are worded before exam day.',
      topicsHeading: 'Topics Covered in Our Refrigeration & Air Conditioning Practice Questions',
      topicsIntro: 'Our practice questions mirror the Red Seal weighting for Refrigeration & Air Conditioning Mechanics, so you spend your study time where it matters most:',
      prepareHeading: 'How to Prepare for the Refrigeration & Air Conditioning Certification Exam',
      prepareBody: 'Start with the official Red Seal Occupational Standard for Refrigeration & Air Conditioning Mechanics, review CSA B52 and refrigerant regulations, and practise superheat, subcooling, and compression-ratio calculations. Then test yourself with exam-style practice questions to find and close knowledge gaps. The full CertReady course adds chapter-by-chapter study material, 500+ practice questions, and a timed mock exam.',
      courseLink: 'Explore the full Refrigeration & Air Conditioning course →',
    },
    practiceFaqs: [
      {
        question: 'What topics are covered on the Refrigeration & Air Conditioning Red Seal exam?',
        answer: 'The Refrigeration & Air Conditioning Mechanic Red Seal exam covers common occupational skills, routine trade activities, installation planning and execution, commissioning, and maintenance and service. Maintenance and service (MWA F) carries the highest weighting, followed by installation.',
      },
      {
        question: 'How should I prepare for the Refrigeration & Air Conditioning certification exam?',
        answer: 'Review the official Red Seal Occupational Standard for Refrigeration & Air Conditioning Mechanics, study CSA B52 and refrigerant regulations, practise superheat, subcooling, and compression-ratio calculations, and test yourself with exam-style practice questions to find and close knowledge gaps.',
      },
      {
        question: 'Are practice questions useful for Red Seal exam preparation?',
        answer: 'Yes. Working through exam-style questions helps you get comfortable with how questions are worded, strengthens recall under time pressure, and shows you which topic areas need more review before exam day.',
      },
      {
        question: 'Can I use practice tests to identify knowledge gaps?',
        answer: 'Absolutely. Topic-by-topic feedback shows where your answers are weak, so you can focus your remaining study time on the areas that will move your score the most.',
      },
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
    practiceContent: {
      overviewHeading: 'What to Expect on the Welder Red Seal Exam',
      overviewBody: 'The Red Seal Welder (456A) exam is a multiple-choice examination based on the trade\'s National Occupational Analysis. It covers the theory behind fabricating, thermal cutting and gouging, and welding activities — including WPS interpretation, weld symbols, process selection, and heat-input calculations. Practising exam-style questions helps you build the pace and recall the exam demands.',
      topicsHeading: 'Topics Covered in Our Welding Practice Questions',
      topicsIntro: 'Our practice questions follow the Red Seal weighting for Welders, with the heaviest emphasis on fabricating and welding activities:',
      prepareHeading: 'How to Prepare for the Welder Certification Exam',
      prepareBody: 'Review the official Red Seal Occupational Standard for Welders, refresh your welding processes, parameters, and weld symbols, and drill the fabrication and heat-input math. Then use exam-style practice questions to identify weak areas and build speed. The full CertReady Welder course adds chapter-by-chapter study material, 500+ practice questions, and a timed mock exam.',
      courseLink: 'Explore the full Welder course →',
    },
    practiceFaqs: [
      {
        question: 'What topics are covered on the Welder Red Seal exam?',
        answer: 'The Welder Red Seal exam covers common occupational skills, fabricating activities, thermal cutting and gouging, and welding activities. Fabricating activities carry the highest weighting, followed by welding activities.',
      },
      {
        question: 'What welding processes should I review?',
        answer: 'Review the common welding processes in the trade, including shielded metal arc welding (SMAW), gas metal arc welding (GMAW), flux-cored arc welding (FCAW), and gas tungsten arc welding (GTAW), along with their parameters, polarity, and typical applications.',
      },
      {
        question: 'How should I prepare for the Welder certification exam?',
        answer: 'Study the official Red Seal Occupational Standard for Welders, refresh your welding processes, parameters, and weld symbols, drill fabrication and heat-input calculations, and use exam-style practice questions to build speed and target weak areas.',
      },
      {
        question: 'Are practice questions useful for Red Seal exam preparation?',
        answer: 'Yes. Exam-style questions build familiarity with question wording, improve recall under time pressure, and reveal which areas — such as fabrication math or WPS interpretation — need more study.',
      },
    ],
  },
  {
    slug: 'cook',
    courseSlug: 'cook-415a',
    tradeName: 'Cook',
    tradeCode: '415A',
    examQuestions: 150,
    passMark: 70,
    apprenticeshipHours: 5400,
    apprenticeshipLevels: 3,
    examWeighting: [
      { area: 'Hygiene, Sanitation and Safety (MWA A)', percent: 9 },
      { area: 'Common Occupational Skills (MWA B)', percent: 7 },
      { area: 'Produce (MWA C)', percent: 8 },
      { area: 'Stocks, Broths and Soups (MWA D)', percent: 8 },
      { area: 'Sauces (MWA E)', percent: 9 },
      { area: 'Cheese, Dairy, Plant-Based Dairy Alternatives, Eggs and Egg Products (MWA F)', percent: 7 },
      { area: 'Pastas, Noodles, Stuffed Pastas and Dumplings (MWA G)', percent: 7 },
      { area: 'Grains, Pulses, Seeds, Nuts and Alternative Proteins (MWA H)', percent: 7 },
      { area: 'Meats, Game, Poultry, Game Birds and Variety Meats (MWA I)', percent: 11 },
      { area: 'Fish and Seafood (MWA J)', percent: 10 },
      { area: 'Salads and Sandwiches (MWA K)', percent: 6 },
      { area: 'Specialty Preparation (MWA L)', percent: 5 },
      { area: 'Sweet and Savoury Baked Goods and Desserts (MWA M)', percent: 7 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Cook exam?',
        answer: 'The Red Seal Cook interprovincial exam contains 150 multiple-choice questions. A minimum score of 70% is required to pass.',
      },

      {
        question: 'How long is the Cook apprenticeship?',
        answer: 'The Cook apprenticeship typically includes 5,400 total hours of combined on-the-job and in-school training across 3 levels.',
      },
      {
        question: 'Do I need to memorize formulas for the Cook exam?',
        answer: 'Yes. Focus on food cost calculations, recipe scaling, measurement conversions, cooking ratios, and portion calculations. Practise applying these formulas to real kitchen scenarios.',
      },
    ],
    topStudyTips: [
      'Master food safety, sanitation, and temperature control procedures',
      'Practise cooking methods, ingredient preparation, and proper equipment use',
      'Focus extra study time on meats, fish, seafood, and sauces',
      'Run timed practice to build pace for 150 questions',
      'Review incorrect answers to strengthen knowledge and improve problem-solving skills',
    ],
    practiceContent: {
      overviewHeading: 'What to Expect on the Cook Red Seal Exam',
      overviewBody: 'The Red Seal Cook (415A) exam is a multiple-choice examination based on the trade\'s National Occupational Analysis. It tests the theory behind food safety, preparation, stocks and sauces, and a wide range of dishes and baked goods, along with food-cost math. Practising exam-style questions is one of the most effective ways to get comfortable with how questions are worded before exam day.',
      topicsHeading: 'Topics Covered in Our Cook Practice Questions',
      topicsIntro: 'Our practice questions mirror the Red Seal weighting for Cooks, so you spend your study time where it matters most:',
      prepareHeading: 'How to Prepare for the Cook Certification Exam',
      prepareBody: 'Start with the official Red Seal Occupational Standard for Cooks, review food-safety and temperature-control procedures, and practise food-cost and recipe-scaling calculations. Then test yourself with exam-style practice questions to find and close knowledge gaps. The full CertReady Cook course adds chapter-by-chapter study material, 500+ practice questions, and a timed mock exam.',
      courseLink: 'Explore the full Cook course →',
    },
    practiceFaqs: [
      {
        question: 'What topics are covered on the Cook Red Seal exam?',
        answer: 'The Cook Red Seal exam covers hygiene, sanitation and safety, common occupational skills, produce, stocks and soups, sauces, dairy and eggs, pastas, grains and alternative proteins, meats and poultry, fish and seafood, salads and sandwiches, specialty preparation, and baked goods and desserts. Meats and poultry and fish and seafood carry the highest weighting.',
      },
      {
        question: 'How should I prepare for the Cook certification exam?',
        answer: 'Review the official Red Seal Occupational Standard for Cooks, study food-safety and temperature-control procedures, practise food-cost and recipe-scaling calculations, and test yourself with exam-style practice questions to find and close knowledge gaps.',
      },
      {
        question: 'Are practice questions useful for Red Seal exam preparation?',
        answer: 'Yes. Working through exam-style questions helps you get comfortable with how questions are worded, strengthens recall under time pressure, and shows you which topic areas need more review before exam day.',
      },
      {
        question: 'Can I use practice tests to identify knowledge gaps?',
        answer: 'Absolutely. Topic-by-topic feedback shows where your answers are weak, so you can focus your remaining study time on the areas that will move your score the most.',
      },
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
