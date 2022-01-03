import { GetStaticProps } from "next"
import  Head  from "next/head"
import { getPrismicClient } from "../../services/prismic"
import Prismic from "@prismicio/client"
import { RichText } from "prismic-dom"
import Link from "next/link"
import styles from "./styles.module.scss"

type Post = {
  slug : string,
  title: string,
  excerpt: string,
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps){

  return(
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>

          {posts.map( post => (

            <Link href={`/posts/${post.slug}`} key={post.slug}>

                <a>
                  <time>{post.updatedAt}</time>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                </a>

            </Link>

          ))}
          
        </div>
      </main>
    </>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize:100,
    }
  )
  // formatar os dados no fron-end gera mais processamento. Sempre que a tela for renderizada os dados vindos externamente serão formatados. Ou seja, isso gera uma perda de otimização.
  // formatando os dados no getStaticProps ou getSideRendering, os dados são formatados apenas uma vez.

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  }) 


  return{
    props: {
      posts
    }
  }
}