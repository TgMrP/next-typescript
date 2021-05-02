import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>this is: {id} </title>
      </Head>
      <article>
        <h1>this is: {id} </h1>
      </article>
    </>
  )
}
