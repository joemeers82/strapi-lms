"use strict";

/**
 * tutorial router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::tutorial.tutorial", {
  previx: "",
  only: [],
  except: ["find"],
  config: {},
});
