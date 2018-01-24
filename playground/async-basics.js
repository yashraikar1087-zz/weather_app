console.log("Starting app");

setTimeout(() => {
    console.log('Inside of Callback');
},2000);

setTimeout(() => {
    console.log('secend timeout');
},0);

console.log("finishing up");