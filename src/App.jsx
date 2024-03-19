import { Button, Center, Container, Grid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon'
import Search from './components/Search'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)
  const [query, setQuery] = useState(null)
  const [loading, setLoading] = useState(false)

  const getPokemon = async () => {
    try {
      setLoading(true)

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)

      const pokemonPromise = data.results.map(async pokemon => {
        const { data } = await axios.get(pokemon.url);

        return data
      });

      const pokemonData = await Promise.all(pokemonPromise)

      setPokemons(prev => [...prev, ...pokemonData])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    getPokemon()
  }, [offset])

  return (
    <Container maxW={'container.lg'}>
      <Search />
      <Grid templateColumns={'repeat(4, 1fr)'} gap={4} rowGap={14}>
        {
          pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
        }
      </Grid>
      <Center my={20}>
        <Button onClick={() => setOffset(offset + 20)} colorScheme='blue'>Carregar Mais Pokémon</Button>
      </Center>
    </Container>
  )
}

export default App
