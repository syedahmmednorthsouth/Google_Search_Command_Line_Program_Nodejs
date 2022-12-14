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
1.Confirmation of installation of latest stable  Node version :
```cmd
  $ node -v
  v16.17.0

```

2. Clone the  repo

``` cmd
  $ git clone https://github.com/syedahmmednorthsouth/Google_Search_Command_Line_Program_Nodejs.git
```

3. Change directory

``` cmd
  $ cd Google_Search_Command_Line_Program_Nodejs
```


4. Install dependencies with npm

``` cmd
  $ npm install 
```

5. Search  Google by  query string  with the command line  like

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
  "results": {
    "Social_Media": [
      {
        "Website": "https://www.facebook.com",
        "results": [
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
      },
      {
        "Website": "https://www.linkedin.com",
        "results": [
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
      }
    ],
    "Webpages": [
      {
        "Website": "https://elobyte.com",
        "results": [
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
        "results": [
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
            "Title": "elobyte-Software ??? Medium",
            "Url": "https://medium.com/elobyte-software",
            "Website": "https://medium.com"
          },
          {
            "Title": "elobyte-Software ??? Medium",
            "Url": "https://medium.com/elobyte-software",
            "Website": "https://medium.com"
          }
        ]
      },
      {
        "Website": "https://www.easyleadz.com",
        "results": [
          {
            "Title": "Aaqif Muhtasim - Embedded Logic Operations (elo) - EasyLeadz",
            "Url": "https://www.easyleadz.com/people/aaqif-muhtasim",
            "Website": "https://www.easyleadz.com"
          },
          {
            "Title": "Aaqif Muhtasim - Embedded Logic Operations (elo) - EasyLeadz",
            "Url": "https://www.easyleadz.com/people/aaqif-muhtasim",
            "Website": "https://www.easyleadz.com"
          }
        ]
      },
      {
        "Website": "https://www.instagram.com",
        "results": [
          {
            "Title": "Ejike Okonkwo (@jikeokonkwo) ??? Instagram photos and videos",
            "Url": "https://www.instagram.com/jikeokonkwo/?hl=en",
            "Website": "https://www.instagram.com"
          },
          {
            "Title": "Ejike Okonkwo (@jikeokonkwo) ??? Instagram photos and videos",
            "Url": "https://www.instagram.com/jikeokonkwo/?hl=en",
            "Website": "https://www.instagram.com"
          }
        ]
      },
      {
        "Website": "https://www.templatemonster.com",
        "results": [
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
        "results": [
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
      }
    ],
    "Videos": []
  }
}
```
