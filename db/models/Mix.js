import mongoose from "mongoose";

const { Schema } = mongoose;

const mixSchema = new Schema({
  title: { type: String, required: true },
});

const Mix = mongoose.models.Mix || mongoose.model("Mix", mixSchema);

export default Mix;
