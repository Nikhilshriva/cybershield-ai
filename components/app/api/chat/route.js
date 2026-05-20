import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {

  try {

    const body = await req.json();

    const completion = await client.chat.completions.create({

      model: "gpt-3.5-turbo",

      messages: [
        {
          role: "system",
          content:
            "You are an AI cybersecurity assistant for CyberShield.",
        },

        {
          role: "user",
          content: body.message,
        },
      ],
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {

    return Response.json({
      reply: "Something went wrong.",
    });
  }
}