export const hvacCourse = {
  id: 'refrigeration-air-conditioning-mechanic-313a',
  slug: 'refrigeration-air-conditioning-mechanic-313a',
  title: 'Refrigeration & Air Conditioning Mechanic Certification Exam Prep',
  description: 'Prepare for the Refrigeration & Air Conditioning Mechanic Red Seal exam with targeted study content, glossary support, and a robust mock exam for Trade 313A.',
  seoTitle: 'Refrigeration & Air Conditioning Mechanic Red Seal Exam Prep — 313A Study Guide',
  seoDescription: 'Master the Refrigeration & Air Conditioning Mechanic Red Seal exam with detailed study modules and practice resources for Trade 313A.',
  seoKeywords: 'Refrigeration and Air Conditioning Mechanic, 313A, 313A practice exam, Refrigeration and Air Conditioning Mechanic Red Seal exam, 313A exam prep, HVAC Red Seal practice test, HVAC certification Canada, HVAC apprenticeship exam, HVAC study guide, HVAC practice questions, HVAC mock exam, Red Seal HVAC exam, Red Seal exam preparation, Red Seal practice exam, Red Seal practice questions, Red Seal certification, Canada trade certification, Trade exam prep, Apprenticeship exam preparation, Red Seal study guide, Red Seal mock exam, Pass your Red Seal exam',
  ogImage: '/course-images/og/hvac.png',
  subtitle: 'Complete Study Guide — Skilled Trades Ontario Trade 313A',
  trade: 'Refrigeration & Air Conditioning Mechanic',
  tradeCode: '313A',
  price: 4999,
  currency: 'CAD',
  totalChapters: 20,
  totalQuestions: 134, // Questions moved to server/scripts/seedPracticeQuestions.js (practice API)
  passingMark: 70,
  examFormat: 'Multiple-choice, computer-based (Prometric Canada Testing Services)',
  features: [
    '20 exam-aligned chapters covering all 6 MWAs',
    '134 practice questions with detailed explanations',
    'Full-coverage glossary for every part of the trade',
    'Mock exam with annotated answer key',
    'Exam strategy guide and timing tips',
    'Covers CSA B52, B149, ASHRAE, WHMIS, and CEC references'
  ],


  parts: [

    // ============================================================
    // CertReady — HVAC/R (313A) Master Course: PART 1
    // Based on: RSOS 2024 (MWA A: Performs Common Occupational Skills)
    // ============================================================

    {
      id: 'part-1',
      number: 1,
      title: 'Common Occupational Skills',
      description: 'The regulatory, safety, and professional foundations of the trade.',
      weight: '8% of Total Exam',

      chapters: [

        // ============================================================
        // CHAPTER 1: TRADE GLOSSARY — COMMON OCCUPATIONAL SKILLS
        // ============================================================
        {
          id: 'ch-1',
          number: 1,
          title: 'Key Terms and Glossary',
          subtitle: 'Definitions of all key terms from Chapters 1–4',
          isFree: true,
          estimatedMinutes: 25,
          sections: [
            {
              id: 'ch1-s1',
              title: '1.1 Glossary',
              content: [
                {
                  "type": "keyTerm",
                  "term": "Accumulator",
                  "definition": "A vessel located in the suction line that traps liquid refrigerant and prevents it from entering the compressor, where it would cause mechanical damage (liquid slugging)."
                },
                {
                  "type": "keyTerm",
                  "term": "Acid Test",
                  "definition": "A chemical test performed on compressor oil using a test kit to detect hydrofluoric or hydrochloric acid; required after any motor burnout."
                },
                {
                  "type": "keyTerm",
                  "term": "Actuator",
                  "definition": "A device that receives an electrical or pneumatic signal from a controller and physically moves a valve or damper to a commanded position."
                },
                {
                  "type": "keyTerm",
                  "term": "AHJ (Authority Having Jurisdiction)",
                  "definition": "The organization, office, or individual responsible for enforcing the requirements of a code or standard."
                },
                {
                  "type": "keyTerm",
                  "term": "As-built Drawings",
                  "definition": "Drawings that have been updated to reflect the actual installation, including field deviations from the original design documents."
                },
                {
                  "type": "keyTerm",
                  "term": "ASHRAE",
                  "definition": "American Society of Heating, Refrigerating and Air-Conditioning Engineers; the primary source for HVAC design standards, including load calculation methods (Manual J equivalent) and ventilation standards (62.1)."
                },
                {
                  "type": "keyTerm",
                  "term": "B149.1",
                  "definition": "The CSA Natural Gas and Propane Installation Code, governing the installation of gas-fired heating and cooling equipment."
                },
                {
                  "type": "keyTerm",
                  "term": "B52 Code",
                  "definition": "The Mechanical Refrigeration Code (CSA B52) in Canada, governing the design, construction, installation, and maintenance of refrigeration systems."
                },
                {
                  "type": "keyTerm",
                  "term": "BACnet",
                  "definition": "A data communication protocol for Building Automation and Control Networks, standardized by ASHRAE; widely used for HVAC/R control system integration."
                },
                {
                  "type": "keyTerm",
                  "term": "Breakdown Maintenance",
                  "definition": "Reactive maintenance performed only after equipment has failed; the most expensive and disruptive maintenance strategy."
                },
                {
                  "type": "keyTerm",
                  "term": "Bubble Point",
                  "definition": "The temperature at which a refrigerant liquid starts to boil at a given pressure."
                },
                {
                  "type": "keyTerm",
                  "term": "Building Envelope",
                  "definition": "The physical separator between the conditioned and unconditioned environment of a building (walls, roof, windows, foundation)."
                },
                {
                  "type": "keyTerm",
                  "term": "Burnout (Motor/Compressor)",
                  "definition": "A catastrophic failure where motor windings overheat and carbonize, contaminating the entire refrigerant circuit with acid, soot, and carbon particles."
                },
                {
                  "type": "keyTerm",
                  "term": "Capillary Action",
                  "definition": "The ability of a liquid to flow in narrow spaces without the assistance of, or even in opposition to, external forces like gravity; essential for soldering and brazing."
                },
                {
                  "type": "keyTerm",
                  "term": "Commissioning",
                  "definition": "The process of verifying and documenting that a system and all of its components are installed, tested, operated, and maintained according to the operational requirements of the owner or final client."
                },
                {
                  "type": "keyTerm",
                  "term": "Commissioning (Cx)",
                  "definition": "The systematic process of verifying that all systems and components are installed, tested, and operating according to the design intent and the owner's project requirements."
                },
                {
                  "type": "keyTerm",
                  "term": "Competency",
                  "definition": "The combination of skills, knowledge, and behaviours required to perform a trade task to a professional standard."
                },
                {
                  "type": "keyTerm",
                  "term": "Compression Ratio",
                  "definition": "The ratio of absolute discharge pressure to absolute suction pressure; values above 10:1 indicate compressor stress; values above 12:1 risk overheating."
                },
                {
                  "type": "keyTerm",
                  "term": "Critical Path",
                  "definition": "The sequence of dependent tasks that determines the minimum project duration; delays to any task on the critical path directly delay the project."
                },
                {
                  "type": "keyTerm",
                  "term": "Curb (Roof Curb)",
                  "definition": "A raised metal frame installed on a roof to support a rooftop unit (RTU) and provide a weather-tight, thermally broken connection to the supply and return ductwork."
                },
                {
                  "type": "keyTerm",
                  "term": "DDC (Direct Digital Control)",
                  "definition": "A system where a local controller manages the system through digital signals from sensors."
                },
                {
                  "type": "keyTerm",
                  "term": "Defrost",
                  "definition": "The process of removing frost or ice from an evaporator coil to maintain heat transfer efficiency."
                },
                {
                  "type": "keyTerm",
                  "term": "Design Intent",
                  "definition": "The detailed explanation of the ideas, concepts, and criteria that the engineer determined to be important to the building owner."
                },
                {
                  "type": "keyTerm",
                  "term": "Dew Point",
                  "definition": "The temperature at which a refrigerant vapor starts to condense into a liquid."
                },
                {
                  "type": "keyTerm",
                  "term": "Discharge Superheat",
                  "definition": "The temperature of the refrigerant vapor at the compressor discharge above the saturation temperature at discharge pressure; an indicator of compressor health."
                },
                {
                  "type": "keyTerm",
                  "term": "Diversity Factor",
                  "definition": "The ratio of the sum of individual maximum demands of system subdivisions to the maximum demand of the whole; used to right-size central plant equipment."
                },
                {
                  "type": "keyTerm",
                  "term": "Enthalpy",
                  "definition": "The total heat content of a substance (sensible plus latent heat)."
                },
                {
                  "type": "keyTerm",
                  "term": "Evaporative Condenser",
                  "definition": "A condenser that rejects heat using both evaporating water (latent cooling) and forced airflow; used for large commercial refrigeration plants."
                },
                {
                  "type": "keyTerm",
                  "term": "Evaporator Delta T",
                  "definition": "The air temperature difference across the evaporator coil; typically 18–22°F for comfort cooling applications."
                },
                {
                  "type": "keyTerm",
                  "term": "Evaporator Superheat",
                  "definition": "The superheat measured at the evaporator outlet, used to set the TXV. Target is typically 8–12°F for comfort cooling."
                },
                {
                  "type": "keyTerm",
                  "term": "Filter-Drier",
                  "definition": "A sealed vessel containing desiccant (molecular sieve or silica gel) and a filter screen to remove moisture, acid, and particulate from the refrigerant circuit."
                },
                {
                  "type": "keyTerm",
                  "term": "Flare Fitting",
                  "definition": "A mechanical joint created by deforming the end of copper tubing into a 45° cone shape and clamping it with a flare nut; used where brazing is not permitted."
                },
                {
                  "type": "keyTerm",
                  "term": "Fractionation",
                  "definition": "The separation of a refrigerant blend into its individual component gases due to different boiling points, typically occurring during a leak in the vapor phase."
                },
                {
                  "type": "keyTerm",
                  "term": "Glide (Temperature Glide)",
                  "definition": "The difference between the dew point and the bubble point of a refrigerant blend."
                },
                {
                  "type": "keyTerm",
                  "term": "GWP (Global Warming Potential)",
                  "definition": "A measure of how much a given mass of greenhouse gas is estimated to contribute to global warming relative to carbon dioxide."
                },
                {
                  "type": "keyTerm",
                  "term": "Hazard Assessment",
                  "definition": "A formal process of identifying, evaluating, and controlling workplace hazards before work begins."
                },
                {
                  "type": "keyTerm",
                  "term": "Hygroscopic",
                  "definition": "The property of a substance (like POE oil) that allows it to readily absorb moisture from the air."
                },
                {
                  "type": "keyTerm",
                  "term": "Infiltration",
                  "definition": "Uncontrolled inward leakage of outdoor air through building envelope gaps; adds to both sensible and latent cooling loads."
                },
                {
                  "type": "keyTerm",
                  "term": "LEL (Lower Explosive Limit)",
                  "definition": "The minimum concentration of a gas in air below which it will not ignite. Critical for working with A2L and A3 refrigerants."
                },
                {
                  "type": "keyTerm",
                  "term": "LOTO (Lock-out/Tag-out)",
                  "definition": "A safety procedure to ensure that dangerous machinery is properly shut off and cannot be accidentally started up before maintenance is complete."
                },
                {
                  "type": "keyTerm",
                  "term": "Material Take-off (MTO)",
                  "definition": "A detailed list of all materials, components, and quantities required for a specific installation project, used for purchasing and budgeting."
                },
                {
                  "type": "keyTerm",
                  "term": "MCA (Minimum Circuit Ampacity)",
                  "definition": "The minimum ampacity rating required for the supply circuit conductors to a piece of equipment, as specified on the nameplate."
                },
                {
                  "type": "keyTerm",
                  "term": "Megohmmeter (Megger)",
                  "definition": "An instrument that applies high voltage (500–1,000V DC) to measure insulation resistance of motor windings; readings below 1 MΩ indicate imminent motor failure."
                },
                {
                  "type": "keyTerm",
                  "term": "MERV Rating",
                  "definition": "Minimum Efficiency Reporting Value; a scale (1–16) rating an air filter's ability to capture particles of various sizes. Higher MERV = more efficient filtration = higher pressure drop."
                },
                {
                  "type": "keyTerm",
                  "term": "Micron",
                  "definition": "A unit of measure for vacuum; 1,000 microns equals 1 millimeter of mercury (mmHg). Red Seal target vacuum is typically 500 microns or below."
                },
                {
                  "type": "keyTerm",
                  "term": "Modbus",
                  "definition": "A serial communication protocol widely used in industrial and HVAC/R controls for communication between PLCs, VFDs, and BAS controllers."
                },
                {
                  "type": "keyTerm",
                  "term": "MOP (Maximum Overcurrent Protection)",
                  "definition": "The maximum fuse or breaker size permitted to protect a piece of equipment, as specified on the nameplate."
                },
                {
                  "type": "keyTerm",
                  "term": "Nominal Capacity",
                  "definition": "The rated capacity of a piece of equipment (e.g., a \"5-ton\" AC unit), which differs from actual capacity based on operating conditions (ambient temp, entering water temperature)."
                },
                {
                  "type": "keyTerm",
                  "term": "Non-condensables",
                  "definition": "Gases (like air or nitrogen) that do not condense at the temperatures and pressures found in a refrigeration system, leading to elevated discharge pressures."
                },
                {
                  "type": "keyTerm",
                  "term": "Oil Separator",
                  "definition": "A component installed in the discharge line that separates compressor oil from the high-pressure gas and returns it directly to the compressor crankcase."
                },
                {
                  "type": "keyTerm",
                  "term": "Ozone-depletion",
                  "definition": "The destruction of the upper atmospheric layer of ozone gas by chlorofluorocarbons (CFCs) and hydrochlorofluorocarbons (HCFCs)."
                },
                {
                  "type": "keyTerm",
                  "term": "Phosphor-Copper (PhosCopper)",
                  "definition": "A brazing alloy used for copper-to-copper joints; contains approximately 5–6% silver and does not require flux on copper."
                },
                {
                  "type": "keyTerm",
                  "term": "PPE (Personal Protective Equipment)",
                  "definition": "Equipment worn to minimize exposure to hazards that cause serious workplace injuries and illnesses."
                },
                {
                  "type": "keyTerm",
                  "term": "Predictive Maintenance",
                  "definition": "A condition-monitoring strategy that uses diagnostic tools (vibration analysis, oil analysis, thermography) to predict failures before they occur."
                },
                {
                  "type": "keyTerm",
                  "term": "Preventive Maintenance (PM)",
                  "definition": "Scheduled inspections, cleaning, and servicing tasks designed to maintain equipment reliability and efficiency and extend service life."
                },
                {
                  "type": "keyTerm",
                  "term": "Psychrometrics",
                  "definition": "The study of the physical and thermodynamic properties of gas-vapor mixtures, specifically air and water vapor."
                },
                {
                  "type": "keyTerm",
                  "term": "Punch List",
                  "definition": "A project document listing deficiencies identified during commissioning that must be corrected before final system handover and payment."
                },
                {
                  "type": "keyTerm",
                  "term": "Receiver",
                  "definition": "A storage vessel for liquid refrigerant located on the high-pressure side after the condenser, allowing the system to store charge during part-load operation."
                },
                {
                  "type": "keyTerm",
                  "term": "Saturation Temperature",
                  "definition": "The temperature at which a liquid boils or a vapor condenses at a given pressure."
                },
                {
                  "type": "keyTerm",
                  "term": "SDS (Safety Data Sheet)",
                  "definition": "A standardized document that provides hazard information about a chemical or substance, required under WHMIS."
                },
                {
                  "type": "keyTerm",
                  "term": "Seismic Restraint",
                  "definition": "Engineered mechanical supports that prevent equipment from moving or toppling during a seismic event; mandatory in defined seismic design categories."
                },
                {
                  "type": "keyTerm",
                  "term": "Sensible Heat Ratio (SHR)",
                  "definition": "The ratio of sensible cooling capacity to total cooling capacity. A lower SHR indicates higher dehumidification capacity — critical for high-latent environments like humid climates."
                },
                {
                  "type": "keyTerm",
                  "term": "Silver Solder (45% Silver)",
                  "definition": "A higher-strength brazing alloy used for copper-to-brass or copper-to-steel joints; requires flux."
                },
                {
                  "type": "keyTerm",
                  "term": "Static Pressure",
                  "definition": "The pressure exerted perpendicular to airflow direction, representing the resistance in ductwork, filters, and coils. Measured in inches of water column (in. w.c.) or Pascals."
                },
                {
                  "type": "keyTerm",
                  "term": "Subcooling",
                  "definition": "The number of degrees a liquid is cooled below its saturation temperature."
                },
                {
                  "type": "keyTerm",
                  "term": "Superheat",
                  "definition": "The number of degrees a vapor is heated above its saturation temperature."
                },
                {
                  "type": "keyTerm",
                  "term": "System Cleanup",
                  "definition": "The multi-step process of removing acid, carbon, and moisture from a refrigerant system following a motor burnout, using suction-line driers and multiple oil changes."
                },
                {
                  "type": "keyTerm",
                  "term": "System Optimization",
                  "definition": "The process of adjusting setpoints, VFD speeds, and control parameters after functional testing to achieve the highest possible energy efficiency while maintaining design conditions."
                },
                {
                  "type": "keyTerm",
                  "term": "TDG (Transportation of Dangerous Goods)",
                  "definition": "Canadian federal regulations governing the safe handling, offering, and transporting of dangerous goods, including refrigerant cylinders."
                },
                {
                  "type": "keyTerm",
                  "term": "Total Acid Number (TAN)",
                  "definition": "A measure of the acid content in lubricating oil; a TAN above 0.05 mg KOH/g indicates the system requires acid cleanup before the new compressor is safe."
                },
                {
                  "type": "keyTerm",
                  "term": "Total Static Pressure",
                  "definition": "The sum of all resistance in an air delivery system (filters, coils, ductwork, terminal units); must not exceed the fan's rated capacity at the design CFM."
                },
                {
                  "type": "keyTerm",
                  "term": "Triple Evacuation",
                  "definition": "A process of evacuating a system to 1,500 microns, breaking the vacuum with dry nitrogen, and repeating the cycle three times before achieving a final vacuum hold of 500 microns."
                },
                {
                  "type": "keyTerm",
                  "term": "VAV (Variable Air Volume)",
                  "definition": "An HVAC system that controls zone temperature by varying the volume of supply air delivered, rather than varying the air temperature."
                },
                {
                  "type": "keyTerm",
                  "term": "Vibration Isolator",
                  "definition": "Spring or elastomeric (rubber) mounts placed between equipment and the building structure to prevent mechanical vibration and noise transfer."
                },
                {
                  "type": "keyTerm",
                  "term": "VRF (Variable Refrigerant Flow)",
                  "definition": "An engineered multi-split system using at least one variable capacity compressor to distribute refrigerant to multiple indoor units."
                },
                {
                  "type": "keyTerm",
                  "term": "WHMIS (Workplace Hazardous Materials Information System)",
                  "definition": "Canada's national hazard communication standard for workplace chemical safety, aligned with the Globally Harmonized System (GHS)."
                },
                {
                  "type": "keyTerm",
                  "term": "WLL (Working Load Limit)",
                  "definition": "The maximum mass or force which a product (sling, shackle, spreader bar) is authorized to support in general service."
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 2: SAFETY AND HEALTHY WORKPLACE (Task A-1)
        // Exam Weight: 81% of MWA A
        // ============================================================
        {
          id: 'ch-2',
          number: 2,
          title: 'Safety and Healthy Workplace',
          subtitle: 'Hazard identification, LOTO, PPE, and workplace wellness',
          isFree: true,
          estimatedMinutes: 45,
          sections: [
            {
              id: 'ch2-s1',
              title: '2.1 Maintaining a Safe Work Environment (A-1.01)',
              content: [
                {
                  type: 'text',
                  text: 'A mechanic must identify and mitigate workplace hazards to protect themselves and others. Hazard recognition is the foundation of every safe job site.'
                },
                {
                  type: 'list',
                  title: 'Hazard Identification & Mitigation',
                  items: [
                    '**Physical Hazards**: Lifting injuries, sharp sheet-metal edges, rotating parts (fans/pulleys), and working at heights above 3 metres.',
                    '**Environmental Hazards**: High voltage (480V 3-phase systems), pressurized gases, extreme temperatures (rooftop work in summer/winter), and sustained noise above 85 dB.',
                    '**Chemical Hazards**: Refrigerant exposure (asphyxiation risk in confined spaces), brazing flux fumes, and coil-cleaning chemicals.',
                    '**Safety Documentation**: Maintaining SDS (Safety Data Sheets), following SOPs (Safe Operating Procedures), and adhering to WHMIS/TDG regulations.',
                    '**Housekeeping**: Keeping work areas clean and free of clutter to prevent slips, trips, and falls — the most common jobsite injury.',
                    '**Safety Meetings**: Participating in toolbox/tailgate meetings to discuss site-specific risks and share lessons from recent incidents.'
                  ]
                },
                {
                  type: 'callout',
                  style: 'exam-tip',
                  text: 'Exam questions often present a scenario and ask for the "first" step. The correct answer almost always involves hazard identification before any physical task begins.'
                }
              ]
            },
            {
              id: 'ch2-s2',
              title: '2.2 Lock-out/Tag-out (LOTO) Procedures (A-1.02)',
              content: [
                {
                  type: 'text',
                  text: 'LOTO is mandatory before any service or maintenance task to prevent the accidental release of hazardous energy. In the HVAC/R trade, energy sources are numerous and not always obvious.'
                },
                {
                  type: 'list',
                  title: 'Types of Energy to Isolate',
                  items: [
                    '**Electrical**: Main disconnect, control voltage (24V), and stored charge in capacitors and VFDs.',
                    '**Mechanical**: Springs in dampers, rotating fans that freewheel after power is cut.',
                    '**Pneumatic/Pressure**: High-pressure refrigerant in the system — always recover before opening any joint.',
                    '**Thermal**: Hot heat exchangers, steam coils, and boiler connections.',
                    '**Gravitational**: Suspended equipment that could fall if supports are removed.'
                  ]
                },
                {
                  type: 'list',
                  title: 'LOTO Protocol Steps',
                  items: [
                    '1. **Notify** affected workers and supervisors.',
                    '2. **Identify** all energy sources (refer to equipment schematics).',
                    '3. **Shut down** all energy sources using normal stopping procedures.',
                    '4. **Isolate** — open disconnects, close valves, block movable parts.',
                    '5. **Lock and Tag** — each worker applies their own personal lock; "one person, one lock".',
                    '6. **Verify** a Zero Energy State before touching any component.',
                    '7. **Re-energize** only after all workers have removed their personal locks.'
                  ]
                },
                {
                  type: 'callout',
                  style: 'warning',
                  text: 'VFDs contain large capacitors that store a lethal charge (up to 800V DC) even after power is disconnected. Always wait the manufacturer-specified discharge time (typically 5–10 minutes) and then verify with a calibrated multimeter before working inside the drive.'
                }
              ]
            },
            {
              id: 'ch2-s3',
              title: '2.3 Personal Protective Equipment (PPE) (A-1.03)',
              content: [
                {
                  type: 'text',
                  text: 'PPE selection must match the specific hazard. The hierarchy of controls places PPE as the last line of defense — after elimination, substitution, and engineering controls.'
                },
                {
                  type: 'list',
                  title: 'Mandatory Trade PPE',
                  items: [
                    '**Head & Eye**: Hard hats in active construction zones; safety glasses or goggles for debris, chemical splashes, and brazing operations.',
                    '**Hearing Protection**: Earplugs (NRR 29) or earmuffs for sustained work in mechanical rooms above 85 dB.',
                    '**Respiratory**: N95 masks for dust; half-face respirators with organic vapor cartridges for brazing fumes or refrigerant recovery in poorly ventilated spaces.',
                    '**Skin & Electrical**: CSA-rated safety boots (Green Triangle), chemical-resistant gloves for coil cleaning, cut-resistant gloves for sheet metal, and arc-rated (FR) clothing for 480V+ electrical work.',
                    '**Fall Protection**: Full-body harness with 100% tie-off when working at heights ≥3 m (Ontario) or as required by site-specific plan.',
                    '**Cold Weather**: Insulating gloves and face coverings when handling cryogenic refrigerants (CO2, ammonia) or working in walk-in freezers.'
                  ]
                }
              ]
            },
            {
              id: 'ch2-s4',
              title: '2.4 Confined Space Entry (A-1.01 — Advanced)',
              content: [
                {
                  type: 'text',
                  text: 'HVAC/R mechanics frequently work in or near confined spaces such as mechanical rooms, roof plenums, and equipment pits. A confined space is not designed for continuous occupancy and has limited means of entry/exit.'
                },
                {
                  type: 'list',
                  items: [
                    '**Permit-Required Spaces**: Identified when there is a potential for a hazardous atmosphere (oxygen deficiency, toxic gas, flammable vapour) — requires a written permit, attendant, and rescue plan.',
                    '**Atmospheric Testing**: Oxygen level (19.5–23.5%), combustible gas (< 10% LEL), and toxic gas (e.g., ammonia < 25 ppm TLV-TWA) must be verified before entry.',
                    '**Refrigerant Risk**: R-717 (Ammonia) is particularly dangerous in confined spaces due to its toxicity. R-744 (CO2) can rapidly displace oxygen.'
                  ]
                }
              ]
            },
            {
              id: 'ch2-s5',
              title: '2.5 Healthy and Respectful Workplace (A-1.04)',
              content: [
                {
                  type: 'text',
                  text: 'Mental and physical fitness are critical for high-stakes mechanical work. Impairment — whether from fatigue, substance use, or mental health — directly increases the risk of serious injury.'
                },
                {
                  type: 'list',
                  items: [
                    '**Professional Conduct**: Adhering to codes of ethics and zero-tolerance policies for harassment, discrimination, and workplace violence as defined under the Ontario Human Rights Code.',
                    '**Fitness for Work**: Managing diet, exercise, and sleep to maintain alertness; recognizing signs of fatigue in yourself and your team.',
                    '**Substance Use Policy**: Understanding employer and legislative obligations regarding impairment from alcohol, cannabis, and prescription medications.',
                    '**Stress Management**: Utilizing EAP (Employee Assistance Programs) and peer support networks to handle demanding workloads and high-pressure service calls.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 3: CONTINUOUS LEARNING (Task A-2)
        // Exam Weight: 9% of MWA A
        // ============================================================
        {
          id: 'ch-3',
          number: 3,
          title: 'Continuous Learning',
          subtitle: 'Upskilling, industry standards, and professional development',
          isFree: true,
          estimatedMinutes: 20,
          sections: [
            {
              id: 'ch3-s1',
              title: '3.1 Upskilling and Industry Standards (A-2.01)',
              content: [
                {
                  type: 'text',
                  text: 'The HVAC/R trade evolves rapidly with new refrigerants, digital controls, and energy codes. A journeyperson is expected to proactively maintain and upgrade their skills throughout their career.'
                },
                {
                  type: 'list',
                  items: [
                    '**Formal Education**: Attending manufacturer training seminars (e.g., Daikin, Carrier, Mitsubishi), TSSA/ESA update courses, and college continuing education programs.',
                    '**Self-directed Learning**: Subscribing to ASHRAE publications, HPAC Engineering magazine, and Contracting Business; staying current on CSA code amendments.',
                    '**Digital Tools**: Developing proficiency in BAS (Building Automation System) software, digital manifolds with Bluetooth logging, and energy management platforms.',
                    '**Professional Associations**: Engaging with HRAI (Heating, Refrigeration and Air Conditioning Institute of Canada) and local trade chapters for networking and emerging-issue seminars.'
                  ]
                }
              ]
            },
            {
              id: 'ch3-s2',
              title: '3.2 Evaluating Information Sources (A-2.02)',
              content: [
                {
                  type: 'text',
                  text: 'Not all technical information is equally reliable. Mechanics must be able to distinguish credible sources from outdated or inaccurate ones.'
                },
                {
                  type: 'list',
                  items: [
                    '**Primary Sources**: Manufacturer installation manuals, CSA/ASHRAE standards, and TSSA/Technical Standards and Safety Authority directives.',
                    '**Secondary Sources**: Trade textbooks, peer-reviewed journal articles, and accredited training materials.',
                    '**Critical Evaluation**: Cross-referencing online forum advice with official documentation; verifying that the code edition referenced is the currently adopted version in your jurisdiction.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 4: COMMUNICATION AND MENTORING (Task A-3)
        // Exam Weight: 10% of MWA A
        // ============================================================
        {
          id: 'ch-4',
          number: 4,
          title: 'Communication and Mentoring',
          subtitle: 'Professional communication, documentation, and apprentice development',
          isFree: false,
          estimatedMinutes: 25,
          sections: [
            {
              id: 'ch4-s1',
              title: '4.1 Effective Communication Techniques (A-3.01)',
              content: [
                {
                  type: 'text',
                  text: 'Clear communication between the mechanic, the client, the general contractor, and other trades prevents costly errors and builds professional reputation. Communication failures are a leading cause of jobsite rework.'
                },
                {
                  type: 'list',
                  items: [
                    '**Active Listening**: Paraphrasing back what a client or supervisor has said to confirm understanding before taking action.',
                    '**Professional Written Communication**: Structuring clear and concise site reports, work orders, deficiency lists, and handover emails.',
                    '**Verbal Clarity**: Using proper trade terminology with colleagues; simplifying technical language when communicating with building owners.',
                    '**Conflict Resolution**: Escalating disagreements about scope or safety through proper channels (supervisor, project manager) rather than arguing on site.',
                    '**Digital Communication**: Using job management software (e.g., ServiceTitan, Jobber) to log time, materials, and work completed for billing and warranty purposes.'
                  ]
                }
              ]
            },
            {
              id: 'ch4-s2',
              title: '4.2 Trade Documentation and Record-Keeping (A-3.01 — Advanced)',
              content: [
                {
                  type: 'text',
                  text: 'Accurate documentation is both a professional obligation and a legal requirement in many jurisdictions.'
                },
                {
                  type: 'list',
                  items: [
                    "**Refrigerant Logs**: Recording the amount of refrigerant added, removed, or recovered on each job — required under Canada's Ozone-depleting Substances and Halocarbon Alternatives Regulations.",
                    '**Commissioning Reports**: Completed start-up sheets, as-built redlines, and owner-signed acceptance letters.',
                    '**Service Records**: Detailed maintenance logs tracking system performance trends, part replacements, and calibration history.',
                    '**Permit Documentation**: Filing for and closing out municipal mechanical permits as required by the local building department.'
                  ]
                }
              ]
            },
            {
              id: 'ch4-s3',
              title: '4.3 Mentoring Apprentices (A-3.02)',
              content: [
                {
                  type: 'text',
                  text: "As a journeyperson, you are legally responsible for supervising apprentices and ensuring they develop competency safely. Effective mentoring accelerates the apprentice's skills while protecting the public."
                },
                {
                  type: 'list',
                  items: [
                    '**Instructional Methods**: Demonstrating tasks step-by-step, using a "show-do-review" model: you demonstrate, the apprentice performs, you provide feedback.',
                    '**Learning Styles**: Adapting instruction — visual learners benefit from P&ID diagrams; kinesthetic learners need hands-on practice with tools.',
                    "**Assessment**: Monitoring an apprentice's progress against the RSOS task list; documenting completed tasks in the apprenticeship logbook.",
                    '**Accountability**: Ensuring the apprentice is never assigned tasks beyond their current level of competency without direct supervision.',
                    '**Psychological Safety**: Creating an environment where apprentices feel comfortable asking questions and reporting near-misses without fear of ridicule.'
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // CertReady — HVAC/R (313A) Master Course: PART 2
    // Based on: RSOS 2024 (MWA B: Performs Routine Trade Activities)
    // ============================================================
    {
      id: 'part-2',
      number: 2,
      title: 'Routine Trade Activities',
      description: 'The physical execution of the trade: tools, piping, refrigerants, and job-site preparation.',
      weight: '16% of Total Exam',

      chapters: [

        // ============================================================
        // CHAPTER 6: TOOLS AND EQUIPMENT (Task B-4)
        // Exam Weight: 24% of MWA B
        // ============================================================
        {
          id: 'ch-6',
          number: 5,
          title: 'Tools and Equipment',
          subtitle: 'Piping tools, recovery/evacuation equipment, and rigging',
          isFree: false,
          estimatedMinutes: 40,
          sections: [
            {
              id: 'ch6-s1',
              title: '5.1 Piping and Tubing Tools (B-4.03)',
              content: [
                {
                  type: 'text',
                  text: 'Mechanics must select the correct tools for joining copper, steel, and aluminum piping. This includes inspecting regulators, valves, and flashback arresters for defects before every use.'
                },
                {
                  type: 'list',
                  items: [
                    '**Cutting & Reaming**: Tubing cutters create a clean, square cut; reamers remove the internal burr that restricts flow and traps debris.',
                    '**Swaging**: Expands the end of one tube to accept the same-size tube for a socket joint — reduces the number of couplings required.',
                    '**Flaring Tools**: Create a 45° flare for mechanical connections (SAE standard); inspect flares for cracks or eccentricity before assembly.',
                    '**Press-fit Tools (e.g., ZoomLock)**: Crimped mechanical joints approved for use in no-flame environments; requires a calibrated jaw-set for each pipe diameter.',
                    '**Brazing Equipment**: Oxy-acetylene and air-acetylene torches; flashback arresters must be installed on both hoses; cylinders must be Transport Canada-certified and stored upright within rated temperature ranges.'
                  ]
                }
              ]
            },
            {
              id: 'ch6-s2',
              title: '5.2 Recovery and Evacuation Equipment (B-4.04 & B-4.05)',
              content: [
                {
                  type: 'text',
                  text: 'Proper equipment ensures regulatory compliance (no venting) and system purity (moisture-free, non-condensable-free refrigerant circuit).'
                },
                {
                  type: 'list',
                  items: [
                    '**Recovery Machines**: Must be verified for compatibility with the specific refrigerant type. R-744 (CO2) operates at extremely high pressures and requires a purpose-built recovery unit.',
                    '**Recovery Cylinders**: Must bear the yellow DOT/TC identifier, rated working pressure, and be weighed — never filled past 80% of capacity.',
                    '**Vacuum Pumps**: Two-stage rotary vane pumps are standard for achieving vacuums below 500 microns. Single-stage pumps are not adequate for deep evacuation.',
                    '**Micron Gauges**: Digital electronic gauges are mandatory for confirming a proper deep vacuum. Analog manifold gauges cannot measure below approximately 25 in. Hg (25,400 microns).',
                    '**Core Removal Tools**: Used with Schrader valve cores to allow maximum flow rate during evacuation; core must be reinstalled before charging.'
                  ]
                },
                {
                  type: 'callout',
                  style: 'exam-tip',
                  text: 'A vacuum that levels off above 500 microns and holds steady indicates moisture boiling off. A vacuum that continuously rises (decays) after the pump is isolated indicates a leak. These two diagnoses require different corrective actions.'
                }
              ]
            },
            {
              id: 'ch6-s3',
              title: '5.3 Rigging and Hoisting (B-4.09)',
              content: [
                {
                  type: 'text',
                  text: 'Moving heavy condensing units, chillers, and rooftop units requires strict adherence to rigging safety protocols. Improper rigging is a leading cause of fatalities in the trades.'
                },
                {
                  type: 'list',
                  items: [
                    '**Equipment**: Synthetic and wire rope slings, shackles (screw-pin and bolt-type), come-alongs, chain falls, and spreader bars.',
                    '**Inspection**: Checking slings for cuts, abrasion, chemical damage, and heat damage before every use. A damaged sling must be destroyed immediately.',
                    '**WLL Calculation**: Total load must not exceed the WLL of the weakest component in the rigging assembly. The sling angle reduces effective capacity — a 60° bridle sling has only 87% of its vertical WLL.',
                    '**Tag Lines**: Rope tag lines must be used to guide the load and prevent uncontrolled swinging.',
                    '**Hand Signals**: Standard CSA/ASME B30 hand signals for hoist up, hoist down, move left/right, and emergency stop must be known by all workers.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 7: CORE TRADE ACTIVITIES (Task B-7)
        // Exam Weight: 36% of MWA B
        // ============================================================
        {
          id: 'ch-7',
          number: 6,
          title: 'Core Trade Activities',
          subtitle: 'Piping, leak testing, evacuation, refrigerants, and field wiring',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'ch7-s1',
              title: '6.1 Piping, Leak Testing, and Evacuation (B-7.01 – B-7.03)',
              content: [
                {
                  type: 'text',
                  text: 'A clean, dry, and leak-free system is the goal of every installation. The brazing, pressure testing, and evacuation sequence is highly tested on the Red Seal exam.'
                },
                {
                  type: 'list',
                  title: 'Brazing and Joint Preparation',
                  items: [
                    '**Nitrogen Purging**: Flowing dry nitrogen at 1–2 PSI through the tubing while brazing prevents internal oxidation (black soot scale), which will contaminate the system and clog metering devices.',
                    '**Joint Fit-up**: Clearance between tube and fitting must be 0.05–0.20 mm for proper capillary action during brazing.',
                    '**Heat Application**: Heat the fitting body (not the solder/brazing rod) until the base metal draws the filler in by capillary action.'
                  ]
                },
                {
                  type: 'list',
                  title: 'Pressure Testing',
                  items: [
                    '**Test Pressure**: Use dry nitrogen — never oxygen, never the system refrigerant. Test pressure is determined by the refrigerant type and the component design pressure (refer to B52 Appendix).',
                    '**CO2 (R-744)**: Requires significantly higher test pressures than conventional refrigerants (up to 1,900 kPa / 275 PSI on the low side) and a dedicated regulator — standard regulators will not hold these pressures safely.',
                    '**Leak Detection During Pressure Test**: Electronic halide detectors, UV dye, nitrogen soap solution, or ultrasonic detectors.'
                  ]
                },
                {
                  type: 'list',
                  title: 'Evacuation Protocol',
                  items: [
                    '**Target**: 500 microns (0.5 mmHg) held for a minimum of 15–30 minutes after isolating the pump.',
                    '**Large Systems**: Triple evacuation is recommended — evacuate to 1,500 microns, break with nitrogen, then repeat for a cleaner, drier system.',
                    '**Connection Size**: Always use the largest hoses possible during evacuation to minimize flow restriction and achieve the deepest vacuum faster.'
                  ]
                }
              ]
            },
            {
              id: 'ch7-s2',
              title: '6.2 Refrigerants, Gases, and Oils (B-7.04)',
              content: [
                {
                  type: 'text',
                  text: 'Mechanics must understand the chemical properties, environmental impact, and safety classifications of different refrigerant generations. The industry is in the midst of a major transition driven by climate regulations.'
                },
                {
                  type: 'table',
                  headers: ['Generation', 'Examples', 'ODP', 'GWP', 'ASHRAE Safety Class'],
                  rows: [
                    ['CFC (Phase-out: 1996)', 'R-11, R-12, R-113', 'High', 'High (1,000–10,900)', 'A1'],
                    ['HCFC (Phase-down: ongoing)', 'R-22, R-123', 'Moderate', 'Moderate (77–1,900)', 'A1 / B1'],
                    ['HFC (Current transition)', 'R-134a, R-410A, R-404A', '0', 'High (1,430–3,920)', 'A1'],
                    ['HFO (Next-generation)', 'R-1234yf, R-1234ze', '0', 'Very Low (<10)', 'A2L (Mildly Flammable)'],
                    ['Blends (HFO/HFC)', 'R-32, R-452B, R-454B', '0', 'Low–Moderate', 'A2L'],
                    ['Natural — Ammonia', 'R-717', '0', '0', 'B2L (Toxic/Flammable)'],
                    ['Natural — CO2', 'R-744', '0', '1 (reference)', 'A1 (Very High Pressure)'],
                    ['Natural — Propane', 'R-290', '0', '3', 'A3 (Flammable)']
                  ],
                  notes: 'Safety classifications follow ASHRAE Standard 34. The first character (A/B) = toxicity; the number (1/2/3) = flammability; "L" = lower burning velocity.'
                },
                {
                  type: 'list',
                  title: 'Lubricating Oils',
                  items: [
                    '**Mineral Oil (MO)**: Used with CFCs and HCFCs. Miscible with these refrigerants and has low hygroscopicity.',
                    '**Alkylbenzene (AB)**: A synthetic oil used as a transitional oil during HCFC retrofits.',
                    '**Polyolester (POE)**: The standard oil for HFC and HFO systems. Extremely hygroscopic — containers must be sealed when not in use; even brief exposure to air causes moisture absorption.',
                    '**Polyalkylene Glycol (PAG)**: Used almost exclusively in automotive AC systems.',
                    '**Polyvinyl Ether (PVE)**: Used in some HFO systems due to lower hygroscopicity than POE.'
                  ]
                },
                {
                  type: 'callout',
                  style: 'warning',
                  text: 'A2L refrigerants (like R-454B and R-32) are replacing R-410A in new equipment. These systems require specific service practices: no open flames near leak points, dedicated A2L-rated recovery machines, and awareness of the minimum ignition energy thresholds.'
                }
              ]
            },
            {
              id: 'ch7-s3',
              title: '6.3 Field Wiring and Sealants (B-7.05 – B-7.06)',
              content: [
                {
                  type: 'text',
                  text: "Connecting power and control circuits must comply with the Canadian Electrical Code (CEC) and the equipment manufacturer's wiring diagram. Improper wiring is a common source of control failures and nuisance trips."
                },
                {
                  type: 'list',
                  items: [
                    '**Power Wiring (Line Voltage)**: Routing power cables in separate conduit from low-voltage control wiring to prevent inductive interference. Verifying conductor sizing matches MCA (Minimum Circuit Ampacity) on the nameplate.',
                    '**Control Wiring (24V)**: Keeping low-voltage runs as short as practical; using shielded cable for long runs near variable-speed drives.',
                    '**Insulation**: Applying elastomeric (Armaflex) or closed-cell polyethylene foam insulation to suction lines to prevent condensation and maintain saturation temperature.',
                    '**Firestopping**: Using rated sealant around all penetrations through fire-rated assemblies (walls, floor slabs) — this is a code requirement (OBC / NBC) and an insurance requirement.',
                    '**Thread Sealants**: Using PTFE (Teflon) tape or anaerobic thread sealant (Loctite 565) on threaded gas and refrigerant connections; never use pipe dope not rated for the specific gas.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 8: WORK ORGANIZATION AND SITE PREPARATION (Task B-5 & B-6)
        // Exam Weight: 40% of MWA B
        // ============================================================
        {
          id: 'ch-8',
          number: 7,
          title: 'Organizing and Preparing for the Job',
          subtitle: 'Blueprint reading, site preparation, and hazard assessment',
          isFree: false,
          estimatedMinutes: 35,
          sections: [
            {
              id: 'ch8-s1',
              title: '7.1 Interpreting Drawings and Documentation (B-5.01 – B-5.02)',
              content: [
                {
                  type: 'text',
                  text: "Mechanics use blueprints, specification sheets, and technical manuals to ensure the system is built to the engineer's design intent. Misreading drawings is a common and costly source of rework."
                },
                {
                  type: 'list',
                  items: [
                    '**Drawing Types**: Architectural (overall layout), Mechanical (equipment location, ductwork routing), Electrical (wiring schematics), and P&ID (Piping and Instrumentation Diagrams, showing component symbols and control logic).',
                    '**P/T Charts**: Pressure-Temperature charts are refrigerant-specific — they show saturation pressure at any given temperature. Critical for diagnosing system operating conditions.',
                    '**Psychrometric Charts**: Used for air-side calculations to determine moisture content, dew point, and enthalpy of air at various conditions.',
                    '**Log Sheets**: Maintaining refrigerant usage logs, as-found/as-left service records, and maintenance checklists as per regulatory and warranty requirements.',
                    '**Specifications**: Reading Division 23 (Mechanical) and Division 26 (Electrical) of the project spec book to understand installation standards and approved materials.'
                  ]
                }
              ]
            },
            {
              id: 'ch8-s2',
              title: '7.2 Site Preparation and Hazard Assessment (B-6.01)',
              content: [
                {
                  type: 'text',
                  text: 'Before any work begins, the environment must be assessed and secured. This step protects both the workers and the public.'
                },
                {
                  type: 'list',
                  items: [
                    '**Hazard Assessment Form**: Completing a site-specific written hazard assessment before starting work each day — required by Ontario Occupational Health and Safety Act (OHSA).',
                    '**Underground Services**: Contacting Ontario One Call (1-800-400-2255) before any ground penetration to locate buried gas, electrical, and telecom lines.',
                    '**Barricades and Signage**: Erecting physical barriers and warning signs to protect the public and other trades from the work zone.',
                    '**Isolation Points**: Identifying and tagging (not yet locking) water, gas, and electrical isolation points for the specific equipment to be worked on.',
                    '**Confined Spaces**: Identifying any confined spaces in the work area and initiating the permit process before entry.'
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // CertReady — HVAC/R (313A) Master Course: PART 3
    // Based on: RSOS 2024 (MWA C: Plans Installation)
    // ============================================================
    {
      id: 'part-3',
      number: 3,
      title: 'Planning Installation',
      description: 'The engineering and logistical phase: load verification, component sizing, and retrofit planning.',
      weight: '13% of Total Exam',

      chapters: [

        // ============================================================
        // CHAPTER 10: PLANNING SYSTEMS (Task C-8)
        // Exam Weight: 35% of MWA C
        // ============================================================
        {
          id: 'ch-10',
          number: 8,
          title: 'Planning Systems and Components',
          subtitle: 'Load calculations, component sizing, and code-compliant layout',
          isFree: false,
          estimatedMinutes: 45,
          sections: [
            {
              id: 'ch10-s1',
              title: '8.1 Verifying System Layout (C-8.01)',
              content: [
                {
                  type: 'text',
                  text: 'The mechanic must confirm that the engineered design is physically achievable and compliant with local codes before any material is ordered or fabricated.'
                },
                {
                  type: 'list',
                  items: [
                    '**Space Constraints**: Checking for manufacturer-required clearances around equipment for serviceability, airflow, and combustion air (for gas-fired equipment).',
                    '**Structural Support**: Confirming that roofs, concrete pads, or spring-isolated hangers can support the full operating weight of the equipment.',
                    '**Drainage**: Planning for gravity condensate disposal; sizing condensate lines and verifying trap heights for units with negative static pressure drain pans.',
                    '**Code Compliance**: Verifying layout against CSA B52 (Mechanical Refrigeration), CSA B149.1 (Gas Code), and the Ontario Building Code (OBC) for equipment rooms and mechanical shaft access.'
                  ]
                }
              ]
            },
            {
              id: 'ch10-s2',
              title: '8.2 Load Calculations (C-8.02)',
              content: [
                {
                  type: 'text',
                  text: 'Accurate load calculations prevent the two most common sizing mistakes: oversizing (leads to short cycling and humidity problems) and undersizing (inability to maintain setpoint).'
                },
                {
                  type: 'list',
                  items: [
                    '**Sensible Heat Gain Sources**: Solar radiation through glass, conduction through walls/roofs, internal loads (people, lighting, equipment), and infiltration.',
                    '**Latent Heat Gain Sources**: Occupant respiration and perspiration, outdoor humidity (ventilation and infiltration), and process loads.',
                    '**Design Conditions**: Using ASHRAE 1% cooling design temperatures and humidity ratios for the specific city; not rule-of-thumb "tons per square foot" estimates.',
                    '**Refrigeration Load**: Factoring in product load (BTU to cool the product), transmission load (heat gain through insulated walls), infiltration (door openings), and equipment heat (fans, defrost heaters).'
                  ]
                }
              ]
            },
            {
              id: 'ch10-s3',
              title: '8.3 Component Selection and Sizing (C-8.03)',
              content: [
                {
                  type: 'text',
                  text: 'Sizing involves ensuring all components match the system load and work harmoniously across all expected operating conditions — not just peak load.'
                },
                {
                  type: 'list',
                  items: [
                    '**Evaporator/Condenser Match**: The condenser heat rejection capacity must equal Cooling Capacity + Heat of Compression. Undersized condensers cause high head pressure.',
                    '**Piping Sizing**: Balancing pressure drop against oil return velocity. If suction piping is too large, gas velocity drops below ~500 fpm and oil cannot return to the compressor — oil traps will accumulate.',
                    '**TXV Sizing**: Thermostatic expansion valves must be sized for the actual operating pressure drop and refrigerant; an oversized TXV hunts and causes instability.',
                    '**Accessory Sizing**: Filter-driers, sight glasses, and solenoid valves are sized by liquid-line capacity (tons) and must have a pressure drop below 1 PSI in normal operation.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 11: PLANNING INSTALLATIONS (Task C-9)
        // Exam Weight: 40% of MWA C
        // ============================================================
        {
          id: 'ch-11',
          number: 9,
          title: 'Installation Logistics and Coordination',
          subtitle: 'Scheduling, trade coordination, and material planning',
          isFree: false,
          estimatedMinutes: 30,
          sections: [
            {
              id: 'ch11-s1',
              title: '9.1 Scheduling and Trade Coordination (C-9.01 – C-9.02)',
              content: [
                {
                  type: 'text',
                  text: 'HVAC/R work is dependent on the completion of work by other trades. A well-coordinated schedule prevents the two most expensive jobsite problems: idle labour and damaged equipment.'
                },
                {
                  type: 'list',
                  items: [
                    '**Critical Path**: Identifying tasks with no float — for example, roof curbs must be set and flashed before rooftop units are craned into place; the curb work is on the critical path.',
                    '**Utility Coordination**: Confirming with the electrical contractor that correct Voltage/Phase/Ampacity (MCA/MOP) service is available at the disconnect before requesting equipment delivery.',
                    '**BIM Coordination**: In large commercial projects, using Building Information Modelling (BIM) clash detection to resolve spatial conflicts with structural, plumbing, and electrical before they become field problems.',
                    '**Material Management**: Staging equipment to prevent weather damage, theft, and site congestion. Large equipment should be craned to its final position before the roof is closed.'
                  ]
                }
              ]
            },
            {
              id: 'ch11-s2',
              title: '9.2 Material Lists and Documentation (C-9.03 – C-9.04)',
              content: [
                {
                  type: 'text',
                  text: 'A comprehensive material take-off prevents the single most common cause of project delays: waiting for parts.'
                },
                {
                  type: 'list',
                  items: [
                    '**Consumables**: Nitrogen purge gas, oxygen and acetylene (or air-acetylene), silver brazing alloy and flux, PTFE tape, and vacuum pump oil.',
                    '**Specialty Items**: Vibration eliminators, seismic restraints (mandatory in defined seismic zones), spring hangers, and flexible duct connectors.',
                    '**Long Lead Items**: Large compressors, custom air handlers, and specialty controls often have 6–12 week lead times and must be ordered at project award, not during construction.',
                    '**Permits**: Mechanical permit, gas permit, and electrical permit must be obtained before work begins, with inspection hold points identified in the schedule.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 12: PLANNING RETROFITS AND UPGRADES (Task C-10)
        // Exam Weight: 25% of MWA C
        // ============================================================
        {
          id: 'ch-12',
          number: 10,
          title: 'Retrofits and Environmental Upgrades',
          subtitle: 'Refrigerant conversions, efficiency upgrades, and energy audits',
          isFree: false,
          estimatedMinutes: 35,
          sections: [
            {
              id: 'ch12-s1',
              title: '10.1 Refrigerant Conversions (C-10.01)',
              content: [
                {
                  type: 'text',
                  text: "Due to Canada's regulated phase-down of high-GWP refrigerants (R-22 already banned; R-404A, R-410A facing phase-down), mechanics must plan conversions carefully to avoid premature component failure."
                },
                {
                  type: 'list',
                  items: [
                    '**Compatibility Assessment**: Checking elastomer (O-ring, gasket) and lubricant compatibility between the old and new refrigerant. POE oil is required for HFC/HFO systems.',
                    '**Capacity Analysis**: Calculating how the substitute refrigerant will impact system cooling capacity and discharge temperatures — a drop-in replacement rarely delivers identical performance.',
                    '**Component Upgrades**: Identifying if the TXV orifice, filter-drier desiccant type, or safety relief valve set pressure must be changed to be compatible with the new refrigerant.',
                    '**Labeling**: All converted systems must be permanently labeled with the new refrigerant type at the service port and on the equipment nameplate.'
                  ]
                }
              ]
            },
            {
              id: 'ch12-s2',
              title: '10.2 Energy Efficiency Upgrades (C-10.02)',
              content: [
                {
                  type: 'text',
                  text: 'Upgrading existing systems for energy efficiency is one of the fastest-growing segments of the trade, driven by carbon pricing and energy cost pressures.'
                },
                {
                  type: 'list',
                  items: [
                    '**VFD Upgrades**: Retrofitting Variable Frequency Drives on supply/return fans and chilled water pumps. Fan laws show that reducing speed to 80% reduces power to ~50%.',
                    '**Heat Recovery Ventilation (HRV/ERV)**: Installing heat exchangers on exhaust/intake air streams to recover 60–80% of the energy in the exhaust air.',
                    '**Condenser Heat Recovery**: Designing desuperheater or heat reclaim coils to capture waste heat from the refrigeration discharge gas for domestic hot water.',
                    '**Controls Upgrade**: Migrating from pneumatic or electromechanical controls to DDC (Direct Digital Control) with BAS connectivity for real-time monitoring, scheduling, and optimization.'
                  ]
                }
              ]
            },
            {
              id: 'ch12-s3',
              title: '10.3 Energy Audits and Incentive Programs (C-10.03)',
              content: [
                {
                  type: 'text',
                  text: 'Mechanics are often asked to participate in or support energy audits that identify retrofit opportunities and qualify clients for government incentive programs.'
                },
                {
                  type: 'list',
                  items: [
                    '**Baseline Measurement**: Documenting pre-retrofit energy consumption using utility data and sub-metering for comparison against post-retrofit performance.',
                    '**Incentive Programs**: Canada Greener Homes, Save on Energy (Ontario), and utility-specific programs offer rebates for high-efficiency equipment and control upgrades.',
                    '**IPMVP**: The International Performance Measurement and Verification Protocol provides standardized methods for quantifying energy savings after a retrofit.'
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // CertReady — HVAC/R (313A) Master Course: PART 4
    // Based on: RSOS 2024 (MWA D: Performs Installation)
    // ============================================================
    {
      id: 'part-4',
      number: 4,
      title: 'Performs Installation',
      description: 'Physical assembly: mounting equipment, piping integration, control wiring, and air delivery setup.',
      weight: '21% of Total Exam',

      chapters: [

        // ============================================================
        // CHAPTER 14: INSTALLING HVAC/R SYSTEMS (Task D-11)
        // Exam Weight: 54% of MWA D
        // ============================================================
        {
          id: 'ch-14',
          number: 11,
          title: 'Installing HVAC/R Systems and Components',
          subtitle: 'Equipment placement, refrigerant piping, and component integration',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'ch14-s1',
              title: '11.1 Placing and Mounting Equipment (D-11.01)',
              content: [
                {
                  type: 'text',
                  text: 'The physical placement of equipment determines long-term operational performance. Poor installation practices that are invisible after the ceiling is closed will cause system failures for the lifetime of the equipment.'
                },
                {
                  type: 'list',
                  items: [
                    '**Levelling**: Compressors must be level (± 1°) to ensure proper oil lubrication of all bearings; condensing units must be level for proper refrigerant distribution and condensate drainage.',
                    '**Vibration Isolation**: Selecting spring isolators, inertia bases, or neoprene pads based on the disturbing frequency of the equipment (RPM) and the natural frequency of the support structure.',
                    '**Service Clearances**: Strictly following manufacturer and CSA B52 requirements for minimum clearances around equipment — not only for airflow but for the physical removal of components (coils, compressors) during future service.',
                    '**Weatherproofing**: Installing roof penetration flash kits, vibration-rated pipe supports, and UV-resistant insulation jackets for all outdoor piping.'
                  ]
                }
              ]
            },
            {
              id: 'ch14-s2',
              title: '11.2 Refrigerant Piping and Component Integration (D-11.02)',
              content: [
                {
                  type: 'text',
                  text: 'Professional piping layout is both an art and a science — every bend, every riser, and every component location affects system reliability and efficiency.'
                },
                {
                  type: 'list',
                  items: [
                    '**Oil Return (Suction Line Risers)**: Installing a P-trap at the base of each vertical riser and a second trap every 6–8 m of vertical rise to carry oil droplets back to the compressor.',
                    '**Double Suction Risers**: On systems with wide capacity modulation, a small-diameter pipe (for low-load conditions) and a large-diameter pipe (for full-load conditions) run in parallel to maintain oil-return velocity across the load range.',
                    '**Component Sequence (Liquid Line)**: Receiver → King Valve → Oil Separator (if equipped) → Filter-Drier → Sight Glass/Moisture Indicator → Solenoid Valve → TXV. The Filter-Drier must be close to the metering device.',
                    '**Pipe Supports**: Spacing support hangers according to the pipe diameter and material per SMACNA or local mechanical codes; every joint must be accessible for future leak detection.',
                    '**Hydronic Secondary Loops**: Installing pumps, expansion tanks, air separators, and balance valves for chilled water or glycol loops; purging all air from the system before commissioning.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 15: INSTALLING CONTROL SYSTEMS (Task D-12)
        // Exam Weight: 23% of MWA D
        // ============================================================
        {
          id: 'ch-15',
          number: 12,
          title: 'Installing Control Systems',
          subtitle: 'Sensors, safety controls, actuators, and digital communication',
          isFree: false,
          estimatedMinutes: 40,
          sections: [
            {
              id: 'ch15-s1',
              title: '12.1 Control Components and Logic (D-12.01)',
              content: [
                {
                  type: 'text',
                  text: 'Controls are the nervous system of the HVAC/R installation. Every sensor, switch, and actuator must be installed precisely to ensure the sequence of operation functions as designed.'
                },
                {
                  type: 'list',
                  items: [
                    '**Sensors**: Mounting thermistors or RTDs in the return air stream (not near supply diffusers); installing pressure transducers with isolation valves for serviceability.',
                    '**Safety Controls**: High and low-pressure cut-outs, oil pressure differential switches, flow switches, and freeze-stats — all must be wired as hardwired safety interlocks, not software-only limits.',
                    '**Actuators**: Mounting valve and damper actuators to ensure full stroke (0% to 100%) travel; verifying correct fail-safe position (fail-open vs. fail-closed) for the application.',
                    '**Economizer Controls**: Wiring dry-bulb or enthalpy sensors to enable free cooling when outdoor conditions permit, reducing mechanical cooling run-time.'
                  ]
                }
              ]
            },
            {
              id: 'ch15-s2',
              title: '12.2 Wiring and Digital Connectivity (D-12.02)',
              content: [
                {
                  type: 'text',
                  text: 'Modern HVAC/R control systems rely heavily on digital communication buses. Proper installation prevents the communication faults and signal errors that are among the most difficult problems to diagnose.'
                },
                {
                  type: 'list',
                  items: [
                    '**Shielded Cable**: Using shielded twisted-pair (STP) for all communication lines (BACnet MS/TP, Modbus RTU) to prevent electromagnetic interference from motor starters and VFDs.',
                    '**Termination Resistors**: Installing 120-ohm end-of-line termination resistors at each end of a BACnet or Modbus RS-485 network — a missing or doubled terminator causes communication failures.',
                    '**Network Addressing**: Assigning unique device addresses to every controller; following the network topology diagram to prevent duplicate addresses.',
                    '**Labeling**: Labeling every control wire at both ends with the point description matching the control drawings — unlabeled wiring makes future troubleshooting extremely difficult.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 16: INSTALLING AIR DELIVERY SYSTEMS (Task D-13)
        // Exam Weight: 23% of MWA D
        // ============================================================
        {
          id: 'ch-16',
          number: 13,
          title: 'Installing Air Delivery Systems',
          subtitle: 'Ductwork, air-side components, and ventilation systems',
          isFree: false,
          estimatedMinutes: 35,
          sections: [
            {
              id: 'ch16-s1',
              title: '13.1 Ductwork Fabrication and Installation (D-13.01)',
              content: [
                {
                  type: 'text',
                  text: 'Duct systems are responsible for delivering conditioned air efficiently and quietly. A leaky, undersized, or poorly supported duct system wastes a significant portion of the energy invested in the refrigeration cycle.'
                },
                {
                  type: 'list',
                  items: [
                    '**Materials**: Galvanized steel (most commercial applications), fiberglass duct board (acoustically superior, used in low-pressure systems), and flexible ducting (for final connections to diffusers only — never for long runs).',
                    '**Joints and Sealing**: All longitudinal seams and transverse joints must be sealed with mastic sealant or UL-181 rated aluminum tape — friction-fit duct tape is not code-compliant for sealed duct systems.',
                    '**Insulation**: Applying external fibreglass wrap (R-6 minimum per OBC/NECB) or internal acoustic liner where required; insulation must be continuous without voids or compressions.',
                    '**SMACNA Standards**: Following SMACNA (Sheet Metal and Air Conditioning Contractors National Association) duct construction standards for gauge, reinforcement, and hanger spacing.'
                  ]
                }
              ]
            },
            {
              id: 'ch16-s2',
              title: '13.2 Air System Components (D-13.02)',
              content: [
                {
                  type: 'text',
                  text: 'Terminal and distribution components must be correctly selected, positioned, and balanced to achieve the designed air distribution pattern and zone temperatures.'
                },
                {
                  type: 'list',
                  items: [
                    '**Fire and Smoke Dampers**: Fire dampers must be installed in rated fire assemblies with the correct sleeve size and clearance; annual inspection is required by the fire code.',
                    '**Smoke Dampers**: Wired to the building fire alarm system for automatic closure on smoke detection; require a factory-tested actuator with end-switch feedback to the FACP.',
                    '**VAV Boxes**: Positioning the VAV box with at least 3–5 duct diameters of straight upstream duct to ensure accurate flow sensing; balancing to minimum and maximum CFM setpoints during commissioning.',
                    '**Diffusers and Grilles**: Selecting throw pattern and neck velocity to achieve comfort conditions; high-induction diffusers prevent stratification in high-ceiling spaces.',
                    '**Filters**: Installing the correct MERV-rated filters in properly sealed racks; MERV 13 is the minimum recommended for most commercial systems post-pandemic.'
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // CertReady — HVAC/R (313A) Master Course: PART 5
    // Based on: RSOS 2024 (MWA E: Performs Commissioning)
    // ============================================================
    {
      id: 'part-5',
      number: 5,
      title: 'Performs Commissioning',
      description: 'Bringing systems online: pre-start checks, charging, component setup, and performance verification.',
      weight: '17% of Total Exam',

      chapters: [

        // ============================================================
        // CHAPTER 18: STARTING UP SYSTEMS (Task E-13)
        // Exam Weight: 54% of MWA E
        // ============================================================
        {
          id: 'ch-18',
          number: 14,
          title: 'Commissioning Systems and Components',
          subtitle: 'Pre-start checks, system charging, and control start-up',
          isFree: false,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'ch18-s1',
              title: '14.1 Pre-start-up Checks (E-13.01)',
              content: [
                {
                  type: 'text',
                  text: "Before the system is energized for the first time, a comprehensive pre-start checklist must be completed. Starting a system before it's ready is the primary cause of compressor failures during commissioning."
                },
                {
                  type: 'list',
                  items: [
                    '**Crankcase Heater**: Must be energized for a minimum of 24 hours before first compressor start to drive all liquid refrigerant out of the oil — prevents "liquid slugging" on startup.',
                    '**Oil Level**: Verifying correct oil level in the crankcase sight glass (if equipped).',
                    '**Isolation Valves**: Confirming all service valves are fully open (back-seated) — a closed suction or discharge valve will destroy a compressor within seconds.',
                    '**Electrical**: Confirming correct supply voltage (± 10% of nameplate), correct phase rotation for scroll and screw compressors, and tight terminations on all power and control connections.',
                    '**Mechanical**: Verifying fan blade clearance, belt tension (where applicable), and that no tools or materials are inside the unit.'
                  ]
                }
              ]
            },
            {
              id: 'ch18-s2',
              title: '14.2 System Charging (E-13.02 & E-13.04)',
              content: [
                {
                  type: 'text',
                  text: 'Correct refrigerant charge is critical to system efficiency, reliability, and equipment warranty. Both overcharging and undercharging reduce efficiency and can damage components.'
                },
                {
                  type: 'list',
                  items: [
                    '**Factory Charge**: Most split systems are pre-charged for a specific lineset length. Calculating the additional charge required for the actual installed pipe length using the manufacturer\'s charge chart (typically g/m or oz/ft).',
                    '**Charging Method**: Charging as a liquid into the liquid line or high side whenever possible to maintain blend integrity. For systems with a low-side access only, liquid can be metered in slowly through a suction-line charging adapter.',
                    '**A2L/Zeotropic Blends**: Blends such as R-454B, R-32, and R-410A MUST be charged as a liquid from an inverted cylinder to prevent fractionation. Vapor charging of blended refrigerants changes the composition of what remains in the cylinder.',
                    '**Verification**: Using superheat (for fixed-orifice systems) or subcooling (for TXV systems) as the final verification of correct charge, not weight alone.'
                  ]
                }
              ]
            },
            {
              id: 'ch18-s3',
              title: '14.3 Control System Start-up (E-13.03)',
              content: [
                {
                  type: 'text',
                  text: 'Control systems must be "mapped" and verified point-by-point before automatic operation begins.'
                },
                {
                  type: 'list',
                  items: [
                    '**Input/Output (I/O) Verification**: Testing each sensor (thermistor, transducer) to confirm it reads accurately and is mapped to the correct controller input — a sensor mapped to the wrong point will cause the system to operate incorrectly.',
                    '**Safety Logic Testing**: Physically actuating each safety switch (trip the high-pressure cut-out, freeze-stat, flow switch) to confirm it shuts down the equipment as designed.',
                    '**Sequence of Operation**: Stepping through the full control sequence manually to verify each stage of heating, cooling, and ventilation activates in the correct order.',
                    '**Digital Connectivity**: Confirming all network devices are communicating on the BAS (check for offline devices, communication errors).'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 19: VERIFYING PERFORMANCE (Task E-14)
        // Exam Weight: 46% of MWA E
        // ============================================================
        {
          id: 'ch-19',
          number: 15,
          title: 'Performance Verification and Optimization',
          subtitle: 'Operating parameters, system integration, and commissioning documentation',
          isFree: false,
          estimatedMinutes: 45,
          sections: [
            {
              id: 'ch19-s1',
              title: '15.1 Measuring Refrigeration Performance (E-14.01)',
              content: [
                {
                  type: 'text',
                  text: 'Once running, the refrigeration system must be verified against the engineering design data. Superheat and subcooling are the two most important measurements for confirming correct system operation.'
                },
                {
                  type: 'list',
                  items: [
                    '**Evaporator Superheat**: Measure suction line temperature at the evaporator outlet; subtract the saturation temperature at the measured suction pressure. Target: 8–12°F for comfort AC with a TXV.',
                    '**Total Superheat**: Measure suction temperature at the compressor inlet; used for fixed-orifice systems (target varies by outdoor ambient and indoor wet-bulb).',
                    '**Subcooling**: Measure liquid line temperature after the condenser/receiver; subtract from saturation temperature at measured liquid-line pressure. Target: 10–15°F for most comfort systems.',
                    '**Compression Ratio**: Calculate absolute discharge pressure ÷ absolute suction pressure; high ratios indicate compressor stress and reduce efficiency.'
                  ]
                }
              ]
            },
            {
              id: 'ch19-s2',
              title: '15.2 Air and Hydronic System Verification (E-14.02)',
              content: [
                {
                  type: 'text',
                  text: 'The refrigeration system only performs correctly if the air-side and water-side systems deliver proper heat exchange. Air and water balancing must be completed before refrigerant performance is measured.'
                },
                {
                  type: 'list',
                  items: [
                    '**Temperature Split (Delta T)**: Measuring the temperature difference between return air entering the coil and supply air leaving the coil. A proper cooling coil should produce 16–22°F of sensible drop.',
                    '**Air Balancing**: Using a balometer or flow hood to confirm each zone is receiving the designed CFM; adjusting dampers and VAV boxes accordingly.',
                    '**Hydronic Balancing**: Measuring water flow rates through each coil using calibrated differential pressure gauges or an ultrasonic flow meter; adjusting balance valves to design GPM.',
                    '**Integration Testing**: Verifying interaction with other building systems — smoke dampers, exhaust fans, fire alarm, generator transfer — to ensure the HVAC system responds correctly to external signals.'
                  ]
                }
              ]
            },
            {
              id: 'ch19-s3',
              title: '15.3 Optimization and Documentation (E-14.03 – E-14.04)',
              content: [
                {
                  type: 'text',
                  text: 'Commissioning concludes with system tuning and a formal handover to the building owner or facility manager.'
                },
                {
                  type: 'list',
                  items: [
                    '**Optimization**: Fine-tuning VFD speeds (supply/return fans, pumps), PID loop tuning for control stability, and setpoint adjustments to minimize energy while maintaining comfort.',
                    '**Commissioning Reports**: Completing manufacturer start-up forms, ASHRAE Cx documentation, test and balance reports, and punch lists.',
                    '**As-built Markup**: Redlining drawings to show any deviations from the design documents and submitting for record purposes.',
                    '**Owner Training**: Demonstrating operation, scheduled maintenance items, alarm response procedures, and seasonal changeover to the facility manager; providing manuals and warranty documents.'
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // CertReady — HVAC/R (313A) Master Course: PART 6
    // Based on: RSOS 2024 (MWA F: Performs Maintenance and Service)
    // ============================================================
    {
      id: 'part-6',
      number: 6,
      title: 'Maintenance and Service',
      description: 'The core of the service trade: preventive maintenance, systematic diagnostics, and precision mechanical/electrical repairs.',
      weight: '25% of Total Exam',

      chapters: [

        // ============================================================
        // CHAPTER 21: PERFORMING MAINTENANCE (Task F-15)
        // Exam Weight: 21% of MWA F
        // ============================================================
        {
          id: 'ch-21',
          number: 16,
          title: 'Performing Maintenance',
          subtitle: 'Scheduled inspections, coil cleaning, calibration, and maintenance documentation',
          isFree: false,
          estimatedMinutes: 45,
          sections: [
            {
              id: 'ch21-s1',
              title: '18.1 Inspections and Cleaning (F-15.01 – F-15.02)',
              content: [
                {
                  type: 'text',
                  text: 'Maintenance begins with structured sensory inspections and the physical restoration of heat-transfer surfaces. Dirty coils are the single most common cause of performance degradation in HVAC/R systems.'
                },
                {
                  type: 'list',
                  items: [
                    '**Coil Maintenance**: Cleaning evaporator and condenser coils with appropriate coil-safe cleaners (acid for condensers, alkaline for evaporators); straightening bent fins with a fin comb.',
                    '**Mechanical Checks**: Inspecting belt condition and tension (deflection method); lubricating sealed/regreasable bearings with the correct grease type and quantity; checking for unusual vibration or noise.',
                    '**Electrical Checks**: Measuring voltage and amperage on all legs of 3-phase compressors; checking contactor contact condition (pitting or welding); testing capacitor microfarad ratings.',
                    '**Leak Detection**: Performing systematic leak checks at brazed joints, valve stems, and Schrader fittings using electronic halide detectors or ultrasonic equipment.',
                    '**Fluid Analysis**: Testing glycol concentration and pH with a refractometer and test strips; collecting oil samples for laboratory analysis (viscosity, acid, metal content) on large ammonia and CO2 systems.'
                  ]
                }
              ]
            },
            {
              id: 'ch21-s2',
              title: '18.2 Verifying Operation and Calibrating (F-15.03 – F-15.04)',
              content: [
                {
                  type: 'text',
                  text: 'Scheduled maintenance must go beyond cleaning — it must confirm the system is still operating within its original design parameters and that safety controls are functional.'
                },
                {
                  type: 'list',
                  items: [
                    '**Safety Control Testing**: Physically cycling each safety — high-pressure cut-out, low-pressure cut-out, freeze-stat, oil pressure switch — and confirming the correct shutdown response. Bypassing safety controls during testing and forgetting to restore them is a critical error.',
                    '**Calibration**: Comparing sensor readings (thermistors, transducers, CO2 sensors, humidity sensors) against calibrated reference instruments; field-calibrating or replacing sensors outside acceptable tolerance.',
                    "**Refrigerant Leak Rate Reporting**: Under Canada's HFC regulations, a system with a charge greater than 5 kg that exceeds a 10% annual leak rate triggers an enhanced leak inspection and reporting obligation.",
                    '**Documentation**: Recording all as-found and as-left readings in a structured maintenance log to track performance trends and satisfy regulatory and warranty obligations.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 22: DIAGNOSING SYSTEMS (Task F-16)
        // Exam Weight: 39% of MWA F
        // ============================================================
        {
          id: 'ch-22',
          number: 17,
          title: 'Diagnosing Systems',
          subtitle: 'Refrigerant, mechanical, electrical, and control system diagnostics',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'ch22-s1',
              title: '17.1 Refrigerant and Mechanical Diagnostics (F-16.01)',
              content: [
                {
                  type: 'text',
                  text: 'Diagnostics is the core skill that separates a journeyperson from a parts-changer. The goal is to find the root cause — not just replace components until the system works.'
                },
                {
                  type: 'table',
                  headers: ['Symptom', 'High Suction P', 'Low Suction P', 'High Discharge P', 'Low Discharge P', 'High Superheat', 'Low Superheat'],
                  rows: [
                    ['Undercharge', '', '✓', '', '✓', '✓', ''],
                    ['Overcharge', '', '', '✓', '', '', '✓'],
                    ['Dirty Condenser Coil', '', '', '✓', '', '', ''],
                    ['Restricted TXV', '', '✓', '', '✓', '✓', ''],
                    ['TXV Wide Open', '✓', '', '', '', '', '✓'],
                    ['Bad Compressor Valves', '✓', '', '', '✓', '✓', ''],
                    ['Non-condensables in System', '', '', '✓', '', '', ''],
                    ['Restricted Liquid Line/Filter-Drier', '', '✓', '↑Upstream', '', '✓', '']
                  ],
                  notes: '✓ = expected indicator. Always verify with both suction and discharge pressure AND superheat/subcooling before making a diagnosis.'
                },
                {
                  type: 'list',
                  title: 'Diagnostic Method',
                  items: [
                    '**Measure First**: Record suction pressure, discharge pressure, suction line temperature, liquid line temperature, and ambient conditions before touching anything.',
                    '**Calculate**: Convert pressures to saturation temperatures (using P/T chart); calculate superheat and subcooling.',
                    '**Cross-reference**: Use the diagnostic table above to identify the most likely cause.',
                    '**Confirm**: Perform a targeted test to confirm the hypothesis before replacing components.'
                  ]
                }
              ]
            },
            {
              id: 'ch22-s2',
              title: '17.2 Electrical and Control Diagnostics (F-16.02 – F-16.03)',
              content: [
                {
                  type: 'text',
                  text: 'Electrical troubleshooting requires systematic use of test instruments and logical reading of wiring diagrams. Random testing without a systematic approach wastes time and risks missing the root cause.'
                },
                {
                  type: 'list',
                  items: [
                    '**Voltage Drop Testing**: Measuring voltage across a load to find excessive resistance (poor connections, pitted contacts); a voltage drop above 2% on a branch circuit indicates a problem.',
                    '**Motor Testing**: Using a megohmmeter (Megger) to test winding insulation — below 1 MΩ indicates imminent failure; using a clamp-on ammeter to check for phase imbalance (> 2% current imbalance indicates voltage imbalance or winding problem).',
                    '**Capacitor Testing**: Measuring run and start capacitor microfarad ratings with a capacitor-testing multimeter; a capacitor reading more than 6% below its rated μF value should be replaced.',
                    '**Control Logic**: Following the "sequence of operation" schematically — find the highest point in the control circuit that has power but cannot pass it; that is where the open circuit (failed switch, safety, relay coil) is located.',
                    '**VFD Diagnostics**: Reading drive fault codes; checking for input voltage imbalance (> 2%), overtemperature from blocked air filters, and ground faults on the output.'
                  ]
                }
              ]
            }
          ]
        },

        // ============================================================
        // CHAPTER 23: REPAIRING SYSTEMS (Task F-17)
        // Exam Weight: 40% of MWA F
        // ============================================================
        {
          id: 'ch-23',
          number: 18,
          title: 'Repairing Systems',
          subtitle: 'Component replacement, burnout cleanup, and re-commissioning',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'ch23-s1',
              title: '18.1 Component Replacement (F-17.01 – F-17.02)',
              content: [
                {
                  type: 'text',
                  text: 'Repairs must address the root cause and protect the new components from repeat failures. The most expensive mistake in the service trade is installing a new compressor in a contaminated system.'
                },
                {
                  type: 'list',
                  items: [
                    '**Refrigerant Recovery**: Recovering the full system charge before opening any joint; weighing the recovered refrigerant to document compliance with environmental regulations.',
                    '**Compressor Replacement**: Matching refrigerant type, oil type, voltage/phase, and MCA to the original; ensuring correct oil quantity in the new compressor (some ship with a full charge; others require supplemental oil).',
                    "**TXV Replacement**: Selecting an orifice size and rated capacity that matches the system; clamping the sensing bulb to the suction line at the 4 or 8 o'clock position and insulating it from ambient air.",
                    '**Reversing Valve Replacement (Heat Pumps)**: Replacing on the gas side (brazing with the refrigerant circuit intact) is possible with some valve designs; always follow the manufacturer procedure to prevent overheating the valve body.',
                    '**Fan Motor Replacement**: Matching rotation direction, CFM, horsepower, RPM, frame size, and shaft diameter; verifying correct blade pitch and clearance after installation.'
                  ]
                }
              ]
            },
            {
              id: 'ch23-s2',
              title: '18.2 Post-Burnout System Cleanup (F-17.03)',
              content: [
                {
                  type: 'text',
                  text: 'A motor burnout creates acid, carbon soot, and moisture in the refrigerant circuit. If the contamination is not completely removed, the new compressor will fail again — usually within weeks.'
                },
                {
                  type: 'list',
                  items: [
                    '**Step 1 — Flush**: Flush the refrigerant circuit with a clean refrigerant or dedicated system flush to remove bulk contamination.',
                    '**Step 2 — Install Suction-Line Drier**: Install a high-acid-removal suction-line filter-drier with acid-neutralizing desiccant (activated alumina) immediately upstream of the new compressor.',
                    '**Step 3 — First Oil Change**: After 24–48 hours of operation, pull an oil sample, test with an acid test kit, and change the oil if the TAN is above 0.05 mg KOH/g.',
                    '**Step 4 — Repeat**: Continue changing oil every 24–48 hours of operation and testing until the TAN reads clean (< 0.05). This typically takes 2–4 oil changes.',
                    '**Step 5 — Replace Drier**: Once the oil is clean, replace the suction-line drier with a standard filter-drier and continue monitoring.'
                  ]
                }
              ]
            },
            {
              id: 'ch23-s3',
              title: '18.3 Re-commissioning and Reporting (F-17.04)',
              content: [
                {
                  type: 'text',
                  text: 'Once the repair is complete, the system must be returned to service and performance must be verified — not just assumed. Incomplete re-commissioning after a repair is a leading cause of warranty disputes.'
                },
                {
                  type: 'list',
                  items: [
                    '**Pressure Test**: Re-testing the repaired section with nitrogen before evacuating.',
                    '**Evacuation**: Pulling a fresh evacuation to 500 microns and holding to confirm a leak-free, moisture-free system.',
                    '**Recharge**: Calculating and adding the correct refrigerant charge; verifying with superheat and subcooling measurements.',
                    '**Performance Verification**: Repeating the commissioning checks (suction/discharge pressure, superheat, subcooling, electrical draw) and confirming all values are within design parameters.',
                    '**Service Report**: Documenting the root cause, all parts replaced (with model/serial numbers), the final operating conditions, refrigerant quantities added/recovered, and any recommendations for future maintenance.'
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // CertReady — HVAC/R (313A) Master Course: PART 7
    // Exam Strategy and Mock Exam
    // ============================================================
    {
      id: 'part-7',
      number: 7,
      title: 'Exam Strategy & Mock Exam',
      description: 'Final preparation: understanding the exam structure, timing strategies, and high-yield practice questions.',

      chapters: [

        // ============================================================
        // CHAPTER 24: RED SEAL EXAM STRATEGY
        // ============================================================
        {
          id: 'ch-24',
          number: 19,
          title: 'Red Seal Exam Strategy',
          subtitle: 'Exam structure, time management, and high-yield topics',
          isFree: false,
          estimatedMinutes: 20,
          sections: [
            {
              id: 'ch24-s1',
              title: '19.1 Exam Breakdown (125 Questions)',
              content: [
                {
                  type: 'table',
                  headers: ['MWA', 'Title', 'Exam Weight', 'Approx. Questions'],
                  rows: [
                    ['A', 'Common Occupational Skills', '8%', '~10'],
                    ['B', 'Routine Trade Activities', '16%', '~20'],
                    ['C', 'Plans Installation', '13%', '~16'],
                    ['D', 'Performs Installation', '21%', '~26'],
                    ['E', 'Performs Commissioning', '17%', '~21'],
                    ['F', 'Performs Maintenance and Service', '25%', '~31']
                  ],
                  notes: 'Total: 125 questions. Time: 240 minutes (4 hours). Passing: 70%. Format: Computer-based, multiple choice, at a Prometric Canada Testing Services centre.'
                }
              ]
            },
            {
              id: 'ch24-s2',
              title: '19.2 Tactical Exam Advice',
              content: [
                {
                  type: 'list',
                  items: [
                    '**The 4-Hour Rule**: You have 240 minutes for 125 questions — approximately 1.9 minutes per question. Do not spend more than 3 minutes on any single question; flag it and return at the end.',
                    '**"Most Likely" and "First" Questions**: Many questions ask for the "most likely" cause or the "first" step in a procedure. Read all four options; all may be valid actions, but only one is the priority.',
                    '**Process of Elimination**: If you cannot identify the correct answer, eliminate the two most obviously wrong answers and make an educated choice from the remaining two.',
                    '**High-Yield MWAs**: MWA F (Maintenance & Service, 25%) and MWA D (Installation, 21%) together represent 46% of the exam. Prioritize these sections.',
                    '**Visualize the P-H Diagram**: For thermodynamic questions, mentally sketch a Pressure-Enthalpy diagram to trace how the system symptom would shift the operating points.',
                    '**Code References**: Familiarize yourself with the layout of the CSA B52 standard — specifically the refrigerant classification table and the machinery room ventilation requirements.',
                    '**Final Review**: In the last 20 minutes, return to all flagged questions. Do not change answers that you were initially confident about — first instincts are correct more often than second-guessing.'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'ch-25',
          number: 20,
          title: 'Full Mock Exam',
          subtitle: 'Timed 125-question practice exam (4 hours), covering all 6 Major Work Activities',
          isFree: false,
          estimatedMinutes: 5,
          isMockExam: true,
          sections: [
            {
              id: 's25-1',
              title: '20.1 Mock Exam Instructions',
              content: [
                { type: 'paragraph', text: 'This full mock exam contains 125 questions and must be completed in 4 hours — matching the format and pace of the actual Red Seal Refrigeration & Air Conditioning Mechanic (313A) certification examination. Use the "Start exam" button above to launch the timed simulation. Unanswered questions count as wrong when time runs out.' },
                {
                  type: 'infoBox', title: 'Mock Exam Rules — Simulate Real Exam Conditions', items: [
                    '⏱️ Time limit: 4 hours for 125 questions',
                    '📵 No reference materials — attempt all questions from memory',
                    '✏️ Answer all questions — there is no penalty for guessing; unanswered questions count as wrong',
                    '🎯 Passing mark: 70% (88 out of 125 questions correct)',
                    '📊 After completing: review your topic breakdown — focus on weak areas',
                    '🔄 Retake the exam multiple times — your score should improve each attempt',
                  ]
                },
              ],
            },
          ],
          practiceQuestions: [],
        },

      ]
    }
  ]
}

/** Flatten all chapters across all parts */
export const getAllChapters = (course = hvacCourse) =>
  course.parts.flatMap(p => p.chapters);

/** Get only the free preview chapters */
export const getFreeChapters = (course = hvacCourse) =>
  getAllChapters(course).filter(ch => ch.isFree);

/** Find a chapter by its id */
export const getChapterById = (id, course = hvacCourse) =>
  getAllChapters(course).find(ch => ch.id === id);

/** Find which part a chapter belongs to */
export const getPartForChapter = (chapterId, course = hvacCourse) =>
  course.parts.find(p => p.chapters.some(ch => ch.id === chapterId));

/** Get the previous and next chapters (for navigation) */
export const getAdjacentChapters = (chapterId, course = hvacCourse) => {
  const all = getAllChapters(course);
  const idx = all.findIndex(ch => ch.id === chapterId);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
};

/** Count total practice questions across all chapters */
export const getTotalQuestions = (course = hvacCourse) =>
  getAllChapters(course).reduce((sum, ch) => sum + (ch.practiceQuestions?.length || 0), 0);

export default hvacCourse;