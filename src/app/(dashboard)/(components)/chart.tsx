"use client";
import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

const MyChartComponent = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([10, 50, 80, 30, 90, 10, 10]);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, {
      series: [
        {
          name: "series-1",
          data: data,
        },
      ],
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: 7,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2019-10-19T00:00:00.000Z",
          "2019-10-19T01:30:00.000Z",
          "2019-10-19T02:30:00.000Z",
          "2019-10-19T03:30:00.000Z",
          "2019-10-19T04:30:00.000Z",
          "2019-10-19T05:30:00.000Z",
          "2019-10-19T06:30:00.000Z",
        ],
      },
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      title: {
        text: "Online Currency Trading",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666",
        },
      },
      fill: {
        type: "gradient",
      },
    });
    chart.render();

    const timer = setInterval(() => {
      const d = [];
      for (let i = 0; i < 7; i++) {
        d.push(Math.floor(Math.random() * 100));
      }
      setData(d);
      ApexCharts.exec("realtime", "updateSeries", [
        {
          data: data,
        },
      ]);
    }, 2000);
    chart.updateSeries([
      {
        data: data,
      },
    ]);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div ref={chartRef} className="text-black"></div>;
};

export default MyChartComponent;
