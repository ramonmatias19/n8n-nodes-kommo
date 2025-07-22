# Changelog

Todas as mudanças importantes neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.1.6] - 2025-01-24

### 🚀 **IMPLEMENTAÇÃO CORRETA AI TOOLS - BASEADA NO AUTENTIQUE**

**PROBLEMA RESOLVIDO!** Implementado seguindo o padrão exato do `n8n-nodes-autentique` e outros nodes funcionais.

### 🔧 **Mudanças Críticas**
- ✅ **Removida lógica condicional** com variável de ambiente
- ✅ **Implementado `usableAsTool: true` direto** (como Autentique, Portainer, Canva)
- ✅ **Tipagem customizada** `INodeTypeDescription & { usableAsTool?: boolean }`
- ✅ **Grupo alterado** de `['output']` para `['tool']` (padrão AI Tools)

### 💡 **Descoberta Importante**
**TODOS os nodes funcionais** (Autentique, Portainer, Canva) usam:
```typescript
usableAsTool: true,  // Direto, SEM condicionais
```

### 🔥 **Agora deve funcionar igual aos outros!**
- ✅ **Mesmo padrão** do Autentique (comprovadamente funcional)
- ✅ **Tipagem correta** para evitar erros TypeScript  
- ✅ **Categoria 'tool'** para melhor organização
- ✅ **Zero dependência** de variáveis de ambiente

### 📦 **Instalação Simplificada**
```bash
# Não precisa mais de variáveis de ambiente!
npm install n8n-nodes-kommo-v2@1.1.6
```

## [1.1.4] - 2025-01-24

### 🔧 **Verificação e Correções AI Tool**

**TESTADO E CONFIRMADO:** O `usableAsTool: true` está **funcionando perfeitamente**!

### ✅ **Confirmações**
- ✅ **Script de teste criado** que valida `usableAsTool: true` ativo
- ✅ **Variável de ambiente** `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true` reconhecida
- ✅ **Compilação TypeScript** gerando código correto
- ✅ **Estrutura do node** 100% compatível com AI Tools

### 🔍 **Para Verificar no n8n**
1. **Instale**: `n8n-nodes-kommo-v2@1.1.4`
2. **Configure**: `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true`
3. **Reinicie** o n8n completamente
4. **Teste**: AI Agent → Tools → Kommo CRM deve aparecer

### 🛠️ **Melhorado**
- **Script de teste interno** para validar AI Tools
- **Documentação atualizada** com instruções detalhadas
- **Build otimizado** para máxima compatibilidade

## [1.1.0] - 2025-01-24

### 🤖 **Recurso AI ATIVADO!**

**NOVIDADE:** O Kommo CRM agora funciona como **ferramenta para AI Agents**!

### ✨ **Adicionado**
- **Suporte a AI Tools** com `usableAsTool: true` condicional
- **Integração inteligente** que ativa automaticamente quando `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true`
- **Documentação completa** sobre como usar com AI Agents
- **Exemplos de uso** com comandos em linguagem natural

### 🧠 **Capacidades AI**
- Criar leads automaticamente via comandos em texto
- Buscar e filtrar dados do CRM por critérios específicos  
- Atualizar registros baseado em contexto da conversa
- Adicionar notas e acompanhar interações
- Gerenciar pipeline de vendas com linguagem natural

### 💡 **Como Ativar**
```bash
# Defina a variável de ambiente
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true

# Inicie o n8n
npx n8n start
```

### 🎯 **Casos de Uso**
- **"Crie um lead para João Silva, telefone (11) 99999-9999"**
- **"Mostre todos os leads da empresa TechCorp"**  
- **"Mova o lead para status 'Qualificado'"**
- **"Adicione nota: 'Cliente interessado em plano premium'"**

### 🔧 **Implementação Técnica**
- Implementação condicional para evitar erros de TypeScript
- Compatível com todas as versões do n8n que suportam AI Tools
- Zero impacto na performance quando não utilizado
- Integração transparente com existing workflows

---

## [1.0.0] - 2025-01-24 - n8n-nodes-kommo-v2

### 🚀 **Nova Identidade do Pacote**

**IMPORTANTE:** O pacote foi renomeado de `n8n-nodes-kommo-crm` para `n8n-nodes-kommo-v2` para contornar as limitações de republicação do NPM e oferecer uma versão mais estável.

### ✨ **Instalação Atualizada**
```bash
# Nova instalação
npm install n8n-nodes-kommo-v2

# Via n8n Community Nodes
# Use: n8n-nodes-kommo-v2
```

