const connection = require('./db-connection');
const { Game, Publisher, Platform } = require('./models.js');

// Immediately invoked function expression IIFE (iffy)
(async function () {
    try {
        let publishers = await Publisher.findAll();
        for (let publisher of publishers) {
            console.log(`${publisher.publisherId} ${publisher.publisherName}`);
        }
    } catch(error) {
        console.error('Something went wrong with the database: ', error);
    }

    try {
        let platforms = await Platform.findAll();
        for(let platform of platforms) {
            console.log(`${platform.platformId} ${platform.platformName}`);
        }
    } catch(error) {
        console.error('Something went wrong with the database: ', error);
    }

    try {
        let games = await Game.findAll();
        for (let game of games) {
            console.log(`${game.title} ${game.releaseDate} ${game.publisherId}`);
            let platforms = await game.getPlatforms();
            let platformNames = platforms.map((platform) => platform.platformName);
            console.log('\tPlatforms: ', platformNames);
        }
    } catch(error) {
        console.error('Something went wrong with the database: ', error);
    }

    connection.close();
});