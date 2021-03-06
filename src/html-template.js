function buildHtml(data) {
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"/>
    <link rel="stylesheet" href="style.css" />
    <title>My Team Profile</title>
  </head>
  <body>
  <!---HEADER---->
    <header>
        <nav  class="header navbar navbar-expand-lg">
          <a class="header navbar-brand" href="#"> My Team </a>
        </nav>
    </header>
    <!---Employee Cards Container--->
    <div id=employeeCards class="row">
    ${data}
    </div>
      </div>
    </div>
  </body>
</html>
`;
}
module.exports = buildHtml;