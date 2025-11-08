import { z } from "zod";

import { portNumber } from "../validators";

export const coerce = {
  ...z.coerce,
  port: portNumber,
};
