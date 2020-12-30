# rpg-cards-to-book-view

This project allows one to print [rpg cards json](https://crobi.github.io/rpg-cards/) in a book view format.

Currently some card-specific json properties and card elements are not supported:

- icon
- color
- count
- icon_back
- background_image
- rule element
- fill element
- boxes element

[Online example](https://arwyl.github.io/rpg-cards-to-book-view/)

Tested in Google Chrome only so may not work in other browsers.


## Notes
- experimental sorting by spell level just finds any number in subtitle element and sorts by it (with hope that spells and only spells will have a number in subtitle element)


## Special thanks to

- [crobi](https://github.com/crobi) for creating the rpg-cards format
- [colinmarc](https://github.com/colinmarc) for a great DnD spellbook generator (from which I took some ideas and fonts)
