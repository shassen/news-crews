
DROP TABLE IF EXISTS user_group;
DROP TABLE IF EXISTS group_article;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS articles;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(64) UNIQUE NOT NULL,
    password_digest VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255),
    description TEXT NOT NULL,
    created_by VARCHAR(64) REFERENCES users (username) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- CREATE TABLE articles (
--     id SERIAL PRIMARY KEY,
--     source VARCHAR(255) NOT NULL,
--     urlimg VARCHAR(255) NOT NULL,
--     url VARCHAR(255) NOT NULL
-- );

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    author VARCHAR(64) REFERENCES users (username),
    content TEXT NOT NULL,
    url VARCHAR(255),
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
    -- article_id INTEGER REFERENCES articles (id)
);

CREATE TABLE user_group (
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    group_id INTEGER REFERENCES groups (id) ON DELETE CASCADE,
    PRIMARY KEY(user_id, group_id)
);

-- CREATE TABLE group_article (
--     id SERIAL PRIMARY KEY,
--     group_id INTEGER REFERENCES groups (id) ON DELETE CASCADE,
--     article_id INTEGER REFERENCES articles (id) ON DELETE CASCADE
-- );