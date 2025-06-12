import Box from '@/components/ui/box'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import { H1, Span } from '@/components/ui/typographie'
import React from 'react'

const index = () => {
    return (
        <Container className='h-[100vh] flex items-center justify-center'>
            <Box className='items-center justify-center gap-8 w-full'>
                <H1 className='font-bold text-center text-6xl'>Welecome to MangoChat </H1>
                <Span className='text-center'>is a chat app developed with react native and larave.</Span>
                <Button>
                        Get Started
                </Button>
                <Button variant={"outline"}>
                        Add an existing account
                </Button>
            </Box>
        </Container>
    )
}

export default index