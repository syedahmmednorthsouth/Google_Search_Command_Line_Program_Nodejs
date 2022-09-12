var cheerio = require("cheerio");
var axios = require('axios');
var grouping = require('./util/grouping');
const fileSave = require("./util/filesave");



/* take search query from command line */

const argsFromCmd = process.argv.slice(2)

const searchString = argsFromCmd.toString().replaceAll(',', ' ')

/* Search Query From argument */


const requestWithAxios = (searchString) => {



    const AXIOS_OPTIONS = {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
        },
    };

    axios
        .get(
            `https://www.google.com/search?q=${encodeURI(searchString)}&hl=en&gl=us`,
            AXIOS_OPTIONS
        )
        .then(function ({ data }) {
            let $ = cheerio.load(data);



        })
        .catch((e) => {
            if (e.response.status === 429) {
                console.log('Google sometimes block the request please try again for a few times within minutes.The error is: (' + e + ')')
            } else {
                console.log('The error is: ' + e)
            }
        });



}


requestWithAxios(searchString);
