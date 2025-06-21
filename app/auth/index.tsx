import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import { H1 } from '@/components/ui/typographie'
import { usersTable } from '@/db/schema'
import React from 'react'
import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
// import migrations from "@/drizzle/migrations"
const expoDb = SQLite.openDatabaseSync('db.db');
const db = drizzle(expoDb, { schema: { usersTable } });


const index = () => {
  const pressingHanlder = ()=>{
    return console.log(db.select().from(usersTable).toSQL());
    
  }
  const insertHanlder = ()=>{
    return db.insert(usersTable).values([
        {
            name: 'John',
            age: 30,
            email: 'john@example.com',
        },
      ]).then(()=>console.log("Inserted to user")
      ).catch((e)=>console.log(e)
      );
  }
  return (
    <Container>
        <H1>fdfvdfv</H1>
        <Button onPress={pressingHanlder} >Get</Button>
        <Button onPress={insertHanlder} >Insert</Button>
    </Container>
  )
}

export default index