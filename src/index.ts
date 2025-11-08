import * as zod from "zod";
import * as validators from "./validators";
import * as coerces from "./coerces";

type InferredZodTypes = typeof zod;
type ValidatorsTypes = typeof validators;
type CoercesTypes = typeof coerces;
type ZCNTypes = InferredZodTypes & ValidatorsTypes & CoercesTypes;

const z = Object.assign({}, zod, validators, coerces) as ZCNTypes;

export { z };
export type * as ZTypes from "zod";
