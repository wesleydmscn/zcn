import * as zod from "zod";
import * as validators from "./validators";

const z = Object.assign({}, zod, validators) as typeof zod & typeof validators;

export { z };
export type * as ZTypes from "zod";
