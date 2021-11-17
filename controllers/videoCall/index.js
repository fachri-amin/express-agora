const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')

module.exports = {
    generateToken: (req, res) => {
        const appID = 'c36095ee3c18411e8edcdead9d45ac77';
        // const appID = 'c36095ee3c18411e8edcdead9d45ac77failtest';
        const appCertificate = '52b2a174ee2f48b6bd13b2b2f919e7dd';
        const channelName = req.params.channel;
        const uid = req.params.uid;
        // const account = "2882341273";
        const role = RtcRole.PUBLISHER;

        const expirationTimeInSeconds = 3600

        const currentTimestamp = Math.floor(Date.now() / 1000)

        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

        // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

        // Build token with uid
        const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
        console.log("Token With Integer Number Uid: " + tokenA);

        res.header("Access-Control-Allow-Origin", "*")
        res.json({token: tokenA});
        
        // // Build token with user account
        // const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
        // console.log("Token With UserAccount: " + tokenB);
        // res.header("Access-Control-Allow-Origin", "*")
        // res.json({token: tokenB});
    }
}