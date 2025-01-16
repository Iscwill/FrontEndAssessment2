import Banner from "@components/Banner";
import PopularIntruments from "@components/PopularIntruments";
import BrandIntroduce from "@components/BrandIntroduce";
import InvestmentDecision from "@components/InvestmentDecision";
import Steps from "@components/Steps";
import Footer from "@components/Footer";
import InstrumentTable from "@components/InstrumentTable";

const Home = () => {
  return (
    <section className="flex flex-col items-center">
      {/* Banner */}
      <div className="my-[20px] w-full">
        <Banner />
      </div>

      {/* Main Content */}
      <div className="container mx-auto w-full my-[20px] px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1200px] 2xl:max-w-[1260px]">
        <PopularIntruments />
      </div>

      <div className="relative container w-full px-[15px] my-[20px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1100px] 2xl:max-w-[1160px]">
        <BrandIntroduce />
      </div>

      <div className="container mx-auto w-full px-[15px] my-[20px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1200px] 2xl:max-w-[1260px]">
        <InstrumentTable />
      </div>

      <InvestmentDecision />

      {/* Steps and Footer */}

      <div className="container w-full px-[15px] my-[20px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1200px]  2xl:max-w-[1260px]">
        <Steps />
      </div>

      <div className="container w-full px-[15px] md:mt-[100px] 2xl:mt-[10px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1200px] 2xl:max-w-[1260px]">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
