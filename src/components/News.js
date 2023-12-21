import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const filteredData = [
      {
        "general": [
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "Cyclone Michaung | 1.73 lakh children receive Measles-Rubella vaccination in four flood-affected districts - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/news/cities/chennai/cyclone-michaung-173-lakh-children-receive-measles-rubella-vaccination-in-four-flood-affected-districts/article67654657.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-20T08:29:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Dhanya Nagasundaram",
            "title": "DOMS Share Price Live Updates: DOMS Industries share price trades choppy post robust listing; m-cap soars to ₹8,536 cr | Mint - Mint",
            "description": "DOMS Share Price Live Updates: DOMS Industries share price made a stellar debut on the bourses today. On NSE and BSE, DOMS Industries share price today was listed at  ₹1,400 per share, 77.2% higher than the issue price of  ₹790.",
            "url": "https://www.livemint.com/market/ipo/doms-share-price-live-updates-doms-industries-ipo-to-list-today-gmp-suggests-over-64-premium-11703035890814.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/DOMS_IPO_GMP_subscription_status_1702610642873_1703058332805.JPG",
            "publishedAt": "2023-12-20T08:24:10Z",
            "content": "DOMS Share Price Live Updates: The Street's looking forward to DOMS Industries IPO listing today. DOMS IPO allotment was finalised on Tuesday, December 19. DOMS Industries IPO listing time is schedul… [+17791 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Prashanth Neel: It’s Prabhas’ call to take A certificate for Salaar - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/prashanth-neel-its-prabhas-call-to-take-a-certificate-for-salaar.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-20T07:34:00Z",
            "content": "The eagerly anticipated pan-Indian biggie Salaar: Part 1 – Ceasefire, starring Prabhas and Prithviraj Sukumaran in lead roles, is poised to hit theaters on December 22, 2023.\r\nIn a recent interview w… [+824 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Tamil Nadu Rain: Central team likely to visit flood-hit areas of Southern districts; IAF helicopters continue operations | Mint - Mint",
            "description": "Tamil Nadu Rain: Persistent heavy rains in Tamil Nadu's Tirunelveli district have caused a flood-like situation, with buildings submerged in water. The Indian Air Force deployed helicopters to distribute food and relief materials to 500 stranded individuals a…",
            "url": "https://www.livemint.com/news/india/tamil-nadu-rain-flood-kanyakumari-southern-districts-indian-air-force-rescue-relief-operations-mk-stalin-pm-modi-imd-11703053488725.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/PTI12-18-2023-000331A-0_1703055298684_1703055333011.jpg",
            "publishedAt": "2023-12-20T07:19:17Z",
            "content": "The Office of Defence Minister Rajnath Singh on Wednesday affirmed that the Central Government is extending every possible aid to Tamil Nadu in response to the relentless rains causing widespread dev… [+3841 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Watch: Narrow Escape For UK Woman And Her Child As Car Flips And Falls In Front Of Them - NDTV",
            "description": "The woman later walked away from the car clutching her daughter and sitting down on a chair outside a restaurant.",
            "url": "https://www.ndtv.com/world-news/watch-narrow-escape-for-uk-woman-and-her-child-as-car-flips-and-falls-in-front-of-them-4708348",
            "urlToImage": "https://c.ndtvimg.com/2023-12/j8porn5_solihull-car-crash_625x300_20_December_23.jpeg?ver-20231203.06",
            "publishedAt": "2023-12-20T07:18:04Z",
            "content": "The incident took place in Olton, Solihull, on Saturday.\r\nA video of a woman and her child's incredible narrow escape from a serious injury has emerged on social media. It shows a car veering off a r… [+1563 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Meet Shubham Dubey, A Pan Stall Owner's Son Who Struck Rs 5.8 Crore Jackpot At IPL Auction - NDTV Sports",
            "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
            "url": "https://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
            "publishedAt": "2023-12-20T06:29:53Z",
            "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Dunki On Top Of The World: How Shah Rukh Khan Lit Up Dubai's Burj Khalifa With A Little Help From Drones - NDTV Movies",
            "description": "Shah Rukh promoted Dunki in Dubai like this",
            "url": "https://www.ndtv.com/entertainment/dunki-on-top-of-the-world-how-shah-rukh-khan-lit-up-dubais-burj-khalifa-with-a-little-help-from-drones-4708056",
            "urlToImage": "https://c.ndtvimg.com/2023-12/2pbgbmuo_dunki_625x300_20_December_23.jpeg",
            "publishedAt": "2023-12-20T06:22:57Z",
            "content": "A scene from the Dunki drone show in Dubai.\r\nNew Delhi: Shah Rukh Khan, who promoted his third film of the year Dunki in Dubai, did it in style and we expected nothing less. But the Dunki promotions … [+1724 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "NASA's James Webb Space Telescope Captures 'Cosmic Christmas Tree' Shining In Space - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com",
            "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
            "publishedAt": "2023-12-20T06:07:47Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "PM Modi breaks silence on allegation of India's assassination plot to kill Khalistani separatist Gurpatwant Pannun in US | Mint - Mint",
            "description": "For the first time, Prime Minister Narendra Modi has spoken on the allegation of an Indian assassination plot on US soil",
            "url": "https://www.livemint.com/news/india/pm-narendra-modi-breaks-silence-on-allegation-of-indias-assassiation-plot-in-us-soil-11703050881928.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Prime-Minister-Narendra-Modi_1703052473900_1703052474103.jpg",
            "publishedAt": "2023-12-20T05:48:11Z",
            "content": "For the first time, Prime Minister Narendra Modi has spoken on the allegation of an Indian assassination plot to kill khalistani separatists on US soil. In an interview with the Financial Times, PM M… [+2864 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Utter chaos as PBKS buy wrong player in IPL auction, auctioneer denies reversal - Hindustan Times",
            "description": "IPL 2024 auction: PBKS wanted to cancel bid for Shashank Singh after the hammer went down but auctioneer Mallika Sagar denied the request. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/utter-chaos-as-pbks-buy-wrong-player-in-ipl-2024-auction-denied-reversal-by-auctioneer-mallika-sagar-video-viral-101703048503937.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/mallika_preity_1703048947109_1703049036160.jpg",
            "publishedAt": "2023-12-20T05:23:39Z",
            "content": "If you are an uncapped player, landing an IPL deal is one of the biggest shots in the arm. When crores of rupees are spent on some of the biggest stars of international cricket in an IPL auction, all… [+3871 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Garena Free Fire Redeem Codes for December 20, 2023: Get leaked Booyah Pass rewards and daily codes | Mint - Mint",
            "description": "The Free Fire Season 12 Booyah Pass rewards have been leaked, with players having the option to acquire exclusive rewards through the free pass or by purchasing the premium pass.",
            "url": "https://www.livemint.com/technology/tech-news/garena-free-fire-redeem-codes-for-december-20-2023-get-leaked-booyah-pass-rewards-and-daily-codes-11703049139166.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/hhihiiiiii_1703049303191_1703049315608.png",
            "publishedAt": "2023-12-20T05:16:00Z",
            "content": "Over the recent days, players of Garena Free Fire have been presented with exciting chances to acquire impressive in-game items like the Steel Fortress Bundle, Iron Fortress Bundle, The Influencer, A… [+2911 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Suspended MPs Can't Enter Parliament Chambers, Lobby, Galleries: Lok Sabha Office - NDTV",
            "description": "After the suspension of 141 MPs--95 from Lok Sabha and 46 from Rajya Sabha--the Lok Sabha Secretariat issued a circular for the suspended MPs, barring them from entering the Parliament chamber, lobby and galleries.",
            "url": "https://www.ndtv.com/india-news/suspended-mps-cant-enter-parliament-chambers-lobby-galleries-lok-sabha-office-4707468",
            "urlToImage": "https://c.ndtvimg.com/2023-12/u98h03q8_lok-sabha-_625x300_18_December_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
            "publishedAt": "2023-12-20T04:20:06Z",
            "content": "New Delhi: After the suspension of 141 MPs--95 from Lok Sabha and 46 from Rajya Sabha--the Lok Sabha Secretariat issued a circular for the suspended MPs, barring them from entering the Parliament cha… [+2245 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Mahua Moitra's dig at RS chairman over mimicry video: ‘Unacceptable because…’ - Hindustan Times",
            "description": "Suspended Trinamool Congress MP Kalyan Banerjee apparently mimicked Rajya Sabha chairman Jagdeep Dhankhar during a protest in Parliament premises. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/mahua-moitras-dig-at-rajya-sabha-chairman-over-mimicry-video-obviously-unacceptable-because-101703043835251.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/mahua_moitra_on_mimicry_of_rajya_sabha_chairman_1703045705164_1703045705364.jpg",
            "publishedAt": "2023-12-20T04:17:56Z",
            "content": "Adding fuel to the controversy over video clips of suspended Trinamool Congress MP Kalyan Banerjee ostensibly mimicking Rajya Sabha chairman, TMC leader Mahua Moitra on Wednesday took a swipe at an u… [+1975 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Madhuchanda Dey",
            "title": "Have Indian IT stocks rallied way ahead of fundamentals? - Moneycontrol",
            "description": "Accenture earnings report flags the pockets of concern, going forward",
            "url": "https://www.moneycontrol.com/news/companies-2/have-indian-it-stocks-rallied-way-ahead-of-fundamentals-11930851.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/financial_services2-770x433.jpg",
            "publishedAt": "2023-12-20T04:13:42Z",
            "content": "Moneycontrol Pro Weekender: Jerome Powell and the Wizard of Oz\r\n Dec 16, 2023 / 12:47 PM IST\r\nIf Powell succeeds in steering the US economy to a soft landing, it will be a remarkable achievement, and… [+37 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Donald Trump's ousting is ‘Un-American’...: Vivek Ramaswamy stern ultimatum after Colorado order | Mint - Mint",
            "description": "US Presidential Elections 2024: Vivek Ramaswamy pledges to exit Colorado GOP primary if Trump is not allowed on the ballot.",
            "url": "https://www.livemint.com/news/world/us-presidential-elections-2024-vivek-ramaswamy-colorado-ballot-donald-trump-removal-politics-us-politics-news-latest-11703041844300.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/ALABAMA-DEBATE-21_1703043412313_1703043436812.jpg",
            "publishedAt": "2023-12-20T04:02:33Z",
            "content": "US Presidential Elections 2024: Republican Presidential candidate Vivek Ramaswamy has pledged to exit the GOP primary ballot in Colorado unless former US President Donald Trump is reinstated followin… [+5584 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "JN.1 Covid cases: Elders advised to mask up; no curbs on gatherings, inter-state travel yet - Times of India",
            "description": "The state government advises the elderly to wear masks in crowded places due to the detection of JN.1, a sub-variant of SARS-CoV2, and increasing Covi",
            "url": "https://timesofindia.indiatimes.com/city/bengaluru/elders-advised-to-mask-up-no-curbs-on-gatherings-inter-state-travel-yet/articleshow/106140863.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106144636,width-1070,height-580,imgsize-2332943,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:42:40Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Dunki vs Salaar advance box office collection Day 1: Prabhas’ film races past Shah Rukh Khan’s comedy drama by Rs 2.4 crore - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/entertainment/bollywood/dunki-vs-salaar-advance-box-office-collection-day-1-prabhas-film-races-past-shah-rukh-khans-comedy-drama-by-rs-2-4-crore-9075467/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T03:41:15Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Shivam Kumar Mishra",
            "title": "Space Tabby: Taters The Cat Stars In NASA`s Historic First Deep Space Video - Watch - Zee News",
            "description": "In an unprecedented feat of space communication, NASA’s Deep Space Optical Communications experiment has successfully transmitted an ultra-high definition video of a playful cat named Taters from a staggering distance of 31 million kilometres. This record-set…",
            "url": "https://zeenews.india.com/world/space-tabby-taters-the-cat-stars-in-nasa-s-historic-first-deep-space-video-watch-2700976.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/20/1339018-taters.png",
            "publishedAt": "2023-12-20T03:12:43Z",
            "content": "New Delhi: In an unprecedented feat of space communication, NASAs Deep Space Optical Communications experiment has successfully transmitted an ultra-high definition video of a playful cat named Tater… [+1553 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Gaurav Gupta",
            "title": "IPL Auction: Australia's Mitchell Starc and Pat Cummins land record deals - IndiaTimes",
            "description": "Cricket News: Australia's World Cup-winning stars Mitchell Starc and Pat Cummins broke the Rs 20cr barrier in the IPL auction in Dubai. Starc became the most expens",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-auction-australias-mitchell-starc-and-pat-cummins-land-record-deals/articleshow/106138883.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106139060,width-1070,height-580,imgsize-74546,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:04:09Z",
            "content": "Arshdeep, Avesh on fire as India crush Proteas in 1st ODI"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Tech Desk",
            "title": "Asteroid Alert! Colossal 1300-foot Asteroid 2008 EV5 Whizzes by Earth Today - Times Now",
            "description": "The massive 1,300-foot asteroid 2008 EV5 will make an exceptionally close pass of Earth on December 20th. It is even classified as potentially hazardous by NASA due to its mammoth size. Is it a matter of concern for Earthlings? NASA shares speed, distance, an…",
            "url": "https://www.timesnownews.com/technology-science/asteroid-alert-colossal-1300-foot-asteroid-2008-ev5-whizzes-by-earth-today-article-106138305",
            "urlToImage": "https://static.tnn.in/thumb/msid-106138373,thumbsize-76550,width-1280,height-720,resizemode-75/106138373.jpg",
            "publishedAt": "2023-12-20T02:23:47Z",
            "content": "IRFC Share Price Target 2024: Fresh Record 52-Week High For Railway Stock; Should you Buy, Sell or Hold? Analysts Recommend"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Advani, M M Joshi, and Ram Mandir: How the BJP veterans steered the party towards Hindutva - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/political-pulse/advani-m-m-joshi-ram-mandir-bjp-veterans-steered-party-hindutva-9075396/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T02:18:01Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Rahul Pratyush",
            "title": "Yearender 2023: Top 5 weight loss trends of 2023 - India TV News",
            "description": "As 2023 draws to a close, the landscape of weight management has undergone a fundamental shift. Gone are the days of restrictive regimes and fleeting fixes. Let's take a look at 5 trends that people adopted in their weight loss journey.",
            "url": "https://www.indiatvnews.com/lifestyle/news/yearender-2023-top-5-weight-loss-trends-of-2023-2023-12-20-908087",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/intro-1-1703036625.jpg",
            "publishedAt": "2023-12-20T02:03:52Z",
            "content": "As 2023 gracefully draws to a close, it's time to reflect on the year that was a year that witnessed a renewed focus on holistic well-being. In the arena of weight management, the trend was no differ… [+5322 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Sangeeta Ojha",
            "title": "Sovereign Gold Bond 2023-24 series 3: How to buy SGB from banks, post offices, stock exchanges. Step-by-step guide | Mint - Mint",
            "description": "The third tranche of the Sovereign Gold Bond scheme is open for subscription till December 22, with an issue price of  ₹6,199 per gram",
            "url": "https://www.livemint.com/money/personal-finance/sovereign-gold-bond-2023-24-series-3-how-to-buy-sgb-from-banks-post-offices-stock-exchanges-step-by-step-guide-11703032611893.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/SGB_series_3_1703036219810_1703036219951.jpg",
            "publishedAt": "2023-12-20T01:39:26Z",
            "content": "The third tranche of the Sovereign Gold Bond scheme - SGB 2023-24 Series III opened for subscription on December 18, and will remain available till December 22. The Reserve Bank of India (RBI) has fi… [+2567 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Sports Desk",
            "title": "RCB Stars To Make Debut, Ruturaj Gaikwad Out! India's Likely Playing XI For 3rd ODI Against South Africa - Times Now",
            "description": "India will face South Africa in the third ODI of the ongoing three-match series at Boland Park in Paarl on Thursday (December 21). India and South Africa have both won one match each in the series, and so the winner of the third ODI will seal the ODI series. …",
            "url": "https://www.timesnownews.com/sports/cricket/rcb-stars-to-make-debut-ruturaj-gaikwad-out-indias-likely-playing-xi-for-3rd-odi-against-south-africa-article-106137632",
            "urlToImage": "https://static.tnn.in/thumb/msid-106137632,width-1280,height-720,resizemode-75/106137632.jpg",
            "publishedAt": "2023-12-20T00:56:57Z",
            "content": "India's likely playing XI for 3rd ODI against South Africa. Picture Credit: X/@IPL, AP and X/@rrjjt_01"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Prabhas' 'Salaar' gets 1 am and 4 am shows in Telangana; government allows makers to hike ticket prices - IndiaTimes",
            "description": "The Telangana government has approved the screening of 'Salaar: Part One- Ceasefire' at 1 am and 4 am on its opening weekend, allowing the makers to h",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/prabhas-salaar-gets-1-am-and-4-am-shows-in-telangana-government-allows-makers-to-hike-ticket-prices/articleshow/106137517.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106137519,width-1070,height-580,imgsize-29160,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T00:32:54Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Soaked vs. dried raisins: Decoding health benefits - IndiaTimes",
            "description": "Soaked raisins, with their enhanced taste and nutritional profile, offer digestive harmony and a nutrient powerhouse. The soaking process activates en",
            "url": "https://timesofindia.indiatimes.com/life-style/food-news/soaked-vs-dried-raisins-decoding-health-benefits/articleshow/106130391.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106130391,width-1070,height-580,imgsize-93972,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T22:30:00Z",
            "content": "Rukmini Maitra soars to new travel heights, unleashing wanderlust wonders"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "India`s `Aditya-L1` to reach Lagrange Point 1 in January first week: Minister - WION",
            "description": "Indias Aditya-L1 to reach Lagrange Point 1 in January first week: Minister",
            "url": "https://www.wionews.com/science/indias-aditya-l1-to-reach-lagrange-point-1-in-january-first-week-minister-671519",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/11/26/395522-wion-images-2023-11-26t120127708.png",
            "publishedAt": "2023-12-19T20:43:31Z",
            "content": "Aditya-L1, India's first mission to study the Sun will reach its destination, the Lagrange Point 1 (L1) in the first week of January 2024, said Jitendra Singh, India's Minister of State (Science and … [+1988 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Rajesh Kumar Pandey",
            "title": "Allahabad high court allows suit on 'restoration' of temple at Gyanvapi site | India News - Times of India - Times of India",
            "description": "The Allahabad high court dismissed petitions by Anjuman Intezamia Masajid (AIM) and UP Sunni Central Waqf Board challenging civil suits seeking the ri",
            "url": "https://timesofindia.indiatimes.com/city/allahabad/allahabad-high-court-clears-way-for-further-asi-study-at-gyanvapi-mosque-if-required/articleshow/106134690.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106134728,width-1070,height-580,imgsize-370434,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T19:45:55Z",
            "content": "Breaking! Gyanvapi case: Allahabad HC dismisses Masjid Committees' petitions challenging suits seeking restoration of temple"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "Mamata Banerjee proposes Congress chief Mallikarjun Kharge as prime ministerial face of INDIA bloc - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/news/national/mamata-banerjee-proposes-congress-chief-mallikarjun-kharge-as-prime-ministerial-face-of-india-bloc/article67655812.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-19T17:44:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "China Earthquake Highlights: Death toll at 127, over 700 injured - Hindustan Times",
            "description": "China Earthquake Highlights: Death toll at 127, over 700 injured",
            "url": "https://www.hindustantimes.com/world-news/china-earthquake-live-updates-at-least-118-people-killed-in-gansu-qinghai-provinces-101702964710530.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/CHINA-QUAKE-28_1702984390176_1702984416729.jpg",
            "publishedAt": "2023-12-19T15:58:05Z",
            "content": "China Earthquake Highlights: In a tragic event, an overnight earthquake struck the northwestern region in China, resulting in the death of at least 118 people, according to state media reports on Tue… [+12688 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "RBI tightens rules for banks, NBFCs' investments in AIFs - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/rbi-tightens-rules-for-banks-nbfcs-investments-in-aifs-3943706",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/d47aeccd8f3f6670e13fec38c3578258_w_800_h_450.jpg",
            "publishedAt": "2023-12-19T14:45:47Z",
            "content": "Mumbai, Dec 19 (IANS) The RBI on Tuesday barred regulated entities (REs) such as banks and non-banking finance companies (NBFCs), from investing in any scheme of alternative investment funds (AIFs) w… [+1105 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Quordle 694 answer for December 19: Be smart with attempts! Check Quordle hints, clues, solutions - HT Tech",
            "description": "Quordle 694 answer for December 19: Today’s puzzle is a good time to push your winning streak and build it up. Use these Quordle hints, clues, and solutions to easily solve it.",
            "url": "https://tech.hindustantimes.com/how-to/quordle-694-answer-for-december-19-be-smart-with-attempts-check-quordle-hints-clues-solutions-71702992412661.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/19/1600x900/HT_Tech_25_1702992442881_1702992442990.jpg",
            "publishedAt": "2023-12-19T13:42:56Z",
            "content": "Quordle 694 answer for December 19: As we near Christmas, Quordle seems to be in a festive mood as well. And probably that's why today's puzzle is not as difficult as we have seen in recent times. Qu… [+2058 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Explained: Why Yemen's Houthi Rebels Are Attacking Israel, Red Sea Ships - NDTV",
            "description": "The Iran-aligned Houthis of Yemen are playing an escalating role in the conflict in the Middle East, attacking shipping in the Red Sea and firing drones and missiles at Israel in a campaign they say aims to support Palestinians in the Gaza war.",
            "url": "https://www.ndtv.com/world-news/houthi-rebels-red-sea-attacks-explained-explained-why-yemens-houthi-rebels-are-attacking-israel-red-sea-ships-4703429",
            "urlToImage": "https://c.ndtvimg.com/2023-12/0im3jh6g_houthi-rebels_625x300_19_December_23.jpeg?ver-20231203.06",
            "publishedAt": "2023-12-19T11:38:01Z",
            "content": "Houthis' slogan is \"Death to America, Death to Israel, curse the Jews and victory to Islam\"\r\nThe Iran-aligned Houthis of Yemen are playing an escalating role in the conflict in the Middle East, attac… [+3993 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Analytics Insight"
            },
            "author": "Shiva Ganesh",
            "title": "MediaTek and Nvidia Team Up for AI-powered Cars - Analytics Insight",
            "description": "Explore the groundbreaking collaboration between semiconductor giants MediaTek and Nvidia as they join forces to usher in a new era of automotive technology.",
            "url": "https://www.analyticsinsight.net/mediatek-and-nvidia-team-up-for-ai-powered-cars/",
            "urlToImage": "https://www.analyticsinsight.net/wp-content/uploads/2023/12/MediaTek-and-Nvidia-team-up-for-AI-powered-cars.jpg",
            "publishedAt": "2023-12-19T10:27:11Z",
            "content": "MediaTek and Nvidia unite for a transformative alliance in AI-powered automotive technology\r\nIn a groundbreaking collaboration, semiconductor giants MediaTek and Nvidia have joined forces to bring ar… [+3699 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Samsung Galaxy S24 Ultra Specifications Tipped: iPhone-Like Titanium Frame, 200-Megapixel Main Camera, More - ABP Live",
            "description": "Samsung Galaxy S24 Ultra is expected to be announced early next year.",
            "url": "https://news.abplive.com/technology/gadgets/samsung-galaxy-s24-ultra-specifications-samsung-galaxy-s24-ultra-leak-titanium-frame-gorilla-glass-details-iphone-15-apple-1651029",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/14/bb96969638df7f63f1219323c61d4b831702552832934402_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-19T07:44:57Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "LAKSHMI M.S",
            "title": "Winstrol vs Anavar 2024: Which One is Better? - Deccan Herald",
            "description": "Explore the Winstrol vs Anavar comparison in 2024 to determine which one is better. Learn about the differences, benefits, and considerations of Winstrol and Anavar",
            "url": "https://www.deccanherald.com/brandspot/featured/winstrol-vs-anavar-2024-which-one-is-better-2816977",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Fd1c6d545-799d-47e1-994e-e47fc36f02eb%2FPict_23.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-19T06:32:27Z",
            "content": "Are you looking for a way to boost your fitness progress and not sure which steroid is right for you? Then stop looking because we will tell you about the amazing world of Anavar and Winstrol in this… [+14862 chars]"
          }
        ]
      },
      {
        "science": [
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "China's Space Plane Puts Mysterious Objects in Earth Orbit - MSN",
            "description": null,
            "url": "https://www.msn.com/en-us/news/world/china-s-space-plane-puts-mysterious-objects-in-earth-orbit/ar-AA1lMcsO",
            "urlToImage": null,
            "publishedAt": "2023-12-20T07:52:19Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Nature.com"
            },
            "author": null,
            "title": "Granularity mediated multiple reentrances with negative magnetoresistance in disordered TiN thin films | Scientific Reports - Nature.com",
            "description": "Scientific Reports - Granularity mediated multiple reentrances with negative magnetoresistance in disordered TiN thin films",
            "url": "https://www.nature.com/articles/s41598-023-50091-7",
            "urlToImage": "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-023-50091-7/MediaObjects/41598_2023_50091_Fig1_HTML.png",
            "publishedAt": "2023-12-20T07:38:09Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "NASA shares new photo of Uranus - FOX 11 Los Angeles",
            "description": "NASA released new images of Uranus with rings showing outside the planet.Subscribe to FOX 11 on YouTube: https://www.youtube.com/channel/UCHfF8wFnipMeDpJf8Om...",
            "url": "https://www.youtube.com/watch?v=EO2blYejN6U",
            "urlToImage": "https://i.ytimg.com/vi/EO2blYejN6U/hqdefault.jpg",
            "publishedAt": "2023-12-20T06:56:26Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Tech Explorist"
            },
            "author": "Amit Malewar",
            "title": "New superconductor with on/off switches - Tech Explorist",
            "description": "Switchable, energy-efficient superconducting circuits.",
            "url": "https://www.techexplorist.com/new-superconductor-on-off-switches/78727/",
            "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/12/superconductivity.jpg",
            "publishedAt": "2023-12-20T06:51:55Z",
            "content": "Superconductivity is a special state of matter where electrical current can flow through a material with zero resistance, enabling perfect electronic transport efficiency. Power electromagnets use su… [+3501 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Nature.com"
            },
            "author": null,
            "title": "Civet latrines in three habitats of a coffee dominated landscape of the Western Ghats biodiversity hotspot | Scientific Reports - Nature.com",
            "description": "Scientific Reports - Civet latrines in three habitats of a coffee dominated landscape of the Western Ghats biodiversity hotspot",
            "url": "https://www.nature.com/articles/s41598-023-50193-2",
            "urlToImage": "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-023-50193-2/MediaObjects/41598_2023_50193_Fig1_HTML.png",
            "publishedAt": "2023-12-20T06:33:45Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "NASA's James Webb Space Telescope Captures 'Cosmic Christmas Tree' Shining In Space - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com",
            "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
            "publishedAt": "2023-12-20T06:07:47Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Powerful Solar Flare Caused Short-Term Radio Interference, NASA Reveals - NDTV",
            "description": "NASA has unveiled images of what it claims to be the most potent solar flare in six years.",
            "url": "https://www.ndtv.com/science/powerful-solar-flare-caused-short-term-radio-interference-nasa-reveals-4707777",
            "urlToImage": "https://c.ndtvimg.com/2023-12/7bbdqlpg_solar-flare-_625x300_20_December_23.jpeg?ver-20231203.06",
            "publishedAt": "2023-12-20T05:21:04Z",
            "content": "NASA's Solar Dynamics Observatory captured this image of a solar flare.\r\nNASA's telescope on Thursday captured the sun unleashing its fiery wrath on Earth with the most significant solar flare in yea… [+1470 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Ancient, dormant volcanoes discovered on floor of Southern Ocean | ABC News - ABC News (Australia)",
            "description": "Scientists onboard Hobart's RV investigator have discovered eight dormant underwater volcanoes in the southern ocean between Tasmania and Antarctica. They've...",
            "url": "https://www.youtube.com/watch?v=zgzXyx9xJxY",
            "urlToImage": "https://i.ytimg.com/vi/zgzXyx9xJxY/maxresdefault.jpg",
            "publishedAt": "2023-12-20T04:15:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Shivam Kumar Mishra",
            "title": "Space Tabby: Taters The Cat Stars In NASA`s Historic First Deep Space Video - Watch - Zee News",
            "description": "In an unprecedented feat of space communication, NASA’s Deep Space Optical Communications experiment has successfully transmitted an ultra-high definition video of a playful cat named Taters from a staggering distance of 31 million kilometres. This record-set…",
            "url": "https://zeenews.india.com/world/space-tabby-taters-the-cat-stars-in-nasa-s-historic-first-deep-space-video-watch-2700976.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/20/1339018-taters.png",
            "publishedAt": "2023-12-20T03:12:43Z",
            "content": "New Delhi: In an unprecedented feat of space communication, NASAs Deep Space Optical Communications experiment has successfully transmitted an ultra-high definition video of a playful cat named Tater… [+1553 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Hubble`s spectacular capture shows distant spiral galaxy with `forbidden` light - WION",
            "description": "Celestial masterpiece: Forbidden light of distant spiral galaxy captured by Hubble",
            "url": "https://www.wionews.com/science/hubbles-spectacular-capture-shows-distant-spiral-galaxy-with-forbidden-light-671530",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/20/400311-untitled-design-2023-12-20t075621638.png",
            "publishedAt": "2023-12-20T02:24:40Z",
            "content": "In a mesmerising display, Hubble Space Telescope captured the enigmatic glow of a distant spiral galaxy, MCG-01-24-014 emanating its \"forbidden\" light, situated a staggering 275 million light-years a… [+2773 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Tech Desk",
            "title": "Asteroid Alert! Colossal 1300-foot Asteroid 2008 EV5 Whizzes by Earth Today - Times Now",
            "description": "The massive 1,300-foot asteroid 2008 EV5 will make an exceptionally close pass of Earth on December 20th. It is even classified as potentially hazardous by NASA due to its mammoth size. Is it a matter of concern for Earthlings? NASA shares speed, distance, an…",
            "url": "https://www.timesnownews.com/technology-science/asteroid-alert-colossal-1300-foot-asteroid-2008-ev5-whizzes-by-earth-today-article-106138305",
            "urlToImage": "https://static.tnn.in/thumb/msid-106138373,thumbsize-76550,width-1280,height-720,resizemode-75/106138373.jpg",
            "publishedAt": "2023-12-20T02:23:47Z",
            "content": "IRFC Share Price Target 2024: Fresh Record 52-Week High For Railway Stock; Should you Buy, Sell or Hold? Analysts Recommend"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Vicky Stavropoulou",
            "title": "En quelle année les humains reviendront-ils sur la Lune ? - CityLife",
            "description": "En quelle année les humains reviendront-ils sur la Lune ? - La vie en ville",
            "url": "https://citylife.capetown/fr/webstories/what-year-will-humans-return-to-the-moon/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_projects_0a02029e-5187-4ff8-9303-3ed3330cf122.jpeg",
            "publishedAt": "2023-12-20T01:34:29Z",
            "content": "Résumé: La question de savoir quand les humains reviendront sur la Lune a fait lobjet de nombreuses spéculations et anticipations. Avec les progrès de la technologie dexploration spatiale et lintérêt… [+4250 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Eurasia Review"
            },
            "author": "Eurasia Review",
            "title": "Exoplanets' Climate: It Takes Nothing To Switch From Habitable To Hell - Eurasia Review",
            "description": null,
            "url": "https://www.eurasiareview.com/20122023-exoplanets-climate-it-takes-nothing-to-switch-from-habitable-to-hell/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T23:36:11Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Live Science"
            },
            "author": "Joanna Thompson",
            "title": "NASA finds key ingredient for life gushing out of Saturn's icy moon Enceladus - Livescience.com",
            "description": "Scientists have discovered complex molecules in the gas and vapor plumes escaping from Enceladus's icy core — and one of them, hydrogen cyanide, is a precursor for life.",
            "url": "https://www.livescience.com/space/saturn/nasa-finds-key-ingredient-for-life-gushing-out-of-saturns-icy-moon-enceladus",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/nqifkMdf4bcF8tgpuQRuhj-1200-80.jpg",
            "publishedAt": "2023-12-19T21:56:36Z",
            "content": "Saturn's moon Enceladus has a secret lurking beneath its icy outer crust. In the plumes of vapor jetting from its surface\r\n, scientists have detected a molecule that might be a precursor for life: hy… [+2691 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Study Finds"
            },
            "author": "StudyFinds Staff",
            "title": "Real-life Godzilla? Giant Japanese 'blue dragon' terrorized Pacific 72 million years ago - Study Finds",
            "description": "University of Cincinnati scientists have uncovered a mosasaur, a massive marine reptile, that lived 72 million years ago, resembling the size of a great white shark.",
            "url": "https://studyfinds.org/blue-dragon-pacific/",
            "urlToImage": "https://studyfinds.org/wp-content/uploads/2023/12/sea-dragon-3-scaled.jpeg",
            "publishedAt": "2023-12-19T21:01:04Z",
            "content": "CINCINNATI — Godzilla isn’t the only monster that terrorized Japanese waters. University of Cincinnati scientists have uncovered a mosasaur, a massive marine reptile, that lived 72 million years ago,… [+3725 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "India`s `Aditya-L1` to reach Lagrange Point 1 in January first week: Minister - WION",
            "description": "Indias Aditya-L1 to reach Lagrange Point 1 in January first week: Minister",
            "url": "https://www.wionews.com/science/indias-aditya-l1-to-reach-lagrange-point-1-in-january-first-week-minister-671519",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/11/26/395522-wion-images-2023-11-26t120127708.png",
            "publishedAt": "2023-12-19T20:43:31Z",
            "content": "Aditya-L1, India's first mission to study the Sun will reach its destination, the Lagrange Point 1 (L1) in the first week of January 2024, said Jitendra Singh, India's Minister of State (Science and … [+1988 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Interesting Engineering"
            },
            "author": "Shubhangi Dua",
            "title": "Some stars could eat small black holes in revenge attack, finds study - Interesting Engineering",
            "description": "These primordial black holes, formed within the first second after the Big Bang, might exist within the Sun, contributing to its luminosity.",
            "url": "https://interestingengineering.com/science/some-stars-could-eat-small-black-holes-in-revenge-attack-finds-study",
            "urlToImage": "https://dnd2oi6izkvoi.cloudfront.net/2023/12/19/image/jpeg/rnbLZN1AvjT3n9XwEyHIf0aZYHaHL9S0j7AdkM42.jpg",
            "publishedAt": "2023-12-19T19:29:00Z",
            "content": "Additionally, this insight offers a potential explanation for the existence of dark matter, scientists asserted. \r\nEvolution of the Sun\r\nThey noted that the theory explores the consequences of such b… [+1178 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Phys.Org"
            },
            "author": "Andy Tomaswick",
            "title": "Astronomers scan hundreds of stars for 'anomalous transits' - Phys.org",
            "description": "Telescopes have been collecting copious amounts of data on exoplanets in recent years. One of the most common datasets tracks what are known as transits, when an exoplanet crosses in front of its host star and dims the star's light slightly as it does so. The…",
            "url": "https://phys.org/news/2023-12-astronomers-scan-hundreds-stars-anomalous.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/telescope.jpg",
            "publishedAt": "2023-12-19T19:16:17Z",
            "content": "Telescopes have been collecting copious amounts of data on exoplanets in recent years. One of the most common datasets tracks what are known as transits, when an exoplanet crosses in front of its hos… [+4131 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "BNN Correspondents",
            "title": "JAXA's MMX Mission: A Journey to Uncover the Secrets of Mars' Moons - BNN Breaking",
            "description": "The Japan Aerospace Exploration Agency (JAXA) aims to uncover the mystery of Mars' moons, Phobos and Deimos, through the Martian Moon eXploration (MMX) mission, set to launch in 2024. The mission could shed light on the early Solar System and Mars' original w…",
            "url": "https://bnnbreaking.com/world/japan/jaxas-mmx-mission-a-journey-to-uncover-the-secrets-of-mars-moons/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T18:37:00Z",
            "content": "In the vast expanse of the cosmos, the Martian moons, Phobos and Deimos, have long been a source of intrigue. The mystery of their originwhether they are debris from a massive impact on Mars or captu… [+2248 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Inshorts.com"
            },
            "author": "Daisy Mowke",
            "title": "Last meteor shower of 2023 to peak this week | Geminids meteor shower peaked earlier this month | Inshorts - Inshorts",
            "description": "The Ursids, the final meteor shower of 2023, has begun and is expected to peak on December 23. The Ursids are",
            "url": "https://inshorts.com/en/news/last-meteor-shower-of-2023-to-peak-this-week-1703001150152",
            "urlToImage": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/12_dec/19_tue/img_1703000136436_240.jpg?",
            "publishedAt": "2023-12-19T18:18:33Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Pan of galaxy cluster SDSS J1226+2152 - HubbleWebbESA",
            "description": "The vast galaxy cluster SDSS J1226+2152 in the constellation Coma Berenices is distorting the images of distant background galaxies into streaks and smears o...",
            "url": "https://www.youtube.com/watch?v=ypuMVE-U6Pk",
            "urlToImage": "https://i.ytimg.com/vi/ypuMVE-U6Pk/hqdefault.jpg",
            "publishedAt": "2023-12-19T16:48:04Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NASA"
            },
            "author": "John Gould",
            "title": "NASA to Co-Host Stability and Control Prediction Workshop - NASA",
            "description": "NASA will co-host the two-day Stability and Control Prediction Workshop II (S&CPW2) during the American Institute of Aeronautics and Astronautics’ (AIAA)",
            "url": "https://www.nasa.gov/directorates/armd/tacp/armd-tacp-ttt/scpw2/",
            "urlToImage": "https://www.nasa.gov/wp-content/uploads/2023/12/c67a7984-highres.jpg",
            "publishedAt": "2023-12-19T16:30:01Z",
            "content": "NASA will co-host the two-day Stability and Control Prediction Workshop II (S&amp;CPW2) during the American Institute of Aeronautics and Astronautics (AIAA) annual SciTech Forum in January 2025.\r\nA k… [+2247 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Shreyansh Mangla",
            "title": "9 stunning images of the solar system shared by NASA in 2023 - IndiaTimes",
            "description": "If you're a regular user of social media, you're probably familiar with NASA sharing breathtaking images of our solar system—some of which are truly unbelievable, while others are stunningly beautiful. As 2023 is coming to an end, let's take a look at some of…",
            "url": "https://timesofindia.indiatimes.com/etimes/trending/9-stunning-images-of-the-solar-system-shared-by-nasa-in-2023/photostory/106125582.cms",
            "urlToImage": "https://static.toiimg.com/photo/106125921.cms",
            "publishedAt": "2023-12-19T16:30:00Z",
            "content": "Our solar system is a collection of the Sun, planets, over 100 moons, comets, asteroids, and dwarf planets like Pluto, is classified into three belts: inner, outer, and the Kuiper Belt. These belts s… [+189 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gulf Today"
            },
            "author": null,
            "title": "Ancient ocean water could help climate modelling - Gulf Today",
            "description": "A team of researchers from India and Japan have found water droplets trapped in mineral deposits in the Kumaon mountains in the Indian state of Uttarakhand that were likely left from an ancient ocean dating back some 600 million years, as reported by Mongabay…",
            "url": "https://gulftoday.ae/opinion/2023/12/19/ancient-ocean-water-could-help-climate-modelling",
            "urlToImage": "http://gulftoday.ae/-/media/gulf-today/images/articles/opinion/2023/12/19/mountains.ashx?h=450&w=750&hash=7E9A781865093618FC92A151F265ED5D",
            "publishedAt": "2023-12-19T16:08:27Z",
            "content": "Representational image. \r\nA team of researchers from India and Japan have found water droplets trapped in mineral deposits in the Kumaon mountains in the Indian state of Uttarakhand that were likely … [+4246 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "SpaceNews"
            },
            "author": "Jeff Foust",
            "title": "Peregrine lunar lander ready for January launch - SpaceNews",
            "description": "Astrobotic’s first lunar lander is ready for a launch in early January that would set up a landing on the moon in late February.",
            "url": "https://spacenews.com/peregrine-lunar-lander-ready-for-january-launch/",
            "urlToImage": "https://spacenews.com/wp-content/uploads/2023/12/peregrine-vulcan.jpg",
            "publishedAt": "2023-12-19T15:52:18Z",
            "content": "WASHINGTON Astrobotics first lunar lander is ready for a launch in early January that would set up a landing on the moon in late February.\r\nThe Pittsburgh-based company announced Dec. 19 that its Per… [+3523 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Nasa’s Hubble reveals captivating image of irregular galaxy NGC 2814 | Mint - Mint",
            "description": "The National Aeronautics and Space Administration (NASA) recently shared a captivating image of an irregular galaxy NGC 2814 located approximately 85 million light-years away from Earth in the constellation of Ursa Major.",
            "url": "https://www.livemint.com/science/news/nasas-hubble-reveals-captivating-image-of-irregular-galaxy-ngc-2814-11703000331660.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/NGC2814_1703000502600_1703000509897.PNG",
            "publishedAt": "2023-12-19T15:47:03Z",
            "content": "The National Aeronautics and Space Administration (NASA) recently shared a captivating image of an irregular galaxy NGC 2814 located approximately 85 million light-years away from Earth in the conste… [+2268 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Azoquantum.com"
            },
            "author": null,
            "title": "Webb Reveals Secrets of Globular Clusters in Distant Galaxy Pileup - AZoQuantum",
            "description": "Two astronomers from McMaster have studied a distant giant cluster of galaxies 3.5 billion years ago using new deep imaging data from the James Webb Space Telescope.",
            "url": "https://www.azoquantum.com/News.aspx?newsID=9993",
            "urlToImage": "https://dwg31ai31okv0.cloudfront.net/images/news/ImageForNews_9993_17029905476913838.jpg",
            "publishedAt": "2023-12-19T15:33:00Z",
            "content": "Two astronomers from McMaster have studied a distant giant cluster of galaxies 3.5 billion years ago using new deep imaging data from the James Webb Space Telescope.\r\nJames Webb Space Telescope image… [+2709 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Timesofindia.com"
            },
            "author": "Rishabh Raj",
            "title": "8 common foods that are banned from space - Recipes",
            "description": "The zero gravity makes it even more cumbersome and even eating is a challenge, and that's the reason,there are certain foods that are banned from space. Take a look.",
            "url": "https://recipes.timesofindia.com/web-stories/8-common-foods-that-are-banned-from-space/photostory/106126908.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106126918,imgsize-80786,width-900,height-1200,resizemode-6/106126918.jpg",
            "publishedAt": "2023-12-19T15:30:00Z",
            "content": "Space life might sound interesting and exciting, but it is full of challenges too. The zero gravity makes it even more cumbersome and even eating is a challenge, and that's the reason,there are certa… [+48 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News-Medical.Net"
            },
            "author": null,
            "title": "From Neanderthals to now: Tracing the evolution of human sleep cycles - News-Medical.Net",
            "description": "Researchers examined the differences in circadian biology between the ancestors of modern humans and the archaic hominins such as Denisovans and Neanderthals and the contribution of archaic introgression in human chronotypes by using genomes to trace chronoty…",
            "url": "https://www.news-medical.net/news/20231219/From-Neanderthals-to-now-Tracing-the-evolution-of-human-sleep-cycles.aspx",
            "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_767558_17029928585007724.jpg",
            "publishedAt": "2023-12-19T13:45:00Z",
            "content": "In a recent study published in the journal Genome Biology and Evolution, researchers examined the differences in circadian biology between the ancestors of modern humans and the archaic hominins such… [+5097 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Robert Andrew",
            "title": "Hanle Dark Sky Reserve: A Celestial Delight - CityLife",
            "description": "Hanle Dark Sky Reserve: A Celestial Delight - CityLife",
            "url": "https://citylife.capetown/webstories/hanle-dark-sky-reserve-a-celestial-delight/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_programming_5e101ec2-1cae-4a99-8d6a-06ee3a707f13.jpeg",
            "publishedAt": "2023-12-19T13:14:21Z",
            "content": "Summary: The Hanle Dark Sky Reserve in Ladakh recently witnessed a stunning display of the Geminid meteor shower. Equipped with advanced telescopes, the Indian Astronomical Observatory captured this … [+2062 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "The Science Quiz | The Expanding Universe - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/sci-tech/science/the-science-quiz-the-expanding-universe/article67654528.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-19T13:07:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX launches 23 Starlink satellites after series of delays, nails landing - VideoFromSpace",
            "description": "A SpaceX Falcon 9 rocket  launched 23 Starlink spacecraft from Florida's Cape Canaveral Space Force Station atop a Falcon 9 rocket on Dec. 18, 2023 at 11:01 ...",
            "url": "https://www.youtube.com/watch?v=GZc3b_1jdFs",
            "urlToImage": "https://i.ytimg.com/vi/GZc3b_1jdFs/maxresdefault.jpg",
            "publishedAt": "2023-12-19T12:30:13Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Geminid meteor shower witnessed from India’s dark sky reserve | See pic - IndiaTimes",
            "description": "Trending News: The Geminid meteor shower was witnessed at Hanle, as observers captured the breathtaking moment of t",
            "url": "https://timesofindia.indiatimes.com/etimes/trending/geminid-meteor-shower-witnessed-from-indias-dark-sky-reserve-see-pic/articleshow/106114501.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106114492,width-1070,height-580,imgsize-887950,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T12:30:00Z",
            "content": "Alia Bhatt had a Q&amp;A session on Instagram where she shared details about her workout routine. She works out six days a week, combining strength training, yoga/pilates, and cardio. She also reveal… [+342 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dynamitenews.com"
            },
            "author": null,
            "title": "AI creates proteins with high binding strengths - Dynamite News",
            "description": "A recent study published in Nature describes an AI-driven advancement in biotechnology with implications for medication discovery, disease diagnosis, and environmental monitoring. Read further on Dynamite News:",
            "url": "https://www.dynamitenews.com/story/ai-creates-proteins-with-high-binding-strengths",
            "urlToImage": "https://www.dynamitenews.com/images/2023/12/19/ai-creates-proteins-with-high-binding-strengths/658188035ce32.jpg",
            "publishedAt": "2023-12-19T12:12:08Z",
            "content": "A recent study published in Nature describes an AI-driven advancement in biotechnology with implications for medication discovery, disease diagnosis, and environmental monitoring. Read further on Dyn… [+3995 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gearrice.com"
            },
            "author": "Advay Hora",
            "title": "It is the result of observing the Andromeda galaxy for 100 hours: a photo that leaves us speechless - Gearrice",
            "description": "Join the conversation",
            "url": "https://www.gearrice.com/update/it-is-the-result-of-observing-the-andromeda-galaxy-for-100-hours-a-photo-that-leaves-us-speechless/",
            "urlToImage": "https://www.mundodeportivo.com/urbantecno/hero/2023/12/imagen-de-la-galaxia-andromeda.png",
            "publishedAt": "2023-12-19T11:11:16Z",
            "content": "Image of the Andromeda galaxy.\r\nSince the origin of the universe, stars, planets and other celestial bodies have taken over the cosmos, in an endless dance. We, an insignificant race before the vast … [+2229 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Space.com"
            },
            "author": "Leonard David",
            "title": "These scientists want to put a massive 'sunshade' in orbit to help fight climate change - Space.com",
            "description": "A group has been formed to study and promote a space-based sunshade as a method to help fend off global climate change.",
            "url": "https://www.space.com/sunshade-earth-orbit-climate-change",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/kM9Vcyyai5x4pjmKqL9qie-1200-80.jpg",
            "publishedAt": "2023-12-19T11:00:51Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "GUSTO telescope to launch on a balloon! This NASA mission will map space between stars in Milky Way Galaxy - HT Tech",
            "description": "GUSTO telescope to launch on a balloon! This NASA mission will map space between stars in Milky Way Galaxy",
            "url": "https://tech.hindustantimes.com/tech/news/gusto-telescope-to-launch-on-a-balloon-this-nasa-mission-will-map-space-between-stars-in-milky-way-galaxy-71702978073167.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/19/1600x900/gusto5_1702979940459_1702979958334.webp",
            "publishedAt": "2023-12-19T10:05:59Z",
            "content": "NASA never fails to amaze with its groundbreaking projects. Currently, NASA scientists and Engineers are gearing up for an extraordinary NASA experiment named GUSTO (Galactic/Extragalactic ULDB Spect… [+3087 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "Radifah Kabir",
            "title": "The Tale Of The Two Rogue Tomatoes: Missing Fruits Found On ISS A Year After NASA Astronaut Frank Rubio Lost Them - ABP Live",
            "description": "An interesting tale of food on the space station is that of two rogue tomatoes which were lost while NASA astronaut Frank Rubio was working on an experiment called XROOTS.",
            "url": "https://news.abplive.com/science/tomatoes-two-rogue-tomatoes-international-space-station-fruits-recovered-on-iss-a-year-after-nasa-astronaut-frank-rubio-lost-them-1651028",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/19/8e5953a8d43019a3d20893019712f4821702971988932324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-19T08:59:33Z",
            "content": "Plant research and food production on the International Space Station are ambitious experiments because successfully growing crops on the orbital outpost will help astronauts understand what needs to… [+4652 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Science Desk",
            "title": "Orbiter discovers unique ridges on Mars revealing ice once flowed on Red Planet - India Today",
            "description": "The MRO, a veteran observer of the Red Planet since 2006, utilised its sophisticated instruments to capture these features, which are indicative of a dynamic history involving liquid and frozen water.",
            "url": "https://www.indiatoday.in/science/story/orbiter-discovers-unique-ridges-on-mars-revealing-ice-once-flowed-on-red-planet-2477754-2023-12-19",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/mars-074213522-16x9.jpeg?VersionId=KGt_totzjEFvkrinBiW2ArALP30RBTUp",
            "publishedAt": "2023-12-19T06:35:27Z",
            "content": "Nasa's Mars Reconnaissance Orbiter (MRO) revealed intricate ridged lines etched into the Martian terrain, evidence of ice movement beyond the planet's polar regions. \r\nThis significant find suggests … [+1714 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Winter Solstice 2023: Jupiter and Moon set up a date on longest night of year - WION",
            "description": "Winter Solstice 2023: Jupiter and Moon set up a date on longest night of year",
            "url": "https://www.wionews.com/science/winter-solstice-2023-jupiter-and-moon-will-meet-up-in-sky-on-the-longest-night-of-the-year-671191",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/19/400102-untitled-design-2023-12-19t114632344.png",
            "publishedAt": "2023-12-19T06:34:25Z",
            "content": "Another celestial package is on the way for all skygazers! With winters officially approaching the Northern Hemisphere with winter solstice, it also brings an astronomical treat for skywatchers. This… [+1909 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Chemie.de"
            },
            "author": null,
            "title": "Competitor for diamonds: Scientists produce superhard multifunctional carbon nitrides - Chemie.de",
            "description": "In a groundbreaking piece of research, scientists have synthesised long-sought carbon nitrogen compounds and unlocked the potential of carbon nitrides as a new class of superhard multifunctional m ...",
            "url": "https://www.chemeurope.com/en/news/1182308/competitor-for-diamonds-scientists-produce-superhard-multifunctional-carbon-nitrides.html",
            "urlToImage": "https://img.chemie.de/Portal/News/657fea200fe62_-Pj4zSOAk.jpg?tr=w-2126,h-1594,cm-extract,x-0,y-297:n-xzoom",
            "publishedAt": "2023-12-19T05:38:21Z",
            "content": "In a groundbreaking piece of research, scientists have synthesised long-sought carbon nitrogen compounds and unlocked the potential of carbon nitrides as a new class of superhard multifunctional mate… [+2901 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Frontierindia.com"
            },
            "author": "Frontier India News Network",
            "title": "Giant Leap for Giant Telescope: 18 Segments of ELT's Mega-Mirror Begin their Epic Odyssey to Chile - Frontier India",
            "description": "The first eighteen segments of the European Southern Observatory's Extremely Large Telescope's (ESO's)",
            "url": "https://frontierindia.com/briefs/giant-leap-for-giant-telescope-18-segments-of-elts-mega-mirror-begin-their-epic-odyssey-to-chile/",
            "urlToImage": "https://frontierindia.com/briefs/wp-content/uploads/2023/12/ELT-M1-segments-take-shape-at-Safran-Reosc-polishing-facilities.webp",
            "publishedAt": "2023-12-19T05:08:33Z",
            "content": "The first eighteen segments of the European Southern Observatorys Extremely Large Telescopes (ESOs) primary mirror (M1) have been delivered to ESO and subsequently shipped to Chile, marking a signifi… [+3103 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Asteroid 2023 XS, moving at whopping 32653 kmph, set to pass Earth; NASA reveals details - HT Tech",
            "description": "NASA has tracked Asteroid 2023 XS in its orbit which will bring it close to Earth today, December 19. Know details such as its speed, size, distance of approach, and more.",
            "url": "https://tech.hindustantimes.com/tech/news/asteroid-2023-xs-moving-at-whopping-32653-kmph-set-to-pass-earth-nasa-reveals-details-71702962265528.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/19/1600x900/asteroid_3_1697976915005_1702962325413.jpg",
            "publishedAt": "2023-12-19T05:06:20Z",
            "content": "NASA says that the orbits of asteroids can be changed by Jupiter's massive gravity and by occasional close encounters with planets like Mars or other objects. These accidental encounters can knock as… [+1772 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Newsdrum.in"
            },
            "author": "NewsDrum Desk",
            "title": "Why are some black holes bigger than others? An astronomer explains how these celestial vacuums grow - NewsDrum",
            "description": "Arizona, Dec 19 (The Conversation) Black holes are dense astronomical objects with gravity so strong that nothing, not even light, can escape. Anything that cro...",
            "url": "https://www.newsdrum.in/international/why-are-some-black-holes-bigger-than-others-an-astronomer-explains-how-these-celestial-vacuums-grow-2031623",
            "urlToImage": "https://img-cdn.thepublive.com/fit-in/1200x675/",
            "publishedAt": "2023-12-19T05:00:36Z",
            "content": "Arizona, Dec 19 (The Conversation) Black holes are dense astronomical objects with gravity so strong that nothing, not even light, can escape. Anything that crosses the boundary of a black holes grav… [+3458 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "An extremely rare and endangered bat species has been found in Corsica in France - WION",
            "description": "An extremely rare and endangered bat species has been found in Corsica in France",
            "url": "https://www.wionews.com/science/scientists-find-very-rare-creature-on-french-island-671131",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/19/400045-new.png",
            "publishedAt": "2023-12-19T04:27:01Z",
            "content": "Researchers have discovered a new creature considered to be very rare and endangered on the French island of Corsica.\r\nThis rare species of bat was found fluttering around the mountainous Mediterrane… [+1644 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Scientists now know what happened to a chunk of Earth’s crust missing for millions of years - WION",
            "description": "Scientists now know what happened to a chunk of Earth’s crust missing for millions of years",
            "url": "https://www.wionews.com/science/scientists-reveal-how-oceans-ate-up-large-part-of-earths-crust-671110",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/19/400033-86623web.jpg",
            "publishedAt": "2023-12-19T03:34:51Z",
            "content": "Scientists have recently unravelled the mystery of \"The Great Unconformity,\" a phenomenon where large sections of the Earth's crust are missing from the geological record. \r\nExperts have now conclude… [+2086 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Here's how astronauts workout in space and why is it important - Times of India - IndiaTimes",
            "description": "Trending News: This article discusses the challenges of maintaining physical fitness in microgravity on the Interna",
            "url": "https://timesofindia.indiatimes.com/etimes/trending/heres-how-astronauts-workout-in-space-and-why-is-it-important/articleshow/106099552.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106099574,width-1070,height-580,imgsize-54368,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T03:30:00Z",
            "content": "Alia Bhatt had a Q&amp;A session on Instagram where she shared details about her workout routine. She works out six days a week, combining strength training, yoga/pilates, and cardio. She also reveal… [+342 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Jocelyn Fernandes",
            "title": "Year-Ender 2023: A Look at the Top 11 Space Moments of 2023 | Mint - Mint",
            "description": "From private space attempts to countries notching new triumphs, 2023 saw a host of moments to remember from the space sector this year. We take a look.",
            "url": "https://www.livemint.com/science/news/yearender-2023-a-look-at-the-top-11-space-moments-of-2023-11702710071902.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/earth_seen_from_space_ISS_1702710961995_1702710962162.jpg",
            "publishedAt": "2023-12-19T03:15:37Z",
            "content": "From private space attempts to countries notching new triumphs, 2023 saw a host of moments to remember from the space sector this year. From rocket launches to space tourists, the emergence of new ga… [+11125 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Experts study ’13 solar flare, unravel factors influencing space weather - Times of India",
            "description": "Bengaluru: In a groundbreaking study, scientists from the Bengaluru-based Indian Institute of Astrophysics (IIA) have unravelled the mysteries surroun.",
            "url": "https://timesofindia.indiatimes.com/city/bengaluru/experts-study-13-solar-flare-unravel-factors-influencing-space-weather/articleshow/106107361.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106107359,width-1070,height-580,imgsize-6304,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T02:45:32Z",
            "content": "Dr. APJ Abdul Kalam: Inspiring quotes on life and success"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": null,
            "title": "The other side of California on US Route 395 - Mint Lounge",
            "description": "El Camino Sierra takes you past ancient bristlecone pines and glacial lakes where the weather turns in an instant",
            "url": "https://lifestyle.livemint.com/news/big-story/travel-california-us-route-395-111702647219696.html",
            "urlToImage": "https://images.livemint.com/img/2023/12/15/1140x641/Sunset_view_from_the_Silver_Canyon_Road_1702648121587_1702648129484.jpg",
            "publishedAt": "2023-12-19T00:34:15Z",
            "content": "All the leaves are brown and the sky is grey/ Id be safe and warm if I was in LA/ California dreamin on such a winters day...\r\nSo go the lyrics of California Dreamin, that super song by The Mamas and… [+4899 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "CU students help study distant, turbulent 'Hot Jupiters' - 9NEWS",
            "description": "Students helped build a probe to better understand how the planets' atmospheres appear to be getting rapidly stripped away. More local videos here: https://y...",
            "url": "https://www.youtube.com/watch?v=F5We_SRMoEI",
            "urlToImage": "https://i.ytimg.com/vi/F5We_SRMoEI/hqdefault.jpg",
            "publishedAt": "2023-12-19T00:14:10Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Earth.com"
            },
            "author": null,
            "title": "Scientists have 20-minute \"conversation\" with a humpback whale named Twain - Earth.com",
            "description": "In an unprecedented encounter, a research team successfully engaged in a \"conversation\" with a humpback whale named Twain.",
            "url": "https://www.earth.com/news/scientists-have-20-minute-conversation-with-a-humpback-whale-named-twain/",
            "urlToImage": "https://cff2.earth.com/uploads/2023/12/18120048/humpback-whale_scientists_ship_2medium.jpg",
            "publishedAt": "2023-12-19T00:10:09Z",
            "content": "In an unprecedented encounter, a research team successfully engaged in a “conversation” with a humpback whale named Twain. The team, known as Whale-SETI, has been conducting research on humpback whal… [+3199 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Gabriel Botha",
            "title": "The Journey of BurstCube: NASA's Tiny Satellite Set to Study Universe's Explosions - CityLife",
            "description": "The Journey of BurstCube: NASA's Tiny Satellite Set to Study Universe's Explosions - CityLife",
            "url": "https://citylife.capetown/webstories/the-journey-of-burstcube-nasas-tiny-satellite-set-to-study-universes-explosions/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_new_technologies_high_resolution_3392aaaf-e1fe-4809-860d-b370c048e17e.jpeg",
            "publishedAt": "2023-12-18T22:25:56Z",
            "content": "NASA’s BurstCube satellite, designed by scientists and engineers at the Goddard Space Flight Center, is ready for its mission to study the universe’s most powerful explosions. The shoebox-sized space… [+2463 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "THE MINUTE: Blessing same-sex couples, Pressure for ceasefire, Pausing Apple watch sales - KPIX | CBS NEWS BAY AREA",
            "description": "Website:  http://kpix.com/YouTube: http://www.youtube.com/CBSSanFranciscoFacebook:  https://www.facebook.com/CBSSanFranciscoInstagram: https://www.instagram....",
            "url": "https://www.youtube.com/watch?v=Tq1zqzn0LZc",
            "urlToImage": "https://i.ytimg.com/vi/Tq1zqzn0LZc/maxresdefault.jpg",
            "publishedAt": "2023-12-18T21:42:11Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Tech Desk",
            "title": "Icy Exoplanets May Have Habitable Oceans and Geysers: NASA Study - Times Now",
            "description": "A study conducted by NASA, in search for life beyond our planet has indicated 17 exoplanets could have oceans of liquid water. The planets have icy shells, beneath which lies the basic component of life - water. The amount of oceans and geyser activity on the…",
            "url": "https://www.timesnownews.com/technology-science/icy-exoplanets-may-have-habitable-oceans-and-geysers-study-from-nasa-reveals-article-106083461",
            "urlToImage": "https://static.tnn.in/thumb/msid-106085766,thumbsize-141570,width-1280,height-720,resizemode-75/106085766.jpg",
            "publishedAt": "2023-12-18T17:18:50Z",
            "content": "Pisces Horoscope Today, December 20, 2023: Avoid Spending Too Much Money"
          },
          {
            "source": {
              "id": null,
              "name": "Qrius.com"
            },
            "author": "Qrius",
            "title": "Was the Sahara desert once a green plain? - Qrius",
            "description": "Qrius reduces complexity. We explain the most important issues of our time, answering the question: What does this mean for me?",
            "url": "https://qrius.com/was-the-sahara-desert-once-a-green-plain/",
            "urlToImage": "",
            "publishedAt": "2023-12-18T16:50:31Z",
            "content": "Edward Armstrong, University of Helsinki\r\nAlgeriaâs Tassili NâAjjer plateau is Africaâs largest national park. Among its vast sandstone formations is perhaps the worldâs largest art museum. O… [+6110 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Caltech.edu"
            },
            "author": null,
            "title": "2023 Year in Review - Caltech",
            "description": "As the end of 2023 draws near, Caltech News looks back at our coverage of the research, discoveries, events, and experiences that shaped the Institute. Here are some highlights.",
            "url": "https://www.caltech.edu/about/news/2023-year-in-review",
            "urlToImage": "https://caltech-prod.s3.amazonaws.com/main/images/2023-Year-in-Review-1440x1060pixels.width-600.jpg",
            "publishedAt": "2023-12-18T16:29:21Z",
            "content": "As we close out the year and look ahead to the next, we take this opportunity to reflect on the groundbreaking research findings that emerged from Caltech in 2023. From furthering humanity's knowledg… [+10613 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "Lost in translation! Scientists suspect a glitch as NASA's Voyager 1 sends weird signals to Earth - MSN",
            "description": null,
            "url": "https://www.msn.com/en-in/news/techandscience/lost-in-translation-scientists-suspect-a-glitch-as-nasa-s-voyager-1-sends-weird-signals-to-earth/ar-AA1lGssI",
            "urlToImage": null,
            "publishedAt": "2023-12-18T16:16:53Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Vicky Stavropoulou",
            "title": "New Hyperspectral Satellites Promise Environmental Protection from Space - CityLife",
            "description": "New Hyperspectral Satellites Promise Environmental Protection from Space - CityLife",
            "url": "https://citylife.capetown/webstories/new-hyperspectral-satellites-promise-environmental-protection-from-space/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_projects_38bf69c5-e83b-4098-9469-97ea13eb56d8.jpeg",
            "publishedAt": "2023-12-18T15:44:09Z",
            "content": "A startup called Pixxel is revolutionizing the way we gather environmental data by deploying a network of highly-sensitive satellites equipped with hyperspectral sensors. These satellites, which can … [+2138 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Phys.Org"
            },
            "author": "Tejasri Gururaj",
            "title": "Challenging assumptions: The 8.5-year rhythm of Earth's inner core - Phys.org",
            "description": "Researchers from China have confirmed the existence of an approximately 8.5-year Inner Core Wobble (ICW) in both polar motion and length-of-day variations, revealing a static tilt of about 0.17 degrees between the Earth's inner core and mantle, challenging tr…",
            "url": "https://phys.org/news/2023-12-assumptions-year-rhythm-earth-core.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/challenging-assumption.jpg",
            "publishedAt": "2023-12-18T15:20:16Z",
            "content": "Researchers from China have confirmed the existence of an approximately 8.5-year Inner Core Wobble (ICW) in both polar motion and length-of-day variations, revealing a static tilt of about 0.17 degre… [+6164 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Artemis 1 spacecraft re-enters Earth atmosphere in fiery 1-minute time-lapse - VideoFromSpace",
            "description": "The Orion spaceraft from NASA's Artemis 1 mission re-entered Earth's atmosphere  on Dec. 11, 2022 after its successfull mission around the moon. See 25 minut...",
            "url": "https://www.youtube.com/watch?v=qlSCsfLmHcY",
            "urlToImage": "https://i.ytimg.com/vi/qlSCsfLmHcY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXyhYMA8=&rs=AOn4CLAUd196Ufhjuof3WoOjNawmQSadaw",
            "publishedAt": "2023-12-18T14:16:11Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Interesting Engineering"
            },
            "author": "Can Emir",
            "title": "24000-year-old secret 'sea ice highway,' path to America discovered - Interesting Engineering",
            "description": "New research suggests early humans used a \"sea ice highway\" to reach North America 24,000 years ago, disrupting established migration theories.",
            "url": "https://interestingengineering.com/science/frozen-expressway-of-americans-found",
            "urlToImage": "https://dnd2oi6izkvoi.cloudfront.net/2023/12/18/image/jpeg/bqM9C1Gw349ZOtoKXluAPhGka4OxNhvJapW6jsSj.jpg",
            "publishedAt": "2023-12-18T13:14:00Z",
            "content": "Tribe of hunter-gatherers.\r\ngorodenkoff/iStock \r\nTo delve deeper into the oceanic conditions during potential windows of human migration, Praetorius and her team examined climate proxies in ocean sed… [+686 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Chum salmon are breeding in Arctic, and it is `an ominous sign’ for humanity - WION",
            "description": "Chum salmon are breeding in Arctic, and it is an ominous sign’ for humanity",
            "url": "https://www.wionews.com/science/scientists-find-chum-salmon-breeding-in-arctic-and-they-believe-its-an-ominous-sign-670905",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/18/399914-salom.jpg",
            "publishedAt": "2023-12-18T11:54:51Z",
            "content": "Chum salmon, a species of anadromous salmonid fish, have found a new location to spawnthe Arctic waters, and the scientists are alarmed.\r\nChum salmon are said to be anadromous, which means they hatch… [+2209 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "Vikrant Singh",
            "title": "8 Interesting Facts About Pluto - WION",
            "description": "Here are eight interesting, lesser-known facts about the dwarf planet of our solar system- Pluto.",
            "url": "https://www.wionews.com/web-stories/science/8-interesting-facts-about-pluto-1702897668370",
            "urlToImage": null,
            "publishedAt": "2023-12-18T11:16:42Z",
            "content": "Pluto has a thin and tenuous atmosphere primarily composed of nitrogen, methane, and carbon monoxide."
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Viral Desk",
            "title": "Viral Photo: NASA Shares 51-year-old Image of US Flag On Moon With Earth In Background - Times Now",
            "description": "Eugene A. Cernan or Harrison H. Schmitt during the Apollo Mission, captured the  picture of the US flag on the Moon, 51 years ago.",
            "url": "https://www.timesnownews.com/viral/viral-photo-nasa-shares-51-year-old-image-of-us-flag-on-moon-with-earth-in-background-article-106092320",
            "urlToImage": "https://static.tnn.in/thumb/msid-106092458,thumbsize-16870,width-1280,height-720,resizemode-75/106092458.jpg",
            "publishedAt": "2023-12-18T11:06:37Z",
            "content": "Tarot Card Reading for Today; December 19: Finances Will Be Good For Cancer, Scorpio Will Be Successful At Work"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Two months on, NASA is still struggling to open sample container from asteroid Bennu - WION",
            "description": "Two months on, NASA is still struggling to open sample container from asteroid Bennu",
            "url": "https://www.wionews.com/science/us-two-months-in-nasa-is-still-trying-to-open-its-sample-container-from-asteroid-bennu-670880",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/18/399898-the-battle-for-kyiv-2023-12-18t161408080.jpg",
            "publishedAt": "2023-12-18T10:25:37Z",
            "content": "NASA's ambitious mission to uncover the mysteries of the solar system has encountered an unforeseen obstacle. Two months after securing a crucial sample from the asteroid Bennu, the space agency face… [+2361 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Tech Desk, Times Now Digital",
            "title": "How Old Is The Sun? NASA Explains - Times Now",
            "description": "​Our Sun is boasting an age unlike any we can truly fathom. Unravelling the Sun's age is like peering into a cosmic window, NASA has shared some unusual facts.",
            "url": "https://www.timesnownews.com/web-stories/technology/how-old-is-the-sun-nasa-explains/photostory/106068824.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106068886,width-900,height-1200,resizemode-6.cms",
            "publishedAt": "2023-12-18T10:23:23Z",
            "content": "To calculate the Sun's age, NASA says, we look at the whole age of the solar system because everything formed at the same time. To find out this number, we look at the oldest things we can find like … [+69 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "Webb Telescope discovers mysterious object in space. It's a failed sun - MSN",
            "description": null,
            "url": "https://www.msn.com/en-in/news/techandscience/webb-telescope-discovers-mysterious-object-in-space-it-s-a-failed-sun/ar-AA1lEZde",
            "urlToImage": null,
            "publishedAt": "2023-12-18T08:32:49Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "ESA Astronaut Shares Incredible Pictures Of Icebergs As Seen From Space - NDTV",
            "description": "An astronaut aboard the International Space Station (ISS) recently shared incredible images of giant icebergs seen from space.",
            "url": "https://www.ndtv.com/science/esa-astronaut-shares-incredible-pictures-of-icebergs-as-seen-from-space-4686570",
            "urlToImage": "https://c.ndtvimg.com/2023-12/uj6g6qj_icebergs-seen-from-space-_625x300_16_December_23.jpeg?ver-20231203.06",
            "publishedAt": "2023-12-16T15:21:09Z",
            "content": "The astronaut also expressed his concerns on climate change.\r\nAn astronaut aboard the International Space Station (ISS) recently shared incredible images of giant icebergs seen from space. European S… [+2224 chars]"
          }
        ]
      },
      {
        "health": [
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "Cyclone Michaung | 1.73 lakh children receive Measles-Rubella vaccination in four flood-affected districts - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/news/cities/chennai/cyclone-michaung-173-lakh-children-receive-measles-rubella-vaccination-in-four-flood-affected-districts/article67654657.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-20T08:29:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Prerna Targhotra",
            "title": "6 Best Vegetables To Add To Your Diet For Blood Sugar Management - Jagran English",
            "description": "Vegetables For Blood Sugar Levels: Vegetables high in fibre, protein, vitamins, minerals and other essential nutrients help to keep blood sugar levels in check.",
            "url": "https://english.jagran.com/lifestyle/6-best-vegetables-to-add-to-your-diet-for-blood-sugar-management-10121655",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/vegetables-for-blood-sugar-management1703058327581.jpg",
            "publishedAt": "2023-12-20T07:40:00Z",
            "content": "Vegetables For Blood Sugar Levels: Managing blood sugar levels daily can sometimes be strenuous for certain individuals. There are multiple ways to manage your blood sugar levels naturally. Managing … [+2803 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Vaping | Health experts say vaping hasn't proves effective for quitting smoking - eNCA",
            "description": "The World Health Organisation says urgent action is needed to control e-cigarettes and protect children, as well as non-smokers. Health experts say vaping ha...",
            "url": "https://www.youtube.com/watch?v=AFwIPjFzrw8",
            "urlToImage": "https://i.ytimg.com/vi/AFwIPjFzrw8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE8gUyhlMA8=&rs=AOn4CLCw2wFcZ-kIAabxcmyLDJ5Ih1Z8AA",
            "publishedAt": "2023-12-20T07:36:05Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "These Foods Can Help Cure Insomnia During Menopause - NDTV",
            "description": "Nutritionist Lovneet Batra shares a list of foods you must incorporate into your diet if you are dealing with insomnia during menopause.",
            "url": "https://www.ndtv.com/health/these-foods-can-help-cure-insomnia-during-menopause-4708328",
            "urlToImage": "https://c.ndtvimg.com/2022-02/4n848c3_pregnancy_625x300_17_February_22.jpg",
            "publishedAt": "2023-12-20T07:11:58Z",
            "content": "Incorporating a well-balanced diet rich in fruits, vegetables, etc. can help manage sleep cycle\r\nMenopause is a natural biological process that occurs in women usually between the ages of 45 and 55. … [+1767 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Namita S Kalla",
            "title": "How to increase immunity naturally: Shield your body with a nutritious diet, regular exercises, and... - Moneycontrol",
            "description": "Adequate nutrition, including vitamins (C, D, folic acid) and minerals (magnesium, zinc, selenium), is essential to maintain good immunity. Deficiencies in these elements weaken the body's defenses, increasing vulnerability to illnesses.",
            "url": "https://www.moneycontrol.com/news/health-and-fitness/how-to-increase-immunity-naturally-shield-your-body-with-a-nutritious-diet-regular-exercises-and-adequate-sleep-11932101.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Health-benefits-of-plant-based-diet-770x433.jpg",
            "publishedAt": "2023-12-20T07:00:08Z",
            "content": "Winter often brings a host of symptoms that signal a weakened immune system. The constant battle with colds, fatigue, and vulnerability to illnesses becomes all too familiar. It is, therefore, crucia… [+4290 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Having workplace anxiety? Expert shares tips to overcome it - IndiaTimes",
            "description": "Workplace anxiety, a pervasive challenge in today's professional landscape, manifests as the uneasy undercurrent affecting individuals across various",
            "url": "https://timesofindia.indiatimes.com/life-style/relationships/work/having-workplace-anxiety-expert-shares-tips-to-overcome-it/articleshow/106144996.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106145054,width-1070,height-580,imgsize-60808,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T06:08:25Z",
            "content": "Nita Ambani's diamond necklace to Isha Ambani's choker: Beautiful jewellery pieces owned by the Ambani ladies"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Should you eat curd in winter? - IndiaTimes",
            "description": "In most Indian households, curd is avoided during the winter season as it is believed to increase mucus formation in the body and cause respiratory discomfort. But is it actually good or bad to consume curd during the cold season? Read on to find out…",
            "url": "https://timesofindia.indiatimes.com/life-style/food-news/should-you-eat-curd-in-winter/photostory/106134914.cms",
            "urlToImage": "https://static.toiimg.com/photo/106134927.cms",
            "publishedAt": "2023-12-20T05:30:00Z",
            "content": "Curd is rich in essential nutrients such as calcium, vitamin D, protein, and B vitamins. These nutrients are important for bone health, immune function, and overall nutrition, which makes curd a heal… [+30 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Technology Networks"
            },
            "author": "Technology Networks",
            "title": "Weight Loss Can Significantly Alter Your Microbiome and Brain Activity - Technology Networks",
            "description": "Worldwide, more than one billion people are obese. Weight loss via intermittent energy restriction results in synchronized changes throughout brain-gut microbiome axis.",
            "url": "https://www.technologynetworks.com/immunology/news/weight-loss-can-significantly-alter-your-microbiome-and-brain-activity-382205",
            "urlToImage": "https://assets.technologynetworks.com/production/dynamic/images/content/382205/weight-loss-can-significantly-alter-your-microbiome-and-brain-activity-382205-640x360.jpg?cb=20231219",
            "publishedAt": "2023-12-20T05:25:58Z",
            "content": "Worldwide, more than one billion people are obese. Obesity is a risk factor for cardiovascular disease, diabetes, and some cancers. But permanently losing weight isnt easy: complex interactions betwe… [+4645 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thehealthsite.com"
            },
            "author": "Tavishi Dogra",
            "title": "Beyond One-Size-Fits-All: Personalizing Diabetes Care With Nutrigenomics | TheHealthSite.com - TheHealthSite",
            "description": "A nutrigenomic assessment further uncovered that she had lower amylase enzyme levels leading to a poorer breakdown of carbohydrates. TheHealthSite.com",
            "url": "https://www.thehealthsite.com/diseases-conditions/beyond-one-size-fits-all-personalizing-diabetes-care-with-nutrigenomics-1045896/",
            "urlToImage": "https://st1.thehealthsite.com/wp-content/uploads/2023/12/1694268038499.jpeg",
            "publishedAt": "2023-12-20T05:08:00Z",
            "content": "VERIFIED\r\nA nutrigenomic assessment further uncovered that she had lower amylase enzyme levels, leading to a poorer breakdown of carbohydrates.\r\nImagine DNA as a comprehensive instruction manual with… [+2677 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News-Medical.Net"
            },
            "author": null,
            "title": "Daily beetroot juice supplement improves blood pressure and walking distance in COPD patients - News-Medical.Net",
            "description": "A 12-week course of daily beetroot juice supplement for people with chronic obstructive pulmonary disease (COPD) lowered blood pressure and improved how far patients could walk in six minutes in research published today (Wednesday) in the European Respiratory…",
            "url": "https://www.news-medical.net/news/20231219/Daily-beetroot-juice-supplement-improves-blood-pressure-and-walking-distance-in-COPD-patients.aspx",
            "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2016/3/Blood_pressure_-_kurhan_190c9e39c9604c7a8ce4b5999522f80a-620x480.jpg",
            "publishedAt": "2023-12-20T04:50:00Z",
            "content": "A 12-week course of daily beetroot juice supplement for people with chronic obstructive pulmonary disease (COPD) lowered blood pressure and improved how far patients could walk in six minutes in rese… [+3500 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Healthshots.com"
            },
            "author": "Healthshots",
            "title": "6 walking mistakes to avoid - Health shots",
            "description": "Walking regularly can immensely improve your overall health. But make sure you are not making these 6 walking mistakes to avoid hurting yourself.",
            "url": "https://www.healthshots.com/web-stories/5-walking-mistakes-to-avoid/",
            "urlToImage": "https://images.healthshots.com/healthshots/en/uploads/2023/12/20114353/walking-1.jpg",
            "publishedAt": "2023-12-20T04:30:00Z",
            "content": "Walking regularly can immensely improve your overall health. But make sure you are not making these 6 walking mistakes to avoid hurting yourself.\r\nImage Credits : Shutterstock\r\nImage Credits : Shutte… [+1466 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Prerna Targhotra",
            "title": "5 Breathing Exercises To Keep Your Lungs Clean And Healthy - Jagran English",
            "description": "Breathing Exercises For Lung Health: One of the best ways to keep your lungs clean and healthy is by practising yoga and breathing exercises. Here are some powerful breathing exercises that you should practise to keep your lungs clean and healthy.",
            "url": "https://english.jagran.com/lifestyle/5-breathing-exercises-to-keep-your-lungs-clean-and-healthy-10121587",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/breathing-exercises-for-lungs1703043337165.jpg",
            "publishedAt": "2023-12-20T03:31:00Z",
            "content": "Breathing Exercises For Lung Health: As the cold months gripple, seasonal illnesses such as cough, cold, flu and fever increase significantly. The dry and cold air irritates the passage of the lungs,… [+2381 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Odishatv.in"
            },
            "author": "Poonam Singh",
            "title": "Winter fruits for weight loss: Nourish and trim naturally - OTV News",
            "description": "Incorporate these winter fruits into your diet for a nourishing and slimming experience.",
            "url": "https://odishatv.in/webstories/lifestyle/winter-fruits-for-weight-loss-nourish-and-trim-naturally-223074",
            "urlToImage": "https://images.odishatv.in/uploadimage/library/16_9/16_9_1/recent_photo_1703041445.webp",
            "publishedAt": "2023-12-20T03:18:07Z",
            "content": "Author: Poonam Singh | Credit: Canva\r\n<ul>Incorporate these winter fruits into your diet for a nourishing and slimming experience.</ul>\r\nAuthor: Poonam Singh | Credit: Canva\r\n<ul>Pomegranates: Bursti… [+1502 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Drink this fenugreek water to stop hair fall - IndiaTimes",
            "description": "​Fenugreek water is a natural and potentially beneficial remedy for addressing hair fall. It's also essential to approach it as a part of an overall h",
            "url": "https://timesofindia.indiatimes.com/life-style/beauty/drink-this-fenugreek-water-to-stop-hair-fall/articleshow/106139599.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106139599,width-1070,height-580,imgsize-78696,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:16:25Z",
            "content": "Winter foods you must add to your diet this season"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Steffy Thevar",
            "title": "Surge in mumps among kids, doctors stress on prevention - Times of India",
            "description": "Learn about the surge in mumps cases among kids and the importance of prevention. Find out how to treat mumps and prevent its spread. Get expert advice from doctors in Pune.",
            "url": "https://timesofindia.indiatimes.com/city/pune/https/example-com/surge-in-mumps-among-kids/articleshow/106140001.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:15:47Z",
            "content": "10 benefits of jogging in winter season"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Times Of India",
            "title": "Govt takes steps to curb cervical cancer - Times of India",
            "description": "Learn about the steps taken by the government to prevent deaths due to cervical cancer in Jaipur. Screening and early diagnosis are key measures in the fight against this preventable disease.",
            "url": "https://timesofindia.indiatimes.com/city/jaipur/https/example-com/govt-steps-prevent-cervical-cancer-jaipur/articleshow/106139518.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:04:04Z",
            "content": "10 benefits of jogging in winter season"
          },
          {
            "source": {
              "id": null,
              "name": "The Sentinel Assam"
            },
            "author": "Sentinel Digital Desk",
            "title": "Vitamin E for winter hair resilience - Sentinelassam - The Sentinel Assam",
            "description": "As the winter season unfolds, encompassing cooler temperatures across India, a prevalent yet often-overlooked concern surfaces—noticeable increased hair fall.",
            "url": "https://www.sentinelassam.com/topheadlines/vitamin-e-for-winter-hair-resilience-681887",
            "urlToImage": "https://assets.sentinelassam.com/h-upload/2023/12/20/499186-vitame.jpg",
            "publishedAt": "2023-12-20T03:02:01Z",
            "content": "New Delhi: As the winter season unfolds, encompassing cooler temperatures across India, a prevalent yet often-overlooked concern surfacesnoticeable increased hair fall. The colder climate accentuates… [+4155 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Ipsita Bhattacharya",
            "title": "Weight Loss In Winter: How To Manage Your Body Weight In Cold Season - Zee News",
            "description": "1. Stay Active: Make exercise a part of your daily routine. Indulge in activities like walking, jogging, or indoor workouts suiting your lifestyle and preferences. Remain motivated! Find an exercise partner or join a gym. 2. Eat A Balanced Diet: Ensure a heal…",
            "url": "https://zeenews.india.com/health/weight-loss-in-winter-how-to-manage-your-body-weight-in-cold-season-2700972",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/20/1338999-winterworkout-woman-freepik.jpg",
            "publishedAt": "2023-12-20T02:41:26Z",
            "content": "As temperature dips and the holiday spirit pervades the atmosphere, all you want to do is enjoy those tempting delicacies including cakes, pastries and hot chocolate, and bundle up in a cosy space in… [+2971 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Dheeraj Bengrut",
            "title": "Scientists develop single bio-nano system against multiple health problems - Hindustan Times",
            "description": "Scientists of Shri Shiv Chhatrapati College have developed a single bio-nano system acting as an ‘antimicrobial, antioxidant and anti-cancer drug’ to address health problems",
            "url": "https://www.hindustantimes.com/cities/pune-news/scientists-develop-single-bio-nano-system-against-multiple-health-problems-101703013711732.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/Scientists-of-Shri-Shiv-Chhatrapati-College-have-d_1703013708141.jpg",
            "publishedAt": "2023-12-20T02:24:05Z",
            "content": "PUNE: Scientists of Shri Shiv Chhatrapati College, Junnar, which is affiliated to the Savitribai Phule Pune University (SPPU), have developed a single bio-nano system acting as an antimicrobial, anti… [+3838 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Rahul Pratyush",
            "title": "Yearender 2023: Top 5 weight loss trends of 2023 - India TV News",
            "description": "As 2023 draws to a close, the landscape of weight management has undergone a fundamental shift. Gone are the days of restrictive regimes and fleeting fixes. Let's take a look at 5 trends that people adopted in their weight loss journey.",
            "url": "https://www.indiatvnews.com/lifestyle/news/yearender-2023-top-5-weight-loss-trends-of-2023-2023-12-20-908087",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/intro-1-1703036625.jpg",
            "publishedAt": "2023-12-20T02:03:52Z",
            "content": "As 2023 gracefully draws to a close, it's time to reflect on the year that was a year that witnessed a renewed focus on holistic well-being. In the arena of weight management, the trend was no differ… [+5322 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Unmc.edu"
            },
            "author": null,
            "title": "Should You Wear a Mask on a Plane This Holiday Season? We Asked the Experts - University of Nebraska Medical Center",
            "description": "Conde Naste Traveler Masks on planes: It’s a topic of conversation that has become more and more convoluted in the past year and change. But in the gauntlet of holiday air travel, one of…",
            "url": "https://www.unmc.edu/healthsecurity/transmission/2023/12/19/should-you-wear-a-mask-on-a-plane-this-holiday-season-we-asked-the-experts/",
            "urlToImage": "https://www.unmc.edu/healthsecurity/transmission/wp-content/uploads/2023/12/Screenshot-2023-12-19-at-20.21.58.png",
            "publishedAt": "2023-12-20T01:29:23Z",
            "content": "Conde Naste Traveler\r\nMasks on planes: It’s a topic of conversation that has become more and more convoluted in the past year and change. But in the gauntlet of holiday air travel, one of the most ch… [+1230 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Editorji.com"
            },
            "author": "Editorji News Desk",
            "title": "Hair turning grey? Here are few reasons for deteriorating tresses - Editorji",
            "description": "If your hair has been getting grey lately, even in your early 20s, it might be because of your lifestyle choices. Read on to know the reasons behind premature greying!",
            "url": "https://www.editorji.com/lifestyle-news/health/hair-turning-grey-here-are-few-reasons-for-deteriorating-tresses-1703035750586",
            "urlToImage": "https://cdn.editorji.com/zPSsvZb71D.jpg",
            "publishedAt": "2023-12-20T01:29:10Z",
            "content": "Has your hair been turning grey even in your early 20s? Hair getting grey is often associated with aging, however, now even people in their early and late 20s are getting grey hair. Recent scientific… [+1106 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Unmc.edu"
            },
            "author": null,
            "title": "Threat of Nipah virus in winter | The Transmission - University of Nebraska Medical Center",
            "description": "Bangladesh Post At least 240 people have died of the Nipah virus across the country in the last 23 years during the winter season, according to media report. At least 339 cases of Nipah virus infec…",
            "url": "https://www.unmc.edu/healthsecurity/transmission/2023/12/19/threat-of-nipah-virus-in-winter/",
            "urlToImage": "https://s0.wp.com/i/blank.jpg",
            "publishedAt": "2023-12-20T01:09:15Z",
            "content": "Bangladesh Post\r\nAt least 240 people have died of the Nipah virus across the country in the last 23 years during the winter season, according to media report. At least 339 cases of Nipah virus infect… [+797 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "Sneha Ramesh",
            "title": "Experts bat for immediate genomic sequencing - Deccan Herald",
            "description": "Experts for immediate genomic sequencing",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/experts-for-immediate-genomic-sequencing-2818161",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2F6e0513fa-20a6-451b-a103-0697df790999%2Fcovid_test_istock_1055454_1638102010_1_1056382_1638324823.jpg?rect=0%2C0%2C1280%2C672&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-20T01:08:27Z",
            "content": "We will need a particular number of samples to start genomic sequencing. Now, we do not have a sample pool. But, once we ramp up testing, we should be able to get enough samples, a senior official in… [+156 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Soaked vs. dried raisins: Decoding health benefits - IndiaTimes",
            "description": "Soaked raisins, with their enhanced taste and nutritional profile, offer digestive harmony and a nutrient powerhouse. The soaking process activates en",
            "url": "https://timesofindia.indiatimes.com/life-style/food-news/soaked-vs-dried-raisins-decoding-health-benefits/articleshow/106130391.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106130391,width-1070,height-580,imgsize-93972,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T22:30:00Z",
            "content": "Rukmini Maitra soars to new travel heights, unleashing wanderlust wonders"
          },
          {
            "source": {
              "id": null,
              "name": "Targetedonc.com"
            },
            "author": null,
            "title": "Managing HER2+ Early Breast Cancer: A Focus on Target Therapy - Targeted Oncology",
            "description": "Targeted Oncology provides news, videos, and reviews on the rapidly evolving world of targeted therapies and immunotherapy for oncologists treating patients in a community setting.",
            "url": "https://www.targetedonc.com/view/managing-her2-early-breast-cancer-a-focus-on-target-therapy",
            "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/targetedonc/2ce9ffb2feba32274be38600571b097acd118602-1000x563.webp?fit=crop&auto=format",
            "publishedAt": "2023-12-19T22:19:46Z",
            "content": "New breast cancer diagnoses account for 31% of annual cancer diagnoses among women in the United States.1 Among those diagnoses, HER2 overexpression is observed in 25% to 30% of cases. Historically, … [+10251 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hcplive.com"
            },
            "author": "Chelsie Derman",
            "title": "Maternal psychiatric disorders does not increase type 1 diabetes risk in offspring - Contemporary Obgyn",
            "description": "Discover insights from a recent study investigating the potential link between maternal mood disorders and schizophrenia with the risk of type 1 diabetes in children, shedding light on factors impacting early childhood health.",
            "url": "https://www.hcplive.com/view/mothers-mental-disorders-is-not-linked-type-1-diabetes-offspring",
            "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/contobgyn/ab0fc308831cebc53813179a2ae3f820c1967ced-6462x4313.jpg?fit=crop&auto=format",
            "publishedAt": "2023-12-19T21:38:22Z",
            "content": "A version of this article was initially published by HCP Live.\r\nA recent study indicates that mothers with mood disorders and schizophrenia may not be significantly linked to an increased risk of the… [+5319 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Umn.edu"
            },
            "author": null,
            "title": "Study spotlights persistent daily headaches after COVID-19 - University of Minnesota Twin Cities",
            "description": "Persistent headache began during the first 2 weeks of COVID-19 in more than two thirds of participants.",
            "url": "https://www.cidrap.umn.edu/covid-19/study-spotlights-persistent-daily-headaches-after-covid-19",
            "urlToImage": "https://www.cidrap.umn.edu/themes/custom/cidrap_theme/images/cidrap-og-image.jpg",
            "publishedAt": "2023-12-19T20:44:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Newstodaynet.com"
            },
            "author": "NT Bureau",
            "title": "Study offers hope for childhood respiratory diseases - News Today",
            "description": "The immune and respiratory systems coordinate much earlier than previously thought, finds a study that raises hope for tackling respiratory diseases in early childhood.",
            "url": "https://newstodaynet.com/2023/12/20/study-offers-hope-for-childhood-respiratory-diseases/",
            "urlToImage": "https://newstodaynet.com/wp-content/uploads/2023/12/download-18-12.jpg",
            "publishedAt": "2023-12-19T19:54:00Z",
            "content": "The immune and respiratory systems coordinate much earlier than previously thought, finds a study that raises hope for tackling respiratory diseases in early childhood. Globally, respiratory conditio… [+1779 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "EurekAlert"
            },
            "author": null,
            "title": "Assisted reproductive technologies not associated with body mass index in children, except when using frozen embryos – according to new Danish study - EurekAlert",
            "description": "<p style=\"text-align:center\"><strong>Assisted reproductive technologies not associated with body mass index in children, except when using frozen embryos &ndash; according to new Danish study</strong></p>",
            "url": "https://www.eurekalert.org/news-releases/1010890",
            "urlToImage": "https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/4464d1a9-75ad-4e62-9307-e637400b6f3b/Rendition/thumbnail/Content/Public",
            "publishedAt": "2023-12-19T19:37:45Z",
            "content": "image: Overview of study methods and results.\r\nview more \r\nCredit: Kristina Laugesen (CC-BY 4.0, https://creativecommons.org/licenses/by/4.0/)\r\nAssisted reproductive technologies not associated with … [+901 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Healthy holidays: How to keep safe as flu, RSV and COVID cases on the rise - Global News",
            "description": "Dr. Isaac Bogoch joins The Morning Show to provide crucial information as we navigate the flu season, looking deeper into the severity of flu cases and the p...",
            "url": "https://www.youtube.com/watch?v=MbP9KhReZZM",
            "urlToImage": "https://i.ytimg.com/vi/MbP9KhReZZM/maxresdefault.jpg",
            "publishedAt": "2023-12-19T19:34:36Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today World Desk",
            "title": "Doctors find wooden splinter in Boston man’s eye after 15 years - India Today",
            "description": "The man said that he suffered from an extremely painful “penetrating injury” while gardening 15 years ago, but stopped thinking about it because his symptoms disappeared,”",
            "url": "https://www.indiatoday.in/world/story/us-doctors-find-wooden-splinter-boston-man-eye-after-15-years-2477848-2023-12-20",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/eye-rep-193405208-16x9_0.jpeg?VersionId=cQqC6ECws8DPiXm.QEPwpEFvNBPTn3va",
            "publishedAt": "2023-12-19T18:34:31Z",
            "content": "An ophthalmologist in the US located a three-millimetre wooden splinter in a man’s eye 15 years later. He discovered it while performing a routine checkup on a man in his 30s. \r\nThe wooden splinter w… [+1373 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Muskmelon's triple delight - Weight management, glowing skin, and a healthy heart - IndiaTimes",
            "description": "Muskmelon seeds, often overlooked, are nutritional powerhouses with a myriad of health benefits. From aiding weight management through their fiber-ric",
            "url": "https://timesofindia.indiatimes.com/life-style/food-news/muskmelons-triple-delight-weight-management-glowing-skin-and-a-healthy-heart/articleshow/106114642.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106114642,width-1070,height-580,imgsize-58148,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T18:30:00Z",
            "content": "Rukmini Maitra soars to new travel heights, unleashing wanderlust wonders"
          },
          {
            "source": {
              "id": null,
              "name": "Inshorts.com"
            },
            "author": "Ashima Mahindra",
            "title": "What Does A Stroke Feel Like; Does It Pain? | A stroke severely affects a person’s cognition | Inshorts - Inshorts",
            "description": "A stroke occurs when something blocks blood supply to part of the brain or when a blood vessel in the brain bu",
            "url": "https://inshorts.com/en/news/what-does-a-stroke-feel-like-does-it-pain-1703001774510",
            "urlToImage": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/12_dec/19_tue/img_1703001632740_194.jpg?",
            "publishedAt": "2023-12-19T17:39:36Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Drug Target Review"
            },
            "author": null,
            "title": "Disrupting the mechanism pathogens use to infect host cells - Drug Target Review",
            "description": "New understanding of the communication system between pathogens and host cells provides a way to avoid antimicrobial resistance.",
            "url": "https://www.drugtargetreview.com/news/113232/disrupting-the-mechanism-pathogens-use-to-infect-host-cells/",
            "urlToImage": "https://www.drugtargetreview.com/wp-content/uploads/antimicrobial-resistance.jpg",
            "publishedAt": "2023-12-19T16:02:23Z",
            "content": "Posted: 19 December 2023 | Drug Target Review | No comments yet\r\nNew understanding of the communication system between pathogens and host cells provides a way to avoid antimicrobial resistance. \r\nA t… [+3241 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Daijiworld.com"
            },
            "author": null,
            "title": "Childhood trauma increases risk of chronic pain in adulthood: Study - Daijiworld.com",
            "description": "London, Dec 19 (IANS): Physical, sexual, or emotional abuse, or neglect, either alone or combined with other types of childhood trauma, increases the risk of chronic pain and related disability in adulthood, according to a new research.\r\nThe new findings unde…",
            "url": "https://www.daijiworld.com/index.php/news/newsDisplay?newsID=1150856",
            "urlToImage": "http://daijiworld.com/images/daijiSquareLogo.png",
            "publishedAt": "2023-12-19T15:39:12Z",
            "content": "London, Dec 19 (IANS): Physical, sexual, or emotional abuse, or neglect, either alone or combined with other types of childhood trauma, increases the risk of chronic pain and related disability in ad… [+2271 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReliefWeb"
            },
            "author": null,
            "title": "Future surveillance for epidemic and pandemic diseases: a 2023 perspective - World - ReliefWeb",
            "description": "Analysis in English on World about Health; published on 11 Dec 2023 by WHO",
            "url": "https://reliefweb.int/report/world/future-surveillance-epidemic-and-pandemic-diseases-2023-perspective",
            "urlToImage": "https://reliefweb.int/sites/default/files/styles/large/public/previews/03/9b/039bc1c6-8906-47a3-bf8f-263301c0f9fa.png",
            "publishedAt": "2023-12-19T15:39:01Z",
            "content": "Foreword\r\nThe health and well-being of people around the world continue to be challenged by infectious hazards. Indeed, 2022 saw the third year of the COVID-19 pandemic, a global outbreak of Mpox, an… [+2188 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "News18",
            "title": "5 Flours For Weight Loss Diet - News18",
            "description": "Are you on a weight loss diet and planning to add more fibre and vitamins to your diet? Here are five weight loss-friendly flours that you can opt for.",
            "url": "https://www.news18.com/web-stories/lifestyle/5-flours-for-weight-loss-diet-1369075/",
            "urlToImage": "https://images.news18.com/webstories/2023/12/cropped-makai.jpg",
            "publishedAt": "2023-12-19T15:06:21Z",
            "content": "Maize is a good source of iron, zinc, vitamins, and antioxidants. It also has complex carbohydrates which can help provide sustained energy."
          },
          {
            "source": {
              "id": null,
              "name": "Medscape"
            },
            "author": "Carolyn Crist",
            "title": "GLP-1 RAs Associated With Reduced CRC Risk in T2DM - Medscape",
            "description": "The effects were more profound in patients with overweight and obesity in addition to diabetes.",
            "url": "https://www.medscape.com/viewarticle/glp-1-ras-associated-reduced-colorectal-cancer-risk-patients-2023a1000vxa",
            "urlToImage": "https://img.medscapestatic.com/vim/live/professional_assets/medscape/images/thumbnail_library/is_200401_colonoscopy_polyp_800x450.jpg",
            "publishedAt": "2023-12-19T14:38:33Z",
            "content": "Glucagon-like peptide 1 receptor agonists (GLP-1 RAs) are associated with a reduced risk for colorectal cancer (CRC) in patients with type 2 diabetes, with and without overweight or obesity, accordin… [+4621 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "Webinar on brain and mind care held - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/news/cities/chennai/webinar-on-brain-and-mind-care-held/article67654900.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-19T14:22:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "Kajari Goswami",
            "title": "5 signs that can indicate impending heart problem - DNA India",
            "description": "5 signs that can indicate impending heart problem",
            "url": "https://www.dnaindia.com/web-stories/health/5-signs-that-can-indicate-impending-heart-problem-1702993865654",
            "urlToImage": null,
            "publishedAt": "2023-12-19T14:11:30Z",
            "content": "One may experience heaviness in the chest and back, left shoulder pain radiating to arm and jaw pain. At times it may only be a feeling of uneasiness in the chest and Ghabrahat or a feeling of impend… [+267 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "16-yr-old dies of blood clot after taking contraceptive pills during period pain - Times of India - IndiaTimes",
            "description": "UK News: A 16-year-old girl from UK, Layla Khan, died from a blood clot in her brain after taking a contraceptive pill and being diagnosed with a stomach bug.",
            "url": "https://timesofindia.indiatimes.com/world/uk/16-yr-old-dies-of-blood-clot-after-taking-contraceptive-pills-during-period-pain/articleshow/106130345.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106130387,width-1070,height-580,imgsize-14986,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T13:55:43Z",
            "content": "10 benefits of jogging in winter season"
          },
          {
            "source": {
              "id": null,
              "name": "Free Press Journal"
            },
            "author": "IANS",
            "title": "Latest Cholesterol-Lowering Vaccine Could Help Tackle Heart Disease, Know Details - Free Press Journal",
            "description": "Worldwide cardiovascular diseases claim nearly 18 million lives every year, according to the World Health Organization.",
            "url": "https://www.freepressjournal.in/health/latest-cholesterol-lowering-vaccine-could-help-tackle-heart-disease-know-details",
            "urlToImage": "https://media.assettype.com/freepressjournal/2023-12/0117193e-5935-41ee-96cb-e0b182736a5b/preparation_blood_test_by_female_doctor_medical_uniform_table_white_bright_room_nurse_pierces_patien.jpg",
            "publishedAt": "2023-12-19T12:49:28Z",
            "content": "Researchers have developed a new vaccine that could be a game-changer, providing an inexpensive method to lower \"bad\" LDL cholesterol, which creates dangerous plaques that can block blood vessels. Hi… [+2633 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Prerna Targhotra",
            "title": "Do Digestive Problems Worsen In Winters Doctor Lists Tips To Keep In Mind - Jagran English",
            "description": "Digestive Problems In Winters: Bloating, gas, constipation, irritable bowel syndrome, diarrhea, cramps and other digestive problems may worsen during winters due to unhealthy lifestyle patterns.",
            "url": "https://english.jagran.com/lifestyle/do-digestive-problems-worsen-in-winters-doctor-lists-tips-to-keep-in-mind-10121512",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/digestive-problems-in-winters1702990519467.jpg",
            "publishedAt": "2023-12-19T12:48:00Z",
            "content": "Digestive Problems In Winters: As the chilly months begin, our body undergoes numerous changes that can hinder the process of digestion. Are you someone who experiences digestion issues frequently in… [+2393 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "Aathira Varier",
            "title": "Return to office affects women's social wellness: ICICI Lombard study - Business Standard",
            "description": "An enhanced utilisation of digital platforms for wellness is a trend that has been catalysed by the push received during the lockdown and is now becoming a mainstay in the pursuit of well-being",
            "url": "https://www.business-standard.com/india-news/return-to-office-affects-women-s-social-wellness-icici-lombard-study-123121900927_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/30/full/1648657657-322.jpg",
            "publishedAt": "2023-12-19T12:41:27Z",
            "content": "An enhanced utilisation of digital platforms for wellness is a trend that has been catalysed by the push received during the lockdown and is now becoming a mainstay in the pursuit of well-being\r\nRepr… [+3303 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Sushmita Srivastav",
            "title": "Cholesterol diet: Add these 7 veggies to your diet plan to keep LDL levels in check this winter - Moneycontrol",
            "description": "What to eat: Adding these winter vegetables into your diet can offer substantial benefits in managing LDL cholesterol levels and nurturing your heart health.",
            "url": "https://www.moneycontrol.com/news/health-and-fitness/what-to-eat-cholesterol-diet-add-these-7-vegetables-to-your-diet-plan-to-keep-ldl-levels-in-check-health-benefits-of-kale-health-benefits-of-sweet-potatoes-health-benefits-of-beetroot-health-benefits-11928321.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/05/Sweet-Potato-Best-food-for-hair-growth-770x433.jpg",
            "publishedAt": "2023-12-19T12:18:57Z",
            "content": "Winter's embrace brings forth a bounty of seasonal vegetables, not only pleasing to the palate but also advantageous for maintaining healthy cholesterol levels. Cholesterol, which is crucial for mult… [+2993 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Healthday.com"
            },
            "author": "Ernie Mundell",
            "title": "Experimental Drug Could Be Big Advance Against Kidney Disease - HealthDay",
            "description": "TUESDAY, Dec. 19, 2023 (HealthDay News) -- Early results from a trial of a new kidney disease medication show it significantly reduces levels of a urine marker",
            "url": "https://www.healthday.com/health-news/general-health/experimental-drug-could-be-big-advance-against-kidney-disease",
            "urlToImage": "https://media.assettype.com/healthday%2Fimport%2F29766129%2Forigin.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
            "publishedAt": "2023-12-19T12:17:51Z",
            "content": "TUESDAY, Dec. 19, 2023 (HealthDay News) -- Early results from a trial of a new kidney disease medication show it significantly reduces levels of a urine marker of kidney damage.\r\nThe experimental dru… [+3757 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": null,
            "title": "Dianabol, Bodybuilding And Beginners 101 - Zee News",
            "description": "1 Rapid Muscle Growth:  The ability of Dianabol to promote rapid muscle growth is one of the most important advantages gained from using this supplement. After a relatively short period of time and energy, users frequently report experiencing substantial impr…",
            "url": "https://zeenews.india.com/india/dianabol-bodybuilding-and-beginners-101-2700164.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/18/1337806-dianabol.jpg",
            "publishedAt": "2023-12-19T11:52:26Z",
            "content": "Not many people are aware of steroids, but if they do they are always not quite clear about it. Many people out there have a misconception that steroids are the shortcuts and god knows how but they w… [+8191 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Cardiac Arrests Predicted By High Tech Vest, Wear For 5 Min & Predict Health - India Today",
            "description": "Doctors and researchers from University College London have developed a new vest that could potentially be used to identify people with a higher risk of sudd...",
            "url": "https://www.youtube.com/watch?v=2lwTIbGBERA",
            "urlToImage": "https://i.ytimg.com/vi/2lwTIbGBERA/maxresdefault.jpg",
            "publishedAt": "2023-12-19T10:09:03Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Medical Dialogues"
            },
            "author": "Dr. Kamal Kant Kohli",
            "title": "Toothbrushing may lower risk of hospital acquired pneumonia and mortality among critical patients - Medical Dialogues",
            "description": "USA: A meta-analysis of 15 randomized clinical trials comprising more than 2,700 patients revealed lower rates of hospital-acquired pneumonia among patients who received daily toothbrushing...",
            "url": "https://medicaldialogues.in/pulmonology/news/toothbrushing-may-lower-risk-of-hospital-acquired-pneumonia-and-mortality-among-critical-patients-121825",
            "urlToImage": "https://medicaldialogues.in/h-upload/2023/05/24/210332-pneumonia.jpg",
            "publishedAt": "2023-12-19T09:28:51Z",
            "content": "USA: A meta-analysis of 15 randomized clinical trials comprising more than 2,700 patients revealed lower rates of hospital-acquired pneumonia among patients who received daily toothbrushing compared … [+3523 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Zarafshan Shiraz",
            "title": "Living well with diabetes: Diet plan, exercise tips and lifestyle strategies - Hindustan Times",
            "description": "Check out these key lifestyle strategies with diet plan and exercise tips that can help you manage your diabetes effectively and live a fulfilling life. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/living-well-with-diabetes-diet-plan-exercise-tips-and-lifestyle-strategies-for-a-healthy-and-balanced-life-101702975209116.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/Head-of-PGIMER-s-endocrinology-department--Dr-Sanj_1699989644861_1702975381545.jpg",
            "publishedAt": "2023-12-19T08:54:36Z",
            "content": "Living with diabetes requires ongoing management but it also presents an opportunity to adopt a healthier lifestyle that can benefit you in various ways. Diabetes is a lifelong disease and it is impo… [+6074 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "IE Online",
            "title": "Can quick weight loss with a low-calorie diet affect your heart? - The Indian Express",
            "description": "Dr Abhay Somani, Consultant Cardiologist, Ruby Hall Clinic, Pune, has seen many patients on crash diets and talks about how extreme measures may not always be suitable for everybody",
            "url": "https://indianexpress.com/article/health-wellness/quick-weight-loss-low-calorie-diet-affect-heart-9074283/",
            "urlToImage": "https://images.indianexpress.com/2023/12/quick-weight-loss.jpg",
            "publishedAt": "2023-12-19T08:37:48Z",
            "content": "In the pursuit of quick and dramatic weight loss, many of us turn to crash diets, which involve severe calorie reduction, pushing the body into a state of energy deprivation. When the body is starved… [+2929 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Assamtribune.com"
            },
            "author": "IANS",
            "title": "UK approves non-hormonal menopause drug to prevent hot flashes - The Assam Tribune",
            "description": "London, Dec 18: Health authorities in the UK have approved a menopause drug that can prevent hot flashes, and help scores of women for whom hormone replacement therapy is not suitable.    The once...",
            "url": "https://assamtribune.com/health-and-fitness/uk-approves-non-hormonal-menopause-drug-to-prevent-hot-flashes-1510390",
            "urlToImage": "https://assamtribune.com/images/logo.png",
            "publishedAt": "2023-12-19T07:32:07Z",
            "content": "London, Dec 18: Health authorities in the UK have approved a menopause drug that can prevent hot flashes, and help scores of women for whom hormone replacement therapy is not suitable. \r\nThe once dai… [+1686 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Experiencing Heartburn Before Bed? Nutritionist Shares Relief Tips - NDTV",
            "description": "Nutritionist Lovneet Batra shares tips to overcome heartburn before bed.",
            "url": "https://www.ndtv.com/health/experiencing-heartburn-before-bed-nutritionist-shares-relief-tips-4702011",
            "urlToImage": "https://c.ndtvimg.com/2023-01/c1mla8i_-acidity-and-heartburn-home-remedies_625x300_16_January_23.jpg",
            "publishedAt": "2023-12-19T07:28:47Z",
            "content": "Try to eat meals at least two to three hours before lying down to prevent heartburn before bed\r\nHeartburn is a common digestive symptom characterised by a burning sensation in the chest or upper abdo… [+2110 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Timesofindia.com"
            },
            "author": "Kritika Pushkarna",
            "title": "What is guava leaf tea and its winter benefits - Recipes",
            "description": "With winter at its peak, we tend to crave for warm and nourishing beverages. Among the array of choices, guava leaf tea stands out as a herbal infusion with notable health benefits, which is unheard of by many people! Here is all you need to know about this t…",
            "url": "https://recipes.timesofindia.com/web-stories/what-is-guava-leaf-tea-and-its-winter-benefits/photostory/106116380.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106116418,imgsize-28432,width-900,height-1200,resizemode-6/106116418.jpg",
            "publishedAt": "2023-12-19T07:11:21Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "LAKSHMI M.S",
            "title": "Trenbolone For Sale: Trenbolone Cycle And Dosage, Trenbolone Before And After Results, Tren Pills Prices And Where To Buy Trenbolone Online Near Me - Deccan Herald",
            "description": "Explore Trenbolone for sale, learn about Trenbolone cycle and dosage, see Trenbolone before and after results, check Tren pills prices, and find where to buy Trenbolone online near you",
            "url": "https://www.deccanherald.com/brandspot/featured/trenbolone-for-sale-trenbolone-cycle-and-dosage-trenbolone-before-and-after-results-tren-pills-prices-and-where-to-buy-trenbolone-online-near-me-2817035",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Faa802ad9-2abc-4004-899e-f7363431ca35%2FPict_25.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-19T07:02:00Z",
            "content": "Trenbolone is a strong medicine that many people say has good effects like:\r\n     more muscles,\r\n     less fat,\r\nfaster healing time, more energy and power. It makes the body keep more nitrogen. This… [+13266 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "LAKSHMI M.S",
            "title": "Winstrol vs Anavar 2024: Which One is Better? - Deccan Herald",
            "description": "Explore the Winstrol vs Anavar comparison in 2024 to determine which one is better. Learn about the differences, benefits, and considerations of Winstrol and Anavar",
            "url": "https://www.deccanherald.com/brandspot/featured/winstrol-vs-anavar-2024-which-one-is-better-2816977",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Fd1c6d545-799d-47e1-994e-e47fc36f02eb%2FPict_23.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-19T06:32:27Z",
            "content": "Are you looking for a way to boost your fitness progress and not sure which steroid is right for you? Then stop looking because we will tell you about the amazing world of Anavar and Winstrol in this… [+14862 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Lifestyle Desk",
            "title": "Health Boost Or Calorie Overload? Dietician Advises Against Daily Dry Fruit Intake - News18",
            "description": "These fruits are calorie-dense and can contain high natural sugars.",
            "url": "https://www.news18.com/lifestyle/health-boost-or-calorie-overload-dietician-advises-against-daily-dry-fruit-intake-8709371.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-2023-12-19t105107.802-2023-12-951c8c770ba8d84b527222032346f843-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-19T05:22:31Z",
            "content": "Dry fruits are concentrated sources of vitamins, minerals, and antioxidants that offer numerous health benefits. They contain essential nutrients such as vitamin E, magnesium, potassium, iron, and fi… [+2157 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Flu Treatment: 5 Ayurvedic Kadhas to Get Instant Relief From Seasonal Cough and Cold - India.com",
            "description": "Kadhas are herbal concoctions that are said to be healthy and help get instant relief from viral infections, sore throat etc.",
            "url": "https://www.india.com/health/flu-treatment-5-ayurvedic-kadhas-to-get-instant-relief-from-seasonal-cough-and-cold-6596185/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/kadha.jpg",
            "publishedAt": "2023-12-19T04:21:03Z",
            "content": "Kadhas are herbal concoctions that are said to be healthy and help get instant relief from viral infections, sore throat etc. \r\nFlu Treatment: 5 Kadhas to Get Instant Relief From Seasonal Cough and C… [+2965 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News-Medical.Net"
            },
            "author": null,
            "title": "Cinnamon extract shows promise in reducing obesity by inhibiting fat cell growth and boosting fat breakdown - News-Medical.Net",
            "description": "Study reveals that cinnamon extract significantly inhibits adipocyte differentiation and lipid accumulation, offering potential benefits against obesity by reducing fat production and enhancing lipolysis in both cell models and mice.",
            "url": "https://www.news-medical.net/news/20231218/Cinnamon-extract-shows-promise-in-reducing-obesity-by-inhibiting-fat-cell-growth-and-boosting-fat-breakdown.aspx",
            "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_767525_17029558911424760.jpg",
            "publishedAt": "2023-12-19T04:06:00Z",
            "content": "In a recent study published in the journal Nutrients, researchers examine the effects of cinnamon on adipocyte differentiation and lipid accumulation.\r\nStudy: Effects of Cinnamon (Cinnamomum zeylanic… [+5846 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Rahul Pratyush",
            "title": "5 superfoods to eat for a healthier brain - India TV News",
            "description": "Ditch the brain drain! Discover the top superfoods, from omega-3 wonders to leafy green champions, that can boost your memory, focus, and overall cognitive function for a happier, healthier brain. Start fueling your mind today!",
            "url": "https://www.indiatvnews.com/health/5-superfoods-to-eat-for-a-healthier-brain-2023-12-19-907915",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/brain-1702957210.jpg",
            "publishedAt": "2023-12-19T03:53:02Z",
            "content": "Our brains are the powerful engines driving our thoughts, feelings, and actions. Just like any engine, their optimal performance relies on quality fuel. But unlike gas for our cars, the fuel for our … [+2343 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Healthshots.com"
            },
            "author": "Arushi Bidhuri",
            "title": "These 6 carrot juice benefits can make your winter better and brighter! - Health shots",
            "description": "Carrots are a powerhouse of nutrients that you must add to your diet. Carrot juice is a great way to amp up your diet! Here are carrot juice benefits and how to make it at home.",
            "url": "https://www.healthshots.com/healthy-eating/nutrition/carrot-juice-benefits/",
            "urlToImage": "https://images.healthshots.com/healthshots/en/uploads/2023/12/18192258/carrot-juice.jpg",
            "publishedAt": "2023-12-19T03:29:04Z",
            "content": "Winter is the time for some of the most delicious fruits and vegetables. One such crunchy and juicy vegetable we love during the chilly weather is carrot! Who can miss out on the warm Gaajar Ka Halwa… [+3853 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Docs highlight heightened risk of cardiovascular diseases in winters - Times of India",
            "description": "With the onset of winter, doctors in Jaipur are highlighting the heightened risk of cardiovascular diseases (CVDs) during the colder months. Precautions need to be taken as the risk of heart attacks increases in winters due to factors like decreased physical …",
            "url": "https://timesofindia.indiatimes.com/city/jaipur/https/example-com/highlighted-risk-cardiovascular-diseases-winters-jaipur/articleshow/106108042.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T03:02:10Z",
            "content": "10 benefits of jogging in winter season"
          },
          {
            "source": {
              "id": null,
              "name": "Csl.com"
            },
            "author": "",
            "title": "COVID-19 Precautions During the Holidays - CSL Limited",
            "description": "A Duke University expert recommends primary immunodeficiency patients take steps to protect themselves this holiday season. Risk varies depending on which PI disease a person has.",
            "url": "https://www.csl.com/we-are-csl/vita-original-stories/2023/covid19-precautions-during-the-holidays",
            "urlToImage": "https://www.csl.com/-/media/shared/vita-2023/covid-negative-test.png",
            "publishedAt": "2023-12-19T02:42:41Z",
            "content": "Four years after the COVID-19 pandemic began, SARS-CoV2 remains a threat to the health of primary immunodeficiency patients. And though PI patients long to return to regular life without having to ca… [+3522 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Rahul Pratyush",
            "title": "5 benefits of eating jaggery and raw turmeric in the morning - India TV News",
            "description": "Seize the day with a golden start by embracing the goodness of jaggery and raw turmeric each morning and embark on a journey towards a healthier, more vibrant life.",
            "url": "https://www.indiatvnews.com/lifestyle/food/5-benefits-of-eating-jaggery-and-raw-turmeric-in-the-morning-2023-12-19-907895",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/turmeric-and-jaggery-1702948439.jpg",
            "publishedAt": "2023-12-19T01:25:02Z",
            "content": "In the fast-paced world we inhabit, prioritizing our health has never been more crucial. Amidst the myriad of dietary trends and superfoods, the age-old wisdom of incorporating natural ingredients in… [+2508 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News-Medical.Net"
            },
            "author": null,
            "title": "HPV infections increase prostate cancer risk by 2.3 times, study finds - News-Medical.Net",
            "description": "Study investigates the association between HPV infections and prostate cancer, revealing that HPV patients have a 2.3-fold increased risk of developing prostate cancer compared to those without HPV.",
            "url": "https://www.news-medical.net/news/20231218/HPV-infections-increase-prostate-cancer-risk-by-23-times-study-finds.aspx",
            "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_767516_17029479982957360.jpg",
            "publishedAt": "2023-12-19T01:08:00Z",
            "content": "In a recent study published in the journal Prostate Cancer and Prostatic Diseases, researchers investigated the potential associations between human papillomavirus (HPV) infections and prostate cance… [+7103 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "QC clinic sees significant rise in illness during holiday season - WQAD News 8",
            "description": "Amana Care Clinic in Davenport discusses the spike in illness during the holiday season, and how families and friends can remain vigilant during the holiday ...",
            "url": "https://www.youtube.com/watch?v=JdqRisesJQA",
            "urlToImage": "https://i.ytimg.com/vi/JdqRisesJQA/hqdefault.jpg",
            "publishedAt": "2023-12-18T23:48:15Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "State officials warn of spike in respiratory illnesses - WKBN27",
            "description": "State officials warn of spike in respiratory illnesses, Ohio Department of Health Director Dr. Bruce VanderhoffStay informed about Youngstown news, weather, ...",
            "url": "https://www.youtube.com/watch?v=HVDijt_7Vmo",
            "urlToImage": "https://i.ytimg.com/vi/HVDijt_7Vmo/maxresdefault.jpg",
            "publishedAt": "2023-12-18T23:22:36Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "menshealth.com"
            },
            "author": "Erica Sweeney",
            "title": "Time Restricted Eating: What Is It, Does It Work For Weight Loss? - Men's Health UK",
            "description": "A time-restricted eating plan may offer several benefits, but there are side effects, say experts.",
            "url": "https://www.menshealth.com/uk/nutrition/a46024684/time-restricted-eating-for-weight-loss/",
            "urlToImage": "https://hips.hearstapps.com/hmg-prod/images/man-standing-happiness-on-the-kitchen-and-preparing-royalty-free-image-1701113895.jpg?crop=1.00xw:0.751xh;0,0.108xh&resize=1200:*",
            "publishedAt": "2023-12-18T15:47:36Z",
            "content": "Most \r\ndiets focus on which foods you should and shouldnt eat. Time-restricted eating takes a different approach it's a plan that centres on when you should eat. 'Time-restricted eating is just a win… [+6421 chars]"
          },
          {
            "source": {
              "id": "usa-today",
              "name": "USA Today"
            },
            "author": "Delaney Nothaft",
            "title": "How to tighten skin after weight loss - USA TODAY",
            "description": "At home treatments like supplements and creams aren't effective for treating excess skin, but several non-invasive and invasive procedures can help.",
            "url": "https://www.usatoday.com/story/life/health-wellness/2023/12/17/how-to-tighten-skin-after-weight-loss/71835006007/",
            "urlToImage": "https://www.usatoday.com/gcdn/presto/2020/09/10/NPPP/76a287f5-0b95-4486-b962-ae28c95e451f-091320_Anita_Mandal_hires.jpg?crop=4622,2600,x0,y235&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-12-17T12:01:36Z",
            "content": "Youve been working hard in the gym and monitoring your calorie intake not an easy feat, especially during the holiday season. (The eggnog will get you.) Now, youve lost a lot of weight. Yay! However,… [+3617 chars]"
          }
        ]
      },
      {
        "technology": [
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Affiliate Desk",
            "title": "10 best smartwatches for women under ₹55,000 - Hindustan Times",
            "description": "Explore the 10 best smartwatches with the latest trends and cutting-edge technology, ensuring you make a smart choice that complements your lifestyle.",
            "url": "https://www.hindustantimes.com/technology/10-best-smartwatches-for-women-under-rs-55000-101703049613786.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/watch__1703055443919_1703055444142.jpg",
            "publishedAt": "2023-12-20T08:21:50Z",
            "content": "Have you ever wondered how technology seamlessly blends with style, especially when it comes to wearable gadgets? Smartwatches, once confined to the realm of mere timekeeping, have evolved into sophi… [+29807 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Zee Media Bureau",
            "title": "Redmi Note 13 5G Series Likely To Launch In India: Check Details - Zee News",
            "description": "Xiaomi has officially announced the upcoming availability of its Redmi Note 13 5G series in India. The smartphones, including the Redmi Note 13, Redmi Note 13 Pro, and Redmi Note 13 Pro Plus, are set to launch on January 4 next year. These models were initial…",
            "url": "https://zeenews.india.com/technology/redmi-note-13-5g-series-likely-to-launch-in-india-check-details-2700977.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/20/1339020-file-photo-2023-12-19t192919.907.jpg",
            "publishedAt": "2023-12-20T07:35:00Z",
            "content": "New Delhi: Xiaomi has officially announced the upcoming availability of its Redmi Note 13 5G series in India. The smartphones, including the Redmi Note 13, Redmi Note 13 Pro, and Redmi Note 13 Pro Pl… [+2128 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "This ‘secret’ iOS 17 feature helps you avoid laundry disasters - The Indian Express",
            "description": "iOS translates garment care tags pronto with cutting edge visual recognition to help you avoid ruining your favourite threads.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/apple-ios-17-laundry-tag-feature-9075821/",
            "urlToImage": "https://images.indianexpress.com/2023/12/apple-laundry-featured.jpg",
            "publishedAt": "2023-12-20T07:19:40Z",
            "content": "Laundry is one of those unavoidable household chores that we all have to do, yet few of us actually fully understand. To iron or to dry clean? And if iron, what should the temperature be? Those tiny … [+1613 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Apple rolls out iOS 17.2.1, macOS Sonoma 14.2.1 with bug fixes: All the details - Times of India - Times of India",
            "description": "ios 17.2.1 update: Apple swiftly deploys iOS 17.2.1 and macOS Sonoma 14.2.1 updates, focusing on bug fixes, performance improvements, and security. Th",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/apple-rolls-out-ios-17-2-1-macos-sonoma-14-2-1-with-bug-fixes-all-the-details/articleshow/106147364.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106147364,width-1070,height-580,imgsize-71032,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T07:16:02Z",
            "content": "5G phones with IR blaster under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "Gadgets360.com"
            },
            "author": "Nithya P Nair, Siddharth Suvarna",
            "title": "OnePlus 12, OnePlus 12R to Debut in India at 'Smooth Beyond Belief' Event on January 23: Details - Gadgets 360",
            "description": "OnePlus 12 and OnePlus 12R launch will take place at the company's 'Smooth Beyond Belief' event on January 23 in India. The live launch event will take place in Pragati Maidan, New Delhi. OnePlus will offer community tickets for the event starting January 3. …",
            "url": "https://www.gadgets360.com/mobiles/news/oneplus-12-12r-india-january-23-smooth-beyond-belief-launch-event-community-tickets-4707909",
            "urlToImage": "https://i.gadgets360cdn.com/large/oneplus_12_shades_1701064042915.jpg",
            "publishedAt": "2023-12-20T06:43:33Z",
            "content": "OnePlus 12 India launch date has been set for January 23. The handset will debut in other global markets on the same day alongside the OnePlus 12R. The OnePlus 12 is already available in China. The l… [+2416 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Deeksha Somani",
            "title": "WhatsApp executive shares 5 tips for keeping messages private and secure - Times of India",
            "description": "Meta's WhatsApp continues to prioritise user privacy and security. While the platform already incorporates robust features such as end-to-end encryption and app lock, there are additional measures users can take to enhance their messaging security. Uzma Hussa…",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/whatsapp-executive-shares-5-tips-for-keeping-messages-private-and-secure/photostory/106145780.cms",
            "urlToImage": "https://static.toiimg.com/photo/106145792.cms",
            "publishedAt": "2023-12-20T06:29:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Anurag Chawake",
            "title": "Christmas 2023: From cameras to earbuds, budget-friendly tech gift ideas - The Indian Express",
            "description": "Christmas is here. If you are looking forward to gifting your friends and family, here are some incredible tech gift ideas.",
            "url": "https://indianexpress.com/article/technology/techook/christmas-2023-from-cameras-to-earbuds-budget-friendly-tech-gift-ideas-9074378/",
            "urlToImage": "https://images.indianexpress.com/2023/12/Christmas-Tech-Gifting-Guide-2023.jpeg",
            "publishedAt": "2023-12-20T05:56:39Z",
            "content": "With Christmas less than a week away, now is the best time to purchase a gift for your loved ones. If you want to gift your tech-savvy friends something this festive season but are on a tight budget,… [+3952 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "How to send a voice message in Google Messages - Times of India - Times of India",
            "description": "Google Messages now allows users to send voice messages via the app on Android and web. On Android, users can tap and hold the microphone icon to star",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/how-to-send-a-voice-message-in-google-messages/articleshow/106144618.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106144544,width-1070,height-580,imgsize-189872,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T05:56:00Z",
            "content": "5G phones with IR blaster under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Microsoft Copilot now lets you generate songs with lyrics and voice in seconds - The Indian Express",
            "description": "Microsoft is introducing a new feature for its AI chatbot - Copilot that lets you generate music and share it on social media. Here's how to do it in three easy steps.",
            "url": "https://indianexpress.com/article/technology/techook/microsoft-copilot-now-lets-you-generate-songs-with-lyrics-and-voice-in-seconds-9075535/",
            "urlToImage": "https://images.indianexpress.com/2023/12/Microsoft-Copilot-1.jpg",
            "publishedAt": "2023-12-20T05:42:19Z",
            "content": "Microsoft Copilot, formerly known as Bing Chat is getting a new plugin that allows users to generate songs in seconds. The tech giant said the feature makes use of Suno, an AI-powered music-creation … [+1362 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Garena Free Fire Redeem Codes for December 20, 2023: Get leaked Booyah Pass rewards and daily codes | Mint - Mint",
            "description": "The Free Fire Season 12 Booyah Pass rewards have been leaked, with players having the option to acquire exclusive rewards through the free pass or by purchasing the premium pass.",
            "url": "https://www.livemint.com/technology/tech-news/garena-free-fire-redeem-codes-for-december-20-2023-get-leaked-booyah-pass-rewards-and-daily-codes-11703049139166.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/hhihiiiiii_1703049303191_1703049315608.png",
            "publishedAt": "2023-12-20T05:16:00Z",
            "content": "Over the recent days, players of Garena Free Fire have been presented with exciting chances to acquire impressive in-game items like the Steel Fortress Bundle, Iron Fortress Bundle, The Influencer, A… [+2911 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Vishal Upadhyay",
            "title": "Samsung expands self-repair to include Galaxy foldables: Can you really fix your smartphone at home? - India TV News",
            "description": "Samsung is expanding its self-repair program to include Galaxy Z Flip 5 and Galaxy Z Fold 5 devices, allowing users to fix their own phones. Under this program, users get genuine Samsung parts, tools, and repair guides to replace components like displays and …",
            "url": "https://www.indiatvnews.com/technology/news/samsung-expands-self-repair-to-include-galaxy-foldables-can-you-really-fix-your-smartphone-at-home-2023-12-20-908102",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/samsung-self-repair-news-1703045568.jpg",
            "publishedAt": "2023-12-20T04:30:57Z",
            "content": "Great news for Samsung users! The tech giant is stepping up its self-repair game by adding the Galaxy Z Flip 5 and Galaxy Z Fold 5 devices to the program. Until now, this cool initiative, where you c… [+1803 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gadgets360.com"
            },
            "author": "Sucharita Ganguly, Siddharth Suvarna",
            "title": "iQoo Neo 9 Pro Tipped to Launch in India in January; May Come With Snapdragon 8 Gen 2 SoC - Gadgets 360",
            "description": "iQoo Neo 9 Pro may launch in India soon. It is confirmed to debut in China alongside the iQoo Neo 9 on December 27. Recently, they also released a teaser video which confirmed some key specifications of the handset. A tipster has now suggested India launch de…",
            "url": "https://www.gadgets360.com/mobiles/news/iqoo-neo-9-pro-india-launch-january-2024-expected-specifications-leak-4707348",
            "urlToImage": "https://i.gadgets360cdn.com/large/iqoo_neo9_pro_weibo_iqoo_1703042081838.jpg",
            "publishedAt": "2023-12-20T04:09:24Z",
            "content": "iQoo Neo 9 Pro may launch in India soon. It is confirmed to debut in China alongside the iQoo Neo 9 on December 27. The company has been teasing the iQoo Neo 9 series for a few weeks now. Recently, t… [+2761 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Divyanshi Sharma",
            "title": "Apple AirPods 4 with new design and USB Type C expected to launch in 2024, all details - India Today",
            "description": "A new report has claimed that Apple AirPods Pro 4th generation is likely to launch next year, along with the iPhone 16. The new earbuds are expected to include features like active noise cancellation, USB-C charging, and speakers for Find My alerts.",
            "url": "https://www.indiatoday.in/technology/news/story/apple-airpods-4-with-new-design-and-usb-type-c-expected-to-launch-in-2024-all-details-2478156-2023-12-20",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/airpods-pro-134404727-16x9.png?VersionId=.hOdWVDfzHrPf3SjFGEILuYrf6cBiAdq",
            "publishedAt": "2023-12-20T04:09:08Z",
            "content": "Apple AirPods are known to be one of the best TWS earbuds out there and the tech giant often rolls out upgrades for them. Earlier this year, during the Wonderlust event, Apple announced that it is re… [+2767 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Insider India"
            },
            "author": "Sourabh Jain",
            "title": "Multi-device support to chat lock – key features introduced by WhatsApp in 2023 - Business Insider India",
            "description": "WhatsApp has introduced several features for users in 2023.The new features on the app include multi-device support, chat lock, and more.In this post, we look",
            "url": "https://www.businessinsider.in/tech/apps/news/list-of-features-introduced-by-whatsapp-in-2023/articleshow/106141000.cms",
            "urlToImage": "https://www.businessinsider.in/photo/106141000/list-of-features-introduced-by-whatsapp-in-2023.jpg?imgsize=23736",
            "publishedAt": "2023-12-20T03:47:52Z",
            "content": "Mark Zuckerberg-led Meta has introduced several features to popular messaging app WhatsApp in 2023. From offering users the ability to edit messages to allowing users to use multiple accounts on the … [+1816 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Say hello to the new McLaren GTS, the GT’s successor - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/auto/car-news/say-hello-to-the-new-mclaren-gts-the-gts-successor/3343024/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T03:34:08Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "Ayushmann Chawla",
            "title": "Apple iPhone 14 Plus available at Rs 30,999 on Flipkart after Rs 36,000 off, check details - DNA India",
            "description": "Apple iPhone 14 Plus was launched in India at a starting price of Rs 89,900 for the base model and after the launch of Apple iPhone 15 Plus, the company slashed the price of the phone by Rs 10,000.",
            "url": "https://www.dnaindia.com/technology/report-apple-iphone-14-plus-available-at-rs-30999-on-flipkart-after-rs-36000-off-check-details-3072126",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/12/20/2620373-apple-iphone-14-plus.jpg",
            "publishedAt": "2023-12-20T03:33:00Z",
            "content": "Apple iPhone 14 Plus was launched in India at a starting price of Rs 89,900 for the base model and after the launch of Apple iPhone 15 Plus, the company slashed the price of the phone by Rs 10,000.Ap… [+1794 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CarToq.com"
            },
            "author": "Ajeesh Kuttan",
            "title": "Maruti Suzuki Ertiga MPV modified with air suspension & panoramic sunroof [Video] - CarToq.com",
            "description": "The Indian subsidiary of Suzuki Motor Corporation, Maruti Suzuki, is India’s largest car manufacturer. Suzuki not only offers its cars in India but also in other international markets. One such product available in both India and other Southeast Asian markets…",
            "url": "https://www.cartoq.com/low-rider-suzuki-ertiga-with-panoramic-sunroof-and-air-suspension/",
            "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/12/ertiga-modified-featured.jpg",
            "publishedAt": "2023-12-20T01:15:32Z",
            "content": "The Indian subsidiary of Suzuki Motor Corporation, Maruti Suzuki, is India’s largest car manufacturer. Suzuki not only offers its cars in India but also in other international markets. One such produ… [+2834 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ticker.tv"
            },
            "author": "Cheryl King",
            "title": "Securely Transfer Your WhatsApp Chat History with QR Code - TickerTV News",
            "description": "Securely Transfer Your WhatsApp Chat History with QR Code - TickerTV News",
            "url": "https://ticker.tv/news/transfer-your-whatsapp-chat-history-through-qr-code-easily-just-do-it-this-way/353904/",
            "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_a_woman_using_smartphone_or_computer_on_outdoor_63836269-b6d4-41f5-8e38-8b4be2deb41c.png",
            "publishedAt": "2023-12-20T00:50:40Z",
            "content": "In today’s fast-paced world, our dependence on mobile technology is undeniable. With our phones and devices being constantly connected to the internet, it’s natural to worry about preserving our valu… [+2851 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "MKBHD crowns the iPhone 15 Pro as the phone with best camera - 9to5Mac",
            "description": "MKBHD is back with its annual Smartphone Awards, in which it chooses the best smartphones in different categories. While the...",
            "url": "https://9to5mac.com/2023/12/19/mkbhd-iphone-15-pro-smartphone-award/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/MKBHD-Smartphone-of-the-Year.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-12-20T00:19:00Z",
            "content": "MKBHD is back with its annual Smartphone Awards, in which it chooses the best smartphones in different categories. While the iPhone won only one award last year, Apple’s smartphone this year won in t… [+3329 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "Realme C55 Android 14 Early Access program is now live for Indian users - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/2023/12/20/realme-c55-android-14-early-access-program/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T00:16:32Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "Vivo X100 vs OnePlus 12: Specs Comparison - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/guides/vivo-x100-vs-oneplus-12-specs-comparison/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T23:50:05Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "News-Medical.Net"
            },
            "author": null,
            "title": "AI-driven advancements in electronic skin technology promise revolution in health monitoring and diagnostics - News-Medical.Net",
            "description": "Review discusses the integration of AI in developing next-generation e-skin, focusing on engineering challenges, signal processing, and health data analysis for applications in human-machine interfaces and disease diagnosis.",
            "url": "https://www.news-medical.net/news/20231219/AI-driven-advancements-in-electronic-skin-technology-promise-revolution-in-health-monitoring-and-diagnostics.aspx",
            "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_767624_17030276041815507.png",
            "publishedAt": "2023-12-19T22:59:00Z",
            "content": "In a recent review article published in the journal Nature Medicine Intelligence, scientists at the California Institute of Technology discussed the involvement of artificial intelligence (AI) techno… [+5703 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "YouTube app gets new layout options to help users convert long-form videos to Shorts; Know how to - HT Tech",
            "description": "YouTube app gets new layout options to help users convert longform videos to Shorts Know how to Making Shorts from your longform videos will get easier as the YouTube app offers new layout options for users. The YouTube app has released a new set of layout to…",
            "url": "https://tech.hindustantimes.com/web-stories/youtube-app-gets-new-layout-options-to-help-users-convert-long-form-videos-to-shorts-know-how-to-71703044993549.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/20/1600x900/YouTube_Shorts_1_Unsplash_1703045082311_1703045097814.png/",
            "publishedAt": "2023-12-19T22:54:51Z",
            "content": "Photo Credit: YouTube\r\n Making Shorts from your long-form videos will get easier as the YouTube app offers new layout options for users. \r\nPhoto Credit: YouTube\r\n The YouTube app has released a new s… [+840 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "GeekWire"
            },
            "author": "Thomas Wilde",
            "title": "Wizards of the Coast doubles down on generative AI stance, says artists are 'what makes D&D great' - GeekWire",
            "description": "In the new 2024 Player's Handbook, all of the core character classes in Dungeons & Dragons will get full-color illustrations like this one, which",
            "url": "https://www.geekwire.com/2023/wizards-of-the-coast-doubles-down-on-generative-ai-stance-says-artists-are-what-makes-dd-great/",
            "urlToImage": "https://cdn.geekwire.com/wp-content/uploads/2023/12/DD-PHB-2024-Fighter-key-artjpg.jpg",
            "publishedAt": "2023-12-19T22:12:36Z",
            "content": "In the new 2024 Players Handbook, all of the core character classes in Dungeons &amp; Dragons will get full-color illustrations like this one, which depicts a fighter. (Nestor Ossandón for Wizards of… [+2195 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "GSMArena.com"
            },
            "author": "Ro",
            "title": "Google Play Store to let you uninstall apps remotely from other devices - GSMArena.com news - GSMArena.com",
            "description": "Google is already rolling out the new version of Play Store. Play Store version 38.8 is out and Google is adding the ability to uninstall apps remotely...",
            "url": "https://www.gsmarena.com/google_play_store_to_let_you_uninstall_apps_remotely_from_other_devices-news-60975.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/12/play-store-uninstall-remotely/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2023-12-19T21:12:02Z",
            "content": "Play Store version 38.8 is out and Google is adding the ability to uninstall apps remotely from devices connected to the same account. The remote uninstall is supposed to work on all platforms - PC, … [+760 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "TomTom brings AI assistant to cars with Microsft's help - ReadWrite",
            "description": "TomTom is building an AI assistant specifically for an optimal automotive experience — in partnership with Microsoft.",
            "url": "https://readwrite.com/tomtom-brings-ai-assistant-to-cars-with-microsfts-help/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2023/12/TomTom-brings-AI-assistant-to-cars.jpg",
            "publishedAt": "2023-12-19T19:33:45Z",
            "content": "According to Reuters, Dutch digital mapping company TomTom announced an exciting new partnership with tech giant Microsoft on Tuesday to develop an artificial intelligence (AI) powered conversational… [+2270 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Digital Trends"
            },
            "author": "Jesse Hollington",
            "title": "How to use your iPhone’s new Journal app in iOS 17.2 - Digital Trends",
            "description": "Apple's iOS 17.2 update has arrived with its highly anticipated Journal app. Here's how to get everything out of the new journalling experience.",
            "url": "https://www.digitaltrends.com/mobile/how-to-use-iphone-journal-app-ios-17-2/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/11/Apple-Journal-app_0465.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2023-12-19T19:00:19Z",
            "content": "When Apple unveiled iOS 17 in June, it came with the announcement of Journal, a surprising new first-party app to help you record your lifes journey.\r\nAlthough Apple made it clear that Journal wouldn… [+14229 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Zee5: Zee5 introduces Dolby Vision support on its platform: Supported titles and other details - Times of India - Times of India",
            "description": "Zee5 introduces Dolby Vision support, enhancing the viewing experience. Dolby Vision is a HDR technology that improves contrast, brightness, and color",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/zee5-introduces-dolby-vision-support-on-its-platform-supported-titles-and-other-details/articleshow/106129041.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106129001,width-1070,height-580,imgsize-10262,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T17:57:02Z",
            "content": "5G phones with IR blaster under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Google to stop sharing location history data with law enforcement - CBS News",
            "description": "Google has announced it will make changes to its maps tool, making it impossible to access its customer's location history. This means the company will no lo...",
            "url": "https://www.youtube.com/watch?v=Qq8muK86hIU",
            "urlToImage": "https://i.ytimg.com/vi/Qq8muK86hIU/maxresdefault.jpg",
            "publishedAt": "2023-12-19T17:22:45Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Gearrice.com"
            },
            "author": "Advay Hora",
            "title": "Good performance and compact: the Google Pixel 7a is back on sale and its price will leave you speechless - Gearrice",
            "description": "Join the conversation",
            "url": "https://www.gearrice.com/update/good-performance-and-compact-the-google-pixel-7a-is-back-on-sale-and-its-price-will-leave-you-speechless/",
            "urlToImage": "https://www.mundodeportivo.com/urbantecno/hero/2023/12/google-pixel-7a.1702988359.3937.jpg",
            "publishedAt": "2023-12-19T17:21:12Z",
            "content": "The Google Pixel 7a has a 6.1-inch screen\r\nWhile we wait for news about the Google Pixel 8awe will talk about Google Pixel 7a, a smartphone that you can now get for less than 400 euros. This mobile I… [+2378 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Call of Duty: Modern Warfare 3 and Warzone - Official Santa's Slayground Holiday Event Trailer - IGN",
            "description": "Call of Duty: Modern Warfare 3 and Warzone are bringing in the holiday spirit with the Santa's Slayground Holiday Event. Players will be able to experience n...",
            "url": "https://www.youtube.com/watch?v=E_zN-Lo5SOc",
            "urlToImage": "https://i.ytimg.com/vi/E_zN-Lo5SOc/maxresdefault.jpg",
            "publishedAt": "2023-12-19T17:15:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "iOS 17.3: New features, likely release date, and what's missing - 9to5Mac",
            "description": "Following the release of iOS 17.2 in early December, Apple is now beta testing iOS 17.3 for iPhone users. This...",
            "url": "https://9to5mac.com/2023/12/19/ios-17-3-new-features-release-date/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/iOS-17.3-hero.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-12-19T17:07:00Z",
            "content": "Following the release of iOS 17.2 in early December, Apple is now beta testing iOS 17.3 for iPhone users. This update is headlined by a new feature called Stolen Device Protection, designed to protec… [+3270 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "Abhinav Singh",
            "title": "5 Nearest Stars To Earth - WION",
            "description": "5 Nearest Stars To Earth",
            "url": "https://www.wionews.com/web-stories/science/5-nearest-stars-to-earth-1703003303219",
            "urlToImage": null,
            "publishedAt": "2023-12-19T16:59:41Z",
            "content": "Proxima Centauri is the closest star known to us, located roughly 4.24 light-years from Sun. It is a red dwarf, the most common type of star found in the Milky Way."
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Xiaomi To Introduce HyperOS For These Xiaomi, Redmi And Poco Smartphones Next Year - ABP Live",
            "description": "The handset maker has officially stated on X, formerly Twitter, that a range of smartphones and a tablet will be globally updated to HyperOS during the first quarter (Q1) of 2024.",
            "url": "https://news.abplive.com/technology/gadgets/xiaomi-hyperos-redmi-poco-xiaomi-models-q1-2024-list-1651160",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/19/28ce026337da3bcc7902aecad34932171703001515645295_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-19T15:59:39Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "CRN"
            },
            "author": "Dylan Martin",
            "title": "5 Big Points About 5th-Gen Intel Xeon CPUs: Claims Against AMD, AI Performance And More - CRN",
            "description": "CRN explains five important things to know about fifth-generation Intel Xeon CPUs, including how they perform against AMD’s latest EPYC chips and how they run key AI workloads.",
            "url": "https://www.crn.com/news/components-peripherals/5th-gen-intel-xeon-cpus-claims-against-amd-ai-performance-and-more",
            "urlToImage": "https://www.crn.com/news/components-peripherals/media_11e97b4fbfa643036bae42edff637d7b2a6338575.jpeg?width=1200&format=pjpg&optimize=medium",
            "publishedAt": "2023-12-19T15:24:00Z",
            "content": "CRN explains five important points about Intels new fifth-gen Xeon processors, including their most important specifications and features, how they improve over the previous generation, how they perf… [+23916 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Affiliate Desk",
            "title": "10 best luxury rose gold watches: Glamorous picks for you | Mint - Mint",
            "description": "10 best luxury rose gold watches: A rose gold watch is the perfect accessory to add a touch of sparkle to your look. Check out our list of luxury rose gold watches to find the perfect one for you.",
            "url": "https://www.livemint.com/technology/gadgets/10-best-luxury-rose-gold-watches-glamorous-picks-for-you-11702965553714.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/luxury_rose_gold_watches_1702966413704_1702966422958.jpg",
            "publishedAt": "2023-12-19T15:22:03Z",
            "content": "Luxury rose gold watches are high-quality timepieces that exude timeless style. The subtle pink undertones and contrast of yellow and gold make them a versatile choice to wear for any occasion, from … [+22821 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Shubham Arora",
            "title": "nubia Z60 Ultra with Snapdragon 8 Gen 3, Under-Display Camera Launched - Times Now",
            "description": "nubia introduces the Z60 Ultra, a flagship smartphone challenging competitors like OnePlus 12 and Xiaomi 14 Pro in China. The device features a 6.8-inch OLED display, under-display camera, Snapdragon 8 Gen 3 chip, and a powerful triple-camera system. The nubi…",
            "url": "https://www.timesnownews.com/technology-science/nubia-z60-ultra-with-snapdragon-8-gen-3-under-display-camera-launched-article-106130782",
            "urlToImage": "https://static.tnn.in/thumb/msid-106131031,thumbsize-661570,width-1280,height-720,resizemode-75/106131031.jpg",
            "publishedAt": "2023-12-19T14:34:06Z",
            "content": "03:19\r\nShiv Thakare shares an adorable moment with his mom, Shoaib Ibrahim, Vivek Dahiya are seen outside JDJ 11 set."
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Quordle 694 answer for December 19: Be smart with attempts! Check Quordle hints, clues, solutions - HT Tech",
            "description": "Quordle 694 answer for December 19: Today’s puzzle is a good time to push your winning streak and build it up. Use these Quordle hints, clues, and solutions to easily solve it.",
            "url": "https://tech.hindustantimes.com/how-to/quordle-694-answer-for-december-19-be-smart-with-attempts-check-quordle-hints-clues-solutions-71702992412661.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/19/1600x900/HT_Tech_25_1702992442881_1702992442990.jpg",
            "publishedAt": "2023-12-19T13:42:56Z",
            "content": "Quordle 694 answer for December 19: As we near Christmas, Quordle seems to be in a festive mood as well. And probably that's why today's puzzle is not as difficult as we have seen in recent times. Qu… [+2058 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Vikas Yadav",
            "title": "Realme Narzo 60 Pro 5G Price 12GB RAM, 1TB Storage, Curved Display Phone Available At Massive Discounts Via Coupons, Bank Offers; Details - Jagran English",
            "description": "Realme Narzo 60 Pro Coupon Discounts: Realme Narzo 60 Pro 5G, which offers 12GB RAM and 1TB storage, is now selling at a discounted price via coupons during Realmes Christmas sale and Amazons Xmas Narzo Sale, which will end on December 26.",
            "url": "https://english.jagran.com/technology/realme-christmas-sale-realme-narzo-60-pro-5g-price-in-india-12gb-ram-1tb-storage-processor-specifications-mobile-discount-coupons-bank-offers-amazon-sale2023-10121532",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/reamle-narzo-60-pro-5g-price1702993246983.jpg",
            "publishedAt": "2023-12-19T13:27:00Z",
            "content": "Realme Narzo 60 Pro Price In India: Chinese smartphone maker Realme announced the Narzo 60 series smartphones in India earlier this year. The bigger sibling, Realme Narzo 60 Pro 5G, which offered 12G… [+2108 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Itel: Itel set to launch Open-Ear Buds under Rs 2,000 - Times of India - Times of India",
            "description": "Itel is set to launch Open-Ear Buds, a sleek and lightweight audio product targeting outdoor enthusiasts. This launch aims to strengthen Itel's smart",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/itel-set-to-launch-open-ear-buds-under-rs-2000/articleshow/106128975.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106128955,width-1070,height-580,imgsize-20166,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T12:59:25Z",
            "content": "5G phones with IR blaster under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "SamMobile"
            },
            "author": "SamMobile, Asif Iqbal Shaik",
            "title": "Samsung drops price of Galaxy A14 5G in India temporarily - SamMobile - Samsung news",
            "description": "Samsung has dropped the price of the Galaxy A14 5G in India. This price drop is temporary for the phone ...",
            "url": "https://www.sammobile.com/news/galaxy-a14-5g-price-drop-india/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/01/Samsung-Galaxy-A14-5G-720x405.jpg",
            "publishedAt": "2023-12-19T12:52:00Z",
            "content": "Samsung has dropped the price of the Galaxy A14 5G in India. This price drop is temporary for the phone that was launched earlier this year in the country. The device has already received the Android… [+1589 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Ashish Singh",
            "title": "Year Ender 2023 How BGMIs Grand Comeback This Year Is Shaping E-Sports In India With Its Classic Gameplay - Jagran English",
            "description": "Battlegrounds Mobile India BGMI has successfully returned to the Indian market after being taken down from app stores first for privacy-related reasons. With Krafton hosting competitive events like the Battlegrounds Mobile India Series 2023 and Pro Series 202…",
            "url": "https://english.jagran.com/technology/year-ender-2023-how-bgmis-grand-comeback-this-year-is-shaping-e-sports-in-india-with-its-classic-gameplay-10121500",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/11_08_2022-28_07_2022-bgmi_22933654_229728161666183474372 (2)1702988921409.jpg",
            "publishedAt": "2023-12-19T12:21:00Z",
            "content": "BGMI, also known as Battlegrounds Mobile India, made its grand comeback in India as a mid-year gift for mobile gamers. The game made its official comeback on May 27 with some changes as per the India… [+4634 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Anand Singha",
            "title": "Nikhil Kamath unveils WTF Fund to fire up India's rising creators — how to apply - CNBCTV18",
            "description": "Hosted by Nikhil Kamath, the WTF Podcast features casual yet intellectually stimulating conversations between friends and industry experts. Covering diverse topics such as technology, social media, renewable energy, electric vehicles, philosophy, gaming, and …",
            "url": "https://www.cnbctv18.com/entertainment/nikhil-kamath-wtf-fund-tanmay-bhat-ranveer-allahbadia-prajakta-kohli-nasdaily-indian-creators-18602581.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/12/wtf-is-nikhil-kamath-1-1019x573.jpg",
            "publishedAt": "2023-12-19T12:20:04Z",
            "content": "Entrepreneur Nikhil Kamath along with notable creators like Tanmay Bhat, Ranveer Allahbadia, Prajakta Koli, and Nuseir Yassin has introduced the WTF Fund For Creators. This initiative aims to shake u… [+2045 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Herzindagi.com"
            },
            "author": "Neha Gupta",
            "title": "5 Best Mechanical Keyboards For Gaming And Typing (December 2023) - HerZindagi",
            "description": "Finding the one the best keyboards that suit your needs can greatly enhance your productivity and overall computing experience. In this comprehensive guide, we will delve into the realm of keyboards, analyzing the top contenders determined to be the best in t…",
            "url": "https://www.herzindagi.com/top-deals/computer-accessories/best-mechanical-keyboards-for-gaming-and-typing-article-258939",
            "urlToImage": "https://images.herzindagi.info/image/2023/Dec/Best-Keyboard-in-India.jpg",
            "publishedAt": "2023-12-19T12:11:42Z",
            "content": "Finding the one the best keyboards that suit your needs can greatly enhance your productivity and overall computing experience. In this comprehensive guide, we will delve into the realm of keyboards,… [+11859 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Act fast! Google Podcasts to shut down: Here's how to preserve your playlists | Mint - Mint",
            "description": "Google plans to discontinue its Google Podcasts app by mid-2024, prompting users to transfer their shows and episodes to an alternative platform.",
            "url": "https://www.livemint.com/technology/tech-news/act-fast-google-podcasts-to-shut-down-heres-how-to-preserve-your-playlists-11702984996253.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/2-0-1193613199-google-podcasts4-0_1679672308198_1702985171588.jpg",
            "publishedAt": "2023-12-19T11:28:47Z",
            "content": "Google has recently revealed disappointing news for avid podcast enthusiasts who rely on Google Podcasts to keep up with their preferred shows. The company has declared its intention to discontinue t… [+3005 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "Realme C67 4G With 108MP Camera, Snapdragon 685 Launched In Indonesia - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/2023/12/19/realme-c67-4g-with-108mp-camera-snapdragon-685-launched-in-indonesia/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T11:20:11Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Gadgets360.com"
            },
            "author": "Nithya P Nair, Siddharth Suvarna",
            "title": "Poco M6 5G India Launch Set for December 22, 50-Megapixel Dual Rear Cameras Teased - Gadgets 360",
            "description": "Poco has announced December 22 as the launch date of the Poco M6 5G through its X (formerly Twitter) account. The launch event will take place at 12:00pm IST. As mentioned, the teaser shared by the company suggests that the handset will come with a waterdrop-…",
            "url": "https://www.gadgets360.com/mobiles/news/poco-m6-5g-india-launch-december-22-cameras-specifications-teaser-4703270",
            "urlToImage": "https://i.gadgets360cdn.com/large/poco_m6_5G_1702984167868.jpg",
            "publishedAt": "2023-12-19T11:17:43Z",
            "content": "Poco M6 5G is all set to go official in India this week. The Xiaomi sub-brand has announced the launch of a new M series phone through its social media channels. Poco has shared a poster, revealing t… [+1670 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Affiliate Desk",
            "title": "Top 10 Panasonic fully automatic washing machines - Hindustan Times",
            "description": "Revolutionize your laundry experience with a Panasonic fully automatic washing machine. Explore a range of our top 10 washing solutions.",
            "url": "https://www.hindustantimes.com/technology/top-10-panasonic-fully-automatic-washing-machines-101702979706098.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/MixCollage-19-Dec-2023-04-11-PM-3932_1702982521978_1702982541409.jpg",
            "publishedAt": "2023-12-19T11:04:22Z",
            "content": "Hand-washing clothes can be daunting, especially when it comes to stains that refuse to go away. With the advent of washing machines, cleaning has become less of a hassle- simply load your clothes an… [+20895 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Analytics Insight"
            },
            "author": "Shiva Ganesh",
            "title": "MediaTek and Nvidia Team Up for AI-powered Cars - Analytics Insight",
            "description": "Explore the groundbreaking collaboration between semiconductor giants MediaTek and Nvidia as they join forces to usher in a new era of automotive technology.",
            "url": "https://www.analyticsinsight.net/mediatek-and-nvidia-team-up-for-ai-powered-cars/",
            "urlToImage": "https://www.analyticsinsight.net/wp-content/uploads/2023/12/MediaTek-and-Nvidia-team-up-for-AI-powered-cars.jpg",
            "publishedAt": "2023-12-19T10:27:11Z",
            "content": "MediaTek and Nvidia unite for a transformative alliance in AI-powered automotive technology\r\nIn a groundbreaking collaboration, semiconductor giants MediaTek and Nvidia have joined forces to bring ar… [+3699 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Amazon sale: From iPhone 13 to Samsung Galaxy, check offers on these phones - Hindustan Times",
            "description": "The e-commerce giant is offering discounts on brands such as Apple, Samsung, OnePlus, Realme, Xiaomi, iQOO, among others.",
            "url": "https://www.hindustantimes.com/technology/amazon-year-end-sale-from-iphone-13-to-samsung-galaxy-check-offers-on-these-phones-101702977989179.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/Screenshot_2023-12-19_145847_1702978145093_1702978151915.png",
            "publishedAt": "2023-12-19T10:06:31Z",
            "content": "Amazon is currently running year-end offers on some popular smartphones, offering discounts on brands such as Apple, Samsung, OnePlus, Realme, iQOO, among others.\r\nRepresentational Image\r\nHere are so… [+1451 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "IN PICS | From Redmi 12 To Samsung Galaxy M34, Here Are The Best Pocket-Friendly Phones Of 2023 - ABP Live",
            "description": "OnePlus Nord CE 3 Lite 5G (Price: Rs 19,999) — OnePlus has successfully carved a niche in the mid-segment market with its Nord series, and the Nord CE 3 Lite stands out as a powerful device under Rs 20,000 in 2023. Boasting a 6.72-inch full-HD+ display with a…",
            "url": "https://news.abplive.com/photo-gallery/technology/gadgets-best-affordable-cheap-phones-2023-samsung-redmi-xiaomi-motorola-oneplus-photo-gallery-1651085",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/19/80adad896040eca5f2ba05bd60a1b65e1702978966587402_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-19T09:43:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Shaurya Sharma",
            "title": "Apple Watch BANNED! Apple Cannot Sell These Models In US: Here's What Happened - News18",
            "description": "Apple Watch models 9 and Ultra 2 face regulatory pressure that could force the company from selling the devices in the US from this week.",
            "url": "https://www.news18.com/tech/apple-can-no-longer-sell-apple-watch-series-9-ultra-2-in-us-amid-patent-dispute-8709024.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/apple-watch-series-9-ultra-2-2023-12-dd4db3ee9ffeb59403c94eaf29348e2c-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-19T09:38:00Z",
            "content": "Apple will no longer be permitted to sell its latest Apple Watch Series 9 and the Apple Watch Ultra 2 smartwatches in the United States beginning on December 21, with the last permissible pickup or d… [+2075 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Vikas Yadav",
            "title": "Apple Music Free Subscription For 3 Months Check Eligibility To Get Access To Premium Listening Experience Effectively Free - Jagran English",
            "description": "Apple Music Free: New users can try the application for free for the first three months. The 3 month free offer comes with the benefits of 100 million songs, zero ads, Spatial Audio on compatible devices and tracks and more features.",
            "url": "https://english.jagran.com/technology/apple-music-free-subscription-price-for-3-months-eligibility-to-get-access-to-premium-listening-experience-effectively-free-10121421",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/apple-music-free-subscription1702979040594.jpg",
            "publishedAt": "2023-12-19T09:34:00Z",
            "content": "Apple Music is among the popular music streaming platforms across the globe. However, it does not offer a free listening tier similar to YouTube Music or Spotify. However, new users can try the appli… [+2050 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Advanced Science News"
            },
            "author": "Andrea Portales",
            "title": "A carbon dioxide-recycling yeast boosts bioethanol production - Advanced Science News",
            "description": "A genetically engineered strain of yeast is reducing the amount of carbon dioxide produced during the production of ethanol biofuels.",
            "url": "https://www.advancedsciencenews.com/a-carbon-dioxide-recycling-yeast-boosts-bioethanol-production/",
            "urlToImage": "https://www.advancedsciencenews.com/wp-content/uploads/2023/12/kai-dahms-IBo9Ehrzcfs-unsplash.jpg",
            "publishedAt": "2023-12-19T09:00:00Z",
            "content": "For years, the ability to take up carbon dioxide (CO2) and convert it into sugar has been naturally restricted to plants, algae, and some bacteria. However, researchers have now incorporated this fun… [+4801 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Samsung Galaxy S24 Ultra Specifications Tipped: iPhone-Like Titanium Frame, 200-Megapixel Main Camera, More - ABP Live",
            "description": "Samsung Galaxy S24 Ultra is expected to be announced early next year.",
            "url": "https://news.abplive.com/technology/gadgets/samsung-galaxy-s24-ultra-specifications-samsung-galaxy-s24-ultra-leak-titanium-frame-gorilla-glass-details-iphone-15-apple-1651029",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/14/bb96969638df7f63f1219323c61d4b831702552832934402_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-19T07:44:57Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Herzindagi.com"
            },
            "author": "Neha Gupta",
            "title": "Best Laptops Under 25000 (December 2023): Affordable Choices For Students And Professionals - HerZindagi",
            "description": "Best Laptops Under 25000: If you have only twenty-five thousand rupees in your e-wallet, you can still explore some of the best laptops in India that are specially designed to fulfill basic browsing needs. If you're interested in buying one, you can check out…",
            "url": "https://www.herzindagi.com/top-deals/laptop/best-laptops-under-25000-affordable-choices-for-students-and-professionals-article-258866",
            "urlToImage": "https://images.herzindagi.info/image/2023/Dec/Laptops-Under-25000.jpg",
            "publishedAt": "2023-12-19T07:39:28Z",
            "content": "Best Laptops Under 25000: If you have only twenty-five thousand rupees in your e-wallet, you can still explore some of the best laptops in India that are specially designed to fulfill basic browsing … [+14344 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Kiran Singh",
            "title": "8 key features in the Truecaller app that every Android user must know - Times of India",
            "description": "In the realm of spam call management, Truecaller stands as a prominent app, boasting a host of features that extend beyond mere caller detection. Here, we delve into 8 indispensable features within Truecaller that Android users should not overlook.",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/8-key-features-in-the-truecaller-app-that-every-android-user-must-know/photostory/106116529.cms",
            "urlToImage": "https://static.toiimg.com/photo/106116593.cms",
            "publishedAt": "2023-12-19T07:16:29Z",
            "content": "Tired of sifting through spam to find important messages? Truecaller's Smart SMS feature automatically categorizes messages, from promotions to deliveries, ensuring crucial messages don't go unnotice… [+120 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Vishal Upadhyay",
            "title": "New year, new smartphones: Xiaomi Redmi Note 13 series, Samsung Galaxy S24, and more to launch | Technology News - India TV News",
            "description": "January 2024 brings a smartphone feast, featuring Xiaomi's Redmi Note 13, the OnePlus 12 Series with impressive charging, Vivo's X100 Pro and X100, and the highly anticipated Samsung Galaxy S24 Series.",
            "url": "https://www.indiatvnews.com/technology/news/new-year-new-smartphones-xiaomi-redmi-note-13-series-samsung-galaxy-s24-and-more-to-launch-2023-12-19-907940",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/smartphones-launching-in-january-2024-1702966555.jpg",
            "publishedAt": "2023-12-19T06:35:39Z",
            "content": "As we step into the new year, various smartphone companies are set to unveil new models, bringing exciting options for buyers. If you're in the market for a new smartphone, January 2024 promises an a… [+1600 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "10 best HP laptops: Check out these productivity enhancers for professional and personal work - HT Tech",
            "description": "10 best HP laptops: From HP Laptop 15, HP 255 G8 Notebook PC, to HP Laptop 14s, check them all out now.",
            "url": "https://tech.hindustantimes.com/laptops-pc/news/10-best-hp-laptops-check-out-these-productivity-enhancers-for-professional-and-personal-work-71702961171362.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/19/1600x900/HPL_4_1694778422464_1702962433057.png",
            "publishedAt": "2023-12-19T06:05:02Z",
            "content": "10 best HP laptops: Are you planning to buy a reliable and feature-filled laptop? If yes you can try an HP laptop. HP laptops are renowned for their impressive performance, design, and reliability, m… [+14953 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "DNA Web Team",
            "title": "Apple iPhone 14, iPhone 15 and other iPhone users under ‘high’ risk, India government issues warning… - DNA India",
            "description": "Although Apple iPhone 14, iPhone 15 are fairly new, they are still under risk of cyberattack along with other iPhone models.",
            "url": "https://www.dnaindia.com/technology/report-apple-iphone-14-iphone-15-and-other-iphone-users-under-high-risk-india-government-issues-warning-3072027",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/12/19/2620271-apple.jpg",
            "publishedAt": "2023-12-19T04:44:00Z",
            "content": "Although Apple iPhone 14, iPhone 15 are fairly new, they are still under risk of cyberattack along with other iPhone models. Apple iPhone 14, Apple iPhone 15 are few of the most popular iPhone models… [+1848 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Divyanshi Sharma",
            "title": "Nothing likely to launch its new smartphone in February 2024, here is everything we know - India Today",
            "description": "Nothing might announce the Nothing Phone 2a during Mobile World Congress in February 2024. The company hasn't officially acknowledged the existence of the phone yet.",
            "url": "https://www.indiatoday.in/technology/news/story/nothing-likely-to-launch-its-new-smartphone-in-february-2024-here-is-everything-we-know-2477683-2023-12-19",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/nothing-phone-193706509-16x9_0.png?VersionId=zmE0s1cwOebg18BAPdwA3qZIrcQdgKbE",
            "publishedAt": "2023-12-19T04:02:45Z",
            "content": "In barely two years, Nothing- the London-based consumer tech company- has carved a niche for itself in the industry. Its two smartphones - Nothing Phone 1 and Nothing Phone 2 - received positive revi… [+2685 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "Pebble X Pepe Jeans smartwatch launched at Rs 1,999 - Check features - Zee Business",
            "description": "The Pebble X Pepe Jeans smartwatch is equipped with advanced calling features, notifications, reminders and AI Voice Assistant that pays heed to your every command.",
            "url": "https://www.zeebiz.com/technology/news-pebble-x-pepe-jeans-smartwatch-launched-at-rs-1999-check-features-269225",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/19/273413-pebblepepe.jpg",
            "publishedAt": "2023-12-19T03:40:59Z",
            "content": "Homegrown smartwatch brand Pebble has partnered with Pepe Jeans London to introduce a limited special edition Bluetooth Calling smartwatch. The Pebble X Pepe smartwatch dons denim-leather straps and … [+963 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "\"Beeper Mini\" app lets Android users send texts to iPhones with blue iMessage bubbles - CBS Mornings",
            "description": "A new app called \"Beeper Mini\" allows Android phones to text iPhones with the blue iMessage bubble that had been exclusive to Apple devices. Jo Ling Kent int...",
            "url": "https://www.youtube.com/watch?v=BeJs0XOvFrw",
            "urlToImage": "https://i.ytimg.com/vi/BeJs0XOvFrw/maxresdefault.jpg",
            "publishedAt": "2023-12-19T03:17:37Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "S Aadeetya",
            "title": "Google Chrome Will Finally STOP Some Users From Being Tracked By Other Websites: Here’s How - News18",
            "description": "Google is ready to bring the feature that will stop online shopping sites from tracking your web activity.",
            "url": "https://www.news18.com/tech/google-chrome-will-finally-stop-some-users-from-being-tracked-by-other-websites-heres-how-8709020.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/11/google-employees-2023-11-083a13920b5e46912d812e7608d9c068-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-19T02:30:14Z",
            "content": "Google will finally end the process of using cookies which lets other websites track users. The company will bring the new rule on Chrome users to select users from Q1 2024, which now has the date of… [+1802 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Highsnobiety"
            },
            "author": null,
            "title": "Your Girlfriend's Declassified Guide to Watch Shopping Survival - Highsnobiety",
            "description": "We've cracked the code on the ultimate gifting guide to timepieces for your eternal flame—just in time for the holidays",
            "url": "https://www.highsnobiety.com/p/your-girlfriends-declassified-guide-to-watch-shopping-survival/",
            "urlToImage": "https://www.highsnobiety.com/static-assets/dato/1702493323-image-1.png",
            "publishedAt": "2023-12-18T19:27:32Z",
            "content": "Its a sign of the times (pun intended): the necklace is out, the watch is in. \r\nBlame it on the economy or blame it on the quiet luxury trend but every it-girl and whos who is dropping the décolletag… [+3982 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "DH Web Desk",
            "title": "WhatsApp Channels to get album feature to group multi-media content in one place - Deccan Herald",
            "description": null,
            "url": "https://www.deccanherald.com/technology/whatsapp-channels-to-get-album-feature-to-group-multi-media-content-in-one-place-2815930",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Fa2306b45-2a80-4ca7-91a4-03bd05917e40%2FWhatsApp_20on_20iPhone_1577780228.JPG?rect=0%2C132%2C3500%2C1838&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-18T13:28:28Z",
            "content": "In September 2023, WhatsApp introduced Channels feature allowing people to broadcast their content to their followers directly on smartphones. It was an instant hit in India.\r\nNow, the Meta-owned com… [+560 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Affiliate Desk",
            "title": "Samsung 6.5 kg front load washing machine vs other load models: Top 8 picks for you | Mint - Mint",
            "description": "This comparison guide highlights the Samsung 6.5 kg Front Load model alongside seven other top picks, showcasing a range of capacities, technologies, and design features.",
            "url": "https://www.livemint.com/technology/gadgets/samsung-6-5-kg-front-load-washing-machine-vs-other-load-models-top-8-picks-for-you-11702882228968.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/samsung_washing_machine_1702883211898_1702883220799.jpg",
            "publishedAt": "2023-12-18T12:52:49Z",
            "content": "Front-loading washing machines have always been a favourite among consumers looking for efficiency and convenience in their laundry routines. The Samsung 6.5 kg Front Load Washing Machine epitomises … [+25003 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "How to lock WhatsApp chats and protect them using secret code - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/technology/techook/how-to-lock-whatsapp-chats-and-protect-them-using-secret-code-9072920/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T12:41:39Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Gadgets 360 With TG: iQoo 12 Review - NDTV",
            "description": "We're nearly at the end of 2023 and the first Snapdragon 8 Gen 3 phone is already available in India, in the form of the iQoo 12 that was launched in the cou...",
            "url": "https://www.youtube.com/watch?v=FwkIixo6JpY",
            "urlToImage": "https://i.ytimg.com/vi/FwkIixo6JpY/maxresdefault.jpg",
            "publishedAt": "2023-12-18T12:30:10Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Newstracklive.com"
            },
            "author": "EMMANUAL",
            "title": "Poco C65: This phone is offering storage option up to 256GB at a low price, camera and battery are also great - News Track English",
            "description": "Smartphone enthusiasts have a new reason to rejoice as Poco introduces its latest gem - the Poco C65. This budget-friendly device packs a punch, especially when it comes to storage, camera capabilities, and battery life. Let's dive into the exciting features …",
            "url": "https://english.newstracklive.com/news/poco-c65-this-phone-is-offering-storage-option-up-to-256gb-at-a-low-price-camera-and-battery-are-also-great-sc71-nu371-ta371-1306153-1.html",
            "urlToImage": "https://media.newstrack.in/uploads/technology-news/technology-news/Dec/18/big_thumb/rgert_657ff34f7188c.jpg",
            "publishedAt": "2023-12-18T09:55:50Z",
            "content": "Smartphone enthusiasts have a new reason to rejoice as Poco introduces its latest gem - the Poco C65. This budget-friendly device packs a punch, especially when it comes to storage, camera capabiliti… [+3652 chars]"
          }
        ]
      },
      {
        "business": [
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Dhanya Nagasundaram",
            "title": "DOMS Share Price Live Updates: DOMS Industries share price trades choppy post robust listing; m-cap soars to ₹8,536 cr | Mint - Mint",
            "description": "DOMS Share Price Live Updates: DOMS Industries share price made a stellar debut on the bourses today. On NSE and BSE, DOMS Industries share price today was listed at  ₹1,400 per share, 77.2% higher than the issue price of  ₹790.",
            "url": "https://www.livemint.com/market/ipo/doms-share-price-live-updates-doms-industries-ipo-to-list-today-gmp-suggests-over-64-premium-11703035890814.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/DOMS_IPO_GMP_subscription_status_1702610642873_1703058332805.JPG",
            "publishedAt": "2023-12-20T08:24:10Z",
            "content": "DOMS Share Price Live Updates: The Street's looking forward to DOMS Industries IPO listing today. DOMS IPO allotment was finalised on Tuesday, December 19. DOMS Industries IPO listing time is schedul… [+17791 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Ankit Gohel",
            "title": "India Shelter Share Price Live Updates: India Shelter Finance shares fall over 9% after decent stock market debut | Mint - Mint",
            "description": "India Shelter Share Price Live Updates: India Shelter Finance shares witnessed profit booking after making a decent stock market debut. The shares were trading sharply lower after listing at a premium of 25% on NSE.",
            "url": "https://www.livemint.com/market/ipo/india-shelter-share-price-live-updates-india-shelter-ipo-listing-india-shelter-ipo-share-price-india-shelter-ipo-gmp-11703039981496.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/homeLiveMint_1703040476179_1703040476285.jpg",
            "publishedAt": "2023-12-20T06:29:21Z",
            "content": "India Shelter Share Price Live Updates: The shares of India Shelter Finance Corporation Ltd made a decent stock market debut on December 20 after the conclusion of initial public offering (IPO). Indi… [+9304 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "FXStreet"
            },
            "author": "Haresh Menghani",
            "title": "Japanese Yen sticks to modest intraday gains against USD, lacks follow-through - FXStreet",
            "description": "The Japanese Yen (JPY) weakened across the board on Tuesday after the Bank of Japan (BoJ) decided to maintain the status quo and stick to its ultra-loose monetary policy settings.",
            "url": "https://www.fxstreet.com/news/japanese-yen-remains-on-the-defensive-against-usd-amid-bojs-dovish-policy-stance-202312200140",
            "urlToImage": "https://editorial.fxstreet.com/images/Markets/Currencies/Majors/USDJPY/crumpled-us-and-japanese-currency-13375743_Large.jpg",
            "publishedAt": "2023-12-20T06:07:39Z",
            "content": "<ul><li>The Japanese Yen ticks higher and snaps a three-day losing streak against the US Dollar.</li><li>Bets for early rate cuts by the Fed weigh on the USD and act as a headwind for USD/JPY.</li><l… [+8901 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CoinDesk"
            },
            "author": "Sam Reynolds",
            "title": "BlackRock, Nasdaq, SEC Met Regarding Bitcoin ETF - CoinDesk",
            "description": "This is the second meeting in a month between the parties about rule changes required to list the bitcoin ETF.",
            "url": "https://www.coindesk.com/markets/2023/12/20/blackrock-nasdaq-sec-met-regarding-bitcoin-etf/",
            "urlToImage": "https://www.coindesk.com/resizer/cVXRqEWwDpy9uXcHfDON1bd-RNI=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ALWD5SKMINH37KIJLFM4XE3HUU.jpeg",
            "publishedAt": "2023-12-20T05:40:00Z",
            "content": "Representatives from BlackRock (BLK), Nasdaq, and the Securities and Exchange Commission (SEC) met for the second time in a month to discuss rule changes that are necessary to list the bitcoin (BTC) … [+1455 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Pranati Deva",
            "title": "Suraj Estate IPO: A look at GMP, subscription status on final day; should you buy? | Mint - Mint",
            "description": "The  ₹400 crore initial public offering (IPO) of real estate firm Suraj Estate Developers was subscribed 3.26 times by 10:55 am on the final day of bidding. It had received bids for 2.53 crore shares as against 77.77 lakh on offer.",
            "url": "https://www.livemint.com/market/ipo/suraj-estate-ipo-a-look-at-gmp-subscription-status-on-final-day-should-you-buy-11703049703063.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Suraj_Estate_IPO_GMP_subscription_status_1702811556519_1703050121944.JPG",
            "publishedAt": "2023-12-20T05:31:10Z",
            "content": "The 400 crore initial public offering (IPO) of real estate firm Suraj Estate Developers was subscribed 3.26 times by 10:55 am on the final day of bidding. It had received bids for 2.53 crore shares a… [+5699 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Business Desk",
            "title": "SpiceJet gets fresh lifeline: Mumbai-based business couple Harihara and Preeti Mahapatra to invest Rs 1,1 - IndiaTimes",
            "description": "India Business News: Harihara Mahapatra and his wife plan to invest Rs 1,100 crore in SpiceJet, acquiring a 19% stake. The funds will be utilized for various purposes such",
            "url": "https://timesofindia.indiatimes.com/business/india-business/spicejet-gets-fresh-lifeline-mumbai-based-business-couple-harihara-and-preeti-mahapatra-to-invest-rs-1100-crore/articleshow/106143431.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106143706,width-1070,height-580,imgsize-60344,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T05:30:46Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Cardekho.com"
            },
            "author": "Shreyash",
            "title": "Reserve A Kia Sonet Facelift Now, Get It In January 2024! - CarDekho",
            "description": "Customers who book the new Sonet on December 20 through K-Code will get priority delivery     Existing Kia customers can generate K-Code for booking the new Sonet.    Each K-Code is good for one booking but it is transferable to friends and family.    Kia has…",
            "url": "https://www.cardekho.com/india-car-news/reserve-a-kia-sonet-facelift-now-get-it-in-january-2024-31836.htm",
            "urlToImage": "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/31835/1703049360923/GeneralNew.jpg",
            "publishedAt": "2023-12-20T04:46:00Z",
            "content": "Customers who book the new Sonet on December 20 through K-Code will get priority delivery\r\n<ul><li>Existing Kia customers can generate K-Code for booking the new Sonet.\r\n</li><li>Each K-Code is good … [+2487 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Madhuchanda Dey",
            "title": "Have Indian IT stocks rallied way ahead of fundamentals? - Moneycontrol",
            "description": "Accenture earnings report flags the pockets of concern, going forward",
            "url": "https://www.moneycontrol.com/news/companies-2/have-indian-it-stocks-rallied-way-ahead-of-fundamentals-11930851.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/financial_services2-770x433.jpg",
            "publishedAt": "2023-12-20T04:13:42Z",
            "content": "Moneycontrol Pro Weekender: Jerome Powell and the Wizard of Oz\r\n Dec 16, 2023 / 12:47 PM IST\r\nIf Powell succeeds in steering the US economy to a soft landing, it will be a remarkable achievement, and… [+37 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "Inox India IPO allotment today: A step-by-step guide to check status online - Zee Business",
            "description": "Inox India IPO subscription status: The IPO of INOX India concluded with an overall subscription of 61.3 times, with huge participation by institutional investors.",
            "url": "https://www.zeebiz.com/markets/ipo/news-inox-india-ipo-allotment-status-check-date-today-link-bse-online-kfintech-subsciption-status-269372",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/20/273631-inox-allotment-status-check.jpg",
            "publishedAt": "2023-12-20T04:04:03Z",
            "content": "Inox India allotment status, Inox India IPO allotment date: Gujarat-headquartered cryogenic storage tank maker INOX India's initial public offer worth Rs 1,459 crore concluded with an overall subscri… [+2615 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Zoya Springwala",
            "title": "Varun Beverages’ South African acquisition sparks enthusiasm from brokerages; CLSA upgrades to ‘buy’ - Moneycontrol",
            "description": "Jefferies said that it expects VBL’s focus in South Africa to be on the Pepsico brands, which should also be margin accretive for the company.",
            "url": "https://www.moneycontrol.com/news/business/markets/varun-beverages-south-african-acquisition-sparks-enthusiasm-from-brokerages-clsa-upgrades-to-buy-11931051.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/10/acquisition-illustration-giant-handshake-feature-378x200-770x433.jpg",
            "publishedAt": "2023-12-20T04:01:42Z",
            "content": "Varun Beveragess entry into South Africa with the acquisition of South Africa-based Beverage Company (BevCo) has been met with positivity and cheer from brokerages, who offer an upside of up to 20 pe… [+3543 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "ExplainSpeaking: What explains India’s surprisingly fast GDP growth and the ongoing surge in Sensex? - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/explained/explained-economics/explainspeaking-what-explains-indias-surprisingly-fast-gdp-growth-and-the-ongoing-surge-in-sensex-9075482/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T03:57:37Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Pankaj Doval",
            "title": "Ford having a re-think on India exit? Cancels Chennai plant deal with JSW group - IndiaTimes",
            "description": "India Business News: American car company Ford cancels deal with JSW group for Chennai plant, indicating a possible change in its India exit strategy. The company had also",
            "url": "https://timesofindia.indiatimes.com/business/india-business/ford-cancels-chennai-plant-sale-deal-with-jsw-group/articleshow/106134854.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106134860,width-1070,height-580,imgsize-38636,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:50:00Z",
            "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Nippon AMC shares soar 9% after Rs 762 cr block deal; IndusInd Bank offloads entire stake - Moneycontrol",
            "description": "CNBC-TV18 had reported citing sources that IndusInd Bank was looking to offload its entire 2.86 percent stake in the asset management company through a block deal.",
            "url": "https://www.moneycontrol.com/news/business/markets/nippon-amc-block-deal-equity-worth-rs-762-cr-changes-hands-as-indusind-bank-offloads-entire-stake-11930681.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/04/Deal-770x433.png",
            "publishedAt": "2023-12-20T03:46:05Z",
            "content": "Shares of Nippon Life Asset Management Company soared around 9 percent in opening trade and hit a 52-week high of Rs 489 on December 20 after a block deal worth Rs 762 crore took place on the exchang… [+1320 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Astral block deal sees 1.8% stake change hands for Rs 885 cr; promoters likely sellers - Moneycontrol",
            "description": "According to the latest available data, the promoter currently held a 55.85 percent stake in Astral.",
            "url": "https://www.moneycontrol.com/news/business/markets/astral-block-deal-sees-1-8-stake-change-hands-for-rs-885-cr-promoters-likely-sellers-11930761.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/07/Astral-770x433.jpg",
            "publishedAt": "2023-12-20T03:35:53Z",
            "content": "Around 1.76 percent Astral shares changed hands in a block deal on December 20, for a total consideration of Rs 884.6 crore. The promoters are the likely sellers, according to a CNBC-TV18 report.\r\nA … [+1716 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Sahil Kukreja",
            "title": "Tata Punch EV launch details confirmed: Here's when Citroen eC3 rival arrives - IndiaTimes",
            "description": "Electric Car News: As per our sources, the Tata Punch EV (stylized as Punch.ev) will make a full debut in the country in the last week of January 2024, followed by a lau",
            "url": "https://timesofindia.indiatimes.com/auto/electric-cars/tata-punch-ev-launch-details-confirmed-heres-when-citroen-ec3-rival-arrives/articleshow/106138983.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106140569,width-1070,height-580,imgsize-515538,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:34:04Z",
            "content": "Mahindra Thar vs Maruti Suzuki Jimny: Price, features, engine, specifications compared"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Dhanya Nagasundaram",
            "title": "Azad Engineering IPO opens today: GMP, subscription status, dates, review, other key details. Apply or not? | Mint - Mint",
            "description": "Azad Engineering IPO subscription to open on December 20 and close on December 22. Raised  ₹221 crore from anchor investors at upper price band of  ₹524 per share.",
            "url": "https://www.livemint.com/market/ipo/azad-engineering-ipo-opens-today-gmp-subscription-status-dates-review-other-key-details-apply-or-not-11703040267684.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/azad_1703042529358_1703042537768.png",
            "publishedAt": "2023-12-20T03:25:29Z",
            "content": "Azad Engineering IPO date of subscription is scheduled to open Wednesday, December 20, and will close on Friday, December 22. Azad Engineering IPO raised 221 crore from 20 anchor investors at the upp… [+5218 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "HCLTech faces ransomware incident in cloud project | Mint - Mint",
            "description": "HCLTech said there is no impact observed on the overall network due to the ransomware incident",
            "url": "https://www.livemint.com/companies/news/hcltech-faces-ransomware-incident-in-cloud-project-11703039989337.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/ransomware_HCLTech_1703040138974_1703040139081.jpg",
            "publishedAt": "2023-12-20T02:47:26Z",
            "content": "Major IT sector player HCLTech has faced a ransomware incident in an isolated cloud environment for one of HCLTechs projects, CNBC-TV18 reported. The company has further told the channel that there w… [+1652 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Jomy Jos Pullokaran",
            "title": "Stocks to Watch: Embassy REIT, Nippon AMC, Varun Beverages, Astral, BPCL and more - CNBCTV18",
            "description": "Stocks to watch: From Embassy REIT, Nippon AMC, Varun Beverages, Astral to BPCL and more, here are the top stocks to track in the trading session of December 20.",
            "url": "https://www.cnbctv18.com/photos/market/stocks/stocks-to-watch-varun-beverages-deepak-nitrite-glenmark-astral-bpcl-and-more-18606231.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2021/08/market-rally-1019x573.jpg",
            "publishedAt": "2023-12-20T01:52:25Z",
            "content": "Embassy REIT | Global private equity giant Blackstone Group is likely to sell a substantial 23.5% stake in the country's first publicly listed real estate investment trust through a block deal schedu… [+2918 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Sangeeta Ojha",
            "title": "Sovereign Gold Bond 2023-24 series 3: How to buy SGB from banks, post offices, stock exchanges. Step-by-step guide | Mint - Mint",
            "description": "The third tranche of the Sovereign Gold Bond scheme is open for subscription till December 22, with an issue price of  ₹6,199 per gram",
            "url": "https://www.livemint.com/money/personal-finance/sovereign-gold-bond-2023-24-series-3-how-to-buy-sgb-from-banks-post-offices-stock-exchanges-step-by-step-guide-11703032611893.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/SGB_series_3_1703036219810_1703036219951.jpg",
            "publishedAt": "2023-12-20T01:39:26Z",
            "content": "The third tranche of the Sovereign Gold Bond scheme - SGB 2023-24 Series III opened for subscription on December 18, and will remain available till December 22. The Reserve Bank of India (RBI) has fi… [+2567 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Zaheer Merchant",
            "title": "Stocks to Watch: JK Tyre, Deepak Nitrite, Religare, BPCL | Mint - Mint",
            "description": "Here are some stocks to watch out for ahead of Wednesday’s trading session",
            "url": "https://www.livemint.com/market/stock-market-news/stocks-to-watch-jk-tyre-deepak-nitrite-religare-bpcl-11703034594176.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/2-0-1402373409-bse--1---1--0_1679756950206_1703034749364.jpg",
            "publishedAt": "2023-12-20T01:15:32Z",
            "content": "JK Tyre: The company has launched a QIP to raise funds. The floor price of 358.96 is a 5.2% discount to Tuesday's closing price. The company may offer a 5% discount on the floor price at its discreti… [+2362 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "F&O ban list: IRCTC, ZEEL, Delta Corp, Piramal Enterprises, 6 other shares placed under futures and options ban toda | Mint - Mint",
            "description": "F&O ban list: Balrampur Chini Mills, Delta Corp, Manappuram Finance, National Aluminium Company, RBL Bank, SAIL, and ZEEL are the other 7 stocks that are a part of the F&O ban",
            "url": "https://www.livemint.com/market/stock-market-news/fo-ban-list-irctc-zeel-delta-corp-piramal-enterprises-6-other-shares-placed-under-futures-and-options-ban-toda-11703003806959.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/nse_1703004156409_1703004156705.jpg",
            "publishedAt": "2023-12-20T01:14:03Z",
            "content": "F&amp;O ban list: A total of ten stocks have been put under the ban for trade on Wednesday, December 20, 2023, under the futures and options (F&amp;O) segment by the National Stock Exchange (NSE). Th… [+2411 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "Buy or sell: Vaishali Parekh recommends three stocks to buy today — December 20 | Mint - Mint",
            "description": "Buy or sell stocks: Vaishali Parekh has recommended three stocks to buy today — GRSE, BLS and Castrol India",
            "url": "https://www.livemint.com/market/stock-market-news/buy-or-sell-vaishali-parekh-recommends-three-stocks-to-buy-today-december-20-11703004679997.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/Buy_or_sell_stocks_to_buy_today_stock_market_today_1698023021624_1703004750052.jpg",
            "publishedAt": "2023-12-20T00:33:17Z",
            "content": "Buy or sell stocks for today: After weak opening during morning deals, Indian stock market recovered from early losses and ended marginally higher on Tuesday. Nifty 50 index gained 34 points and ende… [+2912 chars]"
          },
          {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Cash rules in India despite digital payment boom - BBC",
            "description": "Seven years later, cash continues to hold ground, casting renewed doubt on a controversial currency ban.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-67674453",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2D6C/production/_132082611_gettyimages-1209160360-594x594.jpg",
            "publishedAt": "2023-12-19T22:23:38Z",
            "content": "In November 2016 India abruptly scrapped two banknotes constituting 86% of all currency in circulation, in a move aimed at combating corruption and curbing undeclared wealth.\r\nDemonetisation - as the… [+5540 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "RBI junks IMF claim of bank's excessive forex intervention - IndiaTimes",
            "description": "India Business News: The IMF criticizes the Reserve Bank of India's intervention in the foreign exchange market, but the central bank dismisses the charge. The IMF's repor",
            "url": "https://timesofindia.indiatimes.com/business/india-business/rbi-junks-imf-claim-of-banks-excessive-forex-intervention/articleshow/106134978.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106135114,width-1070,height-580,imgsize-46008,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T21:26:08Z",
            "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "US bankruptcy filing: Ebix's India business may change hands - IndiaTimes",
            "description": "India News: EbixCash may undergo ownership change as its parent company, Ebix Inc, filed for bankruptcy under Chapter 11. However, EbixCash's operations in India",
            "url": "https://timesofindia.indiatimes.com/india/us-bankruptcy-filing-ebixs-india-business-may-change-hands/articleshow/106134843.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106134851,width-1070,height-580,imgsize-51410,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T20:19:43Z",
            "content": "10 benefits of jogging in winter season"
          },
          {
            "source": {
              "id": null,
              "name": "DailyFX"
            },
            "author": "Zain Vawda",
            "title": "Gold Price Forecast: Bulls Seize Control on Growing Safe Haven Appeal, $2050 Up Next - DailyFX",
            "description": "Gold enjoyed a rally toward the $2050/Oz mark before facing some selling pressure as Fed rate cut expectations continue to sway back and forth. PCE data later in the week could prove key to where Gold prices end the week.",
            "url": "https://www.dailyfx.com/news/gold-price-forecast-bulls-seize-control-on-growing-safe-haven-appeal-2050-up-next-20231219.html",
            "urlToImage": "https://a.c-dn.net/b/4rSCcW/GettyImages-104711927+resized.jpg",
            "publishedAt": "2023-12-19T20:00:47Z",
            "content": "GOLD (XAU/USD) PRICE FORECAST:\r\nMOST READ: AUD/USD Price Forecast: Channel Breakout to Keep Bulls in Control?\r\nGold prices found its legs in the US session rising back above resistance at the $2040/o… [+3703 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Masimo CEO Addresses Smartwatch Patent Dispute With Apple - Bloomberg Technology",
            "description": "Masimo CEO Joe Kiani says Apple should apologize for copying his company's patented technology for measuring blood-oxygen levels in Apple's smartwatches. A U...",
            "url": "https://www.youtube.com/watch?v=RR1o8EoW-Eg",
            "urlToImage": "https://i.ytimg.com/vi/RR1o8EoW-Eg/maxresdefault.jpg",
            "publishedAt": "2023-12-19T19:45:38Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Alka Jain",
            "title": "Startup recap from Union Budget 2023: What entrepreneurs expect from FM Sitharaman's interim Budget 2024? | Mint - Mint",
            "description": "India has emerged as the third largest ecosystem for startups globally with over 116,679 recognized ventures across the country. However, startup funding in India has declined to a five-year low figure in 2023.",
            "url": "https://www.livemint.com/companies/start-ups/startup-recap-from-union-budget-2023-what-entrepreneurs-expect-from-fm-sitharamans-interim-budget-2024-11702971437093.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/startups_1703010465200_1703010465393.jpg",
            "publishedAt": "2023-12-19T18:38:58Z",
            "content": "From job seekers to job providers, Indians are shifting towards entrepreneurship. With the new age of tech-driven businesses monikered as startups, young minds come together and manifest how creativi… [+6304 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Shouvik Das",
            "title": "ONDC partners with Google, Meta to reach small businesses | Mint - Mint",
            "description": "The move will help the service scale up its net transactions per month among consumers and large enterprises alike",
            "url": "https://www.livemint.com/industry/infotech/ondc-partners-with-google-meta-to-reach-small-businesses-11703009950107.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/Thampy_Koshy_pti_1703010111283_1703010118975.jpg",
            "publishedAt": "2023-12-19T18:23:25Z",
            "content": "Ministry of commerce-backed e-commerce protocol Open Network for Digital Commerce (ONDC) on Tuesday announced two separate partnerships with Google and Meta, to expand its outreach to small businesse… [+3090 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Mayur Bhalerao, Sneha Shah",
            "title": "Blackstone to exit Embassy Reit in $833mn block deal | Mint - Mint",
            "description": "The deal has a floor price of  ₹310 per share, representing a discount of approximately 7.7% compared to Embassy Office Parks' Tuesday closing price.",
            "url": "https://www.livemint.com/companies/news/blackstone-to-exit-embassy-reit-in-833mn-block-deal-11703008640475.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/blackstone_reaches_1_trillion_dollars_assets_1689854145217_1703008729097.JPG",
            "publishedAt": "2023-12-19T17:59:55Z",
            "content": "Mumbai: Global private equity giant Blackstone is set to offload its entire 23.59% stake in Embassy Office Parks Reit for an estimated 6,931.5 crore, or $833 million, through a block deal on Wednesda… [+2280 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Suneera Tandon",
            "title": "Domino’s gets brand refresh in India | Mint - Mint",
            "description": "The new re-branding is already in the works, said Sameer Khetarpal, managing director and chief executive officer of Jubilant FoodWorks Ltd.",
            "url": "https://www.livemint.com/companies/news/dominos-gets-brand-refresh-in-india-11703007637666.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/3-0-92375963-dominos1-0_1679790022852_1703007760107.JPG",
            "publishedAt": "2023-12-19T17:46:00Z",
            "content": "NEW DELHI : Jubilant FoodWorks Ltd, which operates master franchise rights from Dominos Pizza in India, has announced a brand refresh for its flagship pizza brand that involves upgrading hundreds of … [+4670 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "HDFC Sec sees 8-10% upside for Nifty next year, says mid & smallcap rally not over yet - Moneycontrol",
            "description": "The brokerage house also said that the market movement will not be linear, especially in the first half of 2024. This is because the bond market is expecting interest rate cuts in Feb-March, much sooner than what Federal Reserve indicated.",
            "url": "https://www.moneycontrol.com/news/business/markets/hdfc-sec-sees-8-10-upside-for-nifty-next-year-says-mid-smallcap-rally-not-over-yet-11929271.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Nifty_sensex_marketup-8-770x433.jpg",
            "publishedAt": "2023-12-19T17:07:09Z",
            "content": "Domestic broking firm HDFC Securities believes rich index valuations leave little room for any upside next year and thus did not spell out any definite Nifty target. According to the firm, Nifty coul… [+2756 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "PTI",
            "title": "India tops global remittance flows at $125 billion in 2023: World Bank - Deccan Herald",
            "description": "New Delhi, Dec 19 (PTI) India saw the highest amount of remittance inflows in the world in 2023 at USD 125 billion, driven by several factors, including the country's agreement with the UAE, for promoting the use of dirhams and rupees for bilateral trade, the…",
            "url": "https://www.deccanherald.com/business/economy/india-tops-remittance-flows-at-125-billion-in-2023-world-bank-2817888",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2F64bdcc75-14bd-4505-917d-12e0efccec30%2FiStock_1063988616.jpg?rect=0%2C0%2C1256%2C659&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-19T16:56:58Z",
            "content": "On India, the World Bank said the main contributing factors are declining inflation and strong labour markets in high-income source countries, which boosted remittances from highly skilled Indians in… [+117 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "Devangshu Datta",
            "title": "High valuations may cap further rally in IRCTC stock despite good revenue - Business Standard",
            "description": "IRCTC Shares: At trailing PE of 65x it seems to fully discount future growth and visibility of good revenue streams",
            "url": "https://www.business-standard.com/companies/news/high-valuations-may-cap-further-rally-in-irctc-stock-despite-good-revenue-123121901080_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-04/02/full/1617302776-0135.jpg",
            "publishedAt": "2023-12-19T16:25:08Z",
            "content": "At trailing PE of 65x it seems to fully discount future growth and visibility of good revenue streams\r\nDevangshu Datta\r\nInvestor interest in IRCTC (Indian Railway Catering and Tourism Corporation) ha… [+702 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Hormaz Fatakia",
            "title": "Trade Setup for December 20: Nifty 50 looks for support besides Reliance to cross 21,500 - CNBCTV18",
            "description": "Barring Reliance Industries, no index heavyweight stepped up to ensure that the Nifty 50 index sustained above the 21,500 level.",
            "url": "https://www.cnbctv18.com/market/trade-setup-dec-20-nifty-key-levels-nifty-bank-expiry-varun-bev-nippon-amc-embassy-shares-18604701.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/05/TRADE_SETUP_BG-1019x573.jpg",
            "publishedAt": "2023-12-19T16:10:23Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Dsij.in"
            },
            "author": "Kiran Shroff",
            "title": "52-week high alert: Don't miss action in this high ROE & ROCE multibagger stock as it announces stock split; scrip gains over 5 per cent! - Dalal Street Investment Journal",
            "description": "The stock gave multibagger returns of 135 per cent in 5 years and over 380 per cent in a decade.",
            "url": "https://www.dsij.in/dsijarticledetail/52-week-high-alert-dont-miss-action-in-this-high-roe-roce-multibagger-stock-as-it-announces-stock-split-scrip-gains-over-5-per-cent",
            "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/35333/Image_586.jpg",
            "publishedAt": "2023-12-19T15:40:47Z",
            "content": "The stock gave multibagger returns of 135 per cent in 5 years and over 380 per cent in a decade.\r\nDecember 19, 2023, marked a triumphant day for Indian investors, as both Sensex and Nifty soared to n… [+2305 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Arti Singh",
            "title": "RBI lifts ban on Razorpay, Cashfree; allows onboarding new merchants | Mint - Mint",
            "description": "Last year, the central bank asked Razorpay, Cashfree, PayU, and Paytm, which hold in-principal approvals for payment aggregator licence, to stop on-boarding new merchants till they get the final licence.",
            "url": "https://www.livemint.com/news/rbi-lifts-ban-on-razorpay-cashfree-allows-onboarding-new-merchants-11702996915800.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/Reserve_bank_of_india_1698115196393_1702997915666.JPG",
            "publishedAt": "2023-12-19T14:52:07Z",
            "content": "The Reserve Bank of India (RBI) has lifted ban on payment aggregators Razorpay and Cashfree after almost a year.  The RBIs authorization will enable the payment companies to onboard new merchants ont… [+2391 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "RBI tightens rules for banks, NBFCs' investments in AIFs - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/rbi-tightens-rules-for-banks-nbfcs-investments-in-aifs-3943706",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/d47aeccd8f3f6670e13fec38c3578258_w_800_h_450.jpg",
            "publishedAt": "2023-12-19T14:45:47Z",
            "content": "Mumbai, Dec 19 (IANS) The RBI on Tuesday barred regulated entities (REs) such as banks and non-banking finance companies (NBFCs), from investing in any scheme of alternative investment funds (AIFs) w… [+1105 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Vaishnawi Sinha",
            "title": "Over ₹42k crore of unclaimed deposits in Indian banks, amount rose by 28% - Hindustan Times",
            "description": "The rate of unclaimed deposits in Indian banks has risen by 28% in this financial year, with the amount now totaling up to ₹42,270 crore.",
            "url": "https://www.hindustantimes.com/business/over-rs-42k-crore-of-unclaimed-deposits-in-indian-banks-amount-rises-by-28-in-2023-101702994236230.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/money_1702994379363_1702994379605.jpg",
            "publishedAt": "2023-12-19T14:25:34Z",
            "content": "With the Winter Session currently underway, the Parliament was informed on Tuesday that there has been a 28 per cent annual increase in unclaimed deposits with the banks to 42,270 crore in the last f… [+1824 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Deepak Upadhyay",
            "title": "RBI imposes monetary penalty on five co-operative banks. Details here | Mint - Mint",
            "description": "The RBI imposed monetary penalties on five cooperative banks for deficiencies in regulatory compliance. These cooperative banks are: The Manmandir Co-operative Bank, The Lakhvad Nagarik Sahakari Bank, Contai Co-operative Bank Ltd, Sarvodaya Co-operative Bank …",
            "url": "https://www.livemint.com/industry/banking/rbi-imposes-monetary-penalty-on-five-co-operative-banks-details-here-11702989588638.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/RBI_1691348380545_1702989966559.jpg",
            "publishedAt": "2023-12-19T12:50:52Z",
            "content": "The Reserve Bank of India (RBI) has imposed monetary penalties on five cooperative banks for deficiencies in regulatory compliance. These co-operative banks are: The Manmandir Co-operative Bank Ltd, … [+3492 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Vaamanaa Sethi",
            "title": "IDFC First Bank shares rise 3% after RBI clears merger with IDFC Fin Holding; Should you buy? | Mint - Mint",
            "description": "Over the last month, the stock of this private sector lender has shown a growth of over 6 percent, slightly trailing the 8 percent rise in the benchmark Sensex",
            "url": "https://www.livemint.com/market/stock-market-news/idfc-first-bank-shares-rise-3-after-rbi-clears-merger-with-idfc-fin-holding-should-you-buy-11702989071685.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/IDFC_First_Bank_1569238000074_1702989423619.jpg",
            "publishedAt": "2023-12-19T12:37:30Z",
            "content": "IDFC First Bank's shares rose over 3 percent, reaching a day's high of 92.33 per share on December 19, following the Reserve Bank of India's (RBI) approval of the merger between IDFC and IDFC Financi… [+2258 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ndtvprofit.com"
            },
            "author": "Tushar Deep Singh",
            "title": "Accenture Q1 Results: Revenue Misses Estimates, FY24 Guidance Maintained - NDTV Profit",
            "description": "Accenture’s revenue rose 3% YoY to $16.22 billion in the first quarter ended November. It expects its top-line to grow at 2-5% in FY24, but sees its second quarter growth at -2% to 2%.",
            "url": "https://www.ndtvprofit.com/quarterly-earnings/accenture-q1-results-revenue-misses-estimates-but-fy24-guidance-maintained",
            "urlToImage": "https://media.assettype.com/bloombergquint%2F2022-06%2Fffc56f64-b91f-4f58-af89-ad9613d4715e%2FAccenture.jpeg?rect=0%2C17%2C1200%2C630&w=1200&auto=format%2Ccompress&ogImage=true",
            "publishedAt": "2023-12-19T12:23:30Z",
            "content": "Accenture Plc has maintained its revenue growth guidance for the fiscal ending August 2024 but warned of near-term pain, even as its first quarter earnings missed analyst estimates.\r\nRevenue of the w… [+1784 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Dhanya Nagasundaram",
            "title": "Motisons Jewellers IPO: Issue subscribed 51.50 times on day 2; NIIs, retail portion sees huge interest | Mint - Mint",
            "description": "Motisons Jewellers IPO subscription status maintained momentum on day two, with incredible response from both retail and non-institutional investors. Subscription was 51.50 times at the end of day 2.",
            "url": "https://www.livemint.com/market/ipo/motisons-jewellers-ipo-issue-subscribed-51-50-times-on-day-2-niis-retail-portion-sees-huge-interest-11702986650345.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/Motisons_Jewellers_IPO_GMP_subscription_status_1702863681835_1702987873587.JPG",
            "publishedAt": "2023-12-19T12:23:04Z",
            "content": "Motisons IPO subscription status: Motisons Jewellers IPO maintained its momentum on day two, with some blockbuster subscription numbers, with some incredible responses from both retail and non-instit… [+4951 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Muthoot Microfin IPO subscribed 2.83 times, retail portion bought 4 times on Day 2 - Moneycontrol",
            "description": "The Kochi-based microfinance institution recorded a 246 percent on-year growth in net profit at Rs 163.9 crore for the year ended March 2023 and revenue during the same period increased by 71.6 percent to Rs 1,428.8 crore.",
            "url": "https://www.moneycontrol.com/news/business/ipo/muthoot-microfin-ipo-sees-100-booking-retail-portion-bought-1-69-times-on-day-2-11925101.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/02/395910003-770x433.jpg",
            "publishedAt": "2023-12-19T12:20:20Z",
            "content": "Muthoot Microfin IPO was subscribed 2.83 times on December 19, with bids coming in for 6.89 crore shares against the issue size of 2.43 crore shares.\r\nRetail investors bought 4.05 times the allotted … [+2357 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "NTPC market cap now ₹3 trillion, joins Reliance, TCS in big league - Hindustan Times",
            "description": "The shares of NTPC were being traded in green at ₹309.80 at closure, a surge of nearly 3 per cent over the previous day's closure.",
            "url": "https://www.hindustantimes.com/business/ntpc-market-cap-now-rs-3-trillion-joins-reliance-tcs-in-big-league-101702985853710.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/NTPC_Barh_power_plant_1702986631969_1702986632178.jpg",
            "publishedAt": "2023-12-19T12:10:16Z",
            "content": "National Thermal Power Corporation (NTPC), the state-owned power generation company, joined the top league of firms having a market cap over 3 trillion after its stock hit a new all-time high of 312.… [+1753 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Vaamanaa Sethi",
            "title": "FirstCry IPO: Ecommerce platform all set to file draft papers to raise over $600 million, says report | Mint - Mint",
            "description": "FirstCry is poised to become the second Indian vertical e-commerce platform to undergo an initial public offering (IPO), following Nykaa's IPO in 2021.",
            "url": "https://www.livemint.com/market/ipo/firstcry-ipo-ecommerce-platform-all-set-to-file-draft-papers-to-raise-over-600-million-11702985163083.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/FirstCry_1702985470900_1702985471071.jpg",
            "publishedAt": "2023-12-19T11:32:02Z",
            "content": "Omnichannel retailer FirstCry is now poised to submit its draft IPO papers in the coming days after having postponed its public listing in the previous year due to volatile market conditions, accordi… [+2596 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Jagmeet Singh",
            "title": "Google Maps pushes updates to enhance user experience in India - TechCrunch",
            "description": "Google Tuesday introduced a range of new features and updates for its mapping service in India as it wraps up for the year and sets the base for the Google has launched Lens in Maps, Live View walking navigation and fuel-efficient routing, among other new fea…",
            "url": "https://techcrunch.com/2023/12/19/google-maps-india-updates-live-street-view-navigation/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/google-maps-getty.jpg?w=1200",
            "publishedAt": "2023-12-19T10:58:45Z",
            "content": "Google Tuesday introduced a range of new features and updates for its mapping service in India as it wraps up for the year and sets the base for the coming year.\r\nOne of the latest in the series of n… [+3518 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "ET HealthWorld",
            "title": "JB Pharma inks Rs 1,089 cr pacts with Novartis for select ophthalmology brands - ETHealthWorld",
            "description": "JB Chemicals & Pharmaceuticals Ltd (JB Pharma)on Tuesday said it has inked a trade mark licence agreement along with promotion and distribution pact with Novartis for select ophthalmology brands entailing a total sum of Rs 1,089 crore.",
            "url": "https://health.economictimes.indiatimes.com/news/pharma/pharma-industry/jb-pharma-inks-rs-1089-cr-pacts-with-novartis-for-select-ophthalmology-brands/106124268",
            "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-106124268,imgsize-148473,width-1200,height=765,overlay-ethealth/pharma/pharma-industry/jb-pharma-inks-rs-1089-cr-pacts-with-novartis-for-select-ophthalmology-brands.jpg",
            "publishedAt": "2023-12-19T10:54:06Z",
            "content": "New Delhi:\r\nJB Chemicals &amp; Pharmaceuticals Ltd (JB Pharma)on Tuesday said it has inked a trade mark licence agreement along with promotion and distribution pact with Novartis for select ophthalmo… [+1995 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "S.N.Thyagarajan",
            "title": "Delhi HC directs SpiceJet to pay $450,000 to two engine lessors by January 3 - Moneycontrol",
            "description": "The lessor, Team France 01 SAS and Sunbird France 02 SAS moved a suit alleging that the airline has not paid them a sum of $12.9 million for a over two years. They furthermore asked the court to restrain the airline from using their three engines despite the …",
            "url": "https://www.moneycontrol.com/news/trends/legal/delhi-hc-directs-spicejet-to-pay-450000-to-two-engine-lessors-by-january-3-11927251.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/02/SpiceJet-2-770x433.jpg",
            "publishedAt": "2023-12-19T10:21:59Z",
            "content": "In a setback for SpiceJet, the Delhi High Court on December 19 directed low-cost airline SpiceJet to pay $450,000 by January 3 against its dues to two engine lessors.\r\nThe amount is to be paid in ins… [+2212 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "MintGenie Team",
            "title": "For those keen to become accredited investors, Sebi simplifies the process. Details here | Mint - Mint",
            "description": "Sebi has recently streamlined the process of granting accreditation to investors. The circular states that the accreditation agencies will give their approval only on the basis of KYC and the financial information of applicants.",
            "url": "https://www.livemint.com/money/personal-finance/for-those-keen-to-become-accredited-investors-sebi-simplifies-the-process-details-here-11702978048159.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/couple_investment__1702978190522_1702978203504.jpg",
            "publishedAt": "2023-12-19T10:00:23Z",
            "content": "Capital markets regulator Securities Exchange Board of India (Sebi) has simplified the requirements for grant of accreditation to investors by releasing a circular that can be accessed here. For the … [+2603 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Business Desk",
            "title": "Savitri Jindal, India’s richest woman, sees staggering $9.6 billion increase in wealth; beats Ambani & Ad - IndiaTimes",
            "description": "India Business News: Savitri Jindal, the richest woman in India, has seen her wealth grow by $9.6 billion in 2023, surpassing the Ambani and Birla families. Mukesh Ambani",
            "url": "https://timesofindia.indiatimes.com/business/india-business/savitri-jindal-indias-richest-woman-sees-staggering-9-6-billion-increase-in-wealth-beats-ambani-adani/articleshow/106120128.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106121760,width-1070,height-580,imgsize-55928,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T09:45:58Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Tradebrains.in"
            },
            "author": "Trade Brains",
            "title": "Steel stock jumps 4% after company announces to raise ₹ 1310 Cr for expansion - Trade Brains",
            "description": "Small-cap stock engaged in manufacturing and supplying steel tubes, pipes, and allied products jumped 4 percent in the day’s trade after it announced a mega capacity augmentation project for Rs. 1,310 Crores.",
            "url": "https://tradebrains.in/features/steel-stock-jumps-4-after-company-announces-to-raise-1310-cr-for-expansion/",
            "urlToImage": "https://tradebrains.in/features/wp-content/uploads/2022/02/Steel-1-Cover-Image.jpg",
            "publishedAt": "2023-12-19T09:44:00Z",
            "content": "Small-cap stock engaged in manufacturing and supplying steel tubes, pipes, and allied products jumped 4 percent in the days trade after it announced a mega capacity augmentation project for Rs. 1,310… [+2337 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Pranati Deva",
            "title": "RBZ Jewellers' ₹100 cr IPO opens today: Key things to know before subscribing | Mint - Mint",
            "description": "The  ₹100 crore initial public offer (IPO) of RBZ Jewellers opened for subscription today, December 19, 2023, and will end on December 21. The company has set a price band of  ₹95-100 per share for the issue. Here are the key things to know about the issue be…",
            "url": "https://www.livemint.com/market/ipo/rbz-jewellers-rs-100-cr-ipo-opens-today-key-things-to-know-before-subscribing-11702975713256.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/jewellery2-kO0F--621x414LiveMint_1702977982894_1702977983051.JPG",
            "publishedAt": "2023-12-19T09:27:23Z",
            "content": "The 100 crore initial public offer (IPO) of RBZ Jewellers opened for subscription today, December 19, 2023, and will end on December 21. The company has set a price band of 95-100 per share for the i… [+5213 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Sunil Shankar Matkar",
            "title": "Mufti Menswear IPO opens: Bennett Coleman sells over 4% stake in Credo Brands - Moneycontrol",
            "description": "Mufti Menswear IPO: BCCL has sold 25.36 lakh equity shares to ACM Global Fund VCC and 3.6 lakh equity shares to Negen Capital Services at the upper price band",
            "url": "https://www.moneycontrol.com/news/business/ipo/mufti-menswear-ipo-opens-bennett-coleman-sells-over-4-stake-in-credo-brands-to-negen-capital-acm-global-fund-11927041.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/11/mufti-770x433.jpg",
            "publishedAt": "2023-12-19T09:18:09Z",
            "content": "Bennett Coleman and Co (BCCL) offloaded more than a 4 percent equity stake in Credo Brands Marketing, the owner of Mufti Menswear, for more than Rs 81 crore a few days before the company opened its I… [+3702 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "SpiceJet shares hit 52-week high following this big acquisition ‘interest’ - Hindustan Times",
            "description": "The shares of SpiceJet hit a 52-week high of ₹69.20 following the plans to acquire GoFirst.",
            "url": "https://www.hindustantimes.com/business/spicejet-shares-hit-52-week-high-following-this-big-acquisition-announcement-101702973179370.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/SpiceJet_1702974467276_1702974467486.jpg",
            "publishedAt": "2023-12-19T08:31:53Z",
            "content": "Private carrier SpiceJet on Tuesday expressed its interest to acquire GoFirst and is planning to submit its offer after carrying out due diligence of the bankrupt airline. The shares of SpiceJet have… [+1899 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Manish M. Suvarna",
            "title": "Bank of Baroda, NABARD, IREDA to float Rs 14,500-cr bonds on Dec 20 - Moneycontrol",
            "description": "Market sources also said that on December 21, National Bank for Financing Infrastructure and Development (NaBFID) will also issue bonds worth Rs 10,000 crore.",
            "url": "https://www.moneycontrol.com/news/business/bank-of-baroda-nabard-ireda-to-float-rs-14500-cr-bonds-on-dec-20-11926341.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/10/bonds-mc-770x433.jpg",
            "publishedAt": "2023-12-19T07:43:46Z",
            "content": "Bank of Baroda, National Bank for Agriculture and Rural Development (NABARD), and the Indian Renewable Energy Development Agency (IREDA) will float bonds aggregating to Rs 14,500 crore on December 20… [+2130 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Sucheta Anchaliya",
            "title": "L&T poised to move towards Rs 3,800 after trendline breakout - Moneycontrol",
            "description": "L&amp;T is forming higher peaks and higher troughs on the weekly chart, indicating a sustained positive trend",
            "url": "https://www.moneycontrol.com/news/business/markets/lt-poised-to-move-towards-rs-3600-after-trendline-breakout-11925621.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/08/Larsen-Toubro_LT-770x433.jpg",
            "publishedAt": "2023-12-19T07:29:33Z",
            "content": "The Larsen and Toubro (L&amp;T) stock is exhibiting a breakout on the monthly chart, forming higher tops and higher bottoms. Analysts expect the stock to move to Rs 3,800 in the next month and to Rs … [+2446 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Kanishka Sarkar",
            "title": "RIL share price | Why the target price on the Reliance stock is rising - CNBCTV18",
            "description": "Reliance share price: UBS, with a buy rating, has raised the target price on RIL shares to ₹3,000, which means it expects the stock to see a rally of more than 19%.",
            "url": "https://www.cnbctv18.com/market/reliance-share-price-premiumisation-consumer-biz-in-focus-ubs-raises-target-price-18599051.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/10/ril-1-1019x573.jpg",
            "publishedAt": "2023-12-19T06:55:22Z",
            "content": "Note To ReadersDisclosure: Network18, the parent company of CNBCTV18.com, is controlled by Independent Media Trust, of which Reliance Industries is the sole beneficiary."
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Business Desk",
            "title": "Gold, silver price today, December 19, 2023: Precious metals witness dip on MCX - India Today",
            "description": "Gold Price Today 19 December 2023: Both gold and silver were trading on the lower side of the Multi Commodity Exchange (MCX) on Tuesday, December 19, 2023. Check the latest city-wise prices here.",
            "url": "https://www.indiatoday.in/business/story/gold-silver-prices-today-december-19-precious-metals-dip-mcx-rates-2475505-2023-12-19",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/gold-silver-price-forecast-085746893-16x9.jpeg?VersionId=l1Io0FItPNLsiypyGj80GXcZQaCdLo7I",
            "publishedAt": "2023-12-19T06:52:40Z",
            "content": "For the second day in a row, both gold and silver prices recorded a dip on the Multi Commodity Exchange (MCX) on Tuesday, December 19, 2023.\r\nRecording a marginal dip of Rs 185 or 0.30 per cent, gold… [+995 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tradebrains.in"
            },
            "author": "Trade Brains",
            "title": "Tyre stock jumps up to 7% after FPI sold 1.88 Cr shares in company through block deal - Trade Brains",
            "description": "On Tuesday the share price of the company rose 7 percent and hit its 52-week high of Rs 485 from its previous close of Rs 453.05 after the company stake was sold by foreign portfolio investors through a block deal.",
            "url": "https://tradebrains.in/features/tyre-stock-jumps-up-to-7-after-fpi-sold-1-88-cr-shares-in-company-through-block-deal/",
            "urlToImage": "https://tradebrains.in/features/wp-content/uploads/2022/05/Birla-Tyres-Cover-Image.jpg",
            "publishedAt": "2023-12-19T06:37:00Z",
            "content": "On Tuesday the share price of the company rose 7 percent and hit its 52-week high of Rs 485 from its previous close of Rs 453.05 after the company stake was sold by foreign portfolio investors throug… [+2331 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "Only 45% job seekers employable in Indian IT-tech sector amid skill crunch - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/only-45-job-seekers-employable-in-indian-ittech-sector-amid-skill-crunch-3943180",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/d224dff39dfa710fa660ba03b753c048_w_800_h_450.jpg",
            "publishedAt": "2023-12-19T06:18:06Z",
            "content": "New Delhi, Dec 19 (IANS) With the widening skill gap in the Indian IT industry, only 45 per cent of job-seeking graduates seem employable and 1.55 lakh freshers are likely to be recruited in the IT/t… [+1640 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Lovisha Darad",
            "title": "Sensex, Nifty extend muted moves, analysts see consolidation 'desirable' for markets - Moneycontrol",
            "description": "Market consensus rested on the fact that sideways trading would continue for the next couple of days",
            "url": "https://www.moneycontrol.com/news/business/markets/sensex-nifty-extend-muted-moves-analysts-see-consolidation-desirable-for-markets-11924821.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/sensex_nifty_sensexdown-1-770x433.jpg",
            "publishedAt": "2023-12-19T05:26:33Z",
            "content": "The muted moves across domestic markets was extended to December 19 morning deals after bulls kept ruling the Street for seven weeks in a row in their longest rally in three years. The fatigue seemed… [+3460 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Vedanta shares gain after board approves second interim dividend for FY24 - Moneycontrol",
            "description": "Vedanta board members will meet on December 19 to consider and approve the proposal for issuance of non-convertible debentures (NCDs) on a private placement basis",
            "url": "https://www.moneycontrol.com/news/business/stocks/vedanta-shares-gain-after-board-approves-second-interim-dividend-for-fy24-11925111.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/06/Vedanta-770x433.jpg",
            "publishedAt": "2023-12-19T04:57:18Z",
            "content": "Shares of Vedanta Limited gained over 1 percent on December 19 after the company approved a second interim dividend of Rs 11 per equity share, which is 100 percent on a face value of Re 1 per equity … [+1917 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "https://www.cnbctv18.com",
            "title": "Sony wants to hear Zee’s proposal before deciding to extend merger deadline - CNBCTV18",
            "description": "Sony India has issued a statement saying it has not yet agreed to the extension of the deadline for merger sought by Zee.",
            "url": "https://www.cnbctv18.com/business/companies/zee-sony-merger-sony-has-not-yet-agreed-to-deadline-extension-18597701.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/12/zee-sony-01-dec-1019x573.jpg",
            "publishedAt": "2023-12-19T04:00:18Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Happy Forgings IPO fully subscribed on Day 1 Key things to know - Hindustan Times",
            "description": "Happy Forgings IPO: The ₹1009-crore public issue will conclude on Wednesday.",
            "url": "https://www.hindustantimes.com/business/happy-forgings-ipo-opens-today-key-things-to-know-before-investing-101702955106590.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/Sona_Comstars_IPO__1702955230523_1702955230700.png",
            "publishedAt": "2023-12-19T03:43:21Z",
            "content": "Ludhiana-based Happy Forgings Limited will launch its initial public offering (IPO) on Tuesday. On Monday, a day ahead of the IPO's opening, the company, a manufacturer of heavy forgings and high-pre… [+1913 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Hormaz Fatakia",
            "title": "PSU Banks like SBI, Canara, Union poised for re-rating, according to this analyst - CNBCTV18",
            "description": "By financial year 2026, the earnings pool of PSU banks is likely to grow to 1.7 lakh crore from 57,300 crore in financial year 2022, according to Motilal Oswal.",
            "url": "https://www.cnbctv18.com/market/sbi-bob-canara-union-pnb-indian-bank-share-price-re-rating-motilal-oswal-target-raised-returns-18596731.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/07/SBI-1019x573.png",
            "publishedAt": "2023-12-19T02:16:52Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Themorningcontext.com"
            },
            "author": "Azman Usmani",
            "title": "Adani Green Energy: Shaken but not stirred - The Morning Context",
            "description": "Hindenburg’s allegations against the Adani group may have soured the year for India’s biggest renewable power producer, but the company is still well placed to grow strongly.",
            "url": "https://themorningcontext.com/business/adani-green-energy-shaken-but-not-stirred",
            "urlToImage": "https://media2.themorningcontext.com/media/posts_images/GettyImages-solar.jpg",
            "publishedAt": "2023-12-19T00:43:39Z",
            "content": "Hindenburgs allegations against the Adani group may have soured the year for Indias biggest renewable power producer, but the company is still well placed to grow strongly.\r\nThis is the first part in… [+767 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Paras Bisht",
            "title": "Zomato Share Price Target 2024, 2025: Stock Zooms 52-Week High, Analyst Sees 'Promising Buying Opportunity' - Times Now",
            "description": "Zomato share price hit the fresh 52-week high on Monday, December 18 buoyed by heavy volume. A total of 71.85 lakh shares changed hands today as per BSE data with a total turnover of Rs 91.06 crore. The company has a market capitalization of Rs 1,12,022.38 cr…",
            "url": "https://www.timesnownews.com/business-economy/markets/zomato-share-price-target-2024-2025-stock-zooms-52-week-high-analyst-sees-promising-buying-opportunity-article-106089920",
            "urlToImage": "https://static.tnn.in/thumb/msid-106089999,thumbsize-32342,width-1280,height-720,resizemode-75/106089999.jpg",
            "publishedAt": "2023-12-18T12:14:06Z",
            "content": "Zomato Share Price Target 2024, 2025: Stock Zooms 52-Week High, Analyst Sees 'Promising Buying Opportunity'"
          },
          {
            "source": {
              "id": null,
              "name": "Forbesindia.com"
            },
            "author": null,
            "title": "Investor appetite fading for IPOs of new-age tech companies - Forbes India",
            "description": "Even as the listing rush made a late start in 2023, new-age tech companies, considered to be the darling of investors, went missing from fundraising in the capital markets. What went wrong?",
            "url": "https://www.forbesindia.com/article/take-one-big-story-of-the-day/investor-appetite-fading-for-ipos-of-newage-tech-companies/90387/1",
            "urlToImage": "https://www.forbesindia.com/media/images/2023/Dec/img_224819_iposhutterstock_sm.jpg",
            "publishedAt": "2023-12-18T11:03:48Z",
            "content": "Image: Shutterstock\r\nInvestors warmed up to Indian primary markets fundraising only in the second half of 2023 as equities remained veiled under uncertainties, mostly due to geo-political crisis. Eve… [+10264 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Business Desk",
            "title": "UCO Bank recovers Rs 705 crore mistakenly credited to thousands of accounts - India Today",
            "description": "The surprise transfer of funds to 41,000 UCO Bank accounts was a consequence of a technical glitch in the bank's IMPS payment channel.",
            "url": "https://www.indiatoday.in/business/story/uco-bank-recovers-rs-705-crore-crore-mistakenly-credited-to-thousands-of-accounts-via-imps-2477420-2023-12-18",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/uco-bank-183358124-16x9_0.png?VersionId=X3jCrb2GnB8i94uPZChUbybrTBIKiSRC",
            "publishedAt": "2023-12-18T10:37:08Z",
            "content": "UCO Bank has recovered Rs 705.31 crore out of the Rs 820 crore that was mistakenly credited to numerous accounts in November, said Union Minister of State for Finance, Bhagwat Karad, on Monday.\r\nThe … [+1401 chars]"
          }
        ]
      },
      {
        "sports": [
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Meet Shubham Dubey, A Pan Stall Owner's Son Who Struck Rs 5.8 Crore Jackpot At IPL Auction - NDTV Sports",
            "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
            "url": "https://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
            "publishedAt": "2023-12-20T06:29:53Z",
            "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Utter chaos as PBKS buy wrong player in IPL auction, auctioneer denies reversal - Hindustan Times",
            "description": "IPL 2024 auction: PBKS wanted to cancel bid for Shashank Singh after the hammer went down but auctioneer Mallika Sagar denied the request. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/utter-chaos-as-pbks-buy-wrong-player-in-ipl-2024-auction-denied-reversal-by-auctioneer-mallika-sagar-video-viral-101703048503937.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/mallika_preity_1703048947109_1703049036160.jpg",
            "publishedAt": "2023-12-20T05:23:39Z",
            "content": "If you are an uncapped player, landing an IPL deal is one of the biggest shots in the arm. When crores of rupees are spent on some of the biggest stars of international cricket in an IPL auction, all… [+3871 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'It was a tough, emotional decision': Mahela Jayawardene on replacing Rohit Sharma with Hardik Pandya as - IndiaTimes",
            "description": "Cricket News: Mumbai Indians (MI) global head of cricket, Mahela Jayawardene, has defended the decision to replace Rohit Sharma with Hardik Pandya as the team's cap",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/it-was-a-tough-emotional-decision-mahela-jayawardene-on-replacing-rohit-sharma-with-hardik-pandya-as-mumbai-indians-captain/articleshow/106142164.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106142212,width-1070,height-580,imgsize-61150,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T04:43:54Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Sports Desk",
            "title": "IPL 2024 Auction: Chennai Super Kings refute rumours of trade negotiations with Mumbai Indians - India Today",
            "description": "IPL Auction 2024: Chennai Super Kings rubbished rumours of being involved in negotiations for a trade with Mumbai Indians ahead of the next IPL season. Speculation was rife about unrest in MI camp after Hardik Pandya replaced Rohit Sharma as captain.",
            "url": "https://www.indiatoday.in/sports/cricket/story/ipl-2024-auction-chennai-super-kings-refute-trade-rumours-mumbai-indians-rohit-sharma-ms-dhoni-2478149-2023-12-20",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/rohit-sharma-and-ms-dhoni-154904934-16x9_2.jpg?VersionId=p_T5RcrliqT_yKyD5yvSUf53N2PumHGk",
            "publishedAt": "2023-12-20T03:41:49Z",
            "content": "Chennai Super Kings have denied speculation of being involved in a trade deal with Mumbai Indians for some of their star players, including Rohit Sharma. CSK CEO Kasi Viswanathan highlighted that the… [+2804 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'If one of us, including me, could have...': KL Rahul laments after India fall short against South Africa - IndiaTimes",
            "description": "Cricket News: India suffered an eight-wicket defeat against South Africa in the 2nd ODI at St George's Park. The Indian team struggled to convert starts into centur",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/if-one-of-us-including-me-could-have-kl-rahul-laments-after-india-fall-short-against-south-africa-in-2nd-odi/articleshow/106140377.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106140518,width-1070,height-580,imgsize-85692,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:34:23Z",
            "content": "BCCI ends speculations, retains Rahul Dravid as India's head coach alongside support staff"
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Bangladesh opener breaks Tendulkar's long-standing record with brilliant century - ICC Cricket",
            "description": "A record knock from opener Soumya Sarkar has hoisted Bangladesh to a competitive total in their second ODI against New Zealand in Nelson.",
            "url": "https://www.icc-cricket.com/news/3829590",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/20/f1c54f48-6287-466b-81a2-7bf6d4294651/SoumyaSarkar.png",
            "publishedAt": "2023-12-20T03:08:34Z",
            "content": "Despite a lean run in ODIs over the last two years and missing out on selection for Bangladesh's ICC Men's Cricket World Cup 2023 squad, the left-hander belted 169 (151), hitting 22 fours and a pair … [+936 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Gaurav Gupta",
            "title": "IPL Auction: Australia's Mitchell Starc and Pat Cummins land record deals - IndiaTimes",
            "description": "Cricket News: Australia's World Cup-winning stars Mitchell Starc and Pat Cummins broke the Rs 20cr barrier in the IPL auction in Dubai. Starc became the most expens",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-auction-australias-mitchell-starc-and-pat-cummins-land-record-deals/articleshow/106138883.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106139060,width-1070,height-580,imgsize-74546,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:04:09Z",
            "content": "Arshdeep, Avesh on fire as India crush Proteas in 1st ODI"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Mitchell not a necessary starter for CSK despite his 14 cr. tag: Harsha Bhogle - Cricbuzz",
            "description": "Daryl Mitchell & Sameer Rizvi headline CSK's top buys at the Mini Auction. Do the champs have their bases covered? Harsha Bhogle & Joy Bhattacharjya discuss,...",
            "url": "https://www.youtube.com/watch?v=7DLeILJLcb8",
            "urlToImage": "https://i.ytimg.com/vi/7DLeILJLcb8/maxresdefault.jpg",
            "publishedAt": "2023-12-20T03:00:05Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "On 'Succession Plan' For MS Dhoni, CSK Coach Stephen Fleming's Unexpected Response - NDTV Sports",
            "description": "Chennai Super Kings are likely to be led by MS Dhoni in the IPL 2024 season, but little can be said about the following campaigns.",
            "url": "http://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://c.ndtvimg.com/2023-12/ocgfu4g8_fleming-and-dhoni-bcci_625x300_19_December_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-12-20T02:30:27Z",
            "content": "As Chennai Super Kings gear up for the Indian Premier League (IPL) 2024 season, the big question over MS Dhoni's successor remains. Ravindra Jadeja was tried as CSK's skipper in 2022 but the strategy… [+1551 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Quint"
            },
            "author": "Saima Andrabi",
            "title": "PKL 2023 Points Table: Puneri Paltan at Rank 1; Check All Standings & Rankings - The Quint",
            "description": "Pro Kabaddi League PKL 2023 Points Table and Standings: Puneri Paltan, Bengal Warriors, and Haryana Steelers area at top 3 spots. Check latest details here.",
            "url": "https://www.thequint.com/sports/kabaddi/pkl-2023-points-table-puneri-paltan-at-rank-1-check-all-standings-rankings",
            "urlToImage": "https://images.thequint.com/thequint%2F2023-12%2Fa65db1e0-e2ad-42a8-952c-d94ebdecf545%2FPKL_2023_Points_Table.jpg",
            "publishedAt": "2023-12-20T01:31:00Z",
            "content": "Pro Kabaddi 2023 Points Table: The Pro Kabaddi League 10 began on 2 December and will end on 21 February 2024. The Bengaluru Bulls, Dabang Delhi KC, Gujarat Giants, Haryana Steelers, Jaipur Pink Pant… [+473 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Sports Desk",
            "title": "RCB Stars To Make Debut, Ruturaj Gaikwad Out! India's Likely Playing XI For 3rd ODI Against South Africa - Times Now",
            "description": "India will face South Africa in the third ODI of the ongoing three-match series at Boland Park in Paarl on Thursday (December 21). India and South Africa have both won one match each in the series, and so the winner of the third ODI will seal the ODI series. …",
            "url": "https://www.timesnownews.com/sports/cricket/rcb-stars-to-make-debut-ruturaj-gaikwad-out-indias-likely-playing-xi-for-3rd-odi-against-south-africa-article-106137632",
            "urlToImage": "https://static.tnn.in/thumb/msid-106137632,width-1280,height-720,resizemode-75/106137632.jpg",
            "publishedAt": "2023-12-20T00:56:57Z",
            "content": "India's likely playing XI for 3rd ODI against South Africa. Picture Credit: X/@IPL, AP and X/@rrjjt_01"
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Records fall in the Caribbean as England level West Indies series in style - ICC Cricket",
            "description": "A host of records fell on an historic day in Trinidad as in-form opener Phil Salt inspired England to a series-equalling 75-run triumph over the West Indies on Tuesday.",
            "url": "https://www.icc-cricket.com/news/3829546",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/19/f39eeadb-4d1f-45b6-9b2c-29add60a83f0/Salt-T20I.jpg",
            "publishedAt": "2023-12-19T23:58:24Z",
            "content": "A host of records fell on an historic day in Trinidad as in-form opener Phil Salt inspired England to a series-equalling 75-run triumph over the West Indies on Tuesday.Salt smashed 10 sixes as he bec… [+1506 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "James Olley",
            "title": "Carabao Cup offers ray of hope for Pochettino and Chelsea - ESPN - ESPN India",
            "description": "Chelsea defeat Newcastle on penalties in the Carabao Cup quarterfinals to at least allow Mauricio Pochettino to salvage something in what has been a rollercoaster of a season.",
            "url": "https://www.espn.in/football/story/_/id/39150184/carabao-cup-offers-ray-hope-pochettino-chelsea",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1219%2Fr1268618_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-19T23:44:00Z",
            "content": "LONDON -- The celebrations revealed more than Chelsea's performance did. For almost all of Tuesday night's Carabao Cup quarterfinal, the Blues were a familiar sight: errant at the back, ponderous in … [+5144 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Barcauniversal.com"
            },
            "author": "Shahraiz Sajjad",
            "title": "Barcelona La Masia midfielder expected to make La Liga debut against Almeria following Pedri, de Jong absence - Barca Universal",
            "description": "Following the draw to Valencia, Barcelona have plenty of expectations riding on their shoulders against Almeria as anything less than a win would jeopardize their hopes of retaining the La Liga title. However, the absences in midfield will prove to be a major…",
            "url": "https://barcauniversal.com/barcelona-la-masia-midfielder-expected-to-make-la-liga-debut-against-almeria-following-pedri-de-jong-absence/",
            "urlToImage": "https://barcauniversal.com/wp-content/uploads/2023/12/royal-antwerp-fc-v-fc-barcelona-group-h-uefa-champions-league-2023-24-2-1-1000x600.jpg",
            "publishedAt": "2023-12-19T23:43:11Z",
            "content": "Following the draw to Valencia, Barcelona have plenty of expectations riding on their shoulders against Almeria as anything less than a win would jeopardize their hopes of retaining the La Liga title… [+1614 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sporting News"
            },
            "author": null,
            "title": "Chelsea player ratings vs Newcastle: Mykhailo Mudryk and Djordje Petrovic save Benoit Badiashile's blushes! Super-sub and back-up goalkeeper haul Blues into Carabao Cup semi-finals - Goal.com",
            "description": "Get all the latest Soccer news, highlights, scores, schedules, standings and more from Sporting News Canada.",
            "url": "https://www.sportingnews.com/ca/soccer",
            "urlToImage": "https://static.sportingnews.com/1.41.0.3/themes/custom/tsn/logo.jpg",
            "publishedAt": "2023-12-19T22:35:07Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Mumbaiindians.com"
            },
            "author": null,
            "title": "IPL AuctioN: Meet MI's new picks of 2024 - Mumbai Indians",
            "description": "And then there were 25. Eight new picks, and eight diverse skillsets: genuine raw pace, a left-arm seamer, a slinger, an off-spinning all-rounder, a leggie, a chinaman, an upcoming pacer, a lower-order finisher. Here’s your summary of how the day transpired i…",
            "url": "https://www.mumbaiindians.com/news/ipl-auction-meet-mi-new-picks-of-2024-mumbai-indians-gerald-coetzee",
            "urlToImage": "https://www.mumbaiindians.com/static-assets/waf-images/30/d4/20/16-9/1035-512/bNKzvC06Gg.jpg",
            "publishedAt": "2023-12-19T22:30:00Z",
            "content": "mi\r\nAnd then there were 25. Eight new picks, and eight diverse skillsets: genuine raw pace, a left-arm seamer, a slinger, an off-spinning all-rounder, a leggie, an upcoming pacer, a leftie batter, a … [+2321 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "‘HE’S PURE TALENT!’ What is Endrick bringing to Real Madrid’s system? 🤩 | ESPN FC - ESPN UK",
            "description": "Kay Murray and Janusz Michallik discuss what 17-year-old Brazilian starboy Endrick is bringing to Real Madrid and whether he will live up to his potential an...",
            "url": "https://www.youtube.com/watch?v=Lo9CcrIDqbs",
            "urlToImage": "https://i.ytimg.com/vi/Lo9CcrIDqbs/maxresdefault.jpg",
            "publishedAt": "2023-12-19T19:30:02Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Managing Madrid"
            },
            "author": "Managing Madrid",
            "title": "Thibaut Courtois confirms he will miss Euro 2024 - Managing Madrid",
            "description": "Belgium goalkeeper Thibaut Courtois has confirmed that he will not be able to play in the Euro 2024 tournament, as he recovers from a long-term ACL injury that has kept him out of action since the...",
            "url": "https://www.managingmadrid.com/2023/12/19/24008180/thibaut-courtois-confirms-he-will-miss-euro-2024",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/hGkQFsfZ1kYhDVFGyuHRpgqkOw0=/0x0:6000x3141/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25174335/1672055528.jpg",
            "publishedAt": "2023-12-19T19:01:14Z",
            "content": "Belgium goalkeeper Thibaut Courtois has confirmed that he will not be able to play in the Euro 2024 tournament, as he recovers from a long-term ACL injury that has kept him out of action since the st… [+1667 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Sourav Ganguly promised that Delhi Capitals will bid even Rs 10 crore for Kumar Kushagra, said he reminded him of MS Dhoni: father Shashikant - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/sports/cricket/sourav-ganguly-kumar-kushagra-ms-dhoni-delhi-capitals-ipl-auction-10-crore-9075153/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T18:12:06Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Wisden.com"
            },
            "author": "Ben Gardner",
            "title": "David Warner finds out he is blocked by Sunrisers Hyderabad during attempt to congratulate Travis Head - Wisden",
            "description": "David Warner has discovered he is blocked on social media by Sunrisers Hyderabad, a fact he realised during the IPL 2024 auction. Read more",
            "url": "https://wisden.com/series-stories/ipl-2024/david-warner-blocked-by-sunrisers-hyderabad-social-media-congratulate-travis-head-ipl-2024",
            "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2023/12/Two-image-watch-piece-2023-12-19T180749.792.png",
            "publishedAt": "2023-12-19T18:11:20Z",
            "content": "David Warner has discovered he is blocked on Instagram by Sunrisers Hyderabad, a fact he realised when attempting to congratulate their new signing, Travis Head.\r\nHead, Warners Australia teammate, wa… [+1560 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Royal Challengers Bangalore full squad after IPL 2024 auction: RCB buy Joseph - Hindustan Times",
            "description": "IPL 2024 Auction: Royal Challengers Bangalore bought Alzarri Joseph, on Tuesday. Here is RCB's full list of players acquired. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/royal-challengers-bangalore-full-squad-after-ipl-2024-auction-rcb-come-out-on-top-in-bidding-war-for-alzarri-joseph-101702983637412.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/AP12-15-2023-000017A-0_1702991934107_1702991964174.jpg",
            "publishedAt": "2023-12-19T17:41:15Z",
            "content": "Virat Kohli has never won an IPL trophy, and the India legend will be looking to finally bag one at the upcoming Indian Premier League season. At the IPL 2024 Auction, RCB began with the purchase of … [+1722 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "IPL 2024 DC Full Players List: Delhi Capitals picks 19-year-old Kumar Kushagra for Rs 7.20 crore, with Shai... - Zee Business",
            "description": "IPL 2024 Delhi Capitals full players list, IPL Auction 2024: With five Indian players and four foreign players, DC has filled all of the available 25 slots with eight overseas players in total.",
            "url": "https://www.zeebiz.com/trending/sports/ipl/news-ipl-2024-delhi-capitals-players-list-dc-ipl-auction-2024-check-full-team-squad-captain-coach-base-price-rishabh-pant-269337",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/19/273610-gggggggg-14.jpg",
            "publishedAt": "2023-12-19T17:02:30Z",
            "content": "IPL 2024 Delhi Capitals full players list, IPL Auction 2024: With all the bidding action done and dusted for this year's IPL Auction, we now have a clear picture of how the Delhi Capitals have set up… [+2923 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Kashmir Life"
            },
            "author": "KL News Network",
            "title": "Two Jammu and Kashmir Players Set To Feature In IPL 2024 - Kashmir Life",
            "description": "SRINAGAR: Jammu and Kashmir’s Abid Mushtaq has secured a spot in the Indian Premier League, making him the second player from the region to achieve this feat after Rasikh Salam. Abid, an all-rounder from Doda, known for his consistent performances nationally,…",
            "url": "https://kashmirlife.net/two-jammu-and-kashmir-players-set-to-feature-in-ipl-2024-335764/",
            "urlToImage": "https://kashmirlife.net/wp-content/uploads/2023/12/Rasik-Salam-Abid-Mushtaq-scaled.jpg",
            "publishedAt": "2023-12-19T16:59:50Z",
            "content": "SRINAGAR: Jammu and Kashmir’s Abid Mushtaq has secured a spot in the Indian Premier League, making him the second player from the region to achieve this feat after Rasikh Salam.\r\nAbid Mushtaq, Rasik … [+299 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Piyush Singh Thapa",
            "title": "IPL 2024: Full Squad Of RCB, MI, CSK, SRH, KKR, GT, LSG, PBKS, DC And RR After Auction - Zee News",
            "description": "The auction for the 2024 Indian Premier League season is done in Dubai and all the teams have completed their squads respectively. The 2024 season is expected to start between March 22 and the end of May in India. The auction for the upcoming season took plac…",
            "url": "https://zeenews.india.com/cricket/ipl-2024-full-squad-of-rcb-mi-csk-srh-kkr-gt-lsg-pbks-dc-and-rr-after-auction-2700889.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/19/1338879-ipl-54.png",
            "publishedAt": "2023-12-19T16:57:56Z",
            "content": "IPL 2024: The auction for the 2024 Indian Premier League season is done in Dubai and all the teams have completed their squads respectively. The 2024 season is expected to start between March 22 and … [+4272 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Rob Dawson",
            "title": "Man United say Financial Fair Play will restrict transfers - ESPN - ESPN India",
            "description": "Manchester United have told fans not to expect a busy January transfer window, in part, because Financial Fair Play rules (FFP) have \"real teeth.\"",
            "url": "https://www.espn.in/football/story/_/id/39146681/man-united-say-financial-fair-play-restrict-transfers",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1219%2Fr1268375_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-19T16:27:00Z",
            "content": "Manchester United have told fans not to expect a busy January transfer window, in part, because Financial Fair Play rules (FFP) have \"real teeth.\"\r\nEverton were docked 10 points in November for breac… [+2709 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Sports Desk",
            "title": "IPL Auction 2024: 2014 final hero Manish Pandey reunites with Gautam Gambhir at KKR - India Today",
            "description": "Manish Pandey has returned to Kolkata Knightriders as the Karnataka batter was reunited with his former skipper Gautam Gambhir during the IPL Auction 2024. Pandey was bought for his base price of Rs. 50 Lakhs.",
            "url": "https://www.indiatoday.in/sports/cricket/story/ipl-auction-2024-manish-pandey-kolkata-knightriders-return-gautam-gambhir-2478042-2023-12-19",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/ipl-auction-2024-19324220-16x9_0.jpg?VersionId=wPp6ABp1bpe1fipiuqqHlD_Ov7jW2Ba6",
            "publishedAt": "2023-12-19T15:35:09Z",
            "content": "KKR's 2014 final hero Manish Pandey has been reunited with Gautam Gambhir at the franchise for his base price of Rs. 50 Lakh during the IPL Auction 2024 on December 19. \r\nPandey was in set one and we… [+1331 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Adelaide Strikers v Sydney Thunder | BBL|13 - cricket.com.au",
            "description": "All the action from Adelaide Oval as BBL|13 resumed after the first Test with the Strikers hosting the Sydney Thunder.Download our app: https://app.cricket.c...",
            "url": "https://www.youtube.com/watch?v=nohj09ihMrI",
            "urlToImage": "https://i.ytimg.com/vi/nohj09ihMrI/maxresdefault.jpg",
            "publishedAt": "2023-12-19T15:30:22Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Cricket.com"
            },
            "author": "Cricket.com",
            "title": "Robin Minz becomes first tribal player in IPL - Cricket.com",
            "description": "Robin Minz, a left-handed wicketkeeping batter, induced bidding war between Mumbai Indians and Gujarat Titans",
            "url": "https://www.cricket.com/news/robin-minz-picked-by-gujarat-titans-becomes-first-tribal-player-in-ipl-12192023-1702998667170",
            "urlToImage": "https://images-cricketcom.imgix.net/news-1702998637573?auto=compress&fit=crop&crop=face&w=400&h=224",
            "publishedAt": "2023-12-19T15:16:14Z",
            "content": "Robin Minz created history in the IPL becoming the first ever tribal cricketer in the history of the tournament. Only 21 years old, Minzs name in the auction led to a bidding war between Mumbai India… [+1419 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Trisha Sengupta",
            "title": "Teen performs pull-ups on a bar placed between two moving trucks. Watch - Hindustan Times",
            "description": "Grigor Manukyan, an 18-year-old from Armenia, bagged the record for most consecutive pull-ups on a bar positioned between two moving trucks. | Trending",
            "url": "https://www.hindustantimes.com/trending/teen-performs-pull-ups-on-a-bar-placed-between-two-moving-trucks-watch-101702997166384.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/GWR_World_Record_Truck_Pull_Up_Teen_1702997224285_1702997239766.png",
            "publishedAt": "2023-12-19T15:02:34Z",
            "content": "Guinness World Records (GWR) took to X to share a video of an interesting record by an Armenian teen. The 18-year-old bagged a world record title by performing consecutive pull-ups on a bar that was … [+1601 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "mundoalbiceleste.com"
            },
            "author": null,
            "title": "Champions League Round of 16 draw: Argentine players remaining - mundoalbiceleste.com",
            "description": null,
            "url": "https://mundoalbiceleste.com/2023/12/19/champions-league-round-of-16-draw-argentine-players-remaining-2/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T14:57:33Z",
            "content": "The draw for the Champions League Round of 16 took place and seven of the eight ties all include Argentine players.\r\nA total of 11 Argentine players remain and of the 11, only one of them has won the… [+1456 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Barca Blaugranes"
            },
            "author": "Gill Clark",
            "title": "Pedri injured again and expected to miss Barcelona’s clash with Almeria - Barca Blaugranes",
            "description": "Another problem for Xavi",
            "url": "https://www.barcablaugranes.com/2023/12/19/24007764/pedri-injured-again-and-expected-to-miss-barcelonas-clash-with-almeria",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/eJg-e2xDBAGZlrla69ept_hjJMY=/0x0:3614x1892/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25173545/1865716977.jpg",
            "publishedAt": "2023-12-19T14:56:00Z",
            "content": "Barcelona have reportedly been hit with a fresh injury blow as Pedri has suffered a problem in training and will miss the final games of the year.\r\nThe midfielder is out of tomorrows La Liga clash wi… [+645 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Gujarat Titans Squad IPL 2024: GT Complete Players List, Auction Buys, Purse Remaining - ABP Live",
            "description": "Gujarat Titans in IPL 2024 Auction: Check below the complete list of players acquired by Gujarat Titans (GT) in the Indian Premier League (IPL) 2024 Auction.",
            "url": "https://news.abplive.com/sports/ipl/gujarat-titans-squad-ipl-2024-gt-complete-players-list-auction-buys-purse-remaining-1651144",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/19/bd4b2baa5a5d5341f2ae4ce699f9b54c170299720486324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-19T14:47:24Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Arya Vaishnavi",
            "title": "Taylor Swift booed as she supports Travis Kelce during Chiefs game | Watch - Hindustan Times",
            "description": "Taylor Swift was booed by football fans during the Kansas City Chiefs vs. New England Patriots game on Sunday",
            "url": "https://www.hindustantimes.com/entertainment/music/taylor-swift-booed-by-crowd-as-she-supports-travis-kelce-during-chiefs-game-watch-101702989712237.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/ts_1702993757359_1702993757562.jpg",
            "publishedAt": "2023-12-19T13:50:50Z",
            "content": "Taylor Swift was in attendance at the Kansas City Chiefs vs. New England Patriots game on December 17. The Midnights singer arrived at the Gillette Stadium in Foxborough, Massachusetts to support her… [+2212 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Managing Madrid"
            },
            "author": "Matt_MM",
            "title": "Bayern Munich send support to David Alaba and offer services of renowned doctor - Managing Madrid",
            "description": "The German club have offered to arrange his surgery with “one of the best knee surgeons of all time”.",
            "url": "https://www.managingmadrid.com/2023/12/19/24007666/bayern-munich-send-support-to-david-alaba-and-offer-services-of-renowned-doctor",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/k1TsBJ78y7mmsMfH2JOxT5aufWg=/0x0:7660x4010/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25173417/1320126552.jpg",
            "publishedAt": "2023-12-19T13:42:47Z",
            "content": "In an unexpected yet heartwarming gesture of solidarity, Bayern Munichs honorary president, Uli Hoeness, announced on Servus TVs Hangar 7 a supportive stance for their former star, David Alaba. Despi… [+1708 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "IPL 2024 SRH Full Players List: Sunrisers Hyderabad picks Pat Cummins for a record Rs 20.50 crore; Full Squ... - Zee Business",
            "description": "IPL 2024 Sunrisers Hyderabad full players list, IPL Auction 2024: SRH shattered all the records at the start of the IPL Auction 2024 when they brought Pat Cummins for a record Rs 20.50 crore, making him the most expensive player in IPL history.",
            "url": "https://www.zeebiz.com/trending/sports/ipl/news-ipl-2024-sunrisers-hyderabad-players-list-srh-ipl-auction-2024-check-full-team-squad-captain-coach-base-price-aiden-markram-pat-cummins-269322",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/19/273593-gggggggg-11.jpg",
            "publishedAt": "2023-12-19T13:42:10Z",
            "content": "IPL 2024 Sunrisers Hyderabad full players list, IPL Auction 2024: After all the bidding action in the IPL Auction 2024, we now have a clear picture of how Sunrisers Hyderabad have been setting up the… [+3070 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Rajasthan Royals Squad For IPL 2024 - Full Player List, Auction Purchases, Remaining Purse - ABP Live",
            "description": "Rajasthan Royals in IPL 2024 Auction: Check below the complete list of players acquired by Rajasthan Royals (RR) in the Indian Premier League (IPL) 2024 Auction.",
            "url": "https://news.abplive.com/sports/ipl/rajasthan-royals-squad-for-ipl-2024-full-player-list-auction-purchases-remaining-purse-1651130",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/19/0ad9e48d2307a1385c0caebcdcbffe51170299181954624_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-19T13:17:35Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Who is Kavya Maran? All you need to know about SunRisers Hyderabad CEO amid IPL Auction 2024 | Mint - Mint",
            "description": "IPL Auction 2024: Kavya Maran is the Chief executive officer (CEO) of SunRisers Hyderabad. She is the daughter of Kalanithi Maran, the chairman and founder of the Sun Group. Read about her education and net worth here:",
            "url": "https://www.livemint.com/sports/cricket-news/ipl-auction-2024-who-is-kavya-maran-all-you-need-to-know-about-sunrisers-hyderabad-ceo-11702987491393.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/19/1600x900/Kavya_1702987909762_1702987917850.jpg",
            "publishedAt": "2023-12-19T12:14:44Z",
            "content": "Kavya Maran, the co-owner of SunRisers Hyderabad (SRH), stormed the internet yet again as her team signed Australian captain Pat Cummins for 20.50 crore at the Indian Premier League (IPL) 2024 mini-a… [+2306 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Pakistan rest Haris for NZ T20Is; Shadab out with ankle injury - ESPNcricinfo",
            "description": "Chief selector Wahab Riaz also said Naseem Shah has recovered from his injury but still needs rehab and is expecting to play the PSL",
            "url": "https://www.espncricinfo.com/story/pakistan-rest-mohammad-haris-for-nz-t20is-shadab-khan-out-with-ankle-injury-1413491",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/370500/370549.6.jpg",
            "publishedAt": "2023-12-19T12:13:16Z",
            "content": "NewsChief selector Wahab Riaz also said Naseem Shah has recovered from his injury but still needs rehab and is expecting to play the PSL"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "Danyal Rasool",
            "title": "For Aamer Jamal, dark alleys will always lead to high streets - ESPNcricinfo",
            "description": "His Test debut in Perth came against all logic, but Aamer Jamal learnt his lessons quickly and finished as Pakistan's best bowler",
            "url": "https://www.espncricinfo.com/story/pakistan-in-australia-for-aamer-jamal-dark-alleys-will-always-lead-to-high-streets-1413486",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372500/372585.6.jpg",
            "publishedAt": "2023-12-19T12:11:00Z",
            "content": "FeatureHis Test debut in Perth came against all logic, but Aamer Jamal learnt his lessons quickly and finished as Pakistan's best bowler\r\nDanyal Rasool is ESPNcricinfo's Pakistan correspondent. @Dann… [+5 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Fih.hockey"
            },
            "author": null,
            "title": "Xan de Waard (NED) and Hardik Singh (IND) named FIH Players of the Year! - FIH",
            "description": "",
            "url": "https://www.fih.hockey/hockey-stars/news/xan-de-waard-ned-and-hardik-singh-ind-named-fih-players-of-the-year",
            "urlToImage": "https://www.fih.hockey/static-assets/waf-images/da/46/09/16-9/v8rXmuIRGO.png",
            "publishedAt": "2023-12-19T11:42:26Z",
            "content": "Following a vote by an Expert Panel, National Associations - represented by their respective national teams captains and coaches - fans and media, Xan de Waard (Netherlands) and Hardik Singh (India) … [+12532 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Betfair.com"
            },
            "author": "Betting.betfair",
            "title": "West Indies v England Fourth T20 Tips: Dre Russ unmissable at massive 16/1 - Betting.betfair",
            "description": null,
            "url": "https://betting.betfair.com/cricket/west-indies-cricket/west-indies-v-england-fourth-t20-tips-dre-russ-unmissable-at-massive-161-191223-194.html",
            "urlToImage": null,
            "publishedAt": "2023-12-19T11:13:33Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Dailymirror.lk"
            },
            "author": "DM Editorial",
            "title": "Dilshan Madushanka joins Mumbai Indians for INR 4.60 crore - Breaking News - dailymirror.lk",
            "description": "Dilshan Madushanka, who has a memorable ICC World Cup 2023, joined Mumbai Indians for INR 4.60 crore. He bowled well with the new ball and took wickets in the death overs as well.",
            "url": "https://www.dailymirror.lk/breaking-news/Dilshan-Madushanka-joins-Mumbai-Indians-for-INR-4-60-crore/108-273551",
            "urlToImage": "https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_089d90d23a.jpg",
            "publishedAt": "2023-12-19T10:37:00Z",
            "content": "Dec. 19 - Mumbai Indians bring Sri Lanka pacer Dilshan Madushanka to Wankhede Stadium for Rs 4.6 Crore\r\nMumbai Indians paid Rs 4.6 crore for Sri Lanka speedster Dilshan Madushanka in IPL 2024 Auction… [+383 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Betfair.com"
            },
            "author": null,
            "title": "Perth Scorchers v Hobart Hurricanes Big Bash Tips: Hobart bats to whip up a storm - Betting.betfair",
            "description": null,
            "url": "https://betting.betfair.com/cricket/big-bash/perth-scorchers-v-hobart-hurricanes-big-bash-tips-risk-hobart-bats-to-whip-up-a-storm-191223-194.html",
            "urlToImage": null,
            "publishedAt": "2023-12-19T09:44:08Z",
            "content": "{\"en\":{\"access_disabled\":\"Internet Access has been disabled on this device\",\"code\":\"Code\",\"custom_block_list\":\"it is on a custom block list\",\"email\":\"Email\",\"file_ext_blocked\":\"the file extension is … [+4347 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Shyam Vasudevan",
            "title": "Explained: AIFF looking to attract PIOs/OCIs to play for India - ESPN India",
            "description": "Is the AIFF's plan to attract OCI and PIO players to the Indian national football team wishful thinking or a realistic option? We explore.",
            "url": "https://www.espn.in/football/story/_/id/39144924/explained-aiff-looking-attract-pio-oci-play-india-football-national-team",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0212%2Fr814087_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-19T09:44:00Z",
            "content": "The All India Football Federation [AIFF] is looking to get PIOs [Persons of Indian Origin] and OCIs [Overseas Citizens of India] to represent India's national football teams after the AIFF president,… [+5476 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Two South Africa players ruled out of India ODI series - ICC Cricket",
            "description": "Injuries have forced two South Africa players out of the squad for the reminder of the three-match ODI series against India.",
            "url": "https://www.icc-cricket.com/news/3828970",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/19/3edc9ac7-74cd-41e0-a5ac-d6e217b51503/GettyImages-1853871528.jpg",
            "publishedAt": "2023-12-19T08:05:24Z",
            "content": "Injuries have forced two South Africa players out of the squad for the reminder of the three-match ODI series against India.Pacer Ottniel Baartman and all-rounder Andile Phehlukwayo will miss the rem… [+1589 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Wriddhaayan Bhattacharyya",
            "title": "IPL Auction 2024: From Mitchell Starc and Pat Cummins to Harshal Patel - top 15 winning bids - Moneycontrol",
            "description": "Australian pacer Mitchell Starc and Aussie captain Pat Cummins go for over Rs 20 crore each, setting new highs for the richest cricket league in the world.",
            "url": "https://www.moneycontrol.com/news/cricket/ipl-2024-auction-top-15-bids-from-mitchell-starc-pat-cummins-to-harshal-patel-11926181.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/07/Mitchell-Starc-1-770x433.jpg",
            "publishedAt": "2023-12-19T07:10:39Z",
            "content": "IPL Auction 2024 for the 17th edition of the Indian Premier League (IPL) set new records in quick succession, with Sunrisers Hyderabad bidding a whopping Rs 20.5 crore on Pat Cummins, and then Kolkat… [+8576 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Arfa Javaid",
            "title": "IPL 2024 auction: Richard Madley wishes luck to debutant Mallika Sagar - Hindustan Times",
            "description": "Richard Madley first used the hammer back in 2008 and continued until 2018. This year, Mallika Sagar stepped in as IPL’s first female auctioneer. | Trending",
            "url": "https://www.hindustantimes.com/trending/ipl-2024-auction-first-auctioneer-richard-madley-wishes-luck-to-debutant-mallika-sagar-101702967466649.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/IPL-2024-auction-mallika-sagar-richard-madley_1702968015964_1702968029390.jpg",
            "publishedAt": "2023-12-19T06:42:21Z",
            "content": "As the much-anticipated Indian Premier League (IPL) auction is set to unfold today in Dubais Coca-Cola Arena, the spotlight shines on 332 players who will undergo hammer today. Todays mini-auction wi… [+2332 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Mitchell Johnson sacked by Cricket Australia after his column against David Warner - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/sports/cricket/mitchell-johnson-sacked-by-cricket-australia-after-his-column-against-david-warner-9074050/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T05:46:51Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Bijin Jose",
            "title": "How Disney+ Hotstar managed its historic 5.9 crore concurrent viewership during WC finals - The Indian Express",
            "description": "Mukund Acharya, Head of Technology, Disney+Hotstar, in an exclusive interview, revealed the tech behind Disney+ Hotstar’s benchmark achievement during the ICC World Cup 2023.",
            "url": "https://indianexpress.com/article/technology/disney-hotstar-historic-5-9-cr-world-viewership-decoded-9073995/",
            "urlToImage": "https://images.indianexpress.com/2023/12/DH1.jpg",
            "publishedAt": "2023-12-19T05:20:03Z",
            "content": "India might not have won the 2023 ICC Mens Cricket World Cup, but the tournament was a big win for Disney+Hotstar which set a global benchmark by attaining a 5.9 crore concurrent viewership during th… [+2739 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "IPL 2024 Rules: 'A very small change with a huge impact': IPL 2024 to allow two bouncers an over | Cricket News - Times of India - IndiaTimes",
            "description": "Cricket News: The Indian Premier League has introduced a rule allowing bowlers to deliver two bouncers per over, aiming to create a fair balance between batsmen and",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/a-very-small-change-with-a-huge-impact-ipl-2024-to-allow-two-bouncers-an-over/articleshow/106110004.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106110405,width-1070,height-580,imgsize-31010,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T04:26:52Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Kartik Iyer",
            "title": "\"I am seeing only one change\" - Aakash Chopra on India's likely playing XI for 2nd ODI vs South Africa - Sportskeeda",
            "description": "Aakash Chopra sees India making only one change to their playing XI for the second ODI against South Africa, with Rinku Singh replacing the unavailable Shreyas Iyer.",
            "url": "https://www.sportskeeda.com/cricket/news-i-seeing-one-change-aakash-chopra-india-s-likely-playing-xi-2nd-odi-vs-south-africa",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/7f706-17029573526847-1920.jpg",
            "publishedAt": "2023-12-19T04:24:03Z",
            "content": "Aakash Chopra sees India making only one change to their playing XI for the second ODI against South Africa, with Rinku Singh replacing the unavailable Shreyas Iyer.\r\nThe second game of the three-mat… [+2382 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Rishabh Pant breaks silence on speculated IPL 2024 return for Delhi Capitals - Hindustan Times",
            "description": "If Pant does return to action, it will be his maiden appearance since featuring in the Bangladesh tour in late 2022 | Cricket",
            "url": "https://www.hindustantimes.com/cricket/still-not-100-rishabh-pant-breaks-silence-on-speculated-ipl-2024-return-for-delhi-capitals-101702921230317.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/pant-latest-getty_1675837495359_1702921414584.jpg",
            "publishedAt": "2023-12-19T01:54:23Z",
            "content": "Speculations over a possible return in the 2024 season of the Indian Premier League (IPL) was rife when Rishabh Pant was spotted at a Delhi Capitals camp in Kolkata last month in the presence of seni… [+2262 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Can Girona really win LALIGA? 'All signs say YES, but it's STILL Real Madrid!' - Moreno | ESPN FC - ESPN UK",
            "description": "The ESPN FC crew discuss what it would take for Girona to beat the odds and hold onto the top spot in LALIGA over Real Madrid and Barcelona.----Subscribe to ...",
            "url": "https://www.youtube.com/watch?v=Kn3jvKWBKcw",
            "urlToImage": "https://i.ytimg.com/vi/Kn3jvKWBKcw/maxresdefault.jpg",
            "publishedAt": "2023-12-19T00:53:48Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "West Indies rest in-form quick among squad reshuffle for England - ICC Cricket",
            "description": "The West Indies have re-shuffled their playing group by making two changes to their squad for the final two T20Is at home against England.",
            "url": "https://www.icc-cricket.com/news/3828822",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/18/a35aaaeb-b10c-4b53-bd38-f29e179dfcf8/Alz-Joseph.jpg",
            "publishedAt": "2023-12-18T23:23:42Z",
            "content": "The West Indies have re-shuffled their playing group by making two changes to their squad for the final two T20Is at home against England.The Caribbean side currently lead the five-match series 2-1 a… [+1167 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
          },
          {
            "source": {
              "id": null,
              "name": "Bavarian Football Works"
            },
            "author": "Grumpy_Opa_Takes",
            "title": "Thomas Tuchel happy with Bayern's performance in victory over Stuttgart - Bavarian Football Works",
            "description": "Could Tuchel be turning the corner at Bayern?",
            "url": "https://www.bavarianfootballworks.com/2023/12/18/24004648/bayern-munich-stuttgart-joshua-kimmich-thomas-muller-leon-goretzka-kim-min-jae-thomas-tuchel",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/IMXS5pRFB6BH3C0AUq4p_GpAhfI=/0x427:3854x2445/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25169606/1862757061.jpg",
            "publishedAt": "2023-12-18T21:30:00Z",
            "content": "Bayern Munich played out a well-deserved 3-0 victory over southern neighbors VFB Stuttgart. Coming off the back of a humiliating 5-1 defeat to Frankfurt in the previous Bundesliga matchday and missin… [+2189 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cricket.one"
            },
            "author": "Sumit Gupta",
            "title": "Ravichandran Ashwin Predicts 'This' Young Batter As The Future Star Of Indian Cricket - OneCricket",
            "description": "In a stellar debut performance, Sai Sudharsan, the young opener from Tamil Nadu, showcased his exceptional talent by scoring an unbeaten fifty in his maiden ODI match against South Africa in the 1st ODI at Johannesburg. R Ashwin, who has consistently praised …",
            "url": "https://cricket.one/cricket-news/ravichandran-ashwin-predicts-this-young-batter-as-the-future-star-of-indian-cricket/65807e14de38a068f4cd6e89",
            "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1702884544947_as.jpeg",
            "publishedAt": "2023-12-18T17:15:00Z",
            "content": "Sai Sudharsan (x.com)\r\nIn a stellar debut performance, Sai Sudharsan, the young opener from Tamil Nadu, showcased his exceptional talent by scoring an unbeaten fifty in his maiden ODI match against S… [+2242 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Your Tribal Chief & The Wiseman grace the Canvas: WWE Canvas 2 Canvas - WWE",
            "description": "Artist Rob Schamberger creates a timeless classic involving the WWE Undisputed Universal Champion Roman Reigns & his special council Paul Heyman.Stream WWE o...",
            "url": "https://www.youtube.com/watch?v=jS6pcRJuVgY",
            "urlToImage": "https://i.ytimg.com/vi/jS6pcRJuVgY/maxresdefault.jpg",
            "publishedAt": "2023-12-18T17:00:42Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "'Man United had chances to win it' - Liverpool 0-0 Manchester United | BBC Sport - BBC Sport",
            "description": "Match of the Day 2's Mark Chapman is joined by Ian Wright and Alan Shearer to discuss Liverpool and Manchester United's 0-0 draw in the Premier League. =====...",
            "url": "https://www.youtube.com/watch?v=PTAHoV3alJc",
            "urlToImage": "https://i.ytimg.com/vi/PTAHoV3alJc/maxresdefault.jpg",
            "publishedAt": "2023-12-18T16:30:06Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Gabriele Marcotti",
            "title": "Arsenal reclaim Premier League lead, Liverpool-Man United draw, Alaba woe for Real Madrid, more - ESPN India",
            "description": "Arsenal's cool win over pesky Brighton was more impressive than it looked, while Real Madrid reclaiming top spot in LaLiga was tempered by a devastating injury to David Alaba. Gab Marcotti recaps the weekend.",
            "url": "https://www.espn.in/football/story/_/id/39138958/arsenal-reclaim-premier-league-lead-alaba-woe-real-madrid-more",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1218%2Fr1268019_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-18T16:29:00Z",
            "content": "It's the holiday season, and European soccer was in a giving mood this weekend, with a ton of big talking points up and down the big leagues. In the Premier League, Arsenal shrugged off Brighton for … [+20069 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "UEFA Europa League knockout round play-off draw - UEFA",
            "description": "Watch the UEFA Europa Conference League knockout round play-off draw, which took place in Nyon on Monday 18 December 2023. #uel --Watch More: www.uefa.tvLear...",
            "url": "https://www.youtube.com/watch?v=VceIB__C6AA",
            "urlToImage": "https://i.ytimg.com/vi/VceIB__C6AA/maxresdefault.jpg",
            "publishedAt": "2023-12-18T14:59:51Z",
            "content": null
          },
          {
            "source": {
              "id": "financial-times",
              "name": "Financial Times"
            },
            "author": "Leonard Barden",
            "title": "Aged just eight, Bodhana Sivanandan enters chess history - Financial Times",
            "description": "Plus: in this week’s puzzle — can you find White’s hidden win?",
            "url": "https://www.ft.com/content/ccc25257-6479-4ad5-843c-0a3e913498e7",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F02abb00b-74ff-41f4-a63f-347301d64d3d.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2023-12-18T13:36:10Z",
            "content": "Bodhana Sivanandan, aged eight, entered chess history on Saturday with a superlative performance in the European blitz championship at Zagreb, Croatia. The primary school pupil from Harrow, north-wes… [+4358 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "ESPN staff",
            "title": "Sheetal Devi, Aditi Swami and Kishore Jena emerge into Indian sports' spotlight in 2023 - ESPN India",
            "description": "ESPN India picks the brightest prospects to have emerged into the Indian sports mainstream in 2023.",
            "url": "https://www.espn.in/espn/story/_/id/39138932/emerging-athletes-year-2023-sheetal-devi-kishore-kumar-jena-aditi-swami",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1218%2Fr1267902_1296x729_16%2D9.png",
            "publishedAt": "2023-12-18T12:00:00Z",
            "content": "It's perhaps the best part of sport - an unheralded name making a breakthrough and being catapulted into the spotlight. There's excitement at having to learn of a new athlete, attaching hope (often u… [+6085 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The-aiff.com"
            },
            "author": null,
            "title": "Group stage draw for Kalinga Super Cup 2023-24 conducted - AIFF",
            "description": null,
            "url": "https://www.the-aiff.com/article/group-stage-draw-for-kalinga-super-cup-2023-24-conducted",
            "urlToImage": null,
            "publishedAt": "2023-12-18T11:18:42Z",
            "content": "AIFF Media Team\r\nNEW DELHI: The draw for the group stage of the Kalinga Super Cup 2024 was conducted at the Football House in New Delhi on Monday, December 18, 2023. The tournament will see 16 teams … [+2546 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Alex Kirkland",
            "title": "How Argentina won the 2022 World Cup, in their own words - ESPN - ESPN India",
            "description": "One year on from Argentina's epic World Cup win, ESPN spoke to 10 members of the squad about their journey through that tournament. From Lionel Messi to Julian Alvarez, this is how they saw it.",
            "url": "https://www.espn.in/football/story/_/id/39121682/how-argentina-won-2022-world-cup-their-own-words",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1218%2Fr1108357_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-18T11:08:04Z",
            "content": "On Dec. 18, 2022, Argentina won the men's World Cup in the most dramatic way possible, beating France in a penalty shootout after a breathless 3-3 draw in Lusail, Qatar.\r\nThe game was an instant clas… [+23569 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Australia wary of spin challenge ahead of India Test - ICC Cricket",
            "description": "Australia women haven't lost a Test match since 2014, but have a stiff challenge ahead of them in India as they prepare for the one-off Test in Mumbai beginning on Thursday, 21 December.",
            "url": "https://www.icc-cricket.com/news/3828202",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/18/78f12773-5c13-453d-9ab8-956212062413/GettyImages-1502315529.jpg",
            "publishedAt": "2023-12-18T10:46:07Z",
            "content": "Australia women haven't lost a Test match since 2014, but have a stiff challenge ahead of them in India as they prepare for the one-off Test in Mumbai beginning on Thursday, 21 December.After watchin… [+1909 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Wisden.com"
            },
            "author": "Sarah Waris",
            "title": "Watch: Pakistan batters turn down second run with two required off last ball, match goes into Super Over - Wisden",
            "description": "Watch: With two needed from the last ball in the women’s ODI between New Zealand-Pakistan clash in Christchurch",
            "url": "https://wisden.com/series-stories/new-zealand-women-v-pakistan-women-2023/watch-pakistan-batters-turn-down-second-run-with-two-required-off-last-ball-match-goes-into-super-over",
            "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2023/12/Copy-of-Copy-of-Copy-of-Basic-Headline-Stat-1-1.png",
            "publishedAt": "2023-12-18T10:11:32Z",
            "content": "Watch: With two needed from the last ball in the third womens ODI between New Zealand-Pakistan in Christchurch, the touring batters failed to run a risky two as the match went into the Super Over on … [+1851 chars]"
          }
        ]
      },
      {
        "entertainment": [
          {
            "source": {
              "id": null,
              "name": "PINKVILLA"
            },
            "author": "Himesh Mankad",
            "title": "Dunki Box Office Preview: Shah Rukh Khan starrer run time, screen count, advance booking and opening day - PINKVILLA",
            "description": "If The Reports Of Shah Rukh Khan's Dunki Are Anywhere Close To The Previous Rajkumar Hirani Film, Sky Will Be The Limit As Family Audience Will Throng Into The Cinema Halls In Big Numbers. Details",
            "url": "https://www.pinkvilla.com/entertainment/box-office/dunki-box-office-preview-shah-rukh-khan-starrer-run-time-screen-count-advance-booking-and-opening-day-1266450",
            "urlToImage": "https://www.pinkvilla.com/images/2023-12/2078168556_dunki-box-office-preview-main.jpg",
            "publishedAt": "2023-12-20T07:58:17Z",
            "content": "The countdown for the release of Shah Rukh Khan and Rajkumar Hiranis maiden collaboration, Dunki has begun. The social dramedy also starring Taapsee Pannu, Vicky Kaushal and Boman Irani, set against … [+3547 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Prashanth Neel: It’s Prabhas’ call to take A certificate for Salaar - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/prashanth-neel-its-prabhas-call-to-take-a-certificate-for-salaar.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-20T07:34:00Z",
            "content": "The eagerly anticipated pan-Indian biggie Salaar: Part 1 – Ceasefire, starring Prabhas and Prithviraj Sukumaran in lead roles, is poised to hit theaters on December 22, 2023.\r\nIn a recent interview w… [+824 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Bigg Boss 7 Telugu winner’s shocking behavior becomes a hot topic - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/bigg-boss-7-telugu-winners-shocking-behavior-becomes-a-hot-topic.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-20T06:33:00Z",
            "content": "The Bigg Boss 7 Telugu was wrapped up a few days ago and Pallavi Prashanth won the title. But the mayhem he has caused after going out has become a hot topic of discussion on social media.\r\nSeveral j… [+883 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Dunki On Top Of The World: How Shah Rukh Khan Lit Up Dubai's Burj Khalifa With A Little Help From Drones - NDTV Movies",
            "description": "Shah Rukh promoted Dunki in Dubai like this",
            "url": "https://www.ndtv.com/entertainment/dunki-on-top-of-the-world-how-shah-rukh-khan-lit-up-dubais-burj-khalifa-with-a-little-help-from-drones-4708056",
            "urlToImage": "https://c.ndtvimg.com/2023-12/2pbgbmuo_dunki_625x300_20_December_23.jpeg",
            "publishedAt": "2023-12-20T06:22:57Z",
            "content": "A scene from the Dunki drone show in Dubai.\r\nNew Delhi: Shah Rukh Khan, who promoted his third film of the year Dunki in Dubai, did it in style and we expected nothing less. But the Dunki promotions … [+1724 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Sohail Khan's birthday bash: Salman Khan gets angry at paps for blocking his parents' car, 'Piche hato sab' - Times of India",
            "description": "Actor Sohail Khan turned a year older on December 19. He threw a lavish bash for his family, friends and industry colleagues. Salman Khan's entire family was present at the event to celebrate Sohail's special day. While exiting the venue, Salman was seen help…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/sohail-khans-birthday-bash-salman-khan-gets-angry-at-paps-for-blocking-his-parents-car-piche-hato-sab/videoshow/106145570.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106145570,imgsize-47720.cms",
            "publishedAt": "2023-12-20T06:21:32Z",
            "content": "Dec 20, 2023, 11:51AM ISTSource: etimes.inActor Sohail Khan turned a year older on December 19. He threw a lavish bash for his family, friends and industry colleagues. Salman Khan's entire family was… [+358 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Vijay’s Thalapathy 68 is neither called Boss nor Puzzle, producer clarifies - Hindustan Times",
            "description": "Speculation was rife that Thalapathy Vijay’s next film will be given one of these titles. Now, producer Archana Kalpathi has cleared all rumours.",
            "url": "https://www.hindustantimes.com/entertainment/tamil-cinema/vijays-thalapathy-68-is-neither-called-boss-not-puzzle-producer-clarifies-101703050412235.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Thalapathy_Vijay_1703050747523_1703050758590.jpg",
            "publishedAt": "2023-12-20T05:47:29Z",
            "content": "Rumours were afloat on Tuesday that the title for Thalapathy Vijays upcoming film, Thalapathy 68, with director Venkat Prabhu has been finalised. There was speculation that an English title has been … [+1997 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livelaw.in"
            },
            "author": "Navya Benny",
            "title": "Kerala High Court Refuses To Stay Release Of Mohanlal-Starrer 'Neru' On Plea Alleging Script Plagiarism - Live Law - Indian Legal News",
            "description": "The Kerala High Court on Wednesday refused to stay the release of the film 'Neru', starring Mohanlal and directed by Jeethu Joseph. The Single Judge Bench of Justice Devan Ramachandran today",
            "url": "https://www.livelaw.in/high-court/kerala-high-court/kerala-high-court-neru-movie-mohanlal-jeethu-joseph-script-stealing-screenwriter-244970",
            "urlToImage": "https://www.livelaw.in/h-upload/2023/12/20/510996-neru12426070.jpg",
            "publishedAt": "2023-12-20T05:38:17Z",
            "content": "The Kerala High Court on Wednesday refused to stay the release of the film 'Neru', starring Mohanlal and directed by Jeethu Joseph. \r\nThe Single Judge Bench of Justice Devan Ramachandran today issued… [+1847 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Sandeep Reddy Vanga lashes out at ‘illiterate and uneducated’ critics for panning Animal, says Ranbir Kapoor expected it - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/entertainment/bollywood/sandeep-reddy-vanga-lashes-out-at-critics-for-panning-animal-ranbir-kapoor-expected-it-9075521/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T04:59:44Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Free Press Journal"
            },
            "author": "Sachin T",
            "title": "Shah Rukh Khans Wife Gauri Khan Receives ED Notice For Endorsing Brand Accused Of Embezzling ₹30 Crore - Free Press Journal",
            "description": "Gauri Khan, who is the brand ambassador of Lucknow-based real estate company Tulsiani Group, was served with the ED on Tuesday",
            "url": "https://www.freepressjournal.in/entertainment/shah-rukh-khans-wife-gauri-khan-receives-ed-notice-for-allegedly-embezzling-30-crore",
            "urlToImage": "https://media.assettype.com/freepressjournal/2023-12/715ecab8-894a-442c-be8f-732936c674f8/20200205258L.jpg",
            "publishedAt": "2023-12-20T04:45:00Z",
            "content": "The Enforcement Directorate (ED) has reportedly sent a notice to Bollywood superstar Shah Rukh Khan's wife, film producer and interior designer Gauri Khan, for endorsing a brand that has ben accused … [+1975 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Dunki vs Salaar advance box office collection Day 1: Prabhas’ film races past Shah Rukh Khan’s comedy drama by Rs 2.4 crore - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/entertainment/bollywood/dunki-vs-salaar-advance-box-office-collection-day-1-prabhas-film-races-past-shah-rukh-khans-comedy-drama-by-rs-2-4-crore-9075467/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T03:41:15Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Koreaboo.com"
            },
            "author": null,
            "title": "BLACKPINK's Lisa Leaves Employees From Five Competing Luxury Brands In Awe During CELINE Event - Koreaboo",
            "description": "BLACKPINK's Lisa had employees from five competing luxury fashion brands in awe as she arrived for an event with CELINE in Thailand.",
            "url": "https://www.koreaboo.com/stories/blackpink-lisa-five-competing-luxury-brands-employees-celine-event-siam-paragon-thailand/",
            "urlToImage": "https://lh3.googleusercontent.com/5Xm1oaf2rDf-B8yq32Nte3oMeW6R21INjrxGI_-pAWjx4g-QEbUX_nue-fCybmJBb4HiKd8ZMpY_8u4xapXb_aa1mBIk-TLu6hKR5AFPnJj81IA=w1200-h630-rj-pp-e365",
            "publishedAt": "2023-12-20T03:36:25Z",
            "content": "On December 13, BLACKPINK‘s Lisa was spotted at Incheon International Airport as she arrived for her flight to Thailand.\r\nIt was reported that she was traveling to her home country for an appearance … [+2104 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Viral Pic: Shahid Kapoor And Mira Rajput With Their Swanky New Maybach - NDTV Movies",
            "description": "Shahid Kapoor bought a swanky new Mercedes-Maybach GLS 600",
            "url": "https://www.ndtv.com/entertainment/viral-pic-shahid-kapoor-and-mira-rajput-with-their-swanky-new-maybach-4707273",
            "urlToImage": "https://c.ndtvimg.com/2023-12/h12k7epg_shahid-_625x300_20_December_23.jpg",
            "publishedAt": "2023-12-20T03:27:21Z",
            "content": "Shahid-Mira with their new car. (courtesy: autohangar)\r\nNew Delhi: Congratulations are in order for actor Shahid Kapoor and wife Mira Rajput as they bought a swanky new Mercedes-Maybach GLS 600 recen… [+1510 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Smriti Irani pens a heartfelt note for her mother; urges fans to talk to their parents and express affect - Times of India",
            "description": "Smriti Irani shares a heartfelt message for her mother, emphasizing the importance of reciprocating the unconditional affection that parents give. She",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/smriti-irani-pens-a-heartfelt-note-for-her-mother-urges-fans-to-talk-to-their-parents-and-express-affection-writes-make-time-to-say-hello-to-your-parents-have-a-chat-say-you-love-them/articleshow/106139552.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106139645,width-1070,height-580,imgsize-1231770,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:08:11Z",
            "content": "Nita Ambani's diamond necklace to Isha Ambani's choker: Beautiful jewellery pieces owned by the Ambani ladies"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Sounak Mukhopadhyay",
            "title": "Animal Box Office collection Day 19: Ranbir Kapoor’s movie mints ₹843 crore, to face competition from SRK’s Dunki | Mint - Mint",
            "description": "Animal Box Office collection Day 19: This is Ranbir Kapoor's first movie to enter the  ₹500-crore club in the domestic market.",
            "url": "https://www.livemint.com/industry/media/animal-box-office-collection-day-19-ranbir-kapoor-s-movie-mints-rs-843-crore-to-face-competition-from-srk-s-dunki-11703039466431.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Animal_7_1703040733338_1703040740287.png",
            "publishedAt": "2023-12-20T02:57:37Z",
            "content": "Animal Box Office collection Day 19: Animals total earnings now stand at a staggering 522.94 crore nett in the domestic market after Day 19. This is the first Ranbir Kapoor movie to mint over 500 cro… [+2003 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Sandeep Reddy Vanga has plans for Animal 3 - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/sandeep-reddy-vanga-has-plans-for-animal-3.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-20T02:30:00Z",
            "content": "Sensational Tollywood director Sandeep Reddy Vanga has partnered with Bollywood superstar Ranbir Kapoor for the successful film Animal, which recently achieved a global gross of over Rs. 835 crores.\r… [+784 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "'Animal' star Ranbir Kapoor sends Shah Rukh Khan his love; says he can't wait to watch 'Dunki' - IndiaTimes",
            "description": "Ranbir Kapoor sends Shah Rukh Khan his love ahead of 'Dunki' release. Aamir Khan also wishes Shah Rukh Khan and Rajkumar Hirani the best for the film.",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/animal-star-ranbir-kapoor-sends-shah-rukh-khan-his-love-says-he-cant-wait-to-watch-dunki/articleshow/106138120.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106138123,width-1070,height-580,imgsize-40770,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T02:13:14Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Sam Bahadur Box Office Collection Day 19: Vicky Kaushal's film continues winning streak ; Earns over ₹100 cr globally | Mint - Mint",
            "description": "The film Sam Bahadur, which also starred Sanya Malhotra and Fatima Sana Shaikh in the lead roles, is based on the life of India's first Field Marshal Sam Manekshaw",
            "url": "https://www.livemint.com/industry/media/sam-bahadur-box-office-collection-day-19-vicky-kaushals-film-continues-winning-streak-worldwide-earns-over-rs-100-cr-11703034880749.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Sam_Bahadur_2_1701583707644_1703035187086.png",
            "publishedAt": "2023-12-20T01:39:10Z",
            "content": "Actor Vicky Kaushal's biopic drama film 'Sam Bahadur' has minted more than 100 crore worldwide. Based on the biopic of India's first field marshal, Sam Manekshaw, the film has been slowly but steadil… [+2677 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Jhalak Dikhhla Jaa 11: Divyanka Tripathi Dahiya wears her wedding lehenga to surprise Vivek Dahiya for sh - Times of India",
            "description": "The competition in Jhalak Dikhhla Jaa 11 is increasing with each weekend. Vivek Dahiya, a determined celebrity on the show, has been consistently gett",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/jhalak-dikhhla-jaa-11-divyanka-tripathi-dahiya-wears-her-wedding-lehenga-to-surprise-vivek-dahiya-for-shaadi-special-weekend-the-duo-shall-recreates-their-wedding-vows/articleshow/106137538.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106137590,width-1070,height-580,imgsize-1663881,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T00:44:07Z",
            "content": "Vivek Dahiya: I love seeing Divyanka ride a bike, it suits her a lot"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Prabhas' 'Salaar' gets 1 am and 4 am shows in Telangana; government allows makers to hike ticket prices - IndiaTimes",
            "description": "The Telangana government has approved the screening of 'Salaar: Part One- Ceasefire' at 1 am and 4 am on its opening weekend, allowing the makers to h",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/prabhas-salaar-gets-1-am-and-4-am-shows-in-telangana-government-allows-makers-to-hike-ticket-prices/articleshow/106137517.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106137519,width-1070,height-580,imgsize-29160,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T00:32:54Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Aries Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Aries horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/aries-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Aries-.jpg",
            "publishedAt": "2023-12-20T00:20:57Z",
            "content": "Just a reminder, Aries: it doesnt have to make sense to anybody else. It only has to make sense to you. Trust yourself, trust your calling, trust what is being revealed to you in moments of silence. … [+309 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Taurus Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Taurus horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/taurus-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Taurus-.jpg",
            "publishedAt": "2023-12-20T00:20:53Z",
            "content": "Maybe there are no straight answers. Maybe the answers will reveal themselves as you go along. This is your reminder to be and to breathe. To observe silence, to practise meditation and to continue t… [+250 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Virgo Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Virgo horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/virgo-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Virgo.jpg",
            "publishedAt": "2023-12-20T00:20:53Z",
            "content": "You tried. You tried to be boring, to be basic. But it simply is not for you. Not for you, Virgo. So, youve decided to take the unhinged route. To be so fully and authentically yourself that nothing … [+363 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Scorpio Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Scorpio horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/scorpio-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Scorpio.jpg",
            "publishedAt": "2023-12-20T00:20:46Z",
            "content": "We get it, Scorpio! Mercury is in retrograde *again*! It feels as if uncertainty is the only thing thats certain. Do yourself a favour, breathe, and get comfortable with the uncomfortable. Know that … [+429 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Capricorn Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Capricorn horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/capricorn-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Capricorn.jpg",
            "publishedAt": "2023-12-20T00:20:45Z",
            "content": "If youre expecting the path to clear itself immediately, you may be disappointed, Capricorn. What you need to remember when things feel a bit topsy-turvy is that you chose this. Your higher self chos… [+408 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Sagittarius Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Sagittarius horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/sagittarius-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Sagittarius.jpg",
            "publishedAt": "2023-12-20T00:20:34Z",
            "content": "Youre learning. Youre learning from your past mistakes, Sagittarius. Youre learning that youre no longer the same person you used to be and that your desires have taken a new form. So, accept where y… [+360 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Aquarius Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Aquarius horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/aquarius-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2021/12/Aquarius-866x487.jpg",
            "publishedAt": "2023-12-20T00:20:13Z",
            "content": "But, retrogrades arent *all* bad, Aquarius. Manyatimes they bring into our radar the projects that we may have placed on the backburner; projects that we werent able to pour our time and energy into.… [+295 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Cancer Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Cancer horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/cancer-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Cancer.jpg",
            "publishedAt": "2023-12-20T00:20:04Z",
            "content": "Right now, youre moving through life with main character energy! You know that what is yours will always be yours and will find its way into your life magically, serendipitously. So, work with the la… [+462 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Koreaboo.com"
            },
            "author": null,
            "title": "HYBE Trainer's Instagram Story Proves BTS's Staff Members Are Also \"Going Through It\" After Their Enlistment - Koreaboo",
            "description": "While ARMYs are keeping busy with different activities and contents, HYBE employees, who worked with BTS seem to be having a h",
            "url": "https://www.koreaboo.com/news/hybe-trainer-instagram-story-proves-bts-staff-members-missing-enlistment/",
            "urlToImage": "https://lh3.googleusercontent.com/5JUJ7cTWHAAxQP7ICTT0jPgo_P4Zfkw5s2Pv_vOjyZC8UWqoBNeVC5ms6JcX5Lq5JwRCmIDLt7amA2nQOYM9tdZcuu32C_pKv9B1C2wiKCAd3m4=w1200-h630-rj-pp-e365",
            "publishedAt": "2023-12-19T23:44:11Z",
            "content": "All seven members of BTS are away to fulfill their mandatory military service, and it looks like everyone is feeling the emptiness they left behind.\r\nBTS | Weverse\r\nARMYs are missing their boys badly… [+3267 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bollywood Life"
            },
            "author": "Urmimala Banerjee",
            "title": "Bigg Boss 17: Ankita Lokhande reveals why she maintained a stoic silence post split with Sushant Singh Rajput - Bollywood Life",
            "description": "Bigg Boss 17: Ankita Lokhande talks about why she stayed silent after Sushant Singh Rajput left her in 2016 as Munawar Faruqui misses Nazila",
            "url": "https://www.bollywoodlife.com/bigg-boss/bigg-boss-17-ankita-lokhande-reveals-why-she-maintained-a-stoic-silence-post-split-with-sushant-singh-rajput-says-mujhe-hopes-thi-entertainment-news-2735392/",
            "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2023/12/FotoJet-2023-12-20T021708.299.jpg",
            "publishedAt": "2023-12-19T21:10:27Z",
            "content": "Bigg Boss 17 fans feel the battle for the top two will be between Ankita Lokhande and Munawar Faruqui. The life of the stand-up comedian inside the house is in turmoil as his alleged flame model Ayes… [+2847 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Hrithik Roshan wishes ex-wife Sussanne Khan's boyfriend Arslan Goni on his birthday; Saba Azad also joins - IndiaTimes",
            "description": "Hrithik Roshan shares a cordial relationship with his ex-wife Sussanne Khan. He posted a sweet birthday message for Sussanne's boyfriend Arslan Goni o",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/hrithik-roshan-wishes-ex-wife-sussanne-khans-boyfriend-arslan-goni-on-his-birthday-saba-azad-also-joins-in-see-post/articleshow/106134696.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106134696,width-1070,height-580,imgsize-17966,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T19:56:48Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Buzz: Second single of Salaar to come out soon - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/buzz-second-single-of-salaar-to-come-out-soon.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-19T19:46:00Z",
            "content": "Salaar is creating a rampage with its advance bookings both in India and overseas. Just now, the advance bookings commenced in Telugu states, and the response is earth-shattering. The latest buzz in … [+670 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Dr J.N Pandey",
            "title": "Pisces Daily Horoscope Today, Dec 20, 2023 predicts a change in your lifestyle - Hindustan Times",
            "description": "Read Pisces daily horoscope for Dec 20, 2023 to know your astrological predictions. Have a healthy love life with fun and pleasure. | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/pisces-daily-horoscope-today-december-20-2023-predicts-a-change-in-your-lifestyle-101703000570582.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/pisces_1690909067172_1703000833189.jpg",
            "publishedAt": "2023-12-19T18:41:14Z",
            "content": "Pisces (19th February to 20th March)\r\nDaily Horoscope Prediction says, You are never serious about troubles\r\nHave a healthy love life with fun and pleasure. Consider every professional challenge as a… [+3010 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Dr J.N Pandey",
            "title": "Libra Daily Horoscope Today, December 20, 2023 predicts hurdles in love - Hindustan Times",
            "description": "Read Libra daily horoscope for Dec 20, 2023 to know your astrological predictions. New responsibilities at the office will probe the mettle. | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/libra-daily-horoscope-today-december-20-2023-predicts-hurdles-in-love-101702999895375.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/libra_1690910632044_1703001642184.jpg",
            "publishedAt": "2023-12-19T18:37:14Z",
            "content": "Libra - (23rd September to 22nd October)\r\nDaily Horoscope Prediction says, Settle the troubles with a smile today\r\nLibra Daily Horoscope, December 20, 2023: Both health and wealth are at your side to… [+2814 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Prithviraj Sukumaran – I didn’t expect Prashant Neel will make a film about two friends - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/prithviraj-sukumaran-i-didnt-expect-prashant-neel-will-make-a-film-about-two-friends.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-19T18:36:00Z",
            "content": "Salaar, starring Prabhas, is hitting the big screens this Friday. The entire team is busy promoting the film. In one of the interviews, Prithviraj Sukumaran said that he didn’t expect Neel will make … [+619 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Quint"
            },
            "author": "Saima Andrabi",
            "title": "Wordle 914 Answer: Hints and Clues To Guess the Solution on 20 December 2023 - The Quint",
            "description": "Wordle 914 Answer on Wednesday, 20 December 2023: Today's term may be a bit tricky to guess, Follow our hints and clues to guess the solution easily.",
            "url": "https://www.thequint.com/tech-and-auto/tech-news/wordle-914-answer-hints-and-clues-to-guess-the-solution-on-wednesday",
            "urlToImage": "https://images.thequint.com/thequint%2F2022-05%2F0d7d3752-8def-4019-a225-144e80680802%2FScreenshot_2022_02_16_at_16_02_34.png",
            "publishedAt": "2023-12-19T18:31:00Z",
            "content": "Wordle 914 Answer: The popular word puzzle game 'Wordle' has been updated to a new level. To crack the level, users have to guess a five letter word of the day in 6 attempts. Wordle answers are often… [+456 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Soni Razdan reveals Alia Bhatt and Shaheen Bhatt have had typical middle-class upbringing as there was ne - IndiaTimes",
            "description": "Soni Razdan recalls giving her daughters Alia Bhatt and Shaheen Bhatt a 'typical middle-class upbringing' with limited money. During a trip to Dubai,",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/soni-razdan-reveals-alia-bhatt-and-shaheen-bhatt-have-had-typical-middle-class-upbringing-as-there-was-never-excess-money/articleshow/106133936.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106133936,width-1070,height-580,imgsize-64342,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T17:58:27Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Justshowbiz.net"
            },
            "author": "Justshowbiz",
            "title": "Yeh Rishta Kya Kehlata Hai 20th December 2023 Written Update: Ruhi and Abhira get punishment - Justshowbiz",
            "description": null,
            "url": "https://www.justshowbiz.net/yeh-rishta-kya-kehlata-hai-20th-december-2023-written-update/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T17:20:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "PINKVILLA"
            },
            "author": "Arpita Sarkar",
            "title": "Bollywood Newswrap, Dec 19: Deepika Padukone REACTS to Ranveer Singh's Madame Tussauds wax figures; Fighter's Ishq Jaisa Kuch song to be out soon - PINKVILLA",
            "description": "From Deepika Padukone Reacting To Ranveer Singh's Madame Tussauds Wax Figures To Update On Fighter's Second Song; Take A Look At Top 5 Bollywood News Of Dec 19, 2023.",
            "url": "https://www.pinkvilla.com/entertainment/news/bollywood-newswrap-dec-19-deepika-padukone-reacts-to-ranveer-singhs-madame-tussauds-wax-figures-fighters-ishq-jaisa-kuch-song-to-be-out-soon-1266362",
            "urlToImage": "https://www.pinkvilla.com/images/2023-12/1189413421_bollywood-newswrap-dec-19-l.jpg",
            "publishedAt": "2023-12-19T17:10:43Z",
            "content": "On the nineteenth day of December 2023, the Bollywood industry buzzed with a lot of exciting news. Deepika Padukone's reaction to her husband and actor Ranveer Singh's Madame Tussauds wax figures rai… [+3774 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Koreaboo.com"
            },
            "author": null,
            "title": "BTS's J-Hope Almost Debuted With Another Company - But Chose Big Hit For This Reason - Koreaboo",
            "description": "BTS's J-Hope revealed why he chose Big Hit Music, formerly known as Big Hit Entertainment, in a new trailer for BTS Monuments: “Beyond The Star.\"",
            "url": "https://www.koreaboo.com/news/bts-j-hope-monuments-beyond-star-debut-company/",
            "urlToImage": "https://lh3.googleusercontent.com/fmc_jvohq5RQ1axnIS11LukixvwDHvAGBQzuFa2Vw9dKCesaWxdXQz3B1VAjFzOjsChTgVayAbhmm7jo_0agrQ2jhyu2GvWdg3qtcOZavkfrdoOc=w1200-h630-rj-pp-e365",
            "publishedAt": "2023-12-19T16:40:52Z",
            "content": "BTS‘s J-Hope revealed why he chose Big Hit Music, formerly known as Big Hit Entertainment, in a new trailer for BTSs docuseries BTS Monuments: Beyond The Star.”\r\nYour browser does not support video.\r… [+1424 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Kareena Kapoor, Akshay Kumar, Shilpa Shetty: Bollywood celebs who have jetted off for Christmas vacation - IndiaTimes",
            "description": "Kareena Kapoor, Akshay Kumar, Shilpa Shetty: Bollywood celebs who have jetted off for Christmas vacation",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/kareena-kapoor-akshay-kumar-shilpa-shetty-bollywood-celebs-who-have-jetted-off-for-christmas-vacation/photostory/106132604.cms",
            "urlToImage": "https://static.toiimg.com/photo/106132762.cms",
            "publishedAt": "2023-12-19T16:21:01Z",
            "content": "As the holiday season sweeps in, Bollywood celebrities are taking a break from their hectic schedules to indulge in some well-deserved Christmas vacations. From snowy destinations to tropical paradis… [+274 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Bride-to-be Shrenu Parikh looks gorgeous as she dons a green coloured outfit at her mehendi ceremony; a look at her dreamy photos - IndiaTimes",
            "description": "Ghar Ek Mandir actors Shrenu Parikh and Akshay Mhatre are all set to tie the knot on December 21 and the couple kick-started their wedding festivities with mehendi ceremony. Her mehendi took place yesterday on December 18.  The actress shared several photos f…",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bride-to-be-shrenu-parikh-looks-gorgeous-as-she-dons-a-green-coloured-outfit-at-her-mehendi-ceremony-a-look-at-her-dreamy-photos/photostory/106131824.cms",
            "urlToImage": "https://static.toiimg.com/photo/msid-106131990.cms",
            "publishedAt": "2023-12-19T15:29:30Z",
            "content": "In the photos, Shrenu can be seen wearing a green-coloured indo-western lehenga with a tiara, floral jewellery around her neck and earrings. She kept her hair open but opted for soft curls which enha… [+218 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Shweta Bachchan says Abhishek Bachchan is a 'better actor' than his wife Aishwarya Rai; internet reacts - Times of India",
            "description": "The Bachchan family has hit headlines multiple times recently for alleged fallout among family members and the rumoured separation of Aishwarya Rai and Abhishek Bachchan. While none of the reports are confirmed, speculations around the Bachchan family saga do…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/shweta-bachchan-says-abhishek-bachchan-is-a-better-actor-than-his-wife-aishwarya-rai-internet-reacts/videoshow/106128229.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106128229,imgsize-55484.cms",
            "publishedAt": "2023-12-19T15:05:00Z",
            "content": "Dec 19, 2023, 08:35PM ISTSource: etimes.inThe Bachchan family has hit headlines multiple times recently for alleged fallout among family members and the rumoured separation of Aishwarya Rai and Abhis… [+1127 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Hrithik Roshan, Deepika Padukone, Bosco Martis In Fighter BTS Video - NDTV Movies",
            "description": "\"A bts moment captured while filming sherkulgaye with Hrithik Roshan and my team\", wrote Bosco Martis",
            "url": "https://www.ndtv.com/entertainment/fighter-hrithik-roshan-deepika-padukone-bosco-martis-pose-together-in-sher-khul-gaye-bts-video-4701693",
            "urlToImage": "https://c.ndtvimg.com/2023-12/5cc5659_bosco-_625x300_19_December_23.jpg",
            "publishedAt": "2023-12-19T15:00:37Z",
            "content": "Bosco Martis shared this image. (courtesy: BoscoMartis)\r\nMumbai (Maharashtra): Hrithik Roshan and Deepika Padukone are all set to entertain fans with their roles in Fighter. Building more excitement … [+2565 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Kanwar Dhillon reacts to Ayesha Khan’s entry inside the Bigg Boss 17; says, “Bigg Boss ke baad sab ka pya - Times of India",
            "description": "Kanwar Dhillon, who was expected to be a part of Bigg Boss season 17, reacts to the Ayesha Khan-Munawar Faruqui controversy. Neil Bhatt and Aishwarya",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/kanwar-dhillon-reacts-to-ayesha-khans-entry-inside-the-bigg-boss-17-says-bigg-boss-ke-baad-sab-ka-pyaar-se-vishwas-uth-jayega/articleshow/106130502.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106130559,width-1070,height-580,imgsize-26382,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T14:03:18Z",
            "content": "Sohail Khan turns 53: Salman Khan, family and close friends gather for birthday bash"
          },
          {
            "source": {
              "id": null,
              "name": "Bollywood Life"
            },
            "author": "Urmimala Banerjee",
            "title": "Bigg Boss 17: Ankita Lokhande gets termed as gold-digger by Abhishek Kumar as he fights with Vicky Jain; fans - Bollywood Life",
            "description": "Bigg Boss 17: Ankita Lokhande gets tagged as a gold-digger by Abhishek Kumar. Netizens check up on the actress' financial history to verify popular facts",
            "url": "https://www.bollywoodlife.com/bigg-boss/bigg-boss-17-ankita-lokhande-gets-termed-as-gold-digger-by-abhishek-kumar-as-he-fights-with-vicky-jain-fans-dig-out-her-financial-history-entertainment-news-2734930/",
            "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2023/12/FotoJet-2023-12-19T180225.597.jpg",
            "publishedAt": "2023-12-19T13:02:09Z",
            "content": "Bigg Boss 17 fans are waiting for the huge clash between Abhishek Kumar and Vicky Jain. The two have had a very dirty fight inside the house. The Udaariyaan actor was downright as he age-shamed Vicky… [+2967 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Randeep Hooda pens sweet note for wife Lin Laishram on her birthday - Hindustan Times",
            "description": "Lin Laishram reacted to Randeep Hooda's sweet birthday post on Instagram. They married in Imphal on November 29. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/randeep-hooda-pens-heartfelt-note-for-wife-lin-laishram-on-her-birthday-101702987472130.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/GBtL4SNXEAALJkl_1702988020962_1702988047272.jpg",
            "publishedAt": "2023-12-19T12:38:14Z",
            "content": "Actors and longtime partners Randeep Hooda and Lin Laishram married in a traditional Meitei ceremony last month. Lin is celebrating her birthday on December 19. Randeep took to his Instagram account … [+2369 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Main Atal Hoon Teaser: Pankaj Tripathi as Atal Bihari Vajpayee is inspirational - Hindustan Times",
            "description": "Main ATAL Hoon stars Pankaj Tripathi as Atal Bihari Vajpayee. It is directed by Ravi Jadhav and will release next year. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/main-atal-hoon-teaser-pankaj-tripathi-as-atal-bihari-vajpayee-in-an-inspirational-tale-101702984770171.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/pankaj__1702986011300_1702986011580.png",
            "publishedAt": "2023-12-19T11:49:19Z",
            "content": "Actor Pankaj Tripathi is all set to bring his magic on the big screen as former Prime Minister Atal Bihari Vajpayee in his next, Mai ATAL Hoon. On Tuesday, the makers dropped a teaser from the film. … [+2270 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Hazel Pagador",
            "title": "Finn Balor and Damian Priest to drop their titles against popular duo in 2024? What could be in store for The Judgment Day on WWE RAW - Sportskeeda",
            "description": "Finn Balor and Damian Priest retained the Undisputed WWE Tag Team Championship on this week's Monday Night RAW.",
            "url": "https://www.sportskeeda.com/wwe/finn-balor-damian-priest-drop-titles-popular-duo-2024-what-store-the-judgment-day-wwe-raw",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/f4b66-17029834576699-1920.jpg",
            "publishedAt": "2023-12-19T11:29:34Z",
            "content": "Finn Balor and Damian Priest retained the Undisputed WWE Tag Team Championship on this week's Monday Night RAW. While the duo could finish the year as champions, their faith could quickly turn as ano… [+3113 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Swara Bhasker takes daughter Raabiyaa for her first flight, Fahad surprises them - Hindustan Times",
            "description": "Swara Bhasker and her daughter Raabiyaa travelled together and recieved a warm surprise from Fahad Ahmed. Swara posted everything on Instagram. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/swara-bhasker-takes-daughter-raabiyaa-for-her-first-flight-husband-fahad-ahmed-surprises-them-with-flowers-watch-101702977038187.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/swara_1702983800515_1702983800787.jpg",
            "publishedAt": "2023-12-19T11:13:56Z",
            "content": "Actor Swara Bhasker travelled with her newborn baby girl Raabiyaa and it was the little one's first flight. The mother-daughter duo received a sweet surprise from Fahad Ahmed who reached Delhi airpor… [+3116 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Koimoi"
            },
            "author": "Trisha Gaur",
            "title": "Kareena Kapoor Khan Claims ‘Suffering As An Actor’ Due To Her ‘Good Looks,’ Bobby Deol Bursts Her Bubble – 5 Times She Loved Stardom Over Performance! - Koimoi",
            "description": "Kareena Kapoor Khan debates the look vs actor discussion taking the high road, Bobby Deol bursts her bubble - times, she chose good looks!",
            "url": "https://www.koimoi.com/bollywood-news/kareena-kapoor-khan-claims-suffering-as-an-actor-due-to-her-good-looks-bobby-deol-bursts-her-bubble-5-times-she-loved-stardom-over-performance/",
            "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/12/kareena-kapoor-khan-claims-suffering-as-an-actor-due-to-her-good-looks-bobby-deol-bursts-her-bubble-5-times-she-loved-stardom-over-performance.jpg",
            "publishedAt": "2023-12-19T09:41:04Z",
            "content": "Kareena Kapoor Khan Starts The Look Vs Actor Debate (Picture Credit: Instagram)\r\nKareena Kapoor Khan has recently done a discussion with the best actors of 2023, which included her Jaane Jaan co-star… [+5323 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Chhavi Mittal Hair Burn Video: 'Super scary': Chhavi Mittal shares video of her hair catching fire; actress thanks Karan Grover for 'saving' her | Etimes - Times of India Videos - Times of India",
            "description": "Chhavi Mittal recently took to Instagram to post a video of her hair catching fire on the set of her show. Sharing the video, the actress described it as the ‘scariest’ accident of her life and also thanked actor Karan Grover putting out the fire with his han…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/super-scary-chhavi-mittal-shares-video-of-her-hair-catching-fire-actress-thanks-karan-grover-for-saving-her/videoshow/106120632.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106120632,imgsize-46200.cms",
            "publishedAt": "2023-12-19T09:34:00Z",
            "content": "Dec 19, 2023, 03:04PM ISTSource: etimes.inChhavi Mittal recently took to Instagram to post a video of her hair catching fire on the set of her show. Sharing the video, the actress described it as the… [+909 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Ananya Panday's rumoured beau Aditya Roy Kapur and BFF Suhana attend 'Kho Gaye Hum Kahan' screening - Times of India",
            "description": "Makers of Siddhant Chaturvedi, Ananya Panday and Adarsh Gourav starrer 'Kho Gaye Hum Kahan' held a special screening of the film on December 18 and it was attended by many Bollywood celebrities. The star-studded screening was attended by Ananya's rumoured boy…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/ananya-pandays-rumoured-beau-aditya-roy-kapur-and-bff-suhana-attend-kho-gaye-hum-kahan-screening/videoshow/106117578.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106117578,imgsize-77210.cms",
            "publishedAt": "2023-12-19T09:02:00Z",
            "content": "Dec 19, 2023, 02:32PM ISTSource: etimes.inMakers of Siddhant Chaturvedi, Ananya Panday and Adarsh Gourav starrer 'Kho Gaye Hum Kahan' held a special screening of the film on December 18 and it was at… [+319 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Did Anushka Sharma just confirm her pregnancy? Latest post suggests so - IndiaTimes",
            "description": "Rumours about Anushka Sharma and Virat Kohli expecting their second child has been circulating for a while, but the couple hasn't confirmed it.",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/did-anushka-sharma-just-confirm-her-pregnancy-latest-post-suggests-so/articleshow/106120264.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106120264,width-1070,height-580,imgsize-46290,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T09:00:53Z",
            "content": "Here's what happened when paparazzi requested Anushka Sharma to walk slowly at airport"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "PTI",
            "title": "Veteran actor Tanuja discharged from hospital after being admitted in ICU - Hindustan Times",
            "description": "Veteran actor Tanuja has been discharged from hospital on Monday. She was in the ICU. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/veteran-actor-tanuja-discharged-from-hospital-after-being-admitted-in-icu-101702973196596.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/tanuja-kajol_1663908309599_1702973816218.webp",
            "publishedAt": "2023-12-19T08:52:27Z",
            "content": "Veteran actor Tanuja, who was admitted to the intensive care unit (ICU) of a hospital here, was discharged on Monday night, a source said. The 80-year-old actor, known for movies such as Jewel Thief … [+1267 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "As 'Munnabhai MBBS' turns 20, Sanjay Dutt expresses desire for 'Munnabhai 3' to be made soon, Arshad Wars - IndiaTimes",
            "description": "Arshad Warsi and Sanjay Dutt express gratitude and get nostalgic as 'Munnabhai MBBS' turns 20 years old. Sanjay Dutt also expressed that he hopes that",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/as-munnabhai-mbbs-turns-20-sanjay-dutt-expresses-desire-for-munnabhai-3-to-be-made-soon-arshad-warsi-pens-note/articleshow/106118231.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106118190,width-1070,height-580,imgsize-36252,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T08:05:01Z",
            "content": "From chocolates to coffee, 8 foods that secretly contain insects"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "HanuMan trailer: Teja Sajja plays desi superhero out to save the world - Hindustan Times",
            "description": "The makers of Prasanth Varma’s HanuMan finally released the trailer of the Teja Sajja, Varalaxmi Sarathkumar-starrer on Tuesday.",
            "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/hanuman-trailer-teja-sajja-plays-desi-superhero-out-to-save-the-world-in-prasanth-varma-s-next-101702970128191.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/HanuMan_1702970332029_1702970332260.jpg",
            "publishedAt": "2023-12-19T07:45:09Z",
            "content": "The trailer for Prasanth Varmas upcoming film HanuMan was released on Tuesday. Given that the film went on-floors in 2021, fans of the superhero genre have been waiting for the films release for a wh… [+2212 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Onmanorama.com"
            },
            "author": "Onmanorama Staff",
            "title": "Marvel severs ties with convicted actor Jonathan Majors following assault verdict | Onmanorama - Onmanorama",
            "description": "The jury of six convicted him on one count of assault and one count of harassment and acquitted him of the other charges.",
            "url": "https://www.onmanorama.com/entertainment/entertainment-news/2023/12/19/marvel-drops-jonathan-majors-following-assault-verdict.html",
            "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2023/12/19/jonathan-majors.jpg",
            "publishedAt": "2023-12-19T05:56:01Z",
            "content": "Actor Jonathan Majors, slated to take on a leading role in an upcoming Marvel superhero film, was found guilty by a New York jury on Monday for charges related to an attack on his ex-girlfriend in th… [+2641 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Bipasha Basu and Karan Singh Grover share heartwarming moments with daughter Devi - IndiaTimes",
            "description": "Bipasha Basu continues to melt hearts as she offers glimpses into her cherished moments with her adorable daughter, Devi. Recently, she delighted fans",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/bipasha-basu-and-karan-singh-grover-share-heartwarming-moments-with-daughter-devi/articleshow/106113490.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106113540,width-1070,height-580,imgsize-37764,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T05:55:57Z",
            "content": "Karan Singh Grover and Bipasha Basu twin in black as they get spotted with daughter Devi at Mumbai airport"
          },
          {
            "source": {
              "id": null,
              "name": "Bollywoodshaadis.com"
            },
            "author": "",
            "title": "Jaya Bachchan Slapped Shweta In Front Of KJo For THIS Reason, Redditors Defend Her As Video Surfaces - BollywoodShaadis.com",
            "description": "Jaya Bachchan once slapped her daughter, Shweta Bachchan as she caught her reading a magazine with Karan Johar. Here's how the netizens reacted to the same!",
            "url": "https://www.bollywoodshaadis.com/articles/jaya-bachchan-slapped-shweta-after-she-caught-her-reading-stardust-magazine-with-kjo-47548",
            "urlToImage": "https://www.bollywoodshaadis.com/img/article-l-20231235211022639746000.webp",
            "publishedAt": "2023-12-19T05:33:24Z",
            "content": "FOLLOW US ON GOOGLE NEWS,\r\n FLIPBOARD,\r\n FACEBOOK,\r\n WHATSAPP CHANNEL\r\nKaran Johar is one of the most popular filmmakers of this era. He has an illustrious career, spanning over 25 years now, to his … [+3017 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Entertainment Desk",
            "title": "Jyotika says Kaathal The Core was an eye-opener for her; declares Mammootty a true hero among all South Indian superstars - The Indian Express",
            "description": "Jyotika recently opened up about Kaathal – The Core and shared insights into its intricacies, expressing admiration for Mammootty's bravery in taking on the project. Chithha actor Siddharth also lavished praise on the Malayalam superstar.",
            "url": "https://indianexpress.com/article/entertainment/malayalam/jyotika-kaathal-the-core-eye-opener-declares-mammootty-true-hero-south-indian-superstars-9073907/",
            "urlToImage": "https://images.indianexpress.com/2023/12/kaathal-19122023.jpeg",
            "publishedAt": "2023-12-19T05:18:58Z",
            "content": "Despite massive hate campaigns against the film from various quarters, Jeo Baby’s Kaathal The Core, starring Mammootty and Jyotika in the lead roles, continues to thrive in theatres and remains a top… [+2200 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Entertainment Desk",
            "title": "‘If someone kills Sunny, I can become a savage’: Bobby Deol reveals what went through his mind while filming key Animal scene - The Indian Express",
            "description": "Actor Bobby Deol said that he nailed a key shot in Animal because he tapped into a deeply personal space in his mind to extract the necessary performance.",
            "url": "https://indianexpress.com/article/entertainment/bollywood/bobby-deol-imagined-sunny-deol-killed-animal-scene-9073966/",
            "urlToImage": "https://images.indianexpress.com/2023/12/bobby-deol-animal.jpg",
            "publishedAt": "2023-12-19T05:18:29Z",
            "content": "Actor Bobby Deol, whose extended cameo in the blockbuster film Animal is being appreciated, spoke about not judging his villainous character, and how he nailed a shot in one take by harnessing person… [+2418 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Chirag Sehgal",
            "title": "Malaika Arora's Staff Removes Fan's Hand From Her Waist, Video Leaves Internet Divided; Watch - News18",
            "description": "The viral video has left netizens divided. While some expressed disappointment with the man keeping his arm on Malaika's waist, others argued that he was only taking a support.",
            "url": "https://www.news18.com/movies/malaika-aroras-staff-removes-fans-hand-from-her-waist-video-leaves-internet-divided-watch-8709290.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/malaika-arora-7-2023-12-4adb9b37904a9e456f9b46feb26cf950-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-19T05:09:06Z",
            "content": "Malaika Arora was recently spotted by the paparazzi outside the sets of Jhalak Dikhhla Jaa. As the diva posed for the lenses, fans also gathered to take pictures with her. However, while taking photo… [+1477 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NME"
            },
            "author": "Puah Ziwei",
            "title": "Watch BTS' Jungkook eat kimbap off his Spotify Billions Club plaque - NME",
            "description": "BTS' Jungkook has received a plaque from Spotify after reaching a billion streams for 'Seven' and used it to eat a Korean dish called Kimbap.",
            "url": "https://www.nme.com/news/music/watch-bts-jungkook-eat-kimbap-spotify-billions-club-plaque-3560769",
            "urlToImage": "https://www.nme.com/wp-content/uploads/2023/11/jungkook-bts-times-square-surprise-concert-getty.jpg",
            "publishedAt": "2023-12-19T04:31:24Z",
            "content": "BTS‘ Jungkook has received a plaque from Spotify after achieving a billion streams of his solo track ‘Seven’, and used it to eat a Korean dish called Kimbap.\r\nBack in October 2023, BTS’ Jungkook brok… [+1638 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Maryam Farooqui",
            "title": "Blockbuster year: 2.8 million tickets sold in one day, 16 lakh film buffs watched 6 movies in 2023 - Moneycontrol",
            "description": "Live events took centre stage this year after the industry struggled during the Covid years. More than 26,350 live events were experienced by 13.5 million audience across 250 cities in 2023.",
            "url": "https://www.moneycontrol.com/news/trends/entertainment/blockbuster-year-2-8-million-tickets-sold-in-one-day-16-lakh-film-buffs-watched-6-movies-in-2023-11922651.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/12/RRR-770x433.jpg",
            "publishedAt": "2023-12-19T02:08:01Z",
            "content": "Movies were the mainstay in outdoor entertainment for many Indians, making 2023 a blockbuster year for the cinema business. Millions of Indians opted for the big screen experience to watch the strong… [+3919 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gulte"
            },
            "author": "B.H Prasad",
            "title": "Rocky Bhai’s Death Has No Connection To Salaar - Gulte",
            "description": "The anticipation surrounding Prashanth Neel's upcoming project, Salaar, reached new heights with the release of its first-ever 'dinosaur' pre-teaser on July 8. As fans dissected every frame in an attempt to find connections to the wildly successful KGF franch…",
            "url": "https://www.gulte.com/movienews/273090/rocky-bhais-death-has-no-connection-to-salaar",
            "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/12/Salaar-KGF.jpg",
            "publishedAt": "2023-12-19T00:29:17Z",
            "content": "The anticipation surrounding Prashanth Neel’s upcoming project, Salaar, reached new heights with the release of its first-ever ‘dinosaur’ pre-teaser on July 8. As fans dissected every frame in an att… [+1333 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Gunther’s rematch with The Miz highlights three title match night on Raw: WWE Now, Dec. 18, 2023 - WWE",
            "description": "WWE Now previews Gunther and The Miz’s Intercontinental Title rematch, The Creed Brothers throw down with The Judgment Day, Katana Chance & Kayden Carter cha...",
            "url": "https://www.youtube.com/watch?v=DDyDNn6Q3pY",
            "urlToImage": "https://i.ytimg.com/vi/DDyDNn6Q3pY/maxresdefault.jpg",
            "publishedAt": "2023-12-18T22:07:26Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "#CelebrityEvenings: From Malaika Arora to Shilpa Shetty, Bollywood celebs spotted in Mumbai - Times of India",
            "description": "The paparazzi captured Bollywood stars at different locations in Mumbai on December 18. Celebrities including Malaika Arora, Akshay Kumar, Shilpa Shetty, Raj Kundra, Mira Rajput and others were spotted as they stepped out in the city looking their usual best.…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/celebrityevenings-from-malaika-arora-to-shilpa-shetty-bollywood-celebs-spotted-in-mumbai/videoshow/106098771.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106098771,imgsize-116782.cms",
            "publishedAt": "2023-12-18T17:35:00Z",
            "content": "Dec 18, 2023, 11:05PM ISTSource: etimes.inThe paparazzi captured Bollywood stars at different locations in Mumbai on December 18. Celebrities including Malaika Arora, Akshay Kumar, Shilpa Shetty, Raj… [+122 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Trisha Sengupta",
            "title": "NASA to Elon Musk, posts on Chandrayaan-3 mission that went crazy viral - Hindustan Times",
            "description": "Year Ender 2023: Elon Musk's reply to a post comparing the budget of the Chandrayaan-3 mission with the Hollywood film Interstellar went viral this year. | Trending",
            "url": "https://www.hindustantimes.com/trending/year-ender-2023-nasa-to-elon-musk-posts-on-chandrayaan-3-mission-that-went-crazy-viral-101702914626055.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/Chandrayaan_3_Elon_Musk_NASA_Year_Ender__1702915040656_1702915040974.jpg",
            "publishedAt": "2023-12-18T17:31:03Z",
            "content": "India etched space history on August 23 after Chandrayaan-3 successfully landed on the south pole of the moon. With this mission, the nation joined the elite list of the countries that made it to the… [+2089 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Video Desk",
            "title": "How Aishwarya Rai’s daughter Aaradhya performance took over the internet - India Today - India Today",
            "description": "Aaradhya Bachchan is suddenly the talk of the town. The little one, who is the daughter of Abhishek Bachchan and Aishwarya Rai Bachchan, impressed everyone with her performance during the annual day celebration at her school. Watch and find out why mother Ais…",
            "url": "https://www.indiatoday.in/newsmo/video/how-aishwarya-rai-bachchans-daughter-aaradhyas-performance-took-over-the-internet-2477584-2023-12-18",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202312/aara-18262873-16x9_0.jpeg?VersionId=ixt6U3SfX.H60mNl46asLAYsC0.euTEF",
            "publishedAt": "2023-12-18T16:28:52Z",
            "content": "Aaradhya Bachchan is suddenly the talk of the town. The little one, who is the daughter of Abhishek Bachchan and Aishwarya Rai Bachchan, impressed everyone with her performance during the annual day … [+112 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bollywood Hungama"
            },
            "author": "Bollywood Hungama",
            "title": "Amid Animal’s success, Manoj Bajpayee slams box office obsession; says it ruins Culture of filmmaking” - Bollywood Hungama",
            "description": "Amid Animal’s success, Manoj Bajpayee slams box office obsession; says it ruins “Culture of filmmaking” Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities News, Bollywood News Hindi, H…",
            "url": "https://www.bollywoodhungama.com/news/features/amid-animals-success-manoj-bajpayee-slams-box-office-obsession-says-ruins-culture-filmmaking/",
            "urlToImage": "https://media5.bollywoodhungama.in/wp-content/uploads/2023/12/Animal_Joram_Manoj_Bajpayee.jpeg",
            "publishedAt": "2023-12-18T10:13:56Z",
            "content": null
          }
        ]
      }
    ]
      
    const sportsObject = filteredData.find(category => category.hasOwnProperty(props.category));
    const sportsValue = sportsObject ? sportsObject[props.category] : [];

    let newsData = sportsValue.filter(item => (
        item.title &&
        item.description &&
        item.url &&
        item.publishedAt &&
        item.source &&
        item.source.name
    ));

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalArticles, settotalArticles] = useState(0);



    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {

        props.setProgress(10);
        setLoading(true);

        let parsedData = newsData.slice(0, 6);
        setArticles(parsedData);
        settotalArticles(newsData.length);
        props.setProgress(50);

        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `Newspedia - ${capitalizeFirstLetter(props.category==="general"? "top" : props.category)} News`;
        updateNews();
        // eslint-disable-next-line
    }, [])



    const fetchMoreData = async () => {
        props.setProgress(10);
        const startIndex = articles.length;
        const endIndex = startIndex + 6;
        props.setProgress(50);
        const parsedData = newsData.slice(startIndex, endIndex);
        setTimeout(() => {

            setArticles((prevArticles) => prevArticles.concat(parsedData));
            props.setProgress(100);
        }, 1500);
    };

    return (
        <>
            <h1 className="text-center font-monospace " style={{ marginTop: '95px', marginBottom: '30px' }}>Top {capitalizeFirstLetter(props.category==="general"? "" : props.category)}  Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalArticles}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {
                            articles

                                .map((element, index) => {
                                    return <div className="col-md-4" key={index}>
                                        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                    </div>
                </div>
            </InfiniteScroll>



        </>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general'
}


News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
