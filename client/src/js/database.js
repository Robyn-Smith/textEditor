// Import the necessary function from the 'idb' library
import { openDB } from 'idb';

// Initialize the database
const initdb = async () =>
  openDB('jate', 1, {
    // Define the upgrade function to create the object store if it doesn't exist
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('JATE database exists');
        return;
      }
      // Create a new object store named jate with auto-incrementing keys
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('successfully created JATE database');
    },
  });

// Method to PUT content into the database
export const putDb = async (content) => {
  console.log('POST data to the database');

  // Open a connection to the 'jate' database with value 1
  const jateDb = await openDB('jate', 1);

  // Start a read-write transaction on the 'jate' object store
  const tx = jateDb.transaction('jate', 'readwrite');

  // Get the object store
  const store = tx.objectStore('jate');

  // Use the .put() method to add content to the object store
  const request = store.put({ id: 1, content: content });

  // Wait for the request to complete and get the result
  const result = await request;
  console.log('successfully saved data to database', result);
}

// Method to get content from the database
export const getDb = async () => {
  console.log('GET request from database');

  // Open a connection to the 'jate' database
  const jateDb = await openDB('jate', 1);

  // Start a read-only transaction on the 'jate' object store
  const tx = jateDb.transaction('jate', 'readonly');

  // Get the object store
  const store = tx.objectStore('jate');

  // Use the .get() method to retrieve data from the object store based on the id
  const request = store.get(1);

  // Wait for the request to complete and return the value
  const result = await request;
  return result.value;
}
// Initialize the database when the module is loaded
initdb();
