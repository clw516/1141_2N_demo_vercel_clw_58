import { createClient } from '@supabase/supabase-js';

const SUPABASEUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASEKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(SUPABASEUrl, SUPABASEKey);
