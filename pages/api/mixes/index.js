import dbConnect from "../../../db/connect";
import Mix from "../../../db/models/Mix";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const mixes = await Mix.find();
    return response.status(200).json(mixes);
  }

  if (request.method === "POST") {
    try {
      const mixData = request.body;
      await Mix.create(mixData);

      response.status(201).json({ status: "Mix created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
