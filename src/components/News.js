import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const filteredData = [
        {
            "entertainment": [
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Animal worldwide box office collection day 15: Ranbir Kapoor and Bobby Deol-starrer to enter ₹800 crore club soon - Hindustan Times",
                    "description": "Animal worldwide box office collection day 15: Directed by Sandeep Reddy Vanga, the Ranbir Kapoor film is unstoppable. It features Bobby Deol as the antagonist. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/animal-worldwide-box-office-collection-day-15-ranbir-kapoor-bobby-deol-sandeep-reddy-vanga-101702715320722.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Bobby_Deol_kiss_Ranbir_Kapoor_Animal_1702545989613_1702715361781.jpg",
                    "publishedAt": "2023-12-16T08:46:04Z",
                    "content": "Animal worldwide box office collection day 15: Ranbir Kapoor's Animal is about to cross another milestone. On Saturday, the action film's makers shared that Animal had grossed 797.6 crore worldwide i… [+2148 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Jagran.com"
                    },
                    "author": "Simran Srivastav",
                    "title": "Bigg Boss 7 Telugu Winner Prashanth, Sivaji Or Amardeep; Who Is Likely To Win Finale Check Voting Poll Results - Jagran English",
                    "description": "Bigg Boss 7 Telugu Winner: The top six finalists are Amardeep, Arjun, Pallavi Prashanth, Priyanka, Sivaji and Yawar.",
                    "url": "https://english.jagran.com/entertainment/bigg-boss-7-telugu-winner-prashanth-sivaji-amardeep-arjun-priyanka-yawar-who-is-likely-to-win-finale-check-voting-poll-results-10120502",
                    "urlToImage": "https://imgeng.jagran.com/images/2023/dec/BiggBoss7TeluguWinner1702616858429.jpg",
                    "publishedAt": "2023-12-16T08:41:55Z",
                    "content": "Bigg Boss 7 Telugu Winner: Nagarjuna-hosted reality television show 'Bigg Boss Telugu 7' is finally coming to an end and has created a lot of excitement among the viewers ahead of its grand finale. T… [+1679 chars]"
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
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Indian Police Force Teaser: Sidharth Malhotra, Shilpa Shetty, Vivek Oberoi Reporting From The Next Chapter Of The Cop Universe - NDTV Movies",
                    "description": "\"Excited to bring to you my first action packed show,\" wrote Sidharth Malhotra",
                    "url": "https://www.ndtv.com/entertainment/indian-police-force-teaser-sidharth-malhotra-shilpa-shetty-vivek-oberoi-reporting-from-the-next-chapter-of-the-cop-universe-4684583",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/m504rnsg_sidharth-malhotra_625x300_16_December_23.jpg",
                    "publishedAt": "2023-12-16T08:32:10Z",
                    "content": "A still from Indian Police Force teaser. (Courtesy: YouTube)\r\nNew Delhi: Rohit Shetty's upcoming project Indian Police Force, a part of his grand cop universe, had its teaser release today it came wi… [+1551 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Shah Rukh Khan's 'Dunki' gets 'UA' certificate by CBFC; major SPOILER revealed! - IndiaTimes",
                    "description": "Shah Rukh Khan's film 'Dunki', directed by Rajkumar Hirani, has been cleared by CBFC with 'U/A' certifiicate and a runtime of 161 minutes. The film wi",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/shah-rukh-khans-dunki-gets-ua-certificate-by-cbfc-major-spoiler-revealed/articleshow/106042891.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106042899,width-1070,height-580,imgsize-54428,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T08:12:01Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Twinkle Khanna responds after man questions her for calling men ‘dessert’ - Hindustan Times",
                    "description": "Twinkle Khanna at her book launch was asked by Akshay Kumar if men are ‘irrelevant’. In her witty style, Twinkle called men ‘dessert.’ | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/twinkle-khanna-responds-after-man-questions-her-for-telling-akshay-kumar-men-are-dessert-blame-patriarchy-101702711450650.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/akshay_kumar_twinkle_khanna_1658414181731_1702713472108.jpeg",
                    "publishedAt": "2023-12-16T08:06:08Z",
                    "content": "Twinkle Khannaanswered a question from husband-actor Akshay Kumar during her book launch and managed to give a witty response. Her new book is titled Welcome To Paradise. At the event, Akshay who was… [+2307 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Triptii Dimri reacts as her Instagram followers grow by millions after Animal - Hindustan Times",
                    "description": "Triptii Dimri has spoken about the sudden jump in her Instagram follower count and also revealed her family's reaction to it. The actor was last seen in Animal. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/triptii-dimri-reacts-as-her-instagram-followers-grow-massively-since-starring-with-ranbir-kapoor-in-animal-101702710808996.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Triptii_Dimri_1702710993112_1702711008595.jpg",
                    "publishedAt": "2023-12-16T07:47:05Z",
                    "content": "Triptii Dimri, who was seen Sandeep Reddy Vanga's Animal alongside Ranbir Kapoor, has gained millions of followers on Instagram in recent days. Now, in an interview with News 18, the actor has talked… [+2797 chars]"
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "The Hindu",
                    "title": "Matthew Perry died of acute effects of Ketamine, autopsy reveals - The Hindu",
                    "description": null,
                    "url": "https://www.thehindu.com/entertainment/movies/matthew-perry-died-of-acute-effects-of-ketamine-autopsy-reveals/article67644569.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T07:21:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Entertainment Desk",
                    "title": "‘Aamir Khan said please consider me for Langda Tyagi’: Vishal Bhardwaj recalls overlooking Saif Ali Khan’s ‘ajeeb performances’ to cast him in Omkara - The Indian Express",
                    "description": "Vishal Bhardwaj said that Aamir Khan was excited to play Langda Tyagi in Omkara, and revealed why he cast Saif Ali Khan instead.",
                    "url": "https://indianexpress.com/article/entertainment/bollywood/aamir-khan-said-please-consider-me-for-langda-tyagi-vishal-bhardwaj-saif-ali-khan-omkara-9070566/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/Aamir-Khan-Saif-Ali-Khan-langda-Tyagi-Omkara.jpg",
                    "publishedAt": "2023-12-16T06:47:07Z",
                    "content": "Filmmaker Vishal Bhardwaj said that Aamir Khan was interested in playing Langda Tyagi in the 2006 film Omkara, and he made his feelings known while they were working together on a separate project th… [+2388 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Abhilash Mendhe",
                    "title": "Rikishi reacts to Roman Reigns naming Solo Sikoa the next Tribal Chief - Sportskeeda",
                    "description": "WWE Hall of Famer Rikishi has reacted to Roman Reigns branding Solo Sikoa the next Tribal Chief.",
                    "url": "https://www.sportskeeda.com/wwe/news-rikishi-reacts-roman-reigns-naming-solo-sikoa-next-tribal-chief",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/bfb49-17027078834006-1920.jpg",
                    "publishedAt": "2023-12-16T06:37:22Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gulte"
                    },
                    "author": "Satya B",
                    "title": "First Look : Honeymoon Express Flies High - Gulte",
                    "description": "Akkineni Nagarjuna unveiled the first look of the upcoming film 'Honeymoon Express' today, marking the introduction of a new-age romantic comedy with a socially relevant message. Presented by NRI Entertainments (USA) and produced by New Reel India Entertainme…",
                    "url": "https://www.gulte.com/movienews/272779/first-look-honeymoon-express-flies-high",
                    "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-16-at-11.21.02-AM.jpeg",
                    "publishedAt": "2023-12-16T06:33:45Z",
                    "content": "Akkineni Nagarjuna unveiled the first look of the upcoming film ‘Honeymoon Express’ today, marking the introduction of a new-age romantic comedy with a socially relevant message. Presented by NRI Ent… [+1512 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Kareena Kapoor and Karan Johar cheer for Taimur Ali Khan as he delivers an energetic school performance - IndiaTimes",
                    "description": "In the midst of the audience, a constellation of Bollywood celebs, including Kareena, Karan, and Gauri Khan, occupied the coveted front-row seats, exu",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/kareena-kapoor-and-karan-johar-cheer-for-taimur-ali-khan-as-he-delivers-an-energetic-school-performance/articleshow/106040063.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106040075,width-1070,height-580,imgsize-41360,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T05:55:41Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Shah Rukh Khan tops UK's Top 50 Asian Celebrities In The World list for 2023 - Hindustan Times",
                    "description": "Shah Rukh Khan led this year's Top 50 Asian celebrities in the world list for 2023. Alia Bhatt, Priyanka Chopra, Diljit Dosanjh and Ranbir Kapoor also in list. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khan-tops-uks-top-50-asian-celebrities-in-the-world-list-for-2023-alia-bhatt-priyanka-chopra-101702702408626.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/shah_rukh_khan_1702705281085_1702705281320.jpg",
                    "publishedAt": "2023-12-16T05:53:16Z",
                    "content": "Shah Rukh Khan had added yet another feather to his cap as he became the number 1 star on the Top 50 Asian Celebrities in the World. The official list was unveiled on Friday. Following him, Alia Bhat… [+2221 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "123telugu.com"
                    },
                    "author": null,
                    "title": "Allari Naresh, Ashika Ranganath celebrate Mirnaa Menon’s birthday on Naa Saami Ranga sets - 123telugu",
                    "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
                    "url": "https://www.123telugu.com/mnews/allari-naresh-ashika-ranganath-celebrate-mirnaa-menons-birthday-on-naa-saami-ranga-sets.html",
                    "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
                    "publishedAt": "2023-12-16T05:31:00Z",
                    "content": "Sankranti 2024 is going to be very special, with multiple films lined up for release. One of them is Naa Saami Ranga starring King Nagarjuna. The film also features Allari Naresh and Raj Tarun. Recen… [+726 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Bobby Deol: Shreyas Talpade’s heart stopped for 10 minutes, his wife was upset - Hindustan Times",
                    "description": "Bobby Deol has revealed the conversation he had with Shreyas Talpade’s wife Deepti after he suffered a heart attack on Thursday in Mumbai. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/bobby-deol-shreyas-talpade-heart-stopped-for-10-minutes-101702701697527.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Bobby_Deol_Shreyas_Talpade_1702702142686_1702702152430.jpg",
                    "publishedAt": "2023-12-16T05:09:15Z",
                    "content": "Shreyas Talpade was shooting for Welcome to Jungle on Thursday when he suffered a heart attack. His wife Deepti Shreyas Talpade had recently shared his health update and said he will be discharged fr… [+2387 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Aishwarya Rai Bachchan-Abhishek, Amitabh Bachchan-Agastya Nanda Form Aaradhya's Cheer Squad At Her Annual Day - NDTV Movies",
                    "description": "Aishwarya Rai Bachchan and husband Abhishek were pictured together post the event with daughter Aaradhya by their side",
                    "url": "https://www.ndtv.com/entertainment/aishwarya-rai-bachchan-abhishek-amitabh-bachchan-agastya-nanda-form-aaradhyas-cheer-squad-at-her-annual-day-4683693",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/abn75hs_aishwarya_625x300_16_December_23.jpg",
                    "publishedAt": "2023-12-16T04:42:35Z",
                    "content": "Abhishek-Aishwarya with Vrindya Rai.\r\nNew Delhi: It was fam-jam time for the Bachchans as they attended Aaradhya's annual day event at the Dhirubhai Ambani International School in Mumbai. Aishwarya R… [+1425 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "India Today Entertainment Desk",
                    "title": "Watch: Aishwarya, Abhishek dance with Big B, SRK, KJo at kids’ annual day event - India Today",
                    "description": "Bollywood stars including the Bachchans and Shah Rukh Khan were seen dancing together at the annual day celebration of Dhirubhai Ambani School. Aishwarya Rai danced with Abhishek and Amitabh Bachchan.",
                    "url": "https://www.indiatoday.in/movies/celebrities/story/aishwarya-rai-abhishek-bachchan-amitabh-bachchan-dance-shah-rukh-khan-karan-johar-2476653-2023-12-16",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/abhishek-and-amitabh-bachchan-dance-with-aishwarya-rai--shah-rukh-khan-16361919-16x9_0.jpg?VersionId=UV5g6_7_XhL8XcOogrEluD7VXRLmIUOc",
                    "publishedAt": "2023-12-16T04:38:13Z",
                    "content": "It was the annual day celebration at the Dhirubhai Ambani School on December 15. On the special day, several Bollywood stars were seen in attendance to show support to their children who are enrolled… [+1459 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "123telugu.com"
                    },
                    "author": null,
                    "title": "Photo Moment: SS Rajamouli buys the first ticket of Salaar in Nizam from the team - 123telugu",
                    "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
                    "url": "https://www.123telugu.com/mnews/photo-moment-ss-rajamouli-buys-the-first-ticket-of-salaar-in-nizam-from-the-team.html",
                    "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
                    "publishedAt": "2023-12-16T04:30:00Z",
                    "content": "We have already reported that SS Rajamouli, along with Prabhas, Prashanth Neel, and Prithviraj Sukumaran, shot for a special interview for Salaar promotions. The interview will be coming out very soo… [+1141 chars]"
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
                        "name": "Bollywood Life"
                    },
                    "author": "Sanskruti Nemane",
                    "title": "Dunki Vs Salaar: Shah Rukh Khan, Prabhas to meet face-to-face to ensure clash doesn't affect their box office - Bollywood Life",
                    "description": "Shah Rukh Khan and Prabhas' films, Dunki and Salaar are releasing at the same time. Hence, to ensure the clash does not affect the film business, the two stars might have a meeting.",
                    "url": "https://www.bollywoodlife.com/news-gossip/dunki-vs-salaar-shah-rukh-khan-prabhas-to-meet-face-to-face-to-ensure-clash-doesnt-affect-their-box-office-collection-entertainment-news-2730639/",
                    "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2023/12/Dunki-Vs-Salaar.jpg",
                    "publishedAt": "2023-12-16T04:21:04Z",
                    "content": "Shah Rukh Khan starrer Dunki has grabbed everyone's attention. The film is currently one of the most talked about movies. Everyone is waiting for Shah Rukh Khan to deliver his third hit of the year. … [+2342 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Entertainment Desk",
                    "title": "Proud mom Aishwarya Rai witnesses daughter Aaradhya Bachchan’s show-stopping performance at school annual function. Watch videos - The Indian Express",
                    "description": "Fans are hailing Aaradhya Bachchan's performance at her school's annual function, and calling her a \"star in the making.\"",
                    "url": "https://indianexpress.com/article/entertainment/bollywood/proud-mom-aishwarya-rai-witnesses-daughter-aaradhya-bachchan-show-stopping-performance-at-school-annual-function-9070418/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/Aaradhya-Bachchan-Aishwarya-Rai-school-annual-function.jpg",
                    "publishedAt": "2023-12-16T03:49:57Z",
                    "content": "Dhirubhai Ambani International School’s annual day on Friday was a star-studded event, with several Bollywood celebrities in attendance, cheering for their children. Some videos from the event have s… [+1864 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Manik Sharma",
                    "title": "Year in review: 10 best Hindi films of 2023 - Moneycontrol",
                    "description": "The theatres flew open, the Baadshah of Bollywood returned and several films clocked unprecedented numbers in a fruitful year for Hindi cinema.",
                    "url": "https://www.moneycontrol.com/news/trends/entertainment/year-in-review-10-best-hindi-films-of-2023-11912331.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Animal-Screen-grab-770x433.jpg",
                    "publishedAt": "2023-12-16T03:38:41Z",
                    "content": "2023 felt like a renaissance in terms of Hindi cinema. After clocking deplorable numbers in 2022, Covid anxieties persisting, the growing influence of OTT and a general dip in quality, the demise of … [+6282 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Sam Bahadur Box Office Collection Day 15: Audiences' interest grows; Vicky Kaushal's movie nearing ₹100 crore | Mint - Mint",
                    "description": "Sam Bahadur Box Office Collection Day 15: The film collected around  ₹2.24 crore on day 15, indicating an uptick in the interest of audience.",
                    "url": "https://www.livemint.com/industry/media/sam-bahadur-box-office-collection-day-15-audiences-interest-grows-vicky-kaushals-movie-nearing-rs-100-crore-11702691738126.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/Sam_Bahadur_3_1701831222047_1702693974743.png",
                    "publishedAt": "2023-12-16T02:51:55Z",
                    "content": "Sam Bahadur Box Office Collection Day 15: Vicky Kaushal's \"Sam Bahadur,\" a biopic on the legendary Indian field marshal Sam Manekshaw, continues its fight for box office dominance on its 15th day. De… [+2465 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Bigg Boss 17: Wild card contestant Ayesha Khan claims that Munawar Faruqui wanted to marry her but inside - Times of India",
                    "description": "Ayesha Khan, a model and actress, will be a wild card contestant on Bigg Boss 17. She has a history with Munawar Faruqui, who denies it. Ayesha wants",
                    "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-wild-card-contestant-ayesha-khan-claims-that-munawar-faruqui-wanted-to-marry-her-but-inside-the-house-he-called-himself-committed-says-i-want-an-apology-from-him/articleshow/106033191.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106033193,width-1070,height-580,imgsize-1039908,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T02:30:00Z",
                    "content": "Another day, another slay by Rashmika Mandanna in latex bodycon number"
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
                        "id": null,
                        "name": "123telugu.com"
                    },
                    "author": null,
                    "title": "Guntur Kaaram: Naga Vamsi deletes his controversial tweet - 123telugu",
                    "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
                    "url": "https://www.123telugu.com/mnews/guntur-kaaram-naga-vamsi-deletes-his-controversial-tweet.html",
                    "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
                    "publishedAt": "2023-12-16T01:30:00Z",
                    "content": "Team Guntur Kaaram faced the wrath of Mahesh Babu fans, who felt that the film’s second single, Oh My Baby, wasn’t good. Lyricist Ramajogayya Sastry took a dig at trollers, but he deactivated his Twi… [+901 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "Arunesh Kumar Sharma",
                    "title": "Horoscope Today, December 16, 2023: Check here Astrological prediction for all zodiac signs - India Today",
                    "description": "Today Horoscope: Astrological prediction for December 16, 2023: Find out answers to your deepest burning questions related to love, health, money, career in this daily horoscope for Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capri…",
                    "url": "https://www.indiatoday.in/horoscopes/story/horoscope-today-december-16-2023-aries-taurus-gemini-cancer-leo-virgo-libra-scorpio-sagittarius-capricorn-aquarius-pisces-2476432-2023-12-16",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/main-tarot-311458-16x9_11.jpg?VersionId=7uLOMVeSPbG74n.mTQ1NnWwgdNilCvrU",
                    "publishedAt": "2023-12-16T01:00:54Z",
                    "content": "Are you expecting a job offer or communication with your romantic partner? Look for your Sun sign in the daily horoscope below and find out.\r\nAries Daily Horoscope \r\nThere will be progress in manager… [+7177 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Neeshita Nyayapati",
                    "title": "Prithviraj about his Salaar co-star Prabhas: I get why they call him ‘darling’ - Hindustan Times",
                    "description": "Prithviraj Sukumaran interview: In an exclusive chat with HT, he opens up about everything from his upcoming films to what he hopes for next year.",
                    "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/prithviraj-sukumaran-about-his-salaar-co-star-prabhas-i-get-why-they-call-him-darling-101702642441034.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/Prithviraj_Salaar_2_1702647885962_1702647893800.jpg",
                    "publishedAt": "2023-12-16T00:58:50Z",
                    "content": "Prithviraj Sukumaran is counting his blessings, literally. Salaar is a dream project to be inthen theres a Malayalam film called The Goat Lifea third directorialreturning to Hindi cinema, he rattles … [+3832 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "VOGUE India"
                    },
                    "author": "Woodstock Witch",
                    "title": "Aquarius Horoscope Today: December 16, 2023 - VOGUE India",
                    "description": "Read VOGUE India's free daily Aquarius horoscope for 16th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
                    "url": "https://www.vogue.in/horoscope/product/aquarius-horoscope-today-december-16-2023/",
                    "urlToImage": "https://media.vogue.in/wp-content/uploads/2021/12/Aquarius-866x487.jpg",
                    "publishedAt": "2023-12-16T00:20:44Z",
                    "content": "Before you say goodbye to 2023, take a moment to realign with your intentions. To ask yourself why you embarked upon this journal to begin with. What do you want to focus on as you move forward and o… [+363 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "VOGUE India"
                    },
                    "author": "VOGUE India",
                    "title": "Sagittarius Horoscope Today: December 16, 2023 - VOGUE India",
                    "description": null,
                    "url": "https://www.vogue.in/horoscope/product/sagittarius-horoscope-today-december-16-2023/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T00:20:35Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "VOGUE India"
                    },
                    "author": "Woodstock Witch",
                    "title": "Scorpio Horoscope Today: December 16, 2023 - VOGUE India",
                    "description": "Read VOGUE India's free daily Scorpio horoscope for 16th December, 2023 to learn more about what the stars have in store for you! Click here for our cosmic tips",
                    "url": "https://www.vogue.in/horoscope/product/scorpio-horoscope-today-december-16-2023/",
                    "urlToImage": "https://media.vogue.in/wp-content/uploads/2019/12/Scorpio.jpg",
                    "publishedAt": "2023-12-16T00:20:28Z",
                    "content": "Haters may call you delulu, and thats okay! You know in your heart of hearts that the law of attraction is always and forever working in your favour and that the universe is doing everything it can t… [+521 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "VOGUE India"
                    },
                    "author": "VOGUE India",
                    "title": "Cancer Horoscope Today: December 16, 2023 - VOGUE India",
                    "description": null,
                    "url": "https://www.vogue.in/horoscope/product/cancer-horoscope-today-december-16-2023/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T00:20:20Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "VOGUE India"
                    },
                    "author": "VOGUE India",
                    "title": "Capricorn Horoscope Today: December 16, 2023 - VOGUE India",
                    "description": null,
                    "url": "https://www.vogue.in/horoscope/product/capricorn-horoscope-today-december-16-2023/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T00:20:18Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "VOGUE India"
                    },
                    "author": "VOGUE India",
                    "title": "Gemini Horoscope Today: December 16, 2023 - VOGUE India",
                    "description": null,
                    "url": "https://www.vogue.in/horoscope/product/gemini-horoscope-today-december-16-2023/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T00:20:03Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "India.com"
                    },
                    "author": "Sundeep Kochar",
                    "title": "Horoscope Today, December 16 By Astrologer Sundeep Kochar: Exercise Extra Caution, Pisces - Zee News",
                    "description": "",
                    "url": "https://zeenews.india.com/photos/entertainment/horoscope-today-december-16-by-astrologer-sundeep-kochar-exercise-extra-caution-pisces-2699264",
                    "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/15/1336692-pisces-horoscope-zodiac.jpg",
                    "publishedAt": "2023-12-15T23:55:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "Shruti Sampat",
                    "title": "Exclusive! Anupamaa's Nidhi Shah on watching Bigg Boss: I think Sidharth and Shehnaaz's season 13 was the - Times of India",
                    "description": "Anupamaa's recent track brings twists and turns leading to a 5-year leap. Kinjal and Toshu return to the show. Nidhi Shah, in an exclusive conversatio",
                    "url": "https://timesofindia.indiatimes.com/tv/news/hindi/exclusive-anupamaas-nidhi-shah-on-watching-bigg-boss-i-think-sidharth-and-shehnaazs-season-13-was-the-best-havent-followed-the-show-after-that/articleshow/106032962.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106032964,width-1070,height-580,imgsize-1321758,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T23:30:00Z",
                    "content": "Another day, another slay by Rashmika Mandanna in latex bodycon number"
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
                    "author": "etimes.in",
                    "title": "Sujoy Ghosh reveals Amitabh Bachchan didn't know his mic was on while murmuring about feeling nervous on - IndiaTimes",
                    "description": "Sujoy Ghosh shared a funny anecdote about Amitabh Bachchan's nervousness during filming. Bachchan had his mic on and unknowingly expressed his nervous",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/sujoy-ghosh-reveals-amitabh-bachchan-didnt-know-his-mic-was-on-while-murmuring-about-feeling-nervous-on-the-first-day-of-shoot/articleshow/106032710.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106032701,width-1070,height-580,imgsize-39240,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T19:47:43Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Alia Bhatt slayed the yellow blossom saree look with a real show-stealer hairstyle - Pics inside - IndiaTimes",
                    "description": "Alia Bhatt shared pictures on Instagram in an adorable yellow saree with a unique hairstyle of double-sided braids tied together with a cute yellow ri",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/alia-bhatt-slayed-the-yellow-blossom-saree-look-with-a-real-show-stealer-hairstyle-pics-inside/articleshow/106032662.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106032681,width-1070,height-580,imgsize-38080,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T19:40:54Z",
                    "content": "Alia Bhatt looks pretty in pink, gives ethnic vibes at friend's mehendi; pens heartwarming note"
                },
                {
                    "source": {
                        "id": null,
                        "name": "allkpop"
                    },
                    "author": "SiyerX",
                    "title": "BTS's debut song from 2013 \"No More Dream\" tops US iTunes chart for the first-time ever - allkpop",
                    "description": "BTS's debut song from 2013, \"No More Dream,\" has achieved a remarkable milestone by topping the US iTunes chart for the first time, a decad…",
                    "url": "https://www.allkpop.com/article/2023/12/btss-debut-song-from-2013-no-more-dream-tops-us-itunes-chart-for-the-first-time-ever",
                    "urlToImage": "https://www.allkpop.com/upload/2023/12/content/151359/1702666748-btsmain.jpg",
                    "publishedAt": "2023-12-15T19:02:47Z",
                    "content": "BTS's debut song from 2013, \"No More Dream,\" has achieved a remarkable milestone by topping the US iTunes chart for the first time, a decade after its release. This historic achievement marks \"No Mor… [+1107 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Dr J.N Pandey",
                    "title": "Virgo Daily Horoscope Today, December 16, 2023 predicts favourable stars - Hindustan Times",
                    "description": "Read Virgo daily horoscope for Dec 16, 2023 to know your astrological predictions. A robust love relationship is the highlight of the day. | Horoscope",
                    "url": "https://www.hindustantimes.com/astrology/horoscope/virgo-daily-horoscope-today-december-16-2023-predicts-favourable-stars-101702651581452.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/virgo_1690875926335_1702658486114.jpg",
                    "publishedAt": "2023-12-15T18:35:07Z",
                    "content": "Virgo (23rd August to 22nd September)\r\nDaily Horoscope Prediction says, handle every crisis with confidence\r\nThe love relationship will be safe today and professional success will also be there. Hand… [+2845 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Dr J.N Pandey",
                    "title": "Leo Daily Horoscope Today, December 16, 2023 predicts health problems in women - Hindustan Times",
                    "description": "Read Leo daily horoscope for Dec 16, 2023 to know your astrological predictions. You are fortunate today in terms of romance. | Horoscope",
                    "url": "https://www.hindustantimes.com/astrology/horoscope/leo-daily-horoscope-today-december-16-2023-predicts-health-problems-for-women-101702651436934.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/leo_monthly_horoscope_1690875818840_1702658830242.jpg",
                    "publishedAt": "2023-12-15T18:34:07Z",
                    "content": "Leo (23rd July to 22nd August)\r\nDaily Horoscope Prediction says, you believe in ideals\r\nAs per predictions, you are fortunate in both personal and professional life. Handle your finances smartly and … [+2818 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "Trisha Bhattacharya",
                    "title": "Did Fighter song 'Sher Khul Gaye' remind you of 'Stayin' Alive'? Internet thinks so - India Today",
                    "description": "The first song from 'Fighter', 'Sher Khul Gaye', seems to share rhythmic similarities with Bee Gees' 'Stayin' Alive'. Are these similarities a result of direct borrowing or a testament to the unifying power of music? Let's delve into it.",
                    "url": "https://www.indiatoday.in/movies/bollywood/story/did-fighter-song-sher-khul-gaye-remind-you-of-stayin-alive-internet-thinks-so-hrithik-roshan-deepika-padukone-anil-kapoor-siddharth-anand-2476394-2023-12-15",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/is-sher-khul-gaye-inspired-from-stayin-alive-154153194-16x9_0.jpg?VersionId=2lthcziIYjkA.4nEFKZSc3VeSjQqQ9Ml",
                    "publishedAt": "2023-12-15T17:37:19Z",
                    "content": "The pulsating beat of Bee Gees' 'Stayin' Alive' has reverberated across decades and cultures, becoming a global anthem of resilience. But did its infectious rhythm find an unlikely echo in the heart … [+2281 chars]"
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
                    "publishedAt": "2023-12-15T16:32:23Z",
                    "content": "Kannagi Movie Synopsis: 'Four' women facing four different issues in their relationships try to navigate those problems and lead their lives, but will society be favourable towards them?Kannagi Movie… [+2839 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": null,
                    "title": "Anushka Sharma’s picture cradling her baby bump grabs eyeballs on the internet; find out the truth - Times of India",
                    "description": "Anushka Sharma has been rumoured to be pregnant for the second time and has often made headlines for some of her recent appearances. The actress has been spotted wearing loose outfits multiple times since the rumours of her second pregnancy started. Amid all …",
                    "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/anushka-sharmas-picture-cradling-her-baby-bump-grabs-eyeballs-on-the-internet-find-out-the-truth/videoshow/106026606.cms",
                    "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106026606,imgsize-57010.cms",
                    "publishedAt": "2023-12-15T13:26:39Z",
                    "content": "Dec 15, 2023, 08:23PM ISTSource: etimes.inAnushka Sharma has been rumoured to be pregnant for the second time and has often made headlines for some of her recent appearances. The actress has been spo… [+1117 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Filmcompanion.in"
                    },
                    "author": "Harshini S V",
                    "title": "Fight Club Review: Technical Finesse Saves This Action Film From Its Narrative Setbacks - FILM COMPANION",
                    "description": "Director: Abbas A RahmathWriters: Abbas A Rahmath, Sasi, Vijay KumarCast: Vijay Kumar, Avinash Raghudevan, Kaarthekeyen SanthanamDuration: 139 minutesAvailable",
                    "url": "https://www.filmcompanion.in/reviews/tamil-review/fight-club-review-technical-finesse-saves-this-action-film-from-its-narrative-setbacks-vijay-kumar-avinash-raghudevan",
                    "urlToImage": "https://media.assettype.com/filmcompanion%2F2023-12%2F0e19889c-0361-4c80-8bfe-88e2f92879d2%2FReview_lead_fight_club.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
                    "publishedAt": "2023-12-15T13:22:49Z",
                    "content": "Director: Abbas A Rahmath\r\nWriters: Abbas A Rahmath, Sasi, Vijay Kumar\r\nCast: Vijay Kumar, Avinash Raghudevan, Kaarthekeyen Santhanam\r\nDuration: 139 minutes\r\nAvailable in: Theatres\r\nAbbas A Rahmath t… [+1387 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Galatta.com"
                    },
                    "author": "Vivek Raj",
                    "title": "DD3 update: Dhanushs third film as a director after D50, Sarathkumar to appear in a new avatar - first official statement out - galatta.com",
                    "description": "Dhanush fans are getting non-stop treats as it has now been revealed that he is kicking off his third directorial with Sarathkumar cast in a big role.",
                    "url": "https://www.galatta.com/tamil/movie/news/dd3-dhanush-next-movie-director-after-d50-sarathkumar-raadhika-varalaxmi-rayane-mithun/",
                    "urlToImage": "https://www.galatta.com/assets/news/1702649508-DD3-update-Dhanush-s-third-film-as-a-director-after-D50-Sarathkumar-to-appear-in-a-new-avatar-first-official-statement-out-ogimg.jpg",
                    "publishedAt": "2023-12-15T13:02:00Z",
                    "content": "Dhanush fans are getting non-stop treats as it has now been revealed that he is kicking off his third directorial with Sarathkumar cast in a big role. Iconic Tamil actress Raadhika Sarathkumar droppe… [+2139 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "The Indian Express",
                    "title": "Amitabh Bachchan recalls when Shah Rukh Khan scolded Suhana Khan over taking a dip in pool: ‘Maybe only time my dad said no to me’ - The Indian Express",
                    "description": null,
                    "url": "https://indianexpress.com/article/entertainment/bollywood/amitabh-bachchan-recalls-when-shah-rukh-khan-scolded-suhana-khan-over-taking-a-dip-in-pool-maybe-only-time-my-dad-said-no-to-me-9069131/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T13:00:44Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Blockbuster Celeb Spotting: Shah Rukh Khan, Prithviraj Sukumaran - NDTV",
                    "description": "Shah Rukh Khan, Prithviraj Sukumaran and other stars were clicked in different parts of Mumbai.",
                    "url": "https://www.ndtv.com/photos/entertainment/blockbuster-celeb-spotting-shah-rukh-khan-prithviraj-sukumaran-106536",
                    "urlToImage": "https://drop.ndtv.com/albums/ENTERTAINMENT/blockbuster-cel_638382575951112384/638382575951112384_640x480.jpeg",
                    "publishedAt": "2023-12-15T11:49:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": null,
                    "title": "Janhvi Kapoor says she ‘regrets’ telling THIS to her late mother Sridevi: ‘I know she was dying to…’ - Times of India",
                    "description": "Janhvi Kapoor recently opened up about how she told her mother Sridevi not come on the set of her debut film ‘Dhadak’. During an interaction at an event, the actress reportedly said ‘People were already saying “You got your first film because you are Sridevi'…",
                    "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/janhvi-kapoor-says-she-regrets-telling-this-to-her-late-mother-sridevi-i-know-she-was-dying-to/videoshow/106019385.cms",
                    "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106019385,imgsize-51948.cms",
                    "publishedAt": "2023-12-15T09:47:44Z",
                    "content": "Dec 15, 2023, 03:17PM ISTSource: etimes.inJanhvi Kapoor recently opened up about how she told her mother Sridevi not come on the set of her debut film Dhadak. During an interaction at an event, the a… [+1302 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Varun Tej has the sweetest birthday wish for Lavanya: ‘Thank you for being you’ - Hindustan Times",
                    "description": "Lavanya Tripathi turns a year older on December 15 and the Mega family penned down sweet wishes for her on the special day.",
                    "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/varun-tej-birthday-wish-lavanya-tripathi-101702629697339.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/Varun_Tej_Lavanya_Birthday_1702632613238_1702632624488.jpg",
                    "publishedAt": "2023-12-15T09:45:45Z",
                    "content": "Its Lavanya Tripathis birthday and the Mega family had special wishes for her. Her husband Varun Tej, sister-in-law Niharika Konidela and cousin Sai Dharam Tej took to social media to share beautiful… [+2077 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "The Indian Express",
                    "title": "Mukti Mohan’s star-studded wedding: Kapil Sharma, AR Rahman, Ayushmann Khurrana, Bharti Singh attend - The Indian Express",
                    "description": null,
                    "url": "https://indianexpress.com/photos/entertainment-gallery/mukti-mohan-star-studded-wedding-kapil-sharma-ar-rahman-ayushmann-khurrana-bharti-singh-attend-9069538/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T09:40:07Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tracktollywood.com"
                    },
                    "author": "Aditya",
                    "title": "Prabhas finally talks about Salaar, stating Prashant Neel as the best director - TrackTollywood",
                    "description": "Learn why the Pan Indian star Prabhas has praised Prashant Neel as the best director for Salaar Part-1 Ceasefire.",
                    "url": "https://tracktollywood.com/prabhas-finally-talks-about-salaar-stating-prashant-neel-as-the-best-director/",
                    "urlToImage": "https://tracktollywood.com/wp-content/uploads/2023/12/Prabhas_V_jpg-442x260-3g.webp",
                    "publishedAt": "2023-12-15T09:14:10Z",
                    "content": "Prabhas finally talks about Salaar, stating Prashant Neel as the best director. It is widely known that Salaar is the most awaited project coming from the Pan Indian star Prabhas compound. Directed b… [+1655 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "PINKVILLA"
                    },
                    "author": "Goutham S",
                    "title": "Best Actress of 2023 POLL: Trisha to Samantha; Who do you believe deserves the title? - PINKVILLA",
                    "description": "The Year Is Coming To An End And It’s Time To Vote For Your Favorite Artist. Here’s A List Of Top South Actresses Of 2023, For You To Vote For And Decide Who Earned The Title Of Best Actress.",
                    "url": "https://www.pinkvilla.com/entertainment/south/best-actress-of-2023-poll-trisha-to-samantha-who-do-you-believe-deserves-the-title-1265456",
                    "urlToImage": "https://www.pinkvilla.com/images/2023-12/272729326_best-actress-of-2023-pol-jpg.jpg",
                    "publishedAt": "2023-12-15T09:04:17Z",
                    "content": "The year 2023 has provided the audience with quite a nuanced variety of choices in terms of acting and characterization in films. The age-old days when actresses were only scaled on terms of glamour … [+3755 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Deepika Padukone offers prayers at Tirupati temple with her family. Watch - Hindustan Times",
                    "description": "Deepika Padukone was spotted at the Tirupati temple on Friday morning with Anisha Padukone as well as their father Prakash Padukone and mother Ujjala Padukone. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/deepika-padukone-prays-tirupati-temple-video-fighter-anisha-padukone-101702629948641.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/Deepika_Padukone_prays_Tirupati_temple_1702630251018_1702630268570.jpg",
                    "publishedAt": "2023-12-15T09:03:49Z",
                    "content": "Deepika Padukone visited the Tirupati Balaji Temple amid tight security on Friday. The actor could be seen seeking the blessings of Lord Balaji with her father Prakash Padukone, mother Ujjala Padukon… [+2239 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Esha Deol's Twist To Bobby Deol's Viral Animal Dance Sequence - NDTV Movies",
                    "description": "Esha Deol is seen grooving with a dance troupe in the Instagram video",
                    "url": "https://www.ndtv.com/entertainment/guess-which-song-esha-deol-is-rehearsing-to-in-this-fun-video-4678117",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/o7bci2m_-esha-deol-_625x300_15_December_23.jpg",
                    "publishedAt": "2023-12-15T08:36:22Z",
                    "content": "Esha Deol in a still from the video. (courtesy: iameshadeol)\r\nNew Delhi: In addition to being a talented actress, Esha Deol is known for her dancing prowess. Esha is a trained classical dancer like h… [+1846 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Pooja Dadlani swiftly takes care of Shah Rukh Khan's shades as he seeks blessings at Shirdi temple - IndiaTimes",
                    "description": "Shah Rukh Khan seeks blessings at Shirdi temple with daughter Suhana Khan ahead of his final release in 2023. Pooja Dadlani, SRK's manager, attentivel",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/pooja-dadlani-swiftly-takes-care-of-shah-rukh-khans-shades-as-he-seeks-blessings-at-shirdi-temple/articleshow/106016287.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106016283,width-1070,height-580,imgsize-76542,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T08:12:18Z",
                    "content": "Diana Penty brings home the Christmas spirit, shares glimpse of her festive preparations"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Entertainment Desk",
                    "title": "‘I still cry’: Madhu Chopra regrets sending daughter Priyanka Chopra to boarding school, calls actor a ‘fearless mom’ - The Indian Express",
                    "description": "During a latest conversation, Madhu Chopra opened up about feeling guilty about one of the decisions that she made while raising Priyanka Chopra.",
                    "url": "https://indianexpress.com/article/entertainment/bollywood/madhu-chopra-regrets-sending-daughter-priyanka-chopra-to-boarding-school-calls-actor-a-fearless-mom-9069379/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/madhu-chopra-priyanka-chopra.jpeg",
                    "publishedAt": "2023-12-15T08:03:26Z",
                    "content": "Priyanka Chopra Jonas is raising her daughter Malti Marie Jonas like a “superwoman”. The actor’s mother Madhu Chopra recently shared how Priyanka is raising her daughter into a strong individual and … [+1864 chars]"
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
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "If December Feels Sweltering, Disha Patani In A Leopard Print Corset And Denim Shorts Is To Blame - NDTV",
                    "description": "Trust Disha Patani to increase the temperature even in the coldest month of the year",
                    "url": "https://www.ndtv.com/lifestyle/for-mouni-roys-badmaash-restaurant-launch-if-december-feels-sweltering-disha-patani-in-a-leopard-print-corset-and-denim-shorts-with-boots-is-to-blame-4678272",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/tb3k6ur_disha-patani_625x300_15_December_23.jpg",
                    "publishedAt": "2023-12-15T07:46:47Z",
                    "content": "If December Feels Sweltering, Disha In A Corset And Shorts Is To Blame\r\nWhile the month of December usually brings chills with its arrival, the city of Mumbai saw temperatures shoot up last night. Gl… [+1430 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Akshay Kumar, Rajkumar Hirani, Sanjay Leela Bhansali, Rohit Shetty and others to grace Shri Ram Mandir op - IndiaTimes",
                    "description": "Furthermore, the event will witness the presence of esteemed personalities from the South Indian film industry, including the legendary Rajinikanth, t",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/akshay-kumar-rajkumar-hirani-sanjay-leela-bhansali-rohit-shetty-and-others-to-grace-shri-ram-mandir-opening-ceremony-report/articleshow/106015218.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106015218,width-1070,height-580,imgsize-34638,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T07:38:12Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Mouni Roy's Glitzy Gold Backless Dress Brings The Magic Of Golden Hour At Night - NDTV",
                    "description": "Mouni Roy's backless gold mini dress is giving a hot spin to holiday dressing",
                    "url": "https://www.ndtv.com/lifestyle/for-badmaash-restaurant-launch-in-mumbai-mouni-roys-glitzy-gold-backless-dress-brings-the-magic-of-golden-hour-at-night-4677962",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/b9s0nb8o_fashion_625x300_15_December_23.jpg",
                    "publishedAt": "2023-12-15T07:32:30Z",
                    "content": "As we're approaching the end of the calendar, it clearly means more striking fashion statements. Glitzy silhouettes have been a hit this year and it is quite obvious for them to smoothly take over th… [+1330 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Sunny Deol opens up on the viral 'drinking' video, asserts it was part of a shoot - timesofindia.com",
                    "description": "Sunny Deol clarifies viral video misunderstanding, stating it was from a shoot for his upcoming film 'Safar', not real. He dismisses the incident, say",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/sunny-deol-opens-up-on-the-viral-drinking-video-asserts-it-was-part-of-a-shoot/articleshow/106014749.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106014728,width-1070,height-580,imgsize-46386,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T07:21:36Z",
                    "content": "Abrar Alert! Bobby Deol strikes iconic 'Animal' pose, creates buzz at Mumbai airport arrival- WATCH IT"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bollywoodshaadis.com"
                    },
                    "author": "",
                    "title": "Sunny Deol And Alleged Ladylove, Dimple Kapadia Spotted At A Clinic In Viral Video, Netizens React - BollywoodShaadis.com",
                    "description": "Sunny Deol and his alleged ladylove, Dimple Kapadia, were allegedly spotted at a clinic together. Here's how the netizens reacted to the viral video of the duo!",
                    "url": "https://www.bollywoodshaadis.com/articles/sunny-deol-and-dimple-kapadia-spotted-at-a-clinic-47419",
                    "urlToImage": "https://www.bollywoodshaadis.com/img/article-l-20231234810234337423000.webp",
                    "publishedAt": "2023-12-15T04:57:29Z",
                    "content": "FOLLOW US ON GOOGLE NEWS,\r\n FLIPBOARD,\r\n FACEBOOK,\r\n WHATSAPP CHANNEL\r\nSunny Deol has been garnering limelight ever since he made his comeback with the blockbuster film, Gadar 2. Apart from his profe… [+3499 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "PTI",
                    "title": "Bobby Deol calls Abrar from Animal romantic: ‘He has three wives’ - Hindustan Times",
                    "description": "Bobby Deol decided not to approach his role of Abrar Haque in Animal as the villain. He even went on to call him ‘romantic’. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/bobby-deol-calls-abrar-haque-from-animal-romantic-he-has-three-wives-101702614339077.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/abrar_haque_1702614591579_1702614604989.png",
                    "publishedAt": "2023-12-15T04:49:48Z",
                    "content": "Actor Bobby Deol, who played the antagonist in the recently released Animal, on Thursday said he didn't look at his character as a villain but as someone with childhood trauma. The 54-year-old actor … [+2296 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TNN",
                    "title": "Pradeep and Krithi Shetty pair up for Vignesh Shivan's 'LIC' - IndiaTimes",
                    "description": "The film titled 'LIC' (Love Insurance Corporation) has actress Krithi Shetty pairing up opposite Pradeep Ranganathan with SJ Surya playing an importa",
                    "url": "https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/pradeep-and-krithi-shetty-pair-up-for-vignesh-shivans-lic/articleshow/106005326.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106005326,width-1070,height-580,imgsize-92658,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T02:09:13Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Healthshots.com"
                    },
                    "author": "Sheetal Shaparia",
                    "title": "Health Horoscope Today December 15, 2023: Start making small steps towards your health goals - Health shots",
                    "description": "Health Horoscope Today, December 15, 2023: Here's what your daily health horoscope says about your health, work and relationships.",
                    "url": "https://www.healthshots.com/horoscope/health-horoscope-today-december-15-2023-start-making-small-steps-towards-your-health-goals/",
                    "urlToImage": "https://images.healthshots.com/healthshots/en/uploads/2022/10/17155721/HH-Friday.jpg",
                    "publishedAt": "2023-12-14T23:30:20Z",
                    "content": "Aries Health Horoscope Today\r\nYou will feel extremely energetic today which will be both extremely exciting and tiring at the same time. Take good care of your physical as well as mental health today… [+9069 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Randeep Hooda's priceless reaction on seeing his beautiful wife Lin Laishram before their wedding recepti - IndiaTimes",
                    "description": "Randeep Hooda and Lin Laishram hosted a star-studded wedding reception in Mumbai for their Bollywood friends. In a BTS video, Lin gets dolled up while",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/randeep-hoodas-priceless-reaction-on-seeing-his-beautiful-wife-lin-laishram-before-their-wedding-reception-is-all-things-love-watch-video/articleshow/106001142.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106001142,width-1070,height-580,imgsize-40432,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-14T18:25:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bollywood Hungama"
                    },
                    "author": "Bollywood Hungama",
                    "title": "22 Years of Kabhi Khushi Kabhie Gham: Internet buzzes over interaction between Kareena Kapoor Khan’s iconic ‘Poo’ and Ranveer Singh’s ‘Rocky’; fans demand a crossover of characters - Bollywood Hungama",
                    "description": "22 Years of Kabhi Khushi Kabhie Gham: Internet buzzes over interaction between Kareena Kapoor Khan’s iconic ‘Poo’ and Ranveer Singh’s ‘Rocky’; fans demand a crossover of characters Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebri…",
                    "url": "https://www.bollywoodhungama.com/news/features/22-years-kabhi-khushi-kabhie-gham-internet-buzzes-interaction-kareena-kapoor-khans-iconic-poo-ranveer-singhs-rocky-fans-dema/",
                    "urlToImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/12/22-Years-of-Kabhi-Khushi-Kabhie-Gham-Internet-buzzes-over-interaction-between-Kareena-Kapoor-Khans-iconic-‘Poo-and-Ranveer-Singhs-‘Rocky-fans-demand-a-crossover-of-characters-1.jpg",
                    "publishedAt": "2023-12-14T13:54:34Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Greatandhra.com"
                    },
                    "author": "Venkat",
                    "title": "Pics: Janhvi Kapoor Sets 'Dark Waters' On Fire.. - Greatandhra",
                    "description": "In yet another display of Janhvi Kapoor's Instagram prowess, the actress treated her followers to fresh snapshots from her photo diaries.",
                    "url": "https://www.greatandhra.com/movies/news/pics-janhvi-kapoor-sets-dark-waters-on-fire-134332",
                    "urlToImage": "https://www.greatandhra.com/newphotos10/janhvi11702554677.jpg",
                    "publishedAt": "2023-12-14T11:51:17Z",
                    "content": "In yet another display of Janhvi Kapoor's Instagram prowess, the actress treated her followers to fresh snapshots from her photo diaries. \r\nJanhvi, who seems to have mastered the art of Instagram, ef… [+824 chars]"
                }
            ]
        },
        {
            "science": [
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
                    "content": "India Shelter Finance IPO Allotment Status, GMP Today: Check Listing Date, Subscription Status And Latest Grey Market Premium"
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
                        "name": "WION"
                    },
                    "author": "WION Web Team",
                    "title": "NASA identifies 17 exoplanets hosting `hidden` oceans beneath icy shells, erupting geysers - WION",
                    "description": "NASA identifies 17 exoplanets hosting hidden oceans beneath icy shells, erupting geysers",
                    "url": "https://www.wionews.com/science/nasa-identifies-17-exoplanets-hosting-hidden-oceans-beneath-icy-shells-erupting-geysers-670260",
                    "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/16/399523-untitled-design-2023-12-16t152122390.png",
                    "publishedAt": "2023-12-16T09:26:05Z",
                    "content": "NASA has expanded the search for extraterrestrial life by identifying 17 exoplanets with the potential for habitable oceans hidden beneath their icy shells. \"Water from these oceans could occasionall… [+2226 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Astronaut's iceberg photos from space raise an alarm about climate change - IndiaTimes",
                    "description": "Trending News: Astronaut Andreas Mogensen, commander of Expedition 70, shares stunning photos of giant icebergs vis",
                    "url": "https://timesofindia.indiatimes.com/etimes/trending/astronauts-iceberg-photos-from-space-raise-an-alarm-about-climate-change/articleshow/106042145.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106042304,width-1070,height-580,imgsize-18228,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T07:30:00Z",
                    "content": "Giant icebergs, visible even from the International Space Station's (ISS) orbit, are serving as a stark visual reminder of the ongoing impact of climate change, according to astronaut Andreas Mogense… [+3811 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Citylife.capetown"
                    },
                    "author": "Mampho Brescia",
                    "title": "How many missions has ISRO done on moon? - CityLife",
                    "description": "How many missions has ISRO done on moon? - CityLife",
                    "url": "https://citylife.capetown/uncategorized/how-many-missions-has-isro-done-on-moon/532780/",
                    "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_men_d8cab942-d6c4-4002-8649-b2150dac7158.jpeg",
                    "publishedAt": "2023-12-16T06:45:52Z",
                    "content": "How many missions has ISRO done on the moon?\r\nSummary:The Indian Space Research Organisation (ISRO) has undertaken several missions to explore the moon. These missions have contributed significantly … [+3515 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Citylife.capetown"
                    },
                    "author": "Gabriel Botha",
                    "title": "Is ISRO involved in ISS? - CityLife",
                    "description": "Ist ISRO an der ISS beteiligt? - Stadt leben",
                    "url": "https://citylife.capetown/de/uncategorized/is-isro-involved-in-iss/532750/",
                    "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_new_technologies_high_resolution_9a02003b-9fdb-45ce-a5da-144c7efaaeda.jpeg",
                    "publishedAt": "2023-12-16T06:25:39Z",
                    "content": "Zusammenfassung:Die Indian Space Research Organization (ISRO) hat bedeutende Fortschritte auf dem Gebiet der Weltraumforschung und -technologie gemacht. Allerdings stellt sich häufig die Frage, ob IS… [+4025 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Citylife.capetown"
                    },
                    "author": "Gabriel Botha",
                    "title": "Is ISRO going to Mars? - CityLife",
                    "description": "Is ISRO going to Mars? - CityLife",
                    "url": "https://citylife.capetown/uncategorized/is-isro-going-to-mars/532714/",
                    "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_robotic_automatization_high_resolutio_f89b4d1f-e856-47a1-b311-9b93122397d6.jpeg",
                    "publishedAt": "2023-12-16T06:09:46Z",
                    "content": "Summary:The Indian Space Research Organisation (ISRO) has been making significant strides in the field of space exploration. With successful missions to the Moon and Mars in the past, there has been … [+2937 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Newstodaynet.com"
                    },
                    "author": "Agency",
                    "title": "Study reveals new genes can arise from nothing - News Today",
                    "description": "Living species' genes encode their complexity, but where do these genes come from? The University of Helsinki researchers answered long-standing questions about the formation of tiny regulatory genes and outlined a method that generates their DNA palindromes.",
                    "url": "https://newstodaynet.com/2023/12/16/study-reveals-new-genes-can-arise-from-nothing/",
                    "urlToImage": "https://newstodaynet.com/wp-content/uploads/2023/12/download-18-10.jpg",
                    "publishedAt": "2023-12-16T06:05:41Z",
                    "content": "Living species’ genes encode their complexity, but where do these genes come from? The University of Helsinki researchers answered long-standing questions about the formation of tiny regulatory genes… [+1190 chars]"
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
                        "name": "Udayavani.com"
                    },
                    "author": "Udayavani English",
                    "title": "Scientists generate compounds with diamond-like hardness - Udayavani English",
                    "description": null,
                    "url": "https://www.udayavani.com/english-news/scientists-generate-compounds-with-diamond-like-hardness",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T05:05:48Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "ISRO’s Shukrayaan mission to Venus & what is its primary objective - ThePrint",
                    "description": "ISRO is yet to confirm the official launch and date of its Venus Orbiter Mission (Shukrayaan), and might launch it after the second mission to Mars, expected...",
                    "url": "https://www.youtube.com/watch?v=TAvQhYQ5hqo",
                    "urlToImage": "https://i.ytimg.com/vi/TAvQhYQ5hqo/maxresdefault.jpg",
                    "publishedAt": "2023-12-16T04:58:50Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "msnNOW"
                    },
                    "author": null,
                    "title": "Geminids meteor shower lights up night sky with a greenish hue - MSN",
                    "description": null,
                    "url": "https://www.msn.com/en-in/news/techandscience/geminids-meteor-shower-lights-up-night-sky-with-a-greenish-hue/ar-AA1lA7tT?ocid=weather-verthp-feeds",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T04:47:23Z",
                    "content": null
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
                        "name": "Ticker.tv"
                    },
                    "author": "Tanya King",
                    "title": "A New Era for Space Exploration - TickerTV News",
                    "description": "A New Era for Space Exploration - TickerTV News",
                    "url": "https://ticker.tv/news/the-sussexes-must-have-felt-on-top-of-the-world-with-spare/340713/",
                    "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_realistic_photo_of_women_using_smartphone_or_computer_on_974935d8-7c14-4c0a-89fd-7b04f3212d59.png",
                    "publishedAt": "2023-12-16T03:33:12Z",
                    "content": "Summary: This article explores the exciting advancements in space exploration, highlighting the significant contributions of astronauts and scientists in expanding our knowledge of the universe.\r\nIn … [+2027 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Tech",
                    "title": "Aditya-L1 mission: ISRO's SUIT captures stunning Sun imagery and scientific breakthroughs - HT Tech",
                    "description": "AdityaL1 mission ISROs SUIT captures stunning Sun imagery and scientific breakthroughs AdityaL1 mission Indias pioneering space observatory for solar study launched by ISRO on September 2 has reached a groundbreaking milestone on its way yo the Sun. Unveiling…",
                    "url": "https://tech.hindustantimes.com/web-stories/adityal1-mission-isros-suit-captures-stunning-sun-imagery-and-scientific-breakthroughs-71702713747149.html",
                    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/16/1600x900/aditya_2_1693206516183_1702713868133.PNG/",
                    "publishedAt": "2023-12-16T02:43:22Z",
                    "content": "Photo Credit: ISRO\r\n Aditya-L1 mission, India's pioneering space observatory for solar study, launched by ISRO on September 2, has reached a groundbreaking milestone on its way yo the Sun.\r\nPhoto Cre… [+1994 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI News Desk",
                    "title": "Biggest solar flare in years temporarily disrupts radio signals on Earth - IndiaTimes",
                    "description": "Science News: A NASA telescope captured the biggest solar flare in years, causing radio interference on Earth. The flare, accompanied by a massive radio burst, affe",
                    "url": "https://timesofindia.indiatimes.com/home/science/biggest-solar-flare-in-years-temporarily-disrupts-radio-signals-on-earth/articleshow/106036320.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106036327,width-1070,height-580,imgsize-1886410,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T02:33:25Z",
                    "content": "<ul><li>News</li>\r\n<li>Science News</li>\r\n<li>Biggest solar flare in years temporarily disrupts radio signals on Earth</li></ul>\r\nA NASA telescope captured the biggest solar flare in years, causing r… [+459 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Reuters",
                    "title": "SpaceX delays launch of X-37B robot spaceplane to December 28 | Mint - Mint",
                    "description": "SpaceX targets December 28 for launch of the US military's secretive X-37B spaceplane.",
                    "url": "https://www.livemint.com/technology/tech-news/spacex-delays-launch-of-x-37b-robot-spaceplane-to-december-28-11702693457233.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/SPACE-EXPLORATION--0_1702693819584_1702693864269.JPG",
                    "publishedAt": "2023-12-16T02:32:07Z",
                    "content": "SpaceX said it was targeting Thursday, December 28 for the launch of the US military's X-37B robot spaceplane on its seventh mission to orbit."
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
                        "name": "Ticker.tv"
                    },
                    "author": "Tanya King",
                    "title": "New Insights on the Early Universe Unveiled James Webb Space Telescope - TickerTV News",
                    "description": "New Insights on the Early Universe Unveiled James Webb Space Telescope - TickerTV News",
                    "url": "https://ticker.tv/news/james-webb-space-telescope-pierces-through-dust-to-find-an-ancient-ghostly-galaxy/340576/",
                    "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_realistic_photo_of_women_using_smartphone_or_computer_on_39080f96-879f-45cc-a585-c73341203c09.png",
                    "publishedAt": "2023-12-15T23:13:37Z",
                    "content": "In a recent study, researchers using the powerful James Webb Space Telescope have captured an image of a distant galaxy known as AzTECC71, providing valuable insights into the early universe. Althoug… [+1881 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "All about NASA's PACE mission to study Earth's clouds & oceans | WION Originals - WION",
                    "description": "NASA is gearing up for the launch of PACE mission in 2024. The mission's objective is to enhance the understanding of Earth's atmosphere. PACE stands for Pla...",
                    "url": "https://www.youtube.com/watch?v=OzwYH6_R0_M",
                    "urlToImage": "https://i.ytimg.com/vi/OzwYH6_R0_M/maxresdefault.jpg",
                    "publishedAt": "2023-12-15T23:00:14Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Mirage News"
                    },
                    "author": "Mirage News",
                    "title": "Blue Dragon Sliced Through Ancient Pacific, Popular Science Reveals - Mirage News",
                    "description": null,
                    "url": "https://www.miragenews.com/blue-dragon-sliced-through-ancient-pacific-1145336/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T20:04:00Z",
                    "content": null
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
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "How the missing tomatoes in space were found, NASA explains - VideoFromSpace",
                    "description": "Two tomatoes from the International Space Station's hydroponic \"farm\"went missing in 2022. Learn how they were recently found. Full Story: https://www.space....",
                    "url": "https://www.youtube.com/watch?v=imme79LxDTM",
                    "urlToImage": "https://i.ytimg.com/vi/imme79LxDTM/maxresdefault.jpg",
                    "publishedAt": "2023-12-15T18:41:52Z",
                    "content": null
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
                    "author": "Gabriel Botha",
                    "title": "Canada's Wildfire Carbon Emissions Skyrocket in 2023 - CityLife",
                    "description": "Canada's Wildfire Carbon Emissions Skyrocket in 2023 - CityLife",
                    "url": "https://citylife.capetown/space/canada-produced-nearly-a-quarter-of-the-global-wildfire-emissions-in-2023-report/532007/",
                    "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_medicine_technologies_of_XXI_century__6dd35c80-ffda-4dc9-a4aa-80f8162ad91c.jpeg",
                    "publishedAt": "2023-12-15T18:20:46Z",
                    "content": "A recent report by Copernicus, an environmental observation department of the European Union’s Space program, has revealed that Canada’s wildfires in 2023 accounted for a staggering 23% of the global… [+2237 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Trisha Sengupta",
                    "title": "Take a tour of our solar system with these breathtaking pics by NASA - Hindustan Times",
                    "description": "Year Ender 2023: NASA often takes to social media to share posts about our solar system that leave people stunned. | Trending",
                    "url": "https://www.hindustantimes.com/trending/year-ender-2023-take-a-tour-of-our-solar-system-with-these-breathtaking-pics-by-nasa-101702655086373.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/Viral_Instagram_NASA_Solar_System_Year_Ender_2023_1702656639913_1702656669318.png",
                    "publishedAt": "2023-12-15T17:14:05Z",
                    "content": "The National Aeronautics and Space Administration (NASA) helps us get a glimpse of the awe-inspiring beauty of our celestial neighbours through varied social media posts. Each year, they share posts … [+4433 chars]"
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
                        "name": "indy100"
                    },
                    "author": "Catherine Shuttleworth",
                    "title": "12-billion-year-old body of water discovered floating in space | indy100 - indy100",
                    "description": "Two teams of astronomers led by scientists at Caltech, have discovered the largest reservoir of water ever detected in the universe. And it's 30 billion trillion miles away.Yep, you read that correctly. The largest reservoir has been found in the cosmos, more…",
                    "url": "https://www.indy100.com/science-tech/giant-reservoir-floating-in-space-2666604998",
                    "urlToImage": "https://www.indy100.com/media-library/nasa-is-sending-this-briefcase-sized-spacecraft-to-orbit-the-moon-in-search.jpg?id=50688490&width=1200&height=600&coordinates=0%2C0%2C0%2C816",
                    "publishedAt": "2023-12-15T15:42:42Z",
                    "content": "Two teams of astronomers led by scientists at Caltech, have discovered the largest reservoir of water ever detected in the universe. And it's 30 billion trillion miles away.\r\nYep, you read that corre… [+2055 chars]"
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
                        "name": "Science.org"
                    },
                    "author": "Science",
                    "title": "ScienceAdviser: Of all the breakthroughs in 2023, what topped Science's list? - Science",
                    "description": null,
                    "url": "https://www.science.org/content/article/scienceadviser-all-breakthroughs-2023-what-topped-science-s-list",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T15:29:12Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Republic World"
                    },
                    "author": "Harsh Vardhan",
                    "title": "NASA posts video of Orion's hellish re-entry through atmosphere during Artemis 1 - Republic World",
                    "description": "Taking to X, NASA posted a video captured from inside the Orion spacecraft which returned after a 26-day journey around the Moon.",
                    "url": "https://www.republicworld.com/science/space/nasa-posts-video-of-orion-s-hellish-re-entry-through-atmosphere-during-artemis-1",
                    "urlToImage": "https://img.republicworld.com/rimages/WhatsAppImage2023-12-15at8.55.54PM-170265398583816_9.webp",
                    "publishedAt": "2023-12-15T15:26:00Z",
                    "content": "Axiom Space is kickstarting 2024 with a big-ticket mission to the International Space Station (ISS). The company announced on December 13 that it is targeting the launch of its third crewed mission o… [+2002 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NASA"
                    },
                    "author": "Leah D. Cheshier",
                    "title": "Sierra Space's Dream Chaser New Station Resupply Spacecraft for NASA - NASA",
                    "description": "NASA and Sierra Space are making progress on the first flight of the company’s Dream Chaser spacecraft to the International Space Station. The uncrewed cargo",
                    "url": "https://www.nasa.gov/missions/station/commercial-resupply/sierra-spaces-dream-chaser-new-station-resupply-spacecraft-for-nasa/",
                    "urlToImage": "https://www.nasa.gov/wp-content/uploads/2023/12/01-near-space-v2-01-high-res.jpg",
                    "publishedAt": "2023-12-15T14:39:18Z",
                    "content": "NASA and Sierra Space are making progress on the first flight of the companys Dream Chaser spacecraft to the International Space Station. The uncrewed cargo spaceplane is planned to launch its demons… [+5258 chars]"
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
                        "name": "Citylife.capetown"
                    },
                    "author": "Vicky Stavropoulou",
                    "title": "New Discovery: Stunning Image of Andromeda Galaxy Reveals Unexpected Secrets - CityLife",
                    "description": "New Discovery: Stunning Image of Andromeda Galaxy Reveals Unexpected Secrets - CityLife",
                    "url": "https://citylife.capetown/ai/daily-telescope-one-of-the-most-stunning-andromeda-photos-ive-ever-seen/531660/",
                    "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_future_of_AI_men_6e7840a7-596d-4950-875c-617aafe311d9.jpeg",
                    "publishedAt": "2023-12-15T14:21:46Z",
                    "content": "A captivating new image of the Andromeda Galaxy has astounded astronomers with its breathtaking beauty and unexpected clarity. This stunning photograph, brought to us by the talented members of the A… [+2204 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "WION"
                    },
                    "author": "WION Web Team",
                    "title": "Plans afoot to build lighthouses on Moon for future lunar missions - WION",
                    "description": "Plans afoot to build lighthouses on Moon for future lunar missions",
                    "url": "https://www.wionews.com/science/giant-lighthouses-being-planned-to-be-built-on-moon-for-future-explorations-669499",
                    "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/14/399081-saber.png",
                    "publishedAt": "2023-12-15T13:01:15Z",
                    "content": "The Moon has fascinated humans for centuries, yet it is only in modern times that special explorations are being carried out to study the physiological aspects of the celestial body, thanks to the ad… [+2563 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Solar wind 'stopped blowing' on Mars for 2 days in 2022 - VideoFromSpace",
                    "description": "For two days in the December the solar wind suddenly stop on Mars and its atmosphere on the sun-facing side swellled \"by nearly four times its usual size — f...",
                    "url": "https://www.youtube.com/watch?v=HjyBb75yHGw",
                    "urlToImage": "https://i.ytimg.com/vi/HjyBb75yHGw/maxresdefault.jpg",
                    "publishedAt": "2023-12-15T12:49:40Z",
                    "content": null
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
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Buzz Staff",
                    "title": "This NASA Spacecraft Is The Fastest Man-made Machine - News18",
                    "description": "With a speed of approximately 16.26 km/s, it secured its position as the fastest human-made object launched from Earth.",
                    "url": "https://www.news18.com/viral/this-nasa-spacecraft-is-the-fastest-man-made-machine-8704784.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/image-8-2023-12-422c6fe87b59d351c559ad2999b876c7-16x9.jpg?impolicy=website&width=1200&height=675",
                    "publishedAt": "2023-12-15T12:35:14Z",
                    "content": "Light is widely recognised as having the fastest speed in the universe, with its velocity in a vacuum measured at 299,792.458 kilometres per second, roughly equivalent to 3 lakh kilometres per second… [+2040 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dst.gov.in"
                    },
                    "author": null,
                    "title": "Tracking a solar burst with multiple telescopes gives clues about source region characteristics affecting space weather - Department Of Science & Technology",
                    "description": "The Department of Science & Technology plays a pivotal role in promotion of science & technology in the country.",
                    "url": "https://dst.gov.in/tracking-solar-burst-multiple-telescopes-gives-clues-about-source-region-characteristics-affecting",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T11:09:44Z",
                    "content": "Scientists probing the evolution of an eruption (PE) that occurred from the west-limb of the Sun in 2013 using several different ground and space-based telescopes have traced the source of the solar … [+4145 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Ticker.tv"
                    },
                    "author": "Tanya King",
                    "title": "Scientists Discover New Species of Marine Life in Unexplored Depths of the Ocean - TickerTV News",
                    "description": "Scientists Discover New Species of Marine Life in Unexplored Depths of the Ocean - TickerTV News",
                    "url": "https://ticker.tv/news/nhl-highlights-kraken-vs-canadiens/335941/",
                    "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_realistic_photo_of_men_using_smartphone_or_computer_on_o_33e5e067-278a-427d-b8cf-b8eb7d233e27.png",
                    "publishedAt": "2023-12-15T11:04:54Z",
                    "content": "Summary: A recent scientific expedition to unexplored depths of the ocean has led to the discovery of a fascinating new species of marine life that adds to our understanding of the complexity and div… [+2142 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Ticker.tv"
                    },
                    "author": "Cheryl King",
                    "title": "What was Stephen Hawking's IQ? - TickerTV News",
                    "description": "What was Stephen Hawking's IQ? - TickerTV News",
                    "url": "https://ticker.tv/news/what-was-stephen-hawkings-iq/333701/",
                    "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_a_man_using_smartphone_or_computer_on_outdoor_791bc790-8694-477a-98f4-c82b495e899e.png",
                    "publishedAt": "2023-12-15T11:04:50Z",
                    "content": "Stephen Hawking’s IQ: Unraveling the Genius Behind the Mind\r\nRenowned physicist Stephen Hawking was not only known for his groundbreaking contributions to the field of theoretical physics but also fo… [+2423 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Weather Channel"
                    },
                    "author": "The Weather Channel",
                    "title": "Our Alien-Hunting Efforts Must Incorporate This New Measure to Find Life, Study Argues | Weather.com - The Weather Channel",
                    "description": "Beyond the holy trinity of water, warmth, and food, scientists are now adding a surprising element to the recipe for life: entropy.",
                    "url": "https://weather.com/en-IN/india/space/news/2023-12-15-alien-hunting-efforts-incorporate-new-measure-to-find-life",
                    "urlToImage": "https://s.w-x.co/in-planet%20rain.jpg",
                    "publishedAt": "2023-12-15T10:09:57Z",
                    "content": "Finding life beyond Earth is the ultimate cosmic quest, but narrowing down the search among countless planets is no easy feat. Beyond the holy trinity of water, warmth, and food, scientists are now a… [+3243 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Telangana Today"
                    },
                    "author": "Telangana Today",
                    "title": "Fake video of US teen being first human to be sent to Mars resurfaces on internet - Telangana Today",
                    "description": "Carson is still at the beginning of her remarkable journey. She's currently pursuing a PhD in Space and Planetary Science, demonstrating her dedication to space exploration.",
                    "url": "https://telanganatoday.com/fake-video-of-us-teen-landing-on-mars-resurfaces-on-internet",
                    "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2023/12/Alysa.jpg",
                    "publishedAt": "2023-12-15T09:39:08Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Saima Khan",
                    "title": "8 Popular Exercises for Vocal Cords - Sportskeeda",
                    "description": "The two muscular bands inside your voice box that produce your voice are called your vocal cords or vocal folds. They also facilitate healthy breathing and food swallowing.",
                    "url": "https://www.sportskeeda.com/health-and-fitness/8-popular-exercises-vocal-cords",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/84155-17026267427968-1920.jpg",
                    "publishedAt": "2023-12-15T08:49:00Z",
                    "content": "The two muscular bands inside your voice box that produce your voice are called your vocal cords or vocal folds. They also facilitate healthy breathing and food swallowing. \"Vocal cord\" is now referr… [+4360 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tech Explorist"
                    },
                    "author": "Amit Malewar",
                    "title": "Ultrafast laser technology to improve cancer treatment - Tech Explorist",
                    "description": "More effective use of radiation therapy in oncology.",
                    "url": "https://www.techexplorist.com/ultrafast-laser-technology-improve-cancer-treatment/78554/",
                    "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/12/laser.jpg",
                    "publishedAt": "2023-12-15T08:38:59Z",
                    "content": "Super short bursts of electrons, lasting only femtoseconds to picoseconds, open up exciting possibilities for studying things really fast. This includes exploring how structures change quickly and do… [+2959 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Newsclick.in"
                    },
                    "author": null,
                    "title": "NASA's Bennu Sample Smaller than Expected but Yields Valuable Solar System Clues - NewsClick",
                    "description": "Encouraging early findings; Asteroids, like Bennu, may have supplied key components to Earth's system billions of years ago.",
                    "url": "https://www.newsclick.in/nasas-bennu-sample-smaller-expected-yields-valuable-solar-system-clues",
                    "urlToImage": "https://www.newsclick.in/sites/default/files/2023-12/bannu%20%282%29.jpg",
                    "publishedAt": "2023-12-15T07:53:54Z",
                    "content": "Asteroids are an important subject of study in astronomythey are born as a result of breakaway events from a larger parent body, which happen during cosmic collisions in the asteroid belt of the sola… [+3972 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "India Today Science Desk",
                    "title": "Nasa establishes laser system that transfers data at 1.2 GB per second from space - India Today",
                    "description": "The International Space Station (ISS) completed its first successful laser link with an in-orbit laser relay system completing Nasa’s first two-way, end-to-end laser relay system.",
                    "url": "https://www.indiatoday.in/science/story/nasa-establishes-laser-system-that-transfers-data-at-12-gb-per-second-from-space-2476311-2023-12-15",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/space-laser-system-test-153110250-16x9_0.jpg?VersionId=jWNFjmRVN629AStwgluMz4keGNhTO_gi",
                    "publishedAt": "2023-12-15T07:47:03Z",
                    "content": "Nasa has successfully established a new system of communication that could be used for long-distance data transmission billions of kilometers away from Earth laser. \r\nThe International Space Station … [+2376 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livelaw.in"
                    },
                    "author": "LIVELAW NEWS NETWORK",
                    "title": "Call For Papers: The CRIL Journal Of International Law And Policy - Live Law - Indian Legal News",
                    "description": "In its previous iteration, the Journal featured articles covering a diverse array of themes ranging  from international criminal and humanitarian law to trade law and state responsibility. It has now...",
                    "url": "https://www.livelaw.in/lawschool/call-for-papers/call-for-papers-cril-journal-international-law-and-policy-244608",
                    "urlToImage": "https://www.livelaw.in/h-upload/images/call-for-papers.jpg",
                    "publishedAt": "2023-12-15T07:19:39Z",
                    "content": "In its previous iteration, the Journal featured articles covering a diverse array of themes ranging from international criminal and humanitarian law to trade law and state responsibility. It has now … [+5480 chars]"
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
                    "publishedAt": "2023-12-15T06:20:03Z",
                    "content": "The Earth has surpassed the speculated apocalypse linked to Mayan predictions. Experts still serve caution that genuine threats still exist, with the potential to pose serious risks to the survival o… [+1917 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "WION"
                    },
                    "author": "Wion",
                    "title": "In Pics: Juno captures stunning images of Jupiter as 'Christmas Star' - WION",
                    "description": "The instruments in Juno spacecraft include a magnetometer, gravity science system, and microwave radiometer, enabling measurements of Jupiter's magnetic fields and atmospheric properties.",
                    "url": "https://www.wionews.com/photos/in-pics-juno-captures-stunning-images-of-jupiter-as-christmas-star-669884",
                    "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/15/399299-untitled-design-2023-12-15t111404056.png",
                    "publishedAt": "2023-12-15T05:41:19Z",
                    "content": "Written By: Heena Sharma | Updated: Dec 15, 2023, 11:35 AM IST\r\nThe raw data from Juno's images takes about 34 light-minutes to reach Earth as a radio transmission. Despite the communication delay, s… [+1496 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India.com"
                    },
                    "author": "https://www.india.com/author/sumaila-zaman/",
                    "title": "'Keep Working': Meet Dr. Akshata Krishnamurthy, ‘First Indian Citizen’ to Operate Rover On Mars - India.com",
                    "description": "Read the success story of Dr. Akshata Krishnamurthy, who etched her name in history by becoming the first Indian citizen to operate a rover mission on Mars,",
                    "url": "https://www.india.com/education/meet-dr-akshata-krishnamurthy-mit-phd-holder-nasa-employee-first-indian-mars-rover-operator-6587647/",
                    "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/j-2023-12-15T104957.865.jpg",
                    "publishedAt": "2023-12-15T05:21:27Z",
                    "content": "Read the success story of Dr. Akshata Krishnamurthy, who etched her name in history by becoming the first Indian citizen to operate a rover mission on Mars,\r\nKeep Working: Meet Dr. Akshata Krishnamur… [+3739 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dtnext.in"
                    },
                    "author": "IANS",
                    "title": "Neanderthal DNA may be making you a morning person: Study - DTNEXT",
                    "description": "In the study, the researchers combined ancient DNA of Neanderthals, large-scale genetic studies in modern humans, and artificial intelligence.",
                    "url": "https://www.dtnext.in/lifestyle/wellbeing/neanderthal-dna-may-be-making-you-a-morning-person-study-754564",
                    "urlToImage": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/12/15/786747-neanderthal.jpg",
                    "publishedAt": "2023-12-15T04:15:52Z",
                    "content": "NEW YORK: Are you a morning person? Genetic material from our Neanderthal ancestors may have contributed to this propensity of rising early, according to a study. \r\nIn the study, the researchers comb… [+2863 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deccan Herald"
                    },
                    "author": "Reuters",
                    "title": "Aborted test and missing parts add to European space woes - Deccan Herald",
                    "description": "Aborted test and missing parts add to European space woes",
                    "url": "https://www.deccanherald.com/world/aborted-test-and-missing-parts-add-to-european-space-woes-2812166",
                    "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Facaf7e99-89d2-4ea2-8495-eef3392d442f%2Fnasas_lucy_spacecraft_atop_a_united_launch_alliance_atlas_5_rocket_launches_from_cape_canaveral_s_12.jpg?rect=0%2C0%2C1280%2C672&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
                    "publishedAt": "2023-12-15T03:58:08Z",
                    "content": "Because there are no spares, other than ones used in testing, which could be risky to re-use, the plan is to adapt slightly larger tanks designed for the more recent Vega C model, said Toni Toker-Nie… [+38 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Tech",
                    "title": "A better DART mission for asteroid deflection? Know what NASA says - HT Tech",
                    "description": "The NASA DART mission demonstrated single impact style event but a new paper is offering an intriguing and probably efficient and precise method in safeguarding Earth from potential asteroid impacts.",
                    "url": "https://tech.hindustantimes.com/tech/news/a-better-dart-mission-for-asteroid-deflection-know-what-nasa-says-71702611990105.html",
                    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/15/1600x900/dart-poster3__1631498382594_1702612232666.jpeg",
                    "publishedAt": "2023-12-15T03:53:47Z",
                    "content": "The threat of asteroids hitting the Earth is always present and scientists have been working for decades now to track them and to devise the methods to deflect them or otherwise neutralize any threat… [+2842 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Universe Today"
                    },
                    "author": "Laurence Tognetti",
                    "title": "A Tiny Telescope is Revealing “Hot Jupiter” Secrets - Universe Today",
                    "description": "A recent study presented this week at the 2023 meeting of the American Geophysical Union discusses observations of “hot Jupiters” from the NASA-funded CubeSat mission known as the Colorado Ultraviolet Transit Experiment (CUTE). Unlike most exoplanet-hunting t…",
                    "url": "https://www.universetoday.com/164839/a-tiny-telescope-is-revealing-hot-jupiter-secrets/",
                    "urlToImage": "https://www.universetoday.com/wp-content/uploads/2023/12/033.jpg",
                    "publishedAt": "2023-12-15T03:47:45Z",
                    "content": "A recent study presented this week at the 2023 meeting of the American Geophysical Union discusses observations of hot Jupiters from the NASA-funded CubeSat mission known as the Colorado Ultraviolet … [+3572 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Astronauts Visit Marshall Space Flight Center After Return from ISS | Dec. 14, 2023 | News 19 at 9 p - WHNT News 19",
                    "description": "NASA astronauts who just returned from the International Space Station visited the rocket city to talk with some of the people who helped them on their missi...",
                    "url": "https://www.youtube.com/watch?v=hururP2Wmyk",
                    "urlToImage": "https://i.ytimg.com/vi/hururP2Wmyk/maxresdefault.jpg",
                    "publishedAt": "2023-12-15T03:45:18Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Space Daily"
                    },
                    "author": null,
                    "title": "ESA leads the way towards a Zero Debris future - Space Daily",
                    "description": "Paris (ESA) Dec 15, 2023 - \r\nEarth is surrounded by spacecraft carrying out vital work to study our changing climate, deliver global communication and navigation services and help us answer important scientific questions. But i",
                    "url": "https://www.spacedaily.com/reports/ESA_leads_the_way_towards_a_Zero_Debris_future_999.html",
                    "urlToImage": "https://www.spxdaily.com/images-hg/esa-space-zero-debris-marker-hg.jpg",
                    "publishedAt": "2023-12-15T03:23:30Z",
                    "content": "ESA leads the way towards a Zero Debris futureby Staff WritersParis (ESA) Dec 15, 2023\r\nEarth is surrounded by spacecraft carrying out vital work to study our changing climate, deliver global communi… [+5905 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Pan of Star Cluster IC 348 (NIRCam image) - HubbleWebbESA",
                    "description": "This image from the NIRCam (Near-Infrared Camera) instrument on the NASA/ESA/CSA James Webb Space Telescope shows the central portion of the star cluster IC ...",
                    "url": "https://www.youtube.com/watch?v=KfrsSkRCiLM",
                    "urlToImage": "https://i.ytimg.com/vi/KfrsSkRCiLM/hqdefault.jpg",
                    "publishedAt": "2023-12-14T23:13:38Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Space.com"
                    },
                    "author": "Samantha Mathewson",
                    "title": "Aurora-like 'Steve' phenomenon and glowing 'picket fences' point to unknown exotic physics - Space.com",
                    "description": "\"The Steve spectrum is telling us there's some very exotic physics going on. We just didn't know what it was.\"",
                    "url": "https://www.space.com/aurora-steve-picket-fence-phenomena-exotic-physics-earth-atmosphere",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/FuE48btFyJHoKqCFEhC9VP-1200-80.jpg",
                    "publishedAt": "2023-12-14T20:30:16Z",
                    "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Michael Sheetz",
                    "title": "Investing in Space: How to prepare shareholders with a moon landing on the way - CNBC",
                    "description": "2024 is shaping up to be the year the U.S. returns spacecraft to the moon.",
                    "url": "https://www.cnbc.com/2023/12/14/investing-in-space-how-to-prepare-shareholders-for-a-moon-landing.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107347870-1702577647374-art001e002593large.jpg?v=1702577813&w=1920&h=1080",
                    "publishedAt": "2023-12-14T19:19:41Z",
                    "content": "CNBC's Investing in Space newsletter offers a view into the business of space exploration and privatization, delivered straight to your inbox. CNBC's Michael Sheetz reports and curates the latest new… [+10228 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dailyexcelsior.com"
                    },
                    "author": "Daily Excelsior",
                    "title": "How brain learns which actions in a sequence were 'rewarded', study uncovers - Daily Excelsior",
                    "description": "NEW DELHI, Dec 14: New research has uncovered how the brain figures out exactly which action in a sequence of tasks performed led to a ‘reward’. While the brain chemical dopamine is known to play a crucial role in the reward process, important for reinforcing…",
                    "url": "https://www.dailyexcelsior.com/how-brain-learns-which-actions-in-a-sequence-were-rewarded-study-uncovers/",
                    "urlToImage": "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/12/brain.jpg",
                    "publishedAt": "2023-12-14T18:40:41Z",
                    "content": "NEW DELHI, Dec 14: New research has uncovered how the brain figures out exactly which action in a sequence of tasks performed led to a ‘reward’.While the brain chemical dopamine is known to play a cr… [+2483 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Archinect"
                    },
                    "author": null,
                    "title": "Louisiana State and NASA to develop waterless concrete for 3D printing on the Moon - Archinect",
                    "description": "Louisiana State University is collaborating with NASA on a project investigating the potential for natural materials on the Moon to be used as 3D printed waterless concrete. The research is part of a wider mission to develop feasible robotic construction tech…",
                    "url": "https://archinect.com/news/article/150407970/louisiana-state-and-nasa-to-develop-waterless-concrete-for-3d-printing-on-the-moon",
                    "urlToImage": "https://archinect.imgix.net/uploads/f2/f251f895d0661d345396773630f7e54a.jpg?fit=crop&auto=compress%2Cformat&crop=faces&w=1200&h=707",
                    "publishedAt": "2023-12-14T17:06:00Z",
                    "content": "Louisiana State University is collaborating with NASA on a project investigating the potential for natural materials on the Moon to be used as 3D printed waterless concrete. The research is part of a… [+2364 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Thedebrief.org"
                    },
                    "author": "Micah Hanks, Micah Hanks",
                    "title": "Scientists Report First Spectrographic Analysis of “Ghosts” in New Study of Rare Atmospheric Phenomenon - The Debrief",
                    "description": "Astronomers have successfully obtained spectroscopic data on a rare atmospheric phenomenon known as “ghosts,” according to new research.",
                    "url": "https://thedebrief.org/scientists-report-first-spectrographic-analysis-of-ghosts-in-new-study-of-rare-atmospheric-phenomenon/",
                    "urlToImage": "https://thedebrief.b-cdn.net/wp-content/uploads/2023/12/atmospheric-ghost.jpg",
                    "publishedAt": "2023-12-14T16:12:28Z",
                    "content": "Astronomers in Spain have successfully obtained spectroscopic data for the first time on a rare atmospheric phenomenon known as ghosts, according to newly published research.\r\nThe occurrence, which i… [+4708 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zoom"
                    },
                    "author": "TN Viral Desk, Times Now Digital",
                    "title": "7 'Alien-Looking' Animals Found On Earth - Times Now",
                    "description": "7 'Alien-Looking' Animals Found On Earth",
                    "url": "https://www.timesnownews.com/web-stories/viral/7-alien-looking-animals-found-on-earth/photostory/105997960.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-105997980,width-900,height-1200,resizemode-6.cms",
                    "publishedAt": "2023-12-14T14:29:09Z",
                    "content": "Found in Madagascar, the aye-aye is a type of lemur with large eyes, bat-like ears, and a long, thin finger used for tapping on trees to find insects. Its appearance is quite unique among primates."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Mediabrief.com"
                    },
                    "author": "Mediabrief News Desk",
                    "title": "Newcastle University study highlights vulnerability of Fire-Ice to Climate-induced melting - Mediabrief",
                    "description": "Researchers from Newcastle University found that frozen methane known as fire-ice is susceptible to melting as a result of climate change",
                    "url": "https://mediabrief.com/ncl-researchers-find-methane-emissions-responsible-for-climate-change/",
                    "urlToImage": "https://mediabrief.com/wp-content/uploads/2023/12/IMAGE-Newcastle-University-climate-change-study-MEDIABRIEF.jpg",
                    "publishedAt": "2023-12-14T14:06:08Z",
                    "content": "Researchers from Newcastle University have produced a new study that demonstrates how vulnerable fire-icefrozen methane sealed as a solid underneath our oceansis to melting as a result of climate cha… [+3836 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Nasa's James Webb telescope captures stunning new supernova image - The Independent",
                    "description": "Nasa has shared a “stunning” new image captured by its James Webb telescope.The space agency released a “gift from a past star” - a photograph showing supern...",
                    "url": "https://www.youtube.com/watch?v=L7lTsNL_Ams",
                    "urlToImage": "https://i.ytimg.com/vi/L7lTsNL_Ams/maxresdefault.jpg",
                    "publishedAt": "2023-12-14T13:30:34Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Nd.edu"
                    },
                    "author": "Marketing Communications: Web | University of Notre Dame",
                    "title": "The Gist: Signs of Life | Notre Dame Magazine | University of Notre Dame - University of Notre Dame",
                    "description": "Aerospace engineer Dava Newman ’86 works to help humans visit Mars to discover what — and whom — might be out there.",
                    "url": "https://magazine.nd.edu/stories/the-gist-signs-of-life/",
                    "urlToImage": "https://magazine.nd.edu/assets/550442/1600x840/gist_logo.jpg",
                    "publishedAt": "2023-12-14T13:00:00Z",
                    "content": "Professor Dava Newman: Inventor, Science Engineering; Guillermo Trotti, A.I.A., Trotti and Associates, Inc. (Cambridge, MA): Design; Dainese (Vincenca, Italy): Fabrication; Douglas Sonders: Photograp… [+4075 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "WION"
                    },
                    "author": "WION Web Team",
                    "title": "Trusty ol` Hubble Space Telescope is working again after NASA fixes problem - WION",
                    "description": "Trusty ol Hubble Space Telescope is working again after NASA fixes problem",
                    "url": "https://www.wionews.com/science/trusty-ol-hubble-space-telescope-is-working-again-after-nasa-fixes-problem-669663",
                    "urlToImage": "https://cdn.wionews.com/sites/default/files/2021/04/08/190602-untitled-design-8.jpg",
                    "publishedAt": "2023-12-14T12:58:08Z",
                    "content": "The James Webb Space Telescope is arguably humanity's latest and best 'eye in the sky.' It is equipped with the tech to glean corners of the universe hitherto out of our scientific reach.\r\nThe James … [+2108 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Researchmatters.in"
                    },
                    "author": null,
                    "title": "The Universality of 'Phase Separation' in Proteins - Research Matters",
                    "description": "Groundbreaking study casts doubt on long-standing hypothesis on an important biological process.",
                    "url": "https://researchmatters.in/news/universality-phase-separation-proteins",
                    "urlToImage": "https://researchmatters.in/sites/researchmatters.in/files/liquid_condensate.png",
                    "publishedAt": "2023-12-14T10:53:03Z",
                    "content": "Liquid-liquid phase separation (LLPS) occurs when a homogeneous solution of (bio)polymers phase separates into distinct, coexisting liquid phases under certain conditions, like the phase separation o… [+5661 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Technology Networks"
                    },
                    "author": "Technology Networks",
                    "title": "Embryo-Like Model Simulates Early Human Blood Production - Technology Networks",
                    "description": "University of Pittsburgh researchers have developed a new embryo-like model derived from adult cells that replicates key features of early human development, including the generation of blood cells.",
                    "url": "https://www.technologynetworks.com/cell-science/news/embryo-like-model-simulates-early-human-blood-production-382043",
                    "urlToImage": "https://assets.technologynetworks.com/production/dynamic/images/content/382043/embryo-like-model-simulates-early-human-blood-production-382043-640x360.jpg?cb=20231214",
                    "publishedAt": "2023-12-14T10:14:45Z",
                    "content": "University of Pittsburgh researchers have developed a new embryo-like model derived from adult cells that replicates key features of early human development, including the generation of blood cells.\r… [+5357 chars]"
                }
            ]
        },
        {
            "health": [
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "The Indian Express",
                    "title": "New COVID-19 variant JN.1 spreading in China, US: Will it cause a surge in India? How to protect yourself? - The Indian Express",
                    "description": null,
                    "url": "https://indianexpress.com/article/health-wellness/new-covid-19-variant-jn-1-spreading-in-china-us-9070801/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T09:29:55Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Mallika Soni",
                    "title": "Japan flu cases hit high levels at fastest pace in 10 years. What about Covid? - Hindustan Times",
                    "description": "Japan Flu Cases Rise: The influenza virus is spreading about a month earlier than normal, experts said. | World News",
                    "url": "https://www.hindustantimes.com/world-news/japan-flu-cases-japan-flu-cases-hit-warning-levels-at-fastest-pace-in-10-years-101702716991893.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/JAPAN-DAILYLIFE-2_1657808940241_1657808940241_1702717967271.JPG",
                    "publishedAt": "2023-12-16T09:14:37Z",
                    "content": "Japan said that the average number of influenza patients designated medical institutions nationwide had hit warning levels at their fastest pace in 10 years, it was reported. The spread of flu cases … [+1840 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "Sonali Acharjee",
                    "title": "Cervical cancer | No takers for the vaccine - India Today",
                    "description": "Thanks to social stigma and lack of awareness, thousands of women continue to die of cervical cancer in India, even though it is the only type that's almost entirely preventable by a vaccine",
                    "url": "https://www.indiatoday.in/magazine/health/story/20231225-cervical-cancer-no-takers-for-the-vaccine-2476405-2023-12-16",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/illustrations-by-siddhant-jumde-165413769-16x9_0.jpg?VersionId=_XR2mnTnXJXzrJ5cpBhUXNUWNb0AbP1z",
                    "publishedAt": "2023-12-16T07:55:56Z",
                    "content": "It started in early 2022, with a few spots of blood between menstrual cycles. Aditi Sharma (name changed), 38, then a Ph.D. student in Delhi, didn’t tell anyone; she had just broken up with her partn… [+1236 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Zarafshan Shiraz",
                    "title": "Heart disease risk in pregnancy, tips for pregnant women to manage heart health - Hindustan Times",
                    "description": "Pregnancy complaints and heart diseases symptoms are often similar. Here's how to differentiate the risk factors of heart issue in pregnant women, manage health | Health",
                    "url": "https://www.hindustantimes.com/lifestyle/health/heart-disease-risk-in-pregnancy-tips-for-pregnant-women-to-monitor-and-manage-heart-health-101702707769701.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/_463cc88a-2d95-11e8-a965-f54d0b6b9edf_1702708109617.jpg",
                    "publishedAt": "2023-12-16T06:38:30Z",
                    "content": "According to health experts, pregnancy itself leads to certain changes in the cardiovascular system in order to improve the blood supply to the growing foetus. However, in this scenario, it can unmas… [+7094 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Deutsche Welle",
                    "title": "Pregnancy sickness: Major discovery offers hope for cure - Hindustan Times",
                    "description": "A new research reveals that the GDF15 hormone is responsible for nausea and vomiting in pregnancy. The discovery could lead to better treatment. | Health",
                    "url": "https://www.hindustantimes.com/lifestyle/health/pregnancy-sickness-major-discovery-offers-hope-for-cure-101702707127344.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/pregnancy_nausea_1702707314494_1702707321143.jpg",
                    "publishedAt": "2023-12-16T06:25:25Z",
                    "content": "Scientists have uncovered why women experience intense nausea and vomiting during pregnancy. The study, published in the journal Nature, found that a single hormone is responsible for pregnancy sickn… [+3715 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Zarafshan Shiraz",
                    "title": "Postpartum fitness eating: Right dietary choices for a healthy heart - Hindustan Times",
                    "description": "Practical tips for maintaining a balanced diet during postpartum and eating right for a healthy heart | Health",
                    "url": "https://www.hindustantimes.com/lifestyle/health/postpartum-fitness-eating-right-dietary-choices-for-a-healthy-heart-101702704515542.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/food-g1d62c6407_1920_1665303775639_1702704623674.jpg",
                    "publishedAt": "2023-12-16T06:19:12Z",
                    "content": "The postpartum period is a critical phase in a woman's life, marked by numerous physiological changes and adjustments hence, it is essential to focus on nutrition during this time to support recovery… [+7303 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bizzbuzz.news"
                    },
                    "author": "IANS",
                    "title": "Indian docs support WHO ban on vapes, call on govt to take action - Bizz Buzz",
                    "description": "A day after the World Health Organization (WHO) urged governments to treat e-cigarettes akin to tobacco and impose a ban on all flavours, health experts in India have called on the government to...",
                    "url": "https://www.bizzbuzz.news/eco-buzz/indian-docs-support-who-ban-on-vapes-call-on-govt-to-take-action-1273913",
                    "urlToImage": "https://www.bizzbuzz.news/h-upload/2023/12/16/1832458-e-cigarettes.jpg",
                    "publishedAt": "2023-12-16T05:01:27Z",
                    "content": "New Delhi: A day after the World Health Organization (WHO) urged governments to treat e-cigarettes akin to tobacco and impose a ban on all flavours, health experts in India have called on the governm… [+3079 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bizzbuzz.news"
                    },
                    "author": "IANS",
                    "title": "Study confirms common industrial chemical behind colon cancer - Bizz Buzz",
                    "description": "Researchers have confirmed that a group of industrial chemicals called per- and polyfluoroalkyl substances (PFAS), also known as \"forever chemicals\", contributes to colon cancer metastasis --...",
                    "url": "https://www.bizzbuzz.news/technology/study-confirms-common-industrial-chemical-behind-colon-cancer-1273911",
                    "urlToImage": "https://www.bizzbuzz.news/h-upload/2023/12/16/1832455-cancer-1.jpg",
                    "publishedAt": "2023-12-16T04:55:29Z",
                    "content": "New York: Researchers have confirmed that a group of industrial chemicals called per- and polyfluoroalkyl substances (PFAS), also known as \"forever chemicals\", contributes to colon cancer metastasis … [+5172 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Why should you eat raw ginger and black chickpeas in the morning - IndiaTimes",
                    "description": "Eating raw ginger and black chickpeas in the morning can offer several health benefits:",
                    "url": "https://timesofindia.indiatimes.com/life-style/food-news/why-should-you-eat-raw-ginger-and-black-chickpeas-in-the-morning/photostory/106032760.cms",
                    "urlToImage": "https://static.toiimg.com/photo/106032796.cms",
                    "publishedAt": "2023-12-16T04:33:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dtnext.in"
                    },
                    "author": "PTI",
                    "title": "Smoking shrinks brain, genetics play important role, research finds - DTNEXT",
                    "description": "Researchers said that since a natural reduction in brain volume is usually seen to occur with age, smoking therefore effectively ages the brain prematurely.",
                    "url": "https://www.dtnext.in/lifestyle/wellbeing/smoking-shrinks-brain-genetics-play-important-role-research-finds-754778",
                    "urlToImage": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/05/30/737512-smoking.jpg",
                    "publishedAt": "2023-12-16T04:04:39Z",
                    "content": "NEW DELHI: New research has found that smoking causes the brain to shrink and that genetics could be important as about half of one's risk of smoking can come from their genes. \r\nResearchers at Washi… [+2914 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "New book gives people suffering from Long COVID a voice - KTVU FOX 2 San Francisco",
                    "description": "Even though COVID is still around, most feel like it is over; there's only one problem, it's not anywhere close to being done for millions of Americans suffe...",
                    "url": "https://www.youtube.com/watch?v=goCWpHW94I0",
                    "urlToImage": "https://i.ytimg.com/vi/goCWpHW94I0/hqdefault.jpg",
                    "publishedAt": "2023-12-16T03:51:42Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Graziamagazine.com"
                    },
                    "author": null,
                    "title": "What to Eat to Feel Less Cold - Grazia USA",
                    "description": "Beat the winter chill with 10 foods! From comforting potatoes to immune-boosting citrus, stock up on warmth for a cozy season.",
                    "url": "https://graziamagazine.com/us/articles/what-to-eat-to-feel-less-cold/",
                    "urlToImage": "https://graziamagazine.com/us/wp-content/uploads/sites/15/2023/12/Donna-freddo-cappello-sciarpa-cover-desktop.jpg",
                    "publishedAt": "2023-12-16T03:17:38Z",
                    "content": "When it’s cold outside, and you can’t escape to mild tropical destinations, solutions can be found anywhere, starting with your diet. But what should you eat to avoid feeling cold?\r\nFoods can actuall… [+3345 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Sentinel Assam"
                    },
                    "author": "Sentinel Digital Desk",
                    "title": "Snack on almonds, walnuts to cut heart disease, diabetes, stroke risk - Sentinelassam - The Sentinel Assam",
                    "description": "Love to eat snacks in between meals? Instead of munching cookies, brownies, pies, eat tree nuts like almonds, walnuts, cashews, pecans and hazelnuts to reduce your risk of metabolic syndrome.",
                    "url": "https://www.sentinelassam.com/topheadlines/snack-on-almonds-walnuts-to-cut-heart-disease-diabetes-stroke-risk-681203",
                    "urlToImage": "https://assets.sentinelassam.com/h-upload/2023/12/16/498300-almond.jpg",
                    "publishedAt": "2023-12-16T03:05:48Z",
                    "content": "NEW YORK: Love to eat snacks in between meals? Instead of munching cookies, brownies, pies, eat tree nuts like almonds, walnuts, cashews, pecans and hazelnuts to reduce your risk of metabolic syndrom… [+2554 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Daijiworld.com"
                    },
                    "author": null,
                    "title": "US records over 2300 deaths from flu this season - Daijiworld.com",
                    "description": "Los Angeles, Dec 16 (IANS): There have been at least 3.7 million illnesses, 38,000 hospitalizations and 2,300 deaths from flu so far this season in the US, according to the latest estimates released Friday by the Centers for Disease Control and Prevention (CD…",
                    "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1149728",
                    "urlToImage": "http://daijiworld.com/images/daijiSquareLogo.png",
                    "publishedAt": "2023-12-16T03:05:29Z",
                    "content": "Los Angeles, Dec 16 (IANS): There have been at least 3.7 million illnesses, 38,000 hospitalizations and 2,300 deaths from flu so far this season in the US, according to the latest estimates released … [+628 chars]"
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
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "5 tips for a heart-healthy holiday - KSL News",
                    "description": "No one wants to spend their holiday at the hospital. Here are five tips from a medical expert to keep your heart health top of mind this season.Read More: ht...",
                    "url": "https://www.youtube.com/watch?v=1aX5gHkfIX0",
                    "urlToImage": "https://i.ytimg.com/vi/1aX5gHkfIX0/maxresdefault.jpg",
                    "publishedAt": "2023-12-16T02:36:44Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dailypioneer.com"
                    },
                    "author": "Daily Pioneer",
                    "title": "Delivering Covid 19 vaccine to respiratory tract may lead to improved protection: Study - Daily Pioneer",
                    "description": "Delivering the Covid-19 vaccine directly to the respiratory tract, the primary site of entry inS-CoV-2 infection,&nbsp; may lead to improved protection against the disease, a study in monkeys has found. The study is published in the journal Nature.\n\n“The fail…",
                    "url": "https://www.dailypioneer.com/2023/india/delivering-covid-19-vaccine-to-respiratory-tract-may-lead-to-improved-protection--study.html",
                    "urlToImage": "https://www.dailypioneer.com/images/logo.jpg",
                    "publishedAt": "2023-12-16T02:22:21Z",
                    "content": "Delivering the Covid-19 vaccine directly to the respiratory tract, the primary site of entry inS-CoV-2 infection,  may lead to improved protection against the disease, a study in monkeys has found. T… [+2139 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Zarafshan Shiraz",
                    "title": "Constipation in adults and how to tackle it - Hindustan Times",
                    "description": "Health expert reveals the causes behind constipation in adults, its signs and symptoms and shares tips on how to tackle it",
                    "url": "https://www.hindustantimes.com/photos/lifestyle/constipation-in-adults-and-how-to-tackle-it-101702653044497.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/upset_stomach_1652281877539_1702653178056_1702653361215.jpg",
                    "publishedAt": "2023-12-16T01:30:18Z",
                    "content": "Published on Dec 16, 2023 07:00 AM IST\r\nHealth expert reveals the causes behind constipation in adults, its signs and symptoms and shares tips on how to tackle it ...read more\r\nFollow Us\r\nView Photos… [+1597 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Add these 7 flours to your diet for healthy and effective weight loss - timesofindia.com",
                    "description": "7 flours added with wheat flour which helps in the regularization of a healthy body and thus maintains a proper nutritious diet chart.",
                    "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/7-flours-for-healthy-and-effective-weight-loss/photostory/105982565.cms",
                    "urlToImage": "https://static.toiimg.com/photo/105982618.cms",
                    "publishedAt": "2023-12-16T01:30:00Z",
                    "content": "Bajra is a common gluten-free flour used in most Indian households. It is rich in protein, fiber, magnesium, iron, and phosphorus, and also prevents the body from overeating. Therefore, ½ cup of Bajr… [+154 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "5 nutritionist-approved natural foods to boost immunity during winter - IndiaTimes",
                    "description": "With winter season in its full swing, it is important to take care of your daily diet and protect the body from the side effects of chilly weather. Ta",
                    "url": "https://timesofindia.indiatimes.com/life-style/food-news/5-nutritionist-approved-natural-foods-to-boost-immunity-during-winter/articleshow/106032855.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106032855,width-1070,height-580,imgsize-62866,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T01:30:00Z",
                    "content": "Another day, another slay by Rashmika Mandanna in latex bodycon number"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "ET HealthWorld",
                    "title": "'Surge' in respiratory illnesses in China: Laboratories asked to test SARI samples - ETHealthWorld",
                    "description": "In view of reports of a surge in respiratory illnesses in China, the Virus Research and Diagnostic Laboratories (VRDL) network under the Indian Council of Medical Research (ICMR) has been asked to test all samples of severe acute respiratory infection (SARI),…",
                    "url": "https://health.economictimes.indiatimes.com/news/industry/surge-in-respiratory-illnesses-in-china-laboratories-asked-to-test-sari-samples/106035575",
                    "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-106035575,imgsize-126830,width-1200,height=765,overlay-ethealth/industry/surge-in-respiratory-illnesses-in-china-laboratories-asked-to-test-sari-samples.jpg",
                    "publishedAt": "2023-12-16T01:01:03Z",
                    "content": "New Delhi: In view of reports of a surge in respiratory illnesses in China, the Virus Research and Diagnostic Laboratories (VRDL) network under the Indian Council of Medical Research (ICMR) has been … [+3309 chars]"
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
                        "id": null,
                        "name": "The New Indian Express"
                    },
                    "author": "Express News Service",
                    "title": "Karnataka: First Kyasanur forest disease positive case in Tirthahalli - The New Indian Express",
                    "description": "KFD is a tick-borne viral haemorrhagic fever endemic to south-western part of India.",
                    "url": "https://www.newindianexpress.com/states/karnataka/2023/dec/16/karnataka-first-kyasanur-forest-disease-positive-case-in-tirthahalli-2641984.html",
                    "urlToImage": "https://images.newindianexpress.com/uploads/user/imagelibrary/2023/11/29/w600X390/image-20160414-2629-1259kt3.jpg",
                    "publishedAt": "2023-12-16T00:28:00Z",
                    "content": "SHIVAMOGGA: The first case of Kyasanur forest disease (KFD) was detected at Attisara village in Tirthahalli taluk last Thursday. Confirming the development to The New Indian Express, District Health … [+2097 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Science Daily"
                    },
                    "author": null,
                    "title": "Study shows exposure to household chemicals can lower odds of getting pregnant - Science Daily",
                    "description": "Exposure to phthalates, a group of plasticizing and solvent chemicals found in many household products, was linked to a lower probability of getting pregnant, but not to pregnancy loss, according to research by environmental and reproductive epidemiologists.",
                    "url": "https://www.sciencedaily.com/releases/2023/12/231215140211.htm",
                    "urlToImage": "https://www.sciencedaily.com/images/scidaily-icon.png",
                    "publishedAt": "2023-12-15T23:32:05Z",
                    "content": "Exposure to phthalates, a group of plasticizing and solvent chemicals found in many household products, was linked to a lower probability of getting pregnant, but not to pregnancy loss, according to … [+3635 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "EL PAÍS"
                    },
                    "author": "Daniel Mediavilla",
                    "title": "Review of studies finds children of parents with mental disorders at increased risk - EL PAÍS USA",
                    "description": "Key to prevention, report authors say, is early diagnosis of individuals with psychiatric disorders to implement preventive measures for their offspring",
                    "url": "https://english.elpais.com/health/2023-12-15/review-of-studies-finds-children-of-parents-with-mental-disorders-at-increased-risk.html",
                    "urlToImage": "https://images.english.elpais.com/resizer/oCn9rcCbTdUIWQcSXxqbcIqs6mU=/1200x0/filters:focal(2822x1635:2832x1645)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/5IMSHX3X35GVVID6LERXIYWMWQ.jpg",
                    "publishedAt": "2023-12-15T23:20:34Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Neurosciencenews.com"
                    },
                    "author": "Neuroscience News",
                    "title": "Active Aging: Exercise and Social Life Shield Brain Health - Neuroscience News",
                    "description": "This research underscores the importance of an active lifestyle in preserving brain health and cognitive function in old age.",
                    "url": "https://neurosciencenews.com/aging-exercise-social-brain-25374/",
                    "urlToImage": "https://neurosciencenews.com/files/2023/12/social-exercise-aging-neurosicnes.jpg",
                    "publishedAt": "2023-12-15T23:02:11Z",
                    "content": "Summary: Researchers uncovered the protective effects of physical and social activities on brain health in older adults.\r\nAnalyzing data from a 12-year longitudinal study, researchers focused on the … [+7866 chars]"
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
                    "publishedAt": "2023-12-15T22:35:17Z",
                    "content": "Every 40 seconds, someone in the U.S. has a stroke. While age and health are major risk factors for a stroke, falling temperatures can also increase your risk.\r\nEven if you're not clearing like a sno… [+1447 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "AuntMinnie"
                    },
                    "author": "Erik L. Ridley",
                    "title": "Week in review: Benign breast disease and cancer risk | Opportunistic screening | New imaging equipment industry group - AuntMinnie",
                    "description": "Benign breast disease found on percutaneous biopsy is linked with a higher risk of breast cancer, according to a report. Click \"Read More\" to learn about this research and to see this week's other top stories.",
                    "url": "https://www.auntminnie.com/clinical-news/article/15660454/week-in-review-benign-breast-disease-and-cancer-risk-opportunistic-screening-new-imaging-equipment-industry-group",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T22:06:02Z",
                    "content": "Dear AuntMinnie Member, \r\nBenign breast disease found on percutaneous biopsy is associated with a higher risk of breast cancer, according to a report that garnered the most page views this week on Au… [+2015 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Ajmc.com"
                    },
                    "author": null,
                    "title": "Pathophysiology of Demodex Blepharitis - AJMC.com Managed Markets Network",
                    "description": "Elizabeth Yeu, MD, discusses complications that may arise from inadequate treatment of Demodex blepharitis.",
                    "url": "https://www.ajmc.com/view/pathophysiology-of-demodex-blepharitis",
                    "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/ajmc/b3b28521eb719e1bf6c1600b10b461e577127274-1920x1080.png?fit=crop&auto=format",
                    "publishedAt": "2023-12-15T21:45:00Z",
                    "content": "This is a video synopsis/summary of a discussion involving Elizabeth Yeu, MD. Dr Yeu discusses Demodex blepharitis, a type of eyelid inflammation caused by an overgrowth of demodex mites in the eyela… [+1177 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Swati Chaturvedi",
                    "title": "9 Major Ailments To Keep An Eye Out For In Winter Season - News18",
                    "description": "Leading medical experts shed light on major ailments to watch out for during the winter months and offer valuable insights on preventive measures",
                    "url": "https://www.news18.com/lifestyle/health-and-fitness-9-major-ailments-to-keep-an-eye-out-for-in-winter-season-8704919.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/06/shutterstock_2262209301-2-168606140416x9.jpg",
                    "publishedAt": "2023-12-15T20:54:00Z",
                    "content": "As the winter season blankets the world, it brings forth not only the magic of snowflakes and cozy blankets but also a set of health challenges. Leading medical experts shed light on major ailments t… [+3143 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Aaas.org"
                    },
                    "author": null,
                    "title": "Science's 2023 Breakthrough: GLP-1 Agonists Show Promise Against Obesity-Associated Disease - AAAS",
                    "description": "The new class of drug therapies for weight loss is also challenging outdated notions about obesity.",
                    "url": "https://www.aaas.org/news/sciences-2023-breakthrough-glp-1-agonists-show-promise-against-obesity-associated-disease",
                    "urlToImage": "https://www.aaas.org/sites/default/files/styles/large/public/2023-12/science-1-65776ca445f2b634813966.jpg?itok=9uq-xKYT",
                    "publishedAt": "2023-12-15T20:49:52Z",
                    "content": "Science has named the development of glucagon like peptide-1 (GLP-1) agonists and this year's discovery that these drugs can blunt obesity-associated health problems as its 2023 Breakthrough of the Y… [+5261 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Umn.edu"
                    },
                    "author": null,
                    "title": "Respiratory illness levels continue to climb ahead of holidays - University of Minnesota Twin Cities",
                    "description": null,
                    "url": "https://www.cidrap.umn.edu/covid-19/respiratory-illness-levels-continue-climb-ahead-holidays",
                    "urlToImage": "https://www.cidrap.umn.edu/sites/default/files/styles/layout_large/public/article/sick%20girl.jpg?itok=h1OFf0fI",
                    "publishedAt": "2023-12-15T20:36:59Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "WION"
                    },
                    "author": "Prisha",
                    "title": "7 Indian Snacks Which Help In Decreasing LDL Cholesterol - WION",
                    "description": "7 Indian Snacks Which Help In Decreasing LDL Cholesterol",
                    "url": "https://www.wionews.com/web-stories/trending/7-indian-snacks-which-help-in-decreasing-ldl-cholesterol-1702670590292",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T20:12:54Z",
                    "content": "Upma, when prepared using quinoa and packed with veggies, makes for a satisfying and cholesterol-friendly snack."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Heart.org"
                    },
                    "author": null,
                    "title": "Heart health tips for when the mercury dips - American Heart Association News",
                    "description": "Cold weather can put an extra burden on the cardiovascular system. Here's expert advice on protecting your heart when temperatures plunge.",
                    "url": "https://www.heart.org/en/news/2023/12/15/heart-health-tips-for-when-the-mercury-dips",
                    "urlToImage": "https://www.heart.org/-/media/Images/News/2023/December-2023/1215ColdWeatherSafety_SC.jpg",
                    "publishedAt": "2023-12-15T18:29:15Z",
                    "content": "(Goodboy Picture Company/E+ via Getty Images)\r\nLea en español\r\nWinter is the right time of year for all kinds of cool activities – skiing, skating and ice fishing, just to name a few.\r\nUnfortunately,… [+5293 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Medical Xpress"
                    },
                    "author": "Science X",
                    "title": "Psilocybin has treatment potential for a range of psychiatric conditions but remains poorly understood, says study - Medical Xpress",
                    "description": "Medicinal psilocybin may prove to be an untapped therapeutic resource for a variety of psychiatric conditions identified by researchers at The Florey Institute of Neuroscience and Mental Health.",
                    "url": "https://medicalxpress.com/news/2023-12-psilocybin-treatment-potential-range-psychiatric.html",
                    "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/psilocybin-has-treatme.jpg",
                    "publishedAt": "2023-12-15T17:49:35Z",
                    "content": "Medicinal psilocybin may prove to be an untapped therapeutic resource for a variety of psychiatric conditions identified by researchers at The Florey Institute of Neuroscience and Mental Health.\r\nIn … [+3710 chars]"
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
                        "name": "Neurologyadvisor.com"
                    },
                    "author": "Jessica Nye, PhD",
                    "title": "Ubrogepant Administration in Prodromal Phase Helps Reduce Migraine Attacks - Neurology Advisor",
                    "description": "In a phase 3, multicenter, randomized, double-blind, placebo-controlled, crossover trial, researchers assessed the safety, efficacy, and tolerability of ubrogepant compared with placebo taken during the prodromal phase of migraine.",
                    "url": "https://www.neurologyadvisor.com/topics/migraine-and-headache/ubrogepant-administration-prodromal-phase-migraine-attacks/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T15:45:00Z",
                    "content": "Ubrogepant is well-tolerated and effective for the treatment of a migraine attack when taken during the prodromal phase, according to study findings published in the journal The Lancet.\r\nUbrogepant i… [+3216 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Financial Express"
                    },
                    "author": "The Financial Express",
                    "title": "Maharashtra, Telangana report alarming surge in mumps cases – Know symptoms, preventive tips - The Financial Express",
                    "description": null,
                    "url": "https://www.financialexpress.com/healthcare/news-healthcare/maharashtra-telangana-report-alarming-surge-in-mumps-cases-know-symptoms-preventive-tips-bkg/3340000/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T15:17:39Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "India.com"
                    },
                    "author": "https://www.india.com/author/lifestylestaff/",
                    "title": "Gut Health: Dehydration to Vitamin D Deficiency, 7 Reasons Why Digestive Issues Worsen in Winter - India.com",
                    "description": "In this article, we explore the reasons behind the causes of digestive problems during winter and provide tips for maintaining a healthy digestive system.",
                    "url": "https://www.india.com/health/gut-health-dehydration-to-vitamin-d-deficiency-7-reasons-why-digestive-issues-worsen-in-winter-6589391/",
                    "urlToImage": "https://static.india.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-15-at-8.28.00-PM.jpeg",
                    "publishedAt": "2023-12-15T14:58:53Z",
                    "content": "In this article, we explore the reasons behind the causes of digestive problems during winter and provide tips for maintaining a healthy digestive system.\r\nGut Health: Dehydration to Vitamin D Defici… [+3228 chars]"
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
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Zarafshan Shiraz",
                    "title": "‘It is not your fault’: Breaking the chains of self-stigmatisation in obesity - Hindustan Times",
                    "description": "Nearly every patient with obesity walks into consultation room with words of self-reproach: \"It is all my fault\". Here's how to break this self-stigma",
                    "url": "https://www.hindustantimes.com/lifestyle/relationships/it-is-not-your-fault-breaking-the-chains-of-self-stigmatisation-in-obesity-101702647055499.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/pexels-shvets-production-6975383_1667557266313_1702647999905.jpg",
                    "publishedAt": "2023-12-15T14:15:35Z",
                    "content": "A recurring pattern that never fails to strike a cord with the patients dealing with obesity is a pattern of self-blame, disappointment and a never-ending cycle of internalised stigma. Health experts… [+4787 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "DNA India"
                    },
                    "author": "Deepika Shakya",
                    "title": "8 superfoods to improve memory - DNA India",
                    "description": "Incorporating superfoods into your diet can have positive effects on memory and cognitive function.",
                    "url": "https://www.dnaindia.com/web-stories/lifestyle/8-superfoods-to-improve-memory-foods-to-increase-memory-improve-brain-function--1702644912751",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T13:19:00Z",
                    "content": "Pumpkin seeds are a great source of magnesium, iron, zinc, copper, and other minerals that contribute to brain health."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deccan Herald"
                    },
                    "author": "LAKSHMI M.S",
                    "title": "Dianabol Steroids Canada [CA] Dbol Pills cycle, Dosage, Side effects, before and after Results! - Deccan Herald",
                    "description": "Explore Dianabol steroids in Canada (CA), covering Dbol pills cycle, dosage, side effects, and before-and-after results. Learn about the use of Dianabol for effective muscle building",
                    "url": "https://www.deccanherald.com/brandspot/featured/dianabol-steroids-canada-ca-dbol-pills-cycle-dosage-side-effects-before-and-after-results-2813030",
                    "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Fcc883fb5-54e4-4fe0-a270-cc18db96ea03%2FPict_6.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
                    "publishedAt": "2023-12-15T12:50:23Z",
                    "content": "Natural or Artificial HGH: Which One Is Better and Where To Buy It In Canada HGH is a hormone that your body makes to help you grow and stay healthy. Sometimes, your body does not make enough HGH. Th… [+17658 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "DNA India"
                    },
                    "author": "Ritik Raj",
                    "title": "Health benefits of carrot juice - DNA India",
                    "description": "Health benefits of carrot juice.",
                    "url": "https://www.dnaindia.com/web-stories/lifestyle/health-benefits-of-carrot-juice-1702642768671",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T12:34:53Z",
                    "content": "Carrot juice is packed with numerous nutrients, like potassium, vitamin A, vitamin K, vitamin C, and others."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deccan Herald"
                    },
                    "author": "LAKSHMI M.S",
                    "title": "5 Best HGH Supplements South Africa - ZA to Increase Human Growth Hormone - Deccan Herald",
                    "description": "Discover the 5 best HGH supplements in South Africa (ZA) for 2024. Explore top human growth hormone boosters to enhance HGH levels effectively",
                    "url": "https://www.deccanherald.com/brandspot/featured/5-best-hgh-supplements-south-africa-za-to-increase-human-growth-hormone-2813000",
                    "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2F3f852e2b-7378-4bbb-bb77-6cff1cd37b19%2FPict_5.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
                    "publishedAt": "2023-12-15T12:34:03Z",
                    "content": "HGH is a hormone that helps you stay young and healthy. It makes your muscles, fat loss, and energy better, but it goes down with age, and you can feel old, weak, and tired all the time.\r\nIf you feel… [+29716 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Sushmita Srivastav",
                    "title": "Best home remedies: 5 health benefits of drinking amla juice on empty stomach every morning - Moneycontrol",
                    "description": "Health benefits of amla: Its unparalleled nutritional richness and therapeutic qualities make amla juice a much-revered elixir in Ayurveda and modern health practices alike.",
                    "url": "https://www.moneycontrol.com/news/health-and-fitness/what-to-eat-best-home-remedies-health-benefits-of-amla-juice-on-empty-stomach-how-to-lower-blood-sugar-how-to-get-healthy-skin-11911041.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/08/Health-benefits-of-amla-770x433.jpg",
                    "publishedAt": "2023-12-15T12:31:12Z",
                    "content": "Often the simplest choices wield the most profound impact when one is on the lookout for holistic wellness. Among these, the centuries-old practice of consuming amla juice on an empty stomach has gar… [+2929 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": "rituv",
                    "title": "Influenza Symptoms Can Linger Like Long Covid: Lancet Study - Swachh India NDTV",
                    "description": "The Lancet study showed that people hospitalised with seasonal influenza can suffer long-term, negative health effects, especially involving their lungs and airways, much like the effects of long Covid",
                    "url": "https://swachhindia.ndtv.com/influenza-symptoms-can-linger-like-long-covid-lancet-study-86081/",
                    "urlToImage": "https://w.ndtvimg.com/sites/3/2023/12/15202311/660-5.jpg",
                    "publishedAt": "2023-12-15T12:17:51Z",
                    "content": "New Delhi: People hospitalised with seasonal influenza can suffer long-term, negative health effects, especially involving their lungs and airways, much like the effects of long Covid, according to a… [+5131 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deccan Herald"
                    },
                    "author": "LAKSHMI M.S",
                    "title": "MK-677 (Ibutamoren) UK - United Kingdom Guide: Results, Dosage, Benefits, And More - Deccan Herald",
                    "description": "Explore the MK-677 (Ibutamoren) guide for the United Kingdom. Learn about MK-677 results, dosage, benefits, and more for informed decision-making",
                    "url": "https://www.deccanherald.com/brandspot/featured/mk-677-ibutamoren-uk-united-kingdom-guide-results-dosage-benefits-and-more-2-2812810",
                    "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2F15c06f40-db1f-4a82-85e5-20c5b0074baa%2FPict_1.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
                    "publishedAt": "2023-12-15T10:45:42Z",
                    "content": "Are you interested in MK-677 UK - United Kingdom? Do you want to find out the best brand to buy and where to order from? In this Ibutamoren MK-677 UK - United Kingdom guide for 2023, well tell you ev… [+16957 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Abplive.com"
                    },
                    "author": "Arron Williams",
                    "title": "Fact Check: Claim By US Cardiologist That Covid Vaccine Spike Proteins Cause Heart Damage Is False - ABP Live",
                    "description": "Cardiologist Peter McCullough, in a viral video, claims that the spike protein from Covid vaccines causes damage to the heart and that mRNA is 'stuck' in the body.",
                    "url": "https://news.abplive.com/fact-check/covid-vaccine-spike-proteins-cause-heart-damage-claim-us-doctor-peter-mccullough-false-1650198",
                    "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/15/505c2011d760399db3ce8f3eb92244241702628592354320_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
                    "publishedAt": "2023-12-15T09:08:47Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Saima Khan",
                    "title": "Refreshing fruits for empty stomach cravings - Sportskeeda",
                    "description": "Consuming fruit offers numerous health advantages. Consuming fruits for empty stomach in a balanced diet may help reduce a person's chance of developing certain illnesses.",
                    "url": "https://www.sportskeeda.com/health-and-fitness/most-refreshing-fruits-empty-stomach-mornings",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/d552a-17026248327746-1920.jpg",
                    "publishedAt": "2023-12-15T07:39:00Z",
                    "content": "Consuming fruit offers numerous health advantages. Consuming fruits for empty stomach in a balanced diet may help reduce a person's chance of developing certain illnesses.\r\nFruits supply the nutrient… [+4128 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Weather Channel"
                    },
                    "author": "The Weather Channel",
                    "title": "Eating a Late Breakfast and Dinner Post 9 PM Can Significantly Up Heart Attack Risk: Study | Weather.com - The Weather Channel",
                    "description": "A late-night indulgence post-9 PM could translate to a 28% higher risk of cerebrovascular diseases, such as stroke, compared to someone who finishes their meals by 8 PM.",
                    "url": "https://weather.com/en-IN/india/health/news/2023-12-15-eating-late-breakfast-dinner-post-9-pm-ups-heart-attack-risk",
                    "urlToImage": "https://s.w-x.co/in-food_breakfast_children.jpg",
                    "publishedAt": "2023-12-15T07:06:13Z",
                    "content": "Our modern lifestyles dictate mealtimes, often pushing breakfast to the sidelines and dinner into the realm of late-night indulgences. But little do we know, these seemingly inconsequential choices a… [+2102 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "India Today Information Desk",
                    "title": "10 homemade winter drinks to strengthen your kids' immunity - India Today",
                    "description": "Here are 10 delicious and nutritious winter drinks that can help keep your child's immunity strong.",
                    "url": "https://www.indiatoday.in/information/story/10-homemade-winter-drinks-to-strengthen-your-kids-immunity-2476274-2023-12-15",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/10-home-made-winter-drinks-to-keep-the-immunity-of-your-kid-strong-152207391-16x9_0.jpg?VersionId=.DqGLEqTATQDF5YP2JKvSVvh9WMczeLx",
                    "publishedAt": "2023-12-15T06:59:56Z",
                    "content": "Winter is a time for cosy nights by the fire, but it's also the season for sniffles, coughs, and colds. With kids back in school and the weather getting colder, it's more important than ever to keep … [+3131 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Assamtribune.com"
                    },
                    "author": "IANS",
                    "title": "New WHO screening guidelines can slash cervical cancer death rates by 63% - The Assam Tribune",
                    "description": "New Delhi, Dec 14: Cervical cancer death rates in low-to-middle-income countries can be reduced by more than 63 per cent through implementation of updated World Health Organization (WHO) screening...",
                    "url": "https://assamtribune.com/health-and-fitness/new-who-screening-guidelines-can-slash-cervical-cancer-death-rates-by-63-1509653",
                    "urlToImage": "https://assamtribune.com/images/logo.png",
                    "publishedAt": "2023-12-15T06:49:21Z",
                    "content": "New Delhi, Dec 14: Cervical cancer death rates in low-to-middle-income countries can be reduced by more than 63 per cent through implementation of updated World Health Organization (WHO) screening gu… [+2273 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deccan Herald"
                    },
                    "author": "LAKSHMI M.S",
                    "title": "11 Best Muscle Building Supplements for Rapid Muscle Growth 2024 - Deccan Herald",
                    "description": "Discover the 11 best muscle building supplements for rapid muscle growth in 2024. Explore top-rated supplements to enhance your muscle-building journey effectively",
                    "url": "https://www.deccanherald.com/brandspot/featured/11-best-muscle-building-supplements-for-rapid-muscle-growth-2024-2812469",
                    "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Fa58fdd71-1b1f-4f5b-8acf-522ca21d2bfa%2FPict_5.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
                    "publishedAt": "2023-12-15T06:37:51Z",
                    "content": "If you want to build muscle faster without using illegal steroids, you can try workout supplements. The best supplements for muscle building help your muscles grow, make you stronger, give you more e… [+16593 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "angshumanmaity",
                    "title": "What lifestyle changes should you make for your brain health? - The Indian Express",
                    "description": "What lifestyle changes should you make for your brain health?",
                    "url": "https://indianexpress.com/web-stories/life-style/what-lifestyle-changes-should-you-make-for-your-brain-health/",
                    "urlToImage": "https://images.indianexpress.com/2022/09/What-lifestyle-changes-should-you-make-for-your-brain-health.jpeg",
                    "publishedAt": "2023-12-15T06:02:35Z",
                    "content": "Sufficient omega 3s\r\nGood sources of omega 3s include fatty fish, flaxseed, walnuts, avocados, chia seeds, pure ghee, coconut oil, whole eggs, or a good quality supplement."
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Statesman"
                    },
                    "author": "The Statesman",
                    "title": "Revisiting the hazards of excessive sugar intake - The Statesman",
                    "description": null,
                    "url": "https://www.thestatesman.com/lifestyle/health/revisiting-the-hazards-of-excessive-sugar-intake-1503250133.html",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T04:56:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Prameyanews.com"
                    },
                    "author": null,
                    "title": "8 Benefits Of Consuming Cinnamon Water Regularly & How To Make It - Odisha News In English",
                    "description": "Discover the medicinal properties and 8 compelling reasons to make it a regular part of your routine.",
                    "url": "https://www.prameyanews.com/8-benefits-of-consuming-cinnamon-water-regularly--how-to-make-it",
                    "urlToImage": "https://moapi.prameyanews.com/prameya/document/post/1/1_89_1702604325551.webp",
                    "publishedAt": "2023-12-15T01:39:10Z",
                    "content": "Bhubaneswar, Dec 15: Consuming cinnamon water regularly can offer various health benefits due to the numerous medicinal properties associated with cinnamon. It's important to note that while cinnamon… [+2491 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dailypioneer.com"
                    },
                    "author": "Daily Pioneer",
                    "title": "AI to predict long term visual impairement in myopic patients - Daily Pioneer",
                    "description": "Researchers have developed a new artificial intelligence (AI) model that can predict the risk of long-term visual impairment in patients with high myopia, one of the top three causes of irreversible blindness in many regions of the world. The study is publish…",
                    "url": "https://www.dailypioneer.com/2023/india/ai-to-predict-long-term-visual-impairement-in-myopic-patients.html",
                    "urlToImage": "https://www.dailypioneer.com/images/logo.jpg",
                    "publishedAt": "2023-12-15T01:32:05Z",
                    "content": "Researchers have developed a new artificial intelligence (AI) model that can predict the risk of long-term visual impairment in patients with high myopia, one of the top three causes of irreversible … [+1415 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Healthline"
                    },
                    "author": "Gigen Mammoser",
                    "title": "Rare Sleep Disorder More Common Than Previously Thought - Healthline",
                    "description": "Researchers have found that this sleep disorder called idiopathic hypersomnia may actually be much more common than previously realized.",
                    "url": "https://www.healthline.com/health-news/are-you-tired-all-the-time-you-may-have-this-sleep-disorder",
                    "urlToImage": "https://media.post.rvohealth.io/wp-content/uploads/2023/12/female-tired-drinking-coffee-732x549-thumbnail.jpg",
                    "publishedAt": "2023-12-14T22:50:42Z",
                    "content": "<ul><li>Extreme daytime tiredness and long hours of sleep are indicators of a rare sleep disorder.</li><li>New research indicates the disorder, known as idiopathic hypersomnia, may be more common tha… [+6957 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Medical Xpress"
                    },
                    "author": "Science X",
                    "title": "Building a better salt substitute: New formula helps reduce high blood pressure - Medical Xpress",
                    "description": "Let's face it: Americans eat too much salt. The popular seasoning, also known as sodium chloride, is found in many food favorites, including pizza, chips, burgers, and breads. On average, people consume more than 3,400 milligrams of sodium chloride daily, or …",
                    "url": "https://medicalxpress.com/news/2023-12-salt-substitute-formula-high-blood.html",
                    "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2019/salt.jpg",
                    "publishedAt": "2023-12-14T21:31:23Z",
                    "content": "Let's face it: Americans eat too much salt. The popular seasoning, also known as sodium chloride, is found in many food favorites, including pizza, chips, burgers, and breads. On average, people cons… [+7026 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "inthehammer.com"
                    },
                    "author": "Liam McConnell",
                    "title": "Time to get your COVID, flu and RSV shots in Hamilton - inthehammer.com",
                    "description": "It’s time for Hamiltonians to get their COVID, flu and RSV vaccines as the city’s already strained hospitals face a jump in the communicable viruses. As people begin to shelter indoors away from the winter cold, like clockwork viruses begin to spread. Inevita…",
                    "url": "https://www.inthehammer.com/time-to-get-your-covid-flu-and-rsv-shots-in-hamilton/",
                    "urlToImage": "https://www.inthehammer.com/wp-content/uploads/2022/09/COVID-Vaccines-booster-620x256.jpg",
                    "publishedAt": "2023-12-14T20:33:14Z",
                    "content": "It’s time for Hamiltonians to get their COVID, flu and RSV vaccines as the city’s already strained hospitals face a jump in the communicable viruses.\r\nAs people begin to shelter indoors away from the… [+1856 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "WION"
                    },
                    "author": "Prisha",
                    "title": "7 Health Benefits Of Consuming White Butter - WION",
                    "description": "7 Health Benefits Of Consuming White Butter",
                    "url": "https://www.wionews.com/web-stories/trending/7-health-benefits-of-consuming-white-butter-1702585010177",
                    "urlToImage": null,
                    "publishedAt": "2023-12-14T20:31:57Z",
                    "content": "White butter is filled with nutrients, like vitamin E, which contribute to healthy skin and promote a radiant complexion."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Divya Singh",
                    "title": "French woman gave birth to a baby through a rare abdominal ectopic pregnancy - Sportskeeda",
                    "description": "A 37-year-old lady in France discovered, shockingly, that she was 23 weeks pregnant and that a baby was growing inside her intestine, due to ectopic pregnancy.",
                    "url": "https://www.sportskeeda.com/health-and-fitness/news-french-woman-gave-birth-baby-rare-abdominal-ectopic-pregnancy",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/dd8fd-17025711475045-1920.jpg",
                    "publishedAt": "2023-12-14T16:28:00Z",
                    "content": "A 37-year-old lady in France discovered, shockingly, that she was 23 weeks pregnant and that a baby was growing inside her intestine, due to ectopic pregnancy. A 'normally-formed' fetus was growing i… [+2704 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "MENAFN.COM"
                    },
                    "author": "MENAFN",
                    "title": "Vitamin D Supplements Can Keep Bones Strong But They May Also Have Other Benefits To Your Health - MENAFN.COM",
                    "description": "(MENAFN - The Conversation)  Most of us don't worry about getting vitamin D when the weather's warm and the sun is shining. But as winter a",
                    "url": "https://menafn.com/1107598288/Vitamin-D-Supplements-Can-Keep-Bones-Strong-But-They-May-Also-Have-Other-Benefits-To-Your-Health",
                    "urlToImage": "https://menafn.com/updates/pr/2023-12/14/TC_ef25bimage_story.jpg",
                    "publishedAt": "2023-12-14T14:20:03Z",
                    "content": "(MENAFN- The Conversation) Most of us don't worry about getting vitamin D when the weather's warm and the sun is shining. But as winter approaches, accompanied by overcast days and long nights, you m… [+5539 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Parmita Uniyal",
                    "title": "How to prevent mouth ulcers in children, experts share tips - Hindustan Times",
                    "description": "Mouth ulcers in children are common and could be due to a range of factors from injury to nutritional deficiencies. Here are prevention tips by experts. | Health",
                    "url": "https://www.hindustantimes.com/lifestyle/health/how-to-prevent-mouth-ulcers-in-children-experts-share-tips-101702558566276.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/14/1600x900/mouth_ulcer_1702558636507_1702558645116.jpg",
                    "publishedAt": "2023-12-14T13:01:07Z",
                    "content": "Mouth ulcers are quite common in children but can be quite distressing for those who regularly suffer from them. Small bumps on gums, lips or tongue can cause trouble in eating and drinking and some … [+3692 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "News-Medical.Net"
                    },
                    "author": null,
                    "title": "Rift over when to use N95s puts health workers at risk again - News-Medical.Net",
                    "description": "Three years after more than 3,600 health workers died of covid-19, occupational safety experts warn that those on the front lines may once again be at risk if the Centers for Disease Control and Prevention takes its committee's advice on infection control gui…",
                    "url": "https://www.news-medical.net/news/20231214/Rift-over-when-to-use-N95s-puts-health-workers-at-risk-again.aspx",
                    "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Influenza-620x480.jpg",
                    "publishedAt": "2023-12-14T12:44:00Z",
                    "content": "Three years after more than 3,600 health workers died of covid-19, occupational safety experts warn that those on the front lines may once again be at risk if the Centers for Disease Control and Prev… [+8579 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deccan Herald"
                    },
                    "author": "LAKSHMI M.S",
                    "title": "PhenQ Reviews in South Africa and New Zealand: PhenQ Results, Side Effects, Before And After, Negative Reviews (2024) - Deccan Herald",
                    "description": "Explore PhenQ reviews in South Africa and New Zealand in 2024. Learn about PhenQ results, side effects, before and after transformations, and negative reviews for informed decision-making",
                    "url": "https://www.deccanherald.com/brandspot/featured/phenq-reviews-in-south-africa-and-new-zealand-phenq-results-side-effects-before-and-after-negative-reviews-2024-2811201",
                    "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2F62e94dbf-248a-47f7-af2d-a5caeb72dee5%2FPenq.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
                    "publishedAt": "2023-12-14T11:42:26Z",
                    "content": "Are you fed up with browsing through endless weight loss articles and products, hoping to find a solution that actually works? Here, we reveal to you the ultimate secret to successful weight loss: Ph… [+20002 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Lancet"
                    },
                    "author": "The Lancet",
                    "title": "Postnatal morbidity: prevalent, enduring, and neglected - The Lancet",
                    "description": null,
                    "url": "https://www.thelancet.com/journals/langlo/article/PIIS2214-109X%2823%2900559-4/fulltext",
                    "urlToImage": null,
                    "publishedAt": "2023-12-13T01:11:19Z",
                    "content": null
                }
            ]
        },
        {
            "technology": [
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Zeeshan Khan",
                    "title": "Battlegrounds Mobile India (BGMI) Duo guide for December 2023 - Sportskeeda",
                    "description": "Battlegrounds Mobile India (BGMI) demands a great deal of commitment, perseverance, and consistency from players to master its Duo game mode.",
                    "url": "https://www.sportskeeda.com/bgmi/battlegrounds-mobile-india-bgmi-duo-guide-december-2023",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/8b74c-17027159287093-1920.jpg",
                    "publishedAt": "2023-12-16T10:01:50Z",
                    "content": "Battlegrounds Mobile India (BGMI) demands a great deal of commitment, perseverance, and consistency from players to master its Duo game mode. In this mode, you cannot win the coveted Chicken Dinner a… [+2947 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "15 MORE UNDERRATED PS5 Games You Never Played - GamingBolt",
                    "description": "Sony has provided a commendable generational leap with the PS5, and the console has been selling like hot cakes since its launch 3 years ago. But during that...",
                    "url": "https://www.youtube.com/watch?v=m-ksNf7VCbY",
                    "urlToImage": "https://i.ytimg.com/vi/m-ksNf7VCbY/maxresdefault.jpg",
                    "publishedAt": "2023-12-16T10:00:28Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Affiliate Desk",
                    "title": "10 best Toshiba washing machine compared with other brands: Buyer's guide - Hindustan Times",
                    "description": "10 best Toshiba washing machines compared with other brands will give buyers complete clarity before making a purchase. Make an informed decision.",
                    "url": "https://www.hindustantimes.com/technology/10-best-toshiba-washing-machine-compared-with-other-brands-buyers-guide-101702708744749.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/washing_machine_top_load_1702710969760_1702710984762.jpg",
                    "publishedAt": "2023-12-16T09:50:38Z",
                    "content": "Toshiba is a renowned brand for electronics; however, does it really stand out when it comes to washing machines? In this article, we embark on a journey to explore and compare Toshiba washing machin… [+23777 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India TV News"
                    },
                    "author": "Written by Vishal Upadhyay",
                    "title": "Grab best deals before Flipkart's year-end sale ends today: Smartphone picks inside - India TV News",
                    "description": "Best smartphone deals in Flipkart's Year-End Sale, with top picks like the SAMSUNG Galaxy S23 Ultra, APPLE iPhone 14, Nothing Phone (2), Google Pixel 7a, and MOTOROLA Edge 40 Neo.",
                    "url": "https://www.indiatvnews.com/technology/news/grab-top-smartphone-deals-before-flipkart-year-end-sale-ends-smartphone-picks-inside-2023-12-16-907575",
                    "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/samsung-galaxy-s23-flipkart-year-end-sale-1702719417.jpg",
                    "publishedAt": "2023-12-16T09:47:12Z",
                    "content": "Flipkart's Year-End Sale ends Today: Closing on December 16 (Today), Flipkart's Year-End Sale sale offers something for everyone. As we approach the sale's finale, let's explore the top smartphone de… [+1922 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "POCO C65, an afforadable smartphone with MediaTek Helio G85 SoC launched in India: Check price, specs | Mint - Mint",
                    "description": "The POCO C65 smartphone is set to be released on Flipkart from December 18, 2023, with prices starting at Rs. 7,499. Customers can avail discounted prices of Rs. 7,499, Rs. 8,499, and Rs. 9,999 for different variants.",
                    "url": "https://www.livemint.com/technology/gadgets/poco-c65-an-afforadable-smartphone-with-mediatek-helio-g85-soc-launched-in-india-check-price-specs-11702719567819.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/rfffffffffffffffffffffffffffff_1702719818176_1702719826213.webp",
                    "publishedAt": "2023-12-16T09:44:28Z",
                    "content": "The Poco C65 has been officially introduced in the Indian market, solidifying its position as the newest entrant in the budget smartphone category. With an appealing design and strong internal featur… [+2374 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "The Indian Express",
                    "title": "Grab iPhones starting at Rs 53,990 and more: Vijay Sales’ End of Year sale is here - The Indian Express",
                    "description": null,
                    "url": "https://indianexpress.com/article/technology/tech-news-technology/electronics-iphone-vijay-sales-end-of-year-sale-9070815/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T09:35:35Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "The Hindu",
                    "title": "Intel unveils next-gen AI chipsets - The Hindu",
                    "description": null,
                    "url": "https://www.thehindu.com/sci-tech/technology/intel-unveils-next-generation-ai-chipsets/article67644714.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T09:31:00Z",
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
                        "name": "Sportskeeda"
                    },
                    "author": "Rohan Jaiswal",
                    "title": "Which mobs spawn in Minecraft trial chambers? - Sportskeeda",
                    "description": "Recently, Minecraft's Overworld welcomed the ancient city, a new underground structure.",
                    "url": "https://www.sportskeeda.com/minecraft/which-mobs-spawn-minecraft-trial-chambers-2",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/dfc14-17027136240324-1920.jpg",
                    "publishedAt": "2023-12-16T09:06:00Z",
                    "content": "Recently, Minecraft's Overworld welcomed the ancient city, a new underground structure. Now, there's another addition in the works to spice up players' mining adventures: the trial chambers, set to d… [+2880 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Tech Desk",
                    "title": "Government issues high-risk alert for Apple and Samsung products, cites multiple vulnerabilities - The Indian Express",
                    "description": "The Indian Computer Emergency Response Team (CERT-In) has alerted Apple and Samsung users of multiple flaws that could compromise their data and device security.",
                    "url": "https://indianexpress.com/article/technology/tech-news-technology/govt-risk-alert-apple-samsung-9070717/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/iphone-reuters.jpg",
                    "publishedAt": "2023-12-16T08:27:23Z",
                    "content": "Apple and Samsung users, beware: the Indian government has issued a high-risk alert for both companies, warning of multiple flaws that could compromise your data and device.According to the Indian Co… [+1445 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India TV News"
                    },
                    "author": "Written by Vishal Upadhyay",
                    "title": "Netflix launches GTA trilogy on Android, iOS: Check details here | Technology News - India TV News",
                    "description": "Netflix brings the nostalgia with new Grand Theft Auto games for mobile users, introduces 86 games so far, and plans for more",
                    "url": "https://www.indiatvnews.com/technology/news/netflix-launches-gta-trilogy-on-android-ios-check-details-here-2023-12-16-907561",
                    "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/gta-trilogy-the-definitive-edition-now-available-on-netflix-1702713318.jpg",
                    "publishedAt": "2023-12-16T08:11:04Z",
                    "content": "Netflix has recently rolled out three classic Grand Theft Auto games Grand Theft Auto III, GTA Vice City, and GTA San Andreas, all part of the GTA: The Trilogy - The Definitive Edition. These games a… [+1881 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Affiliate Desk",
                    "title": "8 best Apple smartwatches: The ultimate smart wearable list for you - Hindustan Times",
                    "description": "Explore Apple's smartwatch options in this complete list, including features, designs, and functions, to help you find the right wearable tech.",
                    "url": "https://www.hindustantimes.com/technology/8-best-apple-smartwatches-the-ultimate-smart-wearable-list-for-you-101702666164236.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/Apple_1702668269427_1702668269686.jpg",
                    "publishedAt": "2023-12-16T07:57:31Z",
                    "content": "Introduction\r\nApple's smartwatches are leaders in the rapidly changing field of wearable electronics, expertly combining design and use. The need for best smart wearables that improve our lives has i… [+19653 chars]"
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
                        "name": "India Today"
                    },
                    "author": "India Today Information Desk",
                    "title": "Garena Free Fire MAX Redeem Codes for December 16, 2023: How to redeem the codes - India Today",
                    "description": "Here is all you need to know about the new active codes for the list of New Garena Free Fire MAX Redeem codes and the steps to redeem them.",
                    "url": "https://www.indiatoday.in/information/story/garena-free-fire-max-redeem-codes-for-december-16-2023-how-to-redeem-the-codes-2476700-2023-12-16",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/garena-free-fire-max-130356711-16x9.png?VersionId=u74EMekGn1h7P8vioHDUur6p_gf31wxp",
                    "publishedAt": "2023-12-16T07:40:28Z",
                    "content": "Garena Free Fire Max, a popular mobile battle royale game, was released in 2020 as an updated version of the original Garena Free Fire. The game boasts enhanced graphics, controls, gameplay mechanics… [+1477 chars]"
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
                        "name": "Hindustan Times"
                    },
                    "author": "Affiliate Desk",
                    "title": "Top 10 43-inch Android TVs for smart, versatile viewing - Hindustan Times",
                    "description": "Explore our curated list of the top 10 43-inch Android TVs, tailored for every budget. This guide highlights the best mid-size Android TVs.",
                    "url": "https://www.hindustantimes.com/technology/top-10-43-inch-android-tvs-for-smart-versatile-viewing-101702622522709.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/43_inch_android_tv_1702629807162_1702629826689.jpg",
                    "publishedAt": "2023-12-16T06:34:47Z",
                    "content": "In the world of home entertainment, the 43-inch Android TV has become a staple for those seeking a perfect balance between size and functionality. This size is ideal for most living spaces, offering … [+22594 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Surat Mehta | Future Of Mobility - ET Auto",
                    "description": "At Volvo CE India, customer-centricity reigns supreme, crafting an extraordinary experience through daily innovation. Surat Mehta, Head of Productivity & Ret...",
                    "url": "https://www.youtube.com/watch?v=cJeq0Knz5EU",
                    "urlToImage": "https://i.ytimg.com/vi/cJeq0Knz5EU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEUgXShlMA8=&rs=AOn4CLA7P5PSRNcoGkZEsJhs7edfqDWW9Q",
                    "publishedAt": "2023-12-16T06:26:31Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Thehansindia.com"
                    },
                    "author": "The Hans India",
                    "title": "Apple to pay $25 mn to settle lawsuit over Family Sharing feature - The Hans India",
                    "description": "Apple has agreed to pay $25 million to settle a class-action lawsuit over its Family Sharing feature.",
                    "url": "https://www.thehansindia.com/business/apple-to-pay-25-mn-to-settle-lawsuit-over-family-sharing-feature-844667",
                    "urlToImage": "https://assets.thehansindia.com/h-upload/2023/12/16/1407127-apple.jpg",
                    "publishedAt": "2023-12-16T05:54:10Z",
                    "content": "San Francisco : Applehas agreed to pay $25 million to settle a class-action lawsuit over its Family Sharing feature. The lawsuit, filed in 2019, alleged that Apple misrepresented the ability to use i… [+1158 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Asus ROG Phone 8, Phone 8 Pro unveiling on Jan 9, 2024: Here's what to expect | Mint - Mint",
                    "description": "Asus has officially announced that the upcoming ROG Phone 8 series will be revealed at CES 2024, featuring Qualcomm's Snapdragon 8 Gen 3 SoC.",
                    "url": "https://www.livemint.com/technology/asus-rog-phone-8-phone-8-pro-unveiling-on-jan-9-2024-heres-what-to-expect-11702703649952.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/ASUS_ROG_7_ULTIMATE_1681444246633_1702703730765.png",
                    "publishedAt": "2023-12-16T05:26:31Z",
                    "content": "Asus has officially announced that the upcoming ROG Phone 8 series, featuring Qualcomm's latest Snapdragon 8 Gen 3 SoC, is set to be revealed at the Consumer Electronics Show (CES) 2024 on January 9.… [+2379 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BusinessLine"
                    },
                    "author": "BL Chennai Bureau",
                    "title": "No need to remember your passwords now; store it in a secure ‘companion’ device - BusinessLine",
                    "description": "Securely store passwords with Precision Group's InnaIT Password Manager, using biometrics & public key infrastructure.",
                    "url": "https://www.thehindubusinessline.com/info-tech/no-need-to-remember-your-passwords-now-store-it-in-a-secure-companion-device/article67641714.ece",
                    "urlToImage": "https://bl-i.thgim.com/public/news/tszl0q/article67644389.ece/alternates/LANDSCAPE_1200/Mathew%20Chacko.jfif",
                    "publishedAt": "2023-12-16T05:24:23Z",
                    "content": "The 350-crore Chennai-based Precision Group has forayed into the consumer segment with the launch of its password manager that stores all the passwords in a companion device rather than a local devic… [+1663 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Swarajya"
                    },
                    "author": "Swarajya Staff",
                    "title": "'Multiple Vulnerabilities': India Issues High-Risk Warning For Apple Products Following Samsung Advisory - Swarajya",
                    "description": null,
                    "url": "https://swarajyamag.com/news-brief/multiple-vulnerabilities-india-issues-high-risk-warning-for-apple-products-following-samsung-advisory",
                    "urlToImage": "https://swarajya.gumlet.io/swarajya/2021-12/a547b6eb-04d9-4dbe-8b7c-344fea60c04e/apple_1200.jpg",
                    "publishedAt": "2023-12-16T04:51:00Z",
                    "content": "Following a similar high-risk warning issued for Samsung, India's apex cybersecurity agency has issued an advisory on Friday for Apple products. \r\nThe Indian Computer Emergency and Response Team (CER… [+1052 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SamMobile"
                    },
                    "author": "SamMobile, Asif Iqbal Shaik",
                    "title": "Samsung may launch Snapdragon version of Galaxy S23 FE in India - SamMobile - Samsung news",
                    "description": "India was the first country where the Galaxy S23 FE was launched. The device was announced a few weeks ago, ...",
                    "url": "https://www.sammobile.com/news/galaxy-s23-fe-snapdragon-launch-india/",
                    "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/10/Galaxy-S23-FE-review-camera-720x404.jpg",
                    "publishedAt": "2023-12-16T04:46:00Z",
                    "content": "India was the first country where the Galaxy S23 FE was launched. The device was announced a few weeks ago, and it was gradually launched in other countries, including South Korea and the US. The Nor… [+2149 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "gizmochina"
                    },
                    "author": "gizmochina",
                    "title": "Indkal Technologies launches Wobble Beams series of TWS earbuds in India - gizmochina",
                    "description": null,
                    "url": "https://www.gizmochina.com/2023/12/16/indkal-technologies-launches-wobble-beams-series-tws-earbuds/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T04:19:51Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Abhipsito Das",
                    "title": "Pokemon GO December 2023 Community Day exclusive moves PvP and PvE analysis - Sportskeeda",
                    "description": "The Pokemon GO December 2023 Community Day will bring back Pocket Monsters featured in the Community Days throughout 2023 and 2022.",
                    "url": "https://www.sportskeeda.com/pokemon/pokemon-go-december-2023-community-day-exclusive-moves-pvp-pve-analysis",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/b79c3-17026987312588-1920.jpg",
                    "publishedAt": "2023-12-16T04:09:00Z",
                    "content": "The Pokemon GO December 2023 Community Day will bring back Pocket Monsters featured in the Community Days throughout 2023 and 2022. The ones from this year can be caught in the wild, while those from… [+8798 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "gizmochina"
                    },
                    "author": "gizmochina",
                    "title": "Nothing Phone (2a) leak reveals dual-camera design, MediaTek Dimensity 7200 processor - gizmochina",
                    "description": null,
                    "url": "https://www.gizmochina.com/2023/12/16/nothing-phone-2a-leak-reveals-dual-camera-design-mediatek-dimensity-7200-processor/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T03:51:08Z",
                    "content": null
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
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Lukus Herblet",
                    "title": "All new The Indigo Disk moves and TMs in Pokemon Scarlet and Violet - Sportskeeda",
                    "description": "DLCs for mainline Pokemon games, including Pokemon Scarlet and Violet, do a great job of expanding the overall content available to players.",
                    "url": "https://www.sportskeeda.com/pokemon/all-new-the-indigo-disk-moves-tms-pokemon-scarlet-violet",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/c448b-17026896498878-1920.jpg",
                    "publishedAt": "2023-12-16T03:10:00Z",
                    "content": "DLCs for mainline Pokemon games, including Pokemon Scarlet and Violet, do a great job of expanding the overall content available to players. One of the factors that players look forward to from these… [+5858 chars]"
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
                        "name": "Mysmartprice.com"
                    },
                    "author": null,
                    "title": "Realme C67 5G Early Access Sale Today via Flipkart: Price in India, Launch Offers, Specifications - MySmartPrice",
                    "description": "Realme C67 5G early access sale will be live at 12:00 PM, today in India. Take a look at the handset's price, specifications, and features.",
                    "url": "https://www.mysmartprice.com/gear/realme-c67-5g-early-access-sale-flipkart-price-launch-offers-specifications/",
                    "urlToImage": "https://assets.mspimages.in/gear/wp-content/uploads/2023/12/Realme-C67-5G-MySmartPrice.jpeg",
                    "publishedAt": "2023-12-16T02:38:49Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "GSMArena.com"
                    },
                    "author": "Vlad",
                    "title": "iPhone 17 Pro Max to have a 48 MP periscope telephoto camera - GSMArena.com news - GSMArena.com",
                    "description": "It will be optimized for use with the Vision Pro headset. The iPhone 15 models are barely a few months old and we've already had a bunch of iPhone 16...",
                    "url": "https://www.gsmarena.com/iphone_17_pro_max_to_have_a_48_mp_periscope_telephoto_camera-news-60934.php",
                    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/12/iphone-17-pro-max-telephoto-camera/-952x498w6/gsmarena_000.jpg",
                    "publishedAt": "2023-12-16T01:59:02Z",
                    "content": "The iPhone 15 models are barely a few months old and we've already had a bunch of iPhone 16 rumors, but wait - today even those are being one-upped since we're talking about the iPhone 17 Pro Max. Ye… [+1050 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Google Maps update: Police won’t be able to track which users were near a crime - Hindustan Times",
                    "description": "Law enforcement agencies globally frequently request location and search data from Google through warrants.",
                    "url": "https://www.hindustantimes.com/technology/google-maps-update-police-won-t-be-able-to-track-which-users-were-near-a-crime-101702689803809.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Within-10-minutes-of-a-blockade--which-could-be-du_1685475769462_1702689824623.jpg",
                    "publishedAt": "2023-12-16T01:58:31Z",
                    "content": "Alphabet Inc.s Google is modifying its Maps tool to cease access to users' individual location histories, thus in course eliminating its capability to respond to law enforcement warrants seeking loca… [+1892 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Space.com"
                    },
                    "author": "Tereza Pultarova",
                    "title": "World's best space-based thermometer dead 2 months after 1st image release - Space.com",
                    "description": "HOTSAT-1's images thrilled scientists, but now the craft's innovative camera is dead.",
                    "url": "https://www.space.com/satellite-satvu-hotsat-dead-after-six-months",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/FLoxTEUog9AweQTHKePxd5-1200-80.png",
                    "publishedAt": "2023-12-15T23:00:26Z",
                    "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Abplive.com"
                    },
                    "author": "ABP News Bureau",
                    "title": "Google's Tool To Repair Pixel Phones And DIY Manuals Coming Soon - ABP Live",
                    "description": "To recall, last year, Google had collaborated with iFixit, paving way for the introduction of enhanced repair features.",
                    "url": "https://news.abplive.com/technology/gadgets/google-tool-to-repair-pixel-phones-and-diy-manuals-coming-soon-1650325",
                    "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/16/f80c7b61d7576da4c59368d501754aa41702673763824295_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628",
                    "publishedAt": "2023-12-15T20:57:09Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Abplive.com"
                    },
                    "author": "ABP News Bureau",
                    "title": "Google To Start Trials For Tracking Protection In Chrome Browser From This Date. Details - ABP Live",
                    "description": "Cookies are unique files enabling websites and advertisers to identify individual web users and monitor their browsing patterns.",
                    "url": "https://news.abplive.com/technology/google-start-trials-tracking-protection-chrome-browser-january-2024-cross-site-default-1650324",
                    "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/16/a0d596451b6ba5b28d03aa820a8f77b11702670998831295_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628",
                    "publishedAt": "2023-12-15T20:10:45Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Ticker.tv"
                    },
                    "author": "Tanya King",
                    "title": "WhatsApp Introduces View Once Feature for Voice Messages - TickerTV News",
                    "description": "WhatsApp Introduces View Once Feature for Voice Messages - TickerTV News",
                    "url": "https://ticker.tv/news/finally-whatsapp-lets-you-send-view-once-voice-messages/337138/",
                    "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_a_man_using_smartphone_or_computer_on_outdoor_d6e5e329-ac5e-4903-9955-cb8905af1f30.png",
                    "publishedAt": "2023-12-15T19:24:13Z",
                    "content": "WhatsApp is enhancing its commitment to digital privacy with the introduction of the View Once feature for voice messages. This new update follows the successful implementation of the View Once featu… [+2365 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Tech",
                    "title": "How to launch your business on Instagram: A step-by-step guide to make a big impact - HT Tech",
                    "description": "Discover the essential steps to kickstart your business on Instagram and become part of the thriving community of over 200 million daily visitors. Learn how to launch your business on Instagram to maximize your impact.",
                    "url": "https://tech.hindustantimes.com/how-to/how-to-launch-your-business-on-instagram-a-step-by-step-guide-to-make-a-big-impact-71702556071194.html",
                    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/14/1600x900/jjjjjjjjjjjjjjjjjjj_1702556171363_1702556180407.jpg",
                    "publishedAt": "2023-12-15T18:14:35Z",
                    "content": "Starting your business on Instagram opens up a world of opportunities, connecting you with over 200 million daily visitors. To make the most of this platform, follow these steps to set up your Instag… [+3788 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "How Mind-Controlled Bionic Arms Fuse To The Body | WIRED - WIRED",
                    "description": "A game-changer in prosthetics has been introduced to the world, and for the first time, amputees are regaining sensation through an electrical signal from th...",
                    "url": "https://www.youtube.com/watch?v=Ipw_2A2T_wg",
                    "urlToImage": "https://i.ytimg.com/vi/Ipw_2A2T_wg/maxresdefault.jpg",
                    "publishedAt": "2023-12-15T17:00:02Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "BGR"
                    },
                    "author": "José Adorno, José Adorno",
                    "title": "iPhone 13/14 charging speeds got a boost thanks to this update - BGR",
                    "description": "Apple just released iOS 17.2. This update gives a charging speed boost to iPhone 13 and iPhone models thanks to the new Qi2 support.",
                    "url": "https://bgr.com/tech/iphone-qi2-wireless-charging-support-ios-17-2/",
                    "urlToImage": "https://bgr.com/wp-content/uploads/2021/09/apple-iphone-13-pro-3.jpg?quality=82&strip=all",
                    "publishedAt": "2023-12-15T15:34:00Z",
                    "content": "Apple just released iOS 17.2. While this operating system update has some hidden gems, one of the best features available is the expansion of Qi2 wireless charging support to older iPhone models, inc… [+1772 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "The end of E3, Apple fights back against iPhone thieves and more | The Morning After - Engadget",
                    "description": "The Morning After makes sure you're up to speed on what's happening in the world of technology. Correction: We said that SGF started in 2023, but it began in...",
                    "url": "https://www.youtube.com/watch?v=ue3WOm0VAPY",
                    "urlToImage": "https://i.ytimg.com/vi/ue3WOm0VAPY/maxresdefault.jpg",
                    "publishedAt": "2023-12-15T15:14:51Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zoom"
                    },
                    "author": "Shubham Arora",
                    "title": "OnePlus Open Users Report Screen Issues; Teardown Video Reveals Possible Cause - Times Now",
                    "description": "OnePlus Open users report inner screen issues, including black patches or dead pixels. A teardown video by JerryRigEverything suggests that dust beneath the ultra-thin glass might contribute to the problem. User complaints on social media platforms prompt con…",
                    "url": "https://www.timesnownews.com/technology-science/oneplus-open-users-report-screen-issues-teardown-video-reveals-possible-cause-article-106029630",
                    "urlToImage": "https://static.tnn.in/thumb/msid-106030087,thumbsize-1118067,width-1280,height-720,resizemode-75/106030087.jpg",
                    "publishedAt": "2023-12-15T15:08:46Z",
                    "content": "'May I?': Video Shows Moment Ukraine Politician Serhiy Batrin Detonated Grenades At City Council Meeting, Injuring 26"
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
                        "name": "WION"
                    },
                    "author": "WION Web Team",
                    "title": "European research flags AI chatbots for providing false answers, particularly on elections - WION",
                    "description": "European research flags AI chatbots for providing false answers, particularly on elections",
                    "url": "https://www.wionews.com/technology/european-research-flags-ai-chatbots-for-providing-false-answers-particularly-on-elections-670063",
                    "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/15/399402-new-wion-13.jpg",
                    "publishedAt": "2023-12-15T14:33:33Z",
                    "content": "Amid the surge in popularity of AI chatbots, European non-profits AI Forensics and AlgorithmWatch has warned that the technology gives inaccurate answers to one of every three questions.\r\nResearch co… [+3232 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Brave The Chill: Unveiling Top Picks in Women's Winter Kurtas, At Up To 75% Off - NDTV",
                    "description": "Winter is here, and it's the perfect moment to upgrade your wardrobe with the latest trends in women's winter and woolen kurtas from Amazon, at up to 75% off.",
                    "url": "https://www.ndtv.com/shopping/brave-the-chill-unveiling-top-picks-in-womens-winter-kurtas-at-up-to-75-off-4679008",
                    "urlToImage": "https://c.ndtvimg.com/2023-06/depid2f8_kurta-styles_650x400_08_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675?ver-20231203.06",
                    "publishedAt": "2023-12-15T14:10:34Z",
                    "content": "As winter sets in, it's time to blend warmth and style with our top picks in women's winter and woollen kurtas. This selection promises a fusion of fashion, comfort and affordability, making them win… [+8116 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Affiliate Desk",
                    "title": "7 Best 65-inch OLED TVs from the top brands of India: From Samsung, Sony, LG and more with unmatched visuals | Mint - Mint",
                    "description": "Experience unparalleled visuals with the 65-inch OLED TV, a masterpiece in the realm of high-performance TVs. This guide highlights the best OLED TVs from India's top brands, showcasing premium OLED technology that transforms your viewing experience.",
                    "url": "https://www.livemint.com/technology/gadgets/7-best-65-inch-oled-tvs-from-the-top-brands-of-india-from-samsung-sony-lg-and-more-with-unmatched-visuals-11702622745488.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/65_inch_oled_tv_1702634033915_1702634047043.jpg",
                    "publishedAt": "2023-12-15T13:33:20Z",
                    "content": "In today's world of advanced technology, the 65-inch OLED TV has emerged as a symbol of cutting-edge home entertainment. These TVs are not just screens; they are gateways to an immersive viewing expe… [+23109 chars]"
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
                        "name": "India Today"
                    },
                    "author": "India Today Tech",
                    "title": "Indian govt warns against bug in Google Chrome, Microsoft Edge that can allow hackers to steal your data - India Today",
                    "description": "CERT-In has issued a warning about a bug in Google Chrome and Microsoft Edge that could lead to data theft. The vulnerability in the browsers has been flagged as a high severity issue.",
                    "url": "https://www.indiatoday.in/technology/news/story/indian-govt-warns-against-bug-google-chrome-microsoft-edge-allow-hackers-steal-data-2476497-2023-12-15",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/google-chrome-microsoft-edge-browser-update-155801106-16x9_0.png?VersionId=KHaghhaql8NcNzEXCts563Rl4minIZCa",
                    "publishedAt": "2023-12-15T12:59:32Z",
                    "content": "The Indian Computer Emergency Response Team (CERT-In) has released an alert against a bug in Google Chrome and Microsoft Edge browsers that could lead to users’ sensitive data being stolen. CERT-In f… [+2150 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Noise launches its first 4G calling smartwatch, Noise Voyage: All the details - Times of India",
                    "description": "Noise has launched Noise Voyage, a 4G calling smartwatch in India. It is partnered with Jio and Airtel to provide 4G e-SIM capabilities. Pre-booking f",
                    "url": "https://timesofindia.indiatimes.com/gadgets-news/noise-launches-its-first-4g-calling-smartwatch-noise-voyage-all-the-details/articleshow/106022643.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106022633,width-1070,height-580,imgsize-318723,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T11:31:58Z",
                    "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Firstpost"
                    },
                    "author": "FP Staff",
                    "title": "Samsung launches Galaxy Book 4 Series with Intel Ultra Core AI CPUs, RTX 4000 GPUs; Check specs, availability - Firstpost",
                    "description": "Samsung has updated its line of Ultrabook laptops, with the Galaxy Book  series now coming with the new Intel Ultra Core CPUs for AI enabled PCs. This new series has three models: Galaxy Book  Pro, Galaxy Book  Pro , and Galaxy Book  Ultra, and comes with Int…",
                    "url": "https://www.firstpost.com/tech/samsung-launches-galaxy-book-4-series-with-intel-ultra-core-ai-cpus-rtx-4000-gpus-check-specs-availability-13507952.html",
                    "urlToImage": "https://images.firstpost.com/wp-content/uploads/2023/12/Galaxy-Book4-SeriesSamsung-launches-Galaxy-Book-4-Series-with-Intel-Ultra-Core-AI-CPUs-RTX-4000-GPUs-Check-specs-availability.jpg",
                    "publishedAt": "2023-12-15T11:22:23Z",
                    "content": "Samsung has unveiled its latest laptop lineup, the Galaxy Book 4 series, marking another significant addition to the South Korean tech giant’s portfolio of laptops.\r\nThis new series has three models:… [+3780 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gadgets360.com"
                    },
                    "author": "Sucharita Ganguly, Siddharth Suvarna",
                    "title": "Google Reportedly Working on Pixie, a Pixel-Exclusive AI Assistant Said to Launch With Pixel 9 Series - Gadgets 360",
                    "description": "Google unveiled the Pixel 8 series of smartphones in October this year which is likely to be followed by the Pixel 9 lineup in 2024. A report claims that the Mountain View, California-based tech giant may be working on a Pixel-exclusive Artificial Intelligenc…",
                    "url": "https://www.gadgets360.com/mobiles/news/google-pixel-9-pixie-ai-assistant-artificial-intelligence-report-4679066",
                    "urlToImage": "https://i.gadgets360cdn.com/large/Google_Pixel8_Pixel8Pro_main_big_ndtv_1697030076487.jpg",
                    "publishedAt": "2023-12-15T10:38:09Z",
                    "content": "Google unveiled the Pixel 8 series of smartphones in October this year and it is likely to be followed by the Pixel 9 lineup in 2024. Although the expected launch of the next Pixel series is several … [+1914 chars]"
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "The Hindu",
                    "title": "How did earbuds transform audio experience in 2023? - The Hindu",
                    "description": null,
                    "url": "https://www.thehindu.com/sci-tech/technology/gadgets/how-did-earbuds-transform-audio-experience-in-2023/article67641324.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T10:25:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Telangana Today"
                    },
                    "author": "IANS",
                    "title": "Insta's new AI editing tool lets you edit image background via prompts - Telangana Today",
                    "description": "The company initially launched the feature for users in the US.",
                    "url": "https://telanganatoday.com/instas-new-ai-editing-tool-lets-you-edit-image-background-via-prompts",
                    "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2023/12/Instagram.jpg",
                    "publishedAt": "2023-12-15T10:08:44Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "News9live.com"
                    },
                    "author": "News9 Technology Desk",
                    "title": "Redmi 13C 5G to go on first sale tomorrow: Check India prices, offers, and specifications - News9 LIVE",
                    "description": "The Redmi 13C 5G, launched last week, is set to go on sale in India tomorrow via Amazon, mi.com, and Xiaomi Retail. The smartphone comes in three colours and various configurations, with prices starting at Rs 10,999. It features a 6.74-inch HD display, MediaT…",
                    "url": "https://www.news9live.com/technology/mobile-phone/redmi-13c-5g-to-go-on-first-sale-tomorrow-check-india-prices-offers-and-specifications-2378754",
                    "urlToImage": "https://images.news9live.com/wp-content/uploads/2023/12/Redmi-13C-5G-4.jpg",
                    "publishedAt": "2023-12-15T10:07:53Z",
                    "content": "Redmi 13C 5G is set to go on sale for the first time tomorrow via Amazon, mi.com, and Xiaomi Retail in India. The budget smartphone was launched last week alongside the 4G model. While the latter wen… [+1675 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deccan Herald"
                    },
                    "author": "Kiran Prasad R",
                    "title": "Alpha Brain Joe Rogan Reviews - New For 2024 - Does It Really Work? - Deccan Herald",
                    "description": "Get the latest insights into Alpha Brain with Joe Rogan's reviews for 2024. Discover whether this cognitive enhancement supplement lives up to the hype and truly works. Explore the benefits and potential effects from a trusted perspective.",
                    "url": "https://www.deccanherald.com/brandspot/featured/alpha-brain-joe-rogan-reviews-new-for-2024-does-it-really-work-2812733",
                    "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-12%2Ff88068be-ad79-47dd-a0bd-47e84d60dd0a%2FPicture86.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
                    "publishedAt": "2023-12-15T09:58:22Z",
                    "content": "Since remembering information is one of the things that Onnit says Alpha Brain Joe Rogan can do, we start with a nootropic supplement that does this very well.Noocube has everything you need for memo… [+3569 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Ashwin Rajagopalan",
                    "title": "Best laptops under Rs 1 lakh: No compromises on firepower, battery life or premium design - Moneycontrol",
                    "description": "Best laptops Check out the ASUS Zenbook S 13 OLED, Microsoft Surface 9 Pro, MacBook Air M1, Samsung Galaxy Book 3, Lenovo Idea Pad Slim 5i, Fujitsu UH-X, and Dell G15 Laptop.",
                    "url": "https://www.moneycontrol.com/news/technology/gadgets/best-laptops-under-rs-1-lakh-asus-zenbook-s-13-oled-microsoft-surface-9-pro-macbook-air-samsung-galaxy-bbook-3-lenovo-idea-pad-slim-fujitsu-dell-g15-11909921.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Best-laptops-under-Rs-1-lakh-Microsoft-Surface-9-Pro-770x433.jpg",
                    "publishedAt": "2023-12-15T09:52:13Z",
                    "content": "Whether youre a road warrior or a compulsive gamer or looking for a slinky laptop to make an impression at a client meeting, weve rounded up the best laptops for you. A few premium laptops have seen … [+4361 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "DNA India"
                    },
                    "author": "DNA Web Team",
                    "title": "Most expensive phones launched in India in 2023: Apple iPhone 15 Pro Max, Samsung Galaxy Z Fold 5 and more - DNA India",
                    "description": "As 2023 is about to end, let's have a look at the most expensive smartphones launched in India this year.",
                    "url": "https://www.dnaindia.com/technology/report-most-expensive-phones-launched-in-india-in-2023-apple-iphone-15-pro-max-samsung-galaxy-z-fold-5-and-more-3071699",
                    "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/12/15/2619916-apple-iphone-15-pro-max.jpg",
                    "publishedAt": "2023-12-15T09:31:00Z",
                    "content": "As 2023 is about to end, lets have a look at the most expensive smartphones launched in India this year.India witnessed a range of smartphone launches this year. The flagship smartphones from compani… [+1231 chars]"
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "The Hindu",
                    "title": "Google Messages’ Spam Protection Feature Help users - The Hindu",
                    "description": null,
                    "url": "https://www.thehindu.com/sci-tech/technology/google-messages-spam-protection-feature-helps-users/article67641194.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T09:19:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Nivedita Mishra",
                    "title": "9 best printers for home use: Top picks for printing, scanning and more - Hindustan Times",
                    "description": "9 best printers for home use: If you are a student, researcher or a professional working from home, our guide should be of help to you.",
                    "url": "https://www.hindustantimes.com/technology/9-best-printers-for-home-use-top-picks-for-printing-scanning-and-more-101702615790488.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/best_printers_for_home_use_1702624521399_1702624546585.JPG",
                    "publishedAt": "2023-12-15T09:04:21Z",
                    "content": "Best printers for home use have evolved into essential tools, especially with the hybrid work culture becoming prevalent. Professionals often need to scan and print documents, whether it's contracts,… [+18087 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Business Standard"
                    },
                    "author": "BS Tech",
                    "title": "ASUS launches Intel Core Ultra processors-powered ZenBook 14 OLED laptop - Business Standard",
                    "description": "The ASUS ZenBook 14 OLED laptop is offered in multiple configurations with Intel Core Ultra 5 processor and fullHD OLED display of 60Hz refresh rate available in base model",
                    "url": "https://www.business-standard.com/technology/gadgets/asus-launches-intel-core-ultra-processors-powered-zenbook-14-oled-laptop-123121500527_1.html",
                    "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/15/full/1702630453-3376.JPG",
                    "publishedAt": "2023-12-15T09:01:33Z",
                    "content": "The ASUS ZenBook 14 OLED laptop is offered in multiple configurations with Intel Core Ultra 5 processor and fullHD OLED display of 60Hz refresh rate available in base model\r\nASUS ZenBook 14 OLED\r\nBS … [+1578 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Tech Desk",
                    "title": "Tech News Today: Grok AI now available in India, Vivo X100 goes global, and more - The Indian Express",
                    "description": "Tech News Today (December 15, 2023): Vivo's X100 and X100 Pro have broken borders, Samsung unveils a new iteration of its flagship laptop series, E3 bids farewell, and Pope Francis calls for AI regulation.",
                    "url": "https://indianexpress.com/article/technology/tech-news-technology/tech-news-today-15-december-2023-grok-ai-india-vivo-x100-galaxy-book4-series-9069464/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/tech-news-daily-dec-15-featured.jpg",
                    "publishedAt": "2023-12-15T08:43:03Z",
                    "content": "Buckle up for another edition of Tech News Today, where we distill the week’s technological news into a digestible five-pointer. Today sees the global debut of the much-awaited Vivo X100 series and t… [+2248 chars]"
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
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "The Hindu",
                    "title": "The wellness futurecast 2024 - The Hindu",
                    "description": null,
                    "url": "https://www.thehindu.com/sci-tech/health/wellness-futurecast-2024-health-gaia-vince-luke-coutinho-louie-schwartzberg/article67630305.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T07:03:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gadgets360.com"
                    },
                    "author": "Sucharita Ganguly, David Delima",
                    "title": "Redmi Note 13 5G Series Confirmed to be Available in India via Amazon, Flipkart - Gadgets 360",
                    "description": "Redmi Note 13 5G series availability in India has been announced. The lineup is confirmed to launch in India on January 4. It was released in China in September with three models - Redmi Note 13, Redmi Note 13 Pro, and Redmi Note 13 Pro+. The three smartphone…",
                    "url": "https://www.gadgets360.com/mobiles/news/redmi-note-13-5g-india-availability-confirmed-sale-launch-january-4-4677634",
                    "urlToImage": "https://i.gadgets360cdn.com/large/redmi_note_13_pro_plus_xiaomi_1_1695372431634.jpg",
                    "publishedAt": "2023-12-15T06:54:15Z",
                    "content": "Redmi Note 13 5G series availability in India has been announced, ahead of the launch event that is scheduled to take place next year on January 4. The lineup was released in China in September with … [+2671 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "Deeksha Somani",
                    "title": "From Battlegrounds to Candy Crush: Top 10 Free iPhone games of 2023 in India - Times of India",
                    "description": "As 2023 ends, we're revealing the most downloaded free iPhone games in India. From intense battles to classic board games, the gaming scene has been diverse and exciting.",
                    "url": "https://timesofindia.indiatimes.com/gadgets-news/from-battlegrounds-to-candy-crush-top-10-free-iphone-games-of-2023-in-india/photostory/106012810.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106012851,imgsize-76066,width-900,height-1200,resizemode-6/106012851.jpg",
                    "publishedAt": "2023-12-15T06:29:26Z",
                    "content": "Sweet tooth or not, \"Candy Crush Saga\" has captured the hearts of puzzle enthusiasts across the nation. The addictive match-three gameplay, coupled with a plethora of levels, ensures that players kee… [+22 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Quint"
                    },
                    "author": "Raajwrita Dutta",
                    "title": "Instagram Allows Users To Share Two-Second Looping Video Notes; How To Use Here - The Quint",
                    "description": "Instagram is working on a new feature that allows to share two-second looping video notes. Know about the new feature and other privacy updates on the app here. Stay informed.",
                    "url": "https://www.thequint.com/tech-and-auto/tech-news/instagram-allows-users-to-share-two-second-looping-video-notes-how-to-use-here",
                    "urlToImage": "https://images.thequint.com/thequint%2F2023-12%2Fe2bd7e70-2101-48fc-a693-e0700f39d4bf%2FiStock_1009984558.jpg",
                    "publishedAt": "2023-12-15T05:36:38Z",
                    "content": "Instagram is rolling out a feature for users to share video Notes. The app introduced Notes a year back as an update similar to WhatsApp statuses. Earlier, users could only upload text or emojis to t… [+575 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Tech",
                    "title": "Samsung Galaxy S24 price to remain same as Galaxy S23, says report; know how much - HT Tech",
                    "description": "Samsung may stick to the same price for Samsung Galaxy S24 series as Samsung Galaxy S23, says report. Check what Samsung may be planning for its upcoming launch.",
                    "url": "https://tech.hindustantimes.com/mobile/news/samsung-galaxy-s24-price-to-remain-same-as-galaxy-s23-says-report-know-how-much-71702614418542.html",
                    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/15/1600x900/SGU_2_1676697108801_1702614454976.jpg",
                    "publishedAt": "2023-12-15T04:29:49Z",
                    "content": "Samsung is expected to launch its latest premium smartphone, the Samsung Galaxy S24 series, in January 2024. Notably, it will compete with the iPhone 15 series and the latest Google Pixel. With the l… [+2419 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Quordle 690 solutions: Check out hints and answers for today, December 15 - Times of India",
                    "description": "The current version of Quordle stands out with intricately crafted puzzles, aiming to enhance the overall gaming experience. Players are encouraged to",
                    "url": "https://timesofindia.indiatimes.com/gadgets-news/quordle-690-solutions-check-out-hints-and-answers-for-today-december-15/articleshow/106006057.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106005997,width-1070,height-580,imgsize-6678,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T02:49:35Z",
                    "content": "Tinders top dating trends of 2023: Delulu, Love languages, NATO and more"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Techtarget.com"
                    },
                    "author": "John Powers",
                    "title": "How does Microsoft 365 Copilot pricing and licensing work? - TechTarget",
                    "description": "Getting access to Copilot for Microsoft 365 may be a simple process or almost completely unfeasible at this time, depending on the organization that wants to deploy it.",
                    "url": "https://www.techtarget.com/searchenterprisedesktop/answer/How-does-Microsoft-365-Copilot-pricing-and-licensing-work",
                    "urlToImage": "https://cdn.ttgtmedia.com/rms/onlineimages/money_g1164584480.jpg",
                    "publishedAt": "2023-12-14T15:30:34Z",
                    "content": "Like many other Microsoft products, Copilot for Microsoft 365 has some prerequisites and payment structures that organizations must navigate.\r\nComplicating things further is the variety of copilot te… [+4417 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "WSJ",
                    "title": "News Publishers See Google’s AI Search Tool as a Traffic-Destroying Nightmare | Mint - Mint",
                    "description": "The tech giant’s AI-powered search product is being tested on roughly 10 million users; publishers rely on Google for traffic and see a gathering storm.",
                    "url": "https://www.livemint.com/technology/news-publishers-see-google-s-ai-search-tool-as-a-traffic-destroying-nightmare-11702560288662.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/14/1600x900/im-899638_1702560292169_1702560409517.jpg",
                    "publishedAt": "2023-12-14T13:29:55Z",
                    "content": "Shortly after the launch of ChatGPT, the Atlantic drew up a list of the greatest threats to the 166-year-old publication from generative artificial intelligence. At the top: Googles embrace of the te… [+9980 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBCTV18"
                    },
                    "author": "Vijay Anand",
                    "title": "vivo announces second edition of its 'Ignite Awards' - CNBCTV18",
                    "description": "Smartphone brand vivo has announced the second edition of 'vivo Ignite: Technology and Innovation Awards' in India, encouraging innovation for positive societal impact. The contest is open to grades 8-12 and offers cash prizes and rewards exceeding ₹30 lakh.",
                    "url": "https://www.cnbctv18.com/technology/vivo-announces-second-edition-of-its-ignite-awards-18571171.htm",
                    "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2022/12/vivo-shutterstock-1019x573.jpg",
                    "publishedAt": "2023-12-14T12:34:56Z",
                    "content": null
                }
            ]
        },
        {
            "general": [
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
                    "content": "India Shelter Finance IPO Allotment Status, GMP Today: Check Listing Date, Subscription Status And Latest Grey Market Premium"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Mallika Soni",
                    "title": "Kuwait's emir, Sheikh Nawaf Al Ahmad Al Sabah, dies at age 86 - Hindustan Times",
                    "description": "Kuwait Emir death: Kuwait's Emir Sheikh Nawaf al-Ahmad al-Sabah was admitted to hospital in late November. | World News",
                    "url": "https://www.hindustantimes.com/world-news/kuwait-emir-death-kuwaits-emir-sheikh-nawaf-al-ahmad-al-sabah-dies-report-101702719742526.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/IMG_20220725_134056_1200_x_900_pixel-780x470_1702720634528_1702720639148.webp",
                    "publishedAt": "2023-12-16T09:58:09Z",
                    "content": "Kuwait's Emir Sheikh Nawaf al-Ahmad al-Sabah, who was admitted to hospital in late November due to a medical emergency, has died. Kuwait TV broke into programming with Quranic verses just before maki… [+1419 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Vaishnawi Sinha, hindustantimes.com",
                    "title": "Parliament security breach accused Mahesh Kumawat arrested - Hindustan Times",
                    "description": "Mahesh Kumawat, the accused in the Parliament security breach case, has been arrested by the Delhi Police on Saturday. | Latest News India",
                    "url": "https://www.hindustantimes.com/india-news/parliament-security-breach-accused-mahesh-kumawat-arrested-101702717894605.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/lok_sabha_security_breach_1702454957996_1702718055385.jpg",
                    "publishedAt": "2023-12-16T09:49:37Z",
                    "content": "Mahesh Kumawat, the accused in the Parliament security breach case, has been arrested by the Delhi Police on Saturday. It was confirmed by the Delhi Police that Kumawat was also part of the conspirac… [+1798 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "POCO C65, an afforadable smartphone with MediaTek Helio G85 SoC launched in India: Check price, specs | Mint - Mint",
                    "description": "The POCO C65 smartphone is set to be released on Flipkart from December 18, 2023, with prices starting at Rs. 7,499. Customers can avail discounted prices of Rs. 7,499, Rs. 8,499, and Rs. 9,999 for different variants.",
                    "url": "https://www.livemint.com/technology/gadgets/poco-c65-an-afforadable-smartphone-with-mediatek-helio-g85-soc-launched-in-india-check-price-specs-11702719567819.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/rfffffffffffffffffffffffffffff_1702719818176_1702719826213.webp",
                    "publishedAt": "2023-12-16T09:44:28Z",
                    "content": "The Poco C65 has been officially introduced in the Indian market, solidifying its position as the newest entrant in the budget smartphone category. With an appealing design and strong internal featur… [+2374 chars]"
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
                        "name": "WION"
                    },
                    "author": "WION Web Team",
                    "title": "NASA identifies 17 exoplanets hosting `hidden` oceans beneath icy shells, erupting geysers - WION",
                    "description": "NASA identifies 17 exoplanets hosting hidden oceans beneath icy shells, erupting geysers",
                    "url": "https://www.wionews.com/science/nasa-identifies-17-exoplanets-hosting-hidden-oceans-beneath-icy-shells-erupting-geysers-670260",
                    "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/12/16/399523-untitled-design-2023-12-16t152122390.png",
                    "publishedAt": "2023-12-16T09:26:05Z",
                    "content": "NASA has expanded the search for extraterrestrial life by identifying 17 exoplanets with the potential for habitable oceans hidden beneath their icy shells. \"Water from these oceans could occasionall… [+2226 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Mallika Soni",
                    "title": "Japan flu cases hit high levels at fastest pace in 10 years. What about Covid? - Hindustan Times",
                    "description": "Japan Flu Cases Rise: The influenza virus is spreading about a month earlier than normal, experts said. | World News",
                    "url": "https://www.hindustantimes.com/world-news/japan-flu-cases-japan-flu-cases-hit-warning-levels-at-fastest-pace-in-10-years-101702716991893.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/JAPAN-DAILYLIFE-2_1657808940241_1657808940241_1702717967271.JPG",
                    "publishedAt": "2023-12-16T09:14:37Z",
                    "content": "Japan said that the average number of influenza patients designated medical institutions nationwide had hit warning levels at their fastest pace in 10 years, it was reported. The spread of flu cases … [+1840 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Adani Group acquires over 50% stake in news agency IANS: Report - Hindustan Times",
                    "description": "Earlier, the Adani Group had acquired Quintillion Business Media, which operates business news digital media platform BQ Prime. It then acquired NDTV last year.",
                    "url": "https://www.hindustantimes.com/business/adani-group-acquires-over-50-stake-in-news-agency-ians-report-101702716388503.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Gautam_Adani_1702717445990_1702717446311.JPG",
                    "publishedAt": "2023-12-16T09:08:16Z",
                    "content": "The Adani Group has acquired a majority stake in news agency Indo-Asian News Service (IANS) for an undisclosed sum, thereby expanding its footprint in the media sector after acquiring NDTV last year.… [+1529 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "IPL 2024: Mumbai Indians' fans vent anger after Rohit Sharma's removal as skipper; Hardik Pandya named ne - IndiaTimes",
                    "description": "Cricket News: Rohit has been a part of MI since 2011, assuming the position of team captain in 2013. Hardik, having previously played under Rohit at MI, later depar",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-mumbai-indians-fans-vent-anger-after-rohit-sharmas-removal-as-skipper-hardik-pandya-named-new-captain/articleshow/106042969.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106043383,width-1070,height-580,imgsize-59120,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T08:30:36Z",
                    "content": "IPL 2024: Rohit Sharma's final season for Mumbai Indians?"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Tech Desk",
                    "title": "Government issues high-risk alert for Apple and Samsung products, cites multiple vulnerabilities - The Indian Express",
                    "description": "The Indian Computer Emergency Response Team (CERT-In) has alerted Apple and Samsung users of multiple flaws that could compromise their data and device security.",
                    "url": "https://indianexpress.com/article/technology/tech-news-technology/govt-risk-alert-apple-samsung-9070717/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/iphone-reuters.jpg",
                    "publishedAt": "2023-12-16T08:27:23Z",
                    "content": "Apple and Samsung users, beware: the Indian government has issued a high-risk alert for both companies, warning of multiple flaws that could compromise your data and device.According to the Indian Co… [+1445 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "India Today Information Desk",
                    "title": "Garena Free Fire MAX Redeem Codes for December 16, 2023: How to redeem the codes - India Today",
                    "description": "Here is all you need to know about the new active codes for the list of New Garena Free Fire MAX Redeem codes and the steps to redeem them.",
                    "url": "https://www.indiatoday.in/information/story/garena-free-fire-max-redeem-codes-for-december-16-2023-how-to-redeem-the-codes-2476700-2023-12-16",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/garena-free-fire-max-130356711-16x9.png?VersionId=u74EMekGn1h7P8vioHDUur6p_gf31wxp",
                    "publishedAt": "2023-12-16T07:40:28Z",
                    "content": "Garena Free Fire Max, a popular mobile battle royale game, was released in 2020 as an updated version of the original Garena Free Fire. The game boasts enhanced graphics, controls, gameplay mechanics… [+1477 chars]"
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
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Oman Sultan Haitham bin Tarik holds bilateral talks with PM Modi - Hindustan Times",
                    "description": "Oman Sultan Haitham bin Tarik arrived in India on a three-day state visit on Friday. | Latest News India",
                    "url": "https://www.hindustantimes.com/india-news/omans-sultan-haitham-bin-tarik-accorded-ceremonial-reception-at-rashtrapati-bhavan-holds-bilateral-talks-with-pm-modi-101702707929012.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Oman_Sultan_Modi_1702710196550_1702710196773.jpg",
                    "publishedAt": "2023-12-16T06:59:41Z",
                    "content": "The Sultan of Oman, Haitham bin Tarik, was accorded a ceremonial reception at the forecourt of Rashtrapati Bhavan in New Delhi on Saturday.\r\nPrime Minister Narendra Modi with Sultan Haitham bin Tarik… [+2326 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "India women break world record with historic maiden home Test win vs England - Hindustan Times",
                    "description": "The Indian women's team beat England by 347 runs in the one-off Test at the DY Patil Stadium in Navi Mumbai. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/india-women-break-world-record-with-historic-maiden-test-win-against-england-101702706296264.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/ANI-20231215142-0_1702706390167_1702706420322.jpg",
                    "publishedAt": "2023-12-16T06:16:33Z",
                    "content": "Deepti Sharma ran riot with a 9-wicket haul in the match as the Indian women's cricket registered a humongous 347-run victory - the biggest margin in the history of women's Tests - over England in th… [+3622 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Kareena Kapoor and Karan Johar cheer for Taimur Ali Khan as he delivers an energetic school performance - IndiaTimes",
                    "description": "In the midst of the audience, a constellation of Bollywood celebs, including Kareena, Karan, and Gauri Khan, occupied the coveted front-row seats, exu",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/kareena-kapoor-and-karan-johar-cheer-for-taimur-ali-khan-as-he-delivers-an-energetic-school-performance/articleshow/106040063.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106040075,width-1070,height-580,imgsize-41360,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T05:55:41Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Uttar Pradesh BJP MLA Ramdular Gond gets a 25-year jail term for minor girl’s rape - Times of India",
                    "description": "BJP MLA Ramdular Gond has been sentenced to 25 years imprisonment in connection with a 2014 rape case in Uttar Pradesh's Sonbhadra district. The verdict was issued as part of a POCSO (Protection of Children from Sexual Offences) case against him. Gon",
                    "url": "https://timesofindia.indiatimes.com/videos/toi-original/uttar-pradesh-bjp-mla-ramdular-gond-gets-a-25-year-jail-term-for-minor-girls-rape/videoshow/106039948.cms",
                    "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106039948,imgsize-1035004.cms",
                    "publishedAt": "2023-12-16T05:47:19Z",
                    "content": "Dec 16, 2023, 11:17AM ISTSource: TOI.inBJP MLA Ramdular Gond has been sentenced to 25 years imprisonment in connection with a 2014 rape case in Uttar Pradesh's Sonbhadra district. The verdict was iss… [+394 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Indian Navy Responds To Hijacking Attempt On Malta Ship In The Arabian Sea - NDTV",
                    "description": "The Indian Navy is closely monitoring a developing hijack situation of a ship which appears to now be heading to the coastline of Somalia.",
                    "url": "https://www.ndtv.com/india-news/indian-navy-responds-to-hijacking-attempt-on-malta-ship-in-the-arabian-sea-4683893",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/rj4q77b8_indian-navy_650x400_16_December_23.jpg",
                    "publishedAt": "2023-12-16T05:39:43Z",
                    "content": "New Delhi: The Indian Navy is closely monitoring a developing hijack situation of a ship which appears to now be heading to the coastline of Somalia. The Indian warship responded to the mayday call f… [+1669 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "Srimoyee Chowdhury",
                    "title": "Zomato responds after Bengaluru resident finds dead cockroach in food - India Today",
                    "description": "Harshitha took to X and shared a video of the dead insect on a plate of chicken fried rice she ordered from Zomato.",
                    "url": "https://www.indiatoday.in/trending-news/story/zomato-responds-after-bengaluru-resident-finds-dead-cockroach-in-food-2476668-2023-12-16",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/cockroach-16332847-16x9_0.jpg?VersionId=rMoLqG4tu.5SMZXyZlRZ4LNzpWLOPMeh",
                    "publishedAt": "2023-12-16T05:34:45Z",
                    "content": "In a distressing incident that has raised concerns about food safety, a Bengaluru resident named Harshitha had a nasty shock when she discovered a dead cockroach in her food ordered through Zomato. T… [+1309 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Bobby Deol: Shreyas Talpade’s heart stopped for 10 minutes, his wife was upset - Hindustan Times",
                    "description": "Bobby Deol has revealed the conversation he had with Shreyas Talpade’s wife Deepti after he suffered a heart attack on Thursday in Mumbai. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/bobby-deol-shreyas-talpade-heart-stopped-for-10-minutes-101702701697527.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Bobby_Deol_Shreyas_Talpade_1702702142686_1702702152430.jpg",
                    "publishedAt": "2023-12-16T05:09:15Z",
                    "content": "Shreyas Talpade was shooting for Welcome to Jungle on Thursday when he suffered a heart attack. His wife Deepti Shreyas Talpade had recently shared his health update and said he will be discharged fr… [+2387 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Bureaucrat's Son Allegedly Runs Car Over Girlfriend, She Describes Horror - NDTV",
                    "description": "A 26-year-old woman was severely injured after her boyfriend, who is the son of a senior bureaucrat, allegedly tried to run her over with his car in Maharashtra Thane.",
                    "url": "https://www.ndtv.com/india-news/mumbai-horror-bureaucrat-son-allegedly-runs-car-over-girlfriend-she-describes-horror-4683657",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/iag9fcrc_mumbai-crime-priya_625x300_16_December_23.jpg",
                    "publishedAt": "2023-12-16T05:09:00Z",
                    "content": "Priya Singh is currently undergoing treatment at a Thane hospital.\r\nMumbai: A 26-year-old woman was severely injured after her boyfriend, who is the son of a senior bureaucrat, allegedly tried to run… [+2648 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bcci.tv"
                    },
                    "author": null,
                    "title": "Deepak Chahar withdrawn; Mohd Shami ruled out - BCCI",
                    "description": "Deepak Chahar withdrawn; Mohd Shami ruled out",
                    "url": "https://www.bcci.tv/articles/2023/news/55556069/deepak-chahar-withdrawn-mohd-shami-ruled-out",
                    "urlToImage": "https://assets.bcci.tv/bcci/articles/1702384564_Untitled%20design.png",
                    "publishedAt": "2023-12-16T05:06:25Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bizzbuzz.news"
                    },
                    "author": "IANS",
                    "title": "Indian docs support WHO ban on vapes, call on govt to take action - Bizz Buzz",
                    "description": "A day after the World Health Organization (WHO) urged governments to treat e-cigarettes akin to tobacco and impose a ban on all flavours, health experts in India have called on the government to...",
                    "url": "https://www.bizzbuzz.news/eco-buzz/indian-docs-support-who-ban-on-vapes-call-on-govt-to-take-action-1273913",
                    "urlToImage": "https://www.bizzbuzz.news/h-upload/2023/12/16/1832458-e-cigarettes.jpg",
                    "publishedAt": "2023-12-16T05:01:27Z",
                    "content": "New Delhi: A day after the World Health Organization (WHO) urged governments to treat e-cigarettes akin to tobacco and impose a ban on all flavours, health experts in India have called on the governm… [+3079 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Aishwarya Rai Bachchan-Abhishek, Amitabh Bachchan-Agastya Nanda Form Aaradhya's Cheer Squad At Her Annual Day - NDTV Movies",
                    "description": "Aishwarya Rai Bachchan and husband Abhishek were pictured together post the event with daughter Aaradhya by their side",
                    "url": "https://www.ndtv.com/entertainment/aishwarya-rai-bachchan-abhishek-amitabh-bachchan-agastya-nanda-form-aaradhyas-cheer-squad-at-her-annual-day-4683693",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/abn75hs_aishwarya_625x300_16_December_23.jpg",
                    "publishedAt": "2023-12-16T04:42:35Z",
                    "content": "Abhishek-Aishwarya with Vrindya Rai.\r\nNew Delhi: It was fam-jam time for the Bachchans as they attended Aaradhya's annual day event at the Dhirubhai Ambani International School in Mumbai. Aishwarya R… [+1425 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "123telugu.com"
                    },
                    "author": null,
                    "title": "Photo Moment: SS Rajamouli buys the first ticket of Salaar in Nizam from the team - 123telugu",
                    "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
                    "url": "https://www.123telugu.com/mnews/photo-moment-ss-rajamouli-buys-the-first-ticket-of-salaar-in-nizam-from-the-team.html",
                    "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
                    "publishedAt": "2023-12-16T04:30:00Z",
                    "content": "We have already reported that SS Rajamouli, along with Prabhas, Prashanth Neel, and Prithviraj Sukumaran, shot for a special interview for Salaar promotions. The interview will be coming out very soo… [+1141 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Rakesh Patil",
                    "title": "Indian markets achieve 7th straight week of gains, hit fresh milestones - Moneycontrol",
                    "description": "All the sectoral indices ended in the green with Nifty Information Technology added 7 percent, Nifty PSU Bank and Metal indices rose 5 percent each, and Nifty Realty index gained nearly 4 percent.",
                    "url": "https://www.moneycontrol.com/news/photos/business/markets/indian-markets-achieve-7th-straight-week-of-gains-hit-fresh-milestones-11912151.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/WhatsApp-Image-2023-06-05-at-5.44.33-PM-7-770x433.jpeg",
                    "publishedAt": "2023-12-16T04:00:43Z",
                    "content": "Indian markets extended their winning streak for the seventh consecutive week with benchmarks hitting new lifetime highs in the week ended December 15 led by positive global as well as domestic cues,… [+2782 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Delhi AQI update: Air quality again falls into 'very poor' category | Mint - Mint",
                    "description": "Delhi's air quality falls into 'very poor' category with an overall AQI of 346, according to CPCB.",
                    "url": "https://www.livemint.com/news/india/delhi-aqi-update-air-quality-again-falls-into-very-poor-category-11702689967361.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/AQI_1702696991886_1702696992083.jpg",
                    "publishedAt": "2023-12-16T03:55:23Z",
                    "content": "The air quality in Delhi on Saturday has again fallen into the very poor category, according to the Central Pollution Control Board (CPCB). Currently, the overall AQI of Delhi stands at 346, while th… [+2595 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Raghuram Rajan says Gurgaon and Noida function as first-world economies. Top 4 thoughts on India's economic landscape | Mint - Mint",
                    "description": "Raghuram Rajan, shared insights on India's economic progress and challenges during a podcast titled 'Raghuram Rajan’s Economic Roadmap & Warning for India'",
                    "url": "https://www.livemint.com/economy/raghuram-rajan-says-gurgaon-and-noida-function-as-first-world-economies-top-4-thoughts-on-indias-economic-landscape-11702694769328.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/Raghuram_Rajan_1702694875239_1702694875399.JPG",
                    "publishedAt": "2023-12-16T03:09:44Z",
                    "content": "Former Reserve Bank of India (RBI) Governor Raghuram Rajan, shared insights on India's economic progress and challenges during a podcast titled 'Raghuram Rajans Economic Roadmap &amp; Warning for Ind… [+3738 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "ANI News"
                    },
                    "author": "ANI News",
                    "title": "Matthew Perry died of acute effects of Ketamine, autopsy reveals - ANI News",
                    "description": null,
                    "url": "https://www.aninews.in/news/entertainment/hollywood/matthew-perry-died-of-acute-effects-of-ketamine-autopsy-reveals20231216082352",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T02:56:36Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Tech",
                    "title": "Aditya-L1 mission: ISRO's SUIT captures stunning Sun imagery and scientific breakthroughs - HT Tech",
                    "description": "AdityaL1 mission ISROs SUIT captures stunning Sun imagery and scientific breakthroughs AdityaL1 mission Indias pioneering space observatory for solar study launched by ISRO on September 2 has reached a groundbreaking milestone on its way yo the Sun. Unveiling…",
                    "url": "https://tech.hindustantimes.com/web-stories/adityal1-mission-isros-suit-captures-stunning-sun-imagery-and-scientific-breakthroughs-71702713747149.html",
                    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/16/1600x900/aditya_2_1693206516183_1702713868133.PNG/",
                    "publishedAt": "2023-12-16T02:43:22Z",
                    "content": "Photo Credit: ISRO\r\n Aditya-L1 mission, India's pioneering space observatory for solar study, launched by ISRO on September 2, has reached a groundbreaking milestone on its way yo the Sun.\r\nPhoto Cre… [+1994 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricbuzz"
                    },
                    "author": null,
                    "title": "Australia vs Pakistan, 1st Test, Pakistan tour of Australia, 2023-24 - Cricbuzz",
                    "description": "Follow Australia vs Pakistan, 1st Test, Dec 14, Pakistan tour of Australia, 2023-24 with live Cricket score, ball by ball commentary updates on Cricbuzz",
                    "url": "https://www.cricbuzz.com/live-cricket-scores/70305/aus-vs-pak-1st-test-pakistan-tour-of-australia-2023-24",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T02:28:58Z",
                    "content": "Steve Smith: (On the blow to his forearm) It's alright, bit of a bruise but it would be fine. It was challenging out there, it got a bit dark, a lot of shadows out there. Shaheen has got a whippy act… [+3410 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dailypioneer.com"
                    },
                    "author": "Daily Pioneer",
                    "title": "Delivering Covid 19 vaccine to respiratory tract may lead to improved protection: Study - Daily Pioneer",
                    "description": "Delivering the Covid-19 vaccine directly to the respiratory tract, the primary site of entry inS-CoV-2 infection,&nbsp; may lead to improved protection against the disease, a study in monkeys has found. The study is published in the journal Nature.\n\n“The fail…",
                    "url": "https://www.dailypioneer.com/2023/india/delivering-covid-19-vaccine-to-respiratory-tract-may-lead-to-improved-protection--study.html",
                    "urlToImage": "https://www.dailypioneer.com/images/logo.jpg",
                    "publishedAt": "2023-12-16T02:22:21Z",
                    "content": "Delivering the Covid-19 vaccine directly to the respiratory tract, the primary site of entry inS-CoV-2 infection,  may lead to improved protection against the disease, a study in monkeys has found. T… [+2139 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Onmanorama.com"
                    },
                    "author": "AFP",
                    "title": "Israeli army mistakenly kills 3 hostages in Gaza; Netanyahu says 'unbearable tragedy' - Onmanorama",
                    "description": "Yotam Haim and Alon Shamriz, both taken from Kibbutz Kfar Aza and Samer El-Talalqa, who was taken from Kibbutz Nir Am were killed.",
                    "url": "https://www.onmanorama.com/news/world/2023/12/16/hostages-killed-in-gaza-as-israeli-army-mistakenly-identifies-them-as-threat.html",
                    "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/news/world/images/2023/12/16/killed-hostages-gaza-c.jpg",
                    "publishedAt": "2023-12-16T01:32:10Z",
                    "content": "Jerusalem: The Israeli army said its troops shot and killed three hostages on Friday after \"mistakenly\" identifying them as a threat.\r\n\"During combat in Shejaiya (a battleground neighbourhood of Gaza… [+1661 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Add these 7 flours to your diet for healthy and effective weight loss - timesofindia.com",
                    "description": "7 flours added with wheat flour which helps in the regularization of a healthy body and thus maintains a proper nutritious diet chart.",
                    "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/7-flours-for-healthy-and-effective-weight-loss/photostory/105982565.cms",
                    "urlToImage": "https://static.toiimg.com/photo/105982618.cms",
                    "publishedAt": "2023-12-16T01:30:00Z",
                    "content": "Bajra is a common gluten-free flour used in most Indian households. It is rich in protein, fiber, magnesium, iron, and phosphorus, and also prevents the body from overeating. Therefore, ½ cup of Bajr… [+154 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "Suresh Kumar",
                    "title": "MS Dhoni's plea gets IPS officer 15 days' jail - Times of India",
                    "description": "IPS officer Sampath Kumar sentenced to 15 days in jail for contempt after making \"contumacious\" statements against the judiciary in response to a defa",
                    "url": "https://timesofindia.indiatimes.com/city/chennai/dhonis-plea-gets-ips-officer-15-days-jail/articleshow/106033926.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106044054,width-1070,height-580,imgsize-35756,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T22:30:28Z",
                    "content": "10 foods that claim to be healthy but are not"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Lori Ann LaRocco",
                    "title": "Shipping giants Hapag-Lloyd and Maersk pause Red Sea travel amid attacks - CNBC",
                    "description": "Iranian-backed Houthi militants from Yemen have attacked container ships amid Israel's war with Hamas.",
                    "url": "https://www.cnbc.com/2023/12/15/shipping-giants-hapag-lloyd-and-maersk-pause-red-sea-travel.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107348495-1702673922796-gettyimages-1249564821-20090101230327-99-99440.jpeg?v=1702673960&w=1920&h=1080",
                    "publishedAt": "2023-12-15T21:51:05Z",
                    "content": "Two shipping giants, Hapag-Lloyd and Maersk, are pausing their travel through the Red Sea and the Bab el-Mandeb Strait in the Middle East following a series of attacks on their vessels by Iranian-bac… [+3319 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zee Business"
                    },
                    "author": null,
                    "title": "Bazaar Agle Hafte: Bazaar showed superhit film on Friday, Sensex increased by 969 points, Nifty increased b... - Zee Business",
                    "description": "Share Market: Due to heavy buying, most of the indices including Sensex, Nifty, Bank Nifty created new records. BSE Sensex closed at 71,483 with a jump of 969 points, which also reached 71,605 intraday.",
                    "url": "https://www.zeebiz.com/market-news/video-gallery-bazaar-agle-hafte-bazaar-showed-superhit-film-on-friday-sensex-increased-by-969-points-nifty-increased-by-274-points-269005",
                    "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/15/272843",
                    "publishedAt": "2023-12-15T16:57:02Z",
                    "content": "By accepting cookies, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts."
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "News Desk",
                    "title": "'Forced to Eat Beef, Pork': Family of Nikhil Gupta, Arrested for Pannun Murder Plot, Tells SC, Judge Says ' - News18",
                    "description": "Petition filed by Nikhil Gupta's family claims that his fundamental rights are being 'gravely violated', as he is 'forced to consume beef and pork' that he found offensive as he is a 'devout Hindu and vegetarian'.",
                    "url": "https://www.news18.com/india/nikhil-guptas-family-approaches-supreme-court-hes-accused-of-planning-to-kill-khalistani-gurpatwant-pannun-8704822.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/gurpatwant-singh-pannun-1-2023-12-c7b78df160686304446053baddc32a1e-16x9.jpg?impolicy=website&width=1200&height=675",
                    "publishedAt": "2023-12-15T13:39:50Z",
                    "content": "A habeas corpus has been filed in Supreme Court for Nikhil Gupta, the man accused of conspiring with a government official to assassinate United States-based Sikh separatist Gurpatwant Singh Pannun.\r… [+2154 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Investing.com"
                    },
                    "author": "Invezz",
                    "title": "Nifty 50 index gets severely overbought as the surge continues - Investing.com India",
                    "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
                    "url": "https://in.investing.com/news/nifty-50-index-gets-severely-overbought-as-the-surge-continues-3939056",
                    "urlToImage": "https://i-invdn-com.investing.com/news/https://d56-invdn-com.investing.com/content/picf8a96b2afb527070092fe651dc25b993.jpg",
                    "publishedAt": "2023-12-15T08:18:45Z",
                    "content": "The \r\nNifty 50\r\n index spectacular rally continued this week as hopes of rate cuts in India, United States, and other countries rose. The index, which tracks the biggest Indian companies, spiked to a… [+2656 chars]"
                }
            ]
        },
        {
            "sports": [
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "IPL 2024: Mumbai Indians' fans vent anger after Rohit Sharma's removal as skipper; Hardik Pandya named ne - IndiaTimes",
                    "description": "Cricket News: Rohit has been a part of MI since 2011, assuming the position of team captain in 2013. Hardik, having previously played under Rohit at MI, later depar",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-mumbai-indians-fans-vent-anger-after-rohit-sharmas-removal-as-skipper-hardik-pandya-named-new-captain/articleshow/106042969.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106043383,width-1070,height-580,imgsize-59120,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T08:30:36Z",
                    "content": "IPL 2024: Rohit Sharma's final season for Mumbai Indians?"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "\"Apply Pressure...\": David Warner Breaks Silence On Verbal Exchange With Shaheen Afridi In Australia.. - NDTV Sports",
                    "description": "David Warner got involved in a verbal exchange with Pakistan pacer Shaheen Afridi and he later gave a detail of what actually happened.",
                    "url": "http://www.bbc.com/news/world-us-canada-39324587",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/mdd0mpgg_david-warner-shaheen-afridi-x_625x300_15_December_23.jpg",
                    "publishedAt": "2023-12-16T08:16:06Z",
                    "content": "Australian opener David Warner has had a superb start in the three-match Test series against Pakistan on Thursday. The southpaw hushed all doubters about his form in Test cricket on the opening day o… [+1947 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricbuzz"
                    },
                    "author": null,
                    "title": "BCCI to course correct after Sakariya suspect action error | Cricbuzz.com - Cricbuzz",
                    "description": "The Saurashtra bowler is not listed among bowlers reported for a suspect action",
                    "url": "https://www.cricbuzz.com/cricket-news/128827/bcci-to-course-correct-after-sakariya-suspect-action-error-cricbuzzcom",
                    "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c365920/sakariya-a-base-price-of-rs-50-lakh.jpg",
                    "publishedAt": "2023-12-16T07:54:22Z",
                    "content": "The Chetan Sakariya affair seems to be an unintentional mistake by the Board of Control for Cricket in India (BCCI) and the left-arm pacer is not listed among bowlers reported for a suspect action. T… [+1677 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SportsCafe"
                    },
                    "author": "SportsCafe Desk",
                    "title": "AUS vs PAK | Twitter and Perth boo World Cup hero Head's success for denying Lyon elusive 500th scalp - SportsCafe",
                    "description": "Few crowds can conjure the audacity to boo a national hero who a month ago wrote his name in the history books but Australia has never been known for shying away from emoting. The Optus Stadium echoed with boos after Travis Head wrapped up Pakistan's tail, le…",
                    "url": "https://sportscafe.in/cricket/articles/2023/dec/16/aus-vs-pak-twitter-and-perth-boo-world-cup-hero-heads-success-for-denying-lyon-elusive-500th-scalp",
                    "urlToImage": "https://sportscafe.in/img/es3-cfill-w800-h418/articles/cricket-2023/Nathan_Lyon_AUS_vs_PAK_Perth_Test_Getty.scorimg.webp",
                    "publishedAt": "2023-12-16T07:45:19Z",
                    "content": "Crowd didn't like the wicket!\r\npic.twitter.com/CDLdisAlo5\r\nVirat Sharma (@ViratSharm39743) December 16, 2023\r\nLOL\r\nHahahahahaha the crowd booing Head getting that wicket turns out they don't just boo… [+1676 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Aditya Hosangadi",
                    "title": "Manchester City vs Crystal Palace Prediction and Betting Tips | 16th December 2023 - Sportskeeda",
                    "description": "The Premier League is back in action with another set of matches this weekend as Crystal Palace take on Pep Guardiola's Manchester City side in an important encounter at the Etihad Stadium on Saturday.",
                    "url": "https://www.sportskeeda.com/football/manchester-city-vs-crystal-palace-prediction-betting-tips-16th-december-2023",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/d5de9-17026209763868-1920.jpg",
                    "publishedAt": "2023-12-16T06:27:22Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "India women break world record with historic maiden home Test win vs England - Hindustan Times",
                    "description": "The Indian women's team beat England by 347 runs in the one-off Test at the DY Patil Stadium in Navi Mumbai. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/india-women-break-world-record-with-historic-maiden-test-win-against-england-101702706296264.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/ANI-20231215142-0_1702706390167_1702706420322.jpg",
                    "publishedAt": "2023-12-16T06:16:33Z",
                    "content": "Deepti Sharma ran riot with a 9-wicket haul in the match as the Indian women's cricket registered a humongous 347-run victory - the biggest margin in the history of women's Tests - over England in th… [+3622 chars]"
                },
                {
                    "source": {
                        "id": "espn-cric-info",
                        "name": "ESPN Cric Info"
                    },
                    "author": "Shashank Kishore",
                    "title": "IPL 2024 auction: Five uncapped Indians to watch out for - ESPNcricinfo",
                    "description": "ESPNcricinfo has been in touch with scouting managers and coaches to list those who could earn a big payday on December 19",
                    "url": "https://www.espncricinfo.com/story/ipl-2024-auction-musheer-arshin-kulkarni-shubham-dubey-sameer-rizvi-kushagra-to-watch-out-for-1413010",
                    "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372400/372493.6.jpg",
                    "publishedAt": "2023-12-16T06:11:05Z",
                    "content": "Arshin Kulkarni is part of India's squad for the upcoming Under-19 World Cup  •  Emirates Cricket Board"
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
                        "name": "Crictracker.com"
                    },
                    "author": "CricTracker Staff",
                    "title": "WI vs ENG Match Prediction: Who will win today’s 3rd T20I match? - CricTracker",
                    "description": "The third T20I match between West Indies (WI) and England (ENG) is set to take place on Saturday, December 16, at the National Cricket Stadium in Grenada. Notably, the hosts have alread",
                    "url": "https://www.crictracker.com/cricket-match-predictions/west-indies-vs-england-3rd-t20i-match-prediction-who-will-win-todays-match/",
                    "urlToImage": "https://media.crictracker.com/media/attachments/1702609073405_West-Indies.jpeg",
                    "publishedAt": "2023-12-16T05:30:00Z",
                    "content": "The third T20I match between West Indies (WI) and England (ENG) is set to take place on Saturday, December 16, at the National Cricket Stadium in Grenada. Notably, the hosts have already gained a 2-0… [+3628 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bcci.tv"
                    },
                    "author": null,
                    "title": "Deepak Chahar withdrawn; Mohd Shami ruled out - BCCI",
                    "description": "Deepak Chahar withdrawn; Mohd Shami ruled out",
                    "url": "https://www.bcci.tv/articles/2023/news/55556069/deepak-chahar-withdrawn-mohd-shami-ruled-out",
                    "urlToImage": "https://assets.bcci.tv/bcci/articles/1702384564_Untitled%20design.png",
                    "publishedAt": "2023-12-16T05:06:25Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "SB Nation"
                    },
                    "author": "David Pasztor",
                    "title": "Chelsea vs. Sheffield United, Premier League: Preview, team news, how to watch - We Ain't Got No History",
                    "description": "It doesn’t get any easier than this ... on paper",
                    "url": "https://weaintgotnohistory.sbnation.com/2023/12/16/24003679/chelsea-sheffield-utd-premier-league-preview-team-news-how-to-watch-stream-live-tv-schedule-online",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/CPDLCPXuitUuw-IWXobITKieEbE=/0x361:6000x3502/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25166924/1857710022.jpg",
                    "publishedAt": "2023-12-16T04:33:06Z",
                    "content": "Having lost back-to-back games for the first time all season, a home match against the team worst in the league by just about any sort of statistical measure, not to mention the actual results and th… [+3378 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "Watch: Rare occasion when Ravi Shastri fumbled with words at toss in Perth Test between Australia and Pak - IndiaTimes",
                    "description": "Cricket News: Former India player and coach Ravi Shastri, renowned for his 'tracer bullet' commentary, consistently captivates fans with his unparalleled energy and",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/news/watch-rare-occasion-when-ravi-shastri-fumbled-with-words-at-toss-in-perth-test-between-australia-and-pakistan/articleshow/106038140.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106038279,width-1070,height-580,imgsize-37456,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-16T04:08:55Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Barca Blaugranes"
                    },
                    "author": "Renato Gonçalves",
                    "title": "Valencia vs Barcelona, La Liga: Team News, Preview, Lineups, Score Prediction - Barca Blaugranes",
                    "description": "Barça look to end a crisis with a big win at one of the toughest grounds in the country",
                    "url": "https://www.barcablaugranes.com/2023/12/16/24003359/valencia-barcelona-la-liga-team-news-match-preview-lineups-score-prediction",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/83mFo1PidLISeRgNrcwiq5GhokY=/0x0:4282x2242/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25166406/1838650402.jpg",
                    "publishedAt": "2023-12-16T04:00:00Z",
                    "content": "*Standings at the time of writing\r\nCompetition/Round: 2023-24 La Liga, Matchday 17\r\nBarcelona Outs &amp; Doubts: Marc-André ter Stegen, Gavi, Iñigo Martínez, Marcos Alonso (out)\r\nValencia Outs &amp; … [+3775 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "No Dravid as India head coach for South Africa ODIs, surprise replacement named - Hindustan Times",
                    "description": "Rahul Dravid will oversee the preparations for the two-match Test series by joining the red-ball squad and keeping a close eye on the inter-squad match. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/no-dravid-or-laxman-as-india-head-coach-for-south-africa-odis-surprise-replacement-named-report-101702697110070.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/FILES-CRICKET-IND-BCCI-DRAVID-0_1702697411391_1702697432323.jpg",
                    "publishedAt": "2023-12-16T03:33:46Z",
                    "content": "Rahul Dravid won't be the coach of the Indian side in the upcoming three-match ODI series against South Africa starting Sunday. India's head coach will instead, oversee the preparations for the two-m… [+3214 chars]"
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
                        "name": "The Indian Express"
                    },
                    "author": "Sandeep Dwivedi",
                    "title": "Vijay Amritraj, the OG sporting superstar and king of Indian tennis’ good times. Now a Hall of Famer. - The Indian Express",
                    "description": "The Chennai hunk, India's finest, beat Rod Laver and Jimmy Connors once and got a hotel-ful of posh Floridans going in search of Kolhapuri chappals he proudly wore.",
                    "url": "https://indianexpress.com/article/sports/tennis/vijay-amritraj-the-og-sporting-superstar-and-king-of-indian-tennis-good-times-now-a-hall-of-famer-9070415/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/The-Sports-Column-By-Sandeep-Dwivedi.jpg",
                    "publishedAt": "2023-12-16T03:08:04Z",
                    "content": "It might have been the only time Amitabh Bachchan was mistaken for Vijay, and the confusion wasn’t because of the name he went by in many of his iconic films.Some time back, sitting in the stands at … [+6903 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricbuzz"
                    },
                    "author": null,
                    "title": "Australia vs Pakistan, 1st Test, Pakistan tour of Australia, 2023-24 - Cricbuzz",
                    "description": "Follow Australia vs Pakistan, 1st Test, Dec 14, Pakistan tour of Australia, 2023-24 with live Cricket score, ball by ball commentary updates on Cricbuzz",
                    "url": "https://www.cricbuzz.com/live-cricket-scores/70305/aus-vs-pak-1st-test-pakistan-tour-of-australia-2023-24",
                    "urlToImage": null,
                    "publishedAt": "2023-12-16T02:28:58Z",
                    "content": "Steve Smith: (On the blow to his forearm) It's alright, bit of a bruise but it would be fine. It was challenging out there, it got a bit dark, a lot of shadows out there. Shaheen has got a whippy act… [+3410 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricbuzz"
                    },
                    "author": null,
                    "title": "MLC 2024 set for July 4 start | Cricbuzz.com - Cricbuzz - Cricbuzz",
                    "description": "The second season of USA's marquee T20 league will begin four days after the conclusion of the T20 World Cup",
                    "url": "https://www.cricbuzz.com/cricket-news/128821/mlc-2024-set-for-july-4-start",
                    "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c337965/mi-new-york-won-the-inaugural.jpg",
                    "publishedAt": "2023-12-16T01:24:06Z",
                    "content": "MI New York won the inaugural season of the MLC. © Sportzpics\r\nOranisers of America's marquee T20 league, Major League Cricket [MLC], have announced July 4 as the start date for their much anticipate… [+1705 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Thetopbookies.com"
                    },
                    "author": "https://www.thetopbookies.com/",
                    "title": "HYA vs RJS Today Match Prediction and Betting Tips, Odds and Live Score - TheTopBookies",
                    "description": "Cricket prediction for Haryana (HYA) vs Rajasthan  (RJS), Vijay Hazare Trophy, 2023, odi, 13:30 IST 16 Dec 2023.",
                    "url": "https://www.thetopbookies.com/betting-tips/cricket/hya-vs-rjs-16-Dec-2023",
                    "urlToImage": "https://api.thetopbookies.com/storage/cricket/teams/c__team__hya__97917/Eeckdn1V5fOKoVeiaXG3DCCyBrZGNbX2A1xegDy0.webp",
                    "publishedAt": "2023-12-16T00:55:05Z",
                    "content": "HYA vs RJS Match Prediction &amp; Analysis\r\nAfter 104 matches, the finalists of the Vijay Hazare Trophy have finally been decided. Haryana will clash with Rajasthan on December 16 at the Saurashtra C… [+4065 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Goal.com"
                    },
                    "author": "Aditya Gokhale",
                    "title": "Dejan Kulusevski runs the show! Swedish winger fires Tottenham to another win as Ange Postecoglou's team dominate despite Yves Bissouma's silly red card - GOAL English",
                    "description": "Tottenham cruised to a 2-0 win over Nottingham Forest despite going a man down with 20 minutes remaining on Friday evening.",
                    "url": "https://www.goal.com/en-in/lists/dejan-kulusevski-tottenham-dominant-win-yves-bissouma-red-card/blt4036deff17756ba1",
                    "urlToImage": "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6a99328918f1fc66/657cc88f04dc500407d32e20/GOAL_-_Multiple_Images_-_3_Stacked_-_Facebook_(35).png",
                    "publishedAt": "2023-12-15T22:22:17Z",
                    "content": "Tottenham cruised to a 2-0 win over Nottingham Forest despite going a man down with 20 minutes remaining on Friday evening.\r\nArticle continues below\r\nArticle continues below\r\nArticle continues below\r… [+132 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "Odisha's Gadadhar Sahu secures Gold at Khelo India Para Games after triumphing over tragedy - IndiaTimes",
                    "description": "More sports News: Gadadhar Sahu, who survived a near-death accident, has won a gold medal in powerlifting at the Khelo India Para Games. Sahu, who lost his leg in the a",
                    "url": "https://timesofindia.indiatimes.com/sports/more-sports/others/odishas-gadadhar-sahu-secures-gold-at-khelo-india-para-games-after-triumphing-over-tragedy/articleshow/106032381.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106032402,width-1070,height-580,imgsize-54352,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T18:35:40Z",
                    "content": "2nd T20I: South Africa beat India, take 1-0 lead in the series"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "PTI",
                    "title": "PCB signs hosting rights agreement of 2025 Champions Trophy with ICC - Hindustan Times",
                    "description": "The agreement for the 2025 mega event was signed by Zaka Ashraf who heads the Cricket Management Committee running the PCB affairs at the moment. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/pcb-signs-hosting-rights-agreement-of-2025-champions-trophy-with-icc-101702663434151.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/feo-yllH_1702663523934_1702663531285.jpg",
                    "publishedAt": "2023-12-15T18:08:21Z",
                    "content": "Pakistan Cricket Board (PCB) on Friday said it signed the hosting rights agreement of the 2025 Champions Trophy with the International Cricket Council (ICC) in Dubai.\r\nPakistan last hosted an ICC eve… [+2028 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Chess.com"
                    },
                    "author": "Venkatachalam Saravanan",
                    "title": "Chennai Grand Masters Round 1: Harikrishna, Eljanov Start With Wins - Chess.com",
                    "description": "Pentala Harikrishna and Pavel Eljanov scored wins over GMs Arjun Erigaisi and Parham Maghsoodloo respectively to share the lead with one point each at the Chennai Grand Masters 2023.",
                    "url": "https://www.chess.com/news/view/chennai-grand-masters-2023-round-1",
                    "urlToImage": "https://images.chesscomfiles.com/uploads/v1/news/1321015.e8f409c3.5000x5000o.3599eeee6ae5.jpg",
                    "publishedAt": "2023-12-15T17:49:00Z",
                    "content": "GMs Pentala Harikrishna and Pavel Eljanov started with wins over GMs Arjun Erigaisi and Parham Maghsoodloo respectively in two high-pressure, error-prone games to share the lead with a point apiece a… [+6755 chars]"
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
                        "name": "Sportskeeda"
                    },
                    "author": "EKOJA JOSEPH",
                    "title": "\"My trust is broken\" - Simona Halep confirms ending relationship with Patrick Mouratoglou amid controversial doping ban - Sportskeeda",
                    "description": "Former World No. 1 Simona Halep has recently confirmed the termination of her coaching relationship with Patrick Mouratoglou amid her controversial doping ban.",
                    "url": "https://www.sportskeeda.com/tennis/news-my-trust-broken-simona-halep-confirms-ending-relationship-patrick-mouratoglou-amid-controversial-doping-ban",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/62cdd-17026534050300-1920.jpg",
                    "publishedAt": "2023-12-15T17:17:00Z",
                    "content": "Former World No. 1 Simona Halep has recently confirmed the termination of her coaching relationship with Patrick Mouratoglou amid her controversial doping ban.\r\nOn September 13, 2023, the Internation… [+2005 chars]"
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "Sportstar",
                    "title": "Pro Kabaddi League 2023 Highlights: Vinay, defence lead Haryana Steelers steal 44-39 victory over Puneri Paltan after Zafardanesh, Visvanth help U Mumba beat Patna Pirates 42-40 - Sportstar",
                    "description": null,
                    "url": "https://sportstar.thehindu.com/kabaddi/pro-kabaddi-league-live-score-pkl-10-updates-streaming-mumba-vs-patna-puneri-vs-haryana-highlights-news/article67641533.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T16:39:49Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Venkata Krishna B",
                    "title": "The Sai Sudharsan hacks for SA: learning to read pitches in county cricket, facing tennis balls to counter bounce - The Indian Express",
                    "description": "Expected to open the batting on Sunday at Wanderers, the TN opener has worked on improving his reaction time when facing quick bowlers and was aided by Alec Stewart in learning to read conditions at Surrey.",
                    "url": "https://indianexpress.com/article/sports/cricket/sai-sudharsan-learning-to-read-pitches-in-county-cricket-india-vs-south-africa-odi-series-9070076/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/Sai.png",
                    "publishedAt": "2023-12-15T16:33:25Z",
                    "content": "Just a few hours after landing in Johannesburg the previous Friday, Sai Sudharsan got down to what he loves the most after batting running. It has become an uncompromising aspect of his fitness drill… [+5014 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Rediff.com"
                    },
                    "author": "PTI",
                    "title": "Maxwell's Test cricket dream shattered? - Rediff.com",
                    "description": "Ponting brushes aside Maxwell's bid for Test return",
                    "url": "https://www.rediff.com/cricket/report/maxwells-test-cricket-dream-shattered/20231215.htm",
                    "urlToImage": "https://im.rediff.com/cricket/2023/nov/15maxwell.jpg",
                    "publishedAt": "2023-12-15T16:30:42Z",
                    "content": "He doesn't deserve it: Ricky Ponting brushes aside Glenn Maxwell's bid for Test return\r\nIMAGE: Glenn Maxwell, currently Australia's star player in limited-over cricket after his stellar show in the r… [+1811 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hockeyindia.org"
                    },
                    "author": null,
                    "title": "Indian Men's Hockey Team goes down 0-1 to Spain in 5 Nations Tournament Valencia 2023 - Hockey India",
                    "description": "The Indian Men’s Hockey Team lost 0-1 in their first match of the 5 Nations Tournament Valencia 2023 against Spain on Friday. Spain’s Alvaro Iglesias (29') scored the only goal of the match.",
                    "url": "https://www.hockeyindia.org/news/indian-mens-hockey-team-goes-down-0-1-to-spain-in-5-nations-tournament-valencia-2023",
                    "urlToImage": "https://www.hockeyindia.org/static-assets/waf-images/ed/af/20/16-9/796-597/0vjGjuVx47.jpeg",
                    "publishedAt": "2023-12-15T16:25:50Z",
                    "content": "~Alvaro Iglesias scored the lone goal of the game~\r\nValencia, 15th December 2023: The Indian Men’s Hockey Team lost 0-1 in their first match of the 5 Nations Tournament Valencia 2023 against Spain on… [+900 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "Watch: Indian ODI squad gears up for South Africa series with intense nets session - IndiaTimes",
                    "description": "Cricket News: The Indian cricket team has arrived in Johannesburg for an intense net practice session ahead of their One Day International (ODI) series against Sout",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/watch-indian-odi-squad-gears-up-for-south-africa-series-with-intense-nets-session/articleshow/106031016.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106031050,width-1070,height-580,imgsize-29446,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T16:25:02Z",
                    "content": "BCCI ends speculations, retains Rahul Dravid as India's head coach alongside support staff"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricbuzz"
                    },
                    "author": null,
                    "title": "Nat Sciver-Brunt optimistic about England's chances despite off-colour day | Cricbuzz.com - Cricbuzz - Cricbuzz",
                    "description": "The visitors lost their last seven wickets for just 28 runs in 62 deliveries to give India a healthy first innings lead",
                    "url": "https://www.cricbuzz.com/cricket-news/128818/nat-sciver-brunt-optimistic-about-englands-chances-despite-off-colour-day",
                    "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c365815/nat-sciver-brunt-was-the-only.jpg",
                    "publishedAt": "2023-12-15T16:20:12Z",
                    "content": "Nat Sciver-Brunt was the only English batter to offer stiff resistance on the second day © BCCI/IPL\r\nDespite conceding a 292-run lead in the first innings, England all-rounder Nat Sciver-Brunt believ… [+3435 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": "https://www.facebook.com/bbcnews",
                    "title": "\"No. 7 Cannot Be Diluted\": BCCI Vice-President Rajeev Shukla On Decision To Retire MS Dhoni's Jersey.. - NDTV Sports",
                    "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
                    "url": "https://www.bbc.com/news/world-us-canada-39324587",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
                    "publishedAt": "2023-12-15T15:58:43Z",
                    "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Insidesport.in"
                    },
                    "author": "Swati Bhatia",
                    "title": "Virat Kohli's 'nemesis' auditions for Royal Challengers Bangalore ahead of IPL 2024 Auction - InsideSport",
                    "description": "Former Sunrisers Hyderabad all-rounder Shreyas Gopal, attended trials with Royal Challengers Bangalore ahead of IPL 2024 auction.",
                    "url": "https://www.insidesport.in/cricket/virat-kohlis-nemesis-auditions-for-royal-challengers-bangalore-ahead-of-ipl-2024-auction/",
                    "urlToImage": "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2023/12/Shreyas-Gopal.jpeg",
                    "publishedAt": "2023-12-15T15:03:23Z",
                    "content": "With less than a week to go for the Indian Premier League (IPL) 2024 auction, former Sunrisers Hyderabad all-rounder Shreyas Gopal, attended trials with Royal Challengers Bangalore. If the 30-year-ol… [+984 chars]"
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "Sportstar",
                    "title": "NorthEast United FC vs Mohun Bagan SG LIVE score, NEUFC 1-1 MBSG, ISL 2023-24: Tangri cancels Phalguni strike for equaliser - Sportstar",
                    "description": null,
                    "url": "https://sportstar.thehindu.com/football/indian-football/northeast-united-fc-vs-mohun-bagan-live-score-isl-2023-24-neufc-v-mbsg-updates-lineups-streaming-goals-highlights/article67641438.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T14:37:30Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "U-19 Asia Cup: Bangladesh beat India to enter final; UAE stun Pakistan to reach summit clash - IndiaTimes",
                    "description": "Cricket News: Ariful Islam's counter-punching fifty and a fiery spell by left-arm pacer Maruf Mridha helped Bangladesh score a facile four-wicket win over India to",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/news/u-19-asia-cup-bangladesh-beat-india-to-enter-final-uae-stun-pakistan-to-reach-summit-clash/articleshow/106029562.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106029551,width-1070,height-580,imgsize-58500,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T14:25:14Z",
                    "content": "2nd T20I: South Africa beat India, take 1-0 lead in the series"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricbuzz"
                    },
                    "author": null,
                    "title": "Uncertainty over availability of Bangladesh players for IPL 2024 | Cricbuzz.com - Cricbuzz - Cricbuzz",
                    "description": "The BCB is yet to decide whether they will release their players for the full season of the IPL due to availability issues for national duties",
                    "url": "https://www.cricbuzz.com/cricket-news/128815/uncertainty-over-availability-of-bangladesh-players-for-ipl-2024-cricbuzzcom",
                    "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c332976/taskin-ahmed-is-one-of-the-three-shortlisted-players-from-bangladesh-in-the-upcoming-ipl-auctions.jpg",
                    "publishedAt": "2023-12-15T13:50:46Z",
                    "content": "The Bangladesh Cricket Board insisted that they are yet to decide whether they will release their players for the full season of the Indian Premier League, world's biggest franchise-based T20 tournam… [+2216 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "'Shaheen's real problem is…': Ravi Shastri nails hammer on Pakistan's woes against Australia | Mint - Mint",
                    "description": "Former Indian coach and cricketer Ravi Shastri opined that Shaheen Shah Afridi taking all the pressure on him isn't the right approach.",
                    "url": "https://www.livemint.com/sports/cricket-news/shaheens-real-problem-is-ravi-shastri-nails-hammer-on-pakistans-woes-against-australia-11702647353616.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/Shaheen_Shah_Afridi__1702647513973_1702647514197.jpg",
                    "publishedAt": "2023-12-15T13:40:29Z",
                    "content": "Playing the first test series after ICC Men's World Cup 2023, Pakistan managed to bowl Australia out for 487 on Day 2 of the series opener in Perth, as its bowlers returned to form following a bashin… [+2082 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Khelnow.com"
                    },
                    "author": "Khel Now",
                    "title": "Kerala Blasters' Adrian Luna likely to miss remainder of the ISL season - Khel Now",
                    "description": null,
                    "url": "https://khelnow.com/football/2023-12-indian-football-isl-adrian-luna-injury-update-kerala-blasters",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T13:07:52Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "espn-cric-info",
                        "name": "ESPN Cric Info"
                    },
                    "author": "Alex Malcolm",
                    "title": "'I wanted to be really true to myself' - Marsh keen to stay Australia's No. 6 - ESPNcricinfo",
                    "description": "Australia allrounder says he doesn't want to open after Warner retires just to keep his place in the team",
                    "url": "https://www.espncricinfo.com/story/mitchell-marsh-keen-to-stay-australia-s-no-6-1412979",
                    "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372600/372621.6.jpg",
                    "publishedAt": "2023-12-15T12:31:00Z",
                    "content": "FeatureAustralia allrounder says he doesn't want to open after Warner retires just to keep his place in the team"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Khelnow.com"
                    },
                    "author": "Khel Now",
                    "title": "ISL 2023-24: Where and how to watch Mumbai City vs East Bengal game? - Khel Now",
                    "description": null,
                    "url": "https://khelnow.com/football/2023-12-indian-football-isl-mumbai-city-vs-east-bengal-telecast-live-stream",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T12:24:34Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "Stat Attack: India's biggest T20I wins in SENA countries - IndiaTimes",
                    "description": "Cricket News:  Suryakumar Yadav hit a dazzling century as India levelled their series against South Africa with a crushing 106-run win in the third and final T20I a",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/stat-attack-indias-biggest-t20i-wins-in-sena-countries/articleshow/106022006.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106022022,width-1070,height-580,imgsize-62490,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T11:41:10Z",
                    "content": "2nd T20I: South Africa beat India, take 1-0 lead in the series"
                },
                {
                    "source": {
                        "id": null,
                        "name": "ATP Tour"
                    },
                    "author": "ATP Tour",
                    "title": "Jannik Sinner Wins Most Improved Player Of The Year Award For 2023 - ATP Tour",
                    "description": null,
                    "url": "https://www.atptour.com/en/news/sinner-atp-awards-2023-most-improved-player-of-the-year",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T11:28:38Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Prokabaddi.com"
                    },
                    "author": null,
                    "title": "Star Sports witnesses a 38% surge in ratings for the first four matches of Pro Kabaddi League Season 10 - vivo Pro Kabaddi",
                    "description": "As per BARC, 80.1 million viewers tuned in to Star Sports for the first four matches of Pro Kabaddi League Season 10, amassing 2.7 billion minutes of watch time.",
                    "url": "https://www.prokabaddi.com/news/star-sports-witnesses-38-percent-surge-in-ratings-for-first-four-matches-in-pkl-season-10",
                    "urlToImage": "https://www.prokabaddi.com/static-assets/waf-images/0a/05/ee/16-9/d2X7q2E6CI.jpg",
                    "publishedAt": "2023-12-15T11:09:31Z",
                    "content": "News\r\n<ul><li>80.1 million viewers tuned in during the first four matches, an increase of 32% compared to the previous season</li><li>Consumption has increased to 2.7 billion minutes for the first fo… [+2772 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricbuzz"
                    },
                    "author": null,
                    "title": "NZ to test bench strength in home series against Bangladesh | Cricbuzz.com - Cricbuzz - Cricbuzz",
                    "description": "The ODIs will be held between 17 and 23 December 2023. Bangladesh have never won an ODI against New Zealand in New Zealand.",
                    "url": "https://www.cricbuzz.com/cricket-news/128812/nz-to-test-bench-strength-in-home-series-against-bangladesh-cricbuzzcom",
                    "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c365795/bangladesh-have-never-won-an-odi-against-new-zealand-in-new-zealand-their-only-odi-win-in-the-country-came-against-scotland-in-the-2015-world-cup.jpg",
                    "publishedAt": "2023-12-15T10:32:24Z",
                    "content": "With a disappointing World Cup campaign behind them, Bangladesh prepare to take on New Zealand in a three-match ODI series, scheduled to begin in Dunedin on December 17.\r\nThe visitors will begin thei… [+2375 chars]"
                },
                {
                    "source": {
                        "id": "espn-cric-info",
                        "name": "ESPN Cric Info"
                    },
                    "author": "ESPNcricinfo staff",
                    "title": "Recent Match Report - NZ (W) vs Pakistan (W) 2nd ODI 2023/24 - ESPNcricinfo",
                    "description": "They lost 7 for 53 in a dramatic twist but their last pair got the job done, despite Ghulam Fatima and Fatima Sana's best efforts with ball and bat",
                    "url": "https://www.espncricinfo.com/series/pakistan-women-in-new-zealand-2023-24-1388176/new-zealand-women-vs-pakistan-women-2nd-odi-1388200/match-report",
                    "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/372600/372636.6.jpg",
                    "publishedAt": "2023-12-15T10:02:21Z",
                    "content": "ReportThey lost 7 for 53 in a dramatic twist but their last pair got the job done, despite Ghulam Fatima and Fatima Sana's best efforts with ball and bat"
                },
                {
                    "source": {
                        "id": null,
                        "name": "International Cricket Council"
                    },
                    "author": "ICC",
                    "title": "New Zealand include uncapped ODI player as cover for injured Jamieson - ICC Cricket",
                    "description": "New Zealand have added Ben Sears as cover for Kyle Jamieson in the ODI squad for the first match to face Bangladesh, starting December 17.",
                    "url": "https://www.icc-cricket.com/news/3823369",
                    "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/15/e4d91787-3c67-4555-8d2d-b05e8f764027/GettyImages-1683801088.jpg",
                    "publishedAt": "2023-12-15T07:45:17Z",
                    "content": "New Zealand have added Ben Sears as cover for Kyle Jamieson in the ODI squad for the first match to face Bangladesh, starting December 17.Kyle Jamieson had experienced hamstring stiffness after retur… [+1210 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricket.one"
                    },
                    "author": "Vishal Mehra",
                    "title": "[Watch] Virat Kohli Departs For South Africa For India's Upcoming Test Series - OneCricket",
                    "description": "Virat Kohli opted to not play the white-ball leg of the South African tour which consists of three T20Is and as many ODIs, and spend time away from cricket in London with his wife Anushka Sharma, and daughter Vamika.",
                    "url": "https://cricket.one/cricket-news/watch-virat-kohli-departs-for-south-africa-for-indias-upcoming-test-series/657c03fcde38a068f4cd612b",
                    "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1702619586346_Work (4).jpg",
                    "publishedAt": "2023-12-15T07:45:00Z",
                    "content": "Virat Kohli will be seen in India's two-Test series against South Africa [X.com]\r\nAfter taking a short break after a gruelling ICC Cricket World Cup in India, former skipper Virat Kohli has departed … [+1268 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Business Standard"
                    },
                    "author": "Business Standard",
                    "title": "BCCI may launch new cricket league in T10 format next year: Report - Business Standard",
                    "description": null,
                    "url": "https://www.business-standard.com/cricket/news/bcci-may-launch-new-cricket-league-in-t10-format-next-year-report-123121500277_1.html",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T06:14:38Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hockeyindia.org"
                    },
                    "author": null,
                    "title": "Preview: India all set to take on Spain in 3rd/4th place match in FIH Hockey Men's Junior World Cup Malaysia 2023 - Hockey India",
                    "description": "The Indian Junior Men's Hockey Team will look to put the disappointment of their Semi-Final loss to Germany behind them when they take on Spain for the second time in the FIH Hockey Men’s Junior World Cup Malaysia 2023 on Saturday, 16th December in the 3rd/4t…",
                    "url": "https://www.hockeyindia.org/news/preview-india-all-set-to-take-on-spain-in-3rd4th-place-match-in-fih-hockey-mens-junior-world-cup-malaysia-2023",
                    "urlToImage": "https://www.hockeyindia.org/static-assets/waf-images/4d/e2/b9/16-9/796-597/FnOnSX3Iu8.jpg",
                    "publishedAt": "2023-12-15T06:10:10Z",
                    "content": "~India and Spain will face off against each other for the second time this World Cup~ \r\nKuala Lumpur, 15th December 2023: The Indian Junior Men's Hockey Team will look to put the disappointment of th… [+1746 chars]"
                },
                {
                    "source": {
                        "id": "espn-cric-info",
                        "name": "ESPN Cric Info"
                    },
                    "author": "ESPNcricinfo staff",
                    "title": "Recent Match Report - SA A vs India A 1st unofficial Test 2023/24 - ESPNcricinfo",
                    "description": "Pradosh Ranjan Paul made 163, the highest score of the match, in the drawn fixture against South Africa A",
                    "url": "https://www.espncricinfo.com/series/india-a-in-south-africa-2023-24-1412200/south-africa-a-vs-india-a-1st-unofficial-test-1412202/match-report",
                    "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/370600/370692.6.jpg",
                    "publishedAt": "2023-12-15T05:23:25Z",
                    "content": "ReportPradosh Ranjan Paul made 163, the highest score of the match, in the drawn fixture against South Africa A"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cgtn.com"
                    },
                    "author": "CGTN",
                    "title": "Undeserved or merited: Why Messi once again headlines the shortlist for FIFA best player awards - CGTN",
                    "description": "It seems like a deja vu that echoes through the footballing world. The FIFA best player of the year award for 2023 will once again witness a weary battle among the familiar faces of Lionel Messi, Kylian Mbappe, and Erling Haaland.The announcement of",
                    "url": "https://news.cgtn.com/news/2023-12-15/Why-Messi-once-again-leads-the-shortlist-for-FIFA-best-player-awards-1py2o6KbEiY/index.html",
                    "urlToImage": "https://news.cgtn.com/news/2023-12-15/Why-Messi-once-again-leads-the-shortlist-for-FIFA-best-player-awards-1py2o6KbEiY/img/05779abd26434dbea892e543c8f54467/05779abd26434dbea892e543c8f54467-750.jpeg",
                    "publishedAt": "2023-12-15T04:50:31Z",
                    "content": "World Cup winners Lionel Messi is up for yet another FIFA best player awards. /CFP\r\nWorld Cup winners Lionel Messi is up for yet another FIFA best player awards. /CFP\r\nIt seems like a deja vu that ec… [+4614 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Sports Desk",
                    "title": "T20 World Cup 2024: India vs Pakistan game to be held in ‘pop-up stadium’ outside New York - The Indian Express",
                    "description": "USA are co-hosting the T20 World Cup with the West Indies scheduled to be held in June.",
                    "url": "https://indianexpress.com/article/sports/cricket/t20-world-cup-2024-new-york-to-host-india-vs-pakistan-marquee-clash-9069125/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/India-vs-Pakistan.jpg",
                    "publishedAt": "2023-12-15T04:03:24Z",
                    "content": "New York will host the marquee India vs Pakistan clash of the 2024 T20 World Cup, the Guardian has reported. USA are co-hosting the T20 World Cup with the West Indies scheduled to be held in June.As … [+1354 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Cricket Times"
                    },
                    "author": "Anirudh Singh",
                    "title": "ZIM vs IRE, 2nd ODI: Match Prediction, Dream11 Team, Fantasy Tips & Pitch Report | Ireland tour of Zimbabwe 2023 - Cricket Times",
                    "description": "Zimbabwe vs Ireland Dream11 Team for today's match - December 15, 07:15 am GMT | 2nd ODI. The encounter will take place at the Harare Sports Club.",
                    "url": "https://crickettimes.com/2023/12/zim-vs-ire-2nd-odi-match-prediction-dream11-team-fantasy-tips-pitch-report-ireland-tour-of-zimbabwe-2023/",
                    "urlToImage": "https://crickettimes.com/wp-content/uploads/2023/12/Zimbabwe-vs-Ireland-2nd-ODI-Dream11-Prediction.webp",
                    "publishedAt": "2023-12-15T02:00:15Z",
                    "content": "The cricketing stage is set for an enthralling encounter as Zimbabwe prepare to take on Ireland in the first One Day International (ODI) of the Ireland tour of Zimbabwe at the Harare Sports Club on W… [+2404 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "International Cricket Council"
                    },
                    "author": "ICC",
                    "title": "Sri Lanka great re-joins the fold as cricket consultant - ICC Cricket",
                    "description": "Sri Lanka have announced the appointment of legendary batter and former skipper Sanath Jayasuriya to the role of full-time cricket consultant.",
                    "url": "https://www.icc-cricket.com/news/3823302",
                    "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/15/d0f680ad-de5a-4c7b-8697-f06454fc9c49/SL-great.jpg",
                    "publishedAt": "2023-12-15T01:21:21Z",
                    "content": "Sri Lanka have announced the appointment of legendary batter and former skipper Sanath Jayasuriya to the role of full-time cricket consultant.Jayasuriya played a major role in helping Sri Lanka to th… [+1571 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Steve Nicol: Erik ten Hag HAS TO GO | ESPN FC - ESPN UK",
                    "description": "ESPN FC’s Dan Thomas, Steve Nicol and Shaka Hislop discuss Erik ten Hag’s future at Manchester United and debate if Graham Potter, who currently has the shor...",
                    "url": "https://www.youtube.com/watch?v=K4CCo5LchEA",
                    "urlToImage": "https://i.ytimg.com/vi/K4CCo5LchEA/maxresdefault.jpg",
                    "publishedAt": "2023-12-15T00:50:47Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "ESPN India"
                    },
                    "author": "Kendra Andrews",
                    "title": "Warriors' focus on doing 'right things' to help Green, not punishment - ESPN - ESPN India",
                    "description": "The Golden State Warriors are committed to forward Draymond Green despite his indefinite suspension for striking Phoenix's Jusuf Nurkic in the face.",
                    "url": "https://www.espn.in/nba/story/_/id/39114212/warriors-focus-doing-right-things-help-green-not-punishment",
                    "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1214%2Fr1266175_1296x729_16%2D9.jpg",
                    "publishedAt": "2023-12-14T22:06:00Z",
                    "content": "LOS ANGELES -- The Golden State Warriors held a team meeting Wednesday to discuss Draymond Green's indefinite suspension and the actions and behavior that led to it.\r\nIt was an honest and emotional c… [+6108 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Sportz Connect",
                    "title": "Vijay Hazare Trophy 2023: Top run-getters and wicket-takers after Day 11 (Updated) ft. Deepak Hooda and Abhinav Manohar - Sportskeeda",
                    "description": "Rajasthan secured a six-wicket victory against Karnataka in the second semi-final of the Vijay Hazare Trophy 2023, earning a spot in the final against Haryana scheduled for December 16, Saturday.",
                    "url": "https://www.sportskeeda.com/cricket/news-vijay-hazare-trophy-2023-top-run-getters-wicket-takers-day-11-updated-ft-deepak-hooda-abhinav-manohar",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/9e6cf-17025819978805-1920.jpg",
                    "publishedAt": "2023-12-14T20:11:41Z",
                    "content": "Rajasthan secured a six-wicket victory against Karnataka in the second semi-final of the Vijay Hazare Trophy 2023, earning a spot in the final against Haryana scheduled for December 16, Saturday. The… [+7736 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Amar Sunil Panicker",
                    "title": "IND vs SA Third T20I, Highlights: Ton-Up Suryakumar Yadav and Kuldeep Yadav's Birthday Fifer Helps Secure V - News18",
                    "description": "IND vs SA 3rd T20I Highlights: India will look to come back stronger to level the three-match T20I series against South Africa with a in following their loss in the previous game.",
                    "url": "https://www.news18.com/cricket/ind-vs-sa-live-score-updates-india-vs-south-africa-3rd-t20i-india-vs-south-africa-cricket-match-today-livenews-8703733.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/siraj-wicket-vs-sa-third-t20i-ap-feature-2023-12-551bb60b35615d6e7d62f61de3a758ed-16x9.jpg",
                    "publishedAt": "2023-12-14T18:22:06Z",
                    "content": "IND vs SA 3rd T20I Highlights: The Indian team will look to redeem themselves after losing against the home side in the second T20I. South Africa on the other hand will look to seal the series with a… [+2034 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Rediff.com"
                    },
                    "author": "PTI",
                    "title": "'Neeraj Chopra needs to stay 'calm' to defend Olympic title' - Rediff.com",
                    "description": "Neeraj Chopra has been the face of Indian athletics since winning the historic gold medal at the Tokyo Olympics.",
                    "url": "https://www.rediff.com/sports/report/neeraj-chopra-needs-to-stay-calm-to-defend-olympic-title/20231214.htm",
                    "urlToImage": "https://im.rediff.com/sports/2023/dec/14neeraj.jpg",
                    "publishedAt": "2023-12-14T16:36:48Z",
                    "content": "IMAGE: Neeraj Chopra has been the face of Indian athletics since winning the historic gold medal at the Tokyo Olympics. Photograph: World Athletics/Instagram\r\nDefending an Olympic title is a great ac… [+1763 chars]"
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "Sportstar",
                    "title": "Punjab FC vs Kerala Blasters Highlights, PFC 0-1 KBFC, ISL 2023-24: Diamantakos' penalty hands Tuskers a hard fought win - Sportstar",
                    "description": null,
                    "url": "https://sportstar.thehindu.com/football/indian-football/punjab-fc-vs-kerala-blasters-live-score-isl-2023-24-pfc-v-kbfc-updates-streaming-info-highlights-goals/article67638005.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-14T16:07:30Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "ESPN India"
                    },
                    "author": "Aaditya Narayan",
                    "title": "Bengaluru FC turn to familiar face Gerard Zaragoza to pull off improbable rescue act - ESPN India",
                    "description": "Can Bengaluru FC's new head coach stop the rot that's set in at the club this season?",
                    "url": "https://www.espn.in/football/story/_/id/39111713/bengaluru-fc-familiar-face-gerard-zaragoza-improbable-rescue-act-isl-2023-24",
                    "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1214%2Fr1266262_1296x729_16%2D9.jpg",
                    "publishedAt": "2023-12-14T15:30:00Z",
                    "content": "More than four years after he'd left the club as the assistant manager in an ISL-winning season, Gerard Zaragoza returns as head coach of Bengaluru FC -- but in vastly different circumstances.\r\nBenga… [+5581 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Paul Merson",
                    "title": "Paul Merson's predictions for Liverpool vs Manchester United and other Premier League GW17 fixtures - Sportskeeda",
                    "description": "Matchday six of the UEFA Champions League group stages turned out to be quite eventful, to say the least.",
                    "url": "https://www.sportskeeda.com/football/news-paul-merson-s-predictions-liverpool-vs-manchester-united-premier-league-gw17-fixtures-arsenal-chelsea",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/1f969-17025640621770-1920.jpg",
                    "publishedAt": "2023-12-14T14:56:00Z",
                    "content": "Matchday six of the UEFA Champions League group stages turned out to be quite eventful, to say the least. Arsenal and Manchester City finished top of their respective groups and secured qualification… [+11481 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Racingnews365.com"
                    },
                    "author": null,
                    "title": "Aston Martin announces name change for 2024 F1 season - Racingnews365.com",
                    "description": "The team will see a slight tweak to its name from next season after agreeing an exclusive title sponsorship with an existing partner.",
                    "url": "https://racingnews365.com/aston-martin-announces-name-change-for-2024-f1-season",
                    "urlToImage": "https://cdn.racingnews365.com/2023/Alonso/_1800x945_crop_center-center_75_none/XPB_1242966_HiRes.jpg?v=1702555961",
                    "publishedAt": "2023-12-14T12:15:00Z",
                    "content": "Aston Martin will change its name for the 2024 Formula 1 season after agreeing an exclusive deal with current sponsor Aramco. \r\nPreviously known as Aston Martin Aramco Cognizant F1 Team, Cognizant wi… [+1055 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Firstpost"
                    },
                    "author": "FirstCricket Staff",
                    "title": "IPL 2024 Auction, CSK: Possible strategy, five players they can target and more - Firstpost",
                    "description": "Take a look at what would be CSKs strategy during thee IPL  Auction and the players they could target.",
                    "url": "https://www.firstpost.com/firstcricket/sports-news/ipl-2024-auction-chennai-super-kings-csk-strategy-targets-remaining-purse-slots-squad-13503982.html",
                    "urlToImage": "https://images.firstpost.com/wp-content/uploads/2023/12/CSK-IPL-Auction.jpg",
                    "publishedAt": "2023-12-14T11:58:22Z",
                    "content": "Chennai Super Kings keep defying the odds and the critics in Indian Premier League (IPL). After a two-year ban, they roared back to win the IPL title in 2018 and earlier this year, the MS Dhoni-led s… [+3249 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Crictoday.com"
                    },
                    "author": "Venkat Narayanan",
                    "title": "KKR gets new captain for IPL 2024, Nitish Rana appointed vice-captain - Crictoday.com (Cricket News) ",
                    "description": "Shreyas Iyer is back as captain of the Kolkata Knight Riders for IPL 2024, with Nitish Rana named vice-captain.",
                    "url": "http://crictoday.com/cricket/daily-cricket-news/kkr-gets-new-captain-for-ipl-2024-nitish-rana-appointed-vice-captain/",
                    "urlToImage": "https://crictoday.com/wp-content/uploads/2023/05/kolkata-knight-riders-celebrate-dc-1682059257-1024x576-1.jpg",
                    "publishedAt": "2023-12-14T11:42:37Z",
                    "content": "Kolkata Knight Riders CEO Venky Mysore announced that Shreyas Iyer will reclaim his position as the captain of KKR, with Nitish Rana appointed as the vice-captain for the upcoming Indian Premier Leag… [+1628 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Quint"
                    },
                    "author": "Kanika Singh",
                    "title": "On Their Quest for a Maiden Title - Who Should RCB Target at IPL Auction 2024 - The Quint",
                    "description": "The Bangalore-based franchise released a total of 11 players most of which belonged to the bowling department. With 23.15 crores in their coffers, Bangalore will be trying to allay this fear during the auction.",
                    "url": "https://www.thequint.com/indian-premier-league-ipl/ipl-2024-rcb-auction-plans-targets-purse",
                    "urlToImage": "https://images.thequint.com/thequint%2F2023-12%2F38a50a9d-f3c1-4e93-8db5-fc3024cf8b2e%2Fhero_image_Recovered.jpg",
                    "publishedAt": "2023-12-14T10:58:06Z",
                    "content": "Firstly, let us have a look at the players retained by RCB:\r\nFaf du Plessis, Glenn Maxwell, Virat Kohli, Rajat Patidar, Cameron Green (trade), Anuj Rawat, Dinesh Karthik, Suyash Prabhudessai, Will Ja… [+160 chars]"
                }
            ]
        },
        {
            "business": [
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Adani Group acquires over 50% stake in news agency IANS: Report - Hindustan Times",
                    "description": "Earlier, the Adani Group had acquired Quintillion Business Media, which operates business news digital media platform BQ Prime. It then acquired NDTV last year.",
                    "url": "https://www.hindustantimes.com/business/adani-group-acquires-over-50-stake-in-news-agency-ians-report-101702716388503.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/Gautam_Adani_1702717445990_1702717446311.JPG",
                    "publishedAt": "2023-12-16T09:08:16Z",
                    "content": "The Adani Group has acquired a majority stake in news agency Indo-Asian News Service (IANS) for an undisclosed sum, thereby expanding its footprint in the media sector after acquiring NDTV last year.… [+1529 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Mohammad Haris",
                    "title": "Motisons Jewellers IPO To Open On December 18: Know Price, GMP, Lot Size, Subscription Dates - News18",
                    "description": "Unlisted shares of Motisons Jewellers are currently trading Rs 104 higher in the grey market, which is a 189.09 per cent listing gain from the public issue",
                    "url": "https://www.news18.com/business/motisons-jewellers-ipo-to-open-on-december-18-know-price-gmp-lot-size-subscription-dates-8706047.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/10/untitled-design-2023-10-23t124100.910-2023-10-2fe2e57436331ab2727de897658b867b-16x9.jpg?impolicy=website&width=1200&height=675",
                    "publishedAt": "2023-12-16T08:05:51Z",
                    "content": "Motisons Jewellers IPO: The initial public offering of Jaipur-based retail jeweller company Motisons Jewellers is going to open for public subscription on December 18. The Rs 151.09-crore IPO will co… [+2189 chars]"
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
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "'Diversity, Equity And Inclusion' Are \"Propaganda Words\": Elon Musk - NDTV",
                    "description": "Elon Musk on Friday evening criticized Diversity, Equity and Inclusion as \"propaganda words\" despite efforts by Tesla Inc. to promote such initiatives.",
                    "url": "https://www.ndtv.com/world-news/diversity-equity-and-inclusion-are-propaganda-words-elon-musk-4684332",
                    "urlToImage": "https://c.ndtvimg.com/2023-04/g0u87en8_elon-musk-bloomberg_625x300_28_April_23.jpg",
                    "publishedAt": "2023-12-16T07:23:46Z",
                    "content": "Tesla company didn't respond to requests for comment on Musk's views.\r\nElon Musk on Friday evening criticized Diversity, Equity and Inclusion as \"propaganda words\" despite efforts by Tesla Inc. to pr… [+2185 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bar & Bench - Indian Legal News"
                    },
                    "author": "Prashant Jha",
                    "title": "\"Just looking like a wow\": Delhi High Court restrains VBRO Skincare from imitating products of WOW Skin Science - Bar & Bench - Indian Legal News",
                    "description": "The Delhi High Court recently restrained skincare product manufacturing company VBRO Skincare from manufacturing or selling its products in packaging or lay out",
                    "url": "https://www.barandbench.com/news/just-looking-like-a-wow-delhi-high-court-restrains-vbro-skincare-imitating-products-wow-skin-science",
                    "urlToImage": "https://media.assettype.com/barandbench%2F2023-12%2Fd23b176d-099d-4728-95e8-22013885bf28%2F04.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
                    "publishedAt": "2023-12-16T07:00:01Z",
                    "content": "Justice Prathiba M Singh passed an interim order restraining VBRO from using the marks WQVV or any other mark that is identical or deceptively like the trade mark WOW.\r\nIn its order, the Court also r… [+992 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "\"If We Didn't Act...\": Sundar Pichai Why Google Had To Fire 12,000 - NDTV",
                    "description": "The recent all-hands meeting at Google continued to be dominated by discussions about the company's layoffs.",
                    "url": "https://www.ndtv.com/feature/difficult-decision-google-ceo-sundar-pichai-opens-up-about-laying-off-12-000-employees-4684126",
                    "urlToImage": "https://c.ndtvimg.com/2023-10/351d3hag_sundar-pichai_625x300_11_October_23.jpg",
                    "publishedAt": "2023-12-16T06:35:58Z",
                    "content": "During the meeting, Google CEO Sundar Pichai stood by the decision of layoffs.\r\nIn a recent all-hands meeting, Google and Alphabet CEO Sundar Pichai opened up about the company's massive 2022 layoffs… [+1630 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Asit Manohar",
                    "title": "DOMS IPO: GMP soars after strong subscription status. Focus shifts on share allotment, listing date | Mint - Mint",
                    "description": "DOMS IPO GMP: Shares of the stationery brand are available at a premium of  ₹528 in grey market today, say market observers",
                    "url": "https://www.livemint.com/market/ipo/doms-ipo-gmp-soars-after-strong-subscription-status-focus-shifts-on-share-allotment-listing-date-11702706915538.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/16/1600x900/DOMS_IPO_GMP_DOMS_IPO_subscription_status_1702707148992_1702707149242.JPG",
                    "publishedAt": "2023-12-16T06:18:56Z",
                    "content": "DOMS IPO: Bidding for the initial public offering (IPO) of DOMS Industries Limited ended on Friday last week. During three days of subscription from 15th to 18th December 2023, the public issue worth… [+2760 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bar & Bench - Indian Legal News"
                    },
                    "author": "Ratna Singh",
                    "title": "Delhi consumer court directs Lifestyle to pay ₹3,000 as compensation for charging ₹7 for paper carry bag - Bar & Bench - Indian Legal News",
                    "description": "A District Consumer Dispute Redressal Commission (DCDRC) in Delhi recently directed the fashion brand, Lifestyle to pay a compensation of ₹3,000 for charging a",
                    "url": "https://www.barandbench.com/news/delhi-consumer-court-lifestyle-3000-compensation-charging-7-paper-carry-bag",
                    "urlToImage": "https://media.assettype.com/barandbench%2F2023-12%2Fb643bc8f-a7aa-4859-8002-6dd175c2ae29%2FBOMBAY__WEB_PAGE_1600x900hj.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
                    "publishedAt": "2023-12-16T06:09:32Z",
                    "content": "The coram comprising President SS Malhotra and members Rashmi Bansal and Ravi Kumar held the outlet liable for causing mental agony to the customer and also directed them to return 7 charged for the … [+515 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "Global AI Conclave: We are working on smaller AI models with 7-20 billion parameters, says Zoho's Sridhar... - Moneycontrol",
                    "description": "Zoho founder says the company wants to own GPU infrastructure for AI models as that is cheaper in the longer term",
                    "url": "https://www.moneycontrol.com/news/technology/we-are-working-on-smaller-ai-models-with-7-20-billion-parameters-sridhar-vembu-11912731.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Vembu-770x369.jpg",
                    "publishedAt": "2023-12-16T06:06:10Z",
                    "content": "Zoho is working on smaller artificial intelligence (AI) models that are based on 7 billion to 20 billion parameters to solve specific domain problems for its customers, the company's founder, Sridhar… [+2270 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Sovereign Gold Bond 2023-24 Series III to open on Monday: how to buy? - Hindustan Times",
                    "description": "The investors who apply online and make payments through digital modes can avail a ₹50 discount per gram on sovereign gold bonds.",
                    "url": "https://www.hindustantimes.com/business/sovereign-gold-bond-2023-24-series-iii-to-open-on-monday-how-to-buy-101702701455208.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/gold_1702701480386_1702701480649.jpg",
                    "publishedAt": "2023-12-16T04:58:13Z",
                    "content": "If you're considering investing in gold, this news is relevant to you. The Reserve Bank of India (RBI) has set the issue price for the upcoming instalment of sovereign gold bonds at 6,199 per gram. \r… [+1758 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Rakesh Patil",
                    "title": "Indian markets achieve 7th straight week of gains, hit fresh milestones - Moneycontrol",
                    "description": "All the sectoral indices ended in the green with Nifty Information Technology added 7 percent, Nifty PSU Bank and Metal indices rose 5 percent each, and Nifty Realty index gained nearly 4 percent.",
                    "url": "https://www.moneycontrol.com/news/photos/business/markets/indian-markets-achieve-7th-straight-week-of-gains-hit-fresh-milestones-11912151.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/WhatsApp-Image-2023-06-05-at-5.44.33-PM-7-770x433.jpeg",
                    "publishedAt": "2023-12-16T04:00:43Z",
                    "content": "Indian markets extended their winning streak for the seventh consecutive week with benchmarks hitting new lifetime highs in the week ended December 15 led by positive global as well as domestic cues,… [+2782 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Are banks closed today due to five-day workweek change? Check here - Hindustan Times",
                    "description": "Bank holidays complete list is available on the RBI's website, through which people can plan their bank visits and other activities accordingly",
                    "url": "https://www.hindustantimes.com/business/are-banks-closed-today-due-to-five-day-workweek-change-check-here-101702696565683.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/pradeep-bank-branch-sansad-marg-2020-photo_8dea722a-74df-11ea-b308-ad7e0b841a10_1702696596840.jpg",
                    "publishedAt": "2023-12-16T03:59:19Z",
                    "content": "Public sector banks in India typically do not operate on Saturdays, creating uncertainty for customers planning visits. Recent speculation about a potential shift to a five-day workweek adds to the c… [+1979 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Reuters",
                    "title": "S&P 500 posts longest weekly winning streak since 2017; finishes flat on day - Moneycontrol",
                    "description": "Comments Friday by Fed Bank of New York President John Williams that it was too soon to be talking about rate cuts dampened some of the day's optimism.",
                    "url": "https://www.moneycontrol.com/news/business/s-finishes-flat-on-day-11912101.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/08/wall-street-1-770x433.jpg",
                    "publishedAt": "2023-12-16T02:54:59Z",
                    "content": "The Dow Jones Industrial Average rose 56.81 points, or 0.15%, to 37,305.16, the S&amp;P 500 lost 0.36 points, or 0.01%, to 4,719.19 and the Nasdaq Composite added 52.36 points, or 0.35%, to 14,813.92… [+2557 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cardekho.com"
                    },
                    "author": "Ansh",
                    "title": "Weekly Wrap-up: Everything Important In The Car World That Happened This Week - CarDekho",
                    "description": "Apart from the unveiling of the facelifted Sonet, the last week also witnessed some major safety news  We have witnessed a lot of important events this year in the four-wheeler industry but as the year nears the end, the occurrence of major news declines. Whi…",
                    "url": "https://www.cardekho.com/india-car-news/weekly-wrapup-everything-important-in-the-car-world-that-happened-this-week-31824.htm",
                    "urlToImage": "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/31823/1702693864162/GeneralNew.jpg",
                    "publishedAt": "2023-12-16T02:01:00Z",
                    "content": "Apart from the unveiling of the facelifted Sonet, the last week also witnessed some major safety news\r\nWe have witnessed a lot of important events this year in the four-wheeler industry but as the ye… [+2315 chars]"
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
                        "name": "News18"
                    },
                    "author": "Boman Irani",
                    "title": "Real Estate Trends 2024: How Will Indian Homebuyers Sustain Housing Momentum? - News18",
                    "description": "After witnessing a high volume of housing registrations in 2023, there is a platform for 2024 to not only sustain this momentum but potentially surpass it.",
                    "url": "https://www.news18.com/business/emerging-trends-in-real-estate-2024-housing-sector-india-8705271.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/08/real-estate-1200-169268780716x9.png",
                    "publishedAt": "2023-12-15T22:07:10Z",
                    "content": "Real Estate Trends 2024: Indian Real Estate in the post-COVID era has seen a remarkable change in homebuyer sentiments as more and more consumers come to the fore to fulfil their aspirations of ownin… [+3073 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Vaishnawi Sinha",
                    "title": "Last date to add nominee in mutual funds, demat account is December 31 - Hindustan Times",
                    "description": "December 31 is the last date to add any nominee to your mutual funds and demat account. Check the process to add nominee here.",
                    "url": "https://www.hindustantimes.com/business/last-date-to-add-nominee-in-mutual-funds-demat-account-is-december-31-check-process-here-101702659936776.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/_1b7192fe-03bf-11eb-b559-b799cd4220ef_1702659993766.jpg",
                    "publishedAt": "2023-12-15T17:18:57Z",
                    "content": "All mutual fund investors must take note that December 31, 2023 is the last day for you to add and update the nominee in your mutual fund and demat account, according to the rules updates by the Secu… [+1801 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zee Business"
                    },
                    "author": null,
                    "title": "Bazaar Agle Hafte: Bazaar showed superhit film on Friday, Sensex increased by 969 points, Nifty increased b... - Zee Business",
                    "description": "Share Market: Due to heavy buying, most of the indices including Sensex, Nifty, Bank Nifty created new records. BSE Sensex closed at 71,483 with a jump of 969 points, which also reached 71,605 intraday.",
                    "url": "https://www.zeebiz.com/market-news/video-gallery-bazaar-agle-hafte-bazaar-showed-superhit-film-on-friday-sensex-increased-by-969-points-nifty-increased-by-274-points-269005",
                    "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/15/272843",
                    "publishedAt": "2023-12-15T16:57:02Z",
                    "content": "By accepting cookies, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "SoftBank sells PB Fintech shares worth ₹914 crore; Details here | Mint - Mint",
                    "description": "The shares were divested at a rate of  ₹800.05 per share, amounting to a total valuation of  ₹913.75 crore.",
                    "url": "https://www.livemint.com/market/stock-market-news/softbank-sells-pb-fintech-shares-worth-rs-914-crore-details-here-11702658933887.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/softbank_1702659080766_1702659080994.jpg",
                    "publishedAt": "2023-12-15T16:52:04Z",
                    "content": "SoftBank entity SVF Python II Cayman conducted open market transactions, selling 1,14,21,212 equity shares of PB Fintech, the operator of Policybazaar, on December 15. These shares were divested at a… [+2500 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "Foreign investors' positions on India light, may buy on corrections: Jefferies - Moneycontrol",
                    "description": "The brokerage's Indian strategy team likes domestic cyclicals such as banks, power, telecom, industrials and property; while being cautious on IT, consumer and RIL. Jefferies believes is that overall central banks will be growth supportive in 2024",
                    "url": "https://www.moneycontrol.com/news/business/markets/foreign-investors-positions-on-india-light-may-buy-on-corrections-jefferies-11911811.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/10/rupee_dollar-770x433.jpg",
                    "publishedAt": "2023-12-15T16:50:59Z",
                    "content": "Foreign investor positioning on India is light and hence corrections will likely get bought into, wrote Jefferies' analysts in their Asia Pacific report.\r\nThey believe that Indias economic outlook is… [+2522 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "The Indian Express",
                    "title": "Economy to hit $5 trillion by 2026: Economist Arvind Panagariya - The Indian Express",
                    "description": null,
                    "url": "https://indianexpress.com/article/business/economy-hit-5-trillion-by-2026-economist-arvind-panagariya-9070087/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T16:46:19Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Vaishnawi Sinha",
                    "title": "Why TCS, Wipro, Infosys shares are showing record growth: Nifty spike explained - Hindustan Times",
                    "description": "Top IT firms like TCS, Wipro and Infosys have hugely contributed to the record spike of Nifty IT index over the last two days.",
                    "url": "https://www.hindustantimes.com/business/why-tcs-wipro-infosys-shares-are-showing-record-growth-nifty-it-spike-explained-sensex-stock-market-101702656057523.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/nifty-nse_1702656170812_1702656171214.jpg",
                    "publishedAt": "2023-12-15T16:35:37Z",
                    "content": "As Sensex touched its all-time high, crossing the 71,000 points mark on Friday hours before the markets closed for the week, the Nifty IT index also touched a new record high for the second day in a … [+1849 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Newsdrum.in"
                    },
                    "author": "NewsDrum Desk",
                    "title": "Govt allows cane juice, B-molasses to make ethanol in 2023-24; caps sugar diversion at 17 lac tonnes - NewsDrum",
                    "description": "The government on Friday allowed sugar mills to use both cane juice and B-heavy molasses to produce ethanol but capped the diversion of sugar for the purpose a...",
                    "url": "https://www.newsdrum.in/business/govt-allows-cane-juice-b-molasses-to-make-ethanol-in-2023-24-caps-sugar-diversion-at-17-lac-tonnes-2025307",
                    "urlToImage": "https://img-cdn.thepublive.com/fit-in/1200x675/",
                    "publishedAt": "2023-12-15T15:40:36Z",
                    "content": "New Delhi, Dec 15 (PTI) The government on Friday allowed sugar mills to use both cane juice and B-heavy molasses to produce ethanol but capped the diversion of sugar for the purpose at 17 lakh tonnes… [+1724 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dsij.in"
                    },
                    "author": "Mandar Wagh",
                    "title": "IPO Analysis: Muthoot Microfin Ltd - Dalal Street Investment Journal",
                    "description": "IPO Rating: Apply for the long-term",
                    "url": "https://www.dsij.in/dsijarticledetail/ipo-analysis-muthoot-microfin-ltd-35243",
                    "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/35243/image_4121.jpg",
                    "publishedAt": "2023-12-15T15:22:30Z",
                    "content": "IPO Rating: Apply for the long-term\r\nAbout the issue \r\nPromoted by Muthoot Pappachan Group, Muthoot Microfin, is hitting the primary capital market, with its initial public offering. The issue of the… [+7708 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Vaishnawi Sinha",
                    "title": "Why billionaire Naveen Jindal lost interest in buying out bankrupt Go Air - Hindustan Times",
                    "description": "Naveen Jindal, the only billionaire interested in buying out the troubled Go Air airlines, has reportedly backed out of bidding for the same.",
                    "url": "https://www.hindustantimes.com/business/why-billionaire-naveen-jindal-lost-interest-in-buying-out-bankrupt-go-air-101702650998130.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/15/1600x900/Go-first-airlines--Representative-Photo-_1688554756628_1702651067244.jpg",
                    "publishedAt": "2023-12-15T14:44:02Z",
                    "content": "The chances of Go Air recovering after its hefty losses and grounded flights are seeming even more bleak as Naveen Jindal, the only billionaire interested in buying out the airlines, has now backed o… [+2023 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Naman Suri, Nehal Chaliawala",
                    "title": "Steel ministry begins industry consultations as imports exceed exports | Mint - Mint",
                    "description": "Industry executives blame the trade deficit on global dumping by Chinese producers, which has made domestic steel uncompetitive in many key international markets",
                    "url": "https://www.livemint.com/industry/steel-ministry-begins-industry-consultations-as-imports-exceed-exports-11702649307871.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/The-ministry-of-steel-has-duly-notified-145-Indian_1691489692881_1702649848022.jpg",
                    "publishedAt": "2023-12-15T14:18:05Z",
                    "content": "NEW DELHI, MUMBAI : The ministry of steel has begun consultations with domestic producers to explore strategies for reining in imports as these have exceeded exports from India, the worlds second-lar… [+4123 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "FXStreet"
                    },
                    "author": "Filip Lagaart",
                    "title": "Oil in the green as markets go into the weekend - FXStreet",
                    "description": "Oil prices rally for a third day in a row,, fueled by the outcome of Wednesday’s US Federal Reserve meeting and Chairman Jerome Powell’s dovish remarks.  The Fed has confirmed to markets that rate cuts are coming in 2024",
                    "url": "https://www.fxstreet.com/news/oil-rides-higher-for-third-consecutive-day-as-fed-rate-cut-expectations-support-demand-outlook-202312151130",
                    "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Energy/Oil/oil-platform-on-the-sea-38503532_Large.jpg",
                    "publishedAt": "2023-12-15T14:16:21Z",
                    "content": "<ul><li>WTI Oil heads towards $74 as the Federal Reserve’s dovishness brightens the demand outlook. </li><li>Oil outlook could confirm OPEC latest report as a pickup in economic activity is foreseen … [+5600 chars]"
                },
                {
                    "source": {
                        "id": "bloomberg",
                        "name": "Bloomberg"
                    },
                    "author": "Saritha Rai",
                    "title": "Ola Founder's AI Startup Launches LLM in Hindi, Tamil, Bengali - Bloomberg",
                    "description": "Krutrim, an artificial intelligence startup founded by serial entrepreneur Bhavish Aggarwal, has launched India’s first multilingual large language model, which can generate text in 10 Indian languages.",
                    "url": "https://www.bloomberg.com/news/articles/2023-12-15/ola-founder-s-ai-startup-launches-indian-large-language-model",
                    "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDaSea9e2GbU/v1/1200x800.jpg",
                    "publishedAt": "2023-12-15T13:32:28Z",
                    "content": "Krutrim, an artificial intelligence startup founded by serial entrepreneur Bhavish Aggarwal, has launched Indias first multilingual large language model, which can generate text in 10 Indian language… [+276 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Nikita Prasad",
                    "title": "FIIs invest over ₹9,000 crore in Indian equities as Sensex, Nifty 50 score record-highs; DIIs offload ₹3,077 crore | Mint - Mint",
                    "description": "FIIs have made a comeback in Indian markets by the last week of November, snapping their three-month selling streak, over the country's strong macroeconomic fundamentals and robust uptrend shown by the domestic markets.",
                    "url": "https://www.livemint.com/market/stock-market-news/fiis-invest-over-rs-9-000-crore-in-indian-equities-as-sensex-nifty-50-score-record-highs-diis-sell-rs-3-077-crore-11702646710961.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/marketrtr_1702647852926.JPG",
                    "publishedAt": "2023-12-15T13:26:46Z",
                    "content": "Foreign institutional investors (FIIs) continued their sustained inflows in Indian equities as benchmark indices Sensex and Nifty 50 continued their bull run and posted their longest weekly winning s… [+5430 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Anu Sharma",
                    "title": "Government asks airports to prioritize passenger facilities | Mint - Mint",
                    "description": "This is part of the government's strategy to manage airport congestion better",
                    "url": "https://www.livemint.com/news/india/government-asks-airports-to-prioritize-passenger-facilities-11702642338855.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/LSpic_1686160452378_1702644517416.jpg",
                    "publishedAt": "2023-12-15T13:20:29Z",
                    "content": "New Delhi: The civil aviation ministry has issued guidelines to airport operators across India, prioritizing passenger facilities over commercial establishments and lounges to ease congestion at airp… [+3137 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "A Ksheerasagar",
                    "title": "India Shelter Finance IPO subscribed 36.6 times on Day 3; QIB, NII portions see huge demand | Mint - Mint",
                    "description": "The initial public offering (IPO) of India Shelter Finance received bids for 65,59,44,390 shares on the final day as against the 1,79,10,449 shares available for subscription, translating into a subscription rate of 36.62 times.",
                    "url": "https://www.livemint.com/market/stock-market-news/india-shelter-finance-ipo-subscribed-to-36-6-times-on-day-3-qib-nii-portions-see-huge-demand-11702640792696.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/aether_industries_ipo_1654140329895_1702640799019.jpg",
                    "publishedAt": "2023-12-15T12:36:44Z",
                    "content": "The initial public offering (IPO) of India Shelter Finance saw significant demand during the final day of bidding. The IPO, which opened for subscription on Wednesday (December 13), received a favour… [+2696 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Dhanya Nagasundaram",
                    "title": "Inox India IPO oversubscribed 7.07 times on second day of subscription; NIIs, retail investors steal the show | Mint - Mint",
                    "description": "Inox India IPO was oversubscribed on its second day, after receiving overwhelming responses from both retail and non-institutional investors (NIIs). Inox IPO was subscribed 7.07 times. Inox India IPO GMP today or grey market premium is +520.",
                    "url": "https://www.livemint.com/market/ipo/inox-india-ipo-oversubscribed-7-07-times-on-second-day-of-subscription-niis-retail-investors-steal-the-show-11702640842661.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/INOX_India_GMP_subscription_status_1702520283261_1702642553675.JPG",
                    "publishedAt": "2023-12-15T12:29:19Z",
                    "content": "Inox India IPO subscription status: Inox India IPO was oversubscribed on its second day, after receiving overwhelming responses from both retail and non-institutional investors (NIIs). Inox IPO was s… [+4052 chars]"
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
                        "id": null,
                        "name": "FXStreet"
                    },
                    "author": "FXStreet Insights Team",
                    "title": "Gold Price Forecast: Fed’s shift in tone should see investors continue to build exposure to XAU/USD – ANZ - FXStreet",
                    "description": "Gold consolidated its gains following the dovish commentary emanating from Wednesday’s FOMC meeting.",
                    "url": "https://www.fxstreet.com/news/gold-price-forecast-feds-shift-in-tone-should-see-investors-continue-to-build-exposure-to-xau-usd-anz-202312151159",
                    "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/gold-nuggets-14424039_Large.jpg",
                    "publishedAt": "2023-12-15T11:59:24Z",
                    "content": "Information on these pages contains forward-looking statements that involve risks and uncertainties. Markets and instruments profiled on this page are for informational purposes only and should not i… [+1689 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zoom"
                    },
                    "author": "Paras Bisht",
                    "title": "IRFC Share Price Target 2024: Full Steam Ahead For Railway Stock As It Crosses Rs 100; What's Next? Analysts W - Times Now",
                    "description": "IRFC share price on NSE hit a fresh high on Friday amid broad base buying in the Indian Railways Stock. The counter settled at Rs 94.95 a share on the NSE, up 2.48 per cent from its previous close. IRFC Share Price Target 2024, 2025, IRFC Share Price History …",
                    "url": "https://www.timesnownews.com/business-economy/markets/irfc-share-price-target-2024-2025-irfc-share-prices-today-news-on-nse-bse-stock-surpasses-rs-100-analysts-weigh-in-on-whats-next-for-indian-railways-stock-article-106021097",
                    "urlToImage": "https://static.tnn.in/thumb/msid-106021887,thumbsize-133572,width-1280,height-720,resizemode-75/106021887.jpg",
                    "publishedAt": "2023-12-15T11:34:28Z",
                    "content": "IRFC Share Price Target 2024, 2025: IRFC Share Prices Today News on NSE, BSE: Stock Surpasses Rs 100. Analysts weigh in on what's next for Indian Railways Stock. Image Source: CanvaPro"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zee Business"
                    },
                    "author": null,
                    "title": "IREDA IPO Boom Ends As Stocks Crash 10% After Record High | Stock Market News - Zee Business",
                    "description": "After a soaring debut, IREDA shares face a 10% dip as profit booking kicks in. Learn about the company's journey post-listing and its response to the National Stock Exchange's scrutiny. Is this a temporary setback or a sign of a new trend in the market?",
                    "url": "https://www.zeebiz.com/market-news/video-gallery-ireda-ipo-boom-ends-as-stocks-crash-10-after-record-high-stock-market-news-268974",
                    "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/12/15/272806",
                    "publishedAt": "2023-12-15T11:21:01Z",
                    "content": "By accepting cookies, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Ndtvprofit.com"
                    },
                    "author": "Mimansa Verma",
                    "title": "Rupee Hits Three-Month High As RBI Eases Dollar Buying On Fed Signal, FII Flows - NDTV Profit",
                    "description": "The rupee closed the trade at Rs 83 a dollar, after hitting a high of Rs 82.95 earlier in the day.",
                    "url": "https://www.ndtvprofit.com/economy-finance/rupee-hits-three-month-high-even-as-rbi-eases-dollar-buying-on-fed-signal-fii-flows",
                    "urlToImage": "https://media.assettype.com/bloombergquint%2F2022-11%2Ff95d13e3-7d2c-4ffb-aecd-0c69fd450f06%2FClose_view_of_IIndian_bankntes__rupees_arranged_for_photograph___Photo_Vijay_Sartape_Source_BQ_Prime.jpeg?rect=0%2C436%2C1200%2C630&w=1200&auto=format%2Ccompress&ogImage=true",
                    "publishedAt": "2023-12-15T10:47:25Z",
                    "content": "The Indian rupee hit its highest level in nearly three months on Friday on the back of persistent foreign fund inflows and some easing in the Reserve Bank of India's dollar buying, two currency trade… [+1883 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bikewale.com"
                    },
                    "author": "Pratheek Kunder",
                    "title": "Yamaha MT03 launched in India at Rs 4.60 lakh - BikeWale",
                    "description": "Yamaha has finally launched its most awaited street bike – the MT 03 in India. This bike has been priced at Rs 4.60 lakh (ex-showroom), which makes it Rs 5000 cheaper than the R3.",
                    "url": "https://www.bikewale.com/news/yamaha-mt03-launched-in-india-at-rs-460-lakh/",
                    "urlToImage": "https://imgd.aeplcdn.com/642x336/n/cw/ec/166771/yamaha-mt-03-right-side-view1.jpeg?isig=0&q=80",
                    "publishedAt": "2023-12-15T10:06:11Z",
                    "content": "- MT 03 is a CBU unit\r\n- Powered by a 40bhp engine\r\n- Gets USD forks\r\nYamaha has finally launched its most awaited street bike the MT 03 in India. This bike has been priced at Rs 4.60 lakh (ex-showro… [+966 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bar & Bench - Indian Legal News"
                    },
                    "author": "Prashant Jha",
                    "title": "Delhi High Court refuses to restrain Ashneer Grover from selling shares purchased from BharatPe's Shashvat Nakrani - Bar & Bench - Indian Legal News",
                    "description": "The Delhi High Court on Friday rejected an interim application filed by BharatPe co-founder Shashvat Nakrani to restrain the firm's former Managing Director Ash",
                    "url": "https://www.barandbench.com/news/delhi-high-court-refuses-to-restrain-ashneer-grover-from-selling-shares-purchased-from-bharatpe-co-founder-shashvat-nakrani",
                    "urlToImage": "https://media.assettype.com/barandbench%2F2023-12%2F878dc091-3e49-42e9-a639-5f9b34805c25%2F11.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
                    "publishedAt": "2023-12-15T09:35:43Z",
                    "content": "It was Nakrani's case that he had transferred his shares to Grover and while the latter claimed to have paid for them in cash, the money was never received. \r\nAccording to a report in Mint, BharatPe … [+496 chars]"
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "The Hindu",
                    "title": "Exports dipped again in November, but trade deficit eases 31% from record high - The Hindu",
                    "description": null,
                    "url": "https://www.thehindu.com/business/Economy/indias-exports-drop-283-in-november-imports-down-by-433/article67641203.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T09:22:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "FXStreet"
                    },
                    "author": "Dhwani Mehta",
                    "title": "Gold price on December 15: Rates in main Indian cities - FXStreet",
                    "description": "Gold prices fell in India on Friday, according to data from India's Multi Commodity Exchange (MCX).",
                    "url": "https://www.fxstreet.com/news/india-gold-price-today-gold-falls-according-to-mcx-data-202312150920",
                    "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/raw-gold-55156544_Large.jpg",
                    "publishedAt": "2023-12-15T09:20:31Z",
                    "content": "Information on these pages contains forward-looking statements that involve risks and uncertainties. Markets and instruments profiled on this page are for informational purposes only and should not i… [+1689 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Shubham Raj",
                    "title": "Chris Wood seems neither greedy nor fearful when it comes to China and India - Moneycontrol",
                    "description": "Investor wealth, reflected by the total market cap of BSE-listed companies, rose by Rs 2.78 lakh crore today taking the overall valuation to Rs 357.80 lakh crore. Today's gain was on top of the nearly Rs 4 lakh crore gain in the previous session",
                    "url": "https://www.moneycontrol.com/news/business/markets/sensex-nifty-climb-new-highs-on-sustained-bull-run-investors-richer-by-rs-3-lakh-cr-11909951.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Market_up-770x433.jpeg",
                    "publishedAt": "2023-12-15T08:57:38Z",
                    "content": "Dalal Street scaled new benchmarks on December 15 as the bull run continued and buyers flocked to the stock market with sentiments remaining positive following the dovish stance taken by the US Feder… [+4072 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tradebrains.in"
                    },
                    "author": "Trade Brains",
                    "title": "Ambani group stock hits 5% upper circuit after company raises ₹ 1500 Cr through QIP - Trade Brains",
                    "description": "Shares of this renewable energy company clocked 5 percent upper circuit after the company raised Rs.1,500 crores through the Qualified Institutions placement (QIP). The shares have delivered more than 60 percent returns to its shareholders.",
                    "url": "https://tradebrains.in/features/ambani-group-stock-hits-5-upper-circuit-after-company-raises-1500-cr-through-qip/",
                    "urlToImage": "https://tradebrains.in/features/wp-content/uploads/2022/01/Mukesh-Ambani.jpg",
                    "publishedAt": "2023-12-15T08:45:00Z",
                    "content": "Shares of this renewable energy company clocked 5 percent upper circuit after the company raised Rs.1,500 crores through the Qualified Institutions placement (QIP). The shares have delivered more tha… [+2994 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zigwheels.com"
                    },
                    "author": "Aniruthan Srithar",
                    "title": "2024 Kia Sonet Facelift HTX+: Top-end Tech Line Variant Detailed In 9 Images - ZigWheels",
                    "description": "In this report, we give you detailed rundown of the 2024 Kia Sonet’s HTX+ variant in our image gallery",
                    "url": "https://www.zigwheels.com/news-features/in-pics/2024-kia-sonet-facelift-htx-top-end-tech-line-variant-detailed-in-9-images/51710/",
                    "urlToImage": "https://media.zigcdn.com/media/content/2023/Dec/cover_657bf2220e07b.jpeg",
                    "publishedAt": "2023-12-15T08:34:20Z",
                    "content": "The 2024 Kia Sonet facelift will be available to buy in three broad trims: Tech Line, GT Line and X-Line. These three trims get minor design differences for a visual distinction between all of them. … [+2422 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Investing.com"
                    },
                    "author": "Invezz",
                    "title": "Nifty 50 index gets severely overbought as the surge continues - Investing.com India",
                    "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
                    "url": "https://in.investing.com/news/nifty-50-index-gets-severely-overbought-as-the-surge-continues-3939056",
                    "urlToImage": "https://i-invdn-com.investing.com/news/https://d56-invdn-com.investing.com/content/picf8a96b2afb527070092fe651dc25b993.jpg",
                    "publishedAt": "2023-12-15T08:18:45Z",
                    "content": "The \r\nNifty 50\r\n index spectacular rally continued this week as hopes of rate cuts in India, United States, and other countries rose. The index, which tracks the biggest Indian companies, spiked to a… [+2656 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Rediff.com"
                    },
                    "author": "PTI",
                    "title": "Zee-Sony merger: India's largest media company is all set to be born - Rediff.com",
                    "description": "The National Company Law Appellate Tribunal on Friday issued notices to Zee Entertainment Enterprise Ltd (ZEEL) over the petitions filed by IDBI Bank and AXIS Finance against an NCLT order that approved the media company's merger with Culver Max Entertainment…",
                    "url": "https://www.rediff.com/business/report/zee-sony-merger-indias-largest-media-company-is-all-set-to-be-born/20231215.htm",
                    "urlToImage": "https://im.rediff.com/money/2023/may/26zee-sony.jpg",
                    "publishedAt": "2023-12-15T08:15:47Z",
                    "content": "The National Company Law Appellate Tribunal on Friday issued notices to Zee Entertainment Enterprise Ltd (ZEEL) over the petitions filed by IDBI Bank and AXIS Finance against an NCLT order that appro… [+2015 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Business Desk",
                    "title": "Akasa Air tops on-time performance airlines list for November 2023; here's where Indigo, Air India, Spice - IndiaTimes",
                    "description": "India Business News: Akasa Air has topped the list of airlines based on the on-time performance (OTP) matrix. In November 2023, the overall cancellation rate for scheduled",
                    "url": "https://timesofindia.indiatimes.com/business/india-business/akasa-air-tops-on-time-performance-airlines-list-for-november-2023-heres-where-indigo-air-india-spicejet-stand/articleshow/106016177.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106016315,width-1070,height-580,imgsize-41366,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T08:12:22Z",
                    "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The News Minute"
                    },
                    "author": "TNM Staff",
                    "title": "Indians ordered 2.5 biryanis per second in 2023, one customer ordered 1633 biryanis: Swiggy - The News Minute",
                    "description": "How much biryani is too much? Well, a benchmark has been set by a person from Hyderabad at 1,633 orders. This customer has ordered biryani 1,633 times this year",
                    "url": "https://www.thenewsminute.com/telangana/indians-ordered-25-biryanis-per-second-in-2023-one-customer-ordered-1633-biryanis-swiggy",
                    "urlToImage": "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2FHyderabadi-biryani_Picxy.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
                    "publishedAt": "2023-12-15T08:09:18Z",
                    "content": "How much biryani is too much? Well, a benchmark has been set by a person from Hyderabad at 1,633 orders. This customer has ordered biryani 1,633 times this year, which was more than four biryanis a d… [+684 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "PTI",
                    "title": "Defence ministry inks over Rs 5,300 crore deal with BEL - Moneycontrol",
                    "description": "An electronic fuze is an integral component of medium to heavy calibre artillery guns which provide sustained artillery firepower for military operations.",
                    "url": "https://www.moneycontrol.com/news/business/defence-ministry-inks-over-rs-5300-crore-deal-with-bel-11909631.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/10/Collage-Maker-08-Oct-2023-10-30-AM-973-770x433.jpg",
                    "publishedAt": "2023-12-15T07:51:53Z",
                    "content": "The defence ministry on Friday sealed an over Rs 5,300 crore deal with state-run Bharat Electronics Ltd (BEL) for procurement of electronic fuzes for the Indian Army for a period of 10 years.\r\nAn ele… [+1588 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tradebrains.in"
                    },
                    "author": "Trade Brains",
                    "title": "Smallcap stock falls by 9% after promoters to sell up to 10% in the company - Trade Brains",
                    "description": "Shares of this technology company slumped 9 percent in Friday’s trading session after the promoters planned to sell up to 10 percent of the company. The shares have delivered more than 40 percent returns on a YTD basis to its shareholders.",
                    "url": "https://tradebrains.in/features/smallcap-stock-falls-by-9-after-promoters-to-sell-up-to-10-in-the-company/",
                    "urlToImage": "https://tradebrains.in/features/wp-content/uploads/2022/06/Markets-12342-Cover-Image.jpg",
                    "publishedAt": "2023-12-15T07:18:00Z",
                    "content": "Shares of this technology company slumped 9 percent in Fridays trading session after the promoters planned to sell up to 10 percent of the company. The shares have delivered more than 40 percent retu… [+2684 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "Srimoyee Chowdhury",
                    "title": "Bengaluru store’s marketing idea will make you nostalgic. See post - India Today",
                    "description": "A Bengaluru supermarket's 'wall of nostalgia' has grabbed attention and will make you miss your childhood too.",
                    "url": "https://www.indiatoday.in/trending-news/story/bengaluru-stores-marketing-idea-will-make-you-nostalgic-see-post-2476301-2023-12-15",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/bengaluru-151259344-16x9_0.jpg?VersionId=6hdAxgu5W2MB.r9jMKEfJCsDlFpFTegg",
                    "publishedAt": "2023-12-15T07:13:14Z",
                    "content": "A supermarket in Bengaluru has evoked a sense of nostalgia among social media users with its marketing idea that is nothing but unique to say the least. Sharanya Shetty, an X user, shared a picture o… [+1279 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Business Standard"
                    },
                    "author": "Business Standard",
                    "title": "HCL Tech market-cap touches Rs 4 trillion; stock surges 8% in two days - Business Standard",
                    "description": null,
                    "url": "https://www.business-standard.com/markets/news/hcl-tech-market-cap-touches-rs-4-trillion-stock-surges-8-in-two-days-123121500376_1.html",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T06:50:07Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Pranati Deva",
                    "title": "Insurance stocks fall up to 5% as IRDAI proposes a higher surrender value; here's what it means | Mint - Mint",
                    "description": "Bucking the overall positive market trend, insurance stocks declined up to 5 percent in trade today (Friday, December 15), after the IRDAI proposed a higher surrender value and lower charges for life insurance companies in a consultation paper.",
                    "url": "https://www.livemint.com/market/stock-market-news/insurance-stocks-fall-up-to-5-as-irdai-proposed-a-higher-surrender-value-heres-what-it-means-11702621105677.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/The-Insurance-Regulatory-and-Development-Authority_1685722869186_1702621247142.jpg",
                    "publishedAt": "2023-12-15T06:26:20Z",
                    "content": "Bucking the overall positive market trend, insurance stocks declined up to 5 percent in trade today (Friday, December 15), after the Insurance Regulatory and Development Authority of India (IRDAI) pr… [+4905 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Business Desk",
                    "title": "SBI hikes loan interest rates by up to 10 basis points, base rate by 15 bps - timesofindia.com",
                    "description": "India Business News: The State Bank of India (SBI) has announced an increase in its marginal cost of funds-based lending rate (MCLR) and base rate. The new rates, which ca",
                    "url": "https://timesofindia.indiatimes.com/business/india-business/sbi-hikes-loan-interest-rates-by-up-to-10-basis-points-base-rate-by-15-bps/articleshow/106010680.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106011974,width-1070,height-580,imgsize-48602,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-15T06:06:08Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Sanya Jain",
                    "title": "‘My father earned 10 rupees a day,’ recalls CEO behind Rs 2,000 crore Bengaluru-headquartered empire - Moneycontrol",
                    "description": "Musthafa PC, founder and CEO of iD Fresh Food, opened up about his humble beginnings. 'My father earned 10 rupees a day initially,' he recalled.",
                    "url": "https://www.moneycontrol.com/news/trends/id-fresh-food-ceo-musthafa-pc-rags-to-riches-story-father-earned-rs-10-a-day-11908891.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/MixCollage-15-Dec-2023-11-13-AM-536-770x433.jpg",
                    "publishedAt": "2023-12-15T06:03:01Z",
                    "content": "As founder and CEO of iD Fresh Food, Musthafa PC today sits at the head of a Rs 2,000 crore empire. His rags to riches journey stands as inspiration to millions for Musthafas family was one of the po… [+1681 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Iea.org"
                    },
                    "author": null,
                    "title": "Global coal demand expected to decline in coming years - News - IEA - IEA",
                    "description": "Global coal demand expected to decline in coming years - News from the International Energy Agency",
                    "url": "https://www.iea.org/news/global-coal-demand-expected-to-decline-in-coming-years",
                    "urlToImage": "https://iea.imgix.net/8b118ab3-5f3e-475c-9551-d6798768b059/PhotoshowingportalcranesoverhugeheapsofcoalintheMurmanskcommercialseaport_Russia_shutterstock_1978777190.jpg?auto=compress%2Cformat&fit=min&q=80&rect=186%2C19%2C1978%2C1977",
                    "publishedAt": "2023-12-15T06:01:57Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-hindu",
                        "name": "The Hindu"
                    },
                    "author": "The Hindu",
                    "title": "MSC arm TiL to acquire 49% stake in Adani Ennore Container Terminal - The Hindu",
                    "description": null,
                    "url": "https://www.thehindu.com/business/Industry/msc-arm-til-to-acquire-49-stake-in-adani-ennore-container-terminal/article67640769.ece",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T05:26:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Narayana Murthy's deepfake videos ‘endorsing trading app’ goes viral, Infosys founder cautions public | Mint - Mint",
                    "description": "Veteran industrialist Ratan Tata has called out a deepfake video of him giving investment advice in an Instagram post.",
                    "url": "https://www.livemint.com/news/india/narayana-murthys-deepfake-videos-endorsing-trading-app-goes-viral-infosys-founder-cautions-public-11702613047975.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/2-0-122632885-17April2009NarayanaMurthy-144-0_1681807702265_1702617440728.jpg",
                    "publishedAt": "2023-12-15T05:25:02Z",
                    "content": "Infosys founder Narayana Murthy on Thursday pointed out that there are a few deepfake videos of him circulating on the internet. In a post on X (formerly Twitter), he said some web pages claimed that… [+3405 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Stability In Political Regime Can Aid Large Cap Outperformance: Marcellus Investment Managers - CNBC-TV18",
                    "description": null,
                    "url": "https://www.youtube.com/watch?v=_gubWOdRnm0",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T04:48:34Z",
                    "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Ravindra Sonavane",
                    "title": "PNB becomes 3rd state-run lender to cross Rs 1 lakh crore in market value - Moneycontrol",
                    "description": "Analysts note that PSU banks are undervalued in comparison to private banks.",
                    "url": "https://www.moneycontrol.com/news/business/earnings/pnb-becomes-3rd-state-run-lender-to-cross-rs-1-lakh-crore-in-market-value-11908461.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/04/Punjab_national_bank_in_South_Road_-_geograph.org_.uk_-_1519911-1-770x433.jpg",
                    "publishedAt": "2023-12-15T04:26:39Z",
                    "content": "The state-run Punjab National Bank became the third Indian lender to cross the Rs 1-lakh-crore market value after its shares surged over 60 percent so far this year.\r\nThe stock hit a high of Rs 91.81… [+3059 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "SBI shares near 52-week high post 6.35% stake buyout of Canpac Trends at Rs 50 crore - Moneycontrol",
                    "description": "Canpac Trends is a Gujarat-based packaging and printing company that offers multiple packaging solutions such as duplex printed cartons, corrugated cartons, flexible laminate pouches, paper bags, rigid boxes, and more",
                    "url": "https://www.moneycontrol.com/news/business/markets/sbi-shares-near-52-week-high-post-6-35-stake-buyout-of-canpac-trends-at-rs-50-crore-11907901.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/10/392738491-653x435.jpg",
                    "publishedAt": "2023-12-15T03:58:02Z",
                    "content": "Shares of State Bank of India (SBI) gained 1 percent to Rs 628.9 per share on December 15, trading near its 52-week high level after the state-owned lender acquired 6.35 percent stake in Canpac Trend… [+2448 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Shivangini",
                    "title": "Essar Group signs MoU to invest ₹55,000 crore in energy, infra in Gujarat, to create 10,000 job opportunities | Mint - Mint",
                    "description": "In a statement, Essar Group announced it had signed three memoranda of understanding with the government of Gujarat for a total investment of  ₹55,000 crore ahead of the Vibrant Gujarat Global Summit 2024.",
                    "url": "https://www.livemint.com/companies/news/essar-group-signs-mou-to-invest-rs-55-000-crore-in-energy-infra-in-gujarat-to-create-10-000-job-opportunities-11702609912894.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/15/1600x900/IMG-20231215-WA0001_1702611215480_1702611226318.jpg",
                    "publishedAt": "2023-12-15T03:38:33Z",
                    "content": "Essar group is set to invest 55,000 crore in energy transition, power, and port projects in Gujarat, the company announced on December 14, after signing pacts with the state government. Prashant Ruia… [+2345 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Goodreturns.in"
                    },
                    "author": "Goodreturns",
                    "title": "1550% Dividends, Up 38% YTD: ITC Rs 17800 Crore Away In Becoming Largest FMCG In India; 7 Brokerages Give Buy - Goodreturns",
                    "description": null,
                    "url": "https://www.goodreturns.in/news/1550-dividends-up-38-ytd-itc-rs-17-800-crore-away-in-becoming-largest-fmcg-7-brokerages-give-buy-1318343.html",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T03:37:39Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "M&M Finance to foray into life, health, general insurance business - Moneycontrol",
                    "description": "The company will do an initial investment of approximately Rs 5 crore to Rs 10 crore towards technology setup, manpower hiring and training and certification costs.",
                    "url": "https://www.moneycontrol.com/news/business/mm-finance-to-foray-into-life-health-general-insurance-business-11908141.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/insurance-1-653x435.jpg",
                    "publishedAt": "2023-12-15T03:14:11Z",
                    "content": "Mahindra and Mahindra Finance on December 15 said that it will enter the life, health and general insurance business. We have approved undertaking supplemental business activity of soliciting and pro… [+802 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Business Standard"
                    },
                    "author": "Business Standard",
                    "title": "Stocks to Watch: PVR Inox, Hero Moto, Jupiter Wagon, Texrail, eYantra, Ami - Business Standard",
                    "description": null,
                    "url": "https://www.business-standard.com/markets/news/stocks-to-watch-pvr-inox-hero-moto-jupiter-wagon-texrail-eyantra-ami-123121500109_1.html",
                    "urlToImage": null,
                    "publishedAt": "2023-12-15T02:35:01Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cointelegraph"
                    },
                    "author": "Oliver Rust",
                    "title": "Don't get excited about Fed 'dovishness' — another rate hike is in the cards - Cointelegraph",
                    "description": "Contrary to Jerome Powell's intimations, inflation is likely to rise in the months ahead. If the Fed does not hike rates in 2024, the problem will get worse.",
                    "url": "https://cointelegraph.com/news/another-federal-reserve-rate-hike-in-the-cards",
                    "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-12/b70bb38a-9f74-4879-bd43-3a60de67ffb4.jpg",
                    "publishedAt": "2023-12-14T22:41:23Z",
                    "content": "Decembers Federal Open Market Committee (FOMC) meeting was a huge boon for markets. Risk assets including cryptocurrencies soared as the central bank appeared to take a more dovish stance on monetary… [+5631 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Abhishek Behl",
                    "title": "Housing sales for Delhi-NCR cross ₹50,000 crore mark - Hindustan Times",
                    "description": "According to Anarock, the top seven cities in India saw inventory worth ₹3.48 lakh crore sold in the first nine months",
                    "url": "https://www.hindustantimes.com/cities/gurugram-news/housing-sales-for-delhi-ncr-cross-50-lakh-crore-mark-101702573826629.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/14/1600x900/Delhi-NCR-saw-cumulative-sales-of--50-188-crore--4_1702577353742.jpg",
                    "publishedAt": "2023-12-14T20:20:30Z",
                    "content": "Housing sales across the top seven markets in India saw a massive boost this year, registering more sales in the first nine months of 2023 than in 2022 in its entirety, real-estate consultancy firm A… [+3361 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Ndtvprofit.com"
                    },
                    "author": "PTI",
                    "title": "Vedanta Directors To Meet Next Week To Discuss Issuance Of NCDs - NDTV Profit",
                    "description": "Vedanta Ltd. on Thursday said the meeting of committee of directors will be held next week to consider the proposal for issuance of non-convertible debentures on a private placement basis.",
                    "url": "https://www.ndtvprofit.com/business/vedanta-directors-to-meet-next-week-to-discuss-issuance-of-ncds",
                    "urlToImage": "https://media.assettype.com/bloombergquint%2F2023-12%2F9faf92df-3019-4076-a112-9747c95f0936%2FSignage_of_Vedanta_Ltd__outside_its_office_building___Source_Vijay_Sartape_BQ_Prime___2_.jpeg?w=1200&auto=format%2Ccompress&ogImage=true",
                    "publishedAt": "2023-12-14T18:50:52Z",
                    "content": "\"The company proposes to hold a meeting of its duly constituted Committee of Directors on Tuesday, December 19, 2023 to consider the proposal for issuance of NCDs on a private placement basis,\" Vedan… [+26 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "PTI",
                    "title": "LIC Cards, IDFC First Bank, Mastercard collaborate to launch co-branded credit card - Moneycontrol",
                    "description": "Both variants of the card will offer travel benefits, such as complimentary access to lounges at airports and railway stations, and various protective covers such as personal accident insurance, the statement added.",
                    "url": "https://www.moneycontrol.com/news/business/lic-cards-idfc-first-bank-mastercard-collaborate-to-launch-co-branded-credit-card-11905581.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/IDFC-First-Bank-659x435.jpeg",
                    "publishedAt": "2023-12-14T11:11:23Z",
                    "content": "IDFC First Bank, LIC Cards, and Mastercard on Thursday announced their collaboration to launch an exclusive co-branded credit card to meet the dynamic financial needs of the country. Available in two… [+1549 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tradebrains.in"
                    },
                    "author": "Trade Brains",
                    "title": "Multibagger stock hits 5% upper circuit after it received an order worth ₹ 1617 Cr from Railway Ministry - Trade Brains",
                    "description": "On Thursday, shares of India's leading Indian manufacturer of railway freight cars jumped 5 percent after receiving a Rs 1,617 crore order from the Ministry of Railways.",
                    "url": "https://tradebrains.in/features/multibagger-stock-hits-5-upper-circuit-after-it-received-an-order-worth-1617-cr-from-railway-ministry/",
                    "urlToImage": "https://tradebrains.in/features/wp-content/uploads/2023/10/railwaywagon.jpg",
                    "publishedAt": "2023-12-14T10:28:00Z",
                    "content": "On Thursday, shares of India’s leading Indian manufacturer of railway freight cars jumped 5 percent after receiving a Rs 1,617 crore order from the Ministry of Railways. \r\nJupiter Wagons Ltd shares c… [+2266 chars]"
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
        const startIndex = articles.length;
        const endIndex = startIndex + 6;
        const parsedData = newsData.slice(startIndex, endIndex);
        setTimeout(() => {

            setArticles((prevArticles) => prevArticles.concat(parsedData));
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
