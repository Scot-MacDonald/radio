// MixForm.js
import styles from "@/styles/mixes.module.css";
import React, { useState, useEffect, useMemo } from "react";

export default function MixForm({ value, onSubmit, isEditMode }) {
  const initialTags = useMemo(() => {
    return value && value.tags
      ? Array.isArray(value.tags)
        ? value.tags.map((tag) => tag.trim())
        : value.tags.split(",").map((tag) => tag.trim())
      : [];
  }, [value]);

  const [tags, setTags] = useState(initialTags);

  const [formValues, setFormValues] = useState({
    imageURL: "",
    url: "",
    title: "",
    country: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    if (isEditMode && value) {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        imageURL: value.imageURL || "",
        url: value.url || "",
        title: value.title || "",
        country: value.country || "",
        description: value.description || "",
        date: formatDate(value.date) || "",
      }));

      setTags(initialTags);
    }
  }, [value, isEditMode, initialTags]);

  const handleTagsChange = (e) => {
    const newTags = e.target.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== ""); // Remove empty tags

    // Remove duplicates by converting the array to a Set and back to an array
    const uniqueTags = [...new Set(newTags)];

    setTags(uniqueTags);
  };

  const handleTagDelete = (index) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const formatDate = (dateString) => {
    // Implement your date formatting logic here if needed
    return dateString;
  };

  const handleInputChange = (field, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send tags as an array in the formData object
    const formData = {
      ...formValues,
      tags: tags,
    };

    // Call the onSubmit function with the form data
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="imageURL">Image URL:</label>
      <input
        type="text"
        id="imageURL"
        name="imageURL"
        value={formValues.imageURL}
        onChange={(e) => handleInputChange("imageURL", e.target.value)}
      />

      <label htmlFor="url">Soundcloud URL:</label>
      <input
        type="text"
        id="url"
        name="url"
        value={formValues.url}
        onChange={(e) => handleInputChange("url", e.target.value)}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formValues.title}
        onChange={(e) => handleInputChange("title", e.target.value)}
      />

      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        name="country"
        value={formValues.country}
        onChange={(e) => handleInputChange("country", e.target.value)}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formValues.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
      ></textarea>

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formValues.date}
        onChange={(e) => handleInputChange("date", e.target.value)}
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
            <button type="button" onClick={() => handleTagDelete(index)}>
              Delete
            </button>
          </span>
        ))}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
