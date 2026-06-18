# 📜 Regras de Negócio — My Ecommerce

---

# 01. Princípios Gerais

## RN001 — A plataforma deve priorizar consistência operacional

Todas as funcionalidades devem contribuir para uma operação previsível, organizada e eficiente, reduzindo erros, retrabalho e dependência de processos manuais.

---

## RN002 — O núcleo da plataforma deve permanecer íntegro

As funcionalidades essenciais da plataforma, como catálogo, carrinho, checkout, pedidos, clientes, autenticação e administração, não devem ser comprometidas por personalizações específicas de clientes ou segmentos.

---

## RN003 — Personalizações devem preservar o comportamento padrão da plataforma

As customizações de uma loja devem ocorrer, preferencialmente, por meio de:

- configurações;
- temas;
- módulos;
- integrações;
- feature flags;
- conteúdo.

Alterações que modifiquem o comportamento do núcleo da plataforma devem ser tratadas como exceções controladas.

---

## RN004 — Operações críticas devem possuir rastreabilidade

Operações que impactem processos de negócio ou dados relevantes devem gerar registros que permitam identificar:

- responsável pela ação;
- data e hora da operação;
- operação executada;
- entidade afetada;
- alterações realizadas, quando aplicável.

---

# 02. Regras de Catálogo e Produtos

## RN005 — Todo produto deve possuir identificação única

Cada produto deve possuir, obrigatoriamente:

- identificador interno único (ID);
- slug exclusivo para navegação pública;
- SKU ou identificador comercial equivalente.

---

## RN006 — Todo produto deve possuir um estado operacional

O ciclo de vida do produto deve contemplar, no mínimo, os seguintes estados:

- rascunho;
- ativo;
- inativo;
- indisponível para venda.

A plataforma poderá suportar estados adicionais conforme sua evolução.

---

## RN007 — Apenas produtos completos podem ser publicados

Um produto somente poderá ser disponibilizado para venda quando possuir, no mínimo:

- nome;
- slug válido;
- preço;
- descrição;
- imagem principal;
- categoria vinculada;
- disponibilidade para venda.

Quando aplicável, também deverá possuir controle de estoque configurado.

---

## RN009 — Produtos indisponíveis não podem ser comercializados

Produtos indisponíveis podem permanecer visíveis na loja virtual, porém não devem permitir inclusão no carrinho nem conclusão da compra.

---

## RN010 — Produtos vinculados a pedidos não podem ser excluídos permanentemente

Produtos que já participaram de qualquer transação devem permanecer preservados para garantir a integridade do histórico da plataforma.

Quando necessário, deverão ser:

- inativados;
- arquivados; ou
- ocultados.

---

## RN011 — Variantes devem possuir gerenciamento independente

Cada variante de um produto deve possuir gerenciamento independente, podendo manter individualmente:

- estoque;
- SKU;
- preço;
- código de barras;
- imagens;
- atributos específicos.

---

## RN012 — Alterações no catálogo não devem afetar o histórico de pedidos

Depois que um pedido for concluído, alterações posteriores em produtos ou variantes não poderão modificar as informações registradas na transação, incluindo:

- nome;
- SKU;
- preço;
- imagens;
- atributos da variante;
- descrição comercial.

---

## RN013 — O slug deve ser exclusivo

Não é permitido que dois produtos ativos compartilhem o mesmo slug.

Caso exista conflito, a plataforma deverá impedir a publicação ou gerar um identificador único conforme sua estratégia de funcionamento.

---

## RN014 — Produtos devem permanecer rastreáveis após sua descontinuação

Produtos descontinuados ou inativados devem continuar disponíveis para consultas históricas, auditorias, relatórios e rastreamento de pedidos anteriores.

---

## RN015 — A integridade referencial do catálogo deve ser preservada

Categorias, atributos ou demais entidades relacionadas não devem ser removidos quando essa operação comprometer a consistência de produtos ou registros históricos existentes.

---

# 03. Regras de Snapshot e Histórico

---

## RN016 — O pedido deve preservar um snapshot dos itens comercializados

Cada item de um pedido deve armazenar uma representação das informações vigentes no momento da compra, garantindo a integridade e a rastreabilidade do histórico da transação.

O snapshot passa a representar a fonte oficial das informações do item dentro do pedido, preservando o histórico da transação independentemente de alterações futuras no catálogo.

O snapshot deve conter, no mínimo:

- identificador do produto;
- nome do produto;
- SKU;
- variante selecionada;
- preço unitário;
- quantidade;
- subtotal;
- imagem principal, quando aplicável;
- categoria, quando aplicável.

