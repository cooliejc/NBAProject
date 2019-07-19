$("#find-player").on("click", function(event) {
    $.ajax({
      url: "https://nba-players.herokuapp.com/players-stats",
      method: "GET"
    }).done(function(response) {
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
      playerView.append(`<div class=${newName}>${JSON.stringify(foundPlayerData)}</div>`);
          var playerName = name;
  
          console.log(name);
  
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
      
      
      addButton.on('click', function(){ $('.' + newName).remove(); });
          }
      
      
      });
  });
  