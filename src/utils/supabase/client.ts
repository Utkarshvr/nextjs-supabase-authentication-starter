import { createBrowserClient } from "@supabase/ssr";
import { supaConfig } from "./config";

export function createClient() {
  return createBrowserClient(supaConfig.url, supaConfig.key);
}