---

## RN017 — O histórico financeiro do pedido deve permanecer imutável

Após a confirmação do pedido, alterações posteriores em produtos, preços, promoções ou demais elementos do catálogo não poderão modificar as informações financeiras originalmente registradas, incluindo:

- preço dos itens;
- descontos aplicados;
- subtotal;
- frete;
- impostos;
- valor total do pedido.

---

## RN018 — Operações relevantes devem gerar histórico

A plataforma deve manter registros históricos das principais operações realizadas sobre pedidos e processos relacionados, incluindo, quando aplicável:

- criação de pedidos;
- alteração de status;
- cancelamentos;
- estornos;
- ajustes manuais de estoque;
- alterações relevantes de preço;
- emissão ou cancelamento de documentos fiscais.

---

## RN019 — O histórico das operações deve permanecer íntegro

Alterações ou inativações posteriores de produtos, categorias, clientes ou demais entidades não devem comprometer a consulta ou a consistência dos registros históricos associados aos pedidos.

---

# 04. Regras de Carrinho

---

## RN020 — A plataforma deve permitir a continuidade da jornada de compra para visitantes

O conteúdo do carrinho de usuários não autenticados poderá ser preservado durante sua navegação, desde que respeitadas as políticas de segurança e privacidade da plataforma.

---

## RN021 — O carrinho de usuários autenticados deve permanecer associado à conta do cliente

Clientes autenticados devem poder recuperar seu carrinho em diferentes sessões ou dispositivos, preservando a continuidade da jornada de compra.

---

## RN022 — O carrinho deve ser revalidado antes da confirmação do pedido

Antes da conclusão da compra, a plataforma deve verificar novamente, no mínimo:

- disponibilidade dos produtos;
- estoque disponível;
- preços vigentes;
- descontos aplicáveis;
- validade de cupons;
- regras de frete;
- valor mínimo do pedido;
- demais regras comerciais configuradas.

---

## RN023 — O carrinho deve refletir o estado atual da operação

Sempre que houver alterações relevantes em produtos, preços ou disponibilidade, o carrinho deverá ser atualizado antes da confirmação do pedido.

---

## RN024 — Produtos indisponíveis não devem permanecer aptos para compra

Caso um produto presente no carrinho deixe de estar disponível, a plataforma deverá impedir sua aquisição e informar claramente o motivo ao cliente.

---

## RN025 — A plataforma deve permitir políticas de expiração do carrinho

O ciclo de vida do carrinho poderá seguir regras configuráveis para expiração, limpeza ou manutenção de acordo com as políticas definidas pela loja.

---

## RN026 — A autenticação do cliente não deve resultar na perda do carrinho

Quando um visitante realizar login ou criar uma conta durante a jornada de compra, o conteúdo do carrinho deverá ser preservado ou conciliado sempre que possível.

---

## RN027 — O carrinho não garante reserva definitiva de estoque

A inclusão de um produto no carrinho não assegura sua disponibilidade até a conclusão da compra, salvo quando houver política explícita de reserva de estoque adotada pela plataforma.

---

# 05. Regras de Preço, Promoção e Cupom

---

## RN028 — O valor do pedido deve refletir as regras comerciais vigentes

Os preços apresentados ao cliente durante a navegação devem ser consistentes com as regras comerciais da plataforma.

Antes da confirmação da compra, o valor do pedido deve ser recalculado e validado para garantir sua conformidade com as condições vigentes.

---

## RN029 — Promoções devem possuir critérios claros de vigência

Toda promoção deve possuir regras explícitas de ativação e desativação, incluindo:

- data e hora de início;
- data e hora de término; ou
- indicação de vigência permanente.

Promoções expiradas não devem ser aplicadas a novos pedidos.

---

## RN030 — Cupons promocionais devem possuir critérios de utilização

Um cupom poderá possuir uma ou mais das seguintes restrições:

- período de validade;
- limite de utilizações;
- limite de uso por cliente;
- valor mínimo do pedido;
- aplicação restrita a produtos específicos;
- aplicação restrita a categorias específicas;
- cumulatividade com outras promoções.

---

## RN031 — A rejeição de um cupom deve ser informada ao cliente

Quando um cupom não puder ser aplicado, a plataforma deverá apresentar uma mensagem clara indicando o motivo da rejeição, como:

- cupom inexistente;
- cupom expirado;
- valor mínimo não atingido;
- limite de utilizações excedido;
- restrição de cliente;
- restrição de categoria;
- restrição de produto;
- incompatibilidade com outras promoções.

