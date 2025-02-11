# Oolama Local Model Access with Node.js

## Description
This project allows you to access the Oolama model locally using a Node.js application. It sets up an Express server to handle requests and send prompts to the Oolama model running on your local machine. The model will process the prompts and return the generated responses.

## Requirements
- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/) (optional)
- Oolama model running locally (e.g., `gemma:2b`, `deepseek-r1:7b`)

## Installation

### 1. Clone the repository
Clone this repository to your local machine using Git.

```bash
git clone https://github.com/santoshP0/RestAPIOllama.git
cd oolama-local-model
```

### 2. Install dependencies
Run the following command to install the necessary dependencies:

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Set up environment variables
If your project requires environment variables, such as Oolama model API URLs, create a `.env` file in the root directory with the following keys:

```
MODEL_API_URL=http://localhost:11434/api/generate
```

Make sure your Oolama model is running locally and the URL matches the configuration.

### 4. Start the application
After installing dependencies and setting up the environment variables, you can start the application with:

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

The application will run on `http://localhost:3000/` by default.

## Usage

### Example Request

You can interact with the API by sending a POST request to the following endpoint:

**URL:** `http://localhost:3000/generate`

**Request Body:**
```json
{
  "prompt": "Hello"
}
```

### Example Response
```json
{
  "response": ["Hello!", "Hi!", "Greetings!"]
}
```
### ollama commands
```bash
ollama serve
```
```bash
ollama list
```
