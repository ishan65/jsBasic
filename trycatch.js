var z = 5;

try {
    console.log("start");
    if (z==5){
        throw new Error("Bad value in z");
    }
    console.log("stop");
}catch(err){
    console.log("ERROR: "+ err)
}finally{
    console.log("Alway run");
}

console.log("Example complete");
