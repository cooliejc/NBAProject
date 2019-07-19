window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    dataPointWidthMax: 20,
    dataPointWidthMin: 5,
    labelWrap: true,

    title: {
        text: "",
        fontFamily: "arial black",
        fontColor: "#695A42"
    },
    axisX: {
        labelWrap: true,
        labelAutoFit: true,
    },
    axisY: {
    },
    toolTip: {
        shared: true,
        content: "{id}"
    },
    
    data: [{
        type: "stackedColumn",
        showInLegend: true,
        color: "#696661",
        name: '#newName',
        dataPoints: [
            //{"name":"LeBron James","team_acronym":"cle","team_name":"Cleveland Cavaliers","games_played":"46","minutes_per_game":"36:54","field_goals_attempted_per_game":"18.7","field_goals_made_per_game":"10.3","field_goal_percentage":"54.9","free_throw_percentage":"74.5","three_point_attempted_per_game":"4.9","three_point_made_per_game":"1.8","three_point_percentage":"36.2","points_per_game":"26.8","offensive_rebounds_per_game":"1.2","defensive_rebounds_per_game":"6.7","rebounds_per_game":"7.9","assists_per_game":"8.6","steals_per_game":"1.6","blocks_per_game":"1.1","turnovers_per_game":"4.3","player_efficiency_rating":"1.7"}
            { y: 0, label: 'GP', id:"Games Played" },
            { y: 0, label: 'MIN', id:"Minutes"  },
            { y: 0, label: 'FGM', id:"Field Goals Made"  },
            { y: 0, label: 'FGA', id:"Field Goals Attempted" },
            { y: 0, label: 'FGPCT', id:"Field Goal Percentage" },
            { y: 0, label: 'FG3M', id:'3Pt Field Goal Made' },
            { y: 0, label: 'FT%', id:'Free Throw Percentage' },
            { y: 0, label: 'PPG', id:"Points Per Game" },
            { y: 0, label: 'OREB', id: "Offensive Rebounds Per Game"},
            { y: 0, label: 'DREB', id: "Defensive Rebounds Per Game" },
            { y: 0, label: 'REB', id:"Rebounds Per Game" },
            { y: 0, label: 'AST', id:"Assists" },
            { y: 0, label: 'STL', id:"Steals" },
            { y: 0, label: 'BLK', id:"Blocks" },
            { y: 0, label: 'TO', id:"TurnOvers" },
            { y: 0, label: 'PER', id:"PLayer Effeciancy Rating" },

        ]
    },
    
    
    ]
});
chart.render();

//Evans work

