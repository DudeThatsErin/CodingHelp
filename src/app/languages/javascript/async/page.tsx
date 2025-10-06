import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

export default function JavaScriptAsyncPage() {
  return (
    <PageLayout
      title="Asynchronous JavaScript"
      description="Learn how to handle asynchronous operations in JavaScript using callbacks, promises, and async/await syntax for better performance and user experience."
      icon={<div className="text-4xl">⏰</div>}
      previousLink={{
        href: "/languages/javascript/fundamentals",
        label: "Previous: JavaScript Fundamentals"
      }}
      nextLink={{
        href: "/languages/javascript/frameworks",
        label: "Next: JavaScript Frameworks"
      }}
    >
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">⏰</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Asynchronous JavaScript</h1>
            <p className="text-gray-600 dark:text-gray-300">Master callbacks, promises, and async/await</p>
          </div>
        </div>
      </div>

      {/* Try This First Tutorial */}
      <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">🎯 Try This First: Async Step-by-Step</h3>
        <div className="flex flex-col gap-6 text-gray-600 dark:text-gray-300">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <h4 className="font-semibold text-white text-sm">Start with a simple delay</h4>
            </div>
            <p className="text-sm mb-3">See how JavaScript handles time delays:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`console.log("Start")
setTimeout(() => {
  console.log("This runs after 2 seconds")
}, 2000)
console.log("End")`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <h4 className="font-semibold text-white text-sm">Create a Promise</h4>
            </div>
            <p className="text-sm mb-3">Promises handle success and failure:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`const myPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5
  setTimeout(() => {
    if (success) {
      resolve("Success! 🎉")
    } else {
      reject("Failed 😞")
    }
  }, 1000)
})

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error))`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <h4 className="font-semibold text-white text-sm">Use async/await (cleaner syntax)</h4>
            </div>
            <p className="text-sm mb-3">Modern way to handle promises:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`async function testAsync() {
  try {
    console.log("Starting...")
    const result = await myPromise
    console.log("Got:", result)
  } catch (error) {
    console.log("Error:", error)
  }
}

testAsync()`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
              <h4 className="font-semibold text-white text-sm">Fetch real data from an API</h4>
            </div>
            <p className="text-sm mb-3">Get data from the internet:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await response.json()
    console.log("User name:", user.name)
    console.log("User email:", user.email)
  } catch (error) {
    console.log("Failed to fetch user:", error)
  }
}

