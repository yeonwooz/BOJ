const now = new Date().toUTCString();
const converted = new Date(now);
const yy = converted.getFullYear();
const mm = converted.getMonth() + 1;
const dd = converted.getDate();

const arr = [];
arr.push(yy);
arr.push("" + Math.floor(mm / 10) + (mm % 10));
arr.push("" + Math.floor(dd / 10) + (dd % 10));
console.log(arr.join("-"));
