let index () =
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>È uscito Joypad?</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">

      <link rel="apple-touch-icon" sizes="180x180"    href="/static/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png">
      <link rel="manifest"                            href="/static/site.webmanifest">
      <style>
          body {
              font-family: 'Montserrat', sans-serif;
              text-align: center;
              background-color: beige;
          }
          h1 {
              margin-top: 3em;
          }
      </style>
    </head>
    <body>
        <h1><%s Utils.risposta () %></h1>
    </body>
  </html>