import React, { useEffect, useState } from "react";
import styles from "./BirthdayNotification.module.css";

// List of birthdays including a test for today's date
const birthdays = [
    { date: "01-26", name: "Dimitry Sigalovich" },
    { date: "02-11", name: "Shira Feigin" },
    { date: "04-23", name: "Ron Zorea" },
    { date: "04-26", name: "Ofek Smadja" },
    { date: "05-25", name: "Noam Gruber" },
    { date: "06-11", name: "Shay Perpinial" },
    { date: "06-16", name: "Rachel Cohen" },
    { date: "08-07", name: "Adi Dangor" },
    { date: "09-03", name: "Liran Nagar" },
    { date: "09-13", name: "Ori Zeiri" },
    { date: "11-22", name: "Sander Zeemann-Radai" },
    { date: "05-01", name: "Tamar Shelly" },
    { date: "12-31", name: "Shay Avraham" },

];

const BirthdayNotification = () => {
    const [birthdayToday, setBirthdayToday] = useState<string | null>(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const today = new Date().toISOString().slice(5, 10); // Format: MM-DD
        console.log(`Today's date: ${today}`); // Debugging line
        const birthday = birthdays.find(b => b.date === today);

        if (birthday) {
            console.log(`Found birthday: ${birthday.name}`); // Debugging line
            setBirthdayToday(`🎉 Today is ${birthday.name}'s birthday! 🎉`);
        } else {
            console.log('No birthday today'); // Debugging line
        }
    }, []);

    if (!birthdayToday || !visible) return null;

    return (
        <div className={styles.birthdayNotification}>
            {birthdayToday}
            <button className={styles.closeButton} onClick={() => setVisible(false)}>✖</button>
        </div>
    );
};

export default BirthdayNotification;
