<p align="center">
  <img align="center" width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/b1343c5c-b2a5-4cb2-a81b-9811089dc36c" />
</p>

# zcn/zod

[![npm version](https://img.shields.io/npm/v/zcn?color=blue)](https://www.npmjs.com/package/zcn)
[![License](https://img.shields.io/npm/l/zcn)](LICENSE)
[![Downloads](https://img.shields.io/npm/dm/zcn)](https://www.npmjs.com/package/zcn)
[![Issues](https://img.shields.io/github/issues/wesleydmscn/zcn)](https://github.com/your-username/zcn/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/your-username/zcn/pulls)

Coleção de validadores brasileiros para Zod, como CPF, CNPJ, telefone e outros padrões locais. 
Projetada para uso em frontend e backend com TypeScript e tipagem forte.

## 🚀 Instalação

```bash
npm install zcn
# ou
yarn add zcn
# ou
pnpm add zcn
```

## 📦 Importando

```ts
import { cpf, cnpj, telefone } from "zcn";
import { z } from "zod";
```

## 🧩 Exemplos de uso

```ts
const userSchema = z.object({
  name: z.string(),
  cpf, // validador do zcn diretamente no schema
});

const result = userSchema.safeParse({
  name: "João",
  cpf: "123.456.789-09",
});
```

### Usando com React

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cpf } from "zcn";

const schema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  cpf, // validador do zcn diretamente no schema
});

type FormData = z.infer<typeof schema>;

export function UserForm() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Nome" />
      {formState.errors.name && <span>{formState.errors.name.message}</span>}

      <input {...register("cpf")} placeholder="CPF" />
      {formState.errors.cpf && <span>CPF inválido</span>}

      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Usando com Fastify

```ts
import Fastify from "fastify";
import { z } from "zod";
import { cnpj } from "zcn";

const fastify = Fastify();

const schema = z.object({
  company: z.string(),
  cnpj: cnpj, // validador do zcn diretamente no schema
});

fastify.post("/company", async (request, reply) => {
  const result = schema.safeParse(request.body);
  if (!result.success) return reply.status(400).send(result.error.format());

  return { message: "CNPJ válido!", data: result.data };
});

fastify.listen({ port: 3000 });
```

## 💡 Benefícios

- Tipagem completa e validação integrada com Zod
- Pronto para Node.js, React, Next.js, NestJS, etc.
- Focado em padrões brasileiros: CPF, CNPJ, telefone...
- Fácil de importar e usar diretamente em schemas Zod

## 🧪 Testes

```bash
npm run test
```

Testes escritos com [Vitest](https://vitest.dev/).

## ⚡ Contribuição

Pull requests são bem-vindos! Para contribuir, apeans siga estas regras:

1. Dê star no projeto.
2. Fork o repositório.
3. Crie uma branch `feature/nome-da-feature` ou `fix/nome-do-bug`.
4. Faça commits claros e atômicos: `feat: descrição da feature`, `fix: descrição do bug`...
5. Garanta que todos os testes passem.
6. Adicione testes para qualquer funcionalidade nova.
7. Abra um Pull Request detalhando: Problema resolvido, Como testar a PR, Quebra de compatibilidade (se houver)
8. Não altere funcionalidades fora do escopo da PR.
9. Código deve passar em lint e estar formatado.
10. PRs sem descrição ou testes podem ser fechadas.
