import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {

  try {

    const { message } = await req.json();

    const response = await openai.chat.completions.create({

      model: "gpt-3.5-turbo",

      stream: true,

      messages: [
        {
          role: "system",
          content: "You are CyberShield AI Assistant."
        },

        {
          role: "user",
          content: message
        }
      ]
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({

      async start(controller) {

        for await (const chunk of response) {

          const text =
            chunk.choices[0]?.delta?.content || "";

          controller.enqueue(
            encoder.encode(text)
          );
        }

        controller.close();
      }
    });

    return new Response(stream);

  } catch (error) {

    console.log(error);

    return Response.json({
      error: "Streaming failed"
    });
  }
}