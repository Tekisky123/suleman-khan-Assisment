import React from 'react';
import { FaBullseye, FaUtensils, FaBars } from 'react-icons/fa'; // Import icons

const ChartTwo: React.FC = () => {
  return (
    <div className="col-span-12 rounded-lg border p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="space-y-4">
        {/* Goals Section */}
        <div className="flex items-center space-x-3 p-6 border border-gray-200 dark:border-gray-700 rounded-md">
          <FaBullseye className="text-xl text-blue-500" />
          <h5 className="text-lg font-semibold text-black dark:text-white">Goals</h5>
        </div>
        
        {/* Popular Dishes Section */}
        <div className="flex items-center space-x-3 p-6 border border-gray-200 dark:border-gray-700 rounded-md">
          <FaUtensils className="text-xl text-green-500" />
          <h5 className="text-lg font-semibold text-black dark:text-white">Popular Dishes</h5>
        </div>

        {/* Menus Section */}
        <div className="flex items-center space-x-3 p-6 border border-gray-200 dark:border-gray-700 rounded-md">
          <FaBars className="text-xl text-purple-500" />
          <h5 className="text-lg font-semibold text-black dark:text-white">Menus</h5>
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
