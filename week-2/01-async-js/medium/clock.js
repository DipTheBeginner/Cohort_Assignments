function displayTime() {
    setInterval(() => {
        const now = new Date();

        // 24-hour format (HH:MM:SS)
        const hours24 = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const time24 = `${hours24}:${minutes}:${seconds}`;

        // 12-hour format (HH:MM:SS AM/PM)
        let hours12 = now.getHours();
        const ampm = hours12 >= 12 ? 'PM' : 'AM';
        hours12 = hours12 % 12 || 12; // Convert 24-hour to 12-hour format
        const time12 = `${String(hours12).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

        // Output both formats
        console.log(`24-hour format: ${time24}`);
        console.log(`12-hour format: ${time12}`);
        console.log('--------------------------------');

    }, 1000); // Update every second
}

displayTime();
