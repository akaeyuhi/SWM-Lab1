export const quadraticSolver = (a, b, c) => {
    if(a === 0)
        return false;
    const res = {};
    res.roots = [];
    const  D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res.discriminant = D;
    if(D === 0)
        res.roots.push((-b + Math.sqrt(D)) / (2 * a));
    else if(D > 0){
        res.roots.push((-b + Math.sqrt(D)) / (2 * a));
        res.roots.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return res;
}
