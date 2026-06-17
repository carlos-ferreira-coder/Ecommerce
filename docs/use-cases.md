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

## UC-LOJ-001 — Visualizar página inicial

**Ator:** Cliente

## UC-LOJ-002 — Buscar produtos

**Ator:** Cliente

## UC-LOJ-003 — Filtrar produtos

**Ator:** Cliente

## UC-LOJ-004 — Visualizar produto

**Ator:** Cliente

## UC-LOJ-005 — Selecionar variações

**Ator:** Cliente

## UC-LOJ-006 — Adicionar produto ao carrinho

**Ator:** Cliente

## UC-LOJ-007 — Gerenciar carrinho

**Ator:** Cliente

## UC-LOJ-008 — Aplicar cupom de desconto

**Ator:** Cliente

## UC-LOJ-009 — Calcular frete

**Ator:** Cliente / Sistema Logístico

## UC-LOJ-010 — Finalizar compra

**Ator:** Cliente

## UC-LOJ-011 — Realizar pagamento

**Ator:** Cliente / Gateway de Pagamento

## UC-LOJ-012 — Acompanhar pedido

**Ator:** Cliente

## UC-LOJ-013 — Cancelar pedido

**Ator:** Cliente

## UC-LOJ-014 — Solicitar devolução

**Ator:** Cliente

## UC-LOJ-015 — Solicitar troca

**Ator:** Cliente

## UC-LOJ-016 — Adicionar produto aos favoritos

**Ator:** Cliente

## UC-LOJ-017 — Avaliar produto

**Ator:** Cliente

---

# 👤 Usuários

## UC-USR-001 — Criar conta

**Ator:** Cliente

## UC-USR-002 — Autenticar usuário

**Ator:** Cliente

## UC-USR-003 — Recuperar senha

**Ator:** Cliente

## UC-USR-004 — Gerenciar perfil

**Ator:** Cliente

## UC-USR-005 — Gerenciar endereços

**Ator:** Cliente

---

# 🔐 Controle de Acesso (RBAC)

## UC-RBAC-001 — Gerenciar usuários

**Ator:** Administrador

## UC-RBAC-002 — Gerenciar papéis

**Ator:** Administrador

## UC-RBAC-003 — Gerenciar permissões

**Ator:** Administrador

## UC-RBAC-004 — Controlar acesso às funcionalidades

**Ator:** Sistema

---

# 📦 Produtos

## UC-PRO-001 — Cadastrar produto

**Ator:** Administrador

## UC-PRO-002 — Editar produto

**Ator:** Administrador

## UC-PRO-003 — Inativar produto

**Ator:** Administrador

## UC-PRO-004 — Importar produtos

**Ator:** Administrador

## UC-PRO-005 — Exportar produtos

**Ator:** Administrador

## UC-PRO-006 — Gerenciar categorias

**Ator:** Administrador

---

# 📊 Estoque

## UC-EST-001 — Controlar estoque

**Ator:** Operador de Estoque

## UC-EST-002 — Registrar entrada de estoque

**Ator:** Operador de Estoque

## UC-EST-003 — Registrar saída de estoque

**Ator:** Operador de Estoque

## UC-EST-004 — Ajustar estoque

**Ator:** Operador de Estoque

## UC-EST-005 — Realizar inventário

**Ator:** Operador de Estoque

## UC-EST-006 — Reservar estoque

**Ator:** Sistema

## UC-EST-007 — Liberar reserva de estoque

**Ator:** Sistema

---

# 📋 Pedidos

## UC-PED-001 — Gerenciar pedidos

**Ator:** Administrador

## UC-PED-002 — Atualizar status do pedido

**Ator:** Administrador

## UC-PED-003 — Aprovar pedido

**Ator:** Administrador

## UC-PED-004 — Cancelar pedido administrativamente

**Ator:** Administrador

## UC-PED-005 — Gerar etiqueta de envio

**Ator:** Sistema Logístico

