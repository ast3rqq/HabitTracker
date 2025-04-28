import { useEffect } from 'react';

const useNotifications = (notificationTime: string, message: string) => {
    useEffect(() => {
        const scheduleNotification = () => {
            const notificationTimeDate = new Date();
            const [hours, minutes] = notificationTime.split(':').map(Number);
            notificationTimeDate.setHours(hours, minutes, 0, 0);

            if (notificationTimeDate.getTime() < Date.now()) {
                notificationTimeDate.setDate(notificationTimeDate.getDate() + 1);
            }

            const timeout = notificationTimeDate.getTime() - Date.now();

            const notificationId = setTimeout(() => {
                if (Notification.permission === 'granted') {
                    new Notification('Habit Tracker Reminder', {
                        body: message,
                    });
                }
            }, timeout);

            return () => clearTimeout(notificationId);
        };

        if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    scheduleNotification();
                }
            });
        }
    }, [notificationTime, message]);
};

export default useNotifications;