import { main } from "../../agent.js";
import ApiError from "../utils/ApiErrors.utils.js";
import ApiResponse from "../utils/ApiResponse.utils.js";
import asyncHandler from "../utils/asyncHandler.utils.js";
import fs from "fs";
import { PDFParse } from "pdf-parse";

export const generate = asyncHandler(async (req, res) => {
  const { interview } = req.body;

  const ai_message = await main(interview);
  return res.status(200).json(new ApiResponse(200, ai_message, "Hi"));
});
export const analyzeFile = asyncHandler(async (req, res) => {
  console.log("this is it");
  console.log("....", req.file);
  if (!req.file) {
    throw new ApiError(404, "not found file");
  }

  // This is where Multer saved the PDF
  console.log("before");
  const filePath = req.file.path;
  console.log("after", req.file.path);
  console.log("dile path", filePath);

  // Read PDF from disk
  const buffer = fs.readFileSync(filePath);

  // Parse PDF
  const parser = new PDFParse({
    data: buffer,
  });

  const result = await parser.getText();

  // Extracted interview transcript
  const interview = result.text;

  console.log(interview);

  const ai_message = await main(interview);

  await parser.destroy();

  return res.status(200).json(new ApiResponse(200, ai_message, "Hi"));
});
