'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// Challenge 2
// 1
for (const [gol, jugador] of game.scored.entries()) {
  console.log(`Goal ${gol + 1}: ${jugador}`);
}

// 2
const odds = Object.values(game.odds);
let media = 0;
for (const odd of odds) {
  media += odd;
}
console.log(media / odds.length);

//3
for (const [equipo, valor] of Object.entries(game.odds)) {
  const msg = equipo === 'x' ? 'draw' : `victory ${game[equipo]}`;
  console.log(`Odd of ${msg}: ${valor}`);
}

// 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
/* // Challenge 1
// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = (...players) => {
  for (const player of players) {
    console.log(player);
  }
  console.log(players.length);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7
console.log((team1 < team2 && 'team1') || 'team2'); */