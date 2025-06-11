import Box from '@/components/ui/box'
import Container from '@/components/ui/container'
import { H1, Span } from '@/components/ui/typographie'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
    return (
        <Container >
            <Box>
                <H1>Welecome to MangoChat </H1>
                <Span>is a chat app developed with react native and laravel</Span>
                
            </Box>
        </Container>
    )
}

export default index