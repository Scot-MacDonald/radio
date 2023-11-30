// pages/api/mixes/index.js
import dbConnect from "../../../db/connect";
import Mix from "../../../db/models/Mix";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    // Extract tags from query parameters
    const { tags } = request.query;

    // Build a query object based on tags
    const query = tags
      ? { tags: { $in: Array.isArray(tags) ? tags : [tags] } }
      : {};

    const mixes = await Mix.find(query);
    return response.status(200).json(mixes);
  }

  if (request.method === "POST") {
    try {
      const mixData = request.body;
      mixData.tags = mixData.tags || []; // Ensure tags is an array
      await Mix.create(mixData);

      response.status(201).json({ status: "Mix created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
