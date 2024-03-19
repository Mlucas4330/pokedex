import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function Search() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex>
                            <Box>
                                <Heading>Tipo e Fraqueza</Heading>
                            </Box>
                        </Flex>
                        <FormLabel>Intervalo de números</FormLabel>
                        <Input type='number'></Input> - <Input type='number'></Input>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup>
                            <Button colorScheme='gray'>Redefinir</Button>
                            <Button colorScheme='orange' leftIcon={<SearchIcon />}>
                                Pesquisar
                            </Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Flex justifyContent={'space-between'} gap={2}>
                <Button onClick={onOpen} colorScheme='blue'>Mostrar busca avançada</Button>


                {/* <FormLabel>Organizar por</FormLabel> */}
                <Select placeholder='Selecione' >
                    <option value="crescente_num">Menor número primeiro</option>
                    <option value="decrescente_num">Maior número primeiro</option>
                    <option value="crescente_alf">A-Z</option>
                    <option value="decrescente_alf">Z-A</option>
                </Select>

            </Flex>
        </>
    )
}

export default Search