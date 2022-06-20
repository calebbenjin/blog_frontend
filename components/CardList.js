import React from 'react'
import banner from '../public/img.png'
import { Card, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import ArticleCard from './ArticleCard'

const CardList = ({ articles }) => {
  return (
    <section className='sectionContainer'>
      <div className='cardGrid'>
        {articles.map((article) => !article.attributes.featured === true ? (
          <Link href={`/article/${article.attributes.slug}`} key={article.id}>
            <a>
              <ArticleCard article={article} />
            </a>
          </Link>
        ) : null)}
      </div>
    </section>
  )
}

export default CardList
