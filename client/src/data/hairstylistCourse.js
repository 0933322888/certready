// =============================================================================
// hairstylistCourse.js  —  CertReady
// Hairstylist Certification Exam Prep — Skilled Trades Ontario Trade 332A
// EXPANDED EDITION — All 15 Chapters with full depth
// =============================================================================

export const hairstylistCourse = {
    id: 'hairstylist-332a',
    slug: 'hairstylist-332a',
    title: 'Hairstylist Certification Exam Prep',
    subtitle: 'Complete Study Guide — Skilled Trades Ontario Trade 332A',
    trade: 'Hairstylist',
    tradeCode: '332A',
    price: 4999,
    currency: 'CAD',
    totalChapters: 15,
    totalQuestions: 120,
    passingMark: 70,
    examFormat: 'Multiple-choice, computer-based (Prometric Canada Testing Services)',
    features: [
        '15 comprehensive chapters covering ALL 17 official exam subjects',
        '120+ practice questions with full explanations',
        'Full 50-question timed mock exam (Chapter 13)',
        '70+ term glossary (Chapter 14)',
        'Exam strategy and study tips (Chapter 15)',
        'Covers both Level 1 and Level 2 curriculum (480 hrs total)',
        'Lifetime access — study at your own pace',
        'Based on official Skilled Trades Ontario 332A standard',
    ],

    parts: [

        // =========================================================================
        // PART 1 — PROFESSIONAL FOUNDATIONS
        // =========================================================================
        {
            id: 'part-1',
            title: 'Part 1: Professional Foundations',
            color: '#1F4E79',
            description: 'Chapters 1–4 cover the legal, ethical, health, safety, and business frameworks every licensed hairstylist in Ontario must master.',
            chapters: [

                // ─── CHAPTER 1 ────────────────────────────────────────────────────────
                {
                    id: 'ch-1',
                    number: 1,
                    title: 'Ethics, Regulation and Policy',
                    subtitle: 'S1731 — Legal obligations, OHSA, WHMIS, and client rights',
                    isFree: true,
                    estimatedMinutes: 30,
                    sections: [
                        {
                            id: 's1-1',
                            title: '1.1 Professional Ethics in the Workplace',
                            content: [
                                { type: 'paragraph', text: 'Professional ethics form the backbone of the hairstyling trade. As a licensed hairstylist in Ontario, you operate under specific legal obligations and ethical standards that protect both you and your clients. Ethics are not just rules imposed from outside — they reflect the values of a competent, caring professional.' },
                                { type: 'keyTerm', term: 'Professional ethics', definition: "A set of moral standards and values that guide a hairstylist's behavior and decisions in the workplace — covering courtesy, competency, confidentiality, non-discrimination, and honesty" },
                                { type: 'paragraph', text: 'Core ethical obligations every hairstylist must uphold:' },
                                {
                                    type: 'bullets', items: [
                                        'Courtesy and respect toward all clients regardless of background, race, religion, gender, age, or ability',
                                        'Performing services at a consistently high level of competency — never work beyond your scope of training',
                                        "Following your employer's code of professional conduct at all times",
                                        'Maintaining client confidentiality at all times — client records, health information, and personal details are private',
                                        'Non-discrimination — every client deserves equal, professional service',
                                        'Honesty about services, realistic outcomes, pricing, and product recommendations',
                                        'Referring clients to medical professionals when conditions are outside your scope (e.g., scalp infections, skin disorders)',
                                        'Reporting unsafe workplace conditions through proper channels',
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'The Five Pillars of Professional Ethics', items: [
                                        '1. INTEGRITY — do the right thing even when no one is watching',
                                        '2. COMPETENCY — only perform services you are trained and qualified to do',
                                        '3. RESPECT — treat every client and colleague with dignity',
                                        '4. ACCOUNTABILITY — take responsibility for your actions and outcomes',
                                        '5. CONFIDENTIALITY — protect all client information as private',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's1-2',
                            title: '1.2 Occupational Health and Safety Act (OHSA)',
                            content: [
                                { type: 'paragraph', text: "The Occupational Health and Safety Act (OHSA) is Ontario's primary legislation governing workplace safety. It applies to all salons and sets out the legal rights and responsibilities of both employers and employees. Violation of OHSA can result in fines, work stoppages, and legal liability." },
                                { type: 'keyTerm', term: 'OHSA', definition: "Ontario's Occupational Health and Safety Act — the law that sets standards for workplace safety, defines duties for employers and workers, and gives workers enforceable rights" },
                                {
                                    type: 'table', headers: ['Responsible Party', 'Key Duties Under OHSA'], rows: [
                                        ['Employer', 'Provide a safe and healthy workplace free from known hazards'],
                                        ['Employer', 'Provide all necessary information, training, and supervision'],
                                        ['Employer', 'Ensure equipment is in good working order and maintained'],
                                        ['Employer', 'Post OHSA and related regulations in a prominent place'],
                                        ['Employer', 'Establish a Joint Health & Safety Committee (JHSC) if 20+ workers'],
                                        ['Employee (Hairstylist)', 'Work in compliance with OHSA and all regulations'],
                                        ['Employee (Hairstylist)', 'Report hazards, injuries, and unsafe conditions to employer'],
                                        ['Employee (Hairstylist)', 'Use all required protective equipment correctly'],
                                        ['Employee (Hairstylist)', 'Never endanger yourself or others through your actions'],
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'Three Fundamental Rights of Workers Under OHSA', items: [
                                        '1. RIGHT TO KNOW — workers have the right to be informed about hazards in their workplace, including chemical hazards (WHMIS) and physical risks',
                                        '2. RIGHT TO PARTICIPATE — workers have the right to be involved in health and safety decisions, including through a Joint Health & Safety Committee or worker representative',
                                        '3. RIGHT TO REFUSE — workers have the right to refuse work they believe is unsafe, without fear of reprisal (penalty, demotion, firing)',
                                    ]
                                },
                                { type: 'keyTerm', term: 'Joint Health & Safety Committee (JHSC)', definition: 'A workplace committee of worker and management representatives that identifies hazards, reviews safety policies, and makes recommendations — required in Ontario workplaces with 20 or more employees' },
                                { type: 'keyTerm', term: 'Right to refuse unsafe work', definition: 'Under OHSA, a worker may refuse work they believe is unsafe. The employer must investigate. The worker cannot be penalized for exercising this right.' },
                                { type: 'paragraph', text: 'The right to refuse procedure: The worker reports the unsafe condition to the supervisor. The supervisor investigates and either fixes the problem or disagrees. If the disagreement continues, a Ministry of Labour inspector is called. The worker may continue to refuse until the issue is resolved.' },
                            ],
                        },
                        {
                            id: 's1-3',
                            title: '1.3 WHMIS — Workplace Hazardous Materials Information System',
                            content: [
                                { type: 'keyTerm', term: 'WHMIS 2015', definition: "Canada's national hazard communication system, aligned with the Globally Harmonized System (GHS). It requires hazard labels, Safety Data Sheets (SDS), and worker education for all controlled products" },
                                { type: 'paragraph', text: 'WHMIS 2015 applies to all hazardous products used in Ontario salons. Three core elements make up WHMIS:' },
                                {
                                    type: 'numbered', items: [
                                        'Hazard labels on every container of a controlled product',
                                        'Safety Data Sheets (SDS) — 16-section documents providing full hazard and safety information',
                                        'Worker education and training on hazards and safe handling',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['WHMIS Hazard Class', 'Examples in the Salon'], rows: [
                                        ['Flammable/combustible liquids', 'Aerosol hairsprays, alcohol-based toners and sprays'],
                                        ['Oxidizing agents', 'Hydrogen peroxide developers (10–40 vol.)'],
                                        ['Corrosives', 'Sodium hydroxide relaxers (pH 12–14), thioglycolate perm solutions'],
                                        ['Sensitizers / Respiratory hazards', 'PPD (para-phenylenediamine) in oxidative colour, ammonia in colour and relaxers'],
                                        ['Compressed gases', 'Aerosol cans (hairspray, dry shampoo, foam styling products)'],
                                        ['Carcinogens', 'Formaldehyde in some Brazilian keratin treatments'],
                                        ['Reproductive/developmental hazards', 'Some chemical products — review SDS during pregnancy'],
                                    ]
                                },
                                { type: 'paragraph', text: 'The Safety Data Sheet (SDS) has 16 standardized sections. The most exam-relevant sections are:' },
                                {
                                    type: 'table', headers: ['SDS Section', 'Contents'], rows: [
                                        ['Section 1', 'Product identification — product name, supplier, intended use, emergency contact'],
                                        ['Section 2', 'Hazard identification — GHS pictograms, signal words, hazard statements'],
                                        ['Section 3', 'Composition/ingredients — active chemical components and concentrations'],
                                        ['Section 4', 'First-aid measures — what to do if ingested, inhaled, or contacted with skin/eyes'],
                                        ['Section 7', 'Handling and storage — safe practices, incompatibilities, storage conditions'],
                                        ['Section 8', 'Exposure controls/PPE — gloves, ventilation, eye protection, respiratory protection'],
                                        ['Section 11', 'Toxicological information — health effects, routes of exposure, chronic effects'],
                                        ['Section 13', 'Disposal considerations — how to safely dispose of product and container'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Signal Word', definition: "A word on a WHMIS/GHS label indicating the relative degree of hazard: 'DANGER' indicates a more severe hazard; 'WARNING' indicates a less severe hazard" },
                                { type: 'keyTerm', term: 'GHS pictograms', definition: 'Standardized symbols on WHMIS labels that visually communicate the type of hazard — e.g., flame (flammable), skull and crossbones (toxic), exclamation mark (irritant), health hazard (carcinogen/sensitizer)' },
                                { type: 'paragraph', text: 'Personal protective equipment (PPE) required when handling salon chemicals:' },
                                {
                                    type: 'bullets', items: [
                                        'Nitrile or latex gloves — always when applying colour, relaxers, or perms',
                                        'Safety glasses or goggles — when mixing or applying chemical services near the face',
                                        'Chemical-resistant apron or smock — protects clothing and skin',
                                        'Adequate ventilation — open windows or use exhaust fans when applying strong chemicals',
                                        'Respiratory protection — for formaldehyde-containing treatments',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's1-4',
                            title: '1.4 Client Rights, Consent, and Non-Discrimination',
                            content: [
                                { type: 'paragraph', text: "Ontario's Human Rights Code prohibits discrimination in services based on race, ancestry, place of origin, colour, ethnic origin, citizenship, creed, sex, sexual orientation, gender identity, age, marital status, family status, or disability. Every client entering a salon has the legal right to equal, professional service." },
                                { type: 'keyTerm', term: 'Informed consent', definition: 'The client\'s voluntary agreement to receive a service after being fully informed of the procedure, products to be used, potential risks, expected results, and aftercare requirements' },
                                { type: 'paragraph', text: 'Informed consent is required before every chemical service. The hairstylist must:' },
                                {
                                    type: 'bullets', items: [
                                        'Explain the full procedure and all products involved',
                                        'Disclose any known risks (e.g., potential for allergic reaction, hair damage)',
                                        'Perform required tests (patch test, strand test) and document results',
                                        'Give the client the opportunity to ask questions and refuse the service',
                                        'Record consent and consultation findings on the client record card',
                                    ]
                                },
                                { type: 'keyTerm', term: 'Privacy Act (PIPEDA)', definition: 'Federal legislation governing how private-sector organizations collect, use, and disclose personal information. Client records must be kept confidential and used only for the purposes they were collected for.' },
                                { type: 'paragraph', text: 'Scope of practice: A hairstylist may only perform services within their training and licensing. Services outside scope — such as treating medical scalp conditions, performing invasive procedures, or recommending prescription medications — must be referred to the appropriate health professional.' },
                            ],
                        },
                        {
                            id: 's1-5',
                            title: '1.5 Professional Conduct and the Salon Environment',
                            content: [
                                { type: 'paragraph', text: 'Maintaining a professional salon environment requires consistent attention to conduct, appearance, and client relationships.' },
                                {
                                    type: 'table', headers: ['Area', 'Professional Standard'], rows: [
                                        ['Personal appearance', 'Clean, stylish attire appropriate for the salon environment; well-groomed personal presentation'],
                                        ['Punctuality', 'Arrive on time or early; contact clients promptly if running behind'],
                                        ['Language and tone', 'Use professional, respectful language at all times; avoid gossip or negative talk about other clients or staff'],
                                        ['Phone etiquette', 'Answer with salon name and your name; speak clearly and warmly; take accurate messages'],
                                        ['Social media conduct', 'Post only with client permission; represent the salon brand professionally; never post negative comments about clients or employers'],
                                        ['Conflict resolution', 'Address concerns calmly and privately; escalate to management when needed; document all incidents'],
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q1-1', question: "Under OHSA, which of the following is a worker's right?", options: ['The right to refuse unsafe work without penalty', 'The right to choose their own PPE brand', 'The right to modify chemical dilution ratios', 'The right to skip WHMIS training if experienced'], correctIndex: 0, explanation: 'OHSA gives workers three key rights: to know, to participate, and to refuse. The right to refuse unsafe work without reprisal is explicitly protected by law.' },
                        { id: 'q1-2', question: 'A Safety Data Sheet (SDS) for a hydrogen peroxide developer would list it under which WHMIS hazard class?', options: ['Flammable liquid', 'Oxidizing agent', 'Compressed gas', 'Carcinogen'], correctIndex: 1, explanation: 'Hydrogen peroxide releases oxygen and is classified as an oxidizing agent under WHMIS. Oxidizers can intensify combustion and are common in salons as hair colour developers.' },
                        { id: 'q1-3', question: 'Which of the following best describes professional ethics in hairstyling?', options: ['Rules set only by the employer that can change at any time', 'Moral standards guiding professional behavior to protect clients and colleagues', 'Technical cutting and colouring techniques', 'The minimum wage requirements under employment law'], correctIndex: 1, explanation: 'Professional ethics encompasses courtesy, competency, non-discrimination, confidentiality, and honesty. These are moral principles — not just employer policies or technical skills.' },
                        { id: 'q1-4', question: 'What is the correct term for the document that provides detailed 16-section safety information about a chemical product?', options: ["Manufacturer's instruction booklet", 'Safety Data Sheet (SDS)', 'Hazardous Product Label', 'OHSA Regulation Sheet'], correctIndex: 1, explanation: 'Formerly called MSDS, the SDS provides 16 standardized sections of safety information as required under WHMIS 2015 / GHS.' },
                        { id: 'q1-5', question: "An employer's responsibility under OHSA includes:", options: ['Purchasing all personal grooming products for employees', 'Providing a safe workplace and necessary worker training', 'Deciding which clients hairstylists may serve', 'Setting provincial pricing standards for services'], correctIndex: 1, explanation: 'Employers must provide safety information, training, supervision, and a safe physical environment under OHSA.' },
                        { id: 'q1-6', question: 'Before performing a chemical service, a client must provide:', options: ['Proof of identity', 'Informed consent after being told about the procedure, products, and risks', 'A written contract', 'Their complete medical history'], correctIndex: 1, explanation: 'Informed consent means the client voluntarily agrees after being fully informed. This is an ethical and legal requirement before any chemical or potentially risky service.' },
                        { id: 'q1-7', question: "What signal word on a WHMIS label indicates a MORE severe hazard?", options: ['Caution', 'Warning', 'Danger', 'Notice'], correctIndex: 2, explanation: "Under WHMIS 2015 (GHS), 'DANGER' is used for more severe hazards and 'WARNING' for less severe hazards. There are only two signal words." },
                        { id: 'q1-8', question: 'A hairstylist notices a client has a scalp rash that may be a fungal infection. The appropriate action is to:', options: ['Apply a medicated shampoo and proceed with the service', 'Refer the client to a physician and decline the service until cleared', 'Complete the service carefully to avoid the affected area', 'Ask the client if they have a diagnosis'], correctIndex: 1, explanation: 'Performing a service on a potentially contagious or medically compromised scalp violates scope of practice, could spread infection, and may harm the client.' },
                    ],
                },

                // ─── CHAPTER 2 ────────────────────────────────────────────────────────
                {
                    id: 'ch-2',
                    number: 2,
                    title: 'Health and Safety',
                    subtitle: 'S1732 — Microbiology, decontamination levels, disinfectants, electrical safety, ergonomics',
                    isFree: true,
                    estimatedMinutes: 35,
                    sections: [
                        {
                            id: 's2-1',
                            title: '2.1 Microbiology Fundamentals',
                            content: [
                                { type: 'paragraph', text: 'A hairstylist works in close physical proximity to clients and handles tools that contact skin and hair. Understanding microbiology helps prevent the spread of infection.' },
                                { type: 'keyTerm', term: 'Microorganism', definition: 'A living organism too small to be seen with the naked eye — includes bacteria, viruses, fungi, and parasites' },
                                { type: 'keyTerm', term: 'Pathogenic', definition: 'Capable of causing disease or infection — the pathogens of concern in a salon are bacteria, viruses, fungi, and parasites' },
                                { type: 'keyTerm', term: 'Non-pathogenic', definition: 'Not capable of causing disease under normal circumstances — most microorganisms are non-pathogenic' },
                                {
                                    type: 'table', headers: ['Microorganism Type', 'Description', 'Salon Examples'], rows: [
                                        ['Bacteria (pathogenic)', 'Single-celled organisms; can be killed by disinfectants in active stage; some form spores', 'Staphylococcus (skin infections), MRSA, Streptococcus'],
                                        ['Virus', 'Requires a host cell to replicate; much smaller than bacteria; not affected by antibiotics', 'Hepatitis B, HIV, HPV, common cold, COVID-19'],
                                        ['Fungi', 'Includes molds, yeasts, and dermatophytes (ringworm)', 'Tinea capitis (scalp ringworm), tinea pedis (athlete\'s foot)'],
                                        ['Parasite', 'Lives on or inside a host organism at the host\'s expense', 'Pediculosis capitis (head lice), Sarcoptes scabiei (scabies)'],
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Bacteria Shape', 'Name', 'Example'], rows: [
                                        ['Spherical / round', 'Cocci', 'Staphylococcus aureus (staph infections)'],
                                        ['Rod-shaped', 'Bacilli', 'Mycobacterium tuberculosis (TB)'],
                                        ['Spiral / corkscrew', 'Spirilla', 'Treponema pallidum (syphilis)'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Bacteria can exist in two stages:' },
                                {
                                    type: 'bullets', items: [
                                        'Active (vegetative) stage: bacteria grow and reproduce; they are vulnerable to disinfectants at this stage',
                                        'Inactive (spore-forming) stage: when conditions are unfavorable, some bacteria form thick protective coatings called endospores. Spores are highly resistant to most disinfectants and heat — only sterilization can destroy them',
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'Transmission Routes in the Salon', items: [
                                        'DIRECT CONTACT — touching infected skin, blood, or body fluids (e.g., cutting a client with a nick)',
                                        'INDIRECT CONTACT — sharing contaminated tools, towels, or surfaces',
                                        'AIRBORNE — inhaling droplets from coughing, sneezing, or aerosol sprays',
                                        'BLOOD-BORNE — hepatitis B, hepatitis C, and HIV can be transmitted through blood contact',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's2-2',
                            title: '2.2 Sanitation, Disinfection, and Sterilization',
                            content: [
                                {
                                    type: 'infoBox', title: 'Three Levels of Decontamination — In Order of Effectiveness', items: [
                                        '1. SANITATION — Lowest level. Reduces the number of pathogens to a safe level; removes visible debris. Example: washing implements with soap and water, laundering towels.',
                                        '2. DISINFECTION — Middle level. Kills most pathogens (bacteria, viruses, fungi) on non-living surfaces. Does NOT kill all spores. Required for salon tools. Examples: Quats, phenolics, bleach solution.',
                                        '3. STERILIZATION — Highest level. Destroys ALL microorganisms including bacterial spores. Required for medical/surgical instruments. Achieved with autoclaves (steam under pressure). Rarely used in salons.',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Disinfectant', 'Active Ingredient', 'Use In Salon', 'Limitations'], rows: [
                                        ['Quats (Quaternary Ammonium Compounds)', 'Quaternary ammonium salts', 'Most common salon disinfectant; implements, surfaces, bowls', 'May not kill all viruses at low concentrations; can leave residue'],
                                        ['Phenolics', 'Phenol-based compounds', 'Broad-spectrum; surfaces and implements', 'Can damage plastic/rubber with prolonged use; strong odour'],
                                        ['Bleach (sodium hypochlorite)', '1:10 dilution (10%)', 'Blood/body fluid spills; surfaces', 'Corrosive to metal; degrades rapidly; must be freshly mixed daily'],
                                        ['Isopropyl alcohol (70%)', '70% isopropyl alcohol', 'Skin, small metal tools, surfaces', 'Evaporates quickly; NOT for immersion; flammable'],
                                        ['EPA/Health Canada-registered disinfectant', 'Varies by product', 'Any Health Canada DIN-registered product', 'Must follow label directions precisely for efficacy'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Proper disinfection procedure for salon implements:' },
                                {
                                    type: 'numbered', items: [
                                        'PRE-CLEAN — remove all visible debris with soap and water (essential step — disinfectants cannot penetrate through organic matter)',
                                        'RINSE — rinse with clean water',
                                        'IMMERSE OR WIPE — immerse in disinfectant solution for required contact time (follow product label), or wipe with disinfectant wipe',
                                        'RINSE (if required by label)',
                                        'DRY — store in a clean, closed, dry container',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Item / Surface', 'Proper Decontamination Method'], rows: [
                                        ['Scissors, combs, clips', 'Pre-clean → immerse in disinfectant for full contact time'],
                                        ['Electric clippers', 'Remove hair → spray/wipe blade with disinfectant spray — do NOT immerse'],
                                        ['Curling irons / flat irons', 'Cool completely → wipe with disinfectant wipe — do NOT immerse or spray near electrical connections'],
                                        ['Shampoo bowls and chairs', 'Spray with disinfectant after each client; wipe down thoroughly'],
                                        ['Towels and capes', 'Launder with hot water and detergent between every client; store clean towels in closed cabinet'],
                                        ['Razor blades', 'Single-use only — dispose in a puncture-proof sharps container after each client'],
                                        ['Neck strips and cotton', 'Disposable — use once and discard in closed waste receptacle'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Contact time', definition: 'The amount of time a disinfectant must remain in contact with a surface or implement to be effective — must follow the product label exactly; wiping off too soon renders the disinfectant ineffective' },
                            ],
                        },
                        {
                            id: 's2-3',
                            title: '2.3 Electrical Safety in the Salon',
                            content: [
                                {
                                    type: 'table', headers: ['Electrical Term', 'Definition', 'Salon Relevance'], rows: [
                                        ['Voltage (V)', 'The electrical pressure pushing current through a circuit', 'Standard North American outlets: 120V; high-powered tools may need 240V'],
                                        ['Amperage / Current (A)', 'The volume/quantity of electrical flow', 'Too much amperage causes overheating and fires; circuit breakers protect against this'],
                                        ['Wattage (W)', 'The rate of energy consumption; W = V × A', 'Blow dryers: 1500–2000W; curling irons: 40–100W'],
                                        ['Resistance (Ω)', 'Opposition to electrical flow; generates heat', 'Damaged cords have increased resistance and can cause overheating/fire'],
                                        ['Ground (earth)', 'A safety pathway for excess electricity', 'Three-prong plugs are grounded — always use three-prong outlets'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Electrical safety rules that every hairstylist must follow:' },
                                {
                                    type: 'bullets', items: [
                                        'Never use electrical appliances near water — electrical appliances near sinks or shampoo areas must be kept away from water sources',
                                        'Inspect cords regularly — frayed, cracked, or pinched cords are a fire and shock hazard; report and replace immediately',
                                        'Never overload outlets — use surge-protected power bars; do not daisy-chain extension cords',
                                        'Store thermal appliances properly — always place curling irons and flat irons in designated heat-resistant holders; never lay on towels or surfaces',
                                        'Keep filters clean — blow dryer and hood dryer lint filters must be cleaned regularly to prevent overheating fires',
                                        'Unplug when not in use — reduces fire risk and energy consumption',
                                        'Never modify equipment — do not remove grounding pins or override safety features',
                                        'Follow manufacturer specifications — use tools at specified temperature/voltage settings only',
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'Emergency Response — Electrical Incidents', items: [
                                        'ELECTRICAL SHOCK: Do NOT touch the person — you risk electrocution. Cut power at the breaker first, then call 911, then provide first aid',
                                        'ELECTRICAL FIRE: Do NOT use water on an electrical fire — use a Class C (CO₂ or dry chemical) fire extinguisher. Evacuate first if fire is spreading.',
                                        'DAMAGED CORD/SPARKING OUTLET: Immediately unplug (from breaker if unsafe to touch plug), do not use until repaired by a qualified electrician',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's2-4',
                            title: '2.4 Emergency Procedures and First Aid',
                            content: [
                                { type: 'paragraph', text: 'Every salon must have a clear emergency response plan and all staff must know it.' },
                                {
                                    type: 'table', headers: ['Emergency', 'Correct Response'], rows: [
                                        ['Chemical burn / skin contact', 'Flush with cool running water for 15–20 minutes; remove contaminated clothing; seek medical attention if reaction persists or is severe'],
                                        ['Chemical in eyes', 'Flush immediately with water for 15+ minutes from the inner corner outward; call 911 if vision is affected; bring SDS to the hospital'],
                                        ['Allergic reaction (mild)', 'Stop the service; remove product; rinse with cool water; document and monitor; refer to physician'],
                                        ['Anaphylaxis (severe allergic reaction)', 'Call 911 immediately; use epinephrine auto-injector (EpiPen) if available and trained; lay client flat with legs elevated; do NOT give anything by mouth'],
                                        ['Fire', 'Activate fire alarm; evacuate all clients and staff; call 911 from outside; use fire extinguisher (PASS method) only if safe and trained'],
                                        ['Accidental cut / bleeding', 'Apply direct pressure with clean cloth; wear gloves; treat as potentially blood-borne; follow blood exposure protocol'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'PASS method (fire extinguisher)', definition: 'Pull the pin → Aim at the base of the fire → Squeeze the handle → Sweep side to side at the base' },
                                {
                                    type: 'bullets', items: [
                                        'Know the location of all first aid kits, fire extinguishers, and eyewash stations',
                                        'Post emergency numbers (911, Poison Control: 1-800-268-9017) in a visible location',
                                        'Complete Workplace Emergency Response Training as required by your employer',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's2-5',
                            title: '2.5 Personal Hygiene, Health, and Ergonomics',
                            content: [
                                { type: 'paragraph', text: 'Hairstyling is physically demanding. Musculoskeletal injuries are one of the most common occupational health concerns in the trade — preventable with proper ergonomics and self-care.' },
                                { type: 'keyTerm', term: 'Ergonomics', definition: "The science of designing the work environment and work practices to fit the worker's physical and cognitive needs — reducing injury risk and improving efficiency" },
                                {
                                    type: 'table', headers: ['Body Area at Risk', 'Common Issue', 'Prevention Strategy'], rows: [
                                        ['Back / spine', 'Lumbar strain from prolonged standing and bending', 'Stand with weight evenly distributed; adjust chair height for each client; take stretch breaks'],
                                        ['Wrists / hands', 'Repetitive strain injury (RSI), carpal tunnel syndrome', 'Keep wrists neutral when cutting; use lightweight shears; stretch between clients'],
                                        ['Shoulders / neck', 'Tension and strain from overhead work and poor posture', 'Keep elbows close to body; adjust client height; alternate between services'],
                                        ['Feet and legs', 'Fatigue, varicose veins, plantar fasciitis', 'Wear supportive anti-fatigue shoes; use anti-fatigue mats; vary your standing position'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Personal hygiene standards required in the salon:' },
                                {
                                    type: 'bullets', items: [
                                        'Daily bathing/showering and clean hair at all times',
                                        'Clean, trimmed, and unpolished or neatly polished nails (long nails impair scissor grip and can scratch clients)',
                                        'Clean professional attire laundered regularly — avoid strong perfumes/colognes that may trigger client sensitivities',
                                        'Use deodorant — physical closeness with clients requires fresh, neutral presentation',
                                        'No smoking odour on clothing, hair, or breath during service',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q2-1', question: 'What is the HIGHEST level of decontamination?', options: ['Sanitation', 'Disinfection', 'Sterilization', 'Fumigation'], correctIndex: 2, explanation: 'Sterilization destroys ALL microorganisms including resistant bacterial spores. It is the highest level. Autoclaves (pressurized steam) achieve sterilization. Disinfection kills most pathogens but not all spores.' },
                        { id: 'q2-2', question: 'Which bacteria form thick, protective coatings to survive unfavorable conditions?', options: ['Cocci in active stage', 'Bacilli in active stage', 'Spore-forming bacteria in inactive stage', 'Spirilla at all stages'], correctIndex: 2, explanation: 'Bacterial endospores are formed in the inactive stage. They are highly resistant to most disinfectants and heat. Only sterilization can destroy them.' },
                        { id: 'q2-3', question: 'Blood has contaminated a hairstylist\'s cape. The correct disposal method is:', options: ['Place it in the regular trash', 'Launder it with other capes at high heat', 'Double-bag in a biohazard bag and follow local regulations', 'Soak in quaternary ammonium solution for 24 hours'], correctIndex: 2, explanation: 'Items contaminated with blood must be handled as biohazardous waste. Double-bagging and proper regulated disposal protects staff and waste handlers from blood-borne pathogens.' },
                        { id: 'q2-4', question: 'Which disinfectant should NOT be used to immerse metal implements because it corrodes metal?', options: ['Quaternary ammonium compounds', 'Phenolics', 'Bleach (sodium hypochlorite)', '70% isopropyl alcohol'], correctIndex: 2, explanation: 'Bleach (sodium hypochlorite) is highly corrosive to metal implements and will cause pitting, dulling, and rusting with prolonged exposure.' },
                        { id: 'q2-5', question: 'The FIRST step in disinfecting a pair of scissors between clients is:', options: ['Immerse in disinfectant solution for the required contact time', 'Wipe with an alcohol wipe', 'Remove all visible debris with soap and water (pre-clean)', 'Rinse with hot water'], correctIndex: 2, explanation: 'Pre-cleaning to remove all visible organic matter (hair, debris) MUST happen before disinfection. Disinfectants cannot penetrate through organic matter and will be ineffective if this step is skipped.' },
                        { id: 'q2-6', question: 'A hairstylist discovers a client has pediculosis capitis (head lice). The correct action is:', options: ['Apply a medicated shampoo and complete the service', 'Refuse the service and refer the client to a physician', 'Drape extra towels and complete the haircut only', 'Use disposable gloves and proceed with the service'], correctIndex: 1, explanation: 'Head lice are parasites that spread easily in a salon. The service must be refused, the client referred for treatment, and all implements and linens must be thoroughly cleaned and disinfected.' },
                        { id: 'q2-7', question: 'The correct response when a client gets hair dye in their eye is:', options: ['Apply a neutralizing shampoo to the eye', 'Flush the eye with water for 15 or more minutes', 'Place a cool cloth over the closed eye', 'Rinse with a 1:10 bleach solution'], correctIndex: 1, explanation: 'Chemical exposure to eyes requires immediate, prolonged flushing with clean water for a minimum of 15 minutes. Medical attention should follow.' },
                        { id: 'q2-8', question: 'Which muscle disorder is common among hairstylists due to repetitive gripping and wrist movement?', options: ['Plantar fasciitis', 'Lumbar disc herniation', 'Carpal tunnel syndrome', 'Rotator cuff tear'], correctIndex: 2, explanation: 'Carpal tunnel syndrome results from repetitive hand/wrist motions and sustained gripping — both very common in hairstyling. Ergonomic shears, neutral wrist position, and stretch breaks help prevent it.' },
                    ],
                },

                // ─── CHAPTER 3 ────────────────────────────────────────────────────────
                {
                    id: 'ch-3',
                    number: 3,
                    title: 'Entrepreneurial Skills and Business Operations',
                    subtitle: 'S1733 & S1741 — Client service, financial management, communication, and salon business models',
                    isFree: false,
                    estimatedMinutes: 30,
                    sections: [
                        {
                            id: 's3-1',
                            title: '3.1 The Hairstylist\'s Roles and Responsibilities',
                            content: [
                                { type: 'paragraph', text: 'Understanding the legal framework that governs employment and apprenticeship in Ontario is essential for all hairstylists.' },
                                { type: 'keyTerm', term: 'Apprenticeship training agreement', definition: 'A legal document between an apprentice and their employer/sponsor, registered with the Ontario College of Trades, outlining training obligations, wages, and duration' },
                                { type: 'keyTerm', term: 'Training Standard', definition: 'The official document published by Skilled Trades Ontario that defines all the competencies (knowledge and skills) required to achieve certification in a trade' },
                                { type: 'keyTerm', term: 'National Occupational Analysis (NOA)', definition: 'A national document produced by the Canadian Council of Directors of Apprenticeship (CCDA) that identifies and standardizes the skills, knowledge, and competencies of a trade across Canada — used as the basis for Red Seal examinations' },
                                {
                                    type: 'table', headers: ['Legislation / Body', 'What It Governs'], rows: [
                                        ['Ontario College of Trades and Apprenticeship Act', 'Establishes the College of Trades; governs trade regulation and apprenticeship in Ontario'],
                                        ['Employment Standards Act (ESA)', 'Minimum wage, hours of work, overtime, vacation pay, public holidays, termination notice, parental leave'],
                                        ['Occupational Health and Safety Act (OHSA)', 'Workplace safety obligations for employers and employees'],
                                        ['Human Rights Code (Ontario)', 'Prohibits discrimination in employment and services'],
                                        ['Workplace Safety and Insurance Act (WSIA)', 'Workplace injury insurance and compensation (WSIB)'],
                                        ['Personal Information Protection and Electronic Documents Act (PIPEDA)', 'Privacy of client records and personal information'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's3-2',
                            title: '3.2 Customer Service Excellence',
                            content: [
                                { type: 'paragraph', text: 'Outstanding client service is the foundation of a successful hairstyling career. Technical skill alone does not build a loyal clientele — the client experience does.' },
                                {
                                    type: 'table', headers: ['Stage of Client Visit', 'Professional Service Standard'], rows: [
                                        ['Arrival / Greeting', 'Acknowledge client within 30 seconds; greet by name if known; offer refreshment; introduce yourself if first visit'],
                                        ['Consultation', 'Give full attention; ask open-ended questions; listen actively; confirm the service plan before proceeding'],
                                        ['Service', 'Work efficiently and confidently; update the client on progress; check for comfort (temperature, pressure, positioning)'],
                                        ['Completion', 'Show the finished result from multiple angles; recommend homecare products; explain styling technique used'],
                                        ['Checkout', 'Process payment accurately; pre-book next appointment; thank the client by name; invite them to return'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Pre-booking', definition: "The practice of scheduling the client's next appointment before they leave the salon — the single most effective retention strategy; increases client lifetime value and predictable income" },
                                { type: 'keyTerm', term: 'Upselling', definition: 'Recommending a higher-value service or upgraded product that will better meet the client\'s needs — must be genuine and benefit-focused, never pressure-based' },
                                { type: 'keyTerm', term: 'Retail recommendation', definition: 'Suggesting specific professional retail products that address the client\'s hair needs — an ethical and effective way to extend the client\'s experience beyond the salon' },
                                { type: 'paragraph', text: 'Handling client complaints professionally:' },
                                {
                                    type: 'bullets', items: [
                                        'Listen fully without interrupting or becoming defensive',
                                        'Acknowledge the client\'s feelings — "I understand your concern, and I want to make this right"',
                                        'Offer a concrete solution (redo service, partial refund, complimentary treatment)',
                                        'Document the complaint and outcome on the client record',
                                        'Follow up by phone or text to ensure satisfaction',
                                        'Use complaints as learning opportunities to improve your practice',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's3-3',
                            title: '3.3 Financial Operations in the Salon',
                            content: [
                                {
                                    type: 'bullets', items: [
                                        'Maintain and balance a float (the starting cash in the till at the beginning of each shift)',
                                        'Process credit, debit, e-transfer, and cash transactions accurately',
                                        'Issue correct receipts for every transaction',
                                        'Reconcile end-of-day sales against the appointment book and receipts',
                                        'Track retail sales separately from service sales for accurate inventory management',
                                        'Document all services performed on the client record card (date, service, products used, price)',
                                    ]
                                },
                                { type: 'keyTerm', term: 'Float', definition: 'A set amount of cash kept in the till at the start of each business day to enable making change — must be balanced at the start and end of every shift' },
                                { type: 'paragraph', text: 'Cancellation and no-show policies protect salon revenue:' },
                                {
                                    type: 'bullets', items: [
                                        'A standard cancellation policy typically requires 24–48 hours notice',
                                        'Credit card deposits or fees for late cancellations are industry standard',
                                        'No-show fees may be charged for clients who do not appear and do not call',
                                        'Consistent, professional enforcement of the policy is key',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's3-4',
                            title: '3.4 Communication Skills for Hairstylists',
                            content: [
                                {
                                    type: 'table', headers: ['Communication Skill', 'Application in the Salon'], rows: [
                                        ['Active listening', 'Give full attention; maintain eye contact; do not interrupt; paraphrase to confirm understanding'],
                                        ['Open-ended questions', "Invite the client to describe their wishes: 'Tell me about your ideal style' or 'What do you love and what would you change?'"],
                                        ['Closed-ended questions', "Use to confirm specific details: 'Did you say you wanted the length to stay at your shoulders?' — yes/no answer"],
                                        ['Non-verbal cues', 'Maintain open, confident posture; smile; nod to show engagement; mirror the client\'s energy level appropriately'],
                                        ['Vocabulary alignment', 'Use language the client understands; avoid technical jargon without explanation'],
                                        ['Managing expectations', 'Be honest about what is achievable in one visit; show photos of realistic results; explain any limitations'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Consultation', definition: 'A structured conversation held before every service to assess the client\'s hair condition, understand their goals, discuss realistic outcomes, and obtain informed consent — the most important step in any service' },
                            ],
                        },
                        {
                            id: 's3-5',
                            title: '3.5 Salon Business Models and Career Paths',
                            content: [
                                {
                                    type: 'table', headers: ['Business Model', 'Description', 'Financial Structure'], rows: [
                                        ['Employee', 'Work for the salon owner on a scheduled basis', 'Receives hourly wage or salary; employer pays CPP, EI, overhead, products'],
                                        ['Commission-based', 'Employed by salon; paid a percentage of services performed', 'Typically 40–60% commission on services; employer provides all overhead'],
                                        ['Booth rental', 'Rents a station/chair from salon owner; operates independently', 'Pays fixed rent to salon owner; keeps all service and retail revenue; pays own product and supply costs; self-employed'],
                                        ['Salon owner', 'Owns and manages the salon business', 'Revenue from all services and retail minus all operating costs (rent, staff, products, insurance, utilities, etc.)'],
                                        ['Mobile / independent contractor', 'Travels to clients or works without a fixed location', 'Sets own rates; responsible for all expenses and tax obligations'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Advanced marketing and client retention (Level 2):' },
                                {
                                    type: 'bullets', items: [
                                        'Social media presence: post high-quality before/after photos (with client consent) on Instagram, TikTok, and Pinterest',
                                        'Google Business Profile: manage your listing; respond to all reviews professionally',
                                        'Referral programs: reward existing clients with discounts for referring new clients',
                                        'Email and text marketing: appointment reminders, seasonal promotions, birthday offers',
                                        'Loyalty programs: punch cards or digital rewards for repeat clients',
                                        'Photography: build a strong portfolio of your work for marketing and education',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q3-1', question: 'Which of the following is an example of pre-booking?', options: ['Calling a client a week after their appointment', 'Encouraging a client to book their next appointment before leaving', 'Accepting walk-in clients', 'Booking multiple clients for the same time slot'], correctIndex: 1, explanation: 'Pre-booking — scheduling the next appointment at the end of the current visit — is the single most effective client retention strategy and provides predictable income for the stylist.' },
                        { id: 'q3-2', question: 'A hairstylist rents a chair from the salon owner, keeps all earnings, and pays for their own supplies. This model is called:', options: ['Commission-based employment', 'Booth rental', 'Salary employment', 'Franchise ownership'], correctIndex: 1, explanation: 'Booth rental means the stylist pays rent to the salon owner and operates as a self-employed independent contractor, keeping all revenue and covering all personal business expenses.' },
                        { id: 'q3-3', question: 'Under the Privacy Act (PIPEDA), client records should be:', options: ['Posted in the salon for transparency', 'Kept confidential and accessible only to authorized staff', 'Shared freely among all salon stylists', 'Destroyed after each visit to protect client privacy'], correctIndex: 1, explanation: 'PIPEDA requires that personal information be collected for a stated purpose, kept accurate, and protected from unauthorized access. Client records must be confidential.' },
                        { id: 'q3-4', question: 'Which legislation governs minimum wage, overtime, and vacation pay for salon employees in Ontario?', options: ['Occupational Health and Safety Act (OHSA)', 'Ontario College of Trades and Apprenticeship Act', 'Employment Standards Act (ESA)', 'Human Rights Code'], correctIndex: 2, explanation: 'The Employment Standards Act (ESA) sets minimum employment standards in Ontario including minimum wage, maximum hours, overtime pay, vacation, and public holidays.' },
                        { id: 'q3-5', question: 'During a client consultation, the BEST type of question to gather detailed information is:', options: ['Closed-ended (yes/no)', 'Leading questions', 'Open-ended questions', 'Rhetorical questions'], correctIndex: 2, explanation: "Open-ended questions like 'Tell me about your current routine' encourage clients to describe their needs in detail, giving the stylist the information needed to plan the service." },
                        { id: 'q3-6', question: 'A client complains that their colour result was not what they expected. The FIRST step is to:', options: ['Offer a full refund immediately', 'Ask the client to come back and see the manager', 'Listen fully to the concern without interrupting, then acknowledge their feelings', 'Explain why the result is correct'], correctIndex: 2, explanation: 'The first step in complaint resolution is always to listen fully and acknowledge the client\'s feelings without becoming defensive. This de-escalates the situation and demonstrates genuine care.' },
                    ],
                },

                // ─── CHAPTER 4 ────────────────────────────────────────────────────────
                {
                    id: 'ch-4',
                    number: 4,
                    title: 'Professional Development',
                    subtitle: 'S1734 — Professional image, SMART goals, continuing education, and trends research',
                    isFree: false,
                    estimatedMinutes: 20,
                    sections: [
                        {
                            id: 's4-1',
                            title: '4.1 Building and Maintaining Your Professional Image',
                            content: [
                                { type: 'keyTerm', term: 'Professional image', definition: 'The totality of the impression you create through your appearance, attitude, communication, technical skill, and ongoing conduct — your personal brand as a hairstylist' },
                                { type: 'paragraph', text: 'Your professional image is communicated in every interaction — before you speak a word. It includes your personal grooming, attire, posture, language, attitude, and the quality of your work. In a service industry built on aesthetics and trust, your personal presentation is your marketing.' },
                                {
                                    type: 'table', headers: ['Dimension', 'Professional Standard'], rows: [
                                        ['Personal grooming', 'Clean, well-styled hair; clean nails; professional makeup if worn; neutral, non-offensive fragrance'],
                                        ['Attire', 'Clean, stylish, and consistent with salon branding; functional (allows full range of movement); closed-toe shoes'],
                                        ['Language', 'Speak clearly and professionally; avoid profanity, slang, or gossip; be positive and solution-focused'],
                                        ['Attitude', 'Approach every client with genuine enthusiasm; maintain positivity even on difficult days; model the professionalism you expect from others'],
                                        ['Portfolio', 'Maintain a curated portfolio of your best work (with client consent) for marketing and education'],
                                        ['Punctuality', 'Arrive on time or early; communicate proactively if delayed; respect client and colleague time'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Personal brand', definition: 'The unique combination of skills, appearance, personality, and values that defines who you are as a professional and distinguishes you in the marketplace' },
                            ],
                        },
                        {
                            id: 's4-2',
                            title: '4.2 SMART Goal Setting for Career Growth',
                            content: [
                                { type: 'paragraph', text: 'Goal setting is a critical professional skill. The SMART framework transforms vague ambitions into actionable, achievable plans.' },
                                {
                                    type: 'table', headers: ['Letter', 'Meaning', 'Example for a Hairstylist'], rows: [
                                        ['S', 'Specific — clearly define exactly what you want to achieve', '"Build my balayage technique to a professional level"'],
                                        ['M', 'Measurable — identify a concrete way to measure success', '"Complete 10 balayage services per month"'],
                                        ['A', 'Achievable — realistic given your current skills, time, and resources', '"Practice on models twice per week"'],
                                        ['R', 'Relevant — aligned with your broader career goals and values', '"Balayage is the most-requested colour service in my market"'],
                                        ['T', 'Time-bound — set a specific deadline', '"Within 3 months of this certification"'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Career goals for hairstylists:' },
                                {
                                    type: 'bullets', items: [
                                        'Short-term (0–1 year): pass the STO certification exam; master a new technique; build clientele to 30+ regulars',
                                        'Medium-term (1–3 years): specialize in a service area; achieve full-time income from hairstyling; mentor apprentices',
                                        'Long-term (3–5+ years): open a salon; teach at a vocational college; compete at provincial or national level; become a brand educator',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's4-3',
                            title: '4.3 Continuing Education and Industry Trends',
                            content: [
                                { type: 'paragraph', text: 'The beauty industry evolves constantly. Hairstylists who stop learning quickly become outdated. Ongoing education is both an ethical obligation (competency) and a business necessity.' },
                                {
                                    type: 'table', headers: ['Education Pathway', 'Description / Access'], rows: [
                                        ['Trade shows and expos', 'International Beauty Show (New York), Premiere Orlando, Salon International (London) — hands-on demos, new products, competitions'],
                                        ['Manufacturer education', 'Wella, Redken, L\'Oréal, Schwarzkopf, Kerastase, Olaplex — product-specific technique training, often free or low-cost'],
                                        ['Advanced certifications', 'Balayage certification, extensions certification, precision cutting workshops, barbering cross-training'],
                                        ['Online platforms', 'Bangstyle, BTC (Behind The Chair), Sam Villa Education, YouTube masterclasses, Instagram Lives'],
                                        ['Professional associations', 'Ontario Cosmetology Association, Canadian Cosmetology Guild — networking, advocacy, continuing education'],
                                        ['Competitions', 'Local, provincial, national hair competitions — refine technical skills and build portfolio'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Staying current with trends requires active research:' },
                                {
                                    type: 'bullets', items: [
                                        'Follow key educators and stylists on Instagram, TikTok, and YouTube',
                                        'Subscribe to trade publications (Salon Magazine, HairBrained, Modern Salon)',
                                        'Watch fashion week coverage for emerging colour, cut, and style directions',
                                        'Practice new techniques on mannequins before introducing to clients',
                                        'Attend at minimum one trade event or manufacturer training per year',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q4-1', question: "A hairstylist sets a goal: 'Add 10 new regular clients within 6 months by attending 2 networking events per month.' This is an example of:", options: ['A vague aspiration', 'A SMART goal', 'A long-term vision statement', 'A mission statement'], correctIndex: 1, explanation: 'This goal is Specific (10 new clients), Measurable (trackable), Achievable (networking events), Relevant (career growth), and Time-bound (6 months).' },
                        { id: 'q4-2', question: 'Which of the following BEST represents comprehensive ongoing professional development for a hairstylist?', options: ['Relying only on techniques learned during apprenticeship', 'Attending trade shows, manufacturer training, and following industry publications', 'Only practicing techniques requested by existing clients', 'Watching one tutorial video per year'], correctIndex: 1, explanation: 'Professional development requires multiple channels: hands-on training (shows, workshops), product knowledge (manufacturer education), and staying current (publications, social media).' },
                        { id: 'q4-3', question: 'Which organization publishes the National Occupational Analysis (NOA) for hairstylists?', options: ['Skilled Trades Ontario', 'Ontario College of Trades', 'Canadian Council of Directors of Apprenticeship (CCDA)', 'Ontario Ministry of Education'], correctIndex: 2, explanation: 'The NOA is published by the CCDA and defines the skills and knowledge of a trade at the national level. It forms the basis for the Red Seal Interprovincial Standards Program.' },
                        { id: 'q4-4', question: 'Which of the following is an example of a SHORT-TERM career goal for a newly certified hairstylist?', options: ['Opening their own salon', 'Teaching at a cosmetology college', 'Building clientele to 30 regular clients within one year', 'Becoming a national brand educator'], correctIndex: 2, explanation: 'Building a regular clientele is a realistic, measurable short-term goal achievable within the first year of practice. The other options are long-term goals requiring years of experience.' },
                    ],
                },
            ],
        },

        // =========================================================================
        // PART 2 — HAIR & SCALP SCIENCE
        // =========================================================================
        {
            id: 'part-2',
            title: 'Part 2: Hair & Scalp Science',
            color: '#17A589',
            description: 'Chapters 5–6 build the scientific foundation for understanding hair structure, chemistry, and scalp health — essential context for every technical service.',
            chapters: [

                // ─── CHAPTER 5 ────────────────────────────────────────────────────────
                {
                    id: 'ch-5',
                    number: 5,
                    title: 'Client Service, Anatomy, and Hair Science',
                    subtitle: 'S1735 — Consultation, head anatomy, hair/skin structure, growth cycle, and hair properties',
                    isFree: false,
                    estimatedMinutes: 35,
                    sections: [
                        {
                            id: 's5-1',
                            title: '5.1 The Client Consultation Process',
                            content: [
                                { type: 'paragraph', text: 'The consultation is the most critical step in any service. It establishes trust, ensures safety, sets realistic expectations, and forms the legal basis for informed consent. Never skip or rush the consultation.' },
                                {
                                    type: 'numbered', items: [
                                        'Welcome the client and establish rapport — make them feel comfortable and heard',
                                        'Ask open-ended questions about their desired outcome and lifestyle',
                                        'Visually and manually analyze hair and scalp condition (texture, density, porosity, elasticity, growth pattern)',
                                        'Consider lifestyle, maintenance time, budget, and styling ability',
                                        'Review chemical history — previous colour, relaxers, perms, or treatments',
                                        'Perform required pre-tests (patch test 24–48h before chemical services; strand test)',
                                        'Recommend and confirm the service plan — manage expectations honestly',
                                        'Obtain informed consent before beginning',
                                        'Document all findings on the client record card',
                                    ]
                                },
                                { type: 'keyTerm', term: 'Chemical history', definition: 'The complete record of all chemical services a client has had on their hair — colour, bleach, relaxers, perms, keratin treatments — essential for determining safe product selection and preventing incompatibility reactions' },
                                {
                                    type: 'table', headers: ['Consultation Question Type', 'Example', 'Purpose'], rows: [
                                        ['Desired result', "'What are you hoping to achieve today?'", 'Understand the goal without leading the client'],
                                        ['Lifestyle', "'How much time do you spend styling each morning?'", 'Determine maintenance requirements'],
                                        ['Chemical history', "'Have you had any chemical services in the past 12 months?'", 'Identify potential incompatibilities'],
                                        ['Health/sensitivity', "'Do you have any scalp sensitivity or allergies to hair products?'", 'Identify contraindications; determine if patch test is needed'],
                                        ['Inspiration', "'Do you have any photos of styles you love?'", 'Align expectations with realistic outcomes'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's5-2',
                            title: '5.2 Anatomy of the Head and Face',
                            content: [
                                { type: 'paragraph', text: 'Haircutting and styling decisions are guided by the structure of the head and the shape of the face. Understanding anatomy allows hairstylists to enhance natural features and create balanced, flattering results.' },
                                {
                                    type: 'table', headers: ['Reference Point', 'Location', 'Cutting Relevance'], rows: [
                                        ['Crown', 'Highest rounded point of the head', 'Focal point for elevation and layer distribution'],
                                        ['Apex', 'Very peak/top of the crown area', 'Used for radial distribution and upstyle anchor points'],
                                        ['Occipital bone', 'Prominent bone at the back of the skull, where the head curves away', 'Key landmark for establishing back length and layering'],
                                        ['Nape', 'Hairline at the back of the neck', 'Reference for back length; graduation in bobs and tapers'],
                                        ['Parietal ridge', 'Widest point of the head — where the skull begins to curve inward toward the top', 'Weight line reference; determines where to change elevation'],
                                        ['Temporal region', 'Area at the sides of the head above and around the ears', 'Guides sideburn and ear length decisions'],
                                        ['Four corners', 'The four angles where the top section meets the temporal/side sections', 'Used to distribute sections for interior and exterior cuts'],
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Face Shape', 'Characteristics', 'Flattering Approach'], rows: [
                                        ['Oval', 'Balanced proportions; forehead slightly wider than jaw; gently rounded at both ends', 'Most versatile — nearly any style works; considered the ideal shape to work toward'],
                                        ['Round', 'Width and length are nearly equal; soft, circular jawline; full cheeks', 'Add height at crown; keep sides close to head; avoid short, wide styles and center parts'],
                                        ['Square', 'Strong, angular jawline with a wide forehead nearly equal in width; sharp corners', 'Soften with curves, layers, side parts, and wispy fringes; avoid blunt horizontal lines at the jaw'],
                                        ['Oblong / Rectangle', 'Long and narrow; high forehead; long jaw; little width variation', 'Add width with layers, waves, or volume at the sides; avoid height at the crown; side parts work well'],
                                        ['Heart (inverted triangle)', 'Wide forehead and cheekbones; narrow chin', 'Add fullness at or below the jaw; side-swept fringes reduce forehead width; avoid volume at temples'],
                                        ['Diamond', 'Narrow forehead and narrow jaw; widest at cheekbones', 'Add width at forehead (fringe, volume) and at jawline; avoid volume at cheekbones'],
                                        ['Pear (triangle)', 'Narrow forehead; widest at the jaw and chin', 'Add volume and width at the forehead and temples; minimize width and weight at the jaw'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's5-3',
                            title: '5.3 Structure of the Hair Shaft',
                            content: [
                                {
                                    type: 'table', headers: ['Layer', 'Structure', 'Function', 'Chemical Relevance'], rows: [
                                        ['Cuticle', 'Outermost layer; 7–10 layers of overlapping, translucent, scale-like cells (like roof shingles, pointing toward the tip)', 'Protects the cortex; determines shine and smoothness of the surface', 'Alkaline chemicals open the cuticle; acidic products close it. Raised cuticle = dull, porous, frizzy hair'],
                                        ['Cortex', 'Middle layer; makes up 80–90% of the hair structure; composed of elongated protein cells (keratinized fibers) and melanin granules bound by an intermacrofibrillar matrix', 'Provides tensile strength, elasticity, and natural colour; the site of ALL permanent chemical changes', 'ALL colour, perm, and relaxer chemistry happens in the cortex. Disulfide and hydrogen bonds are here.'],
                                        ['Medulla', 'Innermost core; loosely packed cells with air spaces; may be absent or discontinuous, especially in fine hair', 'Exact function unclear; may provide structural support and thermal insulation', 'Not involved in chemical services; its absence or presence does not significantly affect chemical results'],
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Bond Type', 'Location', 'Strength', 'Broken By', 'Re-formed By'], rows: [
                                        ['Disulfide bonds (S-S)', 'Cortex — cross-links between adjacent keratin chains', 'Very strong — major source of hair strength and wave pattern', 'Chemical reducing agents (thio in perms, hydroxide in relaxers)', 'Neutralizer (oxidation) in perms; form lanthionine bonds in relaxers'],
                                        ['Hydrogen bonds', 'Cortex — between peptide chains', 'Weak; highly numerous — collectively provide significant structure', 'Water and heat', 'Drying / cooling — basis for all wet sets and blow-dry styling'],
                                        ['Ionic (salt) bonds', 'Cortex — between oppositely charged side chains', 'Moderate strength; affected by pH changes', 'Extreme pH (very acidic or very alkaline)', 'Returning to normal pH'],
                                        ['Peptide bonds', 'The backbone of each keratin chain itself (not cross-links)', 'Very strong — broken only by strong chemicals or heat', 'Strong reducing agents, severe chemical overprocessing, extreme heat', 'Cannot be naturally re-formed once broken — causes permanent damage'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's5-4',
                            title: '5.4 The Hair Follicle and Skin Layers',
                            content: [
                                { type: 'paragraph', text: 'Hair grows from the follicle — a pocket-shaped structure in the dermis. The health of the follicle determines the health of the hair.' },
                                {
                                    type: 'table', headers: ['Structure', 'Location', 'Function'], rows: [
                                        ['Dermal papilla', 'Base of the follicle', 'Rich in capillaries; delivers blood, oxygen, and nutrients to the growing hair bulb — essential for hair growth'],
                                        ['Hair bulb (matrix)', 'Surrounds the papilla at the base', 'Site of mitosis (active cell division); produces all the cells that will become the hair shaft'],
                                        ['Inner root sheath', 'Inside the follicle, surrounding the hair shaft', 'Guides the hair shaft toward the surface; hardens around the hair to protect it'],
                                        ['Outer root sheath', 'Forms the wall of the follicle', 'Continuous with the epidermis; provides structural support for the follicle'],
                                        ['Sebaceous gland', 'Attached to the follicle in the dermis', 'Produces sebum — a natural waxy oil that lubricates the hair shaft and scalp surface'],
                                        ['Arrector pili muscle', 'Attached diagonally from the follicle base to the dermis', 'Contracts to make hair stand upright (goosebumps) in response to cold or fear'],
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Skin Layer', 'Contents', 'Function'], rows: [
                                        ['Epidermis (outermost)', 'Multiple sub-layers including the stratum corneum (top), stratum granulosum, stratum spinosum, stratum basale (deepest); contains melanocytes and keratinocytes', 'Provides a physical protective barrier; produces melanin (skin colour); regenerates every ~28 days'],
                                        ['Dermis (middle)', 'Hair follicles, sebaceous glands, sweat glands, blood vessels (capillaries), lymphatic vessels, sensory nerve endings, collagen, and elastin fibers', 'Structural support; supplies nutrients; senses touch, pressure, pain, and temperature; houses hair follicles'],
                                        ['Hypodermis / Subcutaneous (deepest)', 'Adipose (fat) tissue, connective tissue, larger blood vessels', 'Thermal insulation; shock absorption; energy storage; connects skin to underlying muscle and bone'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's5-5',
                            title: '5.5 The Hair Growth Cycle',
                            content: [
                                {
                                    type: 'table', headers: ['Phase', 'Also Called', 'Duration', 'What Happens', '% of Scalp Hair'], rows: [
                                        ['Anagen', 'Growth phase', '2–7 years', 'Active mitosis in the hair bulb; hair grows approximately 1–1.5 cm per month; longer anagen = longer potential hair length', 'Approximately 85–90%'],
                                        ['Catagen', 'Transitional phase', '2–3 weeks', 'Cell division ceases; the hair follicle shrinks and detaches from the dermal papilla; the hair is cut off from its blood supply', 'Approximately 1–2%'],
                                        ['Telogen', 'Resting / shedding phase', '3–4 months', 'The old hair rests near the surface; a new anagen hair begins to form below; the old hair is shed when brushing or washing; normal shedding: 50–100 hairs/day', 'Approximately 10–15%'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Telogen effluvium', definition: 'A temporary form of hair loss where a large number of hairs simultaneously enter the telogen phase and shed — triggered by physical or emotional stress, illness, nutritional deficiency, hormonal changes, or surgery. Hair typically regrows within 3–6 months once the trigger is resolved.' },
                                { type: 'keyTerm', term: 'Androgenetic alopecia', definition: 'Hereditary pattern hair loss caused by sensitivity to DHT (dihydrotestosterone) — the most common form of alopecia. Affects both men and women with characteristic patterns (temple recession and vertex thinning in men; diffuse thinning at the crown in women).' },
                            ],
                        },
                        {
                            id: 's5-6',
                            title: '5.6 Physical Properties of Hair and Pre-Service Testing',
                            content: [
                                {
                                    type: 'table', headers: ['Property', 'Definition', 'How to Test', 'Chemical Service Implication'], rows: [
                                        ['Texture (diameter)', 'Fine, medium, or coarse — the width of individual hair strands', 'Hold a single strand between fingers; compare diameter visually', 'Fine hair: absorbs chemicals faster, can become overprocessed quickly. Coarse hair: may be resistant, needs more processing time'],
                                        ['Density', 'Number of strands per square inch of scalp — sparse, medium, or dense', 'Part the hair and observe how much scalp shows through', 'Dense hair requires more product; sparse hair requires careful product placement to avoid scalp contact'],
                                        ['Porosity', "The hair's ability to absorb and retain moisture — determined by the condition of the cuticle", 'Slide fingers from tip to root along a strand: rough = high porosity; smooth = low', 'Low porosity: resistant to chemical penetration; requires extra processing time. High porosity: absorbs chemicals rapidly but unevenly; may need filler before colour'],
                                        ['Elasticity', 'The ability to stretch when wet and return to original length without breaking', 'Wet a strand; gently stretch; healthy hair stretches ~50% and returns; poor elasticity = breaks or stays stretched', 'Hair with poor elasticity should not receive additional chemical services; damaged cortex cannot support further processing'],
                                        ['Wave/curl pattern', 'Straight (1), wavy (2a/b/c), curly (3a/b/c), coily (4a/b/c)', 'Visual assessment; determined by follicle shape (round = straight; oval to flat = wavy to coily)', 'Curly/coily patterns have more disulfide bonds, making them more responsive to perms and relaxers'],
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'Four Essential Pre-Service Tests', items: [
                                        'PATCH TEST (Predisposition Test) — Apply a small amount of product mixture behind the ear or in the elbow crease; wait 24–48 hours; check for redness, itching, swelling (positive reaction = do NOT proceed with the service)',
                                        'STRAND TEST — Process a small test section with the full chemical service to predict result, timing, and product response before committing to the whole head',
                                        'POROSITY TEST — Slide fingers from tip to root; assess resistance/roughness to determine cuticle condition',
                                        'ELASTICITY TEST — Stretch a single wet strand to assess cortex health before chemical services',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q5-1', question: 'Which layer of the hair shaft is the site of ALL permanent chemical changes including colour, perms, and relaxers?', options: ['Cuticle', 'Cortex', 'Medulla', 'Dermal papilla'], correctIndex: 1, explanation: 'The cortex is the middle layer of the hair shaft. It contains keratin protein fibers, melanin, and all the chemical bonds (disulfide, hydrogen, ionic) that are modified by chemical services.' },
                        { id: 'q5-2', question: "A client's hair stretches when wet but does NOT spring back to its original length. This indicates:", options: ['Low porosity', 'High elasticity', 'Poor elasticity — damaged cortex', 'Normal porosity'], correctIndex: 2, explanation: 'Good elasticity means hair stretches approximately 50% when wet and returns to original length. Hair that stays stretched has a damaged cortex with over-softened or broken disulfide bonds — it should not receive additional chemical services.' },
                        { id: 'q5-3', question: 'Which phase of the hair growth cycle is active, involves cell division, and accounts for approximately 85% of scalp hairs at any time?', options: ['Telogen', 'Catagen', 'Anagen', 'Exogen'], correctIndex: 2, explanation: 'The anagen (growth) phase is active — mitosis occurs in the hair bulb and hair grows ~1–1.5 cm per month. It lasts 2–7 years. 85–90% of scalp hairs are in anagen at any given time.' },
                        { id: 'q5-4', question: 'Before a chemical colour service, which test is performed 24–48 hours in advance to check for allergic reaction?', options: ['Strand test', 'Porosity test', 'Patch (predisposition) test', 'Elasticity test'], correctIndex: 2, explanation: 'The patch test detects potential allergic reactions to PPD (para-phenylenediamine) and other chemicals in oxidative colour. A positive reaction (redness, swelling, itching) is a contraindication.' },
                        { id: 'q5-5', question: 'The parietal ridge is described as:', options: ['The lowest point of the occipital bone', 'The widest area of the head, where it begins to curve inward above the ears', 'The hairline at the nape of the neck', 'The very top/peak of the crown area'], correctIndex: 1, explanation: 'The parietal ridge is the widest point of the head — a critical reference point in haircutting used to determine weight distribution and where elevation changes.' },
                        { id: 'q5-6', question: 'Which of the following bonds is the STRONGEST in the hair and provides its primary structural integrity?', options: ['Hydrogen bonds', 'Ionic (salt) bonds', 'Disulfide bonds', 'Van der Waals forces'], correctIndex: 2, explanation: 'Disulfide bonds (S-S) are the strongest bonds in the hair. They require chemical reducing agents (thio or hydroxide) to break. They provide hair\'s primary strength, elasticity, and wave/curl pattern.' },
                        { id: 'q5-7', question: 'A client has high-porosity hair. How will this affect a colour service?', options: ['The hair will be resistant and need extra processing time', 'The hair will absorb colour very quickly and may become uneven', 'The hair will not absorb colour at all', 'The colour result will be lighter than expected'], correctIndex: 1, explanation: 'High-porosity hair has a raised or damaged cuticle that absorbs products rapidly and unevenly. Colour may process too fast, fade quickly, and appear patchy. A filler or porosity equalizer may be needed.' },
                    ],
                },

                // ─── CHAPTER 6 ────────────────────────────────────────────────────────
                {
                    id: 'ch-6',
                    number: 6,
                    title: 'Preparatory Procedures and Treatments',
                    subtitle: 'S1736 & S1742 — pH chemistry, scalp conditions, draping, shampoo, conditioning, and massage',
                    isFree: false,
                    estimatedMinutes: 25,
                    sections: [
                        {
                            id: 's6-1',
                            title: '6.1 Chemistry Basics — pH, Water, and Hair',
                            content: [
                                { type: 'keyTerm', term: 'pH (Potential of Hydrogen)', definition: 'A scale from 0–14 that measures the concentration of hydrogen ions in a solution. Below 7 = acidic; 7 = neutral; above 7 = alkaline (basic).' },
                                {
                                    type: 'table', headers: ['pH Range', 'Classification', 'Effect on Hair Cuticle', 'Salon Product Examples'], rows: [
                                        ['0–3', 'Strongly acidic', 'Hardens, contracts, and tightens cuticle dramatically', 'Acid perms (pH 4.5–7 by comparison); strong acidic rinses'],
                                        ['3–6.9', 'Mildly to moderately acidic', 'Closes and smooths the cuticle; improves shine', 'Conditioners (pH 3–4.5), colour-safe shampoos, rinses, clarifying shampoos'],
                                        ['4.5–5.5', 'Slightly acidic', 'Normal healthy hair and scalp — cuticle is closed and smooth', 'Healthy hair and scalp pH'],
                                        ['7', 'Neutral', 'Minimal direct effect on cuticle', 'Pure distilled water'],
                                        ['7.1–9.5', 'Mildly to moderately alkaline', 'Opens and swells the cuticle; allows chemical penetration', 'Regular shampoos (pH 7–8), alkaline perms (pH 8–9.5), semi-permanent colour'],
                                        ['9.5–14', 'Strongly alkaline', 'Severely opens and softens cuticle; penetrates to cortex rapidly', 'Sodium hydroxide relaxers (pH 12–14), bleaches'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Water quality affects chemical services:' },
                                {
                                    type: 'bullets', items: [
                                        'Hard water (high calcium and magnesium mineral content) can leave mineral deposits on the hair, interfere with chemical processing, and reduce lather. A chelating/clarifying shampoo should be used before chemical services in areas with hard water.',
                                        'Soft water (low mineral content) lathers easily and rinses cleanly — preferred for chemical services',
                                        'Distilled/purified water (pH 7) is used in the formulation of professional products',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's6-2',
                            title: '6.2 Scalp and Hair Conditions to Identify',
                            content: [
                                { type: 'paragraph', text: 'Every service begins with a visual and manual scalp and hair analysis. Certain conditions are contraindications — services must not be performed. Others require modification of the service approach.' },
                                {
                                    type: 'table', headers: ['Condition', 'Type', 'Description', 'Service Protocol'], rows: [
                                        ['Dandruff — dry type (Pityriasis capitis simplex)', 'Scalp condition', 'Dry, white flakes; no inflammation; scalp may itch', 'Can proceed with service; recommend anti-dandruff shampoo (zinc pyrithione or selenium sulfide)'],
                                        ['Dandruff — oily type (Pityriasis steatoides)', 'Scalp condition', 'Oily yellow flakes stuck to scalp; may be associated with seborrheic dermatitis', 'Can proceed if no broken skin; recommend medicated shampoo; avoid heavy products'],
                                        ['Seborrhea', 'Scalp condition', 'Excessive sebum (oil) production; hair appears greasy quickly', 'Use balancing shampoo; recommend scalp treatments; space services accordingly'],
                                        ['Psoriasis', 'Chronic skin condition', 'Thick, silvery-white scales over red patches; non-contagious; immune-mediated', 'DO NOT perform chemical services if the scalp is broken or actively flaring — risk of product absorption and irritation. Cut and style on unaffected areas only.'],
                                        ['Alopecia areata', 'Hair loss', 'Round, smooth, coin-shaped bald patches; autoimmune — body attacks hair follicles', 'Proceed with services on unaffected areas; refer to dermatologist; avoid traction on affected areas'],
                                        ['Traction alopecia', 'Hair loss', 'Hair loss along the hairline and temples from repeated tight hairstyles (braids, weaves, ponytails)', 'Avoid tight styles on the affected area; recommend loose styles and scalp massage'],
                                        ['Tinea capitis (ringworm)', 'Fungal infection', 'Circular, scaly patches with hair breakage; highly contagious', '⛔ CONTRAINDICATION — refuse all services; refer to physician; thoroughly disinfect all implements and surfaces after client leaves'],
                                        ['Pediculosis capitis (head lice)', 'Parasitic infestation', 'Live lice and/or nits (eggs) attached to hair near scalp; intensely itchy; spreads by direct contact', '⛔ CONTRAINDICATION — refuse all services; refer to pharmacist/physician; bag and wash all linens at 60°C+; inspect and clean all implements'],
                                        ['Folliculitis', 'Bacterial infection', 'Red, inflamed pustules around hair follicles; may be caused by Staphylococcus or other bacteria', '⛔ CONTRAINDICATION — refuse service; refer to physician if widespread'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Contraindication', definition: 'A condition that makes a particular treatment inadvisable or potentially harmful. In hairstyling, contraindications require the hairstylist to refuse the service and refer the client to an appropriate medical professional.' },
                            ],
                        },
                        {
                            id: 's6-3',
                            title: '6.3 Draping Techniques',
                            content: [
                                { type: 'paragraph', text: 'Proper draping protects the client\'s clothing from water, chemicals, and hair clippings. It also demonstrates professionalism and attention to detail.' },
                                {
                                    type: 'table', headers: ['Service Type', 'Draping Procedure'], rows: [
                                        ['Shampoo / Wet service', '1. Tuck neck strip around hairline. 2. Fold client\'s collar inward. 3. Place towel around shoulders, tucked under collar. 4. Place shampoo cape over towel. 5. Secure at nape — not too tight.'],
                                        ['Chemical service (colour, perm, relaxer)', '1. Place chemical cape (plastic/vinyl) directly over clothing — no fabric touching chemicals. 2. Neck strip to protect hairline. 3. Additional towel around the hairline for perms/relaxers to catch drips. 4. Secure firmly but comfortably at nape.'],
                                        ['Haircutting (dry)', '1. Neck strip around hairline. 2. Cutting cape over shoulders. 3. Secure at nape. 4. Check that shoulders are fully covered.'],
                                    ]
                                },
                                {
                                    type: 'bullets', items: [
                                        'Always use a fresh towel and clean cape for each client — never reuse between clients',
                                        'Check client comfort — ask if the cape is too tight or too loose',
                                        'Replace neck strip immediately if it becomes wet',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's6-4',
                            title: '6.4 Shampooing: Products, Techniques, and Scalp Massage',
                            content: [
                                {
                                    type: 'table', headers: ['Shampoo Type', 'Key Ingredients', 'Best Used For'], rows: [
                                        ['Clarifying', 'Sodium lauryl sulfate (SLS), citric acid, chelating agents (EDTA)', 'Remove product buildup, hard water minerals, and excess oils; use before chemical services'],
                                        ['Moisturizing / Hydrating', 'Glycerin, panthenol, hydrolyzed proteins, natural oils', 'Dry, brittle, or chemically processed hair; colour-treated hair'],
                                        ['Volumizing', 'Lightweight surfactants, hydrolyzed wheat or silk proteins', 'Fine, limp hair lacking body and volume'],
                                        ['Colour-safe / Colour-treated', 'Sulfate-free surfactants (sodium lauryl sulfoacetate), pH 4.5–5.5', 'Colour-treated hair — preserves colour vibrancy, prevents fading'],
                                        ['Anti-dandruff / Medicated', 'Zinc pyrithione (ZPT), selenium sulfide, salicylic acid, or ketoconazole', 'Dandruff, seborrheic dermatitis, and scalp conditions'],
                                        ['Balancing', 'Mild amphoteric surfactants, panthenol', 'Normal to oily scalp; maintains natural sebum balance without stripping'],
                                        ['Protein / Strengthening', 'Hydrolyzed keratin, silk proteins, amino acids', 'Damaged, overprocessed, or brittle hair — strengthens and rebuilds'],
                                        ['Baby / Gentle', 'Cocamidopropyl betaine (very mild, tear-free surfactant)', 'Sensitive scalp, fine baby hair, post-chemical service — when minimal stimulation is required'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Proper shampooing technique:' },
                                {
                                    type: 'numbered', items: [
                                        'Check water temperature — always test on your wrist before applying to client (comfortably warm, not hot)',
                                        'Thoroughly wet hair before applying shampoo',
                                        'Dispense shampoo into palm; dilute slightly; distribute through mid-lengths first, then scalp',
                                        'Work into a lather using the pads of fingers (not nails) in circular motions across the entire scalp',
                                        'Rinse thoroughly — all shampoo residue must be removed',
                                        'Repeat if necessary (especially before chemical services)',
                                        'Gently squeeze out excess water before conditioning',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Massage Movement', 'Technique', 'Effect', 'When Used'], rows: [
                                        ['Effleurage', 'Light, slow, gliding strokes with flat palms; smooth, continuous contact', 'Relaxing; soothes the nervous system; improves lymphatic drainage', 'Opening and closing movement of every scalp massage'],
                                        ['Petrissage', 'Firm kneading, circular lifting, and rolling movements with thumbs and fingertips', 'Stimulates blood circulation; invigorates sebaceous glands; loosens scalp tension', 'Main body of scalp massage'],
                                        ['Tapotement', 'Light, brisk tapping or percussion with fingertips', 'Stimulating; increases circulation quickly; increases sensory awareness', 'Optional; used briefly to add stimulation'],
                                        ['Vibration', 'Fine, rapid trembling movements with hands or fingertips', 'Deeply relaxing; reduces muscle tension and nerve sensitivity', 'Closing technique or for clients with chronic scalp tension'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's6-5',
                            title: '6.5 Conditioning: Types, Techniques, and Advanced Treatments',
                            content: [
                                {
                                    type: 'table', headers: ['Conditioner Type', 'How Applied', 'Processing Time', 'Best For'], rows: [
                                        ['Instant / Rinse-out conditioner', 'Apply to mid-lengths and ends; comb through; rinse', '1–5 minutes', 'All hair types after every shampoo; closes cuticle; adds manageability and shine'],
                                        ['Deep conditioning treatment / Masque', 'Apply generously from roots to ends; comb through; apply heat (optional)', '15–30 minutes', 'Dry, damaged, or colour-treated hair; restores moisture and flexibility'],
                                        ['Leave-in conditioner', 'Apply to damp, towel-dried hair; do not rinse', 'Does not rinse out — left in until next shampoo', 'Fine to coarse hair; provides ongoing moisture, detangling, and heat protection'],
                                        ['Protein reconstructor', 'Apply to clean, damp hair; leave for 5–20 minutes; rinse; follow with moisturizing conditioner', '5–20 minutes (follow manufacturer)', 'Severely damaged, overprocessed, or brittle hair; deposits protein into cortex to rebuild strength'],
                                        ['Bond-building treatment (e.g., Olaplex)', 'Mix into colour or bleach, or use as a standalone standalone treatment', 'Per manufacturer', 'Hair undergoing lightening or chemical services; protects and rebuilds disulfide bonds during processing'],
                                        ['Scalp treatment serum', 'Apply to scalp only; massage in; do not rinse (or rinse per product)', 'Per product', 'Dandruff, thinning hair, dry scalp; targets scalp health specifically'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Bond-building treatment', definition: 'A professional in-salon treatment (e.g., Olaplex, K18, Wellaplex) that works within the hair cortex to link broken or fragmented disulfide bonds, restoring strength and integrity — especially valuable when used in conjunction with chemical services to minimize damage' },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q6-1', question: 'A hairstylist is applying a permanent wave solution. The pH of most alkaline (cold wave) perm solutions is approximately:', options: ['4.5–5.5', '7 (neutral)', '8–9.5 (alkaline)', '12–14 (strongly alkaline)'], correctIndex: 2, explanation: 'Alkaline perm solutions have a pH of approximately 8–9.5. This alkalinity is necessary to open the cuticle and allow the reducing agent (ATG) to penetrate the cortex and break disulfide bonds.' },
                        { id: 'q6-2', question: 'A client presents with circular, scaly, hair-breaking patches on the scalp consistent with tinea capitis. The hairstylist should:', options: ['Apply a medicated antifungal shampoo and proceed with a haircut', 'Refuse the service, refer to a physician, and thoroughly disinfect all implements', 'Apply a clarifying shampoo to remove the flakes and continue', 'Proceed with a colour service only, avoiding the affected patches'], correctIndex: 1, explanation: 'Tinea capitis is a highly contagious fungal infection. It is a contraindication for all salon services. The client must be refused, referred to a physician for antifungal treatment, and all implements must be disinfected.' },
                        { id: 'q6-3', question: 'Which massage movement involves kneading, lifting, and circular pressure to stimulate blood circulation in the scalp?', options: ['Effleurage', 'Tapotement', 'Petrissage', 'Vibration'], correctIndex: 2, explanation: 'Petrissage uses kneading and lifting movements that stimulate blood circulation and sebaceous gland activity in the scalp.' },
                        { id: 'q6-4', question: 'Healthy hair and scalp have a pH of approximately:', options: ['7.0 (neutral)', '8.5 (mildly alkaline)', '4.5–5.5 (slightly acidic)', '2.0–3.0 (strongly acidic)'], correctIndex: 2, explanation: 'Healthy hair and scalp are slightly acidic (pH 4.5–5.5). This natural acid mantle keeps the cuticle closed and smooth and provides some protection against bacteria and fungi.' },
                        { id: 'q6-5', question: 'Which type of shampoo should be used BEFORE a chemical service to remove product buildup and ensure even processing?', options: ['Moisturizing shampoo', 'Anti-dandruff shampoo', 'Clarifying shampoo', 'Color-safe shampoo'], correctIndex: 2, explanation: 'Clarifying shampoo removes residue from styling products, dry shampoo, and hard water minerals. Buildup creates a barrier that prevents chemicals from penetrating evenly.' },
                        { id: 'q6-6', question: 'A protein reconstructor is best used on:', options: ['Fine hair before a volumizing service', 'Normal, healthy hair for extra shine', 'Severely damaged, brittle, or overprocessed hair', 'Oily hair to reduce sebum production'], correctIndex: 2, explanation: 'Protein reconstructors deposit hydrolyzed proteins into the cortex to rebuild strength in damaged hair. They are specifically designed for overprocessed, brittle, or chemically compromised hair.' },
                    ],
                },
            ],
        },

        // =========================================================================
        // PART 3 — CUTTING AND STYLING
        // =========================================================================
        {
            id: 'part-3',
            title: 'Part 3: Cutting and Styling',
            color: '#6C3483',
            description: 'Chapters 7–8 cover all aspects of haircutting technique, thermal and wet styling, braiding, and the products used to achieve professional results.',
            chapters: [

                // ─── CHAPTER 7 ────────────────────────────────────────────────────────
                {
                    id: 'ch-7',
                    number: 7,
                    title: 'Hair Cutting — Techniques and Theory',
                    subtitle: 'S1737 & S1743 — Elevations, lines, guides, tools, haircut types, texturizing, and cross-checking',
                    isFree: false,
                    estimatedMinutes: 35,
                    sections: [
                        {
                            id: 's7-1',
                            title: '7.1 Foundations: Elevation, Angle, and Sectioning',
                            content: [
                                { type: 'keyTerm', term: 'Elevation (projection)', definition: 'The angle at which a section of hair is lifted or held away from the head before cutting — the single most important variable controlling weight distribution, graduation, and layer length in a haircut' },
                                {
                                    type: 'table', headers: ['Elevation', 'Effect', 'Weight Distribution', 'Result / Haircut Example'], rows: [
                                        ['0° — no elevation', 'Hair lies flat against the head and is cut at its natural fall', 'Maximum weight at the perimeter; none above', 'Blunt/one-length cut; classic bob; all weight at the base'],
                                        ['45° elevation', 'Hair is held at a 45° angle from the head', 'Weight line sits lower in the haircut (above the perimeter)', 'Graduated/stacked bob; medium-length layers with weight retained at the nape'],
                                        ['90° elevation', 'Hair is held straight out from the head', 'Weight is distributed evenly throughout; no concentration at perimeter', 'Uniform/equal-length layers; round shape; removes bulk throughout'],
                                        ['Over 90° (over-direction)', 'Hair is directed past 90°, further away from its natural fall', 'Creates longer layers below, shorter above; reverses graduation', 'Long, flowing layers; high-elevation cuts; disconnected shapes'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Over-direction', definition: 'Combing or holding hair away from its natural fall (natural distribution) before cutting — creates intentional weight displacement and graduation in the finished cut' },
                                { type: 'keyTerm', term: 'Natural distribution', definition: 'Allowing the hair to fall exactly where gravity takes it — from the head — without combing it toward or away from the natural fall. The baseline for 0° elevation cuts.' },
                                { type: 'paragraph', text: 'Sectioning the head creates a manageable, organized working area:' },
                                {
                                    type: 'bullets', items: [
                                        'Top section (mohawk panel): from the forehead to the crown, ear to ear — controls the top and interior layers',
                                        'Two side sections: from the part to just behind the ear on each side',
                                        'Back section: everything behind the ears and below the crown — can be subdivided into two halves',
                                        'Nape: the lowest section at the back of the neck — often worked first in precision cuts',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Sectioning Term', 'Definition'], rows: [
                                        ['Parting', 'A line that divides the hair into sections — straight, diagonal, curved, or horseshoe shaped'],
                                        ['Panel', 'A larger area of hair defined by partings for organized cutting sequence'],
                                        ['Subsection', 'A thin slice of hair taken from a panel to be cut; should be consistent in thickness throughout'],
                                        ['Guide (guideline)', 'The first section cut that all subsequent sections are measured and cut to match — determines length and shape of the entire cut'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's7-2',
                            title: '7.2 Cutting Lines and Guides',
                            content: [
                                { type: 'keyTerm', term: 'Cutting line', definition: 'The angle or direction of the scissors when cutting — horizontal, vertical, diagonal forward, or diagonal back — each producing a different weight distribution and shape' },
                                {
                                    type: 'table', headers: ['Cutting Line', 'Direction of Cut', 'Effect', 'Example'], rows: [
                                        ['Horizontal', 'Parallel to the floor', 'Creates maximum weight and a strong perimeter line', 'Classic blunt bob perimeter; one-length cut'],
                                        ['Vertical', 'Perpendicular to the floor (up and down)', 'Removes weight and adds length graduation throughout', 'Point-cut texture; internal layers; disconnected cuts'],
                                        ['Diagonal forward (toward face)', 'Angled from higher in the back to lower in the front', 'Creates length toward the face; builds a shorter back, longer front', 'Asymmetric bob; forward graduation; long-to-short front design'],
                                        ['Diagonal back (away from face)', 'Angled from lower in the back to higher in the front', 'Creates length toward the back; shorter front, longer back', 'Classic "A-line" shape; inverted bob'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Stationary guide', definition: 'A fixed guide that does not move — all subsequent sections are brought to it for cutting. Used in one-length and graduated cuts.' },
                                { type: 'keyTerm', term: 'Traveling guide (moving guide)', definition: 'A guide that moves with each new section cut — each new section overlaps slightly with the previous one as the guide progresses through the haircut. Used in uniform-layer and long-layer cuts.' },
                                {
                                    type: 'infoBox', title: 'Weight Line vs Weight Corner', items: [
                                        'WEIGHT LINE — the area of most concentrated length in a haircut; where the longest hair falls. In a graduated bob, the weight line is the visual "ledge" of hair above the nape.',
                                        'WEIGHT CORNER — the angular edge where two weight lines meet (e.g., the corner of a square bob where the perimeter meets the graduation above the ear).',
                                        'REMOVING WEIGHT — achieved by increasing elevation, over-directing, or using texturizing techniques (point cutting, slicing, notching).',
                                        'ADDING WEIGHT — achieved by reducing elevation (toward 0°) or using stationary guides that allow more length to accumulate at the perimeter.',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's7-3',
                            title: '7.3 The Four Classic Haircut Forms',
                            content: [
                                {
                                    type: 'table', headers: ['Haircut Form', 'Key Technique', 'Elevation', 'Weight', 'Cutting Line', 'Classic Example'], rows: [
                                        ['One-Length / Blunt', 'All hair cut to the same perimeter length', '0°', 'Maximum weight at perimeter; none interior', 'Horizontal', 'Classic blunt bob; one-length long hair'],
                                        ['Graduated', 'Hair stacked above the perimeter; shorter above longer', '1° to 89°', 'Weight accumulated above the perimeter (weight line)', 'Diagonal back or horizontal', 'Stacked/graduated bob; A-line bob'],
                                        ['Uniform Layers', 'All hair cut to same length from the head', '90°', 'Evenly distributed throughout; no perimeter concentration', 'Horizontal to the curve of head', 'Round layer cut; classic long layers'],
                                        ['Long Layers (Increasing Layers)', 'Interior shorter than exterior — layers increase in length from interior to perimeter', 'Over 90°', 'Retained at the perimeter; removed from interior', 'Horizontal or diagonal', 'Long, flowing layers; shag; wolf cut'],
                                    ]
                                },
                                { type: 'paragraph', text: 'The four forms can be combined within a single haircut. For example, a graduated bob may have a blunt exterior line with layered interior framing, or a long-layer cut may have a blunt perimeter.' },
                            ],
                        },
                        {
                            id: 's7-4',
                            title: '7.4 Cutting Tools and Proper Use',
                            content: [
                                {
                                    type: 'table', headers: ['Tool', 'Type / Description', 'Best Use', 'Care & Safety'], rows: [
                                        ['Scissors (straight shears)', 'Beveled or convex blade; 4.5"–7" most common; carbon steel or stainless', 'Blunt cuts, precision cutting, point cutting', 'Oil pivot monthly; sharpen professionally; never drop; store in protective case'],
                                        ['Thinning shears (texturizing scissors)', 'One serrated blade; removes 10–30% of bulk with each cut', 'Removing weight from thick hair; blending; removing scissor marks', 'Same care as straight shears; never use on bleached or very dry hair — can split ends'],
                                        ['Razor (straight/feather)', 'Single-edged replaceable blade; creates soft, feathered ends', 'Soft, textured, deconstructed shapes; fringe; softening graduation', 'Always use on wet hair; replace blade between clients (single-use blade is safest practice); dispose in sharps container'],
                                        ['Clippers', 'Electric; uses interchangeable guard attachments (1/8"–1" increments)', 'Men\'s cuts; fades; close-cropped styles; precision nape lines', 'Clean and oil blades after each use; disinfect blade spray; replace blades when dull'],
                                        ['Trimmer / Outliner', 'Smaller electric tool; fine, close-cutting blade; no guards', 'Detailing hairlines; sideburns; necklines; around ears', 'Same as clippers; blade alignment critical for clean lines'],
                                        ['Wide-tooth comb', 'Large spaces between teeth', 'Detangling wet hair; distributing conditioner', 'Immerse in disinfectant solution between clients'],
                                        ['Tail/pintail comb', 'Fine teeth with long pointed handle end', 'Precision sectioning; weaving highlights; teasing', 'Immerse in disinfectant between clients'],
                                        ['Cutting comb (barber comb)', 'Fine and coarse teeth on the same comb; rigid', 'Primary cutting comb for precision haircuts; scissors-over-comb technique', 'Immerse in disinfectant between clients'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Scissors-over-comb', definition: 'A cutting technique where the comb holds the hair at a specific angle while the scissors cut across the top of the comb teeth — allows very close tapering and graduation, especially in the nape and sides' },
                                { type: 'keyTerm', term: 'Clipper-over-comb', definition: 'The same principle as scissors-over-comb, but using electric clippers instead — faster; ideal for fades, tapers, and very short graduation' },
                            ],
                        },
                        {
                            id: 's7-5',
                            title: '7.5 Texturizing Techniques',
                            content: [
                                { type: 'paragraph', text: 'Texturizing modifies the ends of cut hair to reduce bulk, add movement, or create a softer finish without changing the overall length of the cut.' },
                                {
                                    type: 'table', headers: ['Technique', 'How Performed', 'Effect', 'Best For'], rows: [
                                        ['Point cutting', 'Open scissors; place tips into the subsection at varying depths; cut upward into the ends', 'Removes hardness from the cut line; creates soft, broken edge', 'Softening blunt cuts; removing scissor marks from the perimeter'],
                                        ['Notching (deep point cutting)', 'Same as point cutting but deeper cuts into the hair', 'More dramatic texture; chunky, deconstructed, separated ends', 'Heavy/thick hair; modern, editorial, and textured styles'],
                                        ['Slicing', 'Open scissors partially; glide along the surface of a subsection with a sliding motion', 'Removes bulk and adds internal movement without changing length at the ends', 'Thick hair; reducing bulk from uniform layers; modern long layers'],
                                        ['Slide cutting', 'Hold a subsection with tension; open scissors fully; glide from mid-shaft toward the ends in a smooth motion', 'Thins and tapers ends; creates soft, tapered, movement-filled finish', 'Wet hair; softening; modern disconnected looks'],
                                        ['Razor cutting', 'Use a feather razor with wet hair; skim the razor along and into the section', 'Creates soft, diffused, feathered ends with internal movement', 'Textured bobs; fringes; long, flowing shapes; framing'],
                                        ['Chip cutting', 'Short, rapid snipping into the ends perpendicular to the subsection', 'Creates very choppy, separated, and textured ends', 'Very thick hair; short textured cuts; punk/editorial styles'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's7-6',
                            title: '7.6 Cross-Checking and Finishing',
                            content: [
                                { type: 'keyTerm', term: 'Cross-checking', definition: 'Re-examining a completed haircut by taking sections in the opposite direction from which the cut was performed — verifies evenness, balance, and symmetry; catches any sections that were missed or uneven' },
                                { type: 'paragraph', text: 'Cross-checking procedures:' },
                                {
                                    type: 'bullets', items: [
                                        'If the haircut was performed using horizontal sections, cross-check using vertical or diagonal sections',
                                        'If the haircut was performed using diagonal sections, cross-check horizontally',
                                        'Always compare both sides of the head for symmetry',
                                        'Check weight distribution visually from front, sides, and back',
                                        'Perform final check on dry hair after blow-drying to verify the finished shape',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Final Check Step', 'What to Look For'], rows: [
                                        ['Perimeter evenness', 'No stepped or uneven points in the perimeter line; both sides match in length'],
                                        ['Weight distribution', 'Weight falls where intended; no unintended bulk or hollows'],
                                        ['Fringe/bang shape', 'Consistent line or texture; symmetrical from both sides'],
                                        ['Sideburn balance', 'Both sideburns are even in length and shape'],
                                        ['Neckline finish', 'Clean, defined neckline appropriate to the haircut (tapered, square, or rounded)'],
                                        ['Overall silhouette', 'Desired shape is evident from all angles when the client is seated naturally'],
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q7-1', question: 'A haircut performed at 0° elevation produces which result?', options: ['Even layers throughout', 'Maximum weight at the perimeter with no interior layers', 'Short at the nape, long on top', 'Uniform removal of weight'], correctIndex: 1, explanation: '0° elevation means no lifting — hair is combed to its natural fall and cut. All hair meets at the perimeter, creating maximum weight there with no layering above.' },
                        { id: 'q7-2', question: 'Which cutting line creates a classic graduated (stacked) bob with a shorter back and longer front?', options: ['Horizontal', 'Vertical', 'Diagonal forward', 'Diagonal back'], correctIndex: 3, explanation: 'A diagonal back cutting line (angled from a lower back to higher front) creates a longer back and shorter front — the classic A-line and graduated bob shape.' },
                        { id: 'q7-3', question: 'The most important variable for controlling weight distribution in any haircut is:', options: ['The type of scissors used', 'The elevation (angle of lifting) of the hair', 'The thickness of each subsection', 'The direction of the part'], correctIndex: 1, explanation: 'Elevation controls everything: 0° = maximum perimeter weight; 45° = graduated weight; 90° = evenly distributed layers; over 90° = longer exterior weight. It is the primary structural variable.' },
                        { id: 'q7-4', question: 'A traveling (moving) guide is BEST used when cutting:', options: ['A blunt one-length bob', 'A graduated nape', 'Uniform or long layers throughout the head', 'A precision perimeter line'], correctIndex: 2, explanation: 'A traveling guide moves section by section through the head, carrying the length measurement forward. It is the correct technique for layered cuts where length needs to be distributed evenly throughout.' },
                        { id: 'q7-5', question: 'Point cutting is a texturizing technique that:', options: ['Removes weight by cutting parallel to the hair shaft', 'Softens and breaks the perimeter cutting line by cutting into the ends with the scissor tips', 'Creates maximum weight at the ends', 'Uses the razor to feather the ends'], correctIndex: 1, explanation: 'Point cutting places scissor tips into the ends of a subsection at varying depths and cuts upward, creating a soft, broken, non-blunt finish — removing scissor marks and adding movement.' },
                        { id: 'q7-6', question: 'Cross-checking a haircut serves which purpose?', options: ['Adds texture to the ends', 'Verifies evenness and balance by examining the cut from the opposite direction it was performed', 'Removes bulk from thick sections', 'Determines the final styling technique to use'], correctIndex: 1, explanation: 'Cross-checking involves re-sectioning the hair in the perpendicular direction from the original cutting direction to verify that all sections are even and no areas were missed or unbalanced.' },
                        { id: 'q7-7', question: 'Which tool is MOST appropriate for creating a soft, feathered, textured finish on a wet bob haircut?', options: ['Thinning shears', 'Straight-edge razor / feather razor', 'Electric clippers', 'Trimmer outliner'], correctIndex: 1, explanation: 'The straight/feather razor creates soft, diffused, feathered ends on wet hair. It is ideal for textured, deconstructed shapes and should always be used on wet hair to avoid pulling and damage.' },
                        { id: 'q7-8', question: 'A hairstylist cuts the nape area by holding the comb horizontally against the skin at an angle and running scissors across the comb teeth. This technique is called:', options: ['Point cutting', 'Clipper-over-comb', 'Scissors-over-comb', 'Razor over comb'], correctIndex: 2, explanation: 'Scissors-over-comb is the classic barbering and precision cutting technique where the comb acts as a guide and the scissors cut across it — allowing very close tapering and graduation without a clipper.' },
                    ],
                },

                // ─── CHAPTER 8 ────────────────────────────────────────────────────────
                {
                    id: 'ch-8',
                    number: 8,
                    title: 'Styling, Braiding, and Product Knowledge',
                    subtitle: 'S1738 & S1744 — Wet sets, thermal tools, blow-drying, braiding, pressing, and styling products',
                    isFree: false,
                    estimatedMinutes: 35,
                    sections: [
                        {
                            id: 's8-1',
                            title: '8.1 Wet Styling: Foundations and Setting Techniques',
                            content: [
                                { type: 'paragraph', text: 'Wet styling exploits the hair\'s temporary plasticity when wet and the reforming of hydrogen bonds as the hair dries. When wet hair is wrapped, rolled, or molded into a new shape and then dried in that position, the hydrogen bonds re-form around the new shape — holding the style until the next time the hair is wet.' },
                                { type: 'keyTerm', term: 'Hydrogen bond (temporary)', definition: 'A weak but numerous bond in the hair cortex, broken by water and heat and re-formed when the hair dries or cools — the chemical basis for all wet and thermal styling' },
                                {
                                    type: 'table', headers: ['Wet Styling Technique', 'How It Works', 'Tools Used', 'Result'], rows: [
                                        ['Roller set / Wet set', 'Sections of damp hair wound around cylindrical rollers; dried under hood dryer; rolled out when completely cool', 'Cylindrical rollers (various sizes), end papers, picks, hood dryer', 'Smooth, polished waves or curls; classic vintage look; adds volume and body'],
                                        ['Pin curls', 'Small sections of hair wound into flat circles against the scalp and pinned; dried and released', 'Pintail comb, duckbill clips or bobby pins, hood dryer', 'Soft waves, classic finger wave undulations, finger curl effects'],
                                        ['Finger waves', 'Damp hair molded into S-shaped wave pattern using fingers and a comb; held with clips while drying', 'Comb, rat-tail comb, duckbill clips or hair pins', 'Classic sculpted S-wave pattern; retro and editorial'],
                                        ['Molding / Sculpting', 'Damp hair smoothed or shaped into a specific form and allowed to dry in that shape', 'Tail comb, smoothing brush, hard-hold gel', 'Sleek ponytails, slicked edges, formed updos'],
                                        ['Braiding / Weaving', 'Interlacing strands of hair in structured patterns while damp or dry', 'Hands, tail comb, elastic bands', 'Various braid styles; see Section 8.5'],
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'Roller Size and Curl Size Relationship', items: [
                                        'LARGE ROLLERS (1.5"–2"+): Produce large, soft, loose waves and volume with minimal curl definition',
                                        'MEDIUM ROLLERS (1"–1.5"): Produce medium curls with good body and movement — most versatile',
                                        'SMALL ROLLERS (under 1"): Produce tight, defined curls and ringlets',
                                        'RULE: The smaller the roller diameter, the tighter the curl. The larger the diameter, the looser and more voluminous the wave.',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's8-2',
                            title: '8.2 Blow-Drying Techniques',
                            content: [
                                { type: 'paragraph', text: 'Blow-drying uses a combination of heat and moving air to dry and reshape the hair. Different attachments and techniques produce dramatically different results.' },
                                {
                                    type: 'table', headers: ['Blow-Dryer Attachment', 'Purpose', 'Technique Tip'], rows: [
                                        ['Concentrator nozzle', 'Directs airflow in a narrow stream for precision styling', 'Keep moving; always direct airflow downward along the hair shaft to smooth the cuticle and add shine'],
                                        ['Diffuser', 'Disperses airflow gently in a wide area', 'Use on curly and wavy hair to enhance natural curl pattern without disruption; scrunch and cup curls into diffuser cups; use low heat and low speed'],
                                        ['No attachment', 'Broad, general airflow', 'Rough-drying (removing excess moisture) before beginning precision styling'],
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Technique', 'Tools', 'Result'], rows: [
                                        ['Blow-dry smooth / straight', 'Paddle brush or flat brush; concentrator nozzle', 'Smooth, straight finish with cuticle-closing shine; direct airflow from root to tip'],
                                        ['Blow-dry for volume', 'Round brush (medium to large); concentrator nozzle', 'Root lift, bend, and movement; roll hair into the brush, apply heat, release cool — the "cool shot" sets the bend'],
                                        ['Blow-dry for curl definition', 'Diffuser; no brush', 'Enhanced, defined, frizz-free natural curls'],
                                        ['Blow-dry for soft wave', 'Large round brush; concentrator nozzle', 'Soft, polished wave pattern with movement; technique between straight and curly'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Cool shot', definition: 'A blast of cool air from the blow dryer (typically activated by a button) used after applying heat to a section — it re-forms the hydrogen bonds that were opened by heat and "locks in" the style. Always finish a blow-dry with cool air for longevity.' },
                                { type: 'paragraph', text: 'Blow-dry heat protection and safety:' },
                                {
                                    type: 'bullets', items: [
                                        'Always apply a heat protectant spray or cream before blow-drying — reduces protein damage from heat',
                                        'Keep dryer 10–15 cm (4–6 inches) from hair surface; never hold the dryer stationary on one spot',
                                        'Use the lowest effective heat setting — "low and slow" reduces damage',
                                        'Check dryer filter regularly — a clogged filter causes overheating, fires, and motor damage',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's8-3',
                            title: '8.3 Thermal Styling Tools',
                            content: [
                                {
                                    type: 'table', headers: ['Tool', 'Temperature Range', 'Best For', 'Hair Type Considerations'], rows: [
                                        ['Flat iron (straightener)', '150–230°C (300–450°F)', 'Straightening; creating S-waves; flipping ends; sleek finishes', 'Fine hair: max 150–180°C. Medium: 180–200°C. Coarse/resistant: up to 230°C. Always use heat protectant.'],
                                        ['Curling iron (barrel)', '120–220°C (250–425°F)', 'Creating curls and waves; adding movement; bend and flip', 'Barrel size determines curl size (same principle as roller size). Clamp or no-clamp (wand) options.'],
                                        ['Curling wand', '120–220°C', 'Modern, open, flowing curls without the clamp crease', 'Wrap hair away from face for outward curls; wrap toward face for retro look. No clamp = varied tension for natural result.'],
                                        ['Hot comb (pressing comb)', 'Heated on stove or electric; 150–200°C', 'Temporarily straightening coily and tightly curled hair (silk press)', 'Use on clean, dry, pressed hair. Lighter pressure for fine, more pressure for coarse. Apply pressing oil before for protection and glide.'],
                                        ['Crimper', 'Variable', 'Adding zigzag texture pattern for volume and editorial looks', 'Rarely used in professional settings today; creates a distinctive angular texture'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Thermal damage', definition: 'Permanent, irreversible damage to the hair\'s protein structure caused by excessive or repeated exposure to high heat — results in dry, brittle, rough, snap-prone hair that cannot be repaired; only new growth is unaffected' },
                                {
                                    type: 'infoBox', title: 'Thermal Safety Protocol', items: [
                                        '1. ALWAYS use a heat protectant product before thermal styling',
                                        '2. Never apply thermal tools to wet or damp hair — steam causes severe protein damage (the "sizzle" means damage)',
                                        '3. Keep tools moving — never hold in one spot',
                                        '4. Allow tools to heat to operating temperature BEFORE use; do not use cold and ramp up on the hair',
                                        '5. Store tools in heat-resistant holders; never on towels, capes, or fabric surfaces',
                                        '6. Unplug when leaving the workstation, even briefly',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's8-4',
                            title: '8.4 Styling Products — Chemistry and Application',
                            content: [
                                {
                                    type: 'table', headers: ['Product', 'Hold Level', 'Finish', 'Best Applied To', 'Key Ingredient/Action'], rows: [
                                        ['Mousse (foam)', 'Light to medium', 'Natural to soft shine', 'Damp, towel-dried hair', 'Polymers and resins create a light film around hair to hold shape without stiffness'],
                                        ['Gel', 'Medium to extra strong', 'High shine (wet look) or crunchy', 'Damp hair for cast; dry hair for piece-y texture', 'Polymers create a rigid film; wet application = defined waves/curls; dry = shine and control'],
                                        ['Hair spray', 'Light to super hold', 'Natural to stiff', 'Dry, finished style', 'Aerosol or pump delivers hold polymers; locks finished style in place; flexible or firm hold options'],
                                        ['Wax / Pomade', 'Light to firm', 'High gloss (wax-based) or matte (clay-based)', 'Dry hair for texture, definition, and separation', 'Petroleum, beeswax, or synthetic base; does not wash out easily; best for short hair and detail work'],
                                        ['Serum / Shine spray', 'None to light', 'Ultra high gloss', 'Mid-lengths and ends of dry or damp hair', 'Silicones (dimethicone) coat hair shaft, smooth cuticle, add mirror shine, and reduce frizz'],
                                        ['Cream / Lotion', 'Light to medium', 'Natural', 'Damp or dry hair; coarse or curly', 'Emollients and humectants; adds moisture, softness, and definition without stiffness'],
                                        ['Clay / Matte cream', 'Medium to strong', 'Matte to low shine', 'Dry hair; short to medium styles', 'Kaolin or bentonite clay creates texture, separation, and matte finish with workable hold'],
                                        ['Heat protectant', 'None', 'Varies', 'Damp or dry hair before thermal tools', 'Silicones and proteins form a thermal barrier; reduces heat penetration to cortex; helps distribute heat evenly'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Product application rules:' },
                                {
                                    type: 'bullets', items: [
                                        'Apply most styling products to damp (not dripping wet) hair for best distribution',
                                        'Use less product than you think — product buildup dulls hair, attracts dirt, and weighs hair down',
                                        'Emulsify product in palms before applying — ensures even distribution',
                                        'Keep products off the scalp when possible — especially heavy waxes, oils, and strong-hold gels',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's8-5',
                            title: '8.5 Braiding and Natural Hair Techniques',
                            content: [
                                {
                                    type: 'table', headers: ['Technique', 'Description', 'Variation'], rows: [
                                        ['Three-strand braid (flat braid)', 'Three sections interlaced in an alternating over-under pattern', 'Underhand (French braid / Dutch braid variations)'],
                                        ['French braid', 'Three-strand braid where small sections of hair are added from either side as the braid progresses from the root toward the nape', 'Adds all surrounding hair; creates a flat, scalp-hugging braid'],
                                        ['Dutch braid (reverse French)', 'Same as French braid but the strands cross UNDER instead of over — braid sits raised above the scalp', 'Also called "inside-out" French braid; creates a 3D raised effect'],
                                        ['Cornrows', 'Tight, flat Dutch-style braids done very close to the scalp in straight or geometric rows or patterns', 'Used as a base for extensions, weave, and protective styles'],
                                        ['Fishtail braid', 'Only two sections, with thin strips alternately crossed from the outside of one section to the other', 'Creates a herringbone-like pattern; appears intricate but uses only two strands'],
                                        ['Box braids', 'Individual three-strand braids sectioned in a box/square pattern; often extended with added hair', 'Protective style; can be done with or without extensions'],
                                        ['Twist styles (two-strand twist)', 'Two sections of hair twisted around each other (not interlaced)', 'Common in natural hair care; can be untwisted to create a twist-out curl pattern'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Protective style', definition: 'A hairstyle that tucks away the ends of the hair to minimize manipulation, friction, and environmental exposure — reduces breakage and promotes length retention. Examples: braids, twists, updos, buns.' },
                                { type: 'paragraph', text: 'Natural hair care principles (Level 2 — S1744):' },
                                {
                                    type: 'bullets', items: [
                                        'Detangle gently with wide-tooth comb or fingers, starting from the ends and working toward the roots',
                                        'Deep conditioning is essential for coily and kinky textures (4a/b/c) — every 1–2 weeks minimum',
                                        'Avoid high heat frequently — coily textures are more fragile and prone to heat damage',
                                        'LOC method (Liquid → Oil → Cream) is a common moisture-sealing layering technique for natural hair',
                                        'Avoid styles with excessive tension, especially around the hairline — traction alopecia is a serious risk',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q8-1', question: 'What is the chemical basis for all temporary wet and thermal styling?', options: ['Breaking and re-forming disulfide bonds', 'Breaking and re-forming hydrogen bonds', 'Breaking peptide bonds with heat', 'Oxidizing the melanin in the cortex'], correctIndex: 1, explanation: 'Hydrogen bonds are broken by water (wet) or heat (thermal). When hair dries or cools in a new position, hydrogen bonds re-form in the new shape — holding the style. This is why wet sets and blow-drying work.' },
                        { id: 'q8-2', question: 'The "cool shot" at the end of blow-drying a section serves to:', options: ['Remove moisture quickly from the hair', 'Lock the style in place by re-forming hydrogen bonds as the hair cools', 'Open the cuticle for better product absorption', 'Reduce the time needed to style the next section'], correctIndex: 1, explanation: 'The cool shot closes the cuticle (adding shine) and re-forms the hydrogen bonds that were temporarily broken by the heat. This "sets" the blow-dry shape and significantly extends the longevity of the style.' },
                        { id: 'q8-3', question: 'Applying a flat iron to slightly damp hair causes a sizzling sound. This means:', options: ['The heat protectant is activating correctly', 'The temperature setting is appropriate', 'Steam is damaging the hair protein structure — this is a serious error', 'The iron needs to be cleaned'], correctIndex: 2, explanation: 'The sizzle is water turning to steam inside the hair shaft under a closed iron. The rapid expansion of steam ruptures the hair cortex from within, causing severe, irreversible thermal damage.' },
                        { id: 'q8-4', question: 'A diffuser attachment on a blow dryer is MOST appropriate for:', options: ['Creating a very smooth, straight blow-dry', 'Enhancing natural curl or wave pattern with minimal disruption', 'Rapid rough-drying of thick, straight hair', 'Directing airflow for precision root lift'], correctIndex: 1, explanation: 'Diffusers disperse airflow gently and widely, reducing the direct airforce that would disrupt and frizz curly hair. They allow curls to dry in their natural pattern with definition and reduced frizz.' },
                        { id: 'q8-5', question: 'Which styling product provides the HIGHEST hold level with a wet/high-gloss finish?', options: ['Mousse', 'Serum', 'Gel (strong-hold)', 'Heat protectant'], correctIndex: 2, explanation: 'Strong-hold gel creates a rigid polymer film around each hair strand when it dries, providing the highest hold of common styling products with a wet, glossy appearance.' },
                        { id: 'q8-6', question: 'A Dutch braid differs from a French braid in that:', options: ['It uses four strands instead of three', 'The strands cross under instead of over, creating a raised braid above the scalp', 'It is done only at the nape of the neck', 'It uses added hair extensions throughout'], correctIndex: 1, explanation: 'The Dutch braid (reverse/inside-out French braid) crosses strands under the center — the opposite of a French braid — creating a 3D raised effect on top of the scalp.' },
                        { id: 'q8-7', question: 'The LOC method for natural hair refers to:', options: ['Length, Oil, Conditioning', 'Liquid, Oil, Cream — a moisture-sealing layering technique', 'Leave-in, Oil, Curl cream — always applied to dry hair only', 'Low heat, Oil treatment, Cold rinse'], correctIndex: 1, explanation: 'LOC stands for Liquid (water or leave-in conditioner), Oil (seals the moisture in), and Cream (provides additional hold and sealing). It is a popular layering method for natural, coily textures to maximize moisture retention.' },
                    ],
                },
            ],
        },

        // =========================================================================
        // PART 4 — CHEMICAL SERVICES
        // =========================================================================
        {
            id: 'part-4',
            title: 'Part 4: Chemical Services',
            color: '#1B4F72',
            description: 'Chapters 9–12 cover the chemistry and application of perming, relaxing, colouring, lightening, and hair extension services.',
            chapters: [

                // ─── CHAPTER 9 ────────────────────────────────────────────────────────
                {
                    id: 'ch-9',
                    number: 9,
                    title: 'Perming and Waving',
                    subtitle: 'S1739 & S1745 — Perm chemistry, rod types, wrapping patterns, processing, and neutralization',
                    isFree: false,
                    estimatedMinutes: 35,
                    sections: [
                        {
                            id: 's9-1',
                            title: '9.1 Perm Chemistry: How Perms Work',
                            content: [
                                { type: 'paragraph', text: 'A permanent wave (perm) uses chemistry to permanently rearrange the internal structure of the hair shaft, creating a new wave or curl pattern. The process involves breaking disulfide bonds with a reducing agent, physically wrapping the hair into a new shape on perm rods, and re-forming the bonds in the new position with an oxidizing neutralizer.' },
                                {
                                    type: 'numbered', items: [
                                        'REDUCTION: The perm waving lotion (reducing agent) penetrates the cuticle and cortex, breaking the disulfide bonds (S-S) between adjacent keratin chains. The chemical doing this work is ammonium thioglycolate (ATG) in most alkaline perms, or glyceryl monothioglycolate (GMTG) in acid perms.',
                                        'REFORMATION: While the bonds are broken, the hair is soft and moldable. The hair wraps around the perm rod take on the new shape.',
                                        'OXIDATION (NEUTRALIZATION): The neutralizer (hydrogen peroxide at 5–10 vol., or sodium bromate) re-forms the broken disulfide bonds in their new position around the rod — making the change permanent. This step is called neutralization (despite not being about pH).',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Perm Type', 'pH', 'Key Reducing Agent', 'Processing', 'Characteristics'], rows: [
                                        ['Alkaline cold wave', '8.0–9.5', 'Ammonium thioglycolate (ATG)', 'At room temperature; no heat required', 'Strong, fast-acting; produces tighter, more durable curls; can be harsher on the hair; most common professional perm'],
                                        ['Acid wave (true acid)', '4.5–6.5', 'Glyceryl monothioglycolate (GMTG)', 'Requires heat (hood dryer or exothermic activation)', 'Gentler on the hair and scalp; produces softer, more natural-looking waves; slower processing; recommended for colour-treated or sensitized hair'],
                                        ['Exothermic perm', '7.0–8.5', 'ATG with an activator that creates heat', 'Self-heating — the mixing reaction generates heat', 'Faster processing than acid perms; moderately gentle; versatile'],
                                        ['Alkaline body wave', '8.0–9.5', 'ATG (lower concentration)', 'Room temperature', 'Uses large rods to create soft, loose wave/movement rather than tight curls; adds volume and bend'],
                                        ['Thio-free perm', 'Variable', 'Cysteamine or mercaptamine', 'Varies', 'Alternative for ATG-sensitive clients; newer chemistry; milder odour'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Lanthionization', definition: 'The permanent chemical change that occurs when a hydroxide relaxer breaks a disulfide bond — unlike perm chemistry, this creates a single lanthionine bond (instead of two sulfur bonds) that CANNOT be re-formed and is irreversible' },
                            ],
                        },
                        {
                            id: 's9-2',
                            title: '9.2 Perm Rods — Types, Sizes, and Curl Effect',
                            content: [
                                {
                                    type: 'table', headers: ['Rod Type', 'Shape', 'Curl Effect', 'Best For'], rows: [
                                        ['Straight/cylindrical', 'Uniform diameter throughout', 'Even, consistent curl from root to tip', 'Classic perms; uniform curl pattern throughout'],
                                        ['Concave (hourglass)', 'Smaller diameter at center, larger at ends', 'Tighter curl at mid-strand, softer at roots and ends — reduces root kinking', 'Most popular for a natural look; reduces the common "root kink" issue'],
                                        ['Spiral rod (flexi-rod)', 'Long, cylindrical; hair wound diagonally from root to tip', 'Elongated, springy spiral curls with uniform definition from root to tip', 'Long hair; spiral and ringlet effects; specialty perms'],
                                        ['Bender rod (soft rod)', 'Flexible foam-covered wire; can be bent into shapes', 'Soft, loose wave or defined spiral depending on technique', 'Long hair; body waves; creative waving patterns'],
                                        ['Pin-curl clip', 'Small clip or pin; hair is formed into a flat curl against scalp', 'Flat, smooth curl movement (less lift) — beach wave effect', 'Soft texture; gentle; vintage wave patterns'],
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'Rod Size and Curl Result', items: [
                                        'LARGE ROD DIAMETER: Produces large, soft, loose waves and body — body wave',
                                        'MEDIUM ROD DIAMETER: Produces medium curls with movement — most versatile',
                                        'SMALL ROD DIAMETER: Produces tight, defined, springy curls — traditional perm look',
                                        'EXTRA-SMALL ROD DIAMETER: Produces very tight, coily curls — afro-texture perms',
                                        'RULE: The smaller the rod, the tighter the curl. Curl will loosen 30–50% after the hair is dried and settles.',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's9-3',
                            title: '9.3 Wrapping Patterns and Techniques',
                            content: [
                                {
                                    type: 'table', headers: ['Wrapping Pattern', 'Description', 'Effect / Best For'], rows: [
                                        ['Basic / classic wrap', 'Hair wound from ends to scalp in even coils around the rod', 'Even curl throughout; most common technique for standard perms'],
                                        ['Curvature / contour wrap', 'Rods placed to follow the curve of the head; diagonal sectioning', 'Natural movement that follows head shape; reduces straight lines in the finished curl'],
                                        ['Spiral wrap', 'Hair wound diagonally around a long rod from root to tip (or tip to root)', 'Elongated spiral curls; requires longer rods; best on long hair'],
                                        ['Directional wrap', 'Rods placed in specific directions (e.g., all forward, all back, or radially) to control curl movement', 'Customized direction of curl and style movement; used in precision perm designs'],
                                        ['Piggyback wrap', 'Two rods per section — one from root to mid-shaft, second from mid-shaft to ends', 'Used on long hair to create even curl throughout without stretching the wave at the roots or tangling the ends'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Important wrapping rules:' },
                                {
                                    type: 'bullets', items: [
                                        'Each subsection should be no wider than the rod length and no thicker than the rod diameter',
                                        'Always use an end paper (end wrap) to protect the delicate tips and ensure even winding',
                                        'Maintain even, consistent tension throughout — uneven tension = uneven curl',
                                        'The rod must be placed at the correct base: on-base (at scalp) for maximum volume, half-base for some volume, off-base for minimal lift',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's9-4',
                            title: '9.4 Perm Application Process',
                            content: [
                                {
                                    type: 'numbered', items: [
                                        'CONSULT AND ANALYZE: Assess hair condition (elasticity, porosity, texture, density, chemical history). Perform elasticity and porosity tests. Review contraindications.',
                                        'SHAMPOO: Cleanse with a clarifying (non-conditioning) shampoo — removes product buildup. Towel dry to damp.',
                                        'PROTECT: Apply protective cream along the hairline and ears to prevent skin irritation from the waving lotion.',
                                        'SECTION AND WRAP: Section the hair systematically; wind each subsection onto the selected rod with end papers; secure firmly.',
                                        'APPLY WAVING LOTION: Saturate each rod thoroughly, working from back to front; set a timer for manufacturer-recommended time.',
                                        'PROCESS: Monitor processing — perform periodic curl test (S-test) by gently unrolling a rod at the nape to check curl formation.',
                                        'RINSE: Rinse waving lotion thoroughly for minimum 5 minutes; blot excess water from rods with towels (water remaining can dilute the neutralizer).',
                                        'APPLY NEUTRALIZER: Apply neutralizer to each rod; set timer per manufacturer directions (typically 5–10 minutes); do NOT remove rods.',
                                        'REMOVE RODS: Gently remove rods while neutralizer is still in — or after a partial neutralization per product directions.',
                                        'FINAL NEUTRALIZER: Apply final application of neutralizer to the hair; set timer; rinse thoroughly.',
                                        'CONDITION AND FINISH: Apply an acid-balanced conditioner; rinse; style gently.',
                                    ]
                                },
                                { type: 'keyTerm', term: 'S-test (curl test)', definition: 'The technique used during processing to check whether sufficient softening has occurred — gently unwinding a rod at the nape and checking if the hair forms an S-shape matching the rod diameter. Under-processed hair shows a weak, straight, or flat S; over-processing shows excessive softness or no spring.' },
                                {
                                    type: 'table', headers: ['Processing Issue', 'Cause', 'Correction'], rows: [
                                        ['Under-processing (insufficient curl)', 'Too short processing time; resistant/low-porosity hair; product not saturated', 'Re-apply waving lotion; re-test; extend time. Prevention: use appropriate strength product; ensure full saturation.'],
                                        ['Over-processing (weak, mushy, no curl, or breakage)', 'Too long processing time; high-porosity or damaged hair; product too strong', 'Immediately rinse and neutralize. Cannot be reversed. Prevention: strand test; use gentler formula on damaged hair; monitor closely.'],
                                        ['Straight ends (fishhooks)', 'Hair was not wound smoothly over the end paper; ends were bent instead of lying flat', 'Prevention only — trim affected ends after service. Ensure end papers are used correctly.'],
                                        ['Root kinking / scalp burn', 'Waving lotion applied too close to scalp on straight rod; excessive tension at roots; scalp abrasion before service', 'Prevention: use concave rods; apply barrier cream; never stretch or pull at scalp; do not perm irritated scalp'],
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q9-1', question: 'What is the primary reducing agent in a standard alkaline cold wave perm?', options: ['Hydrogen peroxide', 'Sodium hydroxide', 'Ammonium thioglycolate (ATG)', 'Glyceryl monothioglycolate (GMTG)'], correctIndex: 2, explanation: 'Ammonium thioglycolate (ATG) is the active reducing agent in alkaline cold wave perms. It breaks disulfide bonds in the cortex at room temperature. GMTG is used in acid perms.' },
                        { id: 'q9-2', question: 'The purpose of the neutralizer in a permanent wave is to:', options: ['Lower the pH of the hair after waving lotion', 'Re-form disulfide bonds in their new position to make the curl permanent', 'Remove the waving lotion from the hair', 'Add moisture lost during processing'], correctIndex: 1, explanation: 'Neutralization (oxidation) re-forms the broken disulfide bonds in the new configuration around the perm rod — permanently locking in the curl. Without proper neutralization, the curl will not last.' },
                        { id: 'q9-3', question: 'An acid wave perm differs from an alkaline cold wave in that:', options: ['It uses a stronger reducing agent and requires no heat', 'It is gentler on the hair, has a lower pH (4.5–6.5), and requires heat for activation', 'It uses hydrogen peroxide as the reducing agent', 'It processes much faster at room temperature'], correctIndex: 1, explanation: 'Acid perms use glyceryl monothioglycolate (GMTG) at a lower pH (4.5–6.5), which is gentler on the hair and scalp. They require added heat (hood dryer or exothermic activation) to process and are recommended for colour-treated or sensitized hair.' },
                        { id: 'q9-4', question: 'The S-test during perm processing checks for:', options: ['The correct neutralizer application time', 'Whether the hair has softened enough to take on the shape of the rod', 'The porosity of the finished curl', 'The pH level of the waving lotion after application'], correctIndex: 1, explanation: 'The S-test involves gently unrolling a rod at the nape to see if the hair forms an S-shape matching the rod size — indicating sufficient processing. Under-processed hair shows a weak or flat S.' },
                        { id: 'q9-5', question: 'Which rod type produces a tighter curl at the mid-shaft and softer curl at the roots and ends, helping to reduce root kinking?', options: ['Straight/cylindrical rod', 'Concave (hourglass) rod', 'Spiral rod', 'Bender rod'], correctIndex: 1, explanation: 'Concave rods have a smaller diameter at the center and larger at the ends. This creates tighter curls at the mid-shaft and a gentler bend at the roots — reducing the common "root kink" seen with straight rods.' },
                        { id: 'q9-6', question: 'Over-processing during a perm results in:', options: ['Insufficient curl formation and straight ends', 'Excessive curl, mushy texture, and potential breakage from over-softened disulfide bonds', 'A stronger, more defined curl than expected', 'Colour fading if the client also has tinted hair'], correctIndex: 1, explanation: 'Over-processing occurs when the waving lotion is left on too long, breaking too many bonds. The hair becomes over-softened and mushy, loses its strength, and may break. The curl will have no spring and may not form at all.' },
                    ],
                },

                // ─── CHAPTER 10 ───────────────────────────────────────────────────────
                {
                    id: 'ch-10',
                    number: 10,
                    title: 'Hair Relaxing',
                    subtitle: 'S1739 & S1745 — Relaxer chemistry, types, application, neutralizing, and retouch procedures',
                    isFree: false,
                    estimatedMinutes: 30,
                    sections: [
                        {
                            id: 's10-1',
                            title: '10.1 Relaxer Chemistry and Types',
                            content: [
                                { type: 'paragraph', text: 'Chemical relaxers permanently straighten curly and coily hair by breaking and permanently rearranging the hair\'s disulfide bonds. Unlike perms (which re-form bonds in a new shape using neutralization), hydroxide relaxers cause a permanent, irreversible change called lanthionization.' },
                                {
                                    type: 'table', headers: ['Relaxer Type', 'Active Ingredient', 'pH', 'Processing', 'Key Characteristics'], rows: [
                                        ['Sodium hydroxide (NaOH) / Lye', 'Sodium hydroxide (lye)', '12–14', 'Fast; 10–20 minutes', 'Strongest; most effective on very resistant coily hair; can cause severe chemical burns if misused; requires careful application; must use protective base'],
                                        ['No-lye relaxer (guanidine carbonate)', 'Guanidine hydroxide (formed by mixing)', '9–11', 'Moderate; 15–25 minutes', 'Less irritating to scalp than lye; marketed as "no-base" but still requires protection at hairline; calcium deposits can leave hair dry over time — use chelating shampoo and moisturizing treatments regularly'],
                                        ['Ammonium thioglycolate (thio relaxer)', 'ATG (same as perm lotion)', '7–9.5', 'Moderate; must be neutralized like a perm', 'Weaker; used for mild to moderate curl reduction; requires neutralization; not as effective on tightly coiled hair'],
                                        ['Lithium hydroxide / Potassium hydroxide', 'LiOH or KOH', '12–14', 'Similar to NaOH', 'Alternative lye relaxers with similar action; found in some kid-friendly formulations'],
                                    ]
                                },
                                { type: 'keyTerm', term: 'Lanthionization', definition: 'The irreversible chemical reaction that occurs when a hydroxide relaxer breaks a disulfide bond (S-S) and replaces it with a single lanthionine bond (monosulfide bond). This permanently straightens the hair and CANNOT be reversed by neutralization — new growth will always grow in with the natural curl pattern.' },
                                { type: 'paragraph', text: 'Key incompatibility warning — CRITICAL SAFETY KNOWLEDGE:' },
                                {
                                    type: 'infoBox', title: '⚠️ Critical Incompatibility: Hydroxide + Thio', items: [
                                        'NEVER apply a thio-based product (perm, thio relaxer) to hair that has been previously treated with a hydroxide relaxer (lye or no-lye), and vice versa.',
                                        'Reason: Hydroxide relaxers create irreversible lanthionine bonds. Thio chemistry attempts to break these bonds, causing extreme over-softening and BREAKAGE.',
                                        'Always take a complete chemical history. When in doubt, perform a strand test on a small, hidden section.',
                                        'This incompatibility can cause catastrophic, irreversible hair loss if ignored.',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's10-2',
                            title: '10.2 Relaxer Application: Virgin vs. Retouch',
                            content: [
                                {
                                    type: 'table', headers: ['Service Type', 'Application Method', 'Key Considerations'], rows: [
                                        ['Virgin relaxer (first-time)', 'Apply relaxer from mid-lengths first, then ends, then new growth — working away from the scalp initially, finishing at the scalp last; OR apply to the most resistant area first per manufacturer', 'Entire head being processed; mid-lengths and ends typically process faster; protect scalp and previously processed hair from overprocessing'],
                                        ['Retouch relaxer', 'Apply relaxer to new growth ONLY — never overlap onto previously relaxed hair', 'Overlapping onto previously relaxed hair causes extreme overprocessing and breakage; use protective base on scalp; use barrier to separate new growth from processed hair'],
                                    ]
                                },
                                {
                                    type: 'numbered', items: [
                                        'CONSULTATION: Assess chemical history; determine curl pattern and resistance; check scalp for abrasions, open wounds, or irritation (CONTRAINDICATION if present)',
                                        'PREPARE CLIENT: Shampoo with a mild shampoo (or do not shampoo — many stylists avoid shampooing 24–48h before to preserve scalp\'s natural protective oils); drape properly',
                                        'BASE APPLICATION (for lye relaxers): Apply protective cream (petroleum base) to scalp, hairline, ears, and neck to protect skin from the highly alkaline relaxer',
                                        'SECTION HAIR: Divide into 4 sections (front right, front left, back right, back left)',
                                        'APPLY RELAXER: Use gloves and a bowl-and-brush; apply quickly and methodically; smooth gently — do NOT rub vigorously',
                                        'SMOOTH AND PROCESS: Use back of comb or fingers to gently smooth hair straight; monitor processing time (do not exceed manufacturer\'s recommendation)',
                                        'PERFORM STRAND TEST: Periodically lift a small section; if hair is straight and smooth and doesn\'t revert, it is ready to rinse',
                                        'RINSE THOROUGHLY: Rinse with warm (not hot) water; rinse until all relaxer is completely removed (typically 5+ minutes); any remaining relaxer continues to process',
                                        'SHAMPOO WITH NEUTRALIZING SHAMPOO: Use a shampoo specifically formulated to bring pH down from alkaline to acidic; shampoo 2–3 times; the shampoo should change from pink to clear when all relaxer residue is removed',
                                        'CONDITION: Apply a deep moisturizing conditioner; the hair has been severely chemically processed and needs moisture restoration',
                                    ]
                                },
                                { type: 'keyTerm', term: 'Neutralizing shampoo', definition: 'A pH-balanced (acidic) shampoo specifically formulated to counteract the alkalinity of relaxer chemicals, bring the hair back to a healthy pH, and confirm complete removal of the relaxer (often contains a color-indicator that changes from pink/purple to clear when neutralization is complete)' },
                            ],
                        },
                        {
                            id: 's10-3',
                            title: '10.3 Relaxer Contraindications and Safety Protocols',
                            content: [
                                {
                                    type: 'table', headers: ['Contraindication', 'Reason'], rows: [
                                        ['Cuts, abrasions, or sores on the scalp', 'Relaxer will penetrate through broken skin causing severe chemical burns and potential systemic absorption'],
                                        ['Scalp inflammation or active dermatitis', 'Severely compromised skin barrier — chemical absorption and burns highly likely'],
                                        ['Previous incompatible chemical service (thio perm or thio relaxer on hair with hydroxide history)', 'Will cause extreme breakage — see incompatibility warning above'],
                                        ['Weak or severely damaged hair (poor elasticity)', 'Hair cannot withstand the chemical stress — significant breakage or total dissolution is possible'],
                                        ['Recent heavy protein treatment', 'May create a barrier or unpredictable reaction — perform strand test'],
                                        ['Client pregnant or nursing (at client request)', 'Some clients prefer to avoid chemical services; respect client decision; provide alternative options'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Emergency: Chemical burn from relaxer on scalp:' },
                                {
                                    type: 'bullets', items: [
                                        'Rinse immediately and continuously with cool water for 15–20 minutes',
                                        'Do NOT rub the affected area',
                                        'Shampoo with neutralizing shampoo gently',
                                        'Refer to physician if burn is severe, blistering, or covers a large area',
                                        'Document the incident',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q10-1', question: 'Lanthionization describes the chemical process in which:', options: ['Disulfide bonds are broken by ATG and re-formed by neutralizer in perming', 'Hydroxide relaxers permanently break disulfide bonds, creating irreversible monosulfide lanthionine bonds', 'The hair\'s melanin is permanently removed by bleaching agents', 'Hydrogen bonds are broken by heat during flat ironing'], correctIndex: 1, explanation: 'Lanthionization is the permanent, irreversible process caused by hydroxide relaxers (lye and no-lye). Disulfide bonds are broken and replaced by single lanthionine bonds — this CANNOT be neutralized or reversed.' },
                        { id: 'q10-2', question: 'During a retouch relaxer service, the product must be applied:', options: ['To the entire head of hair from roots to ends', 'Only to the new growth, never overlapping onto previously relaxed hair', 'Starting at the ends and working toward the roots', 'To the scalp area only, not the hair shaft'], correctIndex: 1, explanation: 'Overlap onto previously relaxed hair is the most common cause of relaxer-related breakage. Previously relaxed hair is already lanthionized — additional hydroxide causes severe over-softening and breakage.' },
                        { id: 'q10-3', question: 'The CRITICAL incompatibility in chemical hair services is:', options: ['Using a moisturizing shampoo before a perm', 'Applying a thio-based product (perm or relaxer) to hair previously treated with a hydroxide relaxer', 'Using a protein treatment before a colour service', 'Applying a deep conditioner before a haircut'], correctIndex: 1, explanation: 'Thio chemistry and hydroxide chemistry are fundamentally incompatible. Applying thio to hair that has been hydroxide-relaxed causes extreme softening and catastrophic breakage — this is one of the most dangerous errors in chemical hairstyling.' },
                        { id: 'q10-4', question: 'Why should a hairstylist NOT shampoo the client\'s hair 24–48 hours before a sodium hydroxide relaxer service?', options: ['To ensure the hair is in a dirty, oily state for better product adhesion', "Shampooing removes the scalp's natural protective oil barrier, increasing the risk of scalp irritation and burns", 'Shampooing makes the hair swell, reducing the effectiveness of the relaxer', 'Shampooing would dilute the relaxer chemistry'], correctIndex: 1, explanation: "The scalp's natural sebum provides a small but meaningful protective barrier against the highly alkaline relaxer (pH 12–14). Removing this barrier by shampooing close to the service increases the risk of scalp irritation and chemical burns." },
                        { id: 'q10-5', question: 'A neutralizing shampoo used after a relaxer service is designed to:', options: ['Add protein to rebuild the damaged cortex', 'Return the hair pH to acidic range and confirm complete relaxer removal', 'Provide moisture to chemically dry hair', 'Activate the remaining relaxer for final processing'], correctIndex: 1, explanation: 'Neutralizing shampoo contains pH-lowering agents to counteract the highly alkaline relaxer and a colour indicator (pink to clear) to show when all relaxer residue is completely removed.' },
                    ],
                },

                // ─── CHAPTER 11 ───────────────────────────────────────────────────────
                {
                    id: 'ch-11',
                    number: 11,
                    title: 'Hair Colouring and Lightening',
                    subtitle: 'S1740 & S1746 — Colour theory, melanin, product types, formulation, correction, and application',
                    isFree: false,
                    estimatedMinutes: 45,
                    sections: [
                        {
                            id: 's11-1',
                            title: '11.1 Colour Theory and the Level System',
                            content: [
                                { type: 'keyTerm', term: 'Level', definition: 'The degree of lightness or darkness of a hair colour, on a scale of 1 (black) to 10 (lightest blonde) — or up to 12 in some systems. Level describes ONLY the lightness/darkness dimension, NOT the tone.' },
                                { type: 'keyTerm', term: 'Tone (hue)', definition: 'The visible colour or warmth/coolness of hair — described as warm (gold, red, copper, orange), cool (ash, blue-based, pearl), or neutral. Tone is separate from level.' },
                                {
                                    type: 'table', headers: ['Level', 'Natural Colour Name', 'Underlying Pigment (when lightened)', 'Predominant Tone on Prelightening'], rows: [
                                        ['1', 'Black', 'Red-orange', 'Very warm red-orange'],
                                        ['2', 'Darkest brown', 'Red-orange', 'Red-orange'],
                                        ['3', 'Dark brown', 'Red-orange to orange', 'Orange-red'],
                                        ['4', 'Medium brown', 'Orange', 'Orange'],
                                        ['5', 'Light brown', 'Orange-gold', 'Orange-gold'],
                                        ['6', 'Dark blonde', 'Gold-orange', 'Gold-orange'],
                                        ['7', 'Medium blonde', 'Gold', 'Gold-yellow'],
                                        ['8', 'Light blonde', 'Yellow-gold', 'Yellow'],
                                        ['9', 'Very light blonde', 'Pale yellow', 'Pale yellow'],
                                        ['10', 'Lightest blonde', 'Pale yellow', 'Very pale yellow'],
                                    ]
                                },
                                { type: 'paragraph', text: 'The underlying pigment chart is critical for corrective colouring — it shows the dominant warm pigments that emerge when hair is lightened. To neutralize these warm tones, the stylist uses a toner in the COMPLEMENTARY (opposite on the colour wheel) tone.' },
                                {
                                    type: 'table', headers: ['Warm Tone to Neutralize', 'Complementary Toner to Use'], rows: [
                                        ['Orange / brassy', 'Blue-based toner (ash or pearl)'],
                                        ['Gold / yellow-orange', 'Violet/purple-based toner'],
                                        ['Yellow (pale)', 'Violet or blue-violet toner'],
                                        ['Red', 'Green-based or ash toner'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's11-2',
                            title: '11.2 Natural Melanin and the Chemistry of Hair Colour',
                            content: [
                                {
                                    type: 'table', headers: ['Melanin Type', 'Colour Produced', 'Location', 'Effect of Age/Genetics'], rows: [
                                        ['Eumelanin', 'Black to brown — large, dense granules; absorbs most light', 'Cortex (and some cuticle in dark hair)', 'Reduces with age; first to be affected by greying'],
                                        ['Pheomelanin', 'Red to yellow-gold — smaller, diffuse granules; reflects warm light wavelengths', 'Cortex', 'Persists longer than eumelanin; responsible for the warm underlying pigment in brown and black hair'],
                                        ['White hair (depigmented)', 'No melanin — purely structural colour (translucent fibers appear white)', 'Cortex lacks pigment entirely', 'Caused by cessation of melanocyte activity in the hair bulb'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Colouring white/grey hair requires special consideration:' },
                                {
                                    type: 'bullets', items: [
                                        'White hair has no underlying pigment — it will reflect the applied colour tone exactly, often more intensely',
                                        'Resistant white hair (caused by a thick, tightly-packed cuticle) may require pre-softening to allow penetration',
                                        'Grey hair (a mix of white and pigmented strands) may produce a salt-and-pepper effect when coloured with lighter shades',
                                        'Coverage formulas must be chosen carefully: a formula that is too warm will look orange-gold on white hair; too cool may look ashy or flat',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's11-3',
                            title: '11.3 Types of Hair Colour — Depth, Durability, and Chemistry',
                            content: [
                                {
                                    type: 'table', headers: ['Type', 'How It Works', 'Durability', 'Lift Capability', 'Developer Needed?', 'Best For'], rows: [
                                        ['Temporary colour', 'Large, pre-formed dye molecules coat the outside of the cuticle', '1–3 shampoos', 'None — deposit only', 'No', 'Covering grey temporarily; colour trial; adding tint/gloss; event styling'],
                                        ['Semi-permanent colour', 'Small molecules penetrate the cuticle into the upper cortex; no developer required', '4–12 shampoos', 'None — deposit only', 'No (no developer)', 'Enhancing natural colour; covering up to 50% grey; refreshing faded colour; beginners'],
                                        ['Demi-permanent colour', 'Slightly larger molecules; uses very low-volume developer (5–10 vol.); enters cortex', '12–26 shampoos', 'None to minimal tonal shift only — no lightening', 'Yes — 5–10 vol.', 'Grey blending (not full coverage); refreshing colour; toning after highlights; glossing'],
                                        ['Permanent oxidative colour', 'Small precursor dye molecules penetrate deep into cortex; developer oxidizes them into larger, permanently trapped colour molecules; also lightens natural melanin', 'Until cut out or grown out', 'Up to 1–3 levels of lift depending on developer volume', 'Yes — 10, 20, 30, or 40 vol.', 'Full grey coverage; level changes; toning; most colour services'],
                                        ['Bleach (oxidative lightener)', 'Oxidizing agents dissolve melanin granules in the cortex — removes colour without depositing', 'Permanent', 'Lift only — up to 7–9 levels', 'Yes — 10–40 vol.', 'Pre-lightening before toning; highlights; balayage; high-lift blonde services'],
                                        ['High-lift colour', 'Permanent colour with extra-high developer (40 vol.) for maximum lift + tone deposit in one step', 'Permanent', 'Up to 4–5 levels of lift', 'Yes — 40 vol. only', 'Lightening dark blonde to very light blonde in one step; must start at level 6 or lighter'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's11-4',
                            title: '11.4 Developer (Hydrogen Peroxide) — Volumes and Effects',
                            content: [
                                {
                                    type: 'table', headers: ['Volume', 'Hydrogen Peroxide %', 'Lift Effect', 'Best Used For'], rows: [
                                        ['5 vol.', '1.5%', 'No lift — deposit and gloss only', 'Toning lightened hair; demi-permanent colour; glazing and glossing'],
                                        ['10 vol.', '3%', 'Minimal lift (1/2 level or less)', 'Darkening the hair; full coverage of white hair on target level; darkening existing colour'],
                                        ['20 vol.', '6%', '1–2 levels of lift', 'Standard lift for permanent colour; full grey coverage; most colour changes staying within close levels'],
                                        ['30 vol.', '9%', '2–3 levels of lift', 'Moderate lightening; lift from dark brown to light brown, or from light brown toward blonde'],
                                        ['40 vol.', '12%', '3–4 levels of lift', 'Maximum lift with permanent colour; use with high-lift colour or bleach for significant lightening; use with caution — heat and scalp damage risk'],
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'Developer Safety Rules', items: [
                                        'Never use 40 vol. developer on the scalp for more than 30 minutes — heat damage and irritation risk',
                                        'Never use 40 vol. developer with bleach directly on the scalp — use 20–30 vol. only for on-scalp lightening',
                                        'Always mix colour immediately before use — developer begins oxidizing once mixed',
                                        'Never store mixed colour — discard any unused mixture',
                                        'Higher volume = more heat generated = more potential for damage and inconsistent results',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's11-5',
                            title: '11.5 Formulation and the Law of Colour',
                            content: [
                                { type: 'keyTerm', term: 'Law of Colour', definition: 'The three primary colours in pigment theory — red, yellow, and blue — combine to produce all other colours. Mixing complementary colours (opposites on the colour wheel) produces brown or grey (neutralization). This principle governs all colour formulation decisions.' },
                                {
                                    type: 'table', headers: ['Primary', '+', 'Primary', '=', 'Secondary'], rows: [
                                        ['Red', '+', 'Yellow', '=', 'Orange'],
                                        ['Yellow', '+', 'Blue', '=', 'Green'],
                                        ['Red', '+', 'Blue', '=', 'Violet'],
                                    ]
                                },
                                { type: 'paragraph', text: 'The colour wheel shows complementary pairs — colours opposite each other — that neutralize each other when mixed:' },
                                {
                                    type: 'bullets', items: [
                                        'Red ↔ Green (neutralize each other)',
                                        'Orange ↔ Blue (neutralize each other)',
                                        'Yellow ↔ Violet / Purple (neutralize each other)',
                                    ]
                                },
                                { type: 'paragraph', text: 'Formulation principles for permanent colour:' },
                                {
                                    type: 'bullets', items: [
                                        'To go darker: use the target level with appropriate volume developer',
                                        'To go lighter up to 2 levels: use 20–30 vol. developer with the target level shade',
                                        'To go lighter more than 2 levels from dark brown: pre-lighten with bleach first, then tone',
                                        'To cover resistant white hair: add a warm base shade to the formula (mixing warm + target level)',
                                        'To achieve a cooler, ashier result: select a cool/ash tone; be aware the warm underlying pigment may fight through — pre-lightening may be needed',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Colour Math', 'Formula Example'], rows: [
                                        ['Lifting 2 levels from Level 6 to Level 8', 'Level 8 colour + 30 vol. developer'],
                                        ['Full grey coverage at Level 6', 'Level 6 colour + 20 vol. developer (mix of warm/natural + target tone if resistant)'],
                                        ['Toning after bleach to pale yellow (Level 9)', 'Violet/pearl toner + 10 vol. developer'],
                                        ['Correcting orange brassiness at Level 7', 'Blue-ash toner + 10–20 vol. OR demi-permanent blue-based shade'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's11-6',
                            title: '11.6 Highlights, Balayage, and Techniques',
                            content: [
                                {
                                    type: 'table', headers: ['Technique', 'Method', 'Result', 'Client Profile'], rows: [
                                        ['Foil highlights', 'Thin sections of hair selected via weaving technique; placed on foil; lightener applied; foil folded to process', 'Precise, controlled lightening; even distribution; high contrast or blended', 'Clients wanting consistent coverage; fine hair needing controlled placement'],
                                        ['Balayage', 'Freehand painting of lightener or colour onto the surface of subsections; no foil; processed open-air on cotton or with wrap', 'Soft, sun-kissed, natural graduation; higher concentration at ends and face frame; lower at roots', 'Natural, low-maintenance, grown-out look; medium to thick hair'],
                                        ['Babylights', 'Very thin, fine sections scattered throughout the head — mimics the naturally fine highlights of childhood', 'Very fine, natural, multi-dimensional blond effect throughout', 'Blondes wanting natural dimension; fine hair'],
                                        ['Ombre', 'A gradual transition from dark roots to lighter ends — the colour is swept from a defined mid-shaft point to the ends', 'High-contrast dark-to-light gradient from roots to ends', 'Dramatic look; low root maintenance'],
                                        ['Sombre (soft ombre)', 'Same concept as ombre but with a more gradual, subtle gradient — minimal contrast', 'Soft, blended, natural-looking transition', 'Low-maintenance; natural look with interest'],
                                        ['Colour melt', 'Multiple shades melted and blended together through the length in a seamless, blended gradient', 'Seamless, editorial, multi-tonal look with no harsh lines', 'Fashion colour; creative clients; editorial and runway'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Bleaching safety on scalp vs. off-scalp:' },
                                {
                                    type: 'bullets', items: [
                                        'On-scalp (at root touch-up): use maximum 20–30 vol. developer with bleach; scalp heat increases processing speed; watch carefully for scalp irritation',
                                        'Off-scalp (foils, balayage): can use up to 40 vol. developer as there is no scalp contact; but 30 vol. is recommended for fine or sensitized hair',
                                        'Never overlap bleach onto previously lightened hair — over-bleaching causes breakage and dissolution of the hair shaft',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q11-1', question: 'On the level scale, which number represents the darkest hair?', options: ['10', '7', '1', '5'], correctIndex: 2, explanation: 'Level 1 is the darkest (black). Level 10 is the lightest (lightest blonde). The level system measures only lightness/darkness, not tone.' },
                        { id: 'q11-2', question: 'The complementary colour used to neutralize orange/brassy tones is:', options: ['Red', 'Blue (or blue-based ash)', 'Yellow', 'Violet'], correctIndex: 1, explanation: 'Orange and blue are complementary (opposite on the colour wheel). Blue-based ash toners neutralize orange brassiness by canceling out the warm orange pigment.' },
                        { id: 'q11-3', question: 'Which developer volume produces approximately 2 levels of lift when used with permanent oxidative colour?', options: ['5 vol. (1.5%)', '10 vol. (3%)', '20 vol. (6%)', '30 vol. (9%)'], correctIndex: 3, explanation: '20 vol. provides 1–2 levels of lift (standard). 30 vol. provides 2–3 levels of lift, making it the correct answer for approximately 2 levels of lift in a colour service.' },
                        { id: 'q11-4', question: 'A client has naturally dark brown (Level 3) hair and wants to achieve a pale blonde (Level 9). The correct approach is:', options: ['Apply a Level 9 permanent colour with 40 vol. developer directly', 'Pre-lighten with bleach to achieve the required level first, then apply a toner', 'Apply a high-lift colour at 20 vol. in one step', 'Apply a demi-permanent Level 9 shade'], correctIndex: 1, explanation: 'A 6-level lift (from Level 3 to Level 9) cannot be achieved with permanent colour — the maximum lift is typically 3–4 levels with high-lift at 40 vol. The correct approach is bleach pre-lightening to the target pale yellow, then toning.' },
                        { id: 'q11-5', question: 'Balayage differs from traditional foil highlighting in that:', options: ['It uses stronger bleach formulas for faster results', 'Colour is painted freehand onto the surface of sections without foil, creating a soft, graduated, sun-kissed effect', 'It requires higher-volume developer (40 vol.) in all cases', 'It must be done on dry hair only'], correctIndex: 1, explanation: 'Balayage is a freehand technique — colour or lightener is painted onto selected surface areas without foil. The open-air processing creates a softer, more graduated, natural result compared to the more precise, even result of foiling.' },
                        { id: 'q11-6', question: 'Eumelanin is responsible for which hair colours?', options: ['Red and golden blonde tones only', 'Black to brown hair colours', 'White hair (lack of melanin)', 'Copper and strawberry blonde tones'], correctIndex: 1, explanation: 'Eumelanin produces black to brown hair colours. Pheomelanin produces red to yellow-gold tones. The two types combine in varying ratios to produce all natural hair colours.' },
                        { id: 'q11-7', question: 'When formulating a permanent colour to cover resistant white hair, a hairstylist should:', options: ['Use a lighter level than the target to compensate for the white', 'Add a warm base or mix a warm complementary shade into the formula to improve coverage', 'Use only 10 vol. developer for maximum deposit', 'Avoid using any tone — use only natural/neutral shades'], correctIndex: 1, explanation: 'Resistant white hair often has a tightly closed cuticle and no underlying pigment. Adding a warm-base shade helps the colour penetrate and provides a more even, full coverage result.' },
                        { id: 'q11-8', question: 'The maximum recommended developer volume for on-scalp bleach application is:', options: ['10 vol.', '20–30 vol.', '40 vol.', '50 vol.'], correctIndex: 1, explanation: 'For on-scalp bleach (root touch-up lightening), a maximum of 20–30 vol. developer is recommended. The scalp\'s natural body heat accelerates processing. 40 vol. on scalp creates significant risk of burns and damage.' },
                    ],
                },

                // ─── CHAPTER 12 ───────────────────────────────────────────────────────
                {
                    id: 'ch-12',
                    number: 12,
                    title: 'Hair Extensions',
                    subtitle: 'S1746 — Extension types, application methods, maintenance, and removal',
                    isFree: false,
                    estimatedMinutes: 25,
                    sections: [
                        {
                            id: 's12-1',
                            title: '12.1 Extension Hair Types and Selection',
                            content: [
                                {
                                    type: 'table', headers: ['Hair Type', 'Characteristics', 'Advantages', 'Limitations'], rows: [
                                        ['Human hair (Remy)', 'All cuticles aligned in same direction (root to tip) — prevents tangling; highest quality', 'Can be coloured, permed, styled with heat exactly like natural hair; most natural look and feel', 'Most expensive; requires proper care to maintain longevity; can be damaged by overprocessing'],
                                        ['Human hair (non-Remy)', 'Cuticles mixed in direction; often chemically treated with silicone to smooth', 'Less expensive than Remy; wide availability', 'Tangles more easily once silicone coating washes off; cannot always be coloured; limited longevity'],
                                        ['Synthetic hair', 'Man-made fibers (nylon, polyester, acrylic) — not actual hair protein', 'Most affordable; holds style well; wide colour range; no colour or perm services possible', 'Cannot be coloured or permed; lower heat tolerance; looks less natural; cannot be styled with heat above 120°C (check specific fiber rating)'],
                                        ['Heat-resistant synthetic', 'Specially engineered synthetic fiber designed to tolerate some heat styling', 'Can be styled with heat tools at prescribed temperatures; less expensive than human hair', 'Still cannot be coloured or chemically processed; limited heat tolerance compared to human hair'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Extension length and colour matching:' },
                                {
                                    type: 'bullets', items: [
                                        'Match the extension colour to the client\'s mid-length or end colour (not the root) for the most natural blend',
                                        'For blended effects, use two shades that complement the client\'s natural colour variation',
                                        'Test a single extension for colour match before full application',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's12-2',
                            title: '12.2 Application Methods Comparison',
                            content: [
                                {
                                    type: 'table', headers: ['Method', 'How Applied', 'Duration', 'Maintenance / Removal', 'Hair Type Suitability', 'Key Precaution'], rows: [
                                        ['Clip-in extensions', 'Weft of hair with pressure-sensitive clips attached; client or stylist clips in and removes daily', '1 day to 1 week (temporary, removable)', 'No salon maintenance; removed at home daily or as desired', 'All hair types; most gentle method', 'Do not sleep in clip-ins — causes tangling and traction'],
                                        ['Tape-in extensions', 'Thin wefts of hair with medical-grade adhesive tabs sandwiched on either side of a thin section of natural hair', '6–8 weeks before move-up appointment', 'Move-up every 6–8 weeks; removal with adhesive remover solution; risk of damage if removed incorrectly', 'Fine to medium hair; lies very flat for natural result', 'Never apply oil-based products near the tape bonds — will loosen adhesive prematurely'],
                                        ['Keratin bond (fusion) — K-tip', 'Individual strands with a keratin bond at the root; attached to small sections of natural hair using a heat bonding tool', '3–5 months with proper care', 'Professional removal only; remove with bond remover solution or heat; high risk of damage if not done correctly', 'Medium to thick hair; not for fine or fragile hair', 'Heat from flat irons or styling tools near the bond can melt and migrate the keratin'],
                                        ['Micro-ring / micro-bead (cold fusion)', 'Individual extension strand attached to a small section of natural hair using a tiny metal ring crimped with pliers — no adhesive or heat', '2–3 months before move-up', 'Professional move-up; remove by reversing the crimp with pliers; minimal product damage if done correctly', 'Medium to thick hair; not for fine hair', 'Avoid applying styling products directly to the rings — can cause corrosion and tangling'],
                                        ['Sew-in / weave', 'Natural hair braided into cornrows; wefts of extension hair sewn onto the braids with a curved needle and thread', '6–8 weeks', 'Removal by cutting thread; cornrows removed; professional only', 'All hair types; particularly common for afro-textured hair', 'Cornrows must not be too tight — traction alopecia risk; scalp must be cleansed regularly through the weave'],
                                        ['Wigs and toppers', 'Full wig (covers entire head) or topper (covers specific crown/part area) on a cap', 'Variable — worn and removed', 'No installation required; wash and style separately', 'All hair types; ideal for medical hair loss; zero traction on natural hair', 'Secure properly; use wig grip band for comfort; condition natural hair underneath regularly'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's12-3',
                            title: '12.3 Extension Maintenance and Contraindications',
                            content: [
                                { type: 'paragraph', text: 'Client homecare instructions for extensions:' },
                                {
                                    type: 'bullets', items: [
                                        'Brush gently from ends upward with a loop brush or extension-safe brush to avoid pulling at the bonds',
                                        'Wash regularly (every 1–2 weeks) with sulfate-free shampoo — avoid washing less than once a week to prevent buildup and scalp issues',
                                        'Apply conditioner to mid-lengths and ends only — keep conditioner and oily products away from bonded areas',
                                        'Sleep with hair in a loose braid or ponytail to minimize tangling',
                                        'Avoid chlorine and salt water contact with bonds; wear a swim cap when swimming',
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Contraindication', 'Reason'], rows: [
                                        ['Active scalp infections or irritation', 'Risk of worsening infection; product spread; client discomfort under extensions'],
                                        ['Severe traction alopecia or hairline recession', 'Any additional tension will worsen the hair loss'],
                                        ['Very fine or fragile hair', 'Weight of extensions causes breakage; bond attachments can pull out fine hair'],
                                        ['Highly porous or overprocessed hair', 'Hair cannot support the weight of extensions without breakage at the attachment point'],
                                        ['Unrealistic expectations', 'Extensions cannot create length that exceeds a realistic natural blend; set expectations clearly'],
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q12-1', question: 'Remy human hair extensions are distinguished from non-Remy by:', options: ['Being made of synthetic fibers that closely mimic human hair', 'Having all cuticles aligned in the same direction (root to tip) — preventing tangling', 'Being the least expensive type of extension available', 'Requiring no maintenance after application'], correctIndex: 1, explanation: 'Remy hair has cuticles all aligned root-to-tip, which prevents tangling and matting. Non-Remy hair has mixed cuticle directions and often relies on silicone coating to smooth initially.' },
                        { id: 'q12-2', question: 'Which extension method requires NO heat and NO adhesive for application?', options: ['Keratin bond (K-tip) fusion', 'Tape-in extensions', 'Micro-ring / micro-bead (cold fusion)', 'Sew-in / weave'], correctIndex: 2, explanation: 'Micro-ring/micro-bead extensions use a small metal ring crimped with pliers to attach the extension to natural hair — no heat and no adhesive are involved, which is why they are called "cold fusion."' },
                        { id: 'q12-3', question: 'Why should oil-based products be avoided near tape-in extension bonds?', options: ['Oil discolours the tape', 'Oil breaks down the adhesive bond, causing premature slippage and extension loss', 'Oil causes the extension hair to tangle', 'Oil causes a chemical reaction with the human extension hair'], correctIndex: 1, explanation: 'The medical-grade adhesive used in tape-in extensions is broken down by oils and oil-based products. Contact with oils causes the bond to loosen prematurely, leading to extension slippage and loss.' },
                        { id: 'q12-4', question: 'Which extension method carries the HIGHEST risk of traction alopecia if applied incorrectly?', options: ['Clip-in extensions (temporary)', 'Micro-ring / micro-bead extensions', 'Sew-in weave with tight cornrows', 'Tape-in extensions'], correctIndex: 2, explanation: 'Sew-in weave requires the natural hair to be tightly braided into cornrows. If the cornrows are excessively tight, the constant tension causes traction alopecia, particularly along the hairline and temples.' },
                    ],
                },
            ],
        },

        // =========================================================================
        // PART 5 — EXAM PREPARATION
        // =========================================================================
        {
            id: 'part-5',
            title: 'Part 5: Exam Preparation',
            color: '#922B21',
            description: 'Chapters 13–15 provide a full 50-question timed mock exam, a comprehensive 80-term glossary, and proven test-taking strategies.',
            chapters: [

                // ─── CHAPTER 13 ───────────────────────────────────────────────────────
                {
                    id: 'ch-13',
                    number: 13,
                    title: 'Full Mock Exam',
                    subtitle: 'Timed 50-question practice exam covering all 17 official exam subjects',
                    isFree: false,
                    estimatedMinutes: 60,
                    sections: [
                        {
                            id: 's13-1',
                            title: '13.1 Mock Exam Instructions',
                            content: [
                                { type: 'paragraph', text: 'This mock exam contains 50 questions mirroring the format, difficulty level, and subject distribution of the actual Skilled Trades Ontario (STO) 332A Hairstylist certification examination.' },
                                {
                                    type: 'infoBox', title: 'Mock Exam Rules — Simulate Real Exam Conditions', items: [
                                        '⏱️ Time limit: 90 minutes for 50 questions (same pace as the real exam)',
                                        '📵 No reference materials — attempt all questions from memory',
                                        '✏️ Answer all questions — there is no penalty for guessing',
                                        '🎯 Passing mark: 70% (35 out of 50 questions correct)',
                                        '📊 After completing: review every question — especially ones you got wrong or guessed',
                                        '🔄 Retake this exam multiple times — your score should improve each attempt',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q13-1', question: 'Under OHSA, which right allows a worker to stop work they believe is unsafe without fear of penalty?', options: ['Right to Know', 'Right to Participate', 'Right to Refuse', 'Right to Resign'], correctIndex: 2, explanation: 'The Right to Refuse unsafe work is protected by OHSA. Workers cannot be penalized (fired, demoted, disciplined) for exercising this right.' },
                        { id: 'q13-2', question: 'What WHMIS pictogram indicates a flammable substance?', options: ['Skull and crossbones', 'Flame symbol', 'Exclamation mark', 'Health hazard (star burst)'], correctIndex: 1, explanation: 'The flame pictogram is used under WHMIS 2015 (GHS) for flammable gases, liquids, solids, and aerosols.' },
                        { id: 'q13-3', question: 'Which of the following correctly describes sterilization?', options: ['Reduces the number of pathogens to a safe level', 'Kills most but not all pathogens on non-living surfaces', 'Destroys all microorganisms including bacterial spores', 'Removes visible debris from implements'], correctIndex: 2, explanation: 'Sterilization is the highest level of decontamination — it destroys ALL microorganisms including the most resistant bacterial endospores.' },
                        { id: 'q13-4', question: 'The FIRST and most critical step before disinfecting implements is:', options: ['Immersing in quat solution', 'Pre-cleaning to remove all visible organic matter', 'Rinsing with alcohol', 'Placing in UV cabinet'], correctIndex: 1, explanation: 'Organic matter (blood, hair, product) blocks disinfectants from reaching the surface. Pre-cleaning is always the first step — disinfection is ineffective on soiled implements.' },
                        { id: 'q13-5', question: 'Which hair condition is a CONTRAINDICATION requiring the hairstylist to refuse all services?', options: ['Dry dandruff (pityriasis capitis simplex)', 'Seborrhea', 'Tinea capitis (scalp ringworm)', 'Alopecia areata'], correctIndex: 2, explanation: 'Tinea capitis is a highly contagious fungal infection. All services must be refused, the client referred to a physician, and all implements disinfected.' },
                        { id: 'q13-6', question: 'The cortex is the site of ALL permanent chemical changes because it contains:', options: ['Melanin and disulfide bonds in the keratinized protein structure', 'The cuticle scales that control absorption', 'Air pockets and medullary cells', 'The dermal papilla and blood supply'], correctIndex: 0, explanation: 'The cortex contains keratin chains linked by disulfide bonds, hydrogen bonds, and ionic bonds, plus melanin. All permanent colour, perm, and relaxer chemistry targets the cortex.' },
                        { id: 'q13-7', question: 'A client\'s hair stretches 50% when wet and springs back fully. This indicates:', options: ['Poor elasticity requiring a protein treatment before any service', 'Normal, healthy elasticity', 'High porosity requiring a pre-service filler', 'Excessive moisture — the hair should be dried before consultation'], correctIndex: 1, explanation: 'Healthy hair stretches approximately 50% of its length when wet and returns to its original length. This is the definition of normal elasticity, indicating a healthy cortex.' },
                        { id: 'q13-8', question: 'The ANAGEN phase of hair growth lasts approximately:', options: ['2–3 weeks', '3–4 months', '2–7 years', '1–2 days'], correctIndex: 2, explanation: 'The anagen (active growth) phase lasts 2–7 years. Hair grows approximately 1–1.5 cm per month. Longer anagen = longer potential maximum hair length.' },
                        { id: 'q13-9', question: 'Healthy hair and scalp have a pH of approximately:', options: ['7.0 (neutral)', '9.5 (alkaline)', '4.5–5.5 (slightly acidic)', '2.0 (strongly acidic)'], correctIndex: 2, explanation: 'The healthy hair and scalp is slightly acidic (pH 4.5–5.5) — this keeps the cuticle smooth and closed, provides resistance to pathogens, and is the baseline all product formulations work around.' },
                        { id: 'q13-10', question: 'Which massage movement opens and closes the scalp massage treatment and produces a relaxing, soothing effect?', options: ['Petrissage', 'Tapotement', 'Vibration', 'Effleurage'], correctIndex: 3, explanation: 'Effleurage uses light, slow, gliding strokes. It is the opening and closing movement of every scalp massage, producing relaxation and promoting lymphatic drainage.' },
                        { id: 'q13-11', question: 'A 90° elevation in haircutting produces which weight distribution?', options: ['Maximum weight at the perimeter', 'Weight line above the perimeter (graduation)', 'Even, distributed layers throughout with no perimeter concentration', 'Minimal weight at the nape only'], correctIndex: 2, explanation: '90° elevation (hair held straight out from the head) creates a round layer — weight is evenly distributed throughout. No perimeter concentration; no graduation.' },
                        { id: 'q13-12', question: 'A traveling guide is used when cutting:', options: ['Blunt one-length perimeters', 'Graduated nape areas', 'Uniform layers throughout the head', 'Precision fringes (bangs)'], correctIndex: 2, explanation: 'A traveling guide moves section by section through the haircut, carrying length information forward — it is the correct guide type for layered cuts (uniform layers and long layers).' },
                        { id: 'q13-13', question: 'The "cool shot" at the end of blow-drying locks in the style by:', options: ['Removing excess moisture rapidly from the hair shaft', 'Closing the cuticle and re-forming hydrogen bonds in the new position', 'Breaking and re-forming disulfide bonds through heat and cold cycles', 'Activating the heat protectant product'], correctIndex: 1, explanation: 'Cool air closes the cuticle (increasing shine) and re-forms the hydrogen bonds that were broken by heat — "setting" the shape created during blow-drying.' },
                        { id: 'q13-14', question: 'Which styling product provides the highest hold and a wet, high-gloss finish?', options: ['Mousse', 'Shine serum', 'Strong-hold gel', 'Hair wax'], correctIndex: 2, explanation: 'Strong-hold gel forms a rigid polymer film around hair that provides maximum hold and a wet, high-gloss look when it dries.' },
                        { id: 'q13-15', question: 'In perm chemistry, neutralization re-forms disulfide bonds by:', options: ['Breaking them with ammonium thioglycolate', 'Reducing the alkalinity with an acid rinse', 'Oxidizing the open sulfur bonds back into disulfide linkages in the new position', 'Removing the waving lotion with a clarifying shampoo'], correctIndex: 2, explanation: 'Neutralization is an oxidation reaction. The neutralizer (hydrogen peroxide or sodium bromate) oxidizes the open sulfur atoms (created by ATG) back into disulfide bonds, locked in the shape of the rod.' },
                        { id: 'q13-16', question: 'Acid wave perms require which additional step that alkaline (cold wave) perms do not?', options: ['A pre-service clarifying shampoo', 'Heat (from a hood dryer or the exothermic activator)', 'Neutralization with hydrogen peroxide', 'A patch test 24–48 hours before service'], correctIndex: 1, explanation: 'Acid wave perms use glyceryl monothioglycolate (GMTG), which requires heat to be activated and penetrate the cortex effectively. Alkaline (cold wave) perms process at room temperature without added heat.' },
                        { id: 'q13-17', question: 'Overlapping a relaxer retouch onto previously relaxed hair causes:', options: ['Improved straightening results on the previously processed hair', 'Severe over-processing and breakage — the most common error in relaxer services', 'A temporary darkening of the previously relaxed section', 'Improved shine on the previously processed length'], correctIndex: 1, explanation: 'Previously relaxed hair has already been lanthionized. Additional hydroxide relaxer causes extreme over-softening of the already-processed hair, resulting in severe breakage or dissolution.' },
                        { id: 'q13-18', question: 'Level 1 on the hair level scale represents:', options: ['Lightest blonde', 'Medium brown', 'Darkest black', 'Dark blonde'], correctIndex: 2, explanation: 'The level scale runs from 1 (darkest/black) to 10 (lightest blonde). Level 1 is black; Level 10 is the lightest blonde.' },
                        { id: 'q13-19', question: 'To neutralize an orange, brassy tone left after lightening, the correct toner choice is:', options: ['A warm gold toner', 'A blue or blue-ash based toner', 'A red-based toner', 'A violet/purple toner'], correctIndex: 1, explanation: 'Orange and blue are complementary colours — they neutralize each other. A blue or blue-ash toner is applied after lightening to cancel orange brassiness, typically at Level 7 underlying pigment.' },
                        { id: 'q13-20', question: 'Which developer volume provides the standard lift for permanent hair colour (1–2 levels of lift)?', options: ['5 vol. (1.5%)', '10 vol. (3%)', '20 vol. (6%)', '40 vol. (12%)'], correctIndex: 2, explanation: '20 vol. (6% hydrogen peroxide) is the standard developer for permanent colour — providing 1–2 levels of lift. 10 vol. is used for deposit-only or grey coverage; 30 vol. for 2–3 levels; 40 vol. for maximum lift.' },
                        { id: 'q13-21', question: 'Remy human hair extensions are preferred over non-Remy because:', options: ['They are less expensive', 'All cuticles are aligned in the same direction, preventing tangling and matting', 'They can be coloured with temporary colour only', 'They are made from heat-resistant synthetic fibers'], correctIndex: 1, explanation: 'Remy hair has all cuticles aligned root-to-tip. Aligned cuticles lay flat and do not catch on each other, preventing tangling, matting, and premature wear.' },
                        { id: 'q13-22', question: 'Which type of shampoo should be used before a chemical service to remove product buildup?', options: ['Moisturizing shampoo', 'Clarifying (chelating) shampoo', 'Colour-safe sulfate-free shampoo', 'Baby shampoo'], correctIndex: 1, explanation: 'Clarifying shampoo removes styling product residue, hard water mineral deposits, and excess oils that would otherwise act as a barrier to even chemical penetration.' },
                        { id: 'q13-23', question: 'The parietal ridge is the:', options: ['Peak of the crown', 'Widest area of the head where it begins to curve inward above the ears', 'Bony prominence at the back of the skull', 'Hairline at the nape of the neck'], correctIndex: 1, explanation: 'The parietal ridge is the widest point of the head — the area where the skull begins to curve inward toward the top. It is the primary reference for weight distribution in haircutting.' },
                        { id: 'q13-24', question: 'Which face shape is considered the most versatile because almost any hairstyle is flattering?', options: ['Square', 'Round', 'Oval', 'Oblong'], correctIndex: 2, explanation: 'The oval face shape is considered the ideal in hairstyling because its balanced proportions mean almost any cut, length, or style will be flattering. All other shapes are typically styled to create the illusion of an oval.' },
                        { id: 'q13-25', question: 'The Employment Standards Act (ESA) governs:', options: ['Workplace safety and hazard communication', 'Minimum wage, hours of work, vacation pay, and termination notice', 'Trade certification and apprenticeship registration', 'Privacy of client records and personal information'], correctIndex: 1, explanation: 'The ESA sets minimum employment standards in Ontario including minimum wage, maximum hours, overtime, vacation pay, public holidays, pregnancy and parental leave, and termination requirements.' },
                        { id: 'q13-26', question: 'SMART goal setting stands for:', options: ['Simple, Meaningful, Aligned, Reasonable, Timed', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Strategic, Manageable, Attainable, Rational, Trackable', 'Structured, Mindful, Ambitious, Realistic, Thorough'], correctIndex: 1, explanation: 'SMART = Specific, Measurable, Achievable, Relevant, Time-bound. Each element transforms a vague aspiration into an actionable, trackable plan.' },
                        { id: 'q13-27', question: 'Which of the following is an example of petrissage in scalp massage?', options: ['Light, smooth gliding strokes across the scalp with flat palms', 'Firm kneading and circular lifting movements with thumbs and fingertips', 'Rapid tapping with the fingertips to stimulate circulation', 'Fine, rapid trembling movements to reduce muscle tension'], correctIndex: 1, explanation: 'Petrissage uses kneading, lifting, and circular pressure — it is the main body of the scalp massage and stimulates blood circulation and the sebaceous glands.' },
                        { id: 'q13-28', question: 'Which layer of skin contains the hair follicles, sebaceous glands, and blood vessels?', options: ['Epidermis', 'Dermis', 'Hypodermis', 'Stratum corneum'], correctIndex: 1, explanation: 'The dermis is the middle layer of the skin. It houses hair follicles, sebaceous glands, sweat glands, blood vessels, nerve endings, collagen, and elastin.' },
                        { id: 'q13-29', question: 'Pre-booking at the end of a client\'s appointment means:', options: ['Charging the client in advance for the next service', 'Scheduling the client\'s next appointment before they leave the salon', 'Calling the client the day before their scheduled appointment', 'Booking multiple services in a single appointment'], correctIndex: 1, explanation: 'Pre-booking is the practice of scheduling the next appointment at the end of the current visit. It is the most effective client retention strategy and provides predictable income for the stylist.' },
                        { id: 'q13-30', question: 'A patch (predisposition) test for colour is applied how far in advance of the service?', options: ['Immediately before the service', '1 hour before the service', '24–48 hours before the service', 'One week before the service'], correctIndex: 2, explanation: 'The patch test must be applied 24–48 hours before the service to allow sufficient time for a delayed hypersensitivity reaction to develop. Applying it immediately before is not sufficient.' },
                        { id: 'q13-31', question: 'The S-test during permanent waving checks whether:', options: ['The neutralizer has been rinsed completely', 'The hair has softened sufficiently to take the curl shape of the rod', 'The waving lotion pH is within the correct range', 'The rod placement is even throughout the head'], correctIndex: 1, explanation: 'The S-test involves gently unrolling a test rod (usually at the nape) to see if the hair forms an S-shape equal to the rod diameter — confirming that sufficient reduction (softening) has occurred.' },
                        { id: 'q13-32', question: 'Which bond is broken by water and heat and re-forms when hair dries or cools?', options: ['Disulfide bond', 'Peptide bond', 'Hydrogen bond', 'Ionic (salt) bond'], correctIndex: 2, explanation: 'Hydrogen bonds are weak, temporary bonds broken by water and heat. They re-form as the hair dries or cools around a new shape — the chemical basis for all wet and thermal styling.' },
                        { id: 'q13-33', question: 'A graduate bob differs from a one-length (blunt) cut in that:', options: ['It uses 90° elevation throughout', 'Hair is stacked above the perimeter by cutting at angles between 1–89°, creating a weight line above the nape', 'It requires no guide', 'The back is longer than the front in all variations'], correctIndex: 1, explanation: 'A graduated (stacked) cut uses angles between 1–89° elevation, building weight and stacking the hair above the perimeter line — creating the characteristic "stacked" shape above the nape.' },
                        { id: 'q13-34', question: 'Which of the following is NOT a role of the dermal papilla?', options: ['Supplying blood to the hair bulb', 'Delivering oxygen and nutrients for hair growth', 'Producing sebum to lubricate the hair shaft', 'Providing the signals that initiate and sustain hair growth'], correctIndex: 2, explanation: 'The dermal papilla is the vascular connector at the base of the follicle — it delivers blood, oxygen, and growth signals. Sebum is produced by the sebaceous gland, which is a separate structure.' },
                        { id: 'q13-35', question: 'WHMIS 2015 requires all three of the following EXCEPT:', options: ['Hazard labels on all controlled products', 'Safety Data Sheets (SDS) for all hazardous products', 'Worker education and training about hazards', 'A government inspector present during all chemical applications'], correctIndex: 3, explanation: 'WHMIS 2015 requires labels, SDS, and worker education. A government inspector is not required to be present during normal salon operations.' },
                        { id: 'q13-36', question: 'The "law of colour" in hair colouring refers to:', options: ['Provincial regulations governing colour product use', 'The principle that mixing complementary (opposite) colours neutralizes them, and primary colours combine to produce all others', 'The rule that colour should always be applied darker than the target level', 'The formula for calculating developer volume'], correctIndex: 1, explanation: 'The law of colour in pigment theory describes how the three primary colours (red, yellow, blue) combine to make all others, and how complementary colour pairs (red/green, orange/blue, yellow/violet) neutralize each other.' },
                        { id: 'q13-37', question: 'Which extension method uses a curved needle and thread to attach wefts to braided cornrows?', options: ['Tape-in', 'Micro-ring (cold fusion)', 'Sew-in weave', 'Keratin bond (K-tip fusion)'], correctIndex: 2, explanation: 'The sew-in weave method involves braiding the natural hair into cornrows and sewing weft extension hair to the cornrows with a special curved needle and thread.' },
                        { id: 'q13-38', question: 'The purpose of using an end paper (end wrap) when winding perm rods is to:', options: ['Speed up the chemical processing', 'Protect the delicate hair tips and ensure they lie flat and even on the rod for a consistent curl', 'Create more tension at the root area', 'Hold the rod in the base position during processing'], correctIndex: 1, explanation: 'End papers prevent the delicate tips of the hair from bending or doubling back ("fishhooking") on the rod, ensuring even winding and protecting the ends from the harsh waving lotion.' },
                        { id: 'q13-39', question: 'High-porosity hair in a colour service will:', options: ['Be resistant to colour penetration and need extra processing time', 'Absorb colour very quickly, potentially unevenly, and fade faster', 'Not be affected by porosity during a colour service', 'Always produce a lighter-than-expected result'], correctIndex: 1, explanation: 'High-porosity hair has a damaged or raised cuticle that absorbs chemicals rapidly and unevenly. Colour may process too fast, streak, and fade quickly. A porosity equalizer or filler may be recommended.' },
                        { id: 'q13-40', question: 'The PASS method refers to the procedure for using a:', options: ['Neutralizer in perm chemistry', 'Fire extinguisher in an emergency', 'Razor in texturizing techniques', 'Thinning shear in weight removal'], correctIndex: 1, explanation: 'PASS = Pull the pin → Aim at the base of the fire → Squeeze the handle → Sweep side to side. It is the standard protocol for using a portable fire extinguisher.' },
                        { id: 'q13-41', question: 'Lye (sodium hydroxide) relaxers have an approximate pH of:', options: ['4.5–6.5', '7–8', '9–10', '12–14'], correctIndex: 3, explanation: 'Sodium hydroxide (lye) relaxers are extremely alkaline, with a pH of 12–14. This extreme alkalinity is what allows them to break the very strong disulfide bonds in coily, resistant hair.' },
                        { id: 'q13-42', question: 'Which technique involves painting bleach or colour freehand onto the surface of subsections without foil for a soft, graduated effect?', options: ['Foiling', 'Balayage', 'Babylights', 'Colour melt'], correctIndex: 1, explanation: 'Balayage (French for "sweeping") is the freehand painting technique where lightener or colour is swept onto the surface of sections in a painting motion without foil. The open-air processing creates a soft, natural, sun-kissed gradient.' },
                        { id: 'q13-43', question: 'The natural hair growth cycle phase in which cell division ceases and the follicle shrinks is called:', options: ['Anagen', 'Catagen', 'Telogen', 'Exogen'], correctIndex: 1, explanation: 'The catagen phase is the brief transitional period (2–3 weeks) where mitosis stops and the follicle detaches from the dermal papilla and shrinks. Only 1–2% of hairs are in catagen at any time.' },
                        { id: 'q13-44', question: 'A hairstylist\'s responsibility under the Human Rights Code includes:', options: ['Charging premium rates to clients with more complex hair needs', 'Providing equal, professional service to all clients regardless of race, gender, age, disability, or any other protected ground', 'Refusing services to any client if the stylist is uncomfortable', 'Prioritizing existing clients over new clients at all times'], correctIndex: 1, explanation: 'Ontario\'s Human Rights Code prohibits discrimination in the provision of services. Every client has the legal right to equal, professional, non-discriminatory service.' },
                        { id: 'q13-45', question: 'To achieve a Level 9 (very light blonde) result from naturally dark brown (Level 3) hair, the first step is:', options: ['Apply a Level 9 colour with 40 vol. developer', 'Apply a demi-permanent ash toner', 'Pre-lighten with bleach to remove sufficient underlying pigment', 'Apply a high-lift blonde at 30 vol.'], correctIndex: 2, explanation: 'Permanent colour cannot lift 6 levels in one step — maximum lift with high-lift colour is approximately 3–4 levels. Pre-lightening with bleach is required before toning to achieve very light blonde from dark brown hair.' },
                        { id: 'q13-46', question: 'Cross-checking a haircut involves:', options: ['Reviewing the price of the service with the client at the end', 'Re-sectioning the hair in the opposite direction to verify evenness, balance, and symmetry', 'Confirming the client\'s satisfaction by showing all angles with a mirror', 'Applying a finishing product to check the final shape'], correctIndex: 1, explanation: 'Cross-checking is a quality-control step where the stylist re-examines the cut by taking sections perpendicular to the original cutting direction — catching uneven sections, missed areas, and imbalances.' },
                        { id: 'q13-47', question: 'Which type of conditioner is applied to clean, damp hair and is NOT rinsed out?', options: ['Instant / rinse-out conditioner', 'Deep conditioning masque', 'Leave-in conditioner', 'Protein reconstructor'], correctIndex: 2, explanation: 'Leave-in conditioner is applied to towel-dried or damp hair after shampooing and is not rinsed out. It provides ongoing moisture, detangling support, and light hold or heat protection throughout the day.' },
                        { id: 'q13-48', question: 'A concave perm rod reduces "root kinking" because:', options: ['It is larger in diameter than standard rods', 'Its smaller center diameter creates a tighter mid-shaft curl while the larger ends provide a gentler angle at the root and tip', 'It does not require end papers', 'The rod surface is textured to prevent slippage'], correctIndex: 1, explanation: 'Concave (hourglass-shaped) rods have a smaller diameter at the center and larger at the ends. This creates a tighter curl at mid-shaft and a softer, more natural bend at the roots — reducing the harsh 90° root kink seen with straight-cylindrical rods.' },
                        { id: 'q13-49', question: 'An overprocessed perm results from:', options: ['Using the wrong neutralizer brand', 'Insufficient waving lotion saturation during application', 'Leaving the waving lotion on too long or using too strong a formula for the hair condition', 'Rinsing waving lotion for too long before neutralizing'], correctIndex: 2, explanation: 'Over-processing occurs when the waving lotion breaks too many disulfide bonds. The hair becomes over-softened (mushy), loses its elasticity, and may break. The S-test would show a limp, weak curl with no spring.' },
                        { id: 'q13-50', question: 'Which of the following BEST describes the purpose of a client consultation?', options: ['To upsell additional products and services', 'To assess hair condition, understand client goals, manage expectations, perform tests, and obtain informed consent before any service', 'To determine the most profitable service to perform', 'To review the client\'s loyalty card and booking history'], correctIndex: 1, explanation: 'The consultation is the most important step in any service. It establishes trust, ensures safety, confirms the service plan, manages expectations realistically, and forms the legal basis for informed consent. Everything else in the service depends on it.' },
                    ],
                },

                // ─── CHAPTER 14 ───────────────────────────────────────────────────────
                {
                    id: 'ch-14',
                    number: 14,
                    title: 'Comprehensive Glossary',
                    subtitle: 'Definitions of all key terms from Chapters 1–12',
                    isFree: false,
                    estimatedMinutes: 25,
                    sections: [
                        {
                            id: 's14-1',
                            title: '14.1 Glossary — Professional Foundations and Safety',
                            content: [
                                { type: 'keyTerm', term: 'Alopecia', definition: 'The medical term for any type of hair loss — includes multiple types: androgenetic (hereditary), alopecia areata (autoimmune), traction (from tension), and telogen effluvium (stress-related)' },
                                { type: 'keyTerm', term: 'Anagen', definition: 'The active growth phase of the hair cycle — hair grows ~1–1.5 cm per month; lasts 2–7 years; approximately 85–90% of scalp hairs are in this phase' },
                                { type: 'keyTerm', term: 'Arrector pili', definition: 'The small smooth muscle attached to each hair follicle that contracts to cause the hair to stand upright (goosebumps) in response to cold or adrenaline' },
                                { type: 'keyTerm', term: 'Bacilli', definition: 'Rod-shaped bacteria — examples include Mycobacterium tuberculosis' },
                                { type: 'keyTerm', term: 'Catagen', definition: 'The brief transitional phase of the hair cycle (2–3 weeks) where cell division ceases and the follicle detaches from the dermal papilla' },
                                { type: 'keyTerm', term: 'Chemical history', definition: 'A client\'s complete record of all previous chemical services — colour, bleach, relaxers, perms, keratin treatments — essential for safe product selection' },
                                { type: 'keyTerm', term: 'Cocci', definition: 'Spherical/round-shaped bacteria — examples include Staphylococcus (staph infections) and Streptococcus' },
                                { type: 'keyTerm', term: 'Consultation', definition: 'A structured pre-service conversation assessing hair condition, client goals, realistic outcomes, tests required, and obtaining informed consent — the single most important step in any service' },
                                { type: 'keyTerm', term: 'Contact time', definition: 'The duration a disinfectant must remain in contact with a surface to achieve efficacy — per product label; removing the disinfectant before contact time is complete renders it ineffective' },
                                { type: 'keyTerm', term: 'Contraindication', definition: 'A condition that makes a treatment inadvisable or potentially harmful — requires the hairstylist to refuse the service and refer the client appropriately' },
                                { type: 'keyTerm', term: 'Cortex', definition: 'The middle layer of the hair shaft — makes up 80–90% of hair structure; contains keratin protein, melanin, disulfide bonds, and hydrogen bonds; the site of ALL permanent chemical changes' },
                                { type: 'keyTerm', term: 'Cuticle', definition: 'The outermost layer of the hair shaft — 7–10 layers of overlapping, scale-like, translucent cells; protects the cortex; determines shine and smoothness; opened by alkaline products and closed by acidic ones' },
                                { type: 'keyTerm', term: 'Dermal papilla', definition: 'The vascular connector at the base of the hair follicle — rich in capillaries; delivers blood, oxygen, and nutrients essential for hair growth; mitosis in the surrounding hair bulb depends on it' },
                                { type: 'keyTerm', term: 'Dermis', definition: 'The middle layer of the skin — contains hair follicles, sebaceous glands, sweat glands, blood vessels, nerve endings, and structural proteins (collagen and elastin)' },
                                { type: 'keyTerm', term: 'Disinfection', definition: 'The middle level of decontamination — kills most pathogens (bacteria, viruses, fungi) on non-living surfaces; does NOT kill all spores; required standard for salon implements' },
                                { type: 'keyTerm', term: 'Disulfide bond (S-S)', definition: 'The strongest cross-link between keratin chains in the cortex — provides hair\'s primary strength and wave pattern; broken only by chemical reducing agents (perms) or hydroxide relaxers; re-formed by oxidation in perm neutralizers' },
                                { type: 'keyTerm', term: 'DTPA / Chelating agent', definition: 'A chemical agent (e.g., EDTA) that binds and removes mineral deposits (calcium, magnesium) from the hair shaft — found in clarifying and chelating shampoos; essential before chemical services in hard water areas' },
                                { type: 'keyTerm', term: 'Effleurage', definition: 'The light, smooth, gliding massage stroke that opens and closes every scalp massage — produces a relaxing effect and promotes lymphatic drainage' },
                            ],
                        },
                        {
                            id: 's14-2',
                            title: '14.2 Glossary — Technical Services',
                            content: [
                                { type: 'keyTerm', term: 'Elevation (projection)', definition: 'The angle at which hair is lifted from the head before cutting — the primary variable controlling weight distribution, graduation, and layer length in any haircut' },
                                { type: 'keyTerm', term: 'Elasticity', definition: 'The ability of the hair to stretch when wet (approximately 50% of its length) and return to its original length without breaking — indicator of cortex health and disulfide bond integrity' },
                                { type: 'keyTerm', term: 'Ergonomics', definition: 'The science of fitting the work environment and tools to the worker\'s body — critical in hairstyling for preventing musculoskeletal injuries to the back, wrists, and shoulders' },
                                { type: 'keyTerm', term: 'Eumelanin', definition: 'The melanin type that produces black and brown hair colours — large, dense granules that absorb most visible light' },
                                { type: 'keyTerm', term: 'Folliculitis', definition: 'Bacterial inflammation of the hair follicles — appears as red, inflamed pustules; a contraindication for hairstyling services' },
                                { type: 'keyTerm', term: 'Guide (guideline)', definition: 'The first section cut in a haircut that establishes the length and shape — all subsequent sections are measured and cut to match the guide. Can be stationary (fixed) or traveling (moving).' },
                                { type: 'keyTerm', term: 'GHS', definition: 'Globally Harmonized System — the international standard for hazard classification and communication upon which WHMIS 2015 is based' },
                                { type: 'keyTerm', term: 'Hard water', definition: 'Water with high concentrations of dissolved calcium and magnesium minerals — can leave deposits on hair, interfere with chemical processing, and reduce shampoo lather' },
                                { type: 'keyTerm', term: 'Hydrogen bond', definition: 'A weak, temporary cross-link in the hair cortex broken by water and heat and re-formed when hair dries or cools — the chemical basis for all temporary wet and thermal styling' },
                                { type: 'keyTerm', term: 'Informed consent', definition: 'The client\'s voluntary agreement to proceed with a service after being fully informed of the procedure, products, risks, expected results, and aftercare' },
                                { type: 'keyTerm', term: 'Keratin', definition: 'The primary protein of the hair shaft and nails — a hard, fibrous structural protein composed of amino acids linked by peptide bonds and cross-linked by disulfide, hydrogen, and ionic bonds' },
                                { type: 'keyTerm', term: 'Lanthionization', definition: 'The permanent, irreversible chemical change from hydroxide relaxers — a disulfide bond is broken and replaced by a single lanthionine bond that cannot be reversed; straight curl pattern is permanent in treated sections' },
                                { type: 'keyTerm', term: 'Level', definition: 'The lightness or darkness of hair colour — measured on a scale of 1 (black/darkest) to 10 (lightest blonde) in most systems; describes ONLY the light/dark dimension, not tone' },
                                { type: 'keyTerm', term: 'Melanin', definition: 'The natural pigment granules produced by melanocytes in the hair bulb — composed of eumelanin (black/brown) and pheomelanin (red/gold/yellow)' },
                                { type: 'keyTerm', term: 'Medulla', definition: 'The innermost, central core of the hair shaft — loosely packed cells with air spaces; may be absent in fine hair; not involved in chemical services' },
                                { type: 'keyTerm', term: 'Neutralizing shampoo', definition: 'A pH-balanced, colour-indicator shampoo used after relaxers to counteract alkalinity and confirm complete product removal; changes from pink/purple to clear when neutralization is complete' },
                                { type: 'keyTerm', term: 'OHSA', definition: 'Ontario\'s Occupational Health and Safety Act — governs workplace safety standards, defines employer and worker duties, and protects workers\' rights to know, participate, and refuse unsafe work' },
                                { type: 'keyTerm', term: 'Over-direction', definition: 'Combing or holding hair past its natural fall position before cutting — intentionally displaces weight and creates graduation effects in the cut' },
                                { type: 'keyTerm', term: 'Parietal ridge', definition: 'The widest point of the head, where the skull begins to curve inward above the ears — the primary reference point for weight distribution in haircutting' },
                                { type: 'keyTerm', term: 'Patch test (predisposition test)', definition: 'A safety test performed 24–48 hours before a colour service — a small amount of product is applied behind the ear or in the crease of the elbow; a positive reaction (redness, swelling, itching) contraindicates the service' },
                                { type: 'keyTerm', term: 'Petrissage', definition: 'Firm kneading, circular lifting, and rolling scalp massage movements — stimulates blood circulation and sebaceous gland activity; forms the main body of a scalp massage' },
                                { type: 'keyTerm', term: 'pH', definition: 'Potential of Hydrogen — a scale from 0–14 measuring hydrogen ion concentration in a solution; below 7 = acidic; 7 = neutral; above 7 = alkaline. Hair and scalp are naturally at pH 4.5–5.5 (slightly acidic).' },
                                { type: 'keyTerm', term: 'Pheomelanin', definition: 'The melanin type that produces red, copper, and golden-yellow tones — smaller granules that reflect warm light wavelengths; responsible for underlying warm pigment in hair when lightened' },
                                { type: 'keyTerm', term: 'Porosity', definition: 'The hair\'s ability to absorb and retain moisture — determined by the condition of the cuticle; tested by sliding fingers from tip to root (rough = high porosity; smooth = low porosity)' },
                                { type: 'keyTerm', term: 'Protective style', definition: 'A hairstyle that tucks the ends away from exposure and manipulation (braids, twists, buns, updos) to minimize breakage and promote length retention' },
                                { type: 'keyTerm', term: 'Safety Data Sheet (SDS)', definition: 'A standardized 16-section document required by WHMIS for all hazardous products — provides full information on chemical identity, hazards, first aid, handling, storage, disposal, and PPE requirements' },
                                { type: 'keyTerm', term: 'Sanitation', definition: 'The lowest level of decontamination — reduces pathogens to a safe level and removes visible dirt; includes washing with soap and water and laundering towels' },
                                { type: 'keyTerm', term: 'Sebaceous gland', definition: 'The gland attached to the hair follicle in the dermis — produces sebum, a natural waxy oil that lubricates and protects the hair shaft and scalp surface' },
                                { type: 'keyTerm', term: 'Seborrheic dermatitis', definition: 'A chronic inflammatory scalp condition causing red, scaly, itchy patches — associated with an overgrowth of Malassezia yeast on the scalp; more severe form of oily dandruff; manage with medicated shampoo' },
                                { type: 'keyTerm', term: 'SMART goal', definition: 'A goal-setting framework: Specific, Measurable, Achievable, Relevant, and Time-bound — transforms aspirations into actionable, trackable objectives' },
                                { type: 'keyTerm', term: 'Spirilla', definition: 'Spiral or corkscrew-shaped bacteria — an example is Treponema pallidum (syphilis)' },
                                { type: 'keyTerm', term: 'Stationary guide', definition: 'A fixed cutting guide that all subsequent sections are brought to — used in one-length, blunt, and graduated cuts' },
                                { type: 'keyTerm', term: 'Sterilization', definition: 'The highest level of decontamination — destroys ALL microorganisms including bacterial endospores; achieved by autoclave (pressurized steam); rarely required in salons' },
                                { type: 'keyTerm', term: 'S-test (curl test)', definition: 'The processing check in perm chemistry — a test rod is gently unrolled to see if the hair forms an S-shape equal to the rod diameter, confirming sufficient softening before neutralization' },
                                { type: 'keyTerm', term: 'Strand test', definition: 'A pre-service test where a small section of hair is subjected to the full proposed chemical service to predict timing, result, and product response before the full-head application' },
                                { type: 'keyTerm', term: 'Tapotement', definition: 'Light, brisk tapping or percussion movements in scalp massage — stimulating and circulation-boosting; used briefly within a relaxation massage or as a focused treatment' },
                                { type: 'keyTerm', term: 'Telogen', definition: 'The resting phase of the hair cycle (3–4 months) — the old hair rests near the surface, a new hair begins below, and the old hair is eventually shed; 10–15% of scalp hairs are in telogen at any time' },
                                { type: 'keyTerm', term: 'Telogen effluvium', definition: 'A temporary, diffuse hair loss condition caused by a large percentage of hairs simultaneously entering the telogen phase — triggered by physical or emotional stress, illness, hormonal changes, or nutritional deficiency; usually resolves in 3–6 months' },
                                { type: 'keyTerm', term: 'Texture (hair)', definition: 'The diameter of the individual hair strand — classified as fine, medium, or coarse; affects product selection, processing time, and chemical service outcomes' },
                                { type: 'keyTerm', term: 'Tinea capitis', definition: 'Scalp ringworm — a highly contagious fungal infection causing circular, scaly patches with hair breakage; a contraindication requiring service refusal and physician referral' },
                                { type: 'keyTerm', term: 'Tone (hair colour)', definition: 'The visible warmth or coolness of hair colour — described as warm (gold, red, copper), cool (ash, blue-based, pearl), or neutral. Tone is separate from level (lightness/darkness).' },
                                { type: 'keyTerm', term: 'Traction alopecia', definition: 'Hair loss along the hairline and temples caused by repeated tension from tight hairstyles (braids, weaves, tight ponytails) — can become permanent if tension is not relieved early' },
                                { type: 'keyTerm', term: 'Traveling guide', definition: 'A moving guide that progresses section by section through a haircut, carrying the length measurement forward — used in uniform and long layer cuts' },
                                { type: 'keyTerm', term: 'WHMIS 2015', definition: "Canada's Workplace Hazardous Materials Information System, aligned with the GHS — requires hazard labels, SDS documents, and worker training for all controlled products" },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q14-1', question: 'What does the "R" stand for in the SMART goal framework?', options: ['Reasonable', 'Realistic', 'Relevant', 'Rigorous'], correctIndex: 2, explanation: "The 'R' in SMART stands for Relevant — meaning the goal should align with your broader career objectives, values, and current priorities. It answers the question: Why does this matter to me now?" },
                        { id: 'q14-2', question: 'Pheomelanin produces which natural hair tones?', options: ['Black and dark brown', 'Red, copper, golden, and yellow tones', 'White/grey (no colour)', 'Ash and cool brown tones'], correctIndex: 1, explanation: 'Pheomelanin produces warm, red-to-yellow-gold tones. It is the pigment type responsible for red hair and the warm underlying pigment visible in brown and black hair when lightened.' },
                        { id: 'q14-3', question: 'A stationary guide is BEST used for which type of haircut?', options: ['Uniform layers throughout', 'Long layers with a traveling guide', 'Blunt/one-length or graduated cuts', 'Razor-cut textured styles'], correctIndex: 2, explanation: 'A stationary guide stays in one place — all subsequent sections are brought to it for cutting. This is the correct technique for one-length (blunt) and graduated cuts where the perimeter must be consistent.' },
                    ],
                },

                // ─── CHAPTER 15 ───────────────────────────────────────────────────────
                {
                    id: 'ch-15',
                    number: 15,
                    title: 'Exam Strategy and Study Tips',
                    subtitle: 'Evidence-based techniques to maximize your exam performance',
                    isFree: false,
                    estimatedMinutes: 20,
                    sections: [
                        {
                            id: 's15-1',
                            title: '15.1 Understanding the STO 332A Exam',
                            content: [
                                { type: 'paragraph', text: "The Skilled Trades Ontario Hairstylist (332A) certification exam is a multiple-choice computer-based test administered at Prometric Canada Testing Service centres. Understanding the exam's structure is the first step to preparing strategically." },
                                {
                                    type: 'table', headers: ['Exam Element', 'Detail'], rows: [
                                        ['Format', 'Multiple-choice, computer-based'],
                                        ['Number of questions', 'Approximately 120 questions'],
                                        ['Time limit', 'Approximately 3 hours'],
                                        ['Passing mark', '70% (approximately 84/120)'],
                                        ['Testing provider', 'Prometric Canada Testing Services'],
                                        ['Subject areas', '17 official subject areas (covering Levels 1 and 2 curriculum)'],
                                        ['Scheduling', 'Book online through Skilled Trades Ontario; photo ID required'],
                                        ['Retake policy', 'Candidates who do not pass may reapply after a waiting period; fees apply'],
                                    ]
                                },
                                { type: 'paragraph', text: 'The exam covers all 17 official subject areas from the 332A Training Standard, weighted according to their importance in the trade. High-weight subject areas include chemical services (colour, perms, relaxers) and haircutting techniques.' },
                            ],
                        },
                        {
                            id: 's15-2',
                            title: '15.2 Evidence-Based Study Strategies',
                            content: [
                                { type: 'paragraph', text: 'Not all study methods are created equal. Research in learning science consistently identifies the most effective study techniques. Use these methods, not passive re-reading:' },
                                {
                                    type: 'table', headers: ['Strategy', 'How to Apply It', 'Why It Works'], rows: [
                                        ['Active recall (retrieval practice)', 'After reading a section, close the material and try to recall the key concepts from memory. Use flashcards, write out key points from memory, or quiz yourself aloud.', 'Retrieval practice forces the brain to actively reconstruct information — this strengthens memory far more than passive re-reading. It is the single most effective study technique.'],
                                        ['Spaced repetition', 'Review material at increasing intervals: after 1 day, then 3 days, then 1 week, then 2 weeks. Use a spaced-repetition app (Anki) or a flashcard schedule.', 'Forgetting slightly and then recalling strengthens long-term memory. Cramming the night before is far less effective than spaced review.'],
                                        ['Interleaving', 'Mix different topic areas within a single study session rather than studying all of one topic before moving to the next.', 'Interleaving forces the brain to identify and differentiate between different concepts — improves ability to retrieve the right information under exam pressure.'],
                                        ['Elaborative interrogation', "When learning a fact, ask 'Why?' and 'How does this connect to what I already know?' — write out the reasoning.", 'Connecting new information to prior knowledge creates more memory pathways and aids retrieval under pressure.'],
                                        ['Practice testing', 'Take timed practice exams regularly under exam-like conditions (no notes, no phone, timer running). Review every wrong answer and identify the exact knowledge gap.', 'Practice testing under realistic conditions prepares both your knowledge and your psychological response to exam stress.'],
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's15-3',
                            title: '15.3 Test-Taking Tactics for Multiple Choice',
                            content: [
                                { type: 'paragraph', text: 'Multiple-choice exams have a specific structure that rewards strategic test-taking in addition to content knowledge:' },
                                {
                                    type: 'numbered', items: [
                                        'READ THE QUESTION FULLY before looking at the options — form a mental answer first, then look for a match among the choices',
                                        'ELIMINATE OBVIOUSLY WRONG answers first — crossing off 1–2 clearly incorrect options significantly increases your odds',
                                        'WATCH FOR ABSOLUTE LANGUAGE — answers with words like "always," "never," "only," and "must" are often incorrect (or sometimes the most specific correct answer); be cautious',
                                        'LOOK FOR THE MOST COMPLETE AND SPECIFIC ANSWER — the correct answer in a professional exam is typically the most thorough, specific, and procedure-driven option',
                                        'TRUST YOUR FIRST INSTINCT for questions you studied — your first response is usually correct; do not overthink or second-guess without a specific reason',
                                        'MARK AND MOVE — if you are genuinely uncertain after 30 seconds, mark the question and move on; return to it at the end with fresh eyes',
                                        'ANSWER EVERY QUESTION — there is no penalty for guessing on the STO exam; never leave a question blank',
                                        'USE PROCESS OF ELIMINATION for "EXCEPT" questions — find the three answers that ARE correct, and the remaining one is the answer',
                                    ]
                                },
                                {
                                    type: 'infoBox', title: 'Common Exam Trap Patterns', items: [
                                        'DISTRACTOR OPTIONS that use technical-sounding language but describe the wrong process or contradict a key fact',
                                        '"ALMOST RIGHT" OPTIONS that are correct in a different context or for a different type of service',
                                        'REVERSED ANSWERS — e.g., attributing what hydrogen bonds do to disulfide bonds',
                                        'INCOMPLETE ANSWERS — an option that is partially correct but missing a critical step (e.g., correct disinfection without the pre-cleaning step)',
                                        'TWO SIMILAR OPTIONS — usually only one is fully correct; the other contains a subtle but important error; focus on the specific detail that distinguishes them',
                                    ]
                                },
                            ],
                        },
                        {
                            id: 's15-4',
                            title: '15.4 Study Schedule and Exam Day Plan',
                            content: [
                                {
                                    type: 'table', headers: ['Weeks Before Exam', 'Study Focus'], rows: [
                                        ['8–6 weeks out', 'Read all 12 content chapters; complete all chapter practice questions; identify weak areas'],
                                        ['6–4 weeks out', 'Review weak areas in depth; create flashcards for key terms; study WHMIS, pH, bond chemistry'],
                                        ['4–2 weeks out', 'Take the mock exam (Chapter 13) at least twice; review every incorrect answer; mix-topic review using interleaving'],
                                        ['2–1 weeks out', 'Final flashcard review; spaced repetition of all key terms; take the mock exam a third time aiming for 80%+'],
                                        ['Day before the exam', 'Light review only — the glossary and key tables. No new material. Sleep well (minimum 7–8 hours). Lay out all required ID.'],
                                        ['Exam day morning', 'Eat a protein-rich breakfast. Arrive at the testing centre 30 minutes early. Do not cram new material — trust your preparation.'],
                                    ]
                                },
                                { type: 'paragraph', text: 'Managing exam anxiety:' },
                                {
                                    type: 'bullets', items: [
                                        'Deep breathing: inhale slowly for 4 counts, hold for 4, exhale for 6 — activates the parasympathetic nervous system and reduces cortisol',
                                        'Positive self-talk: replace "I don\'t know this" with "I have prepared well and I will work through this"',
                                        'Physical exercise the day before the exam improves memory consolidation and reduces anxiety',
                                        'If you blank on a question: take a breath, recall the related topic, work from what you DO know toward what you don\'t',
                                        'Progress, not perfection: you only need 70% — you do not need to answer every question correctly',
                                    ]
                                },
                                {
                                    type: 'infoBox', title: '🎯 Your Exam Readiness Checklist', items: [
                                        '✅ Completed all 15 chapters and chapter questions',
                                        '✅ Scored 75%+ on the Chapter 13 mock exam at least once',
                                        '✅ Can explain (without notes) the difference between sanitation, disinfection, and sterilization',
                                        '✅ Can explain how permanent wave chemistry works (reduction → reshaping → oxidation)',
                                        '✅ Can explain how permanent colour and bleach work, and the level/tone system',
                                        '✅ Can identify contraindications for all chemical services',
                                        '✅ Know the SDS 16 sections and WHMIS hazard classes',
                                        '✅ Understand all four cutting forms and how elevation creates them',
                                        '✅ Booked your exam appointment at Prometric Canada — you are ready!',
                                    ]
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [
                        { id: 'q15-1', question: 'The most effective study technique according to learning science research is:', options: ['Re-reading notes multiple times', 'Highlighting key passages in the textbook', 'Active recall — testing yourself by trying to retrieve information from memory without looking', 'Copying notes by hand once'], correctIndex: 2, explanation: 'Active recall (retrieval practice) is the most evidence-supported study technique. Each time you retrieve a memory, you strengthen the neural pathway — far more effective than passive review or re-reading.' },
                        { id: 'q15-2', question: 'On a multiple-choice exam, if you are genuinely uncertain about a question after careful thought, you should:', options: ['Skip it and leave it blank to avoid a penalty', 'Always choose option C as a default', 'Mark it, move on, and return to it at the end — never leave it blank (no penalty for guessing)', 'Go back to the beginning and start over'], correctIndex: 2, explanation: 'There is no penalty for guessing on the STO exam. Leaving a question blank guarantees 0 marks. A strategic guess gives you a chance at a correct answer. Mark uncertain questions and return with fresh eyes.' },
                        { id: 'q15-3', question: 'The STO 332A Hairstylist certification exam passing mark is:', options: ['60%', '65%', '70%', '80%'], correctIndex: 2, explanation: 'The passing mark for the STO Hairstylist certification exam is 70%. You do not need a perfect score — focus on mastering the high-weight subject areas and eliminating gaps in foundational knowledge.' },
                        { id: 'q15-4', question: 'Spaced repetition as a study strategy involves:', options: ['Studying the same material for many hours in one session', 'Reviewing material at increasing time intervals to strengthen long-term memory', 'Reading each chapter only once before the exam', 'Studying only the topics that appeared most recently in the textbook'], correctIndex: 1, explanation: 'Spaced repetition spaces review sessions over increasing intervals (1 day, 3 days, 1 week, 2 weeks). The slight forgetting that occurs between sessions, followed by successful recall, powerfully strengthens long-term memory.' },
                    ],
                },
            ],
        },
    ],
};

// =============================================================================
// Helper Utilities
// =============================================================================

/** Flatten all chapters across all parts */
export const getAllChapters = (course = hairstylistCourse) =>
    course.parts.flatMap(p => p.chapters);
  
  /** Get only the free preview chapters */
  export const getFreeChapters = (course = hairstylistCourse) =>
    getAllChapters(course).filter(ch => ch.isFree);
  
  /** Find a chapter by its id */
  export const getChapterById = (id, course = hairstylistCourse) =>
    getAllChapters(course).find(ch => ch.id === id);
  
  /** Find which part a chapter belongs to */
  export const getPartForChapter = (chapterId, course = hairstylistCourse) =>
    course.parts.find(p => p.chapters.some(ch => ch.id === chapterId));
  
  /** Get the previous and next chapters (for navigation) */
  export const getAdjacentChapters = (chapterId, course = hairstylistCourse) => {
    const all = getAllChapters(course);
    const idx = all.findIndex(ch => ch.id === chapterId);
    return {
      prev: idx > 0 ? all[idx - 1] : null,
      next: idx < all.length - 1 ? all[idx + 1] : null,
    };
  };
  
  /** Count total practice questions across all chapters */
  export const getTotalQuestions = (course = hairstylistCourse) =>
    getAllChapters(course).reduce((sum, ch) => sum + (ch.practiceQuestions?.length || 0), 0);
  
  export default hairstylistCourse;
  