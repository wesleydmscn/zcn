import * as z from "zod";
import { pt } from "zod/locales";

export const zodConfig = () => {
  z.config(pt());
};

zodConfig();
