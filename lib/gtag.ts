export const GA_TRACKING_ID = "G-JCCFN9ZC5P";

// Extend the Window interface so TypeScript knows about gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Log page views
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
