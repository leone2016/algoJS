//without recursion
function countDownIterative(n: number) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}
countDownIterative(5);

console.log("\nUsing Recursion:\n");
function countDownRecursive(n: number) {
    if (n < 0) return;
    console.log(n);
    countDownRecursive(n - 1);
}
countDownRecursive(5);