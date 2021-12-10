import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from '../config';
import { useHistory } from 'react-router-dom';



const HomePage = ({ countries, setCountries }) => {
  console.log(countries)
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const handleSearch = (search, region) => {
    let data = [...countries]
    if (region) {
      data = data.filter(el => el.region.includes(region))
    }
    if (search) {
      data = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFilteredCountries(data)
  }


  const { push } = useHistory();

  useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [countries.length, setCountries])

  useEffect(() => {
    handleSearch();
  }, [countries])


  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((el) => {
          const countryInfo = {
            img: el.flags.png,
            name: el.name,
            info: [
              {
                title: 'Population',
                description: el.population.toLocaleString()
              },
              {
                title: 'Region',
                description: el.region
              },
              {
                title: 'Capital',
                description: el.capital
              }
            ],
          };
          return <Card key={el.name} onClick={() => push(`/country/${el.name}`)} {...countryInfo} />
        })}
      </List>
    </>
  )
}
export default HomePage