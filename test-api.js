/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

http.get('http://localhost:3000/api/bookings/slots?date=2026-06-09', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log("Status:", res.statusCode);
    console.log("Body:", data);
  });
}).on('error', err => {
  console.log("Error:", err.message);
});
