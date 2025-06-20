import React, { useState, useEffect } from "react";
//import toast, { Toaster } from "react-hot-toast";
import { toast, Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar.tsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.tsx";
import Loader from "./components/Loader/Loader.tsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.tsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.tsx";
import ImageModal from "./components/ImageModal/ImageModal.tsx";
import { fetchImages, SearchResponse } from "./services/api.tsx";
import { Image } from "./types/image.tsx";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Image | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setIsLoading(true);
      try {
        const data: SearchResponse = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(Math.ceil(data.total / 12));
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Помилка запиту...");
        toast.error("Помилка запиту.");
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery: string): void => {
    const trimmed = newQuery.trim();
    if (trimmed === "") {
      toast.error("Please enter a search term!");

      return;
    }
    if (trimmed !== query) {
      setQuery(trimmed);
      setImages([]);
      setPage(1);
    }
  };

  const handleLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  const openModal = (imageData: Image): void => {
    setModalData(imageData);
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}

      <ImageGallery items={images} onItemClick={openModal} />

      {isLoading && <Loader />}

      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {showModal && modalData && (
        <ImageModal isOpen={showModal} onClose={closeModal} data={modalData} />
      )}

      <Toaster position="top-right" />
    </>
  );
}
