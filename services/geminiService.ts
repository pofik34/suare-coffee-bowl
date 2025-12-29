import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction to give the AI context about Suare Coffee
const SYSTEM_INSTRUCTION = `
You are the "Suare Assistant", a helpful and knowledgeable informational guide for Suare Coffee located in Suadiye, Kadıköy, Istanbul.
Your role is to answer customer questions accurately regarding the menu, location, hours, and product details.
Do not role-play as a "character" or overly casual "barista". Be professional, polite, warm, and direct.

CRITICAL FACT:
- **Coffee Origin**: All coffee beans are imported FRESH from Brazil ("Bütün çekirdekler taze olarak Brezilya'dan gelir"). You must mention this specifically when asked about coffee quality, taste, or origin.

General Information:
- Location: Suadiye, Hakim Kemal Sk. no:11 34740 Kadıköy/İstanbul.
- Opening Hours: Every day 09:00 - 01:00.
- Phone: 0532 228 24 40.
- Atmosphere: Modern, minimalist, quiet, and calm. Great for working, reading, or dates.
- Specialties:
  - Food: Healthy Bowls (Grilled Chicken, Meatball, Falafel).
  - Desserts: San Sebastian Cheesecake, Brownies.
  - Drinks: Espresso based drinks, V60, Cold Brew.

Guidelines:
1. Speak primarily in Turkish (Türkçe).
2. Keep answers concise and informative.
3. If asked for recommendations, suggest items based on popular choices but focus on describing their quality (e.g., "Our coffees are made with fresh Brazilian beans").
4. If the user asks about the address, refer them to the map section.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, text: string }[]): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview'; 

    let prompt = `${SYSTEM_INSTRUCTION}\n\nChat History:\n`;
    history.forEach(msg => {
      prompt += `${msg.role === 'user' ? 'Customer' : 'Assistant'}: ${msg.text}\n`;
    });
    prompt += `Customer: ${message}\nAssistant:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Şu anda bilgi veremiyorum, lütfen biraz sonra tekrar deneyin.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bağlantıda bir sorun oluştu. Lütfen internetinizi kontrol edin.";
  }
};