# Automotive Service Technician Production Launch Steps

This document lists the steps required to make the new Automotive Service Technician course live in production.

## 1. Confirm client registration

1. Add/verify `client/src/data/autoservtechCourse.js` exists and exports the course object.
2. Register the course in `client/src/data/courseContent.js`:
   - import the course: `import { autoservtechCourse } from './autoservtechCourse';`
   - add it to `coursesByLang.en` (and other language maps if you add translations).
   - add `'autoservtech'` to `COURSE_SLUGS`.
3. Confirm the course appears on course listing pages and selection lists by being included in `COURSE_SLUGS`.

## 2. Add trade guide registration

The purchase page route uses `client/src/data/tradeGuides.js` to resolve `/trades/:tradeSlug`.

1. Add an `autoservtech` entry to `client/src/data/tradeGuides.js`:
   - `slug: 'autoservtech'`
   - `courseSlug: 'autoservtech'`
   - `tradeName: 'Automotive Service Technician'`
   - `tradeCode: '310S'`
   - `examQuestions: 125`
   - `passMark: 70`
   - `apprenticeshipHours`, `apprenticeshipLevels`, `examWeighting`, `faqs`, and `topStudyTips`
2. If you want a guide/SEO page at `/trades/autoservtech-red-seal`, also add the trade to `client/src/data/tradeGuideContent.js`.

## 3. Register server course seed data

1. Add a course object to `server/data/seedCourses.js` with:
   - `slug: 'autoservtech'`
   - `title`, `subtitle`, `description`, `trade`, `tradeCode`, `price`, `currency`, `totalChapters`, `totalQuestions`, `isPublished: true`, and `features`.
2. Ensure the course data matches your frontend course object where relevant.

## 4. Confirm practice question seed support

1. Verify `server/scripts/practiceQuestions/autoservtech.js` contains your question data.
2. Confirm `server/scripts/practiceQuestions/index.js` imports and includes `autoservtechQuestions` in `QUESTIONS`.
3. Update backend practice route mappings in `server/routes/practice.js`:
   - add `autoservtech: 'autoservtech'` to `TRADE_SLUG_TO_COURSE_SLUG`.
   - add `autoservtech: 125` to `EXAM_QUESTIONS_BY_TRADE`.

## 5. Optional: Add study-plan support

If you want the course to appear in study plan generation with custom phases, add a key to `server/config/studyPlanPhases.js`:

```js
'autoservtech': [
  { title: 'Safety and fundamentals', key: 'safety-fundamentals' },
  { title: 'Vehicle systems and diagnostics', key: 'systems-diagnostics' },
  { title: 'Powertrain, brakes, and HVAC', key: 'powertrain-brakes-hvac' },
  { title: 'Practice exams and review', key: 'practice-exams' },
],
```

If you skip this, the app will use `DEFAULT_STUDY_PLAN_PHASES`.

## 6. Seed the production database

From the `server/` folder:

```bash
cd server
npm install
npm run seed:course -- --slug autoservtech
```

Then seed practice questions:

```bash
cd server
node scripts/seedPracticeQuestions.js
```

If practice questions already exist and need replacement, use:

```bash
cd server
DROP=1 node scripts/seedPracticeQuestions.js
```

or

```bash
cd server
node scripts/seedPracticeQuestionsReplace.js
```

## 7. Deploy to production

Follow your existing production deployment flow:

1. Push the updated code to the production branch.
2. Deploy the backend to your production host.
3. Deploy the frontend to Vercel (or your frontend host).
4. Ensure production environment variables are correct:
   - backend: `MONGO_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `CLIENT_URL`, `NODE_ENV=production`
   - frontend: `VITE_API_URL`, `VITE_STRIPE_PUBLISHABLE_KEY`

## 8. Verify in production

1. Visit the purchase page: `https://<your-site>/trades/autoservtech`
2. If you added a guide, visit: `https://<your-site>/trades/autoservtech-red-seal`
3. Verify the API practice endpoint works:
   - `GET https://<api-url>/api/practice/autoservtech/questions`
4. Verify the new course appears in the courses list and study plan dropdown.

## 9. Notes

- If the frontend does not list the course, the most likely missing step is adding `'autoservtech'` to `COURSE_SLUGS` in `client/src/data/courseContent.js`.
- If `/trades/autoservtech` returns Not Found, the missing item is the `tradeGuides.js` registration.
- If course purchase access fails or practice gating is wrong, the missing step is the `server/routes/practice.js` mapping.
