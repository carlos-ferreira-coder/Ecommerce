# 📌 Casos de Uso — My Ecommerce

---

# 👥 Atores

## 👤 Cliente

Usuário que navega pela loja, realiza compras e acompanha seus pedidos.

## 🔐 Administrador

Responsável pela administração geral da loja e configuração da plataforma.

## 📦 Operador de Estoque

Responsável pelo controle do estoque e preparação dos pedidos.

## 💰 Operador Financeiro

Responsável pela gestão financeira, conciliações e estornos.

## 🧾 Operador Fiscal

Responsável pelos processos fiscais e emissão de documentos fiscais.

## 📊 Gestor

Responsável pelo acompanhamento de indicadores, dashboards e relatórios.

## 🔌 Gateway de Pagamento

Sistema externo responsável pelo processamento das transações financeiras.

## 🚚 Sistema Logístico

Sistema externo responsável pelo cálculo de frete, geração de etiquetas e atualização do status das entregas.

---

# 🛍️ Loja Virtual

---

## UC-LOJ-001 — Visualizar Página Inicial

### 🎯 Objetivo

Permitir que o cliente acesse a página inicial da loja e visualize os principais conteúdos disponíveis.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- A loja deve estar disponível.

### ✅ Pós-condições

- A página inicial é apresentada ao cliente.

### 🔄 Fluxo Principal

1. O cliente acessa a URL da loja.
2. O sistema carrega a página inicial.
3. O sistema exibe banners, categorias e produtos em destaque.

### 🔀 Fluxos Alternativos

#### A1. Loja indisponível

1. O sistema identifica indisponibilidade.
2. Exibe página de manutenção ou mensagem apropriada.

### 📜 Regras de Negócio

- RN006 — Todo produto deve possuir um estado operacional.
- RN009 — Produtos indisponíveis não podem ser comercializados.

---

## UC-LOJ-002 — Buscar Produtos

### 🎯 Objetivo

Permitir que o cliente encontre produtos por meio de pesquisa textual.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Existirem produtos cadastrados.

### ✅ Pós-condições

- A lista de produtos correspondente é apresentada.

### 🔄 Fluxo Principal

1. O cliente informa um termo de pesquisa.
2. O sistema processa a busca.
3. O sistema apresenta os resultados encontrados.

### 🔀 Fluxos Alternativos

#### A1. Nenhum resultado encontrado

1. O sistema informa que não foram encontrados produtos.

### 📜 Regras de Negócio

- RN006 — Todo produto deve possuir um estado operacional.
- RN007 — Apenas produtos completos podem ser publicados.

---

## UC-LOJ-003 — Filtrar Produtos

### 🎯 Objetivo

Permitir que o cliente refine os resultados por filtros.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Existirem filtros disponíveis.

### ✅ Pós-condições

- Produtos filtrados são apresentados.

### 🔄 Fluxo Principal

1. O cliente seleciona um ou mais filtros.
2. O sistema aplica os critérios.
3. O sistema atualiza a listagem.

### 🔀 Fluxos Alternativos

#### A1. Nenhum produto atende aos filtros

1. O sistema informa que não há resultados.

### 📜 Regras de Negócio

- RN006 — Todo produto deve possuir um estado operacional.
- RN009 — Produtos indisponíveis não podem ser comercializados.

---

## UC-LOJ-004 — Visualizar Produto

### 🎯 Objetivo

Permitir que o cliente visualize os detalhes de um produto.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Produto ativo.

### ✅ Pós-condições

- Página do produto exibida.

### 🔄 Fluxo Principal

1. O cliente seleciona um produto.
2. O sistema exibe informações completas.

### 🔀 Fluxos Alternativos

#### A1. Produto indisponível

1. O sistema informa indisponibilidade.

### 📜 Regras de Negócio

- RN007 — Apenas produtos completos podem ser publicados.
- RN009 — Produtos indisponíveis não podem ser comercializados.

---

## UC-LOJ-005 — Selecionar Variações

### 🎯 Objetivo

Permitir que o cliente escolha uma variante do produto.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Produto possuir variantes.

### ✅ Pós-condições

- Variante selecionada.

### 🔄 Fluxo Principal

1. O cliente escolhe uma variante.
2. O sistema atualiza preço, estoque e imagens.

### 🔀 Fluxos Alternativos

#### A1. Variante indisponível

1. O sistema informa indisponibilidade.

### 📜 Regras de Negócio

- RN011 — Variantes devem possuir gerenciamento independente.

---

## UC-LOJ-006 — Adicionar Produto ao Carrinho

### 🎯 Objetivo

Permitir que o cliente adicione produtos ao carrinho.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Produto ativo.
- Estoque disponível.

### ✅ Pós-condições

- Produto registrado no carrinho.

### 🔄 Fluxo Principal

1. O cliente seleciona quantidade.
2. Aciona "Adicionar ao Carrinho".
3. O sistema valida estoque.
4. O sistema adiciona o item.
5. Atualiza o resumo do carrinho.

### 🔀 Fluxos Alternativos

#### A1. Estoque insuficiente

1. O sistema informa indisponibilidade.

### 📜 Regras de Negócio

- RN009 — Produtos indisponíveis não podem ser comercializados.
- RN027 — O carrinho não garante reserva definitiva de estoque.
- RN041 — O estoque disponível não deve assumir saldo negativo.

---

## UC-LOJ-007 — Gerenciar Carrinho

### 🎯 Objetivo

Permitir alterações no carrinho.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Existir carrinho ativo.

### ✅ Pós-condições

- Carrinho atualizado.

### 🔄 Fluxo Principal

1. O cliente altera quantidades ou remove itens.
2. O sistema recalcula valores.

### 🔀 Fluxos Alternativos

#### A1. Produto indisponível

1. Sistema remove ou alerta sobre o item.

### 📜 Regras de Negócio

- RN022 — O carrinho deve ser revalidado antes da confirmação do pedido.
- RN023 — O carrinho deve refletir o estado atual da operação.
- RN024 — Produtos indisponíveis não devem permanecer aptos para compra.

---

## UC-LOJ-008 — Aplicar Cupom de Desconto

### 🎯 Objetivo

Permitir utilização de cupons promocionais.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Carrinho ativo.

### ✅ Pós-condições

- Cupom aplicado ou rejeitado.

### 🔄 Fluxo Principal

1. Cliente informa o cupom.
2. Sistema valida regras.
3. Sistema aplica desconto.

### 🔀 Fluxos Alternativos

#### A1. Cupom inválido

1. Sistema informa motivo da rejeição.

### 📜 Regras de Negócio

- RN030 — Cupons promocionais devem possuir critérios de utilização.
- RN031 — A rejeição de um cupom deve ser informada ao cliente.
- RN032 — Promoções simultâneas devem respeitar as regras de cumulatividade.

---

## UC-LOJ-009 — Calcular Frete

### 🎯 Objetivo

Calcular opções de entrega.

### 👥 Atores

- Cliente
- Sistema Logístico

### 📋 Pré-condições

- CEP informado.

### ✅ Pós-condições

- Opções de frete exibidas.

### 🔄 Fluxo Principal

1. Cliente informa CEP.
2. Sistema consulta integração.
3. Exibe modalidades.

### 🔀 Fluxos Alternativos

#### A1. CEP inválido

1. Sistema informa erro.

### 📜 Regras de Negócio

- RN040 — A confirmação do pedido depende da validação final das regras comerciais.

---

## UC-LOJ-010 — Finalizar Compra

### 🎯 Objetivo

Criar um pedido válido.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Carrinho válido.

### ✅ Pós-condições

- Pedido criado.

### 🔄 Fluxo Principal

1. Cliente confirma dados.
2. Sistema valida estoque.
3. Sistema valida preços.
4. Sistema cria pedido.

### 🔀 Fluxos Alternativos

#### A1. Alteração de estoque

1. Sistema interrompe operação.
2. Solicita revisão do carrinho.

### 📜 Regras de Negócio

- RN022 — O carrinho deve ser revalidado antes da confirmação do pedido.
- RN033 — Um pedido somente poderá ser criado quando atender às regras comerciais da plataforma.
- RN040 — A confirmação do pedido depende da validação final das regras comerciais.

---

## UC-LOJ-011 — Realizar Pagamento

### 🎯 Objetivo

Processar pagamento do pedido.

### 👥 Atores

- Cliente
- Gateway de Pagamento

### 📋 Pré-condições

- Pedido criado.

### ✅ Pós-condições

- Pagamento aprovado ou recusado.

### 🔄 Fluxo Principal

1. Cliente seleciona método.
2. Sistema envia solicitação ao gateway.
3. Recebe resposta.
4. Atualiza pedido.

### 🔀 Fluxos Alternativos

#### A1. Pagamento recusado

1. Sistema informa falha.
2. Permite nova tentativa.

### 📜 Regras de Negócio

- RN071 — O processamento de pagamentos deve suportar diferentes tempos de confirmação.
- RN037 — Cancelamentos e estornos devem permanecer rastreáveis.

---

## UC-LOJ-012 — Acompanhar Pedido

### 🎯 Objetivo

Permitir consulta do andamento do pedido.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Pedido existente.

### ✅ Pós-condições

- Status atualizado exibido.

### 🔄 Fluxo Principal

1. Cliente acessa área de pedidos.
2. Sistema apresenta histórico e status.

