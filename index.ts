export interface User {
    username: string;
    password: string; // hashed in storage
    name: string;
    email: string;
    mobileNumber?: string; // optional
}

export interface Habit {
    id: string;
    name: 'study' | 'exercise' | 'relax' | 'sleep';
    progress: number; // percentage of completion
    logEntries: Date[]; // timestamps of logged habits
}

export interface NotificationPreferences {
    enabled: boolean;
    time: string; // HH:MM format
}

export interface WeeklySummary {
    habit: Habit;
    progress: number; // number of days completed in the week
}