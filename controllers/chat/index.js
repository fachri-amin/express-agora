const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')

module.exports = {
    generateToken : (req, res) => {
        var appID = "c36095ee3c18411e8edcdead9d45ac77";
        var appCertificate = "52b2a174ee2f48b6bd13b2b2f919e7dd";
        var expirationTimeInSeconds = 3600
        var currentTimestamp = Math.floor(Date.now() / 1000)
        var privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
        var account = req.query.account;
        if (!account) {
            return res.status(400).json({ 'error': 'account is required' }).send();
        }

        var key = RtmTokenBuilder.buildToken(appID, appCertificate, account, RtmRole, privilegeExpiredTs);

        res.header("Access-Control-Allow-Origin", "*")
            //resp.header("Access-Control-Allow-Origin", "http://ip:port")
        return res.json({ 'key': key }).send();
    }
}