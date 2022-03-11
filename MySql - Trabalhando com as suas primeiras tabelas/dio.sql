CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCLEMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES ('Tiago', '1994-05-08')
INSERT INTO pessoas (nome, nascimento) VALUES ('João', '1992-05-15')
INSERT INTO pessoas (nome, nascimento) VALUES ('Jaqueline', '1990-08-02')
INSERT INTO pessoas (nome, nascimento) VALUES ('Renata', '1996-07-10')