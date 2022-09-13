# Google_Search_Command_Line_Program_Nodejs

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


2. After changing directory to project root and install dependencies with npm

``` cmd
  $ npm install 
```

3. Search  Google by  query string  with the command line  like

``` cmd
  $ node index.js elobyte
```


## Result


``` json
{
  "queryString": "elobyte",
  "PageOneResultCount": 18,
  "PageOneVideoResutlCount": 0,
  "pageOneSocialMediaCount": 4,
  "result": {
    "Social_Media": [
      {
        "Website": "https://www.linkedin.com",
        "result": [
          {
            "Title": "Embedded Logic Operations (ELO) - LinkedIn",
            "URL": "https://www.linkedin.com/company/elobyte",
            "Website": "https://www.linkedin.com"
          },
          {
            "Title": "Embedded Logic Operations (ELO) - LinkedIn",
            "URL": "https://www.linkedin.com/company/elobyte",
            "Website": "https://www.linkedin.com"
          }
        ]
      },
      {
        "Website": "https://www.facebook.com",
        "result": [
          {
            "Title": "ELO - Facebook",
            "URL": "https://www.facebook.com/elobyte",
            "Website": "https://www.facebook.com"
          },
          {
            "Title": "ELO - Facebook",
            "URL": "https://www.facebook.com/elobyte",
            "Website": "https://www.facebook.com"
          }
        ]
      }
    ],
    "Webpages": [
      {
        "Website": "https://elobyte.com",
        "result": [
          {
            "Title": "Elobyte",
            "Url": "https://elobyte.com/",
            "Website": "https://elobyte.com"
          },
          {
            "Title": "Elobyte",
            "Url": "https://elobyte.com/",
            "Website": "https://elobyte.com"
          }
        ]
      },
      {
        "Website": "https://medium.com",
        "result": [
          {
            "Title": "About elobyte-Software - Medium",
            "Url": "https://medium.com/elobyte-software/about",
            "Website": "https://medium.com"
          },
          {
            "Title": "About elobyte-Software - Medium",
            "Url": "https://medium.com/elobyte-software/about",
            "Website": "https://medium.com"
          },
          {
            "Title": "elobyte-Software – Medium",
            "Url": "https://medium.com/elobyte-software",
            "Website": "https://medium.com"
          },
          {
            "Title": "elobyte-Software – Medium",
            "Url": "https://medium.com/elobyte-software",
            "Website": "https://medium.com"
          }
        ]
      },
      {
        "Website": "https://www.templatemonster.com",
        "result": [
          {
            "Title": "Elobyte - Electronics Store WooCommerce Theme",
            "Url": "https://www.templatemonster.com/woocommerce-themes/elobyte-electronics-store-woocommerce-theme-98026.html",
            "Website": "https://www.templatemonster.com"
          },
          {
            "Title": "Elobyte - Electronics Store WooCommerce Theme",
            "Url": "https://www.templatemonster.com/woocommerce-themes/elobyte-electronics-store-woocommerce-theme-98026.html",
            "Website": "https://www.templatemonster.com"
          }
        ]
      },
      {
        "Website": "https://www.zoominfo.com",
        "result": [
          {
            "Title": "Elo - Overview, News & Competitors | ZoomInfo.com",
            "Url": "https://www.zoominfo.com/c/elo/547136524",
            "Website": "https://www.zoominfo.com"
          },
          {
            "Title": "Elo - Overview, News & Competitors | ZoomInfo.com",
            "Url": "https://www.zoominfo.com/c/elo/547136524",
            "Website": "https://www.zoominfo.com"
          }
        ]
      },
      {
        "Website": "https://www.instagram.com",
        "result": [
          {
            "Title": "Ejike Okonkwo (@jikeokonkwo) • Instagram photos and videos",
            "Url": "https://www.instagram.com/jikeokonkwo/?hl=en",
            "Website": "https://www.instagram.com"
          },
          {
            "Title": "Ejike Okonkwo (@jikeokonkwo) • Instagram photos and videos",
            "Url": "https://www.instagram.com/jikeokonkwo/?hl=en",
            "Website": "https://www.instagram.com"
          }
        ]
      },
      {
        "Website": "https://www.easyleadz.com",
        "result": [
          {
            "Title": "Aaqif Muhtasim - Embedded Logic Operations (elo) - Easyleadz",
            "Url": "https://www.easyleadz.com/people/aaqif-muhtasim",
            "Website": "https://www.easyleadz.com"
          },
          {
            "Title": "Aaqif Muhtasim - Embedded Logic Operations (elo) - Easyleadz",
            "Url": "https://www.easyleadz.com/people/aaqif-muhtasim",
            "Website": "https://www.easyleadz.com"
          }
        ]
      }
    ],
    "Videos": []
  }
}
```
