import React from 'react'
import Image from 'next/image'
import banner from '../public/christopher-gower-m_HRfLhgABo-unsplash-1568x1044.jpg'
import author from '../public/justin-lestal.jpg'
import { getStrapiMedia } from '../lib/media'


const ArticleCard = ({article}) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  
  return (
    <div className='card'>
      <Image src={imageUrl} alt='cardImage' className="cardImg" width="300" height="200" />
      <div className='card_body'>
        <small className='cardCategory'>{article.attributes.category && "Crypto" }</small>
        <h4 className='card_title'>{article.attributes.title}</h4>
      </div>

      <div className='cardFooter'>
        <div className='flex'>
          <Image src={author} alt='authImage' />
          <small>Small James</small>
        </div>
        <small>12 min read</small>
      </div>
    </div>
  )
}

export default ArticleCard
