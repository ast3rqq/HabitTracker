import React from 'react';
import HabitCard from '../components/HabitCard';
import ProgressChart from '../components/ProgressChart';

const TestPage: React.FC = () => {
    const handleLog = () => {
        console.log('Log button clicked');
    };

    const handleEdit = () => {
        console.log('Edit button clicked');
    };

    const habitData = [
        { name: 'Morning Exercise', progress: 5 },
        { name: 'Reading', progress: 3 },
        { name: 'Meditation', progress: 7 },
        { name: 'Water Intake', progress: 0 }
    ];

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="mb-8 text-3xl font-bold text-center">Habit Tracker Test Page</h1>
            <div className="max-w-4xl mx-auto">
                <ProgressChart habitData={habitData} />
                <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
                    {habitData.map((habit) => (
                        <HabitCard
                            key={habit.name}
                            habitName={habit.name}
                            progress={habit.progress}
                            onLog={handleLog}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestPage; 