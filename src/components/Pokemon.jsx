import { Box, Flex, Heading, Highlight, Image } from '@chakra-ui/react'
import React from 'react'
import { pokemonColor } from '../utils'

const stringPad = (pokemonId) => {
    pokemonId = pokemonId.toString()

    if (pokemonId.length >= 4) {
        return
    }

    return '0'.repeat(4 - pokemonId.length) + pokemonId;
}

const toCapitalize = (pokemonName) => {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
}

function Pokemon({ pokemon }) {
    return (
        <Box>
            <Image bg={'gray.100'} w={'full'} p={14} borderRadius={'md'} src={pokemon.sprites.front_default} />
            <Box ml={5}>
                <Heading mt={1} color={'gray.500'} size={'xs'}>Nº {stringPad(pokemon.id)}</Heading>
                <Heading mt={3} size={'lg'}>{toCapitalize(pokemon.name)}</Heading>
                <Flex gap={1} mt={2}>
                    {
                        pokemon.types.map((types, i) => (
                            <Highlight key={i} query={types.type.name} styles={{
                                px: 5, py: 1, rounded: 'base', ...pokemonColor[types.type.name]
                            }}>{toCapitalize(types.type.name)}</Highlight>
                        ))
                    }
                </Flex>
            </Box>
        </Box >
    )
}

export default Pokemon