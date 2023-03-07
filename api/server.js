
// Description: Ce fichier contient le code du serveur NodeJS qui permet de gérer les requêtes HTTP
//              et de communiquer avec la base de données MongoDB avec  le module Mongoose 
//              Il utilise le framework ExpressJS pour gérer les routes et les requêtes HTTP
//             Il utilise le module Passport pour gérer l'authentification avec GitHub

let express = require('express');
const passport = require('passport'); // Pour l'authentification avec GitHub
const GitHubStrategy = require('passport-github2').Strategy; // Pour l'authentification avec GitHub 
const config = require('./config'); // Pour l'authentification avec GitHub
const githubClientId = config.githubClientId;
const githubClientSecret = config.githubClientSecret;

let app = express();
let bodyParser = require('body-parser');
let plugins = require('./routes/PluginControler');

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

const uri = 'mongodb+srv://ons:mdp@cluster0.okglpv3.mongodb.net/WAM?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB WAM dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez avec http://localhost:8010/api/plugins pour afficher les pluggins, http://localhost:8010/api/buildDB pour les mettre dans la base sinon")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// Pour les fichiers statiques (html, css, etc.)
app.use(express.static('plugins')); // permet d'accéder aux fichiers statiques dans le dossier plugins
// Avec la règle ci-dessous on peut redéfinir la page d’accueil
app.get('/', (req, res) => { // Page d’accueil
  res.sendFile(__dirname + "/plugins/index.html");
});


// les routes
const prefix = '/api';

app.route(prefix + '/plugins')
  .get(plugins.getPlugins)
  .post(plugins.postPlugin)
  .put(plugins.updatePlugin);

app.route(prefix + '/buildDB')
  .get(plugins.putPluginsInDB);

////////// User 
global.__root   = __dirname + '/'; 
var UserController = require(__root + 'routes/UserController');
app.use('/api/routes', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);
///////////// end

//// Authentification avec GitHub
// étape 1 : configuration de passport avec GithubStrategy, qui est un module de passport pour gérer l'authentification avec GitHub
passport.use(new GitHubStrategy({
    clientID: githubClientId,
    clientSecret: githubClientSecret,
    callbackURL: "/auth/github/callback"
}, 
(accessToken, refreshToken, profile, done) => {
    //console.log(profile);
    return done(null, profile); // profile contient les infos de l'utilisateur
}
));

// étape 2 : route pour initialiser l'authentification avec GitHub
app.get('/auth/github', passport.authenticate('github')); 

// étape 3 : route pour récupérer le code de retour de GitHub
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), 
(req, res) => {
    //console.log(req.user);
    res.redirect('/'); // redirection vers la page d'accueil du site web 


});


////// end authentification avec GitHub

app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);




module.exports = app;

