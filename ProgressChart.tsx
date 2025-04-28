import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ProgressChart = ({ habitData }: { habitData: { name: string; progress: number }[] }) => {
    const data = {
        labels: habitData.map(habit => habit.name),
        datasets: [
            {
                label: 'Weekly Progress',
                data: habitData.map(habit => habit.progress),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 7, // Assuming a weekly progress out of 7 days
            },
        },
    };

    return (
        <div className="chart-container">
            <h2 className="text-lg font-semibold mb-4">Your Weekly Habit Progress</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ProgressChart;