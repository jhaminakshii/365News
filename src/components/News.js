import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spiner from './Spiner';


export default class News extends Component {
    //  articles = [
    //   {
    //     source: { id: null, name: "CNBC" },
    //     author: "Amelia Lucas",
    //     title:
    //       "McDonald's to raise royalty fees for new franchised restaurants for first time in nearly 30 years - CNBC",
    //     description:
    //       "McDonald's franchise royalty fees for U.S. restaurants will rise from 4% to 5% for operators opening new locations.",
    //     url: "https://www.cnbc.com/2023/09/22/mcdonalds-to-raise-royalty-fees-for-new-franchised-restaurants.html",
    //     urlToImage:
    //       "https://image.cnbcfm.com/api/v1/image/107304515-1695306160499-gettyimages-1232990724-PWeaver-McDonalds-210519-01.jpeg?v=1695378601&w=1920&h=1080",
    //     publishedAt: "2023-09-22T10:30:01Z",
    //     content:
    //       "McDonald's franchisees who add new restaurants will soon have to pay higher royalty fees.\r\nThe fast-food giant is raising those fees from 4% to 5%, starting Jan. 1. It's the first time in nearly thre… [+2553 chars]",
    //   },
    //   {
    //     source: { id: null, name: "DW (English)" },
    //     author: "Priyanka Shankar, Jessie  Wingard",
    //     title:
    //       "Why is Poland no longer sending arms to Ukraine? - DW (English)",
    //     description:
    //       "Poland, among Ukraine's staunchest allies, says it will stop sending weapons to Ukraine to aid its war with Russia. The spat comes amid a diplomatic row over grain exports.",
    //     url: "https://www.dw.com/en/why-is-poland-no-longer-sending-arms-to-ukraine/a-66889180",
    //     urlToImage: "https://static.dw.com/image/65611306_6.jpg",
    //     publishedAt: "2023-09-22T09:39:04Z",
    //     content:
    //       "A day after Polish Prime Minister Mateusz Morawiecki announced that Warsaw would no longer be transferring weapons to Ukraine, and that they would instead be focusing on rebuilding their own weapon s… [+8823 chars]",
    //   },
    //   {
    //     source: { id: null, name: "WABC-TV" },
    //     author: null,
    //     title:
    //       "Farmingdale bus crash: NTSB to investigate deadly crash carrying Farmingdale High School students in Wawayanda, New York - WABC-TV",
    //     description:
    //       "An investigation is underway into whether a blown tire faulty front tire may have caused the charter bus to careen off a New York highway and tumble down an embankment Thursday.",
    //     url: "https://abc7ny.com/bus-crash-orange-county-wawayanda-i84/13813387/",
    //     urlToImage:
    //       "https://cdn.abcotvs.com/dip/images/13813426_092223-wabc-bus-crash-img.jpg?w=1600",
    //     publishedAt: "2023-09-22T09:11:15Z",
    //     content:
    //       "WAWAYANDA, Orange County (WABC) -- Investigators are looking into whether a blown front tire may have caused a charter bus to careen off a New York highway and tumble down an embankment Thursday, kil… [+3976 chars]",
    //   },
    //   {
    //     source: { id: "usa-today", name: "USA Today" },
    //     author: "Kim Hjelmgaard",
    //     title:
    //       "Canada says India helped assassinate a Sikh activist: Who was Hardeep Singh Nijjar? Rift between the countries widens - USA TODAY",
    //     description:
    //       "An argument has erupted between Canada and India over the killing of Hardeep Singh Nijjar, a Sikh separatist who was living in Vancouver.",
    //     url: "https://www.usatoday.com/story/news/world/2023/09/21/hardeep-singh-nijjar-who-is-sikh-activist-canada-says-india-killed/70907343007/",
    //     urlToImage:
    //       "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/19/USAT/70897431007-ap-canada-india-sikh-slain.jpg?crop=1023,578,x0,y52&width=1023&height=578&format=pjpg&auto=webp",
    //     publishedAt: "2023-09-22T08:30:46Z",
    //     content:
    //       "He was known as a prominent Sikh community leader and human rights activist in the Canadian province of British Columbia. He was also wanted in India, where the government accused him of mastermindin… [+7292 chars]",
    //   },
    //   {
    //     source: { id: null, name: "SciTechDaily" },
    //     author: null,
    //     title:
    //       "Settlement and Innovation 476,000 Years Ago: Archaeologists Discover World's Oldest Wooden Structure - SciTechDaily",
    //     description:
    //       "Research from the University of Liverpool and Aberystwyth University reveals humans were constructing wooden structures 476,000 years ago at Kalambo Falls, Zambia. This discovery, dated using advanced techniques, highlights the early human capability to settl…",
    //     url: "https://scitechdaily.com/settlement-and-innovation-476000-years-ago-archaeologists-discover-worlds-oldest-wooden-structure/",
    //     urlToImage:
    //       "https://scitechdaily.com/images/Uncovering-Wooden-Structure.jpg",
    //     publishedAt: "2023-09-22T08:27:09Z",
    //     content:
    //       "ByUniversity of LiverpoolSeptember 22, 2023\r\nProfessor Larry Barham (pictured, right) uncovering the wooden structure on the banks of the river with a fine spray. Credit: Professor Geoff Duller, Aber… [+5867 chars]",
    //   },
    //   {
    //     source: { id: "cnn", name: "CNN" },
    //     author: "Mark Morales",
    //     title:
    //       "NYPD finds trap door and drugs hidden in floor at Bronx day care where 1-year-old died of suspected fentanyl overdose - CNN",
    //     description:
    //       "Investigators discovered a trap floor containing drugs, including fentanyl, inside a Bronx day care center where a suspected fentanyl overdose incident killed a 1-year-old boy, New York Police Department officials said Thursday.",
    //     url: "https://www.cnn.com/2023/09/21/us/bronx-day-care-overdose-indictment/index.html",
    //     urlToImage:
    //       "https://media.cnn.com/api/v1/images/stellar/prod/230921161116-02-bronx-day-care-overdose-indictment.jpg?c=16x9&q=w_800,c_fill",
    //     publishedAt: "2023-09-22T08:26:00Z",
    //     content:
    //       "Authorities discovered a trap floor containing drugs, including fentanyl, inside a Bronx day care center where a 1-year-old boy died of a suspected fentanyl overdose last week, the New York Police De… [+3214 chars]",
    //   },
    //   {
    //     source: { id: "cnn", name: "CNN" },
    //     author:
    //       'By <a href="/profiles/tara-subramaniam">Tara Subramaniam</a>, CNN',
    //     title: "Russia's war in Ukraine: Live updates - CNN",
    //     description:
    //       "US President Joe Biden met with President Volodymyr Zelensky at the White House Thursday, just hours after a fresh round of Russian attacks on power facilities across Ukraine. Follow here for live updates.",
    //     url: "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-09-22-23/index.html",
    //     urlToImage:
    //       "https://cdn.cnn.com/cnnnext/dam/assets/230921143100-01-zelensky-washington-092123-super-tease.jpeg",
    //     publishedAt: "2023-09-22T08:12:00Z",
    //     content:
    //       'Polish President Andrzej Duda on Thursday said he is willing to talk to Ukrainian President Volodymyr Zelensky as "friends" to resolve "difficult situations" between their countries after Warsaw sign… [+2271 chars]',
    //   },
    //   {
    //     source: { id: null, name: "CNBC" },
    //     author: "Evelyn Cheng, Arjun Kharpal",
    //     title:
    //       "Apple's iPhone 15 launches in China with people flocking to stores — even as Huawei revival emerges - CNBC",
    //     description:
    //       "People flocked to an Apple store on Friday to pick up the latest iPhone, despite market worries that nationalistic fervor would dampen the U.S. company's sales in China.",
    //     url: "https://www.cnbc.com/2023/09/22/apples-iphone-15-launches-in-china-with-people-flocking-to-stores.html",
    //     urlToImage:
    //       "https://image.cnbcfm.com/api/v1/image/107304907-1695349155759-IMG_2420_1.jpg?v=1695369987&w=1920&h=1080",
    //     publishedAt: "2023-09-22T08:06:27Z",
    //     content:
    //       "Hundreds of people lined up at a flagship Apple store in Beijing to pick up the new iPhone 15 when deliveries began on Friday.\r\nBEIJING People flocked to a flagship Apple store in downtown Beijing on… [+6760 chars]",
    //   },
    //   {
    //     source: { id: "the-washington-post", name: "The Washington Post" },
    //     author: "Andrew Jeong",
    //     title:
    //       "Russia-Ukraine war news: Zelensky in Canada to visit Trudeau, give speech to Parliament - The Washington Post",
    //     description:
    //       "Canadian Prime Minister Justin Trudeau greeted Ukrainian President Volodymyr Zelensky in Ottawa, where he made a surprise appearance after meetings in Washington.",
    //     url: "https://www.washingtonpost.com/world/2023/09/22/russia-ukraine-war-news-zelensky-canada-visit/",
    //     urlToImage:
    //       "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZF6MMMD4DAPX546ABVFKSXZDQI_size-normalized.jpg&w=1440",
    //     publishedAt: "2023-09-22T07:57:30Z",
    //     content:
    //       "Ukrainian President Volodymyr Zelensky arrived in Canada in a surprise visit after his trip to the United States, according to the office of Canadian Prime Minister Justin Trudeau.\r\nZelensky had just… [+5262 chars]",
    //   },
    //   {
    //     source: { id: "bloomberg", name: "Bloomberg" },
    //     author: "Katharine Gemmell",
    //     title:
    //       "Microsoft's Activision Deal Set to Clear Final UK Hurdle - Bloomberg",
    //     description:
    //       "Microsoft Corp.’s $69 billion acquisition of Activision Blizzard Inc. looks set to clear its final regulatory hurdle after the UK competition authorities signaled they will accept the latest concessions, ending a wait of more than a year and a half to complet…",
    //     url: "https://www.bloomberg.com/news/articles/2023-09-22/microsoft-s-activision-deal-set-to-get-uk-s-cma-approval",
    //     urlToImage:
    //       "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ikpzmVdXq9nE/v0/1200x799.jpg",
    //     publishedAt: "2023-09-22T07:18:45Z",
    //     content:
    //       "Microsoft Corp.s $69 billion acquisition of Activision Blizzard Inc. looks set to clear its final regulatory hurdle after the UK competition authorities signaled they will accept the latest concessio… [+430 chars]",
    //   },
    //   {
    //     source: { id: null, name: "Nbcsportsbayarea.com" },
    //     author: "Jordan Elliott",
    //     title:
    //       "Purdy achieves another impressive milestone in 49ers' win over Giants - NBC Sports Bay Area",
    //     description:
    //       "Brock Purdy continues to etch his name in the record books during impressive start to his NFL career",
    //     url: "https://www.nbcsportsbayarea.com/nfl/san-francisco-49ers/brock-purdy-nfl-history-2/1656893/",
    //     urlToImage:
    //       "https://media.nbcsportsbayarea.com/2023/09/USATSI_21472962-e1695353433299.jpg?quality=85&strip=all&resize=1200%2C675",
    //     publishedAt: "2023-09-22T05:53:43Z",
    //     content:
    //       "Brock Purdy again added to his ever-growing legend during the 49ers' 30-12 win over the New York Giants on Thursday night at Levi's Stadium.\r\nThe victory moved Purdy to 8-0 in his career during the r… [+1478 chars]",
    //   },
    //   {
    //     source: { id: null, name: "Barron's" },
    //     author: "Nicholas Jasinski",
    //     title:
    //       "Yields Are Near Their Peak. Don't Wait to Buy Bonds. - Barron's",
    //     description:
    //       "Historically, the 10-year U.S. Treasury yield has peaked around the Federal Reserve's last hike of the cycle. That's coming soon.",
    //     url: "https://www.barrons.com/articles/yields-near-peak-buy-bonds-c59a9389",
    //     urlToImage: "https://images.barrons.com/im-627395/social",
    //     publishedAt: "2023-09-22T05:30:00Z",
    //     content: null,
    //   },
    //   {
    //     source: { id: null, name: "CBS Sports" },
    //     author: "",
    //     title:
    //       "USWNT legend Julie Ertz says goodbye, departs with a legacy of humility and fierceness - CBS Sports",
    //     description:
    //       "Ertz departs from professional soccer with win against South Africa",
    //     url: "https://www.cbssports.com/soccer/news/uswnt-legend-julie-ertz-says-goodbye-departs-with-a-legacy-of-humility-and-fierceness/",
    //     urlToImage:
    //       "https://sportshub.cbsistatic.com/i/r/2023/09/22/2242b734-0ba5-439d-be85-67b05068ed50/thumbnail/1200x675/33158181e1c46ac5d306202b58e1ac39/ertz-3.jpg",
    //     publishedAt: "2023-09-22T04:52:44Z",
    //     content:
    //       "CINCINNATI -- The U.S. national team program said farewell to one of their most prolific players on Thursday as Julie Ertz officially stepped away from the game after multiple titles and accolades. T… [+8533 chars]",
    //   },
    //   {
    //     source: { id: null, name: "Deadline" },
    //     author: "Dominic Patten",
    //     title:
    //       "WGA & Studio CEOs To Meet Again Friday; Guild Urges Members To Get Out On Picket Lines In Force - Deadline",
    //     description:
    //       "The WGA is heading back to the bargaining table with the CEOs of Netflix, Disney, Universal, and Warner Bros Discovery on Friday. “The WGA and AMPTP met for bargaining today and will meet again tom…",
    //     url: "https://deadline.com/2023/09/writers-strike-new-talks-set-studios-1235553495/",
    //     urlToImage:
    //       "https://deadline.com/wp-content/uploads/2023/09/GettyImages-1689301039.jpg?w=1024",
    //     publishedAt: "2023-09-22T04:52:00Z",
    //     content:
    //       "The WGA is heading back to the bargaining table with the CEOs of Netflix, Disney, Universal, and Warner Bros Discovery on Friday.\r\n“The WGA and AMPTP met for bargaining today and will meet again tomo… [+2198 chars]",
    //   },
    //   {
    //     source: { id: "reuters", name: "Reuters" },
    //     author: "Reuters",
    //     title:
    //       "Detroit Three automakers enter final hours to avoid wider UAW strike - Reuters",
    //     description:
    //       "The Detroit Three automakers and the union representing the companies' U.S. hourly workers on Friday entered the final hours to reach new labor agreements before the current coordinated strike expands to include more plants.",
    //     url: "https://www.reuters.com/business/autos-transportation/detroit-three-automakers-enter-final-hours-avoid-wider-uaw-strike-2023-09-22/",
    //     urlToImage:
    //       "https://www.reuters.com/resizer/j0cqPKaBQH4CDzv7LNqrT5zPJ0M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PURZ3A4RSRM5BEPDAXLAMWC7GM.jpg",
    //     publishedAt: "2023-09-22T04:34:00Z",
    //     content:
    //       "DETROIT, Sept 22 (Reuters) - The Detroit Three automakers and the union representing the companies' U.S. hourly workers on Friday entered the final hours to reach new labor agreements before the curr… [+2524 chars]",
    //   },
    //   {
    //     source: { id: "cnn", name: "CNN" },
    //     author: "Eric Cheung, Brad Lendon, Ivan Watson",
    //     title:
    //       "Exclusive: Satellite images show increased activity at nuclear test sites in Russia, China and US - CNN",
    //     description:
    //       "Russia, the United States and China have all built new facilities and dug new tunnels at their nuclear test sites in recent years, satellite images obtained exclusively by CNN show, at a time when tensions between the three major nuclear powers have risen to …",
    //     url: "https://www.cnn.com/2023/09/22/asia/nuclear-testing-china-russia-us-exclusive-intl-hnk-ml/index.html",
    //     urlToImage:
    //       "https://media.cnn.com/api/v1/images/stellar/prod/230905135919-02-novaya-zemlya-nuclear-test-site.jpg?c=16x9&q=w_800,c_fill",
    //     publishedAt: "2023-09-22T04:30:00Z",
    //     content:
    //       "Russia, the United States and China have all built new facilities and dug new tunnels at their nuclear test sites in recent years, satellite images obtained exclusively by CNN show, at a time when te… [+17901 chars]",
    //   },
    //   {
    //     source: { id: null, name: "YouTube" },
    //     author: null,
    //     title:
    //       "New York Giants vs. San Fransisco 49ers | 2023 Week 3 Game Highlights - NFL",
    //     description:
    //       "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
    //     url: "https://www.youtube.com/watch?v=Ihjw0UClLnM",
    //     urlToImage: "https://i.ytimg.com/vi/Ihjw0UClLnM/maxresdefault.jpg",
    //     publishedAt: "2023-09-22T03:34:52Z",
    //     content: null,
    //   },
    //   {
    //     source: { id: null, name: "Foxweather.com" },
    //     author: "Steven Yablonski",
    //     title:
    //       "Weather expected to deteriorate along mid-Atlantic coastline Friday ahead of arrival of storm system - Fox Weather ",
    //     description:
    //       "Tropical storm conditions are just hours away from reaching coastal North Carolina later Friday morning as a storm still gathering strength just offshore moves closer to landfall.",
    //     url: "https://www.foxweather.com/weather-news/tracking-potential-tropical-cyclone-16-coastal-storm",
    //     urlToImage:
    //       "https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2023/09/1024/512/Potential-Tropical-Cyclone-Sixteen-Story-Image-2pm-09212023.png?ve=1&tl=1",
    //     publishedAt: "2023-09-22T03:32:00Z",
    //     content:
    //       "Tropical storm conditions are just hours away from reaching coastal North Carolina later Friday morning as a storm still gathering strength just offshore moves closer to landfall.\r\nThe storm will eve… [+5373 chars]",
    //   },
    //   {
    //     source: { id: null, name: "Hindustan Times" },
    //     author: "HT Entertainment Desk",
    //     title:
    //       "Joe Jonas breaks silence after Sophie claims he's withholding kids' passports - Hindustan Times",
    //     description:
    //       "Sophie Turner sued Joe Jonas alleging that he was holding the kids' passports with him. The duo filed for divorce on September 5 after four years of marriage.",
    //     url: "https://www.hindustantimes.com/entertainment/music/joe-jonas-breaks-silence-after-sophie-turner-claims-hes-withholding-kids-passports-101695346993885.html",
    //     urlToImage:
    //       "https://www.hindustantimes.com/ht-img/img/2023/09/22/1600x900/joe_jonas_1694334168829_1695348659848.jpg",
    //     publishedAt: "2023-09-22T02:12:24Z",
    //     content:
    //       "Singer Joe Jonas has responded after his estranged wife-actor Sophie Turner filed a lawsuit against him for refusing their daughters' return to England, her native country. People.com shared a statem… [+2979 chars]",
    //   },
    //   {
    //     source: { id: "the-hill", name: "The Hill" },
    //     author: "Tara Suter",
    //     title:
    //       "CDC data shows obesity prevalence more common in a growing number of states - The Hill",
    //     description:
    //       "According to data from the Centers for Disease Control (CDC), the prevalence of obesity is rising all across the nation. The CDC data found that 22 states had a prevalence, or “proportion of adults with a body mass index (BMI) equal to or greater than 30,” of…",
    //     url: "https://thehill.com/policy/healthcare/4217623-cdc-data-shows-obesity-prevalence-more-common-in-a-growing-number-of-states/",
    //     urlToImage:
    //       "https://thehill.com/wp-content/uploads/sites/2/2023/08/GettyImages-457163942-e1692371391337.jpg?w=1280",
    //     publishedAt: "2023-09-22T01:51:00Z",
    //     content:
    //       "Skip to content\r\nAccording to data from the Centers for Disease Control (CDC), the prevalence of obesity is rising all across the nation.\r\nThe CDC data found that 22 states had a prevalence, or “prop… [+1290 chars]",
    //   },
    // ];
        constructor() {
            super();
            this.state = {
              articles: [],
              loading: true,
              page:1
            };
        }
       async componentDidMount(){
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=53313403d76f4152ab061ff17a6843f5&page=1&pageSize=${this.props.pageSize}`;
            let data =await fetch(url);
            let parsedData = await data.json();
            this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading: false})
        }
         handlePrevClick=async()=>{
            console.log("prev");
            let url =
              `https://newsapi.org/v2/top-headlines?country=in&apiKey=53313403d76f4152ab061ff17a6843f5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
              articles: parsedData.articles,
              page: this.state.page - 1,
              loading: false
            });
        }
        handleNextClick =async ()=>{
            console.log("next");
            if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

            }else{
            let url =
              `https://newsapi.org/v2/top-headlines?country=in&apiKey=53313403d76f4152ab061ff17a6843f5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
              articles: parsedData.articles,
              page:this.state.page+1,
              loading:false
            });
        }
    }
  render() {
    return (
      <div>
        <div className="container my-4">
          <h3 className="text-center">365News-Top Headlines</h3>
          
          {this.state.loading && <Spiner/>}
          <div className="row my-4">
            {!this.state.loading && this.state.articles.map((elem) => {
              return (
                <div className="col-md-4" key={elem.url}>
                  <NewsItems
                    title={elem.title ? elem.title.slice(0, 45) : ""}
                    description={elem.description ? elem.description.slice(0, 88) : ""}
                    imgUrl={!elem.urlToImage?"https://cdn.ndtv.com/common/images/ogndtv.png":elem.urlToImage}
                    newsUrl={elem.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Prev</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}> &rarr; Next</button>
          </div>
        </div>
      </div>
    );
  }
}
