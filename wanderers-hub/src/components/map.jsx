import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import { int } from 'three/examples/jsm/nodes/shadernode/ShaderNode';
import countryWanderers from '@/app/api/openAI';
import { useEffect } from 'react';
var map;
var placeId = '';
var references = [];


const GoogleMapsComponent = () => {
  const googleMapsAPIkey = process.env.NEXT_PUBLIC_REACT_APP_MAPS_API_KEY;
  useEffect(() => {
    searchPlace("vancouver", 0, 0);
  }, []);
  const handler = new countryWanderers();
  //center needs to be google.maps.LatLng(lat,lng);
  const api = async () => {
    console.log("ao;iwjdaoi;jdoa j");
    const no = sessionStorage.getItem('no');
    const storageCity = sessionStorage.getItem('city');
    const storageCountry = sessionStorage.getItem('country');
    if (no === null && storageCity === null && storageCountry === null) {
      router.push('/')
    }
    if (no !== null) {
      const noResult = await handler.queryWanderers(no);

      const firstWords = noResult.map(sentence => {
        // Split the sentence by whitespace
        const words = sentence.trim().split(/[\n\s\\]+/);
        // Return the first word after trimming any leading/trailing whitespace
        return words[0];
      });
      const latLonPromises = firstWords.map(async (word) => {
        try {
          const latlon = await handler.getLatLngCountry(word);
          console.log(latlon);
          return latlon;
        } catch (error) {
          // Handle errors if needed
          console.error(`Error fetching latlng for ${word}:`, error);
          return null;
        }
      });
      const lats = [];
      const lons = [];

      Promise.all(latLonPromises)
        .then((latLons) => {
          const lats = [];
          const lons = [];
          console.log(latLons);
          latLons.forEach(latlon => {
            if (latlon) {
              const [lat, lon] = latlon.trim().split(' ');
              lats.push(parseFloat(lat));
              lons.push(parseFloat(lon));
            }
          });
          console.log(lats);
          // Now you can use lats and lons here
          console.log(lats[0]);
          console.log(searchPlace(firstWords[0], lats[0], lons[0]));
        })
        .catch((error) => {
          // Handle errors if needed
          console.error("Error fetching latlng for multiple countries:", error);
        });

      //console.log(photo);
    }
    else if (storageCity !== null) {
      const cityResult = await handler.queryActivity(storageCity, storageCountry);
      const firstword = cityResult.split(' ')[0];
      const latlon = await handler.getLatLngCity(storageCity, storageCountry);
      const lat = latlon.split(' ')[0];
      const lon = latlon.split(' ')[1];
      setPhotos(searchPlace(firstword, lat, lon));
      console.log(photo);
    }
    else if (storageCountry !== null) {
      const countryResult = await handler.queryCity(storageCountry);
      const firstword = countryResult.split(' ')[0];
      const latlon = await handler.getLatLngCity(firstword, storageCountry);
      const lat = latlon.split(' ')[0];
      const lon = latlon.split(' ')[1];
      setPhotos(searchPlace(firstword, lat, lon));
      console.log(photo);
    }
    else {
      console.log("oops")
    }
  }
  const searchPlace = async (q, lat, lng) => {

    var center = { lat: lat, lng: lng };
    map = new google.maps.Map(
      document.getElementById('map'), { center, zoom: 7 }
    )
    var request = {
      query: q,
      fields: ['place_id'],
    };


    var service = new google.maps.places.PlacesService(map);

    await service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        placeId = results[0].place_id;
      }
    });
    console.log(placeId);
    request = {
      placeId: placeId,
      fields: ['photos']
    };
    const opts = {
      maxHeight: int,
      maxWidth: int,
    };
    await service.getDetails(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results.photos[1].getUrl());
        for (let i = 0; i < 5; i++) {
          references.push(results.photos[i].getUrl([opts]));
        }
      }
    });
    return references;
  };
  return (
    <LoadScript
      googleMapsApiKey={googleMapsAPIkey}
      libraries={['places']}
    >

      <div className="flex h-screen items-center justify-center">
        <div id='map' className="bg-green-500 text-white box-border h-32 w-32 p-4 border-4 rounded-md">map</div>
      </div>
      <div className="absolute bottom-0 left-0">
        <button onClick={api} className="bg-green-500 text-white px-4 py-2 rounded-full">
          Search Place
        </button>
      </div>
    </LoadScript>
  );
};


export default GoogleMapsComponent;
