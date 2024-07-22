const productSchema = [
  {
    name: "name",
    required: "Name is required",
    type: "Name must be a string type",
    typeExample: "String",
    minValue: "You must type at least one character on name field",
  },
  {
    name: "brand",
    required: "Brand is required",
    type: "Brand must be a string type",
    typeExample: "String",
    minValue: "You must type at least one character on brand field",
  },
  {
    name: "urlImage",
    required: "urlImage is required",
    type: "urlImage must be a string type",
    typeExample: "String",
    minValue: "You must type at least one character on urlImage field",
  },
  {
    name: "price",
    required: "Price is required",
    type: "Price must be a number type",
    typeExample: 0,
    minValue: "You must type at least one character on price field",
  },
  {
    name: "stock",
    required: "Stock is required",
    type: "Stock must be a number type",
    typeExample: 0,
    minValue: "You must type at least one character on stock field",
  },
];

function validate(schema) {
  const validation = (req, res, next) => {
    const { body } = req;
    const errors = [];

    const fields = Object.keys(body);
    for (const field of fields) {
      const lengthFields = String(body[field]).length;

      if (lengthFields < 1) {
        schema
          .filter((item) => item.name === field)
          .map((item) => errors.push(item.minValue));
      }
    }

    schema.forEach((item) => {
      if (body[item.name] === undefined) {
        errors.push(item.required);
      }

      if (
        body[item.name] !== undefined &&
        typeof body[item.name] !== typeof item.typeExample
      ) {
        errors.push(item.type);
      }
    });

    if (errors.length > 0) return res.status(400).json({ errors });
    return next();
  };

  return validation;
}

module.exports = { productSchema, validate };
