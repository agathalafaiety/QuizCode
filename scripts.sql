CREATE TABLE perguntas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    titulo VARCHAR (500) NOT NULL,
    categoria_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY categoria_perguntas_fk (categoria_id) REFERENCES categorias(id)
);
CREATE TABLE respostas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    pergunta_id INT UNSIGNED NOT NULL,
    titulo VARCHAR (500) NOT NULL,
    correta VARCHAR (500) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY pergunta_resposta_fk (pergunta_id) REFERENCES perguntas(id)
) CREATE TABLE usuarios (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR (200) NOT NULL,
    email VARCHAR (200) NOT NULL,
    senha VARCHAR (200) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE categorias (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome_categoria VARCHAR (200) NOT NULL,
    PRIMARY KEY (id)
);