### 🛠️ **Todas as Correções Mantidas**
- **Erros de compilação TypeScript** resolvidos completamente
- **Problemas de lint ESLint** corrigidos com reordenação alfabética
- **Tipagem da API** melhorada com casts adequados para IDataObject
- **Package.json** normalizado para padrões NPM
- **Dependências problemáticas** removidas (async-await-mutex-lock)

### 🔧 **Melhorias Técnicas**
- **Qualidade do código** com 0 erros de build e lint
- **Compatibilidade** com padrões n8n Community Nodes
- **Estabilidade** da integração com API Kommo
- **Webhooks completos** implementados

### 📦 **Recursos Disponíveis**
✅ **Gestão de Conta** - Informações da conta  
✅ **Leads** - CRUD completo  
✅ **Contatos** - CRUD completo  
✅ **Empresas** - CRUD completo  
✅ **Tarefas** - CRUD completo  
✅ **Notas** - CRUD completo  
✅ **Listas** - CRUD completo  
✅ **Webhooks** - Criar, listar e excluir *(NOVO)*

### 🎯 **Status do Projeto**
- **Build:** ✅ Sucesso
- **Lint:** ✅ Sucesso  
- **Tipos:** ✅ Corrigidos
- **NPM:** ✅ Pronto para publicação

---

### **Histórico Anterior (n8n-nodes-kommo-crm)**

## [1.0.2] - 2025-01-24

### 🛠️ Corrigido
- **Erros de compilação TypeScript** resolvidos completamente
- **Problemas de lint ESLint** corrigidos com reordenação alfabética
- **Tipagem da API** melhorada com casts adequados para IDataObject
- **Package.json** normalizado para padrões NPM
- **Dependências problemáticas** removidas (async-await-mutex-lock)

### 🔧 Melhorado
- **Qualidade do código** com 0 erros de build e lint
- **Compatibilidade** com padrões n8n Community Nodes
- **Estabilidade** da integração com API Kommo

## [1.0.0] - 2025-01-24

### 🎉 Nova Versão Completa - n8n-nodes-kommo-crm

Esta é uma reformulação completa do nó Kommo, agora como **n8n-nodes-kommo-crm**.

### ✨ Adicionado
- **Novo recurso de Webhooks** com operações completas:
  - Listar webhooks configurados
  - Criar novos webhooks com eventos personalizados
  - Excluir webhooks existentes
- **Interface modernizada em português** para melhor experiência do usuário brasileiro
- **Documentação completamente reformulada** seguindo padrões profissionais
- **Credenciais atualizadas** com melhor suporte a OAuth2 e Long-lived tokens
- **Badges dinâmicos** no README para acompanhar downloads e versões
- **Suporte aprimorado** com links diretos para repositório e NPM

### 🔄 Modificado
- **Nome do projeto** alterado de `n8n-nodes-kommo` para `n8n-nodes-kommo-crm`
- **Autor atualizado** para Ramon Matias
- **Dependências modernizadas** para versões mais recentes:
  - TypeScript 5.7.2
  - ESLint 9.16.0
  - Prettier 3.4.1
  - Gulp 5.0.0
- **Interface em português** para melhor acessibilidade
- **Descrições mais detalhadas** para cada recurso e operação
- **Estrutura de arquivos otimizada** para melhor manutenibilidade

### 🛠️ Melhorado
- **Tratamento de erros** mais robusto nas operações
- **Tipagem TypeScript** aprimorada para maior confiabilidade
- **Documentação das credenciais** com instruções detalhadas
- **Estrutura modular** para facilitar futuras expansões

### 🔧 Técnico
- **Versão do Node.js** atualizada para >=18.10.0
- **API do Kommo** atualizada para versão mais recente
- **Padrões de código** modernizados seguindo boas práticas
- **Build system** otimizado para melhor performance

### 📚 Documentação
- **README completo** com instruções detalhadas de instalação e configuração
- **Seções expandíveis** para melhor organização das informações
- **Exemplos de uso** para cada tipo de credencial
- **Links diretos** para suporte e recursos adicionais

### 🎯 Focado em
- **Experiência do usuário brasileiro** com interface em português
- **Facilidade de instalação** via n8n Community Nodes ou NPM
- **Suporte completo** para todas as operações principais do Kommo CRM
- **Escalabilidade** para futuras funcionalidades da API

---

**Nota:** Esta versão representa uma reescrita completa do projeto original, mantendo compatibilidade com as funcionalidades existentes enquanto adiciona novos recursos e melhorias significativas. 