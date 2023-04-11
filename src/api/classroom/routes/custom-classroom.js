"use strict";

/**
 * custom classroom router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/classrooms/:id/tutorials",
      handler: "classroom.findTutorials",
      config: {
        auth: false,
      },
    },
  ],
};
