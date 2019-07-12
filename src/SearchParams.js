import React, { useState, useEffect } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropDown';

const SearchParams = () => {
  const [location, updateLocation] = useState("San Francisco")
  //const [animal, updateAnimal] = useState("");
  //const [breed, updateBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
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