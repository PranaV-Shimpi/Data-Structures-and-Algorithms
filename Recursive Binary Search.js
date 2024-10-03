//  Recursive Binary Search

const RecursiveBinarySearch = (Arr,t) => {
 return Search(Arr,t , 0, Arr.length-1)
}

const Search = (arr, t ,start,end) => {
    if(start>end){
        return -1; // base condition to exit from recursion
    }
    
    let midIndex = Math.floor((start+ end) / 2)
    
    if(arr[midIndex] === t){
        return midIndex;
    }
    if(t < arr[midIndex] ){
        return Search(arr,t,start,midIndex-1)
    }else{
        return Search(arr,t,midIndex+1,end)
    }
}

let arr = [-7,-2,5,9,15,19,22];

console.log(RecursiveBinarySearch(arr,15)) // 4
