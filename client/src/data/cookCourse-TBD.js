
const cookCourse = {

    parts: [
        // ============================================================
        // STEP 2B — PART 1 FRAGMENT (MWA A: Hygiene, sanitation and safety)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020; Appendix C Glossary; exam-information page.
        // ============================================================
        {
            id: 'part-1',
            number: 1,
            title: 'Hygiene, Sanitation and Safety (MWA A)',
            description: 'The foundation of the trade: the official Red Seal glossary, safe work practices, PPE, personal hygiene, tools and equipment, and the food safety procedures that protect every guest. MWA A carries 13 exam questions across tasks A-1 and A-2.',
            weight: '13 questions (8.7% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 1 — MASTER GLOSSARY (FREE)
                // ============================================================
                {
                    id: 'ch-01',
                    number: 1,
                    title: 'Master Glossary',
                    subtitle: 'Official Red Seal terms and acronyms for the Cook trade',
                    isFree: true,
                    estimatedMinutes: 25,
                    sections: [
                        {
                            id: 'ch01-s1',
                            title: '1.1 Official Red Seal Glossary Terms',
                            content: [
                                {
                                    type: 'text',
                                    text: 'These terms come from Appendix C of the Red Seal Occupational Standard (RSOS) for Cook. Exam questions use this vocabulary, so learn each term until you can recognize it in a scenario without hesitation.',
                                },
                                { type: 'keyTerm', term: 'Bain-marie', definition: 'A container of hot water designed to keep foods hot and/or to cook them slowly.' },
                                { type: 'keyTerm', term: 'Batter', definition: 'A semi-liquid mixture of flour or other starches.' },
                                { type: 'keyTerm', term: 'Béchamel', definition: 'A white sauce prepared with milk and white roux.' },
                                { type: 'keyTerm', term: 'Broth', definition: 'A thin, flavoured liquid prepared primarily from simmering meats; bones and vegetables may also be added.' },
                                { type: 'keyTerm', term: 'Convenience food', definition: 'Typically a complete meal that has been pre-prepared commercially and so requires little cooking by the consumer.' },
                                { type: 'keyTerm', term: 'Condiment', definition: 'Traditionally, any item added to a dish for flavour (including herbs, spices and vinegars); also cooked or prepared flavourings or accompaniments such as relishes, prepared mustards, ketchup, bottled sauces and pickles.' },
                                { type: 'keyTerm', term: 'Dégustation', definition: 'The act of sampling a wide variety of foods, wines, etc.' },
                                { type: 'keyTerm', term: 'Farm to table', definition: 'A trend in the industry where food products are sourced directly from local producers.' },
                                { type: 'keyTerm', term: 'Forager', definition: 'A reliable and high-quality supplier of wild mushrooms, greens and berries.' },
                                { type: 'keyTerm', term: 'Game', definition: 'Wild mammals and birds raised for the consumption of their flesh.' },
                                { type: 'keyTerm', term: 'Garde-manger', definition: 'A cool, well-ventilated area where cold dishes (such as salads, hors d’œuvres, appetizers, canapés, pâtés and terrines) are prepared and other foods are stored under refrigeration.' },
                                { type: 'keyTerm', term: 'Garnish, to', definition: 'To add a decorative yet edible item to a finished dish; also the visible, cut items in finished soups and salads.' },
                                { type: 'keyTerm', term: 'Ghost kitchen', definition: 'Also known as a ghost restaurant, delivery-only restaurant or online-only restaurant: a food service business that serves consumers exclusively through phone orders or online food ordering, without the need for a full-service restaurant premises.' },
                                { type: 'keyTerm', term: 'Grade', definition: 'The quality, rating and standards of food products.' },
                                { type: 'keyTerm', term: 'Hors d’œuvre', definition: 'An appetizer or starter; a small dish served before a meal in European cuisine. Some are served cold, others hot.' },
                                { type: 'keyTerm', term: 'Home meal replacement (HMR)', definition: 'Fully or partially prepared meals.' },
                                { type: 'keyTerm', term: 'Indigenous perspective', definition: 'The cultural integration of thought, production and distribution among Indigenous societies; in this trade, it refers to Indigenous and traditional food.' },
                                { type: 'keyTerm', term: 'Lock-out', definition: 'A safety procedure used to ensure that machines are properly shut off and not able to be started up again before maintenance or repair work is complete.' },
                                { type: 'keyTerm', term: 'Marinate, to', definition: 'To add a marinade to foods in order to add flavour or moisten them. Marinades may be dry or liquid, usually based on an acidic ingredient to tenderize, an oil to preserve and a flavouring agent; dry marinades are usually salt based.' },
                                { type: 'keyTerm', term: 'Mise en place', definition: 'Setting up for production and having everything in its proper place.' },
                                { type: 'keyTerm', term: 'Sensory assessment', definition: 'Methods used to measure, analyze and interpret human responses to foods or materials using taste, smell, touch, sight and hearing.' },
                                { type: 'keyTerm', term: 'Pastry', definition: 'A dough of flour, fat and water used as a base and covering for sweet and savoury pies, tarts, etc.' },
                                { type: 'keyTerm', term: 'Portion, to', definition: 'To divide a large quantity into several servings.' },
                                { type: 'keyTerm', term: 'Produce', definition: 'Fresh fruits and vegetables.' },
                                { type: 'keyTerm', term: 'Recipe', definition: 'Instructions for preparing a dish that include the necessary ingredients.' },
                                { type: 'keyTerm', term: 'Seafood', definition: 'Edible sea fish or shellfish.' },
                                { type: 'keyTerm', term: 'Shuck, to', definition: 'To remove the rigid external shell from oysters, mussels and clams.' },
                                { type: 'keyTerm', term: 'Stock', definition: 'A clear, thin, flavoured liquid prepared from simmering bones, vegetables and aromatics.' },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Stock versus broth is a classic knowledge question. Stock is made mainly from bones, vegetables and aromatics and is used as a building block for sauces and soups. Broth is made primarily from simmering meat and can be served as it is.',
                                },
                            ],
                        },
                        {
                            id: 'ch01-s2',
                            title: '1.2 Official Red Seal Acronyms',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The Red Seal exam information page lists AP, EP and PPE as the official acronyms for this trade, and they are provided with the exam sitting. The remaining acronyms appear throughout the Cook standard and are used in this course, so you should know them too.',
                                },
                                { type: 'acronym', term: 'AP', definition: 'As-Purchased' },
                                { type: 'acronym', term: 'EP', definition: 'Edible Portion' },
                                { type: 'acronym', term: 'PPE', definition: 'Personal Protective Equipment' },
                                { type: 'acronym', term: 'HACCP', definition: 'Hazard Analysis Critical Control Points' },
                                { type: 'acronym', term: 'WHMIS', definition: 'Workplace Hazardous Materials Information System' },
                                { type: 'acronym', term: 'OH&S', definition: 'Occupational Health and Safety' },
                                { type: 'acronym', term: 'SDS', definition: 'Safety Data Sheet' },
                                { type: 'acronym', term: 'FIFO', definition: 'First In, First Out' },
                                { type: 'acronym', term: 'AED', definition: 'Automatic External Defibrillator' },
                                { type: 'acronym', term: 'QSR', definition: 'Quick-Service Restaurant' },
                                { type: 'acronym', term: 'HMR', definition: 'Home Meal Replacement' },
                                { type: 'acronym', term: 'BEO', definition: 'Banquet Event Order' },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'AP and EP matter for costing. As-Purchased weight is what you buy; Edible Portion is what is left after trimming, peeling, boning and cooking loss. Yield percentage = EP weight divided by AP weight, multiplied by 100. These two terms feed directly into the Critical Thinking questions on the exam.',
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [],
                },

                // ============================================================
                // CHAPTER 2 — SAFETY ON THE JOB (FREE) — Task A-1
                // ============================================================
                {
                    id: 'ch-02',
                    number: 2,
                    title: 'Safety on the Job',
                    subtitle: 'Task A-1 · Performs safety and hygiene-related functions (5 exam questions)',
                    isFree: true,
                    estimatedMinutes: 50,
                    sections: [
                        {
                            id: 'ch02-s1',
                            title: '2.1 Maintaining a Safe Work Environment (A-1.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cooks work in hot, fast, space-restricted kitchens, so the leading hazards are burns, cuts, slips and falls, and strains from lifting. A safe kitchen is not an accident of good luck. It is the result of habits: spotting hazards early, reporting them, keeping floors and stations clear, storing chemicals and sharp tools correctly, and knowing what to do when something goes wrong.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Jurisdictional regulations',
                                    definition: 'The rules a cook must follow, set by the province or territory and by company policy. The RSOS names four: WHMIS (hazardous products), HACCP (food safety system), OH&S (workplace health and safety) and public health regulations (food premises).',
                                },
                                {
                                    type: 'table',
                                    headers: ['Potential Hazard', 'Typical Kitchen Example', 'Correct Response'],
                                    rows: [
                                        ['Water and spills', 'Wet floor near the dish pit or a dropped sauce', 'Wipe up immediately, place a cautionary sign until the floor is dry, report if the source is a leak'],
                                        ['Debris and clutter', 'Boxes in walkways, trim on the floor, tools left on the counter edge', 'Clear and clean walkways; keep the workstation clutter-free'],
                                        ['Exposed electrical wires', 'Frayed cord on a mixer or slicer', 'Stop use, disconnect if safe, tag the item and report it'],
                                        ['Uneven floors', 'Lifted mat, broken tile, drain cover out of place', 'Mark the area, report it and do not carry hot or heavy loads over it'],
                                        ['Unidentified liquids and chemicals', 'Unlabelled spray bottle or bucket', 'Do not use it; locate the SDS or report it to the supervisor'],
                                        ['Fire', 'Grease build-up on a range hood, an overheated fryer', 'Use the correct extinguisher or fire blanket only if trained and safe; otherwise raise the alarm and evacuate'],
                                        ['Poor lighting and inadequate ventilation', 'Dim prep area, steam-filled dish room', 'Report it; both increase the risk of cuts, burns and falls'],
                                        ['Damaged furniture, fixtures and equipment', 'Wobbly shelf, cracked cutting board, loose range knob', 'Remove from service, tag it and report it'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Clear and clean walkways every shift: remove obstacles, wipe up spills, place cautionary signage and report problems.',
                                        'Clean the workstation by washing, rinsing and sanitizing work surfaces with a prepared and tested sanitizing solution.',
                                        'Keep the workstation clutter-free by removing unneeded tools, equipment, food and debris.',
                                        'Store hazardous products locked up, and store hazardous equipment and utensils (for example knives and slicer blades) according to company policy.',
                                        'Complete the cleaning task list daily, weekly and monthly.',
                                        'Secure workstations when not in use by removing knives, disconnecting electrical appliances, shutting down appliances, wiping up spills and placing signage.',
                                        'Know where the safety exits and assembly areas are, and know the emergency procedures.',
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Lock-out',
                                    definition: 'A safety procedure used to ensure that a machine is properly shut off and cannot be started again before maintenance or repair work is complete. In a kitchen it applies to slicers, grinders, mixers and similar equipment being cleaned, disassembled or repaired.',
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never clean, adjust or disassemble a slicer, grinder, mixer or food processor while it is plugged in. Turn it off, disconnect or lock it out, and confirm it cannot start before your hands go near the blade or moving parts.',
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never use water on a grease or oil fire. Water causes the burning fat to spatter and spread. Shut off the heat source if it is safe to do so, cover a small pan fire with a lid or fire blanket, and use a Class K extinguisher designed for cooking oils and fats. If the fire is not immediately controlled, activate the alarm and evacuate.',
                                },
                            ],
                        },
                        {
                            id: 'ch02-s2',
                            title: '2.2 WHMIS, SDS and Hazardous Products',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Kitchens use hazardous products every day: degreasers, oven cleaners, sanitizers and descaling agents. WHMIS is the national system that tells workers what these products are, what the hazards are and how to use them safely. Chemical hazards are communicated in three ways: the supplier label, the workplace label and the Safety Data Sheet.',
                                },
                                {
                                    type: 'table',
                                    headers: ['WHMIS Element', 'What It Tells You', 'Kitchen Application'],
                                    rows: [
                                        ['Supplier label', 'Product identifier, hazard pictograms, signal word (Danger or Warning), hazard statements, precautionary statements', 'Read it before first use of any cleaner or sanitizer; never remove or deface it'],
                                        ['Workplace label', 'Required when a product is poured into a secondary container such as a spray bottle', 'Label every spray bottle and pail of prepared sanitizer with the product name, concentration and date'],
                                        ['Safety Data Sheet (SDS)', 'Detailed 16-section document: hazards, first aid, fire fighting, handling and storage, exposure controls and PPE', 'Must be on site and accessible to every worker; consult it for spills, splashes and exposure'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Pictogram', 'Hazard Class', 'Kitchen Example'],
                                    rows: [
                                        ['Flame', 'Flammable', 'Aerosol cleaners, alcohol-based products'],
                                        ['Gas cylinder', 'Gas under pressure', 'Propane, CO2 and nitrogen cylinders'],
                                        ['Corrosion', 'Corrosive to skin, eyes and metals', 'Oven cleaner, drain cleaner, some degreasers'],
                                        ['Exclamation mark', 'Irritant or acute toxicity (lower severity)', 'Many sanitizers and detergents'],
                                        ['Health hazard', 'Serious long-term health effects', 'Some strong solvents and cleaning chemicals'],
                                        ['Skull and crossbones', 'Acute toxicity, fatal or toxic', 'Pest control products'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Never mix cleaning products. Chlorine bleach mixed with acid or ammonia-based products releases toxic gas.',
                                        'Always add chemical to water as directed by the label, not water to chemical, and measure with the proper dispenser or test strips rather than guessing.',
                                        'Store hazardous products locked up, away from food, and below food storage areas so a leak cannot drip onto food.',
                                        'Know where the eye-wash station and the SDS binder are before you need them.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'If a question describes an unlabelled spray bottle, a product decanted into an unmarked container, or a chemical splash, the correct answer almost always involves the label and the SDS: label it, read it, or consult it.',
                                },
                            ],
                        },
                        {
                            id: 'ch02-s3',
                            title: '2.3 Safe Work Practices: Lifting, Posture, Fatigue (A-1.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cooks lift heavy pots, stock pails, cases and sacks and stand for long shifts. The RSOS lists proper lifting, hoisting and transferring procedures and safe posture and movements as safe work practices. It also expects cooks to recognize the risks that physical and mental impairment bring to the job.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Situation', 'Unsafe Practice', 'Safe Practice'],
                                    rows: [
                                        ['Lifting a heavy stockpot or case', 'Bending at the waist, twisting while carrying', 'Bend the knees, keep the load close, keep the back straight, turn with the feet, and ask for help for heavy loads'],
                                        ['Moving a hot stockpot', 'Carrying it alone through a busy kitchen', 'Do not carry full pots of hot liquid; ladle into smaller containers or use a pot with a spigot, call out a warning and clear the path'],
                                        ['Reaching for items on a high shelf', 'Standing on a milk crate or box', 'Use a stable step stool or ladder; store heavy items between knee and shoulder height'],
                                        ['Standing for long periods', 'Locking knees, no breaks, worn-out shoes', 'Wear supportive non-slip footwear, shift weight, use anti-fatigue mats and take scheduled breaks'],
                                        ['Working while impaired', 'Working with illness, extreme fatigue, alcohol or drug impairment', 'Report it to the supervisor; impairment raises the risk of cuts, burns and food safety mistakes for everyone'],
                                    ],
                                },
                            ],
                        },
                        {
                            id: 'ch02-s4',
                            title: '2.4 Personal Protective Equipment and Safety Equipment (A-1.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'PPE protects the worker; safety equipment protects everyone in the kitchen. The cook must know how to choose the right item for the task, where it is kept, and how to recognize when it is worn, defective or expired.',
                                },
                                {
                                    type: 'table',
                                    headers: ['PPE Item', 'Use in the Kitchen', 'Notes'],
                                    rows: [
                                        ['Industry-specific clothing and approved footwear', 'Worn on every shift', 'Protects the cook from injury and protects food from contamination; footwear must be closed-toe and non-slip'],
                                        ['Goggles', 'Handling strong chemicals, using a pressure sprayer, working near spattering fat', 'Choose splash-proof goggles when the task involves splash risk'],
                                        ['Respirators', 'Some chemical tasks per the SDS', 'Select according to the SDS and jurisdictional regulations'],
                                        ['Rubber or latex gloves (chemical)', 'Handling cleaners and sanitizers; dishwashing', 'Check for tears; be aware of latex allergies'],
                                        ['Cut-resistant gloves', 'Mandoline use, slicer cleaning, shucking, breaking down fish', 'Protect against cuts but do not make you safe near moving blades'],
                                        ['Heat-resistant gloves', 'Handling hot pans, oven racks, fryer baskets', 'A wet oven mitt conducts heat; keep mitts dry'],
                                        ['Rubber aprons', 'Dish pit, chemical handling, butchery', 'Keep clean; they stay on the cook, not the food'],
                                        ['Non-slip protective footwear', 'All shifts', 'Replace when the tread is worn or the soles are cracked'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Safety Equipment', 'Purpose', 'Key Points'],
                                    rows: [
                                        ['Fire extinguisher', 'Controls small fires', 'Know the class; Class K is for cooking oils and fats; use the PASS method (Pull, Aim, Squeeze, Sweep)'],
                                        ['Fire blanket', 'Smothers a small pan fire or a person on fire', 'Mount where it is quick to reach, away from the stove it protects'],
                                        ['Eye-wash station', 'Flushes chemical splashes from the eyes', 'Must be unobstructed; flush for the time stated on the SDS (commonly 15 minutes) and seek medical help'],
                                        ['WHMIS station', 'Holds the SDS binder and chemical information', 'Must be accessible to every worker'],
                                        ['First aid kit', 'Treats minor cuts and burns', 'Check stock and expiry dates; blue waterproof bandages make a lost bandage visible in food'],
                                        ['Automatic External Defibrillator (AED)', 'Treats sudden cardiac arrest', 'Know where it is located and follow its voice prompts'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Locate PPE and safety equipment at the start of the job, according to jurisdictional regulations.',
                                        'Select PPE according to the task being performed, the regulations and company policy.',
                                        'Identify worn, defective and expired PPE and safety equipment by inspecting it and using sensory assessment: look for cracks, tears, discolouration, damage and expiry dates.',
                                        'Remove damaged PPE from service and replace it before starting the task.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Chemical burns to the eyes need immediate flushing. Go to the eye-wash station at once, hold the eyelids open, flush continuously and have someone call for medical help. Do not wait to finish the task and do not rub the eyes.',
                                },
                            ],
                        },
                        {
                            id: 'ch02-s5',
                            title: '2.5 Personal Hygiene (A-1.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'People are the most common source of food contamination. Personal hygiene is the cook\u2019s first line of defence against food-borne illness, and it is tested directly on the exam.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Hygiene Practice', 'Why It Matters', 'Standard'],
                                    rows: [
                                        ['Handwashing', 'Hands are the main way germs reach food', 'Wet hands with warm water, apply soap, scrub for at least 20 seconds including between fingers, under nails and wrists, rinse, dry with a single-use towel and turn off the tap with the towel'],
                                        ['Clean work attire', 'Soiled clothing carries bacteria', 'Wear a clean apron, pants, shirt, jacket and hat every shift; change when soiled'],
                                        ['Hair and beard nets and hats', 'Prevents hair from falling into food', 'Cover all hair; use beard nets where required by regulation'],
                                        ['Short, clean nails', 'Nails trap soil and bacteria', 'Keep nails short and clean; no nail polish or artificial nails near food preparation'],
                                        ['No jewelry or accessories', 'Jewelry traps bacteria and can fall into food', 'Remove rings, bracelets, watches and fragrances according to company policy; a plain wedding band may be permitted by some policies'],
                                        ['Cover cuts and wounds', 'Open wounds shed bacteria such as Staphylococcus aureus', 'Cover with a clean, waterproof bandage and a glove over it; a wound on the hand or arm that cannot be covered means reassignment'],
                                        ['Illness', 'Sick workers spread illness quickly', 'Report vomiting, diarrhea, fever, jaundice or sore throat with fever; stay off food handling until cleared by the supervisor or health authority'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Communicable illnesses (food handlers)',
                                    definition: 'Illnesses that can pass from a worker to food and consumers. The RSOS names gastro-intestinal illnesses, hepatitis and Norwalk virus (norovirus). Workers with these must not handle food.',
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'A cook with vomiting or diarrhea must not work with food. Norovirus spreads through very small amounts of contamination, and a single ill food handler can cause an outbreak affecting dozens of guests.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Wash hands: when starting work, after using the washroom, after handling raw meat, poultry, fish, seafood or eggs, after touching hair, face, cell phone or garbage, after cleaning, after eating or smoking, and any time hands may have become contaminated. Gloves are not a substitute for handwashing; change gloves when they become soiled or torn or when switching tasks.',
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [],
                },

                // ============================================================
                // CHAPTER 3 — TOOLS AND EQUIPMENT (FREE) — Task B-3
                // ============================================================
                {
                    id: 'ch-03',
                    number: 3,
                    title: 'Tools and Equipment',
                    subtitle: 'Task B-3 · Uses tools and equipment — knives, pots, pans, utensils, equipment and appliances (2 exam questions)',
                    isFree: true,
                    estimatedMinutes: 55,
                    sections: [
                        {
                            id: 'ch03-s1',
                            title: '3.1 Knives (B-3.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The knife is the cook\u2019s most personal tool. Select the right knife for the job, keep it sharp and clean, store it safely and use the correct cutting surface. A dull knife is more dangerous than a sharp one because it needs more force and slips.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Knife', 'Characteristics', 'Typical Use'],
                                    rows: [
                                        ['French (chef) knife', 'Broad, tapered blade 20–30 cm with a curved belly', 'All-purpose slicing, dicing, chopping and mincing'],
                                        ['Paring knife', 'Short blade 6–9 cm', 'Peeling, trimming, turning vegetables and fine detail work'],
                                        ['Boning knife', 'Narrow, pointed, flexible or semi-flexible blade', 'Removing bones and trimming fat and silverskin from meat and poultry'],
                                        ['Filleting knife', 'Long, thin, highly flexible blade', 'Filleting and skinning fish'],
                                        ['Cleaver', 'Heavy, rectangular blade', 'Chopping through bone, breaking down poultry and ribs'],
                                        ['Carving knife (slicer)', 'Long, thin blade, sometimes with a granton edge', 'Slicing cooked roasts, hams and poultry'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Material', 'Advantages', 'Disadvantages'],
                                    rows: [
                                        ['Stainless steel', 'Resists rust and stains; low maintenance', 'Can be harder to sharpen; may not hold an edge as long'],
                                        ['Carbon steel', 'Takes a very sharp edge and sharpens easily', 'Rusts and discolours; must be dried and oiled; reacts with acidic foods'],
                                        ['Ceramic', 'Very hard, keeps its edge a long time, does not rust', 'Brittle; can chip or snap; needs professional sharpening'],
                                        ['Wood and polypropylene (handles and boards)', 'Wood handles feel good; polypropylene is non-porous and dishwasher-safe', 'Wood absorbs moisture and bacteria if neglected; polypropylene handles may be slippery when wet'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Sharpening Tool', 'Purpose', 'Notes'],
                                    rows: [
                                        ['Whetstone', 'Removes metal to create a new edge', 'Soak or lubricate as directed; hold a consistent angle'],
                                        ['Steel (honing rod)', 'Realigns the edge between sharpenings; does not remove much metal', 'Use frequently, before and during a shift'],
                                        ['Pull sharpener', 'Quick edge for casual use', 'Convenient but removes more metal; use sparingly'],
                                        ['Electric sharpener', 'Fast and consistent angle', 'Follow manufacturer\u2019s instructions to avoid overheating the blade'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Cutting Surface', 'Properties', 'Use'],
                                    rows: [
                                        ['Wood', 'Gentle on knife edges; needs careful cleaning; not for raw poultry in some jurisdictions', 'Bread, produce, cooked items per policy'],
                                        ['Plastic (polyethylene)', 'Non-porous, dishwasher-safe, easy to sanitize; replace when deeply scored', 'General use'],
                                        ['Colour-coded surfaces', 'Each colour assigned to a food group to prevent cross-contamination', 'Common scheme: red raw meat, yellow raw poultry, blue raw fish, green produce, white dairy and bakery'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Inspect knives for cleanliness, sharpness and damage before use.',
                                        'Wash, dry and sanitize knives according to type, company policy and regulations; never leave a knife soaking in a sink where someone may reach in blind.',
                                        'Store knives to protect both the edge and the people: knife block, magnetic strip, blade guards or knife roll.',
                                        'Carry a knife point down, close to the body and parallel to the leg; announce yourself when walking behind others.',
                                        'Never try to catch a falling knife; step back and let it fall.',
                                        'Use the claw grip with the guiding hand and keep the tip of the knife on the board for rocking cuts.',
                                        'Put a damp cloth or non-slip mat under the cutting board to keep it from sliding.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never use a knife as a screwdriver, can opener or pry bar, and never cut toward your hand or body. Cuts that go through a glove can still injure and can also contaminate the food.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Exam logic on knives: the boning knife removes bone and trims excess fat and tissue; the filleting knife is for fish; the French knife is the all-purpose knife; the steel realigns an edge but does not truly sharpen it; the whetstone sharpens.',
                                },
                            ],
                        },
                        {
                            id: 'ch03-s2',
                            title: '3.2 Pots, Pans and Utensils (B-3.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The pot or pan you choose affects heat transfer, cooking time and the finished product. The utensil you choose must not damage the pan: metal on a non-stick pan removes the coating, and a wooden spoon left in a hot pan will char.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Pot or Pan', 'Typical Use'],
                                    rows: [
                                        ['Braising pan (brazier)', 'Wide, heavy, lidded pan for braising meats and large cuts'],
                                        ['Roasting pan', 'Large, heavy-gauge pan for roasting meats and poultry in the oven'],
                                        ['Sauté pan', 'Flat bottom with straight or slightly sloped sides for sautéing and pan sauces'],
                                        ['Stockpot', 'Tall, narrow pot for stocks, broths, soups and blanching'],
                                        ['Wok', 'Rounded bowl for stir-frying over high heat'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Pan Material', 'Properties', 'Care'],
                                    rows: [
                                        ['Copper', 'Excellent, responsive heat conduction', 'Often lined with tin or stainless steel; polish and avoid abrasives'],
                                        ['Stainless steel', 'Durable, non-reactive, does not rust; poor conductor on its own, so often bonded with aluminum or copper', 'Wash after use; avoid steel wool on polished finishes'],
                                        ['Aluminum', 'Light and a good conductor; reactive with acidic foods unless anodized or lined', 'Avoid cooking acidic sauces in uncoated aluminum'],
                                        ['Non-stick coated', 'Food releases easily with little fat; coating wears out', 'Use medium heat, non-metal utensils and gentle cleaning'],
                                        ['Cast iron', 'Heavy, holds heat very well', 'Season with oil; dry immediately; avoid long acidic simmering'],
                                        ['Ceramic and stoneware', 'Even, gentle heat for baking and slow cooking', 'Avoid thermal shock such as moving from freezer to hot oven'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Utensil', 'Material-Appropriate Choice'],
                                    rows: [
                                        ['Wooden spoons', 'Hard wood; safe on all pans but must be kept clean and replaced when cracked'],
                                        ['Whisks', 'Stainless steel for most tasks; use a coated or silicone-covered whisk on non-stick pans'],
                                        ['Spatulas', 'High-heat silicone for non-stick pans and high heat'],
                                        ['Tongs, tweezers, scissors', 'Stainless steel for durability; silicone-tipped tongs for non-stick surfaces'],
                                        ['Bamboo utensils', 'Gentle on non-stick surfaces'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select the pot or pan according to the recipe and the desired results.',
                                        'Inspect pots, pans and utensils for loose handles, warping, damaged coatings and cracks before use.',
                                        'Wash, sanitize and dry pots, pans and utensils to prevent unsanitary conditions, and store them to maximize efficiency and prevent damage.',
                                        'Control heat to avoid damaging pans: do not heat an empty non-stick pan, do not plunge a hot pan into cold water, and do not overheat pans with plastic handles.',
                                        'Turn pot handles inward over the stove so they cannot be knocked or caught, but not over another hot burner.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Always lift pot lids away from your face to direct steam away from you, and never carry full pots of hot liquid through a busy kitchen. Steam and spilled hot liquid cause serious burns.',
                                },
                            ],
                        },
                        {
                            id: 'ch03-s3',
                            title: '3.3 Equipment and Appliances (B-3.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Commercial kitchens use powerful equipment, and every machine has its own hazards. The standard expects cooks to select, operate, inspect, assemble, disassemble, store, clean, sanitize and maintain equipment according to manufacturer specifications, company policy and regulations.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Equipment', 'Use', 'Key Safety and Care Points'],
                                    rows: [
                                        ['Stoves and ovens', 'Cooking by direct heat, convection or combi steam', 'Keep clear of grease build-up; use oven mitts; open oven doors away from the face; combi-ovens need descaling per manufacturer'],
                                        ['Deep fryers', 'Frying', 'Never overfill oil; keep food dry before lowering it; filter oil regularly; allow oil to cool before moving or draining; never leave the fryer unattended'],
                                        ['Meat grinders', 'Grinding meat and poultry', 'Use the stomper, never fingers; keep equipment and meat cold; disassemble completely for cleaning; lock out before cleaning'],
                                        ['Slicers', 'Slicing meats, cheese and produce', 'Keep the guard in place; zero the blade when not in use; use cut-resistant gloves for cleaning; lock out before cleaning'],
                                        ['Mixers', 'Mixing dough, batters, creams and meat', 'Use the guard; do not reach in while moving; match the attachment to the task; unplug before changing or cleaning'],
                                        ['Food processors', 'Chopping, puréeing, emulsifying', 'Handle blades by the hub; do not overfill with hot liquids; wait for the blade to stop'],
                                        ['Vacuum packaging machines', 'Sous-vide, storage and portioning', 'Cool food before sealing; keep sealing bars clean; follow labelling and dating practices'],
                                        ['Thermometers', 'Checking food and equipment temperatures', 'Calibrate regularly; clean and sanitize between uses'],
                                        ['Scales', 'Weighing for recipes, portioning and receiving', 'Zero before use; check calibration; keep the scale clean and dry'],
                                        ['Refrigeration equipment', 'Cold storage and holding', 'Monitor and record temperatures; keep doors closed; do not overload; defrost and clean on schedule'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Maintenance Task', 'What It Involves'],
                                    rows: [
                                        ['Oiling', 'Applying food-grade lubricant to bearings and moving parts as directed by the manufacturer'],
                                        ['Calibrating', 'Checking and adjusting thermometers, scales and oven thermostats against a known standard'],
                                        ['Lubricating', 'Reducing friction on moving parts using only approved food-grade products'],
                                        ['Cleaning', 'Disassembling, cleaning, sanitizing and reassembling parts according to manufacturer instructions'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never remove, bypass or disable a machine guard. Never reach into a running machine, and never wear loose sleeves, jewelry or untied hair near a mixer, grinder or slicer. Always disconnect or lock out the machine before cleaning or clearing a jam.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'To calibrate a thermometer in the kitchen, use the ice-point method: fill a container with crushed ice and water, immerse the probe without touching the sides or bottom and adjust until it reads 0 \u00b0C. Boiling-point calibration reads 100 \u00b0C at sea level and varies with altitude.',
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [],
                },

                // ============================================================
                // CHAPTER 4 — FOOD SAFETY PROCEDURES — Task A-2
                // ============================================================
                {
                    id: 'ch-04',
                    number: 4,
                    title: 'Food Safety Procedures',
                    subtitle: 'Task A-2 · Practices food safety procedures (8 exam questions)',
                    isFree: false,
                    estimatedMinutes: 70,
                    sections: [
                        {
                            id: 'ch04-s1',
                            title: '4.1 Safe Condition and Temperature of Food (A-2.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Practicing food safety procedures is the most critical component of the food service industry. It protects customers and employees. The core idea is temperature control: keep potentially hazardous food out of the danger zone, cook it to a safe internal temperature, and hold it safely until it is served.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Danger zone',
                                    definition: 'The temperature range in which bacteria multiply most quickly. In Canada it is generally 4 \u00b0C to 60 \u00b0C. Potentially hazardous food should spend as little time as possible in this range, and the total time in the zone is cumulative.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Potentially hazardous food',
                                    definition: 'Moist, protein-rich, low-acid foods that support bacterial growth, such as meat, poultry, fish and seafood, dairy products, eggs, cooked rice, cooked beans and cut melons.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Control Point', 'Typical Canadian Guideline', 'Notes'],
                                    rows: [
                                        ['Cold holding', '4 \u00b0C or colder', 'Refrigerators must be monitored and recorded'],
                                        ['Frozen storage', '-18 \u00b0C or colder', 'Thaw only in the refrigerator, under cold running water or as part of cooking'],
                                        ['Hot holding', '60 \u00b0C or hotter', 'Never use hot-holding equipment to heat food up; reheat first'],
                                        ['Whole poultry', '85 \u00b0C', 'Measured in the thickest part of the thigh or breast'],
                                        ['Poultry pieces and ground poultry', '74 \u00b0C', 'Insert the thermometer in the thickest part'],
                                        ['Ground meat (beef, veal, lamb, pork)', '71 \u00b0C', 'Grinding spreads surface bacteria through the whole product'],
                                        ['Fresh pork and ham', '71 \u00b0C', ''],
                                        ['Beef, veal and lamb steaks and roasts', '63 \u00b0C (medium-rare) up to 71 \u00b0C (medium)', 'Higher for well done; the whole piece must reach temperature'],
                                        ['Fish and seafood', '70 \u00b0C', 'Flesh should be opaque and separate easily'],
                                        ['Egg dishes and leftovers', '74 \u00b0C', 'Reheated food must reach 74 \u00b0C quickly'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Temperature figures differ slightly between provinces and territories. When an exam question gives a regulation or a company policy, follow the information in the question. Otherwise remember the main anchors: 4 \u00b0C cold, 60 \u00b0C hot, 74 \u00b0C for poultry pieces, ground poultry, egg dishes and reheating, and 71 \u00b0C for ground meat and pork.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Thermometer Type', 'How It Works', 'Best Use'],
                                    rows: [
                                        ['Digital probe', 'Electronic sensor with a fast digital readout', 'Most food temperatures, including thin foods when the tip is in the centre'],
                                        ['Analog (bimetallic stem)', 'Dial thermometer; the sensing area is along the stem, so insert at least 5 cm', 'Large roasts and holding temperatures; needs regular calibration'],
                                        ['Laser (infrared)', 'Measures surface temperature without contact', 'Surfaces and packaged goods only; it does not measure internal temperature'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Verify and record that food reaches the required internal temperature, checking at specific intervals with a thermometer.',
                                        'Read the thermometer according to manufacturer instructions; the probe tip must be in the thickest part, away from bone, fat and the pan.',
                                        'Clean and sanitize the probe between products and calibrate it regularly.',
                                        'Monitor the temperature of equipment (refrigerators, freezers, hot-holding cabinets, bain-maries) and keep the logs.',
                                        'Hold and store finished products at the correct temperature and for no longer than company policy and regulations allow.',
                                        'Take corrective measures when a product is out of range: continue cooking or cooling, reheat or chill, and record what was done.',
                                        'Discard product that cannot be corrected, according to company policy and regulations. When in doubt, throw it out.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Food-borne Hazard', 'Examples', 'Prevention'],
                                    rows: [
                                        ['Biological', 'Salmonella, E. coli O157:H7, Listeria, Campylobacter, norovirus, hepatitis A, Staphylococcus aureus, Clostridium perfringens, Bacillus cereus', 'Time and temperature control, handwashing, avoiding cross-contamination, excluding ill workers'],
                                        ['Chemical', 'Cleaners, sanitizers, pesticides, toxic metals, allergens', 'Store chemicals away from food, label containers, follow the SDS, use the correct sanitizer concentration'],
                                        ['Physical', 'Glass, metal shavings, bandage, hair, jewelry, bone fragments', 'Inspect food, use blue bandages, cover hair, remove jewelry, never use glass near open food'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never taste food to decide whether it is safe. Spoilage you can smell or see is not the same as pathogens, which cannot be detected by sight, smell or taste. Rely on time, temperature and records.',
                                },
                            ],
                        },
                        {
                            id: 'ch04-s2',
                            title: '4.2 Cooling Food Rapidly (A-2.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Large batches of hot food stay warm in the middle for a long time, which gives bacteria and spores the time they need to grow. Rapid cooling gets food through the danger zone as quickly as possible.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Cooling Method', 'How It Works', 'Notes'],
                                    rows: [
                                        ['Divide into smaller batches', 'Smaller volume and more surface area cool faster', 'Use shallow, wide pans no more than about 5 cm deep'],
                                        ['Ice bath', 'A sink or container of ice and water around the pot', 'Stir often; keep the ice-water level at or above the product level'],
                                        ['Ice wand (cooling paddle)', 'A frozen, food-safe paddle placed in the liquid', 'Stir to circulate; ideal for stocks, soups and sauces'],
                                        ['Refrigerated unit', 'Moving product into the walk-in or reach-in', 'Only after the product has been pre-cooled; leave space around containers for airflow; do not put a large hot pot straight into a refrigerator'],
                                        ['Blast chiller', 'A machine that rapidly drops the temperature with high-velocity cold air', 'Fastest method and best for large volumes; follow the manufacturer cycle'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Two-Stage Cooling (typical guideline)', 'Target'],
                                    rows: [
                                        ['Stage 1', 'From 60 \u00b0C to 20 \u00b0C within 2 hours'],
                                        ['Stage 2', 'From 20 \u00b0C to 4 \u00b0C within a further 4 hours (6 hours total)'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select the cooling method and vessel according to the product and its volume; shallow metal pans cool faster than deep plastic containers.',
                                        'Monitor the cooling process with a thermometer and record the times and temperatures against the allowed time.',
                                        'If the product is not cooling quickly enough, take corrective measures: divide further, add an ice wand, move to a blast chiller, record the action, inform the supervisor and dispose of the item if it exceeds the limit.',
                                        'Cover and label cooled food with its name and date once it is cold.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The two-stage rule is a common exam theme because the first stage is the riskiest: bacteria multiply fastest between 20 \u00b0C and 49 \u00b0C. If a question describes a deep pot of hot stock placed directly into a walk-in, the correct fix is to divide it into shallow pans or use an ice bath or ice wand.',
                                },
                            ],
                        },
                        {
                            id: 'ch04-s3',
                            title: '4.3 Re-thermalizing Foods (A-2.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Re-thermalizing means reheating previously cooked and cooled food. The key rule is speed: cold food must be brought through the danger zone as quickly as possible to a safe internal temperature.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Equipment', 'Key Points'],
                                    rows: [
                                        ['Stovetop', 'Pans, pots, bain-marie', 'Stir often; use small batches; bring liquids to a rolling simmer'],
                                        ['Oven or combi-oven', 'Ovens, food service containers', 'Cover to prevent drying; use steam in a combi-oven; check core temperature'],
                                        ['Microwave', 'Microwave oven', 'Stir and rotate for even heating; stand time; check several points'],
                                        ['Thermal circulator', 'Immersion circulator, water bath', 'Used for vacuum-packed food; follow the temperature and time guidelines'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select the tools and equipment according to the product and the re-thermalizing method.',
                                        'Divide the product into smaller batches, because quantity affects how fast the centre reaches temperature.',
                                        'Reheat food to the required internal temperature within the required time, typically 74 \u00b0C for leftovers and cooked foods, and verify with a thermometer.',
                                        'Take corrective measures when the temperature is not reached: apply more heat, divide further, record the action, inform the supervisor or discard the item.',
                                        'Never use hot-holding equipment, a steam table or a bain-marie to reheat cold food. These units are designed only to hold food that is already hot.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Do not reheat food more than once. Reheated food that is not served should be discarded rather than cooled and reheated again, because each cycle increases the risk of bacterial growth and toxin formation.',
                                },
                            ],
                        },
                        {
                            id: 'ch04-s4',
                            title: '4.4 Preventing Cross-Contamination (A-2.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cross-contamination moves bacteria, allergens or chemicals from one surface, food or person to another. It is one of the leading causes of food-borne illness, and it is easy to prevent with habits and set-up.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Source of Contamination', 'Example', 'Prevention'],
                                    rows: [
                                        ['Unsanitary work surfaces', 'Raw chicken on a board later used for salad', 'Clean and sanitize between tasks; use colour-coded boards'],
                                        ['Improper storage', 'Raw meat stored above ready-to-eat food', 'Store raw food below cooked or ready-to-eat food'],
                                        ['Chemical', 'Sanitizer sprayed near open food', 'Remove or cover food before spraying; store chemicals separately'],
                                        ['Cross use of utensils and equipment', 'Same tongs used for raw and cooked chicken', 'Use designated utensils and containers for each product'],
                                        ['Clothes, cell phones, soiled towels', 'Wiping hands on an apron; touching a phone', 'Use single-use towels; wash hands after touching phones or clothing'],
                                        ['Gloves', 'Wearing the same gloves for raw and ready-to-eat food', 'Change gloves when switching tasks or when torn or soiled'],
                                        ['Allergens', 'Peanut residue on a shared fryer or board', 'Use dedicated equipment, clean thoroughly and communicate allergens clearly'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Storage order (top to bottom)',
                                    definition: 'The correct refrigerator order is ready-to-eat and cooked foods on top, then seafood, whole cuts of beef and pork, ground meat and fish, and whole and ground poultry on the bottom. This works by cooking temperature: food that needs the highest final temperature goes on the lowest shelf so drips cannot contaminate food above.',
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Recognize potential contamination risks using sensory assessment and thermometers.',
                                        'Use clean and sanitized work surfaces, tools and equipment.',
                                        'Wash hands and change gloves to avoid contamination.',
                                        'Follow storage techniques: raw food on the bottom and cooked food on top, all food elevated off the floor, meat items separated, and everything covered.',
                                        'Use designated containers, cutting boards and utensils for specific products according to the company safety plan.',
                                        'Set up the sanitizing system: pails, spray bottles and gloves with the correct sanitizer concentration, checked with test strips.',
                                        'Apply FIFO (first in, first out): label and date products so older stock is used first.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Dietary Requirement Category', 'Examples'],
                                    rows: [
                                        ['Cultural and religious', 'Halal, kosher, no pork, no beef'],
                                        ['Allergies', 'Peanuts, tree nuts, shellfish, fish, milk, eggs, wheat, soy, sesame, mustard, sulphites'],
                                        ['Ethical and preferences', 'Vegetarian, vegan'],
                                        ['Health-related', 'Celiac disease, diabetes, low sodium, intolerances'],
                                        ['Environmental', 'Local, seasonal, sustainable sourcing'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Allergen cross-contact can be fatal. A knife, board, fryer oil or pan that touched an allergen must be fully washed and sanitized before it touches allergen-free food. Never guess about ingredients; ask, check the label and tell the front of house about any allergen in a dish.',
                                },
                            ],
                        },
                        {
                            id: 'ch04-s5',
                            title: '4.5 Cleaning and Sanitizing Tools and Equipment (A-2.05, A-2.06)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cleaning and sanitizing are two separate tasks, and both are crucial. Cleaning removes physical debris and soil; sanitizing reduces biological contaminants to a safe level. Sanitizing a dirty surface does not work, because soil protects bacteria from the sanitizer.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Three-sink method',
                                    definition: 'The manual warewashing process using three sinks in this order: (1) wash in hot soapy water, (2) rinse in clean water, (3) sanitize by immersion in an approved solution for the required contact time, followed by air drying. A pre-scrape or pre-rinse is done first.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Step', 'Action', 'Why'],
                                    rows: [
                                        ['1. Scrape and pre-rinse', 'Remove food debris', 'Keeps wash water clean and effective'],
                                        ['2. Wash', 'Hot soapy water with a detergent at the proper concentration; scrub with brushes, scouring pads and cloths', 'Removes grease and soil; tough carbonized residue needs soaking and scrubbing'],
                                        ['3. Rinse', 'Clean, warm water', 'Removes detergent that would weaken the sanitizer'],
                                        ['4. Sanitize', 'Immerse in a sanitizing solution for the specified contact time', 'Reduces microorganisms to safe levels'],
                                        ['5. Air dry', 'Place on a drying rack; never towel dry', 'Towels can re-contaminate clean items'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Sanitizer', 'Typical Concentration and Contact Time', 'Notes'],
                                    rows: [
                                        ['Chlorine (bleach)', 'About 100 ppm for at least 45 seconds (immersion)', 'Corrosive; loses strength in hot water and in sunlight; never mix with acids or ammonia'],
                                        ['Quaternary ammonium (quats)', 'Per label, commonly about 200 ppm for at least 60 seconds', 'Stable, non-corrosive and odourless; reduced by hard water and by some detergents'],
                                        ['Iodine', 'About 25 ppm for at least 30 seconds', 'Stains plastics; colour fades as it loses strength'],
                                        ['Hot water', 'At least 77 \u00b0C for 45 seconds (immersion); machine final rinse per manufacturer', 'Burn risk; use a thermometer and basket'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify the utensils, tools, equipment and appliances to be cleaned and sanitized.',
                                        'Disassemble and assemble kitchen tools and equipment for cleaning (slicers, grinders, mixers) according to manufacturer instructions, after locking out the equipment.',
                                        'Remove residual debris using hot soap solutions and the correct soap concentration before sanitizing.',
                                        'Remove tough, cooked-on, carbonized or stubborn residue with the right scouring tools and equipment.',
                                        'Rinse and dry thoroughly; air dry items rather than wiping with a cloth.',
                                        'Prepare sanitizing solution with the correct concentration, test it with strips, label the container and replace it when it is dirty or no longer tests correctly.',
                                        'Clean and sanitize food-contact surfaces after each task, whenever you switch between raw and ready-to-eat foods, and at least every four hours during continuous use.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never mix chlorine bleach with another cleaner, especially acid or ammonia-based products. The reaction releases toxic gas. If you smell a strong chemical odour or someone feels dizzy, leave the area, ventilate it and report it.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Order matters: clean first, then rinse, then sanitize. If a question asks why a sanitized surface still fails inspection or why the sanitizer is not working, look for residual soil, residual detergent, the wrong concentration or too short a contact time.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Documentation supports food safety: keep temperature logs, sanitizer strength logs, cleaning lists, shellfish tags (kept for the required period) and SDS records. If it was not recorded, inspectors treat it as not done.',
                                },
                            ],
                        },
                    ],
                    practiceQuestions: [],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 2 FRAGMENT (MWA B: Common occupational skills)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 1.
        // Task B-3 (tools and equipment) is covered in Part 1, Chapter 3.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks B-4 to B-9.
        // ============================================================
        {
            id: 'part-2',
            number: 2,
            title: 'Common Occupational Skills (MWA B)',
            description: 'The skills every cook uses every day: organizing the kitchen and production, menu planning and costing, documentation, ordering, receiving, storing and inventory, recipes and portion control, plating, convenience foods, dietary requirements, communication and mentoring. MWA B carries 11 exam questions; tools and equipment (task B-3) are covered in Part 1.',
            weight: '11 questions (7.3% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 5 — ORGANIZING WORK AND MANAGING INFORMATION (B-4, B-5)
                // ============================================================
                {
                    id: 'ch-05',
                    number: 5,
                    title: 'Organizing Work and Managing Information',
                    subtitle: 'Tasks B-4 and B-5 · Organizes work; manages information (2 exam questions)',
                    isFree: false,
                    estimatedMinutes: 65,
                    sections: [
                        {
                            id: 'ch05-s1',
                            title: '5.1 Organizing the Kitchen Workplace (B-4.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'A well organized kitchen saves steps, prevents accidents and keeps food moving at a safe pace. The cook arranges utensils, equipment, appliances and products for the flow of production, and keeps the workspace organized and maintained according to company policy and production needs.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Mise en place',
                                    definition: 'Setting up for production and having everything in its proper place. It covers prepared ingredients, tools, equipment, clean work surfaces and a written plan for the shift.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Workplace Element', 'Good Practice', 'Problem if Neglected'],
                                    rows: [
                                        ['Utensils (knives, wooden spoons, whisks, spatulas, scissors, tongs, tweezers)', 'Keep the ones used most within arm reach of the station, stored in a consistent place', 'Wasted movement, borrowed tools, cross-contamination from shared utensils'],
                                        ['Equipment and appliances (grinders, slicers, mixers, vacuum packaging machines, scales, food processors, blenders)', 'Place near the stations that use them, with clear space for the operator', 'Crowding, unsafe reaching, equipment left dirty or plugged in'],
                                        ['Products', 'Group by recipe or by station; keep cold items in refrigeration until needed', 'Food left in the danger zone, missing ingredients mid-service'],
                                        ['Work surfaces and walkways', 'Clean, sanitized and clear before starting; wipe and reset between tasks', 'Slips, trips, cross-contamination and slower service'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Arrange the station for the flow of production: raw on one side, cooked or finished on the other, and a clear path between them.',
                                        'Work clean: wipe the board, put tools back and discard trim as you go rather than at the end of the shift.',
                                        'Use safe lifting and transferring methods and good posture when setting up the station.',
                                        'Know the hazards of your area (water, debris, exposed wires, uneven floors, chemicals, fire) and the safe work practices that apply to them.',
                                        'Communicate with the team using the methods your kitchen relies on: verbal calls, written prep lists, order tickets and electronic systems.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'If a question describes a cook who keeps running back for ingredients, cutting raw and cooked product at the same spot, or working in a cluttered area, the answer is almost always better mise en place: plan the station, gather everything first and arrange it for the flow of production.',
                                },
                            ],
                        },
                        {
                            id: 'ch05-s2',
                            title: '5.2 Scheduling Production (B-4.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'A production schedule tells the kitchen what to make, how much, in what order and by when. The cook identifies daily and forecasted activities, creates and prioritizes the schedule, follows it and monitors progress so tasks finish on time and food stays safe.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Type of Activity', 'Examples'],
                                    rows: [
                                        ['Daily activities', 'Receiving, storing, preparing, holding, cooking, maintaining, serving'],
                                        ['Forecasted activities', 'Menu rotations, inventory requirements, upcoming banquets and catering events'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Sequence tasks by time required and by shelf life: start the items that take longest (stocks, braises, doughs, items that must chill) first.',
                                        'Do cold and raw tasks before hot tasks where possible, and keep potentially hazardous foods in refrigeration until they are needed.',
                                        'Prepare the quantities needed to meet the schedule, using forecasts of business volume and any recipe conversion required.',
                                        'Monitor progress during the shift and modify the schedule when volume, labour or equipment availability changes.',
                                        'Maintain safe temperatures throughout production: check labels, rotate products, record HACCP documentation and data logger readings, and monitor internal temperatures.',
                                        'Use sensory assessment (sight, smell, touch, taste) to confirm quality as production proceeds.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Kitchen Management Principle', 'What the Cook Does'],
                                    rows: [
                                        ['Define roles and responsibilities', 'Know who owns each station and task; communicate changes clearly'],
                                        ['Coordinate staff', 'Assign work according to the strengths and skills of team members and monitor flow'],
                                        ['Modify the schedule', 'Convert recipes, adjust for labour needs and change production levels as needed'],
                                        ['Control operational costs', 'Food, labour and fixed and variable expenses all affect profit'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Sequencing questions reward food safety logic. When two tasks compete for time, start the one that takes longest to cook or chill, and never leave potentially hazardous food at room temperature while you work on something else.',
                                },
                            ],
                        },
                        {
                            id: 'ch05-s3',
                            title: '5.3 Menu Planning and Mise en Place (B-5.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Menus connect the kitchen to the customer. When a cook helps plan a menu, the aim is food that sells, can be produced safely and consistently with the available labour and equipment, and makes money. The cook also uses menus, recipes and banquet event orders (BEO) as working documents.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Menu Style', 'Description'],
                                    rows: [
                                        ['Static', 'The same items every day'],
                                        ['Cycle', 'A set rotation of menus that repeats after a fixed period, common in institutions'],
                                        ['À la carte', 'Each item is priced and ordered separately'],
                                        ['Table d’hôte', 'A set meal for a fixed price, often with a choice within each course'],
                                        ['Seasonal', 'Changes with the availability of ingredients through the year'],
                                        ['Regional', 'Built around the foods and traditions of a region'],
                                        ['Dégustation', 'A tasting menu of many small courses; from the glossary: the act of sampling a wide variety of foods, wines, etc.'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Type of Service', 'Typical Setting'],
                                    rows: [
                                        ['Cafeteria', 'Institutions, schools, workplaces'],
                                        ['Buffet', 'Banquets, hotels, events'],
                                        ['À la carte', 'Full-service restaurants'],
                                        ['Over-the-counter', 'Delis, bakeries, food courts'],
                                        ['Quick-service restaurant (QSR)', 'Fast food and fast casual'],
                                        ['Catering', 'Off-site and on-site events'],
                                        ['Institutional', 'Hospitals, long-term care, camps, correctional facilities'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Considerations for menu planning: ingredient availability, seasonality, dietary requirements, price point, menu style, trends, the business brand, past performance of menu items, mise en place requirements and nutritional value.',
                                        'Considerations for mise en place: food and production schedules, labour schedules and equipment capabilities.',
                                        'Factors that affect menu prices: season, labour costs, ingredient costs and the brand of the business.',
                                        'Using local, seasonal and sustainable products supports quality, cost control and customer interest (farm to table).',
                                        'Methods of cost control: food purchase specifications, standardized recipes, standardized yields, standardized portions and re-purposing product.',
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Standardized recipe',
                                    definition: 'A recipe tested and written so that the same quality, yield, portion size and cost result every time it is made. Its components typically include the name, yield, portion size, ingredients with exact quantities, method, cooking times and temperatures, equipment, allergens and cost.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'A question about inconsistent quality, variable portion sizes or unpredictable food cost is usually answered by standardized recipes, standardized portions and standardized yields.',
                                },
                            ],
                        },
                        {
                            id: 'ch05-s4',
                            title: '5.4 Costing, Yield and Recipe Conversion (B-5.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Costing and conversion are the math of the trade and the main source of Critical Thinking questions on the exam. The official sample question asks what menu price keeps a 29% food cost when an item costs $1.00 to produce. Work through the formulas below until each calculation is automatic.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'As-Purchased (AP)',
                                    definition: 'The weight or quantity of a product as it was bought, before any trimming, peeling, boning or cooking loss.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Edible Portion (EP)',
                                    definition: 'The weight or quantity of a product that is usable after trimming, peeling, boning, cooking and other losses.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Calculation', 'Formula', 'Worked Example'],
                                    rows: [
                                        ['Yield percentage', 'EP weight ÷ AP weight × 100', '10 kg of carrots trims to 8 kg EP: 8 ÷ 10 × 100 = 80%'],
                                        ['AP needed for a required EP', 'Required EP ÷ yield percentage (as a decimal)', 'Need 12 kg EP at 80%: 12 ÷ 0.80 = 15 kg AP'],
                                        ['Cost per EP unit', 'AP cost per unit ÷ yield percentage (as a decimal)', 'AP $2.40/kg at 80%: 2.40 ÷ 0.80 = $3.00 per kg EP'],
                                        ['Food cost percentage', 'Food cost ÷ selling price × 100', 'Cost $4.20, price $14.00: 4.20 ÷ 14.00 × 100 = 30%'],
                                        ['Menu price from target food cost %', 'Food cost ÷ target food cost percentage (as a decimal)', 'Cost $1.00 at 29%: 1.00 ÷ 0.29 = $3.45 (the official sample question)'],
                                        ['Menu price (second example)', 'Food cost ÷ target food cost percentage', 'Cost $4.80 at 32%: 4.80 ÷ 0.32 = $15.00'],
                                        ['Portions from a batch', 'Usable yield ÷ portion size', '3.6 kg cooked yield at 150 g per portion: 3 600 ÷ 150 = 24 portions'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Conversion factor',
                                    definition: 'The number used to scale a recipe: desired yield ÷ current (recipe) yield. Multiply every ingredient quantity by the factor.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Step', 'Example: recipe makes 8 portions, need 50'],
                                    rows: [
                                        ['1. Find the factor', '50 ÷ 8 = 6.25'],
                                        ['2. Multiply every ingredient', '400 g × 6.25 = 2 500 g; 250 mL × 6.25 = 1 562 mL (about 1.56 L)'],
                                        ['3. Round sensibly', '3 eggs × 6.25 = 18.75, so use 19 eggs (or weigh liquid egg)'],
                                        ['4. Re-check method and equipment', 'Larger batches change pan size, cooking time, cooling method and seasoning: season in stages and adjust to taste'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Convert units first (all in grams or all in millilitres) before multiplying, so errors are easier to spot.',
                                        'Do not scale seasoning, leavening, thickeners or cooking time blindly; they do not always scale in a straight line. Taste and adjust.',
                                        'Cost every recipe on EP, not AP, or the cost per portion will be understated.',
                                        'Substitute ingredients only when the substitution fits the menu, the dietary requirement and the budget.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Read the formula direction carefully. To find the selling price, divide cost by the food cost percentage. To find the food cost percentage, divide cost by the selling price. To find how much AP to order, divide the EP you need by the yield percentage. Dividing by 0.29 makes the number larger, which is correct for a price.',
                                },
                            ],
                        },
                        {
                            id: 'ch05-s5',
                            title: '5.5 Using Documentation (B-5.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Documentation is how a kitchen proves that food was handled safely and that the business is running properly. Cooks organize and file documents, process them, recognize and correct or report errors, and complete forms according to company policy and jurisdictional regulations.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Document', 'Purpose'],
                                    rows: [
                                        ['Shellfish tags', 'Trace live shellfish to the harvester; keep the tag for the period required by regulation'],
                                        ['Safety Data Sheets (SDS)', 'Hazards and first aid for chemicals; must be accessible'],
                                        ['Temperature logs', 'Prove that refrigerators, freezers, hot holding and cooked food were in range'],
                                        ['Waste logs', 'Track discarded product, supports cost control and reduces waste'],
                                        ['Sanitizer strength logs', 'Prove sanitizer was at the correct concentration'],
                                        ['Recipe files', 'Standardized recipes with yield, portions and allergens'],
                                        ['Job hazard analysis', 'Identify task hazards and controls'],
                                        ['Prep lists', 'Daily tasks and quantities for each station'],
                                        ['Banquet event orders (BEO)', 'Event details: counts, menu, timing and special requirements'],
                                        ['Cleaning lists', 'Daily, weekly and monthly cleaning tasks'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Form', 'Examples'],
                                    rows: [
                                        ['Food safety forms', 'Temperature, receiving, cooling and sanitizing records'],
                                        ['Inventory forms', 'Stock counts and par level sheets'],
                                        ['Work schedules', 'Shifts and station assignments'],
                                        ['Jurisdictional accident documentation', 'Incident and injury reports'],
                                        ['Apprenticeship forms', 'Hours and competency sign-offs'],
                                        ['Performance evaluations', 'Feedback on staff'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Complete records at the time of the task, not at the end of the day; a late entry is a weak record.',
                                        'Never falsify a record. If you find an error, correct it clearly (single line through, initial and date) or report it.',
                                        'Keep documents for as long as policy and regulation require and store them where inspectors and supervisors can find them.',
                                        'Know where the SDS documentation is and why it matters: it is the first place to look after a chemical spill or splash.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'If an inspector or a question asks how you can show that a procedure was done, the answer is the record. A procedure that was done but not recorded cannot be verified.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 6 — MANAGING PRODUCTS (B-6)
                // ============================================================
                {
                    id: 'ch-06',
                    number: 6,
                    title: 'Managing Products: Ordering, Receiving, Storing and Inventory',
                    subtitle: 'Task B-6 · Manages products (2 exam questions)',
                    isFree: false,
                    estimatedMinutes: 60,
                    sections: [
                        {
                            id: 'ch06-s1',
                            title: '6.1 Ordering Products (B-6.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cooks are involved in ordering, receiving, storing and, at times, transporting products. At every stage the product must be handled safely and in line with food safety and jurisdictional regulations. Ordering starts with knowing what the menu needs.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Product Category', 'Examples'],
                                    rows: [
                                        ['Dairy', 'Milk, cream, butter, cheese, yogurt, eggs where grouped with dairy'],
                                        ['Produce', 'Fresh vegetables, fruit and herbs'],
                                        ['Meats and poultry', 'Beef, pork, lamb, game, chicken, turkey'],
                                        ['Seafood', 'Fin fish and shellfish'],
                                        ['Dry goods', 'Flour, rice, pasta, grains, canned goods, spices'],
                                        ['Sundries', 'Disposable items, packaging, paper goods, cleaning supplies'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Product Specification', 'What It Describes'],
                                    rows: [
                                        ['Market form', 'How the product is sold, for example whole, fresh, frozen, canned, fillet, IQF'],
                                        ['Shelf life', 'How long it lasts under proper storage'],
                                        ['Case size', 'Quantity or weight in each case or unit'],
                                        ['Product type', 'The exact variety, cut or style needed'],
                                        ['Colour', 'Appearance requirement for quality'],
                                        ['Grade', 'Quality, rating and standards of food products (glossary term)'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Vendor Type', 'Notes'],
                                    rows: [
                                        ['Major suppliers', 'Wide selection, reliable delivery schedules, competitive prices'],
                                        ['Local community suppliers', 'Fresh and seasonal products, supports farm to table, may have limited volume'],
                                        ['Foragers', 'Reliable, high-quality supplier of wild mushrooms, greens and berries (glossary term)'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Determine product specifications according to the menu and dietary requirements.',
                                        'Identify ingredient requirements and complete the order list according to production needs.',
                                        'Determine quantities from business volume and the delivery schedule: order enough to meet demand without overstocking perishables.',
                                        'Relay the order and specifications to the supplier clearly, by phone, electronically or face to face.',
                                        'Interpret vendor product listings to confirm that the supplier has the required inventory before relying on it.',
                                        'Consider sustainability and local and seasonal availability when choosing products.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Quantity questions usually depend on two inputs: the volume of business and the delivery schedule. A supplier who delivers twice a week allows smaller orders of perishables than one who delivers weekly.',
                                },
                            ],
                        },
                        {
                            id: 'ch06-s2',
                            title: '6.2 Receiving Products (B-6.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Receiving is the last chance to refuse a problem. Once product is accepted and signed for, it belongs to the kitchen. The cook verifies invoices to detect and resolve discrepancies, verifies products against specifications and quantities ordered, operates receiving equipment correctly, and decides the priority for storage.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Check', 'What to Look For', 'Action if Wrong'],
                                    rows: [
                                        ['Invoice and order', 'Items, quantities, prices and specifications match the order', 'Note shortages and errors on the invoice and report them; ask for a credit note or reschedule delivery'],
                                        ['Temperature of cold food', 'Refrigerated potentially hazardous foods at 4 °C or colder when received; check with a probe thermometer', 'Refuse the product if it is out of range'],
                                        ['Temperature of frozen food', 'Frozen solid at -18 °C or colder, with no signs of thawing and refreezing such as ice crystals, large ice build-up or liquid in the case', 'Refuse the product'],
                                        ['Packaging', 'Clean, intact, sealed and properly labelled; no leaks, dents in cans (especially on seams), swelling or tears', 'Reject damaged items'],
                                        ['Quality and freshness', 'Fresh smell, correct colour and texture, no pests, mould or slime; correct grade', 'Refuse or return product that fails sensory assessment'],
                                        ['Dates', 'Best-before and use-by dates give adequate shelf life', 'Refuse short-dated product'],
                                        ['Live shellfish', 'Shellfish tags present and complete; shells closed or closing when tapped', 'Refuse products without tags; keep tags per regulation'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Receiving Equipment', 'Use'],
                                    rows: [
                                        ['Hand carts', 'Moving cases and bags into storage'],
                                        ['Conveyors', 'Moving high volumes of product'],
                                        ['Scales', 'Verifying weights against invoices'],
                                        ['Lifts', 'Moving heavy loads safely between levels'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Document', 'Used For'],
                                    rows: [
                                        ['Invoice', 'Verify quantities and prices received'],
                                        ['Credit note or refusal', 'Record returned, damaged or refused goods'],
                                        ['Product tracking slip', 'Follow a product through receiving and storage'],
                                        ['Requisition', 'Request product from storage or another department'],
                                        ['Inventory form', 'Record quantities after receiving'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Schedule deliveries for quiet periods so that product is checked carefully and moved to storage quickly.',
                                        'Have clean carts, scales, thermometers and the order sheet ready before the delivery arrives.',
                                        'Prioritize storage by form and temperature: frozen first, then refrigerated, then dry goods, so potentially hazardous food spends the least time out of temperature control.',
                                        'For damaged or returned goods: note the shortfall on the invoice, arrange the return of overages, reschedule delivery and coordinate with the courier, supplier and kitchen staff.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never accept potentially hazardous food that has been left in the danger zone. A signed invoice is a legal statement that the order was received in good condition. Take temperatures with a clean, sanitized probe before you sign.',
                                },
                            ],
                        },
                        {
                            id: 'ch06-s3',
                            title: '6.3 Storing Products (B-6.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Proper storage protects food from contamination and spoilage and keeps inventory usable. The cook keeps storage areas clean, organized and secure, chooses suitable containers, stores hazardous products separately and rotates stock.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Storage Area', 'Typical Conditions', 'Notes'],
                                    rows: [
                                        ['Refrigerator', '4 °C or colder', 'Store raw below ready-to-eat; do not overload; leave space for air to circulate'],
                                        ['Freezer', '-18 °C or colder', 'Wrap tightly to prevent freezer burn; label and date; do not refreeze thawed product'],
                                        ['Dry storage', 'Cool, dry and ventilated, off the floor', 'Keep away from walls and drains; protect from pests and humidity'],
                                        ['Chemical storage', 'Separate, labelled and locked', 'Never above or beside food, single-use items or clean utensils'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Container Type', 'Characteristics'],
                                    rows: [
                                        ['Food-grade plastic', 'Light, stackable, easy to clean; check for cracks and stains'],
                                        ['Stainless steel', 'Durable, non-reactive, suitable for hot and cold storage'],
                                        ['Non-reactive containers', 'Needed for acidic foods such as tomatoes, citrus and vinegar-based products'],
                                        ['Vacuum-packed', 'Extends shelf life; use correct cooling and labelling'],
                                        ['Eco-friendly options', 'Reusable or compostable options that meet food safety rules'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'FIFO (first in, first out)',
                                    definition: 'A stock rotation method in which the oldest product is placed at the front and used first. Every item is labelled and dated so its age is clear.',
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Label and date every product, including the product name and use-by or preparation date, and rotate according to FIFO.',
                                        'Store food in designated areas: raw meats on the bottom shelves, ready-to-eat above, all food covered and at least 15 cm off the floor.',
                                        'Unpack and break down received products when needed using compliant containers; discard outer cardboard that can carry pests.',
                                        'Identify hazardous products and store them locked up, away from food, according to WHMIS and the manufacturer.',
                                        'Keep storage areas clean and organized, and keep them secure to protect against theft and tampering.',
                                        'Control the risk of cross-contamination between raw, cooked and ready-to-serve foods through placement and covering.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Storage questions reward consistent rules: label and date everything, rotate with FIFO, raw below cooked, chemicals separate, everything covered and elevated. If a food has no date, treat it as unsafe.',
                                },
                            ],
                        },
                        {
                            id: 'ch06-s4',
                            title: '6.4 Maintaining Inventory (B-6.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Inventory control makes sure the kitchen has what it needs, uses what it buys and discards what it must. The cook verifies quantities against par levels, checks the quality of perishables, rotates stock and disposes of expired product according to policy and regulations.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Par level',
                                    definition: 'The quantity of an item that should be on hand to meet business volume until the next delivery. Order quantity is the par level minus the quantity currently on hand.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Task', 'How', 'Example'],
                                    rows: [
                                        ['Verify quantities against par', 'Count stock regularly and compare with par', 'Par 20 kg of chicken breast, 6.5 kg on hand: order 20 − 6.5 = 13.5 kg'],
                                        ['Check perishable quality', 'Sensory assessment plus the date received', 'Look, smell and touch; check the received date label on every item'],
                                        ['Rotate stock', 'FIFO according to company policy', 'Move older stock forward, new stock behind'],
                                        ['Dispose of expired product', 'According to policy, regulations and manufacturer specifications', 'Record what was discarded and why'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Waste Management Method', 'Example'],
                                    rows: [
                                        ['Reduce', 'Order and prepare only what is needed'],
                                        ['Reuse', 'Re-purpose trim into stocks, soups and staff meals where safe'],
                                        ['Recycle', 'Cardboard, glass, metal and food-grade oil collection'],
                                        ['Compost', 'Vegetable trim and unavoidable food scraps'],
                                        ['Discard', 'Unsafe, expired or contaminated product'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Use consistent units (case, kilogram, litre, each) so counts match order sheets and invoices.',
                                        'Keep the inventory sheet current and send discrepancies and shortages to the person who orders.',
                                        'Discard product that is past its date, shows spoilage, or has unknown history. When in doubt, throw it out.',
                                        'Track waste so that over-production and trim loss can be corrected.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Which item is used first? The one with the earliest use-by date, which is normally the oldest stock. If a question gives dates, choose by date, not by how it looks.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 7 — RECIPES, PORTIONING, PRESENTATION, CONVENIENCE FOODS (B-7)
                // ============================================================
                {
                    id: 'ch-07',
                    number: 7,
                    title: 'Recipes, Portioning, Presentation and Convenience Foods',
                    subtitle: 'Task B-7 · Performs trade activities (2 exam questions)',
                    isFree: false,
                    estimatedMinutes: 60,
                    sections: [
                        {
                            id: 'ch07-s1',
                            title: '7.1 Using Recipes and Measurements (B-7.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'A recipe is a set of instructions for preparing a dish that includes the necessary ingredients. Following the recipe sequence, measuring accurately and keeping consistency when converting are what make a dish the same every time.',
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Read the recipe completely before starting and gather all ingredients and tools (mise en place).',
                                        'Follow the recipe sequence; changing the order can change texture, safety or results.',
                                        'Measure ingredients to the specification: weigh dry ingredients wherever possible and use volume measures for liquids.',
                                        'Keep consistency when converting recipes: convert every ingredient by the same factor and re-check seasoning.',
                                        'Choose substitutions based on menu and dietary requirements, demographics, budget and availability.',
                                        'Adjust seasoning to the specification and the desired results, tasting with a clean spoon each time.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Measure', 'Metric', 'Notes'],
                                    rows: [
                                        ['1 teaspoon (tsp)', '5 mL', 'Standard measuring spoon'],
                                        ['1 tablespoon (tbsp)', '15 mL', '3 teaspoons'],
                                        ['1 cup (Canadian metric)', '250 mL', 'US cup is about 237 mL'],
                                        ['1 litre (L)', '1 000 mL', 'About 4 metric cups'],
                                        ['1 ounce (oz)', 'About 28 g', 'Weight ounce'],
                                        ['1 pound (lb)', 'About 454 g', '16 oz; 1 kg is about 2.2 lb'],
                                        ['1 Imperial pint', '568 mL (20 fl oz)', 'US pint is 473 mL (16 fl oz)'],
                                        ['1 Imperial gallon', '4.55 L', 'US gallon is 3.79 L'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Measuring Tool', 'Use'],
                                    rows: [
                                        ['Scales (balance, spring, digital)', 'Most accurate way to measure dry ingredients and portions'],
                                        ['Measuring spoons and cups', 'Small and moderate volumes'],
                                        ['Graduated containers', 'Liquids by volume'],
                                        ['Ladles and scoops (dishers)', 'Portion control for sauces, soups and batters'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Volume and weight are not interchangeable for most ingredients. A cup of flour, a cup of sugar and a cup of water each weigh something different. Weigh when accuracy matters, and use the recipe unit unless a conversion is given.',
                                },
                            ],
                        },
                        {
                            id: 'ch07-s2',
                            title: '7.2 Portion Control and Conversions (B-7.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Portion control gives the guest what the menu promises and gives the business the cost it planned. Cooks portion product to specification, use portion control utensils and convert volume, weight and temperature between the metric, Imperial and American systems.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Portion, to',
                                    definition: 'To divide a large quantity into several servings (glossary term).',
                                },
                                {
                                    type: 'table',
                                    headers: ['Portion Control Utensil', 'Typical Use'],
                                    rows: [
                                        ['Measuring cups', 'Rice, grains, sauces, dry ingredients'],
                                        ['Portion bags', 'Pre-portioned and vacuum-packed proteins and sides'],
                                        ['Scales', 'Meat, fish, cheese and any product sold by weight'],
                                        ['Ladles', 'Soups, sauces, stews (the ladle size is the portion)'],
                                        ['Portion cake cutters', 'Dividing cakes and desserts into equal slices'],
                                        ['Dishers (scoops)', 'Cookie dough, mashed potato, fillings'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Conversion', 'Formula', 'Example'],
                                    rows: [
                                        ['°C to °F', '°C × 9 ÷ 5 + 32', '175 °C × 1.8 + 32 = 347 °F'],
                                        ['°F to °C', '(°F − 32) × 5 ÷ 9', '(350 − 32) ÷ 1.8 = about 177 °C'],
                                        ['Pounds to kilograms', 'lb × 0.454', '2.5 lb × 0.454 = about 1.14 kg'],
                                        ['Kilograms to pounds', 'kg × 2.2', '4 kg × 2.2 = about 8.8 lb'],
                                        ['Ounces to grams', 'oz × 28', '6 oz × 28 = 168 g'],
                                        ['Cups to millilitres', 'cups × 250', '1.5 cups × 250 = 375 mL'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Portion according to the written specification, including trimmed and cooked weights when the item loses weight in cooking.',
                                        'Adjust yield for cooking loss: a 150 g cooked portion needs a larger raw weight.',
                                        'Calibrate and zero scales, and clean and sanitize them between uses.',
                                        'Use the same portion utensil every time so size is consistent from cook to cook.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Portion and yield questions often chain two steps: first work out the usable (EP or cooked) quantity, then divide by the portion size. If the question gives the as-purchased weight, apply the yield percentage before dividing.',
                                },
                            ],
                        },
                        {
                            id: 'ch07-s3',
                            title: '7.3 Presenting the Finished Product (B-7.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Presentation is the last step of production and the first thing the guest sees. Good presentation is accurate, consistent and safe: it follows the recipe, delivers the right temperature and holds quality until the dish reaches the guest.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Plating Factor', 'What the Cook Considers'],
                                    rows: [
                                        ['Standardized recipe', 'Components, portion sizes and plating guidelines'],
                                        ['Service style', 'Fine dining, banquet, buffet, cafeteria, take-out'],
                                        ['Food type', 'Hot, cold, saucy, crisp or delicate'],
                                        ['Available resources', 'Staff, time, service ware and equipment'],
                                        ['Food temperature', 'Hot food on hot plates, cold food on chilled plates'],
                                        ['Cost', 'Garnish and portion must fit the menu price'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Service Ware', 'Materials'],
                                    rows: [
                                        ['Plates, platters, bowls', 'Ceramic, porcelain, slate, hardwood, steel, mirrors, bamboo'],
                                        ['Take-out containers', 'Plastic, paper, bamboo and other compostable options'],
                                        ['Hotel pans', 'Stainless steel and plastic for buffets and transport'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Presentation Style', 'Description'],
                                    rows: [
                                        ['Centre', 'Main item placed in the middle with accompaniments around it'],
                                        ['Stacking', 'Components layered for height'],
                                        ['Flat', 'Components arranged across the plate'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify the components of the menu item before plating and select the plating tools.',
                                        'Coordinate the supply of cooked product so food is plated quickly and arrives together.',
                                        'Plan the plating sequence and design with colour, a focal point and flow; garnish with edible items that suit the dish.',
                                        'Assemble components according to the recipe; keep accuracy, consistency and quality from plate to plate.',
                                        'Keep ware temperature and cleanliness correct: heat plates for hot food and chill them for cold.',
                                        'Maintain safe temperatures during plating, presentation and transport, using suitable equipment such as hot holding, insulated carriers and cold packs.',
                                        'Label packaged food according to company policy and regulations, including allergens and dates.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Transport Setting', 'Key Concern'],
                                    rows: [
                                        ['Off-site catering', 'Holding temperatures during travel; transport equipment and timing'],
                                        ['Take-out and delivery', 'Packaging that holds temperature and quality; allergen labelling'],
                                        ['Home meal replacements', 'Cooling, packaging, labelling, dating and reheating instructions'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'If a question describes hot food that arrives cold or limp, look for the cause in holding and transport: temperature of ware, packaging, travel time and the equipment used.',
                                },
                            ],
                        },
                        {
                            id: 'ch07-s4',
                            title: '7.4 Using Convenience Foods (B-7.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Convenience foods are typically complete or partly prepared products that have been pre-prepared commercially, so they require little cooking. Cooks use them to save time and labour and to keep results consistent, while still controlling quality, cost and allergens.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Convenience food',
                                    definition: 'Typically a complete meal that has been pre-prepared commercially and so requires little cooking by the consumer (glossary term).',
                                },
                                {
                                    type: 'table',
                                    headers: ['Convenience Product', 'Examples'],
                                    rows: [
                                        ['Bases', 'Soup and sauce bases'],
                                        ['Frozen', 'Frozen vegetables, pastry, prepared entrées'],
                                        ['Canned', 'Tomatoes, beans, fruit'],
                                        ['Ready-to-bake dough', 'Cookie dough, pastry sheets, pizza dough'],
                                        ['Fully cooked', 'Cooked meats and prepared sides'],
                                        ['Dehydrated', 'Dried soups, powdered sauces, instant potatoes'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Label Term', 'Meaning'],
                                    rows: [
                                        ['Ready-to-serve / ready-to-use', 'Can be served or used as it is'],
                                        ['Thaw-and-serve', 'Thaw under safe conditions, then serve'],
                                        ['Heat-and-serve', 'Reheat to the required temperature and serve'],
                                        ['Ready-to-bake / proof-and-bake', 'Bake directly, or proof first and then bake'],
                                        ['UHT', 'Ultra-high temperature treated, shelf-stable until opened'],
                                        ['Bake-in-bag / boil-in-bag', 'Cook the product in its packaging as directed'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Factor in Choosing Convenience Foods', 'Consideration'],
                                    rows: [
                                        ['Raw cost', 'Compare the full cost of a from-scratch item with the purchased one'],
                                        ['Time and labour', 'Convenience products reduce preparation time'],
                                        ['Storage', 'Space and temperature needs'],
                                        ['Allergies and dietary needs', 'Read the label for allergens and ingredients'],
                                        ['Consistency', 'Same quality and yield every time'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify the product according to the manufacturer and recipe specifications.',
                                        'Follow the manufacturer directions for thawing, cooking, holding and storage.',
                                        'Apply the product according to specifications and the desired results, then adjust seasoning and finish to meet your standard.',
                                        'Read labels for hazards and allergens such as gluten, sodium, sugar, peanuts and tree nuts, soy, dairy, sesame and shellfish.',
                                        'Note that dietary requirements may rule out a convenience product even when it saves time.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never assume a convenience product is allergen-free. Formulations change; read the ingredient list and allergen statement on every delivery and tell the service team about any allergen in the finished dish.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 8 — DIETARY REQUIREMENTS, COMMUNICATION AND MENTORING (B-8, B-9)
                // ============================================================
                {
                    id: 'ch-08',
                    number: 8,
                    title: 'Dietary Requirements, Communication and Mentoring',
                    subtitle: 'Tasks B-8 and B-9 · Adapts cooking practices to meet dietary requirements; uses communication and mentoring techniques (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 60,
                    sections: [
                        {
                            id: 'ch08-s1',
                            title: '8.1 Dietary Requirements and Adapting the Kitchen (B-8.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Guests increasingly need meals adapted for allergies, health conditions, religion, ethics and personal choice. A cook must be able to identify the requirement, adapt the kitchen and prepare the food safely, because a mistake can cause a medical emergency.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Type of Requirement', 'Examples'],
                                    rows: [
                                        ['Cultural', 'Traditional foods and food customs'],
                                        ['Allergies', 'Peanuts, tree nuts, sesame, milk, eggs, fish, crustaceans and molluscs, soy, wheat, mustard, sulphites'],
                                        ['Ethical', 'Vegetarian, vegan'],
                                        ['Religious', 'Halal, Kosher, Hindu dietary practices'],
                                        ['Health-related', 'Diabetic, gluten-free for celiac disease, low sodium, heart-healthy'],
                                        ['Environmental', 'Local, seasonal, sustainable sourcing'],
                                        ['Personal preferences', 'Dislikes and lifestyle choices such as keto'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Diet or Regime', 'Basic Rule'],
                                    rows: [
                                        ['Vegetarian', 'No meat, poultry or fish; may include dairy and eggs depending on the type'],
                                        ['Vegan', 'No animal products at all, including dairy, eggs, honey and animal-based gelatin or stocks'],
                                        ['Gluten-free', 'No wheat, barley, rye or triticale; watch for hidden gluten in sauces, soups and coatings'],
                                        ['Halal', 'Follows Islamic dietary law; no pork or alcohol; meat from permitted animals prepared according to the rules'],
                                        ['Kosher', 'Follows Jewish dietary law; no pork or shellfish; meat and dairy kept separate'],
                                        ['Hindu practices', 'Many avoid beef and some avoid meat entirely; requirements vary by tradition'],
                                        ['Diabetic', 'Control carbohydrates and added sugar; consistent portions'],
                                        ['Keto', 'Very low carbohydrate and high fat'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify the changes needed to preparation areas, practices and procedures for the dietary need.',
                                        'Modify the preparation area: use specialized equipment to isolate allergens, dedicate a prep area for allergen-free food and prevent cross-contamination from allergens and cultural practices.',
                                        'Modify preparation, cooking and serving so no allergen or restricted ingredient touches the dish: clean and sanitized tools, fresh gloves, fresh oil in the fryer, clean pans and boards.',
                                        'Read labels carefully and keep up with food recalls.',
                                        'Use menu variety, colour, nutrition, cooking methods and the clientele to plan options that suit many needs.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Allergen mistakes can be fatal. Never remove an allergen from a finished dish and serve it as allergen-free, because traces remain. Prepare it fresh with clean tools in a clean area, label it clearly and tell the service team before it leaves the kitchen.',
                                },
                            ],
                        },
                        {
                            id: 'ch08-s2',
                            title: '8.2 Selecting Ingredients and Preparing Food for Dietary Needs (B-8.02, B-8.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Once the requirement is known, the cook picks ingredients that meet it, modifies the recipe and method, labels the dish and makes sure the service team knows exactly what it contains.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Need', 'Possible Substitutes', 'Check'],
                                    rows: [
                                        ['Dairy-free', 'Plant-based milks, oils or non-dairy spreads instead of butter and cream', 'Read the label for milk-derived ingredients such as whey and casein'],
                                        ['Egg-free', 'Commercial egg replacers, applesauce or aquafaba in baking', 'Texture and binding may change'],
                                        ['Gluten-free', 'Rice, corn, potato or certified gluten-free flours; cornstarch for thickening', 'Check stocks, soy sauce, spice blends and coatings'],
                                        ['Nut-free', 'Seeds (if the guest is not allergic to seeds) instead of nuts', 'Check shared equipment and labels'],
                                        ['Vegan', 'Vegetable stock, plant-based proteins, plant-based dairy alternatives', 'Hidden animal products in sauces and desserts'],
                                        ['Low sodium', 'Herbs, spices, citrus and vinegar for flavour', 'Watch convenience foods, stocks and cured products'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify and document the dietary requirement exactly as the guest or order states it.',
                                        'Propose an alternate dish if the recipe cannot be modified to meet the requirement.',
                                        'Select substitute ingredients that meet the requirement and fit the dish, considering allergies and intolerances, variety, colour, nutrition, cooking methods and clientele.',
                                        'Modify the recipe by substituting ingredients, then adjust cooking procedures, yields and conversions as needed.',
                                        'Prepare and label the alternate dish and identify it for the service team before it leaves the kitchen.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'When a question asks what the cook should do first after learning about an allergy, the answer is almost always: identify and document the requirement, confirm the ingredients and clean the area and tools, then prepare the dish and tell the service team. Never guess about an ingredient.',
                                },
                            ],
                        },
                        {
                            id: 'ch08-s3',
                            title: '8.3 Communication Techniques (B-9.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Kitchens run on communication. Orders, safety warnings, handovers and feedback move quickly, and misunderstandings cost time, money and sometimes safety. The cook communicates so all parties understand, listens actively and responds to feedback.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Communication Technique', 'What It Looks Like in the Kitchen'],
                                    rows: [
                                        ['Clear instructions and messages', 'Short, specific and confirmed: for example, calling orders back to the expediter'],
                                        ['Active listening', 'Hearing, interpreting, reflecting, responding and paraphrasing what was said'],
                                        ['Responding to feedback', 'Accepting a correction and changing the task'],
                                        ['Open-ended questions', 'Asking what, how and why to learn and to set goals'],
                                        ['Information sharing', 'Handing over prep levels, shortages, 86 items, allergy notices'],
                                        ['Meetings', 'Attending safety and information meetings and relaying information to the team'],
                                        ['Customer interaction', 'Determining consumer preferences through interaction'],
                                        ['Coordination', 'Working with co-workers so tasks finish on time'],
                                        ['Respectful attitude', 'Maintained at all times, even under pressure'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Form of Communication', 'Typical Use'],
                                    rows: [
                                        ['Verbal', 'Calls from the pass, instructions and warnings such as "behind" or "hot"'],
                                        ['Non-verbal', 'Gestures, body language and tone'],
                                        ['Written', 'Prep lists, logs, notes and labels'],
                                        ['Digital', 'Ordering systems, messaging, inventory software and tablets'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Know the people you communicate with: colleagues, apprentices, supervisors, clients, suppliers and patrons.',
                                        'Use trade terminology correctly so instructions are understood.',
                                        'Recognize that people have different communication and learning styles and adapt to them.',
                                        'Value diversity in the workplace and treat everyone with respect.',
                                        'Recognize harassment and discrimination and report them. Discrimination is prohibited on grounds that include race, ethnic origin, colour, religion, age, sex, sexual orientation, gender identity or expression, marital status, family status, disability, genetic characteristics and pardoned conviction.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'In communication questions, choose the answer that is clear, respectful, timely and closes the loop: confirm that the message was understood. Avoid answers that involve ignoring the problem, blaming a person or waiting until after the shift.',
                                },
                            ],
                        },
                        {
                            id: 'ch08-s4',
                            title: '8.4 Mentoring Techniques (B-9.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'With experience, cooks become mentors to apprentices and new staff. Mentoring is a skill: explain the objective, demonstrate, set up safe practice, give timely feedback and step back as the learner becomes independent. A journeyperson is expected to support the next generation of the trade.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Step in Teaching a Skill', 'What the Mentor Does'],
                                    rows: [
                                        ['Explain', 'State the learning objective and the main point, and explain the who, what, where, when, why and how'],
                                        ['Link', 'Connect the lesson to other lessons and to the job; use unplanned learning opportunities'],
                                        ['Demonstrate', 'Show the skill step by step'],
                                        ['Practise safely', 'Set up conditions for safe practice: guided, limited independence, then full independence'],
                                        ['Assess', 'Assess the ability of the learner as independence increases'],
                                        ['Feedback', 'Give timely support and feedback on strengths, weaknesses and suitability for the trade'],
                                        ['Document', 'Record technical training opportunities for planning and support training within the prescribed timeframe'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Choose a suitable time and place for the lesson, away from peak service where possible.',
                                        'Identify the components of the skill and teach them in a logical order.',
                                        'Adjust the lesson to different learners and situations; people learn through experience, observation and practice.',
                                        'Recognize the essential skills involved in the trade: reading, writing, document use, oral communication, numeracy, thinking, working with others, digital technology and continuous learning.',
                                        'Support a workplace that is free from harassment and discrimination.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The standard teaching sequence is explain, demonstrate, let the learner practise safely, then assess and give feedback. If a question offers the learner doing the task alone with no demonstration or follow-up, it is not the best answer.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 3 FRAGMENT (MWA C: Produce)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 2.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks C-10, C-11 and C-12.
        // ============================================================
        {
            id: 'part-3',
            number: 3,
            title: 'Produce (MWA C)',
            description: 'Herbs, spices, vegetables and fruit from selection to service: judging freshness, cleaning, classic cuts, cooking methods that protect colour, texture and nutrients, finishing and holding. MWA C carries 12 exam questions across tasks C-10, C-11 and C-12.',
            weight: '12 questions (8.0% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 9 — HERBS AND SPICES (C-10)
                // ============================================================
                {
                    id: 'ch-09',
                    number: 9,
                    title: 'Herbs and Spices',
                    subtitle: 'Task C-10 · Prepares herbs and spices (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 45,
                    sections: [
                        {
                            id: 'ch09-s1',
                            title: '9.1 Selecting Herbs and Spices (C-10.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Herbs and spices flavour dishes and serve as garnishes. Small amounts make a large difference, so the cook must know the types, their characteristics and uses, how to judge freshness and quality, and which flavours complement the recipe.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Herb',
                                    definition: 'The leaves (and sometimes tender stems) of an aromatic plant, used fresh, dried, frozen or as a paste. Examples in the standard: rosemary, mint, thyme and basil.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Spice',
                                    definition: 'The seed, bark, root, fruit or bud of an aromatic plant, usually dried and used whole or ground. Examples in the standard: peppercorn, nutmeg and cumin.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Type', 'Characteristics', 'Typical Use'],
                                    rows: [
                                        ['Fresh', 'Bright, aromatic and moist; flavour fades quickly after cutting', 'Finishing and garnish; delicate herbs added at the end of cooking'],
                                        ['Dried', 'Concentrated flavour, slower to release it; flavour fades with age', 'Long-cooked dishes, rubs, marinades and spice blends'],
                                        ['Frozen', 'Keeps flavour and colour of fresh herbs, but texture softens', 'Soups, sauces, stews and cooked dishes rather than garnish'],
                                        ['Paste', 'Herbs or spices ground with oil, salt or other ingredients; ready to use', 'Curry paste, pesto, harissa and herb pastes for sauces and marinades'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Herb', 'Flavour', 'Common Applications', 'Tip'],
                                    rows: [
                                        ['Basil', 'Sweet, peppery, aromatic', 'Tomato dishes, pesto, salads, pasta', 'Bruises and blackens easily; add at the end; do not refrigerate bunches for long'],
                                        ['Mint', 'Cool, fresh, sweet', 'Salads, sauces, lamb, desserts, beverages', 'Chiffonade or tear to limit bruising'],
                                        ['Thyme', 'Earthy, slightly floral', 'Stocks, soups, roasts, sauces, poultry', 'Hardy herb; strip leaves from woody stems; add early'],
                                        ['Rosemary', 'Pine-like, resinous, strong', 'Roasted meats, potatoes, breads, marinades', 'Use sparingly; strip needles and chop finely'],
                                        ['Parsley, cilantro, dill, chives', 'Fresh, clean, grassy, citrusy or oniony', 'Garnish, sauces, salads, fish, eggs', 'Delicate; add at the end of cooking'],
                                        ['Sage, oregano, bay leaf, tarragon', 'Savoury, earthy or anise-like', 'Stuffings, sauces, stocks, stews, poultry and fish', 'Bay leaf is removed before serving'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Spice', 'Form', 'Flavour and Use'],
                                    rows: [
                                        ['Peppercorn (black, white, green, pink)', 'Whole, cracked or ground', 'Heat and pungency; grind fresh; white pepper is used in pale sauces'],
                                        ['Nutmeg', 'Whole, grated fresh', 'Warm, sweet; béchamel, cream sauces, vegetables, baking'],
                                        ['Cumin', 'Seed or ground', 'Earthy, warm; curries, chili, legumes, spice blends'],
                                        ['Cinnamon, cloves, allspice', 'Whole or ground', 'Warm, sweet; baking, braises, spiced dishes'],
                                        ['Paprika, chili, turmeric', 'Ground', 'Colour and heat; stews, rubs, rice dishes'],
                                        ['Coriander seed, mustard seed, fennel seed', 'Whole or ground', 'Pickling, curries, sausages, rubs'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Freshness Indicator', 'Good Quality', 'Reject or Downgrade'],
                                    rows: [
                                        ['Hydration', 'Crisp, perky leaves and stems; fresh-cut ends', 'Wilted, limp or dried-out leaves'],
                                        ['Colour', 'Bright, even colour typical of the herb', 'Yellowing, browning or black spots'],
                                        ['Texture', 'Firm, not slimy or mushy', 'Slimy, sticky, mouldy or soggy'],
                                        ['Aroma', 'Clean, strong aroma typical of the herb or spice', 'Weak, stale or musty smell'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Choose the form (fresh, dried, frozen or paste) according to the desired result and recipe specifications.',
                                        'Identify herbs and spices that complement the flavours of the recipe, not ones that compete with them.',
                                        'Check dried herbs and spices for aroma, colour and dates: faded colour and little smell mean the flavour is gone.',
                                        'Keep dried herbs and spices in airtight containers away from heat, light and moisture, labelled and dated.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Freshness questions in produce use the same signals: hydration, colour and texture. If an answer mentions wilting, yellowing, slime or no aroma, that product is the one to refuse or not use.',
                                },
                            ],
                        },
                        {
                            id: 'ch09-s2',
                            title: '9.2 Cleaning Herbs (C-10.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Herbs grow close to the ground and often carry soil, sand and insects. They are also delicate, so they must be cleaned gently to maintain their quality and freshness. The methods are soaking, rinsing, shaking and drying.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Step', 'Method', 'Why'],
                                    rows: [
                                        ['1. Soak', 'Submerge the herbs in a large bowl or sink of cold water and swish gently', 'Grit and soil fall to the bottom instead of being poured back over the herbs'],
                                        ['2. Lift out', 'Lift the herbs out by hand rather than pouring the water through a colander', 'Keeps the sediment in the bowl'],
                                        ['3. Rinse', 'Rinse in clean cold water if still gritty (sandy herbs such as chives and cilantro may need a second soak)', 'Removes remaining soil'],
                                        ['4. Shake and dry', 'Shake off water, then spin gently in a salad spinner or blot with clean towels', 'Excess water causes dilution, bruising and rapid spoilage'],
                                        ['5. Store', 'Wrap loosely in a clean damp paper towel in a covered container in the refrigerator; stand stems of soft herbs like parsley in a little water', 'Keeps herbs hydrated without waterlogging'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Use cold clean water; hot water cooks and wilts herbs.',
                                        'Handle gently: rough handling bruises leaves, releases oils and turns them dark.',
                                        'Clean herbs just before use or as part of the day mise en place, and dry them well before chopping.',
                                        'Wash hands and sanitize the board and knife before processing herbs that will be served raw.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Why must herb quality be maintained during cleaning? Because bruised, wet or overworked herbs lose aroma and flavour and spoil faster. Gentle handling, cold water and thorough drying are the answers.',
                                },
                            ],
                        },
                        {
                            id: 'ch09-s3',
                            title: '9.3 Processing Herbs and Spices (C-10.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Processing releases flavour and prepares herbs and spices for the recipe. The technique is chosen for the result: chopping or tearing for garnish, crushing or grinding for flavour, roasting for depth, and blending into oils, vinegars and pastes.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Technique', 'How', 'Best For'],
                                    rows: [
                                        ['Chopping', 'Fine, sharp knife; gather the herbs and rock the knife; do not crush', 'Parsley, chives, dill, thyme leaves'],
                                        ['Chiffonade', 'Stack leaves, roll tightly and slice into thin ribbons', 'Basil and mint'],
                                        ['Tearing', 'Tear by hand to avoid bruising from a blade', 'Basil and mint for rustic dishes'],
                                        ['Rubbing', 'Rub dried herbs between the fingers to release oils', 'Dried oregano, thyme and rosemary'],
                                        ['Crushing', 'Mortar and pestle, or the flat of a knife', 'Whole spices, garlic and herb pastes'],
                                        ['Roasting (toasting)', 'Heat whole spices in a dry pan until fragrant, then cool and grind', 'Cumin, coriander, mustard seed, peppercorns'],
                                        ['Grating', 'Fine grater on whole spices', 'Nutmeg, cinnamon sticks'],
                                        ['Grinding', 'Spice grinder or mortar immediately before use', 'Peppercorns, cumin, coriander'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool', 'Use'],
                                    rows: [
                                        ['Mortar and pestle', 'Crush and blend spices, herbs and pastes'],
                                        ['Grinders', 'Grind whole spices and peppercorns'],
                                        ['Knives', 'Chop, mince and chiffonade herbs'],
                                        ['Graters', 'Grate nutmeg and whole spices'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Rule', 'Explanation', 'Example'],
                                    rows: [
                                        ['Dried to fresh ratio', 'Dried herbs are more concentrated; use about one part dried to three parts fresh', 'A recipe calling for 45 mL (3 tbsp) fresh thyme needs about 15 mL (1 tbsp) dried'],
                                        ['When to add', 'Hardy herbs (thyme, rosemary, bay) go in early; delicate herbs (basil, parsley, chives, dill) go in at the end', 'Add thyme to a braise at the start and basil to tomato sauce at the end'],
                                        ['Whole versus ground', 'Whole spices keep flavour longer; ground spices lose aroma faster', 'Grind cumin as needed, not weeks ahead'],
                                        ['Timing', 'Chop or grind close to use; cut herbs lose aroma quickly', 'Cut basil at the last minute'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Use tools and equipment according to manufacturer specifications, and clean spice grinders between spices so flavours do not carry over.',
                                        'Prepare herb and spice-flavoured oils, vinegars and pastes according to recipe specifications.',
                                        'Maintain quality during storage and application: cover, label, date and keep away from heat and light.',
                                        'Plan the time needed to prepare and process herbs and spices for the dish so they are ready at the right moment.',
                                        'Taste and adjust: spices vary in strength, and flavour continues to develop during cooking.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Fresh herbs and garlic stored in oil at room temperature can grow Clostridium botulinum, the bacteria that produce botulism toxin. Herb or garlic oils must be made in small batches, kept refrigerated, labelled with the date and discarded according to company policy and public health regulations. Never leave them on a shelf.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Roasting spices in a dry pan releases essential oils and deepens flavour, and the signal that they are ready is aroma, not colour alone. Stop as soon as they smell fragrant, because burned spices turn bitter.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 10 — VEGETABLES (C-11)
                // ============================================================
                {
                    id: 'ch-10',
                    number: 10,
                    title: 'Vegetables',
                    subtitle: 'Task C-11 · Prepares vegetables (5 exam questions)',
                    isFree: false,
                    estimatedMinutes: 85,
                    sections: [
                        {
                            id: 'ch10-s1',
                            title: '10.1 Selecting Vegetables (C-11.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Vegetables are a staple of most meals and the focus of growing plant-based demand. Selection starts with the recipe, the market form and availability, and ends with sensory assessment of freshness and quality: firmness, colour, texture and aroma.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Produce',
                                    definition: 'Fresh fruits and vegetables (glossary term).',
                                },
                                {
                                    type: 'table',
                                    headers: ['Classification', 'Examples', 'Characteristics'],
                                    rows: [
                                        ['Leaf', 'Lettuce, spinach, kale, chard, cabbage leaves', 'Tender, high water, cook very quickly or are eaten raw; wilt and spoil fast'],
                                        ['Root', 'Carrot, beet, parsnip, turnip, radish', 'Dense, store well, usually need longer cooking; carrots and beets are sweet'],
                                        ['Tuber', 'Potato, sweet potato, yam', 'Starchy storage organs; potatoes vary from waxy to starchy and behave differently when cooked'],
                                        ['Cruciferous', 'Broccoli, cauliflower, cabbage, Brussels sprouts', 'Contain sulphur compounds; overcooking gives strong odours and dull colour'],
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Other vegetables you will meet include bulbs (onion, garlic, leek), stems (celery, asparagus), fruit vegetables (tomato, pepper, squash, cucumber, eggplant), legumes and mushrooms. Wild mushrooms must come from a reliable and high-quality supplier known as a forager (glossary term).',
                                },
                                {
                                    type: 'table',
                                    headers: ['Market Form', 'Description', 'Notes'],
                                    rows: [
                                        ['Whole', 'Fresh, unprocessed vegetable', 'Best quality and flavour; needs full cleaning and trimming'],
                                        ['Peeled', 'Peeled and sometimes trimmed', 'Saves labour; check for browning and shelf life'],
                                        ['Cut', 'Pre-cut, such as diced onion or shredded cabbage', 'Convenient; shorter shelf life; keep cold'],
                                        ['Bulk frozen', 'Frozen in a block or bag', 'Pieces freeze together; thaw or cook as directed'],
                                        ['Individual quick frozen (IQF)', 'Each piece frozen separately', 'Portion without thawing the whole bag; cook from frozen'],
                                        ['Canned', 'Cooked and sealed', 'Needs heating only; softer texture; watch sodium'],
                                        ['Dehydrated', 'Dried', 'Rehydrate or add to soups and stews; check for sulphites'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Freshness Indicator', 'Good Quality', 'Poor Quality'],
                                    rows: [
                                        ['Firmness', 'Firm, crisp, heavy for its size', 'Soft, limp, rubbery, shrivelled or spongy'],
                                        ['Colour', 'Bright, even colour typical of the vegetable', 'Yellowing greens, dull colour, dark spots or mould'],
                                        ['Texture', 'Smooth skin, crisp leaves', 'Slimy, sprouting, wet or wrinkled'],
                                        ['Aroma', 'Fresh, clean smell', 'Sour, musty or off smell'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Factor Affecting Result', 'Effect on Flavour, Colour, Texture and Nutrients'],
                                    rows: [
                                        ['Cooking process', 'Overcooking softens texture, dulls colour and destroys vitamins; undercooking leaves vegetables tough and sometimes harder to digest'],
                                        ['Acids and alkalis', 'Change pigment colours and affect texture (see section 10.4)'],
                                        ['Water amount', 'More water leaches water-soluble vitamins and flavour; less water or steaming preserves them'],
                                        ['Size', 'Large pieces cook slowly and unevenly; small pieces lose nutrients faster'],
                                        ['Cut', 'More cut surface means faster cooking, more nutrient loss and more oxidation'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Factors to consider when selecting: local availability, seasonal availability, freshness, storage life, applications, how processed the product is, sustainability and ripeness.',
                                        'Identify dietary requirements specific to vegetables, including cultural, allergies, ethical, religious, health-related, environmental and personal preferences. Dehydrated vegetables may contain sulphites, which are a priority allergen.',
                                        'Order or choose the market form that matches the labour, time and quality the recipe needs.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Choosing a market form is a trade-off between cost, labour and quality. Whole fresh vegetables offer the best quality for the price but need the most labour; IQF vegetables are consistent and quick but only suit some dishes.',
                                },
                            ],
                        },
                        {
                            id: 'ch10-s2',
                            title: '10.2 Cleaning and Storing Vegetables (C-11.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Raw vegetables can carry soil, pesticide residue, insects and bacteria. Cleaning removes them while keeping the vegetable crisp and flavourful. The procedures are washing, paring, brushing, rinsing and soaking, chosen for the type of vegetable and its as-purchased condition.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Vegetable Type', 'Cleaning Procedure', 'Tool'],
                                    rows: [
                                        ['Leafy greens', 'Submerge in cold water, swish, lift out and repeat until no grit is left; dry in a salad spinner', 'Sink, salad spinner'],
                                        ['Root vegetables and tubers', 'Scrub under cold running water to remove soil, then peel if required', 'Brush, peeler, paring knife'],
                                        ['Cruciferous vegetables', 'Soak heads in cold water to dislodge insects and dirt; rinse; trim', 'Bowl, knife'],
                                        ['Leeks and similar layered vegetables', 'Split lengthwise and rinse between layers to remove trapped sand', 'Knife, sink'],
                                        ['Mushrooms', 'Brush or wipe; rinse briefly if needed and dry quickly because they absorb water', 'Brush, towel'],
                                        ['Peppers, tomatoes, cucumbers', 'Rinse under running water', 'Brush if needed'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select cleaning tools such as gloves, salad spinners, knives and brushes according to the vegetable type and its as-purchased condition.',
                                        'Apply cleaning procedures according to vegetable type and jurisdictional regulations (WHMIS, HACCP, OH&S and public health regulations).',
                                        'Maintain quality during cleaning: handle gently, use cold water and do not soak vegetables longer than needed, because water-soluble nutrients and flavour leach out.',
                                        'Wash vegetables before cutting, and wash hands and sanitize boards between raw produce and other foods.',
                                        'Store cleaned vegetables according to type and procedure to preserve quality (secondary storage): covered, labelled, dated and refrigerated.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Secondary Storage Method', 'Used For'],
                                    rows: [
                                        ['Dry and wrapped in a damp towel inside a container', 'Washed leafy greens and herbs'],
                                        ['Submerged in cold water', 'Peeled or cut potatoes, to prevent browning and discolouration'],
                                        ['Acidulated water (lemon juice or vinegar added)', 'Artichokes, celeriac and other vegetables that oxidize quickly'],
                                        ['Covered, refrigerated and labelled', 'Most cleaned and cut vegetables'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Vegetables are not sanitary just because they look clean. Wash them with potable water, keep raw produce away from raw meat, poultry and seafood, and never use a board or knife that touched raw meat to cut produce that will be served raw.',
                                },
                            ],
                        },
                        {
                            id: 'ch10-s3',
                            title: '10.3 Processing Vegetables: Cuts, Garnishes and Trim (C-11.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Uniform cuts cook evenly and look professional. A mixed batch of large and small pieces means that some pieces are raw while others turn to mush. The cook selects the tools and methods for the recipe and the desired appearance, and minimizes waste by using trim.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Cut', 'Typical Dimensions', 'Description and Use'],
                                    rows: [
                                        ['Large dice', '19 mm (3/4 in) cubes', 'Stews, roasting and long-cooked dishes'],
                                        ['Medium dice', '12 mm (1/2 in) cubes', 'Soups, sautés and general use'],
                                        ['Small dice', '6 mm (1/4 in) cubes', 'Cut from a batonnet; sauces, salsa, garnish'],
                                        ['Brunoise', '3 mm (1/8 in) cubes', 'Cut from a julienne; very fine dice for refined garnishes and sauces'],
                                        ['Batonnet', '6 mm × 6 mm × 5–6 cm (1/4 × 1/4 × 2–2.5 in)', 'Stick cut; French fries, crudités, vegetable sticks'],
                                        ['Julienne', '3 mm × 3 mm × 5–6 cm (1/8 × 1/8 × 2–2.5 in)', 'Thin matchsticks; garnishes, salads, stir-fries'],
                                        ['Chiffonade', 'Thin ribbons', 'Leafy vegetables and herbs rolled and sliced'],
                                        ['Mince', 'Very fine pieces', 'Garlic, shallots, aromatics'],
                                        ['Rondelle (round slice) and bias', 'Slices across or on an angle', 'Carrots, zucchini, celery for sautés and stir-fries'],
                                        ['Tourné', '7-sided, barrel or football shape about 5 cm long', 'Classical garnish for potatoes and root vegetables'],
                                        ['Mirepoix', 'Rough cut of onion, carrot and celery (2:1:1)', 'Aromatic base for stocks and braises; size matched to cooking time'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Sizes can vary slightly between kitchens and references, so follow the recipe or house standard. For the exam, remember the relationships: brunoise is a dice cut from julienne, and a small dice is cut from batonnet. Julienne is smaller than batonnet, and cut size follows cooking time: long cooking uses large cuts and short cooking uses small cuts.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Knives (chef, paring)', 'All hand cuts; sharpness gives clean, even cuts'],
                                        ['Mandoline', 'Fast, uniform slices, julienne and batonnet; use the guard and a cut-resistant glove'],
                                        ['Crinkle cutters', 'Decorative ridged cuts for chips and garnishes'],
                                        ['Food processor and slicer attachment', 'High-volume slicing, shredding and chopping'],
                                        ['Vegetable carving tools', 'Garnishes and showpieces'],
                                        ['Juicer and blender', 'Vegetable juice and purées'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Processing Method', 'Purpose'],
                                    rows: [
                                        ['Cutting and slicing', 'Size and shape for even cooking and appearance'],
                                        ['Acidulating', 'Treating cut surfaces with acid (lemon juice, vinegar) or storing in acidulated water to slow browning (oxidation)'],
                                        ['Juicing', 'Extracting liquid for sauces, soups and beverages'],
                                        ['Puréeing', 'Smooth soups, sauces and spreads'],
                                        ['Shaping and carving', 'Garnishes and decorative cuts'],
                                        ['Shaving and grating', 'Fine textures for salads and toppings'],
                                        ['Drying', 'Preserving vegetables or making crisps'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Modify vegetable texture with methods such as salting (to draw out water from eggplant or cucumber), soaking in ice water to crisp, blanching and puréeing.',
                                        'Cut vegetables for garnish to the desired shape and appearance, keeping cuts uniform.',
                                        'Maintain quality during processing: work quickly, keep vegetables cold and cut as close to cooking as practical.',
                                        'Minimize waste and use trim to maximize yield: peelings and ends go to stocks, soups, purées, staff meals and sauces where food safety allows.',
                                        'Store cut vegetables covered, cold and labelled; keep potatoes submerged in water and acidulate vegetables that oxidize.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Cuts from knives and mandolines are among the most common kitchen injuries. Keep knives sharp, use the claw grip, stabilize the board, and always use the guard or a cut-resistant glove on a mandoline. Never try to catch a falling knife.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Yield Example', 'Calculation'],
                                    rows: [
                                        ['Yield percentage', 'A 10 kg case of carrots gives 8.5 kg after peeling and trimming: 8.5 ÷ 10 × 100 = 85%'],
                                        ['AP needed for a given EP', 'Need 17 kg EP at 85%: 17 ÷ 0.85 = 20 kg AP'],
                                        ['Cost per kg EP', 'AP $2.00 per kg at 85%: 2.00 ÷ 0.85 = about $2.35 per kg EP'],
                                    ],
                                },
                            ],
                        },
                        {
                            id: 'ch10-s4',
                            title: '10.4 Cooking Vegetables (C-11.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cooking vegetables well means choosing the method for the vegetable and the desired result, protecting colour and texture, preserving nutrition, and judging doneness by sensory assessment. Overcooked vegetables are one of the most common quality complaints in any kitchen.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Cooking Method', 'How It Works', 'Best For'],
                                    rows: [
                                        ['Blanching', 'Cooking briefly in boiling salted water, then cooling quickly in ice water (shocking)', 'Setting colour, loosening skins, par-cooking and preparing for freezing or later finishing'],
                                        ['Steaming', 'Cooking by steam without direct contact with water', 'Retaining nutrients, colour and shape; broccoli, asparagus, carrots'],
                                        ['Sautéing', 'Quick cooking in a small amount of fat over high heat', 'Tender, small cuts; mushrooms, zucchini, peppers, spinach'],
                                        ['Grilling and broiling', 'Dry heat from below or above', 'Peppers, eggplant, zucchini, asparagus, onions'],
                                        ['Roasting and baking', 'Dry oven heat; caramelizes sugars', 'Root vegetables, squash, potatoes, brassicas'],
                                        ['Frying', 'Pan frying or deep frying in hot fat', 'Potatoes, tempura, fritters'],
                                        ['Braising', 'Browning, then slow cooking in a small amount of liquid in a covered pan', 'Cabbage, fennel, leeks, root vegetables, tough greens'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Pigment (Colour Group)', 'Examples', 'Effect of Acid', 'Effect of Alkali', 'Kitchen Practice'],
                                    rows: [
                                        ['Chlorophyll (green)', 'Broccoli, green beans, spinach, peas', 'Turns dull olive-brown', 'Stays bright but turns the texture mushy and destroys nutrients', 'Cook quickly in plenty of boiling salted water, uncovered at first so acids can escape, then shock in ice water'],
                                        ['Carotenoids (orange and yellow)', 'Carrots, squash, sweet potato, corn', 'Little change', 'Little change', 'Stable colour; cook until tender in any method'],
                                        ['Anthocyanins (red and purple)', 'Red cabbage, beets, radicchio', 'Stays or turns bright red', 'Turns blue, purple or grey-green', 'Add a little acid (vinegar, lemon, wine); cook beets whole to limit bleeding'],
                                        ['Flavonoids (white)', 'Cauliflower, onion, potato, parsnip', 'Stays white', 'Turns yellow', 'A small amount of acid (lemon juice) keeps them white; avoid alkaline water'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Start root vegetables and tubers in cold water so heat reaches the centre as the outside cooks; start above-ground vegetables in boiling water so they cook quickly and keep colour.',
                                        'Cook cruciferous vegetables briefly and uncovered; overcooking releases strong sulphur odours and dulls colour.',
                                        'Do not overcrowd the pan or pot: crowding lowers the temperature, so vegetables steam instead of sauté or roast, and the water stops boiling when product is added.',
                                        'Cook in batches close to service to hold quality; use cooking requirements of temperature, timing and batch size to guide the method.',
                                        'Apply cooking techniques to market forms according to manufacturer specifications: IQF vegetables are usually cooked from frozen, canned vegetables only need heating, and dehydrated vegetables need rehydrating.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Degree of Doneness', 'Description', 'Typical Use'],
                                    rows: [
                                        ['Raw or crisp', 'Uncooked, firm', 'Salads and crudités'],
                                        ['Blanched or crisp-tender', 'Bright, slightly firm; barely cooked', 'Green vegetables for sautés or salads'],
                                        ['Al dente or tender-crisp', 'Cooked through with slight resistance to the bite', 'Side dishes, stir-fries'],
                                        ['Tender', 'Soft through the centre, holds shape', 'Roasted, boiled and steamed vegetables'],
                                        ['Soft or very tender', 'Falls apart easily', 'Purées, soups and braises'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Determine doneness through sensory assessment: pierce with a knife tip or fork, taste, and check colour and texture, rather than relying on time alone.',
                                        'Preserve nutritional value: use the least water, cook for the shortest time, cut into larger pieces, steam where possible, and use cooking liquids in soups and sauces instead of pouring them away.',
                                        'Do not add baking soda to green vegetables: it keeps the colour but destroys texture and vitamins.',
                                        'Salt the cooking water for blanching and boiling so vegetables are seasoned and keep colour.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Moisture and hot oil are a dangerous mix. Pat vegetables dry before frying, shake frozen vegetables free of ice crystals, lower baskets slowly and keep a safe distance. Use a spider, basket or tongs for blanching and always lift pots of boiling water away from your body.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Colour questions follow the pigment rules: green vegetables dull with acid and prolonged heat, red vegetables stay red with acid, white vegetables stay white with a little acid, and orange vegetables are the most stable. If a green vegetable turns olive, the cause is acid or overcooking.',
                                },
                            ],
                        },
                        {
                            id: 'ch10-s5',
                            title: '10.5 Finishing and Holding Vegetables (C-11.05)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Finishing turns a cooked vegetable into a menu item: it adds flavour, richness, colour and shine. Finishing is also where holding rules matter, because cooked vegetables lose colour, texture and nutrients the longer they sit.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Technique', 'Description', 'Example'],
                                    rows: [
                                        ['Glazing', 'Coating with a shiny mixture of butter and sugar, honey or reduced stock', 'Glazed carrots, pearl onions, beets'],
                                        ['Saucing', 'Adding a sauce at service', 'Hollandaise on asparagus, cheese sauce on cauliflower'],
                                        ['Gratin', 'Topping with cheese, breadcrumbs or cream and browning in the oven or under the broiler', 'Potato gratin, cauliflower gratin'],
                                        ['Sautéing', 'Quick toss in fat with aromatics at the end', 'Blanched green beans finished with butter and garlic'],
                                        ['Garnishing', 'Adding herbs, toasted nuts, zest or crisp elements', 'Chopped parsley, toasted almonds'],
                                        ['Seasoning', 'Adjusting salt, pepper, acid and spices to taste', 'A squeeze of lemon on steamed broccoli'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select the finishing technique according to the desired result and recipe specifications, and apply it according to the vegetable type.',
                                        'Season at the right time: salt, acid and fresh herbs finish a dish; adding them too early dulls colour and flavour.',
                                        'Hold cooked vegetables according to jurisdictional regulations, recipe specifications and desired results: hot food at 60 °C or above, and cold food at 4 °C or below.',
                                        'Hold in small batches, covered and for as short a time as possible; replenish rather than leaving a large pan on a steam table.',
                                        'Cool leftover cooked vegetables rapidly using shallow pans or an ice bath, label and date them, and reheat to 74 °C if re-served.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Holding questions pair quality and safety: cooked vegetables held hot must stay at 60 °C or above, but long holding ruins colour and texture. The best answer cooks in smaller, more frequent batches rather than holding a large batch for a long time.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 11 — FRUIT (C-12)
                // ============================================================
                {
                    id: 'ch-11',
                    number: 11,
                    title: 'Fruit',
                    subtitle: 'Task C-12 · Prepares fruit (4 exam questions)',
                    isFree: false,
                    estimatedMinutes: 60,
                    sections: [
                        {
                            id: 'ch11-s1',
                            title: '11.1 Selecting Fruit (C-12.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Fruit is used in salads, sauces, soups, garnishes, showpieces and accompaniments, in both sweet and savoury dishes. Selecting good fruit means knowing the classifications, understanding ripeness, and judging quality by firmness, colour and texture.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Classification', 'Examples', 'Characteristics'],
                                    rows: [
                                        ['Tree', 'Apples, pears', 'Firm flesh with a core; many store well; apples and pears brown quickly when cut'],
                                        ['Citrus', 'Oranges, lemons, limes, grapefruit', 'High acid; juice, zest and segments; used for flavour, balance and preventing browning'],
                                        ['Stone', 'Peaches, plums, cherries, apricots', 'Single hard pit; soft when ripe; bruise easily'],
                                        ['Vine', 'Grapes, kiwi, melons', 'Grow on vines; melons have a rind that must be washed before cutting'],
                                        ['Tropical', 'Mango, pineapple, banana, papaya', 'Sensitive to cold; flavour and ripeness vary widely'],
                                        ['Berry', 'Strawberries, blueberries, raspberries, blackberries', 'Delicate and perishable; easily crushed and quick to mould'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Fruit Property', 'Why It Matters'],
                                    rows: [
                                        ['Acid and sugar content', 'Determine sweetness, tartness and how the fruit behaves in cooking; ripe fruit has more sugar and less acid'],
                                        ['Size', 'Affects yield, portions and cooking time'],
                                        ['Colour', 'An indicator of ripeness and quality'],
                                        ['Grade', 'The quality, rating and standards of the product (glossary term)'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Freshness Indicator', 'Good Quality', 'Poor Quality'],
                                    rows: [
                                        ['Firmness', 'Firm for the type, or yielding slightly when ripe', 'Mushy, bruised, shrivelled or rock hard when it should be ripe'],
                                        ['Colour', 'Bright and even for the variety', 'Dull, brown spots, mould or green when it should be ripe'],
                                        ['Texture', 'Smooth, intact skin', 'Wrinkled, split, leaking or sticky skin'],
                                        ['Aroma', 'Sweet, characteristic aroma when ripe', 'Fermented, sour or no aroma'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Ripening Type', 'Behaviour', 'Examples'],
                                    rows: [
                                        ['Ripens after harvest', 'Continues to ripen, soften and sweeten at room temperature; refrigerate once ripe', 'Bananas, pears, avocados, mangoes, peaches, kiwi'],
                                        ['Does not ripen after harvest', 'Must be picked ripe; will not get sweeter once picked', 'Berries, citrus, grapes, pineapple, cherries'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify fruit according to availability, recipe specifications, market form and desired result.',
                                        'Market forms are the same as for vegetables: whole, peeled, cut, dehydrated, bulk frozen, IQF and canned. Frozen fruit suits sauces and baking; fresh fruit suits garnish and presentation.',
                                        'Factors to consider: local availability, seasonal availability, freshness, storage life, applications, how processed the product is, sustainability and ripeness.',
                                        'Identify dietary requirements specific to fruit: allergies (for example kiwi and stone fruits for some guests), sulphites in dried fruit, and cultural, religious, ethical and personal preferences.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'If a recipe needs ripe fruit that is firm now, the answer is to ripen at room temperature, but only for fruit that ripens after harvest. Berries, citrus and pineapple will not improve at room temperature, so select them ripe.',
                                },
                            ],
                        },
                        {
                            id: 'ch11-s2',
                            title: '11.2 Cleaning and Storing Fruit (C-12.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Fruit is often eaten raw, so cleaning is a food safety step. The tools are gloves, knives and brushes, and the procedures are washing, paring, brushing and rinsing, selected for the fruit type and its as-purchased condition and in line with jurisdictional regulations.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Fruit', 'Cleaning Procedure', 'Notes'],
                                    rows: [
                                        ['Berries', 'Rinse gently under cool running water just before use; drain on a towel', 'Washing early makes them soft and moldy; do not soak'],
                                        ['Melons', 'Scrub the rind with a brush under running water before cutting', 'Bacteria on the rind are carried into the flesh by the knife'],
                                        ['Apples, pears, stone fruits, grapes', 'Rinse under running water; rub or brush firm-skinned fruit', 'Peel only if the recipe requires'],
                                        ['Citrus', 'Scrub well before zesting or slicing with the peel', 'Wax and residue can be on the skin'],
                                        ['Tropical fruit (pineapple, mango, papaya)', 'Rinse and scrub the skin before peeling', 'Removes dirt and surface bacteria'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select cleaning tools according to the fruit type and as-purchased condition.',
                                        'Maintain fruit quality during cleaning: handle delicate fruit gently, use cool running water, and do not soak soft fruit.',
                                        'Store cleaned fruit according to type and procedure to preserve quality (secondary storage): covered, labelled and dated, in the refrigerator unless it still needs to ripen.',
                                        'Keep fruit separate from raw meat, poultry and seafood, and use clean, sanitized boards, knives and containers.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Cut melons (watermelon, cantaloupe and honeydew) are treated as potentially hazardous food. Wash the rind first, refrigerate cut melon at 4 °C or colder and do not leave it at room temperature on a buffet beyond the time limits set by company policy and regulations.',
                                },
                            ],
                        },
                        {
                            id: 'ch11-s3',
                            title: '11.3 Processing Fruit: Cuts, Segments and Garnishes (C-12.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Processing fruit follows the same principles as vegetables: uniform cuts, minimal waste, and quality maintained from cutting to service. Fruit has the added challenge of browning and juice loss.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Cut or Technique', 'Description', 'Example'],
                                    rows: [
                                        ['Julienne, baton, brunoise, dice', 'Same shapes as vegetable cuts', 'Apple julienne, mango brunoise, pineapple dice'],
                                        ['Supreme', 'A citrus segment with peel, pith and membrane removed: cut the top and bottom, remove the peel and pith following the curve, then cut between the membranes', 'Orange or grapefruit segments for salads and plated desserts'],
                                        ['Zest', 'Removing only the coloured outer layer of citrus peel', 'Avoid the bitter white pith'],
                                        ['Melon baller and shape cutters', 'Uniform spheres and shapes', 'Melon balls, fruit cups'],
                                        ['Slicing and shaving', 'Thin, even slices', 'Apple slices, strawberry fans'],
                                        ['Juicing', 'Extracting juice for sauces, dressings and beverages', 'Lemon juice, orange juice'],
                                        ['Puréeing', 'Blending to a smooth texture', 'Coulis, sauces, soups'],
                                        ['Carving', 'Decorative shapes', 'Watermelon baskets, fruit garnishes'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Knives', 'All cuts, peeling and segmenting'],
                                        ['Mandoline', 'Even slices and julienne'],
                                        ['Shape cutters and melon baller', 'Uniform shapes'],
                                        ['Juicer and blender', 'Juice and purée'],
                                        ['Spoon', 'Scooping seeds from melons and halved fruit'],
                                        ['Food processor', 'Chopping, puréeing and shredding'],
                                        ['Fruit carving tools', 'Decorative garnishes and showpieces'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Acidulating',
                                    definition: 'Treating cut fruit or vegetables with an acid such as lemon juice (or holding them in acidulated water) to slow oxidation and browning.',
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Prevent browning of apples, pears, bananas, avocados and peaches: toss in lemon juice or an acidulated solution, cut at the last minute and keep cold.',
                                        'Aim for minimal oxidation, good colour, flavour and texture in stored cut fruit; cover tightly and refrigerate.',
                                        'Cut uniformly so pieces look consistent and cook or macerate at the same rate.',
                                        'Minimize waste: use trim, peels and cores for juice, purées, sauces, compotes, syrups, zest and infusions.',
                                        'Modify fruit texture by slicing thin, shaving, puréeing, macerating (soaking in sugar or liquid) or poaching.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Yield Example', 'Calculation'],
                                    rows: [
                                        ['Yield percentage', 'A pineapple weighing 2.0 kg as purchased gives 0.9 kg of cleaned fruit: 0.9 ÷ 2.0 × 100 = 45%'],
                                        ['AP needed for a given EP', 'Need 4.5 kg EP at 45%: 4.5 ÷ 0.45 = 10 kg AP'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The supreme cut is the one fruit-specific cut named in the standard. Remember: peel and pith away, then cut between the membranes so each segment is clean. Fruit that browns quickly is acidulated, not soaked in plain water.',
                                },
                            ],
                        },
                        {
                            id: 'ch11-s4',
                            title: '11.4 Cooking and Finishing Fruit (C-12.04, C-12.05)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cooked fruit appears in desserts, sauces, garnishes and savoury dishes. Heat softens fruit quickly, so the aim is to cook until tender while keeping shape, colour and flavour. The standard names five cooking methods: sautéing, grilling, poaching, frying and baking.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Cooking Method', 'How It Is Done', 'Examples'],
                                    rows: [
                                        ['Sautéing', 'Quick cooking in butter or oil, often with sugar', 'Sautéed apples, bananas, peaches'],
                                        ['Grilling', 'Direct dry heat; caramelizes the sugars', 'Grilled pineapple, peaches, figs'],
                                        ['Poaching', 'Cooking gently in a liquid kept below a simmer', 'Pears in wine or syrup, apricots, quince'],
                                        ['Frying', 'Pan or deep frying, usually battered', 'Apple fritters, banana fritters'],
                                        ['Baking', 'Dry oven heat', 'Baked apples, pies, crisps, cobblers'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Factor', 'Effect on Cooked Fruit'],
                                    rows: [
                                        ['Sugar in the poaching liquid', 'Helps fruit keep its shape; a syrup holds firmness better than plain water'],
                                        ['Acid (lemon juice)', 'Slows softening and helps colour; balances sweetness'],
                                        ['Ripeness', 'Slightly underripe fruit holds shape better when cooked; very ripe fruit is best for purées and sauces'],
                                        ['Heat and time', 'Too much heat or time makes fruit mushy and washes out colour and flavour'],
                                        ['Classification', 'Tree and stone fruits hold shape well; berries collapse quickly and are often added at the end'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select the cooking method according to the fruit classification, the desired result and the recipe specifications, and apply it to the desired result.',
                                        'Determine doneness by sensory assessment: tender when pierced but still holding shape, with good colour and aroma.',
                                        'Apply techniques that maintain pigmentation and texture, and preserve nutritional value by avoiding long cooking and large amounts of water.',
                                        'Cook market forms according to manufacturer specifications: frozen fruit can usually go straight into a sauce or baking, canned fruit is already cooked, and dried fruit needs rehydrating.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Technique', 'Description', 'Example'],
                                    rows: [
                                        ['Glazing', 'Brushing with a shiny coating such as warmed apricot jam or reduced syrup', 'Fruit tarts, baked fruit'],
                                        ['Saucing', 'Adding a sauce, coulis or caramel', 'Poached pears with chocolate sauce'],
                                        ['Sautéing', 'Finishing in a hot pan with butter and sugar', 'Sautéed apples for pork'],
                                        ['Caramelizing', 'Browning the sugar on the surface by heat or a torch', 'Grilled pineapple, crème brûlée with fruit'],
                                        ['Grilling', 'Adding char and flavour with direct heat', 'Grilled peaches for salads'],
                                        ['Garnishing and seasoning', 'Adding herbs, zest or a pinch of salt or acid to balance flavour', 'Mint on berries, lime on mango'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Hold cooked fruit according to jurisdictional regulations, recipe specifications and the desired result: hot at 60 °C or above, or cooled rapidly and refrigerated at 4 °C or below.',
                                        'Hold in small batches, covered, to prevent drying and colour loss.',
                                        'Label and date cooked fruit products, and note allergens such as nuts or dairy in crumble toppings and sauces.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'If a question asks how to poach fruit so it keeps its shape, the answer is a gently heated liquid (below a boil), with sugar in the liquid and fruit that is not overripe. A hard boil breaks the fruit apart.',
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Hot sugar causes severe burns and sticks to the skin. Keep a bowl of cold water nearby, use long-handled utensils for caramelizing and syrup work, and never leave hot sugar unattended.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 4 FRAGMENT (MWA D: Stocks, broths and soups)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 3.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks D-13 and D-14.
        // ============================================================
        {
            id: 'part-4',
            number: 4,
            title: 'Stocks, Broths and Soups (MWA D)',
            description: 'The flavour foundation of the kitchen: stock and broth types, ingredient ratios, simmering, skimming, straining and rapid cooling, then soups from clear to cream, consommé clarification, thickening agents, finishing, garnishing and holding. MWA D carries 12 exam questions across tasks D-13 and D-14.',
            weight: '12 questions (8.0% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 12 — STOCKS AND BROTHS (D-13)
                // ============================================================
                {
                    id: 'ch-12',
                    number: 12,
                    title: 'Stocks and Broths',
                    subtitle: 'Task D-13 · Prepares stocks and broths (6 exam questions)',
                    isFree: false,
                    estimatedMinutes: 75,
                    sections: [
                        {
                            id: 'ch12-s1',
                            title: '12.1 Types of Stocks and Broths and Selecting Ingredients (D-13.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Stocks and broths add flavour and texture to soups, sauces, braises, grains and many other dishes. Good stock starts with good ingredients, so the first step is choosing the right ones for the type of stock or broth wanted and judging their freshness and quality through sensory assessment.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Stock',
                                    definition: 'A clear, thin, flavoured liquid prepared from simmering bones, vegetables and aromatics (glossary term). It is mainly a building block for sauces and soups and is usually unseasoned.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Broth',
                                    definition: 'A thin, flavoured liquid prepared primarily from simmering meats; bones and vegetables may also be added (glossary term). A broth is seasoned and can be served as it is.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Type of Stock', 'Main Ingredients', 'Method', 'Typical Uses'],
                                    rows: [
                                        ['White stock', 'Unroasted bones (chicken, veal or beef), pale mirepoix, aromatics, cold water', 'Bones are rinsed or blanched, then simmered gently; no browning', 'Velouté sauces, cream soups, light sauces, poaching'],
                                        ['Brown stock', 'Bones roasted until deep brown, browned mirepoix, tomato product, aromatics, cold water', 'Bones and vegetables are roasted, then the roasting pan is deglazed and everything simmered for a long time', 'Demi-glace, brown sauces, braises, French onion soup'],
                                        ['Court-bouillon', 'Water, acid (wine, vinegar or lemon), vegetables, herbs and spices; no bones', 'Quick simmer, usually 30 to 45 minutes; strained before use', 'Poaching fish, shellfish and some vegetables'],
                                        ['Fumet', 'Bones and trimmings of lean white fish, sweated vegetables, white wine, water', 'Short simmer (about 30 to 45 minutes); long cooking makes it bitter', 'Fish sauces, seafood soups, poaching'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Type of Broth', 'Description', 'Typical Uses'],
                                    rows: [
                                        ['Clear broth', 'Seasoned, clear liquid from gently simmered meat, poultry or vegetables; skimmed so it stays clear', 'Consommé base, noodle and vegetable soups, sipping broth'],
                                        ['Bone broth', 'Bones simmered for a long time to extract collagen, minerals and flavour; often a splash of acid is added', 'Sipping broth, sauces, soup bases'],
                                        ['Emulsified broth', 'Bones boiled vigorously so fat and collagen blend into the liquid, giving a milky, rich body', 'Ramen-style broths such as pork bone broth'],
                                        ['Dashi', 'Japanese broth made by steeping kombu (kelp), often with katsuobushi (dried bonito flakes); kombu is removed before the water boils', 'Miso soup, noodle broths, sauces'],
                                        ['Miso broth', 'Miso paste dissolved into dashi or stock; not boiled after the miso is added, to protect flavour and aroma', 'Miso soup, ramen, marinades'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Stock Ingredient', 'Role', 'Notes'],
                                    rows: [
                                        ['Bones', 'Give body (gelatin from collagen), flavour and richness', 'Veal bones give the most gelatin and a neutral flavour; chicken is mild; beef is stronger; fish bones must be lean and white'],
                                        ['Vegetables (mirepoix)', 'Add sweetness and depth', 'Onion, carrot and celery in a 2:1:1 ratio by weight; use white mirepoix for white stock'],
                                        ['Aromatics', 'Add fragrance and complexity', 'Sachet d’épices or bouquet garni: bay leaf, thyme, parsley stems, peppercorns, garlic'],
                                        ['Water', 'The extraction medium', 'Always start with cold water'],
                                        ['Proteins', 'Meat, poultry carcasses and trimmings add flavour (and clarity problems if poorly handled)', 'Use trim and carcasses; avoid fatty trim for clear stock'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Selection Factor', 'What to Consider'],
                                    rows: [
                                        ['Freshness', 'Bones and trim must be fresh and properly stored; off smells give off-flavours that cannot be hidden'],
                                        ['Cost', 'Stock is a way to use bones, trim and vegetable ends; balance cost against flavour and body'],
                                        ['Fat content', 'Fat clouds and greases stock; choose lean bones and trim fat for clear stocks'],
                                        ['Intended application', 'Brown stock for brown sauces, white stock for light dishes, fumet for fish'],
                                        ['Type of bone', 'Young animal bones (veal) are rich in cartilage; knuckle, neck and feet give extra gelatin'],
                                        ['Cartilage content', 'More cartilage means more gelatin and a stock that sets when cold'],
                                        ['Managing trim', 'Collect and store trim safely so it can be used rather than wasted'],
                                        ['Ingredient availability', 'Seasonal vegetables and what is on hand'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify and choose ingredients according to the stock or broth wanted.',
                                        'Identify freshness and quality indicators through sensory assessment: firm vegetables with good colour and texture, fresh-smelling bones with no slime or odour.',
                                        'Consider dietary requirements: vegetable stocks suit vegetarian and vegan guests, but dashi made with bonito flakes is not vegetarian, miso contains soy, and stock bases can contain gluten, celery, fish, shellfish or high sodium. Halal and Kosher guests need approved bones and ingredients.',
                                        'Convenience bases and concentrates can replace made-from-scratch stock, but they must be checked for sodium, allergens and quality.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Stock versus broth is a regular knowledge question. Stock is made mainly from bones, vegetables and aromatics and is unseasoned, so it is a building block. Broth is made primarily from meat and is seasoned, so it can be served as it is. Remember the four stocks (white, brown, court-bouillon, fumet) and the five broths (dashi, emulsified, clear, bone, miso).',
                                },
                            ],
                        },
                        {
                            id: 'ch12-s2',
                            title: '12.2 Processing Stock and Broth Ingredients (D-13.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Preparation decides how well the stock will turn out. The cook selects the tools and equipment, calculates the quantities needed for the required yield, gathers ingredients so they are accessible in sequence, measures them and prepares them.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Stockpot', 'Tall, narrow pot that limits evaporation and keeps ingredients submerged'],
                                        ['Spigot pot', 'Stockpot with a tap at the bottom so stock can be drained without lifting a heavy hot pot'],
                                        ['Roasting pans', 'Roasting bones and vegetables for brown stock; deglazing'],
                                        ['Skimmers and ladles', 'Removing foam and fat and transferring stock'],
                                        ['Strainers (china cap, chinois)', 'Removing solids; a fine mesh gives a clearer stock'],
                                        ['Cheesecloth', 'Lining a strainer for a very clear result; wrapping aromatics as a sachet'],
                                        ['Butcher’s twine', 'Tying bouquet garni and securing sachets'],
                                        ['Cutting boards and knives', 'Cutting mirepoix and trimming bones and carcasses'],
                                        ['Scales', 'Measuring ingredients and checking yield'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Preparation Item', 'Standard Practice'],
                                    rows: [
                                        ['Bones', 'Cut or chop into smaller pieces to expose more surface; rinse or blanch for white stock; roast for brown stock'],
                                        ['Mirepoix', 'Cut size matches cooking time: large pieces for long cooking, smaller pieces for short cooking; leave the onion skin on for colour in brown stock if the recipe allows'],
                                        ['Aromatics', 'Tie in a bouquet garni with butcher’s twine or place in a sachet of cheesecloth so they can be removed easily'],
                                        ['Tomato product', 'Added to brown stock and browned in the pan (a step called pincé) for colour and flavour'],
                                        ['Fish bones', 'Remove gills and blood and rinse well; use only lean white fish for fumet'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Typical Starting Ratio (per 4 L of water)', 'Amount', 'Notes'],
                                    rows: [
                                        ['Meat or poultry bones (white or brown stock)', 'About 2 kg', 'Roughly half the weight of the water'],
                                        ['Mirepoix (meat stocks)', 'About 500 g', 'Onion 250 g, carrot 125 g, celery 125 g'],
                                        ['Fish bones (fumet)', 'About 2 kg', 'With about 250 g mirepoix and 250 mL white wine'],
                                        ['Aromatics', 'Sachet or bouquet garni', 'Bay leaf, thyme, parsley stems, peppercorns, garlic'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Typical Simmering Time', 'Approximate Time'],
                                    rows: [
                                        ['Fish stock (fumet)', '30 to 45 minutes'],
                                        ['Court-bouillon', '30 to 45 minutes'],
                                        ['Chicken stock', '3 to 4 hours'],
                                        ['Beef and veal stock', '6 to 8 hours'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example: Scaling a Stock Recipe', 'Calculation'],
                                    rows: [
                                        ['Conversion factor', 'The recipe yields 4 L and 20 L are needed: 20 ÷ 4 = 5'],
                                        ['Bones', '2 kg × 5 = 10 kg'],
                                        ['Mirepoix', '500 g × 5 = 2.5 kg'],
                                        ['Water', '4 L × 5 = 20 L of cold water (the finished volume will be lower because of evaporation, so scale up a little if exact yield matters)'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Gather and measure all ingredients before starting so they are accessible in sequence.',
                                        'Use a pot of the right size: the bones should be covered by water with some room above, not crammed or floating in a huge pot.',
                                        'Keep trim and bones cold and covered until needed; do not leave them in the danger zone.',
                                        'Remember that ratios are starting points: recipes vary with the type of bone, cooking time and the intensity wanted.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Cooking time and cut size go together. Long-simmered stocks use larger cuts of mirepoix so vegetables do not disintegrate and cloud the stock, while short-cooked stocks such as fumet use smaller cuts so they release flavour in the available time.',
                                },
                            ],
                        },
                        {
                            id: 'ch12-s3',
                            title: '12.3 Cooking Stocks and Broths (D-13.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Stock is made slowly and gently. The goal is to extract flavour, gelatin and colour from the ingredients while keeping the liquid clear. Most mistakes come from heat that is too high, stirring, or poor skimming.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Step', 'What to Do', 'Reason'],
                                    rows: [
                                        ['1. Prepare bones and vegetables', 'Rinse or blanch bones (white stock) or roast bones and vegetables until deeply browned (brown stock)', 'Blanching removes impurities; roasting builds colour and flavour'],
                                        ['2. Deglaze', 'Add liquid (water, wine or stock) to the hot roasting pan and scrape the browned bits (fond) loose; add the liquid to the pot', 'Captures concentrated flavour'],
                                        ['3. Start with cold water', 'Cover the bones with cold water and bring up slowly', 'Proteins and impurities coagulate gradually and rise to the surface, where they can be skimmed'],
                                        ['4. Bring to a simmer', 'Reach a gentle simmer, with small bubbles breaking the surface lightly, according to the recipe', 'A boil churns fat and impurities into the liquid, making it cloudy and greasy'],
                                        ['5. Skim', 'Remove foam, impurities and fat regularly with a skimmer or ladle', 'Gives a clear, clean-tasting stock'],
                                        ['6. Add aromatics at the right time', 'Add the mirepoix and sachet or bouquet garni according to the cooking time', 'Prevents bitter, overcooked flavours and loss of aroma'],
                                        ['7. Monitor time and temperature', 'Keep a steady, gentle simmer; check the level and top up with hot water if bones are exposed', 'Keeps extraction consistent'],
                                        ['8. Reduce if required', 'Simmer uncovered to evaporate water and concentrate flavour', 'Makes a stronger stock or a concentrate such as glace'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Likely Cause', 'Prevention or Fix'],
                                    rows: [
                                        ['Cloudy stock', 'Boiling, stirring, starting with hot water, or not skimming', 'Start cold, simmer gently, skim and do not stir; strain carefully'],
                                        ['Greasy stock', 'Fatty bones or trim, or not skimming fat', 'Use lean bones, skim often and chill to lift off the fat cap'],
                                        ['Bitter or harsh flavour', 'Overcooked fish bones, burned bones or vegetables, or too much tomato paste', 'Respect short cooking times and avoid scorching in roasting'],
                                        ['Weak flavour or thin body', 'Too much water, too few bones, too short a cooking time or too low a temperature', 'Check ratios, use bones with cartilage, extend cooking or reduce'],
                                        ['Sour or off flavour', 'Poor quality or old bones, or stock held too long at warm temperatures', 'Use fresh bones and cool properly'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Do not season stock with salt unless the recipe requires it, because it will be reduced and used in other dishes, which concentrates the salt.',
                                        'Do not cover the pot tightly: a partly open pot lets steam escape and prevents the stock from boiling over.',
                                        'Never add fresh hot water to a cold pot, and top up with hot water only when bones are exposed.',
                                        'Handle the pot carefully: a large stockpot full of hot liquid is a serious burn and lifting hazard. Use a spigot pot, ladle out portions, ask for help and clear the route.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never carry a full stockpot of hot liquid through a busy kitchen. Ladle the stock into smaller containers or drain it from a spigot pot into a waiting vessel. Spilled stock is hot enough to cause serious scalds, and a fall with a heavy pot is a major injury risk.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'If a question asks why a stock is cloudy, look for boiling, stirring, hot-water start or poor skimming. If it asks why the stock has little body, look for too little bone with cartilage, too much water or too short a cooking time.',
                                },
                            ],
                        },
                        {
                            id: 'ch12-s4',
                            title: '12.4 Straining, Evaluating, Cooling and Storing Stock (D-13.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Finishing a stock is where food safety matters most. A large pot of hot stock stays in the danger zone for hours if it is not cooled correctly, and stock is a classic source of food-borne illness for this reason. The standard requires cooling by methods that meet jurisdictional regulations and manufacturer specifications.',
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Strain through a fine strainer or a cheesecloth-lined chinois to remove bones, vegetables and sediment. Do not press the solids, because pressing forces cloudy material through.',
                                        'Remove fat by skimming while hot, or chill the stock and lift off the solid fat cap.',
                                        'Reduce the strained stock if a concentrate is needed. A stock reduced to a thick, glossy concentrate is called a glace.',
                                        'Evaluate quality and clarity through sensory assessment: colour appropriate to the type, a clear appearance, a clean aroma, a balanced flavour with no bitterness and a good body. A stock with enough gelatin will set to a jelly when cold.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Cooling Method', 'How It Works', 'Notes'],
                                    rows: [
                                        ['Ice wand (cooling paddle)', 'A frozen, food-safe paddle placed in the stock', 'Stir to circulate the stock around the wand; keep the wand clean and sanitized'],
                                        ['Water bath (ice bath)', 'The pot or container is set in a sink of ice and cold water', 'Keep ice-water level at or above the level of the stock and stir often'],
                                        ['Venting', 'Dividing into wide, shallow containers and leaving them uncovered or vented so heat can escape', 'Do not cover tightly until the stock is cold'],
                                        ['Blast chiller', 'A machine that rapidly lowers the temperature with cold air', 'The fastest method for large volumes; follow the manufacturer cycle'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Two-Stage Cooling (typical guideline)', 'Target'],
                                    rows: [
                                        ['Stage 1', 'From 60 °C to 20 °C within 2 hours'],
                                        ['Stage 2', 'From 20 °C to 4 °C within a further 4 hours (6 hours total)'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Divide hot stock into shallow pans no more than about 5 cm deep, or use an ice wand and ice bath, then place the stock in the refrigerator or blast chiller.',
                                        'Monitor the temperature during cooling and record it. If the stock is not cooling fast enough, take corrective action: divide it further, add ice, move it to a blast chiller, inform the supervisor, or discard it if limits are exceeded.',
                                        'Once cold, cover, label with the name and date, and store at 4 °C or colder, or freeze.',
                                        'Use stored stock within the time set by company policy and regulations, and reheat it to at least 74 °C (bring it to a rolling boil if recipes call for it) before use.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never put a large pot of hot stock directly into a walk-in refrigerator. The centre of the pot stays warm for many hours, which allows bacteria such as Clostridium perfringens and Bacillus cereus to grow, and it also warms the food around it. Divide it, cool it rapidly and record the times and temperatures.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Cooling methods named in the standard are ice wands, venting, blast chiller and water bath. If a question describes a deep pot of stock cooling slowly, the correct fix is to divide it into shallow containers, use an ice wand or ice bath, or use a blast chiller.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 13 — SOUPS (D-14)
                // ============================================================
                {
                    id: 'ch-13',
                    number: 13,
                    title: 'Soups',
                    subtitle: 'Task D-14 · Prepares soups (6 exam questions)',
                    isFree: false,
                    estimatedMinutes: 75,
                    sections: [
                        {
                            id: 'ch13-s1',
                            title: '13.1 Soup Types and Selecting Ingredients (D-14.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Flavour, consistency, temperature and texture define a good soup. Soups are made from stocks, broths, vegetables, proteins, starches and dairy, and the type of soup determines the ingredients, the thickening method and the serving temperature.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Soup Type', 'Description', 'Examples', 'Serving Temperature'],
                                    rows: [
                                        ['Clear soups', 'A flavourful broth or stock, unthickened, with or without garnish', 'Chicken noodle, vegetable soup, beef barley, consommé', 'Hot'],
                                        ['Consommé', 'A rich stock that has been clarified to crystal clarity', 'Beef consommé, chicken consommé', 'Hot (or served cold as a jellied consommé)'],
                                        ['Cream soups', 'Thickened with roux, a béchamel or velouté, or starch, then finished with cream or milk', 'Cream of mushroom, cream of broccoli, cream of tomato', 'Hot'],
                                        ['Puréed soups', 'Thickened by puréeing starchy ingredients such as potatoes, legumes or root vegetables; usually without roux', 'Split pea, carrot ginger, butternut squash', 'Hot'],
                                        ['Specialty and international soups', 'Soups from specific cuisines, often with unique ingredients and methods', 'Minestrone, borscht, miso soup, pho, ramen, tom yum, bouillabaisse, French onion, chowder, bisque', 'Hot (most)'],
                                        ['Cold soups', 'Served chilled; made from vegetables, fruit or dairy', 'Gazpacho, vichyssoise, chilled cucumber or fruit soups', 'Cold (4 °C or colder)'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Specialty Soup', 'Description'],
                                    rows: [
                                        ['Bisque', 'A smooth, rich soup traditionally made from shellfish shells and finished with cream'],
                                        ['Chowder', 'A hearty soup, usually with potatoes, in milk or cream or a broth, with seafood or corn'],
                                        ['Borscht', 'A beet-based soup of Eastern European origin, served hot or cold, with variations by region'],
                                        ['Minestrone', 'An Italian vegetable soup with beans or pasta'],
                                        ['Gazpacho', 'A cold, raw tomato and vegetable soup of Spanish origin'],
                                        ['Vichyssoise', 'A cold, creamy potato and leek soup'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Selection Factor', 'What to Consider'],
                                    rows: [
                                        ['Freshness', 'Check vegetables for firmness, colour and texture; check dairy dates and smell'],
                                        ['Cost', 'Soups are a good way to use trim and leftover ingredients safely'],
                                        ['Fat content', 'Affects richness, mouthfeel and the need to skim'],
                                        ['Intended application', 'Appetizer, main course, banquet, take-out or cold service'],
                                        ['Managing trim', 'Use vegetable and protein trim safely for flavour and to reduce waste'],
                                        ['Ingredient availability', 'Seasonal and local ingredients support quality and cost'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify and choose ingredients according to recipe specifications, and identify freshness and quality through sensory assessment.',
                                        'Know the serving temperature of each soup type: hot soups are served hot (at 60 °C or above) and cold soups are served cold (at 4 °C or below).',
                                        'Consider dietary requirements: cream soups contain milk, many soups contain gluten from roux or pasta, stock bases may contain allergens, and vegan guests need vegetable stock and no dairy. Always check labels on convenience bases.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Classification questions use the thickening method: clear soups and consommés are unthickened, cream soups are thickened with roux or starch and finished with cream, and puréed soups are thickened by the purée of their own starchy ingredients.',
                                },
                            ],
                        },
                        {
                            id: 'ch13-s2',
                            title: '13.2 Processing Soup Ingredients (D-14.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Soups reward mise en place. The cook selects tools and equipment, calculates quantities for the required yield, gathers ingredients so they are accessible in the order they will be used, and measures them.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Scales', 'Measuring ingredients and portions'],
                                        ['Cutting boards and knives', 'Cutting vegetables and proteins to size'],
                                        ['Whisks', 'Blending thickeners and cream'],
                                        ['Food processor', 'Puréeing and chopping'],
                                        ['Cheesecloth', 'Straining and clarifying'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example: Soup Yield and Portions', 'Calculation'],
                                    rows: [
                                        ['Total volume needed', '40 portions at 250 mL each: 40 × 0.25 = 10 L'],
                                        ['Portions from a batch', '15 L of soup at 250 mL per portion: 15 ÷ 0.25 = 60 portions'],
                                        ['Conversion factor', 'A recipe yields 4 L and 10 L are needed: 10 ÷ 4 = 2.5; multiply each ingredient by 2.5'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Cut vegetables to a size and shape that suits the soup: small, uniform cuts for clear soups, and rough cuts for soups that will be puréed.',
                                        'Plan sequence: aromatics first, then ingredients that need the longest cooking, with delicate ingredients and dairy added last.',
                                        'Allow for evaporation, thickening and the volume taken by garnishes when calculating the yield.',
                                        'Keep potentially hazardous ingredients such as dairy, stock and proteins cold until they are used.',
                                    ],
                                },
                            ],
                        },
                        {
                            id: 'ch13-s3',
                            title: '13.3 Cooking Soups, Thickening and Clarifying Consommé (D-14.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The cook combines ingredients in sequence, controls cooking time and aromatics, clarifies consommés, incorporates thickening agents and adjusts the soup to the desired result. Tools include whisks, food processors, cheesecloth, spoons, spatulas, strainers, steam kettles and soup pots.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Stage', 'What to Do', 'Why'],
                                    rows: [
                                        ['Sweat aromatics', 'Cook onions, celery, garlic and other aromatics in a little fat over gentle heat without browning (unless a brown soup is wanted)', 'Builds a flavour base'],
                                        ['Add stock or broth', 'Add hot or cold stock according to the recipe and bring to a simmer', 'Provides the liquid and body'],
                                        ['Add ingredients by cooking time', 'Longer-cooking ingredients (root vegetables, legumes) go in first; quick-cooking ones (greens, peas, pasta) go in last', 'Prevents overcooking'],
                                        ['Skim and monitor', 'Skim foam and fat; watch the time and the aromatics', 'Keeps the soup clean and balanced'],
                                        ['Thicken or purée', 'Incorporate the thickening agent or blend the soup', 'Gives the desired consistency'],
                                        ['Season and adjust', 'Season at the end and adjust characteristics', 'Reduction concentrates salt, so seasoning early risks oversalting'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Thickening Agent', 'Description', 'Notes'],
                                    rows: [
                                        ['Roux', 'Equal parts fat and flour by weight, cooked together; white, blond or brown depending on cooking time', 'Cook out the raw flour taste; add hot stock gradually to a cooler roux (or the reverse) to avoid lumps; browner roux thickens less'],
                                        ['Purées', 'Starchy ingredients (potatoes, legumes, rice, vegetables) blended into the soup', 'Natural thickening; no flour needed; gluten-free if no flour is used'],
                                        ['Modified starches', 'Commercial starches designed to hold up to heat, acid, freezing and holding', 'Used in volume production; stable and clear with no raw taste'],
                                        ['Eggs (liaison)', 'Egg yolks, often mixed with cream, added to a soup for richness and slight thickening', 'Temper by whisking some hot soup into the liaison before adding it back; do not boil after adding or it will curdle'],
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Other thickening agents, including cornstarch slurry, arrowroot, beurre manié and reduction, are covered in the chapter on thickening and binding agents in MWA E.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Consommé',
                                    definition: 'A rich, strong stock or broth that has been clarified to remove all particles and fat, giving a crystal-clear liquid with an intense flavour.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Consommé Step', 'What Happens'],
                                    rows: [
                                        ['1. Prepare the clearmeat (raft mixture)', 'Mix lean ground meat, chopped mirepoix, egg whites and an acidic ingredient such as tomato'],
                                        ['2. Combine with cold stock', 'Mix the clearmeat into well-skimmed, fully cold stock in a tall pot'],
                                        ['3. Heat slowly and stir', 'Stir gently as the mixture heats so the egg whites do not stick to the bottom'],
                                        ['4. Raft forms', 'As the proteins coagulate they rise to the surface and form a floating raft that traps impurities'],
                                        ['5. Simmer without disturbing', 'Make a small opening in the raft and simmer very gently for about an hour; do not stir or boil'],
                                        ['6. Strain', 'Ladle carefully through a cheesecloth-lined strainer, leaving the raft undisturbed'],
                                        ['7. Degrease and season', 'Skim or blot off any remaining fat, then season and adjust'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Never boil a consommé after the raft forms: boiling breaks the raft and clouds the soup.',
                                        'Never add cream or dairy to boiling soup or soup that is high in acid without care: it may curdle. Add cream at the end, off a hard boil, and heat gently.',
                                        'Soups thicken as they cool or stand, particularly starch-thickened ones: thin with stock or water when reheating.',
                                        'Monitor cooking time and aromatics so that herbs and spices keep their flavour and delicate ingredients do not overcook.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'When puréeing hot soup in a blender, fill it no more than half full, vent the lid and cover it with a towel, or use an immersion blender. Hot liquid expands and can blow the lid off, causing severe burns. Let the soup cool slightly before blending if you can.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Raft clarification is the classic consommé question: egg whites, ground meat and acid coagulate and trap impurities, so the soup is started cold and heated slowly, then simmered undisturbed. If a consommé is cloudy, look for boiling, stirring after the raft formed or a poorly skimmed stock.',
                                },
                            ],
                        },
                        {
                            id: 'ch13-s4',
                            title: '13.4 Finishing, Garnishing, Cooling and Holding Soups (D-14.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Finishing brings the soup to its final standard. The cook adjusts the characteristics, prepares the finishing ingredients, garnishes the soup and, if it is not served immediately, cools it according to jurisdictional regulations.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Soup Characteristic', 'How to Adjust'],
                                    rows: [
                                        ['Taste', 'Season with salt, pepper, acid (lemon or vinegar), herbs or spices; taste with a clean spoon each time'],
                                        ['Thickness', 'Too thin: reduce, add roux, starch, purée or a liaison. Too thick: thin with hot stock, broth, water or milk'],
                                        ['Texture', 'Purée or strain for smoothness; leave rough for rustic soups'],
                                        ['Appearance', 'Skim fat, strain, and make sure garnish pieces are uniform and neat'],
                                        ['Colour', 'Preserve colour by not overcooking; add fresh herbs or green vegetables late; use acid carefully'],
                                        ['Temperature', 'Serve hot soups hot (60 °C or above) in heated bowls and cold soups well chilled (4 °C or below) in chilled bowls'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Ingredient Method', 'Example'],
                                    rows: [
                                        ['Blanching', 'Blanched julienne of vegetables for a clear soup garnish'],
                                        ['Sautéing', 'Sautéed mushrooms, bacon or onions added to a soup'],
                                        ['Roasting', 'Roasted garlic, nuts, seeds or croutons'],
                                        ['Steaming', 'Steamed vegetables or dumplings added just before service'],
                                        ['Boiling', 'Pasta, rice or noodles cooked separately and added at service to keep the soup clear'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Garnish', 'Used On'],
                                    rows: [
                                        ['Chopped fresh herbs (parsley, chives, dill)', 'Almost any soup'],
                                        ['Croutons and crackers', 'Cream, puréed and French onion soups'],
                                        ['Cream swirl, crème fraîche or yogurt', 'Puréed and cream soups, borscht'],
                                        ['Julienne or brunoise of vegetables', 'Clear soups and consommés'],
                                        ['Grated cheese', 'Minestrone, French onion, potato soups'],
                                        ['Oil drizzle, toasted seeds or chili', 'Puréed soups and specialty soups'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Garnish, to',
                                    definition: 'To add a decorative yet edible item to a finished dish; also the visible, cut items in finished soups and salads (glossary term).',
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Prepare finishing ingredients separately by the method the recipe specifies, then add them at service so they keep colour, texture and the clarity of the soup.',
                                        'Garnish soup according to recipe specifications and the desired result: neat, uniform, appropriate to the soup and edible.',
                                        'Hold soup hot at 60 °C or above, stirring occasionally and covering to prevent a skin from forming; for cold soups, hold at 4 °C or below.',
                                        'Cool soup that is not served immediately using the same rapid cooling methods as for stock: shallow pans, ice bath or ice wand and blast chiller. Cool from 60 °C to 20 °C in 2 hours and from 20 °C to 4 °C in a further 4 hours, then cover, label and date.',
                                        'Reheat cooled soup to at least 74 °C quickly, using the stovetop or a steam kettle, and do not use a bain-marie or steam table to reheat.',
                                        'Season cold soups more assertively than hot soups, because cold mutes flavour, and taste again after chilling.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Soups containing dairy, eggs, cooked rice, pasta or beans spoil quickly in the danger zone. Never leave a large pot of soup cooling on the stove overnight, and never reheat soup in a steam table. Cool it rapidly, record the times and temperatures and reheat it to 74 °C.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Soup finishing questions often ask about temperature and holding. Hot soup is held at 60 °C or above, cold soup at 4 °C or below, and any soup that must be kept is cooled rapidly through the danger zone. If the answer choices include a method that is slower or holds the soup lukewarm, it is the wrong choice.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 5 FRAGMENT (MWA E: Sauces)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 4.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks E-15 and E-16.
        // ============================================================
        {
            id: 'part-5',
            number: 5,
            title: 'Sauces (MWA E)',
            description: 'Thickening and binding agents, the five mother sauces and their derivatives, other sauces from salsas to caramel, butter sauces and compound butters, emulsions, tempering, reduction, finishing and holding. MWA E carries 13 exam questions across tasks E-15 (thickening and binding agents) and E-16 (sauces).',
            weight: '13 questions (8.7% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 14 — THICKENING AND BINDING AGENTS (E-15)
                // ============================================================
                {
                    id: 'ch-14',
                    number: 14,
                    title: 'Thickening and Binding Agents',
                    subtitle: 'Task E-15 · Prepares thickening and binding agents (4 exam questions)',
                    isFree: false,
                    estimatedMinutes: 60,
                    sections: [
                        {
                            id: 'ch14-s1',
                            title: '14.1 Thickening and Binding Agents: Types and Selection (E-15.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Thickening agents give body to soups, sauces and stews. Binding agents hold ingredients together in items such as croquettes, fillings, meatloaf and forcemeats. Many ingredients do both. The cook must know which agent suits the dish, how it behaves and which dietary requirements it affects.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Agent', 'What It Is', 'Typical Uses'],
                                    rows: [
                                        ['Roux', 'Equal weights of fat and flour cooked together', 'Béchamel, velouté, espagnole, cream soups, gravies, stews'],
                                        ['Starches', 'Cornstarch, arrowroot, potato starch, tapioca and modified starches, mixed into cold liquid (slurry) and stirred into a hot liquid', 'Jus lié, Asian sauces, fruit sauces, pie fillings, clear glossy sauces'],
                                        ['Liaison', 'Egg yolks, usually mixed with cream, used to thicken and enrich', 'Finishing velouté and cream soups; allemande sauce'],
                                        ['Beurre manié', 'Equal parts soft butter and flour kneaded into a paste', 'Last-minute adjustment of a sauce or stew'],
                                        ['Vegetable purées', 'Cooked vegetables, legumes or starchy ingredients blended into the liquid', 'Rustic sauces, soups, coulis; gluten-free thickening'],
                                        ['Reduction', 'Simmering a liquid so water evaporates and the liquid concentrates and thickens', 'Pan sauces, demi-glace, glace, wine and stock reductions'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Factor in Selecting', 'What to Consider'],
                                    rows: [
                                        ['Type of sauce or dish', 'A cream soup suits roux; a glossy Asian sauce suits cornstarch; a pan sauce suits reduction'],
                                        ['Clarity and appearance', 'Roux gives an opaque sauce; starches such as cornstarch and arrowroot give a clear, glossy sauce'],
                                        ['Flavour', 'Roux adds a cooked, nutty flavour, while starches are neutral; reduction concentrates flavour'],
                                        ['Holding and storage', 'Cornstarch sauces can weep when frozen; modified starches and roux hold better'],
                                        ['Acid content', 'Acid can weaken some thickeners; check how the agent behaves with lemon, wine or tomato'],
                                        ['Time and skill', 'Reduction takes time; beurre manié is quick; liaison needs care'],
                                        ['Cost and availability', 'Compare the cost per batch of the agents available'],
                                        ['Dietary requirements', 'Gluten, dairy, egg and animal products (see below)'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Dietary Requirement', 'Agents to Avoid', 'Agents That Suit'],
                                    rows: [
                                        ['Gluten-free (celiac disease)', 'Wheat flour roux, beurre manié, some modified starches', 'Cornstarch, arrowroot, potato starch, rice flour, vegetable purées, reduction'],
                                        ['Dairy-free', 'Butter-based roux, beurre manié and cream liaison', 'Oil-based roux, starch slurry, vegetable purée, reduction'],
                                        ['Egg-free', 'Liaison', 'Starch, roux, reduction'],
                                        ['Vegan', 'Butter, cream, egg yolk, gelatin', 'Oil roux, starch slurry, vegetable and legume purées, reduction'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Determine which thickening and binding agents to make according to the recipe and the desired result.',
                                        'Check the freshness and quality of ingredients through sensory assessment: flour and starch with no off smell, lumps or insects; butter that is fresh; eggs that are fresh, clean and properly stored; vegetables with good firmness, colour and texture.',
                                        'Identify and choose ingredients for the agents according to recipe specifications.',
                                        'Know the dietary requirements specific to these ingredients, especially wheat (gluten), milk and eggs, which are priority allergens.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The standard names six agents: roux, starches, liaison, beurre manié, vegetable purées and reduction. A question about a gluten-free guest usually has an answer using cornstarch, arrowroot, a purée or reduction instead of a wheat flour roux.',
                                },
                            ],
                        },
                        {
                            id: 'ch14-s2',
                            title: '14.2 Roux (E-15.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Roux is the most important thickener in the classical kitchen. It is made by cooking equal weights of fat (usually butter, but also oil, rendered fat or clarified butter) and flour. Cooking the flour removes its raw taste and coats starch granules with fat so that they disperse without lumps.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Type of Roux', 'Cooking Time (approx.)', 'Colour and Flavour', 'Thickening Power', 'Typical Use'],
                                    rows: [
                                        ['White roux', '2 to 3 minutes', 'Pale, little flavour', 'Highest', 'Béchamel and cream soups'],
                                        ['Blond roux', '5 to 6 minutes', 'Light golden, slightly nutty', 'High', 'Velouté and some cream soups'],
                                        ['Brown roux', '10 minutes or more', 'Deep brown, strong nutty flavour', 'Lowest', 'Espagnole and brown sauces, gumbo'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Sauce Consistency', 'Flour per Litre of Liquid (approx.)', 'Roux per Litre (flour + equal weight of fat)'],
                                    rows: [
                                        ['Thin (soups, light sauces)', 'About 40 g', 'About 80 g'],
                                        ['Medium (most sauces)', 'About 60 g', 'About 120 g'],
                                        ['Thick (heavy sauces, binder for croquettes)', 'About 100 g', 'About 200 g'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Use cold or cooled roux with hot liquid, or hot roux with cool liquid, whisking constantly. Adding hot liquid to hot roux can cause lumps and spattering.',
                                        'Add liquid gradually and whisk or stir until smooth before bringing to a simmer.',
                                        'Simmer a roux-thickened sauce gently for at least 15 to 20 minutes so the raw flour taste cooks out, stirring occasionally to prevent scorching.',
                                        'Brown roux thickens less because browning breaks down the starch, so use more roux for the same consistency.',
                                        'Strain the sauce through a fine strainer if lumps form.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Fix or Prevention'],
                                    rows: [
                                        ['Lumps', 'Hot liquid added to hot roux, or insufficient whisking', 'Use opposite temperatures, whisk constantly and strain'],
                                        ['Raw flour taste', 'Not cooked or simmered long enough', 'Cook the roux properly and simmer the sauce'],
                                        ['Burnt or bitter taste', 'Roux scorched', 'Stir constantly over moderate heat; start again if burned'],
                                        ['Too thin', 'Too little roux, brown roux used for the same weight, or sauce thinned during holding', 'Add a little more roux (beurre manié) or reduce'],
                                        ['Greasy surface', 'Too much fat, or sauce held without skimming', 'Skim fat and check the ratio'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Hot roux is much hotter than boiling water and sticks to skin. Add liquid carefully, keep your face back from steam and spatter, and never carry a pot of roux and hot liquid through the kitchen.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Roux colour and thickening power are inversely related: the lighter the roux, the more thickening power it has. White roux is for béchamel, blond for velouté and brown for espagnole.',
                                },
                            ],
                        },
                        {
                            id: 'ch14-s3',
                            title: '14.3 Starches, Liaison, Beurre Manié, Purées and Reduction (E-15.02)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Starch', 'Properties', 'Cautions'],
                                    rows: [
                                        ['Cornstarch', 'Common, inexpensive; about twice the thickening power of flour; makes a glossy, fairly clear sauce', 'Needs to be brought to a simmer to thicken; can break down with long cooking, vigorous stirring or acid; can weep when frozen and thawed'],
                                        ['Arrowroot', 'Very clear, neutral taste and glossy; thickens at a lower temperature', 'Do not boil for long; becomes slimy with dairy; does not reheat well'],
                                        ['Potato starch', 'Clear and glossy; thickens at a lower temperature', 'Do not boil for long or it loses power'],
                                        ['Tapioca', 'Gives body and a glossy finish; used in puddings and fillings', 'Can become gummy if overused'],
                                        ['Modified starches', 'Commercial starches that stand up to heat, acid, freezing and holding', 'Used in volume production and institutional kitchens; read labels for allergens'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Slurry',
                                    definition: 'A mixture of starch and cold liquid (water, stock or wine) stirred until smooth, then whisked into a hot liquid. The cold liquid separates the starch granules so they do not clump when they meet the heat.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Agent', 'Method', 'Key Points'],
                                    rows: [
                                        ['Starch slurry', 'Mix starch with an equal or double volume of cold liquid; whisk into simmering liquid; bring back to a simmer and cook until clear', 'Add gradually until the right consistency; cook out the raw starch taste; do not boil hard'],
                                        ['Liaison', 'Whisk egg yolks with cream; temper by whisking in a ladle or two of hot liquid, then stir the mixture back into the sauce off the heat', 'Do not let the sauce boil after the liaison is added or the yolks will curdle (scramble); heat gently to about 80 °C'],
                                        ['Beurre manié', 'Knead equal weights of soft butter and flour into a smooth paste; whisk small pieces into a simmering sauce until dissolved', 'Simmer a few minutes to cook out the flour; best for quick corrections, not for sauces that will be held a long time'],
                                        ['Vegetable purée', 'Simmer starchy vegetables, onions, tomatoes or legumes in the liquid, then blend or strain', 'Adds body and flavour and is naturally gluten-free; watch for fibres and skins'],
                                        ['Reduction', 'Simmer the liquid, uncovered, until it has reached the right concentration and consistency', 'Reduces volume, so plan the starting quantity; salt becomes concentrated, so season at the end'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Tempering is the safety step that protects the liaison from curdling and keeps the sauce safe: never pour cold eggs directly into a boiling sauce. Add hot liquid to the yolks gradually first. Use fresh, properly stored eggs, and follow company policy on pasteurized eggs for sauces that are not cooked to a high temperature.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Slurry, liaison, beurre manié and roux each have a correct order of operations. Slurry: mix cold, add to hot. Liaison: temper, then add off the boil. Beurre manié: whisk in pieces at a simmer. Roux: opposite temperatures, then simmer to cook out the flour.',
                                },
                            ],
                        },
                        {
                            id: 'ch14-s4',
                            title: '14.4 Calculating Ratios and Incorporating Agents (E-15.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The cook selects tools and equipment, calculates the ratio of thickening and binding ingredients needed for the desired result, and incorporates them according to recipe specifications. Tools include bowls, whisks, ladles, pots, strainers and blenders.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example', 'Calculation'],
                                    rows: [
                                        ['Roux for 5 L of medium béchamel', 'Flour: 5 L × 60 g = 300 g; butter: 300 g (equal weight); roux total = 600 g'],
                                        ['Roux for 8 L of medium velouté', 'Flour: 8 × 60 = 480 g; fat: 480 g; roux total = 960 g'],
                                        ['Cornstarch instead of flour', 'Cornstarch has about twice the thickening power, so the flour weight is halved: 300 g flour ÷ 2 = about 150 g cornstarch for the same 5 L'],
                                        ['Slurry', '150 g cornstarch mixed with 300 mL cold liquid (1:2)'],
                                        ['Reduction', 'Reducing 1 L of stock to 250 mL leaves one quarter of the volume (a 75% reduction)'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Measure by weight when possible, because flour and starch pack differently by volume.',
                                        'Add thickeners gradually: sauces thicken further as they simmer, cool and stand, so stop slightly thinner than the target.',
                                        'Cook starch and flour long enough to remove the raw taste, and do not overcook starches that break down.',
                                        'Use a strainer or blender to remove lumps and bring purée thickeners to a smooth texture.',
                                        'Store roux covered and refrigerated or frozen, labelled and dated; cool and store cooked thickened sauces according to cooling rules.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Thickening Problem', 'Likely Cause', 'Correction'],
                                    rows: [
                                        ['Sauce too thin', 'Not enough thickener or reduction; brown roux; starch broken down by acid or boiling', 'Reduce, or whisk in a slurry or beurre manié'],
                                        ['Sauce too thick', 'Too much thickener, over-reduction, or the sauce thickened while standing', 'Thin with stock, milk or water and adjust seasoning'],
                                        ['Lumpy sauce', 'Poor mixing, wrong temperature pairing', 'Strain or blend'],
                                        ['Starchy taste', 'Under-cooked flour or starch', 'Simmer longer'],
                                        ['Curdled liaison', 'Sauce boiled after the yolks were added, or tempering skipped', 'Strain or blend; make a new liaison if needed'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Quantity questions in this task usually give the volume of liquid and a consistency, and ask for the weight of roux or flour. Use the ratio per litre and multiply, and remember that cornstarch needs only about half the weight of flour.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 15 — MOTHER SAUCES AND DERIVATIVES (E-16.01 to E-16.03)
                // ============================================================
                {
                    id: 'ch-15',
                    number: 15,
                    title: 'Mother Sauces and Derivatives',
                    subtitle: 'Task E-16 · Prepares sauces: selecting, processing and cooking (6 of 9 exam questions for task E-16)',
                    isFree: false,
                    estimatedMinutes: 90,
                    sections: [
                        {
                            id: 'ch15-s1',
                            title: '15.1 The Five Mother Sauces (E-16.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Sauces add moisture, modify flavour and texture, can be the main element of a dish and improve its appearance. The classical system groups sauces into five mother (leading) sauces. Each mother sauce is a base from which derivative (small) sauces are made by adding ingredients.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Mother Sauce', 'Liquid', 'Thickener', 'Colour', 'Key Derivatives'],
                                    rows: [
                                        ['Béchamel', 'Milk', 'White roux', 'White', 'Mornay, cream sauce, soubise'],
                                        ['Velouté', 'White stock (chicken, veal or fish)', 'Blond roux', 'Ivory', 'Supreme, allemande, normande'],
                                        ['Espagnole', 'Brown stock (with tomato and mirepoix)', 'Brown roux', 'Dark brown', 'Demi-glace, bordelaise, chasseur, Madeira'],
                                        ['Tomato', 'Tomatoes, with stock and aromatics', 'Reduction or purée (no roux in modern versions)', 'Red', 'Portugaise, Creole, Spanish, bolognese'],
                                        ['Hollandaise', 'Egg yolks and clarified butter (emulsion)', 'Egg yolk emulsion', 'Pale yellow', 'Béarnaise, maltaise, mousseline'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Derivative Sauce (named in the standard)', 'Mother Sauce', 'How It Is Made'],
                                    rows: [
                                        ['Mornay', 'Béchamel', 'Add grated cheese (such as Gruyère and Parmesan), often with a little cream or egg yolk, off the heat'],
                                        ['Supreme', 'Velouté', 'Chicken velouté finished with cream (and sometimes mushroom essence)'],
                                        ['Demi-glace', 'Espagnole', 'Combine equal parts espagnole and brown stock and reduce by half, skimming and straining'],
                                        ['Portugaise', 'Tomato', 'Tomato sauce with tomato concassé, sweated onions, garlic and herbs'],
                                        ['Béarnaise', 'Hollandaise', 'Hollandaise made with a reduction of vinegar, wine, shallots and tarragon, finished with tarragon and chervil'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify the sauce according to the recipe specifications, and identify freshness and quality of the ingredients through sensory assessment (hydration, colour and texture).',
                                        'Identify and choose ingredients according to the recipe, and know the ratios used, such as roux to liquid and yolks to butter.',
                                        'Know the dietary requirements: béchamel and velouté contain milk and wheat, hollandaise contains egg and butter, espagnole contains wheat and may contain animal stock, and tomato sauce is often the easiest to make gluten-free and vegan.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Memorize the five mother sauces with their liquid and thickener: béchamel is milk and white roux, velouté is white stock and blond roux, espagnole is brown stock and brown roux, tomato is thickened by reduction, and hollandaise is an emulsion of yolks and butter. Hollandaise and tomato are the two that do not use roux.',
                                },
                            ],
                        },
                        {
                            id: 'ch15-s2',
                            title: '15.2 Béchamel and Velouté Families (E-16.01, E-16.03)',
                            content: [
                                {
                                    type: 'keyTerm',
                                    term: 'Béchamel',
                                    definition: 'A white sauce prepared with milk and white roux (glossary term).',
                                },
                                {
                                    type: 'table',
                                    headers: ['Step', 'Béchamel Method', 'Why'],
                                    rows: [
                                        ['1', 'Make a white roux with butter and flour, cooking 2 to 3 minutes without colour', 'Cooks out the raw flour taste while keeping the sauce white'],
                                        ['2', 'Heat the milk (often infused with an onion piqué: an onion studded with a clove and a bay leaf)', 'Infusing adds flavour; warm milk blends smoothly'],
                                        ['3', 'Whisk the milk into the cooled roux gradually', 'Prevents lumps'],
                                        ['4', 'Simmer gently for 15 to 20 minutes, stirring often, and strain', 'Cooks out the flour taste and gives a smooth texture'],
                                        ['5', 'Season with salt, white pepper and nutmeg', 'Classic seasoning, and pale pepper keeps the sauce white'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Béchamel Derivative', 'Additions', 'Uses'],
                                    rows: [
                                        ['Mornay', 'Grated cheese, sometimes a little cream or yolk', 'Gratins, macaroni and cheese, vegetables, croque monsieur'],
                                        ['Cream sauce', 'Cream added to béchamel', 'Vegetables, poultry and eggs'],
                                        ['Soubise', 'Onion purée', 'Veal, lamb, eggs'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Velouté',
                                    definition: 'A sauce made by thickening a white stock (chicken, veal or fish) with a blond roux. It is smooth and velvety, and the name means velvet.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Velouté Derivative', 'Base', 'Additions', 'Uses'],
                                    rows: [
                                        ['Supreme', 'Chicken velouté', 'Cream (and sometimes mushroom essence)', 'Poultry, vegetables, pot pies'],
                                        ['Allemande', 'Veal or chicken velouté', 'Egg yolk and cream liaison, lemon juice', 'Poultry, vegetables, poached dishes'],
                                        ['Normande', 'Fish velouté', 'Cream, egg yolk liaison, mushroom and fish essence', 'Fish and seafood dishes'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'The stock determines the velouté: use chicken stock for chicken velouté, veal stock for veal velouté and fumet for fish velouté.',
                                        'Skim the surface while simmering, and strain through a fine strainer or cheesecloth for a smooth finish.',
                                        'Cream and liaison are finishing ingredients added at the end; do not boil after adding them.',
                                        'Cover the surface of a held sauce with a thin layer of melted butter or a sheet of plastic or parchment pressed onto it to stop a skin forming.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'If a question asks which sauce is made from white stock and blond roux, the answer is velouté. If it asks about milk and white roux, it is béchamel. The derivative tells you the base: mornay comes from béchamel, supreme from velouté.',
                                },
                            ],
                        },
                        {
                            id: 'ch15-s3',
                            title: '15.3 Espagnole, Demi-glace and Tomato Sauce (E-16.01, E-16.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Brown sauces and tomato sauces are built on browned ingredients and long, slow simmering. Deglazing, reduction and skimming are the key techniques.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Sauce', 'Method', 'Key Points'],
                                    rows: [
                                        ['Espagnole', 'Make a brown roux; add browned mirepoix and tomato purée (browned in the pan); add brown stock and a sachet; simmer for several hours, skimming; strain', 'The long, slow simmer and skimming give a clear, glossy sauce; brown roux needs a higher ratio of roux because it thickens less'],
                                        ['Demi-glace', 'Combine equal parts espagnole and brown stock; simmer and reduce by half; skim and strain', 'The classic example of a reduction: 2 L espagnole plus 2 L brown stock reduces by half to give about 2 L of demi-glace'],
                                        ['Tomato sauce', 'Sweat onions and carrot, add tomato purée or crushed tomatoes, stock and a sachet; simmer, then purée or strain', 'Thickened by reduction and the purée of its own ingredients; acid from tomato needs non-reactive pots'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Derivative', 'Base', 'Additions'],
                                    rows: [
                                        ['Bordelaise', 'Demi-glace', 'Red wine reduction with shallots, finished with butter and sometimes bone marrow'],
                                        ['Chasseur (hunter)', 'Demi-glace', 'Sautéed mushrooms, shallots, white wine and tomato'],
                                        ['Madeira', 'Demi-glace', 'Madeira wine reduction'],
                                        ['Portugaise', 'Tomato sauce', 'Tomato concassé, onions, garlic and herbs'],
                                        ['Creole', 'Tomato sauce', 'Peppers, onions, celery, garlic and spices'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Deglaze the cooking vessel: add liquid to the hot pan after browning to dissolve the fond (browned bits) and capture the flavour.',
                                        'Brown the tomato purée before adding liquid (pincé) to cook out acidity and deepen flavour.',
                                        'Simmer gently and skim regularly; boiling makes brown sauces cloudy and greasy.',
                                        'Strain through a fine chinois and finish by adjusting seasoning, consistency and gloss.',
                                        'Modern tomato sauces are thickened by reduction and purée rather than roux, which makes them naturally gluten-free and easy to make vegan by using vegetable stock.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Hot sauces are scalding and heavy, and large batches spatter when simmering. Reduce the heat, use a lid or splash guard when a sauce spits, and never taste a sauce straight from a boiling pot. Wear heat-resistant gloves and keep sleeves close.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Demi-glace is not a mother sauce: it is a derivative of espagnole made from equal parts espagnole and brown stock reduced by half. Questions often test this relationship.',
                                },
                            ],
                        },
                        {
                            id: 'ch15-s4',
                            title: '15.4 Hollandaise, Béarnaise and Emulsified Sauces (E-16.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Hollandaise is a warm emulsion of egg yolks and clarified butter seasoned with lemon juice, salt and cayenne. It relies on lecithin in the egg yolk to hold fat droplets in suspension. It is the most technical of the mother sauces, and mistakes in temperature are the main cause of failure.',
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Emulsion',
                                    definition: 'A mixture of two liquids that do not normally combine, such as fat and water, in which one is dispersed in tiny droplets in the other. An emulsifier such as egg yolk lecithin holds the mixture together.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Step', 'Hollandaise Method', 'Why'],
                                    rows: [
                                        ['1', 'Clarify butter and keep it warm', 'Removes water and milk solids; warm butter blends easily'],
                                        ['2', 'Whisk egg yolks with a little water or reduction in a stainless steel bowl over gently simmering water (a bain-marie or double boiler)', 'Gentle heat builds volume without scrambling'],
                                        ['3', 'Whisk until the yolks are thick and ribbon-like (a sabayon) and warm', 'Creates the stable base for the emulsion'],
                                        ['4', 'Remove from the heat and whisk in the warm butter slowly, a few drops at first', 'Adding fat too quickly breaks the emulsion'],
                                        ['5', 'Season with lemon juice, salt and cayenne; adjust consistency with a little warm water', 'Balances richness and thins to a flowing consistency'],
                                        ['6', 'Hold warm in a covered container', 'Prevents drying and skin formation'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Béarnaise', 'Details'],
                                    rows: [
                                        ['Base', 'Hollandaise method'],
                                        ['Reduction', 'Reduce vinegar, white wine, shallots, tarragon and peppercorns; strain and use in place of the water or lemon juice'],
                                        ['Finish', 'Chopped tarragon and chervil added at the end'],
                                        ['Uses', 'Grilled steak, roast beef, fish'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Fix'],
                                    rows: [
                                        ['Sauce splits or breaks (oily surface)', 'Butter added too fast, sauce too hot or too cold', 'Whisk a spoon of warm water or lemon juice into a clean bowl, then slowly whisk in the broken sauce; or start a fresh yolk and whisk the broken sauce in gradually'],
                                        ['Yolks scramble', 'Heat too high or bowl too hot', 'Start again; keep the bowl above the water, not touching it, and remove from heat as needed'],
                                        ['Sauce too thick', 'Too much yolk or too much evaporation', 'Whisk in a little warm water'],
                                        ['Sauce too thin', 'Not enough cooking of yolks, or too much water or lemon', 'Whisk in an extra warm yolk (cooked separately) or more butter slowly'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Hollandaise and béarnaise are high-risk sauces: they use yolks that are only lightly heated, and they are held warm for service. Use fresh, properly stored eggs or pasteurized yolks where company policy or regulations require, make small batches, never hold them longer than the limits set by your policy and regulations, and discard what is left. Never leave them at room temperature.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Emulsion questions come down to temperature and speed. Heat that is too high scrambles the yolks, heat that is too low or butter added too fast breaks the emulsion. A broken hollandaise is rescued by whisking it slowly into a little warm water, lemon juice or a fresh yolk.',
                                },
                            ],
                        },
                        {
                            id: 'ch15-s5',
                            title: '15.5 Tools, Cooking Methods and Sauce Qualities (E-16.02, E-16.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Sauces are acidic, high in salt or rich in egg, so the wrong equipment can ruin them. The cook selects non-reactive tools and equipment suited to the ingredients, measures and prepares the ingredients, combines them in the specified sequence and adjusts temperature, qualities and thickness.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Non-reactive Equipment', 'Notes'],
                                    rows: [
                                        ['Stainless steel saucepans and bowls', 'Do not react with acid, egg or wine; standard choice'],
                                        ['Double boilers', 'Gentle indirect heat for hollandaise, custards and delicate sauces'],
                                        ['Strainers', 'Fine mesh for smooth sauces; use stainless steel'],
                                        ['BPA-free plastic and silicone', 'Spatulas, containers and bowls for cold sauces and storage'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Reactive metals (uncoated aluminum, unlined copper and cast iron) react with acids such as tomato, wine, vinegar and lemon, giving the sauce a metallic taste and grey or dark discolouration. Egg yolks whisked in an aluminum bowl turn grey. Use stainless steel, enamelled or other non-reactive equipment.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Cooking Method', 'Description', 'Example'],
                                    rows: [
                                        ['Tempering', 'Gradually raising the temperature of eggs or cream by adding small amounts of hot liquid so they do not curdle', 'Liaison for allemande, pastry cream'],
                                        ['Reduction', 'Simmering to evaporate water, concentrate flavour and thicken', 'Demi-glace, wine reduction, pan sauce'],
                                        ['Blending', 'Combining or smoothing by whisking, blender or immersion blender', 'Tomato sauce, coulis, vinaigrette'],
                                        ['Infusion', 'Steeping aromatics in a liquid to transfer flavour', 'Milk with onion piqué for béchamel'],
                                        ['Coagulation', 'Proteins setting as they are heated; controlled in sauces and a cause of curdling if overdone', 'Hollandaise thickening; curdled liaison'],
                                        ['Caramelization', 'Browning of sugars with heat to give flavour and colour', 'Caramel, browned onions, brown stock ingredients'],
                                        ['Deglazing', 'Adding liquid to a hot pan to dissolve the fond', 'Pan sauces and gravies'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Sauce Quality', 'How to Judge or Adjust'],
                                    rows: [
                                        ['Consistency', 'Nappé: the sauce coats the back of a spoon and a finger drawn across leaves a clean line. Adjust by reducing, thickening or thinning'],
                                        ['Colour', 'Appropriate to the sauce; preserve by not scorching, and use non-reactive pots'],
                                        ['Flavour', 'Taste with a clean spoon; balance salt, acid, sweetness and seasoning'],
                                        ['Texture', 'Smooth, with no lumps or graininess; strain or blend if needed'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Combine ingredients in the specified sequence and adjust the temperature to the desired result.',
                                        'Apply a thickening technique according to the desired result: reduction, thickening agents (roux, liaison, slurry) or emulsification.',
                                        'Adjust sauce qualities at the end, taste again after reducing, and season carefully because reduction concentrates salt.',
                                        'Prepare hot sauces and cold sauces according to their own procedures: hot sauces need temperature control and holding; cold sauces need to stay cold.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Nappé is the standard test for sauce consistency: the sauce clings to the back of a spoon, and a finger drawn through it leaves a clean line. If a sauce runs off the spoon it is too thin, and if it clumps it is too thick.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 16 — OTHER SAUCES, BUTTER SAUCES AND FINISHING (E-16)
                // ============================================================
                {
                    id: 'ch-16',
                    number: 16,
                    title: 'Other Sauces, Butter Sauces, Finishing and Holding',
                    subtitle: 'Task E-16 · Prepares sauces: other sauces, finishing and holding (3 of 9 exam questions for task E-16)',
                    isFree: false,
                    estimatedMinutes: 65,
                    sections: [
                        {
                            id: 'ch16-s1',
                            title: '16.1 Other Sauces (E-16.01, E-16.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Beyond the mother sauces, a cook prepares many other sauces for every cuisine and course. The standard names chutneys, salsas, pan gravies, jus lié, reductions, curries, soy-based sauces, coulis, chocolate sauces and caramel.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Sauce', 'Description', 'Typical Use', 'Key Technique'],
                                    rows: [
                                        ['Chutney', 'Cooked fruit or vegetables with sugar, vinegar and spices; sweet, sour and spicy', 'Curries, grilled meats, cheese', 'Slow simmering until thick; the acid and sugar preserve it'],
                                        ['Salsa', 'Chopped raw or cooked tomatoes, fruit or vegetables, chilies, onion, acid and herbs', 'Tacos, grilled fish and meat, chips', 'Uniform dice, acid and seasoning; keep cold'],
                                        ['Pan gravy', 'Sauce made from pan drippings and flour or roux with stock', 'Roast poultry and meats', 'Deglaze the pan, make a roux from the fat, add stock and simmer'],
                                        ['Jus lié', 'A jus (natural cooking juices or brown stock) lightly thickened with cornstarch or arrowroot', 'Roast meats, a light alternative to demi-glace', 'Slurry added to a simmering jus; skim and strain'],
                                        ['Reduction (pan sauce)', 'Wine, stock or juice reduced, often with shallots, and finished with butter or cream', 'Sautéed steaks, chicken and fish', 'Sauté, deglaze, reduce, then finish'],
                                        ['Curry', 'A sauce based on spices and aromatics, with onions, tomato, yogurt or coconut milk', 'Meats, vegetables and legumes', 'Toast spices, build the aromatics base, simmer'],
                                        ['Soy-based sauces', 'Sauces built on soy sauce with sugar, ginger, garlic, mirin or other ingredients, such as teriyaki', 'Stir-fries, grilled foods and noodles', 'Balance salt, sweet and acid; thicken with a starch slurry if needed'],
                                        ['Coulis', 'A smooth purée of fruit or vegetables, strained and sweetened or seasoned', 'Desserts, plates and terrines; roasted red pepper coulis for savoury dishes', 'Purée and strain, adjust sweetness and acid'],
                                        ['Chocolate sauce', 'Chocolate melted with cream, milk or butter and sugar', 'Desserts and pastries', 'Melt gently; avoid overheating'],
                                        ['Caramel', 'Sugar cooked until golden then finished with cream or butter', 'Desserts and glazes', 'Heat sugar without stirring too much; add warm cream carefully'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Check dietary requirements: soy-based sauces contain soy and wheat, curries may contain dairy, nuts or fish, chocolate and caramel contain dairy, and sauces made with wine contain alcohol.',
                                        'Use sensory assessment of ingredients (hydration, colour and texture) when selecting fresh produce for chutneys, salsas and coulis.',
                                        'Season to balance salt, acid, sweetness and heat, and taste at the temperature the sauce will be served.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Hot sugar for caramel reaches temperatures well above boiling water and sticks to skin, causing severe burns. Use a deep pot, keep a bowl of cold water close, add cream slowly and stand back, because the mixture bubbles up violently.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Pan gravy versus jus lié: pan gravy is thickened with flour or roux made from the pan fat, while jus lié is a natural jus lightly thickened with a starch such as cornstarch or arrowroot.',
                                },
                            ],
                        },
                        {
                            id: 'ch16-s2',
                            title: '16.2 Butter Sauces, Compound Butters and Cold Sauces (E-16.01, E-16.03)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Butter Sauce', 'Description', 'Key Points'],
                                    rows: [
                                        ['Beurre blanc', 'A reduction of white wine, vinegar and shallots, into which cold cubed butter is whisked a few pieces at a time to make an emulsion', 'Keep over low heat; hold warm, not hot, or it breaks; strain for a smooth finish'],
                                        ['Beurre noisette', 'Butter cooked until it turns nutty brown and smells like hazelnuts', 'Often finished with lemon juice and capers; do not burn'],
                                        ['Beurre noir', 'Butter cooked past noisette to dark brown', 'Used with skate and other fish; finished with vinegar'],
                                        ['Meunière', 'Beurre noisette with lemon juice and parsley', 'Served with pan-fried fish'],
                                        ['Hollandaise', 'Emulsion of yolks and clarified butter', 'Covered in chapter 15'],
                                    ],
                                },
                                {
                                    type: 'keyTerm',
                                    term: 'Compound butter',
                                    definition: 'Softened butter blended with flavourings such as herbs, garlic, shallot, lemon, spices or anchovy, rolled into a log in parchment or plastic, chilled and sliced to melt over hot foods.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Compound Butter', 'Flavourings', 'Uses'],
                                    rows: [
                                        ['Maître d’hôtel', 'Parsley, lemon juice, salt and pepper', 'Grilled steak, fish and vegetables'],
                                        ['Garlic and herb', 'Garlic, parsley and other herbs', 'Bread, steak and shellfish'],
                                        ['Anchovy', 'Anchovy fillets, lemon', 'Grilled fish and meats'],
                                        ['Chili or citrus', 'Chili, lime, orange or lemon zest', 'Seafood and vegetables'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Use compound butters fresh or freeze them, labelled and dated, and keep them refrigerated.',
                                        'Butter sauces are emulsions held together by milk solids and are sensitive to heat: too hot and the fat separates; too cold and the butter solidifies.',
                                        'Butter is a milk product and a priority allergen, so label any compound butter and tell guests with allergies.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Cold Sauce', 'Description', 'Notes'],
                                    rows: [
                                        ['Mayonnaise', 'A stable cold emulsion of egg yolk, oil and acid (vinegar or lemon)', 'Add oil slowly; use pasteurized yolks and keep at 4 °C or below because raw egg carries a food safety risk'],
                                        ['Aioli', 'Garlic emulsion, traditionally with oil and egg yolk', 'Same cold chain and egg safety as mayonnaise'],
                                        ['Vinaigrette', 'A temporary emulsion of oil and vinegar, usually 3 parts oil to 1 part acid', 'Shake or whisk before use; the emulsion separates when it stands'],
                                        ['Tartar sauce, salsa verde, chimichurri', 'Mayonnaise or oil-based sauces with herbs, capers and acid', 'Keep refrigerated; label and date'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Homemade mayonnaise, aioli and similar sauces use raw egg yolks, which can carry Salmonella. Use pasteurized eggs where required by policy or regulations, keep the sauce refrigerated at 4 °C or below, and discard it according to your time limits.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Beurre blanc is a reduction finished with cold butter, so it is mounted at low heat, while hollandaise is yolks and clarified butter. Both are emulsions, and both break with the wrong temperature.',
                                },
                            ],
                        },
                        {
                            id: 'ch16-s3',
                            title: '16.3 Finishing Sauces (E-16.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Finishing is the last step that brings a sauce to its final standard. The cook uses finishing techniques according to the recipe, evaluates the final qualities and adjusts them to achieve the desired result.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Technique', 'Description', 'Effect'],
                                    rows: [
                                        ['Monté au beurre', 'Swirling or whisking small pieces of cold butter into a finished sauce off the heat', 'Adds gloss, richness and a smooth body'],
                                        ['Liaison', 'Adding an egg yolk and cream mixture to enrich and lightly thicken, then warming gently without boiling', 'Adds richness and velvety texture'],
                                        ['Garnishing', 'Adding herbs, concassé, cooked mushrooms, capers or other items', 'Adds colour, texture and flavour'],
                                        ['Flambé', 'Adding alcohol to a hot pan and igniting it', 'Adds flavour and reduces some of the alcohol'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Final Quality', 'What to Check'],
                                    rows: [
                                        ['Taste', 'Balance of salt, acid and sweetness; no raw flour or burnt flavours'],
                                        ['Appearance', 'Colour and gloss; no skin, oil slick or lumps'],
                                        ['Flavour', 'Depth and clarity of the main flavours'],
                                        ['Texture', 'Smooth and appropriate in consistency'],
                                        ['Alcohol level', 'Wine, spirits and liqueurs leave alcohol behind; flambé and simmering reduce it but do not remove it completely'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Always taste and adjust just before service, because flavour changes with reduction and holding.',
                                        'Add butter, cream and liaison last, off a boil, and keep hollandaise and butter sauces warm but not hot.',
                                        'Tell guests when a sauce contains alcohol: some alcohol remains after flambé or simmering, which matters for guests who avoid it for health, religious or personal reasons.',
                                        'Strain a finished sauce through a fine strainer for a smooth, polished result.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Flambé is a fire hazard. Remove the pan from the heat before adding alcohol, keep bottles away from the flame, never pour alcohol from the bottle into a hot pan, keep a lid or a fire blanket nearby, keep your face and loose sleeves away, and follow company policy, because many establishments restrict flambé to trained staff or specific areas. Never flambé under a hood with grease build-up.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Monté au beurre is added at the very end, off the heat, with cold butter, and the sauce should not be allowed to boil afterwards or the butter will separate. The four finishing techniques in the standard are monté au beurre, liaison, garnishing and flambé.',
                                },
                            ],
                        },
                        {
                            id: 'ch16-s4',
                            title: '16.4 Holding, Cooling and Storing Sauces (E-16.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'A sauce must keep its quality and its safety while it waits for service. The cook holds the finished sauce using techniques that preserve quality and integrity, according to jurisdictional regulations, and cools and stores any sauce that is not used.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Sauce Type', 'Holding Method', 'Notes'],
                                    rows: [
                                        ['Roux-thickened and stock-based hot sauces', 'Bain-marie or steam table at 60 °C or above, covered, stirred occasionally', 'Cover the surface to prevent a skin; thin with stock if it thickens'],
                                        ['Hollandaise, béarnaise and beurre blanc', 'Warm, covered holding in small quantities for a limited time within regulations', 'Overheating breaks them; they cannot be reheated normally; discard leftovers according to policy'],
                                        ['Cold sauces and dressings', 'Refrigerate at 4 °C or below in covered, labelled containers', 'Keep emulsions such as mayonnaise cold'],
                                        ['Sauces to be stored', 'Cool rapidly, cover, label and date', 'Refrigerate or freeze; use within the time set by policy'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Cool sauces using the same two-stage guidelines as stock: from 60 °C to 20 °C within 2 hours and from 20 °C to 4 °C within a further 4 hours, using shallow pans, ice baths, ice wands or a blast chiller.',
                                        'Reheat stored sauces quickly to at least 74 °C, stirring, and adjust consistency and seasoning after reheating.',
                                        'Prevent skin formation by pressing plastic wrap or parchment onto the surface or floating a thin layer of melted butter on top.',
                                        'Label with the name, date and any allergens, and rotate with FIFO.',
                                        'Freeze-thaw can break cornstarch-thickened and emulsified sauces; roux-thickened and modified-starch sauces hold up better.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never hold a sauce between 4 °C and 60 °C. A large pot of sauce that cools slowly in the danger zone allows bacteria to grow, especially in dairy, egg and stock-based sauces. Cool it rapidly, reheat it to 74 °C and discard it if the time and temperature limits have been exceeded.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'For holding questions, match the method to the sauce. Hot sauces are held at 60 °C or above, cold sauces at 4 °C or below, delicate emulsions in small batches for a short time, and any sauce that cannot be held safely is discarded.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 6 FRAGMENT (MWA F: Cheese, dairy, plant-based dairy alternatives, eggs and egg products)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 5.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks F-17 and F-18.
        // ============================================================
        {
            id: 'part-6',
            number: 6,
            title: 'Cheese, Dairy, Plant-Based Dairy Alternatives, Eggs and Egg Products (MWA F)',
            description: 'Dairy, cheese and plant-based alternatives from classification, manufacturing and storage to melting, whipping, scalding, tempering and finishing, then eggs and egg products: composition, grades and sizes, separating, whipping, boiling, poaching, frying, scrambling, custards, omelets, soufflés, finishing and holding. MWA F carries 10 exam questions across tasks F-17 and F-18.',
            weight: '10 questions (6.7% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 17 — CHEESE, DAIRY AND PLANT-BASED DAIRY ALTERNATIVES (F-17)
                // ============================================================
                {
                    id: 'ch-17',
                    number: 17,
                    title: 'Cheese, Dairy and Plant-Based Dairy Alternatives',
                    subtitle: 'Task F-17 · Uses cheese, dairy products and plant-based dairy alternative products (5 exam questions)',
                    isFree: false,
                    estimatedMinutes: 75,
                    sections: [
                        {
                            id: 'ch17-s1',
                            title: '17.1 Dairy Products, Butters and Plant-Based Alternatives (F-17.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Dairy products appear on almost every menu, as ingredients, finishing touches and the star of dishes. A cook must know the classes of dairy, how each is made and how it behaves, how to judge freshness, how to store it safely, and which plant-based alternatives can replace it.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Dairy Product', 'Description', 'Kitchen Notes'],
                                    rows: [
                                        ['Skim milk', 'Milk with virtually all fat removed', 'Low fat; thin; used where fat is not wanted'],
                                        ['Whole (homogenized) milk', 'Typically 3.25% milk fat in Canada', 'General cooking, béchamel, custards'],
                                        ['Buttermilk', 'Cultured (fermented) milk with a tangy flavour', 'Baking, marinades, dressings; the acid reacts with baking soda'],
                                        ['Cream', 'The fat-rich portion of milk; common types are half-and-half (about 10%), table cream (about 18%) and whipping cream (about 35% milk fat)', 'Higher fat resists curdling and whips; labels show the milk fat percentage'],
                                        ['Yogurt', 'Milk fermented with bacterial cultures', 'Sauces, marinades, dressings, baking; strain for thicker Greek-style yogurt'],
                                        ['Cheese', 'Milk coagulated and separated into curds, then pressed, ripened or fresh', 'See classes below'],
                                        ['Butter', 'Churned cream; in Canada at least 80% milk fat', 'Sauces, baking, sautéing; salted, unsalted or cultured'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Milk Source', 'Characteristics'],
                                    rows: [
                                        ['Cow', 'The most common source; mild flavour and the base of most dairy products'],
                                        ['Goat', 'Tangy, distinct flavour; smaller fat globules; used in fresh cheeses (chèvre) and aged cheeses'],
                                        ['Sheep', 'Rich and high in fat and solids; used in feta, Pecorino and Roquefort'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Butter or Substitute', 'Description', 'Notes'],
                                    rows: [
                                        ['Unsalted butter', 'Butter without added salt', 'Preferred for baking and sauces because the cook controls seasoning'],
                                        ['Salted butter', 'Butter with added salt', 'Table butter; salt level varies by brand'],
                                        ['Cultured butter', 'Butter made from fermented cream', 'More complex, tangy flavour'],
                                        ['Clarified butter', 'Butter with water and milk solids removed', 'Higher smoke point; used for sautéing and hollandaise'],
                                        ['Ghee', 'Clarified butter cooked until the milk solids brown and are strained out', 'Nutty flavour, high smoke point; nearly free of lactose'],
                                        ['Margarine (hydrogenated and non-hydrogenated)', 'A butter substitute made from vegetable oils', 'Not butter under Canadian regulations; often dairy-free but check labels; non-hydrogenated types avoid trans fats'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Cheese Class', 'Characteristics', 'Examples'],
                                    rows: [
                                        ['Fresh', 'Unripened, high moisture, mild and soft', 'Cottage cheese, ricotta, cream cheese, mascarpone, fresh mozzarella, chèvre, feta'],
                                        ['Soft-ripened', 'Bloomy or washed rind; ripens from the outside in; creamy', 'Brie, camembert'],
                                        ['Semi-soft', 'Smooth, supple and mild to pungent', 'Havarti, Monterey Jack, fontina, low-moisture mozzarella'],
                                        ['Semi-firm', 'Firmer texture; melts and slices well', 'Cheddar (younger), Gouda, Swiss (Emmental)'],
                                        ['Hard', 'Aged, dry, firm and intense; grates well', 'Aged cheddar, Parmigiano-Reggiano, Pecorino, Asiago'],
                                        ['Blue', 'Ripened with mould veins; sharp and salty', 'Roquefort, Stilton, Gorgonzola'],
                                        ['Processed', 'Blended and melted with emulsifying salts; very smooth melting', 'Processed cheese slices, cheese spreads'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Plant-Based Alternative', 'Examples', 'Kitchen Notes'],
                                    rows: [
                                        ['Liquids (milk alternatives)', 'Coconut, soy, almond (also oat, rice and pea)', 'Behave differently from milk: soy and almond can curdle in hot, acidic dishes; coconut is rich; oat may contain gluten; check for added sugar'],
                                        ['Cheeses', 'Nut-based (cashew, almond), rice-based and oil-based (coconut oil) cheeses', 'Melting, stretching and flavour differ from dairy cheese; check allergens such as tree nuts and soy'],
                                        ['Butters and spreads', 'Plant-based butters and non-dairy margarines', 'Check the label for milk-derived ingredients'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Manufacturing Process', 'What It Does'],
                                    rows: [
                                        ['Pasteurization', 'Heats milk to destroy harmful bacteria; extends shelf life and makes it safe'],
                                        ['Homogenization', 'Breaks fat globules into very small particles so the cream does not rise and separate'],
                                        ['Fermentation', 'Cultures turn lactose into lactic acid, producing yogurt, buttermilk, sour cream and cheese'],
                                        ['UHT (ultra-high temperature)', 'Heats milk to a very high temperature for a few seconds so it is shelf-stable until opened'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Freshness Check', 'Fresh', 'Spoiled or Not Acceptable'],
                                    rows: [
                                        ['Best-before date', 'Within date and stored at 4 °C or colder', 'Past date or temperature abused'],
                                        ['Smell', 'Clean, mild or typical of the product', 'Sour, rancid or yeasty'],
                                        ['Appearance', 'Smooth, uniform colour', 'Lumps, curdling, slime or unusual colour'],
                                        ['Cheese ripeness', 'Soft-ripened cheese is creamy right through; firm cheeses have a clean, typical aroma', 'Chalky centre means underripe; strong ammonia smell means overripe; slimy rind or unusual mould on soft cheese'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Judge dairy freshness using the best-before date and sensory assessment; judge cheese ripeness by sensory assessment.',
                                        'Identify milk and dairy products, butters and cheeses according to jurisdictional regulations. In Canada, standards cover items such as minimum milk fat for butter and composition limits for named cheeses, and labels show milk fat (% M.F.) and moisture (% M.C.).',
                                        'Keep dairy at 4 °C or colder, covered and away from strong odours, because butter and milk absorb smells. Keep cheese wrapped in breathable material such as wax or parchment, and use FIFO.',
                                        'Never return poured milk or cream to the original container.',
                                        'Raw-milk cheeses are subject to special rules in Canada: they must be aged for a minimum period (commonly 60 days) before sale, and unpasteurized soft cheeses carry added risk for some guests.',
                                        'Factors to consider when selecting: local availability, freshness, storage life, applications and how processed the product is. Dietary requirements to consider: milk allergy and lactose intolerance, vegan and vegetarian diets (traditional cheese uses animal rennet; microbial rennet is vegetarian), kosher and halal requirements and cultural preferences.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Milk is a priority allergen, and traces in butter, cheese, whey, casein and many sauces can trigger reactions. Never substitute plant-based items without checking the label, and clean and sanitize equipment between dairy and dairy-free preparation. Soft cheeses made from unpasteurized milk can carry Listeria, which is especially dangerous for pregnant women, older adults and people with weakened immune systems.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Homogenization stops the cream from separating, pasteurization makes milk safe, fermentation produces yogurt and cheese, and UHT makes milk shelf-stable. These four manufacturing processes are named in the standard.',
                                },
                            ],
                        },
                        {
                            id: 'ch17-s2',
                            title: '17.2 Processing Cheese, Dairy and Plant-Based Alternatives (F-17.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Dairy is delicate. Heat, acid and time can make it curdle, scorch or separate, so the cook must know how each product reacts and add it in the right sequence. Tools include cheese graters, cheese cutters and non-reactive pots and pans.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'How It Works', 'Key Points'],
                                    rows: [
                                        ['Whipping', 'Beating cream to trap air in a foam of fat', 'Use cream with at least about 30% fat, very cold, in a cold bowl; stop at soft or stiff peaks, because over-whipping turns cream into butter'],
                                        ['Melting', 'Heating cheese until its fat and proteins soften', 'Use low heat, grate cheese finely and add it off the heat or at the end; high heat makes cheese stringy, greasy or rubbery'],
                                        ['Heating', 'Warming milk and cream for sauces, soups and custards', 'Use a heavy pot and low heat, and stir to prevent scorching'],
                                        ['Coagulating', 'Setting milk proteins with acid, rennet or heat to make curds and cheese', 'Controlled coagulation makes cheese, paneer and ricotta; uncontrolled coagulation is curdling'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Dairy Technique', 'What It Is', 'Example'],
                                    rows: [
                                        ['Souring', 'Adding acid to milk to make a substitute for buttermilk or soured milk', 'Stir 15 mL (1 tbsp) lemon juice or vinegar into 250 mL (1 cup) milk and let it stand for 5 to 10 minutes'],
                                        ['Tempering', 'Slowly adding hot liquid to cold dairy or eggs, or bringing cold dairy toward the temperature of a hot liquid, to prevent shock and curdling', 'Whisk hot soup into cream before returning it to the pot'],
                                        ['Scalding', 'Heating milk to just below boiling (small bubbles forming around the edge)', 'Used in custards, breads and some sauces; do not boil'],
                                        ['Freezing', 'Freezing dairy-based desserts', 'Ice cream and frozen yogurt; cream and soft cheeses change texture when frozen, so use them in cooked dishes afterwards'],
                                        ['Puréeing', 'Blending dairy or cheese until smooth', 'Ricotta fillings, cheese sauces, cream soups'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Cheese Technique', 'Description', 'Typical Cheese'],
                                    rows: [
                                        ['Shredding', 'Cutting into strands with a grater', 'Cheddar, mozzarella'],
                                        ['Crumbling', 'Breaking into small, irregular pieces', 'Feta, blue cheese, chèvre'],
                                        ['Slicing', 'Cutting into slices with a wire, knife or slicer', 'Semi-firm cheeses, mozzarella'],
                                        ['Shaving', 'Removing thin slices with a peeler or plane', 'Parmigiano-Reggiano, Pecorino'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Cooking methods for dairy and cheese: baking, melting, deep-frying, pan-frying, broiling, reducing and simmering. Keep moisture away from hot oil when deep-frying breaded cheese, and fry halloumi or paneer in a hot pan with little oil.',
                                        'Flavour dairy products by infusion or steeping: warm milk or cream with aromatics such as vanilla, herbs, garlic or bay leaf, cover and let steep off the heat, then strain.',
                                        'Change consistency using the method in the recipe: whip, reduce, strain (draining yogurt makes a thick labneh-style product) or purée.',
                                        'Add dairy and cheese in the correct sequence: dairy goes in near the end of cooking, cheese is added last and off the heat, and acid is added late. High heat, acid and salt all cause curdling.',
                                        'Stabilize dairy sauces by using a starch (roux or slurry), higher-fat cream or gentle heat.',
                                        'Handle plant-based alternatives according to how they behave: shake cartons, choose unsweetened types for savoury dishes, expect soy and almond milk to curdle in acidic or very hot dishes, and note that chilled coconut cream can be whipped but most plant milks cannot.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Prevention or Fix'],
                                    rows: [
                                        ['Curdled sauce or soup', 'Dairy boiled, added to acidic liquid, or added without tempering', 'Temper, add dairy last, use higher-fat cream or a starch stabilizer, and do not boil'],
                                        ['Grainy or oily cheese sauce', 'Cheese added to a boiling liquid or overheated', 'Remove the pan from the heat, add finely grated cheese in small amounts, and use a roux-based sauce or processed cheese'],
                                        ['Scorched milk', 'High heat with no stirring in a thin pot', 'Use a heavy pot, low heat and stirring; rinse the pot with cold water first'],
                                        ['Cream will not whip', 'Fat too low, cream too warm or equipment too warm', 'Chill cream and bowl and use cream with at least 30% fat'],
                                        ['Whipped cream turned grainy', 'Over-whipped', 'Stop at the right peak; rescue slightly over-whipped cream by folding in a little liquid cream'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example', 'Calculation'],
                                    rows: [
                                        ['Whipped cream volume', 'Whipped cream roughly doubles in volume, so about 2 L of whipping cream gives about 4 L of whipped cream'],
                                        ['Buttermilk substitute', '1 L of milk needs 60 mL (4 tbsp) of lemon juice or vinegar: 4 × 250 mL cups × 15 mL = 60 mL'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Hot milk boils over very quickly, and a pot of scalded milk can burn badly. Use a deep pot, stay with it and keep the handle turned in. Take care with hot cheese sauces and melted cheese, which are as hot as the oven and stick to skin.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Almost every dairy cooking problem is solved by lower heat, later addition, tempering, or a starch stabilizer. If a question asks why a sauce curdled, the answer is heat, acid or adding dairy without tempering.',
                                },
                            ],
                        },
                        {
                            id: 'ch17-s3',
                            title: '17.3 Finishing Cheese, Dairy and Plant-Based Products (F-17.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Finishing techniques turn dairy and cheese into the final dish: a bubbling, golden gratin, a caramelized brûlée or a balanced cheese plate. The tools include torches, broilers, salamanders, rasps and freezers.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Technique', 'Description', 'Example'],
                                    rows: [
                                        ['Gratin', 'Topping a dish with cheese or breadcrumbs and browning it under a broiler or salamander', 'Potato gratin, macaroni and cheese, French onion soup'],
                                        ['Grilling', 'Browning or melting cheese under direct heat', 'Grilled cheese, halloumi, cheese toasts'],
                                        ['Melting', 'Melting cheese over a hot dish to finish', 'Burgers, nachos, soups'],
                                        ['Brûlé', 'Sprinkling sugar on a surface and caramelizing it with a torch or broiler', 'Crème brûlée, brûléed fruit, some cheesecakes'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Tool', 'Use'],
                                    rows: [
                                        ['Torch', 'Browning, caramelizing and melting surfaces'],
                                        ['Broiler or salamander', 'Browning and melting from above'],
                                        ['Rasp (fine grater)', 'Fine grating of hard cheese, citrus zest or spices over a dish'],
                                        ['Freezer', 'Firming cheese or desserts for clean cuts or setting frozen dairy desserts'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Garnish or Accompaniment', 'Examples'],
                                    rows: [
                                        ['Fruit', 'Fresh fruit, dried fruit, fruit pastes'],
                                        ['Nuts', 'Toasted walnuts, almonds, pecans'],
                                        ['Herbs', 'Chives, basil, thyme'],
                                        ['Spices', 'Black pepper, paprika, chili'],
                                        ['Condiments', 'Honey, mustard, chutney, olives'],
                                        ['Sauces', 'Cream or fruit sauce, reductions, coulis'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select garnishes and accompaniments that complement the dairy or cheese: sweet with salty, crisp with creamy, acid with rich.',
                                        'Serve cheese at the temperature that lets its flavour show, but keep it out of refrigeration only for the time allowed by policy and food safety rules.',
                                        'On a cheese plate, arrange from mild to strong, use a separate knife for each cheese, and label each cheese and any allergens (milk, nuts, wheat in crackers).',
                                        'Apply finishing techniques according to the recipe, and flavour dairy products and plant-based alternatives to the desired result.',
                                        'Hold hot cheese dishes at 60 °C or above and cold dairy dishes at 4 °C or below, and keep dairy foods labelled, dated and covered.',
                                        'Handle and store finished dairy dishes according to regulations: cool them rapidly and refrigerate, and reheat to 74 °C.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Torches are fuelled by flammable gas and the flame is hot enough to ignite clothing and nearby products. Keep the flame away from your body and containers, check for leaks, light and use the torch only in a safe area, and turn it off and set it down before moving. Never leave a lit torch or a broiler unattended.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The four finishing techniques in the standard for cheese and dairy are gratin, grilling, melting and brûlé. If a question asks how to brown the top of a baked pasta dish, the answer is gratin under a broiler or salamander.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 18 — EGGS AND EGG-BASED DISHES (F-18)
                // ============================================================
                {
                    id: 'ch-18',
                    number: 18,
                    title: 'Eggs and Egg-Based Dishes',
                    subtitle: 'Task F-18 · Prepares eggs and egg-based dishes (5 exam questions)',
                    isFree: false,
                    estimatedMinutes: 85,
                    sections: [
                        {
                            id: 'ch18-s1',
                            title: '18.1 Selecting Eggs, Egg Products and Substitutes (F-18.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Eggs act as leavening agents and binders, and they can be served on their own or used in many dishes. Cooks need to understand eggs, egg products and egg substitutes: their composition, grades and sizes, safe handling and the best use for each type.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Part of the Egg', 'Composition and Role'],
                                    rows: [
                                        ['Shell', 'Porous calcium carbonate; protects the egg but allows air and bacteria to pass through if damaged or dirty'],
                                        ['Membranes and air cell', 'Two membranes line the shell; the air cell at the broad end grows larger as the egg ages'],
                                        ['Albumen (white)', 'About two thirds of the egg; water and protein; sets firm when heated and whips into a foam'],
                                        ['Yolk', 'Fat, protein, vitamins and lecithin (the emulsifier used in mayonnaise and hollandaise); thickens and enriches'],
                                        ['Chalazae', 'Twisted cords that hold the yolk in the centre; a sign of freshness, not a defect'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Egg Type', 'Characteristics', 'Uses'],
                                    rows: [
                                        ['Chicken', 'The standard egg used in recipes', 'All cooking and baking'],
                                        ['Quail', 'Very small; roughly 4 to 5 equal one large chicken egg; delicate flavour', 'Garnishes, canapés, salads, pickled eggs'],
                                        ['Duck', 'Larger than a chicken egg with a richer yolk and firmer white', 'Baking, Asian cuisine, curing'],
                                        ['Ostrich', 'Very large; one egg is equal to about two dozen chicken eggs', 'Novelty and large-scale cooking, with careful handling'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Canadian Egg Size', 'Minimum Weight per Egg'],
                                    rows: [
                                        ['Peewee', 'Under 42 g'],
                                        ['Small', '42 g'],
                                        ['Medium', '49 g'],
                                        ['Large (standard for recipes)', '56 g'],
                                        ['Extra large', '63 g'],
                                        ['Jumbo', '70 g'],
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'In Canada, shell eggs are graded Canada A, B or C. Canada A is the grade used in food service: the shell is clean and sound, the white is firm, the yolk is round and well centred and the air cell is small. Grade and size are set by regulation, and the carton shows both.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Egg Product', 'Description', 'Uses'],
                                    rows: [
                                        ['Liquid egg (whole)', 'Pasteurized, shell-free whole egg in cartons', 'Scrambled eggs, baking, batters; safe for large volume and lightly cooked uses'],
                                        ['Egg whites', 'Separated, pasteurized whites', 'Meringues, foams, clarification of consommé'],
                                        ['Egg yolks', 'Separated, pasteurized yolks', 'Custards, hollandaise, mayonnaise, pastry cream'],
                                        ['Egg white powder', 'Dried egg white', 'Meringue powders, stabilizing foams'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Plant-Based Egg Substitute', 'Best For', 'Notes'],
                                    rows: [
                                        ['Commercial egg replacers', 'Baking and binding', 'Follow the manufacturer directions'],
                                        ['Tofu scramble', 'Breakfast scrambles', 'Flavour and colour from seasoning and turmeric'],
                                        ['Aquafaba (chickpea liquid)', 'Meringue-like foams and mousses', 'Whips like egg whites'],
                                        ['Flax or chia gel, applesauce', 'Binding in baking', 'Does not leaven or whip'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Freshness Check', 'Fresh Egg', 'Old or Unacceptable'],
                                    rows: [
                                        ['Shell', 'Clean, intact and dry', 'Cracked, dirty or slimy; discard cracked eggs'],
                                        ['Water test', 'Sinks and lies flat', 'Stands on end when old; floats when very old and should be discarded'],
                                        ['Broken out', 'Thick white that stands up around a round, high yolk', 'Flat, watery white and flattened yolk'],
                                        ['Smell', 'Neutral', 'Sulphur or sour smell; discard'],
                                        ['Date', 'Within the best-before date and stored cold', 'Past date or temperature abused'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Judge freshness of eggs, products and substitutes using the best-before date and sensory assessment.',
                                        'Select eggs, egg products and substitutes to suit the recipe: shell eggs for cooking to order, liquid or pasteurized products for large volumes and dishes served raw or lightly cooked (mayonnaise, Caesar dressing, mousses, tiramisu).',
                                        'Adjust volumes for yield differences: a large egg gives about 50 g of liquid egg (about 30 g white and 20 g yolk), so a recipe that calls for 12 large eggs needs about 600 g of liquid egg (12 × 50 g).',
                                        'Selection factors: local availability, freshness, storage life, applications, how processed the product is and production type such as free-run and cage-free.',
                                        'Store eggs at 4 °C or colder in their cartons, away from strong odours, and use FIFO. Do not store eggs near raw meat or leave them at room temperature.',
                                        'Dietary requirements: egg is a priority allergen, and eggs are excluded by vegan diets and some religious and cultural diets. Egg substitutes may contain soy or wheat.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Raw and lightly cooked eggs can carry Salmonella. Never use cracked or dirty eggs, wash hands and sanitize surfaces after handling shell eggs, and never pool large quantities of shell eggs for later. Use pasteurized eggs for any dish that will not be cooked thoroughly, according to company policy and regulations.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Fresh eggs sink and lie flat in water and have a thick, standing white. Old eggs stand up or float and have a thin, watery white. Quantity conversions use 50 g of liquid egg per large egg.',
                                },
                            ],
                        },
                        {
                            id: 'ch18-s2',
                            title: '18.2 Processing Eggs: Separating, Beating, Tempering and Whipping (F-18.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Processing prepares eggs for use. The cook selects tools such as non-reactive bowls, whisks, spatulas and timers, then separates, beats, tempers, combines and whips eggs to the recipe and the desired result.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Procedure', 'Method', 'Key Points'],
                                    rows: [
                                        ['Separating', 'Pass the yolk between the shell halves or use your clean hands, letting the white drop into a bowl', 'Cold eggs separate more cleanly; separate each egg over a small bowl before adding to the main bowl, because any yolk or fat prevents whites from whipping'],
                                        ['Beating', 'Whisking whole eggs, whites or yolks to blend them or add air', 'Use a clean, dry, non-reactive bowl; do not overbeat when a smooth, even blend is all that is needed'],
                                        ['Tempering', 'Slowly whisking a hot liquid into eggs to raise their temperature gradually', 'Stops the eggs from scrambling when added to hot milk, cream or sauce'],
                                        ['Combining', 'Mixing eggs with other ingredients such as milk, cheese, sugar, vegetables, herbs, proteins, acids or fruit', 'Combine according to the recipe order, and fold gently when air needs to be kept'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Whipping Stage (Egg Whites)', 'Appearance', 'Use'],
                                    rows: [
                                        ['Foamy', 'Loose bubbles; liquid still flows', 'Starting point; add acid or sugar here'],
                                        ['Soft peaks', 'Peaks curl over when the whisk is lifted; glossy', 'Gradually add sugar for meringue; fold into batters'],
                                        ['Stiff peaks', 'Peaks stand straight up; glossy and firm', 'Meringues, soufflés, mousses'],
                                        ['Over-whipped (dry)', 'Dull, dry, grainy and starting to separate', 'Cannot be recovered; start again'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Use a clean, grease-free bowl. Fat from yolk, oil or plastic residue prevents egg whites from foaming. Stainless steel, glass or copper bowls are best.',
                                        'Whites whip highest at room temperature, but do not leave eggs out longer than company policy and food safety rules allow. Warming the bowl in a water bath is another way to take the chill off.',
                                        'Add a small amount of acid (cream of tartar or lemon juice) to stabilize a foam, and add sugar gradually once soft peaks form.',
                                        'Whole eggs and yolks whip best when slightly warmed, as in a sabayon or genoise, giving a thick ribbon stage.',
                                        'Factors to consider when processing: freshness, storage life, applications, how processed the product is and temperature.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Egg white foam fails because of fat, not because of effort. If a question asks why whites will not whip, look for a trace of yolk, grease on the bowl or whisk, or over-whipping. Acid and sugar stabilize a foam.',
                                },
                            ],
                        },
                        {
                            id: 'ch18-s3',
                            title: '18.3 Cooking Eggs and Egg-Based Dishes (F-18.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Egg proteins set when heated: whites begin to set around 60 °C and are firm near 80 °C, while yolks thicken around 65 °C and set at about 70 °C. Too much heat or time makes eggs rubbery, watery or curdled. The standard lists these cooking methods: boiling, poaching, frying, scrambling, shirring, basting, baking, tempering and fermenting.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'How It Is Done', 'Key Points'],
                                    rows: [
                                        ['Boiling (in the shell)', 'Lower eggs into simmering or boiling water for a set time, then chill in ice water', 'Typical large-egg times: soft about 3 to 5 minutes, medium about 6 to 8 minutes, hard about 10 to 12 minutes; chilling stops cooking and helps peeling; a green-grey ring around the yolk comes from overcooking or slow cooling'],
                                        ['Poaching', 'Slide a cracked egg into hot water kept just below a simmer (about 80 to 85 °C) for 3 to 4 minutes', 'Use very fresh eggs; a splash of vinegar helps the white set; remove with a perforated spoon and drain'],
                                        ['Frying', 'Cook in a pan with butter or oil: sunny-side up, over easy, over medium or over hard', 'Use medium heat; non-stick pans work best; do not let the whites brown or turn rubbery'],
                                        ['Scrambling', 'Stir beaten eggs in a pan over moderate heat until just set', 'Low heat and constant stirring give soft, creamy curds; remove from the heat while still slightly wet because they keep cooking; salt just before cooking'],
                                        ['Shirring (baked eggs)', 'Bake eggs in a buttered ramekin, often with cream or other ingredients', 'Cook until the white is set and the yolk is soft'],
                                        ['Basting', 'Spoon hot fat or steam over the top of a frying egg to set the white without turning it', 'Gives a tender, evenly cooked egg'],
                                        ['Baking', 'Cook egg dishes in an oven', 'Quiche, frittata, baked custards and soufflés'],
                                        ['Fermenting', 'Preserving or flavouring eggs through brining or fermentation', 'Specialty items such as pickled or cured eggs; follow tested procedures'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Egg-Based Dish', 'Description', 'Method and Key Points'],
                                    rows: [
                                        ['Omelet', 'Beaten eggs cooked in a pan and folded or rolled around a filling', 'Use a hot, non-stick pan with butter; stir and shake to form small curds, then fold; French omelets are pale and soft, American omelets are lightly browned'],
                                        ['Set custard (quiche, flan)', 'Eggs and dairy baked until they set into a firm gel', 'Bake gently, often in a water bath, until just set with a slight wobble in the centre; high heat makes the custard weep and become rubbery'],
                                        ['Stirred custard (crème anglaise, pastry cream, ice cream base)', 'Eggs and dairy cooked while stirring until thick enough to coat a spoon (nappé)', 'Cook over gentle heat to about 80 to 85 °C and do not boil; cool quickly over an ice bath'],
                                        ['Soufflé', 'A flavoured base (such as béchamel or pastry cream) lightened with whipped egg whites and baked', 'Fold the whites in gently; bake at a moderately high temperature; do not open the oven early; serve immediately because it collapses as it cools'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Doneness', 'Description', 'Typical Dish'],
                                    rows: [
                                        ['Soft', 'White set, yolk runny; curds moist and soft', 'Soft-boiled, poached, sunny-side up, soft-scrambled'],
                                        ['Medium', 'White set and yolk thickened but still creamy', 'Medium-boiled, over medium'],
                                        ['Hard', 'White and yolk firm through', 'Hard-boiled, over hard, fully set scrambled and custards'],
                                        ['Degree of set', 'How firm a custard, quiche or soufflé is', 'Quiche set with a slight wobble; soufflé risen and set'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Prevention'],
                                    rows: [
                                        ['Rubbery or tough eggs', 'Too much heat or overcooking', 'Use moderate or low heat; remove while still slightly soft and let carryover cooking finish'],
                                        ['Green or grey ring on hard-boiled yolks', 'Overcooking or slow cooling', 'Time carefully and chill immediately in ice water'],
                                        ['Watery scrambled eggs or weeping custard', 'Overcooking, or too much heat; proteins squeeze out water', 'Cook gently and bake custards in a water bath'],
                                        ['Curdled stirred custard', 'Overheated, boiled or not tempered', 'Cook slowly, stir constantly, strain if needed and cool quickly'],
                                        ['Flat or collapsed soufflé', 'Whites under- or over-whipped, folding too rough, oven door opened too early', 'Whip to the right peak, fold gently and keep the oven closed'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example: Custard Quantities', 'Calculation'],
                                    rows: [
                                        ['Starting ratio', 'A common ratio for a set custard is 1 large egg to about 125 mL of milk or cream; adjust to the recipe'],
                                        ['Eggs for a large batch', '4 L of custard mix at 125 mL per egg: 4 000 mL ÷ 125 = 32 eggs'],
                                        ['Liquid egg equivalent', '32 large eggs × 50 g = 1.6 kg of liquid egg'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select tools and equipment: pans, pots, ovens, steamers, spatulas, whisks, perforated spoons, double boilers and bain-maries.',
                                        'Temper eggs, egg products and substitutes according to the recipe, and determine doneness through sensory assessment, the desired result and the recipe.',
                                        'Factors to consider: freshness, storage life, applications, how processed the product is, temperature, time, acidity, batch size, and texture and consistency.',
                                        'Cook egg dishes to a safe internal temperature (74 °C for egg dishes and leftovers) unless policy and regulations allow a lower temperature for individual servings made with fresh, properly handled eggs, and be extra careful when serving vulnerable guests.',
                                        'Acid, sugar and dairy change how eggs set: sugar and dairy raise the setting temperature and give a tender result, while acid can make the proteins set more firmly or curdle.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Eggs that are runny or only lightly cooked carry a higher risk of Salmonella, especially for children, older adults, pregnant guests and people with weakened immune systems. Cook eggs for these guests thoroughly, use pasteurized products where required, and follow company policy and public health regulations.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Almost every egg cooking fault is too much heat. Gentle heat and removal before the dish is completely set give tender eggs, smooth custards and soft curds. Set custards bake slowly in a water bath, and stirred custards are cooked until they coat the back of a spoon.',
                                },
                            ],
                        },
                        {
                            id: 'ch18-s4',
                            title: '18.4 Finishing, Holding and Storing Egg Dishes (F-18.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Egg dishes lose quality quickly and are potentially hazardous. The cook assembles and finishes them, adds garnishes and handles holding and storage carefully. Tools include torches, pots, ovens, steamers, plates, hotel pans and warmers.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Step', 'Description', 'Example'],
                                    rows: [
                                        ['Assembly', 'Putting the dish together according to the recipe and the desired result', 'Eggs Benedict, filled omelets, quiche garnished and portioned, egg sandwiches'],
                                        ['Torching or broiling', 'Browning or caramelizing the surface with a torch or broiler', 'Crème brûlée, gratinéed egg dishes, meringue topping'],
                                        ['Garnishing', 'Adding colour, flavour and texture with a garnish', 'Green onions, parsley, fruit, paprika, chives'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Assemble egg dishes according to the recipe, keeping them hot and arranged neatly, and serve soufflés and omelets immediately.',
                                        'Select garnishes for accompaniment and visual appeal that match the dish and do not introduce allergens.',
                                        'Hold hot egg dishes at 60 °C or above in warmers or covered hotel pans, in small batches, and for no longer than recipe quality and regulations allow. Scrambled eggs held too long become watery and may develop a green tinge.',
                                        'Cool cooked egg dishes and hard-boiled eggs rapidly, refrigerate at 4 °C or below, label and date them, and reheat to 74 °C.',
                                        'Keep cooked and raw eggs and products separate, and clean and sanitize equipment between uses.',
                                        'Handle and store egg dishes according to regulations and factors such as storage life, how processed the product is, batch size, temperature and holding time.',
                                        'Dietary requirements: egg allergies, vegan and vegetarian guests, and religious and cultural restrictions. Label dishes made with egg and egg substitutes.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Egg Dish', 'Holding Guideline'],
                                    rows: [
                                        ['Scrambled eggs', 'Cook in small batches close to service; hold hot, covered, for a short time'],
                                        ['Omelets, fried and poached eggs', 'Cook to order; do not hold'],
                                        ['Quiche and baked egg dishes', 'Hold hot at 60 °C or above, or cool and refrigerate and reheat to 74 °C'],
                                        ['Hard-boiled eggs', 'Cool rapidly, keep refrigerated in the shell or peeled in covered containers and label and date'],
                                        ['Custards and other cold egg desserts', 'Cool quickly and hold at 4 °C or below'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never leave egg dishes, custards, hollandaise or mayonnaise at room temperature. Egg is a high-risk food: it supports fast bacterial growth in the danger zone. Keep egg dishes either hot at 60 °C or above or cold at 4 °C or below, and discard anything held beyond limits set by company policy and regulations.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Finishing questions for egg dishes focus on timing and temperature: serve soufflés and omelets at once, hold hot egg dishes at 60 °C or above, cool hard-boiled eggs quickly, and use a torch or broiler to brown the surface of brûlée and gratinéed dishes.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 7 FRAGMENT (MWA G: Pastas, noodles, stuffed pastas and dumplings)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 6.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks G-19 and G-20.
        // ============================================================
        {
            id: 'part-7',
            number: 7,
            title: 'Pastas, Noodles, Stuffed Pastas and Dumplings (MWA G)',
            description: 'Dry, fresh and frozen pastas and noodles from dough types and styles to processing, hand-forming, boiling, baking, frying, reheating and finishing, then stuffed pastas and dumplings: fillings, doughs, assembly techniques, cooking methods, doneness, finishing and holding. MWA G carries 10 exam questions across tasks G-19 and G-20.',
            weight: '10 questions (6.7% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 19 — PASTAS AND NOODLES (G-19)
                // ============================================================
                {
                    id: 'ch-19',
                    number: 19,
                    title: 'Pastas and Noodles',
                    subtitle: 'Task G-19 · Prepares pastas and noodles (5 exam questions)',
                    isFree: false,
                    estimatedMinutes: 80,
                    sections: [
                        {
                            id: 'ch19-s1',
                            title: '19.1 Selecting Pasta and Noodle Ingredients (G-19.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Pasta and noodle dishes are made in individual and large quantities, so the cook must know the types, the dough each is made from and how each behaves in cooking. Selection starts with checking quality by freshness and best-before dates, then choosing the dough type, the style and the fillings or ingredients for the dish.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Dough Type', 'Main Ingredients and Characteristics', 'Typical Uses'],
                                    rows: [
                                        ['Wheat flour', 'Durum semolina or wheat flour and water; firm, holds its shape and cooks al dente', 'Dried pastas such as spaghetti and penne; couscous is also made from durum semolina'],
                                        ['Egg based', 'Flour and whole eggs or yolks; rich, tender and yellow', 'Fresh pastas such as fettuccine, ravioli sheets and lasagna, and lo mein style egg noodles'],
                                        ['Rice based', 'Rice flour and water; translucent or white, soft and gluten-free', 'Rice vermicelli, rice sticks and pad thai noodles'],
                                        ['Corn based', 'Corn flour; gluten-free with a slightly sweet flavour and a softer texture', 'Gluten-free pasta, polenta based products'],
                                        ['Buckwheat', 'Buckwheat flour, often blended with wheat; nutty and earthy', 'Soba noodles; many soba contain wheat, so check the label for gluten-free claims'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Style', 'Description', 'Typical Pairing or Use'],
                                    rows: [
                                        ['Spaghetti', 'Long, thin round strands', 'Tomato, oil and garlic, meat sauces and light sauces'],
                                        ['Ravioli', 'Square or round filled pasta', 'Butter, sage, light tomato or cream sauces'],
                                        ['Vermicelli', 'Very thin strands; Italian wheat vermicelli or Asian rice vermicelli', 'Soups, stir-fries and cold noodle salads'],
                                        ['Penne', 'Short tubes cut on an angle with ridges or smooth', 'Baked dishes, chunky and cream sauces'],
                                        ['Udon', 'Thick, chewy Japanese wheat noodles', 'Hot broth, stir-fries'],
                                        ['Lo mein', 'Chinese egg noodles', 'Tossed with sauce, vegetables and proteins'],
                                        ['Couscous', 'Tiny steamed granules of durum semolina', 'Side dishes, salads and stews'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Market Form', 'Characteristics', 'Notes'],
                                    rows: [
                                        ['Dried pasta', 'Made from semolina and water, extruded and dried; long shelf life', 'Store in a cool, dry place in sealed containers; takes longer to cook; roughly doubles in weight when cooked'],
                                        ['Fresh pasta', 'Made from eggs and flour; soft, tender and quick to cook', 'Refrigerate and use within days, or freeze; cooks in a few minutes'],
                                        ['Frozen pasta', 'Fresh or cooked pasta that is frozen', 'Cook from frozen without thawing in most cases; keep frozen at -18 °C or below'],
                                        ['Fresh noodles', 'Soft and moist; refrigerated', 'Short cooking time; check best-before date'],
                                        ['Dried noodles', 'Dehydrated; long shelf life', 'Boil or soak, depending on the type'],
                                        ['Fried noodles', 'Pre-fried, such as instant noodles or crispy chow mein noodles', 'Rehydrate or use as a crisp garnish'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Check quality by freshness and best-before dates. Dried pasta should be hard, uniform in colour and unbroken, with no insects or musty smell. Fresh pasta should be moist and smooth, with no mould, sliminess or sour smell, and kept refrigerated.',
                                        'Choose ingredients for fillings and dishes. Fillings include cheese, meat and vegetable, and the sauce, garnish and seasoning should suit the style.',
                                        'Determine the dough type and style required by the dish and the guest, and weigh up availability, shelf life, cooking time, cost and quality.',
                                        'Dietary requirements to consider: allergies (wheat, egg, soy, milk and fish in some sauces), cultural and religious restrictions, ethical choices such as vegan and vegetarian, health-related needs such as gluten-free, environmental concerns and personal preferences.',
                                        'Wheat and egg are priority allergens, so keep gluten-free pastas in separate pots, strainers, utensils and cooking water, and label them clearly.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Match the dough to the need. Rice and corn doughs suit gluten-free requests, egg doughs give richer fresh pasta, durum wheat holds al dente best and buckwheat gives soba. Fresh pasta cooks in minutes and dried pasta takes much longer.',
                                },
                            ],
                        },
                        {
                            id: 'ch19-s2',
                            title: '19.2 Processing Pastas and Noodles (G-19.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Processing covers making, shaping, assembling and preparing pastas and noodles for cooking or storage. Select the machines and tools according to the recipe, the desired result and the manufacturer specifications.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Machine or Tool', 'Use'],
                                    rows: [
                                        ['Electric pasta roller', 'Rolls dough into even sheets of the desired thickness'],
                                        ['Cutter and blades', 'Cut sheets into noodles, ribbons and squares'],
                                        ['Ravioli press', 'Forms and cuts filled pasta in uniform shapes'],
                                        ['Crimper', 'Seals and decorates the edges of filled pasta'],
                                        ['Drying racks', 'Hold shaped pasta while it dries or rests'],
                                        ['Bowls', 'Mixing doughs, fillings and sauces'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Procedure', 'Description', 'Key Points'],
                                    rows: [
                                        ['Cutting', 'Cutting rolled sheets into noodles or shapes', 'Dust with flour or semolina so strands do not stick together'],
                                        ['Drying', 'Drying shaped pasta so it can be stored', 'Dry evenly on racks; poorly dried pasta spoils or cracks'],
                                        ['Extruding', 'Forcing dough through a die to form shapes', 'The die determines the shape, such as penne and spaghetti'],
                                        ['Blanching', 'Briefly cooking in boiling water, then cooling in ice water', 'Partially cooks pasta so it can be finished later; oil lightly to prevent sticking'],
                                        ['Freezing', 'Freezing shaped or cooked pasta', 'Freeze in a single layer first, then bag, label and date'],
                                        ['Assembly', 'Combining pasta with fillings, sauces and components', 'Follow the recipe; keep fillings cold and ingredients safe'],
                                        ['Soaking', 'Rehydrating dried noodles in hot or cold water', 'Used for rice noodles and some dried Asian noodles'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Hand-Forming Technique', 'Description', 'Example'],
                                    rows: [
                                        ['Rolling', 'Flattening dough with a rolling pin or machine', 'Sheets for lasagna and ravioli'],
                                        ['Folding', 'Folding dough over itself or a filling', 'Tortellini, folded dumplings'],
                                        ['Stretching', 'Gently stretching dough to a thin sheet', 'Hand-pulled noodles'],
                                        ['Cutting', 'Cutting rolled dough into shapes', 'Fettuccine, pappardelle, squares'],
                                        ['Stuffing', 'Filling dough before sealing', 'Ravioli, tortelloni'],
                                        ['Pulling', 'Pulling dough into long strands', 'Hand-pulled noodles'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Process and prepare ingredients for assembly and fillings: cheese, proteins and vegetables should be cut, cooked, cooled and seasoned as the recipe requires.',
                                        'Rest pasta dough covered for about 30 minutes before rolling so the gluten relaxes and the dough rolls without tearing.',
                                        'Keep dough from drying out while you work by covering it, and keep a light dusting of flour or semolina on the work surface.',
                                        'Method to determine yield: dried pasta roughly doubles in weight when cooked, so 100 g dried pasta gives about 200 g cooked pasta. Fresh pasta gains less, so allow about 125 g cooked per 100 g.',
                                        'Store and hold prepared pasta according to service requirements: refrigerate fresh pasta at 4 °C or below, freeze it for longer storage, and label and date every container.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example: Yield', 'Calculation'],
                                    rows: [
                                        ['Dried pasta for 40 portions', '40 portions × 100 g cooked = 4 000 g cooked pasta; 4 000 g ÷ 2 = 2 000 g (2 kg) dried pasta'],
                                        ['Fresh pasta for 40 portions', '40 portions × 100 g cooked = 4 000 g cooked pasta; 4 000 g ÷ 1.25 = 3 200 g (3.2 kg) fresh pasta'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Pasta machines have rollers and blades that can crush or cut fingers. Keep hands clear, never feed dough by hand into moving rollers, and use lock-out procedures before cleaning or clearing a jam. Wipe up flour and spills so floors do not become slippery, and avoid creating airborne flour dust.',
                                },
                            ],
                        },
                        {
                            id: 'ch19-s3',
                            title: '19.3 Cooking Pastas and Noodles (G-19.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Most pasta is boiled, and then it may be baked or fried. The standard lists boiling, baking and frying as the cooking methods. The cook uses tools such as colanders, pots, hotel pans, frying pans, woks, pasta cooking machines, deep fryers, skimmers and tongs.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'How It Is Done', 'Key Points'],
                                    rows: [
                                        ['Boiling', 'Cook in a large pot of rapidly boiling, salted water, stirring at the start', 'Use about 1 L of water per 100 g of dried pasta; salt the water (about 10 g per litre); do not add oil; drain at the correct time and use or cool right away'],
                                        ['Baking', 'Combine cooked or partly cooked pasta with sauce and cheese and bake', 'Undercook pasta slightly, because it keeps cooking in the oven; ensure enough sauce so it does not dry out; lasagna and baked ziti are examples'],
                                        ['Frying', 'Cook pasta or noodles in oil in a pan, wok or deep fryer', 'Stir-fried noodles use cooked noodles in a hot wok; deep-fried noodles become crisp for garnishing'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Doneness Method', 'How It Works', 'Notes'],
                                    rows: [
                                        ['Sensory assessment', 'Bite a piece; al dente has a slight firmness at the centre with no raw, chalky core', 'The most common test; also judge appearance'],
                                        ['Thermometer', 'Used where a food safety temperature is required, such as baked pasta dishes', 'Baked dishes containing meat, egg or dairy reach 74 °C in the centre'],
                                        ['Time', 'Use the package or recipe time as a guide', 'Start testing a minute or two before the stated time, because water temperature, quantity and pasta thickness vary'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Product', 'Approximate Cooking Time', 'Notes'],
                                    rows: [
                                        ['Fresh pasta', '1 to 4 minutes', 'Cooks quickly and is ready when it floats and is tender'],
                                        ['Dried spaghetti or penne', '8 to 12 minutes', 'Check the package; thicker shapes take longer'],
                                        ['Rice vermicelli', 'Soak or 2 to 4 minutes', 'Follow the package; very thin'],
                                        ['Udon (fresh or frozen)', '2 to 4 minutes', 'Reheats quickly in boiling water'],
                                        ['Couscous', 'Steam or rehydrate in hot liquid for about 5 minutes', 'Fluff with a fork'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Use cooking temperature and time with the liquid to pasta ratio. A large volume of water keeps the temperature up and prevents pasta from sticking together.',
                                        'Stir pasta in the first minute, when it is most likely to stick.',
                                        'For cold dishes and pasta that will be held, cool it quickly in cold water or an ice bath, drain well and toss lightly with oil so strands do not clump.',
                                        'For cooked pasta that will be held hot, undercook slightly and use a hot water bath to reheat. Pasta that sits in water or sauce keeps softening.',
                                        'Determine yield by weight: cooked pasta weighs about double the dried weight.',
                                        'Cool cooked pasta to 4 °C or below within the two-stage cooling limits, then store it covered, labelled and dated, and reheat to 74 °C when required.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Prevention'],
                                    rows: [
                                        ['Sticky or clumped pasta', 'Too little water, not stirred, or left sitting after draining', 'Use a large pot, stir early, and toss with sauce or oil if holding'],
                                        ['Mushy pasta', 'Overcooked, held too long in water or sauce', 'Cook to al dente, test early, shock cold if holding'],
                                        ['Hard core in the centre', 'Undercooked', 'Cook longer and test by tasting'],
                                        ['Bland pasta', 'Unsalted water', 'Salt the cooking water generously'],
                                        ['Dry baked pasta', 'Not enough sauce or overbaked', 'Use enough sauce and cover with foil during baking'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'A pot of boiling water is heavy and scalds severely. Lower pasta in slowly so it does not splash, use a pasta basket or strain away from your body, and never carry a full pot across a busy kitchen. Cooked pasta, rice and other starches held at room temperature can grow bacteria, so cool them quickly and keep them refrigerated.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Large pot, plenty of salted boiling water, no oil in the water and a test for al dente. Pasta for baking is undercooked, and pasta for cold use is shocked in cold water.',
                                },
                            ],
                        },
                        {
                            id: 'ch19-s4',
                            title: '19.4 Finishing Pastas and Noodles (G-19.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Finishing joins the cooked pasta with the sauce, the seasoning and the garnish. The cook may need to reheat cooked pasta or noodles before service, choose the correct sauces, dressings or liquids and apply them to the recipe.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Reheating Method', 'How It Is Done', 'Best For'],
                                    rows: [
                                        ['Sautéing', 'Toss cooked pasta in a hot pan with sauce or fat', 'Pasta tossed to order, such as aglio e olio'],
                                        ['Baking', 'Heat pasta with sauce in the oven', 'Lasagna, baked pasta dishes'],
                                        ['Frying', 'Pan-fry or stir-fry pre-cooked noodles', 'Lo mein, chow mein, fried noodles'],
                                        ['Steaming', 'Heat in a steamer without adding water', 'Noodles and filled pastas that must stay moist'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Liquid or Sauce', 'Examples', 'Notes'],
                                    rows: [
                                        ['Seasoned water', 'Salted pasta water, water with aromatics', 'Reserve a little starchy pasta water to loosen and bind a sauce'],
                                        ['Stock', 'Chicken, vegetable or other stock', 'Used for soups and for loosening sauces'],
                                        ['Oil', 'Olive oil, sesame oil, flavoured oils', 'Used for dressing cold noodle dishes and for simple sauces'],
                                        ['Broth', 'Clear broth for noodle soups', 'Udon, ramen and pho style dishes'],
                                        ['Sauces and dressings', 'Tomato, cream, meat, pesto, butter, soy-based, sesame', 'Match the sauce to the pasta shape: clinging sauces for long strands, chunky sauces for tubes and shells'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify and choose the sauce, dressing or liquid to suit the pasta or noodle and apply it and other components according to the recipe.',
                                        'Adjust seasoning based on the recipe and sensory assessment, tasting the dish before it leaves the kitchen.',
                                        'Garnish according to the recipe: grated cheese, fresh herbs, toasted nuts, chili, green onion or a drizzle of oil.',
                                        'Handle, serve and store finished dishes according to regulations: serve hot dishes at 60 °C or above and cold dishes at 4 °C or below, and discard dishes held past the allowed time.',
                                        'Dietary requirements and allergens: check the sauce and garnish for dairy, egg, nuts, soy, fish and gluten.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Reheating methods for pasta and noodles in the standard are sautéing, baking, frying and steaming, and the finishing liquids include seasoned water, stock, oil and broth. Toss pasta with the sauce in the pan, not on top of it, so the sauce coats evenly.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 20 — STUFFED PASTAS AND DUMPLINGS (G-20)
                // ============================================================
                {
                    id: 'ch-20',
                    number: 20,
                    title: 'Stuffed Pastas and Dumplings',
                    subtitle: 'Task G-20 · Prepares stuffed pastas and dumplings (5 exam questions)',
                    isFree: false,
                    estimatedMinutes: 80,
                    sections: [
                        {
                            id: 'ch20-s1',
                            title: '20.1 Selecting Stuffed Pasta and Dumpling Ingredients (G-20.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Dumplings are dough-based foods, mainly cooked with moist heat, and may be filled. Stuffed pastas have fillings such as meat, cheese, seafood or vegetables that are fully or partly encased in wheat, rice or other flour doughs. They can be baked, steamed, simmered or fried.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Stuffed Pasta', 'Description'],
                                    rows: [
                                        ['Cannelloni', 'Large tubes of pasta, filled and baked in sauce'],
                                        ['Manicotti', 'Large pasta tubes, usually filled with ricotta and baked'],
                                        ['Tortellini', 'Small ring-shaped filled pasta, folded around the finger'],
                                        ['Ravioli', 'Square or round pockets of pasta sealed around a filling'],
                                        ['Agnolotti', 'Small pillow shaped filled pasta from Piedmont, often with meat or cheese'],
                                        ['Tortelloni', 'Larger version of tortellini, usually with a cheese or vegetable filling'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Dumpling', 'Description', 'Cooking Method'],
                                    rows: [
                                        ['Wontons', 'Chinese thin wheat wrapper filled with pork, shrimp or vegetables', 'Boiled in soup, steamed or deep-fried'],
                                        ['Pierogi', 'Eastern European dough pockets filled with potato, cheese, cabbage or meat', 'Boiled, then pan-fried or baked'],
                                        ['Matzo balls', 'Dumplings made from matzo meal, egg and fat', 'Simmered in broth'],
                                        ['Gyoza', 'Japanese pan-fried dumplings with a thin wrapper, filled with pork and cabbage', 'Pan-fried and steamed'],
                                        ['Shumai', 'Open-topped steamed dumplings, usually with pork or shrimp', 'Steamed'],
                                        ['Gnocchi', 'Soft dough dumplings made from potato, flour and egg, or from semolina or ricotta', 'Simmered in water until they float'],
                                        ['Market forms', 'Prepared and packaged items, fresh or frozen', 'Cook according to the package or manufacturer specifications'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Dough or Wrapper', 'Characteristics', 'Used For'],
                                    rows: [
                                        ['Wonton wrapper', 'Thin wheat and egg wrapper', 'Wontons, some stuffed items'],
                                        ['Leavened dough', 'Dough with yeast or other leavening that rises', 'Steamed buns and baked filled breads'],
                                        ['Flour dough', 'Basic flour and water dough', 'Gyoza, pierogi and similar dumplings'],
                                        ['Wheat dough', 'Wheat flour dough with or without egg', 'Fresh stuffed pastas'],
                                        ['Rice-based dough', 'Rice flour dough; translucent and chewy when cooked, gluten-free', 'Translucent dumplings and rice paper wrappers'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Check filling quality by sensory assessment and best-before dates. Fillings containing meat, seafood, eggs or dairy are potentially hazardous foods and must be kept cold.',
                                        'Identify and choose filling ingredients to match the recipe: cheese, meat, seafood or vegetables, and seasonings.',
                                        'Determine the dough type and shape from the recipe and the desired result. Wrapper thickness, filling moisture and cooking method must suit each other.',
                                        'Know the terminology and applications for each type of stuffed pasta and dumpling.',
                                        'Dietary requirements to consider: wheat, egg, milk, soy, shellfish and fish allergens, gluten-free doughs, vegetarian and vegan fillings, and religious and cultural restrictions such as pork-free fillings.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Learn the list: stuffed pastas are cannelloni, manicotti, tortellini, ravioli, agnolotti and tortelloni; dumplings include wontons, pierogi, matzo balls, gyoza, shumai and gnocchi. A question may describe a dish and ask which one it is.',
                                },
                            ],
                        },
                        {
                            id: 'ch20-s2',
                            title: '20.2 Processing Stuffed Pastas and Dumplings (G-20.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Processing means mixing the dough and filling, then shaping and assembling each item. Select tools and equipment according to the recipe and the desired result.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Bowls', 'Combining filling ingredients and mixing dough'],
                                        ['Cutters', 'Cutting dough rounds and squares'],
                                        ['Forms and press', 'Shaping and sealing a uniform product'],
                                        ['Electric roller', 'Rolling dough into thin even sheets'],
                                        ['Stand mixer', 'Mixing and kneading dough and mixing fillings'],
                                        ['Disher scoop', 'Portioning filling evenly'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Assembly Technique', 'Description', 'Example'],
                                    rows: [
                                        ['Rolling', 'Rolling dough to the correct thickness', 'Ravioli sheets, wonton wrappers'],
                                        ['Folding', 'Folding dough over filling', 'Gyoza, tortellini'],
                                        ['Stretching', 'Gently stretching dough to cover the filling', 'Filled doughs'],
                                        ['Stuffing', 'Placing filling into dough or a tube', 'Cannelloni, manicotti'],
                                        ['Cutting', 'Cutting dough or sealed items into portions', 'Ravioli squares'],
                                        ['Crimping', 'Pinching or pressing the edges to seal and decorate', 'Pierogi, gyoza'],
                                        ['Pressing', 'Pressing edges together or using a press', 'Ravioli press, pierogi'],
                                        ['Pinching', 'Pinching dough into pleats or closing a seam', 'Dumplings and shumai'],
                                        ['Piping', 'Using a piping bag to fill tubes or pockets cleanly', 'Cannelloni, manicotti'],
                                        ['Hand forming', 'Shaping by hand into balls, ovals or dumplings', 'Matzo balls, gnocchi'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Combine filling ingredients as the recipe states. Keep fillings cold, and cook and cool any cooked filling ingredients before filling the dough.',
                                        'Fillings that are too wet make the dough soggy and burst while cooking, so drain vegetables and cool cooked fillings. Fillings that are too dry become crumbly, so use a binder such as egg, cheese or a thick sauce.',
                                        'Seal each piece well, removing trapped air, and use water or egg wash on the edges when needed to keep the filling inside during cooking.',
                                        'Portion the filling with a disher scoop to give even size and consistent cooking.',
                                        'Store and hold prepared items according to the recipe and jurisdictional regulations: keep them refrigerated at 4 °C or below on a lightly floured tray in a single layer, or freeze them in a single layer first, then bag and label.',
                                        'Jurisdictional regulations that apply: WHMIS for cleaning chemicals, HACCP for hazard control, OH&S for safe work practices and public health regulations for food safety.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Prevention'],
                                    rows: [
                                        ['Items burst while cooking', 'Overfilled, poorly sealed or trapped air', 'Use less filling, press out air and seal well'],
                                        ['Dough tears when rolled', 'Dough too dry or overworked, or too thin', 'Rest the dough and keep it covered'],
                                        ['Items stick to each other', 'Not dusted and stacked together', 'Place in a single layer on a floured or parchment-lined tray'],
                                        ['Soggy dough', 'Filling too wet', 'Drain and cool the filling'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Fillings made with raw meat, poultry, seafood or eggs must be kept below 4 °C and handled with separate boards and utensils. Never taste a raw filling, and wash and sanitize hands and equipment between handling raw and cooked items. Label dumplings and stuffed pastas that contain allergens such as wheat, egg, milk, soy, fish and shellfish.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Assembly techniques named in the standard are rolling, folding, stretching, stuffing, cutting, crimping, pressing, pinching, piping and hand forming. Keep fillings cold and seals tight.',
                                },
                            ],
                        },
                        {
                            id: 'ch20-s3',
                            title: '20.3 Cooking Stuffed Pastas and Dumplings (G-20.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cooking methods depend on the item. Stuffed pastas are boiled, baked or fried. Dumplings are boiled, simmered, poached, steamed, pan-fried or deep-fried. The cook uses colanders, pots, frying pans, deep fryers, skimmers, tongs, bamboo baskets and woks.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'How It Is Done', 'Examples'],
                                    rows: [
                                        ['Boiling', 'Cook in a large pot of boiling, salted water', 'Ravioli, tortellini, pierogi; boil gently so they do not burst'],
                                        ['Simmering', 'Cook in liquid just below boiling', 'Gnocchi, matzo balls in broth, some dumplings'],
                                        ['Poaching', 'Cook gently in barely moving liquid', 'Delicate dumplings and quenelle style items'],
                                        ['Steaming', 'Cook over steam in a bamboo basket or steamer', 'Shumai, steamed buns, wontons'],
                                        ['Pan-frying', 'Brown in a pan with oil, then add liquid and cover to steam through', 'Gyoza, potstickers, pierogi'],
                                        ['Deep frying', 'Fry in hot oil until golden and crisp', 'Fried wontons, some pierogi and empanada style items'],
                                        ['Baking', 'Bake in a sauce or on a tray', 'Cannelloni, manicotti, stuffed shells'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Doneness Method', 'Signs of Doneness'],
                                    rows: [
                                        ['Sensory inspection', 'Boiled stuffed pasta and gnocchi float, the dough is tender and the edges are cooked; fried items are golden brown and crisp; steamed items are translucent and firm'],
                                        ['Thermometer', 'Items with meat, poultry or seafood fillings reach a safe internal temperature (74 °C for poultry fillings and mixed fillings); check the centre of the filling'],
                                        ['Time', 'Follow the recipe or manufacturer time, with the amount and size of the item taken into account'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Cook in a large volume of gently boiling water so items do not collide and tear, and cook in small batches so the water stays hot.',
                                        'Use a skimmer or spider to lift items out gently. Do not pour from the pot into a colander when the dough is fragile.',
                                        'For pan-fried dumplings, brown the base in oil, add a little water, cover immediately and steam until the water is gone and the base is crisp again.',
                                        'Deep fry at the temperature in the recipe, commonly about 175 to 190 °C, and drain on absorbent paper. Oil that is too cool makes greasy items and oil that is too hot burns the outside before the filling is hot.',
                                        'Cooking temperatures and times depend on the size of the item, the filling and the method. Frozen products may be cooked from frozen according to the manufacturer.',
                                        'Store and hold cooked items according to the recipe and regulations: keep hot items at 60 °C or above, cool leftovers quickly, refrigerate at 4 °C or below and reheat to 74 °C.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Wet or frozen items lowered into hot oil can cause violent spattering and boil-overs. Pat items dry, lower them in with a skimmer away from your body, never overfill the fryer and keep water away from hot oil. Steam from baskets and woks is very hot, so lift lids away from your face.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Know which methods go with which items. Stuffed pasta is boiled, baked or fried. Dumplings use boiling, simmering, poaching, steaming, pan-frying and deep frying. Gnocchi and boiled dumplings are done when they float, and fillings with meat or seafood must reach a safe internal temperature.',
                                },
                            ],
                        },
                        {
                            id: 'ch20-s4',
                            title: '20.4 Finishing Stuffed Pastas and Dumplings (G-20.04)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Finishing prepares the cooked items for service. Items made ahead are reheated, then served with sauces, dressings, components and accompaniments that suit the recipe, seasoned and garnished.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Reheating Method', 'How It Is Done', 'Best For'],
                                    rows: [
                                        ['Boiling', 'Dip in boiling water briefly', 'Ravioli, tortellini'],
                                        ['Simmering', 'Warm gently in broth or sauce', 'Matzo balls, gnocchi, dumplings in soup'],
                                        ['Poaching', 'Warm gently in hot liquid', 'Delicate dumplings'],
                                        ['Steaming', 'Heat in a steamer', 'Shumai, steamed dumplings and buns'],
                                        ['Frying', 'Crisp in a pan or fryer', 'Pierogi, gyoza and wontons'],
                                        ['Sautéing', 'Toss in a hot pan with butter, oil or sauce', 'Gnocchi, ravioli, pierogi with onions'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Item', 'Typical Sauce or Accompaniment', 'Garnish'],
                                    rows: [
                                        ['Ravioli and tortellini', 'Brown butter and sage, tomato, cream or broth', 'Grated hard cheese, fresh herbs'],
                                        ['Baked stuffed pasta', 'Tomato or béchamel sauce, melted cheese', 'Parsley, basil'],
                                        ['Gnocchi', 'Sage butter, pesto, tomato sauce', 'Parmesan, toasted nuts'],
                                        ['Pierogi', 'Sour cream, caramelized onions, butter', 'Chives, bacon, dill'],
                                        ['Gyoza and wontons', 'Soy and vinegar dipping sauce, chili oil, broth', 'Green onion, sesame seeds'],
                                        ['Shumai', 'Soy sauce, chili sauce, mustard', 'Green onion'],
                                        ['Matzo balls', 'Clear chicken broth', 'Dill, parsley'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select sauces, dressings, components and accompaniments according to the recipe, and apply them so the dish is balanced in flavour and texture.',
                                        'Adjust seasonings by recipe and sensory assessment before serving.',
                                        'Garnish according to the recipe and keep the plate clean and appealing.',
                                        'Handle, serve and store finished items according to regulations and company policy, and label allergens.',
                                        'Know the terminology, dietary requirements and types for each item so you can answer guest questions.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Reheating methods for stuffed pastas and dumplings in the standard are boiling, simmering, poaching, steaming, frying and sautéing. Match the reheating method to how the item was cooked and the texture needed, crisp or soft.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 8 FRAGMENT (MWA H: Grains, pulses, seeds, nuts and alternative proteins)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 7.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks H-21, H-22 and H-23.
        // ============================================================
        {
            id: 'part-8',
            number: 8,
            title: 'Grains, Pulses, Seeds, Nuts and Alternative Proteins (MWA H)',
            description: 'Grains and pulses from selection and washing to boiling, steaming, pilaf, risotto and braising; seeds and nuts from cleaning, roasting and blanching to finishing; and alternative proteins such as tofu, tempeh, seitan and insects. MWA H carries 11 exam questions across tasks H-21, H-22 and H-23.',
            weight: '11 questions (7.3% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 21 — GRAINS AND PULSES (H-21)
                // ============================================================
                {
                    id: 'ch-21',
                    number: 21,
                    title: 'Grains and Pulses',
                    subtitle: 'Task H-21 · Prepares grains and pulses (4 exam questions)',
                    isFree: false,
                    estimatedMinutes: 80,
                    sections: [
                        {
                            id: 'ch21-s1',
                            title: '21.1 Selecting Grains and Pulses (H-21.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Grains and pulses are staples that serve as sides, bases for main dishes and plant-based proteins. Producing quality dishes depends on knowing the varieties, how each cooks and how much to prepare. Choose the type according to the recipe and the desired result, decide the quantity from the required yield, and judge quality by sensory assessment.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Grain', 'Characteristics', 'Typical Uses'],
                                    rows: [
                                        ['Short-grain rice', 'Short, plump grains with high starch; cooked grains cling and turn creamy', 'Risotto (such as Arborio), sushi, rice pudding, paella'],
                                        ['Long-grain rice', 'Slender grains lower in starch; cooks fluffy and separate', 'Pilaf, steamed rice, rice salads, side dishes'],
                                        ['Wild rice', 'Seed of an aquatic grass, not true rice; dark, chewy and nutty; long cooking time', 'Pilaf blends, stuffings, soups, salads'],
                                        ['Barley', 'Chewy grain; pearl barley has the bran removed and cooks faster', 'Soups, stews, pilafs and salads'],
                                        ['Bulgur', 'Cracked wheat that is parboiled and dried; needs soaking or short cooking', 'Tabbouleh, pilaf, stuffings'],
                                        ['Oats', 'Rolled, steel-cut or quick oats; creamy when cooked', 'Porridge, baking, crusts and binders'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Pulse', 'Characteristics', 'Typical Uses'],
                                    rows: [
                                        ['Lentils', 'Small, quick-cooking; red lentils break down, green and brown hold their shape', 'Dahl, soups, salads, stews'],
                                        ['Beans', 'Kidney, black, navy, pinto, chickpeas and others; firm and need soaking and longer cooking', 'Chili, red beans and rice, salads, spreads such as hummus'],
                                        ['Peas', 'Split peas break down when cooked; whole dried peas hold their shape', 'Split pea soup, purées, curries'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Judge quality by sensory assessment. Dry grains and pulses should be uniform in size and colour, clean and free of moisture, mould, insects, musty smell and broken or shrivelled pieces.',
                                        'Determine quantity from the required yield. Most grains and pulses increase in volume when cooked, so work from the recipe ratio and the number of portions.',
                                        'Choose the type by recipe and result: creamy dishes need short-grain rice, fluffy dishes need long-grain rice and chewy textures need wild rice or barley.',
                                        'Dietary considerations: rice, quinoa, buckwheat, millet and pulses are gluten-free, while barley, bulgur and wheat are not. Oats are often contaminated with gluten unless labelled gluten-free. Pulses are plant proteins and suit vegetarian and vegan diets.',
                                        'Store dry grains and pulses in sealed, labelled containers in a cool, dry, dark place away from pests, and use FIFO. Cooked grains and pulses are potentially hazardous and must be cooled and refrigerated quickly.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Approximate Cooking Ratio (Grain : Water)', 'Time', 'Yield Notes'],
                                    rows: [
                                        ['Long-grain white rice, 1 : 2', '15 to 20 minutes', 'Roughly triples in volume'],
                                        ['Short-grain rice (steamed), 1 : 1.5', '15 to 20 minutes', 'Sticky and tender'],
                                        ['Wild rice, 1 : 3', '45 to 60 minutes', 'Grains split open when done'],
                                        ['Pearl barley, 1 : 3', '30 to 40 minutes', 'Roughly triples in volume'],
                                        ['Bulgur (coarse), 1 : 2', '10 to 15 minutes', 'Fine bulgur only needs soaking'],
                                        ['Lentils, 1 : 3', '15 to 30 minutes', 'Varies by type'],
                                        ['Dried beans (soaked), 1 : 3', '1 to 2 hours', 'Roughly doubles after soaking and cooking'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Short-grain rice is starchy and creamy for risotto and sushi, long-grain is fluffy and separate for pilaf. Wild rice is not a true rice. Barley and bulgur contain gluten, and the standard lists grains as rice (short, long), wild rice, barley, bulgur and oats, with pulses as lentils, beans and peas.',
                                },
                            ],
                        },
                        {
                            id: 'ch21-s2',
                            title: '21.2 Processing Grains and Pulses (H-21.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Raw grains and pulses are agricultural products and may contain foreign material. Inspect them, discard anything unsafe, wash them in cold water, drain the excess and soak them as needed so they cook evenly.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Step', 'What to Do', 'Why'],
                                    rows: [
                                        ['Inspect', 'Spread the product on a tray and look for rocks, metal, twigs, leaves and insects', 'Removes physical contaminants that can injure guests or damage teeth'],
                                        ['Discard', 'Throw out any product with chemical or biological contamination, mould or off-odours', 'Contaminated product cannot be made safe by cooking'],
                                        ['Wash', 'Rinse thoroughly in cold water until the water runs clear', 'Removes dust, debris and surface starch; keeps rice grains separate'],
                                        ['Strain', 'Drain excess water in a colander', 'Controls the cooking liquid ratio'],
                                        ['Soak', 'Cover in cold water for the time needed by the type', 'Rehydrates dry products and evens out cooking, shortens cooking time'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Do not wash rice for risotto, because the surface starch gives the creamy texture.',
                                        'Soak dried beans for several hours or overnight in cold water, then drain and cook in fresh water. A quick soak is to bring beans to a boil, turn off the heat and let them stand for about an hour.',
                                        'Lentils and split peas do not need soaking, but they should be sorted and rinsed.',
                                        'Soak wild rice, barley and whole grains where it shortens the cooking time or evens the result.',
                                        'Discard the soaking water of dried beans and cook in fresh water, which reduces the compounds that cause gas.',
                                        'Keep raw and cooked products separate and use clean, sanitized containers.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Raw kidney beans contain a natural toxin and must be soaked, drained and boiled vigorously for at least 10 minutes before simmering until tender. Slow cookers do not reach a high enough temperature to destroy it. Undercooked kidney beans cause severe stomach illness.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The order is inspect, discard if contaminated, wash, strain, soak. Contaminants named in the standard are rocks, metal, twigs, leaves and insects.',
                                },
                            ],
                        },
                        {
                            id: 'ch21-s3',
                            title: '21.3 Cooking Grains and Pulses (H-21.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cooking methods are chosen by the type of grain or pulse and the dish. The tools include colanders, steamers, pots, tongs, spatulas, Dutch ovens, woks, pressure cookers and spoons. Doneness is determined by sensory assessment, and the dish is finished according to the recipe.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'How It Works', 'Examples'],
                                    rows: [
                                        ['Boiling', 'Cook in a large amount of boiling water, then drain', 'Pasta style cooking for barley, wild rice and pulses'],
                                        ['Steaming', 'Cook in measured water, covered, so the grain absorbs all the liquid', 'Steamed rice, bulgur, congee base'],
                                        ['Baking', 'Cook in the oven with measured liquid, covered', 'Baked rice and beans, casseroles'],
                                        ['Stir-frying', 'Cook cooked grain or soaked product in a hot wok with oil', 'Fried rice'],
                                        ['Puffing', 'Expanding grains with heat or pressure', 'Puffed rice and popped grains used as garnishes'],
                                        ['Pressure cooking', 'Cook in a sealed vessel under pressure for a shorter time', 'Dried beans, chickpeas, barley'],
                                        ['Pilaf method', 'Sauté the grain in fat with aromatics, add hot liquid, cover and cook until the liquid is absorbed', 'Rice pilaf, bulgur pilaf'],
                                        ['Risotto method', 'Sauté rice in fat, then add hot stock gradually, stirring, until creamy and tender', 'Risotto with Arborio rice'],
                                        ['Braising', 'Cook in a covered pot with a small amount of liquid at low heat', 'Beans, lentils and grains with vegetables'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Dish', 'Main Component', 'Method or Key Point'],
                                    rows: [
                                        ['Tabbouleh', 'Bulgur', 'Soaked, not cooked; mixed with parsley, mint, tomato, lemon and oil'],
                                        ['Red beans and rice', 'Kidney beans and rice', 'Beans simmered until creamy with aromatics, served over rice'],
                                        ['Pilaf', 'Rice or bulgur', 'Pilaf method, covered, fluffed with a fork'],
                                        ['Porridge', 'Oats or other grains', 'Simmered in water or milk and stirred until creamy'],
                                        ['Dahl', 'Lentils or split peas', 'Simmered with spices until soft, finished with a tempered spice mixture'],
                                        ['Congee', 'Rice', 'Simmered in a large volume of liquid until it breaks down into a thick porridge'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Doneness (Sensory)', 'Grains', 'Pulses'],
                                    rows: [
                                        ['Texture', 'Tender with a slight bite; rice separate and fluffy for pilaf, creamy for risotto', 'Tender through the centre with no chalky core; hold their shape unless meant to break down'],
                                        ['Appearance', 'Grains have swelled and absorbed the liquid; wild rice splits open', 'Skin is intact or just starting to split'],
                                        ['Taste', 'No raw or starchy flavour', 'Earthy and sweet, with no raw bean taste'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Do not stir steamed rice and pilaf, because stirring releases starch and makes it gummy. Rest the covered pot off the heat for about 10 minutes, then fluff with a fork.',
                                        'Add salt and acid at the right time: acid and salt added early can toughen pulses, so season beans once they begin to soften.',
                                        'For risotto, add the stock hot and in small amounts, and stir until the rice is creamy and slightly firm at the centre (all onda).',
                                        'Cool cooked grains and pulses quickly. Spread them on a shallow tray, refrigerate at 4 °C or below within the two-stage cooling limits, and reheat to 74 °C.',
                                        'Finish according to the recipe with seasoning, herbs, fat, acid, nuts or sauces, and hold hot at 60 °C or above.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Cooked rice and other grains can carry Bacillus cereus spores that survive cooking and produce toxins when the rice sits at room temperature. Cool rice rapidly and refrigerate it, never hold it warm for long, and do not leave a pot of rice on the counter. Pressure cookers must be vented and opened carefully, because steam and hot contents can cause serious burns.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Know the method behind each dish: pilaf is sautéed then covered, risotto is stirred while hot stock is added gradually, tabbouleh uses soaked bulgur, and congee is rice simmered in extra liquid. Rice is a classic hazard for Bacillus cereus.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 22 — SEEDS AND NUTS (H-22)
                // ============================================================
                {
                    id: 'ch-22',
                    number: 22,
                    title: 'Seeds and Nuts',
                    subtitle: 'Task H-22 · Prepares seeds and nuts (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 55,
                    sections: [
                        {
                            id: 'ch22-s1',
                            title: '22.1 Selecting and Processing Seeds and Nuts (H-22.01 and H-22.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Seeds and nuts are served on their own or used in soups, dressings, salads, pastries and as protein alternatives. Select the type according to the recipe, determine the amount needed and judge quality by sensory assessment.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Seed', 'Characteristics', 'Typical Uses'],
                                    rows: [
                                        ['Pumpkin (pepitas)', 'Flat green seeds with a nutty flavour', 'Toasted garnish, salads, granola'],
                                        ['Sunflower', 'Mild, slightly sweet seeds', 'Breads, salads, spreads'],
                                        ['Flax', 'Small, oil-rich seeds; grind for digestibility', 'Baking, egg substitute (ground with water), cereals'],
                                        ['Chia', 'Tiny seeds that form a gel in liquid', 'Puddings, jams, egg substitute'],
                                        ['Quinoa', 'A seed cooked like a grain; gluten-free and high in protein; rinse to remove bitter coating', 'Salads, pilaf, side dishes'],
                                        ['Sesame', 'Small seeds, white or black; toasted for flavour', 'Tahini, garnishes, crusts and baking'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Nut', 'Type', 'Characteristics and Uses'],
                                    rows: [
                                        ['Almonds', 'Tree nut', 'Mild and sweet; sliced, slivered, ground into almond flour and almond paste'],
                                        ['Pine nuts', 'Tree nut (seed of pine cones)', 'Soft, buttery and expensive; pesto and salads; turn rancid quickly'],
                                        ['Walnuts', 'Tree nut', 'Rich and slightly bitter; baking, salads, sauces'],
                                        ['Peanuts', 'Groundnut (a legume)', 'Grow underground; peanut butter, sauces, stir-fries; priority allergen'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Judge quality by sensory assessment. Seeds and nuts should smell fresh and nutty, be uniform in size and colour and be free of insects, mould and shrivelled pieces. A bitter, sour or paint-like smell means they are rancid.',
                                        'Inspect and clean: remove contaminants such as shell, twigs and insects, and discard any contaminated product.',
                                        'Processing methods: soaking, straining, grinding, roasting, blanching, chopping and shelling.',
                                        'Blanch nuts such as almonds by dipping them in boiling water briefly, then cooling them in cold water and slipping off the skins.',
                                        'Soak nuts to soften them for blending into nut milks and creams, then drain and rinse.',
                                        'Grind and chop to the size needed. Seeds and nuts release oil when ground too long, so pulse them and use a little sugar or flour to prevent paste.',
                                        'Store in sealed containers in a cool, dry, dark place, or refrigerate or freeze for long storage, because the oils turn rancid. Label and date.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Peanuts and tree nuts are priority allergens and can cause severe, life-threatening reactions even in trace amounts. Keep nuts and nut-containing foods separate from everything else, use dedicated, cleaned and sanitized equipment, wash hands after handling them and label every dish that contains or may contain nuts or seeds such as sesame.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The standard lists seeds as pumpkin, sunflower, flax, chia, quinoa and sesame and nuts as tree nuts (almonds, pine, walnuts) and groundnuts (peanuts). Rancid oil is the main quality fault, and processing methods include soaking, straining, grinding, roasting, blanching, chopping and shelling.',
                                },
                            ],
                        },
                        {
                            id: 'ch22-s2',
                            title: '22.2 Cooking and Finishing Seeds and Nuts (H-22.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Cooking brings out the flavour and crunch of seeds and nuts or makes them tender for use in other dishes. The tools include colanders, steamers, hotel pans, frying pans, sheet pans, pots, tongs, spatulas and pressure cookers.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'How It Is Done', 'Notes'],
                                    rows: [
                                        ['Roasting', 'Heat in a dry pan or in a medium oven until fragrant and lightly coloured', 'Stir often; watch carefully, because nuts and seeds burn quickly and continue to cook from residual heat'],
                                        ['Baking', 'Toast or bake on a sheet pan in the oven, alone or in a recipe', 'Spread in a single layer for even colour'],
                                        ['Boiling and simmering', 'Cook in water until tender', 'Used for quinoa, chestnuts and some soaked nuts'],
                                        ['Steaming', 'Cook over steam', 'Used for tender products such as quinoa'],
                                        ['Frying', 'Cook in oil', 'Fried nuts and seeds, crisp garnishes'],
                                        ['Pilaf method', 'Sauté in fat, add liquid and cook covered', 'Used for quinoa and other seeds'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Method', 'Description', 'Example'],
                                    rows: [
                                        ['Puréeing', 'Blending to a smooth paste or butter', 'Nut butters, tahini, hummus-style spreads'],
                                        ['Seasoning', 'Adding salt, spices, herbs or sugar', 'Spiced nuts, seasoned seeds'],
                                        ['Curing', 'Treating with salt or brine, then drying', 'Salted and cured nuts and seeds'],
                                        ['Candying', 'Coating with caramelized sugar', 'Candied pecans and walnuts, brittle'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Determine doneness by sensory assessment: a toasted nut smells nutty and has an even golden colour; a cooked seed is tender and the quinoa shows a white spiral tail.',
                                        'Toast nuts at a moderate temperature (about 160 to 175 °C) and remove them from the hot pan right away so they do not over-brown.',
                                        'Cool toasted nuts completely before storing in sealed containers, so condensation does not make them soft.',
                                        'Finish according to the recipe and label allergens, keeping garnish and serving utensils separate for nut-free orders.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Hot sugar for candying and hot oil for frying cause serious burns. Hot pans of roasting nuts are easy to forget, and scorched nuts can smoke and ignite in the oven. Use mitts, set a timer and never leave nuts roasting unattended.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Finishing methods in the standard are puréeing, seasoning, curing and candying. Roast nuts until fragrant and golden, and cool them completely before storage.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 23 — ALTERNATIVE PROTEINS (H-23)
                // ============================================================
                {
                    id: 'ch-23',
                    number: 23,
                    title: 'Alternative Proteins',
                    subtitle: 'Task H-23 · Prepares alternative proteins (4 exam questions)',
                    isFree: false,
                    estimatedMinutes: 55,
                    sections: [
                        {
                            id: 'ch23-s1',
                            title: '23.1 Selecting and Processing Alternative Proteins (H-23.01 and H-23.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Alternative proteins are served alone, as main dishes, or as the protein in soups, pastas, salads and appetizers. They include plant-based proteins and insects, and they serve vegetarian, vegan, religious, health-related and environmental needs. Choose the type according to the recipe, the desired result and the dietary requirement, and choose the amount per the recipe.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Alternative Protein', 'Description', 'Characteristics and Uses'],
                                    rows: [
                                        ['Tofu (soft)', 'Soybean curd with high water content', 'Delicate; soups, sauces, desserts and scrambles; do not press hard'],
                                        ['Tofu (firm and extra firm)', 'Pressed soybean curd', 'Holds shape; stir-fries, grilling, frying, baking'],
                                        ['Tempeh', 'Fermented whole soybeans pressed into a cake', 'Nutty, firm and chewy; steam or simmer first to reduce bitterness, then marinate and fry or grill'],
                                        ['Bean curd', 'Coagulated soy milk, sold fresh, dried or fried', 'Used across Asian dishes; includes pressed and fried forms'],
                                        ['Seitan (wheat gluten)', 'Concentrated wheat gluten with a meat-like texture', 'Absorbs marinades and seasonings; contains wheat and gluten, so it is unsuitable for gluten-free guests'],
                                        ['Market forms (prepared and packaged)', 'Commercial meat substitutes, burgers, sausages and crumbles', 'Cook per the manufacturer; check allergens and ingredients'],
                                        ['Insects', 'Edible insects such as crickets, sold dried, ground or whole', 'High in protein; used in flour, crisp snacks and savoury dishes; allergen risk for people with shellfish allergy'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Process', 'Description', 'Key Points'],
                                    rows: [
                                        ['Thawing', 'Defrosting frozen products', 'Thaw in the refrigerator at 4 °C or below, according to the manufacturer'],
                                        ['Steeping', 'Soaking in hot liquid to rehydrate or soften', 'Used for dried bean curd and some dried products'],
                                        ['Cutting', 'Cutting into cubes, slabs, strips or crumbles', 'Cut to the recipe so pieces cook evenly'],
                                        ['Marinating', 'Soaking in a seasoned liquid', 'Adds flavour; porous items such as tofu, tempeh and seitan absorb marinades well'],
                                        ['Breading', 'Coating in flour, egg or a substitute and crumbs', 'Used for frying and baking'],
                                        ['Battering', 'Coating in a wet batter', 'Used for deep frying'],
                                        ['Mixing', 'Combining ingredients, such as crumbled tofu with seasonings', 'Used for scrambles, burgers and fillings'],
                                        ['Curdling', 'Coagulating plant milk into curds', 'The step that makes tofu from soy milk'],
                                        ['Pressing', 'Removing water with weight', 'Gives firm tofu a denser texture that fries and browns better'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Prepare according to the manufacturer and recipe specifications.',
                                        'Inspect freshness and quality by sensory assessment: tofu and tempeh should smell fresh and mild, with no sour smell, sliminess or mould (except the white mycelium of tempeh, which is normal) and be within the best-before date.',
                                        'Store tofu covered in fresh water in the refrigerator and change the water daily; keep opened packages sealed, and refrigerate or freeze according to the label.',
                                        'Flavour alternative proteins by seasoning, glazing or marinating, because most are mild on their own.',
                                        'Dietary requirements to consider: soy allergy (tofu, tempeh, bean curd), wheat and gluten (seitan), shellfish allergy (insects) and cultural, religious and ethical preferences.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Soy and wheat are priority allergens, and insect-based products can trigger reactions in guests allergic to shellfish or dust mites. Cross-contact can happen through shared fryer oil, boards and utensils, so use dedicated equipment and label dishes clearly. Handle tofu and similar products as potentially hazardous foods and keep them at 4 °C or below.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Seitan is wheat gluten, tofu and tempeh are soy and insects may be a shellfish cross-reactivity concern. Pressing firms tofu, marinating adds flavour and the standard lists the processes: thaw, steep, cut, marinate, bread, batter, mix, curdle and press.',
                                },
                            ],
                        },
                        {
                            id: 'ch23-s2',
                            title: '23.2 Cooking and Finishing Alternative Proteins (H-23.03)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Alternative proteins are cooked by many methods, and doneness is determined by sensory assessment and by temperature according to jurisdictional regulations. The tools include pots, tongs, spatulas, grill pans, frying pans and woks.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Best For', 'Key Points'],
                                    rows: [
                                        ['Boiling', 'Tempeh pre-simmer, dried bean curd, some market forms', 'Simmer gently so delicate items do not break'],
                                        ['Steaming', 'Tofu, tempeh, dumplings and buns', 'Gentle and keeps moisture'],
                                        ['Grilling', 'Firm tofu, tempeh, seitan', 'Oil the grill and the item, and marinate first so it does not stick or dry out'],
                                        ['Deep frying', 'Breaded or battered tofu, tempeh, seitan', 'Pat dry, fry at the recipe temperature and drain well'],
                                        ['Shallow frying', 'Tofu cubes, tempeh slices, crumbles', 'Use a hot, oiled pan and do not crowd it'],
                                        ['Roasting', 'Tofu and tempeh pieces', 'High heat gives a crisp exterior'],
                                        ['Baking', 'Marinated tofu, seitan loaves, market forms', 'Even heat and a glaze give flavour and colour'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Determine doneness by sensory assessment: a golden crust, firm texture and heated through. Check the internal temperature according to jurisdictional regulations and the manufacturer for products that must reach a safe temperature, such as 74 °C for dishes mixed with poultry or egg and for reheated items.',
                                        'Finish according to the specifications with sauces, glazes, garnishes and seasonings that suit the dish.',
                                        'Hold hot items at 60 °C or above and cold at 4 °C or below, and cool and reheat leftovers safely.',
                                        'Applicable regulations: WHMIS, HACCP, OH&S and public health regulations.',
                                        'Keep plant-based items separate from meat on the grill, in the fryer and on boards if the guest is vegetarian or vegan, so cross-contact does not occur.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Wet tofu and marinated items spatter violently in hot oil. Pat them dry, lower them in slowly and keep water away from the fryer. Never share fryer oil or grill surfaces between plant-based dishes for vegetarian or vegan guests and meat, fish or egg dishes without telling the guest.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Cooking methods in the standard for alternative proteins are boiling, steaming, grilling, deep frying, shallow frying, roasting and baking. Doneness is judged by sensory assessment and temperature, and cross-contact is the main concern for vegetarian, vegan and allergy guests.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        // ============================================================
        // STEP 2C — PART 9 FRAGMENT (MWA I: Meats, game meats, poultry, game birds and variety meats)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 8.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks I-24, I-25 and I-26.
        // ============================================================
        {
            id: 'part-9',
            number: 9,
            title: 'Meats, Game Meats, Poultry, Game Birds and Variety Meats (MWA I)',
            description: 'The largest block of the exam: selecting meats and game by grade and cut, fabricating, aging, tempering, cooking by dry, moist and combination methods, resting, carving and finishing; poultry and game birds from market forms and trussing to stuffing, roasting and holding; and variety meats such as liver, kidney, sweetbreads and tripe. MWA I carries 16 exam questions across tasks I-24, I-25 and I-26.',
            weight: '16 questions (10.7% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 24 — SELECTING MEATS AND GAME MEATS (I-24.01)
                // ============================================================
                {
                    id: 'ch-24',
                    number: 24,
                    title: 'Selecting Meats and Game Meats',
                    subtitle: 'Task I-24.01 · Grades, classifications, cuts, labels and freshness (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 70,
                    sections: [
                        {
                            id: 'ch24-s1',
                            title: '24.1 Meat Types, Game and Regulations',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Meat is the most costly item on many menus, and a cook who selects well wastes less, cooks better and keeps guests safe. Selection means identifying and choosing the meat according to regulations, classifications, the desired result and the recipe, reading the label or stamp and judging freshness and quality by sensory assessment.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Category', 'Examples in the Standard', 'Notes'],
                                    rows: [
                                        ['Meats', 'Pork, veal, beef, lamb, goat', 'Veal is young beef; lamb is young sheep; goat has lean, strongly flavoured meat'],
                                        ['Game', 'Bison, elk, caribou, moose, deer, kangaroo, musk ox, wild boar, rabbit', 'Generally lean with a stronger flavour; needs careful cooking to avoid drying; farm-raised game is common in food service'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Regulation or Body', 'Role'],
                                    rows: [
                                        ['CFIA (Canadian Food Inspection Agency)', 'Sets and enforces inspection, grading, classification and branding rules for meat sold in Canada'],
                                        ['HACCP', 'Hazard control system used to prevent, control or eliminate food safety hazards'],
                                        ['WHMIS', 'Workplace hazardous materials information for cleaners and chemicals'],
                                        ['OH&S', 'Occupational health and safety rules for safe work practices'],
                                        ['Public health regulations', 'Local rules for handling, storing, cooking and serving food'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Classification', 'What It Describes'],
                                    rows: [
                                        ['Origin', 'Where the animal was raised and processed, such as local, domestic or imported'],
                                        ['Size', 'Weight or size of the animal or cut, which affects yield and cooking time'],
                                        ['Aged (dry or wet)', 'Meat that has been held under controlled conditions to improve tenderness and flavour'],
                                        ['Grade', 'Quality rating based on factors such as marbling, maturity, colour and fat cover'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Canadian Beef Grade', 'Marbling', 'Notes'],
                                    rows: [
                                        ['Canada Prime', 'Slightly abundant or more', 'Highest quality; limited supply, mainly high-end restaurants'],
                                        ['Canada AAA', 'Small', 'Common high-quality food service grade'],
                                        ['Canada AA', 'Slight', 'Good quality'],
                                        ['Canada A', 'Trace', 'Leaner with less marbling'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Interpret label and stamp information: look for the inspection legend, grade, packing or best-before date, weight, cut name, country of origin and handling instructions.',
                                        'Know the dietary requirements for meat: cultural, allergies, ethical, religious (halal and kosher slaughter, pork avoidance), health-related, environmental and personal preferences.',
                                        'Selection factors: local and seasonal availability, freshness, storage life, applications, how processed the product is and sustainability.',
                                        'Know the hazards of raw meat: bacteria such as Salmonella, E. coli and Listeria, and parasites such as Trichinella in some game. Practise safe handling at every step.',
                                        'Follow ordering specifications, which state the cut, grade, weight range, trim level, packaging and delivery condition.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Raw meat and meat juices carry pathogens. Store raw meat below ready-to-eat foods, in covered, labelled containers at 4 °C or below, and never let raw juices touch other foods, boards or utensils. Wild game must come from an approved, inspected source and not be hunted or butchered by the guest or an unapproved supplier.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Classifications in the standard are origin, size, aged (dry or wet) and grade. Meat inspection is mandatory, while grading is a quality rating. Marbling is the main factor in Canadian beef grades.',
                                },
                            ],
                        },
                        {
                            id: 'ch24-s2',
                            title: '24.2 Cuts, Freshness and Quality',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Meat is purchased as whole carcasses or sides, primal cuts, sub-primal cuts or pre-portioned cuts. The cut choice affects cost, labour, waste and the cooking method. Muscles that work hard (shoulder, leg, shank, chest) are tougher with more connective tissue and need moist or slow cooking. Muscles that work little (loin, rib) are tender and suit dry, fast cooking.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Cut Form', 'Description', 'Advantage'],
                                    rows: [
                                        ['Whole (carcass or side)', 'The entire animal or half', 'Lowest cost per kilogram but needs skilled butchery and storage space'],
                                        ['Primal', 'A major section, such as the beef rib, loin, chuck, round, brisket or plate', 'Cut down in-house to control yield and trim'],
                                        ['Sub-primal', 'A smaller section cut from a primal, such as a striploin or top sirloin', 'Easier to handle; less labour'],
                                        ['Pre-portioned', 'Portion cuts such as steaks and chops ready to cook', 'Consistent size and cost with the least labour, but higher price'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Animal', 'Tender Cuts (Dry Heat)', 'Tough Cuts (Moist or Combination Heat)'],
                                    rows: [
                                        ['Beef', 'Rib, short loin (striploin, tenderloin), top sirloin', 'Chuck, brisket, shank, plate, round (some roast well)'],
                                        ['Pork', 'Loin, tenderloin, rib chops', 'Shoulder (butt), picnic shoulder, hock, belly'],
                                        ['Veal', 'Loin, rib, cutlets from the leg', 'Shoulder, shank (osso buco), breast'],
                                        ['Lamb', 'Rack, loin, leg', 'Shoulder, shank, breast, neck'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Quality Check', 'Fresh and Acceptable', 'Unacceptable'],
                                    rows: [
                                        ['Colour', 'Beef bright cherry red, pork pale pink, lamb light to dark red, veal pale pink', 'Grey, green, brown or iridescent'],
                                        ['Smell', 'Clean and mild', 'Sour, ammonia or sulphur odour'],
                                        ['Texture', 'Firm, moist and elastic', 'Slimy, sticky or soft'],
                                        ['Packaging', 'Cold, intact and with no leaking or bloating', 'Torn, leaking, swollen or warm'],
                                        ['Temperature on delivery', 'Fresh at 4 °C or below; frozen at -18 °C or below and hard', 'Above 4 °C fresh or any sign of thawing and refreezing, such as ice crystals and liquid in the package'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Fat should be firm and white to cream coloured, and marbling should be evenly distributed.',
                                        'Vacuum-packed beef can have a brief sulphur smell that disappears when opened; this is not spoilage.',
                                        'Reject any product that is outside the temperature range at delivery, and record the rejection.',
                                        'Dry-aged meat loses weight to evaporation and trim, so it costs more and yields less; wet-aged meat is aged in vacuum packaging and keeps its weight.',
                                        'Plan uses for the whole cut: steaks from the tender portions, stews and ground meat from the trim, and stocks and broths from the bones.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Tough cuts come from hard-working muscles and need moist or combination cooking; tender cuts come from the loin and rib and suit dry heat. The four cut forms are whole, primal, sub-primal and pre-portioned. Fresh meat is received at 4 °C or below and frozen meat at -18 °C or below.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 25 — PROCESSING MEATS AND GAME MEATS (I-24.02)
                // ============================================================
                {
                    id: 'ch-25',
                    number: 25,
                    title: 'Processing Meats and Game Meats',
                    subtitle: 'Task I-24.02 · Fabrication, aging, tempering, curing and waste control (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 70,
                    sections: [
                        {
                            id: 'ch25-s1',
                            title: '25.1 Tools, Methods and Fabrication',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Processing turns delivered meat into portions ready to cook. The cook selects tools, tempers frozen product safely, fabricates the cuts, controls waste, uses the trim and keeps food safe throughout.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool', 'Use'],
                                    rows: [
                                        ['Band saw', 'Cuts through bone for chops, steaks and large pieces; follow lock-out procedures and wear cut-resistant gloves'],
                                        ['Bone scraper', 'Removes bone dust and debris after sawing'],
                                        ['Grinder', 'Grinds trim for ground meat, sausage and forcemeat'],
                                        ['Cleaver', 'Chops through small bones and joints'],
                                        ['Knives (boning, breaking, slicing)', 'Trimming, de-boning, portioning and carving'],
                                        ['Cutting boards', 'Colour-coded boards separate raw meat from other foods'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Description', 'Purpose'],
                                    rows: [
                                        ['Cleaning and trimming', 'Removing excess fat, silverskin, gristle and bone dust', 'Better texture, appearance and even cooking'],
                                        ['De-boning', 'Removing bones from a cut', 'Easier carving, stuffing and portioning'],
                                        ['Larding', 'Inserting strips of fat into lean meat', 'Adds moisture and flavour to lean, dry cuts'],
                                        ['Barding', 'Wrapping lean meat in a layer of fat', 'Protects and bastes lean meat as it roasts'],
                                        ['Marinating', 'Soaking in a seasoned liquid with acid, oil and flavourings', 'Flavour and some surface tenderizing'],
                                        ['Rubbing', 'Coating with dry spices and seasonings', 'Flavour and crust'],
                                        ['Brining', 'Soaking in a salt solution', 'Retains moisture and seasons throughout'],
                                        ['Corning', 'Curing with salt, spices and nitrite', 'Corned beef'],
                                        ['Tying', 'Securing a roast with butcher string', 'Even shape and even cooking'],
                                        ['Grinding', 'Mincing meat with a grinder', 'Ground meat, burgers, sausage'],
                                        ['Curing', 'Preserving with salt, nitrite, sugar and spices', 'Bacon, ham, cured meats'],
                                        ['Mechanical tenderizing', 'Blade or needle tenderizing, pounding or cubing', 'Breaks connective tissue in tough cuts'],
                                        ['Smoking', 'Exposing to smoke to flavour or preserve', 'Cold smoking flavours; hot smoking cooks'],
                                        ['Trussing', 'Tying with string to hold a shape', 'Even cooking of a whole item'],
                                        ['Scoring', 'Cutting shallow lines into the surface', 'Helps fat render and marinades penetrate'],
                                        ['Portioning', 'Cutting to a consistent weight', 'Consistent cost and cooking'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Processing factors: muscle structure, fat content, defrost time and wastage.',
                                        'Minimize waste and use the trim: bones go to stocks and broths, scraps go to ground meat, and fat can be rendered.',
                                        'Cut across the grain when slicing so the muscle fibres are short and the meat is tender.',
                                        'Work with the colour-coded cutting boards for raw meat, keep the product cold and return unused meat to the cooler promptly.',
                                        'Know how to work with primal, sub-primal and purchased food service cuts.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example: Trim Yield', 'Calculation'],
                                    rows: [
                                        ['Edible portion (EP) percentage', 'A 10 kg beef striploin trims to 8 kg of usable meat: 8 ÷ 10 × 100 = 80% yield'],
                                        ['Purchase quantity needed', 'To serve 40 portions of 200 g, you need 8 kg of usable meat; at 80% yield, 8 ÷ 0.80 = 10 kg as purchased (AP)'],
                                        ['True cost per portion', 'If the striploin costs $20 per kg, 10 kg costs $200, so 200 ÷ 40 = $5.00 per portion'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Band saws, grinders and slicers cause the most severe injuries in the kitchen. Use guards, push sticks and cut-resistant gloves, lock out the machine before cleaning, never reach into a grinder, and wear non-slip footwear because fat and blood make floors slippery. Keep knives sharp, cut away from yourself and carry them point down.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Larding puts fat into the meat, barding wraps fat around it, brining adds moisture, and curing preserves. Yield percentage is edible portion divided by as purchased weight, times 100.',
                                },
                            ],
                        },
                        {
                            id: 'ch25-s2',
                            title: '25.2 Aging, Tempering and Safe Handling',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Aging Method', 'How It Works', 'Effect'],
                                    rows: [
                                        ['Dry aging', 'Meat is hung or held uncovered in a cold, controlled, ventilated space for weeks', 'Natural enzymes tenderize, moisture evaporates and flavour concentrates; loses weight and needs trimming'],
                                        ['Wet aging', 'Meat is aged in vacuum-sealed bags under refrigeration', 'Tenderizes with no moisture loss; milder flavour'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Freezing and defrosting factors: size and thickness of the cut, packaging, freezer temperature and the defrosting method. Large cuts freeze and defrost more slowly.',
                                        'Temper (defrost) safely in the refrigerator at 4 °C or below, under cold running water (at 21 °C or below) in a leak-proof package for the time allowed, or as part of the cooking process. Never defrost on the counter.',
                                        'Calculate defrosting time by the size of the cut: large roasts need a day or more in the refrigerator, while small steaks need a few hours. Allow about 24 hours in the refrigerator for every 2 to 2.5 kg of meat.',
                                        'Once defrosted, cook or use the product promptly and never refreeze raw thawed meat unless it has been cooked first, according to regulations.',
                                        'Keep fabricated product at 4 °C or below, work in small batches and return product to the cooler quickly. Do not leave it in the temperature danger zone (4 to 60 °C) for more than 2 hours in total.',
                                        'Processing hazards include cross-contamination, temperature abuse, physical hazards such as bone fragments and cuts from knives and machines. Know the CFIA requirements that apply to cutting and processing.',
                                        'Ground meat has a larger surface area and is mixed, so bacteria spread throughout. Grind from clean, cold meat and cook thoroughly.',
                                        'Curing agents such as nitrite are measured accurately and used only in the amounts allowed by regulations.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Thawing at room temperature lets the outside of the meat sit in the danger zone while the centre is still frozen. Cold running water thawing must use a clean, sanitized sink with water at 21 °C or below and be limited to the allowed time. Plan ahead and move product to the refrigerator a day or more before it is needed.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Safe defrosting methods are refrigerator, cold running water and as part of cooking. Aging is dry or wet. Larger cuts take longer to defrost, and thawed raw meat should not be refrozen without cooking.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 26 — COOKING AND FINISHING MEATS AND GAME (I-24.03 and I-24.04)
                // ============================================================
                {
                    id: 'ch-26',
                    number: 26,
                    title: 'Cooking and Finishing Meats and Game Meats',
                    subtitle: 'Tasks I-24.03 and I-24.04 · Methods, doneness, resting, carving and accompaniments (4 exam questions)',
                    isFree: false,
                    estimatedMinutes: 85,
                    sections: [
                        {
                            id: 'ch26-s1',
                            title: '26.1 Cooking Methods for Meat and Game',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The cooking method is matched to the cut. Tender cuts are cooked quickly with dry heat. Tough cuts are cooked slowly with moist heat or a combination so collagen melts into gelatin. The standard lists grilling, roasting, braising, broiling, combination methods and sous-vide.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Type of Heat', 'Best Cuts', 'Key Points'],
                                    rows: [
                                        ['Grilling', 'Dry, direct heat from below', 'Steaks, chops, burgers, kebabs', 'Preheat and oil the grate; turn once or twice; do not press down on meat'],
                                        ['Broiling', 'Dry, direct heat from above', 'Steaks, chops, thin cuts', 'Distance from the element controls browning and doneness'],
                                        ['Roasting', 'Dry, hot air in an oven', 'Whole tender roasts such as rib, loin, leg of lamb and pork loin', 'Use a rack, sear or start hot, then reduce; rest before carving'],
                                        ['Braising', 'Moist, in a covered pot with a little liquid', 'Tough cuts such as chuck, shank, short rib and pork shoulder', 'Sear first, cover and cook slowly until fork tender'],
                                        ['Combination', 'Dry and moist heat together, such as searing then braising or stewing', 'Stews, pot roast, short ribs', 'Browning builds flavour, then slow moist cooking tenderizes'],
                                        ['Sous-vide', 'Moist heat in a vacuum bag in a precisely controlled water bath', 'Steaks, chops, tough cuts for long times', 'Exact temperature control; finish with a sear; follow time and temperature safety charts'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Doneness', 'Description', 'Internal Temperature (Guide)'],
                                    rows: [
                                        ['Rare', 'Red, very juicy centre', 'About 52 to 55 °C'],
                                        ['Medium', 'Pink centre, juicy', 'About 63 to 66 °C'],
                                        ['Well done', 'No pink; firm and drier', 'About 71 °C and higher'],
                                        ['Fork tender', 'Moist-heat cuts when a fork slides in with little resistance and the meat can be pulled apart', 'Often 90 to 95 °C in the centre, when collagen has broken down'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Safe Minimum Internal Temperature (Health Canada Guide)', 'Temperature'],
                                    rows: [
                                        ['Beef, veal and lamb steaks, chops and roasts (whole cuts)', '63 °C (medium-rare), then rest 3 minutes'],
                                        ['Pork chops and roasts (whole cuts)', '71 °C'],
                                        ['Ground meat (beef, veal, pork, lamb) and mixtures', '71 °C'],
                                        ['Wild game and all hot holding or reheating', 'Cook to the temperature required by regulations; reheat to 74 °C'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Factors to consider: cut, muscle structure and marbling, doneness, flavourings, salting and seasoning, equipment, temperature, time, yield, resting, use of excess product and cross-contamination.',
                                        'Determine doneness by temperature readings using a clean, sanitized probe thermometer inserted into the centre of the thickest part, and by sensory assessment such as touch, colour and juices.',
                                        'Calculate cooking time by type, size, thickness and method: thicker and denser cuts take longer, and bone-in roasts cook more slowly near the bone.',
                                        'Season early (salt about 40 minutes ahead, or overnight for large roasts) so the salt penetrates, and pat the surface dry before searing so the meat browns instead of steaming.',
                                        'Lean game meat such as venison, bison and rabbit dries out quickly, so cook it to a lower doneness, barding or larding where appropriate, or braise it slowly.',
                                        'Use excess product: leftovers go to sandwiches, hashes, soups and stocks, if they were handled safely.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Prevention'],
                                    rows: [
                                        ['Tough steak', 'Overcooked, wrong cut for the method, or not rested', 'Cook to the right doneness, use a tender cut and rest'],
                                        ['Tough braise', 'Not cooked long enough or heat too high', 'Cook longer at a gentle simmer until fork tender'],
                                        ['Grey, steamed meat', 'Pan too cold or crowded, or meat wet', 'Pat dry, preheat well and cook in batches'],
                                        ['Dry roast', 'Overcooked, no rest, or no fat cover', 'Use a thermometer, rest, and bard or baste lean cuts'],
                                        ['Burnt outside, raw inside', 'Heat too high for the thickness', 'Sear, then finish at a lower heat or in the oven'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Never judge safety by colour alone. Ground meat can look brown before it is safe, and meat can stay pink when safe. Use a calibrated thermometer, and never reuse a plate or tongs that held raw meat for cooked meat. Flare-ups on a grill and hot fat in a pan cause burns, so keep a clean grill, trim excess fat and never use water on a grease fire.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Tender cuts get dry heat and tough cuts get moist or combination heat. Fork tender is the doneness test for braised cuts, and ground meat is cooked to 71 °C. A thermometer reading in the thickest part is the most reliable check.',
                                },
                            ],
                        },
                        {
                            id: 'ch26-s2',
                            title: '26.2 Resting, Carving, Finishing and Serving',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Finishing starts the moment the meat leaves the heat. Resting lets the juices redistribute, carryover cooking finishes the centre and the yield is better. Carving and portioning are done to maximize yield and tenderness, and the plate is completed with accompaniments.',
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Rest cooked meat according to size, weight and internal temperature: steaks about 5 minutes, small roasts 10 to 20 minutes and large roasts 20 to 30 minutes, loosely covered.',
                                        'Allow for carryover cooking: the internal temperature of a large roast can rise 3 to 8 °C or more after it is removed from the oven, so remove it before the target doneness.',
                                        'Carve across the grain for tenderness, with a sharp carving knife and a stable board, and carve thinly for tougher roasts.',
                                        'Determine portions to maximize yield and tenderness, and present each portion neatly.',
                                        'Serving hazards: undercooked meat, cross-contamination from carving boards, and holding too long. Hold hot meat at 60 °C or above, and cool leftovers rapidly and reheat to 74 °C.',
                                        'Handle, hold, serve and store finished product according to regulations.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Finishing Technique', 'Description', 'Example'],
                                    rows: [
                                        ['Broiling', 'Browning the top under direct heat', 'Finishing a sous-vide steak or gratinéing a topping'],
                                        ['Crusting', 'Coating with herbs, mustard, breadcrumbs or spices and browning', 'Herb-crusted rack of lamb'],
                                        ['Basting', 'Spooning hot fat or juices over meat while cooking', 'Butter-basted steak, roast'],
                                        ['Glazing', 'Brushing with a sweet or reduced glaze and caramelizing', 'Glazed ham, ribs'],
                                        ['Saucing', 'Serving with a sauce made from pan drippings or a prepared sauce', 'Pan sauce, jus, demi-glace'],
                                        ['Seasoning', 'Final adjustment with salt, pepper or finishing salt', 'Flaky salt on a steak'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Accompaniment', 'Examples'],
                                    rows: [
                                        ['Sauces', 'Jus, demi-glace, peppercorn sauce, béarnaise, chimichurri'],
                                        ['Glazes', 'Maple, honey mustard, reduced stock glaze'],
                                        ['Condiments', 'Mustard, horseradish, mint sauce, chutney'],
                                        ['Garnishes', 'Fresh herbs, citrus, crispy shallots'],
                                        ['Compound butters', 'Maître d hôtel, garlic herb, blue cheese butter'],
                                        ['Vegetables and starches', 'Roasted vegetables, potatoes, rice, polenta'],
                                        ['Herbs', 'Rosemary, thyme, parsley'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Carving knives and hot roasts cause cuts and burns. Use a carving fork or towel to steady a hot roast, keep your free hand clear of the blade and never carve on a wet or unstable board. Leave a rested roast in the pan juices only if safe to do so, and never taste or serve juices that touched raw meat without bringing them to a boil.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Rest before you carve and carve across the grain. Finishing techniques in the standard are broiling, crusting, basting, glazing, saucing and seasoning. A compound butter is softened butter blended with herbs or flavourings.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 27 — POULTRY AND GAME BIRDS (I-25)
                // ============================================================
                {
                    id: 'ch-27',
                    number: 27,
                    title: 'Poultry and Game Birds',
                    subtitle: 'Task I-25 · Selecting, processing, cooking and finishing poultry and game birds (4 exam questions)',
                    isFree: false,
                    estimatedMinutes: 85,
                    sections: [
                        {
                            id: 'ch27-s1',
                            title: '27.1 Selecting Poultry and Game Birds (I-25.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Poultry means domesticated birds raised for meat, mainly chicken and turkey, and game birds include quail, pheasant, partridge and duck. Select birds according to regulations, age classifications, the recipe, properties and the desired result, and judge freshness and quality by label information and sensory assessment.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Bird', 'Properties', 'Typical Uses'],
                                    rows: [
                                        ['Chicken', 'Mild flavour; broilers and fryers are young and tender, roasters are larger, and stewing hens are older and tougher', 'Roasting, frying, grilling, braising, stocks'],
                                        ['Turkey', 'Large; lean white breast and richer dark meat', 'Roasting, cutlets, ground turkey, deli'],
                                        ['Quail', 'Very small, delicate and mild', 'Roasting, grilling, stuffing'],
                                        ['Pheasant', 'Lean, with a mild gamey flavour', 'Roasting with barding, braising'],
                                        ['Partridge', 'Small and lean with a mild game flavour', 'Roasting, braising'],
                                        ['Duck', 'High in fat with rich, dark meat', 'Roasting, confit, breast seared and served medium-rare'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Market Form', 'Description'],
                                    rows: [
                                        ['Whole', 'The complete bird, sold fresh or frozen'],
                                        ['Fresh', 'Chilled at about 0 to 4 °C, never frozen solid; shorter shelf life'],
                                        ['Frozen', 'Frozen solid at -18 °C or below; longer shelf life'],
                                        ['IQF (individually quick frozen)', 'Pieces frozen separately so the amount needed can be removed'],
                                        ['Purchased food service cuts', 'Breasts, thighs, wings, drumsticks and boneless cuts, ready to use'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Properties to compare: fat content, origin, weight and cut.',
                                        'Regulations covering poultry include inspection, grading and classification by the CFIA. Age classifications such as broiler, roaster and stewing hen tell the cook how the bird should be cooked.',
                                        'Selection factors: availability, freshness, storage life, sustainability, free-range raising, price, size, count and protein percentage.',
                                        'Fresh poultry has a clean smell, plump moist skin without discolouration, no slime and no off odour. Reject birds with a sour smell, grey or green skin, sticky surface or torn packaging.',
                                        'Receive fresh poultry at 4 °C or below and frozen poultry solid at -18 °C or below.',
                                        'Know the dietary requirements, including halal and kosher poultry and ethical preferences such as free range.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Poultry is chicken and turkey, and game birds are quail, pheasant, partridge and duck. Market forms are whole, fresh, frozen, IQF and purchased food service cuts. Young birds suit dry heat and older birds need moist cooking.',
                                },
                            ],
                        },
                        {
                            id: 'ch27-s2',
                            title: '27.2 Processing Poultry and Game Birds (I-25.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Processing poultry means preparing it for cooking while keeping it safe. Poultry is the food most associated with Salmonella and Campylobacter, so cross-contamination control matters at every step.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool', 'Use'],
                                    rows: [
                                        ['Boning knife', 'De-boning breasts, thighs and whole birds'],
                                        ['Shears', 'Cutting backbones and joints, spatchcocking'],
                                        ['Cleaver', 'Chopping through bone'],
                                        ['Paring knife', 'Trimming and removing small parts'],
                                        ['Grinder', 'Grinding meat for forcemeat and sausage'],
                                        ['Mallet', 'Pounding breasts into cutlets'],
                                        ['Cutting board', 'Colour-coded board for raw poultry'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Description', 'Purpose'],
                                    rows: [
                                        ['Cleaning', 'Rinsing the cavity, removing giblets and excess fat', 'Prepares the bird; do not wash poultry in a way that splashes the sink and kitchen'],
                                        ['De-boning', 'Removing bones from a whole bird or parts', 'Faster cooking, easier stuffing and carving'],
                                        ['Larding and barding', 'Adding fat inside or wrapping the bird', 'Moisture for lean game birds'],
                                        ['Breading', 'Coating with flour, egg and crumbs', 'Crisp coating for frying and baking'],
                                        ['Marinating and seasoning', 'Flavouring with liquids, rubs and salt', 'Flavour and moisture'],
                                        ['Curing and smoking', 'Preserving or flavouring', 'Smoked duck, smoked chicken'],
                                        ['Trussing', 'Tying a bird into a compact shape', 'Even cooking'],
                                        ['Scoring', 'Slashing skin or flesh', 'Helps fat render, especially on duck breast'],
                                        ['Grinding', 'Mincing meat', 'Sausage, burgers, forcemeat'],
                                        ['Stuffing', 'Filling a bird or boneless portion', 'Flavour and presentation'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Calculate defrosting time by the size of the bird to ensure it is tempered per food safety regulations: thaw in the refrigerator at 4 °C or below (a large turkey may need several days), or under cold running water at 21 °C or below in a leak-proof package.',
                                        'Maintain safe handling: keep poultry cold, use separate boards, utensils and sinks, wash and sanitize everything it touches and wash hands thoroughly.',
                                        'Minimize waste and use the trim: bones and wings for stock, trim for forcemeat (farce), and fat for rendering.',
                                        'Fabricate according to the results and recipe: break down a whole bird into breasts, thighs, drumsticks, wings and carcass, or into halves and quarters, or butterfly it.',
                                        'Stuff portions and whole birds according to the recipe. A cold stuffing is placed loosely into a whole bird just before cooking, or the stuffing is baked separately, because stuffing inside a bird must reach 74 °C.',
                                        'Processing factors: required portions, recipe, desired outcomes and storage requirements.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Raw poultry carries Salmonella and Campylobacter, and juices spread easily. Never rinse a bird in a way that splashes other surfaces, sanitize all boards, knives, sinks and hands immediately after handling it, and keep it away from ready-to-eat foods. Never stuff a bird in advance and keep it, because the warm stuffing is an ideal place for bacteria.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Safe handling beats everything else for poultry. Stuffing must reach 74 °C, birds are tempered in the refrigerator or under cold running water, and carcasses and trim are used for stock and forcemeat.',
                                },
                            ],
                        },
                        {
                            id: 'ch27-s3',
                            title: '27.3 Cooking Poultry and Game Birds (I-25.03)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Method', 'Best For', 'Key Points'],
                                    rows: [
                                        ['Roasting', 'Whole birds, bone-in pieces', 'Dry the skin, season, start hot for colour, rest; use a rack so the heat circulates'],
                                        ['Broiling', 'Split birds, boneless pieces', 'Keep a distance from the element so the surface does not burn before the inside cooks'],
                                        ['Deep frying', 'Breaded or battered pieces, wings', 'Oil at about 165 to 175 °C; do not overcrowd; drain on a rack'],
                                        ['Braising', 'Tougher or older birds, legs and thighs', 'Brown, add liquid and cook covered until tender'],
                                        ['Combination', 'Pan-seared then oven-finished', 'Sear skin for colour, finish in the oven to the safe temperature'],
                                        ['Sous-vide', 'Breasts and legs', 'Precise low temperature; sear to finish; follow time and temperature safety charts'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Poultry (Health Canada Guide)', 'Safe Internal Temperature'],
                                    rows: [
                                        ['Whole chicken, turkey, duck and game birds', '82 °C in the thickest part of the thigh or inner thigh'],
                                        ['Poultry pieces (breasts, thighs, drumsticks, wings)', '74 °C'],
                                        ['Ground poultry', '74 °C'],
                                        ['Stuffing, whether inside the bird or cooked separately', '74 °C at the centre'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Determine doneness and tenderness by temperature readings and sensory assessment: juices run clear, the leg moves freely at the joint and the meat is tender.',
                                        'Calculate cooking time from the size of the bird, stuffing, method and equipment so it cooks evenly. A stuffed bird takes longer than an unstuffed one.',
                                        'Know the cooking factors: cut, muscle structure, doneness, flavouring, salting and seasoning, equipment, temperature, time, yield, resting and use of excess product.',
                                        'White meat (breast) is lean and dries quickly, while dark meat (legs and thighs) has more connective tissue and fat, so it tolerates longer cooking and is best at a higher internal temperature.',
                                        'Duck breast is often cooked to medium-rare, but this is only allowed where regulations and company policy permit it; follow your jurisdiction.',
                                        'Pat the skin dry and let the bird come up in temperature slightly before roasting for crisp skin and even cooking.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Poultry that is undercooked can cause serious illness. Measure the temperature in the thickest part of the thigh without touching bone, and check stuffing at the centre. Hot oil spatters badly when a wet or frozen bird or pieces are added, so dry the product, lower it slowly and never deep fry a partly frozen whole bird.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Poultry methods in the standard are braising, deep frying, broiling, roasting, combination and sous-vide. Poultry pieces and ground poultry reach 74 °C, whole birds 82 °C and stuffing 74 °C.',
                                },
                            ],
                        },
                        {
                            id: 'ch27-s4',
                            title: '27.4 Finishing and Holding Poultry and Game Birds (I-25.04)',
                            content: [
                                {
                                    type: 'list',
                                    items: [
                                        'Rest cooked birds according to size, weight and internal temperature to retain yield and moisture: about 10 minutes for a small bird and 20 to 30 minutes for a large turkey, loosely covered.',
                                        'Hold cooked birds according to the factors and regulations: time, temperature, moisture retention, yield and quality. Hold hot at 60 °C or above, and do not hold longer than quality allows.',
                                        'Apply finishing techniques: broiling, crusting, carving, basting, glazing, saucing, garnishing and presentation.',
                                        'Determine carving and portioning by type and size, and carve and portion according to the recipe and the classification.',
                                        'Present with accompaniments such as sauces, glazes, condiments, garnishes, compound butters, vegetables, starches and herbs.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Classification (Portion)', 'Description'],
                                    rows: [
                                        ['White meat', 'Breast meat; lean and mild'],
                                        ['Dark meat', 'Legs and thighs; richer and more flavourful'],
                                        ['Quarters', 'Breast with wing and leg with thigh, each in one piece'],
                                        ['Halves', 'The bird split along the backbone and breastbone'],
                                        ['Individual pieces', 'Breasts, thighs, drumsticks and wings portioned separately'],
                                        ['Whole', 'The complete bird presented and carved at the table or in the kitchen'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Step in Carving a Roast Bird', 'Method'],
                                    rows: [
                                        ['1. Rest the bird', 'Let it stand covered so juices redistribute'],
                                        ['2. Remove the legs', 'Cut through the skin between the leg and body, bend the leg back to break the joint and cut it free'],
                                        ['3. Separate thigh and drumstick', 'Cut through the joint'],
                                        ['4. Remove the breast', 'Cut along the breastbone and follow the rib cage to release the whole breast'],
                                        ['5. Slice or portion', 'Slice the breast across the grain and portion the dark meat'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Cooked poultry held in the danger zone grows bacteria fast. Do not hold carved poultry at room temperature, cool leftovers rapidly in shallow containers and reheat to 74 °C. Remove stuffing from the cavity and store it separately.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Poultry portion classifications in the standard are dark, white, quarters, halves, individual pieces and whole. Hold hot at 60 °C or above, rest before carving, and separate stuffing from the bird for storage.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 28 — VARIETY MEATS (I-26)
                // ============================================================
                {
                    id: 'ch-28',
                    number: 28,
                    title: 'Variety Meats',
                    subtitle: 'Task I-26 · Selecting, processing, cooking and finishing variety meats (2 exam questions)',
                    isFree: false,
                    estimatedMinutes: 55,
                    sections: [
                        {
                            id: 'ch28-s1',
                            title: '28.1 Selecting and Processing Variety Meats (I-26.01 and I-26.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Variety meats, also called offal, are the edible organs and other parts of animals. They are rich in nutrients and flavour but require specific handling and preparation. They spoil faster than muscle meat and need the freshest product and strict temperature control.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Variety Meat', 'Description', 'Typical Preparations'],
                                    rows: [
                                        ['Sweetbreads', 'Thymus gland of young animals, usually veal; delicate and creamy', 'Soak, blanch and press, then bread and sauté or braise'],
                                        ['Liver', 'Rich, iron-rich organ; calf and chicken livers are mildest', 'Sauté quickly, grill or make pâté; overcooking makes it dry and grainy'],
                                        ['Heart', 'Dense, lean muscle with a strong flavour', 'Slice thinly and grill or braise slowly'],
                                        ['Kidney', 'Strongly flavoured; veal and lamb kidneys are mildest', 'Soak to reduce the strong flavour, sauté or braise, or use in pies'],
                                        ['Tongue', 'Tough muscle, needs long cooking', 'Simmer or braise until tender, peel and slice'],
                                        ['Tripe', 'Lining of the stomach; tough and mild', 'Blanch and simmer for a long time, then braise, stew or fry'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Processing Method', 'Purpose'],
                                    rows: [
                                        ['Cleaning (removing membranes and blood vessels)', 'Removes tough, bitter or unsightly parts'],
                                        ['Soaking', 'Draws out blood and reduces strong flavour (milk, water or acidulated water)'],
                                        ['Blanching', 'Firms the product and loosens membranes'],
                                        ['Pressing', 'Compresses blanched sweetbreads or tongue for even slices'],
                                        ['Cutting, scoring and seasoning', 'Portions and flavours'],
                                        ['Breading and marinating', 'Adds coating or flavour before cooking'],
                                        ['Curing and smoking', 'Preserves and flavours, such as smoked or cured tongue'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify and choose variety meats according to regulations, classifications (origin, type, size and grade), the desired result and the recipe.',
                                        'Interpret label information, and assess freshness by sensory methods: fresh variety meats have a clean, mild smell, a glossy, moist look and a firm texture. Reject slimy, sour-smelling or dull and discoloured product.',
                                        'Selection factors: availability, fresh versus frozen, storage life, applications, how processed the product is, sustainability, tenderness and flavour.',
                                        'Processing tools: grinders, slicers, knives, food processors, cutting boards and moulds.',
                                        'Calculate defrosting time by size to temper according to regulations and the recipe, using the safe methods for meat.',
                                        'Processing factors: blood content, membrane, toughness, colour and cost. Minimize waste and maintain safe handling.',
                                        'Dietary requirements: religious restrictions, ethical preferences and allergies.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Variety meats spoil quickly and can carry high bacterial loads. Keep them at 4 °C or below, use them soon after receiving, and use separate boards and utensils. Liver and other organ meats must be thoroughly cooked, and pregnant guests are often advised to limit liver because of its very high vitamin A content.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The variety meats named in the standard are sweetbreads, liver, heart, kidney, tongue and tripe. Cleaning means removing membranes and blood vessels, and soaking and blanching are common first steps.',
                                },
                            ],
                        },
                        {
                            id: 'ch28-s2',
                            title: '28.2 Cooking and Finishing Variety Meats (I-26.03 and I-26.04)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Method', 'Best For', 'Notes'],
                                    rows: [
                                        ['Poaching', 'Sweetbreads, tongue', 'Gentle cooking in simmering liquid, often before further cooking'],
                                        ['Simmering', 'Tongue, tripe, heart', 'Long, slow cooking until tender'],
                                        ['Grilling', 'Heart slices, liver slices, kidneys', 'Quick, high heat; do not overcook'],
                                        ['Sautéing', 'Liver, sweetbreads, kidneys', 'Hot pan, short cooking time, often with a coating of flour'],
                                        ['Braising', 'Heart, tripe, tongue, kidneys', 'Brown and cook slowly in liquid until tender'],
                                        ['Frying', 'Breaded sweetbreads, liver, tripe', 'Crisp and golden'],
                                        ['Sous-vide', 'Tongue, heart, sweetbreads', 'Precise temperature for tender results'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Choose and apply a cooking method according to the recipe and results, and calculate cooking time by type, size and thickness.',
                                        'Determine doneness using temperature readings and sensory assessment. Cook variety meats thoroughly, to a safe internal temperature of at least 71 °C, as required by regulations.',
                                        'Factors to consider: type, aroma, cost and consumer demand.',
                                        'Quick-cooking organs such as liver and kidney turn tough and grainy when overcooked, so cook them just through. Long-cooking organs such as tongue, heart and tripe need slow, moist heat.',
                                        'Apply finishing techniques according to the recipe and results: slicing, presenting, saucing, glazing, searing, garnishing and seasoning.',
                                        'Hold cooked variety meats according to factors such as time, temperature, moisture retention, yield and quality, and at 60 °C or above for hot holding.',
                                        'Portion according to the recipe and results, and serve with sauces and garnishes that balance the rich flavours, such as acidic sauces, onions and herbs.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Undercooked organ meats can carry bacteria and parasites. Cook them through, keep raw and cooked organ meat apart and sanitize all equipment. Hot fat spatters from sautéing liver and kidneys, so pat the product dry and use a pan with enough room.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Match method to the organ: quick cooking for liver and kidney, long slow cooking for tongue, heart and tripe, and poaching then breading or searing for sweetbreads. Finishing techniques in the standard are slicing, presenting, saucing, glazing, searing, garnishing and seasoning.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 10 FRAGMENT (MWA J: Fish and seafood)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 9.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks J-27 (fin fish) and J-28 (seafood).
        // ============================================================
        {
            id: 'part-10',
            number: 10,
            title: 'Fish and Seafood (MWA J)',
            description: 'Fin fish and seafood from selection by freshness, origin and market form, through filleting, defrosting, shucking and shelling, to poaching, steaming, searing, frying, broiling, braising, baking and smoking, then finishing, holding and storing. MWA J carries 15 exam questions across tasks J-27 and J-28.',
            weight: '15 questions (10.0% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 29 — SELECTING FIN FISH (J-27.01)
                // ============================================================
                {
                    id: 'ch-29',
                    number: 29,
                    title: 'Selecting Fin Fish',
                    subtitle: 'Task J-27.01 · Species, characteristics, market forms and freshness (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 65,
                    sections: [
                        {
                            id: 'ch29-s1',
                            title: '29.1 Fin Fish Types and Characteristics',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Fin fish vary widely: freshwater and saltwater, round and flat, oily and lean. Fish is highly perishable, so freshness and quality are central to every decision. Cooks must understand how to handle, store, prepare and cook each type so that waste is limited and the standards of the jurisdiction are met.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Characteristic', 'Description', 'Examples'],
                                    rows: [
                                        ['Round fish', 'Swim upright, with eyes on each side; yield two fillets', 'Salmon, cod, snapper, perch, pickerel, mahi mahi, tuna, sardines'],
                                        ['Flat fish', 'Swim on one side with both eyes on the top; yield four fillets', 'Halibut, sole, flounder'],
                                        ['Oily fish', 'Higher fat content spread through the flesh; richer flavour, stronger smell and shorter shelf life', 'Salmon, sardines, tuna, mackerel'],
                                        ['Lean fish', 'Low fat; milder flavour, drier when overcooked', 'Cod, halibut, perch, pickerel, snapper'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Fin Fish', 'Origin and Type', 'Characteristics and Uses'],
                                    rows: [
                                        ['Perch', 'Freshwater, round, lean', 'Mild, delicate; pan-frying, baking'],
                                        ['Pickerel (walleye)', 'Freshwater, round, lean', 'Mild, flaky; pan searing, frying, baking'],
                                        ['Salmonids (salmon, trout, char)', 'Salt and freshwater, round, oily', 'Rich, firm to medium texture; poaching, roasting, grilling, smoking, curing'],
                                        ['Cod', 'Saltwater, round, lean', 'Mild and flaky; baking, frying, poaching'],
                                        ['Mahi mahi', 'Saltwater, round, lean to medium', 'Firm and meaty; grilling, searing'],
                                        ['Halibut', 'Saltwater, flat, lean', 'Firm, white and mild; roasting, poaching, pan searing'],
                                        ['Snapper', 'Saltwater, round, lean', 'Firm and sweet; roasting whole, pan searing'],
                                        ['Sardines', 'Saltwater, round, oily, small', 'Strong flavour; grilling, frying, canning'],
                                        ['Tuna', 'Saltwater, round, oily and meaty', 'Firm and dense; searing rare, grilling, raw preparations'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Origin', 'Description', 'Notes'],
                                    rows: [
                                        ['Wild', 'Caught in natural waters', 'Seasonal; variable fat content; sustainability depends on the fishery'],
                                        ['Farmed', 'Raised in controlled aquaculture', 'Consistent supply, size and fat content; sustainability depends on farming practices'],
                                        ['Freshwater', 'From lakes and rivers', 'Typically mild flavour'],
                                        ['Saltwater', 'From oceans and seas', 'Wide range of flavours and textures'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Factors in selection: local availability, seasonal availability, freshness, storage life, applications, how processed the product is, sustainability, origin and documentation.',
                                        'Documentation includes invoices, tags, catch or harvest information and inspection records that show where the fish came from and that it was handled safely.',
                                        'Regulations that apply: WHMIS, HACCP, OH&S and public health regulations, along with CFIA inspection requirements for fish and seafood.',
                                        'Dietary requirements: fish is a priority allergen, and cultural, ethical, religious, health-related, environmental and personal preferences also apply. Some guests avoid fish for mercury, sustainability or religious reasons.',
                                        'Know the terminology of the product, the hazards of raw fish and the safe handling procedures.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Remember the groups in the standard: round, flat, oily and lean for characteristics, and wild, farmed, freshwater and saltwater for origin. Flat fish give four fillets and round fish give two. Fin fish named in the standard are perch, pickerel, salmonids, cod, mahi mahi, halibut, snapper, sardines and tuna.',
                                },
                            ],
                        },
                        {
                            id: 'ch29-s2',
                            title: '29.2 Market Forms and Judging Freshness',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Market Form', 'Description', 'Notes'],
                                    rows: [
                                        ['Whole', 'The complete fish, ungutted or gutted', 'Lowest cost per kilogram but more labour and waste; best for judging freshness'],
                                        ['Fresh', 'Chilled and never frozen, packed on ice', 'Shortest shelf life; use quickly'],
                                        ['Frozen', 'Frozen solid', 'Longer shelf life; quality depends on freezing method and handling'],
                                        ['IQF (individually quick frozen)', 'Fillets or portions frozen separately', 'Remove only what is needed; defrost carefully'],
                                        ['Purchased food service cuts', 'Fillets, steaks and portions ready to use', 'Consistent size and less labour; higher price'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Sensory Check', 'Fresh Fish', 'Poor Quality or Spoiled'],
                                    rows: [
                                        ['Eyes', 'Clear, bright, full and slightly bulging', 'Cloudy, sunken or dull'],
                                        ['Gills', 'Bright red or pink, clean and moist', 'Brown, grey, slimy or sticky'],
                                        ['Skin and scales', 'Shiny, with scales tight and attached; slippery with clear slime', 'Dull, dry, with scales falling off or milky slime'],
                                        ['Smell', 'Clean, mild and sea-like', 'Strong fishy, sour or ammonia odour'],
                                        ['Flesh', 'Firm and elastic; springs back when pressed; no gaps; fillets are moist and translucent', 'Soft, leaves a dent, separates from the bone or has gaping, dry or discoloured flesh'],
                                        ['Belly', 'Intact and firm', 'Burst or soft belly'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify fresh and previously frozen fish so that each is handled properly. Fish that was frozen and thawed should not be refrozen, because the texture and quality suffer and food safety is at risk.',
                                        'Signs of previously frozen fish: cloudy eyes, dull flesh, a sour smell, freezer burn, ice crystals or liquid in the package.',
                                        'Receive fresh fish at 4 °C or below, ideally packed in crushed ice at about 0 to 2 °C, and frozen fish at -18 °C or below, hard to the touch.',
                                        'Identify cut specifications such as fillet, steak, portion size, skin-on or skin-off and bone-in or boneless, and compare them with the order.',
                                        'Reject deliveries that are warm, smell off, are damaged or have thawed.',
                                        'Store fish on crushed ice in a drained container in the coldest part of the cooler, below ready-to-eat foods and away from strong odours.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Some fish, especially tuna, mahi mahi, mackerel and sardines, can form histamine if they are left at warm temperatures. Histamine is not destroyed by cooking and causes scombroid poisoning with flushing, headache and rash. Keep these fish cold from the moment of receiving, and reject any with a sharp, peppery or metallic taste or odour.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Fresh fish has clear, bulging eyes, red gills, shiny tight scales, firm elastic flesh and a clean mild smell. Market forms are whole, fresh, frozen, IQF and purchased food service cuts. Store on crushed ice and never refreeze thawed fish.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 30 — PROCESSING FIN FISH (J-27.02)
                // ============================================================
                {
                    id: 'ch-30',
                    number: 30,
                    title: 'Processing Fin Fish',
                    subtitle: 'Task J-27.02 · Defrosting, filleting, portioning, curing and waste control (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 70,
                    sections: [
                        {
                            id: 'ch30-s1',
                            title: '30.1 Tools, Defrosting and Fabrication Methods',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Scaler', 'Removes scales from whole fish'],
                                        ['Knives (fillet, boning, chef)', 'Filleting, portioning and trimming; keep them sharp and flexible for fillet work'],
                                        ['Pliers and tweezers', 'Remove pin bones from fillets'],
                                        ['Cutting boards', 'Colour-coded or dedicated boards for raw fish'],
                                        ['Scale', 'Portion control and yield calculations'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Description'],
                                    rows: [
                                        ['Cleaning', 'Rinsing the fish and removing blood, slime and debris'],
                                        ['Scaling', 'Removing scales with a scaler or the back of a knife, working from tail to head'],
                                        ['Eviscerating and dressing', 'Removing the internal organs (gutting) and, for dressing, also the gills, fins and sometimes the head, so the fish is ready to cook'],
                                        ['Filleting', 'Cutting the flesh away from the backbone and ribs in boneless sides'],
                                        ['Skinning', 'Removing the skin from a fillet or whole fish'],
                                        ['De-boning', 'Removing pin bones and other bones with pliers or tweezers'],
                                        ['Trimming', 'Removing belly fat, bloodline, fins and ragged edges'],
                                        ['Cutting, slicing and portioning', 'Cutting into steaks, portions, strips, cubes or thin slices to a consistent weight'],
                                        ['Brining', 'Soaking in a salt solution to season, firm and moisten the flesh'],
                                        ['Marinating', 'Soaking in a seasoned acidic or oil-based liquid'],
                                        ['Curing', 'Preserving and flavouring with salt, sugar and seasonings, such as gravlax'],
                                        ['Smoking', 'Flavouring and preserving with smoke, cold or hot'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Defrost while maintaining quality and cell structure: thaw frozen fish slowly under refrigeration at 4 °C or below, in its packaging or on a draining tray, or under cold running water at 21 °C or below if it is in a sealed package. Never thaw at room temperature or in warm water.',
                                        'Frozen fish packed in a vacuum or reduced-oxygen package must be removed from the packaging before thawing, because anaerobic bacteria such as Clostridium botulinum can grow in the sealed package.',
                                        'Slow thawing prevents the cells from rupturing and the flesh from becoming mushy, and reduces drip loss.',
                                        'Round fish yield two fillets and flat fish four. Fillets are removed by cutting along the backbone and following the rib cage, and flat fish are filleted along the central spine.',
                                        'Minimize waste and use the trim: bones, heads and frames make fish stock, and trim makes mousses, quenelles, patties and fish cakes.',
                                        'Select seasonings and aromatics that suit the fish and recipe, such as lemon, herbs, salt, pepper and spices.',
                                        'Handle live and raw fish with care. Keep it cold, handle it quickly, use dedicated boards and knives and sanitize all surfaces immediately.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Other Uses of Trim and Bones', 'Product'],
                                    rows: [
                                        ['Mousses', 'Puréed raw fish with cream and egg white, cooked gently'],
                                        ['Quenelles', 'Shaped dumplings of fish mousse, poached'],
                                        ['Patties', 'Ground or flaked fish formed into cakes and pan-fried or baked'],
                                        ['Stock', 'Fish bones and trim simmered briefly (about 20 to 30 minutes) with aromatics'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example: Fillet Yield', 'Calculation'],
                                    rows: [
                                        ['Yield percentage', 'A 5 kg whole round fish gives 2 kg of fillets: 2 ÷ 5 × 100 = 40% yield'],
                                        ['Whole fish needed', 'For 30 portions of 150 g, you need 4.5 kg of fillets; at 40% yield, 4.5 ÷ 0.40 = 11.25 kg of whole fish'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Raw fish can contain parasites such as Anisakis worms. Fish meant to be eaten raw or only lightly cured or smoked must be frozen at a temperature and for a time that kills parasites (commonly -20 °C for at least 7 days or -35 °C for at least 15 hours), according to regulations. Fillet knives are razor sharp, and wet fish and scales make boards and floors slippery, so keep the work area clean and dry and cut away from your hands.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Thaw fish slowly under refrigeration, and always remove vacuum packaging before thawing. Round fish give two fillets and flat fish four, and fish trim goes to stocks, mousses, quenelles and patties.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 31 — COOKING AND FINISHING FIN FISH (J-27.03 and J-27.04)
                // ============================================================
                {
                    id: 'ch-31',
                    number: 31,
                    title: 'Cooking and Finishing Fin Fish',
                    subtitle: 'Tasks J-27.03 and J-27.04 · Cooking methods, doneness, finishing, holding and storage (4 exam questions)',
                    isFree: false,
                    estimatedMinutes: 80,
                    sections: [
                        {
                            id: 'ch31-s1',
                            title: '31.1 Cooking Methods and Doneness',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Fish has little connective tissue, so it cooks quickly and overcooks easily. Cook time depends on the type, the thickness and the desired doneness. Tools include pans, grills, ovens, smokers, griddles and slotted spatulas.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'How It Is Done', 'Best For'],
                                    rows: [
                                        ['Poaching', 'Cook gently in barely simmering liquid (court bouillon, stock or milk)', 'Salmon, halibut, whole fish; keeps flesh moist and delicate'],
                                        ['Steaming', 'Cook above simmering liquid in a covered steamer', 'Delicate fillets and whole fish; no added fat'],
                                        ['Pan searing', 'Cook in a hot pan with a little fat to form a golden crust, often finished in the oven', 'Firm, skin-on fillets such as salmon, halibut and snapper'],
                                        ['Deep-frying', 'Submerge in hot oil, usually breaded or battered', 'Cod, perch, pickerel; fish and chips'],
                                        ['Smoking', 'Cook or flavour with wood smoke; cold smoking does not cook and must follow safe curing procedures', 'Salmon, trout, mackerel'],
                                        ['Broiling', 'Cook under direct heat from above', 'Fillets and steaks; brush with oil and watch closely'],
                                        ['Braising', 'Cook partly covered in a small amount of liquid', 'Firm fish such as halibut, in sauces and stews'],
                                        ['Roasting', 'Cook in a hot oven, whole or in pieces', 'Whole snapper, salmon sides, fillets'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Doneness Method', 'How It Works'],
                                    rows: [
                                        ['Temperature reading', 'Insert a clean, sanitized probe into the thickest part; the safe internal temperature for fish is commonly 70 °C (Health Canada guidance), though some operations use lower temperatures for specific species and service styles where regulations allow'],
                                        ['Needle test', 'Insert a thin metal needle or skewer into the thickest part, hold for a few seconds and touch it to your lip or wrist; cool means undercooked, warm means medium and hot means well done'],
                                        ['Sensory assessment', 'Flesh turns from translucent to opaque and begins to flake easily along the muscle lines, and the juices turn from clear to milky'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Season the fish before cooking, and pat the skin and surface dry so that it sears instead of steams.',
                                        'Determine cooking time by fish type, thickness and desired doneness. A common guide is about 10 minutes per 2.5 cm of thickness at moderate heat, measured at the thickest point.',
                                        'Cooking factors: skin-on or skin-off, size, timing, bone-in or bone-out and texture. Skin protects the flesh and crisps in a hot pan.',
                                        'Oily fish tolerate higher heat and grilling. Lean fish dry out easily, so use gentle methods, moist heat or added fat.',
                                        'Carryover cooking continues after the fish leaves the heat, so remove it just before it is done.',
                                        'Use a slotted spatula or fish spatula so that fragile fillets do not break, and do not turn the fish more than once.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Prevention'],
                                    rows: [
                                        ['Dry, tough fish', 'Overcooked or heat too high', 'Use a thermometer or needle test, and remove early'],
                                        ['Fish sticks to the pan', 'Pan not hot enough, or fish turned too early', 'Preheat the pan and oil, and let a crust form so the fish releases'],
                                        ['Fish falls apart', 'Overcooked, fragile fish handled roughly, or poor spatula', 'Handle gently, use a wide spatula and do not overcook'],
                                        ['Soggy fried coating', 'Oil too cool or pan crowded', 'Fry at the correct temperature and cook in small batches'],
                                        ['White protein (albumin) oozing from salmon', 'High heat squeezing out protein', 'Cook more gently or brine briefly'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Hot oil, steam and a hot broiler are the main burn hazards. Dry fish before it goes into oil and lower it in away from your body, never overfill the fryer and keep a lid or sheet pan nearby. Smoking uses open flame and smouldering wood, so work in properly ventilated areas and follow fire safety rules.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Fish cooking methods in the standard are poaching, steaming, pan searing, deep-frying, smoking, broiling, braising and roasting. Doneness is checked with temperature readings, the needle test and sensory assessment, and fish goes from translucent to opaque and flakes when done.',
                                },
                            ],
                        },
                        {
                            id: 'ch31-s2',
                            title: '31.2 Finishing, Holding and Storing Fin Fish',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Finishing Technique', 'Description', 'Example'],
                                    rows: [
                                        ['Broiling', 'Browning the surface under direct heat', 'Gratinéed fish with a topping'],
                                        ['Crusting', 'Coating with herbs, nuts, spices or crumbs and cooking until crisp', 'Herb-crusted halibut, pecan-crusted trout'],
                                        ['Resting', 'Letting the fish stand briefly before serving', 'Allows juices to settle and carryover cooking to finish'],
                                        ['Glazing', 'Brushing with a glaze and caramelizing it', 'Maple-glazed salmon'],
                                        ['Torching', 'Browning or searing the surface with a torch', 'Finishing seared tuna or salmon belly'],
                                        ['Smoking', 'Finishing with smoke for flavour', 'Smoked trout, smoked salmon'],
                                        ['Saucing', 'Serving with a sauce', 'Beurre blanc, lemon butter, hollandaise, salsa'],
                                        ['Presentation', 'Arranging attractively on the plate', 'Skin side up to keep it crisp; neat portion shape'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Adjust seasoning, with acid such as lemon juice, salt and fresh herbs, and garnish according to the recipe and desired results.',
                                        'Finishing factors: handling, skin-on or skin-off, texture, fat content and tool selection.',
                                        'Serve hot fish as soon as possible, because it dries out and loses quality quickly.',
                                        'Hold cooked fish at 60 °C or above for a short time only, or cool it quickly and store it covered, labelled and dated at 4 °C or below. Reheat to 74 °C.',
                                        'Store raw fish on ice or at 0 to 4 °C, below other foods, and use it within the shelf life; cooked fish should be used within a short time (commonly 2 days).',
                                        'Know the hazards of serving, holding and storing cooked and raw fish, the dietary requirements and the accompaniments that suit each dish: lemon, tartar sauce, herbs, vegetables and starches.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Fish is a priority allergen, and fish oil and stock can appear in sauces, Caesar dressing and Worcestershire sauce. Keep fish and fish-containing items away from other foods, use separate fryer oil and utensils, and label every dish that contains fish. Do not hold cooked fish in the danger zone, because bacteria and histamine can build up quickly.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Finishing techniques in the standard are broiling, crusting, resting, glazing, torching, smoking, saucing and presentation. Serve fish promptly, and cool and refrigerate leftovers quickly.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 32 — SELECTING AND PROCESSING SEAFOOD (J-28.01 and J-28.02)
                // ============================================================
                {
                    id: 'ch-32',
                    number: 32,
                    title: 'Selecting and Processing Seafood',
                    subtitle: 'Tasks J-28.01 and J-28.02 · Shellfish, bivalves, cephalopods, live seafood and shell processing (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 75,
                    sections: [
                        {
                            id: 'ch32-s1',
                            title: '32.1 Seafood Types and Selection',
                            content: [
                                {
                                    type: 'text',
                                    text: 'In this standard, seafood means non-fin-fish items from salt and fresh water: shellfish, bivalves and cephalopods, plus items such as roe and jellyfish. Extra precautions apply to raw and cooked seafood because of its delicate nature and the related dietary requirements.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Seafood', 'Group', 'Characteristics and Uses'],
                                    rows: [
                                        ['Clams', 'Bivalve mollusc', 'Steamed, in chowders, pasta and sauces; must be alive when cooked'],
                                        ['Oysters', 'Bivalve mollusc', 'Raw on the half shell, baked, grilled or fried; shucked to order'],
                                        ['Mussels', 'Bivalve mollusc', 'Steamed in wine and aromatics; need debearding'],
                                        ['Lobster', 'Crustacean', 'Boiled, steamed, grilled or broiled; sold live or cooked'],
                                        ['Crayfish', 'Freshwater crustacean', 'Boiled with spices, in soups and sauces'],
                                        ['Shrimp', 'Crustacean', 'Sautéed, grilled, fried, poached; sold by count per kilogram or pound; peeled or in shell'],
                                        ['Squid', 'Cephalopod mollusc', 'Quick frying or grilling, or slow braising; tough if cooked in between'],
                                        ['Octopus', 'Cephalopod mollusc', 'Tenderized by long, slow cooking, then grilled or sliced'],
                                        ['Jellyfish', 'Cnidarian', 'Salted and dried product used in cold Asian dishes'],
                                        ['Roe', 'Fish or shellfish eggs', 'Caviar, salmon roe, sea urchin roe; served cold as a garnish or spread'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Market Form', 'Description'],
                                    rows: [
                                        ['Live', 'Alive on delivery, such as lobster, crayfish, clams, mussels and oysters'],
                                        ['Fresh', 'Chilled and never frozen'],
                                        ['Frozen and IQF', 'Frozen solid, or individually quick frozen so that the amount needed can be removed'],
                                        ['Peeled and de-veined', 'Shrimp with shell removed and digestive tract removed'],
                                        ['Shucked', 'Bivalves removed from the shell, packed in their liquor'],
                                        ['Size, shape and packaging', 'Count per weight, whole or portions, packed in sacks, boxes or vacuum packs'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Freshness Check', 'Good Quality', 'Reject'],
                                    rows: [
                                        ['Live bivalves', 'Closed shells, or shells that close when tapped; fresh sea smell; heavy for their size', 'Open shells that do not close, broken shells, dead or foul-smelling product'],
                                        ['Live lobster and crayfish', 'Active and moving, with tail that curls when picked up', 'Limp, slow or dead product'],
                                        ['Shrimp', 'Firm, translucent flesh, mild smell and tight shells', 'Soft, slimy, black spots (melanosis) or ammonia smell'],
                                        ['Squid and octopus', 'Firm, glossy and moist, with clean smell and bright eyes', 'Slimy, dull, sour or ammonia smell'],
                                        ['Shucked shellfish', 'Plump, with clear liquid and a mild smell', 'Cloudy or sour liquid'],
                                        ['Temperature', 'Fresh at 4 °C or below, frozen at -18 °C or below; live shellfish held at the temperature on the tag (commonly 4 °C or below)', 'Warm or thawed product'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify fresh and frozen seafood for proper application and handling, determine freshness and quality by sensory assessment and choose by size and recipe specifications.',
                                        'Factors in selection: local availability, seasonal availability, freshness, storage life, applications, how processed the product is, sustainability, origin and documentation.',
                                        'Documentation includes shellstock tags, which identify where and when the shellfish was harvested. Keep tags for the period required by regulations (commonly 90 days) so that any illness can be traced.',
                                        'Regulations include WHMIS, HACCP, OH&S and public health regulations, and shellfish must come from approved, inspected waters and suppliers.',
                                        'Dietary requirements: shellfish (crustaceans and molluscs) are priority allergens, and some religious dietary laws forbid certain seafood. Fish and shellfish allergies are different, so know which is involved.',
                                        'Know the regional species and the terminology, classifications and applications.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Raw oysters, clams and mussels can carry norovirus, Vibrio bacteria and toxins from algae blooms, which cooking does not always remove. Buy only from approved sources, keep shellstock tags, keep live shellfish cold, never store them in fresh water or sealed airtight and warn guests that eating raw shellfish carries a risk, especially for people with weakened immune systems.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Seafood in the standard is clams, oysters, mussels, lobster, crayfish, shrimp, squid, octopus, jellyfish and roe. Discard live bivalves that stay open when tapped, and keep shellstock tags on file.',
                                },
                            ],
                        },
                        {
                            id: 'ch32-s2',
                            title: '32.2 Processing Seafood',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Tool', 'Use'],
                                    rows: [
                                        ['Shucker (oyster knife)', 'Opens oysters and clams by cutting the adductor muscle'],
                                        ['Scissors', 'Cut shrimp shells, lobster shells and trim squid'],
                                        ['Brushes', 'Scrub shells clean'],
                                        ['Knives', 'Cutting, trimming, portioning and splitting lobster'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Description', 'Applies To'],
                                    rows: [
                                        ['Sorting', 'Identifying live, unusable and damaged seafood and sorting by size and shape', 'All live and fresh shellfish'],
                                        ['Washing and cleaning', 'Scrubbing shells, rinsing and purging grit', 'Clams, mussels, oysters'],
                                        ['Shucking', 'Opening bivalves', 'Oysters, clams'],
                                        ['De-bearding', 'Pulling off the fibrous threads (beard) attached to the shell', 'Mussels'],
                                        ['Shelling and de-veining', 'Removing the shell and the dark intestinal tract along the back', 'Shrimp, crayfish'],
                                        ['Cutting, trimming and skinning', 'Cleaning and cutting into rings, tubes or portions', 'Squid, octopus'],
                                        ['Portioning', 'Cutting or dividing to a consistent weight', 'Lobster tails, shrimp, squid'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Defrost frozen seafood by type and size so that tempering meets regulations and recipe specifications: thaw in the refrigerator at 4 °C or below, or under cold running water for small, packaged items.',
                                        'Separate the protein from the shell and process the shell for other uses: clean, polish and dry shells for presentation, and use shells in stocks, sauces and soups (lobster and shrimp shells give a rich flavour).',
                                        'Select seasonings and aromatics to suit the recipe and the desired result, such as garlic, wine, herbs, lemon and spices.',
                                        'Marinate, cure, smoke and pickle seafood according to tested procedures, since these processes can affect safety.',
                                        'Handle live seafood carefully: keep it cool and damp, covered with a wet cloth, not in fresh water or on direct ice, and use it quickly.',
                                        'Store raw and cooked seafood separately, raw on the lower shelves, covered and labelled, and cook or use it within the shelf life.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Shucking knives slip easily and cause deep hand injuries. Hold the shellfish in a thick cloth or cut-resistant glove, work on a stable surface and keep your free hand clear of the blade. Lobster and crab shells and claws are sharp. Wash and sanitize hands, knives and boards after handling raw shellfish.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Processing steps in the standard are sorting, washing and cleaning, shucking, shelling, de-veining, de-bearding, cutting, trimming, skinning and portioning. Shells go on to stocks, sauces, soups and presentation.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 33 — COOKING AND FINISHING SEAFOOD (J-28.03 and J-28.04)
                // ============================================================
                {
                    id: 'ch-33',
                    number: 33,
                    title: 'Cooking and Finishing Seafood',
                    subtitle: 'Tasks J-28.03 and J-28.04 · Cooking methods, doneness, finishing, holding and storage (2 exam questions)',
                    isFree: false,
                    estimatedMinutes: 65,
                    sections: [
                        {
                            id: 'ch33-s1',
                            title: '33.1 Cooking Seafood',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Seafood cooks quickly and becomes rubbery when overcooked. Select the cooking method by the type of seafood, the recipe and the desired result. Cooking time is calculated from the size and the method. Factors include variety, size, and whether the product is in-shell or out-of-shell.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Best For', 'Notes'],
                                    rows: [
                                        ['Poaching', 'Shrimp, lobster, scallop style items', 'Gentle simmer in seasoned liquid'],
                                        ['Steaming', 'Clams, mussels, lobster, crab, shrimp', 'Cook covered until shells open; discard any that stay closed'],
                                        ['Pan searing', 'Shrimp, scallops, squid', 'Very hot pan; short time for a golden crust and tender centre'],
                                        ['Deep-frying', 'Calamari, shrimp, oysters', 'Batter or bread, fry briefly, drain well'],
                                        ['Pan-frying', 'Shrimp, crayfish, oysters', 'Medium-high heat with a little fat'],
                                        ['Broiling', 'Lobster, shrimp, oysters', 'Watch closely to avoid drying'],
                                        ['Braising', 'Octopus, squid', 'Slow cooking until tender, in sauce or liquid'],
                                        ['Baking', 'Stuffed shellfish, oysters, lobster tails', 'Moderate oven, covered or with a topping'],
                                        ['Smoking', 'Mussels, oysters, shrimp', 'Cold or hot; follow safe procedures'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Doneness Sign', 'Seafood'],
                                    rows: [
                                        ['Opaque, firm and pink to red', 'Shrimp, lobster, crayfish; shrimp form a loose C shape when done and a tight O shape when overcooked'],
                                        ['Shells open wide', 'Clams and mussels; discard any that do not open after cooking'],
                                        ['Opaque white and just firm', 'Squid cooked quickly, or tender and soft if braised for a long time'],
                                        ['Tender when pierced', 'Octopus after long, slow cooking'],
                                        ['Temperature, needle test or sensory assessment', 'Used according to the product; seafood is commonly cooked to 70 °C internal temperature according to guidelines'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Tools and equipment: pans, pots, steamers, smokers, ovens, grills and deep fryers.',
                                        'Squid and octopus are tender either after a very short cook (under 2 to 3 minutes) or a long, slow one; anything in between is tough and rubbery.',
                                        'Lobster and crab may be cooked live by quickly plunging into boiling water or by another approved humane method, according to regulations and company policy.',
                                        'Know the hazards and safe practices for cooking, and the dietary requirements.',
                                        'Handle, hold and store cooked seafood safely: hold hot at 60 °C or above, cool quickly, refrigerate at 4 °C or below and reheat gently to 74 °C.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Do not eat or serve shellfish that fail to open when cooked, and never cook dead shellfish that were not alive when processed, because bacteria multiply very quickly after death. Steam from lobster pots and steamers causes severe burns, so lift lids away from your face. Cross-contact with shellfish can cause fatal allergic reactions, so use separate pots, fryer oil and utensils.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Seafood cooking methods in the standard are poaching, steaming, pan searing, deep-frying, pan-frying, broiling, braising, baking and smoking. Overcooking makes shrimp, scallops and lobster rubbery, and shells that do not open after steaming must be discarded.',
                                },
                            ],
                        },
                        {
                            id: 'ch33-s2',
                            title: '33.2 Finishing, Holding and Storing Seafood',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Finishing Technique', 'Example'],
                                    rows: [
                                        ['Broiling', 'Browning a topping on baked oysters or lobster'],
                                        ['Crusting', 'Herb or breadcrumb crust on shellfish'],
                                        ['Resting', 'Letting seared seafood stand briefly before serving'],
                                        ['Glazing', 'Brushing shrimp or lobster with a glaze'],
                                        ['Torching', 'Searing or browning the surface with a torch'],
                                        ['Smoking', 'Finishing with smoke for flavour'],
                                        ['Saucing', 'Drawn butter, cocktail sauce, white wine and garlic broth, aioli'],
                                        ['Presentation', 'Arranging shells, claws and garnishes attractively on the plate'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Apply finishing techniques according to the recipe and desired results, adjust seasoning and garnish.',
                                        'Typical accompaniments include lemon wedges, cocktail sauce, mignonette, drawn butter, herbs and crusty bread.',
                                        'Serve oysters on the half shell on crushed ice, and serve cold seafood at 4 °C or below.',
                                        'Handle, hold, serve and store finished seafood according to regulations, and keep raw and cooked seafood separate.',
                                        'Know the hazards for serving, handling and storing seafood, and the dietary requirements: cultural, allergies, ethical, religious, health-related, environmental and preferences.',
                                        'Label dishes that contain shellfish, fish or roe, and tell guests about cross-contact risks.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Cooked seafood held in the danger zone grows bacteria quickly, and seafood salads and cocktails made ahead must be kept at 4 °C or below. Throw away any shellfish that smells sour, ammonia-like or off. Warn guests who are allergic or immune-compromised about raw items on the menu.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Finishing techniques for seafood are the same as for fin fish: broiling, crusting, resting, glazing, torching, smoking, saucing and presentation. Serve raw shellfish on ice and keep cold seafood at 4 °C or below.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 11 FRAGMENT (MWA K: Salads and sandwiches)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 10.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks K-29, K-30 and K-31.
        // ============================================================
        {
            id: 'part-11',
            number: 11,
            title: 'Salads and Sandwiches (MWA K)',
            description: 'Sandwiches from selecting breads and fillings to assembly, grilling, panini and finishing; salads from selecting and processing ingredients to tossing, dressing, garnishing and holding; and condiments, preserves and dressings including vinaigrettes, emulsions, salsas, pickles, jams and canning. MWA K carries 9 exam questions across tasks K-29, K-30 and K-31.',
            weight: '9 questions (6.0% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 34 — SANDWICHES (K-29)
                // ============================================================
                {
                    id: 'ch-34',
                    number: 34,
                    title: 'Sandwiches',
                    subtitle: 'Task K-29 · Prepares sandwiches (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 70,
                    sections: [
                        {
                            id: 'ch34-s1',
                            title: '34.1 Selecting Sandwich Ingredients (K-29.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Sandwiches combine a broad range of ingredients and presentations, and they appear on most menus across many cultures. Selecting well means identifying the fillings and toppings that match the recipe, choosing the bread to suit the sandwich style and checking freshness and quality by sensory assessment.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Sandwich Type', 'Description', 'Typical Bread'],
                                    rows: [
                                        ['Hamburger', 'Cooked patty with toppings and condiments', 'Bun'],
                                        ['Hot dog', 'Sausage served in a long bun with condiments', 'Hot dog bun'],
                                        ['Panini', 'Pressed and grilled sandwich with fillings such as cheese, meat and vegetables', 'Ciabatta, focaccia, baguette'],
                                        ['Shawarma', 'Sliced roasted meat with vegetables and sauce, wrapped or in a pita', 'Pita, flatbread'],
                                        ['Wrap', 'Fillings rolled in a flat bread', 'Tortilla, flatbread'],
                                        ['Picnic', 'Portable sandwich designed to hold up without refrigeration for a short time', 'Sturdy rolls, baguette, sliced bread'],
                                        ['Finger sandwich', 'Small, delicate sandwich cut into fingers, triangles or rounds, often for tea or receptions', 'Thinly sliced white or brown bread, crusts removed'],
                                        ['Pizza', 'Flat dough topped with sauce, cheese and toppings, then baked', 'Pizza dough'],
                                        ['Deli sandwich', 'Sliced cured or cooked meats, cheese and vegetables', 'Sliced bread, rolls, baguette'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Bread', 'Characteristics', 'Best For'],
                                    rows: [
                                        ['Buns', 'Soft and rounded', 'Burgers, hot dogs, pulled meats'],
                                        ['Sliced bread', 'Uniform slices, white, whole wheat, rye, sourdough', 'Deli, grilled and finger sandwiches'],
                                        ['Baguettes', 'Crisp crust and chewy interior', 'Subs, paninis, cold cut sandwiches'],
                                        ['Tortillas', 'Thin, flexible flatbread', 'Wraps, quesadillas'],
                                        ['Pitas', 'Pocket or flat bread', 'Shawarma, falafel, stuffed sandwiches'],
                                        ['Flatbread', 'Thin, unleavened or lightly leavened bread', 'Wraps, open-faced sandwiches'],
                                        ['Alternatives (lettuce wrap)', 'Leaves used instead of bread', 'Gluten-free or low-carbohydrate requests'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Freshness and Quality Indicator', 'Good Quality', 'Poor Quality'],
                                    rows: [
                                        ['Hydration', 'Bread is soft or crisp as expected; vegetables are crisp and moist', 'Stale, dry bread; wilted or slimy vegetables'],
                                        ['Colour', 'Natural, even colour', 'Mould, grey or brown spots and discolouration'],
                                        ['Texture', 'Springy bread; firm, crisp toppings', 'Hard, crumbly or soggy product'],
                                        ['Best before date', 'Within date and stored correctly', 'Expired or stored at the wrong temperature'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Factors in selecting ingredients: types of fillings and toppings, types of bread or alternatives, cooking method, assembly sequence and service application.',
                                        'Choose a bread that suits the filling: a moist filling needs a sturdier bread so that it does not turn soggy, and a delicate filling suits a soft bread.',
                                        'Dietary requirements: wheat and gluten, egg, milk, soy, sesame and nuts, plus cultural, ethical, religious, health-related, environmental and personal preferences. Offer gluten-free breads and lettuce wraps where needed.',
                                        'Know the terminology and the characteristics of each sandwich type.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Sandwich types named in the standard are hamburgers, hot dogs, paninis, shawarma, wraps, picnic, finger, pizza and deli. Breads are buns, sliced bread, baguettes, tortillas, pitas and flatbread. Quality indicators are hydration, colour, texture and the best before date.',
                                },
                            ],
                        },
                        {
                            id: 'ch34-s2',
                            title: '34.2 Processing and Assembling Sandwiches (K-29.02 and K-29.03)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Processing Method', 'Description', 'Example'],
                                    rows: [
                                        ['Slicing', 'Cutting into even slices', 'Tomatoes, deli meats, cheese, onions'],
                                        ['Mixing', 'Combining ingredients', 'Egg salad, tuna salad, chicken salad'],
                                        ['Grating', 'Shredding with a grater', 'Cheese, carrots'],
                                        ['Mashing', 'Crushing to a paste', 'Avocado, chickpeas, egg'],
                                        ['Dicing', 'Cutting into small cubes', 'Onions, peppers, pickles'],
                                        ['Pulling', 'Shredding cooked meat by hand or with forks', 'Pulled pork, pulled chicken'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Knives and slicer', 'Slicing meats, cheese, vegetables and bread'],
                                        ['Grills, griddles and oven', 'Cooking proteins and toasting'],
                                        ['Food processors and graters', 'Chopping, grating and blending fillings and spreads'],
                                        ['Toasters', 'Toasting bread'],
                                        ['Spreaders, picks and paper', 'Applying spreads, holding and wrapping sandwiches'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Hold and store ingredients according to regulations, desired results and the recipe: keep cold ingredients at 4 °C or below and hot ingredients at 60 °C or above.',
                                        'Processing factors: volume, time, type of sandwich, and the tools and equipment available.',
                                        'Plan the assembly steps with all ingredients prepared and within reach (mise en place) so that sandwiches are built quickly and consistently.',
                                        'Assembly sequence: place the bread, apply a spread or condiment (a thin layer of mayonnaise or butter acts as a moisture barrier), add the filling, then toppings, and close.',
                                        'Place wet items such as tomato and pickles in the centre or between layers of lettuce so that the bread does not become soggy.',
                                        'Control portions with a scale or measuring scoop so that cost and quality are consistent.',
                                        'Finishing techniques: garnishing, packaging, presentation and cutting. Cut sandwiches with a sharp knife on the diagonal or into fingers, secure with picks and wrap or package according to the service style.',
                                        'Handle, hold and store sandwiches carefully: factors are cross-contamination, holding time and method, temperature of ingredients, presentation and portion control. Hold cold sandwiches at 4 °C or below, and discard those held beyond the time allowed.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Sandwiches contain ready-to-eat foods that are not cooked again, so cross-contamination is a major risk. Wash hands, wear gloves where required, use clean utensils and boards, and never handle money and then food. Keep egg, meat, fish and dairy fillings at 4 °C or below, and label sandwiches containing allergens such as wheat, egg, milk, soy, sesame, fish and nuts.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Processing methods in the standard are slicing, mixing, grating, mashing, dicing and pulling, and finishing techniques are garnishing, packaging, presentation and cutting. A spread acts as a moisture barrier between bread and wet fillings.',
                                },
                            ],
                        },
                        {
                            id: 'ch34-s3',
                            title: '34.3 Cooking and Finishing Cooked Sandwiches (K-29.04)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Cooked Sandwich', 'Method', 'Key Points'],
                                    rows: [
                                        ['Grilled sandwich', 'Griddle or pan; bread is buttered and browned on both sides', 'Moderate heat so that the cheese melts before the bread burns'],
                                        ['Pizza', 'Baked in a hot oven', 'Do not overload the toppings; a hot oven gives a crisp base'],
                                        ['Quesadilla', 'Tortilla filled with cheese and fillings, folded and cooked on a griddle or in a pan', 'Cook until crisp and the cheese is melted, then cut into wedges'],
                                        ['Broiled (open-faced) sandwich', 'Cooked under a broiler', 'Watch closely to prevent burning'],
                                        ['Panini', 'Pressed and grilled between plates or a sandwich press', 'Gives grill marks and a crisp crust'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Tools and equipment: griddle, spatula, tongs, oven and pan.',
                                        'Cooking methods: grilling, baking, pan frying and broiling.',
                                        'Cook proteins such as burgers, chicken and sausages to a safe internal temperature before assembly: 71 °C for ground meat and 74 °C for poultry.',
                                        'Hold cooked sandwiches according to the recipe and regulations, hot at 60 °C or above, and serve promptly because bread turns soggy or hard.',
                                        'Finishing techniques: garnishing, packaging, presentation, cutting and applying sauces, condiments and accompaniments such as pickles, chips or salad.',
                                        'Jurisdictional regulations: WHMIS, HACCP, OH&S and public health regulations.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Griddles, panini presses and broilers cause burns. Use tongs and spatulas, keep your hands clear of the press, never leave a broiler unattended and watch for grease flare-ups. Melted cheese and hot fillings are very hot, so warn guests.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Cooked sandwiches in the standard are grilled, pizza, quesadilla, broiled and panini. Cooking methods are grilling, baking, pan frying and broiling, and the filling must reach a safe temperature.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 35 — SALADS (K-30)
                // ============================================================
                {
                    id: 'ch-35',
                    number: 35,
                    title: 'Salads',
                    subtitle: 'Task K-30 · Prepares salads (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 70,
                    sections: [
                        {
                            id: 'ch35-s1',
                            title: '35.1 Selecting Salad Ingredients (K-30.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Salads combine ingredients such as vegetables, fruit, grains, pastas, eggs, pulses, meat, fish, seafood and cheese, and may be served warm or cold. Most salads should be finished as close to serving time as possible unless they are marinated.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Salad Type', 'Examples in the Standard', 'Characteristics'],
                                    rows: [
                                        ['Cold salads', 'Caesar, bean, garden, coleslaw, chicken', 'Chilled, crisp and refreshing; dressed close to service or marinated'],
                                        ['Warm salads', 'Bowls, compound, potato', 'Served warm or at room temperature; dressings are often warm; ingredients may be cooked'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Salad Type', 'Description'],
                                    rows: [
                                        ['Garden salad', 'Mixed greens and raw vegetables with a dressing'],
                                        ['Caesar salad', 'Romaine lettuce with a creamy garlic, anchovy and lemon dressing, grated hard cheese and croutons'],
                                        ['Coleslaw', 'Shredded cabbage and carrots in a creamy or vinegar-based dressing'],
                                        ['Bean salad', 'Cooked pulses with vegetables in a vinaigrette'],
                                        ['Chicken salad', 'Cooked chicken bound with mayonnaise or dressing and mixed with vegetables or fruit'],
                                        ['Potato salad', 'Boiled potatoes dressed with mayonnaise or a vinaigrette, served cold or warm'],
                                        ['Compound salad', 'Several prepared ingredients arranged or combined, each dressed separately, such as a Niçoise or Cobb'],
                                        ['Bowl salad', 'Grains, proteins and vegetables served in a bowl'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Ingredient groups: vegetables, fruit, proteins, accompaniments, starches, grains, dressings, cheese, pulses and seeds.',
                                        'Identify freshness and quality by sensory assessment of hydration, colour, texture and best before dates: greens should be crisp and bright without browning, slime or wilting.',
                                        'Factors in selecting ingredients: integrity (whole, undamaged pieces), seasonality, texture, local availability, viscosity of dressings, shelf life and size.',
                                        'Dietary requirements: nuts, seeds, dairy, egg, fish (anchovy in Caesar dressing), gluten in croutons, vegetarian and vegan requests, and cultural, ethical, religious, health-related, environmental and personal preferences.',
                                        'Handle, hold and store ingredients properly: keep greens cold and dry, ready-to-eat items at 4 °C or below and cooked ingredients cooled quickly.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Cold salads in the standard are Caesar, bean, garden, coleslaw and chicken. Warm salads are bowls, compound and potato. Factors in ingredient selection include integrity, seasonality, texture, availability, viscosity, shelf life and size.',
                                },
                            ],
                        },
                        {
                            id: 'ch35-s2',
                            title: '35.2 Processing and Combining Salad Ingredients (K-30.02)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Method', 'Description', 'Key Points'],
                                    rows: [
                                        ['Cleaning', 'Washing greens and produce in cold water', 'Lift greens out of the water so that grit sinks; wash thoroughly'],
                                        ['Soaking', 'Soaking in ice water to crisp', 'Revives wilted greens such as lettuce and celery'],
                                        ['Cooking', 'Boiling, roasting or blanching ingredients such as potatoes, beans and beets', 'Cook until tender and cool quickly in cold water or on a tray'],
                                        ['Drying', 'Spinning or patting greens dry', 'Dry greens help dressing cling and prevent a watery salad'],
                                        ['Cutting', 'Cutting or tearing ingredients to size', 'Tear tender lettuces, cut firm vegetables to even sizes; bite-size pieces'],
                                        ['Straining', 'Draining cooked or canned ingredients', 'Prevents a diluted dressing'],
                                        ['Marinating', 'Soaking ingredients in dressing or acid before service', 'Used for bean, vegetable and pasta salads, which improve with time'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Knives and cutting boards', 'Cutting and preparing ingredients'],
                                        ['Salad spinner', 'Drying greens'],
                                        ['Mashers', 'Mashing potatoes and pulses for salads'],
                                        ['Pots', 'Cooking ingredients'],
                                        ['Food processors', 'Slicing and shredding in volume'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Combine salad ingredients according to the recipe and salad type: warm or cold, composed or tossed.',
                                        'Prepare garnishes according to the recipe, such as croutons, shaved cheese, toasted nuts and seeds, sliced fruit, herbs and crispy toppings.',
                                        'Select dressings for the desired result: a light vinaigrette for delicate greens, a creamy dressing for sturdy greens and coleslaw, and a warm dressing for wilted salads.',
                                        'Do not dress delicate greens until just before service, or they wilt and turn watery.',
                                        'Maintain safe handling procedures according to regulations: wash hands, use clean boards and utensils, and keep ready-to-eat salads cold at 4 °C or below.',
                                        'Processing factors: integrity, texture, viscosity, shelf life and size.',
                                        'Cook and cool potatoes, pasta, grain and egg salad ingredients quickly, chill them before mixing with mayonnaise and keep them cold.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Salads are not cooked after preparation, so any contamination stays in the food. Raw produce is a common source of E. coli, Salmonella and norovirus, so wash it well and keep it away from raw meat. Potato, egg, chicken and pasta salads made with mayonnaise must be kept at 4 °C or below. Label salads that contain allergens, including nuts, seeds, egg, milk, fish and gluten.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Processing methods in the standard are cleaning, soaking, cooking, drying, cutting, straining and marinating. Dry greens, dress at the last minute and keep mayonnaise-based salads cold.',
                                },
                            ],
                        },
                        {
                            id: 'ch35-s3',
                            title: '35.3 Finishing, Holding and Storing Salads (K-30.03)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Finishing Technique', 'Description'],
                                    rows: [
                                        ['Tossing', 'Gently mixing the salad and dressing so that every piece is lightly coated'],
                                        ['Dressing', 'Adding the dressing on top, on the side or tossed through'],
                                        ['Packaging', 'Placing salads in containers for takeout, with dressing separate to keep the salad crisp'],
                                        ['Garnishing', 'Adding decorative or flavourful elements'],
                                        ['Topping', 'Adding protein, cheese, seeds or other toppings on top'],
                                        ['Presentation', 'Arranging the salad attractively with height and colour'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Garnish or Accompaniment', 'Examples'],
                                    rows: [
                                        ['Grated cheese', 'Parmesan, aged cheddar, feta'],
                                        ['Seeds', 'Sunflower, pumpkin, sesame'],
                                        ['Nuts', 'Toasted almonds, walnuts, pecans'],
                                        ['Croutons', 'Toasted or fried seasoned bread cubes'],
                                        ['Fruit', 'Berries, apple, orange segments, dried fruit'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Select and use finishing tools and equipment, such as tongs, mixing bowls and plates, and chill plates and bowls for cold salads.',
                                        'Apply the correct amount of dressing: enough to coat lightly, never to drown the salad. Season with salt and pepper and adjust by sensory assessment.',
                                        'Finishing factors: integrity, texture, viscosity, shelf life, size, sensory assessment and seasoning.',
                                        'Hold and store finished salads according to the recipe, the desired results and regulations: refrigerate at 4 °C or below, and keep dressed salads for the shortest time possible.',
                                        'Warm salads are held hot at 60 °C or above, or served immediately, and not held for long.',
                                        'Know the procedures for handling, holding and storing finished salads, and the dietary requirements.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'A salad bar or buffet leaves ready-to-eat foods in the danger zone if it is not controlled. Keep cold items at 4 °C or below on ice or in cooled wells, protect them with sneeze guards, replace rather than top up containers, label allergens and discard food held beyond limits.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Finishing techniques in the standard are tossing, dressing, packaging, garnishing, topping and presentation. Garnishes include grated cheese, seeds, nuts, croutons and fruit. Pack dressing separately for takeout.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 36 — CONDIMENTS, PRESERVES AND DRESSINGS (K-31)
                // ============================================================
                {
                    id: 'ch-36',
                    number: 36,
                    title: 'Condiments, Preserves and Dressings',
                    subtitle: 'Task K-31 · Prepares condiments, preserves and dressings (3 exam questions)',
                    isFree: false,
                    estimatedMinutes: 75,
                    sections: [
                        {
                            id: 'ch36-s1',
                            title: '36.1 Types and Selection of Ingredients (K-31.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Condiments and dressings are often prepared in similar ways, but their uses differ. Dressings are associated with salads, while condiments accompany sandwiches, cheeses, charcuterie and hors d oeuvres. Preserves include pickled vegetables and preserved fruit.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Group', 'Type', 'Description and Examples'],
                                    rows: [
                                        ['Condiments', 'Dips', 'Thick, flavoured mixtures for dipping, such as hummus, tzatziki and guacamole'],
                                        ['Condiments', 'Relishes', 'Chopped vegetables or fruit in a sweet and sour liquid, such as corn relish and cucumber relish'],
                                        ['Condiments', 'Syrups', 'Sugar-based liquids, such as simple syrup, maple syrup and flavoured syrups'],
                                        ['Condiments', 'Salsas', 'Raw or cooked mixtures of chopped vegetables or fruit with acid, such as tomato salsa and mango salsa'],
                                        ['Preserves', 'Pickled vegetables', 'Vegetables preserved in an acidic brine'],
                                        ['Preserves', 'Jams', 'Crushed or chopped fruit cooked with sugar until thick and spreadable'],
                                        ['Preserves', 'Jellies', 'Fruit juice cooked with sugar and pectin until it sets into a clear gel'],
                                        ['Dressings', 'Oil-based', 'Oil with flavourings and seasonings, with or without acid'],
                                        ['Dressings', 'Emulsions', 'Stable mixtures of oil and a water-based liquid, such as mayonnaise and Caesar dressing'],
                                        ['Dressings', 'Vinaigrette', 'Oil and acid, commonly in a ratio of about 3 parts oil to 1 part vinegar, with seasonings'],
                                        ['Dressings', 'Warm dressings', 'Dressings served warm, such as a warm bacon vinaigrette'],
                                        ['Dressings', 'Dairy-based', 'Dressings using yogurt, sour cream, buttermilk or cream, such as ranch'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify and choose ingredients according to the recipe and the desired results, and judge freshness and quality by sensory assessment: hydration, colour, texture, aroma, best before date and flavour.',
                                        'Know the terminology, the types of condiments, preserves and dressings and their characteristics and applications.',
                                        'Dietary requirements: egg in mayonnaise, dairy in creamy dressings, fish in Caesar dressing and Worcestershire sauce, mustard, sesame, sulphites in vinegars and dried fruit, gluten in soy sauce, plus cultural, ethical, religious, health-related, environmental and personal preferences.',
                                        'Handle, hold and store ingredients properly, keeping perishable ingredients such as eggs and dairy at 4 °C or below.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Condiments in the standard are dips, relishes, syrups and salsas. Preserves are pickled vegetables, jams and jellies. Dressings are oil-based, emulsions, vinaigrette, warm dressings and dairy-based. Dressings go with salads, and condiments go with sandwiches, cheese, charcuterie and hors d oeuvres.',
                                },
                            ],
                        },
                        {
                            id: 'ch36-s2',
                            title: '36.2 Processing Dressings, Condiments and Preserves (K-31.02)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Technique', 'Description', 'Used For'],
                                    rows: [
                                        ['Chopping, dicing and cutting', 'Cutting ingredients to size', 'Relishes, salsas, pickles'],
                                        ['Mixing and blending', 'Combining ingredients, by hand or in a blender or food processor', 'Dips, salsas, dressings'],
                                        ['Cooking', 'Heating to blend flavours, reduce or set', 'Jams, jellies, syrups, cooked salsas'],
                                        ['Pickling', 'Preserving in an acidic brine, with salt, vinegar or both', 'Vegetables, fruit, eggs'],
                                        ['Fermenting', 'Using salt and bacteria to produce lactic acid', 'Sauerkraut, kimchi, fermented pickles'],
                                        ['Smoking', 'Flavouring with smoke', 'Smoked salsas, sauces and spreads'],
                                        ['Emulsifying', 'Forming a stable mixture of oil and water', 'Mayonnaise, aioli, creamy dressings'],
                                        ['Whisking', 'Beating to blend or aerate', 'Vinaigrettes and emulsions'],
                                        ['Portioning', 'Dividing into measured amounts', 'Serving and packaging'],
                                        ['Canning', 'Sealing food in jars and heating to destroy microorganisms', 'Jams, pickles, relishes'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Type of Dressing', 'How It Is Made', 'Key Points'],
                                    rows: [
                                        ['Vinaigrette (temporary emulsion)', 'Whisk acid, seasonings and mustard, then slowly add oil', 'Separates on standing; whisk again before serving; mustard helps hold it together'],
                                        ['Mayonnaise (permanent emulsion)', 'Whisk egg yolks, acid and seasonings, then add oil very slowly', 'Lecithin in egg yolk emulsifies the oil; add oil slowly; use pasteurized eggs where required; a broken emulsion can be rescued by whisking it into a fresh yolk'],
                                        ['Aioli', 'A garlic emulsion based on olive oil, with or without egg', 'Same method as mayonnaise'],
                                        ['Dairy-based dressing', 'Combine yogurt, sour cream, buttermilk or mayonnaise with herbs and seasonings', 'Keep refrigerated; the acid thickens the dairy'],
                                        ['Warm dressing', 'Heat fat, aromatics and vinegar and pour over the salad', 'Wilts greens slightly; serve right away'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Preserve', 'Method', 'Key Points'],
                                    rows: [
                                        ['Quick pickles', 'Pour a hot or cold brine of vinegar, water, salt and sugar over vegetables and refrigerate', 'Refrigerated, short shelf life'],
                                        ['Fermented pickles', 'Submerge vegetables in salt brine and let them ferment at room temperature', 'Keep vegetables under the brine; follow tested procedures'],
                                        ['Jam', 'Cook fruit with sugar until it thickens and gels', 'Pectin, sugar and acid are needed for a set; the gel point is about 104 to 105 °C'],
                                        ['Jelly', 'Cook strained fruit juice with sugar and pectin', 'Clear and firm'],
                                        ['Canned preserves', 'Fill sterilized jars, seal and process in a boiling water bath', 'Only high-acid foods (pH below 4.6) are safe to can in a boiling water bath'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Tools and equipment: mixers, pots, food processors, blenders, stove, whisk, double-boilers, thermometers, pressure cookers and knives.',
                                        'Apply flavouring, seasonings and thickening agents according to the recipe and desired results: acid, salt, sugar, herbs, spices, pectin, starch or reduction.',
                                        'Processing factors: mechanical application, type of ingredients, and holding time and temperature.',
                                        'Use safe handling procedures according to regulations, and hold and store condiments, preserves and dressings according to the recipe, desired results and regulations: refrigerated, covered, labelled and dated.',
                                        'Package in clean, sanitized containers, and use FIFO.',
                                        'Know the procedures for handling, holding, storing and packaging, and the dietary requirements.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example: Vinaigrette Quantity', 'Calculation'],
                                    rows: [
                                        ['Ratio of 3 : 1', 'For 2 L of vinaigrette, there are 4 parts in total; each part is 2 000 mL ÷ 4 = 500 mL'],
                                        ['Amounts', 'Oil = 3 × 500 mL = 1 500 mL; vinegar = 1 × 500 mL = 500 mL (before adding other seasonings)'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Home-style canning and low-acid preserves can cause botulism if they are not processed correctly. Use tested recipes, measured acid and the correct heat treatment, and never taste to check. Mayonnaise and other dressings made with raw egg must be made with pasteurized eggs where required, kept at 4 °C or below and discarded when the shelf life ends. Hot sugar syrups and jam cause severe burns, so use deep pots and long-handled tools.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Processing techniques in the standard are chopping, dicing, cutting, mixing, blending, cooking, pickling, fermenting, smoking, emulsifying, whisking, portioning and canning. A vinaigrette is a temporary emulsion, mayonnaise is a permanent emulsion and egg yolk lecithin is the emulsifier. Only high-acid foods are safe for a boiling water bath.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // ============================================================
        // STEP 2C — PART 12 FRAGMENT (MWA L: Specialty preparations)
        // Paste this object inside the `parts: [ ... ]` array of cookCourse, after Part 11.
        // Source: Red Seal Occupational Standard (RSOS) Cook 2020, tasks L-32, L-33, L-34 and L-35.
        // ============================================================
        {
            id: 'part-12',
            number: 12,
            title: 'Specialty Preparations (MWA L)',
            description: 'Hors d oeuvres and finger foods from canapés to sushi, satays and dim sum; charcuterie and cured products including forcemeats, terrines, pâtés, sausages and smoked and fermented items; gels and glazes such as aspic, gelatin, agar, pectin and fluid gels; and marinades, rubs and brines. MWA L carries 8 exam questions across tasks L-32, L-33, L-34 and L-35.',
            weight: '8 questions (5.3% of Total Exam)',

            chapters: [

                // ============================================================
                // CHAPTER 37 — HORS D OEUVRES AND FINGER FOODS (L-32)
                // ============================================================
                {
                    id: 'ch-37',
                    number: 37,
                    title: 'Hors d Oeuvres and Finger Foods',
                    subtitle: 'Task L-32 · Prepares hors d oeuvres and other finger foods (2 exam questions)',
                    isFree: false,
                    estimatedMinutes: 65,
                    sections: [
                        {
                            id: 'ch37-s1',
                            title: '37.1 Selecting and Processing Ingredients (L-32.01 and L-32.02)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Hors d oeuvres and finger foods are savoury hot and cold bite-sized items made from meat, fish, seafood, grains, vegetables, fruit and breads. Cultural influences extend the category to items such as sushi, spring rolls, spanakopita, satays and dim sum. They must be attractive, easy to eat in one or two bites and safe to hold.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Item', 'Description', 'Notes'],
                                    rows: [
                                        ['Canapés', 'Small bases (bread, crackers, pastry, vegetable slices) topped with a spread and garnish', 'Hot or cold; base must stay crisp; cut and assemble close to service'],
                                        ['Sushi', 'Seasoned rice rolled or shaped with fish, seafood, vegetables or other fillings', 'Rice is seasoned with vinegar; raw fish must be handled and frozen according to regulations'],
                                        ['Satays', 'Skewered marinated meat, poultry or seafood, grilled', 'Usually served with a peanut or other dipping sauce; soak bamboo skewers first'],
                                        ['Dim sum', 'Chinese bite-sized steamed, fried or baked items, such as dumplings and buns', 'Steamed in bamboo baskets or fried'],
                                        ['Spring rolls and spanakopita', 'Filled, wrapped and baked or fried pastries', 'Seal wrappers well and keep phyllo covered'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Ingredient or Component', 'Examples'],
                                    rows: [
                                        ['Pastry shells', 'Vol-au-vent, tart shells'],
                                        ['Breads and crackers', 'Toast points, baguette slices, crostini, crackers'],
                                        ['Rice and grains', 'Sushi rice, rice paper'],
                                        ['Edible wrapping', 'Phyllo, wonton and spring roll wrappers, rice paper, nori, lettuce leaves'],
                                        ['Meats, vegetables, fruit and cheeses', 'Fillings and toppings'],
                                        ['Garnish', 'Herbs, micro greens, caviar, edible flowers'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Processing Method', 'Description'],
                                    rows: [
                                        ['Wrapping', 'Enclosing a filling in a wrapper or edible covering'],
                                        ['Mixing and blending', 'Combining spreads, fillings and farces'],
                                        ['Folding', 'Gently combining mixtures or folding pastry around a filling'],
                                        ['Cutting', 'Shaping bases and ingredients to uniform bite-sized pieces'],
                                        ['Baking, poaching and frying', 'Cooking components such as pastry cases, fillings and proteins'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Check freshness and quality by sensory assessment: hydration, colour, texture, aroma, best before date and flavour.',
                                        'Market forms: fresh or frozen. Prepared and packaged items such as frozen pastry cups and frozen dim sum can save time and give consistency.',
                                        'Selection factors: seasonality, style of service, availability, price and available resources.',
                                        'Processing factors: texture, flavour, type of service and available resources.',
                                        'Tools and equipment: food processors, cutting boards, knives, pans, bowls and stove.',
                                        'Store ingredients and components for future assembly according to regulations: keep fillings cold at 4 °C or below, keep bases dry and assemble as late as possible.',
                                        'Dietary requirements: gluten in wrappers and bases, shellfish, nuts, egg and dairy; label items clearly and offer vegetarian, vegan and gluten-free options.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'The items named in the standard are canapés, sushi, satays and dim sum. Processing methods are wrapping, mixing, folding, baking, cutting, poaching, frying and blending, and selection factors are seasonality, style of service, availability, price and available resources.',
                                },
                            ],
                        },
                        {
                            id: 'ch37-s2',
                            title: '37.2 Assembling, Cooking and Finishing Finger Foods (L-32.03 to L-32.05)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Assembly Method', 'Description', 'Example'],
                                    rows: [
                                        ['Wrapping', 'Enclosing a filling in a wrapper', 'Spring rolls, sushi rolls with a bamboo mat'],
                                        ['Stacking', 'Layering components', 'Layered canapés, vegetable towers'],
                                        ['Spreading', 'Applying a spread to a base', 'Canapés, crostini'],
                                        ['Breading', 'Coating in flour, egg and crumbs', 'Fried croquettes, breaded bites'],
                                        ['Brushing', 'Applying egg wash, oil or glaze', 'Pastries before baking'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Assembly tools and equipment: knives, skewers, toothpicks, bamboo mats, tongs, cutting boards and portioning scoops.',
                                        'Assembly factors: kitchen space, available resources, time management, timing and temperature. Plan production in order, prepare cold items first and cook hot items last.',
                                        'Cooking methods for finger foods: baking, frying, broiling and steaming. Calculate cooking time by item type, size, thickness and method.',
                                        'Determine doneness by temperature readings and sensory assessment, and check that fillings with meat, poultry, seafood or egg reach a safe temperature (74 °C for poultry fillings, 71 °C for ground meat).',
                                        'Finish by applying seasoning, sauce, condiments and garnish. Techniques: plating, traying, garnishing, tossing, saucing and glazing.',
                                        'Present items according to the desired results and the style of service: passed (carried on trays by staff to guests) or stationed (displayed at a table or station).',
                                        'Hold items according to regulations, hot at 60 °C or above and cold at 4 °C or below, and replenish in small batches so that no item sits out for too long.',
                                        'Factors in finishing: integrity (the item holds together) and temperature.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Style of Service', 'Description', 'Considerations'],
                                    rows: [
                                        ['Passed', 'Servers carry trays to guests', 'Items must be small, neat and eaten without a plate; provide napkins and a place to put picks'],
                                        ['Stationed', 'Items displayed on a table or station for guests to take', 'Needs sneeze guards, temperature control, labels and regular replenishment'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Finger foods are handled many times and often held for hours at events. Use temperature controls, never hold food in the danger zone for more than 2 hours in total, label allergens and use tongs or gloves. Skewers, picks and bamboo mats can injure guests, so count and remove them. Handle sushi rice carefully, because acidified rice must be controlled to remain safe.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Styles of service are passed and stationed. Finishing techniques are plating, traying, garnishing, tossing, saucing and glazing, and assembly methods are wrapping, stacking, spreading, breading and brushing.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 38 — CHARCUTERIE AND CURED PRODUCTS (L-33)
                // ============================================================
                {
                    id: 'ch-38',
                    number: 38,
                    title: 'Charcuterie and Cured Products',
                    subtitle: 'Task L-33 · Prepares charcuterie and cured products (2 exam questions)',
                    isFree: false,
                    estimatedMinutes: 75,
                    sections: [
                        {
                            id: 'ch38-s1',
                            title: '38.1 Charcuterie Products and Selecting Ingredients (L-33.01)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Charcuterie covers products made by preserving meat, fin fish and seafood through aging, drying, smoking and curing. They can be served hot or cold. Safe production depends on strict control of temperature, time, humidity and hygiene.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Product', 'Description'],
                                    rows: [
                                        ['Forcemeat (farce)', 'A smooth or coarse emulsified mixture of ground meat, fat and seasonings; the base for pâtés, terrines and sausages'],
                                        ['Terrine', 'A forcemeat or layered mixture cooked in a mould (also called a terrine), served cold, usually sliced'],
                                        ['Pâté', 'A seasoned meat mixture, baked in a mould or crust (pâté en croûte), served hot or cold'],
                                        ['Galantine', 'A boned bird or meat stuffed with forcemeat, rolled, poached and served cold, often with aspic'],
                                        ['Ballotine', 'A boned and stuffed leg or piece of poultry, tied and poached, braised or roasted'],
                                        ['Sausages', 'Ground, seasoned meat stuffed into casings; fresh, smoked, cooked or dry-cured'],
                                        ['Variety meats', 'Liver and other organs used in pâtés, mousses and sausages'],
                                        ['Smoked and fermented meat', 'Meats preserved with smoke or by controlled fermentation, such as salami'],
                                        ['Fin fish, seafood and poultry', 'Cured or smoked items such as gravlax, smoked salmon and smoked chicken'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Identify quality by sensory assessment: hydration, colour, texture and aroma. Use very fresh, cold meat and fat, because poor ingredients cannot be corrected later.',
                                        'Selection factors: quality, storage life, cost, fat yield and meat yield. Forcemeats generally need 20 to 30% fat for moisture and texture.',
                                        'Identify classifications and their characteristics, and know the dietary requirements: pork, alcohol in some recipes, allergens such as milk, wheat and nuts, and cultural, ethical, religious and health-related needs.',
                                        'Handle ingredients so that the meat stays at or below 4 °C, and chill grinder parts and bowls before use.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Products named in the standard are forcemeats, terrines, pâtés, galantines and ballotines, sausages, variety meats, smoked and fermented meat, fin fish, seafood and poultry. A galantine is poached and served cold, and a ballotine is a boned, stuffed leg or portion.',
                                },
                            ],
                        },
                        {
                            id: 'ch38-s2',
                            title: '38.2 Processing, Cooking and Finishing Charcuterie (L-33.02 to L-33.04)',
                            content: [
                                {
                                    type: 'table',
                                    headers: ['Tool or Equipment', 'Use'],
                                    rows: [
                                        ['Meat grinder', 'Grinds meat and fat to the correct texture'],
                                        ['Meat slicer', 'Slices cooked or cured products evenly'],
                                        ['Cutters', 'Cut meat, fat and garnishes'],
                                        ['Sausage press', 'Stuffs forcemeat into casings'],
                                        ['Terrine moulds', 'Shape terrines and pâtés'],
                                        ['Food processors', 'Emulsify forcemeats and mousses'],
                                        ['Smokers', 'Smoke and cook or cure products'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Method', 'Description'],
                                    rows: [
                                        ['Curing', 'Preserving with salt, sugar, spices and often nitrite; draws out moisture and slows bacterial growth'],
                                        ['Smoking', 'Exposing to smoke; cold smoking flavours and preserves at low temperatures, hot smoking cooks the product'],
                                        ['Drying', 'Removing moisture under controlled temperature and humidity'],
                                        ['Chopping and grinding', 'Reducing meat and fat to particle size'],
                                        ['Emulsifying', 'Blending ground meat, fat and liquid into a stable, smooth mixture'],
                                        ['Marinating and soaking', 'Flavouring or rehydrating ingredients'],
                                        ['Shaping and moulding', 'Forming terrines, pâtés and galantines'],
                                        ['Fermenting', 'Using bacterial cultures to lower pH and develop flavour and safety in products such as salami'],
                                        ['Stuffing', 'Filling casings or boned meats with forcemeat'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Combine ingredients, seasonings, preservatives and garnishes according to the recipe. Weigh salt and curing agents accurately.',
                                        'Indicators to monitor in curing, smoking and fermenting: temperature, time, humidity, pH activity and dehydration. Know the temperature and environmental controls required by regulations for curing, smoking and fermenting.',
                                        'Keep forcemeat cold while grinding and mixing so that the fat does not smear and the emulsion does not break. If the mixture warms above about 10 to 12 °C, the fat melts out and the texture becomes greasy.',
                                        'Cooking methods: curing, poaching, baking, smoking and drying. Tools: smokers, ovens, grills, thermal circulators and refrigerators.',
                                        'Bake terrines and pâtés in a water bath (bain-marie) at a low temperature so that they cook gently and evenly, and press them while they cool to give a dense, sliceable texture.',
                                        'Determine doneness according to regulations, sensory assessment and indicators. Cook pork and ground meat items to 71 °C and poultry items to 74 °C, according to regulations.',
                                        'Cool cooked products rapidly, and store them covered, labelled and dated at 4 °C or below.',
                                        'Finishing: garnish and glaze pâtés and terrines (with aspic), fill, present, remove casings and membranes where needed, and cut and slice neatly.',
                                        'Secondary cooking methods for select products: frying, broiling, grilling, poaching and baking, such as grilling a fresh sausage or pan-frying a slice of pâté.',
                                        'Know the styles of service, carving and slicing procedures and the handling and storage of finished products.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Problem', 'Cause', 'Prevention'],
                                    rows: [
                                        ['Greasy, broken forcemeat', 'Mixture too warm, fat smeared, overmixed', 'Keep meat, fat and equipment very cold'],
                                        ['Dry, crumbly pâté or sausage', 'Too little fat, or overcooked', 'Use enough fat and cook to temperature, not time'],
                                        ['Shrunken terrine with fat and juices around it', 'Cooked too hot or too fast', 'Bake in a water bath at a gentle temperature'],
                                        ['Grey colour in cured meat', 'Not enough curing agent or oxidation', 'Measure curing agent accurately and protect from air'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Curing, smoking and fermenting meat can cause botulism, Listeria and other serious illnesses if controls fail. Use tested recipes, measure salt and curing salts (nitrite) exactly, because too much is toxic, and follow the temperature, humidity and time limits of the regulations. Keep curing salts clearly labelled and away from table salt, and never leave smokers unattended.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Indicators for curing, smoking and fermenting are temperature, time, humidity, pH activity and dehydration. Keep forcemeat cold, bake terrines in a water bath and cool them under a press. Curing methods in the standard are curing, poaching, baking, smoking and drying.',
                                },
                            ],
                        },
                    ],
                },

                // ============================================================
                // CHAPTER 39 — GELS, GLAZES, MARINADES, RUBS AND BRINES (L-34 and L-35)
                // ============================================================
                {
                    id: 'ch-39',
                    number: 39,
                    title: 'Gels, Glazes, Marinades, Rubs and Brines',
                    subtitle: 'Tasks L-34 and L-35 · Gelling agents, glazes, marinades, rubs and brines (4 exam questions)',
                    isFree: false,
                    estimatedMinutes: 75,
                    sections: [
                        {
                            id: 'ch39-s1',
                            title: '39.1 Gels (L-34)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Gels are finished products used to complement dishes and in entrées, appetizers and desserts. They are set with animal-based gelatin or plant-based sources such as agar agar. Glazes are shiny coatings applied to foods to enhance appearance and flavour and to protect and preserve quality.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Gelling Agent', 'Source', 'Characteristics'],
                                    rows: [
                                        ['Gelatin (powdered and sheet)', 'Animal collagen', 'Sets when cooled, melts at body temperature, thermoreversible; gives a tender, elastic gel; not suitable for vegetarian, vegan, halal or kosher diets unless specially sourced'],
                                        ['Agar agar', 'Seaweed', 'Plant-based; must be boiled to activate; sets at a higher temperature (about 35 to 40 °C) and firmer and more brittle than gelatin; heat stable'],
                                        ['Pectin', 'Fruit', 'Needs sugar and acid to set; used in jams, jellies and glazes'],
                                        ['Chia seeds', 'Plant seeds', 'Absorb liquid to form a soft gel; used in puddings and jams'],
                                        ['Xanthan gum', 'Fermentation product', 'Thickens and stabilizes liquids, even cold; used for fluid gels and sauces'],
                                        ['Guar gum', 'Plant seed', 'Thickener and stabilizer; works in cold liquids'],
                                        ['Locust bean gum', 'Plant seed', 'Thickener that needs heating; often combined with other gums'],
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Type of Gel', 'Description', 'Examples'],
                                    rows: [
                                        ['Aspic', 'A savoury gel made from clarified stock', 'Coating or filling for terrines, galantines and cold platters'],
                                        ['Gelatin gel', 'A sweet or savoury gel set with gelatin', 'Gelatin desserts, gelatin salads, panna cotta'],
                                        ['Pectin gel', 'A gel set with fruit pectin', 'Jams, jellies, fruit glazes'],
                                        ['Fluid gel', 'A gel that is sheared (blended) while setting to form a smooth, pourable sauce-like texture', 'Plated sauces and purées'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Selection factors: flexibility, pH, heat stability and temperature. Acidic ingredients weaken gelatin, and some fresh fruits (pineapple, kiwi, papaya, fresh figs) contain enzymes that prevent gelatin from setting unless they are cooked first.',
                                        'Quality indicators: hydration, colour, texture, aroma and taste.',
                                        'Tools and equipment: bain-marie, pots, whisks, knives, bowls, juicers and blenders.',
                                        'Methods: mixing, blooming and heating. Bloom gelatin by soaking powdered gelatin in cold liquid (about 5 times its weight) or sheet gelatin in cold water until soft, then dissolve it gently in warm liquid. Do not boil gelatin, because it weakens its setting power.',
                                        'Factors in processing: time, temperature and viscosity. Gels need enough time in the refrigerator to set fully.',
                                        'Finishing tools: brushes, bain-marie and bowls. Methods: combining, cutting, portioning, presenting and unmoulding. To unmould, dip the mould briefly in warm water and invert onto a plate.',
                                        'Hold and store gels covered and refrigerated at 4 °C or below, according to the recipe and regulations. Agar gels hold at room temperature better than gelatin.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Glaze Type', 'Description', 'Examples'],
                                    rows: [
                                        ['Sweet glaze', 'A shiny coating with sugar, such as fruit, syrup or chocolate', 'Apricot glaze on tarts, sugar glaze on pastries'],
                                        ['Savoury glaze', 'A shiny coating from reduced stock, aspic or sauce', 'Meat glaze (glace), aspic on a terrine, glazed vegetables'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Apply glazes with a brush while the glaze is warm and fluid, in a thin, even layer, and use temperature to control viscosity and shine.',
                                        'Keep a glaze warm in a bain-marie while working, and reheat gently if it sets.',
                                        'Dietary requirements: gelatin is animal-derived, so offer agar or pectin for vegetarian, vegan, halal and kosher guests; check glazes for alcohol and allergens.',
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Gelatin comes from animals and agar agar from seaweed. Bloom gelatin in cold liquid and do not boil it. Fresh pineapple, kiwi and papaya stop gelatin from setting. Gels in the standard are aspics, gelatin, pectin and fluid gels, and glazes are sweet or savoury.',
                                },
                            ],
                        },
                        {
                            id: 'ch39-s2',
                            title: '39.2 Marinades, Rubs and Brines (L-35)',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Marinades enhance flavour and tenderize, and are usually made from oils, acids and flavourings. Rubs are dry marinades made of seasonings that enhance flavour. Brines are made from liquid, flavourings and salt, and are used to cure and preserve meat, seafood and fin fish.',
                                },
                                {
                                    type: 'table',
                                    headers: ['Type', 'Subtype', 'Description'],
                                    rows: [
                                        ['Marinade', 'Vinegar-based', 'Acid from vinegar with oil and flavourings; flavourful but can toughen the surface if left too long'],
                                        ['Marinade', 'Salt-based', 'Soy sauce, fish sauce or salt for seasoning'],
                                        ['Marinade', 'Fruit-based', 'Citrus, pineapple or other fruit juices; enzymes in some fruit tenderize quickly and can turn meat mushy'],
                                        ['Marinade', 'Alcohol-based', 'Wine, beer or spirits for flavour'],
                                        ['Rub', 'Dry seasoning', 'Blend of salt, herbs and spices'],
                                        ['Rub', 'Pastes', 'Seasonings blended with oil, garlic or herbs into a paste'],
                                        ['Rub', 'Mustard-based', 'Mustard used as a binder and flavour'],
                                        ['Rub', 'Sugar-based', 'Sugar with spices; promotes browning and caramelization, so watch for burning'],
                                        ['Brine', 'Salt solution', 'Salt (and often sugar) dissolved in water with flavourings'],
                                    ],
                                },
                                {
                                    type: 'list',
                                    items: [
                                        'Choose the marinade, rub or brine according to the type of protein, vegetable or fruit, the recipe and the desired results.',
                                        'Selection factors: product availability, time, quality, function and moisture content.',
                                        'Typical marinade ratio is about 3 parts oil to 1 part acid with seasonings and aromatics. Know the ingredients and ratios used.',
                                        'A common brine is about 5 to 6% salt, such as 50 to 60 g of salt per litre of water, often with sugar and aromatics. Cool a hot brine fully before adding raw meat.',
                                        'Prepare and measure ingredients according to the recipe. Use non-reactive tools and containers (stainless steel, glass or plastic), not aluminum or copper, because acids and salt react with them.',
                                        'Processing methods: combining, heating, dissolving and cooling. Processing factors: time, quality, function, moisture content, temperature, assembly sequence, container selection and application method.',
                                        'Marinate in the refrigerator at 4 °C or below, and keep the time within the recipe: fish and seafood for minutes to an hour, poultry for hours and tough meats longer, because acid can cook and toughen delicate foods.',
                                        'Use safe handling procedures to avoid cross-contamination: use separate containers and utensils for raw products. Never reuse a marinade that held raw meat, poultry or fish as a sauce unless it is boiled first; reserve a portion before it contacts raw product if it will be used as a sauce.',
                                        'Hold and store marinades, rubs and brines according to the recipe and regulations: label, date and refrigerate marinades and brines, and keep dry rubs in sealed containers in a cool, dry place.',
                                        'Dietary requirements: soy, wheat, mustard, sesame, sulphites, alcohol, and cultural, ethical, religious, health-related, environmental and personal preferences.',
                                    ],
                                },
                                {
                                    type: 'table',
                                    headers: ['Worked Example: Brine Quantity', 'Calculation'],
                                    rows: [
                                        ['Brine for 10 L at 5% salt', '5% of 10 000 g of water = 500 g of salt'],
                                        ['Sugar at 2.5% (optional)', '2.5% of 10 000 g = 250 g of sugar'],
                                    ],
                                },
                                {
                                    type: 'callout',
                                    style: 'warning',
                                    text: 'Raw meat, poultry and fish juices in marinades and brines spread bacteria. Marinate in covered, labelled, non-reactive containers on the lower shelf of the refrigerator, wash and sanitize everything that touched the raw product and never reuse the liquid unless it has been boiled. Do not apply a sweet rub to a hot, open flame for long, because it burns and forms harmful charred compounds.',
                                },
                                {
                                    type: 'callout',
                                    style: 'exam-tip',
                                    text: 'Marinades use oil, acid and flavourings. A rub is a dry marinade, and a brine is salted water used to cure and preserve. Use non-reactive containers, keep everything refrigerated and never reuse raw marinade as a sauce without boiling it.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },

    ]
}