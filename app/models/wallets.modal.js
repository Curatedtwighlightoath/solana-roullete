module.exports = (sequelize, Sequelize) => {
    const Wallets = sequelize.define("wallets", {
        wallet: {
            type: Sequelize.STRING
        },
        bet: {
            type: Sequelize.INTEGER
        },
        signature: {
            type: Sequelize.STRING
        },
        gameId: {
            type: Sequelize.INTEGER
        },
    }, {
        timestamps: false,
    
    })
    return Wallets;
}