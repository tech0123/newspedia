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
              "name": "India Today"
            },
            "author": "India Today Science Desk",
            "title": "There are a billion suns in this picture taken by Hubble telescope - India Today",
            "description": "This dazzling display of approximately one billion stars is located some 7 million light-years from Earth in the constellation Virgo.",
            "url": "https://www.indiatoday.in/science/story/there-are-a-billion-suns-in-this-picture-taken-by-hubble-telescope-2478931-2023-12-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/galaxy-cluster-with-billion-stars-210855671-16x9_0.jpg?VersionId=72mwPZ_.81HuwW8RtGZ2.UdvOX0IbOox",
            "publishedAt": "2023-12-21T12:15:35Z",
            "content": "In a celestial celebration captured by the Hubble Space Telescope, the dwarf irregular galaxy UGC 8091 has been revealed in a stunning image that resembles a cosmic snow globe. \r\nThis dazzling displa… [+2068 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dst.gov.in"
            },
            "author": null,
            "title": "Milli-second burst detected by AstroSat in new high magnetic field neutron star can help understand such stellar entities - Department Of Science & Technology",
            "description": "The Department of Science & Technology plays a pivotal role in promotion of science & technology in the country.",
            "url": "https://dst.gov.in/milli-second-burst-detected-astrosat-new-high-magnetic-field-neutron-star-can-help-understand-such",
            "urlToImage": null,
            "publishedAt": "2023-12-21T11:41:37Z",
            "content": "AstroSat, Indias first multi-wavelength space-based observatory, has detected bright sub-second X-ray bursts from a new and unique neutron star with ultrahigh magnetic field (magnetar), which can hel… [+3132 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "YouTuber MKBHD rates 2023 smartphones: Unexpected ‘Best Phone Of The Year’ pick - Hindustan Times",
            "description": "Marques Brownlee has unveiled his Mobile Awards of the Year. Check the winners here.",
            "url": "https://www.hindustantimes.com/technology/youtuber-mkbhd-rates-2023-smartphones-iphone-15-pro-max-samsung-s23-ultra-not-best-phone-google-pixel-8-is-101703150242530.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/IMG_0483_1703151381590_1703151396594.jpeg",
            "publishedAt": "2023-12-21T11:25:42Z",
            "content": "Renowned tech YouTuber Marques Keith Brownlee, also known as MKBHD, has recently disclosed his highly anticipated Mobile Awards of the Year, showcasing top-performing smartphones launched in 2023. Br… [+2616 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "US Calls For Pressure On Hamas To Surrender | 137 IDF Soldiers Killed In Gaza | France Warns Israel - CRUX",
            "description": "The Israeli army announced the death of three more soldiers who were killed fighting Hamas in northern Gaza on December 20. The list included a 19-year-old s...",
            "url": "https://www.youtube.com/watch?v=teABFSt1Apk",
            "urlToImage": "https://i.ytimg.com/vi/teABFSt1Apk/maxresdefault.jpg",
            "publishedAt": "2023-12-21T11:05:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Parliament Session LIVE: 144 MPs suspended from Lok Sabha - Hindustan Times",
            "description": "Parliament Winter Session Live: The Centre will move the three new criminal code bills in the Rajya Sabha today.",
            "url": "https://www.hindustantimes.com/india-news/parliament-winter-session-live-updates-lok-sabha-rajya-sabha-latest-news-today-21-december-2023-101703125474380.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/ANI-20231221134-0_1703152312169_1703152324975.jpg",
            "publishedAt": "2023-12-21T10:35:07Z",
            "content": "Parliament Winter Session Live: The Lok Sabha on Thursday cleared the bill to regulate the appointment of top election officers in the Lok Sabha. The Chief Election Commissioner and Other Election Co… [+14865 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Big Change In Parliament Security After Breach: CISF Replaces Delhi Police - NDTV",
            "description": "Access to the Parliament complex - a particularly high-profile issue after last week's security breach - will now be guarded by the Central Industrial Security Force, or CISF, the government has said.",
            "url": "https://www.ndtv.com/india-news/central-force-cisf-to-handle-parliament-security-instead-of-delhi-police-after-breach-4714966",
            "urlToImage": "https://c.ndtvimg.com/2023-12/mbnchnf_parliament-breach-pti_625x300_14_December_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
            "publishedAt": "2023-12-21T10:31:00Z",
            "content": "Security for the new Parliament complex's exterior will be split between the CISF and Delhi Police.\r\nNew Delhi: Access to the Parliament - a high-profile issue after last week's security breach - wil… [+2915 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX fires up Starship engines in major test of Mars-bound rocket - The Independent",
            "description": "SpaceX tested the engines of its Starship rocket on Wednesday 20 December in what was seen as a major test of the spaceship's abilities.The craft was tested ...",
            "url": "https://www.youtube.com/watch?v=GrmhItk4TOk",
            "urlToImage": "https://i.ytimg.com/vi/GrmhItk4TOk/maxresdefault.jpg",
            "publishedAt": "2023-12-21T09:56:22Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "LS suspends 3 more MPs; Kharge accuses PM Modi of ‘violation of privilege’ - Hindustan Times",
            "description": "The action comes hours after the INDIA bloc marched from the Parliament to Vijay Chowk against the government. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/om-birla-suspends-2-more-mps-india-takes-batting-without-fielders-jibe-101703152283784.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/ANI-20231221134-0_1703152392554_1703152400770.jpg",
            "publishedAt": "2023-12-21T09:52:30Z",
            "content": "New Delhi: Lok Sabha Speaker Om Birla suspended three more Opposition MPs over \"unruly behaviour\" on Thursday, taking the total number of suspensions to 146. The action comes hours after the INDIA bl… [+3075 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "Sportstar",
            "title": "India vs Australia LIVE Score, Women's Test Day 1: AUS 198/9; Deepti ends Jonassen's resistance - Sportstar",
            "description": null,
            "url": "https://sportstar.thehindu.com/cricket/india-vs-australia-live-score-womens-test-ind-aus-match-day-1-streaming-updates-highlights/article67660669.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-21T09:44:17Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Mid-day"
            },
            "author": null,
            "title": "Vita Keto Fuel Gummies Legitimate Beware?? Honest Responses of Vita Keto Fuel Gummies Users Side! - mid-day.com",
            "description": "Vita keto fuel gummies are the chewable soft candies designed using a powerful combination of natural substances and the principles of the ketosis process.",
            "url": "https://www.mid-day.com/lifestyle/infotainment/article/vita-keto-fuel-gummies-legitimate-beware-honest-responses-of-vita-keto-fuel--23326007",
            "urlToImage": "https://images.mid-day.com/images/images/2023/dec/vita-keto-fuel2112_d.jpg",
            "publishedAt": "2023-12-21T08:21:00Z",
            "content": "Vita keto fuel gummies are the chewable soft candies designed using a powerful combination of natural substances and the principles of the ketosis process. \r\nLead a Healthier, Active with Slim-Fit Bo… [+17283 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Animal box office collection day 20: Ranbir Kapoor film dips to ₹5 cr - Hindustan Times",
            "description": "Animal box office collection day 20: The Sandeep Reddy Vanga film stands at ₹528 crore in India. Beginning Thursday, it faces competition with Dunki. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/animal-box-office-collection-day-20-ranbir-kapoor-film-dips-to-rs-5-crore-as-it-wraps-up-theatrical-run-101703139078730.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/animal__1703141027822_1703141028099.jpg",
            "publishedAt": "2023-12-21T07:04:11Z",
            "content": "Animal box office collection: The Ranbir Kapoor film had been experiencing a dip in numbers ever since it entered its third week. The Sandeep Reddy Vanga film fell down further on Wednesday with coll… [+2342 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "DMK minister K Ponmudy gets 3 yrs in prison in disproportionate assets case - Hindustan Times",
            "description": "The court also imposed a fine of ₹50 lakhs each on Ponmudy and his wife. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/madras-hc-sentences-dmk-minister-k-ponmudy-to-3-yrs-in-prison-in-disproportionate-assets-case-101703136594529.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/K_Ponmudy__1703136911897_1703136912094.jpg",
            "publishedAt": "2023-12-21T05:36:10Z",
            "content": "The Madras High Court on Thursday sentenced Tamil Nadu states higher education minister K Ponmudy to 3 years of simple imprisonment in a 1.75-crore disproportionate assets case, ANI reported.\r\nThe ca… [+2055 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Motoroctane.com"
            },
            "author": "Swaraj Acharekar",
            "title": "How did the Tata Harrier/Safari score 5-star in BNCAP? » MotorOctane - MotorOctane",
            "description": "Tata Harrier/Safari have once again proved their safety by scoring a perfect 5-star in the BNCAP test, so how did they achieve it?",
            "url": "https://motoroctane.com/news/266177-how-did-the-tata-harrier-safari-score-5-star-in-bncap",
            "urlToImage": "https://motoroctane.com/wp-content/uploads/2023/12/5-star-again-how.jpg",
            "publishedAt": "2023-12-21T05:11:10Z",
            "content": "The Tata Harrier and Safari were often ridiculed as they were not being tested by the brand. However, now the brand has silenced the critics by scoring 5 stars two times in less than two months. The … [+1846 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Entertainment Desk",
            "title": "Salaar vs Dunki advance box office: Prabhas’ action-thriller increases lead over Shah Rukh Khan’s comedy drama - The Indian Express",
            "description": "Salaar vs Dunki advance box office: Prabhas' action-thriller is dominating the mass belts and single screens, but Shah Rukh Khan's comedy-drama is the first choice in the north.",
            "url": "https://indianexpress.com/article/entertainment/bollywood/salaar-vs-dunki-advance-box-office-prabhas-action-thriller-increases-lead-over-shah-rukh-khans-comedy-drama-9076966/",
            "urlToImage": "https://images.indianexpress.com/2023/12/dunki-vs-salaar.jpg",
            "publishedAt": "2023-12-21T04:01:17Z",
            "content": "Shah Rukh Khan-starrer Dunki was finally released in theatres on December 21. According to industry tracker Sacnilk, Dunki minted Rs 15.41 crore in advance sales, having sold over two lakh tickets at… [+1655 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Samsung teases Galaxy AI, Unpacked event likely to take place on January 18 - The Indian Express",
            "description": "At the Galaxy Unpacked 2024, Samsung is likely to announce the upcoming Galaxy S24 series of smartphones.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/samsung-galaxy-s24-unpacked-ai-event-jan-18-9076992/",
            "urlToImage": "https://images.indianexpress.com/2023/12/galaxy-unpacked-2024.jpg",
            "publishedAt": "2023-12-21T03:52:53Z",
            "content": "Samsungs Galaxy S24 series of smartphones are arriving with a host of generative AI features. According to Evan Blass, a prominent smartphone leaker, the South Korean tech giant will host the 2024 ed… [+1557 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Sonia Gandhi, Kharge invited to Ram Temple inauguration, may not attend - Hindustan Times",
            "description": "Ram Temple inauguration: Former PMs Manmohan Singh, HD Deve Gowda have been invited to the grand event scheduled on January 22. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/sonia-gandhi-mallikarjun-kharge-invited-to-ram-temple-inauguration-may-not-attend-101703129191711.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/ANI-20231220127-0_1703129397618_1703129461679.jpg",
            "publishedAt": "2023-12-21T03:33:33Z",
            "content": "Congress president Mallikarjun Kharge, former president Sonia Gandhi and Lok Sabha leader Adhir Ranjan Chowdhury have been invited to the consecration ceremony of the Ram Temple in Ayodhya to be held… [+2226 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "How Red Sea attacks could affect the seaborne transport of oil, gas cargoes - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/news/international/how-red-sea-attacks-could-affect-the-seaborne-transport-of-oil-gas-cargoes/article67660687.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-21T03:00:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "\"To Replace Hardik Pandya...\": GT Coach Ashish Nehra Breaks Silence On 'Difficult' Exit Of Star - NDTV Sports",
            "description": "The former India pacer said the franchise will back Shubman Gill irrespective of the results in the next edition of the IPL.",
            "url": "http://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://c.ndtvimg.com/2023-12/gf7u4kkg_hardik-pandya-and-ashish-nehra-bcci_625x300_20_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-12-21T02:56:43Z",
            "content": "Gujarat Titans head coach Ashish Nehra admitted that it will be tough to replace a multi-faceted player like Hardik Pandya but banked on Shubman Gill to shoulder the responsibility of leading the sid… [+3082 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Cricket Times"
            },
            "author": "Akshat Gaur",
            "title": "SA vs IND, 3rd ODI: Match Prediction, Dream11 Team, Fantasy Tips & Pitch Report | South Africa vs India - Cricket Times",
            "description": "South Africa vs India Dream11 Team for today's match - December 21, 11:00 am GMT | India tour of South Africa 2023-24. The Boland Park in Paarl will host the contest.",
            "url": "https://crickettimes.com/2023/12/sa-vs-ind-3rd-odi-match-prediction-dream11-team-fantasy-tips-pitch-report-south-africa-vs-india/",
            "urlToImage": "https://crickettimes.com/wp-content/uploads/2023/12/SA-vs-IND-Dream11-Prediction-3rd-ODI.webp",
            "publishedAt": "2023-12-21T02:49:04Z",
            "content": "In a thrilling culmination to the three-match One Day International (ODI) series, South Africa are gearing up to face India in the decisive third ODI at Boland Park in Paarl on Thursday, December 21.… [+2420 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Kejriwal skips ED summons for Vipassana: 10 things you need to know about the meditation practice - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/explained/kejriwal-ed-summons-vipassana-meditation-9076604/",
            "urlToImage": null,
            "publishedAt": "2023-12-21T02:30:33Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "New covid variant JN.1: India logs 21 cases; Know mask guidelines, other details | 10 updates | Mint - Mint",
            "description": "A 41-year-old has tested positive for new Covid-19 sub-variant JN.1 in Sindhudurg district of Maharashtra.The Karnataka government has issued an advisory asking people above 60 years to wear masks",
            "url": "https://www.livemint.com/news/india/new-covid-variant-jn-1-india-logs-21-cases-in-karnataka-maharashtra-kerala-rajasthan-gujarat-11703121504491.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/21/1600x900/Covid_variant_1703124483029_1703124483349.jpg",
            "publishedAt": "2023-12-21T02:11:25Z",
            "content": "With the reports of the arrival of the JN.1 Covid variant in India, 2669 active cases were reported in 24 hours on TThursday. According to the Union Health Ministry, an uptick in Covid cases has been… [+4469 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "SI Reporter",
            "title": "Stock Market LIVE: Profit-taking halts global rally; Dow, Nasdaq dip 1.5% - Business Standard",
            "description": "Closing Bell on Thursday December 21: In the broader markets, the BSE MidCap and SmallCap indices outpaced frontline indices as they climbed 1.6 per cent and 1.69 per cent, respectively",
            "url": "https://www.business-standard.com/markets/news/stock-market-live-dec-21-nse-bse-sensex-nifty-oil-dow-market-fall-ipos-inox-india-123122100077_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-03/27/full/1679902828-7872.jpg",
            "publishedAt": "2023-12-21T01:46:15Z",
            "content": "We expect consolidation in the index now; however there will be no shortage of trading opportunities on the stock-specific front.Participants should align their trades accordingly and prefer sectors,… [+261 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "INOX India IPO listing date today. GMP, experts predict strong debut of shares | Mint - Mint",
            "description": "INOX India IPO listing: Shares of company may list in four digits, signals grey market and stock market experts",
            "url": "https://www.livemint.com/market/ipo/inox-india-ipo-listing-date-today-gmp-experts-predict-strong-debut-of-shares-11703121935808.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/21/1600x900/INOX_India_IPO_GMP_listing_date_price_1703122008265_1703122023457.JPG",
            "publishedAt": "2023-12-21T01:37:28Z",
            "content": "INOX India IPO: Listing date of initial public offering (IPO) of INOX India Limited has been fixed on 21st December 2023 i.e. today. As per the information available on BSE website, INOX India share … [+4433 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Bigg Boss Telugu season-7 winner Pallavi Prashanth for disturbing peace - Hindustan Times",
            "description": "A case has been registered against Pallavi Prashanth and his fans for unlawful assembly and vandalism outside Annapurna Studios post Bigg Boss Telugu 7 finale.",
            "url": "https://www.hindustantimes.com/entertainment/tv/bigg-boss-telugu-7-winner-pallavi-prashanth-arrested-after-his-fans-vandalised-amardeeps-car-post-finale-101703119801594.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/pallavi_prashanth_1703121132289_1703121138958.jpg",
            "publishedAt": "2023-12-21T01:23:12Z",
            "content": "Bigg Boss Telugu season-7 winner Pallavi Prashanth was arrested in Hyderabad on Wednesday for allegedly disturbing peace near the Annapurna Studios after the show finale, ANI reported. According to t… [+2229 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Donald Trump disqualified from Colorado's presidential primary ballot | What it means for 2024 US elections? | Mint - Mint",
            "description": "The Colorado Supreme Court barred former US President Donald Trump from appearing on the state's ballot because of his actions leading up to January 6, 2021 riots. What does it mean for Trump? Will it have impact on US elections next year?",
            "url": "https://www.livemint.com/news/world/donald-trump-disqualified-from-colorado-presidential-primary-ballot-what-it-means-2024-us-elections-11703093376172.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/US-POLITICS-VOTE-TRUMP-28_1703096501378_1703096537941.jpg",
            "publishedAt": "2023-12-21T00:35:37Z",
            "content": "Donald Trump, the former US President and Republican frontrunner for the US elections, was disqualified from Colorado's presidential primary ballot on Tuesday. In an unprecedented ruling, the Colorad… [+4777 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "'Remember who mimicked in Lok Sabha...': Congress lashes out at PM Modi amid Jagdeep Dhankhar mimicry row | Mint - Mint",
            "description": "Congress leader Jairam Ramesh accused the government of trying to divert attention from the suspension of 142 MPs by raising the issue of 'mimicry'. He also highlighted videos where PM Modi can be seen hitting out at senior Congress leaders.",
            "url": "https://www.livemint.com/politics/news/remember-who-mimicked-in-lok-sabha-congress-lashes-out-at-pm-modi-amid-jagdeep-dhankhar-mimicry-row-11703064394629.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/21/1600x900/ANI-20231220017-0_1703117173703_1703117286024.jpg",
            "publishedAt": "2023-12-21T00:09:15Z",
            "content": "Congress leaders lashed out Prime Minister Narendra Modi on Wednesday amid the escalating Jagdeep Dhankhar mimicry row. The development came even as as BJP leaders and senior officials criticised Tri… [+2227 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Dunki box office collection Day 1 early estimates: Shah Rukh Khan starrer eyeing Rs 30 crore debut - IndiaTimes",
            "description": "Shah Rukh Khan's highly anticipated film 'Dunki', directed by Rajkumar Hirani, has finally been released worldwide. The movie has received mixed revie",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/box-office/dunki-box-office-collection-day-1-early-estimates-shah-rukh-khan-starrer-eyeing-rs-30-crore-debut/articleshow/106166526.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106166518,width-1070,height-580,imgsize-91962,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-21T00:00:46Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Israel-Hamas war updates from Dec 20: Hamas government says Gaza war death toll hits 20,000 - WION",
            "description": "This is WIONs live blog for the 75th day of the ongoing Israel-Hamas war. So far, close to 20,000 Palestinians have been killed in the conflict, with 70 per cent of them women and children, according to the Hamas-run health ministry. On the Israeli side, 1,20…",
            "url": "https://www.wionews.com/world/israel-hamas-war-live-hamas-chief-to-visit-egypt-for-gaza-ceasefire-talks-nato-eu-condemn-houthi-attacks-in-red-sea-671528",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/20/400465-israel-hamas-war-2.jpg",
            "publishedAt": "2023-12-20T19:15:28Z",
            "content": "United States President Joe Biden, while political event said that Israel is dealing with unique challenges amid its ongoing war but must distinguish between Hamas and Palestinians. \r\nIsrael had to w… [+897 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Chronicle"
            },
            "author": "DC Correspondent",
            "title": "BRS' Gluttony Plunged State Into Financial Mess: CM Revanth Reddy - Deccan Chronicle",
            "description": "BRS' Gluttony Plunged State Into Financial Mess: CM Revanth Reddy",
            "url": "https://www.deccanchronicle.com/nation/current-affairs/211223/brs-gluttony-plunged-state-into-financial-mess-cm-revanth-reddy.html",
            "urlToImage": "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-mu3a6s3c3udrchgh5oa8c0cgh7-20231220235218.Medi.jpeg",
            "publishedAt": "2023-12-20T18:31:50Z",
            "content": "Chief Minister A. Revanth Reddy. (Assembly TV Grab)"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Gopika Gopakumar, Neil Borate",
            "title": "RBI’s AIF rules impractical, to shift industry dynamics, say investors | Mint - Mint",
            "description": "Investors fear  ₹40,000 crore impact as RBI restricts banks from AIFs with debtor fund links",
            "url": "https://www.livemint.com/industry/banking/rbis-aif-rules-impractical-to-shift-industry-dynamics-say-investors-11703095147204.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/rbi-kdPG--621x414LiveMint_1703095337454_1703095337633.jpg",
            "publishedAt": "2023-12-20T18:04:07Z",
            "content": "MUMBAI\r\n : \r\nThe Reserve Bank of Indias new rule barring banks and non-banks from investing in alternative investment funds (AIFs) having downstream investments in debtor funds is impractical, riskin… [+3194 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Zeeshan Khan",
            "title": "PUBG Mobile solo vs squad guide (December 2023) - Sportskeeda",
            "description": "The 1 vs. 4 encounter, in which a single player faces off against a whole squad, is one of the most difficult scenarios in PUBG Mobile.",
            "url": "https://www.sportskeeda.com/esports/pubg-mobile-solo-vs-squad-guide-december-2023",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/a926e-17028765225357-1920.jpg",
            "publishedAt": "2023-12-20T16:09:00Z",
            "content": "The 1 vs. 4 encounter, in which a single player faces off against a whole squad, is one of the most difficult scenarios in PUBG Mobile. This mode helps you develop and refine the necessary skills to … [+2925 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Correspondent",
            "title": "Sports Ministry confirms Arjuna award for Shami; Khel Ratna to Satwik and Chirag - Hindustan Times",
            "description": "The awards will be handed by President Droupadi Murmu at the Rashtrapati Bhavan on January 9.",
            "url": "https://www.hindustantimes.com/sports/others/arjuna-award-for-mohammed-shami-khel-ratna-to-satwik-rankireddy-chirag-shetty-full-list-sports-ministry-confirms-101703083931102.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/MixCollage-20-Dec-2023-07-47-PM-4785_1703084455509_1703084460908.jpg",
            "publishedAt": "2023-12-20T16:04:44Z",
            "content": "India's dynamic badminton duo of Chirag Shetty and Satwiksairaj Rankireddy will receive the Major Dhyan Chand Khel Ratna Award, the highest sporting honour in the country for athletes, the sports min… [+2810 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Herzindagi.com"
            },
            "author": "Tanya Malik",
            "title": "Diet For Menopausal Women: Health Expert Shares List Of Foods Women Should Add To Their Daily Diet - HerZindagi English",
            "description": "If you are undergoing menopause and struggling with its symptoms like hot flashes and weight gain, start working on your diet. Adding certain foods to your diet will help you overcome menopause challenges.",
            "url": "https://www.herzindagi.com/diet-nutrition/menopausal-women-diet-tips-foods-protein-fibre-iron-calcium-article-257762",
            "urlToImage": "https://images.herzindagi.info/image/2023/Dec/diet-for-menopausal-women-foods-protein.jpg",
            "publishedAt": "2023-12-20T14:29:19Z",
            "content": "Menopause continues to be a hush-hush subject and no wonder most women struggle to get through this natural process even today. As we age, our body approaches the end of the reproductive years, and w… [+3117 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Newsdrum.in"
            },
            "author": "NewsDrum Desk",
            "title": "Childhood trauma linked with increased risk of chronic pain, related disability in adulthood - NewsDrum",
            "description": "Adverse childhood experiences, such as physical, sexual or emotional abuse or neglect, increases the risk of chronic pain and related disability in adulthood, ...",
            "url": "https://www.newsdrum.in/national/childhood-trauma-linked-with-increased-risk-of-chronic-pain-related-disability-in-adulthood-2033840",
            "urlToImage": "https://img-cdn.thepublive.com/fit-in/1200x675/",
            "publishedAt": "2023-12-20T13:00:35Z",
            "content": "New Delhi, Dec 20 (PTI) Adverse childhood experiences, such as physical, sexual or emotional abuse or neglect, increases the risk of chronic pain and related disability in adulthood, new research has… [+2291 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Free Press Journal"
            },
            "author": "IANS",
            "title": "Beetroot Juice Supplementation Improves Blood Pressure In COPD Patients - Free Press Journal",
            "description": "COPD, a serious lung condition affecting around 400 million people worldwide, includes chronic bronchitis and emphysema, causes breathing difficulties and severely limits people's capacity for physical activity.",
            "url": "https://www.freepressjournal.in/health/beetroot-juice-supplementation-improves-blood-pressure-in-copd-patients",
            "urlToImage": "https://media.assettype.com/freepressjournal/2023-12/d345036a-671c-4f03-8c1c-ae9b0bb3650e/Healthy_beetroot_juice.jpg",
            "publishedAt": "2023-12-20T12:52:04Z",
            "content": "A 12-week course of daily beetroot juice supplement for people with chronic obstructive pulmonary disease (COPD) lowered blood pressure and improved how far patients could walk in six minutes, accord… [+2817 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Tech Desk",
            "title": "Alert! New Sunspots Threaten M-Class Solar Slares This Week - Times Now",
            "description": "A volatile sunspot with a complex magnetic field now facing Earth threatens strong M-class solar storms this week. These could cause radio blackouts and radiation storms impacting satellites, air travel, and astronauts. Expert solar monitoring and early warni…",
            "url": "https://www.timesnownews.com/technology-science/alert-new-sunspots-threaten-m-class-solar-slares-this-week-article-106146706",
            "urlToImage": "https://static.tnn.in/thumb/msid-106146694,thumbsize-96268,width-1280,height-720,resizemode-75/106146694.jpg",
            "publishedAt": "2023-12-20T07:15:00Z",
            "content": "Akshay Kumar Celebrates 16 Years Of Welcome, Drops BTS Clip Of Sanjay Dutt Joining The Film Franchise: What A Lovely..."
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
          }
        ]
      },
      {
        "health": [
          {
            "source": {
              "id": null,
              "name": "Gbnews.com"
            },
            "author": "GB News",
            "title": "A 'delicious' and 'immune-boosting' fruit can slash your risk of getting the flu this winter - GB News",
            "description": null,
            "url": "https://www.gbnews.com/health/flu-colds-cure-how-to-prevent-persimmons",
            "urlToImage": null,
            "publishedAt": "2023-12-21T11:33:44Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Technology Networks"
            },
            "author": "Technology Networks",
            "title": "Pesticides Should Be Tested For Parkinson's Link, Say Researchers - Technology Networks",
            "description": "There is increasing evidence that pesticides play a role in the development of Parkinson’s disease. But these substances are not sufficiently tested for their possible role in this disease.",
            "url": "https://www.technologynetworks.com/neuroscience/news/pesticides-should-be-tested-for-parkinsons-link-say-researchers-382303",
            "urlToImage": "https://assets.technologynetworks.com/production/dynamic/images/content/382303/pesticides-should-be-tested-for-parkinsons-link-say-researchers-382303-640x360.jpg?cb=20231221",
            "publishedAt": "2023-12-21T10:37:05Z",
            "content": "There is increasing evidence that pesticides play a role in the development of Parkinsons disease. But these substances are not sufficiently tested for their possible role in this disease. Researcher… [+3274 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Desk",
            "title": "6 Vegetarian Foods to Help Treat Your Migraine - WION",
            "description": "6 Vegetarian Foods to Help Treat Your Migraine",
            "url": "https://www.wionews.com/web-stories/trending/6-vegetarian-foods-to-help-treat-your-migraine-1703149211175",
            "urlToImage": null,
            "publishedAt": "2023-12-21T09:11:02Z",
            "content": "Flax seeds are tiny seeds that are rich in fibre, omega-3 fatty acids, and other plant compounds that help lower cholesterol and balance blood sugar, which in turn helps prevent headaches."
          },
          {
            "source": {
              "id": null,
              "name": "Mid-day"
            },
            "author": null,
            "title": "Vita Keto Fuel Gummies Legitimate Beware?? Honest Responses of Vita Keto Fuel Gummies Users Side! - mid-day.com",
            "description": "Vita keto fuel gummies are the chewable soft candies designed using a powerful combination of natural substances and the principles of the ketosis process.",
            "url": "https://www.mid-day.com/lifestyle/infotainment/article/vita-keto-fuel-gummies-legitimate-beware-honest-responses-of-vita-keto-fuel--23326007",
            "urlToImage": "https://images.mid-day.com/images/images/2023/dec/vita-keto-fuel2112_d.jpg",
            "publishedAt": "2023-12-21T08:21:00Z",
            "content": "Vita keto fuel gummies are the chewable soft candies designed using a powerful combination of natural substances and the principles of the ketosis process. \r\nLead a Healthier, Active with Slim-Fit Bo… [+17283 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "News18",
            "title": "5 Side Effects of Using Room Heater During Winter - News18",
            "description": "Room heaters offer respite from the winter chill. Here are five side effects of using a room heater during winter.",
            "url": "https://www.news18.com/web-stories/lifestyle/5-side-effects-of-using-room-heater-during-winter-1381083/",
            "urlToImage": "https://images.news18.com/webstories/2023/12/cropped-Electric-Handy-Room-Heater-4.jpg",
            "publishedAt": "2023-12-21T08:13:22Z",
            "content": "Room heaters can lead to potential fire accidents. Make sure that you dont cover the room heater outlet. It will catch fire instantly. Do not put any polyester clothes near the room heater."
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "ANI",
            "title": "Exposure to household chemicals may reduce odds of getting pregnant: Study - Hindustan Times",
            "description": "The study shows that exposure to phthalates is associated with a lower likelihood of getting pregnant but not to pregnancy loss. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/exposure-to-household-chemicals-may-reduce-odds-of-getting-pregnant-study-101703144392467.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/pregnancy_nausea_1702707314494_1703144483103.jpg",
            "publishedAt": "2023-12-21T07:44:09Z",
            "content": "According to research by a University of Massachusetts Amherst environmental and reproductive epidemiologist, exposure to phthalates, a collection of plasticizing and solvent chemicals found in many … [+4507 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "Steroid creams may affect bone health: Study - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/steroid-creams-may-affect-bone-health-study-3946395",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/f187a581f8c12e0c06939cf5c182b6c5_w_800_h_450.jpg",
            "publishedAt": "2023-12-21T07:17:58Z",
            "content": "Taipei, Dec 21 (IANS) Higher doses of topical corticosteroids, which are commonly used to treat inflammatory skin conditions, can elevate risks of osteoporosis and bone fractures associated with oste… [+1620 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Daijiworld.com"
            },
            "author": null,
            "title": "Why high blood sugar makes lung infections worse - Daijiworld.com",
            "description": "Jerusalem, Dec 21 (IANS): In people with diabetes, high levels of blood sugar disrupts the function of key cell subsets in the lungs that regulate the immune response, increasing the risk of developing severe lung disease if infected with viruses such as infl…",
            "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1151308",
            "urlToImage": "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/HANNA_211223_LUNG.jpg",
            "publishedAt": "2023-12-21T06:25:39Z",
            "content": "Jerusalem, Dec 21 (IANS): In people with diabetes, high levels of blood sugar disrupts the function of key cell subsets in the lungs that regulate the immune response, increasing the risk of developi… [+2562 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Tapatrisha Das",
            "title": "The seven foundations of hormone balance - Hindustan Times",
            "description": "From liver detoxification to nourishment, here are the seven foundations of hormonal balance.",
            "url": "https://www.hindustantimes.com/photos/lifestyle/the-seven-foundations-of-hormone-balance-101703139281735.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/h0hgfd_1703139295222_1703139319488.jpg",
            "publishedAt": "2023-12-21T06:19:46Z",
            "content": "From liver detoxification to nourishment, here are the seven foundations of hormonal balance. ...read more\r\nFrom liver detoxification to nourishment, here are the seven foundations of hormonal balanc… [+1072 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "CDC calls for increase in respiratory vaccines - FOX 26 Houston",
            "description": "Dr. Danish Ali joins The Isiah Factor: Uncensored to share an important update from the CDC.Subscribe to FOX 26 Houston: https://www.youtube.com/myfoxhouston...",
            "url": "https://www.youtube.com/watch?v=bAnmZERc5B8",
            "urlToImage": "https://i.ytimg.com/vi/bAnmZERc5B8/maxresdefault.jpg",
            "publishedAt": "2023-12-21T05:39:02Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Is Spinach The Best Source Of Iron? Here Are 5 Foods With More Iron Than Spinach - NDTV",
            "description": "Looking for some iron sources? Here are 5 foods with more iron than spinach.",
            "url": "https://www.ndtv.com/health/is-spinach-the-best-source-of-iron-here-are-5-foods-with-more-iron-than-spinach-4714226",
            "urlToImage": "https://c.ndtvimg.com/2023-06/6j45vsi_chia-seeds_625x300_22_June_23.jpg",
            "publishedAt": "2023-12-21T05:19:44Z",
            "content": "Chia seeds are high in fibre, protein as well as iron.\r\nIron is a vital mineral that you require to produce haemoglobin, which helps red blood cells carry oxygen throughout the body. Iron also suppor… [+2195 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News-Medical.Net"
            },
            "author": null,
            "title": "JUNE Medical's Galaxy II® self-retaining surgical retractor receives MDR certification for its high quality and safety - News-Medical.Net",
            "description": "JUNE Medical is proud to announce that its Galaxy II® self-retaining surgical retractor has received Medical Device Regulation (MDR – Regulation (EU) 2017/745) certification from BSI Group for its use in the European Union.",
            "url": "https://www.news-medical.net/news/20231221/JUNE-Medicale28099s-Galaxy-IIc2ae-self-retaining-surgical-retractor-receives-MDR-certification-for-its-high-quality-and-safety.aspx",
            "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/147059167-620x480.jpg",
            "publishedAt": "2023-12-21T05:08:00Z",
            "content": "JUNE Medical is proud to announce that its Galaxy II® self-retaining surgical retractor has received Medical Device Regulation (MDR – Regulation (EU) 2017/745) certification from BSI Group for its us… [+2334 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "Heena Sharma",
            "title": "5 Health Benefits of Red Potatoes - WION",
            "description": "5 Health Benefits of Red Potatoes",
            "url": "https://www.wionews.com/web-stories/life-fun/5-health-benefits-of-red-potatoes-1703133675482",
            "urlToImage": null,
            "publishedAt": "2023-12-21T04:47:14Z",
            "content": "Red potatoes contain vitamins and minerals. They contain vitamin C, which is important for immune function and skin health, as well as potassium, which is crucial for maintaining proper heart and mus… [+12 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Cases of respiratory illnesses rise as families prepare to gather for the holidays - ABC11",
            "description": "It's the countdown to Christmas Day and families are celebrating in different ways.Story:  https://abc11.com/influenza-holiday-celebrations-family-flu-season...",
            "url": "https://www.youtube.com/watch?v=0etPSsvoVJE",
            "urlToImage": "https://i.ytimg.com/vi/0etPSsvoVJE/maxresdefault.jpg",
            "publishedAt": "2023-12-21T04:45:45Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "As respiratory viruses take a toll, stay clear of gatherings if sick, experts say - CBC News: The National",
            "description": "Respiratory virus outbreaks are taking their toll across Canada — especially in hospitals and emergency rooms, where there is a surge in patients and more st...",
            "url": "https://www.youtube.com/watch?v=TpxQLuqp0gE",
            "urlToImage": "https://i.ytimg.com/vi/TpxQLuqp0gE/maxresdefault.jpg",
            "publishedAt": "2023-12-21T03:29:44Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Education Diary"
            },
            "author": "iednewsdesk",
            "title": "Study Suggests Pain Scores and Age Can Identify Patients Less Likely to Use Opioids After Surgery - India Education Diary",
            "description": "Patients who are younger or who haven’t taken opioid pain medication before are more likely to not need any after many common surgeries, according to new research from the Perelman School of Medicine. Additionally, the study, published in Annals of S",
            "url": "https://indiaeducationdiary.in/study-suggests-pain-scores-and-age-can-identify-patients-less-likely-to-use-opioids-after-surgery/",
            "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2023/12/surgery_opioids.png",
            "publishedAt": "2023-12-21T03:24:07Z",
            "content": "Patients who are younger or who havent taken opioid pain medication before are more likely to not need any after many common surgeries, according to new research from the Perelman School of Medicine.… [+5286 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "Does Covid prefer the gut now? surging virus detections in wastewater prompt Scientific Debate - IndiaTimes",
            "description": "India News: Scientists are investigating whether the JN.1 variant of Covid-19 is targeting peoples' intestinal tracts. JN.1 is highly infectious and immune evasiv",
            "url": "https://timesofindia.indiatimes.com/india/covid-19-cases-jn-1-variant-ba-2-86-or-pirola-variant/articleshow/106167757.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106167876,width-1070,height-580,imgsize-1079996,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-21T02:59:37Z",
            "content": "Nita Ambani's diamond necklace to Isha Ambani's choker: Beautiful jewellery pieces owned by the Ambani ladies"
          },
          {
            "source": {
              "id": null,
              "name": "Mid-day"
            },
            "author": "Web Developer",
            "title": "Covid 19 causes first-of-its-kind vocal cord paralysis in US girl - mid-day.com",
            "description": "Covid 19 causes first-of-its-kind vocal cord paralysis in US girl, otherwise healthy, had symptoms of respiratory distress nine days after diagnosis with Covid",
            "url": "https://www.mid-day.com/lifestyle/health-and-fitness/article/covid-19-causes-first-of-its-kind-vocal-cord-paralysis-in-us-girl-23325974",
            "urlToImage": "https://images.mid-day.com/images/images/2023/dec/Covid-istock_d_d.jpg",
            "publishedAt": "2023-12-21T02:49:00Z",
            "content": "The patient, an otherwise healthy girl, was presented at the emergency department at Massachusetts General Hospital with symptoms of respiratory distress nine days after diagnosis with SARS-CoV-2 inf… [+4018 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TNN",
            "title": "IISc identifies coronavirus protein that stops immune response - Times of India",
            "description": "Mysteries surrounding the biology of coronavirus — SARS-CoV-2 or virus causing Covid-19 — persist despite extensive research in the past 3 years. IISc identifies coronavirus protein that stops immune response.",
            "url": "https://timesofindia.indiatimes.com/city/bengaluru/iisc-identifies-coronavirus-protein-that-stops-immune-response/articleshow/106168041.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-21T02:45:45Z",
            "content": "Nita Ambani's diamond necklace to Isha Ambani's choker: Beautiful jewellery pieces owned by the Ambani ladies"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Weight Loss in Winters: 6 Seasonal Snacks to Burn Belly Fat in Colder Months - India.com",
            "description": "Weight loss diet is inclusive for several veggies and fruits but some seasonal snacks can actually boost metabolism and help shed belly fat.",
            "url": "https://www.india.com/lifestyle/weight-loss-in-winters-6-seasonal-snacks-to-burn-belly-fat-in-colder-months-6601123/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/winter-snacks-for-weight-loss.jpg",
            "publishedAt": "2023-12-21T02:22:29Z",
            "content": "Weight loss diet is inclusive for several veggies and fruits but some seasonal snacks can actually boost metabolism and help shed belly fat. \r\nWeight Loss in Winters: 6 Seasonal Snacks to Burn Belly … [+2785 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Disproportionate COVID-19 vaccine access in CA impacting some ethnic groups, data shows - ABC7 News Bay Area",
            "description": "The new, fast-growing JN.1 COVID-19 variant continues to have health officials concerned nationally and locally. Yet, numbers are showing fewer people are ge...",
            "url": "https://www.youtube.com/watch?v=6a_HKw03_IU",
            "urlToImage": "https://i.ytimg.com/vi/6a_HKw03_IU/maxresdefault.jpg",
            "publishedAt": "2023-12-21T02:07:58Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "EurekAlert"
            },
            "author": null,
            "title": "Researchers uncover on/off switch for breast cancer metastasis - EurekAlert",
            "description": "<p>New research from Stanford and the Arc Institute could lead to a new and more effective immunotherapy and help clinicians better predict patient response to existing medicines.</p>",
            "url": "https://www.eurekalert.org/news-releases/1029685",
            "urlToImage": "https://www.eurekalert.org/images/EurekAlert-bluebg_Twitter_601X601.png",
            "publishedAt": "2023-12-21T02:01:30Z",
            "content": "Despite their promise, immunotherapies fail to treat many cancers, including over 80% of some of the most advanced breast cancers. And many of those patients who do respond still experience metastase… [+5811 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "What is premenstrual dysphoric disorder, and how is it different from PMS? - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/lifestyle/life-style/what-is-premenstrual-dysphoric-disorder-pmdd-pms-difference-symptoms-diagnosis-treatment-periods-9073951/",
            "urlToImage": null,
            "publishedAt": "2023-12-21T01:30:54Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "ScienceAlert"
            },
            "author": "Mike McRae",
            "title": "Baby Survives Incredibly Rare Pregnancy Outside of Mother's Uterus - ScienceAlert",
            "description": "Done with putting up with abdominal cramping for more than a week, a 37 year old woman from the French island of Réunion east of Madagascar visited a hospital emergency department, only to discover she was – in fact – pregnant.",
            "url": "https://www.sciencealert.com/baby-survives-incredibly-rare-pregnancy-outside-of-mothers-uterus",
            "urlToImage": "https://www.sciencealert.com/images/2023/12/abdominal_ectopic_pregnancy.jpg",
            "publishedAt": "2023-12-21T00:46:21Z",
            "content": "Done with putting up with abdominal cramping for more than a week, a 37 year old woman from the French island of Réunion east of Madagascar visited a hospital emergency department, only to discover s… [+3633 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Pharmaceutical Technology"
            },
            "author": "kgi-admin",
            "title": "PDS-01ADC by PDS Biotechnology for Penile Cancer: Likelihood of Approval - Pharmaceutical Technology",
            "description": "PDS-01ADC is under clinical development by PDS Biotechnology and currently in Phase II for Penile Cancer.",
            "url": "http://www.pharmaceutical-technology.com/uncategorized/pds-01adc-pds-biotechnology-penile-cancer-likelihood-of-approval/",
            "urlToImage": "",
            "publishedAt": "2023-12-21T00:45:42Z",
            "content": "PDS-01ADC is under clinical development by PDS Biotechnology and currently in Phase II for Penile Cancer. According to GlobalData, Phase II drugs for Penile Cancer does not have sufficient historical… [+2857 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Uclahealth.org"
            },
            "author": null,
            "title": "Dark circles can arise from health issues, lifestyle or genetics - UCLA Health Connect",
            "description": "What causes dark circles under the eyes? I have always had areas of darker skin under my eyes, but as I'm getting older, it has been getting more noticeable. Could it be something to do with sleep, or with my diet?",
            "url": "https://www.uclahealth.org/news/dark-circles-can-arise-health-issues-lifestyle-or-genetics",
            "urlToImage": null,
            "publishedAt": "2023-12-21T00:19:31Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Tulsi kadha for winter: Easy ways to prepare - Times of India - IndiaTimes",
            "description": "This article discusses the health benefits of Tulsi kadha, a special drink from Ayurveda made with Holy Basil. Tulsi kadha boosts immunity, promotes r",
            "url": "https://timesofindia.indiatimes.com/life-style/food-news/tulsi-kadha-for-winter-easy-ways-to-prepare/articleshow/106160192.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106160192,width-1070,height-580,imgsize-93130,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T22:30:00Z",
            "content": "How crystals help in healing, explains Wiccan and healer Rashme Oberoi"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "How often can I use a nasal decongestant? - Good Morning America",
            "description": "ABC News medical correspondent Dr. Darien Sutton answers your health questions and shares tips for safe snow shoveling.SUBSCRIBE to GMA's YouTube page: https...",
            "url": "https://www.youtube.com/watch?v=E5uxd-ch4zU",
            "urlToImage": "https://i.ytimg.com/vi/E5uxd-ch4zU/maxresdefault.jpg",
            "publishedAt": "2023-12-20T21:42:23Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Anuradha Mascarenhas",
            "title": "Pune: City hospital to check efficacy of ultra-short TB preventive therapy on people with HIV - The Indian Express",
            "description": "The study ‘One to Three’ will compare the treatment completion of daily dose of Rifapentine and Isoniazid for a month (1HP) to the weekly dose of Rifapentine and Isoniazid for three months (3HP) in persons living with HIV in Pune.",
            "url": "https://indianexpress.com/article/cities/pune/pune-city-hospital-to-check-efficacy-of-ultra-short-tb-preventive-therapy-on-people-with-hiv-9076784/",
            "urlToImage": "https://images.indianexpress.com/2023/12/opd-hospital.jpg",
            "publishedAt": "2023-12-20T20:43:10Z",
            "content": "A new jointly undertaken by Pune’s B J Government Medical College and Johns Hopkins University will assess the acceptability of an ultra-short TB preventive therapy in people living with HIV.The stud… [+2454 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yale.edu"
            },
            "author": null,
            "title": "Using molecular 'cookie cutters' to view membrane protein organization - Yale News",
            "description": "Protein organization is key to protein function — but difficult to uncover for membrane proteins. A new Yale-developed method overcomes the biggest challenges.",
            "url": "https://news.yale.edu/2023/12/20/using-molecular-cookie-cutters-view-membrane-protein-organization",
            "urlToImage": "https://news.yale.edu/sites/default/files/styles/opengraph_image/public/ynews-protein-organize-re.jpg?itok=5s1nsnNh",
            "publishedAt": "2023-12-20T20:21:32Z",
            "content": "The membrane that encases a biological cell is not simply a barrier; it is chock full of proteins involved in all sorts of critical biological functions. To really understand what membrane proteins a… [+5844 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WebMD"
            },
            "author": "Damian McNamara, MA",
            "title": "Ultra-Processed Food and Your Health: What to Know - WebMD",
            "description": "Figuring out why ultra-processed foods (UPFs) are linked to more chronic health conditions like heart disease and obesity remains an important puzzle for nutrition experts to figure out. When they do, the worst offenders could be taxed or regulated by the gov…",
            "url": "https://www.webmd.com/diet/news/20231220/ultra-processed-food-and-health-what-to-know",
            "urlToImage": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/blog_posts/heart-health/1800x1200_getty_rf_chips_and_soda.jpg",
            "publishedAt": "2023-12-20T17:17:33Z",
            "content": "Dec. 20, 2023 -- Figuring out why ultra-processed foods (UPFs) are linked to more chronic health conditions like heart disease and obesity remains an important puzzle for nutrition experts to figure … [+2254 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Targetedonc.com"
            },
            "author": "Sara A. Hurvitz, MD",
            "title": "Unanswered Questions in the HER2+ Breast Cancer Space - Targeted Oncology",
            "description": "Sara A. Hurvitz, MD, discusses some of the current important questions for the field of HER2-positive breast cancer now and highlights which of these unanswered questions she hopes are addressed soon.",
            "url": "https://www.targetedonc.com/view/unanswered-questions-in-the-her2-breast-cancer-space",
            "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/targetedonc/dca85b9f8d29ee88aedd13719495fb232047febd-345x207.png?fit=crop&auto=format",
            "publishedAt": "2023-12-20T17:06:46Z",
            "content": "Sara A. Hurvitz, MD, associate professor at the David Geffen School of Medicine at UCLA; medical director of the Jonsson Comprehensive Cancer Center Clinical Research Unit; co-director of the Santa M… [+2429 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ticker.tv"
            },
            "author": "Betty Davis",
            "title": "COVID-19 Lockdown Sparks New Interest in Gardening - TickerTV News",
            "description": "COVID-19 Lockdown Sparks New Interest in Gardening - TickerTV News",
            "url": "https://ticker.tv/news/big-banzai-pipeline-swell/365383/",
            "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_realistic_photo_of_women_using_smartphone_or_computer_on_69713d4e-dacf-4f87-81b3-6fb65ea86665.png",
            "publishedAt": "2023-12-20T17:01:37Z",
            "content": "Summary: The COVID-19 pandemic and subsequent lockdown has led to a surge in interest in gardening as people seek hobbies that allow them to connect with nature, relieve stress, and become more self-… [+2305 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/ians/",
            "title": "New Vaccine to Reduce Bad Cholesterol? Here Is What a New Study Says - India.com",
            "description": "According to a recent study, a new vaccine may help lower LDL levels. Read on to know more about the findings of the study.",
            "url": "https://www.india.com/health/new-vaccine-to-reduce-bad-cholesterol-here-is-what-a-new-study-says-6600896/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/testing-cholesterol.jpg",
            "publishedAt": "2023-12-20T16:40:33Z",
            "content": "According to a recent study, a new vaccine may help lower LDL levels. Read on to know more about the findings of the study.\r\nResearchers have developed a new vaccine that could be a game-changer, pro… [+2904 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Timesofindia.com"
            },
            "author": "Rishabh Raj",
            "title": "8 healthy reasons to eat Gajak regularly during winter - Recipes",
            "description": "Tap next to learn what makes it a must-have during this season.",
            "url": "https://recipes.timesofindia.com/web-stories/8-healthy-reasons-to-eat-gajak-regularly-during-winter/photostory/106156750.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106156763,imgsize-103210,width-900,height-1200,resizemode-6/106156763.jpg",
            "publishedAt": "2023-12-20T16:30:00Z",
            "content": "One winter sweet snack that most of us enjoy is Gajak. It is a mildly sweet, crunchy snack made with roasted sesame seeds, jaggery, and nuts. Tap next to learn what makes it a must-have during this s… [+5 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Down To Earth Magazine"
            },
            "author": null,
            "title": "COVID vaccines pillar COVAX to wind down by year-end, left with billions unspent - Down To Earth Magazine",
            "description": "Vaccine delivery to shift to regular programmes",
            "url": "https://www.downtoearth.org.in/news/world/covid-vaccines-pillar-covax-to-wind-down-by-year-end-left-with-billions-unspent-93481",
            "urlToImage": "https://cdn.downtoearth.org.in/library/large/2023-12-20/0.85798400_1703067610_istock-1325017357.jpg",
            "publishedAt": "2023-12-20T15:50:47Z",
            "content": "A worldwide initiative launched in April 2020 to ensure equitable access to COVID-19 vaccines is coming to an end. COVAX mechanism, which was launched to make the vaccines available equitably and, mo… [+4345 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dovepress.com"
            },
            "author": "Dove Press",
            "title": "Sleep, comorbid depressive, and anxiety symptoms | NSS - Dove Medical Press",
            "description": "This study aims to explore the relationship between sleep duration, insomnia and comorbid depressive and anxiety symptoms.",
            "url": "https://www.dovepress.com/sleep-duration-and-insomnia-with-comorbid-depression-and-anxiety-sympt-peer-reviewed-fulltext-article-NSS",
            "urlToImage": "https://www.dovepress.com/assets/img/addon/og_logo.png",
            "publishedAt": "2023-12-20T15:25:59Z",
            "content": "Introduction\r\nSleep plays an important role in maintaining body functions such as consciousness, cognitive function, maintenance of biological rhythms, repair functions and stress relief.1 Poor sleep… [+38192 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "HospiMedica"
            },
            "author": "HospiMedica International",
            "title": "Heart Vest Identifies Individuals at High Risk of Sudden Cardiac Death - HospiMedica",
            "description": "A reusable vest that can map the heart’s electrical activity in fine detail could be used to better identify individuals at a high risk of sudden cardiac death.",
            "url": "https://www.hospimedica.com/critical-care/articles/294799660/heart-vest-identifies-individuals-at-high-risk-of-sudden-cardiac-death.html",
            "urlToImage": "https://www.hospimedica.com/images/stories/articles/article_images/2023-12-20/SDD-294799660.jpg",
            "publishedAt": "2023-12-20T14:37:07Z",
            "content": "Electrical signals trigger the heart to contract, regulating the heartbeat. Any problems with these signals create heart rhythm disorders, which are experienced by millions of people and can lead to … [+2667 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Timesofindia.com"
            },
            "author": "Kritika Pushkarna",
            "title": "8 healthiest nuts one can consume every day - Recipes",
            "description": "From heart-healthy fats to essential vitamins and minerals, incorporating a variety of nuts into your daily diet can be a smart and tasty choice. Take a look at the healthiest nuts that you can enjoy every day for a boost of nutrition.",
            "url": "https://recipes.timesofindia.com/web-stories/8-healthiest-nuts-one-can-consume-every-day/photostory/106156981.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106157004,imgsize-114072,width-900,height-1200,resizemode-6/106157004.jpg",
            "publishedAt": "2023-12-20T14:30:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Herzindagi.com"
            },
            "author": "Tanya Malik",
            "title": "Diet For Menopausal Women: Health Expert Shares List Of Foods Women Should Add To Their Daily Diet - HerZindagi English",
            "description": "If you are undergoing menopause and struggling with its symptoms like hot flashes and weight gain, start working on your diet. Adding certain foods to your diet will help you overcome menopause challenges.",
            "url": "https://www.herzindagi.com/diet-nutrition/menopausal-women-diet-tips-foods-protein-fibre-iron-calcium-article-257762",
            "urlToImage": "https://images.herzindagi.info/image/2023/Dec/diet-for-menopausal-women-foods-protein.jpg",
            "publishedAt": "2023-12-20T14:29:19Z",
            "content": "Menopause continues to be a hush-hush subject and no wonder most women struggle to get through this natural process even today. As we age, our body approaches the end of the reproductive years, and w… [+3117 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "Mediterranean diet may boost chances of IVF success: Study - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/mediterranean-diet-may-boost-chances-of-ivf-success-study-3945494",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/f187a581f8c12e0c06939cf5c182b6c5_w_800_h_450.jpg",
            "publishedAt": "2023-12-20T14:20:28Z",
            "content": "Sydney, Dec 20 (IANS) Adopting a Mediterranean diet -- with high intakes of fruits and veggies, nuts and legumes -- during IVF treatment would offer a single straightforward approach to improve outco… [+2877 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "During Christmas season, the risk of penile fractures goes up: Study - WION",
            "description": "During Christmas season, the risk of penile fractures goes up: Study",
            "url": "https://www.wionews.com/health-and-wellness/during-christmas-season-the-risk-of-penile-fractures-also-rises-study-671842",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/20/400504-christmas.png",
            "publishedAt": "2023-12-20T13:14:43Z",
            "content": "It's That Time of the Year.. when it's all festive and Christmas-y. People across the world enjoy being with their family and friends. \r\nBut doctors have warned that the festive period is also linked… [+2531 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Newsdrum.in"
            },
            "author": "NewsDrum Desk",
            "title": "Childhood trauma linked with increased risk of chronic pain, related disability in adulthood - NewsDrum",
            "description": "Adverse childhood experiences, such as physical, sexual or emotional abuse or neglect, increases the risk of chronic pain and related disability in adulthood, ...",
            "url": "https://www.newsdrum.in/national/childhood-trauma-linked-with-increased-risk-of-chronic-pain-related-disability-in-adulthood-2033840",
            "urlToImage": "https://img-cdn.thepublive.com/fit-in/1200x675/",
            "publishedAt": "2023-12-20T13:00:35Z",
            "content": "New Delhi, Dec 20 (PTI) Adverse childhood experiences, such as physical, sexual or emotional abuse or neglect, increases the risk of chronic pain and related disability in adulthood, new research has… [+2291 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Free Press Journal"
            },
            "author": "IANS",
            "title": "Beetroot Juice Supplementation Improves Blood Pressure In COPD Patients - Free Press Journal",
            "description": "COPD, a serious lung condition affecting around 400 million people worldwide, includes chronic bronchitis and emphysema, causes breathing difficulties and severely limits people's capacity for physical activity.",
            "url": "https://www.freepressjournal.in/health/beetroot-juice-supplementation-improves-blood-pressure-in-copd-patients",
            "urlToImage": "https://media.assettype.com/freepressjournal/2023-12/d345036a-671c-4f03-8c1c-ae9b0bb3650e/Healthy_beetroot_juice.jpg",
            "publishedAt": "2023-12-20T12:52:04Z",
            "content": "A 12-week course of daily beetroot juice supplement for people with chronic obstructive pulmonary disease (COPD) lowered blood pressure and improved how far patients could walk in six minutes, accord… [+2817 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Can brain strokes happen under 40? Do they always show symptoms? - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/health-wellness/can-brain-strokes-happen-under-40-symptoms-9076385/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T12:30:04Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Desk",
            "title": "5 Winter Foods for Glowing Skin - WION",
            "description": "5 Winter Foods for Glowing Skin",
            "url": "https://www.wionews.com/web-stories/trending/5-winter-foods-for-glowing-skin-1703073855670",
            "urlToImage": null,
            "publishedAt": "2023-12-20T12:21:19Z",
            "content": "Broccoli, kale, spinach, fenugreek, and cabbage are all very good for the skin, and are available in winter. Vitamins C, A, and K make Kale a superstar in the skincare world. These nutrients do wonde… [+99 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "DNA India"
            },
            "author": "Ritik Raj",
            "title": "8 ways to de-stress after a long day at work - DNA India",
            "description": "how to reduce stress after a workday",
            "url": "https://www.dnaindia.com/web-stories/lifestyle/8-ways-to-destress-after-a-long-day-at-work-anxiety-tension-high-blood-pressure-meditation-relax-mental-health-1703072582999",
            "urlToImage": null,
            "publishedAt": "2023-12-20T12:19:00Z",
            "content": "This content, including advice, gives generic information only and is in no way a substitute for a qualified medical opinion."
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "ET HealthWorld",
            "title": "Addicted to vaping? Experts warn that long-term use of e-cigars may lead to drug abuse - ETHealthWorld",
            "description": "Expressing concern over rising use of e-cigarettes among youths, health experts on Wednesday warned that practising such vaping methods may lead to addiction to drugs like cocaine and nicotine. 'Mothers Against Vaping' (MAV), a platform of concerned mothers c…",
            "url": "https://health.economictimes.indiatimes.com/news/industry/addicted-to-vaping-experts-warn-that-long-term-use-of-e-cigars-may-lead-to-drug-abuse/106155815",
            "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-106155815,imgsize-16246,width-1200,height=765,overlay-ethealth/industry/addicted-to-vaping-experts-warn-that-long-term-use-of-e-cigars-may-lead-to-drug-abuse.jpg",
            "publishedAt": "2023-12-20T11:28:48Z",
            "content": "Guwahati: Expressing concern over rising use of e-cigarettes among youths, health experts on Wednesday warned that practising such vaping methods may lead to addiction to drugs like cocaine and nicot… [+3039 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Maintaining brain health improves quality of life for many Americans - WQAD News 8",
            "description": "More from GMQC: https://www.wqad.com/good-morning-quad-cities More news: https://www.wqad.com  Subscribe to WQAD News 8 on YouTube: https://www.youtube.com/c...",
            "url": "https://www.youtube.com/watch?v=SPM37PvNK8A",
            "urlToImage": "https://i.ytimg.com/vi/SPM37PvNK8A/hqdefault.jpg",
            "publishedAt": "2023-12-20T10:57:45Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Prerna Targhotra",
            "title": "Is Consuming Curd Everyday In Winters Safe For Health Here’s What Expert Suggests - Jagran English",
            "description": "Consumption Of Curd In Winters: The cold months have arrived and as soon as winters approaches we all enjoy delicious foods. But is eating curd in winter season healthy",
            "url": "https://english.jagran.com/lifestyle/is-consuming-curd-everyday-in-winters-safe-for-health-heres-what-expert-suggests-10121714",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/curd-consumption-in-winter1703068226314.jpg",
            "publishedAt": "2023-12-20T10:28:00Z",
            "content": "Consumption Of Curd In Winters: Curd is one of the most versatile dairy foods that enhances the taste of a meal. Curd is an extremely healthy food that is rich in vital nutrients that promote overall… [+2863 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Rahul Pratyush",
            "title": "7 dry fruits for stronger & healthy bones - India TV News",
            "description": "Explore a variety of nutrient-rich seeds and nuts that play a vital role in supporting and maintaining robust bone health. at India TV News",
            "url": "https://www.indiatvnews.com/web-stories/lifestyle/7-dry-fruits-for-stronger-healthy-bones-2023-12-20-908157",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2023/12/dry-fruits-1-1703063686.jpg",
            "publishedAt": "2023-12-20T09:29:41Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "LAKSHMI M.S",
            "title": "What Is Clenbuterol? A Decongestant and Bronchodilator with Potential Risks - Deccan Herald",
            "description": "Discover what Clenbuterol is and its dual role as a decongestant and bronchodilator. Learn about the potential risks associated with Clenbuterol use to make informed decisions",
            "url": "https://www.deccanherald.com/brandspot/featured/what-is-clenbuterol-a-decongestant-and-bronchodilator-with-potential-risks-2818918",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Fba87ed88-86f6-4365-a199-4f258763c6af%2FPict_40.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-20T09:03:00Z",
            "content": "Using Clenbuterol to reach your fitness goals is not a simple matter. Clenbuterol has many side effects that can be hard to deal with and you may not be able to complete a whole cycle without noticin… [+24697 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "LAKSHMI M.S",
            "title": "Wegovy Vs Mounjaro Differences, What Is Best For Weight Loss, Cost And Safety - Semaglutide V Tirzepatide - Deccan Herald",
            "description": "Explore the differences between Wegovy and Mounjaro, comparing Semaglutide vs Tirzepatide for weight loss. Learn about the effectiveness, cost, and safety of these medications to make an informed choice",
            "url": "https://www.deccanherald.com/brandspot/featured/wegovy-vs-mounjaro-differences-what-is-best-for-weight-loss-cost-and-safety-semaglutide-v-tirzepatide-2818898",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Faf3dfe93-19b3-40b5-bdc8-de080a22859c%2FPict_39.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-20T08:45:20Z",
            "content": "Many people want to lose weight quickly and easily. In 2023, there are some new medicines that can help them do that. These medicines are called injections and they are given once a week.\r\nSome of th… [+11027 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Desk",
            "title": "Incredible Benefits of Consuming Liquorice (Mulethi) Tea - WION",
            "description": "Incredible Benefits of Consuming Liquorice (Mulethi) Tea",
            "url": "https://www.wionews.com/web-stories/trending/incredible-benefits-of-consuming-liquorice-mulethi-tea-1703060596969",
            "urlToImage": null,
            "publishedAt": "2023-12-20T08:45:00Z",
            "content": "Liquorice tea has the potential to alleviate nausea and settle an upset stomach. Glycyrrhizin and carbenoxolone, two active ingredients in liquorice root, are well known for their ability to relieve … [+56 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Swelling on the face could be mumps; early symptoms of it and when to seek immediate medical help - IndiaTimes",
            "description": "The characteristic enlargement of the salivary glands follows a few days of nonspecific symptoms that are typical of the mumps. Even though the mumps is now comparatively uncommon because of extensive vaccination, it's crucial to understand its symptoms and w…",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/swelling-on-the-face-could-be-mumps-early-symptoms-of-it-and-when-to-seek-immediate-medical-help/photostory/106150354.cms",
            "urlToImage": "https://static.toiimg.com/photo/106150369.cms",
            "publishedAt": "2023-12-20T08:36:51Z",
            "content": "Dr. Garima Pathania MBBS, MD (Paediatrics and Neonatology)Consultant Paediatrics at Ruby Hall Clinic, Wanowrie says, “The hallmark sign of mumps is the swelling of one or both parotid glands, resulti… [+476 chars]"
          },
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
              "name": "Thehealthsite.com"
            },
            "author": "Satata Karmakar",
            "title": "Healthy Heart: 7 Safety Measures For People With Heart Conditions During Winter | TheHealthSite.com - TheHealthSite",
            "description": "Winter Heart Attack Risk: 7 Safety Measures For People With Heart Conditions During Chilly Weather. TheHealthSite.com",
            "url": "https://www.thehealthsite.com/diseases-conditions/healthy-heart-7-safety-measures-for-people-with-heart-conditions-during-winter-1046147/",
            "urlToImage": "https://st1.thehealthsite.com/wp-content/uploads/2023/12/Healthy-Heart-7-Safety-Measures-For-People-With-Heart-Conditions-During-Winter.jpg",
            "publishedAt": "2023-12-20T08:00:00Z",
            "content": "VERIFIEDHealthy Heart: 7 Safety Measures For People With Heart Conditions During Winter\r\nWinter Heart Attack Risk: 7 Safety Measures For People With Heart Conditions During Chilly Weather.\r\nAs the te… [+4396 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "Pallavi Mehra",
            "title": "Mindful Morning Routine: How Simple Habits Can Transform Wellness - Zee News",
            "description": "Weight Loss In Winter: How To Manage Your Body Weight In Cold Season The rise of mindful morning routines is a testament to the transformative power of simple habits. By dedicating time to set intentions, express gratitude, practice kindness, and engage in mi…",
            "url": "https://zeenews.india.com/health/mindful-morning-routine-how-simple-habits-can-transform-wellness-2701057",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/20/1339109-wellness.jpg",
            "publishedAt": "2023-12-20T07:54:36Z",
            "content": "In the hustle and bustle of today's fast paced world, prioritizing our mental health has become more crucial than ever. The demands of daily life, from work obligations to social responsibilities, ca… [+3046 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Health Desk",
            "title": "Heart Attack: Warning Sign Of The Deadly Disease You Can Notice When You Breathe - Times Now",
            "description": "Heart attacks occur when blood flow to the heart is blocked by fat, cholesterol and plaque buildup in arteries. Symptoms range from chest pain to fatigue and nausea among others. Regular check-ups and a heart-healthy lifestyle can reduce risks, with diet, exe…",
            "url": "https://www.timesnownews.com/health/heart-attack-sign-warning-sign-of-the-deadly-disease-that-you-can-notice-when-you-breathe-article-106148668",
            "urlToImage": "https://static.tnn.in/thumb/msid-106148651,thumbsize-37744,width-1280,height-720,resizemode-75/106148651.jpg",
            "publishedAt": "2023-12-20T07:54:04Z",
            "content": "'Lived My Life With Honesty, Transparency', Says Arvind Kejriwal, Summoned By ED"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "75 Hard Challenge, 12-3-30 Workout, Hot Girl Walk, Cozy Cardio, More | Viral Fitness Trends Of 2023 - SHOWSHA",
            "description": null,
            "url": "https://www.youtube.com/watch?v=64VcGaRdqz0",
            "urlToImage": null,
            "publishedAt": "2023-12-20T06:40:01Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol",
            "title": "Cholesterol diet: Add these veggies to your diet to lower LDL levels - Moneycontrol",
            "description": "What to eat: Adding these winter vegetables into your diet can offer substantial benefits in managing LDL cholesterol levels and nurturing your heart health",
            "url": "https://www.moneycontrol.com/web-stories/what-to-eat-how-to-lower-cholesterol-with-diet-cholesterol-diet-add-these-7-veggies-to-your-diet-health-benefits-of-kale-brussels-sprouts-sweet-potatoes-beetroot-carrots-cabbage-1371079.html",
            "urlToImage": "https://images.news18.com/webstories/2023/12/How-to-reduce-cholesterol.jpg",
            "publishedAt": "2023-12-20T05:52:36Z",
            "content": "Kale: This versatile leafy green boasts substantial amounts of soluble fibre, antioxidants, and plant sterols. Its soluble fibre aids in lowering cholesterol absorption, while its antioxidants fight … [+70 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "COVID Variant Update; Doctor's Advice On Vigilance and Protective Measures | Latest News - MIRROR NOW",
            "description": null,
            "url": "https://www.youtube.com/watch?v=uKcRkULK1oo",
            "urlToImage": null,
            "publishedAt": "2023-12-20T05:45:08Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Priyanka Munshi",
            "title": "5 Flours Which You Must Add Into Your Daily Diet - Jagran English",
            "description": "Whole grain flours, like oat or wheat, provide essential nutrients, boost energy, and improve digestion. Almond and coconut flours, gluten-free, offer unique tastes and textures, making them ideal for restricted diets.",
            "url": "https://english.jagran.com/lifestyle/5-flours-which-you-must-add-into-your-daily-diet-10121618",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/benefitofaddingdiffirentflours1703051103602.jpg",
            "publishedAt": "2023-12-20T05:36:00Z",
            "content": "Also, using whole grain flourssuch as oat or whole wheat flouradds vital nutrients like fiber, vitamins, and minerals, which are sometimes lacking in processed flours. These nutrient-rich flours have… [+2150 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Medical Dialogues"
            },
            "author": "Dr Nihar Mehta",
            "title": "Top Ten Landmark Trials Across Cardiology - Dr Nihar Mehta - Medical Dialogues",
            "description": "1. Framingham Heart  Study (1948): The inception of modern cardiovascular epidemiology, the  Framingham Heart Study, laid the foundation for understanding the risk factors  associated with...",
            "url": "https://medicaldialogues.in/cardiology-ctvs/perspective/top-ten-landmark-trials-across-cardiology-dr-nihar-mehta-121885",
            "urlToImage": "https://medicaldialogues.in/h-upload/2023/12/19/228204-landmark-trials-across-cardiology-2.jpg",
            "publishedAt": "2023-12-20T04:15:05Z",
            "content": "1. Framingham Heart Study (1948): \r\nThe inception of modern cardiovascular epidemiology, the Framingham Heart Study, laid the foundation for understanding the risk factors associated with heart disea… [+4468 chars]"
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
            "author": "Times Of India",
            "title": "Govt takes steps to curb cervical cancer - Times of India",
            "description": "Learn about the steps taken by the government to prevent deaths due to cervical cancer in Jaipur. Screening and early diagnosis are key measures in the fight against this preventable disease.",
            "url": "https://timesofindia.indiatimes.com/city/jaipur/https/example-com/govt-steps-prevent-cervical-cancer-jaipur/articleshow/106139518.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T03:04:04Z",
            "content": "Nita Ambani's diamond necklace to Isha Ambani's choker: Beautiful jewellery pieces owned by the Ambani ladies"
          },
          {
            "source": {
              "id": null,
              "name": "Ajmc.com"
            },
            "author": "Hayden E. Klein",
            "title": "Study Identifies Risk Factors for Colorectal Cancer in Adults With T2D - Drug Topics",
            "description": "Study findings shed light on the disproportionate burden of type 2 diabetes (T2D) and colorectal cancer faced by individuals with low socioeconomic status and those of African American race.",
            "url": "https://www.ajmc.com/view/study-reveals-factors-that-further-increase-colorectal-cancer-risk-for-adults-with-t2d",
            "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/drugtopics/99fd9f99680242979d9d8a703c32780b83dc27be-5361x3574.jpg?fit=crop&auto=format",
            "publishedAt": "2023-12-19T21:35:08Z",
            "content": "Adults with diabetes have a 47% higher risk of developing colorectal cancer (CRC) compared with their nondiabetic counterparts, according to new research published in JAMA Network Open.1\r\nThe associa… [+4798 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "TikTok's 'jawline doctor' gives tips on how to delete that double chin - FOX 32 Chicago",
            "description": "Not a fan of your double chin? A local plastic surgeon is telling us ways to get rid of it without surgery.Subscribe to FOX 32 Chicago: https://www.youtube.c...",
            "url": "https://www.youtube.com/watch?v=lkkVSM-XvJk",
            "urlToImage": "https://i.ytimg.com/vi/lkkVSM-XvJk/maxresdefault.jpg",
            "publishedAt": "2023-12-19T17:08:20Z",
            "content": null
          },
          {
            "source": {
              "id": "medical-news-today",
              "name": "Medical News Today"
            },
            "author": "Charlotte Lillis",
            "title": "Foods for those with dementia: Examples and tips - Medical News Today",
            "description": "The best foods for those with dementia are those that help the individual to achieve their optimal weight and nutritional needs. Learn more here.",
            "url": "https://www.medicalnewstoday.com/articles/best-foods-for-dementia-patients-to-eat",
            "urlToImage": "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2023/10/perks-woman-eating-732x549-thumbnail.jpg",
            "publishedAt": "2023-12-19T15:37:42Z",
            "content": "There are no specific foods that are best for a person with dementia. The best foods are those that appeal to the individuals dietary and nutritional needs. \r\nPeople with dementia and their caregiver… [+8718 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Prerna Targhotra",
            "title": "5 Effective Ways To Increase Your Appetite Naturally - Jagran English",
            "description": "Ways To Increase Your Appetite: Many factors combine including an individuals physical conditions, mental health conditions, and nutrient deficiencies.",
            "url": "https://english.jagran.com/lifestyle/5-effective-ways-to-increase-your-appetite-naturally-10121480",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/ways-to-increase-appetite1702987806646.jpg",
            "publishedAt": "2023-12-19T12:02:00Z",
            "content": "Ways To Increase Your Appetite: There are certain people who feel less hungry as compared to others. This condition is usually termed as loss of appetite which means you have less desire to eat. Nume… [+2566 chars]"
          }
        ]
      },
      {
        "science": [
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Science Desk",
            "title": "There are a billion suns in this picture taken by Hubble telescope - India Today",
            "description": "This dazzling display of approximately one billion stars is located some 7 million light-years from Earth in the constellation Virgo.",
            "url": "https://www.indiatoday.in/science/story/there-are-a-billion-suns-in-this-picture-taken-by-hubble-telescope-2478931-2023-12-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/galaxy-cluster-with-billion-stars-210855671-16x9_0.jpg?VersionId=72mwPZ_.81HuwW8RtGZ2.UdvOX0IbOox",
            "publishedAt": "2023-12-21T12:15:35Z",
            "content": "In a celestial celebration captured by the Hubble Space Telescope, the dwarf irregular galaxy UGC 8091 has been revealed in a stunning image that resembles a cosmic snow globe. \r\nThis dazzling displa… [+2068 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dst.gov.in"
            },
            "author": null,
            "title": "Milli-second burst detected by AstroSat in new high magnetic field neutron star can help understand such stellar entities - Department Of Science & Technology",
            "description": "The Department of Science & Technology plays a pivotal role in promotion of science & technology in the country.",
            "url": "https://dst.gov.in/milli-second-burst-detected-astrosat-new-high-magnetic-field-neutron-star-can-help-understand-such",
            "urlToImage": null,
            "publishedAt": "2023-12-21T11:41:37Z",
            "content": "AstroSat, Indias first multi-wavelength space-based observatory, has detected bright sub-second X-ray bursts from a new and unique neutron star with ultrahigh magnetic field (magnetar), which can hel… [+3132 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "SpaceWatch.Global"
            },
            "author": "SpaceWatch.Global",
            "title": "ASTROBOTIC'S PEREGRINE READY FOR LUNAR MISSION - SpaceWatch.Global",
            "description": null,
            "url": "https://spacewatch.global/2023/12/astrobotics-peregrine-ready-for-lunar-mission/",
            "urlToImage": null,
            "publishedAt": "2023-12-21T11:04:58Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Interesting Engineering"
            },
            "author": "Ameya Paleja",
            "title": "14 years in 6 mins: Watch 4,000 galaxies dancing in NASA's timelapse - Interesting Engineering",
            "description": "NASA's Fermi-Gamma Ray Space Telescope mission has shared a time-lapse video of the gamma-ray sky to mark the completion of 14 years of the mission.",
            "url": "https://interestingengineering.com/science/14-year-timelapse-gamma-ray-sky",
            "urlToImage": "https://dnd2oi6izkvoi.cloudfront.net/2023/12/21/image/jpeg/yXGHCk4kpMWSrxBnxnwCGQ3QnWpVUKgU6NWJfS1J.jpg",
            "publishedAt": "2023-12-21T10:39:00Z",
            "content": "According to NASA Goddard, in the past 14 years, Fermi-GST has captured more than 7,000 sources, out of which 4,000 are active galaxies, many hundred pulsars, and around 2,000 variable sources of gam… [+1252 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Science Desk",
            "title": "Ticking climate time bomb buried under Arctic could make Earth inhabitable - India Today",
            "description": "This discovery points to the urgent need for further research into sub-permafrost methane and its role in the Arctic greenhouse gas budget.",
            "url": "https://www.indiatoday.in/science/story/ticking-climate-time-bomb-buried-under-arctic-could-make-earth-inhabitable-2478833-2023-12-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/arctic-glacier-methane-214919478-16x9_0.jpg?VersionId=VTuY0S2Mb83uzPi9XwMOSIAMdPyvXxn5",
            "publishedAt": "2023-12-21T10:04:58Z",
            "content": "In the remote Arctic archipelago of Svalbard, scientists have uncovered a ticking climate time bomb. \r\nMillions of cubic meters of methane, a greenhouse gas far more potent than carbon dioxide, are m… [+2332 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX fires up Starship engines in major test of Mars-bound rocket - The Independent",
            "description": "SpaceX tested the engines of its Starship rocket on Wednesday 20 December in what was seen as a major test of the spaceship's abilities.The craft was tested ...",
            "url": "https://www.youtube.com/watch?v=GrmhItk4TOk",
            "urlToImage": "https://i.ytimg.com/vi/GrmhItk4TOk/maxresdefault.jpg",
            "publishedAt": "2023-12-21T09:56:22Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "US to land international astronaut on Moon by decade-end: Kamala Harris - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/us-to-land-international-astronaut-on-moon-by-decadeend-kamala-harris-3946549",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/1a1c6cfd370b69857e45d7bec7389f83_w_800_h_450.jpg",
            "publishedAt": "2023-12-21T09:48:25Z",
            "content": "Washington, Dec 21 (IANS) The US will land an international astronaut on the Moon aboard NASA's Artemis mission by the end of the decade, said Vice President Kamala Harris during a meeting of the Whi… [+2705 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "autoevolution"
            },
            "author": "Daniel Patrascu",
            "title": "NASA Study Shows 17 Planets Outside Our Solar System May Have Habitable Oceans - autoevolution",
            "description": "Knowing what we know now about our solar system, it would be fair to assume that many of the processes and state of affairs we've observed here with...",
            "url": "https://www.autoevolution.com/news/nasa-study-shows-17-planets-outside-our-solar-system-may-have-habitable-oceans-226437.html",
            "urlToImage": "https://s1.cdn.autoevolution.com/images/news/nasa-study-shows-17-planets-outside-our-solar-system-may-have-habitable-oceans-226437_1.jpg",
            "publishedAt": "2023-12-21T07:27:50Z",
            "content": "For instance, we've recently discussed at length a discovery concerning one of the moons in the solar system that has one of the biggest chances of harboring life in our immediate neighborhood.It's E… [+4317 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Science Desk",
            "title": "World's smallest frog discovered and it does not lay eggs in water - India Today",
            "description": "This newly found frog is not only incredibly small, with a maximum length of about 30 millimeters, but it also has a unique way of laying eggs.",
            "url": "https://www.indiatoday.in/science/story/worlds-smallest-frog-discovered-and-it-does-not-lay-eggs-in-water-2478737-2023-12-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/worlds-smallest-frog-215754968-16x9_0.jpg?VersionId=d94_5uDdPaO7HXx3g8nQfBdd_rMParXx",
            "publishedAt": "2023-12-21T07:02:50Z",
            "content": "Researchers have identified the world's smallest frog species in Sulawesi, Indonesia.\r\nThe newly found species, belonging to the Limnonectes genus, showcases a distinctive reproductive behaviour, lay… [+2195 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Vrinda Jain",
            "title": "NASA's James Webb Telescope captures close-up of Uranus' ring. See pic - Hindustan Times",
            "description": "Since the images of Uranus were shared on Instagram by NASA, many people called it 'beautiful'. | Trending",
            "url": "https://www.hindustantimes.com/trending/nasas-james-webb-telescope-captures-close-up-of-uranus-ring-leaves-netizens-in-awe-101703141229595.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/Uranus_ring_1703141550683_1703141553431.png",
            "publishedAt": "2023-12-21T06:54:44Z",
            "content": "NASA's James Webb Telescope took to social media to share a stunning image of Uranus and its 'faint, diffuse, and elusive' Zeta ring. Not only that, but the space agency also captured bright storms o… [+2237 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Aditya-L1 mission set to reach L1 point in January 2023; huge achievement by ISRO - HT Tech",
            "description": "AdityaL1 mission set to reach L1 point in January 2023 huge achievement by ISRO In February of this year the Indian Space Research Organisation ISRO launched the groundbreaking AdityaL1 mission marking Indias first foray into studying the Sun from as close qu…",
            "url": "https://tech.hindustantimes.com/web-stories/adityal1-mission-set-to-reach-l1-point-in-january-2023-huge-achievement-by-isro-71703158954898.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/21/1600x900/Aditya-L1_mission_1703159073636_1703159073882.jpg/",
            "publishedAt": "2023-12-21T06:19:53Z",
            "content": "Photo Credit: ISRO\r\n In February of this year, the Indian Space Research Organisation (ISRO) launched the groundbreaking Aditya-L1 mission, marking India's first foray into studying the Sun from as c… [+1743 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tech Explorist"
            },
            "author": "Amit Malewar",
            "title": "PRIYA: a new cosmological simulation model - Tech Explorist",
            "description": "Supercomputer enables illustration of large-scale structure of universe.",
            "url": "https://www.techexplorist.com/priya-new-cosmological-simulation-model/78756/",
            "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/12/PRIYA.jpg",
            "publishedAt": "2023-12-21T05:31:21Z",
            "content": "Distant quasars are massive objects in space that give off light. This light they produce is the brightest in the whole universe. Looking at this light helps us learn how the universe is organized on… [+3893 chars]"
          },
          {
            "source": {
              "id": "the-irish-times",
              "name": "The Irish Times"
            },
            "author": "Claire O'Connell",
            "title": "An eye to scientific research developments in 2024 – The Irish Times - The Irish Times",
            "description": "As we draw to the end of 2023 we ask researchers from various disciplines about what we can expect next year",
            "url": "https://www.irishtimes.com/science/2023/12/21/an-eye-to-scientific-research-developments-in-2024/",
            "urlToImage": "https://www.irishtimes.com/resizer/mVY0CCJY-9Avu0GfwPGAGqvm1pg=/1200x630/filters:format(jpg):quality(70):focal(1541x1969:1551x1979)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/BI742X7R4BADRFNYUEWPCWRKIA.jpg",
            "publishedAt": "2023-12-21T05:00:56Z",
            "content": "A year is a long time in research. And recent years have shown us how events such as the emergence of a new global pathogen or an easy-to-use form of artificial intelligence (AI) can suddenly burst t… [+8281 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Education Diary"
            },
            "author": "iednewsdesk",
            "title": "Purdue's Stellar Reputation Advances Understanding of Stars, Planets, and Beyond - India Education Diary",
            "description": "Purdue University isn’t just the Cradle of Astronauts. Honoring decades of tradition, key discoveries from Purdue space scientists and engineers are advancing knowledge of the universe and missions to the moon or Mars.Additional Information \tPurdue B",
            "url": "https://indiaeducationdiary.in/purdues-stellar-reputation-advances-understanding-of-stars-planets-and-beyond/",
            "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2023/12/space-roundupLO.jpg",
            "publishedAt": "2023-12-21T03:54:20Z",
            "content": "Purdue University isnt just the Cradle of Astronauts. Honoring decades of tradition, key discoveries from Purdue space scientists and engineers are advancing knowledge of the universe and missions to… [+2524 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Uniindia.com"
            },
            "author": "Uniindia News Service",
            "title": "SpaceX Dragon cargo spacecraft to return to Earth with supplies, scientific experiments - United News of India",
            "description": "Los Angeles, Dec 21 (UNI) A SpaceX Dragon cargo resupply spacecraft is scheduled to depart the International Space Station (ISS) on Wednesday and return to Earth with supplies and scientific experiments, according to NASA.",
            "url": "http://www.uniindia.com/news/world/spacex-dragon-cargo-spacecraft-to-return-to-earth-with-supplies-scientific-experiments/3109309.html",
            "urlToImage": "https://www.uniindia.com/cms/gall_content/2023/12/2023_12$largeimg21_Dec_2023_085413550.jpg",
            "publishedAt": "2023-12-21T02:54:00Z",
            "content": "Los Angeles, Dec 21 (UNI) A SpaceX Dragon cargo resupply spacecraft is scheduled to depart the International Space Station (ISS) on Wednesday and return to Earth with supplies and scientific experime… [+892 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "What's Trending: Taters the cat makes NASA history with interstellar video streaming - Hawaii News Now",
            "description": "Check out this video from NASA, using a fuzzy friend as a proof of concept for interstellar video streaming.For more Local News from Hawaii News Now: https:/...",
            "url": "https://www.youtube.com/watch?v=yqv4Qq4TlNE",
            "urlToImage": "https://i.ytimg.com/vi/yqv4Qq4TlNE/maxresdefault.jpg",
            "publishedAt": "2023-12-20T23:43:23Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "NASA Telescope illuminates 'Christmas Tree' - WATE 6 On Your Side",
            "description": "This image shows a group of young stars resembling a Christmas tree, called the “Christmas Tree Cluster” or NASA’s name, NGC 2264. It is located in our Milky...",
            "url": "https://www.youtube.com/watch?v=lZMCbLVUuLc",
            "urlToImage": "https://i.ytimg.com/vi/lZMCbLVUuLc/maxresdefault.jpg",
            "publishedAt": "2023-12-20T23:05:11Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Robert Andrew",
            "title": "New NASA Experiment to Explore the Origins of the Milky Way - CityLife",
            "description": "New NASA Experiment to Explore the Origins of the Milky Way - CityLife",
            "url": "https://citylife.capetown/webstories/new-nasa-experiment-to-explore-the-origins-of-the-milky-way/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_programming_b416f76b-0fdb-495d-8d79-c7df40aa281f.jpeg",
            "publishedAt": "2023-12-20T22:31:58Z",
            "content": "NASA is embarking on a groundbreaking experiment using a high-altitude balloon to study the evolution of the Milky Way galaxy. The Galactic/Extragalactic ULDB Spectroscopic Terahertz Observatory (GUS… [+1553 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Space.com"
            },
            "author": "Robert Lea",
            "title": "Finding life on Saturn's moon Enceladus might be easier than we thought - Space.com",
            "description": "\"We know that Enceladus' ocean is habitable thanks to Cassini measurements. We know there is liquid water, energy, and the chemicals carbon, hydrogen, nitrogen, oxygen, phosphorus and sulfur.\"",
            "url": "https://www.space.com/life-saturn-moon-enceladus-easier-than-expected-ice-plumes",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/7VSZgXEXZnMuERGzvU4Sxi-1200-80.jpg",
            "publishedAt": "2023-12-20T22:00:01Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
          },
          {
            "source": {
              "id": null,
              "name": "Dailyexcelsior.com"
            },
            "author": "Daily Excelsior",
            "title": "19-million-year-old fossil jaw bone hints the biggest whales first evolved somewhere unexpected - Daily Excelsior",
            "description": "Melbourne, Dec 20: Baleen whales are the titans of the ocean, the largest animals to have ever lived. The record holder is the blue whale (Balaenoptera musculus), which can reach lengths of up to 30 metres. That’s longer than a basketball court. However, thro…",
            "url": "https://www.dailyexcelsior.com/19-million-year-old-fossil-jaw-bone-hints-the-biggest-whales-first-evolved-somewhere-unexpected/",
            "urlToImage": "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/12/fodil.jpg",
            "publishedAt": "2023-12-20T18:54:24Z",
            "content": "Melbourne, Dec 20: Baleen whales are the titans of the ocean, the largest animals to have ever lived. The record holder is the blue whale (Balaenoptera musculus), which can reach lengths of up to 30 … [+4666 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Artemis 2 moon astronaut reflects on Apollo 8's 55th anniversary - VideoFromSpace",
            "description": "Artemis 2 NASA astronaut Reid Wiseman will command the first moon mission in half a century. On the eve of the 55th anniversary of Apollo 8's historical orbi...",
            "url": "https://www.youtube.com/watch?v=G4Y9T1wDWxM",
            "urlToImage": "https://i.ytimg.com/vi/G4Y9T1wDWxM/maxresdefault.jpg",
            "publishedAt": "2023-12-20T18:30:09Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "Prisha",
            "title": "8 Common Food Items Banned In Space - WION",
            "description": "8 Common Food Items Banned In Space",
            "url": "https://www.wionews.com/web-stories/trending/8-common-food-items-banned-in-space-1703096192935",
            "urlToImage": null,
            "publishedAt": "2023-12-20T18:29:28Z",
            "content": "Since there are no freezers, ice creams cannot be part of the pantry in space and hence, have been banned."
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "Study Sheds Light On How Your Body Reacts To Different Oxygen Levels - MSN",
            "description": null,
            "url": "https://www.msn.com/en-in/health/health-news/study-sheds-light-on-how-your-body-reacts-to-different-oxygen-levels/ar-AA1lNKUn",
            "urlToImage": null,
            "publishedAt": "2023-12-20T18:28:02Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Phys.Org"
            },
            "author": "Science X",
            "title": "Mighty MURI brings the heat to test new longwave infrared radiometer - Phys.org",
            "description": "NASA's new Multiband Uncooled Radiometer Instrument (MURI) features a novel bolometer that detects infrared radiation without a cryogenic cooler, greatly reducing the cost and complexity of dispatching infrared radiometers into low-Earth orbit.",
            "url": "https://phys.org/news/2023-12-mighty-muri-longwave-infrared-radiometer.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/2023/mighty-muri-brings-the.jpg",
            "publishedAt": "2023-12-20T18:23:57Z",
            "content": "NASA's new Multiband Uncooled Radiometer Instrument (MURI) features a novel bolometer that detects infrared radiation without a cryogenic cooler, greatly reducing the cost and complexity of dispatchi… [+3117 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "China's Space Plane Deployed 6 \"Mysterious Wingmen\" In Orbit, Claims Amateur Astronomer - NDTV",
            "description": "Just four days after being launched on its third mission, China's reusable space plane, Shenlong also known as the \"Divine Dragon\", allegedly released six unidentified objects in Earth's orbit.",
            "url": "https://www.ndtv.com/world-news/chinas-space-plane-deployed-6-mysterious-wingmen-in-orbit-claims-amateur-astronomer-4712071",
            "urlToImage": "https://c.ndtvimg.com/2023-12/c4r493mo_china-shenlong-space-plane_625x300_20_December_23.jpeg?ver-20231203.06",
            "publishedAt": "2023-12-20T18:08:02Z",
            "content": "Scott Tilley, an amateur astronomer, referred to these objects as \"mysterious wingmen\".\r\nJust four days after being launched on its third mission, China's reusable space plane, Shenlong also known as… [+3498 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "BNN Correspondents",
            "title": "Martian Nanomaterials: Key to a Sustainable Martian Colony - BNN Breaking",
            "description": "Researchers at the University of Sussex have discovered the potential of Martian nanomaterials for clean energy production and building materials on Mars, paving the way for a sustainable Martian colony.",
            "url": "https://bnnbreaking.com/tech/science-tech/martian-nanomaterials-paving-the-way-for-a-sustainable-martian-colony/",
            "urlToImage": "https://media.bnn.network/content/uploads/2023/12/martian-nanomaterials-20231220183055.jpg",
            "publishedAt": "2023-12-20T17:30:00Z",
            "content": "On the forefront of Martian exploration and habitation, an innovative team of researchers at the University of Sussex has made a landmark discovery. Led by Dr. Conor Boland, the team has unearthed th… [+1618 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NASA"
            },
            "author": "Beth Ridgeway",
            "title": "NASA's 3D-printed Rotating Detonation Rocket Engine Test a Success - NASA",
            "description": "Engineers at NASA’s Marshall Center successfully test-fired an innovative Rotating Detonation Rocket Engine combustor, a potentially revolutionary propulsion technology that could deliver a lander to the lunar surface or propel a spacecraft to Mars.",
            "url": "https://www.nasa.gov/centers-and-facilities/marshall/nasas-3d-printed-rotating-detonation-rocket-engine-test-a-success/",
            "urlToImage": "https://www.nasa.gov/wp-content/uploads/2023/12/09-27-2023-hf-12-062.jpg",
            "publishedAt": "2023-12-20T17:00:00Z",
            "content": "NASA has achieved a new benchmark in developing an innovative propulsion system called the Rotating Detonation Rocket Engine (RDRE). Engineers at NASAs Marshall Space Flight Center in Huntsville, Ala… [+1975 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Phys.Org"
            },
            "author": "Science X",
            "title": "Meet 'Coscientist,' your AI lab partner: System succeeds in planning and carrying out real-world chemistry experiments - Phys.org",
            "description": "In less time than it will take you to read this article, an artificial intelligence-driven system was able to autonomously learn about certain Nobel Prize-winning chemical reactions and design a successful laboratory procedure to make them. The AI did all tha…",
            "url": "https://phys.org/news/2023-12-coscientist-ai-lab-partner-succeeds.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/meet-coscientist-your.jpg",
            "publishedAt": "2023-12-20T16:46:39Z",
            "content": "In less time than it will take you to read this article, an artificial intelligence-driven system was able to autonomously learn about certain Nobel Prize-winning chemical reactions and design a succ… [+12002 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Crackling Fermi Fireplace - NASA Video",
            "description": "Although it looks a little like a crackling fire, this is actually a 14-year time-lapse of the Fermi Gamma-ray Space Telescope’s observations. To learn more ...",
            "url": "https://www.youtube.com/watch?v=Ceo6aN8ySKg",
            "urlToImage": "https://i.ytimg.com/vi/Ceo6aN8ySKg/hqdefault.jpg",
            "publishedAt": "2023-12-20T16:05:30Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Nature.com"
            },
            "author": null,
            "title": "Three-dimensional atomic structure and local chemical order of medium- and high-entropy nanoalloys - Nature.com",
            "description": "Atomic electron tomography is used to determine the 3D atomic positions and&nbsp;chemical species&nbsp;of medium- and high-entropy alloy nanoparticles and quantitatively characterize the local lattice distortion, strain tensor, twin boundaries, dislocation co…",
            "url": "https://www.nature.com/articles/s41586-023-06785-z",
            "urlToImage": "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41586-023-06785-z/MediaObjects/41586_2023_6785_Fig1_HTML.png",
            "publishedAt": "2023-12-20T16:02:40Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Quanta Magazine"
            },
            "author": null,
            "title": "Quanta Magazine - Quanta Magazine",
            "description": "Recent observations of an aging, alien planetary system are helping to answer the question: What will happen to our planet when the sun dies?",
            "url": "https://www.quantamagazine.org/new-clues-for-what-will-happen-when-the-sun-eats-the-earth-20231220/",
            "urlToImage": "https://d2r55xnwy6nx47.cloudfront.net/uploads/2023/12/EarthsFinalDays-courtesyofMIT-Social.webp",
            "publishedAt": "2023-12-20T15:56:34Z",
            "content": "Earths fate rests on a coin flip.\r\nIn 5 billion years, our sun will balloon into a red giant star. Whether Earth survives is an open question, said Melinda Soares-Furtado, an astrophysicist at the Un… [+7471 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Science Desk",
            "title": "‘The great attractor’: Astronomers discover force driving galaxies in common direction - IndiaTimes",
            "description": "Science News: Scientists studying space uncover the colossal gravitational anomaly, The Great Attractor, pulling galaxies at 600 km/s. The unseen force is located i",
            "url": "https://timesofindia.indiatimes.com/home/science/the-great-attractor-astronomers-discover-force-driving-galaxies-in-common-direction/articleshow/106161078.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106161085,width-1070,height-580,imgsize-1705383,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T15:17:31Z",
            "content": "<ul><li>News</li>\r\n<li>Science News</li>\r\n<li>The great attractor: Astronomers discover force driving galaxies in common direction</li></ul>\r\nScientists studying space uncover the colossal gravitatio… [+630 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Kashmir Life"
            },
            "author": "KL News Network",
            "title": "Spectacular Celestial Geminid Meteor Shower 2023 Captured by Hanle - Kashmir Life",
            "description": "SRINAGAR: Experts at Astronomical Observatory Hanle (Ladakh) captured the spectacular Geminid Meteor Showers that perennially take place in December every year. They used two cameras set up for two nights to capture the amazing meteor showers. “Collected hund…",
            "url": "https://kashmirlife.net/spectacular-celestial-geminid-meteor-shower-2023-captured-by-hanle-335767/",
            "urlToImage": "https://kashmirlife.net/wp-content/uploads/2023/12/Meteor-showers-at-Hanle.jpeg",
            "publishedAt": "2023-12-20T15:05:29Z",
            "content": "SRINAGAR: Experts at Astronomical Observatory Hanle (Ladakh) captured the spectacular Geminid Meteor Showers that perennially take place in December every year. They used two cameras set up for two n… [+1831 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Space Missions 2023: A look back at the journey in Space Exploration | Chandrayaan-3 | Oneindia - Oneindia News",
            "description": "As we approach the end of the year, 2023 has proven to be an extraordinary time for space exploration, with groundbreaking missions and discoveries expanding...",
            "url": "https://www.youtube.com/watch?v=3yzq2_UIZB0",
            "urlToImage": "https://i.ytimg.com/vi/3yzq2_UIZB0/maxresdefault.jpg",
            "publishedAt": "2023-12-20T14:53:46Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Chronicle"
            },
            "author": "Vikram Sharma",
            "title": "Early Risers - Deccan Chronicle",
            "description": "Early Risers",
            "url": "https://www.deccanchronicle.com/lifestyle/health-and-wellbeing/201223/early-risers.html",
            "urlToImage": "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-lii508kl0gvnou24d0gnebjlb1-20231220192622.Medi.jpeg",
            "publishedAt": "2023-12-20T14:48:59Z",
            "content": "To identify potential changes in circadian biology, researchers looked at the genetic sequences, splicing, and regulation of circadian genes in Neanderthals and modern humans."
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Scientists spot recent volcanic activity on Earth’s neighbour Mars - WION",
            "description": "Scientists spot recent volcanic activity on Earth’s neighbour Mars",
            "url": "https://www.wionews.com/science/scientists-spot-recent-volcanic-activity-on-earths-neighbour-mars-671825",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/20/400500-untitled-design-2023-12-20t201547410.png",
            "publishedAt": "2023-12-20T14:41:55Z",
            "content": "In a new survey, which was done using ground penetrating radar and satellite imagery, scientists spotted signs of volcanic activity, which may have taken place far more recently than was expected by … [+2565 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "From dog to tortoise, 5 strange animals that were sent to space - IndiaTimes",
            "description": "NASA and the former Soviet Union have sent several animals into space for test and trial. Some of them successfully made it back, however some were lost amongst the stars. Let's take a look at some of the animals that went into space.",
            "url": "https://timesofindia.indiatimes.com/etimes/trending/from-dog-to-tortoise-5-strange-animals-that-were-sent-to-space/photostory/106147131.cms",
            "urlToImage": "https://static.toiimg.com/photo/106147151.cms",
            "publishedAt": "2023-12-20T14:30:00Z",
            "content": "32 monkeys and apes have been to space so far, however, the very first one was a rhesus macaque named Albert II. In 1949, he reached 134 km but unfortunately died on impact when re-entering the atmos… [+196 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Eos"
            },
            "author": "Molly Herring",
            "title": "Microplastics Are the Not-So-Secret Ingredient in Marine Snow - Eos",
            "description": "Particles of tiny, degraded plastics coated with biofilms sink to the seafloor, carrying carbon with them.",
            "url": "http://eos.org/articles/microplastics-are-the-not-so-secret-ingredient-in-marine-snow",
            "urlToImage": "https://eos.org/wp-content/uploads/2023/12/marine-snow.jpg",
            "publishedAt": "2023-12-20T14:15:15Z",
            "content": "In 2020, scientists discovered that plastics had infiltrated our planets water cycle, hitching a ride through clouds and rain. Research shows that the carbon cycle is chock-full of plastic as well: M… [+4543 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thedebrief.org"
            },
            "author": "Micah Hanks, Micah Hanks",
            "title": "NASA’s Mars Reconnaissance Orbiter Has Captured Images of Something Odd Carved into the Martian Landscape - The Debrief",
            "description": "NASA’s Mars Reconnaissance Orbiter recently captured images of odd-looking ridged lines carved into the landscape of the Red Planet.",
            "url": "https://thedebrief.org/nasas-mars-reconnaissance-orbiter-has-captured-images-of-something-odd-carved-into-the-martian-landscape/",
            "urlToImage": "https://thedebrief.b-cdn.net/wp-content/uploads/2023/12/Mars-ice-ridges.jpg",
            "publishedAt": "2023-12-20T14:11:45Z",
            "content": "NASAs Mars Reconnaissance Orbiter recently captured images of an odd-looking series of ridged lines carved into the landscape of the Red Planet, the U.S. space agency recently announced.\r\nDesigned to… [+2258 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bnnbreaking.com"
            },
            "author": "Rizwan Shah",
            "title": "IM-1 Lunar Mission Rescheduled to February 2024 by Intuitive Machines - BNN Breaking",
            "description": "Intuitive Machines, Inc. has rescheduled its first lunar mission, IM-1, to mid-February 2024 due to unfavorable weather conditions affecting SpaceX's launch schedule. The mission's Nova-C lunar lander is set to land near the Moon's south pole, part of NASA's …",
            "url": "https://bnnbreaking.com/world/us/intuitive-machines-reschedules-first-lunar-mission-to-mid-february-2024/",
            "urlToImage": "https://media.bnn.network/content/uploads/2023/12/intuitive-machines-lunar-mission-20231220140345.jpg",
            "publishedAt": "2023-12-20T14:03:00Z",
            "content": "Space exploration company, Intuitive Machines, Inc., has announced the postponement of its eagerly anticipated lunar mission, IM-1, to mid-February 2024. The delay was caused by a reconfiguration of … [+2008 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Interesting Engineering"
            },
            "author": "Christopher McFadden",
            "title": "SETI has discovered a new 'slide whistle' like fast radio burst signal - Interesting Engineering",
            "description": "SETI researchers have discovered a pattern of 35 repeating fast radio bursts that resemble the sound of a \"slide whistle\" when played on a xylophone.",
            "url": "https://interestingengineering.com/science/slide-whistle-fast-radio-burst",
            "urlToImage": "https://dnd2oi6izkvoi.cloudfront.net/2023/12/20/image/jpeg/zJc3QCiYtRoDPd2QSSxIVW39cgYe3hAZwJAQjong.jpg",
            "publishedAt": "2023-12-20T14:03:00Z",
            "content": "\"It has been wonderful to be part of the first FRB study done with the ATA -- this work proves that new telescopes with unique capabilities, like the ATA, can provide a new angle on outstanding myste… [+1336 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ythisnews.com"
            },
            "author": "https://www.facebook.com/YthisNewsMedia",
            "title": "Ingenuity's Mars Photos Reveal Stunning Debris from Historic Arrival - Y This News",
            "description": "NASA's Mars helicopter, has captured stunning photographs of debris on the Martian surface,",
            "url": "https://ythisnews.com/ingenuitys-mars-photos-reveal-stunning-debris-from-historic-arrival/",
            "urlToImage": "https://ythisnews.com/wp-content/uploads/2023/12/MARS-MISIION.jpg",
            "publishedAt": "2023-12-20T13:09:32Z",
            "content": "The photographs, taken in April, show fragments of the backshell, a critical component that protected the rover and helicopter during their entrance into Mars’ thin atmosphere. The wreckage includes … [+2022 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "How Elon Musk's SpaceX helped in creating a new 'record' for humanity - Times of India - Times of India",
            "description": "Gadgets News News: SpaceX and Chinese rocket agencies continue to launch countless satellites, contributing to the significant growth in astronautics globally. The lates",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/how-elon-musks-spacex-helped-in-creating-a-new-record-for-humanity/articleshow/106158036.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106157951,width-1070,height-580,imgsize-32430,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T12:32:39Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Haircut in space! Chinese astronauts show how it's done on Tiangong space station - VideoFromSpace",
            "description": "Chinese astronaut demonstrate hair cuts and more aboard the Tiangong space station. Credit: Space.com | footage courtesy: China Central Television (CCTV) | e...",
            "url": "https://www.youtube.com/watch?v=tx5ddXjy8bg",
            "urlToImage": "https://i.ytimg.com/vi/tx5ddXjy8bg/maxresdefault.jpg",
            "publishedAt": "2023-12-20T12:30:35Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Nanowerk"
            },
            "author": null,
            "title": "Scientists reveal superconductor with on-off switches - Nanowerk",
            "description": "Material could find uses in superconducting circuits for next-generation industrial electronics.",
            "url": "https://www.nanowerk.com/nanotechnology-news3/newsid=64285.php",
            "urlToImage": "https://www.nanowerk.com/nanotechnology-news3/id64285.jpg",
            "publishedAt": "2023-12-20T11:04:33Z",
            "content": "Nanowerk Newsletter\r\nGet our daily Nanotechnology News to your inbox!"
          },
          {
            "source": {
              "id": null,
              "name": "Esa.int"
            },
            "author": null,
            "title": "ESA - Top 10 Earth observation stories of 2023 - European Space Agency",
            "description": "This year has been a whirlwind of captivating Earth observation stories and news, spanning from dramatic volcanic eruptions to powerful earthquakes to witnessing icebergs on the run. Join us as we revisit some of the most memorable stories from 2023.",
            "url": "https://www.esa.int/Applications/Observing_the_Earth/Top_10_Earth_observation_stories_of_2023",
            "urlToImage": "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/05/full_earth_disc/24859668-4-eng-GB/Full_Earth_disc_pillars.png",
            "publishedAt": "2023-12-20T11:01:39Z",
            "content": "Applications20/12/2023465 views11 likes\r\nThis year has been a whirlwind of captivating Earth observation stories and news, spanning from dramatic volcanic eruptions to powerful earthquakes to witness… [+8882 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Llama poop key to saving the world? It apparently makes soil rich for plant growth, study finds - WION",
            "description": "Llama poop key to saving the world? It can push Earths green cover up, study finds",
            "url": "https://www.wionews.com/science/llamas-poop-can-save-the-world-study-shows-it-makes-soil-fertile-and-increase-plant-cover-in-barren-lands-671691",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/20/400413-untitled-design-2023-12-20t145344856.png",
            "publishedAt": "2023-12-20T09:21:15Z",
            "content": "Llamas can save the world, but how? Well, simply by pooping. As bizarre as it may sound, a new scientific study has shown that llama poop is quite nutritious for the soil that can bring back its requ… [+3002 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Anusha Jain",
            "title": "NASA Unveils Space Science Experiments Ranging From Flower Gardens To Pulsating Flames - Indiatimes.com",
            "description": "NASA recently released the astounding findings of science tests carried out in orbit through the year 2023, taking us beyond the picturesque landscapes of flower gardens and exploring the mysteries of pulsating flames outside of our atmosphere in a breathtaki…",
            "url": "https://www.indiatimes.com/trending/human-interest/nasa-unveils-space-science-experiments-2023-623913.html",
            "urlToImage": "https://im.indiatimes.in/content/2023/Dec/In-Space-Nasa-Conducts-Experiments-Ranging-From-Flower-Gardens-To-Pulsating-Flames_6582acb348d59.png",
            "publishedAt": "2023-12-20T09:10:48Z",
            "content": "NASA recently released the astounding findings of science tests carried out in orbit through the year 2023, taking us beyond the picturesque landscapes of flower gardens and exploring the mysteries o… [+1432 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Asianetnews.com"
            },
            "author": "Sunita Iyer",
            "title": "Lunar Anthropocene: Scientists express concerns over human impact as moon enters a new era - Asianet Newsable",
            "description": "The article delves into concerns about the escalating human impact on the Moon, leading to the declaration of a new geological epoch called the 'Lunar Anthropocene'.",
            "url": "https://newsable.asianetnews.com/world/lunar-anthropocene-scientists-express-concerns-over-human-impact-as-moon-enters-a-new-era-snt-s5yigk",
            "urlToImage": "https://static-ai.asianetnews.com/images/01hj33zvkw3nk41d4swr6cr3p4/gettyimages-1368368019-170667a--1-_1200x630xt.jpg",
            "publishedAt": "2023-12-20T08:33:56Z",
            "content": "The article delves into concerns about the escalating human impact on the Moon, leading to the declaration of a new geological epoch called the 'Lunar Anthropocene'.Concerns are rising among space sc… [+2918 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Weather Channel"
            },
            "author": "The Weather Channel",
            "title": "Ursid Meteor Shower to Peak Ahead of Christmas Eve! Here's How You Can Watch It | Weather.com - The Weather Channel",
            "description": "Ursids are a much more common sight in the Northern Hemisphere and will be visible from India.",
            "url": "https://weather.com/en-IN/india/space/news/2023-12-20-how-to-watch-ursid-meteor-shower-to-peak-from-india",
            "urlToImage": "https://s.w-x.co/in-meteor_shower%281%29_0.jpg",
            "publishedAt": "2023-12-20T08:08:00Z",
            "content": "Did you by any chance miss the gorgeous Geminids that made an appearance earlier this month, despite constant reminders from our side, might we add? Well, youre in luck. The Ursid meteor showersnot a… [+2849 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "News18",
            "title": "Solar Eclipse And Lunar Eclipse In 2024 - News18",
            "description": "The upcoming year, 2024 will witness two Solar Eclipse and a Lunar Eclipse. Here’s all you need to know.",
            "url": "https://www.news18.com/web-stories/lifestyle/solar-eclipse-and-lunar-eclipse-in-2024-1371769/",
            "urlToImage": "https://images.news18.com/webstories/2023/12/cropped-pexels-aviz-18967325-scaled-1.jpg",
            "publishedAt": "2023-12-20T08:03:26Z",
            "content": "The second Lunar Eclipse will be on September 18, 2024. It will be a Partial Lunar Eclipse which will be visible in Europe, Asia, Australia, Africa, North/West North America, North/East South America… [+65 chars]"
          },
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
              "name": "Zoom"
            },
            "author": "TN Tech Desk",
            "title": "Alert! New Sunspots Threaten M-Class Solar Slares This Week - Times Now",
            "description": "A volatile sunspot with a complex magnetic field now facing Earth threatens strong M-class solar storms this week. These could cause radio blackouts and radiation storms impacting satellites, air travel, and astronauts. Expert solar monitoring and early warni…",
            "url": "https://www.timesnownews.com/technology-science/alert-new-sunspots-threaten-m-class-solar-slares-this-week-article-106146706",
            "urlToImage": "https://static.tnn.in/thumb/msid-106146694,thumbsize-96268,width-1280,height-720,resizemode-75/106146694.jpg",
            "publishedAt": "2023-12-20T07:15:00Z",
            "content": "Akshay Kumar Celebrates 16 Years Of Welcome, Drops BTS Clip Of Sanjay Dutt Joining The Film Franchise: What A Lovely..."
          },
          {
            "source": {
              "id": null,
              "name": "News9live.com"
            },
            "author": "News9 Science Desk",
            "title": "Watch Out!: Half-Kilometer Wide Asteroid 341843 (2008 EV5) to Make a Close Flyby of Earth - News9 LIVE",
            "description": "The half-kilometer-wide asteroid 341843 (2008 EV5) makes its closest approach to Earth, traveling at a speed of 18,000 kmph and passing at a safe distance of 6.32 million kilometers.",
            "url": "https://www.news9live.com/science/asteroid-341843-2008-ev5-close-flyby-2382449",
            "urlToImage": "https://images.news9live.com/wp-content/uploads/2023/12/tv9-tech-auto-144.jpg",
            "publishedAt": "2023-12-20T06:33:34Z",
            "content": "In a remarkable astronomical event, the near-Earth asteroid 341843 (2008 EV5) is expected to make its closest approach to our planet today, providing a unique opportunity for both professional astron… [+1342 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Ticker.tv"
            },
            "author": "Betty Davis",
            "title": "Tomato Lost in Space: The Mystery Solved - TickerTV News",
            "description": "Tomato Lost in Space: The Mystery Solved - TickerTV News",
            "url": "https://ticker.tv/news/nasa-astronauts-finally-find-1-inch-tomato-that-was-lost-in-space-for-8-months/363916/",
            "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_realistic_photo_of_men_using_smartphone_or_computer_on_o_2207036c-fe62-4b69-b413-57c7a29558fc.png",
            "publishedAt": "2023-12-20T06:08:05Z",
            "content": "After months of speculation and jokes, the mystery of the missing tomato on the International Space Station (ISS) has finally been solved. NASA astronaut Frank Rubio, who was blamed for consuming the… [+1989 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Aajenglish.tv"
            },
            "author": "Web Desk",
            "title": "Scientists claim to talk to whales for 20 minutes - Aaj English TV",
            "description": "A 38-year-old whale in Southeast Alaska responded to a pre-recorded 'telephonic call'",
            "url": "https://www.aajenglish.tv",
            "urlToImage": "https://i.aaj.tv/large/2023/12/201034039466b18.webp?r=103417",
            "publishedAt": "2023-12-20T05:34:17Z",
            "content": "Scientists claim to talk to whales for 20 minutes. It may seem like a scene from a science fiction movie, but American scientists have made it possible to talk to a whale after a 20-minute-long conve… [+662 chars]"
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
              "name": "Gktoday.in"
            },
            "author": "divyastuti",
            "title": "What is “The Great Unconformity”? - GKToday",
            "description": "Scientists have recently made significant strides in understanding “The Great Unconformity,” a geological phenomenon characterized by missing sections of the Earth’s crust in the geological record. This mysterious gap has now been linked to intense glacial er…",
            "url": "https://www.gktoday.in/what-is-the-great-unconformity/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T03:43:48Z",
            "content": "Scientists have recently made significant strides in understanding “The Great Unconformity,” a geological phenomenon characterized by missing sections of the Earth’s crust in the geological record. T… [+1716 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "NASA Still Can't Open Canister of Astroid Samples That May Hold 'Ancient Secrets' - MSN",
            "description": null,
            "url": "https://www.msn.com/en-us/news/technology/nasa-still-can-t-open-canister-of-astroid-samples-that-may-hold-ancient-secrets/ar-AA1lLxnx",
            "urlToImage": null,
            "publishedAt": "2023-12-20T03:14:38Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "WION"
            },
            "author": "WION Web Team",
            "title": "Celestial masterpiece: Forbidden light of distant spiral galaxy captured by Hubble - WION",
            "description": "Celestial masterpiece: Forbidden light of distant spiral galaxy captured by Hubble",
            "url": "https://www.wionews.com/science/hubbles-spectacular-capture-shows-distant-spiral-galaxy-with-forbidden-light-671530",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/20/400311-untitled-design-2023-12-20t075621638.png",
            "publishedAt": "2023-12-20T02:24:40Z",
            "content": "In a mesmerising display, Hubble Space Telescope captured the enigmatic glow of a distant spiral galaxy, MCG-01-24-014 emanating its \"forbidden\" light, situated a staggering 275 million light-years a… [+2773 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Citylife.capetown"
            },
            "author": "Robert Andrew",
            "title": "Revolutionary Discoveries: NASA's Exploration of the Solar System - CityLife",
            "description": "Découvertes révolutionnaires : l'exploration du système solaire par la NASA - CityLife",
            "url": "https://citylife.capetown/fr/webstories/revolutionary-discoveries-nasas-exploration-of-the-solar-system/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_robotic_automatization_high_resolutio_09a148ce-6b70-4d84-86fe-a967b8063956.jpeg",
            "publishedAt": "2023-12-20T01:36:46Z",
            "content": "Résumé : L'exploration révolutionnaire du système solaire par la NASA révèle des images intrigantes et révèle des informations fascinantes sur les planètes, les lunes, les tempêtes et les conditions … [+2149 chars]"
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
              "name": "Citylife.capetown"
            },
            "author": "Mampho Brescia",
            "title": "De superbes images d'icebergs dans l'Atlantique Sud révèlent la crise du changement climatique - CityLife",
            "description": "De superbes images d'icebergs dans l'Atlantique Sud révèlent la crise du changement climatique - CityLife",
            "url": "https://citylife.capetown/fr/webstories/stunning-images-of-icebergs-in-the-south-atlantic-reveal-climate-change-crisis/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_man_89280e9a-c46c-4679-9be3-f69bbc6f4948.jpeg",
            "publishedAt": "2023-12-20T01:18:55Z",
            "content": "Les images prises par lastronaute de lAgence spatiale européenne Andreas Mogensen depuis la Station spatiale internationale (ISS) ont révélé une dure réalité : limpact du changement climatique sur no… [+2084 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gearrice.com"
            },
            "author": "Elizabeth George",
            "title": "Global warming: this group wants to launch a giant sunshade into space to save the Earth - Gearrice",
            "description": "The Planetary Sunshade Foundation, an organization created in 2021, aims to launch a gigantic sunshade into space to save the Earth from global warming.",
            "url": "https://www.gearrice.com/update/global-warming-this-group-wants-to-launch-a-giant-sunshade-into-space-to-save-the-earth/",
            "urlToImage": "https://wp-pa.phonandroid.com/uploads/2023/12/pare-soleil-espace.jpg",
            "publishedAt": "2023-12-19T22:29:55Z",
            "content": "The Planetary Sunshade Foundation, an organization created in 2021, aims to launch a gigantic sunshade into space to save the Earth from global warming. Explanations on this ambitious and slightly cr… [+2764 chars]"
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
              "name": "Futurism"
            },
            "author": "Victor Tangermann",
            "title": "Scientists Warn That Plastic Rocks Are Appearing Across the World - Futurism",
            "description": "Scientists now have come across strange types of rock that contain manmade plastic in all five inhabited continents.",
            "url": "https://futurism.com/the-byte/scientists-puzzled-plastic-rocks-world",
            "urlToImage": "https://wp-assets.futurism.com/2023/12/scientists-puzzled-plastic-rocks-world.jpg",
            "publishedAt": "2023-12-19T17:41:51Z",
            "content": "This is a disaster.\r\nPlastic Beach\r\nScientists have come across strange new rocks that contain manmade plastic in all five inhabited continents, Newsweek reports a shocking sign of the sheer permeati… [+1850 chars]"
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
              "name": "Citylife.capetown"
            },
            "author": "Gabriel Botha",
            "title": "Prepare for an Incredible Celestial Show on the Winter Solstice - CityLife",
            "description": "Prepare for an Incredible Celestial Show on the Winter Solstice - CityLife",
            "url": "https://citylife.capetown/webstories/prepare-for-an-incredible-celestial-show-on-the-winter-solstice/",
            "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_robotic_automatization_high_resolutio_2d93adc4-e042-4482-88d1-df488c45bc07.jpeg",
            "publishedAt": "2023-12-19T15:11:13Z",
            "content": "Prepare your telescopes and get ready for a celestial spectacle on the upcoming Winter Solstice. The Northern Hemisphere is about to experience its longest night of the year along with a mesmerizing … [+1943 chars]"
          }
        ]
      },
      {
        "sports": [
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "Sreshth Shah",
            "title": "Recent Match Report - South Africa vs India 3rd ODI 2023/24 - ESPNcricinfo",
            "description": "He replaced Gaikwad who picked up a finger injury in the second ODI, while Kuldeep was rested with Washington coming in",
            "url": "https://www.espncricinfo.com/series/india-in-south-africa-2023-24-1387592/south-africa-vs-india-3rd-odi-1387602/match-report",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/352700/352763.6.jpg",
            "publishedAt": "2023-12-21T10:55:03Z",
            "content": "ReportHe replaced Gaikwad who picked up a finger injury in the second ODI, while Kuldeep was rested with Washington coming in\r\nSreshth Shah is a sub-editor at ESPNcricinfo. @sreshthx"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Shyam Vasudevan",
            "title": "Who is Sanjay Singh, new Wrestling Federation of India chief? - ESPN India",
            "description": "Sanjay Kumar Singh won 40 votes in the election for the post of President of WFI while.CWG gold-medallist Anita Sheoran won seven.",
            "url": "https://www.espn.in/wrestling/story/_/id/39159932/wfi-elections-sanjay-singh-brij-bhushan-sharan-singh-wrestling-protest",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1221%2Fr1269163_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-21T09:57:00Z",
            "content": "Sanjay Kumar Singh was named the president of the Wrestling Federation of India [WFI] after the delayed elections were held in New Delhi on Thursday. Singh, a close aide of his predecessor Brij Bhush… [+4512 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "Sportstar",
            "title": "India vs Australia LIVE Score, Women's Test Day 1: AUS 198/9; Deepti ends Jonassen's resistance - Sportstar",
            "description": null,
            "url": "https://sportstar.thehindu.com/cricket/india-vs-australia-live-score-womens-test-ind-aus-match-day-1-streaming-updates-highlights/article67660669.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-21T09:44:17Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Cricket.one"
            },
            "author": "Debashis Sarangi",
            "title": "Pandya To Lead, Coetzee-Bumrah To Bowl In Tandem; Here's MI's Best Playing XI For IPL 2024 - OneCricket",
            "description": "Regarding Mumbai Indians, the five-time champions entered the auction with a budget of INR 17.75 Crores, which they used brilliantly to buy ace South African speedster Gerald Coetzee besides the Lankan duo of Dilshan Madushanka and Nuwan Thushara.",
            "url": "https://cricket.one/cricket-analysis/pandya-to-lead-coetzee-bumrah-to-bowl-in-tandem-heres-mis-best-playing-xi-for-ipl-2024/65840340de38a068f4cd783c",
            "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1703145738457_1703127891054_GBuZe_VWAAAuaOG.jpeg",
            "publishedAt": "2023-12-21T09:20:00Z",
            "content": "Hardik Pandya will lead MI in IPL 2024 [X.com]\r\nThe much-anticipated IPL 2024 auction concluded on Tuesday, with the ten franchises finalising their squad for the tournament's upcoming season. Regard… [+2409 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Alex Kirkland, Rodrigo Faez",
            "title": "Court rules UEFA, FIFA can't block Super League - ESPN India",
            "description": "The European Union's top court ruled on Thursday that governing bodies FIFA and UEFA were abusing their dominant position by forbidding clubs outright to compete in a European Super League.",
            "url": "https://www.espn.in/football/story/_/id/39159778/top-eu-court-rules-uefa-fifa-ban-super-league-illegal",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1221%2Fr1269161_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-21T09:14:00Z",
            "content": "In a significant boost to the Super League project, Europe's top court ruled on Thursday that UEFA has been \"abusing a dominant position\" in its control of European football.\r\nThe Super League and it… [+5161 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Republic World"
            },
            "author": "Pavitra Shome",
            "title": "Mohammed Siraj shares a cryptic heartbroken Instagram story, internet goes into a frenzy- Republic World - Republic World",
            "description": "Amid the ongoing frenzy in the realm of cricket, fast bowler Mohammed Siraj has stirred the internet after he shared a cryptic post on social media",
            "url": "https://www.republicworld.com/sports/cricket/mohammed-siraj-shares-a-cryptic-heartbroken-instagram-story-internet-goes-into-a-frenzy",
            "urlToImage": "https://img.republicworld.com/rimages/367132-170314922416616_9.webp",
            "publishedAt": "2023-12-21T09:09:00Z",
            "content": "Without a professional cricket contract, Australias Spencer Johnson was a landscape gardener till last year but fast forward 18 months the pacer is proud that he put a smile on his mothers face, by b… [+3212 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Crictracker.com"
            },
            "author": "CricTracker",
            "title": "NA vs NPC Live Score, Match 2 | Nepal Army vs Nepal Police Club Score & Updates of Match 2 - CricTracker",
            "description": "NA vs NPC Match 2, Live Score: Get all the latest NA vs NPC Live Score of Match 2 along with ball by ball commentary & updates on CricTracker.",
            "url": "https://www.crictracker.com/live-scores/na-vs-npc-match-2-t20-nepal-pro-t20-championship-21-dec-2023/",
            "urlToImage": "https://www.crictracker.com/images/CricTracker-Facebook-Preview.jpg",
            "publishedAt": "2023-12-21T07:16:48Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Revsportz.in"
            },
            "author": "DEBASIS SEN",
            "title": "Revsportz Exclusive || World T20: India vs Pakistan on June 9 in New York could be a day game to suit TV timings in the sub-continent - Sports News Portal | Latest Sports Articles | Revsports - RevSportz",
            "description": "File photo of the ICC Trophy (Source: X) Revsportz Exclusive   India-Pakistan World T20 Clash in New York could be day game to suit sub-continent TV times    Debasis Sen…",
            "url": "https://revsportz.in/revsportz-exclusive-world-t20-india-vs-pakistan-on-june-9-in-new-york-could-be-a-day-game-to-suit-tv-timings-in-the-sub-continent/",
            "urlToImage": "https://revsportz.in/wp-content/uploads/2023/06/T20-World-Cup-USA-WI-host-2024.png",
            "publishedAt": "2023-12-21T05:47:47Z",
            "content": "File photo of the ICC Trophy (Source: X)\r\nRevsportz Exclusive\r\nIndia-Pakistan World T20 Clash in New York could be day game to suit sub-continent TV times \r\nDebasis Sen\r\nIn what could be a major push… [+2965 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "‘Rohit a question mark in T20s’: Manjrekar's razor-sharp remark on MI superstar - Hindustan Times",
            "description": "Rohit Sharma will not be leading the Mumbai Indians in the 2024 season, with Hardik Pandya being named franchise's new captain earlier this month. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/rohit-sharma-for-me-is-a-question-mark-in-t20-manjrekars-razor-sharp-remark-after-hardiks-ascension-as-mi-captain-101703094957580.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/PTI03-27-2022-000106B-0_1648378206095_1703097251012.jpg",
            "publishedAt": "2023-12-21T05:05:02Z",
            "content": "The Mumbai Indians, gearing up for the 2024 IPL season, made a significant move earlier this month as they appointed Hardik Pandya as their new captain. Hardik returned to the Mumbai Indians after tw… [+2645 chars]"
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
              "name": "Sportskeeda"
            },
            "author": "Renin Wilben Albert",
            "title": "“He was our number one priority” - Ricky Ponting opens up on Delhi Capitals' IPL 2024 auction buys - Sportskeeda",
            "description": "Delhi Capitals’ (DC) head coach Ricky Ponting has revealed that purchasing hard-hitting England batter Harry Brook was their number one priority at the Indian Premier League (IPL) 2024 auction in Duba",
            "url": "https://www.sportskeeda.com/cricket/news-he-number-one-priority-ricky-ponting-opens-delhi-capitals-ipl-2024-auction-buys",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/b843a-17031305129229-1920.jpg",
            "publishedAt": "2023-12-21T03:54:10Z",
            "content": "Delhi Capitals (DC) head coach Ricky Ponting has revealed that purchasing hard-hitting England batter Harry Brook was their number one priority at the Indian Premier League (IPL) 2024 auction in Duba… [+2181 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "\"To Replace Hardik Pandya...\": GT Coach Ashish Nehra Breaks Silence On 'Difficult' Exit Of Star - NDTV Sports",
            "description": "The former India pacer said the franchise will back Shubman Gill irrespective of the results in the next edition of the IPL.",
            "url": "http://www.bbc.com/news/world-us-canada-39324587",
            "urlToImage": "https://c.ndtvimg.com/2023-12/gf7u4kkg_hardik-pandya-and-ashish-nehra-bcci_625x300_20_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-12-21T02:56:43Z",
            "content": "Gujarat Titans head coach Ashish Nehra admitted that it will be tough to replace a multi-faceted player like Hardik Pandya but banked on Shubman Gill to shoulder the responsibility of leading the sid… [+3082 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Cricket Times"
            },
            "author": "Akshat Gaur",
            "title": "SA vs IND, 3rd ODI: Match Prediction, Dream11 Team, Fantasy Tips & Pitch Report | South Africa vs India - Cricket Times",
            "description": "South Africa vs India Dream11 Team for today's match - December 21, 11:00 am GMT | India tour of South Africa 2023-24. The Boland Park in Paarl will host the contest.",
            "url": "https://crickettimes.com/2023/12/sa-vs-ind-3rd-odi-match-prediction-dream11-team-fantasy-tips-pitch-report-south-africa-vs-india/",
            "urlToImage": "https://crickettimes.com/wp-content/uploads/2023/12/SA-vs-IND-Dream11-Prediction-3rd-ODI.webp",
            "publishedAt": "2023-12-21T02:49:04Z",
            "content": "In a thrilling culmination to the three-match One Day International (ODI) series, South Africa are gearing up to face India in the decisive third ODI at Boland Park in Paarl on Thursday, December 21.… [+2420 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Dhoni's internet-breaking reply to fan's ‘join RCB’ request: ‘How'll CSK feel?’ - Hindustan Times",
            "description": "A die-hard RCB fan urged MS Dhoni to join RCB and lead the Virat Kohli-starrer side to IPL glory. Find out how the CSK skipper responded. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/ms-dhoni-viral-reply-rcb-fan-urges-csk-captain-to-join-kohli-lead-bangalore-to-ipl-2024-glory-watch-video-101703095648343.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/kohli-dhoni-ipl-twitter_1648130610068_1703098599076.jpg",
            "publishedAt": "2023-12-21T01:27:11Z",
            "content": "Brand new auction but the same old Chennai Super Kings (CSK). Record-time winners, CSK had most of their basses covered when the upper echelons of MS Dhoni's Yellow Brigade went shopping in Dubai on … [+3231 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Star duo to be given extra time as England close in on squad for T20 World Cup - ICC Cricket",
            "description": "England coach Matthew Mott has revealed he will give star duo Ben Stokes and Jofra Archer every chance to recover from injury in time to feature at next year's ICC Men's T20 World Cup.",
            "url": "https://www.icc-cricket.com/news/3830551",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/21/a172d4be-2217-49a7-b91f-d187967d8661/Archer-Stokes.jpg",
            "publishedAt": "2023-12-21T01:25:56Z",
            "content": "England coach Matthew Mott has revealed he will give star duo Ben Stokes and Jofra Archer every chance to recover from injury in time to feature at next year's ICC Men's T20 World Cup.The pair are cu… [+2580 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Gavaskar's verdict on Sai Sudharsan: 'You don't want to get out in 50s, 60s' - Hindustan Times",
            "description": "Batting legend Sunil Gavaskar revealed his early impressions of India's rising star ahead of the 3rd ODI against South Africa. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/sunil-gavaskar-verdict-on-sai-sudharsan-india-vs-south-africa-3rd-odi-you-dont-want-to-be-getting-out-ind-vs-sa-101703090053110.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/PTI11-19-2023-000153B-0_1703094998448_1703095030546.jpg",
            "publishedAt": "2023-12-21T01:02:04Z",
            "content": "India were blown away by the Tony de Zorzi storm as South Africa restored parity in the series with an impressive win over KL Rahul and Co. in the 2nd One Day International (ODI) on Tuesday. Sai Sudh… [+2869 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Khurram Shahzad ruled out of Australia Test series - ESPNcricinfo",
            "description": "The pace bowler picked up a side injury during his debut in Perth",
            "url": "https://www.espncricinfo.com/story/khurram-shahzad-ruled-out-of-australia-test-series-1413765",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372500/372541.6.jpg",
            "publishedAt": "2023-12-21T00:38:31Z",
            "content": "Khurram Shahzad's tour is over  •  Getty Images and Cricket Australia"
          },
          {
            "source": {
              "id": null,
              "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Seven uncapped players selected as West Indies name Test squad for Australia - ICC Cricket",
            "description": "Kraigg Brathwaite has once again been named captain as the West Indies announced an inexperienced 15-player squad for next month's two-match Test series against Australia.",
            "url": "https://www.icc-cricket.com/news/3830471",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/20/cf1951e6-b287-470b-bdd3-e16985e8b153/KraiggB.jpg",
            "publishedAt": "2023-12-20T23:03:45Z",
            "content": "Kraigg Brathwaite has once again been named captain as the West Indies announced an inexperienced 15-player squad for next month's two-match Test series against Australia.The series is the West Indie… [+2194 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Adam Brown",
            "title": "Liverpool ratings: Jones earns 9/10 in big Carabao Cup win - ESPN - ESPN India",
            "description": "Liverpool put in a strong performance to reach the Carabao Cup semifinals, but it was Curtis Jones who made the case to keep starting for Jurgen Klopp.",
            "url": "https://www.espn.in/football/story/_/id/39156000/liverpool-ratings-curtis-jones-big-carabao-cup-win",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1220%2Fr1269024_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-20T22:45:00Z",
            "content": "Liverpool booked their place to the Carabao Cup semifinals on Wednesday night as they registered a 5-1 victory over West Ham United at Anfield.\r\nA quick start to the game saw the Reds looking to play… [+6011 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Indiansuperleague.com"
            },
            "author": null,
            "title": "Kalinga Super Cup 2024: Full fixtures released by the AIFF - Indian Super League",
            "description": "Mohun Bagan Super and East Bengal FC are set to lock horns on January 19 in what is going to be the third Kolkata derby of the season.",
            "url": "https://www.indiansuperleague.com/news/kalinga-super-cup-2024-full-fixtures-released-by-the-aiff",
            "urlToImage": "https://www.indiansuperleague.com/static-assets/waf-images/a4/5c/ec/16-9/IXXf5dz6yh.png",
            "publishedAt": "2023-12-20T22:32:54Z",
            "content": "Kalinga Super Cup 2024: Full fixtures released by the AIFF\r\nMohun Bagan Super and East Bengal FC are set to lock horns on January 19 in what is going to be the third Kolkata derby of the season.\r\nThe… [+6028 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Peoples Person"
            },
            "author": "Ayantan Chowdhury",
            "title": "Bayer Leverkusen, Stuttgart enter the race for Jadon Sancho, Borussia Dortmund remain favourites - Man United News And Transfer News - The Peoples Person",
            "description": "Manchester United manager Erik ten Hag is desperate to strengthen during the January transfer window to try and salvage the current season. He is eyeing at least three additions if possible but following the club's humiliating exit from the Champions League, …",
            "url": "https://thepeoplesperson.com/2023/12/20/bayer-leverkusen-stuttgart-enter-the-race-for-jadon-sancho-borussia-dortmund-remain-favourites-273259/",
            "urlToImage": "https://cdn.thepeoplesperson.com/wp-content/uploads/2023/04/jadon-sancho-sevilla-fc-v-manchester-united-quarterfinal-second-leg-uefa-europa-league.jpeg",
            "publishedAt": "2023-12-20T22:30:28Z",
            "content": "28Manchester United manager Erik ten Hag is desperate to strengthen during the January transfer window to try and salvage the current season.\r\nHe is eyeing at least three additions if possible but fo… [+2152 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Rahul Sadhu",
            "title": "IPL Auction 2024: Why CSK's Kiwi Count Continued To Rise & Bid For Sameer Rizvi Went Past 8 crore - Times Now",
            "description": "While MS Dhoni's future as captain remains a mystery, CSK's investment in New Zealanders and younger players hints at a long-term plan. Ravindra and Rizvi, both in their early 20s, represent long-term investments that can solidify CSK's dominance beyond the D…",
            "url": "https://www.timesnownews.com/sports/cricket/ipl-auction-why-chennai-super-kings-invested-in-new-zealand-players-daryl-mitchell-rachin-ravindra-sameer-rizvi-article-106163640",
            "urlToImage": "https://static.tnn.in/thumb/msid-106164005,thumbsize-52472,width-1280,height-720,resizemode-75/106164005.jpg",
            "publishedAt": "2023-12-20T21:40:31Z",
            "content": "Apple's AirPods 4: Streamlined Design, Advanced Features, and Strategic Pricing for Enhanced Audio Experience"
          },
          {
            "source": {
              "id": null,
              "name": "Barca Blaugranes"
            },
            "author": "Gill Clark",
            "title": "Sergi Roberto reacts after fans whistle Barcelona against Almeria - Barca Blaugranes",
            "description": "The captain spoke out after the 3-2 win",
            "url": "https://www.barcablaugranes.com/2023/12/20/24009969/sergi-roberto-reacts-after-fans-whistle-barcelona-against-almeria",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/3olSf-csc0kc4nNexJ3fAqUuwEc=/0x581:2096x1678/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25177251/1870532652.jpg",
            "publishedAt": "2023-12-20T20:30:00Z",
            "content": "Barcelona captain Sergi Roberto said he heard his team being whistled by fans during Wednesdays clash with Almeria and understand supporters arent always happy with the players.\r\nXavis side struggled… [+1519 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "hindustantimes.com",
            "title": "South Africa Women vs Bangladesh Women Live Score: 2nd ODI of Bangladesh Women tour of South Africa, 2023 to start at 05:30 PM - Hindustan Times",
            "description": "South Africa Women vs Bangladesh Women Live Score: South Africa Women beat Bangladesh Women by 8 wickets",
            "url": "https://www.hindustantimes.com/cricket/south-africa-women-vs-bangladesh-women-live-score-2nd-odi-of-bangladesh-women-tour-of-south-africa-2023-final-updates-today-20-dec-2023-101703069958660.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/10/06/1600x900/CRICKET-ICC-MENS-WC-2023-ENGNZL-ODI-6_1696592836309_1696592836773.jpg",
            "publishedAt": "2023-12-20T18:52:50Z",
            "content": "South Africa Women vs Bangladesh Women Highlights : \r\nFirst Innings \r\nBangladesh Women Score - 222/4 in 50.0 overs \r\nBangladesh Women batting performance Fargana Hoque 102(167)Fahima Khatun 46(48)\r\nS… [+422 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Chess.com"
            },
            "author": "Venkatachalam Saravanan",
            "title": "Chennai Grand Masters 2023 Round 6: Gukesh Leads Before Final Round, Vies For Candidates Spot. - Chess.com",
            "description": "GM Gukesh Dommaraju continued to lead with four points at the end of the sixth and penultimate round, followed by Harikrishna, Eljanov and Arjun.",
            "url": "https://www.chess.com/news/view/chennai-grand-masters-2023-round-6",
            "urlToImage": "https://images.chesscomfiles.com/uploads/v1/news/1322789.f16baa28.5000x5000o.4411b2e747f1.jpg",
            "publishedAt": "2023-12-20T18:07:00Z",
            "content": "GM Gukesh Dommaraju continued to lead with four points at the end of the sixth and penultimate round of the Chennai Grand Masters 2023 after his uneventful draw against GM Pavel Eljanov. GM Arjun Eri… [+6204 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Crictoday.com"
            },
            "author": "CT Contributor",
            "title": "\"If nobody picks Chris Gayle of Ranchi, we'll buy him\": Dhoni's promise to father of GT's INR 3.60 crore buy - Crictoday.com (Cricket News) ",
            "description": "His 21-yeat-old son Robin was bought by Gujarat Titans for INR 3.60 crore after a bidding war with Mumbai Indians",
            "url": "http://crictoday.com/cricket/daily-cricket-news/if-nobody-picks-chris-gayle-of-ranchi-well-buy-him-dhonis-promise-to-father-of-gts-inr-3-60-crore-buy/",
            "urlToImage": "https://crictoday.com/wp-content/uploads/2023/12/Dhoni-1.webp",
            "publishedAt": "2023-12-20T18:01:25Z",
            "content": "Francis Xavier Minz, who is a retired soldier, works as a security guard at Ranchi airport. His 21-yeat-old son Robin was bought by Gujarat Titans for INR 3.60 crore after a bidding war with Mumbai I… [+789 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cricket.one"
            },
            "author": "Akshita Patel",
            "title": "Travis Head To Open, Cummins In As Lead Pacer; Here's SRH's Best Playing XI For IPL 2024 - OneCricket",
            "description": "Speaking of Sunrisers Hyderabad, the franchise initially scripted a league record of fetching the costliest player as they locked in Australian World Cup-winning captain Pat Cummins in a gigantic 20.25 crores deal.",
            "url": "https://cricket.one/cricket-analysis/travis-head-to-open-cummins-in-as-lead-pacer-heres-srhs-best-playing-xi-for-ipl-2024/65832ba0de38a068f4cd76fe",
            "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1703090901365_GBvN9iDWUAA0p2X.jpeg",
            "publishedAt": "2023-12-20T18:00:00Z",
            "content": "Pat Cummins was sold for 20.25 Cr to SRH [X.com]\r\nThe highly anticipated IPL 2024 is just months away, and ahead of the mega carnival, the auction process for the same concluded yesterday in Dubai.\r\n… [+3115 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "Sportstar",
            "title": "TTFI bends over backwards to accept Manika Batra’s last-minute entry, gives her top billing - Sportstar",
            "description": null,
            "url": "https://sportstar.thehindu.com/table-tennis/manika-batra-last-minute-entry-table-tennis-national-championships-top-seed-ttfi-officials-bend-over-backwards-favouritism/article67659644.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-20T17:44:03Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Sanju Samson vs Sanju Samson and the myth of a raw deal - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/sports/cricket/ind-vs-sa-sanju-samson-myth-of-raw-deal-indian-cricket-team-9076635/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T16:52:28Z",
            "content": null
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "Sportstar",
            "title": "MCFC 2-1 MBSG LIVE Score, ISL 2023-24 updates: 8-man Mumbai City FC beats 9-man Mohun Bagan Super Giant in a red-card riddled match - Sportstar",
            "description": null,
            "url": "https://sportstar.thehindu.com/football/mumbai-city-fc-vs-mohun-bagan-super-giant-live-score-isl-2023-24-streaming-prediction-mcfc-v-mbsg/article67658152.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-20T16:41:15Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Exclusive: Irfan Pathan Reviews IPL Auction | First Sports with Rupha Ramani - Firstpost",
            "description": "Exclusive: Irfan Pathan Reviews IPL Auction | First Sports with Rupha RamaniCatch Irfan Pathan’s exclusive interview with Rupha Ramani where the former India...",
            "url": "https://www.youtube.com/watch?v=szN8tCy7kRE",
            "urlToImage": "https://i.ytimg.com/vi/szN8tCy7kRE/maxresdefault.jpg",
            "publishedAt": "2023-12-20T16:40:45Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Aayush Kataria",
            "title": "Shahrukh Khan To Replace Hardik Pandya, Williamson Benched! Gujarat Titans' Strongest Playing XI For IPL 2024 - Times Now",
            "description": "The Gujarat Titans will see a major change in team combination in the 2024 Indian Premier League (IPL) season after Hardik Pandya's departure. Shubman Gill will lead an IPL team for the first time in his career. GT made some impressive signings in the auction…",
            "url": "https://www.timesnownews.com/sports/cricket/shahrukh-khan-to-replace-hardik-pandya-kane-williamson-benched-gujarat-titans-strongest-playing-xi-for-ipl-2024-article-106161710",
            "urlToImage": "https://static.tnn.in/thumb/msid-106161930,thumbsize-1623147,width-1280,height-720,resizemode-75/106161930.jpg",
            "publishedAt": "2023-12-20T16:38:26Z",
            "content": "HDFC, ICICI, Other Banks Win Appeal Against SEBI Orders In THIS Case | Details"
          },
          {
            "source": {
              "id": null,
              "name": "Wisden.com"
            },
            "author": "Ben Gardner",
            "title": "Mohammad Haris should be at the heart of Pakistan’s T20I squad, not ‘rested’ for important series - Wisden",
            "description": "Mohammad Haris has been left out of Pakistan’s T20I squad to tour New Zealand, with chief selector Wahab Riaz insisting he has been “rested”",
            "url": "https://wisden.com/series-stories/new-zealand-v-pakistan/mohammad-haris-should-be-in-pakistans-t20i-squad-not-rested-pak-v-nz",
            "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2023/12/Mohammad-Haris-In-T20-World-Cup-Pakistan-squad.png",
            "publishedAt": "2023-12-20T16:36:32Z",
            "content": "Mohammad Haris has been left out of Pakistans T20I squad to tour New Zealand, and while chief selector Wahab Riaz insists he has been rested, it is still an odd move.\r\nThere has surely never been a s… [+4802 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Aayush Kataria",
            "title": "Mitchell Starc In, No Place For Sunil Narine And Jason Roy? KKR's Strongest Playing XI For IPL 2024 - Times Now",
            "description": "Kolkata Knight Riders had the world talking in the 2024 Indian Premier League Auction after buying Mitchell Starc for a record fee of Rs. 24.75 crore. KKR will be boosted by the return of Shreyas Iyer in the 2024 campaign. Here is a look at KKR's strongest XI…",
            "url": "https://www.timesnownews.com/sports/cricket/mitchell-starc-in-no-place-for-sunil-narine-and-jason-roy-kkrs-strongest-playing-xi-for-ipl-2024-article-106161332",
            "urlToImage": "https://static.tnn.in/thumb/msid-106161575,thumbsize-553508,width-1280,height-720,resizemode-75/106161575.jpg",
            "publishedAt": "2023-12-20T16:06:13Z",
            "content": "Disha Patani-Mouni Roy Dish Out Major Friendship Goals As They Enjoy Thailand Vacay Together. See PICS"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Correspondent",
            "title": "Sports Ministry confirms Arjuna award for Shami; Khel Ratna to Satwik and Chirag - Hindustan Times",
            "description": "The awards will be handed by President Droupadi Murmu at the Rashtrapati Bhavan on January 9.",
            "url": "https://www.hindustantimes.com/sports/others/arjuna-award-for-mohammed-shami-khel-ratna-to-satwik-rankireddy-chirag-shetty-full-list-sports-ministry-confirms-101703083931102.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/MixCollage-20-Dec-2023-07-47-PM-4785_1703084455509_1703084460908.jpg",
            "publishedAt": "2023-12-20T16:04:44Z",
            "content": "India's dynamic badminton duo of Chirag Shetty and Satwiksairaj Rankireddy will receive the Major Dhyan Chand Khel Ratna Award, the highest sporting honour in the country for athletes, the sports min… [+2810 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Wisden.com"
            },
            "author": "Yaseen Rana",
            "title": "Explained: Why Phil Salt went unsold at the 2024 IPL auction - Wisden",
            "description": "Phil Salt admitted his surprise at being overlooked at the 2024 IPL auction – but was he unlucky not find a new home after his Delhi release?",
            "url": "https://wisden.com/stories/global-t20-leagues/indian-premier-league-2024/explained-why-phil-salt-unsold-2024-ipl-auction",
            "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2023/12/Phil-Salt-was-unsold-at-the-IPL-auction-e1703085917975.jpg",
            "publishedAt": "2023-12-20T15:48:13Z",
            "content": "Phil Salt admitted his surprise at being overlooked at the 2024 IPL auction as the in-form England opener was unable to find a new franchise following his release from Delhi Capitals. Here’s why the … [+3777 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Crictracker.com"
            },
            "author": "CricTracker Staff",
            "title": "REN vs HEA Dream11 Prediction, BBL Fantasy Cricket Tips, Playing XI, Pitch Report & Injury Updates For Match 10 of BBL 2023-24 - CricTracker",
            "description": "REN vs HEA Dream11 Team Prediction BBL 2023-24 - Check out Melbourne Renegades vs Brisbane Heat Dream11 prediction, playing 11, BBL fantasy tips & updates for Match 10 on CricTracker.",
            "url": "https://www.crictracker.com/fantasy-cricket-tips/dream11-ren-vs-hea-dream11-prediction-bbl-fantasy-cricket-tips-playing-xi-pitch-report-injury-updates-for-match-10-of-bbl-2023-24/",
            "urlToImage": "https://media.crictracker.com/media/attachments/1701951037282_Brisbane-Heat.jpeg",
            "publishedAt": "2023-12-20T15:45:00Z",
            "content": "Melbourne Renegades (REN) will take on Brisbane Heat (HEA) in the 10th match of the BBL 2023-24 on Thursday (December 21) at the Docklands Stadium, Melbourne. Renegades are still searching for their … [+1501 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Venkata Krishna B",
            "title": "Why chess Grandmaster-siblings Praggnanandhaa and Vaishali will limit the number of tournaments they play in before the Candidates tournament - The Indian Express",
            "description": "Coach RB Ramesh says they will find a balance between playing tournament and preparation; two separate teams with seconds already in place.",
            "url": "https://indianexpress.com/article/sports/chess/grandmaster-siblings-praggnanandhaa-vaishali-limit-tournaments-9076543/",
            "urlToImage": "https://images.indianexpress.com/2023/12/Vaishali-and-Pragg.jpg",
            "publishedAt": "2023-12-20T14:38:49Z",
            "content": "Multiple training camps with focus on each and every opponent. Two separate teams with seconds already identified to share all available information about the opponents. Limiting the number of tourna… [+4885 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Quint"
            },
            "author": "Kanika Singh",
            "title": "IPL Auction 2024: How Did Royal Challengers Bangalore Fare? Analysing Hits & Misses - The Quint",
            "description": "IPL Auction 2024: Royal Challengers Bangalore had a mixed day at the auction, where they did strengthen their squad in some departments, but the team still looks fragile in totality. We take a look at the hits and misses from the RCB purchase list.",
            "url": "https://www.thequint.com/indian-premier-league-ipl/ipl-auction-2024-how-did-royal-challengers-bangalore-do-analysing-rcb",
            "urlToImage": "https://images.thequint.com/thequint%2F2023-12%2Fd39b073b-d5a6-40fb-88a1-f5a7d6e52661%2Fhero_image_Recovered_Recovered_Recovered__1_.jpg",
            "publishedAt": "2023-12-20T14:37:06Z",
            "content": "Let us have a look at how they utilised the purse:\r\nPlayers Bought: Alzarri Joseph (Rs 11.5 crore), Yash Dayal (Rs 5 crore), Lockie Ferguson (Rs 2 crore), Tom Curran (Rs 1.5 crore), Swapnil Singh (Rs… [+411 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sporting News"
            },
            "author": null,
            "title": "Rodri admits to 'very bad feeling' in Man City dressing room after poor Premier League run and issues rallying cry ahead of Club World Cup final - Goal.com",
            "description": "Get all the latest Soccer news, highlights, scores, schedules, standings and more from Sporting News Canada.",
            "url": "https://www.sportingnews.com/ca/soccer",
            "urlToImage": "https://static.sportingnews.com/1.41.0.3/themes/custom/tsn/logo.jpg",
            "publishedAt": "2023-12-20T14:27:51Z",
            "content": null
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Amy Woodyatt",
            "title": "Eight-year-old chess ‘phenomenon’ wins women’s first prize at European Rapid and Blitz Championship - CNN",
            "description": "An eight-year-old British schoolgirl “phenomenon” won the women’s first prize in the Blitz category at this year’s European Rapid and Blitz Chess Championship in Zagreb, Croatia.",
            "url": "https://www.cnn.com/2023/12/20/sport/bodhana-sivanandan-eight-year-old-european-blitz-chess-intl-spt/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231220125845-bodhana-sivanandan-220823.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-12-20T14:25:00Z",
            "content": "An eight-year-old British schoolgirl phenomenon won the womens first prize in the Blitz category at this years European Rapid and Blitz Chess Championship in Zagreb, Croatia.\r\nThe super talented as t… [+1391 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'Right Shashank onboarded': Punjab Kings dismiss reports of wrong player buy at IPL auction - IndiaTimes",
            "description": "Cricket News: Punjab Kings issued a clarification regarding the IPL auction, stating that they picked the right cricketer amidst conflicting reports of confusion. Know more about the player and the franchise's delight in having him on board.",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/punjab-kings-clarify-picking-the-right-cricketer-in-ipl-auction/articleshow/106160163.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106160250,width-1070,height-580,imgsize-61954,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T14:23:34Z",
            "content": "IPL Auction: Mitchell Starc, Pat Cummins set salary records"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "Firdose Moonda",
            "title": "Dave Houghton resigns as Zimbabwe head coach - ESPNcricinfo",
            "description": "He steps down from the role after Zimbabwe failed to qualify for the 2024 T20 World Cup",
            "url": "https://www.espncricinfo.com/story/dave-houghton-resigns-as-zimbabwe-head-coach-1413683",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/353900/353981.6.jpg",
            "publishedAt": "2023-12-20T14:15:37Z",
            "content": "Dave Houghton will remain with ZC and will be reassigned to a different role at the organisation  •  Associated Press"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'Will help us set up the family in many ways': Daryl Mitchell opens up on Rs 14 crore IPL deal with CSK - IndiaTimes",
            "description": "Cricket News: New Zealand all-rounder Daryl Mitchell said that his massive Rs 14 crore Indian Premier League (IPL) deal with five-time champions Chennai Super Kings",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/will-help-us-set-up-the-family-in-many-ways-daryl-mitchell-opens-up-on-rs-14-crore-ipl-deal-with-csk/articleshow/106159261.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106159270,width-1070,height-580,imgsize-35784,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T13:33:51Z",
            "content": "IPL Auction: Mitchell Starc, Pat Cummins set salary records"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Aditya Kukalyekar",
            "title": "Sachin Tendulkar's all-time record broken by Bangladesh batter Soumya Sarkar | Cricket News – India TV - India TV News",
            "description": "New Zealand defeated Bangladesh in the second of the three-match ODI series on Wednesday (December 20) as they chased down 292 runs with ease. Sarkar's knock of 169 runs, however, was lauded by many but how did he break Tendulkar's record? Let's see",
            "url": "https://www.indiatvnews.com/sports/cricket/bangladesh-s-soumya-sarkar-breaks-sachin-tendulkar-s-all-time-record-with-his-169-run-knock-vs-new-zealand-ban-vs-nz-2023-12-20-908192",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/untitled-design-2023-12-20t181116-1703076097.jpg",
            "publishedAt": "2023-12-20T12:42:10Z",
            "content": "Bangladesh batter Soumya Sarkar has come back to national team in the ODI format after quite a long gap. But within a couple of appearances, he has made the comeback a memorable one with a 169-run kn… [+1361 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": "Tristan Lavalette",
            "title": "Recent Match Report - Scorchers vs Hurricanes 9th Match 2023/24 - ESPNcricinfo",
            "description": "Chris Jordan smashed the fourth-fastest BBL fifty, but Hobart Hurricanes were left to rue a top-order collapse",
            "url": "https://www.espncricinfo.com/series/big-bash-league-2023-24-1386092/perth-scorchers-vs-hobart-hurricanes-9th-match-1386102/match-report",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372800/372857.6.jpg",
            "publishedAt": "2023-12-20T12:16:25Z",
            "content": "ReportChris Jordan smashed the fourth-fastest BBL fifty, but Hobart Hurricanes were left to rue a top-order collapse"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Babar Azam takes top spot from Shubman Gill in latest ICC ODI rankings - IndiaTimes",
            "description": "Cricket News: Babar Azam is back at the top with 824 rating points, while Shubman Gill (810) is the second spot followed by teammates Virat Kohli and Rohit Sharma.",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/news/babar-azam-takes-top-spot-from-shubman-gill-in-latest-icc-odi-rankings/articleshow/106156275.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106156303,width-1070,height-580,imgsize-41646,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T11:43:40Z",
            "content": "IPL Auction: Mitchell Starc, Pat Cummins set salary records"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Watch: MS Dhoni and Rishabh Pant play tennis in Dubai after IPL auction - IndiaTimes",
            "description": "Cricket News: Following his active participation in the IPL 2024 auction, Delhi Capitals captain Rishabh Pant decided to unwind by trying his hand at tennis in Duba",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/watch-ms-dhoni-and-rishabh-pant-play-tennis-in-dubai-after-ipl-auction/articleshow/106154468.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106154610,width-1070,height-580,imgsize-40680,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T10:48:03Z",
            "content": "IPL Auction: Mitchell Starc, Pat Cummins set salary records"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "Sportstar",
            "title": "RR Probable Playing XI IPL 2024: Rajasthan Royals squad composition, new players, top buys in auction - Sportstar",
            "description": null,
            "url": "https://sportstar.thehindu.com/cricket/ipl/ipl-news/rr-probable-playing-11-ipl-2024-squad-auction-new-players-list-rajasthan-royals-team-prediction/article67657700.ece",
            "urlToImage": null,
            "publishedAt": "2023-12-20T10:02:34Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Barca Blaugranes"
            },
            "author": "Renato Gonçalves",
            "title": "FC Barcelona News: 20 December 2023; All set for Almería clash, Pedri muscle injury confirmed - Barca Blaugranes",
            "description": "A round-up of the latest Barcelona news and rumors",
            "url": "https://www.barcablaugranes.com/2023/12/20/24008459/fc-barcelona-news-20-december-2023-all-set-for-almeria-clash-pedri-muscle-injury-confirmed",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/nArZOE3Zx2D1vZPAZPtvzYvGHc8=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25174814/1850578617.jpg",
            "publishedAt": "2023-12-20T10:00:00Z",
            "content": "Final training session before the visit of Almería - FC BarcelonaFC Barcelona were in action in Tuesday's session at the Ciutat Esportiva, their final workout before Wednesday's game against Almería,… [+1335 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Insidesport.in"
            },
            "author": "Pranchal Srivastava",
            "title": "Ishan Kishan appears on KBC after leaving IND vs SA Test series citing 'Personal' reasons - InsideSport",
            "description": "In a photo being widely circulated, Ishan Kishan alongside with Smriti Mandhana was captured on the set of KBC hosted by Amitabh Bachchan.",
            "url": "https://www.insidesport.in/cricket/took-break-for-kbc-ishan-kishan-clowned-for-leaving-ind-vs-sa-test-series-citing-personal-reasons/",
            "urlToImage": "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2023/12/akkkkkkkkkk-copy-1-8.jpg",
            "publishedAt": "2023-12-20T09:22:54Z",
            "content": "The fans on social media took a dig at the young Indian batter Ishan Kishan on Wednesday (December 20). In a photo being widely shared on the social media platforms, Ishan Kishan alongside Smriti Man… [+1700 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tribal Football"
            },
            "author": "Carlos Volcano",
            "title": "Atletico Madrid striker Griezmann: Greenwood was UNSTOPPABLE - Tribal Football",
            "description": "Atletico Madrid striker Antoine Griezmann admitted frustration after their draw with Getafe last night.Griezmann scored in the 3-3 draw at the Wanda Metropolita",
            "url": "https://www.tribalfootball.com/articles/atletico-madrid-striker-griezmann-greenwood-was-unstoppable-4480331",
            "urlToImage": "https://images.tribalfootball.com/default/0001/13/thumb_12014_default_large.jpeg",
            "publishedAt": "2023-12-20T07:42:55Z",
            "content": "Atletico Madrid striker Antoine Griezmann admitted frustration after their draw with Getafe last night.\r\nGriezmann scored in the 3-3 draw at the Wanda Metropolitano, but admits they struggled to hand… [+559 chars]"
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
              "name": "Zoom"
            },
            "author": "TN Sports Desk",
            "title": "Rohit Sharma To Play For CSK? Chennai Super Kings CEO Provides Big Update - Times Now",
            "description": "Chennai Super Kings CEO Kasi Viswanathan was asked about a potential trade deal for unsettled Mumbai Indians star Rohit Sharma by the franchise ahead of the start of the IPL 2024 season. And in reply to that question, the CSK official refuted rumours and said…",
            "url": "https://www.timesnownews.com/sports/cricket/rohit-sharma-to-play-for-csk-chennai-super-kings-ceo-provides-big-update-article-106142602",
            "urlToImage": "https://static.tnn.in/thumb/msid-106142602,width-1280,height-720,resizemode-75/106142602.jpg",
            "publishedAt": "2023-12-20T05:00:44Z",
            "content": "Ghaziabad Issues Advisory After Man Tests Covid-19 Positive; Social Distancing, Mask Mandate Back"
          },
          {
            "source": {
              "id": null,
              "name": "Fox Sports"
            },
            "author": "Marco Monteverde",
            "title": "BBL 2023: Australian cricket and Brisbane Heat star Spencer Johnson snares IPL deal as teammates roast $1.78m man - Fox Sports",
            "description": "‘His pockets are pretty heavy’: Teammates roast Aussie cricket’s shock new $1.78m man",
            "url": "https://www.foxsports.com.au/cricket/australia/his-pockets-are-pretty-heavy-teammates-roast-aussie-crickets-shock-new-178m-man/news-story/076b846e9ba7f0497326b1a15319123f",
            "urlToImage": "https://content.api.news/v3/images/bin/6f13394c0b741831814a6f1f173f6dec",
            "publishedAt": "2023-12-20T04:30:20Z",
            "content": "New IPL millionaire Spencer Johnson never doubted his ability, but trusting that his body could cope with the demands of fast bowling was a different story.\r\nLate bloomer Johnsons fairytale rise in t… [+2889 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "Tim MacMahon",
            "title": "Ja Morant returns from suspension, nails buzzer-beater for win - ESPN - ESPN India",
            "description": "Ja Morant put up 34 points and carried the Grizzlies from a 24-point deficit to a buzzer-beating victory in his return from a 25-game NBA suspension.",
            "url": "https://www.espn.in/nba/story/_/id/39151955/ja-morant-lifts-griz-34-points-buzzer-beater-return",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1220%2Fr1268691_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-20T03:37:00Z",
            "content": "NEW ORLEANS -- With 9.6 seconds remaining in his delayed season debut, Memphis Grizzlies star Ja Morant fought fatigue after carrying his team back from a 24-point deficit to tie the score against th… [+4963 chars]"
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
              "name": "Cricbuzz"
            },
            "author": null,
            "title": "The dynamics behind the ground-breaking 24.75 cr bid | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "KKR managed to secure the services of Mitchell Starc and staved off Gujarat Titans due to some smart choices",
            "url": "https://www.cricbuzz.com/cricket-news/128878/the-dynamics-behind-the-ground-breaking-2475-cr-bid-cricbuzzcom",
            "urlToImage": "https://static.cricbuzz.com/a/img/v1/600x400/i1/c366671/kkr-went-home-happier-after-their-moves-worked-well-in-the-auction.jpg",
            "publishedAt": "2023-12-20T01:50:41Z",
            "content": "After the day's proceedings, Sanjiv Goenka and Kumar Sangakkara engaged in sagacious and engrossing deliberations over Indian Premier League (IPL) salaries breaching the glass ceiling. \"Mini auctions… [+4277 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ESPN India"
            },
            "author": "ESPN News Services",
            "title": "Neymar to miss 2024 Copa América in U.S. - Brazil doctor - ESPN - ESPN India",
            "description": "Brazil forward Neymar will miss the 2024 Copa América in the United States because of a serious knee injury suffered in October, Brazilian team doctor Rodrigo Lasmar said Tuesday.",
            "url": "https://www.espn.in/football/story/_/id/39150720/neymar-miss-2024-copa-america-us-injury-brazil-doctor",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1024%2Fr1242778_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-20T01:23:00Z",
            "content": "Brazil forward Neymar will miss the 2024 Copa América in the United States because of a serious knee injury he suffered in October, Brazilian team doctor Rodrigo Lasmar said Tuesday.\r\nThe Al Hilal st… [+1787 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "cricket.com.au"
            },
            "author": "Laura Jolly",
            "title": "McGrath, Healy mark start of new era in India | cricket.com.au - cricket.com.au",
            "description": "Australia’s newly-installed captain and vice-captain have prioritised maintaining the strong bond…",
            "url": "https://www.cricket.com.au/news/3829561/tahlia-mcgrath-alyssa-healy-new-leadership-era-australia-women-cricket-strong-bonds-india-multi-format-series-tour",
            "urlToImage": "https://resources.cricket-australia.pulselive.com/cricket-australia/photo/2023/12/19/52eae868-0a8e-4ec7-8c99-d53c42599b8b/20mcgrath.jpg",
            "publishedAt": "2023-12-19T23:56:17Z",
            "content": "Australias newly-installed captain and vice-captain have prioritised maintaining the strong bond that exists within the squadThe insular nature of a month-long tour of India is the perfect time for A… [+5716 chars]"
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
              "name": "India.com"
            },
            "author": "Piyush Singh Thapa",
            "title": "IPL 2024: RCB Head Joins Hands When Josh Hazlewood`s Name Came Up For Bidding, Hilarious Picture Goes Viral - Zee News",
            "description": "JOSH HAZLEWOOD UNSOLD... RCB reaction when asked about Josh Hazelwood#iplauction2024#IPL2024Auction #IPLAuction pic.twitter.comX8FD9PE8nt — RAM Kumar (@7a2475be20c0405) December 19, 2023 In other news, Uncapped Indian pacer Yash Dayal was sold to Royal Challe…",
            "url": "https://zeenews.india.com/cricket/ipl-2024-rcb-head-joins-hands-when-asked-about-josh-hazlewood-during-auction-hilarious-picture-goes-viral-2700882.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/19/1338873-ipl-53.png",
            "publishedAt": "2023-12-19T16:06:39Z",
            "content": "Royal Challengers Bangalore (RCB) Head Rajesh V Menon had a hilarious reaction as Australian fast bowler Josh Hazlewood came up for bidding during the IPL 2024 auction. Hazlewood was one of the top p… [+1837 chars]"
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
              "name": "Insidesport.in"
            },
            "author": "Anukul Chauhan",
            "title": "Mallika Sagar blunder causes confusion in IPL 2024 Auction as LSG, RCB clash - InsideSport",
            "description": "Auctioneer Mallika Sagar blunder causes confusion in IPL 2024 Auction as LSG and RCB clash over M Siddharth.",
            "url": "https://www.insidesport.in/cricket/mallika-sagar-blunder-causes-confusion-in-ipl-2024-auction-as-lsg-rcb-clash/",
            "urlToImage": "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-05-at-10.12.59.jpeg",
            "publishedAt": "2023-12-19T13:19:48Z",
            "content": "In a surprising turn of events at the IPL 2024 Auction, Mallika Sagar, the auctioneer, found herself in a moment of confusion during the bidding war for M Siddharth. The base price was set at 20 lakh… [+2337 chars]"
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
          }
        ]
      },
      {
        "entertainment": [
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "BB17: Ankita suggests divorce after Vicky talks about sufferings of married men - Hindustan Times",
            "description": "In a Bigg Boss 17 episode, Ayesha Khan asked Vicky Jain about married life. He said that married men can never share how much they suffer.",
            "url": "https://www.hindustantimes.com/entertainment/tv/bigg-boss-17-ankita-lokhande-says-let-s-get-a-divorce-after-vicky-jain-talks-about-sufferings-of-married-men-101703153706837.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/vicky_ankita_1698390358054_1703154724062.jpg",
            "publishedAt": "2023-12-21T10:39:01Z",
            "content": "Bigg Boss 17 witnessed another fight between contestants and couple Ankita Lokhande and Vicky Jain. In the latest episode of the reality show, Bigg Boss gave the contestants a nomination task and it … [+2538 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Animal box office collection day 20: Ranbir Kapoor film dips to ₹5 cr - Hindustan Times",
            "description": "Animal box office collection day 20: The Sandeep Reddy Vanga film stands at ₹528 crore in India. Beginning Thursday, it faces competition with Dunki. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/animal-box-office-collection-day-20-ranbir-kapoor-film-dips-to-rs-5-crore-as-it-wraps-up-theatrical-run-101703139078730.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/animal__1703141027822_1703141028099.jpg",
            "publishedAt": "2023-12-21T07:04:11Z",
            "content": "Animal box office collection: The Ranbir Kapoor film had been experiencing a dip in numbers ever since it entered its third week. The Sandeep Reddy Vanga film fell down further on Wednesday with coll… [+2342 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Akanksha Agnihotri",
            "title": "World Saree Day 2023: 5 saree trends that are set to dominate fashion in 2024 - Hindustan Times",
            "description": "From the regal allure of banarasi weaves to the sheer sophistication of tissue silk, check out top 5 saree trends poised to rule the fashion scene in 2024. | Fashion Trends",
            "url": "https://www.hindustantimes.com/lifestyle/fashion/world-saree-day-2023-from-pastel-sequins-to-bold-neon-5-saree-trends-that-are-set-to-dominate-fashion-charts-in-2024-101703137690379.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/26ac7ebb-2204-4b0d-aaa1-802febb93d7b_1703139437064_1703139441524.jpg",
            "publishedAt": "2023-12-21T06:20:44Z",
            "content": "World Saree Day is celebrated on December 21 to celebrate the rich cultural heritage and timeless elegance of the saree. This year, traditional weaves take centre stage, bringing back the charm of ag… [+3614 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Entertainment Desk",
            "title": "Salaar vs Dunki advance box office: Prabhas’ action-thriller increases lead over Shah Rukh Khan’s comedy drama - The Indian Express",
            "description": "Salaar vs Dunki advance box office: Prabhas' action-thriller is dominating the mass belts and single screens, but Shah Rukh Khan's comedy-drama is the first choice in the north.",
            "url": "https://indianexpress.com/article/entertainment/bollywood/salaar-vs-dunki-advance-box-office-prabhas-action-thriller-increases-lead-over-shah-rukh-khans-comedy-drama-9076966/",
            "urlToImage": "https://images.indianexpress.com/2023/12/dunki-vs-salaar.jpg",
            "publishedAt": "2023-12-21T04:01:17Z",
            "content": "Shah Rukh Khan-starrer Dunki was finally released in theatres on December 21. According to industry tracker Sacnilk, Dunki minted Rs 15.41 crore in advance sales, having sold over two lakh tickets at… [+1655 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Karisma, Kareena, Saif chill at Taimur's football-theme bash at Pataudi Palace - Hindustan Times",
            "description": "Taimur dressed up in Messi's 10 jersey for his football theme birthday party in the sun. His cousin Kiaan was also twinning with him. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/karisma-kapoor-kareena-kapoor-saif-ali-khan-chill-at-taimurs-birthday-at-pataudi-palace-101703126684959.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/taimur_7th_birthday_bash_1703128798460_1703128798680.jpg",
            "publishedAt": "2023-12-21T03:26:47Z",
            "content": "Kareena Kapoor and Saif Ali Khan chose to celebrate their elder son Taimur's seventh birthday at the Pataudi Palace on Wednesday. Karisma Kapoor and her son Kiaan also joined them for the celebration… [+2175 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Jasmine Bhasin reveals when will she marry boyfriend Aly Goni; meets her childhood friend after a decade - Times of India",
            "description": "Jasmine Bhasin and Aly Goni, popular celebrities known for their adorable couple moments, continue to captivate their fans with their sweet clicks and",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/jasmine-bhasin-reveals-when-will-she-marry-boyfriend-aly-goni-meets-her-childhood-friend-after-a-decade/articleshow/106168207.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106168303,width-1070,height-580,imgsize-1194453,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-21T02:59:56Z",
            "content": "'Bigg Boss 14' famed Aly Goni misses love of his life Jasmin Bhasin; pens heartwarming note"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": null,
            "title": "Aquaman 2 Movie Review: Jason Momoa Film Is A Deep Dive Into The Final Act Of DCEU - Times Now",
            "description": "Aquaman 2 Movie Review: Jason Momoa Film Is A Deep Dive Into The Final Act Of DCEU, English News, Times Now",
            "url": "https://www.timesnownews.com/entertainment-news/reviews/hollywood/aquaman-2-movie-review-jason-momoa-film-is-a-deep-dive-into-the-final-act-of-dceu-review-106154763",
            "urlToImage": "https://static.tnn.in/thumb/msid-106154636,thumbsize-35482,width-1280,height-720,resizemode-75/106154636.jpg",
            "publishedAt": "2023-12-21T02:44:25Z",
            "content": "Joel Kinnaman,Catalina Sandino Moreno,Kid Cudi"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Banhisha Kundu",
            "title": "“Can't believe some people already knew”: Fans react as several ARMYs claim a Spotify glitch allegedly spoilt Jimin's upcoming release days ago - Sportskeeda",
            "description": "With a press release on the South Korean social media network Weverse, Bighit Music (now HYBE Labels) revealed on December 20, 2023, that BTS' Jimin will be releasing his new digital song, Closer Than",
            "url": "https://www.sportskeeda.com/pop-culture/news-can-t-believe-people-already-knew-fans-react-several-armys-claim-spotify-glitch-allegedly-spoilt-jimin-s-upcoming-release-days-ago",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/3c1bf-17031006711633-1920.jpg",
            "publishedAt": "2023-12-21T02:27:00Z",
            "content": "With a press release on the South Korean social media network Weverse, Bighit Music (now HYBE Labels) revealed on December 20, 2023, that BTS' Jimin will be releasing his new digital song, Closer Tha… [+2302 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "The best Indian movies of the year, from two Mammootty masterpieces to Kanu Behl’s Agra and Aamir Bashir’s Maagh - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/entertainment/the-best-indian-movies-of-2023-kaathal-agra-winter-within-sthal-9059815/",
            "urlToImage": null,
            "publishedAt": "2023-12-21T02:25:54Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Shrenu Parikh's grand engagement and sangeet ceremony, Bride-to-be performs a dreamy dance with beau Aksh - Times of India",
            "description": "Shrenu Parikh and Akshay Mhatre are getting married today in Vadodara. The wedding blends Gujarati and Maharashtrian cultures. Yesterday, they had the",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/shrenu-parikhs-grand-engagement-and-sangeet-ceremony-bride-to-be-performs-a-dreamy-dance-with-beau-akshay-mhatre-bffs-surbhi-chandna-and-mansi-srivastava-share-pics/articleshow/106167242.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106167291,width-1070,height-580,imgsize-1187490,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-21T01:52:58Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Bigg Boss Telugu season-7 winner Pallavi Prashanth for disturbing peace - Hindustan Times",
            "description": "A case has been registered against Pallavi Prashanth and his fans for unlawful assembly and vandalism outside Annapurna Studios post Bigg Boss Telugu 7 finale.",
            "url": "https://www.hindustantimes.com/entertainment/tv/bigg-boss-telugu-7-winner-pallavi-prashanth-arrested-after-his-fans-vandalised-amardeeps-car-post-finale-101703119801594.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/pallavi_prashanth_1703121132289_1703121138958.jpg",
            "publishedAt": "2023-12-21T01:23:12Z",
            "content": "Bigg Boss Telugu season-7 winner Pallavi Prashanth was arrested in Hyderabad on Wednesday for allegedly disturbing peace near the Annapurna Studios after the show finale, ANI reported. According to t… [+2229 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Santanu Das",
            "title": "Maestro review: Carey Mulligan delivers the performance of her career - Hindustan Times",
            "description": "Bradley Cooper's Maestro examines Leonard Bernstein's life through the lens of his complicated marriage to Felicia (played by Carey Mulligan). | Hollywood",
            "url": "https://www.hindustantimes.com/entertainment/hollywood/maestro-review-carey-mulligan-delivers-the-performance-of-her-career-in-leonard-bernstein-biopic-101703089518232.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/maestro_1703091227490_1703091227770.png",
            "publishedAt": "2023-12-21T00:46:06Z",
            "content": "Who was Leonard Bernstein? The first great American conductor, composer and pianist, best known for his work on West Side Story. He was also a devoted husband to Felicia Montealegre, the Chilean-Cost… [+4027 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Devansh Sharma",
            "title": "Mona Singh interview: 'All the work I've done this year is because of Laal Singh Chaddha' - Hindustan Times",
            "description": "In an exclusive interview, Mona Singh talks about the year 2023 was, how she looks back at Laal Singh Chaddha, and the two-decade journey across platforms. | Web Series",
            "url": "https://www.hindustantimes.com/entertainment/web-series/mona-singh-interview-laal-singh-chaddha-bulbul-jauhari-made-in-heaven-kaala-paani-kafas-101702972644617.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/IMG_0219_1_1702981465464_1702981506063.jpg",
            "publishedAt": "2023-12-21T00:44:43Z",
            "content": "As soon as I meet Mona Singh, I tell her I won't be exaggerating if I pronounce 2023 as her year. She laughs and responds, And I won't be modest about it either. With three shows Kafas on SonyLIV, Ma… [+9453 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Dunki box office collection Day 1 early estimates: Shah Rukh Khan starrer eyeing Rs 30 crore debut - IndiaTimes",
            "description": "Shah Rukh Khan's highly anticipated film 'Dunki', directed by Rajkumar Hirani, has finally been released worldwide. The movie has received mixed revie",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/box-office/dunki-box-office-collection-day-1-early-estimates-shah-rukh-khan-starrer-eyeing-rs-30-crore-debut/articleshow/106166526.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106166518,width-1070,height-580,imgsize-91962,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-21T00:00:46Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Kasamh Se stars Ram Kapoor and Prachi Desai finally reunite; the former says, “still looking like the little baby I knew 18-years ago” - Times of India - Times of India",
            "description": "Popular TV show Kasamh Se, starring Prachi Desai and Ram Kapoor, made fans nostalgic with their adorable reunion picture on social media. The reunion",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/kasamh-se-stars-ram-kapoor-and-prachi-desai-finally-reunite-the-former-says-still-looking-like-the-little-baby-i-knew-18-years-ago/articleshow/106164007.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106164004,width-1070,height-580,imgsize-28532,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T22:00:00Z",
            "content": "'Bada maskha laga rahe ho': Janhvi Kapoor reacts cutely as paparazzo compliments her saying, 'aapko dekh liya...'"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "TN Entertainment Desk",
            "title": "KWK 8: Ajay Devgn DEFENDS Nepotism, Says 'Generations Worked Hard To Reach Here, Struggle Sabke Liye Barabar H - Times Now",
            "description": "Koffee With Karan 8: After Sunny Deol, Ananya Panday and many more stars, Ajay Devgn has shared his views on the nepotism debate. Read to know what the B-town stars has to say.",
            "url": "https://www.timesnownews.com/entertainment-news/bollywood/koffee-with-karan-8-ajay-devgn-defends-nepotism-says-generations-worked-hard-to-reach-here-struggle-sabke-liye-barabar-hai-article-106163747",
            "urlToImage": "https://static.tnn.in/thumb/msid-106163865,thumbsize-971051,width-1280,height-720,resizemode-75/106163865.jpg",
            "publishedAt": "2023-12-20T20:42:46Z",
            "content": "Disha Patani-Mouni Roy Dish Out Major Friendship Goals As They Enjoy Thailand Vacay Together. See PICS"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Is Arbaaz Khan dating make-up artist Shura Khan, post break up with Giorgia Andriani? Here's what we know - IndiaTimes",
            "description": "Arbaaz Khan, who previously dated Giorgia Andriani after his separation from Malaika Arora, has reportedly found love again with Bollywood makeup arti",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/is-arbaaz-khan-dating-make-up-artist-shura-khan-post-break-up-with-giorgia-andriani-heres-what-we-know-/articleshow/106162615.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106162615,width-1070,height-580,imgsize-23804,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T17:33:01Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Koimoi"
            },
            "author": "Koimoi",
            "title": "Amid Salaar Vs Dunki, Prashant Neel Compares Prabhas With Shah Rukh Khan Reacting To The Box Office Disasters Of His Leading Man, “1 Flop Or 20 Flops…” - Koimoi",
            "description": null,
            "url": "https://www.koimoi.com/south-indian-cinema/amid-salaar-vs-dunki-prashant-neel-compares-prabhas-with-shah-rukh-khan-reacting-to-the-box-office-disasters-of-his-leading-man-1-flop-or-20-flops/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T17:12:39Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Alia Bhatt Reacts To Katrina Kaif's Merry Christmas Trailer: \"Very Very Cool\" - NDTV Movies",
            "description": "Besides Alia Bhatt, Katrina Kaif's husband Vicky Kaushal and industry friend Varun Dhawan also reacted to the trailer",
            "url": "https://www.ndtv.com/entertainment/alia-bhatt-reacts-to-katrina-kaifs-merry-christmas-trailer-very-very-cool-4711796",
            "urlToImage": "https://c.ndtvimg.com/2023-12/u4erdj2g_priyanka-_625x300_20_December_23.jpg",
            "publishedAt": "2023-12-20T17:10:48Z",
            "content": "Image was shared on X. (courtesy: aliafanpage)\r\nNew Delhi: Katrina Kaif just dropped the trailer of her upcoming film Merry Christmas alongside Vijay Sethupathi and her friends from Bollywood cannot … [+1283 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Shah Rukh Khan On Son Abram Recreating His Iconic Pose: \"Our Whole Family Loves Hugs\" - NDTV Movies",
            "description": "It so happened that a fan shared a collage of a picture of AbRam from his annual school function and that of SRK from Dunki, striking a similar pose",
            "url": "https://www.ndtv.com/entertainment/shah-rukh-khan-on-son-abram-recreating-his-iconic-pose-our-whole-family-loves-hugs-4711472",
            "urlToImage": "https://c.ndtvimg.com/2023-12/5pp2e4r_priyanka-_625x300_20_December_23.jpg",
            "publishedAt": "2023-12-20T16:14:05Z",
            "content": "Image was shared on X. (courtesy: SRKfanclub)\r\nNew Delhi: Last week, Shah Rukh Khan's son AbRam Khan thrilled the Internet after he recreated his dad's iconic pose for his school annual function. Now… [+1536 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Entertainment Desk",
            "title": "Sandeep Reddy Vanga on his female characters in Animal: ‘The way Rashmika was calling Ranbir, felt like she was calling a kid’ - The Indian Express",
            "description": "Sandeep Reddy Vanga spoke about the equation between the film's lead characters - Ranbir Kapoor's Ranvijay and Rashmika Mandanna's Geetanjali - and how women in his films are bold.",
            "url": "https://indianexpress.com/article/entertainment/bollywood/sandeep-reddy-vanga-on-his-female-characters-in-animal-the-way-rashmika-was-calling-ranbir-felt-like-she-was-calling-a-kid-9076530/",
            "urlToImage": "https://images.indianexpress.com/2023/12/Ranbir-5.jpg",
            "publishedAt": "2023-12-20T16:13:13Z",
            "content": "Sandeep Reddy Vanga is currently basking in the success of his latest film Animal. While the movie is being criticised for glorifying toxic masculinity and violence, it continues to mint money at the… [+1709 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Inside Mouni Roy's Holiday Diaries With Her \"Favourite Girl\" Disha Patani - NDTV Movies",
            "description": "Mouni and Disha can be seen enjoying themselves",
            "url": "https://www.ndtv.com/entertainment/inside-mouni-roys-holiday-diaries-with-her-favourite-girl-disha-patani-4711414",
            "urlToImage": "https://c.ndtvimg.com/2023-12/n9pppahg_mouni-_625x300_20_December_23.jpg",
            "publishedAt": "2023-12-20T16:04:46Z",
            "content": "Mouni Roy shared this image. (courtesy: MouniRoy)\r\nNew Delhi: BFFs Mouni Roy and Disha Patani went on a girls' trip and they are enjoying themselves to the fullest. Mouni Roy shared images from their… [+1356 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Deepika Padukone papped outside dubbing studio; Malaika Arora's latest gym look leaves fans impressed - Times of India",
            "description": "Deepika Padukone, who will soon be seen in the much awaited Siddharth Anand's 'Fighter' alongside Hrithik Roshan, was papped exiting a studio in Bandra recently. 'Fighter' will hit the theaters on January 25, 2024. While fitness queen Malaika Arora once again…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/deepika-padukone-papped-outside-dubbing-studio-malaika-aroras-latest-gym-look-leaves-fans-impressed/videoshow/106158113.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106158113,imgsize-59544.cms",
            "publishedAt": "2023-12-20T15:05:00Z",
            "content": "Dec 20, 2023, 08:35PM ISTSource: etimes.inDeepika Padukone, who will soon be seen in the much awaited Siddharth Anand's 'Fighter' alongside Hrithik Roshan, was papped exiting a studio in Bandra recen… [+328 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Entertainment Desk",
            "title": "‘Main Atal Hoon’ trailer: Pankaj Tripathi brings alive Atal Bihari Vajpayee - India Today",
            "description": "The trailer of the film 'Main Atal Hoon', a biopic on the life of Atal Bihari Vajpayee, has been unveiled. It will be released in theatres on January 19.",
            "url": "https://www.indiatoday.in/movies/bollywood/story/main-atal-hoon-trailer-pankaj-tripathi-atal-bihari-vajpayee-biopic-2478478-2023-12-20",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/the-trailer-of-main-atal-hoon-is-now-out-203712891-16x9_0.jpg?VersionId=QIsvNDdJMaAYm.35iGEBshuJoGXTJtQD",
            "publishedAt": "2023-12-20T14:43:37Z",
            "content": "Atal Bihari Vajpayee, one of the most beloved leaders of the nation, is renowned for his contributions to education, science, infrastructure, and strengthening global ties. Bringing his humble journe… [+2447 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Shreyas Talpade gets discharged from hospital after suffering from heart attack; wife Deepti confirms he - IndiaTimes",
            "description": "Shreyas Talpade, who suffered a heart attack on the sets of 'Welcome to The Jungle', has been discharged from the hospital after undergoing an angiopl",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/shreyas-talpade-gets-discharged-from-hospital-after-suffering-from-heart-attack-wife-deepti-confirms-he-is-home-safe-and-sound-see-post/articleshow/106160464.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106160464,width-1070,height-580,imgsize-15670,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T14:41:53Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "People Media Factory is like my home banner: Ravi Teja at Eagle trailer launch - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/people-media-factory-is-like-my-home-banner-ravi-teja-at-eagle-trailer-launch.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-20T14:33:00Z",
            "content": "Mass Maharaja Ravi Teja will be next seen in the film Eagle, which is helmed by Karthik Ghattamaneni. The team released the trailer at an event today. Ravi Teja was overwhelmed with the response of t… [+934 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Entertainment Desk",
            "title": "Fighter song Ishq Jaisa Kuch teaser: Hrithik Roshan and Deepika Padukone raise the hotness quotient - The Indian Express",
            "description": "Fighter song Ishq Jaisa Kuch: Hrithik Roshan and Deepika Padukone's sizzling number builds anticipation for the film.",
            "url": "https://indianexpress.com/article/entertainment/bollywood/fighter-song-ishq-jaisa-kuch-teaser-hrithik-roshan-and-deepika-padukone-raise-the-hotness-quotient-9076090/",
            "urlToImage": "https://images.indianexpress.com/2023/12/WhatsApp-Image-2023-12-20-at-5.13.18-AM.jpeg",
            "publishedAt": "2023-12-20T14:18:00Z",
            "content": "After showcasing their impeccable dance moves in the first song “Sher Khul Gaye” from their upcoming film Fighter, Hrithik Roshan and Deepika Padukone are ready to captivate audiences once again with… [+1309 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Entertainment Desk",
            "title": "Sameer Wankhede reacts to SRK's viral ‘Bete ko haath...' dialogue from 'Jawan' - India Today",
            "description": "Sameer Wankhede has reacted to Shah Rukh Khan's viral dialogue from 'Jawan' and has called it 'roadside.' Wankhede quoted another writer to respond to it.",
            "url": "https://www.indiatoday.in/movies/bollywood/story/sameer-wankhede-reacts-to-shah-rukh-khans-viral-bete-ko-haath-dialogue-from-jawan-says-its-roadside-2478429-2023-12-20",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/srk-203622970-16x9_0.jpg?VersionId=2aKexO7uu0W5W0le_AiOxEJih0kCPwkF",
            "publishedAt": "2023-12-20T13:08:04Z",
            "content": "When the trailer of Jawan was released, Shah Rukh Khan's dialogue 'Bete ko hath lagane se pehle baap se baat kar' (Before laying your hand on the son, speak to his father) went viral. Now Sameer Wank… [+1998 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "BIGBANG's G-Dragon parts ways with YG Entertainment days after acquittal in drugs case, agency issues statement - Hindustan Times",
            "description": "Galaxy Corporation announced that they will hold a press conference to explain G-Dragon’s drug-related case, acquittal and discuss his activities for next year.",
            "url": "https://www.hindustantimes.com/entertainment/music/bigbang-g-dragon-parts-ways-with-yg-entertainment-days-after-acquittal-in-drugs-case-agency-issues-statement-101703071922206.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/g_dragon_1699257391797_1703074602044.jfif",
            "publishedAt": "2023-12-20T12:22:49Z",
            "content": "BIGBANGs G-Dragon parted ways with his agency YG Entertainment days after he was acquitted of his drug-related charges. As per a report by Soompi, YG Entertainment issued a statement confirming the s… [+2174 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Ram Charan, Upasana Offer Prayers At Mumbai's Mahalaxmi Temple On Daughter Klin Kaara's 6-Month Birth Anniversary - NDTV Movies",
            "description": "In another video from inside the temple, the trio can be seen praying with folded hands",
            "url": "https://www.ndtv.com/entertainment/ram-charan-upasana-offer-prayers-at-mumbais-mahalaxmi-temple-on-daughter-klin-kaaras-6-month-birth-anniversary-4710005",
            "urlToImage": "https://c.ndtvimg.com/2023-12/o0l0ejeo_priyanka-_625x300_20_December_23.jpg",
            "publishedAt": "2023-12-20T12:05:24Z",
            "content": "Ram Charan, Upasana and Klin Kaara in Mumbai's Mahalaxmi temple\r\nNew Delhi: RRR star Ram Charan, his wife Upasana Konidela and their daughter Klin Kaara paid a visit to Mumbai's Mahalaxmi temple on W… [+1953 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "'Now I get 3 of you': Deepika Padukone's reaction to husband Ranveer Singh's wax figures goes viral - Times of India",
            "description": "Actor Ranveer Singh, who was last seen playing 'Rocky Singh Randhawa' in 'Rocky Aur Rani Kii Prem Kahaani', has become the latest celebrity to get his wax figures at Madame Tussauds Wax Museum in London. The actor recently took to his Instagram handle and sha…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/now-i-get-3-of-you-deepika-padukones-reaction-to-husband-ranveer-singhs-wax-figures-goes-viral/videoshow/106156901.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106156901,imgsize-94136.cms",
            "publishedAt": "2023-12-20T12:05:00Z",
            "content": "Dec 20, 2023, 05:35PM ISTSource: etimes.inActor Ranveer Singh, who was last seen playing 'Rocky Singh Randhawa' in 'Rocky Aur Rani Kii Prem Kahaani', has become the latest celebrity to get his wax fi… [+922 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "Adivi Sesh and Shruti Haasan’s film is titled Dacoit; Intriguing title teaser out now - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/adivi-sesh-and-shruti-haasans-film-is-titled-dacoit-intriguing-title-teaser-out-now.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-20T10:42:00Z",
            "content": "Adivi Sesh surprised the audience by announcing a film with Shruti Haasan. Today, the makers announced that the movie is named Dacoit. Also, a title teaser has been unveiled, and it looks intriguing.… [+799 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Randeep Hooda and Lin Laishram: Body language expert decodes the newly-married couple's relationship - IndiaTimes",
            "description": "Newlyweds Randeep Hooda and Lin Laishram have become the talk of the town, with their enchanting journey into marriage captivating the nation's attention.",
            "url": "https://timesofindia.indiatimes.com/life-style/relationships/love-sex/randeep-hooda-and-lin-laishram-body-language-expert-decodes-the-newly-married-couples-relationship/photostory/106154091.cms",
            "urlToImage": "https://static.toiimg.com/photo/106154110.cms",
            "publishedAt": "2023-12-20T10:31:58Z",
            "content": "In this picture, Lin Laishram looks absolutely stunning as she lovingly gazes at her partner, Randeep Hooda. Her poised stance, with slightly separated feet, reflects her dedication and genuine appro… [+625 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Salman Khan Schools Paparazzi Crowding Mother Salma At Sohail's Birthday Bash: \"Peeche Hato Sab\" - NDTV Movies",
            "description": "Salman Khan accompanied his mother Salma Khan",
            "url": "https://www.ndtv.com/entertainment/salman-khan-schools-paparazzi-crowding-mother-salma-at-sohails-birthday-bash-peeche-hato-sab-4708594",
            "urlToImage": "https://c.ndtvimg.com/2023-12/eo01u4h8_salman-khan-_625x300_20_December_23.jpeg",
            "publishedAt": "2023-12-20T09:45:00Z",
            "content": "Salman Khan pictured at Sohail Khan's birthday party.\r\nNew Delhi: Salman Khan and family attended the birthday party hosted by Sohail Khan last night in Mumbai. As Salman Khan was escorting his mothe… [+1491 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "INDIATODAY",
            "title": "South celebrity weddings of 2023 - India Today",
            "description": "From Varun Tej-Lavanya Tripathi to Amala Paul-Jagat Desai, many South celebrities got married in 2023. Let's take a look.",
            "url": "https://www.indiatoday.in/visualstories/entertainment/south-celebrity-weddings-of-2023-83243-20-12-2023",
            "urlToImage": "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/12/slide-1-8_1200_675_1703063424.jpg",
            "publishedAt": "2023-12-20T09:10:54Z",
            "content": "Varun Tej and Lavanya Tripathi have been dating since 2016. They got married in Tuscany, Italy, on November 1."
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Anupamaaa's 5-year leap: Anupamaa suffers from separation trauma while Vanraj and Leela are back to their - Times of India",
            "description": "Anupamaa takes a 5-year leap, revealing drastic changes in characters' lives. Anupamaa suffers from separation trauma, living alone and without contac",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/anupamaaas-5-year-leap-anupamaa-suffers-from-separation-trauma-while-vanraj-and-leela-are-back-to-their-toxic-selves-netizens-express-disappointment/articleshow/106150633.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106150705,width-1070,height-580,imgsize-1348931,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T08:48:37Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Soumi Pyne",
            "title": "Tarot Card Readings: Tarot daily prediction for December 20, 2023 - Hindustan Times",
            "description": "Let us delve into your daily tarot predictions for December 20, 2023. | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/tarot-card-readings-tarot-daily-prediction-for-december-20-2023-101703060358144.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/tarot_card_1692887718235_1703060408880.jpg",
            "publishedAt": "2023-12-20T08:44:51Z",
            "content": "Aries:\r\nTarot card: Nine of Pentacles\r\nToday, it's okay to treat yourself a little, even if you don't have a lot of extra money. Maybe buy yourself a small luxury, like a fancy chocolate or something… [+3358 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CarToq.com"
            },
            "author": "Shantonil Nag",
            "title": "Bollywood actor Shahid Kapoor buys Maybach GLS600 SUV worth Rs 3.5 crore [Video] - CarToq.com",
            "description": "Bollywood actor Shahid Kapoor has added a second Maybach to his garage. The actor and his wife Mira Kapoor received the new Mercedes-Maybach GLS600 SUV at their home in Mumbai. The new SUV finished in emerald green has also got the “0700” VIP registration num…",
            "url": "https://www.cartoq.com/bollywood-actor-shahid-kapoor-buys-maybach-gls600-suv-worth-rs-3-5-crore-video/",
            "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/12/shahid-kapoor-mira-maybach-gls-featured-1.jpg",
            "publishedAt": "2023-12-20T08:34:29Z",
            "content": "Bollywood actor Shahid Kapoor has added a second Maybach to his garage. The actor and his wife Mira Kapoor received the new Mercedes-Maybach GLS600 SUV at their home in Mumbai. The new SUV finished i… [+3349 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": null,
            "title": "Kareena Kapoor praises Ranbir Kapoor and Bobby Deol, takes a dig at actors flaunting 'six-pack abs': 'Please yaar, wear your t-shirt first' - Times of India",
            "description": "Kareena Kapoor recently shared her views on actors wanting to be superstars and also praised her cousin-actor Ranbir Kapoor. During an interview with Film Companion, the actress said that being a good actor and a big star goes like ‘hand in glove’. Kareena re…",
            "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/kareena-kapoor-praises-ranbir-kapoor-and-bobby-deol-takes-a-dig-at-actors-flaunting-six-pack-abs-please-yaar-wear-your-t-shirt-first/videoshow/106149291.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106149291,imgsize-39642.cms",
            "publishedAt": "2023-12-20T08:20:00Z",
            "content": "Dec 20, 2023, 01:50PM ISTSource: etimes.inKareena Kapoor recently shared her views on actors wanting to be superstars and also praised her cousin-actor Ranbir Kapoor. During an interview with Film Co… [+1085 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Mumtaz's niece Shahnaaz Randhawa CLARIFIES, she has NOT sung Bobby Deol's entry song 'Jamal Kudu' from 'A - IndiaTimes",
            "description": "Mumtaz's niece Shahnaaz Randhawa denies reports that she's sung Bobby Deol's entry song 'Jamal Kudu' from 'Animal', she says she just has knowledge of",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/mumtazs-niece-shahnaaz-randhawa-clarifies-she-has-not-sung-bobby-deols-entry-song-jamal-kudu-from-animal/articleshow/106149413.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106149380,width-1070,height-580,imgsize-69600,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T08:13:11Z",
            "content": "Sonakshi Sinha commands attention in stunning sharara set"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "Bigg Boss 17: Aishwarya Sharma calls Munawar Faruqui and Ayesha Khan’s growing proximity ‘fake’; watch pr - Times of India",
            "description": "In the upcoming episodes of Bigg Boss 17, viewers will witness the blossoming bond between Munawar Faruqui and Ayesha Khan. A promo shared by the chan",
            "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-aishwarya-sharma-calls-munawar-faruqui-and-ayesha-khans-growing-proximity-fake-watch-promo/articleshow/106148979.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106149165,width-1070,height-580,imgsize-50060,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T08:09:25Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Aoora's family upset about his limited screen time on Bigg Boss 17 - Hindustan Times",
            "description": "Aoora is a K-pop singer. He went inside the Bigg Boss house as a wild card contestant.",
            "url": "https://www.hindustantimes.com/entertainment/tv/aooras-family-upset-about-his-limited-screen-time-on-bigg-boss-17-his-kindness-innocence-are-being-mocked-101703053652210.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/aoora_1703055740114_1703055740401.png",
            "publishedAt": "2023-12-20T07:13:49Z",
            "content": "K-pop star Aoora's family expressed displeasure with Bigg Boss 17 after he joined the show. He is a wild card contestant on the Salman Khan show. In a statement, his family claimed that the singer's … [+2705 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Bobby Deol’s character in Animal is a Muslim because ‘we see people convert to Islam, but nobody converts to Hinduism’: Sandeep Reddy Vanga - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/entertainment/bollywood/sandeep-reddy-vanga-explains-why-bobby-deol-character-in-animal-is-a-muslim-9075625/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T06:56:37Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Ankita Lokhande says she hid her break-up with Sushant Singh Rajput for 2 years, thought he would return to her - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/entertainment/television/ankita-lokhande-says-she-hid-her-break-up-with-sushant-singh-rajput-for-2-years-thought-he-would-return-to-her-9075710/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T06:55:57Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Onmanorama.com"
            },
            "author": "Onmanorama Staff",
            "title": "Kerala High Court considers ‘plagiarism’ plea filed against ‘Neru’ makers, refuses to stay release | Onmanorama - Onmanorama",
            "description": "The petitioner – scriptwriter Deepak Unni-- alleged that Jeethu Joseph and Neru co-scriptwriter Shanti Mayadevi forcibly bought a copy (49 pages) of his story three years ago.",
            "url": "https://www.onmanorama.com/entertainment/entertainment-news/2023/12/20/kerala-high-court-neru-filmmakers-jeethu-joseph-script-plagiarism-allegation.html",
            "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2023/12/20/neru-two.jpg",
            "publishedAt": "2023-12-20T06:51:31Z",
            "content": "The Kerala High Court on Wednesday issued a legal notice to the makers of Neru on a writ petition filed by a person alleging that the director and the screenplay writer of the film had stolen his scr… [+848 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Google shares top 10 most searched celebrities in 2023 in India - IndiaTimes",
            "description": "Google recently updated its Most Searched Celebrities in India in 2023 with people from the sports and entertainment world taking the space. Let's take a look.",
            "url": "https://timesofindia.indiatimes.com/etimes/trending/google-shares-top-10-most-searched-celebrities-in-2023-in-india/photostory/106130121.cms",
            "urlToImage": "https://static.toiimg.com/photo/106130124.cms",
            "publishedAt": "2023-12-20T06:30:00Z",
            "content": "David Beckham never goes out of style and time. This football icon is a brand within himself and is known for his iconic number 7 jersey and free kicks. Winning the Champions League, six Premier Leag… [+210 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gulte"
            },
            "author": "Shree Ram",
            "title": "Sarkaru Naukari Trailer: Singer Sunitha’s Son Debut - Gulte",
            "description": "https://youtu.be/BW3QjZOdu4Q Singer Sunitha's son Akash Goparaju is making his debut as an actor with an upcoming Telugu film titled Sarkaru Naukari. Unlike other youngsters, Akash has taken a unique approach to his acting debut. Starring in a rural drama, Ak…",
            "url": "https://www.gulte.com/movienews/273227/sarkaru-naukari-trailer-singer-sunithas-son-debut",
            "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/12/BW3QjZOdu4Qhd.jpg",
            "publishedAt": "2023-12-20T06:19:14Z",
            "content": "Singer Sunitha’s son Akash Goparaju is making his debut as an actor with an upcoming Telugu film titled Sarkaru Naukari. Unlike other youngsters, Akash has taken a unique approach to his acting debut… [+1090 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Akanksha Agnihotri",
            "title": "Malaika Arora stuns in glamorous Arpita Mehta ensemble. Her outfit costs ₹44k - Hindustan Times",
            "description": "Malaika Arora is raising the temperature with her stunning look in an ethnic three-piece printed ensemble by Arpita Mehta that is sure to steal your heart.",
            "url": "https://www.hindustantimes.com/photos/lifestyle/malaika-arora-stuns-in-glamorous-arpita-mehta-ensemble-sets-trendy-fashion-benchmarks-her-outfit-costs-44k-101703049696482.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/36804d51-70e4-4ae5-a788-d839c3a38c31_1703049689298_1703050081828.jpg",
            "publishedAt": "2023-12-20T05:56:50Z",
            "content": "Published on Dec 20, 2023 11:26 AM IST\r\nMalaika Arora is raising the temperature with her stunning look in an ethnic three-piece printed ensemble by Arpita Mehta that is sure to steal your heart. ...… [+19 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Filmcompanion.in"
            },
            "author": "Anushka Halve",
            "title": "2023 Wrap: The Coolest Heroines of the Year - FILM COMPANION",
            "description": "Mainstream Hindi entertainment has a bad track record when it comes to giving heroines their due, but if 2023 is any indication, we may be on the brink of chang",
            "url": "https://www.filmcompanion.in/fc-wrap-2023/2023-wrap-the-coolest-heroines-of-the-year-nayanthara-konkona-sen-sharma",
            "urlToImage": "https://media.assettype.com/filmcompanion%2F2023-12%2F38cc2f5f-1b96-4581-9f05-f023614f65e3%2FCoolest_Heroines_EOY_lead.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
            "publishedAt": "2023-12-20T04:00:00Z",
            "content": "Mainstream Hindi entertainment has a bad track record when it comes to giving heroines their due, but if 2023 is any indication, we may be on the brink of change. This year we got some of the coolest… [+1392 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bollywood Hungama"
            },
            "author": "Bollywood Hungama",
            "title": "Aamir Khan anticipates Shah Rukh Khan’s Dunki; he, Ranbir Kapoor, Vicky Kaushal extend wishes to Rajkumar Hirani on two decades in Bollywood: “The industry has truly been blessed” - Bollywood Hungama",
            "description": "Aamir Khan anticipates Shah Rukh Khan’s Dunki; he, Ranbir Kapoor, Vicky Kaushal extend wishes to Rajkumar Hirani on two decades in Bollywood: “The industry has truly been blessed” Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrit…",
            "url": "https://www.bollywoodhungama.com/news/features/aamir-khan-anticipates-shah-rukh-khans-dunki-ranbir-kapoor-vicky-kaushal-extend-wishes-rajkumar-hirani-two-decades-bollywood-industry-truly-blessed/",
            "urlToImage": "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/12/Aamir-Khan-anticipates-Shah-Rukh-Khans-Dunki-he-Ranbir-Kapoor-Vicky-Kaushal-extend-wishes-to-Rajkumar-Hirani-on-two-decades-in-Bollywood.jpg",
            "publishedAt": "2023-12-20T03:27:50Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "From Deepika Padukone 'looking like a wow' to Ananya Panday-Aditya Roy Kapur cosying up in Portugal, the most viral social media moments of 2023 - IndiaTimes",
            "description": "From Deepika Padukone 'looking like a wow' to Ananya Panday-Aditya Roy Kapur cosying up in Portugal, the most viral social media moments of 2023",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/from-deepika-padukone-looking-like-a-wow-to-ananya-panday-aditya-roy-kapur-cosying-up-in-portugal-the-most-viral-social-media-moments-of-2023/photostory/106126775.cms",
            "urlToImage": "https://static.toiimg.com/photo/106127633.cms",
            "publishedAt": "2023-12-20T02:30:00Z",
            "content": "At the 69th National Awards ceremony held in New Delhi, a moment of cross-industry camaraderie unfolded as Bollywood actress Kriti Sanon, honored for her role in 'Mimi,' shared the National Award sta… [+362 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Justshowbiz.net"
            },
            "author": "Justshowbiz",
            "title": "YRKKH: Abhira turns cupid to unite Armaan, Ruhi's incomplete love - Justshowbiz",
            "description": null,
            "url": "https://www.justshowbiz.net/yrkkh-abhira-turns-cupid-to-unite-armaan-ruhis-incomplete-love/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T01:39:57Z",
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
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Hrithik Roshan wishes ex-wife Sussanne Khan's boyfriend Arslan Goni on his birthday, calls him a 'brother' - Hindustan Times",
            "description": "Hrithik Roshan's girlfriend Saba Azad also wished Arslan Goni. All four of them: Hrithik, Saba, Sussanne Khan and Arslan are friends.  | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/hrithik-roshan-wishes-ex-wife-sussanne-khans-boyfriend-arslan-goni-on-his-birthday-101703033525187.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/hrithik_arslan_goni_1703035239196_1703035239431.jpg",
            "publishedAt": "2023-12-20T01:23:00Z",
            "content": "Hrithik Roshan is friends with his ex-wife Sussanne Khan as well as her boyfriend Arslan Goni. On Tuesday, the actor wished him on his birthday. He took to his Instagram Stories to share a sweet mess… [+2411 chars]"
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
            "title": "Pisces Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Pisces horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/pisces-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2022/06/Pisces-866x487.jpg",
            "publishedAt": "2023-12-20T00:20:31Z",
            "content": "What does pleasure mean to you, wild child, and how do you find joy in your everyday life? Something to think about as you devote yourself to the art of pleasure and the art of beauty. Theres so much… [+381 chars]"
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
            "title": "Libra Horoscope Today: December 20, 2023 - VOGUE India",
            "description": "Read VOGUE India's free daily Libra horoscope for 20th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
            "url": "https://www.vogue.in/horoscope/product/libra-horoscope-today-december-20-2023/",
            "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Libra.jpg",
            "publishedAt": "2023-12-20T00:20:03Z",
            "content": "Does it matter? Does it matter what others say or dont say, Libra. This is your journey, your path, your purpose. So trust your path and purpose as you promise to make your life as magical as you pos… [+220 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "PTI",
            "title": "2 ‘dupe’ banker of Rs 18 crore, sell him fake Bawa and Souza art - Times of India",
            "description": "A case of forgery was filed against an art dealer and another man for allegedly duping a banker of Rs 17.",
            "url": "https://timesofindia.indiatimes.com/city/mumbai/two-booked-for-selling-fake-paintings-of-manjit-bawa-francis-newton-souza-worth-rs-18-crore/articleshow/106135411.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106142740,width-1070,height-580,imgsize-42082,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-19T22:10:10Z",
            "content": "Nita Ambani's diamond necklace to Isha Ambani's choker: Beautiful jewellery pieces owned by the Ambani ladies"
          },
          {
            "source": {
              "id": null,
              "name": "allkpop"
            },
            "author": "Sophie-Ha",
            "title": "Park Bo Gum and BLACKPINK's Lisa dazzle at 'CELINE' event in Bangkok - allkpop",
            "description": "Park Bo Gum&nbsp;and&nbsp;BLACKPINK's&nbsp;Lisa&nbsp;stole the show at the Celine event in Bangkok.On December 19, the two Celine a…",
            "url": "https://www.allkpop.com/article/2023/12/park-bo-gum-and-blackpinks-lisa-dazzle-at-celine-event-in-bangkok",
            "urlToImage": "https://www.allkpop.com/upload/2023/12/content/191550/web_data/allkpop_1703021344_untitled-1.jpg",
            "publishedAt": "2023-12-19T22:00:00Z",
            "content": "Park Bo Gum and BLACKPINK's Lisa stole the show at the Celine event in Bangkok.\r\nOn December 19, the two Celine ambassadors appeared at the Celine pop-up store opening event in Bangkok, Thailand.\r\nTh… [+384 chars]"
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
              "name": "Hindustan Times"
            },
            "author": "Dr J.N Pandey",
            "title": "Leo Daily Horoscope Today, December 20, 2023 predicts a successful venture - Hindustan Times",
            "description": "Read Leo daily horoscope for Dec 20, 2023 to know your astrological predictions. Embrace a new relationship today. | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/leo-daily-horoscope-today-december-20-2023-predicts-a-successful-venture-101702998907430.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/leo_monthly_horoscope_1690875818840_1703002113980.jpg",
            "publishedAt": "2023-12-19T18:34:13Z",
            "content": "Leo (23rd July to 22nd August)\r\nDaily Horoscope Prediction says, challenges make you\r\nYour romantic life is packed with fun today while professional success is your companion. Financially you are goo… [+2775 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Sakshi Verma",
            "title": "Bigg Boss 17: Abhishek Kumar calls Ankita Lokhande a gold digger, fans react - India TV News",
            "description": "Abhishek Kumar's aggressive behavior has often been discussed in Salman Khan's hosted show Bigg Boss 17. In the recent episode, Abhishek was seen venturing out his anger on Vicky and then Ankita.",
            "url": "https://www.indiatvnews.com/entertainment/tv/bigg-boss-17-abhishek-kumar-calls-ankita-lokhande-a-gold-digger-fans-react-2023-12-19-908059",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/bigg-boss-17-1-1703007377.jpg",
            "publishedAt": "2023-12-19T17:42:47Z",
            "content": "The reality show Bigg Boss 17 seems to be at an interesting stage these days. On one hand, Ayesha Khan's revelations regarding Munawar Faruqui have created a stir, while on the other hand, the fights… [+1588 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Quint"
            },
            "author": "Quint Entertainment",
            "title": "In Pics: Kareena Kapoor & Saif Ali Khan Soak Up the Winter Sun at Pataudi Palace - The Quint",
            "description": "Kareena Kapoor and Saif Ali Khan are enjoying Christmas holidays at their ancestral home, the Pataudi Palace, in Bhopal. On Tuesday, the Jaane Jaan actor shared a glimpse of her sun-kissed winter breakfast table.",
            "url": "https://www.thequint.com/photos/in-pics-kareena-kapoor-saif-ali-khan-soak-up-the-winter-sun-at-pataudi-palace",
            "urlToImage": "https://images.thequint.com/thequint%2F2023-12%2Fc6d585a1-0090-4780-9dd0-492ef91de419%2FUntitled_design__40_.jpg?rect=0%2C3%2C1920%2C1008",
            "publishedAt": "2023-12-19T16:31:02Z",
            "content": "Kareena Kapoor and Saif Ali Khan are enjoying Christmas holidays at their ancestral home, the Pataudi Palace, in Bhopal. On Tuesday, the Jaane Jaan actor shared a glimpse of her sun-kissed winter bre… [+378 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "News18"
            },
            "author": "Akriti Anand",
            "title": "Munawar Faruqui Cheated, Claims Nazila; Shweta Bachchan Says Abhishek Bachchan A Better Actor Than Aishwary - News18",
            "description": "From Munawar Faruqui to Shweta Bachchan, check out all important news of the day",
            "url": "https://www.news18.com/movies/munawar-faruqui-cheated-claims-nazila-shweta-bachchan-says-abhishek-bachchan-a-better-actor-than-aishwarya-8710444.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/nazila-wrap-2023-12-9c1d1fe1b4e11c23ab61b30ef7dcf2c4-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2023-12-19T16:29:02Z",
            "content": "In a shocking turn of events, Munawar Faruquis former girlfriend Nazila Sitanshi has made some massive revelations about the stand-up comedian, who is currently inside the Bigg Boss 17 house. On Mond… [+2460 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Entertainment Desk",
            "title": "BTS Monuments: J-hope says he didn't care about company, revisits band's journey - India Today",
            "description": "The makers released a brand new promo of upcoming BTS documentary, 'BTS Monuments: Beyond the Star.' The documentary releases this December on Disney Plus Hotstar.",
            "url": "https://www.indiatoday.in/television/web-series/story/bts-monuments-beyond-the-star-video-j-hope-says-he-didnt-care-about-company-revisits-bands-journey-2477996-2023-12-19",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/bts-monuments-beyond-the-star-194442242-16x9_0.jpg?VersionId=I91DoRyQTWGJ9FmxPd4vn1TDUdi0G5dT",
            "publishedAt": "2023-12-19T14:29:25Z",
            "content": "Another clip from upcoming BTS documentary, BTS Monuments: Beyond the Star, was recently shared on Disney Plus' official handle. In the video, we see BTS rapper and BTS singer J-hope and Jimin revisi… [+1043 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "123telugu.com"
            },
            "author": null,
            "title": "HanuMan: Huge suspense around the actor playing Lord Hanuman - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/hanuman-huge-suspense-around-the-actor-playing-lord-hanuman.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-12-19T13:43:00Z",
            "content": "This morning, team HanuMan unleashed the theatrical trailer, and it took the audience by surprise. The visuals are superb, considering the movie is made on a limited budget. But one doubt that is on … [+599 chars]"
          }
        ]
      },
      {
        "technology": [
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Divyanshi Sharma",
            "title": "Meta testing feature to let users preview their posts before publishing, all you need to know - India Today",
            "description": "Instagram is rolling out a new post preview feature, enabling users to have a final glance at their posts before publishing.",
            "url": "https://www.indiatoday.in/technology/news/story/meta-testing-feature-to-let-users-preview-their-posts-before-publishing-all-you-need-to-know-2478920-2023-12-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/instagram-20410277-16x9.jpg?VersionId=WmhdfaSMhO5D12ZOJMAXeHtRv0OPGiX6",
            "publishedAt": "2023-12-21T12:04:10Z",
            "content": "Instagram has billions of users across the globe and people love sharing snippets from their life on the photo and video sharing platform. Now, imagine if you could get a look at what your post would… [+2988 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Bikewale.com"
            },
            "author": "Pratik Bhanushali",
            "title": "2024 Honda CBR600RR launched in Europe - BikeWale",
            "description": "Honda has launched the 2024 CBR600RR in Europe. The Japanese supersport has made a comeback after years of hiatus",
            "url": "https://www.bikewale.com/news/2024-honda-cbr600rr-launched-in-europe/",
            "urlToImage": "https://imgd.aeplcdn.com/642x336/n/cw/ec/167131/honda-front-view0.jpeg?isig=0&q=80",
            "publishedAt": "2023-12-21T11:42:44Z",
            "content": "- Powered by a 599cc inline four-cylinder engine\r\n- Features LED illumination, traction control, anti-wheelie and more\r\n- Currently available internationally only\r\nHonda has launched the 2024 CBR600R… [+1508 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "YouTuber MKBHD rates 2023 smartphones: Unexpected ‘Best Phone Of The Year’ pick - Hindustan Times",
            "description": "Marques Brownlee has unveiled his Mobile Awards of the Year. Check the winners here.",
            "url": "https://www.hindustantimes.com/technology/youtuber-mkbhd-rates-2023-smartphones-iphone-15-pro-max-samsung-s23-ultra-not-best-phone-google-pixel-8-is-101703150242530.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/IMG_0483_1703151381590_1703151396594.jpeg",
            "publishedAt": "2023-12-21T11:25:42Z",
            "content": "Renowned tech YouTuber Marques Keith Brownlee, also known as MKBHD, has recently disclosed his highly anticipated Mobile Awards of the Year, showcasing top-performing smartphones launched in 2023. Br… [+2616 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Neeraj Bansal",
            "title": "Rockstar finally adds Bravado Dorado in GTA Online with the new update today - Sportskeeda",
            "description": "GTA Online has just got a brand-new weekly update today (December 21, 2023), adding the highly anticipated Bravado Dorado as part of The Chop Shop DLC drip-feed content.",
            "url": "https://www.sportskeeda.com/gta/news-rockstar-finally-adds-bravado-dorado-gta-online-new-update-today",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/3f4a4-17031567881122-1920.jpg",
            "publishedAt": "2023-12-21T11:21:00Z",
            "content": "GTA Online has just got a brand-new weekly update today (December 21, 2023), adding the highly anticipated Bravado Dorado as part of The Chop Shop DLC drip-feed content. The 4-door SUV is now availab… [+2232 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Affiliate Desk",
            "title": "Explore the 10 most affordable OTG under ₹3,000 - Hindustan Times",
            "description": "In this comprehensive guide, we will uncover the top 10 most affordable OTG priced under Rs. 3000 that are perfect for flexible cooking.",
            "url": "https://www.hindustantimes.com/technology/explore-the-10-most-affordable-otg-under-rs-3000-101703141614718.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/otg_oven_1703148655317_1703148655522.jpg",
            "publishedAt": "2023-12-21T11:20:55Z",
            "content": "The Oven Toaster Grill is a wonderful example of how price and efficiency are compatible in the home kitchen. The marketplace provides a wide variety of OTGs under Rs. 3,000 for people looking for ec… [+21161 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Nidesh Acharya",
            "title": "Arknights Hortus de Escapismo Side Story update: New events, Operators, gameplay mechanics, and more - Sportskeeda",
            "description": "Hypergryph is introducing a new side story event in Arknights, titled Hortus de Escapismo, which introduces one 6-star and two 5-star Operators.",
            "url": "https://www.sportskeeda.com/esports/arknights-hortus-de-escapismo-side-story-update-new-events-operators-gameplay-mechanics",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/04ae1-17031555440688-1920.jpg",
            "publishedAt": "2023-12-21T11:15:00Z",
            "content": "Hypergryph is introducing a new side story event in Arknights, titled Hortus de Escapismo, which introduces one 6-star and two 5-star Operators. Players can also get a new furniture set and several o… [+5529 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Sportsrush"
            },
            "author": "Adnan Juzar Kachwala",
            "title": "How Valorant Mobile Has The Potential To Upset The Mobile Gaming Market - The SportsRush - The Sportsrush",
            "description": "Valorant Mobile is sure to be a successful title upon release. However, does it have the potential to upset the market? Let's see.",
            "url": "https://thesportsrush.com/gaming-news-valorant-mobile-potential-upset-mobile-gaming-market/",
            "urlToImage": "https://cdn-wp.thesportsrush.com/2023/12/eae68f37-valorant-cover.jpg",
            "publishedAt": "2023-12-21T10:50:36Z",
            "content": "The rumors for Valorant Mobiles release have put the mobile gaming community on edge. Games like PUBG, Apex Legends, and Genshin Impact dominate the mobile gaming space. However, if the marketing for… [+5881 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Mobile World Live"
            },
            "author": "Chris Donkin",
            "title": "Samsung extends self-repair to new markets, foldables - Mobile World Live",
            "description": "Samsung opened its smartphone self-repair scheme to a swathe of new European countries alongside widening the list of supported devices.",
            "url": "https://www.mobileworldlive.com/devices/samsung-extends-self-repair-to-new-markets-foldables/",
            "urlToImage": "https://assets.mobileworldlive.com/wp-content/uploads/2023/12/21102914/MWL_Samsung_repair_fold_650.jpg",
            "publishedAt": "2023-12-21T10:44:57Z",
            "content": "Samsung Electronics added a swathe of new European countries to its official smartphone self-repair scheme, alongside widening the list of supported devices to include its latest generation of foldab… [+1016 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Technological Disruption in Gastroenterology by Dr. Prateek Sharma - ETHealthWorld",
            "description": "Dr. Prateek Sharma, a distinguished figure in the field of gastroenterology, is set to lead an enlightening webinar titled \"Technological Disruption in Gastr...",
            "url": "https://www.youtube.com/watch?v=a-F7AMYImGA",
            "urlToImage": "https://i.ytimg.com/vi/a-F7AMYImGA/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgTyg-MA8=&rs=AOn4CLDo2jdiG7NoDwLCuj_x9-GErA2H2A",
            "publishedAt": "2023-12-21T10:38:59Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "Samsung announces Medications tracking feature to its Health app - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/samsung-announces-medications-tracking-feature-to-its-health-app-3946579",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/4aba9b37c9c955a89f1e505d27cef3eb_w_800_h_450.jpg",
            "publishedAt": "2023-12-21T10:18:24Z",
            "content": "Seoul, Dec 21 (IANS) Samsung has announced a new Medications tracking feature to its Health app that will help users manage their health more comprehensively.The feature will first be available in th… [+1749 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX fires up Starship engines in major test of Mars-bound rocket - The Independent",
            "description": "SpaceX tested the engines of its Starship rocket on Wednesday 20 December in what was seen as a major test of the spaceship's abilities.The craft was tested ...",
            "url": "https://www.youtube.com/watch?v=GrmhItk4TOk",
            "urlToImage": "https://i.ytimg.com/vi/GrmhItk4TOk/maxresdefault.jpg",
            "publishedAt": "2023-12-21T09:56:22Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "10 NEW Games of January 2024 To Look Forward To - GamingBolt",
            "description": "As eventful as 2023 has been, 2024 is upon us and offers all kinds of new titles to get excited about. Tekken 8 is one of the heavier hitters, with Bandai Na...",
            "url": "https://www.youtube.com/watch?v=P0v1TMCl4kc",
            "urlToImage": "https://i.ytimg.com/vi/P0v1TMCl4kc/maxresdefault.jpg",
            "publishedAt": "2023-12-21T09:30:05Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Education Diary"
            },
            "author": "iednewsdesk",
            "title": "realme C67 5G sets new benchmark with highest offline sales in C Series - India Education Diary",
            "description": "realme's unwavering commitment to making 5G technology accessible to all, particularly the tech-enthusiast younger generation, has propelled the consistent growth of its 5G product range. As a frontrunner in popularising authentic 5G experiences",
            "url": "https://indiaeducationdiary.in/realme-c67-5g-sets-new-benchmark-with-highest-offline-sales-in-c-series/",
            "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2023/12/202312213097042.png",
            "publishedAt": "2023-12-21T09:02:47Z",
            "content": "realme’s unwavering commitment to making 5G technology accessible to all, particularly the tech-enthusiast younger generation, has propelled the consistent growth of its 5G product range.\r\nAs a front… [+3706 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Last-minute tech gifts to give this holiday season - Hawaii News Now",
            "description": "Few things are more humiliating during the holidays as someone giving you a gift and you've got nothing for them.For more Local News from Hawaii News Now: ht...",
            "url": "https://www.youtube.com/watch?v=TOk-Y3w1FnQ",
            "urlToImage": "https://i.ytimg.com/vi/TOk-Y3w1FnQ/maxresdefault.jpg",
            "publishedAt": "2023-12-21T07:58:17Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Mridul Dutta",
            "title": "How to get all Police Outfits in GTA Online using simple glitches? - Sportskeeda",
            "description": "The Police or Law Enforcement Outfits are some of the rarest apparel in GTA Online. Rockstar Games offers them only through special missions and removes them once you complete the job.",
            "url": "https://www.sportskeeda.com/gta/how-get-police-outfits-gta-online-using-simple-glitches",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/8642b-17031446643141-1920.jpg",
            "publishedAt": "2023-12-21T07:54:00Z",
            "content": "The Police or Law Enforcement Outfits are some of the rarest apparel in GTA Online. Rockstar Games offers them only through special missions and removes them once you complete the job. However, a You… [+2841 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Investing.com"
            },
            "author": "IANS",
            "title": "Lava launches new 5G smartphone with 6.78-inch display, 8GB RAM - Investing.com India",
            "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
            "url": "https://in.investing.com/news/lava-launches-new-5g-smartphone-with-678inch-display-8gb-ram-3946425",
            "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/cb92fdb333133c5a9a9c97aca8ae0004_w_800_h_450.jpg",
            "publishedAt": "2023-12-21T07:48:03Z",
            "content": "New Delhi, Dec 21 (IANS) Domestic smartphone brand Lava on Thursday launched a new smartphone -- Storm 5G, with a 6-78-inch display and 8GB of RAM.\r\nThe smartphone will be available in two colour var… [+1465 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Aarnesh Shrivastava",
            "title": "\"My bad for not knowing\" - xQc responds to Ken Carson asking if he's \"racist\" after streamer confuses rapper with Ja Morant - Sportskeeda",
            "description": "Twitch and Kick streamer Felix \"xQc\" has responded to American rapper Ken Carson's tweet about him.",
            "url": "https://www.sportskeeda.com/esports/news-my-bad-knowing-xqc-responds-ken-carson-asking-racist-streamer-confuses-rapper-ja-morant",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/4e259-17031418605212-1920.jpg",
            "publishedAt": "2023-12-21T07:18:00Z",
            "content": "Twitch and Kick streamer Felix \"xQc\" has responded to American rapper Ken Carson's tweet about him. For context, on December 20, 2023, X (formerly Twitter) user @Still1600 posted an 11-second clip fr… [+2315 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "Google has introduced VideoPOET breaking new ground in coherent video generation - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/2023/12/21/google-videopoet-10-second-coherent-video-generation/",
            "urlToImage": null,
            "publishedAt": "2023-12-21T07:17:37Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "India Today Lifestyle Desk",
            "title": "Louis Vuitton's wireless earphones go viral for its whopping price. They cost... - India Today",
            "description": "Luxury fashion house Louis Vuitton has forayed into the realm of earbuds with the product LV Horizon Light Up Earphones.",
            "url": "https://www.indiatoday.in/lifestyle/fashion/story/louis-vuittons-wireless-earphones-go-viral-for-its-whopping-price-they-cost-2478739-2023-12-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/louis-vuitton-earphones-211016857-16x9_0.jpg?VersionId=dqxsZPITdMFI97j33ioKwNABHcLMBUfp",
            "publishedAt": "2023-12-21T07:14:50Z",
            "content": "Earbuds, for a lot of us, have become an imperative part of life. A lot of us now prefer using earbuds to listen to music and answer calls , instead of regular wired earphones. Luxury fashion house L… [+1472 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India Today"
            },
            "author": "Ankita Garg",
            "title": "Samsung Galaxy A15 5G and Galaxy A25 5G set to launch in India on December 26 - India Today",
            "description": "Samsung is all set to launch its latest Galaxy A15 5G and Galaxy A25 5G smartphones in India on December 26. The company has confirmed the launch event and even revealed some of the key features of the mid-range phones.",
            "url": "https://www.indiatoday.in/technology/news/story/samsung-galaxy-a15-5g-and-galaxy-a25-5g-set-to-launch-in-india-on-december-26-2478738-2023-12-21",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/samsung-galaxy-a25-5g-210452744-16x9_0.jpg?VersionId=d9by3tvKMVMHunt4vMCGx0rPUaMby84P",
            "publishedAt": "2023-12-21T07:05:08Z",
            "content": "Samsung is all set to launch its latest Galaxy A15 5G and Galaxy A25 5G smartphones in India on December 26. The company has confirmed the launch event and even revealed some of the key features of t… [+2196 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "SamMobile"
            },
            "author": "SamMobile, Adnan Farooqui",
            "title": "Apple Vision Pro AR headset release likely set for February 2024 - SamMobile - Samsung news",
            "description": "Apple unveiled the Vision Pro, its much rumored augmented reality headset, at WWDC 2023 back in June. It will provide ...",
            "url": "https://www.sammobile.com/news/apple-vision-pro-ar-headset-release-likely-set-for-february-2024/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/06/Apple-Vision-Pro-Productivity-720x405.jpg",
            "publishedAt": "2023-12-21T06:08:00Z",
            "content": "Apple unveiled the Vision Pro, its much rumored augmented reality headset, at WWDC 2023 back in June. It will provide users with new experiences by blending digital content with the physical world. \r… [+1316 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Education Desk",
            "title": "Logical Reasoning series: Solving questions on Order and Ranking - Hindustan Times",
            "description": "Questions on order and ranking are often seen in bank job exams like SBI PO, SBI CBO, RBI Grade B and many such exams. | Competitive Exams",
            "url": "https://www.hindustantimes.com/education/competitive-exams/logical-reasoning-series-solving-questions-on-order-and-ranking-101702529848803.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/14/1600x900/_db5f02a0-5830-11e8-b87b-3dd7d8bd63e9_1702546525176.jpg",
            "publishedAt": "2023-12-21T04:33:37Z",
            "content": "Logical reasoning questions in competitive exams are designed in a way that candidates can either score well if they are prepared or waste time over the question making their efforts futile.\r\nAmong t… [+2486 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Myntra’s MyFashionGPT predicts the clothes you need, runs on Microsoft Azure - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/technology/artificial-intelligence/myntra-microsoft-collaboration-myfashiongpt-azure-9074891/lite/",
            "urlToImage": null,
            "publishedAt": "2023-12-21T04:19:08Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Samsung teases Galaxy AI, Unpacked event likely to take place on January 18 - The Indian Express",
            "description": "At the Galaxy Unpacked 2024, Samsung is likely to announce the upcoming Galaxy S24 series of smartphones.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/samsung-galaxy-s24-unpacked-ai-event-jan-18-9076992/",
            "urlToImage": "https://images.indianexpress.com/2023/12/galaxy-unpacked-2024.jpg",
            "publishedAt": "2023-12-21T03:52:53Z",
            "content": "Samsungs Galaxy S24 series of smartphones are arriving with a host of generative AI features. According to Evan Blass, a prominent smartphone leaker, the South Korean tech giant will host the 2024 ed… [+1557 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Internet"
            },
            "author": "https://www.facebook.com/thehackernews",
            "title": "Urgent: New Chrome Zero-Day Vulnerability Exploited in the Wild - Update ASAP - The Hacker News",
            "description": "Google releases urgent security updates for Chrome! A zero-day vulnerability (CVE-2023-7024) in WebRTC could lead to program crashes or code execution",
            "url": "https://thehackernews.com/2023/12/urgent-new-chrome-zero-day.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtPtLYLiUVyDVoOvYMskc34lS1lZO0D5AW0m5KJozxAtziOmD5UwbDiAdwVMmmGQoqY_EgaDGznGZQSR12F7YRz6QuXZTJB3oVJvyYtUdmBkPNO3oPPNQH0gW2baB9ks1Paw0x5_Wv1BeC0RtgTy9VP9YJq-LrICZGdJTdhmwXtWj09vC7NGQqRP9MYF0l/s728-rw-ft-e30/chrome.jpg",
            "publishedAt": "2023-12-21T03:41:00Z",
            "content": "Google has rolled out security updates for the Chrome web browser to address a high-severity zero-day flaw that it said has been exploited in the wild.\r\nThe vulnerability, assigned the CVE identifier… [+1413 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Aman Gupta",
            "title": "ChatGPT gets new ‘archive chats’ feature. Here's how it works | Mint - Mint",
            "description": "OpenAI's chatbot, ChatGPT, now allows users to archive their chats, removing them from the sidebar without deleting them. The feature is available on Web and iOS, with Android support coming soon.",
            "url": "https://www.livemint.com/ai/artificial-intelligence/openai-chatgpt-gets-new-archive-chats-feature-heres-how-it-works-11703124100111.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/21/1600x900/Europe-Artificial-Intelligence-0_1703124438968_1703124453808.jpg",
            "publishedAt": "2023-12-21T02:54:28Z",
            "content": "OpenAI has announced that its premium generative AI-based offering, ChatGPT, now allows users to archive their chats, essentially removing them from the sidebar without deleting the conversation. The… [+2268 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Samsung rolls out critical security update for its oldest WearOS smartwatch - Times of India",
            "description": "Gadgets News News: Samsung launched the Galaxy Watch 4 lineup in 2021, which includes two models: Galaxy Watch 4 and Galaxy Watch 4 Classic. These smartwatches initially",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/samsung-rolls-out-critical-security-update-for-its-oldest-wearos-smartwatch/articleshow/106161607.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106161586,width-1070,height-580,imgsize-12282,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-21T02:44:20Z",
            "content": "<ul><li>News</li>\r\n<li>Gadgets News</li>\r\n<li>Samsung rolls out critical security update for its oldest WearOS smartwatch</li></ul>\r\nSamsung launched the Galaxy Watch 4 lineup in 2021, which includes… [+346 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "Poco X6 Pro 5G appears on the UAE's TDRA; Launch Expected In January - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/2023/12/21/poco-x6-pro-5g-appears-on-the-uaes-tdra-launch-expected-in-january/",
            "urlToImage": null,
            "publishedAt": "2023-12-21T01:23:08Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Written by Vishal Upadhyay",
            "title": "Oppo's A59 5G launch – What to expect from the budget-friendly smartphone? Deets inside - India TV News",
            "description": "Oppo is creating a buzz with a sneak peek into its upcoming budget-friendly smartphone, the A59 5G, set to launch soon in India. The teaser hints at a stylish design, including a dual rear camera setup and a water-drop notch. T",
            "url": "https://www.indiatvnews.com/technology/news/oppo-teases-a59-5g-check-expected-features-launch-date-and-more-2023-12-21-908239",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/oppo-a59-5g-1703119590.jpg",
            "publishedAt": "2023-12-21T01:10:29Z",
            "content": "Excitement is brewing as Oppo drops hints about its next smartphone, the Oppo A59 5G, set to make waves in India's budget-friendly market. The teaser poster, captioned \"coming soon,\" gives us a glimp… [+1789 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tech Wire Asia"
            },
            "author": "Aaron Raj",
            "title": "Who hacked Sony's Insomniac video game data? - Tech Wire Asia",
            "description": "The video game industry continues to be a prime target for cybercriminals as hackers release data from Sony's Insomniac games onto dark web.",
            "url": "https://techwireasia.com/12/2023/how-did-hackers-leak-sonys-video-game-plans/",
            "urlToImage": "https://techwireasia.com/wp-content/uploads/2023/12/video_game_3.jpg",
            "publishedAt": "2023-12-21T00:47:08Z",
            "content": "<ul><li>Sonys Insomniac Games’ internal data has made its way to the dark web</li><li>Hackers released video game data after failing to get a response from Sony. </li><li>The Insomniac hack is just o… [+6211 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Afaqs.com"
            },
            "author": "Akshit Pushkarna",
            "title": "As the cookies crumble, digital agencies pivot to contextual advertising - afaqs!",
            "description": "In the absence of cookies, agencies are now focusing on first-party data, prioritising compliance while pushing the envelope with creativity.",
            "url": "https://www.afaqs.com/news/digital/as-the-cookies-crumble-digital-agencies-pivot-to-contextual-advertising",
            "urlToImage": "https://media.assettype.com/afaqs%2F2023-12%2F1320ce28-4957-4773-aabe-d7e24c90d8a1%2FUntitled_design___2023_12_20T224715_963.png?w=1200&auto=format%2Ccompress&ogImage=true",
            "publishedAt": "2023-12-21T00:00:00Z",
            "content": "In the absence of cookies, agencies are now focusing on first-party data, prioritising compliance while pushing the envelope with creativity.\r\nWhile the year that just passed may not have been partic… [+10070 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "msnNOW"
            },
            "author": null,
            "title": "An iPhone thief stole up to $2 million by watching people type their passcodes. Here's how to protect yourself. - MSN",
            "description": null,
            "url": "https://www.msn.com/en-in/lifestyle/smart-living/an-iphone-thief-stole-up-to-2-million-by-watching-people-type-their-passcodes-here-s-how-to-protect-yourself/ar-AA1lOdPJ",
            "urlToImage": null,
            "publishedAt": "2023-12-20T20:46:52Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Most Searched Products",
            "title": "Best Vitamin D3 Supplements Available Online - Times of India",
            "description": "Most Searched Products News: Buy Vitamin D3 supplements that simplify the absorption of calcium, a crucial mineral for overall strength.",
            "url": "https://timesofindia.indiatimes.com/most-searched-products/health-and-fitness/health-care/best-vitamin-d3-supplements-available-online/articleshow/106163698.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106163709,width-1070,height-580,imgsize-835110,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T20:21:05Z",
            "content": "Vitamin D3 supplements have been associated with enhanced immune function, aiding the body in effectively combating infections and illnesses. Read more about the several benefits of these supplements"
          },
          {
            "source": {
              "id": null,
              "name": "Android Police"
            },
            "author": "Krystle Vermes",
            "title": "WhatsApp is testing video and audio sharing so you can host watch parties again - Android Police",
            "description": "The feature is being tested in WhatsApp beta for iOS and under development for Android",
            "url": "https://www.androidpolice.com/whatsapp-audio-video-sharing/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/05/whatsapp-beta-google-play-hero.jpg",
            "publishedAt": "2023-12-20T20:10:00Z",
            "content": "Summary\r\n<ul><li> WhatsApp is developing a new feature that allows users to share their phone's screen along with audio for immersive communication, enhancing the app's functionality. </li><li> The f… [+3349 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Voicebot.ai"
            },
            "author": "Eric Hal Schwartz",
            "title": "Microsoft and TomTom Unveil Generative AI Car Voice Assistant - Voicebot.ai",
            "description": "Navigation tech developer TomTom and Microsoft have collaborated on a new generative AI vehicular voice assistant. The new voice assistant..",
            "url": "https://voicebot.ai/2023/12/20/microsoft-and-tomtom-unveil-generative-ai-car-voice-assistant/",
            "urlToImage": "http://voicebot.ai/wp-content/uploads/2023/12/tomtom-microsoft.png",
            "publishedAt": "2023-12-20T20:00:30Z",
            "content": "Navigation tech developer TomTom and Microsoft have collaborated on a new generative AI vehicular voice assistant. The new voice assistant will offer controls for a car’s entertainment, environment, … [+3335 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Top Tech News Today: Microsoft To Let Users Create Music Via AI, Job Scams On Instagram On Rise, More - ABP Live",
            "description": "Microsoft has integrated their capabilities into its AI-powered chatbot Copilot, in collaboration with Suno, a prominent player in artificial intelligence (AI)-based music creation.",
            "url": "https://news.abplive.com/technology/top-tech-news-today-december-20-microsoft-to-let-users-create-music-via-ai-job-scams-on-instagram-on-rise-1651425",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/21/f8b844983456f77917080fa3586013af1703097583582295_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-20T18:29:47Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Itel introduces Roar 75 open-earbuds: Price, features and more - Times of India",
            "description": "Itel expands audio portfolio with Roar 75 earbuds featuring 14.2mm dynamic drivers, lightweight design, dual pairing, titanium metal body, IPX5 water",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/itel-introduces-roar-75-open-earbuds-price-features-and-more/articleshow/106163169.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106163169,width-1070,height-580,imgsize-2147726,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T18:25:33Z",
            "content": "5G phones with IR blaster under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "gizmochina"
            },
            "author": "gizmochina",
            "title": "Truke Clarity Six TWS earbuds with 13mm drivers, ENC & 80 hours of playtime launched in India - gizmochina",
            "description": null,
            "url": "https://www.gizmochina.com/2023/12/20/truke-clarity-six-tws-earbuds-launched/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T17:25:11Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Sportskeeda"
            },
            "author": "Zeeshan Khan",
            "title": "PUBG Mobile solo vs squad guide (December 2023) - Sportskeeda",
            "description": "The 1 vs. 4 encounter, in which a single player faces off against a whole squad, is one of the most difficult scenarios in PUBG Mobile.",
            "url": "https://www.sportskeeda.com/esports/pubg-mobile-solo-vs-squad-guide-december-2023",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/a926e-17028765225357-1920.jpg",
            "publishedAt": "2023-12-20T16:09:00Z",
            "content": "The 1 vs. 4 encounter, in which a single player faces off against a whole squad, is one of the most difficult scenarios in PUBG Mobile. This mode helps you develop and refine the necessary skills to … [+2925 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Forbes"
            },
            "author": "Mark Minevich",
            "title": "Google’s Gemini: Challenging OpenAI ChatGPT And Changing The Game - Forbes",
            "description": "Google rocked the technology world with the unveiling of Gemini - an artificial intelligence system representing their most significant leap in AI capabilities.",
            "url": "https://www.forbes.com/sites/markminevich/2023/12/20/googles-gemini-challenging-openai-chatgpt-and-changing-the-game/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65830a8aa2b11d4e5224bc5d/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2023-12-20T15:46:11Z",
            "content": "Gemini on website displayed on a laptop screen and Google logo displayed on a phone screen are seen ... [+] in this illustration photo taken in Krakow, Poland on December 6, 2023. (Photo by Jakub Por… [+13155 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "OnePlus 12 Series, Galaxy S24 Lineup, More: Top Smartphones To Launch In January 2024 - ABP Live",
            "description": "OnePlus and Vivo are confirmed to launch their OnePlus 12 series and Vivo X100 series, respectively.",
            "url": "https://news.abplive.com/technology/gadgets/smartphone-launches-flagship-january-2024-samsung-oneplus-vivo-xiaomi-redmi-top-phones-to-expect-1651396",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/20/646fb415e1e05a44dcf3cc5191cf63b31703086732672295_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2023-12-20T15:39:48Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "CNBC"
            },
            "author": "Eric Rosenbaum",
            "title": "For Microsoft and OpenAI, after a year in the 'hype cycle,' the Copilot corporate spending boom is just getting started - CNBC",
            "description": "It's more than just AI hype. A majority of top tech officers across the economy say their companies are accelerating spend on software like Microsoft Copilot.",
            "url": "https://www.cnbc.com/2023/12/20/for-microsoft-copilot-it-looks-like-2024-will-be-a-big-spending-year.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107329682-1699299150834-gettyimages-1778708098-js2_4099_isifrhca.jpeg?v=1703077452&w=1920&h=1080",
            "publishedAt": "2023-12-20T15:07:16Z",
            "content": "If 2023 was the year of generative AI hype, 2024 will be the year during which most corporations will get serious about spending on the technology to bring artificial intelligence more directly into … [+8544 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zoom"
            },
            "author": "Shubham Arora",
            "title": "Redmi Note 13 Pro Plus Price in India Tipped Ahead of January 4 Launch - Times Now",
            "description": "Leaked details ahead of Xiaomi's January 4 launch reveal the price tag of the Redmi Note 13 Pro Plus. However, considering past trends, the actual price could be below ₹30,000. Boasting an impressive feature set, including a 200MP camera and 120W fast chargin…",
            "url": "https://www.timesnownews.com/technology-science/redmi-note-13-pro-plus-price-in-india-tipped-ahead-of-january-4-launch-article-106157824",
            "urlToImage": "https://static.tnn.in/thumb/msid-106160185,thumbsize-652298,width-1280,height-720,resizemode-75/106160185.jpg",
            "publishedAt": "2023-12-20T14:24:29Z",
            "content": "Indian Student Who Went Missing, Found Dead In UK, Police Appeal For Information"
          },
          {
            "source": {
              "id": null,
              "name": "Forbes"
            },
            "author": "Jodie Cook",
            "title": "5 ChatGPT Prompts To Unlock World-Class Communication Skills - Forbes",
            "description": "Be a better communicator with these ChatGPT prompts. Share your story, engage effectively, and make people care to supercharge your business success.",
            "url": "https://www.forbes.com/sites/jodiecook/2023/12/20/5-chatgpt-prompts-to-unlock-world-class-communication-skills/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6582e88b6f750300146a9d97/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2023-12-20T13:17:26Z",
            "content": "5 ChatGPT prompts to unlock world-class communication skills \r\ngetty\r\nEven if youre the best in the world at what you do, if your communication is ineffective, you wont get far. Being able to share y… [+6302 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Zohaib Ahmed",
            "title": "How to mark entire Gmail as read or delete all mail at once - The Indian Express",
            "description": "Gain back your sanity - here's how to select all messages inbox-wide and mark as read or delete in bulk on Gmail.",
            "url": "https://indianexpress.com/article/technology/techook/how-to-mark-delete-all-mail-at-once-gmail-9076438/",
            "urlToImage": "https://images.indianexpress.com/2023/12/gmail-featured-1.jpg",
            "publishedAt": "2023-12-20T13:04:21Z",
            "content": "Weve all been there – staring helplessly at the overflowing Gmail inbox, with thousands upon thousands of unread messages taunting us. The little red notification icon induces stress every time you l… [+2124 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Beeper Mini finds another way to make iMessage work on Android - Times of India",
            "description": "Beeper has found a 'fix' for its broken 'iMessage for Android' app, Beeper Mini, allowing users to send iMessage from their Android phones. However, t",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/beeper-mini-finds-another-way-to-make-imessage-work-on-android/articleshow/106158486.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106158475,width-1070,height-580,imgsize-240266,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T12:47:04Z",
            "content": "5G phones with IR blaster under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/newsdesk/",
            "title": "Samsung Announces Massive Offers on Galaxy A14 5G, Price Starts at Rs 13,499 - India.com",
            "description": "The SAMSUNG Galaxy A14 5G's impressive features, coupled with these exciting discounts, make it an irresistible offer for anyone seeking a budget-friendly 5G phone.",
            "url": "https://www.india.com/technology/samsung-announces-massive-offers-on-galaxy-a14-5g-price-starts-at-rs-13499-6600221/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/71k8Y8gA7oL._SL1500_.jpg",
            "publishedAt": "2023-12-20T11:47:24Z",
            "content": "The SAMSUNG Galaxy A14 5G's impressive features, coupled with these exciting discounts, make it an irresistible offer for anyone seeking a budget-friendly 5G phone.\r\nThe Samsung Galaxy A14 5G now ava… [+2512 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jagran.com"
            },
            "author": "Shashvat Vats",
            "title": "Smart TV 55 Inch Price List 9 QLED And OLED Televisions Online - Jagran English",
            "description": "Smart TV 55 Inch Price List: Ever wondered what big-screen entertainment feels like? Whether you have a 55 inch smart TV or you are looking for the best TV with the same screen size, selecting the right model can be daunting. Not anymore, as we have shortlist…",
            "url": "https://english.jagran.com/top-deals/electronics/television/smart-tv-55-inch-price-list-top-qled-and-oled-televisions-online-10121738",
            "urlToImage": "https://imgeng.jagran.com/images/2023/dec/Smart TV 55 inch QLED and OLED1703071698209.jpg",
            "publishedAt": "2023-12-20T11:32:45Z",
            "content": "Smart TV 55 Inch Price List: Do you want to get an elevated viewing experience at home? If yes, then a 55 inch TV with OLED and QLED screen will give you such majestic and mind-blowing visuals that a… [+20737 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India TV News"
            },
            "author": "Edited by Saumya Nigam",
            "title": "Generative AI smartphones shipments to exceed by 100 mn in 2024 - Report - India TV News",
            "description": "The report has anticipated the emergence of smartphones which have been optimized to run on the Generative AI models, by supplementing the traditional use of artificial intelligence in smartphones.",
            "url": "https://www.indiatvnews.com/technology/news/generative-ai-smartphone-shipment-to-exceed-by-100-mn-in-2024-report-2023-12-20-908173",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/generative-ai-1703069380.jpg",
            "publishedAt": "2023-12-20T11:31:01Z",
            "content": "The recent forecast of Counterpoint Research states that the shipment of generative AI (GenAI) smartphones will surpass 100 million units in 2024. That will mark as a significant growth in the adopti… [+2428 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "India.com"
            },
            "author": "https://www.india.com/author/newsdesk/",
            "title": "Samsung, Apple, Google: Check Top 5 Smartwatches Under Rs 40000 From These Brands - India.com",
            "description": "Embrace a world of cutting-edge technology of the top 5 smartwatches under Rs 40,000 which are effortlessly woven with stunning design and advanced health features.",
            "url": "https://www.india.com/technology/samsung-apple-google-check-top-5-smartwatches-under-rs-40000-from-these-brands-6600014/",
            "urlToImage": "https://static.india.com/wp-content/uploads/2023/08/smartwatch-latest.jpg",
            "publishedAt": "2023-12-20T11:23:26Z",
            "content": "Embrace a world of cutting-edge technology of the top 5 smartwatches under Rs 40,000 which are effortlessly woven with stunning design and advanced health features.\r\nHere's our curated list of the to… [+4481 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gadgets360.com"
            },
            "author": "Nithya P Nair, Siddharth Suvarna",
            "title": "OnePlus Celebrates 10 Year Anniversary; OnePlus Nord CE 3 Lite Said to Be Best-Selling Phone on Amazon in... - Gadgets 360",
            "description": "OnePlus has pointed out the impressive sales growth achieved by its OnePlus 11R 5G and OnePlus Nord CE 3 Lite 5G smartphones in India this year. OnePlus claims that the OnePlus 11R 5G emerged as the best-selling Android premium smartphone by volume in the Rs.…",
            "url": "https://www.gadgets360.com/mobiles/news/oneplus-10-year-anniversary-amazon-premium-segment-best-selling-phones-india-4709395",
            "urlToImage": "https://i.gadgets360cdn.com/large/oneplus_11r_1703068403843.jpg",
            "publishedAt": "2023-12-20T11:17:57Z",
            "content": "OnePlus is all set to host its 'Smooth Beyond Belief' event on January 23 in India to unveil the flagship OnePlus 12 and OnePlus 12R. Ahead of the big launch event, the Chinese smartphone brand is ce… [+1719 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "WhatsApp to introduce an automatic album feature for Channels - Moneycontrol",
            "description": "When Channel admins share multiple media posts with their followers, WhatsApp will organize them automatically into albums",
            "url": "https://www.moneycontrol.com/news/technology/whatsapp-to-introduce-an-automatic-album-feature-for-channels-11933451.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/08/whatsapp-770x433.jpg",
            "publishedAt": "2023-12-20T10:49:29Z",
            "content": "WhatsApp Channels was introduced earlier this year as a new way for people and organisations to share media content with their followers. Since then, the company has been slowly rolling out new featu… [+1040 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gadgets360.com"
            },
            "author": "Siddharth Suvarna, Ketan Pratap",
            "title": "Poco C65 Review: Decent for the Price - Gadgets 360",
            "description": "The Poco C65 is the latest budget offering from the company in India. It’s got a decent set of specifications, a large display, big battery, and triple rear cameras. Here's our review of the new Poco C65. The phone is available in India via Flipkart with a st…",
            "url": "https://www.gadgets360.com/mobiles/reviews/poco-c65-review-price-india-features-4707272",
            "urlToImage": "https://i.gadgets360cdn.com/large/poco-c65-review_1703042583283.jpg",
            "publishedAt": "2023-12-20T10:27:01Z",
            "content": "The Poco C65 is the latest budget offering from the company in India. It's got a decent set of specifications, a large display, a big battery, and triple rear cameras. The latest C-series phone from … [+9624 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Social discovery app Hunch crosses 1 million users mark - Times of India",
            "description": "Hunch, an AI-driven social discovery app, allows individuals to ask anything in the form of polls and meet like-minded individuals. The app has witnes",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/social-discovery-app-hunch-crosses-1-million-users-mark/articleshow/106153512.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106153486,width-1070,height-580,imgsize-707000,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T10:12:54Z",
            "content": "5G phones with IR blaster under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Affiliate Desk",
            "title": "10 best Samsung 6.5 kg top load washing machines and competing brands compared - Hindustan Times",
            "description": "We compare the Samsung 6.5 kg top load washing machine with 9 other competitors. Discover features that set this appliance apart in the laundry game.",
            "url": "https://www.hindustantimes.com/technology/10-best-samsung-6-5-kg-top-load-washing-machines-and-competing-brands-compared-101702987582094.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/19/1600x900/washing_machine__1702989909636_1702989909876.jpg",
            "publishedAt": "2023-12-20T10:11:24Z",
            "content": "Introduction\r\n10 best Samsung 6.5 kg top load washing machines and ones from other brands in a face off.\r\nPutting forward the age-old adage, \"cleanliness is next to godliness,\" it's no wonder that th… [+26455 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Vijay Anand",
            "title": "vivo focuses on camera prowess on its next flagship — X100 Pro - CNBCTV18",
            "description": "vivo has unveiled its flagship X100 series, spotlighting the X100 Pro's imaging prowess. Boasting a 120Hz display, 50MP main camera, and ZEISS technology, vivo says the smartphone will redefine smartphone photography.",
            "url": "https://www.cnbctv18.com/technology/vivo-focuses-on-camera-prowess-on-its-next-flagship-x100-pro-18610971.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/12/vivo-x100-pro-camera-1019x573.jpg",
            "publishedAt": "2023-12-20T10:03:34Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Gadgets360.com"
            },
            "author": "Nithya P Nair, Siddharth Suvarna",
            "title": "Nothing Phone 1 Receiving Android 14-Based Nothing OS 2.5 Open Beta 1 Update - Gadgets 360",
            "description": "Nothing is rolling out the Nothing OS 2.5 open beta 1 for its first smartphone — Nothing Phone 1. The new software based on Android 14, brings several new security, and privacy features to the handset alongside Glyph improvements. The Nothing Phone 1 will get…",
            "url": "https://www.gadgets360.com/mobiles/news/nothing-phone-1-android-14-os-2-5-open-beta-rollout-changelog-features-update-4708549",
            "urlToImage": "https://i.gadgets360cdn.com/large/nothing_phone_1_screen_gadgets360_1658412947844.jpg",
            "publishedAt": "2023-12-20T09:00:29Z",
            "content": "Nothing released the stable Nothing OS 2.5 update for the Phone 2 last week. Now, the Carl Pei-backed UK-based company is rolling out the Nothing OS 2.5 open beta 1 for its first smartphone Nothing P… [+2776 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "High Risk Warning To Samsung Mobile Phone Users By Government Of India, Watch To Know - India Today",
            "description": "The Government Of India Has Issued A High-risk Warning To Samsung Mobile Phone Users Concerning Multiple Vulnerabilities. These Vulnerabilities Pose Signific...",
            "url": "https://www.youtube.com/watch?v=yv4ou_R6LTY",
            "urlToImage": "https://i.ytimg.com/vi/yv4ou_R6LTY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHOBYACgAqKAgwIABABGHIgUCgwMA8=&rs=AOn4CLAWXlFSXh7QTETHzgDIs5TyvBPp2g",
            "publishedAt": "2023-12-20T08:49:15Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "WhatsApp Exec Reveals Hacks To Keep Messages Out Of Reach Of Google, Apple - NDTV",
            "description": "WhatsApp, a widely used messaging platform, employs end-to-end encryption to enhance user privacy and security.",
            "url": "https://www.ndtv.com/feature/whatsapp-exec-reveals-hacks-to-keep-messages-out-of-reach-of-google-apple-4708725",
            "urlToImage": "https://c.ndtvimg.com/2023-12/jfkdbmvo_whatsapp_625x300_04_December_23.jpg",
            "publishedAt": "2023-12-20T08:31:59Z",
            "content": "New Delhi: WhatsApp, a widely used messaging platform, employs end-to-end encryption to enhance user privacy and security. This means that messages are encrypted on the sender's device and can only b… [+2348 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Adda247.com"
            },
            "author": "Saurabh",
            "title": "MediaTek, Nvidia Unite To Power Artificial Intelligence In Cars - Adda247",
            "description": "Semiconductor powerhouses MediaTek and Nvidia have recently forged a strategic partnership aimed at bringing artificial intelligence (AI) to the forefront of the automotive industry. This collaboration signifies a bold step towards revolutionizing in-car expe…",
            "url": "https://currentaffairs.adda247.com/mediatek-nvidia-unite-to-power-artificial-intelligence-in-cars/",
            "urlToImage": "https://adda247-wp-multisite-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/multisite/sites/5/2023/12/20132435/nvidia.jpg",
            "publishedAt": "2023-12-20T07:59:25Z",
            "content": "Semiconductor powerhouses MediaTek and Nvidia have recently forged a strategic partnership aimed at bringing artificial intelligence (AI) to the forefront of the automotive industry. This collaborati… [+2919 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Beebom"
            },
            "author": "Satyam Kumar",
            "title": "ASRock Launches NUC Box Mini PCs with Intel Core Ultra Processors - Beebom",
            "description": "ASRock has launched its new Mini PC lineup. Among the improvements is the addition of Intel's latest Core Ultra processors.",
            "url": "https://beebom.com/asrock-nuc-box-mini-pc-intel-core-ultra-launched/",
            "urlToImage": "https://beebom.com/wp-content/uploads/2023/12/new-Mini-PC-launched-by-Asrock-with-latest-Intel-Core-Ultra-processors.jpg",
            "publishedAt": "2023-12-20T07:44:09Z",
            "content": "ASRock has just launched its brand new NUC Box lineup. These are Mini PCs, and the new models were unveiled recently. The CPU department of ASRock’s new NUC Ultra 100 Box&amp; NUCS Ultra 100 Box now … [+3482 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Tech News Today: iOS 17.2.1 update, Google Maps is changing in India, and more - The Indian Express",
            "description": "Tech News Today (December 20, 2023): Apple releases a surprise iOS 17.2.1 update for eligible iPhones with bug fixes and security updates and Google is also updating its Maps app in India with new visual experiences.",
            "url": "https://indianexpress.com/article/technology/tech-news-today-20-december-2023-ios-update-google-maps-update-9075827/",
            "urlToImage": "https://images.indianexpress.com/2023/12/iphone-15-pro.jpg",
            "publishedAt": "2023-12-20T07:16:14Z",
            "content": "<li>01Apple iOS 17.2.1 update for iPhones\r\nApple's latest software update for iPhones comes just a few after the major iOS 17.2 update. The latest software patch for iPhone XS and newer models improv… [+1680 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": "Raghwendra Shukla",
            "title": "iQOO 12 Review: Mightier than ever - Zee Business",
            "description": "iQOO 12 Review: The iQOO 12 has been entirely redesigned and looks refreshing. The metal frame of iQOO 12 adds to the aesthetics.",
            "url": "https://www.zeebiz.com/technology/reviews/news-iqoo-12-review-mightier-than-ever-269401",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/20/273655-iqooreview.jpg",
            "publishedAt": "2023-12-20T06:19:15Z",
            "content": "iQOO 12 Review: iQOO has been known for making performance-centric smartphones and the Vivo spin-off has done it again with the launch of iQOO 12. This is India's first smartphone with a Snapdragon 8… [+4043 chars]"
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
              "name": "Editorji.com"
            },
            "author": "Editorji News Desk",
            "title": "Quordle 695 hints and answer for December 20, 2023: Effective puzzle-solving guidelines - Editorji",
            "description": "Quordle 695 stands out in the word puzzle genre with its innovative concept featuring four interlinked puzzles, deviating from the traditional single puzzle format.",
            "url": "https://www.editorji.com/tech-news/quordle-695-hints-and-answer-for-december-20-2023-effective-puzzle-solving-guidelines-1703049159167",
            "urlToImage": "https://cdn.editorji.com/OefLy7WaeC.jpg",
            "publishedAt": "2023-12-20T05:12:39Z",
            "content": "The design of Quordle 695 continues to attract and engage players, offering interconnected challenges unlike traditional word games with isolated puzzles, thus providing a more immersive experience.\r… [+1202 chars]"
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
              "name": "News9live.com"
            },
            "author": "Ayush Sharma",
            "title": "Realme Christmas Sale 2023: Coupon discounts on Narzo 60 series, Narzo N55, and Narzo N53 - News9 LIVE",
            "description": "Realme has begun its Christmas Sale for this year. This sale brings discounts on Narzo smartphones including the Narzo 60 series, Narzo N55, and Narzo N53.",
            "url": "https://www.news9live.com/technology/mobile-phone/realme-christmas-sale-2023-coupon-discounts-on-narzo-60-series-narzo-n55-and-narzo-n53-2382199",
            "urlToImage": "https://images.news9live.com/wp-content/uploads/2023/09/News9Tech-2023-09-05T165348.174.jpg",
            "publishedAt": "2023-12-20T03:30:46Z",
            "content": "Christmas is around the corner, and Realme is all set to make the festive season even merrier with its exclusive ‘Christmas Sale.’ The sale brings some good deals on the company’s popular Narzo smart… [+1748 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Google has NAILED its formula - Google Pixel 8 60 day review - Android Police",
            "description": "Unlimited data Android eSIM: http://bit.ly/apholaflyGoogle's Pixel 8 series is a big step up, but is the Pixel 8 worth buying? Find out in our Google Pixel 8...",
            "url": "https://www.youtube.com/watch?v=WCOftNHPFzU",
            "urlToImage": "https://i.ytimg.com/vi/WCOftNHPFzU/maxresdefault.jpg",
            "publishedAt": "2023-12-19T17:30:06Z",
            "content": null
          }
        ]
      },
      {
        "business": [
          {
            "source": {
              "id": null,
              "name": "Ipowatch.in"
            },
            "author": "IPOWatch Team",
            "title": "Innova Captab IPO Date, Review, Price, Allotment Details - IPO Watch",
            "description": "Innova Captab IPO date is December 21, 2023. Check Innova Captab IPO review, price, lot size, form, financial results, valuations & IPO allotment status.",
            "url": "https://ipowatch.in/innova-captab-ipo-date-review-price-allotment-details/",
            "urlToImage": "https://ipowatch.in/wp-content/uploads/2023/12/innova-captab-ipo.jpeg",
            "publishedAt": "2023-12-21T10:11:39Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Bikewale.com"
            },
            "author": "Neil Nair",
            "title": "Royal Enfield Himalayan 450 wins Indian Motorcycle of The Year 2024 - BikeWale",
            "description": "The motorcycle tops the list followed by the Triumph Scrambler 400X and KTM 390 Duke.",
            "url": "https://www.bikewale.com/news/royal-enfield-himalayan-450-wins-indian-motorcycle-of-the-year-2024/",
            "urlToImage": "https://imgd.aeplcdn.com/642x336/n/cw/ec/167095/royalenfield-himalayan-450-right-side-view2.jpeg?isig=0&q=80",
            "publishedAt": "2023-12-21T06:27:44Z",
            "content": "- Royal Enfield Himalayan 450 wins IMOTY 2024 award\r\n- Triumph Scrambler 400X and KTM 390 Duke in second and third spot\r\n- Total of seven motorcycles in contention\r\nThe Royal Enfield Himalayan 450 ha… [+1175 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Entrackr"
            },
            "author": "Harsh Upadhyay",
            "title": "BluSmart raises $24 Mn from existing investors, founders and leadership team - Entrackr",
            "description": "BluSmart Mobility, an EV ride-hailing service and EV charging superhub infrastructure operator, has raised $24 million in a new equity round.",
            "url": "https://entrackr.com/2023/12/blusmart-raises-24-mn-from-existing-investors-founders-and-leadership-team/",
            "urlToImage": "https://entrackr.com/storage/2023/12/Blusmart.jpg",
            "publishedAt": "2023-12-21T06:27:05Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "X/Twitter down, platform shows ‘Welcome to your timeline’ and ads instead of tweets - The Indian Express",
            "description": "X/Twitter is facing a global outage and the reason is yet to be known.",
            "url": "https://indianexpress.com/article/technology/social/x-twitter-down-9077130/",
            "urlToImage": "https://images.indianexpress.com/2023/11/X-Reuters.jpg",
            "publishedAt": "2023-12-21T05:49:37Z",
            "content": "Microblogging site X (formerly known as Twitter) hit a technical snag around 11 am today. Both the website and the mobile application showed Welcome to your timeline instead of the regular tweets on … [+1901 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Motoroctane.com"
            },
            "author": "Swaraj Acharekar",
            "title": "How did the Tata Harrier/Safari score 5-star in BNCAP? » MotorOctane - MotorOctane",
            "description": "Tata Harrier/Safari have once again proved their safety by scoring a perfect 5-star in the BNCAP test, so how did they achieve it?",
            "url": "https://motoroctane.com/news/266177-how-did-the-tata-harrier-safari-score-5-star-in-bncap",
            "urlToImage": "https://motoroctane.com/wp-content/uploads/2023/12/5-star-again-how.jpg",
            "publishedAt": "2023-12-21T05:11:10Z",
            "content": "The Tata Harrier and Safari were often ridiculed as they were not being tested by the brand. However, now the brand has silenced the critics by scoring 5 stars two times in less than two months. The … [+1846 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Dsij.in"
            },
            "author": "Kiran Shroff",
            "title": "FIIs & DIIs collectively bought 10836584 shares of this multibagger stock with low PE and high ROE; scrip hit 52-week high! - Dalal Street Investment Journal",
            "description": "The shares of the company have a PE of 7.04x and an ROE of 16 per cent.",
            "url": "https://www.dsij.in/dsijarticledetail/fiis-diis-collectively-bought-10836584-shares-of-this-multibagger-stock-with-low-pe-and-high-roe-scrip-hit-52-week-high",
            "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/35372/image_970.jpg",
            "publishedAt": "2023-12-21T03:38:33Z",
            "content": "The stock gave multibagger returns of over 130 per cent from its 52-week low of Rs 116.25 per share.\r\nSatin Creditcare Network Limited, a leading microfinance player in India, successfully raised Rs … [+3293 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Marcellus' Saurabh Mukherjea Weighs In As Markets Witness Sharp Cuts | NDTV Profit - NDTV Profit",
            "description": null,
            "url": "https://www.youtube.com/watch?v=Atk6Wm0jJw0",
            "urlToImage": null,
            "publishedAt": "2023-12-21T03:35:59Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Intel to cut 200-plus jobs in 5th round of layoffs this year, here's what regulatory filing says - Times of India",
            "description": "Intel is cutting 235 jobs in its fifth round of layoffs. The semiconductor giant plans to reduce costs and accelerate its strategy through multiple in",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/intel-to-cut-200-plus-jobs-in-5th-round-of-layoffs-this-year-heres-what-regulatory-filing-says/articleshow/106167313.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106167306,width-1070,height-580,imgsize-76678,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-21T01:54:29Z",
            "content": "5G phones with IR blaster under Rs 30,000"
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "SI Reporter",
            "title": "Stock Market LIVE: Profit-taking halts global rally; Dow, Nasdaq dip 1.5% - Business Standard",
            "description": "Closing Bell on Thursday December 21: In the broader markets, the BSE MidCap and SmallCap indices outpaced frontline indices as they climbed 1.6 per cent and 1.69 per cent, respectively",
            "url": "https://www.business-standard.com/markets/news/stock-market-live-dec-21-nse-bse-sensex-nifty-oil-dow-market-fall-ipos-inox-india-123122100077_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-03/27/full/1679902828-7872.jpg",
            "publishedAt": "2023-12-21T01:46:15Z",
            "content": "We expect consolidation in the index now; however there will be no shortage of trading opportunities on the stock-specific front.Participants should align their trades accordingly and prefer sectors,… [+261 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "INOX India IPO listing date today. GMP, experts predict strong debut of shares | Mint - Mint",
            "description": "INOX India IPO listing: Shares of company may list in four digits, signals grey market and stock market experts",
            "url": "https://www.livemint.com/market/ipo/inox-india-ipo-listing-date-today-gmp-experts-predict-strong-debut-of-shares-11703121935808.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/21/1600x900/INOX_India_IPO_GMP_listing_date_price_1703122008265_1703122023457.JPG",
            "publishedAt": "2023-12-21T01:37:28Z",
            "content": "INOX India IPO: Listing date of initial public offering (IPO) of INOX India Limited has been fixed on 21st December 2023 i.e. today. As per the information available on BSE website, INOX India share … [+4433 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Jomy Jos Pullokaran",
            "title": "Stocks to Watch: Mazagon Dock, Cochin Shipyard, Zee Ent, DLF, Tips Industries and more - CNBCTV18",
            "description": "Stocks to Watch: From Mazagon Dock, Cochin Shipyard, Zee Ent, DLF to Tips Industries and more, here is a list of stocks to track in the trading session of December 21",
            "url": "https://www.cnbctv18.com/photos/market/stocks/stocks-to-watch-mazagon-dock-cochin-shipyard-zee-ent-dlf-tips-industries-and-more-18616071.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/01/hedge-fund-shutterstock-1019x573.jpg",
            "publishedAt": "2023-12-21T00:46:55Z",
            "content": "Mazagon Dock | The state-owned company clinched a 1,600-crore contract with the acquisition wing of the Ministry of Defence for the construction and delivery of six next-generation offshore patrol ve… [+1611 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "Buy or sell: Vaishali Parekh recommends three intraday stocks for today — December 21 | Mint - Mint",
            "description": "Buy or sell stocks: Vaishali Parekh has recommended three intraday stocks for today — Camlin Fine Sciences, Sula Vineyards and Muthoot Finance",
            "url": "https://www.livemint.com/market/stock-market-news/buy-or-sell-vaishali-parekh-recommends-three-stocks-to-buy-today-december-21-11703083607151.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Buy_or_sell_stocks_to_buy_today_stock_market_today_1698023021624_1703083670615.jpg",
            "publishedAt": "2023-12-21T00:42:39Z",
            "content": "Buy or sell stocks for today: Despite positive global market sentiments and strong IMF commentary on Indian economy, Indian stock market witnessed sharp sell off on Wednesday. All key benchmark indic… [+3629 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Insider India"
            },
            "author": "Sourabh Jain",
            "title": "Motisons Jewellers IPO allotment – How to check allotment, GMP, listing date and more - Business Insider India",
            "description": "Motisons Jewellers is expected to announce its share allotment status on Thursday, December 21.The shares of Motisons Jewellers were subscribed 159.21 times.The",
            "url": "https://www.businessinsider.in/stock-market/news/motisons-jewellers-ipo-allotment-how-to-check-allotment-gmp-listing-date-and-more/articleshow/106156837.cms",
            "urlToImage": "https://www.businessinsider.in/photo/106156837/motisons-jewellers-ipo-allotment-how-to-check-allotment-gmp-listing-date-and-more.jpg?imgsize=33630",
            "publishedAt": "2023-12-21T00:30:00Z",
            "content": "Jaipur-based Motisons Jewellers, jewellery maker that sells gold, diamond, kundan jewellery, silver, platinum and other metals is expected to announce the allotment status of its initial public offer… [+2165 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "PTI",
            "title": "SAT quashes SEBI orders in Karvy Stock Broking case - Hindustan Times",
            "description": "SAT quashes SEBI orders in Karvy Stock Broking case",
            "url": "https://www.hindustantimes.com/business/sat-quashes-sebi-orders-in-karvy-stock-broking-case-101703097337417.html",
            "urlToImage": "https://images.hindustantimes.com/default/1600x900.jpg",
            "publishedAt": "2023-12-21T00:28:05Z",
            "content": "The order came after the Axis Bank, the HDFC Bank, the ICICI Bank, the IndusInd Bank and Bajaj Finance moved the appellate tribunal against the SEBI orders. \r\nHT Image\r\nThe SAT quashed the two orders… [+2042 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Shobha Mathur, Salman SH, Vikas Dandekar",
            "title": "3 insights to kick-start your day, featuring Ford’s rethink - The Economic Times",
            "description": "In Primeshots today: Fords review; RBI lifts ban on aggregators; Bharat Biotechs universal vaccine bid.",
            "url": "https://economictimes.indiatimes.com/prime/primeshots/3-insights-to-kick-start-your-day-featuring-fords-rethink/primearticleshow/106163188.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-106163202,width-1070,height-580,imgsize-133748/photo.jpg",
            "publishedAt": "2023-12-20T23:30:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "FXStreet"
            },
            "author": "Patricio Martín",
            "title": "Gold Price Forecast: XAU/USD consolidates gains and threatens the 20-day SMA - FXStreet",
            "description": "In Wednesday's trading session, the XAU/USD Gold spot price witnessed a strong downward trend, currently trading at approximately $2,030.",
            "url": "https://www.fxstreet.com/news/gold-price-forecast-xau-usd-consolidates-gains-and-threatens-the-20-day-sma-202312202206",
            "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/stacked-gold-bars-13094022_Large.jpg",
            "publishedAt": "2023-12-20T22:06:15Z",
            "content": "<ul><li>The XAU/USD sees a downward shift to around the $2030 level, highlighting a 0.55% decline.</li><li>US yields show weakness, which may limit the downside for the metal.</li><li>Markets are bra… [+1632 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Savitri Jindal surpasses Mukesh Ambani and Gautam Adani with a $9.6 Billion wealth surge in 2023, and becomes the fifth-wealthiest Indian - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/lifestyle/savitri-jindal-surpasses-mukesh-ambani-and-gautam-adani-with-a-9-6-billion-wealth-surge-in-2023-securing-fifth-wealthiest-position-in-india/3343851/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T19:04:40Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Alisha Sachdev",
            "title": "India’s auto parts makers’ H1FY24 sales up at ₹2.98 tn | Mint - Mint",
            "description": "Data released by Automotive Component Manufacturers Association of India (ACMA) showed exports of auto components grew marginally by 2.7% to $10.4 billion ( ₹85,870 crore), while imports rose 3.6% to $10.6 billion ( ₹87,420 crore).",
            "url": "https://www.livemint.com/industry/manufacturing/indias-auto-parts-makers-h1fy24-sales-up-at-2-98-tn-11703096702942.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/2-0-100114439-Toyota1-4C-0_1681714597542_1703096792180.jpg",
            "publishedAt": "2023-12-20T18:27:52Z",
            "content": "NEW DELHI : Indias auto parts makers generated a revenue of 2.98 trillion ($36.1 billion) in the first half this fiscal year, driven by robust demand from automotive original equipment manufacturers … [+2913 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Gopika Gopakumar, Neil Borate",
            "title": "RBI’s AIF rules impractical, to shift industry dynamics, say investors | Mint - Mint",
            "description": "Investors fear  ₹40,000 crore impact as RBI restricts banks from AIFs with debtor fund links",
            "url": "https://www.livemint.com/industry/banking/rbis-aif-rules-impractical-to-shift-industry-dynamics-say-investors-11703095147204.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/rbi-kdPG--621x414LiveMint_1703095337454_1703095337633.jpg",
            "publishedAt": "2023-12-20T18:04:07Z",
            "content": "MUMBAI\r\n : \r\nThe Reserve Bank of Indias new rule barring banks and non-banks from investing in alternative investment funds (AIFs) having downstream investments in debtor funds is impractical, riskin… [+3194 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Varun Sood",
            "title": "GenAI: What Accenture got right, but Indian IT didn't | Mint - Mint",
            "description": "Accenture secures $450 million in generative artificial intelligence projects, marking a 50% increase from the previous six months.",
            "url": "https://www.livemint.com/companies/news/genai-what-accenture-got-right-but-indian-it-didnt-11703095279675.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Accenture_1679427786760_1703095340892.jpg",
            "publishedAt": "2023-12-20T18:03:39Z",
            "content": "Bengaluru: Accenture Plc. secured projects worth $450 million in generative artificial intelligence (GenAI) in the three months ended November, marking a 50% jump from the $300 million clocked in the… [+3626 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Toshiba Delisted From Tokyo Stock Exchange After 74 Years | Vantage with Palki Sharma - Firstpost",
            "description": "Toshiba Delisted From Tokyo Stock Exchange After 74 Years | Vantage with Palki SharmaJapanese Electronic Giant Toshiba has been delisted from the Tokyo Stock...",
            "url": "https://www.youtube.com/watch?v=Oy5JDGx1J6I",
            "urlToImage": "https://i.ytimg.com/vi/Oy5JDGx1J6I/maxresdefault.jpg",
            "publishedAt": "2023-12-20T18:00:09Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Dsij.in"
            },
            "author": "Praveenkumar Yadav",
            "title": "500 per cent returns and FIIs & DIIs increase stake: This multibagger FMCG stock to invest Rs 720 crore to increase production capacity; stock hits 52-week high! - Dalal Street Investment Journal",
            "description": "Shares of the company gained more than 50 per cent in the last six months.",
            "url": "https://www.dsij.in/dsijarticledetail/500-per-cent-returns-and-fiis-diis-increase-stake-this-multibagger-fmcg-stock-to-invest-rs-720-crore-to-increase-production-capacity-stock-hits-52-week-high-35370",
            "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/35370/image_1324.jpg",
            "publishedAt": "2023-12-20T17:15:18Z",
            "content": "Shares of the company gained more than 50 per cent in the last six months. \r\nVarun Beverages Limited marked a significant milestone today as the Hon'ble Chief Minister of Himachal Pradesh, Shri Sukhv… [+1961 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CarToq.com"
            },
            "author": "Shantonil Nag",
            "title": "New Tata cars for 2024: What’s coming - CarToq.com",
            "description": "Tata Motors had a busy year in 2023, with the automaker first putting up a good show at the Auto Expo 2023 with the concept models of Sierra EV, Curvv, Harrier EV and Avinya. Tata then made the year even more impactful with the launches of CNG versions of Alt…",
            "url": "https://www.cartoq.com/4-new-tata-cars-and-suvs-coming-soon-punch-ev-to-harrier-ev/",
            "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/12/tata-curvv-featured.jpg",
            "publishedAt": "2023-12-20T17:04:25Z",
            "content": "Tata Motors had a busy year in 2023, with the automaker first putting up a good show at the Auto Expo 2023 with the concept models of Sierra EV, Curvv, Harrier EV and Avinya. Tata then made the year … [+3141 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Mansi Verma",
            "title": "Byju’s FY22 accounts, other resolutions passed amid high drama at stormy AGM - Moneycontrol",
            "description": "Shareholders abstained to vote initially on resolutions as new statutory auditors MSKA and associates had failed to join. The auditor later flagged lack of  internal controls and its ability to continue as a going concern",
            "url": "https://www.moneycontrol.com/news/technology/byjus-fy22-accounts-other-resolutions-passed-amid-high-drama-at-stormy-agm-11935231.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/06/Byjus.jpg",
            "publishedAt": "2023-12-20T17:00:06Z",
            "content": "Ed tech firm Byjus investors passed three resolutions scheduled to be discussed, including the approval of the audited FY22 financials, even as shareholders raised questions on auditor concerns at a … [+4046 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "OpIndia"
            },
            "author": "OpIndia Staff",
            "title": "Sharam naam ki koi cheese nahi hai, Amul issues clarification on viral forward - OpIndia",
            "description": "Amul has clarified that it has not launched a cheese brand called 'Sharam', adding that the viral image is fake",
            "url": "https://www.opindia.com/2023/12/sharam-cheese-by-amul-is-a-fake-product-created-just-for-fun-clarifies-amul-cooperative-on-x/",
            "urlToImage": "https://www.opindia.com/wp-content/uploads/2023/12/Amul-Sharam-Cheese.jpg",
            "publishedAt": "2023-12-20T16:22:53Z",
            "content": "Dairy giant Amul has clarified that it has not launched a cheese brand named Sharam. The clarification came after the image of a pack of Amul cheese with the brand name Sharam appeared on social medi… [+2441 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Happy Forgings IPO subscribed over 7 times, retail portion booked 7 times on Day 2 - Moneycontrol",
            "description": "Happy Forgings IPO: The Rs 1,009-crore offer comprises a fresh issue of 47 lakh shares worth Rs 400 crore and an offer for sale of 71.59 lakh shares worth Rs 608.59 crore",
            "url": "https://www.moneycontrol.com/news/business/ipo/happy-forgings-ipo-subscribed-over-3-times-retail-portion-booked-4-times-on-day-2-11929921.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Happy_Forgings-770x433.jpg",
            "publishedAt": "2023-12-20T16:22:44Z",
            "content": "Happy Forgings Rs 1,009-crore initial public offering (IPO) was subscribed 7.46 times on December 20, the second day of bidding, with bids for 6.2 crore shares against an issue size of 83.65 lakh.\r\nR… [+1609 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Scroll.in"
            },
            "author": "Scroll Staff",
            "title": "IMF warns India of its debt exceeding 100% of GDP, Centre refutes assessment - Scroll.in",
            "description": "The International Monetary Fund said that long-term debt sustainability risks are high as a large investment is needed to meet climate change mitigation target.",
            "url": "https://scroll.in/latest/1060896/imf-warns-india-of-its-debt-excedding-100-of-gdp-centre-refutes-assessment",
            "urlToImage": "https://sc0.blr1.cdn.digitaloceanspaces.com/book/171405-voqodvepfy-1647088321.jpg",
            "publishedAt": "2023-12-20T15:44:00Z",
            "content": "The International Monetary Fund warned India on Tuesday that its government debt may exceed 100% of its gross domestic product, or GDP, in the medium term, reported Business Standard. \r\nThe United Na… [+2528 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "PTI",
            "title": "Jio, Airtel add nearly 48 lakh mobile subscribers in Sept, VIL loses 7.5 lakh: Trai data - Moneycontrol",
            "description": "Wireless subscriptions in urban areas increased to 630.17 million at the end of September 2023 and in rural areas it increased to 519.99 million during the same period.",
            "url": "https://www.moneycontrol.com/news/business/jio-airtel-add-nearly-48-lakh-mobile-subscribers-in-sept-vil-loses-7-5-lakh-trai-data-11934931.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/10/telecom2.jpg",
            "publishedAt": "2023-12-20T15:04:08Z",
            "content": "Reliance Jio added 34.7 lakh mobile subscribers in September, cementing its lead in the competitive telecom market, while Airtels wireless subscriber tally rose by 13.2 lakh, according to monthly dat… [+1879 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Zee, Sony enter into discussion to extend merger deadline - Moneycontrol",
            "description": "Zee said it has received communication from Sony, and that they will enter into negotiations “in good faith” and “with a view to discuss the extension of the date required to make the scheme effective by a reasonable period of time.”",
            "url": "https://www.moneycontrol.com/news/business/sony-agrees-to-discuss-extension-of-merger-deadline-says-zee-entertainment-11934701.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/09/ZEEL-770x433.jpg",
            "publishedAt": "2023-12-20T14:26:01Z",
            "content": "Zee Entertainment Enterpises Ltd (ZEEL) on December 20 informed the stock exchanges that Sony Pictures Networks India (now known as Culver Max Entertainment Private Limited) has agreed to discuss the… [+2534 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Getty Images",
            "title": "On fast track! These 6 railway stocks have doubled investors' money in 2023 - Clocking Alpha - The Economic Times",
            "description": "In August 2023, mutual funds (MFs) continued to display a positive outlook on the Indian equity market, exhibiting a net buying activity of approximately Rs 14,488 crore. This marks the highest monthly net buying activity in FY24 thus far. Following a period …",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/on-fast-track-these-6-railway-stocks-have-doubled-investors-money-in-2023/clocking-alpha/slideshow/106160211.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-106160211,width-1070,height-580,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-12-20T14:20:35Z",
            "content": ""
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "Press Trust of India",
            "title": "Bharat Petroleum to invest Rs 5,044 cr in PP plant at Kochi refinery - Business Standard",
            "description": "The 400,000 tonnes per annum polypropylene unit will be constructed in about 46 months from the date of the investment approval, the company said in a statement",
            "url": "https://www.business-standard.com/companies/news/bharat-petroleum-to-invest-rs-5-044-cr-in-pp-plant-at-kochi-refinery-123122001105_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-01/11/full/1641919019-237.jpg",
            "publishedAt": "2023-12-20T14:18:07Z",
            "content": "The project will be funded in 65:35 debt-equity ratio, BPCL said in a separate stock exchange filing."
          },
          {
            "source": {
              "id": null,
              "name": "FXStreet"
            },
            "author": "Filip Lagaart",
            "title": "Oil ticks higher to 75$ with geopolitical drivers expanding quick - FXStreet",
            "description": "Oil prices have ample room to manoeuvre higher with more geopolitical tensions being added. Already earlier this week the eruption of attacks by Houthi rebels in the Red Sea sparked enough concern for all main freight operators to divert their fleet",
            "url": "https://www.fxstreet.com/news/oil-pulls-off-christmas-rally-as-red-sea-chaos-feeds-demand-202312201145",
            "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Energy/Oil/oil-pumps-25838229_Large.jpg",
            "publishedAt": "2023-12-20T14:08:19Z",
            "content": "<ul><li>WTI Oil snaps above $74 and enters room for more upside. </li><li>Oil surges as demand is set to pick up after all big freight shipping companies are taking longer routes to avoid the Red Sea… [+5475 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Vaamanaa Sethi",
            "title": "Credo Brands IPO Day 2: Issue subscribed 6.95 times, NII and retail portion records strong demand | Mint - Mint",
            "description": "According to data available with BSE, Credo Brands IPO's non-institutional investors (NIIs) portion was subscribed 11.48 times while qualified institutional buyers (QIBs) portion was subscribed 0.35 times on the second day.",
            "url": "https://www.livemint.com/market/ipo/credo-brands-ipo-day-2-issue-subscribed-over-6-95-times-nii-and-retail-portion-records-strong-demand-11703079990917.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Credo_Brands_1703080228515_1703080228641.JPG",
            "publishedAt": "2023-12-20T13:51:04Z",
            "content": "The Credo Brands IPO garnered a robust response from investors, with the retail portion of the IPO being oversubscribed 8.78 times by the end of the second day of bidding. The issue was overall subsc… [+2201 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Arfa Javaid",
            "title": "Noodles in 65 secs to August’s condom craze: Swiggy Instamart 2023 trends - Hindustan Times",
            "description": "A customer from Jaipur placed not just two or three but a total of 67 orders on Swiggy Instamart. | Trending",
            "url": "https://www.hindustantimes.com/trending/noodles-delivered-in-65-secs-to-august-s-condom-craze-swiggy-instamart-reveals-2023-trends-101703074797672.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/swiggy-instamart-2023-trends-noodles-condoms_1703075368281_1703075380784.jpg",
            "publishedAt": "2023-12-20T12:31:55Z",
            "content": "As we approach 2024, brands are publishing their annual reports, showcasing the trends that define consumer behaviour in 202. Swiggy Instamart has also released its commerce trends for the year, prov… [+1450 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Vaamanaa Sethi",
            "title": "Jyoti CNC Automation gets SEBI nod to raise ₹1,000 crore via IPO | Mint - Mint",
            "description": "The company had filed its Draft Red Herring Prospectus (DRHP) with market regulator in September 2023",
            "url": "https://www.livemint.com/market/ipo/jyoti-cnc-automation-gets-sebi-nod-to-raise-rs-1-000-crore-via-ipo-11703075075033.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/IPO_1703075267224_1703075267386.jpg",
            "publishedAt": "2023-12-20T12:28:20Z",
            "content": "CNC machine manufacturer Jyoti CNC Automation said on Wednesday that it has received markets regulator Securities and Exchange Board of India (SEBI) approval to raise funds through initial public off… [+2260 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Rituraj Baruah",
            "title": "Centre releases norms for lease of sites for offshore wind projects | Mint - Mint",
            "description": "Aiming for 500 GW of renewable energy capacity by 2030, the government hopes to accelerate offshore wind energy development, a sector that has lagged due to high costs",
            "url": "https://www.livemint.com/industry/energy/centre-releases-norms-for-lease-of-sites-for-offshore-wind-projects-11703071948459.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/EU-ENERGY-WINDPOWER-0_1703074115432_1703074244508.JPG",
            "publishedAt": "2023-12-20T12:17:58Z",
            "content": "New Delhi: The Centre has unveiled new regulations for leasing offshore wind project sites, aimed at boosting wind energy generation in the country.  The Offshore Wind Energy Lease Rules, 2023, notif… [+2315 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNBCTV18"
            },
            "author": "Jomy Jos Pullokaran",
            "title": "Cochin Shipyard wins Defence Ministry contract worth ₹488 crore - CNBCTV18",
            "description": "Shares of Cochin Shipyard Ltd ended at ₹1,223.95, down by ₹82.90, or 6.34%, on the BSE. The contract, officially signed on December 19, 2023, involves the repair and maintenance of equipment and systems on board an Indian naval ship.",
            "url": "https://www.cnbctv18.com/business/companies/cochin-shipyard-wins-defence-ministry-contract-worth-rs-488-crore-18612721.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/12/cochin-shipyard-dec-20-1019x573.png",
            "publishedAt": "2023-12-20T12:01:41Z",
            "content": "Let's Connect with CNBCTV 18\r\n©TV18 Broadcast Limited. All rights reserved."
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Dhanya Nagasundaram",
            "title": "Muthoot Microfin IPO: Issue subscribed 11.52 times on day 3, retail booked over 7 times; GMP drops sharply | Mint - Mint",
            "description": "Muthoot Microfin IPO subscription status was 11.52 times at the end of the last day of subscription.",
            "url": "https://www.livemint.com/market/ipo/muthoot-microfin-ipo-issue-subscribed-11-50-times-on-day-3-retail-booked-over-7-times-gmp-drops-sharply-11703071948339.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Muthoot_Microfin_Logo_1702883768706_1703072503275.png",
            "publishedAt": "2023-12-20T11:58:17Z",
            "content": "Muthoot Microfin IPO subscription status: Muthoot IPO moved smoothly over the course of the three days of subscription, and as of the last day, Muthoot IPO subscription status was 11.52 times, at the… [+5451 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "BS Web Team",
            "title": "Inflation to ease to 4.6% in the first three quarters of 2024-25: RBI - Business Standard",
            "description": "Inflation in India 2024: The RBI bulletin released on Wednesday said that global growth continues to remain fragile and may slow down further in 2024",
            "url": "https://www.business-standard.com/economy/news/inflation-to-ease-to-4-6-in-the-first-three-quarters-of-2024-25-rbi-123122000844_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/02/full/1698902779-8176.jpg",
            "publishedAt": "2023-12-20T11:55:00Z",
            "content": "The inflation in India is expected to ease to 4.6 per cent in the first three quarters of 2024-25 (FY25), the Reserve Bank of India (RBI) said in its December 2023 bulletin on Wednesday. In November,… [+1796 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Zohaib Ahmed",
            "title": "Apple’s race against time to reverse Watch ban: Potential scenarios for the tech giant - The Indian Express",
            "description": "The Apple Watch Series 9 and Ultra 2 may soon disappear from US stores over a patent dispute. We explain why.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/apple-watch-ban-why-what-can-be-done-9076224/",
            "urlToImage": "https://images.indianexpress.com/2023/12/apple-watch-series-9-ultra-2-featured.jpg",
            "publishedAt": "2023-12-20T11:37:03Z",
            "content": "The unthinkable has happened: Apple’s latest smartwatches, namely the Watch Series 9 and Ultra 2, may soon vanish from store shelves across the United States. An import ban related to a lengthy paten… [+5266 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "UPI-based transaction touched Rs 17.4 lakh crore in December 2023: RBI Bulletin - Moneycontrol",
            "description": "Merchant transactions on the UPI platform, however, recorded a 74 percent jump in transactions",
            "url": "https://www.moneycontrol.com/news/business/upi-based-transaction-touched-rs-17-4-lakh-crore-by-december-2023-rbi-bulletin-11933701.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/03/upi-bbo-770x433.jpg",
            "publishedAt": "2023-12-20T11:33:39Z",
            "content": "UPI-based transactions touched a total value of Rs 17.4 lakh crore in December 2023, according to the monthly bulletin of the Reserve Bank of India.\r\nThe RBI Bulletin is a monthly publication that of… [+924 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Agencies",
            "title": "gold investments: How to plan your gold investments in 2024 - Gold is old - The Economic Times",
            "description": "Did you know that before paper currency came into circulation, gold was used as an actual currency? Gold has been there ever since the beginning of civilizations and is quite a precious metal even today. Adding gold to your portfolio, not only invests your mo…",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/how-to-plan-your-gold-investments-in-2024/taking-stock/slideshow/106154075.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-106154075,width-1070,height-580,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-12-20T10:37:12Z",
            "content": "Dec 20, 2023, 04:01:30 PM IST\r\nDid you know that before paper currency came into circulation, gold was used as an actual currency? Gold has been there ever since the beginning of civilizations and is… [+1360 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Gainers and Losers: 10 stocks that moved the most on December 20 - Moneycontrol",
            "description": "In a volatile session, the benchmark indices wiped out early day gains and ended up in the red.",
            "url": "https://www.moneycontrol.com/news/photos/business/stocks/gainers-and-losers-10-stocks-that-moved-the-most-on-december-20-11933351.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/market_volatile1-6-770x433.jpg",
            "publishedAt": "2023-12-20T10:23:12Z",
            "content": "On December 20, the Sensex was down 930.88 points or 1.30 percent at 70,506.31, and the Nifty was down 302.90 points or 1.41 percent at 21,150.20. About 553 shares advanced, 2,753 shares declined, an… [+2505 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Entrackr"
            },
            "author": "Entrackr",
            "title": "ShareChat lays off 15% of its workforce - Entrackr",
            "description": null,
            "url": "https://entrackr.com/2023/12/sharechat-lays-off-15-of-its-workforce/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T09:52:49Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Taxscan.in"
            },
            "author": "safwanah",
            "title": "RBI Challenges IMF's Criticism of Currency Intervention as Rupee Faces Scrutiny - taxscan.in",
            "description": "In a recent development, the Reserve Bank of India has contested the International Monetary Fund's (IMF) assessment",
            "url": "https://www.taxscan.in/rbi-challenges-imfs-criticism-of-currency-intervention-as-rupee-faces-scrutiny/354858/",
            "urlToImage": "https://www.taxscan.in/wp-content/uploads/2023/12/RBI-IMF-Criticism-Currency-Intervention-TAXSCAN.jpg",
            "publishedAt": "2023-12-20T09:40:00Z",
            "content": "In a recent development, the Reserve Bank of India has contested the International Monetary Fund’s (IMF) assessment of the Reserve Bank of India’s (RBI) intervention in the foreign-exchange market, r… [+2136 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "FXStreet"
            },
            "author": "Dhwani Mehta",
            "title": "Gold price on December 20: Rates in main Indian cities - FXStreet",
            "description": "Gold prices rose in India on Wednesday, according to data from India's Multi Commodity Exchange (MCX).",
            "url": "https://www.fxstreet.com/news/india-gold-price-today-gold-extends-upside-according-to-mcx-data-202312200934",
            "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/gold-bars-50657756_Large.jpg",
            "publishedAt": "2023-12-20T09:34:07Z",
            "content": "Most recent article: India Gold price Thursday: Gold falls, according to MCX data\r\nGold prices rose in India on Wednesday, according to data from India's Multi Commodity Exchange (MCX).\r\nGold price s… [+5946 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Lata Jha",
            "title": "India’s digital media market to triple by 2030, says report | Mint - Mint",
            "description": "Despite challenges like a slowdown in digital advertising spending and regulatory shifts impacting the real money gaming space, the industry's trajectory remains robust",
            "url": "https://www.livemint.com/industry/media/indias-digital-media-market-to-triple-by-2030-says-report-11703060196874.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/Industry-experts-argued-frequent-appearance-on-OTT_1689531050687_1703063062269.jpg",
            "publishedAt": "2023-12-20T09:07:07Z",
            "content": "New Delhi: India's digital media and entertainment sector, currently valued at $12 billion, is poised for a remarkable expansion, with projections to triple by 2030, according to insights from the st… [+3260 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Bank of Baroda raises Rs 2,500 cr from 10-year Basel-III bonds at 7.75% coupon - Moneycontrol",
            "description": "Similarly, Indian Renewable Energy Development Agency (IREDA) raised Rs 1,000 crore through 10-year bonds at 7.65 percent coupon.",
            "url": "https://www.moneycontrol.com/news/business/bank-of-baroda-raises-rs-2500-cr-from-10-year-basel-iii-bonds-at-7-75-coupon-11932821.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2013/06/bonds_57788961.jpg",
            "publishedAt": "2023-12-20T08:57:54Z",
            "content": "State-run Bank of Baroda has raised Rs 2,500 crore through Basel-III Tier-II bonds maturing in 10 years at 7.75 percent coupon rate, market sources said.\r\nThe lender received bids worth Rs 1,000 cror… [+1476 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Broker Research",
            "title": "Buy Manappuram Finance; target of Rs 205: Motilal Oswal - Moneycontrol",
            "description": "Motilal Oswal is bullish on Manappuram Finance recommended buy rating on the stock with a target price of Rs 205 in its research report dated December 20, 2023.",
            "url": "https://www.moneycontrol.com/news/business/stocks/buy-manappuram-finance-target-of-rs-205-motilal-oswal-2-11932801.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/08/Buy_1280x720_3-770x433.png",
            "publishedAt": "2023-12-20T08:41:11Z",
            "content": "Motilal Oswal's research report on Manappuram Finance\r\nAt its analyst/investor meet, MGFLs senior management team showcased the companys capabilities in its non-gold business including MFI, vehicle f… [+1134 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Kenneth Andrade Top Stock Picks: Says 'Indian Market Might Have Priced Itself Well Ahead Of Curve' - ET NOW",
            "description": "Kenneth Andrade, Founder & CIO, Old Bridge Capital Management, Says 'Indian Mkt Might Have Priced Itself Well Ahead Of Curve'#kennethandrade #stockstobuy #st...",
            "url": "https://www.youtube.com/watch?v=ZzZ_nEjcsZE",
            "urlToImage": "https://i.ytimg.com/vi/ZzZ_nEjcsZE/maxresdefault.jpg",
            "publishedAt": "2023-12-20T08:30:59Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Anishaa Kumar",
            "title": "Nippon India Life MF gains 9% despite huge block deal, keeps analysts bullish - Moneycontrol",
            "description": "Nippon India stands to gain from a growing AUM and a steady fund performance, analysts say.",
            "url": "https://www.moneycontrol.com/news/business/stocks/nippon-india-life-mf-gains-9-despite-huge-block-deal-keeps-analysts-bullish-11932111.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/12/Mutual-funds_personal-finance_Wealth-management_Financial-planning_tax_Banks_Savings-accounts_Loans_Borrowing-770x433.png",
            "publishedAt": "2023-12-20T08:25:43Z",
            "content": "Shares of Nippon India Life Mutual Fund traded in the green on December 20 following news of a Rs 726-crore block deal. IndusInd Bank was the likely seller of 1.78 crore shares, or 2.86 percent equit… [+5306 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Oil India hits all-time high, ONGC scales 6-year peak on high volumes, tax cuts - Moneycontrol",
            "description": "Oil India surged by 20% to reach a new peak of Rs 406 per share in intraday, whereas ONGC Ltd gained 5%, hitting Rs 212 per share, marking its highest level since 2018",
            "url": "https://www.moneycontrol.com/news/business/markets/oil-india-hits-all-time-high-ongc-scales-6-year-peak-on-high-volumes-tax-cuts-11932441.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/image-2-770x433.jpg",
            "publishedAt": "2023-12-20T08:11:36Z",
            "content": "The stock of Oil India Ltd scaled an all-time high, while ONGC Ltd climbed a six-year peak, extending gains for a second straight session, and Reliance Industries gained 1 percent.\r\nAll these took pl… [+3316 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Mansi Jaswal",
            "title": "Upskilling helps women relaunch careers after breaks: Report | Mint - Mint",
            "description": "78% of working professionals see upskilling as a proactive strategy to navigate the changing working landscape, says a report.",
            "url": "https://www.livemint.com/industry/human-resource/upskilling-helps-women-relaunch-careers-after-breaks-report-11703056472982.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/women_employees_1703057319605_1703057319851.jpg",
            "publishedAt": "2023-12-20T07:59:47Z",
            "content": "A new study has revealed that women, who had taken career breaks, found it easier to relaunch their professional journey after upskilling themselves. A report on 'Future of the Skills Landscape 2024 … [+2534 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Business Standard"
            },
            "author": "Business Standard",
            "title": "Blackstone exits Embassy REIT; sells entire 23.5% stake for Rs 7,100 cr - Business Standard",
            "description": null,
            "url": "https://www.business-standard.com/markets/news/blackstone-exits-embassy-reit-sells-entire-23-5-stake-for-rs-7-100-cr-123122000403_1.html",
            "urlToImage": null,
            "publishedAt": "2023-12-20T07:35:24Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "YourStory"
            },
            "author": "YourStory",
            "title": "Open receives RBI's final nod for payment aggregator licence - YourStory",
            "description": null,
            "url": "https://yourstory.com/2023/12/bengaluru-fintech-open-obtains-rbi-approval-for-pa-pg-licence",
            "urlToImage": null,
            "publishedAt": "2023-12-20T07:31:22Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "Vishal Mathur",
            "title": "Google Maps introduces address descriptors, live view walking navigation in India - Hindustan Times",
            "description": "Lens in Maps, fuel-saving navigation and address descriptors arrive on Google Maps in early 2024, with some remaining Android exclusive, for now. Public transport guidance is the next big focus area",
            "url": "https://www.hindustantimes.com/business/google-maps-introduces-address-descriptors-live-view-walking-navigation-in-india-101703057341500.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Google-has-worked-with-AI-solutions-and-street-ima_1703057334609.jpg",
            "publishedAt": "2023-12-20T07:29:01Z",
            "content": "Google Maps, as you use it already, is in for a fairly significant change, which you will notice in the coming days and weeks. The tech giant with a specific focus on India, is adding an assortment o… [+5914 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Zee Business"
            },
            "author": null,
            "title": "Azad Engineering IPO Takes Flight As Subscription Opens From Dec 20-22 | Stock Market News - Zee Business",
            "description": "Azad Engineering, a leading manufacturer of aerospace components and turbines, launched its IPO on December 20 with a price band of Rs 499-524 per share. The IPO will be open for subscription until December 22. It's a combination of fresh issue and offer for …",
            "url": "https://www.zeebiz.com/market-news/video-gallery-azad-engineering-ipo-takes-flight-as-subscription-opens-from-dec-20-22-stock-market-news-269408",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/20/273664",
            "publishedAt": "2023-12-20T07:06:01Z",
            "content": "By accepting cookies, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts."
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "India Shelter share price debuts at 25% premium, should investors buy, sell or hold? Experts answer | Mint - Mint",
            "description": "India Shelter Finance shares were listed at  ₹620 apiece on NSE, a premium of 25.76% to the issue price of  ₹493 per share.",
            "url": "https://www.livemint.com/market/ipo/india-shelter-share-price-debuts-at-25-premium-should-investors-buy-sell-or-hold-experts-answer-11703054168010.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/3-0-97431674-iStock-834792042-0_1679787577110_1703054374342.jpg",
            "publishedAt": "2023-12-20T06:50:56Z",
            "content": "India Shelter IPO Listing: India Shelter Finance Corporation Ltd made a decent Dalal Street debut on Wednesday as the stock was listed with more than 25% premium to the issue price. India Shelter Fin… [+5147 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Business Desk",
            "title": "BSE Sensex, Nifty50 hit new highs as Dalal Street continues party into year-end - IndiaTimes",
            "description": "India Business News: Indian benchmark equity indices have hit new record highs on Wednesday, following gains in Asian markets. This came after China and Japan decided to k",
            "url": "https://timesofindia.indiatimes.com/business/india-business/bse-sensex-nifty50-hit-new-highs-as-dalal-street-continues-party-into-year-end/articleshow/106144527.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-106145298,width-1070,height-580,imgsize-62466,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-12-20T06:17:47Z",
            "content": null
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
              "id": null,
              "name": "Tradebrains.in"
            },
            "author": "Trade Brains",
            "title": "Stock to Buy: Bank stock that can deliver returns of more than 20% - Trade Brains",
            "description": "The shares of this public sector bank hit 52-week high of Rs 660.40 apiece after a well-known brokerage recommended a ‘buy’ rating.",
            "url": "https://tradebrains.in/features/stock-to-buy-bank-stock-that-can-deliver-returns-of-more-than-20/",
            "urlToImage": "https://tradebrains.in/features/wp-content/uploads/2023/08/market-21.jpg",
            "publishedAt": "2023-12-20T05:22:00Z",
            "content": "The shares of this public sector bank hit 52-week high of Rs 660.40 apiece after a well-known brokerage recommended a buy rating. \r\nWith a market capitalization of Rs 5.84 lakh crores, the shares of … [+3017 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Unclaimed deposits with banks soar to ₹42,270 crore, up 28% shows Parliament data | Mint - Mint",
            "description": "Compared to the preceding financial year of FY22, where the unclaimed deposits with both public and private sector banks stood at  ₹32,934 crore, the current figure represents a noteworthy increase to  ₹42,272 crore by the end of March 2023, marking a 28 perc…",
            "url": "https://www.livemint.com/industry/banking/unclaimed-deposits-with-banks-soar-to-rs-42-270-crore-up-28-shows-parliament-data-11703047089406.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/20/1600x900/deposits_savings_banks_unclaimed_deposits_banking_1703047651385_1703047651581.jpg",
            "publishedAt": "2023-12-20T04:52:26Z",
            "content": "The latest data unveiled in Parliament on December 19 indicates a significant surge of 28 percent in unclaimed deposits held by banks, reaching a total of 42,270 crore as of March 2023. Compared to t… [+3199 chars]"
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
              "name": "CNBCTV18"
            },
            "author": "Hormaz Fatakia",
            "title": "DOMS Industries, the fourth-most subscribed Indian IPO of 2023 lists at a 77% premium - CNBCTV18",
            "description": "For a ₹1,200 crore IPO, DOMS Industries ended up receiving bids worth ₹65,000 crore.",
            "url": "https://www.cnbctv18.com/market/doms-ipo-share-listing-today-know-gmp-proceeds-capex-outlook-subscription-18606661.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2021/04/IPO6-1019x573.jpg",
            "publishedAt": "2023-12-20T04:30:27Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Affairscloud.com"
            },
            "author": null,
            "title": "World Bank : India tops Global Remittance Charts at USD 125 Billion in 2023 - AffairsCloud.com",
            "description": null,
            "url": "https://affairscloud.com/wbs-migration-and-development-brief-39-india-tops-global-remittance-charts-at-usd-125-billion-in-2023/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T01:30:37Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Financial Express"
            },
            "author": "The Financial Express",
            "title": "Go First acquisition soon! SpiceJet, two other foreign companies in race to bid for bankrupt airline – What we know - The Financial Express",
            "description": null,
            "url": "https://www.financialexpress.com/business/airlines-aviation-go-first-acquisition-soon-spicejet-two-other-foreign-companies-in-race-to-bid-for-bankrupt-airline-what-we-know-3342919/",
            "urlToImage": null,
            "publishedAt": "2023-12-20T01:00:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Deccan Herald"
            },
            "author": "Lavpreet Kaur",
            "title": "Alstom to foray into signalling component making in India - Deccan Herald",
            "description": "Alstom to foray into signalling component making in India",
            "url": "https://www.deccanherald.com/business/companies/alstom-to-foray-into-signalling-component-making-in-india-2818059",
            "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Ff929666e-1957-40c1-9156-1b01b35be19e%2FiStock_628490272.jpg?rect=0%2C16%2C836%2C439&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
            "publishedAt": "2023-12-19T23:53:32Z",
            "content": "Underscoring that the rail networks in India are used up to 160-180% of their capacity, Kamaldeen suggested that the use of moving block technologies such as European Train Control System (ETCS) sign… [+317 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": null,
            "title": "8 predictions for AI in 2024 - TechCrunch",
            "description": null,
            "url": "https://techcrunch.com/2023/12/19/8-predictions-for-ai-in-2024/",
            "urlToImage": null,
            "publishedAt": "2023-12-19T16:20:29Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 242 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Psuwatch.com"
            },
            "author": "PSU Watch Bureau, PTI",
            "title": "Finance Ministry to review performance of PSBs on Dec 22 - PSU Watch",
            "description": "New Delhi: The Ministry of Finance has called a meeting of heads of public sector banks on Friday to review the performance of lenders on various parameters, in",
            "url": "https://psuwatch.com/newsupdates/finance-ministry-to-review-performance-of-psbs-on-dec-22",
            "urlToImage": "https://media.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F06%2FFinance-Ministry-PSU-Watch-min.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
            "publishedAt": "2023-12-19T15:33:39Z",
            "content": "The meeting will also review the working of National Asset Reconstruction Company Limited (NARCL), sources said.\r\nNARCL, a Government entity, was incorporated in 2021 with a majority stake held by Pu… [+282 chars]"
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
