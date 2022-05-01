const routes = (handler) => [
  {
    method: "POST",
    path: "/users",
    handler: handler.postPenggunaHandler,
  },
];

module.exports = routes;
