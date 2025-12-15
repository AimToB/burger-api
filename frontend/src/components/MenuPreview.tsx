// src/components/MenuPreview.tsx (SERVER)
import { apiFetch } from "@/lib/api";
import MenuPreviewClient from "./MenuPreviewClient";

export default async function MenuPreview() {
  const burgers = await apiFetch("menu");

  return <MenuPreviewClient burgers={burgers} />;
}