### 🔀 Fluxos Alternativos

#### A1. Pedido inexistente

1. Sistema informa erro.

### 📜 Regras de Negócio

- RN050 — Usuários devem acessar apenas recursos autorizados.
- RN039 — O pedido deve manter histórico de eventos relevantes.

---

## UC-LOJ-013 — Cancelar Pedido

### 🎯 Objetivo

Solicitar cancelamento do pedido.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Pedido elegível para cancelamento.

### ✅ Pós-condições

- Solicitação registrada.

### 🔄 Fluxo Principal

1. Cliente solicita cancelamento.
2. Sistema verifica elegibilidade.
3. Registra solicitação.

### 🔀 Fluxos Alternativos

#### A1. Pedido já enviado

1. Sistema impede cancelamento.

### 📜 Regras de Negócio

- RN036 — O cancelamento do pedido deve respeitar seu estágio operacional.
- RN037 — Cancelamentos e estornos devem permanecer rastreáveis.

---

## UC-LOJ-014 — Solicitar Devolução

### 🎯 Objetivo

Registrar pedido de devolução.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Pedido entregue.

### ✅ Pós-condições

- Solicitação registrada.

### 🔄 Fluxo Principal

1. Cliente informa motivo.
2. Sistema registra solicitação.

### 🔀 Fluxos Alternativos

#### A1. Prazo expirado

1. Sistema rejeita solicitação.

### 📜 Regras de Negócio

- RN037 — Cancelamentos e estornos devem permanecer rastreáveis.

---

## UC-LOJ-015 — Solicitar Troca

### 🎯 Objetivo

Registrar solicitação de troca.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Pedido elegível.

### ✅ Pós-condições

- Solicitação criada.

### 🔄 Fluxo Principal

1. Cliente solicita troca.
2. Sistema registra solicitação.

### 🔀 Fluxos Alternativos

#### A1. Produto inelegível

1. Sistema informa impossibilidade.

### 📜 Regras de Negócio

- RN037 — Cancelamentos e estornos devem permanecer rastreáveis.

---

## UC-LOJ-016 — Adicionar Produto aos Favoritos

### 🎯 Objetivo

Permitir salvar produtos para consulta futura.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Cliente autenticado.

### ✅ Pós-condições

- Produto incluído na lista.

### 🔄 Fluxo Principal

1. Cliente seleciona "Favoritar".
2. Sistema registra associação.

### 🔀 Fluxos Alternativos

#### A1. Produto já favoritado

1. Sistema apenas confirma operação.

### 📜 Regras de Negócio

- RN050 — Usuários devem acessar apenas recursos autorizados.

---

## UC-LOJ-017 — Avaliar Produto

### 🎯 Objetivo

Permitir avaliação de produtos adquiridos.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Produto adquirido pelo cliente.

### ✅ Pós-condições

- Avaliação registrada.

### 🔄 Fluxo Principal

1. Cliente acessa pedido.
2. Seleciona produto.
3. Informa nota e comentário.
4. Sistema registra avaliação.

### 🔀 Fluxos Alternativos

#### A1. Cliente não comprou o produto

1. Sistema impede a avaliação.

### 📜 Regras de Negócio

- RN050 — Usuários devem acessar apenas recursos autorizados.

---

# 👤 Usuários

---

## UC-USR-001 — Criar Conta

### 🎯 Objetivo

Permitir que um visitante realize seu cadastro na plataforma e passe a utilizar os recursos disponíveis para clientes autenticados.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- O visitante ainda não possui uma conta cadastrada.
- O e-mail informado não está em uso.

### ✅ Pós-condições

- Uma nova conta é criada com sucesso.
- O cliente pode autenticar-se na plataforma.

### 🔄 Fluxo Principal

1. O visitante acessa a página de cadastro.
2. Informa seus dados pessoais.
3. Define uma senha.
4. O sistema valida os dados.
5. O sistema cria a conta.
6. O sistema confirma o cadastro.

### 🔀 Fluxos Alternativos

#### A1. E-mail já cadastrado

1. O sistema identifica duplicidade.
2. Exibe mensagem informando que já existe uma conta vinculada ao e-mail.

#### A2. Dados inválidos

1. O sistema identifica inconsistências.
2. Solicita a correção dos campos.

### 📜 Regras de Negócio

- RN048 — Todo cliente deve possuir identificação mínima.
- RN051 — O endereço de e-mail deve identificar uma única conta.
- RN052 — O tratamento de dados pessoais deve respeitar a privacidade do usuário.

---

## UC-USR-002 — Autenticar Usuário

### 🎯 Objetivo

Permitir que um cliente acesse sua conta.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- O cliente possui cadastro ativo.

### ✅ Pós-condições

- Sessão autenticada.
- Permissões carregadas conforme o perfil.

### 🔄 Fluxo Principal

1. O cliente acessa a tela de login.
2. Informa credenciais.
3. O sistema valida os dados.
4. O sistema cria a sessão autenticada.
5. O cliente é redirecionado para sua área.

### 🔀 Fluxos Alternativos

#### A1. Credenciais inválidas

1. O sistema rejeita a autenticação.
2. Exibe mensagem de erro.

#### A2. Conta bloqueada

1. O sistema impede o acesso.
2. Informa indisponibilidade da conta.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.
- RN052 — O tratamento de dados pessoais deve respeitar a privacidade do usuário.

---

## UC-USR-003 — Recuperar Senha

### 🎯 Objetivo

Permitir que o cliente redefina sua senha.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Conta cadastrada.

### ✅ Pós-condições

- Nova senha definida.

### 🔄 Fluxo Principal

1. O cliente solicita recuperação.
2. Informa o e-mail.
3. O sistema gera um token temporário.
4. O cliente redefine a senha.
5. O sistema confirma a alteração.

### 🔀 Fluxos Alternativos

#### A1. Token expirado

1. O sistema invalida a operação.
2. Solicita novo processo.

#### A2. E-mail inexistente

1. O sistema informa impossibilidade de localização.

### 📜 Regras de Negócio

- RN048 — Todo cliente deve possuir identificação mínima.
- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN052 — O tratamento de dados pessoais deve respeitar a privacidade do usuário.

---

## UC-USR-004 — Gerenciar Perfil

### 🎯 Objetivo

Permitir que o cliente mantenha seus dados pessoais atualizados.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Cliente autenticado.

### ✅ Pós-condições

- Informações atualizadas.

### 🔄 Fluxo Principal

1. O cliente acessa seu perfil.
2. Edita os dados permitidos.
3. O sistema valida as alterações.
4. O sistema salva as informações.

### 🔀 Fluxos Alternativos

#### A1. Dados inválidos

1. O sistema identifica inconsistências.
2. Solicita correção.

### 📜 Regras de Negócio

- RN050 — Usuários devem acessar apenas recursos autorizados.
- RN052 — O tratamento de dados pessoais deve respeitar a privacidade do usuário.

---

## UC-USR-005 — Gerenciar Endereços

### 🎯 Objetivo

Permitir que o cliente mantenha seus endereços de entrega e cobrança.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- Cliente autenticado.

### ✅ Pós-condições

- Endereços cadastrados ou atualizados.

### 🔄 Fluxo Principal

1. O cliente acessa a área de endereços.
2. Cadastra, altera ou remove um endereço.
3. O sistema valida os dados.
4. O sistema persiste as alterações.

### 🔀 Fluxos Alternativos

#### A1. CEP inválido

1. O sistema identifica inconsistência.
2. Solicita correção.

### 📜 Regras de Negócio

- RN050 — Usuários devem acessar apenas recursos autorizados.
- RN053 — Um cliente poderá possuir múltiplos endereços.

---

# 🔐 Controle de Acesso (RBAC)

---

## UC-RBAC-001 — Gerenciar Usuários

### 🎯 Objetivo

Permitir que administradores realizem a gestão dos usuários da plataforma.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Permissão concedida.

### ✅ Pós-condições

- Usuário criado, atualizado, bloqueado ou desbloqueado.

### 🔄 Fluxo Principal

1. O administrador acessa o painel.
2. Seleciona um usuário.
3. Executa a ação desejada.
4. O sistema registra a alteração.

### 🔀 Fluxos Alternativos

#### A1. Usuário inexistente

1. O sistema informa erro.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.

---

## UC-RBAC-002 — Gerenciar Papéis

### 🎯 Objetivo

Permitir o cadastro e manutenção dos papéis utilizados pelo sistema.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.

### ✅ Pós-condições

- Papel criado ou atualizado.

### 🔄 Fluxo Principal

1. O administrador acessa a gestão de papéis.
2. Cria ou altera um papel.
3. O sistema valida as informações.
4. O sistema salva o registro.

### 🔀 Fluxos Alternativos

#### A1. Papel já existente

1. O sistema impede duplicidade.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-RBAC-003 — Gerenciar Permissões

### 🎯 Objetivo

Permitir a associação de permissões aos papéis existentes.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Papel previamente cadastrado.

### ✅ Pós-condições

- Permissões atualizadas.

### 🔄 Fluxo Principal

1. O administrador seleciona um papel.
2. Define as permissões desejadas.
3. O sistema salva as alterações.

### 🔀 Fluxos Alternativos

#### A1. Permissão inválida

1. O sistema rejeita a operação.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-RBAC-004 — Controlar Acesso às Funcionalidades

