module.exports = (sequelize, DataTypes) => {
    const Wallets = sequelize.define("Wallets", {

      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Wallets;
  };
  