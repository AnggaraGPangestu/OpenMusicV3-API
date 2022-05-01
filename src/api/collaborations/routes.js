const routes = (handler) => [
  {
    method: "POST",
    path: "/collaborations",
    handler: handler.postKolaborasiHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/collaborations",
    handler: handler.deleteKolaborasiHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
];

module.exports = routes;
