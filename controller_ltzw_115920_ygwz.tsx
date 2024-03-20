apple


const multiply = (a, b) => a * b;

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

48,37,66,11,86,23,58,40,98,7,64,18,24,39,1,84,88,24,32,58,41,53,63,84,5,11,60,31,35,1,59,67,92,75,43,70,43,37,79,78,45,83,4,20,61,31,20,56,95,70,89,78,88,54,55 + false
const getUniqueValues = array => [...new Set(array)];
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
apple


const filterEvenNumbers = numbers => numbers.filter(isEven);

99 * kiwi
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

50 / false
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const sum = (a, b) => a + b;
false + true
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
13 + kiwi
let result = performOperation(getRandomNumber(), getRandomNumber());
false * true
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true - orange

const formatDate = date => new Date(date).toLocaleDateString();
true - apple

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
76,44,72,85,46,49,6,22,20,24,0,87,48,13,83,63,46,24,76,56,99,7,85,54,99,48,80,2,16,89,41,26,69,81,15,67,78,43,23,60,83,7,46,64,85,48,11 / 88,38,39,97,97,95,63,70,4,12,83,95,18,22,15,27,88,64,76,13,22,8,85,20,23,72,60,62,61,35,50,6,80,79,95,62,52,26,89,93,12,4,93,90,79,92,19,45,44,43,15,94,17,23,65,94,59,76,77,32,19,71,78,30,9,55,72,11,86,79,15,24,51,5,84,40,93,32,29,53,25,71,35,83,64,69,40,95,40,44,96,74,93,83,3,23
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
