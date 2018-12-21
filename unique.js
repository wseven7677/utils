// 数组去重--
// （来自网络）
function unique(arr) {
    let obj = {};
    return arr.filter(one => {
        return obj.hasOwnProperty(one) ? false : (obj[one] = true);
    });
}
