// ============================================================
// CertReady — Welder Course Data (Part 1 of 2: Chapters 1–9)
// Based on: Red Seal Occupational Standard (RSOS) – Welder (2023)
// Red Seal Interprovincial Exam: 125 questions
// Apprenticeship: 3 levels, 5400 hours total
// ============================================================

const welderCourse = {
    meta: {
      trade: 'Welder',
      redSealCode: '456A',
      seoTitle: 'Welder Red Seal Exam Prep — 456A Study Guide',
      seoDescription: 'Prepare for the Welder Red Seal exam with practical study content, exam strategy, and realistic practice resources for Trade 456A.',
      seoKeywords: 'Welder, 456A, Red Seal, exam prep, study guide, practice questions, Canadian trades certification',
      ogImage: '/course-images/og/welder.svg',
      totalExamQuestions: 125,
      apprenticeshipLevels: 3,
      totalHours: 5400,
      version: '2023',
      lastUpdated: '2025',
    },
    parts: [
  
      // ============================================================
      // PART 1 — Foundations of the Trade
      // MWA A: Performs Common Occupational Skills (16%)
      // ============================================================
      {
        id: 'part-1',
        number: 1,
        title: 'Foundations of the Trade',
        description: 'Part 1 covers the core occupational skills every welder must master: trade terminology, workplace safety, tools and equipment, work organization, and quality assurance. This section corresponds to MWA A (16% of the Red Seal exam) and establishes the professional foundation on which all welding skills are built.',
        chapters: [
  
          // ============================================================
          // CHAPTER 1 — Glossary
          // ============================================================
          {
            id: 'ch-01',
            number: 1,
            title: 'Glossary of Welder Terms',
            subtitle: 'MWA A · Core Trade Terminology',
            isFree: true,
            estimatedMinutes: 40,
            sections: [
              {
                id: 'ch01-s1',
                title: '1.1 Core Welder Terms',
                content: [
                  {
                    type: 'paragraph',
                    text: 'The following table defines the essential terms, acronyms and concepts used throughout this course and on the Red Seal Interprovincial Examination for Welders. Terms are drawn from the RSOS Welder (2023), Appendix A (Acronyms) and Appendix C (Glossary), and from governing standards including CSA W47.1, CSA W59 and AWS D1.1. Mastery of this vocabulary is critical for interpreting drawings, Welding Procedure Specifications, and examination questions accurately.',
                  },
                  {
                    type: 'table',
                    headers: ['Term', 'Definition'],
                    rows: [
                      ['AC (Alternating Current)', 'Electrical current that periodically reverses direction; used in certain welding processes such as GTAW on aluminum.'],
                      ['Arc welding', 'Any welding process that uses an electric arc to produce a molten puddle to join metals.'],
                      ['ASME', 'American Society of Mechanical Engineers; publishes codes governing pressure vessels and piping (e.g., ASME Section IX for welding qualifications).'],
                      ['AWS', 'American Welding Society; publishes welding standards and codes such as AWS D1.1 Structural Welding Code — Steel.'],
                      ['Backfire', 'A condition in which the torch flame rapidly burns back into the torch tip, causing a popping sound and re-ignition of gases; usually caused by a dirty tip or low gas pressure.'],
                      ['CAC-A (Air Carbon Arc Cutting)', 'A thermal cutting process that uses an electric arc between a carbon electrode and the base metal, with a jet of compressed air to blow away molten metal.'],
                      ['CC (Constant Current)', 'A power source output characteristic that maintains a relatively stable amperage regardless of arc length changes; typical of SMAW and GTAW power sources.'],
                      ['Consumables', 'Materials that are consumed in the course of welding and cutting operations, including electrodes, welding wire, flux, shielding gas and torch tips.'],
                      ['Contact tip (contact tube)', 'The tip at the end of a welding gun through which electricity is transferred to the consumable wire before it enters the weld zone.'],
                      ['CSA', 'Canadian Standards Association; publishes Canadian welding standards including CSA W47.1 (certification of companies for fusion welding of steel) and CSA W59 (welded steel construction).'],
                      ['Current type', 'The electrical characteristics of a welding circuit, including the current (AC or DC) and polarity (DCEN or DCEP).'],
                      ['CV (Constant Voltage)', 'A power source output characteristic that maintains a relatively stable voltage regardless of current changes; typical of GMAW, FCAW and SAW power sources.'],
                      ['DC (Direct Current)', 'Electrical current that flows in one direction only; used in most arc welding processes.'],
                      ['DCEN (Direct Current Electrode Negative)', 'Polarity in which the electrode is connected to the negative terminal; also called straight polarity. Produces deeper penetration.'],
                      ['DCEP (Direct Current Electrode Positive)', 'Polarity in which the electrode is connected to the positive terminal; also called reverse polarity. Produces a cleaning action on the base metal.'],
                      ['Discontinuity', 'An interruption in the typical structure of a weld, such as porosity, undercut or lack of fusion. A discontinuity becomes a defect when it exceeds the acceptance criteria of the applicable code.'],
                      ['Drive rolls', 'Equipment in a wire feed system, available in various sizes, used to drive wire through the liner to the gun contact tip.'],
                      ['Dunnage', 'Blocking or cribbing used to support a load during rigging, storage or transport.'],
                      ['Electrode', 'In SMAW, a metal core with a flux coating that is connected to a power source to create an electric arc. In GTAW, the non-consumable tungsten rod that creates the arc.'],
                      ['Electrode extension (stick-out)', 'The amount of filler wire, tungsten or other electrode material protruding from the gun\'s contact tip or torch cup.'],
                      ['Electrode oven', 'An oven maintained at a specified temperature to keep SMAW electrodes dry and stabilized, preventing moisture absorption and hydrogen-induced cracking.'],
                      ['EMF (Electromagnetic Field)', 'Fields produced by welding current that welders should be aware of, particularly around pacemakers and sensitive electronic equipment.'],
                      ['FCAW (Flux Cored Arc Welding)', 'A semi-automatic or automatic arc welding process using a continuously fed tubular electrode containing flux in its core; available in gas-shielded and self-shielded variants.'],
                      ['Filler wire', 'A consumable that is melted during the welding process and becomes part of the finished weldment.'],
                      ['Flashback arrestor', 'Safety equipment fitted to oxy-fuel hoses that prevents possible explosions caused by ignition of gases in the hoses.'],
                      ['Flow meter', 'A meter used in conjunction with a gas regulator to measure the volume of shielding gas flowing through the system.'],
                      ['Flux', 'A material applied before or during welding to remove oxides and contaminants from the weld zone, improving weld quality.'],
                      ['Gas diffuser', 'A device used in GMAW, FCAW or MCAW to distribute shielding gas evenly around the contact tip and weld zone.'],
                      ['Gas lens', 'In GTAW, a specialized collet body holder that diffuses shielding gas more evenly and allows for longer electrode extension.'],
                      ['GMAW (Gas Metal Arc Welding)', 'A semi-automatic or automatic arc welding process using a continuously fed solid wire electrode and an external shielding gas; also known as MIG welding.'],
                      ['GTAW (Gas Tungsten Arc Welding)', 'A welding process that uses a non-consumable tungsten electrode and an inert shielding gas; also known as TIG welding. Produces high-quality, precise welds.'],
                      ['GTSM (Grind to Sound Metal)', 'A repair instruction requiring that grinding continue until all defective material is removed and only sound base metal remains.'],
                      ['Heat input', 'The amount of energy transferred to the base metal during welding, calculated using the formula: Heat Input (kJ/mm) = (Amps × Volts × 60) / (Travel Speed in mm/min × 1000). High heat input can affect mechanical properties.'],
                      ['Heat treatment', 'The controlled application of heat to metal assemblies for the purpose of stress relieving, preheating, annealing, hardening or tempering.'],
                      ['ITP (Inspection Test Plan)', 'A document that defines the inspection and testing requirements for a fabrication project, including hold points and witness points.'],
                      ['LOTO (Lock Out/Tag Out)', 'A safety procedure requiring that energy sources be isolated and locked before maintenance or service work on equipment.'],
                      ['MCAW (Metal Cored Arc Welding)', 'An arc welding process using a continuously fed tubular electrode with metal powder fill; used with external shielding gas and offers high deposition rates.'],
                      ['Metallurgy', 'The branch of science concerned with the chemical and physical properties of metals and alloys, including how they respond to heating and welding.'],
                      ['MPS (Methylacetylene-Propadiene Stabilized)', 'A fuel gas used in oxy-fuel cutting; a stabilized liquefied gas mixture also known by trade names such as MAPP gas.'],
                      ['MTR (Mill Test Report)', 'A document certifying the chemical composition and mechanical properties of a metal as tested at the steel mill; used for material traceability.'],
                      ['OFC (Oxy-Fuel Gas Cutting)', 'A thermal cutting process using a flame produced by the combustion of a fuel gas with oxygen, plus a separate stream of pure oxygen to oxidize and blow away the metal.'],
                      ['OH&S (Occupational Health and Safety)', 'Federal and provincial/territorial legislation governing workplace health and safety standards.'],
                      ['PAC (Plasma Arc Cutting)', 'A thermal cutting process using a constricted arc and high-velocity ionized gas (plasma) to melt and remove metal; suitable for all electrically conductive metals.'],
                      ['PAPR (Powered Air Purifying Respirator)', 'A respirator that uses a blower to force ambient air through filters, providing continuous clean air flow to the wearer.'],
                      ['Pickling paste', 'An acidic compound applied to the surface of stainless steel after welding to remove the heat tint and replenish the passive oxide layer.'],
                      ['Postheating', 'Controlled heating of weldments after final welds are complete to relieve residual stresses and improve mechanical properties.'],
                      ['PPE (Personal Protective Equipment)', 'Equipment worn by workers to protect against workplace hazards, including hard hats, welding helmets, gloves and flame-resistant clothing.'],
                      ['Preheating', 'Heating the base metal to a required minimum temperature before welding to reduce the risk of cracking, especially in higher-carbon and alloy steels.'],
                      ['Puddle', 'The pool of molten base metal and filler metal that solidifies to form the weld bead.'],
                      ['Regulator', 'Equipment used to reduce and control the pressure of gas flowing from a cylinder to the welding or cutting torch.'],
                      ['SAW (Submerged Arc Welding)', 'An automatic welding process in which the arc is submerged beneath a blanket of granular flux, producing high deposition rates with excellent weld quality.'],
                      ['SDS (Safety Data Sheet)', 'A document required by WHMIS that provides information about the properties, hazards and safe handling of hazardous materials.'],
                      ['Slag', 'A non-metallic by-product formed during welding processes such as SMAW, FCAW and SAW from the melting of flux and impurities.'],
                      ['SMAW (Shielded Metal Arc Welding)', 'A manual arc welding process using a consumable flux-coated electrode; also known as stick welding. Widely used for structural and maintenance welding.'],
                      ['UV (Ultraviolet) radiation', 'Electromagnetic radiation produced by the welding arc that can cause arc eye (photokeratitis) and skin burns without appropriate eye and skin protection.'],
                      ['WHMIS (Workplace Hazardous Materials Information System)', 'Canada\'s system for identifying and communicating the hazards of controlled products in the workplace, aligned with the Globally Harmonized System (GHS).'],
                      ['WLL (Working Load Limit)', 'The maximum load that a piece of rigging equipment is designed to handle under normal conditions, as specified by the manufacturer.'],
                      ['WPDS (Welding Procedures Data Sheet)', 'A document, similar to a WPS, used in some provinces to describe the essential variables and parameters for a qualified welding procedure.'],
                      ['WPS (Welding Procedure Specification)', 'A qualified document that specifies the welding process, base materials, filler materials, joint design, preheat requirements and other parameters required to produce an acceptable weld.'],
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 2 — Safety on the Job
          // ============================================================
          {
            id: 'ch-02',
            number: 2,
            title: 'Safety on the Job',
            subtitle: 'MWA A-3 · Performs Safety-Related Activities (25% of MWA A)',
            isFree: true,
            estimatedMinutes: 50,
            sections: [
              {
                id: 'ch02-s1',
                title: '2.1 The Safe Work Environment',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Welding is one of the most hazard-rich trades in Canada. Every shift involves open arcs, high-intensity UV/IR radiation, compressed gases, hot metal, electrical current, combustible materials, and potentially toxic fumes. Jurisdictional Occupational Health and Safety (OH&S) legislation establishes the minimum standards, but safety culture — the shared commitment of every person on site — is what actually prevents injuries. Red Seal welders are expected to lead by example, perform thorough hazard assessments before beginning any task, and intervene when unsafe conditions are observed.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Hazard Assessment',
                    definition: 'A systematic inspection of a work area to identify potential hazards before work begins. Welders must identify risks related to the physical environment, energy sources, chemical exposures and environmental conditions (e.g., weather, time of day), and report findings according to company policies and OH&S requirements.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'WHMIS (Workplace Hazardous Materials Information System)',
                    definition: 'Canada\'s national system for classifying and communicating information about hazardous products used in the workplace. Employers must train workers on WHMIS, and Safety Data Sheets (SDS) must be accessible for all controlled products on site.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'AHJ (Authority Having Jurisdiction)',
                    definition: 'The organization, office or individual responsible for enforcing the requirements of a code or standard, or their designated representative. In welding contexts this is typically the provincial/territorial OH&S authority and the applicable inspection body.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Welder-Specific Worksite Hazards',
                    items: [
                      'Arc radiation — UV and infrared light from the welding arc can cause arc eye (photokeratitis) and severe skin burns within seconds of unprotected exposure',
                      'Toxic fumes and gases — welding fumes contain metal oxides, fluorides and ozone; certain materials (galvanized steel, stainless steel, coated metals) produce especially hazardous fumes including hexavalent chromium and zinc oxide',
                      'Electrical shock — welding circuits operate at voltages sufficient to cause electrocution, particularly in wet or confined-space environments',
                      'Fire and explosion hazards — the OFC and plasma arc processes produce sparks that can ignite combustibles up to 10 metres away; hydrogen sulphide (H2S) and fuel gases present explosion risks',
                      'Burns — contact with hot metal, spatter and hot slag causes thermal burns; electric arc can cause contact burns even without direct touch',
                      'Compressed gas cylinder hazards — damaged or improperly stored cylinders can become projectiles if the valve is sheared off; fuel and oxygen cylinders must be segregated',
                      'Confined space hazards — welding in confined spaces presents risks of oxygen displacement by shielding or purging gases, accumulation of toxic fumes and flash fires',
                      'Noise — grinding, chipping and certain cutting processes produce noise levels above occupational exposure limits, requiring hearing protection',
                      'Heavy lifting and repetitive stress — handling plate, pipe and structural steel can cause musculoskeletal injuries without proper technique and mechanical assists',
                      'Radiographic inspection hazards — ionizing radiation used in weld inspection requires strict exclusion zones and radiation safety protocols',
                      'Working at heights — welding on scaffolding or aerial work platforms presents fall hazards; hot work while elevated adds fire and burn risks below',
                      'Extreme temperatures — outdoor welding in Canadian winters affects material properties, increases cracking risk if preheat is not applied, and creates cold stress hazards for workers',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Welders must report all hazards to their supervisor and participate in safety meetings to ensure the entire crew understands current risks. Hot work permits are required for welding in areas where combustible materials or gases may be present. Confined space entry permits require atmospheric testing, a designated attendant outside the space, and an emergency rescue plan before any welder enters.',
                  },
                ],
              },
              {
                id: 'ch02-s2',
                title: '2.2 Personal Protective Equipment',
                content: [
                  {
                    type: 'paragraph',
                    text: 'PPE selection for welders must account for the specific welding process, base material, and environmental conditions. The CSA and AWS standards provide guidance on lens shade selection for different processes and amperages. No single PPE item protects against all hazards — welders must layer protection appropriately and inspect all PPE before each use. Defective PPE must be removed from service immediately and replaced before work continues.',
                  },
                  {
                    type: 'table',
                    headers: ['PPE Item', 'Hazard Addressed', 'Key Selection / Maintenance Note'],
                    rows: [
                      ['Welding helmet with filter lens', 'UV/IR arc radiation, spatter', 'Lens shade selected by process and amperage (SMAW: shade 10–14; GTAW: 8–13; GMAW/FCAW: 10–13). Auto-darkening helmets must meet ANSI/CSA standards. Inspect lens for cracks and pitting.'],
                      ['Safety glasses (under helmet)', 'Flying debris when helmet is lifted; grinding sparks', 'Must meet CSA Z94.3. Worn at all times on the shop floor, including under the welding helmet.'],
                      ['Face shield', 'Grinding debris, spatter, chemical splash', 'Used in addition to safety glasses during grinding, chipping and chemical cleaning operations. Inspect for cracks.'],
                      ['Welding gloves', 'Burns from spatter, hot metal, UV radiation', 'Heavy leather gloves for SMAW; lighter, more dexterous gloves for GTAW. Inspect for holes and worn areas. Never use wet gloves — moisture conducts electricity.'],
                      ['Flame-resistant (FR) clothing', 'Burns from spatter, radiant heat, arc flash', 'Must cover all exposed skin. Sleeves down, collar up. Cotton or wool is acceptable; synthetic fabrics melt and cause severe burns. Dedicated FR coveralls recommended.'],
                      ['Safety footwear', 'Crushing injuries from falling steel; burns from spatter', 'CSA-approved steel-toed boots with metatarsal protection. Leather uppers preferred; synthetic boots can melt from spatter.'],
                      ['Hard hat', 'Falling objects, overhead hazards', 'Class E (electrical) rated where electrical hazards are present. Inspect shell and suspension regularly.'],
                      ['Hearing protection (ear plugs / ear muffs)', 'Noise-induced hearing loss from grinding, chipping, air arc gouging', 'Select protection appropriate to noise level. Pre-moulded plugs or banded ear plugs for intermittent exposure; ear muffs for high-level sustained noise.'],
                      ['Respirator / PAPR', 'Welding fumes, toxic metal oxides, ozone', 'Half-mask respirator with P100 filters minimum for most welding fumes. Full-face PAPR for stainless steel, galvanized, or lead-painted base metals. Match filter to specific fume hazard.'],
                      ['Fall arrest harness and lanyard', 'Falls from heights above 3 metres (varies by jurisdiction)', 'Full-body harness with shock-absorbing lanyard. Inspect all stitching, buckles and snap hooks before each use. Connect to certified anchor points.'],
                      ['Welding apron / chaps', 'Spatter burns to legs and body when positioned overhead or out of position', 'Leather construction. Used in addition to FR clothing for positional welding, pipe welding and heavy SMAW work.'],
                      ['Air hood / supplied-air respirator', 'Highly toxic fumes in confined spaces or when welding on coated or exotic metals', 'Required when atmospheric monitoring indicates levels above permissible exposure limits. Airline must be connected to a breathable air supply, not compressed nitrogen or oxygen.'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Welders are responsible for inspecting their own PPE before every shift. Items showing worn, damaged, expired or defective conditions must be removed from service and reported. Never modify PPE or use it for a purpose other than its design intent.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Safety Equipment Beyond PPE',
                    items: [
                      'Fire extinguisher — appropriate class (ABC dry chemical for general use; CO2 for electrical fires) must be within immediate reach during all hot work',
                      'Fire blanket — used to smother small fires and to protect combustible materials from welding spatter',
                      'Welding screens and curtains — protect other workers from arc radiation and spatter; non-combustible materials only',
                      'Fume extraction system — local exhaust ventilation at the source is preferred over general ventilation; mandatory for enclosed and confined spaces',
                      'Gas monitor — detects oxygen deficiency, combustible gases and toxic gases such as H2S and CO; required before and during confined space entry',
                      'Spill containment kit — for managing fuel, oil or chemical spills; used in conjunction with proper disposal according to environmental regulations',
                      'Grinder guards — all angle grinders and bench grinders must have guards in place; never remove or defeat a guard',
                    ],
                  },
                ],
              },
              {
                id: 'ch02-s3',
                title: '2.3 Lock-Out / Tag-Out (LOTO)',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Lock-Out / Tag-Out is a mandatory safety procedure designed to protect workers from the unexpected release of hazardous energy during servicing or maintenance of equipment. For welders, LOTO applies before cleaning or servicing welding power sources, stationary cutting machinery, wire feeders, and any mechanized or automated welding system. Every worker in the area must apply their own personal lock — never share a lock or rely on another person\'s lock to protect your safety.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Zero-Energy State',
                    definition: 'The condition of a machine or system in which all energy sources have been isolated, released, blocked or restrained so that no accidental startup or release of stored energy is possible. Energy sources include electrical, pneumatic, hydraulic, gravity, thermal and spring-loaded mechanical energy.',
                  },
                  {
                    type: 'numbered',
                    title: '8-Step LOTO Procedure',
                    items: [
                      'Notify all affected workers that the equipment is being locked out and the reason for the lockout',
                      'Identify all energy sources connected to the equipment (electrical, pneumatic, hydraulic, stored mechanical)',
                      'Shut down the equipment using the normal stopping procedure',
                      'Isolate all energy sources at their control points (disconnect switches, valves, breakers)',
                      'Apply personal lock(s) and tag(s) to each energy isolation point',
                      'Release or restrain all stored or residual energy (bleed pressure lines, block gravity-loaded parts, discharge capacitors)',
                      'Verify zero-energy state by attempting to start the equipment and testing for residual energy',
                      'Perform the required service or maintenance work safely',
                    ],
                  },
                  {
                    type: 'table',
                    headers: ['LOTO Equipment Item', 'Purpose'],
                    rows: [
                      ['Personal padlock (keyed unique)', 'Each worker applies their own lock to the energy isolation point; only they hold the key'],
                      ['Lockout hasp', 'Allows multiple locks to be applied to a single isolation point when several workers are involved'],
                      ['Lockout tag', 'Identifies the worker who applied the lock, date, reason, and contact information; tags alone are not sufficient — a lock must accompany every tag'],
                      ['Lockout station / shadow board', 'Centralized storage for LOTO equipment on the worksite; ensures equipment is always available'],
                      ['Lockout valve covers', 'Plastic covers that fit over ball valves or gate valves to prevent inadvertent opening during lockout'],
                      ['Circuit breaker lockout devices', 'Clip-on or clamp-on devices that prevent a breaker from being switched to the ON position while locked out'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Common Energy Isolation Methods in Welding',
                    items: [
                      'Welding power sources — disconnect at the main electrical panel and lock the breaker; unplug welding cables from the machine',
                      'Oxy-fuel cutting torches — close cylinder valves, bleed hoses of residual gas pressure, confirm zero pressure on both regulators',
                      'Plasma arc cutting machines — de-energize at the main disconnect; bleed compressed air supply lines',
                      'Pneumatic grinders and tools — close supply valve, lock valve, bleed the line to release stored air pressure',
                      'Mechanized welding carriages and positioners — disconnect motor drives and apply mechanical braking or blocking',
                      'Wire feeders — disconnect power and remove wire spool to prevent inadvertent feeding',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 3 — Tools and Equipment
          // ============================================================
          {
            id: 'ch-03',
            number: 3,
            title: 'Tools and Equipment',
            subtitle: 'MWA A-1, A-2 · Maintains Tools and Equipment; Uses Access and Material Handling Equipment (25% + 15% of MWA A)',
            isFree: true,
            estimatedMinutes: 60,
            sections: [
              {
                id: 'ch03-s1',
                title: '3.1 Hand, Power, Layout and Measuring Tools',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Welders use a broad range of hand, power, layout and measuring tools in every phase of their work. Proper maintenance is not optional — worn or damaged tools produce poor quality work, create safety hazards, and cost the employer money in waste and rework. Tools must be cleaned, lubricated and inspected after each use, stored according to manufacturers\' specifications, and calibrated on a regular schedule. Any tool identified as worn, damaged or defective must be tagged out and removed from service immediately.',
                  },
                  {
                    type: 'table',
                    headers: ['Tool / Equipment', 'Primary Use in Welding', 'Key Maintenance Note'],
                    rows: [
                      ['Chipping hammer', 'Removing slag from SMAW, FCAW and SAW welds', 'Inspect head for mushrooming; grind back mushroomed striking faces to prevent projectile hazard. Wear safety glasses when chipping.'],
                      ['Wire brush (hand)', 'Cleaning weld beads and surfaces between passes', 'Use stainless steel brushes only on stainless steel and aluminum to avoid carbon steel contamination. Replace when bristles become bent or sparse.'],
                      ['Angle grinder', 'Grinding weld flush, back-grinding, surface preparation', 'Always use the correct disc for the material (dedicated discs for stainless and aluminum). Inspect disc for cracks or chips before mounting. Ensure guard is in place. Do not exceed rated RPM.'],
                      ['Combination square set', 'Verifying 90° and 45° angles, scribing lines', 'Check for accuracy against a reference surface regularly. Handle carefully — drops can alter the blade\'s squareness.'],
                      ['Measuring tape', 'Measuring and transferring dimensions', 'Inspect for kinks and damage to the blade. Keep the hook end square. Return to case after use.'],
                      ['Scriber', 'Marking cut lines on metal surfaces', 'Keep point sharp. Store with point covered to protect the tip and prevent injury.'],
                      ['Soapstone marker', 'Marking layout lines on steel', 'Mark lines that are visible against the dark steel surface. Soapstone withstands heat better than chalk or pencil.'],
                      ['Center punch', 'Marking drill hole centers; preventing drill bit from wandering', 'Keep point sharp and free of mushrooming. Use with proper hammer weight.'],
                      ['Trammel points', 'Scribing large arcs and circles on plate and template material', 'Inspect for straightness of the bar and security of the locking screws before use.'],
                      ['Vernier caliper', 'Precise measurement of thickness, inside and outside dimensions', 'Zero before each use. Clean jaws. Store in protective case. Calibrate periodically against gauge blocks.'],
                      ['Bridge cam gauge', 'Measuring weld reinforcement, undercut depth, fillet weld throat and leg', 'Keep clean and free of weld spatter. Verify zero before measuring. Critical for weld inspection.'],
                      ['Hi-Lo gauge', 'Measuring pipe and plate internal misalignment (hi-lo) at joints', 'Keep clean. Critical for pipe fitting — excessive hi-lo causes stress concentrations and code rejection.'],
                      ['Fillet weld gauge', 'Verifying fillet weld leg size and throat', 'Use appropriate gauge for metric or imperial dimensions. Keep free of spatter and debris.'],
                      ['Temperature indicating crayons / pellets', 'Measuring preheat and interpass temperature at the weld zone', 'Select crayon rated for the required temperature. Mark the base metal at least 75 mm from the weld joint and observe the melt point.'],
                      ['Pyrometer / thermocouple', 'Measuring accurate surface temperature for preheat, interpass and postweld heat treatment', 'Calibrate regularly. Ensure contact probes are clean and in good condition for accurate readings.'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Tool Maintenance Principles',
                    items: [
                      'Inspect all tools before use — identify worn, damaged or defective items and remove them from service',
                      'Clean tools after every use — remove spatter, flux, cutting fluid and debris before storage',
                      'Lubricate moving parts — pneumatic tools require inline lubrication; grease fittings on machinery must be serviced per manufacturer\'s schedule',
                      'Check pneumatic tools — ensure air supply is dry and clean; use appropriate lubricants; never exceed the tool\'s rated air pressure',
                      'Calibrate measuring tools — layout and measuring instruments must be checked for accuracy and calibrated on a set schedule',
                      'Store properly — tools should be stored in designated locations, protected from damage, moisture and contamination',
                      'Sharpen striking tools — chisels, punches and chipping hammers must have proper cutting geometry and no mushrooming on the head',
                      'Document defects — removed tools should be tagged and reported so they can be repaired or replaced in a timely manner',
                    ],
                  },
                ],
              },
              {
                id: 'ch03-s2',
                title: '3.2 Access Equipment',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Welders frequently work at height — on structural steel, pressure vessels, shipbuilding scaffolding, refineries and industrial plant maintenance. Selecting the right access equipment, setting it up correctly, and operating it within its rated capacity are essential skills. Falls from height are a leading cause of fatal injuries in the trades. All access equipment must be inspected before use, and faulty equipment must be locked out and tagged out immediately.',
                  },
                  {
                    type: 'table',
                    headers: ['Access Equipment Type', 'Description and Application', 'Key Safety Rule'],
                    rows: [
                      ['Extension ladder', 'Non-self-supporting ladder used to access elevated work areas up to its rated height', 'Set at a 4:1 slope ratio (75°). Extend 1 metre above the landing point. Secure top and bottom. Three-point contact at all times when climbing.'],
                      ['Step ladder', 'Self-supporting A-frame ladder for access up to approximately 6 m', 'Never stand on the top cap or top step. Fully open and locked before use. Do not lean — reposition the ladder instead.'],
                      ['Scaffolding (tube-and-coupler / system)', 'Temporary elevated work platform built from tubing, couplers or proprietary frame components', 'Verify that scaffolding is erected by or under the supervision of a competent person. Check that all planks are secured, guardrails are in place, and base plates are on solid footing.'],
                      ['Aerial work platform (AWP / boom lift)', 'Self-propelled or trailer-mounted elevating platform reaching heights of 10–45 m', 'Operators require training and certification. Inspect prior to use. Check ground conditions and overhead clearances. Do not exceed rated working load.'],
                      ['Scissor lift', 'Vertical-only elevating platform; used indoors or on firm, level ground', 'Keep load within rated capacity. Do not move with workers in the elevated basket. Cordon off below the work area.'],
                      ['Swing stage (suspended scaffold)', 'Platform suspended from roof anchors, used on the exterior of structures', 'Engineered system — must be inspected by a competent person. Full-body harness connected to an independent lifeline required at all times.'],
                      ['Personnel basket (man basket)', 'Basket attached to crane hook used to position workers at specific locations', 'Requires engineered lift plan, crane operator certification, and a dedicated signal person. Fall arrest required inside the basket.'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Critical Access Equipment Safety Rules',
                    items: [
                      'Inspect all access equipment before each use — look for damaged components, missing pins, unsecured planks and loose connections',
                      'Never exceed rated working load capacity — account for the weight of the welder, tools, welding cables and materials',
                      'Cordon off the work area below — falling tools and spatter are hazards to workers at lower levels',
                      'Wear fall protection — full-body harness connected to a certified anchor point whenever above the fall protection threshold for your jurisdiction',
                      'Ensure footing is solid and level — use base plates and mudsills under scaffold legs on soft ground; check that ground conditions can support the load',
                      'Protect scaffold planks from fire — never weld directly over scaffold planks; use fire blankets or steel decking; keep a fire watch during and after hot work',
                      'Lock out faulty access equipment — defective access equipment must be tagged out and removed from service until repaired',
                    ],
                  },
                ],
              },
              {
                id: 'ch03-s3',
                title: '3.3 Rigging, Hoisting and Lifting',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Welders routinely handle large, heavy steel components — structural beams, pressure vessel shells, pipe sections and fabricated assemblies. Safe rigging practice requires calculating the weight and centre of gravity of the load, selecting appropriate rigging hardware, and communicating clearly with the crane operator using standardized hand signals. Rigging equipment must be inspected before each use and any item showing damage must be removed from service.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'WLL (Working Load Limit)',
                    definition: 'The maximum load that a piece of rigging equipment is designed to handle under normal conditions of use, as specified by the manufacturer and marked on the equipment. The WLL is always less than the breaking strength by a safety factor typically ranging from 4:1 to 5:1. Never exceed the WLL of any component in the rigging assembly.',
                  },
                  {
                    type: 'table',
                    headers: ['Rigging Equipment', 'Application', 'Key Limitation'],
                    rows: [
                      ['Wire rope sling', 'General lifting of structural steel, machinery and fabricated components', 'WLL decreases significantly as sling angle decreases below 60°. Inspect for broken wires, kinks, crushing and corrosion.'],
                      ['Chain sling (alloy steel)', 'High-temperature lifts; areas where abrasion would damage wire rope', 'Never use hardware-grade chain. Inspect for stretched links, cracks and bent hooks. Alloy-steel only for lifting.'],
                      ['Web sling (synthetic)', 'Lifting finished or sensitive surfaces to prevent marring', 'Inspect for cuts, abrasion, UV degradation and chemical damage. Do not use near open flames or sharp edges without padding.'],
                      ['Shackle', 'Connecting rigging to load and to crane hook', 'Pin must be fully threaded and moused. Do not exceed rated load. Side-loading reduces WLL significantly.'],
                      ['Spreader bar', 'Distributing sling attachment points to control load orientation and reduce sling angles', 'Must be rated for the lift. Attach at the designated pick points only.'],
                      ['Beam clamp', 'Attaching hoisting equipment to structural beams', 'Select clamp rated for the beam flange width and load. Secure with locking mechanism.'],
                      ['Load softeners', 'Protecting synthetic slings from sharp edges of the load', 'Position at all corners and edges where the sling contacts the load.'],
                      ['Tag line (guide rope)', 'Controlling load swing and orientation during the lift', 'Never wrap tag line around the hand. Use sufficient length to stand clear of the load path.'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Pre-Lift Checklist',
                    items: [
                      'Identify the weight and centre of gravity of the load — calculate or obtain from material documentation',
                      'Select rigging equipment with adequate WLL for the load and sling angles — use a rigging chart to account for angle reductions',
                      'Inspect all rigging equipment before use — remove any damaged, deformed or corroded items from service',
                      'Confirm the crane or hoist is rated for the total load — account for rigging weight',
                      'Identify and communicate the planned lift path — confirm all personnel are clear of the lift zone',
                      'Establish a designated signal person and confirm hand signals with the crane operator',
                      'Attach rigging to certified pick points on the load — never rig to temporary welds, tacking, or non-engineered attachment points',
                      'Perform a trial lift — raise the load a few centimetres and confirm stability before proceeding',
                      'Use tag lines to control load swing — never use hands to control a suspended load',
                      'Set the load down on adequate dunnage — ensure the load is stable and clear of workers before releasing tension on the slings',
                    ],
                  },
                ],
              },
              {
                id: 'ch03-s4',
                title: '3.4 Welding and Cutting Equipment',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Welders must maintain the equipment they use every day — power sources, welding guns, cables, wire feeders, torches and gas supply systems. Equipment in poor condition produces poor-quality welds, creates safety risks and leads to costly downtime. All welding equipment must be inspected before use, LOTO procedures must be followed before any servicing, and maintenance records must be kept according to company policies.',
                  },
                  {
                    type: 'table',
                    headers: ['Equipment Item', 'Primary Function', 'Key Maintenance Action'],
                    rows: [
                      ['Welding power source (constant current)', 'Provides stable amperage for SMAW and GTAW processes', 'Clean or blow out internal dust and debris regularly. Inspect all external connections. Check that cooling fans operate freely.'],
                      ['Welding power source (constant voltage)', 'Provides stable voltage for GMAW, FCAW, MCAW and SAW processes', 'Inspect wire feed connections and drive roll settings. Verify voltage and wire feed speed calibration.'],
                      ['Electrode holder', 'Holds SMAW electrode and transfers welding current', 'Inspect insulation for cracks, burns and exposed metal. Replace jaws when worn — poor contact causes overheating and arc starting problems.'],
                      ['Welding cables and connectors', 'Conduct welding current between power source, electrode holder and work lead clamp', 'Inspect insulation along the full cable length. Never coil cables tightly around the body — the electromagnetic field increases. Repair or replace damaged insulation immediately.'],
                      ['Work lead clamp (ground clamp)', 'Completes the welding circuit by connecting the work cable to the base metal', 'Ensure firm, low-resistance contact with clean base metal. Poor connection causes voltage drop and arc instability.'],
                      ['Wire feeder', 'Feeds consumable wire electrode at a controlled speed for GMAW, FCAW, MCAW and SAW', 'Inspect drive rolls for wear and correct groove size for wire diameter. Check liner for kinks and blockages. Clean drive rolls regularly.'],
                      ['Welding gun (GMAW/FCAW)', 'Directs wire, shielding gas and current to the weld zone', 'Inspect contact tip for wear and spatter buildup — replace when bore is elongated. Clean nozzle and apply anti-spatter. Check liner condition and gas diffuser.'],
                      ['GTAW torch (water- or air-cooled)', 'Holds tungsten electrode and delivers shielding gas in GTAW', 'Inspect collet, collet body and back cap for damage. Check gas lens if used. Inspect torch body and cable for cracks and leaks.'],
                      ['Gas regulators', 'Reduce cylinder pressure to working pressure for welding or cutting', 'Inspect for leaks using soapy water. Never use oil or grease — contact with oxygen causes explosion. Verify accuracy against a calibrated gauge.'],
                      ['Shielding gas hoses', 'Deliver shielding gas from regulator to torch or gun', 'Inspect for cracks, kinks and leaks. Replace damaged hoses. Use creep test or soap solution to check for leaks.'],
                      ['Electrode oven (portable / stationary)', 'Stores SMAW electrodes at controlled temperature to prevent moisture absorption', 'Set at manufacturer-specified temperature (typically 120–150°C for storage). Inspect heating elements and temperature control. Rebake electrodes per WPS if moisture absorption is suspected.'],
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 4 — Organizing Work
          // ============================================================
          {
            id: 'ch-04',
            number: 4,
            title: 'Organizing Work',
            subtitle: 'MWA A-4 · Organizes Work (15% of MWA A)',
            isFree: false,
            estimatedMinutes: 55,
            sections: [
              {
                id: 'ch04-s1',
                title: '4.1 Documentation and Reference Material',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Before a single arc is struck, welders must gather, review and understand all relevant documentation for the job. This includes engineering drawings, welding procedure specifications, material traceability documents and health and safety requirements. Errors in document interpretation lead to fabrication mistakes that are costly to correct and, in critical applications such as pressure vessels and structural steel, can compromise structural integrity and worker safety.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'WPS / WPDS (Welding Procedure Specification / Welding Procedures Data Sheet)',
                    definition: 'A qualified document that prescribes the essential variables of a welding procedure — including process, base metal, filler metal, joint design, preheat and interpass temperature, shielding gas, travel speed and position. Welders must weld within the parameters stated in the applicable WPS/WPDS. Deviation from essential variables requires a new procedure qualification.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'MTR (Mill Test Report)',
                    definition: 'A certification document issued by a steel mill that records the chemical composition and mechanical properties (yield strength, tensile strength, elongation, Charpy impact values) of a specific heat of steel. MTRs are used to verify that base materials meet the requirements of the design specification and are essential for material traceability on pressure vessel and structural projects.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Key Work-Related Documents for Welders',
                    items: [
                      'WPS/WPDS — specifies all essential welding variables; must be available at the work station during welding',
                      'Engineering drawings and fabrication drawings — provide dimensions, tolerances, joint designs, weld symbols and assembly sequence',
                      'Bill of materials (BOM) — lists all required materials with specifications, quantities and identification',
                      'Inspection Test Plan (ITP) — identifies inspection hold points and witness points throughout fabrication',
                      'Mill test reports (MTR) — verify material grade, chemical composition and mechanical properties for traceability',
                      'WHMIS Safety Data Sheets (SDS) — required for all hazardous materials used on the job',
                      'Time sheets and progress reports — record work completed and track project progress against schedule',
                      'Weld maps — drawings that assign weld joint numbers to each weld on a structure for inspection and traceability',
                      'Dimensional check reports — record measurements taken during and after fabrication to verify compliance with drawing tolerances',
                      'Hot work permits and confined space entry permits — regulatory documents required before commencing high-risk work activities',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Welders must also be proficient in converting between imperial and metric measurements, as Canadian fabrication shops work in both systems depending on the client and industry. Conversion errors are a common cause of dimensional defects. Always verify unit systems at the start of any job and confirm conversions by back-calculation.',
                  },
                ],
              },
              {
                id: 'ch04-s2',
                title: '4.2 Interpreting Drawings and Welding Symbols',
                content: [
                  {
                    type: 'paragraph',
                    text: 'The ability to read and interpret fabrication drawings is one of the most critical skills a welder possesses. Drawings communicate joint design, weld type, size, length, position, finish requirements and inspection criteria — all without the engineer or designer being present on the shop floor. Welding symbols, defined by AWS A2.4 and ISO 2553, are the universal language for this communication.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Welding Symbol',
                    definition: 'A standardized graphic symbol placed on a drawing to communicate all information required to produce a specific weld. A complete welding symbol includes a reference line, an arrow pointing to the joint, and optionally: a weld symbol, weld dimensions, groove angle, root opening, finish method, contour symbol, tail with WPS reference, and flags for field welds or all-around welds.',
                  },
                  {
                    type: 'table',
                    headers: ['Drawing Element', 'What It Communicates', 'Welder\'s Action'],
                    rows: [
                      ['Weld symbol (below reference line)', 'Weld type on the arrow side of the joint', 'Weld the joint on the side the arrow points to as specified'],
                      ['Weld symbol (above reference line)', 'Weld type on the other side of the joint', 'Weld the opposite side of the joint as specified'],
                      ['Number to left of weld symbol', 'Weld size (fillet leg or groove depth)', 'Produce a weld of exactly the specified size — never undersize'],
                      ['Number to right of weld symbol', 'Weld length and pitch (if intermittent)', 'Weld the specified length with the specified centre-to-centre spacing'],
                      ['Circle on the reference line', 'All-around weld — weld completely around the joint', 'Weld continuously around all four sides or the full perimeter of the joint'],
                      ['Flag on the reference line', 'Field weld — to be completed at the site, not the shop', 'Do not weld in the shop; this joint is reserved for site installation'],
                      ['Contour symbol (flat, convex, concave)', 'Required final weld profile', 'Grind or finish weld to the specified contour as indicated'],
                      ['Finish symbol (G, C, M)', 'Method of finishing (G=grind, C=chip, M=machined)', 'Apply the specified finishing method to achieve the required contour'],
                      ['Root opening (in groove symbol)', 'Required gap between members at the joint root', 'Set up and tack at the specified root opening — verify with hi-lo gauge before welding'],
                      ['Groove angle', 'Total included angle of the groove preparation', 'Verify preparation angle with a bevel gauge before fit-up and tacking'],
                      ['Tail with text/number', 'Reference to applicable WPS, specification or process requirement', 'Locate and follow the referenced WPS/WPDS for this joint'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Types of Drawings Welders Read',
                    items: [
                      'Assembly drawings — show how all components fit together in the final product; used for sequencing work',
                      'Detail drawings — provide dimensions and weld symbols for individual components or subassemblies',
                      'Fabrication drawings — shop-specific drawings generated from engineering drawings with cut lists and material callouts',
                      'Isometric drawings — three-dimensional representations of piping systems showing fittings, flanges, and weld locations',
                      'P&ID drawings (Piping and Instrumentation Diagrams) — show the flow path and instrumentation for piping systems; used for understanding system function',
                      'Erection drawings — show how structural steel is field-erected and identifies field weld locations',
                    ],
                  },
                ],
              },
              {
                id: 'ch04-s3',
                title: '4.3 Planning Job Tasks and Organizing Materials',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Efficient job planning reduces wasted motion, material loss and rework. Before beginning fabrication, welders sequence the order of operations, identify all required materials and equipment, coordinate with other trades, and set up the work area for safe and efficient production. On large projects, welders generate cut lists and parts lists directly from the engineering drawings and bill of materials.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Job Planning Steps',
                    items: [
                      'Review all applicable drawings, the WPS/WPDS and the ITP before starting work',
                      'Identify all materials required and verify they match the bill of materials — check grade, size and MTR traceability',
                      'Generate a cut list from the drawings — include material type, size, quantity and any special preparation requirements',
                      'Sequence the order of operations to minimize distortion — typically, weld balanced about the neutral axis and alternate sides to control heat input',
                      'Identify preheat requirements from the WPS/WPDS — ensure heating equipment is available before tacking',
                      'Schedule coordination with other trades (fitters, pipe fitters, NDE inspectors) to avoid conflicts and delays',
                      'Set up the work area — organize materials in the sequence they will be used; stage welding consumables, tools and PPE within reach',
                      'Identify inspection hold points on the ITP — do not proceed past a hold point without inspector sign-off',
                      'Anticipate distortion — use jigs, fixtures, strongbacks and planned welding sequences to control dimensional movement',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Material organization is equally important. Materials must be gathered according to the cut list, verified against the bill of materials (including checking heat numbers against MTRs), documented in the inventory system, and queued in the correct sequence for assembly. Identification markings — heat numbers, grain direction indicators, lot and job numbers, material grade — must be transferred from stock to cut parts to maintain full traceability through fabrication. Materials must be protected from damage during storage using appropriate coverings such as cardboard, blankets or sheeting.',
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 5 — Routine Trade Activities
          // ============================================================
          {
            id: 'ch-05',
            number: 5,
            title: 'Routine Trade Activities',
            subtitle: 'MWA A-5 · Performs Routine Trade Activities (28% of MWA A)',
            isFree: false,
            estimatedMinutes: 70,
            sections: [
              {
                id: 'ch05-s1',
                title: '5.1 Quality Inspection',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Quality assurance is not the exclusive responsibility of the inspector — it is the welder\'s first responsibility. Welders perform ongoing visual inspection of their own work throughout the fabrication process: before welding (checking fit-up, dimensions and preheat), during welding (checking for distortion and visible discontinuities between passes), and after welding (verifying final dimensions, weld profile and surface condition). This in-process inspection prevents costly repairs and ensures code-compliant work.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Weld Discontinuity vs. Weld Defect',
                    definition: 'A discontinuity is any interruption in the intended structure of a weld — such as porosity, undercut, lack of fusion, or slag inclusion. A discontinuity becomes a defect only when it exceeds the acceptance criteria defined in the applicable code (e.g., CSA W59, AWS D1.1, or ASME Section IX). Welders must understand the acceptance criteria of the governing code for each project.',
                  },
                  {
                    type: 'table',
                    headers: ['Discontinuity / Defect', 'Description and Cause', 'Inspection Method and Corrective Action'],
                    rows: [
                      ['Porosity', 'Gas pockets trapped in the solidifying weld metal; caused by contamination, inadequate shielding gas coverage, moisture in electrodes or base metal', 'Visual inspection; NDE (RT, UT, PT). Grind out porosity and re-weld if it exceeds code limits.'],
                      ['Undercut', 'A groove melted into the base metal at the weld toe, reducing the effective throat and creating a stress concentration; caused by excessive current, incorrect electrode angle or fast travel speed', 'Visual inspection with bridge cam gauge to measure depth. Repair by depositing a butter pass if depth exceeds code limit.'],
                      ['Lack of fusion (cold lap)', 'Weld metal that has not fused with the base metal or previous weld bead; caused by insufficient heat, incorrect technique or contamination', 'Primarily detected by RT or UT. Grind out the unfused area completely and re-weld.'],
                      ['Incomplete penetration (IP)', 'Failure of the weld to fully penetrate the root of the joint; caused by insufficient heat, wrong root opening or poor technique', 'Detected visually from the back side (if accessible), or by RT/UT. Back-gouge and re-weld the root.'],
                      ['Slag inclusion', 'Non-metallic slag trapped in the weld; caused by failure to clean between passes, incorrect technique or poor accessibility', 'Detected visually after chipping, or by RT. Grind out the inclusion and re-weld.'],
                      ['Overlap', 'Weld metal that has flowed beyond the weld toe and lies on the base metal surface without fusion; caused by too-slow travel speed or too-low current', 'Visual inspection. Grind the overlap to blend smoothly with the base metal.'],
                      ['Arc strike', 'An unintentional arc drawn on the base metal surface outside the weld joint; creates a hardened, crack-prone zone', 'Visual inspection. Grind flush and check with MT or PT for cracks. Notify the inspector — arc strikes on pressure vessels and high-strength steel are serious defects.'],
                      ['Spatter', 'Droplets of weld metal expelled from the weld zone and deposited on the base metal surface', 'Visual inspection. Remove with chipping hammer and wire brush or grinder. Excessive spatter indicates incorrect parameters.'],
                      ['Distortion', 'Dimensional change in the weldment caused by non-uniform thermal expansion and contraction', 'Dimensional measurement with tape, squares and levels. Correct with controlled back-heating or mechanical straightening per approved procedure.'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Non-Destructive Testing (NDT) Methods Applicable to Welding',
                    items: [
                      'Visual Inspection (VT) — the first and most common method; detects surface discontinuities, incorrect profiles and dimensional non-conformances',
                      'Liquid Penetrant Testing (PT) — dye or fluorescent penetrant applied to the surface reveals surface-breaking cracks and porosity; applicable to all non-porous materials',
                      'Magnetic Particle Testing (MT) — magnetic yoke and iron filings reveal surface and slightly sub-surface discontinuities in ferromagnetic materials only',
                      'Radiographic Testing (RT) — X-ray or gamma-ray imaging reveals internal discontinuities including porosity, inclusions and lack of fusion; produces a permanent film record',
                      'Ultrasonic Testing (UT) — high-frequency sound waves detect internal discontinuities; phased array UT (PAUT) provides detailed cross-sectional imaging',
                      'Hydrostatic Testing — pressure vessels and piping are pressurized with water to detect leaks and verify structural integrity',
                    ],
                  },
                ],
              },
              {
                id: 'ch05-s2',
                title: '5.2 Marking, Temperature Control and Consumable Storage',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Material and weld identification markings ensure full traceability from raw material to finished product. When steel is cut from stock, the identification markings (heat number, material grade, lot number, grain direction) must be transferred from the stock piece to every cut part before the original marking is lost. Welders also mark their own identification symbol on every completed weld joint where required by the job specification — typically using a low-stress stamp or soapstone marker.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Preheat Temperature',
                    definition: 'The minimum temperature that the base metal must reach in the weld zone and a specified distance on each side of the joint before welding begins. Preheat slows the cooling rate, reduces the risk of hydrogen-induced cracking in higher-carbon and alloy steels, and minimizes distortion. Required preheat temperatures are specified in the WPS/WPDS and derived from the base metal\'s carbon equivalent.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Interpass Temperature',
                    definition: 'The maximum temperature the weld zone is permitted to reach between weld passes. Exceeding the maximum interpass temperature can alter the mechanical properties of the base metal and weld metal, particularly in quenched-and-tempered steels and stainless steels. The WPS/WPDS specifies both minimum preheat and maximum interpass temperatures.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Temperature Control — Key Rules',
                    items: [
                      'Verify preheat temperature using temperature-indicating crayons or a contact pyrometer at least 75 mm from the joint edge before beginning any tacking or welding',
                      'Monitor interpass temperature between each weld pass — if the maximum is exceeded, allow the weldment to cool to the specified temperature before continuing',
                      'Apply heat uniformly — use a rosebud tip, induction coil or oven to distribute heat evenly; avoid localized overheating',
                      'Control the cooling rate — wrap finished weldments in insulating blankets where slow cooling is required to prevent cracking in high-carbon and alloy steels',
                      'Post-weld heat treatment (PWHT) — stress relief heat treatment may be required by the applicable code after welding; PWHT must be performed according to a written procedure within the specified time after welding',
                      'Hardness scales — Rockwell, Brinell and Vickers hardness tests are used to verify that heat treatment has achieved the required properties',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Improper storage of welding consumables is a leading cause of weld defects. SMAW electrodes must be stored in heated electrode ovens to prevent moisture pickup — low-hydrogen electrodes (E7018, E8018, etc.) are particularly susceptible. Moisture in the electrode coating releases hydrogen into the weld, which can cause hydrogen-induced cracking (also called cold cracking or delayed cracking) — a serious defect that may not appear until hours or days after welding. If electrodes are exposed to humidity, they must be rebaked according to the manufacturer\'s or WPS specification before use.',
                  },
                  {
                    type: 'table',
                    headers: ['Consumable Type', 'Storage Requirement', 'Key Hazard of Improper Storage'],
                    rows: [
                      ['Low-hydrogen SMAW electrodes (E7018, E8018)', 'Sealed original containers until use; opened containers in heated electrode oven at 120–150°C', 'Moisture absorption leads to hydrogen-induced cracking; rebake per manufacturer spec if exposed'],
                      ['Cellulosic SMAW electrodes (E6010, E6011)', 'Store in dry conditions at room temperature; do not heat — excess drying reduces moisture content below design level', 'Over-drying changes arc characteristics; under-drying causes porosity'],
                      ['Solid MIG wire (GMAW)', 'Keep sealed until use; store in dry, temperature-controlled environment to prevent surface oxidation and moisture pickup', 'Rust and contamination cause porosity and poor arc stability'],
                      ['Flux-cored wire (FCAW)', 'Reseal wire spools in original packaging when not in use; follow manufacturer storage temperature and humidity limits', 'Moisture in the flux core causes porosity and hydrogen-related defects'],
                      ['SAW flux', 'Store in dry heated area; use flux ovens if required by WPS; discard flux that has absorbed moisture', 'Wet flux causes severe porosity and can cause explosive spattering when heated'],
                      ['Gas cylinders (shielding and fuel)', 'Store vertically, secured with chains in designated areas; separate oxygen from fuel gases by minimum 6 m or a non-combustible barrier', 'Unsecured cylinders can tip over and shear valves, creating projectile hazard or rapid gas release'],
                    ],
                  },
                ],
              },
              {
                id: 'ch05-s3',
                title: '5.3 Selecting Welding Processes and Equipment Start-Up and Shut-Down',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Selecting the correct welding process and power source is a foundational skill that determines weld quality, productivity and code compliance. The WPS/WPDS will specify the required process for qualified procedures, but welders must understand the characteristics, advantages and limitations of each process in order to make sound decisions on unqualified repairs and fabrication work.',
                  },
                  {
                    type: 'table',
                    headers: ['Process', 'Power Source Type', 'Key Advantages', 'Key Limitations'],
                    rows: [
                      ['SMAW', 'CC (constant current)', 'Simple setup; portable; works outdoors; tolerant of contamination; all positions', 'Lower deposition rate; more welder skill required; frequent electrode changes; more spatter'],
                      ['GMAW (solid wire)', 'CV (constant voltage)', 'High deposition rate; low spatter with spray transfer; all positions with short-circuit transfer; no slag', 'Requires shielding gas; sensitive to wind and drafts; not as tolerant of contamination'],
                      ['FCAW (gas-shielded)', 'CV (constant voltage)', 'High deposition rate; better gap-bridging than solid wire; good for out-of-position with small wire', 'Requires shielding gas; more spatter than GMAW; slag removal required'],
                      ['FCAW (self-shielded)', 'CV (constant voltage)', 'No external shielding gas required; good for outdoor and field use; portable', 'Lower quality welds than gas-shielded; limited to specific applications; more fumes'],
                      ['MCAW', 'CV (constant voltage)', 'High deposition rate; low spatter; good mechanical properties; suitable for high-strength steels', 'Requires shielding gas; higher consumable cost than solid wire'],
                      ['GTAW', 'CC (constant current)', 'Highest weld quality; precise control; all metals including aluminum; no spatter', 'Very low deposition rate; requires high skill; not suitable for thick sections without filler'],
                      ['SAW', 'CC or CV (automatic)', 'Very high deposition rate; excellent quality; deep penetration; no arc flash or fumes at the operator station', 'Flat and horizontal positions only; requires flux handling; high equipment cost; not portable'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Equipment Start-Up and Shut-Down Checklist',
                    items: [
                      'Start-up: Inspect all cables, connections, hoses and nozzles for damage before energizing equipment',
                      'Start-up: Verify all gas connections are tight and regulators are set to the correct working pressure',
                      'Start-up: Confirm welding parameters match the WPS/WPDS before striking an arc',
                      'Start-up: Ensure the work lead clamp is securely attached to clean base metal close to the weld zone',
                      'Start-up: Verify PPE is in place before striking an arc — helmet, gloves, FR clothing, hearing protection',
                      'Shut-down: Shut off shielding gas at the cylinder valve first, then purge the hoses',
                      'Shut-down: Set the wire feeder to zero and retract wire clear of the weld zone',
                      'Shut-down: Shut down the power source per the manufacturer\'s procedure — allow cooling fans to run until the unit is cool',
                      'Shut-down: Coil cables and hoses neatly and store in designated locations to prevent tripping hazards and damage',
                      'Shut-down: Remove and properly store unused electrodes in heated ovens; never leave low-hydrogen electrodes exposed to ambient air',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'After welding, the final product must be finished to the requirements of the drawings and job specifications. This includes removing spatter, grinding weld profiles to the specified contour, chemically cleaning stainless steel with pickling paste to restore the passive layer, preparing weldments for subsequent operations such as galvanizing (which requires air bleeds and drain holes), and applying labels for traceability before dispatch.',
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 6 — Communication and Mentoring
          // ============================================================
          {
            id: 'ch-06',
            number: 6,
            title: 'Communication and Mentoring Techniques',
            subtitle: 'MWA A-6 · Uses Communication and Mentoring Techniques (2% of MWA A)',
            isFree: false,
            estimatedMinutes: 30,
            sections: [
              {
                id: 'ch06-s1',
                title: '6.1 Communication in the Workplace',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Effective communication is essential to safe and productive welding operations. Welders must communicate clearly with supervisors, inspectors, engineers, fitters, riggers and other trades throughout every project. Miscommunication about dimensions, weld parameters, sequence of operations or safety requirements can result in serious defects, rework, injury and project delays.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Key Communication Practices for Welders',
                    items: [
                      'Ask questions when instructions or drawings are unclear — it is always better to stop and clarify than to proceed on an assumption',
                      'Communicate deviations from drawings or specifications immediately — never knowingly weld a non-conforming joint without supervisor and inspector approval',
                      'Use standardized rigging hand signals when communicating with crane operators — verbal communication may not be possible due to noise or distance',
                      'Participate actively in safety meetings and toolbox talks — share observations about hazards and near-misses',
                      'Maintain legible, accurate records — weld logs, inspection records and time sheets must be completed clearly and truthfully',
                      'Use digital communication tools responsibly — drawings and WPS documents accessed on tablets or smartphones must be the current revision',
                      'Communicate shutdown and restart conditions clearly when handing over a job to another welder — ensure the next welder understands preheat requirements, electrode type, and where each joint was left',
                    ],
                  },
                ],
              },
              {
                id: 'ch06-s2',
                title: '6.2 Mentoring Apprentices',
                content: [
                  {
                    type: 'paragraph',
                    text: 'The welding trade is sustained by journeypersons who pass their skills, knowledge and professional standards to the next generation of apprentices. Mentoring is not just a courtesy — it is an obligation of the trade. Effective mentors demonstrate techniques clearly, explain the reasoning behind code requirements and safety rules, provide constructive feedback, and hold apprentices to the same standards they hold themselves.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Mentoring',
                    definition: 'A professional relationship in which an experienced journeyperson shares trade skills, knowledge and professional values with an apprentice. In the welding trade, mentoring includes demonstrating welding techniques, explaining safety requirements, reviewing and critiquing weld quality, and modelling professional standards of workmanship.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Principles of Effective Trade Mentoring',
                    items: [
                      'Demonstrate tasks clearly before asking the apprentice to attempt them — show the correct technique at a realistic pace',
                      'Explain the reason behind each requirement — understanding why a rule exists leads to better compliance and adaptation to new situations',
                      'Provide specific, constructive feedback — describe exactly what to improve and how, not just that something is wrong',
                      'Maintain consistent standards — hold apprentices to the same code requirements and safety standards that apply to your own work',
                      'Create a safe learning environment — apprentices should be able to ask questions without fear of ridicule; a question asked is a defect prevented',
                      'Recognize progress — acknowledge improvement and increased competence; positive reinforcement accelerates learning',
                      'Lead by example — your own attitude toward safety, quality and professionalism sets the standard for the apprentices around you',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
        ], // end Part 1 chapters
      }, // end Part 1
  
      // ============================================================
      // PART 2 — Layout and Fabrication
      // MWA B: Performs Layout and Fabrication of Components for Welding (22%)
      // ============================================================
      {
        id: 'part-2',
        number: 2,
        title: 'Layout and Fabrication',
        description: 'Part 2 covers the pre-welding skills of layout and fabrication — developing templates, transferring dimensions from drawings to material, preparing base metals, fitting components, and assembling weldments. This corresponds to MWA B (22% of the Red Seal exam), which is the second-largest section and tests the foundational precision work that determines whether the finished weldment meets drawing requirements.',
        chapters: [
  
          // ============================================================
          // CHAPTER 7 — Performing Layout
          // ============================================================
          {
            id: 'ch-07',
            number: 7,
            title: 'Performing Layout',
            subtitle: 'MWA B-7 · Performs Layout (44% of MWA B)',
            isFree: false,
            estimatedMinutes: 60,
            sections: [
              {
                id: 'ch07-s1',
                title: '7.1 Developing Templates',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Templates are patterns used to accurately transfer complex shapes and dimensions from drawings to stock material. They are essential for repetitive cuts, curved profiles, pipe saddle cutouts and any shape that cannot be accurately laid out directly on the material with standard measuring tools. A well-made template eliminates the need to re-calculate dimensions for each part, reduces scrap, and ensures consistency across multiple identical components.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Working Point',
                    definition: 'A defined reference point on a template or material from which all other dimensions are measured. Establishing a consistent, accurate working point is the first step in any layout. Working points are typically located at the intersection of centre lines or at a defined corner of the material.',
                  },
                  {
                    type: 'table',
                    headers: ['Template Type', 'Application', 'Typical Material'],
                    rows: [
                      ['Hole-punching template', 'Locating and punching hole patterns in repetitive parts', 'Steel plate or hardened aluminum for durability'],
                      ['Wrap-around template', 'Laying out pipe cuts, saddle cutouts and mitre lines on round pipe or tube', 'Heavy paper, cardboard or thin sheet metal that wraps conformably around the pipe'],
                      ['Cutting template', 'Guiding a plasma torch, grinder or nibbler to cut complex profiles', 'Steel plate for heat resistance; cardboard for single-use cuts'],
                      ['Arc template (sweep)', 'Scribing large radius curves and arcs on plate that cannot be drawn with a standard compass', 'Steel flat bar or aluminium strip bent to the required radius'],
                      ['Assembly template (jig)', 'Locating multiple components in correct relative position for tacking', 'Structural steel welded fixture; typically reusable for production runs'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Template Development Procedure',
                    items: [
                      'Determine template material — select durability based on number of uses; fire resistance required for use near welding',
                      'Establish the starting point — identify the working point and axis from the drawing',
                      'Transfer key dimensions from the drawing to the template material — use trammel points for large arcs; combination squares for right angles',
                      'Extend lines from the working point — use straightedges and chalk lines for long straight lines',
                      'Complete the profile — connect dimension points to create the full outline of the part',
                      'Cut the template — use appropriate tools for the template material (snips for metal; knife or scissors for cardboard)',
                      'Mark the template — record the part number, revision, material specification, and the date',
                      'Trial-fit the template — verify against the drawing dimensions before using it on stock material',
                      'Store the template properly — hang or lay flat to prevent distortion; protect from moisture and heat',
                    ],
                  },
                ],
              },
              {
                id: 'ch07-s2',
                title: '7.2 Transferring Dimensions from Drawings to Materials',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Accurate dimension transfer is the bridge between the engineer\'s drawing and the physical part. Errors at this stage propagate through every subsequent operation — a mislocated centre line, an incorrect bevel angle or an oversized blank will either require rework or result in a scrapped part. Welders must verify all transferred dimensions before cutting and use multiple reference points to catch systematic errors early.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Kerf',
                    definition: 'The width of material removed by a cutting process. When laying out parts, the kerf must be accounted for — the cut line should be placed on the waste side of the layout line so that the finished part dimension is preserved. Kerf width varies by process: thin for saw cuts and plasma, wider for OFC, and variable for grinding.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Mathematical Calculations Used in Layout',
                    items: [
                      'Unit conversions — converting between metric (millimetres) and imperial (inches, fractions) measurement systems; memorize key conversion factors (1 inch = 25.4 mm)',
                      'Fractions and decimals — converting fractional inch dimensions to decimal equivalents for calculator use',
                      'Percentage calculations — calculating bend allowances as a percentage of material thickness',
                      'Geometry — calculating the length of diagonal bracing using the Pythagorean theorem (a² + b² = c²); calculating circumference (C = π × d) for wrap-around templates',
                      'Bend allowance — the additional material required for a bend; bend allowance depends on the inside bend radius and material thickness',
                      'Proportions and ratios — scaling dimensions up or down while maintaining correct proportions',
                      'Offset calculations — calculating the travel and setback for pipe offsets using 45° or other fittings',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'After laying out all cut lines, hole locations and assembly reference marks on the material, verify the layout for accuracy before cutting. Check diagonal measurements to confirm squareness, verify that all hole locations are correctly positioned relative to the reference edges, and confirm that there is sufficient material remaining for the part after accounting for kerf. A few minutes spent verifying layout prevents hours of rework.',
                  },
                  {
                    type: 'table',
                    headers: ['Layout Tool', 'Application', 'Accuracy Range'],
                    rows: [
                      ['Steel measuring tape', 'General length measurement and layout on plate and structural shapes', '± 0.5 mm over short distances; accuracy decreases with tape sag on long measurements'],
                      ['Combination square', 'Scribing lines at 90° and 45° to a reference edge; depth measurement', '± 0.1 mm with a quality square'],
                      ['Trammel points', 'Scribing arcs and circles with a radius exceeding compass range', 'Limited by accuracy of the bar and the points'],
                      ['Plumb bob', 'Establishing a true vertical reference line from an overhead point', '± 1 mm over 3 m with minimal air movement'],
                      ['Vernier caliper', 'Precise measurement of dimensions, depths and step heights', '± 0.02 mm'],
                      ['Digital level', 'Verifying angle of inclination and plumb', '± 0.1° for quality digital levels'],
                      ['Chalk line', 'Snapping long straight reference lines on flat surfaces', '± 1–2 mm depending on line tension and distance'],
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 8 — Fabricating Components
          // ============================================================
          {
            id: 'ch-08',
            number: 8,
            title: 'Fabricating Components',
            subtitle: 'MWA B-8 · Fabricates Components (56% of MWA B)',
            isFree: false,
            estimatedMinutes: 65,
            sections: [
              {
                id: 'ch08-s1',
                title: '8.1 Preparing Materials',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Material preparation is the first step in fabrication and directly determines the quality of the finished weld. The RSOS defines preparation as including drilling, punching, forming, grinding and thermal processes. Before any joint is tacked or welded, the base metals must be verified for correct material type, grade and dimensions, all specified preparation processes must be completed, weld areas must be clean, and joint edges must be prepared to the correct profile as specified on the drawing and in the WPS/WPDS.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Edge Preparation',
                    definition: 'The shaping of the joint faces of base metal components before welding to create the required joint geometry. Common edge preparations include the square edge (for thin material), single-V groove, double-V groove, single-bevel, single-J and single-U groove. The preparation angle, root face width and root opening are all specified in the WPS/WPDS and on the welding symbol.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Weld Area Cleaning Requirements',
                    items: [
                      'Remove all mill scale, rust, paint, coatings, oil, grease and moisture from the joint faces and at least 25 mm adjacent to the joint',
                      'Use grinding, filing or wire brushing to remove scale and contamination — ensure no cross-contamination between stainless steel and carbon steel',
                      'Degrease with an approved solvent before any other cleaning — oil contamination disperses under mechanical cleaning and contaminates a wider area',
                      'Stainless steel requires cleaning with stainless-steel-dedicated wire brushes and grinding discs — carbon steel contamination causes rust staining and loss of corrosion resistance',
                      'Remove all tack welds that do not meet quality requirements — poor-quality tacks welded over will create buried defects',
                      'Verify preheat before the first arc is struck — contaminated or cold base metal is a leading cause of porosity and hydrogen cracking',
                    ],
                  },
                  {
                    type: 'table',
                    headers: ['Material Type', 'Key Preparation Consideration', 'Common Error to Avoid'],
                    rows: [
                      ['Carbon steel', 'Remove mill scale and rust by grinding or abrasive blasting; clean thoroughly before welding', 'Welding over mill scale causes porosity and lack of fusion at the root'],
                      ['Stainless steel', 'Use dedicated stainless tools only; degrease with acetone or approved cleaner; avoid heat tint where not acceptable', 'Contamination with carbon steel causes rust spots and compromises corrosion resistance'],
                      ['Aluminum', 'Wire brush with stainless brush to break oxide layer; degrease with clean cloth and approved solvent; weld immediately after cleaning', 'Aluminum oxide reforms within hours; heavily oxidized surfaces cause porosity and lack of fusion'],
                      ['High-alloy and tool steel', 'Follow WPS/WPDS preheat requirements strictly; use low-hydrogen processes; verify carbon equivalent', 'Skipping preheat on hardenable steels causes hydrogen cracking that may appear days after welding'],
                      ['Galvanized steel', 'Remove galvanizing from weld zone by grinding or burning off before welding; use adequate ventilation', 'Welding through galvanizing produces toxic zinc fumes; weld quality is also severely compromised'],
                    ],
                  },
                ],
              },
              {
                id: 'ch08-s2',
                title: '8.2 Fitting and Assembling Components',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Fitting is the process of positioning and securing components in the correct relationship for welding. Proper fit-up — correct root opening, joint alignment, gap, angle and elevation — is critical because the geometry of the finished weld is determined before the first arc is struck. Components are joined mechanically using clamps and fixtures and then tack-welded in position. Tacks are small welds placed to hold the fit-up dimensionally stable during the final welding sequence.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Hi-Lo (Internal Misalignment)',
                    definition: 'The offset between the inside surfaces of two pipe or plate sections at a butt joint, measured using a hi-lo gauge. Excessive hi-lo creates a stress concentration at the weld root and is a common cause of code rejection. Maximum permitted hi-lo is specified in the applicable code — typically 1.6 mm (1/16 in) for pressure piping and 3 mm (1/8 in) for structural steel.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Tacking Methods and Standards',
                    items: [
                      'Bridge tack — a small weld placed across the joint gap that holds the root opening; typically removed or consumed by the root pass',
                      'Penetrating tack — a full-penetration tack weld that becomes part of the finished weld; must meet the same quality standards as the production weld',
                      'Plug tack — used to close pinholes or small gaps in fit-up; typically removed before the root pass',
                      'Tack weld quality — tacks must be free of cracks, porosity and lack of fusion; defective tacks must be completely removed before the joint is welded out',
                      'Pre-heat before tacking — if the WPS/WPDS requires preheat for the production weld, it is equally required for tacking',
                      'Tack weld size — tacks should be large enough to hold the fit-up but small enough to be consumed by or removed before the root pass',
                      'Tack weld sequence — distribute tacks evenly to prevent distortion pulling the joint out of position',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Thermal expansion and contraction during welding cause distortion that must be anticipated and controlled during the fitting and assembly stages. Welders use strongbacks (heavy backup bars temporarily welded to the weldment), gussets, heat sinks, back-step welding sequences, balanced welding about the neutral axis, and controlled welding sequences to minimize distortion. Once distortion occurs, correction by mechanical straightening or controlled heating is much more costly than prevention.',
                  },
                  {
                    type: 'table',
                    headers: ['Distortion Control Method', 'Description', 'Best Applied When'],
                    rows: [
                      ['Strongback', 'Heavy backup bar tack-welded perpendicular to the joint to resist bending during welding', 'Preventing angular distortion in butt welds on plate'],
                      ['Jigs and fixtures', 'Rigid holding frames that constrain the assembly dimensionally during welding', 'Production of multiple identical assemblies'],
                      ['Back-step welding', 'Depositing weld segments in the direction opposite to the overall direction of welding', 'Long seam welds where longitudinal shrinkage is a concern'],
                      ['Balanced welding', 'Alternating welds on opposite sides of the neutral axis to balance shrinkage stresses', 'Double-sided joints; T-joints and corner joints with welds on both sides'],
                      ['Pre-setting (pre-cambering)', 'Intentionally positioning components out of alignment in the direction opposite to the expected distortion', 'When final distortion direction and magnitude can be predicted'],
                      ['Heat sinks', 'Copper or aluminum backing bars placed beneath the weld to conduct heat away and reduce thermal gradient', 'Thin material and aluminum welding to prevent burn-through and distortion'],
                      ['Tacking sequence', 'Strategically placing tacks to distribute and counteract distortion forces', 'All fit-up operations — sequence of tacks affects final alignment'],
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
        ], // end Part 2 chapters
      }, // end Part 2
  
      // ============================================================
      // PART 3 — Cutting and Gouging
      // MWA C: Performs Cutting and Gouging (18%)
      // ============================================================
      {
        id: 'part-3',
        number: 3,
        title: 'Cutting and Gouging',
        description: 'Part 3 covers the cutting and gouging processes that welders use to prepare materials and joints: non-thermal cutting and grinding, oxy-fuel gas cutting (OFC), plasma arc cutting (PAC) and air carbon arc cutting (CAC-A). This corresponds to MWA C (18% of the Red Seal exam), requiring both theoretical understanding of the processes and practical knowledge of equipment setup and parameter selection.',
        chapters: [
  
          // ============================================================
          // CHAPTER 9 — Non-Thermal Cutting and Grinding
          // ============================================================
          {
            id: 'ch-09',
            number: 9,
            title: 'Non-Thermal Cutting and Grinding',
            subtitle: 'MWA C-9 · Uses Tools and Equipment for Non-Thermal Cutting and Grinding (25% of MWA C)',
            isFree: false,
            estimatedMinutes: 55,
            sections: [
              {
                id: 'ch09-s1',
                title: '9.1 Selecting Cutting and Grinding Tools',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Non-thermal cutting refers to material removal processes that do not rely primarily on heat — including mechanical cutting with band saws, cold cut saws, power hacksaws, shears, ironworkers and hand tools, as well as abrasive grinding with angle grinders and pedestal grinders. Selecting the right tool for the material type, grade, thickness and required cut quality is essential. Using the wrong blade or disc risks tool failure, injury and poor-quality cuts that require additional preparation before welding.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Abrasive Disc',
                    definition: 'A grinding or cutting wheel made from abrasive grains bonded together. Cutting discs are thin (typically 1–3 mm) and used for parting cuts; grinding discs are thicker (typically 6–10 mm) and used for material removal and surface preparation. Each disc is rated for a maximum surface speed (SFPM or m/s) and must never be operated above its rated RPM on the grinder. Always inspect discs for cracks and chips before mounting.',
                  },
                  {
                    type: 'table',
                    headers: ['Tool / Equipment', 'Best Material Application', 'Key Selection Criterion'],
                    rows: [
                      ['Band saw (vertical or horizontal)', 'Carbon steel, stainless steel, aluminum bar stock and tubing', 'Select blade TPI (teeth per inch) appropriate to material thickness — fewer teeth for thick material, more teeth for thin wall to prevent tooth stripping'],
                      ['Cold cut saw (circular saw with carbide tooth)', 'Carbon steel and stainless steel structural shapes and bar', 'Produces a burr-free, square cut with no heat-affected zone; select blade for material type'],
                      ['Power hacksaw', 'Bar stock and pipe in moderate thickness ranges', 'Select blade pitch per material thickness; typically used where cold cut saws are unavailable'],
                      ['Ironworker (punch-shear machine)', 'Cutting plate, punching holes and notching structural shapes in carbon steel', 'Check blade/punch clearance settings for the material thickness; never exceed the machine\'s rated capacity'],
                      ['Hydraulic shear', 'Cutting sheet and plate material in straight lines', 'Set blade clearance to the correct percentage of material thickness for the material type; clean, sharp blades produce straight cuts without excessive burr'],
                      ['Angle grinder (cutting disc)', 'Cutting pipe, plate, structurals where saws cannot reach; removing tack welds and weld caps', 'Use dedicated stainless or aluminum discs on those materials to prevent contamination; never exceed the disc\'s rated RPM'],
                      ['Angle grinder (grinding disc)', 'Weld preparation, back-gouging, removing surface defects, dressing weld profiles', 'Select grit and disc thickness for the task; use guard at all times; work at correct angle to avoid disc breakage'],
                      ['Die grinder', 'Detail grinding in confined areas, slot prep, root preparation', 'Verify RPM rating matches or exceeds grinder speed; use appropriate mounted stone or carbide burr for material'],
                      ['Nibblers', 'Cutting irregular shapes and profiles in sheet metal', 'Effective on thin sheet; not suitable for thick plate'],
                      ['Aviation snips (left, right, straight)', 'Cutting thin sheet metal in straight lines and curves', 'Select the correct hand (left or right) for the direction of curvature to maintain material flat'],
                      ['Files (flat, half-round, rat-tail)', 'Deburring, final edge dressing, fitting bevels by hand', 'Use bastard cut for fast removal; second cut for finishing; single cut for final smoothing'],
                      ['Hacksaw (hand)', 'Cutting small-diameter bar and pipe in locations inaccessible to power tools', 'Select blade pitch (TPI) for material thickness; maintain blade tension; apply cutting fluid on stainless and hard alloys'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Cutting Tool and Disc Selection — Safety Rules',
                    items: [
                      'Always inspect abrasive discs for cracks, chips or damage before mounting — a damaged disc can disintegrate at operating speed causing severe injury',
                      'Never exceed the maximum RPM rating of the disc or blade — the RPM rating is printed on the disc and must match or exceed the grinder\'s maximum speed',
                      'Use the correct disc for the material — use stainless-dedicated discs on stainless steel and aluminum; carbon steel contamination causes corrosion and quality issues',
                      'Keep guards in place — always — the grinder guard must be positioned between the operator and the disc at all times',
                      'Wear full PPE — face shield over safety glasses, leather gloves, FR clothing and hearing protection are all required for grinding and cutting operations',
                      'Secure the workpiece — material that is not clamped or held securely can shift during the cut, causing the blade or disc to bind and shatter',
                      'Check ironworker and shear blade clearances — incorrect clearances cause ragged cuts, excessive burring and premature blade wear',
                    ],
                  },
                ],
              },
              {
                id: 'ch09-s2',
                title: '9.2 Cutting Operations — Stationary Power Tools, Shears, Hand Tools and Portable Power Tools',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Regardless of the cutting tool being used, the fundamental sequence of operations is the same: select and verify the tool and consumable for the material and application, measure and mark the material accurately, secure the material to prevent movement, perform the cut to the specified parameters, and verify cut quality for dimensional accuracy, squareness and surface condition. Each tool category has specific procedural considerations.',
                  },
                  {
                    type: 'table',
                    headers: ['Operation Category', 'Key Setup Steps', 'Common Hazards'],
                    rows: [
                      ['Stationary power tools (band saw, cold cut saw, drill press)', 'Set feed rate and speed for material type and thickness; secure material in the vice or clamp; verify blade/disc is sharp and correctly tensioned; ensure guards are in place', 'Rotating equipment entanglement; ejected blade or disc sections; noise; cuts from swarf and burrs'],
                      ['Shears and ironworkers', 'Set blade clearance per material thickness; verify ram speed and tonnage setting; position material squarely against the back-gauge; keep hands clear of the blade path', 'Pinch and crush injuries from the ram; shattered tooling if clearance is set incorrectly; noise'],
                      ['Hand tools (hacksaw, files, snips)', 'Secure material in a vise or clamp; use both hands for control; maintain blade tension on hacksaw; apply cutting fluid on hard alloys', 'Cuts from blade slippage; flying chips from files; fatigue injuries from repetitive motion'],
                      ['Portable power tools (angle grinder, circular saw, reciprocating saw)', 'Select correct disc or blade; verify RPM rating; install guard; check for overhead and nearby obstructions; secure material; identify a safe body position away from the disc plane', 'Disc disintegration; kick-back from binding; flying debris and sparks; electrical shock from damaged cords; fire from sparks on combustibles'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'After any cutting operation, verify the cut dimensions against the drawing or cut list. Measure length and width, check squareness with a combination square, verify bevel angles with a bevel gauge, and check the cut edge surface condition. Edges should be free of excessive burrs, ragged tears or excessive slag (from thermal cuts). Burrs must be removed with a file or grinder before fit-up — burrs prevent proper joint alignment and increase the risk of lack-of-fusion defects at the joint root.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Types of Cuts and Their Applications',
                    items: [
                      'Straight cut — the most common; produces a square edge at 90° to the plate surface; used for butt joints with square or grooved edge preparation',
                      'Bevel cut — an angled cut at a specified angle from the vertical; produces the groove face required for V-groove and bevel-groove joints',
                      'Compound cut — combines an angle along the edge with an angle across the thickness; used for pipe-to-pipe saddle connections and complex structural connections',
                      'Radius cut — curved cut following a template or programmed path; used for hole cutouts, gusset plates and curved flanges',
                      'Notch cut — removing a rectangular or angular section from a corner; used for fitting structural sections around existing members',
                    ],
                  },
                ],
              },

            ],
            practiceQuestions: [],
          },
  {
            id: 'ch-10',
            number: 10,
            title: 'Oxy-Fuel Gas Cutting (OFC)',
            subtitle: 'MWA C-10 · Uses OFC Process for Cutting and Gouging (30% of MWA C)',
            isFree: false,
            estimatedMinutes: 60,
            sections: [
              {
                id: 'ch10-s1',
                title: '10.1 OFC Process Fundamentals and Equipment Selection',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Oxy-fuel gas cutting (OFC) uses a flame produced by burning a fuel gas with oxygen to preheat the base metal to its kindling (ignition) temperature, then introduces a high-pressure stream of pure cutting oxygen that oxidizes the metal and blows the molten iron oxide out of the kerf. The process is cost-effective, portable, requires no external power source, and is extremely versatile for cutting carbon steel in a wide range of thicknesses — from thin sheet to structural sections over 300 mm thick. OFC is limited to ferrous metals that readily oxidize; stainless steel, aluminum, and cast iron cannot be cut cleanly by standard OFC.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Kindling Temperature',
                    definition: 'The minimum temperature at which a metal will ignite and burn in the presence of pure oxygen. For mild carbon steel this is approximately 870°C — well below the steel\'s melting point of approximately 1510°C. The OFC preheat flame raises the steel surface to the kindling temperature before the cutting oxygen lever is depressed to initiate the cut.',
                  },
                  {
                    type: 'table',
                    headers: ['OFC Fuel Gas', 'Max Flame Temperature', 'Key Characteristic', 'Primary Application'],
                    rows: [
                      ['Acetylene (C2H2)', '~3160°C', 'Highest flame temperature; highest heat release in the primary (inner) cone; fastest preheat', 'Cutting, welding, brazing; fastest for thin to medium plate where preheat speed matters'],
                      ['Propane (C3H8)', '~2526°C', 'Lower flame temperature but higher total heat output in secondary cone; heavier than air — accumulates in low areas', 'Cutting and heating thick plate; more economical than acetylene for heavy cutting'],
                      ['Natural gas (methane)', '~2538°C', 'Lowest cost; lowest flame temperature among common gases; very light — disperses upward', 'Cutting in shops with piped natural gas supply; heavy plate and structural shapes'],
                      ['MPS (methylacetylene-propadiene)', '~2927°C', 'Intermediate between acetylene and propane; stored as a liquid; safe to use at full cylinder pressure', 'Field cutting where liquefied gas is preferred; cutting and heating applications'],
                      ['Oxygen (oxidizer)', 'N/A', 'Not a fuel gas — the oxidizer that sustains both the preheat flame and the cutting reaction; high-purity (99.5%+) required for clean cuts', 'Required for all OFC processes; stored in high-pressure cylinders (typically 2200 psi/15 000 kPa)'],
                    ],
                  },
                  {
                    type: 'keyTerm',
                    term: 'Flashback Arrestor',
                    definition: 'A safety device installed on OFC hoses (at both the torch end and the regulator end) that prevents a flashback or backfire from propagating back through the hoses to the cylinders. Flashback arrestors contain a check valve to prevent reverse gas flow and a sintered metal filter or heat-activated shut-off valve to extinguish a flashback flame. They are mandatory on all OFC equipment.',
                  },
                  {
                    type: 'table',
                    headers: ['OFC Equipment Component', 'Function', 'Key Selection / Safety Note'],
                    rows: [
                      ['Single-stage regulator', 'Reduces cylinder pressure to working pressure in one step', 'Working pressure fluctuates slightly as cylinder pressure drops; adequate for most cutting applications'],
                      ['Two-stage regulator', 'Reduces pressure in two steps for a more consistent delivery pressure', 'Preferred when cutting conditions require stable pressure; recommended for precision work'],
                      ['Cutting torch body', 'Mixes fuel gas and oxygen; incorporates a separate cutting oxygen valve and lever', 'Select based on application (light, medium or heavy duty); ensure torch is compatible with the tip being used'],
                      ['Cutting tip (nozzle)', 'Controls preheat flame pattern and cutting oxygen stream diameter', 'Select tip size based on material thickness per manufacturer\'s chart; larger orifice for thicker material'],
                      ['Fuel gas hose (red)', 'Delivers fuel gas from regulator to torch', 'Left-hand threaded connections on fuel gas side — never interchange with oxygen hose fittings'],
                      ['Oxygen hose (green or black)', 'Delivers oxygen from regulator to torch', 'Right-hand threaded connections; must be kept free of oil and grease — oxygen contact with hydrocarbons causes fire and explosion'],
                      ['Reverse-flow check valve', 'Prevents gas from flowing backward into the wrong hose', 'Installed at the torch inlet; works with flashback arrestors to provide two levels of backflow protection'],
                      ['Mechanized track cutter', 'Motorized carriage that moves the torch along a straight track at a consistent travel speed', 'Provides straight, consistent cuts on long seams; used for plate edge preparation and structural fabrication'],
                      ['Pipe beveling cutter', 'Motorized device that travels around a pipe to produce a consistent bevel cut', 'Used for weld preparation on large-diameter pipe in the field'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'OFC Cylinder Handling and Storage Rules',
                    items: [
                      'Secure all cylinders with chains or straps in an upright position at all times — a falling cylinder can shear the valve and become a dangerous projectile',
                      'Separate oxygen and fuel gas cylinders by at least 6 metres, or by a non-combustible barrier at least 1.5 metres high with a minimum 30-minute fire resistance rating',
                      'Never use oil or grease on oxygen equipment — oxygen under pressure reacts violently with hydrocarbons and can cause spontaneous ignition or explosion',
                      'Acetylene cylinders must never be used or stored on their side — the liquid acetone solvent inside can enter the regulator and contaminate the system',
                      'Acetylene working pressure must never exceed 103 kPa (15 psi) — above this pressure, acetylene becomes unstable and can detonate',
                      'Open cylinder valves slowly — rapid opening can cause regulator blow-out or pressure surge damage',
                      'Crack oxygen cylinders briefly before attaching the regulator — this blows out any debris in the valve that could ignite in pure oxygen',
                    ],
                  },
                ],
              },
              {
                id: 'ch10-s2',
                title: '10.2 OFC Setup, Parameter Setting and Performing the Cut',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Proper setup and parameter selection are critical to producing a quality OFC cut. A poor-quality cut with excessive drag lines, dross, uneven kerf or gouged surfaces requires grinding before welding and increases total fabrication time. The setup sequence must be followed in order to prevent hazardous conditions — especially when lighting the torch and shutting down.',
                  },
                  {
                    type: 'numbered',
                    title: 'OFC Equipment Setup Procedure',
                    items: [
                      'Move cylinders to the work area and secure them upright with chains or straps',
                      'Crack the oxygen cylinder valve to blow out debris, then attach the oxygen regulator (right-hand threads)',
                      'Attach the fuel gas regulator (left-hand threads) — never use tools that could strip the soft brass fittings',
                      'Attach flashback arrestors and check valves at the regulator outlets',
                      'Connect hoses: red to fuel gas regulator, green or black to oxygen regulator',
                      'Connect hoses to torch inlets and check all connections for leaks using an approved soapy water solution — never use an open flame to check for leaks',
                      'Select and install the correct cutting tip for the material thickness per the manufacturer\'s chart',
                      'Purge each hose individually before lighting: open one valve, purge for a few seconds, close; repeat for the other gas',
                      'Set working pressures per the tip manufacturer\'s recommendations for the material thickness',
                      'Perform a trial cut on scrap material of the same thickness to verify cut quality before production cutting',
                    ],
                  },
                  {
                    type: 'table',
                    headers: ['Flame Type', 'O2 to Fuel Ratio', 'Appearance', 'Application'],
                    rows: [
                      ['Neutral flame', '1:1 (for acetylene)', 'Sharp inner cone with no feathery haze; blue outer envelope', 'Correct preheat flame for most OFC cutting of carbon steel; does not add or remove carbon from the surface'],
                      ['Carburizing (reducing) flame', 'Excess fuel gas', 'Feathery white secondary cone surrounding the inner cone; smoky', 'Not used for OFC; used for welding on some alloys; excess carbon in the flame can cause surface carburization'],
                      ['Oxidizing flame', 'Excess oxygen', 'Short pointed inner cone; hissing sound; blue-white colour', 'Not used for OFC preheat; excess oxygen causes rapid oxidation of the cut face and produces a ragged kerf'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'OFC Torch Lighting and Shut-Down Procedure',
                    items: [
                      'Lighting — open the fuel gas valve slightly (1/4 turn); ignite with a friction lighter (never a match or lighter — accumulated gas can cause a fireball); open oxygen valve gradually to achieve a neutral flame; then open the cutting oxygen valve briefly to verify cutting oxygen flow',
                      'Shut-down — close the cutting oxygen valve first; then close the fuel gas valve at the torch; then close the oxygen valve at the torch; close both cylinder valves; open torch valves to bleed residual gas from the hoses; turn both regulator adjusting screws counter-clockwise to release pressure',
                      'Emergency shut-down — if a sustained backfire or flashback occurs, close both torch valves immediately; close both cylinder valves; do not attempt to re-light until the equipment has been inspected and the cause identified',
                      'Backfire vs. flashback — a backfire is a brief snap or pop where the flame goes out; a flashback is a sustained burning inside the torch or hoses (indicated by a squealing sound) that requires immediate emergency shut-down',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Cut quality is evaluated by examining the cut face for drag lines, dross adhesion, kerf width and squareness. Drag lines (the curved striations on the cut face) should be nearly vertical and evenly spaced. Excessive drag indicates travel speed is too fast. Dross (re-solidified iron oxide) adhering to the bottom of the cut indicates incorrect tip size, wrong pressures, or too-fast travel speed. An undercut at the top edge indicates travel speed is too slow or tip-to-work distance is too large.',
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 11 — Plasma Arc Cutting (PAC)
          // ============================================================
          {
            id: 'ch-11',
            number: 11,
            title: 'Plasma Arc Cutting (PAC)',
            subtitle: 'MWA C-11 · Uses PAC Process for Cutting and Gouging (26% of MWA C)',
            isFree: false,
            estimatedMinutes: 55,
            sections: [
              {
                id: 'ch11-s1',
                title: '11.1 PAC Process Fundamentals and Equipment',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Plasma arc cutting uses a constricted electric arc and a high-velocity stream of ionized gas (plasma) to melt and remove metal from the kerf. Unlike OFC, which relies on an oxidation reaction, PAC cuts by melting — making it applicable to all electrically conductive metals including stainless steel, aluminum, copper, and cast iron that cannot be cut by OFC. PAC produces a narrow kerf, minimal heat-affected zone, minimal distortion, and excellent cut quality on thin to medium-thickness material. It is faster than OFC on material up to approximately 50 mm thick.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Plasma',
                    definition: 'The fourth state of matter — a gas that has been heated to an extremely high temperature (up to 30 000°C) until its atoms ionize, creating a mixture of positive ions and electrons that conducts electricity. In PAC, the plasma jet is formed inside the torch by passing a gas through a constricting nozzle while an electric arc is struck between the tungsten electrode and the constricting nozzle (pilot arc) or the workpiece (transferred arc).',
                  },
                  {
                    type: 'table',
                    headers: ['PAC Equipment / Component', 'Function', 'Key Maintenance / Selection Note'],
                    rows: [
                      ['Power source (CC/DC)', 'Provides high-frequency starting current and high-amperage welding current for the transferred arc', 'Select amperage range to match material thickness; higher amperage for thicker material. Most modern PAC units are inverter-based for portability.'],
                      ['PAC torch (manual)', 'Directs the plasma jet and shielding gas to the workpiece; houses the electrode and constricting nozzle', 'Inspect torch body and leads for damage before use. Air-cooled torches for lower amperages; liquid-cooled for sustained high-amperage cutting.'],
                      ['Electrode (hafnium or zirconium tip)', 'Creates the arc inside the torch; hafnium-tipped electrodes used with air or oxygen plasma; tungsten for inert gas plasma', 'Replace when the pit on the electrode face exceeds approximately 1.6 mm depth — worn electrodes cause double-arcing and torch damage.'],
                      ['Constricting nozzle (tip)', 'Constricts the plasma arc to increase energy density and gas velocity; determines kerf width and cut quality', 'Replace when orifice is eroded or out-of-round. Always replace electrode and nozzle together — mismatched wear leads to double-arcing.'],
                      ['Heat shield / outer cup', 'Protects the torch body from spatter; directs secondary shielding gas', 'Inspect for spatter buildup and cracks. Clean regularly with anti-spatter spray.'],
                      ['Air compressor / gas supply', 'Provides plasma gas and secondary shielding gas; compressed air is standard for most shop PAC applications', 'Air must be clean, dry and free of oil — use appropriate inline filters and dryers. Moisture and oil in the air supply dramatically reduce consumable life.'],
                      ['Track and pipe beveling cutter (mechanized)', 'Motorized carriage system for straight cuts and pipe bevel cuts using PAC', 'Set travel speed per material thickness and amperage. Mechanized PAC produces cut-ready bevels that often require no post-cut grinding.'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'PAC Gas Selection',
                    items: [
                      'Air (compressed) — most common for carbon steel and stainless steel up to 50 mm; economical; produces slight nitrogen contamination on stainless steel cut faces',
                      'Nitrogen — produces a cleaner cut on stainless steel and aluminum; used when cut-face quality is critical; requires separate gas supply',
                      'Oxygen — maximum cutting speed on carbon steel; significantly increases consumable wear rate; not suitable for aluminum or stainless steel',
                      'Argon/hydrogen mix — used for high-quality cuts on stainless steel and nickel alloys; highest cost but best cut-face quality on non-ferrous and exotic metals',
                      'Gas selection affects: cut speed, cut-face quality, consumable life, and suitability for different base metals — always consult the WPS/WPDS and manufacturer\'s recommendations',
                    ],
                  },
                ],
              },
              {
                id: 'ch11-s2',
                title: '11.2 PAC Setup, Parameters and Performing the Cut',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Correct parameter setting is critical to PAC consumable life and cut quality. The two most important parameters are amperage and travel speed — both must be matched to the material type and thickness. Setting amperage too high for a given thickness wastes consumables and produces a wider, rougher kerf. Travel speed that is too slow causes excessive dross on the bottom of the cut; too fast produces an angled cut face with excessive drag.',
                  },
                  {
                    type: 'table',
                    headers: ['Parameter', 'Effect of Too High', 'Effect of Too Low', 'How to Set'],
                    rows: [
                      ['Amperage', 'Widened kerf, excessive heat input, accelerated consumable wear, possible burn-through on thin material', 'Arc extinguishes or cannot pierce the material; incomplete cuts', 'Follow manufacturer\'s chart for material type and thickness; match amperage to the consumable set installed'],
                      ['Air pressure', 'Turbulence in the plasma jet, erratic arc, poor cut quality', 'Insufficient cooling of electrode and nozzle — rapid consumable burnout; poor plasma velocity produces dross', 'Set per manufacturer\'s specification for the torch model and amperage; typically 400–690 kPa (60–100 psi)'],
                      ['Travel speed', 'Angled cut face (leading edge faster than trailing edge), incomplete penetration, stringer bead of dross', 'Excessive heat input, wide kerf, heavy top-edge rounding, heavy dross on cut face', 'Start at manufacturer\'s recommended speed for the amperage and material; verify by examining cut face drag angle'],
                      ['Standoff distance (torch to work)', 'Reduced arc energy at the cut face, wider kerf, excessive top-edge rounding', 'Torch tip contacts the workpiece — causes immediate consumable damage and possible torch damage', 'Typically 3–6 mm for manual cutting; follow manufacturer\'s standoff specification for the nozzle type'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'PAC Operating Safety',
                    items: [
                      'Noise — PAC produces noise levels of 100–115 dB(A); hearing protection is mandatory at all times during operation',
                      'UV/IR radiation — the plasma arc emits intense UV and infrared radiation; wear appropriate filter lens shade (typically shade 6–9 for PAC depending on amperage) and ensure nearby workers are screened',
                      'Fumes — PAC on stainless steel produces hexavalent chromium fumes; on galvanized steel it produces zinc oxide fumes; local exhaust ventilation or a PAPR is required',
                      'Electrical shock — PAC power sources operate at open-circuit voltages of 200–400 V; never handle the torch while the power source is energized without initiating the arc; ensure good insulation on all cables',
                      'Fire — sparks travel farther with PAC than OFC; clear combustibles from a 10-metre radius and establish a fire watch during and after cutting',
                      'Compressed gas — check all hose connections for leaks before starting; ensure air compressor pressure relief valve is functional',
                      'Replace consumables as a matched set — never replace only the electrode or only the nozzle; mismatched wear causes double-arcing that can destroy the torch body',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'For gouging applications (back-gouging welds, removing defects), PAC uses a specialized gouging nozzle that produces a wider, shallower plasma stream. The torch is held at a low angle (approximately 40–45° to the work surface) and traversed along the gouge path. After gouging, the gouge groove must be cleaned by grinding to remove copper and carbon deposits from the electrode before welding — these deposits can cause weld contamination if left in place.',
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 12 — Air Carbon Arc Cutting (CAC-A)
          // ============================================================
          {
            id: 'ch-12',
            number: 12,
            title: 'Air Carbon Arc Cutting (CAC-A)',
            subtitle: 'MWA C-12 · Uses CAC-A Process for Cutting and Gouging (19% of MWA C)',
            isFree: false,
            estimatedMinutes: 45,
            sections: [
              {
                id: 'ch12-s1',
                title: '12.1 CAC-A Process Fundamentals and Equipment Selection',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Air carbon arc cutting uses an electric arc struck between a carbon-graphite electrode and the base metal to melt the material, while a jet of compressed air (directed through ports in the electrode holder immediately behind the arc) blows the molten metal out of the groove. CAC-A is primarily a gouging process — it is fast, efficient, and applicable to most ferrous and non-ferrous metals. It is used for back-gouging weld roots, removing defective weld metal, preparing bevel joints, removing cracks, and demolition of existing welds.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Carbon Electrode',
                    definition: 'The consumable electrode used in CAC-A, made from a mixture of carbon and graphite with a copper-coated exterior. Available in round, flat and half-round cross-sections; the size and shape are selected based on the desired gouge width and depth. Flat and half-round electrodes produce wider, shallower gouges suitable for weld removal; round electrodes produce deeper, narrower grooves for crack removal.',
                  },
                  {
                    type: 'table',
                    headers: ['CAC-A Electrode Type', 'Shape', 'Application', 'Current Type'],
                    rows: [
                      ['DC coated (copper-coated)', 'Round', 'General gouging, back-gouging, crack removal; most common type', 'DCEP (direct current, electrode positive) — provides stable arc and good material removal'],
                      ['DC coated flat', 'Flat rectangular', 'Wide, shallow gouges for weld removal and surface cleaning; produces a broad, flat gouge profile', 'DCEP'],
                      ['DC coated half-round', 'Half-round', 'Intermediate profile between round and flat; used for bevel preparation and weld removal', 'DCEP'],
                      ['AC electrode', 'Round', 'Used with AC power sources; less efficient than DCEP — produces a rougher gouge surface', 'AC (alternating current)'],
                      ['Non-coated carbon', 'Round', 'Lower cost; no copper coating; used for rough gouging where surface quality is not critical', 'DCEP or AC'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'CAC-A Equipment Requirements',
                    items: [
                      'Power source — must be capable of sustained high amperage output; SMAW power sources (CC/DC) are commonly used; generator-driven units for field work',
                      'Electrode holder (carbon arc torch) — a specialized holder with air ports directed behind the electrode; selected to match the electrode size and amperage range',
                      'Compressed air supply — must deliver sufficient volume and pressure (typically 550–690 kPa / 80–100 psi) for the electrode size being used; inadequate air volume is the most common cause of poor gouge quality',
                      'Work lead and cables — sized for the amperage required; work lead must provide a low-resistance connection close to the work area',
                      'Amperage setting — directly determines gouge width and depth; larger electrode diameter requires higher amperage per the manufacturer\'s chart',
                      'Fume extraction — CAC-A produces large volumes of fumes; mandatory local exhaust ventilation or a supplied-air respirator in enclosed areas',
                    ],
                  },
                ],
              },
              {
                id: 'ch12-s2',
                title: '12.2 CAC-A Setup, Parameters and Performing the Gouge',
                content: [
                  {
                    type: 'paragraph',
                    text: 'The CAC-A process is straightforward to set up but requires careful technique to produce a clean, consistent gouge profile. The two most important variables are the electrode angle to the work surface and the travel speed. The electrode angle determines the gouge depth — a steeper angle produces a deeper gouge; a shallower angle produces a wider, shallower groove. Consistent travel speed and electrode burn-off rate produce uniform gouge dimensions.',
                  },
                  {
                    type: 'numbered',
                    title: 'CAC-A Setup and Operating Procedure',
                    items: [
                      'Visually inspect the electrode holder, cables and air hose for damage before use',
                      'Set the amperage on the power source according to the electrode diameter per the manufacturer\'s chart',
                      'Insert the electrode into the holder with the correct stick-out (typically 150–175 mm) and tighten the holder jaws firmly',
                      'Ensure the air ports on the holder are aligned behind the electrode so the air jet will blow molten metal forward and away from the operator',
                      'Connect and open the compressed air supply; verify air pressure is within the required range',
                      'Attach the work lead clamp to clean base metal as close to the work area as practical',
                      'Position the electrode at the correct angle to the work surface (35–45° for back-gouging; steeper for deeper removal)',
                      'Strike the arc and begin travelling at a steady pace — the compressed air will blow the molten metal ahead of the electrode',
                      'Adjust electrode stick-out as the electrode burns down to maintain consistent arc length and gouge depth',
                      'After gouging, inspect the groove: remove all copper deposits and carbon residue by grinding before welding — contamination causes weld defects',
                    ],
                  },
                  {
                    type: 'table',
                    headers: ['CAC-A Defect', 'Cause', 'Corrective Action'],
                    rows: [
                      ['Copper deposits in the gouge', 'Insufficient air pressure; electrode touching the work; wrong electrode angle', 'Increase air pressure; maintain proper standoff; grind out all copper before welding'],
                      ['Carbon deposits (carburized surface)', 'Electrode buried too deep in the gouge; excessive stick-out; insufficient amperage', 'Adjust electrode angle; reduce stick-out; increase amperage; grind to sound metal before welding'],
                      ['Irregular gouge profile', 'Uneven travel speed; inconsistent electrode angle; worn electrode holder', 'Maintain steady travel speed; check electrode holder jaw tightness; practice consistent technique'],
                      ['Excessive fumes and smoke', 'Insufficient ventilation; incorrect air pressure', 'Increase local exhaust ventilation; verify air supply pressure and volume; use PAPR if required'],
                      ['Arc instability / arc extinguishing', 'Insufficient amperage for electrode size; poor work lead connection; contaminated electrode', 'Increase amperage; improve work lead connection; replace electrode'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'CAC-A Safety — Critical Requirements',
                    items: [
                      'Noise — CAC-A produces extremely high noise levels (110–120 dB); hearing protection is mandatory; the process is unsuitable for noise-sensitive areas without enclosure',
                      'Fume hazard — extremely high fume generation rate; mandatory LEV or supplied-air respirator; if gouging stainless steel or coated metals, use supplied air at minimum',
                      'Molten metal projectiles — the compressed air throws molten metal droplets forward of the electrode at high velocity over a considerable distance; clear the area ahead of the gouge path and ensure no combustibles or personnel are within the splash zone',
                      'Fire watch — molten metal droplets can ignite combustibles at considerable distance; post a fire watch and maintain it for at least 30 minutes after gouging is complete',
                      'Electrical shock — CAC-A uses high amperages at welding voltages; ensure all insulation is intact and the work area is dry',
                      'Grinding after gouging — all gouge surfaces must be ground to sound, shiny metal before welding to remove copper, carbon and oxidized material; failure to do so causes severe weld contamination',
                    ],
                  },
                ],
              },
            ], // end ch-12 sections
            practiceQuestions: [],
          }, // end ch-12
        ], // end Part 3 chapters
      }, // end Part 3
        // ============================================================
      // PART 4 — Welding Processes
      // MWA D: Performs Welding Processes (44%)
      // ============================================================
      {
        id: 'part-4',
        number: 4,
        title: 'Welding Processes',
        description: 'Part 4 is the largest and most heavily weighted section of the Red Seal exam, covering all four welding processes tested: SMAW, FCAW/MCAW/GMAW, GTAW and SAW. MWA D accounts for 44% of the 125-question exam — 55 questions. Each chapter covers equipment and consumable selection, setup, parameter setting, welding technique, troubleshooting and code requirements for its process.',
        chapters: [
  
          // ============================================================
          // CHAPTER 13 — Shielded Metal Arc Welding (SMAW)
          // ============================================================
          {
            id: 'ch-13',
            number: 13,
            title: 'Shielded Metal Arc Welding (SMAW)',
            subtitle: 'MWA D-13 · Welds Using SMAW Process (33% of MWA D)',
            isFree: false,
            estimatedMinutes: 75,
            sections: [
              {
                id: 'ch13-s1',
                title: '13.1 SMAW Process Fundamentals and Electrode Selection',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Shielded metal arc welding (SMAW), commonly called stick welding, is one of the most widely used welding processes in the world. An electric arc is struck between a flux-coated consumable electrode and the base metal; the arc melts both the electrode and the base metal to form the weld pool. The flux coating on the electrode serves multiple functions: it produces a shielding gas cloud that protects the molten weld metal from atmospheric contamination, forms a slag blanket that further protects and shapes the weld bead, and provides deoxidizers and alloying elements that refine the weld metal chemistry. SMAW is highly portable, requires minimal equipment, and is tolerant of surface contamination and outdoor conditions — making it indispensable for field maintenance, structural steel, pressure vessel repair and pipeline welding.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'SMAW Electrode Classification (AWS)',
                    definition: 'AWS electrode designations follow the pattern EXXXX: E = electrode; first two or three digits = minimum tensile strength in ksi (e.g., E70 = 70 000 psi / 480 MPa minimum tensile strength); third digit from the end = welding positions (1 = all positions, 2 = flat and horizontal only); last digit = flux coating type and current type. Example: E7018 = 70 ksi tensile, all-position, low-hydrogen (iron-powder) coating, DCEP or AC.',
                  },
                  {
                    type: 'table',
                    headers: ['Electrode', 'Coating Type', 'Current', 'Positions', 'Key Application'],
                    rows: [
                      ['E6010', 'Cellulosic (high-cellulose sodium)', 'DCEP only', 'All positions', 'Pipe root passes; penetrating arc; works on rusty/contaminated surfaces; fast-freezing slag for vertical and overhead'],
                      ['E6011', 'Cellulosic (high-cellulose potassium)', 'DCEP or AC', 'All positions', 'Same applications as E6010 but suitable for AC power sources; field maintenance'],
                      ['E6013', 'Rutile (titania)', 'DCEP, DCEN or AC', 'All positions', 'Sheet metal and thin sections; easy strike and re-strike; smooth bead appearance; low penetration'],
                      ['E7018', 'Low-hydrogen (basic, iron powder)', 'DCEP or AC', 'All positions', 'Structural steel, pressure vessels, higher-strength steel; must be stored in heated oven; produces low-hydrogen weld metal resistant to cracking'],
                      ['E7024', 'Iron powder (rutile)', 'DCEP, DCEN or AC', 'Flat and horizontal only', 'High deposition rate; used for flat and horizontal fillet welds in production environments'],
                      ['E8018-C1', 'Low-hydrogen (nickel-bearing)', 'DCEP', 'All positions', 'High-strength and low-temperature service steels; provides superior notch toughness at sub-zero temperatures'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Electrode diameter selection is based on the thickness of the base metal, the joint type and the welding position. As a general rule, for material less than 6 mm thick use a 3.2 mm (1/8 in) electrode; for material 6–12 mm use 4.0 mm (5/32 in); for material over 12 mm use 4.8 mm (3/16 in) or larger. Positional welding (vertical, overhead) requires smaller diameter electrodes than flat welding to improve control of the molten weld pool.',
                  },
                ],
              },
              {
                id: 'ch13-s2',
                title: '13.2 SMAW Equipment Setup and Parameter Setting',
                content: [
                  {
                    type: 'paragraph',
                    text: 'SMAW requires a CC (constant current) power source. The power source maintains a relatively stable amperage regardless of minor changes in arc length — this is essential for manual welding where the welder cannot maintain a perfectly constant arc length. Common SMAW power sources include transformer-rectifiers, inverters and engine-driven generators. Polarity selection (DCEP or DCEN) is set by connecting the electrode holder and work lead cables to the appropriate terminals.',
                  },
                  {
                    type: 'table',
                    headers: ['SMAW Setup Item', 'Correct Setting / Procedure', 'Effect of Error'],
                    rows: [
                      ['Polarity', 'DCEP (electrode positive) for most electrodes; DCEN for E6020 and some others; check AWS designation', 'Wrong polarity causes erratic arc, excessive spatter, poor fusion and unstable electrode burning'],
                      ['Amperage', 'Set per electrode manufacturer\'s chart for the electrode size, position and base metal thickness; verify with a test weld', 'Too high: undercut, burn-through, excessive spatter. Too low: slag inclusions, lack of fusion, difficult arc starting'],
                      ['Arc force (dig)', 'Set to mid-range for most applications; increase slightly for root passes in tight grooves', 'Too high: harsh, spatter-prone arc. Too low: electrode stubs on the base metal and sticks'],
                      ['Hot start', 'Brief amperage boost at arc start to prevent electrode sticking; set to manufacturer recommendation', 'Without hot start: electrode sticks to base metal at arc initiation'],
                      ['Electrode holder and cable size', 'Cable sized for the amperage; holder rated above the maximum amperage to be used', 'Undersized cable overheats; poor-fitting jaws cause overheating and arc starting problems'],
                      ['Work lead clamp placement', 'Attached to clean base metal as close as practical to the weld joint', 'Remote placement increases resistance in the welding circuit, causes voltage drop and arc instability'],
                    ],
                  },
                ],
              },
              {
                id: 'ch13-s3',
                title: '13.3 SMAW Welding Technique and Troubleshooting',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Welding technique in SMAW requires simultaneous control of arc length, electrode angle, travel speed and electrode manipulation. Arc length should be approximately equal to the electrode core diameter — short enough to maintain a stable arc and sufficient penetration, but not so short that the electrode stubs. Consistent travel speed produces a uniform bead width and reinforcement height.',
                  },
                  {
                    type: 'infoBox',
                    title: 'SMAW Electrode Manipulation Techniques',
                    items: [
                      'Stringer bead — the electrode is moved in a straight line along the joint with no side-to-side motion; produces a narrow bead with good penetration; used for root passes and multi-pass welds',
                      'Weave bead — the electrode is oscillated side-to-side while progressing along the joint; produces a wider bead; used for fill and cap passes to cover wider grooves; pause at each side of the weave to ensure fusion at the toes',
                      'Whip technique — used primarily with E6010/E6011 for root passes; the electrode is briefly moved forward and then returned to the puddle in a rhythmic motion to control penetration and cool the puddle for positional welding',
                      'Forehand technique — electrode angles toward the direction of travel; flatter, wider bead with less penetration; used for capping passes',
                      'Backhand technique — electrode angles away from the direction of travel; deeper penetration, narrower bead; used for root passes',
                      'Arc restart — position the electrode slightly ahead of the crater; strike the arc on the cold weld, then quickly move back to fill the crater before progressing forward; this prevents cold lap at restart points',
                    ],
                  },
                  {
                    type: 'table',
                    headers: ['SMAW Discontinuity', 'Probable Cause(s)', 'Corrective Action'],
                    rows: [
                      ['Porosity', 'Moisture in electrode (low-hydrogen types); contaminated base metal; arc too long; wind blowing away shielding gas', 'Dry electrodes in oven; clean base metal; reduce arc length; use windscreen; check electrode coating condition'],
                      ['Undercut', 'Excessive amperage; too-fast travel speed; incorrect electrode angle; arc too long', 'Reduce amperage; slow travel speed; correct electrode angle; reduce arc length'],
                      ['Overlap', 'Too-low amperage; too-slow travel speed; electrode held too flat to the work', 'Increase amperage; increase travel speed; adjust electrode angle'],
                      ['Lack of fusion', 'Too-low amperage; contaminated base metal; wrong electrode angle; preheat insufficient', 'Increase amperage; clean base metal; correct electrode angle; apply required preheat'],
                      ['Slag inclusions', 'Incomplete slag removal between passes; incorrect electrode manipulation; too-high travel speed that traps slag ahead of the puddle', 'Chip and wire brush thoroughly between all passes; adjust technique; slow travel speed'],
                      ['Excessive spatter', 'Amperage too high; arc length too long; wrong polarity; moisture in electrode', 'Reduce amperage and arc length; verify polarity; dry electrodes'],
                      ['Electrode sticking', 'Amperage too low; cold start without hot start; electrode contacted base metal', 'Increase amperage; use hot start function; maintain arc length above minimum'],
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 14 — FCAW, MCAW and GMAW Processes
          // ============================================================
          {
            id: 'ch-14',
            number: 14,
            title: 'FCAW, MCAW and GMAW Processes',
            subtitle: 'MWA D-14 · Welds Using FCAW, MCAW and GMAW Processes (34% of MWA D)',
            isFree: false,
            estimatedMinutes: 75,
            sections: [
              {
                id: 'ch14-s1',
                title: '14.1 Process Fundamentals — FCAW, MCAW and GMAW',
                content: [
                  {
                    type: 'paragraph',
                    text: 'FCAW, MCAW and GMAW are all continuously fed wire welding processes using a CV (constant voltage) power source paired with a wire feeder. The CV power source maintains a relatively stable voltage — when the arc length decreases (wire feeds closer to the work), current increases to burn the wire back; when arc length increases, current decreases. This self-regulating characteristic makes these processes semi-automatic and significantly less demanding in terms of manual skill compared to SMAW.',
                  },
                  {
                    type: 'table',
                    headers: ['Process', 'Wire Type', 'Shielding', 'Slag', 'Key Strength'],
                    rows: [
                      ['GMAW (MIG)', 'Solid wire (e.g., ER70S-6)', 'External shielding gas required (CO2, Ar/CO2, Ar/O2)', 'No slag', 'Low spatter with spray transfer; clean welds on clean base metal; high deposition rate; all positions with short-circuit transfer'],
                      ['FCAW-G (gas-shielded flux cored)', 'Tubular wire with flux core (e.g., E71T-1)', 'External shielding gas + flux core shielding', 'Slag present — must be removed between passes', 'Out-of-position capability; good gap-bridging; high deposition rate; tolerant of surface scale and contamination'],
                      ['FCAW-S (self-shielded flux cored)', 'Tubular wire with self-shielding flux core (e.g., E71T-8)', 'No external gas required — shielding from flux core only', 'Slag present', 'Works outdoors without shielding gas; portable; used for structural and field applications; limited to some positions'],
                      ['MCAW (metal cored)', 'Tubular wire with metal powder core (e.g., E70C-6M)', 'External shielding gas required (Ar/CO2 mix)', 'No slag (minimal)', 'Highest deposition rate of the wire processes; very low spatter; excellent for high-strength steels; no slag removal'],
                    ],
                  },
                  {
                    type: 'keyTerm',
                    term: 'Modes of Metal Transfer (GMAW)',
                    definition: 'The way in which molten metal is transferred from the wire electrode to the weld pool: Short-circuit transfer — wire contacts the pool and short-circuits before the metal transfers; produces a small, controllable puddle suitable for thin material and all-position welding. Globular transfer — large, irregular droplets fall under gravity; limited to flat position; produces spatter. Spray transfer — fine droplets accelerated across the arc by electromagnetic force; requires argon-rich shielding gas and higher voltage; flat/horizontal only; high deposition rate and very low spatter. Pulse spray — electronically controlled alternation between high and low current; enables spray transfer characteristics in all positions.',
                  },
                  {
                    type: 'table',
                    headers: ['Shielding Gas', 'Composition', 'Process Suitability', 'Effect on Weld'],
                    rows: [
                      ['CO2 (100%)', 'Carbon dioxide', 'GMAW-S (short-circuit), FCAW-G', 'Deep penetration; high spatter; economical; not suitable for spray transfer'],
                      ['Ar/CO2 (75/25 or 80/20)', 'Argon + carbon dioxide', 'GMAW all modes, FCAW-G, MCAW', 'Balanced penetration and bead shape; low spatter; most common general-purpose mix'],
                      ['Ar/CO2 (90/10)', 'Argon + carbon dioxide', 'GMAW spray and pulse spray', 'Spray transfer threshold lower than 75/25; good for positional pulse spray'],
                      ['Ar/O2 (98/2 or 95/5)', 'Argon + oxygen', 'GMAW spray on stainless steel and high-strength steel', 'Oxygen stabilizes the spray arc; too much O2 causes oxidation of stainless steel'],
                      ['Pure Argon', 'Argon only', 'GTAW; GMAW on aluminum', 'Required for aluminum GMAW spray; inert — does not react with the molten pool'],
                      ['Helium or Ar/He mix', 'Helium or blend', 'GMAW on aluminum and non-ferrous; GTAW specialty', 'Higher heat input; better penetration; used for thick aluminum and copper alloys'],
                    ],
                  },
                ],
              },
              {
                id: 'ch14-s2',
                title: '14.2 Equipment Setup, Parameters and Welding Technique',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Proper wire feeder setup is the foundation of consistent GMAW/FCAW/MCAW weld quality. The drive roll type and tension, liner condition, contact tip bore diameter, and wire stick-out must all be matched to the wire diameter and type. Incorrect drive roll tension is a leading cause of erratic wire feeding, which produces arc instability, porosity, and inconsistent weld profiles.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Wire Feeder Setup — Key Steps',
                    items: [
                      'Install the correct drive rolls for the wire type and diameter — knurled V-groove rolls for flux-cored and metal-cored wire; smooth V-groove rolls for solid wire; U-groove rolls for soft aluminum wire',
                      'Set drive roll tension correctly — too tight crushes tubular wire and causes flaking of flux coating inside the liner; too loose causes slippage and irregular wire feed speed',
                      'Inspect and replace the liner if kinked, dirty or worn — a contaminated liner is a major source of feeding problems and wire contamination',
                      'Install the correct contact tip for the wire diameter — contact tip bore should be slightly larger than the wire diameter (e.g., 0.9 mm tip for 0.9 mm wire); worn tips with elongated bores cause arc wander',
                      'Set the correct stick-out — GMAW: 10–20 mm for short-circuit; 20–25 mm for spray; FCAW: 16–25 mm depending on wire type; longer stick-out increases resistance heating of the wire',
                      'Verify shielding gas flow rate — set per WPS/WPDS; typically 15–25 L/min for shop applications; increase slightly for out-of-position welding and drafty conditions',
                      'Verify polarity — GMAW and FCAW-G use DCEP; FCAW-S polarity varies by wire designation — always confirm with the manufacturer\'s data sheet',
                    ],
                  },
                  {
                    type: 'table',
                    headers: ['GMAW/FCAW Parameter', 'Primary Effect', 'Interaction with Other Variables'],
                    rows: [
                      ['Wire feed speed (WFS)', 'Controls amperage (current); higher WFS = higher amperage = more heat input', 'Must be balanced with voltage; for a given wire diameter, WFS sets the operating point on the volt-amp curve'],
                      ['Voltage', 'Controls arc length and bead width; higher voltage = longer arc = wider, flatter bead', 'Too high with correct WFS: excessive spatter, wide flat bead, porosity. Too low: stubbing, convex bead, cold lap'],
                      ['Travel speed', 'Controls heat input per unit length and bead size; faster travel = less heat input = smaller bead', 'Must be adjusted when WFS or voltage changes; consistent travel speed is critical for consistent bead geometry'],
                      ['Gun angle (push vs. drag)', 'Push angle (forehand): flatter bead, less penetration, less spatter. Drag angle (backhand): deeper penetration, narrower bead', 'FCAW-G and FCAW-S are typically welded with a slight drag angle; GMAW can be pushed or dragged depending on application'],
                      ['Shielding gas flow rate', 'Controls atmospheric shielding; too low: porosity. Too high: turbulence that draws in air — also causes porosity', 'Wind and drafts reduce effective shielding; increase flow rate or use windscreens in outdoor applications'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'FCAW and GMAW share similar troubleshooting principles with SMAW. Porosity in GMAW is most commonly caused by insufficient shielding gas coverage — check for wind, drafts, incorrect flow rate, or a loose gas fitting. Porosity in FCAW-G may also indicate a depleted shielding gas cylinder or a loose connection. Porosity in FCAW-S indicates incorrect polarity, excessive stick-out, or a wire type not suited to the base metal. Worm-track or piping porosity (elongated pores aligned with the bead) in any wire process typically indicates severe shielding gas loss during welding.',
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 15 — Gas Tungsten Arc Welding (GTAW)
          // ============================================================
          {
            id: 'ch-15',
            number: 15,
            title: 'Gas Tungsten Arc Welding (GTAW)',
            subtitle: 'MWA D-15 · Welds Using GTAW Process (24% of MWA D)',
            isFree: false,
            estimatedMinutes: 70,
            sections: [
              {
                id: 'ch15-s1',
                title: '15.1 GTAW Process Fundamentals and Equipment',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Gas tungsten arc welding (GTAW), commonly called TIG welding, uses a non-consumable tungsten electrode to create an arc with the base metal, while filler metal (if used) is added separately by hand. An inert shielding gas (argon, helium or a mixture) protects both the arc zone and the solidifying weld metal from atmospheric contamination. GTAW produces the highest quality welds of all arc welding processes — with precise heat control, no spatter, and excellent metallurgical cleanliness — making it the process of choice for critical applications including stainless steel food-grade piping, titanium aerospace components, aluminum, copper alloys and root passes on pressure-critical pipe.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'AC Balance (GTAW on Aluminum)',
                    definition: 'A machine setting on AC GTAW power sources that controls the ratio of electrode-positive (EP) to electrode-negative (EN) portions of the AC cycle. The EP portion provides cathodic cleaning action — it breaks up the aluminum oxide layer on the surface, which is essential for fusion. The EN portion provides heat to the base metal and helps cool the tungsten electrode. Higher EP% increases cleaning but heats the tungsten; higher EN% increases penetration and electrode life. Most modern inverter AC GTAW machines allow the operator to set the AC balance percentage.',
                  },
                  {
                    type: 'table',
                    headers: ['Tungsten Electrode Type', 'Colour Code', 'Current Type', 'Key Application'],
                    rows: [
                      ['Pure tungsten (EWP)', 'Green', 'AC', 'Aluminum and magnesium GTAW with AC; forms a clean ball end; not suitable for DC applications'],
                      ['Thoriated (EWTh-2)', 'Red', 'DCEN', 'Carbon steel, stainless steel, nickel alloys; excellent arc starting; most widely used for DC GTAW; contains low-level radioactivity — handle and dispose of per local regulations'],
                      ['Ceriated (EWCe-2)', 'Grey', 'AC or DCEN', 'General purpose; good arc starting at low amperages; suitable for both AC (aluminum) and DC (steel) applications; preferred alternative to thoriated'],
                      ['Lanthanated (EWLa-1.5)', 'Gold', 'AC or DCEN', 'Similar to ceriated; excellent arc starting; non-radioactive; increasingly preferred over thoriated in production environments'],
                      ['Zirconiated (EWZr-1)', 'White', 'AC', 'Aluminum and magnesium; forms a very stable ball end; higher current capacity than pure tungsten; recommended for AC applications requiring high current'],
                      ['Rare earth blend', 'Varies by manufacturer', 'AC or DCEN', 'High-performance electrode for precision applications; combines properties of multiple rare earth additions'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'GTAW Shielding Gas Selection',
                    items: [
                      'Argon — most common GTAW shielding gas; provides good arc stability, cleaning action on aluminum (with AC), and effective shielding at relatively low flow rates; used for most ferrous and non-ferrous applications',
                      'Helium — higher thermal conductivity than argon; produces a hotter, more fluid weld pool; used for copper alloys, thick aluminum, and applications requiring deeper penetration; requires significantly higher flow rates than argon',
                      'Argon/helium mixtures — blend the arc stability of argon with the heat of helium; used for applications where increased heat input is needed without the cost of pure helium',
                      'Purging gas — for stainless steel, duplex, and titanium pipe welding, the back side of the weld joint must be purged with argon or nitrogen to prevent oxidation (sugaring) of the weld root; purge is maintained until the weld and heat-affected zone have cooled below the oxidation temperature',
                      'Post-flow time — after extinguishing the arc, shielding gas must continue flowing until the tungsten electrode and solidifying weld metal have cooled below the oxidation threshold; GTAW power sources include a post-flow timer for this purpose',
                    ],
                  },
                ],
              },
              {
                id: 'ch15-s2',
                title: '15.2 GTAW Setup, Parameters and Welding Technique',
                content: [
                  {
                    type: 'paragraph',
                    text: 'GTAW requires meticulous preparation: the base metal and filler metal must be chemically clean, the tungsten must be correctly prepared for the application, and the shielding gas system must be leak-free and set to the correct flow rate. Contamination is the primary cause of GTAW weld defects — even fingerprints on the base metal or filler rod can introduce sufficient contamination to cause porosity or tungsten inclusions.',
                  },
                  {
                    type: 'table',
                    headers: ['GTAW Setup Item', 'Correct Procedure', 'Effect of Error'],
                    rows: [
                      ['Tungsten preparation (DCEN)', 'Grind the tungsten to a sharp point aligned with the axis; grind toward the tip (not across it)', 'Blunt or off-axis tip causes arc wander, asymmetric heat distribution, and tungsten inclusions'],
                      ['Tungsten preparation (AC)', 'Start with a slightly tapered tungsten; allow the arc to ball the tip during the first few seconds — the ball should be 1–1.5x the electrode diameter', 'Asymmetric ball or sharp tip on AC causes unstable AC arc and poor cleaning of aluminum oxide'],
                      ['Tungsten stick-out', 'Minimum necessary to reach the weld joint — typically 3–6 mm beyond the cup end; increase with gas lens', 'Excessive stick-out reduces shielding gas effectiveness; increases contamination risk and tungsten overheating'],
                      ['Gas lens use', 'Use a gas lens body and larger cup for improved shielding gas coverage; allows longer stick-out without shielding loss', 'Without gas lens: turbulent shielding at the arc; shorter maximum stick-out; more contamination on stainless steel'],
                      ['Amperage control (foot pedal)', 'Use foot pedal to modulate amperage continuously during welding — increase at the start of the puddle, decrease to fill the crater at the end', 'Fixed amperage without crater fill causes crater cracks and shrinkage porosity at weld stops'],
                      ['Filler rod angle and feeding', 'Hold filler rod at 10–20° to the base metal surface and ahead of the puddle; add in a smooth, continuous dabbing motion without touching the tungsten', 'Touching the filler to the tungsten contaminates the tungsten (tungsten inclusion in the weld) and causes arc instability'],
                      ['Pre- and post-flow', 'Set pre-flow at 0.5–1 second; post-flow at 5–15 seconds depending on material and amperage', 'Insufficient pre-flow: tungsten oxidizes before arc starts. Insufficient post-flow: tungsten and weld metal oxidize as they cool'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'GTAW Torch Manipulation Techniques',
                    items: [
                      'Stringer bead — torch moves in a straight line; consistent torch angle and travel speed; used for root passes and capping stainless steel',
                      'Walking the cup — the cup (ceramic nozzle) is physically rocked from side to side on the pipe surface while the torch advances; used for pipe root and hot passes; provides extremely consistent arc length and torch angle; requires a gas lens and appropriate cup size',
                      'Forehand technique — torch angled toward the direction of travel at 10–15°; less penetration; used for capping passes and thin material',
                      'Backhand technique — torch angled away from the direction of travel; deeper penetration; used for root passes on heavier material',
                      'Autogenous welding — welding without filler metal; used for thin material butt joints and some pipe root passes where joint design and fitup are precise enough; requires very tight fitup tolerances',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 16 — Submerged Arc Welding (SAW)
          // ============================================================
          {
            id: 'ch-16',
            number: 16,
            title: 'Submerged Arc Welding (SAW)',
            subtitle: 'MWA D-16 · Welds Using SAW Process (9% of MWA D)',
            isFree: false,
            estimatedMinutes: 50,
            sections: [
              {
                id: 'ch16-s1',
                title: '16.1 SAW Process Fundamentals, Equipment and Consumable Selection',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Submerged arc welding is an automatic process in which the arc between a continuously fed solid or cored wire electrode and the base metal is completely submerged beneath a blanket of granular flux. Because the arc is hidden and the flux blanket absorbs fumes and radiant energy, SAW requires no welding helmet at the operator station and produces virtually no visible arc flash or spatter. The flux blanket also acts as a thermal insulator that slows cooling and allows high amperages and deposition rates far exceeding any manual process. SAW is used almost exclusively in the flat and horizontal positions and is the process of choice for pressure vessels, storage tanks, shipbuilding, bridge construction and any application involving long, straight welds on heavy plate.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'SAW Flux',
                    definition: 'A granular material that completely surrounds the SAW arc and molten weld pool. The flux serves as shielding (replacing the shielding gas of other processes), forms a slag that covers and shapes the bead, contributes alloying elements, and provides de-oxidation. SAW flux is classified as fused, bonded, active, reactive or neutral: fused flux is glassy, dense and moisture-resistant; bonded flux is made from powders bonded with a binder, easier to add alloying elements; neutral flux does not significantly change weld chemistry; active and reactive fluxes add manganese and silicon to compensate for losses during welding.',
                  },
                  {
                    type: 'table',
                    headers: ['SAW Component', 'Function', 'Critical Setup/Maintenance Requirement'],
                    rows: [
                      ['Power source (CC or CV capable)', 'Provides high current for sustained automatic welding; SAW is unique in that it is the only process that commonly uses both AC and DC simultaneously in twin-wire or tandem configurations', 'Single-wire SAW typically uses CV-DC. Multi-wire systems may use AC on trailing wires to reduce arc blow. Verify polarity and machine settings per WPS.'],
                      ['Wire feeder and control system', 'Feeds wire at a preset, constant speed; the control panel includes voltage, wire feed speed, travel speed and flux flow controls', 'Set drive roll tension for solid wire; inspect for wire feeding consistency before production welding'],
                      ['Welding head and boom', 'Supports the torch, flux hopper and contact tip assembly; traverses the joint at a programmed travel speed', 'Verify that tracking is straight and torch is centered over the joint before initiating the arc'],
                      ['Flux hopper', 'Feeds granular flux ahead of the arc to maintain a sufficient depth of coverage over the arc at all times', 'Fill hopper with dry, clean flux; flux depth above the arc must be sufficient to completely submerge the arc (typically 25–40 mm)'],
                      ['Contact tip (sub-arc tip) and barrel', 'Transfers welding current to the wire electrode; the barrel is a tubular extension that guides the wire into the flux', 'Replace contact tip when bore is elongated; inspect barrel for spatter buildup'],
                      ['Flux recovery system', 'Vacuums unfused flux from behind the weld for reuse after filtering and demagnetizing', 'Filter recovered flux to remove fines, slag particles and metal shot before reuse; demagnetize to prevent arc blow in subsequent passes'],
                      ['Runoff tabs', 'Short pieces of backing material added at the start and end of the weld to provide a full cross-section for the arc to start and finish on', 'Weld starts and stops on runoff tabs are typically removed after welding and are not part of the finished weld joint'],
                    ],
                  },
                ],
              },
              {
                id: 'ch16-s2',
                title: '16.2 SAW Setup, Parameters and Welding Operation',
                content: [
                  {
                    type: 'paragraph',
                    text: 'SAW parameter setting has more variables than manual processes, but the fundamental relationships are the same: amperage controls penetration and deposition rate; voltage controls bead width and flux consumption; travel speed controls heat input per unit length and bead size. All three must be balanced to produce a weld that meets the dimensional and quality requirements of the WPS. Because the arc is hidden from view, setup verification by a trial weld before production is essential.',
                  },
                  {
                    type: 'table',
                    headers: ['SAW Parameter', 'Primary Effect', 'Typical Range'],
                    rows: [
                      ['Amperage (wire feed speed)', 'Controls deposition rate and weld penetration; higher amperage = deeper penetration and higher deposition rate', 'Typically 300–1500 A depending on wire diameter and application; consult WPS'],
                      ['Voltage', 'Controls arc length and bead width; higher voltage = longer arc = wider, flatter bead and increased flux consumption', 'Typically 26–40 V for most structural SAW; higher voltage for wide bead, lower for narrow penetration bead'],
                      ['Travel speed', 'Controls heat input and bead size; faster travel = less heat input = smaller, narrower bead', 'Typically 300–1000 mm/min for structural SAW; verify with WPS'],
                      ['Electrode stick-out', 'Longer stick-out increases resistance heating of the wire, increasing deposition rate without increasing arc current; allows higher deposition rates', 'Typically 25–65 mm depending on wire diameter and application; set per WPS'],
                      ['Flux depth', 'Must completely submerge the arc to prevent arc flash, spatter and atmospheric contamination', 'Minimum 25 mm above the arc at all times; too deep can cause difficult slag removal and gas entrapment'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'SAW Pre-Weld and Dry-Run Checklist',
                    items: [
                      'Perform a dry run without striking the arc — traverse the full length of the joint to verify tracking, torch position and access; adjust before welding',
                      'Verify joint fitup, tack weld quality and cleanliness — SAW cannot tolerate poor fitup; excessive root openings cause burn-through; contamination causes porosity',
                      'Confirm flux is dry and free of contaminants — flux must be stored in a dry, heated area; wet flux causes severe porosity and can cause explosive spattering',
                      'Verify runoff tabs are attached and the weld can start and finish on them',
                      'Position the demagnetizer if arc blow is a concern — arc blow is caused by residual magnetism in the base metal and causes the arc to deflect from the joint',
                      'Confirm all safety requirements — although there is no arc flash at the operator station during SAW, UV/IR radiation is present at the arc zone; ensure nearby workers are shielded',
                      'Recover, filter and demagnetize flux between passes — reuse of unfiltered flux introduces fine particles and metal shot that can cause slag inclusions',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
          // ============================================================
          // CHAPTER 17 — Mock Exam
          // ============================================================
          {
            id: 'ch-17',
            number: 17,
            title: 'Red Seal Mock Exam',
            subtitle: 'All MWAs · Full 125-Question Simulated Red Seal Interprovincial Examination',
            isFree: false,
            isMockExam: true,
            estimatedMinutes: 150,
            sections: [
              {
                id: 'ch17-s1',
                title: '17.1 About the Red Seal Interprovincial Examination for Welders',
                content: [
                  {
                    type: 'paragraph',
                    text: 'The Red Seal Interprovincial Examination for Welders is a 125-question multiple-choice examination administered by provincial and territorial apprenticeship authorities. All questions are drawn from the common core sub-tasks of the RSOS Welder (2023) — sub-tasks validated as performed by at least 70% of responding jurisdictions across Canada. The examination is closed-book; no reference materials are permitted. Candidates have approximately 3 hours to complete the examination. The passing mark is 70% (88 correct answers out of 125).',
                  },
                  {
                    type: 'table',
                    headers: ['MWA', 'Title', 'Exam Weight', 'Approximate Questions'],
                    rows: [
                      ['A', 'Performs Common Occupational Skills', '16%', '20'],
                      ['B', 'Performs Layout and Fabrication of Components for Welding', '22%', '28'],
                      ['C', 'Performs Cutting and Gouging', '18%', '23'],
                      ['D', 'Performs Welding Processes', '44%', '55'],
                      ['Total', '', '100%', '125'],
                    ],
                  },
                  {
                    type: 'keyTerm',
                    term: 'Red Seal (Interprovincial Standards Program)',
                    definition: 'A Canada-wide program administered by the Canadian Council of Directors of Apprenticeship (CCDA) that certifies journeypersons who have demonstrated their trade knowledge to a national standard. A Red Seal endorsement on a provincial Certificate of Qualification allows a welder to work across Canada without further examination in participating provinces and territories, facilitating interprovincial labour mobility.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Examination Strategy',
                    items: [
                      'Read every question completely before selecting an answer — many questions include qualifiers such as "most likely", "best practice", "according to the WPS" or "as per code" that change the correct answer',
                      'Eliminate clearly incorrect answers first — this improves the odds even when you are not certain of the correct answer',
                      'Focus study time proportional to exam weighting — MWA D (welding processes, 44%) and MWA B (layout and fabrication, 22%) together account for 66% of the exam',
                      'Expect calculation questions — heat input, sling angle, unit conversion and geometric layout calculations appear regularly; practice using the formula Heat Input (kJ/mm) = (Amps × Volts × 60) / (Travel Speed mm/min × 1000)',
                      'Know the electrode classification systems — AWS SMAW, GMAW, GTAW, FCAW and SAW electrode designations are heavily tested',
                      'Know the welding positions (1G, 2G, 3G, 4G, 5G, 6G) and which processes are approved for each position in the governing codes',
                      'Understand the difference between a discontinuity and a defect — and know the common acceptance criteria in CSA W59 and AWS D1.1',
                      'Pace yourself — 125 questions in approximately 3 hours allows approximately 90 seconds per question; flag difficult questions and return to them',
                      'Review your answers — if time permits, review all flagged questions; do not change answers based on second-guessing unless you have a specific reason',
                    ],
                  },
                ],
              },
              {
                id: 'ch17-s2',
                title: '17.2 Heat Input Calculation Reference',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Heat input calculations appear regularly on the Red Seal examination and in WPS/WPDS documents. The formula converts amperage, voltage and travel speed into a measure of energy delivered per unit length of weld. Heat input directly affects the cooling rate of the weld and heat-affected zone, which in turn determines the mechanical properties of the finished weld. Excessive heat input can reduce toughness, cause grain growth, and sensitize stainless steel; insufficient heat input can cause incomplete fusion and hydrogen-induced cracking in susceptible steels.',
                  },
                  {
                    type: 'formula',
                    title: 'Heat Input Formula',
                    formula: 'Heat Input (kJ/mm) = (Amps × Volts × 60) / (Travel Speed in mm/min × 1000)',
                    variables: [
                      { symbol: 'Amps', description: 'Welding current in amperes (A)' },
                      { symbol: 'Volts', description: 'Arc voltage in volts (V)' },
                      { symbol: '60', description: 'Conversion factor (seconds per minute)' },
                      { symbol: 'Travel Speed', description: 'Speed of travel along the joint in mm/min' },
                      { symbol: '1000', description: 'Conversion factor (joules to kilojoules)' },
                    ],
                    example: 'A welder is welding with SMAW at 150 A and 24 V, with a travel speed of 200 mm/min. Heat Input = (150 × 24 × 60) / (200 × 1000) = 216 000 / 200 000 = 1.08 kJ/mm.',
                  },
                  {
                    type: 'paragraph',
                    text: 'The WPS/WPDS specifies maximum and/or minimum heat input limits for the qualified procedure. If the welder\'s parameters produce a heat input outside the qualified range, the weld is no longer produced under a qualified procedure and must be stopped until the parameters are corrected. Keeping records of actual amperage, voltage and travel speed allows verification of heat input compliance during production welding.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Key Formulas and Calculations for the Red Seal Exam',
                    items: [
                      'Heat input: HI (kJ/mm) = (A × V × 60) / (TS mm/min × 1000)',
                      'Unit conversion — millimetres to inches: 1 inch = 25.4 mm; divide mm by 25.4 to get inches',
                      'Circumference of pipe: C = π × d (where d = outside diameter); used for calculating wrap-around template length',
                      'Pythagorean theorem: c = √(a² + b²); used for calculating diagonal dimensions and brace lengths',
                      'Sling angle factor: a sling angle of 30° to vertical reduces the WLL to 50% of the rated value; 45° reduces it to 71%; 60° reduces it to 87% — always calculate the actual load on each sling leg',
                      'Offset calculation (45° fitting): Travel = setback × 1.414; Run = setback × 1.0; Setback = offset distance / 1.414',
                      'Bend allowance: the additional material needed for a bend = (π/180) × bend angle × (inside radius + (material thickness × 0.44 for a 90° bend))',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [],
          },
  
        ], 
      }, 
  
    ], 
  }; 
  
  // ============================================================
  // Bottom of file — Part 1 export block
  // ============================================================
  const _parts = welderCourse.parts;
  const _allChapters = _parts.flatMap((p) => p.chapters);
  const _totalChapters = _allChapters.length;
  const _totalQuestions = 0; // Questions live in the separate questions seed file
  
  export const welderCourseData = {
    id: 'welder-456a',
    slug: 'welder-456a',
    title: 'Welder (Red Seal 456A) Exam Prep',
    subtitle: 'Complete study guide — Red Seal Interprovincial Exam, 125 questions',
    trade: 'Welder',
    tradeCode: '456A',
    price: 4999,
    currency: 'CAD',
    totalChapters: _totalChapters,
    totalQuestions: _totalQuestions,
    passingMark: 70,
    features: [
      '17 chapters covering all 4 Major Work Activities (MWA)',
      `${_totalQuestions}+ practice questions with explanations`,
      'Red Seal–style mock exam and exam strategy',
      'Formulas reference and key terms glossary',
      'Based on Red Seal Occupational Standard (RSOS) – Welder 2023',
      '5-year access — study at your own pace',
    ],
    parts: _parts,
  };
  
  export default welderCourseData;