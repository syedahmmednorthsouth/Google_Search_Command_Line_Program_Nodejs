# Google_Search_Command_Line_Program_Nodjs

A command-line google search program made with  node.js

## Features

The program will query Google with the argument and store the search results from the first page
as a JSON file in a directory called database.
Each query will create its own JSON file in the database directory.
Each JSON file will contain the following metadata about the search results:
- The number of results
- The number of results that are video links
- The number of results that are social media links (Links to twitter.com, facebook.com,
instagram.com, linkedIn.com, Reddit.com)
- Time taken for the response
Each JSON file will also contain the list of responses grouped by category (Website, Social
Media, Video):

## Installation

1. Clone the  repo

``` cmd
  $ git clone https://github.com/syedahmmednorthsouth/Google_Search_Command_Line_Program_Nodjs.git
```


2. install dependencies with npm

``` cmd
  $ npm install 
```


## Result


``` json
 {
  "queryString": "youtube api pricing",
  "PageOneResultCount": 19,
  "PageOneVideoResutlCount": 3,
  "pageOneSocialMediaCount": 0,
  "result": {
    "Social_Media": [],
    "Webpages": [
      {
        "Website": "https://developers.google.com",
        "result": [
          {
            "Title": "YouTube Data API (v3) - Quota Calculator - Google Developers",
            "Url": "https://developers.google.com/youtube/v3/determine_quota_cost",
            "Website": "https://developers.google.com"
          },
          {
            "Title": "YouTube Data API (v3) - Quota Calculator - Google Developers",
            "Url": "https://developers.google.com/youtube/v3/determine_quota_cost",
            "Website": "https://developers.google.com"
          }
        ]
      },
      {
        "Website": "https://rapidapi.com",
        "result": [
          {
            "Title": "Pricing & Cost (ytdlfree) - Youtube v3 API - RapidAPI",
            "Url": "https://rapidapi.com/ytdlfree/api/youtube-v31/pricing",
            "Website": "https://rapidapi.com"
          },
          {
            "Title": "Pricing & Cost (ytdlfree) - Youtube v3 API - RapidAPI",
            "Url": "https://rapidapi.com/ytdlfree/api/youtube-v31/pricing",
            "Website": "https://rapidapi.com"
          }
        ]
      },
      {
        "Website": "https://groups.google.com",
        "result": [
          {
            "Title": "YouTube API v3 - API request quotas, costs, pricing, rates",
            "Url": "https://groups.google.com/g/google-api-objectivec-client/c/-xhvHwtI25o",
            "Website": "https://groups.google.com"
          },
          {
            "Title": "YouTube API v3 - API request quotas, costs, pricing, rates",
            "Url": "https://groups.google.com/g/google-api-objectivec-client/c/-xhvHwtI25o",
            "Website": "https://groups.google.com"
          }
        ]
      },
      {
        "Website": "https://blog.hubspot.com",
        "result": [
          {
            "Title": "How to Get a YouTube API Key [Tutorial + Examples]",
            "Url": "https://blog.hubspot.com/website/how-to-get-youtube-api-key",
            "Website": "https://blog.hubspot.com"
          },
          {
            "Title": "How to Get a YouTube API Key [Tutorial + Examples]",
            "Url": "https://blog.hubspot.com/website/how-to-get-youtube-api-key",
            "Website": "https://blog.hubspot.com"
          }
        ]
      },
      {
        "Website": "https://support.google.com",
        "result": [
          {
            "Title": "What does the Unit Cost on the YouTube Data API (v3)",
            "Url": "https://support.google.com/youtube/thread/1382733/what-does-the-unit-cost-on-the-youtube-data-api-v3-quota-calculator-mean-is-it-a-currency?hl=en",
            "Website": "https://support.google.com"
          },
          {
            "Title": "What does the Unit Cost on the YouTube Data API (v3)",
            "Url": "https://support.google.com/youtube/thread/1382733/what-does-the-unit-cost-on-the-youtube-data-api-v3-quota-calculator-mean-is-it-a-currency?hl=en",
            "Website": "https://support.google.com"
          }
        ]
      },
      {
        "Website": "https://www.labnol.org",
        "result": [
          {
            "Title": "How to Request Additional Quota for your YouTube API Project",
            "Url": "https://www.labnol.org/youtube-quota-request-201016",
            "Website": "https://www.labnol.org"
          },
          {
            "Title": "How to Request Additional Quota for your YouTube API Project",
            "Url": "https://www.labnol.org/youtube-quota-request-201016",
            "Website": "https://www.labnol.org"
          }
        ]
      },
      {
        "Website": "https://cloud.google.com",
        "result": [
          {
            "Title": "Pricing & quotas | API Keys API Documentation - Google Cloud",
            "Url": "https://cloud.google.com/api-keys/docs/pricing-and-quotas",
            "Website": "https://cloud.google.com"
          },
          {
            "Title": "Pricing & quotas | API Keys API Documentation - Google Cloud",
            "Url": "https://cloud.google.com/api-keys/docs/pricing-and-quotas",
            "Website": "https://cloud.google.com"
          }
        ]
      },
      {
        "Website": "https://www.freakyjolly.com",
        "result": [
          {
            "Title": "YouTube Data API v3 1M Units Limits Explained! - Freaky Jolly",
            "Url": "https://www.freakyjolly.com/youtube-data-api-v3-1m-units-limits-explained/",
            "Website": "https://www.freakyjolly.com"
          },
          {
            "Title": "YouTube Data API v3 1M Units Limits Explained! - Freaky Jolly",
            "Url": "https://www.freakyjolly.com/youtube-data-api-v3-1m-units-limits-explained/",
            "Website": "https://www.freakyjolly.com"
          }
        ]
      }
    ],
    "Videos": [
      {
        "Website": "https://www.youtube.com",
        "result": [
          {
            "DurationInSeconds": 240,
            "Title": "Intro to YouTube API and cost based quota for beginners 2021.",
            "URL": "https://www.youtube.com/watch?v=MHUGuw1Agnc",
            "Website": "https://www.youtube.com"
          },
          {
            "DurationInSeconds": 540,
            "Title": "YouTube Developers Live: Understanding Quota in v3",
            "URL": "https://www.youtube.com/watch?v=JNEJPffln1k",
            "Website": "https://www.youtube.com"
          },
          {
            "DurationInSeconds": 2400,
            "Title": "API Pricing Webinar (Benchmarks, API Pricing Strategy)",
            "URL": "https://www.youtube.com/watch?v=fiwRltya-Sw",
            "Website": "https://www.youtube.com"
          }
        ]
      }
    ]
  }
}
```
