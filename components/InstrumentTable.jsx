"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import {
  instrumentDataState,
  previousInstrumentDataState,
} from "../state/instrumentState";
import SkeletonLoader from "./SkeletonLoader";

const InstrumentTable = () => {
  const [data, setData] = useRecoilState(instrumentDataState); // Raw data
  const [previousData, setPreviousData] = useRecoilState(
    previousInstrumentDataState
  );
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Manage loader only for initial load
  const { t } = useTranslation();
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");

        const result = await response.json();

        // Sort the data by Symbol for consistency
        const sortedData = result.sort((a, b) =>
          a.Symbol.localeCompare(b.Symbol)
        );

        // Update previous and current data
        setPreviousData(data); // Store the previous state for comparison
        setData(sortedData);

        if (isInitialLoad) {
          // Stop showing loader after initial load
          setTimeout(() => setIsInitialLoad(false), 1000); // Optional delay for smooth UI
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 3000); // Periodic updates
    return () => clearInterval(interval); // Cleanup interval
  }, [isInitialLoad]); // Remove data from dependency to avoid constant re-fetching

  // Filter the data based on search input
  const filteredData = data.filter((item) =>
    item.Symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  const generatePagination = () => {
    let pages = [];
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first page
      pages.push(1);

      if (currentPage > 4) {
        // Add ellipsis if currentPage is beyond 4
        pages.push("...");
      }

      // Determine the range of middle pages to show
      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) {
        // Add ellipsis if currentPage is far from the last page
        pages.push("...");
      }

      // Always show the last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h1 className="text-red-500 font-light text-4xl mb-16">
          {t("instrumentTable.heading")}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* Left Section */}
        <div className="lg:w-1/3">
          <h2 className="text-red-500 font-semibold text-lg mb-2">
            {t("instrumentTable.leftSection.subtitle")}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {t("instrumentTable.leftSection.title")}
          </h1>
          <p className="text-gray-700 mb-6">
            {t("instrumentTable.leftSection.description")}
          </p>
          {/* Updated Input Field */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder={t("instrumentTable.leftSection.searchPlaceholder")}
              className="border border-gray-300 rounded-lg p-2 pl-4 pr-12 w-full placeholder-black placeholder:text-xs"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // Reset to the first page on search
              }}
            />
            <span className="absolute inset-y-0 right-12 flex items-center text-gray-400">
              |
            </span>
            <button className="absolute inset-y-0 right-4 flex items-center justify-center">
              <i className="fas fa-search"></i> {/* Replace with your icon */}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-20">
            <div>
              <p className="text-2xl">$100</p>
              <p className="text-sm">
                {t("instrumentTable.leftSection.deposit")}
              </p>
            </div>
            <div className="ml-auto text-left">
              <p className="text-2xl">100%</p>
              <p className="text-sm">
                {t("instrumentTable.leftSection.security")}
              </p>
            </div>
            <div>
              <p className="text-2xl">1:500</p>
              <p className="text-sm">
                {t("instrumentTable.leftSection.leverage")}
              </p>
            </div>
            <div className="ml-auto text-left">
              <p className="text-2xl">10+</p>
              <p className="text-sm">
                {t("instrumentTable.leftSection.fundingOptions")}
              </p>
            </div>
            <div>
              <p className="text-2xl">10000+</p>
              <p className="text-sm">
                {t("instrumentTable.leftSection.instruments")}
              </p>
            </div>
            <div className="ml-auto text-left">
              <p className="text-2xl">&lt;20ms</p>
              <p className="text-sm">
                {t("instrumentTable.leftSection.executionSpeed")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th
                  className="p-2 text-left border-b border-gray-300 font-light text-sm"
                  style={{ width: "150px" }}
                >
                  {t("instrumentTable.tableHeaders.symbol")}
                </th>
                <th
                  className="p-2 text-left border-b border-gray-300 font-light text-sm"
                  style={{ width: "150px" }}
                >
                  {t("instrumentTable.tableHeaders.bid")}
                </th>
                <th
                  className="p-2 text-left border-b border-gray-300 font-light text-sm"
                  style={{ width: "150px" }}
                >
                  {t("instrumentTable.tableHeaders.ask")}
                </th>
                <th
                  className="p-2 text-left border-b border-gray-300 font-light text-sm"
                  style={{ width: "200px" }}
                >
                  {t("instrumentTable.tableHeaders.dailyChange")}
                </th>
              </tr>
            </thead>
            <tbody>
              {isInitialLoad ? (
                <SkeletonLoader rows={rowsPerPage} columns={4} />
              ) : (
                currentRows.map((item, index) => {
                  const previousRow =
                    previousData.find((row) => row.Symbol === item.Symbol) ||
                    {};

                  return (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="p-3 font-bold">{item.Symbol}</td>{" "}
                      {/* Bold for first column */}
                      <td
                        className={`p-2 ${
                          parseFloat(item.Bid) >
                          parseFloat(previousRow.Bid || 0)
                            ? "text-red-500"
                            : parseFloat(item.Bid) <
                              parseFloat(previousRow.Bid || 0)
                            ? "text-green-500"
                            : ""
                        }`}
                      >
                        {parseFloat(item.Bid).toFixed(2)}
                      </td>
                      <td
                        className={`p-2 ${
                          parseFloat(item.Ask) >
                          parseFloat(previousRow.Ask || 0)
                            ? "text-red-500"
                            : parseFloat(item.Ask) <
                              parseFloat(previousRow.Ask || 0)
                            ? "text-green-500"
                            : ""
                        }`}
                      >
                        {parseFloat(item.Ask).toFixed(2)}
                      </td>
                      <td
                        className={`p-2 ${
                          parseFloat(item.DailyChange) > 0
                            ? "text-green-500" // Positive value
                            : parseFloat(item.DailyChange) < 0
                            ? "text-red-500" // Negative value
                            : "" // Neutral (zero or undefined)
                        }`}
                      >
                        {parseFloat(item.DailyChange).toFixed(2)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {generatePagination().map((page, index) =>
              typeof page === "number" ? (
                <button
                  key={index}
                  onClick={() => handlePagination(page)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === page
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span key={index} className="px-4 py-2 mx-1 text-gray-500">
                  {page}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentTable;
