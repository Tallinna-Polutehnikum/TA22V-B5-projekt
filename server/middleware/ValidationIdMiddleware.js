import BussinesError from "../error/BussinesError";

export default function validateId(id) {
  let varName = nameOf(id);
  if (!id) {
    throw new BussinesError.notFound(varName);
  } else if (isNaN(Number(id)) && id % 1 !== 0) {
    throw new BussinesError.invalidDataType(varName);
  }
}