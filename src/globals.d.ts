// Global CSS module declarations
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.sass" {
  const content: Record<string, string>;
  export default content;
}

// Side-effect CSS imports
declare module "*/globals.css";
declare module "./globals.css";
