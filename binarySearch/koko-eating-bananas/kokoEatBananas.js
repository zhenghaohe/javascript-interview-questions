// Input: piles = [3,6,7,11], H = 8
// Output: 4
// Input: piles = [30,11,23,4,20], H = 5
// Output: 30

function minEatingSpeed(piles, H) {
  let l = 1; // minimal eating speed
  let r = Math.max(...piles);

  while(l < r) {
    const m = Math.floor(l + (r-l)/2);
    if (canEatAll(m)) r = m;
    else l = m + 1;
  }

  return l;

  function canEatAll(k) {
    return piles.map( pile => Math.ceil(pile/k)).reduce((a,b) => a+b) <= H;
  }
}



var minEatingSpeed = function(piles, H) {
  function canEatAll(k) {
    return piles.map( pile => Math.ceil(pile/k)).reduce((a,b) => a+b) <= H;
  }
  let l = 1;
  let r = Math.max(...piles);
  while(l < r) {
    const m = Math.floor(l + (r-l)/2);
    if (canEatAll(m)) r = m;
    else l = m + 1;
  }
  return l;
};

const piles = [100, 101, 100, 100];
console.log(minEatingSpeed(piles, 4));