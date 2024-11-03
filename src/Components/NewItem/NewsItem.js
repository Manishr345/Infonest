import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='bg-black mt-5 ml-10 text-white w-56 h-80 rounded-xl font-serif'>
      <div className='bg-black w-full h-28 rounded-t-xl'>
        <img className='rounded-t-xl w-full h-full' src={props.urlToImage?props.urlToImage:'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/apple-device-lineup.jpg?w=1500&quality=82&strip=all&ssl=1'} alt='no image'/>
      </div>
      <div style={{fontFamily: "'Signika Negative', 'sans-serif'" }}>
        <p className='text-xl mt-2'>{props.title?props.title.slice(0, 25):''}...</p>
        <br/>
        <p>{props.description?props.description.slice(0, 45):''}...</p>
        <br/>
        <a href={props.url}><button className='bg-blue-700 w-32 rounded-md'>Read More</button></a>
      </div>
    </div>
  )
}