---

## RN032 — Promoções simultâneas devem respeitar as regras de cumulatividade

Quando mais de uma promoção puder ser aplicada ao mesmo pedido, a plataforma deverá respeitar as regras de cumulatividade configuradas e impedir combinações não autorizadas.

---

# 06. Regras de Checkout e Pedido

---

## RN033 — Um pedido somente poderá ser criado quando atender às regras comerciais da plataforma

Antes da criação do pedido, deverão ser validados, no mínimo:

- existência de itens válidos;
- disponibilidade dos produtos;
- endereço de entrega válido ou modalidade de retirada disponível;
- valor consolidado da compra;
- método de pagamento disponível;
- demais regras comerciais aplicáveis.

---

## RN034 — Todo pedido deve possuir identificação única e permanente

Cada pedido deve possuir:

- um identificador interno único;
- um número de pedido legível para clientes e operadores.

Essas identificações devem permanecer inalteradas durante todo o ciclo de vida do pedido.

---

## RN035 — O pedido deve seguir um fluxo operacional controlado

Todo pedido deve evoluir por estados previamente definidos pela plataforma.

O fluxo mínimo recomendado contempla os seguintes estados:

- pendente;
- aguardando pagamento;
- pago;
- em separação;
- pronto para retirada;
- enviado;
- entregue;
- cancelado;
- parcialmente estornado;
- totalmente estornado.

Transições incompatíveis com o fluxo operacional não devem ser permitidas.

---

## RN036 — O cancelamento do pedido deve respeitar seu estágio operacional

A possibilidade de cancelamento deve considerar o estado atual do pedido e as políticas comerciais da loja.

Dependendo do estágio da operação, o cancelamento poderá ser bloqueado ou exigir processamento administrativo.

---

## RN037 — Cancelamentos e estornos devem permanecer rastreáveis

Toda operação de cancelamento ou estorno deve manter registro suficiente para identificar:

- motivo da operação;
- data e hora;
- responsável pela ação;
- valor envolvido;
- referência da transação financeira, quando aplicável.

---

## RN038 — O histórico do pedido deve permanecer preservado

Após sua criação, alterações posteriores em produtos, preços, categorias, promoções ou clientes não poderão modificar as informações históricas registradas no pedido.

---

## RN039 — O pedido deve manter histórico de eventos relevantes

Toda alteração significativa ocorrida durante o ciclo de vida do pedido deve gerar um registro histórico que permita identificar:

- o evento realizado;
- o responsável pela ação;
- a data e hora da ocorrência;
- informações complementares, quando aplicável.

---

## RN040 — A confirmação do pedido depende da validação final das regras comerciais

Antes da conclusão definitiva da compra, a plataforma deverá validar novamente todas as regras aplicáveis à operação, incluindo:

- disponibilidade de estoque;
- preços vigentes;
- descontos;
- cupons promocionais;
- frete;
- disponibilidade de entrega;
- regras fiscais;
- regras financeiras.

Caso qualquer validação falhe, o pedido não deverá ser confirmado.

---

# 07. Regras de Estoque

---

## RN041 — O estoque disponível não deve assumir saldo negativo

A plataforma deve impedir operações que resultem em estoque negativo, salvo quando houver política comercial ou operacional que permita explicitamente esse comportamento.

---

## RN042 — A disponibilidade do estoque deve ser garantida antes da confirmação do pedido

Antes da conclusão da compra, a plataforma deve validar a disponibilidade dos produtos e impedir a confirmação de pedidos que excedam a quantidade disponível para venda.

---

## RN043 — Ajustes manuais de estoque devem ser rastreáveis

Toda alteração manual de estoque deve gerar registro histórico que permita identificar a operação realizada e seu responsável.

---

## RN044 — Divergências de estoque devem permitir correção controlada

A plataforma deve possibilitar ajustes decorrentes de situações como:

- inventário físico;
- avarias;
- perdas;
- devoluções;
- cancelamentos;
- erros operacionais.

Toda correção deve preservar a rastreabilidade da operação.

---

## RN045 — Toda movimentação de estoque deve permanecer registrada

Entradas, saídas, reservas, liberações e demais movimentações devem compor o histórico operacional da plataforma para fins de auditoria e controle.

---

## RN046 — Reservas temporárias devem respeitar as políticas da plataforma

Quando houver mecanismo de reserva de estoque, sua criação, manutenção e liberação deverão seguir as regras configuradas pela loja.

