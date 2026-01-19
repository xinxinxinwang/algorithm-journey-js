var getMaxWithoutJudge = function (a, b) {
    //获取符号位 非负1 负0
    const getSign = function (n) {
        return flip(n >>> 31)
    }
    //反转符号位
    const flip = function (n) {
        return n ^ 1
    }
    const getMax = function (a, b) {
        let c = a - b;
        let sa = getSign(a);
        let sb = getSign(b);
        let sc = getSign(c);
        let diffAB = sa ^ sb;
        let sameAB = flip(diffAB);
        let returnA = diffAB * sa + sameAB * sc;
        let returnB = flip(returnA);
        return returnA * a + returnB * b
    }
    const getMax1 = function (a, b) {
        let c = a - b;
        let returnA = getSign(c);
        let returnB = flip(returnA);
        return returnA * a + returnB * b;
    }
    return getMax(a, b)
}

console.log(getMaxWithoutJudge(45, 89))