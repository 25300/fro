<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>Responsive menu</title>
</head>
<body>
    <nav id="nav">
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" class="menu-toggle">
            <i class="fas fa-bars menu-toon"></i>
            <i class="fas fa-times menu-verberg"></i>
        </label>
        <ul class="menu">
            <li><a href="#">Home</a></li>
            <li class="submenu"><a href="#">Over ons</a>
                <ul>
                    <li><a href="#">Over ons</a></li>
                    <li><a href="#">Missie</a></li>
                    <li><a href="#">Visie</a></li>
                </ul>
            </li>
            <li><a href="#">Onze services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <main>
        <h1 id="kop">Welkom op onze site</h1>
        <p>Het menu heeft de volgende eigenschappen:</p>
        <ul>
            <li>Responsive</li>
            <li>Het menu heeft een submenu.</li>
            <li>Het submenu is verborgen en kan worden getoond.</li>
            <li>Er zijn roll-overs.</li>
            <li>Voor mobile weergave kan het menu worden verborgen.</li>
        </ul>
    </main>
    <footer>
        <p>Alisha van Caspel</p>
        <div id="validatie">
            <a href="http://validator.w3.org/check?uri=referer" target="_blank">
                <img src="http://blog.boyet.com/blog/files/media/image/valid-html5-blue.png" alt="Valide HTML5"></a>
            <a href="http://jigsaw.w3.org/css-validator/check/referer" target="_blank">
                <img src="http://jigsaw.w3.org/css-validator/images/vcss-blue.gif" alt="Valide CSS">
            </a>
        </div>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>