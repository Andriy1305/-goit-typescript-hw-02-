import React, { useState, FormEvent, ChangeEvent } from "react";
import styles from "./SearchBar.module.css";
//import toast from "react-hot-toast";
import { toast } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery === "") {
      toast("Введіть запит для пошуку зображень!", {
        icon: "⚠️",
      });
      return;
    }

    onSubmit(trimmedQuery);
    setQuery(""); // очищаємо інпут
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
          >
            🔍
          </button>
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
