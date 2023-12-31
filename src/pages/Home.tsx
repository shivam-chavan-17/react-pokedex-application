import usePokemons from "../Hooks/usePokemons"
import Pokemonlist from "../components/Pokemonlist"
import { Button, Container, Grid } from "@mui/material"
import { IndexedType } from "../interface/pokemon.interface"

const Home = () => {
    const {pokemons, hasMorePokemon, fetchNextPage, pokemonTypes, setSelectedType, selectedType, setPokemons} = usePokemons()


    const handleSelectType = (type: IndexedType | null) => {
        if(type){
            setSelectedType(type)
        }
        else{
            setPokemons([])
            setSelectedType(null)
        }
    }

    return (
        <Container>
            <Grid container spacing={2} mt={1}>
                <Grid container item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                    {pokemonTypes.map((type)=>(
                        <Button
                        variant="contained"
                        sx={{
                          "&.MuiButton-contained": {
                            background: type.color,
                          },
                          m: 1,
                        }}
                        onClick={() => handleSelectType(type)}
                      >
                        {type.name}
                      </Button>
                    ))}
                    <Button
                        variant="contained"
                        sx={{
                            m: 1,
                          }}
                          onClick={() => handleSelectType(null)}
                    >All</Button>
                </Grid>
                <Grid container item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                <Pokemonlist pokemons={pokemons}></Pokemonlist>
                    {hasMorePokemon ? (
                    <Button variant="contained" onClick={fetchNextPage} >Load More Pokemon</Button>
            ): null}
                </Grid>
            </Grid>
            
        </Container>
    );
}

export default Home
