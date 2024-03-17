import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import { int } from 'three/examples/jsm/nodes/shadernode/ShaderNode';

var map;
var placeId='';
var references=[];
export const searchPlace =async (q  , lat, lng) => {
  var center = {lat:lat, lng:lng};
  map = new google.maps.Map(
    document.getElementById('map'),{center,zoom:7}
  )
  var request={
    query:q,
    fields:['place_id'],
  };


  var service = new google.maps.places.PlacesService(map);

  await service.findPlaceFromQuery(request,function(results,status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
      placeId=results[0].place_id;
    }
  });
  console.log(placeId);
  request={
    placeId:placeId,
    fields:['photos']
  };
  const opts={
    maxHeight:int,
    maxWidth:int,
  };
  await service.getDetails(request,function(results,status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results.photos[1].getUrl());
      for(let i =0; i<5; i++){
        references.push(results.photos[i].getUrl([opts]));
      }
    }
  });
  return references;
};

const GoogleMapsComponent = () => {
  const googleMapsAPIkey = process.env.NEXT_PUBLIC_REACT_APP_MAPS_API_KEY;
  //center needs to be google.maps.LatLng(lat,lng);

  return (
    <LoadScript
      googleMapsApiKey={googleMapsAPIkey}
      libraries={['places']}
    >
      
        <div className="flex h-screen items-center justify-center">
          <div id='map' className="bg-green-500 text-white box-border h-32 w-32 p-4 border-4 rounded-md">map</div>
        </div>
        <div className="absolute bottom-0 left-0">
          <button onClick={() => searchPlace("Vancouver",49.2827, -123.1207)} className="bg-green-500 text-white px-4 py-2 rounded-full">
            Search Place
          </button>
        </div>
    </LoadScript>
  );
};


export default GoogleMapsComponent;