---

## RN047 — Movimentações decorrentes de pedidos devem manter consistência com o estoque

As alterações no ciclo de vida de um pedido que impactem a disponibilidade de produtos devem refletir corretamente na posição de estoque da plataforma, preservando sua consistência operacional.

---

# 08. Regras de Usuários e Controle de Acesso

---

## RN048 — Todo cliente deve possuir identificação mínima

Para criação de uma conta, o cliente deve informar, no mínimo:

- nome;
- endereço de e-mail ou telefone válido;
- credencial de autenticação, quando aplicável.

---

## RN049 — O controle de acesso deve ser baseado em papéis e permissões

A plataforma deve utilizar um modelo RBAC (Role-Based Access Control), no qual:

- um papel representa um conjunto de permissões relacionadas a uma função operacional;
- um usuário poderá possuir um ou mais papéis simultaneamente;
- as permissões efetivas do usuário serão determinadas pela união das permissões associadas aos papéis atribuídos.

A plataforma deverá permitir a criação de novos papéis e a configuração de suas permissões conforme as necessidades de cada loja.

---

## RN050 — Usuários devem acessar apenas recursos autorizados

Cada usuário poderá acessar apenas funcionalidades e informações compatíveis com suas permissões e responsabilidades.

No caso dos clientes, o acesso deverá limitar-se aos dados de sua própria conta, incluindo:

- pedidos;
- dados cadastrais;
- endereços;
- favoritos;
- avaliações;
- demais informações de sua titularidade.

---

## RN051 — O endereço de e-mail deve identificar uma única conta

Não é permitido que múltiplas contas compartilhem o mesmo endereço de e-mail, salvo quando política específica da plataforma estabelecer comportamento diferente.

---

## RN052 — O tratamento de dados pessoais deve respeitar a privacidade do usuário

As informações pessoais dos clientes devem ser utilizadas apenas para finalidades legítimas relacionadas à operação da plataforma, observando as políticas de privacidade e a legislação aplicável.

---

## RN053 — Um cliente poderá possuir múltiplos endereços

A plataforma deverá permitir que um cliente mantenha múltiplos endereços cadastrados para entrega ou cobrança, podendo definir um endereço padrão quando aplicável.

---

# 09. Regras de Dashboard, Relatórios e Controle

---

## RN054 — Indicadores devem ser baseados em dados confiáveis

Todos os indicadores apresentados pela plataforma devem ser calculados a partir de informações consistentes, rastreáveis e compatíveis com os registros operacionais do negócio.

---

## RN055 — Relatórios financeiros devem refletir os dados históricos das transações

Indicadores financeiros, como faturamento, receita, ticket médio, descontos, cancelamentos e estornos, devem ser calculados utilizando os registros históricos dos pedidos e seus respectivos snapshots, preservando a consistência das informações ao longo do tempo.

---

## RN056 — A plataforma deve permitir análise multidimensional dos dados

Os módulos de relatórios e dashboards devem possibilitar consultas e agrupamentos considerando, no mínimo:

- período;
- status;
- canal de venda;
- categoria;
- produto;
- cliente.

Novas dimensões poderão ser adicionadas conforme a evolução da plataforma.

---

## RN057 — Dados transacionais e analíticos devem permanecer independentes

Os registros operacionais representam a fonte oficial das informações do negócio.

Relatórios, indicadores e projeções analíticas não devem modificar ou substituir os dados transacionais armazenados.

---

## RN058 — Relatórios devem preservar consistência histórica

Consultas referentes a períodos passados devem refletir as informações válidas no momento em que as operações ocorreram, independentemente de alterações posteriores na plataforma.

---

# 10. Regras de White-label e Evolução da Plataforma

---

## RN059 — Personalizações não devem comprometer o núcleo da plataforma

Alterações relacionadas à identidade visual, branding, layout ou conteúdo não podem afetar:

- consistência das operações;
- regras comerciais;
- regras fiscais;
- integridade dos dados;
- funcionamento do núcleo da plataforma.

---

## RN060 — Configuração deve ser priorizada em relação à alteração do núcleo da plataforma

Sempre que possível, diferenças entre clientes devem ser implementadas por meio de:

- configurações;
- parametrizações;
- feature flags;
- temas;
- módulos;
- políticas configuráveis.

Alterações diretas no comportamento do núcleo da plataforma devem ser evitadas.

---

## RN061 — Cada loja deve possuir isolamento lógico de dados

