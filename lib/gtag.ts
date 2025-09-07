// lib/gtag.ts
export const GA_TRACKING_ID = "G-JCCFN9ZC5P";

// Log page views
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
