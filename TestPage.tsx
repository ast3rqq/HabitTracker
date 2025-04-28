import React from 'react';
import HabitCard from '../components/HabitCard';

const TestPage: React.FC = () => {
    const handleLog = () => {
        console.log('Log button clicked');
    };

    const handleEdit = () => {
        console.log('Edit button clicked');
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="mb-8 text-3xl font-bold text-center">Habit Tracker Test Page</h1>
            <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto md:grid-cols-2">
                <HabitCard
                    habitName="Morning Exercise"
                    progress={5}
                    onLog={handleLog}
                    onEdit={handleEdit}
                />
                <HabitCard
                    habitName="Reading"
                    progress={3}
                    onLog={handleLog}
                    onEdit={handleEdit}
                />
                <HabitCard
                    habitName="Meditation"
                    progress={7}
                    onLog={handleLog}
                    onEdit={handleEdit}
                />
                <HabitCard
                    habitName="Water Intake"
                    progress={0}
                    onLog={handleLog}
                    onEdit={handleEdit}
                />
            </div>
        </div>
    );
};

export default TestPage; 