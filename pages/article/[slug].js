import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer'
import NavHeader from '../../components/NavHeader'
import banner from '../../public/Candidate-selection-1568x1045.webp'
import author from '../../public/justin-lestal.jpg'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'

const ViewArticle = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className='singlePageHero'>
        <div className='content'>
          <div className='titleContainer'>
            <small className='category'>#Crypto</small>
            <h1 className='singleHeroTitle'>{article.attributes.title}</h1>
            <p className='date'>
              <small>
                Published: <b>May 25, 2022</b>
              </small>{' '}
              <small>
                Last updated: <b>May 26, 2022</b>
              </small>
            </p>
          </div>
          <div className='image-container'>
            <img
              src={imageUrl}
              alt='bannerImage'
              className='image'
            />
          </div>
          <div className='authorContainer'>
            <div className='flex'>
              <Image src={author} alt='authImage' />
              <small>Small James</small>
            </div>
            <small>12 min read</small>
          </div>
        </div>
      </div>
      <section className='contentContainer'>
        <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: ['image', 'category', 'author.picture'],
  })
  const categoriesRes = await fetchAPI('/categories')

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default ViewArticle
