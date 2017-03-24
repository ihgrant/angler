function round(n) {
    if (!n) {
        return 0;
    }
    return Math.floor(n * 100) / 100;
}

export default function ratioToAngle(x, y) {
    return 90 - Math.atan(Math.abs(x) / Math.abs(y)) * 180 / Math.PI;
}
