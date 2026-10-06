import { configDotenv } from "dotenv";
configDotenv({ path: ".././.env" });

import { SYSTEM_PROMPT } from "./agentConstants.js";

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// const user_input = ``;

const message_history = [
  {
    role: "system",
    content: SYSTEM_PROMPT,
  },
];

export async function main(interview) {
  message_history.push({
    role: "user",
    content: interview,
  });

  const MAX_TRIES = 5;
  let count = 0;
  while (true) {
    if (count > MAX_TRIES) {
      return "failed to generate";
    }
    count += 1;

    const chatCompletion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: message_history,
    });
    // Print the completion returned by the LLM.
    message_history.push({
      role: "assistant",
      content: chatCompletion.choices[0]?.message?.content,
    });
    console.log(chatCompletion.choices[0]?.message?.content || "");
    return chatCompletion.choices[0]?.message?.content;
  }
}

// await main();
