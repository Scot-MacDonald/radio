import mongoose from "mongoose";

const { Schema } = mongoose;

const mixSchema = new Schema({
  imageURL: { type: String, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  country: { type: String, required: true },
  date: { type: Date, required: true },
  tags: { type: [String], default: [] },
  description: { type: String, required: true },
});

const Mix = mongoose.models.Mix || mongoose.model("Mix", mixSchema);

export default Mix;
