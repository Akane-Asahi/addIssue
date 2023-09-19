const fs = require('fs');

try {
    const content = fs.readFileSync('index.html', 'utf-8');
    if (content.startsWith('<!DOCTYPE html>')) {
        console.log('DOCTYPE declaration found on the first line.');
        process.exit(0); // Success
    } else {
        console.error('DOCTYPE declaration not found on the first line.');
        process.exit(1); // Failure
    }
} catch (error) {
    console.error('Error reading the file:', error);
    process.exit(1); // Failure
}
