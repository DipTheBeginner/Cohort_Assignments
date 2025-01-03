const fs = require('fs');

function writeToFile() {
    const content = "This is the new content to be written to the file.";

    fs.writeFile("output.txt", content, "utf-8", function (err) {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("File successfully written!");
        }
    });

    // Add an expensive operation here
    let i = 0;
    for (i = 0; i < 1000000000; i++) {
        // Simulating a costly operation
    }
    console.log("Loop finished with i =", i);
}

writeToFile();
