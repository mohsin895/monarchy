"use client";

import { useEffect } from "react";
import { fetchApi } from "@/lib/api";

export default function TitleUpdater() {
  useEffect(() => {
    async function loadTitle() {
      const res = await fetchApi("monarch/setting");

      if (res?.data?.site_name) {
        document.title = res.data.site_name; // <-- SET TITLE HERE
      }
    }
    loadTitle();
  }, []);

  return null; // no UI needed
}
