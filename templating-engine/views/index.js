<head>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>

<ul>
  <% languages.forEach((language) => { %>
    <li><%= language.name %> &nbsp;
    </li>
  <% }) %>
</ul>
