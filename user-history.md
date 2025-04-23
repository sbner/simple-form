# Descrição

Como **usuário interessado em combater fake news**, quero acessar uma página web com um formulário **simples, bonito e responsivo** para informar meus dados e opiniões sobre o uso de uma ferramenta de IA para verificação de notícias.

---

## Critérios de Aceitação

- A página deve ter um **título claro e chamativo** no topo:  
  **Interesse em Ferramenta de Verificação de Fake News com IA**

- Deve haver uma **breve descrição** logo abaixo do título, explicando o objetivo do formulário, por exemplo:  
  > "Ajude-nos a entender como podemos combater as fake news com tecnologia! Responda algumas perguntas rápidas sobre seus interesses e preocupações."

- O formulário deve conter as **10 perguntas abaixo**, com tipos e opções especificados:

---

## Perguntas do Formulário

### 1. Nome completo:  
- **Tipo:** Campo de texto  
- **Placeholder:** "Digite seu nome completo"  
- **Obrigatório** `*`

---

### 2. Idade:  
- **Tipo:** Campo numérico  
- **Placeholder:** "Digite sua idade"  
- **Obrigatório** `*`

---

### 3. E-mail:  
- **Tipo:** Campo de texto (formato e-mail)  
- **Placeholder:** "exemplo@email.com"  
- **Obrigatório** `*`

---

### 4. Você já se preocupou em receber notícias falsas (fake news) pela internet?  
- **Tipo:** Radio button (escolha única)  
- **Opções:**  
  - ( ) Sim  
  - ( ) Não  
  - ( ) Não sei  
- **Obrigatório** `*`

---

### 5. Com que frequência você verifica se uma notícia é verdadeira antes de compartilhar?  
- **Tipo:** Radio button (escolha única)  
- **Opções:**  
  - ( ) Sempre  
  - ( ) Às vezes  
  - ( ) Raramente  
  - ( ) Nunca  
- **Obrigatório** `*`

---

### 6. Você teria interesse em usar uma ferramenta que identifica automaticamente fake news usando inteligência artificial?  
- **Tipo:** Radio button (escolha única)  
- **Opções:**  
  - ( ) Sim  
  - ( ) Não  
  - ( ) Talvez  
- **Obrigatório** `*`

---

### 7. Quais funcionalidades você considera mais importantes em uma ferramenta de verificação de notícias?  
- **Tipo:** Checkbox (múltipla escolha)  
- **Opções:**  
  - [ ] Verificação automática de links e textos  
  - [ ] Alertas de notícias suspeitas  
  - [ ] Explicação do motivo da notícia ser considerada falsa  
  - [ ] Sugestão de fontes confiáveis  
  - [ ] Outro: [Campo de texto curto]  
- **Obrigatório selecionar pelo menos uma opção** `*`

---

### 8. Quais são seus maiores receios em relação ao uso de uma ferramenta de IA para verificação de notícias?  
- **Tipo:** Checkbox (múltipla escolha)  
- **Opções:**  
  - [ ] Privacidade dos meus dados  
  - [ ] Falhas na identificação de fake news  
  - [ ] Lentidão ou dificuldade de uso  
  - [ ] Não tenho receios  
  - [ ] Outro: [Campo de texto curto]  
- **Opcional**

---

### 9. Você autoriza o envio de e-mails com novidades e atualizações sobre a automatização da pesquisa e verificação de fake news?  
- **Tipo:** Radio button (escolha única)  
- **Opções:**  
  - ( ) Sim, autorizo  
  - ( ) Não autorizo  
- **Obrigatório** `*`

---

### 10. Deixe um comentário ou sugestão sobre como a ferramenta poderia te ajudar:  
- **Tipo:** Campo de texto longo (textarea)  
- **Placeholder:** "Digite aqui seu comentário ou sugestão (opcional)"  
- **Opcional**

---

## Regras de Preenchimento

- Os campos **obrigatórios** devem ser claramente indicados (ex: com um asterisco vermelho `*`).
- Os campos de **seleção múltipla** (checkboxes) devem permitir marcar mais de uma opção.
- Os campos de texto devem ter **placeholders** para orientar o preenchimento.
- O **botão de envio** deve ser destacado (ex: cor de destaque, texto “Enviar” ou “Enviar respostas”).
- Após o envio, o usuário deve ver uma **mensagem de agradecimento** (ex: “Obrigado por participar! Suas respostas foram registradas.”).
- A página deve ser **responsiva**, funcionando bem em computadores, tablets e celulares.
- O visual deve ser **leve, moderno e convidativo**, com cores suaves, ícones ilustrativos (ex: ícone de notícia, escudo de segurança, etc.) e espaçamento confortável entre os campos.
- O formulário deve ser **hospedado via GitHub Pages** e o repositório deve estar público.

---

## Orientações Visuais e de Layout

### Topo

- Logo (opcional) ou ícone ilustrativo sobre notícias/IA.
- **Título grande e centralizado**
- **Descrição curta** logo abaixo.

### Formulário

- Seção "**Dados Pessoais**" separada visualmente (ex: fundo levemente diferente ou borda).
- Perguntas agrupadas por tema, com títulos pequenos (ex: “Sobre seu interesse”, “Sobre seus receios”).
- Use **radio buttons** para perguntas de resposta única e **checkboxes** para múltipla escolha.
- **Campos de texto** com bordas arredondadas e sombra leve.
- **Espaçamento generoso** entre perguntas para facilitar a leitura.

### Botão de envio

- **Cor de destaque** (ex: azul, verde, laranja).
- Ícone de aviãozinho ou envelope ao lado do texto “Enviar”.

### Mensagem de sucesso

- Caixa centralizada, cor suave (ex: verde claro), texto amigável.

### Rodapé

- Pequena nota de privacidade:  
  > *Seus dados serão usados apenas para fins desta pesquisa.*

---

## Exemplo de Estrutura (Wireframe Simplificado)

```
+---------------------------------------------+
| [Ícone/Logo]                                |
| Interesse em Ferramenta de Verificação...   |
| Ajude-nos a combater fake news!             |
+---------------------------------------------+
| [Dados Pessoais]                            |
| Nome: [___________]                         |
| Idade: [__]    E-mail: [___________]        |
+---------------------------------------------+
| [Perguntas de múltipla escolha e checkboxes]|
| ...                                         |
+---------------------------------------------+
| [Campo de comentários]                      |
+---------------------------------------------+
|        [ ENVIAR ]                           |
+---------------------------------------------+
| Obrigado por participar!                    |
+---------------------------------------------+
| Seus dados serão usados apenas para fins... |
+---------------------------------------------+
```

---

## Observações Técnicas

- Utilize **HTML5**, **CSS3** (pode usar frameworks como *Bootstrap* ou *Tailwind* para facilitar o layout).
- **JavaScript** ou **Angular** para validação dos campos e feedback do envio.
- O formulário **não precisa salvar em banco de dados**; pode apenas simular o envio e mostrar a mensagem de agradecimento.
- O repositório deve conter um **README** com instruções de como rodar localmente e o link para o GitHub Pages.