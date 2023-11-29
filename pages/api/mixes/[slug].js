import dbConnect from "../../../db/connect";
import Mix from "../../../db/models/Mix";

export default async function handler(request, response) {
  await dbConnect();
  const { slug } = request.query; // Change 'id' to 'slug'

  if (request.method === "GET") {
    const mix = await Mix.findOne({ slug }); // Use 'findOne' instead of 'findById'

    if (!mix) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(mix);
  }

  if (request.method === "PUT") {
    await Mix.findOneAndUpdate({ slug }, { $set: request.body }); // Use 'findOneAndUpdate'

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "DELETE") {
    await Mix.findOneAndDelete({ slug }); // Use 'findOneAndDelete'

    response.status(200).json({ message: "Success!" });
  }
}
