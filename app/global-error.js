"use client";

export default function GlobalError({ error, reset }) {
    console.log("--------------- Global error occurred");
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
