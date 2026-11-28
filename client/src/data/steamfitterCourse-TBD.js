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
        },
        {
            id: 'part-2',
            number: 2,
            title: 'Layout, Fabrication and Piping Installation (MWA B)',
            description: 'Fabricating piping components and supports, measuring and laying out piping, installing copper, plastic, carbon steel, stainless, fibreglass and specialty piping, and installing, maintaining and repairing valves and heat tracing systems.',
            weight: '29 questions (22.3% of Total Exam)',

            chapters: [
                // ============================================================
                // CHAPTER 6 — FABRICATING PIPING COMPONENTS (B-5.01)
                // ============================================================
                {
                    id: 'ch-06',
                    number: 6,
                    title: 'Fabricating Piping Components',
                    subtitle: 'Fittings, joining methods, fit-up tolerances, pre- and post-weld work and documentation (B-5.01)',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch06-s1',
                            title: 'What Fabrication Involves',
                            content: [
                                { type: 'text', text: 'Fabrication is the shop or field work of building piping spools and components before they are installed. Task B-5 carries about a third of the weight of MWA B, so expect several exam questions on it. You select tools and materials from the material list, assemble spools to the drawings and specifications, clean and protect the components, fit and position them within tolerance, join them, carry out pre- and post-weld work, and then document and test the work.' },
                                {
                                    type: 'table',
                                    headers: ['Fabrication step', 'What you do', 'Typical tools or materials'],
                                    rows: [
                                        ['Select', 'Choose tools and pull materials by quantity and type from the material list', 'Pipe, fittings, valves, structural steel'],
                                        ['Layout and cut', 'Measure, mark and cut pipe to the spool drawing', 'Pipe stands, pipe vises, bevelling machines, band saws, torches'],
                                        ['Prepare', 'Bevel, clean and deburr the ends', 'Bevelling machines, grinders'],
                                        ['Fit and position', 'Align components within tolerance and tack', 'Levels, flange squares, measuring tools'],
                                        ['Join', 'Weld, thread, groove, glue, compress or fuse', 'Welding equipment, threading and grooving machines'],
                                        ['Post-weld work', 'Stress relieve, control cooling, NDE', 'Heating equipment, temperature sticks'],
                                        ['Clean and protect', 'Protective coatings, tape, paint, passivation or chemical flushing', 'Coatings and cleaning products'],
                                        ['Document and test', 'Weld map, field drawings, test, QA/QC records', 'Drawings, test equipment']
                                    ]
                                },
                                { type: 'text', text: 'Fabrication techniques named in the standard are cutting, bending, bevelling and drilling. Joining methods are threading, grooving, gluing, welding, compression and fusion. Drawings used include flow sheets, blueprints, P&IDs, general arrangement (GA) drawings and spool drawings. Work is done to jurisdictional regulations such as by-laws, standards and codes including ASME B31 and CSA.' },
                                { type: 'callout', style: 'exam-tip', text: 'When a question describes a spool that does not match its drawing, the correct response is to stop, check the drawing and revision, and resolve the difference before welding. Cutting and welding are hard to undo.' }
                            ]
                        },
                        {
                            id: 'ch06-s2',
                            title: 'Fittings Used in Fabrication',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Fitting', 'Purpose', 'Notes'],
                                    rows: [
                                        ['Elbow', 'Changes direction (commonly 45° and 90°)', 'Long radius elbows give less pressure drop than short radius'],
                                        ['Tee', 'Branch at 90° to the run', 'Equal tee or reducing tee'],
                                        ['Wye / true wye', 'Branch at an angle (usually 45°)', 'Smoother flow for drain and large flow branches'],
                                        ['Lateral', 'Angled branch connection', 'Often fabricated from a template'],
                                        ['Cross', 'Four-way connection', 'Used where two lines meet at one point'],
                                        ['Olet (weldolet, threadolet, sockolet)', 'Reinforced branch outlet welded onto the run', 'Saves a full tee; the run is drilled after welding'],
                                        ['Reducer (concentric or eccentric)', 'Changes pipe size', 'Eccentric reducers keep a flat top or bottom for drainage or to avoid air traps'],
                                        ['Flange', 'Bolted connection to equipment, valves and spools', 'Weld neck, slip-on, socket weld, threaded and blind types'],
                                        ['Cap / plug', 'Closes the end of a pipe', 'Cap is welded or threaded on; plug is threaded in']
                                    ]
                                },
                                { type: 'text', text: 'In the shop, a branch can be made with a tee, an olet or a lateral cut from a template. The choice depends on the drawings and specifications, the pressure class and the material. Always check that the fitting material, rating and schedule match the specification before it is welded into a spool.' },
                                { type: 'callout', style: 'exam-tip', text: 'An eccentric reducer is used on horizontal lines where you must avoid trapping air or liquid. Flat on top lets air pass in liquid lines; flat on the bottom drains the line. A concentric reducer keeps the centreline of both pipes aligned.' }
                            ]
                        },
                        {
                            id: 'ch06-s3',
                            title: 'Fitting Tolerances and Fit-Up',
                            content: [
                                { type: 'text', text: 'Fit-up is the positioning of two pieces before they are joined. The standard names the tolerance practices that you must use: two-holing, gap, high-low, transitioning and alignment. Poor fit-up causes weld defects, stress and leaks, and it can make a joint fail inspection.' },
                                {
                                    type: 'table',
                                    headers: ['Tolerance practice', 'What it controls', 'What goes wrong if it is ignored'],
                                    rows: [
                                        ['Gap (root opening)', 'The space between the pipe ends at the root of a butt weld', 'Too small gives lack of penetration; too large causes burn-through and wasted filler'],
                                        ['High-low', 'Mismatch between the inside surfaces of two pipe ends', 'Stress concentration, flow restriction, lack of fusion at the root'],
                                        ['Alignment', 'Straightness of the pipe and fitting centrelines', 'Strained piping, misaligned flanges and bolts under stress'],
                                        ['Two-holing', 'Positioning flange bolt holes so that they straddle the vertical or horizontal centreline', 'Equipment and valves will not line up and bolts will not enter'],
                                        ['Transitioning', 'Bringing pipe ends of different wall thickness or bore into a smooth change', 'Sharp steps cause stress and weld defects']
                                    ]
                                },
                                { type: 'text', text: 'Two-holing means that no flange bolt hole sits on the centreline; the centreline passes between two holes. This is how flanges are oriented unless the drawing says otherwise, and it applies to both vertical and horizontal flange faces. Use a flange square or flange level to check this.' },
                                { type: 'text', text: 'Fit-up tools include pipe stands and pipe vises, levels, flange squares, bevelling machines and grinders. After the pieces are positioned, they are tack welded under the procedure and checked again before welding continues. The welding process can pull the joint, so tack welds must be placed and sequenced to hold alignment.' },
                                { type: 'callout', style: 'warning', text: 'Do not force flanges together with bolts to correct poor alignment. Forcing a joint puts stress on the piping and on connected equipment, such as pumps, and it can cause a leak or failure later. Fix the alignment first.' },
                                { type: 'callout', style: 'exam-tip', text: 'If a question gives you a high-low problem at the root of a butt weld, think about the cause: poor alignment or mismatched wall thickness. The fix is to realign or use a transition, not to weld over it.' }
                            ]
                        },
                        {
                            id: 'ch06-s4',
                            title: 'Pre-Weld and Post-Weld Work',
                            content: [
                                { type: 'text', text: 'Pre-weld and post-weld activities are specified by the welding procedure and QA/QC requirements. You must follow them exactly. Pre-weld work includes cleaning the joint, controlled preheating, and purging with inert gas where the inside of the pipe must be protected. Post-weld work includes stress relieving, controlled cooling and non-destructive examination (NDE).' },
                                {
                                    type: 'table',
                                    headers: ['Activity', 'Purpose', 'Verification tool'],
                                    rows: [
                                        ['Preheating', 'Slows cooling, reduces the risk of cracking and moisture in the joint', 'Temperature sticks, infrared thermometer, pyrometer'],
                                        ['Purging', 'Displaces air so the inside of the weld does not oxidize', 'Oxygen analyzer'],
                                        ['Stress relieving', 'Reduces residual stresses after welding', 'Controlled heating equipment and recorders'],
                                        ['Controlled cooling', 'Prevents hard, brittle structures from forming', 'Insulation blankets, temperature monitoring'],
                                        ['NDE', 'Checks the weld for defects', 'Visual, dye penetrant, magnetic particle, radiography, ultrasonic']
                                    ]
                                },
                                { type: 'text', text: 'After welding, you clean and protect the components using protective coatings, tape, paint, passivation or chemical flushing, as the specifications direct. You check the completed work against QA/QC procedures, and you test the system by hydrostatic, pneumatic, vacuum or in-service methods.' },
                                { type: 'callout', style: 'warning', text: 'Never weld on a pipe that has not been drained, vented and cleaned. Residue from flammable liquids and trapped gas can explode when heated. Hot work permits and gas testing are required where flammable materials were present.' }
                            ]
                        },
                        {
                            id: 'ch06-s5',
                            title: 'Documentation and Weld Mapping',
                            content: [
                                { type: 'text', text: 'Fabrication is not finished until it is documented. You generate clear, legible field drawings that reflect the actual installation, record weld mapping, identify each component according to the installation drawings, and complete the QA/QC documentation. This allows later inspectors and maintenance crews to trace every weld and material.' },
                                {
                                    type: 'list',
                                    items: [
                                        'A weld map shows the number and location of every weld on a spool or system.',
                                        'Component identification links each piece to the drawing and, through its heat number, to the mill test report.',
                                        'Field drawings show what was built, including any changes from the design.',
                                        'Test records show the test method, pressure, duration and results.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Whenever a question mentions traceability, think documentation: weld map, heat number, mill test report and signed QA/QC records.' }
                            ]
                        },
                        {
                            id: 'ch06-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Fabrication follows the sequence of select, layout, cut, prepare, fit, join, post-weld work, protect, document and test.',
                                        'Know fitting types and when to use an olet, a lateral, an eccentric reducer or a true wye.',
                                        'Know the tolerance practices: gap, high-low, alignment, two-holing and transitioning.',
                                        'Follow pre-weld and post-weld activities exactly as the procedure says.',
                                        'Document welds with a weld map and keep heat numbers traceable.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 7 — SUPPORTS, HANGERS, GUIDES AND ANCHORS (B-5.02)
                // ============================================================
                {
                    id: 'ch-07',
                    number: 7,
                    title: 'Supports, Hangers, Guides and Anchors',
                    subtitle: 'Fabricating and installing pipe supports and controlling thermal expansion (B-5.02)',
                    isFree: false,
                    estimatedMinutes: 50,

                    sections: [
                        {
                            id: 'ch07-s1',
                            title: 'Purpose and Types of Pipe Supports',
                            content: [
                                { type: 'text', text: 'Pipe supports carry the weight of the piping, its contents and its insulation, and they control movement caused by expansion, vibration and pressure. A system can fail at a support as easily as at a joint. You fabricate supports to the QA/QC and design specifications, and you orient and position them taking into account the insulation dimensions, the calculated expansion and the joining method.' },
                                {
                                    type: 'table',
                                    headers: ['Support component', 'Function', 'Typical use'],
                                    rows: [
                                        ['Clevis hanger with threaded rod', 'Suspends the pipe from above and allows some vertical adjustment', 'Horizontal overhead piping'],
                                        ['Pipe clamp', 'Holds the pipe to a structure or rod', 'Vertical risers and light lines'],
                                        ['Shoe', 'Welded under the pipe so the pipe slides on the support instead of the pipe wall', 'Hot lines on steel supports'],
                                        ['Trunion', 'Pipe stub welded under an elbow or pipe to carry load', 'Supporting elbows and lines from below'],
                                        ['Dummy leg', 'Pipe extension welded to the underside of a pipe run to rest on a support', 'Supporting elbows and horizontal runs'],
                                        ['Guide', 'Allows movement along the pipe axis but limits sideways movement', 'Near expansion joints and loops'],
                                        ['Anchor', 'Fixes the pipe so that it cannot move', 'Divides a line into sections so that expansion moves in the intended direction'],
                                        ['Spring can (spring hanger)', 'Supports the pipe while allowing vertical movement', 'Lines that move vertically with temperature, near sensitive equipment'],
                                        ['Bracket', 'Cantilevered support fastened to a wall or structure', 'Along walls and columns']
                                    ]
                                },
                                { type: 'text', text: 'Materials include structural steel, pipe, pipe clamps, threaded rods, isolation barriers, clevis hangers, nuts and washers. Joining methods for supports are bolting on, inserting, welding or chemical anchoring. Fabrication uses cutting, bending, bevelling and drilling, with tools such as chop saws, cutting torches, band saws, grinders, magnetic base drills, pipe vises and two-foot squares.' },
                                { type: 'callout', style: 'exam-tip', text: 'Remember the difference: a guide controls direction of movement, an anchor stops movement, and a hanger carries weight. An exam question may describe a function and ask you to name the support.' }
                            ]
                        },
                        {
                            id: 'ch07-s2',
                            title: 'Protecting the Pipe and Allowing for Insulation',
                            content: [
                                { type: 'text', text: 'A support must not damage the pipe. Pipe protection includes chafing shields, rubber grommets and wear pads, which stop the pipe being worn through where it moves against a support. Isolation barriers separate dissimilar metals, for example copper tube from steel clamps, so that galvanic corrosion does not start. The support must also suit the insulation. A clamp or shoe is sized for the insulated pipe, or the pipe is fitted with an insulation protection shield so that the insulation is not crushed.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Use chafing shields, grommets or wear pads where the pipe moves against a support.',
                                        'Use isolation barriers between dissimilar metals.',
                                        'Allow for the thickness of insulation when choosing hanger and clamp size.',
                                        'Position supports so that the pipe can expand in the intended direction.',
                                        'Keep supports clear of valves and equipment that must be removed for maintenance where possible.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Do not hang piping from other piping, from ductwork or from unsupported equipment. Use approved structure and anchors rated for the load. Always consider the weight of the pipe filled with water during a hydrostatic test, which is much heavier than the weight in service for gas or steam lines.' }
                            ]
                        },
                        {
                            id: 'ch07-s3',
                            title: 'Thermal Expansion and Expansion Control',
                            content: [
                                { type: 'text', text: 'When pipe is heated, it gets longer. Steam, hot water and process lines can move many millimetres over a long run, and cold lines contract. If the movement is not allowed for, the pipe pushes against anchors, equipment and fittings and can buckle, leak or break. Expansion is calculated and handled with loops, swing joints, expansion joints, guides and anchors.' },
                                { type: 'keyTerm', term: 'Linear expansion', definition: 'The change in length of a pipe caused by a change in temperature. It is calculated as the pipe length times the expansion coefficient of the material times the temperature change.' },
                                { type: 'text', text: 'Formula: change in length = length × coefficient of expansion × temperature change. A typical coefficient for carbon steel is about 12 × 10⁻⁶ per °C, and for copper it is about 17 × 10⁻⁶ per °C. These are approximate values; on the exam the formula and any constants needed are provided.' },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example: a 30 m carbon steel steam line heats from 20 °C to 180 °C. Change in temperature is 160 °C. Expansion = 30 m × 12 × 10⁻⁶ × 160 = 0.0576 m, which is about 58 mm. The line needs a way to absorb nearly 6 cm of growth, usually a loop or expansion joint, with guides to keep it moving in a straight path.' },
                                {
                                    type: 'table',
                                    headers: ['Method', 'How it works', 'Notes'],
                                    rows: [
                                        ['Expansion loop', 'A U-shaped or offset section of pipe flexes as the line expands', 'Needs space; no moving parts to wear or leak'],
                                        ['Swing joint (offset)', 'Two or more elbows allow a branch to move without stress', 'Used at branch connections and risers'],
                                        ['Expansion joint', 'Mechanical device (bellows or slip type) that absorbs movement', 'Compact; must be guided and anchored correctly'],
                                        ['Natural flexibility', 'Changes of direction in the layout absorb the movement', 'Used where the layout already has bends'],
                                        ['Guides', 'Keep the pipe moving in line with the joint or loop', 'Installed on both sides of an expansion joint or loop'],
                                        ['Anchors', 'Fix points so growth goes toward the loop or joint', 'Must be strong enough to resist the force of the expanding line']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Anchor and guide supports must be installed as designed. If you remove an anchor or guide, or add an extra restraint, the pipe may move in a way that overloads a pump, valve or expansion joint. Never cut or modify a support without approval.' }
                            ]
                        },
                        {
                            id: 'ch07-s4',
                            title: 'Fabrication, Verification and Inspection of Supports',
                            content: [
                                { type: 'text', text: 'Supports that are welded must be welded to the QA/QC specifications and the welding specification. Preheat is verified with temperature sticks or pyrometers. After welding, post-weld work such as stress relieving and controlled cooling is performed where required. You check the completed work, generate field drawings, document the weld mapping and identify the components according to the drawings. The final installation is inspected visually, by torque checks and by NDE where required, and the QA/QC documentation is completed.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Follow the drawing for orientation, location and type of every support.',
                                        'Check that the support fits the insulated pipe and the expected movement.',
                                        'Check welds visually and verify bolt torque.',
                                        'Record changes on the field drawings.',
                                        'Complete QA/QC documentation for the supports.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'When a question asks what to confirm before welding a support, think of the welding procedure, preheat requirement, and the support type and location shown on the drawing.' }
                            ]
                        },
                        {
                            id: 'ch07-s5',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Hangers carry weight, guides control direction and anchors stop movement.',
                                        'Protect pipe from wear with chafing shields, grommets and wear pads, and isolate dissimilar metals.',
                                        'Expansion = length × coefficient × temperature change; absorb it with loops, swing joints or expansion joints.',
                                        'Do not modify or remove anchors and guides without approval.',
                                        'Verify, inspect and document supports like any other fabricated component.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 8 — MEASURING, LAYOUT AND OFFSETS (B-6 COMMON SKILLS)
                // ============================================================
                {
                    id: 'ch-08',
                    number: 8,
                    title: 'Measuring, Layout and Offset Calculations',
                    subtitle: 'Field measurements, fitting allowance, bend allowance and offsets for every piping material (B-6)',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch08-s1',
                            title: 'The Common Layout and Installation Sequence',
                            content: [
                                { type: 'text', text: 'Task B-6 is the largest task in MWA B at 43%. It covers copper, plastic, carbon steel, stainless steel, fibreglass and specialty piping. The same sequence applies to every material, and the exam tests the sequence as well as the material details. You select and inspect the piping against the drawings and markings, prepare a material list from the packing list and drawings, take accurate field measurements, measure, calculate, mark and lay out, cut and prepare, join, install, support, document, test and complete the records.' },
                                {
                                    type: 'table',
                                    headers: ['Step', 'Key point', 'Common error'],
                                    rows: [
                                        ['1. Select and inspect', 'Check markings, material, grade or type and size against the drawings', 'Installing the wrong material or schedule because the markings were not checked'],
                                        ['2. Material list', 'Build it from the packing list and the drawings', 'Relying on memory and missing fittings'],
                                        ['3. Field measurements', 'Confirm the drawings by measuring in the field', 'Cutting to drawing dimensions that differ from the site'],
                                        ['4. Layout and cut', 'Measure, calculate, mark; cut and ream or prepare the ends', 'Not allowing for fitting take-out'],
                                        ['5. Join', 'Use the joining method that suits the material and system', 'Poor preparation and leaks'],
                                        ['6. Install and support', 'Install components and accessories to drawings and QA/QC specifications', 'Missing supports or expansion provision'],
                                        ['7. Document', 'Field bracket and support drawings, joint map, itemized list', 'Records that do not match what was built'],
                                        ['8. Test and close out', 'Hydrostatic, pneumatic, vacuum or in-service tests; complete documentation', 'Testing before inspection or without venting air']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Questions about layout usually test sequence: inspect, list, measure in the field, lay out, cut, join, support, test, document. If an option jumps straight to cutting without confirming measurements, it is probably wrong.' }
                            ]
                        },
                        {
                            id: 'ch08-s2',
                            title: 'Dimensions, Fitting Allowance and Bend Allowance',
                            content: [
                                { type: 'text', text: 'Pipe is measured centre to centre (centreline) on drawings, but you cut it to a length that allows for the fittings at each end. The knowledge items list dimension, length, wall thickness or schedule, diameter, fitting allowance, offset calculations and bend allowance.' },
                                { type: 'keyTerm', term: 'Fitting allowance (take-out)', definition: 'The distance from the centre of a fitting to the point where the pipe enters it. It is subtracted from the centre-to-centre measurement to find the cut length of the pipe.' },
                                { type: 'keyTerm', term: 'Bend allowance', definition: 'The length of pipe or tube used in a bend. It is the length along the centreline of the arc that forms the bend.' },
                                { type: 'text', text: 'Cut length = centre-to-centre dimension − fitting allowance at each end (plus thread or socket engagement where the joint requires it). Take-out values come from the fitting tables, and they differ by fitting type, size and rating.' },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example: two 90° elbows are 1 500 mm centre to centre. Each elbow has a take-out of 150 mm. Cut length = 1 500 − 150 − 150 = 1 200 mm.' },
                                { type: 'text', text: 'Bend allowance = π × bend radius × bend angle ÷ 180. For a 90° bend with a centreline radius of 150 mm and π ≈ 3.14: allowance = 3.14 × 150 × 90 ÷ 180 = 235.5 mm. The developed (total) length of a piece with straight sections and bends is the straight lengths plus the bend allowances.' },
                                { type: 'callout', style: 'exam-tip', text: 'Another example: tube with two straight sections of 400 mm and 600 mm and one 90° bend with a 100 mm radius. Bend allowance = 3.14 × 100 × 90 ÷ 180 = 157 mm. Total developed length = 400 + 600 + 157 = 1 157 mm.' }
                            ]
                        },
                        {
                            id: 'ch08-s3',
                            title: 'Offsets and Travel',
                            content: [
                                { type: 'text', text: 'An offset moves a pipe sideways using two fittings that change direction by the same angle. You calculate the length of the diagonal section (the travel) from the distance the pipe must be offset (the set). The Red Seal exam provides the constant for 45° elbows: travel = set × 1.414. For other angles, travel = set ÷ sin of the angle.' },
                                {
                                    type: 'table',
                                    headers: ['Fitting angle', 'Travel (multiply the set by)', 'Run (multiply the set by)'],
                                    rows: [
                                        ['22.5°', '2.613', '2.414'],
                                        ['30°', '2.000', '1.732'],
                                        ['45°', '1.414', '1.000'],
                                        ['60°', '1.155', '0.577'],
                                        ['90°', 'Not an offset; a right-angle turn', 'Not applicable']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example: a line must be offset 300 mm using two 45° elbows. Travel (centre to centre) = 300 × 1.414 = 424.2 mm. The run along the line is also 300 mm, because the sides of a 45° triangle are equal. Cut length = 424.2 − the two fitting allowances.' },
                                { type: 'text', text: 'A rolling offset is set in two directions at once, for example up and across. First find the true set from the two measurements, using the right triangle rule: true set = square root of (horizontal set squared + vertical set squared). Then multiply the true set by the travel constant for the fitting angle. Example: offsets of 300 mm sideways and 400 mm up give a true set of 500 mm. With 45° fittings, travel = 500 × 1.414 = 707 mm.' },
                                { type: 'callout', style: 'warning', text: 'Check that the line is isolated, drained and de-energized before cutting into an existing line to install an offset. Always follow lock-out/tag-out and confirm zero energy.' }
                            ]
                        },
                        {
                            id: 'ch08-s4',
                            title: 'Material Selection, Markings and Identification',
                            content: [
                                { type: 'text', text: 'Every piece of piping must be inspected against the drawing and its visible markings before it is cut. Copper tube must show incised ASTM markings. Carbon steel pipe is checked for material, grade and schedule. Stainless pipe is checked as 304 or 316. Plastic piping is checked against its markings and the drawing. Identification systems and ordering criteria are part of the knowledge outcomes for each piping material.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Read the print line on pipe: size, schedule or type, material specification and heat number.',
                                        'Check that fittings, flanges, gaskets and bolting match the pipe specification and pressure class.',
                                        'Verify stainless and alloy materials with PMI where specified.',
                                        'Keep alloys apart and labelled to prevent cross-contamination.',
                                        'Do not use unmarked or unidentified piping.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'If markings are missing, the answer is never to guess. Quarantine the piece, check the documentation, and use it only if it can be positively identified and approved.' }
                            ]
                        },
                        {
                            id: 'ch08-s5',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Follow the same sequence for every material: inspect, list, measure, lay out, cut, join, install, support, document and test.',
                                        'Cut length = centre to centre − fitting allowances.',
                                        'Bend allowance = 3.14 × radius × angle ÷ 180.',
                                        'Travel for a 45° offset = set × 1.414; use the true set for a rolling offset.',
                                        'Never install piping with missing or unclear markings.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 9 — COPPER AND PLASTIC PIPING (B-6.01, B-6.02)
                // ============================================================
                {
                    id: 'ch-09',
                    number: 9,
                    title: 'Copper and Plastic Piping',
                    subtitle: 'Laying out and installing copper tube and plastic piping systems (B-6.01, B-6.02)',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch09-s1',
                            title: 'Copper Tube Types and Fittings',
                            content: [
                                { type: 'text', text: 'Copper tube is used for potable water, heating, refrigerant and medical gas piping. The range of variables names the tube types: Types G, M, L, K, DWV and ACR tubing. Types K, L and M are water tube that differ in wall thickness. Drain, waste and vent (DWV) tube is used for drainage, and air-conditioning and refrigeration (ACR) tube is cleaned and capped for refrigerant systems.' },
                                {
                                    type: 'table',
                                    headers: ['Copper type', 'Wall thickness', 'Typical use'],
                                    rows: [
                                        ['K', 'Thickest of the water tube types', 'Underground and heavy-duty service'],
                                        ['L', 'Medium', 'General water supply and heating'],
                                        ['M', 'Thinnest of the water tube types', 'Low-pressure heating and general water where permitted'],
                                        ['DWV', 'Thin wall', 'Drain, waste and vent systems'],
                                        ['ACR', 'Cleaned and capped for refrigerant use', 'Air-conditioning and refrigeration'],
                                        ['G', 'Fuel gas tube as listed in the standard', 'Fuel gas systems']
                                    ]
                                },
                                { type: 'text', text: 'Fittings are elbows, tees, crosses, couplings, flared fittings and compression fittings. Accessories include bolts, studs, gaskets, brackets, supports, hangers, spring cans, guides and anchors. Components include valves, controls, instruments, traps and strainers. Copper tube must be selected against the drawings and must show the visible ASTM incised markings.' },
                                { type: 'callout', style: 'exam-tip', text: 'Remember the wall thickness order for water tube: K is thicker than L, and L is thicker than M. Higher pressure or buried service calls for the thicker types.' }
                            ]
                        },
                        {
                            id: 'ch09-s2',
                            title: 'Cutting, Bending and Joining Copper',
                            content: [
                                { type: 'text', text: 'You cut copper with a tube cutter, hacksaw or power cutter, then ream the inside to remove the burr. You bend copper with hand or hydraulic benders, and you anneal (heat and cool) hard copper where needed so that it is pliable and does not kink. Preparation for joining includes reaming, sanding and cleaning. Joints are brazed, soldered, flared, grooved, made with extruded tees or made with compression fittings.' },
                                {
                                    type: 'table',
                                    headers: ['Step in soldering or brazing a joint', 'Why it matters'],
                                    rows: [
                                        ['Cut square and ream', 'Gives full contact and removes burrs that restrict flow'],
                                        ['Clean the tube end and fitting socket with sand cloth or a brush', 'Oxides and oil stop the filler from wetting the surface'],
                                        ['Apply flux', 'Prevents oxidation during heating and helps the filler flow'],
                                        ['Assemble and support the joint', 'Keeps the parts aligned while they heat and cool'],
                                        ['Heat the fitting, not the filler', 'Capillary action draws the filler into the joint when the fitting is at temperature'],
                                        ['Feed filler at the joint, then let it cool without disturbing it', 'A disturbed joint can leak'],
                                        ['Clean off excess flux', 'Flux residue can corrode the tube']
                                    ]
                                },
                                { type: 'text', text: 'Brazing filler melts at a higher temperature than soft solder and gives a stronger joint. For brazing, purge the inside of the tube with inert gas so that scale does not form. Refrigerant and medical gas systems must be brazed under a continuous purge, and the tube is kept clean and capped until it is installed.' },
                                { type: 'callout', style: 'warning', text: 'Soldering and brazing are hot work. Keep flammable materials away, shield nearby surfaces, use a fire watch where required, and keep an extinguisher at hand. Never heat a pipe that still contains water or pressure: trapped steam can cause an explosion.' },
                                { type: 'callout', style: 'exam-tip', text: 'A leaking soldered joint usually means that the tube was not clean, not fluxed correctly, not heated evenly, or had water in it. The usual repair is to drain, disassemble, clean and remake the joint, not to add more solder on top.' }
                            ]
                        },
                        {
                            id: 'ch09-s3',
                            title: 'Installing Copper Systems',
                            content: [
                                { type: 'text', text: 'Install tube, expansion joints, swing joints and expansion loops according to the drawings and QA/QC specifications. Copper expands more than steel per degree of temperature change, so hot water lines need loops or offsets and supports that allow movement. Install accessories, make field bracket and support drawings, map the joints, itemize the tube, fittings and components, and torque flanged joints to the specified values.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Use isolation barriers between copper and steel supports to avoid galvanic corrosion.',
                                        'Provide for expansion with loops, swing joints or expansion joints.',
                                        'Keep tube clean and capped until installation, especially for ACR tube.',
                                        'Test the system by hydrostatic, pneumatic, vacuum or in-service methods, and complete the documentation.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Copper and steel in contact in the presence of water can corrode the steel. The correct fix is to separate them with an isolation barrier, a dielectric fitting or a suitable support.' }
                            ]
                        },
                        {
                            id: 'ch09-s4',
                            title: 'Plastic Piping Materials',
                            content: [
                                { type: 'text', text: 'Plastic piping resists corrosion, is light and is easy to install, but it has temperature, pressure and chemical limits. The materials named in the standard are ABS, PVC, PP, PE, PEX, plastic tubing, HDPE, LDPE and CPVC.' },
                                {
                                    type: 'table',
                                    headers: ['Material', 'Common use', 'Joining method'],
                                    rows: [
                                        ['ABS', 'Drain, waste and vent', 'Solvent cement'],
                                        ['PVC', 'Cold water, drainage, chemical lines', 'Solvent cement, threaded'],
                                        ['CPVC', 'Hot and cold water, higher temperature service', 'Solvent cement, threaded'],
                                        ['PP (polypropylene)', 'Chemical and laboratory drainage', 'Fusion'],
                                        ['PE / HDPE / LDPE', 'Water mains, gas distribution, industrial lines', 'Butt fusion, electrofusion, compression'],
                                        ['PEX (cross-linked polyethylene)', 'Hot and cold water, hydronic heating', 'Compression, crimp and expansion fittings']
                                    ]
                                },
                                { type: 'text', text: 'Tools include tube cutters, fusion machines, scrapers, facers, reamers, hacksaws, power cutters, heated bending tools, crimpers and expansion tools. Preparation includes sanding, priming, bevelling and chemical cleaning. Joining methods are compression fittings, solvent cementing, threading and fusion.' },
                                { type: 'callout', style: 'warning', text: 'Do not use PVC or other rigid plastic piping for compressed air or compressed gas. It can shatter into sharp fragments if it fails. Use only piping that is rated and approved for the service.' }
                            ]
                        },
                        {
                            id: 'ch09-s5',
                            title: 'Joining and Installing Plastic Piping',
                            content: [
                                { type: 'text', text: 'Solvent cementing dissolves the surface of the pipe and fitting so that they fuse together as the solvent evaporates. Follow the manufacturer steps and use the primer and cement that are suitable for the plastic. Fusion joins pipe by heating the ends and pressing them together.' },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Key steps', 'Common problem'],
                                    rows: [
                                        ['Solvent cement (PVC, CPVC, ABS)', 'Cut square, deburr, dry fit, clean, prime where required, apply cement, insert with a quarter turn, hold, and allow to cure before testing', 'Leaks from skipped cleaning, too little cement or testing before the joint has cured'],
                                        ['Butt fusion (PE, HDPE, PP)', 'Clamp, face the ends, heat to the specified temperature, join under pressure, hold while it cools', 'Misaligned ends or incorrect heat time give weak joints'],
                                        ['Threaded', 'Use thread sealant suitable for plastic, do not overtighten', 'Cracked fittings from overtightening or from the wrong sealant'],
                                        ['Compression and crimp (PEX)', 'Cut square, use the correct fitting and tool, check the connection', 'Leaks from incorrect tool or poorly seated tube']
                                    ]
                                },
                                { type: 'text', text: 'Plastic piping expands and contracts much more than metal and sags if it is not supported often enough, so allow for movement with offsets, loops and expansion joints, and follow the manufacturer support spacing. Install piping, expansion joints, swing joints, expansion loops and components according to drawings and QA/QC specifications. Torque flanged joints, map joints, produce field bracket and support drawings and test the system.' },
                                { type: 'callout', style: 'exam-tip', text: 'Never test solvent-cemented joints before the cure time has passed, and use hydrostatic testing for plastic piping where required, because stored energy in a pneumatic test can cause plastic to fail violently.' }
                            ]
                        },
                        {
                            id: 'ch09-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Copper types K, L and M differ in wall thickness; ACR tube is cleaned and capped.',
                                        'Ream, clean, flux, heat the fitting, feed the filler and clean the joint.',
                                        'Purge copper tube when brazing, especially refrigerant and medical gas systems.',
                                        'Allow for expansion in copper and especially in plastic piping.',
                                        'Know the plastic materials and their joining methods: solvent cement, fusion, threading and compression.',
                                        'Never use PVC for compressed air or gas.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 10 — CARBON STEEL, STAINLESS, FIBREGLASS AND SPECIALTY PIPING
                // ============================================================
                {
                    id: 'ch-10',
                    number: 10,
                    title: 'Carbon Steel, Stainless Steel, Fibreglass and Specialty Piping',
                    subtitle: 'Laying out and installing steel, stainless, fibreglass and specialty piping systems (B-6.03 to B-6.06)',
                    isFree: false,
                    estimatedMinutes: 65,

                    sections: [
                        {
                            id: 'ch10-s1',
                            title: 'Carbon Steel Piping',
                            content: [
                                { type: 'text', text: 'Carbon steel is the workhorse material for steam, condensate, heating and process piping. The standard lists pipe types as standard carbon steel, low temperature, electric resistance welded (ERW), seamless and submerged arc-welded (SAW). You select and inspect the pipe against the drawings and the visible markings for material, grade and schedule.' },
                                {
                                    type: 'table',
                                    headers: ['Pipe type', 'How it is made', 'Notes'],
                                    rows: [
                                        ['Seamless', 'Pierced and drawn without a weld seam', 'Preferred for higher pressure and temperature service'],
                                        ['ERW', 'Formed from plate or strip and welded along the seam by electric resistance', 'Common for general service'],
                                        ['SAW', 'Seam welded using submerged arc welding', 'Common for large diameters'],
                                        ['Low temperature', 'Carbon steel that keeps toughness in cold service', 'Used for cold services; confirm the grade on the markings']
                                    ]
                                },
                                { type: 'text', text: 'Schedule describes wall thickness. For the same nominal size, a higher schedule number has a thicker wall and a smaller inside diameter. End preparation includes grinding, reaming, cutting, bevelling and threading. A butt weld bevel is typically about 37.5° with a small root face, but follow the welding procedure and drawing for the exact preparation.' },
                                {
                                    type: 'table',
                                    headers: ['Joining method', 'Used for', 'Notes'],
                                    rows: [
                                        ['Threaded', 'Small-bore, lower-pressure lines', 'Use pipe dope, thread sealant tape or anti-seize as specified; do not overtighten'],
                                        ['Welded', 'Most steam, process and high-pressure lines', 'Tack and weld to the welding procedure with correct fit-up'],
                                        ['Flanged', 'Connections to equipment and valves, lines that must be taken apart', 'Match flange class, face and gasket; tighten bolts in a star pattern and record torque'],
                                        ['Grooved', 'Quick assembly, mechanical joint', 'Groove to the manufacturer dimensions and use the correct coupling and gasket'],
                                        ['Compression and flared', 'Small tubing', 'Follow manufacturer assembly steps']
                                    ]
                                },
                                { type: 'text', text: 'Pre- and post-weld activities include stress relieving, cleaning, controlled cooling, preheating or purging, chemical treating and protective coatings. After installation, the system is tested by hydrostatic, pneumatic, vacuum or in-service methods, with non-destructive examination (NDE) where specified. Regulations include by-laws, standards, codes, ASME B31, CSA, NFPA and UL.' },
                                { type: 'callout', style: 'exam-tip', text: 'A higher schedule means a thicker wall for the same nominal pipe size. Schedule 80 is heavier and has a smaller inside diameter than Schedule 40 of the same size.' },
                                { type: 'callout', style: 'warning', text: 'When bolting flanges, tighten the bolts in stages and in a star (criss-cross) pattern so that the gasket seats evenly. Never reuse a gasket on a critical joint unless the specification allows it, and never exceed the specified torque.' }
                            ]
                        },
                        {
                            id: 'ch10-s2',
                            title: 'Stainless Steel Piping and Cross-Contamination Control',
                            content: [
                                { type: 'text', text: 'Stainless steel piping resists corrosion and is used for clean, food, pharmaceutical, chemical and high-temperature systems. The standard limits the range to 304 and 316 stainless steel. Type 316 contains molybdenum and resists chlorides and many chemicals better than 304.' },
                                { type: 'text', text: 'The main risk in stainless installation is contamination. Iron particles from carbon steel tools, grinding dust, wire brushes or contact with carbon steel can embed in the surface and cause rust spots and corrosion. The standard requires you to isolate tools and equipment to prevent cross-contamination between stainless steel and other materials.' },
                                {
                                    type: 'table',
                                    headers: ['Control', 'How it is done'],
                                    rows: [
                                        ['Labelling', 'Mark stainless materials, tools and storage areas'],
                                        ['Physical separation', 'Store stainless apart from carbon steel and off the floor'],
                                        ['Barriers', 'Use barriers and covers on racks and work surfaces'],
                                        ['Tool selection', 'Use dedicated stainless tools, discs and brushes that have never touched carbon steel'],
                                        ['Cleaning and passivation', 'Clean welds and treat the surface as the specification requires']
                                    ]
                                },
                                { type: 'text', text: 'Stainless steel is welded with attention to heat input and shielding. Purging the inside of the pipe with inert gas, often using purge dams, prevents oxidation of the root side of the weld. Fit-up tolerances include gap, high-low, alignment and welding process pull. Positive material identification (PMI) checks that the alloy is what the documents say. Other accessories include isolation kits, bolts, studs, gaskets, supports, hangers, guides and anchors.' },
                                { type: 'callout', style: 'warning', text: 'Do not use a grinder disc or wire brush on stainless steel if it has been used on carbon steel. Use only dedicated, stainless-rated tools and abrasives. Contamination may not show until rust appears later in service.' },
                                { type: 'callout', style: 'exam-tip', text: 'If a question describes rust spots on a new stainless line, the likely cause is carbon steel contamination from tools or storage. Prevention is separation, labelling and dedicated tools.' }
                            ]
                        },
                        {
                            id: 'ch10-s3',
                            title: 'Fibreglass Piping',
                            content: [
                                { type: 'text', text: 'Fibreglass reinforced plastic piping is corrosion resistant and is used for chemical, waste water and other aggressive services. The standard lists FRP, GFRP and GRE piping types. The resin gives the chemical resistance, and the standard names vinyl ester, polyester, halogenated resins and epoxies.' },
                                {
                                    type: 'table',
                                    headers: ['Joining method', 'How it works'],
                                    rows: [
                                        ['Butt and wrap', 'Pipe ends are butted together and wrapped with layers of resin-saturated fibreglass to form the joint'],
                                        ['Bell and spigot', 'The spigot end fits into the bell end and is bonded with adhesive'],
                                        ['Flanged', 'Fibreglass flanges are bolted, with gaskets and washers to spread load']
                                    ]
                                },
                                { type: 'text', text: 'Cutting and shaping tools include heat belts, air saws, jig saws, grinders, hacksaws, power cutting tools and sanders. The pipe ends are tapered and sanded according to the pipe type before bonding. Accessories include washers, bolts, studs, gaskets, brackets, supports, hangers, guides, anchors and rubber saddles. Rubber saddles protect the pipe surface from the support. After installation, the system is tested by hydrostatic, pneumatic, vacuum or in-service methods.' },
                                { type: 'callout', style: 'warning', text: 'Cutting and sanding fibreglass produces fine glass dust that irritates the skin, eyes and lungs. Wear a respirator, eye protection, gloves and long sleeves, and use dust collection where possible. Resins and solvents also need ventilation and gloves.' },
                                { type: 'callout', style: 'exam-tip', text: 'Fibreglass joints rely on correct surface preparation and resin curing. Do not over-tighten fibreglass flanges, which crack easily. Use full-face gaskets and washers as specified, and follow the torque values.' }
                            ]
                        },
                        {
                            id: 'ch10-s4',
                            title: 'Specialty Piping',
                            content: [
                                { type: 'text', text: 'Specialty piping covers materials used for high temperature, corrosive or special-purpose service. The standard lists chrome-moly (chrome and molybdenum), titanium, duplex, lined pipe, copper, copper-nickel, synthetic-metallic, Hastelloy and aluminum. Each needs specific procedures and care.' },
                                {
                                    type: 'table',
                                    headers: ['Material', 'Typical use', 'Special care'],
                                    rows: [
                                        ['Chrome-moly', 'High-temperature, high-pressure steam and refinery service', 'Preheat and post-weld heat treatment as the procedure requires'],
                                        ['Titanium', 'Corrosive and marine service', 'Very clean joints and shielding gas protection on both sides'],
                                        ['Duplex stainless', 'Strong, corrosion-resistant lines', 'Controlled heat input and procedure'],
                                        ['Copper-nickel', 'Seawater and marine systems', 'Use compatible fillers and keep clean'],
                                        ['Hastelloy', 'Severe chemical service', 'Dedicated tools; strict contamination control'],
                                        ['Aluminum', 'Light-weight and cryogenic or specific process lines', 'Clean oxide before welding; separate tools'],
                                        ['Lined pipe', 'Corrosive fluids', 'Do not damage the lining; follow manufacturer assembly rules']
                                    ]
                                },
                                { type: 'text', text: 'As with stainless steel, the standard requires you to isolate tools and equipment to prevent cross-contamination between alloys and other materials, using labelling, physical separation, barriers and tool selection. Fit-up tolerances are gap, high-low and alignment. Joining methods include threaded fittings, tacking or welding, flanging, grooving, compression fittings, brazing and soldering. PMI and visual inspection verify the material.' },
                                { type: 'callout', style: 'exam-tip', text: 'For any special alloy, the safest exam answer is to follow the specified welding procedure and QA/QC documents exactly, prevent cross-contamination and verify the material with PMI.' }
                            ]
                        },
                        {
                            id: 'ch10-s5',
                            title: 'Comparing Piping Materials',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Material', 'Main joining methods', 'Main installation concern'],
                                    rows: [
                                        ['Copper', 'Soldering, brazing, flaring, compression, grooving', 'Cleanliness, flux, purge, galvanic corrosion, expansion'],
                                        ['Plastic', 'Solvent cement, fusion, threaded, compression', 'Cure time, support spacing, expansion, not for compressed air'],
                                        ['Carbon steel', 'Welding, threading, flanging, grooving', 'Fit-up, weld procedure, flange bolting'],
                                        ['Stainless steel', 'Welding, threading, flanging, grooving, compression', 'Cross-contamination, purging, PMI'],
                                        ['Fibreglass', 'Butt and wrap, bell and spigot, flanged', 'Dust hazard, resin cure, brittle flanges'],
                                        ['Specialty alloys', 'Welding, brazing, flanging, threaded', 'Procedure, preheat, contamination control']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Match the concern to the material: purge for copper brazing and stainless welding, cure time for solvent cement and fibreglass resin, separation for stainless and alloys, expansion for plastic and copper.' }
                            ]
                        },
                        {
                            id: 'ch10-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Carbon steel pipe is seamless, ERW or SAW; higher schedule means thicker wall.',
                                        'Flanges are bolted in a star pattern, with the correct gasket and torque.',
                                        'Stainless piping is 304 or 316; prevent contamination with labelling, separation and dedicated tools.',
                                        'Fibreglass joints are butt-and-wrap, bell-and-spigot or flanged; protect against dust.',
                                        'Specialty alloys need exact procedures, preheat where required, PMI and contamination control.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 11 — VALVES (B-7)
                // ============================================================
                {
                    id: 'ch-11',
                    number: 11,
                    title: 'Valves: Installation, Maintenance and Repair',
                    subtitle: 'Valve types, installation variables, troubleshooting, repair and testing (B-7)',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch11-s1',
                            title: 'Valve Types and Components',
                            content: [
                                { type: 'text', text: 'Valves start, stop, direct, regulate and protect flow. The standard lists these valve types: gate, globe, ball, plug, butterfly, needle, relief, pop safety, toggle, check, pressure reducing, shutter and diaphragm. You must be able to identify each type, its components and accessories, and its use and operation.' },
                                {
                                    type: 'table',
                                    headers: ['Valve type', 'Main use', 'Key feature'],
                                    rows: [
                                        ['Gate', 'On/off isolation', 'Full flow when open; not for throttling'],
                                        ['Globe', 'Throttling and flow control', 'Higher pressure drop; flow direction marked on body'],
                                        ['Ball', 'Quick on/off', 'Quarter turn; tight shut-off'],
                                        ['Plug', 'On/off and diverting', 'Quarter turn; tapered plug in the body'],
                                        ['Butterfly', 'On/off and throttling for larger lines', 'Compact; disc stays in the flow path'],
                                        ['Needle', 'Fine flow control', 'Small orifice and fine stem thread'],
                                        ['Check', 'Prevents backflow', 'Opens with forward flow; flow direction matters'],
                                        ['Relief / pop safety', 'Protects against overpressure', 'Opens automatically at set pressure'],
                                        ['Pressure reducing', 'Reduces and holds downstream pressure', 'Spring and diaphragm or pilot control'],
                                        ['Diaphragm', 'On/off and throttling for corrosive or clean service', 'Diaphragm isolates the stem from the fluid'],
                                        ['Toggle / shutter', 'Specific mechanical applications', 'Follow the manufacturer instructions']
                                    ]
                                },
                                { type: 'text', text: 'Valve components are the seat, stem, disc, packing, diaphragms, bonnet, handles and springs. Accessories include bolts, studs, gaskets, brackets, chain wheels, actuators, anti-seize, lubricants and sealing compounds. Actuators may be electric, pneumatic, manual or hydraulic.' },
                                { type: 'callout', style: 'exam-tip', text: 'Gate and ball valves are for on/off service. Globe and needle valves are for throttling. A check valve prevents reverse flow. Relief and pop safety valves protect against overpressure. Matching the valve type to the job is a common exam question.' }
                            ]
                        },
                        {
                            id: 'ch11-s2',
                            title: 'Installing Valves (B-7.01)',
                            content: [
                                { type: 'text', text: 'Valve installation begins with selection and inspection against the installation variables, the drawings and the valve identification. The installation variables listed are temperature, medium, pressure, flow, functionality, system, design and orientation. You must understand valve rating systems, which are based on pressure, temperature, seat composition and type of service.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Select and inspect the valve against the drawing, rating and markings.',
                                        'Itemize valve components and accessories and prepare a material list from the packing list and drawings.',
                                        'Take field measurements, and mark clearances, flange alignment and orientation.',
                                        'Prepare the valve using the manufacturer instructions: protect internal parts, remove shipping materials and keep removed parts traceable.',
                                        'Install the valve with the seat and handle in the required orientation, using a suitable joining method: threaded, welded, flanged, grooved or compression.',
                                        'Install or reinstall actuators and components per manufacturer instructions and drawings.',
                                        'Produce bracket and support drawings, map joints and torque flanged joints.',
                                        'Test the system, including the valves, by hydrostatic, pneumatic, vacuum, in-service, NDE or mechanical tests, and complete documentation.'
                                    ]
                                },
                                { type: 'text', text: 'Valves with a marked flow direction, such as globe valves and check valves, must be installed with the arrow pointing in the direction of flow. Valves must also be supported so the weight does not strain the piping, and must have enough clearance to operate and to be repaired. When welding a valve into a line, protect the seat and internal parts from heat and weld spatter, following the manufacturer instructions.' },
                                { type: 'callout', style: 'warning', text: 'Never weld a valve into a line with the disc closed and tight unless the manufacturer allows it. Heat can distort the seat. Follow the manufacturer instructions on whether the valve should be open or partly open during welding, and protect it from spatter.' },
                                { type: 'callout', style: 'exam-tip', text: 'Installing a check or globe valve backward is a classic mistake. Always match the arrow on the body to the direction of flow.' }
                            ]
                        },
                        {
                            id: 'ch11-s3',
                            title: 'Maintaining and Troubleshooting Valves (B-7.02)',
                            content: [
                                { type: 'text', text: 'Valve maintenance is scheduled work: lubricating, cleaning, inspecting for wear and replacing worn parts, with records updated. When a problem occurs, you troubleshoot using functional checks, visual inspection, temperature sensing and a stethoscope to find the valve or component that needs repair or replacement.' },
                                {
                                    type: 'table',
                                    headers: ['Symptom', 'Likely cause', 'Typical repair'],
                                    rows: [
                                        ['Leak around the stem', 'Worn or loose packing', 'Adjust the packing gland, or repack'],
                                        ['Leak at the bonnet', 'Failed bonnet gasket or loose bolts', 'Replace the gasket and torque the bolts'],
                                        ['Leak at the flange', 'Damaged gasket, uneven bolting', 'Replace the gasket and tighten in a star pattern'],
                                        ['Valve passes when closed (passing seal)', 'Worn or damaged seat or disc, debris', 'Refurbish or lap the disc and seat, or replace parts'],
                                        ['Hard to turn or seized', 'Corrosion, dry stem, overtightened packing, damaged stem', 'Lubricate, free up, replace stem or packing'],
                                        ['Stem moves but flow does not change', 'Stem disconnected from disc', 'Open the valve and repair or replace stem or disc'],
                                        ['Actuator does not move the valve', 'Control or power problem, or mechanical failure', 'Check supply and controls; repair or replace the actuator'],
                                        ['Check valve chatters or does not seal', 'Worn parts, debris, incorrect size', 'Clean, repair or replace the check valve']
                                    ]
                                },
                                { type: 'text', text: 'Tools include valve repair hooks, micrometers, lapping plates, grease guns, stethoscopes, temperature guns, assorted wrenches, valve repair kits and snap ring pliers. Defects the standard names are a passing seal, leaking packing, leaking flanges, leaking bonnet, compromised integrity and seized or damaged parts.' },
                                { type: 'callout', style: 'exam-tip', text: 'A temperature gun or stethoscope on the downstream side of a closed valve can show whether it is passing: hot or noisy flow downstream of a valve that should be closed points to a leaking seat.' }
                            ]
                        },
                        {
                            id: 'ch11-s4',
                            title: 'Repairing and Testing Valves',
                            content: [
                                { type: 'text', text: 'Before any repair, lock out and tag out the system to control stored, static and residual energy. Mechanical, electrical, hydraulic and pneumatic energy sources must all be isolated and verified. Repairs include disc and seat refurbishment, stem realignment, repacking, gasket changes, bolt replacement and actuator replacement. After the repair, retest to confirm that the body and seat seal and that relief functions work as specified, and complete the documentation.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Lock out and tag out, relieve pressure and verify zero energy.',
                                        'Drain and cool the valve, and wear the correct PPE for the fluid.',
                                        'Repair to a working condition using the manufacturer repair methods and parts.',
                                        'Retest the valve and the system: hydrostatic, pneumatic, vacuum, in-service or function test.',
                                        'Update the maintenance log, LOTO records and QA/QC reports.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Never tighten packing or remove a bonnet on a valve that is under pressure. Isolate, drain and relieve the pressure first. A bonnet or packing gland under pressure can release steam or hot fluid with great force. Set and test relief valves only as the procedure allows and never gag or plug them.' },
                                { type: 'callout', style: 'exam-tip', text: 'The order for repair is isolate (LOTO), relieve, repair, retest, document, and return to service. If the question mentions retest, it is asking whether the body and seat seal and the relief set pressure were verified.' }
                            ]
                        },
                        {
                            id: 'ch11-s5',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Gate and ball valves isolate; globe and needle valves throttle; check valves stop backflow; relief valves protect.',
                                        'Install by rating, orientation and flow direction; protect internal parts during welding.',
                                        'Diagnose leaks by location: stem, bonnet, flange or seat.',
                                        'LOTO, relieve and verify before repair; retest and document afterwards.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 12 — HEAT TRACING (B-8)
                // ============================================================
                {
                    id: 'ch-12',
                    number: 12,
                    title: 'Heat Tracing Systems',
                    subtitle: 'Installing, maintaining, troubleshooting and repairing steam and liquid-filled tracing (B-8)',
                    isFree: false,
                    estimatedMinutes: 45,

                    sections: [
                        {
                            id: 'ch12-s1',
                            title: 'Purpose and Types of Heat Tracing',
                            content: [
                                { type: 'text', text: 'Heat tracing keeps process piping, vessels and instruments from dropping below a minimum temperature. It prevents freezing, keeps viscous fluids pumpable and holds process temperatures. The Red Seal standard covers two types of tracing for steamfitters: steam tracing and liquid-filled tracing.' },
                                { type: 'keyTerm', term: 'Steam tracing', definition: 'A steam-filled pipe or tube run along or coiled around a pipe, vessel or pump to keep its contents from dropping below a minimum temperature.' },
                                {
                                    type: 'table',
                                    headers: ['Type', 'Heating medium', 'Notes'],
                                    rows: [
                                        ['Steam tracing', 'Steam from low to high pressure', 'Needs steam traps and condensate return; includes pre-insulated tubing bundles and jacketed pipe'],
                                        ['Liquid-filled tracing', 'Low or high temperature hot water, or glycol', 'Needs a pump, high point vents and a way to fill and drain the system']
                                    ]
                                },
                                { type: 'text', text: 'Tracing tubing is usually small in diameter and may be carbon steel, stainless steel or copper. It is held against the pipe with strapping, and the traced pipe and tracing are insulated together. Pre-insulated tubing bundles are installed as a single unit, and electrically traced pre-insulated bundles are among the materials listed for steam tracing.' }
                            ]
                        },
                        {
                            id: 'ch12-s2',
                            title: 'Installing Steam Tracing (B-8.01)',
                            content: [
                                { type: 'text', text: 'To install steam tracing, select tools for the system type and size, select and inspect materials against the drawings and the installation variables, itemize materials from the drawings and build the material list from the packing list. Take field measurements, then measure, calculate and mark tubing and piping while keeping clearances and flange and tubing alignment. Install the system with leak-free, functional joints that remain accessible for insulation, produce field bracket and support drawings, map the joints and test.' },
                                {
                                    type: 'table',
                                    headers: ['Item', 'Key point'],
                                    rows: [
                                        ['Components', 'Valves, breakouts, valve baskets and steam traps'],
                                        ['Materials', 'Carbon steel, stainless steel and copper tubing, strapping, fittings, standoffs and socking material'],
                                        ['Joining', 'Welding, mechanical joints, brazing and flaring; soldering and grooving also appear in the knowledge items'],
                                        ['Tools', 'Benders, flaring devices, strapping devices, cutters and reamers'],
                                        ['Tests', 'Hydrostatic and pneumatic'],
                                        ['Variables', 'Temperature, pressure, flow, functionality and system type']
                                    ]
                                },
                                { type: 'text', text: 'A steam tracer works by releasing heat as the steam condenses, so each tracing circuit needs a steam trap to remove condensate and air while holding back live steam. Tracers are installed so that condensate can drain by gravity to the trap, without low points that collect condensate. Joints are kept accessible for insulation so that the insulation can enclose the tracer and pipe together.' },
                                { type: 'callout', style: 'exam-tip', text: 'Steam tracing depends on steam traps. If a tracer is cold, think of a plugged or failed-closed trap, a blocked tracer or trapped condensate. If steam blows through, think of a trap that fails open and passes steam.' }
                            ]
                        },
                        {
                            id: 'ch12-s3',
                            title: 'Maintaining, Troubleshooting and Repairing Steam Tracing (B-8.02)',
                            content: [
                                { type: 'text', text: 'Maintenance includes checking steam traps, banding (strapping), cleaning, inspecting for correct operation and wear, and replacing worn parts. Troubleshooting uses functional checks, visual inspection, temperature sensing and stethoscopes. Repairs are trap, tubing and fitting replacement. Before repair, lock out and tag out potential mechanical and electrical energy sources according to site policy; after repair, remove the LOTO, reinstate and test the system, and update the documentation.' },
                                {
                                    type: 'table',
                                    headers: ['Defect', 'Likely cause', 'Repair'],
                                    rows: [
                                        ['Cold tracer / pipe below temperature', 'Failed or plugged trap, blocked or kinked tube, loose strapping', 'Test and replace the trap, clear or replace the tube, restrap'],
                                        ['Steam blowing through the trap', 'Passing trap', 'Replace the trap'],
                                        ['Kinked tubing', 'Poor bending or damage', 'Replace the damaged section with a proper fitting'],
                                        ['Broken straps', 'Corrosion or movement', 'Replace the strapping so that the tracer stays in contact with the pipe'],
                                        ['Leak at a fitting', 'Poor joint or vibration', 'Remake the joint and retest']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Steam tracing carries live steam and hot condensate. Isolate and relieve the circuit, allow it to cool, and wear protective clothing before opening any fitting. Hot tubing and fittings cause severe burns, and insulation can hide hot surfaces.' }
                            ]
                        },
                        {
                            id: 'ch12-s4',
                            title: 'Liquid-Filled Tracing (B-8.03 and B-8.04)',
                            content: [
                                { type: 'text', text: 'Liquid-filled tracing circulates low or high temperature hot water or glycol through tubing along the traced pipe. Glycol protects against freezing. Materials are carbon steel, stainless steel and copper tubing with strapping and fittings. Components are valves, breakouts, valve baskets, high point vents and pumps. Joints are welded, soldered, mechanical or brazed, and grooving is also listed in the knowledge items. Piping practices include keeping joints accessible for insulation and tie-in points, and installing high point vents and pumps where required.' },
                                {
                                    type: 'table',
                                    headers: ['Defect', 'Likely cause', 'Repair'],
                                    rows: [
                                        ['No heat along the circuit', 'Faulty pump, air lock, closed valve or plugged vent', 'Check the pump, vent air at the high point vents, and verify valve positions'],
                                        ['Kinked tubing', 'Installation damage', 'Replace the tubing section'],
                                        ['Broken straps', 'Corrosion or movement', 'Replace strapping'],
                                        ['Plugged vents', 'Debris or scale', 'Clean or replace the vent'],
                                        ['Leaking fitting', 'Poor joint', 'Remake the joint and retest']
                                    ]
                                },
                                { type: 'text', text: 'For maintenance and repair, clean the system; inspect tubing, fittings and components for correct operation and wear; and replace worn parts. Lock out and tag out, repair, remove LOTO, reinstate and test, energize the system to meet requirements such as preventing freezing, and update the documentation. Dispose of the heat transfer medium according to environmental regulations, including WHMIS and jurisdictional rules.' },
                                { type: 'callout', style: 'warning', text: 'Glycol and treated water must not be dumped to drains or the ground. Collect and dispose of them according to environmental regulations, and use the SDS for handling precautions.' },
                                { type: 'callout', style: 'exam-tip', text: 'Air in a liquid-filled tracing loop blocks circulation, so high point vents are used to bleed it out. A dead circuit with a running pump often means air or a closed valve.' }
                            ]
                        },
                        {
                            id: 'ch12-s5',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Steam tracing relies on steam traps; liquid-filled tracing relies on pumps and high point vents.',
                                        'Keep joints accessible for insulation and map and document them.',
                                        'Diagnose a cold circuit by checking traps, blockages, kinks, air and valve positions.',
                                        'Lock out and tag out before repair; test and document afterwards.',
                                        'Dispose of glycol and treated water according to environmental regulations.'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'part-3',
            number: 3,
            title: 'Rigging, Hoisting, Lifting and Positioning (MWA C)',
            description: 'Determining loads, planning and securing the lift area, selecting and inspecting rigging equipment, understanding sling angles and working load limits, and performing common as well as complex and critical lifts.',
            weight: '15 questions (11.5% of Total Exam)',

            chapters: [
                // ============================================================
                // CHAPTER 13 — LOAD DETERMINATION AND LIFT PLANNING (C-9.01, C-9.02, C-9.05)
                // ============================================================
                {
                    id: 'ch-13',
                    number: 13,
                    title: 'Determining the Load and Planning the Lift',
                    subtitle: 'Load weight, centre of gravity, lift plans, communication and securing the lift area (C-9.01, C-9.02, C-9.05)',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch13-s1',
                            title: 'Why Rigging Matters to a Pipefitter',
                            content: [
                                { type: 'text', text: 'Steamfitters and pipefitters move heavy items every day: pipe spools, valves, pumps, heat exchangers, boilers and vessels. Task C-9 covers common rigging, hoisting, lifting and positioning, and Task C-10 covers complex and critical lifts. You often work together with a crane operator, but the pipefitter is responsible for the rigging: working out the weight, planning the lift, choosing and inspecting the equipment, attaching it to the load, and landing the load safely. A lift is only as safe as its weakest piece of rigging and its poorest plan.' },
                                {
                                    type: 'table',
                                    headers: ['Lift stage', 'What you do', 'Task'],
                                    rows: [
                                        ['1. Determine the load', 'Weight, dimensions, centre of gravity, capacity of rigging and hoist', 'C-9.01'],
                                        ['2. Prepare the lift plan', 'Communication, hazards, weather, obstructions, job safety card', 'C-9.02'],
                                        ['3. Select equipment', 'Rated capacity, working load limit, sling angles', 'C-9.03'],
                                        ['4. Inspect equipment', 'Find faults, check tags, remove damaged items', 'C-9.04'],
                                        ['5. Secure the lift area', 'Barriers, signage, swing radius, traffic control', 'C-9.05'],
                                        ['6. Set up the lift', 'Attach rigging, tie knots, attach tag lines', 'C-9.06'],
                                        ['7. Perform the lift', 'Test lift, communicate, control, land and secure', 'C-9.07'],
                                        ['8. Maintain and store equipment', 'Clean, inspect, log and store rigging', 'C-9.08']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'The order of a lift is a common exam topic: determine the load, plan, select, inspect, secure the area, set up, perform the lift, then maintain and store. A choice that starts the lift before the load is known or the area is secured is wrong.' }
                            ]
                        },
                        {
                            id: 'ch13-s2',
                            title: 'Determining the Load (C-9.01)',
                            content: [
                                { type: 'text', text: 'You must know what the load weighs before you can choose rigging or a crane. You calculate the weight of the rigging and the material from the specifications, measure the height, length, width, area and volume, find the centre of gravity, and verify that the rigging and hoisting equipment can handle the load. Sources of weight and dimension information include name plates, handbooks, shop drawings, load rating charts, engineer drawings and specifications, bills of lading and blueprints.' },
                                { type: 'keyTerm', term: 'Centre of gravity', definition: 'The point at which the weight of a load is balanced in every direction. For a level lift, the hook must be directly above the centre of gravity.' },
                                { type: 'keyTerm', term: 'Working load limit (WLL)', definition: 'The maximum load that a piece of rigging or lifting equipment is rated to carry in normal service under the conditions stated on its rating tag or chart.' },
                                { type: 'text', text: 'Weight = volume × density. For a solid steel item, a common density value is about 7 850 kg/m³. Volume of a cylinder = π × radius² × length, with π ≈ 3.14. The weight of a piece of piping also includes its contents, insulation and attachments, and the rigging itself (slings, shackles, spreader bars) must be added to the load carried by the hook.' },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example 1: a steel plate is 2 m × 1 m × 0.025 m. Volume = 0.05 m³. Weight = 0.05 × 7 850 = 392.5 kg.' },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example 2: a 6 m length of pipe has an inside diameter of 200 mm (radius 0.1 m) and is full of water. Water volume = 3.14 × 0.1² × 6 = 0.1884 m³, which is about 188 kg of water (1 m³ of water is about 1 000 kg). Add this to the weight of the pipe itself. A pipe that is lifted full is far heavier than one lifted empty.' },
                                { type: 'text', text: 'To find the centre of gravity, estimate it from the shape and drawings, rig the load, and then perform a test lift. Lift the load a short distance off the ground, stop, and check that it hangs level and balanced and that the hook is plumb. If the load tilts, set it down and adjust the rigging points or sling lengths. A test lift confirms balance before the load is raised high.' },
                                { type: 'text', text: 'You also verify the clearances and the capacities: headroom, reach and the hoist weight capacity. Cranes have load charts that show the rated capacity at different boom lengths and working radii, and the capacity drops as the radius increases.' },
                                { type: 'callout', style: 'warning', text: 'Never guess the weight of a load. An underestimated weight can overload slings, shackles or a crane and cause the load to fall. If the weight is not known, find it from drawings, name plates or by weighing before you lift.' }
                            ]
                        },
                        {
                            id: 'ch13-s3',
                            title: 'Preparing the Lift Plan (C-9.02)',
                            content: [
                                { type: 'text', text: 'A lift plan sets out how the lift will be done safely. You establish a communication strategy with the rigging crew, secure the lift area and clear obstructions and people, identify hazards during toolbox talks and complete job safety cards, and assess the current weather and site conditions. If the situation changes, you revise the plan before continuing.' },
                                {
                                    type: 'table',
                                    headers: ['Plan element', 'What it includes', 'Examples'],
                                    rows: [
                                        ['Communication', 'Agreed way to give signals between the rigger, signaller and operator', 'Hand signals, radio, a designated signaller'],
                                        ['Obstructions', 'Anything in the lift path or landing area', 'Waterways, structures, rail lines, traffic'],
                                        ['Hazards', 'Things that can injure people or damage equipment', 'Blind spots, power lines, overhead piping, live equipment'],
                                        ['Job safety card', 'Written hazard and control review', 'Job safety analysis (JSA), field level risk assessment (FLRA), safety plan of action (SPA)'],
                                        ['Weather and site conditions', 'Conditions that can make the lift unsafe', 'Rain, high wind, snow, lightning, heat, cold, ice']
                                    ]
                                },
                                { type: 'text', text: 'Weather affects lifts directly: wind can swing a load and reduces crane capacity, ice makes rigging and footing slippery, and lightning is a reason to stop. Ground conditions matter too, because a crane or outriggers on soft or frozen ground can sink or tip.' },
                                { type: 'callout', style: 'warning', text: 'Treat every overhead power line as live. Keep the load, the boom and the crew the minimum distance that the regulations require for the line voltage, and use a spotter. Contact with an energized line can electrocute everyone touching the crane or the load.' },
                                { type: 'callout', style: 'exam-tip', text: 'Hazards named in the standard are blind spots, power lines, overhead piping and live equipment. If a plan reveals new hazards, the correct action is to stop, revise the plan, communicate the changes and then proceed.' }
                            ]
                        },
                        {
                            id: 'ch13-s4',
                            title: 'Communication and Hand Signals',
                            content: [
                                { type: 'text', text: 'During a lift, only one person gives signals to the operator, except that anyone can give a stop signal in an emergency. Signals must be clear and agreed before the lift starts. Communication may be by standard hand signals, radio or electronic devices, horns or flags. If voice or radio contact is lost, the lift stops.' },
                                {
                                    type: 'table',
                                    headers: ['Signal', 'Typical hand signal', 'Meaning'],
                                    rows: [
                                        ['Stop', 'Arm extended, palm down, moved side to side', 'Stop the movement'],
                                        ['Emergency stop', 'Both arms extended, palms down, moved side to side', 'Stop everything immediately'],
                                        ['Hoist', 'Forearm vertical, finger pointing up, moving in small circles', 'Raise the load'],
                                        ['Lower', 'Arm extended down, finger pointing down, moving in small circles', 'Lower the load'],
                                        ['Swing', 'Arm extended, finger pointing in the direction of travel', 'Swing the boom in that direction']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'The signaller must stay in clear view of the operator. If the signaller loses sight of the operator or the load, the lift stops until clear communication is restored.' }
                            ]
                        },
                        {
                            id: 'ch13-s5',
                            title: 'Securing the Lift Area (C-9.05)',
                            content: [
                                { type: 'text', text: 'Before the lift starts you advise personnel, clients and the authorities of the plan, identify the swing radius, obstructions and hazards, and position the equipment so that it clears them. You then erect barricades, signage and barrier tape to keep vehicles and pedestrians out of the lift area and the travel path of the load. The equipment named in the standard includes cranes, zoom booms, swing booms and tower cranes.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Mark the swing radius of the crane, including the counterweight, so that nobody can be struck or crushed.',
                                        'Keep all personnel who are not part of the lift outside the control zone.',
                                        'Never allow anyone to stand or walk under a suspended load.',
                                        'Assign a person to control vehicle and pedestrian traffic where the lift path crosses a roadway or walkway.',
                                        'Check ground conditions at the crane location and the landing area.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'No one is ever permitted under a suspended load. If the load fails, there is no time to move away. Plan the lift so that the load travels over unoccupied areas only.' }
                            ]
                        },
                        {
                            id: 'ch13-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Determine the weight and centre of gravity first, and add the weight of the rigging and any contents.',
                                        'Weight = volume × density; confirm balance with a test lift.',
                                        'Plan the lift: communication, obstructions, hazards, job safety card and weather.',
                                        'Treat all power lines as live and keep required clearances.',
                                        'Secure the area with barricades, signs and a control zone; never work under a suspended load.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 14 — RIGGING EQUIPMENT, SLING ANGLES AND INSPECTION
                // ============================================================
                {
                    id: 'ch-14',
                    number: 14,
                    title: 'Rigging Equipment, Sling Angles and Inspection',
                    subtitle: 'Selecting equipment, working load limits, sling angle effects, knots and hitches, inspection and storage (C-9.03, C-9.04, C-9.08)',
                    isFree: false,
                    estimatedMinutes: 60,

                    sections: [
                        {
                            id: 'ch14-s1',
                            title: 'Rigging and Hoisting Equipment',
                            content: [
                                { type: 'text', text: 'You select equipment by checking that its rated capacity meets or exceeds the load, determining the working load limit (WLL) and comparing it to the rigging tables and load charts, and confirming that the equipment can place the load at its final elevation and reach. The standard lists the following equipment.' },
                                {
                                    type: 'table',
                                    headers: ['Group', 'Equipment', 'Typical use'],
                                    rows: [
                                        ['Rigging', 'Slings (wire rope, chain, synthetic), shackles, lugs, spreader bars, equalizing beams', 'Connect the load to the hook and distribute the load'],
                                        ['Hand-operated hoisting', 'Chain falls, come-alongs, jacks, rollers', 'Lift, pull and position loads manually'],
                                        ['Powered hoisting', 'Cranes, forklifts, tuggers, cable grip hoists', 'Lift and move heavy loads'],
                                        ['Control', 'Tag lines', 'Orient and steady a load while it is suspended']
                                    ]
                                },
                                { type: 'text', text: 'Selection factors are load characteristics, the results of rigging inspection, fatigue, the environment and the safety factor. Rope types include wire rope, natural fibre and synthetic rope, and each has different strengths, limits and ways it can be damaged.' },
                                {
                                    type: 'table',
                                    headers: ['Sling type', 'Strengths', 'Limits'],
                                    rows: [
                                        ['Wire rope', 'Strong and abrasion resistant; good for rough loads', 'Can kink and birdcage; broken wires cut hands; must be kept from sharp edges'],
                                        ['Alloy chain', 'Very strong and durable; good at high temperatures and rough use', 'Heavy; can fail without warning if overloaded; must be inspected link by link'],
                                        ['Synthetic web and round slings', 'Light, flexible, do not scratch finished surfaces', 'Cut easily on sharp edges, damaged by heat and some chemicals; tag must be legible']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Safety factor', definition: 'The ratio of the minimum breaking strength of a piece of rigging to its working load limit. For example, a sling with a safety factor of 5 will not break until the load is at least five times its WLL.' },
                                { type: 'text', text: 'Typical design factors are about 5 to 1 for wire rope and synthetic slings and about 4 to 1 for alloy chain, but the rating tag and the manufacturer are the authority. Never exceed the WLL marked on the tag.' },
                                { type: 'callout', style: 'exam-tip', text: 'The WLL, not the breaking strength, is the number that you use to select rigging. The safety factor is a built-in margin, and it is not extra capacity that you can use.' }
                            ]
                        },
                        {
                            id: 'ch14-s2',
                            title: 'Sling Angles and Their Effect on Capacity',
                            content: [
                                { type: 'text', text: 'The angle of a sling affects the force in it. When two slings share a load, each carries half of the weight only if the slings are vertical. As the slings spread out and become flatter, the tension in each leg grows, even though the load has not changed. The standard names sling angles of 45° and 60°, and calculations of sling angles and their effect on capacity appear in every sub-task from C-9.02 onward.' },
                                { type: 'text', text: 'The angle is measured between the sling and the horizontal. The sling tension multiplier is 1 ÷ sin (angle). A flat sling angle makes the multiplier large. Tension in each leg = (load ÷ number of legs) × multiplier.' },
                                {
                                    type: 'table',
                                    headers: ['Angle of sling to the horizontal', 'Multiplier (1 ÷ sin of the angle)', 'Effect on capacity'],
                                    rows: [
                                        ['90° (vertical)', '1.000', 'Full rated capacity of each leg'],
                                        ['60°', '1.155', 'Each leg carries about 15% more than its share'],
                                        ['45°', '1.414', 'Each leg carries about 41% more than its share'],
                                        ['30°', '2.000', 'Each leg carries twice its share; avoid this angle']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example: a 2 000 kg load is lifted with a two-leg sling. At 60°, each leg carries (2 000 ÷ 2) × 1.155 = 1 155 kg. At 45°, each leg carries 1 000 × 1.414 = 1 414 kg. If the slings are rated 1 200 kg each, they are acceptable at 60° but overloaded at 45°.' },
                                { type: 'callout', style: 'warning', text: 'Do not use sling angles flatter than the manufacturer or the lift plan allows. The commonly accepted minimum is 45° unless the equipment rating or an engineered plan allows less. The flatter the sling, the greater the force in each leg and on the lifting points.' },
                                { type: 'text', text: 'Spreader bars and equalizer beams keep the slings closer to vertical for long loads such as pipe spools, and they also reduce the squeezing (compressive) force on the load. They are rated like any other lifting device and must be used within their capacity.' }
                            ]
                        },
                        {
                            id: 'ch14-s3',
                            title: 'Hitches, Connections and Knots',
                            content: [
                                { type: 'text', text: 'How the sling is attached to the load changes its capacity. A vertical hitch gives the rated capacity. A choker hitch grips the load but loads the sling less efficiently, so its rating is lower than vertical. A basket hitch uses both ends of the sling over the hook and can carry more than a vertical hitch when its legs are vertical, with the capacity falling as the angle becomes flatter. Always use the capacity shown in the manufacturer chart for the type of hitch and the angle.' },
                                {
                                    type: 'table',
                                    headers: ['Connection', 'Description', 'Notes'],
                                    rows: [
                                        ['Hook', 'Attach to a lifting eye or sling eye', 'Hooks must have a working safety latch'],
                                        ['Basket hitch', 'Sling passes under the load with both ends on the hook', 'Capacity depends on the leg angle'],
                                        ['Choker hitch', 'Sling wraps around the load and through its own eye', 'Lower rating than vertical; protects against slipping'],
                                        ['Shackle', 'U-shaped connector with a pin', 'Use the correct pin, fully seated; do not side load'],
                                        ['D-ring', 'Fixed lifting point', 'Check that it is rated for the load direction'],
                                        ['Beam clamp', 'Clamp attached to a structural beam', 'Used for overhead lifting points when rated and approved']
                                    ]
                                },
                                { type: 'text', text: 'Knots, hitches and bends are used with rope. The standard lists these for common lifts and adds more for complex lifts.' },
                                {
                                    type: 'table',
                                    headers: ['Knot or hitch', 'Typical use'],
                                    rows: [
                                        ['Bowline', 'Forms a fixed loop that does not slip or jam'],
                                        ["Cat's paw", 'Attaches a rope or sling to a hook or ring'],
                                        ['Clove hitch', 'Ties a rope to a pole or tube quickly'],
                                        ['Half hitch', 'Secures the end of a rope after another knot, or temporarily'],
                                        ['Timber hitch', 'Hoists or drags a log or pole'],
                                        ['Sheet bend', 'Joins two ropes of different sizes'],
                                        ['Carrick bend', 'Joins two heavy ropes'],
                                        ['Square (reef) knot', 'Joins two ropes of the same size for light loads']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Every knot weakens a rope. Knots, hitches and bends must be de-rated when required, and they must be tied correctly and inspected before the lift. Do not use a knot to carry a heavy or critical load unless the rope rating and the plan allow it.' }
                            ]
                        },
                        {
                            id: 'ch14-s4',
                            title: 'Inspecting Rigging Equipment (C-9.04)',
                            content: [
                                { type: 'text', text: 'Rigging is inspected before use, during use and at regular intervals. You inspect it physically and visually to find faults, verify rating tags and check that the certification is current. Damaged equipment is tagged, reported and removed from service. Inspections are documented as the regulations require.' },
                                {
                                    type: 'table',
                                    headers: ['Equipment', 'Faults to look for', 'Action'],
                                    rows: [
                                        ['Wire rope sling', 'Birdcaging, kinks, broken or frayed wires, corrosion, flattened sections', 'Remove from service if damage exceeds the limits'],
                                        ['Chain sling', 'Stretched, gouged, bent or cracked links; worn connecting hardware', 'Remove from service'],
                                        ['Synthetic sling', 'Rips, tears, cuts, melted or burned areas, chemical damage, exposed core, missing or illegible tag', 'Remove from service'],
                                        ['Shackle', 'Worn or bent body or pin, wrong pin, cracks', 'Replace'],
                                        ['Hook', 'Missing or damaged safety latch, spread throat, twist', 'Replace'],
                                        ['Chain fall, tugger, come-along', 'Hydraulic oil leaks, worn chain or cable, jammed or missing parts, missing tag', 'Repair or replace by a qualified person'],
                                        ['Crane, forklift', 'Fluid leaks, damaged parts, expired certification', 'Do not operate until approved']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Never repair a damaged sling by tying knots in it, splicing it yourself or using tape. Damaged or unmarked rigging is tagged and removed from service immediately so that no one uses it by mistake.' },
                                { type: 'callout', style: 'exam-tip', text: 'A sling with no rating tag, or one that cannot be read, is not used. The missing tag is itself a fault listed in the standard.' }
                            ]
                        },
                        {
                            id: 'ch14-s5',
                            title: 'Maintaining and Storing Equipment (C-9.08)',
                            content: [
                                { type: 'text', text: 'Good maintenance and storage keep rigging safe and extend its life. You log, catalogue, organize and stow equipment by size, components, capacity and site specifications. You clean and lubricate it according to the manufacturer specifications, inspect it, and report and remove faulty items. Store it away from weather and chemicals as the manufacturer recommends, and complete the documentation required by the site and company policy.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Store slings off the ground in a dry, clean, ventilated place.',
                                        'Keep synthetic slings away from heat, sunlight and chemicals.',
                                        'Hang slings and ropes so that they do not kink or crush.',
                                        'Keep the rating tags readable and the equipment organized by capacity.',
                                        'Record inspections and repairs in the equipment log.'
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'Exam answers about storage usually mention three ideas: clean and dry, away from chemicals and heat, and organized and logged by capacity.' }
                            ]
                        },
                        {
                            id: 'ch14-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Select rigging by its WLL, not its breaking strength.',
                                        'Flatter sling angles increase the force in each leg: multiplier = 1 ÷ sin (angle); 60° gives 1.155 and 45° gives 1.414.',
                                        'Hitch type changes capacity; use the manufacturer chart.',
                                        'Knots weaken rope; de-rate them and inspect them.',
                                        'Inspect rigging before every use; tag and remove damaged items, and store equipment clean, dry and logged.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 15 — PERFORMING COMMON AND COMPLEX LIFTS
                // ============================================================
                {
                    id: 'ch-15',
                    number: 15,
                    title: 'Performing Common, Complex and Critical Lifts',
                    subtitle: 'Setting up and performing the lift, tag lines, load transfer and engineered lifts (C-9.06, C-9.07, C-10)',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch15-s1',
                            title: 'Setting Up the Lift (C-9.06)',
                            content: [
                                { type: 'text', text: 'Setting up is where the plan becomes physical. You advise personnel of the plan, inspect the equipment before choosing a connection method, attach it to the load and inspect it again. You decide where to attach the rigging by using the test lift, the centre of gravity, the lifting points and the size and shape of the load. You tie and visually check knots, and secure a tag line of the required length so that the load can be oriented and kept stable.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Use the lifting points that are designed for the load (lugs, eyes, trunnions). Do not lift a vessel or pump by its piping.',
                                        'Protect slings from sharp edges with corner protectors or padding.',
                                        'Make sure the hook is directly above the centre of gravity.',
                                        'Check that every shackle pin is seated and every hook latch is closed.',
                                        'Attach the tag line so that it can be controlled from a safe position and does not wrap around anyone.'
                                    ]
                                },
                                { type: 'text', text: 'Hazards during setup include energized lines, ground conditions, pinch and crush points, falls from height and the use of more than one tag line. Communication during setup uses hand signals, electronic devices and audible or visual signals.' },
                                { type: 'callout', style: 'warning', text: 'Keep hands and fingers clear of pinch points when slings tighten. Never put a hand between a sling and the load when the crane takes weight, and never wrap a tag line around your hand or body.' }
                            ]
                        },
                        {
                            id: 'ch15-s2',
                            title: 'Performing a Common Lift (C-9.07)',
                            content: [
                                { type: 'text', text: 'A common lift follows a controlled sequence: load determination, communication, pre-lift checks, test lift, movement, placement and post-lift inspection. The test lift confirms the centre of gravity and that the load is balanced and hangs plumb. You communicate with the operator and crew, keep the load under control with tag lines at all times, and transfer the load to other rigging for the final placement without damaging material, equipment or people. Then you land and secure the load by bolting, lashing or the site-specific method.' },
                                {
                                    type: 'table',
                                    headers: ['Lift step', 'What to check or do'],
                                    rows: [
                                        ['Pre-lift check', 'Plan reviewed, area secure, equipment inspected, weather acceptable, signals agreed'],
                                        ['Take up slack', 'Raise slowly until the slings are tight and nobody is in a pinch point'],
                                        ['Test lift', 'Lift a short distance; check balance, hook position and rigging; set down and adjust if the load tilts'],
                                        ['Move the load', 'Slow, smooth movements; tag lines keep the load from spinning or swinging'],
                                        ['Place and land', 'Lower slowly onto supports or blocking; do not release until it is stable'],
                                        ['Secure', 'Bolt, lash or block as the site method requires'],
                                        ['Post-lift inspection', 'Inspect rigging for damage, remove from service if needed, and return it to storage']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'A test lift is performed to check balance and the centre of gravity before the load is raised higher. If the load is not level or the hook is not plumb, set it down and re-rig.' },
                                { type: 'callout', style: 'warning', text: 'Never leave a suspended load unattended, and never release the rigging until the load is stable and secured. If the load starts to swing out of control, stop and lower it. Do not try to stop a swinging load with your body.' }
                            ]
                        },
                        {
                            id: 'ch15-s3',
                            title: 'Using Other Hoisting Equipment',
                            content: [
                                { type: 'text', text: 'Not every move needs a crane. Chain falls, come-alongs, jacks, rollers, tuggers and forklifts are used to lift, pull and position pipe and equipment. Each has its own limits and inspection requirements.' },
                                {
                                    type: 'table',
                                    headers: ['Equipment', 'Use', 'Safety points'],
                                    rows: [
                                        ['Chain fall (chain hoist)', 'Lifts loads from an overhead anchor', 'Anchor point must be rated; never use the hand chain to carry more than the rating; do not overload by adding extension handles'],
                                        ['Come-along', 'Pulls or tensions a load in a straight line', 'Not for lifting people; check cable and hook; keep clear of the line of pull'],
                                        ['Tugger', 'Powered winch for pulling loads', 'Keep clear of the line of pull; control the speed'],
                                        ['Jacks and rollers', 'Raise and move equipment at floor level', 'Block the load as it is raised; never work under a load held only by a jack'],
                                        ['Forklift', 'Carries pallets and equipment', 'Operator must be trained; keep loads low when travelling']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Never work under a load that is supported only by a jack, chain fall or hoist. Use blocking or stands that are rated for the load before anyone goes under the equipment.' }
                            ]
                        },
                        {
                            id: 'ch15-s4',
                            title: 'Complex and Critical Lifts (C-10)',
                            content: [
                                { type: 'text', text: 'Task C-10 covers lifts that carry greater risk. A lift is complex or critical when it involves multi-crane lifts, load transfers, unbalanced loads, lifts over live equipment, or conditions such as wind, ground conditions or weather. A lift is also critical when the crane operates near its maximum rated capacity as the site and manufacturer specifications define it. An engineer may be consulted, and the lift may be an engineered lift with a written plan.' },
                                {
                                    type: 'table',
                                    headers: ['Sub-task', 'What is different from a common lift'],
                                    rows: [
                                        ['C-10.01 Lift plan', 'Follow engineering specifications (drawings, crane prints, lift drawings); assess the jobsite and underground infrastructure; complete a JSA, FLRA or SPA; review the plan with the crew, engineer, supervisors and client; complete a dry run of the hoisting equipment; document the plan'],
                                        ['C-10.02 Calculations', 'Calculate the load weight, find the centre of gravity by a test lift, and calculate load and rigging requirements from sling angle, weight, centre of gravity and WLL'],
                                        ['C-10.03 Equipment selection', 'Confirm that the rating exceeds the load weight; check the WLL against rigging tables and load charts; consider fatigue, the environment, the safety factor and sling angles'],
                                        ['C-10.04 Set-up', 'Follow the engineer recommendations; use hooks, spreader bars, equalizer beams, basket and choker hitches, beam clamps, shackles and D-rings; add secondary or safety slings where a load transfer is possible'],
                                        ['C-10.05 Performing the lift', 'Coordinate with the operator, crew and competent persons using hand signals, flags, horns or electronic devices; control the load with tag lines; transfer without damage; land and secure']
                                    ]
                                },
                                { type: 'text', text: 'Hazards in complex lifts include energized power lines, live equipment, limited visibility, poor ground conditions, multiple tag lines, pinch and crush points, overexertion and falls from height. A dry run, which rehearses the movements without the load or with a minimum load, shows problems with reach, clearance and communication before the real lift.' },
                                { type: 'callout', style: 'exam-tip', text: 'For a critical lift, expect the answer to include an engineered or written plan, a dry run, a complete job safety assessment, clear communication with every person involved and secondary slings where a load transfer is possible.' },
                                { type: 'callout', style: 'warning', text: 'If conditions change during a complex lift, such as rising wind, a loss of communication or a rigging problem, stop the lift, make the load safe and review the plan. Never continue a lift that no longer matches the plan.' }
                            ]
                        },
                        {
                            id: 'ch15-s5',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Attach rigging only to designed lifting points, with the hook above the centre of gravity.',
                                        'A test lift confirms the balance before the load goes higher.',
                                        'Keep the load under control with tag lines, and never stand under a suspended load.',
                                        'Never work under a load supported only by a jack or hoist.',
                                        'Complex and critical lifts need an engineered or detailed plan, a dry run, a complete risk assessment, careful communication and secondary slings where a transfer is possible.'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'part-4',
            number: 4,
            title: 'Low and High Pressure Steam and Condensate Systems (MWA D)',
            description: 'Steam properties and system types, installing boilers, steam traps and related equipment, installing steam and condensate piping with correct pitch and expansion control, and testing, maintaining, troubleshooting and repairing low and high pressure steam systems.',
            weight: '24 questions (18.5% of Total Exam)',

            chapters: [
                // ============================================================
                // CHAPTER 16 — STEAM FUNDAMENTALS AND SYSTEM TYPES
                // ============================================================
                {
                    id: 'ch-16',
                    number: 16,
                    title: 'Steam Fundamentals and System Types',
                    subtitle: 'Steam properties, heat transfer, system configurations and heat sources (D-11 and D-12 knowledge)',
                    isFree: false,
                    estimatedMinutes: 55,

                    sections: [
                        {
                            id: 'ch16-s1',
                            title: 'Why Steam Systems Matter',
                            content: [
                                { type: 'text', text: 'Steam is used in industrial plants, hospitals, universities and commercial buildings to heat, to drive equipment and to power processes. Steamfitters and pipefitters install and maintain steam and condensate systems in distilleries, pulp mills, mines, automotive plants, refineries, power plants and commercial buildings. Task D-11 covers low pressure systems and Task D-12 covers high pressure systems. Together they carry about 18% of the exam, so it is one of the biggest areas to study.' },
                                {
                                    type: 'table',
                                    headers: ['Feature', 'Low pressure steam (D-11)', 'High pressure steam (D-12)'],
                                    rows: [
                                        ['Typical pressure', 'Commonly defined as not above about 15 psi (103 kPa) gauge', 'Above the low pressure limit, up to very high pressures in power plants'],
                                        ['Typical uses', 'Building heating, hospital and laboratory systems, small process loads', 'Turbines, process heating, indirect water heating, central plants, pump seals'],
                                        ['Extra equipment', 'Boilers, traps, tanks, pumps, heat transfer equipment', 'Also superheaters, reheaters, de-aerators, desuperheaters, condensers, economizers and flash tanks'],
                                        ['Tests used', 'Hydrostatic, pneumatic, vacuum', 'Hydrostatic and pneumatic'],
                                        ['Risk', 'Burns, water hammer, trapped air', 'Same hazards, with far more stored energy and higher temperatures']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'The exact pressure that separates low and high pressure depends on the jurisdiction and the code. In many places 15 psi (about 103 kPa) is used for low pressure heating boilers. When a question gives a limit, use the limit in the question.' },
                                { type: 'callout', style: 'warning', text: 'Steam leaks can be invisible near the source and can cause severe burns. Never reach into or near a suspected leak with a hand. Use a board or other object to locate it from a safe distance, isolate the system, and let it cool and depressurize before working.' }
                            ]
                        },
                        {
                            id: 'ch16-s2',
                            title: 'Properties of Steam',
                            content: [
                                { type: 'text', text: 'The standard requires you to know the properties of steam: pressure, temperature, latent heat, sensible heat, total heat, superheat and volume, and how to use steam tables to relate pressure and temperature. At a given pressure, water boils at a fixed temperature called the saturation temperature. Higher pressure means a higher boiling temperature.' },
                                { type: 'keyTerm', term: 'Sensible heat', definition: 'Heat that raises the temperature of water or steam and can be measured with a thermometer.' },
                                { type: 'keyTerm', term: 'Latent heat', definition: 'Heat absorbed or released when water changes state (water to steam or steam to water) without a change in temperature.' },
                                { type: 'keyTerm', term: 'Total heat', definition: 'The sum of sensible heat and latent heat in a given amount of steam.' },
                                { type: 'keyTerm', term: 'Saturated steam', definition: 'Steam at the same temperature as the boiling water it came from; it may be dry or wet.' },
                                { type: 'keyTerm', term: 'Superheated steam', definition: 'Saturated steam with added sensible heat, which raises its temperature without raising its pressure.' },
                                {
                                    type: 'table',
                                    headers: ['Term', 'What it means', 'Practical effect'],
                                    rows: [
                                        ['Saturated dry steam', 'Steam at saturation temperature with no water droplets', 'Best for heating; carries its full latent heat'],
                                        ['Wet steam', 'Saturated steam carrying water droplets', 'Lower heat content; contributes to erosion and water hammer'],
                                        ['Superheated steam', 'Steam heated above the saturation temperature at its pressure', 'Used in turbines; dry, so no condensate forms until it cools to saturation'],
                                        ['Condensate', 'Water formed when steam gives up its latent heat', 'Must be removed by traps and returned to the boiler'],
                                        ['Flash steam', 'Steam formed when high-pressure hot condensate drops to a lower pressure', 'Can be recovered in a flash tank']
                                    ]
                                },
                                { type: 'text', text: 'For water at atmospheric pressure, heating 1 kg of water from 0 °C to 100 °C takes about 419 kJ of sensible heat (using 4.19 kJ per kilogram per degree). Changing that 100 °C water to steam takes about 2 257 kJ of latent heat. The total heat is therefore about 2 676 kJ per kilogram. Most of the energy in steam is latent heat, which is why steam heats so effectively: when it condenses on a cold surface, it releases that large amount of heat at a nearly constant temperature.' },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example: how much heat is needed to turn 1 kg of water at 20 °C into saturated steam at atmospheric pressure? Sensible heat = 80 °C × 4.19 = about 335 kJ. Latent heat = about 2 257 kJ. Total = about 2 592 kJ. Latent heat is the larger part, which is why it matters.' },
                                { type: 'text', text: 'Steam tables list, for each pressure, the saturation temperature, the heat content of water and steam, and the specific volume. When pressure goes up, the temperature goes up and the volume per kilogram goes down. Steam occupies a very large volume compared to water, which is why steam piping carries a small mass of steam in a large pipe and why a leak or a sudden condensation causes large pressure changes.' }
                            ]
                        },
                        {
                            id: 'ch16-s3',
                            title: 'Heat Transfer and Heating Equipment',
                            content: [
                                { type: 'text', text: 'Heat moves by three methods: conduction (through solids, such as through a pipe wall), convection (through moving air or liquid) and radiation (as infrared energy, such as from a hot radiator surface). Steam heating equipment uses these in combination. The standard lists heat transfer equipment as radiators, convectors, pipe coils, unit heaters, radiant panels and heat exchangers.' },
                                {
                                    type: 'table',
                                    headers: ['Equipment', 'Main heat transfer method', 'Typical use'],
                                    rows: [
                                        ['Radiator', 'Radiation and natural convection', 'Room heating in older buildings'],
                                        ['Convector', 'Natural convection from finned tube', 'Baseboard and cabinet heaters'],
                                        ['Pipe coil', 'Radiation and convection', 'Heating surfaces in process areas'],
                                        ['Unit heater', 'Forced convection (fan)', 'Warehouses, garages, shops'],
                                        ['Radiant panel', 'Radiation', 'Spot heating and large open spaces'],
                                        ['Heat exchanger / converter', 'Conduction between two fluids', 'Steam to hot water for building heating, process heating']
                                    ]
                                },
                                { type: 'text', text: 'Heating loads in older steam systems are often stated in equivalent direct radiation (EDR). One square foot of steam EDR is equal to 240 BTU per hour, and this value is provided as a constant in the exam. To find the load on a steam radiator system, multiply the EDR by 240.' },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example: a system has 100 ft² of steam EDR. Heat output = 100 × 240 = 24 000 BTU per hour. Condensing steam at atmospheric pressure releases about 970 BTU per pound, so the steam needed is 24 000 ÷ 970 = about 25 lb of steam per hour.' }
                            ]
                        },
                        {
                            id: 'ch16-s4',
                            title: 'Steam and Condensate Piping Configurations',
                            content: [
                                { type: 'text', text: 'The standard lists the configurations that steamfitters must recognize: parallel flow, counter flow, two pipe, gravity return, mechanical return, and wet or dry return. Which one is used affects the pitch of the pipe, the size of the pipe and the equipment needed.' },
                                {
                                    type: 'table',
                                    headers: ['Configuration', 'Description', 'Key point'],
                                    rows: [
                                        ['Parallel flow', 'Steam and condensate flow in the same direction in the main', 'Condensate is carried by the steam, so the pitch can be gentler'],
                                        ['Counter flow', 'Steam flows one way while condensate flows back the opposite way in the same pipe', 'Needs larger pipe and steeper pitch so the condensate can drain against the steam flow'],
                                        ['Two pipe', 'Separate supply and return piping', 'Common and flexible; supports better control and traps at each unit'],
                                        ['Gravity return', 'Condensate returns to the boiler by gravity because the returns are below the steam outlets', 'Needs enough height and slope; no pump'],
                                        ['Mechanical return', 'A condensate receiver and pump send condensate back to the boiler', 'Used where gravity return is not possible, or for larger systems'],
                                        ['Dry return', 'Return line above the boiler water line carrying condensate and air', 'Air passes through the return line to a vent'],
                                        ['Wet return', 'Return line below the boiler water line, full of condensate', 'The line is full of water and cannot carry air']
                                    ]
                                },
                                { type: 'text', text: 'In every configuration, steam and condensate must be able to move in the right direction. Condensate must be able to drain by gravity to a steam trap or to the return, and air must be able to escape. A pocket in the line collects condensate, and fast steam then pushes that water along as a slug, which causes water hammer.' },
                                { type: 'callout', style: 'exam-tip', text: 'A dry return is above the boiler water line and carries condensate with air. A wet return is below the water line and is full of water. If a question mentions air venting through a return line, it is describing a dry return.' }
                            ]
                        },
                        {
                            id: 'ch16-s5',
                            title: 'Plant Types, Fuels and Heat Sources',
                            content: [
                                { type: 'text', text: 'The standard expects you to recognize the sources of heat and the plant types that use steam. System types for high pressure steam include condensing and non-condensing plants, generating plants and process plants.' },
                                {
                                    type: 'table',
                                    headers: ['Category', 'Examples'],
                                    rows: [
                                        ['Fuels', 'Fuel oil, natural gas, coal, wood, biomass'],
                                        ['Heat sources', 'Oil, gas, wood, steam, geothermal, solar, nuclear'],
                                        ['Cooling sources', 'Ground source, cooling towers, chillers, refrigeration, heat exchangers'],
                                        ['Plant types', 'Condensing plant, non-condensing plant, generating plant, process plant']
                                    ]
                                },
                                {
                                    type: 'table',
                                    headers: ['Plant type', 'What it does'],
                                    rows: [
                                        ['Generating plant', 'Produces steam, often to drive turbines that make electricity'],
                                        ['Condensing plant', 'Exhaust steam from a turbine is condensed in a condenser, and the condensate is returned to the boiler'],
                                        ['Non-condensing plant', 'Exhaust steam is used for heating or process instead of being condensed'],
                                        ['Process plant', 'Uses steam as a heat source or ingredient in a manufacturing or processing operation']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'When a question asks where the heat comes from, it may include fuels such as oil, gas, coal, wood and biomass, and heat sources such as geothermal, solar and nuclear. Do not confuse fuels with heat transfer methods like conduction, convection and radiation.' }
                            ]
                        },
                        {
                            id: 'ch16-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Water boils at a higher temperature when the pressure is higher; use steam tables to relate the two.',
                                        'Steam carries most of its energy as latent heat, released when it condenses.',
                                        'Saturated steam has the same temperature as boiling water; superheated steam is hotter at the same pressure.',
                                        '1 ft² of steam EDR = 240 BTU per hour.',
                                        'Know the configurations: parallel flow, counter flow, two pipe, gravity return, mechanical return, dry return and wet return.',
                                        'Never put a hand near a suspected steam leak.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 17 — INSTALLING STEAM EQUIPMENT (D-11.01, D-12.01)
                // ============================================================
                {
                    id: 'ch-17',
                    number: 17,
                    title: 'Installing Steam and Condensate Equipment',
                    subtitle: 'Boilers, boiler trim, steam traps, controls and related equipment (D-11.01, D-12.01)',
                    isFree: false,
                    estimatedMinutes: 65,

                    sections: [
                        {
                            id: 'ch17-s1',
                            title: 'The Equipment Installation Process',
                            content: [
                                { type: 'text', text: 'Installing equipment starts with selecting and sizing it. You select equipment and controls by the application, the system type, the drawings and specifications and the regulations. Sizing uses load and demand calculations, field measurements and manufacturer or supplier documents. You then identify high and low points from the drawings, determine location and placement, select tools, install supports and fasteners, choose an installation method based on size, weight and location, install the equipment and controls, and complete the documentation to the drawings, QA/QC specifications and regulations.' },
                                {
                                    type: 'table',
                                    headers: ['Item', 'Examples from the standard'],
                                    rows: [
                                        ['Supports', 'Brackets, stands, hangers, plates, housekeeping pads, isolator pads, concrete embeds, seismic restraints, spring hangers'],
                                        ['Fasteners', 'Anchors, inserts, beam clamps, nuts, bolts, screws, epoxy'],
                                        ['Installation methods', 'Manual, or mechanical using cranes, chain falls, tuggers, rollers, come-alongs, cable grip hoists and hydraulic jacks'],
                                        ['Controls', 'Flow, level, temperature and pressure devices'],
                                        ['Tools', 'Pipe wrenches, threading equipment, welding equipment, cutting tools']
                                    ]
                                },
                                { type: 'text', text: 'Housekeeping pads raise equipment off the floor so that it stays clean and can be washed around. Isolator pads and spring mounts reduce vibration and noise from pumps and other rotating equipment. Seismic restraints keep equipment from moving in an earthquake where the building code requires it. Lifting and rigging follow the rules in the rigging chapters, and the equipment must be set level and anchored to the manufacturer instructions.' },
                                { type: 'callout', style: 'exam-tip', text: 'Selecting equipment comes before installing it: use the application, system type, drawings, specifications and regulations. If a question asks what a cook, a design engineer and a pipefitter use to size equipment, the pipefitter uses load and demand calculations, field measurements and manufacturer documentation.' }
                            ]
                        },
                        {
                            id: 'ch17-s2',
                            title: 'Boilers and Boiler Trim',
                            content: [
                                { type: 'keyTerm', term: 'Boiler', definition: 'Equipment that heats water or generates steam.' },
                                { type: 'keyTerm', term: 'Boiler trim', definition: 'The controls, equipment and accessories connected to a boiler to keep it operating safely and efficiently.' },
                                { type: 'text', text: 'A boiler burns fuel or uses another heat source to boil water and make steam. The boiler is a pressure vessel, and its installation and operation are governed by jurisdictional codes and the authority having jurisdiction. Boilers are registered, inspected and installed to ASME and CSA requirements.' },
                                {
                                    type: 'table',
                                    headers: ['Boiler trim item', 'Function'],
                                    rows: [
                                        ['Safety (relief) valve', 'Opens automatically at its set pressure to prevent overpressure'],
                                        ['Pressure gauge', 'Shows the steam pressure'],
                                        ['Water column and gauge glass', 'Shows the water level in the boiler'],
                                        ['Low water cut-off (LWCO)', 'Shuts off the fuel supply if the water level drops below a safe level'],
                                        ['Pressure control / limit', 'Turns the burner on and off, or modulates it, to hold pressure'],
                                        ['Feed water valve and pump', 'Supplies make-up water to maintain the level'],
                                        ['Blowdown valves', 'Remove sludge and control the concentration of dissolved solids'],
                                        ['Stop valves and check valves', 'Isolate the boiler and prevent backflow']
                                    ]
                                },
                                { type: 'keyTerm', term: 'Low water cut-off (LWCO)', definition: 'A device that shuts off the automatic fuel control valve when the water level drops below a safe level.' },
                                { type: 'callout', style: 'warning', text: 'Never install a valve between a boiler and its safety valve, and never plug, gag or bypass a safety valve. The safety valve discharge piping must be at least the size of the valve outlet, drained, and run to a safe location. A boiler with no working relief device can explode.' },
                                { type: 'callout', style: 'exam-tip', text: 'A boiler that loses water can overheat and fail. The low water cut-off stops the burner if the level falls too low, and the water column shows the level. These are the first items to check when a boiler shuts off unexpectedly.' }
                            ]
                        },
                        {
                            id: 'ch17-s3',
                            title: 'Steam Traps',
                            content: [
                                { type: 'keyTerm', term: 'Steam trap', definition: 'An automatic device that passes air and condensate but holds back steam.' },
                                { type: 'text', text: 'Steam traps remove condensate and air from a steam system without letting live steam escape. A system without working traps becomes water-logged, cold or noisy, and one with traps that leak steam wastes a great deal of energy. Traps are installed at the end of mains, at low points, at drip legs, at the outlet of heat transfer equipment and at each tracing circuit.' },
                                {
                                    type: 'table',
                                    headers: ['Trap type', 'How it works', 'Typical use'],
                                    rows: [
                                        ['Float and thermostatic (F&T)', 'A float rises with condensate and opens a valve; a thermostatic element vents air', 'Heat exchangers, unit heaters, equipment with large condensate loads'],
                                        ['Inverted bucket', 'A bucket holding steam floats and closes the valve; condensate entering makes it sink and open', 'Drip legs, mains and process equipment; handles dirt well'],
                                        ['Thermostatic', 'A temperature-sensitive element opens for cool condensate and closes for steam', 'Radiators, tracing lines and small loads'],
                                        ['Thermodynamic (disc)', 'Steam velocity and pressure close a disc; condensate lifts it', 'Drip legs and tracing on higher pressure lines'],
                                        ['Bimetallic', 'Bimetal strips bend with temperature', 'Tracing and drip applications']
                                    ]
                                },
                                { type: 'text', text: 'A trap can fail open, which blows steam through and wastes energy, or fail closed, which holds back condensate and leaves the equipment cold or the line full of water. Install a strainer upstream of a trap, and use isolation valves and test connections so that the trap can be checked and replaced. Install the trap below the equipment it drains, with a pitch that lets condensate flow to it.' },
                                { type: 'callout', style: 'exam-tip', text: 'If a heat exchanger is cold and has full condensate piping, suspect a trap failed closed or a plugged strainer. If steam is blowing through a trap discharge line, suspect a trap failed open.' }
                            ]
                        },
                        {
                            id: 'ch17-s4',
                            title: 'High Pressure Equipment (D-12.01)',
                            content: [
                                { type: 'text', text: 'High pressure systems add equipment that improves efficiency and controls steam conditions. The standard lists flash tanks, superheaters, reheaters, de-aerators, desuperheaters, condensers and economizers in addition to the low pressure list.' },
                                {
                                    type: 'table',
                                    headers: ['Equipment', 'Function'],
                                    rows: [
                                        ['Superheater', 'Heats saturated steam to raise its temperature without raising its pressure'],
                                        ['Reheater', 'Heats steam again after it has passed through part of a turbine'],
                                        ['Desuperheater', 'Uses water as a cooling medium to lower the temperature of superheated steam'],
                                        ['De-aerator', 'Removes dissolved oxygen and carbon dioxide from feed water, protecting the system from corrosion'],
                                        ['Economizer', 'Recovers heat from flue gas to preheat feed water'],
                                        ['Condenser', 'Turns exhaust steam back into water so it can be reused'],
                                        ['Flash tank', 'Lets high-pressure condensate flash to low-pressure steam, which can then be used elsewhere'],
                                        ['Steam separator', 'Removes entrained moisture from steam']
                                    ]
                                },
                                { type: 'text', text: 'Other equipment in both pressure ranges includes pumps, expansion joints, valves, tanks and water treatment equipment. Water treatment (chemical feed, softeners and make-up) controls scale and corrosion in the boiler and piping. A steam pressure reducing station, where used, normally includes isolation valves, a strainer, a pressure reducing valve, a relief valve on the low pressure side, gauges and a bypass.' },
                                { type: 'callout', style: 'warning', text: 'High pressure steam carries far more energy than low pressure steam. A failure of a high pressure line, valve or fitting can release steam at very high temperature and force. Only install, test and repair according to the specification and code, with correct materials and ratings.' }
                            ]
                        },
                        {
                            id: 'ch17-s5',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Select and size equipment from the application, drawings, specifications, regulations and load calculations.',
                                        'Boiler trim includes the safety valve, gauge, water column, LWCO, controls, feed and blowdown.',
                                        'Never put a valve between a boiler and its safety valve, and never gag a relief device.',
                                        'A trap passes air and condensate and holds back steam; know F&T, inverted bucket, thermostatic and thermodynamic traps.',
                                        'High pressure plants add superheaters, reheaters, de-aerators, desuperheaters, condensers, economizers and flash tanks.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 18 — INSTALLING STEAM AND CONDENSATE PIPING (D-11.02, D-12.02)
                // ============================================================
                {
                    id: 'ch-18',
                    number: 18,
                    title: 'Installing Steam and Condensate Piping',
                    subtitle: 'Routing, pitch, drip legs, expansion, supports, air and water hammer (D-11.02, D-12.02)',
                    isFree: false,
                    estimatedMinutes: 65,

                    sections: [
                        {
                            id: 'ch18-s1',
                            title: 'Planning the Piping Installation',
                            content: [
                                { type: 'text', text: 'Piping installation starts with the route. You determine the route and location from the drawings and modify it to avoid obstructions and conflicts. You identify the high and low points, select and size the pipe, select tools, clean and prepare fittings and joints, determine the joining method, bend the pipe where needed, set the grade or pitch, install supports and restraints, and assemble the piping while allowing for insulation and for contraction and expansion.' },
                                {
                                    type: 'table',
                                    headers: ['Planning item', 'Examples from the standard'],
                                    rows: [
                                        ['Pipe materials', 'Carbon steel, alloy steel, copper, stainless steel and HDPE'],
                                        ['Obstructions', 'Structural members, walls, other mechanical and electrical systems'],
                                        ['Conflicts', 'High and low points, clearances, extreme heat or cold, mechanical damage from doors, forklifts and machinery'],
                                        ['Joining methods', 'Flanging, bonding, grooving, threading, welding, soldering, brazing and mechanical joints'],
                                        ['Supports', 'Rollers, hangers, clamps, brackets, stands'],
                                        ['Restraints', 'Wires, clamps, pipe, brackets, anchors and guides'],
                                        ['Expansion allowances', 'Expansion joints, expansion loops, swing joints and spring cans']
                                    ]
                                },
                                { type: 'text', text: 'Pipe sizing follows the manufacturer recommendations, the drawings and specifications and the regulations. Steam pipe is sized for flow and pressure drop: pipe that is too small gives high steam velocity, noise and erosion, while pipe that is too large costs more and loses more heat. Systems that need grade or pitch must be installed to the slope on the drawings or in the code.' },
                                { type: 'callout', style: 'exam-tip', text: 'When an obstruction blocks the route in the drawings, the pipefitter modifies the route to avoid the obstruction and conflict while still keeping the required pitch and access, and records the change on the field drawing.' }
                            ]
                        },
                        {
                            id: 'ch18-s2',
                            title: 'Pitch, Drip Legs and Draining Condensate',
                            content: [
                                { type: 'text', text: 'Condensate forms continuously in a steam line as the pipe loses heat. If it is not drained, it collects and is carried by the steam as slugs of water. The solution is pitch, drip legs and traps.' },
                                {
                                    type: 'table',
                                    headers: ['Feature', 'Purpose', 'Typical practice'],
                                    rows: [
                                        ['Pitch of steam main', 'Lets condensate flow with gravity toward a drip point', 'Commonly about 1 in. in 20 ft (about 4 mm per metre) in the direction of steam flow; steeper when condensate flows against the steam'],
                                        ['Drip leg', 'A pocket that collects condensate at low points and ahead of risers or control valves', 'Fitted with a steam trap at the bottom; installed at regular intervals along long runs and at low points'],
                                        ['Eccentric reducer, flat side down', 'Changes pipe size without forming a pocket for condensate', 'A concentric reducer in a horizontal steam line creates a pocket'],
                                        ['Branch connection from the top of the main', 'Takes the driest steam and prevents condensate running into the branch', 'Branches are taken off the top or the side of the main'],
                                        ['Strainer ahead of valves and traps', 'Catches scale and debris', 'Installed with the screen to the side so it does not fill with condensate']
                                    ]
                                },
                                { type: 'text', text: 'Drip legs should be the same diameter as the main for smaller mains, and a trap with a strainer and test valve is installed at the end. Where a line rises (a riser), condensate must be drained from the bottom. Never install a low point or pocket without a drip leg and trap, because the pocket will collect condensate and cause water hammer.' },
                                { type: 'callout', style: 'exam-tip', text: 'Pitch numbers are typical practice, not exam constants: follow the drawing, specification or code. What matters on the exam is the principle: slope the line toward a drip point, drain every low point, and use eccentric reducers with the flat side down.' }
                            ]
                        },
                        {
                            id: 'ch18-s3',
                            title: 'Water Hammer and Trapped Air',
                            content: [
                                { type: 'text', text: 'Water hammer is a pressure shock caused by water moving at high speed and being stopped suddenly, or by steam condensing rapidly in a pocket of cold condensate. It makes a banging noise, and it can break fittings, damage valves and traps and injure people.' },
                                {
                                    type: 'table',
                                    headers: ['Cause of water hammer', 'Prevention'],
                                    rows: [
                                        ['Condensate pocket in a line (low point, sag, wrong pitch)', 'Pitch lines correctly, support properly and add drip legs and traps'],
                                        ['Missing or failed steam traps', 'Install and maintain traps at all low points and ends of mains'],
                                        ['Opening a steam valve too quickly on a cold line', 'Warm the line slowly using a bypass or by cracking the valve open'],
                                        ['Concentric reducer in a horizontal line', 'Use an eccentric reducer, flat side down'],
                                        ['Condensate and steam in a counter flow line with insufficient pipe size', 'Use larger pipe and steeper pitch']
                                    ]
                                },
                                { type: 'text', text: 'Trapped air is a separate problem. Air does not carry heat as steam does, and it insulates heat transfer surfaces. Air in a steam system blocks steam from reaching equipment, and in a water system it blocks circulation. The standard lists the effects of trapped air and methods to prevent it as a knowledge item in every task. Prevention includes air vents, thermostatic traps that vent air, correct pitch, filling and venting procedures and purging during testing.' },
                                { type: 'callout', style: 'warning', text: 'When starting a cold steam line, open the steam valve slowly and drain condensate first. Opening a valve fast can cause water hammer that breaks a valve or pipe. Stay clear of the line and discharge points while warming up.' },
                                { type: 'callout', style: 'exam-tip', text: 'Banging in a steam line almost always points to condensate that is not draining: look for sags, missing pitch, failed traps and missing drip legs before looking for anything else.' }
                            ]
                        },
                        {
                            id: 'ch18-s4',
                            title: 'Expansion, Supports and Dissimilar Metals',
                            content: [
                                { type: 'text', text: 'Steam pipe is hot, so it grows. The pipe is installed with expansion joints, expansion loops, swing joints or spring cans, and it is guided and anchored so that the growth goes in the intended direction. Use the linear expansion formula from the supports chapter: length × coefficient × temperature change. Spring hangers and spring cans support the pipe while allowing it to move up and down.' },
                                {
                                    type: 'list',
                                    items: [
                                        'Provide supports that allow the pipe to slide where it must move, such as rollers, shoes and hangers.',
                                        'Use anchors and guides to direct movement toward loops and joints.',
                                        'Allow for the thickness of insulation, using sleeves and shoes that keep insulation from being crushed.',
                                        'Protect piping from mechanical damage, seismic activity, environmental conditions and burns (personnel protection).',
                                        'Install insulation clearance and spacing so that insulation can be fitted without leaving gaps.'
                                    ]
                                },
                                { type: 'text', text: 'When dissimilar metals are joined in the presence of water, electrolysis (galvanic corrosion) can destroy the more active metal. Use dielectric unions or isolation kits, and avoid joining copper directly to steel without a barrier. Where pipe passes through walls and floors, install sleeves that allow for movement and fire stopping.' },
                                { type: 'callout', style: 'warning', text: 'Bare steam piping within reach of people must be insulated or guarded to prevent burns. Hot surfaces can cause a serious burn in a fraction of a second.' }
                            ]
                        },
                        {
                            id: 'ch18-s5',
                            title: 'Condensate Return Piping',
                            content: [
                                { type: 'text', text: 'Condensate is valuable: it is hot, clean water that has already been treated. Returning it to the boiler saves fuel, water and treatment chemicals. Condensate return piping uses gravity or mechanical return, wet or dry return configurations, and includes traps, check valves, strainers, receivers and pumps.' },
                                {
                                    type: 'table',
                                    headers: ['Return component', 'Purpose'],
                                    rows: [
                                        ['Condensate receiver', 'Collects condensate from the system before it is pumped back'],
                                        ['Condensate pump', 'Moves condensate to the boiler or de-aerator when gravity is not enough'],
                                        ['Check valve', 'Prevents condensate flowing back toward the equipment'],
                                        ['Vent', 'Allows air and flash steam to escape from the receiver'],
                                        ['Strainer', 'Protects traps and pumps from debris'],
                                        ['Make-up water', 'Added to the system to replace water lost through leaks and venting']
                                    ]
                                },
                                { type: 'callout', style: 'exam-tip', text: 'High pressure condensate that drops to a lower pressure will flash to steam. Return lines carrying flashing condensate must be sized for the steam as well as the water, or the flash steam must be recovered in a flash tank.' }
                            ]
                        },
                        {
                            id: 'ch18-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Route piping around obstructions and conflicts while keeping the pitch and access.',
                                        'Pitch mains toward drip legs; trap every low point; use eccentric reducers flat side down.',
                                        'Water hammer comes from condensate that is not draining and from opening valves too fast on cold lines.',
                                        'Trapped air blocks heat transfer and circulation; vent it and use correct pitch.',
                                        'Allow for expansion, protect against electrolysis and insulate against burns.',
                                        'Return condensate to save fuel, water and treatment; handle flash steam.'
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ============================================================
                // CHAPTER 19 — TESTING, MAINTENANCE, TROUBLESHOOTING AND REPAIR
                // ============================================================
                {
                    id: 'ch-19',
                    number: 19,
                    title: 'Testing, Maintaining, Troubleshooting and Repairing Steam Systems',
                    subtitle: 'Hydrostatic, pneumatic and vacuum tests, LOTO, troubleshooting and system reinstatement (D-11.03, D-11.04, D-12.03, D-12.04)',
                    isFree: false,
                    estimatedMinutes: 65,

                    sections: [
                        {
                            id: 'ch19-s1',
                            title: 'Planning and Performing a Pressure Test',
                            content: [
                                { type: 'text', text: 'A test proves that the system is leak-free and safe before it is put into service. The standard gives a clear sequence: perform a visual pre-check for obstructions and deficiencies, and complete a punch list confirming that components are installed. Determine the tests, equipment and parameters from the drawings, specifications and regulations. Select tools, determine the test medium and the way to fill, drain or purge, then assemble and connect the test equipment. Lock out and tag out the system, install isolation components, protect sensitive equipment, and confirm the zero energy state. Perform the test, document the results for sign-off, remove the test medium, remove LOTO, remove isolation and test equipment, reinstate the system, and complete and distribute documentation.' },
                                {
                                    type: 'table',
                                    headers: ['Test', 'Medium', 'Notes'],
                                    rows: [
                                        ['Hydrostatic', 'Water or a water and glycol mix', 'Preferred for most piping; liquid stores little energy; vent all air first'],
                                        ['Pneumatic', 'Air or inert gas', 'Stores a great deal of energy; used only where permitted and with extra precautions'],
                                        ['Vacuum', 'Air removed from the system (low pressure tasks)', 'Checks for leaks into the system and holds of vacuum']
                                    ]
                                },
                                {
                                    type: 'table',
                                    headers: ['Equipment', 'Function'],
                                    rows: [
                                        ['Calibrated pressure gauges', 'Measure test pressure accurately'],
                                        ['Test pump', 'Fills the system and raises the pressure'],
                                        ['Recorders', 'Create a record of pressure over time'],
                                        ['Testing trees and headers', 'Provide connection points for pumps, gauges and relief devices'],
                                        ['Relief device on the test setup', 'Prevents the test from exceeding the maximum test pressure'],
                                        ['Blinds, spades, plugs, caps, temporary spool pieces, double block and bleed', 'Isolate the section under test']
                                    ]
                                },
                                { type: 'text', text: 'Isolation components protect equipment that cannot take the test pressure, such as pumps, control valves, boilers, traps and instruments. Test media are removed afterwards and recycled or disposed of according to the specifications and regulations. Filling methods use pumps, compressors or compressed gas cylinders.' },
                                { type: 'callout', style: 'warning', text: 'Never exceed the specified test pressure, and never stand in line with blinds, plugs or caps during a test. Increase pressure in steps, hold, inspect from a safe position and depressurize before approaching. Use a calibrated gauge and a relief device on the test setup.' },
                                { type: 'callout', style: 'exam-tip', text: 'Typical test pressure is a multiple of the design pressure, and the exact value comes from the code and specification. For ASME B31 piping, a common hydrostatic test is 1.5 times the design pressure. On the exam, the value will be provided or stated in the question.' }
                            ]
                        },
                        {
                            id: 'ch19-s2',
                            title: 'Elevation, Temperature and Test Pressure',
                            content: [
                                { type: 'text', text: 'Two knowledge items in every testing task are the effect of elevation on test pressure and the effect of temperature. A column of water creates pressure: the exam gives the constant of 0.433 psi per foot of head. A gauge at the bottom of a tall riser reads higher than one at the top. The pressure at the lowest point of the system is the test pressure plus the static head above it.' },
                                { type: 'callout', style: 'exam-tip', text: 'Worked example: a gauge at the top of a 50 ft vertical riser reads 100 psi. A gauge at the bottom reads 100 + (0.433 × 50) = 100 + 21.65 = 121.65 psi. If the lowest component is rated close to the test pressure, the head must be counted.' },
                                { type: 'text', text: 'Temperature matters because water expands as it warms. A completely full, closed piping section that is heated by the sun or by the building can rise in pressure very quickly, and a drop in temperature can drop the reading. For this reason, tests are monitored for temperature change, and a relief device is kept on the test setup so that thermal expansion cannot overpressure the system.' },
                                {
                                    type: 'list', items: [
                                        'Count the static head when you compare test pressure with component ratings.',
                                        'Keep the system in thermal balance during the hold period, and do not mistake a temperature change for a leak.',
                                        'Vent all trapped air before pressurizing a hydrostatic test, because air compresses and stores energy.',
                                        'Support the piping for the weight of the water used during testing; water-filled steam lines are much heavier than in service.'
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Trapped air in a hydrostatic test stores energy like a spring. If a component fails, the air expands and can throw parts violently. Vent the high points and confirm the system is full of water before raising pressure.' }
                            ]
                        },
                        {
                            id: 'ch19-s3',
                            title: 'Lock-Out, Isolation and Zero Energy',
                            content: [
                                { type: 'text', text: 'Both testing and repair require isolation. You lock out and tag out the system, install isolation components, and confirm the zero energy state before work begins. The standard defines zero energy confirmation for steam systems: the necessary valves and drains are open and clear, the gauges read zero, and the equipment is inoperable.' },
                                {
                                    type: 'table',
                                    headers: ['Isolation component', 'Use'],
                                    rows: [
                                        ['Blind or spade', 'A solid plate that completely blocks a line; the most positive isolation'],
                                        ['Plug and cap', 'Closes the end of an open pipe or connection'],
                                        ['Temporary spool piece', 'Replaces a component so a section can be tested or isolated'],
                                        ['Double block and bleed', 'Two valves with a vent between them to prove that the isolation is holding']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'A closed valve is not enough to protect a person working on steam piping. Steam valves can leak by, and trapped steam or condensate can scald. Use positive isolation, bleed and drain, confirm zero pressure and temperature, then lock out and tag out.' }
                            ]
                        },
                        {
                            id: 'ch19-s4',
                            title: 'Maintaining and Troubleshooting Steam Systems',
                            content: [
                                { type: 'text', text: 'Maintenance follows a predetermined schedule, so the equipment stays free of contaminants and operates efficiently. Maintenance tasks named in the standard include adding chemicals and additives, lubricating, checking fluids, cleaning, inspecting for wear and replacing worn components. Equipment covered includes boilers, tanks, heat exchangers, pumps, isolators, valves and chemical feeders, and in high pressure systems also steam traps, flash tanks, superheaters, reheaters, de-aerators, desuperheaters, condensers and economizers.' },
                                { type: 'text', text: 'To troubleshoot, start by identifying the issue with the system owner or operator, then test and inspect to decide what needs repair or replacement. Tools include pipe wrenches, heat-detecting equipment and stethoscopes. Methods are sensory inspection, diagnostic testing and monitoring system operation. The conditions that call for repair or replacement are abnormal temperature, leaks, corrosion, control malfunction, vibration and irregular movement.' },
                                {
                                    type: 'table',
                                    headers: ['Symptom', 'Possible cause', 'Check or repair'],
                                    rows: [
                                        ['Banging noise in steam piping', 'Condensate not draining, sag or wrong pitch, failed trap, valve opened too fast', 'Check pitch, supports, drip legs and traps; warm up slowly'],
                                        ['Heat exchanger or radiator cold', 'Trap failed closed, plugged strainer, air-bound unit, closed valve', 'Check trap and strainer, vent air, verify valves'],
                                        ['Steam blowing from trap discharge or return', 'Trap failed open', 'Test the trap and replace it'],
                                        ['Boiler shuts down', 'Low water cut-off tripped, pressure control, fuel or control fault', 'Check water level and LWCO, then controls'],
                                        ['Leaks at flange or valve', 'Failed gasket, loose bolts, packing worn', 'Isolate, relieve pressure, replace gasket or packing, retorque'],
                                        ['Corrosion and pitting', 'Poor water treatment, oxygen in feed water, galvanic action', 'Check water test results, de-aerator, chemical feed and dissimilar metal connections'],
                                        ['Vibration or pipe movement', 'Failed support, guide or anchor, water hammer, pump issue', 'Check supports and traps; repair or replace supports'],
                                        ['High or low pressure reading', 'Control malfunction, gauge fault, elevation difference', 'Check the control, verify gauge calibration and consider the static head']
                                    ]
                                },
                                { type: 'text', text: 'Steam trap testing methods include observing the discharge, checking temperature before and after the trap with a heat detector, and listening with a stethoscope or ultrasonic tester. A trap that is hot on both sides and discharges steam continuously has failed open. A trap that is cold with condensate backed up has failed closed.' },
                                { type: 'callout', style: 'exam-tip', text: 'The standard says to consult the system owner or operator first. They know what changed, what the symptoms are and how the system behaves, which saves time and avoids mistakes.' }
                            ]
                        },
                        {
                            id: 'ch19-s5',
                            title: 'Repairing and Reinstating the System',
                            content: [
                                { type: 'text', text: 'Repair follows a fixed order. Lock out and tag out, install isolation components and confirm zero energy. Disassemble, repair or replace the faulty parts, and reassemble without damaging nearby components or the surrounding area. Remove the lock-out and tag-out only when the work is complete and people are clear. Then reinstate the system: fill and pressurize, bleed air and contaminants, check for leaks, remove locks and tags, and return the system to normal operation. Run a system test and record it for sign-off, remove and dispose of the test medium, and test the quality of the system medium with a test kit following the manufacturer, QA/QC and regulatory requirements.' },
                                {
                                    type: 'table',
                                    headers: ['Step', 'What to do'],
                                    rows: [
                                        ['1. Consult', 'Talk to the system owner or operator about the problem'],
                                        ['2. Isolate', 'LOTO, install isolation components, bleed and confirm zero energy'],
                                        ['3. Repair', 'Disassemble, repair or replace parts, reassemble without damage'],
                                        ['4. Reinstate', 'Remove LOTO, fill and pressurize, bleed air and contaminants, check for leaks'],
                                        ['5. Test', 'Perform a system test and a medium quality test with a test kit'],
                                        ['6. Document', 'LOTO records, maintenance log, QA/QC report, sign-off']
                                    ]
                                },
                                { type: 'callout', style: 'warning', text: 'Before opening any steam or condensate line, confirm that it is isolated, drained, vented and cool. Residual steam and hot condensate can scald seriously. Wear the correct PPE, and open flanges slowly from the side away from you, loosening the bolts furthest from you first.' },
                                { type: 'callout', style: 'exam-tip', text: 'The reinstatement step includes bleeding air and contaminants, because air left in a steam or water system causes noise, poor heat transfer and corrosion. After repair, quality testing of the system medium (water treatment tests) is also required.' }
                            ]
                        },
                        {
                            id: 'ch19-s6',
                            title: 'Chapter Summary',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Test sequence: pre-check and punch list, choose test and medium, LOTO and isolate, test, document, remove medium, reinstate.',
                                        'Hydrostatic tests are safer than pneumatic; vent air first.',
                                        'Static head adds 0.433 psi per foot of height to test pressure at lower points.',
                                        'Zero energy means valves and drains open, gauges at zero and equipment inoperable.',
                                        'Troubleshoot by consulting the operator, then inspect and test; cold equipment suggests failed-closed traps or air.',
                                        'After repair, bleed air, check for leaks, test and document, and test the water quality.'
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