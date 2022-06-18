let onlyimagenews = document.getElementById("only-image-news-item");

let threenewsblock = document.querySelector("#news-block-3-rows-1");
let twonewsblock2 = document.querySelector("#news-block-3-rows-2");
let threenewsblock3 = document.querySelector("#news-block-3-rows-3");
let titlesnewsblock = document.querySelector("#news-block-free-rows");
let politicsdiv = document.querySelector("#news-container-karnataka-1");

function getKAdata(){
    // let url = `https://newsapi.org/v2/everything?q=karnataka&apiKey=8925854952cb4774aa1368bfd7a16242` ;

    let data = [{
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Lena H. Sun, Joel Achenbach",
        "title": "CDC recommends Pfizer-BioNTech and Moderna vaccines for young children - The Washington Post",
        "description": "Coronavirus vaccines to be given to children as young as six months -- the last group to be eligible, about a year and a half after adults.",
        "url": "https://www.washingtonpost.com/health/2022/06/18/cdc-coronavirus-vaccine-young-children/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GTS2SGHM5YI6ZH4QPHPR7MUCSY.jpg&w=1440",
        "publishedAt": "2022-06-18T17:38:18Z",
        "content": "Placeholder while article actions load\r\nAdvisers to the Centers for Disease Control and Prevention on Saturday unanimously recommended the nations first coronavirus vaccines for children under 5, one… [+12946 chars]"
      }, {
        "source": {
          "id": null,
          "name": "Motorsport.com"
        },
        "author": "Jonathan Noble",
        "title": "Leclerc to start Canadian GP from back of the grid - Motorsport.com",
        "description": "Charles Leclerc will start from the back of the grid in Formula 1's Canadian Grand Prix after electing to take new power unit components.",
        "url": "https://www.motorsport.com/f1/news/leclerc-to-start-canadian-gp-from-back-of-the-grid/10324591/",
        "urlToImage": "https://cdn-1.motorsport.com/images/amp/6O1yGbX2/s6/charles-leclerc-ferrari-f1-75-.jpg",
        "publishedAt": "2022-06-18T17:19:57Z",
        "content": "The Monegasque driver, who is fighting Max Verstappen for the F1 world title, had already been set for a 10-place grid drop as the result of a new control electronics on Saturday.\r\nHowever, during fi… [+1824 chars]"
      }, {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Jasmine Wright, CNN",
        "title": "Biden is 'fine' after falling off his bike in Delaware, White House says - CNN",
        "description": "President Joe Biden is \"fine,\" after falling off his bike Saturday during a ride in a state park near his home in Rehoboth Beach, Delaware, a White House official said.",
        "url": "https://www.cnn.com/2022/06/18/politics/biden-falls-riding-bike/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220618102554-01-joe-biden-bike-0618-super-tease.jpg",
        "publishedAt": "2022-06-18T17:10:00Z",
        "content": "(CNN)President Joe Biden is \"fine,\" after falling off his bike Saturday during a ride in a state park near his home in Rehoboth Beach, Delaware, a White House official said.\r\nNo medical attention is … [+1312 chars]"
      }, {
        "source": {
          "id": null,
          "name": "Eonline.com"
        },
        "author": "Corinne Heller",
        "title": "Khloe Kardashian Responds to Rumor About Dating Again After Tristan Thompson Split - E! NEWS",
        "description": "After a rumor claimed Khloe Kardashian was dating again, months after her breakup from Tristan Thompson, the reality star set the record straight.",
        "url": "https://www.eonline.com/news/1335043/khloe-kardashian-responds-to-rumor-about-dating-again-after-tristan-thompson-split",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202259/rs_1200x1200-220609181633-Khloe-Kardashian-Tristan-Thompson.jpg?fit=around%7C1080:566&output-quality=90&crop=1080:566;center,top",
        "publishedAt": "2022-06-18T16:52:00Z",
        "content": "Khloe's reaction to find out about the cheating scandal, which isn't Tristan's first, was shown on The Kardashians, whose debut season ended this week. \"Rewatching this part is uncomfortable but I lo… [+663 chars]"
      }, {
        "source": {
          "id": null,
          "name": "WPVI-TV"
        },
        "author": "6abc Digital Staff",
        "title": "Philadelphia firefighter dies after building collapse on West Indiana Avenue in Fairhill; 5 others also injured - WPVI-TV",
        "description": "One firefighter has died after being trapped in a building that caught fire in Philadelphia and then collapsed early Saturday, fire officials said.",
        "url": "https://6abc.com/philadelphia-firefighter-dies-building-collapse-philly-fire-west-indiana-avenue-fairhill/11973173/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/11973888_firefighter-dies-collapse.jpg?w=1600",
        "publishedAt": "2022-06-18T16:30:00Z",
        "content": "PHILADELPHIA (WPVI) -- One firefighter has died after being trapped in a building that caught fire in Philadelphia and then collapsed early Saturday, fire officials said.The fallen firefighter was no… [+1768 chars]"
      }, {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Timothy Bella",
        "title": "Montana Gov. Gianforte vacationed in Italy as flooding crushed Yellowstone - The Washington Post",
        "description": "The governor’s office had initially declined to disclose Gov. Greg Gianforte's whereabouts or specify when he would return due to “security concerns,” even as many questioned why Gianforte was nowhere to be found.",
        "url": "https://www.washingtonpost.com/nation/2022/06/18/yellowstone-flooding-gianforte-italy-montana/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5THJVZXOLYI6ZH4QPHPR7MUCSY.jpg&w=1440",
        "publishedAt": "2022-06-18T16:23:32Z",
        "content": "Placeholder while article actions load\r\nMontana Gov. Greg Gianforte (R) was vacationing in Italy when historic flooding overwhelmed his state this week and caused Yellowstone National Park to close, … [+5989 chars]"
      }, {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": null,
        "title": "Zelenskiy vows Ukraine will prevail, Boris Johnson promises lasting support - Reuters.com",
        "description": "With a blessing for its EU ambitions and a pledge of unwavering support from Britain, Ukraine vowed on Saturday to prevail against Moscow as it battled Russian assaults near a key eastern city and multiple locations came under shell and missile attack.",
        "url": "https://www.reuters.com/world/europe/wrapup1-war-east-rages-ukraine-gets-chance-live-european-dream-2022-06-18/",
        "urlToImage": "https://www.reuters.com/resizer/CdkUGVe36vneFxr4HZ0-SOKvquc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GHKFLWNGRJL75KMHT6VAA47BZI.jpg",
        "publishedAt": "2022-06-18T16:02:00Z",
        "content": "KYIV, June 18 (Reuters) - With a blessing for its EU ambitions and a pledge of unwavering support from Britain, Ukraine vowed on Saturday to prevail against Moscow as it battled Russian assaults near… [+4926 chars]"
      }, {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "EVERY FINAL CALL Of The Last 4 Warriors Championships - NBA",
        "description": "Every final call from the Warriors 4 NBA Championships.Stay up-to-date on news, live scores and stats with the NBA App:https://app.link.nba.com/-App22",
        "url": "https://www.youtube.com/watch?v=9CHTY6MubjQ",
        "urlToImage": "https://i.ytimg.com/vi/9CHTY6MubjQ/maxresdefault.jpg",
        "publishedAt": "2022-06-18T16:00:11Z",
        "content": null
      }, {
        "source": {
          "id": null,
          "name": "ESPN"
        },
        "author": "ESPN.com",
        "title": "U.S. Open 2022 - Sights, sounds and best moments from the third round - ESPN",
        "description": "Here is everything that is going on in the third round of the U.S. Open at The Country Club.",
        "url": "https://www.espn.com/golf/story/_/id/34112302/us-open-2022-sights-sounds-best-moments-third-round",
        "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0618%2Fr1026519_1296x729_16%2D9.jpg",
        "publishedAt": "2022-06-18T15:56:59Z",
        "content": "BROOKLINE, Mass. -- A lot can happen on a Saturday at the U.S. Open, especially with a leaderboard as packed as this one. With a mix of big names and lesser-known ones, things could get interesting o… [+1075 chars]"
      }, {
        "source": {
          "id": null,
          "name": "Deadline"
        },
        "author": "Bruce Haring",
        "title": "Two Actors Dead, Six Injured In Auto Accident Involving Crew From Netflix Series ‘The Chosen One’ - Deadline",
        "description": "Crew members were riding in a van when it crashed and flipped in an accident near filming of the Netflix series The Chosen One. The accident left two actors dead and six other crew members injured, officials said. The victims were not identified. The accident…",
        "url": "https://deadline.com/2022/06/two-actors-dead-six-injured-auto-accident-involving-crew-from-netflixs-the-chosen-one-1235048203/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2022/06/Cyberpunk-Edgerunners-Netflix-e1655064864668.jpg?w=615",
        "publishedAt": "2022-06-18T15:43:00Z",
        "content": "Crew members were riding in a van when it crashed and flipped in an accident near filming of the Netflix series The Chosen One.\r\nThe accident left two actors dead and six other crew members injured, … [+536 chars]"
      }, {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Erin Griffith, David Yaffe-Bellany",
        "title": "Bitcoin Plummets Below $20,000 for First Time Since Late 2020 - The New York Times",
        "description": "Its fall was accelerated in recent weeks by the collapse of two major cryptocurrency projects while sowing doubts about the stability of the overall cryptocurrency market.",
        "url": "https://www.nytimes.com/2022/06/18/technology/bitcoin-20000.html",
        "urlToImage": "https://static01.nyt.com/images/2022/06/16/business/00bitcoin20k/00bitcoin20k-facebookJumbo.jpg",
        "publishedAt": "2022-06-18T14:39:26Z",
        "content": "Square, another payments company, bought $50 million of Bitcoin and changed its name to Block, in part to signify its work with blockchain technology. Tesla bought $1.5 billion of it. The venture cap… [+1986 chars]"
      }, {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "Wyatte Grantham-Philips and Zach Wichter, USA TODAY",
        "title": "Why are flights being canceled on Saturday? Weather and demand factors - USA TODAY",
        "description": "Flight delays and cancellations continued to stall U.S. air travelers Saturday morning, with almost 690 flights canceled and over 2,030 delayed.",
        "url": "https://www.usatoday.com/story/travel/airline-news/2022/06/18/canceled-flights-delayed-saturday/7668549001/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2022/06/17/USAT/50ce4d9e-4160-4c0e-81fe-9070583258f7-AP22084810816211.jpg?auto=webp&crop=5027,2828,x0,y255&format=pjpg&width=1200",
        "publishedAt": "2022-06-18T14:24:21Z",
        "content": "For a third day in a row, travelers across the country are facing high numbers of flight delays and cancellations.\r\nAs of noon ET on Saturday, more than 2,030 U.S. flights were delayed and almost 690… [+2864 chars]"
      }, {
        "source": {
          "id": "fox-news",
          "name": "Fox News"
        },
        "author": "Joe Morgan",
        "title": "US Open 2022: Collin Morikawa, Joel Dahmen sit atop packed leaderboard heading into weekend - Fox News",
        "description": "The third round of the U.S. Open gets underway Saturday morning in Brookline, MA, and 23 golfers are under-par for the tournament with 21 golfers within four shots of the leaders.",
        "url": "https://www.foxnews.com/sports/us-open-2022-collin-morikawa-joel-dahmen-leaderboard-weekend",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/GettyImages-1403548107.jpg",
        "publishedAt": "2022-06-18T14:15:22Z",
        "content": "The third round of the U.S. Open at The Country Club in Brookline, Massachusetts, is scheduled to tee off Saturday morning, and a tight leaderboard should lead to a fun weekend for fans of golf. \r\nCo… [+3291 chars]"
      }, {
        "source": {
          "id": null,
          "name": "The Guardian"
        },
        "author": "Edward Helmore",
        "title": "Stephen Colbert staff members arrested for trespassing on Capitol Hill - The Guardian",
        "description": "Robert Smigel, the voice behind Triumph the Insult Comic Dog, was among the employees detained by Capitol police",
        "url": "https://amp.theguardian.com/tv-and-radio/2022/jun/18/stephen-colbert-staff-members-arrested-capitol-hill-robert-smigel",
        "urlToImage": "https://i.guim.co.uk/img/media/06e78bdb3e4e8d0c280e03103e897154e622a792/0_15_5265_3159/master/5265.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3e7bc1318eb39e25e8cf150db045fd78",
        "publishedAt": "2022-06-18T14:02:00Z",
        "content": "Seven staff members from The Late Show with Stephen Colbert were arrested for allegedly trespassing in a Capitol Hill building on Thursday night, authorities have said. All seven were each charged wi… [+2594 chars]"
      }, {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Ehsan Popalzai and Irene Nasser, CNN",
        "title": "Two killed in Sikh temple attack in Afghanistan's capital Kabul - CNN",
        "description": "Gunmen launched an attack on a Sikh Gurdwara in Afghanistan's capital Kabul on Saturday, killing at least two people, Kabul police chief spokesman Khalid Zadran said.",
        "url": "https://www.cnn.com/2022/06/18/asia/afghanistan-sikh-temple-attack-intl/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220618082841-02-sikh-temple-attack-kabul-0618-super-tease.jpg",
        "publishedAt": "2022-06-18T13:49:00Z",
        "content": null
      }, {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Ivana Kottasová, Sugam Pokharel and Radina Gigova, CNN",
        "title": "Putin lambasts the West and declares the end of 'the era of the unipolar world' - CNN",
        "description": "Russian President Vladimir Putin has declared the end of \"the era of the unipolar world\" in a combative speech that lambasted Western countries at the St. Petersburg International Economic Forum on Friday.",
        "url": "https://www.cnn.com/2022/06/17/europe/russia-president-vladimir-putin-speech-spief-intl/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220617140224-01-putin-spief-061722-super-tease.jpg",
        "publishedAt": "2022-06-18T13:37:00Z",
        "content": "(CNN)Russian President Vladimir Putin has declared the end of \"the era of the unipolar world\" in a combative speech that lambasted Western countries at the St. Petersburg International Economic Forum… [+6245 chars]"
      }, {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Dan Seifert",
        "title": "Microsoft Surface Duo 2 re-review: I get it now - The Verge",
        "description": "Microsoft’s Surface Duo 2 launched in October 2021 with a laundry list of problems. But a recent price cut and a whole lot of software updates have transformed the device into something much better than it was then.",
        "url": "https://www.theverge.com/23171638/microsoft-surface-duo-2-dual-screen-revisit-updates-price",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/eJFOwgF17vr-scp4n2DxhoT4aa0=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23634604/dseifert_220616_5301_0001.jpg",
        "publishedAt": "2022-06-18T13:00:00Z",
        "content": "If you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.Its exceedingly rare that a product actually gets better months after it was released. But Microsofts… [+8796 chars]"
      }, {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": null,
        "title": "The First 13: Insider's investigation into abortion \"trigger laws\" - Business Insider",
        "description": "Insider spent months investigating the 13 \"trigger states,\" identifying the politicians who pushed the abortion bans and the corporations that bankrolled them.",
        "url": "https://www.businessinsider.com/trigger-laws-abortion-dobbins-jackson-supreme-court-first-13-2022-6",
        "urlToImage": "https://i.insider.com/62aa39131c77440019598aac?width=1200&format=jpeg",
        "publishedAt": "2022-06-18T12:44:40Z",
        "content": "In a matter of days, the Supreme Court is expected to strike down Roe v. Wade, shattering an established constitutional right and the lives of millions of Americans.\r\nLegislatures in numerous states … [+1792 chars]"
      }, {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Katie Lobosco, CNN Photographs by Austin Steele",
        "title": "Here's what it would mean to these Americans if Biden canceled student loan debt - CNN",
        "description": "About 43 million people are waiting to find out if President Joe Biden will wipe away all or part of their federal student loan debt. CNN spoke with eight former college students about what it would mean for them if Biden canceled some student loan debt.",
        "url": "https://www.cnn.com/2022/06/18/politics/borrowers-student-loan-debt-biden/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220616181908-tease-borrowers-student-loan-debt-portraits.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-06-18T12:05:00Z",
        "content": "About 43 million people are waiting to find out if President Joe Biden will wipe away all or part of their federal student loan debt. \r\nIn April, after facing months of pressure from other Democrats … [+21075 chars]"
      }, {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Story By Reuters",
        "title": "Western Europeans wilt in early summer heatwave, compounding climate change fears - CNN",
        "description": "Spain is seeing its hottest early summer temperatures, one area of France banned outdoor events, and drought stalked Italian farmers as a heatwave sent Europeans hunting for shade and fretting over climate change.",
        "url": "https://www.cnn.com/2022/06/18/europe/europe-heatwave-climate-change-concerns-intl/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220618091620-01-europe-heatwave-june-super-tease.jpeg",
        "publishedAt": "2022-06-18T10:41:00Z",
        "content": "(Reuters)Spain is seeing its hottest early summer temperatures, one area of France banned outdoor events, and drought stalked Italian farmers as a heatwave sent Europeans hunting for shade and fretti… [+3560 chars]"
      }, {
        "source": {
          "id": null,
          "name": "MacRumors"
        },
        "author": "Eric Slivka",
        "title": "Apple Shares Charging Details for New Dual USB-C Power Adapters - MacRumors",
        "description": "Following yesterday's launch of orders for the two new 35-watt dual USB-C power adapters introduced at WWDC, Apple has posted a new support...",
        "url": "https://www.macrumors.com/2022/06/18/dual-usb-c-adapters-charging-details/",
        "urlToImage": "https://images.macrumors.com/t/xPfoHcBqyIeIlFCIAkZ-4v9il-k=/1600x/article-new/2022/06/apple-dual-usb-c-adapters.jpg",
        "publishedAt": "2022-06-18T09:44:33Z",
        "content": "Following yesterday's launch of orders for the two new 35-watt dual USB-C power adapters introduced at WWDC, Apple has posted a new support document outlining how power is split when devices are conn… [+1082 chars]"
      }, {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Dennis Overbye",
        "title": "A Chinese Telescope Did Not Find an Alien Signal. The Search Continues. - The New York Times",
        "description": "China’s astronomers have been initiated into the search for extraterrestrial intelligence with the kind of false alarm that others in the field have experienced for decades.",
        "url": "https://www.nytimes.com/2022/06/18/science/china-alien-signal.html",
        "urlToImage": "https://static01.nyt.com/images/2022/06/18/science/18sci-outthere-aliens-FAST/18sci-outthere-aliens-FAST-facebookJumbo-v2.jpg",
        "publishedAt": "2022-06-18T09:00:09Z",
        "content": "SETI was for real! Dr. Horowitz added.\r\nBut what Dr. Oliver initially received was only a Golden Fleece award from Senator William Proxmire, Democrat of Wisconsin, who crusaded against what he consid… [+978 chars]"
      }, {
        "source": {
          "id": "independent",
          "name": "Independent"
        },
        "author": "Inga Parkel",
        "title": "Tyler Sanders dead: Emmy-nominated actor dies, aged 18 - The Independent",
        "description": "He was best-known for his award-nominated role in Amazon spinoff series ‘Just Add Magic: Mystery City’",
        "url": "https://www.independent.co.uk/arts-entertainment/tv/news/tyler-sanders-death-fear-the-walking-dead-b2104013.html",
        "urlToImage": "https://static.independent.co.uk/2022/06/17/20/Screen%20Shot%202022-06-17%20at%203.48.42%20PM.png?quality=75&width=1200&auto=webp",
        "publishedAt": "2022-06-18T07:12:43Z",
        "content": "Tyler Sanders, best known for his Emmy-nominated role as Leo in the Amazon spinoff series Just Add Magic: Mystery City, has died. He was 18. \r\nSanders, who also guest-starred on Foxs action series 9-… [+1052 chars]"
      }, {
        "source": {
          "id": null,
          "name": "ScienceAlert"
        },
        "author": "David Nield",
        "title": "A Mouse Study Just Revealed a New Molecular Link Between Hunger And Exercise - ScienceAlert",
        "description": "It's well established that regular exercise benefits our bodies, not least in protecting against obesity, but scientists are continuing to look more closely at why this happens on a molecular level.",
        "url": "https://www.sciencealert.com/scientists-discover-a-new-molecular-link-between-exercise-and-hunger",
        "urlToImage": "https://www.sciencealert.com/images/2022-06/processed/ManStaringIntoFridge_1024.jpg",
        "publishedAt": "2022-06-18T06:02:01Z",
        "content": "It's well established that regular exercise benefits our bodies, not least in protecting against obesity, but scientists are continuing to look more closely at why this happens on a molecular level.\r… [+2484 chars]"
      }, {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "George Glover",
        "title": "The Fed's 1994 playbook: Rate hikes and a bond market 'massacre' - Markets Insider",
        "description": "Fed chair Jerome Powell looks increasingly likely to copy Alan Greenspan's 1994 playbook - when interest rates doubled to 6% in just 16 months.",
        "url": "https://markets.businessinsider.com/news/bonds/federal-reserve-interest-rate-hikes-1994-playbook-bond-market-massacre-2022-6",
        "urlToImage": "https://i.insider.com/62ab33c11c77440019599fce?width=1200&format=jpeg",
        "publishedAt": "2022-06-18T06:00:13Z",
        "content": "The \r\nFederal Reserve implemented its largest interest rate hike in 28 years Wednesday.\r\nBill Clinton was president, Boyz II Men were top of the charts, and Pulp Fiction was still showing in movie th… [+3135 chars]"
      }, {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "Families of slain officers criticize L.A. DA Gascón - KTLA 5",
        "description": "Shelby Nelson reports for the KTLA 5 News at 10 on June 17, 2022.» Subscribe to KTLA: https://www.youtube.com/user/ktla?sub_confirmation=1KTLA has been keepi...",
        "url": "https://www.youtube.com/watch?v=lhsPeuKm1nk",
        "urlToImage": "https://i.ytimg.com/vi/lhsPeuKm1nk/hqdefault.jpg",
        "publishedAt": "2022-06-18T05:15:03Z",
        "content": null
      }, {
        "source": {
          "id": null,
          "name": "WPLG Local 10"
        },
        "author": "Joseph Ojo, Annaliese Garcia, Andrea Torres, Chris Gothner",
        "title": "2 bodies recovered from Key Biscayne boat crash; 10 others injured - WPLG Local 10",
        "description": "Authorities recovered the bodies of two people following a boat crash off the coast of Key Biscayne that left 10 others injured, according to a news release from the U.S. Coast Guard Saturday afternoon.",
        "url": "https://www.local10.com/news/local/2022/06/18/10-injured-1-missing-after-boats-crash-off-key-biscayne/",
        "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/6O33ZBMBNRALTPLZIW2PQXHDBA.jpg?_a=ATAK9d60",
        "publishedAt": "2022-06-18T05:00:04Z",
        "content": "KEY BISCAYNE, Fla. Authorities recovered the bodies of two people following a boat crash off the coast of Key Biscayne that left 10 others injured, according to a news release from the U.S. Coast Gua… [+1116 chars]"
      }, {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "New information about how Uvalde tragedy could have been stopped before lives were lost, according t - KENS 5: Your San Antonio News Source",
        "description": "The New York Times says a Uvalde City Police officer had a chance to shoot the gunman before he entered the school.",
        "url": "https://www.youtube.com/watch?v=P-K2O-is7_w",
        "urlToImage": "https://i.ytimg.com/vi/P-K2O-is7_w/hqdefault.jpg",
        "publishedAt": "2022-06-18T03:19:33Z",
        "content": null
      }, {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": null,
        "title": "Dow Jones Futures: What To Do As Bear Market Intensifies; Tesla Rival Leads 5 Key Stocks - Investor's Business Daily",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMikQFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtd2hhdC10by1kby1hcy1iZWFyLW1hcmtldC1pbnRlbnNpZmllcy10ZXNsYS1yaXZhbC1sZWFkcy01LWtleS1zdG9ja3Mv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-06-18T00:43:00Z",
        "content": null
      }, {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "The Next Prelaunch Rehearsal Before Our Artemis I Moon Mission on This Week @NASA – June 17, 2022 - NASA",
        "description": null,
        "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DM06575CEHGE",
        "urlToImage": null,
        "publishedAt": "2022-06-17T19:05:39Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
      }]

      console.log(data)
    appendNews(data, onlyimagenews);
    appendNews(data, threenewsblock);
    appendNews(data, twonewsblock2);
    appendNews(data, titlesnewsblock);
    appendNews(data, threenewsblock3);
    appendNews(data, politicsdiv);
    
}

