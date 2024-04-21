CREATE TABLE IF NOT EXISTS memos (
  id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL ,
  text TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT (datetime(CURRENT_TIMESTAMP,'localtime'))
);

