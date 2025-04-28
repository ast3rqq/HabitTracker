import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HabitCard from '../components/HabitCard';
import ProgressChart from '../components/ProgressChart';
import { useHabits } from '../hooks/useHabits'; // Custom hook to fetch user's habits

const Dashboard: React.FC = () => {
    const { habits, loading, error } = useHabits();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading habits.</div>;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <h1 className="text-2xl font-bold">Your Habits</h1>
                <ProgressChart habits={habits} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {habits.map(habit => (
                        <HabitCard key={habit.id} habit={habit} />
                    ))}
                </div>
                <div className="mt-4">
                    <button className="btn">Log Today's Habits</button>
                    <button className="btn">View History</button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;