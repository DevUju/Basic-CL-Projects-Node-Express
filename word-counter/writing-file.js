const fs = require("fs");

const writeStream = fs.createWriteStream("profile.txt", { flags: "w" });

writeStream.write("My name is Agnes.\n");
writeStream.write("I am a backend developer.\n");
writeStream.write("I have built basic and intermediate projects using Node and Python.\n");
writeStream.write("I hope to create a proper portfolio.\n");
writeStream.write("So that I can secure a mid-level role in backend development.");

writeStream.end();

writeStream.on("finish", () => {
    console.log("The profile text has been created successfully.")
})