/// <reference types="vite/client" />

// ваші змінні оточення
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

