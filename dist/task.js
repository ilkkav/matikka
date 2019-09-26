export var task = function () {
    var result = Math.floor(Math.random() * 11); // 0...10
    var first = Math.floor(Math.random() * (result)); // < result
    var second = result - first;
    return { first: first, second: second, result: result };
};
//# sourceMappingURL=task.js.map