
import Image from 'next/image'
import Main from '../components/main/main'
import Blog from '../components/blog/blog'
import Chose from '../components/chose/chose'
import Pic from '../components/picss/pic'
import Versatile from '../components/versatile/versatile'
import Footer from '../components/footer/footer'
import Head from 'next/head'
export default function Home() {
  return (

    <>
      <Head>
        <title>Truckala - Transportation & Logistics</title>
        <meta name="description" content="Get all-in-one Platform for Transportation & Logistics.Streamline, Optimize, Excel with Truckala" />
        <link rel="canonical" href="https://www.truckala.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Get all-in-one Platform for Transportation & Logistics.Streamline, Optimize, Excel with Truckala" />
        <meta property="og:url" content="https://www.truckala.com" />
        <meta property="og:site_name" content="Get all-in-one Platform for Transportation & Logistics.Streamline, Optimize, Excel with Truckala" />
        <meta property="article:publisher" content="https://www.facebook.com/cablemovers" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="467" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@truckala" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="07 minutes" />
      </Head>
      <main>
        <Main />
        <Blog />
        <Versatile />
        <Chose />
        <Pic />
        <Footer />
      </main>
    </>

  )
}
