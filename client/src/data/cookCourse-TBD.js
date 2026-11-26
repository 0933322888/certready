
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
    ]
}