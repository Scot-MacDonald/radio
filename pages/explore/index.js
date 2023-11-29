import React, { useState } from "react";
import useSWR from "swr";
import styles from "@/styles/explore.module.css";

export default function SelectionBar() {
  const [selectedItems, setSelectedItems] = useState([]);

  // Fetch data from API (assuming it returns an array of documents like the one you provided)
  const { data: mixes, error } = useSWR("/api/mixes");

  const handleItemClick = (item) => {
    // Check if the item is already selected
    if (selectedItems.includes(item)) {
      // If selected, remove it from the selection
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // If not selected, add it to the selection
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item) => {
    // Remove the item from the selection
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem !== item)
    );
  };

  if (error) return <div>Error loading mixes</div>;
  if (!mixes) return <div>Loading mixes...</div>;

  // Extract all unique tags from all mixes
  const allTags = Array.from(
    new Set(mixes.reduce((acc, mix) => [...acc, ...mix.tags], []))
  );

  return (
    <div>
      <h2 className={styles.header}>EXPLORE</h2>
      <ul className={styles.selectionBar}>
        {selectedItems.map((item, index) => (
          <li className={styles.tags} key={index}>
            {item}{" "}
            <button
              className={styles.xBt}
              onClick={() => handleRemoveItem(item)}
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <h2>GENRES</h2>
      <ul className={styles.select}>
        {allTags.map((tag) => (
          <li
            className={styles.tags}
            key={tag}
            onClick={() => handleItemClick(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
