const alphabetSort = (obj_arr) => {

    obj_arr.sort((a, b) => {
        let fa = a.Website;
        fb = b.Website;
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;



    })

    return obj_arr;
}

module.exports = alphabetSort;