const cron = require('node-cron');
const { User } = require('./models');

var task = cron.schedule('* * * * * *', async () => {
    console.log("Cron Job Demo");

    try {
        const user = await User.findAll();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
});

module.exports = task;