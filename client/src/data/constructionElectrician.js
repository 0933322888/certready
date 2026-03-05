// ============================================================
// CertReady — Construction Electrician Course Data
// Based on: Red Seal Occupational Standard (RSOS) – Construction Electrician (2025)
// Red Seal Interprovincial Exam: 100 questions
// Apprenticeship: 4 levels, 7200 hours total
// MWA Weightings: A=12%, B=26%, C=34%, D=18%, E=10%
// ============================================================

const electricianCourse = {
  meta: {
    trade: 'Construction Electrician',
    redSealCode: '309A',
    totalExamQuestions: 100,
    apprenticeshipLevels: 4,
    totalHours: 7200,
    version: '2025',
    lastUpdated: '2025',
  },

  parts: [

    // ============================================================
    // PART 1 — COMMON OCCUPATIONAL SKILLS
    // MWA A: Performs Common Occupational Skills (12%)
    // Tasks: A-1 Safety (23%), A-2 Tools (24%), A-3 Work Organization (18%),
    //        A-4 Support Components (21%), A-5 Commissioning (14%), A-6 Communication (0%)
    // ============================================================
    {
      id: 'elec-part-1',
      number: 1,
      title: 'Common Occupational Skills',
      description: 'Safety, tools, work organization, support components, commissioning, and communication — the essential foundation every construction electrician must master.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 1 — Safety (MWA A-1) — FREE
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-01',
          number: 1,
          title: 'Safety on the Job',
          subtitle: 'MWA A-1 · Performs Safety-Related Functions (23% of MWA A)',
          isFree: true,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'elec-ch01-s1',
              title: '1.1 Personal Protective Equipment (PPE) and Safety Equipment',
              content: [
                {
                  type: 'paragraph',
                  text: 'Construction electricians face a unique set of hazards: electric shock, arc flash, falls, confined space exposure, and contact with hazardous substances. Selecting and using the right PPE is not optional — it is a code and OH&S requirement. PPE must be matched to the task and environment before any work begins.',
                },
                {
                  type: 'keyTerm',
                  term: 'Arc Flash',
                  definition: 'A sudden release of electrical energy through the air when a fault occurs between two energized conductors or between an energized conductor and ground. Arc flash produces intense heat (up to 20,000°C), pressure waves, and flying shrapnel — all of which can cause severe burns and fatal injury.',
                },
                {
                  type: 'keyTerm',
                  term: 'AHJ (Authority Having Jurisdiction)',
                  definition: 'The organization, office, or individual responsible for enforcing the requirements of a code or standard. On electrical worksites this includes electrical inspectors, OH&S officers, and the prime contractor.',
                },
                {
                  type: 'keyTerm',
                  term: 'WHMIS',
                  definition: 'Workplace Hazardous Materials Information System — Canada\'s national hazard communication standard requiring labels and Safety Data Sheets (SDS) for all controlled products on site.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of PPE for Construction Electricians',
                  items: [
                    'Shock hazard PPE — rubber insulating gloves (rated by voltage class), rubber boots, insulating blankets',
                    'Arc flash hazard PPE — arc-rated (AR) clothing, face shields, balaclava, gloves rated to the incident energy level',
                    'Head protection — Class E (electrical) hard hat rated to 20,000 V',
                    'Eye protection — safety glasses, goggles, or face shields as required by the task',
                    'Safety footwear — CSA Grade 1 dielectric footwear with puncture-resistant sole',
                    'Hand protection — leather, rubber insulating, or chemical-resistant gloves per task',
                    'Hearing protection — earplugs or earmuffs when exposed to >85 dB',
                    'Respiratory protection — half-face or full-face respirator when working with dust, fumes, or designated substances',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Safety Equipment (Beyond Personal PPE)',
                  items: [
                    'Fall protection — full-body harness (fall arrest) and lanyard, or guardrails (fall restraint)',
                    'Confined space equipment — gas detectors, retrieval harness, ventilation fans, attendant communication',
                    'Lock-out/tag-out (LOTO) devices — breaker locks, multi-lock hasps, scissors, personal danger tags',
                    'Temporary protective grounds (TPG) — shorting cables applied to de-energized conductors to bleed stored charge',
                    'Fire extinguishers — Class C rated for electrical fires',
                    'First aid equipment — minimum kit per OH&S regulation for crew size',
                    'Eye wash stations — mandatory when working with acids, corrosives, or chemical hazards',
                    'Signage and barriers — danger/caution tape, barricades, arc flash warning labels',
                    'Fume and toxic gas detectors — H₂S, CO, O₂ depletion detectors for confined spaces and vaults',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'PPE must be inspected before each use. Damaged or defective items — cracked hard hats, torn arc-rated garments, gloves with pin-holes — must be immediately removed from service and tagged. PPE is never to be used for purposes other than its intended design.',
                },
                {
                  type: 'infoBox',
                  title: 'Site Hazards Specific to Electrical Work',
                  items: [
                    'Live equipment — energized panels, conductors, and buses',
                    'Arc flash/arc blast hazard zones — defined by incident energy study or the CEC default tables',
                    'Working at heights — on ladders, scaffolds, boom lifts, and rooftops',
                    'Confined spaces — electrical vaults, manholes, crawl spaces, equipment rooms',
                    'Open excavations — trenches for underground services',
                    'Hazardous locations — classified areas (Zones 0, 1, 2 or Divisions 1, 2) per CEC Section 18',
                    'Weather conditions — lightning, ice, wet surfaces on outdoor work',
                    'Overhead hazards — energized distribution lines during aerial and rooftop work',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch01-s2',
              title: '1.2 Maintaining a Safe Work Environment',
              content: [
                {
                  type: 'paragraph',
                  text: 'A safe work environment is the shared responsibility of all workers on site. Construction electricians must identify, report, and eliminate hazards proactively. Safe work practices must be followed at all times according to OH&S regulations, company policy, and site-specific requirements.',
                },
                {
                  type: 'infoBox',
                  title: 'Safe Work Practices',
                  items: [
                    'Perform a pre-job hazard assessment before starting each task',
                    'Keep work areas clean, clutter-free, and free of tripping hazards',
                    'Store all materials and chemicals in designated areas per WHMIS requirements',
                    'Barricade and sign all hazard zones — use caution/danger tape and fences',
                    'Identify the locations of all safety components (fire extinguishers, first aid, MSDS/SDS, eye wash)',
                    'Know emergency procedures: evacuation routes, fire response, hazardous chemical spill procedures',
                    'Identify and properly contain all designated substances encountered (asbestos, lead, silica, PCBs in old transformers)',
                    'Know the limitations of self and co-workers — do not allow fatigued or impaired workers to perform energized work',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Designated Substances',
                  definition: 'Substances regulated under provincial OH&S legislation because of special hazard to worker health. On electrical worksites these commonly include asbestos (old insulation and fireproofing), lead (old solder and paint), silica (concrete cutting), PCBs (old transformers and capacitors), and mercury (fluorescent lamps).',
                },
              ],
            },
            {
              id: 'elec-ch01-s3',
              title: '1.3 Lock-Out / Tag-Out (LOTO) Procedures',
              content: [
                {
                  type: 'paragraph',
                  text: 'Lock-out/tag-out is the most critical safety procedure in electrical work. LOTO ensures that equipment is de-energized and cannot be accidentally re-energized while a worker is in contact with it. Every jurisdiction in Canada has legislated minimum LOTO standards.',
                },
                {
                  type: 'infoBox',
                  title: 'Standard LOTO Sequence (6 Steps)',
                  items: [
                    '1. NOTIFY — inform all affected workers and other trades; coordinate with the AHJ',
                    '2. IDENTIFY — locate the isolation point(s) using panel schedules, single-line diagrams, conductor tags, and equipment labels; identify all hazardous energy sources (electrical, mechanical, pneumatic, stored)',
                    '3. ISOLATE — open the identified disconnecting means to de-energize the circuit or equipment',
                    '4. LOCK & TAG — apply an approved lock and personal danger tag; use multi-lock hasp when multiple workers are on the same circuit',
                    '5. TEST — verify absence of voltage using rated test equipment (voltmeter, absence-of-voltage tester); apply temporary protective grounds where required by the CEC',
                    '6. VERIFY — confirm the system is in zero-energy state and safe to work on',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Zero Potential / Zero Energy State',
                  definition: 'The condition in which all forms of stored energy (electrical, mechanical, spring, gravitational, pneumatic) have been released or blocked so that the equipment cannot start or create a hazard.',
                },
                {
                  type: 'keyTerm',
                  term: 'Temporary Protective Ground (TPG)',
                  definition: 'A shorting cable assembly applied to de-energized conductors (between phases and to ground) to dissipate any stored charge, induced voltage, or capacitive energy before workers make contact. Required by the CEC for work on de-energized high-voltage systems.',
                },
                {
                  type: 'paragraph',
                  text: 'Approved LOTO devices include: breaker locks (keyed padlocks that prevent a breaker from being re-closed), scissors (prevent a knife switch from being closed), and arc flash protection equipment. Testing equipment must be rated for the system voltage — verify the tester itself is functional before and after use on a known live source.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q01-1',
              question: 'Which class of hard hat provides protection against contact with energized conductors up to 20,000 V?',
              options: ['Class B', 'Class E', 'Class G', 'Class C'],
              correctIndex: 1,
              explanation: 'Class E (Electrical) hard hats are rated to 20,000 V and are the required standard for construction electricians working near energized systems. Class G (General) is rated to 2,200 V and Class C (Conductive) provides no electrical protection.',
            },
            {
              id: 'elec-q01-2',
              question: 'After applying lock-out to a circuit, what is the correct next step before beginning work?',
              options: [
                'Notify the supervisor that work is beginning',
                'Apply a personal danger tag to the panel',
                'Test for absence of voltage using rated equipment',
                'Install temporary protective grounds on all conductors',
              ],
              correctIndex: 2,
              explanation: 'After isolating and locking out the circuit, the worker must always test for absence of voltage using properly rated test equipment to confirm the circuit is de-energized before making contact. Applying temporary protective grounds comes after confirming absence of voltage, where required.',
            },
            {
              id: 'elec-q01-3',
              question: 'A construction electrician discovers a cracked rubber insulating glove before starting a task on an energized panel. What is the correct action?',
              options: [
                'Tape the crack with electrical tape and proceed',
                'Use the glove for low-voltage work only',
                'Tag the glove as defective and remove it from service',
                'Wear leather gloves over the cracked rubber glove',
              ],
              correctIndex: 2,
              explanation: 'Damaged or defective PPE must be immediately tagged and removed from service, regardless of the perceived severity of the damage. A cracked rubber insulating glove provides no reliable protection against shock and must never be used.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 2 — Tools, Equipment & Work Organization (MWA A-2, A-3, A-4)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-02',
          number: 2,
          title: 'Tools, Equipment, and Work Organization',
          subtitle: 'MWA A-2, A-3, A-4 · Tools (24%) · Organization (18%) · Support Components (21%)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch02-s1',
              title: '2.1 Hand Tools, Power Tools, and Measuring Instruments',
              content: [
                {
                  type: 'paragraph',
                  text: 'Construction electricians must select, use, inspect, and maintain a wide range of tools. Tool selection depends on the task, the material being worked, and the environment. All tools must be inspected before use, kept clean and calibrated, and defective tools must be tagged out and replaced.',
                },
                {
                  type: 'infoBox',
                  title: 'Standard Hand Tools',
                  items: [
                    'Lineman pliers, diagonal cutters, needle nose pliers, slip-joint pliers',
                    'Wire strippers and cable strippers (matched to conductor size)',
                    'Screwdrivers — flat, Phillips, Robertson, Torx, tamper-proof',
                    'Fish tapes and fish sticks for conductor pulling',
                    'Knockout punch sets for enclosures',
                    'Pipe benders — hand benders (½" to 1"), hydraulic benders (1¼" and up)',
                    'Measuring tapes, levels (torpedo and spirit), chalk lines, plumb bobs',
                    'Hack saws, hole saws, pipe reamers, and pipe cutters',
                    'Combination squares and combination wrench sets',
                    'Conduit reamers, die sets, and taps',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Power Tools and Specialty Equipment',
                  items: [
                    'Rotary and hammer drills with auger, masonry, step, and wood bits',
                    'Reciprocating saws for opening walls and cutting conduit',
                    'Hydraulic cable cutters for large conductors',
                    'Cable pullers and tuggers for long conductor runs',
                    'Powder-actuated tools (PAT) — require a separate certification to operate',
                    'Heat guns and torch sets for heat-shrink and soldering',
                    'Conduit threading machines',
                    'Cable tie guns',
                    'Thermal imaging cameras for hot-spot detection',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Powder-Actuated Tool (PAT)',
                  definition: 'A fastening tool driven by a powder charge (similar to a blank cartridge) used to attach electrical supports to concrete and steel. Operators must hold a valid PAT certification and follow manufacturer specifications. The tool is only loaded immediately before use.',
                },
                {
                  type: 'infoBox',
                  title: 'Electrical Measuring and Test Instruments — CAT Categories',
                  items: [
                    'CAT I — Electronic equipment, low-energy circuits',
                    'CAT II — Single-phase receptacle-connected loads (standard outlets)',
                    'CAT III — Three-phase distribution, including bus bars, disconnects, and fixed equipment',
                    'CAT IV — Utility entrance, service entrance, outdoor conductors',
                    'Note: Always use the highest CAT rating available for the system being measured. A higher CAT number means greater protection against transient voltage spikes.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Common Test Equipment',
                  items: [
                    'Multimeter (voltmeter, ammeter, ohmmeter combined)',
                    'Clamp-on ammeter — measures current without breaking the circuit',
                    'Insulation resistance tester (megohmmeter/megger) — checks winding and cable insulation integrity',
                    'Voltage tester / solenoid tester (wiggy) — simple go/no-go voltage indication',
                    'Phase rotation meter — confirms correct ABC phase rotation before energizing motors',
                    'Power quality analyzer — measures harmonics, power factor, voltage sags/swells',
                    'Thermographic (IR) camera — identifies overheating connections and components',
                    'Ground loop impedance tester — measures earth electrode resistance',
                    'High potential (high-pot) tester — applies high voltage to test dielectric strength of cable insulation',
                    'Oscilloscope — displays voltage waveforms for AC/DC analysis',
                    'Acoustic level sensor / ultrasonic detector — locates partial discharge in HV equipment',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch02-s2',
              title: '2.2 Access Equipment — Ladders, Lifts, and Fall Protection',
              content: [
                {
                  type: 'paragraph',
                  text: 'Construction electricians spend a large portion of their work time at height. All access equipment must be CSA or ANSI rated, inspected before use, and used within its limitations. Working at heights requires fall protection — either fall arrest (harness and lanyard) or fall restraint (prevents reaching the fall edge).',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Access Equipment',
                  items: [
                    'Step ladders — self-supporting; never use the top step or top cap as a working surface',
                    'Extension ladders — set at a 4:1 ratio (1 foot out for every 4 feet of height); secure at top and bottom',
                    'Scaffold systems — must be assembled by trained personnel; toe boards and guardrails required',
                    'Scissor lifts — must be operated on firm, level ground; outriggers deployed where required',
                    'Articulating boom lifts — require full-body harness and lanyard at all times',
                    'Fall arrest system — full-body harness, shock-absorbing lanyard, and certified anchor point (minimum 2× intended load)',
                    'Fall restraint — prevents the worker from reaching the fall edge; requires documented anchor point engineering',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Before using any access equipment: identify overhead hazards (especially energized power lines), install barricades and signage to protect the work zone, inspect the equipment, and confirm operator training certification is current. Damaged access equipment is tagged out and removed from service — never repaired in the field.',
                },
              ],
            },
            {
              id: 'elec-ch02-s3',
              title: '2.3 Rigging, Hoisting, and Lifting',
              content: [
                {
                  type: 'paragraph',
                  text: 'Transformers, switchboards, and motor control centres (MCCs) are heavy pieces of equipment. Rigging, hoisting, and lifting must be planned and executed safely. Only certified riggers may attach loads to cranes and hoists. All rigging hardware is marked with a Working Load Limit (WLL).',
                },
                {
                  type: 'keyTerm',
                  term: 'Working Load Limit (WLL)',
                  definition: 'The maximum load that may be applied to a rigging component (sling, shackle, hook) under normal conditions of use. WLL is always less than the breaking strength. Never exceed the WLL on any rigging component.',
                },
                {
                  type: 'paragraph',
                  text: 'Hand signals and audible signals are used to direct crane operators when direct communication is not possible. Only one person — the designated signal person — gives signals to the operator. All workers must stay clear of suspended loads. Barricades are installed around the lift zone.',
                },
              ],
            },
            {
              id: 'elec-ch02-s4',
              title: '2.4 Organizing Work — Plans, Materials, and Site Preparation',
              content: [
                {
                  type: 'paragraph',
                  text: 'Efficient work organization is essential to completing electrical installations on time and on budget. At journeyperson level, construction electricians are expected to interpret drawings, plan their work sequence, organize materials, prepare the worksite, and finalize documentation — all with minimal supervision.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Electrical Drawings',
                  items: [
                    'Single-line diagrams — simplified representation showing the power flow through a system with one line representing all phases',
                    'Schematic diagrams — show all individual conductors and components; used for control circuits',
                    'Wiring diagrams — show physical wire connections between components',
                    'Panel schedules — list all branch and feeder circuits in a distribution panel',
                    'Site plans and floor plans — show equipment locations and raceway routing',
                    'Riser diagrams — vertical cross-sections showing the electrical distribution from service entrance to floors',
                    'Shop drawings — manufacturer-specific layout of equipment (MCCs, switchboards)',
                    'As-built drawings — final, revised drawings that reflect the actual installed condition',
                    'BIM (Building Information Modelling) — 3D digital model of the building with all systems coordinated',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Before work begins, the electrician confirms: materials and equipment are on site and conform to specifications; the work sequence has been coordinated with other trades (plumbers, pipefitters, HVAC, structural); the worksite is prepared (temporary power, access, layout markings, and permits are in place); and any required permits (electrical permit, confined space entry permit) have been issued by the AHJ.',
                },
                {
                  type: 'infoBox',
                  title: 'Required Documentation at Project Closeout',
                  items: [
                    'As-built drawings — updated to show final installation routing, conduit fill, and circuit identification',
                    'Panel schedules — completed and labelled, accurate directory installed in panel',
                    'Inspection certificates — electrical inspection approval from the AHJ',
                    'Test and commissioning reports — insulation resistance tests, functional tests, power quality reports',
                    'O&M manuals — operation and maintenance documentation for installed equipment',
                    'Warranty cards — equipment warranties registered with manufacturers',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch02-s5',
              title: '2.5 Fabricating and Installing Support Components',
              content: [
                {
                  type: 'paragraph',
                  text: 'Electrical raceways, panels, and equipment must be properly supported according to the CEC, structural engineer\'s requirements, and manufacturers\' specifications. Support components include brackets, hangers, fasteners, and seismic restraint systems.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Support Hardware',
                  items: [
                    'Channel (strut) — slotted metal channel (Unistrut® and equivalents) used to build custom support frameworks',
                    'Brackets — channel, angle, T, L, floor, and ceiling types',
                    'Hangers — trapeze hangers, pipe clamps, beam clamps',
                    'Fasteners — spring nuts, bolts, screws, concrete anchors, wedge anchors',
                    'Seismic restraint systems — chains, cables, rods, galvanized cable with thimbles and clamps; required by the National Building Code (NBC) in seismic zones',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Seismic Restraint',
                  definition: 'A bracing system designed to prevent electrical equipment and raceways from falling during an earthquake. Required in seismic zones per the NBC. Seismic restraints are engineered systems — the type and spacing must conform to the structural engineer\'s specifications.',
                },
                {
                  type: 'paragraph',
                  text: 'Support structures are fabricated from steel, aluminum, or wood depending on the environment. Fasteners are selected to match the substrate (e.g., concrete anchors for concrete, wood screws for wood, beam clamps for steel). All supports must follow building lines and be installed square, level, and plumb.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q02-1',
              question: 'What CAT category rating should a multimeter have for use on a 600V three-phase distribution panel busbar?',
              options: ['CAT I', 'CAT II', 'CAT III', 'CAT IV'],
              correctIndex: 2,
              explanation: 'CAT III covers three-phase distribution systems, busbars, feeders, disconnects, and fixed equipment. Using a lower-rated meter on a higher-category circuit creates a risk of catastrophic failure from transient overvoltages. Always select the highest applicable CAT rating.',
            },
            {
              id: 'elec-q02-2',
              question: 'Which tool requires a separate certification to operate on a construction site?',
              options: [
                'Cable puller',
                'Conduit threading machine',
                'Powder-actuated tool',
                'Hydraulic cable cutter',
              ],
              correctIndex: 2,
              explanation: 'Powder-actuated tools (PATs) require a specific certification to operate because of the hazards associated with the explosive powder charge. The operator must be certified by the manufacturer or an approved training provider, and must follow strict loading and usage procedures.',
            },
            {
              id: 'elec-q02-3',
              question: 'When setting up an extension ladder, what is the correct angle ratio?',
              options: ['3:1 (one foot out for every 3 feet of height)', '4:1 (one foot out for every 4 feet of height)', '5:1 (one foot out for every 5 feet of height)', '2:1 (one foot out for every 2 feet of height)'],
              correctIndex: 1,
              explanation: 'The correct angle for an extension ladder is 4:1 — for every 4 feet of height, the base is set 1 foot away from the wall. This creates a 75° angle, which is the optimal balance between stability and climbing safety.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 3 — Commissioning, Decommissioning & Communication (MWA A-5, A-6)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-03',
          number: 3,
          title: 'Commissioning, Decommissioning & Communication',
          subtitle: 'MWA A-5 · Commissioning/Decommissioning (14% of MWA A) · A-6 · Communication',
          isFree: false,
          estimatedMinutes: 40,
          sections: [
            {
              id: 'elec-ch03-s1',
              title: '3.1 Startup and Shutdown Procedures',
              content: [
                {
                  type: 'paragraph',
                  text: 'Before energizing any electrical system, the construction electrician must confirm the installation is complete, correct, safe, and documented. Startup is a systematic process — energizing out of sequence can damage equipment or create dangerous fault conditions.',
                },
                {
                  type: 'infoBox',
                  title: 'Pre-Energization Checklist',
                  items: [
                    'Verify as-built drawings match field wiring',
                    'Confirm insulation resistance tests have been completed and documented',
                    'Confirm connections are terminated and bolts torqued to manufacturers\' specs',
                    'Inspect and remove all shipping materials, tools, jumpers, gravity pins, blocking devices',
                    'Verify phase identification and phase rotation (especially critical for motors)',
                    'Test cables and conductors for ground faults and continuity',
                    'Verify system peripherals (detection systems, alarms, status systems) are functional',
                    'Notify all personnel and clear the area before energization',
                    'Install temporary protective grounds and remove them in the correct sequence',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Shutdown procedures follow the reverse sequence of startup. Equipment is de-energized in the specified order, locked out and tagged out, and temporary protective grounds are applied. The sequence protects both equipment and personnel from voltage spikes caused by abrupt de-energization of inductive loads.',
                },
              ],
            },
            {
              id: 'elec-ch03-s2',
              title: '3.2 Commissioning and Decommissioning Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Commissioning is the systematic process of verifying that an installed system performs according to design intent. It goes beyond startup — it includes measuring, adjusting, testing, and documenting every system function. Commissioning may be witnessed by the AHJ, the engineer, and the owner.',
                },
                {
                  type: 'infoBox',
                  title: 'Commissioning Tests Performed by Electricians',
                  items: [
                    'Insulation resistance testing (megger test) — baseline IR value recorded for future comparison',
                    'Continuity and phase identification',
                    'Voltage and current measurements at full load',
                    'Phase rotation verification',
                    'Protection relay setting verification (trip settings)',
                    'Ground resistance testing (ground loop impedance)',
                    'High-potential (hi-pot) test on HV cables',
                    'Functional testing of all protection systems, alarms, and interlocks',
                    'Power quality analysis (harmonics, power factor, voltage regulation)',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Decommissioning',
                  definition: 'The systematic de-energization, isolation, and preparation of electrical equipment for removal or long-term storage. All energy sources are identified and placed in a zero-energy state, other trades are notified of disconnected services, and documentation is updated.',
                },
              ],
            },
            {
              id: 'elec-ch03-s3',
              title: '3.3 Communication and Mentoring in the Trade',
              content: [
                {
                  type: 'paragraph',
                  text: 'Effective communication is a core competency for construction electricians. Electricians regularly interact with co-workers, supervisors, engineers, inspectors, owners, architects, and other trades. Clear communication prevents errors, resolves conflicts, and ensures the work meets code and design requirements.',
                },
                {
                  type: 'paragraph',
                  text: 'Mentoring apprentices is a professional responsibility at the journeyperson level. Effective mentoring follows a structured approach: identify the learning objective, link the lesson to other tasks, demonstrate the skill, set up safe practice conditions, observe and assess the apprentice\'s performance, and provide specific, supportive feedback. Apprentices must be evaluated fairly, without discrimination or harassment, under the Human Rights Act.',
                },
                {
                  type: 'infoBox',
                  title: 'Nine Essential Skills in the Trade',
                  items: [
                    'Reading — CEC, standards, specifications, O&M manuals',
                    'Document use — plans, schematics, panel schedules, BIM drawings',
                    'Writing — as-built notes, incident reports, maintenance logs, labelling',
                    'Oral communication — trade coordination, code discussions, safety meetings',
                    'Numeracy — load calculations, conduit fill, voltage drop, wire sizing',
                    'Thinking skills — troubleshooting, work sequencing, routing decisions',
                    'Working with others — team coordination, conflict resolution',
                    'Digital technology — multimeters, thermal cameras, BIM software, PLCs',
                    'Continuous learning — code updates, new technology, upgrading training',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q03-1',
              question: 'Which test provides a baseline measurement of cable insulation health that can be compared to future readings to detect degradation?',
              options: [
                'Continuity test',
                'Insulation resistance (megger) test',
                'High-potential (hi-pot) test',
                'Ground loop impedance test',
              ],
              correctIndex: 1,
              explanation: 'An insulation resistance (IR) test using a megohmmeter provides a baseline value (measured in MΩ or GΩ) that is recorded at commissioning and compared at future maintenance intervals. Declining IR values indicate insulation degradation before a failure occurs.',
            },
            {
              id: 'elec-q03-2',
              question: 'Before energizing a new motor installation, what instrument is used to verify correct phase rotation?',
              options: ['Multimeter', 'Oscilloscope', 'Phase rotation meter', 'Power quality analyzer'],
              correctIndex: 2,
              explanation: 'A phase rotation meter (also called a phase sequence tester) confirms that the phase sequence (A-B-C) at the motor terminals matches the required direction of rotation. Incorrect phase rotation will cause a motor to run backwards, potentially damaging driven equipment.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // PART 2 — GENERATING, DISTRIBUTION AND SERVICE SYSTEMS
    // MWA B: Installs, Services and Maintains Generating, Distribution
    //        and Service Systems (26%)
    // Tasks: B-7 Services/Metering (14%), B-8 Protection (15%),
    //        B-9 Distribution (15%), B-10 Power Conditioning/UPS (7%),
    //        B-11 Bonding/Grounding (15%), B-12 Generation (8%),
    //        B-13 Renewable Energy (8%), B-14 High Voltage (6%),
    //        B-15 Transformers (12%)
    // ============================================================
    {
      id: 'elec-part-2',
      number: 2,
      title: 'Generating, Distribution, and Service Systems',
      description: 'Consumer services, protection devices, distribution equipment, grounding and bonding, power generation, high-voltage systems, and transformers — the backbone of every electrical installation.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 4 — Consumer Services and Metering (MWA B-7)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-04',
          number: 4,
          title: 'Consumer/Supply Services and Metering',
          subtitle: 'MWA B-7 · Consumer/Supply Services and Metering Equipment (14% of MWA B)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch04-s1',
              title: '4.1 Single-Phase Services',
              content: [
                {
                  type: 'paragraph',
                  text: 'A consumer/supply service is the electrical connection between the utility distribution system and the customer\'s premises. The construction electrician is responsible for installing the service entrance equipment on the customer\'s side of the utility\'s point of demarcation.',
                },
                {
                  type: 'keyTerm',
                  term: 'Single-Phase Edison Three-Wire System (120/240V)',
                  definition: 'The standard residential and light commercial service in Canada. The utility transformer provides two 120V legs (L1 and L2) that are 180° out of phase with a grounded neutral (N) between them. L1-to-N = 120V; L2-to-N = 120V; L1-to-L2 = 240V.',
                },
                {
                  type: 'infoBox',
                  title: 'Service Components',
                  items: [
                    'Point of attachment — the first point of support on the building for service conductors',
                    'Service mast — a rigid conduit riser that elevates the point of attachment to meet CEC clearance requirements',
                    'Service entrance conductors — connect the point of attachment to the service equipment (3-wire for single-phase)',
                    'Meter socket — utility-supplied or owner-supplied socket where the kilowatt-hour meter is plugged in',
                    'Main disconnecting means — the first overcurrent protection device inside the building (main breaker or main fuse)',
                    'Service panel / load centre — the distribution panel for all branch circuits',
                    'Grounding electrode system — connects the service neutral to ground (ground rods, plates, water pipe, structural steel, concrete encased electrode)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'CEC Clearance Requirements for Overhead Services',
                  items: [
                    'Above finished grade: minimum 3.0 m over driveways not accessible to trucks, 5.0 m over driveways accessible to trucks',
                    'Above rooftops: minimum 900 mm above the roof surface (with exceptions)',
                    'Point of attachment height: minimum 3.0 m above grade',
                    'Horizontal clearance from windows/doors: minimum 900 mm',
                    'Underground services: minimum burial depth and conduit cover requirements per CEC Table 53',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'When calculating service conductor size: the load is calculated per CEC Section 8 (demand factors apply). The neutral conductor may be reduced (but not below 70% of the phase conductor size for services up to 200A). Antioxidant compound must be applied to all aluminum conductor connections.',
                },
              ],
            },
            {
              id: 'elec-ch04-s2',
              title: '4.2 Three-Phase Services',
              content: [
                {
                  type: 'paragraph',
                  text: 'Three-phase services are used for commercial, institutional, and industrial buildings that have significant motor loads or require balanced, high-capacity power distribution.',
                },
                {
                  type: 'infoBox',
                  title: 'Common Three-Phase Service Configurations',
                  items: [
                    '120/208V wye (Y) — most common commercial service; all phases are 120V to neutral, 208V phase-to-phase',
                    '347/600V wye (Y) — standard industrial service in Canada; 347V to neutral, 600V phase-to-phase',
                    '240V delta (Δ) — used for some industrial motor loads; no neutral on the delta winding',
                    '120/240V high-leg delta — provides 120V single-phase for lighting and 240V three-phase for motors; the "high leg" (B phase) is approximately 208V to neutral — must be identified with orange marking',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Three-phase conductors are colour-coded per CEC Rule 4-032: at 120/208V and 120/240V systems, L1=red, L2=black, L3=blue, N=white; at 347/600V systems, L1=red, L2=black, L3=blue, N=white (some jurisdictions use different colours — confirm with local AHJ). The grounded neutral is connected to the grounding electrode system at the service entrance only.',
                },
                {
                  type: 'keyTerm',
                  term: 'Current Transformer (CT) and Voltage Transformer (VT)',
                  definition: 'Instrument transformers used for metering and protection on large services where it is impractical to pass the full load current through the meter. The CT steps down the line current (e.g., 1000A : 5A). The VT steps down the line voltage. The meter reads the stepped-down values and the billing computer multiplies by the transformer ratios.',
                },
              ],
            },
            {
              id: 'elec-ch04-s3',
              title: '4.3 Grounding and Bonding at the Service Entrance',
              content: [
                {
                  type: 'paragraph',
                  text: 'At the service entrance, two distinct but related systems must be correctly installed: the grounding system (connecting the system neutral to earth) and the bonding system (connecting all non-current-carrying metal parts together and to the grounded conductor).',
                },
                {
                  type: 'keyTerm',
                  term: 'System Grounding',
                  definition: 'Intentionally connecting the service neutral conductor to the earth at the point of service entrance using grounding electrodes. This establishes a reference voltage (0V) for the neutral and limits the voltage that the system can reach above ground under fault conditions.',
                },
                {
                  type: 'keyTerm',
                  term: 'Equipment Bonding',
                  definition: 'Connecting all non-current-carrying metallic parts of the electrical system (conduit, enclosures, equipment frames) together and to the grounded service conductor to create a low-impedance fault return path. Bonding ensures fault current flows back through the circuit — not through people — and trips the overcurrent device.',
                },
                {
                  type: 'infoBox',
                  title: 'Grounding Electrodes (CEC Section 10)',
                  items: [
                    'Ground rods — minimum 2.4 m long, copper-clad steel; driven to full length or two rods if resistance > 25Ω',
                    'Ground plates — minimum 0.093 m² of surface area buried at least 600 mm deep',
                    'Buried copper conductor — minimum #4 AWG bare, at least 7.5 m long',
                    'Metallic water piping — minimum 3 m of underground metallic piping (supplemental electrode also required)',
                    'Concrete-encased electrode (Ufer ground) — 6 m or more of rebar or copper conductor in the footing',
                    'Structural steel — electrically continuous structural metal frame of the building',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Non-electrical metallic piping and structures (gas lines, water lines, metallic building structures) must be bonded to the electrical system at the service entrance per CEC Rule 10-406. This prevents dangerous voltage differences between metallic systems.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q04-1',
              question: 'In a 120/208V three-phase wye service, what is the voltage measured between any two phase conductors?',
              options: ['120V', '208V', '240V', '347V'],
              correctIndex: 1,
              explanation: 'In a 120/208V wye system, each phase is 120V to neutral. The phase-to-phase voltage is 120V × √3 = 207.8V ≈ 208V. This is the standard commercial service voltage in Canada.',
            },
            {
              id: 'elec-q04-2',
              question: 'Which phase conductor must be identified with orange colour coding in a 120/240V high-leg delta service?',
              options: ['Phase A', 'Phase B (high leg)', 'Phase C', 'The neutral'],
              correctIndex: 1,
              explanation: 'In a 120/240V high-leg (wild-leg) delta system, the B phase connects to the midpoint of the delta winding, resulting in approximately 208V to neutral — more than double the 120V of A and C phases. This "high leg" must be identified with orange conductors or markings to prevent 120V devices from being accidentally connected to it.',
            },
            {
              id: 'elec-q04-3',
              question: 'What is the minimum length of a copper-clad steel ground rod per the CEC?',
              options: ['1.2 m', '1.8 m', '2.4 m', '3.0 m'],
              correctIndex: 2,
              explanation: 'The CEC requires ground rods to be a minimum of 2.4 m (approximately 8 feet) long. If soil conditions prevent driving the rod to its full length, two rods bonded together may be used as an alternative.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 5 — Protection Devices and Power Distribution (MWA B-8, B-9, B-10)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-05',
          number: 5,
          title: 'Protection Devices and Power Distribution',
          subtitle: 'MWA B-8 Protection (15%) · B-9 Distribution (15%) · B-10 Power Conditioning/UPS (7%)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch05-s1',
              title: '5.1 Overcurrent Protection Devices',
              content: [
                {
                  type: 'paragraph',
                  text: 'Overcurrent protection devices (OCPDs) protect conductors and equipment against excessive current caused by overloads and short circuits. Every ungrounded (phase) conductor must be protected by an OCPD rated no higher than the conductor\'s ampacity (with some exceptions for motors).',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Overcurrent Protection Devices',
                  items: [
                    'Fuses — one-time devices that melt to interrupt fault current; fast-acting or time-delay types; Classes H, J, K, L, T, etc.',
                    'Moulded-case circuit breakers (MCCBs) — resettable; magnetic trip (instantaneous) for short circuits, thermal trip (time-delay) for overloads',
                    'Miniature circuit breakers (MCBs) — standard residential/light commercial breakers',
                    'Electronic trip circuit breakers — adjustable trip settings (long-time, short-time, instantaneous, ground fault) for precise coordination',
                    'Current-limiting fuses — interrupt fault current so fast they limit the peak let-through current; protect downstream equipment from high fault energy',
                    'Relay protection — protective relays combined with current transformers and contactors/breakers; used on medium and high-voltage systems',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Coordination Study',
                  definition: 'An engineering analysis of all OCPDs in a distribution system to ensure that only the device closest to a fault opens — minimizing the outage to the smallest possible area. Also called selective coordination.',
                },
                {
                  type: 'paragraph',
                  text: 'Trip settings must be set according to the load requirements, the coordination study results, and CEC requirements. After any modification, panel and feeder circuit directories must be updated and labelled.',
                },
              ],
            },
            {
              id: 'elec-ch05-s2',
              title: '5.2 Ground Fault, Arc Fault, and Surge Protection',
              content: [
                {
                  type: 'keyTerm',
                  term: 'GFCI (Ground Fault Circuit Interrupter)',
                  definition: 'Detects a ground fault current as small as 5mA (imbalance between the hot and neutral conductors) and trips within 1/40th of a second — fast enough to prevent electrocution. Required by the CEC in wet or damp locations (bathrooms, kitchens, garages, outdoors, construction sites).',
                },
                {
                  type: 'keyTerm',
                  term: 'AFCI (Arc Fault Circuit Interrupter)',
                  definition: 'Detects the waveform signature of arcing faults — a leading cause of electrical fires — and disconnects the circuit. Combination-type AFCIs protect against both series and parallel arc faults. Required by the CEC in bedrooms and other residential locations.',
                },
                {
                  type: 'infoBox',
                  title: 'Surge Protection Devices (SPDs) — Types',
                  items: [
                    'MOV (Metal Oxide Varistor) — most common; clamps transient voltages by becoming low-resistance when voltage exceeds a threshold',
                    'Zener diodes — fast-acting semiconductor clamps used in electronic equipment protection',
                    'Thyristors (TVS) — transient voltage suppression devices used in data and signal circuits',
                    'Service entrance SPD — Type 1 (installed before the main breaker) or Type 2 (after main breaker) provides whole-building protection',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch05-s3',
              title: '5.3 Power Distribution Equipment',
              content: [
                {
                  type: 'paragraph',
                  text: 'Power distribution equipment receives power from the service entrance and distributes it to various loads through feeder and branch circuits. All distribution equipment must be selected for the correct voltage, current rating, fault current rating, and enclosure type.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Distribution Equipment',
                  items: [
                    'Panels and sub-panels — distribute power to branch circuits; identified by a main breaker or main lugs',
                    'Switchboards — large, floor-mounted assemblies with bolted and draw-out sections; used for large commercial/industrial main services',
                    'Power distribution centres (PDCs) — factory-assembled distribution systems',
                    'Motor control centres (MCCs) — factory-assembled enclosures containing motor starters, disconnects, and PLCs for multi-motor systems',
                    'Transfer switches — automatically or manually switch between normal and emergency/standby power sources (ATS = Automatic Transfer Switch)',
                    'Busbars — low-impedance conductors that distribute current to multiple circuits within an enclosure',
                    'CTs and VTs (instrument transformers) — for metering on large distribution equipment',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Enclosure NEMA/CSA Type Designation',
                  definition: 'A standardized classification of electrical enclosures by their protection level. Type 1 = general-purpose indoor; Type 3R = outdoor rainproof; Type 4 = watertight; Type 4X = corrosion-resistant watertight; Type 12 = industrial dust-tight; Type 7 = hazardous location. CSA designations follow NEMA as a basis.',
                },
              ],
            },
            {
              id: 'elec-ch05-s4',
              title: '5.4 Power Conditioning, UPS, and Surge Suppression Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Power quality problems — harmonics, poor power factor, transient voltages, and voltage sags — can damage sensitive loads and reduce system efficiency. Power conditioning equipment corrects these problems to deliver clean, stable power.',
                },
                {
                  type: 'infoBox',
                  title: 'Power Quality Problems and Solutions',
                  items: [
                    'Harmonics — caused by non-linear loads (VFDs, UPS, electronic ballasts); corrected with passive/active harmonic filters, K-rated transformers',
                    'Poor power factor — caused by inductive loads (motors, transformers); corrected with power factor correction (PFC) capacitor banks or synchronous condensers',
                    'Transient voltages — lightning surges, switching transients; suppressed with SPDs (MOVs, TVS diodes)',
                    'Voltage sags/swells — corrected by automatic voltage regulators (AVRs) or UPS systems',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Types of UPS Systems',
                  items: [
                    'Offline (standby) UPS — normally passes utility power through; switches to battery on power failure (slight transfer time)',
                    'Online (double-conversion) UPS — continuously converts AC-to-DC-to-AC; provides perfect isolation from utility power quality problems; zero transfer time',
                    'Line-interactive UPS — AVR corrects voltage sags without switching to battery; fast transfer on total failure',
                    'Maintenance bypass — allows UPS servicing without interrupting the critical load',
                    'Static bypass — automatically bypasses the UPS inverter if the inverter fails; maintains power to the load',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'UPS systems contain batteries, capacitors, and multiple energy sources — hazards unique to UPS work. The DC bus may remain energized even after the AC input is disconnected. Always confirm all energy sources are identified and isolated before working inside a UPS.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q05-1',
              question: 'A GFCI device trips when it detects a ground fault current of approximately:',
              options: ['50 mA', '15 mA', '5 mA', '100 mA'],
              correctIndex: 2,
              explanation: 'GFCI devices are designed to trip at a ground fault current of approximately 4–6 mA (commonly stated as 5 mA). This is below the threshold for ventricular fibrillation (approximately 75–100 mA) but above normal leakage current levels, preventing nuisance tripping.',
            },
            {
              id: 'elec-q05-2',
              question: 'Which type of UPS provides the best power quality because the load is always powered through the inverter?',
              options: ['Offline (standby) UPS', 'Line-interactive UPS', 'Online (double-conversion) UPS', 'Ferroresonant UPS'],
              correctIndex: 2,
              explanation: 'An online (double-conversion) UPS continuously converts incoming AC to DC, then back to AC through its inverter. This provides complete isolation from utility power quality problems (harmonics, transients, sags), zero transfer time on power failure, and the cleanest possible output voltage waveform.',
            },
            {
              id: 'elec-q05-3',
              question: 'Which NEMA enclosure type is required for outdoor equipment that must be protected from rain and direct weather?',
              options: ['NEMA Type 1', 'NEMA Type 3R', 'NEMA Type 12', 'NEMA Type 7'],
              correctIndex: 1,
              explanation: 'NEMA Type 3R enclosures are rated for outdoor use and protect against rain, sleet, and snow. NEMA Type 1 is general-purpose indoor only. Type 12 is indoor dust-tight. Type 7 is for hazardous locations.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 6 — Bonding, Grounding, Power Generation & High Voltage (MWA B-11 to B-15)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-06',
          number: 6,
          title: 'Bonding, Grounding, Generation, High Voltage, and Transformers',
          subtitle: 'MWA B-11 Bonding/Grounding (15%) · B-12 Generation (8%) · B-13 Renewable (8%) · B-14 High Voltage (6%) · B-15 Transformers (12%)',
          isFree: false,
          estimatedMinutes: 70,
          sections: [
            {
              id: 'elec-ch06-s1',
              title: '6.1 Bonding and Grounding Systems (Task B-11)',
              content: [
                {
                  type: 'paragraph',
                  text: 'A properly designed bonding and grounding system performs two critical functions: (1) it establishes a stable voltage reference, and (2) it provides a low-impedance path for fault current to return to the source so that the OCPD trips. These functions require both a grounding system (earth connection) and a bonding system (metallic continuity).',
                },
                {
                  type: 'infoBox',
                  title: 'Ground Fault Protection Systems (CEC Section 14)',
                  items: [
                    'Ground fault protection (GFP) on services over 1000A — required by the CEC for solidly grounded systems over 150V to ground',
                    'Residual current device (RCD) systems — monitor current imbalance in all conductors, including the neutral; used on high-impedance grounded systems',
                    'Ground fault detection (GFD) — used on ungrounded or high-impedance grounded systems to detect a first fault without tripping; allows controlled maintenance shutdown',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Lightning Protection System',
                  definition: 'A system of air terminals (lightning rods), conductors, and ground rods designed to safely conduct lightning strikes to ground. Lightning protection is separate from the electrical grounding system but must be bonded to it. Installed per CSA B72 and CEC Section 10.',
                },
              ],
            },
            {
              id: 'elec-ch06-s2',
              title: '6.2 Power Generation and Conversion Systems (Task B-12)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Emergency and standby generators provide backup power for life safety systems, critical loads, and continuity of operations. Construction electricians install and maintain both AC generating systems (diesel and natural gas generator sets) and DC generating and conversion systems.',
                },
                {
                  type: 'infoBox',
                  title: 'AC Generator (Genset) Components',
                  items: [
                    'Prime mover — diesel engine, natural gas engine, or turbine',
                    'Alternator — produces AC voltage; the rotor creates the rotating magnetic field',
                    'Automatic Voltage Regulator (AVR) — maintains constant output voltage as load varies',
                    'Governor — maintains constant engine speed (and therefore frequency) as load varies',
                    'Transfer switch — connects the load to the generator when utility power fails',
                    'Paralleling gear — allows two or more generators to operate simultaneously, sharing load',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'DC generating systems include rectifiers (AC-to-DC converters) used for battery charging, DC motor drives, and electrochemical processes. They include uncontrolled rectifiers (diodes), controlled rectifiers (thyristors/SCRs), and switch-mode power supplies (SMPS).',
                },
              ],
            },
            {
              id: 'elec-ch06-s3',
              title: '6.3 Renewable Energy Generating and Storage Systems (Task B-13)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Renewable energy systems are a growing area of employment for construction electricians. Solar photovoltaic (PV), wind, hydrokinetic, and geothermal systems all require specialized electrical knowledge for safe installation and maintenance.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Renewable Energy Systems',
                  items: [
                    'Solar photovoltaic (PV) — converts sunlight to DC electricity; panels wired in strings; inverter converts DC to AC',
                    'Wind turbines — converts wind kinetic energy to AC electricity; step-up transformer for grid connection',
                    'Hydrokinetic turbines — uses flow of water (river, tidal) to drive generators',
                    'Geothermal — uses heat from the earth; electrical work involves heat pump connections',
                    'Fuel cells — electrochemical conversion of hydrogen to electricity',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Connection Types: Grid-Dependent vs. Grid-Independent',
                  items: [
                    'Grid-dependent (grid-tied) — connected to the utility grid; inverter must have anti-islanding capability (shuts down during grid outage to prevent energizing downed lines)',
                    'Grid-independent (stand-alone / off-grid) — not connected to utility; requires energy storage (battery bank) and a charge controller',
                    'Grid-tied with backup — includes battery storage and a critical loads panel; maintains power to essential loads during grid outage',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Energy Storage Systems',
                  items: [
                    'Battery banks — lithium-ion, lead-acid, flow batteries; require BMS (Battery Management System)',
                    'Pumped hydro — large-scale; pumps water uphill to store energy, releases it to generate power',
                    'Compressed air energy storage (CAES) — compresses air in caverns; releases to drive turbines',
                    'Key components: transfer switches, inverters, isolation disconnects, controls, battery chargers',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch06-s4',
              title: '6.4 High-Voltage Systems (Task B-14)',
              content: [
                {
                  type: 'paragraph',
                  text: 'High-voltage work in Canada is defined as systems over 750V AC (or 1060V DC) per the CEC. HV construction electricians install and maintain switchyards, substations, electrical vaults, HV MCC units, and solar arrays. Additional certifications, specific PPE, and strict procedures are required.',
                },
                {
                  type: 'infoBox',
                  title: 'High-Voltage Equipment',
                  items: [
                    'Distribution equipment — HV switchgear, air-insulated switchgear (AIS), gas-insulated switchgear (GIS)',
                    'Contactors, motor starters — for HV motors (over 1000V)',
                    'HV fuses — expulsion fuses, current-limiting fuses, dropout cutouts',
                    'Disconnects and isolating switches — for de-energizing sections during maintenance',
                    'Reclosers — automatic circuit breakers used on distribution lines; re-close after a momentary fault',
                    'VTs and CTs — instrument transformers for metering and protection',
                    'Station ground grid — grid of buried copper conductors that limits step and touch voltages in a substation',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Step Voltage and Touch Voltage',
                  definition: 'During a ground fault in a substation, current flows through the earth, creating voltage gradients. Step voltage is the potential difference between two points on the ground one pace apart (dangerous to walking personnel). Touch voltage is the potential difference between a grounded structure and a point on the ground where a person stands. Station ground grids are designed to limit both.',
                },
                {
                  type: 'infoBox',
                  title: 'HV Cable Terminations and Testing',
                  items: [
                    'Potheads — sealed cable terminations that prevent moisture ingress into the cable insulation',
                    'Stress relief terminations (heat shrink and cold shrink) — manage the electric field stress at the cable end where the shield is cut back',
                    'High-potential (hi-pot) test — applies a DC or AC test voltage above normal operating voltage to verify insulation integrity; results documented',
                    'Acceptance tests — polarization index, ground grid resistance, phasing test, timing test, current injection',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch06-s5',
              title: '6.5 Transformers (Task B-15)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Transformers change voltage and current levels using mutual induction. They are part of the distribution system, not a load. Construction electricians install extra-low-voltage, low-voltage single-phase, low-voltage three-phase, and high-voltage transformers.',
                },
                {
                  type: 'infoBox',
                  title: 'Transformer Voltage Classifications',
                  items: [
                    'Extra-low-voltage (ELV) — secondary ≤ 30V AC or 60V DC; used for doorbells, thermostats, control circuits, fire alarm initiating circuits',
                    'Low-voltage single-phase — primary and secondary both ≤ 750V; residential 240/120V, isolation transformers, buck-boost',
                    'Low-voltage three-phase — primary and secondary both ≤ 750V; step-down from 600V to 208V for building distribution; delta-wye and wye-wye configurations',
                    'High-voltage transformers — primary or secondary > 750V; pad-mount, vault-mount, oil-filled, dry-type',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Transformer Key Concepts',
                  items: [
                    'Turns ratio — the ratio of primary turns (N₁) to secondary turns (N₂); V₁/V₂ = N₁/N₂; I₁/I₂ = N₂/N₁',
                    'kVA rating — transformer capacity in kilovolt-amps; does not depend on power factor',
                    'Voltage regulation — percentage change in secondary voltage from no-load to full-load',
                    'Transformer connections — delta (Δ): no neutral available; wye (Y): neutral available; delta-wye: most common step-down; wye-delta: least common',
                    'Tap changer — adjusts primary turns ratio to compensate for voltage variations; ±2.5% and ±5% taps are common',
                    'Overcurrent protection — transformer primary and secondary both require protection per CEC Table 26',
                    'K-rated transformers — designed to handle harmonic currents from non-linear loads (VFDs, computers)',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'When installing transformers, the electrician must: calculate conductor and overcurrent protection sizes for both primary and secondary circuits; determine the physical mounting location ensuring CEC required clearances; connect primary and secondary leads in the correct phase order; verify polarity (additive or subtractive); and perform insulation resistance tests on the windings before energization.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q06-1',
              question: 'A 75 kVA, 600V/208V three-phase transformer delivers full rated load. What is the approximate full-load secondary current?',
              options: ['72A', '125A', '208A', '361A'],
              correctIndex: 2,
              explanation: 'I = kVA / (√3 × V) = 75,000 / (1.732 × 208) = 75,000 / 360.3 ≈ 208A. This is the full-load secondary current at the 208V winding. The full-load primary current at 600V would be: 75,000 / (1.732 × 600) ≈ 72A.',
            },
            {
              id: 'elec-q06-2',
              question: 'A grid-tied solar inverter must have anti-islanding protection. What is the purpose of this feature?',
              options: [
                'To prevent the inverter from feeding power back to the grid',
                'To shut down the inverter when the utility grid goes offline, preventing back-energization of downed power lines',
                'To protect the inverter from lightning surges on the grid',
                'To regulate the output voltage to match the grid frequency',
              ],
              correctIndex: 1,
              explanation: 'Anti-islanding protection shuts down a grid-tied inverter automatically when utility power is lost. Without it, the solar system could continue to energize the utility distribution lines during an outage, creating a lethal hazard for utility workers working on "de-energized" lines.',
            },
            {
              id: 'elec-q06-3',
              question: 'When terminating a high-voltage shielded cable, what is the purpose of a stress relief termination?',
              options: [
                'To prevent moisture from entering the cable end',
                'To manage the electric field stress concentration at the point where the cable shield ends',
                'To provide mechanical protection at the cable entrance to equipment',
                'To reduce the conductor resistance at the termination point',
              ],
              correctIndex: 1,
              explanation: 'When the metallic shield of an HV cable is cut back, the electric field concentrates at the shield cutback point — this can lead to insulation breakdown. Stress relief terminations (heat-shrink or cold-shrink kits with built-in stress cones) redistribute the electric field stress gradually, preventing localized breakdown.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // PART 3 — WIRING SYSTEMS
    // MWA C: Installs, Services and Maintains Wiring Systems (34%)
    // Tasks: C-16 Raceways/Conductors (33%), C-17 Branch Circuitry (30%),
    //        C-18 HVAC (10%), C-19 Electric Heating (14%),
    //        C-20 Exit/Emergency Lighting (11%), C-21 Cathodic Protection (2%)
    // ============================================================
    {
      id: 'elec-part-3',
      number: 3,
      title: 'Wiring Systems',
      description: 'The largest section of the Red Seal exam — raceways, conductors, cables, branch circuitry, lighting, HVAC connections, electric heating, and emergency lighting.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 7 — Raceways, Conductors, Cables, and Enclosures (MWA C-16)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-07',
          number: 7,
          title: 'Raceways, Conductors, Cables, and Enclosures',
          subtitle: 'MWA C-16 · Raceways, Conductors, Cables and Enclosures (33% of MWA C)',
          isFree: false,
          estimatedMinutes: 65,
          sections: [
            {
              id: 'elec-ch07-s1',
              title: '7.1 Conductors and Cables',
              content: [
                {
                  type: 'paragraph',
                  text: 'Conductors are the current-carrying elements of an electrical system. Selection of the correct conductor type and size is one of the most fundamental skills in the trade — it is governed by the CEC and involves balancing ampacity, voltage drop, insulation rating, and physical environment.',
                },
                {
                  type: 'infoBox',
                  title: 'Conductor Materials',
                  items: [
                    'Copper — most common; excellent conductivity, easy to terminate, no antioxidant required (but used in some applications)',
                    'Aluminum — lighter and less expensive than copper; requires antioxidant compound at all connections; rated conductor size is typically 2 AWG sizes larger than equivalent copper',
                    'Copper-clad aluminum (CCA) — aluminum core with copper exterior; not permitted in all applications',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Common Cable Types (CEC Appendix B)',
                  items: [
                    'NMD90 (Loomex®) — non-metallic sheathed cable for indoor residential dry locations; rated 90°C',
                    'AC90 (BX) — armoured cable with interlocked steel armour; rated 90°C; used in commercial and industrial where the armour provides mechanical protection and is a valid ground path',
                    'TECK90 — thermoplastic-insulated, copper-shielded, PVC-jacketed cable; rated 90°C; direct burial and tray rated',
                    'Mineral insulated (MI) cable — copper conductors in magnesium oxide insulation, copper sheath; rated up to 250°C; used in fire alarm circuits and high-temperature environments',
                    'RW90 XLPE — cross-linked polyethylene insulation; rated 90°C; used in raceways and direct burial',
                    'URD cable — underground residential distribution cable; direct burial',
                    'Coaxial and data cables — covered under Section 60 and Section 12 of the CEC',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Conductor Sizing — Key CEC Rules',
                  items: [
                    'Ampacity — the maximum current a conductor can carry without exceeding its temperature rating; found in CEC Table 1, 2, or 3',
                    'Correction factors — ambient temperature above 30°C and more than 3 current-carrying conductors bundled together require derating',
                    'Voltage drop — CEC recommends maximum 3% for branch circuits, 5% for feeders + branch circuits combined (Rule 8-102)',
                    'Voltage drop formula: VD = (2 × L × R × I) / 1000 for single-phase; VD = (√3 × L × R × I) / 1000 for three-phase (where R is resistance per km from CEC tables)',
                    'Minimum conductor sizes — #14 AWG copper for branch circuits; #12 AWG for 20A circuits',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Conductors must be installed without damage to insulation and without mechanical stress at terminations. Colour coding per CEC Rule 4-032: black and red (and blue for 3-phase) for ungrounded phase conductors; white for grounded (neutral) conductors; green or bare for equipment grounding conductors.',
                },
              ],
            },
            {
              id: 'elec-ch07-s2',
              title: '7.2 Conduit and Fittings',
              content: [
                {
                  type: 'paragraph',
                  text: 'Conduit systems protect conductors from physical damage and provide a raceway for conductor installation and future changes. The type of conduit selected depends on the environment, required mechanical protection, and whether the conduit can serve as the equipment grounding conductor.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Conduit',
                  items: [
                    'Rigid Metal Conduit (RMC/RSC) — hot-dipped galvanized steel; the strongest mechanical protection; approved for all locations including direct burial and concrete encasement',
                    'Intermediate Metal Conduit (IMC) — lighter wall than RMC; same fittings; same applications',
                    'Electrical Metallic Tubing (EMT) — thin-wall steel; not threaded; use set-screw or compression couplings; indoor and outdoor above ground; the most common conduit in commercial construction',
                    'Rigid Non-Metallic Conduit (RNMC/PVC) — non-conductive; corrosion-resistant; for underground and wet locations; cannot be used as EGC; grey = electrical (CEC-approved), not plumbing PVC',
                    'Flexible Metal Conduit (FMC / Greenfield) — interlocked steel strip; used for final connections to equipment (motors, light fixtures) where vibration or movement exists; maximum 1.8 m unless protected',
                    'Liquid-tight Flexible Metal Conduit (LFMC) — FMC with PVC jacket; for wet locations and outdoor equipment connections',
                    'Liquid-tight Flexible Non-Metallic Conduit (LFNMC) — for chemical-resistant, wet, or outdoor connections',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Conduit Fill Rules (CEC Appendix B, Tables)',
                  items: [
                    'One conductor — 53% of conduit cross-sectional area',
                    'Two conductors — 31% of conduit cross-sectional area',
                    'Three or more conductors — 40% of conduit cross-sectional area',
                    'Conductor fill is calculated using the outside diameter of the conductor (including insulation) from CEC tables',
                    'Jamming ratio — the ratio of conduit ID to conductor OD; if between 2.8 and 3.2, jamming can occur during pulling and a larger conduit should be considered',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'All conduit bends must be made with an approved bender to avoid kinking or flattening. Standard bends: 90° (stub-up), offset, saddle (3-bend saddle for single obstruction), back-to-back. The CEC limits the total number of bends between pull points: no more than 360° of total bends (equivalent to four 90° bends) between junction boxes or conduit bodies.',
                },
              ],
            },
            {
              id: 'elec-ch07-s3',
              title: '7.3 Wireways, Cable Trays, and Other Raceways',
              content: [
                {
                  type: 'infoBox',
                  title: 'Other Raceway Types',
                  items: [
                    'Cable tray — ladder, solid-bottom, ventilated trough, or channel type; supports cables without enclosing them; used in industrial plants and data centres',
                    'Wireways (gutters) — sheet metal or PVC channels with removable covers; used for splicing and distributing conductors',
                    'Surface metal raceways (Wiremold®) — flat rectangular channels surface-mounted on walls; for retrofits where in-wall work is not practical',
                    'Underfloor duct systems — cast in concrete slabs; for office buildings with frequent outlet changes',
                    'Busway (bus duct) — factory-assembled copper or aluminum busbars in an enclosure; used for high-current feeders in industrial applications; plug-in type allows taps at any point',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch07-s4',
              title: '7.4 Boxes and Enclosures',
              content: [
                {
                  type: 'paragraph',
                  text: 'Electrical boxes provide a code-required protected space for splices, device connections, and luminaire support. The CEC requires a box at every splice, connection, or device location, with no buried (concealed) splices outside of a box.',
                },
                {
                  type: 'infoBox',
                  title: 'Box Fill Calculations (CEC Rule 12-3034)',
                  items: [
                    'Each conductor that originates outside the box and terminates or is spliced = 1 count',
                    'Each conductor that runs through the box = 1 count',
                    'Luminaire stud, hickey, or fitting = 1 count',
                    'All ground wires combined = 1 count',
                    'Each strap holding one or more devices (switch, receptacle) = 1 count per device',
                    'Box fill volume required: Each conductor count × conductor volume per Table 12-1 (e.g., #12 AWG = 20.4 cm³; #14 AWG = 16.4 cm³)',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q07-1',
              question: 'A 30-metre, single-phase, 120V branch circuit uses #12 AWG copper conductors (resistance = 5.21 Ω/km). The circuit supplies a 15A continuous load. What is the approximate voltage drop?',
              options: ['1.6V', '3.1V', '4.7V', '6.2V'],
              correctIndex: 2,
              explanation: 'VD = 2 × L × R × I / 1000 = 2 × 30m × 5.21 Ω/km × 15A / 1000 = 2 × 30 × 0.00521 × 15 = 4.69V ≈ 4.7V. The percentage voltage drop = 4.7V / 120V = 3.9%, which exceeds the CEC recommended 3% for branch circuits — a larger conductor should be considered.',
            },
            {
              id: 'elec-q07-2',
              question: 'Three #10 AWG conductors are installed in a conduit. The maximum conduit fill is 40% of its cross-sectional area. What does this rule apply to?',
              options: [
                'Any number of conductors in any conduit type',
                'Three or more conductors in any conduit type',
                'Two conductors; three or more use 53%',
                'Only conductors with insulation thicker than 1.5mm',
              ],
              correctIndex: 1,
              explanation: 'Per CEC Table B-2 (Conduit Fill), three or more conductors in a conduit are limited to 40% of the conduit\'s internal cross-sectional area. One conductor is limited to 53%, and two conductors to 31%. These limits ensure adequate pulling clearance and heat dissipation.',
            },
            {
              id: 'elec-q07-3',
              question: 'Which conduit type is permitted for direct burial and concrete encasement, and provides the highest level of mechanical protection?',
              options: ['EMT', 'FMC', 'RNMC (PVC)', 'RMC (RSC)'],
              correctIndex: 3,
              explanation: 'Rigid Metal Conduit (RMC, also called RSC — Rigid Steel Conduit) is the heaviest-wall conduit and is approved for all locations including direct burial, concrete encasement, and hazardous locations. EMT cannot be buried directly. FMC is not for burial. PVC (RNMC) cannot serve as an equipment grounding conductor.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 8 — Branch Circuitry, Devices, and Lighting (MWA C-17)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-08',
          number: 8,
          title: 'Branch Circuitry, Devices, and Lighting Systems',
          subtitle: 'MWA C-17 · Branch Circuitry and Devices (30% of MWA C)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch08-s1',
              title: '8.1 Luminaires and Lamps',
              content: [
                {
                  type: 'paragraph',
                  text: 'Luminaires (light fixtures) are selected based on the lighting level required (measured in lux), the environment (wet, damp, dry, hazardous), and energy efficiency requirements. The CEC requires luminaires to be listed and labelled for their intended location.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Luminaires',
                  items: [
                    'Recessed (pot lights) — installed into ceiling cavities; must be IC-rated (insulation contact) if insulation will cover them',
                    'Surface-mounted — attached directly to ceiling or wall',
                    'Pendant — hung from ceiling on stems, cables, or conduit',
                    'Wall-mounted (sconce)',
                    'Pole-mounted (lighting standards) — roadway, parking lot, and sports lighting',
                    'Track lighting — adjustable heads on an electrified track',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Lamp Technologies',
                  items: [
                    'LED (Light Emitting Diode) — most energy-efficient; long life; solid-state; no mercury; rapidly replacing all other technologies',
                    'Fluorescent — T5, T8, T12 tubes; requires ballast; contains mercury — must be disposed of as hazardous waste',
                    'HID (High Intensity Discharge) — Metal Halide, High-Pressure Sodium, Mercury Vapour; requires ballast and igniter; long warmup and restrike times',
                    'Incandescent — least efficient; being phased out',
                    'SSL (Solid-State Lighting) — broad category including LED',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s2',
              title: '8.2 Wiring Devices',
              content: [
                {
                  type: 'infoBox',
                  title: 'Types of Wiring Devices',
                  items: [
                    'Receptacles (outlets) — standard 15A/125V (NEMA 5-15), 20A/125V (NEMA 5-20), 30A/250V dryer (NEMA 14-30), 50A/250V range (NEMA 14-50)',
                    'Switches — single-pole, 3-way (allows switching from two locations), 4-way (allows switching from three or more locations)',
                    'Dimmer switches — control lighting levels; must be rated for LED loads when used with LEDs',
                    'Disconnecting means — fused disconnects, non-fused disconnects, safety switches; required within sight of and accessible to motor and HVAC equipment',
                    'Relays and contactors — electrically operated switches for remote or automatic control of loads',
                    'Timers and sensors — time clocks, occupancy/vacancy sensors, photocells',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s3',
              title: '8.3 Lighting Controls',
              content: [
                {
                  type: 'paragraph',
                  text: 'Energy management requirements in building codes increasingly mandate automatic lighting controls. Modern lighting control systems reduce energy consumption and qualify buildings for LEED certification.',
                },
                {
                  type: 'infoBox',
                  title: 'Lighting Control Technologies',
                  items: [
                    'Occupancy/vacancy sensors — turn lights on/off based on motion detection; PIR (passive infrared), ultrasonic, or dual-technology',
                    'Photocell (daylight sensor) — reduces artificial lighting when natural light is sufficient',
                    'Time clocks — programmed schedules for outdoor and after-hours lighting',
                    'Dimmer controls — reduce power to lamps; must be matched to lamp technology (LED-compatible dimmers)',
                    'Low-voltage switching — control relays centrally; 24V control wiring runs to switching points',
                    'Programmable lighting controllers — integrates all control functions; can be programmed for scenes and schedules',
                    'DALI (Digital Addressable Lighting Interface) — digital protocol allowing individual lamp addressing and dimming',
                    'Wireless controls — Zigbee, Z-Wave, DALI-2 wireless; no control wiring required',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s4',
              title: '8.4 Lighting Standards, Airport Visual Aid Systems, and Traffic Signals',
              content: [
                {
                  type: 'paragraph',
                  text: 'Lighting standards (poles) for roadways, parking lots, and area lighting require special installation procedures. The pole base is pre-cast or poured concrete, the underground conduit system runs to a handhole in the pole, and the luminaire is wired and mounted at the top.',
                },
                {
                  type: 'paragraph',
                  text: 'Airport runway lighting (visual aid systems) is a specialized area involving constant current regulators (CCRs), series circuits (all lights in a runway circuit are connected in series), isolation transformers at each fixture, and specific ARCAL (Aircraft Radio Control of Aerodrome Lighting) control systems. These systems are tested per Transport Canada and ICAO requirements.',
                },
                {
                  type: 'paragraph',
                  text: 'Traffic signal systems include signal heads, vehicle sensors (inductive loops, cameras), pedestrian push buttons, traffic signal controllers, and communication modems. Signals are programmed and tested by the electrician in coordination with the municipality or transportation authority.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q08-1',
              question: 'A recessed luminaire is installed in a ceiling where blown-in insulation will be placed directly over the fixture. What is the minimum requirement?',
              options: [
                'The luminaire must be rated for damp locations',
                'The luminaire must be IC-rated (insulation contact)',
                'A minimum 50mm air gap must be maintained around the fixture',
                'The luminaire must be a Type AT (airtight) LED',
              ],
              correctIndex: 1,
              explanation: 'When insulation will be in contact with or cover a recessed luminaire, the fixture must be IC-rated (Insulation Contact rated). Non-IC luminaires can overheat if insulation covers them, creating a fire hazard. IC-rated luminaires are designed to safely operate with insulation in contact.',
            },
            {
              id: 'elec-q08-2',
              question: 'In an airport runway series lighting circuit, why is an isolation transformer installed at each individual runway light?',
              options: [
                'To step up the voltage to the required lighting level',
                'To isolate each fixture so that a fault in one lamp does not interrupt the entire series circuit',
                'To provide GFCI protection for each lamp',
                'To regulate the current independently at each fixture',
              ],
              correctIndex: 1,
              explanation: 'Airport runway lights are wired in a series circuit powered by a constant current regulator. An isolation transformer at each fixture isolates the lamp so that if the lamp fails (open circuit), the series circuit continues to flow through the transformer secondary — maintaining all other lights in the circuit.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 9 — HVAC, Electric Heating, Emergency Lighting & Cathodic Protection (MWA C-18 to C-21)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-09',
          number: 9,
          title: 'HVAC, Electric Heating, Emergency Lighting, and Cathodic Protection',
          subtitle: 'MWA C-18 HVAC (10%) · C-19 Electric Heating (14%) · C-20 Exit/Emergency Lighting (11%) · C-21 Cathodic Protection (2%)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch09-s1',
              title: '9.1 HVAC Electrical Connections and Controls (Task C-18)',
              content: [
                {
                  type: 'paragraph',
                  text: 'HVAC systems are installed by mechanical trades but electrically connected by construction electricians. The electrician installs the branch circuit wiring, disconnect means, overcurrent protection, and control wiring for all HVAC equipment.',
                },
                {
                  type: 'infoBox',
                  title: 'HVAC Electrical Requirements',
                  items: [
                    'Branch circuit sizing — based on the nameplate full-load amps (FLA) of the compressor, blower motor, and auxiliary heaters',
                    'Disconnect means — must be within sight of and readily accessible to the equipment (within 9 m, unless lockable)',
                    'Overcurrent protection — sized per the nameplate or CEC requirement for motor circuits',
                    'Control voltage — most HVAC systems use 24V AC control circuits (stepped down by an onboard transformer)',
                    'Verification — test for specified voltage, current, and rotation after connection',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'HVAC Control Components',
                  items: [
                    'Thermostat — temperature-sensing device that controls heating/cooling; 24V two-wire to five-wire connections',
                    'Pressure switches — high and low refrigerant pressure protection; shut down compressor on abnormal pressures',
                    'Temperature switches — freeze protection, duct high-temperature limit',
                    'Flow switches — confirm airflow before energizing electric heating elements',
                    'VFDs (Variable Frequency Drives) — control fan and pump speeds for energy savings',
                    'Contactors and relays — switch high-voltage loads from low-voltage control signals',
                    'Electrical interlocks — prevent simultaneous operation of conflicting equipment modes',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch09-s2',
              title: '9.2 Electric Heating Systems (Task C-19)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Electric heating systems use resistance heating elements to convert electrical energy directly to heat. They are 100% efficient at the point of use but are generally more expensive to operate than gas or heat pumps. The CEC has specific wiring requirements for electric heaters because of the continuous load factor.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Electric Heating Systems',
                  items: [
                    'Baseboard heaters — convection heaters; most common in residential; 240V single-phase; minimum wire gauge #12 AWG',
                    'Unit heaters — forced-air heaters with fan; used in commercial and industrial',
                    'Radiant ceiling/wall panels — radiant heat; provides comfort without air movement',
                    'Floor heating cables — embedded in or under floor; low-power cables',
                    'Heat trace / freeze protection — cables wrapped around pipes to prevent freezing; thermostatically controlled',
                    'Duct heaters — electric resistance elements installed in HVAC ductwork; requires flow switch interlock',
                    'Induction heaters — industrial process heating',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Electric heating loads are continuous — the CEC requires branch circuits for electric heaters to be sized at 125% of the heater nameplate rating. The heater must never exceed 80% of the branch circuit rating. A 1500W heater draws 1500W ÷ 240V = 6.25A continuously; the minimum circuit breaker is 6.25A × 1.25 = 7.8A → use a 15A breaker (next standard size).',
                },
              ],
            },
            {
              id: 'elec-ch09-s3',
              title: '9.3 Exit and Emergency Lighting (Task C-20)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Exit and emergency lighting systems are life safety systems required by the National Building Code (NBC) and enforced by the AHJ. They must illuminate means of egress when normal lighting fails. Construction electricians install and maintain these systems.',
                },
                {
                  type: 'infoBox',
                  title: 'Emergency Lighting System Types',
                  items: [
                    'Self-contained unit — battery and charger built into the luminaire; tested by pressing the test button monthly; battery replaced every 4–5 years',
                    'Central battery system — a central battery bank powers all emergency luminaires; more reliable but more complex to install',
                    'Generator-powered — emergency luminaires on a dedicated circuit powered by the emergency generator; minimum 10-second transfer time per NBC',
                    'Exit signs — LED or fluorescent; must be continuously illuminated; battery backup required',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Emergency lighting circuits must be on a dedicated circuit that is not normally subject to switching. The CEC requires the circuit to be identified with red conductors or red labels where it shares a conduit with other circuits. Testing: monthly functional test (30 seconds), annual full-load discharge test (90 minutes per ULC S524 and NBC).',
                },
              ],
            },
            {
              id: 'elec-ch09-s4',
              title: '9.4 Cathodic Protection Systems (Task C-21)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Cathodic protection (CP) prevents corrosion of buried metal structures (pipelines, storage tanks, reinforcing steel) by making the structure the cathode of an electrochemical cell. Construction electricians install and service impressed current cathodic protection (ICCP) systems.',
                },
                {
                  type: 'keyTerm',
                  term: 'Impressed Current Cathodic Protection (ICCP)',
                  definition: 'Uses a DC power supply (rectifier) to force a protective current through the soil from an inert anode (graphite, platinum, mixed metal oxide) to the structure being protected. The current counters the natural electrochemical corrosion process. Used on pipelines, marine structures, and underground storage tanks.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q09-1',
              question: 'A 2400W, 240V electric baseboard heater is to be installed. What is the minimum branch circuit breaker size required by the CEC (continuous load rule)?',
              options: ['10A', '15A', '20A', '25A'],
              correctIndex: 1,
              explanation: 'Load current = 2400W ÷ 240V = 10A. Continuous load rule: circuit breaker ≥ 10A × 125% = 12.5A. The next standard breaker size above 12.5A is 15A. Therefore, a 15A, 240V double-pole breaker with #12 AWG conductors is the minimum required.',
            },
            {
              id: 'elec-q09-2',
              question: 'Per the National Building Code, what is the maximum transfer time allowed for an emergency generator to restore power to emergency lighting?',
              options: ['5 seconds', '10 seconds', '30 seconds', '60 seconds'],
              correctIndex: 1,
              explanation: 'The National Building Code (NBC) requires emergency power to be restored within 10 seconds of normal power failure for emergency lighting and life safety systems. This is achieved through the automatic transfer switch (ATS) and the generator\'s quick-start system.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // PART 4 — MOTORS AND CONTROL SYSTEMS
    // MWA D: Installs, Services and Maintains Motors and Control Systems (18%)
    // Tasks: D-22 Motor Starters/Controls (35%), D-23 Drives (22%),
    //        D-24 Motors (28%), D-25 Automated Control Systems (13%)
    // ============================================================
    {
      id: 'elec-part-4',
      number: 4,
      title: 'Motors and Control Systems',
      description: 'Motor starters, drives, single-phase and three-phase motors, DC motors, PLCs, and automated control systems — critical knowledge for industrial and commercial electrical work.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 10 — Motor Starters and Controls (MWA D-22)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-10',
          number: 10,
          title: 'Motor Starters and Controls',
          subtitle: 'MWA D-22 · Motor Starters and Controls (35% of MWA D)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch10-s1',
              title: '10.1 Motor Circuit Components',
              content: [
                {
                  type: 'paragraph',
                  text: 'Every motor circuit requires: a branch circuit conductor, overcurrent protection, a disconnecting means, a motor controller (starter), and overload protection. Understanding the function and CEC requirements for each component is essential.',
                },
                {
                  type: 'infoBox',
                  title: 'Motor Circuit Components — Summary',
                  items: [
                    'Branch circuit conductors — sized to minimum 125% of motor FLA per CEC Rule 28-106',
                    'Branch circuit overcurrent protection (short circuit protection) — fuse or breaker; sized larger than overloads to allow motor inrush; CEC Table 29 gives maximum values',
                    'Disconnecting means — must be within sight of the motor and controller; lockable in the open (off) position',
                    'Motor controller (starter) — controls starting and stopping; may include reversing, reduced voltage, multi-speed',
                    'Overload protection — thermal or electronic overload relay; protects motor windings from sustained overcurrent; trips at 115–125% of FLA',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Full Load Amps (FLA)',
                  definition: 'The current drawn by the motor at its rated horsepower output, rated voltage, and rated frequency. Found on the motor nameplate. All motor circuit sizing is based on FLA.',
                },
                {
                  type: 'keyTerm',
                  term: 'Locked Rotor Current (LRC / Inrush Current)',
                  definition: 'The current drawn by a motor at the instant of starting, before the rotor begins to turn. Typically 6–8× FLA for squirrel cage induction motors. The branch circuit OCPD must withstand this inrush without tripping.',
                },
              ],
            },
            {
              id: 'elec-ch10-s2',
              title: '10.2 Across-the-Line Starters and Magnetic Starters',
              content: [
                {
                  type: 'paragraph',
                  text: 'A magnetic motor starter consists of a contactor (main power contacts) and an overload relay (OLR). The contactor is energized by the control circuit, which includes the start/stop pushbuttons, auxiliary contacts (for holding), and interlocks.',
                },
                {
                  type: 'infoBox',
                  title: 'Control Circuit Logic — Three-Wire Control (Maintained)',
                  items: [
                    'START pushbutton (NO) — momentarily closes to energize the contactor coil',
                    'STOP pushbutton (NC) — normally closed; opening de-energizes the coil',
                    'Holding (sealing) contact — auxiliary NO contact on the contactor that closes when the contactor energizes, creating a parallel path around the START button; maintains the coil energized after the START button is released',
                    'Overload relay (OL) contact — normally closed contact in series with the coil circuit; trips open on overload, de-energizing the contactor',
                    'Three-wire control provides low-voltage protection (LVP) — the motor does not automatically restart after a power failure because the holding contact opens when the contactor drops out',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Reduced Voltage Starting Methods',
                  items: [
                    'Star-delta (wye-delta) starting — motor starts in wye (reduces voltage to each winding by 1/√3); transitions to delta for full voltage running; reduces inrush to 33% but also reduces starting torque to 33%',
                    'Auto-transformer starting — uses a tapped transformer to apply 50–80% voltage at start; stepped up to full voltage after the motor accelerates',
                    'Soft starter — electronic device using SCRs to gradually ramp up voltage; smooth torque, no current spikes after the soft-start period; no speed control during running',
                    'Variable Frequency Drive (VFD) — see Chapter 11',
                    'Resistance starter — inserts resistance in the rotor circuit (wound rotor motors only); reduces inrush, improves starting torque',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch10-s3',
              title: '10.3 Motor Control Devices',
              content: [
                {
                  type: 'infoBox',
                  title: 'Motor Control Input Devices',
                  items: [
                    'Push buttons — maintained (latching) or momentary (spring return); NO or NC contacts',
                    'Limit switches — mechanically actuated by equipment movement; position sensing',
                    'Float switches — liquid level control; actuated by float rising or falling',
                    'Pressure switches — actuated when system pressure reaches setpoint; pump and compressor protection',
                    'Temperature switches — actuated by temperature; fan control, safety interlocks',
                    'Proximity sensors — inductive, capacitive, photoelectric, ultrasonic — no mechanical contact required',
                    'Selector switches — multi-position switches for manual/auto, hand/off/auto (HOA) control',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q10-1',
              question: 'A 10 HP, 600V, three-phase motor has a nameplate FLA of 11.0A. What is the minimum branch circuit conductor ampacity required by the CEC?',
              options: ['11.0A', '13.75A', '15.0A', '17.0A'],
              correctIndex: 1,
              explanation: 'CEC Rule 28-106: Motor branch circuit conductors must be sized to a minimum of 125% of the motor FLA. 11.0A × 125% = 13.75A. Select conductors with an ampacity of at least 13.75A (minimum #14 AWG copper or #12 AWG copper, confirmed against CEC Table 2).',
            },
            {
              id: 'elec-q10-2',
              question: 'What is the purpose of the "holding" or "sealing" auxiliary contact in a three-wire motor starter control circuit?',
              options: [
                'To hold the motor at constant speed during load variations',
                'To maintain the contactor coil energized after the START button is released',
                'To provide overload protection during motor acceleration',
                'To prevent the motor from reversing direction',
              ],
              correctIndex: 1,
              explanation: 'The auxiliary holding (sealing) contact is a normally open contact on the main contactor that closes when the contactor energizes. It creates a parallel path around the momentary START pushbutton, maintaining the coil circuit closed after the start button is released. Without it, the motor would stop as soon as the START button is released.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 11 — Drives, Motors, and Automated Control Systems (MWA D-23, D-24, D-25)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-11',
          number: 11,
          title: 'Drives, Motors, and Automated Control Systems',
          subtitle: 'MWA D-23 Drives (22%) · D-24 Motors (28%) · D-25 Automated Controls (13%)',
          isFree: false,
          estimatedMinutes: 65,
          sections: [
            {
              id: 'elec-ch11-s1',
              title: '11.1 Variable Frequency Drives (AC Drives)',
              content: [
                {
                  type: 'paragraph',
                  text: 'A Variable Frequency Drive (VFD) converts fixed-frequency AC power to variable-frequency, variable-voltage AC output, allowing precise speed control of AC induction motors. VFDs are the most energy-efficient method of motor speed control — reducing motor speed to 80% reduces power consumption to approximately 51% (cube law relationship).',
                },
                {
                  type: 'infoBox',
                  title: 'VFD Internal Stages',
                  items: [
                    'Rectifier stage — converts AC input to DC (uncontrolled diode bridge)',
                    'DC bus (filter) — smooths the DC voltage using large capacitors; stores energy',
                    'Inverter stage — converts DC back to variable-frequency AC using IGBT (Insulated Gate Bipolar Transistor) switches; PWM (Pulse Width Modulation) generates a simulated sine wave',
                    'Control board — processes speed reference signal and feedback; generates IGBT gate signals',
                    'EMC filter — reduces electromagnetic interference that VFDs can produce on the supply system',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'VFD Installation Considerations',
                  items: [
                    'Input line reactor — reduces harmonic distortion on the supply and protects VFD from supply transients',
                    'Output reactor — reduces dV/dt (voltage rise rate) on motor cables; reduces bearing current damage on long cable runs',
                    'Shielded motor cable — required on runs over a few metres to prevent EMI radiation',
                    'Motor temperature derating — VFD-rated motors (INVERTER DUTY) are required for continuous low-speed operation because self-cooling fan speed also decreases',
                    'Bypass contactor — allows motor to run across-the-line if the VFD fails',
                    'Programming — set nameplate motor FLA, voltage, frequency; set accel/decel ramps, current limits, and fault parameters',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch11-s2',
              title: '11.2 DC Drives',
              content: [
                {
                  type: 'paragraph',
                  text: 'DC drives control the speed and torque of DC motors by varying the DC armature voltage and/or field current. Though AC VFDs have largely replaced DC drives in new installations, DC drive systems remain in service in many industrial applications.',
                },
                {
                  type: 'infoBox',
                  title: 'DC Drive Components',
                  items: [
                    'Power supply — provides regulated DC power to the control circuit',
                    'Converter (rectifier) — converts AC to controlled DC using SCRs (Silicon Controlled Rectifiers) or IGBTs',
                    'Speed control — regulates armature voltage to control speed',
                    'Torque control — adjusts armature current to control torque',
                    'Field controller — adjusts field current for field weakening above base speed',
                    'EMC filter — reduces line harmonics generated by the SCR firing',
                    'Feedback devices — encoders and tachometers provide speed feedback for closed-loop control',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch11-s3',
              title: '11.3 Single-Phase, Three-Phase, and DC Motors',
              content: [
                {
                  type: 'infoBox',
                  title: 'Single-Phase Motor Types',
                  items: [
                    'Capacitor-start, induction-run — start capacitor in series with start winding; high starting torque; capacitor disconnected at ~75% speed by centrifugal switch',
                    'Capacitor-start, capacitor-run (dual capacitor) — start capacitor for high starting torque, run capacitor for better running efficiency and power factor',
                    'Permanent split capacitor (PSC) — run capacitor permanently in circuit; lower starting torque but quieter; used in fans and small pumps',
                    'Shaded pole — low starting torque; quiet; used in small fans and appliances; cannot be reversed',
                    'Universal motor — operates on AC or DC; high speed, high torque; used in power tools and appliances',
                    'Split-phase — no capacitor; low starting torque; start winding disconnected at 75% speed',
                    'Hermetically sealed — motor and compressor sealed in same housing; used in refrigeration and AC compressors',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Three-Phase Motor Types',
                  items: [
                    'Squirrel cage induction motor — most common industrial motor; simple, rugged, low maintenance; rotor bars are short-circuited; speed determined by supply frequency and number of poles',
                    'Wound rotor induction motor — rotor has slip rings connected to external resistance; variable resistance allows reduced starting current and speed control; higher maintenance',
                    'Synchronous motor — runs at exactly synchronous speed (no slip); used for power factor correction (when over-excited) and precision speed applications',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'DC Motor Types',
                  items: [
                    'Series DC motor — field winding in series with armature; high starting torque; speed varies greatly with load; never run unloaded (dangerous overspeed); used in traction (cranes, hoists)',
                    'Shunt DC motor — field winding in parallel with armature; relatively constant speed; used for machine tools',
                    'Compound DC motor — both series and shunt field windings; combines characteristics of both',
                    'Separately excited DC motor — field supplied from separate source; best speed regulation; used in drive applications requiring precise control',
                    'Permanent magnet DC motor — field provided by permanent magnets; no field winding; compact; used in small appliances and servo drives',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Motor nameplate information includes: HP or kW rating, voltage, FLA, RPM, frame size, insulation class, service factor, efficiency, power factor, frequency, and number of phases. The NEMA frame designation indicates the shaft height and bolt pattern dimensions.',
                },
              ],
            },
            {
              id: 'elec-ch11-s4',
              title: '11.4 Automated Control Systems — PLC, SCADA, DCS',
              content: [
                {
                  type: 'paragraph',
                  text: 'Automated control systems replace hard-wired relay logic with programmable devices, enabling complex, flexible, and easily modified control sequences. Construction electricians install, wire, program, and maintain these systems.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Automated Control Systems',
                  items: [
                    'PLC (Programmable Logic Controller) — the workhorse of industrial automation; scans inputs, executes ladder logic program, updates outputs; used for machine control, conveyor systems, pump stations',
                    'SCADA (Supervisory Control and Data Acquisition) — monitors and controls geographically distributed systems (pipelines, water treatment, power grids) via RTUs or PLCs at remote sites',
                    'DCS (Distributed Control System) — used in continuous process industries (oil refinery, chemical plant); controllers distributed throughout the plant and connected over a plant bus',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'PLC Hardware Components',
                  items: [
                    'Power supply — provides regulated DC power to the PLC backplane',
                    'CPU (Central Processing Unit) — runs the user program; stores data; communicates with I/O modules',
                    'Input modules — digital (DI) or analog (AI); convert field signals to CPU-readable data',
                    'Output modules — digital (DO) or analog (AO); convert CPU commands to field signals',
                    'Communication module — Ethernet, Modbus, Profibus, DeviceNet, BACnet, Fieldbus',
                    'HMI (Human Machine Interface) — touchscreen or panel for operator monitoring and control',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Number and Code Systems Used in PLCs',
                  items: [
                    'Binary — base 2; digits 0 and 1; the native language of digital electronics',
                    'Decimal — base 10; standard number system',
                    'Hexadecimal — base 16; digits 0–9, A–F; compact representation of binary data',
                    'Octal — base 8; digits 0–7; used in some older PLC addressing systems',
                    'BCD (Binary Coded Decimal) — each decimal digit encoded as 4-bit binary; used with thumbwheel switches',
                    'ASCII — 7-bit codes for alphanumeric characters; used in HMI displays and serial communications',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Basic Ladder Logic Instructions',
                  items: [
                    'XIC (Examine if Closed) — instruction is TRUE when the corresponding bit is 1 (equivalent to a NO contact)',
                    'XIO (Examine if Open) — instruction is TRUE when the corresponding bit is 0 (equivalent to a NC contact)',
                    'OTE (Output Energize) — sets the output bit to 1 when the rung logic is true (equivalent to a coil)',
                    'OTL (Output Latch) / OTU (Output Unlatch) — latching and unlatching output coils',
                    'TON (Timer On-Delay) / TOF (Timer Off-Delay) — timing functions',
                    'CTU (Count Up) / CTD (Count Down) — counting functions',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q11-1',
              question: 'Which internal stage of a VFD produces the variable-frequency AC output to the motor?',
              options: ['Rectifier stage', 'DC bus capacitor bank', 'Inverter stage (IGBT switching)', 'EMC input filter'],
              correctIndex: 2,
              explanation: 'The inverter stage uses IGBT (Insulated Gate Bipolar Transistor) switches to chop the DC bus voltage into pulses of varying width (PWM — Pulse Width Modulation), creating a variable-frequency, variable-voltage AC output that simulates a sine wave at the desired frequency and voltage.',
            },
            {
              id: 'elec-q11-2',
              question: 'A squirrel cage induction motor is running at 1740 RPM on a 60 Hz, 4-pole supply. What is the synchronous speed, and what is the percent slip?',
              options: ['1800 RPM synchronous speed, 3.3% slip', '1500 RPM synchronous speed, 16% slip', '3600 RPM synchronous speed, 51.7% slip', '1200 RPM synchronous speed, 45% slip'],
              correctIndex: 0,
              explanation: 'Synchronous speed: Ns = 120 × f / P = 120 × 60 / 4 = 1800 RPM. Slip = (Ns − Nr) / Ns × 100% = (1800 − 1740) / 1800 × 100% = 3.33%. Normal full-load slip for squirrel cage motors is 2–5%.',
            },
            {
              id: 'elec-q11-3',
              question: 'In PLC ladder logic, what does an XIC (Examine if Closed) instruction represent?',
              options: [
                'A normally closed contact that opens when the bit is 1',
                'A normally open contact that is TRUE when the corresponding bit is 1',
                'An output coil that energizes when the rung is true',
                'A timer instruction that activates on a rising edge',
              ],
              correctIndex: 1,
              explanation: 'XIC (Examine if Closed) is equivalent to a normally open (NO) contact in relay logic. The instruction evaluates as TRUE (passes power) when the corresponding PLC address bit is 1 (ON). It is the most common instruction in PLC ladder programs.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // PART 5 — SIGNALLING AND COMMUNICATION SYSTEMS
    // MWA E: Installs, Services and Maintains Signalling and Communication Systems (10%)
    // Tasks: E-26 Signalling (47%), E-27 Communication (30%), E-28 Integrated Control (23%)
    // ============================================================
    {
      id: 'elec-part-5',
      number: 5,
      title: 'Systèmes de signalisation et de communication',
      description: 'Systèmes d\'alarme incendie, sécurité et surveillance, VDV/CATV, sonorisation et appels infirmiers, automatisation des bâtiments et systèmes de contrôle intégré.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 12 — Systèmes de signalisation et de communication (AMT E-26, E-27)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-12',
          number: 12,
          title: 'Systèmes d\'alarme incendie, de sécurité et de communication',
          subtitle: 'AMT E-26 Signalisation (47 %) · E-27 Systèmes de communication (30 %)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch12-s1',
              title: '12.1 Systèmes d\'alarme incendie (Tâche E-26)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes d\'alarme incendie sont des systèmes de sécurité des personnes régis par le Code national de prévention des incendies (CNPI), les normes ULC et la section 32 du CCE. Ils nécessitent des méthodes de câblage spéciales, la supervision de tous les circuits et doivent être testés et vérifiés par une personne qualifiée.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants d\'un système d\'alarme incendie',
                  items: [
                    'Panneau de commande d\'alarme incendie (FACP) — le "cerveau" du système ; surveille tous les circuits d\'entrée et de signalisation ; connecté à la centrale de télésurveillance',
                    'Dispositifs d\'entrée — détectent les conditions d\'incendie : détecteurs de fumée (ionisation, photoélectriques), détecteurs de chaleur (température fixe, montée de température), détecteurs de flamme, déclencheurs manuels, détecteurs de débit de sprinklers, détecteurs de fumée en gaine',
                    'Dispositifs de signalisation — alertent les occupants : cloches, avertisseurs sonores, stroboscopes, haut-parleurs d\'évacuation',
                    'Afficheur déporté — affichage à distance de l\'état des zones et des emplacements d\'alarme',
                    'Câblage — circuits deux fils ou quatre fils homologués ULC ; classe A (tolérant aux défauts) ou classe B (surveillés par résistance de fin de ligne)',
                    'Alimentation électrique — primaire (120 V CA) et secondaire (batterie de secours au plomb-acide étanche, minimum 24 heures de veille + 5 minutes d\'alarme)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Classes de circuits d\'alarme incendie',
                  items: [
                    'Classe A — câblage en boucle ; les deux extrémités de chaque circuit sont connectées au FACP ; une seule coupure ou court-circuit ne désactive pas le circuit ; requis dans les immeubles de grande hauteur et les hôpitaux',
                    'Classe B — câblage en T ; une résistance de fin de ligne (EOLR) au dispositif le plus éloigné surveille le circuit ; un seul défaut désactive la branche affectée',
                    'Systèmes adressables — chaque dispositif a une adresse numérique unique ; le FACP peut identifier le dispositif exact en alarme ou en défaut ; pas de résistance de fin de ligne requise',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s2',
              title: '12.2 Systèmes de sécurité et de surveillance (Tâche E-26)',
              content: [
                {
                  type: 'infoBox',
                  title: 'Composants d\'un système de sécurité',
                  items: [
                    'Panneau de commande — traite les entrées de tous les capteurs ; communique avec la centrale de télésurveillance',
                    'Détecteurs de mouvement — infrarouge passif (PIR), micro-ondes, double technologie',
                    'Contacts de porte/fenêtre — contact magnétique ; surveille les événements d\'ouverture',
                    'Détecteurs de bris de verre — capteurs acoustiques ou vibratoires',
                    'Caméras (CCTV/IP) — analogiques sur câble coaxial ou IP numériques sur UTP Cat5e/6',
                    'DVR/NVR — enregistreur vidéo numérique (analogique) ou enregistreur vidéo réseau (IP) ; stocke la vidéo',
                    'Contrôle d\'accès — lecteurs de cartes, claviers, gâches électriques, serrures magnétiques',
                    'Centrale de télésurveillance — centrale 24/7 ; connectée par ligne téléphonique, cellulaire ou IP',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s3',
              title: '12.3 Systèmes voix/données/vidéo (VDV) et CATV (Tâche E-27)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de câblage structuré VDV fournissent l\'infrastructure pour la téléphonie, les réseaux de données et la distribution vidéo. Ces systèmes sont conçus, installés et testés selon les normes publiées par la TIA (Telecommunications Industry Association) et BICSI.',
                },
                {
                  type: 'infoBox',
                  title: 'Normes et catégories de câblage structuré',
                  items: [
                    'Cat 3 — voix (téléphone) ; 16 MHz ; largement obsolète pour les données',
                    'Cat 5e — 100 MHz ; prend en charge Ethernet 1 Gbps (1000BASE-T)',
                    'Cat 6 — 250 MHz ; prend en charge 10 Gbps jusqu\'à 55 m (10GBASE-T)',
                    'Cat 6A — 500 MHz ; prend en charge 10 Gbps jusqu\'à 100 m',
                    'Fibre optique — multimode (OM3, OM4 — orange ; OM5 — vert) ou monomode (OS2 — jaune) ; immunisée contre les CEM ; très grande bande passante et distance',
                    'Câble coaxial — utilisé pour la CATV (télédistribution), la CCTV et la distribution RF ; RG-6 pour la CATV résidentielle',
                    'Norme ANSI/TIA-568 — définit les catégories de câbles, les types de connecteurs (8P8C/RJ45 pour UTP), les exigences de test',
                    'Vérification et certification — les chemins de câbles sont testés avec un analyseur de câbles (Fluke DSX, etc.) ; paramètres de test : schéma de câblage, longueur, affaiblissement, paradiaphonie (NEXT), affaiblissement de retour',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Composants CATV',
                  items: [
                    'Émetteurs et équipements de réception (antennes paraboliques, tête de réseau)',
                    'Amplificateurs — augmentent le niveau du signal sur les longs trajets de câble',
                    'Diviseurs — divisent le signal vers plusieurs sorties (avec perte de signal)',
                    'Atténuateurs — réduisent le niveau du signal pour correspondre aux exigences d\'entrée de l\'équipement',
                    'Terminateurs — terminaisons 75 Ω sur les ports CATV inutilisés pour éviter les réflexions',
                    'TDR (réflectomètre temporel) — localise les défauts dans les câbles coaxiaux en mesurant le temps de retour des impulsions réfléchies',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s4',
              title: '12.4 Systèmes de sonorisation, d\'interphonie et d\'appel infirmier (Tâche E-27)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de sonorisation et d\'interphonie distribuent la communication vocale dans un bâtiment. Les systèmes d\'appel infirmier sont des systèmes de communication spécialisés utilisés dans les établissements de santé pour permettre aux patients d\'appeler le personnel.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants d\'un système de sonorisation',
                  items: [
                    'Microphones — dynamiques, à condensateur ; aux postes principaux et consoles de sonorisation',
                    'Amplificateurs — puissance nominale en watts RMS ; dimensionnés en fonction de la charge des haut-parleurs',
                    'Haut-parleurs — système audio distribué 70 V ou 25 V ; prises de réglage de volume à chaque haut-parleur',
                    'Générateurs de tonalités — messages et annonces préenregistrés',
                    'Alimentations — alimentations sans interruption pour les systèmes de sonorisation de sécurité',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les systèmes d\'appel infirmier peuvent être unidirectionnels (patient vers poste de soins) ou bidirectionnels (avec capacité de conversation). Les systèmes d\'appel infirmier modernes sur IP fonctionnent sur le réseau de câblage structuré de l\'hôpital. Les composants comprennent des stations d\'appel à chaque lit de patient, des voyants lumineux dans les couloirs, des afficheurs aux postes de soins, et l\'intégration avec le réseau local des soins aux patients, la sécurité et les systèmes d\'alimentation de secours.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q12-1',
              question: 'Dans un système d\'alarme incendie, qu\'est-ce qui distingue un circuit de classe A d\'un circuit de classe B ?',
              options: [
                'La classe A utilise des circuits à 2 fils ; la classe B utilise des circuits à 4 fils',
                'La classe A est un circuit en boucle qui reste fonctionnel malgré une seule coupure ou un court-circuit ; la classe B est un circuit en T qui est désactivé par une seule coupure',
                'Les circuits de classe A nécessitent des résistances de fin de ligne ; les circuits de classe B non',
                'La classe A utilise des dispositifs adressables ; la classe B utilise des dispositifs conventionnels (par zone)',
              ],
              correctIndex: 1,
              explanation: 'Le câblage de classe A boucle les deux conducteurs de retour au FACP, de sorte qu\'une seule coupure dans le circuit n\'interrompt pas la communication avec les dispositifs au-delà de la coupure. La classe B utilise une configuration en T avec une résistance de fin de ligne ; un seul défaut de coupure désactive le circuit au-delà de la coupure. La classe A est requise par le CNB dans les immeubles de grande hauteur.',
            },
            {
              id: 'elec-q12-2',
              question: 'Quelle catégorie de câble prend en charge Ethernet 10 Gbps jusqu\'à un maximum de 100 mètres ?',
              options: ['Cat 5e', 'Cat 6', 'Cat 6A', 'Cat 3'],
              correctIndex: 2,
              explanation: 'Le Cat 6A (catégorie 6 augmentée) est classé à 500 MHz et prend en charge 10GBASE-T (Ethernet 10 Gbps) sur toute la longueur de canal de 100 mètres. Le Cat 6 ne prend en charge 10 Gbps que jusqu\'à environ 55 mètres. Le Cat 5e ne prend en charge que 1 Gbps.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 13 — Automatisation des bâtiments et systèmes de contrôle intégré (AMT E-28)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-13',
          number: 13,
          title: 'Automatisation des bâtiments et systèmes de contrôle intégré',
          subtitle: 'AMT E-28 · Systèmes de contrôle intégré (23 % de l\'AMT E)',
          isFree: false,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'elec-ch13-s1',
              title: '13.1 Systèmes d\'automatisation des bâtiments (BAS)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Un système d\'automatisation des bâtiments (BAS) utilise un réseau informatisé pour surveiller et contrôler les systèmes CVAC, d\'éclairage, de sécurité et d\'énergie d\'un bâtiment à partir d\'une interface centrale ou à distance. Les systèmes BAS optimisent la consommation d\'énergie, améliorent le confort des occupants et permettent la détection à distance des défauts.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants BAS',
                  items: [
                    'Contrôleurs — contrôleurs numériques directs (DDC) au niveau de la zone ou de l\'équipement',
                    'Capteurs — détecteurs de présence, capteurs de niveau de lumière, capteurs de température, capteurs de CO₂',
                    'Actionneurs — moteurs de registres, actionneurs de vannes contrôlés par le BAS',
                    'Câblage réseau — généralement Cat5e ou Cat6 pour BACnet/IP ; paire torsadée blindée pour BACnet MS/TP ou LON',
                    'Commutateurs PoE — alimentation et données délivrées sur un seul câble Cat aux dispositifs IP',
                    'Serveurs et IHM — postes de travail de surveillance et de contrôle centraux',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'BACnet (Building Automation and Control Networks)',
                  definition: 'Norme de protocole de communication ouverte (ANSI/ASHRAE 135) pour les systèmes d\'automatisation des bâtiments. BACnet permet aux dispositifs de différents fabricants de communiquer sur un réseau commun. Les protocoles incluent BACnet/IP (sur Ethernet), BACnet MS/TP (sur paire torsadée) et BACnet sans fil.',
                },
              ],
            },
            {
              id: 'elec-ch13-s2',
              title: '13.2 Systèmes de contrôle des bâtiments',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de contrôle des bâtiments au niveau terrain font l\'interface entre le réseau BAS et les systèmes physiques CVAC, d\'éclairage et autres. Ils utilisent diverses technologies de contrôle — pneumatique, électronique analogique et contrôle numérique direct (DDC).',
                },
                {
                  type: 'infoBox',
                  title: 'Types de systèmes de contrôle des bâtiments',
                  items: [
                    'Contrôles pneumatiques — utilisent des signaux de pression d\'air comprimé (3–15 psi) pour positionner les registres et les vannes ; technologie ancienne ; fiable mais peu flexible',
                    'Contrôles électroniques analogiques — utilisent des signaux 0–10 V CC ou 4–20 mA ; encore largement utilisés pour les boucles de contrôle simples',
                    'Contrôle numérique direct (DDC) — contrôleurs à microprocesseur ; programmables ; communiquent via BACnet ou des protocoles propriétaires ; peuvent exécuter des séquences complexes',
                    'Contrôle par ordinateur — le serveur BAS coordonne tous les contrôleurs DDC ; tendances, gestion des alarmes et optimisation au niveau de supervision',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Dispositifs de terrain des systèmes de contrôle des bâtiments',
                  items: [
                    'Moteurs de registres — actionnent les registres de contrôle de débit d\'air dans les conduits CVAC',
                    'Actionneurs de vannes — contrôlent le débit dans les systèmes d\'eau glacée, d\'eau chaude et de vapeur',
                    'Contacteurs et relais — commutent les charges à partir des sorties des contrôleurs DDC',
                    'Capteurs — humidité, température, pression différentielle, niveau de lumière, présence, CO₂, débit',
                    'Avertisseurs — alarmes visuelles/sonores au niveau de l\'équipement local',
                    'Thermostats — points de consigne de température pour les zones locales',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch13-s3',
              title: '13.3 Entretien et maintenance des systèmes de contrôle intégré',
              content: [
                {
                  type: 'paragraph',
                  text: 'Lors du dépannage d\'un système de contrôle intégré, l\'électricien doit d\'abord identifier le type de système et examiner les plans de récolement, les journaux de maintenance et les rapports de certification avant d\'effectuer des tests. Les modifications apportées aux systèmes intégrés (en particulier l\'alarme incendie et la sécurité) doivent être coordonnées avec le client et la centrale de télésurveillance pour éviter les fausses alarmes.',
                },
                {
                  type: 'infoBox',
                  title: 'Étapes de dépannage des systèmes de contrôle intégré',
                  items: [
                    '1. Obtenir une description détaillée du dysfonctionnement auprès de l\'opérateur ou de l\'utilisateur final',
                    '2. Examiner les plans de récolement, les journaux de maintenance et l\'historique des modifications récentes',
                    '3. Effectuer une visite sur place pour identifier les composants du système et leur état',
                    '4. Tester le système de contrôle intégré à l\'aide de multimètres et d\'outils de diagnostic système',
                    '5. Comparer les résultats des tests au rapport de certification du fabricant et aux exigences du client',
                    '6. Ajuster ou remplacer les composants si nécessaire ; planifier avec le client pour minimiser les perturbations',
                    '7. Retester pour confirmer le bon fonctionnement',
                    '8. Mettre à jour la documentation et informer l\'opérateur du système de toutes les modifications effectuées',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q13-1',
              question: 'Quel protocole ouvert est le plus couramment utilisé pour la communication entre les composants de systèmes d\'automatisation de bâtiments de différents fabricants ?',
              options: ['Modbus RTU', 'BACnet (ANSI/ASHRAE 135)', 'Profibus DP', 'DeviceNet'],
              correctIndex: 1,
              explanation: 'BACnet (ANSI/ASHRAE 135) est le protocole ouvert dominant pour les systèmes d\'automatisation de bâtiments en Amérique du Nord. Il a été spécifiquement développé pour les applications d\'automatisation des bâtiments (CVAC, éclairage, sécurité) et prend en charge plusieurs couches physiques (BACnet/IP, BACnet MS/TP, BACnet sans fil). Modbus et Profibus sont plus courants dans l\'automatisation industrielle.',
            },
          ],
        },

      ], // fin des chapitres de la partie 5
    }, // fin de la partie 5

    // ============================================================
    // PARTIE 6 — PRÉPARATION À L'EXAMEN
    // Chapitres : Formules · Termes clés & Glossaire · Stratégie d'examen · Examen blanc
    // ============================================================
    {
      id: 'elec-part-6',
      number: 6,
      title: 'Préparation à l\'examen',
      description: 'Tout ce dont vous avez besoin pour aborder l\'examen du Sceau rouge en toute confiance — référence des formules, glossaire, stratégie d\'examen et un examen blanc chronométré complet de 30 questions.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 14 — Formules
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-14',
          number: 14,
          title: 'Référence des formules',
          subtitle: 'Toutes les formules testées à l\'examen du Sceau rouge — organisées par sujet',
          isFree: false,
          estimatedMinutes: 35,
          sections: [
            {
              id: 'elec-ch14-s1',
              title: '14.1 Loi d\'Ohm et puissance',
              content: [
                {
                  type: 'paragraph',
                  text: 'Ce sont les formules les plus fréquemment appliquées à l\'examen. Apprenez-les par cœur et sachez comment les réarranger chacune.',
                },
                {
                  type: 'infoBox',
                  title: 'Loi d\'Ohm',
                  items: [
                    'V = I × R',
                    'I = V / R',
                    'R = V / I',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Formules de puissance',
                  items: [
                    'P = V × I',
                    'P = I² × R',
                    'P = V² / R',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Résistances en série et en parallèle',
                  items: [
                    'Série : Rt = R1 + R2 + R3 ...',
                    'Parallèle : 1/Rt = 1/R1 + 1/R2 + 1/R3 ...',
                    'Deux résistances en parallèle : Rt = (R1 × R2) / (R1 + R2)',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s2',
              title: '14.2 Puissance en courant alternatif et facteur de puissance',
              content: [
                {
                  type: 'infoBox',
                  title: 'Courant alternatif monophasé',
                  items: [
                    'Puissance apparente : S (VA) = V × I',
                    'Puissance réelle : P (W) = V × I × FP',
                    'Puissance réactive : Q (VAR) = √(S² − P²)',
                    'Facteur de puissance : FP = P / S = cos θ',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Courant alternatif triphasé',
                  items: [
                    'Puissance apparente : S (VA) = √3 × VL × IL = 1,732 × VL × IL',
                    'Puissance réelle : P (W) = √3 × VL × IL × FP',
                    'Tension phase-neutre en étoile : VΦ = VLL / √3',
                    'Courant de phase en triangle : IΦ = Iline / √3',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Impédance',
                  items: [
                    'Z = √(R² + X²)',
                    'Réactance inductive : XL = 2πfL',
                    'Réactance capacitive : XC = 1 / (2πfC)',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s3',
              title: '14.3 Transformateurs',
              content: [
                {
                  type: 'infoBox',
                  title: 'Formules des transformateurs',
                  items: [
                    'Rapport de transformation : a = N1/N2 = V1/V2 = I2/I1',
                    'kVA monophasé : S = (V × I) / 1000',
                    'kVA triphasé : S = (√3 × VL × IL) / 1000',
                    'Courant secondaire triphasé : I = S × 1000 / (√3 × V)',
                    'Régulation de tension : VR % = (VVL − VPL) / VPL × 100 %',
                    'Rendement : η % = Psortie / (Psortie + Pperte) × 100 %',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s4',
              title: '14.4 Moteurs',
              content: [
                {
                  type: 'infoBox',
                  title: 'Formules des moteurs',
                  items: [
                    'Vitesse synchrone : Ns (tr/min) = 120 × f / P',
                    'Glissement : s % = (Ns − Nr) / Ns × 100 %',
                    'Rendement d\'un moteur triphasé : η % = (HP × 746) / (√3 × V × I × FP) × 100 %',
                    'Puissance en chevaux : HP = (T × N) / 5252  (T en lb-pi, N en tr/min)',
                    'Métrique : kW = HP × 0,7457',
                    'Conducteur du circuit de dérivation moteur : minimum = FLA × 125 %',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s5',
              title: '14.5 Chute de tension et remplissage des conduits',
              content: [
                {
                  type: 'infoBox',
                  title: 'Chute de tension',
                  items: [
                    'Monophasé : VD = 2 × L × R × I / 1000  (R en Ω/km, L en mètres)',
                    'Triphasé : VD = √3 × L × R × I / 1000',
                    'Pourcentage de chute de tension : VD % = VD / Vsource × 100 %',
                    'Recommandation du CCE : ≤ 3 % pour les circuits de dérivation ; ≤ 5 % pour feeder + dérivation combinés',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Remplissage des conduits (annexe B du CCE)',
                  items: [
                    '1 conducteur : ≤ 53 % de la section transversale interne du conduit',
                    '2 conducteurs : ≤ 31 %',
                    '3 conducteurs ou plus : ≤ 40 %',
                    'Aire du cercle : A = π × d² / 4  (π = 3,1416)',
                    'Aire minimale du conduit = aire totale des conducteurs / % de remplissage',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Conversions utiles',
                  items: [
                    '1 pouce = 25,4 mm',
                    '1 pied = 0,3048 m',
                    '1 HP = 746 W',
                    '1 kWh = 3,6 MJ',
                    '√2 = 1,414  |  √3 = 1,732  |  1/√3 = 0,577',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q14-1',
              question: 'Un circuit monophasé de 120 V alimente une charge de 16 A sur 40 mètres avec du cuivre #12 AWG (R = 5,21 Ω/km). Quelle est la chute de tension ?',
              options: ['3,3 V', '5,3 V', '6,7 V', '10,6 V'],
              correctIndex: 2,
              explanation: 'VD = 2 × 40 × 5,21 × 16 / 1000 = 6,67 V ≈ 6,7 V. VD % = 6,7 / 120 = 5,6 % — dépasse la recommandation de 3 % du CCE pour les circuits de dérivation.',
            },
            {
              id: 'elec-q14-2',
              question: 'Quatre conducteurs ont chacun un diamètre extérieur de 10 mm. Quelle est l\'aire interne minimale du conduit requise (règle de remplissage pour 3+ conducteurs) ?',
              options: ['314 mm²', '392 mm²', '785 mm²', '1257 mm²'],
              correctIndex: 2,
              explanation: 'Aire de chaque conducteur = π × 10² / 4 = 78,54 mm². Total = 4 × 78,54 = 314,2 mm². Aire minimale du conduit = 314,2 / 0,40 = 785 mm².',
            },
            {
              id: 'elec-q14-3',
              question: 'Un moteur à cage d\'écureuil à 4 pôles, 60 Hz, tourne à 1728 tr/min à pleine charge. Quel est le glissement en pourcentage ?',
              options: ['2,0 %', '3,5 %', '4,0 %', '5,0 %'],
              correctIndex: 2,
              explanation: 'Ns = 120 × 60 / 4 = 1800 tr/min. Glissement = (1800 − 1728) / 1800 × 100 % = 72/1800 × 100 % = 4,0 %.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 15 — Termes clés et glossaire
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-15',
          number: 15,
          title: 'Termes clés et glossaire',
          subtitle: 'Définitions et acronymes pour tous les concepts majeurs du métier d\'électricien en construction',
          isFree: false,
          estimatedMinutes: 30,
          sections: [
            {
              id: 'elec-ch15-s1',
              title: '15.1 Référence rapide des acronymes',
              content: [
                {
                  type: 'infoBox',
                  title: 'Acronymes A–L',
                  items: [
                    'AC — Courant alternatif',
                    'AFCI — Disjoncteur de détection d\'arc électrique',
                    'AHJ — Autorité compétente',
                    'ARCAL — Aircraft Radio Control of Aerodrome Lighting (contrôle radio des feux d\'aérodrome)',
                    'AVR — Régulateur automatique de tension',
                    'BACnet — Building Automation and Control Networks (ANSI/ASHRAE 135)',
                    'BIM — Modélisation des informations du bâtiment',
                    'BMS — Système de gestion de batterie',
                    'CATV — Télédistribution',
                    'CCR — Régulateur de courant constant',
                    'CCE — Code canadien de l\'électricité',
                    'TC — Transformateur de courant',
                    'DALI — Interface d\'éclairage adressable numérique',
                    'CC — Courant continu',
                    'DCS — Système de contrôle distribué',
                    'DDC — Contrôle numérique direct',
                    'CEM — Compatibilité électromagnétique',
                    'EMT — Tube métallique électrique',
                    'EOLR — Résistance de fin de ligne',
                    'FACP — Panneau de commande d\'alarme incendie',
                    'FLA — Ampères à pleine charge',
                    'FMC — Conduit métallique flexible',
                    'GFD — Détection de défaut à la terre',
                    'GFCI — Disjoncteur de fuite à la terre',
                    'GFP — Protection contre les défauts à la terre',
                    'IHM — Interface homme-machine',
                    'CVAC — Chauffage, ventilation et air conditionné',
                    'ICCP — Protection cathodique à courant imposé',
                    'IGBT — Transistor bipolaire à grille isolée',
                    'IoT — Internet des objets',
                    'kVA — Kilovolt-ampères',
                    'LEED — Leadership in Energy and Environmental Design',
                    'LFMC — Conduit métallique flexible étanche au liquide',
                    'LOTO — Cadenassage / étiquetage',
                    'LRC — Courant de rotor bloqué',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Acronymes M–Z',
                  items: [
                    'MCC — Centre de commande de moteurs',
                    'MI — Câble minéral isolé',
                    'MOV — Varistance à oxyde métallique',
                    'CNB — Code national du bâtiment du Canada',
                    'NEMA — National Electrical Manufacturers\' Association',
                    'CNPI — Code national de prévention des incendies du Canada',
                    'NMD — Câble à gaine non métallique (sec)',
                    'O&M — Exploitation et maintenance',
                    'SST — Santé et sécurité au travail',
                    'OLR — Relais de surcharge',
                    'OTE — Sortie alimentée (logique à contacts PLC)',
                    'PA — Sonorisation',
                    'PAT — Outil à poudre',
                    'PDC — Centre de distribution d\'énergie',
                    'FP — Facteur de puissance',
                    'PLC — Automate programmable industriel',
                    'PoE — Power over Ethernet',
                    'EPI — Équipement de protection individuelle',
                    'MLI — Modulation de largeur d\'impulsion',
                    'RCD — Dispositif différentiel résiduel',
                    'RMC — Conduit métallique rigide (aussi RSC)',
                    'RNMC — Conduit rigide non métallique (PVC)',
                    'SCADA — Contrôle de surveillance et acquisition de données',
                    'SCR — Redresseur commandé au silicium',
                    'SPD — Dispositif de protection contre les surtensions',
                    'TDR — Réflectomètre temporel',
                    'TIA — Telecommunications Industry Association',
                    'TPG — Mise à la terre temporaire',
                    'ULC — Laboratoires des assureurs du Canada',
                    'ASI — Alimentation sans interruption',
                    'UTP — Paire torsadée non blindée',
                    'VDV — Voix / données / vidéo',
                    'VFD — Variateur de fréquence',
                    'TT — Transformateur de tension',
                    'WHMIS — Système d\'information sur les matières dangereuses utilisées au travail',
                    'WLL — Charge de travail limite',
                    'XIC — Examine If Closed (contact normalement ouvert en PLC)',
                    'XIO — Examine If Open (contact normalement fermé en PLC)',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch15-s2',
              title: '15.2 Définitions des termes clés — Sécurité et codes',
              content: [
                {
                  type: 'infoBox',
                  title: 'Sécurité et codes',
                  items: [
                    'AHJ — L\'autorité responsable de l\'application d\'un code ou d\'une norme ; comprend les inspecteurs en électricité et les agents de SST.',
                    'Arc électrique — Libération soudaine d\'énergie électrique dans l\'air ; produit une chaleur allant jusqu\'à 20 000 °C, des ondes de pression et des projections de métal en fusion.',
                    'LOTO — Procédure d\'isolement de toutes les sources d\'énergie pour atteindre un état de zéro énergie et application de cadenas personnels et d\'étiquettes de danger avant le début des travaux.',
                    'WHMIS — Norme canadienne de communication des dangers ; exige des étiquettes et des FDS sur tous les produits contrôlés.',
                    'WLL — Charge maximale qu\'un composant de gréage peut supporter en utilisation normale ; ne jamais dépasser la WLL.',
                    'TPG — Câbles de court-circuit appliqués aux conducteurs hors tension pour évacuer la charge capacitive avant tout contact.',
                    'Substance désignée — Substance réglementée (amiante, plomb, silice, BPC) nécessitant des procédures de manipulation spéciales selon la législation SST.',
                    'Catégorie CAT — Catégorie de surtension des instruments de test ; CAT III = systèmes de distribution ; CAT IV = entrée de service.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Alimentations et distribution',
                  items: [
                    'Système triphasé Edison 120/240 V — Alimentation résidentielle monophasée standard ; deux phases de 120 V déphasées de 180° avec neutre mis à la terre.',
                    'Triangle à patte haute — Alimentation triphasée en triangle 120/240 V ; la phase B est à environ 208 V par rapport au neutre ; doit être identifiée en orange.',
                    'Mise à la terre du système — Connexion intentionnelle du neutre de service à la terre pour établir une référence de tension stable.',
                    'Liaison des équipements — Connexion de toutes les parties métalliques non conductrices entre elles et au conducteur mis à la terre pour fournir un chemin de retour de défaut.',
                    'Électrode enrobée de béton (Ufer ground) — Électrode encastrée dans le béton ; minimum 6 m d\'acier d\'armature ou de cuivre dans les semelles du bâtiment.',
                    'TC / TT — Transformateurs de mesure qui abaissent le courant ou la tension pour le comptage sur les gros services.',
                    'Étude de coordination — Analyse technique garantissant que seul le dispositif de protection le plus proche d\'un défaut s\'ouvre.',
                    'Fusible limiteur de courant — Interrompt le courant de défaut en moins d\'un demi-cycle, limitant l\'énergie de crête admissible pour protéger les équipements en aval.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Systèmes de câblage',
                  items: [
                    'Ampacité — Courant maximal qu\'un conducteur peut transporter en continu sans dépasser sa température nominale.',
                    'NMD90 — Câble à gaine non métallique classé 90 °C pour les endroits secs intérieurs (Loomex®).',
                    'TECK90 — Câble à blindage cuivre et gaine PVC classé 90 °C ; approuvé pour les chemins de câbles et l\'enfouissement direct.',
                    'RMC (RSC) — Conduit métallique rigide ; conduit en acier à paroi la plus épaisse ; approuvé pour tous les endroits, y compris l\'enfouissement direct.',
                    'EMT — Conduit en acier à paroi mince ; le plus courant dans la construction commerciale ; pas pour l\'enfouissement direct.',
                    'Remplissage des conduits — Pourcentage de la surface du conduit occupé par les conducteurs ; ≤ 40 % pour 3+ conducteurs.',
                    'Remplissage des boîtiers — Calcul selon la règle 12-3034 du CCE pour garantir un volume de boîtier suffisant pour les conducteurs.',
                    'Luminaire de classe IC — Appareil d\'éclairage approuvé pour le contact direct avec l\'isolant thermique.',
                    'Anti-îlotage — Fonction obligatoire des onduleurs ou des VFD raccordés au réseau ; déconnecte du réseau en cas de panne.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Moteurs, commandes et automatisation',
                  items: [
                    'FLA — Courant à la puissance nominale en HP, à la tension et à la fréquence nominales ; base de tout dimensionnement de circuit moteur.',
                    'LRC — Courant d\'appel au démarrage ; généralement 6–8 × FLA.',
                    'Vitesse synchrone — Vitesse du champ magnétique tournant : Ns = 120 × f / P.',
                    'Glissement — Différence entre la vitesse synchrone et la vitesse du rotor ; normalement 2–5 % pour les moteurs à cage d\'écureuil.',
                    'OLR — Relais de surcharge ; protège les enroulements du moteur contre les surintensités soutenues ; se déclenche à 115–125 % du FLA.',
                    'Commande à trois fils — Circuit de commande de démarreur avec contact de maintien ; assure la protection contre les basses tensions.',
                    'VFD — Convertit une alimentation CA à fréquence fixe en une sortie à fréquence variable pour le contrôle de la vitesse du moteur.',
                    'IGBT — Transistor bipolaire à grille isolée ; élément de commutation dans l\'étage onduleur d\'un VFD.',
                    'XIC — "Examine If Closed" en PLC ; équivalent à un contact normalement ouvert ; VRAI quand le bit = 1.',
                    'Câblage classe A — Circuit en boucle d\'alarme incendie ; un seul défaut ne désactive pas le circuit.',
                    'Câblage classe B — Circuit en T d\'alarme incendie avec résistance de fin de ligne ; un seul défaut de coupure désactive la branche.',
                    'BACnet — Protocole ouvert d\'automatisation des bâtiments (ANSI/ASHRAE 135) ; permet l\'interopérabilité entre plusieurs fabricants.',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q15-1',
              question: 'Quel est le but d\'une mise à la terre temporaire (TPG) appliquée à un conducteur haute tension hors tension ?',
              options: [
                'Fournir un chemin de mise à la terre continu pendant le fonctionnement normal',
                'Évacuer la charge capacitive et empêcher une remise sous tension accidentelle de créer un risque de choc',
                'Identifier le conducteur comme hors tension pour l\'inspection de l\'AHJ',
                'Relier le conducteur au système de protection contre la foudre',
              ],
              correctIndex: 1,
              explanation: 'Les TPG sont des câbles de court-circuit fixés entre les conducteurs de phase et la terre sur les systèmes HT hors tension. Ils évacuent toute charge capacitive ou tension induite, et si la ligne est accidentellement remise sous tension, ils créent un déf franc qui déclenche immédiatement la protection en amont — protégeant ainsi le travailleur contre les chocs. Requis par le CCE pour les travaux HT.',
            },
            {
              id: 'elec-q15-2',
              question: 'Quelle instruction de logique à contacts en PLC est équivalente à un contact normalement fermé ?',
              options: [
                'XIC (Examine If Closed)',
                'XIO (Examine If Open)',
                'OTE (Output Energize)',
                'OTL (Output Latch)',
              ],
              correctIndex: 1,
              explanation: 'XIO (Examine If Open) est évalué comme VRAI (passe le courant) lorsque le bit d\'adresse PLC correspondant est à 0 — exactement comme un contact normalement fermé qui laisse passer le courant lorsque la bobine n\'est pas alimentée. XIC est l\'équivalent normalement ouvert.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 16 — Stratégie de préparation à l'examen
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-16',
          number: 16,
          title: 'Stratégie de préparation à l\'examen',
          subtitle: 'Quoi étudier, comment l\'étudier et comment maximiser votre score le jour de l\'examen',
          isFree: false,
          estimatedMinutes: 25,
          sections: [
            {
              id: 'elec-ch16-s1',
              title: '16.1 Connaître l\'examen',
              content: [
                {
                  type: 'paragraph',
                  text: 'L\'examen interprovincial du Sceau rouge pour électricien en construction comporte 100 questions à choix multiples. Note de passage : 70 bonnes réponses (70 %). L\'examen est entièrement basé sur la norme RSOS 2025 et le Code canadien de l\'électricité. Aucun document de référence n\'est autorisé.',
                },
                {
                  type: 'infoBox',
                  title: 'Pondération des AMT — D\'où viennent vos points',
                  items: [
                    'AMT A — Compétences professionnelles communes : 12 questions (12 %)',
                    'AMT B — Systèmes de production, de distribution et d\'alimentation : 26 questions (26 %)',
                    'AMT C — Systèmes de câblage : 34 questions (34 %) ← PLUS GRANDE SECTION',
                    'AMT D — Moteurs et systèmes de commande : 18 questions (18 %)',
                    'AMT E — Signalisation et communication : 10 questions (10 %)',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Pour réussir confortablement : visez ≥24/34 sur AMT C, ≥19/26 sur AMT B, ≥13/18 sur AMT D, ≥10/12 sur AMT A, ≥7/10 sur AMT E. Vous pouvez vous permettre 30 mauvaises réponses — mais n\'abandonnez jamais une AMT entière.',
                },
              ],
            },
            {
              id: 'elec-ch16-s2',
              title: '16.2 Priorités d\'étude',
              content: [
                {
                  type: 'infoBox',
                  title: 'Priorité 1 — AMT C : Systèmes de câblage (34 questions)',
                  items: [
                    'Ampacité des conducteurs, température nominale et facteurs de déclassement',
                    'Calculs de chute de tension — monophasé et triphasé',
                    'Types de conduits et règles de remplissage ; remplissage des boîtiers (règle 12-3034 du CCE)',
                    'Types de câbles : NMD90, AC90, TECK90, câble MI et leurs applications',
                    'Dimensionnement des circuits de dérivation pour les charges continues (règle des 125 %)',
                    'GFCI et AFCI — emplacements requis',
                    'Dimensionnement des circuits de chauffage électrique',
                    'Éclairage de secours : exigences du CNB, classe A vs B, intervalles de test',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Priorité 2 — AMT B : Distribution et alimentations (26 questions)',
                  items: [
                    'Configurations et tensions des services monophasés et triphasés',
                    'Électrodes de mise à la terre — types et dimensions minimales (section 10 du CCE)',
                    'Mise à la terre du système vs liaison des équipements',
                    'Calculs de transformateurs — rapport de transformation, kVA, courant primaire/secondaire',
                    'Protection contre les surintensités : types de fusibles, MCCB, coordination',
                    'Types et caractéristiques des ASI',
                    'Énergie renouvelable : anti-îlotage pour les systèmes raccordés au réseau, stockage par batteries',
                    'Types d\'enveloppes NEMA',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Priorité 3 — AMT D : Moteurs et commandes (18 questions)',
                  items: [
                    'Dimensionnement des conducteurs des circuits de dérivation moteurs (FLA × 125 %)',
                    'Logique du circuit de commande du démarreur à trois fils',
                    'Méthodes de démarrage à tension réduite et réduction de couple',
                    'Étages internes d\'un VFD : redresseur → bus CC → onduleur',
                    'Types de moteurs — cage d\'écureuil, rotor bobiné, synchrone, types CC',
                    'Calculs de vitesse synchrone et de glissement',
                    'Logique à contacts PLC : instructions XIC, XIO, OTE',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Priorité 4 — AMT A + E (22 questions combinées)',
                  items: [
                    'AMT A : EPI pour choc électrique et arc électrique, séquence LOTO en 6 étapes, catégories CAT des multimètres, types de dessins',
                    'AMT E : Câblage classe A vs B des alarmes incendie, composants du FACP, spécifications Cat 6A, protocole BACnet',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch16-s3',
              title: '16.3 Technique le jour de l\'examen',
              content: [
                {
                  type: 'infoBox',
                  title: 'Approche question par question',
                  items: [
                    'Budget de temps : ~54 secondes par question ; ne passez jamais plus de 2 minutes sur une question',
                    'Lisez la question en entier avant de regarder les réponses',
                    'Éliminez d\'abord les réponses manifestement fausses — cela réduit souvent à 2 choix',
                    'Questions de calcul : écrivez les valeurs données → identifiez la formule → substituez → vérifiez les unités',
                    'Questions "Laquelle n\'est PAS correcte" : trouvez la seule fausse affirmation parmi les options',
                    'Marquez les questions incertaines, faites votre meilleure estimation, passez à la suivante et revenez à la fin',
                    'Ne laissez jamais une question sans réponse — il n\'y a pas de pénalité pour une réponse fausse',
                    'Ne changez pas de réponse à moins d\'avoir une raison spécifique de le faire',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Pièges courants à l\'examen',
                  items: [
                    'Unités — assurez-vous que R est en Ω/km quand L est en mètres dans la formule de chute de tension',
                    'Continue vs non continue — la règle des 125 % s\'applique uniquement aux charges fonctionnant ≥ 3 heures en continu',
                    'FLA vs HP — dimensionnez toujours les conducteurs à partir du FLA de la plaque signalétique, pas du HP calculé',
                    'Puissance monophasée vs triphasée — P = V×I×FP vs P = √3×V×I×FP',
                    'Courant primaire vs secondaire — le courant est inversement proportionnel à la tension dans un transformateur',
                    'GFCI vs AFCI — le GFCI protège contre les défauts à la terre dans les endroits humides ; l\'AFCI protège contre les défauts d\'arc (risque d\'incendie)',
                    'Classe A vs B d\'alarme incendie — la classe A survit à une seule coupure de fil ; la classe B non',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q16-1',
              question: 'Vous rencontrez une question dont vous n\'êtes pas sûr. Quelle est la meilleure stratégie d\'examen ?',
              options: [
                'La laisser vide pour éviter de perdre des points pour une mauvaise réponse',
                'Y consacrer tout le temps nécessaire jusqu\'à être confiant',
                'Faire votre meilleure estimation, la marquer, continuer, et y revenir à la fin',
                'Choisir la réponse la plus longue car elle est généralement correcte',
              ],
              correctIndex: 2,
              explanation: 'L\'examen du Sceau rouge n\'a pas de pénalité pour les mauvaises réponses — une question sans réponse donne toujours 0 point, mais une estimation a 25 % de chance de rapporter des points. La meilleure stratégie est d\'estimer, de marquer, de continuer et de revenir avec un regard neuf. Passer trop de temps sur une question risque de manquer de temps pour des questions plus faciles plus tard.',
            },
            {
              id: 'elec-q16-2',
              question: 'Quelle AMT devrait recevoir le plus de temps d\'étude, et combien de questions d\'examen représente-t-elle ?',
              options: [
                'AMT B — Systèmes de production, de distribution et d\'alimentation — 26 questions',
                'AMT D — Moteurs et systèmes de commande — 18 questions',
                'AMT C — Systèmes de câblage — 34 questions',
                'AMT A — Compétences professionnelles communes — 12 questions',
              ],
              correctIndex: 2,
              explanation: 'L\'AMT C (systèmes de câblage) est la section la plus pondérée avec 34 questions (34 % de l\'examen). Elle couvre les chemins de câbles, les conducteurs, les câbles, les circuits de dérivation, l\'éclairage, le CVAC, le chauffage électrique et l\'éclairage de secours. Une bonne performance ici est le facteur le plus important pour réussir.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 17 — Examen blanc complet (30 questions)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-17',
          number: 17,
          title: 'Examen blanc complet',
          subtitle: 'Examen blanc chronométré de 30 questions — style Sceau rouge, toutes les 5 AMT représentées proportionnellement',
          isFree: false,
          estimatedMinutes: 45,
          isMockExam: true,
          sections: [
            {
              id: 'elec-ch17-s1',
              title: 'Instructions',
              content: [
                {
                  type: 'paragraph',
                  text: 'Réglez une minuterie sur 27 minutes. Essayez de répondre aux 30 questions sans consulter de notes. Ne révisez les réponses qu\'après avoir terminé toutes les questions.',
                },
                {
                  type: 'infoBox',
                  title: 'Pondération de l\'examen blanc (30 questions)',
                  items: [
                    'AMT A — Compétences professionnelles communes : 4 questions',
                    'AMT B — Systèmes de production, de distribution et d\'alimentation : 8 questions',
                    'AMT C — Systèmes de câblage : 10 questions',
                    'AMT D — Moteurs et systèmes de commande : 5 questions',
                    'AMT E — Systèmes de signalisation et de communication : 3 questions',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            // ── AMT A — 4 questions ──────────────────────────────
            {
              id: 'elec-mock-01',
              question: '[AMT A] Quelle classe de gants isolants en caoutchouc offre la protection la plus élevée ?',
              options: ['Classe 00 — 500 V CA', 'Classe 0 — 1 000 V CA', 'Classe 2 — 17 000 V CA', 'Classe 4 — 40 000 V CA'],
              correctIndex: 3,
              explanation: 'Classes de gants isolants en caoutchouc : 00 (500 V), 0 (1 000 V), 1 (7 500 V), 2 (17 000 V), 3 (26 500 V), 4 (40 000 V CA). La classe 4 offre la protection la plus élevée et est requise pour les travaux HT.',
            },
            {
              id: 'elec-mock-02',
              question: '[AMT A] Quelle est la séquence correcte des trois premières étapes d\'une procédure LOTO ?',
              options: [
                'Isoler → Aviser → Tester l\'absence de tension',
                'Aviser → Identifier toutes les sources d\'énergie → Isoler',
                'Cadenasser → Étiqueter → Tester l\'absence de tension',
                'Tester → Isoler → Cadenasser et étiqueter',
              ],
              correctIndex: 1,
              explanation: 'Séquence LOTO : (1) Aviser, (2) Identifier tous les points d\'isolement et sources d\'énergie, (3) Isoler, (4) Cadenasser et étiqueter, (5) Tester l\'absence de tension, (6) Vérifier l\'état de zéro énergie.',
            },
            {
              id: 'elec-mock-03',
              question: '[AMT A] Un multimètre utilisé sur un jeu de barres de panneau de distribution triphasé 600 V doit être classé au minimum :',
              options: ['CAT I', 'CAT II', 'CAT III', 'CAT IV'],
              correctIndex: 2,
              explanation: 'CAT III couvre les systèmes de distribution triphasés, les jeux de barres, les sectionneurs et les équipements fixes — le minimum pour cette application. CAT IV est pour les entrées de service. Utilisez toujours la catégorie CAT applicable la plus élevée.',
            },
            {
              id: 'elec-mock-04',
              question: '[AMT A] Quel type de dessin montre l\'état final installé et le tracé de tous les systèmes électriques après l\'achèvement du projet ?',
              options: ['Dessin d\'atelier', 'Schéma de câblage', 'Plan de récolement', 'Schéma en élévation'],
              correctIndex: 2,
              explanation: 'Les plans de récolement sont mis à jour tout au long du projet et à son achèvement pour refléter l\'état réel installé — y compris les modifications de tracé, les tailles de conduit et les modifications de circuit effectuées pendant la construction. Ils constituent un document de clôture requis.',
            },
            // ── AMT B — 8 questions ──────────────────────────────
            {
              id: 'elec-mock-05',
              question: '[AMT B] Dans un système triphasé en étoile 347/600 V, quelle est la tension entre un conducteur de phase et le neutre ?',
              options: ['208 V', '240 V', '347 V', '600 V'],
              correctIndex: 2,
              explanation: '347 V au neutre × √3 = 601 V ≈ 600 V entre phases. C\'est l\'alimentation industrielle standard au Canada.',
            },
            {
              id: 'elec-mock-06',
              question: '[AMT B] Une électrode de mise à la terre enrobée de béton (Ufer ground) nécessite un minimum de combien de mètres de conducteur encastré dans les semelles ?',
              options: ['2,4 m', '3,0 m', '6,0 m', '7,5 m'],
              correctIndex: 2,
              explanation: 'Le CCE exige un minimum de 6 m de barres d\'armature (≥ 10 mm de diamètre) ou de conducteur en cuivre encastré dans la semelle ou les fondations en béton pour une électrode enrobée de béton.',
            },
            {
              id: 'elec-mock-07',
              question: '[AMT B] Une ASI en ligne (double conversion) alimente en permanence la charge par son onduleur. Quel est le principal avantage de cette conception ?',
              options: [
                'Batteries plus grosses et autonomie plus longue',
                'Temps de transfert nul en cas de panne et isolation complète des problèmes de qualité de l\'énergie du réseau',
                'Coût inférieur aux ASI de type veille',
                'Suppression intégrée des surtensions qu\'une ASI hors ligne n\'a pas',
              ],
              correctIndex: 1,
              explanation: 'ASI en ligne : CA→CC→CA en continu. La charge est toujours alimentée par l\'onduleur — temps de transfert nul et isolation complète des harmoniques, creux, élévations et variations de fréquence du réseau. Topologie la plus fiable pour les charges critiques.',
            },
            {
              id: 'elec-mock-08',
              question: '[AMT B] Un transformateur triphasé de 75 kVA, 600 V / 208 V, est chargé à pleine charge. Quel est le courant secondaire approximatif à pleine charge ?',
              options: ['72 A', '125 A', '208 A', '360 A'],
              correctIndex: 2,
              explanation: 'I = S / (√3 × V) = 75 000 / (1,732 × 208) = 75 000 / 360,3 ≈ 208 A.',
            },
            {
              id: 'elec-mock-09',
              question: '[AMT B] Un fusible limiteur de courant est spécifié sur un tableau de distribution. Qu\'est-ce qui le distingue d\'un fusible temporisé standard ?',
              options: [
                'Il fonctionne plus lentement pour laisser passer l\'appel de courant du moteur sans déclencher',
                'Il interrompt le courant de défaut en moins d\'un demi-cycle, limitant l\'énergie de crête admissible',
                'Il utilise un élément fusible réutilisable qui peut être réarmé après fonctionnement',
                'Il est classé pour un courant continu plus élevé qu\'un fusible standard de même taille',
              ],
              correctIndex: 1,
              explanation: 'Les fusibles limiteurs de courant fonctionnent en moins d\'un demi-cycle (< 8 ms à 60 Hz), limitant le courant de crête admissible à une fraction du courant de défaut disponible. Cela protège les équipements en aval des contraintes mécaniques et thermiques d\'un défaut de pleine amplitude.',
            },
            {
              id: 'elec-mock-10',
              question: '[AMT B] Pourquoi un composé antioxydant doit-il être appliqué à toutes les terminaisons de conducteurs en aluminium ?',
              options: [
                'Pour lubrifier le conducteur lors du tirage dans le conduit',
                'Pour empêcher la couche d\'oxyde d\'aluminium naturelle de créer une connexion à haute résistance',
                'Pour fournir une protection contre la corrosion uniquement dans les endroits humides',
                'Pour satisfaire à l\'exigence du CCE uniquement pour les conducteurs de plus de 1/0 AWG',
              ],
              correctIndex: 1,
              explanation: 'L\'aluminium s\'oxyde rapidement à l\'air, formant de l\'oxyde d\'aluminium — un isolant électrique. Le composé antioxydant empêche la formation de nouvel oxyde et aide à déplacer l\'oxyde existant à l\'interface de contact, assurant une connexion à faible résistance et fiable.',
            },
            {
              id: 'elec-mock-11',
              question: '[AMT B] Que se passe-t-il si un onduleur solaire raccordé au réseau n\'a pas de protection anti-îlotage et que le réseau électrique est hors tension ?',
              options: [
                'L\'onduleur passe automatiquement en mode secours sur batterie',
                'Le système solaire pourrait continuer à alimenter les lignes du réseau hors tension, créant un danger mortel',
                'La tension de sortie de l\'onduleur augmente au-dessus de la normale, endommageant les charges connectées',
                'Les panneaux solaires cessent de produire de l\'énergie sans la tension de référence du réseau',
              ],
              correctIndex: 1,
              explanation: 'Sans protection anti-îlotage, un système solaire raccordé au réseau continue d\'alimenter les lignes de distribution du réseau pendant une panne. Les travailleurs du réseau et les intervenants d\'urgence qui pensent travailler sur des lignes hors tension pourraient être électrocutés. L\'anti-îlotage est une exigence de sécurité obligatoire pour tous les onduleurs raccordés au réseau.',
            },
            {
              id: 'elec-mock-12',
              question: '[AMT B] Quel type d\'enveloppe NEMA est requis pour un équipement extérieur dans une usine de transformation alimentaire où la résistance à la corrosion est essentielle ?',
              options: ['NEMA Type 1', 'NEMA Type 3R', 'NEMA Type 4', 'NEMA Type 4X'],
              correctIndex: 3,
              explanation: 'NEMA Type 4X ajoute la résistance à la corrosion (construction en acier inoxydable ou en fibre de verre) à la protection étanche à l\'eau du Type 4. Requis dans les environnements alimentaires, marins, chimiques et autres environnements corrosifs. Le Type 3R est résistant à la pluie pour l\'extérieur mais n\'est ni étanche à l\'eau ni résistant à la corrosion.',
            },
            // ── AMT C — 10 questions ─────────────────────────────
            {
              id: 'elec-mock-13',
              question: '[AMT C] Trois conducteurs #8 AWG ont chacun une section transversale de 43,2 mm². Quelle est l\'aire interne minimale requise du conduit ?',
              options: ['130 mm²', '216 mm²', '324 mm²', '432 mm²'],
              correctIndex: 2,
              explanation: 'Aire totale des conducteurs = 3 × 43,2 = 129,6 mm². Aire minimale du conduit = 129,6 / 0,40 = 324 mm² (règle des 40 % pour 3+ conducteurs).',
            },
            {
              id: 'elec-mock-14',
              question: '[AMT C] Un circuit alimente une charge continue de 28 A. Quelle est l\'ampacité minimale du conducteur requise par le CCE ?',
              options: ['28 A', '30 A', '35 A', '40 A'],
              correctIndex: 2,
              explanation: 'Charge continue (≥ 3 heures) : ampacité minimale du conducteur = FLA × 125 % = 28 × 1,25 = 35 A.',
            },
            {
              id: 'elec-mock-15',
              question: '[AMT C] Quel conduit utilise des raccords à vis ou à compression, est en acier à paroi mince et est le conduit le plus courant dans la construction commerciale ?',
              options: ['RMC', 'IMC', 'EMT', 'RNMC (PVC)'],
              correctIndex: 2,
              explanation: 'EMT (tube métallique électrique) est en acier à paroi mince, utilise des raccords à vis ou à compression (non filetés) et est le conduit le plus largement installé dans les travaux commerciaux et industriels légers. Non approuvé pour l\'enfouissement direct ou le noyage dans le béton.',
            },
            {
              id: 'elec-mock-16',
              question: '[AMT C] Quel est le nombre total maximal de degrés de courbure autorisé entre deux points de tirage de conduit ?',
              options: ['180°', '270°', '360°', '450°'],
              correctIndex: 2,
              explanation: 'Le CCE limite le total des coudes entre deux points de tirage à 360° — équivalent à quatre coudes à 90°. Plus de coudes nécessitent des points de tirage supplémentaires.',
            },
            {
              id: 'elec-mock-17',
              question: '[AMT C] Un radiateur électrique à plinthe de 4 800 W, 240 V monophasé est une charge continue. Quelle est la taille minimale du disjoncteur de dérivation ?',
              options: ['20 A', '25 A', '30 A', '35 A'],
              correctIndex: 1,
              explanation: 'Courant de charge = 4800 / 240 = 20 A. Charge continue : disjoncteur ≥ 20 × 1,25 = 25 A. La taille standard suivante est 25 A — utiliser un disjoncteur bipolaire de 25 A avec du cuivre #10 AWG.',
            },
            {
              id: 'elec-mock-18',
              question: '[AMT C] Quel câble a un blindage en ruban de cuivre et une gaine extérieure PVC, et est classé pour l\'enfouissement direct et les chemins de câbles ?',
              options: ['NMD90', 'AC90 (BX)', 'TECK90', 'RW90'],
              correctIndex: 2,
              explanation: 'Le TECK90 a des conducteurs isolés au XLPE, un blindage en ruban de cuivre et une gaine extérieure PVC classée 90 °C. Approuvé pour les chemins de câbles, l\'enfouissement direct, les endroits humides et l\'utilisation extérieure.',
            },
            {
              id: 'elec-mock-19',
              question: '[AMT C] Quelle protection le CCE exige-t-il sur les prises 125 V installées dans une salle de bain ?',
              options: ['Disjoncteur AFCI', 'Protection GFCI', 'Dispositif de protection contre les surtensions', 'Disjoncteur standard 15 A seulement'],
              correctIndex: 1,
              explanation: 'Le CCE exige une protection GFCI sur toutes les prises 125 V dans les salles de bain, garages, cuisines et endroits extérieurs. Le GFCI se déclenche à un courant de défaut à la terre d\'environ 5 mA en 1/40e de seconde.',
            },
            {
              id: 'elec-mock-20',
              question: '[AMT C] Quelle est la chute de tension maximale recommandée par le CCE pour un circuit de dérivation ?',
              options: ['1 %', '3 %', '5 %', '8 %'],
              correctIndex: 1,
              explanation: 'La règle 8-102 du CCE recommande ≤ 3 % pour les circuits de dérivation et ≤ 5 % au total pour le feeder et le circuit de dérivation combinés.',
            },
            {
              id: 'elec-mock-21',
              question: '[AMT C] Un circuit monophasé de 120 V, 40 mètres, alimente 16 A avec du cuivre #12 AWG (R = 5,21 Ω/km). Quelle est la chute de tension ?',
              options: ['3,3 V', '5,3 V', '6,7 V', '10,6 V'],
              correctIndex: 2,
              explanation: 'VD = 2 × 40 × 5,21 × 16 / 1000 = 6,67 V ≈ 6,7 V. VD % = 6,7 / 120 = 5,6 % — dépasse la recommandation de 3 % du CCE.',
            },
            {
              id: 'elec-mock-22',
              question: '[AMT C] Selon le CNB, quelle est la durée minimale de secours sur batterie que l\'éclairage de secours doit maintenir en cas de panne ?',
              options: ['30 minutes', '1 heure', '90 minutes', '8 heures'],
              correctIndex: 0,
              explanation: 'Le CNB exige un minimum de 30 minutes d\'éclairage de secours. Le test annuel ULC S524 exige un test de décharge complet de 90 minutes pour vérifier que la batterie peut soutenir la charge pendant toute la période requise.',
            },
            // ── AMT D — 5 questions ──────────────────────────────
            {
              id: 'elec-mock-23',
              question: '[AMT D] Un moteur triphasé de 600 V a un FLA de plaque signalétique de 15,2 A. Quelle est l\'ampacité minimale des conducteurs du circuit de dérivation ?',
              options: ['14,2 A', '19,0 A', '22,8 A', '25,0 A'],
              correctIndex: 1,
              explanation: 'Règle 28-106 du CCE : ampacité des conducteurs ≥ FLA × 125 % = 15,2 × 1,25 = 19,0 A minimum.',
            },
            {
              id: 'elec-mock-24',
              question: '[AMT D] Un moteur à 6 pôles, 60 Hz, tourne à 1150 tr/min à pleine charge. Quel est le glissement en pourcentage ?',
              options: ['2,1 %', '4,2 %', '6,3 %', '8,4 %'],
              correctIndex: 1,
              explanation: 'Ns = 120 × 60 / 6 = 1200 tr/min. Glissement = (1200 − 1150) / 1200 × 100 % = 4,2 %.',
            },
            {
              id: 'elec-mock-25',
              question: '[AMT D] Dans un démarreur à tension réduite étoile-triangle, le couple de démarrage est réduit à quelle fraction du couple de démarrage à pleine tension ?',
              options: ['50 %', '33 %', '67 %', '75 %'],
              correctIndex: 1,
              explanation: 'Lors du démarrage en étoile, chaque enroulement reçoit une tension réduite de 1/√3. Le couple ∝ V², donc le couple = (1/√3)² = 1/3 ≈ 33 % du couple à pleine tension. Le courant de démarrage est également réduit à 33 %.',
            },
            {
              id: 'elec-mock-26',
              question: '[AMT D] Quel étage d\'un VFD utilise des commutateurs IGBT pour produire une sortie CA à fréquence variable à partir du bus CC ?',
              options: ['Étage redresseur', 'Batterie de condensateurs du bus CC', 'Étage onduleur', 'Filtre d\'entrée CEM'],
              correctIndex: 2,
              explanation: 'L\'étage onduleur utilise des commutateurs IGBT avec MLI pour découper la tension du bus CC en une série d\'impulsions qui simulent une onde sinusoïdale à la fréquence et à la tension désirées — créant la sortie à fréquence variable vers le moteur.',
            },
            {
              id: 'elec-mock-27',
              question: '[AMT D] En logique à contacts PLC, que fait l\'instruction XIC (Examine If Closed) ?',
              options: [
                'Évalue VRAI lorsque le bit est à 0 — équivalent à un contact normalement fermé',
                'Évalue VRAI lorsque le bit est à 1 — équivalent à un contact normalement ouvert',
                'Met le bit de sortie à 1 lorsque la logique de la barre est vraie',
                'Maintient une sortie activée indépendamment de la logique de la barre',
              ],
              correctIndex: 1,
              explanation: 'XIC (Examine If Closed) est évalué comme VRAI (passe le courant) lorsque le bit d\'adresse correspondant est à 1 — exactement comme un contact normalement ouvert qui se ferme lorsqu\'il est alimenté. XIO (Examine If Open) est l\'équivalent normalement fermé.',
            },
            // ── AMT E — 3 questions ──────────────────────────────
            {
              id: 'elec-mock-28',
              question: '[AMT E] Un système d\'alarme incendie d\'hôpital doit rester fonctionnel avec une seule coupure de fil n\'importe où dans le circuit. Quelle classe de câblage est requise ?',
              options: ['Classe B avec résistance de fin de ligne', 'Câblage en boucle classe A', 'Câblage standard en étoile avec GFCI', 'Dispositifs sans fil (radiofréquence) uniquement'],
              correctIndex: 1,
              explanation: 'Le câblage classe A boucle les deux conducteurs de retour au FACP. Un seul défaut de coupure ne désactive pas le circuit — le FACP communique avec tous les dispositifs par l\'autre chemin. Requis par le CNB dans les immeubles de grande hauteur, les hôpitaux et autres bâtiments à occupation critique.',
            },
            {
              id: 'elec-mock-29',
              question: '[AMT E] Un chemin de câblage structuré est certifié "Cat 6A". Qu\'est-ce que cela garantit sur le canal installé ?',
              options: [
                'Classé à 250 MHz ; prend en charge 1 Gbps jusqu\'à 100 m',
                'Classé à 500 MHz ; prend en charge Ethernet 10 Gbps jusqu\'à 100 m',
                'Classé à 100 MHz ; prend en charge 100 Mbps seulement',
                'Utilise une construction blindée (ScTP) exclusivement',
              ],
              correctIndex: 1,
              explanation: 'Cat 6A est classé à 500 MHz et prend en charge 10GBASE-T (10 Gbps) sur toute la longueur de canal horizontal de 100 m. Cat 6 n\'atteint 10 Gbps que jusqu\'à environ 55 m.',
            },
            {
              id: 'elec-mock-30',
              question: '[AMT E] Un BAS utilise BACnet/IP. Des détecteurs de présence détectent un étage vide, déclenchant un ralentissement CVAC. Quel composant envoie directement le signal "inoccupé" au contrôleur DDC ?',
              options: [
                'Le commutateur PoE alimentant les détecteurs',
                'Le serveur de supervision BAS',
                'Le détecteur de présence câblé sur une entrée numérique du contrôleur DDC',
                'L\'IHM du poste de sécurité',
              ],
              correctIndex: 2,
              explanation: 'Les détecteurs de présence produisent un contact sec ou un signal numérique basse tension câblé directement sur une entrée numérique du contrôleur DDC local. Le DDC lit ce signal, exécute son programme de contrôle et commande les actionneurs CVAC. L\'état est ensuite remonté au serveur BAS via le réseau BACnet/IP.',
            },
          ],
        },

      ], // fin des chapitres de la partie 6
    }, // fin de la partie 6

  ], // end parts

}; // end electricianCourse

// ============================================================
// Normalized course export for CertReady app
// ============================================================
const _elecParts = electricianCourse.parts;
const _elecAllChapters = _elecParts.flatMap((p) => p.chapters);
const _elecTotalChapters = _elecAllChapters.length;
const _elecTotalQuestions = _elecAllChapters.reduce(
  (sum, ch) => sum + (ch.practiceQuestions?.length || 0),
  0
);

export const electricianCourseData = {
  id: 'construction-electrician-309a',
  slug: 'construction-electrician-309a',
  title: 'Construction Electrician (Red Seal 309A) Exam Prep',
  subtitle: 'Complete study guide — Red Seal Interprovincial Exam, 100 questions',
  trade: 'Construction Electrician',
  tradeCode: '309A',
  price: 4999, // $49.99 CAD in cents
  currency: 'CAD',
  totalChapters: _elecTotalChapters,
  totalQuestions: _elecTotalQuestions,
  passingMark: 70,
  features: [
    `${_elecTotalChapters} chapters covering all 5 Major Work Activities (MWA)`,
    `${_elecTotalQuestions}+ practice questions with detailed explanations`,
    'Full formulas reference sheet and key terms glossary',
    'Red Seal exam strategy and MWA weighting breakdown',
    'Based on Red Seal Occupational Standard (RSOS) — Construction Electrician 2025',
    'CEC-referenced content throughout',
    'Lifetime access — study at your own pace',
  ],
  parts: _elecParts,
};

// Helper functions for app integration
export function getAllChaptersElec() {
  return _elecAllChapters;
}

export function getChapterByIdElec(id) {
  return _elecAllChapters.find((ch) => ch.id === id) || null;
}

export function getAllPracticeQuestionsElec() {
  return _elecAllChapters.flatMap((ch) => ch.practiceQuestions || []);
}

export function getTotalEstimatedMinutesElec() {
  return _elecAllChapters.reduce((sum, ch) => sum + (ch.estimatedMinutes || 0), 0);
}

export default electricianCourseData;