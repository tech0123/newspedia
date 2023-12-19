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
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Parliament Winter Session 2023 Live Updates: 33 Opposition MPs suspended from Lok Sabha for remainder of Winter Session - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/india/parliament-winter-session-2023-live-news-updates-stalement-9072430/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T10:23:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Fact-Checking Viral Dawood Ibrahim News Attributed To Pak's Caretaker PM - NDTV",
            "description": "Reports widely circulated on social media about fugitive gangster Dawood Ibrahim's death have not been confirmed.",
            "url": "https://www.ndtv.com/world-news/fact-checking-viral-dawood-ibrahim-news-attributed-to-paks-caretaker-pm-4696343",
            "urlToImage": "https://c.ndtvimg.com/2022-05/otcfh25g_dawood-ibrahim_625x300_10_May_22.jpg",
            "publishedAt": "2023-12-18T09:59:15Z",
            "content": "Dawood Ibrahim allegedly planned the series of bomb blasts that rocked Mumbai (then Bombay) in 1993.\r\nInternet was abuzz with the news of the death of Dawood Ibrahim in Karachi. The report, circulate… [+1865 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Mallika Soni",
            "title": "Videos: Heavy rains in Australia strands families on roofs, crocodiles seen - Hindustan Times",
            "description": "Australia Floods: Authorities warned flood-hit Queensland residents to be wary of snakes and crocodiles in the floodwaters. | World News",
            "url": "https://www.hindustantimes.com/world-news/australia-heavy-rainfall-australia-floods-australia-cyclone-jasper-updates-101702891946587.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/AUSTRALIA-WEATHER-FLOODS-1_1702893136124_1702893189485.jpg",
            "publishedAt": "2023-12-18T09:54:30Z",
            "content": "Australia's northern region witnessed its heaviest rain in decades as families were left stranded on rooftops overnight. Crocodiles swept into one town while the weather forecasters predicted more de… [+2146 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Microsoft silently fixes annoying bug on Windows 11 OS - The Indian Express",
            "description": "Microsoft has finally fixed a bug that caused Windows 11 File Explorer to randomly pop-up in the foreground when using other apps or playing games.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/microsoft-windows-11-file-explorer-randomly-popping-up-bug-fixed-9072786/",
            "urlToImage": "https://images.indianexpress.com/2023/12/Windows-11-Microsoft-2-1.jpg",
            "publishedAt": "2023-12-18T09:52:31Z",
            "content": "Microsoft introduced tabbed File Explorer last year with the Windows 11 Moment 2 update. However, soon after users installed the update, many started complaining that the File Explorer window was ran… [+1299 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Share Market Live: Nifty trades below 21,450, Sensex almost down by 150 points; Media and Metal index gains over 1% - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-share-market-live-sensex-nifty-may-open-flat-gift-nifty-up-asian-markets-trade-mixed-december-18-2023-monday-3340879/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T09:33:29Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "NASA solves mystery of missing tomatoes aboard International Space Station - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/trending/trending-globally/nasa-solves-mystery-missing-tomatoes-aboard-international-space-station-9072807/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T09:24:33Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Pathi Venkata Thadhagath",
            "title": "Karnataka health min advises senior citizens to wear masks, amid Covid surge - Hindustan Times",
            "description": "Karnataka health minister assures state's preparedness as Covid cases increase in neighboring Kerala | Bengaluru News",
            "url": "https://www.hindustantimes.com/cities/bengaluru-news/karnataka-health-minister-advices-senior-citizens-to-wear-masks-amid-covid-surge-in-kerala-101702891110505.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/Residents-of-Delhi-NCR-have-started-wearing-masks-_1700116756980_1702891253014.jpg",
            "publishedAt": "2023-12-18T09:23:31Z",
            "content": "Karnataka health minister Dinesh Gundu Rao suggested the senior citizens of the state with co-morbidities to wear masks as the number of Covid cases see a rise in neighboring Kerala. He also said tha… [+1518 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Gyanvapi Mosque Survey Report Submitted In Court By Archaeological Body - NDTV",
            "description": "The Gyanvapi mosque survey report - in a sealed white cloth - was submitted to a district court in Uttar Pradesh's Varanasi Monday.",
            "url": "https://www.ndtv.com/india-news/gyanvapi-mosque-survey-report-submitted-in-court-by-archaeological-body-4696081",
            "urlToImage": "https://c.ndtvimg.com/2022-05/jefcejic_gyanvapi-mosque-varanasi-gyanvapi-masjid-varanasi-pti_625x300_14_May_22.jpg",
            "publishedAt": "2023-12-18T09:13:22Z",
            "content": "New Delhi: The Gyanvapi mosque 'scientific survey' report has been submitted to a court of the district judge in Uttar Pradesh's Varanasi by the Archaeological Survey of India. The report was submitt… [+2095 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Arti Singh",
            "title": "Ebix Files for Chapter 11 Bankruptcy in Texas | Mint - Mint",
            "description": "CEO Robin Raina is the largest shareholder in the company owning 13.9% stake; and as of 31 December, 2022, Ebix Inc. had outstanding borrowings of $639.3 mn",
            "url": "https://www.livemint.com/companies/ebix-files-for-chapter-11-bankruptcy-in-texas-11702886194656.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/2-0-1309431910-robin-raina-0_1679981990059_1702890069912.jpg",
            "publishedAt": "2023-12-18T09:04:17Z",
            "content": "Indian-born American Robin Raina-led Ebix Inc. has filed for Chapter 11 bankruptcy in Northern District of Texas. \r\nOn 17 December, Nasdaq-listed Ebix Inc. and certain of its US subsidiaries filed a … [+3918 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "iPhone 16 could have a ‘Capture Button,’ here’s what it’ll do - Times of India",
            "description": "Apple replaced the mute switch on the iPhone 15 Pro with the Action Button, which can be customised for various functions. Apple is working on bringin",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/iphone-16-could-have-a-capture-button-heres-what-itll-do/articleshow/106086157.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106086106,width-1070,height-580,imgsize-26310,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T08:53:43Z",
            "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Video: Joe Biden Whisked Away After Car Crashes Into His Security Convoy - NDTV",
            "description": "A car crashed into a vehicle attached to Joe Biden's motorcade on Sunday, with the security scare startling the US president as he left his campaign headquarters in Delaware.",
            "url": "https://www.ndtv.com/world-news/car-collides-with-president-joe-bidens-security-motorcade-4694376",
            "urlToImage": "https://c.ndtvimg.com/2023-12/hilcn6i_joe-biden-_625x300_18_December_23.jpeg",
            "publishedAt": "2023-12-18T07:45:00Z",
            "content": "Joe Biden arrived safely at his family home without further incident.\r\nWilmington: A car crashed into a Secret Service vehicle attached to Joe Biden's motorcade on Sunday, with the security scare sta… [+1643 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Aishwarya Rai Bachchan's reaction to Aaradhya's stage performance goes viral; netizens say, 'Better than all 'Archies' actors' - Times of India",
            "description": "Actor couple Aishwarya Rai Bachchan and Abhishek Bachhchan's daughter Aaradhya Bachchan performed at her school's annual day and the videos and pictures from it have gone viral on social media. Videos of proud mommy Aishwarya smiling at Aaradhya's performance…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/aishwarya-rai-bachchans-reaction-to-aaradhyas-stage-performance-goes-viral-netizens-say-better-than-all-archies-actors/videoshow/106082772.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106082772,imgsize-30346.cms",
            "publishedAt": "2023-12-18T07:34:57Z",
            "content": "Dec 18, 2023, 01:04PM ISTSource: etimes.inActor couple Aishwarya Rai Bachchan and Abhishek Bachhchan's daughter Aaradhya Bachchan performed at her school's annual day and the videos and pictures from… [+598 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Muthoot Microfin IPO booked 29%, retail portion 51% so far on launch - Moneycontrol",
            "description": "Muthoot Microfin IPO: The price band of the offer, which will close on December 20, has been fixed at Rs 277-291 per share",
            "url": "https://www.moneycontrol.com/news/business/ipo/muthoot-microfin-ipo-day-1-subscription-updates-rs-960-crore-issue-closes-on-20-december-11920221.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/stock-photo-double-exposure-of-graph-and-rows-of-coins-for-finance-and-business-concept-530884738-770x433.jpg",
            "publishedAt": "2023-12-18T07:32:00Z",
            "content": "The Muthoot Microfin IPO has been subscribed 45 percent so far on the first day of bidding, December 18, with bids coming in for 1.09 crore shares as against an issue size of 2.43 crore shares.\r\nReta… [+2740 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "In A First, AI-Based Tool Used To Translate PM Modi's Speech - NDTV",
            "description": "Prime Minister Narendra Modi's speech at an event in Uttar Pradesh's Varanasi yesterday was translated in real-time using artificial intelligence (AI) technology.",
            "url": "https://www.ndtv.com/india-news/in-a-first-ai-based-tool-used-to-translate-pm-modis-speech-4695483",
            "urlToImage": "https://c.ndtvimg.com/2023-12/t74bqm3g_pm-modi-varanasi-1200-_625x300_17_December_23.jpeg",
            "publishedAt": "2023-12-18T07:12:01Z",
            "content": "PM Modi said AI will help him reach out to more people\r\nNew Delhi/Varanasi: Prime Minister Narendra Modi's speech at an event in Uttar Pradesh's Varanasi yesterday was translated in real-time using a… [+1360 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Vikas Yadav",
            "title": "Redmi 13C Alternative POCO C65 Flipkart Sale Is Now Live In India; Check Price, Bank Offers, Specifications - Jagran English",
            "description": "POCO C65 Price: The core specifications of the budget handset are similar to the newly launched Redmi 13C 4G handset that is also available in India. If you plan to buy a budget 4G smartphone in India in the sub-Rs 10,000 bracket, here are the price, bank off…",
            "url": "https://english.jagran.com/technology/poco-c65-price-in-india-flipkart-sale-now-live-bank-offers-exchange-discount-specifications-processor-camera-10121119",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/poco-c65-price-in-india-flipkart1702884195342.jpg",
            "publishedAt": "2023-12-18T07:10:00Z",
            "content": "POCO C65 Price In India: POCO, a Chinese smartphone maker, launched the POCO C65 handset in India for buyers. The device ships with a MediaTek Helio G85 chipset and a 5,000mAh battery. The core speci… [+1880 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "From Cummins to Brook, top cricketers anticipate big bids in IPL 2024 auction - IndiaTimes",
            "description": "Cricket News: The Indian Premier League (IPL) auction will take place in Dubai on Tuesday, featuring top cricketers with bids starting from a base price of Rs 2 cro",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/from-cummins-to-brook-top-cricketers-anticipate-big-bids-in-ipl-2024-auction/articleshow/106079288.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106080036,width-1070,height-580,imgsize-57834,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T06:28:42Z",
            "content": "Arshdeep, Avesh on fire as India crush Proteas in 1st ODI"
          },
          {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "North Korea resumes missile launches in ‘threat to peace and stability’ - Al Jazeera English",
            "description": "Pyongyang launched ‘ICBM-class’ missile on Monday, hours after a short-range weapon amid record year of testing.",
            "url": "https://www.aljazeera.com/news/2023/12/17/south-korea-says-north-fired-short-range-ballistic-missile-into-sea",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/34867MD-highres-1702868909.jpg?resize=1920%2C1440",
            "publishedAt": "2023-12-18T05:26:15Z",
            "content": "North Korea has resumed its record year of missile tests launching a long-range ballistic missile capable of hitting the United States hours after firing a short-range weapon in actions its neighbour… [+4956 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "Samsung Galaxy S24 Series Leak Sheds Light on Storage and Color Variants - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/2023/12/18/samsung-galaxy-s24-series-leak-sheds-light-on-storage-and-color-variants/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T05:16:14Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Dtnext.in"
            },
            "author": "IANS",
            "title": "Flu infections in Japan soar to warning level at fastest pace in 10 years - DTNEXT",
            "description": "The National Institute of Infectious Diseases estimated that the number of patients nationwide totaled around 1,118,000 during the seven-day period.",
            "url": "https://www.dtnext.in/news/world/flu-infections-in-japan-soar-to-warning-level-at-fastest-pace-in-10-years-755178",
            "urlToImage": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/12/18/787355-202312153095031.jpg",
            "publishedAt": "2023-12-18T04:53:10Z",
            "content": "TOKYO: The average number of influenza patients per regularly monitored medical institution in Japan had hit warning levels at the fastest pace in 10 years, the health ministry has announced.\r\nAbout … [+1220 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Chennai Weather Live Updates: Heavy rains lashes Tamil Nadu; School colleges shut today | Mint - Mint",
            "description": "Chennai Weather Live Updates: After a stormy beginning with heavy rainfall in December, Tamil Nadu (and parts of Kerala) are set to receive another episode of heavy rainfall over next two days. According to IMD Chennai, parts of Tamil Nadu are likely to witne…",
            "url": "https://www.livemint.com/news/india/chennai-weather-live-updates-tamil-nadu-news-kerala-heavy-rainfall-imd-weather-updates-orange-alert-rain-alert-11702804286062.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/Tamil_Nadu_rains_live_update_1702804322947_1702804323322.jpg",
            "publishedAt": "2023-12-18T04:23:57Z",
            "content": "Chennai Weather Live Updates: The Indian Meteorological Department (IMD) has predicted heavy to very heavy rainfall over Tamil Nadu and Kerala during the next 2-3 days. As per IMD Chennai, heavy to v… [+18806 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Samudrayaan mission: India's deep ocean mission- a challenge beyond space exploration - HT Tech",
            "description": "Samudrayaan mission Indias deep ocean mission a challenge beyond space exploration Samudrayaan mission The Deep Ocean Mission DOM is an ambitious initiative by India to explore and exploit the depths of the ocean. Approved by the Union Cabinet in 2021 the mis…",
            "url": "https://tech.hindustantimes.com/web-stories/samudrayaan-mission-indias-deep-ocean-mission-a-challenge-beyond-space-exploration-71702892334898.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/Samudrayaan_mission_1702892471550_1702892967183.jpg/",
            "publishedAt": "2023-12-18T04:19:35Z",
            "content": "Photo Credit: @KirenRijiju\r\n Samudrayaan mission: The Deep Ocean Mission (DOM) is an ambitious initiative by India to explore and exploit the depths of the ocean. Approved by the Union Cabinet in 202… [+2435 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BusinessLine"
            },
            "author": "Madhu Balaji",
            "title": "IRB Infrastructure receives ₹1,683 cr contract from NHAI - BusinessLine",
            "description": "IRB Infrastructure Trust receives ₹1,683-crore contract from NHAI for two projects, increasing IRB's share in North-South connectivity to 12%.",
            "url": "https://www.thehindubusinessline.com/markets/irb-infrastructure-receives-1683-cr-contract-from-nhai/article67649571.ece",
            "urlToImage": "https://bl-i.thgim.com/public/todays-paper/tp-others/tp-states/rzhdvn/article66757456.ece/alternates/LANDSCAPE_1200/NHAI-to-develop%2BGQVB4NFAV.4.jpg.jpg",
            "publishedAt": "2023-12-18T04:18:33Z",
            "content": "IRB Infrastructure Trust, private InvIT of IRB Infrastructure Developers Ltd, has received 1,683-crore contract from the National Highways Authority of India (NHAI) for TOT-13 comprising Gwalior-Jhan… [+952 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Israel Hostages Killed By Own Army Put Out 'SOS' Sign With Leftover Food - NDTV",
            "description": "Signs reading \"S.O.S.\" and \"help, three hostages\" in Hebrew were found on the walls of a Gaza building where three Israeli hostages had been hiding before they were mistakenly killed, Israel's military said on Sunday.",
            "url": "https://www.ndtv.com/world-news/help-3-hostages-sos-sign-found-on-killed-hostages-hideout-israel-4694660",
            "urlToImage": "https://c.ndtvimg.com/2023-12/c0ghrmj8_protest-on-israeli-hostages-killing_625x300_18_December_23.jpeg?ver-20231203.06",
            "publishedAt": "2023-12-18T04:05:21Z",
            "content": "More than 100 Israeli hostages remain in Gaza.\r\nJerusalem: Signs reading \"SOS.\" and \"help, three hostages\" in Hebrew were found on the walls of a Gaza building where three Israeli hostages had been h… [+2153 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Salaar vs Dunki advance box office: Prabhas-starrer trails behind Shah Rukh Khan’s film, sells 150000 tickets - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/entertainment/telugu/salaar-vs-dunki-advance-box-office-prabhas-starrer-trails-behind-shah-rukh-khans-film-9072390/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T03:43:28Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "On Nathan Lyon Completing 500 Test Wickets, Ravichandran Ashwin's Massive 'GOAT' Reaction - NDTV Sports",
            "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
            "url": "https://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
            "publishedAt": "2023-12-18T03:22:44Z",
            "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Delhi's air quality moves from 'very poor' to 'poor' category, AQI stands at 296 | Mint - Mint",
            "description": "The AQI at Anand Vihar was not given, it stated, insufficient data for computing AQI.",
            "url": "https://www.livemint.com/news/india/delhi-aqi-air-quality-temperature-gurugram-noida-rk-puram-central-up-haryana-category-aqi-pollution-cold-news-latest-11702862184042.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/20231207-DLI-PK-MN-Morning-Weather-013-0_1702866000656_1702866034879.jpg",
            "publishedAt": "2023-12-18T02:38:28Z",
            "content": "Delhi woke up to foggy conditions on Monday morning as the air quality in the national capital persisted in the 'poor' category, according to the System of Air Quality and Weather Forecasting And Res… [+2416 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Bigg Boss 17: Munawar Faruqui goes through a mental breakdown after Ayesha Khan accuses him of double dat - Times of India",
            "description": "Ayesha confronts Munawar in the Bigg Boss Archive room about his relationship with gf Nazila and accuses him of double dating. Munawar apologizes for",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-munawar-faruqui-goes-through-a-mental-breakdown-after-ayesha-khan-accuses-him-of-double-dating-says-if-bigg-boss-opens-the-door-ill-walk-out/articleshow/106069498.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106069495,width-1070,height-580,imgsize-22632,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T02:30:00Z",
            "content": "Ajwain garlic oil: Perfect remedy for cough, cold and chest congestion"
          },
          {
            "source": {
              "id": null,
              "name": "Statetimes.in"
            },
            "author": "statetimes_editor",
            "title": "Preventing heart disease by healthy heart diet-Cheap and non pharmacological modality: Dr Sushil - State Times",
            "description": "STATE TIMES NEWSJAMMU: To strengthen their campaign further to aware the common masses about the ill effects of Cardiovascular Diseases, Head of Department (HoD) of Cardiology, Dr Sushil Sharma held a day long Cardiac awareness-cum-health check up ca",
            "url": "https://statetimes.in/preventing-heart-disease-by-healthy-heart-diet-cheap-and-non-pharmacological-modality-dr-sushil/",
            "urlToImage": "https://statetimes.in/wp-content/uploads/2023/12/Dr-Sushilfff-1.jpg",
            "publishedAt": "2023-12-18T02:12:55Z",
            "content": "STATE TIMES NEWS\r\nJAMMU: To strengthen their campaign further to aware the common masses about the ill effects of Cardiovascular Diseases, Head of Department (HoD) of Cardiology, Dr Sushil Sharma hel… [+3722 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Weight Loss With Intermittent Fasting: How to Stay on Track on With 10-Hour Eating Window? 5 Tips - India.com",
            "description": "Intermittent fasting is basically setting time window for your meals. It helps with weight loss and here is how one maybe able to stay on track and maintain the regime.",
            "url": "https://www.india.com/lifestyle/weight-loss-with-intermittent-fasting-how-to-stay-on-track-on-with-10-hour-eating-window-5-tips-6593481/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/intermittent-fasting-weight-los.jpg",
            "publishedAt": "2023-12-18T01:57:33Z",
            "content": "Intermittent fasting is basically setting time window for your meals. It helps with weight loss and here is how one maybe able to stay on track and maintain the regime. \r\nWeight Loss With Intermitten… [+2967 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Jigar Shah",
            "title": "Prashanth Neel : Courted Prabhas for 4 months for Salaar - IndiaTimes",
            "description": "Prashanth Neel, renowned for the KGF franchise, discusses his film \"Salaar\" with Prabhas, emphasizing that violence in the movie is emotionally driven",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/prashanth-neel-courted-prabhas-for-4-months-for-salaar/articleshow/106072502.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106072496,width-1070,height-580,imgsize-50218,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T01:55:32Z",
            "content": "Salaar | Song - Sooraj Hi Chhaon Banke (Lyrical)"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "PM Modi to flag off 2nd Vande Bharat train on Varanasi-New Delhi route | 10 things to know | Mint - Mint",
            "description": "Varanasi-New Delhi Vande Bharat train: The train has superior passenger amenities such as onboard Wi-Fi infotainment, GPS-based passenger information system, plush interiors, bio-vacuum toilets, among other features.",
            "url": "https://www.livemint.com/news/pm-modi-to-flag-off-2nd-vande-bharat-train-on-varanasi-new-delhi-route-10-things-to-know-11702861936588.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/orange_vande_bharat_1692413227913_1702864007970.jpg",
            "publishedAt": "2023-12-18T01:52:06Z",
            "content": "Vande Bharat Express Trains: Prime Minister Narendra Modi will flag off the second Vande Bharat Express train running between Varanasi and New Delhi today i.e. on 18 December. The train will be flagg… [+3760 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Chronicle"
            },
            "author": "DC Correspondent",
            "title": "Revanth to Unearth All Data on Kaleshwaram - Deccan Chronicle",
            "description": "Revanth to Unearth All Data on Kaleshwaram",
            "url": "https://www.deccanchronicle.com/nation/in-other-news/181223/revanth-to-unearth-all-data-on-kaleshwaram.html",
            "urlToImage": "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-r6qji1vtc7n4u0821p1vto4bd7-20231218011908.Medi.jpeg",
            "publishedAt": "2023-12-17T19:02:30Z",
            "content": "According to an official press release, Revanth Reddy also wanted to know the full details pertaining to the irrigation projects built after 2014, including details of their design and the expenditur… [+51 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Zee News Desk",
            "title": "Highlights | IND Vs SA, 1st ODI Cricket Scorecard: Sai Sudharsan Scores Fifty As India Beat South Af - Zee News",
            "description": "Highlights | IND Vs SA, 1st ODI Cricket Scorecard: Sai Sudharsan Scores Fifty As India Beat South Af",
            "url": "https://zeenews.india.com/cricket/highlights/live-cricket-score-ind-vs-sa-1st-odi-match-cricket-match-today-india-vs-south-africa-cricket-live-score-updates-new-wanderers-stadium-johannesburg-kl-rahul-aiden-markram-117-runs-2nd-innings-target-for-ind-2699695",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/17/1337625-nz-7.png",
            "publishedAt": "2023-12-17T18:38:40Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Sai Sudharsan, bought by Gujarat Titans for ₹20 lakh, shines in his ODI debut | Mint - Mint",
            "description": "He made the chase look like a cakewalk. Sai Sudharsanreached his maiden ODI fifty in 41 balls, with eight fours in his debut ODI match",
            "url": "https://www.livemint.com/sports/cricket-news/meet-sai-sudharsan-gts-rising-star-who-made-odi-debut-for-india-in-series-opener-vs-south-africa-11702818086744.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/ANI-20231217228-0_1702818086266_1702818175291.jpg",
            "publishedAt": "2023-12-17T14:57:51Z",
            "content": "Sai Sudharsan was acquired by Gujarat Titans for his base price of Rs20 lakh. Southpaw Sai Sudharsan burst onto the scene in the local domestic T20 league in Chennai with his nonchalant batting amass… [+5150 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Vaibhav Tiwari",
            "title": "On PM Modi's 'probe not debate' remark, Jairam Ramesh takes 'running away' dig - Hindustan Times",
            "description": "In his first reaction, PM Modi told a national daily that there was a need for a probe into the incident, not a debate. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/congress-running-away-to-save-jab-on-pm-narendra-modis-first-remark-on-lok-sabha-security-breach-101702810863683.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/ANI-20231215159-0_1702811005202_1702811029757.jpg",
            "publishedAt": "2023-12-17T11:05:40Z",
            "content": "New Delhi: Congress general secretary Jairam Ramesh on Sunday hinted that the Opposition's impasse with the government over the Lok Sabha security breach will continue until home minister Amit Shah m… [+2442 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Herbal remedies for relief from seasonal flu - IndiaTimes",
            "description": "While herbal remedies are a pure cure for seasonal flu, they offer a natural way to fight influenza or flu. Try these remedies to get relief from influenza as  they might be enough to treat it.",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/herbal-remedies-for-relief-from-seasonal-flu/photostory/106049207.cms",
            "urlToImage": "https://static.toiimg.com/photo/106049215.cms",
            "publishedAt": "2023-12-17T10:30:00Z",
            "content": "A hot herbal tea drink, commonly referred to as kadha can be very effective in offering relief to your throat and sinuses. To make your herbal tea healthy as well as tasty, you can sweeten it with ho… [+219 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Scientists sound alarm on global consequences as Antarctic ice melt accelerates - AP Archive",
            "description": "(12 Dec 2023) RESTRICTION SUMMARY: ++MUSIC CLEARED FOR EDITORIAL USE++ASSOCIATED PRESSIsabel Riquelme Islet, Antarctic Peninsula - 24 November 20231. Drone s...",
            "url": "https://www.youtube.com/watch?v=flFwlftFBIo",
            "urlToImage": "https://i.ytimg.com/vi/flFwlftFBIo/maxresdefault.jpg",
            "publishedAt": "2023-12-17T04:02:34Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Vicky Stavropoulou",
            "title": "How will Aditya-L1 not burn? - CityLife",
            "description": "How will Aditya-L1 not burn? - CityLife",
            "url": "https://citylife.capetown/uncategorized/how-will-aditya-l1-not-burn/533872/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_men_6444ced6-17ee-45d7-8449-174bf1d49b40.jpeg",
            "publishedAt": "2023-12-16T15:32:15Z",
            "content": "Summary:The Aditya-L1 mission, India’s first solar mission, is set to launch in the near future. One of the major concerns surrounding this mission is how the spacecraft will not burn when it gets cl… [+3412 chars]"
          }
        ]
      },
      {
        "sports": [
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Watch: How MI beat the odds to sign Rohit Sharma at IPL auction - Hindustan Times",
            "description": "Rohit Sharma was Mumbai Indians' record signing when the franchise roped in the Indian batter for $2,000,000 (INR 13 crore) at the IPL auction. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/mi-signed-rohit-sharma-ipl-2011-auction-explained-overprized-kkr-csk-snub-watch-viral-video-usd-2-million-mumbai-indians-101702870727923.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/MixCollage-18-Dec-2023-02-15-PM-3062_1702891737601_1702891743090.jpg",
            "publishedAt": "2023-12-18T09:30:21Z",
            "content": "Rohit Sharma was already an Indian Premier League (IPL) winner before he joined Mumbai Indians (MI) for the 2011 edition of the cash-rich league. The premier batter was roped in by Mumbai Indians for… [+2659 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Rajat Patidar or Rinku Singh - India face batting conundrum ahead of second ODI against South Africa - IndiaTimes",
            "description": "Cricket News: Team India faces a selection dilemma over the batting spot for the second ODI against South Africa, with left-hander Rinku Singh and right-hander Raja",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/rajat-patidar-or-rinku-singh-india-face-batting-conundrum-ahead-of-second-odi-against-south-africa/articleshow/106086107.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106086286,width-1070,height-580,imgsize-67864,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T08:58:54Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Memes galore as driver shuts door just as Ruturaj Gaikwad is about to enter bus - Hindustan Times",
            "description": "There was no shortage of memes after a hilarious incident involving Ruturaj Gaikwad and the Indian team bus emerged on the internet. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/watch-memes-flood-the-internet-as-driver-shuts-door-just-when-ruturaj-gaikwad-is-about-to-enter-bus-101702886303253.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/gaikwad-bus_1702888023736_1702888028750.jpg",
            "publishedAt": "2023-12-18T08:13:30Z",
            "content": "Ruturaj Gaikwad was in for a rude surprise when the India batter was denied entry into the team bus ahead of India's eight-wicket-win over South Africa in the 1st ODI at Johannesburg on Sunday. Gaikw… [+1850 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'We have got a strong core...': RCB reveal their strategy ahead of IPL auction - IndiaTimes",
            "description": "Cricket News: Royal Challengers Bangalore are focusing on acquiring additional bowling options to support pace leader Mohammad Siraj during the upcoming IPL auction",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/we-have-got-a-strong-core-rcb-reveal-their-strategy-ahead-of-ipl-auction/articleshow/106083668.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106083762,width-1070,height-580,imgsize-72418,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T08:09:33Z",
            "content": "Arshdeep, Avesh on fire as India crush Proteas in 1st ODI"
          },
          {
            "source": {
              "id": null,
              "name": "Managing Madrid"
            },
            "author": "Lucas Navarrete",
            "title": "Injury update: Real Madrid confirm Alaba's ACL tear - Managing Madrid",
            "description": "Devastating news for the defender.",
            "url": "https://www.managingmadrid.com/2023/12/18/24005893/alaba-knee-injury-2023-news",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/_IYfet8aXhPaEn8E1hIYwPlCips=/0x169:3000x1740/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25170719/1863157180.jpg",
            "publishedAt": "2023-12-18T07:54:29Z",
            "content": "Real Madrid have published a medical report confirming that defender David Alaba suffered a torn ACL during Sunday's match against Villarreal. \r\nFollowing tests carried out on our player David Alaba,… [+538 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sydneythunder.com.au"
            },
            "author": "sydney-thunder",
            "title": "Sydney Thunder share 14-player squad in gear up to Adelaide Strikers match - Sydney Thunder",
            "description": "Enjoy the fun and excitement of the KFC T20 Big Bash League with international stars playing alongside Australia’s best home grown talent.",
            "url": "https://www.sydneythunder.com.au/news/3827988/sydney-thunder-share-14-player-squad-in-gear-up-to-adelaide-strikers-match",
            "urlToImage": "https://resources.sydney-thunder.pulselive.com/sydney-thunder/photo/2023/12/18/482a733d-a324-409c-a153-1a0412a2805d/Web.png",
            "publishedAt": "2023-12-18T07:01:06Z",
            "content": "Sydney Thunder will face Adelaide Strikers at Adelaide Oval tomorrow at 7:15PM ACDT. \r\nThunder lost out by 20 runs to Brisbane Heat in their first game of the competition last week, whereas Strikers … [+816 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "‘Hope Hardik does not…’: Manjrekar's honest take on Rohit's replacement at MI - Hindustan Times",
            "description": "Sanjay Manjrekar has shared his views about Mumbai Indians (MI) replacing Rohit Sharma with Hardik Pandya as the captain of the IPL franchise.  | Cricket",
            "url": "https://www.hindustantimes.com/cricket/hope-hardik-pandya-does-not-sanjay-manjrekar-honest-take-mi-announce-rohit-sharma-successor-ipl-2024-mumbai-indians-101702879779870.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/MixCollage-18-Dec-2023-11-42-AM-1472_1702882555542_1702882564337.jpg",
            "publishedAt": "2023-12-18T06:57:17Z",
            "content": "Days before the mini-auction of the Indian Premier League (IPL) for season 2024, record-time winners Mumbai Indians (MI) announced the successor of captain Rohit Sharma. All-rounder Hardik Pandya was… [+2155 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Amitabh Bachchan joins Indian Street Premier League as Mumbai team owner - IndiaTimes",
            "description": "Cricket News: Amitabh Bachchan has signed a partnership with the Indian Street Premier League (ISPL), the country's first T10 cricket tournament, as the owner of th",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/news/amitabh-bachchan-joins-indian-street-premier-league-as-mumbai-team-owner/articleshow/106080986.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106081125,width-1070,height-580,imgsize-29546,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T06:51:01Z",
            "content": "After Shah Rukh Khan, Akshay Kumar becomes a proud owner of a cricket team; details inside"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "From Cummins to Brook, top cricketers anticipate big bids in IPL 2024 auction - IndiaTimes",
            "description": "Cricket News: The Indian Premier League (IPL) auction will take place in Dubai on Tuesday, featuring top cricketers with bids starting from a base price of Rs 2 cro",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/from-cummins-to-brook-top-cricketers-anticipate-big-bids-in-ipl-2024-auction/articleshow/106079288.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106080036,width-1070,height-580,imgsize-57834,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T06:28:42Z",
            "content": "Arshdeep, Avesh on fire as India crush Proteas in 1st ODI"
          },
          {
            "source": {
              "id": null,
              "name": "Cricbuzz"
            },
            "author": null,
            "title": "There's no doubt Pakistan can beat Australia in Australia: Hafeez | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "Pakistan suffered a humbling defeat in Perth but Team Director Mohammad Hafeez reckons they have the talent to win a Test in Australia",
            "url": "https://www.cricbuzz.com/cricket-news/128854/theres-no-doubt-pakistan-can-beat-australia-in-australia-hafeez",
            "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c366298/shan-masoods-side-capitulated.jpg",
            "publishedAt": "2023-12-18T05:28:28Z",
            "content": "Shan Masood's side capitulated on a crumbling Day 4 pitch in Perth. © AFP\r\nDespite the humbling Pakistan were handed in Perth, team director Mohammad Hafeez reckoned they have the talent to beat Aust… [+3560 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Srimoyee Chowdhury",
            "title": "Viral video: Even 2 snakes couldn't stop this Australian man from playing golf - India Today",
            "description": "A video taken in Australia's Brisbane shows a man playing golf casually beside two huge snakes.",
            "url": "https://www.indiatoday.in/trending-news/story/australian-man-plays-golf-casually-as-two-snakes-fight-beside-him-2477257-2023-12-18",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/snake-181834559-16x9_0.jpg?VersionId=ETFE7hxTf4sJMhLtplUR7fsQRCDfNBre",
            "publishedAt": "2023-12-18T05:20:17Z",
            "content": "A golfer has become the subject of a viral video for his calm demeanour in the presence of two snakes on a Brisbane golf course. The clip captures the man continuing his game of golf, unbothered by t… [+1185 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Adelaidestrikers.com.au"
            },
            "author": "adelaide-strikers",
            "title": "Leading Premier Cricket all-rounder joins Strikers - Adelaide Strikers",
            "description": "Take your family to an Adelaide Strikers match and enjoy an affordable, fun and entertaining night out during the school holidays.",
            "url": "https://www.adelaidestrikers.com.au/news/3827946/leading-premier-cricket-all-rounder-joins-strikers",
            "urlToImage": "https://resources.adelaide-strikers.pulselive.com/adelaide-strikers/photo/2023/12/18/d13e641a-24a7-467b-8f9d-17ae7af95ba1/Kann-Signing-1200x675.jpg",
            "publishedAt": "2023-12-18T03:41:51Z",
            "content": "After being the leading run-scorer and leading wicket-taker in SACA Premier Crickets West End Twenty20 Cup this season, Northern Districts all-rounder Josh Kann has been signed as a local replacement… [+1850 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "On Nathan Lyon Completing 500 Test Wickets, Ravichandran Ashwin's Massive 'GOAT' Reaction - NDTV Sports",
            "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
            "url": "https://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
            "publishedAt": "2023-12-18T03:22:44Z",
            "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Jamieson rested for remainder of Bangladesh ODI series - ESPNcricinfo",
            "description": "Finn Allen, meanwhile, will miss the second ODI to do duty for Auckland Aces in the Super Smash",
            "url": "https://www.espncricinfo.com/story/nz-vs-ban-kyle-jamieson-rested-for-remainder-of-bangladesh-odi-series-1413337",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/370500/370556.6.jpg",
            "publishedAt": "2023-12-18T03:08:19Z",
            "content": "NewsFinn Allen, meanwhile, will miss the second ODI to do duty for Auckland Aces in the Super Smash"
          },
          {
            "source": {
              "id": null,
              "name": "Bavarian Football Works"
            },
            "author": "TomAdams71",
            "title": "Thomas Müller delighted to have played a crucial role in Bayern Munich’s 3-0 win over Stuttgart - Bavarian Football Works",
            "description": "Thomas Müller was back in the starting lineup and he was as effective as ever.",
            "url": "https://www.bavarianfootballworks.com/2023/12/18/24005334/bayern-munich-vfb-stuttgart-thomas-muller-harry-kane-kim-bundesliga-win-reaction-frankfurt-response",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/UU7cjGsp2WNRrSrvjQNdUuivD6g=/0x0:5125x2683/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25169654/1855949258.jpg",
            "publishedAt": "2023-12-18T02:00:00Z",
            "content": "Bayern Munich put the residual hangover from last weekends crushing 5-1 defeat at Eintracht Frankfurt to bed with their complete, dominant performance in beating VfB Stuttgart 3-0 in front of their h… [+2367 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "Alex Malcolm",
            "title": "Morris released from Australia Test squad to play BBL - ESPNcricinfo",
            "description": "There has been some tension about availability of fringe Australia players for the tournament",
            "url": "https://www.espncricinfo.com/story/australia-news-lance-morris-released-from-test-squad-to-play-bbl-for-perth-scorchers-1413334",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/352700/352795.6.jpg",
            "publishedAt": "2023-12-18T01:05:11Z",
            "content": "NewsThere has been some tension about availability of fringe Australia players for the tournament\r\nLance Morris will have a chance to return to Perth Scorchers  •  Getty Images\r\nLance Morris has been… [+2202 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Inter Milan may be BETTER than last season! 😮 - Gab Marcotti | ESPN FC - ESPN UK",
            "description": null,
            "url": "https://www.youtube.com/watch?v=vfDkdE5qy0A",
            "urlToImage": null,
            "publishedAt": "2023-12-17T23:38:33Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
          },
          {
            "source": {
              "id": null,
              "name": "Goal.com"
            },
            "author": "Alex Brotherton",
            "title": "Revealed: Virgil van Dijk fumes with Andre Onana in the tunnel over alleged time wasting as Man Utd goalkeeper winds up Liverpool captain with hilarious response - GOAL English",
            "description": "Andre Onana gave a hilarious reponse when Virgil van Dijk accused the goalkeeper of time-wasting during Man Utd's 0-0 draw with Liverpool.",
            "url": "https://www.goal.com/en-in/lists/man-utd-andre-onana-liverpool-van-dijk-premier-league/blt630cfe534537c877",
            "urlToImage": "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt21e142a63f6d7eac/656863b2f6c6c8040a2fd969/GOAL_-_Blank_WEB_-_Facebook.jpg",
            "publishedAt": "2023-12-17T22:49:18Z",
            "content": "Andre Onana gave a hilarious reponse when Virgil van Dijk accused the goalkeeper of time-wasting during Man Utd's 0-0 draw with Liverpool.\r\nArticle continues below\r\nArticle continues below\r\nArticle c… [+154 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sporting News"
            },
            "author": null,
            "title": "PSG player ratings vs Lille: Kylian Mbappe can’t spare his side’s blushes from the spot as Jonathan David scores last-gasp equaliser to extend 15-game unbeaten run - GOAL English",
            "description": "Get all the latest Soccer news, highlights, scores, schedules, standings and more from Sporting News Canada.",
            "url": "https://www.sportingnews.com/ca/soccer",
            "urlToImage": "https://static.sportingnews.com/1.40.1.1/themes/custom/tsn/logo.jpg",
            "publishedAt": "2023-12-17T22:02:46Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Zee News Desk",
            "title": "Highlights | IND Vs SA, 1st ODI Cricket Scorecard: Sai Sudharsan Scores Fifty As India Beat South Af - Zee News",
            "description": "Highlights | IND Vs SA, 1st ODI Cricket Scorecard: Sai Sudharsan Scores Fifty As India Beat South Af",
            "url": "https://zeenews.india.com/cricket/highlights/live-cricket-score-ind-vs-sa-1st-odi-match-cricket-match-today-india-vs-south-africa-cricket-live-score-updates-new-wanderers-stadium-johannesburg-kl-rahul-aiden-markram-117-runs-2nd-innings-target-for-ind-2699695",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/17/1337625-nz-7.png",
            "publishedAt": "2023-12-17T18:38:40Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "WORK & EFFORT IN TRAINING SESSION | FC Barcelona training 🔵🔴 - FC Barcelona",
            "description": "After picking up a point in Mestalla on Saturday, the blaugrana squad carry out a typical post game workout. On Sunday the available first team players took ...",
            "url": "https://www.youtube.com/watch?v=-pVL6bnXAMU",
            "urlToImage": "https://i.ytimg.com/vi/-pVL6bnXAMU/maxresdefault.jpg",
            "publishedAt": "2023-12-17T18:22:57Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "James Olley",
            "title": "Classy Arsenal end bad run vs. Brighton to capitalise on Man City's stumble in title race - ESPN India",
            "description": "Arsenal's title hopes rest on improving on last season, and so Sunday's 2-0 win over Brighton is an important step in that search for marginal gains.",
            "url": "https://www.espn.in/football/story/_/id/39132920/arsenal-end-bad-run-vs-brighton-capitalise-man-city-stumble-premier-league-title-race",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1217%2Fr1267487_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-17T17:30:00Z",
            "content": "LONDON -- Arsenal's Premier League title hopes rest on finding improvements from last season, so Sunday's 2-0 win over Brighton &amp; Hove Albion is an important step in that search for marginal gain… [+5591 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Gametube",
            "title": "BMPS 2023 Grand Finals: Winners, prize pool distribution, MVP, overall standings, and more - Sportskeeda",
            "description": "Blind Esports has been crowned as the champions of BMPS 2023 after the Manya-led superstar roster single-handedly dominated the three-day Grand Finals.",
            "url": "https://www.sportskeeda.com/bgmi/news-bmps-2023-grand-finals-winners-prize-pool-distribution-mvp-overall-standings",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/894b9-17028316882275-1920.jpg",
            "publishedAt": "2023-12-17T17:23:48Z",
            "content": "Blind Esports has been crowned as the champions of BMPS 2023 after the Manya-led superstar roster single-handedly dominated the three-day Grand Finals. They came out victorious in three out of 18 mat… [+2461 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "Sportstar",
            "title": "PKL 2023, Match Day 15 Highlights: Mumba secures dominant 46-33 win over Thalaivas; Jaipur comes back to win 29-28 vs Patna Pirates - Sportstar",
            "description": null,
            "url": "https://sportstar.thehindu.com/kabaddi/pro-kabaddi-league-live-score-pkl-10-updates-streaming-patna-vs-jaipur-mumba-v-thalaivas-highlights-news/article67647789.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-17T17:03:45Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Venkatesh Ravichandran",
            "title": "\"Don't see Mahendra Singh Dhoni changing his opening combination\" - Sanjay Manjrekar on why CSK wouldn't plunge for Rachin Ravindra at the IPL auction - Sportskeeda",
            "description": "Former Indian batter Sanjay Manjrekar reckons the Chennai Super Kings (CSK) won't invest in the New Zealand batter Rachin Ravindra in the upcoming IPL 2024 auction on December 19.",
            "url": "https://www.sportskeeda.com/cricket/news-don-t-see-mahendra-singh-dhoni-changing-opening-combination-sanjay-manjrekar-csk-plunge-rachin-ravindra-ipl-auction",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/3443e-17028291502585-1920.jpg",
            "publishedAt": "2023-12-17T17:03:23Z",
            "content": "Former Indian batter Sanjay Manjrekar reckons the Chennai Super Kings (CSK) won't invest in the New Zealand batter Rachin Ravindra in the upcoming IPL 2024 auction on December 19.\r\nDespite being pric… [+2580 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Sandip Sikdar",
            "title": "What Lucknow Super Giants need to do at IPL 2024 Auction - Hindustan Times",
            "description": "Having made the playoffs in their first two IPL seasons, their fresh auction strategy is also likely to have the imprint of new coach Justin Langer | Cricket",
            "url": "https://www.hindustantimes.com/cricket/strategic-buys-will-be-key-for-well-balanced-lsg-what-lucknow-super-giants-need-to-do-at-ipl-2024-auction-101702827697566.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/PTI04-14-2023-000290A-0_1684642735196_1702827856121.jpg",
            "publishedAt": "2023-12-17T15:48:00Z",
            "content": "In its two years of existence, Lucknow Super Giants have already made a mark in the Indian Premier League (IPL). One of the two new outfits with Gujarat Titans, the KL Rahul-led side made the playoff… [+3741 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": null,
            "title": "29-day FIFA Club World Cup in U.S. set for '25 - ESPN India",
            "description": "FIFA's revamped Club World Cup planned for 2025 and set to feature 32 teams will be played from June 15 to July 13 in the U.S., Gianni Infantino confirmed on Sunday.",
            "url": "https://www.espn.in/football/story/_/id/39132546/fifa-announces-29-day-schedule-2025-club-world-cup-us",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1217%2Fr1267485_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-17T15:33:00Z",
            "content": "FIFA's revamped Club World Cup planned for 2025 and set to feature 32 teams will be played from June 15 to July 13, while a new Intercontinental Cup will be played annually starting next year, Gianni… [+1772 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Gavaskar's verdict on Rohit-led India's chances of maiden Test series win in SA - Hindustan Times",
            "description": "India are slated to play two Test matches against South Africa following, starting with the Boxing Day game on December 26 | Cricket",
            "url": "https://www.hindustantimes.com/cricket/they-missed-out-big-time-in-2018-but-now-if-they-can-sunil-gavaskar-on-india-chances-of-maiden-test-series-win-in-sa-101702822083660.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/final_friontier_1702823477507_1702823483396.jpg",
            "publishedAt": "2023-12-17T15:04:35Z",
            "content": "The era of Sunil Gavaskar never travelled to South Africa for a Test series. But he sure has watched Indian teams, under various captains, and umpteen match-winners, travel to the Rainbow nation over… [+2679 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "Danyal Rasool",
            "title": "Pakistan arrange a two-day practice game before second Test - ESPNcricinfo",
            "description": "This wasn't part of the original schedule, but concerns around lack of match practice led to Pakistan requesting for an extra game",
            "url": "https://www.espncricinfo.com/story/pakistan-to-play-a-two-day-practice-game-before-second-test-1413313",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372700/372715.6.jpg",
            "publishedAt": "2023-12-17T15:03:24Z",
            "content": "NewsThis wasn't part of the original schedule, but concerns around lack of match practice led to Pakistan requesting for an extra game\r\nDanyal Rasool is ESPNcricinfo's Pakistan correspondent. @Danny6… [+3 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cricbuzz"
            },
            "author": null,
            "title": "BCCI to incentivise international appearances for uncapped IPL players | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "An uncapped player's league fee will no longer be constant for three years if he breaks through in international cricket",
            "url": "https://www.cricbuzz.com/cricket-news/128850/bcci-to-incentivise-international-appearances-for-uncapped-ipl-players",
            "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c366251/an-uncapped-players-league-fe.jpg",
            "publishedAt": "2023-12-17T15:00:38Z",
            "content": "An uncapped player's league fee will no longer be constant for three years if he breaks through in international cricket © BCCI\r\nThe BCCI are set to announce an incentive plan for uncapped players ah… [+3063 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Sai Sudharsan, bought by Gujarat Titans for ₹20 lakh, shines in his ODI debut | Mint - Mint",
            "description": "He made the chase look like a cakewalk. Sai Sudharsanreached his maiden ODI fifty in 41 balls, with eight fours in his debut ODI match",
            "url": "https://www.livemint.com/sports/cricket-news/meet-sai-sudharsan-gts-rising-star-who-made-odi-debut-for-india-in-series-opener-vs-south-africa-11702818086744.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/ANI-20231217228-0_1702818086266_1702818175291.jpg",
            "publishedAt": "2023-12-17T14:57:51Z",
            "content": "Sai Sudharsan was acquired by Gujarat Titans for his base price of Rs20 lakh. Southpaw Sai Sudharsan burst onto the scene in the local domestic T20 league in Chennai with his nonchalant batting amass… [+5150 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Chessbase.in"
            },
            "author": "Shahid Ahmed",
            "title": "Chennai Grand Masters 2023 R3: Arjun Erigaisi pulverizes Predke - ChessBase India",
            "description": "Arjun Erigaisi scored his first win of the event against...",
            "url": "https://www.chessbase.in/news/Chennai-Grand-Masters-2023-Round-3-report",
            "urlToImage": "https://cbin.b-cdn.net/img/AR/Arjun%20Erigaisi_R80P7_1000x750.jpeg?size=800",
            "publishedAt": "2023-12-17T14:31:57Z",
            "content": "Arjun Erigaisi scored his first win of the event\r\nChennai Grand Masters 2023 Official logo\r\nHarikrishna - Eljanov: 0.5-0.5\r\nThe sole rated game played earlier this year between GM Pentala Harikirshna… [+4532 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "Sportstar",
            "title": "India should think of hosting few matches of 2034 World Cup in Saudi: AIFF president to members - Sportstar",
            "description": null,
            "url": "https://sportstar.thehindu.com/football/indian-football/india-hosting-2034-fifa-world-cup-matches-saudi-arabia-aiff-president-kalyan-chaubey/article67648065.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-17T14:30:20Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Olympics.com"
            },
            "author": "Olympics.com",
            "title": "Badminton, BWF World Tour Finals: All winners - complete list - Olympics",
            "description": "Viktor Axelsen and Tai Tzu-ying claimed record-breaking victories at the 2023 BWF World Tour Finals in Hangzhou, People's Republic of China. Find out all winners of the season-ending event here.",
            "url": "https://olympics.com/en/news/badminton-bwf-world-tour-finals-all-winners-complete-list",
            "urlToImage": "https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/frubikvqwokvgp9ptq4q",
            "publishedAt": "2023-12-17T14:26:00Z",
            "content": "The 2023 BWF World Tour Finals were played in Hangzhou, People's Republic of China from 13 to 17 December.\r\nTokyo 2020 Olympic champion Viktor Axelsen beat Shi Yuqi in the men's singles final, winnin… [+222 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "cricket.com.au"
            },
            "author": "Laura Jolly",
            "title": "Healy, Mooney hit fifties as Aussies warm up for India Test | cricket.com.au - cricket.com.au",
            "description": "Alyssa Healy, Beth Mooney and Lauren Cheatle were among those to impress as Australia got an early…",
            "url": "https://www.cricket.com.au/news/3826054/australia-women-test-practice-match-india-mumbai-xi-report-scores-mooney-healy-cheatle-litchfield-king",
            "urlToImage": "https://resources.cricket-australia.pulselive.com/cricket-australia/photo/2023/12/17/15c9916e-cdb8-461e-8379-5b3d89bdadf5/17healy-batting.jpg",
            "publishedAt": "2023-12-17T13:39:08Z",
            "content": "Alyssa Healy, Beth Mooney and Lauren Cheatle were among those to impress as Australia got an early look at the Wankhede conditionsAlyssa Healy has made a successful return from injury with the bat, s… [+6807 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cricbuzz"
            },
            "author": null,
            "title": "Vijay Hazare Trophy: Haryana's Perfect Ten and Menaria's revenge | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "Menaria was a part of the victorious side against a side he represented for fourteen years",
            "url": "https://www.cricbuzz.com/cricket-news/128849/vijay-hazare-trophy-haryanas-perfect-ten-and-menarias-revenge",
            "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c366250/menaria-was-a-part-of-the-vict.jpg",
            "publishedAt": "2023-12-17T13:18:31Z",
            "content": "Menaria was a part of the victorious side against a side he represented for fourteen years ©BCCI \r\nAshok Menaria boasts two Ranji titles, having been part of the triumphant Rajasthan team in the 2010… [+4667 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Bangladesh vs UAE, U19 Asia Cup Final Highlights: Bangladesh Bag Maiden Title With Big Win - NDTV Sports",
            "description": "UAE vs Bangladesh, U19 Asia Cup 2023 Final Highlights: After setting a target of 283 for their opponents, Bangladesh bundled out UAE for 87 runs.",
            "url": "http://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://c.ndtvimg.com/2023-12/ivuurg4o_bangladesh-u19-x_625x300_17_December_23.jpg",
            "publishedAt": "2023-12-17T11:54:00Z",
            "content": "Under-19 Asia Cup 2023 Final, UAE vs Bangladesh Highlights: Bangladesh thrashed UAE by 195 runs at Dubai International Cricket Stadium on Sunday to claim their maiden U19 Asia Cup title. After settin… [+396 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Worldathletics.org"
            },
            "author": null,
            "title": "Ebenyo and Kebede set world bests for stand-alone 25km in Kolkata | REPORTS - World Athletics",
            "description": "Sutume Asefa Kebede and Daniel Ebenyo set course records to win in Kolkata, achieving two of the fastest 25km performances of all time",
            "url": "https://worldathletics.org/competitions/world-athletics-label-road-races/news/tata-steel-kolkata-25km-kebede-ebenyo",
            "urlToImage": "https://assets.aws.worldathletics.org/large/657ed95d86766970c5e1f696.JPG",
            "publishedAt": "2023-12-17T11:31:26Z",
            "content": "Daniel Ebenyo and Sutume Asefa Kebede set course records to win at the Tata Steel Kolkata 25K, a World Athletics Elite Label road race, on Sunday (17), achieving two of the fastest 25km performances … [+2747 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Shami and Kishan to miss South Africa Tests, Chahar unavailable for ODIs - ESPNcricinfo",
            "description": "Shreyas Iyer, meanwhile, will leave the ODI squad after the first game to prepare for the Test series",
            "url": "https://www.espncricinfo.com/story/india-in-south-africa-mohammed-shami-ishan-kishan-to-miss-tests-deepak-chahar-unavailable-for-odis-1413015",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/361300/361324.6.jpg",
            "publishedAt": "2023-12-17T11:04:57Z",
            "content": "NewsShreyas Iyer, meanwhile, will leave the ODI squad after the first game to prepare for the Test series"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Ishan Kishan pulls out of South Africa Test series, KS Bharat named replacement - IndiaTimes",
            "description": "Cricket News: Indian team's premier wicketkeeper-batter Ishan Kishan will not be a part of the upcoming two-Test series against South Africa as he has flown back ho",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/ishan-kishan-pulls-out-of-south-africa-test-series-ks-bharat-named-replacement/articleshow/106064133.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106064146,width-1070,height-580,imgsize-30196,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T11:03:06Z",
            "content": "Arshdeep, Avesh on fire as India crush Proteas in 1st ODI"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Farzan Mohamed",
            "title": "Pro Kabaddi 2023 Points Table: Updated standings on Day 14 after PUN vs BEN PKL 2023 match - Sportskeeda",
            "description": "Puneri Paltan (previously sixth) have moved to the third position in the Pro Kabaddi 2023 points table with a 30-point victory over table-toppers Bengal Warriors.",
            "url": "https://www.sportskeeda.com/kabaddi/news-pro-kabaddi-2023-points-table-updated-standings-day-14-pun-vs-ben-pkl-2023-match",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/d6477-17028092639360-1920.jpg",
            "publishedAt": "2023-12-17T10:36:50Z",
            "content": "Puneri Paltan (previously sixth) have moved to the third position in the Pro Kabaddi 2023 points table with a 30-point victory over table-toppers Bengal Warriors.\r\nThey have 16 points from four match… [+1535 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Sydney Morning Herald"
            },
            "author": "Daniel Brettig",
            "title": "Pakistan’s capitulation should see Perth become Australia’s new ‘Gabbatoir’ - Sydney Morning Herald",
            "description": "Australia’s destruction of Pakistan showed why Perth has a strong case to host the opening Test each summer, and why Pat Cummins’ team would be happy for that to happen.",
            "url": "https://www.smh.com.au/sport/cricket/demolition-of-pakistan-shows-why-perth-is-perfect-place-to-test-tourists-20231217-p5es0n.html",
            "urlToImage": "https://static.ffx.io/images/$zoom_0.883%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_55/t_crop_custom/q_86%2Cf_jpg/t_smh_analysis_no_age_social_wm/1c4e82c396d15ee2369e8f624f2d914ae184fd94",
            "publishedAt": "2023-12-17T09:31:46Z",
            "content": "All that remained was for Nathan Lyon to scoop his 500th wicket, something he did with typical precision to win an lbw verdict via DRS against Saud Shakeel. A small Sunday crowd in Perth duly deliver… [+2871 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Wisden.com"
            },
            "author": "Abhishek Mukherjee",
            "title": "Perth Stadium evicts spectators for banner matching Usman Khawaja’s message - Wisden",
            "description": "The Perth Stadium authorities evicted spectators who carried a banner matching the message Usman Khawaja had to remove from his shoes.",
            "url": "https://wisden.com/series-stories/australia-v-pakistan-2023-24/perth-stadium-evicts-spectators-banner-matching-usman-khawajas-message-aus-v-pak",
            "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2023/12/GettyImages-1445653687.jpg",
            "publishedAt": "2023-12-17T09:22:11Z",
            "content": "The Perth Stadium authorities evicted spectators who carried a banner matching the message Usman Khawaja had to remove from his shoes.\r\nAhead of the first Test match against Pakistan, Usman Khawaja w… [+2109 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Australia set Pakistan imposing target as key batter is cleared of injury - ICC Cricket",
            "description": "Australian No.3 batter Marnus Labuschagne has been cleared of serious damage after being struck on the hand in the first Test against Pakistan in Perth.",
            "url": "https://www.icc-cricket.com/news/3825773",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/17/828b29ba-1979-49b6-b872-ed14baf60903/MarnusLabuschagne.png",
            "publishedAt": "2023-12-17T09:14:09Z",
            "content": "Australian No.3 batter Marnus Labuschagne has been cleared of serious damage after being struck on the hand in the first Test against Pakistan in Perth.Labuschagne was hit by fast bowler Khurram Shah… [+1949 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cricbuzz"
            },
            "author": null,
            "title": "Young ton, Latham 92 power NZ to victory in ODI opener | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "Bangladesh falter despite a bright start to the game",
            "url": "https://www.cricbuzz.com/cricket-news/128845/young-ton-latham-92-power-nz-to-victory-in-odi-opener",
            "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c366142/will-young-hit-14-fours-and-4.jpg",
            "publishedAt": "2023-12-17T08:28:18Z",
            "content": "Will Young hit 14 fours and 4 sixes in his 84-ball knock of 104 © Getty\r\nWill Young's second ODI ton and a quickfire 92 from captain Tom Latham helped New Zealand prevail in the rain-hit opening one-… [+3108 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Madriduniversal.com"
            },
            "author": "Anas Ali",
            "title": "Possible opponents Real Madrid could face in the Champions League round of 16 - Madrid Universal",
            "description": "As we approach the end of the year, top clubs across Europe are awaiting the draw for the UEFA Champions League Round of 16. Real Madrid are among the clubs to have claimed the top position in the recently-concluded group stages and are hoping for a favourabl…",
            "url": "https://madriduniversal.com/possible-opponents-real-madrid-could-face-in-the-champions-league-round-of-16/",
            "urlToImage": "https://madriduniversal.com/wp-content/uploads/2023/10/newcastle-united-fc-v-paris-saint-germain-group-f-uefa-champions-league-2023-24-2-1000x600.jpg",
            "publishedAt": "2023-12-17T08:01:36Z",
            "content": "As we approach the end of the year, top clubs across Europe are awaiting the draw for the UEFA Champions League Round of 16.\r\nReal Madrid are among the clubs to have claimed the top position in the r… [+1581 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Manjrekar's crucial advice for KL Rahul as India meet SA in 1st ODI - Hindustan Times",
            "description": "Sanjay Manjrekar shared his views about KL Rahul's batting position in the lead-up to the 1st ODI between India and South Africa.  | Cricket",
            "url": "https://www.hindustantimes.com/cricket/sanjay-manjrekar-crucial-advice-for-kl-rahul-as-india-meet-sa-in-1st-odi-you-would-not-want-to-change-101702795459679.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/MixCollage-17-Dec-2023-12-46-PM-582_1702799967823_1702799976156.jpg",
            "publishedAt": "2023-12-17T08:00:38Z",
            "content": "Sanjay Manjrekar shared his views about KL Rahul's batting position(AFP-Getty Images)\r\nMoving on from the One Day International (ODI) World Cup 2023 heartbreak, Team India has returned to the 50-over… [+2321 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "New Zealand boosted by the return of Williamson in T20Is - ICC Cricket",
            "description": "Kane Williamson returns as New Zealand captain for the T20Is against Bangladesh, beginning 27 December.",
            "url": "https://www.icc-cricket.com/news/3825814",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/17/1ec7d473-5f86-435d-9bf2-38bcd152629d/GettyImages-1442937586.jpg",
            "publishedAt": "2023-12-17T07:45:57Z",
            "content": "Kane Williamson returns as New Zealand captain for the T20Is against Bangladesh, beginning 27 December.Williamson will be playing the format after a gap of more than a year, having last participated … [+2064 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "Abhimanyu Bose",
            "title": "Recent Match Report - Zimbabwe vs Ireland 3rd ODI 2023/24 - ESPNcricinfo",
            "description": "It was their first ODI series victory in Zimbabwe",
            "url": "https://www.espncricinfo.com/series/ireland-in-zimbabwe-2023-24-1408099/zimbabwe-vs-ireland-3rd-odi-1408108/match-report",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372700/372767.6.jpg",
            "publishedAt": "2023-12-17T07:22:35Z",
            "content": "ReportIt was their first ODI series victory in Zimbabwe\r\nCurtis Campher and Andy Balbirnie added 70 runs for the second wicket  •  Zimbabwe Cricket\r\nIreland 204 for 3 (Balbirnie 82*, Campher 40, Mavu… [+3786 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Urvi Mehra",
            "title": "\"Much better than Rafael Nadal expected\" - Spaniard 'convinced' of competitive edge after training with Arthur Fils in Kuwait, says coach Carlos Moya - Sportskeeda",
            "description": "Rafael Nadal's coach, Carlos Moya, has shared that Nadal's practice sessions with rising star Arthur Fils have delivered very promising results.",
            "url": "https://www.sportskeeda.com/tennis/news-much-better-rafael-nadal-expected-spaniard-convinced-competitive-edge-training-arthur-fils-kuwait-says-coach-carlos-moya",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/3b915-17027755120983-1920.jpg",
            "publishedAt": "2023-12-17T06:23:00Z",
            "content": "Rafael Nadal's coach, Carlos Moya, has shared that Nadal's practice sessions with rising star Arthur Fils have delivered very promising results.\r\nNadal is set to make his highly anticipated comeback … [+3251 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Recent Match Report - S Africa (W) vs BDESH (W) 1st ODI 2023/24 - ESPNcricinfo",
            "description": "It was Bangladesh's first victory in the format over the hosts since 2017, as they registered their biggest win by runs",
            "url": "https://www.espncricinfo.com/series/bangladesh-women-in-south-africa-2023-24-1398249/south-africa-women-vs-bangladesh-women-1st-odi-1398258/match-report",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372700/372755.6.jpg",
            "publishedAt": "2023-12-17T05:57:24Z",
            "content": "ReportIt was Bangladesh's first victory in the format over the hosts since 2017, as they registered their biggest win by runs"
          },
          {
            "source": {
              "id": null,
              "name": "Wisden.com"
            },
            "author": "Abhishek Mukherjee",
            "title": "Heather Knight labels conditions for India Test ‘extreme’ - Wisden",
            "description": "England captain Heather Knight expressed her opinion after India trounced England by a record 347 runs in the Navi Mumbai Test match,",
            "url": "https://wisden.com/series-stories/india-women-v-england-women-2023-24/heather-knight-pitch-conditions-india-england-womens-test-extreme-ind-w-v-eng-w",
            "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2023/12/GettyImages-1500338302.jpg",
            "publishedAt": "2023-12-17T05:51:39Z",
            "content": "England captain Heather Knight expressed her opinion after India trounced England by a record 347 runs in the Navi Mumbai Test match,\r\nPlaying their first Test match on home soil after nine years, In… [+3355 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Crictracker.com"
            },
            "author": "Akshit Bhatnagar",
            "title": "NZ-W vs PAK-W Match Prediction – Who will win today's 3rd ODI match between New Zealand Women vs Pakistan Women? - CricTracker",
            "description": "New Zealand Women and Pakistan Women are all set to continue their ongoing ODI series by taking on each other in the third and final ODI of the series. The White Ferns have already won the first two O",
            "url": "https://www.crictracker.com/cricket-match-predictions/nz-w-vs-pak-w-match-prediction-who-will-win-todays-3rd-odi-match-between-new-zealand-women-vs-pakistan-women-6299/",
            "urlToImage": "https://media.crictracker.com/media/attachments/1702794854800_New-Zeland-Women-vs-Pakistan-Women.jpeg",
            "publishedAt": "2023-12-17T05:43:00Z",
            "content": "New Zealand Women and Pakistan Women are all set to continue their ongoing ODI series by taking on each other in the third and final ODI of the series. The White Ferns have already won the first two … [+2565 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Khelnow.com"
            },
            "author": "Author Name",
            "title": "PAT vs JAI Dream11 Prediction, Dream11 Starting 7, Match 27, PKL 10 - Khel Now",
            "description": "Dream11 fantasy XI tips and guide for match 27 of the PKL 2023 between PAT vs JAI to be played in Pune.",
            "url": "https://khelnow.com/kabaddi/2023-12-pkl-10-pat-vs-jai-dream11-predictions",
            "urlToImage": "https://assets-webp.khelnow.com/news/uploads/2023/12/23-PKL-2023-24-Fantasy-16-copy.jpg.webp",
            "publishedAt": "2023-12-17T05:25:03Z",
            "content": "It is the third week of season 10 of the Pro Kabaddi League and every team has played around four games. The position of the teams in the points table goes through rapid changes after every game. Tha… [+2956 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "4,6,6,2,6: Harry Brook speed dials KKR star to raise IPL stocks for IPL auction - Hindustan Times",
            "description": "Harry Brook batted at an incredible strike rate of 442.86 in the 3rd T20I against the West Indies. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/harry-brook-speed-dials-kkr-russell-raise-ipl-stocks-dubai-ipl-2024-auction-eng-vs-wi-3rd-t20i-watch-4-6-6-6-srh-101702784687768.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/West-Indies-England-Cricket-36_1702789214848_1702789242633.jpg",
            "publishedAt": "2023-12-17T05:02:59Z",
            "content": "Holding Harry Brook would have been a good option for Sunrisers Hyderabad (SRH) before the Indian Premier League (IPL) 2024 auction. Brook's crucial cameo powered England to a thrilling win over the … [+2847 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Venkatesh Ravichandran",
            "title": "\"Rode his luck early on and it could have gone either way\" - Mitchell Johnson amplifies his earlier take on David Warner - Sportskeeda",
            "description": "Mitchell Johnson continued to validate his claims on David Warner despite the opener scoring a masterful century on Day 1 of the ongoing first Test against Pakistan in Perth.",
            "url": "https://www.sportskeeda.com/cricket/news-rode-luck-early-gone-either-way-mitchell-johnson-amplifies-earlier-take-david-warner",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/3fe23-17027848578415-1920.jpg",
            "publishedAt": "2023-12-17T04:25:24Z",
            "content": "Mitchell Johnson continued to validate his claims on David Warner despite the opener scoring a masterful century on Day 1 of the ongoing first Test against Pakistan in Perth.\r\nIn an earlier column, J… [+3137 chars]"
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
              "name": "Cricbuzz"
            },
            "author": null,
            "title": "Australia vs Pakistan, 1st Test, Pakistan tour of Australia, 2023-24 - Cricbuzz",
            "description": "Follow Australia vs Pakistan, 1st Test, Dec 14, Pakistan tour of Australia, 2023-24 with live Cricket score, ball by ball commentary updates on Cricbuzz",
            "url": "https://www.cricbuzz.com/cricket-commentary/70305/aus-vs-pak-1st-test-pakistan-tour-of-australia-2023-24",
            "urlToImage": null,
            "publishedAt": "2023-12-17T03:56:17Z",
            "content": "Mitchell Marsh | Player of the Match - My first Test match at this stadium, first at Perth in six years, so it's a nice feeling. When I went out, the lead was big and so the pressure was off, but thi… [+226 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cricbuzz"
            },
            "author": null,
            "title": "Nowhere to hide against Australia's attack quadrant | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "Despite a plucky batting effort, Pakistan found themselves well behind the game after the first innings was done in Perth",
            "url": "https://www.cricbuzz.com/cricket-news/128839/nowhere-to-hide-against-australias-attack-quadrant",
            "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c366054/pat-cummins-worked-over-babar.jpg",
            "publishedAt": "2023-12-17T01:10:59Z",
            "content": "Pat Cummins worked over Babar Azam before Mitchell Marsh delivered the coup de grace. ©AFP \r\nWhat do you do when Pat Cummins is steaming in before landing every single ball on that Pat Cummins length… [+4396 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Sahil Malhotra",
            "title": "Rishabh Pant Update: BCCI, NCA Follow Patient Approach, Focus on “Complete Fitness” - News18",
            "description": "For the past few weeks, Rishabh Pant has been doing afternoon sessions under the watch of specialists at the National Cricket Academy.",
            "url": "https://www.news18.com/cricket/rishabh-pant-update-bcci-nca-follow-patient-approach-focus-on-complete-fitness-8706280.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/rishabh-pant-weightlifting-2023-12-b16f44016ee9b667a12ada68361df3ef-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-16T22:12:00Z",
            "content": "Its been 356 days since Rishabh Pant last played for India. The Test vs Bangladesh in Mirpur was the last time he donned the Indian jersey as a horrific car crash on December 30, 2022 made his career… [+4779 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Reuters",
            "title": "Pep blasts careless City: Didn't deserve to win - ESPN India",
            "description": "Manchester City manager Pep Guardiola blasted his team after their careless defending and a needless late-game penalty cost them a much-needed victory in a 2-2 draw with Crystal Palace on Saturday, saying they deserved the result.",
            "url": "https://www.espn.in/football/story/_/id/39126313/guardiola-careless-manchester-city-didnt-deserve-win-crystal-palace",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1216%2Fr1267193_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-16T21:16:00Z",
            "content": "Manchester City manager Pep Guardiola blasted his team after their careless defending and a needless late-game penalty cost them a much-needed victory in a 2-2 draw with Crystal Palace on Saturday, s… [+1818 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hockeyindia.org"
            },
            "author": null,
            "title": "Indian Men's Hockey Team goes down against Belgium in 5 Nations Tournament Valencia 2023 - Hockey India",
            "description": "The Indian Men’s Hockey Team lost to Belgium 2-7 in their second match of the 5 Nations Tournament Valencia 2023 on Saturday. Abhishek and Jugraj Singh were the two goal scorers for India.",
            "url": "https://www.hockeyindia.org/news/indian-mens-hockey-team-goes-down-against-belgium-in-5-nations-tournament-valencia-2023",
            "urlToImage": "https://www.hockeyindia.org/static-assets/waf-images/0c/1e/66/16-9/796-597/PK7fhijgO7.jpg",
            "publishedAt": "2023-12-16T18:19:22Z",
            "content": "~Abhishek and Jugraj Singh scored for India~ \r\nValencia, 16th December 2023: The Indian Men’s Hockey Team lost to Belgium 2-7 in their second match of the 5 Nations Tournament Valencia 2023 on Saturd… [+1245 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Revsportz.in"
            },
            "author": "S Kannan",
            "title": "FIH Jr. Men's World Cup: Junior Teams’ Flop Shows Reflect Poorly on Hockey’s Succession Planning - RevSportz",
            "description": "Success has many fathers, and failure none. Cliched as that may sound, the performance of India’s junior hockey teams, boys and girls, at the FIH Junior World Cups has been…",
            "url": "https://revsportz.in/junior-teams-flop-shows/",
            "urlToImage": "https://revsportz.in/wp-content/uploads/2023/12/hockeyind.jpeg",
            "publishedAt": "2023-12-16T18:09:12Z",
            "content": "The Indian team after their defeat against Spain in the Bronze medal match in the FIH Jr. Men’s World Cup 2023 (Image: Indian Hockey)\r\nSuccess has many fathers, and failure none. Cliched as that may … [+4376 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Reuters",
            "title": "Lockyer 'stable' after having cardiac arrest vs. Bournemouth - ESPN - ESPN India",
            "description": "The Premier League game between Bournemouth and Luton Town was suspended in the 65th minute after Luton captain Tom Lockyer collapsed on the pitch Saturday.",
            "url": "https://www.espn.in/football/story/_/id/39125011/bournemouth-luton-abandoned-lockyer-collapses",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1216%2Fr1267093_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-16T17:01:00Z",
            "content": "Luton Town have confirmed defender and club captain Tom Lockyer is in a \"stable\" condition in hospital after going into cardiac arrest on the pitch during his team's match at Bournemouth.\r\nThe Premie… [+3222 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "West Indies vs England 3rd T20I: Match Preview, Playing 11s, Weather Report, Live Streaming Telecast Info - ABP Live",
            "description": "West Indies vs England 3rd T20I: Here's everything you need to know about WI vs ENG 3rd T20I on Saturday, December 16, 2023 at Grenada's National Cricket Stadium.",
            "url": "https://news.abplive.com/sports/cricket/west-indies-vs-england-3rd-t20i-preview-playing-11s-weather-report-live-streaming-telecast-1650432",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/16/aac9fc9a3e37ee82db9d982b87d3d3ec170272956192524_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-16T12:26:35Z",
            "content": null
          }
        ]
      },
      {
        "business": [
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Motisons Jewellers IPO sees over 11-fold subscription, retail portion booked 17.74 times on debut - Moneycontrol",
            "description": "Motisons Jewellers IPO: Ahead of the IPO, the company mobilised Rs 36.3 crore from 2 anchor investors",
            "url": "https://www.moneycontrol.com/news/business/ipo/motisons-jewellers-ipo-subscription-updates-rs-151-crore-issue-closes-on-20-december-11920781.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Gold-jewellery-770x433.jpg",
            "publishedAt": "2023-12-18T10:27:09Z",
            "content": "Motisons Jewellers' Rs 151.09-crore public issue was subscribed 11.45 times so far on the first day of bidding on December 18. The issue received bids for 23.89 crore shares against an issue size of … [+1675 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "SpiceJet, 2 others in race to bid for bankrupt Go First; share price surges 20% - Moneycontrol",
            "description": "Last week, SpiceJet announced a plan to raise over Rs 2,250 crore by issuing up to 130 million convertible warrants. This capital infusion could support the airline in its potential acquisition of Go First, sources have said",
            "url": "https://www.moneycontrol.com/news/business/spicejet-2-others-in-race-to-bid-for-bankrupt-go-first-11920271.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/05/go-first-rep-770x433.jpg",
            "publishedAt": "2023-12-18T09:38:01Z",
            "content": "India's budget airline Spicejet, Sharjah-based Sky One company, and Africa-focused Safrik Investments have reportedly shown interest in buying the bankrupt carrier Go First.\r\nThe three have requested… [+2820 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Share Market Live: Nifty trades below 21,450, Sensex almost down by 150 points; Media and Metal index gains over 1% - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-share-market-live-sensex-nifty-may-open-flat-gift-nifty-up-asian-markets-trade-mixed-december-18-2023-monday-3340879/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T09:33:29Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "SamMobile"
            },
            "author": "SamMobile, Asif Iqbal Shaik",
            "title": "China bans Apple and Samsung phones from government offices and firms - SamMobile - Samsung news",
            "description": "As tensions between China and the US escalate, the two countries are trying to counter each other through certain measures. ...",
            "url": "https://www.sammobile.com/news/china-bans-apple-iphone-samsung-phones-government-offices-firms/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/08/Samsung-Galaxy-Z-Flip-5-Fold-5-China-720x405.jpg",
            "publishedAt": "2023-12-18T09:07:00Z",
            "content": "As tensions between China and the US escalate, the two countries are trying to counter each other through certain measures. The USA banned US-based chipmakers from exporting advanced chips and chip m… [+2001 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Arti Singh",
            "title": "Ebix Files for Chapter 11 Bankruptcy in Texas | Mint - Mint",
            "description": "CEO Robin Raina is the largest shareholder in the company owning 13.9% stake; and as of 31 December, 2022, Ebix Inc. had outstanding borrowings of $639.3 mn",
            "url": "https://www.livemint.com/companies/ebix-files-for-chapter-11-bankruptcy-in-texas-11702886194656.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/2-0-1309431910-robin-raina-0_1679981990059_1702890069912.jpg",
            "publishedAt": "2023-12-18T09:04:17Z",
            "content": "Indian-born American Robin Raina-led Ebix Inc. has filed for Chapter 11 bankruptcy in Northern District of Texas. \r\nOn 17 December, Nasdaq-listed Ebix Inc. and certain of its US subsidiaries filed a … [+3918 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Srimoyee Chowdhury",
            "title": "Anand Mahindra shares video of man making giant paratha. Abhishek Bachchan reacts - India Today",
            "description": "Anand Mahindra's recent share showing a gigantic paratha got a thumbs-up from Abhishek Bachchan.",
            "url": "https://www.indiatoday.in/trending-news/story/anand-mahindra-giant-paratha-video-abhishek-bachchan-reaction-2477352-2023-12-18",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/anand-mahindra-183130269-16x9_0.jpg?VersionId=UIyje35Z9VG4cuMgCWVcXKk85LRfCC2i",
            "publishedAt": "2023-12-18T08:32:51Z",
            "content": "Anand Mahindra recently shared a video on X that showcased the making of a giant paratha. Along with the video, Mahindra started quite a debate about which one is better - paratha and pizza. Actor Ab… [+1081 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Nitin Gadkari again says will not allow driverless cars in India - Hindustan Times",
            "description": "Driverless vehicles are appropriate only for countries with small populations, but not for India, as per the Union minister.",
            "url": "https://www.hindustantimes.com/car-bike/around-80-lakh-drivers-will-become-jobless-gadkari-again-says-will-not-allow-autonomous-cars-in-india-101702884761198.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/Union-transport-minister-Nitin-Gadkari-chaired-the_1674969588746_1702884842759.jpg",
            "publishedAt": "2023-12-18T08:27:50Z",
            "content": "Union minister Nitin Gadkari has once again asserted he will not allow driverless cars in India, saying that if autonomous vehicles are brought to the country, 'up to 80 lakh drivers would be left un… [+1321 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Nishant Kumar",
            "title": "Stocks to buy this week: ICICI Bank, Kotak Mahindra Bank, YES Bank, Wipro, Tata Steel among 9 technical picks | Mint - Mint",
            "description": "Experts recommend buying stocks like IRCTC, Kotak Mahindra Bank, YES Bank, KRBL, ICICI Bank, Mahindra and Mahindra Financial Services, Wipro, Tata Steel, and RBL Bank for healthy returns in the short term.",
            "url": "https://www.livemint.com/market/stock-market-news/stocks-to-buy-this-week-icici-bank-kotak-mahindra-bank-yes-bank-wipro-tata-steel-among-9-technical-picks-11702884666754.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/adam-smigielski-K5mPtONmpHM-unsplash_1700479308572_1702885312549.jpg",
            "publishedAt": "2023-12-18T07:45:50Z",
            "content": "The domestic market is teeming with positivity. Equity benchmark Nifty 50 is up about 7 per cent in December so far on account of strong buying by foreign portfolio investors amid robust macro number… [+8050 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Dhanya Nagasundaram",
            "title": "Inox India IPO LIVE subscription status: Issue subscribed 15.75 times so far on day 3; GMP drops | Mint - Mint",
            "description": "Inox India IPO has been oversubscribed on its third day, with a subscription of 15.75 times at 13:00 IST. Inox India IPO received overwhelming responses from both retail and non-institutional investors, with a subscription of 2.79 times on day 1 and 7.07 time…",
            "url": "https://www.livemint.com/market/ipo/inox-india-ipo-live-subscription-status-issue-subscribed-15-75-times-so-far-on-day-3-gmp-drops-11702882708196.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/INOX_LNG_1702224996875_1702884619476.jpg",
            "publishedAt": "2023-12-18T07:43:14Z",
            "content": "Inox India IPO subscription status: Inox India IPO has been oversubscribed on its third day after continuing to receive overwhelming responses from both retail and non-institutional investors (NIIs).… [+4244 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Muthoot Microfin IPO booked 60%, retail portion fully subscribed - Moneycontrol",
            "description": "Muthoot Microfin IPO: The price band of the offer, which will close on December 20, has been fixed at Rs 277-291 per share",
            "url": "https://www.moneycontrol.com/news/business/ipo/muthoot-microfin-ipo-day-1-subscription-updates-rs-960-crore-issue-closes-on-20-december-11920221.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/stock-photo-double-exposure-of-graph-and-rows-of-coins-for-finance-and-business-concept-530884738-770x433.jpg",
            "publishedAt": "2023-12-18T07:32:00Z",
            "content": "The Muthoot Microfin IPO has been subscribed 60 percent so far on the first day of bidding, December 18, with bids coming in for 1.45 crore shares as against an issue size of 2.43 crore shares.\r\nReta… [+2735 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ibm.com"
            },
            "author": null,
            "title": "IBM to Acquire StreamSets and webMethods Platforms from Software AG - IBM Newsroom",
            "description": "IBM announced that it has entered into a definitive agreement with Software AG to purchase StreamSets and webMethods, Software AG's Super iPaaS (integration platform-as-a-service) enterprise technology platforms, for €2.13 billion in cash.",
            "url": "https://newsroom.ibm.com/2023-12-18-IBM-to-Acquire-StreamSets-and-webMethods-Platforms-from-Software-AG",
            "urlToImage": "https://mma.prnewswire.com/media/95470/ibm_logo.jpg?p=facebook",
            "publishedAt": "2023-12-18T07:25:57Z",
            "content": "ARMONK, N.Y., Dec. 18, 2023 /PRNewswire/ -- IBM (NYSE: IBM) today announced that it has entered into a definitive agreement with Software AG (FRA: SOW), a company majority owned by Silver Lake, to pu… [+5244 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Bhavya Dilipkumar",
            "title": "Hyderabad auto, taxi drivers hitch ride on ONDC to launch ride-hailing app Yaary - Moneycontrol",
            "description": "Similar to Bengaluru's Namma Yatri platform, ONDC-backed Yaary also promises not to charge any commission from drivers on its platform",
            "url": "https://www.moneycontrol.com/news/business/startup/hyderabad-auto-taxi-drivers-hitch-ride-on-ondc-to-launch-ride-hailing-app-yaary-11919711.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/WhatsApp-Image-2023-12-18-at-12.15.22-1-580x435.jpeg",
            "publishedAt": "2023-12-18T07:23:25Z",
            "content": "The Hyderabad Auto and Taxi Drivers Association on December 18 announced the launch of Yaary, a ride-hailing app built on the governments Open Network for Digital Commerce (ONDC) protocols, that will… [+3035 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Business Desk",
            "title": "DOMS Industries IPO share allotment: Step-by-step guide to check status - India Today",
            "description": "Investors eagerly awaiting the outcome of their applications can check the IPO allotment status through the registrar's portal, managed by Link Intime India Private Ltd, in addition to the Bombay Stock Exchange and the National Stock Exchange.",
            "url": "https://www.indiatoday.in/business/story/doms-industries-ipo-share-allotment-finalised-today-step-by-step-guide-to-check-application-status-2477314-2023-12-18",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/doms-ipo-132237463-16x9_3.png?VersionId=IKKK.XAQn5soEzD9RDnXTQq9t770Q1gY",
            "publishedAt": "2023-12-18T07:21:31Z",
            "content": "The share allotment date for DOMS Industries IPO is all set to be finalised on Monday, December 18th. Investors eagerly awaiting the outcome of their applications can check the IPO allotment status t… [+2032 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tradebrains.in"
            },
            "author": "Trade Brains",
            "title": "Mulitbagger defence stock jumps up to 5% after it received an order worth $42 Million - Trade Brains",
            "description": "The share price of one of India’s leading warship builders gained 4.5 percent to an intraday high of Rs 2,176.85 per share after the company received an overseas order worth USD 42 million.",
            "url": "https://tradebrains.in/features/mulitbagger-defence-stock-jumps-up-to-5-after-it-received-an-order-worth-42-million/",
            "urlToImage": "https://tradebrains.in/features/wp-content/uploads/2023/06/Naval-Ship.jpg",
            "publishedAt": "2023-12-18T07:15:00Z",
            "content": "The share price of one of Indias leading warship builders gained 4.5 percent to an intraday high of Rs 2,176.85 per share after the company received an overseas order worth USD 42 million. \r\nAt 11:51… [+2820 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cardekho.com"
            },
            "author": "Rohit",
            "title": "3 New Kia Cars Confirmed For India Launch In 2024 - CarDekho",
            "description": "Although Kia only had one big launch in 2023, it is ready to go big with some flagship offerings lined up for India in 2024  In 2023, Kia India’s only launch was the facelifted Kia Seltos. As significant as that SUV is to Kia’s roster, it did seem like a slow…",
            "url": "https://www.cardekho.com/india-car-news/3-new-kia-cars-confirmed-for-india-launch-in-2024-31829.htm",
            "urlToImage": "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/31828/1702885328595/ElectricCar.jpg",
            "publishedAt": "2023-12-18T07:12:00Z",
            "content": "Although Kia only had one big launch in 2023, it is ready to go big with some flagship offerings lined up for India in 2024\r\nIn 2023, Kia Indias only launch was the facelifted Kia Seltos. As signific… [+2268 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Team-BHP"
            },
            "author": "Tushar Kelshikar",
            "title": "2024 Maruti WagonR facelift spied in India ahead of launch? - Team-BHP",
            "description": "A test mule of what is believed to be the 2024 Maruti WagonR facelift has been spotted testing for the first time. The spy image shared on social media reveals an updated version of the WagonR that could be introduced sometime next year. It features a new rea…",
            "url": "https://www.team-bhp.com/news/2024-maruti-wagonr-facelift-spied-india-ahead-launch",
            "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/maruti-suzuki-wagon-r-rear-view0.jpg",
            "publishedAt": "2023-12-18T07:08:51Z",
            "content": "A test mule of what is believed to be the 2024 Maruti WagonR facelift has been spotted testing for the first time.\r\nThe spy image shared on social media reveals an updated version of the WagonR that … [+690 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Business Desk",
            "title": "Will BSE Sensex, Nifty50 rally sustain? What historical data on 7-weeks of continuous upside suggests - IndiaTimes",
            "description": "India Business News: BSE Sensex, Nifty50 rally: The recent bullish trend in Indian equities, with seven consecutive weeks of gains, has market watchers speculating on a po",
            "url": "https://timesofindia.indiatimes.com/business/india-business/will-bse-sensex-nifty50-rally-sustain-what-historical-data-on-7-weeks-of-continuous-upside-suggests/articleshow/106080507.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106081121,width-1070,height-580,imgsize-57600,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T06:51:59Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "From Demat Nomination To Aadhaar Update, Changes Coming Into Effect From January 1 - NDTV",
            "description": "These changes will impact the day-to-day lives of individuals across the country.",
            "url": "https://www.ndtv.com/india-news/from-demat-nomination-to-aadhaar-update-changes-coming-into-effect-from-january-1-4695285",
            "urlToImage": "https://c.ndtvimg.com/2023-02/u9t5oaqo_trading-generic_625x300_04_February_23.jpg",
            "publishedAt": "2023-12-18T06:35:30Z",
            "content": "Aadhaar Update Online: Starting January 1, a wave of changes will sweep across various sectors.\r\nThe year 2023 is soon going to end. And with the onset of the new year, several changes will come into… [+2474 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Adani Group To Invest $723 Million In Green Energy Projects - NDTV",
            "description": "Ambuja Cements Ltd., controlled by billionaire Gautam Adani, said it will invest 60 billion rupees ($723 million) to build 1,000 megawatt of renewable power projects as the Indian conglomerate seeks to move rapidly toward its net zero goals.",
            "url": "https://www.ndtv.com/india-news/adani-group-to-invest-723-million-in-green-energy-projects-4695199",
            "urlToImage": "https://c.ndtvimg.com/2023-07/qoii90kg_adani-generic_625x300_06_July_23.jpg",
            "publishedAt": "2023-12-18T06:14:50Z",
            "content": "It will reduce the cost of green energy generation by 20%.\r\nAmbuja Cements Ltd., controlled by billionaire Gautam Adani, said it will invest 60 billion rupees ($723 million) to build 1,000 megawatt o… [+1954 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "FXStreet"
            },
            "author": "Haresh Menghani",
            "title": "Gold price bulls have the upper hand amid dovish Fed outlook, bearish US Dollar - FXStreet",
            "description": "Gold price (XAU/USD) edges higher during the Asian session on Monday and for now, seems to have stalled last week's modest pullback from the vicinity of the $2,050 area.",
            "url": "https://www.fxstreet.com/news/gold-price-bulls-have-the-upper-hand-amid-dovish-fed-outlook-bearish-us-dollar-202312180403",
            "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/gold-nuggets-7636265_Large.jpg",
            "publishedAt": "2023-12-18T05:56:36Z",
            "content": "<ul><li>Gold price attracts some dip-buying on Monday amid a modest US Dollar downtick.</li><li>Geopolitical tensions and looming recession risks also benefit the safe-haven metal.</li><li>The preval… [+8430 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "Sovereign Gold Bond 2023-24 series 3 scheme opens: Issue price, interest rate, tax implications, other key... - Zee Business",
            "description": "SGB 2023–24 issue price: The Government of India, in consultation with the RBI, has decided to allow discount of Rs 50 per gram from the issue price to those investors who apply online and the payment is made through digital mode.",
            "url": "https://www.zeebiz.com/personal-finance/news-sgb-2023-issue-price-december-sovereign-gold-bond-series-iii-tranche-opens-today-december-18-interest-rate-return-calculator-maturity-269095",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/18/272934-sgb-dec-2023-price.jpg",
            "publishedAt": "2023-12-18T05:35:48Z",
            "content": "SGB 202324: A third series of the Sovereign Gold Bond (202324) scheme opened on Monday, December 18. The subscription window for the gold bond scheme, wherein the RBI issues bonds linked with the mar… [+2354 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Entrackr"
            },
            "author": "Entrackr",
            "title": "Udaan laid off over 100 employees after restructuring in September - Entrackr",
            "description": null,
            "url": "https://entrackr.com/2023/12/udaan-laid-off-over-100-employees-after-restructuring-in-september/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T05:33:31Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "Stock market today: Yes Bank shares hit 52-week high. Buy, hold or book profit? | Mint - Mint",
            "description": "Stock market today: Yes Bank shares today opened upside and went on to hit new 52-week high of  ₹23 apiece on NSE",
            "url": "https://www.livemint.com/market/stock-market-news/stock-market-today-yes-bank-shares-hit-52-week-high-buy-hold-or-book-profit-11702875973615.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/Yes_Bank_share_Stock_market_News_Today_1702876112569_1702876112773.JPG",
            "publishedAt": "2023-12-18T05:32:22Z",
            "content": "Stock market today:Yes Bank shares have been in uptrend for near one month. However, it seems that the private bank stock is still not in mood to stop its rally. Yes Bank share price today opened ups… [+3658 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "FIIs turn big buyers with Rs 20000 cr of stocks in two weeks - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/fiis-turn-big-buyers-with-rs-20000-cr-of-stocks-in-two-weeks-3941311",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/26765bc8a3d976d25045053aee068be1_w_800_h_450.jpg",
            "publishedAt": "2023-12-18T05:16:41Z",
            "content": "New Delhi, Dec 18 (IANS) FIIs, who have made a 'U' turn in their strategy, have turned big buyers having invested around Rs 20,000 crore, including bulk purchase, in the last two weeks, says V K Vija… [+1077 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Kanishka Sarkar",
            "title": "This underperforming IT stock may see more downside due to a grim Q3 earnings outlook - CNBCTV18",
            "description": "Wipro has remained an underperforming stock this year when compared to peers (except Infosys) as well as the sectoral Nifty IT index. The stock has given a return of nearly 14% to its investors in 2023 (year-to-date) as against the benchmark Nifty 50 which ha…",
            "url": "https://www.cnbctv18.com/earnings/wipro-share-price-it-stock-may-see-more-downside-due-to-a-grim-q3-earnings-outlook-citi-sell-call-18589081.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/09/wipro-1-1019x573.jpg",
            "publishedAt": "2023-12-18T05:02:12Z",
            "content": "Wipro shares were in focus in the trading session on Monday, December 18. This comes on the back of global brokerage Citi pointing out that the IT services firms CFO meet takeaways show that there is… [+2845 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "India Shelter IPO: GMP, how to check status as focus shifts on allotment date after closure of subscription | Mint - Mint",
            "description": "The India Shelter IPO registrar is Kfin Technologies Ltd. The initial public offering (IPO) of India Shelter Finance opened for subscription on December 13 and closed on December 15.",
            "url": "https://www.livemint.com/market/ipo/india-shelter-ipo-gmp-how-to-check-status-as-focus-shifts-on-allotment-date-after-closure-of-subscription-11702874472948.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/3-0-97431674-iStock-834792042-0_1679787577110_1702874954363.jpg",
            "publishedAt": "2023-12-18T04:53:21Z",
            "content": "India Shelter Finance IPO Allotment Status: The India Shelter Finance IPO share allotment is likely to be finalised today, Monday, December 18. The investors who applied for the issue can check India… [+3827 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "No respite for TCS, Infosys & other IT firms in near term, Citi sticks to 'sell' calls - Moneycontrol",
            "description": "Foreign banking giant Citi has re-iterated its &quot;sell&quot; or &quot;neutral&quot; calls on all the IT stocks in Nifty 50, especially as they go through a seasonally weak quarter and due to low visibility of large projects",
            "url": "https://www.moneycontrol.com/news/business/markets/no-respite-for-tcs-infosys-other-it-firms-in-near-term-citi-sticks-to-sell-calls-11918571.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/stocks5-1-770x433.jpg",
            "publishedAt": "2023-12-18T04:50:18Z",
            "content": "The Nifty IT index rallied more than 7 percent in the previous week on hopes of expected interest rate cuts in 2024 spurring discretionary demand and large deals. While that maybe in distant future, … [+4269 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Gold and silver prices Today on 18-12-2023 : Check latest rates in your city | Mint - Mint",
            "description": "Gold and Silver Prices Today: 10 gm of 24 carat gold was priced at Rs.62660.0 in Delhi, while 1 kg of silver was priced at Rs.77700.0 in Delhi.",
            "url": "https://www.livemint.com/market/commodities/gold-and-silver-prices-today-on-18-12-2023-check-latest-rates-in-your-city-11702874719276.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/20/1600x900/Gold_Silver_1695188117170_1695188150826.webp",
            "publishedAt": "2023-12-18T04:45:18Z",
            "content": "Gold and Silver Prices Today: Gold prices saw a slight decrease on Monday. The cost of 24 carat gold is Rs.6266.0 per gm, down by Rs.490.0. The cost of 22 carat gold is Rs.5745.0 per gm, down by Rs.4… [+1783 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Bank of India, Union Bank other PSU bank stocks fall after govt clarifies on merger speculation - Moneycontrol",
            "description": "Amid the merger buzz, Bank of Maharashtra shares fell 1.3 percent to Rs 47, Union Bank of India tanked nearly 4 percent to Rs 123 per share and Bank of India stock slipped 0.8 percent to Rs 111",
            "url": "https://www.moneycontrol.com/news/business/markets/bank-of-india-bank-of-maharashtra-2-other-stocks-in-focus-on-psu-bank-merger-talk-11918211.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/stocks_sensex_nifty-2-770x433.jpg",
            "publishedAt": "2023-12-18T04:31:17Z",
            "content": "PSU bank shares, which rallied the previous session, remained under pressure on December 18 after a government document doing rounds on social media triggered speculation of possible mergers between … [+2591 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Infosys stock falls as investors book profit; IT major unveils development centre in Nagpur - Moneycontrol",
            "description": "The new center will also give employees the opportunity to work on next-gen technologies like cloud, AI, and digital across multiple industries",
            "url": "https://www.moneycontrol.com/news/business/markets/infosys-stock-falls-as-investors-book-profit-it-major-unveils-development-centre-in-nagpur-11918121.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Infosys-770x433.jpg",
            "publishedAt": "2023-12-18T04:20:45Z",
            "content": "Shares of Infosys slipped 1 percent to Rs 1,560 per share on December 18 morning trade as investors booked profit after the stock closed 5 percent higher in the previous trading session. Additionally… [+2425 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Deborshi Chaki",
            "title": "Exclusive | Prataap snacks promoters in talks with potential buyers for sale of controlling stake - Moneycontrol",
            "description": "The stake sale could also see the exit of the company's founders, the Mehta and Kumat families, which control a 22 percent stake.",
            "url": "https://www.moneycontrol.com/news/business/exclusive-prataap-snacks-promoters-in-talks-with-potential-buyers-for-sale-of-controlling-stake-11918871.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/11/IMAGEPRATAAP-770x433.jpg",
            "publishedAt": "2023-12-18T04:20:26Z",
            "content": "The promoters of Prataap Snacks Limited (PSL), the company behind 'Yellow Diamond Chips,' are reportedly in discussions to sell a controlling stake in the listed company, people familiar with the mat… [+2295 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BusinessLine"
            },
            "author": "Madhu Balaji",
            "title": "IRB Infrastructure receives ₹1,683 cr contract from NHAI - BusinessLine",
            "description": "IRB Infrastructure Trust receives ₹1,683-crore contract from NHAI for two projects, increasing IRB's share in North-South connectivity to 12%.",
            "url": "https://www.thehindubusinessline.com/markets/irb-infrastructure-receives-1683-cr-contract-from-nhai/article67649571.ece",
            "urlToImage": "https://bl-i.thgim.com/public/todays-paper/tp-others/tp-states/rzhdvn/article66757456.ece/alternates/LANDSCAPE_1200/NHAI-to-develop%2BGQVB4NFAV.4.jpg.jpg",
            "publishedAt": "2023-12-18T04:18:33Z",
            "content": "IRB Infrastructure Trust, private InvIT of IRB Infrastructure Developers Ltd, has received 1,683-crore contract from the National Highways Authority of India (NHAI) for TOT-13 comprising Gwalior-Jhan… [+952 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cardekho.com"
            },
            "author": "Rohit",
            "title": "Get A Good Look At The New Kia Sonet’s HTX+ Variant In These 7 Pics - CarDekho",
            "description": "The HTX+ is the fully loaded variant under the Tech (HT) Line of the Kia Sonet and gets a few exterior styling differences to set it apart from the GT Line and X-Line trims  The Kia Sonet facelift has premiered in India, and the carmaker confirmed that the ne…",
            "url": "https://www.cardekho.com/india-car-news/get-a-good-look-at-the-new-kia-sonets-htx-variant-in-these-7-pics-31828.htm",
            "urlToImage": "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/31827/1702874290624/GeneralNew.jpg",
            "publishedAt": "2023-12-18T04:08:00Z",
            "content": "The HTX+ is the fully loaded variant under the Tech (HT) Line of the Kia Sonet and gets a few exterior styling differences to set it apart from the GT Line and X-Line trims\r\nThe Kia Sonet facelift ha… [+2452 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Tata Power gains after green energy arm bags NTPC contract for Rajasthan project - Moneycontrol",
            "description": "TPSSL’s Solar Cell and Module Manufacturing plant in Bengaluru will supply 152 MWp DCR Solar PV Modules for this project.",
            "url": "https://www.moneycontrol.com/news/business/stocks/tata-power-gains-after-green-energy-arm-bags-ntpc-contract-for-rajasthan-project-11914491.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/10/tata-power-company-770x433.jpg",
            "publishedAt": "2023-12-18T04:02:21Z",
            "content": "The Tata Power Company shares were up nearly 1 percent at Rs 335.70 in the opening trade on December 18 after a subsidiary company signed a contract with NTPC.\r\n\"Tata Power Solar Systems Limited (TPS… [+1512 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Sangeeta Ojha",
            "title": "The downsides of floating-rate fixed deposits (FDs). Better invest in this for now | Mint - Mint",
            "description": "Interest rates on floating rate fixed deposits (FDs) are variable and revised based on a benchmark reference rate. Experts recommend locking money into high-return FDs now before rates decrease",
            "url": "https://www.livemint.com/money/personal-finance/the-downsides-of-floating-rate-bank-fixed-deposits-fds-better-invest-in-this-for-now-11702868239194.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/FD_1702871512347_1702871512544.png",
            "publishedAt": "2023-12-18T04:00:59Z",
            "content": "The interest rates on floating rate fixed deposits (FDs) are linked to a benchmark instrument's reference rate. Thus, they are variable during the tenure and are revised following the underlying refe… [+2771 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "Vedanta dividend board meeting today; shares to remain in focus - Zee Business",
            "description": "Vedanta board meeting results today: Vedanta shares will remain on investors radar on Monday, December 18, ahead of the scheduled board meeting of the Anil Agarwal-backed company to consider and approve a second interim dividend for the current financial year…",
            "url": "https://www.zeebiz.com/markets/stocks/news-vedanta-share-dividend-history-news-2023-24-date-announcement-board-meeting-results-today-update-record-date-news-latest-269073",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/18/272915-vedanta-share-price-nse.jpg",
            "publishedAt": "2023-12-18T03:45:34Z",
            "content": "Vedanta dividend record date 2023, Vedanta board meeting results today: Vedanta shares will remain on investors' radar on Monday, December 18, ahead of the scheduled board meeting of the Anil Agarwal… [+1588 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Edelweiss plans to sell up to 20% stake in subsidiary Edelweiss Alternative Asset Management - Moneycontrol",
            "description": "The company is looking to raise Rs 1,500-2,000 crore through the sale and will use the funds to pare debt and establish the market value of the business",
            "url": "https://www.moneycontrol.com/news/business/announcements/edelweiss-plans-to-sell-up-to-20-stake-in-subsidiary-edelweiss-alternative-asset-management-11918491.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/12/shareholders-660x435.png",
            "publishedAt": "2023-12-18T03:43:03Z",
            "content": "Edelweiss Financial Services has announced a plan to sell a 10 to 20 percent stake in subsidiary Edelweiss Alternative Asset Management and has started the process of equity monetisation, the company… [+1136 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol Research",
            "title": "MC Pro New Year Portfolio: 17 stocks for a rewarding 2024 - Moneycontrol",
            "description": "These stocks have been picked from a variety of sectors. Ami Organics, Bharat Dynamics, GAIL and SBI are some of them",
            "url": "https://www.moneycontrol.com/news/business/moneycontrol-research/a-portfolio-of-17-stocks-for-a-rewarding-2024-11918411.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/market-770x433.jpg",
            "publishedAt": "2023-12-18T03:42:24Z",
            "content": "PRO Only Highlights- \r\n Quarterly performance largely backed by improved realisations- \r\n Medium-term triggers China plus and protectionist measures for tyre industry- \r\n Valuations not inexpensive; … [+512 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Suraj Estate Developers IPO opens today: Check GMP, issue price, other details - Hindustan Times",
            "description": "The public issue, through which the company aims to raise ₹400 crore, is open for bidding till Wednesday.",
            "url": "https://www.hindustantimes.com/business/suraj-estate-developers-ipo-opens-today-check-gmp-issue-price-other-details-101702865618753.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/Sona_Comstars_IPO__1702865627136_1702865627260.png",
            "publishedAt": "2023-12-18T02:58:20Z",
            "content": "Suraj Estate Developers Limited's IPO (initial public offering) opens for subscription on Monday, and Wednesday is the last day to subscribe to the issue. The offering is worth 400 crore; i.e., the M… [+1643 chars]"
          },
          {
            "source": {
              "id": "financial-times",
              "name": "Financial Times"
            },
            "author": null,
            "title": "India's assault on unsecured loans hits Paytm and other fintech companies - Financial Times",
            "description": "Country’s central bank raises capital requirements in move to curb rising delinquencies",
            "url": "https://www.ft.com/content/1fe45b1e-94c5-49e0-9590-a6ef0c46e428",
            "urlToImage": null,
            "publishedAt": "2023-12-18T01:59:02Z",
            "content": "Keep abreast of significant corporate, financial and political developments around the world. Stay informed and spot emerging risks and opportunities with independent global reporting, expert comment… [+30 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Dhuraivel Gunasekaran",
            "title": "Sensex @ 71,000; How larger asset equity MF schemes tweaked their portfolio - Moneycontrol",
            "description": "The schemes with larger asset size barring smallcap funds have followed buy and hold strategy and deployed the incremental corpus within their existing stocks holdings",
            "url": "https://www.moneycontrol.com/news/photos/business/personal-finance/sensex-71000-how-larger-asset-equity-mf-equity-schemes-tweaked-their-portfolio-11917761.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Feat-1-770x433.jpg",
            "publishedAt": "2023-12-18T01:49:01Z",
            "content": "When equity markets climb to new highs, it poses different challenges to large-sized equity funds, depending on what their mandates are. The S&amp;P BSE Sensex index crossed the 71,000-point mark for… [+3140 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Rakesh Patil",
            "title": "Stock Market Today: Top 10 things to know before the market opens - Moneycontrol",
            "description": "Trends in the GIFT Nifty indicate a flat start for the broader index in India, with a gain of 4 points. The Nifty futures were trading around the 21,478 level.",
            "url": "https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-191-11914561.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/stocks4-7-770x433.jpg",
            "publishedAt": "2023-12-18T01:37:33Z",
            "content": "The benchmark Sensex and Nifty indices are likely to see a flat start on December 18 as trends in the GIFT Nifty indicate a muted start for the broader index with a gain of 4 points.\r\nDalal Street sc… [+6544 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "Reuters",
            "title": "Oil climbs on drop in Russia exports, Red Sea jitters By Reuters - Investing.com",
            "description": "Oil climbs over 1% on drop in Russia exports, Red Sea jitters",
            "url": "https://www.investing.com/news/commodities-news/oil-climbs-nearly-1-on-drop-in-russia-exports-red-sea-jitters-3258364",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEBBT0BW_L.jpg",
            "publishedAt": "2023-12-18T01:30:00Z",
            "content": "By Florence Tan and Emily Chow\r\nSINGAPORE (Reuters) -Oil prices rose over 1% in Asian trade on Monday, supported by lower exports from Russia and as attacks by the Houthis on ships in the Red Sea rai… [+2041 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Infosys announces long-awaited salary hike: Read what increment letter says - Times of India",
            "description": "Infosys rolls out salary hike letters to employees ahead of Stellar Saturday Culture Carnival. The hike is effective from November 1, 2023. The averag",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/infosys-announces-long-awaited-salary-hike-read-what-increment-letter-says/articleshow/106072283.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106072276,width-1070,height-580,imgsize-27084,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T01:26:26Z",
            "content": "<ul><li>News</li>\r\n<li>Infosys announces long-awaited salary hike: Read what increment letter says</li></ul>"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Nilesh Shah",
            "title": "Nilesh Shah of Kotak MF lines up 7 themes for every investor in 2024 - Moneycontrol",
            "description": "Despite the global challenges, the Indian market offers stability to investors due to its large and diversified economy, robust domestic demand and ongoing economic reforms, says Nilesh Shah of Kotak Mutual Fund.",
            "url": "https://www.moneycontrol.com/news/business/markets/nilesh-shah-of-kotak-mf-lines-up-7-themes-for-every-investor-in-2024-11917511.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/10/Nilesh-Shah-1-770x433.jpg",
            "publishedAt": "2023-12-18T01:04:52Z",
            "content": "As we approach 2024, India looks poised to create new milestones and play its role as the north star to the global economy. With the 3Gs of growth, governance and green squarely on its side, India st… [+10176 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dsij.in"
            },
            "author": "Kiran Shroff",
            "title": "Madhusudan Kela bought 2161384 shares and Sunil Singhania bought 4468228 shares of this civil construction company; scrip hit upper circuit & 52-week high! - Dalal Street Investment Journal",
            "description": "The stock is up by 75 per cent from its 52-week low of Rs 253.40 per share.",
            "url": "https://www.dsij.in/dsijarticledetail/madhusudan-kela-bought-2161384-shares-and-sunil-singhania-bought-4468228-shares-of-this-civil-construction-company-scrip-hit-upper-circuit-52-week-high-35271",
            "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/35271/image_1320.jpg",
            "publishedAt": "2023-12-18T01:01:52Z",
            "content": "As of September 30, 2023, the company's order book stands at Rs 6,835 crore. \r\nFriday, December 15, 2023, saw the Indian stock market explode in green, with both the Sensex and Nifty reaching unprece… [+4744 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": null,
            "title": "Stocks to watch: Mankind Pharma, Mazagon Dock, NBCC, Adani Green, Indian Bank, Tata Power - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/market/stocks-to-watch-mankind-pharma-mazagon-dock-nbcc-adani-green-indian-bank-tata-power-3340843/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T00:42:38Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Agencies",
            "title": "Generative AI can add $1.5 trillion to India's GDP by FY30: Report - IndiaTimes",
            "description": "​Generative AI has the potential to add a cumulative $1.2-1.5 trillion to India's GDP over the next seven years, according to a report by Ernst & Youn",
            "url": "https://timesofindia.indiatimes.com/business/india-business/generative-ai-can-add-1-5-trillion-to-indias-gdp-by-fy30-report/articleshow/106069663.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106069711,width-1070,height-580,imgsize-27232,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T20:41:26Z",
            "content": "Koel Mallick's sarees are a captivating journey to ethereal ethnic beauty"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Sidhartha",
            "title": "Electric 2-wheelers may see end of subsidy soon - IndiaTimes",
            "description": "India Business News: The subsidy for electric two-wheelers is expected to end in a few weeks as the government is not keen on introducing the third phase of Faster Adoptio",
            "url": "https://timesofindia.indiatimes.com/business/india-business/electric-2-wheelers-may-see-end-of-subsidy-soon/articleshow/106069376.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106069544,width-1070,height-580,imgsize-121378,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T19:19:24Z",
            "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Nehal Chaliawala, Varun Sood",
            "title": "Zee seeks time on Sony deal as two directors voted out | Mint - Mint",
            "description": "Some of the largest foreign investors, which own a third of Zee, voted against the resolutions",
            "url": "https://www.livemint.com/companies/news/zee-entertainment-requests-sony-india-to-extend-the-deadline-for-merger-11702821279407.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/Zee_entertainment_1691142028464_1702821289325.JPG",
            "publishedAt": "2023-12-17T18:22:20Z",
            "content": "Zee Entertainment Enterprises Ltd has sought more time from Sony Pictures Networks India to close their $10 billion merger, even as the countrys largest listed entertainment company witnesses rising … [+5118 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": "Reuters India",
            "title": "India's love of homegrown single malts shakes up Pernod, Diageo - Reuters India",
            "description": null,
            "url": "https://www.reuters.com/world/india/indias-love-homegrown-single-malts-shakes-up-pernod-diageo-2023-12-17/",
            "urlToImage": null,
            "publishedAt": "2023-12-17T18:13:28Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "Bloomberg",
            "title": "Deloitte is looking to AI to help avoid mass layoffs in future - Deccan Herald",
            "description": null,
            "url": "https://www.deccanherald.com/business/companies/deloitte-is-looking-to-ai-to-help-avoid-mass-layoffs-in-future-2814904",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2F6d2c71ce-26a1-433a-83eb-2a718de0a9d8%2F2023newsmlRC2O91AXFCQ91277211995.jpeg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-17T15:46:25Z",
            "content": "It is obviously a great objective to be able to avoid large swings of hirings and layoffs, said Stevan Rolls, global chief talent officer at Deloitte. You could always be more efficient and effective… [+1110 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Hormaz Fatakia",
            "title": "Trade Setup for December 18: What next for the Nifty 50 after best weekly run in six years? - CNBCTV18",
            "description": "Since the last week of October when the index began to rally, the Nifty has gained nearly 2,500 points.",
            "url": "https://www.cnbctv18.com/market/trade-setup-december-18-nifty-50-key-levels-nifty-bank-it-zee-jsw-mazagon-shares-18587821.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/05/TRADE_SETUP_BG-1019x573.jpg",
            "publishedAt": "2023-12-17T14:12:57Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Business Desk",
            "title": "Travelling for Xmas, New Year? How Delhi, Mumbai, Bengaluru & Hyderabad airports have ramped up infrastru - IndiaTimes",
            "description": "India Business News: Indian airports, including Delhi, Mumbai, Bengaluru, and Hyderabad, have increased their infrastructure to accommodate the surge in winter travel. The",
            "url": "https://timesofindia.indiatimes.com/business/india-business/travelling-for-xmas-new-year-how-delhi-mumbai-bengaluru-hyderabad-airports-have-ramped-up-infrastructure-to-handle-winter-rush/articleshow/106064384.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106065662,width-1070,height-580,imgsize-71608,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T13:11:25Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Inshorts.com"
            },
            "author": "Hiral Goyal",
            "title": "Which Indian cities saw the highest rent hikes this year? | 'Rental values to soon stabilise in most cities' | Inshorts - Inshorts",
            "description": "Bengaluru saw the highest increase in rental prices this year as more people moved to the city, according to s",
            "url": "https://inshorts.com/en/news/which-indian-cities-saw-the-highest-rent-hikes-this-year-1702817821735",
            "urlToImage": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/12_dec/17_sun/img_1702816277113_186.jpg?",
            "publishedAt": "2023-12-17T13:07:30Z",
            "content": null
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "Kakrapar-4 nuclear reactor attains criticality - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/sci-tech/science/kapp-4-nuclear-reactor-critical-commercial-electricity/article67647745.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-17T13:02:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "Business Standard",
            "title": "Hospitals see 7-8% surge in patient footfall, new investments in 2023 - Business Standard",
            "description": null,
            "url": "https://www.business-standard.com/industry/news/hospitals-see-7-8-surge-in-patient-footfall-new-investments-in-2023-123121700461_1.html",
            "urlToImage": null,
            "publishedAt": "2023-12-17T12:58:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Entrackr"
            },
            "author": "Gyan Vardhan",
            "title": "Farmley raises $6.7 Mn in new round led by BC Jindal Group - Entrackr",
            "description": "Farmley has raised $6.7 Mn in a pre-Series B round led by BC Jindal Group with participation from existing investors DSG, Omnivore and Alkemi",
            "url": "https://entrackr.com/2023/12/farmley-raises-6-7-mn-in-new-round-led-by-bc-jindal-group/",
            "urlToImage": "https://entrackr.com/storage/2023/12/Farmley-2.jpg",
            "publishedAt": "2023-12-17T12:35:19Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Dsij.in"
            },
            "author": "Kiran Shroff",
            "title": "Shankar Sharma's portfolio multibagger stock: This drone company secures a pivotal contract from the Ministry of Defence; scrip gains over 10 per cent! - Dalal Street Investment Journal",
            "description": "The stock is up over 100 per cent from its 52-week low of Rs 96.90 per share.",
            "url": "https://www.dsij.in/dsijarticledetail/shankar-sharmas-portfolio-multibagger-stock-this-drone-company-secures-a-pivotal-contract-from-the-ministry-of-defence-scrip-gains-over-10-per-cent-35261",
            "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/35261/DRONE-STOCKS-800X400.jpg",
            "publishedAt": "2023-12-17T10:52:30Z",
            "content": "The stock is up over 100 per cent from its 52-week low of Rs 96.90 per share. \r\nOn Friday, shares of Droneacharya Aerial Innovations Ltd gained 10.9 per cent to an intraday high of Rs 217.95 per shar… [+3383 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "Press Trust of India",
            "title": "LIC to play key role in achieving 'Insurance For All by 2047': Chairman - Business Standard",
            "description": "In a bid to achieve 'Insurance For All by 2047', LIC will play a significant role and to meet that objective it is planning to launch a product especially designed for rural areas.",
            "url": "https://www.business-standard.com/companies/news/lic-to-play-key-role-in-achieving-insurance-for-all-by-2047-chairman-123121700411_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/23/full/1700736727-4867.jpg",
            "publishedAt": "2023-12-17T10:11:28Z",
            "content": "\"The focus would be how to cover maximum rural masses who actually need insurance. In coming days, rural share will also go up to our total business kitty,\" LIC Chairman Siddhartha Mohanty said\r\nIn t… [+3362 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Yamaha R3, MT-03 first ride review: Performance comes at a high price - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/auto/reviews/yamaha-r3-mt-03-first-ride-review-performance-comes-at-a-high-price/3340609/",
            "urlToImage": null,
            "publishedAt": "2023-12-17T07:41:54Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Yash Sharma",
            "title": "Honda sells 200 Elevate SUVs per day since launch: Price to be hiked on this date - IndiaTimes",
            "description": "Cars News: Honda's all-new Elevate SUV has sold 20,000 units in 100 days since its launch in India, averaging 200 units per day. The SUV, available in four varia",
            "url": "https://timesofindia.indiatimes.com/auto/cars/honda-sells-200-elevate-suvs-per-day-since-launch-price-to-be-hiked-on-this-date/articleshow/106059780.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106059788,width-1070,height-580,imgsize-32106,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T06:37:16Z",
            "content": "Royal Enfield Shotgun 650 in pics: Expected price, launch date, specs, features"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Soumya Sarkar",
            "title": "Small-cap vs large-cap mutual funds: Unpacking the potential for high returns in India | Mint - Mint",
            "description": "The Indian equity market presents investors with a choice between small-cap and large-cap stocks, each offering unique potential for returns.",
            "url": "https://www.livemint.com/money/personal-finance/smallcap-vs-large-cap-mutual-funds-unpacking-the-potential-for-high-returns-in-india-11702376567553.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/rupixen-com-Cz0kKadR9Co-unsplash_1702640231437_1702640238520.jpg",
            "publishedAt": "2023-12-17T06:23:48Z",
            "content": "Small-cap stocks represent companies with relatively smaller market capitalization, often in the early stages of growth. While they carry higher risk due to their size and volatility, they also prese… [+5878 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "howindialives.com",
            "title": "India's surging share valuations enter a demanding zone | Mint - Mint",
            "description": "On PE ratio, India is the most richly valued among major markets. Its market cap-to-GDP ratio, too, is at an all-time high, having crossed 100%. Can companies justify such high valuations with supernormal earnings growth?",
            "url": "https://www.livemint.com/market/indias-surging-share-valuations-enter-a-demanding-zone-11702789088800.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/26de40aa-fb8b-11eb-9351-32be236c0b91_1630581868515_1702790429959.jpg",
            "publishedAt": "2023-12-17T05:29:04Z",
            "content": "As Indias leading share index sails past another numerical milestone, lifting boats of all sizes and makes around it, it raises the question of fair valuations. In the here and now, share prices are … [+4139 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Rooftop solar: 'Power bill of 43% of homes down by Rs 1,000' - Times of India",
            "description": "Gujarat leads in solar rooftop installations in the residential segment. 43% of households in the state experienced a minimum reduction of Rs 1,000 pe",
            "url": "https://timesofindia.indiatimes.com/city/ahmedabad/rooftop-solar-power-bill-of-43-of-homes-down-by-rs-1000/articleshow/106057731.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106057755,width-1070,height-580,imgsize-1168756,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T04:22:23Z",
            "content": "Meet the star kids who are alumni of Dhirubhai Ambani International School"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Soumyarendra Barik",
            "title": "Aadhaar-based consent for children to go online proposed in new data protection rules - The Indian Express",
            "description": "Closed-door meeting with industry scheduled on Dec 19",
            "url": "https://indianexpress.com/article/india/aadhaar-based-consent-for-children-to-go-online-9071238/",
            "urlToImage": "https://images.indianexpress.com/2023/12/Aadhaar-2col.jpg",
            "publishedAt": "2023-12-16T22:30:29Z",
            "content": "Using an Aadhaar-based system to verify childrens age for using online services and to gather their parents consent, and introducing a two-stage notification measure for tech companies to intimate us… [+3980 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Global AI Conclave: Tens of thousands of Bengaluru's chip designers give India an edge in semiconductor... - Moneycontrol",
            "description": "&quot;If you look at the chip industry today, most of the value still lies in chip design. If you speak to TSMC, they might say we would rather be like Nvidia,&quot; Chip War author Chris Miller said",
            "url": "https://www.moneycontrol.com/news/technology/global-ai-conclave-tens-of-thousands-of-bengalurus-chip-designers-give-india-an-edge-in-semiconductor-industry-says-chip-war-author-11914511.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/chris-miller-770x369.jpg",
            "publishedAt": "2023-12-16T14:56:19Z",
            "content": "Tens of thousands of chip designers in Bengaluru give India an extraordinary base to build on for its goal of becoming a significant part of the global value chain of semiconductors, Chip War author … [+1437 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Affiliate Desk",
            "title": "10 best electric ovens for home chefs: From Philips, Bajaj and more | Mint - Mint",
            "description": "10 best electric ovens for home cooks are listed here, highlighting superior features, effectiveness, and culinary skills. Discover the top models to improve your culinary explorations and culinary expertise.",
            "url": "https://www.livemint.com/technology/gadgets/10-best-electric-ovens-for-home-chefs-from-philips-bajaj-and-more-11702719398398.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/electric_oven_1702719878757_1702719901381.jpg",
            "publishedAt": "2023-12-16T13:19:46Z",
            "content": "An excellent oven has the power to elevate a dish from average to awesome. For home cooks who are enthusiastic about making culinary masterpieces, selecting an electric oven is crucial. We explore th… [+26582 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Etnownews.com"
            },
            "author": "ET Now Digital",
            "title": "Vodafone Idea share price target 2024: 75% RETURN in 2023; BUY, SELL or HOLD? - ET Now",
            "description": "Vodafone Idea Share Price Target 2024, 2025: Although Idea shares have climbed 75 per cent in 2023 so far, it has emerged as on of the top wealth destroyers on the Dalal Street. Idea shares have eroded 86 per cent of investors' money in the last 10 years. Ide…",
            "url": "https://www.etnownews.com/markets/vodafone-idea-share-price-target-2024-2025-75-per-cent-return-in-2023-buy-sell-or-hold-article-106048282",
            "urlToImage": "https://etstatic.tnn.in/thumb/msid-106048282,width-1280,height-720,resizemode-75/106048282.jpg",
            "publishedAt": "2023-12-16T12:36:47Z",
            "content": "38:24\r\nTCS, Infosys Up Over 5% Each; Sensex Rallies 969 Points, Nifty Ends At 21456 | Closing Trades"
          },
          {
            "source": {
              "id": null,
              "name": "Etnownews.com"
            },
            "author": "ET Now Digital",
            "title": "Indian Oil share price target 2024, 2025: Anand Rathi assigns BUY rating - check IOC dividend yield and history - ET Now",
            "description": "Indian Oil Share Price Target 2024, 2025: IOC shares have delivered a positive return of 35 per cent in the last three months and 58 per cent on YTD basis. IOC Dividend History, IOC Dividend Yield, IOC Share Price History - check here",
            "url": "https://www.etnownews.com/markets/indian-oil-share-price-target-2024-2025-anand-rathi-assigns-buy-rating-check-ioc-dividend-yield-and-history-article-106044395",
            "urlToImage": "https://etstatic.tnn.in/thumb/msid-106044395,width-1280,height-720,resizemode-75/106044395.jpg",
            "publishedAt": "2023-12-16T09:25:14Z",
            "content": "Indian Oil share price target 2024, 2025: Anand Rathi assigns BUY rating - check IOC dividend yield and history (Pic: Freepik/ET NOW News)"
          }
        ]
      },
      {
        "entertainment": [
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Anurag Verma",
            "title": "Meme Rewind 2023: 25 Hilarious Memes That Broke the Desi Internet - News18",
            "description": "Need a quick recap on the best Indian memes of 2023? We got you.",
            "url": "https://www.news18.com/viral/meme-rewind-2023-25-hilarious-memes-that-broke-the-desi-internet-8699014.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/best-memes-2023-2023-12-1c765ac63f02e6ffad30dbdca7220537-16x9.png?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-18T10:22:43Z",
            "content": "January 2023 was just yesterday, right? And with a blink, we are here, bidding our goodbyes to 2023. Where did the entire year go? As Ratna Pathak Shahs character Savitri hilariously informs Aditi in… [+6797 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Ranveer Singh poses with his wax statues. Can you guess which one is real - Hindustan Times",
            "description": "Ranveer Singh has got 2 statues at the Madame Tussauds wax museum in London, with one in traditional and the other in a western look. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/ranveer-singh-gets-2-wax-statues-at-madame-tussauds-london-reflects-on-his-journey-101702888888087.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/madame_tussauds_1702889040298_1702889040460.jpg",
            "publishedAt": "2023-12-18T09:15:30Z",
            "content": "Ranveer Singh has unveiled not one but two wax statues of himself at Madame Tussauds wax museum in London. The actor shared a few pictures from the museum as he posed alongside his wax statues and as… [+2435 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Mega daughter joins the cast of Manchu Manoj’s What The Fish - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/mega-daughter-joins-the-cast-of-manchu-manojs-what-the-fish.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-18T08:37:00Z",
            "content": "Rocking Star Manchu Manoj is currently captivating audiences as the host of the exclusive OTT celebrity game show Ustaad on ETV Win. The recently premiered show started with a bang, featuring Hi Nann… [+1495 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "‘Animal’ actor Triptii Dimri sparks dating rumors with Sam Merchant post her alleged breakup with Anushka - IndiaTimes",
            "description": "Rumors circulate about Triptii Dimri dating model-turned-businessman Sam Merchant, sparking dating rumors. Sam Merchant, a businessman based in Goa, p",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/animal-actor-triptii-dimri-sparks-dating-rumors-with-sam-merchant-post-her-alleged-breakup-with-anushka-sharmas-brother-karnesh-ssharma/articleshow/106085253.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106085340,width-1070,height-580,imgsize-80254,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T08:33:58Z",
            "content": "Triptii Dimri praises Ranbir Kapoor's 'caring behaviour' during 'Animal' bold scenes: 'Are you okay, are you comfortable?'"
          },
          {
            "source": {
              "id": null,
              "name": "PINKVILLA"
            },
            "author": "Khushboo Ratda",
            "title": "EXCLUSIVE: Prithviraj Sukumaran says Prabhas doesn't 'realize the kind of aura and stardom that we carry' - PINKVILLA",
            "description": "In An Exclusive Chat With Pinkvilla, The Lucifer Director Shared That The Camaraderie Between Him And Prabhas In Salaar gives A glimpse Of The Exceptional Bond They Share Off-screen.",
            "url": "https://www.pinkvilla.com/entertainment/south/exclusive-prithviraj-sukumaran-says-prabhas-doesnt-realize-the-kind-of-aura-and-stardom-that-we-carry-1265965",
            "urlToImage": "https://www.pinkvilla.com/images/2023-12/2090747143_prithviraj-sukumaran-interview-about-prabhas-salaar-1.jpg",
            "publishedAt": "2023-12-18T08:32:05Z",
            "content": "It's always a great treat to see actors from different industries come together and build a good rapport. Salaar revolves around Prabhas and Prithviraj Sukumaran's character, named Vardharaja Mannaar… [+3969 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Sam Bahadur worldwide box office collection: Vicky Kaushal film crosses ₹100 cr - Hindustan Times",
            "description": "While Sam Bahadur has slowly and surely touched the ₹100 crore mark globally, Animal has made over eight times in the same time. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/sam-bahadur-worldwide-box-office-collection-vicky-kaushal-film-crosses-100-cr-in-17-days-101702885224337.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/vicky_1701575193538_1702885482512.jfif",
            "publishedAt": "2023-12-18T08:13:46Z",
            "content": "Meghna Gulzar's Sam Bahadur, the biopic of India's first field marshal, Sam Manekshaw, has been slowly but steadily making waves at the global box office. The Vicky Kaushal film has now crossed the c… [+2237 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Aishwarya Rai Bachchan's reaction to Aaradhya's stage performance goes viral; netizens say, 'Better than all 'Archies' actors' - Times of India",
            "description": "Actor couple Aishwarya Rai Bachchan and Abhishek Bachhchan's daughter Aaradhya Bachchan performed at her school's annual day and the videos and pictures from it have gone viral on social media. Videos of proud mommy Aishwarya smiling at Aaradhya's performance…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/aishwarya-rai-bachchans-reaction-to-aaradhyas-stage-performance-goes-viral-netizens-say-better-than-all-archies-actors/videoshow/106082772.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106082772,imgsize-30346.cms",
            "publishedAt": "2023-12-18T07:34:57Z",
            "content": "Dec 18, 2023, 01:04PM ISTSource: etimes.inActor couple Aishwarya Rai Bachchan and Abhishek Bachhchan's daughter Aaradhya Bachchan performed at her school's annual day and the videos and pictures from… [+598 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Koffee With Karan: Ajay Devgn recalls the time Karan Johar was his 'sworn enemy' - Hindustan Times",
            "description": "The promo of the upcoming episode of Koffee With Karan season 8 shows Ajay Devgn sharing the couch with Singham director Rohit Shetty. | Web Series",
            "url": "https://www.hindustantimes.com/entertainment/web-series/koffee-with-karan-promo-ajay-devgn-recalls-the-time-karan-johar-was-his-sworn-enemy-101702880398813.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/koffee_with_karan_8_1702882152276_1702882152520.jpg",
            "publishedAt": "2023-12-18T07:24:21Z",
            "content": "Koffee With Karan season 8 continues to have never-seen-before dynamic pairson the couch and the new promo shows Ajay Devgn and Rohit Shetty as guests. Ajay, who had earlier graced the show with wife… [+2447 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Viral: Shah Rukh Khan Lit Up The Dubai Event With His Chaiya Chaiya Moves - NDTV Movies",
            "description": "Shah Rukh Khan also danced to Lutt Putt Gaya and O Maahi at the event",
            "url": "https://www.ndtv.com/entertainment/viral-shah-rukh-khan-lit-up-the-dubai-event-with-his-chaiya-chaiya-moves-4695277",
            "urlToImage": "https://c.ndtvimg.com/2023-12/snl9al8_srk-_625x300_18_December_23.jpg",
            "publishedAt": "2023-12-18T06:31:15Z",
            "content": "Shah Rukh Khan dancing at the event. (courtesy: Shah RukhKhanUniverse)\r\nNew Delhi: Shah Rukh Khan went to Dubai for the promotions of his third release of the year - Dunki. Needless to say, Shah Rukh… [+2482 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "'Trying to control...': Alia Bhatt opens up on how she battles anxiety; reveals daughter Raha’s nicknames - Times of India",
            "description": "Alia Bhatt recently held an Ask Me Anything session on Instagram and talked about different aspects of her life. While she revealed her daughter Raha's nicknames, Alia also opened up about her struggles with anxiety on how she deals with them. The actress, wh…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/trying-to-control-alia-bhatt-opens-up-on-how-she-battles-anxiety-reveals-daughter-rahas-nicknames/videoshow/106078150.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106078150,imgsize-60338.cms",
            "publishedAt": "2023-12-18T05:28:02Z",
            "content": "Dec 18, 2023, 10:58AM ISTSource: etimes.inAlia Bhatt recently held an Ask Me Anything session on Instagram and talked about different aspects of her life. While she revealed her daughter Raha's nickn… [+1254 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "In Pics: Navya Naveli Nanda Attends Rumoured Boyfriend Siddhant Chaturvedi's Kho Gaye Hum Kahan Screening - NDTV Movies",
            "description": "Kho Gaye Hum Kahan will stream on Netflix from December 26",
            "url": "https://www.ndtv.com/entertainment/in-pics-navya-naveli-nanda-attends-rumoured-boyfriend-siddhant-chaturvedis-kho-gaye-hum-kahan-screening-4694981",
            "urlToImage": "https://c.ndtvimg.com/2023-12/s7s8nq48_siddhant-_625x300_18_December_23.jpg",
            "publishedAt": "2023-12-18T05:25:57Z",
            "content": "Navya and Siddhant at the screening\r\nNew Delhi: The makers of Kho Gaye Hum Kahan hosted a special screening of the film on Sunday night in Mumbai. The lead actors of the film Ananya Panday, Siddhant … [+1977 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Koreaboo.com"
            },
            "author": null,
            "title": "Label Responds To 14-Year-Old Idol's Alleged Illegal Relationship With Stylist - Koreaboo",
            "description": "Label Responds To Alleged Illegal Relationship Between FANTASY BOYS' Kim Gyurae And Stylist",
            "url": "https://www.koreaboo.com/news/fantasy-boys-kim-gyurae-pocketdol-responds-dating-allegation-stylist/",
            "urlToImage": "https://lh3.googleusercontent.com/jTS3jL9Uz6vCVwe6LwtEsGcordfWrDp01y5f1Sr1YAk6l8jW1WKoi5pS-Iv7DOnps5meoS0meTYKD2ZIOsfkI3kTf8hWolKStPI_DGh0eNYjEZ4=w1200-h630-rj-pp-e365",
            "publishedAt": "2023-12-18T04:33:52Z",
            "content": "FANTASY BOYS‘ label Pocketdol released a statement regarding Kim Gyurae.\r\nKim Gyurae | Pinterest\r\nOn December 18, Pocketdol responded to the allegations that 14-year-old idol Kim Gyurae was dating a … [+1663 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Greatandhra.com"
            },
            "author": "Venkat",
            "title": "Rao Ramesh's Maruti Nagar Completes Filming - Greatandhra",
            "description": "Senior artist Rao Ramesh is one of the extremely talented actors in Tollywood. He has turned the main lead for his upcoming film which has been titled Maruti Nagar Subramanyam.",
            "url": "https://www.greatandhra.com/movies/news/rao-rameshs-maruti-nagar-completes-filming-134408",
            "urlToImage": "https://www.greatandhra.com/newphotos10/maruthinagar11702873738.jpg",
            "publishedAt": "2023-12-18T04:28:58Z",
            "content": "Senior artist Rao Ramesh is one of the extremely talented actors in Tollywood. He has turned the main lead for his upcoming film which has been titled Maruti Nagar Subramanyam. \r\nThe latest news we a… [+722 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Koimoi"
            },
            "author": "Jishika Madaan",
            "title": "Dunki Box Office Day 1 Advance Booking (3 Days To Go): Shah Rukh Khan Starrer Moving In The Right Direction, To Hit The 5 Crore Milestone Soon! - Koimoi",
            "description": "Shah Rukh Khan led Dunki is witnessing an exponential growth in advance booking collections. Read latest update now!",
            "url": "https://www.koimoi.com/box-office/dunki-box-office-day-1-advance-booking-3-days-to-go-shah-rukh-khan-starrer-moving-in-the-right-direction-to-hit-the-5-crore-milestone-soon/",
            "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/12/dunki-box-office-day-1-advance-booking-3-days-to-go-shah-rukh-khans-film-grows-001.jpg",
            "publishedAt": "2023-12-18T04:06:39Z",
            "content": "Dunki Box Office Day 1 Advance Booking Updates!(Photo Credit IMDb)\r\nThe countdown has begun, and we can only imagine the pressure on Shah Rukh Khan right now. Dunki will be released on December 21, 2… [+2188 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Shah Rukh Khan roasts fans who mimic him: ‘Aese thodi na tha yaar’ - Hindustan Times",
            "description": "Shah Rukh Khan was in Dubai when he showed the correct way of delivering the ‘I love you Kiran’ line from his hit movie Darr. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khan-roasts-fans-who-mimic-him-aese-thodi-na-tha-yaar-101702870106768.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/shah_rukh_khan_1702871923096_1702871923265.jpg",
            "publishedAt": "2023-12-18T04:06:13Z",
            "content": "Shah Rukh Khan has finally reacted to all those who say the famous I love you KKK Kiran line from Darr while mimicking him. The actor was in Dubai on Sunday for the promotion of his upcoming film Dun… [+2174 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Salaar vs Dunki advance box office: Prabhas-starrer trails behind Shah Rukh Khan’s film, sells 150000 tickets - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/entertainment/telugu/salaar-vs-dunki-advance-box-office-prabhas-starrer-trails-behind-shah-rukh-khans-film-9072390/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T03:43:28Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Sanjay Dutt's twins spotted, fans think they look like their ‘dada dadi' - Hindustan Times",
            "description": "Sanjay Dutt's wife and kids live in Dubai and flow down to India occasionally. Shahraan and Iqra are 13 now. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/sanjay-dutts-twins-shahraan-and-iqra-spotted-resemble-sunil-dutt-nargis-101702865509358.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/shahraan_dutt_iqra_dutt_1702868772411_1702868772569.jpg",
            "publishedAt": "2023-12-18T03:20:59Z",
            "content": "Sanjay Dutt's wife Manayata Dutt and twins Shahraan and Iqra were spotted in Mumbai on Sunday after a long time. The 13-year-old siblings had stepped out with their mom for a dinner outing. A video o… [+2133 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Telangana Today"
            },
            "author": "Telangana Today",
            "title": "Tension at Annapurna Studios after Big Boss 7 Telugu winner declaration - Telangana Today",
            "description": "A huge crowd was gathered outside the Annapurna studio where the final round of Big Boss 7 season was held. Soon after Pallavi Prashanth was declared the winner celebrations broke out.",
            "url": "https://telanganatoday.com/tension-at-annapurna-studios-after-big-boss-7-telugu-winner-declaration",
            "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2023/12/car-damage.jpg",
            "publishedAt": "2023-12-18T03:15:27Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Entertainment Desk",
            "title": "Veteran actor Tanuja, mother of Kajol, hospitalised in Mumbai - India Today",
            "description": "Veteran actor and Kajol's mother Tanuja has been hospiatlised. According to PTI, the source said that Tanuja is currently under observation.",
            "url": "https://www.indiatoday.in/movies/celebrities/story/veteran-actor-tanuja-kajol-mother-hospitalised-in-mumbai-age-releated-illness-2477210-2023-12-18",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/kajol-and-tanuja-181145808-16x9_0.jpg?VersionId=5_NGf5VQ_hiekgKLXfxZqf6J.3kPqCK0",
            "publishedAt": "2023-12-18T03:11:58Z",
            "content": "Veteran actor and Kajol's mother, Tanuja, has been hospitalised in Mumbai. As per news agency PTI, the actor was admitted to a private hospital on the evening of December 17, due to age-related issue… [+559 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Bigg Boss 17: Munawar Faruqui goes through a mental breakdown after Ayesha Khan accuses him of double dat - Times of India",
            "description": "Ayesha confronts Munawar in the Bigg Boss Archive room about his relationship with gf Nazila and accuses him of double dating. Munawar apologizes for",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-munawar-faruqui-goes-through-a-mental-breakdown-after-ayesha-khan-accuses-him-of-double-dating-says-if-bigg-boss-opens-the-door-ill-walk-out/articleshow/106069498.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106069495,width-1070,height-580,imgsize-22632,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T02:30:00Z",
            "content": "Ajwain garlic oil: Perfect remedy for cough, cold and chest congestion"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Naga Vamsi – There are no internal issues in Guntur Kaaram team - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/naga-vamsi-there-are-no-internal-issues-in-guntur-kaaram-team.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-18T02:30:00Z",
            "content": "This year has been a disappointment for Superstar Mahesh Babu’s fans as they didn’t get to see their demigod on screens. But what’s pleasing at the same time is they are going to witness him at the v… [+1224 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Disha Vakani and her daughter meet the cast of Taarak Mehta Ka Ooltah Chashmah at a wedding; Dayaben pose - Times of India",
            "description": "Taarak Mehta Ka Ooltah Chashmah reintroduces Mrs Roshan Singh Sodhi in the show, played by Mona Mevawalla. However, fans are still awaiting the return",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/disha-vakani-and-her-daughter-meet-the-cast-of-taarak-mehta-ka-ooltah-chashmah-at-a-wedding-dayaben-poses-for-a-picture-with-them/articleshow/106072741.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106072804,width-1070,height-580,imgsize-1277915,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T02:22:42Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Titas Chowdhury",
            "title": "Manoj Bajpayee Reacts to Impact of Animal on Joram, 'Box Office Obsession Has Ruined...' | Exclusive - News18",
            "description": "Manoj Bajpayee believes the pressure to make money has made filmmakers come up with 'tricks' to 'fool audiences'. He also speaks about the hype surrounding Animal.",
            "url": "https://www.news18.com/movies/manoj-bajpayee-reacts-to-impact-of-animal-on-joram-box-office-obsession-has-ruined-exclusive-8707605.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/fotojet-2023-12-17t195715.529-2023-12-1ee2dc337596f3c4dced50472a7da9ed-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-18T02:12:07Z",
            "content": "2023 has been a year of blockbusters with films like Pathaan, Jawan, Gadar 3 and Animal creating havoc at the box office and shattering many previous records. However, Manoj Bajpayee rues that the ex… [+2615 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Jigar Shah",
            "title": "Prashanth Neel : Courted Prabhas for 4 months for Salaar - IndiaTimes",
            "description": "Prashanth Neel, renowned for the KGF franchise, discusses his film \"Salaar\" with Prabhas, emphasizing that violence in the movie is emotionally driven",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/prashanth-neel-courted-prabhas-for-4-months-for-salaar/articleshow/106072502.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106072496,width-1070,height-580,imgsize-50218,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T01:55:32Z",
            "content": "Ajwain garlic oil: Perfect remedy for cough, cold and chest congestion"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "When Richa recalled her reaction on being asked to text a married actor for date - Hindustan Times",
            "description": "Talking about those who come into the industry from outside, Richa Chadha had said that “we don't have anyone guiding us about these things”. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/when-richa-chadha-recalled-her-reaction-on-being-asked-to-text-an-actor-for-a-date-but-he-is-married-101702822869261.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/therichachadha625320295838577n_1697203234777_1702824363365.jpg",
            "publishedAt": "2023-12-18T00:50:01Z",
            "content": "Actor Richa Chadha once recalled that when she entered the Hindi film industry she was asked to go on a date with a married actor. In an interview with news agency PTI in 2017, Richa had said that sh… [+2343 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Pisces Horoscope Today: December 18, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Pisces horoscope for 18th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/pisces-horoscope-today-december-18-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2022/06/Pisces-866x487.jpg",
            "publishedAt": "2023-12-18T00:20:26Z",
            "content": "What if we said the stars in the night sky are conspiring in your favour. That the divine forces are doing everything in their capacity to ensure you have a 5-star experience here on earth. So, snap … [+372 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Sagittarius Horoscope Today: December 18, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Sagittarius horoscope for 18th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/sagittarius-horoscope-today-december-18-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Sagittarius.jpg",
            "publishedAt": "2023-12-18T00:20:17Z",
            "content": "Haters may call you delulu, and thats okay! You know that the law of attraction is always working in your favour, that the universe is always working in your favour, and that the things that arent wo… [+281 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "VOGUE India",
            "title": "Aries Horoscope Today: December 18, 2023 - VOGUE India",
            "description": null,
            "url": "https://www.vogue.in/horoscope/product/aries-horoscope-today-december-18-2023/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T00:20:11Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Aquarius Horoscope Today: December 18, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Aquarius horoscope for 18th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/aquarius-horoscope-today-december-18-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2021/12/Aquarius-866x487.jpg",
            "publishedAt": "2023-12-18T00:20:09Z",
            "content": "Aquarius, youve had it! Youve had it with the energy vampires, the gossip mongers and the air-kissers! You want to surround yourself with your rainbow tribe, people who match your weird and wonderful… [+412 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Neeraj Dhankher",
            "title": "Weekly Career Horoscope for December 18-24, 2023 - Hindustan Times",
            "description": "Weekly Career Horoscope, December 18-24, 2023: Get daily career astrological predictions that will help you prosper at your workplace. | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/weekly-career-horoscope-for-december-18-24-2023-101702843654731.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/To-provide-career-guidance-as-well-as-help-student_1698348601166_1702844663124.jpg",
            "publishedAt": "2023-12-17T21:30:07Z",
            "content": "Aries: This week, your career options align with your objectives. Keep an eye out for great offers that will boost your career. You cannot do without networking. Therefore, attend a meeting or networ… [+5451 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "PINKVILLA"
            },
            "author": "Loveleen Kaur",
            "title": "PICS: Janhvi Kapoor, Nysa Devgan, Orry’s London vacay is all about food and fun rides; Khushi Kapoor feels FOMO - PINKVILLA",
            "description": "Orry Recently Shared A Photo Album Showcasing The Fun He Had With Janhvi Kapoor And Nysa Devgan During Their Vacation In London. The Archies Actress Khushi Kapoor Reacted To It.",
            "url": "https://www.pinkvilla.com/entertainment/news/pics-janhvi-kapoor-nysa-devgan-orrys-london-vacay-is-all-about-food-and-fun-rides-khushi-kapoor-feels-fomo-1265901",
            "urlToImage": "https://www.pinkvilla.com/images/2023-12/417840230_janhvi-kapoor-nysa-devgan-and-orhan-awatramani-min.jpg",
            "publishedAt": "2023-12-17T20:27:52Z",
            "content": "We all know that social media sensation Orry is friends with every youngster in Bollywood. Hes so close to them that they are often spotted vacationing together. Recently, Janhvi Kapoor and Nysa Devg… [+1992 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Dr J.N Pandey",
            "title": "Capricorn Daily Horoscope Today, December 18, 2023 predicts good profit - Hindustan Times",
            "description": "Read Capricorn daily horoscope for Dec 18, 2023 to know your astrological predictions. Financial prosperity ensures smart investments. | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/capricorn-daily-horoscope-today-december-18-2023-predicts-good-profit-101702804326553.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/capricorn_1690876442304_1702839361548.jpg",
            "publishedAt": "2023-12-17T18:57:35Z",
            "content": "Capricorn (22nd December to 19th January)\r\nDaily Horoscope Prediction says, Have a bright day\r\nCapricorn Daily Horoscope Today, December 18, 2023. Management would recognize your professional skills.… [+2923 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Dr J.N Pandey",
            "title": "Scorpio Daily Horoscope Today, Dec 18, 2023 advices to avoid wild expenditures - Hindustan Times",
            "description": "Read Scorpio daily horoscope for Dec 18, 2023 to know your astrological predictions. Avoid wild expenditures and save more. | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/scorpio-daily-horoscope-today-dec-18-2023-advices-to-avoid-wild-expenditures-101702804313733.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/scorpio_1690911129897_1702839073172.jpg",
            "publishedAt": "2023-12-17T18:52:30Z",
            "content": "Scorpio 23rd October to 21st November)\r\nDaily Horoscope Prediction says, You never fear troubles\r\nScorpio Daily Horoscope Today, Dec 18, 2023. Avoid wild expenditures and save more.\r\nHave a creative … [+3105 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Ankita Bhandari",
            "title": "Fighter`s Sher Khul Gaye Becomes Most-Watched Video, Collects 50 Million Views - Zee News",
            "description": "Sher Khul Gaye - the first song from Sidharth Anands upcoming directorial Fighter has indeed come as a treat. The audience witnessed the fresh chemistry of Hrithik Roshan and Deepika Padukone in the party anthem of the season.  Well-studded with cool dance mo…",
            "url": "https://zeenews.india.com/bollywood/fighters-sher-khul-gaye-becomes-most-watched-video-collects-50-million-views-2700047.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/18/1337635-deepika-sher-khul-gaye.gif",
            "publishedAt": "2023-12-17T18:35:19Z",
            "content": "NEW DELHI: 'Sher Khul Gaye' - the first song from Sidharth Anand's upcoming directorial 'Fighter' has indeed come as a treat. The audience witnessed the fresh chemistry of Hrithik Roshan and Deepika … [+2091 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Dr J.N Pandey",
            "title": "Taurus Daily Horoscope Today, Dec 18, 2023 predicts professional opportunities - Hindustan Times",
            "description": "Read Taurus daily horoscope for Dec 18, 2023 to know your astrological predictions. Resolve every past issue in the love life to make the day fabulous. | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/taurus-daily-horoscope-today-dec-18-2023-predicts-professional-opportunities-101702804287570.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/taurus_1690986384598_1702837991722.jpg",
            "publishedAt": "2023-12-17T18:34:50Z",
            "content": "Taurus (20th April to 20th May)\r\nDaily Horoscope Prediction says, Accomplish the dreams\r\nTaurus Daily Horoscope Today, Dec 18, 2023. Utilize professional opportunities to display your skills and hand… [+3104 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Buzz: Vikram’s Thangalaan to get postponed - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/buzz-vikrams-thangalaan-to-get-postponed.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-17T16:30:00Z",
            "content": "Versatile actor Vikram joined forces with the sensational filmmaker Pa Ranjith for the movie Thangalaan. The film is based on a few real-life incidents that happened in Kolar Gold Fields. The promoti… [+720 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "#CelebrityEvenings: From Nora Fatehi to Ananya Panday, Bollywood celebs spotted in Mumbai - Times of India",
            "description": "The paparazzi captured Bollywood stars at different locations in Mumbai on December 17. Celebrities including  Nora Fatehi, Sonu Nigam, Ananya Panday, Sunil Grover, Suneil Shetty, and others were spotted as they stepped out in the city looking their usual bes…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/celebrityevenings-from-nora-fatehi-to-ananya-panday-bollywood-celebs-spotted-in-mumbai/videoshow/106066140.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106066140,imgsize-39796.cms",
            "publishedAt": "2023-12-17T15:45:00Z",
            "content": "Dec 17, 2023, 09:15PM ISTSource: etimes.inThe paparazzi captured Bollywood stars at different locations in Mumbai on December 17. Celebrities including Nora Fatehi, Sonu Nigam, Ananya Panday, Sunil G… [+123 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Vijaya Tiwari",
            "title": "Exclusive - Bigg Boss 17's Khanzaadi aka Feroza Khan on her relationship with Abhishek Kumar: 'Humare beech mein joh hai woh hum dono ko pata hai' - IndiaTimes",
            "description": "Bigg Boss 17 contestant Khanzaadi aka Feroza Khan, who got evicted from the reality show spoke to ETimes TV about her journey. The rapper opened up about why she was praying to be out of the Bigg Boss 17 house, her love-hate relationship with Abhishek Kumar a…",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/exclusive-bigg-boss-17s-khanzaadi-aka-feroza-khan-on-her-relationship-with-abhishek-kumar-humare-beech-mein-joh-hai-woh-hum-dono-ko-pata-hai/photostory/106067240.cms",
            "urlToImage": "https://static.toiimg.com/photo/msid-106067388.cms",
            "publishedAt": "2023-12-17T15:34:21Z",
            "content": "I don’t have hatred or enmity towards anyone. Calling someone my enemy is a big thing, it is a big word. I had my differences with Abhishek, we fought a lot but we shared a great friendship also. I f… [+161 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Mukti Mohan and 'Animal' actor Kunal Thakur dance their heart out at their wedding celebrations, Ayushman - IndiaTimes",
            "description": "Mukti Mohan has dropped an unseen video from her wedding festivities with Kunal Thakur and it looks like a lot of fun! Kunal was last seen in 'Animal'",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/mukti-mohan-and-animal-actor-kunal-thakur-dance-their-heart-out-at-their-wedding-celebrations-ayushmann-khurrana-shakti-mohan-join-in-watch-unseen-video/articleshow/106067118.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106067158,width-1070,height-580,imgsize-39972,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T14:59:20Z",
            "content": "10 morning habits thatll propel you to success"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Promo of Salaar team’s special interview with Rajamouli is out now - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/promo-of-salaar-teams-special-interview-with-rajamouli-is-out-now.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-17T14:00:00Z",
            "content": "Rajamouli, along with the Salaar team, shot for a special interview recently. The makers have now revealed that the full interview will be coming out on Wednesday, 19th December. The episode’s promo … [+1087 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Koimoi"
            },
            "author": "Oshine Koul",
            "title": "Mr Bachchan Poster Unveiled! Ajay Devgn Shares The First Look Of Ravi Teja Starrer – An Official Adaptation Of Raid - Koimoi",
            "description": "Ravi Teja starrer Mr. Bachchan's first look poster is out. The film is an official adaptation of Raid, starring Ajay Devgn in the lead. Read on",
            "url": "https://www.koimoi.com/south-indian-cinema/mr-bachchan-poster-unveiled-ajay-devgn-shares-the-first-look-of-ravi-teja-starrer-an-official-adaptation-of-raid/",
            "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/12/mr-bachchan-poster-unveiled-ajay-devgn-shares-the-first-look-of-ravi-teja-starrer-an-official-adaptation-of-raid.jpg",
            "publishedAt": "2023-12-17T13:39:56Z",
            "content": "Ravi Teja Starrer Mr. Bachchan Poster Out! (Picture Credit: IMDb)\r\nSince afternoon, south sensation Ravi Teja has been making headlines with the first-look poster of his latest film, Mr. Bachchan. Ea… [+2342 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Kareena Kapoor, Saif Ali Khan jet off for a vacation along with Jeh and Taimur - Times of India",
            "description": "Actor couple Kareena Kapoor and Saif Ali Khan recently jetted off for a vacation. The 'Jaane Jaan' actress and her husband were papped with their kids Taimur and Jeh at the Mumbai airport on December 17. Saif and Kareena wished 'Happy Christmas' to the shutte…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/kareena-kapoor-saif-ali-khan-jet-off-for-a-vacation-along-with-jeh-and-taimur/videoshow/106065664.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106065664,imgsize-77656.cms",
            "publishedAt": "2023-12-17T13:36:00Z",
            "content": "Dec 17, 2023, 07:06PM ISTSource: etimes.inActor couple Kareena Kapoor and Saif Ali Khan recently jetted off for a vacation. The 'Jaane Jaan' actress and her husband were papped with their kids Taimur… [+161 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Entertainment Desk",
            "title": "It’s twin baby girls for Rubina Dilaik-Abhinav Shukla: Trainer congratulates new mom, edits post later - The Indian Express",
            "description": "Rubina Dilaik's Pilates coach took to her Instagram to congratulate the new mom.",
            "url": "https://indianexpress.com/article/entertainment/television/its-twin-baby-girls-for-rubina-dilaik-abhinav-shukla-trainer-congratulates-new-mom-edits-post-later-9071890/",
            "urlToImage": "https://images.indianexpress.com/2023/12/Rubina-Dilaik-Abhinav-Shukla-1600.jpg",
            "publishedAt": "2023-12-17T13:29:19Z",
            "content": "Here’s a piece of happy news for fans of TV actors and couple Rubina Dilaik and Abhinav Shukla. Rubina has reportedly delivered twin girls recently. While the new parents are yet to share this news w… [+850 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Sunny Deol says audiences are watching his older films post Gadar 2 success: 'New generation got connected to me' - Hindustan Times",
            "description": "Sunny Deol believes he has been able to establish a connection with younger audiences because of the huge success of Gadar 2. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/sunny-deol-says-audiences-are-watching-his-older-films-post-gadar-2-success-101702818205402.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/gadar_2_1692320794830_1702818437041.jpeg",
            "publishedAt": "2023-12-17T13:20:27Z",
            "content": "Sunny Deol delivered one of the biggest films of the year with Gadar 2. The actor has now opened up about how this has helped him connect with younger audiences. He said in an interview with PTI that… [+1853 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "A Khan-Tastic Airport Spotting: Shah Rukh Khan, Saif Ali Khan And Family - NDTV",
            "description": "Shah Rukh Khan, Saif Ali Khan-Kareena Kapoor with their two sons were pictured at the airport",
            "url": "https://www.ndtv.com/photos/entertainment/a-khan-tastic-airport-spotting-shah-rukh-khan-saif-ali-khan-and-family-106543",
            "urlToImage": "https://drop.ndtv.com/albums/ENTERTAINMENT/a-khan-tastic-a_638384335592339801/638384335592339801_640x480.jpeg",
            "publishedAt": "2023-12-17T12:42:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Entertainment Desk",
            "title": "Samantha Prabhu was asked if she would ever marry again, here's how she reacted - India Today",
            "description": "Samantha Ruth Prabhu was recently asked by a fan if she would ever marry again, here's how she responded. Samantha was previously married to Naga Chaitanya.",
            "url": "https://www.indiatoday.in/movies/regional-cinema/story/samantha-prabhu-was-asked-if-she-would-ever-marry-again-after-naga-chaitanya-divorce-how-she-reacted-2477067-2023-12-17",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/samantha-ruth-prabhu-170640590-16x9_0.jpg?VersionId=qja_eUJE2d_K3z17W6HK.0x_Zktd8Gk0",
            "publishedAt": "2023-12-17T12:13:27Z",
            "content": "Actor Samantha Ruth Prabhu was recently asked by a fan on her social media handle if she would ever marry again.Samantha said that she would not as it would be a 'bad investment.'\r\nSAMANTHA REACTS AF… [+1336 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Quint"
            },
            "author": "Quint Entertainment",
            "title": "Shreyas Talpade to be Discharged Soon From Hospital; Shares Filmmaker Sohum Shah - The Quint",
            "description": "Actor Shreyas Talpade suffered a heart attack in Mumbai on 14 December, following which he underwent an angioplasty. According to filmmaker Sohum Shah, a close friend of Shreyas, the actor is expected to be discharged soon from the hospital.",
            "url": "https://www.thequint.com/entertainment/celebrities/shreyas-talpade-to-be-discharged-soon-from-hospital-shares-filmmaker-sohum-shah",
            "urlToImage": "https://images.thequint.com/thequint%2F2023-12%2F4f8fae84-2f67-4dbd-b595-4544d2c6fe5f%2Fshreyas_talpade_joins_welcome_to_the_jungle_i_have_always_enjoyed_doing_comedy.jpg?rect=0%2C0%2C1120%2C588",
            "publishedAt": "2023-12-17T11:55:44Z",
            "content": "Sharing an update on Shreyas' health, Shah told E Times, \"I visited him on the same night he was taken to the hospital, and I was there today. It was a big relief to see Shreyas smiling and talking w… [+616 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Entertainment Desk",
            "title": "Watch: Triptii Dimri dances to ‘Animal’ co-star Ranbir Kapoor’s song - India Today",
            "description": "Triptii Dimri has been winning hearts with her dance videos shared on Instagram. She grooved to Ranbir Kapoor’s song, ‘Ghaghra’ and to ‘Bole Churiyaan’, setting the dance floor on fire.",
            "url": "https://www.indiatoday.in/movies/celebrities/story/bhabhi-2-triptii-dimri-dances-ranbir-kapoor-song-animal-2477047-2023-12-17",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/triptii-dimri-grooves-to-ranbir-kapoors-song-17030030-16x9_0.jpg?VersionId=3Rz4JIgLR396O73nIvoGVHk9bthsd.k.",
            "publishedAt": "2023-12-17T11:13:36Z",
            "content": "Triptii Dimri has emerged as the newest ‘National Crush’ after her performance in Sandeep Reddy Vanga’s ‘Animal’. In fact, just like in the film, people everywhere has been calling her ‘Bhabhi 2’. Th… [+1663 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tracktollywood.com"
            },
            "author": "Aditya",
            "title": "Jagadeesh, who played Keshava’s role in Pushpa, admits to his crime - TrackTollywood",
            "description": "Jagadeesh, who starred in Allu Arjun's Pushpa The Rise, confesses to his crime regarding the suicide of a woman. Learn more about the case",
            "url": "https://tracktollywood.com/jagadeesh-who-played-keshavas-role-in-pushpa-admits-to-his-crime/",
            "urlToImage": "https://tracktollywood.com/wp-content/uploads/2023/12/Screenshot-2023-12-08-153315.png",
            "publishedAt": "2023-12-17T10:53:07Z",
            "content": "Jagadeesh, who played Keshava’s role in Pushpa, admits to his crime. It is widely known that Actor Jagadeesh Bandari was arrested in a female artist’s suicide case. The actor had become popular after… [+1659 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Mypunepulse.com"
            },
            "author": null,
            "title": "Aishwarya Rai and Abhishek Bachchan Make Joint Appearance Amidst Divorce Rumors - Pune Pulse",
            "description": "Putting aside ongoing rumors of marital discord, Aishwarya Rai and Abhishek Bachchan made a public appearance together at the Dhirubhai Ambani International School Annual Day event in Mumbai. The couple, who have been at the center of various speculations, we…",
            "url": "https://www.mypunepulse.com/aishwarya-rai-and-abhishek-bachchan-make-joint-appearance-amidst-divorce-rumors/",
            "urlToImage": "https://www.mypunepulse.com/wp-content/uploads/2023/12/aishwaryaraiabhishekbachchandivorce-11-1702641451-jpg.webp",
            "publishedAt": "2023-12-17T10:39:13Z",
            "content": "Putting aside ongoing rumors of marital discord, Aishwarya Rai and Abhishek Bachchan made a public appearance together at the Dhirubhai Ambani International School Annual Day event in Mumbai. The cou… [+1546 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Siasat Daily"
            },
            "author": "Mumtaz Hussain Bhat",
            "title": "Tannaz Davoodi, viral Jamal Kudu girl from Animal: Pics, background & more - The Siasat Daily",
            "description": "Mumbai: Director Sandeep Reddy Vanga's 'Animal' is running successfully at the box office and is close to crossing the 800 crore mark. The movie's various scenes and dialogues are circulating online and among them is the Persian song 'Jamal Kudu' which is Bob…",
            "url": "https://www.siasat.com/tannaz-davoodi-viral-jamal-kudu-girl-from-animal-pics-background-more-2935365/",
            "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2023/12/tannaz-davoodi.jpg",
            "publishedAt": "2023-12-17T09:47:56Z",
            "content": "Mumbai: Director Sandeep Reddy Vanga’s ‘Animal’ is running successfully at the box office and is close to crossing the 800 crore mark. The movie’s various scenes and dialogues are circulating online … [+2010 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Flight attendant gets her shirt signed by ‘Animal’ cast including Ranbir Kapoor, Bobby Deol - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/trending/trending-in-india/flight-attendant-gets-shirt-signed-animal-ranbir-kapoor-bobby-deol-9071652/",
            "urlToImage": null,
            "publishedAt": "2023-12-17T09:46:12Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Medha Chawla",
            "title": "Alia Bhatt's Rs 2.5 lakh saree is fab, but her hairstyle is what you need to see - India Today",
            "description": "Alia Bhatt wore a beautiful organza saree to her friend's wedding ceremony. However, it was her hairstyle that stole the show.",
            "url": "https://www.indiatoday.in/lifestyle/fashion/story/alia-bhatt-yellow-saree-saree-friend-wedding-unique-braid-hairstyle-bridesmaids-2476996-2023-12-17",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/alia-bhatt-171443602-16x9_0.jpg?VersionId=L0vTlNriLc3LEwvV.KzLpTCtqevPVD1O",
            "publishedAt": "2023-12-17T09:21:19Z",
            "content": "Alia Bhatt turned a gorgeous bridesmaid as she attended her close friend Disha’s wedding ceremony in Mumbai. The actress also served a hearty dose of fashion inspiration for her fans with her super-s… [+1446 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Amidst pregnancy rumours, Anushka Sharma snapped in a baggy and chic jacket at the airport: pics inside - IndiaTimes",
            "description": "The rumours have been doing the rounds that Anushka Sharma and Virat Kohli are apparently expecting their second child. On Saturday, the 'Zero' actres",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/amidst-pregnancy-rumours-anushka-sharma-snapped-in-a-baggy-and-chic-jacket-at-the-airport-pics-inside/articleshow/106062160.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106062160,width-1070,height-580,imgsize-50346,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T08:55:53Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Gulte"
            },
            "author": "Satya B",
            "title": "#2YearsOfPushpa: All Eyes On Next Big Bonanza - Gulte",
            "description": "Icon star Allu Arjun and creative director Sukumar's mass spectacle, \"Pushpa: The Rise\", opened in theatres on 17th December 2021, and none expected that the film would deliver something Telugu cinema hadn't seen by that time. While fantasy and epic films do …",
            "url": "https://www.gulte.com/movienews/272922/2yearsofpushpa-all-eyes-on-next-big-bonanza",
            "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/12/img_6915-1.jpg",
            "publishedAt": "2023-12-17T08:20:11Z",
            "content": "Icon star Allu Arjun and creative director Sukumar’s mass spectacle, “Pushpa: The Rise”, opened in theatres on 17th December 2021, and none expected that the film would deliver something Telugu cinem… [+1359 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Shubhi Mishra",
            "title": "All you need to know about ketamine, the drug behind Matthew Perry's death - Moneycontrol",
            "description": "According to AFP, Matthew Perry was also addicted to ketamine but had reportedly been clean for 19 months prior to his passing. The autopsy revealed that the 'Friends' actor died from an accidental ketamine overdose.",
            "url": "https://www.moneycontrol.com/news/trends/all-you-need-to-know-about-ketamine-the-drug-behind-matthew-perrys-death-11915741.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/10/Chandler-3-770x433.jpg",
            "publishedAt": "2023-12-17T07:47:24Z",
            "content": "Matthew Perry, who played the role of Chandler on the superhit American sitcom Friends, died from an accidental ketamine overdose, medical examiners said on Friday after completing their investigatio… [+3179 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Massy class teaser of Nagarjuna’s Naa Saami Ranga unveiled - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/massy-class-teaser-of-nagarjunas-naa-saami-ranga-unveiled.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-17T07:30:00Z",
            "content": "Akkineni Nagarjuna has teamed up with director Vijay Binni, known for his background in choreography, for the upcoming film Naa Saami Ranga, slated for a Sankranthi release.\r\nThe much-anticipated tea… [+919 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Karan Singh Grover and Bipasha Basu twin in black as they get spotted with daughter Devi at Mumbai airport - Times of India",
            "description": "'Fighter' actor Karan Singh Grover was recently papped at Mumbai airport with his wife Bipasha Basu and little munchkin Devi. The star couple twinned in black as they got clicked walking towards the airport entry. Bipasha was holding the Devi in her arms and …",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/karan-singh-grover-and-bipasha-basu-twin-in-black-as-they-get-spotted-with-daughter-devi-at-mumbai-airport/videoshow/106059521.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106059521,imgsize-63432.cms",
            "publishedAt": "2023-12-17T06:21:16Z",
            "content": "Dec 17, 2023, 11:51AM ISTSource: IANS'Fighter' actor Karan Singh Grover was recently papped at Mumbai airport with his wife Bipasha Basu and little munchkin Devi. The star couple twinned in black as … [+196 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Bigg Boss Tamil 7: Cool Suresh gets evicted from the house - Times of India",
            "description": "Cool Suresh gets evicted from Bigg Boss Tamil 7, leaving viewers and housemates in shock. Kamal Haasan announces impending eviction, leading to intens",
            "url": "https://timesofindia.indiatimes.com/tv/news/tamil/bigg-boss-tamil-7-cool-suresh-gets-evicted-from-the-house/articleshow/106059279.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106059279,width-1070,height-580,imgsize-37534,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T06:07:55Z",
            "content": "From Natalie Portman to Margot Robbie: Best red carpet moments of 2023"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Inside Lin Laishram And Randeep Hooda's Mumbai Reception: \"And Then They Danced And Laughed\" - NDTV Movies",
            "description": "Randeep and Lin got married last month in Imphal",
            "url": "https://www.ndtv.com/entertainment/inside-lin-laishram-and-randeep-hoodas-mumbai-reception-and-then-they-danced-and-laughed-4689589",
            "urlToImage": "https://c.ndtvimg.com/2023-12/9tqv7e5g_randeep-_625x300_17_December_23.jpg",
            "publishedAt": "2023-12-17T06:00:43Z",
            "content": "Randeep Hooda shared this image. (courtesy: RandeepHooda)\r\nNew Delhi: New day, new post from Randeep Hooda and Lin Laishram's wedding festivities. The actors shared an adorable video from their Mumba… [+2301 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bollywood Hungama"
            },
            "author": "Bollywood Hungama",
            "title": "Bagheera Teaser OUT! Srii Murali makes a roaring comeback in thrilling tale of justice, watch - Bollywood Hungama",
            "description": "Hombale Films is gearing up for the grand release of their next biggest venture, Salaar Part 1: CeaseFire, starring Prabhas and directed by Prashanth Neel, on December 22, 2023. Ahead of the film’s grand release, the production house unveils another exciting …",
            "url": "https://www.bollywoodhungama.com/news/south-cinema/bagheera-teaser-srii-murali-makes-roaring-comeback-thrilling-tale-justice-watch/",
            "urlToImage": "https://media5.bollywoodhungama.in/wp-content/uploads/2023/12/Bagheera-Teaser-OUT-Srii-Murali-makes-a-roaring-comeback-in-thrilling-tale-of-justice.jpg",
            "publishedAt": "2023-12-17T05:56:24Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "soompi"
            },
            "author": "eclipse01",
            "title": "BTS's Jungkook Becomes 1st Korean Soloist To Spend 5 Weeks In Top 40 Of Billboard 200 - soompi",
            "description": "BTS’s Jungkook Becomes 1st Korean Soloist To Spend 5 Weeks In Top 40 Of Billboard 200",
            "url": "https://www.soompi.com/article/1632112wpp/btss-jungkook-becomes-1st-korean-soloist-to-spend-5-weeks-in-top-40-of-billboard-200",
            "urlToImage": "https://6.soompi.io/wp-content/uploads/image/20231217014750_jungkook-1-.jpeg?s=900x600&e=t",
            "publishedAt": "2023-12-17T01:54:39Z",
            "content": "Even after enlisting in the military, BTSs Jungkook continues to break records on the Billboard charts!\r\nFor the week ending on December 16, Jungkooks first solo album GOLDEN held relatively steady a… [+1188 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Shruti Haasan says alcohol was a ‘big thing’ of her life: I was never into drugs - Hindustan Times",
            "description": "Shruti Haasan in an interview talked about her journey to sobriety and recalled alcohol being a part of her life. She also said that she was never into drugs. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/shruti-haasan-recalls-always-wanting-to-drink-with-friends-alcohol-was-a-big-thing-in-my-life-i-was-never-into-drugs-101702775941150.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/6a7bc302-743d-11ec-a877-d9dc5eb1ebc2_1642075377558_1702777252065.jpg",
            "publishedAt": "2023-12-17T01:42:54Z",
            "content": "Shruti Haasan recently opened up about her journey to sobriety and shared why she decided to quit alcohol. Speaking to Untriggered with Aminjaz, she revealed that although she was never into drugs, s… [+2117 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Meenakshi on shooting for Hero with high fever; fainting while filming in snow - Hindustan Times",
            "description": "Hero, released in 1983, was directed by Subhash Ghai. The film starred Jackie Shroff and Meenakshi Seshadri. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/meenakshi-seshadri-recalls-shooting-for-hero-with-high-fever-how-she-fainted-while-filming-in-snow-101702732731536.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/meenakshi_seshadri_1624249448035_1702733245600.JPG",
            "publishedAt": "2023-12-17T00:56:52Z",
            "content": "Actor Meenakshi Seshadri has spoken about how she fainted and had to be carried on a stretcher during the shoot for her first film Painter Babu. Speaking with News18 Showsha, Meenakshi also recalled … [+2414 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gulte"
            },
            "author": "Shree Ram",
            "title": "Teaser: Rohith Shetty’s Copverse – Indian Police Force - Gulte",
            "description": "Prime Video India has released the first teaser for its upcoming series, 'Indian Police Force,' featuring Sidharth Malhotra in the lead role. This series, helmed by Rohit Shetty, is an extension of his CopVerse and will be available on Prime Video worldwide s…",
            "url": "https://www.gulte.com/movienews/272866/teaser-rohith-shettys-copverse-indian-police-force",
            "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/12/Indian-Police-Force.png",
            "publishedAt": "2023-12-17T00:30:32Z",
            "content": "Prime Video India has released the first teaser for its upcoming series, ‘Indian Police Force,’ featuring Sidharth Malhotra in the lead role. This series, helmed by Rohit Shetty, is an extension of h… [+874 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Leo Horoscope Today: December 17, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Leo horoscope for 17th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/leo-horoscope-today-december-17-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2022/02/Leo-866x487.jpg",
            "publishedAt": "2023-12-17T00:20:37Z",
            "content": "How do you want to say goodbye to 2023? Who do you want to kiss under the mistletoe whilst everybody around you is dancing to Santa Baby? Chop, chop, Leo! You dont want to wait until Christmas to let… [+378 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VOGUE India"
            },
            "author": "Woodstock Witch",
            "title": "Virgo Horoscope Today: December 17, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Virgo horoscope for 17th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/virgo-horoscope-today-december-17-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Virgo.jpg",
            "publishedAt": "2023-12-17T00:20:20Z",
            "content": "*This* is the good part! This is the part where things start coming together in the most unexpected manner. So, look beyond the illusion of chaos, Virgo. At the same time, dont be in a rush to move f… [+390 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Sundeep Kochar",
            "title": "Horoscope Today, December 17 By Astrologer Sundeep Kochar: Avoid Overcomplicating Life, Gemini - Zee News",
            "description": "",
            "url": "https://zeenews.india.com/photos/entertainment/horoscope-today-december-17-by-astrologer-sundeep-kochar-avoid-overcomplicating-life-gemini-2699300",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/15/1336709-geminiastro.jpg",
            "publishedAt": "2023-12-16T23:55:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by India TV Lifestyle Desk",
            "title": "Horoscope Today, December 17: Favorable day for Virgo, know about other zodiac signs - India TV News",
            "description": "Horoscope Today, December 17: Check what your zodiac sign has in store for you",
            "url": "https://www.indiatvnews.com/astrology/horoscope-today-december-17-favorable-day-for-virgo-know-about-other-zodiac-signs-2023-12-16-907588",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/download-4-1702727488.jpg",
            "publishedAt": "2023-12-16T23:45:01Z",
            "content": "Today is the fifth day of Margashirsha Shukla Paksha and Sunday. Panchami Tithi will last till 5:34 pm today. Harshana Yoga will remain till tonight at 12:35. Also Dhanishtha Nakshatra will remain ti… [+6760 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Quint"
            },
            "author": "Saima Andrabi",
            "title": "Wordle 911 Answer: Hints and Clues To Guess Word of the Day on 17 December 2023 - The Quint",
            "description": "Wordle 911 Answer for Sunday, 17 December 2023: Today's answer may be tricky to guess. Use our hints and clues to guess the solution.",
            "url": "https://www.thequint.com/tech-and-auto/tech-news/wordle-911-answer-hints-and-clues-to-guess-word-of-the-day-easily-latest-details",
            "urlToImage": "https://images.thequint.com/thequint%2F2023-08%2F6066a4b3-8c1c-4dd5-bdcf-4cbaf8ddf5d7%2FWhatsApp_Image_2022_02_18_at_11_31_46_AM.jpeg?rect=0%2C48%2C1280%2C672",
            "publishedAt": "2023-12-16T18:31:00Z",
            "content": "Wordle Answer Today: Wordle is an online puzzle played by millions of users across the globe. Players have to guess a five letter word of the day in six attempts. Wordle answers are often tricky to g… [+473 chars]"
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
            "title": "5 best and cheapest Apple smartwatches to suit your budget - Hindustan Times",
            "description": "5 best and cheapest Apple smartwatches: Discover top 5 cheapest Apple smartwatches that blend style and technology without breaking the bank.",
            "url": "https://www.hindustantimes.com/technology/5-best-and-cheapest-apple-smartwatches-to-suit-your-budget-101702881703516.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/daniel-canibano-JE3ASpuEld4-unsplash_1702883123843_1702883146281.jpg",
            "publishedAt": "2023-12-18T10:34:26Z",
            "content": "Apple is a brand that boasts unparalleled innovation and style, particularly evident in its range of smartwatches. Known for their sleek design, advanced features, and robust functionality, Apple sma… [+19533 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "DNA Web Team",
            "title": "Humanity should have a moon base, cities on Mars: Elon Musk - DNA India",
            "description": "Musk has bigger plans for traveling beyond Earth's orbit.",
            "url": "https://www.dnaindia.com/science/report-humanity-should-have-a-moon-base-cities-on-mars-elon-musk-3071960",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/12/18/2620200-elon-musk.jpg",
            "publishedAt": "2023-12-18T10:31:00Z",
            "content": "Musk has bigger plans for traveling beyond Earth's orbit.\r\nHalf a century has passed since the last Moon landing, which is disappointing for humanity and we should now aim to have a living base in sp… [+1215 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran Josh"
            },
            "author": "Nikhil Batra",
            "title": "Google's New Tracking Protection in Chrome Blocks Third-Party Cookies - Jagran Josh",
            "description": "Google will block third party cookies for 30 million people on January 4 2024 and it will improve privacy of users. Here are all the details about this new move.",
            "url": "https://www.jagranjosh.com/general-knowledge/google-is-eliminating-cookies-in-the-new-year-1702895352-1",
            "urlToImage": "https://img.jagranjosh.com/images/2023/December/18122023/chrome.jpg",
            "publishedAt": "2023-12-18T10:29:02Z",
            "content": "As a part of increasing online privacy, Google is blocking third-party cookies for 1% of Chrome users, roughly 30 million people. This move will be implemented on January 4, 2024, and marks a signifi… [+2364 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Affiliate Desk",
            "title": "9 best Samsung 6.5 kg fully automatic washing machines: Choose from top models - Hindustan Times",
            "description": "9 best Samsung 6.5 kg fully automatic washing machines: Elevate your laundry routine with Samsung's top fully automatic washing machines. Here's a buying guide.",
            "url": "https://www.hindustantimes.com/technology/9-best-samsung-6-5-kg-fully-automatic-washing-machines-choose-from-top-models-101702882826617.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/MixCollage-18-Dec-2023-01-11-PM-610_1702885327709_1702885337154.jpg",
            "publishedAt": "2023-12-18T10:27:26Z",
            "content": "Introduction\r\n9 best Samsung 6.5 kg fully automatic washing machines: Experience convenience and performance in one sleek package!\r\nOur daily routines have undergone a transformative shift in recent … [+18659 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ANI News"
            },
            "author": "ANI News",
            "title": "MediaTek Highlights Innovation in Next-Gen Smartphones, Smart Devices, Automotive and Connectivity Solutions - ANI News",
            "description": null,
            "url": "https://www.aninews.in/news/business/business/mediatek-highlights-innovation-in-next-gen-smartphones-smart-devices-automotive-and-connectivity-solutions20231218153805",
            "urlToImage": null,
            "publishedAt": "2023-12-18T10:08:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Boudhaditya Sanyal",
            "title": "10 best dishwashers in India: Say goodbye to dirty dishes | Mint - Mint",
            "description": "10 best dishwashers in India: Never encounter a sink full of dirty dishes. Bring home the best dishwashers that will take the burden of dirty dishes off your shoulders and ensure you get clean utensils. Check out the top options and add value to your kitchen.",
            "url": "https://www.livemint.com/technology/gadgets/10-best-dishwashers-in-india-say-goodbye-to-dirty-dishes-11702880778812.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/best_dishwasher_in_India_1702882067265_1702882067456.jpg",
            "publishedAt": "2023-12-18T09:55:22Z",
            "content": "In the bustling rhythm of life in India, where each day brims with activity, the modern kitchen has become a hub of innovation, striving to balance traditional culinary practices with contemporary ne… [+19795 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "Business Standard",
            "title": "Nothing to debut new smartphone series at the Mobile World Congress: Report - Business Standard",
            "description": null,
            "url": "https://www.business-standard.com/technology/tech-news/nothing-to-debut-new-smartphone-series-at-the-mobile-world-congress-report-123121800552_1.html",
            "urlToImage": null,
            "publishedAt": "2023-12-18T09:54:32Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Top Amazon year-end deals on smartphones: Apple iPhone 13, OnePlus 11R 5G and more | Mint - Mint",
            "description": "Amazon is offering enticing deals on popular smartphones like iPhone 13, OnePlus Nord CE 3 Lite, iQOO Z7 Pro, Redmi 12 5G, and more. Enjoy discounts, no-cost EMI, and exchange offers, as the year end offers.",
            "url": "https://www.livemint.com/technology/gadgets/top-amazon-year-end-deals-on-smartphones-apple-iphone-13-oneplus-11r-5g-and-more-11702892457448.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/Apple-iPhone13_1646912229120_1702892818327.jpg",
            "publishedAt": "2023-12-18T09:54:25Z",
            "content": "Amazon is back with offerings and deals on the selection of latest smartphones. Customers can grab their favorite device from popular brands such as OnePlus, Samsung, realme narzo, Xiaomi, Apple, iQO… [+3571 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Microsoft silently fixes annoying bug on Windows 11 OS - The Indian Express",
            "description": "Microsoft has finally fixed a bug that caused Windows 11 File Explorer to randomly pop-up in the foreground when using other apps or playing games.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/microsoft-windows-11-file-explorer-randomly-popping-up-bug-fixed-9072786/",
            "urlToImage": "https://images.indianexpress.com/2023/12/Windows-11-Microsoft-2-1.jpg",
            "publishedAt": "2023-12-18T09:52:31Z",
            "content": "Microsoft introduced tabbed File Explorer last year with the Windows 11 Moment 2 update. However, soon after users installed the update, many started complaining that the File Explorer window was ran… [+1299 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Dress Sharp: Explore Premium Brands in Formal Men's Shoes and Sandals, Now at up To 65% Off - NDTV",
            "description": "Step into confidence and redefine your formal footwear game! Explore top picks in premium formal shoes from Amazon at up to 65% off.",
            "url": "https://www.ndtv.com/shopping/dress-sharp-explore-premium-brands-in-formal-mens-shoes-and-sandals-now-at-up-to-65-off-4686293",
            "urlToImage": "https://c.ndtvimg.com/2023-12/u0c2s52o_mens-formal-shoes_625x300_16_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675?ver-20231203.06",
            "publishedAt": "2023-12-18T09:41:59Z",
            "content": "Hey there, shoppers! Welcome to a realm of sophistication and style. Our carefully curated lineup of formal men's shoes and sandals from top-notch brands is here to take your fashion game to new heig… [+9037 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "In Pics: From Google Pixel tablet to Samsung Galaxy Tab S9 Ultra, check out the best premium tablets of 2023 - HT Tech",
            "description": "Throughout the year, we’ve seen the launch of several flagship tablets that pack great displays, powerful processors, and big batteries. Check out the best premium tablets of 2023 including Samsung Galaxy Tab S9 Ultra, Google Pixel tablet, OnePlus Pad, and mo…",
            "url": "https://tech.hindustantimes.com/photos/in-pics-from-google-pixel-tablet-to-samsung-galaxy-tab-s9-ultra-check-out-the-best-premium-tablets-of-2023-71702891736046.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/pixel_1702037624040_1702891830909.jpg",
            "publishedAt": "2023-12-18T09:39:54Z",
            "content": "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved."
          },
          {
            "source": {
              "id": null,
              "name": "SamMobile"
            },
            "author": "SamMobile, Asif Iqbal Shaik",
            "title": "Samsung Galaxy F54 gets Android 14 and One UI 6.0 update in India - SamMobile - Samsung news",
            "description": "Samsung has released the Android 14 update to one more mid-range device: Galaxy F54 5G. The new update is now ...",
            "url": "https://www.sammobile.com/news/galaxy-54-android-14-one-ui-6-0-update/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/06/Galaxy-F54-5G-review-11-720x405.jpg",
            "publishedAt": "2023-12-18T09:23:00Z",
            "content": "Samsung has released the Android 14 update to one more mid-range device: Galaxy F54 5G. The new update is now available in India, and it comes a few weeks after the Galaxy A54 and other Galaxy A5x se… [+1380 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "ET Telecom",
            "title": "Apple to let app developers bundle subscription discounts for customers - ETTelecom",
            "description": "Developers will be able to base this on subscriptions \"from one developer or two different developers\" as long as both subscriptions remain active.",
            "url": "https://telecom.economictimes.indiatimes.com/news/devices/apple-to-let-app-developers-bundle-subscription-discounts-for-customers/106086600",
            "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-106086600,imgsize-79334,width-1200,height=765,overlay-ettelecom/devices/apple-to-let-app-developers-bundle-subscription-discounts-for-customers.jpg",
            "publishedAt": "2023-12-18T09:11:04Z",
            "content": "San Francisco: Apple has announced a programme called \"contingent pricing for subscriptions\" that will allow App Store developers offer discounts for customers with multiple subscriptions.The 'Contin… [+1331 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "iPhone 16 could have a ‘Capture Button,’ here’s what it’ll do - Times of India",
            "description": "Apple replaced the mute switch on the iPhone 15 Pro with the Action Button, which can be customised for various functions. Apple is working on bringin",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/iphone-16-could-have-a-capture-button-heres-what-itll-do/articleshow/106086157.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106086106,width-1070,height-580,imgsize-26310,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T08:53:43Z",
            "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Xiaomi teases “world first” feature for Redmi Note 13 Pro Plus ahead of January 4 launch in India - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/life/technology-xiaomi-teases-world-first-feature-for-redmi-note-13-pro-plus-ahead-of-january-4-launch-in-india-3341278/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T08:48:41Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Education Desk",
            "title": "Cracking the code: Common questions and challenges in Data Science interviews - India Today",
            "description": "Data science interviews test machine learning understanding, coding skills, data interpretation, domain knowledge, and ethical AI comprehension. Overcoming challenges requires mastering statistics, staying updated, and improving communication for success in t…",
            "url": "https://www.indiatoday.in/education-today/featurephilia/story/cracking-the-code-common-questions-and-challenges-in-data-science-interviews-2477353-2023-12-18",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/unlocking-success-4-ways-to-ace-your-job-search-310220-16x9.jpg?VersionId=zbCtAMjB6u7A_u5LXQP43QuSkPk8VKNH",
            "publishedAt": "2023-12-18T08:42:06Z",
            "content": "Data Science and data scientists are no longer just buzzwords; they drive our data-driven world. The allure of data science lies in understanding the patterns and insights concealed in numbers. With … [+4818 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Tech News Today: WhatsApp pin multiple messages, Poco F5 HyperOS update, and more - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/technology/tech-news-today-whatsapp-to-soon-let-users-pin-multiple-messages-poco-f5-gets-hyperos-update-and-more-9072669/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T08:41:33Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Zeeshan Khan",
            "title": "PUBG Mobile solo guide for December 2023 - Sportskeeda",
            "description": "In the fiercely competitive battle royale game PUBG Mobile, survival demands cunning, skill, and fast thinking.",
            "url": "https://www.sportskeeda.com/esports/pubg-mobile-solo-guide-december-2023",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/8591c-17028792776644-1920.jpg",
            "publishedAt": "2023-12-18T08:30:00Z",
            "content": "In the fiercely competitive battle royale game PUBG Mobile, survival demands cunning, skill, and fast thinking. Playing alone could be more challenging because you won't have others to rely on for as… [+3412 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Ashish Singh",
            "title": "Upcoming Mobiles 2024: From Samsung Galaxy S24 Ultra To Redmi Note 13 Pro To ROG Phone 8, Phones That Will Launch In January - Jagran English",
            "description": "Upcoming Phones 2024: Samsung Galaxy S24 series, OnePlus 12, Vivo X100 series along with Redmi Note 13 series and ASUS ROG Phone 8 are set to launch in India next month.",
            "url": "https://english.jagran.com/technology/upcoming-mobiles-2024-redmi-note-13-pro-plus-price-note-13-pro-launch-date-samsung-galaxy-s24-ultra-price-rog-phone-launch-date-upcoming-phones-in-january2024-10121138",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/Upcoming Phone 20241702888214287.jpg",
            "publishedAt": "2023-12-18T08:24:00Z",
            "content": "Upcoming Mobiles 2024: Next month is quite exciting for tech fans as there are a lot of smartphones that are going to make their India debut. Brands like Samsung, Vivo, and OnePlus are going to intro… [+2433 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Tarin Hussain",
            "title": "Best 8K And 4K Smart TV For 2024 - Jagran English",
            "description": "Best 8K And 4K Smart TV For 2024: Thinking about kicking off 2024 with a shiny new 8K or 4K TV? Our list features the top online options, promising a smart, long-term investment for years of enjoying your favorite movies and shows. Imagine every guest in your…",
            "url": "https://english.jagran.com/top-deals/electronics/television/best-8k-and-4k-smart-tv-10121122",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/chauhan-moniz-3A0bs74T8zc-unsplash1702884213184.jpg",
            "publishedAt": "2023-12-18T08:16:37Z",
            "content": "Best 8K And 4K Smart TV For 2024: As we enter 2024, why not gift yourself a new 8K or 4K smart TV? It's a perfect present for the New Year, promising years of enjoyment and a smart investment for the… [+9678 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Beebom"
            },
            "author": "Arjun Sha",
            "title": "Google Gemini AI: Multimodal, GPT-4 Competitor, and More - Beebom",
            "description": "Google Gemini AI models have set a new benchmark in the AI industry and it is being touted to outrank OpenAI's GPT-4 model.",
            "url": "https://beebom.com/google-gemini-ai/",
            "urlToImage": "https://beebom.com/wp-content/uploads/2023/12/google-gemini-logo.jpg",
            "publishedAt": "2023-12-18T08:06:52Z",
            "content": "At the Google I/O 2023 conference in June, the company showed us a glimpse of Gemini, its most-capable AI model. And finally, before the end of 2023, Google released the Gemini AI models to the publi… [+11560 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Mridul Dutta",
            "title": "5 reasons to own Dinka Jester RR in GTA Online - Sportskeeda",
            "description": "Since its introduction in July 2021, the Dinka Jester RR has remained a popular car in GTA Online. It is the latest and best Jester car in the multiplayer game.",
            "url": "https://www.sportskeeda.com/gta/5-reasons-dinka-jester-rr-gta-online",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/601d8-17028792891767-1920.jpg",
            "publishedAt": "2023-12-18T08:01:00Z",
            "content": "Since its introduction in July 2021, the Dinka Jester RR has remained a popular car in GTA Online. It is the latest and best Jester car in the multiplayer game. The Jester RR has many characteristics… [+3581 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Garena Free Fire MAX Redeem Codes for December 18: Freebies on offer! Nab them this way - HT Tech",
            "description": "Garena Free Fire MAX Redeem Codes for December 18: Want to get your hands on amazing freebies and make your character stand out from other players? Check out Garena Free Fire MAX Redeem Codes for December 18.",
            "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-max-redeem-codes-for-december-18-freebies-on-offer-nab-them-this-way-71702885861053.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/5fbbe765304d5e1a569da09fc4caaef7jpg_1643590442850_1702885930929.jpg",
            "publishedAt": "2023-12-18T07:57:04Z",
            "content": "Garena Free Fire MAX Redeem Codes for December 18: Garena Free Fire MAX is an extremely popular battle royale game with millions of players around the world. In the game, players must take part in ba… [+2518 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Top 5 YouTube channels to increase your knowledge in a spell-binding manner; check list - HT Tech",
            "description": "Looking for some inspiring and knowledgeable YouTube channels? Check out the list of top 5 YouTube channels that may be useful to you as these enhance knowledge in an entertaining manner.",
            "url": "https://tech.hindustantimes.com/photos/top-5-youtube-channels-to-increase-your-knowledge-in-a-spell-binding-manner-check-list-71702883622674.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/christian-wiediger-usWE9pOuTfE-unsplash_1699941530791_1702883670990.jpg",
            "publishedAt": "2023-12-18T07:18:34Z",
            "content": "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved."
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Vikas Yadav",
            "title": "Redmi 13C Alternative POCO C65 Flipkart Sale Is Now Live In India; Check Price, Bank Offers, Specifications - Jagran English",
            "description": "POCO C65 Price: The core specifications of the budget handset are similar to the newly launched Redmi 13C 4G handset that is also available in India. If you plan to buy a budget 4G smartphone in India in the sub-Rs 10,000 bracket, here are the price, bank off…",
            "url": "https://english.jagran.com/technology/poco-c65-price-in-india-flipkart-sale-now-live-bank-offers-exchange-discount-specifications-processor-camera-10121119",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/poco-c65-price-in-india-flipkart1702884195342.jpg",
            "publishedAt": "2023-12-18T07:10:00Z",
            "content": "POCO C65 Price In India: POCO, a Chinese smartphone maker, launched the POCO C65 handset in India for buyers. The device ships with a MediaTek Helio G85 chipset and a 5,000mAh battery. The core speci… [+1880 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Wireless headphones, action cameras and more: How India shopped on Flipkart in 2023 - Times of India",
            "description": "Flipkart releases FlipTrends Report highlighting trends in Indian online shopping; 7 hours spent on Flipkart by shoppers; 41 million new customers til",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/wireless-headphones-action-cameras-and-more-how-india-shopped-on-flipkart-in-2023/articleshow/106081770.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106081770,width-1070,height-580,imgsize-54076,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T07:08:20Z",
            "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Spencer Whitworth",
            "title": "10 best Minecraft mods that add similar features from the 1.21 update - Sportskeeda",
            "description": "Minecraft's 1.",
            "url": "https://www.sportskeeda.com/minecraft/10-best-minecraft-mods-add-similar-features-1-21-update",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/424c3-17028706489186-1920.jpg",
            "publishedAt": "2023-12-18T07:07:00Z",
            "content": "Minecraft's 1.21 update is still likely months away, but players have been able to get their hands on some upcoming features from recent betas, including the armadillo mod, the crafter block, trial c… [+9178 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Neeraj Bansal",
            "title": "Is it worth getting Annis Remus in GTA Online in 2023 and beyond? - Sportskeeda",
            "description": "The Annis Remus is one of the few forgotten cars in GTA Online in 2023.",
            "url": "https://www.sportskeeda.com/gta/is-worth-getting-annis-remus-gta-online-2023-beyond",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/fed88-17028747465982-1920.jpg",
            "publishedAt": "2023-12-18T06:59:00Z",
            "content": "The Annis Remus is one of the few forgotten cars in GTA Online in 2023. The main reason behind it is the addition of so many new vehicles over the years that some are bound to go unnoticed under the … [+2975 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "DH Web Desk",
            "title": "Instagram gets gen AI-powered editing tool with text-to-image generator - Deccan Herald",
            "description": null,
            "url": "https://www.deccanherald.com/technology/instagram-gets-gen-ai-powered-editing-tool-with-text-to-image-generator-2815371",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2F46fc00df-a2ba-4fb3-819e-5f92e8da963b%2FInstagram_AI_text_to_photo_generator_tool_.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-18T06:58:29Z",
            "content": "With over 2.35 billion active user base, Instagram is one of the most popular social media platforms, particularly among youth around the world. It is a tough job to keep people hooked to the platfor… [+993 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Geospatial World"
            },
            "author": "News Desk",
            "title": "SpaceX Alums' Startup Sift Raises $7.5M for Telemetry Stack Growth - Geospatial World",
            "description": "The end-to-end software stack accelerates hardware development and operations for machine-driven companies that range from transportation to space, and everything in between",
            "url": "https://www.geospatialworld.net/news/spacex-alums-startup-sift-raises-7-5m-for-telemetry-stack-growth/",
            "urlToImage": "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2023/12/rsz_1sift_logs.jpg.webp",
            "publishedAt": "2023-12-18T06:54:14Z",
            "content": "Sift, a startup founded by former SpaceX software engineers, has recently secured $7.5 million in funding and is on a mission to revolutionize the way machine data is recorded, visualized, and interp… [+2276 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Diana George",
            "title": "How To Use Instagram’s New Video Notes Feature: Step-By-Step Guide - Times Now",
            "description": "Instagram has rolled out a new upgrade to its Notes feature. Users of the photo sharing app can now post two-second short video clips that will play on loop for a period of 24 hours.",
            "url": "https://www.timesnownews.com/technology-science/how-to/how-to-use-instagrams-new-video-notes-feature-step-by-step-guide-article-106080322",
            "urlToImage": "https://static.tnn.in/thumb/msid-106080708,thumbsize-1097101,width-1280,height-720,resizemode-75/106080708.jpg",
            "publishedAt": "2023-12-18T06:48:15Z",
            "content": "Instagram has rolled out a new upgrade to its Notes feature. Users of the photo sharing app can now post two-second short video clips that will play on loop for a period of 24 hours. (Photo: Unsplash)"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Medha Jha",
            "title": "Google Pixel 9 may pack advanced AI assistant 'Pixie'; will track your Gmail, Google Maps data - HT Tech",
            "description": "According to a report, the Google Pixel 9 will come with an exclusive AI assistant known as 'Pixie' that will track your Gmail and Google Maps data.",
            "url": "https://tech.hindustantimes.com/tech/news/google-pixel-9-may-pack-advanced-ai-assistant-pixie-will-track-your-gmail-google-maps-data-71702880605270.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/Google_Gemini_1701885704849_1702880799363.png",
            "publishedAt": "2023-12-18T06:28:52Z",
            "content": "Google released the Google Pixel 8 this year with great anticipation, now it is gearing up already for the launch of the Google Pixel 9 series in 2024. Various speculations and rumors have started to… [+2215 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Edited by Saumya Nigam",
            "title": "Apple agrees to pay $25 million for settling Family Sharing lawsuit | Deets here - India TV News",
            "description": "Although Apple has denied all the allegation on making any misleading misrepresentations or any allegations on wrongdoing.",
            "url": "https://www.indiatvnews.com/technology/news/apple-agrees-to-pay-25-million-for-settling-family-sharing-lawsuit-deets-here-2023-12-18-907761",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/apple-file-1702880023.jpg",
            "publishedAt": "2023-12-18T06:16:58Z",
            "content": "Apple has reportedly agreed to pay USD 25 million to settle a lawsuit which was filed over its family-sharing feature. The lawsuit was filed in 2019 and alleged the tech giant misrepresented the abil… [+1356 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "IANS",
            "title": "Google to end geofence warrant requests for users location data - Zee Business",
            "description": "Google has moved to end a long-running surveillance practice called “geofence warrants”, a practice that allowed law enforcement agencies to use Googles location data to identify potential criminals.",
            "url": "https://www.zeebiz.com/companies/news-google-to-end-geofence-warrant-requests-for-users-location-data-269100",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/18/272942-u5l4xbxf3bjg3ervjwtocedbdq.jpg",
            "publishedAt": "2023-12-18T06:06:01Z",
            "content": "Google has moved to end a long-running surveillance practice called geofence warrants, a practice that allowed law enforcement agencies to use Google's location data to identify potential criminals.\r… [+2025 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gadgets360.com"
            },
            "author": "Sucharita Ganguly, Siddharth Suvarna",
            "title": "Apple's 4th Generation AirPods to Get New Design, Updated Case, ANC Support: Mark Gurman - Gadgets 360",
            "description": "Apple is expected to bring in significant upgrades including design changes to the purported fourth generation of Apple AirPods. Recent reports suggest that Apple will launch two versions of the AirPods (4th Generation) at two different price points. Apple an…",
            "url": "https://www.gadgets360.com/audio/news/apple-airpods-fourth-generation-earbuds-design-updates-report-mark-gurman-4695013",
            "urlToImage": "https://i.gadgets360cdn.com/large/airpods_3rd_gen_apple_1702875710133.jpg",
            "publishedAt": "2023-12-18T06:02:24Z",
            "content": "Apple is expected to introduce its next generation of truly wireless stereo (TWS) earphones in 2024. It is said to succeed the AirPods (3rd Generation) earbuds, which were launched in October 2021. T… [+2211 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Mastering the art of business promotion: A step-by-step guide on how to create a Facebook page - HT Tech",
            "description": "In the ever-evolving landscape of online business, establishing a robust digital presence is paramount. One of the fundamental steps towards achieving this goal is by creating a Facebook Page. Here is how to create a Facebook page.",
            "url": "https://tech.hindustantimes.com/how-to/mastering-the-art-of-business-promotion-a-step-by-step-guide-on-how-to-create-a-facebook-page-71702555103864.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/14/1600x900/hggggggggggggt_1702555267920_1702555283770.jpg",
            "publishedAt": "2023-12-18T05:24:50Z",
            "content": "Creating a Facebook Page for your business is an essential step in establishing an online presence and reaching a broader audience. Facebook Page offers a range of free business tools to help you ach… [+2338 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gadgets360.com"
            },
            "author": "Nithya P Nair, Siddharth Suvarna",
            "title": "Vivo X100, Vivo X100 Pro With MediaTek Dimensity 9300 SoC Teased to Launch in India Soon - Gadgets 360",
            "description": "Vivo X100 series has been teased to launch in India soon. The Chinese smartphone brand has created a dedicated microsite on its India website to tease the arrival of the new Vivo X series smartphones. The Vivo X100 and Vivo X100 Pro with brand-new MediaTek Di…",
            "url": "https://www.gadgets360.com/mobiles/news/vivo-x100-pro-india-launch-teaser-microsite-price-specifications-expected-4694903",
            "urlToImage": "https://i.gadgets360cdn.com/large/vivo_x100_white_moonlight_1699934990068.jpg",
            "publishedAt": "2023-12-18T05:21:34Z",
            "content": "Vivo X100 series has been teased to launch in India soon. The Chinese smartphone brand has created a dedicated microsite on its India website to tease the arrival of the new Vivo X series smartphones… [+2190 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "ROG Phone 8 series to feature gimbal stabilization for smoother videos - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/2023/12/18/rog-phone-8-series-to-feature-gimbal-stabilization-for-smoother-videos/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T05:17:06Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "Samsung Galaxy S24 Series Leak Sheds Light on Storage and Color Variants - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/2023/12/18/samsung-galaxy-s24-series-leak-sheds-light-on-storage-and-color-variants/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T05:16:14Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": null,
            "title": "Microsoft Bing misleads election data: Report - The Financial Express",
            "description": "Bing’s AI chatbot gave wrong answers 30% of the time",
            "url": "https://www.financialexpress.com/business/digital-transformation-microsoft-bing-misleads-election-data-report-3341017/",
            "urlToImage": "https://www.financialexpress.com/wp-content/uploads/2023/11/Untitled-design-2023-11-09T161142.732.jpg",
            "publishedAt": "2023-12-18T05:15:15Z",
            "content": "A study from two Europe-based nonprofits has found that Microsofts artificial intelligence (AI) Bing chatbot, now rebranded as Copilot, produces misleading results on election information and misquot… [+783 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Quint"
            },
            "author": "Shivangani Singh",
            "title": "WhatsApp To Introduce Album Creation Feature For Channels Soon - The Quint",
            "description": "the 'automatic album creation' feature will be tested by the beta users before being introduced to users across the world. Know more about the feature in detail below",
            "url": "https://www.thequint.com/tech-and-auto/tech-news/whatsapp-to-introduce-album-creation-feature-for-channels-soon",
            "urlToImage": "https://images.thequint.com/thequint%2F2023-02%2F847e387e-5997-417f-8a45-642f5c5809a5%2Fd893153be028e4844dc7fbf523494bbc.jpg",
            "publishedAt": "2023-12-18T05:07:28Z",
            "content": "The WhatsApp channel has introduced an automatic album which is sure to bring about a significant advantage to channel owners when it becomes available for the public.\r\nThis new WhatsApp functionalit… [+1020 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "10 top Dell Laptops: With Christmas coming, here is a great gadget gifting guide for you - HT Tech",
            "description": "10 top Dell Laptops: With Christmas around the corner, you must be looking for special gifts. Check out this laptop gifting guide and pick the perfect one.",
            "url": "https://tech.hindustantimes.com/laptops-pc/news/10-top-dell-laptops-with-christmas-coming-here-is-a-great-gadget-gifting-guide-for-you-71702873471120.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/Dell_1689238079598_1702874979346.png",
            "publishedAt": "2023-12-18T05:00:26Z",
            "content": "10 top Dell Laptops: With Christmas around the corner, you must be looking for special gifts for your loved ones or perhaps, even for yourself. So, if that is the case, check out this laptop gifting … [+16346 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Team-BHP"
            },
            "author": "Utkarsh Chaudhary",
            "title": "Car facelifts that lacked the visual charm of their previous models - Team-BHP",
            "description": "BHPian AYP recently shared this with other enthusiasts. This thread is to point out the instances of a manufacturer spoiling the looks of their car in the process of facelifting it. Let me do the honours:Skoda-: The Octavia MK2 (Laura) pre-facelift, was my fa…",
            "url": "https://www.team-bhp.com/news/car-facelifts-lacked-visual-charm-their-previous-models",
            "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/2023-mg-hector-facelift-01_2.jpg",
            "publishedAt": "2023-12-18T04:59:00Z",
            "content": "Mahindra Bolero, when launched, had a very macho appeal and a crude, simple, yet elegant design. Now, I feel it has a chrome-filled cartoonish face.\r\nBHPian AYP recently shared this with other enthus… [+3081 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Mysmartprice.com"
            },
            "author": "https://www.facebook.com/basithrahmanpp",
            "title": "iQOO Neo 9 Pro, Neo 9 China Launch Date Confirmed: iQOO Watch, iQOO TWS 1e to Debut Alongside - MySmartPrice",
            "description": "iQOO has confirmed launch date of the iQOO Neo 9 and iQOO Neo 9 Pro smartphones in China.",
            "url": "https://www.mysmartprice.com/gear/iqoo-neo-9-pro-neo-9-china-launch-date-confirmed-iqoo-watch-iqoo-tws-1e-to-debut-alongside/",
            "urlToImage": "https://assets.mspimages.in/gear/wp-content/uploads/2023/12/iQOO-Neo-9-series-launch-MSP-feature.png",
            "publishedAt": "2023-12-18T04:50:15Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "Google introduces 3 new features to make life of online shoppers easier - MSN",
            "description": null,
            "url": "https://www.msn.com/en-in/money/news/google-introduces-3-new-features-to-make-life-of-online-shoppers-easier/ar-AA1lCz8z?ocid=finance-verthp-feeds",
            "urlToImage": null,
            "publishedAt": "2023-12-18T04:48:42Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Greater Kashmir"
            },
            "author": "SHABIR IBN YUSUF",
            "title": "CERT-In issues high-risk warning for Apple, Samsung users - greaterkashmir - Greater Kashmir",
            "description": "Says vulnerabilities can put users’ sensitive information at risk",
            "url": "https://www.greaterkashmir.com/tech/cert-in-issues-high-risk-warning-for-apple-samsung-users/",
            "urlToImage": "https://www.greaterkashmir.com/wp-content/uploads/2023/08/iphone_830480_1280.jpg",
            "publishedAt": "2023-12-18T04:10:54Z",
            "content": "Srinagar, Dec 17: The Indian Computer Emergency Response Team (CERT-In) has flagged severe vulnerabilities in Apple and Samsung product users and said that the vulnerabilities could put users’ sensit… [+2505 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tech Wire Asia"
            },
            "author": "Dashveenjit Kaur",
            "title": "Can Intel AI chips challenge AMD and Nvidia? - Tech Wire Asia",
            "description": "Intel ushered in the AI PC era with Core Ultra chips tailored for Windows laptops and PCs and introduced new 5th gen Xeon server processors.",
            "url": "https://techwireasia.com/12/2023/how-will-intel-ai-chips-for-pcs-and-data-centers-challenge-amd-and-nvidia/",
            "urlToImage": "https://techwireasia.com/wp-content/uploads/2023/12/GBVwD7YaYAAcY_5-scaled.jpg",
            "publishedAt": "2023-12-18T01:33:20Z",
            "content": "<ul><li>Intel ushered in the AI PC era with Core Ultra chips tailored for Windows laptops and PCs and introduced new fifth-generation Xeon server processors.</li><li>Intel CEO Pat Gelsinger also show… [+7848 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "GSMArena.com"
            },
            "author": "Sagar",
            "title": "Samsung Galaxy S23 FE's Snapdragon variant could launch soon in India - GSMArena.com news - GSMArena.com",
            "description": "The Snapdragon model is currently exclusive to the US. The Samsung Galaxy S23 FE unveiled in October comes in two versions - one powered by the Exynos 2200...",
            "url": "https://www.gsmarena.com/samsung_galaxy_s23_fe_snapdragon_model_india_launch_expected-news-60938.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/12/samsung-galaxy-s23-fe-snapdragon-model-india-launch-expected/-952x498w6/gsmarena_001.jpg",
            "publishedAt": "2023-12-18T01:22:01Z",
            "content": "The Samsung Galaxy S23 FEunveiled in October comes in two versions - one powered by the Exynos 2200 SoC and another having the Snapdragon 8 Gen 1 chip at the helm. The Snapdragon version is currently… [+1162 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Want to boost your task management and productivity skills? Know how Things 3 app can help - HT Tech",
            "description": "Want to boost your task management and productivity skills Know how Things 3 app can help Want to stay on top of your daily tasks and improve productivity Check out this effective task management app called Things 3 to help you get ahead of colleagues and imp…",
            "url": "https://tech.hindustantimes.com/web-stories/want-to-boost-your-task-management-and-productivity-skills-know-how-things-3-app-can-help-71702874702433.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/g635a2e6b289_1702875183702_1702875636880.jpg/",
            "publishedAt": "2023-12-17T23:31:02Z",
            "content": "Photo Credit: Pixabay\r\n Want to stay on top of your daily tasks and improve productivity? Check out this effective task management app called Things 3 to help you get ahead of colleagues and impress … [+1686 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Best Phones Under Rs 25,000 - ABP Live",
            "description": "From OnePlus Nord CE 3 to Redmi Note 12 Pro, here are the best smartphones you can buy under Rs 25,000.",
            "url": "https://news.abplive.com/web-stories/best-phones-under-rs-25000-iqoo-z7-pro-samsung-galaxy-a23-more-technology-gadgets-news-1650708",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/17/3c5a51d160a0fa98135956224cba00ee1702834743081555_original.png",
            "publishedAt": "2023-12-17T17:41:27Z",
            "content": "Top Phones Under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "Android Authority"
            },
            "author": null,
            "title": "The best phone of the year 2023: Editor's Choice — Our winner is... - Android Authority",
            "description": "We test hundreds of phones every year, but only one can win Android Authority's Editor's Choice award for smartphone of the year.",
            "url": "https://www.androidauthority.com/best-phone-2023-editors-choice-3394943/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/10/google-pixel-8-pro-vs-samsung-galaxy-s23-ultra-rear-hero.jpg",
            "publishedAt": "2023-12-17T15:41:25Z",
            "content": "The age of the consistent upgrade cycle is over. As more and more smartphone users wait upwards of three or more years to upgrade their daily drivers, the fight to stand out and grab a slice of the d… [+8153 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "iPhone 15 Screen time will save you from weak eyesight; know how to manage it - step-by-step guide - HT Tech",
            "description": "Apple iPhone 15 Screen time feature allows users to take control of their device. It offers tools to schedule breaks, set app usage limits, and prioritize essential contacts. It will likely save you from suffering from weak eyesight later in life.",
            "url": "https://tech.hindustantimes.com/how-to/iphone-15-screen-time-will-save-you-from-weak-eyesight-know-how-to-manage-it-step-by-step-guide-71702819228729.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/17/1600x900/iPhone_15_Pro_1695025144029_1702819398154.jpg",
            "publishedAt": "2023-12-17T13:28:23Z",
            "content": "iPhone 15 screen time feature: In an era dominated by digital devices, managing screen time has become crucial for maintaining a healthy balance between our online and offline lives. Our daily screen… [+3396 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Videocardz.com"
            },
            "author": null,
            "title": "Large European retailer mistakenly lists 24 GeForce RTX 4090 SUPER cards - VideoCardz.com",
            "description": "There is no RTX 4090 SUPER (at least not yet) We were sent tips about European retailer Proshop, which is seemingly listing not one but 24 different RTX 4090 SUPER cards.  As reported yesterday, NVIDIA has imposed several embargoes on the RTX 40 SUPER cards s…",
            "url": "https://videocardz.com/newz/large-european-retailer-mistakenly-lists-24-geforce-rtx-4090-super-cards",
            "urlToImage": "https://cdn.videocardz.com/1/2023/12/NVIDIA-RTX-4090-SUPER-HERO.jpg",
            "publishedAt": "2023-12-17T12:26:00Z",
            "content": "We were sent tips about European retailer Proshop, which is seemingly listing not one but 24 different RTX 4090 SUPER cards. \r\nAs reported yesterday, NVIDIA has imposed several embargoes on the RTX 4… [+1392 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "ET Telecom",
            "title": "Apple releases 1st public beta of iOS 17.3 with stolen device protection - ETTelecom",
            "description": "When this is enabled, Face ID or Touch ID verification is required for reading iCloud Keychain passwords, turning off Lost Mode, wiping an iPhone's contents, using saved payment methods in Safari, and others, the report mentioned.",
            "url": "https://telecom.economictimes.indiatimes.com/news/devices/apple-releases-1st-public-beta-of-ios-17-3-with-stolen-device-protection/106065244",
            "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-106065244,imgsize-6360,width-1200,height=765,overlay-ettelecom/devices/apple-releases-1st-public-beta-of-ios-17-3-with-stolen-device-protection.jpg",
            "publishedAt": "2023-12-17T12:11:34Z",
            "content": "San Francisco: Apple has begun seeding the first beta versions of iOS 17.3 and iPadOS 17.3 to public beta testers ahead of their official release. Beta testers can access the beta by going to the Set… [+1333 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Zeeshan Khan",
            "title": "PUBG Mobile recoil-control guide for AKM (December 2023) - Sportskeeda",
            "description": "The AKM is a lethal weapon in PUBG Mobile known for its high damage output and flexibility. However, its strong ammunition has a large recoil.",
            "url": "https://www.sportskeeda.com/esports/pubg-mobile-recoil-control-guide-akm-december-2023",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/9a335-17027977502757-1920.jpg",
            "publishedAt": "2023-12-17T10:20:00Z",
            "content": "The AKM is a lethal weapon in PUBG Mobile known for its high damage output and flexibility. However, its strong ammunition has a large recoil. Recoil management is critical for getting the most out o… [+3234 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "10 best laptops for coding: From HP, Lenovo to Acer, unlock your programming potential - HT Tech",
            "description": "Looking for the 10 best laptops for coding? Explore our top picks, from HP 15s to Lenovo Legion 5 Pro, ensuring a smooth programming experience.",
            "url": "https://tech.hindustantimes.com/laptops-pc/news/10-best-laptops-for-coding-from-hp-lenovo-to-acer-unlock-your-programming-potential-71702802322926.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/17/1600x900/Best_laptops_for_coding_1702803062220_1702803062449.jpg",
            "publishedAt": "2023-12-17T10:14:03Z",
            "content": "10 best laptops for coding: Are you into coding? Choosing the right laptop is crucial for a smooth programming experience. You need power for running and testing code without being slowed down by you… [+16982 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Top 10 budget laptops: From Lenovo, Asus to Zebronics, try these pocket-friendly gadgets - HT Tech",
            "description": "Top 10 budget laptops: Check out these budget laptops including renowned brands like Lenovo, HP, Asus, Zebronics and more.",
            "url": "https://tech.hindustantimes.com/laptops-pc/news/top-10-budget-laptops-from-lenovo-asus-to-zebronics-try-these-pocket-friendly-gadgets-71702806084048.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/17/1600x900/untitled_1702806419709_1702806419981.jpg",
            "publishedAt": "2023-12-17T10:03:48Z",
            "content": "Top 10 budget laptops: Are you looking for a laptop that fits perfectly into your budget and provides you with the necessary features too? Budget laptops are an economical choice for users seeking fu… [+16934 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Newstracklive.com"
            },
            "author": "EMMANUAL",
            "title": "Realme C67 5G launched, 5000 mAh battery and 50MP camera will be available cheaply, know the price - News Track English",
            "description": "Realme, the innovative smartphone manufacturer, has recently introduced its latest marvel, the Realme C67 5G. Packed with impressive features, this budget-friendly smartphone is set to redefine the user experience in the mid-range segment.\r\n\r\nPowerful Battery…",
            "url": "https://english.newstracklive.com/news/realme-c67-5g-launched-5000-mah-battery-and-50mp-camera-will-be-available-cheaply-know-the-price-sc14-nu371-ta371-1306049-1.html",
            "urlToImage": "https://media.newstrack.in/uploads/technology-news/gadgets-news/Dec/17/big_thumb/fgfg_657eacd9d4105.JPG",
            "publishedAt": "2023-12-17T09:34:52Z",
            "content": "Realme, the innovative smartphone manufacturer, has recently introduced its latest marvel, the Realme C67 5G. Packed with impressive features, this budget-friendly smartphone is set to redefine the u… [+4754 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Aditi Srivastava",
            "title": "Ray-Ban Meta glasses rule the TikTok trend with BTS’ Jungkook’s 3D complementing - Hindustan Times",
            "description": "Ray-Ban Meta glasses bring back the cool factor for technology",
            "url": "https://www.hindustantimes.com/entertainment/music/rayban-meta-glasses-rule-the-tiktok-trend-with-bts-jungkook-s-3d-complementing-it-101702795823939.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/jk_1702799795172_1702799809412.jpg",
            "publishedAt": "2023-12-17T07:59:46Z",
            "content": "Forget your cat ears and filter faces, TikTok has a new obsession: Ray Ban's Meta smart glasses. With millions of people wearing digital glasses and dancing to the same beat, what began as a single c… [+2218 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "How to star your favourite photos in Google Photos - Times of India",
            "description": "This article discusses how to mark favourites and organise cherished memories by starring photos in Google Photos. Open the app or website, find the p",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/how-to-star-your-favourite-photos-in-google-photos/articleshow/106059447.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106059410,width-1070,height-580,imgsize-57548,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T06:17:14Z",
            "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
          },
          {
            "source": {
              "id": null,
              "name": "Trak.in"
            },
            "author": "Siddhi Phaltankar",
            "title": "iOS 17.2 Released: Check Top 9 Updates For Your iPhone (And 10 Bonus Updates!) - Trak.in",
            "description": "Exciting news! The iOS 17.2 update is here, and it’s bringing some awesome changes to your iPhone. From a cool new Journal app to better music and camera stuff,  explore what’s new. 1. The Cool Journal: Journal App iOS 17.2 has this amazing Journal app. It’s …",
            "url": "https://trak.in/stories/ios-17-2-released-check-top-9-updates-for-your-iphone-and-10-bonus-updates/",
            "urlToImage": "https://trak.in/stories/wp-content/uploads/2023/12/ify-7-1-1.png",
            "publishedAt": "2023-12-17T03:56:15Z",
            "content": "Exciting news! The iOS 17.2 update is here, and its bringing some awesome changes to your iPhone. From a cool new Journal app to better music and camera stuff,  explore whats new.\r\n1. The Cool Journa… [+3528 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Apple has a charger 'warning' for Apple Watch users, here's why - Times of India",
            "description": "Apple warns users about safety hazards and performance issues with non-certified chargers for Apple Watch. Counterfeit or uncertified chargers can cau",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/apple-has-a-charger-warning-for-apple-watch-users-heres-why/articleshow/106052733.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106052733,width-1070,height-580,imgsize-16632,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T03:00:45Z",
            "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "BNN Correspondents",
            "title": "Vivo Gears Up for the Indian Launch of the X100 and X100 Pro - BNN Breaking",
            "description": "Vivo is gearing up to introduce the vivo X100 and X100 Pro in India, following their successful global debut and initial launch in China. A promotional page on Vivo's Indian website hints at the imminent arrival of these new smartphones, though the exact laun…",
            "url": "https://bnnbreaking.com/tech/vivo-gears-up-for-the-indian-launch-of-the-x100-and-x100-pro/",
            "urlToImage": "https://media.bnn.network/content/uploads/2023/12/vivo-x100-and-x100-pro-launch-20231216201558.jpg",
            "publishedAt": "2023-12-16T20:16:15Z",
            "content": "Vivo is gearing up to introduce the vivo X100 and X100 Pro in India, following their successful global debut and initial launch in China. A promotional page on Vivo’s Indian website hints at the immi… [+1688 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Unwrap Innovation! Sony INZONE H5 Headset, Samsung Galaxy Z Fold 5 to Apple AirPods Pro, 6 tech gifts to explore - HT Tech",
            "description": "It's the season of gifting joy to the tech enthusiasts in your life! Dive into this guide featuring cutting-edge gadgets guaranteed to amaze this holiday season. Sony INZONE H5 Headset, Samsung Galaxy Z Fold 5 to Apple AirPods Pro, these innovative tech gifts…",
            "url": "https://tech.hindustantimes.com/photos/unwrap-innovation-sony-inzone-h5-headset-samsung-galaxy-z-fold-5-to-apple-airpods-pro-6-tech-gifts-to-explore-71702573196530.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/16/1600x900/tgcfjjjjjjjjjjj_1702714819077_1702714845833.jpg",
            "publishedAt": "2023-12-16T18:27:44Z",
            "content": "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved."
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "Flipkart's year-end sale: Check attractive deals, discounts on smartphones - MSN",
            "description": null,
            "url": "https://www.msn.com/en-in/lifestyle/shopping/flipkart-s-year-end-sale-check-attractive-deals-discounts-on-smartphones/ar-AA1lBmbi",
            "urlToImage": null,
            "publishedAt": "2023-12-16T17:48:19Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "Samsung Galaxy Book4 Series unveiled - Heres all you need to know - Zee Business",
            "description": "The latest series, which comes with a new intelligent processor, will be made available in a phase-wise manner in select markets, starting with Korea in January 2024.",
            "url": "https://www.zeebiz.com/technology/news-samsung-galaxy-book4-series-unveiled-heres-all-you-need-to-know-269036",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/16/272877-galaxybook4.jpg",
            "publishedAt": "2023-12-16T15:32:52Z",
            "content": "Samsung has unveiled its new PC series 'Galaxy Book4' and the company claims that it is by far the most intelligent lineup, which includes - Galaxy Book4 Ultra, Book4 Pro and Book4 Pro 360.\r\nThe late… [+1745 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Quordle 691 answer for December 16: Cruise through the weekend! Check Quordle hints, clues, solutions - HT Tech",
            "description": "Quordle 691 answer for December 16: Today’s puzzle is going to prove itself an unfair adversary. Do not surrender. Check these Quordle hints, clues, and solutions to defeat it.",
            "url": "https://tech.hindustantimes.com/how-to/quordle-691-answer-for-december-16-cruise-through-the-weekend-check-quordle-hints-clues-solutions-71702734402112.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/16/1600x900/Quordle_play_store_1674348098521_1702734461270.PNG",
            "publishedAt": "2023-12-16T14:01:44Z",
            "content": "Quordle 691 answer for December 16: We said yesterday that Quordle was uncharacteristically quiet this week and there were not enough difficult puzzles to excite and confuse the players. However, tod… [+2005 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Smestreet.in"
            },
            "author": "SMEStreet Edit Desk",
            "title": "Noise Launches India's First 4G Calling Smartwatch, Noise Voyage - SMEStreet",
            "description": "The smartwatch is an innovative addition to the brand’s celebrated premium round dial smartwatch portfolio. Driven by the virtue of being the first mover in the segment, Noise has elevated the calling experience by introducing 4G eSIM capabilities.",
            "url": "https://smestreet.in/technology/noise-launches-indias-first-4g-calling-smartwatch-noise-voyage-2026206",
            "urlToImage": "https://img-cdn.thepublive.com/fit-in/1200x675/smstreet/media/media_files/4yu0E1uo06waNbnnyG24.jpg",
            "publishedAt": "2023-12-16T11:59:38Z",
            "content": "Driven by the virtue of being the first to bring meaningful innovation to people, Noise, Indias leading connected lifestyle smartwatch brand, today has launched Noise Voyage, Indias first* 4G calling… [+2397 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizbot"
            },
            "author": "Gizbot",
            "title": "iQOO 12 vs OnePlus 11 vs Nothing Phone 2: Is the iQOO 12's New SD 8 Gen 3 Processor Worth the Hype? - Gizbot",
            "description": null,
            "url": "https://www.gizbot.com/mobile/features/iqoo-12-vs-oneplus-11-vs-nothing-phone-2-is-the-iqoo-12-s-new-sd-8-gen-3-processor-worth-the-hype-089071.html",
            "urlToImage": null,
            "publishedAt": "2023-12-16T10:30:17Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Netflix.com"
            },
            "author": null,
            "title": "GTA: San Andreas – The Definitive Edition - Game Support - Netflix",
            "description": "Getting started, gameplay questions, and troubleshooting info about GTA: San Andreas – The Definitive Edition.",
            "url": "https://help.netflix.com/en/node/133166",
            "urlToImage": null,
            "publishedAt": "2023-12-14T15:15:14Z",
            "content": "Content rating: See the game's app store page\r\nLanguages: Chinese (Simplified), Chinese (Traditional), English (US), French, German, Italian, Japanese, Korean, Polish, Portuguese (Brazil), Russian, S… [+69 chars]"
          }
        ]
      },
      {
        "health": [
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": "Dr. Rajesh B. Iyer",
            "title": "Here's How Hypertension Increases The Risk Of Stroke In Winter Season - NDTV Doctor",
            "description": "Seasonal and temperature fluctuations can influence cerebrovascular risk factors such as hypertension, hyperglycemia, hyperlipidemia, and atrial fibrillation.",
            "url": "https://doctor.ndtv.com/living-healthy/heres-how-hypertension-increases-the-risk-of-stroke-in-winter-season-4696447",
            "urlToImage": "https://c.ndtvimg.com/2022-05/t7f7utvo_blood-pressure_625x300_01_May_22.jpg",
            "publishedAt": "2023-12-18T10:21:12Z",
            "content": "A 3% increased incidence of stroke risk is seen in winters and an 8% decrease in summers. The risk is significant for ischemic strokes rather than hemorrhagic strokes. Several factors can contribute … [+4411 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Parmita Uniyal",
            "title": "Year Ender 2023: Heart attack to cardiomyopathy; cardiac conditions in spotlight - Hindustan Times",
            "description": "In 2023, sudden deaths, particularly among younger people, made headlines. This concerning trend could be due to a range of cardiovascular conditions. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/year-ender-2023-heart-attack-to-cardiomyopathy-cardiac-conditions-in-spotlight-101702893812652.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/heart_1702894112301_1702894121590.jpg",
            "publishedAt": "2023-12-18T10:11:43Z",
            "content": "The trend of sudden cardiac arrest and heart attacks continued in 2023 as people with no prior warning symptoms collapsed doing seemingly harmless activities - working out, running marathons, or doin… [+6841 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Daijiworld.com"
            },
            "author": null,
            "title": "Study offers hope for childhood respiratory diseases - Daijiworld.com",
            "description": "London, Dec 18(IANS): The immune and respiratory systems coordinate much earlier than previously thought, finds a study that raises hope for tackling respiratory diseases in early childhood.\r\nGlobally, respiratory conditions account for almost 20 per cent of …",
            "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1150416",
            "urlToImage": "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_181223_Health1.jpg",
            "publishedAt": "2023-12-18T10:07:31Z",
            "content": "London, Dec 18(IANS): The immune and respiratory systems coordinate much earlier than previously thought, finds a study that raises hope for tackling respiratory diseases in early childhood.\r\nGloball… [+2068 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Can constipation cause a heart attack? - IndiaTimes",
            "description": "Straining while passing stool due to constipation can lead to chest pain and increase the chances of a heart attack. It is important to seek prompt me",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/can-constipation-cause-a-heart-attack/articleshow/106082079.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106082001,width-1070,height-580,imgsize-818577,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T09:30:00Z",
            "content": "Practical tips for preventing constipation in everyday life (remedies for adults and kids)"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Health Desk, Edited by Kristina Das",
            "title": "Constipation Awareness Month 2023: Effective ways to tackle this common issue in adults - India TV News",
            "description": "Constipation is a common and generally treatable condition, often linked to lifestyle choices. Preventive measures and lifestyle adjustments play a pivotal role in managing the common issue in adults.",
            "url": "https://www.indiatvnews.com/health/constipation-awareness-month-2023-effective-ways-to-tackle-this-common-issue-in-adults-2023-12-18-907797",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/constipation-1-1702890718.jpg",
            "publishedAt": "2023-12-18T09:21:06Z",
            "content": "Constipation is a prevalent digestive ailment that can significantly impact an individual's quality of life. It occurs when bowel movements become irregular or challenging, leading to discomfort and … [+3307 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Right time to drink water after meals as per Ayurveda - IndiaTimes",
            "description": "Ayurveda emphasizes the timing of activities like water consumption for overall health. Ayurveda provides guidelines for drinking water after meals ba",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/right-time-to-drink-water-after-meals-as-per-ayurveda/articleshow/106037985.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106037963,width-1070,height-580,imgsize-476971,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T09:10:50Z",
            "content": "How does diet affect your immune system"
          },
          {
            "source": {
              "id": null,
              "name": "News24online.com"
            },
            "author": "Priyanka Negi",
            "title": "Mood Booster! The Hidden Benefits Of Bitter Dark Chocolate - News24",
            "description": "Dark Chocolate tastes slightly bitter but their benefits are totally different.",
            "url": "https://news24online.com/lifestyle/mood-booster-the-hidden-benefits-of-bitter-dark-chocolate/201234/",
            "urlToImage": "https://news24online.com/wp-content/uploads/2023/12/Dark-Chocolate.jpg",
            "publishedAt": "2023-12-18T09:07:42Z",
            "content": "Dark Chocolate tastes slightly bitter but their benefits are totally different. There are tons of rich sources of essential minerals and heart health benefits if you consume them regularly.\r\nDo you e… [+1913 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by India TV Lifestyle Desk, Edited by Kristina Das",
            "title": "5 benefits of drinking guava leaf tea in winter - India TV News",
            "description": "Guava leaf tea is a delicious and healthy beverage that is perfect for the winter season. It not only helps boost the immune system, but it also has various other health benefits such as relieving cold and flu symptoms, soothing digestive issues, etc.",
            "url": "https://www.indiatvnews.com/lifestyle/food/5-benefits-of-drinking-guava-leaf-tea-in-winter-2023-12-18-907793",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/guava-leaf-tea-1702889585.jpg",
            "publishedAt": "2023-12-18T08:57:28Z",
            "content": "Winter is the season of cold and chilly weather, which brings with it an increased risk of catching illnesses and infections. During this season, it is crucial to boost our immune system and keep our… [+2415 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Akanksha Agnihotri",
            "title": "Year Ender 2023: 8 top health and fitness trends that went viral this year - Hindustan Times",
            "description": "From virtual challenges to innovative workouts, check out top trends that took the wellness and health world by storm and went viral across social platforms. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/year-ender-2023-from-biohacking-to-metaverse-wellness-8-top-health-and-fitness-trends-that-went-viral-this-year-101702886538634.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/3868928_1702888818544_1702888828077.jpg",
            "publishedAt": "2023-12-18T08:41:26Z",
            "content": "As we bid farewell to 2023, it's intriguing to reflect on the dynamic shifts and innovations that have taken the health and fitness world by storm. From cutting-edge technologies to holistic lifestyl… [+4692 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tech Explorist"
            },
            "author": "Pranjal Mehar",
            "title": "A novel dry powder inhaled vaccine platform - Tech Explorist",
            "description": "This platform combines biodegradable microspheres with protein nanoparticles.",
            "url": "https://www.techexplorist.com/novel-dry-powder-inhaled-vaccine-platform/78635/",
            "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/12/dry-powder-vaccine.jpg",
            "publishedAt": "2023-12-18T08:37:11Z",
            "content": "The COVID-19 pandemic has fostered significant advances in vaccination technologies. However, there are urgent need for vaccines that induce mucosal immune responses and for single-dose, non-invasive… [+2389 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Education Diary"
            },
            "author": "iednewsdesk",
            "title": "Girls still 2x more likely to contract HIV than boys: Unicef - India Education Diary",
            "description": "Girls continue to be more than twice as likely to contract HIV than boys, according to the Unicef’s latest report. The report said girls continue to bear the brunt of the HIV epidemic, even though total infections among girls aged 10-19 have alm",
            "url": "https://indiaeducationdiary.in/girls-still-2x-more-likely-to-contract-hiv-than-boys-unicef/",
            "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2023/12/56bb2e1e0d11992fd0749d4661e1f817.jpg",
            "publishedAt": "2023-12-18T08:26:12Z",
            "content": "Girls continue to be more than twice as likely to contract HIV than boys, according to the Unicefs latest report.\r\nThe report said girls continue to bear the brunt of the HIV epidemic, even though to… [+1907 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Biotecnika.org"
            },
            "author": "Shekhar",
            "title": "Scientist’s Revolutionary Breakthrough in Eradicating Malaria: African Gene Drive Tech Unveiled! - BioTecNika",
            "description": "Gene Drive Tech By African Scientists To Eradicate Malaria. Breakthrough in Eradicating Malaria: African Gene Drive Tech",
            "url": "https://www.biotecnika.org/2023/12/gene-drive-tech-by-african-scientists-to-eradicate-malaria/",
            "urlToImage": "https://cdn.biotecnika.org/wp-content/uploads/2023/12/Purple-Neon-Pink-Cricket-YouTube-Thumbnail-in-Neon-Dark-Style.jpg",
            "publishedAt": "2023-12-18T08:14:54Z",
            "content": "--Must See--\r\nGene Drive Tech\r\nMalaria, a deadly disease transmitted by female Anopheles mosquitoes, remains a major public health concern in Africa. However, hope is on the horizon as African scient… [+3503 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dtnext.in"
            },
            "author": "IANS",
            "title": "Why India’s overall NCD burden is rising among children - DTNEXT",
            "description": "Dr Sriram noted that 5-17 years is an age group where there should ‘technically and historically’ not be a growing impact of lifestyle diseases.",
            "url": "https://www.dtnext.in/lifestyle/wellbeing/why-indias-overall-ncd-burden-is-rising-among-children-755204",
            "urlToImage": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/12/18/787379-4d0d3c542b875aa66d787ffaf7730193.jpg",
            "publishedAt": "2023-12-18T07:55:03Z",
            "content": "NEW DELHI: India is seeing a significant rise in cases of non communicable diseases like obesity, diabetes, hypertension among children.\r\nHealth experts on Monday blamed the surge on ever-increasing … [+4018 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "Utsa Ganguly",
            "title": "Constipation Awareness Month 2023: What Is The Link Between Constipation And UTI? Does It Affect Children? See What Experts Say - ABP Live",
            "description": "When a child is constipated and holds stool longer than normal, there is bacterial overgrowth which usually cause the UTI.",
            "url": "https://news.abplive.com/lifestyle/what-is-the-link-between-constipation-and-uti-does-it-affect-children-1650506",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/18/e1961e5de565ecf831df2b36ba8cfb6b1702884893342557_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-18T07:42:38Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Video Team",
            "title": "Less screen time is the secret to happiness, new research reveals - WION",
            "description": "Less screen time is the secret to happiness, new research reveals. There is a sharp increase in average screen time by children during the pandemic. But it has a harmful impact on health. Spending more time online increases the risk of depression.",
            "url": "https://www.wionews.com/videos/less-screen-time-is-the-secret-to-happiness-new-research-reveals-670800",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/18/1812_WION_STUDY_12PM-1702885218-00000003.jpg",
            "publishedAt": "2023-12-18T07:40:01Z",
            "content": "WION Video Team | Updated: Dec 18, 2023, 01:10 PM IST\r\nLess screen time is the secret to happiness, new research reveals. There is a sharp increase in average screen time by children during the pande… [+142 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Health Desk, Edited by Kristina Das",
            "title": "Chia Seeds vs Basil Seeds: Which is better for your health? - India TV News",
            "description": "Both chia seeds and basil seeds are excellent sources of essential nutrients and can greatly benefit your health. Incorporating both of these superfoods into your diet can provide a well-rounded source of nutrition and support overall wellness.",
            "url": "https://www.indiatvnews.com/lifestyle/food/chia-seeds-vs-basil-seeds-which-is-better-for-your-health-2023-12-18-907765",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/chia-vs-basil-1702880858.jpg",
            "publishedAt": "2023-12-18T06:41:22Z",
            "content": "In the realm of health and wellness, chia seeds and basil seeds are two well-liked superfoods that are receiving a lot of attention. These little, highly nutritious seeds are typically hailed as nece… [+3132 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thehealthsite.com"
            },
            "author": "Prerna Mittra",
            "title": "What Is Vitamin K2 And How Does It Benefit The Body? | TheHealthSite.com - TheHealthSite",
            "description": "Vitamin K2 is a nutrient \"often overshadowed but crucial\" for health. \"It's a fat-soluble vitamin that plays a pivotal role in directing calcium to where it belongs -- your bones and teeth and away from arteries and soft tissues\" said nutritionist Bhakti Aror…",
            "url": "https://www.thehealthsite.com/photo-gallery/what-is-vitamin-k2-and-how-does-it-benefit-the-body-1045083/",
            "urlToImage": "https://www.thehealthsite.com/wp-content/uploads/2023/12/Freepik-vitamin-K2-benefits-1.jpg",
            "publishedAt": "2023-12-18T06:30:26Z",
            "content": "There are many types of vitamins that are essential for the health and overall well-being of the body and among them is vitamin K2. Nutritionist Bhakti Arora Kapoor recently explained in an Instagram… [+261 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "DNA Web Team",
            "title": "Feeling tired and weak? It could be a sign of Vitamin B12 deficiency - DNA India",
            "description": "Vitamin B12 also plays a vital role in maintaining a healthy nervous system.",
            "url": "https://www.dnaindia.com/health/report-feeling-tired-and-weak-it-could-be-a-sign-of-vitamin-b12-deficiency-3071933",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/12/18/2620170-image-2023-12-18t115341.710.jpg",
            "publishedAt": "2023-12-18T06:21:00Z",
            "content": "Vitamin B12 also plays a vital role in maintaining a healthy nervous system.Vitamin B12 is an essential nutrient that plays a crucial role in maintaining our health and overall well-being. It is a wa… [+2495 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Post Magazine"
            },
            "author": null,
            "title": "China health authorities say respiratory illnesses spike is finally easing - South China Morning Post",
            "description": "Latest monitoring results show the numbers of people, mostly children, needing treatment nationally is on a downward trend.",
            "url": "https://www.scmp.com/news/china/science/article/3245439/china-health-authorities-say-respiratory-illnesses-spike-finally-easing",
            "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2023/12/18/a4428063-9c97-4a36-b14e-e1ef940d2acc_35b14265.jpg?itok=Jk1VHyLc&v=1702877647",
            "publishedAt": "2023-12-18T06:00:26Z",
            "content": "Monitoring results showed that at grass roots levels, fever clinics and outpatient departments accounted for around 44 per cent of the nationwide medical institutions reception volume, he said.\r\nChin… [+2017 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Saurav Saha",
            "title": "Here are the best nutritional drinks for the elderly - Sportskeeda",
            "description": "Nutritional drinks for the elderly should be given considerable importance at this time and age.",
            "url": "https://www.sportskeeda.com/health-and-fitness/here-best-nutritional-drinks-elderly",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/e9c28-17022127022922-1920.jpg",
            "publishedAt": "2023-12-18T05:48:00Z",
            "content": "Nutritional drinks for the elderly should be given considerable importance at this time and age. With rapidly changing seasons, eras and especially the pandemic, elderly people need good nutrition so… [+4003 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Heart Health: 5 Things Men Over 50 Should Do to Keep Cholesterol in Check and Lower Cardiac Attack Risk - India.com",
            "description": "Men in their 50s should try to adopt few lifestyle tweaks, if not doing that already., in a bid to protect their heart health.",
            "url": "https://www.india.com/health/heart-health-5-things-men-over-50-should-do-to-keep-cholesterol-in-check-and-lower-cardiac-attack-risk-6593870/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/MixCollage-18-Dec-2023-11-04-AM-7299.jpg",
            "publishedAt": "2023-12-18T05:47:17Z",
            "content": "Men in their 50s should try to adopt few lifestyle tweaks, if not doing that already., in a bid to protect their heart health. \r\nHeart Health: 5 Things Men Over 50 Should Do to Keep Cholesterol in Ch… [+3658 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Himani Chandna",
            "title": "Health Matters | Like Actor Shreyas Talpade, Many Indians Below 50 are Undergoing Angioplasty - News18",
            "description": "The notable increase in heart attacks and untimely deaths has been a cause for alarm, highlighting the shift of cardiac ailments to a considerably younger age group",
            "url": "https://www.news18.com/india/health-matters-like-actor-shreyas-talpade-many-indians-below-50-are-undergoing-angioplasty-8707854.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/shreyas-talpade-heart-attack-2023-12-6c430d135b5fee3ddcf33980cbd1776d-16x9.png?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-18T05:31:28Z",
            "content": "In recent times, several seemingly healthy celebrities have suffered heart attacks, revealing a startling truth about the lack of awareness regarding ones physical condition. The latest actor to suff… [+5874 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Worried about sugar levels in this wedding season? Tips from a cardiologist to keep it in check - IndiaTimes",
            "description": "Managing sugar levels, especially during celebratory events like weddings, is important for individuals concerned about their cardiovascular health. Here are some tips that a cardiologist might offer to help keep sugar levels in check during the wedding seaso…",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/worried-about-sugar-levels-in-this-wedding-season-tips-from-a-cardiologist-to-keep-it-in-check/photostory/106048976.cms",
            "urlToImage": "https://static.toiimg.com/photo/106049006.cms",
            "publishedAt": "2023-12-18T05:30:00Z",
            "content": "According to Dr. Jaideep Rajebahadur, Consultant – Cardiology, SRV Hospitals – Goregaon, “There is an alternative to the fear of mithai—learn about its goodness and educate yourself in the basics so … [+726 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "Srishty Choudhury",
            "title": "Benefits of 10-minute daily brisk walk - DNA India",
            "description": "Incorporating brisk walking into a daily routine can offer a range of health benefits, both physical and mental.",
            "url": "https://www.dnaindia.com/web-stories/lifestyle/benefits-of-10-minute-daily-brisk-walk-heart-mental-weightloss-better-sleep-uplifts-mood-lung-health-1702875128208",
            "urlToImage": null,
            "publishedAt": "2023-12-18T05:29:48Z",
            "content": "Walking briskly stimulates the release of endorphins, which are natural mood enhancers. It can help alleviate symptoms of stress, anxiety, and depression, promoting overall mental well-being."
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "5 Cancer Signs That Could Be Mistaken For Flu - MSN",
            "description": null,
            "url": "https://www.msn.com/en-in/health/health-news/5-cancer-signs-that-could-be-mistaken-for-flu/ar-AA1lEVDe",
            "urlToImage": null,
            "publishedAt": "2023-12-18T05:28:53Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "These 10 superfoods will boost your dopamine levels naturally - Times of India",
            "description": "Dopamine is a crucial neurotransmitter associated with pleasure, motivation, and reward pathways in the brain. It plays a key role in regulating mood, motivation, and cognitive function. Imbalances in dopamine levels have been linked to various neurological a…",
            "url": "https://timesofindia.indiatimes.com/videos/lifestyle/health-fitness/these-10-superfoods-will-boost-your-dopamine-levels-naturally/videoshow/106077735.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106077735,imgsize-242736.cms",
            "publishedAt": "2023-12-18T05:17:30Z",
            "content": "Dec 18, 2023, 10:47AM ISTSource: TIMESOFINDIA.COMDopamine is a crucial neurotransmitter associated with pleasure, motivation, and reward pathways in the brain. It plays a key role in regulating mood,… [+189 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Silent heart attack: Warning signs you shouldn't ignore - IndiaTimes",
            "description": "Silent myocardial infarctions (SMIs) account for 45% of heart attacks, often with mild and fleeting symptoms. Early detection and intervention are cru",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/silent-heart-attack-warning-signs-you-shouldnt-ignore/articleshow/106077418.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106077384,width-1070,height-580,imgsize-504098,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T05:06:20Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "Momen Zellmi",
            "title": "Global Underdiagnosis of Familial Hypercholesterolaemia in Youth - BNN Breaking",
            "description": "A recent study reveals significant underdiagnosis and inadequate treatment of the genetic disorder HeFH in children and adolescents globally. Early detection and management can significantly reduce ASCVD risk and improve life expectancy.",
            "url": "https://bnnbreaking.com/breaking-news/health/study-reveals-significant-underdiagnosis-of-familial-hypercholesterolaemia-in-children-and-adolescents/",
            "urlToImage": "https://media.bnn.network/content/uploads/2023/12/familial-hypercholesterolaemia-in-youth-20231218044027.jpg",
            "publishedAt": "2023-12-18T04:57:14Z",
            "content": "A recent study published in The Lancet has unveiled disconcerting findings about the identification and management of a genetic disorder known as heterozygous familial hypercholesterolaemia (HeFH), w… [+2238 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "BNN Breaking",
            "title": "Red Meat Consumption Increases Type 2 Diabetes Risk - BNN Breaking",
            "description": null,
            "url": "https://bnnbreaking.com/breaking-news/health/high-red-meat-consumption-linked-to-increased-type-2-diabetes-risk-study-reveals/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T04:55:40Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Dtnext.in"
            },
            "author": "IANS",
            "title": "Flu infections in Japan soar to warning level at fastest pace in 10 years - DTNEXT",
            "description": "The National Institute of Infectious Diseases estimated that the number of patients nationwide totaled around 1,118,000 during the seven-day period.",
            "url": "https://www.dtnext.in/news/world/flu-infections-in-japan-soar-to-warning-level-at-fastest-pace-in-10-years-755178",
            "urlToImage": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/12/18/787355-202312153095031.jpg",
            "publishedAt": "2023-12-18T04:53:10Z",
            "content": "TOKYO: The average number of influenza patients per regularly monitored medical institution in Japan had hit warning levels at the fastest pace in 10 years, the health ministry has announced.\r\nAbout … [+1220 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Indiaspend.com"
            },
            "author": "Charu Bahri",
            "title": "Why India Could Miss 2030 Target To Eliminate Cervical Cancer - IndiaSpend",
            "description": "Creating awareness about cervical cancer, rolling out an HPV vaccine programme and improving access to treatment would help reduce deaths from the disease",
            "url": "https://www.indiaspend.com/health/why-india-could-miss-2030-target-to-eliminate-cervical-cancer-885975",
            "urlToImage": "https://www.indiaspend.com/h-upload/2023/12/18/1141320-cervical-cancer-who-1500.jpg",
            "publishedAt": "2023-12-18T04:48:53Z",
            "content": "Mount Abu, Rajasthan: Poonam*, aged 53, an anganwadi worker in a village in Gurugram, Haryana got herself screened for cancer of the cervix in early 2023.I wasnt ill as such but some NGO workers enco… [+12957 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "News18",
            "title": "7 Benefits Of Consuming Olive Oil In Winters - News18",
            "description": "These are the benefits associated with the consumption of olive oil in the winter months.",
            "url": "https://www.news18.com/web-stories/lifestyle/7-benefits-of-consuming-olive-oil-in-winters-1354681/",
            "urlToImage": "https://images.news18.com/webstories/2023/10/cropped-shutterstock_788301205-1.jpg",
            "publishedAt": "2023-12-18T04:43:44Z",
            "content": "Producer:  Shreeja Bhattacharya"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Depression: 5 Lesser-Known Side Effects of Antidepressants You Should be Aware of - India.com",
            "description": "Antidepressant medications are a first-choice option for treating depression and anxiety. People respond differently to antidepressants. Some people may have no troubling side effects, while others may have one or more serious side effects.",
            "url": "https://www.india.com/health/depression-5-lesser-known-side-effects-of-antidepressants-you-should-be-aware-of-6593831/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-18-at-10.09.26-AM.jpeg",
            "publishedAt": "2023-12-18T04:42:20Z",
            "content": "Antidepressant medications are a first-choice option for treating depression and anxiety. People respond differently to antidepressants. Some people may have no troubling side effects, while others m… [+2358 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News9live.com"
            },
            "author": "Unnati Gusain",
            "title": "Brain-booster: Nutritional role in enhancing neurological and cognitive health - News9 LIVE",
            "description": "By recognising the symbiotic relationship between diet and neurological health, one can make informed choices that nourish not only the body but also the mind, contributing to a holistic approach to well-being",
            "url": "https://www.news9live.com/health/health-conditions/brain-booster-nutritional-role-in-enhancing-neurological-and-cognitive-health-2380150",
            "urlToImage": "https://images.news9live.com/wp-content/uploads/2023/09/blue-tumor-reveals-alzheimer-disease-human-brain-generated-by-ai-1-1.jpg",
            "publishedAt": "2023-12-18T04:26:35Z",
            "content": "New Delhi: Proper nutrition plays a pivotal role in shaping the intricate dynamics of brain function. The intricate connection between diet and neurological health is a subject of growing significanc… [+1804 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Rajeshwaari Kalla",
            "title": "Causes, symptoms and cure for nasal polypi: Manage asthma, clear allergens with regular saline sprays - Moneycontrol",
            "description": "Persistent nasal congestion and reduced sense of smell may be signs of nasal polypi, which can block nasal passages and affect breathing. Maintaining optimal humidity, managing asthma, practicing nasal hygiene, and avoiding environmental triggers can help pre…",
            "url": "https://www.moneycontrol.com/news/health-and-fitness/causes-symptoms-and-cure-for-nasal-polypi-manage-asthma-clear-allergens-with-regular-saline-sprays-11918601.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Causes-symptoms-and-treatment-for-nasal-polyp-770x433.jpg",
            "publishedAt": "2023-12-18T04:11:27Z",
            "content": "Do you find yourself dealing with persistent nasal congestion and a reduced sense of smell? It could be because of nasal polypi, which could block nasal passages, impacting breathing and comfort. Rec… [+3687 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thehealthsite.com"
            },
            "author": "saumya pandey",
            "title": "Discover Some Weight-Loss-Friendly Flours For Your Kitchen | TheHealthSite.com - TheHealthSite",
            "description": "By embracing these weight-loss-friendly flours you not only prioritize your health but also open the door to a world of flavors and textures that will make your culinary adventures all the more exciting. TheHealthSite.com",
            "url": "https://www.thehealthsite.com/photo-gallery/discover-some-weight-loss-friendly-flours-for-your-kitchen-1045030/",
            "urlToImage": "https://www.thehealthsite.com/wp-content/uploads/2023/12/ingredient-bags-full-flour-1-1.jpg",
            "publishedAt": "2023-12-18T03:30:54Z",
            "content": "Embarking on a weight-loss journey often involves reevaluating dietary choices, and one significant aspect is the type of flour used in cooking and baking. Traditional all-purpose flour, while versat… [+242 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Sushmita Srivastav",
            "title": "Why gut health can get worse in winters, and tips for prevention - Moneycontrol",
            "description": "Winter presents its unique challenges for maintaining gut health, but with mindful dietary choices, hydration, supplementation, regular exercise, and stress management, it’s possible to support and preserve a healthy gut microbiome.",
            "url": "https://www.moneycontrol.com/news/health-and-fitness/why-gut-health-can-get-worse-in-winters-and-tips-for-prevention-11918391.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Health-benefits-of-cosy-cardio-exercises-770x433.jpg",
            "publishedAt": "2023-12-18T03:28:49Z",
            "content": "As winter settles in, our bodies undergo subtle yet significant changes, and one area profoundly affected is our gut health. The drop in temperature, altered dietary habits, and reduced physical acti… [+3138 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Sentinel Assam"
            },
            "author": "Sentinel Digital Desk",
            "title": "Eating meals early may lower cardiovascular risk: Study - Sentinelassam - The Sentinel Assam",
            "description": "Researchers have discovered that eating meals early could reduce the risk of cardiovascular diseases.",
            "url": "https://www.sentinelassam.com/topheadlines/eating-meals-early-may-lower-cardiovascular-risk-study-681524",
            "urlToImage": "https://assets.sentinelassam.com/h-upload/2023/12/18/498767-meals.jpg",
            "publishedAt": "2023-12-18T03:08:56Z",
            "content": "SAN FRANCISCO: Researchers have discovered that eating meals early could reduce the risk of cardiovascular diseases. In a study published in the journal Nature Communications, the researchers used da… [+2085 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Cough, cold cases on the rise - Times of India",
            "description": "As the mercury has started dipping, more cases of cough, cold, fever, breathlessness and joint pain are being reported in Prayagraj. Doctors recommend nutritious warm meals, exercise, sound sleep, and sun exposure to stay healthy during the winter season. Pat…",
            "url": "https://timesofindia.indiatimes.com/city/allahabad/cough-and-cold-cases-on-the-rise-in-prayagraj/articleshow/106073990.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106073989,width-1070,height-580,imgsize-23064,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T03:03:08Z",
            "content": "Dr. APJ Abdul Kalam: Inspiring quotes on life and success"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Chaitanya Deshpande",
            "title": "CT scans done during Covid unravel lung cancer threat - Times of India",
            "description": "A study conducted by pulmonologist Dr Deepak Muthreja found that about 10% of randomly selected patients who underwent CT scan during the Covid-19 pandemic showed early signs of lung cancer. The study highlights the prevalence of lung cancer in the Vidarbha r…",
            "url": "https://timesofindia.indiatimes.com/city/nagpur/ct-scans-during-covid-reveal-early-signs-of-lung-cancer-in-nagpur/articleshow/106073469.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T02:50:59Z",
            "content": "Dia Mirza brings out her inner 'Wednesday Addams' in a little black dress"
          },
          {
            "source": {
              "id": null,
              "name": "Mid-day"
            },
            "author": null,
            "title": "Winter Wellness: Food to include in your diet to keep flu away this winter - mid-day.com",
            "description": "Functional Nutritionist Mugdha Pradhan, CEO and Founder, iThrive shares a list of essential food items to include in your diet to keep flu away this winter",
            "url": "https://www.mid-day.com/lifestyle/food/article/winter-wellness-food-to-include-in-your-diet-to-keep-flu-away-this-winter-23325414",
            "urlToImage": "https://images.mid-day.com/images/images/2023/dec/winterwellness_d.jpg",
            "publishedAt": "2023-12-18T02:50:02Z",
            "content": "Functional Nutritionist Mugdha Pradhan, CEO and Founder, iThrive shares a list of essential food items to include in your diet to keep flu away this winter\r\nImage for representational purposes only. … [+3686 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Anuja Jaiswal",
            "title": "Hearts that beat together keep BP too on same level - Times of India",
            "description": "If your spouse has high blood pressure, you are more likely to be suffering the same condition too. Learn about spousal concordance of hypertension among middle-aged couples and the potential utility of couple-based interventions for diagnosis and management.",
            "url": "https://timesofindia.indiatimes.com/city/delhi/spousal-concordance-of-hypertension-among-middle-aged-couples/articleshow/106073082.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106074943,width-1070,height-580,imgsize-22826,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-18T02:40:28Z",
            "content": "Dr. APJ Abdul Kalam: Inspiring quotes on life and success"
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "CDC data shows rise in respiratory illness among children heading to Christmas - MSN",
            "description": null,
            "url": "https://www.msn.com/en-us/health/other/cdc-data-shows-rise-in-respiratory-illness-among-children-heading-to-christmas/ar-AA1lDKBd",
            "urlToImage": null,
            "publishedAt": "2023-12-18T02:36:48Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Mid-day"
            },
            "author": null,
            "title": "Study finds blood biomarkers linked to suicidal thoughts - mid-day.com",
            "description": "Researchers at University of California San Diego School of Medicine revealed a connection between cellular metabolism and suicidal thoughts",
            "url": "https://www.mid-day.com/lifestyle/health-and-fitness/article/study-finds-blood-biomarkers-linked-to-suicidal-thoughts-23325486",
            "urlToImage": "https://images.mid-day.com/images/images/2023/dec/bloodbiomarkermidday_d.jpg",
            "publishedAt": "2023-12-18T02:32:00Z",
            "content": "Researchers at University of California San Diego School of Medicine revealed a connection between cellular metabolism and suicidal thoughts\r\nImage for representational purposes only. Photo Courtesy:… [+3584 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thesouthfirst.com"
            },
            "author": "Chetana Belagere",
            "title": "Soleus muscle exercise: It takes just a chair to fix your blood sugar - South First",
            "description": "Heard of the soleus muscle exercise that you can do while sitting in a chair? Study proves its effectiveness in reducing blood sugar levels.",
            "url": "https://thesouthfirst.com/health/do-this-simple-exercise-and-watch-your-blood-sugar-levels-go-down/",
            "urlToImage": "https://thesouthfirst.com/wp-content/uploads/2023/12/Copy-of-Untitled-1200-×-600-px-5-4.png",
            "publishedAt": "2023-12-18T02:31:46Z",
            "content": "Did you know that you can lower your blood sugar levels with just simple leg exercises? These exercises could be a game-changer for people with diabetes or those concerned about their blood sugar lev… [+5423 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Odishatv.in"
            },
            "author": "Sangati Jogwar",
            "title": "White poison in kitchen! Know how this most-eaten flour affects your health - OTV News",
            "description": "Maida or refined flour is extremely bad for health and can lead to several health issues if consumed regularly.",
            "url": "https://odishatv.in/news/health/white-poison-in-kitchen-know-how-this-most-eaten-flour-affects-your-health-222802",
            "urlToImage": "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/Maida_1702747679.webp",
            "publishedAt": "2023-12-18T02:16:36Z",
            "content": "Cooking and eating at home is the best way to stay healthy. However, very few people know that certain ingredients that are commonly used in most kitchens in India are hazardous to health. While ther… [+2457 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Statetimes.in"
            },
            "author": "statetimes_editor",
            "title": "Preventing heart disease by healthy heart diet-Cheap and non pharmacological modality: Dr Sushil - State Times",
            "description": "STATE TIMES NEWSJAMMU: To strengthen their campaign further to aware the common masses about the ill effects of Cardiovascular Diseases, Head of Department (HoD) of Cardiology, Dr Sushil Sharma held a day long Cardiac awareness-cum-health check up ca",
            "url": "https://statetimes.in/preventing-heart-disease-by-healthy-heart-diet-cheap-and-non-pharmacological-modality-dr-sushil/",
            "urlToImage": "https://statetimes.in/wp-content/uploads/2023/12/Dr-Sushilfff-1.jpg",
            "publishedAt": "2023-12-18T02:12:55Z",
            "content": "STATE TIMES NEWS\r\nJAMMU: To strengthen their campaign further to aware the common masses about the ill effects of Cardiovascular Diseases, Head of Department (HoD) of Cardiology, Dr Sushil Sharma hel… [+3722 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Weight Loss With Intermittent Fasting: How to Stay on Track on With 10-Hour Eating Window? 5 Tips - India.com",
            "description": "Intermittent fasting is basically setting time window for your meals. It helps with weight loss and here is how one maybe able to stay on track and maintain the regime.",
            "url": "https://www.india.com/lifestyle/weight-loss-with-intermittent-fasting-how-to-stay-on-track-on-with-10-hour-eating-window-5-tips-6593481/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/intermittent-fasting-weight-los.jpg",
            "publishedAt": "2023-12-18T01:57:33Z",
            "content": "Intermittent fasting is basically setting time window for your meals. It helps with weight loss and here is how one maybe able to stay on track and maintain the regime. \r\nWeight Loss With Intermitten… [+2967 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "5 Reasons to eat raw turmeric and jaggery in the morning - IndiaTimes",
            "description": "Starting the day with a small piece of raw turmeric and jaggery can help boost immunity, improve metabolism, reduce inflammation and help in overall well being. Here are a few reasons why you must include raw turmeric and jaggery to your winter morning regime.",
            "url": "https://timesofindia.indiatimes.com/life-style/food-news/5-reasons-to-eat-raw-turmeric-and-jaggery-in-the-morning/photostory/106069218.cms",
            "urlToImage": "https://static.toiimg.com/photo/106069245.cms",
            "publishedAt": "2023-12-18T01:53:00Z",
            "content": "Winter is here and it is that time of the year, when the body needs ample nutrition to survive the bone chilling cold. According to Ayurveda, starting the day with a small piece of raw turmeric and j… [+202 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Dr Priyanka Rohatgi",
            "title": "Why half a cup of beetroot can help you control post-meal blood sugar - The Indian Express",
            "description": "Dr Priyanka Rohatgi, Chief Nutritionist, Apollo Hospitals, explains why this root vegetable impacts insulin sensitivity",
            "url": "https://indianexpress.com/article/health-wellness/beetroot-post-meal-blood-sugar-control-9072308/",
            "urlToImage": "https://images.indianexpress.com/2023/12/beetroot.jpg",
            "publishedAt": "2023-12-18T01:43:53Z",
            "content": "Beetroot, with its vibrant colour and earthy flavour, has long been recognised for its vitamins, minerals and antioxidants. However recent research has shown it can be a complementary dietary compone… [+2750 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Hidden danger of crash diets: 6 dangerous signs to watch out for - IndiaTimes",
            "description": "Crash diets, characterized by extreme calorie restriction and rapid weight loss, can pose serious risks to your health. Here are six dangerous signs to watch out for if you are on a crash diet or considering one.",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/hidden-danger-of-crash-diets-6-dangerous-signs-to-watch-out-for/photostory/106049693.cms",
            "urlToImage": "https://static.toiimg.com/photo/106049707.cms",
            "publishedAt": "2023-12-18T01:30:00Z",
            "content": "According to Bhakti Adkar, Dietitian, SRV Hospitals – Chembur, “Abrupt diets have the potential to upset the body's electrolyte balance, which can result in issues like electrolyte imbalances and deh… [+122 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "EL PAÍS"
            },
            "author": "Adrián Cordellat",
            "title": "How to cope better after a rough night’s sleep - EL PAÍS USA",
            "description": "Not getting enough sleep affects many areas of our day-to-day life",
            "url": "https://english.elpais.com/health/2023-12-18/how-to-cope-better-after-a-rough-nights-sleep.html",
            "urlToImage": "https://images.english.elpais.com/resizer/-iZUAdO7RGUQMj3FPanDf5bs494=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/BEKZO25CLVD3RPBTGS6H2CMFKI.jpg",
            "publishedAt": "2023-12-18T01:00:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "News-Medical.Net"
            },
            "author": null,
            "title": "Fasting-mimicking diet shows unique benefits in cardiovascular health, study finds - News-Medical.Net",
            "description": "Study compares the fasting-mimicking diet and the Mediterranean diet in reducing cardiovascular disease risk among obese adults with hypertension, revealing unique benefits of each diet.",
            "url": "https://www.news-medical.net/news/20231217/Fasting-mimicking-diet-shows-unique-benefits-in-cardiovascular-health-study-finds.aspx",
            "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_767395_17028557943957325.jpg",
            "publishedAt": "2023-12-18T00:45:00Z",
            "content": "In a recent article published in Npj Metabolic Health and Disease, researchers assessed the effectiveness of the fasting-mimicking diet (FMD) against the Mediterranean diet (MD) in reducing the risk … [+6963 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "The CDC Warns of 'Urgent Need' for Vaccinations to Fight Respiratory Illnesses This Winter - Yahoo Eurosport UK",
            "description": null,
            "url": "https://uk.sports.yahoo.com/news/cdc-warns-urgent-vaccinations-fight-190542751.html",
            "urlToImage": null,
            "publishedAt": "2023-12-17T19:05:42Z",
            "content": "If you click 'Accept all', we and our partners (including 241 who are part of the IAB Transparency &amp; Consent Framework) will also use cookies and your personal data, such as IP address, precise l… [+686 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Neurologylive.com"
            },
            "author": "Martha Morrell, MD",
            "title": "Neurostimulation and Targeted Treatment Delivery in Epilepsy Care: Martha Morrell, MD - Neurology Live",
            "description": "The clinical professor of neurology at Stanford University School of Medicine talked about the collaboration of Rapport leveraging NeuroPace’s data analysis capabilities to study the target delivery of a therapy for focal epilepsy. [WATCH TIME: 5 minutes]",
            "url": "https://www.neurologylive.com/view/neurostimulation-targeted-treatment-delivery-epilepsy-care-martha-morrell",
            "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/neurolive/2e33afc649ea6c3d7d546e12021cfed3703b5480-1280x720.png?fit=crop&auto=format",
            "publishedAt": "2023-12-17T17:08:15Z",
            "content": "WATCH TIME: 5 minutes\r\nIt's wonderful that there are innovative study designs being applied to treatments like epilepsy. We need to get treatments to patients as soon as possible, while providing the… [+2964 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "DNA Web Team",
            "title": "How bad cholesterol increases risk of heart disease? Way to bring it down naturally - DNA India",
            "description": "Reducing bad cholesterol levels is crucial for maintaining heart health. Here are some natural methods to help lower LDL cholesterol.",
            "url": "https://www.dnaindia.com/health/report-how-bad-cholesterol-increases-risk-of-heart-disease-way-to-bring-it-down-naturally-3071891",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/12/17/2620125-untitled-design-49.jpg",
            "publishedAt": "2023-12-17T15:55:00Z",
            "content": "Reducing bad cholesterol levels is crucial for maintaining heart health. Here are some natural methods to help lower LDL cholesterol. \r\nBad cholesterol, also known as low-density lipoprotein (LDL), p… [+1863 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Ruby Khanna",
            "title": "Pneumonia in kids: Important things to know about - Sportskeeda",
            "description": "Pneumonia in kids is a serious infection that leads to inflammation in the lungs.",
            "url": "https://www.sportskeeda.com/health-and-fitness/pneumonia-kids-important-things-know",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/9d2c0-17028254861384-1920.jpg",
            "publishedAt": "2023-12-17T15:22:00Z",
            "content": "Pneumonia in kids is a serious infection that leads to inflammation in the lungs. The air sacs in the lungs also get filled with pus and other fluids, which causes symptoms like severe cough, chest p… [+4124 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "10 easy ways to add ghee in your diet and its health benefits - MSN",
            "description": null,
            "url": "https://www.msn.com/en-in/health/other/10-easy-ways-to-add-ghee-in-your-diet-and-its-health-benefits/ar-AA1lD1UJ",
            "urlToImage": null,
            "publishedAt": "2023-12-17T14:33:34Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Pre-Bridal Glow up: Try These 5 Natural Drinks For Wedding-Ready Skin - India.com",
            "description": "Begin your pre-bridal beauty regime with the calming notes of these homemade drinks and see the results!",
            "url": "https://www.india.com/health/pre-bridal-glow-up-try-these-5-natural-drinks-for-wedding-ready-skin-6592528/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-17-at-4.00.08-PM.jpeg",
            "publishedAt": "2023-12-17T10:30:58Z",
            "content": "Begin your pre-bridal beauty regime with the calming notes of these homemade drinks and see the results!\r\nPre-Bridal Glow up: Try These 5 Natural Drinks For Wedding-Ready Skin\r\nAs you embark on the e… [+1892 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Herbal remedies for relief from seasonal flu - IndiaTimes",
            "description": "While herbal remedies are a pure cure for seasonal flu, they offer a natural way to fight influenza or flu. Try these remedies to get relief from influenza as  they might be enough to treat it.",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/herbal-remedies-for-relief-from-seasonal-flu/photostory/106049207.cms",
            "urlToImage": "https://static.toiimg.com/photo/106049215.cms",
            "publishedAt": "2023-12-17T10:30:00Z",
            "content": "A hot herbal tea drink, commonly referred to as kadha can be very effective in offering relief to your throat and sinuses. To make your herbal tea healthy as well as tasty, you can sweeten it with ho… [+219 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Odishatv.in"
            },
            "author": "Poonam Singh",
            "title": "Unlocking radiant skin: Top 5 vitamin E-rich foods for a healthy glow - OTV News",
            "description": "When prioritizing a healthy lifestyle, a nutrient-dense diet is crucial. One key player in overall well-being is vitamin E as this essential vitamin fortifies the immune system, combating viruses and bacteria.",
            "url": "https://odishatv.in/webstories/lifestyle/unlocking-radiant-skin-top-5-vitamin-e-rich-foods-for-a-healthy-glow-222870",
            "urlToImage": "https://images.odishatv.in/uploadimage/library/16_9/16_9_1/recent_photo_1702802557.webp",
            "publishedAt": "2023-12-17T08:57:09Z",
            "content": "Author: Poonam Singh | Credit: Canva\r\n<ul>When prioritizing a healthy lifestyle, a nutrient-dense diet is crucial. One key player in overall well-being is vitamin E as this essential vitamin fortifie… [+1568 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Sakshi Verma",
            "title": "5 low-glycemic foods to Include in your diet plan for weight loss - India TV News",
            "description": "The glycemic index ranks foods on a scale from 0 to 100. The lower end of the scale contains foods that have little effect on blood sugar levels. Some foods have a big impact on sugar levels as well.",
            "url": "https://www.indiatvnews.com/lifestyle/food/5-low-glycemic-foods-to-include-in-your-diet-plan-for-weight-loss-2023-12-17-907649",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/health-2-1702796849.jpg",
            "publishedAt": "2023-12-17T07:10:23Z",
            "content": "Losing Weight Losing weight with low glycemic index food can help in reducing the symptoms of diabetes and it also helps in burning calories by reducing the excess fat in our thighs, arms, stomach, e… [+1852 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Ashima Sharda Mahindra, Times Now Digital",
            "title": "8 Calcium Rich Dry Fruits For Strong Bones - Times Now",
            "description": "8 Calcium Rich Dry Fruits For Strong Bones",
            "url": "https://www.timesnownews.com/web-stories/health/8-calcium-rich-dry-fruits-for-strong-bones/photostory/106060335.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106060816,width-900,height-1200,resizemode-6.cms",
            "publishedAt": "2023-12-17T07:08:30Z",
            "content": "Almonds are packed with calcium, fatty acids, vitamin E, antioxidants, and proteins. They help to strengthen your bones, keep your heart healthy, and improve memory power. A cup full of whole almonds… [+87 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Tapatrisha Das",
            "title": "Tiny habits that will transform your nervous system: Nutritionist shares tips - Hindustan Times",
            "description": "From spending time in nature to limiting phone notifications, here are a few tiny habits that can transform the nervous system in weeks. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/tiny-habits-that-will-transform-your-nervous-system-nutritionist-shares-tips-101702781733869.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/ss_1682477117050_1702781769358.jpg",
            "publishedAt": "2023-12-17T03:34:22Z",
            "content": "The way we deal with stress, anxiety and other negative emotions is strongly rooted to how relaxed and calm the nervous system is. \"A flexible nervous system, characterized by high vagal tone, can ad… [+2052 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Medical Dialogues"
            },
            "author": "Kajal Rajput",
            "title": "Indian docs support WHO ban on vapes, call on govt to take action - Medical Dialogues",
            "description": "New Delhi: A day after the World Health Organization (WHO) urged governments to treat e-cigarettes akin to tobacco and impose a ban on all flavours, health experts in India have called on the...",
            "url": "https://medicaldialogues.in/news/health/indian-docs-support-who-ban-on-vapes-call-on-govt-to-take-action-121686",
            "urlToImage": "https://medicaldialogues.in/h-upload/2023/12/16/228003-cigarettes.jpg",
            "publishedAt": "2023-12-17T03:30:27Z",
            "content": "New Delhi: A day after the World Health Organization (WHO) urged governments to treat e-cigarettes akin to tobacco and impose a ban on all flavours, health experts in India have called on the governm… [+2904 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "Docs, staff honoured for tackling AIDS - Times of India",
            "description": "Madurai: In observation of ‘World AIDS Day’ this month, a programme was organised at Government Rajaji Hospital (GRH) on Saturday to honour doctors an.",
            "url": "https://timesofindia.indiatimes.com/city/madurai/docs-staff-honoured-for-tackling-aids/articleshow/106056570.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-17T03:04:33Z",
            "content": "Meet the star kids who are alumni of Dhirubhai Ambani International School"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Shreeja Bhattacharya",
            "title": "Common Cold To Pneumonia: How To Keep Winter Illnesses At Bay - News18",
            "description": "The fall and winter months often herald the downside of winter in the form of illness and health problems.",
            "url": "https://www.news18.com/lifestyle/common-cold-to-pneumonia-how-to-keep-winter-illnesses-at-bay-8705596.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-2023-12-16t233315.049-2023-12-f54e0c38a191a9ef7334c2f7debaa8eb-16x9.png?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-17T03:00:50Z",
            "content": "As much as we look forward to winter dressing, scrumptious meals, celebrations, and even vacations, we cannot ignore the fact that this winter season also has its nasty side. Winter is a time to watc… [+3090 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Winter & your ticker: How to keep the heart healthy in colder months - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/life/winter-amp-your-ticker-how-to-keep-the-heart-healthy-in-colder-months-3340444/",
            "urlToImage": null,
            "publishedAt": "2023-12-16T21:00:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "SciTechDaily"
            },
            "author": null,
            "title": "This One Simple Diet Change Could Transform Your Blood Pressure - SciTechDaily",
            "description": "Research reveals that a low-sodium diet significantly lowers blood pressure, benefiting individuals with or without hypertension and those on blood pressure medications. Lowering sodium intake significantly reduced blood pressure in most people, even those wh…",
            "url": "https://scitechdaily.com/this-one-simple-diet-change-could-transform-your-blood-pressure/",
            "urlToImage": "https://scitechdaily.com/images/Happy-Young-Woman-Eating.jpg",
            "publishedAt": "2023-12-16T14:53:39Z",
            "content": "New research shows that reducing dietary sodium significantly lowers blood pressure in individuals, regardless of whether they have hypertension or are on medication. The study, involving 213 partici… [+4472 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News9live.com"
            },
            "author": "Ayra Imam",
            "title": "Eat your greens: Discover the amazing health benefits of green beans - News9 LIVE",
            "description": "Green beans are a must-have in Indian kitchens. Learn about the health perks of this nutritious green vegetable!",
            "url": "https://www.news9live.com/lifestyle/fitness/eat-your-greens-discover-the-amazing-health-benefits-of-green-beans-2379333",
            "urlToImage": "https://images.news9live.com/wp-content/uploads/2023/12/pexels-yulia-rozanova-3004798.jpg",
            "publishedAt": "2023-12-16T10:11:51Z",
            "content": "New Delhi: Green beans, often overlooked in the realm of superfoods, are a nutritional powerhouse packed with health benefits. These also known as string beans or snap beans, are not only delicious b… [+2504 chars]"
          }
        ]
      },
      {
        "science": [
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Decoding the mystery of plastic rocks discovered on five continents - WION",
            "description": "Explained | Decoding the mystery of plastic rocks discovered on five continents",
            "url": "https://www.wionews.com/science/decoding-the-mystery-of-plastic-rocks-discovered-on-five-continents-670869",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/18/399901-plastic-rocks-1.png",
            "publishedAt": "2023-12-18T10:06:45Z",
            "content": "A strange and new kind of rock containing plastics has been found across the globe. They are deposits mainly formed by compressing rock and plastic polymers discarded by humans. So far, these plastic… [+5369 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Technology Networks"
            },
            "author": "Technology Networks",
            "title": "Sex Chromosomes Influence Gene Regulation - Technology Networks",
            "description": "New research sheds light on the sex chromosomes’ shared role as influential gene regulators. The research shows that genes expressed from the X and Y chromosomes impact cells throughout the body.",
            "url": "https://www.technologynetworks.com/genomics/news/sex-chromosomes-influence-gene-regulation-382122",
            "urlToImage": "https://assets.technologynetworks.com/production/dynamic/images/content/382122/sex-chromosomes-influence-gene-regulation-382122-640x360.jpg?cb=20231218",
            "publishedAt": "2023-12-18T09:35:14Z",
            "content": "Human sex chromosomes originated from a pair of autosomes, the ordinary or non-sex chromosomes that contain the majority of our genome and come in identical pairs. That ancestral pair of autosomes di… [+5771 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "NASA solves mystery of missing tomatoes aboard International Space Station - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/trending/trending-globally/nasa-solves-mystery-missing-tomatoes-aboard-international-space-station-9072807/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T09:24:33Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Education Diary"
            },
            "author": "iednewsdesk",
            "title": "Scientists develop new antibiotics to fight hospital superbug - India Education Diary",
            "description": "Scientists have developed a promising antibiotic candidate against a hospital superbug, using a methodology that may be important in the fight against antimicrobial resistance. The team from the Norwegian University of Science and Technology (NT",
            "url": "https://indiaeducationdiary.in/scientists-develop-new-antibiotics-to-fight-hospital-superbug/",
            "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2023/12/003db2c5bb815da278858eb58c4d2fa5.jpg",
            "publishedAt": "2023-12-18T08:46:14Z",
            "content": "Scientists have developed a promising antibiotic candidate against a hospital superbug, using a methodology that may be important in the fight against antimicrobial resistance.\r\nThe team from the Nor… [+2351 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Buzz Staff",
            "title": "This Newly Discovered Sea Spider, With Boxing Glove-like Claws, Breathes Through Legs - News18",
            "description": "The newly discovered species was extracted from the ocean floor in the Ross Sea, about 1,870 feet (570 meters) below the surface.",
            "url": "https://www.news18.com/viral/this-newly-discovered-sea-spider-with-boxing-glove-like-claws-breathes-through-legs-8708172.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-2023-12-18t120451.948-2023-12-ef461f8c1157562ade5d71c0002ac519-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-18T08:09:58Z",
            "content": "A new species of sea spider, with boxing glove-like claws, was recently discovered by scientists and the pictures of the creature are being widely shared on social media. So far, more than 1,000 spec… [+1791 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Tech Desk",
            "title": "NASA Warns Asteroid 2023 XL11 Grazing at 42021 kmph Towards the Earth - Times Now",
            "description": "NASA observes a 55-foot house-sized Asteroid 2023 XL11 travelling towards the Earth at a furious pace. Read further and know every detail on this asteroid.",
            "url": "https://www.timesnownews.com/technology-science/nasa-warns-asteroid-2023-xl11-grazing-at-42021-kmph-towards-the-earth-article-106083396",
            "urlToImage": "https://static.tnn.in/thumb/msid-106083541,thumbsize-423485,width-1280,height-720,resizemode-75/106083541.jpg",
            "publishedAt": "2023-12-18T07:59:57Z",
            "content": "Zomato Share Price Target 2024, 2025: Stock Zooms 52-Week High, Analyst Sees 'Promising Buying Opportunity'"
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "BNN Correspondents",
            "title": "NASA's Space Telescope Reveals Detailed Supernova Image; Artemis II Mission & Laser Communication Technology Progress - BNN Breaking",
            "description": "NASA's James Webb Space Telescope captures detailed image of supernova remnant Cassiopeia A. Artemis II mission progresses with Orion stage adapter preparation. Laser communication technology establishes successful data exchange. Public invited to participate…",
            "url": "https://bnnbreaking.com/world/us/nasas-space-telescope-reveals-detailed-supernova-image-artemis-ii-mission-laser-communication-technology-progress/",
            "urlToImage": "https://media.bnn.network/content/uploads/2023/12/nasas-james-webb-space-telescope-20231218075126.jpg",
            "publishedAt": "2023-12-18T07:51:00Z",
            "content": "NASA’s James Webb Space Telescope, in a breakthrough revelation, has captured an unprecedented high-definition image of the supernova remnant Cassiopeia A (Cas A) using its Near-Infrared Camera (NIRC… [+2025 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": null,
            "title": "Scientists use a fiber optic cable to study Arctic seafloor permafrost - Mint Lounge",
            "description": "Researchers are using an emerging technique that involves sending laser pulses down a fiber optic cable under the Arctic sea floor",
            "url": "https://lifestyle.livemint.com/smart-living/environment/fiber-optic-cable-arctic-seafloor-permafrost-climate-change-111702884738516.html",
            "urlToImage": "https://images.livemint.com/img/2023/12/18/1140x641/Jenn_Frederick_1702885240636_1702885248977.jpg",
            "publishedAt": "2023-12-18T07:45:42Z",
            "content": "The Arctic is fast becoming an important area for climate change research. The harsh and remote region, which is warming four times faster than the rest of the Earth, is changing rapidly.\r\nBut studyi… [+3188 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "SpaceWatch.Global"
            },
            "author": "SpaceWatch.Global",
            "title": "NASA Launches its High-Resolution Air Quality Control Instrument - SpaceWatch.Global",
            "description": null,
            "url": "https://spacewatch.global/2023/12/nasa-launches-its-high-resolution-air-quality-control-instrument/",
            "urlToImage": null,
            "publishedAt": "2023-12-18T07:36:15Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Devdiscourse"
            },
            "author": "Devdiscourse News Desk",
            "title": "NASA's Starling spacecraft get into swarm operations configuration - Devdiscourse",
            "description": "Read more about NASA's Starling spacecraft get into swarm operations configuration on Devdiscourse",
            "url": "https://www.devdiscourse.com/article/science-environment/2749521-nasas-starling-spacecraft-get-into-swarm-operations-configuration",
            "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/18_12_2023_12_49_50_4658275.webp?width=920&format=jpeg",
            "publishedAt": "2023-12-18T07:25:17Z",
            "content": "NASA's Starling spacecraft, a team of four CubeSats flying into orbit around Earth, have completed commissioning and are now in swarm experiment configuration that can function as an autonomous commu… [+2175 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Scientists Concerned About Humanity's Impact On Moon, Say It Has Entered A New Era - NDTV",
            "description": "Moon has been impacted by human activity since 1959, when Soviet Union's unmanned spacecraft Luna 2 touched down on on its surface.",
            "url": "https://www.ndtv.com/science/scientists-concerned-about-humanitys-impact-on-moon-say-it-has-entered-a-new-era-4695524",
            "urlToImage": "https://c.ndtvimg.com/2019-06/kt2od0fo_moon-landing-1969-wp_625x300_20_June_19.jpg",
            "publishedAt": "2023-12-18T07:22:10Z",
            "content": "One of the famous Moon missions are the Apollo 11, which landed in 1969.\r\nSpace Scientists concerned about the impact of humans on the Moon have declared a new geological epoch for Earth's satellite.… [+2126 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Buzz Staff",
            "title": "Watch: When NASA's Parker Solar Probe Ventured Close To Sun Without Incinerating - News18",
            "description": "The Sun is the hottest star in our solar system.",
            "url": "https://www.news18.com/viral/watch-when-nasas-parker-solar-probe-ventured-close-to-sun-without-incinerating-8708052.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-2023-12-18t110635.823-2023-12-f3fd698365903d22e70f032923b58348-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-18T06:22:22Z",
            "content": "The temperature at the surface of the Sun is about 5,600 degrees Celsius, and it rises from the surface towards the extremely hot core, reaching temperatures of about 15 million degrees Celsius. This… [+1806 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Buzz Staff",
            "title": "2 Months Later, NASA Is Still Struggling To Open Its Asteroid Sample Container - News18",
            "description": "After multiple attempts, NASA discovered two of the 35 fasteners on the TAGSAM head could not be removed with the current tools approved for use in the OSIRIS-REx glovebox.",
            "url": "https://www.news18.com/viral/2-months-later-nasa-is-still-struggling-to-open-its-asteroid-sample-container-8708122.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-2-2023-12-3bfc37140ade29566977e57ee9339656-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-18T06:22:18Z",
            "content": "NASAs mission to unravel the secrets of the solar system has hit an unexpected snag. Two months after obtaining a crucial sample from an asteroid, the space agency finds itself grappling with a perpl… [+2413 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Vicky Stavropoulou",
            "title": "Would we feel dizzy if the Earth stopped spinning? - CityLife",
            "description": "Would we feel dizzy if the Earth stopped spinning? - CityLife",
            "url": "https://citylife.capetown/uncategorized/would-we-feel-dizzy-if-the-earth-stopped-spinning/538945/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_new_technologies_high_resolution_76e5db95-d639-40af-a89f-0c9d55b2af6d.jpeg",
            "publishedAt": "2023-12-18T06:15:16Z",
            "content": "Summary:The idea of the Earth suddenly stopping its rotation may seem like a dizzying concept, but would it actually make us feel dizzy? In this article, we delve into the science behind the Earth’s … [+3672 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Buzz Staff",
            "title": "Watch: Astronaut Attempts To Eat Honey In Space; Internet Wonders How They Digest Food Without Gravity - News18",
            "description": "It is believed that the digestion of food doesn’t require gravity but involves the contraction and relaxation of gastrointestinal tract muscles.",
            "url": "https://www.news18.com/viral/watch-astronaut-attempts-to-eat-honey-in-space-internet-wonders-how-they-digest-food-without-gravity-8708105.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-2023-12-18t112452.491-2023-12-fbcd1250e5267f6b9227ffbb3e84194f-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-18T05:59:43Z",
            "content": "People are often fascinated by the intricacies of astronauts lives in space, and one significant challenge they face is the act of eating. Both NASA and the European Space Agency frequently release v… [+2045 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Sidney Hernandez",
            "title": "Which planet spins the fastest? - CityLife",
            "description": "Which planet spins the fastest? - CityLife",
            "url": "https://citylife.capetown/uncategorized/which-planet-spins-the-fastest/538912/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_robotic_automatization_high_resolutio_8a53482b-191f-470a-ad72-fe845d05247b.jpeg",
            "publishedAt": "2023-12-18T05:50:18Z",
            "content": "Which planet spins the fastest?\r\nSummary:The speed at which planets rotate on their axes varies greatly across our solar system. Among the eight planets, Jupiter holds the title for the fastest spin,… [+3133 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Arfa Javaid",
            "title": "NASA shares 51-year-old photo of US flag on Moon with Earth in distance - Hindustan Times",
            "description": "The pic of the US flag on the Moon with Earth in the background was taken 51 years ago by Eugene A. Cernan or Harrison H. Schmitt during the Apollo Mission.  | Trending",
            "url": "https://www.hindustantimes.com/trending/viral-pic-nasa-shares-51-year-old-photo-of-us-flag-on-moon-with-earth-in-distance-101702876713836.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/NASA-us-flag-moon-earth-apollo-mission-instagram_1702877884893_1702877894162.jpg",
            "publishedAt": "2023-12-18T05:39:26Z",
            "content": "Perspective is everything, wrote NASA Artemis on Instagram while sharing a picture taken 51 years ago by an astronaut. It shows the US flag deployed on the surface of the Moon. Whats more, the Earth … [+2240 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Sidney Hernandez",
            "title": "Can Earth end at any time? - CityLife",
            "description": "Can Earth end at any time? - CityLife",
            "url": "https://citylife.capetown/uncategorized/can-earth-end-at-any-time/538795/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_programming_c11fb785-d0e8-45c5-854a-cf6e5237b457.jpeg",
            "publishedAt": "2023-12-18T05:09:19Z",
            "content": "Summary:The question of whether Earth can come to an end at any time has long intrigued scientists and philosophers alike. While the planet’s ultimate fate is tied to cosmic events and natural proces… [+4882 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Samudrayaan mission: India's deep ocean mission- a challenge beyond space exploration - HT Tech",
            "description": "Samudrayaan mission Indias deep ocean mission a challenge beyond space exploration Samudrayaan mission The Deep Ocean Mission DOM is an ambitious initiative by India to explore and exploit the depths of the ocean. Approved by the Union Cabinet in 2021 the mis…",
            "url": "https://tech.hindustantimes.com/web-stories/samudrayaan-mission-indias-deep-ocean-mission-a-challenge-beyond-space-exploration-71702892334898.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/Samudrayaan_mission_1702892471550_1702892967183.jpg/",
            "publishedAt": "2023-12-18T04:19:35Z",
            "content": "Photo Credit: @KirenRijiju\r\n Samudrayaan mission: The Deep Ocean Mission (DOM) is an ambitious initiative by India to explore and exploit the depths of the ocean. Approved by the Union Cabinet in 202… [+2435 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "NASA's Voyager 1 Is Glitching, Sending Nonsensical Messages Back To Earth - NDTV",
            "description": "NASA reports that the spacecraft, currently situated 15 billion miles away from our planet, is experiencing a communications glitch.",
            "url": "https://www.ndtv.com/science/nasas-voyager-1-is-glitching-sending-nonsensical-messages-back-to-earth-4694514",
            "urlToImage": "https://i.ndtvimg.com/i/2017-12/nasa-voyager-1-twitter_650x400_81512208124.jpg",
            "publishedAt": "2023-12-18T03:27:55Z",
            "content": "NASA receives the transmitted data in binary code\r\nAfter traversing billions of miles and spending almost five decades in space, NASA's Voyager 1 space probe has started sending nonsensical data back… [+2233 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ScienceAlert"
            },
            "author": "Michelle Starr",
            "title": "Tantalizing Organic Molecules Detected Erupting From Enceladus - ScienceAlert",
            "description": "Cronian moon Enceladus doesn't look like much.",
            "url": "https://www.sciencealert.com/tantalizing-organic-molecules-detected-erupting-from-enceladus",
            "urlToImage": "https://www.sciencealert.com/images/2023/05/enceladus-plumes-cassini-2014.jpg",
            "publishedAt": "2023-12-18T03:18:36Z",
            "content": "Cronian moon Enceladus doesn't look like much. It's kind of monochrome and small, paling in comparison with Saturn's big showy rings and giant hexagon.\r\nBut, as many Solar System objects make clear, … [+4117 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dovepress.com"
            },
            "author": "Dove Press",
            "title": "Clinically invasive Staphylococcus aureus isolates | IDR - Dove Medical Press",
            "description": "Investigating the molecular characteristics, antimicrobial resistance, and biofilm-forming ability of Staphylococcus aureus isolates from invasive infections.",
            "url": "https://www.dovepress.com/molecular-characteristics-antimicrobial-susceptibility-biofilm-forming-peer-reviewed-fulltext-article-IDR",
            "urlToImage": "https://www.dovepress.com/assets/img/addon/og_logo.png",
            "publishedAt": "2023-12-18T02:49:41Z",
            "content": "Introduction\r\nStaphylococcus aureus is a major bacterial pathogen capable of causing infections ranging from mild skin infections to life-threatening invasive diseases.1,2 The emergence of methicilli… [+33556 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Early Risers May Be Neanderthal Descendants, New Study Suggests - Yahoo Finance UK",
            "description": null,
            "url": "https://uk.finance.yahoo.com/news/early-risers-may-neanderthal-descendants-012223426.html",
            "urlToImage": null,
            "publishedAt": "2023-12-18T01:22:00Z",
            "content": "If you click 'Accept all', we and our partners (including 241 who are part of the IAB Transparency &amp; Consent Framework) will also use cookies and your personal data, such as IP address, precise l… [+686 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hurriyet Daily News"
            },
            "author": "hurriyetdailynews.com",
            "title": "Biggest solar flare in years temporarily disrupts radio signals on Earth - Hurriyet Daily News",
            "description": "A NASA telescope has captured the biggest solar flare in years, which temporarily knocked out radio communication on Earth.",
            "url": "https://www.hurriyetdailynews.com/biggest-solar-flare-in-years-temporarily-disrupts-radio-signals-on-earth-188707",
            "urlToImage": "https://image.hurimg.com/i/hurriyet/75/200x200/657ed2a04e3fe11af4311996.jpg",
            "publishedAt": "2023-12-18T01:00:00Z",
            "content": "CAPE CANAVERAL, FLORIDA\r\nA NASA telescope has captured the biggest solar flare in years, which temporarily knocked out radio communication on Earth.\r\nThe sun spit out the huge flare, resulting in two… [+926 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "This is what going to gym looks like at International Space Station - WION",
            "description": "This is what going to gym looks like at International Space Station",
            "url": "https://www.wionews.com/science/this-is-what-going-to-gym-looks-like-at-international-space-station-670676",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/18/399773-untitled-design-2023-12-18t031007148.png",
            "publishedAt": "2023-12-17T21:37:36Z",
            "content": "Exercise and going to gym requires ample willpower. Not every human on Earth has it. But almost everyone of the counted few who go to the International Space Station must go to the gym at the ISS.\r\nG… [+1988 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ticker.tv"
            },
            "author": "Cheryl King",
            "title": "Prepare for the Celestial Ballet: The Dazzling \"Ring of Fire\" Solar Eclipse - TickerTV News",
            "description": "Prepare for the Celestial Ballet: The Dazzling \"Ring of Fire\" Solar Eclipse - TickerTV News",
            "url": "https://ticker.tv/news/us-will-see-ring-of-fire-solar-eclipse/344650/",
            "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_mens_using_smartphone_or_computer_on_outdoor_2f0fa203-163e-4a40-ba3f-9e4a01a4ebfe.png",
            "publishedAt": "2023-12-17T21:11:26Z",
            "content": "Summary: Get ready to be spellbound the upcoming “Ring of Fire” solar eclipse, a celestial ballet that promises to captivate sky gazers. This rare event occurs when the moon partially covers the sun,… [+4514 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "Gravitational Waves Create A 'Cosmic Symphony' That Scientists Are Tuning Into - MSN",
            "description": null,
            "url": "https://www.msn.com/en-us/news/technology/gravitational-waves-create-a-cosmic-symphony-that-scientists-are-tuning-into/vi-AA1lDnas",
            "urlToImage": null,
            "publishedAt": "2023-12-17T21:08:03Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Ticker.tv"
            },
            "author": "Betty Davis",
            "title": "Scientists Discover New Species of Deep-Sea Fish in the Indian Ocean - TickerTV News",
            "description": "Scientists Discover New Species of Deep-Sea Fish in the Indian Ocean - TickerTV News",
            "url": "https://ticker.tv/news/dc-young-fly-says-prayer-helped-him-deal-with-grief-after-loss-of-partner-ms-jacky-oh/346856/",
            "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_a_man_using_smartphone_or_computer_on_outdoor_c0e2214a-fbbc-473f-b749-60d9c8707856.png",
            "publishedAt": "2023-12-17T20:15:42Z",
            "content": "Summary: In a recent expedition to the Indian Ocean, scientists made an exciting discovery – a new species of fish that resides in the depths of the ocean. The unidentified fish, adapted to its dark … [+1925 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/joy-pillai/",
            "title": "Year Ender 2023: A Glimpse Of Most Significant Space Explorations Of The Year - India.com",
            "description": "Year Ender 2023: As the year comes to an end, let's take a look back at significant space developments that happened this year.",
            "url": "https://www.india.com/science/year-ender-2023-most-significant-space-explorations-of-the-year-chandrayaan-3-mission-moon-aditya-l1-euclid-telescope-psyche-juice-mission-6593402/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/space-explorations-2023.jpg",
            "publishedAt": "2023-12-17T18:11:27Z",
            "content": "Year Ender 2023: As the year comes to an end, let's take a look back at significant space developments that happened this year.\r\nYear Ender 2023: A Glimpse Of Most Significant Space Explorations Of T… [+3787 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "Geeta Pillai",
            "title": "Scientists Confirm Distinct Structure Within Earth's Inner Core – BNN Breaking - BNN Breaking",
            "description": "A team of researchers from the Australian National University, headed by observational seismologist Thanh-Son Pham, have confirmed the existence of a unique structure deep within Earth's inner core. Utilizing sophisticated seismic monitoring methods, the scie…",
            "url": "https://bnnbreaking.com/world/australia/scientists-confirm-distinct-structure-within-earths-inner-core/",
            "urlToImage": "https://media.bnn.network/content/uploads/2023/12/earths-inner-core-structure-20231217174235.jpg",
            "publishedAt": "2023-12-17T17:42:39Z",
            "content": "A team of researchers from the Australian National University, headed by observational seismologist Thanh-Son Pham, have confirmed the existence of a unique structure deep within Earth’s inner core. … [+2008 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Vicky Stavropoulou",
            "title": "Early Humans May Have Arrived in North America Earlier Than Thought by Using a \"Sea Ice Highway\" - CityLife",
            "description": "Early Humans May Have Arrived in North America Earlier Than Thought by Using a \"Sea Ice Highway\" - CityLife",
            "url": "https://citylife.capetown/uncategorized/glacial-pathfinders-tracing-north-americas-first-migrants-via-the-sea-ice-highway/537254/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_robotic_automatization_high_resolutio_aa5b4e3e-8820-477d-b9f3-8f0beb53a507.jpeg",
            "publishedAt": "2023-12-17T17:35:58Z",
            "content": "New evidence suggests that early humans may have arrived in North America much earlier than previously believed, challenging traditional migration theories. Researchers have proposed the possibility … [+2523 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BGR"
            },
            "author": "Joshua Hawkins, Joshua Hawkins",
            "title": "Scientists made an ultra-tough substance as strong as diamonds that could be used to coat spacecraft - BGR",
            "description": "A group of scientists have created an ultra-tough substance that rivals the hardness of diamonds. It may even be used to coat spacecraft.",
            "url": "https://bgr.com/science/scientists-made-an-ultra-tough-substance-as-hard-as-diamonds/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2022/09/AdobeStock_313933958.jpg?quality=82&strip=all",
            "publishedAt": "2023-12-17T17:06:00Z",
            "content": "Diamonds are one of the hardest naturally occurring substances on Earth, and while we’ve discovered minerals even stronger than diamonds, scientists may have just taken things a step further. Accordi… [+2122 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ticker.tv"
            },
            "author": "Cheryl King",
            "title": "A Star's Epic Journey: From the Depths of the Cosmos to a Black Hole's Grasp - TickerTV News",
            "description": "A Star's Epic Journey: From the Depths of the Cosmos to a Black Hole's Grasp - TickerTV News",
            "url": "https://ticker.tv/news/a-10-billion-year-50000-light-year-journey-to-a-black-hole/344492/",
            "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_man_or_men_using_smartphone_or_computer_28d886bb-d7a0-4826-a57f-19ad98f94c2a.png",
            "publishedAt": "2023-12-17T15:50:14Z",
            "content": "A groundbreaking study recently published in Proceedings of the Japan Academy, Series B has revealed a fascinating discovery regarding a star located near the supermassive black hole at the center of… [+2567 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gearrice.com"
            },
            "author": "Advay Hora",
            "title": "An AI analysis shows that monster waves happen all the time, what are the consequences of this? - Gearrice",
            "description": "Join the conversation",
            "url": "https://www.gearrice.com/update/an-ai-analysis-shows-that-monster-waves-happen-all-the-time-what-are-the-consequences-of-this/",
            "urlToImage": "https://www.mundodeportivo.com/urbantecno/hero/2023/11/pexels-daniel-torobekov-19049977.jpg",
            "publishedAt": "2023-12-17T15:47:50Z",
            "content": "Freak waves are hard to see, but AI analysis shows they happen daily\r\nMore than two thirds of planet Earth are covered in water. Therefore, the oceans and seas extend for thousands of square kilomete… [+2306 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "SciTechDaily"
            },
            "author": null,
            "title": "NASA's Engineering Marvel: Preparing the Gateway to the Moon - SciTechDaily",
            "description": "NASA's Artemis II mission progresses with final preparations of the SLS rocket. The Orion stage adapter, essential for connecting Orion to the SLS and ensuring launch safety, has reached a key milestone. The SLS is integral to NASA’s goal of lunar exploration…",
            "url": "https://scitechdaily.com/nasas-engineering-marvel-preparing-the-gateway-to-the-moon/",
            "urlToImage": "https://scitechdaily.com/images/Orion-Stage-Adapter-Diaphragm-Installed-scaled.jpg",
            "publishedAt": "2023-12-17T15:07:06Z",
            "content": "NASA’s Artemis II mission is advancing with the final preparations of the SLS rocket at Kennedy Space Center. The Orion stage adapter, a key component connecting Orion to the SLS, recently underwent … [+3070 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "One Green Planet"
            },
            "author": "Trinity Sparke",
            "title": "Cockatoos Enjoy a Soggy Snacks, Too - One Green Planet - One Green Planet",
            "description": "Humans aren't the only species with peculiar dining habits as researchers discovered that some cockatoos exhibit a rather unique behavior.",
            "url": "https://www.onegreenplanet.org/animals/cockatoos-enjoy-a-soggy-snacks-too/",
            "urlToImage": "https://www.onegreenplanet.org/wp-content/uploads/2023/12/shutterstock-533948902-e1702587394650.jpg",
            "publishedAt": "2023-12-17T14:48:41Z",
            "content": "Humans aren’t the only species with peculiar dining habits, as researchers have recently discovered that some cockatoos exhibit a rather unique behavior – they dunk their food before indulging in a m… [+3838 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Northeast Now"
            },
            "author": "The Conversation",
            "title": "The Sahara Desert used to be a green savannah - NORTHEAST NOW - Northeast Now",
            "description": "The ice ages are driven by the eccentricity cycle, which determines how circular Earth’s orbit is around the sun",
            "url": "http://nenow.in/environment/the-sahara-desert-used-to-be-a-green-savannah.html",
            "urlToImage": "https://nenow.in/wp-content/uploads/2023/12/okay.jpg",
            "publishedAt": "2023-12-17T14:26:32Z",
            "content": "Edward Armstrong, University of Helsinki\r\nAlgerias Tassili NAjjer plateau is Africas largest national park. Among its vast sandstone formations is perhaps the worlds largest art museum. Over 15,000 e… [+6012 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Scroll.in"
            },
            "author": "Niladry Sarkar",
            "title": "Water droplets from remnants of ancient ocean found in Himalayan mineral deposits - Scroll.in",
            "description": "Little is known about past oceans where the first life forms originated and evolved. Ocean water trapped in magnesite crystals could provide insights.",
            "url": "https://scroll.in/article/1060589/water-droplets-from-remnants-of-ancient-ocean-found-in-himalayan-mineral-deposits",
            "urlToImage": "https://sc0.blr1.cdn.digitaloceanspaces.com/book/196659-hfsmavzyfp-1702583749.jpg",
            "publishedAt": "2023-12-17T14:00:00Z",
            "content": "In the Kumaon mountains in the central sector of Uttarakhands Himalayas, a team of scientists from the Indian Institute of Science and Japans Niigata University have unearthed water droplets trapped … [+8049 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Live Science"
            },
            "author": "Alexander McNamara",
            "title": "Science news this week: A dolphin with thumbs and a massive quantum chip - Livescience.com",
            "description": "Dec. 17, 2023: Our weekly roundup of the latest science in the news, as well as a few fascinating articles to keep you entertained over the weekend.",
            "url": "https://www.livescience.com/technology/science-news-this-week-a-dolphin-with-thumbs-and-a-massive-quantum-chip",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/z8uvn6ff4tMGVHJBSesLpD-1200-80.jpg",
            "publishedAt": "2023-12-17T13:00:00Z",
            "content": "This week in science news IBM unveiled a massive 1,000 qubit quantum chip, we discovered a lost world of lagoons in the Atacama desert, and met a dolphin with an unusual flipper.\r\nQuantum computing i… [+5075 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Forbes"
            },
            "author": "Jamie Carter",
            "title": "Year’s Final Meteor Shower Has Begun: When To See The Ursids At Their Best - Forbes",
            "description": "The Ursids—the year’s final meteor shower—has started, and you can see “shooting stars” light up the night sky on the solstice in the northern hemisphere.",
            "url": "https://www.forbes.com/sites/jamiecartereurope/2023/12/17/years-final-meteor-shower-has-begun-when-to-see-the-ursids-at-their-best/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/595949938/0x0.jpg?format=jpg&crop=1938,908,x69,y913,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2023-12-17T12:15:00Z",
            "content": "null\r\nGetty\r\nThe Ursids, the final meteor shower of the year, has begun.\r\nRunning from December 17-26 this year, according to Timeanddate, the Ursid meteor shower will peak overnight on Thursday, Dec… [+2128 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Republic World"
            },
            "author": "Digital Desk",
            "title": "NASA finds 17 exoplanets with potentially vast oceans that could be suitable for life- Republic World - Republic World",
            "description": "A new NASA study has indicated that as many as 17 exoplanets may have oceans beneath their icy shells providing suitable conditions for life.",
            "url": "https://www.republicworld.com/science/space/nasa-finds-17-exoplanets-with-potentially-vast-oceans-that-could-be-suitable-for-life",
            "urlToImage": "https://img.republicworld.com/rimages/WaterWorldHiH264-170281236835716_9.webp",
            "publishedAt": "2023-12-17T11:26:00Z",
            "content": "NASA scientists have found a key element necessary for the origin of life on one of Saturn's Moon. The Moon in question is Enceladus which is famous for spewing organic compounds into outer space.\r\nA… [+2617 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Disturbance on Sun can cause train accidents on Earth, researchers warn - WION",
            "description": "Solar storms can cause train accidents on Earth, researchers warn",
            "url": "https://www.wionews.com/science/disturbance-on-sun-can-cause-train-accidents-on-earth-researchers-warn-670555",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/17/399697-railway-train-signal.jpg",
            "publishedAt": "2023-12-17T11:17:32Z",
            "content": "Changes in space weather, especially powerful solar storms can cause transport havoc like train accidents, researchers from Lancaster University have concluded.\r\nAccording to experts, solar storms ca… [+2256 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Robert Andrew",
            "title": "Remains of Baby Dinosaurs Found Inside Fossil of Ancient Predator - CityLife",
            "description": "Remains of Baby Dinosaurs Found Inside Fossil of Ancient Predator - CityLife",
            "url": "https://citylife.capetown/ai/two-baby-dinosaurs-found-in-tyrannosaur-fossil-shed-light-on-changing-diet-3/536414/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_robotic_automatization_high_resolutio_208863ad-46ad-4be5-a8be-6b5159854215.jpeg",
            "publishedAt": "2023-12-17T11:08:41Z",
            "content": "The recent discovery of the remains of two baby dinosaurs inside the fossil of a 75-million-year-old tyrannosaur has provided valuable insights into the diet of these ancient predators. The findings,… [+1733 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dynamitenews.com"
            },
            "author": null,
            "title": "Researchers give more insight into how new genes arise from nothing - Dynamite News",
            "description": "The DNA of living species encode their complexity, but where do these genes come from? The University of Helsinki researchers answered long-standing problems about the development of small regulatory genes and described a way for generating their DNA palindro…",
            "url": "https://www.dynamitenews.com/story/researchers-give-more-insight-into-how-new-genes-arise-from-nothing",
            "urlToImage": "https://www.dynamitenews.com/images/2023/12/17/researchers-give-more-insight-into-how-new-genes-arise-from-nothing/657eccc57dd24.jpg",
            "publishedAt": "2023-12-17T10:29:52Z",
            "content": "The DNA of living species encode their complexity, but where do these genes come from? The University of Helsinki researchers answered long-standing problems about the development of small regulatory… [+4139 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Revyuh.com"
            },
            "author": "Kamal Saini",
            "title": "Meet the Wakayama ‘Blue Dragon’ Mosasaur that Terrorized Ancient Seas – and ‘Never Seen Before’ - Revyuh",
            "description": "Wakayama’s ‘Blue Dragon’ Mosasaur, The Fearsome Guardian of Ancient Oceans: 'It Was Something I Had Never Seen Before' In a groundbreaking discovery,",
            "url": "https://www.revyuh.com/news/science-and-research/sustainability/meet-the-wakayama-blue-dragon-mosasaur-that-terrorized-ancient-seas-and-never-seen-before/",
            "urlToImage": "https://www.revyuh.com/wp-content/uploads/2023/12/Meet-the-Wakayama-‘Blue-Dragon-Mosasaur-that-Terrorized-Ancient-Seas-and-Never-Seen-Before.jpg",
            "publishedAt": "2023-12-17T09:27:51Z",
            "content": "In a groundbreaking discovery, scientists led by University of Cincinnati Associate Professor Takuya Konishi have revealed the remarkable secrets of the Wakayama Soryu, a mosasaur that once roamed th… [+3778 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "SciTechDaily"
            },
            "author": null,
            "title": "Blast Off to Innovation: Dream Chaser's Thrilling Testing Phase at NASA - SciTechDaily",
            "description": "NASA and Sierra Space are advancing the Dream Chaser spacecraft's testing at the Neil Armstrong Test Facility, focusing on environmental simulations for its upcoming ISS mission. Post-testing, the spacecraft will head to Kennedy Space Center for a 2024 launch…",
            "url": "https://scitechdaily.com/blast-off-to-innovation-dream-chasers-thrilling-testing-phase-at-nasa/",
            "urlToImage": "https://scitechdaily.com/images/Sierra-Space-Dream-Chaser-Spacecraft-scaled.jpg",
            "publishedAt": "2023-12-17T08:45:41Z",
            "content": "NASA and Sierra Space are making progress on the first flight of the company’s Dream Chaser spacecraft to the International Space Station. The uncrewed cargo spaceplane is planned to launch its demon… [+2456 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "NASA’s tiny telescope discovers seven hot Jupiters millions of light-years away - WION",
            "description": "NASA’s tiny telescope discovers seven hot Jupiters millions of light-years away",
            "url": "https://www.wionews.com/science/nasas-tiny-telescope-discovers-seven-hot-jupiters-millions-of-light-years-away-670508",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/17/399670-gettyimages-1025381220.jpg",
            "publishedAt": "2023-12-17T08:43:57Z",
            "content": "In a recent study unveiled at the 2023 American Geophysical Union meeting, researchers studied and explored \"hot Jupiters\" through NASA's CubeSat mission, the Colorado Ultraviolet Transit Experiment … [+2754 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thewire.in"
            },
            "author": null,
            "title": "Was Going to Space a Good Idea? - The Wire",
            "description": "After the Moon, Mars is the next world in line for 'conquest'. But the question remains. Is space travel enhancing what we value about humanity?",
            "url": "https://thewire.in/space/was-going-to-space-a-good-idea",
            "urlToImage": "https://cdn.thewire.in/wp-content/uploads/2023/12/17124747/image-1614-800x375.png",
            "publishedAt": "2023-12-17T08:00:42Z",
            "content": "In 1963, six years after the first satellite was launched, editors from the Encyclopaedia Britannica posed a question to five eminent thinkers of the day: Has mans conquest of space increased or dimi… [+6097 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "Kajari Goswami",
            "title": "10 fastest animals in the world - DNA India",
            "description": "10 fastest animals in the world",
            "url": "https://www.dnaindia.com/web-stories/lifestyle/10-fastest-animals-in-the-world--1702794461437",
            "urlToImage": null,
            "publishedAt": "2023-12-17T06:36:41Z",
            "content": "Dec 17, 2023, 12:06PM IST"
          },
          {
            "source": {
              "id": null,
              "name": "Dtnext.in"
            },
            "author": "ANI",
            "title": "Study finds how body reacts to high or low oxygen levels - DTNEXT",
            "description": "Is it possible, however, to have too much? Indeed, breathing air that contains more oxygen than your body requires can lead to health problems or even death. But with scant research on the topic,...",
            "url": "https://www.dtnext.in/lifestyle/wellbeing/study-finds-how-body-reacts-to-high-or-low-oxygen-levels-755007",
            "urlToImage": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/12/17/787162-ani-20231216175703.jpg",
            "publishedAt": "2023-12-17T05:16:02Z",
            "content": "CALIFORNIA: It only takes a few seconds of holding your breath to know that not obtaining adequate oxygen is detrimental to your health. \r\nIs it possible, however, to have too much? Indeed, breathing… [+4496 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "BNN Breaking",
            "title": "Astrophotographer Captures Geminid Meteor Shower: A Cosmic Spectacle - BNN Breaking",
            "description": null,
            "url": "https://bnnbreaking.com/world/new-zealand/astrophotographer-captures-geminid-meteor-shower-a-cosmic-spectacle/",
            "urlToImage": null,
            "publishedAt": "2023-12-17T04:12:57Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Scientists sound alarm on global consequences as Antarctic ice melt accelerates - AP Archive",
            "description": "(12 Dec 2023) RESTRICTION SUMMARY: ++MUSIC CLEARED FOR EDITORIAL USE++ASSOCIATED PRESSIsabel Riquelme Islet, Antarctic Peninsula - 24 November 20231. Drone s...",
            "url": "https://www.youtube.com/watch?v=flFwlftFBIo",
            "urlToImage": "https://i.ytimg.com/vi/flFwlftFBIo/maxresdefault.jpg",
            "publishedAt": "2023-12-17T04:02:34Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Gabriel Botha",
            "title": "Indian Rover Awakening Raises Excitement for Lunar Exploration - CityLife",
            "description": "Indian Rover Awakening Raises Excitement for Lunar Exploration - CityLife",
            "url": "https://citylife.capetown/space/ist-der-indische-rover-aufgewacht/535209/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_6e0c2e40-d4f7-45ba-938c-6836abdb6af2.jpeg",
            "publishedAt": "2023-12-17T00:50:45Z",
            "content": "Scientists and space enthusiasts are eagerly awaiting the awakening of the Indian rover, known as Pragyan, which has been in hibernation for several months. Pragyan is part of the Chandrayaan-2 missi… [+2891 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ticker.tv"
            },
            "author": "Tanya King",
            "title": "Indian Spacecraft Successfully Returns to Earth Orbit after Lunar Mission - TickerTV News",
            "description": "Indian Spacecraft Successfully Returns to Earth Orbit after Lunar Mission - TickerTV News",
            "url": "https://ticker.tv/news/india-returns-chandrayaan-3-propulsion-module-to-earth-orbit/342521/",
            "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_a_woman_using_smartphone_or_computer_on_outdoor_32358097-32ad-432a-b081-f4347a64fbfe.png",
            "publishedAt": "2023-12-17T00:33:48Z",
            "content": "India’s space agency, ISRO, has announced that the spacecraft used for the Chandrayaan-3 mission has successfully returned to Earth orbit. This marks a significant milestone in India’s plans for a fu… [+1717 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dunya News"
            },
            "author": null,
            "title": "Look Up! The stunning visual phenomena that Aren't auroras - Dunya News",
            "description": "Night sky can be host to ghosts, elves, red sprites and, last but never least, Steve",
            "url": "https://dunyanews.tv/en/Technology/778194-Look-Up!-The-stunning-visual-phenomena-that-Aren’t-auroras",
            "urlToImage": "https://img.dunyanews.tv/news/2023/December/12-17-23/news_big_images/778194_62787148.jpg",
            "publishedAt": "2023-12-16T22:00:42Z",
            "content": "Technology\r\nNight sky can be host to ghosts, elves, red sprites and, last but never least, Steve\r\n(Web Desk) - The Sun is on a roll. Our star has been releasing some of its strongest solar flares in … [+2722 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Aborted test, missing parts add to Europe's space woes - IndiaTimes",
            "description": "Europe News: The final flight of Italy's Vega rocket has been delayed after crucial parts went missing, while the latest test of Europe's new Ariane 6 has been abo",
            "url": "https://timesofindia.indiatimes.com/world/europe/aborted-test-missing-parts-add-to-europes-space-woes/articleshow/106052616.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106052638,width-1070,height-580,imgsize-59596,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-16T19:54:12Z",
            "content": "10 foods that claim to be healthy but are not"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": null,
            "title": "METEOR SHOWERS: Here’s a look at some of the most established meteor showers known in recent years - The Financial Express",
            "description": "Quadrantids are also known for their bright fireball meteors, adds Nasa. The Quadrantids are best viewed in the Northern Hemisphere during the night and predawn hours.",
            "url": "https://www.financialexpress.com/life/science-meteor-showers-heresnbspa-look-at-some-of-the-most-establishednbspmeteor-showers-known-in-recent-years-3340339/",
            "urlToImage": "https://www.financialexpress.com/wp-content/uploads/2023/12/meteor-reu.jpg",
            "publishedAt": "2023-12-16T19:45:00Z",
            "content": "‘Geminids’, known for their bright colourful fireballs and considered one of the most reliable meteor showers visible from Earth, peaked on December 14 and will be active till December 24, as per rep… [+4311 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Sidney Hernandez",
            "title": "Did India find ice on moon? - CityLife",
            "description": "Did India find ice on moon? - CityLife",
            "url": "https://citylife.capetown/uncategorized/did-india-find-ice-on-moon/534479/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_men_575d2c41-0100-4bb3-a903-9ec6af8ca9b4.jpeg",
            "publishedAt": "2023-12-16T19:41:15Z",
            "content": "Did India find ice on the moon?\r\nSummary:In a significant development, India’s Chandrayaan-1 mission has reportedly discovered evidence of water ice on the moon. This finding has the potential to rev… [+4156 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ticker.tv"
            },
            "author": "Betty Davis",
            "title": "New Galaxy Reveals Hidden Population in Early Universe - TickerTV News",
            "description": "New Galaxy Reveals Hidden Population in Early Universe - TickerTV News",
            "url": "https://ticker.tv/news/james-webb-space-telescope-pierces-through-dust-to-find-an-ancient-ghostly-galaxy-2/343051/",
            "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_mens_using_smartphone_or_computer_on_outdoor_a570845a-27ab-4ada-8ec5-25e3f7efe07e.png",
            "publishedAt": "2023-12-16T19:04:39Z",
            "content": "Scientists have made a remarkable discovery with the help of the James Webb Space Telescope (JWST), uncovering a previously unknown population of galaxies from the early universe. The image captured … [+1873 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Unilad.com"
            },
            "author": "Kit Roberts",
            "title": "Earth just received record-breaking laser-beamed message from 16000000 miles away - UNILAD",
            "description": "The message arrived from far beyond the Moon, a record-breaking distance from the planet.",
            "url": "https://www.unilad.com/technology/space/earth-message-from-space-385612-20231216",
            "urlToImage": "https://images.ladbible.com/resize?type=jpeg&quality=70&width=1200&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/blt949ea8e16e463049/bltfdb1e74ed8b6eb63/657ddba2d56a0404073fd865/message-earth.png",
            "publishedAt": "2023-12-16T17:37:47Z",
            "content": "Earth has received a message from outer space. \r\nYes, you read that right, a message arrived on Earth from a source some 16 million kilometres - or around 10 million miles - from the planet.\r\nThis is… [+2263 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Observervoice.com"
            },
            "author": "OV Digital Desk, OV Digital Desk",
            "title": "Unmasking a Legend: The Story of Samuel C. C. Ting - Observer Voice",
            "description": "Samuel C. C. Ting is an Indian child rights activist. Ting was awarded the Nobel Prize in Physics in 1976.",
            "url": "https://observervoice.com/unmasking-a-legend-the-story-of-samuel-c-c-ting-44305/",
            "urlToImage": "https://observervoice.com/wp-content/uploads/2023/12/Samuel-C.-C.-Ting.jpg",
            "publishedAt": "2023-12-16T17:21:52Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Vicky Stavropoulou",
            "title": "How will Aditya-L1 not burn? - CityLife",
            "description": "How will Aditya-L1 not burn? - CityLife",
            "url": "https://citylife.capetown/uncategorized/how-will-aditya-l1-not-burn/533872/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_men_6444ced6-17ee-45d7-8449-174bf1d49b40.jpeg",
            "publishedAt": "2023-12-16T15:32:15Z",
            "content": "Summary:The Aditya-L1 mission, India’s first solar mission, is set to launch in the near future. One of the major concerns surrounding this mission is how the spacecraft will not burn when it gets cl… [+3412 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thetechoutlook.com"
            },
            "author": "Blossom Hazarika",
            "title": "Registration for NASA PACE mission Social Media Credential closes on 19 December 2023, 3 pm EST - The Tech Outlook",
            "description": "NASA’s latest development, the PACE mission is scheduled to launch no earlier than February 6, 2024. PACE stands for Plankton, Aerosol, Cloud Ocean Ecosystem. The PACE mission will be launched on a SpaceX Falcon 9 rocket from Space Launch Complex 40",
            "url": "https://www.thetechoutlook.com/news/science/registration-for-nasa-pace-mission-social-media-credential-closes-on-19-december-2023-3-pm-est/",
            "urlToImage": "https://www.thetechoutlook.com/wp-content/uploads/2023/12/PACE-mission.jpg",
            "publishedAt": "2023-12-16T15:27:14Z",
            "content": "NASAs latest development, the PACE mission is scheduled to launch no earlier than February 6, 2024. PACE stands for Plankton, Aerosol, Cloud Ocean Ecosystem. The PACE mission will be launched on a Sp… [+1451 chars]"
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
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "There maybe small black hole inside some stars | Latest News | WION - WION",
            "description": "Could a black hole be lurking inside our sun? Well if it does then what is its impact well our next report tells you what scientists make of this new interes...",
            "url": "https://www.youtube.com/watch?v=agv9HZeL9vU",
            "urlToImage": "https://i.ytimg.com/vi/agv9HZeL9vU/maxresdefault.jpg",
            "publishedAt": "2023-12-16T15:06:34Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "OTD In Space - December 15: Andromeda Galaxy Spotted By Telescope For The 1st Time - MSN",
            "description": null,
            "url": "https://www.msn.com/en-us/news/technology/otd-in-space-december-15-andromeda-galaxy-spotted-by-telescope-for-the-1st-time/vi-AA1lzJZT",
            "urlToImage": null,
            "publishedAt": "2023-12-16T13:26:55Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Vicky Stavropoulou",
            "title": "India's Contribution to Solar Study: Unraveling the Secrets of the Sun - CityLife",
            "description": "India's Contribution to Solar Study: Unraveling the Secrets of the Sun - CityLife",
            "url": "https://citylife.capetown/space/did-india-send-a-rocket-to-the-sun-2/533589/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_new_technologies_of_XXI_century_high__85fcc5ee-9bb3-4185-a3da-4b8b61fac4e1.jpeg",
            "publishedAt": "2023-12-16T13:17:29Z",
            "content": "Summary:\r\nContrary to recent rumors, India has not sent a rocket to the Sun. However, India’s space agency, the Indian Space Research Organisation (ISRO), has made significant strides in space explor… [+2685 chars]"
          },
          {
            "source": {
              "id": "the-washington-post",
              "name": "The Washington Post"
            },
            "author": "Kasha Patel",
            "title": "Here's what happens when the sun's 'wind' disappears near Earth and Mars - The Washington Post",
            "description": "Scientists are gaining new insights into the solar wind, which played a role in the loss of water from Mars and can disrupt communications systems on Earth.",
            "url": "https://www.washingtonpost.com/climate-environment/2023/12/16/solar-wind-mars-earth-water/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A7VRJJLL5SACN3QRBA2GWVEELM.jpg&w=1440",
            "publishedAt": "2023-12-16T12:14:43Z",
            "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nThe sun constantly spews gas and particles charged with electricity into space at a million miles per hour. The stream, known as the s… [+5850 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Gabriel Botha",
            "title": "Scientists Make Groundbreaking Communication Breakthrough with Humpback Whale - CityLife",
            "description": "Scientists Make Groundbreaking Communication Breakthrough with Humpback Whale - CityLife",
            "url": "https://citylife.capetown/space/scientists-say-they-conversed-with-a-whale-it-may-be-practice-for-aliens/533307/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_men_fc5f1167-f58a-414e-a9cc-49ccd5458071.jpeg",
            "publishedAt": "2023-12-16T11:24:46Z",
            "content": "Summary: In a groundbreaking new study, scientists have successfully engaged in a “conversation” with a humpback whale named Twain. Researchers from the University of California, Davis, the SETI Inst… [+1999 chars]"
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
