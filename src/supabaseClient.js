// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://clumpkgrdxiuzllxssyo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdW1wa2dyZHhpdXpsbHhzc3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4MTczNDYsImV4cCI6MjAzNTM5MzM0Nn0.OCKsFgBrLjva3I5idklV1HxQT22OYL3RW__IWlgEkl0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