$("#find-player").on("click", function (event) {
    $.ajax({
        url: "https://nba-players.herokuapp.com/players-stats",
        method: "GET"
    }).done(function (response) {
        console.log('this is the repsonse');
        console.log(response);

        // Creates name variable as the value of player-input
        let name = $('#player-input').val();

        // Creates foundPlayerData variable that runs the .find function called playerData 
        // which will return the value of the first valid input
        let foundPlayerData = response.find((playerData) => {

            // Stops the function and returns playerData value from the corresponding name value of our array
            return playerData.name.toLowerCase() === name.toLowerCase();

        });

        console.log(`The player you have serached for is ${name}`);
        console.log('This was the data I found');
        console.log(foundPlayerData);

        let newName = foundPlayerData.name.replace(' ', '-');
        console.log(newName);

        if (!foundPlayerData) {
            console.log('The player you searched for is not here')
            return false;
        }
        // playerView will be equal to our table div
        let playerView = $("#player-view");
        // This appends our playerView with a new div that's equal to the searched name and populates it 
        // with the array's data

        if ($('.' + newName).length) {
            return false;
        }
        else {
            console.log(foundPlayerData.games_played);
            chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                dataPointWidthMax: 20,
                dataPointWidthMin: 5,
                labelWrap: true,
        
                title: {
                    text: "",
                    fontFamily: "arial black",
                    fontColor: "#695A42"
                },
                axisX: {
                    labelWrap: true,
                    labelAutoFit: true,
                },
                axisY: {
                },
                toolTip: {
                    shared: true,
                    content: "{id}<br/>{name}: <strong>{y}</strong>"
                },
                data: [{
                    type: "stackedColumn",
                    showInLegend: true,
                    color: "#696661",
                    name: foundPlayerData.name,
                    dataPoints: [
                        //{"name":"LeBron James","team_acronym":"cle","team_name":"Cleveland Cavaliers",1"games_played":"46",2"minutes_per_game":"36:54",3"field_goals_attempted_per_game":"18.7",4"field_goals_made_per_game":"10.3",5"field_goal_percentage":"54.9",6"free_throw_percentage":"74.5",7"three_point_attempted_per_game":"4.9",8"three_point_made_per_game":"1.8","three_point_percentage":"36.2","points_per_game":"26.8","offensive_rebounds_per_game":"1.2","defensive_rebounds_per_game":"6.7","rebounds_per_game":"7.9","assists_per_game":"8.6","steals_per_game":"1.6","blocks_per_game":"1.1","turnovers_per_game":"4.3","player_efficiency_rating":"1.7"}

                        //console.log(foundPlayerData.assists_per_game, "assist");

                        { y: parseInt(foundPlayerData.games_played), label: 'GP', id:"Games Played" },
                        { y: parseInt(foundPlayerData.minutes_per_game), label: 'MIN', id:"Minutes"  },
                        { y: parseInt(foundPlayerData.field_goals_made_per_game), label: 'FGM', id:"Field Goals Made"  },
                        { y: parseInt(foundPlayerData.field_goals_attempted_per_game), label: 'FGA', id:"Field Goals Attempted" },
                        { y: parseInt(foundPlayerData.field_goal_percentage), label: 'FGPCT', id:"Field Goal Percentage" },
                        { y: parseInt(foundPlayerData.three_point_made_per_game), label: 'FG3M', id:'3Pt Field Goal Made' },
                        { y: parseInt(foundPlayerData.free_throw_percentage), label: 'FT%', id:'Free Throw Percentage' },
                        { y: parseInt(foundPlayerData.points_per_game), label: 'PPG', id:"Points Per Game" },
                        { y: parseInt(foundPlayerData.offensive_rebounds_per_game), label: 'OREB', id: "Offensive Rebounds Per Game"},
                        { y: parseInt(foundPlayerData.defensive_rebounds_per_game), label: 'DREB', id: "Defensive Rebounds Per Game" },
                        { y: parseInt(foundPlayerData.rebounds_per_game), label: 'REB', id:"Rebounds Per Game" },
                        { y: parseInt(foundPlayerData.assists_per_game), label: 'AST', id:"Assists" },
                        { y: parseInt(foundPlayerData.steals_per_game), label: 'STL', id:"Steals" },
                        { y: parseInt(foundPlayerData.blocks_per_game), label: 'BLK', id:"Blocks" },
                        { y: parseInt(foundPlayerData.turnovers_per_game), label: 'TO', id:"TurnOvers" },
                        { y: parseInt(foundPlayerData.player_efficiency_rating), label: 'PER', id:"PLayer Effeciancy Rating" },
        
                    ]
                },
                
                
                ]
            });
            chart.render();

            playerView.append(`<div class=${newName}>${JSON.stringify(foundPlayerData)}</div>`);
            var playerName = name;


            var splitPlayerName = playerName.split(' ');

            var firstName = splitPlayerName[0];
            var lastName = splitPlayerName[1];
            console.log(firstName);
            console.log(lastName);

            var firstNamea = '/' + firstName;
            var lastNamea = '/' + lastName;
            console.log(firstNamea);
            console.log(lastNamea);

            var completeName = lastNamea + firstNamea;
            console.log(completeName);

            var playerImage = $(`<img class=${newName}>`);
            playerImage.attr('src', 'https://nba-players.herokuapp.com/players' + completeName);
            playerImage.appendTo('#player-images');

            var addButton = $("<button>");
            addButton.addClass(`${newName}`);
            addButton.addClass("btn");
            addButton.text(playerName);
            $("#buttonArea").append(addButton);


            addButton.on('click', function () { $('.' + newName).remove()

            console.log("hello")
            ; });
        }

    });
});

//Darioush's work


    //orginal function for data mouse over window
    // function toolTipContent(e) {
    //     var str = "";
    //     var total = 0;
    //     var str2, str3;
    //     for (var i = 0; i < e.entries.length; i++){
    //         var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong>bn<br/>";
    //         total = e.entries[i].dataPoint.y + total;
    //         str = str.concat(str1);
    //     }
    //     str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.x).label()+"</strong></span><br/>";
    //     total = Math.round(total * 100) / 100;
    //     str3 = "<span style = \"color:Tomato\">Total:</span><strong> $"+total+"</strong>bn<br/>";
    //     return (str2.concat(str)).concat(str3);
    // }

}