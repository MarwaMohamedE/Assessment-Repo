function RoverCommands(x, y, heading, commands) {
    for (const command of commands) { 
      if (!["F", "B", "L", "R"].includes(command)) {
        return `not supported`;
      }     
      if (command === "F") {
        // Move forward
        if (heading === "NORTH") {
          y += 1;
        } else if (heading === "EAST") {
          x += 1;
        } else if (heading === "SOUTH") {
          y -= 1;
        } else if (heading === "WEST") {
          x -= 1;
        }
      } else if (command === "B") {
        // Move backward
        if (heading === "NORTH") {
          y -= 1;
        } else if (heading === "EAST") {
          x -= 1;
        } else if (heading === "SOUTH") {
          y += 1;
        } else if (heading === "WEST") {
          x += 1;
        }
      } else if (command === "L") {
        // Rotate left
        if (heading === "NORTH") {
          heading = "WEST";
        } else if (heading === "EAST") {
          heading = "NORTH";
        } else if (heading === "SOUTH") {
          heading = "EAST";
        } else if (heading === "WEST") {
          heading = "SOUTH";
        }
      } else if (command === "R") {
        // Rotate right
        if (heading === "NORTH") {
          heading = "EAST";
        } else if (heading === "EAST") {
          heading = "SOUTH";
        } else if (heading === "SOUTH") {
          heading = "WEST";
        } else if (heading === "WEST") {
          heading = "NORTH";
        }
      }
      
    }
    return `(${x},${y}) ${heading}`;
  }
  console.log(RoverCommands(0,0, "WEST", "xL"));
  module.exports=RoverCommands;