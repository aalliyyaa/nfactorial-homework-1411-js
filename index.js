//task01
function delay (time){
    return new Promise ((resolve, reject) => {
        setTimeout(()=> resolve('выполнилось через 3 секунды'),time)
    });
}

delay(3000)
.then((res)=>{
    alert(res);
}
)

//task02

