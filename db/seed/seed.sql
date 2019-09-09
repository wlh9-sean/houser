CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name TEXT,
    address TEXT,
    city TEXT,
    state VARCHAR(2),
    zip INTEGER
)



INSERT INTO houses 
(name, address, city, state, zip)
VALUES
('Layton House', '1951 E 1300 N', 'Layton', 'UT', 84040),
('Princeton House', '1574 Princeton Ave', 'Salt Lake City', 'UT', 84105),
('Boutqie Place', '1305 S 900 E', 'Salt Lake City', 'UT', 84105)