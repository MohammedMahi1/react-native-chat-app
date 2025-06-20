import { Config, defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'sqlite',
    driver: 'expo',
    schema: './db/schema.ts',
    out: './drizzle',
});


// import type { Config } from 'drizzle-kit';

// export default {
//   schema: './db/schema.ts',
//   out: './db/migrations',
//   driver: 'better-sqlite',

// } 