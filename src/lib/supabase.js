import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pxzamfvmlraqusjkuadr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4emFtZnZtbHJhcXVzamt1YWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2MTY3NzUsImV4cCI6MjA5MjE5Mjc3NX0.J6DowRil8qEVqGOdPZY8nsQo0wSCOKj1FPM_KteOv4E'

export const supabase = createClient(supabaseUrl, supabaseKey)
