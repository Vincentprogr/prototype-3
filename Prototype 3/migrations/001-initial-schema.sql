-- Up

CREATE TABLE Werftijden (
	id INTEGER PRIMARY KEY,
	[Datum] STRING,
	[Werf] STRING,
	[Beginuur] STRING,
	[Einduur] STRING,
	[Naam] STRING,
	[Uren] STRING
);

-- Down

DROP TABLE Werftijden;