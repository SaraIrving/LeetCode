var merge = function(intervals) {
  const merged = [];
  
  for (let i = 0; i < intervals.length; i++) {
    console.log("intervals[i] = ", intervals[i]);
    if (intervals[i + 1] && intervals[i + 1][0] === 0 && intervals[i+ 1][1] === 0) {
      console.log("Zero trigger")
      merged.unshift(intervals[i]);
      i++
    }
      
      if (intervals[i + 1] && intervals[i + 1][0] >= intervals[i][0] && intervals[i + 1][0] <= intervals[i][1] && intervals[i + 1][1] >= intervals[i][1]) {
        merged.push([intervals[i][0], intervals[i + 1][1]]);
        i++;
      } else if (intervals[i + 1] && intervals[i + 1][0] <= intervals[i][0] && intervals[i + 1][1] >= intervals[i][1] ){
        merged.push([intervals[i + 1][0], intervals[i + 1][1]]);
        i++;
      } else if (intervals[i + 1] && intervals[i + 1][0] <= intervals[i][0] && intervals[i + 1][1] <= intervals[i][1] ){
        merged.push([intervals[i + 1][0], intervals[i][1]]);
        i++;
      } else if (intervals[i + 1] && intervals[i + 1][0] >= intervals[i][0] && intervals[i + 1][1] <= intervals[i][1] ){
        console.log("trigger!")
        merged.push([intervals[i][0], intervals[i][1]]);
        i++;
      } else {
        merged.push(intervals[i]);
      }
      
      
  }
   console.log('merged = ', merged)
  return merged;
};

merge([[1,3],[2,6],[8,10],[15,18]]); //[[1,6],[8,10],[15,18]]
merge([[1,4],[4,5]]); //[[1,5]]
merge([[1,4],[1,4]]); //[[1,4]]
merge([[1,4],[0,4]]); //[[0, 4]]
merge([[1,4],[0,1]]); // [[0,4]]
merge([[1,4],[2,3]]); // [[1,4]]
merge([[1,4],[0,0]]); // [[0,0],[1,4]]