### 🎯 Objetivo

Garantir que cada usuário acesse apenas os recursos autorizados.

### 👥 Atores

- Sistema

### 📋 Pré-condições

- Usuário autenticado.

### ✅ Pós-condições

- Acesso concedido ou negado.

### 🔄 Fluxo Principal

1. O usuário solicita acesso a uma funcionalidade.
2. O sistema identifica seu papel.
3. O sistema verifica as permissões.
4. O sistema concede ou bloqueia o acesso.

### 🔀 Fluxos Alternativos

#### A1. Permissão inexistente

1. O sistema nega o acesso.
2. Registra o evento de segurança.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.

---

# 📦 Produtos

---

## UC-PRO-001 — Cadastrar Produto

### 🎯 Objetivo

Permitir que um administrador cadastre um novo produto para disponibilização na loja virtual.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Usuário possui permissão para gerenciamento de produtos.

### ✅ Pós-condições

- Produto cadastrado no sistema.
- Produto salvo como rascunho ou ativo, conforme configuração.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de produtos.
2. Seleciona a opção **Cadastrar Produto**.
3. Informa os dados obrigatórios.
4. O sistema valida as informações.
5. O sistema registra o produto.
6. O sistema confirma a operação.

### 🔀 Fluxos Alternativos

#### A1. Dados obrigatórios ausentes

1. O sistema identifica inconsistências.
2. Exibe mensagens de validação.
3. Solicita correção.

#### A2. SKU já existente

1. O sistema detecta duplicidade.
2. Impede o cadastro.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN005 — Todo produto deve possuir identificação única.
- RN006 — Todo produto deve possuir um estado operacional.
- RN007 — Apenas produtos completos podem ser publicados.

---

## UC-PRO-002 — Editar Produto

### 🎯 Objetivo

Permitir a atualização das informações de um produto existente.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Produto previamente cadastrado.
- Administrador autenticado.

### ✅ Pós-condições

- Informações do produto atualizadas.

### 🔄 Fluxo Principal

1. O administrador localiza o produto.
2. Seleciona a opção de edição.
3. Atualiza os dados desejados.
4. O sistema valida as alterações.
5. O sistema salva as modificações.

### 🔀 Fluxos Alternativos

#### A1. Produto inexistente

1. O sistema informa que o produto não foi encontrado.

#### A2. Dados inválidos

1. O sistema impede a atualização.
2. Solicita correção.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN011 — Alterações no catálogo não devem afetar o histórico de pedidos.
- RN018 — Produtos devem permanecer rastreáveis após sua descontinuação.

---

## UC-PRO-003 — Inativar Produto

### 🎯 Objetivo

Permitir que um produto deixe de ser comercializado sem perder seu histórico.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Produto cadastrado.
- Administrador autenticado.

### ✅ Pós-condições

- Produto marcado como inativo.

### 🔄 Fluxo Principal

1. O administrador acessa o cadastro do produto.
2. Seleciona a opção **Inativar**.
3. O sistema altera o status do produto.
4. O sistema confirma a operação.

### 🔀 Fluxos Alternativos

#### A1. Produto já inativo

1. O sistema informa que nenhuma alteração é necessária.

### 📜 Regras de Negócio

- RN006 — Todo produto deve possuir um estado operacional.
- RN009 — Produtos vinculados a pedidos não podem ser excluídos permanentemente.
- RN018 — Produtos devem permanecer rastreáveis após sua descontinuação.

---

## UC-PRO-004 — Importar Produtos

### 🎯 Objetivo

Permitir o cadastro em massa de produtos utilizando arquivos externos.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Arquivo compatível disponível.

### ✅ Pós-condições

- Produtos válidos importados para o sistema.

### 🔄 Fluxo Principal

1. O administrador acessa a funcionalidade de importação.
2. Seleciona o arquivo.
3. O sistema valida o formato.
4. O sistema processa os registros.
5. O sistema apresenta o resultado da importação.

### 🔀 Fluxos Alternativos

#### A1. Arquivo inválido

1. O sistema interrompe o processamento.
2. Exibe mensagem de erro.

#### A2. Registros inconsistentes

1. O sistema ignora registros inválidos.
2. Gera relatório de inconsistências.

### 📜 Regras de Negócio

- RN005 — Todo produto deve possuir identificação única.
- RN007 — Apenas produtos completos podem ser publicados.
- RN019 — A integridade referencial do catálogo deve ser preservada.

---

## UC-PRO-005 — Exportar Produtos

### 🎯 Objetivo

Permitir a exportação das informações dos produtos cadastrados.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Existirem produtos cadastrados.

### ✅ Pós-condições

- Arquivo gerado para download.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de exportação.
2. Define os filtros desejados.
3. Solicita a exportação.
4. O sistema gera o arquivo.
5. Disponibiliza o download.

### 🔀 Fluxos Alternativos

#### A1. Nenhum produto encontrado

1. O sistema informa que não existem registros para exportação.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.

---

## UC-PRO-006 — Gerenciar Categorias

### 🎯 Objetivo

Permitir o cadastro, atualização, organização e inativação das categorias utilizadas pelos produtos.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.

### ✅ Pós-condições

- Categoria criada, alterada ou inativada.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de categorias.
2. Seleciona a operação desejada.
3. Informa os dados necessários.
4. O sistema valida as informações.
5. O sistema salva as alterações.

### 🔀 Fluxos Alternativos

#### A1. Nome de categoria duplicado

1. O sistema informa conflito.
2. Solicita novo nome.

#### A2. Categoria vinculada a produtos

1. O administrador solicita exclusão.
2. O sistema impede a exclusão física.
3. Sugere a inativação.

### 📜 Regras de Negócio

- RN019 — A integridade referencial do catálogo deve ser preservada.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

# 📊 Estoque

---

## UC-EST-001 — Controlar Estoque

### 🎯 Objetivo

Permitir o gerenciamento e acompanhamento da quantidade disponível de produtos e variantes no estoque.

### 👥 Atores

- Operador de Estoque

### 📋 Pré-condições

- Usuário autenticado.
- Permissão para gerenciamento de estoque.
- Produto previamente cadastrado.

### ✅ Pós-condições

- Informações de estoque atualizadas ou consultadas.

### 🔄 Fluxo Principal

1. O operador acessa o módulo de estoque.
2. O sistema apresenta a listagem dos produtos e suas quantidades.
3. O operador consulta ou realiza operações de gerenciamento.
4. O sistema atualiza as informações quando necessário.

### 🔀 Fluxos Alternativos

#### A1. Produto inexistente

1. O sistema informa que o produto não foi localizado.

#### A2. Usuário sem permissão

1. O sistema bloqueia o acesso.
2. Registra a tentativa de acesso.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.
- RN041 — O estoque disponível não deve assumir saldo negativo.
- RN045 — Toda movimentação de estoque deve permanecer registrada.

---

## UC-EST-002 — Registrar Entrada de Estoque

### 🎯 Objetivo

Permitir o registro de novas unidades de produtos no estoque.

### 👥 Atores

- Operador de Estoque

### 📋 Pré-condições

- Produto cadastrado.
- Usuário autenticado.

### ✅ Pós-condições

- Quantidade disponível atualizada.
- Movimentação registrada.

### 🔄 Fluxo Principal

1. O operador seleciona o produto.
2. Informa a quantidade recebida.
3. Informa o motivo ou origem da entrada.
4. O sistema valida os dados.
5. O sistema atualiza o estoque.
6. O sistema registra a movimentação.

### 🔀 Fluxos Alternativos

#### A1. Quantidade inválida

1. O sistema rejeita a operação.
2. Solicita nova informação.

### 📜 Regras de Negócio

- RN042 — Ajustes manuais de estoque devem ser rastreáveis.
- RN045 — Toda movimentação de estoque deve permanecer registrada.

---

## UC-EST-003 — Registrar Saída de Estoque

### 🎯 Objetivo

Permitir o registro manual de redução do estoque.

### 👥 Atores

- Operador de Estoque

### 📋 Pré-condições

- Produto cadastrado.
- Estoque disponível.

### ✅ Pós-condições

- Estoque atualizado.
- Movimentação registrada.

### 🔄 Fluxo Principal

1. O operador seleciona o produto.
2. Informa a quantidade removida.
3. Informa o motivo da saída.
4. O sistema valida a disponibilidade.
5. Atualiza o estoque.
6. Registra a movimentação.

### 🔀 Fluxos Alternativos

#### A1. Quantidade superior ao estoque

1. O sistema bloqueia a operação.
2. Exibe mensagem de erro.

### 📜 Regras de Negócio

- RN041 — O estoque disponível não deve assumir saldo negativo.
- RN045 — Toda movimentação de estoque deve permanecer registrada.

---

## UC-EST-004 — Ajustar Estoque

### 🎯 Objetivo

Permitir correções manuais na quantidade disponível de um produto.

### 👥 Atores

- Operador de Estoque

### 📋 Pré-condições

- Produto existente.
- Usuário autorizado.

### ✅ Pós-condições

- Quantidade ajustada.
- Histórico registrado.

### 🔄 Fluxo Principal

1. O operador seleciona o produto.
2. Informa o novo valor ou diferença.
3. Informa a justificativa.
4. O sistema valida os dados.
5. Atualiza o estoque.
6. Registra a operação.

### 🔀 Fluxos Alternativos

