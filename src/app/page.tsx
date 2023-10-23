
import Image from 'next/image'
import Main from '../components/main/main'
import Blog from '../components/blog/blog'
import Chose from '../components/chose/chose'
import Pic from '../components/picss/pic'
import Versatile from '../components/versatile/versatile'
import Footer from '../components/footer/footer'
export default function Home() {
  return (
  <main>
  <Main/>
  <Blog/>
  <Versatile/>
  <Chose/>
  <Pic/>
 <Footer/> 
  </main>
  )
}
