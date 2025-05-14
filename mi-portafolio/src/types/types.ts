export interface Data {
  heading: string;
  paragraphs?: string[];
  name?: string;
  subtitle?: string;
}

export interface Content {
  hero: Data;
  about: Data;
  goals: Data;
  more: Data;
  skill: Data;
}
