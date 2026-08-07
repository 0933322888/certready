export default [
    // MWA A - 7 questions (7%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-safety-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'What is the minimum recommended wait time after disconnecting the 12V battery before working on a hybrid vehicle high-voltage system?',
        options: [
            '30 seconds',
            '2 minutes',
            '5 minutes',
            '10 minutes'
        ],
        correctIndex: 2,
        explanation: 'Hybrid/EV high-voltage systems require a minimum 5-minute wait (up to 30 minutes for some OEMs) after service plug removal for capacitor discharge. This is longer than the 3-minute SRS wait due to larger DC link capacitors in the inverter.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-whmis-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'Which WHMIS 2015 pictogram consists of a flame over a circle?',
        options: [
            'Flammable',
            'Oxidizing',
            'Explosive',
            'Corrosive'
        ],
        correctIndex: 1,
        explanation: 'The Oxidizing pictogram shows a flame over a circle, indicating materials that can cause or intensify fire (e.g., oxygen, peroxides). Flammable is just a flame. Explosive is an exploding bomb. Corrosive shows corrosion on metal and skin.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-tools-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'A technician measures 0.15 V voltage drop on the negative battery cable during cranking. The specification is <0.1 V. What is the most appropriate action?',
        options: [
            'Replace the battery',
            'Clean and tighten the negative cable connections at battery and engine/body grounds',
            'Replace the starter motor',
            'Accept as normal — spec is a guideline'
        ],
        correctIndex: 1,
        explanation: 'Excessive voltage drop on the ground side indicates resistance in the negative cable circuit. Cleaning and tightening connections at the battery negative post, engine block ground, and body grounds is the correct repair. The starter and battery are not the cause of ground-side voltage drop.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-fasteners-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'What is the correct procedure for installing a torque-to-yield (TTY) bolt that specifies "torque to 40 Nm, then +90°"?',
        options: [
            'Torque to 40 Nm, then tighten an additional 90° using an angle gauge',
            'Torque to 40 Nm, then tighten until the wrench clicks again',
            'Torque to 40 Nm, wait 5 minutes, then torque to 40 Nm again',
            'Torque to 40 Nm + 90 Nm in one step'
        ],
        correctIndex: 0,
        explanation: 'TTY bolts require a two-stage process: first a torque value (40 Nm), then an additional angle of rotation (90°) measured with an angle gauge. This stretches the bolt into its plastic deformation range for consistent clamp load. The second stage is NOT a torque value.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-comm-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'A customer reports a vibration at highway speed. The technician performs a road test and confirms the vibration. What is the NEXT step in the diagnostic process?',
        options: [
            'Balance all four tires',
            'Check for DTCs in all modules',
            'Perform a visual inspection of tires, wheels, and suspension',
            'Replace the tires'
        ],
        correctIndex: 2,
        explanation: 'After verifying the complaint (road test), the next step is a thorough visual and sensory inspection: tire condition/wear, wheel damage, suspension/steering play, driveshaft, engine mounts. Checking DTCs is appropriate but vibration may not set codes. Balancing/replacing tires is a repair, not diagnosis.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-documentation-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'When documenting a repair on a vehicle with an intermittent electrical fault, what is the MOST important information to record?',
        options: [
            'The date and mileage only',
            'The exact conditions when the fault occurs (speed, temperature, load, duration) and all test results',
            'The customer phone number',
            'The parts invoice number'
        ],
        correctIndex: 1,
        explanation: 'Intermittent faults require detailed conditions: when it happens (speed, temp, load, duration), what was tested, all measurements (voltage, resistance, scope waveforms), and DTCs. This allows pattern recognition and efficient re-diagnosis if the fault returns.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-mentoring-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'An apprentice asks why a scan tool shows "System Voltage 14.2 V" but the battery terminal reads 12.6 V with the engine running. What is the BEST explanation?',
        options: [
            'The scan tool is reading alternator output voltage before the voltage drop across the battery cable',
            'The battery is fully charged',
            'The scan tool is faulty',
            'The alternator is overcharging'
        ],
        correctIndex: 0,
        explanation: 'The PCM measures system voltage at its own power feed (after the alternator but before the main battery cable run). The battery terminal voltage includes the voltage drop across the positive cable and connections. A 1.6 V difference indicates excessive resistance in the charging circuit positive side.',
        order: 0
    },

    // MWA B - 18 questions (17.6%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-compression-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A gasoline engine has compression readings: Cyl 1: 165 psi, Cyl 2: 160 psi, Cyl 3: 90 psi, Cyl 4: 162 psi. After a wet test, Cyl 3 reads 95 psi. What is the most likely cause?',
        options: [
            'Worn piston rings on cylinder 3',
            'Burned intake or exhaust valve on cylinder 3',
            'Blown head gasket between cylinders 3 and 4',
            'Cracked piston on cylinder 3'
        ],
        correctIndex: 1,
        explanation: 'Minimal increase on wet test (<10-15%) rules out piston rings (which would show significant increase). The low compression with no wet-test improvement indicates a valve sealing issue (burned valve or seat) or head gasket. Adjacent cylinders are normal, making head gasket between 3/4 less likely than a valve fault on cylinder 3.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-leakdown-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'During a cylinder leak-down test at 80 psi shop air, cylinder 2 shows 35% leakage. Air is heard at the oil fill cap and the dipstick tube. What does this indicate?',
        options: [
            'Intake valve leak',
            'Exhaust valve leak',
            'Piston ring/cylinder wall leak',
            'Head gasket leak'
        ],
        correctIndex: 2,
        explanation: 'Air escaping at the oil fill cap and dipstick tube indicates leakage past the piston rings into the crankcase. Intake valve leak = air at throttle body. Exhaust valve leak = air at tailpipe. Head gasket = bubbles in coolant or pressure rise in adjacent cylinder.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-vvt-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A vehicle with VVT has a P0014 code (Camshaft Position Timing Over-Advanced Bank 1 Exhaust). The engine oil is correct and full. Scan tool shows VVT commanded 0° but actual is +25°. What is the most likely cause?',
        options: [
            'Faulty camshaft position sensor',
            'Stuck VVT oil control valve (OCV) in the advance position',
            'Stretched timing chain',
            'Faulty PCM'
        ],
        correctIndex: 1,
        explanation: 'P0014 with correct oil and a large commanded-vs-actual discrepancy (+25°) indicates the OCV is mechanically stuck in the advance position, continuously feeding oil to the advance chamber of the phaser. A stretched chain would retard timing. A faulty CMP would show erratic or no signal, not a steady offset.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-gdi-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A GDI engine has low fuel rail pressure (200 bar, spec 500+ bar at idle). The high-pressure pump is mechanically driven. What is the FIRST component to inspect?',
        options: [
            'Low-pressure fuel pump',
            'Fuel pressure regulator on the rail',
            'High-pressure pump camshaft lobe',
            'Fuel rail pressure sensor'
        ],
        correctIndex: 2,
        explanation: 'On GDI engines, the high-pressure pump is driven by a camshaft lobe. Lobe wear is a common cause of low rail pressure because the pump cannot generate sufficient stroke. The low-pressure pump feeds the high-pressure pump; if it failed, the HP pump would cavitate but the lobe is the most common mechanical failure point.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-timing-chain-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A timing chain engine has a P0016 code (Crankshaft/Camshaft Correlation Bank 1). The chain tensioner is at maximum extension. What repair is required?',
        options: [
            'Replace CKP sensor',
            'Replace CMP sensor',
            'Replace timing chain, guides, tensioner, and sprockets as a set',
            'Reprogram PCM'
        ],
        correctIndex: 2,
        explanation: 'P0016 with the tensioner at max extension confirms the chain has stretched beyond the tensioner\'s take-up capacity. The entire timing set (chain, guides, tensioner, sprockets) must be replaced. Replacing only the chain on worn sprockets/guides will cause rapid re-failure.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-diesel-injector-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'During a diesel injector balance test, cylinder 3 shows a balance value of -8 mm³/stroke (others +2 mm³/stroke). What does the negative value indicate?',
        options: [
            'Injector 3 is clogged (under-fueling)',
            'Injector 3 is leaking (over-fueling)',
            'Cylinder 3 has low compression',
            'Glow plug 3 is inoperative'
        ],
        correctIndex: 1,
        explanation: 'Negative balance value = PCM reduced fuel to that cylinder to maintain equal contribution. The injector is leaking (over-fueling). Positive values = PCM added fuel (under-fueling/clogged). Low compression or glow plug issues would not cause a negative balance value.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-diesel-compression-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A diesel engine has cranking compression of 28 bar on all cylinders (spec 30-40 bar). The battery and starter are good. What is the most likely cause?',
        options: [
            'Worn piston rings on all cylinders',
            'Incorrect valve timing (camshaft timing off)',
            'Faulty compression gauge adapter',
            'Carbon buildup on intake valves'
        ],
        correctIndex: 1,
        explanation: 'Low compression on ALL cylinders of a diesel with good cranking speed typically indicates incorrect valve timing (camshaft timing off). Diesel compression is highly dependent on valve timing. Worn rings would vary by cylinder. Carbon on intake valves affects airflow, not compression pressure directly.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-head-gasket-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'During a cooling system pressure test, pressure rises rapidly from 15 psi to 25 psi when the engine is snap-accelerated. What does this confirm?',
        options: [
            'External coolant leak',
            'Combustion gas leaking into cooling system',
            'Faulty radiator cap',
            'Water pump cavitation'
        ],
        correctIndex: 1,
        explanation: 'Rapid pressure rise on snap acceleration = combustion pressure entering the cooling system. This is a definitive sign of a blown head gasket or cracked head/block. A block tester (chemical test) would confirm hydrocarbons in coolant. External leaks cause pressure drop, not rise.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-thermostat-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'An engine overheats at highway speed but runs cool in city traffic. The cooling fan operates normally. Upper radiator hose is hot, lower hose is cool. What is the most likely cause?',
        options: [
            'Stuck closed thermostat',
            'Restricted radiator',
            'Failed water pump impeller',
            'Low coolant level'
        ],
        correctIndex: 1,
        explanation: 'Overheat at high speed/load with cool lower hose = restricted radiator. At highway speed, airflow demand exceeds the restricted radiator\'s capacity. A stuck thermostat would cause overheat at all speeds. Water pump impeller failure typically shows hot upper and lower hoses (no flow).',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-oil-pressure-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'An engine has 15 psi oil pressure at hot idle (spec 20 psi) but 65 psi at 2000 RPM (spec 60 psi). What is the most likely cause?',
        options: [
            'Worn main bearings',
            'Worn rod bearings',
            'Oil pump pressure relief valve stuck open',
            'Restricted oil pickup screen'
        ],
        correctIndex: 3,
        explanation: 'Low idle pressure with normal higher-RPM pressure indicates a restricted oil pickup screen. At low RPM, the pump cannot pull enough oil through the restriction. At higher RPM, pump vacuum overcomes the restriction. Worn bearings or stuck relief valve would show low pressure at all speeds.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-turbo-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A turbocharged diesel has low boost pressure under load. The wastegate actuator rod does not move when vacuum is applied. What is the most likely cause?',
        options: [
            'Turbocharger bearing failure',
            'Wastegate actuator diaphragm ruptured',
            'Boost pressure sensor failed',
            'Exhaust leak before turbo'
        ],
        correctIndex: 1,
        explanation: 'Wastegate actuator rod not moving with vacuum applied = ruptured diaphragm or seized wastegate valve. The actuator cannot open the wastegate, but if it\'s stuck closed, boost would be HIGH. If the diaphragm is ruptured, it cannot hold vacuum to keep the wastegate closed, causing LOW boost.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-pcv-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'An engine has excessive oil consumption and blue smoke on deceleration. The PCV valve rattles when shaken. What is the most likely cause?',
        options: [
            'Worn piston rings',
            'Worn valve guide seals',
            'PCV valve stuck open',
            'Turbocharger seal failure'
        ],
        correctIndex: 2,
        explanation: 'A PCV valve that rattles (check ball moves freely) but is stuck open (or the wrong valve for the application) creates excessive crankcase vacuum, pulling oil past the valve guides and rings. Blue smoke on deceleration (high manifold vacuum) is classic PCV-related oil consumption. The valve should be tested for flow, not just rattle.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-egt-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A diesel engine has high exhaust gas temperature (EGT) under load. Boost pressure is normal. What is the most likely cause?',
        options: [
            'Restricted air filter',
            'Leaking injector (over-fueling)',
            'Turbocharger compressor wheel damage',
            'EGR valve stuck closed'
        ],
        correctIndex: 1,
        explanation: 'High EGT with normal boost = over-fueling (excess fuel for available air). A leaking injector dripping fuel or worn nozzle over-fuels the cylinder. EGR stuck closed would increase NOx but typically lowers EGT slightly (less inert gas). Compressor damage would reduce boost.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-timing-belt-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'When replacing a timing belt on an interference engine, what is the CRITICAL step before loosening the tensioner?',
        options: [
            'Drain the coolant',
            'Verify the engine is at TDC #1 compression stroke (both valves closed)',
            'Remove the crankshaft pulley',
            'Mark the belt direction of rotation'
        ],
        correctIndex: 1,
        explanation: 'Before loosening the tensioner, you MUST verify the engine is at TDC on the compression stroke for cylinder #1 (both intake and exhaust valves closed). This ensures the camshaft(s) and crankshaft are in the correct relationship. Marking belt direction is good practice but not critical for interference prevention.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-valve-train-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'An engine has a ticking noise at idle that increases with RPM. Valve lash is within spec. The noise is loudest at the valve cover. What is the most likely cause?',
        options: [
            'Worn camshaft lobe',
            'Collapsed hydraulic lifter (HLA)',
            'Loose rocker arm bolt',
            'Exhaust leak at manifold'
        ],
        correctIndex: 1,
        explanation: 'A collapsed hydraulic lifter cannot maintain zero lash, causing a ticking noise at the valve cover that increases with RPM. It may partially pump up at higher RPM but often remains noisy. Worn cam lobe typically causes a misfire and lobe-specific noise pattern. Exhaust leak is louder under load.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-cooling-fan-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'An electric cooling fan does not operate. The fan motor runs when jumped directly to 12V. The coolant temperature sensor reads correctly on the scan tool. What is the next test?',
        options: [
            'Replace the fan relay',
            'Check the fan control module PWM signal with a scope',
            'Replace the coolant temperature sensor',
            'Check the fan fuse only'
        ],
        correctIndex: 1,
        explanation: 'With a good motor and correct sensor data, the fault is in the control circuit. Modern electric fans use PWM-controlled modules. A scope on the PWM signal wire (at the fan connector) will show if the PCM/module is commanding the fan. A simple relay check is insufficient for PWM systems.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-fuel-trim-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A gasoline engine has LTFT +18% and STFT +5% at idle. At 2500 RPM, LTFT +2%, STFT 0%. What is the most likely cause?',
        options: [
            'Vacuum leak',
            'Faulty MAF sensor',
            'Leaking fuel injector',
            'Faulty O2 sensor'
        ],
        correctIndex: 0,
        explanation: 'High positive fuel trims at idle that normalize at higher RPM = vacuum leak. The leak adds unmetered air, which is a larger percentage of total airflow at idle (low airflow) than at 2500 RPM. MAF fault would affect all RPM ranges. Leaking injector would cause negative trims. O2 sensor fault typically sets a code.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-knock-sensor-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'An engine has a P0325 code (Knock Sensor 1 Circuit Bank 1). The sensor resistance measures 5.2 MΩ (spec 4.5-5.5 MΩ). The wiring harness tests good. What is the most likely cause?',
        options: [
            'Knock sensor internal failure',
            'PCM failure',
            'Incorrect sensor installation torque',
            'Engine mechanical knock'
        ],
        correctIndex: 2,
        explanation: 'Knock sensors are piezoelectric and EXTREMELY sensitive to installation torque. Over-torquing cracks the crystal; under-torquing causes poor contact. Both set circuit codes despite good resistance. Correct torque (typically 20-25 Nm) is critical. Mechanical knock would not set a circuit code.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-egr-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A diesel engine has low power and black smoke. The EGR valve is commanded 0% (closed) but actual position reads 35%. What is the most likely cause?',
        options: [
            'EGR valve stuck open',
            'EGR position sensor failed',
            'EGR cooler restricted',
            'Turbocharger failure'
        ],
        correctIndex: 0,
        explanation: 'Commanded 0% but actual 35% = EGR valve mechanically stuck open (carbon buildup on pintle/seat). This introduces hot exhaust gas into the intake, reducing oxygen and causing low power and black smoke. A position sensor fault would typically show erratic or no reading, not a steady offset.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-repair-procedure-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'When installing a new cylinder head on an engine with TTY head bolts and an MLS gasket, what is the correct torque sequence?',
        options: [
            'Torque all bolts to final spec in one pass',
            'Torque in sequence: 40 Nm → 60 Nm → +90° → +90°',
            'Torque to spec, wait 10 minutes, re-torque to spec',
            'Torque in sequence: 20 Nm → 40 Nm → 60 Nm'
        ],
        correctIndex: 1,
        explanation: 'TTY head bolts with MLS gaskets require a multi-stage torque + angle procedure (e.g., 40 Nm → 60 Nm → +90° → +90°) in the specified sequence (typically center-out spiral). Single-pass or re-torque procedures do not achieve the controlled plastic deformation required for TTY bolts.',
        order: 0
    },

    // MWA C - 10 questions (9.6%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-can-voltage-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'A healthy high-speed CAN bus at rest (recessive state) measures what voltage on CAN_H and CAN_L?',
        options: [
            'CAN_H 3.5 V, CAN_L 1.5 V',
            'CAN_H 2.5 V, CAN_L 2.5 V',
            'CAN_H 5 V, CAN_L 0 V',
            'CAN_H 12 V, CAN_L 0 V'
        ],
        correctIndex: 1,
        explanation: 'In the recessive (idle) state, both CAN_H and CAN_L float at approximately 2.5 V (differential voltage ~0 V). In the dominant state, CAN_H rises to ~3.5 V and CAN_L falls to ~1.5 V (differential ~2 V).',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-termination-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'A technician measures 120 Ω between CAN_H and CAN_L at the DLC with the key off and battery disconnected. What does this indicate?',
        options: [
            'Normal termination',
            'One terminating resistor missing',
            'Short between CAN_H and CAN_L',
            'Open circuit in CAN_H'
        ],
        correctIndex: 1,
        explanation: 'A healthy HS-CAN has two 120 Ω terminators in parallel = 60 Ω. 120 Ω means one terminator is missing (open circuit at one end, or a module with integrated terminator is unplugged). 0 Ω = short. Infinite = open circuit.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-u-code-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'A vehicle has U0100 (Lost Communication with ECM/PCM). The scan tool communicates with ABS, BCM, and IPC but not PCM. What is the most likely cause?',
        options: [
            'CAN bus short to ground',
            'PCM power or ground failure',
            'Gateway module failure',
            'DLC pins 6/14 wiring fault'
        ],
        correctIndex: 1,
        explanation: 'U0100 means the requesting module cannot communicate with the PCM. Since other modules communicate, the bus and gateway are functional. The fault is isolated to the PCM: its power, ground, CAN transceiver, or internal failure.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-lin-diag-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'A LIN bus slave (door module) does not respond. The LIN wire at the slave connector measures a constant 12 V with no transitions. What is the fault?',
        options: [
            'Normal LIN recessive state',
            'LIN wire short to battery',
            'LIN wire open',
            'Master not polling'
        ],
        correctIndex: 1,
        explanation: 'Constant 12 V with no transitions (no master header + slave response) indicates the LIN wire is shorted to battery voltage, preventing the master from pulling the line low to communicate. An open wire would also show 12 V (pull-up) but the master header would be visible on a scope.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-programming-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'During PCM programming via J2534, the vehicle battery voltage drops to 11.8 V. What is the most likely result?',
        options: [
            'Programming completes normally',
            'PCM is bricked (corrupted software)',
            'Programming takes longer',
            'PCM reverts to previous software'
        ],
        correctIndex: 1,
        explanation: 'Module programming requires stable 13.5-14.5 V. A voltage drop during flash corrupts the write, bricking the module. A 25+ amp maintainer in power supply mode (not charge mode) is mandatory. Never program on battery alone.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-immobilizer-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'A replacement BCM requires key programming. The customer has only one working key. What is required?',
        options: [
            'The one key is sufficient',
            'Two working keys are required',
            'Dealer SDM/NASTF access required',
            'Immobilizer cannot be programmed'
        ],
        correctIndex: 2,
        explanation: 'Most OEMs require two working keys to program additional keys or a new BCM/PCM. With only one key, dealer-level Secure Data Release (SDM/NASTF) access is required. Some OEMs have a 10-30 minute security delay with one key.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-sgw-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'What is the function of a Security Gateway (SGW) module?',
        options: [
            'Blocks unauthorized diagnostic and programming access',
            'Encrypts CAN bus messages',
            'Manages HV battery contactors',
            'Controls keyless entry'
        ],
        correctIndex: 0,
        explanation: 'A Security Gateway (FCA, VW, Mercedes, etc.) acts as a firewall that blocks unauthorized diagnostic commands (bi-directional controls, programming, DTC clearing) unless the scan tool presents valid authentication (OEM certificate or authorized aftermarket token).',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-initialization-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'After battery replacement, the power windows do not auto-up/down. What is required?',
        options: [
            'Replace window motors',
            'Initialize each window: drive down, hold 2-5 sec, drive up, hold 2-5 sec',
            'Reprogram the BCM',
            'Replace window switches'
        ],
        correctIndex: 1,
        explanation: 'Power windows require initialization after battery disconnect: 1) Ignition ON. 2) Drive window fully DOWN, hold switch down 2-5 sec. 3) Drive fully UP, hold switch up 2-5 sec (auto-up engages). 4) Test auto and anti-pinch. This is an initialization, not a programming or component issue.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-bus-isolation-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'During module isolation for a shorted CAN bus, in what order should modules be disconnected?',
        options: [
            'Safety-critical first (ABS, PCM, airbag)',
            'Aftermarket accessories first, then non-safety, safety-critical last',
            'Closest to DLC first',
            'Alphabetical by module name'
        ],
        correctIndex: 1,
        explanation: 'Module isolation order: 1) Aftermarket accessories (common fault source). 2) Non-safety modules (radio, door modules, etc.). 3) Safety-critical last (ABS, PCM, airbag). Never unplug airbag modules with key on. Document each disconnect.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-doip-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'What is DoIP (Diagnostics over IP)?',
        options: [
            'Diagnostic communication over Ethernet/IP (UDP/TCP) replacing KWP2000/ISO-TP over CAN',
            'A new CAN protocol for EVs',
            'Diagnostic over Internet for remote access only',
            'A wireless diagnostic standard'
        ],
        correctIndex: 0,
        explanation: 'DoIP (ISO 13400) enables diagnostic communication over automotive Ethernet (UDP/TCP) instead of CAN. Used for high-speed ECU flashing, OTA updates, and remote diagnostics. Requires DoIP-capable VCI and OEM software.',
        order: 0
    },

    // MWA D - 14 questions (13.6%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-at-pressure-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'An automatic transmission has low line pressure in all ranges. The fluid level and condition are good. What is the most likely cause?',
        options: [
            'Clogged filter',
            'Worn oil pump',
            'Pressure regulator valve stuck open',
            'All of the above'
        ],
        correctIndex: 3,
        explanation: 'Low line pressure in all ranges with good fluid can be caused by: clogged filter (restricts pump intake), worn pump (internal leakage), or pressure regulator stuck open (dumps pressure to sump). All three are common causes and must be investigated.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-stall-test-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'During a stall test in Drive, the engine RPM is 500 RPM below specification. In Reverse, stall speed is normal. What does this indicate?',
        options: [
            'Torque converter stator one-way clutch failed',
            'Forward clutch slipping',
            'Low line pressure',
            'Engine power deficiency'
        ],
        correctIndex: 0,
        explanation: 'Low stall speed in Drive only (Reverse normal) = torque converter stator one-way clutch failed (freewheeling). The stator cannot redirect fluid, reducing torque multiplication. Forward clutch slip would cause HIGH stall. Engine deficiency would affect both ranges.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-cvt-diag-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A CVT exhibits a "judder" during light acceleration. The fluid is at the correct level but dark. What is the most likely cause?',
        options: [
            'Torque converter clutch slip',
            'Belt/pulley wear or fluid degradation',
            'Stepper motor failure',
            'Low line pressure'
        ],
        correctIndex: 1,
        explanation: 'CVT judder is typically caused by belt/chain wear on the pulleys or degraded fluid that has lost its friction characteristics. The variator relies on precise friction between belt/chain and pulleys. Dark fluid indicates oxidation and loss of friction modifiers.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-dct-adaptation-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A DCT clutch adaptation value is at the maximum limit. What does this indicate and what is required after clutch replacement?',
        options: [
            'Clutch is new; no adaptation reset needed',
            'Clutch is worn out; adaptation reset and relearn required',
            'Mechatronic failed; replace mechatronic',
            'Fluid low; top off fluid'
        ],
        correctIndex: 1,
        explanation: 'Maximum adaptation = clutch worn out. After clutch replacement, the adaptation values MUST be reset via scan tool ("Clutch Adaptation Reset" / "Kiss Point Learn") followed by a specific drive cycle learn procedure. Failure to reset causes clutch slip and premature failure.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-transfer-case-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'An AWD vehicle binds and shudders during tight turns on dry pavement. All tires are the same brand/model but have different tread depths (front 8/32", rear 4/32"). What is the cause?',
        options: [
            'Failed AWD clutch pack',
            'Transfer case chain stretch',
            'Mismatched tire rolling circumference',
            'Front differential failure'
        ],
        correctIndex: 2,
        explanation: 'Different tread depths = different rolling circumferences. The AWD system detects speed differences between axles and locks up the coupling, causing bind on dry pavement. Tire circumference must be within spec (typically <2-3 mm difference). Replace all four tires.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-driveshaft-vibe-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A vibration occurs at 2x driveshaft RPM. The driveshaft is balanced. What is the most likely cause?',
        options: [
            'Driveshaft imbalance',
            'U-joint angle/phasing issue',
            'CV joint failure',
            'Wheel balance issue'
        ],
        correctIndex: 1,
        explanation: '1st order (1x driveshaft RPM) = imbalance. 2nd order (2x) = U-joint working angle issue or phasing problem (yokes not in phase). 3rd order = CV joint (rare). Wheel balance = 1x wheel RPM.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-axle-nut-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'What is the correct axle nut procedure for a Gen 3 hub unit (integrated bearing, ABS sensor)?',
        options: [
            'Torque to 100 Nm, no staking',
            'Torque to spec (e.g., 250 Nm + 90°), stake nut',
            'Tighten until snug, back off 1/4 turn',
            'Torque to 150 Nm, use cotter pin'
        ],
        correctIndex: 1,
        explanation: 'Gen 3 hub units use a TTY axle nut: torque to spec (e.g., 250 Nm) + additional angle (e.g., 90°), then stake the nut. This sets the critical bearing preload. Under/over-torque causes premature failure.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-wheel-bearing-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A growling noise increases with vehicle speed and changes pitch on left/right turns. What is the most likely cause?',
        options: [
            'Tire noise',
            'Wheel bearing failure',
            'Differential bearing failure',
            'Transmission bearing failure'
        ],
        correctIndex: 1,
        explanation: 'Growl proportional to speed that changes on turns (loading/unloading the bearing) = wheel bearing failure. Tire noise typically doesn\'t change on turns. Differential noise is load-dependent (accel/decel), not speed-proportional with turn change.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-backlash-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'What is the typical backlash specification for a differential ring and pinion?',
        options: [
            '0.01-0.03 mm',
            '0.13-0.20 mm',
            '0.50-0.75 mm',
            '1.0-1.5 mm'
        ],
        correctIndex: 1,
        explanation: 'Typical ring gear backlash is 0.13-0.20 mm (0.005-0.008 in). Measured with a dial indicator on the ring gear teeth. Too tight = noise, overheating. Too loose = clunk, gear damage.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-at-cooler-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'When replacing an automatic transmission, what is the MANDATORY step that is often missed?',
        options: [
            'Fill torque converter with ATF',
            'Flush the transmission cooler and lines',
            'Replace the torque converter',
            'Reset TCM adaptations'
        ],
        correctIndex: 1,
        explanation: 'Flushing the cooler and lines is MANDATORY. Debris from the old transmission will destroy the new unit. The torque converter should also be replaced (not just filled). Cooler flush is the critical step most often skipped.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-converter-install-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'What is the correct procedure for installing a torque converter onto an automatic transmission?',
        options: [
            'Bolt to flexplate first, then slide onto input shaft',
            'Slide onto input shaft until two distinct "clicks" are felt (splines, then pump ears)',
            'Install dry, no lubrication on splines',
            'Use a hammer to seat it fully'
        ],
        correctIndex: 1,
        explanation: 'The torque converter must be installed onto the transmission input shaft BEFORE mounting the transmission to the engine. It requires two distinct "clicks": first the turbine splines engage, then the stator/pump drive ears engage. Verify gap to flexplate before bolting.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-mt-synchro-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A manual transmission is hard to shift into 2nd gear only, especially when cold. The clutch hydraulic system is good. What is the most likely cause?',
        options: [
            'Worn 2nd gear synchronizer',
            'Bent shift fork for 1st/2nd',
            'Low transmission fluid',
            'Worn clutch disc'
        ],
        correctIndex: 0,
        explanation: 'Hard shifting into a specific gear (especially cold) with good clutch release = worn synchronizer for that gear. The synchro cone/blocker ring cannot equalize speeds quickly. Cold fluid exacerbates the condition. Shift fork issues typically affect multiple gears.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-pinion-preload-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'What is the correct pinion bearing preload (rotating torque) for NEW bearings?',
        options: [
            '0.1-0.3 Nm',
            '0.5-1.5 Nm',
            '2.0-3.0 Nm',
            '5.0-7.0 Nm'
        ],
        correctIndex: 1,
        explanation: 'New pinion bearing preload is typically 0.5-1.5 Nm (4-13 in-lb). Used bearings: 0.3-0.8 Nm. Measured with an inch-pound torque wrench on the pinion nut (without seal drag). Critical for gear pattern and bearing life.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-cv-joint-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A CV joint makes a clicking noise on sharp turns during acceleration. Which joint is most likely failed?',
        options: [
            'Inner CV joint (tripod)',
            'Outer CV joint (Rzeppa)',
            'Both inner and outer',
            'Center support bearing'
        ],
        correctIndex: 1,
        explanation: 'Clicking on sharp turns during acceleration = OUTER CV joint (Rzeppa/fixed joint) failure. The outer joint operates at high angles during turns. Inner joints (plunging/tripod) typically cause shudder on acceleration (plunge motion).',
        order: 0
    },

    // MWA E - 18 questions (18.4%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-battery-test-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'A battery has an open-circuit voltage of 12.2 V after sitting for 1 hour. What is the approximate state of charge?',
        options: [
            '100%',
            '75%',
            '50%',
            '25%'
        ],
        correctIndex: 2,
        explanation: 'OCV vs SOC: 12.6 V = 100%, 12.4 V = 75%, 12.2 V = 50%, 12.0 V = 25%. 12.2 V = 50% SOC. The battery needs charging before further testing.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-parasitic-draw-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'A vehicle has a parasitic draw of 120 mA after 45 minutes sleep. The technician pulls fuses one at a time. When fuse F12 (Radio) is pulled, the draw drops to 35 mA. What is the next step?',
        options: [
            'Replace the radio',
            'Check the radio wiring for a short to ground',
            'Disconnect the radio connector and retest',
            'Replace fuse F12'
        ],
        correctIndex: 2,
        explanation: 'Isolate the component: disconnect the radio connector. If draw drops to normal, the radio is faulty. If draw remains high, the wiring to the radio has a short to ground. Never replace a module without confirming it\'s the source.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-smart-charging-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'A vehicle with smart charging shows 14.5 V at the battery with no loads, but the PCM commands 13.2 V. The Battery Current Sensor (BCS) reads -5 A (discharging) with all loads off. What is the most likely cause?',
        options: [
            'Alternator failed',
            'BCS offset/faulty',
            'PCM failed',
            'Battery sulfated'
        ],
        correctIndex: 1,
        explanation: 'BCS reading -5 A (discharge) with all loads off and voltage above commanded = BCS offset. The PCM sees false discharge current and raises charging voltage to compensate. Compare scan tool BCS reading to a clamp meter on the battery negative cable.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-led-headlamp-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'An LED headlamp has no low beam but high beam and DRL work. Scan tool bi-directional low beam command fails. What is the most likely cause?',
        options: [
            'BCM failure',
            'Wiring harness open',
            'Internal driver failure in headlamp module',
            'Fuse blown'
        ],
        correctIndex: 2,
        explanation: 'LED modules have internal drivers for each function. Single-function failure with failed bi-directional control = internal driver failure. The module must be replaced. Wiring/BCM/fuse faults would typically affect all functions.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-wiper-diag-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'Wipers do not park (stop in random position). The park switch is integrated into the wiper motor. What is the correct test?',
        options: [
            'Replace the wiper motor',
            'Measure voltage at the motor park switch wire while cycling ignition',
            'Replace the BCM',
            'Replace the wiper switch'
        ],
        correctIndex: 1,
        explanation: 'The park switch signals the BCM when the wipers are at the park position. Measure voltage on the park switch wire (typically 0 V parked, 12 V running) while cycling the ignition. No voltage change = faulty park switch/motor. BCM/switch faults typically cause no operation, not park failure.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-hvac-pressure-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'R-134a system at 35°C (95°F) ambient. Low side 45 psi, high side 300 psi. Condenser fan runs at high speed. What is the diagnosis?',
        options: [
            'Normal operation',
            'Overcharge or restricted condenser',
            'Low charge',
            'Compressor failure'
        ],
        correctIndex: 1,
        explanation: 'High/high pressures at high ambient with fan running = overcharge or restricted condenser. At 35°C, normal high side is ~250-275 psi. 300 psi indicates excess refrigerant or poor condenser heat rejection. Low charge = low/low. Compressor failure = low/high or normal/low.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-txv-diag-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'An expansion valve (TXV) system has low side vacuum (negative pressure) and high side normal. The evaporator inlet is frosted. What is the cause?',
        options: [
            'TXV stuck closed',
            'TXV stuck open',
            'Low refrigerant charge',
            'Restricted condenser'
        ],
        correctIndex: 0,
        explanation: 'Low side vacuum + frosted evaporator inlet = TXV stuck closed (or restricted). No refrigerant flows into evaporator, causing vacuum and freezing of the inlet. TXV stuck open = low/high pressures. Low charge = low/low.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-blend-door-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'Auto climate control: blend door commanded 100% cold, actual position reads 100% hot. Both heater hoses are hot. What is the most likely cause?',
        options: [
            'Heater core restricted',
            'Blend door actuator failed or door broken',
            'Coolant level low',
            'Evaporator temperature sensor failed'
        ],
        correctIndex: 1,
        explanation: 'Commanded cold but actual hot = blend door not moving. Both hoses hot = coolant flows through heater core. Actuator motor, gears, or door itself is faulty. Scan tool actuator calibration may resolve if not mechanical failure.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-refrigerant-oil-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'What is the correct refrigerant oil for an R-1234yf system with an electric compressor?',
        options: [
            'PAG 46',
            'PAG 100',
            'POE (Polyolester)',
            'Mineral oil'
        ],
        correctIndex: 2,
        explanation: 'R-1234yf systems and electric (HV) compressors require POE (Polyolester) oil. PAG oils are for R-134a with belt-driven compressors. NEVER mix PAG and POE oils.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-actuator-cal-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'During HVAC actuator calibration, the blend door cycles but makes a clicking noise and stops mid-travel. What is the most likely cause?',
        options: [
            'Actuator motor failed',
            'Actuator gear stripped',
            'Door binding in housing',
            'Scan tool software issue'
        ],
        correctIndex: 1,
        explanation: 'Clicking during calibration with incomplete travel = stripped gears inside the actuator (common on plastic gear actuators). The motor runs but the gear cannot drive the door. The actuator must be replaced.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-compressor-fail-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'A compressor fails catastrophically (metal debris in system). The condenser is parallel-flow type. What components MUST be replaced?',
        options: [
            'Compressor only',
            'Compressor, condenser, orifice tube/TXV, accumulator/drier',
            'Compressor and condenser',
            'Compressor, orifice tube, drier'
        ],
        correctIndex: 1,
        explanation: 'Catastrophic failure = metal debris throughout. Parallel-flow condensers CANNOT be flushed — must be replaced. Orifice tube/TXV and accumulator/drier must be replaced. Lines/hoses/evaporator must be flushed (closed-loop) or replaced.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-oil-balance-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'When replacing a compressor, the old compressor drains 80 mL oil. The condenser and accumulator are also replaced. How much oil goes in the new compressor?',
        options: [
            '80 mL',
            '110 mL (80 + 15 + 15)',
            'Full charge from bottle (120 mL)',
            '60 mL'
        ],
        correctIndex: 1,
        explanation: 'Oil balancing: measured old oil (80 mL) + 15 mL per component replaced (condenser 15 + accumulator 15 = 30 mL) = 110 mL total. Drain new compressor, add 110 mL correct oil type.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-evacuation-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'What is the correct vacuum level and minimum time for A/C system evacuation?',
        options: [
            '500 microns for 30 minutes minimum',
            '1000 microns for 15 minutes',
            '2000 microns for 10 minutes',
            'Atmospheric pressure for 5 minutes'
        ],
        correctIndex: 0,
        explanation: 'Standard evacuation: 500 microns (0.5 mm Hg) for minimum 30 minutes, followed by a decay test (hold 5 minutes, rise <50 microns). This ensures moisture and non-condensables are removed.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-can-repair-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'What is the correct method for repairing a CAN bus wiring fault?',
        options: [
            'Twist wires together, electrical tape',
            'Solder + adhesive heat shrink, maintain twist rate (1 twist per 20-25 mm)',
            'Crimp with standard butt connector',
            'Wire nut and tape'
        ],
        correctIndex: 1,
        explanation: 'CAN repairs: solder + adhesive-lined heat shrink. Maintain twisted pair (1 twist per 20-25 mm). Shield (if present) reconnected at ONE end only. No wire nuts, T-taps, or non-twisted wire.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-wss-test-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'How do you test a passive (2-wire) wheel speed sensor?',
        options: [
            'Measure resistance (800-1400 Ω), AC voltage while spinning wheel',
            'Measure DC voltage with key on',
            'Apply 12V to sensor, measure output',
            'Ohmmeter only'
        ],
        correctIndex: 0,
        explanation: 'Passive WSS (2-wire): measure resistance (800-1400 Ω), then AC voltage while spinning wheel (sine wave, amplitude increases with speed). Air gap critical (0.5-1.5 mm). Active sensors: 12V supply, digital square wave.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-tpms-relearn-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'After tire rotation, the TPMS light is on. The system is direct TPMS. What is required?',
        options: [
            'Drive for 20 minutes',
            'Relearn sensor IDs using trigger tool at each valve stem (LF, RF, RR, LF)',
            'Replace all sensors',
            'Reset BCM'
        ],
        correctIndex: 1,
        explanation: 'Direct TPMS: each sensor has a unique ID registered to a wheel position. After rotation, IDs must be relearned using a trigger tool at each valve stem in the specified order (typically LF, RF, RR, LF). Indirect TPMS auto-learns via drive cycle.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-blower-test-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'A blower motor works on high speed only. The resistor/module is mounted in the evaporator housing. What is the correct test?',
        options: [
            'Measure resistance of each resistor coil',
            'Measure voltage at blower motor connector on each speed setting',
            'Apply 12V directly to blower motor',
            'Ohmmeter on blower motor'
        ],
        correctIndex: 1,
        explanation: 'Test voltage at the blower motor connector on each speed setting. Resistor type: different voltage per speed. Module (PWM): variable voltage/duty cycle. High speed only = power bypasses resistor/module. Direct 12V only tests the motor, not the control circuit.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-no-heat-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'No heat. Coolant full, engine at temp, both heater hoses hot. What is the most likely cause?',
        options: [
            'Thermostat stuck open',
            'Heater core restricted',
            'Blend door actuator failed (stuck cold)',
            'Water pump failed'
        ],
        correctIndex: 2,
        explanation: 'Both hoses hot = coolant flows through heater core. Engine at temp = thermostat OK. No heat with hot hoses = blend door not directing air through core (actuator failed, door broken, or calibration lost).',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-sunload-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'What does the sunload sensor do in an automatic climate control system?',
        options: [
            'Measures outside temperature',
            'Measures solar radiation intensity to adjust cooling/heating demand',
            'Measures cabin humidity',
            'Measures engine coolant temperature'
        ],
        correctIndex: 1,
        explanation: 'The sunload sensor (photodiode on dash) measures solar radiation intensity. High sunload increases cooling demand (higher blower, colder blend door). Low sunload reduces demand. It compensates for greenhouse effect.',
        order: 0
    },

    // MWA F - 18 questions (18.4%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-alignment-seq-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'What is the correct sequence for a 4-wheel alignment?',
        options: [
            'Front toe, front camber, front caster, rear toe, rear camber',
            'Rear camber, rear toe (thrust angle), front caster, front camber, front toe',
            'Front caster, front camber, front toe, rear camber, rear toe',
            'All front angles, then all rear angles'
        ],
        correctIndex: 1,
        explanation: 'Alignment sequence: 1) Rear: camber (if adjustable), TOE (set thrust angle = 0°). 2) Front: caster (if adjustable), camber, TOE (set to centerline, centers steering wheel). 3) Steering angle sensor calibration. 4) ADAS calibration.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-tire-pull-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A vehicle pulls right. Tire pressures equal. Swapping front tires side-to-side moves the pull to the left. What is the cause?',
        options: [
            'Alignment issue (camber/caster)',
            'Tire conicity (radial pull)',
            'Brake drag on right side',
            'Steering rack fault'
        ],
        correctIndex: 1,
        explanation: 'Pull follows the tire when swapped = tire conicity (radial pull) or construction variance. Alignment pull stays with the vehicle. Brake drag pull is constant and brake-related.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-sas-cal-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'What is the correct procedure for calibrating a steering angle sensor after alignment?',
        options: [
            'Turn steering lock-to-lock 3 times',
            'Scan tool "Steering Angle Sensor Calibration" with wheels straight',
            'Drive straight for 1 km',
            'Disconnect battery for 10 minutes'
        ],
        correctIndex: 1,
        explanation: 'Steering angle sensor calibration: 1) Wheels straight ahead. 2) Scan tool: "Steering Angle Sensor Calibration" / "Zero Point Calibration". 3) Some OEMs: turn lock-to-lock, return to center. 4) Verify scan tool reads 0° ±0.5° at center.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-eps-torque-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'An EPS system has a torque sensor code. The sensor voltage at center is 2.5 V (spec 2.4-2.6 V). What is the most likely cause?',
        options: [
            'Torque sensor internal fault',
            'EPS motor failure',
            'Steering column binding',
            'Battery voltage low'
        ],
        correctIndex: 0,
        explanation: 'Torque sensor voltage within spec at center but code set = internal sensor fault (signal noise, offset drift, or communication error with EPS ECU). The sensor is a torsion bar with Hall/MR elements — internal failure requires rack/column replacement.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-air-susp-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'Air suspension: left rear corner low, compressor runs constantly. Height sensor voltage LR = 0.8 V (spec 2.5 V at ride height). What is the cause?',
        options: [
            'Air spring leak',
            'Height sensor failed',
            'Compressor failed',
            'Valve block stuck open'
        ],
        correctIndex: 0,
        explanation: 'Low corner + constant compressor + low height sensor voltage (indicating low ride height) = air spring leak on that corner. The compressor runs trying to maintain height. Height sensor is reporting correctly (low voltage = low height).',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-hcu-bleed-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'After master cylinder replacement on a vehicle with ABS/ESC, what is the MANDATORY bleed procedure?',
        options: [
            'Manual bleed only',
            'Scan tool "HCU Bleed" / "ABS Bleed" procedure mandatory',
            'Pressure bleed only',
            'Gravity bleed only'
        ],
        correctIndex: 1,
        explanation: 'After master cylinder or HCU replacement, the HCU internal passages contain air. A scan tool "HCU Bleed" or "ABS Bleed" procedure is MANDATORY to cycle the pump and valves to purge air. Manual/pressure bleed alone cannot remove air from the HCU.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-rotor-lro-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'Brake pedal pulsation. Rotor LRO measures 0.08 mm (spec <0.05 mm). What is the correct repair?',
        options: [
            'Resurface rotors on-vehicle',
            'Replace rotors',
            'Torque wheel nuts to spec',
            'Replace brake pads only'
        ],
        correctIndex: 1,
        explanation: 'Rotor LRO of 0.08 mm exceeds spec (<0.05 mm). Modern rotors are often too thin to resurface after wear. Replacement is the correct repair. On-vehicle resurfacing can correct LRO but not thickness variation.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-epb-diag-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'EPB won\'t release. What is the correct diagnostic procedure?',
        options: [
            'Manually pull the cable',
            'Scan tool: EPB service mode retract, check motor current, position sensor',
            'Replace the caliper',
            'Disconnect battery'
        ],
        correctIndex: 1,
        explanation: 'EPB diagnosis: 1) Scan tool "EPB Service Mode" to retract. 2) Monitor motor current and position sensor (Hall) data. 3) Bi-directional apply/release. 4) Mechanical: cable bind, caliper piston seize. 5) Calibration after repair (apply/release cycles).',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-regen-blend-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'During regenerative braking on an HEV, when does the friction brake system compensate?',
        options: [
            'Battery SOC > 80%',
            'Battery temperature too low or too high',
            'Motor/generator fault',
            'All of the above'
        ],
        correctIndex: 3,
        explanation: 'Regen is unavailable when: battery SOC high (near full), battery temp too low (cold) or too high (overheat protection), motor/generator fault, or system fault. The HCU/PCM must instantly blend friction braking — pedal feel simulator provides driver feedback.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-ball-joint-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'What is the correct procedure for measuring ball joint play on a LOADED ball joint (weight on wheel)?',
        options: [
            'Pry up on tire, measure vertical movement at ball joint',
            'Pry sideways on tire, measure horizontal movement',
            'Shake tire at 12 and 6 o\'clock',
            'Visual inspection only'
        ],
        correctIndex: 0,
        explanation: 'Loaded ball joint test: use a pry bar under the tire to lift the suspension. Measure vertical play at the ball joint with a dial indicator. Spec typically <1.5 mm (0.060 in). Unloaded test (wheel off ground) checks horizontal play. Follow OEM procedure.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-cdc-diag-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A CDC damper is commanded "Hard" via bi-directional scan tool but the damper current does not change. What is the most likely cause?',
        options: [
            'Damper solenoid failed',
            'Vertical G sensor failed',
            'Body acceleration sensor failed',
            'Steering angle sensor failed'
        ],
        correctIndex: 0,
        explanation: 'CDC damper current should change immediately with bi-directional command (Hard/Soft). No current change = solenoid circuit fault (open/short), damper internal solenoid failure, or wiring. The sensors provide input for automatic mode but don\'t prevent bi-directional command.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-tire-pressure-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'Where is the correct tire pressure specification found for a vehicle?',
        options: [
            'On the tire sidewall',
            'On the vehicle placard (door jamb, fuel door, glove box)',
            'In the owner\'s manual only',
            '35 psi for all vehicles'
        ],
        correctIndex: 1,
        explanation: 'Correct tire pressure is on the vehicle placard (driver door jamb, fuel door, or glove box) and in the owner\'s manual. The sidewall pressure is the MAXIMUM pressure for the tire at max load, not the vehicle-specific pressure.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-tpms-battery-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A direct TPMS sensor has a dead battery. What is the repair?',
        options: [
            'Replace sensor battery',
            'Replace the entire sensor assembly',
            'Relearn the sensor',
            'Drive for 30 minutes to recharge'
        ],
        correctIndex: 1,
        explanation: 'Direct TPMS sensors have non-replaceable batteries (7-10 year life). Dead battery = replace the entire sensor assembly. New sensor requires ID programming/relearn via trigger tool.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-road-force-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'What is the typical road force balance specification for radial force variation?',
        options: [
            '<5 lb',
            '<15-20 lb (varies by OEM)',
            '<50 lb',
            '<100 lb'
        ],
        correctIndex: 1,
        explanation: 'Road force balancer radial force variation spec is typically <15-20 lb (varies by OEM and tire size). Lateral force variation similar. Road force matching (mounting tire high point to rim low point) solves vibrations traditional balance cannot.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-hub-unit-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A Gen 3 hub unit has excessive end-play (0.15 mm). What is the repair?',
        options: [
            'Adjust axle nut tighter',
            'Replace the hub unit',
            'Replace the bearing only',
            'Shim the hub'
        ],
        correctIndex: 1,
        explanation: 'Gen 3 hub units are non-serviceable sealed units. Excessive end-play = internal bearing wear. The entire hub unit must be replaced. Axle nut torque sets preload (TTY: torque + angle + stake) — cannot be adjusted after installation.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-sway-link-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'What is the correct procedure for installing a new sway bar link?',
        options: [
            'Torque both ends to spec with suspension at ride height',
            'Torque both ends with suspension fully drooped',
            'Hand tight only',
            'Torque to 100 Nm'
        ],
        correctIndex: 0,
        explanation: 'Sway bar links must be torqued at ride height (vehicle on ground or lift with suspension loaded to curb height) to prevent preloading the bushings. Typical torque: 40-60 Nm. Torquing at full droop twists the bushings, causing premature failure and noise.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-yaw-cal-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'ESC light on. Yaw rate sensor code. Sensor voltage 2.5 V at rest (spec 2.4-2.6 V). What is required?',
        options: [
            'Replace yaw rate sensor',
            'Yaw rate sensor zero calibration on level ground',
            'Replace HCU',
            'Four-wheel alignment'
        ],
        correctIndex: 1,
        explanation: 'Yaw rate and lateral-G sensors require zero-point calibration on a level surface after battery disconnect, sensor replacement, or collision repair. Voltage at rest within spec but code set = calibration lost. Scan tool "Yaw Rate Sensor Calibration" / "Zero Point Calibration".',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-wheel-nuts-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'What is the correct procedure for torquing wheel nuts?',
        options: [
            'Impact wrench to maximum',
            'Star pattern, torque to spec, re-torque after 50-100 km',
            'Circular pattern, torque to spec',
            'Any pattern, torque to spec'
        ],
        correctIndex: 1,
        explanation: 'Wheel nuts: star (crisscross) pattern, torque to spec (typically 100-150 Nm). Re-torque after 50-100 km (required for alloy wheels, recommended for all). Impact wrench for final torque is prohibited — use torque wrench.',
        order: 0
    },

    // MWA G - 8 questions (8%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-srs-safety-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'What is the correct safety procedure before working on any SRS component?',
        options: [
            'Disconnect battery, wait 30 seconds',
            'Disconnect battery, wait 3+ minutes',
            'Remove airbag fuse only',
            'Disconnect yellow connectors only'
        ],
        correctIndex: 1,
        explanation: 'SRS safety: Battery disconnect → wait minimum 3 minutes (some OEMs 10 minutes) for backup capacitor discharge. Never probe yellow connectors with DMM. Carry modules face up/away. Store face up.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-srs-code-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'SRS code B0010 (Driver Airbag Squib Circuit Resistance Low). What does this indicate?',
        options: [
            'Open circuit in squib',
            'Short circuit in squib (resistance < 2 Ω)',
            'Clock spring failure',
            'SRS ECU failure'
        ],
        correctIndex: 1,
        explanation: 'B0010 = resistance below spec (typically <2.0 Ω). Normal squib resistance is 2.0-3.0 Ω. Low resistance = short in squib, clock spring, or wiring. High resistance (>3 Ω) = open circuit.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-ocs-cal-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'What is the correct procedure for OCS (Occupant Classification System) zero-point calibration?',
        options: [
            'Place 50 lb weight on seat, scan tool calibrate',
            'Seat empty, unloaded, level ground, scan tool "OCS Zero Point Calibration"',
            'Sit in seat, scan tool calibrate',
            'Disconnect battery, reconnect, calibrate'
        ],
        correctIndex: 1,
        explanation: 'OCS zero calibration: seat MUST be empty, unloaded (no objects), on level ground. Scan tool: "OCS Zero Point Calibration" records bladder pressure sensor voltage at zero load. Required after seat removal, sensor replacement, or battery disconnect (some OEMs).',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-panel-gap-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'What is the typical door-to-fender gap specification?',
        options: [
            '1-2 mm',
            '4-6 mm ±1 mm',
            '8-10 mm',
            'Gap is not specified'
        ],
        correctIndex: 1,
        explanation: 'Typical door-to-fender gap spec: 4-6 mm ±1 mm. Flush tolerance: ±0.5-1 mm. Measured with feeler gauge (gap) and straight edge/flush gauge (flush). Adjusted via hinge bolts (slotted) and striker.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-corrosion-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'What is the correct corrosion protection sequence for a welded panel joint?',
        options: [
            'Weld → cavity wax → seam sealer → paint',
            'Weld-through primer → weld → cavity wax → seam sealer → paint',
            'Paint → weld → cavity wax',
            'Seam sealer → weld → paint'
        ],
        correctIndex: 1,
        explanation: 'Correct sequence: 1) Weld-through primer (copper/zinc) on mating flanges BEFORE welding. 2) Weld. 3) Cavity wax inside enclosed sections AFTER assembly. 4) Seam sealer on lap joints/hem flanges. 5) Paint: epoxy primer → base → clear.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-windshield-time-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'What determines the drive-away time for a structural windshield installation?',
        options: [
            '15 minutes',
            '1 hour',
            '4 hours',
            'The urethane cartridge label'
        ],
        correctIndex: 3,
        explanation: 'Drive-away time varies by urethane product and application (standard vs. structural). The cartridge label specifies the cure time for the specific conditions (temperature, humidity). Structural installations typically require longer (4-24 hours). Always follow the manufacturer\'s label.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-seat-memory-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'Power seat memory won\'t store positions. Seat moves normally with switches. What is the most likely cause?',
        options: [
            'Seat motor failure',
            'Position sensor failure',
            'Memory switch failure',
            'Seat module programming lost'
        ],
        correctIndex: 1,
        explanation: 'Memory function requires position feedback (Hall effect sensors on each motor). If seat moves normally but memory doesn\'t store, the position sensors are not providing feedback to the seat ECU. Scan tool data list shows sensor voltages.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-sunroof-init-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'What is the correct procedure for initializing a sunroof after battery disconnect?',
        options: [
            'Hold open button 10 seconds',
            'Hold close button 5-10 seconds past full close, then hold open 5-10 seconds past full open',
            'Drive vehicle 10 minutes',
            'Scan tool only'
        ],
        correctIndex: 1,
        explanation: 'Sunroof initialization: 1) Ignition ON. 2) Hold CLOSE switch 5-10 sec past full close. 3) Hold OPEN switch 5-10 sec past full open. 4) Test auto-open/close. 5) Anti-pinch test (rolled towel). Some require scan tool position sensor learn.',
        order: 0
    },

    // MWA H - 7 questions (7.2%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-ppe-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'What is the correct PPE for working on a 400 V HV system?',
        options: [
            'Standard safety glasses, leather gloves',
            'Class 0 (1000 V) insulated gloves + leather protectors, face shield, CAT 2 arc-rated clothing',
            'Nitrile gloves, safety glasses',
            'Welding gloves, face shield'
        ],
        correctIndex: 1,
        explanation: 'HV (>60 V DC) PPE: Class 0 (1000 V rated) insulated rubber gloves + leather protectors, face shield, CAT 2+ arc-rated shirt/pants, EH-rated boots. Insulated tools (IEC 60900). NO EXCEPTIONS.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-deenergize-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'What is the correct de-energizing sequence for an HV system?',
        options: [
            'Remove service plug → disconnect 12V → wait → verify',
            'Key OFF → remove proximity key → disconnect 12V negative → remove service plug → wait → verify <60 V DC',
            'Disconnect 12V → remove service plug → verify',
            'Remove service plug only'
        ],
        correctIndex: 1,
        explanation: 'Standard de-energize: 1) Key OFF, remove proximity key >5 m. 2) Disable 12V (disconnect negative). 3) Remove service plug (or pull HV fuse/relay per OEM). 4) Wait capacitor discharge (5-10 min, up to 30 min). 5) Verify <60 V DC at multiple points (inverter DC link, motor phases, charger inlet) with Cat III DMM. 6) LOTO service plug.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-cell-balance-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'An HV battery pack has a cell voltage delta (max-min) of 180 mV. Spec is <50 mV balanced. What does this indicate?',
        options: [
            'Normal cell balance',
            'Cell imbalance — weak module',
            'BMS balancing active',
            'Temperature sensor fault'
        ],
        correctIndex: 1,
        explanation: 'Cell voltage delta >50-100 mV indicates significant imbalance. 180 mV = weak cell/module. BMS passive balancing (bleed resistors) occurs at top of charge but cannot correct a weak cell. Module replacement required.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-insulation-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'What is the minimum insulation resistance for a 360 V HV system?',
        options: [
            '1 MΩ',
            '3.6 MΩ',
            '10 MΩ',
            '100 MΩ'
        ],
        correctIndex: 1,
        explanation: 'Minimum insulation resistance = 1 MΩ per 100 V system voltage. For 360 V: 3.6 MΩ minimum. OEMs often require 5-10 MΩ. Test with 500/1000 V DC Megger, HV de-energized and verified.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-phase-current-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'A 3-phase AC motor has phase currents: A=45 A, B=45 A, C=30 A. What does this indicate?',
        options: [
            'Normal operation',
            'Phase C winding fault or inverter leg fault',
            'Position sensor fault',
            'DC link voltage low'
        ],
        correctIndex: 1,
        explanation: 'Balanced 3-phase currents should be equal (within 5-10%). Phase C at 30 A vs 45 A = 33% imbalance. This indicates a fault in Phase C: motor winding, inverter IGBT/leg, or gate driver. Position sensor fault typically causes noise/torque ripple, not steady current imbalance.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-dcfc-comm-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'What is the correct procedure for testing DC fast charge (CCS) communication?',
        options: [
            'Measure DC voltage at inlet',
            'Scope the PLC (Power Line Communication) signal on the CCS inlet',
            'Measure pilot PWM duty cycle',
            'Check proximity detect resistor'
        ],
        correctIndex: 1,
        explanation: 'CCS DC fast charge uses PLC (HomePlug Green PHY) over the DC power lines for BMS-EVSE communication. Diagnosis: scope the PLC signal at the inlet during charge attempt. AC charge uses pilot PWM (J1772). Proximity detect is for cable rating.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-battery-init-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'After replacing an HV battery pack, what is the mandatory initialization sequence?',
        options: [
            'Drive vehicle 50 km',
            'Scan tool: "Battery Replacement" / "Cell Learn" → insulation test → balance charge',
            'Charge to 100%',
            'No initialization needed'
        ],
        correctIndex: 1,
        explanation: 'HV battery replacement initialization: 1) Scan tool "Battery Replacement" / "Cell Voltage Learn" / "BMS Initialization". 2) Insulation test (Megger) — MUST PASS. 3) Balance charge (may require overnight). 4) Verify SOC, SOH, cell delta V, temps, no codes.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'According to Red Seal terminology, what is the definition of "Sensory Inspection"?',
        options: [
            'Using diagnostic scan tool data to identify faults',
            'A systematic diagnostic method using sight, sound, smell, and touch to identify faults before using tools',
            'Measuring component dimensions with precision instruments',
            'Testing electrical circuits with a digital multimeter'
        ],
        correctIndex: 1,
        explanation: 'Sensory Inspection is defined in the Red Seal glossary as a systematic diagnostic method using sight, sound, smell, and touch to identify faults before using tools. Examples include burnt clutch smell, coolant sweet smell, bearing growl, vacuum hiss.',
        topicId: 'mwa-a-terminology',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct first step when diagnosing a no-start condition on a gasoline engine?',
        options: [
            'Perform a compression test',
            'Verify the complaint and check for DTCs',
            'Test fuel pressure',
            'Check spark at all cylinders'
        ],
        correctIndex: 1,
        explanation: 'The diagnostic sequence always begins with verifying the customer complaint and checking for stored DTCs before any component testing. This applies to all systems.',
        topicId: 'mwa-a-diagnostic-process',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'Which WHMIS 2015 pictogram represents a carcinogen or respiratory sensitizer?',
        options: [
            'Flame',
            'Skull and crossbones',
            'Health hazard (silhouette with star)',
            'Corrosion'
        ],
        correctIndex: 2,
        explanation: 'The Health Hazard pictogram (silhouette of a person with a starburst on the chest) represents carcinogenicity, respiratory sensitization, reproductive toxicity, and target organ toxicity.',
        topicId: 'mwa-a-whmis',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A technician is using a digital multimeter to measure voltage drop on the positive battery cable during cranking. The reading is 0.45 V. What does this indicate?',
        options: [
            'Normal voltage drop',
            'Excessive resistance in the positive cable circuit',
            'Faulty starter motor',
            'Weak battery'
        ],
        correctIndex: 1,
        explanation: 'Voltage drop on the positive cable circuit should be less than 0.2 V total. A reading of 0.45 V indicates excessive resistance (corrosion, loose connection, undersized cable) causing voltage loss to the starter.',
        topicId: 'mwa-a-tools',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the minimum recommended wait time after disconnecting the 12V battery before working on SRS components?',
        options: [
            '30 seconds',
            '1 minute',
            '3 minutes',
            '10 minutes'
        ],
        correctIndex: 2,
        explanation: 'The standard safety procedure requires waiting at least 3 minutes (some OEMs specify up to 10 minutes) after battery disconnect to allow SRS backup capacitors to discharge before working on any restraint system components.',
        topicId: 'mwa-a-safety',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'Which tool is most appropriate for measuring cylinder bore taper and out-of-round?',
        options: [
            'Outside micrometer',
            'Dial bore gauge',
            'Dial indicator',
            'Feeler gauge'
        ],
        correctIndex: 1,
        explanation: 'A dial bore gauge is designed specifically for measuring internal diameters like cylinder bores, and can detect taper and out-of-round conditions by measuring at multiple depths and positions.',
        topicId: 'mwa-a-tools',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'Technician A says: "A torque-to-yield (TTY) bolt can be reused if it measures within length specification." Technician B says: "TTY bolts must never be reused regardless of measured length." Who is correct?',
        options: [
            'Technician A only',
            'Technician B only',
            'Both A and B',
            'Neither A nor B'
        ],
        correctIndex: 1,
        explanation: 'TTY bolts are stretched into their plastic deformation range during installation. They must never be reused, even if they measure within length specification, because their yield strength and clamping characteristics are permanently altered.',
        topicId: 'mwa-a-fasteners',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for centering a clock spring during installation?',
        options: [
            'Turn steering wheel full lock left, then back 1.5 turns',
            'Turn steering wheel full lock right, then back 2.5 turns',
            'Align the paint marks on the clock spring housing and rotor',
            'Center the steering wheel visually, then install clock spring'
        ],
        correctIndex: 1,
        explanation: 'The standard clock spring centering procedure: turn steering wheel to full lock (either direction), count total turns, then turn back exactly half the turns plus 0.5 (typically 2.5 turns for 5-turn lock-to-lock). This centers the ribbon cable.',
        topicId: 'mwa-a-srs',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A torque wrench clicks at the specified torque value. The technician continues to apply force and the wrench clicks again. What should the technician do?',
        options: [
            'Consider the fastener properly torqued',
            'Loosen and re-torque the fastener',
            'Continue tightening until it stops clicking',
            'Use a breaker bar to finish tightening'
        ],
        correctIndex: 1,
        explanation: 'A click-type torque wrench signals that the set torque has been reached. Continuing to apply force after the click over-torques the fastener. The fastener must be loosened and re-torqued correctly.',
        topicId: 'mwa-a-tools',
        topicLabel: 'MWA A — Common Occupational Skills',
        order: 0
    },

    // MWA B - 22 questions (17.6%)
    {
        tradeSlug: 'autoservtech',
        question: 'During a wet compression test, cylinder #3 pressure increases from 90 psi (dry) to 145 psi (wet). Other cylinders are 170 psi dry and show minimal increase wet. What does this indicate?',
        options: [
            'Burned exhaust valve',
            'Blown head gasket',
            'Worn piston rings',
            'Worn intake valve guide'
        ],
        correctIndex: 2,
        explanation: 'A significant pressure increase (>15-20%) during a wet compression test indicates worn piston rings. The oil temporarily seals the ring-to-cylinder wall gap. No increase would point to valve or head gasket issues.',
        topicId: 'mwa-b-gasoline-diag',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A 2015 vehicle with VVT has a P0011 code (Camshaft Position Timing Over-Advanced Bank 1). The engine oil is at the correct level and viscosity. What is the most likely cause?',
        options: [
            'Faulty camshaft position sensor',
            'Stuck VVT oil control valve (OCV) or clogged screen',
            'Stretched timing chain',
            'Faulty PCM'
        ],
        correctIndex: 1,
        explanation: 'P0011 with correct oil level/viscosity typically indicates a mechanical VVT system fault: the oil control valve (OCV) is stuck in the advance position or its filter screen is clogged, preventing proper oil flow to the cam phaser.',
        topicId: 'mwa-b-vvt',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a cylinder leak-down test on cylinder #2, air is heard escaping from the throttle body. What does this indicate?',
        options: [
            'Leaking intake valve',
            'Leaking exhaust valve',
            'Worn piston rings',
            'Blown head gasket'
        ],
        correctIndex: 0,
        explanation: 'Air escaping from the throttle body (intake manifold) during a leak-down test indicates a leaking intake valve. Air from the tailpipe = exhaust valve. Air from oil fill = rings. Bubbles in coolant = head gasket.',
        topicId: 'mwa-b-leakdown',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the typical cranking compression specification for a modern gasoline engine?',
        options: [
            '30-40 bar (435-580 psi)',
            '8-14 bar (120-200 psi)',
            '20-25 bar (290-360 psi)',
            '50-60 bar (725-870 psi)'
        ],
        correctIndex: 1,
        explanation: 'Modern gasoline engines typically crank at 8-14 bar (120-200 psi). Diesel engines are much higher at 30-40 bar (435-580 psi) due to compression ignition.',
        topicId: 'mwa-b-compression',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A GDI engine has low fuel rail pressure. The high-pressure pump is driven by a lobe on the camshaft. What should the technician check first?',
        options: [
            'Fuel pump relay',
            'Camshaft lobe wear for the high-pressure pump',
            'Fuel pressure regulator',
            'Low-pressure fuel pump'
        ],
        correctIndex: 1,
        explanation: 'On GDI engines, the high-pressure pump is mechanically driven by a camshaft lobe. Wear on this lobe is a common cause of low rail pressure. The lobe profile can be inspected via the camshaft position sensor waveform.',
        topicId: 'mwa-b-gdi',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'Technician A says: "Head bolts should be lubricated with engine oil before installation." Technician B says: "Head bolts must be installed dry unless the manufacturer specifies lubrication." Who is correct?',
        options: [
            'Technician A only',
            'Technician B only',
            'Both A and B',
            'Neither A nor B'
        ],
        correctIndex: 1,
        explanation: 'TTY head bolts must be installed dry (no oil on threads) unless the OEM specifically requires lubrication. Oil on threads reduces friction, causing the bolt to stretch further at the same torque reading, leading to over-stretching and potential failure.',
        topicId: 'mwa-b-head-bolts',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A diesel engine has a cranking compression of 28 bar (406 psi) on all cylinders. Specification is 30-40 bar. What is the most likely cause?',
        options: [
            'Worn piston rings on all cylinders',
            'Incorrect valve timing (camshaft timing off)',
            'Faulty compression gauge',
            'Low battery cranking speed'
        ],
        correctIndex: 3,
        explanation: 'Low compression on ALL cylinders of a diesel engine is most commonly caused by insufficient cranking speed (low battery, worn starter). Diesel compression is highly speed-dependent. Worn rings would typically affect cylinders unevenly.',
        topicId: 'mwa-b-diesel-compression',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a diesel injector balance test (cylinder cutout), cylinder #4 shows a negative balance value (-5 mm³/stroke) while others show positive values (+2 mm³/stroke). What does this indicate?',
        options: [
            'Cylinder #4 injector is leaking (over-fueling)',
            'Cylinder #4 injector is clogged (under-fueling)',
            'Cylinder #4 has low compression',
            'Cylinder #4 glow plug is inoperative'
        ],
        correctIndex: 0,
        explanation: 'Negative balance value means the PCM had to REDUCE fuel to that cylinder to maintain equal RPM contribution — the injector is leaking (over-fueling). Positive values indicate the PCM added fuel (under-fueling/clogged).',
        topicId: 'mwa-b-diesel-injector',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for priming a high-pressure common rail (HPCR) fuel system after filter replacement?',
        options: [
            'Crank the engine until fuel pressure builds',
            'Use the hand primer pump or scan tool "prime fuel system" function',
            'Loosen injector lines and crank until fuel flows',
            'Apply shop air to the fuel tank'
        ],
        correctIndex: 1,
        explanation: 'HPCR systems must be primed using the hand primer pump (if equipped) or scan tool bi-directional "prime fuel system" command. Never crank the engine to prime — this damages the high-pressure pump due to lack of lubrication.',
        topicId: 'mwa-b-hpcr-prime',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A technician is replacing a timing belt on an interference engine. The timing marks on the camshaft and crankshaft are aligned. What is the critical next step before removing the old belt?',
        options: [
            'Loosen the tensioner',
            'Mark the belt direction of rotation',
            'Verify the engine is at TDC #1 compression stroke',
            'Remove the crankshaft pulley'
        ],
        correctIndex: 2,
        explanation: 'Before removing a timing belt, you MUST verify the engine is at TDC on the compression stroke for cylinder #1 (both valves closed). Marking belt direction is good practice but not critical. Aligned marks alone don\'t guarantee correct stroke.',
        topicId: 'mwa-b-timing-belt',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An engine has a coolant leak from the water pump weep hole. The coolant is clean and the correct concentration. What is the most likely cause?',
        options: [
            'Failed water pump shaft seal',
            'Blown head gasket',
            'Cracked cylinder head',
            'Loose hose clamp'
        ],
        correctIndex: 0,
        explanation: 'The weep hole is designed to leak coolant when the water pump shaft seal fails, preventing coolant from entering the bearing cavity. This is a normal failure indication — the pump must be replaced.',
        topicId: 'mwa-b-water-pump',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct oil pressure specification for a typical engine at 2000 RPM, hot?',
        options: [
            '0.5-1.0 bar (7-15 psi)',
            '1.5-2.5 bar (20-35 psi)',
            '4-6 bar (60-85 psi)',
            '8-10 bar (115-145 psi)'
        ],
        correctIndex: 2,
        explanation: 'Typical hot oil pressure at 2000 RPM is 4-6 bar (60-85 psi). At idle, it\'s typically 1.5-2.5 bar (20-35 psi). Low pressure at speed indicates bearing wear, pump wear, or relief valve issues.',
        topicId: 'mwa-b-oil-pressure',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle has an overheat condition. The upper radiator hose is hot, the lower hose is cool. The cooling fan is operating. What is the most likely cause?',
        options: [
            'Stuck closed thermostat',
            'Failed water pump impeller',
            'Restricted radiator',
            'Low coolant level'
        ],
        correctIndex: 0,
        explanation: 'Hot upper hose + cool lower hose = coolant is not circulating through the radiator. With the fan working, this indicates the thermostat is stuck closed, blocking flow to the radiator.',
        topicId: 'mwa-b-thermostat',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a cooling system pressure test, the pressure rises rapidly when the engine is snap-accelerated. What does this indicate?',
        options: [
            'External coolant leak',
            'Combustion gas leaking into cooling system',
            'Faulty radiator cap',
            'Water pump cavitation'
        ],
        correctIndex: 1,
        explanation: 'Rapid pressure rise on snap acceleration indicates combustion pressure entering the cooling system — a classic sign of a blown head gasket or cracked head/block. A block tester (chemical test) would confirm.',
        topicId: 'mwa-b-head-gasket',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct break-in procedure for a newly installed clutch?',
        options: [
            '500-800 km of city driving, no high torque, no lugging, no high RPM',
            'Immediate full-throttle acceleration to seat the friction material',
            '100 km highway driving at constant speed',
            'No break-in required for modern clutch materials'
        ],
        correctIndex: 0,
        explanation: 'New clutch discs require 500-800 km of city driving (stop-and-go, varying loads) for the friction material to properly mate with the flywheel and pressure plate. Avoid towing, aggressive launches, and high-gear low-RPM acceleration during break-in.',
        topicId: 'mwa-b-clutch-breakin',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A technician is installing a new cylinder head gasket. The gasket has "TOP" and "FRONT" markings. What is the correct orientation?',
        options: [
            '"TOP" facing up, "FRONT" facing the front of the engine',
            '"TOP" facing down, "FRONT" facing the rear',
            'Orientation does not matter for modern MLS gaskets',
            '"TOP" facing the exhaust manifold'
        ],
        correctIndex: 0,
        explanation: 'Multi-layer steel (MLS) head gaskets have specific orientation markings. "TOP" must face up (toward cylinder head) and "FRONT" must face the front of the engine. Incorrect installation can block oil/coolant passages or compromise sealing.',
        topicId: 'mwa-b-head-gasket-install',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the typical valve guide clearance specification for an intake valve?',
        options: [
            '0.01-0.03 mm (0.0004-0.0012 in)',
            '0.03-0.07 mm (0.0012-0.0028 in)',
            '0.10-0.15 mm (0.004-0.006 in)',
            '0.20-0.30 mm (0.008-0.012 in)'
        ],
        correctIndex: 1,
        explanation: 'Typical intake valve stem-to-guide clearance is 0.03-0.07 mm (0.0012-0.0028 in). Exhaust valves typically run slightly more (0.05-0.09 mm) due to higher temperatures. Excessive clearance causes oil consumption and valve train noise.',
        topicId: 'mwa-b-valve-guide',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A diesel engine has excessive black smoke under load. Boost pressure is normal. What is the most likely cause?',
        options: [
            'Restricted air filter',
            'Leaking injector (over-fueling)',
            'Turbocharger wastegate stuck closed',
            'EGR valve stuck open'
        ],
        correctIndex: 1,
        explanation: 'Black smoke = over-fueling (excess fuel for available air). With normal boost, the air supply is adequate. A leaking injector dripping fuel or an injector with worn nozzle over-fueling would cause black smoke. EGR stuck open typically causes low power and high EGT, not black smoke.',
        topicId: 'mwa-b-diesel-smoke',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct torque procedure for torque-to-yield (TTY) connecting rod bolts?',
        options: [
            'Torque to spec in one step',
            'Torque to spec, then additional 90 degrees',
            'Torque to 50%, then 100%, then additional angle (e.g., +90°)',
            'Torque to spec, loosen, re-torque to spec'
        ],
        correctIndex: 2,
        explanation: 'TTY fasteners typically use a multi-stage procedure: e.g., torque to 20 Nm, then 40 Nm, then +90 degrees. The angle stage stretches the bolt into its plastic range for consistent clamp load. Single-step or torque-only procedures are incorrect for TTY bolts.',
        topicId: 'mwa-b-rod-bolts',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An engine has a ticking noise that increases with RPM. The noise is loudest at the valve cover. Valve lash is within spec. What is the most likely cause?',
        options: [
            'Worn camshaft lobe',
            'Collapsed hydraulic lifter',
            'Loose rocker arm',
            'Exhaust leak at manifold'
        ],
        correctIndex: 1,
        explanation: 'A collapsed hydraulic lifter (HLA) cannot maintain lash, causing a ticking noise at the valve cover. It may pump up at higher RPM but often remains noisy. Worn cam lobe typically causes misfire and lobe-specific noise pattern.',
        topicId: 'mwa-b-lifter',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for measuring piston ring end gap?',
        options: [
            'Install ring in cylinder, push down with piston, measure with feeler gauge',
            'Measure ring in free state with micrometer',
            'Install ring in cylinder at bottom of bore, measure with feeler gauge',
            'Calculate from piston diameter and cylinder bore'
        ],
        correctIndex: 0,
        explanation: 'Ring end gap is measured by installing the ring in the cylinder (squared using a piston), then measuring the gap with a feeler gauge. The ring must be at the correct depth (typically top of ring travel). Free-state measurement is not accurate.',
        topicId: 'mwa-b-ring-gap',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle with a timing chain has a P0016 code (Crankshaft/Camshaft Correlation Bank 1). The chain tensioner is at maximum extension. What is the most likely cause?',
        options: [
            'Faulty CKP sensor',
            'Faulty CMP sensor',
            'Timing chain stretch',
            'VVT solenoid stuck'
        ],
        correctIndex: 2,
        explanation: 'P0016 with the tensioner at max extension indicates the timing chain has stretched beyond the tensioner\'s take-up capacity. The CKP/CMP correlation is lost because the camshaft is retarded relative to the crankshaft. Chain, guides, tensioner, and sprockets should be replaced as a set.',
        topicId: 'mwa-b-chain-stretch',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct coolant mixture ratio for most modern engines?',
        options: [
            '100% coolant',
            '70% coolant / 30% water',
            '50% coolant / 50% water',
            '30% coolant / 70% water'
        ],
        correctIndex: 2,
        explanation: 'A 50/50 mixture of coolant and distilled water provides optimal freeze protection (-37°C/-34°F), boil-over protection, and corrosion inhibition. Higher coolant concentrations reduce heat transfer efficiency.',
        topicId: 'mwa-b-coolant-mix',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a cylinder power balance test, cylinder #5 shows no RPM drop when disabled. Compression is normal. What is the most likely cause?',
        options: [
            'Faulty injector (not firing)',
            'Faulty ignition coil',
            'Intake valve not opening',
            'Exhaust valve not opening'
        ],
        correctIndex: 0,
        explanation: 'No RPM drop during cylinder cutout with normal compression means the cylinder is not producing power due to lack of fuel or spark. Since compression is normal (valves sealing), the most likely cause is a faulty injector (GDI/port) or ignition coil. Scan tool injector balance or coil swap test would isolate.',
        topicId: 'mwa-b-power-balance',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for installing a new timing chain tensioner on an engine with hydraulic tensioners?',
        options: [
            'Compress tensioner, install, remove pin, torque bolts',
            'Install tensioner extended, torque bolts, prime with oil',
            'Install tensioner compressed, torque bolts, engine start primes it',
            'Pre-fill tensioner with oil, install, torque bolts'
        ],
        correctIndex: 0,
        explanation: 'Hydraulic timing chain tensioners are installed in the compressed (retracted) position with a locking pin. After bolting in place, the pin is removed, allowing oil pressure to extend the tensioner against the chain guide. Pre-filling is not typically required.',
        topicId: 'mwa-b-tensioner-install',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An engine has low oil pressure at idle (0.5 bar / 7 psi) but normal pressure at 2000 RPM (4.5 bar / 65 psi). What is the most likely cause?',
        options: [
            'Worn main bearings',
            'Worn rod bearings',
            'Oil pump pressure relief valve stuck open',
            'Oil pickup screen restricted'
        ],
        correctIndex: 3,
        explanation: 'Low idle pressure with normal higher-RPM pressure typically indicates a restricted oil pickup screen. At low RPM, the pump cannot pull enough oil through the restriction. At higher RPM, the pump generates enough vacuum to overcome the restriction. Worn bearings would show low pressure at all speeds.',
        topicId: 'mwa-b-oil-pressure-idle',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for torquing cylinder head bolts on an engine with a multi-layer steel (MLS) gasket?',
        options: [
            'Torque all bolts to final spec in one pass',
            'Torque in sequence: 40 Nm → 60 Nm → +90° → +90°',
            'Torque in sequence: 20 Nm → 40 Nm → 60 Nm',
            'Torque to spec, wait 10 minutes, re-torque'
        ],
        correctIndex: 1,
        explanation: 'TTY head bolts with MLS gaskets typically use a multi-stage torque + angle procedure (e.g., 40 Nm → 60 Nm → +90° → +90° in the specified sequence). Single-pass or re-torque procedures are incorrect for TTY bolts.',
        topicId: 'mwa-b-head-bolt-torque',
        topicLabel: 'MWA B — Engine Systems',
        order: 0
    },

    // MWA C - 12 questions (9.6%)
    {
        tradeSlug: 'autoservtech',
        question: 'What is the recessive (idle) voltage on CAN High and CAN Low lines?',
        options: [
            'CAN_H 3.5 V, CAN_L 1.5 V',
            'CAN_H 2.5 V, CAN_L 2.5 V',
            'CAN_H 5 V, CAN_L 0 V',
            'CAN_H 12 V, CAN_L 0 V'
        ],
        correctIndex: 1,
        explanation: 'In the recessive (idle) state, both CAN_H and CAN_L float at approximately 2.5 V (differential voltage ~0 V). In the dominant state, CAN_H rises to ~3.5 V and CAN_L falls to ~1.5 V (differential ~2 V).',
        topicId: 'mwa-c-can-voltage',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle has a U0100 code (Lost Communication with ECM/PCM). The scan tool communicates with the ABS module and instrument cluster but not the PCM. What is the most likely cause?',
        options: [
            'CAN bus short to ground',
            'PCM power or ground failure',
            'Gateway module failure',
            'DLC pin 6/14 wiring fault'
        ],
        correctIndex: 1,
        explanation: 'U0100 means the requesting module (gateway/scan tool) cannot communicate with the PCM. Since other modules communicate, the bus is functional. The fault is likely the PCM itself (power, ground, internal) or its direct CAN connections.',
        topicId: 'mwa-c-u0100',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct termination resistance measurement for a healthy high-speed CAN bus (measured at DLC with key off, battery disconnected)?',
        options: [
            '120 Ω',
            '60 Ω',
            '0 Ω',
            'Infinite (open)'
        ],
        correctIndex: 1,
        explanation: 'A healthy HS-CAN bus has two 120 Ω terminating resistors (one at each end). Measured in parallel at the DLC with the bus powered down, this reads 60 Ω. 120 Ω = one terminator missing. 0 Ω = short. Infinite = open circuit.',
        topicId: 'mwa-c-termination',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A LIN bus slave module (door module) is not responding to the master (BCM). The LIN wire at the slave connector measures 12 V constant. What does this indicate?',
        options: [
            'Normal LIN recessive state',
            'LIN wire short to battery',
            'LIN wire open',
            'Master not polling'
        ],
        correctIndex: 1,
        explanation: 'LIN recessive state is ~12 V (pulled up by master). However, if it measures a constant 12 V with no transitions (no master header + slave response), the wire is likely shorted to battery voltage, preventing communication. Scope would show flat 12 V line.',
        topicId: 'mwa-c-lin-diag',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the primary purpose of the J2534 pass-thru standard?',
        options: [
            'To standardize OBD-II connector pinout',
            'To allow aftermarket tools to reprogram ECUs using OEM software',
            'To define CAN bus message structure',
            'To standardize diagnostic trouble codes'
        ],
        correctIndex: 1,
        explanation: 'J2534 (SAE J2534) is the "Pass-Thru" standard that enables aftermarket Vehicle Communication Interfaces (VCIs) to reprogram OEM ECUs using the manufacturer\'s software subscription, without needing the OEM scan tool hardware.',
        topicId: 'mwa-c-j2534',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During module programming, the vehicle battery voltage drops to 11.5 V. What is the most likely result?',
        options: [
            'Programming completes normally',
            'Module is bricked (corrupted software)',
            'Programming takes longer',
            'Module reverts to previous software'
        ],
        correctIndex: 1,
        explanation: 'Module programming requires stable voltage (typically 13.5-14.5 V from a power supply). A voltage drop during flashing corrupts the write process, "bricking" the module (rendering it inoperable). A 25+ amp maintainer in power supply mode is mandatory.',
        topicId: 'mwa-c-programming-voltage',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A replacement PCM requires immobilizer key programming. The customer has only one working key. What is required?',
        options: [
            'The one key is sufficient for programming',
            'Two working keys are required',
            'Dealer-only SDM/NASTF access required',
            'Immobilizer cannot be programmed without all keys'
        ],
        correctIndex: 2,
        explanation: 'Most OEMs require two working keys to program additional keys or a new PCM. With only one key, dealer-level access (SDM - Secure Data Release / NASTF) is required to program the immobilizer system. Some OEMs have a 10-30 minute security delay with one key.',
        topicId: 'mwa-c-immobilizer',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What does a Security Gateway (SGW) do?',
        options: [
            'Blocks unauthorized diagnostic and programming access to vehicle modules',
            'Encrypts CAN bus messages',
            'Manages HV battery contactors',
            'Controls keyless entry authentication'
        ],
        correctIndex: 0,
        explanation: 'A Security Gateway (FCA, VW, Mercedes, etc.) acts as a firewall that blocks unauthorized diagnostic commands (bi-directional controls, programming, DTC clearing) unless the scan tool presents valid authentication (OEM certificate or authorized aftermarket token).',
        topicId: 'mwa-c-sgw',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'After replacing a BCM, the power windows do not auto-up/down and the mirrors do not fold. What is required?',
        options: [
            'Replace window motors',
            'Initialize each system (window relearn, mirror fold cycle)',
            'Reprogram the BCM',
            'Replace the window switches'
        ],
        correctIndex: 1,
        explanation: 'After BCM replacement or battery disconnect, power windows require initialization (drive to full down, hold 2-5 sec, drive to full up, hold 2-5 sec). Mirrors require fold/unfold cycles. These are initialization procedures, not programming or component faults.',
        topicId: 'mwa-c-initialization',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A technician is diagnosing a "no bus" condition. The HS-CAN voltage at DLC pins 6/14 measures CAN_H 0 V, CAN_L 2.5 V. What is the fault?',
        options: [
            'CAN_H short to ground',
            'CAN_L short to battery',
            'CAN_H open',
            'CAN_L open'
        ],
        correctIndex: 0,
        explanation: 'CAN_H at 0 V (ground) with CAN_L at 2.5 V indicates CAN_H is shorted to ground. This pulls the differential voltage to 0, preventing communication. The short could be in the wiring harness or a module\'s internal transceiver.',
        topicId: 'mwa-c-bus-voltage',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is DoIP (Diagnostics over IP)?',
        options: [
            'Diagnostic communication over Ethernet/IP (UDP/TCP) replacing KWP2000/ISO-TP over CAN',
            'A new CAN protocol for electric vehicles',
            'Diagnostic over Internet Protocol for remote access only',
            'A wireless diagnostic standard'
        ],
        correctIndex: 0,
        explanation: 'DoIP (ISO 13400) enables diagnostic communication over automotive Ethernet (UDP/TCP) instead of CAN. It\'s used for high-speed ECU flashing, OTA updates, and remote diagnostics. Requires DoIP-capable VCI and OEM software.',
        topicId: 'mwa-c-doip',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a module isolation procedure for a shorted CAN bus, in what order should modules be disconnected?',
        options: [
            'Safety-critical first (ABS, PCM, airbag)',
            'Aftermarket accessories first, then non-safety modules, safety-critical last',
            'Alphabetical by module name',
            'Closest to DLC first'
        ],
        correctIndex: 1,
        explanation: 'Module isolation for a shorted bus: disconnect aftermarket accessories first, then non-safety modules (radio, door modules), then safety-critical modules last (ABS, PCM, airbag). Never unplug airbag modules with key on. Document each disconnect.',
        topicId: 'mwa-c-isolation',
        topicLabel: 'MWA C — Vehicle Module Communications',
        order: 0
    },

    // MWA D - 17 questions (13.6%)
    {
        tradeSlug: 'autoservtech',
        question: 'During a manual transmission dry park test, the technician observes play in the outer tie rod end. What is the typical maximum allowable play?',
        options: [
            '0.5 mm (0.020 in)',
            '1.5 mm (0.060 in)',
            '3.0 mm (0.120 in)',
            '5.0 mm (0.200 in)'
        ],
        correctIndex: 0,
        explanation: 'Typical maximum allowable play at a tie rod end is 0.5 mm (0.020 in). Any visible movement during a dry park test (assistant rocking steering wheel 1/8 turn) indicates wear requiring replacement.',
        topicId: 'mwa-d-dry-park',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An automatic transmission has a flare (RPM spike) on the 2-3 shift. Line pressure is normal. What is the most likely cause?',
        options: [
            'Low line pressure',
            '3rd gear clutch seals leaking',
            'Shift solenoid stuck open',
            'TORQUE converter stall speed high'
        ],
        correctIndex: 1,
        explanation: 'A flare on a specific shift (2-3) with normal line pressure indicates the on-coming clutch (3rd gear) is not applying quickly enough — typically due to leaking piston seals or a worn clutch pack. The pressure test would show normal line pressure but low pressure at the 3rd clutch port.',
        topicId: 'mwa-d-at-flare',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct stall test procedure for an automatic transmission?',
        options: [
            'WOT in Park, measure RPM',
            'WOT in Drive and Reverse, brakes applied, wheels chocked, max 5 seconds',
            'Idle in Drive, measure torque converter slip',
            'WOT in Neutral, measure engine RPM'
        ],
        correctIndex: 1,
        explanation: 'Stall test: WOT in Drive and Reverse, brakes firmly applied, wheels chocked. Measure max RPM (stall speed). Max 5 seconds per test. Cool 2 minutes between tests. ATF temp 80-100°C. High stall in Drive = forward clutch slip. High stall in Reverse = reverse clutch slip.',
        topicId: 'mwa-d-stall-test',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A CVT exhibits a "judder" (shudder) during light acceleration. Fluid level and condition are good. What is the most likely cause?',
        options: [
            'Torque converter clutch slip',
            'Belt/pulley wear or fluid degradation',
            'Stepper motor failure',
            'Low line pressure'
        ],
        correctIndex: 1,
        explanation: 'CVT judder is typically caused by belt/chain wear on the pulleys or degraded CVT fluid that has lost its friction characteristics. The variator (pulley) ratio control relies on precise friction between belt/chain and pulleys.',
        topicId: 'mwa-d-cvt-judder',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A DCT (dual-clutch transmission) has a clutch adaptation value at the maximum limit. What does this indicate?',
        options: [
            'Clutch is new',
            'Clutch is worn out',
            'Mechatronic unit failed',
            'Transmission fluid low'
        ],
        correctIndex: 1,
        explanation: 'Clutch adaptation values track the "kiss point" (touch point) and fill time. As the clutch wears, the adaptation values increase. At maximum adaptation, the clutch is worn out and must be replaced. Adaptation must be reset after clutch replacement.',
        topicId: 'mwa-d-dct-adaptation',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for checking transfer case chain stretch?',
        options: [
            'Measure chain slack with a ruler',
            'Use a chain stretch gauge or measure pin-to-pin distance over a specified number of links',
            'Check for noise in 4WD mode',
            'Measure driveshaft play'
        ],
        correctIndex: 1,
        explanation: 'Transfer case chain stretch is measured using a chain stretch gauge or by measuring pin-to-pin distance over a specified number of links (per OEM). Visual inspection for wear on guide/sprockets is also done. Typical limit: 1% stretch.',
        topicId: 'mwa-d-tcase-chain',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a driveshaft vibration diagnosis, the vibration occurs at 2x driveshaft RPM. What does this indicate?',
        options: [
            'Driveshaft imbalance',
            'U-joint angle/phasing issue',
            'CV joint failure',
            'Wheel balance issue'
        ],
        correctIndex: 1,
        explanation: '1st order vibration (1x driveshaft RPM) = imbalance. 2nd order vibration (2x driveshaft RPM) = U-joint working angle issue or phasing problem (yokes not in phase). 3rd order = CV joint (rare).',
        topicId: 'mwa-d-driveshaft-vibe',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct axle nut torque procedure for a Gen 3 hub unit (integrated bearing, ABS sensor)?',
        options: [
            'Torque to spec (e.g., 250 Nm + 90°), stake nut',
            'Torque to 100 Nm, no staking',
            'Tighten until snug, back off 1/4 turn',
            'Torque to 150 Nm, use cotter pin'
        ],
        correctIndex: 0,
        explanation: 'Gen 3 hub units use a torque-to-yield (TTY) axle nut procedure: torque to spec (e.g., 250 Nm) + additional angle (e.g., 90°), then stake the nut. This sets the critical bearing preload. Under/over-torque causes premature failure.',
        topicId: 'mwa-d-axle-nut',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle has a growling noise that increases with vehicle speed and changes pitch on turns. What is the most likely cause?',
        options: [
            'Tire noise',
            'Wheel bearing failure',
            'Differential bearing failure',
            'Transmission bearing failure'
        ],
        correctIndex: 1,
        explanation: 'A growl proportional to speed that changes on turns (loading/unloading the bearing) is classic wheel bearing failure. Tire noise typically doesn\'t change on turns. Differential noise is usually load-dependent (accel/decel) not speed-proportional with turn change.',
        topicId: 'mwa-d-wheel-bearing',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct backlash specification for a typical differential ring and pinion?',
        options: [
            '0.01-0.03 mm (0.0004-0.0012 in)',
            '0.13-0.20 mm (0.005-0.008 in)',
            '0.50-0.75 mm (0.020-0.030 in)',
            '1.0-1.5 mm (0.040-0.060 in)'
        ],
        correctIndex: 1,
        explanation: 'Typical ring gear backlash is 0.13-0.20 mm (0.005-0.008 in). Measured with a dial indicator on the ring gear teeth. Too tight = noise, overheating. Too loose = clunk, gear damage.',
        topicId: 'mwa-d-backlash',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'When replacing an automatic transmission, what is the MANDATORY step before installation?',
        options: [
            'Fill torque converter with ATF',
            'Flush the transmission cooler and lines',
            'Replace the torque converter',
            'All of the above'
        ],
        correctIndex: 1,
        explanation: 'Flushing the transmission cooler and lines is MANDATORY when replacing an automatic transmission. Debris from the old transmission will destroy the new unit. Torque converter should be replaced (not just filled). Cooler flush is the critical step often missed.',
        topicId: 'mwa-d-at-cooler-flush',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for installing a torque converter onto an automatic transmission?',
        options: [
            'Bolt to flexplate first, then slide onto input shaft',
            'Slide onto input shaft until two distinct "clicks" are felt (splines, then pump ears)',
            'Install dry, no lubrication on splines',
            'Use a hammer to seat it fully'
        ],
        correctIndex: 1,
        explanation: 'The torque converter must be installed onto the transmission input shaft BEFORE the transmission is mounted to the engine. It requires two distinct "clicks": first the turbine splines engage, then the stator/pump drive ears engage. Verify gap to flexplate before bolting.',
        topicId: 'mwa-d-converter-install',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A manual transmission is hard to shift into 2nd gear only, especially when cold. The clutch hydraulic system is functioning correctly. What is the most likely cause?',
        options: [
            'Worn 2nd gear synchronizer',
            'Bent shift fork for 1st/2nd',
            'Low transmission fluid',
            'Worn clutch disc'
        ],
        correctIndex: 0,
        explanation: 'Hard shifting into a specific gear (especially cold) with a good clutch release indicates a worn synchronizer for that gear. The synchronizer cone/blocker ring cannot equalize speeds quickly. Cold fluid exacerbates the condition.',
        topicId: 'mwa-d-mt-synchro',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct differential pinion bearing preload measurement for new bearings?',
        options: [
            '0.1-0.3 Nm (1-3 in-lb)',
            '0.5-1.5 Nm (4-13 in-lb)',
            '2.0-3.0 Nm (18-26 in-lb)',
            '5.0-7.0 Nm (44-62 in-lb)'
        ],
        correctIndex: 1,
        explanation: 'New pinion bearing preload (rotating torque) is typically 0.5-1.5 Nm (4-13 in-lb). Used bearings: 0.3-0.8 Nm. Measured with an inch-pound torque wrench on the pinion nut (without seal drag). Critical for gear pattern and bearing life.',
        topicId: 'mwa-d-pinion-preload',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A CV joint makes a clicking noise on sharp turns during acceleration. Which joint is most likely failed?',
        options: [
            'Inner CV joint (tripod)',
            'Outer CV joint (Rzeppa)',
            'Both inner and outer',
            'Center support bearing'
        ],
        correctIndex: 1,
        explanation: 'Clicking on sharp turns during acceleration is classic OUTER CV joint (Rzeppa/fixed joint) failure. The outer joint operates at high angles during turns. Inner joints (plunging/tripod) typically cause shudder on acceleration (plunge motion).',
        topicId: 'mwa-d-cv-joint',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for measuring driveshaft runout?',
        options: [
            'Measure at the slip yoke with a dial indicator',
            'Measure at the center of the driveshaft tube with a dial indicator',
            'Measure at the U-joint caps',
            'Visual inspection only'
        ],
        correctIndex: 1,
        explanation: 'Driveshaft runout is measured at the center of the tube (or specified location) using a dial indicator while rotating the shaft. Spec is typically <0.5-0.8 mm (0.020-0.030 in). Excessive runout causes vibration.',
        topicId: 'mwa-d-driveshaft-runout',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An AWD vehicle binds and shudders during tight turns on dry pavement. What is the most likely cause?',
        options: [
            'Mismatched tire sizes',
            'Failed AWD clutch pack',
            'Transfer case chain stretch',
            'Front differential failure'
        ],
        correctIndex: 0,
        explanation: 'AWD bind on dry pavement during tight turns is most commonly caused by mismatched tire sizes (different rolling circumferences) or significantly different tread depths. The AWD system detects speed differences and locks up. Tire circumference must be within spec (typically <2-3 mm difference).',
        topicId: 'mwa-d-awd-bind',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct break-in procedure for a newly overhauled differential?',
        options: [
            'Immediate full-load towing',
            '500 km no towing, no aggressive acceleration, change fluid after break-in',
            'No break-in required for modern gear oils',
            '100 km highway only'
        ],
        correctIndex: 1,
        explanation: 'New or overhauled differentials require break-in: 500 km of varied driving (no towing, no aggressive acceleration, no sustained high speed). The gear mesh pattern needs time to stabilize. Fluid should be changed after break-in to remove break-in debris.',
        topicId: 'mwa-d-diff-breakin',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a clutch replacement, the technician notices the flywheel has heat checking (small radial cracks) but is within minimum thickness spec. What should be done?',
        options: [
            'Resurface the flywheel',
            'Replace the flywheel',
            'Install as-is, cracks are normal',
            'Use a dual-mass flywheel conversion kit'
        ],
        correctIndex: 1,
        explanation: 'Heat checking (thermal cracks) on a flywheel indicates thermal stress damage. Even if within thickness spec, the structural integrity is compromised. The flywheel must be replaced. Resurfacing does not remove the cracks. Dual-mass flywheels cannot be resurfaced.',
        topicId: 'mwa-d-flywheel-cracks',
        topicLabel: 'MWA D — Driveline Systems',
        order: 0
    },

    // MWA E - 23 questions (18.4%)
    {
        tradeSlug: 'autoservtech',
        question: 'A battery has an open-circuit voltage of 12.3 V after sitting for 1 hour. What is the approximate state of charge?',
        options: [
            '100%',
            '75%',
            '50%',
            '25%'
        ],
        correctIndex: 1,
        explanation: 'OCV vs SOC: 12.6 V = 100%, 12.4 V = 75%, 12.2 V = 50%, 12.0 V = 25%. 12.3 V is between 75% and 50%, closest to 75%.',
        topicId: 'mwa-e-battery-ocv',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a voltage drop test on the starter positive cable during cranking, the reading is 0.6 V. What does this indicate?',
        options: [
            'Normal voltage drop',
            'Excessive resistance in the positive cable circuit',
            'Faulty starter motor',
            'Weak battery'
        ],
        correctIndex: 1,
        explanation: 'Voltage drop on the starter positive cable should be <0.2 V. A reading of 0.6 V indicates excessive resistance (corrosion, loose connection, undersized cable) causing voltage loss to the starter.',
        topicId: 'mwa-e-voltage-drop',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle has a parasitic draw of 85 mA after 30 minutes sleep. What is the correct procedure to isolate the circuit?',
        options: [
            'Pull fuses one at a time while monitoring current',
            'Disconnect the battery negative cable',
            'Remove the alternator',
            'Unplug the PCM'
        ],
        correctIndex: 0,
        explanation: 'Parasitic draw isolation: after the module sleep period (20-40 min), pull fuses one at a time while monitoring current with a DMM in series (or inductive clamp). When current drops to normal (<50 mA), that circuit is the source. Never break battery connection during test — modules wake up.',
        topicId: 'mwa-e-parasitic-draw',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the function of a Battery Current Sensor (BCS / BMS) in a smart charging system?',
        options: [
            'Measures battery temperature',
            'Measures current into/out of battery for PCM charging control',
            'Regulates alternator output voltage',
            'Monitors battery voltage only'
        ],
        correctIndex: 1,
        explanation: 'The Battery Current Sensor (BCS/BMS) measures current flow into and out of the battery. The PCM uses this data (along with voltage, temperature) to calculate State of Charge (SOC) and control the alternator duty cycle for smart charging.',
        topicId: 'mwa-e-bcs',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An LED headlamp module has no low beam function but high beam and DRL work. Scan tool bi-directional control of low beam fails. What is the most likely cause?',
        options: [
            'BCM failure',
            'Wiring harness open',
            'Internal driver failure in headlamp module',
            'Fuse blown'
        ],
        correctIndex: 2,
        explanation: 'LED headlamp modules have internal drivers for each function (low, high, DRL). If only one function fails and bi-directional control fails, the internal driver for that function has likely failed. The module must be replaced.',
        topicId: 'mwa-e-led-headlamp',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct initialization procedure for power windows after battery disconnect?',
        options: [
            'Drive window down, hold 2-5 sec, drive up, hold 2-5 sec',
            'Hold auto-up button for 10 seconds',
            'Disconnect and reconnect window motor',
            'Scan tool "window calibration" only'
        ],
        correctIndex: 0,
        explanation: 'Standard power window initialization: 1) Ignition ON. 2) Drive window fully DOWN, hold switch down 2-5 seconds after bottom. 3) Drive window fully UP, hold switch up 2-5 seconds after top (auto-up engages). 4) Test auto-up/down and anti-pinch.',
        topicId: 'mwa-e-window-init',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle\'s HVAC system has normal refrigerant pressures but no cooling. The blend door actuator commands full cold but actual position reads hot. What is the most likely cause?',
        options: [
            'Low refrigerant charge',
            'Blend door actuator failed or door broken',
            'Compressor failed',
            'Evaporator temperature sensor failed'
        ],
        correctIndex: 1,
        explanation: 'Normal pressures = refrigerant side OK. Blend door commanded cold but actual position hot = the blend door actuator is not moving the door (failed motor, stripped gears, broken door, or binding). Scan tool actuator calibration may resolve if not mechanical failure.',
        topicId: 'mwa-e-blend-door',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'R-134a system at 30°C (86°F) ambient. Low side reads 35 psi, high side reads 220 psi. What is the diagnosis?',
        options: [
            'Normal operation',
            'Low charge',
            'Overcharge',
            'Restriction'
        ],
        correctIndex: 0,
        explanation: 'At 30°C ambient, R-134a normal pressures: low side 25-45 psi, high side 150-250 psi. 35/220 psi falls within normal range. Low/low = low charge. High/high = overcharge or condenser issue. High/low = restriction.',
        topicId: 'mwa-e-pressure-diag',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct refrigerant oil for R-1234yf systems and electric compressors?',
        options: [
            'PAG 46',
            'PAG 100',
            'POE (Polyolester)',
            'Mineral oil'
        ],
        correctIndex: 2,
        explanation: 'R-1234yf systems and electric (HV) compressors require POE (Polyolester) oil. PAG oils are for R-134a systems with belt-driven compressors. NEVER mix PAG and POE oils.',
        topicId: 'mwa-e-oil-type',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During HVAC actuator calibration via scan tool, the blend door cycles but makes a clicking noise and does not reach full travel. What is the most likely cause?',
        options: [
            'Actuator motor failed',
            'Actuator gear stripped',
            'Door binding in housing',
            'Scan tool software issue'
        ],
        correctIndex: 1,
        explanation: 'Clicking during calibration with incomplete travel typically indicates stripped gears inside the actuator (common on plastic gear actuators). The motor runs but the gear cannot drive the door. The actuator must be replaced.',
        topicId: 'mwa-e-actuator-cal',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for leak testing an A/C system after repair?',
        options: [
            'Charge with refrigerant, run 10 min, use electronic leak detector',
            'Pressurize with compressed air to 150 psi, soap test',
            'Vacuum to 500 microns, decay test, then charge and leak test',
            'Visual inspection only'
        ],
        correctIndex: 2,
        explanation: 'Proper leak test sequence: 1) Vacuum to 500 microns (30 min min). 2) Decay test (hold 5 min, rise <50 microns). 3) Charge by weight. 4) Run system 10-15 min. 5) Electronic leak detector (SAE J2791/J2913) at all connections. 6) UV dye as backup.',
        topicId: 'mwa-e-leak-test',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A compressor has failed catastrophically (metal debris in system). What components MUST be replaced?',
        options: [
            'Compressor only',
            'Compressor, condenser, orifice tube/TXV, accumulator/drier',
            'Compressor and condenser',
            'Compressor, orifice tube, drier'
        ],
        correctIndex: 1,
        explanation: 'Catastrophic compressor failure = metal debris throughout system. Parallel-flow condensers CANNOT be flushed — must be replaced. Orifice tube/TXV and accumulator/drier must be replaced. Lines/hoses/evaporator must be flushed (closed-loop machine) or replaced.',
        topicId: 'mwa-e-compressor-fail',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct oil balancing procedure when replacing a compressor?',
        options: [
            'Fill new compressor with full oil charge from bottle',
            'Drain old compressor, measure oil, drain new compressor, add back measured amount + 15 mL per component replaced',
            'Add 60 mL oil to new compressor',
            'No oil balancing needed'
        ],
        correctIndex: 1,
        explanation: 'Oil balancing: 1) Drain old compressor, measure oil. 2) Drain new compressor factory oil. 3) Add back: measured old oil + 15 mL per component replaced (condenser 15, evaporator 15, line 10, accumulator 15). Use correct oil type (PAG/POE).',
        topicId: 'mwa-e-oil-balance',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An electric compressor (HV) on a hybrid vehicle has an insulation resistance of 0.8 MΩ (system voltage 300 V). Is this acceptable?',
        options: [
            'Yes, above minimum',
            'No, below minimum (requires >3 MΩ for 300 V system)',
            'Yes, electric compressors have lower specs',
            'Cannot test electric compressors'
        ],
        correctIndex: 1,
        explanation: 'Minimum insulation resistance = 1 MΩ per 100 V system voltage. For a 300 V system: 3 MΩ minimum (OEMs often require 5-10 MΩ). 0.8 MΩ indicates insulation breakdown — compressor must be replaced. Test with 500/1000 V DC Megger, HV de-energized.',
        topicId: 'mwa-e-hv-compressor-insulation',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct vacuum level and time for A/C system evacuation?',
        options: [
            '500 microns for 30 minutes minimum',
            '1000 microns for 15 minutes',
            '2000 microns for 10 minutes',
            'Atmospheric pressure for 5 minutes'
        ],
        correctIndex: 0,
        explanation: 'Standard evacuation: 500 microns (0.5 mm Hg) for minimum 30 minutes, followed by a decay test (hold 5 minutes, rise <50 microns). This ensures moisture and non-condensables are removed.',
        topicId: 'mwa-e-evacuation',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A variable displacement compressor (mechanical control) maintains suction pressure at approximately what value?',
        options: [
            '10 psi',
            '30 psi',
            '60 psi',
            '100 psi'
        ],
        correctIndex: 1,
        explanation: 'Mechanically controlled variable displacement compressors maintain suction pressure at approximately 30 psi (2 bar) by adjusting the wobble plate angle via an internal control valve. Electronically controlled (PWM) versions vary based on PCM command.',
        topicId: 'mwa-e-vdc-pressure',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a wiring repair on a CAN bus circuit, what is the correct method?',
        options: [
            'Twist wires together, electrical tape',
            'Solder + adhesive heat shrink, maintain twist rate (1 twist per 20-25 mm)',
            'Crimp with standard butt connector',
            'Wire nut and tape'
        ],
        correctIndex: 1,
        explanation: 'CAN bus repairs: solder + adhesive-lined heat shrink. Maintain the twisted pair construction (1 twist per 20-25 mm). Shield (if present) reconnected at ONE end only. No wire nuts, T-taps, or non-twisted repair wire.',
        topicId: 'mwa-e-can-repair',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for testing a wheel speed sensor (passive, 2-wire)?',
        options: [
            'Measure resistance (spec 800-1400 Ω), AC voltage while spinning wheel',
            'Measure DC voltage with key on',
            'Apply 12V to sensor, measure output',
            'Ohmmeter only'
        ],
        correctIndex: 0,
        explanation: 'Passive WSS (2-wire): measure resistance (typically 800-1400 Ω), then AC voltage while spinning wheel (should generate sine wave, amplitude increases with speed). Air gap critical (0.5-1.5 mm). Active sensors (Hall/MR): 12V supply, digital square wave output.',
        topicId: 'mwa-e-wss-test',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle has DTC P0562 (System Voltage Low). The alternator charges at 14.2 V at 2000 RPM with loads off. What is the most likely cause?',
        options: [
            'Faulty alternator',
            'Faulty battery current sensor (BCS/BMS)',
            'Loose serpentine belt',
            'PCM failure'
        ],
        correctIndex: 1,
        explanation: 'P0562 with normal charging voltage often indicates a faulty Battery Current Sensor (BCS/BMS) reporting incorrect current data to the PCM, causing the PCM to set a false low voltage code. Compare scan tool current reading to clamp meter.',
        topicId: 'mwa-e-p0562',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for jump-starting a vehicle with a dead battery?',
        options: [
            'Connect positive to positive, negative to negative',
            'Connect positive to positive, negative to engine block/ground on dead vehicle',
            'Connect negative first, then positive',
            'Rev donor engine to 3000 RPM immediately'
        ],
        correctIndex: 1,
        explanation: 'Correct jump-start: 1) Positive to positive. 2) Negative to engine block or clean chassis ground on dead vehicle (NOT battery negative — spark risk near hydrogen gas). 3) Start donor, wait 2-3 min. 4) Start dead vehicle. 5) Remove in reverse order.',
        topicId: 'mwa-e-jump-start',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An automatic climate control system has a sunload sensor. What does it do?',
        options: [
            'Measures outside temperature',
            'Measures solar radiation intensity to adjust cooling/heating demand',
            'Measures cabin humidity',
            'Measures engine coolant temperature'
        ],
        correctIndex: 1,
        explanation: 'The sunload sensor (photodiode on dash) measures solar radiation intensity. High sunload increases cooling demand (higher blower, colder blend door). Low sunload reduces demand. It compensates for greenhouse effect.',
        topicId: 'mwa-e-sunload',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct drive-away time for a windshield installation using standard urethane?',
        options: [
            '15 minutes',
            '1 hour',
            '4 hours',
            '24 hours'
        ],
        correctIndex: 1,
        explanation: 'Standard urethane drive-away time is typically 1 hour (check cartridge label). Structural urethane (for passenger airbag deployment path) may require longer (4-24 hours). Vehicle must not be driven until cure time is met.',
        topicId: 'mwa-e-windshield-cure',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A TPMS light is flashing (system fault) then solid. Scan tool shows "Sensor ID Not Registered" for LF. What is required?',
        options: [
            'Replace LF sensor',
            'Relearn TPMS sensor IDs using trigger tool at each valve stem',
            'Drive vehicle for 20 minutes',
            'Replace BCM'
        ],
        correctIndex: 1,
        explanation: 'Direct TPMS: each sensor has a unique ID that must be registered to the vehicle. After rotation or sensor replacement, a relearn is required using a trigger tool at each valve stem (typically LF, RF, RR, LF order). Indirect TPMS uses ABS WSS and auto-learns via drive cycle.',
        topicId: 'mwa-e-tpms-relearn',
        topicLabel: 'MWA E — Electrical Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for testing a blower motor resistor/module?',
        options: [
            'Measure resistance of each resistor coil',
            'Measure voltage at blower motor connector on each speed setting',
            'Apply 12V directly to blower motor',
            'Ohmmeter on blower motor'
        ],
        correctIndex: 1,
        explanation: 'Blower motor resistor/module diagnosis: measure voltage at the blower motor connector on each speed setting. Compare to spec. Resistor type: different voltage per speed. Module (PWM): variable voltage/duty cycle. Direct 12V test only checks motor, not control circuit.',
        topicId: 'mwa-e-blower-test',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle has no heat. Coolant level is full, engine reaches operating temperature. Heater hoses are both hot. What is the most likely cause?',
        options: [
            'Thermostat stuck open',
            'Heater core restricted',
            'Blend door actuator failed (stuck cold)',
            'Water pump failed'
        ],
        correctIndex: 2,
        explanation: 'Both heater hoses hot = coolant flowing through heater core. Engine at temp = thermostat OK. No heat with hot hoses = blend door not directing air through heater core (actuator failed, door broken, or calibration lost).',
        topicId: 'mwa-e-no-heat',
        topicLabel: 'MWA E — HVAC',
        order: 0
    },

    // MWA F - 23 questions (18.4%)
    {
        tradeSlug: 'autoservtech',
        question: 'During a 4-wheel alignment, the rear toe is set to zero thrust angle. What is the next step?',
        options: [
            'Adjust front caster',
            'Adjust front camber',
            'Adjust front toe to center steering wheel',
            'Calibrate steering angle sensor'
        ],
        correctIndex: 2,
        explanation: 'Alignment sequence: 1) Rear: camber (if adjustable), TOE (set thrust angle = 0°). 2) Front: caster (if adjustable), camber, TOE (set to centerline, centers steering wheel). 3) Steering angle sensor calibration. 4) ADAS calibration.',
        topicId: 'mwa-f-alignment-seq',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle pulls to the right. Tire pressures are equal. Swapping front tires side-to-side causes the pull to move to the left. What is the cause?',
        options: [
            'Alignment issue (camber/caster)',
            'Tire conicity (radial pull)',
            'Brake drag on right side',
            'Steering rack fault'
        ],
        correctIndex: 1,
        explanation: 'Pull follows the tire when swapped side-to-side = tire conicity (radial pull) or construction variance. Alignment pull stays with the vehicle. Brake drag pull is constant and brake-related.',
        topicId: 'mwa-f-tire-pull',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for calibrating a steering angle sensor after alignment?',
        options: [
            'Turn steering lock-to-lock 3 times',
            'Scan tool "Steering Angle Sensor Calibration" with wheels straight',
            'Drive straight for 1 km',
            'Disconnect battery for 10 minutes'
        ],
        correctIndex: 1,
        explanation: 'Steering angle sensor calibration: 1) Wheels straight ahead. 2) Scan tool: "Steering Angle Sensor Calibration" / "Zero Point Calibration". 3) Some OEMs: turn lock-to-lock, return to center. 4) Verify scan tool reads 0° ±0.5° at center.',
        topicId: 'mwa-f-sas-cal',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An EPS (electric power steering) system has a C1234 code (Torque Sensor Circuit). The torque sensor voltage at center is 2.5 V (spec 2.4-2.6 V). What is the most likely cause?',
        options: [
            'Torque sensor internal fault',
            'EPS motor failure',
            'Steering column binding',
            'Battery voltage low'
        ],
        correctIndex: 0,
        explanation: 'Torque sensor voltage at center within spec but code set = internal sensor fault (signal noise, offset drift, or communication error with EPS ECU). The sensor is a torsion bar with Hall/MR elements — internal failure requires rack/column replacement.',
        topicId: 'mwa-f-eps-torque',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle with air suspension has the left rear corner low. The compressor runs constantly. Height sensor voltage for LR is 0.8 V (spec 2.5 V at ride height). What is the most likely cause?',
        options: [
            'Air spring leak',
            'Height sensor failed',
            'Compressor failed',
            'Valve block stuck open'
        ],
        correctIndex: 0,
        explanation: 'Low corner + constant compressor + low height sensor voltage (indicating low ride height) = air spring leak on that corner. The compressor runs trying to maintain height. Height sensor is reporting correctly (low voltage = low height).',
        topicId: 'mwa-f-air-susp',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for bleeding a brake system with an HCU (ABS/ESC) after master cylinder replacement?',
        options: [
            'Manual bleed only',
            'Scan tool "HCU Bleed" / "ABS Bleed" procedure mandatory',
            'Pressure bleed only',
            'Gravity bleed only'
        ],
        correctIndex: 1,
        explanation: 'After master cylinder or HCU replacement, the HCU internal passages contain air. A scan tool "HCU Bleed" or "ABS Bleed" procedure is MANDATORY to cycle the pump and valves to purge air. Manual/pressure bleed alone cannot remove air from the HCU.',
        topicId: 'mwa-f-hcu-bleed',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle has brake pedal pulsation. Rotor LRO measures 0.08 mm (spec <0.05 mm). What is the correct repair?',
        options: [
            'Resurface rotors on-vehicle',
            'Replace rotors',
            'Torque wheel nuts to spec',
            'Replace brake pads only'
        ],
        correctIndex: 1,
        explanation: 'Rotor LRO (Lateral Runout) of 0.08 mm exceeds spec (<0.05 mm). Modern rotors are often too thin to resurface after wear. Replacement is the correct repair. On-vehicle resurfacing can correct LRO but not thickness variation.',
        topicId: 'mwa-f-rotor-lro',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct diagnostic procedure for an EPB (electronic parking brake) that won\'t release?',
        options: [
            'Manually pull the cable',
            'Scan tool: EPB service mode retract, check motor current, position sensor',
            'Replace the caliper',
            'Disconnect battery'
        ],
        correctIndex: 1,
        explanation: 'EPB diagnosis: 1) Scan tool "EPB Service Mode" to retract. 2) Monitor motor current and position sensor (Hall) data. 3) Bi-directional apply/release. 4) Mechanical: cable bind, caliper piston seize. 5) Calibration after repair (apply/release cycles).',
        topicId: 'mwa-f-epb-diag',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During regenerative braking on an HEV, the friction brakes must compensate when regen is unavailable. What triggers regen unavailability?',
        options: [
            'Battery SOC > 80%',
            'Battery temperature too low or too high',
            'Motor/generator fault',
            'All of the above'
        ],
        correctIndex: 3,
        explanation: 'Regen is unavailable when: battery SOC high (near full), battery temp too low (cold) or too high (overheat protection), motor/generator fault, or system fault. The HCU/PCM must instantly blend friction braking to compensate — pedal feel simulator provides driver feedback.',
        topicId: 'mwa-f-regen-blend',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for measuring ball joint play on a loaded ball joint (weight on wheel)?',
        options: [
            'Pry up on tire, measure vertical movement at ball joint',
            'Pry sideways on tire, measure horizontal movement',
            'Shake tire at 12 and 6 o\'clock',
            'Visual inspection only'
        ],
        correctIndex: 0,
        explanation: 'Loaded ball joint test: use a pry bar under the tire to lift the suspension. Measure vertical play at the ball joint with a dial indicator. Spec typically <1.5 mm (0.060 in). Unloaded test (wheel off ground) checks horizontal play. Follow OEM procedure.',
        topicId: 'mwa-f-ball-joint',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A CDC (Continuous Damping Control) damper is commanded "Hard" via bi-directional scan tool but the damper current does not change. What is the most likely cause?',
        options: [
            'Damper solenoid failed',
            'Vertical G sensor failed',
            'Body acceleration sensor failed',
            'Steering angle sensor failed'
        ],
        correctIndex: 0,
        explanation: 'CDC damper current should change immediately with bi-directional command (Hard/Soft). No current change = solenoid circuit fault (open/short), damper internal solenoid failure, or wiring. The sensors provide input for automatic mode but don\'t prevent bi-directional command.',
        topicId: 'mwa-f-cdc-diag',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct tire pressure for a vehicle? Where is it found?',
        options: [
            'On the tire sidewall',
            'On the vehicle placard (door jamb, fuel door, glove box)',
            'In the owner\'s manual only',
            '35 psi for all vehicles'
        ],
        correctIndex: 1,
        explanation: 'The correct tire pressure is on the vehicle placard (typically driver door jamb, fuel door, or glove box) and in the owner\'s manual. The sidewall pressure is the MAXIMUM pressure for the tire at max load, not the vehicle-specific pressure.',
        topicId: 'mwa-f-tire-pressure',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A direct TPMS sensor has a dead battery. What is the repair?',
        options: [
            'Replace sensor battery',
            'Replace the entire sensor assembly',
            'Relearn the sensor',
            'Drive for 30 minutes to recharge'
        ],
        correctIndex: 1,
        explanation: 'Direct TPMS sensors have non-replaceable batteries (7-10 year life). Dead battery = replace the entire sensor assembly. New sensor requires ID programming/relearn via trigger tool.',
        topicId: 'mwa-f-tpms-battery',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct road force balance specification for radial force variation?',
        options: [
            '<5 lb',
            '<15-20 lb (varies by OEM)',
            '<50 lb',
            '<100 lb'
        ],
        correctIndex: 1,
        explanation: 'Road force balancer radial force variation spec is typically <15-20 lb (varies by OEM and tire size). Lateral force variation similar. Road force matching (mounting tire high point to rim low point) solves vibrations traditional balance cannot.',
        topicId: 'mwa-f-road-force',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A Gen 3 hub unit (integrated bearing, ABS sensor) has excessive end-play (0.15 mm). What is the repair?',
        options: [
            'Adjust axle nut tighter',
            'Replace the hub unit',
            'Replace the bearing only',
            'Shim the hub'
        ],
        correctIndex: 1,
        explanation: 'Gen 3 hub units are non-serviceable sealed units. Excessive end-play = internal bearing wear. The entire hub unit must be replaced. Axle nut torque sets preload (TTY: torque + angle + stake) — cannot be adjusted after installation.',
        topicId: 'mwa-f-hub-unit',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for installing a new sway bar link?',
        options: [
            'Torque both ends to spec with suspension at ride height',
            'Torque both ends with suspension fully drooped',
            'Hand tight only',
            'Torque to 100 Nm'
        ],
        correctIndex: 0,
        explanation: 'Sway bar links must be torqued at ride height (vehicle on ground or lift with suspension loaded to curb height) to prevent preloading the bushings. Typical torque: 40-60 Nm. Torquing at full droop twists the bushings, causing premature failure and noise.',
        topicId: 'mwa-f-sway-link',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An ESC (Electronic Stability Control) light is on. Scan tool shows C12xx codes for Yaw Rate Sensor. The sensor voltage is 2.5 V at rest (spec 2.4-2.6 V). What is required?',
        options: [
            'Replace yaw rate sensor',
            'Yaw rate sensor zero calibration on level ground',
            'Replace HCU',
            'Four-wheel alignment'
        ],
        correctIndex: 1,
        explanation: 'Yaw rate and lateral-G sensors require zero-point calibration on a level surface after battery disconnect, sensor replacement, or collision repair. Voltage at rest within spec but code set = calibration lost. Scan tool "Yaw Rate Sensor Calibration" / "Zero Point Calibration".',
        topicId: 'mwa-f-yaw-cal',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for torquing wheel nuts?',
        options: [
            'Impact wrench to maximum',
            'Star pattern, torque to spec, re-torque after 50-100 km',
            'Circular pattern, torque to spec',
            'Any pattern, torque to spec'
        ],
        correctIndex: 1,
        explanation: 'Wheel nuts: star (crisscross) pattern, torque to spec (typically 100-150 Nm). Re-torque after 50-100 km (required for alloy wheels, recommended for all). Impact wrench for final torque is prohibited — use torque wrench.',
        topicId: 'mwa-f-wheel-nuts',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle has a clunk noise on acceleration and deceleration. U-joints show no play. What is the next most likely cause?',
        options: [
            'Differential backlash excessive',
            'Transmission mount',
            'Engine mount',
            'Slip yoke spline wear'
        ],
        correctIndex: 3,
        explanation: 'Clunk on accel/decel with good U-joints = slip yoke spline wear (yoke binds then releases on driveshaft length change) or excessive differential backlash. Slip yoke: lube splines, check wear. Differential: check backlash spec (0.13-0.20 mm).',
        topicId: 'mwa-f-slip-yoke',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct brake fluid specification for a vehicle requiring DOT 4 LV?',
        options: [
            'DOT 3',
            'DOT 4',
            'DOT 4 LV (Low Viscosity)',
            'DOT 5 (Silicone)'
        ],
        correctIndex: 2,
        explanation: 'DOT 4 LV (Low Viscosity) is required for many modern ABS/ESC systems (especially Bosch) for proper valve cycling at low temperatures. NEVER use DOT 5 (silicone) in a DOT 3/4/4 LV system. DOT 4 LV is backward compatible but DOT 4 is not a substitute for DOT 4 LV.',
        topicId: 'mwa-f-brake-fluid',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'During a brake pressure test, the front circuit pressure is 800 psi at 100 lb pedal force, rear circuit is 400 psi. What does this indicate?',
        options: [
            'Normal brake bias',
            'Front brake hose collapsed',
            'Rear circuit leak or proportioning valve fault',
            'Master cylinder primary piston bypass'
        ],
        correctIndex: 2,
        explanation: 'Normal brake bias is typically 60-70% front / 30-40% rear. 800 psi front / 400 psi rear = 67% front bias, which is normal. Low rear pressure with normal front = rear circuit issue (leak, proportioning valve, HCU valve). Low front with normal rear = front circuit issue.',
        topicId: 'mwa-f-brake-bias',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for resetting DCT clutch adaptation after clutch replacement?',
        options: [
            'Drive normally, it self-learns',
            'Scan tool "Clutch Adaptation Reset" then drive cycle learn',
            'Disconnect battery for 30 minutes',
            'No reset needed'
        ],
        correctIndex: 1,
        explanation: 'After DCT clutch replacement (or mechatronic replacement), the clutch adaptation values MUST be reset via scan tool ("Clutch Adaptation Reset" / "Kiss Point Learn"). Then a specific drive cycle learn is required (ignition on, brake, N→D→N→R→N cycles per OEM). Failure to reset = clutch slip and burn.',
        topicId: 'mwa-f-dct-adapt-reset',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A vehicle with 4-wheel steering (4WS) has a rear steer angle sensor code. What is required after rear toe adjustment?',
        options: [
            'Front alignment only',
            '4WS rear steering calibration via scan tool',
            'Steering angle sensor calibration only',
            'No calibration needed'
        ],
        correctIndex: 1,
        explanation: 'Any rear suspension or steering work on a 4WS vehicle requires a 4WS calibration via scan tool ("4WS Initialization" / "Rear Steering Calibration"). This learns the rear steer actuator center position and end-stops. Front steering angle sensor calibration is also required.',
        topicId: 'mwa-f-4ws-cal',
        topicLabel: 'MWA F — Chassis Systems',
        order: 0
    },

    // MWA G - 10 questions (8%)
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct safety procedure before working on any SRS component?',
        options: [
            'Disconnect battery, wait 30 seconds',
            'Disconnect battery, wait 3+ minutes',
            'Remove airbag fuse only',
            'Disconnect yellow connectors only'
        ],
        correctIndex: 1,
        explanation: 'SRS safety: Battery disconnect → wait minimum 3 minutes (some OEMs 10 minutes) for backup capacitor discharge. Never probe yellow connectors with DMM. Carry modules face up/away. Store face up.',
        topicId: 'mwa-g-srs-safety',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An SRS code B0010 is set (Driver Airbag Squib Circuit Resistance Low). What does this indicate?',
        options: [
            'Open circuit in squib',
            'Short circuit in squib (resistance < 2 Ω)',
            'Clock spring failure',
            'SRS ECU failure'
        ],
        correctIndex: 1,
        explanation: 'B0010 (Driver Airbag Squib Resistance Low) = resistance below spec (typically <2.0 Ω). Normal squib resistance is 2.0-3.0 Ω. Low resistance = short in squib, clock spring, or wiring. High resistance (>3 Ω) = open circuit.',
        topicId: 'mwa-g-srs-code',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for OCS (Occupant Classification System) zero-point calibration?',
        options: [
            'Place 50 lb weight on seat, scan tool calibrate',
            'Seat empty, unloaded, level ground, scan tool "OCS Zero Point Calibration"',
            'Sit in seat, scan tool calibrate',
            'Disconnect battery, reconnect, calibrate'
        ],
        correctIndex: 1,
        explanation: 'OCS zero calibration: seat MUST be empty, unloaded (no objects), on level ground. Scan tool: "OCS Zero Point Calibration" records bladder pressure sensor voltage at zero load. Required after seat removal, sensor replacement, or battery disconnect (some OEMs).',
        topicId: 'mwa-g-ocs-cal',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct panel gap specification for a door-to-fender gap?',
        options: [
            '1-2 mm',
            '4-6 mm ±1 mm',
            '8-10 mm',
            'Gap is not specified'
        ],
        correctIndex: 1,
        explanation: 'Typical door-to-fender gap spec: 4-6 mm ±1 mm. Flush tolerance: ±0.5-1 mm. Measured with feeler gauge (gap) and straight edge/flush gauge (flush). Adjusted via hinge bolts (slotted) and striker.',
        topicId: 'mwa-g-panel-gap',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct corrosion protection sequence for a welded panel joint?',
        options: [
            'Weld → cavity wax → seam sealer → paint',
            'Weld-through primer → weld → cavity wax → seam sealer → paint',
            'Paint → weld → cavity wax',
            'Seam sealer → weld → paint'
        ],
        correctIndex: 1,
        explanation: 'Correct sequence: 1) Weld-through primer (copper/zinc) on mating flanges BEFORE welding. 2) Weld. 3) Cavity wax inside enclosed sections AFTER assembly. 4) Seam sealer on lap joints/hem flanges. 5) Paint: epoxy primer → base → clear.',
        topicId: 'mwa-g-corrosion',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct urethane drive-away time for a structural windshield installation (passenger airbag deployment path)?',
        options: [
            '15 minutes',
            '1 hour',
            '4 hours',
            'Check urethane cartridge label'
        ],
        correctIndex: 3,
        explanation: 'Drive-away time varies by urethane product and application (standard vs. structural). The cartridge label specifies the cure time for the specific conditions (temperature, humidity). Structural installations typically require longer (4-24 hours). Always follow the manufacturer\'s label.',
        topicId: 'mwa-g-windshield-time',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A power seat memory system will not store positions. The seat moves normally with switches. What is the most likely cause?',
        options: [
            'Seat motor failure',
            'Position sensor failure',
            'Memory switch failure',
            'Seat module programming lost'
        ],
        correctIndex: 1,
        explanation: 'Memory function requires position feedback (Hall effect sensors on each motor). If seat moves normally but memory doesn\'t store, the position sensors are not providing feedback to the seat ECU. Scan tool data list shows sensor voltages.',
        topicId: 'mwa-g-seat-memory',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for initializing a sunroof after battery disconnect?',
        options: [
            'Hold open button 10 seconds',
            'Hold close button 5-10 seconds past full close, then hold open 5-10 seconds past full open',
            'Drive vehicle 10 minutes',
            'Scan tool only'
        ],
        correctIndex: 1,
        explanation: 'Sunroof initialization: 1) Ignition ON. 2) Hold CLOSE switch 5-10 sec past full close. 3) Hold OPEN switch 5-10 sec past full open. 4) Test auto-open/close. 5) Anti-pinch test (rolled towel). Some require scan tool position sensor learn.',
        topicId: 'mwa-g-sunroof-init',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct clip type for a door panel that uses a metal clip with a forked end?',
        options: [
            'Push-in clip',
            'Christmas tree clip',
            'Metal door panel clip (use door panel remover fork)',
            'Screw-in clip'
        ],
        correctIndex: 2,
        explanation: 'Metal door panel clips (common on older vehicles and some newer) require a door panel remover tool (forked end) to disengage the clip from the door shell. They are reusable if undamaged.',
        topicId: 'mwa-g-clip-type',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'After replacing a curtain airbag module, what is the mandatory post-repair verification?',
        options: [
            'Visual inspection only',
            'Scan tool: no B-codes, satellite sensor communication OK',
            'Deploy airbag to test',
            'Resistance check with DMM'
        ],
        correctIndex: 1,
        explanation: 'Post-SRS repair verification: Scan tool — NO B-codes, NO U-codes. Data list: all squib resistances 2.0-3.0 Ω. Satellite sensor communication verified. Airbag indicator: ON 6-8 sec at startup → OFF. NEVER measure squib resistance with DMM.',
        topicId: 'mwa-g-srs-verify',
        topicLabel: 'MWA G — Restraint/Body/Accessories',
        order: 0
    },

    // MWA H - 9 questions (7.2%)
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct PPE for working on a 400 V HV system?',
        options: [
            'Standard safety glasses, leather gloves',
            'Class 0 (1000 V) insulated gloves + leather protectors, face shield, CAT 2 arc-rated clothing',
            'Nitrile gloves, safety glasses',
            'Welding gloves, face shield'
        ],
        correctIndex: 1,
        explanation: 'HV (>60 V DC) PPE: Class 0 (1000 V rated) insulated rubber gloves + leather protectors, face shield, CAT 2+ arc-rated shirt/pants, EH-rated boots. Insulated tools (IEC 60900). NO EXCEPTIONS.',
        topicId: 'mwa-h-ppe',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct de-energizing sequence for an HV system?',
        options: [
            'Remove service plug → disconnect 12V → wait → verify',
            'Key OFF → remove proximity key → disconnect 12V negative → remove service plug → wait → verify <60 V DC',
            'Disconnect 12V → remove service plug → verify',
            'Remove service plug only'
        ],
        correctIndex: 1,
        explanation: 'Standard de-energize: 1) Key OFF, remove proximity key >5 m. 2) Disable 12V (disconnect negative). 3) Remove service plug (or pull HV fuse/relay per OEM). 4) Wait capacitor discharge (5-10 min, up to 30 min). 5) Verify <60 V DC at multiple points (inverter DC link, motor phases, charger inlet) with Cat III DMM. 6) LOTO service plug.',
        topicId: 'mwa-h-deenergize',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An HV battery pack has a cell voltage delta (max-min) of 180 mV. Spec is <50 mV balanced. What does this indicate?',
        options: [
            'Normal cell balance',
            'Cell imbalance — weak module',
            'BMS balancing active',
            'Temperature sensor fault'
        ],
        correctIndex: 1,
        explanation: 'Cell voltage delta >50-100 mV indicates significant imbalance. 180 mV = weak cell/module. BMS passive balancing (bleed resistors) occurs at top of charge but cannot correct a weak cell. Module replacement required.',
        topicId: 'mwa-h-cell-balance',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the minimum insulation resistance for a 360 V HV system?',
        options: [
            '1 MΩ',
            '3.6 MΩ',
            '10 MΩ',
            '100 MΩ'
        ],
        correctIndex: 1,
        explanation: 'Minimum insulation resistance = 1 MΩ per 100 V system voltage. For 360 V: 3.6 MΩ minimum. OEMs often require 5-10 MΩ. Test with 500/1000 V DC Megger, HV de-energized and verified.',
        topicId: 'mwa-h-insulation',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'A 3-phase AC motor (MG2) has phase currents: A=45 A, B=45 A, C=30 A. What does this indicate?',
        options: [
            'Normal operation',
            'Phase C winding fault or inverter leg fault',
            'Position sensor fault',
            'DC link voltage low'
        ],
        correctIndex: 1,
        explanation: 'Balanced 3-phase currents should be equal (within 5-10%). Phase C at 30 A vs 45 A = 33% imbalance. This indicates a fault in Phase C: motor winding, inverter IGBT/leg, or gate driver. Position sensor fault typically causes noise/torque ripple, not steady current imbalance.',
        topicId: 'mwa-h-phase-current',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct procedure for testing DC fast charge (CCS) communication?',
        options: [
            'Measure DC voltage at inlet',
            'Scope the PLC (Power Line Communication) signal on the CCS inlet',
            'Measure pilot PWM duty cycle',
            'Check proximity detect resistor'
        ],
        correctIndex: 1,
        explanation: 'CCS DC fast charge uses PLC (HomePlug Green PHY) over the DC power lines for BMS-EVSE communication. Diagnosis: scope the PLC signal at the inlet during charge attempt. AC charge uses pilot PWM (J1772). Proximity detect is for cable rating.',
        topicId: 'mwa-h-dcfc-comm',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'An electric compressor (HV) has an insulation resistance of 2.5 MΩ on a 300 V system. Is this acceptable?',
        options: [
            'Yes',
            'No, minimum is 3 MΩ (1 MΩ per 100 V)',
            'Yes, compressors have lower specs',
            'Cannot test'
        ],
        correctIndex: 1,
        explanation: 'Minimum insulation resistance = 1 MΩ per 100 V. For 300 V system: 3 MΩ minimum (OEMs often 5-10 MΩ). 2.5 MΩ = insulation breakdown. Compressor must be replaced. Test with Megger, HV de-energized.',
        topicId: 'mwa-h-comp-insulation',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'What is the correct coolant for an HEV/EV thermal management system?',
        options: [
            'Standard green ethylene glycol',
            'OEM-specific low-conductivity coolant (<5 µS/cm)',
            'Water only',
            'Any universal coolant'
        ],
        correctIndex: 1,
        explanation: 'HEV/EV thermal systems require OEM-specific low-conductivity coolant (typically <5 µS/cm) to prevent electrical leakage paths in HV components (inverter, motor, battery). Standard coolant conductivity is too high. Never mix coolant types.',
        topicId: 'mwa-h-coolant',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        question: 'After replacing an HV battery pack, what is the mandatory initialization sequence?',
        options: [
            'Drive vehicle 50 km',
            'Scan tool: "Battery Replacement" / "Cell Learn" → insulation test → balance charge',
            'Charge to 100%',
            'No initialization needed'
        ],
        correctIndex: 1,
        explanation: 'HV battery replacement initialization: 1) Scan tool "Battery Replacement" / "Cell Voltage Learn" / "BMS Initialization". 2) Insulation test (Megger) — MUST PASS. 3) Balance charge (may require overnight). 4) Verify SOC, SOH, cell delta V, temps, no codes.',
        topicId: 'mwa-h-battery-init',
        topicLabel: 'MWA H — HEV/EV Systems',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-sds-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'Which section of an SDS (Safety Data Sheet) provides information on first-aid measures?',
        options: [
            'Section 2: Hazard Identification',
            'Section 4: First-Aid Measures',
            'Section 7: Handling and Storage',
            'Section 8: Exposure Controls/Personal Protection'
        ],
        correctIndex: 1,
        explanation: 'SDS Section 4 specifically covers first-aid measures for exposure (inhalation, skin contact, eye contact, ingestion). Section 2 is hazards, Section 7 is handling/storage, Section 8 is PPE/exposure limits.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-lift-safety-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'When lifting a vehicle on a two-post lift, what is the correct procedure for engaging the lift arms?',
        options: [
            'Position arms under any convenient frame spot',
            'Use only the OEM-designated lift points',
            'Place arms under the suspension control arms',
            'Center the vehicle by eye, no lift points needed'
        ],
        correctIndex: 1,
        explanation: 'ALWAYS use the OEM-designated lift points. These are reinforced areas designed to support the vehicle weight. Lifting on suspension components, floor pans, or non-designated points can cause damage or vehicle instability.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-fire-extinguisher-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'What class of fire extinguisher is required for a gasoline fuel fire?',
        options: [
            'Class A',
            'Class B',
            'Class C',
            'Class D'
        ],
        correctIndex: 1,
        explanation: 'Class B extinguishers are for flammable liquids (gasoline, diesel, oil, grease). Class A = ordinary combustibles (wood, paper). Class C = electrical equipment. Class D = combustible metals.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-a-ohsa-01',
        topicLabel: 'MWA A — Performs Common Occupational Skills',
        question: 'Under OH&S legislation, what are the three basic rights of workers?',
        options: [
            'Right to know, right to participate, right to refuse unsafe work',
            'Right to pay, right to benefits, right to vacation',
            'Right to tools, right to training, right to breaks',
            'Right to unionize, right to strike, right to grieve'
        ],
        correctIndex: 0,
        explanation: 'The three fundamental worker rights under OH&S: 1) Right to KNOW about workplace hazards (WHMIS, training). 2) Right to PARTICIPATE in health and safety (committees, reporting). 3) Right to REFUSE unsafe work without reprisal.',
        order: 0
    },

    // MWA B - 9 questions (17.6%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-vacuum-gauge-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A vacuum gauge at idle shows a steady reading of 15 in-Hg (spec 18-22 in-Hg). The needle is steady. What does this indicate?',
        options: [
            'Normal engine',
            'Retarded ignition or valve timing',
            'Worn piston rings',
            'Stuck open EGR valve'
        ],
        correctIndex: 1,
        explanation: 'Steady low vacuum (below spec) at idle typically indicates retarded ignition timing or retarded valve timing (camshaft timing retarded). Worn rings would show low but steady vacuum. Stuck open EGR would cause a rough idle and fluctuating needle.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-cylinder-leakdown-02',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'During a leak-down test, air bubbles appear in the coolant reservoir. The engine is at TDC on the compression stroke for that cylinder. What does this indicate?',
        options: [
            'Intake valve leak',
            'Exhaust valve leak',
            'Head gasket leak or cracked head/block',
            'Piston ring leak'
        ],
        correctIndex: 2,
        explanation: 'Bubbles in the coolant reservoir during a leak-down test (at TDC compression) indicate combustion pressure entering the cooling system = head gasket leak, cracked cylinder head, or cracked block. This is a definitive test for internal coolant leaks.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-vvt-phaser-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A VVT system uses a cam phaser controlled by an oil control valve (OCV). The phaser is stuck in the fully advanced position. What is the most likely cause?',
        options: [
            'OCV stuck open (advance)',
            'OCV stuck closed (retard)',
            'Low engine oil pressure',
            'Faulty camshaft position sensor'
        ],
        correctIndex: 0,
        explanation: 'Phaser stuck advanced = OCV stuck in the advance position (supplying oil to the advance chamber continuously). Stuck retard would hold it retarded. Low oil pressure would prevent movement. CMP sensor fault sets a code but doesn\'t mechanically stick the phaser.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-gdi-carbon-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A GDI engine has rough idle and misfire codes (P0300, P0302). Compression and leak-down are normal. What is a common GDI-specific cause?',
        options: [
            'Carbon buildup on intake valves',
            'Faulty high-pressure pump',
            'Low fuel rail pressure',
            'Faulty ignition coils'
        ],
        correctIndex: 0,
        explanation: 'GDI engines lack fuel wash on intake valves (fuel injected directly into cylinder). Carbon buildup on intake valves is common, causing misfire, rough idle, and power loss. Walnut blasting or chemical cleaning is required. Normal compression/leak-down rules out mechanical issues.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-diesel-hpfp-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A diesel high-pressure fuel pump (CP4) fails and contaminates the fuel system with metal debris. What components MUST be replaced?',
        options: [
            'High-pressure pump only',
            'High-pressure pump, fuel rail, injectors, lines, and fuel tank',
            'High-pressure pump and fuel filter',
            'High-pressure pump, injectors, and fuel filter'
        ],
        correctIndex: 1,
        explanation: 'CP4 failure generates microscopic metal debris that contaminates the ENTIRE high-pressure fuel system. The pump, rail, injectors, high-pressure lines, and fuel tank must be replaced. Low-pressure lines and filter should also be replaced. Flushing is insufficient.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-dpf-regen-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A diesel vehicle requires frequent DPF regeneration (every 100 km). The differential pressure sensor reads normal. What is a likely cause?',
        options: [
            'Faulty DPF pressure sensor',
            'EGR cooler leaking coolant into exhaust',
            'Turbocharger oil seal leaking',
            'All of the above'
        ],
        correctIndex: 3,
        explanation: 'Frequent regens with normal DPF pressure indicate excess soot load from upstream sources: EGR cooler leaking coolant (creates soot), turbo oil seal leaking (oil burns to soot), or injector dribble. All increase particulate matter, loading the DPF faster.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-timing-chain-guides-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'A timing chain engine has a rattle noise at cold startup that disappears after 2-3 seconds. The tensioner is hydraulic. What is the most likely cause?',
        options: [
            'Timing chain stretch',
            'Worn timing chain guides',
            'Hydraulic tensioner bleed-down (check valve failure)',
            'Camshaft phaser failure'
        ],
        correctIndex: 2,
        explanation: 'Cold-start rattle that disappears quickly = hydraulic tensioner bleed-down. The tensioner\'s check valve fails, allowing oil to drain back. At startup, it takes 2-3 seconds to repressurize and tension the chain. Chain stretch causes constant noise and correlation codes.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-cooling-system-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'An engine overheats. The upper radiator hose is hot, lower hose is hot. The cooling fan operates. What is the most likely cause?',
        options: [
            'Stuck closed thermostat',
            'Restricted radiator (internal)',
            'Failed water pump impeller',
            'Blown head gasket'
        ],
        correctIndex: 2,
        explanation: 'Both hoses hot = coolant circulating. Overheat with circulation = insufficient heat rejection. Failed water pump impeller (plastic separation, corrosion) cannot move enough coolant at high RPM. Restricted radiator typically shows hot inlet, cooler outlet (cold spots). Head gasket = pressure rise, combustion gas in coolant.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-b-oil-consumption-01',
        topicLabel: 'MWA B — Diagnoses and Repairs Engine and Engine Support Systems',
        question: 'An engine consumes 1 L of oil per 1000 km. No external leaks. Blue smoke on startup and deceleration. Compression test is normal. What is the most likely cause?',
        options: [
            'Worn piston rings',
            'Worn valve guide seals',
            'PCV system fault',
            'Turbocharger seal failure'
        ],
        correctIndex: 1,
        explanation: 'Blue smoke on startup (valve seals drain oil into cylinders overnight) and deceleration (high manifold vacuum pulls oil past seals) with normal compression = worn valve guide seals. Worn rings would show low compression. PCV fault typically causes smoke at all times. Turbo seal failure = smoke at high load.',
        order: 0
    },

    // MWA C - 5 questions (9.6%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-can-fd-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'What is the key difference between CAN FD and classic CAN?',
        options: [
            'CAN FD uses three wires instead of two',
            'CAN FD supports faster data phase (up to 5 Mbps) and larger payload (64 bytes vs 8 bytes)',
            'CAN FD operates at 12V instead of 5V',
            'CAN FD is a wireless protocol'
        ],
        correctIndex: 1,
        explanation: 'CAN FD (Flexible Data-rate) extends classic CAN: same two-wire physical layer, but supports switchable bit rate (up to 5 Mbps in data phase) and larger payload (up to 64 bytes vs 8 bytes). Backward compatible with classic CAN.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-gateway-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'A vehicle has multiple U-codes across different buses (HS-CAN, MS-CAN, LIN). The gateway module has power and ground. What is the next test?',
        options: [
            'Replace the gateway',
            'Check gateway communication with each bus using scan tool "Bus Health" or "Network Test"',
            'Check all module power/grounds',
            'Replace the DLC'
        ],
        correctIndex: 1,
        explanation: 'Gateway failure is a common cause of multi-bus U-codes. Use scan tool to check gateway\'s communication status with each bus (HS-CAN, MS-CAN, LIN). The gateway may have lost communication on one bus internally, or a bus fault is preventing gateway routing.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-flexray-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'FlexRay protocol is primarily used for which automotive applications?',
        options: [
            'Body control (windows, locks)',
            'Powertrain (engine, transmission)',
            'Safety-critical x-by-wire (active suspension, steer-by-wire)',
            'Infotainment'
        ],
        correctIndex: 2,
        explanation: 'FlexRay (10 Mbps, deterministic, fault-tolerant) was designed for safety-critical x-by-wire systems (active suspension, steer-by-wire, brake-by-wire). It is largely superseded by CAN FD and Ethernet in modern vehicles but still found in some legacy applications.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-scope-can-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'When scoping a CAN bus, what indicates a healthy recessive-to-dominant transition?',
        options: [
            'CAN_H rises to 3.5 V, CAN_L falls to 1.5 V, differential ~2 V, clean square wave',
            'Both lines stay at 2.5 V',
            'CAN_H goes to 5 V, CAN_L goes to 0 V',
            'Both lines go to 0 V'
        ],
        correctIndex: 0,
        explanation: 'Healthy dominant bit: CAN_H rises from 2.5 V to ~3.5 V, CAN_L falls from 2.5 V to ~1.5 V, differential voltage ~2 V. Clean square wave with sharp edges. Ringing, slow edges, or incorrect voltages indicate wiring or transceiver faults.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-c-ota-01',
        topicLabel: 'MWA C — Diagnoses and Repairs Vehicle Module Communications Systems',
        question: 'What is the technician\'s role in Over-the-Air (OTA) updates?',
        options: [
            'Perform the update manually via scan tool',
            'Verify update status, force check, troubleshoot failed installs, perform post-update relearns',
            'Disable OTA updates',
            'OTA updates do not involve technicians'
        ],
        correctIndex: 1,
        explanation: 'OTA updates are delivered wirelessly by the OEM. Technician role: check software version vs. latest, force update check via scan tool, troubleshoot failed installations (check logs), and perform any required post-update relearns/calibrations (steering angle, ADAS, etc.).',
        order: 0
    },

    // MWA D - 7 questions (13.6%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-at-solenoid-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'An automatic transmission has no 3rd gear. Scan tool shows 3rd gear solenoid commanded ON but actual gear remains 2nd. Line pressure is normal. What is the most likely cause?',
        options: [
            '3rd gear clutch pack failed',
            '3rd gear shift solenoid mechanically stuck closed',
            'TCM failed',
            'Vehicle speed sensor failed'
        ],
        correctIndex: 1,
        explanation: 'Solenoid commanded ON but no gear change = solenoid mechanically stuck closed (no hydraulic flow to 3rd clutch). Electrical fault would set a circuit code. Clutch failure would show slip (RPM flare). VSS fault affects all shifts.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-cvt-step-motor-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A CVT has a P1778 code (Stepper Motor Circuit). The stepper motor current is 0 mA commanded, but actual is 0 mA. What is the most likely cause?',
        options: [
            'Stepper motor open circuit',
            'Stepper motor short to ground',
            'TCM driver failed',
            'All of the above possible'
        ],
        correctIndex: 3,
        explanation: 'P1778 with 0 mA actual current (commanded 0) could be: open circuit in motor windings, short to ground, or TCM driver failure. Resistance test of stepper motor coils (typically 20-30 Ω each) and wiring check required to isolate.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-dct-mechatronic-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A DCT has harsh shifts and a "Mechatronic Communication" code. The mechatronic unit is the integrated hydraulic/electronic module. What does it contain?',
        options: [
            'Only solenoids',
            'Solenoids, pressure sensors, position sensors, and TCM',
            'Only the TCM',
            'Only pressure sensors'
        ],
        correctIndex: 1,
        explanation: 'The mechatronic unit integrates: solenoids (clutch control, gear selection), pressure sensors (clutch, line), position sensors (shift rail), and the TCM (transmission control module) in one housing. Failure of any component often requires mechatronic replacement or repair.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-transfer-case-encoder-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A 4WD system won\'t engage 4HI. The encoder motor on the transfer case does not run. Scan tool shows encoder motor circuit code. What is the first test?',
        options: [
            'Replace the encoder motor',
            'Check encoder motor power and ground at the connector',
            'Replace the transfer case control module',
            'Manually shift the transfer case'
        ],
        correctIndex: 1,
        explanation: 'Encoder motor circuit code = check power and ground at the motor connector first. No power = wiring, fuse, or control module. Power/ground good but no run = motor failure. Manual shift lever (if equipped) can verify mechanical function.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-driveshaft-phase-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'A two-piece driveshaft has a vibration at highway speed. The center support bearing is good. What is a critical installation requirement?',
        options: [
            'Both U-joint yokes must be in phase (arrows aligned)',
            'The slip yoke must be fully extended',
            'The driveshaft must be installed upside down',
            'Phase does not matter on two-piece shafts'
        ],
        correctIndex: 0,
        explanation: 'Driveshaft phasing is critical: both U-joint yokes must be in phase (in the same plane, arrows aligned). Out-of-phase = 2nd order vibration (2x driveshaft RPM). Two-piece shafts have phasing marks on the slip yoke and center section.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-diff-pattern-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'During a differential gear pattern check, the contact pattern is high on the tooth face (toward heel) on the drive side. What adjustment is needed?',
        options: [
            'Decrease pinion depth shim (move pinion toward ring gear)',
            'Increase pinion depth shim (move pinion away from ring gear)',
            'Increase backlash',
            'Decrease backlash'
        ],
        correctIndex: 1,
        explanation: 'Pattern high on tooth (toward heel) on drive side = pinion too close to ring gear. Increase pinion depth shim thickness to move pinion away from ring gear. Backlash adjustment moves pattern lengthwise but depth shim moves it across the face.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-d-awd-clutch-01',
        topicLabel: 'MWA D — Diagnoses and Repairs Driveline Systems',
        question: 'An AWD vehicle has a shudder on tight turns. The AWD clutch pack current is commanded 0 A but actual current reads 0.5 A. What does this indicate?',
        options: [
            'Clutch pack worn',
            'Clutch pack seized/mechanically dragging',
            'Current sensor fault',
            'Normal operation'
        ],
        correctIndex: 1,
        explanation: 'Commanded 0 A but actual 0.5 A = clutch pack mechanically dragging (seized plates, contaminated fluid, worn friction material causing constant engagement). The control module detects the current draw. Worn clutch would show high slip, not drag. Current sensor fault would be erratic.',
        order: 0
    },

    // MWA E - 9 questions (18.4%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-alternator-ripple-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'An alternator AC ripple voltage measures 1.2 V peak-to-peak at the battery (spec <0.5 V). What does this indicate?',
        options: [
            'Normal alternator operation',
            'Failed diode or stator winding',
            'Voltage regulator failure',
            'Battery sulfation'
        ],
        correctIndex: 1,
        explanation: 'Excessive AC ripple (>0.5 V p-p) at the battery indicates a failed diode (open or shorted) or stator winding fault in the alternator. The rectifier is not converting AC to clean DC. Voltage regulator failure typically causes high/low DC voltage, not ripple.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-bcm-programming-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'After replacing a BCM, the vehicle will not start (no crank). The BCM was programmed with the correct VIN. What is the most likely missing step?',
        options: [
            'Key programming / immobilizer synchronization',
            'Relearn the steering angle sensor',
            'Calibrate the TPMS sensors',
            'Reset the adaptive cruise control'
        ],
        correctIndex: 0,
        explanation: 'BCM replacement requires: 1) Programming (software flash). 2) VIN write. 3) Configuration (options). 4) Key programming / immobilizer sync (PATS, KESSY, etc.). Without key programming, the immobilizer prevents crank/start.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-hvac-evap-temp-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'An auto climate control system cycles the compressor off prematurely. The evaporator temperature sensor reads -10°C (actual evaporator temp is 5°C). What is the cause?',
        options: [
            'Evaporator temperature sensor failed (reading low)',
            'Low refrigerant charge',
            'Faulty compressor',
            'Blend door actuator failed'
        ],
        correctIndex: 0,
        explanation: 'Evaporator temp sensor reading -10°C (actual 5°C) = sensor failed low (high resistance). The controller thinks the evaporator is freezing and cycles the compressor off to protect it. Actual low charge would cause insufficient cooling, not false freeze signal.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-r1234yf-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'R-1234yf refrigerant is classified as A2L. What does this mean for service procedures?',
        options: [
            'Non-flammable, standard procedures apply',
            'Mildly flammable — no open flames, use J2843 certified equipment, ventilate area',
            'Highly flammable — explosion-proof equipment required',
            'Toxic — full respirator required'
        ],
        correctIndex: 1,
        explanation: 'R-1234yf is A2L (mildly flammable). Service requires: no open flames/sparks, J2843 certified recovery machine, proper ventilation, leak detector rated for A2L (J2913). Not highly flammable (A3) like propane. Not toxic like ammonia.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-heat-pump-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'A heat pump HVAC system provides no heat in winter. The reversing valve is commanded to heating mode but the discharge line remains cold. What is the most likely cause?',
        options: [
            'Reversing valve stuck in cooling position',
            'Compressor failed',
            'Low refrigerant charge',
            'Outdoor temperature too low'
        ],
        correctIndex: 0,
        explanation: 'Reversing valve commanded to heat but discharge line cold = valve stuck in cooling position (diverting hot gas to outdoor coil). The compressor runs but heat is rejected outside. Low charge would show low pressures. Modern heat pumps operate to -20°C or lower.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-can-gateway-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'A body control function (power windows) works but the scan tool cannot communicate with the BCM. The BCM is on the MS-CAN. What is the likely cause?',
        options: [
            'BCM failed',
            'Gateway module not routing diagnostic messages to MS-CAN',
            'DLC pins 6/14 fault',
            'HS-CAN bus off'
        ],
        correctIndex: 1,
        explanation: 'Function works but no scan tool communication = gateway not routing diagnostic messages to that bus. The gateway acts as a firewall/router for diagnostic traffic. HS-CAN (DLC pins 6/14) works for scan tool, but gateway must bridge to MS-CAN for BCM access.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-tpms-indirect-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'An indirect TPMS system (uses ABS wheel speed sensors) sets a low pressure warning after a tire rotation. What is required?',
        options: [
            'Relearn sensor IDs with trigger tool',
            'Initialize/reset the TPMS system via menu or scan tool, then drive cycle',
            'Replace all wheel speed sensors',
            'Reprogram the ABS module'
        ],
        correctIndex: 1,
        explanation: 'Indirect TPMS uses ABS WSS to detect rolling circumference differences. After rotation, the system must be initialized/reset (via menu or scan tool) and then a drive cycle allows it to relearn the new wheel positions. No sensor IDs to program.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-door-module-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'A power window works from the driver\'s master switch but not from the passenger door switch. The passenger door module communicates on LIN. What is the first test?',
        options: [
            'Replace passenger door switch',
            'Scope LIN bus at passenger door module: 12 V recessive, master header + slave response',
            'Replace passenger door module',
            'Check LIN bus at driver door module'
        ],
        correctIndex: 1,
        explanation: 'LIN diagnosis: master (driver door module) polls slave (passenger door module). Scope LIN wire at slave: should see 12 V recessive, master header, slave response. No response = slave fault, wiring, or master not polling. Switch input is read by the door module.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-e-terminal-repair-01',
        topicLabel: 'MWA E — Diagnoses and Repairs Electrical and Comfort Control Systems',
        question: 'When repairing a connector terminal on a CAN bus circuit, what crimp tool is required?',
        options: [
            'Standard crimp tool',
            'Ratchet crimp tool with correct die for the terminal type',
            'Pliers',
            'Solder only, no crimp'
        ],
        correctIndex: 1,
        explanation: 'Terminal crimping requires a ratchet crimp tool with the correct die for the specific terminal series (Deutsch, Metri-Pack, JAE, etc.). Standard tools or pliers do not provide consistent crimp force. Solder alone is not acceptable for vibration environments.',
        order: 0
    },

    // MWA F - 9 questions (18.4%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-eps-cal-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'After replacing an EPS rack, what calibration is REQUIRED before the vehicle is driven?',
        options: [
            'Torque sensor calibration (zero point)',
            'Steering angle sensor calibration only',
            'No calibration needed',
            'ABS module calibration'
        ],
        correctIndex: 0,
        explanation: 'EPS rack replacement requires torque sensor calibration (zero point / kiss point learn) via scan tool. The torque sensor (torsion bar + Hall/MR) must learn the zero-torque position. Steering angle sensor calibration is also required but is separate.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-suspension-noise-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A clunk noise occurs over bumps. The sway bar links and bushings are good. The strut mounts are good. What is a commonly missed cause?',
        options: [
            'Lower control arm rear bushing (hydraulic) failed',
            'Spring insulator missing',
            'Strut bearing plate',
            'All of the above'
        ],
        correctIndex: 3,
        explanation: 'Clunk over bumps with good links/bushings/mounts: check hydraulic control arm bushings (fluid leak = failure), spring insulators (missing = metal-on-metal), strut bearing plate (binding = clunk on turn), and subframe mounting bolts (loose). All are commonly missed.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-brake-hose-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A front brake drags after hard braking. The caliper slides freely. The piston retracts when the bleeder is opened. What is the cause?',
        options: [
            'Caliper piston seal failed',
            'Brake hose internal restriction (check valve effect)',
            'Master cylinder pushrod too long',
            'Proportioning valve fault'
        ],
        correctIndex: 1,
        explanation: 'Piston retracts when bleeder opened = pressure trapped in caliper. Brake hose internal liner can separate, acting as a check valve: allows pressure to caliper but blocks return flow. Common on older hoses. Master cylinder pushrod affects all brakes. Proportioning valve affects rear bias.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-abs-sensor-air-gap-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A passive wheel speed sensor has an air gap of 2.5 mm (spec 0.5-1.5 mm). The tone ring is intact. What symptom will this cause?',
        options: [
            'ABS activates at low speed (false activation)',
            'ABS does not activate when needed',
            'Speedometer reads high',
            'No symptoms'
        ],
        correctIndex: 0,
        explanation: 'Excessive air gap on passive WSS = weak AC signal at low speeds. The ABS module loses the signal at low speed, interprets it as wheel lock, and activates ABS falsely (typically <10 km/h). At higher speeds, signal amplitude is sufficient.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-epb-cal-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'After replacing EPB brake pads, what is the mandatory procedure?',
        options: [
            'Pump brake pedal 20 times',
            'Scan tool: EPB service mode retract → install pads → service mode extend → calibration',
            'Manually wind the piston back with pliers',
            'No procedure needed'
        ],
        correctIndex: 1,
        explanation: 'EPB pad replacement: 1) Scan tool "EPB Service Mode" → retract piston. 2) Install pads. 3) Scan tool "Service Mode" → extend piston to contact pads. 4) Calibration (apply/release cycles to learn end-stops). Never manually force the motor — damages gears.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-tire-conicity-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A vehicle pulls left. Front tires swapped side-to-side: pull moves to right. Alignment is within spec. What is the diagnosis?',
        options: [
            'Left front brake drag',
            'Right front tire conicity (radial pull)',
            'Steering rack internal leak',
            'Left front lower control arm bushing failed'
        ],
        correctIndex: 1,
        explanation: 'Pull follows the tire when swapped side-to-side = tire conicity (radial pull). The tire\'s internal construction creates a lateral force. Alignment pull stays with the vehicle. Brake drag is constant. Rack leak causes steering effort difference, not constant pull.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-cdc-sensor-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A CDC (Continuous Damping Control) system has a "Vertical Acceleration Sensor" code. The sensor reads 0 V at rest (spec 2.5 V). What is the cause?',
        options: [
            'Sensor failed',
            'Sensor unplugged',
            'Sensor short to ground',
            'All of the above possible'
        ],
        correctIndex: 3,
        explanation: 'Vertical G sensor at rest should read ~2.5 V (mid-range). 0 V = short to ground, unplugged (pulled low), or internal sensor failure. All three produce 0 V. Check connector, wiring, then sensor.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-wheel-bearing-gen2-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A Gen 2 wheel bearing (flange + bearing pressed into knuckle) is being replaced. What is a critical step?',
        options: [
            'Press bearing in with force on outer race only',
            'Press bearing in with force on inner race only',
            'Use a hydraulic press with correct adapters supporting the knuckle',
            'Heat the knuckle to 200°C'
        ],
        correctIndex: 2,
        explanation: 'Gen 2 bearing replacement: hydraulic press with correct adapters supporting the knuckle (not the bearing). Force must be applied evenly. Heating the knuckle (not bearing) aids installation. Never force on inner race (damages bearing). Never hammer.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-f-brake-fluid-dot4lv-01',
        topicLabel: 'MWA F — Diagnoses and Repairs Steering, Suspension, Braking, Control Systems, Tires, Hubs and Wheel Bearings',
        question: 'A vehicle requires DOT 4 LV brake fluid. The technician uses DOT 4 instead. What is the consequence?',
        options: [
            'No consequence, they are interchangeable',
            'ABS/ESC valve cycling may be impaired at low temperatures',
            'Brake pedal feel will be softer',
            'Boiling point will be higher'
        ],
        correctIndex: 1,
        explanation: 'DOT 4 LV (Low Viscosity) is required for modern ABS/ESC (especially Bosch) for proper valve cycling at low temperatures. DOT 4 has higher viscosity at cold temps, causing sluggish or failed valve operation. DOT 4 LV is backward compatible; DOT 4 is NOT a substitute for DOT 4 LV.',
        order: 0
    },

    // MWA G - 4 questions (8%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-seat-belt-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'A seat belt pretensioner has deployed. What is the repair?',
        options: [
            'Reset the pretensioner with a scan tool',
            'Replace the pretensioner (and seat belt assembly)',
            'Replace the gas generator only',
            'No repair needed, it will reset after 10 key cycles'
        ],
        correctIndex: 1,
        explanation: 'Deployed pretensioners are single-use pyrotechnic devices. They MUST be replaced (typically as part of the seat belt assembly). Cannot be reset. The SRS ECU will also have crash data locked.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-side-airbag-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'A side curtain airbag deploys in a side impact. What other components MUST be inspected/replaced?',
        options: [
            'Only the curtain airbag module',
            'Curtain airbag, headliner, A/B/C pillar trim, and any damaged wiring',
            'Curtain airbag and seat belt pretensioners',
            'Curtain airbag and SRS ECU'
        ],
        correctIndex: 1,
        explanation: 'Curtain airbag deployment tears through the headliner and pillar trim. All damaged trim, headliner, and wiring in the deployment path must be replaced. The SRS ECU may have crash data locked (requires replacement). Pretensioners may or may not deploy depending on impact severity.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-body-sectioning-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'When sectioning a quarter panel, where must the cut be made?',
        options: [
            'At the most convenient location',
            'At the OEM-specified sectioning joint location',
            'At the center of the panel',
            'At the wheel opening'
        ],
        correctIndex: 1,
        explanation: 'OEMs specify exact sectioning locations (joints) for structural integrity. Cutting at random locations compromises crash performance. The repair manual shows the approved joint location, joint type (butt, lap, plug weld), and adhesive/weld requirements.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-g-audio-anti-theft-01',
        topicLabel: 'MWA G — Diagnoses and Repairs Restraint Systems, Body Components, Accessories and Trim',
        question: 'An aftermarket battery disconnect causes the factory radio to display "CODE" or "LOCKED". What is required?',
        options: [
            'Replace the radio',
            'Enter the anti-theft code (from owner\'s manual or dealer)',
            'Disconnect battery for 1 hour',
            'Reprogram the radio with J2534'
        ],
        correctIndex: 1,
        explanation: 'Factory radios have anti-theft protection: power loss triggers lock. The unique code (from owner\'s manual card or dealer VIN lookup) must be entered. Some newer radios use VIN-lock and require J2534 programming, but most still use code entry.',
        order: 0
    },

    // MWA H - 3 questions (7.2%)
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-48v-mhev-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'A 48V MHEV (Mild Hybrid) has a "48V System Fault" code. The 48V battery SOC is 0%. The DC-DC converter is not charging the 12V battery. What is the first safety step?',
        options: [
            'Jump start the 12V battery',
            'De-energize the 48V system (service plug, wait, verify <60V)',
            'Replace the 48V battery',
            'Scan tool "48V System Reset"'
        ],
        correctIndex: 1,
        explanation: 'Any 48V system fault diagnosis MUST start with de-energizing: remove 48V service plug, wait capacitor discharge time (5-10 min), verify <60 V DC at multiple points. 48V = shock hazard. Class 0 gloves, insulated tools required.',
        order: 0
    },
    {
        tradeSlug: 'autoservtech',
        topicId: 'mwa-h-ev-charge-pilot-01',
        topicLabel: 'MWA H — Diagnoses and Repairs Hybrid and Electric Vehicle (EV) Systems',
        question: 'During AC Level 2 charging, the Control Pilot (CPLT) signal measures 6 V (State C). The EVSE is offering 32 A (50% duty cycle). The vehicle does not start charging. What is the next check?',
        options: [
            'OBC AC input voltage',
            'Proximity detect (PP) circuit',
            'EVSE ground fault',
            'All of the above'
        ],
        correctIndex: 3,
        explanation: 'State C (6 V) = vehicle ready, vent not required. No charge start: check OBC AC input (contactor closed?), PP circuit (cable rating detected?), EVSE ground fault, OBC-BMS CAN communication, and BMS charge permission (SOC, temp, cell voltage).',
        order: 0
    }
];
