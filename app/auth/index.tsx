import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import { H1 } from '@/components/ui/typographie'
import { usersTable } from '@/db/schema'
import { useDb } from '@/hooks/useDb'
import React from 'react'

const index = () => {
  const dbtest = useDb()
  const pressingHanlder = ()=>{
    return console.log(dbtest.select().from(usersTable).toSQL());
    
  }
  const insertHanlder = ()=>{
    return console.log(dbtest.select().from(usersTable).toSQL());
    
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