export type ContentsType = {
  content: string
};

export type ContentType = {
  title: string
  date: string
  category: string;
  content: string;
  description: string
  algorithm: string[]
  level: string
  label: boolean
} | ObjectType;

export type ObjectType = {
  [key: string]: any;
}