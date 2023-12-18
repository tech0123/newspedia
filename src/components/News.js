import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const filteredData = [
        {
          "science": [
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
              "title": "Study suggests first people reached North America via ‘sea ice highway’ around 24,000 years ago - WION",
              "description": "Study suggests first people reached North America via ‘sea ice highway’ around 24,000 years ago",
              "url": "https://www.wionews.com/science/study-suggests-first-people-reached-north-america-via-sea-ice-highway-around-24000-years-ago-670564",
              "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/17/399705-wion-images-2023-12-17t170749943.png",
              "publishedAt": "2023-12-17T11:24:55Z",
              "content": "How and when did humans get to North America? It is arguably one of the most hotly debated topics in archaeology. There have been many theories and studies over the years, and a recent study suggests… [+3042 chars]"
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
                "name": "Hindustan Times"
              },
              "author": "Trisha Sengupta",
              "title": "NASA unveils never-seen-before pic of missing space tomatoes found after months - Hindustan Times",
              "description": "“Sun-dried tomatoes,” wrote a YouTube user while reacting to a video about the missing space tomatoes that were found after 8 months. | Trending",
              "url": "https://www.hindustantimes.com/trending/nasa-unveils-never-seen-before-pic-of-missing-space-tomatoes-found-after-8-months-101702800509695.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/YouTube_Video_Viral_Space_Tomato_NASA_1702800723782_1702800724061.png",
              "publishedAt": "2023-12-17T08:21:41Z",
              "content": "NASA took to YouTube to share an interesting video that shows how two tomatoes look after being missing for months. A few days ago, astronauts aboard the International Space Station (ISS) solved a pe… [+2133 chars]"
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
                "name": "Herzindagi.com"
              },
              "author": "Akshita Jolly",
              "title": "Cleaning Hacks: Top 5 Things To Clean With Toothpaste At Home - HerZindagi",
              "description": "Cleaning Hacks, Top 5 Things To Clean With Toothpaste At Home: Well, toothpaste has many uses and it can be used to clean many things besides your teeth. Tap to see these things that you can clean with toothpaste easily at home.",
              "url": "https://www.herzindagi.com/web-stories/society-culture/cleaning-hacks-top-5-things-to-clean-with-toothpaste-at-home-ws-21711",
              "urlToImage": "https://images.herzindagi.info/webstories/21711/social-media-akshita--9--1702464528.jpeg",
              "publishedAt": "2023-12-17T07:30:00Z",
              "content": "<ul>Well, toothpaste has many uses and it can be used to clean many things besides your teeth. Tap to see these things that you can clean with toothpaste easily at home. </ul>\r\nEliminate food odours … [+985 chars]"
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
                "name": "Nature.com"
              },
              "author": null,
              "title": "The first identification of cronstedtite in Cu–Ni–PGE ores of the Talnakh intrusion | Scientific Reports - Nature.com",
              "description": "Scientific Reports - The first identification of cronstedtite in Cu–Ni–PGE ores of the Talnakh intrusion",
              "url": "https://www.nature.com/articles/s41598-023-49953-x",
              "urlToImage": "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-023-49953-x/MediaObjects/41598_2023_49953_Fig1_HTML.png",
              "publishedAt": "2023-12-17T06:17:28Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Men's Eggs, Women's Sperm: Stem Cell Science May Change How We Reproduce - NDTV",
              "description": "It may soon be possible to coax human skin cells into becoming functional eggs and sperm using a technique known as \"in vitro gametogenesis\". This involves the creation (genesis) of eggs and sperm (gametes) outside the human body.",
              "url": "https://www.ndtv.com/science/eggs-from-men-sperm-from-women-stem-cell-science-may-change-how-we-reproduce-4689273",
              "urlToImage": "https://c.ndtvimg.com/2023-12/n5lsdi7_baby-generic_625x300_17_December_23.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20231203.06",
              "publishedAt": "2023-12-17T04:41:19Z",
              "content": "There is the possibility of a child having multiple genetically-related parents, or only one.\r\nIt may soon be possible to coax human skin cells into becoming functional eggs and sperm using a techniq… [+7280 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Nature.com"
              },
              "author": null,
              "title": "First complete mitogenome of Massarineae and its contribution to phylogenetic implications in Pleosporales | Scientific Reports - Nature.com",
              "description": "Scientific Reports - First complete mitogenome of Massarineae and its contribution to phylogenetic implications in Pleosporales",
              "url": "https://www.nature.com/articles/s41598-023-49822-7",
              "urlToImage": "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-023-49822-7/MediaObjects/41598_2023_49822_Fig1_HTML.png",
              "publishedAt": "2023-12-17T04:26:20Z",
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
                "name": "Hindustan Times"
              },
              "author": "ANI",
              "title": "How body reacts to high or low oxygen levels: Study - Hindustan Times",
              "description": "The study shows how breathing air containing more oxygen than what is required by the body can lead to health problems or even death. | Health",
              "url": "https://www.hindustantimes.com/lifestyle/health/how-body-reacts-to-high-or-low-oxygen-levels-study-101702783370425.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/INDIA-POLLUTION-HEALTH-CHILDREN-17_1699503595275_1702783491869.jpg",
              "publishedAt": "2023-12-17T03:27:06Z",
              "content": "It only takes a few seconds of holding your breath to know that not obtaining adequate oxygen is detrimental to your health. Is it possible, however, to have too much? Indeed, breathing air that cont… [+4631 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "ThePrint"
              },
              "author": "Akanksha Mishra",
              "title": "Aditya L1 unveils full-disk images of Sun, telescope aboard used 11 filters to show new details - ThePrint",
              "description": "ScientiFix, our weekly feature, offers you a summary of the top global science stories of the week, with links to their sources.",
              "url": "https://theprint.in/scientifix/aditya-l1-unveils-full-disk-images-of-sun-telescope-aboard-used-11-filters-to-show-new-details/1889030/",
              "urlToImage": "https://static.theprint.in/wp-content/uploads/2023/12/Untitled-design-32-2.jpg",
              "publishedAt": "2023-12-17T02:30:52Z",
              "content": "This imagery includes features like sunspots, which are dark spots on the sun where the magnetic field is strong, offering scientists valuable insights.\r\nThe collaborative effort, led by the Inter-Un… [+3757 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Zoom"
              },
              "author": "TN World Desk",
              "title": "Elon Musk's SpaceX And US Space Force's Secret Mission Delayed: Spy Plane X-37B To Fly On THIS Date - Times Now",
              "description": "The company's focus and energy will be to cater to a four-hour launch window starting at 7 p.m. ET on Thursday, December 28. The launch will take place at NASA’s Kennedy Space Center in Florida. It was originally scheduled to launch on December 11, but the fi…",
              "url": "https://www.timesnownews.com/world/elon-musks-spacex-and-us-space-forces-secret-mission-delayed-spy-plane-x-37b-to-fly-on-this-date-article-106055474",
              "urlToImage": "https://static.tnn.in/thumb/msid-106055471,thumbsize-148778,width-1280,height-720,resizemode-75/106055471.jpg",
              "publishedAt": "2023-12-17T02:02:06Z",
              "content": "When John Abraham Called Himself 'Big-Screen Hero', Said He Won't Be 'Available On OTT For Rs 299 Or Rs 499'"
            },
            {
              "source": {
                "id": null,
                "name": "Ticker.tv"
              },
              "author": "Betty Davis",
              "title": "Scientists Discover New Species of Deep-Sea Fish - TickerTV News",
              "description": "Scientists Discover New Species of Deep-Sea Fish - TickerTV News",
              "url": "https://ticker.tv/news/diddy-pays-tribute-to-late-ex-girlfriend-kim-porter-on-instagram/341723/",
              "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_mens_using_smartphone_or_computer_on_outdoor_48e3f3cf-8d21-4f89-b72c-d7c0e970fcec.png",
              "publishedAt": "2023-12-17T01:24:27Z",
              "content": "Summary: A recent scientific discovery has unveiled the existence of a previously unknown species of deep-sea fish. Researchers made the finding during a deep-sea expedition, where they encountered t… [+1929 chars]"
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
                "name": "Citylife.capetown"
              },
              "author": "Gabriel Botha",
              "title": "The Celestial Ballet: Prepare to Witness the Enchanting \"Ring of Fire\" Solar Eclipse - CityLife",
              "description": "The Celestial Ballet: Prepare to Witness the Enchanting \"Ring of Fire\" Solar Eclipse - CityLife",
              "url": "https://citylife.capetown/uncategorized/us-will-see-ring-of-fire-solar-eclipse/534995/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_men_6b52c281-f6b9-4c4b-958b-e02e83b80c34.jpeg",
              "publishedAt": "2023-12-16T23:23:15Z",
              "content": "Summary: Astronomers and stargazers are eagerly awaiting the upcoming “Ring of Fire” solar eclipse, where the moon will create a mesmerizing ring-like effect as it passes in front of the sun. This aw… [+4021 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Citylife.capetown"
              },
              "author": "Vicky Stavropoulou",
              "title": "NASA Collaborates with ISRO to Support Chandrayaan-3 Lunar Mission - CityLife",
              "description": "NASA Collaborates with ISRO to Support Chandrayaan-3 Lunar Mission - CityLife",
              "url": "https://citylife.capetown/nasa/is-nasa-tracking-chandrayaan-3-2/534932/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_robotic_technologies_of_XXI_century_h_a9a164f1-8aa3-4e6d-bdcb-ce7be4406a47.jpeg",
              "publishedAt": "2023-12-16T22:49:38Z",
              "content": "NASA, the renowned space agency of the United States, has formed a collaborative partnership with the Indian Space Research Organisation (ISRO) to support and assist India’s upcoming lunar mission, C… [+1859 chars]"
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
              "author": "The Financial Express",
              "title": "METEOR SHOWERS: Here’s a look at some of the most established meteor showers known in recent years - The Financial Express",
              "description": null,
              "url": "https://www.financialexpress.com/life/science-meteor-showers-heresnbspa-look-at-some-of-the-most-establishednbspmeteor-showers-known-in-recent-years-3340339/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T19:45:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Citylife.capetown"
              },
              "author": "Mampho Brescia",
              "title": "Chandrayaan-3 Successfully Completes Epic Journey to the Moon - CityLife",
              "description": "Chandrayaan-3 Successfully Completes Epic Journey to the Moon - CityLife",
              "url": "https://citylife.capetown/nasa/how-much-distance-travelled-by-chandrayaan-3-from-earth-to-moon-2/534424/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_man_19d57e9b-aa17-4d10-b740-0fd2d5c2e158.jpeg",
              "publishedAt": "2023-12-16T19:22:49Z",
              "content": "Chandrayaan-3, the Indian Space Research Organisation’s (ISRO) third lunar mission, has completed an incredible voyage from Earth to the Moon. This article explores the remarkable distance covered by… [+2305 chars]"
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
                "name": "Citylife.capetown"
              },
              "author": "Robert Andrew",
              "title": "Chandrayaan-3 Faces Communication Issues, Scientists Working on Solutions - CityLife",
              "description": "Chandrayaan-3 Faces Communication Issues, Scientists Working on Solutions - CityLife",
              "url": "https://citylife.capetown/nasa/why-is-chandrayaan-3-not-responding-2/534306/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_future_4fe05ecf-0148-4a8e-8ca1-da3ca853b4d1.jpeg",
              "publishedAt": "2023-12-16T18:41:45Z",
              "content": "Summary: India’s ambitious lunar mission, Chandrayaan-3, has encountered communication problems and is currently unresponsive. This setback has raised concerns among scientists and space enthusiasts.… [+2978 chars]"
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
                "name": "Citylife.capetown"
              },
              "author": "Vicky Stavropoulou",
              "title": "Does Chandrayaan-3 have humans in it? - CityLife",
              "description": "Does Chandrayaan-3 have humans in it? - CityLife",
              "url": "https://citylife.capetown/uncategorized/does-chandrayaan-3-have-humans-in-it/534130/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_robotic_automatization_high_resolutio_ad14fad2-5238-40e8-abc5-98fb79cbd481.jpeg",
              "publishedAt": "2023-12-16T17:26:22Z",
              "content": "Summary:Chandrayaan-3, the upcoming lunar mission by the Indian Space Research Organisation (ISRO), has sparked speculation about the inclusion of human astronauts. However, ISRO has clarified that C… [+2751 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "ANI News"
              },
              "author": "ANI News",
              "title": "Researchers give more insight into how new genes arise from nothing - ANI News",
              "description": null,
              "url": "https://www.aninews.in/news/health/researchers-give-more-insight-into-how-new-genes-arise-from-nothing20231216224535",
              "urlToImage": null,
              "publishedAt": "2023-12-16T17:17:35Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Devdiscourse"
              },
              "author": "Devdiscourse News Desk",
              "title": "NASA and Sierra Space make progress on Dream Chaser's first flight to space station - Devdiscourse",
              "description": "Read more about NASA and Sierra Space make progress on Dream Chaser's first flight to space station on Devdiscourse",
              "url": "https://www.devdiscourse.com/article/science-environment/2748322-nasa-and-sierra-space-make-progress-on-dream-chasers-first-flight-to-space-station",
              "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/16_12_2023_21_04_25_1881619.webp?width=920&format=jpeg",
              "publishedAt": "2023-12-16T15:37:00Z",
              "content": "Sierra Space, a leading aerospace company, and NASA are forging ahead with plans to launch an uncrewed cargo spaceplane, named Dream Chaser, to the International Space Station. The spaceplane has ent… [+1958 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Space.com"
              },
              "author": "Space.com Staff",
              "title": "This Week In Space podcast: Episode 91 — 2023 Holiday Special! - Space.com",
              "description": "On Episode 91 of This Week In Space, Tariq and Rod discuss the year in review with Leonard David.",
              "url": "https://www.space.com/this-week-in-space-episode-91-year-in-review",
              "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZteTbT6yNnBuyC3oqQRtJo-1200-80.jpg",
              "publishedAt": "2023-12-16T15:32:36Z",
              "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
            },
            {
              "source": {
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "The Hindu",
              "title": "Additional organic molecules found in Enceladus’s plume - The Hindu",
              "description": null,
              "url": "https://www.thehindu.com/sci-tech/additional-organic-molecules-found-in-enceladuss-plume/article67642216.ece",
              "urlToImage": null,
              "publishedAt": "2023-12-16T15:30:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Citylife.capetown"
              },
              "author": "Robert Andrew",
              "title": "Satyendra Nath Bose and Albert Einstein: A Revolutionary Scientific Partnership - CityLife",
              "description": "Satyendra Nath Bose and Albert Einstein: A Revolutionary Scientific Partnership - CityLife",
              "url": "https://citylife.capetown/education/which-indian-scientist-worked-with-einstein-2/533844/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_man_c01e8acc-9dd6-455c-8cf1-cbf4829b88d4.jpeg",
              "publishedAt": "2023-12-16T15:23:58Z",
              "content": "Summary: This article explores the remarkable collaboration between Indian physicist Satyendra Nath Bose and renowned physicist Albert Einstein, highlighting their groundbreaking work on quantum mech… [+2863 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "ESA Astronaut Shares Incredible Pictures Of Icebergs As Seen From Space - NDTV",
              "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
              "url": "https://www.ndtv.com",
              "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
              "publishedAt": "2023-12-16T15:21:09Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Citylife.capetown"
              },
              "author": "Robert Andrew",
              "title": "Indian Space Research Organization (ISRO) Achieves Milestone with Chandrayaan-2 Mission to the Moon - CityLife",
              "description": "Indian Space Research Organization (ISRO) Achieves Milestone with Chandrayaan-2 Mission to the Moon - CityLife",
              "url": "https://citylife.capetown/space/indien-startet-erfolgreich-die-chandrayaan-2019-mission-zur-erforschung-des-mondes/533795/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_new_technologies_high_resolution_27afee36-3165-4834-b2f7-f1c20eb6da2a.jpeg",
              "publishedAt": "2023-12-16T15:03:14Z",
              "content": "The Indian Space Research Organization (ISRO) recently achieved a significant milestone in its space exploration efforts with the successful launch of the Chandrayaan-2 mission to the Moon. The missi… [+2433 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Our Webb Space Telescope’s New Look at an Exploded Star on This Week @NASA – December 15, 2023 - NASA",
              "description": "Our Webb Space Telescope’s new look at an exploded star, teams prepare to install some Moon rocket hardware, and completing NASA’s first two-way, end-to-end ...",
              "url": "https://www.youtube.com/watch?v=mZx4DSUzFFQ",
              "urlToImage": "https://i.ytimg.com/vi/mZx4DSUzFFQ/maxresdefault.jpg",
              "publishedAt": "2023-12-16T15:00:29Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Newstap.in"
              },
              "author": "NewsTAP Bureau",
              "title": "Hyderabad to witness Ursids meteor showers from December 16-23 - NewsTap",
              "description": "Enthusiasts might witness up to 10 meteors per hour at the shower’s peak. An opportune moment for viewing is predicted on December 23, with exceptional visibility between 2:55 am and 5:50 am.",
              "url": "https://www.newstap.in/city-news/hyderabad-to-witness-ursids-meteor-showers-from-december-16-23-1509944",
              "urlToImage": "https://www.newstap.in/h-upload/2023/12/16/1570248-ursid.jpg",
              "publishedAt": "2023-12-16T14:12:39Z",
              "content": "HYDERABAD: Sky-gazers in the city are in for a celestial treat with the Ursids meteor shower will grace the city's skies, marking the final major meteor event of the year. \r\nPlanetary Society of Indi… [+758 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Chris Hadfield talks Starfield, SpaceX Starship and Canada's space program in exclusive interview - VideoFromSpace",
              "description": "Canadian astronaut Chris Hadfield talks to Space.com about Starfield, new spaceships like SpaceX's Starship and the fleet of new Canadian astronaut announcem...",
              "url": "https://www.youtube.com/watch?v=Y3idPlofyd8",
              "urlToImage": "https://i.ytimg.com/vi/Y3idPlofyd8/maxresdefault.jpg",
              "publishedAt": "2023-12-16T13:23:55Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Nature.com"
              },
              "author": null,
              "title": "Experimental study on the gas desorption law in coal affected by dynamic water injection | Scientific Reports - Nature.com",
              "description": "Scientific Reports - Experimental study on the gas desorption law in coal affected by dynamic water injection",
              "url": "https://www.nature.com/articles/s41598-023-49607-y",
              "urlToImage": "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-023-49607-y/MediaObjects/41598_2023_49607_Fig1_HTML.png",
              "publishedAt": "2023-12-16T13:06:39Z",
              "content": null
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
              "author": "Vicky Stavropoulou",
              "title": "India's Ambitious Plans for a Second Mission to Mars - CityLife",
              "description": "India's Ambitious Plans for a Second Mission to Mars - CityLife",
              "url": "https://citylife.capetown/space/is-isro-going-to-mars-2/533315/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_men_51cfddfc-7c1c-44a9-964e-69f6ce100c7e.jpeg",
              "publishedAt": "2023-12-16T11:30:40Z",
              "content": "India’s space agency, the Indian Space Research Organisation (ISRO), has been making impressive advancements in space exploration. After the success of its first Mars Orbiter Mission (MOM) in 2013, I… [+2205 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Watch again: NASA’s SpaceX CRS-29 cargo craft undocks from space station - The Independent",
              "description": "Watch again as Nasa’s SpaceX CRS-29 cargo craft undocks from the International Space Station (ISS) on 15 December.The CRS-29 Dragon spacecraft began undockin...",
              "url": "https://www.youtube.com/watch?v=IhECSzYV3tY",
              "urlToImage": "https://i.ytimg.com/vi/IhECSzYV3tY/maxresdefault.jpg",
              "publishedAt": "2023-12-16T11:25:11Z",
              "content": null
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
            },
            {
              "source": {
                "id": null,
                "name": "Citylife.capetown"
              },
              "author": "Mampho Brescia",
              "title": "ISRO: India's Journey in Space Exploration - CityLife",
              "description": "ISRO: India's Journey in Space Exploration - CityLife",
              "url": "https://citylife.capetown/technology/which-country-belongs-to-isro-2/533313/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_new_technologies_high_resolution_8cba567c-393a-46ab-ae1e-fa235870e679.jpeg",
              "publishedAt": "2023-12-16T11:21:22Z",
              "content": "India’s space agency, the Indian Space Research Organisation (ISRO), has made tremendous strides in the field of space exploration, satellite technology, and scientific research. Established in 1969,… [+2092 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Citylife.capetown"
              },
              "author": "Mampho Brescia",
              "title": "Can you see the US flag on the moon? - CityLife",
              "description": "Can you see the US flag on the moon? - CityLife",
              "url": "https://citylife.capetown/uncategorized/can-you-see-the-us-flag-on-the-moon/533287/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_new_technologies_of_XXI_century_high__e1f98eb8-1c62-4256-a55e-65cce7ebee26.jpeg",
              "publishedAt": "2023-12-16T11:20:28Z",
              "content": "Summary:The question of whether the United States flag is visible on the moon has been a subject of debate and curiosity for many years. This article aims to shed light on this topic by examining the… [+3443 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Free Press Journal"
              },
              "author": "Aditi Thakur",
              "title": "Artificial Lights Or Aurora? Latest Study Challenges Conventions About Night Sky - Free Press Journal",
              "description": "Similar in look and behaviour to auroras, the Steve and Picket Fence phenomena are distinct and not categorised as traditional auroras.",
              "url": "https://www.freepressjournal.in/science/artificial-lights-or-aurora-latest-study-challenges-conventions-about-night-sky",
              "urlToImage": "https://media.assettype.com/freepressjournal/2023-12/90d6fa39-e7ae-4a9a-9616-c9eeff7274b2/Fr_rAtiWIAMU4ZR.jfif",
              "publishedAt": "2023-12-16T10:50:18Z",
              "content": "Aurora is the ethereal display of light waves that has always intrigued skygazers and lovers. However, there is a similar phenomenon to the aurora, known as 'Steve' and 'Picket Fence.' Holding simila… [+1877 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Zoom"
              },
              "author": "TN Tech Desk",
              "title": "NASA Warns Asteroid 2023 XJ13 Will Come Alarmingly Close to Earth Today! - Times Now",
              "description": "NASA traces a space rock, Asteroid 2023 XJ13 sailing towards the Earth at a blazing speed. Read further and know everything that NASA has suggested about this asteroid.",
              "url": "https://www.timesnownews.com/technology-science/nasa-warns-asteroid-2023-xj13-will-alarmingly-close-to-earth-today-article-106045082",
              "urlToImage": "https://static.tnn.in/thumb/msid-106045144,thumbsize-423485,width-1280,height-720,resizemode-75/106045144.jpg",
              "publishedAt": "2023-12-16T09:58:41Z",
              "content": "Delhi Man Drags Lifestyle To Court Over Rs 7 Fee For Paper Bag, Gets Rs 3,000 Compensation"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Year-Ender 2023: Top 5 times Nasa, ISS shared Earth's stellar poses for the Cosmic Kaleidoscope | Mint - Mint",
              "description": "NASA's Instagram highlights, ranging from the Horn of Africa to the Himalayas, provide straightforward yet striking glimpses of our home planet. As we reflect on the year, these space snapshots serve as a reminder of the beauty and fragility of Earth in the v…",
              "url": "https://www.livemint.com/science/news/yearender-2023-top-5-times-nasa-iss-shared-earths-stellar-poses-for-the-cosmic-kaleidoscope-11702698589773.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/3-0-13258528-istockphoto-1062473882-2048x2048-0_1679832310043_1702700629861.jpg",
              "publishedAt": "2023-12-16T09:32:26Z",
              "content": "As we bid adieu to another year, Mint takes a look at a cosmic journey through some of the most captivating snapshots shared by NASA of our home planet from the vastness of space. Brace yourselves fo… [+3130 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "msnNOW"
              },
              "author": null,
              "title": "Multiple geomagnetic storms headed towards Earth, more radio blackouts expected - MSN",
              "description": null,
              "url": "https://www.msn.com/en-in/news/techandscience/multiple-geomagnetic-storms-headed-towards-earth-more-radio-blackouts-expected/ar-AA1lAx2y?ocid=weather-verthp-feeds",
              "urlToImage": null,
              "publishedAt": "2023-12-16T09:12:23Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Are You A Morning Person? Thank Your Neanderthal Ancestors - NDTV",
              "description": "New research suggests that individuals who are naturally early risers may have inherited genetic variants from Neanderthals.",
              "url": "https://www.ndtv.com/science/are-you-a-morning-person-thank-your-neanderthal-ancestors-4684712",
              "urlToImage": "https://c.ndtvimg.com/2023-12/lqenvv18_neanderthals_625x300_16_December_23.jpeg?ver-20231203.06",
              "publishedAt": "2023-12-16T09:02:28Z",
              "content": "All anatomically modern humans trace their origin to Africa.\r\nPeople who naturally wake up early in the morning might have their Neanderthal ancestors to thank, suggests recent research published in … [+1867 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Ticker.tv"
              },
              "author": "Tanya King",
              "title": "Astronomers Uncover Astonishing Intergalactic Stellar Stream in Deep Space - TickerTV News",
              "description": "Astronomers Uncover Astonishing Intergalactic Stellar Stream in Deep Space - TickerTV News",
              "url": "https://ticker.tv/news/intergalactic-stream-of-stars-10-times-longer-than-the-milky-way-is-the-1st-of-its-kind-ever-spotted/341825/",
              "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_a_man_using_smartphone_or_computer_on_outdoor_8e6f1d0b-5c2b-411f-86fc-ecd5cfe5a57c.png",
              "publishedAt": "2023-12-16T08:01:36Z",
              "content": "A groundbreaking study has revealed the accidental discovery of the very first known intergalactic trail of stars. This colossal “stellar stream” is estimated to be 10 times longer than our own Milky… [+2684 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Graphene-Info"
              },
              "author": null,
              "title": "Researchers use ultrafast lasers to map ballistic movement of electrons in graphene - Graphene-Info",
              "description": "Researchers at the University of Kansas’ Ultrafast Laser Lab have observed the ballistic movement of electrons in graphene in real time.  Image credit: University of Kansas“Generally, electron movement is interrupted by collisions with other particles in soli…",
              "url": "https://www.graphene-info.com/researchers-use-ultrafast-lasers-map-ballistic-movement-electrons-graphene",
              "urlToImage": null,
              "publishedAt": "2023-12-16T05:58:51Z",
              "content": "Researchers at the University of Kansas Ultrafast Laser Lab have observed the ballistic movement of electrons in graphene in real time. \r\nImage credit: University of Kansas\r\nGenerally, electron movem… [+4696 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Udayavani.com"
              },
              "author": "Udayavani English",
              "title": "Scientists generate compounds with diamond-like hardness - Udayavani English",
              "description": null,
              "url": "https://www.udayavani.com/english-news/scientists-generate-compounds-with-diamond-like-hardness",
              "urlToImage": null,
              "publishedAt": "2023-12-16T05:51:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Forbesindia.com"
              },
              "author": null,
              "title": "Thawing permafrost in Norway could release unexpected quantities of methane - Forbes India",
              "description": "In addition to the threat posed by climate change, oil and gas operations located close to areas of permafrost accelerate its thaw",
              "url": "https://www.forbesindia.com/article/lifes/thawing-permafrost-in-norway-could-release-unexpected-quantities-of-methane/90357/1",
              "urlToImage": "https://www.forbesindia.com/media/images/2023/Dec/img_224703_norway.jpg",
              "publishedAt": "2023-12-16T05:06:36Z",
              "content": "For hassle free instant subscription, just give your number and email id and our customer care agent will get in touch with you"
            },
            {
              "source": {
                "id": null,
                "name": "DNA India"
              },
              "author": "Mahipal Chouhan",
              "title": "8 Oldest animal species that are still living - DNA India",
              "description": "Here's a list of 8 Oldest animal species that are still living",
              "url": "https://www.dnaindia.com/web-stories/viral/8-oldest-animal-species-that-are-still-living-crocodile-wild-dinosaur-africa--1702697081399",
              "urlToImage": null,
              "publishedAt": "2023-12-16T03:48:39Z",
              "content": "Dec 16, 2023, 09:18AM IST"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Never-Before-Seen Anomaly Found In Fast Radio Bursts, Say Astronomers - NDTV",
              "description": "Astronomers think at least some FRBs are generated by a type of neutron star known as a magnetar.",
              "url": "https://www.ndtv.com/science/never-before-seen-anomaly-found-in-fast-radio-bursts-say-astronomers-4683439",
              "urlToImage": "https://c.ndtvimg.com/2023-12/ucn14h8o_fast-radio-bursts_625x300_16_December_23.jpeg?ver-20231203.06",
              "publishedAt": "2023-12-16T03:35:15Z",
              "content": "Fast radio bursts are brief and intense energy blasts that are brighter than galaxies.\r\nScientists are hot on the heels of unraveling the secrets of mysterious deep space signals, thanks to a peculia… [+2401 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Tech",
              "title": "Shukrayaan-1 mission: ISRO's odyssey to unravel Venus secrets and illuminate solar system mysteries - HT Tech",
              "description": "Shukrayaan1 mission ISROs odyssey to unravel Venus secrets and illuminate solar system mysteries Indian space agency ISRO is gearing up for a groundbreaking venture to Venus named Shukrayaan1 mission which is set to launch in the near future. Venus mission is…",
              "url": "https://tech.hindustantimes.com/web-stories/shukrayaan1-mission-isros-odyssey-to-unravel-venus-secrets-and-illuminate-solar-system-mysteries-71702716117130.html",
              "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/16/1600x900/venus_1673275382214_1702716261335.jpg/",
              "publishedAt": "2023-12-16T03:21:35Z",
              "content": "Photo Credit: Pixabay\r\n Indian space agency ISRO is gearing up for a groundbreaking venture to Venus, named Shukrayaan-1 mission, which is set to launch in the near future. Venus mission is poised to… [+1881 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "WION"
              },
              "author": "WION Web Team",
              "title": "Geminids meteor shower lights up night sky with a greenish hue - WION",
              "description": "Geminids meteor shower lights up night sky with a greenish hue",
              "url": "https://www.wionews.com/science/geminids-meteor-shower-lights-up-night-sky-with-a-greenish-hue-670168",
              "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/16/399468-untitled-design-2.png",
              "publishedAt": "2023-12-16T03:00:29Z",
              "content": "The Geminids meteor shower, which is seen in mid-December every year, has lit up the night skies once again. According to a report by Forbes on Friday (Dec 15), the meteor peaked on Thursday night. E… [+1542 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "NASA PACE Mission 2024: Mission To Study Environmental Changes On Earth - Telangana Today",
              "description": "NASA's upcoming Plankton, Aerosol, Cloud, and Ocean Ecosystem (PACE) mission is set to provide crucial insights into airborne particles and clouds, contribut...",
              "url": "https://www.youtube.com/watch?v=rC1N_tEXx-o",
              "urlToImage": "https://i.ytimg.com/vi/rC1N_tEXx-o/maxresdefault.jpg",
              "publishedAt": "2023-12-16T02:30:31Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Oup.com"
              },
              "author": null,
              "title": "Scientific Preparation for CSST: Classification of galaxy and Nebula/Star Cluster based on deep learning - Oxford Academic",
              "description": "Abstract. The Chinese Space Station Telescope (abbreviated as CSST) is a future advanced space telescope. Real-time identification of galaxy and nebula/star clu",
              "url": "https://academic.oup.com/mnras/advance-article/doi/10.1093/mnras/stad3815/7476003",
              "urlToImage": "https://academic.oup.com/data/sitebuilderassetsoriginals/live/images/mnras/mnras_ogimage.png",
              "publishedAt": "2023-12-16T01:21:31Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Earth.com"
              },
              "author": null,
              "title": "Laser technology could improve radiation treatments for cancer patients - Earth.com",
              "description": "Ultrafast laser technology represents a significant advancement in medical technology, particularly in the realm of cancer treatment",
              "url": "https://www.earth.com/news/laser-technology-could-improve-radiation-treatments-for-cancer-patients/",
              "urlToImage": "https://cff2.earth.com/uploads/2023/12/15172935/Laser-treatments-scaled.jpg",
              "publishedAt": "2023-12-16T00:32:16Z",
              "content": "Ultrafast laser technology represents a significant advancement in medical technology, particularly in the realm of cancer treatment.\r\nThis breakthrough, led by researchers at INRS and McGill Univers… [+3153 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Easternherald.com"
              },
              "author": "News Room, News Room",
              "title": "Scientists call for new era on Moon to reflect human influence - The Eastern Herald",
              "description": "A new era should be declared on the Moon to recognise human dominance. Human activity first disrupted the lunar surface when the USSR's spacecraft Luna 2 | The Eastern Herald",
              "url": "https://www.easternherald.com/2023/12/16/scientists-call-for-new-era-on-moon-to-reflect-human-influence/",
              "urlToImage": "https://www.easternherald.com/wp-content/uploads/2023/12/Scientists-call-for-new-era-on-Moon-to-reflect-human.jpeg",
              "publishedAt": "2023-12-16T00:27:00Z",
              "content": "A new era should be declared on the Moon to recognise human dominance.\r\nHuman activity first disrupted the lunar surface when the USSR’s spacecraft Luna 2 left a crater in 1959 and more than 100 othe… [+796 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": null,
              "title": "These huge Japanese 'dragons' hunted the ancient oceans - Yahoo News UK",
              "description": null,
              "url": "https://uk.news.yahoo.com/huge-japanese-dragons-hunted-ancient-001314360.html",
              "urlToImage": null,
              "publishedAt": "2023-12-16T00:13:00Z",
              "content": "If you click 'Accept all', we and our partners (including 241 who are part of the IAB Transparency &amp; Consent Framework) will also use cookies and your personal data, such as IP address, precise l… [+686 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Expedition 70 Astronaut Furukawa Discusses Space Station Science Experiments - Dec. 15, 2023 - NASA Video",
              "description": "Aboard the International Space Station, Expedition 70 Flight Engineer Satoshi Furukawa of JAXA (Japan Aerospace Exploration Agency) discussed science experim...",
              "url": "https://www.youtube.com/watch?v=eIi6h4yowWE",
              "urlToImage": "https://i.ytimg.com/vi/eIi6h4yowWE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGMgYyhjMA8=&rs=AOn4CLAQI9itIRMZNeGjUXZIFP3uO9UOLA",
              "publishedAt": "2023-12-15T20:09:49Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "News18"
              },
              "author": "Buzz Staff",
              "title": "From Sinking Into The Sun To Meteorite Collision, 4 Ways Earth May End - News18",
              "description": "Earth could be consumed by the Sun, ultimately marking the end of life on our planet.",
              "url": "https://www.news18.com/viral/from-sinking-into-the-sun-to-meteorite-collision-4-ways-earth-may-end-8704791.html",
              "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/image-9-2023-12-11d1cc20ff4c8a98b010a4aa79cd963b-16x9.jpg?impolicy=website&width=1200&height=675",
              "publishedAt": "2023-12-15T19:38:00Z",
              "content": "The Earth has surpassed the speculated apocalypse linked to Mayan predictions. Experts still serve caution that genuine threats still exist, with the potential to pose serious risks to the survival o… [+1917 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "WION"
              },
              "author": "WION Web Team",
              "title": "Parasite black holes devouring stars from inside, says study - WION",
              "description": "Parasite black holes devouring stars from inside, says study",
              "url": "https://www.wionews.com/science/parasite-black-holes-devouring-stars-from-inside-says-study-670146",
              "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/16/399457-untitled-design-2023-12-16t010801232.png",
              "publishedAt": "2023-12-15T19:33:26Z",
              "content": "In a new study, it has been found that an unusual candidate for dark matter, which can be referred to as parasite black holes, is likely to be lurking inside stars and slowly devouring them from the … [+2538 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "My Modern Met"
              },
              "author": "Margherita Cole",
              "title": "150-Million-Year-Old Pliosaur Fossil Discovered in the UK - My Modern Met",
              "description": "This stunning discovery is incredibly well-preserved with all 130 teeth intact!",
              "url": "https://mymodernmet.com/pliosaur-skull-discovered-in-uk/",
              "urlToImage": "https://mymodernmet.com/wp/wp-content/uploads/2023/12/pliosaur-fossil-fb.jpg",
              "publishedAt": "2023-12-15T18:35:14Z",
              "content": "MONSTER DISCOVERY: Naturalist David Attenborough is seen standing beside the over six-foot-long skull of a pliosaur, which was recently unearthed on England's Jurassic Coast. https://t.co/zR7x4Hs0rLp… [+3990 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Citylife.capetown"
              },
              "author": "Mampho Brescia",
              "title": "Newly Discovered Quasar Sheds Light on the Early Universe - CityLife",
              "description": "Newly Discovered Quasar Sheds Light on the Early Universe - CityLife",
              "url": "https://citylife.capetown/nasa/scientists-discover-giant-water-reservoir-floating-in-space-3/531827/",
              "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_new_technologies_high_resolution_87a7ba8a-5bfb-4414-8cf8-23b4f02e56f7.jpeg",
              "publishedAt": "2023-12-15T16:26:46Z",
              "content": "Astronomers have made an astounding discovery: the largest reservoir of water ever detected in the universe. This groundbreaking find comes from two teams of scientists at Caltech who have been study… [+2094 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Republic World"
              },
              "author": "Harsh Vardhan",
              "title": "Axiom Space to launch its 3rd private mission to International Space Station on January 9- Republic World - Republic World",
              "description": "Axiom SpaceX's Ax-3 mission launch will be carried out by Elon Musk's SpaceX on its Falcon 9 rocket and the Dragon spacecraft from NASA's Kennedy Space Center.",
              "url": "https://www.republicworld.com/science/space/axiom-space-to-launch-its-3rd-private-mission-to-international-space-station-on-january-9",
              "urlToImage": "https://img.republicworld.com/rimages/GBPK2KQWQAEFoRx-170265678894316_9.webp",
              "publishedAt": "2023-12-15T16:13:00Z",
              "content": "Axiom Space is kickstarting 2024 with a big-ticket mission to the International Space Station (ISS). The company announced on December 13 that it is targeting the launch of its third crewed mission o… [+2002 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Jagran Josh"
              },
              "author": "Nikhil Batra",
              "title": "Top 10 Coldest Places on Earth - Jagran Josh",
              "description": "",
              "url": "https://www.jagranjosh.com/general-knowledge/which-are-the-coldest-places-on-earth-1702654814-1",
              "urlToImage": "https://img.jagranjosh.com/images/2023/December/16122023/coldest-places.jpg",
              "publishedAt": "2023-12-15T15:40:04Z",
              "content": "Ever dreamed of experiencing the raw, bone-chilling embrace of the coldest places on Earth? While not everyone's cup of tea (or rather, mug of hot cocoa!), these icy landscapes offer a glimpse into t… [+3848 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Republic World"
              },
              "author": "Harsh Vardhan",
              "title": "NASA posts video of Orion's hellish re-entry through atmosphere during Artemis 1- Republic World - Republic World",
              "description": "Taking to X, NASA posted a video captured from inside the Orion spacecraft which returned after a 26-day journey around the Moon.",
              "url": "https://www.republicworld.com/science/space/nasa-posts-video-of-orion-s-hellish-re-entry-through-atmosphere-during-artemis-1",
              "urlToImage": "https://img.republicworld.com/rimages/WhatsAppImage2023-12-15at8.55.54PM-170265398583816_9.webp",
              "publishedAt": "2023-12-15T15:26:00Z",
              "content": "NASA scientists have found a key element necessary for the origin of life on one of Saturn's Moon. The Moon in question is Enceladus which is famous for spewing organic compounds into outer space.\r\nA… [+2617 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Phys.Org"
              },
              "author": "Bob Yirka",
              "title": "Captive Goffin's cockatoos found to dunk hard bread to improve its texture - Phys.org",
              "description": "A pair of veterinary medicine researchers at Medical University of Vienna and University of Vienna, in Austria, has found that some captive Goffin's cockatoos prefer to dunk their hard bread before eating it, seemingly as a means to improve its texture. In th…",
              "url": "https://phys.org/news/2023-12-captive-goffin-cockatoos-dunk-hard.html",
              "urlToImage": "https://scx2.b-cdn.net/gfx/news/2023/captive-goffins-cockat.jpg",
              "publishedAt": "2023-12-15T14:28:40Z",
              "content": "A pair of veterinary medicine researchers at Medical University of Vienna and University of Vienna, in Austria, has found that some captive Goffin's cockatoos prefer to dunk their hard bread before e… [+2868 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "News18"
              },
              "author": "Buzz Staff",
              "title": "Can Hydrogen Therapy Reverse Ageing? Scientists Think So - News18",
              "description": "The breakthrough study was published in Nature Communications, a peer-reviewed journal.",
              "url": "https://www.news18.com/viral/can-hydrogen-therapy-reverse-ageing-scientists-think-so-8704925.html",
              "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-13-2023-12-be34018a4669da1a72c7dcf4f5ab3db6-16x9.png?impolicy=website&width=1200&height=675",
              "publishedAt": "2023-12-15T12:44:04Z",
              "content": "In a breakthrough study, a team of scientists from China have been able to successfully allow hydrogen absorption for bone repair. For quite some time now, scientists around the world have known that… [+2269 chars]"
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
              "author": "ESPNcricinfo staff",
              "title": "Shami and Kishan to miss South Africa Tests, Chahar unavailable for ODIs - ESPNcricinfo",
              "description": "Shreyas Iyer, meanwhile, will leave the ODI squad after the first game to prepare for the Test series",
              "url": "https://www.espncricinfo.com/story/india-in-south-africa-mohammed-shami-ishan-kishan-to-miss-tests-deepak-chahar-unavailable-for-odis-1413015",
              "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/361300/361324.6.jpg",
              "publishedAt": "2023-12-17T11:28:28Z",
              "content": "NewsShreyas Iyer, meanwhile, will leave the ODI squad after the first game to prepare for the Test series"
            },
            {
              "source": {
                "id": null,
                "name": "Crictracker.com"
              },
              "author": "CricTracker",
              "title": "EXI-W vs AUS-W Live Score, Match 3 | England XI Women vs Austria Women Score & Updates of Match 3 - CricTracker",
              "description": "EXI-W vs AUS-W Match 3, Live Score: Get all the latest EXI-W vs AUS-W Live Score of Match 3 along with ball by ball commentary & updates on CricTracker.",
              "url": "https://www.crictracker.com/live-scores/exi-w-vs-aus-w-match-3-t10-ecc-women-t10-17-dec-2023/",
              "urlToImage": "https://www.crictracker.com/images/CricTracker-Facebook-Preview.jpg",
              "publishedAt": "2023-12-17T11:22:43Z",
              "content": "Partnership :7(5)\r\nLast 5 Overs :14 Runs, 1 Wickets\r\nLast Wicket :Busra CA 1(6) - b Ria Fackrell\r\nToss :Austria Women (batting)"
            },
            {
              "source": {
                "id": null,
                "name": "Cricbuzz"
              },
              "author": null,
              "title": "Ishan Kishan released from India Test squad for personal reasons | Cricbuzz.com - Cricbuzz - Cricbuzz",
              "description": "KS Bharath has been roped in as his replacement for the upcoming Test series against South Africa",
              "url": "https://www.cricbuzz.com/cricket-news/128847/ishan-kishan-released-from-india-test-squad-for-personal-reasons-cricbuzzcom",
              "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c366247/kishan-has-been-replaced-by-ks-bharath-in-the-test-squad.jpg",
              "publishedAt": "2023-12-17T10:50:39Z",
              "content": "Ishan Kishan, the wicketkeeper-batter, has been released from India's Test squad for the upcoming series in South Africa. The BCCI has stated in a release on Sunday that the southpaw had requested to… [+483 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "BBC News"
              },
              "author": "https://www.facebook.com/bbcnews",
              "title": "WTC Points Table: What Pakistans 360-Run Loss vs Australia In Perth Test Means For India - NDTV Sports",
              "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
              "url": "https://www.bbc.com/news/world-us-canada-39324587",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
              "publishedAt": "2023-12-17T10:35:00Z",
              "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": null,
              "title": "India vs South Africa Live Score 1st ODI: Arshdeep Singh takes fifer, Avesh Khan claims four to skittle SA for 116 - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/sports/cricket/india-vs-south-africa-live-score-1st-odi-ind-vs-sa-cricket-full-scorecard-latest-updates-johannesburg-9071196/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T10:34:16Z",
              "content": null
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
                "name": "Hindustan Times"
              },
              "author": "HT Sports Desk",
              "title": "Meet Sai Sudharsan, GT's rising star who made India debut vs SA in 1st ODI - Hindustan Times",
              "description": "Did you know? Sai Sudharsan was signed by Gujarat Titans at a price of INR 20 lakh at IPL 2022 auction. | Cricket",
              "url": "https://www.hindustantimes.com/cricket/meet-sai-sudharsan-gt-gujarat-titans-rising-star-who-made-odi-debut-india-in-series-opener-vs-south-africa-ipl-auction-101702800351346.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/MixCollage-17-Dec-2023-01-26-PM-7447_1702802367014_1702802371962.jpg",
              "publishedAt": "2023-12-17T08:40:48Z",
              "content": "\"Going forward, if Im not wrong, in two years, hell do something great for franchise cricket and eventually for India,\" former Gujarat Titans (GT) skipper Hardik Pandya had famously said when youngst… [+2124 chars]"
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
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Irfan Amin Malik",
              "title": "Kashmir To Kochi: 9 J&K players shortlisted for IPL 2024 auctions - Moneycontrol",
              "description": "All nine players have participated in tryouts with IPL teams and are being auctioned for their base price of Rs 20 lakh.",
              "url": "https://www.moneycontrol.com/news/cricket/kashmir-to-kochi-9-jk-players-shortlisted-for-ipl-2024-auctions-11915691.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/12/1-653x435.jpeg",
              "publishedAt": "2023-12-17T06:57:12Z",
              "content": "Nine players from Jammu &amp; Kashmir have been shortlisted for the Indian Premier League (IPL) auction, 2024, scheduled to be held in Dubai at the Coca-Cola Arena on December 19.\r\nFor the first time… [+5316 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Trisha Sengupta",
              "title": "Only a creative problem solver can decode this brain teaser on country names - Hindustan Times",
              "description": "Your time to solve this brain teaser starts now… | Trending",
              "url": "https://www.hindustantimes.com/trending/you-can-decode-this-brain-teaser-on-country-names-if-you-are-a-creative-problem-solver-101702793618415.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/Brain_Teaser_Reddit_Viral_1702794102398_1702794102673.png",
              "publishedAt": "2023-12-17T06:29:23Z",
              "content": "Have you ever come across brain teasers which could only be solved by out of the box thinking? A puzzle about country names is a perfect example of that category. At first glance, it looks like a geo… [+1544 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TOI Sports Desk",
              "title": "'I would choose Sourav Ganguly...': Parthiv Patel on why he has a soft corner for the former India captai - IndiaTimes",
              "description": "Cricket News: Former Indian cricketer Parthiv Patel has endorsed Sourav Ganguly as his captain over Mahendra Singh Dhoni. Patel, who made his debut for India at 17",
              "url": "https://timesofindia.indiatimes.com/sports/cricket/news/i-would-choose-sourav-ganguly-parthiv-patel-on-why-he-has-a-soft-corner-for-the-former-india-captain/articleshow/106058807.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106058886,width-1070,height-580,imgsize-103558,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T05:45:16Z",
              "content": "BCCI ends speculations, retains Rahul Dravid as India's head coach alongside support staff"
            },
            {
              "source": {
                "id": null,
                "name": "Chess.com"
              },
              "author": "Venkatachalam Saravanan",
              "title": "Chennai Grand Masters 2023: Harikrishna, Sjugirov In Joint Lead After Day Of Fierce Fights - Chess.com",
              "description": "Sjugirov and Harikrishna jointly lead the field with one and a half points after two rounds of the Chennai Grand Masters 2023.",
              "url": "https://www.chess.com/news/view/chennai-grand-masters-2023-round-2",
              "urlToImage": "https://images.chesscomfiles.com/uploads/v1/news/1321547.e6abe2e9.5000x5000o.623d5b2045c3.jpg",
              "publishedAt": "2023-12-17T05:23:00Z",
              "content": "GM Sanan Sjugirov defended against ambitious play by GM Pavel Eljanov in the middlegame to score a patient victory and jumped into a joint lead with one and a half points after the second round of th… [+7076 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "BBC News"
              },
              "author": null,
              "title": "Watch: Needing 21 From 6 To Win, England Star Harry Brook Does The Unthinkable - NDTV Sports",
              "description": "England needed 21 runs from the final 6 balls to chase down the target of 223 runs in 2nd T20I against West Indies.",
              "url": "http://www.bbc.com/news/world-us-canada-39324587",
              "urlToImage": "https://c.ndtvimg.com/2023-12/k0q1ampg_harry-brook_625x300_17_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
              "publishedAt": "2023-12-17T04:33:00Z",
              "content": "England batter Harry Brook produced one of the most dramatic finishes in T20 international cricket history as his side took on West Indies on Saturday. With England requiring 21 runs from the final 6… [+1799 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Inshorts.com"
              },
              "author": "Anmol Sharma",
              "title": "I would be happy to take up the role: KL Rahul on keeping in Test cricket | 1st ODI to take place in Johannesburg | Inshorts - Inshorts",
              "description": "KL Rahul, who'll lead India in ODI series against South Africa, said he'll keep wickets and bat in middle orde",
              "url": "https://inshorts.com/en/news/i-would-be-happy-to-take-up-the-role-kl-rahul-on-keeping-in-test-cricket-1702747535053",
              "urlToImage": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/12_dec/16_sat/img_1702747049739_411.jpg?",
              "publishedAt": "2023-12-17T04:32:34Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "India.com"
              },
              "author": "Zee Media Bureau",
              "title": "Rachin Ravindra: At Base Price Of Rs 50 Lakh, New Zealand All-Rounder Could Be Most Expensive Buy Of IPL 2024 Auction; All You Need To Know About His Net Worth, Girlfriend - In Pics - Zee News",
              "description": "In the thrilling world of cricket, rising stars often illuminate the field with their extraordinary talent. Among these luminaries stands Rachin Ravindra, a young prodigy from New Zealand whose cricketing prowess and meteoric rise have captivated the global c…",
              "url": "https://zeenews.india.com/photos/sports/rachin-ravindra-at-base-price-of-rs-50-lakh-new-zealand-all-rounder-could-be-most-expensive-buy-of-ipl-2024-auction-all-you-need-to-know-about-his-net-worth-girlfriend-in-pics-2699776",
              "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/17/1337334-rachin-ravindra-10.jpg",
              "publishedAt": "2023-12-17T04:02:00Z",
              "content": "photoDetailsenglish2699759In the thrilling world of cricket, rising stars often illuminate the field with their extraordinary talent. Among these luminaries stands Rachin Ravindra, a young prodigy fr… [+4256 chars]"
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
                "name": "Sportskeeda"
              },
              "author": "Venkatesh Ravichandran",
              "title": "[Watch] Harry Brook's incredible final over heroics help England pull off highest successful run chase vs WI in 3rd T20I - Sportskeeda",
              "description": "England batter Harry Brook helped the side pull off an unlikely final over heist against the West Indies in the third T20I on December 16.",
              "url": "https://www.sportskeeda.com/cricket/news-watch-harry-brook-s-incredible-final-heroics-helps-england-pull-highest-successful-run-chase-vs-wi-3rd-t20i",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/f2db5-17027819035913-1920.jpg",
              "publishedAt": "2023-12-17T03:34:44Z",
              "content": "England batter Harry Brook helped the side pull off an unlikely final over heist against the West Indies in the third T20I on December 16.\r\nTrailing 0-2 and chasing an improbable 223 for victory, Eng… [+2593 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Sports Desk",
              "title": "Explained: Why Rohit was replaced by Hardik as Mumbai captain for IPL 2024 - Hindustan Times",
              "description": "Rohit Sharma was replaced by Hardik Pandya as Mumbai Indians' captain for IPL 2024. A successful MI season will strengthen his captaincy claim at India. | Cricket",
              "url": "https://www.hindustantimes.com/cricket/why-rohit-sharma-was-replaced-by-hardik-pandya-captain-of-mumbai-indians-ipl-2024-explained-hardik-pandya-gt-mi-101702778124484.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/PTI12-15-2023-000331B-0_1702782353934_1702782375184.jpg",
              "publishedAt": "2023-12-17T03:09:47Z",
              "content": "Endings are just new beginnings in disguise. Rohit Sharma's departure as the captain of the Mumbai Indians marked the end of an era in the Indian Premier League (IPL). The most successful player in t… [+4164 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India.com"
              },
              "author": "Akash Kharade",
              "title": "Delhi Capitals Wanted To Trade In Rohit Sharma Ahead Of IPL 2024: Reports - Zee News",
              "description": "IPL 2024: Ritika Sajdehs First Reaction To Rohit Sharmas Removal As Mumbai Indians Captain, Check The Glorious Era Under Rohit Sharma Under the captaincy of Rohit Sharma, Mumbai Indians achieved unprecedented success, reaching the IPL finals five times and em…",
              "url": "https://zeenews.india.com/cricket/delhi-capitals-wanted-rohit-sharma-to-play-for-them-in-ipl-2024-reports-2699746.html",
              "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/17/1337298-untitled-design-12.jpg",
              "publishedAt": "2023-12-17T01:41:02Z",
              "content": "In a surprising turn of events leading up to the IPL 2024 season, Delhi Capitals made a bold move by approaching Mumbai Indians for a potential trade involving the legendary Rohit Sharma. The buzz ar… [+2271 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Gaurav Gupta",
              "title": "India vs England, one-off Test: Meet Deepti Sharma, the ‘Ben Stokes of women’s team’ - IndiaTimes",
              "description": "Cricket News: Deepti Sharma, the off-spinning allrounder, earned praise from new head coach Amol Muzumdar, who called her the 'Ben Stokes of the team'. She became t",
              "url": "https://timesofindia.indiatimes.com/sports/cricket/news/one-off-test-meet-the-ben-stokes-of-the-womens-team/articleshow/106055166.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106055189,width-1070,height-580,imgsize-29632,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T00:51:17Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "ESPN India"
              },
              "author": "ESPN",
              "title": "Transfer Talk: Saudi Pro League ramps up Salah pursuit - ESPN India",
              "description": "The Saudi Pro League's interest in Liverpool star Mohamed Salah will once again ramp up in the summer. Transfer Talk is LIVE with the latest.",
              "url": "https://www.espn.in/football/story/_/id/39127721/transfer-talk-saudi-pro-league-ramps-salah-pursuit",
              "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1110%2Fr1251157_1296x729_16%2D9.jpg",
              "publishedAt": "2023-12-17T00:41:00Z",
              "content": "The winter transfer window hasn't re-opened in Europe yet, but there are moves in the works and plenty of gossip swirling around.Transfer Talk brings you all the latest buzz on rumours, comings, goin… [+29 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Xavi Hernandez reacts to Barcelona's 1-1 draw vs. Valencia: We are frustrated | ESPN FC - ESPN UK",
              "description": "Xavi Hernandez fields questions from ESPN's Gemma Soler following a 1-1 draw vs. Valencia in LALIGA play.----Subscribe to ESPN UK: http://bit.ly/1oGUzVAFollo...",
              "url": "https://www.youtube.com/watch?v=G8RuYSmBKS8",
              "urlToImage": "https://i.ytimg.com/vi/G8RuYSmBKS8/maxresdefault.jpg",
              "publishedAt": "2023-12-17T00:17:07Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "News18"
              },
              "author": "News18",
              "title": "WATCH: Sudden Change in Wasim Akram's Expressions on Babar Azam's Dismissal Going Viral - News18",
              "description": "Former captain Wasim Akram, who was on commentary duties during Babar's dismissal, was completely disappointed with the dismissal of Babar Azam.",
              "url": "https://www.news18.com/cricket/watch-sudden-change-of-wasim-akrams-expressions-on-babar-azams-dismissal-going-viral-8706313.html",
              "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/wasim-akram-dissapointed-over-babar-azams-dismissal-2023-12-9040114ee3b67c73a4d94d362eba1f81-16x9.jpg?impolicy=website&width=1200&height=675",
              "publishedAt": "2023-12-17T00:08:00Z",
              "content": "Australias Mitchell Marsh dismissed Pakistans Babar Azam for 21 in the first innings of the Perth Test on Saturday. Marsh picked up the prized wicket in the 71st over of the first innings. Aussie wic… [+1920 chars]"
            },
            {
              "source": {
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "Sportstar",
              "title": "Tom Lockyer collapses, Luton Town vs Bournemouth Premier League match suspended - Sportstar",
              "description": null,
              "url": "https://sportstar.thehindu.com/football/epl/tom-lockyer-collapse-luton-town-vs-bournemouth-premier-league-2023-24-details-play-suspended/article67645967.ece",
              "urlToImage": null,
              "publishedAt": "2023-12-16T23:03:00Z",
              "content": null
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
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "The Hindu",
              "title": "Jendayi should win the Trilegal Indian 1000 Guineas - The Hindu",
              "description": null,
              "url": "https://www.thehindu.com/sport/races/mumbai-card-jendayi-should-win-the-trilegal-indian-1000-guineas/article67645929.ece",
              "urlToImage": null,
              "publishedAt": "2023-12-16T19:02:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Sporting News"
              },
              "author": null,
              "title": "'You deserve it!' - Furious Pep Guardiola in rare public bashing of his own Man City players after Crystal Palace collapse & tells his attackers they 'didn't create anything' - GOAL English",
              "description": "Get all the latest Soccer news, highlights, scores, schedules, standings and more from Sporting News Canada.",
              "url": "https://www.sportingnews.com/ca/soccer",
              "urlToImage": "https://static.sportingnews.com/1.40.1.1/themes/custom/tsn/logo.jpg",
              "publishedAt": "2023-12-16T18:53:54Z",
              "content": null
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
                "name": "Hindustan Times"
              },
              "author": "hindustantimes.com",
              "title": "South Africa Women vs Bangladesh Women Live Score: 1st ODI of Bangladesh Women tour of South Africa, 2023 to start at 05:30 PM - Hindustan Times",
              "description": "South Africa Women vs Bangladesh Women Live Score: Bangladesh Women beat South Africa Women by 119 runs",
              "url": "https://www.hindustantimes.com/cricket/south-africa-women-vs-bangladesh-women-live-score-1st-odi-of-bangladesh-women-tour-of-south-africa-2023-final-updates-today-16-dec-2023-101702725054765.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/10/06/1600x900/CRICKET-ICC-MENS-WC-2023-ENGNZL-ODI-6_1696592836309_1696592836773.jpg",
              "publishedAt": "2023-12-16T18:10:46Z",
              "content": "South Africa Women vs Bangladesh Women Highlights : \r\nFirst Innings \r\nBangladesh Women Score - 250/3 in 50.0 overs \r\nBangladesh Women batting performance Murshida Khatun 91(100)Nigar Sultana 38(48)\r\n… [+426 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "Rahul Pandey",
              "title": "‘They told me you’re acting injured’: Rajasthan Cricket’s favorite son Ashok Menaria lands scarring blows after leading Haryana to VHT triumph - The Indian Express",
              "description": "On Saturday after Rajasthan fell short of winning their first-ever Vijay Hazare Trophy, the defeat must’ve tasted even bitter. It was their favourite son Ashok Menaria who had led Haryana to their maiden 50-overs title.",
              "url": "https://indianexpress.com/article/sports/cricket/ashok-menaria-lands-scarring-blows-after-leading-haryana-to-vijay-hazare-trophy-triumph-over-rajasthan-9071184/",
              "urlToImage": "https://images.indianexpress.com/2023/12/Maneria.png",
              "publishedAt": "2023-12-16T18:01:18Z",
              "content": "The last time Rajasthan won a senior mens title was back in 2012. A second Ranji Trophy title in a row – their only wins in the tournament history. Lifting the trophy on both occasions was Ashok Mena… [+3128 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Khelnow.com"
              },
              "author": "Author Name",
              "title": "Some players should be very concerned in January window, claims Scott Cooper - Khel Now",
              "description": "Jamshedpur FC head coach Scott Cooper shared his insights after the loss to Bengaluru FC in ISL 2023-24.",
              "url": "https://khelnow.com/football/2023-12-indian-football-isl-bfc-jfc-scott-cooper-post-match-pc",
              "urlToImage": "https://assets-webp.khelnow.com/news/uploads/2023/12/PRA05693-1280x854.jpg.webp",
              "publishedAt": "2023-12-16T17:48:50Z",
              "content": "Jamshedpur FC faced a narrow 1-0 defeat to hosts Bengaluru FC in a scrappy game at the Kanteerva Stadium. The game was decided by a penalty that was calmly put in the back of the net by Javi Hernande… [+3698 chars]"
            },
            {
              "source": {
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "Sportstar",
              "title": "Pro Kabaddi League 2023, Match Day 14 Highlights: Delhi beats Telugu Titans 51-40 for second win; Puneri thumps Bengal 49-19 - Sportstar",
              "description": null,
              "url": "https://sportstar.thehindu.com/kabaddi/pro-kabaddi-league-live-score-pkl-10-updates-streaming-puneri-vs-bengal-telugu-v-dabang-delhi-highlights-news/article67645258.ece",
              "urlToImage": null,
              "publishedAt": "2023-12-16T17:15:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Devesh Kumar",
              "title": "IPL auction 2024: Gujarat Titans likely to struggle with Hardik Pandya-sized void | Mint - Mint",
              "description": "IPL auction 2024: Things were going well for Gujarat Titans and the franchise hoped to deliver another strong performance in the IPL 2024 season, but Hardik Pandya's sudden decision to return to Mumbai Indians left GT's management in limbo",
              "url": "https://www.livemint.com/sports/cricket-news/ipl-auction-2024-gujarat-titans-likely-to-struggle-with-hardik-pandya-sized-void-11702744454496.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/9_1702745452449_1702745456039.jpg",
              "publishedAt": "2023-12-16T17:02:17Z",
              "content": "IPL auction 2024: Gujarat Titans made their stunning debut in the 2022 season of the Indian Premier League as the team lifted the trophy during their inaugural stint at the world's richest cricket to… [+2319 chars]"
            },
            {
              "source": {
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "Sportstar",
              "title": "Mumbai City FC vs East Bengal highlights, MCFC 0-0 EBFC, ISL 2023-24: Resolute defending earns point for Red and Gold - Sportstar",
              "description": null,
              "url": "https://sportstar.thehindu.com/football/indian-football/east-bengal-vs-mumbai-city-fc-live-score-isl-2023-24-eb-v-mcfc-updates-lineups-streaming-goals-highlights/article67644929.ece",
              "urlToImage": null,
              "publishedAt": "2023-12-16T16:40:34Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "The Cricket Times"
              },
              "author": "Akshat Gaur",
              "title": "IPL 2024 Auction: Salary of players retained by Royal Challengers Bangalore (RCB) - Cricket Times",
              "description": "Royal Challengers Bangalore have 19 players in their squad ahead of IPL 2024 auction. Former captain Virat Kohli has the highest salary for RCB in the cash-rich league.",
              "url": "https://crickettimes.com/2023/12/ipl-2024-auction-salary-of-players-retained-by-royal-challengers-bangalore-rcb/",
              "urlToImage": "https://crickettimes.com/wp-content/uploads/2023/12/RCB-players-retained-and-their-salary.webp",
              "publishedAt": "2023-12-16T15:45:36Z",
              "content": "Cricket enthusiasts worldwide are gearing up for the much-anticipated Indian Premier League (IPL) 2024 players’ auction scheduled to unfold in Dubai on December 19. A staggering 333 cricketers are se… [+2502 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "International Cricket Council"
              },
              "author": "ICC",
              "title": "2027 World Cup on Stead's agenda during Bangladesh ODI series - ICC Cricket",
              "description": "New Zealand head coach Gary Stead discussed the addition of uncapped players from the lens of the next ICC Men’s Cricket World Cup.",
              "url": "https://www.icc-cricket.com/news/3824390",
              "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/16/df822f1c-d903-40ae-bac9-f2ae92b80941/GettyImages-1668035397.jpg",
              "publishedAt": "2023-12-16T13:43:23Z",
              "content": "New Zealand head coach Gary Stead discussed the addition of uncapped players from the lens of the next ICC Mens Cricket World Cup.New Zealand have a number of fresh faces for the upcoming home ODI se… [+2256 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Aditya Suketu Desai",
              "title": "\"MS Dhoni, Sourav Ganguly, and Anil Kumble have performed well\" - Gautam Gambhir on whether captaincy affects a player's game - Sportskeeda",
              "description": "Former India opener Gautam Gambhir believes that the added pressure of captaincy does not have a big impact on the player's performance as a batter or a bowler.",
              "url": "https://www.sportskeeda.com/cricket/news-ms-dhoni-sourav-ganguly-anil-kumble-performed-well-gautam-gambhir-whether-captaincy-affects-player-s-game",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/22347-17027314101735-1920.jpg",
              "publishedAt": "2023-12-16T13:04:05Z",
              "content": "Former India opener Gautam Gambhir believes that the added pressure of captaincy does not have a big impact on the player's performance as a batter or a bowler.\r\nHe pointed out that the likes of MS D… [+1929 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Cricket.one"
              },
              "author": "Pawan",
              "title": "Cricket Fantasy Predictions Today | ZIM vs IRE, 3rd ODI- Cricket Exchange Fantasy Teams - OneCricket",
              "description": "Zimbabwe will be playing with Ireland in the third game of the ongoing ODI series. Ahead of the match, here is a look at some of the important player stats, the best player picks, the top captain and vice-captain choices and the best predicted-XI for the fant…",
              "url": "https://cricket.one/fantasy-analysis/cricket-fantasy-predictions-today-zim-vs-ire-3rd-odi-cricket-exchange-fantasy-teams/657da00194ab16cbd4f6a605",
              "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1702731770321_Zim12.jpg",
              "publishedAt": "2023-12-16T13:02:57Z",
              "content": "ZIM vs IRE, 1st ODI: Cricket Fantasy Tips and Teams (Source: x.com)\r\nAfter defeating Zimbabwe (ZIM) by a margin of four wickets in the second one-day international, Ireland (IRE) now faces the home s… [+6383 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Mykhel.com"
              },
              "author": "myKhel",
              "title": "India vs Spain Highlights, FIH Hockey Men's Junior World Cup 2023: Spain Beat India 3-1 As They Secures The Third Place - myKhel",
              "description": null,
              "url": "https://www.mykhel.com/hockey/india-vs-spain-live-score-fih-hockey-mens-junior-world-cup-2023-251719.html",
              "urlToImage": null,
              "publishedAt": "2023-12-16T12:49:13Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Cricket.one"
              },
              "author": "Debashis Sarangi",
              "title": "'His Problem Is..', Ravi Shastri Reveals 'Real' Reason Behind Shaheen Afridi's Poor Outing In Perth Test - OneCricket",
              "description": "This Test has been a forgettable game for Shaheen Afridi, who was expected to play a key role for Pakistan on Perth's seam-friendly deck. Afridi blew hot and cold with the ball, scalping a single wicket for 96 runs during Australia's first innings.",
              "url": "https://cricket.one/who-said-what/his-problem-is-ravi-shastri-reveals-real-reason-behind-shaheen-afridis-poor-outing-in-perth-test/657d9bccde38a068f4cd6591",
              "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1702721968394_GBdj39_acAAcSAi.jpeg",
              "publishedAt": "2023-12-16T12:45:00Z",
              "content": "Shaheen Afridi in action [X.com]\r\nRiding on the players' incredible effort, Australia have claimed the driving seat in the ongoing first Test match against Pakistan in Perth. After bowling out the vi… [+1318 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Are Manchester United in for another heavy defeat at Anfield? | ESPN FC - ESPN UK",
              "description": "ESPN FC's Alexis Nunes is joined by Steve Nicol and Ryan O'Hanlon to look ahead to this weekends game between Liverpool and Manchester United. Can Man United...",
              "url": "https://www.youtube.com/watch?v=KAJi8Lj2fw0",
              "urlToImage": "https://i.ytimg.com/vi/KAJi8Lj2fw0/maxresdefault.jpg",
              "publishedAt": "2023-12-16T12:00:15Z",
              "content": null
            },
            {
              "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
              },
              "author": "Alex Malcolm",
              "title": "Australia's band was back together and the hits kept coming - ESPNcricinfo",
              "description": "Cummins, Starc, Hazlewood and Lyon were a joy to watch in Perth",
              "url": "https://www.espncricinfo.com/story/pat-cummins-mitchell-starc-josh-hazlewood-nathan-lyon-help-australia-dominate-pakistan-1413070",
              "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372600/372675.6.jpg",
              "publishedAt": "2023-12-16T11:44:31Z",
              "content": "Match AnalysisCummins, Starc, Hazlewood and Lyon were a joy to watch in Perth\r\nJosh Hazlewood beat the bat several times before getting Saud Shakeel out  •  Getty Images\r\nThere is something special a… [+5291 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Prokabaddi.com"
              },
              "author": null,
              "title": "U Mumba head coach Gholamreza Mazandarani: Zafardanesh is a future Pro Kabaddi League star - vivo Pro Kabaddi",
              "description": "U Mumba registered a thrilling 42-40 victory over Patna Pirates in Pro Kabaddi League Season 10 on Friday.",
              "url": "https://www.prokabaddi.com/news/zafardanesh-is-a-future-pro-kabaddi-league-star",
              "urlToImage": "https://www.prokabaddi.com/static-assets/waf-images/ca/be/b9/16-9/HDrPFaFXH2.jpg",
              "publishedAt": "2023-12-16T10:54:15Z",
              "content": "News\r\nU Mumba registered a thrilling 42-40 victory over Patna Pirates in the Pro Kabaddi League Season 10 on Friday. The Iranian all-rounder Amirmohammad Zafardanesh was in the thick of things with 1… [+1187 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Rahul Dravid, VVS Laxman to miss South Africa ODIs; BCCI names new India head coach | Mint - Mint",
              "description": "Dravid will instead, oversee the preparations for the two-match Test series by joining the red-ball squad, and keep an eye on the proceedings of a three-day match inter-squad match starting 20 December in Pretoria.",
              "url": "https://www.livemint.com/sports/cricket-news/rahul-dravid-vvs-laxman-to-miss-south-africa-odis-bcci-names-new-india-head-coach-11702721413607.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/Rahul_Dravid_1702721506671_1702721506784.jpg",
              "publishedAt": "2023-12-16T10:14:19Z",
              "content": "With the three-match ODI series to begin between India and South Africa from 17 December at Wanderers Stadium in Johannesburg, the Indian squad won't have Rahul Dravid or VVS Laxman as coach, said th… [+2455 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Www.geo.tv"
              },
              "author": "Sports Desk",
              "title": "Pakistans hopes of winning first Test fade as Australia build big lead - Geo News",
              "description": "Usman Khawaja and Steve Smith take Australia's lead to 300 after Pakistan were bowled out for 271",
              "url": "https://www.geo.tv/latest/523257-khurram-shehzad-sends-david-warner-back-pakistan-all-out-for-271",
              "urlToImage": "https://www.geo.tv/assets/uploads/updates/2023-12-16/l_523257_035250_updates.jpg",
              "publishedAt": "2023-12-16T10:07:30Z",
              "content": "Australia build big lead in Perth Test.\r\nPakistan have not won in Australia since 1995.\r\nNathan Lyon one wicket short of 500 mark.\r\nPERTH: Usman Khawaja and Steve Smith dug in to stretch Australias l… [+2969 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Cgtn.com"
              },
              "author": "CGTN",
              "title": "Gu Ailing triumphs in new season to claim 2nd straight FIS World Cup win - CGTN",
              "description": "China's Olympic champion Gu Ailing had a great start in the new season as she clinched her second consecutive title at the International Ski and Snowboard Federation (FIS) Freeski Halfpipe World Cup at Cooper Mountain on Friday.Previously, 20-year-old",
              "url": "https://news.cgtn.com/news/2023-12-16/Gu-Ailing-triumphs-in-new-season-to-claim-2nd-straight-World-Cup-win-1pAcv6afJ4I/index.html",
              "urlToImage": "https://news.cgtn.com/news/2023-12-16/Gu-Ailing-triumphs-in-new-season-to-claim-2nd-straight-World-Cup-win-1pAcv6afJ4I/img/17effa7c376f4ae58cdee00de27bdfa2/17effa7c376f4ae58cdee00de27bdfa2-750.png",
              "publishedAt": "2023-12-16T09:40:37Z",
              "content": "A screenshot of women's freeski halfpipe results during the FIS World Cup at Copper Mountain. /FIS\r\nA screenshot of women's freeski halfpipe results during the FIS World Cup at Copper Mountain. /FIS\r… [+2306 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Forbes"
              },
              "author": "Nikita Tambe",
              "title": "How To Watch UFC 296 Colby Covington Vs. Leon Edwards Live From Anywhere - Forbes",
              "description": "The Ultimate Fight Championship Fight Nights or even a UFC pay-per-view event may not interest you. But if you’re a MMA fan then UFC Fight Night should definitely be on your list. The weekly matchups feature common fighters but they serve up thrilling bouts. …",
              "url": "https://www.forbes.com/advisor/in/business/software/colby-covington-vs-leon-edwards-how-to-watch-ufc-296-live/",
              "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2023/12/pexels-skitterphoto-3797-FA-IN-1600_900.jpg",
              "publishedAt": "2023-12-16T09:30:00Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TOI Sports Desk",
              "title": "Watch: Mitchell Starc's peach of a delivery to dismiss Sarfaraz Ahmed at Perth - IndiaTimes",
              "description": "Cricket News: It is very rare that the Kookubura ball (with which Tests are played in Australia), swings as late as after 70 overs. But this is exactly where the cl",
              "url": "https://timesofindia.indiatimes.com/sports/cricket/news/watch-mitchell-starcs-peach-of-a-delivery-to-dismiss-sarfaraz-ahmed-at-perth/articleshow/106044275.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106044221,width-1070,height-580,imgsize-42124,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T09:10:31Z",
              "content": "Captains who have led two or more IPL teams"
            },
            {
              "source": {
                "id": null,
                "name": "Cricbuzz"
              },
              "author": null,
              "title": "BCCI to course correct after Sakariya suspect action error | Cricbuzz.com - Cricbuzz - Cricbuzz",
              "description": "The Saurashtra bowler is not listed among bowlers reported for a suspect action",
              "url": "https://www.cricbuzz.com/cricket-news/128827/bcci-to-course-correct-after-sakariya-suspect-action-error-cricbuzzcom",
              "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c365920/sakariya-a-base-price-of-rs-50-lakh.jpg",
              "publishedAt": "2023-12-16T07:54:22Z",
              "content": "The Chetan Sakariya affair seems to be an unintentional mistake by the Board of Control for Cricket in India (BCCI) and the left-arm pacer is not listed among bowlers reported for a suspect action. T… [+1677 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India.com"
              },
              "author": "Ritesh K Srivastava",
              "title": "Who Is G Sampath Kumar? IPS Officer Sentenced To Jail For Defaming Mahendra Singh Dhoni - Zee News",
              "description": "The Madras High Court has sentenced IPS officer G Sampath Kumar to 15 days of simple imprisonment in a contempt of court case filed by former Indian cricket team captain Mahendra Singh Dhoni. A division bench comprising Justices S S Sundar and Sunder Mohan pa…",
              "url": "https://zeenews.india.com/india/who-is-g-sampath-kumar-ips-officer-sentenced-to-jail-for-defaming-mahendra-singh-dhoni-2699584.html",
              "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/16/1337065-dhoni-ips.jpg",
              "publishedAt": "2023-12-16T07:23:36Z",
              "content": "NEW DELHI: The Madras High Court has sentenced IPS officer G Sampath Kumar to 15 days of simple imprisonment in a contempt of court case filed by former Indian cricket team captain Mahendra Singh Dho… [+1809 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Pranav Pandey",
              "title": "\"Kid's got skills\" - Francis Ngannou, Logan Paul, and other fighters react to Jake Paul's stunning KO win over Andre August - Sportskeeda",
              "description": "YouTuber-turned-boxer Jake Paul delivered a stunning first-round knockout against Andre August at the Caribe Royale Resort in Orlando, Florida.",
              "url": "https://www.sportskeeda.com/mma/news-kid-s-got-skills-francis-ngannou-logan-paul-fighters-react-jake-paul-s-stunning-ko-win-andre-august",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/1dd58-17027058724679-1920.jpg",
              "publishedAt": "2023-12-16T06:59:00Z",
              "content": "YouTuber-turned-boxer Jake Paul delivered a stunning first-round knockout against Andre August at the Caribe Royale Resort in Orlando, Florida.\r\n'The Problem Child' clinched his eighth professional v… [+2038 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Cricket.one"
              },
              "author": "Aashay Chopade",
              "title": "IPL 2024 | RCB Star To Join Punjab Kings? Here's Punjab Kings' Pre-Auction Analysis - OneCricket",
              "description": "Punjab Kings formerly known as the Kings XI Punjab have been one of the perennial underachievers in IPL history. Let's dive deeper into the Punjab Kings arsenal ahead of IPL Auction 2024, and how they can further strengthen their squad in the upcoming IPL Auc…",
              "url": "https://cricket.one/cricket-analysis/ipl-2024-rcb-star-to-join-punjab-kings-heres-punjab-kings-pre-auction-analysis/657d43e8de38a068f4cd6411",
              "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1702357072425_shikkis.jpeg",
              "publishedAt": "2023-12-16T06:30:00Z",
              "content": "Punjab Kings players in IPL 2023 (X.com)\r\nPunjab Kings formerly known as the Kings XI Punjab have been one of the perennial underachievers in IPL history. They started the tournament back in 2008 wit… [+6352 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Siasat Daily"
              },
              "author": "News Desk",
              "title": "Telangana cricketer joins India U-19 ICC World Cup squad - The Siasat Daily",
              "description": "In a momentous achievement for the people of Telangana's Rajanna Sircilla, Aravelly Avanish Rao, 18-year-old cricketer, wicketkeeper-batsman",
              "url": "https://www.siasat.com/telangana-cricketer-joins-india-u-19-icc-world-cup-squad-2935242/",
              "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2023/12/Telangana-cricketer.jpg",
              "publishedAt": "2023-12-16T05:09:00Z",
              "content": "Hyderabad: In a momentous achievement for the people of Telangana, Aravelly Avanish Rao, the 18-year-old wicketkeeper-batsman from Pothugal village in Mustabad mandal, Rajanna Sircilla, secured a cov… [+1419 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Jagran.com"
              },
              "author": "Aditi Priya Singh",
              "title": "Rohit Sharma's 5 Best Quotes About Life's Challenges - Jagran English",
              "description": "Let's take a look on 5 best and motivational quotes of Rohit Sharma's about life's challenges.",
              "url": "https://english.jagran.com/web-stories/rohit-sharma-s-5-best-quotes-about-life-s-challenges-73481",
              "urlToImage": "https://imgeng.jagran.com/webstories/73481/rohit-sharma-s-best-quotes-on-life-challenges-1702704252.jpeg",
              "publishedAt": "2023-12-16T04:44:47Z",
              "content": "By Aditi Priya Singh2023-12-16T10:14:47+05:30english.jagran.com \r\nRohit Sharma's Quotes\r\n Rohit Sharma, the Indian cricket captain's life is an example of motivation and achievements. Today, we have … [+1157 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Vrinda Jain",
              "title": "Can you solve this tricky riddle in just 10 seconds? - Hindustan Times",
              "description": "This puzzle might seem to be simple, but it will leave you wondering for an answer.  | Trending",
              "url": "https://www.hindustantimes.com/trending/can-you-solve-this-tricky-riddle-in-just-10-seconds-101702637776349.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/riddle_1702638037794_1702638043695.png",
              "publishedAt": "2023-12-16T03:32:02Z",
              "content": "Several kinds of brain teasers, puzzles, and riddles intrigue many people. These can often keep many individuals busy for hours and even days. Not only that, it also helps us unlock the creative side… [+1098 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Khelnow.com"
              },
              "author": "Author Name",
              "title": "PUN vs BEN Dream11 Prediction, Dream11 Starting 7, Match 25, PKL 10 - Khel Now",
              "description": "Dream11 fantasy XI tips and guide for match 25 of the PKL 2023 between PUN vs BEN to be played in Pune.",
              "url": "https://khelnow.com/kabaddi/2023-12-pkl-10-pun-vs-ben-dream11-predictions",
              "urlToImage": "https://assets-webp.khelnow.com/news/uploads/2023/12/21-PKL-2023-24-Fantasy-16-copy.jpg.webp",
              "publishedAt": "2023-12-16T03:00:00Z",
              "content": "Puneri Paltan suffered a shocking loss to the Haryana Steelers in the opening game of their home leg. Punes defense had no answers for Vinay as he mounted 15 points which included a massive five-poin… [+2627 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Afkgaming.com"
              },
              "author": "Umesh Borkar",
              "title": "BMPS 2023 Grand Finals Day 1: Overall Standings, Match Summary and More - AFK Gaming",
              "description": "Experienced teams like Blind Esports, Entity and Team XSpark have put forth consistent performances on Day 1 of BMPS 2023 Grand Finals.",
              "url": "https://afkgaming.com/mobileesports/news/bmps-2023-grand-finals-day-1-overall-standings-match-summary-and-more",
              "urlToImage": "https://media.assettype.com/afkgaming%2F2023-12%2Ffdf02656-c26e-4c42-a11e-4d2c2b6ad77d%2FjFDrv6G5WiU_HD.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
              "publishedAt": "2023-12-16T00:24:03Z",
              "content": "Match 4 Vikendi: Growing Strong secured its first chicken dinner of the Grand Finals with 18 points. Entity secured the most points, 21, from the match. Team XSpark had a good mix of finish and place… [+739 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "90min"
              },
              "author": "Euan Burns",
              "title": "Real Madrid predicted lineup vs Villarreal - La Liga - 90min UK",
              "description": "Here is the XI that Ancelotti may choose for Real Madrid vs Villarreal.",
              "url": "https://www.90min.com/posts/real-madrid-predicted-lineup-vs-villarreal-la-liga-17-12-2023",
              "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_6000,h_3375,x_0,y_396/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01hhq0gzztm6ca3edtaj.jpg",
              "publishedAt": "2023-12-15T20:00:01Z",
              "content": "Real Madrid are back in La Liga action on Sunday night as they welcome Villarreal to the Santiago Bernabeu.\r\nCarlo Ancelotti's side have been impressing this season but have lacked some of the consis… [+2218 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Chen Meng vs Hina Hayata | WS R16 | WTT Finals Women Nayoga 2023 - World Table Tennis",
              "description": "Subscribe for more spectacular table tennis action!#TableTennis #PingPong #乒乓Download the new WTT app and follow us on social media for a full 360 update on ...",
              "url": "https://www.youtube.com/watch?v=FV9LqF8Ahvs",
              "urlToImage": "https://i.ytimg.com/vi/FV9LqF8Ahvs/maxresdefault.jpg",
              "publishedAt": "2023-12-15T18:13:57Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TOI Sports Desk",
              "title": "'He was always there...': Kuldeep Yadav credits Yuzvendra Chahal for his impressive performance against S - IndiaTimes",
              "description": "Cricket News: Indian cricketer Kuldeep Yadav has credited his impressive performance in the third and final T20I against South Africa to a supportive chat with team",
              "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/he-was-always-there-kuldeep-yadav-credits-yuzvendra-chahal-for-his-impressive-performance-against-south-africa/articleshow/106031747.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106031817,width-1070,height-580,imgsize-61766,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-15T17:32:03Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "ESPN India"
              },
              "author": "Aaditya Narayan",
              "title": "What's in a number? The tales behind unique jersey numbers - ESPN India",
              "description": "As MS Dhoni's seven is retired by the Indian cricket team, here are the tales behind some unique sporting numbers - from Jordan's 23 to Blasters' 21 and Sehwag's nothing.",
              "url": "https://www.espn.in/espn/story/_/id/39118787/ms-dhoni-number-7-retired-tale-unique-jersey-numbers-jordan-sehwag-jhingan",
              "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1215%2Fr1266697_1296x729_16%2D9.png",
              "publishedAt": "2023-12-15T14:08:00Z",
              "content": "Mahendra Singh Dhoni's contributions to Indian cricket were further recognized on Friday, when the BCCI took the decision to retire his jersey number 7.That means no male player representing India ca… [+5606 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Khelnow.com"
              },
              "author": "Author Name",
              "title": "Kerala Blasters' Adrian Luna likely to miss remainder of the ISL season - Khel Now",
              "description": "Kerala Blasters' midfield maestro Adrian Luna is likely to miss the remainder of the ISL 2023-24 campaign.",
              "url": "https://khelnow.com/football/2023-12-indian-football-isl-adrian-luna-injury-update-kerala-blasters",
              "urlToImage": "https://assets-webp.khelnow.com/news/uploads/2023/12/1S3_3562-1-1280x853.jpg.webp",
              "publishedAt": "2023-12-15T13:07:52Z",
              "content": "Adrian Luna, the heartbeat of Kerala Blasters is set to endure a significant setback, and is confirmed to miss a substantial part of the season. The Uruguayan playmaker underwent a successful Osteoch… [+1968 chars]"
            }
          ]
        },
        {
          "general": [
            {
              "source": {
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "The Hindu",
              "title": "Four test positive for H1N1 in Tiruvarur - The Hindu",
              "description": null,
              "url": "https://www.thehindu.com/news/cities/Tiruchirapalli/four-test-positive-for-h1n1-in-tiruvarur/article67644936.ece",
              "urlToImage": null,
              "publishedAt": "2023-12-17T12:31:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "9 killed in blast at explosives manufacturing factory in Nagpur; angry locals, kin of workers block road - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/cities/mumbai/blast-explosives-manufacturing-factory-nagpur-9071766/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T11:33:02Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TIMESOFINDIA.COM",
              "title": "Lymphoma in children: What causes it? What is the diagnosis process and pediatric care? - IndiaTimes",
              "description": "The lymphatic system is a vast network of lymphatic vessels and lymph nodes which carry lymphocytes and lymph. Lymphocytes are the cells that protect us against various microbes like bacteria and viruses by forming antibodies and destroying them. These lympho…",
              "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/lymphoma-in-children-what-causes-it-what-is-the-diagnosis-process-and-pediatric-care/photostory/106058349.cms",
              "urlToImage": "https://static.toiimg.com/photo/106058358.cms",
              "publishedAt": "2023-12-17T11:30:00Z",
              "content": "Lymphoma presents as a swollen, painless lymph node under the skin. Swollen lymph nodes are usually in the neck, above the collar bone, or in the armpit or groin.Lymph nodes deeper in the body can al… [+1150 chars]"
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
                "name": "NDTV News"
              },
              "author": null,
              "title": "\"Not The Same\": S Jaishankar On India's Response To US, Canada Probes - NDTV",
              "description": "With India facing allegations of hatching plots to murder pro-Khalistan elements in the United States and Canada, External Affairs Minister S Jaishankar on Sunday said \"the two issues are not necessarily the same\".",
              "url": "https://www.ndtv.com/india-news/not-the-same-s-jaishankar-on-indias-response-to-us-canada-probes-4690951",
              "urlToImage": "https://c.ndtvimg.com/2023-12/do041il8_jaishankar-1200_625x300_17_December_23.jpeg?ver-20231203.06",
              "publishedAt": "2023-12-17T11:12:53Z",
              "content": "With India facing allegations of hatching plots to murder pro-Khalistan elements in the United States and Canada, External Affairs Minister S Jaishankar on Sunday said \"the two issues are not necessa… [+2092 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT News Desk",
              "title": "PM Modi in Varanasi Live: PM visits Viksit Bharat Sankalp Yatra Exhibition - Hindustan Times",
              "description": "PM Modi in Varanasi Live: PM is set to inaugurate 2nd phase of Kashi Tamil Sangamam & also flag off the Varanasi-Delhi Vande Bharat Express during his visit.",
              "url": "https://www.hindustantimes.com/india-news/pm-modis-varanasi-visit-pm-to-inaugurate-second-phase-of-kashi-tamil-sangamam-101702801343954.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/modi_1702809534158_1702809719550.png",
              "publishedAt": "2023-12-17T10:37:14Z",
              "content": "PM Modi in Varanasi Live: Prime Minister Narendra Modi is scheduled to visit Varanasi, his Lok Sabha constituency today. During this visit, he plans to launch various development initiatives. Subsequ… [+3105 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "BBC News"
              },
              "author": "https://www.facebook.com/bbcnews",
              "title": "WTC Points Table: What Pakistans 360-Run Loss vs Australia In Perth Test Means For India - NDTV Sports",
              "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
              "url": "https://www.bbc.com/news/world-us-canada-39324587",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
              "publishedAt": "2023-12-17T10:35:00Z",
              "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": null,
              "title": "India vs South Africa Live Score 1st ODI: Arshdeep Singh takes fifer, Avesh Khan claims four to skittle SA for 116 - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/sports/cricket/india-vs-south-africa-live-score-1st-odi-ind-vs-sa-cricket-full-scorecard-latest-updates-johannesburg-9071196/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T10:34:16Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Shobhit Gupta",
              "title": "‘Parliament security breach serious matter’: Bengal CM Mamata Banerjee - Hindustan Times",
              "description": "Several opposition leaders have questioned the steps taken by the BJP-led central government and demanded a word from Amit Shah over the incident. | Latest News India",
              "url": "https://www.hindustantimes.com/india-news/parliament-security-breach-serious-matter-bengal-cm-mamata-banerjee-101702805803315.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/Screenshot_2023-12-17_151527_1702806329756_1702806334493.jfif",
              "publishedAt": "2023-12-17T10:21:00Z",
              "content": "West Bengal chief minister Mamata Banerjee on Sunday condemned the Wednesday's Lok Sabha security breach saying that the security lapse is a serious matter and it should be investigated.\r\nWest Bengal… [+2419 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Times of Israel"
              },
              "author": "The Times of Israel",
              "title": "IDF: At least 4 gunmen killed in drone strikes during arrest raid near Tulkarem - The Times of Israel",
              "description": null,
              "url": "https://www.timesofisrael.com/5-palestinians-reported-killed-in-idf-drone-strikes-during-arrest-raid-near-tulkarem/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T09:33:45Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "India.com"
              },
              "author": "Zee Media Bureau",
              "title": "Poco C65 Launched In India: Check Price, Specifications, Colour Options, And More - Zee News",
              "description": "Poco has expanded its budget-friendly smartphone lineup in India by launching the Poco C65. With its official launch into the Indian market, the Poco C65 has cemented its status as the newest member of the low-cost smartphone industry. As per the reports, the…",
              "url": "https://zeenews.india.com/technology/poco-c65-launched-in-india-check-price-specifications-colour-options-and-more-2699878.html",
              "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/17/1337458-file-photo-2023-12-17t003052.489.jpg",
              "publishedAt": "2023-12-17T08:31:31Z",
              "content": "New Delhi: Poco has expanded its budget-friendly smartphone lineup in India by launching the Poco C65. With its official launch into the Indian market, the Poco C65 has cemented its status as the new… [+2171 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "US Teacher Threatens To Behead Student Over Israeli Flag Remark, Arrested - NDTV",
              "description": "A school teacher in Georgia was arrested for allegedly threatening to behead a student in his class for saying that she was offended by the Israeli flag.",
              "url": "https://www.ndtv.com/world-news/us-teacher-threatens-to-behead-student-over-israeli-flag-remark-arrested-4689913",
              "urlToImage": "https://c.ndtvimg.com/2023-12/0iq175uo_benjamin-reese-us-teacher-arrested_625x300_17_December_23.jpeg?ver-20231203.06",
              "publishedAt": "2023-12-17T08:20:59Z",
              "content": "Benjamin Reese is listed as a seventh-grade Social Studies teacher.\r\nA school teacher in Georgia was arrested for allegedly threatening to behead a student in his class for saying that she was offend… [+1994 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Onmanorama.com"
              },
              "author": "Onmanorama Staff",
              "title": "Kerala Governor provokes protesters with insensible acts: Chief Minister : Chief Minister - Onmanorama",
              "description": "He alleged that the governor breached the protocol and said the central government needs to take a look into that.",
              "url": "https://www.onmanorama.com/news/kerala/2023/12/17/kerala-chief-minister-criticises-governor-arif-mohammed-khan.html",
              "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2023/12/17/khan-pinarayi-c.jpg",
              "publishedAt": "2023-12-17T08:18:29Z",
              "content": "Pathanamthitta: Kerala Chief Minister Pinarayi Vijayan has trained his guns on Governor Arif Mohammed Khan days after the latter used offensive terms against SFI activists who blocked his vehicle and… [+2819 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Tamil Nadu: Heavy rains create flood-like situations in Tirunelveli| WATCH | Mint - Mint",
              "description": "Visuals from Courtallam Waterfalls and Manimutharu Waterfalls show the impact of heavy rains in Tirunelveli, Tamil Nadu",
              "url": "https://www.livemint.com/news/india/tamil-nadu-heavy-rains-create-flood-like-situations-in-tirunelveli-watch-11702800178805.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/a_1702800392649_1702800400322.PNG",
              "publishedAt": "2023-12-17T08:04:39Z",
              "content": "Tamil Nadu: Intense rainfall in Tirunelveli has led to flood-like conditions, with notable impacts seen at Courtallam Waterfalls and Manimutharu Waterfalls, as reported by ANI.\r\n As per IMD, heavy ra… [+2601 chars]"
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
                "name": "The Indian Express"
              },
              "author": "Express News Service",
              "title": "IAS officer’s son ‘injuring’ woman with SUV: Thane police form SIT, promise thorough probe - The Indian Express",
              "description": "SIT under DCP Amar Singh will probe the allegations against Bharatiya Janata Yuva Morcha functionary Ashwajit Gaikwad.",
              "url": "https://indianexpress.com/article/cities/mumbai/ias-officers-son-injuring-woman-suv-thane-police-sit-9071599/",
              "urlToImage": "https://images.indianexpress.com/2023/12/Bjp-10.jpg",
              "publishedAt": "2023-12-17T07:43:55Z",
              "content": "A Special Investigation Team (SIT) headed by a deputy commissioner rank officer will probe the alleged assault of a woman by Ashwajit Gaikwad, the son of Maharashtra State Road Development Corporatio… [+2141 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "PTI",
              "title": "Reliance, Adani Enterprises India's biggest wealth creators from 2018-23: Study - Hindustan Times",
              "description": "The study, conducted by Motilal Oswal Financial Services, is based on stock market performance of companies.",
              "url": "https://www.hindustantimes.com/business/reliance-adani-enterprises-indias-biggest-wealth-creators-from-2018-23-study-101702797940763.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/gautam_adani_and_mukesh_ambani_net_worth_164429619_1702798033438_1702798033562.webp",
              "publishedAt": "2023-12-17T07:31:24Z",
              "content": "Reliance Industries Ltd was the biggest wealth creator during the five-year period from 2018 to 2023 while Adani Enterprises Ltd was the top all-round wealth creator, according to a study by Motilal … [+2969 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Sun Pharma, Lupin recall drugs in US over manufacturing issues: USFDA | Mint - Mint",
              "description": "Lupin is also recalling an unspecified number of penicillamine tablets in the US due to failed dissolution specifications..Sun Pharma is recalling 96,192 bottles of Liothyronine Sodium Tablets in the US due to failed impurities/degradation specifications.",
              "url": "https://www.livemint.com/companies/news/sun-pharma-lupin-recall-drugs-in-us-over-manufacturing-issues-usfda-11702795716102.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/pharma_1702796315613_1702796315895.jpg",
              "publishedAt": "2023-12-17T07:04:56Z",
              "content": "Leading drugmakers Sun Pharma and Lupin have recalled their products in the US market over manufacturing issues, as per the US Food and Drug Administration (USFDA).  Mumbai-based Sun Pharmaceutical I… [+2197 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India Today"
              },
              "author": "India Today Information Desk",
              "title": "Garena Free Fire MAX Redeem Codes for December 17, 2023: How to redeem the codes - India Today",
              "description": "Here is all you need to know about the new active codes for the list of New Garena Free Fire MAX Redeem codes and the steps to redeem them.",
              "url": "https://www.indiatoday.in/information/story/garena-free-fire-redeem-codes-december-17-garena-free-fire-redeem-codes-december-17-garena-free-fire-max-redeem-codes-for-december-17-2023-how-to-redeem-the-codes-2476939-2023-12-17",
              "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/garena-free-fire-max-130356711-16x9_0.png?VersionId=DJmShDWoOjJiD0URJ_sPsA16HohVOsuM",
              "publishedAt": "2023-12-17T06:02:24Z",
              "content": "Garena Free Fire Max, a popular mobile battle royale game, was released in 2020 as an updated version of the original Garena Free Fire. The game boasts enhanced graphics, controls, gameplay mechanics… [+1615 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "Dunki advance box office collection: Shah Rukh Khan’s film goes head-to-head with Prabhas’ Salaar for audience’s attention - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/entertainment/bollywood/dunki-advance-box-office-collection-shah-rukh-khans-film-goes-head-to-head-with-prabhas-salaar-for-audiences-attention-9071465/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T05:51:03Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Deccan Chronicle"
              },
              "author": "Bhavana Sharma",
              "title": "Bigg Boss Telugu 7 Winner Name Leaked before Final Episode - Deccan Chronicle",
              "description": "Bigg Boss Telugu 7 Winner Name Leaked before Final Episode",
              "url": "https://www.deccanchronicle.com/entertainment/ott/171223/did-pallavi-prashanth-win-bigg-boss-telugu-7.html",
              "urlToImage": "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-c3gav383vs1psajvpelsj0h7v6-20230919161407.Medi.jpeg",
              "publishedAt": "2023-12-17T05:48:08Z",
              "content": "Pallavi Prashanth secured the lead, claiming the winner's title."
            },
            {
              "source": {
                "id": null,
                "name": "Greater Kashmir"
              },
              "author": "GK Web Desk",
              "title": "Gurez valley draped in white after fresh snowfall - greaterkashmir - Greater Kashmir",
              "description": "Razdan Pass, which is the gate way to this mountainous valley, has also received fresh snowfall late last night.",
              "url": "https://www.greaterkashmir.com/latest-news/gurez-valley-draped-in-white-after-fresh-snowfall/",
              "urlToImage": "https://www.greaterkashmir.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-17-at-10.05.02_3855f724.jpg",
              "publishedAt": "2023-12-17T05:35:20Z",
              "content": "Srinagar, Dec 17: Gurez valley in north Kashmirs Bandipora district was covered in a white blanket as it received another spell of fresh snowfall on Sunday morning.\r\nReports said that the upper reach… [+456 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "CNBCTV18"
              },
              "author": "Asmita Pant",
              "title": "From Muthoot Microfin to Azad Engineering, here are all the IPOs opening this week - CNBCTV18",
              "description": "Seven companies will collectively be raising nearly ₹3,900 crore via the route of initial public offer.",
              "url": "https://www.cnbctv18.com/market/muthoot-microfin-azad-engineering-list-of-ipo-opening-next-week-18580641.htm",
              "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2021/02/IPO-2.jpg",
              "publishedAt": "2023-12-17T04:52:22Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Surat Diamond Bourse: 5 Facts On World's Largest Office Overtaking Pentagon - NDTV",
              "description": "PM Narendra Modi will inaugurate the world's largest corporate office hub, 'Surat Diamond Bourse' today. It will be the biggest hub for worldwide trade in jewellery and diamonds, serving as a global marketplace for polished and unpolished stones.",
              "url": "https://www.ndtv.com/india-news/surat-diamond-bourse-5-facts-on-worlds-largest-office-overtaking-pentagon-4689239",
              "urlToImage": "https://c.ndtvimg.com/2023-12/n9qgtogo_surat_625x300_17_December_23.jpeg?ver-20231203.06",
              "publishedAt": "2023-12-17T04:34:07Z",
              "content": "<li>With over 4,500 networked offices, the Diamond Bourse is the biggest interconnected building in the world. The office block is the largest customs clearing house in the nation and is even larger … [+786 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Shreyas Talpade Likely To Be Discharged From Hospital Sunday Night Or Monday Morning, Reveals Filmmaker Soham Shah - NDTV Movies",
              "description": "Shreyas Talpade had undergone an angioplasty on Thursday night",
              "url": "https://www.ndtv.com/entertainment/shreyas-talpade-likely-to-be-discharged-from-hospital-sunday-night-or-monday-morning-reveals-filmmaker-soham-shah-4689203",
              "urlToImage": "https://c.ndtvimg.com/2023-12/tobvaq5o_shreyas-_625x300_17_December_23.jpg",
              "publishedAt": "2023-12-17T04:26:03Z",
              "content": "Image instagrammed by Shreyas. (courtesy: ShreyasTalpade)\r\nNew Delhi: Shreyas Talpade suffered a heart attack on Thursday and he had undergone an angioplasty on the very night he was taken to the hos… [+2186 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Bigg Boss 17: Khanzaadi gets eliminated; reveals why she wanted to 'run away' - Hindustan Times",
              "description": "Bigg Boss 17: Khanzaadi was eliminated in the latest Weekend Ka Vaar episode with Salman Khan. She has now spoken about how she 'lost interest in the game'.",
              "url": "https://www.hindustantimes.com/entertainment/tv/bigg-boss-17-khanzaadi-elimination-who-could-be-winner-ankita-lokhande-munawar-101702785168937.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/khanzaadi_1702786330728_1702786348676.png",
              "publishedAt": "2023-12-17T04:25:29Z",
              "content": "Bigg Boss 17: Firoza Khan, who is better known by her stage name Khanzaadi, was among the most talked about contestants of this season. After her eviction from Bigg Boss 17, Khanzaadi told DNA in an … [+2115 chars]"
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
              "publishedAt": "2023-12-17T04:21:05Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "How Israel Forces Mistook 3 Hostages As Hamas Operatives, Shot Them Dead - NDTV",
              "description": "The Israel military has expressed regret over the killing of three Israeli hostages mistaken for Hamas operatives at Shejaya in Gaza and blamed the \"horrible\" nature of the conflict for the massive error in judgement.",
              "url": "https://www.ndtv.com/world-news/how-israel-forces-mistook-3-hostages-as-hamas-terrorists-shot-them-dead-4689167",
              "urlToImage": "https://c.ndtvimg.com/2023-12/9tebmbn_israel-hostages_625x300_17_December_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20231203.06",
              "publishedAt": "2023-12-17T04:12:47Z",
              "content": "The killings have compounded worries of the families of the other hostages\r\nNew Delhi: The Israel military has expressed regret over the killing of three Israeli hostages mistaken for Hamas operative… [+4151 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Venkatesh Ravichandran",
              "title": "[Watch] Harry Brook's incredible final over heroics help England pull off highest successful run chase vs WI in 3rd T20I - Sportskeeda",
              "description": "England batter Harry Brook helped the side pull off an unlikely final over heist against the West Indies in the third T20I on December 16.",
              "url": "https://www.sportskeeda.com/cricket/news-watch-harry-brook-s-incredible-final-heroics-helps-england-pull-highest-successful-run-chase-vs-wi-3rd-t20i",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/f2db5-17027819035913-1920.jpg",
              "publishedAt": "2023-12-17T03:34:44Z",
              "content": "England batter Harry Brook helped the side pull off an unlikely final over heist against the West Indies in the third T20I on December 16.\r\nTrailing 0-2 and chasing an improbable 223 for victory, Eng… [+2593 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Delhi's Minimum Temperature Settles At 7 Degrees, Air Quality 'Very Poor' - NDTV",
              "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
              "url": "https://www.ndtv.com",
              "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
              "publishedAt": "2023-12-17T03:23:53Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Sports Desk",
              "title": "Explained: Why Rohit was replaced by Hardik as Mumbai captain for IPL 2024 - Hindustan Times",
              "description": "Rohit Sharma was replaced by Hardik Pandya as Mumbai Indians' captain for IPL 2024. A successful MI season will strengthen his captaincy claim at India. | Cricket",
              "url": "https://www.hindustantimes.com/cricket/why-rohit-sharma-was-replaced-by-hardik-pandya-captain-of-mumbai-indians-ipl-2024-explained-hardik-pandya-gt-mi-101702778124484.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/PTI12-15-2023-000331B-0_1702782353934_1702782375184.jpg",
              "publishedAt": "2023-12-17T03:09:47Z",
              "content": "Endings are just new beginnings in disguise. Rohit Sharma's departure as the captain of the Mumbai Indians marked the end of an era in the Indian Premier League (IPL). The most successful player in t… [+4164 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "ThePrint"
              },
              "author": "Akanksha Mishra",
              "title": "Aditya L1 unveils full-disk images of Sun, telescope aboard used 11 filters to show new details - ThePrint",
              "description": "ScientiFix, our weekly feature, offers you a summary of the top global science stories of the week, with links to their sources.",
              "url": "https://theprint.in/scientifix/aditya-l1-unveils-full-disk-images-of-sun-telescope-aboard-used-11-filters-to-show-new-details/1889030/",
              "urlToImage": "https://static.theprint.in/wp-content/uploads/2023/12/Untitled-design-32-2.jpg",
              "publishedAt": "2023-12-17T02:30:52Z",
              "content": "This imagery includes features like sunspots, which are dark spots on the sun where the magnetic field is strong, offering scientists valuable insights.\r\nThe collaborative effort, led by the Inter-Un… [+3757 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Tuhin Das Mahapatra",
              "title": "Donald Trump claims rally immigrants are 'poisoning the blood' of America - Hindustan Times",
              "description": "Former President Trump's divisive rhetoric resurfaces as he echoes troubling phrases likened to Nazi Germany, targeting immigrants.",
              "url": "https://www.hindustantimes.com/world-news/us-news/donald-trump-claims-rally-immigrants-are-poisoning-the-blood-of-america-101702773845866.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/Election-2024-Trump-26_1702774530115_1702774546623.jpg",
              "publishedAt": "2023-12-17T01:03:47Z",
              "content": "Former US President Donald Trump has once again used inflammatory and divisive language to attack immigrants and his political opponents. Speaking at a rally in Durham, New Hampshire, on Saturday, he… [+2453 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Sridhar Vivan",
              "title": "BM Health: Karnataka’s health push: Tackling childhood pneumonia - Bangalore Mirror",
              "description": "Outlining the key objectives, Rao said, “The main goal of the SAANS campaign is to include the adoption and adherence to National Childhood Pneumonia Management guidelines, creating awareness and mob",
              "url": "https://bangaloremirror.indiatimes.com/bangalore/others/karnatakas-health-push-tackling-childhood-pneumonia/articleshow/106052948.cms",
              "urlToImage": "https://bangaloremirror.indiatimes.com/photo/52761249.cms",
              "publishedAt": "2023-12-17T00:30:00Z",
              "content": "With an alarming rise in pneumonia-related deaths among children, the health department has initiated an awareness program. Health Minister Dinesh Gundu Rao articulated the objective, stating that th… [+3181 chars]"
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
            },
            {
              "source": {
                "id": null,
                "name": "THE WEEK"
              },
              "author": "Shyla Jovitha Abraham",
              "title": "Intermittent fasting can help obese people with type 2 diabetes lose weight - The Week",
              "description": "intermittent fasting can help obese people with type 2 diabetes lose weight and control their blood sugar levels. People with type 2 diabetes",
              "url": "https://www.theweek.in/news/health/2023/12/16/intermittent-fasting-and-people-with-type-2-diabetes.html",
              "urlToImage": "https://www.theweek.in/content/dam/week/news/2023/images/2023/7/10/Intermittent-fasting-food-eat.jpg",
              "publishedAt": "2023-12-16T10:25:37Z",
              "content": "A study published in JAMA Network Open has found that intermittent fasting can help obese people with type 2 diabetes lose weight and control their blood sugar levels. People with type 2 diabetes are… [+1587 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Samsung, Apple phone users get security warnings from CERT-In - The Economic Times",
              "description": "In has warned against multiple security-related vulnerabilities in the products and operating systems of Samsung and Apple devices which could allow hackers ...",
              "url": "https://www.youtube.com/watch?v=b8ViIZv34FA",
              "urlToImage": "https://i.ytimg.com/vi/b8ViIZv34FA/maxresdefault.jpg",
              "publishedAt": "2023-12-16T08:27:33Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Juli Clover",
              "title": "Here's How Apple Plans to Display Vision Pro in Retail Stores - MacRumors",
              "description": "As early 2024 approaches, so does the launch date of Apple's first headworn wearable, the Apple Vision Pro. Apple has promised that the headset...",
              "url": "https://www.macrumors.com/2023/12/15/apple-vision-pro-retail-store-display/",
              "urlToImage": "https://images.macrumors.com/t/e40vDS58fugJ33eWPgi8rYw5Uqk=/2000x/article-new/2023/12/vision-pro-display-1.jpg",
              "publishedAt": "2023-12-15T20:34:33Z",
              "content": "As early 2024 approaches, so does the launch date of Apple's first headworn wearable, the Apple Vision Pro. Apple has promised that the headset will come out in the early months of the year, with cur… [+2264 chars]"
            }
          ]
        },
        {
          "entertainment": [
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Suresh Oberoi Sent This Message To Neetu Kapoor After Working With Ranbir In Animal - NDTV Movies",
              "description": "Suresh Oberoi plays Ranbir's grandfather in the film",
              "url": "https://www.ndtv.com/entertainment/suresh-oberoi-sent-this-message-to-neetu-kapoor-after-working-with-ranbir-in-animal-4690848",
              "urlToImage": "https://c.ndtvimg.com/2023-12/0rm303o8_suresh-oberoi-_625x300_17_December_23.jpg",
              "publishedAt": "2023-12-17T10:50:22Z",
              "content": "Suresh Oberoi and Ranbir Kapoor in Animal. (courtesy: YouTube)\r\nNew Delhi: Suresh Oberoi, who acted as Ranbir Kapoor's grandfather in Animal, applauded the actor as \"well-behaved\" and \"dignified pers… [+1956 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Bigg Boss 17: Ayesha Khan confronts Munawar Faruqui, demands apology. Watch - Hindustan Times",
              "description": "Ayesha Khan has called out Munawar Faruqui's behaviour on Bigg Boss 17 and said that there's a big difference between being a good artist and a good person.",
              "url": "https://www.hindustantimes.com/entertainment/tv/bigg-boss-17-ayesha-khan-munawar-faruqui-apology-two-timing-101702804959319.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/munawar_1702806084074_1702806084506.jpg",
              "publishedAt": "2023-12-17T09:55:05Z",
              "content": "Bigg Boss 17: Ayesha Khan has joined the Bigg Boss house as a wild card contestant after K-pop sensation Aoora. The makers of the show have now shared a video of Ayesha introducing herself and thereb… [+3286 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "123telugu.com"
              },
              "author": null,
              "title": "Latest buzz on Guntur Kaaram trailer - 123telugu",
              "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
              "url": "https://www.123telugu.com/mnews/latest-buzz-on-guntur-kaaram-trailer.html",
              "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
              "publishedAt": "2023-12-17T09:30:00Z",
              "content": "As cinephiles eagerly await the Sankranthi season, all eyes are on Guntur Kaaram, the highly anticipated Telugu movie starring Super Star Mahesh Babu and directed by Trivikram Srinivas.\r\nAccording to… [+522 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Animecorner.me"
              },
              "author": "Marko Jovanovic",
              "title": "One Piece Anime Remake by WIT Studio and Netflix Announced - Anime Corner",
              "description": "ONE PIECE  is officially getting a remake anime project by WIT Studio and Netflix,…",
              "url": "https://animecorner.me/one-piece-anime-remake-by-wit-studio-and-netflix-announced/",
              "urlToImage": "https://static.animecorner.me/2023/12/1702804858-65774.jpg",
              "publishedAt": "2023-12-17T09:22:09Z",
              "content": "ONE PIECE  is officially getting a remake anime project by WIT Studio and Netflix, starting with at East Blue with a teaser of Romance Dawn. Thats the title of the first manga chapter, as well as the… [+1649 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Mahesh Babu's son Gautam to pursue higher studies at NYU, Namrata pens note - Hindustan Times",
              "description": "Gautam Ghattamaneni is the only son of Namrata Shirodkar and actor-husband Mahesh Babu. The couple welcomed Gautam in 2006.",
              "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/mahesh-babu-namrata-shirodkar-son-gautam-ghattamaneni-higher-studies-nyu-new-york-101702801779161.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/Namrata_Shirodkar_1702803805230_1702803825218.jpg",
              "publishedAt": "2023-12-17T09:21:07Z",
              "content": "Former actor Namrata Shirodkar has shared a post informing her fans and followers that her son Gautam Ghattamaneni will pursue his higher studies at New York University. Taking to Instagram on Sunday… [+2658 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "PTI",
              "title": "Ravi Teja announces new film titled 'Mr Bachchan' after megastar Amitabh Bachchan | Mint - Mint",
              "description": "Ravi Teja's next film is titled 'Mr Bachchan' after his favourite Amitabh Bachchan, with a tagline 'Naam Tho Suna Hoga'.",
              "url": "https://www.livemint.com/industry/media/ravi-teja-announces-new-film-titled-mr-bachchan-after-megastar-amitabh-bachchan-11702804252158.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/Amitabh_Bachchan_1702804465550_1702804490707.jpg",
              "publishedAt": "2023-12-17T09:17:02Z",
              "content": "Actor Ravi Teja on Sunday announced that his next film is titled \"Mr Bachchan\" after his favourite megastar Amitabh Bachchan.\r\n The makers also released the first look of the film in which Ravi Teja … [+1403 chars]"
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
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Alia Bhatt was asked how she deals with anxiety and if little Raha played a role - Hindustan Times",
              "description": "Alia Bhatt opens up about her mental health and dealing with separation anxiety from daughter Raha. The actor says letting herself free works for her. | Bollywood",
              "url": "https://www.hindustantimes.com/entertainment/bollywood/alia-bhatt-reveals-what-gives-her-anxiety-less-guilty-raha-101702801018154.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/PTI12-10-2023-000216A-0_1702801405176_1702801447484.jpg",
              "publishedAt": "2023-12-17T08:42:02Z",
              "content": "Alia Bhatt held an AMA (Ask Me Anything) session with her Instagram followers on Sunday. The actor took to Instagram Stories to respond to a series of questions about herself and her life. When asked… [+2452 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "Entertainment Desk",
              "title": "Jeh refuses to hold mom Kareena Kapoor’s hand at airport; patiently waits for big brother Taimur Ali Khan. Watch adorable video - The Indian Express",
              "description": "Kareena Kapoor Khan and Saif Ali Khan have jetted off for a vacation to celebrate Christmas with their kids, Taimur and Jeh.",
              "url": "https://indianexpress.com/article/entertainment/bollywood/jeh-refuses-to-hold-mom-kareena-kapoors-hand-at-airport-patiently-waits-for-big-brother-taimur-ali-khan-watch-adorable-video-9071611/",
              "urlToImage": "https://images.indianexpress.com/2023/12/jeh.jpg",
              "publishedAt": "2023-12-17T08:35:27Z",
              "content": "Actors Saif Ali Khan and Kareena Kapoor Khanheaded out for a vacation with their kids, Taimur Ali Khan and Jeh Ali Khan ahead of the holiday season. The family was all decked up in their cosy winter … [+1344 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India Today"
              },
              "author": "India Today Entertainment Desk",
              "title": "Viral: Abhishek-Aishwarya’s daughter Aaradhya Bachchan hugs SRK’s son AbRam - India Today",
              "description": "Aaradhya Bachchan and AbRam have been the talk of the town after glimpses of their performance from their school's annual day went viral. Now, a video of Aaradhya cutely hugging AbRam is doing the rounds.",
              "url": "https://www.indiatoday.in/movies/celebrities/story/aishwarya-rai-abhishek-bachchan-daughter-aaradhya-hugs-shah-rukh-khans-son-abram-2476988-2023-12-17",
              "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/aaradhya-bachchan-cutely-hugs-abram-172324279-16x9_0.jpg?VersionId=lfbkBCyvCQlChM4nzkzKBKLQvrrx15YQ",
              "publishedAt": "2023-12-17T08:32:31Z",
              "content": "It was the annual day event at the Dhirubhai International School, where the children of many of our favourite Bollywood stars are enrolled. Needless to say, it was a star-studded event. Aaradhya’s p… [+1538 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Viral: Triptii Dimri Dances To Animal Co-Star Ranbir Kapoor's Song Ghagra - NDTV Movies",
              "description": "Triptii also danced to Bole Chudiyan in the video",
              "url": "https://www.ndtv.com/entertainment/viral-triptii-dimri-dances-to-animal-co-star-ranbir-kapoors-song-ghagra-4690206",
              "urlToImage": "https://c.ndtvimg.com/2023-12/g1mhp1a8_triptii-_625x300_17_December_23.jpg",
              "publishedAt": "2023-12-17T08:30:50Z",
              "content": "Triptii Dimri shared this image. (courtesy: TriptiiDimri)\r\nNew Delhi: Animal star Triptii Dimri has been stealing the limelight and how. The actor, who has become the \"National Crush\" after her role … [+1827 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "123telugu.com"
              },
              "author": null,
              "title": "Salaar: A massive 120 feet cutout of Prabhas erected in Mumbai - 123telugu",
              "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
              "url": "https://www.123telugu.com/mnews/salaar-a-massive-120-feet-cutout-of-prabhas-erected-in-mumbai.html",
              "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
              "publishedAt": "2023-12-17T08:30:00Z",
              "content": "The much-awaited movie, Salaar: Part 1 – Ceasefire, starring Prabhas, is all set to release globally this Friday. Directed by Prashanth Neel, known for the KGF franchise, this A-rated action drama ha… [+684 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Gulte"
              },
              "author": "Satya B",
              "title": "Trailer Talk: Naa Saami Ranga! Nag Banks On Mass - Gulte",
              "description": "At a time when many are confused if King Nagarjuna is in the race or not, his latest movie \"Naa Saami Ranga\" emerged as the first movie from the Sankranthi race to unveil its massy teaser and grab the attention. Here is how the teaser of the movie is looking …",
              "url": "https://www.gulte.com/movienews/272918/trailer-talk-naa-saami-ranga-nag-banks-on-mass",
              "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/12/80807f32-2427-4de4-a307-b3c9218a0d62-1.jpg",
              "publishedAt": "2023-12-17T08:09:19Z",
              "content": "At a time when many are confused if King Nagarjuna is in the race or not, his latest movie “Naa Saami Ranga” emerged as the first movie from the Sankranthi race to unveil its massy teaser and grab th… [+1003 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Radhika Madan shares fun pictures from Sanya Malhotra's sister's wedding; says, 'Mujhe shaadi karne ka bo - IndiaTimes",
              "description": "Sanya Malhotra's sister Shagunn Malhotra tied knot with film producer Achin Jain on December 11, 2023. The ceremony was attended by several big names",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/radhika-madan-shares-fun-pictures-from-sanya-malhotras-sisters-wedding-says-mujhe-shaadi-karne-ka-bohat-craze-hai/articleshow/106060571.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106060571,width-1070,height-580,imgsize-54736,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T07:19:38Z",
              "content": "Radhika Madan reveals she faced rejection saying her jaw is slightly 'tedha'; says 'I was quite surprised because I was Kareena Kapoor Khan in my head'"
            },
            {
              "source": {
                "id": null,
                "name": "Greatandhra.com"
              },
              "author": "IANS",
              "title": "Creating Box Office Miracles!.. - Greatandhra",
              "description": "Isn't it strange that a film is facing criticism from all corners, especially very strongly from women, and yet the production house keeps issuing collection figures of Rs 30-40 crore each day, and double those figures in the weekend!",
              "url": "https://www.greatandhra.com/movies/news/creating-box-office-miracles-134390",
              "urlToImage": "https://www.greatandhra.com/newphotos10/animal11702796716.jpg",
              "publishedAt": "2023-12-17T07:05:16Z",
              "content": "Isn't it strange that a film is facing criticism from all corners, especially very strongly from women, and yet the production house keeps issuing collection figures of Rs 30-40 crore each day, and d… [+7073 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Salman Khan's brother-in-law Aayush Sharma's car meets with an accident in Mumbai: report - IndiaTimes",
              "description": "In October, the actor completed eight years in the industry and wrote, “So I completed 5 years in the industry today, 5th October 2018 Loveyatri relea",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/salman-khans-brother-in-law-aayush-sharmas-car-meets-with-an-accident-in-mumbai-report/articleshow/106059710.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106059692,width-1070,height-580,imgsize-26256,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T06:32:23Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "123telugu.com"
              },
              "author": null,
              "title": "Latest update on Salaar advance bookings in Telugu states - 123telugu",
              "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
              "url": "https://www.123telugu.com/mnews/latest-update-on-salaar-advance-bookings-in-telugu-states.html",
              "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
              "publishedAt": "2023-12-17T06:30:00Z",
              "content": "Prepare for the much-anticipated release of Salaar: Part 1 – Ceasefire, a Telugu cinematic extravaganza with a pan-Indian release scheduled to open in cinemas globally on December 22, 2023. Directed … [+818 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "Dunki advance box office collection: Shah Rukh Khan’s film goes head-to-head with Prabhas’ Salaar for audience’s attention - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/entertainment/bollywood/dunki-advance-box-office-collection-shah-rukh-khans-film-goes-head-to-head-with-prabhas-salaar-for-audiences-attention-9071465/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T05:51:03Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Deccan Chronicle"
              },
              "author": "Bhavana Sharma",
              "title": "Bigg Boss Telugu 7 Winner Name Leaked before Final Episode - Deccan Chronicle",
              "description": "Bigg Boss Telugu 7 Winner Name Leaked before Final Episode",
              "url": "https://www.deccanchronicle.com/entertainment/ott/171223/did-pallavi-prashanth-win-bigg-boss-telugu-7.html",
              "urlToImage": "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-c3gav383vs1psajvpelsj0h7v6-20230919161407.Medi.jpeg",
              "publishedAt": "2023-12-17T05:48:08Z",
              "content": "Pallavi Prashanth secured the lead, claiming the winner's title."
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": null,
              "title": "Shah Rukh Khan tells paparazzi 'lagega BETA AARAM SE' while getting clicked at Mumbai airport - Times of India",
              "description": "Actor Shah Rukh Khan, who is gearing up for the release of his upcoming movie 'Dunki' alongside Taapsee Pannu, Boman Irani, Vicky Kaushal, Vikram Kochhar and others, was recently papped at Mumbai airport. While walking in a hurry towards the airport entry, SR…",
              "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/shah-rukh-khan-tells-paparazzi-lagega-beta-aaram-se-while-getting-clicked-at-mumbai-airport/videoshow/106058956.cms",
              "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106058956,imgsize-51854.cms",
              "publishedAt": "2023-12-17T05:47:40Z",
              "content": "Dec 17, 2023, 11:17AM ISTSource: etimes.inActor Shah Rukh Khan, who is gearing up for the release of his upcoming movie 'Dunki' alongside Taapsee Pannu, Boman Irani, Vicky Kaushal, Vikram Kochhar and… [+390 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Animal box office collection day 16: Ranbir Kapoor starrer crosses Rs 800 crore worldwide! - Times of India - IndiaTimes",
              "description": "Ranbir Kapoor's 'Animal' continues to mint big at the box office, crossing the 500 crore mark. The film, directed by Sandeep Reddy Vanga, stars Bobby",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/box-office/animal-box-office-collection-day-16-ranbir-kapoor-starrer-crosses-rs-800-crore-worldwide/articleshow/106058713.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106058749,width-1070,height-580,imgsize-35806,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T05:36:00Z",
              "content": "Amid 'Animal's success, Ranbir Kapoor calls himself a 'simple man' who does not like anything 'animalistic'"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Love birds Rubina Dilaik and Abhinav Shukla blessed with twin baby girls?; gym trainer congratulates the - Times of India",
              "description": "Love birds Rubina Dilaik and Abhinav Shukla embrace parenthood as they welcome twin baby girls. Rubina's gym trainer confirms the news and congratulat",
              "url": "https://timesofindia.indiatimes.com/tv/news/hindi/love-birds-rubina-dilaik-and-abhinav-shukla-blessed-with-twin-baby-girls-gym-trainer-confirms-the-news/articleshow/106058617.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106058613,width-1070,height-580,imgsize-63368,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T05:24:46Z",
              "content": "Mukti Mohan ties the knot with 'Animal' actor Kunal Thakur; drops first wedding pictures saying 'In you, I find my divine connection...'"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Dunki Vs Salaar: Shah Rukh Khan asks exhibitors to 'play fair', does not request for more showcasing: rep - IndiaTimes",
              "description": "According to the makers, Dunki' is a heartwarming tale of four friends and their quest to reach foreign shores. It charts the arduous yet life-changin",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/dunki-vs-salaar-shah-rukh-khan-asks-exhibitors-to-play-fair-does-not-request-for-more-showcasing-report/articleshow/106058519.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106058519,width-1070,height-580,imgsize-31942,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T05:21:46Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Shreyas Talpade Likely To Be Discharged From Hospital Sunday Night Or Monday Morning, Reveals Filmmaker Soham Shah - NDTV Movies",
              "description": "Shreyas Talpade had undergone an angioplasty on Thursday night",
              "url": "https://www.ndtv.com/entertainment/shreyas-talpade-likely-to-be-discharged-from-hospital-sunday-night-or-monday-morning-reveals-filmmaker-soham-shah-4689203",
              "urlToImage": "https://c.ndtvimg.com/2023-12/tobvaq5o_shreyas-_625x300_17_December_23.jpg",
              "publishedAt": "2023-12-17T04:26:03Z",
              "content": "Image instagrammed by Shreyas. (courtesy: ShreyasTalpade)\r\nNew Delhi: Shreyas Talpade suffered a heart attack on Thursday and he had undergone an angioplasty on the very night he was taken to the hos… [+2186 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "DNA India"
              },
              "author": "DNA Web Team",
              "title": "After Shah Rukh Khan refuses to be part of Rajinikanth's Thalaivar 171, Lokesh Kanagaraj approaches this Bollywood star - DNA India",
              "description": "Rajinikanth and Lokesh Kanagaraj's last films, Jailer and Leo, have been two of the biggest blockbusters this year. The filmmaker is now set to direct the superstar in his next film. Read on to know why Shah Rukh Khan has refused to be a part of Thalaivar 171.",
              "url": "https://www.dnaindia.com/entertainment/report-shah-rukh-khan-refuses-to-be-part-of-rajinikanth-thalaivar-171-lokesh-kanagaraj-approaches-ranveer-singh-3071841",
              "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/12/17/2620072-srk-rajini.jpg",
              "publishedAt": "2023-12-17T04:25:52Z",
              "content": "Rajinikanth and Lokesh Kanagaraj's last films, Jailer and Leo, have been two of the biggest blockbusters this year. The filmmaker is now set to direct the superstar in his next film. Read on to know … [+2038 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Bigg Boss 17: Khanzaadi gets eliminated; reveals why she wanted to 'run away' - Hindustan Times",
              "description": "Bigg Boss 17: Khanzaadi was eliminated in the latest Weekend Ka Vaar episode with Salman Khan. She has now spoken about how she 'lost interest in the game'.",
              "url": "https://www.hindustantimes.com/entertainment/tv/bigg-boss-17-khanzaadi-elimination-who-could-be-winner-ankita-lokhande-munawar-101702785168937.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/khanzaadi_1702786330728_1702786348676.png",
              "publishedAt": "2023-12-17T04:25:29Z",
              "content": "Bigg Boss 17: Firoza Khan, who is better known by her stage name Khanzaadi, was among the most talked about contestants of this season. After her eviction from Bigg Boss 17, Khanzaadi told DNA in an … [+2115 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Sam Bahadur Box Office Collection Day 16: Vicky Kaushal's film persists strong run, inches closer to ₹100 crore mark | Mint - Mint",
              "description": "Vicky Kaushal's biopic 'Sam Bahadur' is holding its ground at the box office despite tough competition from 'Animal'. The film is likely to cross  ₹100 crore soon, with the total collection currently at  ₹93.5 crores.",
              "url": "https://www.livemint.com/industry/media/sam-bahadur-box-office-collection-day-16-vicky-kaushals-film-persists-strong-run-inches-closer-to-rs-100-crore-mark-11702779640099.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/Sam_Bahadur_5_1702179480728_1702780035250.png",
              "publishedAt": "2023-12-17T03:06:19Z",
              "content": "Sam Bahadur Box Office Collection Day 16: Vicky Kaushal's 'Sam Bahadur' which is a biopic on the legendary Indian field marshal Sam Manekshaw is going steady at the Box office despite facing a tough … [+2758 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Odishatv.in"
              },
              "author": "Sangati Jogwar",
              "title": "Abhishek-Aishwarya Rai rift: Bachchan Bahu still lives with her in-laws but there is a twist - OTV News",
              "description": "For the last few days, strong rumours have been circulating that Ash has left the Bachchan house Jalsa and is staying separately with her mother Vrinda Rai.",
              "url": "https://odishatv.in/news/entertainment/abhishek-aishwarya-rai-rift-bachchan-bahu-still-lives-with-her-in-laws-but-there-is-a-twist-222750",
              "urlToImage": "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/recent_photo_1702729152.webp",
              "publishedAt": "2023-12-17T02:00:02Z",
              "content": "Amitabh Bachchan and all his family members including Jaya, Abhishek, Shweta, and Aishwarya Rai Bachchan have never replied to gossip or rumours about them. For the last few days, strong rumours have… [+2010 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Koreaboo.com"
              },
              "author": null,
              "title": "The TOP 10 K-Pop Girl Group Member Brand Reputation Rankings For The End Of 2023 - Koreaboo",
              "description": "The Korea Brand Reputation Research Institute recently revealed the K-Pop girl group member brand reputation rankings for the month of December 2023!",
              "url": "https://www.koreaboo.com/lists/kpop-top-10-girl-group-member-brand-reputation-rankings-end-2023/",
              "urlToImage": "https://lh3.googleusercontent.com/7sY-jgmm2Ie8bSebmZefxI2V1AzJi1E2Bm9-7uUH_arEhoyCLfUy6rHMAPFFPTk6oauxDB7f2GoH9ILA7cqDe6RTrxG9n95zRl2KOB-bRsuVqrE8=w1200-h630-rj-pp-e365",
              "publishedAt": "2023-12-17T01:42:59Z",
              "content": "The Korea Brand Reputation Research Institute recently revealed the K-Pop girl group member brand reputation rankings for the month of December 2023! These rankings are determined by collecting data … [+1792 chars]"
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
                "name": "VOGUE India"
              },
              "author": "VOGUE India",
              "title": "Taurus Horoscope Today: December 17, 2023 - VOGUE India",
              "description": null,
              "url": "https://www.vogue.in/horoscope/product/taurus-horoscope-today-december-17-2023/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T00:20:56Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "VOGUE India"
              },
              "author": "VOGUE India",
              "title": "Gemini Horoscope Today: December 17, 2023 - VOGUE India",
              "description": null,
              "url": "https://www.vogue.in/horoscope/product/gemini-horoscope-today-december-17-2023/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T00:20:35Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "VOGUE India"
              },
              "author": "Woodstock Witch",
              "title": "Scorpio Horoscope Today: December 17, 2023 - VOGUE India",
              "description": "Read VOGUE India's free daily Scorpio horoscope for 17th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
              "url": "https://www.vogue.in/horoscope/product/scorpio-horoscope-today-december-17-2023/",
              "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Scorpio.jpg",
              "publishedAt": "2023-12-17T00:20:31Z",
              "content": "Right now, youre aligned with your mission and your vision. Youre doing everything you can to shine your light, to make the world a better place. Trust that your magnetic field will call into your ex… [+265 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "VOGUE India"
              },
              "author": "VOGUE India",
              "title": "Pisces Horoscope Today: December 17, 2023 - VOGUE India",
              "description": null,
              "url": "https://www.vogue.in/horoscope/product/pisces-horoscope-today-december-17-2023/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T00:20:19Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "VOGUE India"
              },
              "author": "VOGUE India",
              "title": "Sagittarius Horoscope Today: December 17, 2023 - VOGUE India",
              "description": null,
              "url": "https://www.vogue.in/horoscope/product/sagittarius-horoscope-today-december-17-2023/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T00:20:16Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "VOGUE India"
              },
              "author": "Woodstock Witch",
              "title": "Aries Horoscope Today: December 17, 2023 - VOGUE India",
              "description": "Read VOGUE India's free daily Aries horoscope for 17th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
              "url": "https://www.vogue.in/horoscope/product/aries-horoscope-today-december-17-2023/",
              "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Aries-.jpg",
              "publishedAt": "2023-12-17T00:20:08Z",
              "content": "Its okay to not have all the answers, Aries. Its okay to feel like youre moving through life without a roadmap and that you do *not* know where you are headed. Given that youre simultaneously grievin… [+383 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "VOGUE India"
              },
              "author": "VOGUE India",
              "title": "Aquarius Horoscope Today: December 17, 2023 - VOGUE India",
              "description": null,
              "url": "https://www.vogue.in/horoscope/product/aquarius-horoscope-today-december-17-2023/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T00:20:04Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "VOGUE India"
              },
              "author": "VOGUE India",
              "title": "Capricorn Horoscope Today: December 17, 2023 - VOGUE India",
              "description": null,
              "url": "https://www.vogue.in/horoscope/product/capricorn-horoscope-today-december-17-2023/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T00:20:02Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Dr J.N Pandey",
              "title": "Weekly Horoscope Libra, Dec 17-23, 2023 predicts a romantic vacation - Hindustan Times",
              "description": "Read Libra weekly horoscope for Dec 17-23, 2023 to know your Weekly astrological predictions. | Horoscope",
              "url": "https://www.hindustantimes.com/astrology/horoscope/weekly-horoscope-libra-dec-17-23-2023-predicts-a-romantic-vacation-101702720939772.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/libra_1690910632044_1702756806779.jpg",
              "publishedAt": "2023-12-16T20:02:02Z",
              "content": "Libra - (23rd September to 22nd October)\r\nWeekly Horoscope Prediction says, Youll leave no problem unresolved\r\nWeekly Horoscope Libra, Dec 17-23, 2023. Minor financial issues will come up this week w… [+3015 chars]"
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
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Randeep Hooda and Lin Laishram's new UNSEEN video from their reception party in dipped in love, netizens - IndiaTimes",
              "description": "Randeep Hooda tied the knot with Lin Laishram after they dated each other for a few years. The couple got married in Imphal and had a reception party",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/randeep-hooda-and-lin-laishrams-new-unseen-video-from-their-reception-party-in-dipped-in-love-netizens-react-watch/articleshow/106052234.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106052239,width-1070,height-580,imgsize-28074,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T18:26:57Z",
              "content": "Mimi Chakraborty is embracing the vibrant world of boho prints with style and grace"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "'Animal' actor Siddhant Karnick reacts to Ranbir Kapoor-Rashmika Mandanna's 'bra-strap pulling' scene in - IndiaTimes",
              "description": "Siddhant Karnick defends the scene from 'Animal' where Ranbir Kapoor's character is pulling his wife Rashmika Mandanna's bra strap and hurting her, he",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/animal-actor-siddhant-karnick-reacts-to-ranbir-kapoor-rashmika-mandannas-bra-strap-pulling-scene-in-the-film-i-understood-the-kinkiness/articleshow/106051296.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106051327,width-1070,height-580,imgsize-80554,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T16:37:56Z",
              "content": "Kalyani Priyadarshan exuding elegance"
            },
            {
              "source": {
                "id": null,
                "name": "Mypunepulse.com"
              },
              "author": null,
              "title": "Celebrating 40 Years Of Jackie Shroff’s Legacy in Bollywood from Dust to Star - Pune Pulse",
              "description": "Veteran actor Jackie Shroff celebrated a significant milestone in his illustrious career as his iconic film 'Hero' completed 40 years on Saturday. To commemorate this four-decade-long journey, Jackie took to Instagram, sharing a heartfelt video featuring cher…",
              "url": "https://www.mypunepulse.com/celebrating-40-years-of-jackie-shroffs-legacy-in-bollywood-from-dust-to-star/",
              "urlToImage": "https://www.mypunepulse.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-16-at-21.15.24-jpeg.webp",
              "publishedAt": "2023-12-16T15:51:05Z",
              "content": "Veteran actor Jackie Shroff celebrated a significant milestone in his illustrious career as his iconic film ‘Hero’ completed 40 years on Saturday. To commemorate this four-decade-long journey, Jackie… [+4585 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Netizens are offended with Twinkle Khanna's comment as she calls men 'desert', she gives a befitting repl - IndiaTimes",
              "description": "Twinkle Khanna and Akshay Kumar never fail to serve couple goals as their bonding is quite real and deep despite the fact that they're like chalk and",
              "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/netizens-are-offended-with-twinkle-khannas-comment-as-she-calls-men-desert-she-gives-a-befitting-reply/articleshow/106050651.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106050657,width-1070,height-580,imgsize-40564,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T15:18:36Z",
              "content": "Bigg Boss Kannada 10: Speculations mount for tenth-week eviction showdown"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Lokesh Kanagaraj announces break from social media platforms, mobile. Here's why - Hindustan Times",
              "description": "Lokesh Kanagaraj thanked his audience and fans for the ‘love and support you have given for Fight Club’. He shared a post on X.",
              "url": "https://www.hindustantimes.com/entertainment/tamil-cinema/lokesh-kanagaraj-announces-break-from-social-media-platforms-mobile-during-this-time-i-wont-be-reachable-101702735451477.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Lokesh_Kanagaraj_1702454298851_1702737315988.jpg",
              "publishedAt": "2023-12-16T14:42:56Z",
              "content": "Director-producer Lokesh Kanagaraj has announced that he will take a break from all social media platforms to solely focus on his next project. Taking to X (formerly called Twitter) on Saturday, Loke… [+2427 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Arya Vaishnavi",
              "title": "Matthew Perry revealed ketamine made him think he was ‘dying’ in his 2022 memoir - Hindustan Times",
              "description": "Matthew Perry admitted ‘ketamine was not for me’ in his 2022 memoir",
              "url": "https://www.hindustantimes.com/entertainment/tv/matthew-perry-revealed-ketamine-made-him-feel-as-he-was-dying-in-2022-memoir-101702734177623.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/PEOPLE-MATTHEW-PERRY--0_1699858729446_1702735989494.JPG",
              "publishedAt": "2023-12-16T14:15:11Z",
              "content": "Months after Matthew Perry's shocking death, autopsy reports have finally confirmed the cause of his demise. On Friday, December 15, reports confirmed that the Friends actor died from the acute effec… [+1880 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Vishal Bhardwaj reveals Aamir Khan wanted to play Langda Tyagi in Omkara - Hindustan Times",
              "description": "Vishal Bhardwaj said he was convinced with Saif Ali Khan after watching him in Dil Chahta Hai. He was also reluctant to cut his hair at first. | Bollywood",
              "url": "https://www.hindustantimes.com/entertainment/bollywood/vishal-bhardwaj-reveals-aamir-khan-wanted-to-play-langda-tyagi-in-omkara-says-nobody-could-imagine-saif-ali-khan-in-it-101702729143410.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/_e9a26b02-0c98-11e7-ad00-2dd402d181d7_1702729415429.jpg",
              "publishedAt": "2023-12-16T12:42:29Z",
              "content": "Saif Ali Khan's performance in Omkara is still considered one of his career best turns. Adapted from Othello by Vishal Bharadwaj, Saif Ali Khan starred as the antagonist Langda Tyagi. In an interview… [+2022 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Trisha Sengupta",
              "title": "Bobby Deol signs attendant’s shirt while onboard a flight. Watch - Hindustan Times",
              "description": "A video shared by a flight attendant featuring Bobby Deol, Ranbir Kapoor, and Rashmika Mandanna was shared on Instagram. It has left people amazed. | Trending",
              "url": "https://www.hindustantimes.com/trending/bobby-deol-signs-flight-attendant-s-shirt-as-ranbir-kapoor-rashmika-mandanna-interact-in-background-101702725903242.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Screenshot_2023-12-16_170234_1702726355245_1702726360253.png",
              "publishedAt": "2023-12-16T11:41:31Z",
              "content": "A video of a flight attendant's fangirl moment with Bobby Deol was shared on social media. The clip shows her all smiles as the actor signs his autograph on her shirt. Ranbir Kapoor and Rashmika Mand… [+1774 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Ananya reveals Sara crashed a wedding once, she had to drag her off dance floor - Hindustan Times",
              "description": "Sara Ali Khan left Ananya Panday in shock when she decided to crash a wedding party in Mumbai last year. Check out what happened next. | Bollywood",
              "url": "https://www.hindustantimes.com/entertainment/bollywood/ananya-panday-reveals-sara-ali-khan-crashed-a-wedding-dance-floor-101702724640158.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/sara_ananya_1702724940954_1702724941266.jpg",
              "publishedAt": "2023-12-16T11:21:55Z",
              "content": "Ananya Panday and Sara Ali Khan are close friends. Ananya, who is awaiting the release of her upcoming Netflix film Kho Gaye Hum Kahan, shared how one time Sara crashed a wedding party, and she had t… [+2091 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "After Adipursh VFX backlash, Shrimad Ramayan makers ‘leaving no stones unturned’ - Hindustan Times",
              "description": "Shrimad Ramayan will air in January and the producer Siddharth Tewary is confident the show will be well received after Adipursh was slammed earlier this year.",
              "url": "https://www.hindustantimes.com/entertainment/tv/adipursh-vfx-backlash-prabhas-shrimad-ramayan-producer-reacts-mythological-show-101702723941947.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/adipurush_backlash_1702724355719_1702724374326.jpg",
              "publishedAt": "2023-12-16T11:19:18Z",
              "content": "Shrimad Ramayan's producer Siddharth Tewary talked about the upcoming TV show based on the Hindu epic, and why he was backing a mythological show after criticism of Prabhas-starrer Adipurush earlier … [+2721 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Kapil Sharma-Ginni Chatrath And Others At Mukti Mohan And Kunal Thakur's Reception - NDTV Movies",
              "description": "\"Really feeling overwhelmed with love and blessings coming our way,\" Mukti Mohan wrote",
              "url": "https://www.ndtv.com/entertainment/kapil-sharma-ginni-chatrath-and-others-at-mukti-mohan-and-kunal-thakurs-reception-4685299",
              "urlToImage": "https://c.ndtvimg.com/2023-12/k9dpv14_mukti_625x300_16_December_23.jpg",
              "publishedAt": "2023-12-16T11:11:42Z",
              "content": "Mukti Mohan shared this image. (courtesy: muktimohan)\r\nNew Delhi: Mukti Mohan and Kunal Thakur's wedding reception was a star-studded affair. The guest list included Kapil Sharma and his wife Ginni C… [+1652 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": "NDTV Lifestyle Desk",
              "title": "Alia Bhatt's Custom Anavila Yellow Saree With Ribbon Braids Brings Spring Sunshine To Winter - NDTV Swirlster",
              "description": "Every time Alia Bhatt sides with a striking <i>saree</i>, she scores high on the style meter",
              "url": "https://swirlster.ndtv.com/festive-wear/as-husband-ranbir-kapoors-animal-crosses-rs-800-crores-alia-bhatts-custom-anavila-embroidered-yellow-saree-with-ribbon-braids-brings-spring-sunshine-t-4684854",
              "urlToImage": "https://c.ndtvimg.com/2023-12/7po31bqg_alia-bhatt_625x300_16_December_23.jpg",
              "publishedAt": "2023-12-16T10:42:17Z",
              "content": "Be it her presence at the National Film Awards or the promotions of Rocky Aur Rani Kii Prem Kahaani, Alia Bhatt has spread her \"saree\"-torial charm, big time. So when she was handed the responsibilit… [+2164 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Deepika Padukone-Hrithik Roshan's New Fighter Song Summed Up By Ranveer Singh In A Word - NDTV Movies",
              "description": "We agree, Ranveer Singh. We agree",
              "url": "https://www.ndtv.com/entertainment/deepika-padukone-hrithik-roshans-new-fighter-song-summed-up-by-ranveer-singh-in-a-word-4684849",
              "urlToImage": "https://c.ndtvimg.com/2023-12/bt77lkr_deepika_625x300_16_December_23.jpg",
              "publishedAt": "2023-12-16T09:34:30Z",
              "content": "Deepika and Hrithik in a still from Sher Khul Gaye. (courtesy: YouTube)\r\nNew Delhi: The first track from Siddharth Anand's Fighter, released on Friday and it is trending even a day later. The track t… [+1577 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "123telugu.com"
              },
              "author": null,
              "title": "Saaho star’s key role in Sundeep Kishan’s sci-fi thriller - 123telugu",
              "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
              "url": "https://www.123telugu.com/mnews/saaho-stars-key-role-in-sundeep-kishans-sci-fi-thriller.html",
              "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
              "publishedAt": "2023-12-16T09:30:00Z",
              "content": "Bollywood actor Neil Nitin Mukesh, who played the main antagonist in Prabhas’ pan-India action drama, Saaho, is all set to return to the southern film industry. The actor has landed a key role in Tol… [+767 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Onmanorama.com"
              },
              "author": "Onmanorama Staff",
              "title": "Sunny Leone to make her Malayalam debut with web series ‘Pan Indian Sundari’ | Onmanorama - Onmanorama",
              "description": "The series is set to be released in five languages: Malayalam, Tamil, Kannada, Telugu, and Hindi.",
              "url": "https://www.onmanorama.com/entertainment/entertainment-news/2023/12/16/sunny-leone-malayalam-debut-web-series-pan-indian-sundari.html",
              "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2023/12/16/sunny-leone.jpg",
              "publishedAt": "2023-12-16T09:17:24Z",
              "content": "Actor Sunny Leone is making her Malayalam debut in the upcoming web series titled 'Pan Indian Sundari', distributed by HR OTT. Produced by Sreena Prathapan under the banner of HR Productions, the ser… [+604 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India TV News"
              },
              "author": "Edited by Ashesh Mallick",
              "title": "Dog recreates Animal's 'Jamal Kudu' song, internet can't stop gasping. Seen yet? - India TV News",
              "description": "A video of a dog walking on the tunes 'Jamal Kudu' of 'Animal' movie has gone viral on social media. The Internet cannot stop laughing on the meme. WATCH",
              "url": "https://www.indiatvnews.com/trending/news/viral-video-fog-recreates-animal-jamal-kudu-song-bobby-deol-ranbir-kapoor-memes-trending-news-stories-latest-updates-2023-12-16-907568",
              "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/jamal-kudu-viral-video-1702717668.jpg",
              "publishedAt": "2023-12-16T09:09:23Z",
              "content": "Viral video: Abrar's entry song in Ranbir Kapoor's 'Animal' movie 'Jamal Kudu' has taken the internet by storm. The song has been edited uniquely and creatively by memers, while creators are making f… [+1206 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Prithviraj says the scale of Salaar is so huge that 'it can even dwarf KGF 2’ - Hindustan Times",
              "description": "Prithviraj Sukumaran also admitted that he would be disappointed with director Prasanth Neel had the scale of Salaar been any less.",
              "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/prithviraj-sukumaran-says-the-scale-of-salaar-is-so-huge-that-it-can-even-dwarf-kgf-2-compares-it-to-game-of-thrones-101702715379966.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Prithviraj_Salaar_3_1702647724667_1702715790867.jpg",
              "publishedAt": "2023-12-16T08:49:27Z",
              "content": "Salaar: Part One Ceasefire is one of the most awaited films of the year. It stars Prabhas and Prithviraj Sukumaran in the lead, and is directed by Prashanth Neel, who helmed the KGF films. In a new i… [+1977 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": null,
              "title": "SHOCKING! 'CID' actress Vaishnavi Dhanraj accuses family of domestic violence; says 'I've been abused and hit badly' - Times of India",
              "description": "Actress Vaishnavi Dhanraj has accused her family of physical violence. A video has emerged on social media and is going viral wherein the actress could be seen in a tormented state and seeking help after allegedly getting assaulted by her family members. In t…",
              "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/shocking-cid-actress-vaishnavi-dhanraj-accuses-family-of-domestic-violence-says-ive-been-abused-and-hit-badly/videoshow/106043331.cms",
              "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106043331,imgsize-57514.cms",
              "publishedAt": "2023-12-16T08:35:00Z",
              "content": "Dec 16, 2023, 02:05PM ISTSource: etimes.inActress Vaishnavi Dhanraj has accused her family of physical violence. A video has emerged on social media and is going viral wherein the actress could be se… [+969 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "Kareena Kapoor Khan proudly records Taimur’s school performance; Karan Johar, Gauri Khan cheer and smile. Watch here - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/entertainment/bollywood/kareena-kapoor-khan-proudly-records-taimurs-school-performance-karan-johar-gauri-khan-cheer-and-smile-watch-here-9070644/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T08:33:56Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Triptii Dimri reacts as her Instagram followers grow massively since starring with Ranbir Kapoor in Animal - Hindustan Times",
              "description": "Triptii Dimri has spoken about the sudden jump in her Instagram follower count and also revealed her family's reaction to it. The actor was last seen in Animal. | Bollywood",
              "url": "https://www.hindustantimes.com/entertainment/bollywood/triptii-dimri-reacts-as-her-instagram-followers-grow-massively-since-starring-with-ranbir-kapoor-in-animal-101702710808996.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Triptii_Dimri_1702710993112_1702711008595.jpg",
              "publishedAt": "2023-12-16T07:47:05Z",
              "content": "Triptii Dimri, who was seen Sandeep Reddy Vanga's Animal alongside Ranbir Kapoor, has gained millions of followers on Instagram in recent days. Now, in an interview with News 18, the actor has talked… [+2797 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Entertainment Desk",
              "title": "Indian Police Force teaser: Sidharth Malhotra, Shilpa Shetty are fierce as cops - Hindustan Times",
              "description": "Indian Police Force teaser: The series is helmed by Rohit Shetty and stars Sidharth Malhotra, Shilpa Shetty and Vivek Oberoi. It will be released in January. | Web Series",
              "url": "https://www.hindustantimes.com/entertainment/web-series/indian-police-force-teaser-rohit-shetty-action-sidharth-malhotra-shilpa-shetty-101702709485220.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/indian_police_force_1702711550208_1702711550536.png",
              "publishedAt": "2023-12-16T07:27:50Z",
              "content": "On Saturday, Rohit Shetty unveiled the much-awaited teaser for Indian Police Force season 1. It is a Prime Video original series, starring Sidharth Malhotra, Shilpa Shetty and Vivek Oberoi. It will b… [+2460 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Sunny Deol On Animal: \"Very Happy For Bobby But Didn't Like Certain Things\" - NDTV Movies",
              "description": "\"There are certain things that I did not like, which I don't like in many films including my own,\" said Sunny Deol",
              "url": "https://www.ndtv.com/entertainment/very-happy-for-bobby-but-didnt-like-certain-things-in-animal-sunny-deol-4679221",
              "urlToImage": "https://c.ndtvimg.com/2023-12/aeq7bemg_sunny-deol_625x300_16_December_23.jpg",
              "publishedAt": "2023-12-16T06:53:16Z",
              "content": "Bobby with Sunny Deol. (courtesy: iambobbydeol)\r\nMumbai: Sunny Deol says he is happy with the praise his brother Bobby is receiving for his performance in Animal, even though he didn't like certain t… [+2414 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Kaun Banega Crorepati 15: Host Amitabh Bachchan reveals how once Shah Rukh Khan scolded daughter Suhana K - Times of India",
              "description": "Amitabh Bachchan welcomes The Archies cast and crew on Kaun Banega Crorepati 15. Suhana Khan, Shah Rukh Khan and Gauri Khan's daughter, appears on the",
              "url": "https://timesofindia.indiatimes.com/tv/news/hindi/kaun-banega-crorepati-15-host-amitabh-bachchan-reveals-how-once-shah-rukh-khan-scolded-daughter-suhana-khan-over-taking-a-dip-in-pool-the-latter-says-maybe-only-time-my-dad-said-no-to-me/articleshow/106040736.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106040805,width-1070,height-580,imgsize-40466,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T06:32:12Z",
              "content": "Yeh Rishta Kya Kehlata Hai on location: Abhira gets inside the kitchen to cook food for herself"
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Jojo",
              "title": "WWE SmackDown SPOILER Results: New faction attacks former world champ; AJ Styles attacked by Bloodline; huge match planned for New Year's Special - Sportskeeda",
              "description": "WWE decided to tape next week's episode of SmackDown as the roster will be going on Christmas Break next week.",
              "url": "https://www.sportskeeda.com/wwe/wwe-smackdown-spoiler-results-new-faction-attacks-former-world-champ-aj-styles-attacked-bloodline-huge-match-planned-new-year-s-special",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/5627e-17027021391185-1920.jpg",
              "publishedAt": "2023-12-16T05:06:50Z",
              "content": "WWE decided to tape next week's episode of SmackDown as the roster will be going on Christmas Break next week. Nick Aldis announced a big triple-threat match for SmackDown New Year's Revolution, with… [+3382 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "PTI",
              "title": "Tujhse Naraz Nahi Zindagi singer Anup Ghosal dies at 77 - Hindustan Times",
              "description": "Tujhse Naraz Nahi Zindagi fame singer Anup Ghosal died in Kolkata. He was 77. | Bollywood",
              "url": "https://www.hindustantimes.com/entertainment/bollywood/tujhse-naraz-nahi-zindagi-singer-anup-ghosal-dies-at-77-mamata-banerjee-extends-condolences-101702698762661.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/anup_ghoshal_1702700797451_1702700797628.jpg",
              "publishedAt": "2023-12-16T04:28:11Z",
              "content": "Bengali singer Anup Ghoshal, mostly known for the Tujhse Naraz Nahi Zindagi number from the 1983 film Masoom and who immortalised the songs in several Satyajit Ray's musicals died here on Friday, his… [+2245 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India Today"
              },
              "author": "Disha Bhatnagar",
              "title": "Tarot Card Predictions December 16, 2023: Tarot Card Reading for All Zodiac Signs - India Today",
              "description": "Tarot Card Reading for Today: December 16, 2023. Know what’s in store for your card. Our Tarot card reader Disha Bhatnagar reads the cards for you.",
              "url": "https://www.indiatoday.in/horoscopes/story/daily-tarot-card-today-16-december-2023-2476436-2023-12-16",
              "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/tarot-card-114743357-16x9_2.jpg?VersionId=WNx9hmtdhBwzIUZpObnmE.BSvFKtPPIl",
              "publishedAt": "2023-12-16T01:32:26Z",
              "content": "Aries (Four of Cups)\r\nYou are in a dilemma about choosing the best opportunity among the ones that have come your way. It takes you considerable time to make decisions, causing you to miss out on sev… [+8800 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "etimes.in",
              "title": "Bigg Boss 17: Salman Khan confronts Ankita Lokhande for her conversation with medical help; former says ' - Times of India",
              "description": "The Bigg Boss 17 episode featured a Keechad task, with housemates pouring mud on contestants with ghamand. Salman Khan criticized Munawar for his game",
              "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-salman-khan-confronts-ankita-lokhande-for-her-conversation-with-medical-help-former-says-bigg-boss-ke-baad-aap-bohot-busy-hone-wale-ho-was-this-about-your-looks/articleshow/106032783.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106032786,width-1070,height-580,imgsize-977743,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-15T20:11:11Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "M Suganth",
              "title": "Kannagi Movie Review: Kannagi delivers its message without being preachy - IndiaTimes",
              "description": "For almost its entire running time, Kannagi plays out like four shorts from an anthology being cross-cut from one to the other.",
              "url": "https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/kannagi/movie-review/106031155.cms",
              "urlToImage": "https://static.toiimg.com/photo/msid-106031155/106031155.jpg?7222",
              "publishedAt": "2023-12-15T16:36:26Z",
              "content": "Kannagi Movie Synopsis: 'Four' women facing four different issues in their relationships try to navigate those problems and lead their lives, but will society be favourable towards them?Kannagi Movie… [+2839 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India.com"
              },
              "author": "Onam Gupta",
              "title": "Tripti Dimri Aka Bhabhi 2 Bedazzles in Bold Blouse, Satin Saree - India.com",
              "description": "",
              "url": "https://www.india.com/webstories/lifestyle/tripti-dimri-aka-bhabhi-2-bedazzles-in-bold-blouse-satin-saree-6588132/",
              "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/triptidimri1.jpg",
              "publishedAt": "2023-12-15T07:57:04Z",
              "content": "Tripti Dimri is a sight to behold in traditional look\r\nTripti Dimri teamed her satin saree with a deep-neck bold backless blouse\r\nTripti Dimri complemented her saree with long danglers.\r\nTripti Dimri… [+437 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Khushi Pal",
              "title": "Jawan, Gadar 2, Animal: 5 highest grossing Indian films of 2023 - Hindustan Times",
              "description": "From Shah Rukh Khan's Jawan to Ranbir Kapoor's Animal, here is a look at the highest grossing Indian films in 2023",
              "url": "https://www.hindustantimes.com/web-stories/entertainment/jawan-gadar-2-animal-5-highest-grossing-indian-films-of-2023-101702462857038.html",
              "urlToImage": null,
              "publishedAt": "2023-12-13T12:46:54Z",
              "content": "By Khushi PalPublished Dec 13, 2023\r\nHindustan TimesEntertainment"
            }
          ]
        },
        {
          "technology": [
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
                "id": "usa-today",
                "name": "USA Today"
              },
              "author": "USA TODAY",
              "title": "How to tighten skin after weight loss - USA TODAY",
              "description": null,
              "url": "https://www.usatoday.com/story/life/health-wellness/2023/12/17/how-to-tighten-skin-after-weight-loss/71835006007/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T12:01:36Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TIMESOFINDIA.COM",
              "title": "Asus ROG Phone 8 to launch on January 9, 2024: Here’s what we know so far - Times of India",
              "description": "Asus teases ROG Phone 8, the next-gen gaming smartphone, ahead of its global debut. The official teaser video mentions 'Coming Soon' and the tagline '",
              "url": "https://timesofindia.indiatimes.com/gadgets-news/asus-rog-phone-8-to-launch-on-january-9-2024-heres-what-we-know-so-far/articleshow/106065076.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106065076,width-1070,height-580,imgsize-9040,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T11:58:53Z",
              "content": "<ul><li>News</li>\r\n<li>Asus ROG Phone 8 to launch on January 9, 2024: Heres what we know so far</li></ul>\r\nAsus teases ROG Phone 8, the next-gen gaming smartphone, ahead of its global debut. The offi… [+438 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Zeeshan Khan",
              "title": "Battlegrounds Mobile India (BGMI) guide for increasing F/D ratio (December 2023) - Sportskeeda",
              "description": "The F/D (Finishes/Death) ratio is a vital indicator of your Battlegrounds Mobile India (BGMI) success.",
              "url": "https://www.sportskeeda.com/bgmi/battlegrounds-mobile-india-bgmi-guide-increasing-f-d-ratio-december-2023",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/44223-17028036663500-1920.jpg",
              "publishedAt": "2023-12-17T11:18:04Z",
              "content": "The F/D (Finishes/Death) ratio is a vital indicator of your Battlegrounds Mobile India (BGMI) success. If it's high, it suggests that you are not only surviving longer but also contributing to your t… [+3146 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Gadgets 360 With TG: Intel's New Meteor Lake Chips and More Tech News - NDTV",
              "description": null,
              "url": "https://www.youtube.com/watch?v=RV1j0Kjv-kE",
              "urlToImage": null,
              "publishedAt": "2023-12-17T10:55:17Z",
              "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Swastik Sharma",
              "title": "5 best ways to make money in GTA Online in 2023 (post-Chop Shop update) - Sportskeeda",
              "description": "The GTA Online Chop Shop update has been an interesting DLC so far. Not only did it add a new business to the game, but also brought drift races along with special drift tuning for certain vehicles.",
              "url": "https://www.sportskeeda.com/gta/5-best-ways-make-money-gta-online-2023-post-chop-shop-update",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/70f58-17028007662332-1920.jpg",
              "publishedAt": "2023-12-17T10:51:00Z",
              "content": "The GTA Online Chop Shop update has been an interesting DLC so far. Not only did it add a new business to the game, but also brought drift races along with special drift tuning for certain vehicles. … [+3954 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "Tech News Today: Vivo X100 series India launch, iQOO to launch more accessories and more - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/technology/tech-news-today-17-december-2023-vivo-x100-iqoo-smartwatch-pixel-9071808/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T10:45:30Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Mridul Dutta",
              "title": "GTA Online Vapid Aleutian review: Price, performance, and more - Sportskeeda",
              "description": "The Vapid Aleutian is one of the newest cars added to GTA Online on the release day of The Chop Shop DLC.",
              "url": "https://www.sportskeeda.com/gta/gta-online-vapid-aleutian-review-price-performance",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/8fb63-17027990547508-1920.jpg",
              "publishedAt": "2023-12-17T10:37:00Z",
              "content": "The Vapid Aleutian is one of the newest cars added to GTA Online on the release day of The Chop Shop DLC. It is also one of the newest SUVs in the multiplayer game and comes with some special feature… [+2752 chars]"
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
                "name": "India TV News"
              },
              "author": "Edited by Saumya Nigam",
              "title": "WhatsApp brings a new automatic album feature for Channels | Deets here - India TV News",
              "description": "The new WhatsApp feature in Channels will reportedly enhance the user experience with the organisation of media and will be shared in channels and grouped in an album accordingly.",
              "url": "https://www.indiatvnews.com/technology/news/whatsapp-brings-a-new-automatic-album-feature-for-channels-deets-here-2023-12-17-907667",
              "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/whatsapp-update-pixabay-1702805695.jpg",
              "publishedAt": "2023-12-17T09:36:23Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "GSMArena.com"
              },
              "author": "Victor",
              "title": "Nothing Phone (2a) test unit leaks with photos and alleged specs - GSMArena.com news - GSMArena.com",
              "description": "Unfortunately, the leak does not reveal much of the upcoming phone's design. If rumors are to be believed, the Nothing Phone (2a) is the next device to...",
              "url": "https://www.gsmarena.com/nothing_phone_2a_test_unit_leaks_with_photos_and_alleged_specs-news-60940.php",
              "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/12/nothing-phone-2a-pvt-leak/-952x498w6/gsmarena_001.jpg",
              "publishedAt": "2023-12-17T09:01:01Z",
              "content": "If rumors are to be believed, the Nothing Phone (2a) is the next device to expect from the company and as per the latest official teaser its unveiling is right around the corner. However, we still do… [+1945 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "Gmail’s new ‘Package Tracking’ feature is built for shopaholics: Offers package delay updates - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/technology/tech-news-technology/gmails-new-package-tracking-feature-is-built-for-shopaholics-offers-package-delay-updates-9071551/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T08:47:02Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Jagran.com"
              },
              "author": "Vikas Yadav",
              "title": "WhatsApp Update New Layout For Status To Automatic Album In Channels, All About Two Upcoming Features - Jagran English",
              "description": "WhatsApp Update: The instant messaging app is working on a new status update header layout and the feature to group multiple images and videos in a single bubble in WhatsApp Channels, according to WABetaInfo. Here are the essential details about the two featu…",
              "url": "https://english.jagran.com/technology/whatsapp-update-new-layout-for-status-to-automatic-album-in-channels-all-about-two-upcoming-features-10120948",
              "urlToImage": "https://imgeng.jagran.com/images/2023/dec/whatsapp-status-update1702803088386.jpg",
              "publishedAt": "2023-12-17T08:43:00Z",
              "content": "WhatsApp Update: Meta-owned messaging application WhatsApp continues to make headlines for testing new features. In the latest update on Android, the platform is working on a new status update header… [+2056 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India.com"
              },
              "author": "Zee Media Bureau",
              "title": "Poco C65 Launched In India: Check Price, Specifications, Colour Options, And More - Zee News",
              "description": "Poco has expanded its budget-friendly smartphone lineup in India by launching the Poco C65. With its official launch into the Indian market, the Poco C65 has cemented its status as the newest member of the low-cost smartphone industry. As per the reports, the…",
              "url": "https://zeenews.india.com/technology/poco-c65-launched-in-india-check-price-specifications-colour-options-and-more-2699878.html",
              "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/17/1337458-file-photo-2023-12-17t003052.489.jpg",
              "publishedAt": "2023-12-17T08:31:31Z",
              "content": "New Delhi: Poco has expanded its budget-friendly smartphone lineup in India by launching the Poco C65. With its official launch into the Indian market, the Poco C65 has cemented its status as the new… [+2171 chars]"
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
                "id": null,
                "name": "Ticker.tv"
              },
              "author": "Cheryl King",
              "title": "What are the benefits of TCL smart TV? - TickerTV News",
              "description": "What are the benefits of TCL smart TV? - TickerTV News",
              "url": "https://ticker.tv/news/what-are-the-benefits-of-tcl-smart-tv/343548/",
              "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_a_man_using_smartphone_or_computer_on_outdoor_ebaf6880-ddbf-4b2f-8416-5aa3d92876f3.png",
              "publishedAt": "2023-12-17T07:44:12Z",
              "content": "Discover the Advantages of TCL Smart TV: Enhancing Your Entertainment Experience\r\nIn today’s digital age, smart TVs have become an integral part of our homes, revolutionizing the way we consume media… [+2694 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Investing.com"
              },
              "author": "IANS",
              "title": "Microsoft launches robust AI 'small language model' for researchers - Investing.com India",
              "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
              "url": "https://in.investing.com/news/microsoft-launches-robust-ai-small-language-model-for-researchers-3940811",
              "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/5a80153a714634b1c3b0c99238d31cb5_w_800_h_450.jpg",
              "publishedAt": "2023-12-17T06:48:55Z",
              "content": "New Delhi, Dec 17 (IANS) Microsoft (NASDAQ:\r\nMSFT\r\n) has released its newest compact small language model titled Phi-2 that continues to perform at par or better than certain larger open-source Llama… [+1848 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TIMESOFINDIA.COM",
              "title": "Instagram rolling out 'Add Yours' template for Stories, here's how it works - Times of India",
              "description": "Instagram introduces templates for Reels and Stories, allowing users to create custom templates. The new \"Add Yours\" feature lets users add GIFs, text",
              "url": "https://timesofindia.indiatimes.com/gadgets-news/instagram-rolling-out-add-yours-template-for-stories-heres-how-it-works/articleshow/106059898.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106059880,width-1070,height-580,imgsize-2483789,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T06:43:30Z",
              "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
            },
            {
              "source": {
                "id": null,
                "name": "Zee Business"
              },
              "author": "ZeeBiz WebTeam",
              "title": "Lava Yuva 3 Pro with 50MP AI camera launched at Rs 8,999 - Zee Business",
              "description": "",
              "url": "https://www.zeebiz.com/technology/news-lava-yuva-3-pro-budget-smartphone-50mp-ai-camera-launched-at-rs-8999-269046",
              "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/17/272887-lavayuva3.jpg",
              "publishedAt": "2023-12-17T06:29:11Z",
              "content": "Lava International, the homegrown smartphone manufacturer, has launched the Yuva 3 Pro smartphone. According to the company, the smartphone has been launched keeping in mind young Indian customers wh… [+1538 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TIMESOFINDIA.COM",
              "title": "Apple settles Family Sharing lawsuit, agrees to pay $25 million - Times of India",
              "description": "Apple has agreed to pay $25 million in a lawsuit settlement related to Family Sharing. The lawsuit, \"Walter Peters v. Apple Inc.,\" alleged that Apple",
              "url": "https://timesofindia.indiatimes.com/gadgets-news/apple-settles-family-sharing-lawsuit-agrees-to-pay-25-million/articleshow/106059553.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106059529,width-1070,height-580,imgsize-12926,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T06:23:00Z",
              "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
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
                "name": "Hindustan Times"
              },
              "author": "Tapatrisha Das",
              "title": "Identifying invisible triggers from childhood trauma - Hindustan Times",
              "description": "From receiving feedback to disagreements, here are a few invisible triggers from childhood trauma that can make us anxious. | Health",
              "url": "https://www.hindustantimes.com/lifestyle/health/identifying-invisible-triggers-from-childhood-trauma-101702782489312.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/b4_1_1702782523896_1702782524201.jpg",
              "publishedAt": "2023-12-17T06:16:10Z",
              "content": "When we are brought up in dysfunctional homes, we grow up with fear of abandonment, rejection and childhood trauma. Childhood trauma can show up in our adult relationships as well in different forms.… [+1903 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "Tech Desk",
              "title": "DuckDuckGo browser can prevent apps from tracking you: Here’s how to enable the feature - The Indian Express",
              "description": "DuckDuckGo browser for Android has a new feature called 'App Tracking Protection' that lets users block third party trackers in apps.",
              "url": "https://indianexpress.com/article/technology/techook/duckduckgo-browser-can-prevent-apps-from-tracking-you-heres-how-to-enable-the-feature-9071455/",
              "urlToImage": "https://images.indianexpress.com/2023/12/DuckDuckGo-App-Tracking-Protection.jpg",
              "publishedAt": "2023-12-17T06:13:48Z",
              "content": "The browser app of DuckDuckGo, a search engine that prioritizes user privacy, has a new feature for Android users that allows them to block third-party trackers in apps and games.Called ‘App Tracking… [+1413 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India Today"
              },
              "author": "India Today Information Desk",
              "title": "Garena Free Fire MAX Redeem Codes for December 17, 2023: How to redeem the codes - India Today",
              "description": "Here is all you need to know about the new active codes for the list of New Garena Free Fire MAX Redeem codes and the steps to redeem them.",
              "url": "https://www.indiatoday.in/information/story/garena-free-fire-redeem-codes-december-17-garena-free-fire-redeem-codes-december-17-garena-free-fire-max-redeem-codes-for-december-17-2023-how-to-redeem-the-codes-2476939-2023-12-17",
              "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/garena-free-fire-max-130356711-16x9_0.png?VersionId=DJmShDWoOjJiD0URJ_sPsA16HohVOsuM",
              "publishedAt": "2023-12-17T06:02:24Z",
              "content": "Garena Free Fire Max, a popular mobile battle royale game, was released in 2020 as an updated version of the original Garena Free Fire. The game boasts enhanced graphics, controls, gameplay mechanics… [+1615 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Aarnesh Shrivastava",
              "title": "Adin Ross accuses Twitch of view-botting popular streamers, says having 150k viewers is not \"realistic\" - Sportskeeda",
              "description": "During a livestream on December 16, 2023, Kick star Adin Ross accused Twitch of view-botting popular streamers.",
              "url": "https://www.sportskeeda.com/esports/news-adin-ross-accuses-twitch-view-botting-popular-streamers-says-150k-viewers-realistic",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/c9d1c-17027903762147-1920.jpg",
              "publishedAt": "2023-12-17T05:55:00Z",
              "content": "During a livestream on December 16, 2023, Kick star Adin Ross accused Twitch of view-botting popular streamers. While browsing submissions on his official Discord server, the content creator came acr… [+2284 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT News Desk",
              "title": "Apple recommends non-usage of ‘uncertified’ chargers for Watch. Here's why - Hindustan Times",
              "description": "The tech giant made the recommendation in a recent support document update, where it also listed ways to identify an Apple charger made for Watch.",
              "url": "https://www.hindustantimes.com/technology/apple-recommends-non-usage-of-uncertified-chargers-for-watch-heres-why-101702788155420.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/e56cd83a-3a44-11ed-8cba-ba7ad76ffd07_1663830343094_1702788182821.jpg",
              "publishedAt": "2023-12-17T05:31:38Z",
              "content": "Apple has recommended non-usage of uncertified chargers for Watch, saying in a recent support document update, that only in-house chargers or select non-company ones, must be used for the purpose.\r\nA… [+1406 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Ticker.tv"
              },
              "author": "Cheryl King",
              "title": "What is the best brand of TV for 2023? - TickerTV News",
              "description": "What is the best brand of TV for 2023? - TickerTV News",
              "url": "https://ticker.tv/news/what-is-the-best-brand-of-tv-for-2023/343273/",
              "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_mens_using_smartphone_or_computer_on_outdoor_a570845a-27ab-4ada-8ec5-25e3f7efe07e.png",
              "publishedAt": "2023-12-17T00:59:59Z",
              "content": "As technology continues to advance at an unprecedented pace, the television industry is no exception. With new features, improved picture quality, and innovative designs, choosing the right TV brand … [+2267 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Tapatrisha Das",
              "title": "Improve the moment: How this skill works in Dialectical Behavioural Therapy - Hindustan Times",
              "description": "From relaxing the body to taking a break, here are a few ways by which this skill works.",
              "url": "https://www.hindustantimes.com/photos/lifestyle/improve-the-moment-how-this-skill-works-in-dialectical-behavioural-therapy-101702711055463.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/d0jytd_1702711070553_1702711097179.jpg",
              "publishedAt": "2023-12-17T00:30:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Deccan Herald"
              },
              "author": "DH Web Desk",
              "title": "Gadgets Weekly: Asus Chromebook Plus and more - Deccan Herald",
              "description": null,
              "url": "https://www.deccanherald.com/technology/gadgets/gadgets-weekly-asus-chromebook-plus-and-more-2811127",
              "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Fb3d1788c-bb50-4555-9d56-dd90018cc35c%2FAsus_Chromebook_Plus_CX34_CS_1.jpg?rect=0%2C40%2C1070%2C562&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
              "publishedAt": "2023-12-16T23:23:00Z",
              "content": "Technology companies Asus, Lava, Realime, Goldmedal Electricals, and more launched new laptop, smartphones, and more this week (December 11-17).\r\nDH's Gadgets Weekly edition lists the latest personal… [+987 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Ticker.tv"
              },
              "author": "Tanya King",
              "title": "Instagram Introduces New Video Note Feature and Privacy Controls - TickerTV News",
              "description": "Instagram Introduces New Video Note Feature and Privacy Controls - TickerTV News",
              "url": "https://ticker.tv/news/instagram-allows-users-to-share-two-second-looping-video-notes-how-to-use-here/335902/",
              "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_man_or_men_using_smartphone_or_computer_ffce874d-006b-4d9e-9e43-8691d3985e66.png",
              "publishedAt": "2023-12-16T21:46:46Z",
              "content": "Instagram continues to innovate with the introduction of its latest feature, Video Notes. Users can now share short, looping videos through their status updates, adding another layer of expression to… [+1764 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "GSMArena.com"
              },
              "author": "Peter",
              "title": "Samsung US drops the Galaxy S23 FE to its lowest price yet - GSMArena.com news - GSMArena.com",
              "description": "It's part of the Discover Samsung Winter Sale and it is a daily deal, so it will be gone tomorrow. The Discover Samsung Winter Sale ends this Sunday, but...",
              "url": "https://www.gsmarena.com/samsung_us_drops_the_galaxy_s23_fe_to_its_lowest_price_yet-news-60925.php",
              "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/12/weekly-deals-15/-952x498w6/gsmarena_0000.jpg",
              "publishedAt": "2023-12-16T20:31:01Z",
              "content": "The Discover Samsung Winter Sale ends this Sunday, but there are still a couple of good offers to be had. The Samsung Galaxy S23 FE has been discounted during the whole week, but todays daily deal dr… [+838 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Cult of Mac"
              },
              "author": "Lewis Wallace, Lewis Wallace",
              "title": "Best (and worst) gear of 2023 [The CultCast] - Cult of Mac",
              "description": "This week on Cult of Mac's podcast: We get down to business with our picks for the best and worst tech and entertainment of 2023.",
              "url": "https://www.cultofmac.com/840458/best-gear-2023-the-cultcast-episode-625/",
              "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2023/12/best-gear-2023-CultCast-episode-625.jpg",
              "publishedAt": "2023-12-16T19:01:09Z",
              "content": "This week on Cult of Macs podcast: After a quick spin through the news of the week, we get down to business with our second round of picks for the best and worst tech and entertainment of 2023.\r\nAlso… [+3151 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Free Press Journal"
              },
              "author": "Hariom Seth",
              "title": "Know How Immersive 3D Simulation Cultivates Critical Thinking - Free Press Journal",
              "description": "Immersive simulations unlocks a new dimension of learning and cognitive prowess",
              "url": "https://www.freepressjournal.in/weekend/know-how-immersive-3d-simulation-cultivates-critical-thinking",
              "urlToImage": "https://media.assettype.com/freepressjournal/2023-12/936a427e-5acb-4339-9738-3f5490ac77b4/LS_anchor_dec_17.jpg",
              "publishedAt": "2023-12-16T18:29:00Z",
              "content": "Among innovations, immersive 3D simulations emerge as catalysts for cultivating critical thinking in three-dimensional spaces. \r\nA cognitive shift\r\nTraditional learning methods struggle to capture th… [+2509 chars]"
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
                "name": "Hindustan Times"
              },
              "author": "HT Tech",
              "title": "9 top smartwatches under 25000: A comprehensive comparison of affordable tech on your wrist - HT Tech",
              "description": "9 top smartwatches under 25000: Discover the perfect blend of style, functionality, and affordability with our in-depth comparison of smartwatches priced under Rs. 25000.",
              "url": "https://tech.hindustantimes.com/wearables/news/9-top-smartwatches-under-25000-a-comprehensive-comparison-of-affordable-tech-on-your-wrist-71702572316316.html",
              "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/14/1600x900/daniel-haaf-FZVu2JI0VeY-unsplash_1702572765798_1702572790577.jpg",
              "publishedAt": "2023-12-16T17:08:43Z",
              "content": "In the rapidly evolving world of wearable technology, smartwatches have become essential companions for individuals seeking to monitor their health, stay connected, and enhance their daily livesall w… [+10680 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Forbes"
              },
              "author": "Paul Monckton",
              "title": "New Samsung Leak Reveals Important Galaxy S24 Ultra Photo Quality Upgrade - Forbes",
              "description": "Samsung Galaxy S24 Ultra owners will enjoy much higher photo quality on social media platforms, according to a new report.",
              "url": "https://www.forbes.com/sites/paulmonckton/2023/12/16/new-samsung-leak-reveals-important-galaxy-s24-ultra-photo-quality-upgrade/",
              "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6578b0a8767df43bcbc1134f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
              "publishedAt": "2023-12-16T16:39:00Z",
              "content": "Samsung is reportedly adding HDR photo support to its flagship smartphones when posting on Instagram ... [+] and Facebook.\r\nAFP via Getty Images\r\nSamsung Galaxy S24 Ultra owners will enjoy much highe… [+3508 chars]"
            },
            {
              "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
              },
              "author": "Zack Whittaker",
              "title": "Google moves to end geofence warrants, a surveillance problem it largely created - TechCrunch",
              "description": "The practice of law enforcement tapping Google and other tech giants' banks of users' location data was first revealed in 2019.",
              "url": "https://techcrunch.com/2023/12/16/google-geofence-warrants-law-enforcement-privacy/",
              "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/cityscape-location-data.jpg?resize=1200,675",
              "publishedAt": "2023-12-16T16:34:53Z",
              "content": "Google will soon allow users to store their location data on their devices rather than on Google’s servers, effectively ending a long-running surveillance practice that allowed police and law enforce… [+5232 chars]"
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
                "name": "MacRumors"
              },
              "author": "MacRumors",
              "title": "Top Stories: iOS 17.2 Released, iPhone 16 Design Leaks, and More - MacRumors",
              "description": null,
              "url": "https://www.macrumors.com/2023/12/16/top-stories-ios-17-2-released/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T14:00:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Affiliate Desk",
              "title": "Top 10 smaller models to check out: Better than 11kg Samsung washing machine | Mint - Mint",
              "description": "Top 10 smaller washing machine models to check out: We delve into top smaller models that offer a blend of efficiency, and compact design. This guide showcases a variety of models, highlighting that bigger isn't always better.",
              "url": "https://www.livemint.com/technology/gadgets/top-10-smaller-models-to-check-out-better-than-11kg-samsung-washing-machine-11702722299933.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/samsung_washing_machine_1702723387740_1702723405326.jpg",
              "publishedAt": "2023-12-16T13:29:13Z",
              "content": "It is always wise to choose a washing machine that fits your family's size and laundry needs. While an 11kg Samsung Washing Machine may be a popular choice, it's not necessarily the best fit for ever… [+27414 chars]"
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
                "name": "Dtnext.in"
              },
              "author": "IANS",
              "title": "Microsoft’s Bing Chat made up false scandals about EU elections: Researchers - DTNEXT",
              "description": "“Errors include wrong election dates, outdated candidates, or even invented scandals concerning candidates. The chatbot’s safeguards are unevenly applied, leading to evasive answers 40 per cent of...",
              "url": "https://www.dtnext.in/technology/microsofts-bing-chat-made-up-false-scandals-about-eu-elections-researchers-754865",
              "urlToImage": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/12/16/787005-bing.jpg",
              "publishedAt": "2023-12-16T11:13:39Z",
              "content": "NEW DELHI: Microsofts AI chatbot Bing Chat, recently rebranded as Copilot, made up false scandals about real politicians and invents polling numbers, human rights organisation AlgorithmWatch has reve… [+2690 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Investing.com"
              },
              "author": "IANS",
              "title": "US news publisher sues Google for 'siphoning off' ad revenue via AI tech - Investing.com India",
              "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
              "url": "https://in.investing.com/news/us-news-publisher-sues-google-for-siphoning-off-ad-revenue-via-ai-tech-3940472",
              "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/cb92fdb333133c5a9a9c97aca8ae0004_w_800_h_450.jpg",
              "publishedAt": "2023-12-16T10:47:13Z",
              "content": "San Francisco, Dec 16 (IANS) A US-based news publisher has filed a class-action antitrust lawsuit against Google (NASDAQ:\r\nGOOGL\r\n), alleging that the tech giant is \"siphoning off\" news publishers' c… [+1811 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Investing.com"
              },
              "author": "IANS",
              "title": "Noise launches Open Wireless Stereo 'Pure Pods' with AirWave tech - Investing.com India",
              "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
              "url": "https://in.investing.com/news/noise-launches-open-wireless-stereo-pure-pods-with-airwave-tech-3940462",
              "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/9dad1ee353d5b697a33108fed4dcda28_w_800_h_450.jpg",
              "publishedAt": "2023-12-16T10:17:10Z",
              "content": "New Delhi, Dec 16 (IANS) Connected lifestyle brand Noise on Saturday launched India's first Open Wireless Stereo (OWS) -- Noise Pure Pods with AirWave technology.Available in two colours -- Power Bla… [+1601 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Tech With TG: The Evolution of Rockstar's Grand Theft Auto Series and Other Popular Titles - NDTV",
              "description": "Rockstar Games is one of the world's most popular video game publishers with several titles released over the years. The Grand Theft Auto (GTA) series is arg...",
              "url": "https://www.youtube.com/watch?v=eX3PuVSZd8g",
              "urlToImage": "https://i.ytimg.com/vi/eX3PuVSZd8g/maxresdefault.jpg",
              "publishedAt": "2023-12-16T10:00:09Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Forbes"
              },
              "author": "Adrian Bridgwater",
              "title": "Google Shapes Gemini AI Tools For Developers - Forbes",
              "description": "AI is changing and it will continue to do so - although this year of generative AI stands out as a seminal moment in time - now we need the right developer tools.",
              "url": "https://www.forbes.com/sites/adrianbridgwater/2023/12/16/google-shapes-gemini-ai-tools-for-developers/",
              "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/657d683b20807ddde92b89ef/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
              "publishedAt": "2023-12-16T09:09:49Z",
              "content": "Google MedLM is a family of foundation models fine-tuned for the healthcare industry on Google ... [+] Cloud.\r\nGoogle\r\nArtificial Intelligence (AI) is changing. But lets not forget where weve come fr… [+6336 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Jagran.com"
              },
              "author": "Vikas Yadav",
              "title": "Flipkart December Year End Sale 2023: Last Chance To Grab Rs 24,000 Off On Google Pixel 7 Pro Without Bank Offers: Details Inside - Jagran English",
              "description": "Flipkart Mobile Sale 2023: Pixel 7 Pro is available at massive discounts compared to its latest successor. The icing on the cake is that you do not need to apply any bank or exchange offers. Here are the price, bank offers, exchange discounts and specs of the…",
              "url": "https://english.jagran.com/technology/flipkart-mobile-sale-offers-2023-google-pixel-7-pro-price-specifications-big-year-end-sale-2023-rs-24000-off-bank-offers-exchange-discount-10120783",
              "urlToImage": "https://imgeng.jagran.com/images/2023/dec/pixel-7-pro-price-flipkart1702717143525.jpg",
              "publishedAt": "2023-12-16T08:50:00Z",
              "content": "Flipkart Big Year End Sale 2023: Search giant Google announced the Pixel 8 Pro smartphone in India in October this year. While it currently costs over Rs 1 lakh, you can get the one-year flagship - P… [+2134 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Flipkart Year End Sale ends today: Top 5 deals on smartphones - iPhone 14, Nothing Phone (2) and more | Mint - Mint",
              "description": "Flipkart's Year-End Sale offers deals and discounts on smartphones, including the SAMSUNG Galaxy S23 Ultra 5G, APPLE iPhone 14, Nothing Phone (2), Google Pixel 7a, and MOTOROLA Edge 40 Neo.",
              "url": "https://www.livemint.com/technology/flipkart-year-end-sale-ends-today-top-5-deals-on-smartphones-iphone-14-nothing-phone-2-and-more-11702715709797.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/iphone_14_1684930317685_1702715786293.png",
              "publishedAt": "2023-12-16T08:39:11Z",
              "content": "The holiday season kicked off with Flipkart launching its much-anticipated Year-End Sale, a yearly extravaganza that promises an array of deals and discounts. Running from December 9th to 16th, this … [+3034 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Samsung, Apple phone users get security warnings from CERT-In - The Economic Times",
              "description": "In has warned against multiple security-related vulnerabilities in the products and operating systems of Samsung and Apple devices which could allow hackers ...",
              "url": "https://www.youtube.com/watch?v=b8ViIZv34FA",
              "urlToImage": "https://i.ytimg.com/vi/b8ViIZv34FA/maxresdefault.jpg",
              "publishedAt": "2023-12-16T08:27:33Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Innovation-village.com"
              },
              "author": "Tapiwa Matthew Mutisi",
              "title": "Google Chrome's third-party cookie phaseout begins on January 4 - Innovation Village",
              "description": "Google as part of its upcoming \"Privacy Sandbox\" initiative, it will begin restricting third-party cookies in Chrome from January 4, 2024.",
              "url": "https://innovation-village.com/google-chromes-third-party-cookie-phaseout-begins-on-january-4/",
              "urlToImage": "https://innovation-village.com/wp-content/uploads/2023/12/google-third-party-cookies-2023.jpg",
              "publishedAt": "2023-12-16T07:46:20Z",
              "content": "Google recently confirmed that, as part of its upcoming “Privacy Sandbox” initiative, it will begin restricting third-party cookies in Chrome from January 4, 2024. Initially, only a random one percen… [+1158 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Beebom"
              },
              "author": "Vanshika Malhotra",
              "title": "Nothing Phone (2) Gets Stable Android 14-Based Nothing OS 2.5 - Beebom",
              "description": "Nothing has started rolling out the stable Android 14-based Nothing OS 2.5 update for the Phone (2) users after the recent release of its beta update.",
              "url": "https://beebom.com/nothing-phone-2-stable-android-14-nothing-os-2-5/",
              "urlToImage": "https://beebom.com/wp-content/uploads/2023/12/Nothing-phone-2-stable-Android-14-update.jpg",
              "publishedAt": "2023-12-16T07:41:20Z",
              "content": "Nothing released the beta version of Nothing OS 2.5 based on Android 14 for the Phone (2) in October and almost two months later, its stable version has now started rolling out to users. Nothing OS 2… [+2037 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "msnNOW"
              },
              "author": null,
              "title": "Top 10 43-inch Android TVs for smart, versatile viewing - MSN",
              "description": null,
              "url": "https://www.msn.com/en-in/lifestyle/shopping/top-10-43-inch-android-tvs-for-smart-versatile-viewing/ar-AA1lAiq1",
              "urlToImage": null,
              "publishedAt": "2023-12-16T07:29:06Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "GSMArena.com"
              },
              "author": "Ivan",
              "title": "Realme GT5 Pro in for review - GSMArena.com news - GSMArena.com",
              "description": "As solid a flagship as it gets. Realme makes its most powerful phones under the GT lineup for a few years now, but before the GT5 Pro, there hasn't been a...",
              "url": "https://www.gsmarena.com/realme_gt5_pro_in_for_review-news-60898.php",
              "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/12/realme-gt5-pro-ifr/-952x498w6/gsmarena_000.jpg",
              "publishedAt": "2023-12-16T07:26:01Z",
              "content": "Realme makes its most powerful phones under the GT lineup for a few years now, but before the GT5 Pro, there hasn't been a true Realme flagship in the series.\r\nThere is now - the GT5 Pro adds the fin… [+1077 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Financial Express"
              },
              "author": "The Financial Express",
              "title": "OnePlus 12, 12R, Redmi Note 13 and more: The most highly anticipated smartphones to launch in January 2024 - The Financial Express",
              "description": null,
              "url": "https://www.financialexpress.com/life/technology-oneplus-12-12r-redmi-note-13-and-more-the-most-highly-anticipated-smartphones-to-launch-in-january-2024-3340176/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T07:15:06Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "gizmochina"
              },
              "author": "gizmochina",
              "title": "Mark Zuckerberg showcases the AI capabilities of the Ray-Ban Meta smart glasses - gizmochina",
              "description": null,
              "url": "https://www.gizmochina.com/2023/12/16/mark-zuckerberg-showcases-ai-capabilities-ray-ban-meta-smart-glasses/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T06:38:23Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Jagran.com"
              },
              "author": "Vikas Yadav",
              "title": "Redmi 13C 5G Sale Get Budget Phone For Under Rs 10,000 On Amazon, Micom; Check Price, Bank Offers, Specs - Jagran English",
              "description": "Redmi 13C 5G Price: The Redmi 13C 5G is now up for grabs on Amazon and Xiaomi Indias official website. If you plan to buy a smartphone in the sub Rs 10,000-12,000 bracket, here are the prices, offers and specifications of the Redmi 13C 5G that you should know.",
              "url": "https://english.jagran.com/technology/redmi-13c-5g-price-in-india-amazon-sale-budget-phone-for-under-rs-10000-mi-com-bank-offers-discounts-specifications-6-128-launch-date-10120752",
              "urlToImage": "https://imgeng.jagran.com/images/2023/dec/redmi-13c-5g-price-in-india1702708851989.jpg",
              "publishedAt": "2023-12-16T06:33:00Z",
              "content": "Redmi 13C 5G Price In India: Chinese smartphone maker Redmi announced the Redmi 13C series in India recently. While the Redmi 13C 4G was already on sale, the Redmi 13C 5G is now up for grabs during t… [+1936 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Editorji.com"
              },
              "author": "Editorji News Desk",
              "title": "Quordle 691 hints and answer for December 16, 2023: Simplified guidelines for puzzle solving - Editorji",
              "description": "Quordle sets itself apart in the word puzzle gaming genre by introducing a groundbreaking concept that includes four interconnected word puzzles, departing from the conventional single puzzle format.",
              "url": "https://www.editorji.com/tech-news/quordle-691-hints-and-answer-for-december-16-2023-simplified-guidelines-for-puzzle-solving-1702706425171",
              "urlToImage": "https://cdn.editorji.com/QERLPgy4zS.jpg",
              "publishedAt": "2023-12-16T06:00:25Z",
              "content": "The unique design of Quordle 691 continues to captivate and engage players.\r\nUnlike traditional word games that offer isolated puzzles, Quordle's interconnected challenges add an extra layer of excit… [+1435 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "gizmochina"
              },
              "author": "gizmochina",
              "title": "Realme C67 5G Early Access sale at Noon today on Flipkart, Check out the offers - gizmochina",
              "description": null,
              "url": "https://www.gizmochina.com/2023/12/16/realme-c67-5g-early-access-sale-india/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T05:26:22Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "HT Tech",
              "title": "5 best flagship smartphones of 2023: From iPhone 15 Pro Max to Google Pixel 8 Pro, check the full list - HT Tech",
              "description": "5 best flagship smartphones of 2023 From iPhone 15 Pro Max to Google Pixel 8 Pro check the full list 5 best flagship smartphones of 2023 Know the best smartphones of the year. The list includes iPhone 15 Pro Max Google Pixel 8 Pro and more. iPhone 15 Pro Max …",
              "url": "https://tech.hindustantimes.com/web-stories/5-best-flagship-smartphones-of-2023-from-iphone-15-pro-max-to-google-pixel-8-pro-check-the-full-list-71702720151453.html",
              "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/16/1600x900/iPhone_15_1693132789020_1702720865708.jpg/",
              "publishedAt": "2023-12-16T05:03:11Z",
              "content": "Photo Credit: HT Tech\r\n 5 best flagship smartphones of 2023: Know the best smartphones of the year. The list includes iPhone 15 Pro Max, Google Pixel 8 Pro, and more. \r\nPhoto Credit: Pexels\r\n iPhone … [+1575 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "CNBCTV18"
              },
              "author": "Vijay Anand",
              "title": "A decade after debut, OnePlus has its most significant year in 2023 - CNBCTV18",
              "description": "In 2023, OnePlus celebrated nearly a decade in the smartphone industry with a return to form through the release of the OnePlus 11. This flagship device marked a significant shift for the company, which had faced criticism for losing focus in previous years. …",
              "url": "https://www.cnbctv18.com/technology/oneplus-yearender-2023-flagship-smartphones-foldable-oneplus-open-18537861.htm",
              "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/02/oneplus-1-1019x573.jpeg",
              "publishedAt": "2023-12-16T03:20:32Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TIMESOFINDIA.COM",
              "title": "Apple may switch to OLED displays for iPads, MacBooks starting next year - Times of India",
              "description": "Reports suggest that Apple plans to switch from LCD to OLED displays for iPads and MacBooks. High-end iPads will get OLED screens in 2024, while OLED",
              "url": "https://timesofindia.indiatimes.com/gadgets-news/apple-may-switch-to-oled-displays-for-ipads-macbooks-starting-next-year/articleshow/106036797.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106036751,width-1070,height-580,imgsize-25830,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T02:53:43Z",
              "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Juli Clover",
              "title": "Here's How Apple Plans to Display Vision Pro in Retail Stores - MacRumors",
              "description": "As early 2024 approaches, so does the launch date of Apple's first headworn wearable, the Apple Vision Pro. Apple has promised that the headset...",
              "url": "https://www.macrumors.com/2023/12/15/apple-vision-pro-retail-store-display/",
              "urlToImage": "https://images.macrumors.com/t/e40vDS58fugJ33eWPgi8rYw5Uqk=/2000x/article-new/2023/12/vision-pro-display-1.jpg",
              "publishedAt": "2023-12-15T20:34:33Z",
              "content": "As early 2024 approaches, so does the launch date of Apple's first headworn wearable, the Apple Vision Pro. Apple has promised that the headset will come out in the early months of the year, with cur… [+2264 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Android Central"
              },
              "author": "Vishnu Sarangapurkar",
              "title": "WhatsApp users can now pin important messages in conversations - Android Central",
              "description": "The feature is currently limited to individual and group chats.",
              "url": "https://www.androidcentral.com/apps-software/whatsapp-brings-pin-chat-feature",
              "urlToImage": "https://cdn.mos.cms.futurecdn.net/BZVmNLfmeQ2hAUyxJ7aCjN-1200-80.jpg",
              "publishedAt": "2023-12-15T17:43:52Z",
              "content": "<ul><li>WhatsApp has announced a new feature, allowing users to pin their messages in individual and group chats.</li><li>Users can set a time limit for pinned messages, although the feature is curre… [+2354 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Boudhaditya Sanyal",
              "title": "10 best 55-inch TV for grand viewing experience at home | Mint - Mint",
              "description": "10 best 55-inch TVs ensure that you have ample choice and options while choosing the right television set for your home. We have curated a list of multiple brands and models, so you get to choose from the absolute best. Get the most value for your money with …",
              "url": "https://www.livemint.com/technology/gadgets/10-best-55-inch-tv-for-grand-viewing-experience-at-home-11702632630137.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/best_55_inch_Tv_1702633323651_1702633323877.jpg",
              "publishedAt": "2023-12-15T14:39:07Z",
              "content": "Selecting the best 55-inch TV for your home can transform your living space into a mini-theatre, offering a grand viewing experience right in the comfort of your own home. Today's market is brimming … [+21182 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India Today"
              },
              "author": "Aman Rashid",
              "title": "Redmi Note 13 series: 13 big changes we expect from the Redmi flagship phones - India Today",
              "description": "Here are the 13 major changes coming to the upcoming Redmi Note 13 series in India.",
              "url": "https://www.indiatoday.in/technology/features/story/redmi-note-13-series-13-big-changes-we-expect-from-the-redmi-flagship-phones-2476526-2023-12-15",
              "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/redmi-note-13-pro-155505550-16x9_0.png?VersionId=O9ZivoBaq6y2tP0FBvG6dDhvLd..7LzC",
              "publishedAt": "2023-12-15T14:01:39Z",
              "content": "Redmi Note phones are one of the most popular smartphone series in India and so, the excitement around the upcoming Redmi Note 13 phones is palpable. By the way, for those who don’t know, the Redmi N… [+3918 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Affiliate Desk",
              "title": "10 Most affordable 60-inch+ smart tvs: From Samsung, LG, Sony and more for large-scale viewing | Mint - Mint",
              "description": "Explore our handpicked selection of the top 10 most affordable 60-inch smart TVs, tailored for those seeking a large smart TV experience without overspending. This guide focuses on the best 60-inch smart TVs, ensuring a grand viewing experience on a budget.",
              "url": "https://www.livemint.com/technology/gadgets/10-most-affordable-60-inch-smart-tvs-from-samsung-lg-sony-and-more-for-large-scale-viewing-11702622675509.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/60_inch_smart_tv_1702631917864_1702631932459.jpg",
              "publishedAt": "2023-12-15T13:29:08Z",
              "content": "In today's tech-savvy world, a 60-inch smart TV has become a household staple, merging the allure of large-scale viewing with the convenience of modern technology. As the demand for bigger screens an… [+27615 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Nivedita Mishra",
              "title": "10 best phones under Rs. 25000: Here are top choices for you - Hindustan Times",
              "description": "10 best phones under Rs. 25000: Get best options in this category that ensure you get state of the art smartphone features on a budget.",
              "url": "https://www.hindustantimes.com/technology/10-best-phones-under-rs-25000-here-are-top-choices-for-you-101702606105933.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/best_phones_under_rs_25000_1702625926349_1702625949012.jpg",
              "publishedAt": "2023-12-15T08:29:05Z",
              "content": "Best phones priced under Rs. 25000 offer a myriad of advantages that make them an appealing choice for users seeking both affordability and quality. Despite being considered budget-friendly, these de… [+19554 chars]"
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
            },
            {
              "source": {
                "id": null,
                "name": "Gadgets360.com"
              },
              "author": "David Delima, Sheldon Pinto",
              "title": "iQoo 12 First Impressions: Mature Design Meets Flagship Specifications - Gadgets 360",
              "description": "iQoo 12 is the company's latest flagship phone and the phone maker beat Xiaomi, OnePlus, and other OEMs to launch the first phone with Qualcomm’s flagship Snapdragon 8 Gen 3 in the country. We've spent two weeks with iQoo's latest smartphone and here's what w…",
              "url": "https://www.gadgets360.com/mobiles/reviews/iqoo-12-first-look-hands-on-review-launch-price-in-india-specifications-vivo-amazon-4660505",
              "urlToImage": "https://i.gadgets360cdn.com/large/iqoo_12_rear_view_1702383433308.jpg",
              "publishedAt": "2023-12-12T14:19:51Z",
              "content": "iQoo 12 was launched by the company in India today and is the company's latest flagship phone to debut in the country. The Chinese smartphone maker beat Xiaomi, OnePlus, and other OEMs to launch the … [+3499 chars]"
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
              "title": "Two PSU Bank mergers on cards? Government issues clarification after doc fuels speculation - Moneycontrol",
              "description": "The Finance Ministry has issued a clarification, saying that this is a parliamentary committee on subordinate legislation, and it has no connection whatsoever with the policies of bank mergers.",
              "url": "https://www.moneycontrol.com/news/business/stocks/psu-bank-mergers-document-fuels-talks-about-uco-bank-union-bank-bank-of-india-bank-of-maharashtra-11915951.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/12/merger-and-acquisition-770x433.jpg",
              "publishedAt": "2023-12-17T10:58:51Z",
              "content": "A government document shared on social media has triggered speculation about possible PSU bank mergers between Union Bank and UCO Bank, and Bank of India and Bank of Maharashtra. The document, whose … [+4399 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "GaadiWaadi.com"
              },
              "author": "Team GaadiWaadi",
              "title": "Kia Hits New Record In America In 2023: Surpasses 7 Lakh Sales In Nov - GaadiWaadi.com",
              "description": "Achieving all-time high annual sales record, Kia has surpassed the 7 lakh units mark in the U.S. market for the year 2023",
              "url": "https://gaadiwaadi.com/kia-hits-new-record-in-america-in-2023-surpasses-7-lakh-sales-in-nov/",
              "urlToImage": "https://gaadiwaadi.com/wp-content/uploads/2023/12/kia-forte-4.jpg",
              "publishedAt": "2023-12-17T10:08:41Z",
              "content": "We all know that Kia is on a roll in the Indian market as it received a very warm response from customers after its debut in the year 2019. In a very short time period, the Korean carmaker got hold o… [+1792 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Stocks to Buy: Here’s why Wipro and IDFC are looking attractive | Mint - Mint",
              "description": "Stocks to buy: Wipro, SBIN and IDFC Ltd. The prevailing sentiment appears strongly in favor of the bulls, as indicated by the absence of any reversal signals on the technical charts.",
              "url": "https://www.livemint.com/market/stock-market-news/stocks-to-buy-here-s-why-wipro-and-idfc-are-looking-attractive-11702803304672.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/stock_1702804000048_1702804000257.jpg",
              "publishedAt": "2023-12-17T09:07:44Z",
              "content": "Indian stock market: The Nifty's upward momentum persists with the bulls maintaining control in the market. Achieving a new all-time high, the index has marked its seventh consecutive weekly gain. Th… [+2911 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TOI Business Desk",
              "title": "Infosys salary hikes announced ahead of holiday season; here’s the likely average hike - IndiaTimes",
              "description": "India Business News: Infosys, a leading IT services company, has announced salary revisions effective from November 1, 2023, in a show appreciation for employees' dedicati",
              "url": "https://timesofindia.indiatimes.com/business/india-business/infosys-salary-hikes-announced-ahead-of-holiday-season-heres-the-likely-average-hike/articleshow/106060806.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106061629,width-1070,height-580,imgsize-27084,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T08:24:19Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "PTI",
              "title": "Reliance, Adani Enterprises India's biggest wealth creators from 2018-23: Study - Hindustan Times",
              "description": "The study, conducted by Motilal Oswal Financial Services, is based on stock market performance of companies.",
              "url": "https://www.hindustantimes.com/business/reliance-adani-enterprises-indias-biggest-wealth-creators-from-2018-23-study-101702797940763.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/gautam_adani_and_mukesh_ambani_net_worth_164429619_1702798033438_1702798033562.webp",
              "publishedAt": "2023-12-17T07:31:24Z",
              "content": "Reliance Industries Ltd was the biggest wealth creator during the five-year period from 2018 to 2023 while Adani Enterprises Ltd was the top all-round wealth creator, according to a study by Motilal … [+2969 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Vaamanaa Sethi",
              "title": "Sovereign Gold Bonds 2023-24 Series III to open tomorrow; Should you invest? | Mint - Mint",
              "description": "The valuation of these bonds is established by calculating the straightforward average of the closing price of gold with 999 purity, as per India Bullion and Jewellers Association (IBJA).",
              "url": "https://www.livemint.com/money/personal-finance/sovereign-gold-bonds-2023-24-series-iii-to-open-tomorrow-should-you-invest-11702797312819.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/Gold_bond_1702797912264_1702797912460.jpg",
              "publishedAt": "2023-12-17T07:27:28Z",
              "content": "The Reserve Bank of India (RBI) announced the Sovereign Gold Bond (SGB) Scheme Series III for the fiscal year 2023-2024, which is scheduled to open on December 18 and will close on December 22. This … [+4559 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Ankita Sengupta",
              "title": "Jeff Bezos invests $42 million to build clock that will last 10,000 years, tick once a year: Report - Moneycontrol",
              "description": "The clock is being built in a mountain and will be 500 feet tall. It will be 'powered by mechanical energy harvested from sunlight as well as the people that visit it'.",
              "url": "https://www.moneycontrol.com/news/trends/jeff-bezos-invests-42-million-to-build-clock-that-will-last-10000-years-tick-once-a-year-report-11915681.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/MixCollage-17-Dec-2023-12-41-PM-340-770x433.jpg",
              "publishedAt": "2023-12-17T07:16:52Z",
              "content": "Jeff Bezos has invested $42 million to build a clock that would run for 10,000 years. The clock--being constructed inside a mountain in Texas, US--would tick only once a year, bong once a century, an… [+1520 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Sun Pharma, Lupin recall drugs in US over manufacturing issues: USFDA | Mint - Mint",
              "description": "Lupin is also recalling an unspecified number of penicillamine tablets in the US due to failed dissolution specifications..Sun Pharma is recalling 96,192 bottles of Liothyronine Sodium Tablets in the US due to failed impurities/degradation specifications.",
              "url": "https://www.livemint.com/companies/news/sun-pharma-lupin-recall-drugs-in-us-over-manufacturing-issues-usfda-11702795716102.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/pharma_1702796315613_1702796315895.jpg",
              "publishedAt": "2023-12-17T07:04:56Z",
              "content": "Leading drugmakers Sun Pharma and Lupin have recalled their products in the US market over manufacturing issues, as per the US Food and Drug Administration (USFDA).  Mumbai-based Sun Pharmaceutical I… [+2197 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Mypunepulse.com"
              },
              "author": null,
              "title": "Infosys inaugurates new development center in Nagpur; to accommodate 3,000 employees - Pune Pulse",
              "description": "The development center provides an opportunity for employees to engage with next-gen technologies such as cloud, AI, and digital, spanning industries like telecommunications, banking, retail, aerospace, automobile, logistics, and manufacturing Infosys , a glo…",
              "url": "https://www.mypunepulse.com/infosys-inaugurates-new-development-center-in-nagpur-to-accommodate-3000-employees/",
              "urlToImage": "https://www.mypunepulse.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-17-at-12.10.24-PM-jpeg.webp",
              "publishedAt": "2023-12-17T06:43:40Z",
              "content": "Infosys , a global leader in next-generation digital services and consulting, announced the inauguration of a new state-of-the-art development center (DC) at the Mihan-SEZ in Nagpur, Maharashtra. Spr… [+2907 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "\"Blue Origin Needs Me\": Jeff Bezos On Stepping Down As Amazon CEO - NDTV",
              "description": "Jeff Bezos, the founder of e-commerce giant Amazon, has shared the reason behind his decision to step down as the CEO of the company two years ago.",
              "url": "https://www.ndtv.com/world-news/jeff-bezos-blue-origin-amazon-jeff-bezos-reveals-why-he-stepped-down-as-amazon-ceo-4689705",
              "urlToImage": "https://c.ndtvimg.com/2022-07/ri0hq7i_jeff-bezos_650x400_04_July_22.jpg",
              "publishedAt": "2023-12-17T06:39:39Z",
              "content": "Jeff Bezos is the founder of e-commerce giant Amazon (File)\r\nJeff Bezos, the founder of e-commerce giant Amazon, has shared the reason behind his decision to step down as the CEO of the company two y… [+1988 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Team-BHP"
              },
              "author": "Ananth Iyer",
              "title": "A Close Look: All the Car Facelifts launched in 2023 - Team-BHP",
              "description": "BHPian MotorDev recently shared this with other enthusiasts. Hyundai Grand i10 Nios Facelift",
              "url": "https://www.team-bhp.com/news/close-look-all-car-facelifts-launched-2023",
              "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/8_5.png",
              "publishedAt": "2023-12-17T06:38:12Z",
              "content": "BHPian MotorDev recently shared this with other enthusiasts.\r\nHyundai Grand i10 Nios Facelift\r\nWhat you'll like:\r\n<ul><li>A well-rounded, fun-to-drive hatchback. This Hyundai will leave you grinning.… [+8760 chars]"
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
                "name": "Business Standard"
              },
              "author": "Bloomberg",
              "title": "Zee directors lose vote as clock ticks down on Sony deal deadline - Business Standard",
              "description": "Independent directors Sasha Mirchandani and Vivek Mehra \"failed to get the requisite majority of votes,\" the company said in an exchange filing",
              "url": "https://www.business-standard.com/companies/news/zee-directors-lose-vote-as-clock-ticks-down-on-sony-deal-deadline-123121700220_1.html",
              "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-10/26/full/1666801916-3358.jpg",
              "publishedAt": "2023-12-17T06:21:46Z",
              "content": "Independent directors Sasha Mirchandani and Vivek Mehra \"failed to get the requisite majority of votes,\" the company said in an exchange filing\r\nShares of Zee Entertainment slid as much as 8.9% on Fr… [+1310 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Market-cap of top -10 most valued firms surges by ₹2.26 lakh crore; TCS, Infosys biggest gainers | Mint - Mint",
              "description": "Mcap of nine of top-10 most valued firms jumps  ₹2.26 lakh cr; TCS, Infosys biggest gainers",
              "url": "https://www.livemint.com/market/marketcap-of-top-10-most-valued-firms-surges-by-rs-2-26-lakh-crore-tcs-infosys-biggest-gainers-11702791830380.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/market_cap_1702792862485_1702792862703.jpg",
              "publishedAt": "2023-12-17T06:05:48Z",
              "content": "The collective market capitalization of nine out of the top-10 most valued companies witnessed a substantial surge of 2.26 lakh crore last week, driven by an overall bullish trend in the equity marke… [+2264 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Yash Sharma",
              "title": "Maruti Suzuki's upcoming cars in 2024: Next-gen Swift, eVX electric SUV and more - IndiaTimes",
              "description": "Cars News: Maruti Suzuki is set for a big year in 2024 with a series of new launches planned for India. One of the highly anticipated launches is the next-gen Sw",
              "url": "https://timesofindia.indiatimes.com/auto/cars/maruti-suzukis-upcoming-cars-in-2024-next-gen-swift-evx-electric-suv-and-more/articleshow/106058922.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106058950,width-1070,height-580,imgsize-106768,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T05:52:15Z",
              "content": "Royal Enfield Shotgun 650 in pics: Expected price, launch date, specs, features"
            },
            {
              "source": {
                "id": null,
                "name": "NDTV News"
              },
              "author": null,
              "title": "Royal Enfield Faces Fresh Challenge From Harley In India's Biker Paradise - NDTV",
              "description": "Like Triumph, US giant Harley-Davidson Inc. is also renewing efforts in India, where Royal Enfield is revered to a similar extent as Harley is in the US.",
              "url": "https://www.ndtv.com/india-news/royal-enfield-faces-fresh-challenge-from-harley-in-indias-biker-paradise-4689468",
              "urlToImage": "https://c.ndtvimg.com/2023-11/7mtglccg_royal-enfield-bike_625x300_04_November_23.jpg",
              "publishedAt": "2023-12-17T05:35:01Z",
              "content": "Royal Enfield was acquired by India's Eicher Motors Ltd. in 1994.\r\nSajneet Sandhu grew up riding on her father's Royal Enfield around Goa's palm-fringed roads, taking in endless beaches and rice padd… [+4717 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Deepali Nandwani",
              "title": "New Air India uniforms by Manish Malhotra: Debut of the saree gown & saree pantsuit - Moneycontrol",
              "description": "Once, Air India’s air hostess sarees offered cues to urban Indian women on how to drape theirs to look on-trend. Designer Manish Malhotra’s trendy saree gowns and pantsuits may add another sartorial look to the working Indian women’s wardrobe choices.",
              "url": "https://www.moneycontrol.com/news/trends/lifestyle/new-air-india-uniforms-by-manish-malhotra-debut-of-the-saree-gown-on-the-runway-11915331.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Air-India_Cabin-Crew-and-Pilots-Uniforms-770x433.jpg",
              "publishedAt": "2023-12-17T05:32:19Z",
              "content": "Thirty years after Bollywood designer Bhanu Athaiya styled an Air India calendar just before she went on to collect an Oscar for designing the costumes for the movie Gandhi, another Bollywood designe… [+6011 chars]"
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
                "id": "financial-times",
                "name": "Financial Times"
              },
              "author": "Harriet Clarfelt, Kate Duguid",
              "title": "Investors ditch notion that interest rates will stay 'higher for longer' - Financial Times",
              "description": "Fed’s dovish message is being interpreted by the bond market as a full-speed ahead signal",
              "url": "https://www.ft.com/content/5ce5a5a6-8788-4928-a9ee-cc828b0298fb",
              "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fd7bbc676-db68-4341-824e-9e97090e869d.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
              "publishedAt": "2023-12-17T05:00:26Z",
              "content": "This weeks rally in global bond markets has shattered investors months-long assumption that interest rates in the US and elsewhere will remain higher for longer.\r\nThe benchmark 10-year US Treasury yi… [+4652 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "CNBCTV18"
              },
              "author": "Asmita Pant",
              "title": "From Muthoot Microfin to Azad Engineering, here are all the IPOs opening this week - CNBCTV18",
              "description": "Seven companies will collectively be raising nearly ₹3,900 crore via the route of initial public offer.",
              "url": "https://www.cnbctv18.com/market/muthoot-microfin-azad-engineering-list-of-ipo-opening-next-week-18580641.htm",
              "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2021/02/IPO-2.jpg",
              "publishedAt": "2023-12-17T04:52:22Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Architectural Digest India"
              },
              "author": "Aditi Shah-Bhimjyani",
              "title": "This Bengaluru apartment spanning 3,560 square feet is a Balinese dream brought to life - Architectural Digest India",
              "description": "A Bengaluru apartment by Studio Ipsa encapsulates the principles of classic Balinese tropical design.",
              "url": "https://www.architecturaldigest.in/story/this-3560-square-foot-bengaluru-apartment-is-a-balinese-dream-brought-to-life-studio-ipsa/",
              "urlToImage": "https://assets.architecturaldigest.in/photos/657a94fd577e75691738f372/16:9/w_1280,c_limit/3_Primary%20Living%20Room.jpg",
              "publishedAt": "2023-12-17T04:30:00Z",
              "content": "But the pièce de résistance is the tonal curtain wall of the living room, where curved shapes layered with gypsum extend through the entire area stretching till the balcony, an echo of fluidity withi… [+2449 chars]"
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
              "publishedAt": "2023-12-17T04:21:05Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "CarToq.com"
              },
              "author": "CarToq Desk",
              "title": "Tata Nexon EV now available with discounts of up to Rs. 2.6 lakh - CarToq.com",
              "description": "Tata Motors is rolling out attractive discounts on its Nexon EV Prime and EV Max models, creating an enticing opportunity for potential buyers. With a facelift recently introduced for the Nexon EV, dealers are looking to clear their remaining inventory of the…",
              "url": "https://www.cartoq.com/tata-nexon-ev-now-available-with-discounts-of-up-to-rs-2-6-lakh/",
              "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/06/Tata-Nexon-EV-MAX-XZ-LUX.jpg",
              "publishedAt": "2023-12-17T04:11:24Z",
              "content": "Tata Motors is rolling out attractive discounts on its Nexon EV Prime and EV Max models, creating an enticing opportunity for potential buyers. With a facelift recently introduced for the Nexon EV, d… [+2499 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Gadgets Now"
              },
              "author": "Gadgets Now Bureau",
              "title": "Reliance JioTV new plans, H-1B visa fee hike, RBI warning, Google Maps new feature and other top tech news of - Gadgets Now",
              "description": "The week saw Google rollout new feature in Google Maps to help users save money. Reliance Jio announced paid plans for JioTV, government shut down more than 50 lakh phone numbers and other top tech news of the week.",
              "url": "https://www.gadgetsnow.com/slideshows/reliance-jiotv-new-plans-h-1b-visa-fee-hike-rbi-warning-google-maps-new-feature-and-other-top-tech-news-of-the-week/photolist/106052679.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106052702,width-800,resizemode-4,imgsize-662597/share.jpg",
              "publishedAt": "2023-12-17T03:01:00Z",
              "content": "In January 2023, the US Citizenship and Immigration Services (USCIS), had issued an exhaustive document, running into 469 pages, relating to fee proposal hikes across a wide spectrum, including H-1B … [+581 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Jigar Patel",
              "title": "Nifty may consolidate around 21,500 before extending northward journey, pick these 2 stock ideas - Moneycontrol",
              "description": "A move above 21,500 might extend the rally towards 21,800 on the Nifty. On the data front, Nifty PCR is above 1.45, and this might result in some consolidation.",
              "url": "https://www.moneycontrol.com/news/business/markets/nifty-may-consolidate-around-21500-before-extending-northward-journey-pick-these-2-stock-ideas-11914931.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/stocks5-1-770x433.jpg",
              "publishedAt": "2023-12-17T02:30:08Z",
              "content": "By Jigar S Patel, senior manager - equity research at Anand Rathi\r\nThe bulls rampage continued on the D-Street since the bulls extended their frenzy buying in the domestic markets. The benchmark inde… [+3749 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Sunil Shankar Matkar",
              "title": "Daily Voice | FII will have no choice but to invest in Indian markets moving forward, says this market... - Moneycontrol",
              "description": "New allocation by FIIs for emerging markets and India seems a certainty in the calendar year 2024, says Amit Jain.",
              "url": "https://www.moneycontrol.com/news/business/markets/daily-voice-fii-will-have-no-choice-but-to-invest-in-indian-markets-moving-forward-says-this-market-veteran-11915021.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/10/Amit_JainAshika-770x433.jpg",
              "publishedAt": "2023-12-17T02:00:01Z",
              "content": "Amit Jain, who co-founded Ashika Global Family Office Services believes most of the global risk factors were ignored by the Indian market in the last month due to favourable States election results a… [+6352 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Moneycontrol News",
              "title": "Dalal Street Week Ahead | BoJ decision, RBI MPC minutes among factors that will keep traders busy - Moneycontrol",
              "description": "Going ahead, Bank of Japan's policy decision, minutes of RBI MPC meeting and primary market action will be key to monitor. All eyes are on whether markets can scale new highs and continue gaining streak for eighth consecutive week",
              "url": "https://www.moneycontrol.com/news/business/markets/dalal-street-week-ahead-boj-decision-rbi-mpc-minutes-among-factors-that-will-keep-traders-busy-11913451.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/08/Stock-8-770x433.jpg",
              "publishedAt": "2023-12-17T01:52:52Z",
              "content": "With Indian markets rallying for seven consecutive weeks, all eyes are now on whether bulls can stay in charge one more week. Positive global as well as domestic cues, including dovish Fed stance, FI… [+7381 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "DNA India"
              },
              "author": "DNA Web Team",
              "title": "Google CEO finally breaks silence on company's biggest layoff ever, says 'could have...' - DNA India",
              "description": "Google and Alphabet CEO Sundar Pichai spoke about the layoff of nearly 12,000 employees last year by the tech giant.",
              "url": "https://www.dnaindia.com/business/report-google-alphabet-ceo-finally-breaks-silence-on-company-s-biggest-layoff-ever-business-news-3071833",
              "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/12/17/2620064-untitled-design-2023-12-17t071448.093.jpg",
              "publishedAt": "2023-12-17T01:36:00Z",
              "content": "Google and Alphabet CEO Sundar Pichai spoke about the layoff of nearly 12,000 employees last year by the tech giant. Google and Alphabet CEO Sundar Pichai spoke about the layoff of nearly 12,000 empl… [+1710 chars]"
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
                "name": "Hindustan Times"
              },
              "author": "Vaishnawi Sinha",
              "title": "Akasa Air beats Air India, Indigo in Centre's on-time performance rankings - Hindustan Times",
              "description": "Akasa Air, established by Rakesh Jhunjhunwala, has been placed as the top airline with on-time performance, beating out Air India in the race.",
              "url": "https://www.hindustantimes.com/business/jhujhunwalas-akasa-air-beats-out-air-india-indigo-in-centres-on-time-performance-rankings-check-list-here-101702738286675.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/AKASA-INDIA-CRISIS-0_1696043149404_1702738334756.JPG",
              "publishedAt": "2023-12-16T15:34:25Z",
              "content": "Akasa Air has now beat top Indian airlines like Air India and Indigo for having the best on time performance, according to the ranking list released by the Ministry of Civil Aviation.\r\nAkasa Air tops… [+1777 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Moneycontrol News",
              "title": "India's search behaviour takes centre stage in Google's strategic outlook, says VP Pandu Nayak - Moneycontrol",
              "description": "Nayak said that they have found ways to automatically translate high-quality locally relevant English documents ranging from Wikipedia to other local sites and then surface them on the Hindi search experience.",
              "url": "https://www.moneycontrol.com/news/technology/indias-search-behaviour-takes-centre-stage-in-googles-strategic-outlook-says-vp-pandu-nayak-11914581.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/pandu-770x372.jpg",
              "publishedAt": "2023-12-16T15:33:43Z",
              "content": "India's unique search needs are emerging as a key factor in shaping Google's future strategy for its search business, a top executive said at the CNBC-TV18 and Moneycontrol Global AI Conclave on Dece… [+3381 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Etnownews.com"
              },
              "author": "ET Now Digital",
              "title": "Inox India IPO GMP: Grey market premium shoots up! Subscription to end on Monday, allotment date and other issue details - ET Now",
              "description": "Inox India IPO GMP: Upcoming Monday, December 18 is the last day of subscription of the Initial Public Offering (IPO) of cryogenic tank maker INOX India. So, investors have just one day left to apply for subscribing to the IPO. According to data from several …",
              "url": "https://www.etnownews.com/markets/inox-india-ipo-gmp-grey-market-premium-shoots-up-subscription-to-end-on-monday-allotment-date-and-other-issue-details-article-106049985",
              "urlToImage": "https://etstatic.tnn.in/thumb/msid-106049985,width-1280,height-720,resizemode-75/106049985.jpg",
              "publishedAt": "2023-12-16T14:26:22Z",
              "content": "DOMS Industries IPO allotment status check online on BSE, Link Intime, latest GMP price and listing date Key dates to remember"
            },
            {
              "source": {
                "id": null,
                "name": "BusinessLine"
              },
              "author": "Suresh P. Iyengar",
              "title": "SIP inflows surge by 65% in four months amidst rise in new registrations - BusinessLine",
              "description": "SIP inflows hit a new high of ₹9,058 crore in Dec, up 65% from July, with total SIP accounts jumping 23% to a record 7.44 crore.",
              "url": "https://www.thehindubusinessline.com/markets/sip-inflows-surge-by-65-in-four-months-amidst-rise-in-new-registrations/article67644987.ece",
              "urlToImage": "https://bl-i.thgim.com/public/incoming/c2rd3a/article67645361.ece/alternates/LANDSCAPE_1200/SIPs.jpg",
              "publishedAt": "2023-12-16T14:04:56Z",
              "content": "The net inflow through the Systematic Investment Plan at 9,058 crore accounted for 56 per cent gross inflow of 17,073 crore in July with the number of new SIP increasing at a faster pace. In fact, it… [+1987 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Mallika Soni",
              "title": "Elon Musk's advice to Giorgia Meloni: ‘Italians, please make more Italians’ - Hindustan Times",
              "description": "Elon Musk In Italy: Elon Musk said that some of the organisations which had abandoned X were infected by a “woke mind virus”. | World News",
              "url": "https://www.hindustantimes.com/world-news/elon-musks-advice-to-giorgia-meloni-italians-please-make-more-italians-101702730732628.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/ITALY-POLITICS-PARTY-ATREJU-RIGHT-FDI-26_1702734552758_1702734600332.jpg",
              "publishedAt": "2023-12-16T14:00:22Z",
              "content": "Elon Musk claimed that advertisers were returning to X (formerly Twitter) after an exodus while warning that Italy's low birth rate could put off investors. At the Atreju political festival organised… [+1890 chars]"
            },
            {
              "source": {
                "id": "the-hindu",
                "name": "The Hindu"
              },
              "author": "The Hindu",
              "title": "Volkswagen India ties up with Centre for its vehicle scheme - The Hindu",
              "description": null,
              "url": "https://www.thehindu.com/business/Industry/volkswagen-india-ties-up-with-centre-for-its-vehicle-scheme/article67645332.ece",
              "urlToImage": null,
              "publishedAt": "2023-12-16T13:49:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "Oil prices drop over $1, settle lower on volatile session after US macro data, FOMC policy decision; Brent at $76/bbl | Mint - Mint",
              "description": "US Federal Reserve Chairman Jerome Powell said interest rate hikes intended to curb inflation were likely at an end, but left open the possibility for further increases.",
              "url": "https://www.livemint.com/market/commodities/oil-prices-drop-over-1-settle-lower-on-volatile-session-after-us-macro-data-fomc-policy-decision-brent-at-76bbl-11702733239891.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/opec_1702733275201_1702733275564.JPG",
              "publishedAt": "2023-12-16T13:43:22Z",
              "content": "Brent crude and US crude futures finished at a small loss following a see-saw session, in which prices fell more than $1 a barrel at one point on Friday, December 15, as traders tried to reconcile mi… [+4430 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Vaishnawi Sinha",
              "title": "Lifestyle charged customer ₹7 for paper bag, now asked to pay ₹3,000: Report - Hindustan Times",
              "description": "Fashion brand Lifestyle charged a man ₹7 for a paper bag without his knowledge, but ended up paying ₹3,000 in damages, as ordered by court.",
              "url": "https://www.hindustantimes.com/business/lifestyle-pays-customer-rs-3-000-in-damages-after-charging-rs-7-for-paper-bag-without-his-knowledge-report-101702733546606.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/lifestyle-1571332827_1702733639217_1702733643387.jpg",
              "publishedAt": "2023-12-16T13:43:09Z",
              "content": "Fashion brand Lifestyle, one of the biggest clothing retail store chain in India, was left in a bind after it was asked to pay 3,000 in damages to a customer for charging him 7 for a paper bag withou… [+1853 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Etnownews.com"
              },
              "author": "ET Now Digital",
              "title": "Sachin Tendulkar-backed IPO opens for subscription on December 20 - Check price band, important dates - ET Now",
              "description": "Azad Engineering, a Telangana-based company is set to bring an IPO on December 20. The Hyderabad-headquartered company's IPO will open for subscription on December 20. Cricket legend Sachin Tendulkar made an undisclosed investment in Azad Engineering.",
              "url": "https://www.etnownews.com/markets/sachin-tendulkar-backed-ipo-opens-for-subscription-on-december-20-check-price-band-important-dates-article-106049334",
              "urlToImage": "https://etstatic.tnn.in/thumb/msid-106049334,width-1280,height-720,resizemode-75/106049334.jpg",
              "publishedAt": "2023-12-16T13:33:16Z",
              "content": "Sachin Tendulkar-backed IPO opens for subscription on December 20 - Check price band, important dates"
            },
            {
              "source": {
                "id": null,
                "name": "Pgurus.com"
              },
              "author": "Team PGurus",
              "title": "Gautam Adani Takes Control of News Agency IANS - PGurus",
              "description": "Industrialist Gautam Adani’s media company on Saturday announced taking control of news agency IANS, promoted by debt-ridden industrialist Anil Adani",
              "url": "https://www.pgurus.com/gautam-adani-takes-control-of-anil-ambanis-promoted-news-agency-ians-4th-take-over-in-media/",
              "urlToImage": "https://www.pgurus.com/wp-content/uploads/2023/12/Gautam-Adani-takes-control-of-Anil-Ambanis-promoted-news-agency-IANS-jpg.webp",
              "publishedAt": "2023-12-16T13:28:29Z",
              "content": "Industrialist Gautam Adanis media company on Saturday announced taking control of news agency IANS, promoted by debt-ridden industrialist Anil Ambani. As per both firms, Adanis firms acquired more th… [+1777 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "BusinessLine"
              },
              "author": "Gurumurthy K & BL Research Bureau",
              "title": "Index Outlook: Santa Claus Rally Arrives Early for the Sensex, Nifty 50, Nifty Bank and the Dow Jones - BusinessLine",
              "description": "Global equity markets rallied strongly last week, driven by the US Federal Reserve’s decision to keep interest rates unchanged. The Dow Jones Industrial Average, Sensex, Nifty 50, and Nifty Bank indices reached record highs. In India, the BSE IT index led gai…",
              "url": "https://www.thehindubusinessline.com/portfolio/technical-analysis/index-outlook-santa-claus-rally-arrives-early-for-the-sensex-nifty-50-nifty-bank-and-the-dow-jones/article67644607.ece",
              "urlToImage": "https://bl-i.thgim.com/public/incoming/l9qojx/article67645024.ece/alternates/LANDSCAPE_1200/PO17_Santa_chart.jpg",
              "publishedAt": "2023-12-16T13:21:38Z",
              "content": "The global equity markets have seen a strong rally last week. The rally in equities gained momentum after the US Federal Reserve meeting on Wednesday. The Fed kept the interest rates unchanged at 5.2… [+5632 chars]"
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
                "name": "Ipowatch.in"
              },
              "author": "IPOWatch Team",
              "title": "India Shelter Finance IPO Allotment Status Check on KFintech - IPO Watch",
              "description": "India Shelter Finance IPO Allotment Status will available on KFintech. Here is how to find India Shelter Finance IPO allotment status, date and time online and offline.",
              "url": "https://ipowatch.in/india-shelter-finance-ipo-allotment-status/",
              "urlToImage": "https://ipowatch.in/wp-content/uploads/2023/12/india-shelter-finance-ipo.jpeg",
              "publishedAt": "2023-12-16T12:40:10Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Tradebrains.in"
              },
              "author": "Trade Brains",
              "title": "Multibagger smallcap stocks with high dividend yield of up to 11% to keep an eye on - Trade Brains",
              "description": null,
              "url": "https://tradebrains.in/features/multibagger-smallcap-stocks-with-high-dividend-yield-of-up-to-11-to-keep-an-eye-on/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T12:30:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Etnownews.com"
              },
              "author": "ET Now Digital",
              "title": "'Lottery... Sell IREDA': Nikunj Dalmia's recommendation on IREDA shares as stock zooms 4X - Watch - ET Now",
              "description": "Indian Renewable Energy Development Agency Limited (IREDA) stock has become the talk of the town ever since it zoomed from Rs 50 to 120 in just 11 trading sessions. After opening at Rs 50 on November 29, the stock has more than doubled within just two trading…",
              "url": "https://www.etnownews.com/markets/lottery-sell-ireda-nikunj-dalmias-recommendation-on-ireda-shares-as-stock-zooms-4x-watch-article-106048184",
              "urlToImage": "https://etstatic.tnn.in/thumb/msid-106048184,width-1280,height-720,resizemode-75/106048184.jpg",
              "publishedAt": "2023-12-16T12:27:22Z",
              "content": "38:24\r\nTCS, Infosys Up Over 5% Each; Sensex Rallies 969 Points, Nifty Ends At 21456 | Closing Trades"
            },
            {
              "source": {
                "id": null,
                "name": "Highlandpost.com"
              },
              "author": "HP News Service",
              "title": "FCI to sell extra wheat and rice in open market - Highland Post",
              "description": "The Food Corporation of India, Regional Office will sell wheat and rice in the open market through the Open Market",
              "url": "https://highlandpost.com/fci-to-sell-extra-wheat-and-rice-in-open-market/",
              "urlToImage": "https://highlandpost.com/wp-content/uploads/2021/07/rice-sacks-283750_640.jpg",
              "publishedAt": "2023-12-16T11:49:02Z",
              "content": "The Food Corporation of India, Regional Office will sell wheat and rice in the open market through the Open Market Sale Scheme every week for price stabilisation in the market.\r\nA press statement sai… [+835 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Mypunepulse.com"
              },
              "author": null,
              "title": "Mumbai customer orders food worth Rs 42.3 lakh from Swiggy in 2023 - Pune Pulse",
              "description": "By: Pune Pulse December 16, 2023 Pune: In 2023, a resident of Mumbai placed an order with Swiggy worth Rs 42.3 lakh, the online meal delivery service revealed in its annual report released on December 14. Swiggy has released its annual food delivery report ‘H…",
              "url": "https://www.mypunepulse.com/mumbai-customer-orders-food-worth-rs-42-3-lakh-from-swiggy-in-2023/",
              "urlToImage": "https://www.mypunepulse.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-16-at-5.03.58-PM-jpeg.webp",
              "publishedAt": "2023-12-16T11:37:23Z",
              "content": "By: Pune Pulse\r\nDecember 16, 2023\r\nPune: In 2023, a resident of Mumbai placed an order with Swiggy worth Rs 42.3 lakh, the online meal delivery service revealed in its annual report released on Decem… [+1755 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Team-BHP"
              },
              "author": "Brij Gawde",
              "title": "Test rode the Himalayan 450: Why I think it's better than KTM 390 ADV - Team-BHP",
              "description": "BHPian masterChief007 recently shared this with other enthusiasts. I did a test ride on my targeted color Kaza Brown. There were a lot of customers thronging the showroom, so I had to wait a little. During this, I was told that the delivery date pricing would…",
              "url": "https://www.team-bhp.com/news/test-rode-himalayan-450-why-i-think-its-better-ktm-390-adv",
              "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/WhatsApp Image 2023-12-15 at 10.07.45 AM.jpeg",
              "publishedAt": "2023-12-16T11:30:00Z",
              "content": "BHPian masterChief007 recently shared this with other enthusiasts.\r\nI did a test ride on my targeted color Kaza Brown. There were a lot of customers thronging the showroom, so I had to wait a little.… [+2526 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Nikita Prasad",
              "title": "FPIs turn net buyers, pump ₹42,733 in Indian equities; Inflows rise after US Fed signals end of tightening cycle | Mint - Mint",
              "description": "FPIs have bought  ₹42,733 crore worth of Indian equities and the total inflow stands at  ₹51,787 crore as of December 15, taking into account debt, hybrid, debt-VRR, and equities",
              "url": "https://www.livemint.com/market/stock-market-news/fpis-turn-net-buyers-pump-rs-42-733-in-indian-equities-inflows-rise-after-us-fed-signals-end-of-tightening-cycle-11702725129563.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/FPIs_1702725143279.jpg",
              "publishedAt": "2023-12-16T11:21:31Z",
              "content": "Foreign portfolio investors (FPIs) started December on a cheerful note after finally having reversed their selling streak in November, emerging net buyers in the Indian stock market. The inflow has i… [+4494 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Motilal Oswal's Raamdeo Agrawal On Will PSU Stocks To Lead The Bull Run | CNBC TV18 - CNBC-TV18",
              "description": "Raamdeo Agrawal of Motilal Oswal shares his market outlook and where the Indian equity market is headed.#raamdeoagrawal #motilaloswal #sensex #nifty #marketo...",
              "url": "https://www.youtube.com/watch?v=IGbb3mkgWwI",
              "urlToImage": "https://i.ytimg.com/vi/IGbb3mkgWwI/maxresdefault.jpg",
              "publishedAt": "2023-12-16T11:00:08Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Team-BHP"
              },
              "author": "Tushar Kelshikar",
              "title": "Bharat NCAP to announce crash test results this month - Team-BHP",
              "description": "According to a media report, Bharat NCAP is likely to publish the crash test results for the first batch of cars before the end of December 2023. Mahmood Ahmed, Additional Secretary, Ministry of Road Transport and Highways, has revealed that the BNCAP program…",
              "url": "https://www.team-bhp.com/news/bharat-ncap-announce-crash-test-results-month",
              "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/MahindraScorpio-N-pole.jpg",
              "publishedAt": "2023-12-16T09:58:24Z",
              "content": "According to a media report, Bharat NCAP is likely to publish the crash test results for the first batch of cars before the end of December 2023.\r\nMahmood Ahmed, Additional Secretary, Ministry of Roa… [+932 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "PTI",
              "title": "21 firms bid for incentives for electrolyser manufacturing; 14 cos for green hydrogen production - Moneycontrol",
              "description": "According to an official statement, the bids came in response to a tender by Solar Energy Corporation of India (SECI) inviting players for setting up 1.5 GW manufacturing capacity for electrolyser manufacturing. Bids for electrolyser manufacturers were invite…",
              "url": "https://www.moneycontrol.com/news/business/21-firms-bid-for-incentives-for-electrolyser-manufacturing-14-cos-for-green-hydrogen-production-11913671.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/01/green-hydrogen-MC-770x433.jpg",
              "publishedAt": "2023-12-16T09:54:55Z",
              "content": "Reliance Electrolyser Manufacturing, Adani New Industries, L&amp;T Electrolysers and Bharat Heavy Electricals are among 21 companies that have bid for government's incentives to set up 3.4 GW of annu… [+2697 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Asit Manohar",
              "title": "Muthoot Microfin IPO raises ₹285 crore from anchor investors | Mint - Mint",
              "description": "Muthoot Microfin IPO will open for bidding on Monday next week and it will remain open till 20th December 2023",
              "url": "https://www.livemint.com/market/ipo/muthoot-microfin-ipo-raises-rs-285-crore-from-anchor-investors-11702716691674.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/Muthoot_Microfin_IPO_anchor_investor_1702716755946_1702716756225.jpg",
              "publishedAt": "2023-12-16T08:57:05Z",
              "content": "Muthoot Microfin IPO: The initial public offering of Muthoot Microfin Limited has raised 284.99 crore from abchor investors. The microfinance company raised this money by allotting 97,93,812 equity s… [+2218 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Team-BHP"
              },
              "author": "Tushar Kelshikar",
              "title": "India emerges as Kia's 4th largest global market - Team-BHP",
              "description": "India has emerged as the fourth largest market for Kia, with local sales contributing to 10% of the brand's global sales.  Tae-Jin Park, MD of Kia India, recently revealed that India was among the top 5 markets for Kia, after South Korea, the US and Europe.  …",
              "url": "https://www.team-bhp.com/news/india-emerges-kias-4th-largest-global-market",
              "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/GBO1949bAAA8IwN.jpg",
              "publishedAt": "2023-12-16T08:13:23Z",
              "content": "India has emerged as the fourth largest market for Kia, with local sales contributing to 10% of the brand's global sales. \r\nTae-Jin Park, MD of Kia India, recently revealed that India was among the t… [+1100 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Ndtvprofit.com"
              },
              "author": "CK Narayan",
              "title": "Nifty This Week In Technical Charts: A Runaway Market! - NDTV Profit",
              "description": "Beginning last week of December, it may be prudent to have nearer stops and begin taking some money off the table.",
              "url": "https://www.ndtvprofit.com/markets/nifty-this-week-in-technical-charts-a-runaway-market",
              "urlToImage": "https://media.assettype.com/bloombergquint%2F2019-07%2F0eb63a2c-2d0f-4a96-a641-9398fcff8659%2FAP19192235356419.jpg?rect=0%2C0%2C2376%2C1247&w=1200&auto=format%2Ccompress&ogImage=true",
              "publishedAt": "2023-12-16T08:03:35Z",
              "content": "And for sure, the profits are indeed being made. It is another warning signal when money making becomes too easy. As it is now. Eventually, this too will change. That point will dawn on you when you … [+3961 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Entrackr"
              },
              "author": "Shashank Pathak & Md Salman Ashrafi",
              "title": "Funding and acquisitions in Indian startups this week [11-16 Dec] - Entrackr",
              "description": "This week as many as 19 Indian startups secured a total funding of approximately $548 million comprising 7 growth and 10 early-stage deals",
              "url": "https://entrackr.com/2023/12/funding-and-acquisitions-in-indian-startups-this-week-11-16-dec/",
              "urlToImage": "https://entrackr.com/storage/2023/12/image-16-dec.jpg",
              "publishedAt": "2023-12-16T07:32:34Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Adda247.com"
              },
              "author": "Akansha Arora",
              "title": "Ola’s Bhavish Aggarwal Unveils ‘Made for India’ Krutrim AI - Adda247",
              "description": "Krutrim SI Designs, the new artificial intelligence venture founded by Bhavish Aggrawal, co-founder of Ola, has introduced a family of multilingual AI models specifically tailored to address the distinctive requirements of the Indian ecosystem. The models, na…",
              "url": "https://currentaffairs.adda247.com/olas-bhavish-aggarwal-unveils-made-for-india-krutrim-ai/",
              "urlToImage": "https://adda247-wp-multisite-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/multisite/sites/5/2023/12/16130146/Olas-Bhavish-Aggarwal-Unveils-%E2%80%98Made-for-India-Krutrim-AI.png",
              "publishedAt": "2023-12-16T07:31:59Z",
              "content": "Krutrim SI Designs, the new artificial intelligence venture founded by Bhavish Aggrawal, co-founder of Ola, has introduced a family of multilingual AI models specifically tailored to address the dist… [+3488 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Dsij.in"
              },
              "author": "Mandar Wagh",
              "title": "IPO Analysis: Suraj Estate Developers Limited - Dalal Street Investment Journal",
              "description": "IPO Rating: Apply for the long-term",
              "url": "https://www.dsij.in/dsijarticledetail/ipo-analysis-suraj-estate-developers-limited-35250-1",
              "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/35250/image_287.jpg",
              "publishedAt": "2023-12-16T06:49:19Z",
              "content": "IPO Rating: Apply for the long-term\r\nAbout the Issue:\r\nThe company has been actively engaged in the real estate industry since 1986, specializing in the development of properties in both residential … [+7506 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Financial Express"
              },
              "author": null,
              "title": "Kia Sonet old vs new: Design, specs, features compared - The Financial Express",
              "description": "Bookings for Kia Sonet facelift are slated to begin on 20 December while deliveries are expected to commence from January 2024.",
              "url": "https://www.financialexpress.com/auto/car-news/kia-sonet-old-vs-new-design-specs-features-compared/3340137/",
              "urlToImage": "https://www.financialexpress.com/wp-content/uploads/2023/12/Kia-Sonet-old-vs-new-feature.jpg",
              "publishedAt": "2023-12-16T05:27:52Z",
              "content": "2024 Kia Sonet facelift recently broke covers. This was the first major upgrade to the subcompact SUV ever since it was first launched in August 2020. The facelift involves quite a few noticeable sty… [+2917 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Yashaswini",
              "title": "Bengaluru & Mumbai see most steep rental hikes: Report - Times of India",
              "description": "Rising rentals in Bengaluru and Mumbai have been confirmed by a realty portal's report. The two cities saw a high incidence of steep rise in rentals, with 7% of landlords increasing rents by 30% and above. Find out the cause and effect of high rentals in Beng…",
              "url": "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-mumbai-rental-hikes-nobroker-report-2023/articleshow/106036648.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106037030,width-1070,height-580,imgsize-25980,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T02:47:47Z",
              "content": "10 foods that claim to be healthy but are not"
            },
            {
              "source": {
                "id": null,
                "name": "Business Standard"
              },
              "author": "BS Web Team",
              "title": "Gold price rises Rs 110 to Rs 63,000, silver climbs Rs 1,000 to Rs 78,700 - Business Standard",
              "description": "The price of 22-carat gold rose Rs 100, with the yellow metal selling at Rs 57,750",
              "url": "https://www.business-standard.com/markets/commodities/gold-price-rises-rs-110-to-rs-63-000-silver-climbs-rs-1-000-to-rs-78-700-123121600103_1.html",
              "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/01/full/1667282568-4041.jpg",
              "publishedAt": "2023-12-16T02:15:04Z",
              "content": "In Delhi, Bengaluru, and Chennai, ten grams of 22-carat gold are selling at Rs 57,900, Rs 57,750, and Rs 58,300, respectively. | Photo: Bloomberg"
            },
            {
              "source": {
                "id": null,
                "name": "Goodreturns.in"
              },
              "author": "Goodreturns",
              "title": "Bulls Thrilled In IT Stocks: 9 Dividend Paying Tech Giants Hit New 1-Year Highs In 1 Day; TCS, HCL Big Winners - Goodreturns",
              "description": null,
              "url": "https://www.goodreturns.in/personal-finance/bulls-drive-it-stocks-9-dividend-paying-tech-giants-at-new-1-year-highs-in-1-day-tcs-hcl-big-winners-1318537.html",
              "urlToImage": null,
              "publishedAt": "2023-12-16T01:00:14Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TNN",
              "title": "Adani Ports to sell its 49% in group co - IndiaTimes",
              "description": "India Business News: Adani Ports is divesting its 49% stake in Adani Ennore Container Terminal (AECTPL) to Terminal Investment (TiL) for Rs 247 crore. The box terminal loc",
              "url": "https://timesofindia.indiatimes.com/business/india-business/adani-ports-to-sell-its-49-in-group-co/articleshow/106035442.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106035467,width-1070,height-580,imgsize-1630945,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T00:40:25Z",
              "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Rishi Tejpal",
              "title": "The never-ending war - The Economic Times",
              "description": "While delegates from across the globe were debating the allocation of 6GHz spectrum for international mobile telecommunications at the World Radiocommunication Conference this week, Indian stakeholders have been at loggerheads over it as well.",
              "url": "https://economictimes.indiatimes.com/prime/prime-vantage/the-never-ending-war/primearticleshow/106030516.cms",
              "urlToImage": "https://img.etimg.com/thumb/msid-106030491,width-1070,height-580,imgsize-106658/photo.jpg",
              "publishedAt": "2023-12-15T23:30:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Kitco NEWS"
              },
              "author": "Kitco NEWS",
              "title": "Gold prices could be a little too hot as the Fed cools down rate cut expectations - Kitco NEWS",
              "description": null,
              "url": "https://www.kitco.com/news/2023-12-15/Gold-prices-could-be-a-little-too-hot-as-the-Fed-cools-down-rate-cut-expectations.html",
              "urlToImage": null,
              "publishedAt": "2023-12-15T20:49:00Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Hemanta Pradhan",
              "title": "Bhubaneswar airport to be covered with Digi Yatra in 2024 - Times of India",
              "description": "BHUBANESWAR: The ministry of civil aviation has taken several measures to reduce congestion at airports across the country including the city airport .",
              "url": "https://timesofindia.indiatimes.com/city/bhubaneswar/bhubaneswar-airport-to-be-covered-with-digi-yatra-in-2024/articleshow/106031291.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106031432,width-1070,height-580,imgsize-40386,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-15T17:00:02Z",
              "content": "10 foods that claim to be healthy but are not"
            },
            {
              "source": {
                "id": null,
                "name": "Moneycontrol"
              },
              "author": "Moneycontrol News",
              "title": "Mufti Menswear IPO: 10 things to know before subscribing to Rs 549-crore issue - Moneycontrol",
              "description": "Mufti Menswear IPO: The public issue a purely an offer for sale of 1.96 crore shares",
              "url": "https://www.moneycontrol.com/news/business/ipo/mufti-menswear-ipo-10-things-to-know-before-subscribing-to-rs-549-crore-issue-11910111.html",
              "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/11/mufti-770x433.jpg",
              "publishedAt": "2023-12-15T13:03:32Z",
              "content": "Mufti Menswear parent Credo Brands Marketing Limited's initial public offering (IPO) will open for subscription on December 19. The Rs 549.78-crore public issue is an offer for sale of 1.96 crore sha… [+3515 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Livemint",
              "title": "India's forex reserves at 4-month high; jump $2.8 billion to $607 billion: RBI | Mint - Mint",
              "description": "For the week ended December 8, the foreign currency assets -- a major component of the reserves -- increased by $3.089 billion to $536.699 billion, the data said.",
              "url": "https://www.livemint.com/economy/indias-forex-reserves-hits-over-4-month-high-jumps-2-8-billion-to-607-billion-rbi-11702642179113.html",
              "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/rupee-4395553_1280_1701234273734_1702642183126.jpg",
              "publishedAt": "2023-12-15T12:12:56Z",
              "content": "India's foreign exchange (forex) reserves jumped $2.816 billion to hit over four-month high mark of $606.859 billion in the week ended December 8, the Reserve Bank of India (RBI) said on Friday, Dece… [+2288 chars]"
            },
            {
              "source": {
                "id": "google-news",
                "name": "Google News"
              },
              "author": null,
              "title": "Gainers and Losers: 10 stocks that moved the most on December 15 - Moneycontrol",
              "description": null,
              "url": "https://families.google.com/service-restricted",
              "urlToImage": null,
              "publishedAt": "2023-12-15T11:14:09Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "The Quint"
              },
              "author": "Raajwrita Dutta",
              "title": "Yamaha YZF-R3 & MT-03 Launch in India Today, 15 December: Expected Price & Specs - The Quint",
              "description": "The Yamaha YZF-R3 and MT-03 will be launched in India today, Friday, 15 December 2023. Know the specifications, design, expected price range, and important details here.",
              "url": "https://www.thequint.com/tech-and-auto/car-and-bike/yamaha-yzf-r3-and-yamaha-mt-03-launch-in-india-today-know-the-expected-price-specifications-and-details",
              "urlToImage": "https://images.thequint.com/thequint%2F2023-12%2F5cff6960-74f6-4aa8-b551-f4b25ba81592%2FYamaha_R3_6665088c9d.jpg",
              "publishedAt": "2023-12-15T06:56:20Z",
              "content": "In a move to amp up the Indian two-wheeler market, Yamaha is gearing up to reveal the upcoming motorcycles, which include the Yamaha YZF-R3 and the Yamaha MT-03. One should note that the motorcycles … [+624 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Team-BHP"
              },
              "author": "Utkarsh Chaudhary",
              "title": "Layman's views about Honda Elevate: 8 points after a long test drive - Team-BHP",
              "description": "BHPian sapien recently shared this with other enthusiasts. After multiple attempts, was able to get a long test drive of the Honda Elevate - I'm no car expert but sharing observations from a layman's perspective after a 15 km city + highway test drive. Highli…",
              "url": "https://www.team-bhp.com/news/laymans-views-about-honda-elevate-8-points-after-long-test-drive",
              "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/20231014_181831_1.jpg",
              "publishedAt": "2023-12-14T07:02:00Z",
              "content": "For those who drive sedately, this can be a good car. Anyone looking for sportiness will be disappointed.\r\nBHPian sapien recently shared this with other enthusiasts.\r\nAfter multiple attempts, was abl… [+1763 chars]"
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
              "title": "Four test positive for H1N1 in Tiruvarur - The Hindu",
              "description": null,
              "url": "https://www.thehindu.com/news/cities/Tiruchirapalli/four-test-positive-for-h1n1-in-tiruvarur/article67644936.ece",
              "urlToImage": null,
              "publishedAt": "2023-12-17T12:31:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Investing.com"
              },
              "author": "IANS",
              "title": "Flu infections in Japan soar to warning level at fastest pace in 10 years - Investing.com India",
              "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
              "url": "https://in.investing.com/news/flu-infections-in-japan-soar-to-warning-level-at-fastest-pace-in-10-years-3940957",
              "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/cb92fdb333133c5a9a9c97aca8ae0004_w_800_h_450.jpg",
              "publishedAt": "2023-12-17T12:19:58Z",
              "content": "Tokyo, Dec 17 (IANS) The average number of influenza patients per regularly monitored medical institution in Japan had hit warning levels at the fastest pace in 10 years, the health ministry has anno… [+1245 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TIMESOFINDIA.COM",
              "title": "Lymphoma in children: What causes it? What is the diagnosis process and pediatric care? - IndiaTimes",
              "description": "The lymphatic system is a vast network of lymphatic vessels and lymph nodes which carry lymphocytes and lymph. Lymphocytes are the cells that protect us against various microbes like bacteria and viruses by forming antibodies and destroying them. These lympho…",
              "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/lymphoma-in-children-what-causes-it-what-is-the-diagnosis-process-and-pediatric-care/photostory/106058349.cms",
              "urlToImage": "https://static.toiimg.com/photo/106058358.cms",
              "publishedAt": "2023-12-17T11:30:00Z",
              "content": "Lymphoma presents as a swollen, painless lymph node under the skin. Swollen lymph nodes are usually in the neck, above the collar bone, or in the armpit or groin.Lymph nodes deeper in the body can al… [+1150 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Ophthalmologytimes.com"
              },
              "author": "David Hutton",
              "title": "Machine learning sees into the future to prevent sight loss in humans - Ophthalmology Times",
              "description": "A team of researchers from Tokyo Medical and Dental University have developed models based on machine learning that predict long-term visual acuity in patients with high myopia, one of the top three causes of irreversible blindness in many regions of the worl…",
              "url": "https://www.ophthalmologytimes.com/view/machine-learning-sees-into-the-future-to-prevent-sight-loss-in-humans",
              "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/ophtalmology/4da0fa4b2ef3a52f6fec315d8bb6dfb723c0bd52-1200x675.jpg?fit=crop&auto=format",
              "publishedAt": "2023-12-17T11:12:19Z",
              "content": "As machine learning has been refined, it has been used to predict the outcomes of many health conditions. A team of researchers from Japan has found a way to predict whether people with severe shorts… [+3255 chars]"
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
                "name": "Jagran.com"
              },
              "author": "Prerna Targhotra",
              "title": "How Waking Up Early Enhances Healthy Eating Habits In Individuals | Doctor Explains - Jagran English",
              "description": "Benefits Of Waking Up Early: Waking up early gives one enough time to make and have a healthy breakfast. It stabilises overall metabolic functions and gives a great head start for the day, keeping one active.",
              "url": "https://english.jagran.com/lifestyle/how-waking-up-early-enhances-healthy-eating-habits-in-individuals-doctor-explains-10120961",
              "urlToImage": "https://imgeng.jagran.com/images/2023/dec/benefits-of-waking-up-early (2)1702807405441.jpg",
              "publishedAt": "2023-12-17T09:54:00Z",
              "content": "Benefits Of Waking Up Early: It is our habits that define us. Usually, when you wake up, you experience an urge to eat or drink something. During the nighttime, our body rests and rejuvenates while b… [+2924 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "SocialNews.XYZ"
              },
              "author": "Gopi",
              "title": "Study finds blood biomarkers linked to suicidal thoughts - Social News XYZ",
              "description": "New York, Dec 17 (SocialNews.XYZ) A simple blood test may soon be on the anvil to detect people with depression and those vulnerable to suicidal ideation, according to a study that identified blood biomarkers linked... - Social News XYZ",
              "url": "https://www.socialnews.xyz/2023/12/17/study-finds-blood-biomarkers-linked-to-suicidal-thoughts/",
              "urlToImage": "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/12/17/202312173095767.jpg?fit=329%2C209&quality=80&zoom=1&ssl=1?v=1702804885",
              "publishedAt": "2023-12-17T09:28:54Z",
              "content": "Home » General » Health » Study finds blood biomarkers linked to suicidal thoughts\r\nNew York, Dec 17 (SocialNews.XYZ) A simple blood test may soon be on the anvil to detect people with depression and… [+3140 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Newstracklive.com"
              },
              "author": "EMMANUAL",
              "title": "Benefits of sunlight in winter - News Track English",
              "description": "As winter blankets the world in a frosty embrace, there's more to the shimmering sunlight than meets the eye. Beyond its obvious warmth, the winter sun brings forth an array of benefits that are often overlooked. Let's dive into the invigorating advantages th…",
              "url": "https://english.newstracklive.com/news/benefits-of-sunlight-in-winter-sc53-nu371-ta371-1306030-1.html",
              "urlToImage": "https://media.newstrack.in/uploads/lifestyle-health/health-tips/Dec/17/big_thumb/rtrt_657e9a84469a8.jpg",
              "publishedAt": "2023-12-17T08:40:26Z",
              "content": "As winter blankets the world in a frosty embrace, there's more to the shimmering sunlight than meets the eye. Beyond its obvious warmth, the winter sun brings forth an array of benefits that are ofte… [+4834 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Jagran.com"
              },
              "author": "Prerna Targhotra",
              "title": "5 Simple Tips To Reduce Wrinkles And Fine Lines - Jagran English",
              "description": "Ways To Reduce Wrinkles: With some simple and effective steps, one can make a huge difference to their skin health. Here are easy ways to get rid of wrinkles and fine lines at home.",
              "url": "https://english.jagran.com/lifestyle/5-simple-tips-to-reduce-wrinkles-and-fine-lines-10120945",
              "urlToImage": "https://imgeng.jagran.com/images/2023/dec/tips-to-reduce-wrinkles1702802598332.jpg",
              "publishedAt": "2023-12-17T08:39:00Z",
              "content": "Ways To Reduce Wrinkles: As we age, our body begins to show signs of ageing that include fine lines and wrinkles. Wrinkles are creases, folds or ridges in the skin that appear naturally as we grow ol… [+2417 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Onmanorama.com"
              },
              "author": "Onmanorama Staff",
              "title": "Master these skin health tips in your 40s, to be young again | Lifestyle Beauty | English Manorama - Onmanorama",
              "description": "By steering clear of common pitfalls and addressing skin concerns appropriately, one can effortlessly maintain healthy skin.",
              "url": "https://www.onmanorama.com/lifestyle/beauty-and-fashion/2023/12/17/master-these-skin-health-tips-your-40s-young-again.html",
              "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/lifestyle/beauty-and-fashion/images/2023/12/17/skin-care-post-40-c.jpg",
              "publishedAt": "2023-12-17T08:33:02Z",
              "content": "New Delhi: Following a skincare regimen after entering your 40s requires a different approach. The fine lines, changes in skin texture, and other signs of ageing pave the need for a shift in skincare… [+3053 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Healthshots.com"
              },
              "author": "Natalia Ningthoujam",
              "title": "Stop plucking grey hair or be ready to face these side effects - Health shots",
              "description": "Spotted your first grey hair and tempted to pull out it out? Try not to, as plucking grey hair has side effects.",
              "url": "https://www.healthshots.com/beauty/hair-care/side-effects-of-plucking-grey-hair/",
              "urlToImage": "https://images.healthshots.com/healthshots/en/uploads/2023/12/15185139/grey-hair.jpg",
              "publishedAt": "2023-12-17T08:30:26Z",
              "content": "People generally start going grey in their 30s, though some may begin experiencing the process earlier than that. Most women like to cover it up with the help of hair colour or cutting off the affect… [+5259 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Parmita Uniyal",
              "title": "Year Ender 2023: 6 weight loss diets that we were tempted to try - Hindustan Times",
              "description": "The wellness trends of 2023 suggest that people are prioritizing eating patterns with a long-term focus to achieve sustainable weight loss. | Health",
              "url": "https://www.hindustantimes.com/lifestyle/health/year-ender-2023-6-weight-loss-diets-that-we-were-tempted-to-try-101702801018550.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/weight-loss-diets_1702801174068_1702801174395.jpg",
              "publishedAt": "2023-12-17T08:26:40Z",
              "content": "Amid the growing threat of obesity and a range of chronic diseases that can impact our well-being, it is crucial to work towards fitness goals. Alongside regular workouts, nutrition plays a vital rol… [+4019 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Newstracklive.com"
              },
              "author": "EMMANUAL",
              "title": "What is PCOD? Does it last a lifetime? - News Track English",
              "description": "Polycystic Ovary Syndrome, commonly known as PCOD, is a prevalent hormonal disorder among women. Let's delve into this complex condition, exploring its nature, symptoms, and the crucial question - does it last a lifetime?\r\n\r\nDeciphering PCOD\r\n\r\nPCOD is a mult…",
              "url": "https://english.newstracklive.com/news/what-is-pcod-does-it-last-a-lifetime-sc53-nu371-ta371-1306028-1.html",
              "urlToImage": "https://media.newstrack.in/uploads/lifestyle-health/health-tips/Dec/17/big_thumb/sdf_657e9972914ec.jpg",
              "publishedAt": "2023-12-17T08:10:26Z",
              "content": "Polycystic Ovary Syndrome, commonly known as PCOD, is a prevalent hormonal disorder among women. Let's delve into this complex condition, exploring its nature, symptoms, and the crucial question - do… [+3623 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "The Indian Express",
              "title": "Why Omega-3 and Omega-6 fatty acids need to be balanced via diet to avoid heart attacks, diabetes and body fat - The Indian Express",
              "description": null,
              "url": "https://indianexpress.com/article/health-wellness/omega-3-omega-6-fatty-acids-balanced-diet-9071638/",
              "urlToImage": null,
              "publishedAt": "2023-12-17T08:09:39Z",
              "content": null
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
                "name": "Newsdrum.in"
              },
              "author": "NewsDrum Desk",
              "title": "Diverse gut microbiomes give better protection against harmful bugs - now we know why - NewsDrum",
              "description": "In the last decade, it has become increasingly clear that a gut full of friendly microbes (the microbiome) is vital for our go...",
              "url": "https://www.newsdrum.in/international/diverse-gut-microbiomes-give-better-protection-against-harmful-bugs-now-we-know-why-2026869",
              "urlToImage": "https://img-cdn.thepublive.com/fit-in/1200x675/newsdrum-in/media/media_files/kq4ed2XMdYvXZdhYVNSH.jpg",
              "publishedAt": "2023-12-17T06:40:36Z",
              "content": "Oxford: In the last decade, it has become increasingly clear that a gut full of friendly microbes (the microbiome) is vital for our good health.\r\nIt has also become clear that a healthy microbiome is… [+3427 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Cgtn.com"
              },
              "author": "CGTN",
              "title": "Chinese researchers develop new dry-powder inhalable vaccine platform - CGTN",
              "description": "Chinese researchers have developed a single-dose dry-powder inhalable vaccine platform featuring a nano-micro composite multilevel structure, making a significant contribution to the prevention and treatment of respiratory infectious diseases in the future.",
              "url": "https://news.cgtn.com/news/2023-12-17/Chinese-researchers-develop-new-dry-powder-inhalable-vaccine-platform-1pBsFJtvF7O/index.html",
              "urlToImage": "https://news.cgtn.com/news/2023-12-17/Chinese-researchers-develop-new-dry-powder-inhalable-vaccine-platform-1pBsFJtvF7O/img/47a0bae8be6b4b2dae38b2a5af9f3feb/47a0bae8be6b4b2dae38b2a5af9f3feb-250.png",
              "publishedAt": "2023-12-17T05:53:07Z",
              "content": "Chinese researchers have developed a single-dose dry-powder inhalable vaccine platform featuring a nano-micro composite multilevel structure, making a significant contribution to the prevention and t… [+3371 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": null,
              "title": "Are carrots good for diabetic patients? - IndiaTimes",
              "description": "Carrots have sugar and carbohydrates and are sweet, but they contain glycemic index which is good for blood sugar levels.",
              "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/are-carrots-good-for-diabetic-patients/photostory/105999170.cms",
              "urlToImage": "https://static.toiimg.com/photo/105999207.cms",
              "publishedAt": "2023-12-17T05:30:00Z",
              "content": "Carrots are sweet-flavoured in nature, but they are non-starchy vegetables and have low saturated cholesterol and fat. Having a good source of minerals and vitamins, it is also a good source of diet … [+189 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TIMESOFINDIA.COM",
              "title": "Is it safe to consume Beetroot in diabetes? - IndiaTimes",
              "description": "There’s a common belief that the starch content and glycemic index of this root vegetable makes it unfit for diabetics. Here’s all you need to know about beetroot and is it safe for people with high sugar levels? Read on to find out…",
              "url": "https://timesofindia.indiatimes.com/life-style/food-news/is-it-safe-to-consume-beetroot-in-diabetes/photostory/106052460.cms",
              "urlToImage": "https://static.toiimg.com/photo/106052486.cms",
              "publishedAt": "2023-12-17T05:30:00Z",
              "content": "Beetroot is rich in essential nutrients, including folate, potassium, and vitamin C, supporting overall immune health. Its high nitrate content may help lower blood pressure and enhance cardiovascula… [+351 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India.com"
              },
              "author": "https://www.india.com/author/lifestylestaff/",
              "title": "Winter Fat Burn: 7 Antioxidant-Rich Foods For Effective Weight Loss - India.com",
              "description": "Here is a list of 7 antioxidant-rich foods that promote weight loss and improve your overall health in winter",
              "url": "https://www.india.com/lifestyle/winter-fat-burn-7-antioxidant-rich-foods-for-effective-weight-loss-6591884/",
              "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-17-at-10.27.02-AM.jpeg",
              "publishedAt": "2023-12-17T04:59:07Z",
              "content": "Here is a list of 7 antioxidant-rich foods that promote weight loss and improve your overall health in winter\r\nWinter Fat Burn: 7 Antioxidant-Rich Foods For Effective Weight Loss \r\nEmbracing the wint… [+2169 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "News9live.com"
              },
              "author": "Sneha Kumari",
              "title": "Is abdominal fat responsible for unmanageable diabetes? Expert comments - News9 LIVE",
              "description": "According to expert, as Indians, we are ethnically prone to develop Diabetes Mellitus and its complications at an earlier age as compared to Caucasians. This is partly because we tend to accumulate fat more easily around our waist. Know the link between diabe…",
              "url": "https://www.news9live.com/health/health-conditions/is-abdominal-fat-responsible-for-unmanageable-diabetes-expert-comments-2379464",
              "urlToImage": "https://images.news9live.com/wp-content/uploads/2023/12/Diabetes-and-fat.jpg",
              "publishedAt": "2023-12-17T04:29:32Z",
              "content": "New Delhi: In India, the rate of annual rise of adult obesity is ‘very high’ at 5.2 per cent, while the rate of annual increase of child obesity is also high at 9.1 per cent. According to reports, a … [+1747 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Jagran.com"
              },
              "author": "Prerna Targhotra",
              "title": "5 Incredible Benefits Of Drinking Barley Water For Diabetes Management - Jagran English",
              "description": "Barley Water Benefits: It is important to keep a check on your blood sugar levels regularly to manage diabetes. Eating nutritious foods and drinks is also an effective way to manage diabetes.",
              "url": "https://english.jagran.com/lifestyle/5-incredible-benefits-of-drinking-barley-water-for-diabetes-management-10120896",
              "urlToImage": "https://imgeng.jagran.com/images/2023/dec/barley-water-benefits1702786196869.jpg",
              "publishedAt": "2023-12-17T04:05:00Z",
              "content": "Barley Water Benefits: Barley water is a detoxifying drink known for its cooling and antioxidant properties. It is an easy-to-make healthy drink with only two ingredients, barley and water. The drink… [+2455 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Rujuta Diwekar",
              "title": "Don’t obsess about protein. Take a leaf out of grandma’s book instead - IndiaTimes",
              "description": "Many parents are trying to foster healthier ideas about food and weight than the ones they grew up with.",
              "url": "https://timesofindia.indiatimes.com/life-style/parenting/dont-obsess-about-protein-take-a-leaf-out-of-grandmas-book-instead/articleshow/106057334.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106057383,width-1070,height-580,imgsize-1127495,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-17T03:58:55Z",
              "content": "10 indoor fun activities for kids"
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
                "id": null,
                "name": "India.com"
              },
              "author": "Pallavi Mehra",
              "title": "How To Stay Young And Fit: 7 Healthy Habits For A Longer Life - Zee News",
              "description": "Menstrual Cycles Can Spur Daily Suicide Risk: Study Balanced Nutrition: Embrace a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. A balanced diet provides essential nutrients, supports optimal organ function, and helps maintain…",
              "url": "https://zeenews.india.com/health/how-to-stay-young-and-fit-7-healthy-habits-for-a-longer-life-2699771",
              "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/17/1337331-healthy-couple.jpg",
              "publishedAt": "2023-12-17T03:21:28Z",
              "content": "In our fast-paced world, where time seems to slip away effortlessly, the pursuit of a longer and healthier life has become a universal goal. While genetics play a role, adopting certain lifestyle hab… [+2754 chars]"
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
              "content": "10 foods that claim to be healthy but are not"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Tapatrisha Das",
              "title": "5 signs of Vitamin D deficiency - Hindustan Times",
              "description": "From bone pain to hair loss, here are the signs of Vitamin D deficiency in the body. Take a look.",
              "url": "https://www.hindustantimes.com/photos/lifestyle/5-signs-of-vitamin-d-deficiency-101702779856715.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/17/1600x900/v0hytd_1702779873047_1702779906585.jpg",
              "publishedAt": "2023-12-17T02:28:04Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "The Indian Express"
              },
              "author": "Lifestyle Desk",
              "title": "5 superfoods to eat if you want a healthier, faster brain - The Indian Express",
              "description": "Ekta Singhwal, Dietician, Ujala Cygnus Group of Hospitals, explained that maintaining optimal brain health involves incorporating a balanced and nutrient-rich diet. She recommends the following strategies:",
              "url": "https://indianexpress.com/article/lifestyle/food-wine/superfoods-faster-brain-health-9069681/",
              "urlToImage": "https://images.indianexpress.com/2023/12/brain-health.jpg",
              "publishedAt": "2023-12-17T01:30:51Z",
              "content": "In the pursuit of a healthy and vibrant life, nourishing the brain is a crucial aspect often overlooked. As the epicentre of our cognitive functions, emotions, and vitality, the brain requires specia… [+2779 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TIMESOFINDIA.COM",
              "title": "Why you should focus on keeping a healthy stomach in winters and tips to follow - IndiaTimes",
              "description": "​As the winter chill settles in, our stomachs may experience a dip in vitality, leading to various digestive issues. The winter season is notorious for causing respiratory illnesses such as colds and flu. You may be unaware that cold weather can cause a varie…",
              "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/why-you-should-focus-on-keeping-a-healthy-stomach-in-winters-and-tips-to-follow/photostory/106038335.cms",
              "urlToImage": "https://static.toiimg.com/photo/106038354.cms",
              "publishedAt": "2023-12-17T01:30:00Z",
              "content": "Maintain a well-balanced diet by including winter vegetables rich in vitamin C, such as sweet potatoes, pumpkin, carrots, and beets. Include green leafy vegetables like kale and spinach to regulate b… [+372 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Sridhar Vivan",
              "title": "BM Health: Karnataka’s health push: Tackling childhood pneumonia - Bangalore Mirror",
              "description": "Outlining the key objectives, Rao said, “The main goal of the SAANS campaign is to include the adoption and adherence to National Childhood Pneumonia Management guidelines, creating awareness and mob",
              "url": "https://bangaloremirror.indiatimes.com/bangalore/others/karnatakas-health-push-tackling-childhood-pneumonia/articleshow/106052948.cms",
              "urlToImage": "https://bangaloremirror.indiatimes.com/photo/52761249.cms",
              "publishedAt": "2023-12-17T00:30:00Z",
              "content": "With an alarming rise in pneumonia-related deaths among children, the health department has initiated an awareness program. Health Minister Dinesh Gundu Rao articulated the objective, stating that th… [+3181 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "India TV News"
              },
              "author": "Written by India TV Lifestyle Desk",
              "title": "Eating meals early may lower cardiovascular risk: Study - India TV News",
              "description": "Researchers have discovered that eating meals early could reduce the risk of cardiovascular diseases.",
              "url": "https://www.indiatvnews.com/health/eating-meals-early-may-lower-cardiovascular-risk-2023-12-16-907618",
              "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/health-1702747208.jpg",
              "publishedAt": "2023-12-16T23:30:01Z",
              "content": "In a study published in the journal Nature Communications, the researchers used data from 103,389 participants in the NutriNet-Sante cohort (79 percent of whom were women, with an average age of 42) … [+1969 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Financial Express"
              },
              "author": null,
              "title": "Winter & your ticker: How to keep the heart healthy in colder months - The Financial Express",
              "description": "Additionally, cold weather can prompt physiological responses such as increased heart rate and blood clotting tendencies, both of which can exacerbate the risk of heart attacks or strokes.",
              "url": "https://www.financialexpress.com/life/winter-amp-your-ticker-how-to-keep-the-heart-healthy-in-colder-months-3340444/",
              "urlToImage": "https://www.financialexpress.com/wp-content/uploads/2023/11/Soup-Freepik.jpg",
              "publishedAt": "2023-12-16T21:00:00Z",
              "content": "Do winter months pose a higher risk for cardiac events? Dr Varun Bansal, senior consultant, cardiology and cardiothoracic surgery, Indraprastha Apollo Hospital, says winter months often present incre… [+3685 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "WION"
              },
              "author": "Prisha",
              "title": "7 Foods Which Appear To Be Healthy But Are Not - WION",
              "description": "7 Foods Which Appear To Be Healthy But Are Not",
              "url": "https://www.wionews.com/web-stories/trending/7-foods-which-appear-to-be-healthy-but-are-not-1702757782978",
              "urlToImage": null,
              "publishedAt": "2023-12-16T20:32:58Z",
              "content": "Dec 17, 2023, 02:02AM IST"
            },
            {
              "source": {
                "id": null,
                "name": "WION"
              },
              "author": "Prisha",
              "title": "6 Health Benefits of Drinking Guava Leaf Tea in Winters - WION",
              "description": "6 Health Benefits of Drinking Guava Leaf Tea in Winters",
              "url": "https://www.wionews.com/web-stories/trending/6-health-benefits-of-drinking-guava-leaf-tea-in-winters-1702757236489",
              "urlToImage": null,
              "publishedAt": "2023-12-16T20:15:34Z",
              "content": "As per studies, lycopene which is found in guava is a powerful antioxidant which reduces the risk of cancer, especially the one afflicting breast, oral and prostate."
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "China Pneumonia Outbreak: Rising COVID cases and pneumonia outbreak in China | WION Pulse - WION",
              "description": "China claims a new local mystery illness outbreak on the 13th and the 15th of December at a school and all 30 children reportedly got infected and also devel...",
              "url": "https://www.youtube.com/watch?v=UG-i8DsWnjU",
              "urlToImage": "https://i.ytimg.com/vi/UG-i8DsWnjU/maxresdefault.jpg",
              "publishedAt": "2023-12-16T19:19:56Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Free Press Journal"
              },
              "author": "Dr Avishek Mishra",
              "title": "How To Change Your Food And Lifestyle For Winters - Free Press Journal",
              "description": "Discover ways to stay overall healthy during the cold weather",
              "url": "https://www.freepressjournal.in/weekend/how-to-change-your-food-and-lifestyle-for-winters",
              "urlToImage": "https://media.assettype.com/freepressjournal/2023-12/add8db0f-24d7-44c4-a281-a6b7d4a8e132/portrait_young_woman_wrapped_shawl_holding_herbal_tea_cup.jpg",
              "publishedAt": "2023-12-16T18:29:00Z",
              "content": "Now its time to change our lifestyle and food according to the cold weather. \r\nDominant dosha\r\nDigestive fire is strong. Body strength is also good compare to other seasons. Body needs food which are… [+2185 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Medical Xpress"
              },
              "author": "Elana Gotkine",
              "title": "Changes in biochemical, hematological parameters seen before IBD diagnosis - Medical Xpress",
              "description": "Changes in multiple biochemical and hematological parameters occur up to eight years before diagnosis of Crohn disease and up to three years before diagnosis of ulcerative colitis, according to a study published in the Nov. 21 issue of Cell Reports Medicine.",
              "url": "https://medicalxpress.com/news/2023-12-biochemical-hematological-parameters-ibd-diagnosis.html",
              "urlToImage": "https://scx2.b-cdn.net/gfx/news/2023/changes-in-biochemical.jpg",
              "publishedAt": "2023-12-16T18:00:01Z",
              "content": "Changes in multiple biochemical and hematological parameters occur up to eight years before diagnosis of Crohn disease and up to three years before diagnosis of ulcerative colitis, according to a stu… [+1741 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "ANI News"
              },
              "author": "ANI News",
              "title": "Here is why chemotherapy becomes less effective, finds study - ANI News",
              "description": null,
              "url": "https://www.aninews.in/news/health/here-is-why-chemotherapy-becomes-less-effective-finds-study20231216231723",
              "urlToImage": null,
              "publishedAt": "2023-12-16T17:52:28Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Nagalandpost.com"
              },
              "author": null,
              "title": "Eating a lot of bakery items, processed snacks resulting in constipation cases for children: Experts - Nagaland Post",
              "description": "As Constipation Awareness Month is being observed, experts opined that eating a lot of bakery items and processed snacks is attributed to increased cases of constipation among children above the age of 5 years in Bengaluru.",
              "url": "https://nagalandpost.com/index.php/eating-a-lot-of-bakery-items-processed-snacks-resulting-in-constipation-cases-for-children-experts/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T16:12:28Z",
              "content": "As Constipation Awareness Month is being observed, experts opined that eating a lot of bakery items and processed snacks is attributed to increased cases of constipation among children above the age … [+3433 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Jagrantv.com"
              },
              "author": "ayushee joshi",
              "title": "Winter Health Tips: How To Stay Protected From Cold and Cough in Cold Weather - Jagran TV",
              "description": "Cold and Cough in Winters: Reducing the amount of dry air in the house by adding humidity can help people breathe easier. Including foods high in vitamins and minerals that ...",
              "url": "https://www.jagrantv.com/en-show/winter-health-tips-cold-and-cough-home-remedies-and-treatment-in-cold-weather-rc1048276",
              "urlToImage": "https://i.ytimg.com/vi/Fb5HqXe2RQg/maxresdefault.jpg",
              "publishedAt": "2023-12-16T15:31:26Z",
              "content": "Cold-Cough in Winters: The winter season is a common time for cold and cough conditions, so getting well requires either finding a good treatment or doing some home remedies. Including foods that str… [+844 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Jagrantv.com"
              },
              "author": "ayushee joshi",
              "title": "Amla Benefits: Know Various Health Benefits of Amla in Winters - Jagran TV",
              "description": "Amla in Winters: Amla is high in antioxidants, which help to combat oxidative stress, which is a common side effect of being exposed to harsh winter elements. This not only ...",
              "url": "https://www.jagrantv.com/en-show/amla-benefits-know-various-health-benefits-of-eating-amla-in-winters-rc1048275",
              "urlToImage": "https://i.ytimg.com/vi/66x-724Hn14/maxresdefault.jpg",
              "publishedAt": "2023-12-16T15:18:22Z",
              "content": "Amla in Winters: Indian gooseberry, or amla, is usually known as a winter superfood with numerous health advantages. Almas potent immune-boosting qualities are useful in the winter season when the ch… [+830 chars]"
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
                "name": "Newstracklive.com"
              },
              "author": "EMMANUAL",
              "title": "Start eating dates soaked in ghee on an empty stomach from today itself, benefits will be visible within a week - News Track English",
              "description": "In the quest for a healthier lifestyle, we often stumble upon ancient remedies that promise significant benefits. One such practice gaining traction is consuming dates soaked in ghee on an empty stomach. Let's delve into this age-old tradition and explore the…",
              "url": "https://english.newstracklive.com/news/start-eating-dates-soaked-in-ghee-on-an-empty-stomach-from-today-itself-benefits-will-be-visible-within-a-week-sc53-nu371-ta371-1305995-1.html",
              "urlToImage": "https://media.newstrack.in/uploads/lifestyle-health/health-tips/Dec/16/big_thumb/gfhh_657d8cbc6ece8.JPG",
              "publishedAt": "2023-12-16T13:53:47Z",
              "content": "In the quest for a healthier lifestyle, we often stumble upon ancient remedies that promise significant benefits. One such practice gaining traction is consuming dates soaked in ghee on an empty stom… [+4358 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Sportskeeda"
              },
              "author": "Saima Khan",
              "title": "Cocoa extract benefits for brain health - Sportskeeda",
              "description": "The plant that produces cocoa extract, one of the most consumed delicacies worldwide, is called cocoa. It's likely that you have had some cocoa extract this week in some form or the other.",
              "url": "https://www.sportskeeda.com/health-and-fitness/cocoa-extract-benefits-brain-health",
              "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/41816-17026675314318-1920.jpg",
              "publishedAt": "2023-12-16T13:24:00Z",
              "content": "The plant that produces cocoa extract, one of the most consumed delicacies worldwide, is called cocoa. It's likely that you have had some cocoa extract this week in some form or the other.\r\nIt has be… [+4150 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Herzindagi.com"
              },
              "author": "Akshita Jolly",
              "title": "Winter Delights: Best Healthy And Classic Recipes Made From Peas! - HerZindagi",
              "description": "Winter Delights: Best Healthy And Classic Recipes Made From Peas: \nWant to try some peas recipes for this winter season to satisfy your cravings? Try these healthy recipes made with peas. Tap to see.",
              "url": "https://www.herzindagi.com/web-stories/food-diary/winter-delights-best-healthy-and-classic-recipes-made-from-peas-ws-21821",
              "urlToImage": "https://images.herzindagi.info/webstories/21821/social-media-akshita--10--1702708557.jpeg",
              "publishedAt": "2023-12-16T11:30:00Z",
              "content": "<ul>Want to try some peas recipes for this winter season to satisfy your cravings? Try these healthy recipes made with peas. Tap to see. </ul>\r\nClassic pea soup \r\n<ul>Start your morning with this hot… [+763 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "msnNOW"
              },
              "author": null,
              "title": "Is the increasing heart attack rate an indication of Post Covid effect? | Abp News - MSN",
              "description": null,
              "url": "https://www.msn.com/en-in/news/world/is-the-increasing-heart-attack-rate-an-indication-of-post-covid-effect-abp-news/vi-AA1lAqIq",
              "urlToImage": null,
              "publishedAt": "2023-12-16T10:32:22Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "DNA India"
              },
              "author": "Aayushi",
              "title": "Kidney health: 4 superfoods to eat everyday - DNA India",
              "description": "Here are four superfoods one must consume every day for better kidney health.",
              "url": "https://www.dnaindia.com/web-stories/lifestyle/kidney-health-4-superfoods-to-eat-everyday-1702719262785",
              "urlToImage": null,
              "publishedAt": "2023-12-16T10:26:50Z",
              "content": "They also contain other minerals, colour, flavour, fibre, folic acid, vitamins C, B6, and A, and lycopene, an antioxidant that protects against some types of cancer."
            },
            {
              "source": {
                "id": null,
                "name": "THE WEEK"
              },
              "author": "Shyla Jovitha Abraham",
              "title": "Intermittent fasting can help obese people with type 2 diabetes lose weight - The Week",
              "description": "intermittent fasting can help obese people with type 2 diabetes lose weight and control their blood sugar levels. People with type 2 diabetes",
              "url": "https://www.theweek.in/news/health/2023/12/16/intermittent-fasting-and-people-with-type-2-diabetes.html",
              "urlToImage": "https://www.theweek.in/content/dam/week/news/2023/images/2023/7/10/Intermittent-fasting-food-eat.jpg",
              "publishedAt": "2023-12-16T10:25:37Z",
              "content": "A study published in JAMA Network Open has found that intermittent fasting can help obese people with type 2 diabetes lose weight and control their blood sugar levels. People with type 2 diabetes are… [+1587 chars]"
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
            },
            {
              "source": {
                "id": null,
                "name": "India TV News"
              },
              "author": "Rahul Pratyush",
              "title": "7 types of flours that help in weight loss - India TV News",
              "description": "Uncover the weight-loss benefits of 7 flours, including almond, coconut, and chickpea. Boost your wellness with these nutritious alternatives for effective results. at India TV News",
              "url": "https://www.indiatvnews.com/web-stories/lifestyle/7-types-of-flours-that-help-in-weight-loss-2023-12-16-907566",
              "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2023/12/1-flour-1702716834.jpg",
              "publishedAt": "2023-12-16T09:02:58Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Timesofindia.com"
              },
              "author": "Kritika Pushkarna",
              "title": "10 best foods to eat on an empty stomach - Recipes",
              "description": "Jump-starting your day with the right foods can set the tone for better digestion, sustained energy, and overall well-being. Take a look at 10 such foods that are best enjoyed on an empty stomach for a healthy and fulfilling start to your day.",
              "url": "https://recipes.timesofindia.com/web-stories/10-best-foods-to-eat-on-an-empty-stomach/photostory/106041346.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106041359,imgsize-145354,width-900,height-1200,resizemode-6/106041359.jpg",
              "publishedAt": "2023-12-16T08:30:00Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "Khushi Pal",
              "title": "5 antioxidant-rich foods for glowing skin in winters - Hindustan Times",
              "description": "Here are 5 foods rich in antioxidants for glowing skin in winters.",
              "url": "https://www.hindustantimes.com/web-stories/lifestyle/5-antioxidant-rich-foods-for-glowing-skin-in-winters-101702705013407.html",
              "urlToImage": null,
              "publishedAt": "2023-12-16T08:20:07Z",
              "content": "By Khushi PalPublished Dec 16, 2023\r\nHindustan TimesLifestylePhoto Credits: Unsplash"
            },
            {
              "source": {
                "id": null,
                "name": "Hindustan Times"
              },
              "author": "ANI",
              "title": "Potential treatment target for genetic type of epilepsy: Research - Hindustan Times",
              "description": "Developmental and epileptic encephalopathies are rare forms of epilepsy that can begin in childhood. The patients are treated with generic antiepileptic drugs. | Health",
              "url": "https://www.hindustantimes.com/lifestyle/health/potential-treatment-target-for-genetic-type-of-epilepsy-research-101702713930449.html",
              "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/seizure_1653058791309_1702714067215.jpg",
              "publishedAt": "2023-12-16T08:10:17Z",
              "content": "A team of researchers discovered a possible target for treating a hereditary form of epilepsy. The findings of the study published in Nature Communications, Francis Crick Institute, UCL and MSD resea… [+3727 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "THE WEEK"
              },
              "author": "PTI",
              "title": "Influenza symptoms can linger like long Covid: Lancet study - The Week",
              "description": "People hospitalised with seasonal influenza can suffer long-term, negative health effects, especially involving their lungs and airways",
              "url": "https://www.theweek.in/news/health/2023/12/16/influenza-symptoms-can-linger-like-long-covid--lancet-study.html",
              "urlToImage": "https://www.theweek.in/content/dam/week/news/sci-tech/2019/June/Influenza-Virus-H1N1-Swine-Flu-shut.jpg",
              "publishedAt": "2023-12-16T06:57:28Z",
              "content": "People hospitalised with seasonal influenza can suffer long-term, negative health effects, especially involving their lungs and airways, much like the effects of long Covid, according to a study.\r\nTh… [+2709 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Weather Channel"
              },
              "author": "The Weather Channel",
              "title": "Blood Type O May Be Associated with Higher Stroke Risk After COVID-19 Vaccination: Study | Weather.com - The Weather Channel",
              "description": "Blood group 'O' was more prevalent in patients who had suffered a venous stroke after receiving the Oxford-AstraZeneca vaccine (43%) than in unvaccinated venous stroke patients (17%).",
              "url": "https://weather.com/en-IN/india/coronavirus/news/2023-12-16-blood-type-o-linked-to-higher-stroke-risk-after-covid19-vaccine",
              "urlToImage": "https://s.w-x.co/in-vaccine_corbevax.jpg",
              "publishedAt": "2023-12-16T05:36:28Z",
              "content": "People with blood group 'O' face increased risks of cerebral venous thrombosis (CVT), or venous stroke, after taking the Oxford-AstraZeneca vaccine, administered as Covishield in India, claimed a lar… [+2045 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Mypunepulse.com"
              },
              "author": null,
              "title": "Why jaggery is the perfect winter superfood, know health benefits of jaggery - Pune Pulse",
              "description": "Indulge in the delectable taste of jaggery while reaping numerous benefits for your body and mind. As winter brings forth the joy of til gur laddoos, gur halwa, and peanut gur chikki, discover the common ingredient that adds not only deliciousness but also nu…",
              "url": "https://www.mypunepulse.com/why-jaggery-is-the-perfect-winter-superfood-know-health-benefits-of-jaggery/",
              "urlToImage": "https://www.mypunepulse.com/wp-content/uploads/2023/12/Main-jaggeryvssugar-jpg.webp",
              "publishedAt": "2023-12-16T05:03:24Z",
              "content": "Indulge in the delectable taste of jaggery while reaping numerous benefits for your body and mind. As winter brings forth the joy of til gur laddoos, gur halwa, and peanut gur chikki, discover the co… [+2735 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Tennews.in"
              },
              "author": "TenNews Team",
              "title": "US records over 2300 deaths from flu this season - tennews.in - Ten News",
              "description": "Los Angeles, Dec 16 (IANS) There have been at least 3.7 million illnesses, 38,000 hospitalizations and 2,300 deaths from flu so far this season in the US, according to the latest estimates released Friday by the Centers for Disease Control and Preven",
              "url": "https://tennews.in/us-records-over-2300-deaths-from-flu-this-season/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T04:55:51Z",
              "content": "Los Angeles, Dec 16 (IANS) There have been at least 3.7 million illnesses, 38,000 hospitalizations and 2,300 deaths from flu so far this season in the US, according to the latest estimates released F… [+643 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NBC4 Washington"
              },
              "author": "Eun Yang, News4 Anchor, Patricia Fantis",
              "title": "Cold weather increases risk of stroke, but there are steps you can take to protect yourself - NBC4 Washington",
              "description": "Every 40 seconds, someone in the U.S. has a stroke. While age and health are major risk factors for a stroke, falling temperatures can also increase your risk.",
              "url": "http://www.nbcwashington.com/news/local/cold-weather-increases-risk-of-stroke-but-there-are-steps-you-can-take-to-protect-yourself/3495641/",
              "urlToImage": "https://media.nbcwashington.com/2023/12/27712520436-1080pnbcstations.jpg?quality=85&strip=all&resize=1200%2C675",
              "publishedAt": "2023-12-16T03:13:19Z",
              "content": "Every 40 seconds, someone in the U.S. has a stroke. While age and health are major risk factors for a stroke, falling temperatures can also increase your risk.\r\nEven if you're not clearing like a sno… [+1447 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Ipsita Pati",
              "title": "More kids coming to OPDs with bronchitis: Docs - Times of India",
              "description": "Gurgaon: Hospitals across the city have been reporting a spike in the number of patients with respiratory ailments such as cough, chest pain and breat.",
              "url": "https://timesofindia.indiatimes.com/city/gurgaon/more-kids-coming-to-opds-with-bronchitis-docs/articleshow/106036519.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T02:42:36Z",
              "content": "Princess of Jaipur and Deputy CM of Rajasthan, Diya Kumari is the most stylish royal"
            },
            {
              "source": {
                "id": null,
                "name": "Greekreporter.com"
              },
              "author": "Greek Reporter",
              "title": "Woman Gives Birth in a Rare Abdominal Ectopic Pregnancy - Greek Reporter",
              "description": null,
              "url": "https://greekreporter.com/2023/12/16/woman-gives-birth-abdominal-ectopic-pregnancy/",
              "urlToImage": null,
              "publishedAt": "2023-12-16T02:11:31Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "VDH urges more people to get vaccinated - WAVY TV 10",
              "description": "Not enough people are rolling up their sleeves for vaccinations against the flu, RSV and COVID-19 according to the Centers For Disease Control and Prevention...",
              "url": "https://www.youtube.com/watch?v=fe7lVKBoQTQ",
              "urlToImage": "https://i.ytimg.com/vi/fe7lVKBoQTQ/maxresdefault.jpg",
              "publishedAt": "2023-12-16T00:51:08Z",
              "content": null
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "TNN",
              "title": "IISc team finds ways to boost immunotherapy in cancer cells - Times of India",
              "description": "IISc researchers found that only some types of cancer cells respond well to Interferon-gamma (IFN) activation, which is crucial for immunotherapy. The",
              "url": "https://timesofindia.indiatimes.com/city/bengaluru/iisc-team-finds-ways-to-boost-immunotherapy-in-cancer-cells/articleshow/106035374.cms",
              "urlToImage": "https://static.toiimg.com/thumb/msid-106035384,width-1070,height-580,imgsize-611868,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
              "publishedAt": "2023-12-16T00:29:22Z",
              "content": "Princess of Jaipur and Deputy CM of Rajasthan, Diya Kumari is the most stylish royal"
            },
            {
              "source": {
                "id": "cnn",
                "name": "CNN"
              },
              "author": "Deidre McPhillips, CNN",
              "title": "Respiratory virus activity is high or increasing in most parts of the US and it still hasn't peaked - Yahoo Singapore News",
              "description": "Respiratory virus season is well underway in the United States, and the US Centers for Disease Control and Prevention warns that the peak is still to come...",
              "url": "https://www.cnn.com/2023/12/15/health/high-respiratory-virus-activity-cdc-data/index.html",
              "urlToImage": "https://media.zenfs.com/en/cnn_articles_875/19bfa5e985547f9f46fba32d3890b8f5",
              "publishedAt": "2023-12-16T00:25:00Z",
              "content": "Respiratory virus season is well underway in the United States, and the US Centers for Disease Control and Prevention warns that the peak is still to come. Low vaccination rates leave many people at … [+3963 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Northwestern.edu"
              },
              "author": null,
              "title": "Unstable 'Fluttering' Predicts Aortic Aneurysm | News | Northwestern Engineering - Northwestern Engineering",
              "description": "With 98 percent accuracy, a new metric developed by Professor Neelesh Patankar predicted the development of an aneurysm on average three years prior to occurrence.",
              "url": "https://www.mccormick.northwestern.edu/news/articles/2023/12/unstable-fluttering-predicts-aortic-aneurysm/",
              "urlToImage": "https://www.mccormick.northwestern.edu/images/news/2023/12/unstable-fluttering-predicts-aortic-aneurysm-social.jpg",
              "publishedAt": "2023-12-15T21:48:18Z",
              "content": "An expert on fluid dynamics, Patankar is a professor of mechanical engineering at the McCormick School of Engineering. He co-led the study with Tom Zhao, who specializes in first principles biomechan… [+5531 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "Microsoft’s Chief Questions Officer Trevor Noah on how AI can help improve breast cancer detection - Microsoft",
              "description": "Breast cancer is the second leading cause of cancer related death in women, and detecting it early is critical for improving treatment outcomes. Although mam...",
              "url": "https://www.youtube.com/watch?v=YUoqR4XBmqA",
              "urlToImage": "https://i.ytimg.com/vi/YUoqR4XBmqA/maxresdefault.jpg",
              "publishedAt": "2023-12-15T17:00:28Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "msnNOW"
              },
              "author": null,
              "title": "Maharashtra, Telangana report alarming surge in mumps cases – Know symptoms, preventive tips - MSN",
              "description": null,
              "url": "https://www.msn.com/en-in/health/health-news/maharashtra-telangana-report-alarming-surge-in-mumps-cases-know-symptoms-preventive-tips/ar-AA1lyOLa",
              "urlToImage": null,
              "publishedAt": "2023-12-15T16:37:55Z",
              "content": null
            },
            {
              "source": {
                "id": null,
                "name": "Medscape"
              },
              "author": "Megan Brooks",
              "title": "Shift Workers Prone to a Plethora of Sleep Disorders - Medscape",
              "description": "Shift work is tied to a plethora of sleep disorders, including insomnia and sleep-related breathing disorders. These problems are worse in individuals who work night shifts.",
              "url": "https://www.medscape.com/viewarticle/shift-workers-prone-plethora-sleep-disorders-2023a1000vjo",
              "urlToImage": "https://img.medscapestatic.com/vim/live/professional_assets/medscape/images/thumbnail_library/gty_231215_night_shift_employment_800x450.jpg",
              "publishedAt": "2023-12-15T16:06:52Z",
              "content": "TOPLINE:\r\nShift workers are more prone to short sleep and a range of sleep disorders, a large Belgian study finds. The problem was worse among night shift workers, about half of whom sleep 6 hours or… [+2315 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Northeast Now"
              },
              "author": null,
              "title": "Mistakes not to repeat after surviving a heart attack - Northeast Now",
              "description": "Mistakes not to repeat after surviving a heart attack",
              "url": "https://nenow.in/web-stories/mistakes-not-to-repeat-after-surviving-a-heart-attack",
              "urlToImage": "https://nenow.in/wp-content/uploads/2023/12/cropped-Heart-Attack-Cardiac-Arrest.webp",
              "publishedAt": "2023-12-15T14:19:16Z",
              "content": "Surviving a heart attack is not easy and common\r\nSurviving a heart attack is not easy and common \r\nStop smoking, consuming alcohol and drugs, that can decrease sperm quality and impact egg developmen… [+1425 chars]"
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
