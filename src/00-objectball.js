

function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors:["black", "white"],
            players: {
               "Alan Anderson": {
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
               },
               "Reggie Evans": {
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
               },
               "Brook Lopez": {
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
               },
               "Mason Plumlee": {
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
               },
               "Jason Terry": {
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
               },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors:["Turquoise", "purple"],
            players: {
               "Jeff Adrien": {
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },   
                "Bismak Biyombo": {
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },  
                "DeSagna Diop": {
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                }, 
                "Ben Gordon": {
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                }, 
                "Brendan Haywood": {
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                }, 
            }     
        }       
    };
}



//function homeTeamName() {       //returns back the name of the 'home' team
//    let object = gameObject();
 //   return object["home"]["teamName"];
//}

//console.log(homeTeamName());


function numPointsScored(playerName) {
    let game = gameObject();
    let pointsScored = null;

    for (let team in game) {
        let players = game[team].players;   //loops through the teams(home and away) in the game object
      
    debugger;

        for (let player in players) {        // nested loop; loops through the players in the current team
            if(player === playerName) {
                return pointsScored = players[player].points;
            }
        }
    }

    debugger;

}


console.log(numPointsScored("Alan Anderson"));



function shoeSize(playerName) {          //function shoeSize takes in playerName as the argument
  let game = gameObject();              // call the gameObject() to get the game object
  
  for(let team in game) {               // for..in loop to see if the correct player name matches their shoe size
    let players = game[team].players;    //  assigning value of the players property from the team object inside the game array to the players variable        
    
    debugger;

    for (let player in players) {        //nested loop- loops through the players in the current team
        if(player === playerName) {      
            return players[player].shoe;
        }
    }

}
    debugger;
}

console.log(shoeSize("Alan Anderson"));




function teamColors(teamName) {
    let game = gameObject();                //call again the gameObject() to get the game object
    let team;                           // team wont be assigned a value since it will based on the outcome

    if (game.home.teamName === teamName) {    //if the teamName matches either the home or away team
        team = game.home; 
    }
    debugger;
    else if (game.away.teamName === teamName) {
        team = game.away;
    }

    else {
        return null;
    }
    debugger;

    return team.colors;
}

console.log(teamColors("Brooklyn Nets"));


function teamNames() {
    let game = gameObject();                             //call again the gameObject() to get the game object
    let homeTeamName = game.home.teamName;
    let awayTeamName = game.away.teamName;

    let homePlayers = Object.keys(game.home.players);    //an array of the home players
    let awayPlayers = Object.keys(game.away.players);    // an array of the away players

    debugger;

    return [homeTeamName, homePlayers, awayTeamName, awayPlayers];    //returns an array of the team name and team players
}

let teamList = teamNames();
let homeTeamName = teamList[0];
let homePlayers = teamList[1];
let awayTeamName = teamList[2];
let awayPlayers = teamList[3];

console.log ("Home Team Name: " + homeTeamName);
console.log ("Home Team Players: " + homePlayers);
console.log ("Away Team Name: " + awayTeamName);
console.log ("Away Team Players: " + awayPlayers);



function playerNumbers(teamName) {          //building a function that takes in teamName as the argument
    let game = gameObject();        // call gameObject() to get game object
    let team;                        // no value assign to variable 


    if (game.home.teamName === teamName) {             //loop created to see which team teamName would match with and assign a value to the team variable
        team = game.home;
    } else if (game.away.teamName === teamName) {
        team = game.away;
    }
    debugger;

    let playerNames = Object.keys(team.players); // an array of the players name for the team
    let jerseyNumbers = [];

    // looping through each player and push their jersey number to the jerseryNumer array
    for (let i = 0; i<playerNames.length; i++) {
        let playerName = playerNames[i];
        let player = team.players[playerName];
        jerseyNumbers.push(player.number);
    }
    debugger;

    return jerseyNumbers;
}

console.log(playerNumbers("Brooklyn Nets"));



function playerStats(playerName) {
    let game = gameObject();
    let players = [game.home.players, game.away.players]; //array of players' stats from both teams

    for (let i =0; i<players.length; i++) {          //Iteration of each team player in the for loop
        let playerKeys = Object.keys(players[i]);
    
    debugger;

        if (playerKeys.includes(playerName)) {      //checking to see if it matches with any player's name
            return players[i][playerName];         //returns the stats in the playerName object with the matched player

        }
    }
    debugger;
}
console.log(playerStats("Brendan Haywood"));



function bigShoeRebounds() {
    let game = gameObject();
    let players = Object.assign({}, game.home.players, game.away.players);     //combining the team objects 

    let largestShoeSize = 0;
    let playerWithLargestShoe = null;  //will have a value later- the one with the largest shoesize

    for (let playerName in players) {
        let player = players[playerName];
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoe = player;
        }
    }
    debugger;

    if (playerWithLargestShoe !== null) {
        
        return playerWithLargestShoe.rebounds;
    
    }
    debugger;
}

let rebounds = bigShoeRebounds();
console.log("Rebounds for the player with the biggest shoe size:" + rebounds);




