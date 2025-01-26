<h1>To-Do List Application</h1>
  <p>
    This project is a <strong>To-Do List</strong> application built to help users manage their daily tasks efficiently. Users can 
    <strong>Add</strong>, <strong>Edit</strong>, <strong>Mark as Complete</strong>, <strong>Delete</strong>, and <strong>View</strong> their tasks. 
    This application demonstrates core CRUD operations and offers a practical example of using the MERN stack, including 
    <strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, and <strong>Node.js</strong>.
  </p>

  <h2>Features</h2>
  <ul>
    <li>Create new tasks with a title and description.</li>
    <li>View a list of all tasks, categorized as pending or completed.</li>
    <li>Edit the details of an existing task.</li>
    <li>Mark tasks as complete or incomplete.</li>
    <li>Delete tasks permanently.</li>
  </ul>

  <h2>Tech Stack</h2>
  <ol>
    <li><strong>Frontend</strong>: React.js</li>
    <li><strong>Backend</strong>: Node.js with Express.js</li>
    <li><strong>Database</strong>: MongoDB</li>
    <li><strong>Environment Variables</strong>: Managed using <code>.env</code></li>
  </ol>

  <h2>Prerequisites</h2>
  <p>
    Before running the project, ensure you have the following installed:
  </p>
  <ul>
    <li><strong>Node.js</strong>: <a href="https://nodejs.org/">Download Node.js</a></li>
    <li><strong>MongoDB</strong>: Create an account and cluster on <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a></li>
  </ul>

  <h2>Setup Instructions</h2>
  <h3>1. Clone the Repository</h3>
  <pre><code>git clone &lt;repository-url&gt;
cd &lt;repository-folder&gt;</code></pre>

  <h3>2. Install Dependencies</h3>
  <p><strong>Backend</strong>: Navigate to the backend folder and install the necessary packages:</p>
  <pre><code>cd backend
npm install</code></pre>

  <p><strong>Frontend</strong>: Navigate to the frontend folder and install the required dependencies:</p>
  <pre><code>cd frontend
npm install</code></pre>

  <h3>3. Set Up the Environment Variables</h3>
  <p>Create a <code>.env</code> file in the <code>backend</code> directory with the following content:</p>
  <pre><code>MONGO_URI=&lt;Your MongoDB connection string&gt;
PORT=&lt;Port number, e.g., 5000&gt;</code></pre>
  <p>
    Replace <code>&lt;Your MongoDB connection string&gt;</code> with the connection string from your MongoDB Atlas account.
  </p>

  <h2>How to Run the Project</h2>
  <h3>Backend</h3>
  <ol>
    <li>Navigate to the <code>backend</code> folder.</li>
    <li>Start the backend server:
      <pre><code>npm run dev</code></pre>
    </li>
  </ol>

  <h3>Frontend</h3>
  <ol>
    <li>Navigate to the <code>frontend</code> folder.</li>
    <li>Start the frontend application:
      <pre><code>npm start</code></pre>
    </li>
  </ol>
  <p>
    The application will open in your default browser, displaying the interface for the To-Do List.
  </p>

  <h2>Dependencies Used</h2>
  <h3>Backend</h3>
  <ul>
    <li><strong>dotenv</strong>: For managing environment variables.</li>
    <li><strong>express</strong>: For building the RESTful API.</li>
    <li><strong>mongoose</strong>: For interacting with MongoDB.</li>
    <li><strong>nodemon</strong>: For automatically restarting the server on code changes.</li>
  </ul>
  <h3>Frontend</h3>
  <ul>
    <li><strong>React.js</strong>: For building the user interface.</li>
  </ul>

  <h2>Project Workflow</h2>
  <ol>
    <li><strong>Create</strong>: Add a new task with a title and description.</li>
    <li><strong>Read</strong>: View a list of tasks categorized as pending or completed.</li>
    <li><strong>Update</strong>: Edit details of an existing task.</li>
    <li><strong>Delete</strong>: Remove a task permanently from the list.</li>
  </ol>

  <h2>Notes</h2>
  <ul>
    <li>Ensure that your MongoDB cluster is running and accessible before starting the backend server.</li>
    <li>If <code>node_modules</code> folders are missing, install dependencies using <code>npm install</code> in both the
      <code>frontend</code> and <code>backend</code> directories.</li>
  </ul>
