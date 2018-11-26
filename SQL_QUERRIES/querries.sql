
--Get all categories of a City --> have to be transform for SpringBoot
SELECT DISTINCT(category_name) FROM category c
JOIN place_category pc ON c.id = pc.id_category
JOIN place p ON pc.id_place = p.id
JOIN city ci ON p.id_city = ci.id
WHERE ci.name_city="Berlin";


--Get places of a city and a category
SELECT p FROM Place p
JOIN City ci ON p.city = ci.idCity
JOIN PlaceCategory pc ON p.idPlace = pc.place
JOIN Category c ON c.idCategory = pc.category
WHERE ci.nameCity="Berlin" AND c.categoryName="Club";
