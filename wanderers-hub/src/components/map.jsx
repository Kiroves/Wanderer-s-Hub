import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { int } from 'three/examples/jsm/nodes/shadernode/ShaderNode';
import countryWanderers from '@/app/api/openAI';
import { useEffect } from 'react';
var map;
var placeId = '';



const GoogleMapsComponent = ({selected, setPhotosArray, setBodyArray, setLoading}) => {
  const googleMapsAPIkey = process.env.NEXT_PUBLIC_REACT_APP_MAPS_API_KEY;
  const [body,setBody]=useState([]);
  
  useEffect(() => {
    if(selected!=-1){
      api();
    }
    
  }, [selected]);
  
  const handler = new countryWanderers();
  //center needs to be google.maps.LatLng(lat,lng);
  const api = async () => {
    const no = sessionStorage.getItem('no');
    const storageCity = sessionStorage.getItem('city');
    const storageCountry = sessionStorage.getItem('country');
    if (no === null && storageCity === null && storageCountry === null) {
      router.push('/')
    }
    if (no !== null) {
      if(body.length==0){
        handler.queryWanderers(no).then(result=>{
          setBody(result);
          setBodyArray(result);
        });
      }
      

      const firstWords = body.map(sentence => {
        // Split the sentence by whitespace
        const words = sentence.trim().split(/[\n\s\\]+/);
        // Return the first word after trimming any leading/trailing whitespace
        return words[0];
        
      });
      if(selected!=-1)
      {
        const answer = searchPlace(firstWords[selected], 5).then(result=>{
          setPhotosArray(result);
        });
      }
      
      //console.log(photo);
    }else if (storageCity !== null) {
      if(body.length==0){
        handler.queryActivity(storageCity, storageCountry).then(result=>{
          setBody(result);
          setBodyArray(result);
        })
      }
      
      const firstWords = body.map(sentence => {
        // Split the sentence by whitespace
        const words = sentence.trim().split(/[\n\s\\]+/);
        // Return the first word after trimming any leading/trailing whitespace
        return words[0];
        
      });
      if(selected!=-1)
      {
        const answer = searchPlace(firstWords[selected], 5).then(result=>{
          setPhotosArray(result);
        });
      }
      
    }else if (storageCountry !== null) {
      if(body.length==0){
        handler.queryCity(storageCountry).then(result=>{
          setBody(result);
          setBodyArray(result);
        })
      }
      const firstWords = body.map(sentence => {
        // Split the sentence by whitespace
        const words = sentence.trim().split(/[\n\s\\]+/);
        // Return the first word after trimming any leading/trailing whitespace
        return words[0];
        
      });
      if(selected!=-1)
      {
        const answer = searchPlace(firstWords[selected], 5).then(result=>{
          setPhotosArray(result);
        });
      }
    }
    else {
      console.log("oops")
    }
  }
  const searchPlace = async (q, zoom) => {

    var center = { lat: 0, lng: 0 };
    var map = new google.maps.Map(
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
    var references = [];
    service.getDetails(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //console.log(results.photos[1].getUrl());
        for (let i = 0; i < 5; i++) {
          references.push(results.photos[i].getUrl());
        }
        console.log(references);
        setLoading(false);
        setPhotosArray(references);
      }
    }).then((result)=>{
      
      return references;
    }).catch((e)=>{
      return e;
    });
    
    
  };
  return (
    <LoadScript
      googleMapsApiKey={googleMapsAPIkey}
      libraries={['places']}
    >

      <div className="relative">
        <div id = 'map' className="absolute bg-green-500 text-white box-border h-[250px] w-[300px] p-4 border-4 rounded-[40px]">
        <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script> 
        </div>
      </div>
    </LoadScript>
  );
};


export default GoogleMapsComponent;