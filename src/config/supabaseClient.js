import { createClient } from '@supabase/supabase-js';

const supabaseUrl = ' https://ldvshbcsximihgslgsuk.supabase.co ';        // Replace with your actual Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkdnNoYmNzeGltaWhnc2xnc3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODQ3MjEsImV4cCI6MjA2ODI2MDcyMX0.Afs1mZ6KSuX049nl-uRGi-oX1fc3RjvlEiQkJzNmtj8';              // Replace with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
