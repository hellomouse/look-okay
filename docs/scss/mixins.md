# Mixins

---

## Variants

The `@variants` mixin make pseudo-class variants of any class.

For example,

```scss
@include variants("hidden", ("responsive")) {
    display: none;
}
```

Generates a class called `.hidden` as well as all responsive variants (such as `.md:hidden`).

Variants of a class have higher specificity than the base class, ie, in the example above, `.md:hidden` would always override `.hidden`.

The responsive variant can be combined with other variants, for example, `md:hover:classname`.

```scss
@mixin variants($classname, $variants: ('responsive')) {
    @include _variant-generator($classname, '', $variants) {
        @content;
    }

    @if (contains($variants, 'all') or contains($variants, 'responsive')) {
        @each $breakpoint, $width in $breakpoints-list {
            @media (min-width: $width) {
                @include _variant-generator($classname, $breakpoint + $variant-separator, $variants, true) {
                    @content;
                }
            }
        }
    }
}
```
