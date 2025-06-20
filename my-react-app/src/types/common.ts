export type ItemCardProps<T> = {
  item: T;
  onClick: (item: T) => void;
};

export type ItemListProps<T> = {
  items: T[];
  onItemClick: (item: T) => void;
};
