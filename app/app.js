window.FireUpEmber = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_ACTIVE_GENERATION: true
});

Ember.LOG_VERSION = true;
//Ember.LOG_BINDINGS = true;
Ember.LOG_STACKTRACE_ON_DEPRECATION = true;


// Default load order. Override as you see fit.
require("store");
require("modules/*/model");
require("modules/*/models/*");
require("modules/*/controller");
require("modules/*/controller/*");
require("modules/*/view");
require("modules/*/views/*");
require("helpers/*");
require("router");
require("modules/*/route");
require("modules/*/routes/*");

// Create fixtures
FireUpEmber.IndexModel.FIXTURES = [
  {
    text: "Ember.js",
    url: "http://emberjs.com",
    id: 1
  },
  {
    text: "Ember Data",
    url: "https://github.com/emberjs/data",
    id: 2
  },
  {
    text: "grunt-neuter",
    url: "https://github.com/trek/grunt-neuter",
    id: 3
  },
  {
    text: "Yeoman",
    url: "http://yeoman.io",
    id: 4
  }
];

FireUpEmber.Table.FIXTURES = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
]
