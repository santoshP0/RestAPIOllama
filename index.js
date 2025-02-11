const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const OLLAMA_URL = "http://127.0.0.1:11434/api/chat"; // Use 127.0.0.1 instead of localhost

app.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        let generated =`Provide exactly 3 **short** and **brief** responses to the prompt '${prompt}'. Keep each response to one or two sentences, and return them in a **JSON array** of strings. Do not include any extra explanation, metadata, or additional content. and make the item length not exceeding morethan 20 characters. every item in the array should be less than 20 characters. make the responses more generic and humane`;
        const response = await axios.post(OLLAMA_URL, {
            model: "mistral:7b", 
            // model: "gemma:2b", 
            // model: "deepseek-r1:7b", 
            messages: [{ role: "user", content: generated }],
            stream: false
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

app.listen(8000, () => console.log("Server running on port 8000"));
