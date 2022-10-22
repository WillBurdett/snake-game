const GetRandomCoordinates = () =>{
    let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  // let x = Math.floor((Math.random()*50))
  // let y = Math.floor((Math.random()*50))
  return [x, y]
}
export default GetRandomCoordinates;