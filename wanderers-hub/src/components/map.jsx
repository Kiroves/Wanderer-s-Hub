import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import { int } from 'three/examples/jsm/nodes/shadernode/ShaderNode';
import countryWanderers from '@/app/api/openAI';

var map;
var placeId = '';
var references = [];


const GoogleMapsComponent = () => {
  const googleMapsAPIkey = process.env.NEXT_PUBLIC_REACT_APP_MAPS_API_KEY;

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
      const answer = searchPlace(firstWords[0], 5).then(result=>{
        console.log(result);
      });
      //console.log(photo);
    }
    else if (storageCity !== null) {
      const cityResult = await handler.queryActivity(storageCity, storageCountry);
      const firstWords = cityResult.map(sentence => {
        // Split the sentence by whitespace
        const words = sentence.trim().split(/[\n\s\\]+/);
        // Return the first word after trimming any leading/trailing whitespace
        return words[0];
        
      });
      const answer = searchPlace(firstWords[0]+storageCity+storageCountry, 12).then(result=>{
        console.log(result);
      });
      
    }
    else if (storageCountry !== null) {
      const countryResult = await handler.queryCity(storageCountry);
      const firstWords = countryResult.map(sentence => {
        // Split the sentence by whitespace
        const words = sentence.trim().split(/[\n\s\\]+/);
        // Return the first word after trimming any leading/trailing whitespace
        return words[0];
        
      });
      const answer = searchPlace(firstWords[0]+storageCountry, 7).then(result=>{
        console.log(result);
      });
    }
    else {
      console.log("oops")
    }
  }
  const searchPlace = async (q, zoom) => {

    var center = { lat: 0, lng: 0 };
    map = new google.maps.Map(
      document.getElementById('map'), { center:center, zoom: 0 }
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

    var geocoder= new google.maps.Geocoder();
    var mapOptions={
      placeId: placeId,
    }
    var latlonMap;
    await geocoder.geocode(mapOptions, function(results,status){
      if(status===google.maps.GeocoderStatus.OK){
        console.log(results);
        console.log(results[0].geometry.location);
        latlonMap=results[0].geometry.location;
      }
    });
    map = new google.maps.Map(
      document.getElementById('map'), { center:latlonMap, zoom: zoom }
    );
    
    await service.getDetails(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results.photos[1].getUrl());
        for (let i = 0; i < 5; i++) {
          references.push(results.photos[i].getUrl());
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

      <div className="flex w-[400px] h-screen items-center justify-center">
        <div id='map' className="absolute bg-green-500 text-white box-border h-screen w-96 p-4 border-4 rounded-md">map</div>
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
