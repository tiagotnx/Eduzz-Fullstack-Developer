-- Primeiros passos na criação de suas tabelas

CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCLEMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
);

INSERT INTO pessoas (nome, nascimento) VALUES ('Tiago', '1994-05-08');
INSERT INTO pessoas (nome, nascimento) VALUES ('João', '1992-05-15');
INSERT INTO pessoas (nome, nascimento) VALUES ('Jaqueline', '1990-08-02');
INSERT INTO pessoas (nome, nascimento) VALUES ('Renata', '1996-07-10');


--Realizando manutenção de suas tabelas

UPDATE pessoas SET nome = ‘Nathally Souza’;

UPDATE pessoas SET nome = ‘Nathally Souza’ WHERE
id=1;

DELETE FROM pessoas WHERE id=1;

SELECT * FROM pessoas ORDER BY nome;

SELECT COUNT(qtd), GENERO FROM pessoas GROUP BY
genero;