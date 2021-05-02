import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { domain } from '@/utils/keys'

interface Props {
  launch: {
    mission: string
    site: string
    timestamp: number
    rocket: string
  }
}

const IndexPage: NextPage<Props> = ({ launch }) => {
  const date = new Date(launch.timestamp)
  return (
    <main>
      <h1>Next SpaceX Launch: {launch.mission}</h1>
      <p>
        <b>{launch.rocket}</b> will take off from <b>{launch.site}</b> on{' '}
        <b>{date.toDateString()}</b>
      </p>
    </main>
  )
}

export default IndexPage

/*
 * More information about getServerSideProps:
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await axios.get(`${domain}/api/getSpaceX`)
  return {
    props: {
      launch: {
        mission: data.mission_name,
        site: data.launch_site.site_name_long,
        timestamp: data.launch_date_unix * 1000,
        rocket: data.rocket.rocket_name,
      },
    },
  }
}
