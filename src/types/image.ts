//=====ТИП ЗОБРАЖЕНН=====//

export type Image = {
  id: string;
  alt_description: string | null;
  description?: string | null;
  urls: {
    small: string;
    regular: string;
    full?: string;
  };
  user?: {
    id: string;
    name: string;
    profile_image?: {
      small: string | null;
      medium: string | null;
      large?: string | null;
    };
  };
};
