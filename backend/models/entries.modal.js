module.exports = (sequelize, Sequelize) => {
    const Entries = sequelize.define("entries", {
        text: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.DATE
        },
        user: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: false,
    
    })
    return Entries;
}