-- Criação da tabela "Forms"
  CREATE TABLE Forms (
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(255)
  );

-- Criação da tabela "Question_Types"
CREATE TABLE Question_Types (
  id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(255) NOT NULL,
  input VARCHAR(255) NOT NULL
);

-- Populando tabela Question_Types:
INSERT INTO question_types (id, TYPE, input) 
VALUES (1, 'Multiplaescolha', 'radioButton');
INSERT INTO question_types (id, TYPE, input) 
VALUES (2, 'Dissertativa', 'textArea');
INSERT INTO question_types (id, TYPE, input) 
VALUES (3, 'Dicotomica', 'radioButton');
INSERT INTO question_types (id, TYPE, input) 
VALUES (4, 'Resposta Unica', 'radioButton');

-- Criação da tabela "Questions"
CREATE TABLE Questions (
  id SERIAL PRIMARY KEY NOT NULL,
  form_id INT REFERENCES Forms(id),
  question_description TEXT,
  question_type INT REFERENCES Question_Types(id)
);

-- Criação da tabela "Answers"
CREATE TABLE Answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INT REFERENCES Questions(id),
  answer TEXT NOT NULL,
  user_id VARCHAR(255)
);

-- Criação da tabela "Answer_Options"
CREATE TABLE Answer_Options (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INT REFERENCES Questions(id),
  answer_option TEXT
);