Array.prototype.sum = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

function solution(A) {

    var left = A[0], right = A.sum() - left, min = Number.MAX_VALUE, result;

    for (var i = 1; i < A.length; i++) {
        result = Math.abs((left - right));
        min = (min > result) ? result : min;
        right = right - A[i];
        left = left + A[i];
    }

    return min;
}

console.log(solution([3,1,2,4,3]));