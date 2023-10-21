import Banner  from "./components/Banner.tsx";
import Courses from "./components/Courses.tsx/index.js";
import Footer from "./components/Footer.tsx/index.js";
import Header from "./components/Header.tsx/index.js";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Courses />
      <Footer />

    </>

  )
}
