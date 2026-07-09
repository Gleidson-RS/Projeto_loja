const produtos = [
    { id_produto: 1, descricao_produto: "Kit Limpeza Geral", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-geral.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 2, descricao_produto: "Kit Limpeza Ácida", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-acida.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 3, descricao_produto: "Kit Limpeza Vidros", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-vidros.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 4, descricao_produto: "Kit Limpeza Interiores", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-interiores.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 5, descricao_produto: "Kit Limpeza Estofados", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-estofados.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 6, descricao_produto: "Kit Limpeza Borrachas", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-borrachas.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 7, descricao_produto: "Kit Limpeza Tecido Frágil", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-tecido-fragil.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 8, descricao_produto: "Kit Limpeza Rodas", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-rodas.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 9, descricao_produto: "Kit Limpeza Lataria", valor_unitario: 60.00, unidade: "UN", caminho_imagem: "../kit-limpeza-lataria.jpg", id_secao: 1, secao: "Kits" },
    { id_produto: 10, descricao_produto: "Kit Higienização Completa", valor_unitario: 75.00, unidade: "UN", caminho_imagem: "../kit-higienizacao.jpg", id_secao: 1, secao: "Kits" },
  
    { id_produto: 11, descricao_produto: "Shampoo Automotivo 1L", valor_unitario: 29.90, unidade: "UN", caminho_imagem: "../shampoo-1l.jpg", id_secao: 2, secao: "Lavagem" },
    { id_produto: 12, descricao_produto: "Desengraxante 500ml", valor_unitario: 24.90, unidade: "UN", caminho_imagem: "../desengraxante.jpg", id_secao: 2, secao: "Lavagem" },
    { id_produto: 13, descricao_produto: "Limpa Rodas", valor_unitario: 34.90, unidade: "UN", caminho_imagem: "../limpa-rodas.jpg", id_secao: 2, secao: "Lavagem" },
    { id_produto: 14, descricao_produto: "Lava Autos Concentrado", valor_unitario: 39.90, unidade: "UN", caminho_imagem: "../lava-autos.jpg", id_secao: 2, secao: "Lavagem" },
    { id_produto: 15, descricao_produto: "Limpa Vidros 500ml", valor_unitario: 18.90, unidade: "UN", caminho_imagem: "../limpa-vidros.jpg", id_secao: 2, secao: "Lavagem" },
  
    { id_produto: 16, descricao_produto: "Cera Líquida", valor_unitario: 49.90, unidade: "UN", caminho_imagem: "../cera-liquida.jpg", id_secao: 3, secao: "Proteção" },
    { id_produto: 17, descricao_produto: "Cera em Pasta", valor_unitario: 54.90, unidade: "UN", caminho_imagem: "../cera-pasta.jpg", id_secao: 3, secao: "Proteção" },
    { id_produto: 18, descricao_produto: "Selante Sintético", valor_unitario: 69.90, unidade: "UN", caminho_imagem: "../selante.jpg", id_secao: 3, secao: "Proteção" },
    { id_produto: 19, descricao_produto: "Cristalizador de Pintura", valor_unitario: 89.90, unidade: "UN", caminho_imagem: "../cristalizador.jpg", id_secao: 3, secao: "Proteção" },
    { id_produto: 20, descricao_produto: "Impermeabilizante Tecidos", valor_unitario: 79.90, unidade: "UN", caminho_imagem: "../impermeabilizante.jpg", id_secao: 3, secao: "Proteção" },
  
    { id_produto: 21, descricao_produto: "Pano de Microfibra", valor_unitario: 15.90, unidade: "UN", caminho_imagem: "../microfibra.jpg", id_secao: 4, secao: "Acessórios" },
    { id_produto: 22, descricao_produto: "Esponja de Lavagem", valor_unitario: 12.90, unidade: "UN", caminho_imagem: "../esponja.jpg", id_secao: 4, secao: "Acessórios" },
    { id_produto: 23, descricao_produto: "Escova para Rodas", valor_unitario: 22.90, unidade: "UN", caminho_imagem: "../escova-rodas.jpg", id_secao: 4, secao: "Acessórios" },
    { id_produto: 24, descricao_produto: "Aplicador de Cera", valor_unitario: 9.90, unidade: "UN", caminho_imagem: "../aplicador.jpg", id_secao: 4, secao: "Acessórios" },
    { id_produto: 25, descricao_produto: "Pulverizador 500ml", valor_unitario: 16.90, unidade: "UN", caminho_imagem: "../pulverizador.jpg", id_secao: 4, secao: "Acessórios" },
  
    { id_produto: 26, descricao_produto: "Pretinho para Pneus", valor_unitario: 19.90, unidade: "UN", caminho_imagem: "../pretinho.jpg", id_secao: 5, secao: "Acabamento" },
    { id_produto: 27, descricao_produto: "Revitalizador de Plásticos", valor_unitario: 32.90, unidade: "UN", caminho_imagem: "../plasticos.jpg", id_secao: 5, secao: "Acabamento" },
    { id_produto: 28, descricao_produto: "Silicone Líquido", valor_unitario: 27.90, unidade: "UN", caminho_imagem: "../silicone.jpg", id_secao: 5, secao: "Acabamento" },
    { id_produto: 29, descricao_produto: "Renovador de Couro", valor_unitario: 44.90, unidade: "UN", caminho_imagem: "../couro.jpg", id_secao: 5, secao: "Acabamento" },
    { id_produto: 30, descricao_produto: "Odorizador Automotivo", valor_unitario: 14.90, unidade: "UN", caminho_imagem: "../odorizador.jpg", id_secao: 5, secao: "Acabamento" },
  
    { id_produto: 31, descricao_produto: "Descontaminante Ferroso", valor_unitario: 64.90, unidade: "UN", caminho_imagem: "../ferroso.jpg", id_secao: 6, secao: "Detalhamento" },
    { id_produto: 32, descricao_produto: "Clay Bar", valor_unitario: 49.90, unidade: "UN", caminho_imagem: "../claybar.jpg", id_secao: 6, secao: "Detalhamento" },
    { id_produto: 33, descricao_produto: "Lubrificante Clay", valor_unitario: 34.90, unidade: "UN", caminho_imagem: "../lubrificante-clay.jpg", id_secao: 6, secao: "Detalhamento" },
    { id_produto: 34, descricao_produto: "Composto Polidor Corte", valor_unitario: 79.90, unidade: "UN", caminho_imagem: "../polidor-corte.jpg", id_secao: 6, secao: "Detalhamento" },
    { id_produto: 35, descricao_produto: "Composto Polidor Refino", valor_unitario: 79.90, unidade: "UN", caminho_imagem: "../polidor-refino.jpg", id_secao: 6, secao: "Detalhamento" },
    { id_produto: 36, descricao_produto: "Composto Polidor Lustro", valor_unitario: 79.90, unidade: "UN", caminho_imagem: "../polidor-lustro.jpg", id_secao: 6, secao: "Detalhamento" },
  
    { id_produto: 37, descricao_produto: "Boina de Espuma Corte", valor_unitario: 39.90, unidade: "UN", caminho_imagem: "../boina-corte.jpg", id_secao: 7, secao: "Polimento" },
    { id_produto: 38, descricao_produto: "Boina de Espuma Refino", valor_unitario: 39.90, unidade: "UN", caminho_imagem: "../boina-refino.jpg", id_secao: 7, secao: "Polimento" },
    { id_produto: 39, descricao_produto: "Boina de Lã", valor_unitario: 45.90, unidade: "UN", caminho_imagem: "../boina-la.jpg", id_secao: 7, secao: "Polimento" },
    { id_produto: 40, descricao_produto: "Luva de Microfibra", valor_unitario: 24.90, unidade: "UN", caminho_imagem: "../luva-microfibra.jpg", id_secao: 7, secao: "Polimento" }
  ];

export{produtos}