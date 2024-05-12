SELECT count(*) AS books, author FROM freewsad_book
INNER JOIN freewsad_language ON freewsad_language.id = freewsad_book.language_id
WHERE code = "ar"
GROUP BY author ORDER BY books DESC;



SELECT count(*) AS books, author FROM freewsad_book 
WHERE freewsad_book.language_id IN (SELECT id FROM freewsad_language WHERE code = "ar")
GROUP BY author ORDER BY books DESC;