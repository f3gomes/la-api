const productSchema = [
  {
    name: "name",
    required: "Name is required",
    type: "Name must be a string type",
    typeExample: "String",
  },
  {
    name: "brand",
    required: "Brand is required",
    type: "Brand must be a string type",
    typeExample: "String",
  },
  {
    name: "urlImage",
    required: "urlImage is required",
    type: "urlImage must be a string type",
    typeExample: "String",
  },
  {
    name: "price",
    required: "Price is required",
    type: "Price must be a number type",
    typeExample: 0,
  },
  {
    name: "stock",
    required: "Stock is required",
    type: "Stock must be a number type",
    typeExample: 0,
  },
];

function validate(schema) {
  const validation = (request, response, next) => {
    const { body } = request;
    const errors = [];

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

    if (errors.length > 0) return response.status(400).json({ errors });
    return next();
  };

  return validation;
}

module.exports = { productSchema, validate };
