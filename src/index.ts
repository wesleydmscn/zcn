import * as zod from "zod";
import * as validators from "./validators";

type ZodWithValidators = typeof zod & typeof validators;

const z: ZodWithValidators = Object.assign({ ...zod }, validators);

export { z };
