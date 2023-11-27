import React, { useState } from "react";
import styles from "@/styles/mixes.module.css"; // Adjust the import based on your file structure

export default function MixForm({ value, onSubmit, isEditMode }) {
  const initialTags =
    value && value.tags ? value.tags.split(",").map((tag) => tag.trim()) : [];
  const [tags, setTags] = useState(initialTags);

  const handleTagsChange = (e) => {
    setTags(e.target.value.split(",").map((tag) => tag.trim()));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="mix-input">
        {isEditMode ? "Edit the mix" : "Enter a new mix"}
      </label>

      <label htmlFor="imageURL">Image URL:</label>
      <input
        type="text"
        id="imageURL"
        name="imageURL"
        defaultValue={value && value.imageURL}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        defaultValue={value && value.title}
      />

      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        name="country"
        defaultValue={value && value.country}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        defaultValue={value ? formatDate(value.date) : ""}
      />

      <label htmlFor="tags">Tags:</label>
      <input
        type="text"
        id="tags"
        name="tags"
        value={tags.join(", ")}
        onChange={handleTagsChange}
        placeholder="Enter tags, separated by commas"
      />

      <div>
        {tags.map((tag, index) => (
          <span className={styles.mixTag} key={index}>
            {tag}
          </span>
        ))}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
