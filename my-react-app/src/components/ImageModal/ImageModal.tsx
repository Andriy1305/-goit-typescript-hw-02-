// src/components/ImageModal/ImageModal.tsx

import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { Image } from "../../types/image";

export type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: Image | null;
};

export default function ImageModal({ isOpen, onClose, data }: ImageModalProps) {
  if (!isOpen || !data) return null;

  const imageUrl = data.urls.regular;

  return (
    <Modal
      className={styles.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        className={styles.modalImage}
        src={imageUrl}
        alt={data.alt_description ?? "Image"}
      />
    </Modal>
  );
}
