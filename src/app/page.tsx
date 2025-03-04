import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Search />
      <Banner />
    </main>
  );
};

export default Home;
