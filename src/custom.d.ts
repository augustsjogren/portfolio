declare module '*.css';

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.webp' {
  const value: string;
  export = value;
}
