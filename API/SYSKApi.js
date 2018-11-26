// API/TMDBApi.js
import { apiRoot } from '../Constants'

// -- CRUD FROM A LINK ----------------------------------------------------------
export function get (link) {
  return fetch(link)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function add (obj, link) {
  return fetch(link,
  {   method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(obj)
  })
  .then((response) => response.json())
  .catch((error) => console.error(error));
}

export function update (obj, link) {
  return fetch(link,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(obj)
  })
  .then((response) => response.json())
  .catch( err => console.error(err));
}

export function deleteWithLink (link) {
  return fetch(link, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error));
}

// -- CATEGORY -----------------------------------------------------------------
export function getAllCategories () {
  const url = `${apiRoot}/categories`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getCategoriesOfCity (city) {
  const url = `${apiRoot}/categories/${city}`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getACategory (id) {
  return fetch(`${apiRoot}/categories/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addCategory (category) {
  return fetch(`${apiRoot}/categories`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(category)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updateCategory (category, id) {
  return fetch(`${apiRoot}/categories/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(category)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deleteCategory (id) {
  return fetch(`${apiRoot}/categories/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}

// -- PLACE --------------------------------------------------------------------
export function getAllPlaces() {
  const url = `${apiRoot}/places`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getPlacesOfCityAndCat(city, cat) {
  const url = `${apiRoot}/places/city=${city}&category=${cat}`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getAPlace (id) {
  return fetch(`${apiRoot}/places/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addPlace (place) {
  return fetch(`${apiRoot}/places`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(place)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updatePlace (place, id) {
  return fetch(`${apiRoot}/places/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(place)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deletePlace (id) {
  return fetch(`${apiRoot}/places/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}

// -- PIC ----------------------------------------------------------------------
export function getAllPics () {
  const url = `${apiRoot}/pics`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getAPic (id) {
  return fetch(`${apiRoot}/pics/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addPic (pic) {
  return fetch(`${apiRoot}/pics`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(pic)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updatePic (pic, id) {
  return fetch(`${apiRoot}/pics/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(pic)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deletePic (id) {
  return fetch(`${apiRoot}/pics/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}

// -- COUNTRY ------------------------------------------------------------------
//Only get for countries
export function getAllCountries () {
  const url = `${apiRoot}/countries`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getACountry (id) {
  return fetch(`${apiRoot}/countries/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addCountry (country) {
  return fetch(`${apiRoot}/countries`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(country)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updateCountry (country, id) {
  return fetch(`${apiRoot}/countries/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(country)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deleteCountry (id) {
  return fetch(`${apiRoot}/countries/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}

// -- CITY ---------------------------------------------------------------------
export function getAllCities () {
  const url = `${apiRoot}/cities`
  return fetch(url)
    .then((response) => response._embedded.cities.json())
    .catch((error) => console.error(error))
}

export function getACity (id) {
  return fetch(`${apiRoot}/cities/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addCity (city) {
  return fetch(`${apiRoot}/cities`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(city)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updateCity (city, id) {
  return fetch(`${apiRoot}/cities/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(city)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deleteCity (id) {
  return fetch(`${apiRoot}/cities/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}

// -- PLACE CATEGORY -----------------------------------------------------------
export function getAllPlaceCategories () {
  const url = `${apiRoot}/placeCategories`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getAPlaceCategory (id) {
  return fetch(`${apiRoot}/placeCategories/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addPlaceCategory (plaCat) {
  return fetch(`${apiRoot}/placeCategories`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(plaCat)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updatePlaceCategory (plaCat, id) {
  return fetch(`${apiRoot}/placeCategories/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(plaCat)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deletePlaceCategory (id) {
  return fetch(`${apiRoot}/placeCategories/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}


// -- RATE ---------------------------------------------------------------------
export function getAllRates () {
  const url = `${apiRoot}/rates`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getARate (id) {
  return fetch(`${apiRoot}/rates/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addRate (rate) {
  return fetch(`${apiRoot}/rates`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(rate)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updateRate (rate, id) {
  return fetch(`${apiRoot}/rates/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(rate)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deleteRate (id) {
  return fetch(`${apiRoot}/rates/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}

// -- USER ---------------------------------------------------------------------
export function getAllUsers () {
  const url = `${apiRoot}/users`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getAUser (id) {
  return fetch(`${apiRoot}/users/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addUser (user) {
  return fetch(`${apiRoot}/users`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updateUser (user, id) {
  return fetch(`${apiRoot}/users/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(user)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deleteUser (id) {
  return fetch(`${apiRoot}/users/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}

// -- USER API -----------------------------------------------------------------
export function getAllUsersAPI () {
  const url = `${apiRoot}/userAPIs`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getAUserAPI (id) {
  return fetch(`${apiRoot}/userAPIs/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function addUserAPI (userAPI) {
  return fetch(`${apiRoot}/userAPIs`,
    {   method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(userAPI)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

export function updateUserAPI (userAPI, id) {
  return fetch(`${apiRoot}/userAPIs/${id}`,
  {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(userAPI)
  })
  .then((response) => response.json())
  .catch( err => console.error(err))
}

export function deleteUserAPI (id) {
  return fetch(`${apiRoot}/userAPIs/${id}`, {method: 'DELETE'})
  .then(response => response.json())
  .catch(error => console.error(error))
}
