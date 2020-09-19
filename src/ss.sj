/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    let sum = 0;
    let s = '';

    //let ss1 = s1.split('');
    //let ss2 = s2.split('');

    let like = '';
    let same = null;//{ s: 0, e: 0 };

    let maxs = s1.length > s2.length ? s1 : s2;
    let clone = s1 == maxs ? s2 : s1;

    while (!same) {
        let index = maxs.indexOf(clone);
        if (index > -1) {
            //结束
            same = { s: index, e: index + clone.length, str: clone };
        }
        else {
            if (clone) {
                clone = clone.substr(0, clone.length - 1);
                console.log(maxs, clone);
            }
            else {
                //结束
                same = { s: 0, e: 0, str: '' };
            }
        }
    }

    if (!same.str) {
        s = s1 + s2;
    }
    else {
        let clone = s1 == maxs ? s2 : s1;

        let left = maxs.substr(0, same.s);
        let right1 = maxs.substr(same.e);
        let right2 = clone.substr(same.e);
        s = left + right1 + right2
        //like = left + same.str + right1 + right;
    }

    for (let i = 0; i < s.length; i++) {
        sum += s.charCodeAt(i);
    }

    return sum;

};