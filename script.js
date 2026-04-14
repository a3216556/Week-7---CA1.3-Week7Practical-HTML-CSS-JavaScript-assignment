function getNumbers() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    if (n1 === "" || n2 === "" || isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").innerHTML = "Invalid input";
        return null;
    }

    return [parseFloat(n1), parseFloat(n2)];
}

function add() {
    let nums = getNumbers();
    if (!nums) return;
    document.getElementById("result").innerHTML = nums[0] + nums[1];
}

function subtract() {
    let nums = getNumbers();
    if (!nums) return;
    document.getElementById("result").innerHTML = nums[0] - nums[1];
}

function multiply() {
    let nums = getNumbers();
    if (!nums) return;
    document.getElementById("result").innerHTML = nums[0] * nums[1];
}

function divide() {
    let nums = getNumbers();
    if (!nums) return;

    if (nums[1] === 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
        return;
    }

    document.getElementById("result").innerHTML = nums[0] / nums[1];
}
