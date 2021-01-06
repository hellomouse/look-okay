# Functions

---

These functions are found in `scss/util/_util.scss`:


## List Contains

Returns `true` if `$item` is in `$list`, otherwise returns `false`:

```scss
@function contains($list, $item) {
    @return index($list, $item) != null;
}
```


## Darken Color

Darkens `$color` by `$percent` percentage. `0%` would mean 0 change, while `100%` would mean the color becomes black. 
This function uses `mix()` to make a better fade to black than the builtin `darken()`.

```scss
@function shade($color, $percent) {
    @return mix(black, $color, $percent);
}
```


## Lighten Color

Lightens `$color` by `$percent` percentage. `0%` would mean 0 change, while `100%` would mean the color becomes white. 
This function uses `mix()` to make a better fade to white than the builtin `lighten()`.

```scss
@function tint($color, $percent) {
    @return mix(white, $color, $percent);
}
```


## Auto-contrast Color

Returns black if the lightenss of the color is greater than 50%, otherwise returns white. This can be used to automatically have 
text adjust to a background color. `$color` is the color of the background to analyze, and `$mix` is how much the color should be grayed, ie `0%` means it returns pure black and white, and any higher percentage is how much black or white is mixed with the opposite color.

```scss
@function black-or-white-contrast($color, $mix: 0%) {
    @if lightness($color) < 50% {
        @return shade(white, $mix);
    }
    @else {
        @return tint(black, $mix);
    }
}
```
