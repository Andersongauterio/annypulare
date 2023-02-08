INSERT INTO categorias (nome, descricao) VALUES ('Shampoo', 'Usado para lavagem de cabelos');
INSERT INTO categorias (nome, descricao) VALUES ('Condicionador', 'Usado para hidratação do cabelo');
INSERT INTO categorias (nome, descricao) VALUES ('Sabonete', 'Usado limpeza do corpo');
INSERT INTO categorias (nome, descricao) VALUES ('Sabonete Liquído', 'Usado limpeza do corpo');

INSERT INTO insumos (nome, descricao, qtde_estoque, unidade_medida) VALUES ('Base Galenica 1', 'Insumo para fazer Shampoo', 0, 'KG');
INSERT INTO insumos (nome, descricao, qtde_estoque, unidade_medida) VALUES ('Base Galenica 2', 'Insumo para fazer Condicionador', 10, 'KG');
INSERT INTO insumos (nome, descricao, qtde_estoque, unidade_medida) VALUES ('Base Galenica 3', 'Insumo para fazer creme hidratante', 5, 'KG');
INSERT INTO insumos (nome, descricao, qtde_estoque, unidade_medida) VALUES ('Base Galenica 4', 'Insumo para fazer sabonete liquido', 10, 'KG');
INSERT INTO insumos (nome, descricao, qtde_estoque, unidade_medida) VALUES ('Base Galenica 5', 'Insumo para fazer Shampoo para cabelo liso', 10, 'KG');

INSERT INTO produto (nome, descricao, modo_de_preparo, propriedades, qtde_estoque, tamanho, categoria_id) VALUES ('Shampoo Anti Caspa', 'Ajuda no compate a caspa', 'Mistura tudo e embala', 'Limpa e refresca o couro cabeludo', 10, '300 ml', 1);
INSERT INTO produto (nome, descricao, modo_de_preparo, propriedades, qtde_estoque, tamanho, categoria_id) VALUES ('Shampoo Anti Caspa', 'Ajuda no compate a caspa', 'Mistura tudo e embala', 'Limpa e refresca o couro cabeludo', 10, '300 ml', 1);
INSERT INTO produto (nome, descricao, modo_de_preparo, propriedades, qtde_estoque, tamanho, categoria_id) VALUES ('Shampoo Anti Caspa', 'Ajuda no compate a caspa', 'Mistura tudo e embala', 'Limpa e refresca o couro cabeludo', 10, '300 ml', 1);
INSERT INTO produto (nome, descricao, modo_de_preparo, propriedades, qtde_estoque, tamanho, categoria_id) VALUES ('Shampoo Anti Caspa', 'Ajuda no compate a caspa', 'Mistura tudo e embala', 'Limpa e refresca o couro cabeludo', 10, '300 ml', 1);
INSERT INTO produto (nome, descricao, modo_de_preparo, propriedades, qtde_estoque, tamanho, categoria_id) VALUES ('Shampoo Anti Caspa', 'Ajuda no compate a caspa', 'Mistura tudo e embala', 'Limpa e refresca o couro cabeludo', 10, '300 ml', 1);

INSERT INTO insumo_produto (qtde, unidade_medida, produto_id, insumo_id) VALUES (10,'ML', 1, 1);
INSERT INTO insumo_produto (qtde, unidade_medida, produto_id, insumo_id) VALUES (10,'ML', 1, 2);
INSERT INTO insumo_produto (qtde, unidade_medida, produto_id, insumo_id) VALUES (10,'ML', 1, 3);
INSERT INTO insumo_produto (qtde, unidade_medida, produto_id, insumo_id) VALUES (10,'ML', 1, 4);
INSERT INTO insumo_produto (qtde, unidade_medida, produto_id, insumo_id) VALUES (10,'ML', 2, 1);
INSERT INTO insumo_produto (qtde, unidade_medida, produto_id, insumo_id) VALUES (10,'ML', 2, 2);
INSERT INTO insumo_produto (qtde, unidade_medida, produto_id, insumo_id) VALUES (10,'ML', 2, 3);
INSERT INTO insumo_produto (qtde, unidade_medida, produto_id, insumo_id) VALUES (10,'ML', 3, 4); 