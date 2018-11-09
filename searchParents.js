function searchParents(id, arr, path) {
    if (!path) {
        path = [];
    }
    let currPath = path.slice(0);
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].routeId === id) {
            currPath.push({
                name: arr[i].name,
                route: arr[i].routeId
            });
            return currPath;
        }
        if (arr[i].submenus.length > 0) {
            let r = searchParents(id, arr[i].submenus, currPath.concat({
                name: arr[i].name,
                route: arr[i].routeId
            }));
            if (r.length > 0) { // 不为空才返回结果
                return r;
            }
        }
    }
    return []; // 什么都没搜到返回空
}
