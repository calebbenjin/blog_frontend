import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from '../components/Hero'
import CardList from '../components/CardList'
import Featured from '../components/Featured'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

export default function Home({ articles, categories, homepage }) {

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <Hero />
      <div className={styles.container}>
        <main className={styles.main}>
          <Featured articles={articles} />
          <CardList articles={articles} />
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI('/articles', { populate: ['image', 'category'] }),
    fetchAPI('/categories', { populate: '*' }),
    fetchAPI('/homepage', {
      populate: {
        hero: '*',
        seo: { populate: '*' },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}
