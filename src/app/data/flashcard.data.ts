export interface FlashcardData {
  question: string;
  answer: string;
}

export const FLASHCARDS: FlashcardData[] = [
  { question: 'What is the difference between var, let, and const?', answer: 'var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.' },
  { question: 'What is a closure?', answer: 'A closure is a function that retains access to its outer scope even after the outer function has returned.' },
  { question: 'What is the event loop?', answer: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser/Node APIs and processing callbacks from a queue.' },
  { question: 'What is the difference between == and ===?', answer: '== performs type coercion before comparison, while === checks both value and type without coercion.' },
  { question: 'What is a Promise?', answer: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation, with .then(), .catch(), and .finally() handlers.' },
  { question: 'What is hoisting in JavaScript?', answer: 'Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before code execution.' },
  { question: 'What is the difference between null and undefined?', answer: 'undefined means a variable has been declared but not assigned a value, while null is an assignment value that represents no value.' },
  { question: 'What is the difference between synchronous and asynchronous code?', answer: 'Synchronous code executes line by line, blocking further execution until the current task finishes. Asynchronous code allows tasks to run in the background, enabling non-blocking execution.' },
  { question: 'What is the difference between call, apply, and bind?', answer: 'call and apply invoke a function with a specified this value; call takes arguments individually, apply takes them as an array. bind returns a new function with this bound to the provided value.' },
  { question: 'What is the difference between stack and heap memory?', answer: 'Stack memory stores primitive values and function calls, while heap memory stores objects and reference types.' },
  { question: 'What is the difference between localStorage and sessionStorage?', answer: 'Both store key-value pairs in the browser. localStorage persists data even after the browser is closed, while sessionStorage clears data when the session ends.' },
  { question: 'What is the difference between synchronous and asynchronous iteration?', answer: 'Synchronous iteration uses constructs like for...of to loop over data immediately available, while asynchronous iteration (for await...of) handles data that arrives over time, such as streams or async generators.' },
];
