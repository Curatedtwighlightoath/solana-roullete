module.exports = {
    DB_HOST: "localhost",
    DB_PORT: "3306",
    DB: "solanaroulette",
    DB_USER: "solroulette",
    DB_PASSWORD: "bigTimeG@ming",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}