Em ambientes multi-loja, dados operacionais, cadastrais e transacionais devem permanecer isolados entre as lojas, salvo quando houver configuração explícita permitindo seu compartilhamento.

---

## RN062 — Configurações devem ser independentes por loja

Cada loja poderá possuir configurações próprias relacionadas a:

- identidade visual;
- integrações;
- meios de pagamento;
- logística;
- políticas comerciais;
- parâmetros operacionais.

---

## RN063 — O compartilhamento de recursos deve ser configurável

Catálogos, estoques, usuários administrativos ou quaisquer outros recursos compartilháveis somente poderão ser utilizados de forma conjunta quando houver configuração explícita para essa finalidade.

---

# 11. Regras de Conteúdo Institucional e Transparência

---

## RN064 — A plataforma deve disponibilizar informações institucionais essenciais

A loja virtual deve permitir a apresentação de informações que fortaleçam a transparência e a confiança do consumidor, incluindo, quando aplicável:

- canais de contato;
- política de privacidade;
- política de troca e devolução;
- prazos e modalidades de entrega;
- opções de retirada;
- formas de pagamento aceitas;
- termos e condições de uso;
- demais informações exigidas pela legislação.

---

## RN065 — A plataforma deve permitir o gerenciamento de páginas institucionais

O sistema deve possibilitar a criação, edição, publicação e desativação de páginas institucionais, incluindo, entre outras:

- Sobre a empresa;
- Perguntas frequentes (FAQ);
- Política de troca e devolução;
- Política de privacidade;
- Termos de uso;
- Contato;
- Outras páginas personalizadas.

---

## RN066 — Informações comerciais devem permanecer consistentes durante toda a jornada de compra

Os dados apresentados ao cliente devem permanecer coerentes entre todas as etapas da operação, incluindo:

- catálogo;
- página do produto;
- carrinho;
- checkout;
- confirmação da compra;
- pedido registrado.

Essa consistência aplica-se, no mínimo, a:

- preço;
- disponibilidade;
- prazo estimado;
- modalidades de entrega;
- políticas comerciais aplicáveis.

---

## RN067 — Informações obrigatórias devem permanecer acessíveis

Políticas, conteúdos institucionais e demais informações exigidas para a operação da loja ou pela legislação aplicável devem permanecer acessíveis ao usuário durante sua navegação.

---

## RN068 — Alterações em conteúdos institucionais não devem modificar registros históricos

Mudanças realizadas em políticas, páginas institucionais ou informações comerciais não devem alterar registros históricos já associados a pedidos ou operações concluídas.

---

# 12. Regras de Casos-Limite

---

## RN069 — A disponibilidade dos produtos deve ser revalidada antes da conclusão da compra

Um produto pode tornar-se indisponível entre sua exibição na loja virtual e a confirmação do pedido.

Nessas situações, a plataforma deve:

- validar novamente sua disponibilidade;
- impedir a conclusão da compra quando necessário;
- informar claramente ao cliente o motivo da indisponibilidade.

---

## RN070 — Alterações de preço durante a jornada de compra devem ser tratadas de forma transparente

Caso o preço de um produto seja alterado antes da confirmação do pedido, a plataforma deverá recalcular os valores da compra e informar previamente o cliente sobre qualquer divergência antes da conclusão da operação.

---

## RN071 — O processamento de pagamentos deve suportar diferentes tempos de confirmação

A plataforma deve ser capaz de lidar com meios de pagamento cuja confirmação ocorra de forma imediata ou posterior, preservando a consistência do pedido durante todo o processo.

---

## RN072 — O abandono da compra não deve resultar em perda indevida do carrinho

Quando permitido pelas políticas da plataforma, o cliente poderá interromper sua navegação e retomá-la posteriormente, preservando o conteúdo do carrinho sempre que possível.

---

## RN073 — Operações simultâneas devem preservar a consistência do estoque

Em cenários de concorrência entre múltiplas compras ou operações administrativas, a plataforma deve impedir confirmações incompatíveis com a disponibilidade real dos produtos.

---

## RN074 — Cupons e promoções devem ser revalidados antes da confirmação do pedido

Caso um cupom ou promoção deixe de atender às regras de utilização durante o checkout, a plataforma deverá recalcular os valores da compra e informar claramente ao cliente as alterações ocorridas.

---

## RN075 — Falhas de validação devem impedir a conclusão do pedido

Sempre que qualquer regra comercial, financeira, logística ou operacional deixar de ser atendida durante o processo de compra, a confirmação do pedido deverá ser bloqueada até que a inconsistência seja resolvida.
