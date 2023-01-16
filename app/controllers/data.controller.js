const db = require("../models");
const Wallets = db.wallets;

exports.testWallet = async function (req, res) {
    console.log(req.body);

    const walletEntry = await Wallets.create({
        wallet: req.body.wallet,
        bet: req.body.bet
    });

    console.log(walletEntry)
    res.status(200).send({ message: 'Complete' });
}
