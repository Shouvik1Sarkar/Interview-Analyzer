import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [inputType, setInputType] = useState("text");
  const [interview, setInterview] = useState("");

  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  async function send_interview(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/agent/agent",
        {
          interview: interview,
        },
      );

      console.log("data", data.data);

      navigate("/response", {
        state: {
          result: data.data,
        },
      });

      setInterview("");
    } catch (error) {
      console.error("error", error);
    }
  }

  async function pdf_transcript(e) {
    e.preventDefault();
    try {
      if (!file) {
        console.log("Please select a file.");
        return;
      }
      const formData = new FormData();

      formData.append("interview", file);

      const { data } = await axios.post(
        "http://localhost:3000/api/v1/agent/analyze-file",
        formData,
      );

      console.log("data", data.data);

      navigate("/response", {
        state: {
          result: data.data,
        },
      });

      setInterview("");
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#fafbff] to-[#f3f5ff] text-[#11152f]">
      {/* Hero */}
      <section className="mx-auto mt-12 max-w-5xl px-6 text-center">
        {/* AI badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-medium text-purple-600">
          ✦<span>AI-Powered</span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Turn Interview Transcripts
          <br />
          into{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Actionable Feedback
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
          Upload or paste your interview transcript and get detailed analysis,
          technology coverage, strengths, weaknesses and improved answers.
        </p>
      </section>

      {/* Analyzer */}
      <section className="mx-auto mt-10 max-w-4xl px-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_50px_rgba(60,70,130,0.08)]">
          {/* Tabs */}
          <div className="mb-5 flex gap-8 border-b border-gray-200">
            {/* Paste Transcript */}
            <button
              onClick={() => setInputType("text")}
              className={`px-2 pb-3 text-sm transition ${
                inputType === "text"
                  ? "border-b-2 border-purple-500 font-bold text-[#11152f]"
                  : "font-medium text-gray-400 hover:text-gray-600"
              }`}
            >
              Paste Transcript
            </button>

            {/* Upload File */}
            <button
              onClick={() => setInputType("file")}
              className={`px-2 pb-3 text-sm transition ${
                inputType === "file"
                  ? "border-b-2 border-purple-500 font-bold text-[#11152f]"
                  : "font-medium text-gray-400 hover:text-gray-600"
              }`}
            >
              Upload File
            </button>
          </div>

          {/* ============================= */}
          {/* PASTE TRANSCRIPT */}
          {/* ============================= */}

          {inputType === "text" && (
            <>
              <textarea
                value={interview}
                onChange={(e) => {
                  setInterview(e.target.value);
                }}
                placeholder={`Interviewer: What is Node.js?
Candidate: Node.js is a JavaScript runtime built on Chrome's V8 engine...

Interviewer: Can you explain the event loop?
Candidate: The event loop is...

Interviewer: What is a REST API?
Candidate: A REST API is...`}
                className="h-64 w-full resize-none rounded-xl border border-gray-200 bg-[#fbfcff] p-5 font-mono text-sm leading-7 text-gray-700 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
              />

              {/* Character Count */}
              <div className="mt-2 flex items-center justify-between px-1 text-xs text-gray-400">
                <span>Characters: {interview.length} / 50,000</span>

                <button
                  onClick={() => setInterview("")}
                  className="transition hover:text-red-500"
                >
                  Clear
                </button>
              </div>
            </>
          )}

          {/* ============================= */}
          {/* FILE UPLOAD */}
          {/* ============================= */}

          {inputType === "file" && (
            <div className="flex h-64 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-[#fbfcff] px-6 text-center transition hover:border-purple-300">
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-purple-500">
                ↑
              </div>

              <h3 className="text-sm font-semibold text-[#11152f]">
                Upload your interview transcript
              </h3>

              <p className="mt-2 text-xs text-gray-400">
                Select a document containing your interview transcript
              </p>

              {/* File Input */}
              <label className="mt-5 cursor-pointer rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#11152f] shadow-sm transition hover:border-purple-300 hover:text-purple-600">
                Choose File
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  className="hidden"
                />
              </label>

              <p className="mt-3 text-xs text-gray-400">
                PDF, DOC, DOCX or TXT
              </p>
            </div>
          )}

          {/* Selected File */}
          {inputType === "file" && file && (
            <div className="mt-3 flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">📄</span>

                <div>
                  <p className="max-w-[400px] truncate text-sm font-medium text-[#11152f]">
                    {file.name}
                  </p>

                  <p className="text-xs text-gray-400">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>

              <button
                onClick={() => setFile(null)}
                className="text-xs font-medium text-gray-400 transition hover:text-red-500"
              >
                Remove
              </button>
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={(e) => {
              if (inputType === "text") {
                send_interview(e);
              } else {
                pdf_transcript(e);
              }
            }}
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:opacity-90"
          >
            <span>✦</span>
            Analyze Interview
            <span>→</span>
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3">
        {/* Feature 1 */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
            ▤
          </div>

          <div>
            <h3 className="text-sm font-semibold">Detailed Analysis</h3>

            <p className="mt-1 text-xs text-gray-400">Question-wise feedback</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-xl text-purple-600">
            ◈
          </div>

          <div>
            <h3 className="text-sm font-semibold">Identify Topics</h3>

            <p className="mt-1 text-xs text-gray-400">
              Technologies & concepts
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-600">
            ♢
          </div>

          <div>
            <h3 className="text-sm font-semibold">Improved Answers</h3>

            <p className="mt-1 text-xs text-gray-400">Get model answers</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
