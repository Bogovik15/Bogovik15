let array = getRandomArray(); array.forEach(item => console.log(item));
const deepClone = obj => JSON.parse(JSON.stringify(obj));
33 - 48,57,52,70,46,86,19,34,87,64,93,7,36,26,33,10,25,29,0,10,31,34,83,0,90,70,0,4,55,49,96,21,69,11,24,14,42,38,98,85,2,68,7,25,34,58,49,91,7,8,72,97,96,40,63,4,86,24,92,29,96,71,6,35,45,18,38,81,61,8,51,99,4,69,93,23,36,4,23,41,58,18,0,69,75,6,9,19,68,11,87,18
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
5 - grape
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const findLargestNumber = numbers => Math.max(...numbers);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
false + 79
const isPalindrome = str => str === str.split("").reverse().join("");
grape

const getRandomSubset = (array, size) => array.slice(0, size);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
orange - 70
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const removeDuplicates = array => Array.from(new Set(array));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
6 * banana
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
