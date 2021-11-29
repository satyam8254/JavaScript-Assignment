function CreateObject(arr) {
    // Write your code here
    var res = {};
    for (var i = 0; i < arr.length; i = i + 2) {
        res[arr[i]] = arr[i + 1]
    }
    return res

}

module.exports = CreateObject;