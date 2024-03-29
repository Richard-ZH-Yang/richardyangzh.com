import Head from 'next/head'
import Main from '../components/Main'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import GoTopButton from '../components/GoTopButton'
import Testimonials from '../components/Testimonials'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Zhonghao (Richard) Yang</title>
        <meta name="description" content="I'm a software development engineer and fourth year student at UBC majoring in Computer Science with a minor in Data Science." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <Testimonials />
    <Experience />
    <Education />
    <Projects />
    <Skills />
    <GoTopButton />
    </div>
  )
}
