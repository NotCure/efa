import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayerChart } from "./PlayerChart";
import PlayerTransferTable from "./PlayerTransferTable";
import { PlayerChartR } from "./PlayerChartR";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TabsSection: React.FC = () => {
  // State to track the selected chart type
  const [selectedChart, setSelectedChart] = useState("bar");

  return (
    <Tabs defaultValue="Players">
      <div className="flex items-center justify-center sm:justify-center xl:justify-start w-full text-center sm:text-left">
        {/* Heading and Line */}
        <div className="flex items-center md:flex-row flex-col space-y-4">
          <h1 className="Grotesk text-white text-6xl font-semibold">Faded</h1>
          <hr className="2xl:w-96 lg:w-72 md:w-24 w-16 border-t-4 border-dotted border-[#262626] mx-4 rounded-3xl" />
          <TabsList className="flex justify-center sm:justify-start">
            <TabsTrigger value="Players">Overview</TabsTrigger>
            <TabsTrigger value="Stats">Stats</TabsTrigger>
          </TabsList>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="mt-4 w-full">
        <TabsContent value="Players" className="w-full">
          <h1 className="text-2xl font-bold text-center md:text-left bg-gradient-to-r from-[#8b53cc] to-[#da7f59] bg-clip-text text-transparent">
            Personal Details
          </h1>
          <PlayerTransferTable />
        </TabsContent>

        <TabsContent value="Stats" className="w-full">
          <div className="flex flex-row items-center">
            <h1 className="text-2xl font-bold text-center md:text-left bg-gradient-to-r from-[#8b53cc] to-[#da7f59] bg-clip-text text-transparent">
              Stats Breakdown{" "}
            </h1>
            <hr className="w-10 border-t-4 border  mx-4 rounded-3xl" />
            <Select
              onValueChange={(value) => setSelectedChart(value)} // Update state based on selection
              defaultValue="bar"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Chart" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="radar">Radar Chart</SelectItem>
                <SelectItem value="bar">Bar Chart</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-2 rounded-xl">
            {selectedChart === "bar" ? <PlayerChart /> : <PlayerChartR />}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default TabsSection;