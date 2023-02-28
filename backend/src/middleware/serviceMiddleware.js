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

const validateFieldModel = (req, res, next) => {
  const { body } = req;

  if (body.model === undefined) {
    res.status(400).json({ message: "The field is undefined or null" });
  }

  if (body.model === "") {
    res.status(400).json({ message: "The field is empty" });
  }

  next();
};

const validateFieldStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    res.status(400).json({ message: "The field is undefined or null" });
  }

  if (body.status === "") {
    res.status(400).json({ message: "The field is empty" });
  }

  next();
};

const validateFieldInclusionDate = (req, res, next) => {
  const { body } = req;

  if (body.inclusionDate === undefined) {
    res.status(400).json({ message: "The field is undefined or null" });
  }

  if (body.inclusionDate === "") {
    res.status(400).json({ message: "The field is empty" });
  }

  next();
};

const validateFieldPiecePrice = (req, res, next) => {
  const { body } = req;

  if (body.piecePrice === undefined) {
    res.status(400).json({ message: "The field is undefined or null" });
  }

  if (body.piecePrice === "") {
    res.status(400).json({ message: "The field is empty" });
  }

  next();
};

const validateFieldServicePrice = (req, res, next) => {
  const { body } = req;

  if (body.servicePrice === undefined) {
    res.status(400).json({ message: "The field is undefined or null" });
  }

  if (body.servicePrice === "") {
    res.status(400).json({ message: "The field is empty" });
  }

  next();
};

const validateFieldDeliveredDate = (req, res, next) => {
  const { body } = req;

  if (body.deliveredDate === undefined) {
    res.status(400).json({ message: "The field is undefined or null" });
  }

  if (body.deliveredDate === "") {
    res.status(400).json({ message: "The field is empty" });
  }

  next();
};

module.exports = {
  validateBody,
  validateFieldModel,
  validateFieldStatus,
  validateFieldInclusionDate,
  validateFieldPiecePrice,
  validateFieldServicePrice,
  validateFieldDeliveredDate,
};
