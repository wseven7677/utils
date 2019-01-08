// 罗列对象中所有的属性值 以及找到该值的路径--

function lookOneNode(node, path) {
        if (!node) {
            return [{
                value: '',
                path
            }];
        }
        let data = (node instanceof Object) ? null : node.toString();
        if (data !== null) {
            return [{
                value: data,
                path
            }];
        }
        let arr = [];
        for (let key in node) {
            // 路径展示的特殊处理--
                // todo
            
            // 递归--
            let one = lookOneNode(node[key], path + ',' + key);
            // 统计结果--
            arr = arr.concat(one);
        }
        return arr;
    }
