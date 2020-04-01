const { watch } = require("./utils/consolewatch");

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

const generate = async request => {
  let badge = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="20">
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <clipPath id="a">
        <rect width="80" height="20" rx="3" fill="#fff"/>
      </clipPath>
      <g clip-path="url(#a)">
        <path fill="#555" d="M0 0h35v20H0z"/>
        <path fill="#COLOR" d="M35 0h45v20H35z"/>
        <path fill="url(#b)" d="M0 0h80v20H0z"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"> 
      <text x="185" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="250">
        LEFT
      </text>
      <text x="185" y="140" transform="scale(.1)" textLength="250">
        LEFT
      </text>
      <text x="565" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">
        RIGHT
      </text>
      <text x="565" y="140" transform="scale(.1)" textLength="350">
        RIGHT
      </text>
      </g> 
    </svg>
  `;

  const url = new URL(request.url);
  const urlParams = new URLSearchParams(url.search);
  let left = "one";
  let right = "two";
  let color = "67B246";
  if (urlParams.toString().length !== 0) {
    left = urlParams.get("left");
    right = urlParams.get("right");
    color = urlParams.get("color");
    color = color.match(/^([0-9a-f]{6}|[0-9a-f]{3})/gi);
  }

  badge = badge.replace(/LEFT/g, left);
  badge = badge.replace(/RIGHT/g, right);
  badge = badge.replace(/COLOR/g, color);

  return new Response(badge, {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" }
  });
};

async function handleRequest(request) {
  watch(process.env.WATCH_ID || null);

  if (request.method === "GET") {
    response = await generate(request);
  } else {
    response = new Response("Expected GET", { status: 405 });
  }
  return response;
}
