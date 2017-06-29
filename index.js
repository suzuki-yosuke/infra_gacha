exports.gacha = function gacha (req,res) {
  rand = getRandomInt(0,5);
  console.log(rand);
  switch (rand) {
    case 1:
      res.send( `iida` );
      break;
    case 2:
      res.send( `murakami` );
      break;
    default:
      res.send( `suzuki` );
      break;
  }
};

function getRandomInt (min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
};
