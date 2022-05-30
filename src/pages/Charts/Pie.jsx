
import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Headers, Pie as PieChart } from '../../components';


const Pie = () => (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Headers category="Pie" title="Project Cost Breakdown" />

        </div>
        <div className="w-full">
            <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
        </div>
    </div>
);

export default Pie;