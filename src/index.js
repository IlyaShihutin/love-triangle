/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
let count = 0,love1,love2,love3; 
  for ( let i = 0; i < preferences.length; i++) { 
   love2 = (preferences[i] - 1);
    if (love2 == i) continue;

    love3 = (preferences[love2] - 1);
    if (love3 == love2) continue;

    love1 = (preferences[love3] - 1)
    if (love1  == love3) continue;

    if (love1  == i) {count++};
  
  };
 
  return count/3;

};
