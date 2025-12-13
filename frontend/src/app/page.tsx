import { apiFetch } from "@/lib/api";

export default async function Home() {
  const data = await apiFetch("/health/db"); // or /ping, /menu

  return (
    <main style={{ padding: 40 }}>
      <h1>Backend connected</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
