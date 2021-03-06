var authenticator = {};
const config = require("../appSettings.json");
const update_user = config.auth_server.update_user;
const validate_user = config.auth_server.validate_user;
const site_token = config.site_token;
const api_token = config.api_token;
/******* PACKAGES *******/
const rp = require('request-promise');

authenticator.validateUser = (clientToken) => {
    
    var options = {
        method: "GET",
        uri: validate_user,
        headers: {
            "site-token": JSON.stringify({ Site_Token_Value: '258M9RRUI7P2Q25KZP82' }),
            "client-token": clientToken,
            "api-token": 'DNJV3MF4QDMSFS3EUY1K'
        },
        json: true
    };

    return rp(options)
        .then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
};
authenticator.updateInformation = (userData, clientToken) => {
    var options = {
        method: "POST",
        uri: update_user,
        headers: {
            "site-token": JSON.stringify({ Site_Token_Value: site_token }),
            "client-token": clientToken
        },
        body: {
            User_Email: userData.User_Email
        },
        json: true
    };

    return rp(options)
        .then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        });
}

module.exports = authenticator;