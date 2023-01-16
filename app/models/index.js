const config = require("../config/config")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(config.DB, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: config.DIALECT,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    },
    logging: false
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.wallets = require("./wallets.modal")(sequelize, Sequelize);

module.exports = db;