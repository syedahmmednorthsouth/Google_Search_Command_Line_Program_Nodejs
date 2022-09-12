var fs = require('fs');

function fileSave(json, searchString) {
    let filename = `google_search_${searchString}_${(new Date().toJSON().slice(0, 10))}-${Math.floor((Math.random() * 10000) + 1)}.json`
    fs.writeFile(`./database/${filename}`, json, (err) => {
        if (err) {
            throw err;
        }
        console.log(`JSON data is saved in  ${filename} file .`);
    });
}

module.exports = fileSave