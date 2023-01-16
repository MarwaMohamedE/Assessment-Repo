const rover =()=>{
  let x=0;
  let y=0;
  const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

  const move_forward=()=>{
      for(let i=0;i<directions.length;i++){
           directions[i]=='NORTH'? y-=1
          :directions[i]=='EAST'?x-=1
          :directions[i]=='SOUTH'?y+=1
          :x+=1
      }
      return x , y; 
  }
  const move_backward=()=>{
      for(let i=0;i<directions.length;i++){

           directions[i]=='NORTH'? y-=1
          :directions[i]=='EAST'?x-=1
          :directions[i]=='SOUTH'?y+=1
          :x+=1
      }
      return x , y; 
  }

  let direction=0;
  const rotate_left=()=>{
  let current_direction_index = directions.map((dir)=>{
      directions.indexOf(dir);
  })

   current_direction_index == 0?
      direction = directions[-1]:
      direction = directions[current_direction_index - 1]

  }
  
  const move = command=>{
      command == 'F'? move_forward()
      :command == 'B'?move_backward()
      :command == 'L'?rotate_left()
      :rotate_right()
 
      return command;
}
}