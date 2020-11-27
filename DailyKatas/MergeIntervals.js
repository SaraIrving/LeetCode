var merge = function(intervals) {
  const merged = [];
  console.log("intervals = ", intervals)
  console.log("intervals[0][1] = ", intervals[0][1])
   console.log("intervals[0 + 1][1] = ", intervals[0+ 1][1])
  
  for (let i = 0; i < intervals.length; i++) {
      console.log('intervals[i]', intervals[i])
      console.log('intervals[i][0]', intervals[i][0])
      // console.log('intervals[i+1]', intervals[i+1])
      // console.log('intervals[i+1][0]', intervals[i+1][0])
  
      if(i < (intervals.length - 1)) {
          if (intervals[i + 1][0] > intervals[i][0] && intervals[i + 1][0] <= intervals[i][1] ) {
          merged.push([intervals[i][0], intervals[i + 1][1]]);
      } else {
          merged.push(intervals[i]);
      }
      }
      
  }
  console.log('merged = ', merged)
  return merged;
};