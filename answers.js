const answer1 = `
In JavaScript, map, forEach, filter, and find are functions that are commonly used for manipulating arrays.
<br>
<strong>map:</strong>
The map function applies a provided function to each element of an array and returns a new array with the results of calling that function on each element. The original array is not modified. The returned array will have the same length as the original array.
<br>
Example:<br>
const arr = [1, 2, 3];<br>
const arr2 = arr.map(x => x * 2);<br>
console.log(arr2); // [2, 4, 6]<br>
<strong>forEach:</strong>
The forEach function iterates over an array and executes a provided function once for each array element. The original array is not modified, and the return value of the function is ignored. forEach is typically used when we want to perform some operation on each element of an array, without creating a new array.<br>
Example:<br>
const arr = [1, 2, 3];<br>
arr.forEach(x => console.log(x * 2));<br>
// Output:<br>
// 2<br>
// 4<br>
// 6<br>
<strong>filter:</strong>
The filter function returns a new array with all elements that pass the test implemented by the provided function. The original array is not modified. The returned array may have a different length than the original array.<br>
Example:<br>
const arr = [1, 2, 3];<br>
const arr2 = arr.filter(x => x > 1);<br>
console.log(arr2); // [2, 3]<br>
<strong>find:</strong>
The find function returns the value of the first element in an array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. The original array is not modified.<br>
Example:<br>
const arr = [1, 2, 3];<br>
const found = arr.find(x => x > 1);<br>
console.log(found); // 2<br>
`;

const answer2 = `
In web development, Local Storage, Session Storage, and Cookies are all methods for storing data on the client-side. However, they differ in their storage capacity, duration, and accessibility.
<br>
<strong>Local Storage:</strong>
<br>
Local Storage is a key-value pair storage mechanism that allows us to store data on the client-side. It is designed to store data that remains stored even after the browser is closed or the computer is restarted. Local Storage has a storage capacity of 5-10 MB depending on the browser. The data stored in Local Storage is not sent to the server with every HTTP request. It is accessible to all scripts loaded from the same origin. Local Storage can be accessed using JavaScript methods such as localStorage.setItem(), localStorage.getItem(), and localStorage.removeItem().
<br>
<strong>Session Storage:</strong>
<br>
Session Storage is also a key-value pair storage mechanism that allows us to store data on the client-side. However, it is designed to store data for a single session only. Once the user closes the browser or the tab, the data is lost. Session Storage has a storage capacity of 5-10 MB depending on the browser. The data stored in Session Storage is not sent to the server with every HTTP request. It is accessible to all scripts loaded from the same origin. Session Storage can be accessed using JavaScript methods such as sessionStorage.setItem(), sessionStorage.getItem(), and sessionStorage.removeItem().
<br>
<strong>Cookies:</strong>
<br>
Cookies are small text files that are stored on the client-side by the browser. They are designed to store small amounts of data that persist even after the browser is closed or the computer is restarted. Cookies have a storage capacity of 4 KB. The data stored in cookies is sent to the server with every HTTP request. Cookies can be accessed and modified by both the client-side and the server-side scripts. Cookies can be created and manipulated using JavaScript methods such as document.cookie.
`;
const answer3 = `
In JavaScript, the event loop is a mechanism that allows asynchronous, non-blocking code to be executed efficiently. It's essentially the engine that drives the JavaScript runtime environment.
<br>
When JavaScript code is executed, it runs on a single thread. This means that the code blocks the thread and prevents other code from executing until it has finished executing. This can cause problems with long-running, blocking code, such as I/O operations or heavy computations, as it can make the application feel slow or unresponsive.
<br>
The event loop solves this problem by allowing JavaScript code to be executed asynchronously. When a piece of asynchronous code is encountered, such as a callback function or a promise, it is added to a queue called the "task queue". This queue contains all the asynchronous tasks that need to be executed.
<br>
The event loop then continuously checks the task queue to see if there are any tasks waiting to be executed. If there are, it takes the first task from the queue and executes it. This process repeats indefinitely, allowing multiple tasks to be executed in parallel, without blocking the main thread.
`;
const answer4 = `

`;
const answer5 = `

`;