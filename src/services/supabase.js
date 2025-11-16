import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mhbezxjntqukarnwlvkk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oYmV6eGpudHF1a2FybndsdmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMTEwOTUsImV4cCI6MjA3ODc4NzA5NX0.q6zhNnk7_RAsZF8kSwCgxMh1XXf9QbKyYDxgFlew6EY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
