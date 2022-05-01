const routes = (handler) => [
  {
    method: "GET",
    path: "/playlists/{id}/activities",
    handler: handler.getAktivitasHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
  {
    method: "POST",
    path: "/playlists/{id}/activities",
    handler: handler.postAktivitasHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
];

module.exports = routes;
