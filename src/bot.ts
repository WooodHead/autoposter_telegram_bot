import * as dotenv from 'dotenv';
dotenv.config();
import { session, Telegraf } from 'telegraf';
import balanceScene from './controllers/balance-controller';
import { Authenticate } from './middlewares/authenticate';
import { mainButtons, mainKeyboard } from './utils/keyboards/main-keyboard';
import { Scenes } from 'telegraf';
import serviceType from './controllers/service-type-controller';
import { orderAdsPostWizard } from './scenes/order-ads-post';

const bot = new Telegraf<Scenes.SceneContext>(process.env.BOT_TOKEN);

const stage = new Scenes.Stage<Scenes.SceneContext>([balanceScene, serviceType, orderAdsPostWizard]);




bot.use(session())
bot.use(stage.middleware());
bot.use(Authenticate);




bot.hears("🔍 Заказать услуги рекламы", ctx => ctx.scene.enter("SERVICE_TYPE_ID"));
bot.hears("☸ Баланс", (ctx) => ctx.scene.enter("BALANCE_SCENE_ID"))
bot.hears(mainButtons[2], ctx => ctx.reply("По любому вопросу вы можете написать нашему администратору @ivanchinalex"))

bot.on('text', (ctx) => {
    ctx.reply(`Привет, ${ctx.state.user.first_name}!`, mainKeyboard);
});

// registerAdsChatCallbacks()



bot.launch();



