import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='bg-black mt-5 ml-5 text-white w-56 h-80 rounded-lg font-serif'>
      <div className='bg-pink-500 w-full h-28 rounded-t-lg'>
        <img className='rounded-t-lg w-full h-full' src={props.urlToImage} alt='no image'/>
      </div>
      <div>
        <p className='text-xl mt-2'>{props.title.slice(0, 25)}...</p>
        <br/>
        <p>{props.description.slice(0, 45)}...</p>
        <br/>
        <a href={props.url}><button className='bg-blue-700 w-32 rounded-md'>Read More</button></a>
      </div>
    </div>
  )
}
