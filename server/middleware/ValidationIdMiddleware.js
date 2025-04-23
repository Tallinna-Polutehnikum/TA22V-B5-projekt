import BussinesError from "../error/BussinesError.js";

export default function validateId(id) {
  if (!id) {
    throw new BussinesError.notFound('id');
  } else if (isNaN(Number(id)) && id % 1 !== 0) {
    throw new BussinesError.invalidDataType('id');
  }
}