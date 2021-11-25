const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')

module.exports = {
    generateToken: (req, res) => {
        const appID = 'f6a3d3fdd784401b981fe52beab9ea10';
        // const appID = 'c36095ee3c18411e8edcdead9d45ac77failtest';
        const appCertificate = '33dfaff7f548438dbdb874fae1d443e0';
        const channelName = req.params.channel;
        // const uid = req.params.uid;
        const uid = 2882341273 //Math.floor(Math.random()*100000);
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
        res.json({token: tokenA, uid: uid});
        
        // // Build token with user account
        // const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
        // console.log("Token With UserAccount: " + tokenB);
        // res.header("Access-Control-Allow-Origin", "*")
        // res.json({token: tokenB});
    }
}