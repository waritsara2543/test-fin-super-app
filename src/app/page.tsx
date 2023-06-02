import AreaChart from "./(dashboard)/(components)/areaChart";
import BarChart from "./(dashboard)/(components)/barChart";
import MyChartComponent from "./(dashboard)/(components)/chart";

export default function Home() {
  return (
    <main className="flex min-h-screen p-10 bg-white">
      <div className="grid grid-cols-2 grid-rows-2 w-full">
        <BarChart />
        <AreaChart />
        <MyChartComponent />
      </div>
    </main>
  );
}
