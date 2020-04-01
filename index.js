addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

const generate = async request => {
  let badge2 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20">
    <linearGradient id="smooth" x2="0" y2="100%">
          <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
          <stop offset="1" stop-opacity=".1"/>
    </linearGradient>

    <mask id="round">
      <rect width="100" height="20" rx="4" fill="#fff"/>
    </mask>

    <g mask="url(#round)">
      <rect width="30" height="20" fill="#555"/>
      <rect x="30" width="30" height="20" fill="#67b246"/>
      <rect width="100" height="20" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="12">
      <text x="11" y="15" fill="#010101" fill-opacity=".3">Test</text>
      <text x="11" y="14">Test</text>
      <text x="35" y="15" fill="#010101" fill-opacity=".3">Lol</text>
      <text x="35" y="14">Lol</text>
    </g>
  </svg> 
  `;

  return new Response(badge2, {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" }
  });
};

async function handleRequest(request) {
  console.log("H", request.headers);
  console.log("U", request.url);

  if (request.method === "GET") {
    // response = new Response("Hello worker!", { status: 200 });
    response = await generate(request);
  } else {
    response = new Response("Expected GET", { status: 405 });
  }
  return response;
}
