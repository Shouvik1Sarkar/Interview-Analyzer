# 🎯 Interview Analyzer

An AI-powered interview analysis application that reviews interview transcripts and provides structured, actionable feedback on a candidate's performance.

Users can either **paste an interview transcript** or **upload a PDF transcript**. The application processes the transcript, sends it to an LLM for analysis, and generates detailed feedback covering technical performance, behavioral responses, communication, strengths, weaknesses, and areas for improvement.

---

## ✨ Features

### 📝 Interview Transcript Analysis

Paste an interview transcript directly into the application and receive AI-generated feedback.

The analyzer evaluates areas such as:

- Technical knowledge
- Behavioral responses
- Communication and verbal delivery
- Technologies and concepts discussed
- Strengths demonstrated during the interview
- Areas that could be improved
- Topics worth revising
- Overall interview performance

### 📄 PDF Transcript Upload

Instead of manually pasting a transcript, users can upload a PDF containing the interview.

The backend:

1. Receives the PDF using Multer
2. Temporarily stores the uploaded file
3. Extracts the text from the PDF
4. Sends the extracted transcript through the same AI analysis pipeline
5. Returns the generated interview review to the frontend

### 🤖 AI-Powered Feedback

The application uses an LLM with a dedicated interview-review system prompt.

The model is instructed to analyze the interview based only on evidence available in the transcript and provide constructive feedback rather than simply generating generic interview advice.

### 📊 Structured Interview Review

The generated report can include:

- Interview Summary
- Technical Performance
- Behavioral Performance
- Communication & Verbal Delivery
- Technologies and Concepts Discussed
- Key Strengths
- Areas for Improvement
- Recommended Revision Topics
- Final Assessment

### 🛡️ Prompt Injection Protection

Interview transcripts are treated as data rather than instructions.

The AI system prompt instructs the model not to follow commands that may appear inside an uploaded interview transcript.

---

## 🏗️ Architecture

```text
                         Interview Analyzer

                              React
                                │
                  ┌─────────────┴─────────────┐
                  │                           │
           Paste Transcript              Upload PDF
                  │                           │
                  │                        FormData
                  │                           │
                  │                        Multer
                  │                           │
                  │                     PDF Text Parser
                  │                           │
                  └─────────────┬─────────────┘
                                │
                        Interview Transcript
                                │
                                ▼
                         Express Backend
                                │
                                ▼
                         AI / LLM Service
                                │
                                ▼
                       Interview Analysis
                                │
                                ▼
                         React Response UI
```

Both input methods eventually produce plain interview text.

This allows the same AI analysis service to process transcripts regardless of whether they came from a textarea or an uploaded PDF.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Markdown

### Backend

- Node.js
- Express.js
- Multer
- PDF text extraction
- LLM API

---

## 📁 Project Structure

```text
Interview-Analyzer/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   └── ...
│   │
│   ├── uploads/
│   └── package.json
│
└── README.md
```

---

## ⚙️ How It Works

### 1. Paste Transcript

The frontend sends the interview transcript as JSON:

```text
React
  ↓
POST /api/v1/agent/agent
  ↓
Express
  ↓
LLM
  ↓
Interview Analysis
```

Example request:

```json
{
  "interview": "Interviewer: What is Node.js?\nCandidate: Node.js is..."
}
```

---

### 2. Upload PDF

PDF uploads use `multipart/form-data`.

```text
React
  ↓
FormData
  ↓
POST /api/v1/agent/analyze-file
  ↓
Multer
  ↓
Temporary PDF
  ↓
Extract Text
  ↓
LLM
  ↓
Interview Analysis
```

The extracted text is passed into the same analysis pipeline used for pasted transcripts.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shouvik1Sarkar/Interview-Analyzer.git
```

```bash
cd Interview-Analyzer
```

---

### 2. Install backend dependencies

```bash
cd backend
npm install
```

Create your environment file:

```text
.env
```

Add the API credentials required by the backend.

Example:

```env
PORT=3000
LLM_API_KEY=your_api_key_here
```

> Never commit your `.env` file or API keys to GitHub.

Start the backend:

```bash
npm run dev
```

The backend should run on:

```text
http://localhost:3000
```

---

### 3. Install frontend dependencies

Open another terminal:

```bash
cd client
npm install
```

Start the frontend:

```bash
npm run dev
```

Vite will normally start the application at:

```text
http://localhost:5173
```

---

## 📄 Example Interview

```text
Interviewer: Can you explain what Node.js is?

Candidate: Node.js is a JavaScript runtime built on Chrome's V8 engine.
It allows JavaScript to run outside the browser and is commonly used
for building backend applications.

Interviewer: Is Node.js single-threaded?

Candidate: JavaScript execution in Node.js primarily happens on a
single thread, while asynchronous work can be handled outside the
main JavaScript execution thread.
```

The application sends the transcript to the AI analyzer and generates a structured review.

---

## 🗺️ Development Roadmap

The project is being developed incrementally.

### Current

- [x] Paste interview transcripts
- [x] AI interview analysis
- [x] Structured Markdown feedback
- [x] Render AI feedback in React
- [x] PDF upload
- [x] PDF text extraction
- [x] Shared analysis pipeline for text and PDF input

### Planned

- [ ] Improved structured output
- [ ] DOCX/TXT uploads
- [ ] Authentication
- [ ] User dashboard
- [ ] Save previous interview analyses
- [ ] Interview history
- [ ] Large transcript support
- [ ] RAG-based document processing
- [ ] YouTube interview analysis
- [ ] Agentic interview analysis workflow

---

## 🎯 Project Goal

Interview Analyzer is being built as both a practical AI application and a learning project for exploring modern Generative AI application development.

The project focuses on concepts including:

- LLM APIs
- Prompt engineering
- AI output formatting
- File processing
- PDF text extraction
- Full-stack AI application architecture
- Retrieval-Augmented Generation
- AI agents

The architecture is intentionally being expanded incrementally as new AI engineering concepts are introduced.

---

## ⚠️ Limitations

- AI-generated interview feedback should be treated as guidance rather than an authoritative hiring decision.
- Transcript-based analysis cannot reliably determine body language, facial expressions, or actual vocal tone.
- Image-only/scanned PDFs may require OCR and may not currently be supported.
- AI responses can occasionally contain inaccuracies.

---

## 🔮 Future Vision

The long-term goal is to evolve Interview Analyzer from a transcript reviewer into a complete AI-powered interview preparation platform capable of analyzing interviews from multiple sources, maintaining analysis history, retrieving relevant knowledge, and using agentic workflows for deeper interview evaluation.

---

## 👨‍💻 Author

**Shouvik Sarkar**

GitHub: `Shouvik1Sarkar`

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a star.