#### A1. Justificativa não informada

1. O sistema impede a confirmação.
2. Solicita preenchimento.

### 📜 Regras de Negócio

- RN042 — Ajustes manuais de estoque devem ser rastreáveis.
- RN043 — Divergências de estoque devem permitir correção controlada.
- RN045 — Toda movimentação de estoque deve permanecer registrada.

---

## UC-EST-005 — Realizar Inventário

### 🎯 Objetivo

Permitir a conferência física e reconciliação do estoque.

### 👥 Atores

- Operador de Estoque

### 📋 Pré-condições

- Inventário autorizado.
- Produtos cadastrados.

### ✅ Pós-condições

- Divergências identificadas.
- Estoque reconciliado quando aprovado.

### 🔄 Fluxo Principal

1. O operador inicia o inventário.
2. Realiza a contagem física.
3. Informa os valores encontrados.
4. O sistema compara com o estoque registrado.
5. Apresenta divergências.
6. Após confirmação, aplica os ajustes.

### 🔀 Fluxos Alternativos

#### A1. Divergências identificadas

1. O sistema apresenta relatório.
2. O operador confirma ou cancela os ajustes.

### 📜 Regras de Negócio

- RN043 — Divergências de estoque devem permitir correção controlada.
- RN045 — Toda movimentação de estoque deve permanecer registrada.

---

## UC-EST-006 — Reservar Estoque

### 🎯 Objetivo

Reservar temporariamente unidades de produtos durante o processo de compra.

### 👥 Atores

- Sistema

### 📋 Pré-condições

- Produto disponível.
- Estratégia de reserva habilitada.

### ✅ Pós-condições

- Quantidade reservada para o pedido.

### 🔄 Fluxo Principal

1. O cliente inicia o checkout.
2. O sistema identifica os itens.
3. Reserva temporariamente o estoque.
4. Mantém a reserva até a confirmação ou expiração.

### 🔀 Fluxos Alternativos

#### A1. Estoque insuficiente

1. O sistema impede a reserva.
2. Informa indisponibilidade.

#### A2. Tempo de reserva expirado

1. O sistema libera automaticamente a reserva.

### 📜 Regras de Negócio

- RN042 — A disponibilidade do estoque deve ser garantida antes da confirmação do pedido.
- RN046 — Reservas temporárias devem respeitar as políticas da plataforma.
- RN041 — O estoque disponível não deve assumir saldo negativo.

---

## UC-EST-007 — Liberar Reserva de Estoque

### 🎯 Objetivo

Liberar automaticamente ou manualmente o estoque reservado quando a compra não for concluída.

### 👥 Atores

- Sistema

### 📋 Pré-condições

- Existir reserva ativa.

### ✅ Pós-condições

- Quantidade retorna ao estoque disponível.

### 🔄 Fluxo Principal

1. O sistema identifica uma reserva expirada ou cancelada.
2. Remove a reserva existente.
3. Atualiza o estoque disponível.
4. Registra a operação.

### 🔀 Fluxos Alternativos

#### A1. Pedido confirmado

1. O sistema converte a reserva em baixa definitiva.
2. Não realiza liberação.

### 📜 Regras de Negócio

- RN046 — Reservas temporárias devem respeitar as políticas da plataforma.
- RN045 — Toda movimentação de estoque deve permanecer registrada.
- RN047 — Movimentações decorrentes de pedidos devem manter consistência com o estoque.

---

# 📋 Pedidos

---

## UC-PED-001 — Gerenciar Pedidos

### 🎯 Objetivo

Permitir que o administrador consulte, filtre e gerencie os pedidos realizados na plataforma.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Permissão para gerenciamento de pedidos.

### ✅ Pós-condições

- Pedido consultado ou atualizado conforme a operação realizada.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de pedidos.
2. O sistema apresenta a listagem de pedidos.
3. O administrador utiliza filtros ou pesquisa.
4. Seleciona um pedido.
5. O sistema exibe todas as informações relacionadas.

### 🔀 Fluxos Alternativos

#### A1. Nenhum pedido encontrado

1. O sistema informa que não existem resultados para os filtros aplicados.

#### A2. Usuário sem permissão

1. O sistema bloqueia o acesso.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.

---

## UC-PED-002 — Atualizar Status do Pedido

### 🎯 Objetivo

Permitir a alteração do status operacional de um pedido.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Pedido existente.
- Administrador autenticado.

### ✅ Pós-condições

- Status atualizado.
- Histórico registrado.

### 🔄 Fluxo Principal

1. O administrador acessa o pedido.
2. Seleciona um novo status.
3. O sistema valida a transição.
4. Atualiza o pedido.
5. Registra o histórico.

### 🔀 Fluxos Alternativos

#### A1. Transição inválida

1. O sistema impede a alteração.
2. Exibe mensagem explicativa.

### 📜 Regras de Negócio

- RN034 — O pedido deve seguir um fluxo de estados controlado.
- RN004 — Operações críticas devem possuir rastreabilidade.
- RN039 — O pedido deve manter histórico de eventos relevantes.

---

## UC-PED-003 — Aprovar Pedido

### 🎯 Objetivo

Permitir que um pedido seja aprovado para continuidade do fluxo operacional.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Pedido criado.
- Requisitos mínimos atendidos.

### ✅ Pós-condições

- Pedido aprovado.
- Fluxo operacional iniciado.

### 🔄 Fluxo Principal

1. O administrador acessa o pedido.
2. Verifica as informações.
3. Aprova o pedido.
4. O sistema altera o status.
5. O sistema registra a operação.

### 🔀 Fluxos Alternativos

#### A1. Pagamento pendente

1. O sistema impede a aprovação.

#### A2. Estoque indisponível

1. O sistema informa inconsistência.
2. Mantém o pedido pendente.

### 📜 Regras de Negócio

- RN033 — Um pedido somente poderá ser criado quando atender às regras comerciais da plataforma.
- RN040 — A confirmação do pedido depende da validação final das regras comerciais.
- RN041 — O estoque disponível não deve assumir saldo negativo.

---

## UC-PED-004 — Cancelar Pedido Administrativamente

### 🎯 Objetivo

Permitir que um administrador realize o cancelamento de um pedido.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Pedido existente.
- Cancelamento permitido pela política operacional.

### ✅ Pós-condições

- Pedido cancelado.
- Histórico atualizado.

### 🔄 Fluxo Principal

1. O administrador acessa o pedido.
2. Seleciona a opção de cancelamento.
3. Informa o motivo.
4. O sistema valida a operação.
5. Atualiza o status do pedido.
6. Registra o cancelamento.

### 🔀 Fluxos Alternativos

#### A1. Pedido já entregue

1. O sistema impede o cancelamento.

#### A2. Pedido já cancelado

1. O sistema informa que a operação não é necessária.

### 📜 Regras de Negócio

- RN036 — O cancelamento do pedido deve respeitar seu estágio operacional.
- RN037 — Cancelamentos e estornos devem permanecer rastreáveis.
- RN039 — O pedido deve manter histórico de eventos relevantes.

---

## UC-PED-005 — Gerar Etiqueta de Envio

### 🎯 Objetivo

Gerar a etiqueta necessária para expedição do pedido.

### 👥 Atores

- Sistema Logístico

### 📋 Pré-condições

- Pedido aprovado para envio.
- Endereço válido.
- Integração logística disponível.

### ✅ Pós-condições

- Etiqueta gerada e vinculada ao pedido.

### 🔄 Fluxo Principal

1. O sistema envia os dados para o serviço logístico.
2. O serviço processa a solicitação.
3. Retorna a etiqueta.
4. O sistema associa a etiqueta ao pedido.

### 🔀 Fluxos Alternativos

#### A1. Falha na integração

1. O sistema registra o erro.
2. Permite nova tentativa posteriormente.

### 📜 Regras de Negócio

- RN034 — O pedido deve seguir um fluxo de estados controlado.
- RN040 — A confirmação do pedido depende da validação final das regras comerciais.

---

## UC-PED-006 — Gerar Romaneio

### 🎯 Objetivo

Gerar o documento contendo os pedidos que serão separados ou expedidos.

### 👥 Atores

- Sistema

### 📋 Pré-condições

- Existirem pedidos elegíveis.

### ✅ Pós-condições

- Romaneio gerado.

### 🔄 Fluxo Principal

1. O sistema identifica pedidos aptos.
2. Consolida as informações.
3. Gera o romaneio.
4. Disponibiliza o documento.

### 🔀 Fluxos Alternativos

#### A1. Nenhum pedido disponível

1. O sistema informa que não existem pedidos elegíveis.

### 📜 Regras de Negócio

- RN034 — O pedido deve seguir um fluxo de estados controlado.
- RN039 — O pedido deve manter histórico de eventos relevantes.

---

## UC-PED-007 — Registrar Devolução

### 🎯 Objetivo

Registrar uma devolução de produtos vinculada a um pedido.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Pedido existente.
- Solicitação de devolução aprovada.

### ✅ Pós-condições

- Devolução registrada.
- Pedido atualizado.

### 🔄 Fluxo Principal

1. O administrador acessa o pedido.
2. Seleciona a opção de devolução.
3. Informa os itens devolvidos.
4. Informa o motivo.
5. O sistema registra a devolução.
6. Atualiza os controles internos.

### 🔀 Fluxos Alternativos