getUser()`}</pre>
          </div>

          <div className="text-xs text-gray-400 mt-4">
            💡 Notice how async/await makes the code read like normal, step-by-step instructions!
          </div>
        </div>
      </div>

      {/* Callbacks */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Callbacks</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Understanding Callbacks</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Basic Callback Example
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(null, data); // First parameter is error, second is data
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data received:", data);
    }
});

// Callback Hell Example
function getUserData(userId, callback) {
    fetchUser(userId, (err, user) => {
        if (err) return callback(err);
        
        fetchUserPosts(user.id, (err, posts) => {
            if (err) return callback(err);
            
            fetchPostComments(posts[0].id, (err, comments) => {
                if (err) return callback(err);
                
                callback(null, { user, posts, comments });
            });
        });
    });
}

// Error-First Callback Pattern
function readFile(filename, callback) {
    // Simulate file reading
    setTimeout(() => {
        if (filename.endsWith('.txt')) {
            callback(null, "File content here");
        } else {
            callback(new Error("Invalid file type"));
        }
    }, 500);
}`}
          </pre>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">⚠️ Callback Hell Problems</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Deeply nested code that's hard to read</li>
            <li>• Difficult error handling</li>
            <li>• Hard to maintain and debug</li>
            <li>• Inversion of control issues</li>
          </ul>
        </div>
      </section>

      {/* Promises */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Promises</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Promise Basics</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Creating a Promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: \`User \${userId}\` });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

// Using Promises
fetchUserData(1)
    .then(user => {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return fetchPostComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Operation completed");
    });

// Promise.all - Wait for all promises
const promises = [
    fetchUserData(1),
    fetchUserData(2),
    fetchUserData(3)
];

Promise.all(promises)
    .then(users => {
        console.log("All users:", users);
    })
    .catch(error => {
        console.error("One or more requests failed:", error);
    });

// Promise.allSettled - Wait for all, regardless of outcome
Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(\`User \${index + 1}:\`, result.value);
            } else {
                console.error(\`User \${index + 1} failed:\`, result.reason);
            }
        });
    });

// Promise.race - First to complete wins
Promise.race([
    fetchUserData(1),
    new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Timeout")), 2000)
    )
])
.then(result => console.log("First result:", result))
.catch(error => console.error("Error or timeout:", error));`}
          </pre>
        </div>
      </section>

      {/* Async/Await */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Async/Await</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Modern Async Syntax</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Basic Async/Await
async function getUserData(userId) {
    try {
        const user = await fetchUserData(userId);
        const posts = await fetchUserPosts(user.id);
        const comments = await fetchPostComments(posts[0].id);
        
        return { user, posts, comments };
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Re-throw if needed
    }
}

// Using the async function
async function main() {
    try {
        const userData = await getUserData(1);
        console.log("Complete user data:", userData);
    } catch (error) {
        console.error("Failed to get user data:", error);
    }
}

// Parallel Execution with Async/Await
async function fetchMultipleUsers() {
    try {
        // Sequential (slower)
        const user1 = await fetchUserData(1);
        const user2 = await fetchUserData(2);
        const user3 = await fetchUserData(3);
        
        // Parallel (faster)
        const [user1, user2, user3] = await Promise.all([
            fetchUserData(1),
            fetchUserData(2),
            fetchUserData(3)
        ]);
        
        return [user1, user2, user3];
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

// Async/Await with Error Handling
async function robustApiCall() {
    const maxRetries = 3;
    let retries = 0;
    
    while (retries < maxRetries) {
        try {
            const response = await fetch('/api/data');
            
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            retries++;
            
            if (retries === maxRetries) {
                throw new Error(\`Failed after \${maxRetries} attempts: \${error.message}\`);
            }
            
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 1000 * retries));
        }
    }
}

// Async Generators
async function* fetchUsersPaginated() {
    let page = 1;
    let hasMore = true;
    
    while (hasMore) {
        const response = await fetch(\`/api/users?page=\${page}\`);
        const data = await response.json();
        
        yield data.users;
        
        hasMore = data.hasMore;
        page++;
    }
}

// Using async generator
async function processAllUsers() {
    for await (const userBatch of fetchUsersPaginated()) {
        console.log(\`Processing \${userBatch.length} users\`);
        // Process each batch
    }
}`}
          </pre>
        </div>
      </section>

      {/* Fetch API */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Fetch API</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Modern HTTP Requests</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Basic GET Request
async function fetchUsers() {
    try {
        const response = await fetch('/api/users');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// POST Request with JSON
async function createUser(userData) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': \`Bearer \${getAuthToken()}\`
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create user');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// File Upload
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData // Don't set Content-Type header for FormData
        });
        
        if (!response.ok) {
            throw new Error('Upload failed');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
}

// Request with Timeout
async function fetchWithTimeout(url, options = {}, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        
        throw error;
    }
}

// Retry Logic
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    for (let i = 0; i <= maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            
            if (response.ok) {
                return response;
            }
            
            // Don't retry on client errors (4xx)
            if (response.status >= 400 && response.status < 500) {
                throw new Error(\`Client error: \${response.status}\`);
            }
            
            if (i === maxRetries) {
                throw new Error(\`Server error: \${response.status}\`);
            }
        } catch (error) {
            if (i === maxRetries) {
                throw error;
            }
            
            // Exponential backoff
            await new Promise(resolve => 
                setTimeout(resolve, Math.pow(2, i) * 1000)
            );
        }
    }
}`}
          </pre>
        </div>
      </section>

      {/* Event Loop */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Understanding the Event Loop</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">💡 How JavaScript Handles Async</h3>
          <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
            <p><strong>Call Stack:</strong> Where function calls are executed</p>
            <p><strong>Web APIs:</strong> Browser APIs (setTimeout, fetch, DOM events)</p>
            <p><strong>Callback Queue:</strong> Where callbacks wait to be executed</p>
            <p><strong>Event Loop:</strong> Moves callbacks from queue to stack when stack is empty</p>
          </div>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Event Loop Example</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`console.log('1'); // Synchronous

setTimeout(() => {
    console.log('2'); // Macro task
}, 0);

Promise.resolve().then(() => {
    console.log('3'); // Micro task
});

console.log('4'); // Synchronous

// Output: 1, 4, 3, 2
// Explanation:
// 1. Synchronous code runs first (1, 4)
// 2. Micro tasks (Promises) run before macro tasks (setTimeout)
// 3. So Promise callback (3) runs before setTimeout callback (2)

// Micro tasks vs Macro tasks
setTimeout(() => console.log('macro 1'), 0);
setTimeout(() => console.log('macro 2'), 0);

Promise.resolve().then(() => console.log('micro 1'));
Promise.resolve().then(() => console.log('micro 2'));

// Output: micro 1, micro 2, macro 1, macro 2`}
          </pre>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Async Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">✅ Do</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Use async/await for cleaner code</li>
              <li>• Handle errors with try/catch</li>
              <li>• Use Promise.all for parallel execution</li>
              <li>• Implement proper error boundaries</li>
              <li>• Use AbortController for cancellation</li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">❌ Don't</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Forget to handle promise rejections</li>
              <li>• Use async/await in loops unnecessarily</li>
              <li>• Mix callbacks and promises</li>
              <li>• Ignore network timeouts</li>
              <li>• Block the main thread with heavy operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/languages/javascript/frameworks"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Frameworks</span>
        </Link>
        <Link
          href="/languages/javascript"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to JavaScript</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
