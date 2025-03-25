import BussinesError from "../error/BussinesError.js";

export default function validateName(name) {
  let varName = name(name);
  if (!name) {
    throw new BussinesError.notFound(varName);
  } else if (typeof name !== 'string') {
    throw new BussinesError.invalidDataType(varName);
  }
}