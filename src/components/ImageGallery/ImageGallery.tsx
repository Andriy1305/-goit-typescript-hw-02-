import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { type Image } from "../../types/image";
import { ItemListProps } from "../../types/common";

// Тепер: items — це масив Image, onItemClick прийме Image
export type ImageGalleryProps = ItemListProps<Image>;

export default function ImageGallery({
  items: images,
  onItemClick: onImageClick,
}: ImageGalleryProps) {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} item={image} onClick={onImageClick} />
      ))}
    </div>
  );
}
