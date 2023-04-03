

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://llnhgryglvyfsnypmgnj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmhncnlnbHZ5ZnNueXBtZ25qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzc5MTMsImV4cCI6MTk5Mjc1MzkxM30.eO9vpo5kS5LHu0cNIUHPN4XAFBpvrQ2y8BKBKJ6cybY';

export const supabase = createClient(supabaseUrl, supabaseKey)


