// src/components/SearchBar/SearchBar.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

export type SearchBarProps = {
  onSubmit: (query: string) => void;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery === "") {
      toast.error("Введіть запит для пошуку зображень!");
      return;
    }

    onSubmit(trimmedQuery);
    setQuery("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <button
            type="submit"
            className={styles.searchButton}
            aria-label="Search"
          ></button>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search images..."
            className={styles.input}
          />
        </div>
      </form>
    </div>
  );
}
