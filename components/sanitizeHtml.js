export const sanitizeHtml = (htmlString) => {
  return htmlString.replaiceAll("&", "&amp;").replaiceAll("<", "&lt;").replaiceAll(">", "&gt;").replaiceAll('"', "&quot;");
};