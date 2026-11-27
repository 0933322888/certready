export const steamfitterCourse = {
    // `id` / `slug` is the canonical course slug.
    // Note: this is distinct from the URL trade slug (`steamfitpipefit`) used for guides and practice endpoints.
    id: 'steamfitter-307a',
    slug: 'steamfitter-307a',
    title: 'Steamfitter/Pipefitter Certification Exam Prep',
    subtitle: 'Complete study guide — Red Seal Interprovincial Exam, 130 questions',
    trade: 'Steamfitter/Pipefitter',
    tradeCode: '307A',
    price: 4999,
    currency: 'CAD',
    totalChapters: 31, // estimate; recalculate from parts.length at final assembly
    totalQuestions: 130,
    passingMark: 70,
    examFormat: '130 multiple-choice questions (4 options each)',

    features: [
        "Covers all 7 Major Work Activities (MWA) of the Red Seal standard",
        "Master glossary and trade acronyms for exam reference",
        "Piping layout, fabrication and installation by pipe material",
        "Steam, condensate, hydronic and process piping systems explained",
        "Rigging, hoisting, commissioning and formulas drills",
        "Mock exam and exam strategy based on the 130-question Red Seal exam"
    ],

    parts: [
        {
            id: 'part-1',
            number: 1,
            title: 'Common Occupational Skills (MWA A)',
            description: 'Master glossary and acronyms, safety on the job, tools and equipment, and the skills common to every steamfitter/pipefitter job: planning, drawings and templates, quality control, material handling, communication and mentoring.',
            weight: '16 questions (12.3% of Total Exam)',

            chapters: [
                // ============================================================
                // CHAPTER 1 — MASTER GLOSSARY (FREE)
                // ============================================================
                {
                    id: 'ch-01',
                    number: 1,
                    title: 'Master Glossary',
                    subtitle: 'Official Red Seal trade terms and acronyms',
                    isFree: true,
                    estimatedMinutes: 25,

                    sections: [
                        {
                            id: 'ch01-s1',
                            title: 'Glossary of Trade Terms',
                            content: [
                                { type: 'keyTerm', term: 'Backflow preventer', definition: 'A device or method that stops flow from reversing in a piping system.' },
                                { type: 'keyTerm', term: 'Balancing valve', definition: 'A valve that adds resistance where needed so that a system reaches its design flow rate.' },
                                { type: 'keyTerm', term: 'Blowdown', definition: 'A connection at the lowest point of a piping system or piece of equipment, used for cleaning out or testing.' },
                                { type: 'keyTerm', term: 'Boiler', definition: 'Equipment that heats water or generates steam.' },
                                { type: 'keyTerm', term: 'Boiler trim', definition: 'The controls, equipment and accessories connected to a boiler to keep it operating safely and efficiently.' },
                                { type: 'keyTerm', term: 'Butt fusion', definition: 'A method of joining pipe ends by applying direct heat to the pipe materials, such as steel or plastic.' },
                                { type: 'keyTerm', term: 'Chilled water cooling system', definition: 'Piping that circulates chilled water to cool buildings, equipment or processes.' },
                                { type: 'keyTerm', term: 'Computer-aided design (CAD)', definition: 'The use of computer software to draw, alter and recall views and details of a design.' },
                                { type: 'keyTerm', term: 'Condensate return system', definition: 'Piping that returns condensate to a steam generator.' },
                                { type: 'keyTerm', term: 'Contour marker', definition: 'A layout tool that traces cutting lines for laterals, tees and wyes during pipe fabrication.' },
                                { type: 'keyTerm', term: 'Control valve', definition: 'A valve that automatically regulates the flow of a liquid or gas in response to an electrical or pneumatic signal or a capillary tube.' },
                                { type: 'keyTerm', term: 'Controller', definition: 'A device with a sensing element that measures a condition and adjusts a preselected component in response.' },
                                { type: 'keyTerm', term: 'Converter', definition: 'Equipment that heats or cools a liquid using steam, hot water or chilled water without the two mediums mixing, for example a heat exchanger or indirect heater.' },
                                { type: 'keyTerm', term: 'De-aerator', definition: 'A device that removes temporary hardness and dissolved gases, such as oxygen and carbon dioxide, from make-up water.' },
                                { type: 'keyTerm', term: 'Desuperheater', definition: 'A device that uses water as a cooling medium to lower the temperature of superheated steam.' },
                                { type: 'keyTerm', term: 'Direct return', definition: 'A two-pipe hydronic system in which the first unit supplied has the shortest return path back to the boiler.' },
                                { type: 'keyTerm', term: 'Double-block-and-bleed', definition: 'A valve arrangement of two shut-off valves in series with a bleed valve between them, used to vent trapped pressure.' },
                                { type: 'keyTerm', term: 'Dry return', definition: 'A condensate return line located above the boiler water line that carries both condensate and air.' },
                                { type: 'keyTerm', term: 'Equalizer beam', definition: 'A lifting device that balances the load during a lift; it connects to the crane hook and to the load.' },
                                { type: 'keyTerm', term: 'Expansion joint', definition: 'A mechanical device that absorbs pipe expansion and contraction caused by temperature change.' },
                                { type: 'keyTerm', term: 'Expansion loop', definition: 'A pipe configuration that absorbs expansion and contraction caused by temperature change.' },
                                { type: 'keyTerm', term: 'Feed water', definition: 'Water that is fed into a system.' },
                                { type: 'keyTerm', term: 'Flashback', definition: 'Unintended burning of fuel with reversed flow in oxy-fuel equipment, occurring in the lower-pressure line.' },
                                { type: 'keyTerm', term: 'Heat exchanger', definition: 'A device that transfers heat between two fluids without mixing them.' },
                                { type: 'keyTerm', term: 'Heat transfer unit', definition: 'A device that transfers heat from a fluid to a space by conduction, convection or radiation.' },
                                { type: 'keyTerm', term: 'High temperature hot-water system', definition: 'A system that carries hot water at a temperature above 180 °C (350 °F).' },
                                { type: 'keyTerm', term: 'HVACR system', definition: 'A heating, ventilation, air conditioning and refrigeration system.' },
                                { type: 'keyTerm', term: 'Indicator', definition: 'An instrument that shows a measurement without making a permanent record, for example a pressure gauge.' },
                                { type: 'keyTerm', term: 'Isolator', definition: 'A device that separates equipment from its piping for testing or flushing, or separates piping from its supports to reduce noise, vibration or static electricity.' },
                                { type: 'keyTerm', term: 'Low water cut-off (LWCO)', definition: 'A device that shuts off the automatic fuel control valve when the water level drops below a safe level.' },
                                { type: 'keyTerm', term: 'Make-up water', definition: 'Water added to a system to replace fluid lost through evaporation, leakage and similar causes.' },
                                { type: 'keyTerm', term: 'Pin indexing', definition: 'A fail-safe connection design in which gas-specific end connections (DISS) can join only to the matching gas connection.' },
                                { type: 'keyTerm', term: 'Piping circuit', definition: 'The piping path from a heat exchanger to a heat transfer unit and back.' },
                                { type: 'keyTerm', term: 'Post heating', definition: 'Applying heat to an area after a process such as welding.' },
                                { type: 'keyTerm', term: 'Preheating', definition: 'Applying heat to an area before a process such as welding.' },
                                { type: 'keyTerm', term: 'Relief devices', definition: 'Protective devices that open automatically to prevent overpressure.' },
                                { type: 'keyTerm', term: 'Resin', definition: 'A bonding agent used in fibreglass work that resists acids and alkalis.' },
                                { type: 'keyTerm', term: 'Saturated steam', definition: 'Steam at the same temperature as the boiling water it came from; it may be dry or wet.' },
                                { type: 'keyTerm', term: 'Single-seated control valve', definition: 'A control valve with one seat and one plug or disc.' },
                                { type: 'keyTerm', term: 'Solvent fusion', definition: 'A method of joining plastic pipe and fittings with a solvent that dissolves the surfaces and forms a permanent bond as it evaporates.' },
                                { type: 'keyTerm', term: 'Spool sheets', definition: 'Detailed drawings of a piping system that identify the individual pieces to be fabricated.' },
                                { type: 'keyTerm', term: 'Spreader bar/beam', definition: 'A lifting bar that supports long, awkward loads so that they do not tip, slide or bend; it is connected to the crane hook by slings.' },
                                { type: 'keyTerm', term: 'Spreaders', definition: 'A set of equal-length chokers or slings used to lift a load.' },
                                { type: 'keyTerm', term: 'Steam separator', definition: 'A device that removes entrained moisture from steam.' },
                                { type: 'keyTerm', term: 'Steam tracing', definition: 'A steam-filled pipe or tube run along or coiled around a pipe, vessel or pump to keep its contents from dropping below a minimum temperature.' },
                                { type: 'keyTerm', term: 'Steam trap', definition: 'An automatic device that passes air and condensate but holds back steam.' },
                                { type: 'keyTerm', term: 'Straightening vanes', definition: 'Devices that reduce turbulence in flowing liquids or gases so that measuring instruments read accurately.' },
                                { type: 'keyTerm', term: 'Superheated steam', definition: 'Saturated steam with added sensible heat, which raises its temperature without raising its pressure.' },
                                { type: 'keyTerm', term: 'Superheater', definition: 'A device that heats dry or wet saturated steam to raise its temperature without raising its pressure.' },
                                { type: 'keyTerm', term: 'Vacuum', definition: 'Pressure below atmospheric pressure.' },
                                { type: 'keyTerm', term: 'Wrap-around', definition: 'A marking and measuring tool used on round surfaces during layout.' },
                            ]
                        },
                        {
                            id: 'ch01-s2',
                            title: 'Acronyms and Abbreviations',
                            content: [
                                { type: 'acronym', term: 'ABS', definition: 'acrylonitrile butadiene styrene' },
                                { type: 'acronym', term: 'ACR', definition: 'air-conditioning and refrigeration' },
                                { type: 'acronym', term: 'AHJ', definition: 'authority having jurisdiction' },
                                { type: 'acronym', term: 'ANSI', definition: 'American National Standards Institute' },
                                { type: 'acronym', term: 'ASME', definition: 'American Society of Mechanical Engineers' },
                                { type: 'acronym', term: 'ASTM', definition: 'American Society for Testing and Materials' },
                                { type: 'acronym', term: 'AWS', definition: 'American Welding Society' },
                                { type: 'acronym', term: 'BIM', definition: 'Building Information Modelling' },
                                { type: 'acronym', term: 'CAD', definition: 'computer-aided design' },
                                { type: 'acronym', term: 'CFC', definition: 'chlorofluorocarbon' },
                                { type: 'acronym', term: 'CNC', definition: 'Computer Numeric Control' },
                                { type: 'acronym', term: 'CPP', definition: 'concrete pressure pipe' },
                                { type: 'acronym', term: 'CPVC', definition: 'chlorinated polyvinyl chloride' },
                                { type: 'acronym', term: 'CRN', definition: 'Canadian Registration Number' },
                                { type: 'acronym', term: 'CSA', definition: 'Canadian Standards Association' },
                                { type: 'acronym', term: 'CWB', definition: 'Canadian Welding Bureau' },
                                { type: 'acronym', term: 'DISS', definition: 'diameter index safety system' },
                                { type: 'acronym', term: 'DWV', definition: 'drain, waste and vent' },
                                { type: 'acronym', term: 'DX', definition: 'direct expansion' },
                                { type: 'acronym', term: 'ERW', definition: 'electric resistance welded' },
                                { type: 'acronym', term: 'FLRA', definition: 'field level risk assessment' },
                                { type: 'acronym', term: 'FRP', definition: 'fibreglass reinforced plastic' },
                                { type: 'acronym', term: 'GA', definition: 'general arrangement' },
                                { type: 'acronym', term: 'GFRP', definition: 'glass fibreglass reinforced plastic' },
                                { type: 'acronym', term: 'GMAW', definition: 'gas metal arc welding' },
                                { type: 'acronym', term: 'GPS', definition: 'global positioning system' },
                                { type: 'acronym', term: 'GRE', definition: 'glass reinforced epoxy' },
                                { type: 'acronym', term: 'GTAW', definition: 'gas tungsten arc welding' },
                                { type: 'acronym', term: 'HCFC', definition: 'hydrochlorofluorocarbon' },
                                { type: 'acronym', term: 'HCPE', definition: 'polyethylene piping' },
                                { type: 'acronym', term: 'HDPE', definition: 'high-density polyethylene' },
                                { type: 'acronym', term: 'HRV', definition: 'heat recovery ventilator' },
                                { type: 'acronym', term: 'HSS', definition: 'hollow structural section' },
                                { type: 'acronym', term: 'HVACR', definition: 'heating, ventilation, air conditioning and refrigeration' },
                                { type: 'acronym', term: 'ICI', definition: 'industrial, commercial and institutional' },
                                { type: 'acronym', term: 'JSA', definition: 'job safety analysis' },
                                { type: 'acronym', term: 'LDPE', definition: 'low-density polyethylene' },
                                { type: 'acronym', term: 'LEED', definition: 'Leadership in Energy and Environmental Design' },
                                { type: 'acronym', term: 'LOTO', definition: 'lock-out and tag-out' },
                                { type: 'acronym', term: 'LWCO', definition: 'low water cut-off' },
                                { type: 'acronym', term: 'MAPP', definition: 'methylacetylene-propadiene propane' },
                                { type: 'acronym', term: 'MTR', definition: 'mill test report' },
                                { type: 'acronym', term: 'NDE', definition: 'non-destructive examination' },
                                { type: 'acronym', term: 'NDT', definition: 'non-destructive testing' },
                                { type: 'acronym', term: 'NFPA', definition: 'National Fire Protection Association' },
                                { type: 'acronym', term: 'OH&S', definition: 'Occupational Health and Safety' },
                                { type: 'acronym', term: 'P&ID', definition: 'process and instrumentation drawing' },
                                { type: 'acronym', term: 'PE', definition: 'polyethylene' },
                                { type: 'acronym', term: 'PEX', definition: 'cross-linked polyethylene' },
                                { type: 'acronym', term: 'PMI', definition: 'positive material identification' },
                                { type: 'acronym', term: 'PP', definition: 'polypropylene' },
                                { type: 'acronym', term: 'PPE', definition: 'personal protective equipment' },
                                { type: 'acronym', term: 'PVC', definition: 'polyvinyl chloride' },
                                { type: 'acronym', term: 'QA', definition: 'quality assurance' },
                                { type: 'acronym', term: 'QC', definition: 'quality control' },
                                { type: 'acronym', term: 'RFI', definition: 'request for information' },
                                { type: 'acronym', term: 'SAW', definition: 'submerged arc welding' },
                                { type: 'acronym', term: 'SCBA', definition: 'self-contained breathing apparatus' },
                                { type: 'acronym', term: 'SDS', definition: 'Safety Data Sheet' },
                                { type: 'acronym', term: 'SMAW', definition: 'shielded metal arc welding' },
                                { type: 'acronym', term: 'SPA', definition: 'safety plan of action' },
                                { type: 'acronym', term: 'UL', definition: 'Underwriters Laboratories' },
                                { type: 'acronym', term: 'VR', definition: 'virtual reality' },
                                { type: 'acronym', term: 'WHMIS', definition: 'Workplace Hazardous Materials Information System' },
                                { type: 'acronym', term: 'WLL', definition: 'working load limit' },
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 2 — SAFETY ON THE JOB (FREE)
                // ============================================================
                {
                    id: 'ch-02',
                    number: 2,
                    title: 'Safety on the Job',
                    subtitle: 'Safe work environment, PPE and lock-out/tag-out (Task A-1)',
                    isFree: true,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch02-s1',
                            title: 'Maintaining a Safe Work Environment (A-1.01)',
                            content: [
                                { type: 'text', text: 'Steamfitters and pipefitters work with pressure, heat, heavy materials, flammable gases and energized equipment, often at heights or in confined spaces. A safe work environment is not the job of the safety officer alone: every worker is responsible for recognizing hazards, following regulations and speaking up. Safety questions appear throughout the Red Seal exam, not only in the safety task, so the habits in this chapter apply to every later chapter.' },
                                { type: 'text', text: 'Before each task you complete a pre-hazard assessment, written as a field level risk assessment (FLRA) or job safety analysis (JSA). It lists the steps of the job, the hazards at each step and the controls that remove or reduce them. You attend toolbox meetings, sign off your participation and carry out the task without incident. If a hazard cannot be removed immediately, you mitigate it, document it and tell everyone affected.' },
                                { type: 'keyTerm', term: 'Field level risk assessment (FLRA)', definition: 'A pre-task review, completed by the crew on site, that identifies hazards and the controls to be used before work begins.' },
                                { type: 'keyTerm', term: 'Authority having jurisdiction (AHJ)', definition: 'The organization or inspector with legal authority to approve installations and enforce the applicable codes and regulations.' },
                                { type: 'text', text: 'Hazardous products are handled and stored under WHMIS. Every product has a supplier label and a Safety Data Sheet (SDS). The SDS tells you the hazards, the PPE required, first aid measures, spill response, fire-fighting measures and safe storage. You must be able to find the SDS on site and follow its directions.' },
                                {
                                    type: 'table',
                                    headers: ['Worksite hazard', 'Typical example for a pipefitter', 'Common controls'],
                                    rows: [
                                        ['Poor housekeeping / tripping', 'Hoses, pipe offcuts and tools left in walkways', 'Clean as you go, store materials in designated areas, keep exits clear'],
                                        ['Overhead', 'Work above, dropped tools, suspended loads', 'Hard hats, barricades, tool tethers, tag lines, no working under loads'],
                                        ['Trenching and shoring', 'Excavations for underground piping', 'Shoring or sloping, ladders for exit, spoil piles back from the edge'],
                                        ['Confined space', 'Tanks, vaults, pits, large pipe', 'Permit, atmosphere testing, ventilation, standby attendant, rescue plan'],
                                        ['Hot work', 'Welding, brazing, torch cutting', 'Hot work permit, fire watch, remove or cover flammables, extinguisher at hand'],
                                        ['Asbestos', 'Old insulation on steam and hot water lines', 'Do not disturb; stop and report; work only after abatement by qualified workers'],
                                        ['Noise and vibration', 'Grinders, pneumatic tools, compressors', 'Hearing protection, anti-vibration gloves, limit exposure time'],
                                        ['Air quality', 'Welding fumes, solvent vapours, dust', 'Ventilation, fume extractors, respirators, air quality monitors'],
                                        ['Energy', 'Steam, pressure, electricity, stored mechanical energy', 'Lock-out/tag-out, verify zero energy, relieve pressure safely'],
                                        ['Chemical', 'Cleaners, flux, solvent cement, treatment chemicals', 'SDS, labelled containers, correct PPE, spill kit, eye wash station']
                                    ]
                                },
                                { type: 'text', text: 'Warn co-workers of hazards using more than one method: speak to them directly, raise it at a safety meeting, flag off or barricade the area, post signs, or use warning lights and sirens where they are provided. Unsafe conditions are reported to the Health and Safety Representative and supervisor and documented. Keep the work area free of debris and clutter.' },
                                { type: 'callout', style: 'warning', text: 'Insulation on older steam and hot water piping may contain asbestos. If you suspect asbestos, stop work, keep others away and report it to the supervisor. Do not cut, scrape or brush the material. Work resumes only after the material has been tested and, where needed, removed by qualified abatement workers.' },
                                { type: 'callout', style: 'exam-tip', text: 'When an exam question asks what to do first about an unsafe condition, the best answer usually combines protecting people now (stop work, warn others, isolate the hazard) with reporting and documenting it. A choice that only says continue working carefully is almost never correct.' }
                            ]
                        },
                        {
                            id: 'ch02-s2',
                            title: 'Emergency Response and Site Rules',
                            content: [
                                { type: 'text', text: 'You must know the company, site-specific and jurisdictional emergency procedures before the work starts: where the muster point is, how to raise an alarm, where the first aid kit, eye wash station and fire extinguishers are, and who the first aid attendants are. In a spill, fire, injury or release of steam or gas, protect life first, raise the alarm, and then deal with property.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Know the location of exits, muster points, first aid kits, eye wash stations and extinguishers before you start work.',
                                        'Report every injury, near miss and incident, even if no one was hurt.',
                                        'Follow site-specific rules in addition to jurisdictional regulations; the stricter rule applies.',
                                        'Do not enter a confined space, trench or restricted area without the required permit and training.',
                                        'Do not remove, bypass or tamper with guards, relief devices or safety signs.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Never bypass or plug a relief device to make a test or start-up easier. A relief device is the last protection against overpressure, and removing it can turn a pressure excursion into an explosion.' }
                            ]
                        },
                        {
                            id: 'ch02-s3',
                            title: 'Personal Protective Equipment and Safety Equipment (A-1.02)',
                            content: [
                                { type: 'text', text: 'PPE is the last line of defence. It is used after hazards have been eliminated or reduced by other controls. You select PPE for the task, its limitations, its fit and the site requirements. You inspect it before use for function, fit and expiry date, and you tag and remove from service anything worn, damaged or defective. PPE is cleaned and stored so that it is not damaged, contaminated or stolen.' },
                                {
                                    type: 'table',
                                    headers: ['PPE item', 'Protects against', 'Key use or limit'],
                                    rows: [
                                        ['Hard hat', 'Falling objects, bumps', 'Replace if cracked or after a heavy impact; check expiry'],
                                        ['Safety glasses / face shield', 'Flying particles, splash', 'Face shield is worn over safety glasses, not in place of them'],
                                        ['Welding helmet, goggles (shade 5) and flash goggles (shade 2)', 'Arc and torch light, sparks', 'Use the lens shade suited to the process; flash goggles are worn under the helmet'],
                                        ['Hearing protection', 'Noise from grinders, compressors, pneumatic tools', 'Must be worn correctly to give its rated reduction'],
                                        ['Respirator / dust mask', 'Dust, fumes, vapours', 'Must be the right type for the contaminant and fit tested'],
                                        ['Self-contained breathing apparatus (SCBA)', 'Oxygen-deficient or toxic atmospheres', 'Requires specific training; used for emergency or controlled entry work'],
                                        ['Gloves (leather, rubber, anti-vibration)', 'Cuts, heat, chemicals, vibration', 'Select by hazard; leather for welding, rubber or chemical-rated for chemicals'],
                                        ['Safety boots', 'Crushing, punctures', 'Steel-toe with slip-resistant, puncture-resistant sole'],
                                        ['Fire-retardant clothing, leather apron, sleeves', 'Sparks, spatter, flash fire', 'Keep clothing free of oil and grease; synthetic clothing melts and burns'],
                                        ['Fall arrest harness and lanyard', 'Falls from height', 'Connected to a rated anchor so that free fall is limited; certified and inspected'],
                                        ['Chemical protective clothing', 'Corrosives and chemical treatment products', 'Select using the SDS']
                                    ]
                                },
                                { type: 'text', text: 'Safety equipment on site also includes fire extinguishers, first aid kits, eye wash stations, welding screens, smoke and fume extractors, hand rails and air quality monitors. Training and certification are required for many items, for example first aid, confined space entry, working at heights (fall protection, fall restraint and fall arrest) and respirator fit testing. Fall arrest equipment must be re-certified as regulations and company policy require.' },
                                { type: 'callout', style: 'warning', text: 'A harness that has arrested a fall must be removed from service. A lanyard attached to an unrated anchor, or one that allows a long free fall, can injure you even if the anchor holds. Always attach to an approved anchor point and limit the free fall as the manufacturer directs.' },
                                { type: 'callout', style: 'exam-tip', text: 'Remember the order of PPE actions: select, inspect, use, clean, store, and tag out if defective. Questions often test what to do with damaged equipment: tag it and remove it from service, do not repair it yourself or use it one more time.' }
                            ]
                        },
                        {
                            id: 'ch02-s4',
                            title: 'Lock-Out and Tag-Out (A-1.03)',
                            content: [
                                { type: 'text', text: 'Lock-out/tag-out (LOTO) protects workers from the unexpected release of energy while equipment or piping is serviced. Components such as pumps, valves, electrical panels and breakers are identified, isolated, locked and tagged according to regulations, company policy and site conditions. Each person working on the system installs a personal lock, signs the documentation, and removes only their own lock when finished.' },
                                { type: 'keyTerm', term: 'Zero-energy state', definition: 'The condition in which all hazardous energy sources, such as pressure, electricity, heat, stored mechanical energy and fluid pressure, have been isolated, relieved or blocked and verified.' },
                                {
                                    type: 'table',
                                    headers: ['Step', 'What you do', 'Why it matters'],
                                    rows: [
                                        ['1. Identify', 'Determine every energy source and component to be isolated', 'Missed sources are the main cause of LOTO incidents'],
                                        ['2. Notify', 'Tell everyone affected and complete permits and sign-in sheets', 'Operators and co-workers must know the system is out of service'],
                                        ['3. Isolate', 'Close valves, open breakers, use double-block-and-bleed or blinds', 'Separates the work area from energy sources'],
                                        ['4. Lock and tag', 'Apply locks, tags, scissor clamps and breaker lock-outs', 'Prevents anyone from re-energizing the system'],
                                        ['5. Relieve and verify', 'Open low-point drains, check gauges and switches, inspect sight glasses, try to start', 'Proves the system is at zero energy'],
                                        ['6. Restore', 'Remove locks and tags in the proper sequence when work is complete', 'Each person removes their own lock; the system is returned to service safely']
                                    ]
                                },
                                { type: 'text', text: 'Isolation methods include double-block-and-bleed (two shut-off valves in series with a bleed valve between them to vent trapped pressure), blinding or spading a line, breaker lock-outs, opening low-point drains, checking gauges and switches, and inspecting sight glasses. Lock-out equipment includes locks and keys, chains and tags, lock-out scissor clamps and lock boxes.' },
                                { type: 'callout', style: 'warning', text: 'A closed valve is not an isolation until it has been locked, tagged and verified. Valves can leak by, and trapped pressure or steam can remain between valves. Always relieve and verify before opening a flange or breaking a joint.' },
                                { type: 'callout', style: 'exam-tip', text: 'If a question gives you a pump, a valve and a panel, remember that LOTO covers all energy sources, not just electrical. The key verification step is checking that the system is at zero energy before starting work.' }
                            ]
                        },
                        {
                            id: 'ch02-s5',
                            title: 'Hot Work, Gas Cylinders and Working at Height',
                            content: [
                                { type: 'text', text: 'Several high-risk activities come up every day in this trade. Hot work, such as welding, brazing and torch cutting, produces sparks and heat that can ignite materials at a distance. Compressed gas cylinders are heavy, pressurized and often contain flammable gas or oxygen. Work at height needs fall protection and safe access.' },
                                {
                                    type: 'table',
                                    headers: ['Activity', 'Main hazard', 'Key safe practice'],
                                    rows: [
                                        ['Welding, brazing, cutting', 'Fire, burns, fumes, arc flash', 'Hot work permit, fire watch, cover or move flammables, ventilation, correct PPE'],
                                        ['Handling gas cylinders', 'Falling cylinder, leak, fire', 'Secure upright, valve caps on when moving, use a cart, keep oxygen apart from fuel gas'],
                                        ['Storing gas cylinders', 'Leaks accumulating, fire', 'Store upright in a ventilated storage unit as regulations require'],
                                        ['Oxy-fuel use', 'Flashback, backfire, explosion', 'Flashback arrestors and check valves, correct regulators, purge and light in the right sequence'],
                                        ['Ladders and scaffolds', 'Falls', 'Inspect before use, secure, three-point contact, no overreaching'],
                                        ['Motorized work platforms', 'Tip-over, falls, crushing', 'Training and certification, pre-use inspection, wear harness where required']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Never use oil, grease or an oily glove or rag on oxygen cylinders, regulators or fittings. Oxygen causes oil and grease to ignite violently. Keep fuel gas and oxygen cylinders stored apart as regulations require.' },
                                { type: 'callout', style: 'warning', text: 'Confined spaces can contain toxic gas or too little oxygen and can kill without warning. Never enter one without the required permit, atmospheric testing, ventilation, a trained attendant outside and a rescue plan. Do not attempt a rescue without training and equipment.' },
                                { type: 'callout', style: 'exam-tip', text: 'Cylinders are stored and used upright and secured. If a scenario has a cylinder lying down or unsecured, or oxygen and fuel gas stored together, the correct answer will fix that.' }
                            ]
                        },
                        {
                            id: 'ch02-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Complete a pre-hazard assessment (FLRA/JSA) and attend toolbox meetings before each task.',
                                        'Use WHMIS labels and SDS to handle and store hazardous materials correctly.',
                                        'Report and document unsafe conditions, and warn co-workers using several methods.',
                                        'Select, inspect, use, clean and store PPE; tag out and remove damaged PPE.',
                                        'LOTO means identify, isolate, lock and tag, relieve, verify zero energy, then work.',
                                        'Treat hot work, gas cylinders, confined spaces, asbestos and work at height as high-risk activities.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 3 — TOOLS AND EQUIPMENT (FREE)
                // ============================================================
                {
                    id: 'ch-03',
                    number: 3,
                    title: 'Tools and Equipment',
                    subtitle: 'Hand and power tools, access equipment, welding, brazing and cutting equipment (Task A-2)',
                    isFree: true,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch03-s1',
                            title: 'Using Common Tools and Equipment (A-2.01)',
                            content: [
                                { type: 'text', text: 'A steamfitter or pipefitter works with hand tools, power tools, measuring tools and powder-actuated tools every day. You select the tool for the job, inspect it before use, and tag and remove from service any tool that is worn, bent, broken or damaged. Tools are cleaned, lubricated and sharpened as the manufacturer specifies, and inspection and maintenance are documented. Tools are stored to prevent damage and theft.' },
                                {
                                    type: 'table',
                                    headers: ['Tool group', 'Examples from the Red Seal tool list', 'Typical use'],
                                    rows: [
                                        ['Cutting and preparing pipe', 'Pipe and tube cutters, hacksaws, portable band saws, pipe reamers, hand bevellers, end-prep milling tools', 'Cutting pipe square, removing burrs, preparing weld bevels'],
                                        ['Threading and grooving', 'Pipe threaders, threading machines, pipe taps, grooving machines', 'Threaded and grooved pipe joints'],
                                        ['Joining and assembly', 'Wrenches (pipe, chain, torque, hammer, hex-key, non-spark), flange alignment pins, flange spreaders, bolt tensioners, torque wrenches', 'Making up flanges, fittings and bolted joints'],
                                        ['Bending and forming', 'Tube benders, bending machines, swaging and flaring tools', 'Bending tube, forming tube ends'],
                                        ['Holding and supporting', 'Pipe vises, chain vises, C-clamps, pipe stands', 'Holding pipe while cutting, threading or assembling'],
                                        ['Plastic pipe', 'PEX tools, press-fit tools', 'Cutting and joining PEX and press-fit systems'],
                                        ['Powered tools', 'Drills (including magnetic drills), grinders, saws, impact drivers, air compressors, generators', 'Drilling, grinding, cutting, powering tools on site'],
                                        ['Powder-actuated tools', 'Powder-actuated fastening tools', 'Fastening into concrete and steel; training and strict safety rules apply'],
                                        ['Hydraulic tools', 'Hydraulic jacks, hydraulic torque wrenches, hydraulic flange spreaders, hydrostatic pump', 'Moving loads, tightening large bolts, pressure testing']
                                    ]
                                },
                                {
                                    type: 'table',
                                    headers: ['Measuring and testing tool', 'Used for'],
                                    rows: [
                                        ['Measuring tape, rulers, callipers, micrometer', 'Length, diameter, thickness'],
                                        ['Levels (laser, builders, digital), plumb bob, string line', 'Level, plumb and straight alignment of piping'],
                                        ['Squares (standard, combination, flange straightedge), centre finder', 'Square cuts, flange alignment, locating centres'],
                                        ['Pressure, temperature, vacuum and liquid gauges, manometer', 'Reading system conditions during tests and start-up'],
                                        ['Infrared temperature sensor, thermometers', 'Checking temperature, including preheat and interpass checks'],
                                        ['Hydrostatic test pump, dead weights', 'Pressure testing and gauge calibration'],
                                        ['Multimeter, ampere probe', 'Electrical checks on controls and motors'],
                                        ['Feeler gauge, holiday detector', 'Gap checks, coating checks']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Do not use a tool for a job it was not designed for. Using a wrench as a hammer, using a cheater bar on a wrench that is not rated for it, or using a damaged grinder wheel can injure you. Check abrasive wheels for cracks and the correct rated speed before mounting them, and keep guards in place.' },
                                { type: 'callout', style: 'exam-tip', text: 'A damaged tool is tagged and removed from service. It is not used until it has been repaired or replaced. This is a frequent exam answer.' }
                            ]
                        },
                        {
                            id: 'ch03-s2',
                            title: 'Access Equipment (A-2.02)',
                            content: [
                                { type: 'text', text: 'Access equipment lets you reach elevated work safely. Each type needs training, correct selection for the job and site, inspection before and during use, and secure setup. Worn, damaged or defective equipment is tagged, reported to the supervisor, removed from service and replaced. You also confirm that certifications are current.' },
                                {
                                    type: 'table',
                                    headers: ['Type', 'Examples', 'Key safety points'],
                                    rows: [
                                        ['Ladders', 'Step, extension, platform and combination ladders', 'Inspect, set on firm level footing, secure at top, keep three points of contact, extend above the landing where used for access'],
                                        ['Scaffolding', 'Tube-and-clamp, frame and swing stage scaffolds', 'Erected and dismantled by trained workers, inspected and tagged, guardrails and full planking in place'],
                                        ['Motorized work platforms', 'Scissor lifts, articulated boom lifts, personnel baskets', 'Operator training and certification, pre-use inspection, follow load and wind limits'],
                                        ['Remote access systems', 'Rope access, bosun chairs', 'Specialized training; used only by qualified workers']
                                    ]
                                },
                                { type: 'text', text: 'A common ladder guideline is the 4 to 1 rule: for every 4 units of height, place the base 1 unit away from the wall. Never stand on the top step or top rail of a stepladder, and never carry loads that keep you from holding the ladder with both hands. Follow the regulations and site rules for your jurisdiction.' },
                                { type: 'callout', style: 'warning', text: 'Never use an access system you are not trained and certified to use. Falls from height are among the most serious hazards in the trade. Inspect each ladder, scaffold or lift before use, and do not use equipment with a damaged tag or an expired inspection.' }
                            ]
                        },
                        {
                            id: 'ch03-s3',
                            title: 'Welding Equipment (A-2.03)',
                            content: [
                                { type: 'text', text: 'Pipefitters weld steel, stainless steel and other piping and also join plastic piping by heat fusion. You select the equipment for the application and the material, and you select and store consumables so that they stay clean and dry. Alloys must match the components being welded, as the quality control requirements specify. Before welding you set up the machine for the application, protect nearby equipment and flammable materials or move them away, and inspect the equipment. Tack welds are done according to regulations.' },
                                {
                                    type: 'table',
                                    headers: ['Process', 'Also called', 'Characteristics', 'Typical pipe use'],
                                    rows: [
                                        ['SMAW', 'Stick', 'Flux-coated electrode; works outdoors and in wind; portable and simple', 'Field welding of carbon steel pipe'],
                                        ['GTAW', 'TIG', 'Non-consumable tungsten electrode with shielding gas; clean, precise, slow', 'Root passes, stainless steel and thin-wall pipe'],
                                        ['GMAW', 'MIG', 'Continuous wire with shielding gas; fast; sensitive to wind', 'Shop fabrication'],
                                        ['Orbital welding', 'Machine GTAW', 'Welding head travels around the pipe under machine control; repeatable', 'High-purity and stainless systems'],
                                        ['Heat fusion', 'Butt fusion, socket fusion', 'Pipe ends are heated and joined under pressure', 'Polyethylene (PE) and other plastic piping']
                                    ]
                                },
                                { type: 'text', text: 'Consumables include welding rods, flux, grinding discs and purge gases. Store low-hydrogen electrodes and other consumables as the quality control documentation requires, to prevent damage and contamination.' },
                                { type: 'callout', style: 'exam-tip', text: 'Match the process to the job. SMAW is tolerant of wind and rust and is common in the field. GTAW gives clean, high-quality welds on stainless and for root passes. GMAW is fast but is disturbed by wind, so it is used mostly in the shop.' }
                            ]
                        },
                        {
                            id: 'ch03-s4',
                            title: 'Soldering and Brazing Equipment (A-2.04)',
                            content: [
                                { type: 'text', text: 'Soldering and brazing both join metals by melting a filler metal into a close-fitting joint without melting the base metal. By the usual convention, soldering uses filler that melts below about 450 °C (840 °F), while brazing uses filler that melts above that temperature. Brazing joints are stronger and are used for refrigerant, medical gas and high-temperature service.' },
                                {
                                    type: 'table',
                                    headers: ['Equipment or consumable', 'Details'],
                                    rows: [
                                        ['Torches', 'Oxy-acetylene and air-acetylene torches, torch heads and tips, MAPP gas, strikers'],
                                        ['Fuel and gas cylinders', 'Stored upright in a ventilated storage unit as regulations require'],
                                        ['Filler metals', 'Soft solder, silver solder, brazing rod'],
                                        ['Flux and cleaning', 'Flux and sand cloth to prepare surfaces'],
                                        ['Purge gas equipment', 'Regulator, flow meter, dams and purge gas to keep air out of the tube']
                                    ]
                                },
                                { type: 'text', text: 'Choose the equipment and consumables for the material and application, match alloys to the components, and join the pipe and fittings to the soldering and brazing standards. Purge the piping and tubing according to system requirements to prevent internal oxide and contamination. When brazing, a purge uses dams, purge gas, a controlled pressure and a controlled flow rate. Protect nearby equipment and flammable materials or remove them from the area.' },
                                { type: 'callout', style: 'warning', text: 'Brazing without a purge forms scale inside the tube. The scale can break loose and block valves, controls and orifices, and it can contaminate clean systems such as refrigerant and medical gas piping. Use the purge flow and pressure the system requires.' },
                                { type: 'callout', style: 'exam-tip', text: 'If asked why a purge gas is used when brazing, the answer is to keep oxygen out of the tube so that no internal oxide or contamination forms.' }
                            ]
                        },
                        {
                            id: 'ch03-s5',
                            title: 'Oxy-Fuel and Plasma Cutting Equipment (A-2.05)',
                            content: [
                                { type: 'text', text: 'Oxy-fuel equipment burns a fuel gas with oxygen to heat and cut steel. The main components are the cylinders, regulators, hoses, torches and flashback arrestors. Tips are selected for the application, the fuel used and the material being cut or heated. Gauges and torches are set up for the material, and flammable materials near the work are protected or moved.' },
                                { type: 'keyTerm', term: 'Flashback arrestor', definition: 'A safety device fitted to oxy-fuel equipment that stops a flame from travelling back into the hoses, regulators and cylinders.' },
                                { type: 'text', text: 'Acetylene must not be used at a regulator pressure above 15 psi (about 103 kPa), because acetylene becomes unstable above that pressure. Check hoses, regulators, check valves and flashback arrestors before use, and test connections for leaks with a leak-test solution, never with a flame.' },
                                {
                                    type: 'table',
                                    headers: ['Plasma cutting type', 'Notes'],
                                    rows: [
                                        ['Air plasma', 'Uses compressed air; common and economical for carbon steel, stainless and aluminum'],
                                        ['Oxygen plasma', 'Uses oxygen for cleaner cuts on mild steel'],
                                        ['High-definition plasma', 'Constricted arc for a narrow, precise cut with less cleanup'],
                                        ['CNC plasma', 'Machine-guided cutting table controlled by computer']
                                    ]
                                },
                                { type: 'text', text: 'For plasma cutting, the tip, voltage and air pressure are selected for the application and material. Replace worn tips and electrodes, and tag and replace worn or damaged equipment.' },
                                { type: 'callout', style: 'warning', text: 'Flashback can travel into the hoses and regulator and cause an explosion. If a torch pops or the flame goes out with a hissing sound, close the torch valves and the cylinder valves, then investigate. Flashback arrestors reduce the risk but do not replace correct lighting and shut-down procedures.' },
                                { type: 'callout', style: 'exam-tip', text: 'A flashback arrestor prevents the flame from travelling back into the hoses, regulator and cylinder. Cylinders stay upright and secured in a ventilated storage unit.' }
                            ]
                        },
                        {
                            id: 'ch03-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Inspect tools before use; tag and remove damaged tools from service.',
                                        'Choose ladders, scaffolds, lifts or rope access by the job, and use only what you are trained and certified to use.',
                                        'Match the welding process, consumables and alloy to the application and QC requirements.',
                                        'Soldering melts filler below about 450 °C and brazing above it; purge tubing when brazing.',
                                        'Oxy-fuel sets use flashback arrestors; acetylene is never regulated above 15 psi.',
                                        'Store cylinders upright, secured and in a ventilated storage unit.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 4 — PLANNING, DRAWINGS AND TEMPLATES
                // ============================================================
                {
                    id: 'ch-04',
                    number: 4,
                    title: 'Planning, Drawings and Templates',
                    subtitle: 'Planning work, generating and interpreting drawings, and developing piping templates (A-3.01 to A-3.04)',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch04-s1',
                            title: 'Planning the Work (A-3.01)',
                            content: [
                                { type: 'text', text: 'Good planning keeps the crew safe, avoids rework and keeps the job on schedule. You sequence tasks according to the construction sequence, identify the tools, piping, equipment and components for each task from the bill of materials and drawings, and estimate time and labour. These estimates feed productivity and monthly progress reports.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Sequence tasks to follow the construction sequence and coordinate with other trades for safety and productivity.',
                                        'Take quantities from the bill of materials and drawings; list tools, piping, equipment and components for each task.',
                                        'Estimate time and labour, and compare actual progress with the estimate in productivity reports.',
                                        'Verify that permits are in place and file required documents before work begins.',
                                        'Include a backup plan for unexpected environmental conditions such as inclement weather, air quality, asbestos abatement or flooding.',
                                        'Report work area requirements, such as temporary shelters, platforms, heaters and waste disposal, to the supervisor.',
                                        'Get tools, piping and components to the installation location with complete documentation.'
                                    ]
                                },
                                { type: 'text', text: 'Information comes from bid packages, productivity reports, requests for information (RFIs), work schedules, drawings, clients and other professionals. Job considerations include site layout, crane requirements, excavation and access. Costing includes labour and time, and material cost and wastage. The most efficient work method is chosen only if it also keeps safety first.' },
                                { type: 'callout', style: 'exam-tip', text: 'When a plan has missing or conflicting information, the correct step is to ask: submit a request for information (RFI) and wait for the answer. Do not guess and do not build from an assumption.' }
                            ]
                        },
                        {
                            id: 'ch04-s2',
                            title: 'Generating Drawings (A-3.02)',
                            content: [
                                { type: 'text', text: 'You must be able to sketch piping so that a fabricator can read it, mark changes on engineered drawings, and produce as-built drawings that show what was actually installed. Sketches show three-dimensional piping with orthographic or isometric views, use trade symbols, and carry dimensions that match the actual piping. You also compare site dimensions to the engineered drawings and document any discrepancies.' },
                                {
                                    type: 'table',
                                    headers: ['Drawing type', 'What it shows', 'How you use it'],
                                    rows: [
                                        ['Isometric', 'Piping in a single three-dimensional view with dimensions and fittings', 'Fabrication and installation of piping runs'],
                                        ['Orthographic', 'Plan, elevation and section views at right angles', 'Locating equipment and piping in the building'],
                                        ['Spool drawing', 'One fabricated piece of piping with every dimension and fitting', 'Prefabrication in the shop'],
                                        ['P&ID', 'Process flow, equipment, valves and instruments', 'Understanding how a process system works; identifying valves and lines'],
                                        ['Schematic', 'Functional layout, not drawn to scale', 'Understanding system operation'],
                                        ['General arrangement (GA)', 'Overall layout of equipment and piping', 'Locating major equipment and routing'],
                                        ['Weld map', 'Location and number of each weld', 'Tracking welding and inspection'],
                                        ['As-built', 'The system as actually installed', 'Record for the client and future maintenance'],
                                        ['Manufacturer drawings', 'Equipment dimensions and connections', 'Piping to equipment connections']
                                    ]
                                },
                                { type: 'text', text: 'Engineered drawings come from several disciplines: civil/site, mechanical, electrical, architectural, structural and manufacturers. Layout and drafting tools include levelling instruments, squares, scale rulers, scribers, calculators and compasses. Red-line changes are marked on the engineered drawing to show differences between the design and what was built.' },
                                {
                                    type: 'table',
                                    headers: ['View', 'Meaning'],
                                    rows: [
                                        ['Plan', 'Looking down from above'],
                                        ['Elevation', 'Looking at the side or front'],
                                        ['Section', 'A cut through the piping or building to show internal details'],
                                        ['Detail', 'An enlarged view of a small area'],
                                        ['Cross-section', 'A slice perpendicular to the length of a pipe or component']
                                    ]
                                },
                                { type: 'text', text: 'Drawings use either metric or imperial units, and you must be able to convert between them. Useful values: 1 in. = 25.4 mm, 1 m = 3.281 ft, 1 ft = 12 in. For scales, a metric drawing at 1:50 means 1 unit on the drawing equals 50 units in real life, and an imperial drawing at 1/4 in. = 1 ft means each 1/4 in. on paper is 1 ft in the building.' },
                                { type: 'callout', style: 'exam-tip', text: 'Scale example: a pipe measures 84 mm on a 1:50 drawing. The real length is 84 × 50 = 4 200 mm, or 4.2 m. At 1/4 in. = 1 ft, a run measuring 3 3/4 in. on the drawing is 3.75 ÷ 0.25 = 15 ft.' }
                            ]
                        },
                        {
                            id: 'ch04-s3',
                            title: 'Interpreting Drawings and Specifications (A-3.03)',
                            content: [
                                { type: 'text', text: 'Interpreting drawings means gathering information from several drawings and the specifications, confirming it, and using it to prepare material lists and plan the installation. If something is unclear or conflicting, you submit an RFI. You identify piping system types, the piping and equipment, and verify that line numbers are correct. You confirm dimensions by comparing field measurements with the engineered drawings.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Prepare material lists from specifications, bills of material and drawings.',
                                        'Transfer information from specifications onto drawings.',
                                        'Document change orders and revisions and report them to the appropriate authorities (supervisor, engineer, site inspector, consultant or health and safety inspector).',
                                        'Confirm that installations reflect the engineer revisions.',
                                        'Use spool drawings to determine scope, fabrication and installation.',
                                        'Check line numbers and identify the piping system from the drawing.',
                                        'Use digital tools for layout and dimensional control: total station, CAD and Building Information Modelling (BIM).'
                                    ]
                                },
                                { type: 'text', text: 'Specifications give the requirements that drawings cannot show: materials, pressure class, standards, testing and quality requirements. When drawings and specifications disagree, do not choose for yourself. Raise an RFI so that the engineer decides, and record the answer.' },
                                { type: 'callout', style: 'exam-tip', text: 'Know who to report to. Changes, conflicts and design questions go to the supervisor and engineer through an RFI. Safety issues also go to the health and safety representative.' }
                            ]
                        },
                        {
                            id: 'ch04-s4',
                            title: 'Developing Piping Templates (A-3.04)',
                            content: [
                                { type: 'text', text: 'A piping template is a pattern that lets you lay out the cut line for a tee, wye, mitre or dummy leg on pipe so that the pieces fit tightly before welding. You identify the template needed, plan its development for the job and conditions, determine coordinate measurements on the pipe from its size and orientation, and lay them out on the cutting material.' },
                                {
                                    type: 'table',
                                    headers: ['Template', 'Used for'],
                                    rows: [
                                        ['Tee', 'A branch connected at 90° to a run of pipe'],
                                        ['Wye', 'A branch connected at an angle, usually 45°'],
                                        ['Mitre', 'Changes in direction by cutting two pipe ends at an angle'],
                                        ['Dummy leg', 'A support leg connected to the bottom of a pipe run']
                                    ]
                                },
                                { type: 'text', text: 'Template materials include card stock, gaskets, wrap-arounds and cladding. Tools include dividers, scribers, protractors, compasses, wrap-arounds, mitre boards and squares. Pipe specifications that affect the template are wall thickness, material type, diameter and system function. Contour markers trace the cutting lines for laterals, tees and wyes.' },
                                { type: 'callout', style: 'warning', text: 'Wear gloves when handling cut pipe and templates because edges and burrs are sharp. When marking and cutting with a torch or grinder, keep guards on, wear eye and face protection, and clear flammable material from the area.' },
                                { type: 'callout', style: 'exam-tip', text: 'A mitre is formed by cutting two pieces at an angle. For two equal pieces forming a 90° elbow, each piece is cut at 45°. A wrap-around is the tool used to mark the cut line around a round pipe.' }
                            ]
                        },
                        {
                            id: 'ch04-s5',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Plan work by sequence, bill of materials, estimates and permits, with a backup plan for weather and site conditions.',
                                        'Know the drawing types: isometric, orthographic, spool, P&ID, schematic, GA, weld map and as-built.',
                                        'Use scale, conversions and dimensions correctly; compare field measurements with drawings.',
                                        'Raise an RFI when information is missing or conflicting.',
                                        'Templates for tees, wyes, mitres and dummy legs are laid out from pipe size, wall thickness and orientation.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 5 — QUALITY CONTROL, MATERIALS HANDLING AND COMMUNICATION
                // ============================================================
                {
                    id: 'ch-05',
                    number: 5,
                    title: 'Quality Control, Materials Handling and Communication',
                    subtitle: 'QC documentation, inspection and testing, handling materials, communication and mentoring (A-3.05, A-3.06, A-4)',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch05-s1',
                            title: 'Quality Control Documentation and Criteria (A-3.05)',
                            content: [
                                { type: 'text', text: 'Quality control (QC) proves that the work meets specifications and codes. Before work begins you obtain QC documentation from the engineer, client or supplier, confirm that piping materials match the specifications and documentation, and verify the QC criteria. You reference weld procedures, monitoring sensors and consumables required by the documentation, fabricate components to the QC criteria, and complete the documentation when the installation is verified.' },
                                {
                                    type: 'table',
                                    headers: ['QC document', 'What it tells you'],
                                    rows: [
                                        ['Mill test report (MTR)', 'Chemical and mechanical properties of the material and its heat number'],
                                        ['Canadian Registration Number (CRN)', 'Registration of a pressure fitting or vessel design with the provincial authority'],
                                        ['Inspection test plan', 'What will be inspected or tested, when and by whom'],
                                        ['Weld procedure', 'The approved welding variables, including preheat and filler metal'],
                                        ['QC manuals and specifications', 'Project-specific quality requirements'],
                                        ['Tags, torque sheets and torque specifications', 'Traceability and bolting documentation']
                                    ]
                                },
                                { type: 'text', text: 'QC criteria include storage, prevention of cross-contamination, tolerances, alignment, heat number transfer and traceability, preheat and post-heat, stress relieving, torque and tensioning. Traceability means that every piece of pipe can be linked back to its mill test report through its heat number. If you cut a pipe, transfer the heat number to the remaining piece before the original marking is lost.' },
                                { type: 'keyTerm', term: 'Heat number', definition: 'A number stamped or marked on pipe and fittings that links the piece to its mill test report and the batch of steel it was made from.' },
                                { type: 'callout', style: 'exam-tip', text: 'If a question mentions traceability or heat numbers, the correct action is to transfer the marking before cutting and keep records matching the mill test reports.' }
                            ]
                        },
                        {
                            id: 'ch05-s2',
                            title: 'Inspection, Non-Destructive Examination and Pressure Tests',
                            content: [
                                { type: 'text', text: 'You perform visual inspections and document compliance with the specifications. Third-party non-destructive examination (NDE) is arranged and its results are confirmed against the QC documentation. Pressure tests are carried out according to the QC documentation. Specified coatings, such as tape, paint, passivation and synthetic coatings, are applied to welded joints.' },
                                {
                                    type: 'table',
                                    headers: ['NDE method', 'What it finds'],
                                    rows: [
                                        ['Visual', 'Surface defects, poor profile, misalignment'],
                                        ['Dye penetrant', 'Surface-breaking cracks and porosity'],
                                        ['Magnetic particle', 'Surface and near-surface defects in magnetic steel'],
                                        ['Radiography (x-ray)', 'Internal defects such as porosity and lack of fusion'],
                                        ['Ultrasonic', 'Internal flaws and wall thickness'],
                                        ['Brinell hardness', 'Hardness of the material, for example after heat treatment']
                                    ]
                                },
                                {
                                    type: 'table',
                                    headers: ['Pressure test', 'How it works', 'Notes'],
                                    rows: [
                                        ['Hydrostatic', 'The system is filled with liquid, usually water, and pressurized to the test pressure', 'Safer because liquid stores little energy; air must be vented first'],
                                        ['Pneumatic', 'The system is pressurized with air or gas', 'Stores a great deal of energy; used only when permitted and with extra precautions'],
                                        ['Vacuum', 'Air is removed and the system is checked for holding vacuum', 'Used for refrigeration and other vacuum systems']
                                    ]
                                },
                                { type: 'text', text: 'Monitoring sensors, such as temperature indicating sticks, infrared thermometers and contact probes, are used to verify preheat and interpass temperature. Flange torque sheets and torque pattern identification document bolting. A flange is tightened in a star (criss-cross) pattern in stages, not one bolt at a time around the circle, so the gasket seats evenly.' },
                                { type: 'callout', style: 'warning', text: 'A pneumatic test stores much more energy than a hydrostatic test, so a failure can throw pieces of pipe with great force. Follow the test procedure, keep personnel clear, and never exceed the specified test pressure. Increase pressure in steps and do not approach a pressurized system during the hold.' },
                                { type: 'callout', style: 'exam-tip', text: 'For pressure testing, remember that hydrostatic is the preferred method because liquids are nearly incompressible and store little energy. Air must be vented from the system before a hydrostatic test.' }
                            ]
                        },
                        {
                            id: 'ch05-s3',
                            title: 'Handling Materials and Components (A-3.06)',
                            content: [
                                { type: 'text', text: 'Materials and components are identified from packing slips and order sheets. You calculate weights from the material documentation, organize materials by available space, material type and installation sequence, store them in protected locations to prevent contamination, and bundle, load and unload them while considering lifting hazards and contamination. Waste is disposed of according to regulations and site requirements.' },
                                {
                                    type: 'table',
                                    headers: ['Item', 'Examples', 'Handling concern'],
                                    rows: [
                                        ['Materials', 'Tube and pipe, angle iron, hollow structural sections (HSS)', 'Weight, length, sharp ends, rolling'],
                                        ['Components', 'Valves, vessels, pumps, gaskets, exchangers', 'Heavy or awkward; protect machined faces and flange faces'],
                                        ['Lifting hazards', 'Uneven weight distribution, hoist capacity, oversized loads, load shifting', 'Calculate weight, choose correct rigging'],
                                        ['Contamination', 'Corrosion, cross-contamination, dirt, oil, water, pests', 'Keep stainless apart from carbon steel; cap pipe ends; store off the ground']
                                    ]
                                },
                                { type: 'text', text: 'You must recognize the materials by type (cast iron, carbon and alloy steels, stainless steel, copper and aluminum) and pipe and tube schedules, as well as the grade, size and type of bolts, studs and screws. Standard fittings are identified by size, designation, function and pressure rating: nozzles, couplings, flanges, blind flanges, blanking plates, plugs and valves.' },
                                { type: 'callout', style: 'exam-tip', text: 'Weight calculation: total weight = weight per unit length × length. For example, 12 lengths of pipe at 6 m each with a mass of 20 kg per metre weigh 12 × 6 × 20 = 1 440 kg. Always confirm that the hoist or crane capacity and rigging are suitable before lifting.' },
                                { type: 'callout', style: 'warning', text: 'Do not store stainless steel pipe in contact with carbon steel or use carbon steel tools on it. Iron particles embedded in stainless steel can cause rust spots and corrosion. Keep stainless materials separate and use dedicated tools and brushes.' }
                            ]
                        },
                        {
                            id: 'ch05-s4',
                            title: 'Communication Techniques (A-4.01)',
                            content: [
                                { type: 'text', text: 'Clear communication prevents errors and injuries. You make sure that everyone interprets instructions the same way, use active listening, speak clearly with correct trade terminology, and confirm that both parties understand. You respond to instructions and feedback in ways that show understanding, ask questions to improve understanding, and relay information from safety and other meetings to the crew.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Active listening includes hearing, interpreting, reflecting, responding and paraphrasing.',
                                        'Use verbal and non-verbal communication, and confirm the message by repeating it back.',
                                        'Use trade terminology correctly so that other trades and suppliers understand you.',
                                        'Send and receive email and text messages professionally, in plain language and according to company policy.',
                                        'Know information sources: regulations, codes, OHS requirements, drawings, specifications and company or client documents.',
                                        'Respect equity, diversity and inclusion; recognize bullying, harassment and discrimination as defined by human rights legislation.',
                                        'Show good workplace attitudes: punctuality, willingness to ask questions, working safely, accepting feedback and caring for tools and property.'
                                    ]
                                },
                                { type: 'text', text: 'You communicate with many people: tradespeople, colleagues, apprentices, supervisors, clients, jurisdictional representatives, manufacturers and visitors. Learning and communication styles differ (visual, auditory, reading, writing and hands-on), so effective communicators adjust their method.' },
                                { type: 'callout', style: 'exam-tip', text: 'The best answer to a communication question usually confirms understanding, for example by paraphrasing or asking the other person to repeat the instruction, rather than assuming it was understood.' }
                            ]
                        },
                        {
                            id: 'ch05-s5',
                            title: 'Mentoring Techniques (A-4.02)',
                            content: [
                                { type: 'text', text: 'Journeypersons train apprentices on the job. Effective mentoring follows a sequence: explain the learning objective and the main point of the lesson, link it to other lessons and to the project, demonstrate the skill step by step, set up safe practice, assess the learner as independence increases, and give supportive and corrective feedback.' },
                                {
                                    type: 'table',
                                    headers: ['Mentoring step', 'What the mentor does'],
                                    rows: [
                                        ['Explain', 'State the objective and main point; confirm that the learner can restate it'],
                                        ['Demonstrate', 'Show each step; explain who, what, where, when, why and how; identify hazards'],
                                        ['Practise', 'Set up guided practice first, then limited independence, then full independence'],
                                        ['Assess', 'Watch the learner as independence increases, until little supervision is needed'],
                                        ['Feedback', 'Give supportive and corrective feedback and confirm best practice is adopted']
                                    ]
                                },
                                { type: 'text', text: 'Mentors also support the apprentice technical training so it is completed within the apprenticeship timeframe, support an anti-harassment and anti-discrimination workplace, and give constructive feedback about strengths and weaknesses during a probation period. Learning styles and needs, including learning preferences, learning disabilities and language proficiency, affect how lessons should be adapted.' },
                                { type: 'callout', style: 'exam-tip', text: 'The mentoring order is explain, demonstrate, practise under supervision, assess and give feedback. Safety comes first: identify hazards before the apprentice tries a task.' }
                            ]
                        },
                        {
                            id: 'ch05-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Confirm that materials match specifications and QC documentation before work begins, and keep heat numbers traceable.',
                                        'Know NDE methods: visual, dye penetrant, magnetic particle, x-ray, ultrasonic and hardness testing.',
                                        'Prefer hydrostatic over pneumatic testing; vent air from the system first.',
                                        'Tighten flanges in a star pattern and record torque.',
                                        'Protect materials from contamination, and keep stainless steel apart from carbon steel.',
                                        'Confirm understanding in communication, and mentor by explain, demonstrate, practise, assess and give feedback.'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    ]
};

export default steamfitterCourse;