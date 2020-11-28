var merge = function(intervals) {
  const merged = [];
  
  for (let i = 0; i < intervals.length; i++) {
    // // merge([[1,4],[0,1]]); // [[0,4]]
    // //console.log("intervals[i] = ", intervals[i]);
    //   if ( intervals[i + 1] && intervals[i + 1][0] <= intervals[i][0] && intervals[i + 1][1] <= intervals[i][1] && intervals[i + 1][1] >= intervals[i][0]) {
       
    //     merged.push(intervals[i + 1], intervals[i])
    //     //merged.push([intervals[i + 1][0], intervals[i][1]]);
    //     i += 2;
    //     console.log('#1')
    //   } else if (intervals[i + 1] && intervals[i + 1][0] >= intervals[i][0] && intervals[i + 1][0] <= intervals[i][1] && intervals[i + 1][1] >= intervals[i][1]) {
    //     merged.push([intervals[i][0], intervals[i + 1][1]]);
    //     i++;
    //     console.log('#2')
    //   } else if (intervals[i + 1] && intervals[i + 1][0] <= intervals[i][0] && intervals[i + 1][1] >= intervals[i][1] ){
    //     merged.push([intervals[i + 1][0], intervals[i + 1][1]]);
    //     i++;
    //     console.log('#3')
    //   } else if ( intervals[i + 1] && intervals[i + 1][0] < intervals[i][0] && intervals[i+ 1][1] < intervals[i][1]){
       
    //     merged.push(intervals[i + 1], intervals[i])
    //     //merged.push([intervals[i + 1][0], intervals[i][1]]);
    //     i++;
    //     console.log('#4')
    //   } else if (intervals[i + 1] && intervals[i + 1][0] >= intervals[i][0] && intervals[i + 1][1] <= intervals[i][1] ){
    //     merged.push([intervals[i][0], intervals[i][1]]);
    //     i++;
    //     console.log('#5')
    //   } else {
    //     merged.push(intervals[i]);
    //     console.log('#6')
    //   }
      
    //they're the same, merge them
    if(intervals[i + 1] && intervals[i + 1][0] === intervals[i][0] && intervals[i + 1][1] === intervals[i][1]) {
      merged.push(intervals[i]);
      console.log("option 1")
      i++;
    // last nums same, first larger than second  
    } else if (intervals[i + 1] && intervals[i + 1][0] < intervals[i][0] && intervals[i + 1][1] === intervals[i][1]) {
      merged.push(intervals[i + 1]);
      console.log("option 2")
      i++;
    // second first is less than first first, second second is less than or equal to second first 
    } else if (intervals[i + 1] && intervals[i + 1][0] < intervals[i][0] && intervals[i + 1][1] < intervals[i][1] && intervals[i + 1][1] >= intervals[i][0]) {
      merged.push([intervals[i + 1][0], intervals[i][1]]);
      console.log("option 3");
      i++;
    // the second nums are between the first two nums   
    } else if (intervals[i + 1] && intervals[i + 1][0] > intervals[i][0] && intervals[i + 1][0] < intervals[i][1] && intervals[i + 1][1] > intervals[i][0] && intervals[i + 1][1] < intervals[i][1]) {
      merged.push(intervals[i]);
      console.log("option 4");
      i++;
    // second nums are both less than the first   
    } else if (intervals[i + 1] && intervals[i + 1][0] < intervals[i][0] && intervals[i + 1][1] < intervals[i][0] && intervals[i + 1][1] < intervals[i][1]) {
      merged.push(intervals[i + 1], intervals[i]);
      console.log("option 5")
      i++;
    // first first and second second form the range
    } else if (intervals[i + 1] && intervals[i + 1][0] > intervals[i][0] && intervals[i + 1][0] <= intervals[i][1] && intervals[i+ 1][1] > intervals[i][0] && intervals[i+ 1][1] > intervals[i][1]) {
      merged.push([intervals[i][0], intervals[i + 1][1]]);
      console.log("option 6");
      i++;
    // both first the same, second second is bigger 
    } else if (intervals[i + 1] && intervals[i + 1][0] === intervals[1][0] && intervals[i+1][1] > intervals[i][1]) {
      merged.push([intervals[i][0], intervals[i+1][1]]);
      console.log("option 8")
      i++

    } else {
      merged.push(intervals[i]);
      console.log("option 7");
    }
  }
   console.log('merged = ', merged)
  return merged;
};


merge([[1,4],[1,4]]); //[[1,4]] option 1
merge([[1,4],[0,4]]); //[[0, 4]] option 2
merge([[1,4],[0,1]]); // [[0,4]] option 3
merge([[1,4],[2,3]]); // [[1,4]] option 4
merge([[1,4],[0,0]]); // [[0,0],[1,4]]; option 5
merge([[1,4],[4,5]]); //[[1,5]] option 6
merge([[1,4],[1,5]]); // [[1,5]] option 8 
merge([[1,3],[2,6],[8,10],[15,18]]); //[[1,6],[8,10],[15,18]] 