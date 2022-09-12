const grouping = (temp) => {
    let website_arr = [];
    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];


            if (!acc[key]) {
                acc[key] = [];
            }

            acc[key].push(obj);
            return acc
        }, {})
    }

    const group = groupBy(temp, 'Website');

    Object.keys(group).forEach(key => {
        let web_page = {
            Website: key,
            result: group[key]
        }
        website_arr.push(web_page);
    });

    return website_arr;

}

module.exports = grouping;