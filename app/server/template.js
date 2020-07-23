module.exports = (bundle, component, initialState) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Title</title>
      <link rel="stylesheet" type="text/css" href="/${bundle}.css" />
      <script>window.__PRELOADED_STATE__ = ${JSON.stringify(initialState)}</script>
    </head>
    <body>
      <div id="root-app">${component}</div>
      <script src="/${bundle}.js"></script>
    </body>
  </html>
`;
