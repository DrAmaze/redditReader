import superagent from 'superagent';

import {
  writeResponseToFile,
} from './helpers';

import {
  getBarcaGames,
} from './matchLogic';

export default async function getGameData() {
  try {
    const response = (
      await superagent
       .get(process.env.BARCA_FIXTURES_API)
       .set('X-Auth-Token', process.env.FOOTBALL_DATA_API_KEY)
       .set('X-Response-Control', 'minified')
       .set('Accept', 'application/json')
    );
    const responseBody = response.body;
    writeResponseToFile(responseBody);
    getBarcaGames(responseBody);
  }
  catch (error) {
    console.log('>> some error', error);
  }
}
