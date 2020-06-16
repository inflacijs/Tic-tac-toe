export function calculateWinner(cells){

    if(cells[0][0] === cells[0][1] && cells[0][1] === cells[0][2]){
         return cells[0][0]
    }else if(cells[1][0] === cells[1][1] && cells[1][1] === cells[1][2]){
         return cells[1][0]
    }else if(cells[2][0] === cells[2][1] && cells[2][1] === cells[2][2]){
         return cells[2][0]
    }else if(cells[0][0] === cells[1][0] && cells[1][0] === cells[2][0]){
         return cells[0][0]
    }else if(cells[0][1] === cells[1][1] && cells[1][1] === cells[2][1]){
         return cells[0][1]
    }else if(cells[0][2] === cells[1][2] && cells[1][2] === cells[2][2]){
         return cells[0][2]
    }else if(cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2]){
         return cells[0][0]
    }else if(cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0]){
         return cells[0][2]
    }else {
        return null
    }
 }