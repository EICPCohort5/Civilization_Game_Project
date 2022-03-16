const { DataTypes } = require('sequelize');
const connection = require('./db-connection');

const Publisher = connection.define(
    'Publisher',
    {
        publisherId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        publisherName: { type: DataTypes.STRING, allowNull: false }
    },
    {
        underscored: true,
        timestamps: false
    }
);

const Platform = connection.define(
    'Platform',
    {
       platformId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        platformName: { type: DataTypes.STRING, allowNull: false }
    },
    {
        underscored: true,
        timestamps: false
    }
);

const Game = connection.define(
    'Game',
    {
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: { type: DataTypes.STRING, allowNull: false },
        releaseDate: DataTypes.DATEONLY,
        publisherId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Publisher,
                key: 'publisherId'
            }
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

const PlatformsGames = connection.define(
    'PlatformsGames',
    {
        platformId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Platform,
                key: 'platformId'
            }
        },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Game,
                key: 'gameId'
            }
        },
        platformsGamesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

Game.belongsTo(Publisher, {
    foreignKey: 'publisherId'
});

Publisher.hasMany(Game, {
    foreignKey: 'publisherId'
});

Game.belongsToMany(Platform, {
    through: { model: PlatformsGames },
    foreignKey: 'gameId'
});

Platform.belongsToMany(Game, {
    through: { model: PlatformsGames },
    foreignKey: 'platformId'
});

connection
    .authenticate()
    .then(() => {
        console.log("Connection to database established successfully");
    })
    .catch(err => {
        console.error("Unable to connect to the database: ", err);
    });

module.exports = { Game, Publisher, Platform, PlatformsGames };


