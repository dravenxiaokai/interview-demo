/**
 * 遍历数组法
 * 新建一新数组，遍历传入数组，值不在新数组就加入该新数组中
 */
// function unique1(array) {
//     var newArr = [];
//     for (var i = 0; i < array.length; i++) {
//         //如果当前数组的第i项已经保存进了临时数组，则跳过
//         //否则把当前项push到临时数组中
//         if (newArr.indexOf(array[i]) == -1) {
//             n.push(array[i]);
//         }
//     }
//     return newArr;
// }

// /**
//  * 对象键值对法
//  * 速度最快，占空间最多（空间换时间）
//  */
// function unique2(array) {
//     var n = {}, r = [], len = array.length, val, type;
//     for (var i = 0; i < array.length; i++) {
//         val = array[i];
//         type = typeof val;
//         if (!n[val]) {
//             n[val] = [type];
//             r.push(val);
//         } else if (n[val].indexOf(type) < 0) {
//             n[val].push(type);
//             r.push(val);
//         }
//     }
//     return r;
// }

// /**
//  * 数组下标判断法
//  * 如果当前数组的第i项在当前数组中第一次出现的位置不是i，
//  * 那么表示第i项是重复的，忽略掉。否则存入结果数组。
//  */
// function unique3(array) {
//     var n = [array[0]];//结果数组
//     //从第二项开始遍历
//     for (var i = 1; i < array.length; i++) {
//         if (array.indexOf(array[i]) == i) {
//             n.push(array[i]);
//         }
//     }
// }

/**
 * 排序后相邻去除法
 * 给传入数组排序，排序后相同值相邻，然后遍历时新数组只加入不与前一值重复的值。
 */
// function unique4(array) {
//     array.sort(function (a, b) {
//         return a - b;
//     });
//     var re = [array[0]];
//     for (var i = 1; i < array.length; i++) {
//         if (array[i] !== re[re.length - 1]) {
//             re.push(array[i]);
//         }
//     }
//     return re;
// }

/**
 * 优化遍历数组法
 * 获取没重复的最右一值放入新数组。
 * （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）推荐
 */
function unique5(array) {
    var r = [];
    for (var i = 0, l = array.length; i < l; i++) {
        for (var j = i + 1; j < l; j++) {
            if (array[i] === array[j]) {
                j = ++i;
            }
        }
        r.push(array[i]);
    }
    r.sort(function (a, b) {
        return a - b;
    })
    return r;
}

var arr = [121, 112, 112, 43, 89];
console.log(unique5(arr))