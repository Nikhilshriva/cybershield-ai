import { createClient }
from "@supabase/supabase-js";

const supabaseUrl =
  process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvY3hsbXB6d3VlZ2lkc2dwb2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMzEyMTUsImV4cCI6MjA5NDkwNzIxNX0

const supabaseAnonKey =
  process.env.sb_publishable_ZW9TDMW-ab-sb_publishable_ZW9TDMW-ab-KEljHe3fdZA_LIPInvIi;

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  );