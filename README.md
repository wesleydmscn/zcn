<img width="150" height="150" alt="image" src="https://github.com/user-attachments/assets/d0e0742f-c253-46f4-986e-c687f7d6e61a" />

# zcn/zod

A set of ready-made schemas extended for Zod by [@wesleydmscn](https://www.linkedin.com/in/wesleydmscn/)

[![License](https://img.shields.io/npm/l/zcn)](LICENSE)
[![npm version](https://img.shields.io/npm/v/zcn?color=blue)](https://www.npmjs.com/package/zcn)
[![Downloads](https://img.shields.io/npm/dw/zcn)](https://www.npmjs.com/package/zcn)
[![Issues](https://img.shields.io/github/issues/wesleydmscn/zcn)](https://github.com/your-username/zcn/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/your-username/zcn/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/wesleydmscn/zcn)](https://github.com/wesleydmscn/zcn)

## Installation

```bash
npm install zcn
# or
pnpm install zcn
# or
yarn install zcn
```

## Features

* Validation integrated with Zod v4
* Ready for Node.js, React, Next.js, NestJS, etc.
* Easy to import and use directly with Zod schemas

Built to enhance [Zod](https://zod.dev/) standard validations, `zcn` integrates seamlessly into your projects the same way you’d use Zod.

## Basic usage

You just need to define a schema and use custom validations. For the purposes of this guide, we'll use a simple object schema:

```ts
import { z } from "zcn";

const Customer = z.object({
  name: z.string().nonempty(),
  cpf: z.cpf({ error: "Invalid CPF" }),
  telephone: z.telephone(),
});
```

## Docs

You can see examples of each ready-made schema, how to use the library, and other information directly on the [Wiki](https://github.com/wesleydmscn/zcn/wiki).
