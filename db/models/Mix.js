const mongoose = require("mongoose");
const { Schema } = mongoose;
const slugify = require("slugify");

const mixSchema = new Schema({
  imageURL: { type: String, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  country: { type: String, required: true },
  date: { type: Date, required: true },
  tags: { type: [String], default: [] },
  description: { type: String, required: true },
  slug: { type: String, unique: true },
  // create_at: { type: Date, default: Date.now },
});

mixSchema.pre("save", function (next) {
  // Generate the slug from the title
  this.slug = slugify(this.title, { lower: true });

  // Continue with the save operation
  next();
});

const Mix = mongoose.models.Mix || mongoose.model("Mix", mixSchema);

export default Mix;
