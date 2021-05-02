import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import NameComponent from '@/components/NameComponent'

const IndexPage: NextPage = () => (
  <div>
    <NameComponent name="ran tayar" />
    <Link href="/NextSpaceX">
      <a>Next SpaceX</a>
    </Link>
  </div>
)
export default IndexPage