## UC-PED-006 — Gerar romaneio

**Ator:** Sistema

## UC-PED-007 — Registrar devolução

**Ator:** Administrador

---

# 🚀 Conversão

## UC-CONV-001 — Capturar lead

**Ator:** Cliente

## UC-CONV-002 — Gerenciar leads

**Ator:** Administrador

## UC-CONV-003 — Converter lead em pedido

**Ator:** Administrador

## UC-CONV-004 — Recuperar carrinho abandonado

**Ator:** Sistema

## UC-CONV-005 — Exibir produtos relacionados

**Ator:** Sistema

## UC-CONV-006 — Exibir produtos em destaque

**Ator:** Sistema

## UC-CONV-007 — Gerenciar banners promocionais

**Ator:** Administrador

## UC-CONV-008 — Gerenciar campanhas promocionais

**Ator:** Administrador

## UC-CONV-009 — Gerenciar cupons

**Ator:** Administrador

---

# 💰 Financeiro

## UC-FIN-001 — Validar pagamento

**Ator:** Gateway de Pagamento

## UC-FIN-002 — Conciliar pagamentos

**Ator:** Operador Financeiro

## UC-FIN-003 — Gerenciar contas a receber

**Ator:** Operador Financeiro

## UC-FIN-004 — Gerenciar contas a pagar

**Ator:** Operador Financeiro

## UC-FIN-005 — Gerenciar fluxo de caixa

**Ator:** Operador Financeiro

## UC-FIN-006 — Processar estornos

**Ator:** Operador Financeiro

## UC-FIN-007 — Gerenciar centro de custos

**Ator:** Operador Financeiro

---

# 🧾 Fiscal

## UC-FIS-001 — Emitir nota fiscal

**Ator:** Operador Fiscal

## UC-FIS-002 — Cancelar nota fiscal

**Ator:** Operador Fiscal

## UC-FIS-003 — Consultar situação fiscal

**Ator:** Operador Fiscal

## UC-FIS-004 — Liberar pedido para expedição

**Ator:** Operador Fiscal

---

# 🚚 Logística

## UC-LOG-001 — Calcular frete

**Ator:** Sistema Logístico

## UC-LOG-002 — Gerar etiqueta

**Ator:** Sistema Logístico

## UC-LOG-003 — Atualizar status da entrega

**Ator:** Sistema Logístico

## UC-LOG-004 — Registrar entrega

**Ator:** Sistema Logístico

---

# 📈 Gestão

## UC-GES-001 — Visualizar dashboard executivo

**Ator:** Gestor

## UC-GES-002 — Visualizar relatórios comerciais

**Ator:** Gestor

## UC-GES-003 — Visualizar relatórios operacionais

**Ator:** Gestor

## UC-GES-004 — Visualizar indicadores financeiros

**Ator:** Gestor

## UC-GES-005 — Visualizar métricas de negócio

**Ator:** Gestor

## UC-GES-006 — Comparar períodos

**Ator:** Gestor

## UC-GES-007 — Analisar tendências

**Ator:** Gestor

## UC-GES-008 — Exportar relatórios

**Ator:** Gestor

---

# ⚙️ Configuração da Plataforma

## UC-CFG-001 — Configurar informações da loja

**Ator:** Administrador

## UC-CFG-002 — Configurar meios de pagamento

**Ator:** Administrador

## UC-CFG-003 — Configurar métodos de entrega

**Ator:** Administrador

## UC-CFG-004 — Configurar integrações externas

**Ator:** Administrador

## UC-CFG-005 — Configurar SEO

**Ator:** Administrador

## UC-CFG-006 — Configurar aparência da loja

**Ator:** Administrador

---

# 🎯 Cobertura do Roadmap

Este conjunto de casos de uso foi estruturado para refletir diretamente os módulos previstos no roadmap do My Ecommerce:

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

A organização por domínio facilita a manutenção da documentação e a rastreabilidade entre requisitos, arquitetura e implementação.