#### A1. Pedido não elegível

1. O sistema impede a operação.

#### A2. Produto não pertence ao pedido

1. O sistema rejeita a solicitação.

### 📜 Regras de Negócio

- RN037 — Cancelamentos e estornos devem permanecer rastreáveis.
- RN039 — O pedido deve manter histórico de eventos relevantes.
- RN043 — Divergências operacionais devem permitir correção controlada.
- RN045 — Toda movimentação de estoque deve permanecer registrada.

---

# 🚀 Conversão

---

## UC-CONV-001 — Capturar Lead

### 🎯 Objetivo

Permitir que visitantes forneçam seus dados de contato para futuras ações comerciais ou de relacionamento.

### 👥 Atores

- Cliente

### 📋 Pré-condições

- A funcionalidade de captura de leads está habilitada.
- O formulário está disponível.

### ✅ Pós-condições

- Lead registrado na plataforma.

### 🔄 Fluxo Principal

1. O visitante acessa um formulário de captura.
2. Informa seus dados de contato.
3. O sistema valida as informações.
4. O sistema registra o lead.
5. Exibe mensagem de confirmação.

### 🔀 Fluxos Alternativos

#### A1. Dados obrigatórios não informados

1. O sistema identifica inconsistências.
2. Solicita correção.

#### A2. Lead já existente

1. O sistema identifica duplicidade.
2. Atualiza ou mantém o registro conforme configuração.

### 📜 Regras de Negócio

- RN052 — O tratamento de dados pessoais deve respeitar a privacidade do usuário.

---

## UC-CONV-002 — Gerenciar Leads

### 🎯 Objetivo

Permitir que administradores consultem e acompanhem os leads cadastrados.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Permissão para gerenciamento de leads.

### ✅ Pós-condições

- Lead consultado ou atualizado.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de leads.
2. O sistema apresenta a listagem.
3. O administrador consulta ou atualiza informações.
4. O sistema salva as alterações.

### 🔀 Fluxos Alternativos

#### A1. Lead inexistente

1. O sistema informa que o registro não foi localizado.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.

---

## UC-CONV-003 — Converter Lead em Pedido

### 🎯 Objetivo

Permitir que um lead seja convertido em cliente e origine um pedido.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Lead cadastrado.
- Dados mínimos disponíveis para conversão.

### ✅ Pós-condições

- Cliente criado ou atualizado.
- Pedido iniciado ou associado.

### 🔄 Fluxo Principal

1. O administrador seleciona um lead.
2. Solicita sua conversão.
3. O sistema cria ou vincula o cadastro do cliente.
4. O sistema inicia o fluxo de compra ou cria o pedido.
5. Atualiza o status do lead.

### 🔀 Fluxos Alternativos

#### A1. Dados insuficientes

1. O sistema impede a conversão.
2. Solicita complementação das informações.

### 📜 Regras de Negócio

- RN033 — Um pedido somente poderá ser criado quando atender às regras comerciais da plataforma.
- RN052 — O tratamento de dados pessoais deve respeitar a privacidade do usuário.

---

## UC-CONV-004 — Recuperar Carrinho Abandonado

### 🎯 Objetivo

Permitir que o sistema identifique carrinhos abandonados e execute ações automáticas de recuperação.

### 👥 Atores

- Sistema

### 📋 Pré-condições

- Existência de carrinho abandonado.
- Cliente identificado.

### ✅ Pós-condições

- Ação de recuperação registrada ou executada.

### 🔄 Fluxo Principal

1. O sistema identifica um carrinho abandonado.
2. Verifica os critérios definidos.
3. Dispara comunicação automática ou registra ação.
4. Monitora eventual retorno do cliente.

### 🔀 Fluxos Alternativos

#### A1. Cliente sem meio de contato

1. O sistema registra impossibilidade de recuperação.

### 📜 Regras de Negócio

- RN021 — O carrinho deve permitir persistência para visitantes.
- RN026 — A autenticação não deve resultar na perda do carrinho.
- RN052 — O tratamento de dados pessoais deve respeitar a privacidade do usuário.

---

## UC-CONV-005 — Exibir Produtos Relacionados

### 🎯 Objetivo

Apresentar sugestões de produtos relacionados durante a navegação.

### 👥 Atores

- Sistema

### 📋 Pré-condições

- Produto sendo visualizado.

### ✅ Pós-condições

- Lista de produtos relacionados exibida.

### 🔄 Fluxo Principal

1. O cliente acessa um produto.
2. O sistema identifica relações configuradas.
3. Exibe sugestões na interface.

### 🔀 Fluxos Alternativos

#### A1. Nenhuma relação cadastrada

1. O sistema apresenta produtos alternativos ou não exibe recomendações.

### 📜 Regras de Negócio

- RN006 — Todo produto deve possuir um estado operacional definido.
- RN007 — Apenas produtos completos podem ser publicados.
- RN008 — Produtos indisponíveis não devem ser comercializados.

---

## UC-CONV-006 — Exibir Produtos em Destaque

### 🎯 Objetivo

Apresentar produtos destacados em áreas estratégicas da loja.

### 👥 Atores

- Sistema

### 📋 Pré-condições

- Existirem produtos marcados como destaque.

### ✅ Pós-condições

- Produtos destacados exibidos.

### 🔄 Fluxo Principal

1. O cliente acessa uma página da loja.
2. O sistema identifica produtos em destaque.
3. Exibe os itens conforme configuração.

### 🔀 Fluxos Alternativos

#### A1. Nenhum produto configurado

1. O sistema exibe outros produtos ou mantém a área vazia.

### 📜 Regras de Negócio

- RN006 — Todo produto deve possuir um estado operacional definido.
- RN007 — Apenas produtos completos podem ser publicados.
- RN008 — Produtos indisponíveis não devem ser comercializados.

---

## UC-CONV-007 — Gerenciar Banners Promocionais

### 🎯 Objetivo

Permitir a criação e manutenção dos banners promocionais exibidos na loja.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.

### ✅ Pós-condições

- Banner criado, atualizado ou inativado.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de banners.
2. Cadastra ou edita um banner.
3. O sistema valida as informações.
4. Salva a configuração.

### 🔀 Fluxos Alternativos

#### A1. Dados inválidos

1. O sistema impede o salvamento.
2. Solicita correção.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-CONV-008 — Gerenciar Campanhas Promocionais

### 🎯 Objetivo

Permitir o gerenciamento de campanhas promocionais da plataforma.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.

### ✅ Pós-condições

- Campanha criada ou atualizada.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de campanhas.
2. Define regras e período de vigência.
3. O sistema valida os dados.
4. Registra a campanha.

### 🔀 Fluxos Alternativos

#### A1. Período inválido

1. O sistema impede o cadastro.

### 📜 Regras de Negócio

- RN028 — Promoções devem possuir regras de vigência.
- RN032 — Promoções conflitantes devem respeitar as regras de cumulatividade.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-CONV-009 — Gerenciar Cupons

### 🎯 Objetivo

Permitir a criação e manutenção de cupons promocionais.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.

### ✅ Pós-condições

- Cupom criado, atualizado ou desativado.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de cupons.
2. Define código, regras e validade.
3. O sistema valida as informações.
4. Salva o cupom.

### 🔀 Fluxos Alternativos

#### A1. Código duplicado

1. O sistema impede o cadastro.
2. Solicita um novo código.

#### A2. Configuração inválida

1. O sistema informa inconsistências.
2. Solicita ajustes.

### 📜 Regras de Negócio

- RN029 — Cupons promocionais devem possuir regras explícitas.
- RN030 — O sistema deve informar o motivo da rejeição de um cupom.
- RN032 — Promoções conflitantes devem respeitar as regras de cumulatividade.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

# 💰 Financeiro

---

## UC-FIN-001 — Validar Pagamento

### 🎯 Objetivo

Permitir que o sistema valide o resultado de uma transação financeira realizada por meio de um gateway de pagamento.

### 👥 Atores

- Gateway de Pagamento

### 📋 Pré-condições

- Pedido criado.
- Pagamento iniciado.
- Integração com gateway disponível.

### ✅ Pós-condições

- Status do pagamento atualizado.
- Pedido sincronizado com o resultado da transação.

### 🔄 Fluxo Principal

1. O cliente inicia o pagamento.
2. O sistema envia a solicitação ao gateway.
3. O gateway processa a transação.
4. O gateway retorna o resultado.
5. O sistema atualiza o status do pagamento.
6. O sistema atualiza o status do pedido.

### 🔀 Fluxos Alternativos

#### A1. Pagamento recusado

1. O gateway retorna falha.
2. O sistema registra a recusa.
3. O pedido permanece aguardando novo pagamento.

#### A2. Erro de comunicação

1. O sistema registra a inconsistência.
2. Agenda nova tentativa de sincronização.

### 📜 Regras de Negócio

- RN040 — A confirmação do pedido depende da validação final das regras comerciais.
- RN071 — O processamento de pagamentos deve suportar confirmações assíncronas.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-FIN-002 — Conciliar Pagamentos

### 🎯 Objetivo

Permitir a conciliação entre os pagamentos registrados na plataforma e os valores efetivamente recebidos pelos meios de pagamento.

### 👥 Atores

- Operador Financeiro

### 📋 Pré-condições

- Existirem transações financeiras registradas.

### ✅ Pós-condições

