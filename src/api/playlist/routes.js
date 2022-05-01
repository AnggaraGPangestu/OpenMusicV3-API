const routes = (handler) => [
  {
    method: "POST",
    path: "/playlists",
    handler: handler.postDaftarPutarHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
  {
    method: "GET",
    path: "/playlists",
    handler: handler.getDaftarPutarsHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/playlists/{id}",
    handler: handler.deleteDaftarPutarByIdHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
  {
    method: "POST",
    path: "/playlists/{id}/songs",
    handler: handler.postMusikToDaftarPutarHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
  {
    method: "GET",
    path: "/playlists/{id}/songs",
    handler: handler.getMusiksInDaftarPutarHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/playlists/{id}/songs",
    handler: handler.deleteMusikFromDaftarPutarHandler,
    options: {
      auth: "openmusic_jwt",
    },
  },
];

module.exports = routes;
