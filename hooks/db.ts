// db.ts
import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { usersTable } from '@/db/schema';

const expoDb = SQLite.openDatabaseSync('db.db');
export const db = drizzle(expoDb, { schema: { usersTable } });
