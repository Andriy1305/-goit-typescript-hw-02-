import styles from "./ImageCard.module.css";
import { ItemCardProps } from "../../types/common.ts";
import { Image } from "../../types/image.ts";

export type ImageCardProps = ItemCardProps<Image>;

export default function ImageCard({ item: image, onClick }: ImageCardProps) {
  return (
    <div
      className={styles.card}
      onClick={() => onClick(image)}
      style={{ cursor: "pointer" }}
    >
      <img src={image.urls.small} alt={image.alt_description ?? "Image"} />
    </div>
  );
}
