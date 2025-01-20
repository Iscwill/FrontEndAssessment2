export async function GET(req) {
  const response = await fetch(
    "http://18.143.79.95/api/priceData/technical-test",
    { cache: "no-store" } // Ensure no caching
  );
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store", // Prevent caching
    },
  });
}
