const d = new Date("2026-06-15T04:30:00.000Z");
console.log(d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }));

const d2 = new Date("2026-06-15T15:00:00.000Z");
console.log(d2.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }));

console.log(new Date().getTimezoneOffset());
