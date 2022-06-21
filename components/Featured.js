import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import author from '../public/justin-lestal.jpg'
import { getStrapiMedia } from '../lib/media'

const Featured = ({ articles }) => {
  return (
    <section className='sectionContainer'>
      {articles.map((featured) =>
        featured.attributes.featured === true ? (
          <Link href={`/article/${featured.attributes.slug}`} key={featured.id}>
            <a>
              <div className='featuredCard'>
                <div className='imageContainer'>
                  <img
                    src={getStrapiMedia(featured.attributes.image)}
                    alt='cardImage'
                    className='cardImg'
                  />
                </div>
                <div className='cardContent'>
                  <div className='card_body'>
                    <small className='cardCategory'>#Crypto</small>
                    <h3 className='card_title'>{featured.attributes.title}</h3>
                  </div>

                  <div className='cardFooter'>
                    <div className='flex'>
                      {/* <Image src={author} alt='authImage' /> */}
                      <small>Small James</small>
                    </div>
                    <small>12 min read</small>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ) : null
      )}
    </section>
  )
}

export default Featured
