function looping(startNum, endNum, continuNum, breakNum){
    if(startNum != undefined && endNum != undefined && breakNum != undefined && continuNum != undefined){
        for(var i = startNum ; i<= endNum ;i++){
            if(i==continuNum) continue
            else if (i== breakNum) break
            else console.log(i)
        }
    }else console.log("the prameters is not correct")
}
looping(5)
looping(5, 10)
looping(5, 10, 7)
looping(5, 10, 7, 9)