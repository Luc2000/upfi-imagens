interface imageProps {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface apiImagesReponse {
  data: imageProps[];
  after: number | string | null;
}

export type { apiImagesReponse };
