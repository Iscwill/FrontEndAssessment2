import Banner from "@components/Banner";
import PopularIntruments from "@components/PopularIntruments";
import BrandIntroduce from "@components/BrandIntroduce";
import InvestmentDecision from "@components/InvestmentDecision";
import Steps from "@components/Steps";
import Footer from "@components/Footer";
import InstrumentTable from "@components/InstrumentTable";

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Banner */}
      <Banner />

      {/* Main Content */}
      <div className="mt-10 px-4 md:px-10 lg:px-[200px]">
        <PopularIntruments />
      </div>

      <div className="relative mt-10 px-4 md:px-10 lg:px-[200px]">
        <BrandIntroduce />
      </div>

      <div className="mt-10 px-4 md:px-10 lg:px-[200px]">
        <InstrumentTable />
      </div>

      <InvestmentDecision />

      {/* Steps and Footer */}
      <div className="mt-10 px-4 md:px-10 lg:px-[200px]">
        <Steps />
      </div>

      <div className="mt-10 px-4 md:px-10 lg:px-[200px]">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
