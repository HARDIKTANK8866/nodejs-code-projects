console.log("starting up");

setTimeout(() => {
    console.log("2 sec log");
}, 2000);

setTimeout(() => {
    console.log("o sec log");
}, 0);

console.log("finishing up");