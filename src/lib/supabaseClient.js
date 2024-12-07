import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_APP_SUPABASE_URL
const key = import.meta.env.VITE_APP_SUPABASE_KEY

export const supabase = createClient(url, key)
