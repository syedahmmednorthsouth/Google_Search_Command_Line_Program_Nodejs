//import modules
var cheerio = require("cheerio");
var axios = require('axios');


//import local modules
var grouping = require('./util/grouping');
const fileSave = require("./util/filesave");
const alphabetSort = require("./util/alphabetSort");



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

            let final_json = {};

            final_json.queryString = searchString;




            //decrlaring temporay variable to hold webpage , social media , 
            let final_result = {}
            let webpages_temp = [];
            let social_media_temp = [];
            let videos_temp = [];


            //declaring counter variable
            let webpage_count = 0;
            let social_count = 0;
            let video_count = 0;




            //Retrieve Web url , title and preprocess the data

            $(".UK95Uc").each((i, elm) => {
                let title = $(elm).find('.DKV0Md').text();
                let url = $(elm).find('a').attr('href');
                let website = $(elm).find('cite').first().text().split(' ')[0];
                if (title != '' && url != '') {
                    if (website.match(/(?:instragram|linkedin|facebook|reddit|twitte)\.com/)) {
                        let social_media_details = {
                            Title: title,
                            URL: url,
                            Website: website
                        }

                        if (social_media_details) {
                            social_count++;
                        }

                        social_media_temp.push(social_media_details);
                    } else {
                        let webpage_details = {
                            Title: title,
                            Url: url,
                            Website: website
                        }

                        if (webpage_details) {
                            webpage_count++;
                        }

                        webpages_temp.push(webpage_details);
                    }
                }
            })


            //Retrieve video  url , title and preprocess the data

            $("video-voyager").each((i, el) => {
                let minutes = $(el).find($(".ruktOc")).text().split(" ")[0] * 60;
                let seconds = $(el).find($(".ruktOc")).text().split(" ")[2];
                let durationInSeconds = parseInt(minutes) + parseInt(seconds);
                let url = $(el).find("a").attr("href");
                let title = $(el).find(".cHaqb").text();
                let Website = $(el).find("a").attr("href").substring(0, 23);

                let video_details = {
                    DurationInSeconds: durationInSeconds,
                    Title: title,
                    URL: url,
                    Website: Website

                }
                if (video_details) {
                    video_count++;
                }

                videos_temp.push(video_details)
            });

            // const alphabetSortWeb = alphabetSort(webpages_temp);
            // const alphabetSortSocial = alphabetSort(social_media_temp);
            // const alphabetSortVideo = alphabetSort(videos_temp);


            //Grouping Social Media
            const groupSocialMedia = grouping(social_media_temp);
            //Grouping webpages
            const groupWebPages = grouping(webpages_temp);
            //Grouping video
            const group_videos = grouping(videos_temp);

            //Grouping Web group alphabettically
            const alphabetSortWeb = alphabetSort(groupWebPages);
            const alphabetSortSocial = alphabetSort(groupSocialMedia);
            const alphabetSortVideo = alphabetSort(group_videos);





            //Adding count information to the result variable
            final_json.PageOneResultCount = webpage_count + social_count + video_count;
            final_json.PageOneVideoResutlCount = video_count;
            final_json.pageOneSocialMediaCount = social_count;


            //adding social webpage video information to the final result variable
            final_result.Social_Media = alphabetSortSocial;
            final_result.Webpages = alphabetSortWeb;
            final_result.Videos = alphabetSortVideo;


            final_json.results = final_result;



            const result = JSON.stringify(final_json, null, 2);



            console.log("====================================")

            console.log(result)

            console.log("====================================")

            fileSave(result, searchString);


        })
        .catch((e) => {

            if (e.response.status == '429') {
                console.log("Google sometimes block automated request . Please try again for a few times within a few minutes");
            } else {
                console.log("The error is: " + e)
            }
        });
}


requestWithAxios(searchString);
