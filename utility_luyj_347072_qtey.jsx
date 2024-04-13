const sum = (a, b) => a + b;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
console.log(getRandomString());
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
let array = getRandomArray(); array.forEach(item => console.log(item));

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const greet = name => `Hello, ${name}!`;
false / true
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const fetchData = async url => { const response = await fetch(url); return response.json(); }
grape

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

true * 51,67,64,64,56,32,8,25,48,22,6,26,16,88,28,46,98,39,61,50,19,66,46,34,28,70,68,24,50,17,75,34,99,19,55,41,59,75,23,61,7,2,39,84,32,73,38,71,96,74,71,86,28,59,74,52,33,68,97,16,57,43,22,76,36,79,18,99,1,61,71,26,61,41,60,60,63,32,83,9,48,85,85,70,67,46,91,28,23,54,44,29,54,45,50,58,8
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
