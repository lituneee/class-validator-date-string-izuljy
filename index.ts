import "reflect-metadata";

import {
  validateSync,
  IsDateString,
  IsISO8601,
  IsEmail,
  validate,
  IsNotEmpty,
  validateOrReject
} from "class-validator";

class Test {
  @IsEmail(undefined, { message: "Email must be an email" })
  IsEmail = "bswjtsnpt@gmail.com ";

  @IsNotEmpty({ message: "String should not be empty" })
  isoString = "";
}

const t = new Test();
const val = validateOrRejectExample(t);
// const val = validateSync(t);
console.log(val);

async function validateOrRejectExample(input) {
  try {
    await validateOrReject(input);
  } catch (errors) {
    console.log(
      "Caught promise rejection (validation failed). Errors: ",
      errors
    );
  }
}
