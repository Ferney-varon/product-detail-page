"use client";
import styles from "../styles/header.module.css";

import { useState } from "react";
import ArrowIcon from "../assets/icons/arrowIcon";

export default function Dropdown({ arrowColor }: { arrowColor?: string }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className={styles.categories}
      onClick={() => {
        setShowDropdown(!showDropdown);
      }}
    >
      <div className={styles.dropdownTitle}>
        <span>All Categories</span>
        <ArrowIcon color={arrowColor} />
      </div>
      {showDropdown && (
        <div className={styles.dropdown}>
          <div className={styles.dropDownContent}>
            <span>Category 1</span>
            <span>Category 2</span>
            <span>Category 3</span>
            <span>Category 4</span>
            <span>Category 5</span>
          </div>
        </div>
      )}
    </div>
  );
}
