export const successRespond = (res, msg, code, data, payload = {}) => {
  return res
    .status(code)
    .json({ success: true, code, msg, data, ...payload })
    .end();
};

export const errorRespond = (res, msg, code) => {
  return res.status(code).json({ success: false, code, msg }).end();
};
