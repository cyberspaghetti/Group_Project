
  
require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const massive = require('massive');
const scc = require('./controllers/serverChannelController');
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    console.log('db connection successful');
    app.set('db', db);
  
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
  })




//Server Channel Endpoints
app.post('/api/createServerChannel', scc.createServerChannel);
app.get('/api/serverChannel/:id', scc.getServerChannel);
app.delete('/api/deleteTeamMember/:userId', scc.deleteServerChannelMember);
app.get('/api/allTeams', scc.getServerChannel);
app.get('/api/teamMembers/:id', scc.getServerChannelMembers);
app.put('/api/addTeamMember', scc.addServerChannelMember)