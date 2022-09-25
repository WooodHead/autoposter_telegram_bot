/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const dotenv = require('dotenv')
dotenv.config({ path: `./.env` })

module.exports = {
  apps: [{
    name: 'tg-bot',
    script: 'bundle.js',
    env: {
      BOT_TOKEN: process.env.BOT_TOKEN,
      HASURA_ENDPOINT: process.env.HASURA_ENDPOINT,
      HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
      FREEKASSA_ENDPOINT: process.env.FREEKASSA_ENDPOINT,
      FREEKASSA_API_KEY: process.env.FREEKASSA_API_KEY,
      FREEKASSA_SHOP_ID: process.env.FREEKASSA_SHOP_ID,
      FREEKASSA_SECRET_ONE: process.env.FREEKASSA_SECRET_ONE
    },
  }]
}