- Pagamentos conciliados.
- Divergências identificadas.

### 🔄 Fluxo Principal

1. O operador acessa o módulo financeiro.
2. Solicita a conciliação.
3. O sistema compara os registros internos com os retornos do gateway.
4. Exibe os resultados.
5. O operador confirma ou analisa divergências.

### 🔀 Fluxos Alternativos

#### A1. Divergência encontrada

1. O sistema registra a inconsistência.
2. Mantém a transação pendente para análise.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN056 — Relatórios financeiros devem utilizar dados transacionais consolidados.

---

## UC-FIN-003 — Gerenciar Contas a Receber

### 🎯 Objetivo

Permitir o gerenciamento dos valores que a empresa possui a receber.

### 👥 Atores

- Operador Financeiro

### 📋 Pré-condições

- Usuário autenticado.
- Permissão para gestão financeira.

### ✅ Pós-condições

- Contas registradas ou atualizadas.

### 🔄 Fluxo Principal

1. O operador acessa contas a receber.
2. Consulta ou cadastra registros.
3. Atualiza informações quando necessário.
4. O sistema salva as alterações.

### 🔀 Fluxos Alternativos

#### A1. Registro inexistente

1. O sistema informa que a conta não foi localizada.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-FIN-004 — Gerenciar Contas a Pagar

### 🎯 Objetivo

Permitir o gerenciamento das obrigações financeiras da empresa.

### 👥 Atores

- Operador Financeiro

### 📋 Pré-condições

- Usuário autenticado.

### ✅ Pós-condições

- Contas atualizadas.

### 🔄 Fluxo Principal

1. O operador acessa o módulo de contas a pagar.
2. Consulta ou registra uma obrigação financeira.
3. Atualiza informações necessárias.
4. O sistema salva os dados.

### 🔀 Fluxos Alternativos

#### A1. Dados inválidos

1. O sistema impede o salvamento.
2. Solicita correção.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-FIN-005 — Gerenciar Fluxo de Caixa

### 🎯 Objetivo

Permitir o acompanhamento das entradas, saídas e saldo financeiro da operação.

### 👥 Atores

- Operador Financeiro

### 📋 Pré-condições

- Existirem movimentações financeiras cadastradas.

### ✅ Pós-condições

- Fluxo de caixa atualizado.

### 🔄 Fluxo Principal

1. O operador acessa o fluxo de caixa.
2. O sistema consolida entradas e saídas.
3. Exibe saldo e projeções.
4. O operador realiza consultas ou filtros.

### 🔀 Fluxos Alternativos

#### A1. Não existirem movimentações

1. O sistema informa ausência de dados.

### 📜 Regras de Negócio

- RN055 — Indicadores devem possuir fonte de dados confiável.
- RN056 — Relatórios financeiros devem utilizar dados transacionais consolidados.
- RN057 — Dados operacionais e analíticos devem permanecer separados.

---

## UC-FIN-006 — Processar Estornos

### 🎯 Objetivo

Permitir o processamento de estornos financeiros relacionados a pagamentos.

### 👥 Atores

- Operador Financeiro

### 📋 Pré-condições

- Pagamento elegível para estorno.

### ✅ Pós-condições

- Estorno registrado.
- Situação financeira atualizada.

### 🔄 Fluxo Principal

1. O operador seleciona uma transação.
2. Solicita o estorno.
3. O sistema envia a solicitação ao gateway.
4. Recebe o retorno.
5. Atualiza os registros financeiros.

### 🔀 Fluxos Alternativos

#### A1. Gateway rejeita o estorno

1. O sistema registra a rejeição.
2. Informa o operador.

### 📜 Regras de Negócio

- RN037 — Cancelamentos e estornos devem permanecer rastreáveis.
- RN039 — O pedido deve manter histórico de eventos relevantes.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-FIN-007 — Gerenciar Centro de Custos

### 🎯 Objetivo

Permitir o cadastro e gerenciamento dos centros de custos utilizados pela operação financeira.

### 👥 Atores

- Operador Financeiro

### 📋 Pré-condições

- Usuário autenticado.
- Permissão concedida.

### ✅ Pós-condições

- Centro de custos criado, atualizado ou inativado.

### 🔄 Fluxo Principal

1. O operador acessa o módulo de centros de custos.
2. Seleciona a operação desejada.
3. Informa os dados necessários.
4. O sistema valida as informações.
5. Salva o registro.

### 🔀 Fluxos Alternativos

#### A1. Nome duplicado

1. O sistema impede o cadastro.
2. Solicita alteração.

#### A2. Centro de custos vinculado a lançamentos

1. O operador solicita exclusão.
2. O sistema impede a remoção física.
3. Sugere a inativação.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.

---

# 🧾 Fiscal

---

## UC-FIS-001 — Emitir Nota Fiscal

### 🎯 Objetivo

Permitir a emissão de documentos fiscais eletrônicos para pedidos elegíveis.

### 👥 Atores

- Operador Fiscal

### 📋 Pré-condições

- Operador autenticado.
- Pedido aprovado e apto para faturamento.
- Configuração fiscal válida.
- Integração com o serviço emissor disponível.

### ✅ Pós-condições

- Nota fiscal emitida e vinculada ao pedido.
- Situação fiscal atualizada.

### 🔄 Fluxo Principal

1. O operador acessa o pedido.
2. Solicita a emissão da nota fiscal.
3. O sistema valida os dados fiscais.
4. Envia as informações ao serviço emissor.
5. Recebe a autorização.
6. Armazena a nota emitida.
7. Atualiza o status do pedido.

### 🔀 Fluxos Alternativos

#### A1. Rejeição pelo órgão emissor

1. O serviço retorna erro.
2. O sistema registra a rejeição.
3. Exibe a mensagem ao operador.

#### A2. Falha de comunicação

1. O sistema registra a ocorrência.
2. Agenda nova tentativa ou solicita reprocessamento.

### 📜 Regras de Negócio

- RN033 — Um pedido somente poderá ser criado quando atender às regras comerciais da plataforma.
- RN034 — O pedido deve seguir um fluxo de estados controlado.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-FIS-002 — Cancelar Nota Fiscal

### 🎯 Objetivo

Permitir o cancelamento de uma nota fiscal emitida.

### 👥 Atores

- Operador Fiscal

### 📋 Pré-condições

- Nota fiscal emitida.
- Cancelamento permitido pela legislação vigente.

### ✅ Pós-condições

- Nota fiscal cancelada.
- Pedido atualizado conforme política da loja.

### 🔄 Fluxo Principal

1. O operador seleciona a nota.
2. Informa o motivo do cancelamento.
3. O sistema envia a solicitação ao órgão competente.
4. Recebe a confirmação.
5. Atualiza os registros internos.

### 🔀 Fluxos Alternativos

#### A1. Prazo expirado

1. O sistema identifica impossibilidade legal.
2. Impede o cancelamento.

#### A2. Rejeição pelo órgão fiscal

1. O sistema registra o motivo.
2. Informa o operador.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN037 — Cancelamentos e estornos devem permanecer rastreáveis.
- RN039 — O pedido deve manter histórico de eventos relevantes.

---

## UC-FIS-003 — Consultar Situação Fiscal

### 🎯 Objetivo

Permitir a consulta do status de documentos fiscais emitidos.

### 👥 Atores

- Operador Fiscal

### 📋 Pré-condições

- Documento fiscal existente.

### ✅ Pós-condições

- Situação fiscal apresentada ao operador.

### 🔄 Fluxo Principal

1. O operador acessa o módulo fiscal.
2. Seleciona um documento.
3. O sistema consulta sua situação.
4. Exibe o resultado.

### 🔀 Fluxos Alternativos

#### A1. Documento inexistente

1. O sistema informa que não localizou o documento.

#### A2. Serviço indisponível

1. O sistema registra a falha.
2. Permite nova consulta posteriormente.

### 📜 Regras de Negócio

- RN049 — O controle de acesso deve ser baseado em papéis e permissões.
- RN050 — Usuários devem acessar apenas recursos autorizados.

---

## UC-FIS-004 — Liberar Pedido para Expedição

### 🎯 Objetivo

Permitir que um pedido seja liberado para o processo logístico após validação fiscal.

### 👥 Atores

- Operador Fiscal

### 📋 Pré-condições

- Pedido faturado.
- Nota fiscal autorizada.

### ✅ Pós-condições

- Pedido liberado para expedição.

### 🔄 Fluxo Principal

1. O operador acessa o pedido.
2. Verifica a situação fiscal.
3. Confirma a liberação.
4. O sistema atualiza o status.
5. O pedido segue para logística.

### 🔀 Fluxos Alternativos

#### A1. Nota pendente

1. O sistema impede a liberação.

#### A2. Nota rejeitada

1. O sistema mantém o pedido bloqueado.

### 📜 Regras de Negócio

- RN034 — O pedido deve seguir um fluxo de estados controlado.
- RN040 — A confirmação do pedido depende da validação final das regras comerciais.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

# 🚚 Logística

---

## UC-LOG-001 — Calcular Frete

### 🎯 Objetivo

Permitir o cálculo das opções de entrega disponíveis para um pedido.

### 👥 Atores

- Sistema Logístico

### 📋 Pré-condições

- CEP informado.
- Produtos definidos no carrinho.

### ✅ Pós-condições

- Opções de frete apresentadas.

