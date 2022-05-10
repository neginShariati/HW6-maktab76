function starRating(arr) {
    const [sum, multiple] = arr.reduce((acc, v, i) => {
        const sum = acc[0] + v;
        const multiple = acc[1] + v * (i + 1);
        return [sum, multiple];
    }, [0, 0])
    let avg = (multiple / sum);
    let star = Math.round(avg);

    console.log(`"[${avg.toFixed(2)}] ${"".padStart(star, "*")}"`);
}
starRating([16, 17, 23, 40, 45]);