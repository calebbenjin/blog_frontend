import React from 'react'
import Image from 'next/image'
import banner from '../public/christopher-gower-m_HRfLhgABo-unsplash-1568x1044.jpg'
import author from '../public/justin-lestal.jpg'
import { getStrapiMedia } from '../lib/media'

const ArticleCard = ({ article }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  return (
    <div className='card'>
      <div className='cardImageContainer'>
        <img
          src={imageUrl}
          alt='cardImage'
          className='cardImg'
        />
      </div>
      <div className='card_body'>
        <small className='cardCategory'>
          {article.attributes.category && 'Crypto'}
        </small>
        <h4 className='card_title'>{article.attributes.title}</h4>
      </div>

      <div className='cardFooter'>
        <div className='flex'>
          {/* <Image src={author} alt='authImage' /> */}
          <small>Small James</small>
        </div>
        <small>16 min read</small>
      </div>
    </div>
  )
}

export default ArticleCard
