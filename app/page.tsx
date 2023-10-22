import Banner  from "./components/Banner";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trending from  "./components/Trending";
import Latest from "./components/Latest";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Trending />
      <Latest />
      <Footer />

    </>

  )
}
