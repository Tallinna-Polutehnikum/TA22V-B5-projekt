import BussinesError from "../error/BussinesError";

export default function validateId(id) {
  let varName = nameOf(id);
  if (!id) {
    throw new BussinesError.notFound(varName);
  } else if (isNaN(Number(id))) {
    throw new BussinesError.invalidDataType(varName);
  }
}

export default function validateName(name) {
  let varName = nameOf(name);
  if (!name) {
    throw new BussinesError.notFound(varName);
  } else if (typeof name !== 'string') {
    throw new BussinesError.invalidDataType(varName);
  }
}