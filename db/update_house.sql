UPDATE houses
SET name = ${name}, address = ${address}, city = ${city}, state = ${state}, zip = ${zip}
WHERE id = ${id};

SELECT * FROM houses