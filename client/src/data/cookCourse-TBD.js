// ============================================================
// STEP 2B — PART 1 FRAGMENT (MWA A: Hygiene, sanitation and safety)
// Paste this object inside the `parts: [ ... ]` array of cookCourse.
// Source: Red Seal Occupational Standard (RSOS) Cook 2020; Appendix C Glossary; exam-information page.
// ============================================================
const cookCourse = {

    parts: [
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

    ]}