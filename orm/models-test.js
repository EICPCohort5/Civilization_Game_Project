const connection = require('./db-connection');
const { Game, Publisher, Platform, PlatformsGames } = require('./models.js');

// Immediately invoked function expression IIFE (iffy)
(async function () {
    try {
        let publishers = await Publisher.findAll();
        for (let publisher of publishers) {
            let games = await publisher.getGames();
            console.log(`*******Publisher: ${publisher.publisherId} ${publisher.publisherName} ${games.map((game) => game.title)}`);
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
            let publisher = await game.getPublisher()
            console.log(`${game.title} ${game.releaseDate} ${game.publisherId} ${publisher.publisherName}`);
            let platforms = await game.getPlatforms();
            let platformNames = platforms.map((platform) => platform.platformName);
            console.log('\tPlatforms: ', platformNames);
        }
    } catch(error) {
        console.error('Something went wrong with the database: ', error);
    }

    try {
        let pg = await PlatformsGames.findAll();
        for(let rel of pg) {
            console.log(`${rel.platformId} ${rel.gameId}`);
        }
    } catch(error) {
        console.error('Something went wrong with the database: ', error);
    }

    connection.close();
})();