import Box from '@/components/ui/box'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import { H1, Span } from '@/components/ui/typographie'
import React from 'react'

const index = () => {
    return (
        <Container>
            <Box>
                <H1>Welecome to MangoChat </H1>
                <Span>is a chat app developed with react native and laravel</Span>
                <Button variant={'contain'}>
                        Let's Go
                </Button>
            </Box>
        </Container>
    )
}

export default index