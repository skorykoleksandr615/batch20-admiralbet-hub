export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.href, 301);
    }
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response("AdmiralBet", { headers: { "content-type": "text/plain; charset=utf-8" } });
  }
};
