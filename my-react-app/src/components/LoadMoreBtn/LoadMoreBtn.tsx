import styles from "./LoadMoreBtn.module.css";

export type LoadMoreBtnProps = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
}
