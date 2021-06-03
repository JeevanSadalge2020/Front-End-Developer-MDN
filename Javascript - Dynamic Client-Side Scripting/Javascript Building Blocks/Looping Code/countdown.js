let countdown = 10;
for (let i = countdown; i >= 0; i--) {
    if (i === countdown) {
        console.log("Countdown " + i);
    } else if (i > 0) {
        console.log(i);
    } else {
        console.log("Blast Off");
    }
}