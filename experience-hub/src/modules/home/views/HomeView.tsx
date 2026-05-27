"use client";

import { useState } from "react";
import { Sidebar } from "../components/navbar";
import { XStack, YStack } from "@/shared/components/Stack";
import { SearchBar } from "../components/SearchBar";
import { Tabs } from "../components/Tabs";
import { EventGrid } from "../components/EventGrid";
import { Pagination } from "../components/Pagination";
import { HeroBanner } from "../components/HeroBanner";
import type { EventCardType } from "../components/EventCard";
import bannerImage from "@/assets/banner/bannerHome.svg";

const TABS = ["All", "Bookmarked", "Registered", "History"];
const ITEMS_PER_PAGE = 10;

// Mock events data
const MOCK_EVENTS: EventCardType[] = Array.from({ length: 50 }).map(
  (_, index) => ({
    id: index + 1,
    title:
      index % 2 === 0
        ? "UX Research for Digital Products"
        : "Introduction to Web Development",
    university: "Chulalongkorn University",
    date: "Nov 3, 2025",
    time: "9:30 AM - 5:00 PM",
    location: "Bangkok, Thailand",
    status: index % 2 === 0 ? "✓ Free Registration" : "⭐ 50 seats",
    statusColor: index % 2 === 0 ? "emerald" : "blue",
    isSponsored: index % 3 === 0,
  })
);

export default function HomeView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter events based on search term
  const filteredEvents = MOCK_EVENTS.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate events
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedEvents = filteredEvents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setCurrentPage(1); // Reset to first page on tab change
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <XStack className="min-h-screen w-full bg-[#DFECFA] p-4">
      {/* SIDEBAR — hidden on mobile/tablet */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* HAMBURGER — fixed top-left on mobile/tablet */}
      <button
        className="fixed top-4 left-4 z-40 lg:hidden p-2 rounded-xl bg-white border border-gray-200 shadow-sm"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <span className="flex flex-col gap-1">
          <span className="block w-5 h-0.5 bg-gray-600" />
          <span className="block w-5 h-0.5 bg-gray-600" />
          <span className="block w-5 h-0.5 bg-gray-600" />
        </span>
      </button>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* White fade backdrop — non-interactive */}
          <div className="absolute inset-0 bg-white/60 pointer-events-none" />
          {/* Drawer panel */}
          <div className="absolute left-4 top-4 bottom-4 z-10">
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute -right-3 -top-3 z-20 h-7 w-7 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 text-xs hover:text-gray-800"
            >
              ✕
            </button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <YStack className="flex-1 pt-14 lg:pt-0 p-4 md:p-8 lg:p-12 gap-6">
        {/* HERO BANNER */}
        <HeroBanner image={bannerImage} />

        {/* SEARCH & FILTERS */}
        <YStack className="gap-4">
          <SearchBar
            placeholder="Search Event"
            onSearch={handleSearch}
            onFilter={() => console.log("Filter clicked")}
          />

          {/* TABS */}
          <Tabs tabs={TABS} activeTab={activeTab} onChange={handleTabChange} />
        </YStack>

        {/* EVENT GRID */}
        {paginatedEvents.length > 0 ? (
          <>
            <EventGrid
              events={paginatedEvents}
              onEventClick={(event) => console.log("Event clicked:", event)}
            />

            {/* PAGINATION */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No events found</p>
          </div>
        )}
      </YStack>
    </XStack>
  );
}
