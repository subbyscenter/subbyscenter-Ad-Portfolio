
import { GoogleGenAI } from "@google/genai";

// Function to generate an advertising pitch using Gemini
export const generateAdPitch = async (brandName: string, productType: string) => {
  // Always initialize with the named parameter apiKey from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `너는 '섭이스센터(Service Center)'의 광고 전략가야. 
      브랜드 이름: ${brandName}
      제품 유형: ${productType}
      
      이 브랜드를 위해 우리의 핵심 역량(병맛더빙, 3D 캐릭터 블렌딩, CM송 챌린지)을 활용한 기발한 광고 컨셉 한 줄과 그 이유를 추천해줘. 
      한국어로 답변하고, 전문적이면서도 트렌디한 톤앤매너를 유지해줘.`,
      config: {
        temperature: 0.8,
        // When setting maxOutputTokens, thinkingBudget must also be configured to ensure output is not consumed by thinking
        maxOutputTokens: 500,
        thinkingConfig: { thinkingBudget: 250 },
      }
    });
    // Use .text property directly instead of .text() method
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "맞춤형 피치를 생성하는 데 문제가 발생했습니다. 하지만 저희의 창의력은 멈추지 않습니다!";
  }
};