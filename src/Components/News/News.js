import React, { useEffect, useState } from 'react'
import NewsItem from '../NewItem/NewsItem'

export default function News(props) {
  const [article, setArticle] = useState(
    [
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Joel Khalili",
        "title": "The World’s Biggest Bitcoin Mine Is Rattling This Texas Oil Town",
        "description": "A cash-strapped city in rural Texas will soon be home to the world’s largest bitcoin mine. Local protesters are “raising hell.”",
        "url": "https://www.wired.com/story/the-worlds-biggest-bitcoin-mine-is-rattling-this-texas-oil-town/",
        "urlToImage": "https://media.wired.com/photos/66c5ecc5724cee849e3104da/191:100/w_1280,c_limit/WIRED_BTC_EC_B-Elena-Chudoba.jpg",
        "publishedAt": "2024-09-11T10:00:00Z",
        "content": "The previous October, Sawicky organized a weeklong protest alongside environmental activist group Greenpeace and brandished various anti-bitcoin signs at anyone who entered the Riot facility. Only a … [+3641 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "Crypto Bro Charters Private SpaceX Mission to Earth’s Poles",
        "description": "Fram2 could fly as early as this year, marking SpaceX's seventh private crew of astronauts.",
        "url": "https://gizmodo.com/crypto-bro-charters-private-spacex-mission-to-earths-poles-2000486329",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg",
        "publishedAt": "2024-08-13T16:05:37Z",
        "content": "A private crew of astronauts that includes a cinematographer and an explorer, and commanded by a wealthy bitcoin entrepreneur, will be the first human spaceflight to go over Earth’s polar region.\r\nSp… [+2136 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Jeremy Gan",
        "title": "Proton Drive now has a tier for business users",
        "description": "Proton Drive from Swiss technology company Proton AG now has a Professional tier. It joins services like Proton Mail, Proton VPN, and Proton Pass to receive professional tiers, letting teams select a single individual product that they need rather than signin…",
        "url": "https://proton.me/support/proton-drive-faq",
        "urlToImage": "https://blog.digitalcook.fr/wp-content/uploads/2023/03/Proton-Drive-768x403.png",
        "publishedAt": "2024-08-27T14:30:09Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "kcloonan@insider.com (Kelly Cloonan)",
        "title": "The number of bitcoin millionaires has soared 111% in the last year as the cryptocurrency rallies",
        "description": "The number of bitcoin millionaires has soared as  the crypto rallies. There have also been six new crypto billionaires minted in the past year.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-millionaires-crypto-rally-cryptocurrency-etf-billionaires-sec-ethereum-wealth-2024-8",
        "urlToImage": "https://i.insider.com/6637d9e0ec0c696569012470?width=1000&format=jpeg&auto=webp",
        "publishedAt": "2024-08-27T18:50:37Z",
        "content": "As crypto rallies, the number of bitcoin millionaires has more than doubled in the last year.\r\nAccording to a new report from New World Wealth and Henley &amp; Partners, the number of bitcoin million… [+2414 chars]"
      }
    ]
  )
  const [page, setPage] = useState(1);
  // useEffect(() => {
  //   let Url = `https://newsapi.org/v2/top-headlines?country=us&${props.cat}&apiKey=217608497f2a4221b032660bb96995f4&page=${page}&pageSize=20`;
  //   fetch(Url).then((res) => {
  //     res.json().then((result) => {
  //       console.log(result.articles);
  //       setArticle(result.articles);
  //     })
  //   })
  // })
  const previous = () => {
    setPage(page - 1);
  }
  const next = () => {
    setPage(page + 1);
  }
  return (
    <div className='grid pl-16 sm:pl-28 grid-cols-2 lg:grid-cols-4 w-[100%]'>
      {article.map((element) => {
        return <div key={element.url}>
          <div>
            <NewsItem title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} />
          </div>
        </div>
      })}
      {/* <div className='flex space-x-[950px] ml-20 mt-20 w-[100%] text-white pb-10' style={{fontFamily: "'Signika Negative', 'sans-serif'" }}>
          <button disabled={page===1} onClick={previous} className='bg-blue-600 pl-4 pr-4'>Previous</button>
          <button disabled={(page*20)===100} onClick={next} className='bg-blue-600 pl-8 pr-8'>Next</button>
        </div> */}
    </div>
  )
}
