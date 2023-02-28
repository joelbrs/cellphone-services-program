const validateBody = (req, res, next) => {
  const { body } = req;

  if (
    body.model === undefined ||
    body.status === undefined ||
    body.inclusionDate === undefined ||
    body.piecePrice === undefined ||
    body.servicePrice === undefined ||
    body.profit === undefined ||
    body.deliverdDate === undefined
  ) {
    res.status(400).json({ message: "Some field is undefined or null" });
  }

  if (
    body.model === "" ||
    body.status === "" ||
    body.inclusionDate === "" ||
    body.piecePrice === "" ||
    body.servicePrice === "" ||
    body.profit === "" ||
    body.deliverdDate === ""
  ) {
    res.status(400).json({ message: "Some field is empty" });
  }

  next();
};

module.exports = {
  validateBody
};
