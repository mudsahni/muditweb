
// import { CSSReset } from '@chakra-ui/react'
import React from 'react'
import { Flex, SimpleGrid, Image, Text } from '@chakra-ui/react'
import Trex from '../Trex'
const Posts = ({ children }) => {

    return (
        <SimpleGrid minChildWidth="100%" spacing="32px" marginBottom="64px" marginTop="64px">
            <Flex align='center' justify="center">
                {
                    // <Image src="trexretro.svg" width={500}></Image>
                }

                <Trex />





            </Flex>
            <Flex align='center' justify="center" flexDirection="column">
                <Text fontFamily="Indie Flower" fontSize="64px" color="#322938">mudit sahni.</Text>


            </Flex>

        </SimpleGrid>


    )
}

export default Posts