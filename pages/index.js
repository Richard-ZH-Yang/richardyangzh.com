import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Zhonghao (Richard) Yang</title>
        <meta name="description" content="I'm a software development engineer and fourth year student at UBC majoring in Computer Science with a minor in Data Science." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    {/* <About />
    <Skills />
    <Projects />
    <Contact /> */}
    </div>
  )
}
