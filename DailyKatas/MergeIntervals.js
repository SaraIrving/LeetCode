var merge = function(intervals) {
  const merged = [];
  // console.log("intervals = ", intervals)
  // console.log("intervals[0][1] = ", intervals[0][1])
  //  console.log("intervals[0 + 1][1] = ", intervals[0+ 1][1])
  
  for (let i = 0; i < intervals.length; i++) {
      // console.log('intervals[i]', intervals[i])
      // console.log('intervals[i][0]', intervals[i][0])
      // console.log('intervals[i+1]', intervals[i+1])
      // console.log('intervals[i+1][0]', intervals[i+1][0])
  
      //console.log('interval in question = ', intervals[i]);
   
      if (intervals[i + 1] && intervals[i + 1][0] > intervals[i][0] && intervals[i + 1][0] <= intervals[i][1] ) {
        merged.push([intervals[i][0], intervals[i + 1][1]]);
        i += 1;
      } else {
        merged.push(intervals[i]);
      }
      
      
  }
  console.log('merged = ', merged)
  return merged;
};

merge([[1,3],[2,6],[8,10],[15,18]]); //[[1,6],[8,10],[15,18]]
merge([[1,4],[4,5]]); //[[1,5]]