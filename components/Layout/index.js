
// import { CSSReset } from '@chakra-ui/react'
import React from 'react'
import { Container, Box } from '@chakra-ui/react'
const Layout = ({ children }) => {

    return (
        <Container maxW="container.xl">
            {children}
        </Container>
    )
}

export default Layout