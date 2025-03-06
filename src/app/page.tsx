import Banner from "@/components/Banner/Banner";
import FlowSection from "@/components/FlowSection/FlowSection";
import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import { savedFlows, todayFlow, userFlows } from "@/mocks/flows-mock";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Search />
      <Banner />

      <div className="space-y-8 py-8">
        <FlowSection title="Para Hoje" flows={[todayFlow]} />
        <FlowSection title="Seus Flows" flows={userFlows} />
        <FlowSection title="Flows Salvos" flows={savedFlows} />
      </div>
    </main>
  );
};

export default Home;
