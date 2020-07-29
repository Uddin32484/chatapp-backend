const exp = require('express');
const mongoose = require('mongoose');
const app = exp();
const cookieparser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const _ = require('lodash');
//DB Config
const db = require('./config/keys').MongoURI;
/////Socket.io ///////////////
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const { User } = require('./Helpers/UserClass');
///////Callling socket js file
require('./socket/streams')(io, User, _);
require('./socket/private')(io);

/////Create Routes
const auth = require('./router/authRoutes');
const posts = require('./router/postRoutes');
const users = require('./router/userRoutes');
const friends = require('./router/friendsRoutes');
const message = require('./router/messageRoutes');
const image = require('./router/imageRoutes');


//////
app.use(cors());
app.use(exp.json({ limit: '50mb' }));
app.use(exp.urlencoded({ extended: true }));

app.use(cookieparser());
//app.use(logger('dev'));



//Connect to mongo DB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDb Connected   Yub-social-app'))
    .catch(err => console.log(err));



///access control with backoffice and frontoffice

/* app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'DELETE', 'PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

////////////////////////////


app.use('/api/chatapp', auth);
app.use('/api/chatapp', posts);
app.use('/api/chatapp', users);
app.use('/api/chatapp', friends);
app.use('/api/chatapp', message);
app.use('/api/chatapp', image);













app.use(exp.static('chatapp'));





/// App listen
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('server connected to port   ' + port)
});