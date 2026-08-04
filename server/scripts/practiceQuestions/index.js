/**
 * Practice questions by trade — single entry point for the seed script.
 * Combines all per-trade question arrays and provides TRADE_TOPICS + getTopicLabel.
 */

import { TRADE_TOPICS, getTopicLabel } from './tradeTopics.js';
import carpenterQuestions from './carpenter.js';
import constructionElectricianQuestions from './constructionElectrician.js';
import plumberQuestions from './plumber.js';
import hairstylistQuestions from './hairstylist.js';
import hvacQuestions from './hvac.js';
import welderQuestions from './welder.js';
import autoservtechQuestions from './autoservtech.js';

export { TRADE_TOPICS, getTopicLabel };

/** All practice questions: carpenter, then construction-electrician, then plumber, then hairstylist */
export const QUESTIONS = [
  ...carpenterQuestions,
  ...constructionElectricianQuestions,
  ...plumberQuestions,
  ...hairstylistQuestions,
  ...hvacQuestions,
  ...welderQuestions,
  ...autoservtechQuestions
];
