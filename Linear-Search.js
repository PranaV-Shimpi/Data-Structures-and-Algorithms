const linearSearch = (Arr,t) => {
    for(let i=0;i<Arr.length;i++){
        if(Arr[i] === t){
            return i ;
        }
    }
    return -1;
}

let arr = [5,10,-2,19,22,-7,15,3,8]

console.log(linearSearch(arr,-2))  // 2
