import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID="eyhx45o9",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET="production",
  apiVersion: "2023-01-01",
  useCdn: true, // Statically generated pages ke liye false karein
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN="skz6nwBwXGEQgu39Hjllde33UwuO9Em1ujz9e2uuyqPFJ5wIZE0Ug3E3GCWUnf8BEOYmG5ofZHrIqo2hJYRYDcxubazDmRf2OI4Ri0SExYb6VmHrWvCQ8mA69ZAGSr5DkftttREFtAOyGGUOUk3LTR2MTNvtn5COk0mxHecvtB3hziwzdPu8"
});
