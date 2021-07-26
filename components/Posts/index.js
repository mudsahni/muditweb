
// import { CSSReset } from '@chakra-ui/react'
import React from 'react'
import { Flex, SimpleGrid, Container } from '@chakra-ui/react'

const Posts = ({ children }) => {

    return (
        <SimpleGrid minChildWidth="45%" spacing="12px" marginBottom="64px">

            <Flex background="#fff" borderRadius="12px" height="150px" opacity="0.8" align="center" justify="center">
                <Flex background="#B3C2BA" opacity='0.6' height="80%" width="95%" borderRadius="12px" ></Flex>
            </Flex>
            <Flex background="#fff" borderRadius="12px" height="150px" opacity="0.8" align="center" justify="center">
                <Flex background="#E2EDF7" opacity='0.6' height="80%" width="95%" borderRadius="12px" ></Flex>

            </Flex>
            <Flex background="#fff" borderRadius="12px" height="150px" opacity="0.8">
            </Flex>
            <Flex background="#fff" borderRadius="12px" height="150px" opacity="0.8">
            </Flex>

        </SimpleGrid>
    )
}

export default Posts