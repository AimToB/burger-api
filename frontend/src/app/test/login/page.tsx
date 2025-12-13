"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api";

export default function LoginTest() {
  const [result, setResult] = useState("");

  async function testLogin() {
    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: "test@test.com",
          password: "123456",
        }),
      });
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      setResult(err.message);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <button onClick={testLogin}>Test login</button>
      <pre>{result}</pre>
    </div>
  );
}
