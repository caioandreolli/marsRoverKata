//
// Module Exercise: Mars Rover Kata
//
//



// Start Declare


let rover = {
    direction: 'N',
    position: {
      x: 0,
      y: 0,
    },
    travelLog: []
  };
  
  
  // End
  
  
  
  // Start Functions
  
  
  function travelLog(log, path){
    log.push(path);
  }
  
  
  function turnLeft(rover){
    
    switch (rover.direction){
      case 'W':
        rover.direction = 'S';
        //console.log(rover.direction);
        break;
      case 'S':
        rover.direction = 'E';
        //console.log(rover.direction);
        break;
      case 'E':
        rover.direction = 'N';
        //console.log(rover.direction);
        break;
      default:
        rover.direction = 'W';
        //console.log(rover.direction);
    }
    
    travelLog(rover.travelLog, rover.direction);
     
  }
  
  
  function turnRight(rover){
  
    switch (rover.direction){
      case 'W':
        rover.direction = 'N';
        //console.log(rover.direction);
        break;
      case 'E':
        rover.direction = 'S';
        //console.log(rover.direction);
        break;
      case 'S':
        rover.direction = 'W';
        //console.log(rover.direction);
        break;
      default:
        rover.direction = 'E';
        //console.log(rover.direction);
    }
    
    travelLog(rover.travelLog, rover.direction);
    
  }
  
  
  function moveForward(rover){
      switch (rover.direction){
        case 'W':
            if(rover.position.x>0){
                rover.position.x--;
            }else{
                console.log('Rover exceed the grid', rover.position);
            }
            travelLog(rover.travelLog, 'X:'+rover.position.x);
            break;
        case 'E':
            if(rover.position.x<10){
                rover.position.x++;
            } else {
                console.log('Rover exceed the grid', rover.position);
            }
            travelLog(rover.travelLog, 'X:'+rover.position.x);
            break;
        case 'S':
            if(rover.position.y<10){
                rover.position.y++;
            }else{
                console.log('Rover exceed the grid', rover.position);
            }
            travelLog(rover.travelLog, 'Y:'+rover.position.y);
            break;
        default:
            if(rover.position.y>0){
                rover.position.y--;
            }else{
                console.log('Rover exceed the grid', rover.position);
            }
            travelLog(rover.travelLog, 'Y:'+rover.position.y);
        }
  }


  function moveBackward(rover){
    switch (rover.direction){
      case 'W':
          if(rover.position.x<10){
              rover.position.x++;
          }else{
              console.log('Rover exceed the grid', rover.position);
          }
          travelLog(rover.travelLog, 'X:'+rover.position.x);
          break;
      case 'E':
          if(rover.position.x>0){
              rover.position.x--;
          } else {
              console.log('Rover exceed the grid', rover.position);
          }
          travelLog(rover.travelLog, 'X:'+rover.position.x);
          break;
      case 'S':
          if(rover.position.y>0){
              rover.position.y--;
          }else{
              console.log('Rover exceed the grid', rover.position);
          }
          travelLog(rover.travelLog, 'Y:'+rover.position.y);
          break;
      default:
          if(rover.position.y<10){
              rover.position.y++;
          }else{
              console.log('Rover exceed the grid', rover.position);
          }
          travelLog(rover.travelLog, 'Y:'+rover.position.y);
      }
}

  
  function tooManyCommands (commands) {
    let lengthCommands = commands.length;
    for (i=0; i<=lengthCommands; i++){
      switch (commands[i]){
        case 'l':
          turnLeft(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'f':
          moveForward(rover);
          break;
        case 'b':
            moveBackward(rover);
            break;
        default:
          break;            
      }
    }
  }
  
  
  // End Functions
  
  
  
  // Start Actions
  
  
  /*
  turnRight(rover);
  //MOVEU PARA E
  turnRight(rover);
  //MOVEU PARA S
  turnLeft(rover);
  //MOVEU PARA E
  
  moveForward(rover);
  //INCREASE X
  
  turnRight(rover);
  //MOVEU PARA S
  
  moveForward(rover);
  //INCREASE Y
  */
  //Final result of the actions above :::: S X:1 Y:1
  
  
  tooManyCommands('frfffffffffffrffbbb');
  
  
  for (let key in rover){
      //Status Rover Message
      //console.log('\n DIRECTION \n ',  rover.direction, '\n POSITION X/Y \n ', rover.position.x, rover.position.y);
      //
      //Tracking Rover Message
      //console.log('\n', rover.travelLog);
  }

  console.log('\n', rover.travelLog);
