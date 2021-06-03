// const flip=(d, a)=>{
//   //TODO
//   if(d==="R")
//     return a.sort((a,d))=>a-d;
//   if(d==="A" )
//     return d.sort((a,d)=>d-a)
// }
// const flip = (d,a)=>{
//   if(d==="R")
//   return a.sort((a,d)=>a-d) 
//   if(d==="L")
//   return a.sort((a,d)=>d-a)
// }
// console.log(flip([1, 2, 2, 3]))

const flip = (direction, columns) => (
  [...columns].sort((A, Z) => {
    if (direction === 'R') return A - Z
    if (direction === 'L') return Z - A
  })
)
console.log(flip('R', [3, 2, 1, 2]))
// const flip = ()

/////////////////

const flip = (x,y)=>{
  [...y].sort((A,B)=>{
    if(x==='R') return A- B
    if(x === 'L') return B-A
  })
}

//////////////


const flip =(sajib,mahmud)=> mahmud.sort((a,b)=>sajib ===`R` ? a-b : b- a)


///////////lot way try 

const flip  = (X,Y)=>Y.sort((a,b)=>`R`? a- b : b - a)