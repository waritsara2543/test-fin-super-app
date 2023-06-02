"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const BarChart = () => {
  const chartBarRef = useRef(null);
  const { data } = useQuery({
    queryKey: ["exchanges"],
    queryFn: () =>
      fetch("https://api.coingecko.com/api/v3/exchanges").then((res) =>
        res.json()
      ),
  });
  useEffect(() => {
    const exchangesData: Array<any> = [];
    const exchangesLabel: Array<any> = [];
    data?.slice(0, 10).forEach((exchange: any) => {
      exchangesData.push(exchange.trade_volume_24h_btc);
      exchangesLabel.push(exchange.name);
    });
    const barData = {
      series: [
        {
          data: exchangesData,
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: exchangesLabel,
      },
    };
    const bar = new ApexCharts(chartBarRef.current, barData);
    bar.render();
    return () => {
      bar.destroy();
    };
  }, [data]);

  return <div id="bar" ref={chartBarRef} className="w-full text-black"></div>;
};

export default BarChart;
