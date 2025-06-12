import Box from '@/components/ui/box'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import { H1, Span } from '@/components/ui/typographie'
import { Link } from 'expo-router'
import React from 'react'
const index = () => {
    return (
        <Container className='h-[100vh] flex items-center justify-center py-20'>
            <Box className='items-center justify-between gap-20 w-full h-full'>
                <Box className='w-full gap-5'>
                    <H1 className='font-bold text-center text-6xl'>Welecome to MangoChat </H1>
                    <Span className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias accusamus voluptates mollitia veritatis odit quia non nisi alias, similique beatae dolorem nulla harum quo cumque numquam illo blanditiis dolores.</Span>
                </Box>

                <Box className='items-center justify-center w-full gap-10'>
                    <Button>
                        Get Started
                    </Button>
                    <Link href='/auth/login' asChild>
                        <Button variant={"outline"} >
                            Add an existing account
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default index