export interface Book {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: {
    name: string;
    url: string;
  },
  'cover': string;
}

export interface BookState {
  books: Book[]
}
