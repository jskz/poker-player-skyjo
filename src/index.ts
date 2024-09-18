import express from 'express';
import { Player, VERSION } from './Player';

const app = express();
const player = new Player();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', ({}, res) => res.status(200).send('OK'));

app.post('/', (req, res) => {
    if (req.body.action === 'bet_request') {
        player.betRequest(JSON.parse(req.body.game_state), (bet) => {
            const betString = bet.toString();
            console.log('Action: ', betString);
            console.log(JSON.stringify(req.body.game_state));
            console.log('--- END STATE ---');
            res.status(200).send(betString);
        });
    } else if (req.body.action === 'showdown') {
        player.showdown(JSON.parse(req.body.game_state));
        console.log('Showdown: ');
        console.log(JSON.stringify(req.body.game_state));
        console.log('--- END STATE ---');
        res.status(200).send('OK');
    } else if (req.body.action === 'version') {
        res.status(200).send(VERSION);
    } else {
        res.status(200).send('OK');
    }
});

const port = parseInt(process.env['PORT'] || '1337');
const host = "0.0.0.0";

export default app.listen(port, host);
console.log('Listening at http://' + host + ':' + port);

// export default app;