### 🔄 Fluxo Principal

1. O sistema recebe os dados do pedido.
2. Consulta o serviço logístico.
3. Recebe modalidades disponíveis.
4. Exibe valores e prazos.

### 🔀 Fluxos Alternativos

#### A1. CEP inválido

1. O sistema informa erro.

#### A2. Serviço indisponível

1. O sistema registra a falha.
2. Solicita nova tentativa.

### 📜 Regras de Negócio

- RN022 — O carrinho deve ser revalidado antes da conclusão da compra.
- RN040 — A confirmação do pedido depende da validação final das regras comerciais.

---

## UC-LOG-002 — Gerar Etiqueta

### 🎯 Objetivo

Gerar a etiqueta de envio para um pedido.

### 👥 Atores

- Sistema Logístico

### 📋 Pré-condições

- Pedido liberado para expedição.
- Dados de entrega válidos.

### ✅ Pós-condições

- Etiqueta gerada e vinculada ao pedido.

### 🔄 Fluxo Principal

1. O sistema envia os dados ao provedor logístico.
2. O serviço gera a etiqueta.
3. Retorna o documento.
4. O sistema registra a etiqueta.

### 🔀 Fluxos Alternativos

#### A1. Erro na integração

1. O sistema registra a ocorrência.
2. Permite novo processamento.

### 📜 Regras de Negócio

- RN034 — O pedido deve seguir um fluxo de estados controlado.
- RN040 — A confirmação do pedido depende da validação final das regras comerciais.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-LOG-003 — Atualizar Status da Entrega

### 🎯 Objetivo

Manter sincronizado o status logístico dos pedidos.

### 👥 Atores

- Sistema Logístico

### 📋 Pré-condições

- Pedido enviado.
- Integração disponível.

### ✅ Pós-condições

- Status atualizado.

### 🔄 Fluxo Principal

1. O sistema consulta o provedor logístico.
2. Recebe atualização da entrega.
3. Atualiza o pedido.
4. Registra o histórico.

### 🔀 Fluxos Alternativos

#### A1. Falha de comunicação

1. O sistema registra a ocorrência.
2. Agenda nova tentativa.

### 📜 Regras de Negócio

- RN034 — O pedido deve seguir um fluxo de estados controlado.
- RN039 — O pedido deve manter histórico de eventos relevantes.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-LOG-004 — Registrar Entrega

### 🎯 Objetivo

Registrar a conclusão do processo de entrega de um pedido.

### 👥 Atores

- Sistema Logístico

### 📋 Pré-condições

- Pedido em trânsito.
- Confirmação recebida do serviço logístico.

### ✅ Pós-condições

- Pedido marcado como entregue.

### 🔄 Fluxo Principal

1. O serviço logístico informa a entrega.
2. O sistema valida a atualização.
3. Altera o status do pedido.
4. Registra a data e hora da entrega.
5. Disponibiliza a informação ao cliente.

### 🔀 Fluxos Alternativos

#### A1. Informação inconsistente

1. O sistema rejeita a atualização.
2. Registra o evento para análise.

### 📜 Regras de Negócio

- RN034 — O pedido deve seguir um fluxo de estados controlado.
- RN039 — O pedido deve manter histórico de eventos relevantes.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

# 📈 Gestão

---

## UC-GES-001 — Visualizar Dashboard Executivo

### 🎯 Objetivo

Permitir que o gestor acompanhe, em uma única interface, os principais indicadores estratégicos e operacionais da plataforma.

### 👥 Atores

- Gestor

### 📋 Pré-condições

- Gestor autenticado.
- Permissão para acesso ao dashboard.

### ✅ Pós-condições

- Dashboard carregado com informações atualizadas.

### 🔄 Fluxo Principal

1. O gestor acessa o módulo de gestão.
2. Seleciona o Dashboard Executivo.
3. O sistema consolida os indicadores disponíveis.
4. Exibe gráficos, métricas e resumos da operação.

### 🔀 Fluxos Alternativos

#### A1. Dados indisponíveis

1. O sistema informa a indisponibilidade temporária.
2. Exibe apenas os indicadores disponíveis.

### 📜 Regras de Negócio

- RN120 — Indicadores devem possuir fonte de dados confiável.
- RN123 — Dados operacionais e analíticos devem permanecer separados.
- RN074 — O controle de acesso deve ser baseado em papéis e permissões.
- RN075 — Usuários devem acessar apenas recursos autorizados.

---

## UC-GES-002 — Visualizar Relatórios Comerciais

### 🎯 Objetivo

Permitir a consulta de relatórios relacionados às atividades comerciais da plataforma.

### 👥 Atores

- Gestor

### 📋 Pré-condições

- Gestor autenticado.

### ✅ Pós-condições

- Relatório apresentado ao usuário.

### 🔄 Fluxo Principal

1. O gestor acessa o módulo de relatórios.
2. Seleciona um relatório comercial.
3. Define filtros quando necessário.
4. O sistema gera e apresenta o relatório.

### 🔀 Fluxos Alternativos

#### A1. Nenhum registro encontrado

1. O sistema informa ausência de dados para os filtros selecionados.

### 📜 Regras de Negócio

- RN120 — Indicadores devem possuir fonte de dados confiável.
- RN122 — A plataforma deve permitir análise por diferentes dimensões.
- RN123 — Dados operacionais e analíticos devem permanecer separados.
- RN074 — O controle de acesso deve ser baseado em papéis e permissões.
- RN075 — Usuários devem acessar apenas recursos autorizados.

---

## UC-GES-003 — Visualizar Relatórios Operacionais

### 🎯 Objetivo

Permitir o acompanhamento dos processos operacionais da plataforma.

### 👥 Atores

- Gestor

### 📋 Pré-condições

- Gestor autenticado.

### ✅ Pós-condições

- Relatório operacional exibido.

### 🔄 Fluxo Principal

1. O gestor seleciona um relatório operacional.
2. Define período e filtros.
3. O sistema processa as informações.
4. Exibe o relatório.

### 🔀 Fluxos Alternativos

#### A1. Não existirem registros

1. O sistema apresenta mensagem informativa.

### 📜 Regras de Negócio

- RN120 — Indicadores devem possuir fonte de dados confiável.
- RN122 — A plataforma deve permitir análise por diferentes dimensões.
- RN123 — Dados operacionais e analíticos devem permanecer separados.

---

## UC-GES-004 — Visualizar Indicadores Financeiros

### 🎯 Objetivo

Permitir o acompanhamento dos principais indicadores financeiros do negócio.

### 👥 Atores

- Gestor

### 📋 Pré-condições

- Gestor autenticado.
- Permissão para acesso financeiro.

### ✅ Pós-condições

- Indicadores financeiros apresentados.

### 🔄 Fluxo Principal

1. O gestor acessa o painel financeiro.
2. O sistema consolida receitas, despesas e demais indicadores.
3. Exibe gráficos e métricas.

### 🔀 Fluxos Alternativos

#### A1. Dados financeiros indisponíveis

1. O sistema informa indisponibilidade temporária.

### 📜 Regras de Negócio

- RN120 — Indicadores devem possuir fonte de dados confiável.
- RN121 — Relatórios financeiros devem utilizar dados transacionais consolidados.
- RN123 — Dados operacionais e analíticos devem permanecer separados.
- RN074 — O controle de acesso deve ser baseado em papéis e permissões.
- RN075 — Usuários devem acessar apenas recursos autorizados.

---

## UC-GES-005 — Visualizar Métricas de Negócio

### 🎯 Objetivo

Permitir o acompanhamento das métricas estratégicas da plataforma.

### 👥 Atores

- Gestor

### 📋 Pré-condições

- Gestor autenticado.

### ✅ Pós-condições

- Métricas apresentadas ao usuário.

### 🔄 Fluxo Principal

1. O gestor acessa o painel de métricas.
2. Seleciona o período desejado.
3. O sistema calcula os indicadores.
4. Exibe os resultados.

### 🔀 Fluxos Alternativos

#### A1. Dados insuficientes

1. O sistema informa impossibilidade de cálculo.

### 📜 Regras de Negócio

- RN120 — Indicadores devem possuir fonte de dados confiável.
- RN122 — A plataforma deve permitir análise por diferentes dimensões.
- RN123 — Dados operacionais e analíticos devem permanecer separados.

---

## UC-GES-006 — Comparar Períodos

### 🎯 Objetivo

Permitir a comparação entre diferentes períodos para análise da evolução do negócio.

### 👥 Atores

- Gestor

### 📋 Pré-condições

- Existirem dados para ambos os períodos.

### ✅ Pós-condições

- Comparação apresentada.

### 🔄 Fluxo Principal

1. O gestor seleciona dois períodos.
2. O sistema consolida os dados.
3. Calcula diferenças e variações.
4. Exibe gráficos comparativos.

### 🔀 Fluxos Alternativos

#### A1. Um dos períodos não possui dados

1. O sistema informa a ausência de informações.

### 📜 Regras de Negócio

- RN120 — Indicadores devem possuir fonte de dados confiável.
- RN122 — A plataforma deve permitir análise por diferentes dimensões.
- RN124 — Relatórios devem preservar consistência histórica.

---

## UC-GES-007 — Analisar Tendências

### 🎯 Objetivo

Permitir a identificação de padrões e tendências a partir dos dados históricos.

