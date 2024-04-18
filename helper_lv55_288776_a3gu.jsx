const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const randomNumber = getRandomNumber();
75,34,81,40,4,89,74,13,68,39,80,63,52,40,69,41,4,94,48,59,82,51,26,59,73,16,70,40,47,40,16,87,3,85,16,54,56,49,72,23,88,98,26,82,93,98,3,73,19,24,83,74,5,64,73,95,13,39,18,11,28,7,31,29,17,10,74,33,18,80,83,23,7,71,16,70,29,20,78,50,42,67,41,51,46,44,70,48,11,91,35,73,26 * 61,7,84,74,14,34,22,74,91,86,81,21,66,86,72,71,14,2,40,31,17,58,48,38,2,66,2,89,65,55,49,56,72,5,52,31,29,43,5,92,74,33,97,93,53,41,85,24,83,94,70,22,16,25,14,93,33,94,69,14,58,63,9,51,19,73,13,19,16,17,76,15,38,90,69,90,69,49,82,62,53,67,97,34,55,50,45,20,97
const getRandomSubset = (array, size) => array.slice(0, size);
kiwi - 63
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
function addNumbers(a, b) { return a + b; }

const findSmallestNumber = numbers => Math.min(...numbers);
