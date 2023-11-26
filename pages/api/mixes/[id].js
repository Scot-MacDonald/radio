import dbConnect from "../../../db/connect";
import Mix from "../../../db/models/Mix";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const mix = await Mix.findById(id);

    if (!mix) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(mix);
  }

  if (request.method === "PUT") {
    await Mix.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "DELETE") {
    await Mix.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }
}
