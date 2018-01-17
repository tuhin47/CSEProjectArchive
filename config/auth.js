// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1601454753225785', // your App ID
        'clientSecret'    : '8abc49aace195ce098cb44c962389ab6', // your App Secret
        'callbackURL'     : 'http://10.100.94.75:8080/auth/facebook/callback',
        'profileURL'      :  'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'photos','name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '667637229657-vpb6pka0vhatt047libficme525nfjpg.apps.googleusercontent.com',
        'clientSecret'     : 'ONf4K9UkZ2LN1YZtU4rmvobe',
        'callbackURL'      : 'http://10.100.94.75:8080/auth/google/callback'
    }

};
