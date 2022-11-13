// import { arrayToString, getSchedule, stringToArray } from "cron-converter";

const { arrayToString, stringToArray } = require('cron-converter')

const ex = "* * * * *";
const arr = stringToArray(ex);
const str = arrayToString(arr);
const sch = getSchedule(arr);

console.log(arr)
console.log(str)
console.log(sch.next());
