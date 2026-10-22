
export default {
  async fetch(request) {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (url.pathname === "/") {
      return Response.json(
        {
          status: "online",
          service: "perchance-chat-api",
        },
        { headers: corsHeaders }
      );
    }

    return Response.json(
      { error: "Route not found" },
      { status: 404, headers: corsHeaders }
    );
  },
};
