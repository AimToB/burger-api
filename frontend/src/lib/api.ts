// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function apiFetch(endpoint: string, options: RequestInit = {}) {
//   const res = await fetch(`${API_URL}/api/${endpoint}`, {
//     headers: {
//       "Content-Type": "application/json",
//       ...(options.headers || {}),
//     },
//     ...options,
//   });

//   if (!res.ok) {
//     let message = "API request failed";

//     try {
//       const error = await res.json();
//       message = error?.error || error?.msg || message;
//     } catch {
//       // response body is not JSON → keep generic message
//     }

//     throw new Error(message);
//   }

//   if (res.status === 204) {
//     return null;
//   }

//   return res.json();
// }
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}/api/${endpoint}`;

  console.log("[apiFetch] Requesting:", url);

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    let message = "API request failed";

    try {
      const error = await res.json();
      message = error?.error || error?.msg || message;
    } catch {}

    console.error("[apiFetch] FAILED:", {
      endpoint,
      status: res.status,
      statusText: res.statusText,
    });

    // 👇 TEMPORARILY do NOT throw
    return null;
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
}
