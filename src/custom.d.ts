declare module '*.scss';

declare module '*.css';

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.webp' {
  const value: string;
  export = value;
}
