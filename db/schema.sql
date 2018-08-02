
DROP TABLE IF EXISTS user_group, user_article, users, groups, comments, articles; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(55) UNIQUE NOT NULL,
    password VARCHAR(55) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
);

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    group_name VARCHAR (255),
    description TEXT NOT NULL,
    created_by INTEGER REFERENCES users (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    author VARCHAR(55) REFERENCES users (username),
    content TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW(),
    article_url VARCHAR(255) REFERENCES articles (url);
);

CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    source VARCHAR(255) NOT NULL,
);

CREATE TABLE user_group (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    group_id INTEGER REFERENCES groups (id) ON DELETE CASCADE,
);

CREATE TABLE group_article (
    id SERIAL PRIMARY KEY,
    group_id INTEGER REFERENCES groups (id) ON DELETE CASCADE,
    article_id INTEGER REFERENCES articles (id) ON DELETE CASCADE,
);