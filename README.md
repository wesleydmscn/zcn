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

- Validation integrated with Zod v4
- Ready for Node.js, React, Next.js, NestJS, etc.
- Locale-specific formats from Brazil and other countries (e.g., CPF, CNPJ, CEP, SSN, ZIP code, IBAN) 🕑
- Easy to import and use directly in Zod schemas

## API

| Schema          | Description                                                                                              | Input Type | Returns     | Default Validation                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------- | ---------- | ----------- | --------------------------------------------------------------------------------- |
| `z.cpf()`       | Validates a Brazilian CPF (Cadastro de Pessoa Física). Checks format and both verification digits. | `string`   | `ZodString` | Must match `###.###.###-##` or `###########`.<br>Rejects repeated digits (e.g. `11111111111`) and validates both check digits using CPF’s modulus-11 algorithm. |
| `z.cnpj()`      | Validates a Brazilian CNPJ (Cadastro Nacional da Pessoa Jurídica). Checks format and both verification digits. | `string`   | `ZodString` | Must match `##.###.###/####-##` or `##############`.<br>Rejects repeated digits (e.g. `11111111111111`) and validates both check digits using CNPJ’s weighting algorithm. |
| `z.cep()`       | Validates a Brazilian postal code (CEP). Supports both dashed and undashed formats, rejecting invalid or repeated digits. | `string`   | `ZodString` | Must match `#####-###` or `########`.<br>Rejects invalid ranges (`< 01000000` or `> 98999999`) and repeated digits like `11111111`. |
| `z.telephone()` | Validates a Brazilian phone number (landline or mobile). Checks DDD range, length, and mobile prefix. | `string`   | `ZodString` | Must match:<br>`(##) 9####-####`, `(##) ####-####`, `##########`, or `###########`.<br>Validates DDD (11–99) and requires 9 as the first digit for 9-digit numbers. |

### type `$ZcnValidationParams`

| Option  | Description                                          | Type     | Default |
| ------- | ---------------------------------------------------- | -------- | ------- |
| `error` | Custom error message returned when validation fails. | `string` | —       |

## Basic usage

You just need to define a schema and use custom validations. For the purposes of this guide, we'll use a simple object schema:
```ts
import { z } from "zcn";

const Customer = z.object({
  name: z.string().nonempty(),
  cpf: z.cpf({ error: "Invalid CPF" ),
  telephone: z.telephone(),
});
```

## Inferring types

Thanks to [Zod](https://zod.dev/), you can infer a static type from your schema definitions. You can extract this type with the `z.infer<>` utility and use it as you like:
```ts
const Customer = z.object({
  name: z.string().nonempty(),
  cpf: z.cpf(),
  telephone: z.telephone(),
});

type Customer = z.infer<typeof Customer>;

const customer: Customer = {
  name: "Wesley Damasceno",
  cpf: "00000000000",
  telephone: "99999999999"
}
```

Built to enhance [Zod](https://zod.dev/) standard validations, `zcn` integrates seamlessly into your projects the same way you’d use Zod.
