export const industElectCourse = {
    // `id` / `slug` should be the canonical course slug (example: `autoservtech-310s`).
    // Note: this is distinct from the URL trade slug (`autoservtech`) used for guides and practice endpoints.
    id: 'indust-elect-442a',
    slug: 'indust-elect-442a',
    title: 'Industrial Electrician Certification Exam Prep',
    subtitle: 'Complete Study Guide — Skilled Trades Ontario Trade 442A',
    trade: 'Industrial Electrician',
    tradeCode: '442A',
    price: 4999,
    currency: 'CAD',
    totalChapters: 38,
    totalQuestions: 100,
    passingMark: 70,
    examFormat: 'Multiple choice (4 options, 1 correct) — 4 hours',

    features: [
        'Complete Red Seal MWA coverage (A through F) aligned to official exam weightings',
        'Master Glossary with all 70+ official Red Seal acronyms and 12 glossary terms',
        '100 practice questions matching the 10/35-45/40-50 Knowledge/Procedural/Critical Thinking split',
        'Diagnostic workflows, comparison tables, and exam-focused tips throughout',
        'Free access to Master Glossary, Safety, and Tools & Equipment foundation chapters',
        'Full mock exam with timed simulation and detailed explanations'
    ],

    parts: [
        {
            id: 'part-1',
            number: 1,
            title: 'Performs Common Occupational Skills (MWA A)',
            description: 'Foundational skills every industrial electrician must master: safety protocols, tool proficiency, trade terminology, and regulatory compliance. This MWA represents 9 questions (9% of the total exam).',
            weight: '9 questions (9% of Total Exam)',

            chapters: [
                // CHAPTER 1 — MASTER GLOSSARY (FREE)
                {
                    id: 'ch-1',
                    number: 1,
                    title: 'Master Glossary',
                    subtitle: 'Official Red Seal Terms & Acronyms for Industrial Electrician (442A)',
                    isFree: true,
                    estimatedMinutes: 45,

                    sections: [
                        {
                            id: 'ch1-s1',
                            title: 'Official Red Seal Glossary Terms',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The following 12 terms are drawn directly from the Red Seal Industrial Electrician glossary (Appendix C). Master these definitions — they appear in exam questions and are essential for clear communication on the job.'
                                },
                                { type: 'keyTerm', term: 'arc flash', definition: 'A dangerous electrical explosion caused by a low-impedance connection through air to ground or another voltage phase, producing intense heat, light, and pressure wave.' },
                                { type: 'keyTerm', term: 'bonding', definition: 'A low-impedance path obtained by permanently joining all non-current-carrying metal parts to ensure electrical continuity and the capacity to conduct safely any fault current likely to be imposed.' },
                                { type: 'keyTerm', term: 'cable', definition: 'A factory assembly of two or more conductors, each with its own insulation, enclosed in a common protective covering.' },
                                { type: 'keyTerm', term: 'cathodic protection', definition: 'A technique to control corrosion of a metal surface by making it the cathode of an electrochemical cell, typically using sacrificial anodes or impressed current.' },
                                { type: 'keyTerm', term: 'commissioning', definition: 'The systematic process of verifying, testing, and documenting that electrical systems and equipment are installed and function according to design specifications and applicable codes.' },
                                { type: 'keyTerm', term: 'dip switches', definition: 'A manual electric switch packaged in a group in a standard dual in-line package (DIP), used to configure hardware settings on devices such as drives, PLCs, and communication modules.' },
                                { type: 'keyTerm', term: 'extra-low-voltage (ELV)', definition: 'A voltage not exceeding 30 V RMS (42.4 V peak) for AC systems or 60 V DC, as defined by the Canadian Electrical Code.' },
                                { type: 'keyTerm', term: 'grounding', definition: 'A permanent and continuous conductive path to earth with sufficient ampacity to carry any fault current, limiting voltage rise and facilitating protective device operation.' },
                                { type: 'keyTerm', term: 'high-voltage', definition: 'Voltage exceeding 750 V for AC systems or 1,500 V for DC systems, as defined by the Canadian Electrical Code Part I.' },
                                { type: 'keyTerm', term: 'low-voltage', definition: 'Voltage not exceeding 750 V for AC systems or 1,500 V for DC systems, as defined by the Canadian Electrical Code Part I.' },
                                { type: 'keyTerm', term: 'raceway', definition: 'An enclosed channel designed expressly for holding wires, cables, or busbars, including conduit, tubing, cable tray, and wireways.' },
                                { type: 'keyTerm', term: 'unit equipment', definition: 'Self-contained emergency lighting equipment consisting of a rechargeable battery, battery charging means, lamp(s), and associated circuitry, all in one housing.' }
                            ]
                        },
                        {
                            id: 'ch1-s2',
                            title: 'Official Red Seal Acronyms',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The following 70+ acronyms are drawn directly from the Red Seal Industrial Electrician acronyms list (Appendix A). These appear throughout exam questions, technical documentation, and daily workplace communication.'
                                },
                                { type: 'acronym', term: 'AC', definition: 'Alternating Current' },
                                { type: 'acronym', term: 'AED', definition: 'Automated External Defibrillator' },
                                { type: 'acronym', term: 'AFCI', definition: 'Arc-Fault Circuit Interrupter' },
                                { type: 'acronym', term: 'AHJ', definition: 'Authority Having Jurisdiction' },
                                { type: 'acronym', term: 'ANSI', definition: 'American National Standards Institute' },
                                { type: 'acronym', term: 'ASCII', definition: 'American Standard Code for Information Interchange' },
                                { type: 'acronym', term: 'AVR', definition: 'Automatic Voltage Regulator' },
                                { type: 'acronym', term: 'BCD', definition: 'Binary-Coded Decimal' },
                                { type: 'acronym', term: 'BIL', definition: 'Basic Impulse Level' },
                                { type: 'acronym', term: 'CAD', definition: 'Computer-Aided Design' },
                                { type: 'acronym', term: 'CAM', definition: 'Computer-Aided Manufacturing' },
                                { type: 'acronym', term: 'CCTV', definition: 'Closed-Circuit Television' },
                                { type: 'acronym', term: 'CEC', definition: 'Canadian Electrical Code' },
                                { type: 'acronym', term: 'CPU', definition: 'Central Processing Unit' },
                                { type: 'acronym', term: 'CSA', definition: 'Canadian Standards Association' },
                                { type: 'acronym', term: 'CSC', definition: 'Canadian Standards Council' },
                                { type: 'acronym', term: 'CT', definition: 'Current Transformer' },
                                { type: 'acronym', term: 'DAS', definition: 'Data Acquisition System' },
                                { type: 'acronym', term: 'DC', definition: 'Direct Current' },
                                { type: 'acronym', term: 'DCLA', definition: 'Direct Current Low Amperage' },
                                { type: 'acronym', term: 'DCLB', definition: 'Direct Current Low Voltage' },
                                { type: 'acronym', term: 'DCLC', definition: 'Direct Current Low Current' },
                                { type: 'acronym', term: 'DCS', definition: 'Distributed Control System' },
                                { type: 'acronym', term: 'DDC', definition: 'Direct Digital Control' },
                                { type: 'acronym', term: 'DNP', definition: 'Distributed Network Protocol' },
                                { type: 'acronym', term: 'DVR', definition: 'Digital Video Recorder' },
                                { type: 'acronym', term: 'ELV', definition: 'Extra-Low Voltage' },
                                { type: 'acronym', term: 'EMC', definition: 'Electromagnetic Compatibility' },
                                { type: 'acronym', term: 'EMT', definition: 'Electrical Metallic Tubing' },
                                { type: 'acronym', term: 'ENT', definition: 'Electrical Nonmetallic Tubing' },
                                { type: 'acronym', term: 'FLC', definition: 'Full-Load Current' },
                                { type: 'acronym', term: 'GFCI', definition: 'Ground-Fault Circuit Interrupter' },
                                { type: 'acronym', term: 'GUI', definition: 'Graphical User Interface' },
                                { type: 'acronym', term: 'HDPE', definition: 'High-Density Polyethylene' },
                                { type: 'acronym', term: 'HID', definition: 'High-Intensity Discharge' },
                                { type: 'acronym', term: 'HMI', definition: 'Human-Machine Interface' },
                                { type: 'acronym', term: 'HVAC', definition: 'Heating, Ventilation, and Air Conditioning' },
                                { type: 'acronym', term: 'I/O', definition: 'Input/Output' },
                                { type: 'acronym', term: 'IEEE', definition: 'Institute of Electrical and Electronics Engineers' },
                                { type: 'acronym', term: 'IP', definition: 'Ingress Protection' },
                                { type: 'acronym', term: 'kVA', definition: 'Kilovolt-Ampere' },
                                { type: 'acronym', term: 'LAN', definition: 'Local Area Network' },
                                { type: 'acronym', term: 'LED', definition: 'Light-Emitting Diode' },
                                { type: 'acronym', term: 'MCC', definition: 'Motor Control Centre' },
                                { type: 'acronym', term: 'MOV', definition: 'Metal-Oxide Varistor' },
                                { type: 'acronym', term: 'NBC', definition: 'National Building Code' },
                                { type: 'acronym', term: 'NFC', definition: 'National Fire Code' },
                                { type: 'acronym', term: 'O&M', definition: 'Operations and Maintenance' },
                                { type: 'acronym', term: 'OEM', definition: 'Original Equipment Manufacturer' },
                                { type: 'acronym', term: 'OH&S', definition: 'Occupational Health and Safety' },
                                { type: 'acronym', term: 'OTDR', definition: 'Optical Time-Domain Reflectometer' },
                                { type: 'acronym', term: 'PA', definition: 'Public Address' },
                                { type: 'acronym', term: 'PCB', definition: 'Printed Circuit Board' },
                                { type: 'acronym', term: 'PDC', definition: 'Power Distribution Centre' },
                                { type: 'acronym', term: 'PID', definition: 'Proportional-Integral-Derivative' },
                                { type: 'acronym', term: 'PLC', definition: 'Programmable Logic Controller' },
                                { type: 'acronym', term: 'PoE', definition: 'Power over Ethernet' },
                                { type: 'acronym', term: 'PPE', definition: 'Personal Protective Equipment' },
                                { type: 'acronym', term: 'PVC', definition: 'Polyvinyl Chloride' },
                                { type: 'acronym', term: 'RFID', definition: 'Radio-Frequency Identification' },
                                { type: 'acronym', term: 'ScTP', definition: 'Screened Twisted Pair' },
                                { type: 'acronym', term: 'SIS', definition: 'Safety Instrumented System' },
                                { type: 'acronym', term: 'SCADA', definition: 'Supervisory Control and Data Acquisition' },
                                { type: 'acronym', term: 'SDS', definition: 'Safety Data Sheet' },
                                { type: 'acronym', term: 'TDR', definition: 'Time-Domain Reflectometer' },
                                { type: 'acronym', term: 'TIA', definition: 'Telecommunications Industry Association' },
                                { type: 'acronym', term: 'SPL', definition: 'Sound Pressure Level' },
                                { type: 'acronym', term: 'SI', definition: 'International System of Units' },
                                { type: 'acronym', term: 'TDG', definition: 'Transportation of Dangerous Goods' },
                                { type: 'acronym', term: 'ULC', definition: 'Underwriters Laboratories of Canada' },
                                { type: 'acronym', term: 'UPS', definition: 'Uninterruptible Power Supply' },
                                { type: 'acronym', term: 'UTP', definition: 'Unshielded Twisted Pair' },
                                { type: 'acronym', term: 'VA', definition: 'Volt-Ampere' },
                                { type: 'acronym', term: 'VDV', definition: 'Voice/Data/Video' },
                                { type: 'acronym', term: 'VFD', definition: 'Variable Frequency Drive' },
                                { type: 'acronym', term: 'VoIP', definition: 'Voice over Internet Protocol' },
                                { type: 'acronym', term: 'VT', definition: 'Voltage Transformer' },
                                { type: 'acronym', term: 'WHMIS', definition: 'Workplace Hazardous Materials Information System' },
                                { type: 'acronym', term: 'WLL', definition: 'Working Load Limit' }
                            ]
                        }
                    ]
                },

                // CHAPTER 2 — SAFETY ON THE JOB (FREE)
                {
                    id: 'ch-2',
                    number: 2,
                    title: 'Safety on the Job',
                    subtitle: 'Lockout/Tagout, Arc Flash Protection, Confined Space, and Regulatory Compliance',
                    isFree: true,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch2-s1',
                            title: 'Lockout/Tagout (LOTO) — Task A-1',
                            content: [
                                { type: 'text', text: 'Lockout/Tagout is the primary method for controlling hazardous energy during maintenance, repair, and installation. CSA Z460 and provincial OH&S regulations mandate written procedures, training, and verification.' },
                                { type: 'keyTerm', term: 'Lockout', definition: 'Placement of a lockout device on an energy-isolating device in accordance with an established procedure, indicating that the energy-isolating device and the equipment being controlled cannot be operated until the lockout device is removed.' },
                                { type: 'keyTerm', term: 'Tagout', definition: 'Placement of a tagout device on an energy-isolating device to indicate that the equipment shall not be operated until the tagout device is removed.' },
                                { type: 'callout', style: 'warning', text: 'NEVER rely on tagout alone when lockout is possible. Tags are warnings only — they do not provide physical restraint.' },
                                {
                                    type: 'list', items: [
                                        'Identify ALL energy sources (electrical, mechanical, hydraulic, pneumatic, thermal, chemical, gravitational)',
                                        'Notify affected personnel before shutdown',
                                        'Shut down equipment using normal stopping procedures',
                                        'Isolate equipment from energy source(s) — open breakers, close valves, block mechanical parts',
                                        'Apply lockout devices — each worker applies their own lock',
                                        'Verify zero energy state — test with approved voltage tester, check pressure gauges, try to start equipment',
                                        'Perform work',
                                        'Remove locks in reverse order — only by the person who applied them',
                                        'Restore energy and notify affected personnel'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Exam questions often test the SEQUENCE of LOTO steps. Memorize the order: Notify → Shut Down → Isolate → Lock/Tag → Verify → Work → Remove → Restore.' }
                            ]
                        },
                        {
                            id: 'ch2-s2',
                            title: 'Arc Flash & Shock Protection — Task A-2',
                            content: [
                                { type: 'text', text: 'Arc flash hazard analysis (CSA Z462 / NFPA 70E) determines the incident energy at working distance, the arc flash boundary, and required PPE category. Industrial electricians must interpret arc flash labels on equipment.' },
                                {
                                    type: 'table', headers: ['PPE Category', 'Minimum Arc Rating (cal/cm²)', 'Typical Protection'], rows: [
                                        ['CAT 1', '4', 'Arc-rated shirt/pants or coverall, face shield, voltage-rated gloves'],
                                        ['CAT 2', '8', 'Arc-rated shirt/pants + arc-rated coverall, balaclava, face shield, voltage-rated gloves'],
                                        ['CAT 3', '25', 'Arc-rated coverall + arc flash suit hood, voltage-rated gloves'],
                                        ['CAT 4', '40', 'Arc flash suit (jacket/bib/hood), voltage-rated gloves']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Cotton underwear (non-melting) is required under ALL arc-rated PPE. Synthetic fabrics (polyester, nylon) melt into skin during arc flash.' },
                                { type: 'keyTerm', term: 'Incident Energy', definition: 'The amount of thermal energy impressed on a surface at a specific distance from the arc source, measured in cal/cm².' },
                                { type: 'keyTerm', term: 'Arc Flash Boundary', definition: 'The distance from a prospective arc source within which a person could receive a second-degree burn (1.2 cal/cm²) if an arc flash occurred.' },
                                { type: 'callout', style: 'exam-tip', text: 'Know the approach boundaries: Limited Approach (shock), Restricted Approach (shock — qualified persons only with PPE), Arc Flash Boundary (burn). The exam tests which boundary applies to which hazard.' }
                            ]
                        },
                        {
                            id: 'ch2-s3',
                            title: 'Confined Space & Working at Heights — Tasks A-3, A-4',
                            content: [
                                { type: 'text', text: 'Confined spaces (tanks, vaults, manholes, transformers) require: hazard assessment, entry permit, atmospheric testing (O₂ 19.5–23.5%, LEL <10%, toxic gases), attendant, rescue plan, and continuous monitoring.' },
                                { type: 'callout', style: 'warning', text: 'Atmospheric hazards kill more rescuers than entrants. NEVER enter a confined space to rescue without proper SCBA and retrieval equipment.' },
                                {
                                    type: 'list', items: [
                                        'Test atmosphere: Oxygen first, then flammable, then toxic',
                                        'Ventilate continuously during entry',
                                        'Maintain communication with attendant',
                                        'Retrieval equipment (tripod, winch, harness) must be in place before entry',
                                        'Permit posted at entry point'
                                    ]
                                },
                                { type: 'text', text: 'Fall protection required at 3 m (10 ft) or where unusual risk exists. CSA Z259 standards govern harnesses, lanyards, anchors, and rescue plans. Inspect equipment before each use.' }
                            ]
                        },
                        {
                            id: 'ch2-s4',
                            title: 'WHMIS 2015 (GHS) & SDS — Task A-5',
                            content: [
                                { type: 'text', text: 'WHMIS 2015 aligns with GHS. All hazardous products require supplier labels (product identifier, pictogram, signal word, hazard statement, precautionary statement, supplier identifier) and Safety Data Sheets (16 sections).' },
                                { type: 'keyTerm', term: 'SDS', definition: 'Safety Data Sheet — 16-section standardized document providing hazard identification, composition, first-aid, firefighting, handling/storage, exposure controls, physical/chemical properties, stability/reactivity, toxicological/ecological information, disposal, transport, regulatory, and other information.' },
                                { type: 'callout', style: 'exam-tip', text: 'Memorize the 9 GHS pictograms and their meanings. Exam questions show a pictogram and ask for the hazard class (e.g., flame = flammable, skull = acute toxicity, corrosion = skin/eye corrosion).' }
                            ]
                        },
                        {
                            id: 'ch2-s5',
                            title: 'CEC & Regulatory Framework — Task A-6',
                            content: [
                                { type: 'text', text: 'The Canadian Electrical Code (CEC) Part I is the primary installation standard, adopted with amendments by each province/territory. Key sections for industrial electricians:' },
                                {
                                    type: 'list', items: [
                                        'Section 0: Object, scope, definitions',
                                        'Section 2: General rules (grounding, bonding, protection, clearances)',
                                        'Section 4: Conductors (ampacity, derating, voltage drop)',
                                        'Section 6: Services and service equipment',
                                        'Section 8: Circuit loading and demand factors',
                                        'Section 10: Grounding and bonding (critical for industrial)',
                                        'Section 12: Wiring methods (cable, raceway, busway)',
                                        'Section 14: Protection and control (OCPD, disconnecting means)',
                                        'Section 16: Class 1 & 2 circuits',
                                        'Section 18: Hazardous locations (Class I/II/III, Division/Zone)',
                                        'Section 20: Flammable/combustible liquids',
                                        'Section 22: Corrosive environments',
                                        'Section 24: Patient care areas',
                                        'Section 26: Installation of electrical equipment',
                                        'Section 28: Motors and generators',
                                        'Section 32: Fire alarm/pump systems',
                                        'Section 36: High-voltage installations',
                                        'Section 38: Mobile homes/RVs',
                                        'Section 40: Emergency systems',
                                        'Section 42: Data/communication circuits',
                                        'Section 44: Theatre/motion picture',
                                        'Section 46: Emergency power supply',
                                        'Section 50: Solar PV systems',
                                        'Section 52: Energy storage systems',
                                        'Section 54: Community antenna',
                                        'Section 56: Optical fiber',
                                        'Section 58: Substations/high-voltage',
                                        'Section 60: Electrical communication',
                                        'Section 62: Heating systems',
                                        'Section 64: Renewable energy',
                                        'Section 66: Electric vehicle charging',
                                        'Section 68: PoE',
                                        'Section 70: Energy management',
                                        'Section 72: Microgrids',
                                        'Section 74: Energy storage',
                                        'Section 76: Smart grids',
                                        'Section 78: DC microgrids',
                                        'Section 80: Wireless power',
                                        'Section 82: Fuel cells',
                                        'Section 84: Hydrogen systems',
                                        'Section 86: Carbon capture',
                                        'Section 88: Advanced nuclear'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'You do not need to memorize all section numbers. Focus on Sections 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 26, 28, 36, 46, 50, 52. The exam provides CEC excerpts for specific questions, but you must know WHERE to look.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 3 — TOOLS & EQUIPMENT (FREE)
                {
                    id: 'ch-3',
                    number: 3,
                    title: 'Tools and Equipment',
                    subtitle: 'Hand, Power, Test, Rigging, and Access Equipment per Red Seal Appendix B',
                    isFree: true,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch3-s1',
                            title: 'Hand Tools',
                            content: [
                                { type: 'text', text: 'Industrial electricians use a wide range of hand tools. Selection, inspection, and proper use are critical for safety and work quality.' },
                                {
                                    type: 'list', items: [
                                        'Screwdrivers: Robertson (square), Phillips, flat, Torx — insulated to 1000 V (IEC 60900)',
                                        'Pliers: lineman, diagonal cutting, needle-nose, pump, locking — insulated handles',
                                        'Wrenches: adjustable, combination, socket sets (metric/imperial), torque wrenches',
                                        'Knives: electrician\'s knife, cable sheath stripper, utility',
                                        'Hammers: claw, ball-peen, non-sparking (beryllium copper) for hazardous locations',
                                        'Levels: torpedo, 2-ft, 4-ft, laser',
                                        'Measuring: tape (3 m, 8 m, 30 m), folding rule, laser distance meter',
                                        'Fish tapes: steel, fiberglass, nylon — for conduit pulling',
                                        'Cable cutters: ratchet, hydraulic, ACSR-rated',
                                        'Crimping tools: hand, hydraulic, battery-powered — for lugs, splices, connectors',
                                        'Conduit benders: hickey, hand (EMT, rigid), hydraulic, electric',
                                        'Threading tools: hand dies, power threaders (rigid conduit)',
                                        'Knockout sets: punch/die for panel entries',
                                        'Hole saws: bi-metal, carbide, diamond — for boxes, panels',
                                        'Deburring tools: conduit, pipe',
                                        'Wire strippers: automatic, manual, coaxial, data',
                                        'Terminal screwdrivers: slotted, Phillips, Robertson, Torx — for dense terminal blocks'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Inspect insulation on ALL hand tools before each use. Cracked, cut, or worn insulation = remove from service immediately. IEC 60900 rating required for live-line work.' }
                            ]
                        },
                        {
                            id: 'ch3-s2',
                            title: 'Portable Power Tools',
                            content: [
                                { type: 'text', text: 'Corded and cordless tools must be double-insulated (□ symbol) or grounded (3-prong). GFCI protection required for outdoor/damp locations.' },
                                {
                                    type: 'list', items: [
                                        'Drills: 1/2" chuck, right-angle, hammer drill, impact driver',
                                        'Saws: reciprocating (Sawzall), circular, band, hole hawg',
                                        'Grinders: 4.5", 6", 9" angle — with guard, correct disc for material',
                                        'Rotary hammers: SDS-Plus, SDS-Max — for concrete anchoring',
                                        'Impact wrenches: 1/2", 3/4", 1" — for structural bolts',
                                        'Heat guns: for heat-shrink, cable removal',
                                        'Band saws: portable — for conduit, strut, threaded rod',
                                        'Crimpers: battery-powered hydraulic — for large lugs (250–1000 kcmil)',
                                        'Cable cutters: battery hydraulic — up to 1000 kcmil Cu/Al',
                                        'Conduit benders: battery hydraulic — 1/2" to 4" rigid/IMC',
                                        'Threaders: battery-powered — 1/2" to 2" rigid',
                                        'Knockout punches: battery hydraulic — up to 4"',
                                        'Cable pullers: tugger, capstan — for long/heavy pulls'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Know the difference: double-insulated tools (2-wire cord, □ symbol) do NOT require grounding. Grounded tools (3-wire cord) MUST have intact ground pin and be tested per CSA C22.2 No. 71.' }
                            ]
                        },
                        {
                            id: 'ch3-s3',
                            title: 'Electrical Test & Diagnostic Equipment',
                            content: [
                                { type: 'text', text: 'Test equipment selection, verification, and safe use are heavily tested. CAT ratings (CAT II, III, IV) define the measurement environment and transient withstand capability.' },
                                {
                                    type: 'table', headers: ['Category', 'Typical Application', 'Transient Withstand'], rows: [
                                        ['CAT II', 'Branch circuits, outlets, portable tools', '2.5–4 kV'],
                                        ['CAT III', 'Distribution panels, busbars, fixed equipment', '4–6 kV'],
                                        ['CAT IV', 'Service entrance, utility meters, outdoor transformers', '6–12 kV']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'Digital Multimeter (DMM): True-RMS, CAT III 1000 V / CAT IV 600 V minimum. Verify on known source before/after use.',
                                        'Clamp Meter: AC/DC current without breaking circuit. True-RMS for VFD output.',
                                        'Insulation Resistance Tester (Megger): 500 V, 1000 V, 2500 V, 5000 V — for cables, motors, transformers. PI (Polarization Index) and DAR (Dielectric Absorption Ratio) tests.',
                                        'Ground Resistance Tester: 3-point (fall-of-potential), 4-point, clamp-on — for grounding electrodes, grids.',
                                        'Power Quality Analyzer: Harmonics, voltage sags/swells, transients, flicker, unbalance — IEEE 519 compliance.',
                                        'Thermal Imager: Infrared — for loose connections, overloaded circuits, motor bearings, refractory.',
                                        'Loop Impedance Tester: Zs, Ze — for fault loop impedance, prospective fault current.',
                                        'RCD/GFCI Tester: Trip time, trip current — for GFCI/AFCI verification.',
                                        'Phase Rotation Meter: Phase sequence, motor rotation.',
                                        'TDR (Time-Domain Reflectometer): Cable fault location, length, impedance mismatches.',
                                        'OTDR (Optical Time-Domain Reflectometer): Fiber optic loss, splice/connector loss, fault location.',
                                        'VFD Analyzer: PWM voltage/current, DC bus ripple, motor shaft voltage.',
                                        'PLC/Fieldbus Tools: Profibus, DeviceNet, EtherNet/IP, Modbus, HART communicators.',
                                        'Voltage Detectors: Non-contact (NCVT), proximity — for presence ONLY, not absence verification.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'NEVER use a CAT II meter on CAT III/IV circuits. NEVER verify zero energy with a non-contact voltage tester alone — use a verified DMM (live-dead-live procedure).' },
                                { type: 'callout', style: 'exam-tip', text: 'Exam tests: CAT rating selection, live-dead-live verification procedure, insulation test voltages (500 V for ≤1 kV, 1000 V for >1 kV), PI = R10min/R1min, DAR = R1min/R30sec.' }
                            ]
                        },
                        {
                            id: 'ch3-s4',
                            title: 'Rigging, Hoisting, Lifting & Access Equipment',
                            content: [
                                { type: 'text', text: 'Industrial electricians routinely move transformers, switchgear, MCCs, generators, and cable reels. Rigging hardware inspection and sling angle calculations are essential.' },
                                {
                                    type: 'list', items: [
                                        'Slings: synthetic (nylon, polyester), wire rope, chain — inspect for cuts, abrasion, heat damage, corrosion, stretch',
                                        'Hardware: shackles (screw pin, bolt type), eye bolts, turnbuckles, hooks (with latch), master links — inspect for deformation, cracks, wear >10%',
                                        'Hoists: chain fall, lever hoist, electric chain hoist, air hoist — load test annually',
                                        'Cranes: overhead, gantry, jib, mobile — operator certification required',
                                        'Jacks: hydraulic bottle, screw, ratchet — for equipment positioning',
                                        'Rollers & skates: machinery movers, Hilman rollers',
                                        'Ladders: fiberglass (non-conductive) ONLY — step, extension, platform — inspect rails, rungs, feet',
                                        'Scaffolding: frame, tube/clamp, system — competent person erection, tagging (green/yellow/red)',
                                        'Aerial work platforms: scissor lift, boom lift — fall arrest required in boom lifts, operator training',
                                        'Rope access: industrial rope access (SPRAT/IRATA) — for towers, stacks, confined vertical spaces'
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Sling Angle (from horizontal)', 'Tension Multiplier (per leg)', 'Example: 1000 kg load, 2 legs'], rows: [
                                        ['90° (vertical)', '1.00', '500 kg each'],
                                        ['60°', '1.15', '575 kg each'],
                                        ['45°', '1.41', '705 kg each'],
                                        ['30°', '2.00', '1000 kg each'],
                                        ['<30°', '>2.00', 'DO NOT USE']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Sling angle <30° from horizontal is PROHIBITED. Tension approaches infinity as angle approaches 0°. Always use spreader bars or longer slings to maintain angle ≥60°.' }
                            ]
                        },
                        {
                            id: 'ch3-s5',
                            title: 'PPE & Safety Equipment',
                            content: [
                                { type: 'text', text: 'PPE is the last line of defense. Selection per hazard assessment, CSA standards, and employer program.' },
                                {
                                    type: 'list', items: [
                                        'Head: CSA Z94.1 hard hat (Type 1 top impact, Type 2 top/side) — Class E (20 kV) or Class G (2.2 kV) for electrical',
                                        'Eyes: CSA Z94.3 safety glasses/goggles — prescription inserts if needed, anti-fog',
                                        'Face: Arc-rated face shield (8–40 cal/cm²) + balaclava for CAT 2+, arc flash suit hood for CAT 3/4',
                                        'Hearing: Ear plugs (NRR 25–33), earmuffs, dual protection >105 dBA',
                                        'Hands: Voltage-rated rubber gloves (Class 00–4) + leather protectors — air test before each use. Cut-resistant (ANSI A1–A9) for mechanical work. Chemical-resistant (nitrile, neoprene) for solvents, battery acid.',
                                        'Feet: CSA Z195 Grade 1 (steel/composite toe) + Omega (Ω) sole — dielectric, puncture-resistant plate, metatarsal guard if required',
                                        'Body: Arc-rated daily wear (CAT 1/2), arc flash suit (CAT 3/4), FR coveralls, high-visibility (CSA Z96 Class 2/3)',
                                        'Respiratory: N95 (dust), half-face (cartridges for organic vapour, acid gas, particulates), full-face, PAPR, SCBA — fit test required annually',
                                        'Fall: Full-body harness (CSA Z259.10), lanyard (energy-absorbing), SRL, anchor (CSA Z259.15) — 5000 lb minimum'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Glove classes: Class 00 (500 V), Class 0 (1000 V), Class 1 (7500 V), Class 2 (17 kV), Class 3 (26.5 kV), Class 4 (36 kV). Test every 6 months (rubber goods). Leather protectors ALWAYS worn over rubber gloves.' }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            id: 'part-2',
            number: 2,
            title: 'Installs/Maintains Generating, Distribution & Service Systems (MWA B)',
            description: 'Covers metering, transformers, switchgear, protective devices, power conditioning, UPS, DC systems, generating systems, renewable energy, and high-voltage systems. This is the largest MWA at 23 questions (23% of the exam).',
            weight: '23 questions (23% of Total Exam)',

            chapters: [
                // CHAPTER 4 — METERING & SERVICE ENTRANCE
                {
                    id: 'ch-4',
                    number: 4,
                    title: 'Metering & Service Entrance Equipment',
                    subtitle: 'Task B-7: Consumer/Supply Metering, CT/PT Cabinets, Service Entrance',
                    isFree: false,
                    estimatedMinutes: 45,

                    sections: [
                        {
                            id: 'ch4-s1',
                            title: 'Metering Fundamentals & Types',
                            content: [
                                { type: 'text', text: 'Metering installations must comply with Measurement Canada requirements, utility specifications, and CEC Section 6. Industrial electricians install, maintain, and troubleshoot both self-contained and instrument-rated metering.' },
                                { type: 'keyTerm', term: 'Self-Contained Meter', definition: 'Meter connected directly to the circuit without instrument transformers. Used for services up to 200 A (typically residential/small commercial).' },
                                { type: 'keyTerm', term: 'Instrument-Rated Meter', definition: 'Meter used with current transformers (CTs) and/or potential transformers (PTs) for services above 200 A. Meter measures secondary quantities (5 A, 120 V).' },
                                { type: 'keyTerm', term: 'Meter Multiplier', definition: 'Factor applied to meter reading to obtain actual consumption. = CT ratio × PT ratio. Example: 400:5 CT (ratio 80) × 120:120 PT (ratio 1) = multiplier of 80.' },
                                {
                                    type: 'table', headers: ['Service Size', 'Meter Type', 'CT/PT Required', 'Typical Application'], rows: [
                                        ['≤200 A', 'Self-contained (Form 2S, 12S)', 'No', 'Residential, small commercial'],
                                        ['201–400 A', 'Self-contained (Class 320)', 'No', 'Large residential, small industrial'],
                                        ['>400 A', 'Instrument-rated (Form 9S, 16S)', 'Yes (CTs)', 'Industrial, commercial'],
                                        ['>600 V', 'Instrument-rated (Form 9S, 16S)', 'Yes (CTs + PTs)', 'Medium-voltage services']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Know meter forms: Form 2S = 1Ø3W, Form 12S = 3Ø4W wye, Form 9S = 3Ø4W delta, Form 16S = 3Ø4W wye with 4th wire. Form 9S is most common for industrial 3-phase.' }
                            ]
                        },
                        {
                            id: 'ch4-s2',
                            title: 'CT/PT Installation & Safety',
                            content: [
                                { type: 'text', text: 'Current transformers (CTs) and potential transformers (PTs) are critical for accurate metering and protection. Installation errors cause billing errors, protection maloperation, and safety hazards.' },
                                { type: 'keyTerm', term: 'CT Ratio', definition: 'Primary current : Secondary current (e.g., 400:5). Secondary is standardized at 5 A (or 1 A). Primary must exceed maximum load current.' },
                                { type: 'keyTerm', term: 'CT Burden', definition: 'Total impedance (VA) of connected devices (meter, relay, wiring) on CT secondary. Must not exceed CT rated burden (typically 1.5–15 VA for metering class).' },
                                { type: 'keyTerm', term: 'CT Accuracy Class', definition: 'Metering class (0.3, 0.6, 1.2) = accuracy at rated burden. Relaying class (C100, C200) = voltage at 20× rated current. Metering CTs saturate early; relaying CTs do not.' },
                                { type: 'callout', style: 'warning', text: 'NEVER open-circuit a CT secondary under load. Open CT secondary = dangerous high voltage (kV), core saturation, permanent damage. Always short CT secondary before disconnecting meters/relays.' },
                                { type: 'callout', style: 'exam-tip', text: 'CT polarity: H1/H2 = primary, X1/X2 = secondary. H1 → X1 polarity mark. Current enters H1, exits X1. PT polarity: H1/H2 primary, X1/X2 secondary. Same convention.' },
                                {
                                    type: 'list', items: [
                                        'CT secondary wiring: twisted pair, shielded, grounded at ONE point only (typically at meter/relay)',
                                        'PT secondary: fused on primary side, grounded on secondary (X2 or midpoint)',
                                        'CT/PT cabinets: lockable, ventilated, sealed conduit entries, utility seal provisions',
                                        'Shorting blocks (test switches) required for CT circuits — make-before-break contacts',
                                        'Ground CT secondary at first device (meter/relay) — single-point ground prevents circulating currents'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'ch4-s3',
                            title: 'Service Entrance Equipment',
                            content: [
                                { type: 'text', text: 'Service entrance (CEC Section 6) includes service conductors, service box, meter socket, service disconnect, and grounding/bonding. Industrial services are typically 600 V, 3-phase, 4-wire (347/600 V) or 480 V (US).' },
                                { type: 'keyTerm', term: 'Service Box', definition: 'Enclosure containing service disconnecting means, overcurrent protection, and connection point for service conductors. Also called "main switchboard" or "service entrance switchgear".' },
                                { type: 'keyTerm', term: 'Service Disconnect', definition: 'Main device to disconnect all ungrounded conductors from the service. Must be rated for available fault current, grouped (max 6), marked "MAIN".' },
                                {
                                    type: 'table', headers: ['Component', 'CEC Rule', 'Key Requirement'], rows: [
                                        ['Service conductors', 'Rule 6-200', 'Ampacity ≥ load, voltage rating, mechanical protection'],
                                        ['Service box', 'Rule 6-204', 'Accessible, lockable, adequate working space (1 m)'],
                                        ['Service disconnect', 'Rule 6-206', 'Max 6 disconnects per service, grouped, marked'],
                                        ['Grounding electrode', 'Rule 10-700', 'Metal water pipe, ground rod, plate, building steel'],
                                        ['System grounding', 'Rule 10-204', 'Neutral grounded at service (solidly grounded wye)'],
                                        ['Bonding', 'Rule 10-800', 'All non-current-carrying parts bonded to ground']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Service entrance = point where utility responsibility ends and customer responsibility begins. Know: max 6 disconnects (Rule 6-206), working space 1 m (Rule 2-306), neutral-ground bond ONLY at service (Rule 10-204).' }
                            ]
                        }
                    ]
                },

                // CHAPTER 5 — TRANSFORMERS
                {
                    id: 'ch-5',
                    number: 5,
                    title: 'Transformers — Distribution & Power',
                    subtitle: 'Task B-8: Dry-Type, Liquid-Filled, Auto, Instrument, Specialty Transformers',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch5-s1',
                            title: 'Transformer Types & Construction',
                            content: [
                                { type: 'text', text: 'Transformers are the backbone of industrial power distribution. Understanding construction, cooling, connections, and protection is essential for installation, maintenance, and troubleshooting.' },
                                {
                                    type: 'table', headers: ['Type', 'Cooling', 'Typical Rating', 'Application', 'CEC Section'], rows: [
                                        ['Dry-type (VPI, Cast Coil)', 'AN (natural air), AF (forced air)', '15–2500 kVA', 'Indoor, commercial, industrial', '26-250'],
                                        ['Liquid-filled (Oil)', 'ONAN, ONAF, OFAF, OFWF', '75–10,000+ kVA', 'Outdoor, substation, utility', '26-250'],
                                        ['Liquid-filled (Less-flammable)', 'KNAN, KNAF', '75–5000 kVA', 'Indoor where oil prohibited', '26-250'],
                                        ['Autotransformer', 'AN, AF', '10–2000 kVA', 'Voltage adjustment, motor starting', '26-250'],
                                        ['Instrument (CT/PT)', 'Self-cooled', 'VA–kVA', 'Metering, protection', '16, 26'],
                                        ['Isolation', 'AN, AF', '0.5–500 kVA', 'Noise reduction, grounding separation', '26-250'],
                                        ['K-factor rated', 'AN, AF', '15–1000 kVA', 'Non-linear loads (VFDs, UPS)', '26-250'],
                                        ['Harmonic mitigating', 'AN, AF', '15–1000 kVA', 'Zero-sequence harmonic cancellation', '26-250']
                                    ]
                                },
                                { type: 'keyTerm', term: 'K-Factor', definition: 'Rating indicating transformer ability to serve non-linear loads without overheating. K-1 = linear loads only. K-4, K-13, K-20, K-30 for increasing harmonic content. Higher K = larger neutral, electrostatic shield, lower flux density.' },
                                { type: 'keyTerm', term: 'Vector Group', definition: 'IEC designation of winding connections and phase displacement. Example: Dyn11 = Delta primary, Wye secondary with neutral, 30° lag (11 o\'clock). ANSI: Δ-Y, Y-Δ, Y-Y, Δ-Δ.' }
                            ]
                        },
                        {
                            id: 'ch5-s2',
                            title: 'Three-Phase Connections & Phasor Diagrams',
                            content: [
                                { type: 'text', text: 'Industrial transformers are predominantly 3-phase. Connection determines voltage ratio, phase shift, harmonic behavior, and grounding capability.' },
                                {
                                    type: 'table', headers: ['Connection', 'Primary-Secondary', 'Phase Shift', 'Neutral', '3rd Harmonic', 'Application'], rows: [
                                        ['Δ-Δ', 'Delta-Delta', '0°', 'No', 'Circulates in Δ', 'Industrial, no neutral needed'],
                                        ['Y-Y', 'Wye-Wye', '0°', 'Yes (both)', 'Adds in neutral', 'Rare — neutral issues'],
                                        ['Δ-Y', 'Delta-Wye', '-30° (11)', 'Yes (sec)', 'Trapped in Δ', 'Most common — step-down'],
                                        ['Y-Δ', 'Wye-Delta', '+30° (1)', 'Yes (pri)', 'Trapped in Δ', 'Step-up, generation'],
                                        ['Y-Y + Δ', 'Wye-Wye-Delta', '0°', 'Yes', 'Trapped in Δ tert.', 'Large power, harmonic mitigation']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Δ-Y (Dyn11) is the STANDARD for step-down distribution (e.g., 600V → 120/208V). Primary Δ traps 3rd harmonics; secondary Wye provides neutral. Phase shift: secondary lags primary by 30° (11 o\'clock).' },
                                { type: 'text', text: 'Voltage ratio = turns ratio × √3 factor depending on connection. Δ-Y: V_LL(sec) = V_LL(pri) × (N_sec/N_pri) / √3. Y-Δ: V_LL(sec) = V_LL(pri) × (N_sec/N_pri) × √3.' }
                            ]
                        },
                        {
                            id: 'ch5-s3',
                            title: 'Installation, Protection & Maintenance',
                            content: [
                                { type: 'text', text: 'Transformer installation follows CEC Section 26 and IEEE/CSA standards. Protection coordination, clearances, ventilation, and grounding are critical.' },
                                {
                                    type: 'list', items: [
                                        'Clearances: dry-type ≥ 150 mm walls/ceiling (Rule 26-256), liquid-filled per Table 26-250',
                                        'Ventilation: dry-type requires natural/forced airflow — calculate heat rejection (BTU/hr = losses × 3413)',
                                        'Grounding: tank/core grounded, neutral grounded per system design (Rule 10-204, 10-206)',
                                        'Overcurrent protection: primary OCPD per Table 26-254 (125% for primary ≤ 600 V, 250% for primary > 600 V), secondary OCPD per Rule 26-256',
                                        'Secondary protection: not required if primary OCPD meets Rule 26-254(2) — but good practice',
                                        'Inrush current: 8–12× rated for 0.1–1 s — primary OCPD must withstand (time-delay fuses, thermal-mag breakers)',
                                        'Sound levels: NEMA ST-20 — specify max dB for indoor installations'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Dry-type transformers in electrical rooms: ventilation openings must NOT be blocked. Forced-air (AF) rating requires fan operation — interlock fan with transformer temperature alarm/trip.' },
                                {
                                    type: 'table', headers: ['Test', 'Purpose', 'Acceptance Criteria'], rows: [
                                        ['Turns Ratio (TTR)', 'Verify winding ratio, detect shorted turns', '±0.5% of nameplate'],
                                        ['Insulation Resistance', 'Winding-to-ground, winding-to-winding', '≥ 100 MΩ (dry), ≥ 1000 MΩ (liquid)'],
                                        ['Polarization Index (PI)', 'Insulation condition', 'PI ≥ 2.0 (good), 1.0–2.0 (marginal)'],
                                        ['Winding Resistance', 'Balance, connections, contacts', 'Phases within 1% (≤ 10 MVA), 2% (> 10 MVA)'],
                                        ['Excitation Current', 'Core condition, shorts', 'Phases within 10%, compare to baseline'],
                                        ['DGA (Dissolved Gas Analysis)', 'Liquid-filled: fault gases', 'IEEE C57.104 limits: H₂, CH₄, C₂H₂, C₂H₄, CO, CO₂'],
                                        ['Oil Quality', 'Dielectric strength, moisture, acid', '> 30 kV, < 35 ppm H₂O, < 0.1 mg KOH/g']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Memorize: Primary OCPD max = 250% FLA (primary > 600 V) or 125% FLA (primary ≤ 600 V). Secondary OCPD = 125% FLA. Inrush = 8-12× for 0.1-1s. TTR tolerance = ±0.5%. PI = R10min/R1min ≥ 2.0.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 6 — SWITCHGEAR & PANELBOARDS
                {
                    id: 'ch-6',
                    number: 6,
                    title: 'Switchgear & Panelboards',
                    subtitle: 'Task B-9: Metal-Enclosed, Metal-Clad, Panelboards, Motor Control Centres',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch6-s1',
                            title: 'Switchgear Classifications & Construction',
                            content: [
                                { type: 'text', text: 'Switchgear assemblies are the nerve center of industrial power distribution. CSA C22.2 No. 31 (metal-enclosed), No. 58 (metal-clad), and IEEE C37.20 standards govern construction, ratings, and testing.' },
                                {
                                    type: 'table', headers: ['Type', 'Voltage Class', 'Construction', 'Breaker Type', 'Typical Application'], rows: [
                                        ['Panelboard', '≤600 V', 'Dead-front, bolt-on/plug-in', 'MCCB (molded case)', 'Lighting, receptacles, small loads'],
                                        ['Switchboard', '≤600 V', 'Dead-front, fixed-mounted', 'MCCB, ICCB, fused', 'Service entrance, distribution'],
                                        ['Motor Control Centre (MCC)', '≤600 V', 'Vertical sections, plug-in units', 'MCCB + contactor/OL', 'Motor loads, combination starters'],
                                        ['Metal-Enclosed (ME)', '5–38 kV', 'Compartmentalized, fixed', 'Fused switch, vacuum', 'Industrial distribution, utility'],
                                        ['Metal-Clad (MC)', '5–38 kV', 'Fully compartmentalized, drawout', 'Vacuum/SF6 drawout', 'Critical processes, utility substation'],
                                        ['Arc-Resistant', '5–38 kV', 'Type 1, 2, 2B, 2C', 'Drawout vacuum', 'High fault current, personnel safety']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Metal-Clad vs Metal-Enclosed', definition: 'Metal-clad: ALL primary components in separate grounded metal compartments (breaker, bus, CT, PT, cable) with shutters, drawout breakers. Metal-enclosed: common compartment, fixed or drawout, less stringent compartmentalization.' },
                                { type: 'keyTerm', term: 'Arc-Resistant Type 2B', definition: 'Provides arc protection at front, sides, AND rear — even with low-voltage compartment doors open. Required for high-risk installations per IEEE C37.20.7.' }
                            ]
                        },
                        {
                            id: 'ch6-s2',
                            title: 'Ratings, Busbars & Short-Circuit Withstand',
                            content: [
                                { type: 'text', text: 'Switchgear ratings must match or exceed system available fault current. Key ratings: continuous current, short-circuit withstand (momentary/3-cycle), interrupting, voltage, BIL.' },
                                {
                                    type: 'table', headers: ['Rating', 'Symbol', 'Definition', 'Typical Values'], rows: [
                                        ['Continuous Current', 'Iₙ', 'RMS current carried continuously', '400–5000 A'],
                                        ['Short-Time Withstand', 'Iₖ / Icw', 'RMS current for 0.5–3 s (thermal)', '25–100 kA (1–3 s)'],
                                        ['Peak Withstand', 'Iₚ', 'Peak current (first cycle)', '2.5×Iₖ (50 Hz), 2.6-2.7×Iₖ (60 Hz)'],
                                        ['Interrupting Rating', 'Icu/Ics', 'Max fault breaker can interrupt', '25–200 kA'],
                                        ['BIL', '—', 'Lightning impulse withstand', '60–1550 kV'],
                                        ['Power Frequency Withstand', '—', '1-min AC hi-pot test', '19–460 kV']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Busbar sizing: copper ~1000 A/in², aluminum ~700 A/in² (rule of thumb). Actual per CSA C22.2 No. 31/58 temperature rise test. Short-circuit forces: F ∝ I² — bus supports must withstand peak mechanical force.' },
                                {
                                    type: 'list', items: [
                                        'Busbar plating: tin (standard), silver (high current), nickel (corrosive)',
                                        'Bus insulation: bare (air), epoxy-coated, heat-shrink, bus duct',
                                        'Neutral bus: full-size (100%) for non-linear loads, half-size (50%) for linear',
                                        'Ground bus: continuous, sized per Table 16, connected to ground electrode',
                                        'Phasing: A-B-C left-to-right or top-to-bottom (front view) — verify with phasing sticks'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'ch6-s3',
                            title: 'MCC Construction & Combination Starters',
                            content: [
                                { type: 'text', text: 'Motor Control Centres (MCCs) are vertical sections with plug-in units (buckets) containing combination starters. NEMA ICS-2, CSA C22.2 No. 254, UL 845 govern design.' },
                                {
                                    type: 'table', headers: ['Starter Type', 'Components', 'Application', 'Advantages'], rows: [
                                        ['Full Voltage (FVNR)', 'MCCB/Disconnect + Contactor + OL', 'Small motors, reversible', 'Simple, low cost'],
                                        ['Full Voltage Reversing (FVR)', 'MCCB + 2 Contactors (interlocked) + OL', 'Reversing motors', 'Mechanical/electrical interlock'],
                                        ['Reduced Voltage Autotransformer (RVAT)', 'MCCB + Autotransformer + 3 Contactors + OL', 'Large motors, weak supply', 'Lower inrush, adjustable taps'],
                                        ['Reduced Voltage Wye-Delta (Y-Δ)', 'MCCB + 3 Contactors + OL', 'Delta-connected motors', '33% inrush, no transformer'],
                                        ['Soft Starter (Solid State)', 'MCCB + SCR/Thyristor + OL', 'Pumps, fans, conveyors', 'Smooth ramp, programmable'],
                                        ['VFD (Variable Frequency Drive)', 'MCCB + VFD + Bypass contactor', 'Variable speed, energy savings', 'Speed control, soft start, PF correction']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Combination Starter', definition: 'Single enclosure containing: disconnecting means (MCCB/fused switch), motor controller (contactor/VFD), overload protection, and control circuit transformer — per CEC Rule 28-206.' },
                                { type: 'callout', style: 'exam-tip', text: 'MCC bucket interlocks: 1) Bucket cannot insert/remove with breaker ON. 2) Breaker cannot turn ON with door open. 3) Door cannot open with breaker ON (defeat for testing). 4) Ground stab engages first, power stabs last.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 7 — PROTECTIVE DEVICES & COORDINATION
                {
                    id: 'ch-7',
                    number: 7,
                    title: 'Protective Devices & Coordination',
                    subtitle: 'Task B-10: Fuses, Breakers, Relays, Selective Coordination, Arc Flash Mitigation',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch7-s1',
                            title: 'Overcurrent Protective Devices — Types & Curves',
                            content: [
                                { type: 'text', text: 'OCPD selection requires understanding time-current curves (TCC), interrupting ratings, current-limiting characteristics, and coordination principles. CEC Section 14 governs application.' },
                                {
                                    type: 'table', headers: ['Device', 'Voltage', 'Interrupting', 'Current-Limiting', 'Curve Type', 'Application'], rows: [
                                        ['Class J Fuse', '600 V', '200–300 kA', 'Yes (very fast)', 'Fast/Time-delay', 'Feeders, motors, transformers'],
                                        ['Class RK1 Fuse', '600 V', '200 kA', 'Yes', 'Time-delay', 'Motor circuits, selective coord.'],
                                        ['Class RK5 Fuse', '600 V', '200 kA', 'Moderate', 'Time-delay', 'General purpose (avoid for coord.)'],
                                        ['Class L Fuse', '600 V', '200 kA', 'Yes', 'Time-delay', 'Mains > 600 A, service entrance'],
                                        ['Class T Fuse', '300/600 V', '200 kA', 'Very fast', 'Fast', 'Semiconductor, small panels'],
                                        ['MCCB (Thermal-Mag)', '600 V', '10–200 kA', 'No', 'Inverse time + instant.', 'Branch, feeder, motor'],
                                        ['ICCB (Electronic)', '600 V', '35–200 kA', 'No', 'Programmable (LSI/LSIG)', 'Feeder, main, selective coord.'],
                                        ['LV Power Breaker', '600 V', '42–200 kA', 'No', 'Programmable (LSIG)', 'Main, tie, generator'],
                                        ['MV Vacuum Breaker', '5–38 kV', '12.5–63 kA', 'No', 'Relay-controlled', 'Substation, distribution'],
                                        ['MV Fuse (E/R)', '2.75–38 kV', '40–63 kA', 'Yes', 'Time-current', 'Transformer, capacitor, motor']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Current-Limiting', definition: 'Device that interrupts fault current BEFORE it reaches its first peak (within 1/2 cycle). Reduces let-through energy (I²t) and peak current (Ip). Class J, L, RK1, T fuses are current-limiting; most breakers are NOT.' },
                                { type: 'keyTerm', term: 'Selective Coordination', definition: 'Only the OCPD nearest the fault opens; upstream devices remain closed. Achieved by time separation (0.3–0.5 s) or current-limiting upstream device.' }
                            ]
                        },
                        {
                            id: 'ch7-s2',
                            title: 'Protective Relays — ANSI/IEEE Device Numbers',
                            content: [
                                { type: 'text', text: 'Protective relays (IEEE C37.2) provide detection, measurement, and tripping logic for MV/LV power breakers. Industrial electricians must understand device numbers, settings, and testing.' },
                                {
                                    type: 'table', headers: ['Device #', 'Function', 'Application', 'Key Settings'], rows: [
                                        ['50', 'Instantaneous Overcurrent', 'Phase fault backup', 'Pickup (A), Time (0)'],
                                        ['51', 'Time Overcurrent (Phase)', 'Phase fault primary', 'Pickup, Time Dial, Curve (IEC/US)'],
                                        ['50N/51N', 'Neutral/Ground Overcurrent', 'Ground fault (residual)', 'Pickup, Time Dial, Curve'],
                                        ['50G/51G', 'Ground Overcurrent (CT in neutral)', 'Ground fault (source)', 'Pickup, Time Dial, Curve'],
                                        ['67', 'Directional Overcurrent', 'Parallel sources, loop', 'Pickup, Angle, Time'],
                                        ['87', 'Differential', 'Transformer, bus, generator, motor', 'Slope %, Min Pickup, Harmonic Restraint'],
                                        ['59', 'Overvoltage', 'Capacitor, generator, UVLS', 'Pickup, Time'],
                                        ['27', 'Undervoltage', 'Motor, load shedding, UVLS', 'Pickup, Time'],
                                        ['81', 'Over/Underfrequency', 'Generator, load shedding', 'Pickup, Time'],
                                        ['46', 'Negative Sequence/Phase Balance', 'Motor, generator unbalance', 'Pickup, Time'],
                                        ['49', 'Thermal Overload', 'Motor, transformer thermal', 'RTD input, Thermal model'],
                                        ['79', 'Reclosing', 'Utility distribution', 'Shots, Intervals, Lockout'],
                                        ['21', 'Distance (Impedance)', 'Transmission line', 'Zones, Reach, Time'],
                                        ['60', 'Voltage Balance', 'Bus, capacitor', 'Pickup, Time']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Know the big ones: 50/51 (phase OC), 50N/51N (residual GF), 50G/51G (source GF), 87 (differential), 27/59 (UV/OV), 46 (phase balance), 49 (thermal). Exam tests: 51N vs 51G (residual vs source CT), 87 slope settings (typically 20-50%), 51 curve types (IEC A/B/C, US Inverse/Very Inverse/Extremely Inverse).' }
                            ]
                        },
                        {
                            id: 'ch7-s3',
                            title: 'Coordination Studies & Arc Flash Mitigation',
                            content: [
                                { type: 'text', text: 'Coordination study (IEEE 242, 399, 1584) plots TCCs on log-log paper to verify selectivity. Arc flash study (IEEE 1584) calculates incident energy and PPE categories. Both required for new/modified industrial systems.' },
                                {
                                    type: 'list', items: [
                                        'Data collection: single-line, equipment ratings, cable data, utility fault current',
                                        'Short-circuit study: ANSI/IEC method — calculate 3-phase, L-G, L-L, L-L-G at all buses',
                                        'TCC plotting: device curves + cable damage curves + transformer inrush/damage + motor starting',
                                        'Selectivity: 0.3–0.5 s time margin between curves at max fault current',
                                        'Arc flash: IEEE 1584-2018 — arcing current, incident energy, arc flash boundary, PPE category',
                                        'Mitigation: maintenance switches (reduce instantaneous), zone-selective interlocking (ZSI), differential relays, arc-flash relays (light + current), current-limiting fuses, remote operation'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'ZSI (Zone-Selective Interlocking): upstream breaker restrains instantaneous trip for 0.1–0.3 s when downstream breaker detects fault. If downstream fails, upstream trips. Eliminates intentional time delays for selectivity.' },
                                { type: 'callout', style: 'warning', text: 'Maintenance switch (Arc Reduction Maintenance Switch) per NEC 240.87 / CEC Rule 14-014: reduces instantaneous pickup to minimum for work on energized equipment. MUST be labeled, keyed, and logged. Not a substitute for de-energizing.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 8 — POWER CONDITIONING, UPS & EMERGENCY SYSTEMS
                {
                    id: 'ch-8',
                    number: 8,
                    title: 'Power Conditioning, UPS & Emergency Systems',
                    subtitle: 'Task B-11: Power Quality, UPS Topologies, Transfer Switches, Generators',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch8-s1',
                            title: 'Power Quality Issues & Mitigation',
                            content: [
                                { type: 'text', text: 'Industrial facilities face voltage sags, swells, transients, harmonics, unbalance, and flicker. IEEE 519, 1159, 1453 define limits and monitoring. Mitigation equipment selection depends on disturbance type and criticality.' },
                                {
                                    type: 'table', headers: ['Disturbance', 'Duration', 'Cause', 'Mitigation'], rows: [
                                        ['Sag (dip)', '0.5–30 cycles', 'Motor start, fault, utility', 'DVR, UPS, CVT, ride-through drives'],
                                        ['Swell', '0.5–30 cycles', 'Load rejection, capacitor switch', 'Surge arresters, voltage regulation'],
                                        ['Transient (impulse)', '<1 ms', 'Lightning, switching', 'TVSS/SPD, isolation transformer'],
                                        ['Harmonics', 'Steady-state', 'VFDs, rectifiers, LED, UPS', 'Filters, K-factor Xfmr, 18-pulse, AFE'],
                                        ['Unbalance', 'Steady-state', 'Single-phase loads, open Δ', 'Balancing, D-STATCOM'],
                                        ['Flicker', 'Intermittent', 'Arc furnace, welders, large motors', 'SVC, STATCOM, dedicated supply'],
                                        ['Notching', 'Steady-state', 'SCR rectifiers', 'Line reactor, isolation Xfmr']
                                    ]
                                },
                                { type: 'keyTerm', term: 'DVR (Dynamic Voltage Restorer)', definition: 'Series-connected power electronic device that injects voltage to compensate for sags/swells. Response < 1 ms. Protects critical loads without batteries.' },
                                { type: 'keyTerm', term: 'TVSS / SPD (Surge Protective Device)', definition: 'Parallel-connected device (MOV, GDT, SAD) that clamps transient overvoltages. Type 1 (service entrance), Type 2 (branch panel), Type 3 (point-of-use). IEEE C62.41, UL 1449.' }
                            ]
                        },
                        {
                            id: 'ch8-s2',
                            title: 'UPS Topologies & Battery Systems',
                            content: [
                                { type: 'text', text: 'Uninterruptible Power Supply (UPS) provides ride-through during outages and power conditioning. Topology determines performance, efficiency, and cost.' },
                                {
                                    type: 'table', headers: ['Topology', 'IEC 62040', 'Operation', 'Transfer Time', 'Efficiency', 'Application'], rows: [
                                        ['Standby (Offline)', 'VFD', 'Load on utility; inverter on battery', '4–10 ms', '95–98%', 'Workstations, non-critical'],
                                        ['Line-Interactive', 'VI', 'Buck/boost transformer + inverter', '2–4 ms', '95–98%', 'Small servers, network'],
                                        ['Double-Conversion (Online)', 'VFI', 'Load always on inverter; rectifier charges', '0 ms', '90–96%', 'Critical: data centers, medical, process'],
                                        ['Delta-Conversion', 'VFI', 'Delta converter + main inverter', '0 ms', '96–97%', 'Large critical loads'],
                                        ['Rotary (DRUPS)', 'VFI', 'Flywheel + diesel + generator', '0 ms', '97–98%', 'MW-scale, high power quality']
                                    ]
                                },
                                { type: 'keyTerm', term: 'VFI (Voltage Frequency Independent)', definition: 'UPS output voltage and frequency independent of input. Double-conversion and rotary UPS are VFI. Provides highest protection.' },
                                {
                                    type: 'list', items: [
                                        'Battery types: VRLA (AGM/Gel) — 3–5 yr (small), 10–12 yr (large); Flooded — 20 yr; Li-ion — 15 yr, high energy density',
                                        'Battery sizing: kW × runtime (hr) / (V × efficiency × aging factor × temp factor)',
                                        'Battery monitoring: cell voltage, temperature, impedance, current — IEEE 1188 (VRLA), 450 (flooded)',
                                        'Battery replacement: VRLA at 80% capacity; IEEE 1188 discharge test annually after year 3',
                                        'Bypass: static (electronic) for maintenance/overload; manual (wrap-around) for service'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'UPS exam focus: topology differences (transfer time, efficiency), battery sizing formula, VRLA vs flooded maintenance, bypass types, harmonics from rectifier input (6-pulse = 5th, 7th, 11th, 13th... 12-pulse reduces).' }
                            ]
                        },
                        {
                            id: 'ch8-s3',
                            title: 'Transfer Switches & Emergency Generators',
                            content: [
                                { type: 'text', text: 'Automatic Transfer Switches (ATS) and generators provide emergency/standby power. CSA C282, NFPA 110, CEC Section 46 govern installation, testing, and maintenance.' },
                                {
                                    type: 'table', headers: ['ATS Type', 'Transition', 'Application', 'Interruption'], rows: [
                                        ['Open Transition', 'Break-before-make', 'Standard emergency', '50–200 ms'],
                                        ['Closed Transition', 'Make-before-break (sync)', 'Critical, no interruption', '0 ms (paralleling <100 ms)'],
                                        ['Delayed Transition', 'Break-wait-make', 'Motor loads, transformers', '1–60 s (adjustable)'],
                                        ['Soft Load Transfer', 'Ramp generator to utility', 'Peak shaving, base load', 'Seamless']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Closed Transition ATS', definition: 'Momentarily parallels generator and utility (≤100 ms) with synchronizing check (voltage, frequency, phase angle). Requires utility approval and protective relaying (25, 27, 59, 81, 32).' },
                                {
                                    type: 'list', items: [
                                        'Generator sizing: running kW + starting kVA (largest motor) + future — power factor 0.8 lagging',
                                        'Engine: diesel (most common), natural gas, dual fuel — EPA Tier 4 emissions',
                                        'Alternator: PMG excitation, 2/3 pitch (reduce 3rd harmonic), subtransient reactance X\'\'d',
                                        'Governor: electronic isochronous (0% droop) for standalone, 3–5% droop for paralleling',
                                        'AVR: ±0.5% voltage regulation, 3-phase sensing, PMG powered'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'NFPA 110 Levels: Level 1 (life safety — healthcare, egress) = weekly test, monthly load test. Level 2 (non-life-safety) = monthly test. CSA C282: weekly no-load, monthly 30% load, annual 100% load bank test.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 9 — DC SYSTEMS, BATTERIES & GENERATING SYSTEMS
                {
                    id: 'ch-9',
                    number: 9,
                    title: 'DC Power Systems, Batteries & Generating Systems',
                    subtitle: 'Task B-12: DC Distribution, Battery Banks, Chargers; Task B-13: Generators, Paralleling, Controls',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch9-s1',
                            title: 'DC Distribution Systems & Battery Banks',
                            content: [
                                { type: 'text', text: 'DC systems power critical controls, protection, communication, and emergency lighting. Common voltages: 24 V, 48 V, 125 V, 250 V. Battery banks provide backup during AC loss.' },
                                {
                                    type: 'table', headers: ['Voltage', 'Application', 'Battery Type', 'Cells (2 V each)'], rows: [
                                        ['24 VDC', 'PLC I/O, instrumentation, controls', 'VRLA, NiCd', '12'],
                                        ['48 VDC', 'Telecom, UPS DC bus, substation control', 'VRLA, Flooded', '24'],
                                        ['125 VDC', 'Substation protection, breaker control, SCADA', 'Flooded, VRLA', '60'],
                                        ['250 VDC', 'Large substation, HVDC control', 'Flooded', '120']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Float Voltage', definition: 'Voltage maintained on battery to keep fully charged without overcharging. VRLA: 2.25–2.30 V/cell @ 25°C. Flooded: 2.17–2.22 V/cell. Temperature compensated: -3 mV/°C/cell.' },
                                { type: 'keyTerm', term: 'Equalize Voltage', definition: 'Periodic higher voltage to correct cell imbalance. VRLA: 2.35–2.40 V/cell (monthly/quarterly). Flooded: 2.33–2.40 V/cell (quarterly). Monitoring required — gas evolution!' },
                                {
                                    type: 'list', items: [
                                        'Battery charger: SCR/thyristor or switch-mode — float, equalize, alarm (high/low V, ground fault, AC fail)',
                                        'DC distribution: insulated panels, ground detection (ungrounded systems), LVD (low voltage disconnect) for non-critical',
                                        'Ground detection: center-tapped resistor or active injection — alarms on first ground, trips on second (CEC Rule 10-106)',
                                        'Battery room: ventilation (hydrogen < 1%), spill containment, eyewash, PPE, no smoking, Class 1 Div 2 if > 4% H₂ potential'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Hydrogen evolution: VRLA recombines 99%+ but CAN vent under overcharge/thermal runaway. Flooded vents continuously during charge. 4% H₂ = LEL. Ventilation ≥ 1 CFM per ft² floor area minimum.' }
                            ]
                        },
                        {
                            id: 'ch9-s2',
                            title: 'Generating Systems — Paralleling & Controls',
                            content: [
                                { type: 'text', text: 'Industrial generators operate standalone, paralleled with utility, or in multi-generator islands. Synchronizing, load sharing, and protection are critical.' },
                                {
                                    type: 'table', headers: ['Function', 'Method', 'Key Parameters'], rows: [
                                        ['Synchronizing', 'Auto (25 relay) / Manual', 'ΔV < 5%, Δf < 0.1 Hz, Δθ < 10°, dwell time'],
                                        ['Load Sharing (kW)', 'Governor droop / isochronous', 'Droop 3–5%, load bias, cross-current compensation'],
                                        ['Load Sharing (kVAR)', 'AVR droop / cross-current', 'Reactive droop 3–5%, voltage matching'],
                                        ['Protection', 'Relays (32, 40, 27, 59, 81, 51V, 67)', 'Reverse power, loss of field, UV/OV, UF/OF, V-restrained OC, directional OC'],
                                        ['Dead Bus Closure', 'Dead bus closure relay (25)', 'Voltage check, phase rotation, breaker close']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Droop (Speed Droop)', definition: 'Generator frequency decreases as load increases. 4% droop = 4% frequency change from no-load to full-load. Allows stable parallel operation — each generator picks up proportional load.' },
                                { type: 'keyTerm', term: 'Cross-Current Compensation', definition: 'CT in each generator neutral/ground feeds compensating circuit to balance reactive load sharing without voltage droop. Improves voltage regulation.' },
                                {
                                    type: 'list', items: [
                                        'Synchronizing check relay (25): verifies ΔV, Δf, Δθ before close — ANSI 25 with dead bus logic',
                                        'Reverse power (32): trips generator if it becomes motor (0.5–3% rated, 0.5–3 s) — prevents engine damage',
                                        'Loss of field (40): impedance relay — trips if excitation lost (generator draws reactive, loses sync)',
                                        'Inadvertent energization (50/27): prevents closing breaker on energized bus with no sync',
                                        'Load shed: underfrequency (81U), undervoltage (27), rate-of-change (81R) — sheds non-critical loads'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Paralleling exam focus: synchronizing parameters (ΔV, Δf, Δθ), droop vs isochronous, reverse power (32) setting, loss of field (40) characteristic, load sharing principles. Utility interconnection: IEEE 1547, anti-islanding (81O/81U + 59/27 + ROCOF).' }
                            ]
                        }
                    ]
                },

                // CHAPTER 10 — RENEWABLE ENERGY & HIGH-VOLTAGE SYSTEMS
                {
                    id: 'ch-10',
                    number: 10,
                    title: 'Renewable Energy & High-Voltage Systems',
                    subtitle: 'Task B-14: Solar PV, Wind, Energy Storage; Task B-15: Substations, Switching, Protection',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch10-s1',
                            title: 'Solar PV Systems — Utility-Interactive',
                            content: [
                                { type: 'text', text: 'Industrial PV systems range from rooftop (100 kW) to ground-mount (MW). CEC Section 50, CSA C22.2 No. 107.1, IEEE 1547 govern. Key: inverters, rapid shutdown, grounding, interconnection.' },
                                {
                                    type: 'table', headers: ['Component', 'Function', 'Key Specs', 'CEC Rule'], rows: [
                                        ['PV Module', 'DC generation', 'Vmp, Imp, Voc, Isc, Temp coeff', '50-002'],
                                        ['String Inverter', 'DC→AC per string', 'MPPT inputs, CEC eff, anti-islanding', '50-004'],
                                        ['Central Inverter', 'DC→AC for array', 'MW scale, MV output, transformerless', '50-004'],
                                        ['Microinverter', 'Module-level DC→AC', 'Rapid shutdown inherent, monitoring', '50-008'],
                                        ['DC Optimizer', 'Module-level MPPT', 'Fixed string voltage, rapid shutdown', '50-008'],
                                        ['Combiner Box', 'Parallel strings', 'Fuses, SPD, monitoring, disconnect', '50-006'],
                                        ['Rapid Shutdown', 'De-energize array', '≤30 V / 80 s within 300 mm of array', '50-008'],
                                        ['Grounding', 'System grounding', 'Functional (neg grounded) or ungrounded', '50-006, 10-204']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Rapid Shutdown (CEC 50-008)', definition: 'PV system must reduce voltage to ≤30 V within 30 seconds (Canada) / 80 seconds (US NEC) inside array boundary. Initiated by AC disconnect or dedicated switch. Module-level electronics (microinverters, optimizers) or string-level disconnect.' },
                                { type: 'callout', style: 'exam-tip', text: 'PV exam focus: Voc temp correction (Voc × [1 + β(Voc) × (Tmin - 25°C)]), string sizing (Voc max < inverter max, Vmp min > inverter min), conductor ampacity (125% Isc × temp correction × conduit fill), rapid shutdown requirements, grounding (functional vs equipment).' }
                            ]
                        },
                        {
                            id: 'ch10-s2',
                            title: 'Energy Storage Systems (ESS)',
                            content: [
                                { type: 'text', text: 'Battery ESS (Li-ion dominant) for peak shaving, backup, renewable firming, frequency regulation. CEC Section 52, NFPA 855, UL 9540, UL 1973 govern.' },
                                {
                                    type: 'table', headers: ['Chemistry', 'Energy Density', 'Cycle Life', 'C-rate', 'Application', 'Safety'], rows: [
                                        ['Li-ion (LFP)', '90–160 Wh/kg', '3000–6000', '0.5–1C', 'Stationary ESS, backup', 'Best thermal stability'],
                                        ['Li-ion (NMC)', '150–220 Wh/kg', '2000–4000', '1–3C', 'EV, portable, some ESS', 'Higher energy, thermal risk'],
                                        ['Li-ion (LTO)', '70–90 Wh/kg', '15000+', '5–10C', 'Frequency regulation, UPS', 'Extreme life, safe, expensive'],
                                        ['Flow (VRFB)', '15–25 Wh/kg', '20000+', '0.2–0.5C', 'Long-duration (4-10 hr)', 'Non-flammable, scalable'],
                                        ['Lead-acid (VRLA)', '30–50 Wh/kg', '500–1200', '0.1–0.2C', 'Legacy backup, small UPS', 'Mature, recyclable, heavy']
                                    ]
                                },
                                { type: 'keyTerm', term: 'BESS (Battery Energy Storage System)', definition: 'Complete system: battery modules, BMS (Battery Management System), PCS (Power Conversion System), EMS (Energy Management System), fire suppression, HVAC, container/enclosure.' },
                                {
                                    type: 'list', items: [
                                        'BMS: cell monitoring (V, T), balancing (passive/active), SOC/SOH estimation, protection (OC, UV, OV, OT), communication (Modbus, CAN, Ethernet)',
                                        'PCS: bidirectional inverter — grid-forming (VFI) or grid-following (PQ), black-start capable',
                                        'Fire suppression: NFPA 855 — sprinkler, clean agent (Novec, FM-200), aerosol, water mist — deflagration venting for Li-ion',
                                        'Installation: CEC 52 — disconnects, OCPD, ventilation, clearances, signage, fire service access'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'ch10-s3',
                            title: 'High-Voltage Substations & Switching',
                            content: [
                                { type: 'text', text: 'Industrial facilities with >750 V service operate high-voltage substations (5–38 kV typical). Switching procedures, protection, and maintenance are specialized tasks.' },
                                {
                                    type: 'table', headers: ['Equipment', 'Function', 'Key Ratings', 'Maintenance'], rows: [
                                        ['Power Transformer', 'Step-down HV→LV', 'MVA, kV, Z%, BIL, cooling', 'DGA, oil, TTR, IR, PD annually'],
                                        ['Circuit Breaker (VCB/SF6)', 'Interrupt fault/load', 'kA, kV, BIL, operations', 'Timing, travel, contact, IR, gas'],
                                        ['Disconnect Switch', 'Visible isolation', 'kV, A, BIL, interrupt rating (0)', 'Align, contact, motor, IR'],
                                        ['Surge Arrester', 'Clamp overvoltage', 'MCOV, duty cycle, class', 'Leakage current, IR, visual'],
                                        ['CT/PT', 'Metering/protection', 'Ratio, burden, class, BIL', 'Ratio, polarity, IR, tan δ'],
                                        ['Busbar', 'Conduct', 'A, kA, BIL, phase spacing', 'IR, torque, thermography'],
                                        ['Ground Grid', 'Fault current return', 'Grid resistance, step/touch', 'Fall-of-potential, visual']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Switching Procedure', definition: 'Written, step-by-step sequence for de-energizing/energizing HV equipment. Includes: isolation points, grounds, tags, verification, PPE, communication, contingency. Approved by authorized person.' },
                                {
                                    type: 'list', items: [
                                        'Switching authority: authorized person (CEC Rule 2-304) — plans, authorizes, supervises',
                                        'Single-line diagram: current, approved, at switching location',
                                        'Live-line tools: hot sticks, phasing testers, voltage detectors — rated for voltage',
                                        'Grounding: temporary protective grounds (TPG) — sized for fault current, installed AFTER voltage verification',
                                        'Step/touch potential: ground grid design (IEEE 80) — crushed rock, gradient control, bonding',
                                        'SF6 handling: recovery, recycling, leak detection — greenhouse gas (GWP 23,500)'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'HV switching: ALWAYS verify zero voltage with phasing tester BEFORE installing grounds. Grounds = your life insurance. Remove grounds in REVERSE order of installation. One person in charge — no exceptions.' },
                                { type: 'callout', style: 'exam-tip', text: 'HV exam focus: switching procedure steps, TPG sizing (IEEE 1048), ground grid (step/touch), SF6 handling, breaker timing (contact wipe, overtravel), transformer DGA interpretation (IEEE C57.104), arrester leakage current trending.' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'part-3',
            number: 3,
            title: 'Installs/Maintains Wiring Systems (MWA C)',
            description: 'Covers raceways, cables, conductors, boxes/enclosures, wiring devices, and lighting systems. This MWA represents 20 questions (20% of the total exam).',
            weight: '20 questions (20% of Total Exam)',

            chapters: [
                // CHAPTER 11 — RACEWAYS
                {
                    id: 'ch-11',
                    number: 11,
                    title: 'Raceways — Conduit, Tubing, Cable Tray & Busway',
                    subtitle: 'Task C-16: Installs/Maintains Raceways',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch11-s1',
                            title: 'Raceway Types & Applications',
                            content: [
                                { type: 'text', text: 'Raceways provide mechanical protection and a pathway for conductors. Selection depends on environment, mechanical exposure, corrosion, cost, and CEC Rules 12-500 to 12-2200.' },
                                {
                                    type: 'table', headers: ['Raceway Type', 'Material', 'CEC Rule', 'Typical Use', 'Max Wet Location'], rows: [
                                        ['Rigid Metal Conduit (RMC)', 'Galvanized steel', '12-1000', 'Heavy industrial, outdoors, hazardous', 'Yes (with approved fittings)'],
                                        ['Intermediate Metal Conduit (IMC)', 'Galvanized steel', '12-1100', 'Industrial, lighter than RMC', 'Yes'],
                                        ['Electrical Metallic Tubing (EMT)', 'Thin-wall steel', '12-1200', 'Commercial, indoor, dry', 'No (unless listed)'],
                                        ['Flexible Metal Conduit (FMC)', 'Interlocked steel/Al', '12-1300', 'Vibration, equipment connections', 'No'],
                                        ['Liquidtight Flexible Metal (LFMC)', 'FMC + PVC jacket', '12-1300', 'Wet, oil, vibration', 'Yes'],
                                        ['Liquidtight Flexible Nonmetallic (LFNC)', 'PVC, no metal', '12-1300', 'Wet, corrosive, non-metallic', 'Yes'],
                                        ['Rigid PVC Conduit', 'PVC Schedule 40/80', '12-1400', 'Underground, concrete, corrosive', 'Yes'],
                                        ['HDPE Conduit', 'High-density polyethylene', '12-1400', 'Directional boring, underground', 'Yes'],
                                        ['Electrical Nonmetallic Tubing (ENT)', 'Corrugated flexible', '12-1500', 'Concealed in walls, concrete', 'No'],
                                        ['Cable Tray (Ladder, Ventilated, Solid)', 'Steel, Al, FRP', '12-2200', 'Cable runs, industrial, data', 'Yes (with covers)'],
                                        ['Busway (Feeder, Plug-in)', 'Cu/Al bus in enclosure', '12-2600', 'High current distribution', 'Yes (rated)'],
                                        ['Surface Raceway (Wiremold)', 'Steel, Al, PVC', '12-2000', 'Retrofit, surface mount', 'No']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Raceway Fill', definition: 'Maximum number/size of conductors permitted in a raceway per CEC Tables 6-9. Based on 40% fill for >2 conductors, 31% for 2, 53% for 1. Includes equipment grounding conductors.' },
                                { type: 'callout', style: 'exam-tip', text: 'Memorize fill percentages: 1 conductor = 53%, 2 conductors = 31%, 3+ conductors = 40%. Equipment grounding conductor COUNTS in fill. Nipple ≤ 600 mm (24") = 60% fill. Use Tables 6-9 (conduit/tubing) and 12-2200 (cable tray).' }
                            ]
                        },
                        {
                            id: 'ch11-s2',
                            title: 'Bending, Installation & Supports',
                            content: [
                                { type: 'text', text: 'Proper bending technique prevents conductor damage and maintains raceway integrity. CEC Rules 12-900 to 12-1100 govern bends, supports, and protection.' },
                                {
                                    type: 'table', headers: ['Raceway', 'Min Bend Radius (Internal)', 'Max Bends Between Pull Points', 'Support Spacing'], rows: [
                                        ['RMC/IMC (1/2–2")', '6× trade diameter', '4 (360° total)', '3 m (10 ft)'],
                                        ['EMT (1/2–2")', '6× trade diameter', '4 (360° total)', '3 m (10 ft)'],
                                        ['FMC/LFMC (3/8–1¼")', 'Per Table 12-1300', 'No limit (flexible)', '1.5 m (5 ft)'],
                                        ['PVC (1/2–2")', 'Per Table 12-1400', '4 (360° total)', '1 m (3 ft) ≤ 1", 1.5 m > 1"'],
                                        ['Cable Tray', 'Per manufacturer', 'N/A', '1.5–3 m per span rating']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'Bending tools: hickey (RMC/IMC), hand bender (EMT, PVC), hydraulic (2"+), PVC heater for large bends',
                                        'EMT: use EMT bender only — hickey kinks thin wall. Deduct for take-up (e.g., ½" EMT = 5" take-up for 90°)',
                                        'PVC: heat uniformly, use bending form, cool before removing. Schedule 80 for exposed/damage risk.',
                                        'Supports within 900 mm (3 ft) of boxes, cabinets, terminations. Expansion fittings for PVC > 6 m straight run (CEC 12-1410).',
                                        'Cable tray: supports per NEMA VE-1 span class. Bonding: tray = equipment grounding conductor if listed (Rule 10-618).'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'PVC expansion: coefficient = 3.6×10⁻⁵ /°C. 30 m run, 30°C ΔT = 32 mm expansion. Expansion fitting required every 6–12 m. Install at ¼ extended position at midpoint temperature.' }
                            ]
                        },
                        {
                            id: 'ch11-s3',
                            title: 'Hazardous Location Raceways & Sealing',
                            content: [
                                { type: 'text', text: 'Class I, II, III hazardous locations (CEC Section 18) require specific raceway types and sealing to prevent flame/explosion propagation.' },
                                {
                                    type: 'table', headers: ['Class/Division', 'Permitted Raceways', 'Sealing Requirements'], rows: [
                                        ['Class I Div 1', 'RMC, IMC, PVC (buried)', 'Seal at boundary, each enclosure entry (Rule 18-152)'],
                                        ['Class I Div 2', 'RMC, IMC, EMT, PVC, LFMC', 'Seal at boundary only (Rule 18-252)'],
                                        ['Class II Div 1', 'RMC, IMC, PVC (buried)', 'Seal at boundary, dust-tight'],
                                        ['Class II Div 2', 'RMC, IMC, EMT, PVC', 'Dust-tight, no seal required'],
                                        ['Class III', 'RMC, IMC, EMT, PVC', 'Dust-tight']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Explosion-Proof Seal (EYS/EYD)', definition: 'Fitting that prevents passage of flames/gases through conduit. EYS = vertical, EYD = horizontal. Fill with approved sealing compound (Chico A, X). Damming fiber prevents compound run.' },
                                {
                                    type: 'list', items: [
                                        'Seal within 450 mm (18") of explosion-proof enclosure (Class I Div 1)',
                                        'Seal at boundary between hazardous and non-hazardous',
                                        'Conductor fill in sealing fitting: 25% max (Rule 18-152)',
                                        'Sealing compound: 24 hr cure, no voids, damming fiber to hold',
                                        'Thread engagement: 5 full threads minimum for explosion-proof'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Class I Div 1: seal at EACH enclosure entry + boundary. Class I Div 2: seal at BOUNDARY only. 25% conductor fill in seals. Compound volume per fitting marking. Exam tests: where seals required, fill %, compound type, thread engagement.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 12 — CABLES
                {
                    id: 'ch-12',
                    number: 12,
                    title: 'Cables — Types, Installation & Ampacity',
                    subtitle: 'Task C-17: Installs/Maintains Cables',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch12-s1',
                            title: 'Cable Types & Construction',
                            content: [
                                { type: 'text', text: 'Industrial electricians work with dozens of cable types. Selection based on voltage, environment, ampacity, mechanical protection, and CEC Rules 12-500 to 12-2200.' },
                                {
                                    type: 'table', headers: ['Cable Type', 'Designation', 'Construction', 'Voltage', 'Typical Use', 'CEC Rule'], rows: [
                                        ['Teck 90', 'Teck', 'Cu cond, XLPE, Al/PVC armor, PVC jacket', '1 kV', 'Industrial, tray, direct burial', '12-1600'],
                                        ['ACWU90', 'Armored', 'Cu cond, XLPE, Al armor, PVC jacket', '1 kV', 'Wet, direct burial, hazardous', '12-1600'],
                                        ['AC90 / BX', 'Armored', 'Cu cond, XLPE, Steel armor', '300/600 V', 'Commercial, dry, concealed', '12-600'],
                                        ['NMWU / NMD90', 'Nonmetallic', 'Cu cond, PVC/Nylon, PVC jacket', '300 V', 'Residential, dry/damp', '12-500'],
                                        ['RW90 / RWU90', 'Single conductor', 'Cu/Al, XLPE, no jacket', '1 kV', 'In raceway, wet/dry', '12-800'],
                                        ['T90 / TW75', 'Single conductor', 'Cu, PVC/Nylon', '600 V', 'In raceway, dry/wet', '12-800'],
                                        ['HV Cable (Teck HV)', 'Shielded', 'Cu, XLPE, Cu tape shield, PVC jacket', '5–35 kV', 'MV distribution, tray, burial', '12-1600'],
                                        ['Concentric Neutral', 'CN', 'Cu, XLPE, concentric Cu neutrals', '5–35 kV', 'Direct burial, duct', '12-1600'],
                                        ['Mineral Insulated (MI)', 'MI', 'Cu cond, MgO insulation, Cu sheath', '300/600 V', 'Fire-rated, hazardous, high temp', '12-2000'],
                                        ['Fire Alarm (FAS)', 'FAS', 'Cu, PVC, shielded, red jacket', '300 V', 'Fire alarm circuits', '32-100'],
                                        ['Data/Comm (Cat 6, 6A, Fiber)', 'UTP/ScTP/Fiber', 'Twisted pair or optical fiber', 'LV', 'Network, communication', '60, 16']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Teck Cable', definition: 'Canadian standard (CSA C22.2 No. 131) — XLPE insulation, aluminum or steel interlocked armor, PVC jacket. Rated 90°C dry/wet, 1000 V. Suitable for cable tray, direct burial, hazardous locations (Class I Div 2).' },
                                { type: 'callout', style: 'exam-tip', text: 'Teck 90 = go-to for industrial. Know: armor = equipment grounding conductor (if listed), sunlight resistant, direct burial rated, -40°C cold bend. Minimum bend radius = 7× cable diameter (12× for HV).' }
                            ]
                        },
                        {
                            id: 'ch12-s2',
                            title: 'Cable Installation — Tray, Direct Burial, Support',
                            content: [
                                { type: 'text', text: 'Cable installation methods determine ampacity, mechanical protection, and maintenance access. CEC Rules 12-2200 (tray), 12-1600 (Teck), 12-012 (burial) apply.' },
                                {
                                    type: 'table', headers: ['Method', 'Requirements', 'Ampacity Basis', 'Protection'], rows: [
                                        ['Cable Tray (Ladder)', 'Cables tied, fill ≤ 50% area', 'CEC Table 4 (tray), IEEE 835', 'Tray cover if mechanical damage risk'],
                                        ['Cable Tray (Ventilated)', 'Cables tied, fill ≤ 50%', 'Table 4 (tray)', 'Cover recommended'],
                                        ['Cable Tray (Solid Bottom)', 'Cables tied, fill ≤ 50%', 'Table 4 (tray) × 0.9', 'Cover required'],
                                        ['Direct Burial', 'Depth 600 mm (450 mm rock), sand bed, warning tape', 'Table 4 (underground)', 'Mechanical protection (conduit) at transitions'],
                                        ['Conduit in Trench', 'PVC/RMC, spacers, pull boxes ≤ 30 m', 'Table 2/3 (conduit)', 'Conduit = protection'],
                                        ['Surface/Wall', 'Straps/clamps per Table 12-1600', 'Table 2/3 (free air)', 'Mechanical protection if < 2.1 m']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'Cable tray fill: total cross-section of cables ≤ 50% of tray fill area (Rule 12-2200)',
                                        'Cable ties: UV-resistant nylon (outdoor), stainless steel (hazardous/high temp), no sharp edges',
                                        'Separation: power vs control/comm ≥ 300 mm in tray, or barrier. CEC Table 19 separation.',
                                        'Direct burial depth: 600 mm normal, 450 mm rock, 1000 mm vehicular (Rule 12-012)',
                                        'Warning tape: 150–300 mm above cable, "DANGER ELECTRIC"',
                                        'Teck cable: strap within 300 mm of boxes, then 1.5 m max (Rule 12-1600)',
                                        'HV cable: pulling tension max = 3× cond area (mm²) × 7 MPa (Cu) or 4 MPa (Al). Sidewall pressure ≤ 500 kg/m radius.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Cable pulling: use pulling eye on conductor (not armor/jacket). Lubricant compatible with jacket (polywater). Monitor tension. Sidewall pressure = tension / bend radius. Exceeding = jacket damage, shield damage (HV).' }
                            ]
                        },
                        {
                            id: 'ch12-s3',
                            title: 'Cable Terminations, Splices & Testing',
                            content: [
                                { type: 'text', text: 'Proper termination and splicing ensure reliability. Industrial cables use compression lugs, mechanical connectors, or manufactured splice kits. HV requires stress control.' },
                                {
                                    type: 'table', headers: ['Connection Type', 'Application', 'Tool/Method', 'Inspection'], rows: [
                                        ['Compression Lug', 'Cu/Al conductor → bus/breaker', 'Hydraulic crimper, correct die', 'Die mark, conductor visible, no cracks'],
                                        ['Mechanical Lug', 'Cu/Al conductor → bus/breaker', 'Torque wrench, manufacturer spec', 'Torque mark, conductor fully inserted'],
                                        ['Split Bolt', 'Cu-to-Cu tap/splice', 'Wrench, torque', 'Tape + mastic seal'],
                                        ['Insulated Piercing Connector', 'Service tap, street light', 'Hand tighten', 'Visual, pull test'],
                                        ['Teck Connector (Gland)', 'Teck cable → box/enclosure', 'Wrench, torque armor', 'Armor engaged, seal tight, bond wire'],
                                        ['HV Termination (Cold Shrink)', '5–35 kV cable → equipment', 'Cold shrink, no torch', 'Stress cone position, creepage'],
                                        ['HV Splice (Cold Shrink)', 'Cable-to-cable 5–35 kV', 'Cold shrink kit', 'Continuity, VLF hi-pot'],
                                        ['MI Cable Termination', 'MI cable → box', 'Sealing pot, ceramic seals', 'Megger > 1000 MΩ']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Stress Control (HV)', definition: 'Geometric or capacitive grading to redistribute electric field at cable termination/splice. Prevents insulation breakdown at shield cut-back. Cold shrink = pre-expanded silicone/EPDM on spiral core.' },
                                {
                                    type: 'list', items: [
                                        'Aluminum conductors: antioxidant paste, wire brush before termination, Al/Cu rated lugs',
                                        'Torque values: follow manufacturer — NOT generic tables. Re-torque after 24 hr thermal cycle.',
                                        'HV testing: VLF (0.1 Hz) hi-pot per IEEE 400.2 — 3× phase-to-ground for 15–60 min. NO DC hi-pot on XLPE/EPR.',
                                        'Shield grounding: single-point (prevents circulating currents) or cross-bonded (long runs).'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Termination exam: torque values (manufacturer-specific), Al conductor prep (brush + antioxidant), HV stress control, shield grounding methods, VLF vs DC hi-pot (DC damages XLPE), Teck gland armor engagement.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 13 — CONDUCTORS
                {
                    id: 'ch-13',
                    number: 13,
                    title: 'Conductors — Selection, Ampacity, Voltage Drop & Derating',
                    subtitle: 'Task C-18: Installs/Maintains Conductors',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch13-s1',
                            title: 'Conductor Materials, Insulation & Ampacity Tables',
                            content: [
                                { type: 'text', text: 'Conductor selection is the foundation of electrical design. Material (Cu/Al), insulation temperature rating, and installation method determine ampacity per CEC Section 4.' },
                                {
                                    type: 'table', headers: ['Insulation', 'Temp Rating', 'Dry/Wet', 'Common Types', 'CEC Table'], rows: [
                                        ['PVC (T90, TW75)', '90°C / 75°C', 'Dry / Wet', 'T90, TW75, NMWU', 'Table 2, 4'],
                                        ['Nylon (T90 Nylon)', '90°C', 'Dry', 'T90 Nylon, THHN/THWN', 'Table 2'],
                                        ['XLPE (RW90, RWU90)', '90°C', 'Wet/Dry', 'RW90, RWU90, Teck', 'Table 2, 4'],
                                        ['EPR', '90°C', 'Wet/Dry', 'MV cable', 'Table 4'],
                                        ['Silicone', '150–200°C', 'Dry', 'High-temp leads', 'Mfr spec'],
                                        ['PTFE (Teflon)', '200–250°C', 'Dry', 'Extreme heat', 'Mfr spec'],
                                        ['Mineral (MI)', '250°C+', 'Dry/Wet', 'Fire-rated', 'Table 4']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Ampacity', definition: 'Maximum current a conductor can carry continuously without exceeding its temperature rating. Based on 30°C ambient, Table 2 (raceway) or Table 4 (cable/tray/burial).' },
                                { type: 'callout', style: 'exam-tip', text: 'CEC ampacity tables: Table 2 = conductors in raceway/cable (30°C ambient). Table 4 = single conductors in free air, cable in tray, direct burial. Table 5 = correction factors. Table 5A = temp correction. Table 5B = altitude. Table 5C = VFDs.' }
                            ]
                        },
                        {
                            id: 'ch13-s2',
                            title: 'Derating Factors — Temperature, Fill, Harmonic',
                            content: [
                                { type: 'text', text: 'Ampacity must be derated for conditions other than 30°C ambient and ≤3 current-carrying conductors. Multiple deratings multiply.' },
                                {
                                    type: 'table', headers: ['Condition', 'CEC Rule', 'Correction Factor', 'Example'], rows: [
                                        ['Ambient >30°C', 'Rule 4-004, Table 5A', 'Table 5A factor', '40°C, 90°C cond = 0.91'],
                                        ['Ambient <30°C', 'Rule 4-004, Table 5A', 'Table 5A factor', '20°C, 90°C cond = 1.08'],
                                        ['>3 CCC in raceway', 'Rule 4-004, Table 5C', 'Table 5C factor', '6 CCC = 0.80, 9 CCC = 0.70'],
                                        ['Rooftop conduit', 'Rule 4-004(10)', 'Add 15–25°C to ambient', '30°C ambient → 55°C design'],
                                        ['VFD output conductors', 'Rule 4-004(22)', 'Table 5C (harmonic)', 'Typically 0.85–0.90 factor'],
                                        ['Cable tray fill >30%', 'Rule 12-2200', 'IEEE 835 / Table 4', 'Derate per tray loading'],
                                        ['Altitude >2000 m', 'Rule 4-004, Table 5B', 'Table 5B factor', '3000 m = 0.96']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'CCC = Current-Carrying Conductors. Neutral counts if non-linear loads (Rule 4-004(1)(b)). Ground does NOT count.',
                                        'Derating sequence: 1) Base ampacity (Table 2/4), 2) Temp correction (Table 5A), 3) Fill correction (Table 5C), 4) Other (rooftop, harmonic, altitude). Result = design ampacity.',
                                        'Conductor size selected: ampacity ≥ load AFTER derating. Then verify voltage drop, short-circuit withstand, OCPD coordination.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Exam classic: "What size RW90 Cu for 100 A load, 6 conductors in EMT, 40°C ambient?" Step 1: Table 2, 90°C col = #3 AWG (115 A). Step 2: Temp 40°C = 0.91 → 104.6 A. Step 3: 6 CCC = 0.80 → 83.7 A. FAIL. Next size #2 AWG (130 A × 0.91 × 0.80 = 94.6 A). FAIL. #1 AWG (145 A × 0.91 × 0.80 = 105.5 A). PASS.' }
                            ]
                        },
                        {
                            id: 'ch13-s3',
                            title: 'Voltage Drop Calculations',
                            content: [
                                { type: 'text', text: 'CEC Rule 8-102 recommends ≤3% voltage drop on feeders, ≤3% on branch circuits (5% total). Industrial motor starting requires tighter limits (≤15% during start).' },
                                { type: 'keyTerm', term: 'Voltage Drop (VD)', definition: 'VD = (2 × L × I × R) / 1000 for single-phase. VD = (1.732 × L × I × R) / 1000 for three-phase. L = length (m), I = current (A), R = resistance (Ω/km) from Table 9.' },
                                {
                                    type: 'table', headers: ['Method', 'Formula', 'When to Use'], rows: [
                                        ['Exact (Table 9)', 'VD = 2×L×I×R/1000 (1Ø) or 1.732×L×I×R/1000 (3Ø)', 'Design, exam calculations'],
                                        ['Approximate (mV/A/m)', 'VD = mV/A/m × L × I / 1000', 'Quick check, manufacturer data'],
                                        ['Per-unit / %', '%VD = (VD / V_nom) × 100', 'System studies, motor starting']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'Table 9: DC resistance at 75°C. For 90°C conductors at full load, use 90°C resistance (×1.07).',
                                        'Motor starting: VD during start = (LRA × R) + (LRA × X) — use impedance, not resistance.',
                                        'Transformer secondary: include transformer impedance (Z%) in VD calc for short runs.',
                                        'Solutions for excessive VD: larger conductor, higher voltage, parallel conductors, reduce load, boost transformer tap.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'VD exam: know both formulas (1÷ and 3÷). Table 9 resistance values. 3% feeder, 3% branch, 5% total. Motor start ≤15% (or per NEMA MG-1). Parallel conductors: VD same as single, but ampacity adds (derate for >3 CCC).' }
                            ]
                        },
                        {
                            id: 'ch13-s4',
                            title: 'Aluminum Conductors & Parallel Conductors',
                            content: [
                                { type: 'text', text: 'Aluminum is common for feeders >100 A due to cost/weight. Requires specific termination techniques. Parallel conductors used for high ampacity feeders.' },
                                {
                                    type: 'table', headers: ['Aspect', 'Copper', 'Aluminum'], rows: [
                                        ['Conductivity', '100% IACS', '61% IACS'],
                                        ['Size for same ampacity', 'Baseline', '~2 AWG larger'],
                                        ['Weight', 'Baseline', '~50% of Cu'],
                                        ['Cost', 'Baseline', '~30–50% of Cu'],
                                        ['Thermal expansion', '17×10⁻⁶/°C', '23×10⁻⁶/°C'],
                                        ['Oxidation', 'Minimal', 'Forms instantly — must brush + antioxidant'],
                                        ['Termination', 'Standard lugs', 'Al/Cu rated lugs, torque critical'],
                                        ['Creep (cold flow)', 'Low', 'High — re-torque required']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Parallel Conductors', definition: 'Multiple conductors per phase/neutral to achieve high ampacity. CEC Rule 4-006: each conductor ≥ 1/0 AWG, same length, material, insulation, cross-section, termination. Derate per Table 5C for total CCC.' },
                                {
                                    type: 'list', items: [
                                        'Al conductor prep: wire brush → antioxidant paste (Penetrox, Noalox) → immediate termination',
                                        'Al/Cu lugs: tin-plated Al body, Cu barrel — never put Cu lug on Al conductor',
                                        'Parallel: max 3 conductors/phase typically. Same conduit = derate. Separate conduits = no fill derate.',
                                        'Current sharing: impedance matching critical. Length within 1%, same conduit routing.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Aluminum terminations: re-torque after 24–48 hours under load (thermal cycle). Annual IR scan + re-torque for critical feeders. Never use push-in/backstab connectors on Al.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 14 — BOXES, ENCLOSURES & WIRING DEVICES
                {
                    id: 'ch-14',
                    number: 14,
                    title: 'Boxes, Enclosures & Wiring Devices',
                    subtitle: 'Task C-19: Boxes/Enclosures; Task C-20: Wiring Devices',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch14-s1',
                            title: 'Box Types, Fill & Installation',
                            content: [
                                { type: 'text', text: 'Boxes provide access, splicing, and device mounting. CEC Rules 12-500 to 12-2200, 12-3000 govern selection, fill, and mounting. Industrial boxes: FS/FD (cast), pull boxes, junction boxes, hazardous location.' },
                                {
                                    type: 'table', headers: ['Box Type', 'Material', 'Application', 'CEC Rule'], rows: [
                                        ['FS/FD (Device)', 'Cast Al/Fe, malleable', 'Surface mount, wet, hazardous', '12-3000'],
                                        ['Pull Box', 'Sheet steel, Al, FRP', 'Straight/pull/splice, large conductors', '12-3000'],
                                        ['Junction Box', 'Steel, Al, PVC, FRP', 'Splices, taps, concealed', '12-3000'],
                                        ['Handy Box', 'Stamped steel', 'Dry, commercial, surface', '12-3000'],
                                        ['Explosion-Proof (Ex d)', 'Cast Al/Fe, certified', 'Class I Div 1/2', '18-152, 18-252'],
                                        ['Increased Safety (Ex e)', 'Cast/FRP, certified', 'Class I Zone 1', '18-100'],
                                        ['Floor Box', 'Cast, adjustable', 'Floor-mounted receptacles', '12-3000'],
                                        ['Panelboard Enclosure', 'Steel, NEMA rated', 'Breaker panel, MCC bucket', '26-400']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Box Fill Calculation', definition: 'CEC Rule 12-3034: count conductors (each = 1), grounding conductors (all = 1), clamps (1), device yoke (2), fixture stud (1). Multiply total by volume factor (Table 23) per conductor size.' },
                                {
                                    type: 'table', headers: ['Conductor Size', 'Volume Factor (cm³)', 'Volume Factor (in³)'], rows: [
                                        ['14 AWG', '24.6', '1.50'],
                                        ['12 AWG', '29.5', '1.80'],
                                        ['10 AWG', '41.0', '2.50'],
                                        ['8 AWG', '49.2', '3.00'],
                                        ['6 AWG', '81.9', '5.00']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'Box volume: marked on box or calculated (L×W×D). Extensions/rings add volume.',
                                        'Pull box sizing: straight pull = 8× largest raceway. Angle/U-pull = 6× largest + sum others (Rule 12-3036).',
                                        'Hazardous location boxes: threaded entries (5 threads), explosion-proof or increased safety certified, seal within 450 mm.',
                                        'Box supports: independent of conduit (Rule 12-3004). Max 1.5 m from box for FMC/LFMC.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Box fill exam: count EVERYTHING. Grounds = 1 total. Device (receptacle/switch) = 2. Clamp = 1. Pigtails < 150 mm free = NOT counted. Table 23 volume factors. Pull box: 8× straight, 6× + sum angle/U.' }
                            ]
                        },
                        {
                            id: 'ch14-s2',
                            title: 'Enclosure Ratings — NEMA / IP / CSA',
                            content: [
                                { type: 'text', text: 'Enclosure ratings define protection against solids, liquids, and corrosion. Industrial specs require correct rating for environment. NEMA 250, IEC 60529 (IP), CSA C22.2 No. 94.' },
                                {
                                    type: 'table', headers: ['NEMA Type', 'IP Equivalent', 'Protection', 'Typical Industrial Use'], rows: [
                                        ['Type 1', 'IP20', 'Indoor, dust (falling)', 'Electrical rooms, panelboards'],
                                        ['Type 3R', 'IP24', 'Outdoor, rain, sleet', 'Service entrance, transformers'],
                                        ['Type 4', 'IP66', 'Indoor/outdoor, hose-directed water', 'Washdown, food processing'],
                                        ['Type 4X', 'IP66', 'Type 4 + corrosion resistance', 'Chemical, marine, wastewater'],
                                        ['Type 12', 'IP54', 'Indoor, dust, dripping, light splatter', 'Factory floor, MCCs'],
                                        ['Type 13', 'IP54', 'Type 12 + oil/coolant', 'Machine tools, machining centers'],
                                        ['Type 7/9', '—', 'Explosion-proof (Class I/II Div 1)', 'Hazardous locations']
                                    ]
                                },
                                { type: 'keyTerm', term: 'IP Code (Ingress Protection)', definition: 'IP XX: 1st digit = solids (0–6), 2nd digit = liquids (0–9). IP66 = dust-tight + powerful water jets. IP67 = dust-tight + immersion 1 m. IP69K = high-pressure steam cleaning.' },
                                { type: 'callout', style: 'exam-tip', text: 'NEMA vs IP: NEMA includes corrosion, construction, gasket aging tests. IP is ONLY ingress. Type 4X ≠ IP66 (4X adds corrosion). Type 12 = IP54 but NEMA 12 includes oil exclusion test. Exam: match environment to rating.' }
                            ]
                        },
                        {
                            id: 'ch14-s3',
                            title: 'Wiring Devices — Receptacles, Switches, Connectors',
                            content: [
                                { type: 'text', text: 'Industrial wiring devices are heavy-duty, often corrosion-resistant, and rated for specific environments. CEC Rules 26-700 to 26-724, CSA C22.2 No. 42, No. 55.' },
                                {
                                    type: 'table', headers: ['Device', 'Rating/Type', 'Application', 'Key Features'], rows: [
                                        ['Receptacle (5-15R)', '15 A, 125 V, straight blade', 'General purpose', 'GFCI (5-15R-GFI) per 26-704'],
                                        ['Receptacle (5-20R)', '20 A, 125 V, T-slot', 'General purpose 20 A', 'GFCI required wet/rooftop'],
                                        ['Receptacle (6-20R)', '20 A, 250 V, tandem', 'Single-phase loads', 'Welder, HVAC'],
                                        ['Receptacle (L5-30R)', '30 A, 125 V, locking', 'Generators, temp power', 'Locking, weatherproof'],
                                        ['Receptacle (L6-30R)', '30 A, 250 V, locking', 'Equipment, welders', 'Locking'],
                                        ['Pin & Sleeve (IEC 60309)', '16–125 A, 125–600 V', 'Industrial, marine, temp', 'Watertight (IP67), keyed by voltage'],
                                        ['Motor Plug/Receptacle', '30–400 A, 600 V', 'Motor disconnect', 'Horsepower rated, interlock'],
                                        ['Switch (AC Snap)', '15–30 A, 120–277 V', 'Lighting, motor', 'HP rated for motor loads'],
                                        ['Disconnect Switch', '30–1200 A, 600 V', 'Motor, equipment', 'Visible blades, lockable, HP rated']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Horsepower-Rated Switch', definition: 'Switch rated for motor starting current (6–8× FLA). Marked with max HP at voltage (e.g., "10 HP 240 V 3Ø"). Required for motor disconnect per CEC 28-602.' },
                                {
                                    type: 'list', items: [
                                        'GFCI: Class A (5 mA) for personnel. Required: rooftop, outdoors, wet, ≤2.5 m sinks, construction (Rule 26-704).',
                                        'AFCI: Not typically industrial (panelboard breakers). Required in dwelling units.',
                                        'Weatherproof covers: "while-in-use" (bubble) for outdoor receptacles (Rule 26-706).',
                                        'Pin & sleeve: voltage keying (clock position) prevents mismatch. Ground pin = key.',
                                        'Receptacle orientation: ground UP (prevents falling objects bridging hot-neutral).'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // CHAPTER 15 — LIGHTING SYSTEMS
                {
                    id: 'ch-15',
                    number: 15,
                    title: 'Lighting Systems — Installation, Controls & Emergency',
                    subtitle: 'Task C-21: Installs/Maintains Lighting Systems',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch15-s1',
                            title: 'Lighting Technologies & Luminaire Types',
                            content: [
                                { type: 'text', text: 'Industrial lighting has shifted to LED. Understanding legacy technologies (HID, fluorescent) is needed for retrofit and maintenance. Luminaire selection per IESNA, CEC Section 30, 46.' },
                                {
                                    type: 'table', headers: ['Technology', 'Efficacy (lm/W)', 'CRI', 'Life (hrs)', 'Start/Restrike', 'Industrial Use'], rows: [
                                        ['LED', '100–200+', '70–95', '50,000–100,000', 'Instant / Instant', 'All new, retrofit, hazardous'],
                                        ['HID: Metal Halide', '75–115', '65–90', '10,000–20,000', '2–5 min / 10–20 min', 'High bay (legacy), sports'],
                                        ['HID: High Pressure Sodium', '80–140', '20–25', '24,000+', '3–4 min / 1 min', 'Outdoor, roadway (legacy)'],
                                        ['Fluorescent T8/T5', '80–100', '80–90', '20,000–36,000', 'Instant (electronic)', 'Low bay, office (legacy)'],
                                        ['Induction', '70–80', '80', '100,000', 'Instant', 'Hard-to-reach, hazardous'],
                                        ['Incandescent/Halogen', '10–25', '100', '1,000–4,000', 'Instant', 'Specialty, emergency only']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Luminaire (Fixture)', definition: 'Complete lighting unit: lamp/LED module, driver/ballast, optics (reflector/lens), housing, wiring. Rated for environment (NEMA/IP), voltage, mounting.' },
                                { type: 'callout', style: 'exam-tip', text: 'LED driver types: constant current (most LED modules) vs constant voltage (LED strips). Dimming: 0–10 V (analog), DALI (digital), DMX (theatrical), Phase-cut (legacy). Industrial = 0–10 V or DALI.' }
                            ]
                        },
                        {
                            id: 'ch15-s2',
                            title: 'Lighting Controls & Energy Management',
                            content: [
                                { type: 'text', text: 'Lighting controls reduce energy and meet codes (NEC 2020/CEC, ASHRAE 90.1, NECB). Strategies: occupancy, daylight harvesting, scheduling, task tuning, demand response.' },
                                {
                                    type: 'table', headers: ['Control Strategy', 'Technology', 'Savings', 'Application'], rows: [
                                        ['Occupancy/Vacancy', 'PIR, ultrasonic, dual-tech', '20–50%', 'Warehouse aisles, restrooms, offices'],
                                        ['Daylight Harvesting', 'Photosensor (open/closed loop)', '15–40%', 'Perimeter zones, skylights, clerestory'],
                                        ['Time Scheduling', 'BAS, lighting controller', '10–20%', 'Exterior, parking, common areas'],
                                        ['Task Tuning / High-End Trim', 'Programmable driver', '10–30%', 'Over-lit spaces, new construction'],
                                        ['Demand Response', 'OpenADR, utility signal', 'Variable', 'Peak shaving, grid services'],
                                        ['Networked Lighting Controls (NLC)', 'Wireless (Bluetooth, Zigbee, LoRa)', '30–60%+', 'Whole building, data analytics']
                                    ]
                                },
                                { type: 'keyTerm', term: 'DALI (Digital Addressable Lighting Interface)', definition: 'IEC 62386 — 2-wire digital protocol, 64 addresses per bus, bidirectional, individual fixture control, feedback (status, energy). DALI-2 adds multi-master, color control (DT8).' },
                                {
                                    type: 'list', items: [
                                        '0–10 V dimming: sink current (driver sources 10 V, control pulls down). 10 V = 100%, 0 V = min/off. Polarity sensitive.',
                                        'Emergency lighting: unit equipment (self-contained) or central inverter. CEC Rule 46-300: 30 min minimum, monthly test, annual 30-min discharge test.',
                                        'Exit signs: LED, AC/DC, self-diagnostic. Green "Running Man" (ISO 7010) or red "EXIT" per local code.',
                                        'Hazardous location lighting: Ex d (flameproof), Ex e (increased safety), Ex n (non-sparking), LED preferred.'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'ch15-s3',
                            title: 'Lighting Calculations & Layout',
                            content: [
                                { type: 'text', text: 'Lighting design uses lumen method (average illuminance) or point-by-point calculation. Key metrics: foot-candles (fc) or lux, uniformity ratio, glare (UGR), power density (W/ft²).' },
                                { type: 'keyTerm', term: 'Lumen Method Formula', definition: 'N = (E × A) / (Φ × CU × LLF) where N = number of luminaires, E = target illuminance (lux), A = area (m²), Φ = lumens per luminaire, CU = coefficient of utilization, LLF = light loss factor.' },
                                {
                                    type: 'table', headers: ['Space Type', 'Target Illuminance (lux/fc)', 'Uniformity (max/min)', 'Typical Power Density (W/m²)'], rows: [
                                        ['Warehouse (active)', '200–300 / 20–30', '3:1', '5–8'],
                                        ['Warehouse (storage)', '100–150 / 10–15', '4:1', '4–6'],
                                        ['Manufacturing (fine)', '500–750 / 50–75', '3:1', '10–15'],
                                        ['Manufacturing (coarse)', '300–500 / 30–50', '4:1', '8–12'],
                                        ['Assembly/Inspection', '750–1500 / 75–150', '3:1', '15–25'],
                                        ['Outdoor (parking)', '10–20 / 1–2', '4:1', '1–3'],
                                        ['Exterior (security)', '5–10 / 0.5–1', '6:1', '0.5–2']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'CU: from manufacturer tables based on room cavity ratio (RCR), surface reflectances (ceiling 70–80%, walls 30–50%, floor 20–30%).',
                                        'LLF = LLD × LDD × RSD × ... Typical 0.65–0.80 for LED (LLD=0.95, LDD=0.90, RSD=0.95).',
                                        'Mounting height: high bay ≥ 6 m (20 ft), low bay 4–6 m. Optics: narrow (aisle), medium (general), wide (open).',
                                        'Glare: UGR < 19 (office), < 22 (industrial), < 25 (rough). Shielding, optics, mounting height reduce glare.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Lighting exam: lumen method formula, CU/LLF factors, mounting height vs optic, hazardous location types (Ex d, Ex e), emergency lighting test requirements (monthly/annual), LED driver types (0-10V, DALI), control strategies.' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'part-4',
            number: 4,
            title: 'Installs/Maintains Rotating & Other Fixed Equipment & Control Systems (MWA D)',
            description: 'Covers AC/DC motors, generators, motor starters, VFDs, soft starters, motor protection, and fixed equipment (heating, welding, transformers). This MWA represents 21 questions (21% of the total exam).',
            weight: '21 questions (21% of Total Exam)',

            chapters: [
                // CHAPTER 16 — AC MOTORS
                {
                    id: 'ch-16',
                    number: 16,
                    title: 'AC Motors — Induction, Synchronous & Specialty',
                    subtitle: 'Task D-22: Installs/Maintains Rotating Equipment — AC Motors',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch16-s1',
                            title: 'Three-Phase Induction Motor Fundamentals',
                            content: [
                                { type: 'text', text: 'The squirrel-cage induction motor is the workhorse of industry. Understanding construction, nameplate data, starting characteristics, and failure modes is essential for installation, maintenance, and troubleshooting.' },
                                {
                                    type: 'table', headers: ['Parameter', 'Symbol', 'Typical Range', 'Significance'], rows: [
                                        ['Rated Voltage', 'V', '208, 240, 480, 600 V', 'Match supply; dual-voltage common'],
                                        ['Rated Current', 'FLA', 'Per HP/frame', 'Conductor/OCPD sizing'],
                                        ['Full-Load Speed', 'RPM', '3600, 1800, 1200, 900', 'Poles: 2, 4, 6, 8 @ 60 Hz'],
                                        ['Full-Load Torque', 'FLT', 'lb-ft or N·m', 'Load matching'],
                                        ['Locked-Rotor Current', 'LRA', '6–8× FLA', 'Starter/OCPD/VD sizing'],
                                        ['Locked-Rotor Torque', 'LRT', '150–250% FLT', 'Starting capability'],
                                        ['Breakdown Torque', 'BDT', '200–300% FLT', 'Overload capacity'],
                                        ['Efficiency', 'η', '85–96% (NEMA Premium)', 'Operating cost'],
                                        ['Power Factor', 'PF', '0.75–0.90 lagging', 'System loading, correction'],
                                        ['Service Factor', 'SF', '1.0, 1.15', 'Permissible overload (continuous)'],
                                        ['Insulation Class', '—', 'B, F, H', 'Max temp rise: 80, 105, 125°C'],
                                        ['Temperature Rise', '—', 'Per class @ 40°C amb', 'Thermal margin'],
                                        ['Design Letter', '—', 'A, B, C, D', 'Speed-torque curve shape'],
                                        ['Enclosure', '—', 'ODP, TEFC, TENV, WP', 'Environment protection'],
                                        ['Frame Size', '—', 'NEMA 48–680, IEC 63–450', 'Physical dimensions, mounting']
                                    ]
                                },
                                { type: 'keyTerm', term: 'NEMA Design Letters', definition: 'Design B = normal torque, normal current, low slip (general purpose). Design C = high starting torque, low current (compressors, conveyors). Design D = very high starting torque, high slip (punch presses, hoists). Design A = high breakdown torque (special).' },
                                { type: 'callout', style: 'exam-tip', text: 'Memorize: Sync speed = 120×f/P. Slip = (Ns - Nr)/Ns × 100%. Typical slip 1–5%. LRA = 6–8× FLA (Design B). Code letter (KVA/HP) on nameplate for LRA calculation: LRA = (Code letter kVA × 1000) / (√3 × V).' }
                            ]
                        },
                        {
                            id: 'ch16-s2',
                            title: 'Motor Installation, Alignment & Startup',
                            content: [
                                { type: 'text', text: 'Proper installation determines motor life. Key steps: foundation, alignment, electrical connections, rotation check, baseline readings.' },
                                {
                                    type: 'list', items: [
                                        'Foundation: level, grouted, anchor bolts (epoxy or mechanical), vibration isolation if required',
                                        'Alignment: coupling alignment critical — laser, dial indicator, or reverse dial. Angular ≤ 0.05 mm/mm, offset ≤ 0.05 mm (typical). Thermal growth compensation.',
                                        'Shaft runout: ≤ 0.025 mm (0.001") TIR',
                                        'Electrical: megger phase-to-ground (≥ 100 MΩ), phase-to-phase balance, surge comparison if critical',
                                        'Connections: torque per manufacturer, compression lugs, stress relief, phase rotation check (A-B-C)',
                                        'Rotation check: bump start — verify before coupling. Phase sequence meter or rotation tester.',
                                        'Baseline: vibration (velocity mm/s, displacement µm, acceleration g), current (all 3 phases), voltage, insulation resistance, bearing temps'
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Alignment Method', 'Accuracy', 'Time', 'Skill Level'], rows: [
                                        ['Straightedge/Feeler', 'Low', 'Fast', 'Basic'],
                                        ['Dial Indicator (Rim-Face)', 'Good', 'Medium', 'Intermediate'],
                                        ['Reverse Dial', 'Good', 'Medium', 'Intermediate'],
                                        ['Laser (Dual Beam)', 'Excellent (0.01 mm)', 'Fast', 'Low-Medium'],
                                        ['Optical/Laser Tracker', 'Best', 'Medium', 'High']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Soft foot: machine foot not flat on base — causes frame distortion, bearing failure, vibration. Check with feeler gauge under each foot with other feet bolted. Shim to correct. ALWAYS check soft foot before alignment.' },
                                { type: 'callout', style: 'exam-tip', text: 'Alignment exam: thermal growth (hot alignment), soft foot, coupling types (flexible vs rigid), tolerance values. Laser = preferred. Bump start = verify rotation ONLY, not full voltage start.' }
                            ]
                        },
                        {
                            id: 'ch16-s3',
                            title: 'Motor Maintenance & Troubleshooting',
                            content: [
                                { type: 'text', text: 'Predictive (PdM) and preventive (PM) maintenance prevent unplanned downtime. Key technologies: vibration analysis, thermography, motor current signature analysis (MCSA), insulation testing, oil analysis.' },
                                {
                                    type: 'table', headers: ['Test/Method', 'Detects', 'Frequency', 'Key Parameters'], rows: [
                                        ['Vibration Analysis', 'Unbalance, misalignment, bearing, looseness, resonance', 'Monthly/Quarterly', 'Velocity (mm/s), Spectrum (FFT), Envelope (bearing)'],
                                        ['Thermography', 'Hot bearings, connections, windings, load imbalance', 'Quarterly', 'ΔT > 10°C = investigate, > 25°C = urgent'],
                                        ['Insulation Resistance (Megger)', 'Moisture, contamination, aging', 'Annual / PM', '> 100 MΩ (1 kV), PI ≥ 2.0, DAR ≥ 1.25'],
                                        ['Polarization Index (PI)', 'Insulation condition', 'Annual', 'R10min/R1min ≥ 2.0'],
                                        ['DC Hi-Pot / VLF', 'Weak insulation, impending failure', 'Commissioning / 5 yr', 'Per IEEE 95 / 400.2 — DESTRUCTIVE if misused'],
                                        ['Surge Comparison', 'Turn-to-turn shorts', 'PM / Rewind', 'Waveform symmetry, dissipation'],
                                        ['MCSA (Current Signature)', 'Broken rotor bars, eccentricity, load', 'Quarterly', 'Sidebands at f ± 2sf, pole pass frequency'],
                                        ['Oil Analysis (Sleeve Bearings)', 'Wear metals, viscosity, water, particles', 'Annual', 'Fe, Cu, Pb, Sn, ISO 4406 cleanliness'],
                                        ['Bearing Inspection', 'Wear, damage, lubrication', 'PM / Overhaul', 'Raceway condition, ball/roller wear, cage']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Motor Current Signature Analysis (MCSA)', definition: 'Non-intrusive analysis of stator current spectrum. Broken rotor bars show sidebands at f ± 2sf (slip frequency). Eccentricity shows pole pass frequency (f × poles × slip). Load changes show torque ripple frequencies.' },
                                { type: 'callout', style: 'exam-tip', text: 'Bearing failure stages: 1) Lubrication/contamination (ultrasound/envelope), 2) Micro-pitting (envelope/acceleration), 3) Spalling (velocity/spectrum), 4) Catastrophic (vibration, heat, noise). Envelope (demodulation) detects earliest.' },
                                {
                                    type: 'list', items: [
                                        'Lubrication: grease per manufacturer — NLGI 2, polyurea or lithium complex. Quantity: G = 0.005 × D × B (oz) or 0.114 × D × B (g). Interval: 2000–8000 hrs per speed/load.',
                                        'Over-greasing = churning, heat, seal failure. Purge old grease. Use ultrasound to optimize.',
                                        'Rewind vs Replace: NEMA EASA guidelines — rewind if core loss increase < 10%, efficiency maintained. IEEE 112 test methods.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // CHAPTER 17 — DC MOTORS, GENERATORS & SYNCHRONOUS MACHINES
                {
                    id: 'ch-17',
                    number: 17,
                    title: 'DC Motors, Generators & Synchronous Machines',
                    subtitle: 'Task D-22: Rotating Equipment — DC Motors, Generators, Synchronous Motors',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch17-s1',
                            title: 'DC Motor Types & Control',
                            content: [
                                { type: 'text', text: 'DC motors provide precise speed/torque control. Still found in legacy industrial applications (rolling mills, cranes, extruders). Understanding commutation, field weakening, and drive interaction is critical.' },
                                {
                                    type: 'table', headers: ['Type', 'Field Connection', 'Speed Regulation', 'Torque Characteristic', 'Application'], rows: [
                                        ['Shunt', 'Parallel with armature', 'Good (5–15%)', 'Constant torque', 'Lathes, conveyors, constant speed'],
                                        ['Series', 'Series with armature', 'Poor (wide variation)', 'High starting torque', 'Cranes, hoists, traction'],
                                        ['Compound (Cumulative)', 'Shunt + series aiding', 'Fair', 'High starting + regulation', 'Presses, shears, elevators'],
                                        ['Compound (Differential)', 'Shunt + series opposing', 'Very poor (unstable)', 'Special', 'Rare'],
                                        ['Permanent Magnet', 'PM field', 'Good', 'Linear', 'Servo, small appliance'],
                                        ['Brushless DC (BLDC)', 'Electronic commutation', 'Excellent', 'Linear', 'Servo, HVAC, EV']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Commutation', definition: 'Process of reversing armature coil current as it passes through neutral plane. Mechanical commutator + brushes (DC motor) or electronic (BLDC). Poor commutation = sparking, commutator wear, brush wear.' },
                                { type: 'keyTerm', term: 'Field Weakening', definition: 'Reducing shunt field current to increase speed above base speed. Constant HP region. Torque decreases as 1/speed. Limited by commutation and mechanical limits.' },
                                {
                                    type: 'list', items: [
                                        'Brush maintenance: grade selection (carbon, graphite, electrographitic), spring pressure (2–4 psi), seating (radius match), film formation (patina = good)',
                                        'Commutator: concentricity < 0.025 mm, bar-to-bar mica undercut 0.5–0.8 mm, polishing (fine stone)',
                                        'Interpoles (commutating poles): series with armature, neutralize reactance voltage, prevent sparking',
                                        'Compensating winding: in pole face, series with armature, neutralize armature reaction (large motors)'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'DC motor exam: torque = K × Φ × Ia. Speed = (V - IaRa) / (K × Φ). Shunt: constant Φ → speed ∝ V, torque ∝ Ia. Series: Φ ∝ Ia → torque ∝ Ia², speed ∝ 1/√torque. Field loss (shunt) = runaway speed — field loss relay required.' }
                            ]
                        },
                        {
                            id: 'ch17-s2',
                            title: 'Synchronous Motors & Generators',
                            content: [
                                { type: 'text', text: 'Synchronous motors run at exact synchronous speed (no slip). Used for large drives (>500 HP), power factor correction, and precise speed. Synchronous generators (alternators) are the primary power source in generating plants and standby systems.' },
                                {
                                    type: 'table', headers: ['Machine', 'Rotor Type', 'Excitation', 'Starting Method', 'Application'], rows: [
                                        ['Sync Motor (Salient Pole)', 'Projecting poles', 'DC field (brush/slip ring or brushless)', 'Amortisseur winding (as induction) + pull-in', 'Large compressors, pumps, PF correction'],
                                        ['Sync Motor (Cylindrical)', 'Solid rotor, slots', 'DC field', 'Amortisseur + pull-in / VFD', 'High-speed, generators'],
                                        ['Sync Generator (Hydro)', 'Salient pole (many)', 'DC field (brushless exciter)', 'Prime mover (turbine)', 'Hydroelectric'],
                                        ['Sync Generator (Turbo)', 'Cylindrical (2-4 pole)', 'DC field (brushless exciter)', 'Steam/gas turbine', 'Thermal, nuclear, combined cycle'],
                                        ['Permanent Magnet Sync', 'PM rotor', 'None (PM)', 'VFD required', 'Wind turbines, small hydro, EV']
                                    ]
                                },
                                { type: 'keyTerm', term: 'V-Curves', definition: 'Plot of armature current vs field current at constant load. Minimum current at unity PF. Under-excited = lagging PF (absorbs VARs). Over-excited = leading PF (supplies VARs). Synchronous condenser = unloaded over-excited motor for VAR support.' },
                                { type: 'keyTerm', term: 'Pull-In Torque', definition: 'Torque at which synchronous motor pulls into synchronism from asynchronous operation (typically 95% sync speed). Must exceed load torque at that speed. Amortisseur (damper) winding provides induction motor starting torque.' },
                                {
                                    type: 'list', items: [
                                        'Excitation systems: static (SCR/thyristor), brushless (rotating rectifier), PMG-powered AVR',
                                        'AVR (Automatic Voltage Regulator): maintains terminal voltage, reactive load sharing, stability',
                                        'Power System Stabilizer (PSS): damps power oscillations via excitation modulation',
                                        'Synchronizing: 25 relay — ΔV < 5%, Δf < 0.1 Hz, Δθ < 10°, dead bus closure logic',
                                        'Protection: 27/59 (UV/OV), 81 (UF/OF), 32 (reverse power), 40 (loss of field), 46 (neg seq), 51V (V-restrained OC), 87 (differential)'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Synchronous motor = PF correction + constant speed. V-curves: leading PF when over-excited (synchronous condenser). Pull-out torque = max load without losing sync (typically 150–200% FLT). Loss of field (40) = impedance relay, offset mho characteristic.' }
                            ]
                        },
                        {
                            id: 'ch17-s3',
                            title: 'Generator Installation, Paralleling & Protection',
                            content: [
                                { type: 'text', text: 'Standby/prime power generators require proper installation, voltage regulation, governor control, and protective relaying. IEEE 1547, NFPA 110, CSA C282 apply.' },
                                {
                                    type: 'table', headers: ['Parameter', 'Typical Spec', 'Adjustment/Check'], rows: [
                                        ['Voltage Regulation', '±0.5–1.0% (AVR)', 'AVR trim, 3-phase sensing, PMG'],
                                        ['Frequency Regulation', 'Isochronous (0%) or 3–5% droop', 'Governor: electronic isoch / mechanical droop'],
                                        ['Voltage Dip (Motor Start)', '15–25% (instantaneous)', 'Subtransient reactance X\'\'d, AVR response'],
                                        ['Voltage Recovery', '< 0.5 s to ±1%', 'AVR forcing, PMG sustains field'],
                                        ['Waveform Distortion (THD)', '< 5% (linear load)', '2/3 pitch winding, AVR filtering'],
                                        ['Unbalance Capability', '25% negative sequence', 'Negative sequence cooling, derate']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'Paralleling: sync check (25), dead bus closure, load sharing (droop kW, cross-current kVAR), protection (32, 40, 27, 59, 81, 67, 51V)',
                                        'Load bank testing: NFPA 110 — monthly 30%, annual 100% (2 hr min). CSA C282 — weekly no-load, monthly 30%, annual 100% load bank.',
                                        'Fuel system: day tank, bulk storage, transfer pumps, filtration, leak detection — NFPA 37, 110',
                                        'Exhaust: backpressure < manufacturer limit, silencer, insulation, condensation drain',
                                        'Cooling: radiator (air), heat exchanger (liquid), remote radiator — airflow, glycol %, fan power'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Generator neutral grounding: low-resistance (5–10 A), high-resistance (5–20 A), or solid. HRG limits ground fault current, allows continued operation, requires ground fault alarm (not trip) — IEEE 142.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 18 — MOTOR STARTERS & STARTING METHODS
                {
                    id: 'ch-18',
                    number: 18,
                    title: 'Motor Starters & Starting Methods',
                    subtitle: 'Task D-23: Installs/Maintains Motor Control & Starting Systems',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch18-s1',
                            title: 'Full-Voltage & Reduced-Voltage Starting',
                            content: [
                                { type: 'text', text: 'Motor starting method determines inrush current, starting torque, mechanical stress, and voltage dip. Selection based on motor size, load type, supply capacity, and utility requirements.' },
                                {
                                    type: 'table', headers: ['Starting Method', 'Line Current (%LRA)', 'Starting Torque (%FLT)', 'Complexity', 'Cost', 'Application'], rows: [
                                        ['Direct-On-Line (DOL)', '100%', '100%', 'Lowest', 'Lowest', 'Small motors, stiff supply'],
                                        ['Wye-Delta (Y-Δ)', '33%', '33%', 'Medium', 'Medium', 'Delta motors, pumps, fans'],
                                        ['Autotransformer (RVAT)', '40–80% (tap)', '16–64%', 'High', 'High', 'Large motors, weak supply'],
                                        ['Part Winding', '65–70%', '40–50%', 'Medium', 'Medium', 'Dual-voltage motors, centrifugal'],
                                        ['Soft Starter (SCR)', 'Adjustable 200–400% FLA', 'Adjustable', 'Medium', 'Medium-High', 'Pumps, fans, conveyors, no kick']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Wye-Delta Starting', definition: 'Motor starts in Wye (1/3 voltage per winding = 1/3 LRA, 1/3 LRT), then transitions to Delta. Open transition = brief disconnect (current spike). Closed transition = resistors during transition (smoother). Requires 6-lead motor (Delta connected).' },
                                { type: 'keyTerm', term: 'Autotransformer (RVAT)', definition: 'Tapped autotransformer reduces voltage to motor (typically 50%, 65%, 80% taps). Current reduction = tap². Torque reduction = tap². Most flexible reduced-voltage method. Korndorfer connection = standard 3-coil.' },
                                {
                                    type: 'list', items: [
                                        'DOL: contactor + OL relay. 3 contactors for reversing. Mechanical + electrical interlock.',
                                        'Wye-Delta: 3 contactors (Main, Delta, Wye) + timer + OL. Wye contactor carries 1/√3 line current.',
                                        'RVAT: 3 contactors (Run, Start, Wye) + autotransformer + timer. Start contactor closes Wye tap, Run closes line.',
                                        'Part Winding: 2 contactors + OL. First energizes 1/2 or 2/3 winding, then full. Dual-voltage motor used as single-voltage.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Starting current/torque ratios: DOL = 100%/100%. Y-Δ = 33%/33%. RVAT 50% tap = 25%/25%, 65% = 42%/42%, 80% = 64%/64%. Part winding 1/2 = 50%/50%. Soft starter = adjustable. Exam tests: which method for given LRA limit, torque requirement, cost.' }
                            ]
                        },
                        {
                            id: 'ch18-s2',
                            title: 'Motor Control Centers (MCC) & Combination Starters',
                            content: [
                                { type: 'text', text: 'MCCs house combination starters in vertical sections. NEMA ICS-2, CSA C22.2 No. 254, UL 845 define construction. Each bucket = disconnect + controller + OL + control transformer.' },
                                {
                                    type: 'table', headers: ['Starter Type', 'NEMA Size', 'Max HP @ 480V', 'Contactor Rating', 'OL Type'], rows: [
                                        ['Size 0', '0', '5 HP', '18 A', 'Bimetallic / Electronic'],
                                        ['Size 1', '1', '10 HP', '27 A', 'Bimetallic / Electronic'],
                                        ['Size 2', '2', '25 HP', '45 A', 'Bimetallic / Electronic'],
                                        ['Size 3', '3', '50 HP', '90 A', 'Bimetallic / Electronic'],
                                        ['Size 4', '4', '100 HP', '135 A', 'Electronic'],
                                        ['Size 5', '5', '200 HP', '270 A', 'Electronic'],
                                        ['Size 6', '6', '400 HP', '540 A', 'Electronic']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Combination Starter', definition: 'Single unit: disconnecting means (MCCB/fused switch), motor controller (contactor), overload protection (OL), control circuit transformer (CCT), and terminal blocks. Per CEC Rule 28-206.' },
                                {
                                    type: 'list', items: [
                                        'MCC bucket interlocks: 1) No insert/remove with breaker ON. 2) No breaker ON with door open (defeat for test). 3) Door no open with breaker ON. 4) Ground stab first, power stabs last.',
                                        'NEMA vs IEC: NEMA = heavy-duty, oversized, serviceable. IEC = compact, application-rated, modular. NEMA Size 1 ≈ IEC 40–50 A.',
                                        'Control voltage: 120 VAC (standard), 24 VDC (modern, PLC-friendly). CCT: 480:120 or 600:120, fused primary/secondary.',
                                        'Overload relays: Bimetallic (thermal, trip class 10/20/30), Electronic (programmable, phase loss, ground fault, communication). Electronic preferred for VFD-fed motors (adjust for harmonic heating).'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'MCC exam: bucket interlocks, NEMA sizes, control voltage, OL types, CCT sizing (typically 50–150 VA), wireway fill, ground bus, horizontal/vertical bus rating, arc-resistant construction (Type 2B).' }
                            ]
                        },
                        {
                            id: 'ch18-s3',
                            title: 'Motor Protection — Overload, Phase Loss, Ground Fault',
                            content: [
                                { type: 'text', text: 'Motor protection prevents damage from overload, single-phasing, ground fault, stall, jam, and voltage anomalies. CEC Rules 28-200 to 28-600, NEC 430, IEEE 242.' },
                                {
                                    type: 'table', headers: ['Protection', 'Device', 'Function', 'Setting'], rows: [
                                        ['Overload (Thermal)', 'Bimetallic / Electronic OL', 'Motor thermal model', '100–115% FLA (SF 1.15), Class 10/20/30'],
                                        ['Short Circuit', 'MCCB / Fuse / MCP', 'Fault interruption', 'MCCB: 13× FLA max. Fuse: 175% FLA (time-delay)'],
                                        ['Phase Loss / Unbalance', 'Electronic OL / 46 Relay', 'Detect missing phase', 'Trip < 2 s (electronic), inherent (bimetal)'],
                                        ['Ground Fault', 'Core-balance CT + Relay', 'Low-level ground fault', '100 mA – 10 A (personnel), 5–20 A (equipment)'],
                                        ['Stall / Jam', 'Electronic OL / 51LR', 'Locked rotor / mechanical jam', 'Current > 300% FLA, time delay'],
                                        ['Underload', 'Electronic OL / 37', 'Loss of load (pump dry)', 'Current < 50% FLA, time delay'],
                                        ['Voltage (UV/OV)', '27/59 Relay', 'Abnormal voltage', 'UV: 85–90%, OV: 110–115%'],
                                        ['Bearing RTD / PTC', 'Temperature', 'Bearing/winding overtemp', 'Alarm: 130°C, Trip: 155°C (Class F)']
                                    ]
                                },
                                { type: 'keyTerm', term: 'MCP (Motor Circuit Protector)', definition: 'Instantaneous-only circuit breaker (no thermal element). Provides short-circuit protection ONLY. Must be paired with separate overload relay. Set at 8–13× FLA (adjustable magnetic). CEC Rule 28-206.' },
                                { type: 'callout', style: 'warning', text: 'Single-phasing: motor runs on 2 phases → current in remaining phases = 1.73× normal, negative sequence heating. Bimetallic OL may NOT trip (current redistributes). Electronic OL with phase loss detection REQUIRED for critical motors.' },
                                { type: 'callout', style: 'exam-tip', text: 'Protection exam: MCP vs MCCB (MCP = magnetic only), OL trip class (10=fast, 20=std, 30=high inertia), phase loss detection (electronic only), ground fault levels (personnel 5mA, equipment 10-20A), CEC 28-200 sizing rules.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 19 — VARIABLE FREQUENCY DRIVES (VFDs)
                {
                    id: 'ch-19',
                    number: 19,
                    title: 'Variable Frequency Drives — Operation, Installation & Troubleshooting',
                    subtitle: 'Task D-24: Installs/Maintains Motor Drives (VFDs, Soft Starters)',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch19-s1',
                            title: 'VFD Topology & Operation Principles',
                            content: [
                                { type: 'text', text: 'VFDs convert fixed-frequency AC to variable-frequency AC for motor speed control. Modern VFDs use IGBTs, PWM, and vector control. Understanding topology, harmonics, and motor interaction is critical.' },
                                {
                                    type: 'table', headers: ['Section', 'Function', 'Key Components', 'Key Parameters'], rows: [
                                        ['Rectifier (Converter)', 'AC → DC', 'Diode bridge (6/12/18-pulse), SCR (regen)', 'Input PF, harmonics, diode/SCR rating'],
                                        ['DC Bus', 'Energy storage, filter', 'Capacitors, inductors, pre-charge', 'Voltage (√2×Vin), ripple, capacitance'],
                                        ['Inverter', 'DC → Variable AC', 'IGBTs (6), gate drivers, snubbers', 'Switching freq (2–16 kHz), PWM, dead-time'],
                                        ['Control Board', 'Algorithms, I/O', 'DSP/FPGA, A/D, D/A, comm ports', 'Control mode (V/Hz, SVC, FOC), parameters'],
                                        ['Power Supply', 'Internal voltages', 'SMPS, gate drive isolation', '15V, 24V, 5V, ±15V for op-amps']
                                    ]
                                },
                                { type: 'keyTerm', term: 'PWM (Pulse Width Modulation)', definition: 'IGBTs switched at high frequency (carrier) with varying pulse width to synthesize sine wave. Fundamental frequency = motor speed. Carrier frequency = 2–16 kHz. Higher carrier = lower ripple, higher switching losses.' },
                                { type: 'keyTerm', term: 'V/Hz (Scalar) Control', definition: 'Maintains constant V/f ratio for constant flux. Simple, open-loop. Slip causes speed droop. Poor low-speed torque. Used for fans, pumps, multiple motors.' },
                                { type: 'keyTerm', term: 'Vector Control (FOC)', definition: 'Field-Oriented Control — decouples torque (Iq) and flux (Id) currents via Park/Clarke transforms. Requires motor model or encoder. Sensorless (estimator) or closed-loop (encoder). High torque at zero speed.' },
                                { type: 'callout', style: 'exam-tip', text: 'VFD exam: 6-pulse rectifier harmonics (5th, 7th, 11th, 13th... h = 6k±1). 12-pulse = phase-shifted transformers (30°) cancels 5th, 7th, 17th, 19th. 18-pulse = more cancellation. Active Front End (AFE) = IGBT rectifier, sinusoidal input, unity PF, regen.' }
                            ]
                        },
                        {
                            id: 'ch19-s2',
                            title: 'VFD Installation — Wiring, Grounding, Filters',
                            content: [
                                { type: 'text', text: 'Proper VFD installation prevents EMI, motor bearing damage, cable failures, and nuisance trips. CEC Rule 26-256, IEEE 519, manufacturer guidelines.' },
                                {
                                    type: 'list', items: [
                                        'Input wiring: line reactor (3–5%) or DC link choke — reduces harmonics, protects rectifier, improves PF',
                                        'Output wiring: VFD-rated cable (XLPE, symmetrical ground, shield/armor) — NO standard Teck for >30 m runs',
                                        'Cable length: < 30 m (no filter), 30–100 m (dV/dt filter), > 100 m (sine wave filter) — prevents reflected wave voltage doubling',
                                        'Grounding: drive PE → motor PE → panel ground. Symmetrical ground conductors in cable (3 grounds). Single-point ground for shield.',
                                        'EMC filter: internal (C2/C3) or external — reduces conducted emissions. IT systems (ungrounded) = remove filter caps to ground.',
                                        'Separation: power vs control ≥ 300 mm. Cross at 90°. Control: shielded twisted pair, grounded at drive end only.',
                                        'Motor protection: PTC/RTD input to VFD, bearing current mitigation (insulated bearing, shaft grounding ring, common mode choke)'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Reflected wave phenomenon: fast IGBT edges (dV/dt > 5 kV/µs) + cable impedance mismatch = voltage doubling at motor terminals. 480 V drive → 1300 V peaks at motor. Inverter-duty motor (NEMA MG-1 Part 31) or filters REQUIRED.' },
                                { type: 'callout', style: 'exam-tip', text: 'Installation exam: cable type (VFD-rated, symmetrical grounds), length limits, filters (dV/dt vs sine wave), grounding (drive-motor-panel), line reactor %, carrier frequency vs cable length, bearing currents (EDM, circulating, common mode).' }
                            ]
                        },
                        {
                            id: 'ch19-s3',
                            title: 'VFD Troubleshooting & Motor Considerations',
                            content: [
                                { type: 'text', text: 'VFD faults fall into categories: power, control, motor, communication. Systematic diagnosis using keypad, oscilloscope, and thermal imager.' },
                                {
                                    type: 'table', headers: ['Fault Category', 'Common Faults', 'Diagnosis', 'Typical Cause'], rows: [
                                        ['Overcurrent (OC)', 'OC1 (accel), OC2 (decel), OC3 (run)', 'Current waveform, accel/decel time', 'Short circuit, ground fault, too fast accel, motor mismatch'],
                                        ['Overvoltage (OV)', 'OV1, OV2, OV3', 'DC bus voltage, decel time', 'Regen load, no brake resistor, too fast decel, supply surge'],
                                        ['Undervoltage (UV)', 'UV', 'Input voltage, DC bus', 'Supply dip, loose connection, pre-charge failure'],
                                        ['Overtemperature (OH)', 'Heatsink, IGBT, rectifier', 'Thermal imager, fan check', 'Dirt, fan failure, high ambient, overload, carrier too high'],
                                        ['Ground Fault (GF)', 'GF', 'Megger motor/cable, CT balance', 'Motor insulation, cable damage, moisture, common mode'],
                                        ['Overload (OL)', 'Motor OL, Drive OL', 'Current vs time, thermal model', 'Mechanical overload, wrong OL setting, high ambient'],
                                        ['Communication', 'Keypad, Fieldbus, Encoder', 'Cable, termination, address, baud', 'Noise, broken wire, wrong config, EMC']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Bearing Currents (EDM)', definition: 'Common-mode voltage (Vcm = Va+Vb+Vc) capacitively couples to rotor → shaft voltage → discharges through bearings (EDM pits). Mitigation: insulated NDE bearing, shaft grounding ring (Aegis), common-mode choke, sine-wave filter.' },
                                {
                                    type: 'list', items: [
                                        'Motor derating on VFD: NEMA MG-1 Part 31 — inverter duty: 1000 V peak, 0.1 µs rise time. Standard motor: derate HP 1.15 SF → 1.0, check insulation.',
                                        'Constant torque vs variable torque: CT = same torque at all speeds (conveyor, extruder) → VFD sized for FLA. VT = fan/pump (torque ∝ speed²) → VFD sized 1 size smaller.',
                                        'Bypass contactor: for emergency across-the-line operation. Interlocked with VFD output contactor. NEVER close both simultaneously.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'VFD troubleshooting: read fault history, check DC bus voltage (1.35×Vin), measure output with VFD-rated meter (not standard DMM — PWM fools it), check motor insulation (megger with drive DISCONNECTED), verify parameters (motor nameplate data).' }
                            ]
                        },
                        {
                            id: 'ch19-s4',
                            title: 'Soft Starters & Other Reduced-Voltage Solid State',
                            content: [
                                { type: 'text', text: 'Soft starters use SCRs to ramp voltage, providing smooth start/stop. Simpler, cheaper than VFD for fixed-speed applications. No speed control.' },
                                {
                                    type: 'table', headers: ['Feature', 'Soft Starter', 'VFD'], rows: [
                                        ['Speed Control', 'No (fixed speed)', 'Yes (variable speed)'],
                                        ['Starting Current', 'Adjustable (200–400% FLA)', 'Adjustable (100–150% FLA)'],
                                        ['Starting Torque', 'Adjustable (0–100% FLT)', 'High (150–200% FLT at low speed)'],
                                        ['Efficiency (Running)', '99.5% (bypassed)', '95–98% (continuous losses)'],
                                        ['Harmonics (Running)', 'None (bypassed)', 'Continuous (5th, 7th, etc.)'],
                                        ['Cost', 'Low-Medium', 'Medium-High'],
                                        ['Size', 'Compact', 'Larger'],
                                        ['Application', 'Pumps, fans, compressors, conveyors', 'Variable speed, process control, high torque at low speed']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Soft Starter Topology', definition: '6 SCRs (2 per phase, anti-parallel) or 3 SCRs + 3 diodes (half-controlled). Phase-angle firing controls RMS voltage. Bypass contactor closes at full voltage (eliminates SCR losses, harmonics).' },
                                {
                                    type: 'list', items: [
                                        'Ramp profiles: voltage ramp, current limit, torque control, pump control (anti-water hammer)',
                                        'Kick start: brief high voltage (500–700%) to break away high static friction',
                                        'Soft stop: voltage ramp down — extends stopping time, reduces water hammer',
                                        'Inside-delta connection: SCRs in series with motor windings (delta) — 58% line current rating, 6 leads required',
                                        'Protection: motor OL, SCR overtemperature, phase loss, shunt trip, shearpin (jam)'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Soft starter vs VFD: soft starter = fixed speed, lower cost, bypassed at speed. VFD = variable speed, continuous losses, harmonics. Inside-delta = 58% current rating, saves money. Exam: applications, harmonics, efficiency, inside-delta wiring.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 20 — FIXED EQUIPMENT: HEATING, WELDING, TRANSFORMERS & CAPACITORS
                {
                    id: 'ch-20',
                    number: 20,
                    title: 'Fixed Equipment — Heating, Welding, Capacitors & Special Systems',
                    subtitle: 'Task D-25: Installs/Maintains Other Fixed Equipment',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch20-s1',
                            title: 'Electric Heating Systems',
                            content: [
                                { type: 'text', text: 'Industrial heating: resistance (duct, platen, trace), induction, infrared, arc. CEC Section 62, 42, 26. Control: contactors, SCRs, PID controllers.' },
                                {
                                    type: 'table', headers: ['Heating Type', 'Principle', 'Control Method', 'Application'], rows: [
                                        ['Resistance (Wire/Cartridge)', 'I²R heating', 'Contactor (on/off), SCR (phase-angle, burst)', 'Ovens, furnaces, duct heaters, trace'],
                                        ['Induction', 'Eddy currents in workpiece', 'Inverter frequency/power control', 'Heat treating, melting, forging, pipe seam'],
                                        ['Infrared (IR)', 'Radiant heat (lamps/tubes)', 'SCR, contactor, voltage control', 'Curing, drying, forming, comfort'],
                                        ['Arc (Plasma/Submerged)', 'Electric arc', 'Constant current/voltage supply', 'Welding, melting, cutting'],
                                        ['Dielectric (RF/Microwave)', 'Molecular friction', 'RF generator power control', 'Wood, food, pharmaceutical drying'],
                                        ['Heat Trace', 'Resistance cable', 'Self-regulating / Power-limiting / MI', 'Freeze protection, viscosity maintenance']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Self-Regulating Heat Trace', definition: 'Parallel conductive core between two bus wires. Resistance increases with temperature (PTC effect) — self-limits power output. Can be overlapped. Cut to length in field.' },
                                {
                                    type: 'list', items: [
                                        'SCR control: phase-angle (continuous, high harmonics), zero-cross burst firing (lower harmonics), single-cycle (fastest response)',
                                        'Heat trace design: maintain temp, pipe size, insulation, ambient min, voltage drop, circuit length, GFPEP (30 mA) required',
                                        'Induction heating: workpiece must be conductive, frequency selects depth (skin effect), water cooling critical',
                                        'Infrared: wavelength matching to material absorption — short wave (metals), medium (plastics), long (water-based)'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'ch20-s2',
                            title: 'Resistance Welding & Welding Power Supplies',
                            content: [
                                { type: 'text', text: 'Resistance welding (spot, seam, projection) uses high current, low voltage. Power supplies: AC (transformer), DC (rectified), MFDC (inverter), capacitor discharge. CEC Rule 26-330, CSA W117.2.' },
                                {
                                    type: 'table', headers: ['Welding Type', 'Power Supply', 'Current/Voltage', 'Control', 'Application'], rows: [
                                        ['Spot (AC)', 'AC Transformer', '5–50 kA / 5–10 V', 'SCR phase shift, half-cycle', 'Sheet metal, automotive'],
                                        ['Spot (MFDC)', 'MFDC Inverter (1 kHz)', '5–20 kA DC / 5–10 V', 'Inverter current control', 'High strength steels, aluminum'],
                                        ['Seam', 'AC / MFDC', 'Rolling electrodes', 'Wheel speed + current', 'Fuel tanks, pipe'],
                                        ['Projection', 'AC / MFDC', 'High force, projections', 'Force + current + time', 'Nuts, bolts, studs'],
                                        ['Capacitor Discharge', 'Capacitor bank', 'Very high, short pulse', 'Voltage + capacitance', 'Projection, stud, dissimilar metals'],
                                        ['Flash/Butt', 'AC Transformer', 'Very high current', 'Force + upset distance', 'Wire, rod, rail, pipe']
                                    ]
                                },
                                { type: 'keyTerm', term: 'MFDC (Mid-Frequency Direct Current)', definition: 'Inverter-based welding supply (typically 1000 Hz). Smaller transformer, DC output (no inductive losses), balanced 3-phase load, precise current control, faster feedback. Standard for modern automotive.' },
                                {
                                    type: 'list', items: [
                                        'Weld schedule: squeeze, weld, hold, off times. Current, force, duration per schedule.',
                                        'Electrode maintenance: dressing (tip filing), force verification, water cooling flow',
                                        'Weld monitoring: current, voltage, force, displacement, expansion — quality assurance',
                                        'Supply sizing: KVA = (I² × R × t) / duty cycle. Demand factor per CSA C22.2 No. 154.'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'ch20-s3',
                            title: 'Power Factor Correction Capacitors & Harmonic Filters',
                            content: [
                                { type: 'text', text: 'Capacitors improve power factor, reduce losses, increase capacity. Harmonic filters prevent resonance. CEC Rule 26-300, IEEE 18, 1036.' },
                                {
                                    type: 'table', headers: ['Capacitor Type', 'Connection', 'Protection', 'Application'], rows: [
                                        ['Fixed (Individual)', 'Motor terminals', 'Fuse + thermal', 'Large motors, constant load'],
                                        ['Switched (Bank)', 'Bus / MCC', 'Contactor + fuse + reactor', 'Varying load, automatic PF control'],
                                        ['Automatic (APFC)', 'Main bus', 'Controller + contactors + reactors', 'Plant-wide, multiple steps'],
                                        ['Detuned (Filter)', 'Bus', 'Reactor tuned (7%, 5.67%, 14%)', 'Harmonic environment, resonance prevention'],
                                        ['Active (APF)', 'Bus (parallel)', 'IGBT inverter', 'Dynamic, harmonic + PF correction']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Detuned Capacitor Bank', definition: 'Capacitor + series reactor tuned below lowest harmonic (typically 7% = 189 Hz for 5th, 5.67% = 227 Hz for 5th/7th, 14% = 134 Hz for 3rd). Prevents parallel resonance, absorbs harmonics.' },
                                { type: 'callout', style: 'warning', text: 'NEVER connect capacitors directly to bus with VFDs/non-linear loads without reactors. Parallel resonance (bus inductance + capacitor) amplifies harmonics → capacitor failure, voltage distortion, equipment damage.' },
                                {
                                    type: 'list', items: [
                                        'Capacitor sizing: kVAR = kW × (tan φ₁ - tan φ₂). Target PF 0.95–0.98 lagging.',
                                        'Reactor tuning: 7% (standard), 5.67% (heavy 5th/7th), 14% (3rd harmonic). Impedance = % × Xc.',
                                        'Switching: contactor with pre-insertion resistors (reduce inrush), anti-resonance reactor.',
                                        'Protection: HRC fuses (1.5–1.8× In), thermal overload, unbalance relay (neutral current), pressure switch.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Capacitor exam: kVAR calculation, detuning reactor % (7%, 5.67%, 14%), resonance prevention, switching contactors (pre-insertion resistors), protection (fuses, unbalance), APFC controller (PF target, hunting prevention).' }
                            ]
                        },
                        {
                            id: 'ch20-s4',
                            title: 'Special Equipment: Cranes, Elevators, Conveyors & Material Handling',
                            content: [
                                { type: 'text', text: 'Material handling equipment has specialized electrical requirements: multiple motors, regeneration, safety circuits, and control systems.' },
                                {
                                    type: 'table', headers: ['Equipment', 'Motor Types', 'Key Electrical Features', 'Safety/Controls'], rows: [
                                        ['Overhead Crane', 'Squirrel-cage (VFD), Wound-rotor (legacy)', 'Hoist, trolley, bridge, rotating collector', 'Limit switches, overload, anti-collision, VFD brake control'],
                                        ['Jib Crane', 'Squirrel-cage', 'Slew, hoist, trolley', 'Rotation limit, overload'],
                                        ['Elevator (Traction)', 'Geared: AC VVVF, Gearless: PM Sync', 'Regeneration, position encoder, door ops', 'Safety circuit, governor, buffers, fire service'],
                                        ['Elevator (Hydraulic)', 'Squirrel-cage + VFD / Valve control', 'Pump motor, valve manifold', 'Pressure switch, rupture valve, emergency lowering'],
                                        ['Conveyor (Belt)', 'Squirrel-cage + VFD / Soft start', 'Long distance, multiple drives', 'Pull cord, belt slip, sequence start, load sharing'],
                                        ['Conveyor (Chain/Roller)', 'Squirrel-cage', 'Accumulation zones, VFD', 'Zone control, jam detection'],
                                        ['AS/RS (Stacker Crane)', 'VFD (all axes)', 'Precise positioning, regeneration', 'PLC, safety laser, WMS integration']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Regenerative Braking', definition: 'Motor acts as generator, feeding energy back to supply. VFD with active front end (AFE) or dynamic braking resistor (DBR) required. Crane hoist lowering, elevator down, conveyor downhill.' },
                                {
                                    type: 'list', items: [
                                        'Crane collectors: sliding shoe (power), carbon brush (signal), fiber optic (data) — insulation, alignment, wear',
                                        'Elevator: traveling cable (power + comms), compensation chain, governor rope, safety gear',
                                        'Conveyor sequence start: downstream first → upstream (prevents pile-up). VFDs: master-follower or load sharing.',
                                        'AS/RS: servo/VFD axes (travel, lift, fork), absolute encoders, safety-rated PLC, wire guidance or laser nav'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'part-5',
            number: 5,
            title: 'Installs/Maintains Signalling & Communication Systems (MWA E)',
            description: 'Covers fire alarm systems, security/access control, voice/data/video (VDV) structured cabling, fiber optics, and industrial communication networks. This MWA represents 10 questions (10% of the total exam).',
            weight: '10 questions (10% of Total Exam)',

            chapters: [
                // CHAPTER 21 — FIRE ALARM SYSTEMS
                {
                    id: 'ch-21',
                    number: 21,
                    title: 'Fire Alarm Systems — Installation, Inspection & Codes',
                    subtitle: 'Task E-26: Installs/Maintains Fire Alarm Systems',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch21-s1',
                            title: 'Fire Alarm System Architecture & Codes',
                            content: [
                                { type: 'text', text: 'Fire alarm systems are life-safety systems governed by CAN/ULC-S524 (installation), CAN/ULC-S536 (inspection/testing), CAN/ULC-S537 (verification), NBCC, and CEC Section 32. Industrial electricians install, maintain, and troubleshoot these systems.' },
                                {
                                    type: 'table', headers: ['Standard', 'Scope', 'Key Requirements'], rows: [
                                        ['CAN/ULC-S524', 'Installation', 'Wiring methods, device placement, supervision, documentation'],
                                        ['CAN/ULC-S536', 'Inspection & Testing', 'Annual test procedures, sensitivity, records, deficiencies'],
                                        ['CAN/ULC-S537', 'Verification', 'New system acceptance, re-verification after modifications'],
                                        ['NBCC', 'Building Code', 'Where systems required, zoning, annunciation, monitoring'],
                                        ['CEC Section 32', 'Electrical Installation', 'Circuit classification, separation, power supply, grounding'],
                                        ['CAN/ULC-S561', 'Monitoring', 'Signal receiving centre, transmission methods, supervision']
                                    ]
                                },
                                { type: 'keyTerm', term: 'FACP (Fire Alarm Control Panel)', definition: 'Central control unit: receives signals from initiating devices, controls notification appliances, communicates with monitoring, provides system supervision, and executes programmed sequences.' },
                                { type: 'keyTerm', term: 'SLC (Signaling Line Circuit)', definition: 'Addressable loop connecting intelligent devices (detectors, modules) to FACP. Class A (redundant path) or Class B (single path). Power + data on same pair.' },
                                { type: 'callout', style: 'exam-tip', text: 'Know the circuit classifications: Class A (survives single open/short — redundant), Class B (single path — trouble on fault), Class N (network), Class X (enhanced Class A). CEC 32-200 maps to these.' }
                            ]
                        },
                        {
                            id: 'ch21-s2',
                            title: 'Initiating Devices — Detection Principles & Placement',
                            content: [
                                { type: 'text', text: 'Initiating devices detect fire phenomena (smoke, heat, flame, gas) and signal the FACP. Selection and placement per ULC-S524, NFPA 72, and manufacturer guidelines.' },
                                {
                                    type: 'table', headers: ['Device Type', 'Detection Principle', 'Typical Spacing', 'Application', 'ULC Standard'], rows: [
                                        ['Ionization Smoke', 'Ionization chamber — combustion particles', '90 m² (970 ft²) max', 'Fast flaming fires, clean environments', 'ULC S529'],
                                        ['Photoelectric Smoke', 'Light scattering — smoke particles', '90 m² (970 ft²) max', 'Smoldering fires, general use', 'ULC S529'],
                                        ['Dual-Sensor (Multi-Criteria)', 'Ionization + photoelectric + heat', '90 m² max', 'Broad spectrum, fewer nuisance alarms', 'ULC S529'],
                                        ['Heat Detector (Fixed Temp)', 'Bimetal / thermistor — temp threshold', '45 m² (480 ft²) max', 'Kitchens, garages, dusty/humid', 'ULC S530'],
                                        ['Heat Detector (Rate-of-Rise)', 'Rapid temperature increase', '45 m² max', 'Supplements fixed temp', 'ULC S530'],
                                        ['Flame Detector (UV/IR)', 'Radiation from flame', 'Per manufacturer (cone)', 'High hazard, outdoor, explosion risk', 'ULC S531'],
                                        ['Gas Detector (CO, Combustible)', 'Electrochemical / catalytic', 'Per manufacturer', 'Parking garages, industrial process', 'ULC S529 / CSA 6.5'],
                                        ['Manual Pull Station', 'Manual activation', 'Exit paths, ≤30 m travel', 'All occupied buildings', 'ULC S528'],
                                        ['Duct Smoke Detector', 'Photoelectric in sampling tube', 'Per NFPA 90A', 'HVAC shutdown, smoke spread', 'ULC S529'],
                                        ['Beam Detector', 'Projected beam obscuration', 'Up to 100 m length', 'Atriums, warehouses, high ceiling', 'ULC S529']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Addressable vs Conventional', definition: 'Conventional: zones (circuits) — device identity unknown. Addressable: each device has unique address — exact location reported, diagnostic data, T-tapping allowed (Class A). Addressable = standard for new industrial.' },
                                {
                                    type: 'list', items: [
                                        'Smoke detector spacing: 9.1 m (30 ft) max between, 4.6 m (15 ft) from walls. Reduce for high ceilings (>3 m), beams, joists.',
                                        'Heat detector spacing: 6.1 m (20 ft) max between, 3.0 m (10 ft) from walls. Fixed temp: 57°C (135°F) or 88°C (190°F) typical.',
                                        'Duct detectors: sampling tube across duct, airflow 0.5–4 m/s, remote test station required.',
                                        'Manual pull stations: 1.1 m (42") above floor, within 1.5 m (5 ft) of exits, red, double-action.',
                                        'Beam detectors: transmitter + receiver, alignment critical, building movement compensation.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'NEVER paint smoke/heat detectors. NEVER install smoke detectors in: kitchens (cooking), bathrooms (steam), dusty areas (woodworking), high airflow (>1.5 m/s), near diffusers. Use heat detectors instead.' }
                            ]
                        },
                        {
                            id: 'ch21-s3',
                            title: 'Notification Appliances & Emergency Communication',
                            content: [
                                { type: 'text', text: 'Notification appliances alert occupants. Audible (horns, speakers), visible (strobes), and textual. Synchronization, audibility, and visibility requirements are strict.' },
                                {
                                    type: 'table', headers: ['Appliance Type', 'Output', 'Mounting', 'Coverage', 'Synchronization'], rows: [
                                        ['Horn', '85–95 dBA @ 3 m', 'Wall/Ceiling', 'Per dB loss calc', 'Not required'],
                                        ['Horn/Strobe', '85–95 dBA + 15–110 cd', 'Wall (2.0–2.4 m)', 'Strobe: Table 32-2', 'Required (within zone)'],
                                        ['Strobe Only', '15–110 cd', 'Wall/Ceiling', 'Table 32-2 (UL 1971)', 'Required'],
                                        ['Speaker (Voice EVAC)', 'Voice + tones, 70 VRMS', 'Wall/Ceiling', 'Intelligibility (CIS/STI)', 'Required'],
                                        ['Speaker/Strobe', 'Voice + strobe', 'Wall/Ceiling', 'Both tables', 'Required'],
                                        ['Textual Display', 'Visual message', 'Wall', 'Line of sight', 'N/A']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Temporal Pattern (Temporal-3)', definition: 'Standard evacuation signal: 0.5 s ON, 0.5 s OFF, 0.5 s ON, 0.5 s OFF, 0.5 s ON, 1.5 s OFF — repeat. ISO 8201 / NFPA 72. All audible appliances MUST produce this pattern for fire alarm.' },
                                { type: 'keyTerm', term: 'CIS / STI', definition: 'Common Intelligibility Scale / Speech Transmission Index. Measures voice clarity. CIS ≥ 0.7 (STI ≥ 0.5) required for voice evacuation. Affected by reverberation, noise, speaker placement, tap setting.' },
                                {
                                    type: 'list', items: [
                                        'Strobe coverage: Table 32-2 (CEC) / NFPA 72 Table 18.5.5.4.1 — cd rating vs room size. 15 cd = 6×6 m, 110 cd = 16×16 m (typical).',
                                        'Audibility: 15 dB above ambient or 75 dBA min (public mode), 90 dBA min (private mode/sleeping).',
                                        'Speaker taps: 70.7 V line — tap setting determines power (1/4 W, 1/2 W, 1 W, 2 W). Total load ≤ amplifier rating.',
                                        'Synchronization: all strobes in same visual field MUST flash simultaneously (prevents photo-seizure). Module in panel or external sync module.',
                                        'Emergency voice/alarm communication: live mic, pre-recorded messages, zone paging, firefighter telephone (Type A/B).'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Exam: Temporal-3 pattern mandatory. Strobe cd vs room size (Table 32-2). Speaker 70 V line tapping. Sync required for strobes. Voice intelligibility (CIS/STI). CEC 32-200 circuit classes for notification.' }
                            ]
                        },
                        {
                            id: 'ch21-s4',
                            title: 'Power Supplies, Wiring & Inspection/Testing',
                            content: [
                                { type: 'text', text: 'Fire alarm power supplies must be reliable, supervised, and meet strict standby/alarm capacity calculations. Wiring methods per CEC 32-200. Annual inspection per ULC-S536.' },
                                {
                                    type: 'list', items: [
                                        'Primary power: dedicated branch circuit, identified at panel ("FIRE ALARM"), no GFCI/AFCI, lock-on breaker.',
                                        'Secondary power: sealed lead-acid batteries (VRLA). Capacity: 24 hr standby + 5 min alarm (or 30 min for voice EVAC) — ULC-S524.',
                                        'Battery calculation: (Standby load × 24 hr) + (Alarm load × 0.083 hr or 0.5 hr) × 1.2 safety factor.',
                                        'Battery test: monthly visual, annual load test (ULC-S536). Replace at 4–5 years or 80% capacity.',
                                        'Wiring: Class A/B/N/X per device type. FPLP (plenum) or FPL (riser) cable. Red jacket standard. Separation from power: 50 mm (2") or barrier.',
                                        'Ground fault detection: required on all circuits (CEC 32-206). Impedance-based or active injection.',
                                        'Annual inspection (ULC-S536): 100% devices tested, sensitivity (smoke), battery load, ground fault, supervision, annunciator, monitoring transmission, records.'
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Test', 'Frequency', 'Method', 'Pass Criteria'], rows: [
                                        ['Smoke Sensitivity', 'Annual', 'Calibrated test aerosol / chamber', 'Within mfr range (typically 0.5–4%/ft obscuration)'],
                                        ['Heat Detector', 'Annual', 'Heat gun / hair dryer', 'Activates at rated temp ± tolerance'],
                                        ['Pull Station', 'Annual', 'Manual activation', 'Alarm at FACP, address correct'],
                                        ['Notification', 'Annual', 'Activate circuit', 'dBA, cd, sync, temporal pattern'],
                                        ['Battery Load', 'Annual', 'Load bank / FACP test', 'Voltage > 20.4 V (24 V) after 5 min alarm'],
                                        ['Ground Fault', 'Annual', 'FACP indication / megger', 'No ground fault trouble'],
                                        ['Monitoring', 'Annual', 'Signal transmission test', 'Received at SRC, all signals']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Battery calc: Standby current × 24 hr + Alarm current × 0.083 hr (5 min) × 1.2. Voice EVAC = 30 min alarm. Replace batteries at 4–5 years. ULC-S536 = annual 100% test. Ground fault detection mandatory. CEC 32-200 circuit classes.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 22 — SECURITY, ACCESS CONTROL & CCTV
                {
                    id: 'ch-22',
                    number: 22,
                    title: 'Security Systems — Access Control, Intrusion, CCTV',
                    subtitle: 'Task E-27: Installs/Maintains Security & Surveillance Systems',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch22-s1',
                            title: 'Access Control Systems — Architecture & Components',
                            content: [
                                { type: 'text', text: 'Access control systems manage entry/exit using credentials, readers, controllers, and locks. Integration with fire alarm (egress), elevator, and building management is common.' },
                                {
                                    type: 'table', headers: ['Component', 'Function', 'Types', 'Key Specs'], rows: [
                                        ['Credential', 'User identifier', 'Card (125 kHz, 13.56 MHz), fob, mobile (BLE/NFC), biometric', 'Format (26-bit Wiegand, 37-bit, custom), encryption'],
                                        ['Reader', 'Reads credential', 'Prox, smartcard (iCLASS, DESFire), multi-tech, biometric, mobile', 'Wiegand / OSDP output, indoor/outdoor, vandal'],
                                        ['Controller (Panel)', 'Decisions, logging, comms', '1–64 doors per panel, distributed/centralized', 'Inputs (REX, DPS), outputs (lock, aux), Ethernet/RS-485'],
                                        ['Locking Hardware', 'Secures door', 'Electric strike, maglock (1200/600 lb), electrified lockset, crash bar', 'Fail-safe (maglock) vs fail-secure (strike), fire-rated'],
                                        ['Request-to-Exit (REX)', 'Free egress', 'Motion (PIR), push button, touch bar, crash bar integration', 'UL 294 listed, timed, delayed egress (15/30 s)'],
                                        ['Door Position Switch (DPS)', 'Monitors door status', 'Magnetic (recessed/surface), ball switch', 'NC/NO, supervised, gap ≤ 10 mm']
                                    ]
                                },
                                { type: 'keyTerm', term: 'OSDP (Open Supervised Device Protocol)', definition: 'RS-485 based, AES-128 encrypted, bidirectional, supervised (tamper detection), supports smartcard data, replaces Wiegand. OSDP v2 = IEC 60839-11-5. Standard for modern access control.' },
                                { type: 'keyTerm', term: 'Fail-Safe vs Fail-Secure', definition: 'Fail-safe (maglock): power removed = unlocked (fire/life safety). Fail-secure (electric strike): power removed = locked (security). Maglocks require fire alarm release + REX + signage.' },
                                {
                                    type: 'list', items: [
                                        'Maglock: 1200 lb (heavy), 600 lb (standard). Holding force at rated voltage. Bond sensor (monitor armature contact).',
                                        'Electric strike: fail-secure standard. Fire-rated (3 hr) for fire doors. Latch monitor (confirm latch engaged).',
                                        'Crash bar (panic hardware): mechanical egress always. Electrified latch retraction (ELR) for access control integration.',
                                        'Delayed egress: 15 s (standard) or 30 s (approved) delay + alarm. NFPA 101 / NBCC. Signage required: "PUSH UNTIL ALARM SOUNDS".',
                                        'Power: PoE+ (25.5 W) for readers/controllers, 12/24 VDC for locks. UPS/battery backup 4–24 hr.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Access control exam: OSDP vs Wiegand (OSDP = encrypted, supervised, bidirectional). Fail-safe (maglock) vs fail-secure (strike). Fire alarm integration (maglock release). REX types. Delayed egress rules. PoE+ power budgeting.' }
                            ]
                        },
                        {
                            id: 'ch22-s2',
                            title: 'Intrusion Detection & Perimeter Security',
                            content: [
                                { type: 'text', text: 'Intrusion systems detect unauthorized entry. Sensors: motion, contact, glass break, vibration, beam. Panels: zones, partitions, communicators (cellular, IP, dual-path). Monitoring: central station, UL 827.' },
                                {
                                    type: 'table', headers: ['Sensor Type', 'Technology', 'Coverage', 'Application', 'Immunity'], rows: [
                                        ['PIR (Motion)', 'Passive Infrared', '10×10 m to 20×20 m', 'Interior, corridors, rooms', 'Pet immune, dual-tech'],
                                        ['Dual-Tech (PIR+MW)', 'PIR + Microwave', 'Same as PIR', 'Harsh environments, high false alarm risk', 'High (both must trigger)'],
                                        ['Contact (Magnetic)', 'Reed switch', 'Point (door/window)', 'Perimeter, doors, windows', 'High (mechanical)'],
                                        ['Glass Break', 'Acoustic (frequency + pattern)', 'Room (radius 5–9 m)', 'Windows, storefront', 'Test tone verification'],
                                        ['Vibration/Shock', 'Piezoelectric / MEMS', 'Point (wall/window)', 'Forced entry, roof, safe', 'Adjustable sensitivity'],
                                        ['Photoelectric Beam', 'TX/RX infrared', 'Linear (up to 200 m)', 'Perimeter fence, long corridors', 'Heated, hooded, stacked'],
                                        ['Fiber Optic Fence', 'Microbending loss', 'Perimeter (km)', 'High security, pipeline, border', 'Very high, zoned']
                                    ]
                                },
                                { type: 'keyTerm', term: 'End-of-Line (EOL) Resistors', definition: 'Resistors at last device on zone circuit enable panel to detect: normal (resistor value), alarm (short), trouble (open), tamper (wrong value). Single/double/triple EOL for increasing supervision.' },
                                {
                                    type: 'list', items: [
                                        'Panel zoning: each zone = circuit. Partition = group of zones (tenant, area). Arming: away, stay, night.',
                                        'Communicators: POTS (legacy), IP (Ethernet), Cellular (LTE/5G), Dual-path (IP + Cellular) — UL 827 requires dual-path for Grade A.',
                                        'Supervision: polling (IP/cellular) every 60–240 s. Trouble on missed polls.',
                                        'Verification: cross-zoning (2 zones), sequential (sensor + sensor), audio/video — reduces false dispatches.'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'ch22-s3',
                            title: 'CCTV / Video Surveillance Systems',
                            content: [
                                { type: 'text', text: 'IP-based video surveillance dominates. Cameras, NVRs, VMS, storage, and networking. ONVIF compliance, cybersecurity, and privacy compliance (PIPEDA) are critical.' },
                                {
                                    type: 'table', headers: ['Camera Type', 'Form Factor', 'Typical Use', 'Key Features'], rows: [
                                        ['Fixed Bullet', 'Cylindrical, outdoor', 'Perimeter, parking, entry', 'IR, IP67, varifocal, PoE'],
                                        ['Fixed Dome', 'Dome, indoor/outdoor', 'General, retail, office', 'Vandal (IK10), IR, WDR'],
                                        ['PTZ (Pan-Tilt-Zoom)', 'Motorized, outdoor', 'Active monitoring, large area', 'Optical zoom (20–40×), presets, tours, auto-track'],
                                        ['Multi-Sensor', '2–4 sensors in one', '180°/360° coverage', 'Single IP, stitched view, reduced licenses'],
                                        ['Fisheye', 'Single 360° lens', 'Room overview, retail', 'Dewarp (client/NVR), no moving parts'],
                                        ['Thermal', 'Uncooled microbolometer', 'Perimeter, fire detection', 'No light needed, analytics, long range'],
                                        ['License Plate (LPR/ANPR)', 'Specialized shutter/IR', 'Entry/exit, parking', 'High shutter, IR, OCR engine'],
                                        ['Body Worn', 'Wearable', 'Security guards, police', 'Encryption, chain of custody, docking']
                                    ]
                                },
                                { type: 'keyTerm', term: 'ONVIF (Open Network Video Interface Forum)', definition: 'Global standard for IP video interoperability. Profiles: S (streaming/control), G (storage/replay), T (advanced streaming/H.265), M (metadata/analytics), A (access control). Profile S = minimum for camera-NVR.' },
                                { type: 'keyTerm', term: 'WDR (Wide Dynamic Range)', definition: 'Multi-exposure capture combining bright/dark areas. True WDR (sensor-level) > 120 dB. Digital WDR (post-processing) < 60 dB. Essential for entry/exit, loading docks.' },
                                {
                                    type: 'list', items: [
                                        'Resolution: 2 MP (1080p), 4 MP, 5 MP, 8 MP (4K). Higher = more storage, bandwidth.',
                                        'Compression: H.264 (standard), H.265/HEVC (50% bandwidth savings), H.265+ (smart codec).',
                                        'Storage: NVR (local), NAS, Cloud, Edge (SD card). Retention: 30–90 days typical. RAID 5/6 for NVR.',
                                        'Bandwidth: 2 MP H.265 ~ 2–4 Mbps. 4K H.265 ~ 8–15 Mbps. Plan switch uplinks (1 Gbps/10 Gbps).',
                                        'Cybersecurity: change defaults, firmware updates, VLAN isolation, 802.1X, certificates, signed firmware.',
                                        'Analytics: motion, line crossing, intrusion, loitering, face detect, people counting, heat map — edge or server.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'CCTV exam: ONVIF profiles (S, G, T), compression (H.264 vs H.265), WDR (true vs digital), PoE classes (Class 3=15.4W, Class 4=30W, Class 6=60W), storage calc (bitrate × cameras × days), VLAN isolation, analytics types.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 23 — VOICE/DATA/VIDEO (VDV) STRUCTURED CABLING
                {
                    id: 'ch-23',
                    number: 23,
                    title: 'Voice/Data/Video (VDV) Structured Cabling — Copper & Fiber',
                    subtitle: 'Task E-28: Installs/Maintains Communication Systems — Structured Cabling',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch23-s1',
                            title: 'Structured Cabling Standards & Topology',
                            content: [
                                { type: 'text', text: 'Structured cabling (TIA-568, ISO/IEC 11801, TIA-569, TIA-606, TIA-607) provides a vendor-neutral, hierarchical infrastructure for voice, data, video, and building automation. Industrial environments add MICE (Mechanical, Ingress, Climatic, Electromagnetic) ratings.' },
                                {
                                    type: 'table', headers: ['Subsystem', 'Description', 'Max Distance', 'Key Standard'], rows: [
                                        ['Entrance Facility (EF)', 'Service provider demarcation', 'N/A', 'TIA-569'],
                                        ['Equipment Room (ER)', 'Core switches, servers, PBX', 'N/A', 'TIA-569'],
                                        ['Telecommunications Room (TR)', 'Floor distribution, patch panels', 'N/A', 'TIA-569'],
                                        ['Backbone Cabling', 'EF → ER → TR (vertical)', '90 m (copper), 2 km+ (fiber)', 'TIA-568.1'],
                                        ['Horizontal Cabling', 'TR → Work Area (WA)', '90 m (permanent link) + 10 m patch', 'TIA-568.1'],
                                        ['Work Area (WA)', 'Outlet to device', '5 m (patch cord) + 10 m (total)', 'TIA-568.1'],
                                        ['Consolidation Point (CP)', 'Intermediate connection (open office)', 'In horizontal', 'TIA-568.1'],
                                        ['MUTOA', 'Multi-user outlet assembly', 'In horizontal', 'TIA-568.1']
                                    ]
                                },
                                { type: 'keyTerm', term: 'MICE Ratings (TIA-1005)', definition: 'Industrial cabling environmental classification: M (Mechanical: vibration, shock, crush), I (Ingress: dust, water, oil), C (Climatic: temp, humidity, UV), E (Electromagnetic: EMI/RFI). Each 1–3 (1=office, 3=harsh). Cable/jack/connectors rated M1I1C1E1 to M3I3C3E3.' },
                                {
                                    type: 'list', items: [
                                        'Topology: Star (horizontal), hierarchical star (backbone). No daisy-chain for horizontal.',
                                        'Cross-connects: Main (MC), Intermediate (IC), Horizontal (HC). Patch panels at each.',
                                        'Cable management: horizontal/vertical managers, bend radius ≥ 4× cable diameter (Cat 6A), no cinching ties (velcro only).',
                                        'Labeling: TIA-606 — unique ID for each cable, port, panel, pathway. Machine-readable (QR/barcode).',
                                        'Grounding/Bonding: TIA-607 — TMGB (telecom main), TGB (telecom), bonding backbone, racks, cable shields.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Distances: Horizontal = 90 m permanent link + 10 m total patch cords (5 m WA + 5 m TR). Backbone = 90 m (Cat 6/6A), 55 m (Cat 6 10G), 2 km+ (fiber). MICE ratings for industrial. TIA-606 labeling mandatory.' }
                            ]
                        },
                        {
                            id: 'ch23-s2',
                            title: 'Copper Cabling — Categories, Installation & Testing',
                            content: [
                                { type: 'text', text: 'Copper twisted pair categories define performance. Industrial uses shielded (F/UTP, U/FTP, S/FTP) for EMI immunity. Installation practices critical for performance.' },
                                {
                                    type: 'table', headers: ['Category', 'Bandwidth', 'Max Data Rate', 'Shielding Options', 'Typical Use', 'MICE'], rows: [
                                        ['Cat 5e', '100 MHz', '1 Gbps', 'UTP, F/UTP', 'Legacy, voice, basic data', 'M1I1C1E1'],
                                        ['Cat 6', '250 MHz', '1 Gbps (10G @ 55 m)', 'UTP, F/UTP, U/FTP', 'General commercial', 'M1I1C1E1'],
                                        ['Cat 6A', '500 MHz', '10 Gbps (100 m)', 'F/UTP, U/FTP, S/FTP', 'New installs, data centers, industrial', 'M2I2C2E2+'],
                                        ['Cat 7', '600 MHz', '10 Gbps', 'S/FTP (only)', 'European, high EMI', 'M3I3C3E3'],
                                        ['Cat 7A', '1000 MHz', '40 Gbps (50 m)', 'S/FTP', 'Specialized', 'M3I3C3E3'],
                                        ['Cat 8', '2000 MHz', '25/40 Gbps (30 m)', 'S/FTP', 'Data center, switch-to-switch', 'M3I3C3E3']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Shielding Types', definition: 'U/UTP = unshielded. F/UTP = foil overall (FTP). U/FTP = foil each pair (PiMF). S/FTP = braid overall + foil each pair. SF/UTP = braid + foil overall. Industrial = F/UTP minimum, U/FTP or S/FTP preferred.' },
                                {
                                    type: 'list', items: [
                                        'Installation: max pull tension 110 N (25 lbf), min bend radius 4× OD (Cat 6A), no kinks, no tight bundles, maintain pair twist to within 13 mm of termination.',
                                        'Termination: T568A or T568B (consistent!). T568B common US/Canada. Jacks: tool-less or punch-down (110/Krone). Shielded jacks require 360° ground contact.',
                                        'Grounding shield: one end (typically TR) for ground loop prevention, or both ends with equipotential bonding (TIA-607).',
                                        'Testing: certification (Level III/IV) — wiremap, length, insertion loss, NEXT, PSNEXT, ACR-F, PSACR-F, return loss, propagation delay, delay skew. Alien crosstalk (Cat 6A/7/8).'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Cat 6A = 10G to 100 m, requires alien crosstalk test. Shielding: F/UTP (overall foil) most common industrial. Termination: maintain twist, 360° shield ground. T568B standard. Testing: certification tester (DSX, CertiFiber) — not just continuity.' }
                            ]
                        },
                        {
                            id: 'ch23-s3',
                            title: 'Fiber Optic Cabling — Types, Connectors & Testing',
                            content: [
                                { type: 'text', text: 'Fiber provides bandwidth, distance, and immunity for backbone, horizontal (fiber-to-the-desk), and industrial. Single-mode (OS2) and multimode (OM1–OM5) each have applications.' },
                                {
                                    type: 'table', headers: ['Fiber Type', 'Core/Cladding', 'Bandwidth (MHz·km)', 'Max Distance (10G)', 'Max Distance (40/100G)', 'Jacket Color'], rows: [
                                        ['OS2 (SM)', '9/125 µm', 'N/A', '40 km (LR), 80 km (ER)', '10 km (FR), 40 km (LR4)', 'Yellow'],
                                        ['OM1 (MM)', '62.5/125 µm', '200 (850 nm)', '33 m', 'N/A', 'Orange'],
                                        ['OM2 (MM)', '50/125 µm', '500 (850 nm)', '82 m', 'N/A', 'Orange'],
                                        ['OM3 (MM)', '50/125 µm', '2000 (850 nm)', '300 m', '100 m (SR4)', 'Aqua'],
                                        ['OM4 (MM)', '50/125 µm', '4700 (850 nm)', '400 m', '150 m (SR4)', 'Aqua/Violet'],
                                        ['OM5 (WBMMF)', '50/125 µm', '4700+ (850–953 nm)', '400 m', '150 m (SWDM4)', 'Lime Green']
                                    ]
                                },
                                { type: 'keyTerm', term: 'WBMMF (Wideband Multimode Fiber)', definition: 'OM5 — optimized for SWDM (Short Wavelength Division Multiplexing) at 850, 880, 910, 940 nm. Enables 4× capacity over single fiber pair (100G/400G). Backward compatible with OM3/OM4.' },
                                {
                                    type: 'table', headers: ['Connector', 'Ferrule', 'Polish', 'Typical Loss', 'Application'], rows: [
                                        ['LC', '1.25 mm', 'UPC/APC', '0.15–0.3 dB', 'High density, SFP/QSFP, patch panels'],
                                        ['SC', '2.5 mm', 'UPC/APC', '0.15–0.3 dB', 'Datacom, CATV, patch panels'],
                                        ['ST', '2.5 mm', 'UPC', '0.2–0.5 dB', 'Legacy MM, industrial'],
                                        ['FC', '2.5 mm', 'UPC/APC', '0.2–0.5 dB', 'Vibration, test equipment, SM'],
                                        ['MPO/MTP', 'MT ferrule (12/24)', 'APC (SM), PC (MM)', '0.35–0.75 dB', 'High density, 40G/100G/400G, trunk'],
                                        ['CS/SN', '1.25 mm (dual)', 'APC', '0.15–0.3 dB', 'VSFF (very small form factor), 400G']
                                    ]
                                },
                                {
                                    type: 'list', items: [
                                        'Termination: fusion splice (preferred, <0.05 dB), mechanical splice (~0.2 dB), field-installable connectors (no-polish, ~0.5 dB).',
                                        'Cleaning: ALWAYS clean before mate. One-click cleaners, lint-free wipes + 99% IPA. Inspect (400×) — pass/fail zones.',
                                        'Testing: Tier 1 (OLTS — loss/length), Tier 2 (OTDR — events, splice loss, reflectance). Tier 1 required, Tier 2 for backbone/troubleshooting.',
                                        'Loss budget: connectors (0.3–0.5 dB each), splices (0.05–0.1 dB), cable (0.35 dB/km @ 1310 SM, 3 dB/km @ 850 MM), margin (3 dB).'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Fiber exam: OS2 = single-mode (yellow, 9 µm). OM3/OM4/OM5 = laser-optimized MM (aqua/lime). OM5 = SWDM. Connectors: LC (dense), MPO/MTP (trunk/40G+). Polish: UPC (PC) for MM, APC (angled) for SM (lower reflectance). Testing: Tier 1 (OLTS) mandatory, Tier 2 (OTDR) for backbone. Loss budget calc.' }
                            ]
                        },
                        {
                            id: 'ch23-s4',
                            title: 'PoE (Power over Ethernet) & Industrial Networking',
                            content: [
                                { type: 'text', text: 'PoE delivers power + data over twisted pair. IEEE 802.3 standards. Industrial switches add ruggedization, redundancy, and deterministic protocols.' },
                                {
                                    type: 'table', headers: ['Standard', 'Type', 'PSE Power', 'PD Power', 'Voltage', 'Pairs', 'Applications'], rows: [
                                        ['802.3af', 'PoE (Type 1)', '15.4 W', '12.95 W', '44–57 V', '2 (Alt A/B)', 'VoIP, basic cameras, WAP'],
                                        ['802.3at', 'PoE+ (Type 2)', '30 W', '25.5 W', '50–57 V', '2 (Alt A/B)', 'PTZ, dual-radio WAP, video phone'],
                                        ['802.3bt', 'PoE++ Type 3', '60 W', '51 W', '50–57 V', '4', 'High-power WAP, LED lighting, displays'],
                                        ['802.3bt', 'PoE++ Type 4', '90 W', '71.3 W', '52–57 V', '4', 'PTZ heater, industrial sensors, access control']
                                    ]
                                },
                                { type: 'keyTerm', term: 'PSE / PD', definition: 'PSE (Power Sourcing Equipment) = switch/injector providing power. PD (Powered Device) = camera, phone, WAP receiving power. Classification (LLDP or hardware) negotiates power level.' },
                                {
                                    type: 'list', items: [
                                        'PoE budget: total switch PoE budget ÷ per-port power = max ports. Plan for future. PoE+ (30 W) common baseline.',
                                        '4-pair PoE (802.3bt): uses all 4 pairs, reduces current per pair, lower loss, supports Type 3/4. Requires Cat 6A for 90 W (heat).',
                                        'Industrial switches: DIN rail, -40°C to +75°C, vibration/shock (IEC 60068), EMC (IEC 61000-6-2), redundancy (ring < 20 ms, PRP/HSR = 0 ms).',
                                        'Industrial protocols: EtherNet/IP (CIP), PROFINET (RT/IRT), EtherCAT, Modbus TCP, CC-Link IE, Powerlink — real-time, deterministic.',
                                        'Network design: Purdue Model (Level 0–4), VLANs, firewalls, DMZ, NTP/PTP (IEEE 1588) for time sync.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'PoE exam: 802.3af/at/bt power levels, 2-pair vs 4-pair, classification (Class 0–8), LLDP-MED, heat dissipation (Cat 6A for Type 4). Industrial: DIN rail, temp range, ring redundancy (MRP, ERPS < 20 ms), PRP/HSR (0 ms), protocols (EtherNet/IP, PROFINET), Purdue Model.' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'part-6',
            number: 6,
            title: 'Installs/Maintains Process Control Systems (MWA F)',
            description: 'Covers process instrumentation, control valves, PLC/DCS/SCADA systems, safety instrumented systems (SIS), analyzer systems, and industrial communication networks. This MWA represents 17 questions (17% of the total exam).',
            weight: '17 questions (17% of Total Exam)',

            chapters: [
                // CHAPTER 24 — PROCESS INSTRUMENTATION: SENSORS & TRANSMITTERS
                {
                    id: 'ch-24',
                    number: 24,
                    title: 'Process Instrumentation — Sensors, Transmitters & Signal Conditioning',
                    subtitle: 'Task F-29: Installs/Maintains Process Control Instrumentation',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch24-s1',
                            title: 'Pressure, Level, Flow & Temperature Measurement',
                            content: [
                                { type: 'text', text: 'Process instrumentation converts physical variables (pressure, level, flow, temperature) into standardized electrical signals (4–20 mA, HART, FOUNDATION Fieldbus, PROFIBUS PA). Proper selection, installation, and calibration are critical for control loop performance.' },
                                {
                                    type: 'table', headers: ['Variable', 'Primary Element / Sensor', 'Transmitter Type', 'Key Specs', 'Typical Range'], rows: [
                                        ['Pressure', 'Bourdon tube, diaphragm, capacitive, piezoresistive', 'DP (differential), Gauge, Absolute, Multivariable', 'Span, accuracy (±0.05–0.1% URL), turndown (100:1), static pressure limit', '0–25 mbar to 0–700 bar'],
                                        ['Level (Direct)', 'Float, displacer, radar, ultrasonic, laser, capacitive', 'Level transmitter (LT)', 'Range, dielectric constant, process temp/pressure, foam/turbulence', '0–10 m to 0–100 m'],
                                        ['Level (Inferential)', 'DP transmitter (wet leg, dry leg, capillary)', 'DP transmitter', 'Density compensation, temp compensation, zero suppression/elevation', 'Interface, pressurized tanks'],
                                        ['Flow (DP)', 'Orifice, Venturi, nozzle, wedge, V-cone, Annubar', 'DP transmitter + flow computer', 'Beta ratio, Reynolds #, expansion factor, density compensation', 'Line size 1/2"–120"'],
                                        ['Flow (Velocity)', 'Magnetic, vortex, ultrasonic (transit-time/Doppler), turbine, Coriolis', 'Integral or remote transmitter', 'Conductivity (mag), viscosity (Coriolis), straight run, turndown', '0.1–12 m/s (mag), 0–∞ (Coriolis)'],
                                        ['Flow (Mass)', 'Coriolis, thermal mass', 'Integral transmitter', 'Density, temp, viscosity, pressure drop, zero stability', '0–500,000 kg/h'],
                                        ['Temperature', 'RTD (Pt100, Pt1000), Thermocouple (J, K, T, E, N, R, S, B)', 'Temp transmitter (TT) — head mount, rail mount', 'RTD: 3/4-wire, TC: cold junction comp, linearization, burnout', '-200°C to +1600°C']
                                    ]
                                },
                                { type: 'keyTerm', term: '4–20 mA Current Loop', definition: 'Industry standard analog signal: 4 mA = 0% (live zero), 20 mA = 100%. Powered by 24 VDC supply. Loop resistance ≤ (Vsupply - 10 V) / 0.02 A. HART digital signal superimposed (1200/2200 Hz FSK).' },
                                { type: 'keyTerm', term: 'Turndown Ratio', definition: 'Ratio of upper range limit (URL) to minimum calibrated span. 100:1 turndown = transmitter can be calibrated to 1% of URL. High turndown = fewer spare transmitters, but accuracy degrades at low end.' },
                                { type: 'callout', style: 'exam-tip', text: 'Know sensor principles: DP flow = √(ΔP) relationship (square root extraction in transmitter/DCS). Mag flow = Faraday\'s law (conductive fluids only). Coriolis = direct mass flow (density + temp). Vortex = Strouhal number (shedding frequency ∝ velocity). RTD = resistance vs temp (linear-ish). TC = Seebeck voltage (non-linear, needs CJC).' }
                            ]
                        },
                        {
                            id: 'ch24-s2',
                            title: 'Transmitter Installation, Calibration & Diagnostics',
                            content: [
                                { type: 'text', text: 'Proper installation prevents measurement errors. Calibration ensures accuracy. Smart transmitter diagnostics (HART, FOUNDATION Fieldbus) provide predictive maintenance data.' },
                                {
                                    type: 'list', items: [
                                        'Pressure: impulse lines — slope 1:10 toward process (gas) or transmitter (liquid). Condensate pots for steam. Seal systems (diaphragm, capillary) for corrosive/high temp. Zero/span check with manifold.',
                                        'Level (radar): nozzle length < 10× diameter, avoid obstructions, stilling well for foam/turbulence. Guided wave radar (GWR) for low dielectric, interface.',
                                        'Flow (DP): straight run (upstream 10–40D, downstream 5–10D per ISO 5167). Orifice plate orientation (drain/vent hole). Flange taps vs corner taps vs D-D/2.',
                                        'Flow (mag): grounding rings (plastic pipe), electrode material, straight run (5D up, 3D down), full pipe, conductivity > 5 µS/cm.',
                                        'Temperature: thermowell (wake frequency calculation per ASME PTC 19.3 TW), immersion depth > 10× diameter, spring-loaded for contact, extension head for ambient isolation.',
                                        'Cable: shielded twisted pair (STP), grounded at one end (typically control room). Intrinsic safety (IS) barriers for hazardous areas.'
                                    ]
                                },
                                {
                                    type: 'table', headers: ['Calibration Task', 'Tool', 'Procedure', 'Acceptance'], rows: [
                                        ['Pressure Zero/Span', 'Calibrator (Druck, Fluke 754)', 'Apply 0%, 25%, 50%, 75%, 100% — up/down', '±0.1% span (typical)'],
                                        ['DP Flow Square Root', 'Calibrator + flow calc', 'Verify √(ΔP) at 5+ points', '±0.5% flow'],
                                        ['Level Radar', 'Target / known level', 'Compare LT reading to actual', '±2 mm or ±0.1%'],
                                        ['Temperature RTD', 'Decade box / calibrator', 'Simulate resistance at 3+ points', '±0.1°C (Class A)'],
                                        ['Temperature TC', 'mV source / calibrator', 'Simulate mV with CJC', '±0.5°C'],
                                        ['HART Config', 'HART communicator (475, 375)', 'Verify tag, range, units, damping, linearization', 'Matches datasheet'],
                                        ['FF/PB Config', 'NI-FBUS / Profiboard', 'Verify block config, scheduling, linking', 'Control loop functional']
                                    ]
                                },
                                { type: 'keyTerm', term: 'HART (Highway Addressable Remote Transducer)', definition: 'Digital communication (1200/2200 Hz FSK) superimposed on 4–20 mA. Point-to-point (address 0) or multidrop (address 1–15, 4 mA fixed). Commands: universal, common practice, device-specific. DD/DTM for integration.' },
                                { type: 'callout', style: 'exam-tip', text: 'Calibration: As-Found / As-Left documentation. 5-point up/down for hysteresis. Square root extraction verification for DP flow. HART: multivariable transmitters (P, T, flow calc in one). Diagnostics: plugged impulse line detection, loop integrity, sensor drift alert.' }
                            ]
                        },
                        {
                            id: 'ch24-s3',
                            title: 'Control Valves & Final Control Elements',
                            content: [
                                { type: 'text', text: 'Control valves are the "hands" of the control loop. Selection, sizing, characterization, and maintenance directly impact control quality. ISA 75, IEC 60534 standards apply.' },
                                {
                                    type: 'table', headers: ['Valve Type', 'Flow Characteristic', 'Rangeability', 'Typical Application', 'Shutoff Class'], rows: [
                                        ['Globe (Single Seat)', 'Equal %, Linear, Quick Open', '30:1 – 50:1', 'General throttling, high ΔP', 'IV (metal), VI (soft)'],
                                        ['Globe (Double Seat)', 'Linear', '50:1', 'High flow, low ΔP, temp', 'III (leakage higher)'],
                                        ['Angle', 'Equal %, Linear', '30:1', 'High ΔP, flashing, coking', 'IV, VI'],
                                        ['Ball (Segmented/V-port)', 'Equal % (modified)', '100:1 – 300:1', 'Slurries, fibrous, high capacity', 'IV, VI'],
                                        ['Butterfly (High Performance)', 'Linear / Equal %', '50:1 – 100:1', 'Large lines, low ΔP, HVAC', 'VI (soft), IV (metal)'],
                                        ['Rotary Plug / Eccentric', 'Equal %', '100:1', 'Severe service, erosion', 'IV, VI'],
                                        ['Diaphragm / Pinch', 'Linear', '20:1', 'Corrosive, abrasive, sterile', 'VI'],
                                        ['Three-Way (Mixing/Diverting)', 'Linear', '20:1', 'Temperature control, bypass', 'IV']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Cv (Flow Coefficient)', definition: 'US gallons/min of 60°F water through valve at 1 psi ΔP. Kv = Cv / 1.156 (m³/h at 1 bar). Sizing: Cv = Q × √(SG/ΔP) for liquid; Cv = Q / (1360 × √(ΔP × P₁)) for gas (simplified).' },
                                { type: 'keyTerm', term: 'Inherent vs Installed Characteristic', definition: 'Inherent = valve trim curve at constant ΔP. Installed = system curve (ΔP varies with flow). Equal % trim → linear installed (if valve takes ~1/3 system ΔP at max flow). Linear trim → quick-opening installed.' },
                                {
                                    type: 'list', items: [
                                        'Actuators: Pneumatic (spring-diaphragm, piston), Electric (motor, solenoid), Hydraulic, Electro-hydraulic. Pneumatic dominant in process — fail-safe action (air-to-open / air-to-close).',
                                        'Positioners: Pneumatic (force balance), Electro-pneumatic (I/P + positioner — 4–20 mA input), Digital (HART, FF, Profibus) — diagnostics, characterization, split range.',
                                        'Fail-safe: Air-to-open (fail closed) = ATO/FC. Air-to-close (fail open) = ATC/FO. Determined by process safety (fail to safe state).',
                                        'Accessories: Limit switches, solenoid valves, volume boosters, filter regulators, lock-up valves, position transmitters (4–20 mA feedback).',
                                        'Maintenance: seat leakage test (Class IV = 0.01% Cv, Class VI = bubbles), stem packing (live-loaded PTFE, graphite), actuator bench set, positioner calibration, partial stroke testing (PST) for ESD valves.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Cavitation: liquid pressure drops below vapor pressure → bubbles collapse → noise, vibration, erosion. Predict with sigma (σ) = (P₁ - Pv) / (P₁ - P₂). σ < 1.0 = cavitation likely. Solutions: multi-stage trim, DRAG, cavitation control trim.' },
                                { type: 'callout', style: 'exam-tip', text: 'Valve sizing: Cv calculation (liquid, gas, steam). Characteristic selection: equal % for most throttling (constant gain). Fail-safe per process safety. Positioner = digital (HART/FF) with diagnostics. Class IV vs VI shutoff. Cavitation/flashing prediction. PST for SIS valves.' }
                            ]
                        }
                    ]
                },

                // CHAPTER 25 — PLC, DCS & SCADA SYSTEMS
                {
                    id: 'ch-25',
                    number: 25,
                    title: 'PLC, DCS & SCADA — Architecture, Programming & Integration',
                    subtitle: 'Task F-30: Installs/Maintains Process Control Systems (PLC/DCS/SCADA)',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch25-s1',
                            title: 'PLC Architecture & Hardware',
                            content: [
                                { type: 'text', text: 'Programmable Logic Controllers (PLCs) are the backbone of discrete and hybrid process control. Modern PACs (Programmable Automation Controllers) blur the line with DCS. IEC 61131-3 standardizes programming languages.' },
                                {
                                    type: 'table', headers: ['Component', 'Function', 'Key Specifications', 'Major Vendors'], rows: [
                                        ['CPU / Processor', 'Executes logic, manages I/O', 'Scan time (1–50 ms), memory (MB), instruction set, redundancy', 'Rockwell (ControlLogix), Siemens (S7-1500), Schneider (M580), ABB (AC500), Mitsubishi (MELSEC)'],
                                        ['Power Supply', 'Converts AC/DC to 5/24 VDC', 'Redundant, hold-up time, diagnostic', ''],
                                        ['Chassis / Backplane', 'Physical + electrical interconnect', 'High-speed bus (PCIe, proprietary), hot-swap', ''],
                                        ['I/O Modules (Discrete)', 'DI/DO: 24 VDC, 120/230 VAC', 'Density (8/16/32/64 pt), isolation, diagnostics, timestamping', ''],
                                        ['I/O Modules (Analog)', 'AI/AO: 4–20 mA, ±10 V, RTD, TC, HART', 'Resolution (16–24 bit), accuracy, channel isolation, HART pass-through', ''],
                                        ['I/O Modules (Specialty)', 'High-speed counter, motion, weighing, serial', 'Encoder input, SSI, PWM, stepper/servo', ''],
                                        ['Communication', 'EtherNet/IP, PROFINET, Modbus TCP, OPC UA', 'Ports, protocols, determinism (CIP Motion, IRT), security', ''],
                                        ['Redundancy', 'CPU, power, network, I/O', 'Hot standby (1oo2), voting (2oo3), bumpless transfer', '']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Scan Cycle', definition: 'PLC repetitive sequence: 1) Input scan (read physical inputs), 2) Program execution (solve logic), 3) Output scan (write physical outputs), 4) Housekeeping (comms, diagnostics, clock). Typical 1–50 ms. Deterministic for motion/process.' },
                                { type: 'keyTerm', term: 'IEC 61131-3 Languages', definition: 'LD (Ladder Diagram) — relay logic, dominant NA. ST (Structured Text) — Pascal-like, complex math. FBD (Function Block Diagram) — graphical, process. SFC (Sequential Function Chart) — state machines. IL (Instruction List) — assembly-like (deprecated). CFC (Continuous Function Chart) — DCS-style.' },
                                {
                                    type: 'list', items: [
                                        'I/O addressing: rack/slot/channel (Rockwell), byte.bit (Siemens), tag-based (ControlLogix, M580). Tag-based = symbolic, scalable.',
                                        'Analog scaling: raw counts (0–32767) → engineering units. Formula: EU = (Raw - RawMin) × (EUMax - EUMin) / (RawMax - RawMin) + EUMin.',
                                        'HART on analog I/O: multiplexer or built-in HART modem per channel. DD/DTM for device config in PLC software.',
                                        'Safety PLC: SIL 2/3 certified (IEC 61508), dual-core lockstep, safety I/O, safe communication (CIP Safety, PROFIsafe, FSoE). Separate safety program.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'PLC exam: scan cycle phases, IEC 61131-3 languages (LD, ST, FBD, SFC), tag-based vs fixed addressing, analog scaling formula, HART integration, redundancy types (CPU, network, I/O), safety PLC vs standard PLC.' }
                            ]
                        },
                        {
                            id: 'ch25-s2',
                            title: 'DCS Architecture & Function Blocks',
                            content: [
                                { type: 'text', text: 'Distributed Control Systems (DCS) are designed for continuous process control with integrated engineering, operations, and maintenance. Controllers are distributed; database is centralized. Vendors: Emerson (DeltaV), Honeywell (Experion), Yokogawa (CENTUM), ABB (800xA), Schneider (Foxboro).' },
                                {
                                    type: 'table', headers: ['Component', 'Function', 'Key Features'], rows: [
                                        ['Controller', 'PID, logic, sequence', 'Redundant, hot-swap, function blocks, control execution (100–500 ms)'],
                                        ['I/O Subsystem', 'Marshalling + fieldbus', 'Characterization modules (CHARM), intrinsically safe, HART/FF/PB, hot-swap'],
                                        ['Engineering Station', 'Configuration, logic, graphics', 'Single database, version control, bulk edit, simulation'],
                                        ['Operator Station', 'HMI, alarm, trend, report', 'Situational awareness, alarm management (ISA 18.2), multi-monitor'],
                                        ['Historian', 'Time-series data', 'Compression, retrieval, OPC UA, SQL, analytics'],
                                        ['Network', 'Control + plant LAN', 'Redundant (PRP, RSTP), deterministic, segregated (Level 1/2/3)'],
                                        ['Advanced Applications', 'MPC, RTO, batch, alarm mgmt', 'Model-based, optimization, ISA 88/95']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Function Block (FB)', definition: 'Reusable algorithm with inputs, outputs, parameters, internal state. Standard (PID, AI, AO, DI, DO, ARITH, SELECT) and custom. Connected via links (wires). Execution order determined by link topology. Foundation of DCS configuration.' },
                                { type: 'keyTerm', term: 'Control Execution Rate', definition: 'DCS controllers execute at fixed rates (e.g., 100 ms, 500 ms, 1 s). Fast loops (flow, pressure) = 100 ms. Slow loops (temp, level, composition) = 500 ms–1 s. Scheduled, deterministic.' },
                                {
                                    type: 'list', items: [
                                        'PID Block: modes (MAN, AUTO, CAS, RCAS, ROUT, LO, HI, OVRD), gain scheduling, anti-reset windup, derivative kick suppression, bump-less transfer.',
                                        'Cascade: primary (master) output → secondary (slave) setpoint. Secondary faster (flow), primary slower (temp/level).',
                                        'Ratio: wild stream × ratio = controlled stream setpoint. Feedforward: measured disturbance → FF gain/lead-lag → PID output.',
                                        'Alarm management: ISA 18.2 — rationalization, prioritization, suppression, shelving, flood control, KPIs (alarm rate < 1/10 min).',
                                        'Batch: ISA 88 — procedural control (unit, operation, phase). Recipe management, equipment phases, arbitration.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'DCS exam: function block concept, execution rates, PID modes (especially CAS/RCAS), cascade/ratio/feedforward, alarm management (ISA 18.2), batch (ISA 88), historian, redundancy, marshalling (CHARM).' }
                            ]
                        },
                        {
                            id: 'ch25-s3',
                            title: 'SCADA Systems & Historian',
                            content: [
                                { type: 'text', text: 'Supervisory Control and Data Acquisition (SCADA) covers wide-area monitoring/control (pipelines, water, power, rail). Architecture: field devices (RTU/PLC) → comms (radio, cellular, fiber) → SCADA server → HMI/clients. IEC 60870, DNP3, Modbus protocols.' },
                                {
                                    type: 'table', headers: ['Component', 'Function', 'Key Specs'], rows: [
                                        ['RTU (Remote Terminal Unit)', 'Rugged, low power, comms', 'Multiple protocols (DNP3, IEC 60870, Modbus), store-forward, solar/battery'],
                                        ['SCADA Server', 'Data acquisition, alarm, control', 'Redundant (hot/hot), OPC UA, SQL historian, web clients'],
                                        ['HMI / Client', 'Operator interface', 'Thin client (web), thick client, mobile, multi-screen'],
                                        ['Communication', 'WAN field network', 'Licensed radio (UHF/VHF), cellular (4G/5G/LPWAN), fiber, microwave, VSAT'],
                                        ['Historian', 'Long-term data storage', 'Compression (swing-door, Box-Car), retrieval, analytics, cloud sync'],
                                        ['Protocols', 'Interoperability', 'DNP3 (Level 2+), IEC 60870-5-101/104, Modbus TCP/RTU, MQTT, OPC UA']
                                    ]
                                },
                                { type: 'keyTerm', term: 'DNP3 (Distributed Network Protocol)', definition: 'SCADA standard (IEEE 1815). Master/outstation. Object-based (binary input, analog input, counter, etc.). Time-stamped events, class polling (Class 0,1,2,3), unsolicited responses, secure authentication (DNP3 SA v5).' },
                                { type: 'keyTerm', term: 'Report by Exception (RBE)', definition: 'RTU only sends data when change exceeds deadband or event occurs. Reduces bandwidth. Combined with time-stamped events for sequence of events (SOE) recording.' },
                                {
                                    type: 'list', items: [
                                        'SCADA vs DCS: SCADA = wide area, slow comms, RTU-centric, RBE, store-forward. DCS = plant area, fast comms, controller-centric, continuous scan, function blocks.',
                                        'Redundancy: server (hot standby), network (dual path), RTU (dual comms). Failover < 1 s.',
                                        'Cybersecurity: Purdue Model, firewalls, DMZ, 802.1X, certificates, patch management, IEC 62443.',
                                        'Historian compression: lossless (integer), lossy (floating point — swing door, Box-Car). Typical 10:1–100:1 compression.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'SCADA exam: RTU vs PLC, DNP3/IEC 60870/Modbus, RBE + SOE, store-forward, redundancy, cybersecurity (Purdue Model), historian compression, wide-area comms (radio, cellular, satellite).' }
                            ]
                        }
                    ]
                },

                // CHAPTER 26 — SAFETY INSTRUMENTED SYSTEMS (SIS) & ANALYZERS
                {
                    id: 'ch-26',
                    number: 26,
                    title: 'Safety Instrumented Systems (SIS) & Process Analyzers',
                    subtitle: 'Task F-31: Installs/Maintains Safety Systems & Analyzers',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch26-s1',
                            title: 'SIS Fundamentals — IEC 61508 / 61511',
                            content: [
                                { type: 'text', text: 'Safety Instrumented Systems (SIS) are separate from BPCS (Basic Process Control System). They detect hazardous conditions and take the process to a safe state. IEC 61508 (equipment), IEC 61511 (application), ISA 84 standards govern design, installation, and maintenance.' },
                                {
                                    type: 'table', headers: ['SIL (Safety Integrity Level)', 'PFDavg (Low Demand)', 'RRF (Risk Reduction Factor)', 'Typical Architecture'], rows: [
                                        ['SIL 1', '0.1 – 0.01', '10 – 100', 'Single channel (1oo1), diagnostic'],
                                        ['SIL 2', '0.01 – 0.001', '100 – 1,000', 'Redundant (1oo2, 2oo3), high diagnostic'],
                                        ['SIL 3', '0.001 – 0.0001', '1,000 – 10,000', '2oo3, 1oo2D, extensive diagnostic, diversity'],
                                        ['SIL 4', '< 0.0001', '> 10,000', 'Rare in process (nuclear, rail)']
                                    ]
                                },
                                { type: 'keyTerm', term: 'SIF (Safety Instrumented Function)', definition: 'A single safety function with defined SIL: Sensor(s) → Logic Solver → Final Element(s). Each SIF has a Safety Requirement Specification (SRS). Example: High-high level → close inlet valve (SIL 2).' },
                                { type: 'keyTerm', term: 'PFDavg (Average Probability of Failure on Demand)', definition: 'Probability SIF fails to act when required. Calculated per IEC 61508: λDU (dangerous undetected failure rate), TI (proof test interval), DC (diagnostic coverage), β (common cause factor). PFDavg ≈ λDU × TI / 2 (for 1oo1).' },
                                {
                                    type: 'list', items: [
                                        'SIS Architecture: 1oo1 (single), 1oo2 (one of two — either acts), 2oo3 (two of three — voting), 1oo2D (1oo2 with high diagnostic). MooN notation.',
                                        'Logic Solver: Safety PLC (Triconex, HIMA, Siemens Safety, Rockwell GuardLogix, Schneider Tricon). Certified to SIL 3. Separate from BPCS.',
                                        'Final Elements: Shutdown valves (ESDV), blowdown valves, fire & gas (F&G) actuators. Partial Stroke Testing (PST) online. Full stroke test at shutdown.',
                                        'Sensors: Redundant (1oo2, 2oo3). Smart transmitters with diagnostics (HART/FF). Proof testing required per SRS (typically 6–12 months).',
                                        'BPCS vs SIS: Independence (physical, functional, personnel). No shared I/O, logic solver, network, power. Common cause failure (β) minimized.',
                                        'Safety Lifecycle: Hazard analysis (HAZOP) → SIL allocation (LOPA) → SRS → Design → Installation → Commissioning → Operation/Maintenance (proof test) → Modification → Decommission.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'SIS MUST be independent of BPCS. No shared: sensors, logic solver, final elements, network, power supply, cabinet, personnel (if possible). Common cause factor β = 1–5% (good design) to 10–20% (poor). Proof testing interval directly affects PFDavg.' },
                                { type: 'callout', style: 'exam-tip', text: 'SIS exam: SIL levels + PFDavg/RRF, MooN architectures (1oo1, 1oo2, 2oo3, 1oo2D), SIF components, safety lifecycle (HAZOP → LOPA → SRS), proof testing, partial stroke testing (PST), independence from BPCS, IEC 61508/61511/ISA 84.' }
                            ]
                        },
                        {
                            id: 'ch26-s2',
                            title: 'Fire & Gas Systems (F&G)',
                            content: [
                                { type: 'text', text: 'Fire & Gas (F&G) systems detect hydrocarbon releases, fire, and smoke. Often SIL-rated. Integrated with ESD, HVAC shutdown, deluge, and evacuation. Standards: IEC 60079-29-1 (gas), NFPA 72 (fire), ISA 84.' },
                                {
                                    type: 'table', headers: ['Detector Type', 'Principle', 'Gas/Fire Detected', 'Typical Spacing', 'Voting'], rows: [
                                        ['Catalytic Bead (Pellistor)', 'Oxidation on heated bead', 'Combustible (LEL)', '5–7.5 m radius', '1oo2, 2oo3'],
                                        ['Infrared (IR) Point', 'IR absorption at C-H bond', 'Hydrocarbon (CH₄, C₃H₈)', '5–10 m radius', '1oo2, 2oo3'],
                                        ['IR Open Path', 'IR beam absorption', 'Hydrocarbon cloud', 'Up to 200 m path', '1oo2'],
                                        ['Ultrasonic Gas Leak', 'Ultrasound from leak', 'High-pressure gas leak', '10–20 m radius', '1oo2'],
                                        ['H₂S (Electrochemical)', 'Chemical reaction', 'Hydrogen sulfide', 'Per area classification', '1oo2, 2oo3'],
                                        ['UV/IR Flame', 'UV + IR radiation', 'Hydrocarbon fire', 'Up to 60 m', '1oo2, 2oo3'],
                                        ['Multi-Spectrum IR Flame', '3+ IR wavelengths', 'All fire types, false alarm immune', 'Up to 100 m', '1oo2'],
                                        ['Heat / Smoke', 'Thermal / photoelectric', 'Fire (area)', 'Per NFPA 72', '1oo2']
                                    ]
                                },
                                { type: 'keyTerm', term: 'F&G Voting', definition: 'Logic to prevent false trips: 1oo2 = either detector trips. 2oo3 = any two of three. Zone-based: detectors grouped by area. Actions: Alarm (local), Alert (control room), Trip (ESD, deluge, HVAC shutdown).' },
                                {
                                    type: 'list', items: [
                                        'Gas mapping: CFD modeling for detector placement. Coverage target: 90% of release scenarios detected.',
                                        'F&G controller: Safety PLC or dedicated (e.g., Det-Tronics, General Monitors, Sierra Monitor). SIL 2 typical.',
                                        'Integration: ESD (process shutdown), Deluge (water spray), HVAC (dampers, purge), Evacuation (horns/strobes).',
                                        'Maintenance: Bump test (gas), calibration, lens cleaning (optical), proof test per SRS.'
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'ch26-s3',
                            title: 'Process Analyzer Systems',
                            content: [
                                { type: 'text', text: 'Process analyzers measure composition, quality, and physical properties. Critical for product quality, environmental compliance, and process optimization. Sample handling is the #1 reliability issue.' },
                                {
                                    type: 'table', headers: ['Analyzer Type', 'Principle', 'Measurement', 'Typical Application', 'Sample System'], rows: [
                                        ['Gas Chromatograph (GC)', 'Separation + detection (FID, TCD)', 'C1–C6+, BTX, H₂S, CO₂', 'Gas custody transfer, refinery', 'Fast loop, filter, regulator, vaporizer'],
                                        ['Oxygen (Zirconia / Paramagnetic)', 'ZrO₂ cell / magnetic susceptibility', 'O₂ % (ppm to 100%)', 'Combustion, inerting, purity', 'Filter, cooler, pump'],
                                        ['Moisture (H₂O)', 'Al₂O₃, TDLAS, chilled mirror', 'ppmv / dew point', 'Gas drying, pipeline', 'Bypass, filter, coalescer'],
                                        ['H₂S / SO₂', 'UV fluorescence, electrochemical', 'ppm', 'Amine, sulfur recovery', 'Filter, scrubber (SO₂)'],
                                        ['pH / Conductivity', 'Glass electrode / toroidal', 'pH, µS/cm', 'Water, boiler, cooling', 'Flow cell, temp comp'],
                                        ['Density / Viscosity', 'Coriolis, vibrating element', 'kg/m³, cP', 'Crude, products, blending', 'Slipstream, temp control'],
                                        ['Turbidity / TOC', 'Light scatter / UV oxidation', 'NTU, ppm C', 'Water, effluent', 'Strainer, flow cell'],
                                        ['Spectroscopy (NIR, Raman, UV-Vis)', 'Molecular vibration/electronic', 'Multiple components', 'Reaction monitoring, blending', 'Fiber optic probe, flow cell'],
                                        ['Gas Chromatograph (Process GC)', 'Micro-GC, fast GC', 'C1–C10, H₂, He, O₂, N₂', 'Continuous process control', 'Multi-stream selector, fast loop']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Sample System (Fast Loop)', definition: 'Continuous flow bypass from process tap → filter → regulator → analyzer → return (flare/fuel). Velocity 1–3 m/s. Transport delay < 30 s (fast loop) + analyzer cycle time. Components: probe, filter, regulator, flow meter, vaporizer (liquid), cooler, pump.' },
                                {
                                    type: 'list', items: [
                                        'Sample probe: isokinetic, quill (center 1/3), nozzle (velocity). Material: 316SS, Hastelloy, titanium.',
                                        'Filtration: 2 µm (gas), 10 µm (liquid). Coalescing filter for liquids/mist. Auto-drain.',
                                        'Pressure regulation: back-pressure regulator (maintains analyzer pressure), relief valve.',
                                        'Temperature: heat trace (prevent condensation), cooler (protect analyzer), vaporizer (liquid → gas).',
                                        'Stream switching: multi-stream selector (sequencer) — 6–12 streams, cycle time 3–15 min/stream.',
                                        'Validation: calibration gas (permeation tube, cylinder), standard solutions. Auto-validation sequence.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Analyzer exam: sample system = critical (fast loop, transport delay, filtration, pressure/temp control). GC = custody transfer (ASTM D1945, GPA 2261). Oxygen = zirconia (high temp) vs paramagnetic (general). pH = glass electrode, temp comp, calibration buffers (4, 7, 10). NIR/Raman = multivariate calibration (chemometrics).' }
                            ]
                        }
                    ]
                },

                // CHAPTER 27 — INDUSTRIAL COMMUNICATION NETWORKS
                {
                    id: 'ch-27',
                    number: 27,
                    title: 'Industrial Communication Networks — Fieldbus, Industrial Ethernet & Wireless',
                    subtitle: 'Task F-29/30/31: Communication for Instrumentation, Control & Safety',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch27-s1',
                            title: 'Fieldbus Systems — HART, FOUNDATION Fieldbus, PROFIBUS PA',
                            content: [
                                { type: 'text', text: 'Fieldbus replaces 4–20 mA with digital, bidirectional communication. Enables device diagnostics, multivariable data, reduced wiring, and advanced control in the field.' },
                                {
                                    type: 'table', headers: ['Fieldbus', 'Physical Layer', 'Topology', 'Speed', 'Devices/Segment', 'Power', 'Key Features'], rows: [
                                        ['HART (v7)', 'FSK on 4–20 mA', 'Point-to-point / Multidrop', '1200 bps', '1 (p-t-p) / 15 (multi)', 'Loop powered', 'Legacy compatible, DD/DTM, WirelessHART'],
                                        ['FOUNDATION Fieldbus (FF) H1', 'IEC 61158-2 (31.25 kbit/s)', 'Bus, tree, trunk/spur', '31.25 kbit/s', '16 (max 32)', 'Bus powered (9–32 V)', 'Function blocks in device, LAS, control in field, EDDL'],
                                        ['PROFIBUS PA', 'IEC 61158-2 (MBP)', 'Bus, tree, trunk/spur', '31.25 kbit/s', '16 (max 32)', 'Bus powered (9–32 V)', 'DP/PA coupler, GSD, FDI, PROFIsafe'],
                                        ['FF HSE', 'Ethernet (100/1000 Mbit/s)', 'Star, ring', '100/1000 Mbit/s', 'Unlimited', 'Separate', 'Linking device, high-speed backbone, OPC']
                                    ]
                                },
                                { type: 'keyTerm', term: 'LAS (Link Active Scheduler)', definition: 'FF H1 token-passing master. Only one active LAS per segment (others backup). Publishes Live List, manages scheduled (control) and unscheduled (config) communication. Deterministic.' },
                                { type: 'keyTerm', term: 'Function Blocks in Field Devices (FF)', definition: 'PID, AI, AO, ARITH, SELECT, etc. execute IN THE TRANSMITTER/VALVE. Control in the Field (CIF) — loop runs even if host fails. Scheduled by LAS. Block instantiation via Capability File (CFF).' },
                                {
                                    type: 'list', items: [
                                        'Segment design: max 1900 m (trunk), spur ≤ 60 m (1 device) or 120 m (2+ devices). Total spur ≤ 120 m. Terminators at each trunk end (R = 100 Ω, C = 1 µF).',
                                        'Power conditioner: isolates power supply from signal, provides galvanic isolation, surge protection. One per segment.',
                                        'Intrinsic Safety (IS): FISCO (Fieldbus Intrinsically Safe Concept) — Entity model for FF H1 / PROFIBUS PA. Simple rules: Voc, Isc, Ca, La. Barrier or isolator at safe area.',
                                        'WirelessHART: IEC 62591. Mesh network (2.4 GHz DSSS). Gateway to host. Battery-powered devices. Self-healing, frequency hopping. Coexists with Wi-Fi.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Fieldbus exam: HART (FSK, 4–20 mA compatible, multidrop 15 dev), FF H1 (31.25 kbit/s, LAS, function blocks in device, CIF, bus powered), PROFIBUS PA (similar to FF, DP coupler, GSD), FISCO (IS model), WirelessHART (mesh, 2.4 GHz). Segment limits: 16 devices, 1900 m trunk.' }
                            ]
                        },
                        {
                            id: 'ch27-s2',
                            title: 'Industrial Ethernet — EtherNet/IP, PROFINET, EtherCAT, Modbus TCP, OPC UA',
                            content: [
                                { type: 'text', text: 'Industrial Ethernet uses standard IEEE 802.3 hardware with real-time protocols. Determinism achieved via ASICs, FPGA, or software (TSN). IT/OT convergence via OPC UA, MQTT, TSN.' },
                                {
                                    type: 'table', headers: ['Protocol', 'Real-Time Class', 'Topology', 'Determinism', 'Key Features', 'Vendor Ecosystem'], rows: [
                                        ['EtherNet/IP (CIP)', 'Standard / Motion (CIP Motion)', 'Star, linear, ring (DLR)', 'Standard: ~1 ms; Motion: < 1 ms (ASIC)', 'Object-oriented, explicit/implicit messaging, DLR', 'Rockwell (originator), ODVA'],
                                        ['PROFINET RT/IRT', 'RT (soft) / IRT (hard)', 'Star, line, ring (MRP)', 'RT: 1–2 ms; IRT: < 1 ms (ASIC/FPGA)', 'IRT = isochronous, PROFIsafe, GSDML, TCI', 'Siemens (originator), PI'],
                                        ['EtherCAT', 'Distributed Clocks (DC)', 'Line, ring, star', '< 100 µs (DC), 1 ms cycle', 'Frame processing on fly, CoE (CANopen), FoE, EoE', 'Beckhoff (originator), ETG'],
                                        ['Modbus TCP', 'Non-deterministic (best effort)', 'Star', 'N/A (polling)', 'Simple, universal, register/coil mapping', 'Schneider (originator), open'],
                                        ['POWERLINK', 'Isochronous (managed)', 'Line, ring', '< 200 µs', 'Polling, openSAFETY, CANopen over Ethernet', 'B&R (originator), EPSG'],
                                        ['CC-Link IE', 'Control / Field / TSN', 'Star, line, ring', 'Control: 1 ms; TSN: < 1 ms', 'Seamless TSN integration, SLMP', 'Mitsubishi (originator), CC-Link Partner Assoc'],
                                        ['OPC UA', 'Pub/Sub over TSN', 'Any', 'TSN: deterministic', 'Information modeling, security, platform independent', 'OPC Foundation (IT/OT bridge)'],
                                        ['TSN (Time-Sensitive Networking)', 'IEEE 802.1Qbv, Qbu, Qci, AS', 'Any', 'Hardware-based scheduling', 'Converged IT/OT, zero congestion loss', 'IEEE 802.1, multiple vendors']
                                    ]
                                },
                                { type: 'keyTerm', term: 'DLR (Device Level Ring)', definition: 'EtherNet/IP ring redundancy. Beacon-based. Single fault recovery < 3 ms. Supervisor node manages ring. All devices must support DLR (embedded switch).' },
                                { type: 'keyTerm', term: 'MRP (Media Redundancy Protocol)', definition: 'PROFINET ring redundancy (IEC 62439-2). Manager/client roles. Recovery < 200 ms (MRP), < 30 ms (MRPD — planned duplication). Standard in PROFINET switches.' },
                                {
                                    type: 'list', items: [
                                        'CIP Motion: explicit messaging (config) + implicit (I/O data). Connection types: unicast (point-to-point), multicast (producer-consumer).',
                                        'PROFINET IRT: isochronous real-time. Communication cycle divided into IRT phase (deterministic) and open phase (TCP/IP). ASIC/FPGA required.',
                                        'EtherCAT: "Ethernet for Control Automation Technology". Master sends single frame through all slaves. Each slave reads/writes on the fly. Distributed Clocks (DC) synchronize to < 1 µs.',
                                        'TSN: IEEE 802.1 standards — Qbv (time-aware shaper), Qbu (frame preemption), Qci (stream reservation), AS (timing). Enables converged IT/OT on single wire.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Industrial Ethernet exam: CIP (EtherNet/IP) vs PROFINET RT/IRT vs EtherCAT (distributed clocks) vs Modbus TCP (polling). Redundancy: DLR (EIP), MRP (PN). TSN = future convergence. OPC UA = information modeling + security. Know which requires ASIC/FPGA (IRT, EtherCAT DC, CIP Motion).' }
                            ]
                        },
                        {
                            id: 'ch27-s3',
                            title: 'Industrial Wireless — WirelessHART, ISA 100.11a, Wi-Fi, 5G, LoRaWAN',
                            content: [
                                { type: 'text', text: 'Wireless extends monitoring to difficult/rotating/mobile assets. Coexistence, security, and reliability are managed through standards.' },
                                {
                                    type: 'table', headers: ['Technology', 'Standard', 'Frequency', 'Topology', 'Range', 'Power', 'Application'], rows: [
                                        ['WirelessHART', 'IEC 62591', '2.4 GHz (DSSS)', 'Mesh', '100–300 m', 'Battery (5–10 yr)', 'Process sensors, valves'],
                                        ['ISA 100.11a', 'IEC 62734', '2.4 GHz (DSSS)', 'Mesh / Star', '100–300 m', 'Battery / Line', 'Process, safety (ISA 100.11a-2011)'],
                                        ['Wi-Fi (802.11n/ac/ax)', 'IEEE 802.11', '2.4 / 5 / 6 GHz', 'Star (AP)', '50–300 m', 'Line', 'Mobile workers, cameras, AGV'],
                                        ['5G (URLLC / mMTC)', '3GPP Rel-16+', 'Sub-6 / mmWave', 'Star (gNB)', '100–1000 m', 'Line / Battery', 'Remote control, massive IoT, TSN'],
                                        ['LoRaWAN', 'LoRa Alliance', 'Sub-1 GHz (ISM)', 'Star', '2–15 km', 'Battery (10+ yr)', 'Wide-area monitoring, metering'],
                                        ['Private LTE (CBRS / Anritsu)', '3GPP', '3.5 GHz (CBRS)', 'Star', '1–5 km', 'Line / Battery', 'Plant-wide, deterministic option']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Coexistence (2.4 GHz)', definition: 'WirelessHART, ISA 100.11a, Wi-Fi, Bluetooth, microwave ovens share 2.4 GHz. Mitigation: channel blacklisting (WirelessHART), adaptive frequency hopping, directional antennas, 5 GHz Wi-Fi preferred for backhaul.' },
                                {
                                    type: 'list', items: [
                                        'WirelessHART: TDMA, channel hopping (15 ch), mesh routing, gateway (network manager + security manager). Device role: router + measurement.',
                                        'ISA 100.11a: TDMA, channel hopping, supports IPv6/6LoWPAN, backbone router, safety certified option. More flexible than WirelessHART.',
                                        'Wi-Fi for industrial: 802.11r (fast roaming), 802.11k/v (neighbor report), 802.11ax (OFDMA, TWT). WPA3-Enterprise, 802.1X.',
                                        '5G URLLC: 1 ms latency, 99.999% reliability. Network slicing for OT. Private 5G (CBRS, n78/n79) for dedicated spectrum.',
                                        'LoRaWAN: Chirp spread spectrum. Class A (bidirectional, low power), Class B (scheduled receive), Class C (continuous receive). Gateway → Network Server → Application Server.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Wireless exam: WirelessHART vs ISA 100.11a (both 2.4 GHz mesh, TDMA, channel hopping). Wi-Fi 6/6E for mobile. 5G URLLC for control. LoRaWAN for wide-area low power. Coexistence management. Security: WPA3, 802.1X, DTLS, network slicing.' }
                            ]
                        }
                    ]
                }
            ]
        }


    ]
};

export default industElectCourse;