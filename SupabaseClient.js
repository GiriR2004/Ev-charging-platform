import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uaitmokwffpqsaliufsf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhaXRtb2t3ZmZwcXNhbGl1ZnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNDgxNjUsImV4cCI6MjA1ODkyNDE2NX0.KbV2X0eGDiYJO2xUH6zHlnPtepgFywShywK_7jvCd5o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