### 👥 Atores

- Gestor

### 📋 Pré-condições

- Existirem dados históricos suficientes.

### ✅ Pós-condições

- Tendências calculadas e apresentadas.

### 🔄 Fluxo Principal

1. O gestor solicita análise.
2. O sistema processa os dados históricos.
3. Calcula indicadores de tendência.
4. Exibe gráficos e projeções.

### 🔀 Fluxos Alternativos

#### A1. Histórico insuficiente

1. O sistema informa impossibilidade da análise.

### 📜 Regras de Negócio

- RN120 — Indicadores devem possuir fonte de dados confiável.
- RN123 — Dados operacionais e analíticos devem permanecer separados.
- RN124 — Relatórios devem preservar consistência histórica.

---

## UC-GES-008 — Exportar Relatórios

### 🎯 Objetivo

Permitir a exportação dos relatórios gerados pela plataforma.

### 👥 Atores

- Gestor

### 📋 Pré-condições

- Relatório previamente gerado.
- Usuário autorizado.

### ✅ Pós-condições

- Arquivo disponibilizado para download.

### 🔄 Fluxo Principal

1. O gestor gera um relatório.
2. Seleciona a opção de exportação.
3. Define o formato desejado.
4. O sistema gera o arquivo.
5. Disponibiliza o download.

### 🔀 Fluxos Alternativos

#### A1. Erro na geração

1. O sistema informa a falha.
2. Permite nova tentativa.

### 📜 Regras de Negócio

- RN074 — O controle de acesso deve ser baseado em papéis e permissões.
- RN075 — Usuários devem acessar apenas recursos autorizados.
- RN120 — Indicadores devem possuir fonte de dados confiável.
- RN121 — Relatórios financeiros devem utilizar dados transacionais consolidados.
- RN124 — Relatórios devem preservar consistência histórica.

---

# ⚙️ Configuração da Plataforma

---

## UC-CFG-001 — Configurar Informações da Loja

### 🎯 Objetivo

Permitir que o administrador configure as informações institucionais e operacionais da loja.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Permissão para gerenciamento das configurações da plataforma.

### ✅ Pós-condições

- Informações da loja atualizadas e persistidas.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de configurações.
2. Seleciona a seção de informações da loja.
3. Atualiza os dados desejados.
4. O sistema valida as informações.
5. O sistema salva as alterações.
6. Exibe mensagem de confirmação.

### 🔀 Fluxos Alternativos

#### A1. Dados inválidos

1. O sistema identifica inconsistências.
2. Solicita correção antes do salvamento.

### 📜 Regras de Negócio

- RN004 — Operações críticas devem possuir rastreabilidade.
- RN074 — O controle de acesso deve ser baseado em papéis e permissões.
- RN075 — Usuários devem acessar apenas recursos autorizados.
- RN140 — A plataforma deve disponibilizar informações institucionais essenciais.
- RN141 — O sistema deve permitir gerenciamento de páginas institucionais.

---

## UC-CFG-002 — Configurar Meios de Pagamento

### 🎯 Objetivo

Permitir o gerenciamento dos meios de pagamento disponíveis para utilização pelos clientes.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Integração com gateways disponível quando aplicável.

### ✅ Pós-condições

- Configuração de pagamento atualizada.

### 🔄 Fluxo Principal

1. O administrador acessa a configuração de pagamentos.
2. Seleciona ou altera um meio de pagamento.
3. Define parâmetros necessários.
4. O sistema valida os dados.
5. Salva a configuração.

### 🔀 Fluxos Alternativos

#### A1. Configuração inválida

1. O sistema impede o salvamento.
2. Exibe mensagem informativa.

### 📜 Regras de Negócio

- RN063 — Cada loja deve possuir configurações independentes.
- RN074 — O controle de acesso deve ser baseado em papéis e permissões.
- RN075 — Usuários devem acessar apenas recursos autorizados.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-CFG-003 — Configurar Métodos de Entrega

### 🎯 Objetivo

Permitir o gerenciamento das modalidades de entrega oferecidas pela loja.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.

### ✅ Pós-condições

- Métodos de entrega configurados.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de logística.
2. Seleciona ou cria um método de entrega.
3. Define regras e parâmetros.
4. O sistema valida as informações.
5. Salva a configuração.

### 🔀 Fluxos Alternativos

#### A1. Configuração inconsistente

1. O sistema impede a operação.
2. Solicita ajustes.

### 📜 Regras de Negócio

- RN063 — Cada loja deve possuir configurações independentes.
- RN062 — Apenas pedidos aptos podem iniciar o processo logístico.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

## UC-CFG-004 — Configurar Integrações Externas

### 🎯 Objetivo

Permitir a configuração das integrações da plataforma com serviços externos.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.
- Serviço externo suportado pela plataforma.

### ✅ Pós-condições

- Integração cadastrada ou atualizada.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de integrações.
2. Seleciona um serviço externo.
3. Informa credenciais e parâmetros.
4. O sistema valida a conexão.
5. Salva a configuração.

### 🔀 Fluxos Alternativos

#### A1. Falha de autenticação

1. O sistema identifica erro nas credenciais.
2. Informa o administrador.
3. Impede a conclusão da operação.

### 📜 Regras de Negócio

- RN003 — Customizações não devem comprometer o núcleo da plataforma.
- RN004 — Operações críticas devem possuir rastreabilidade.
- RN063 — Cada loja deve possuir configurações independentes.

---

## UC-CFG-005 — Configurar SEO

### 🎯 Objetivo

Permitir o gerenciamento das configurações de otimização para mecanismos de busca.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.

### ✅ Pós-condições

- Configurações de SEO atualizadas.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de SEO.
2. Configura títulos, descrições, URLs e demais parâmetros.
3. O sistema valida as informações.
4. Salva as configurações.

### 🔀 Fluxos Alternativos

#### A1. Campos obrigatórios ausentes

1. O sistema impede o salvamento.
2. Solicita preenchimento.

### 📜 Regras de Negócio

- RN090 — As URLs devem ser legíveis, estáveis e descritivas.
- RN091 — Produtos e categorias devem possuir URL canônica única.
- RN093 — Produtos indexáveis devem possuir conteúdo suficiente.
- RN096 — O sistema deve permitir controle de indexação.
- RN097 — O sitemap deve refletir o conteúdo canônico relevante.

---

## UC-CFG-006 — Configurar Aparência da Loja

### 🎯 Objetivo

Permitir a personalização visual da loja virtual.

### 👥 Atores

- Administrador

### 📋 Pré-condições

- Administrador autenticado.

### ✅ Pós-condições

- Configuração visual atualizada.

### 🔄 Fluxo Principal

1. O administrador acessa o módulo de aparência.
2. Configura identidade visual, cores, logotipo e demais elementos.
3. O sistema valida os dados.
4. Salva as alterações.
5. Disponibiliza a nova configuração para a loja.

### 🔀 Fluxos Alternativos

#### A1. Arquivo inválido

1. O sistema rejeita o upload.
2. Solicita novo arquivo compatível.

#### A2. Configuração incompatível

1. O sistema impede a publicação.
2. Exibe mensagem explicativa.

### 📜 Regras de Negócio

- RN130 — Personalizações visuais não podem comprometer a operação da plataforma.
- RN133 — Configuração deve ser priorizada em relação à duplicação de código.
- RN135 — Configurações devem ser independentes por loja.
- RN004 — Operações críticas devem possuir rastreabilidade.

---

# 🎯 Cobertura do Roadmap

O conjunto de casos de uso do **My Ecommerce** foi elaborado para representar as principais funcionalidades previstas no roadmap da plataforma, garantindo alinhamento entre os requisitos funcionais, as regras de negócio, a arquitetura e a implementação do sistema.

## 📚 Módulos contemplados

- 🛍️ Loja Virtual
- 👤 Usuários
- 🔐 Controle de Acesso (RBAC)
- 📦 Produtos
- 📊 Estoque
- 📋 Pedidos
- 🚀 Conversão
- 💰 Financeiro
- 🧾 Fiscal
- 🚚 Logística
- 📈 Gestão
- ⚙️ Configuração da Plataforma

## 🎯 Objetivos da documentação

A organização dos casos de uso por domínio tem como finalidade:

- facilitar a compreensão das funcionalidades da plataforma;
- documentar o comportamento esperado de cada processo de negócio;
- servir como base para a implementação das funcionalidades;
- apoiar a elaboração de testes funcionais e de integração;
- garantir a rastreabilidade entre requisitos, regras de negócio, arquitetura e código-fonte;
- simplificar a manutenção e evolução contínua do sistema;
- apoiar futuras integrações e a expansão modular da plataforma.

## 📌 Observações

Os casos de uso representam uma visão funcional da plataforma e podem ser refinados ou estendidos conforme a evolução do roadmap e a incorporação de novos módulos e funcionalidades.

Cada caso de uso está estruturado de forma padronizada, contendo:

- 🎯 Objetivo
- 👥 Atores
- 📋 Pré-condições
- ✅ Pós-condições
- 🔄 Fluxo Principal
- 🔀 Fluxos Alternativos
- 📜 Regras de Negócio

Essa padronização promove maior consistência na documentação, melhora a comunicação entre as equipes envolvidas e facilita o desenvolvimento, a validação e a manutenção do **My Ecommerce** ao longo de seu ciclo de vida.
