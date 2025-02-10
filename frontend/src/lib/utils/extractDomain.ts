const extractDomain = (url: string): string => {
  try {
    const parsedUrl = new URL(url);

    return parsedUrl.hostname;
  } catch {
    const match = url.match(/\(([^)]+)\)/);

    if (match) return match[1];

    return url;
  }
};

export default extractDomain;
