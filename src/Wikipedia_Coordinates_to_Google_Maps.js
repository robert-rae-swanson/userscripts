// ==UserScript==
// @name         Wikipedia Coordinates to Google Maps
// @namespace    https://github.com/robert-rae-swanson/userscripts/
// @version      0.1
// @description  Replace Wikipedia Coordinates that link to their GeoHack tool, with Google Maps
// @author       Robert Swanson
// @copyright    Robert Swanson
// @match        *://*.wikipedia.org/*
// @grant        none
// @downloadURL  https://github.com/robert-rae-swanson/userscripts/blob/master/src/Wikipedia_Coordinates_to_Google_Maps.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var coordinatesSpan = document.getElementById('coordinates'); // how to be sure this is the coordinates element I want? Would like to be able to specify that I'm expecting this to be a span.
    //var coordinatesSpan = document.querySelectorAll('span#coordinates'); // doesn't work?

    var externalGeoHackLinkElement = coordinatesSpan.querySelectorAll('a.external')[0];

    // these return arrays, so grab the first index of each
    var latitudeSpan = coordinatesSpan.getElementsByClassName("latitude")[0];
    var longitudeSpan = coordinatesSpan.getElementsByClassName("longitude")[0];

    //console.log(latitudeSpan.innerText);
    //console.log(longitudeSpan.innerText);

    var googleMapsBaseUrl = 'https://www.google.ca/maps/place/' + latitudeSpan.innerText + longitudeSpan.innerText;

    externalGeoHackLinkElement.href = googleMapsBaseUrl;
})();
