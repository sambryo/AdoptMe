import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropDown';

const SearchParams = () => {
  const [location, updateLocation] = useState("San Francisco")
  //const [animal, updateAnimal] = useState("");
  //const [breed, updateBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    updateBreeds([]);
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal]);

  const [pets, setPets] = useState([]);
  // below state declarations 
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  return (
    <div className="search-params">
      <form onSubmit={e => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}

          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />


        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;