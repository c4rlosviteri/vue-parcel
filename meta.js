module.exports = {
  prompts: {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue.js + Parcel project"
    },
    "author": {
      "type": "string",
      "required": true,
      "label": "Author"
    },
    "license": {
      "type": "string",
      "label": "License",
      "default": "MIT"
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    }
  },
  "filters": {
    "src/router/**/*": "router"
  },
  "completeMessage": "{{#inPlace}}To get started:\n\n  npm i\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm i\n  npm run dev{{/inPlace}}"
}