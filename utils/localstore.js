/**
 * @file localstore.js
 @auth wseven7677 github
 * ===
 * localStorage 功能封装
 * ===
  * usage:
    * let param = {
    *   data: [],
    *   local: 'prj-setting'
    * };
    * localstore(param); // 初始化。如果localstorage里有值也不会同步出来。 
    * localstore(param).set([val]); 
    * localstore(param).get(); // get后改变引用，从而实现数据同步
 * 
 * @param  {Object}   obj      传入的配置
 * @return {Object}            方便链式调用
 */
function localstore(obj) {
    if (!(obj instanceof Object)) {
        console.log('error: not Object.');
        return;
    }
    if (obj.data === undefined || obj.local === undefined) {
        console.log('error: lack of params.');
        return;
    }

    let data = obj.data;
    let local = obj.local;
    let ls; // 总是和local同步

    // init--
    if (localStorage.getItem(local)) {
        ls = JSON.parse(localStorage.getItem(local));
    } else {
        localStorage.setItem(local, JSON.stringify(data));
        ls = data;
    }

    return {
        get() {
            ls = JSON.parse(localStorage.getItem(local));
            obj.data = ls;
            return ls;
        },
        set(val) {
            if(val) {
                localStorage.setItem(local, JSON.stringify(val));
                ls = val;
            }else {
                localStorage.setItem(local, JSON.stringify(data));
                ls = data;
            }
        }
    };
}

export default localstore;
