let mix = require("laravel-mix");

mix.postCss("src/style.css", "src/app.css", [require("tailwindcss")]);
