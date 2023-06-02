"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const AreaChart = () => {
  const chartAreaRef = useRef(null);

  const { data: Bvolume } = useQuery({
    queryKey: ["Bvolume"],
    queryFn: () =>
      fetch(
        "https://api.coingecko.com/api/v3/exchanges/binance/volume_chart?days=30"
      ).then((res) => res.json()),
  });
  const { data: Kvolume } = useQuery({
    queryKey: ["Kvolume"],
    queryFn: () =>
      fetch(
        "https://api.coingecko.com/api/v3/exchanges/gdax/volume_chart?days=30"
      ).then((res) => res.json()),
  });

  useEffect(() => {
    const volumeDate: Array<any> = [];
    const volumeAmount: Array<any> = [];
    const volumeDate2: Array<any> = [];
    const volumeAmount2: Array<any> = [];

    Bvolume?.map((item: any) => {
      volumeDate.push(item[0]);
      volumeAmount.push(item[1]);
    });
    Kvolume?.map((item: any) => {
      volumeDate2.push(item[0]);
      volumeAmount2.push(item[1]);
    });

    const areaData = {
      series: [
        {
          name: "Binance",
          data: volumeAmount,
        },
        {
          name: "Coinbase Exchange",
          data: volumeAmount2,
        },
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      title: {
        text: "Volume Movements",
        align: "left",
      },
      subtitle: {
        text: "Volume Movements",
        align: "left",
      },
      labels: volumeDate,
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    };

    const area = new ApexCharts(chartAreaRef.current, areaData);
    area.render();

    return () => {
      area.destroy();
    };
  }, [Bvolume, Kvolume]);
  return <div id="bar" ref={chartAreaRef} className="w-full text-black"></div>;
};

export default AreaChart;
