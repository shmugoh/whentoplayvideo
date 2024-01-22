export type ProcessURLObject = {
  domain: string | null;
  videoId: string | null;
  timestamp: number | null;
};

export function processUrl(url: string): ProcessURLObject {
  const re =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:.*?[?&]t=([0-9ms]+))?/;
  const match = url.match(re);

  return {
    domain: match ? match[0] : null,
    videoId: match ? match[1] : null,
    timestamp: match ? parseInt(match[2]) : null,
  };
}
