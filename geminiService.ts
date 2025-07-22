
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_TEXT_MODEL } from '../constants';

if (!process.env.API_KEY) {
  console.error("API_KEY environment variable is not set. Gemini API calls will fail.");
  // Depending on the app's requirements, you might throw an error here or display a global message.
  // For this example, we'll allow the app to load but log the error.
}

// Initialize the GoogleGenAI client. The exclamation mark assumes API_KEY is set, as per prompt.
// In a real app, handle the case where API_KEY might be undefined more gracefully if not guaranteed.
export const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateText = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) throw new Error("API Key not configured.");
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: GEMINI_TEXT_MODEL,
    contents: prompt,
  });
  return response.text;
};
