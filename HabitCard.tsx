import React from 'react';

interface HabitCardProps {
    habitName: string;
    progress: number;
    onLog: () => void;
    onEdit: () => void;
}

const HabitCard: React.FC<HabitCardProps> = ({ habitName, progress, onLog, onEdit }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2">
            <h3 className="text-lg font-semibold">{habitName}</h3>
            <div className="mt-2">
                <div className="text-sm text-gray-600">Progress: {progress}/7</div>
                <div className="w-full bg-gray-200 rounded-full">
                    <div
                        className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                        style={{ width: `${(progress / 7) * 100}%` }}
                    >
                        {progress}/7
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <button onClick={onLog} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Log
                </button>
                <button onClick={onEdit} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default HabitCard;