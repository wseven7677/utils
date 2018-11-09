/**
 * @file bfs
 * @auth wseven7677 github
 * 优先广度遍历bfs
 * @param  {Object}   obj      被遍历的对象
 * @param  {Function} callback 对每个项目对具体处理
 */
function bfs(obj, callback) {
    let tmpQueue = []; // 遍历用临时队列
    let tmpPointer = {}; // 遍历用临时指针

    // 队列添加初始元素
    obj.forEach(function (oneSub) {
        tmpQueue.push(oneSub);
    });

    // 遍历循环
    while (tmpQueue.length > 0) {
        // 临时指针得到队列中的第一项
        tmpPointer = tmpQueue.shift();
        // 如果该项目仍含有子目录，将子目录加入遍历队列
        if (tmpPointer.submenus) {
            tmpPointer.submenus.forEach(function (oneSub) {
                tmpQueue.push(oneSub);
            });
        }
        // 具体操作
        callback(tmpPointer);
    }
}

export default bfs;