getKAdata();



function appendNews(data, container){

    if(container.id == 'only-image-news-item'){
        var newsimage = document.createElement("img");
        newsimage.src = data[1].urlToImage;
        container.append(newsimage);
    }
    else{
        if(container.id == 'news-block-3-rows-1'){
            var arr = [];
            for(var i = 0 ; i < 3 ; i++){
                arr.push(data[i]);
                // console.log('data:', data[i])
            }
        }

        else if(container.id == 'news-block-3-rows-2'){
            var arr = [];
            for(var i = 3 ; i < 5 ; i++){
                arr.push(data[i]);
            }
        }

        else if(container.id == 'news-block-free-rows'){
            var arr = [];
            for(var i = 5 ; i < 8 ; i++){
                arr.push(data[i]);
            }
        }

        else if(container.id == 'news-block-3-rows-3'){
            var arr = [];
            for(var i = 8 ; i < 11 ; i++){
                arr.push(data[i]);
            }
        }

        else if(container.id == 'news-container-karnataka-1'){
            var arr = [];
            for(var i = 11 ; i <= 20 ; i++){
                arr.push(data[i]);
            }
        }



        // console.log(arr);
        arr.forEach(function (ele) {
            let newscard = document.createElement("div");

            let newsItemimage = document.createElement("img");
            newsItemimage.src = ele.urlToImage;
            
            let newsItemtitle = document.createElement("h4");
            newsItemtitle.innerText = ele.title;
            newsItemtitle.setAttribute("class", "cursorp");
            newsItemtitle.addEventListener("click", function(){
                redirect(ele);
            })

            newscard.append(newsItemimage,newsItemtitle);
            container.append(newscard);
        })
    }
}




function redirect(ele){
  
    // newsItemArr.push(ele);
    localStorage.setItem("newsData", JSON.stringify(ele));
    // console.log(newsItemArr);
    window.location.href = "news.html"
}