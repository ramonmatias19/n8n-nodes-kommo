# Changelog

Todas as mudanças importantes neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

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