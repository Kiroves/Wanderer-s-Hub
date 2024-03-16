import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const GoogleMapsComponent = () => {
  const googleMapsAPIkey =  process.env.NEXT_PUBLIC_REACT_APP_MAPS_API_KEY;

  const searchPlace = async (q) => {
    const searchTextURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${googleMapsAPIkey}&query=${q}`;

    try {
      const response = await axios.get(searchTextURL);
      const placeId = response.data.results[0].place_id;

      const placeDetailsURL = `https://maps.googleapis.com/maps/api/place/details/json?fields=photos&place_id=${placeId}&key=${googleMapsAPIkey}`;
        
      try {
        const detailsResponse = await axios.get(placeDetailsURL);
        const references = detailsResponse.data.result.photos.map(photo => photo.photo_reference).slice(0, 5);
        photoReferences= (references);
      } catch (detailsError) {
        console.log('Error fetching place details:', detailsError);
      }
    } catch (error) {
      console.log('Error fetching place:', error);
    }
  };
    return (
        <div className="absolute top-0 left-0">
              <button onClick={() => searchPlace("vancouver")} className="bg-green-500 text-white px-4 py-2 rounded-full">test</button>
        </div>
    );
};

export default GoogleMapsComponent;