import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {

  try {

    console.log("API HIT");

    const body = await req.json();

    console.log(body);

    const completion = await openai.chat.completions.create({

      model: "gpt-3.5-turbo",

      messages: [
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

    console.log("OPENAI ERROR:");
    console.log(error);

    return Response.json({
      reply: "OpenAI failed.",
    });
  }
}