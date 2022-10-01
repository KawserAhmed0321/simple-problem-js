function min(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const n1 = 400;
const n2 = 300;
const n3 = 500;
const largeis = min(n1, n2, n3);
console.log('Min number is:', largeis);