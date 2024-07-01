INSERT INTO hospede
(id, documento, nome, telefone)
VALUES
    (63, '023.994.937-45', 'Manuel Fábio Vinicius Corte Real', '(85) 98296-5108 '),
    (64, '378.620.593-01', 'Caleb Yago Ribeiro', '(42) 98833-7692 '),
    (65, '052.979.666-04', 'Emily Yasmin Moraes', ' (85) 3801-7691'),
    (66, '583.935.472-45', 'Milena Cecília Luana Assis', ' (51) 3620-7716'),
    (67, '825.757.875-48', 'Noah Filipe Castro', '(69) 99712-2486 '),
    (68, '610.904.548-99', 'Rita Alessandra da Mata', ' (27) 3714-7967'),
    (69, '961.358.069-71', 'Leonardo Daniel Barbosa', ' (83) 3652-8874'),
    (70, '186.924.795-78', 'Pedro Henrique Caleb Henry Oliveira', '(27) 99981-3796 '),
    (71, '029.640.469-13', 'Augusto Daniel Ian Jesus', '(67) 98689-1055 '),
    (72, '850.676.222-70', 'Sophia Sônia Souza', ' (96) 3725-1582')
ON CONFLICT DO NOTHING;

INSERT INTO reserva
(id, data_entrada, data_saida, numero_quarto, hospede_id, check_in, check_out, necessita_estacionamento)
VALUES
    (9, '2024-06-12 00:00:00.000', '2024-06-17 00:00:00.000', 4, 66, true, true, true),
    (10, '2024-06-30 00:00:00.000', '2024-07-10 00:00:00.000', 5, 67, true, false, false),
    (6, '2024-06-03 00:00:00.000', '2024-06-07 00:00:00.000', 1, 63, true, true, true),
    (7, '2024-06-05 00:00:00.000', '2024-06-07 00:00:00.000', 2, 64, true, true, true),
    (8, '2024-06-10 00:00:00.000', '2024-06-17 00:00:00.000', 3, 65, true, true, false),
    (11, '2024-06-24 00:00:00.000', '2024-06-30 00:00:00.000', 1, 71, false, false, true),
    (12, '2024-06-27 00:00:00.000', '2024-07-04 00:00:00.000', 3, 72, false, false, true)
ON CONFLICT DO NOTHING;

