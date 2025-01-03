const fs = require('fs');

function spacing() {
    // Step 1: Read the file
    fs.readFile("a.txt", "utf-8", function (err, data) {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }

        console.log("Original data:", data);

        // Step 2: Remove extra spaces
        const removed = data.replace(/\s+/g, ' ').trim();

        // Step 3: Write the cleaned content back to the same file
        fs.writeFile("a.txt", removed, "utf-8", function (err) {
            if (err) {
                console.error("Error writing to the file:", err);
            } else {
                console.log("After removing extra spaces:", removed);
            }
        });
    });
}

spacing();
