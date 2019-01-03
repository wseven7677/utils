// 多选数据工具
    function chosenbox(box, refer) {
        // 是否有参考属性名--
        let referName = '';
        if (typeof refer === 'string' && refer !== '') {
            referName = refer;
        } else {
            referName = null;
        }

        return {
            have(one) {
                let index = box.findIndex(item => {
                    return referName ?
                        (item[referName] === one[referName]) :
                        (item === one);
                });
                if (index === -1) {
                    box.push(one);
                }
            },
            lose(one) {
                let index = box.findIndex(item => {
                    return referName ?
                        (item[referName] === one[referName]) :
                        (item === one);
                });
                if (index > -1) {
                    box.splice(index, 1);
                }
            }
        };
    }
