#! /usr/bin/env node

import { createProgram } from "../classes/create-program";

(async () => {
  const program = createProgram();
  await program.parseAsync();
})();
