import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  label1?: {
    name: string;
    data: string | number;
  };
  label2?: {
    name: string;
    data: string | number;
  };
}
const webUrl = "https://algorithms-blog.vercel.app";

const defaultImage = `/main.jpeg`;

export default function metadata(props: MetadataProps): Metadata {
  const { title, description: desc, path, image, label1, label2 } = props;
  const description = desc + " | Heetae의 알고리즘 블로그, algorithms-blog.vercel.app";

  const images = webUrl + (image ?? defaultImage);

  return {
    metadataBase: new URL(webUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: webUrl + path,
      siteName: "algorithms-blog.vercel.app",
      images,
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    other: {
      ["twitter:label1"]: label1?.name ?? "",
      ["twitter:data1"]: label1?.data ?? "",
      ["twitter:label2"]: label2?.name ?? "",
      ["twitter:data2"]: label2?.data ?? "",
    },
  };
}