# **Shadows** <span class="important-badge">!important</span>

<p class="m-0 mt-md">CSS Shadow utility classes.</p>

---

## Outer Shadows

Use `.shadow-[size]` to set an outer shadow, size can be of `sm, md, lg, xl, 2xl, 3xl`:

<div class="demo">
    <div class="shadow-sm bg-lightest-green [ inline-block m-sm ]" style="width: 100px; height: 100px"></div>
    <div class="shadow-md bg-lightest-green [ inline-block m-sm ]" style="width: 100px; height: 100px"></div>
    <div class="shadow-lg bg-lightest-green [ inline-block m-sm ]" style="width: 100px; height: 100px"></div>
    <div class="shadow-xl bg-lightest-green [ inline-block m-sm ]" style="width: 100px; height: 100px"></div>
    <div class="shadow-2xl bg-lightest-green [ inline-block m-sm ]" style="width: 100px; height: 100px"></div>
    <div class="shadow-3xl bg-lightest-green [ inline-block m-sm ]" style="width: 100px; height: 100px"></div>
</div>

```html
<div class="shadow-sm ..." ...></div>
<div class="shadow-md ..." ...></div>
<div class="shadow-lg ..." ...></div>
<div class="shadow-xl ..." ...></div>
<div class="shadow-2xl ..." ...></div>
<div class="shadow-3xl ..." ...></div>
```

<cssprops>
.shadow-sm | box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5)
.shadow-md | box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5)
.shadow-lg | box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5)
.shadow-xl | box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.5)
.shadow-2xl | box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.35)
.shadow-3xl | box-shadow: 0 15px 32px 0 rgba(0, 0, 0, 0.25)
</cssprops>


## Inner Shadow

Use `.shadow-inner` to set an outer shadow:

<div class="demo">
    <div class="shadow-inner bg-lightest-blue [ inline-block m-sm ]" style="width: 100px; height: 100px"></div>
</div>

```html
<div class="shadow-inner ..." ...></div>
```

<cssprops>
.shadow-inner | box-shadow: inset 0 0 2px 2px rgba(0,0,0,0.15)
</cssprops>


## No Shadow

Use `.shadow-none` to remove all shadows:

<div class="demo">
    <div class="shadow-none bg-lightest-red [ inline-block m-sm ]" style="width: 100px; height: 100px"></div>
</div>

```html
<div class="shadow-none ..." ...></div>
```

<cssprops>
.shadow-none | box-shadow: none
</cssprops>


## Text Shadow

Use `.shadow-text` to set a default text-shadow:

<div class="demo">
    <h1 class="shadow-text">Hello World!</h1>
</div>

```html
<h1 class="shadow-text">Hello World!</h1>
```

<cssprops>
.shadow-text | text-shadow: 0px 3px 4px rgba(0,0,0,0.25)
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for shadows will be generated, however you can 
add or remove variants from the `$shadow-variants` array.

```scss
$shadow-variants: ("responsive") !default;
```


### Shadow prefix

The `shadow-` prefix for all the class names above can be changed using `$shadow-prefix`:

```scss
$shadow-prefix: "shadow-" !default;
```


### Shadow sizes and variants

With the exception of `.shadow-text`, all generated `box-shadow` variants are done using `$shadows`, which maps 
the suffix (in `.shadow-[suffix]`) to a valid box-shadow entry:

```scss
$shadows: (
    "sm":   0 1px 2px 0 rgba(0, 0, 0, 0.5),
    "md":   0 2px 3px 0 rgba(0, 0, 0, 0.5),
    "lg":   0 3px 5px 0 rgba(0, 0, 0, 0.5),
    "xl":   0 5px 8px 0 rgba(0, 0, 0, 0.5),
    "2xl":  0 10px 16px 0 rgba(0, 0, 0, 0.35),
    "3xl":  0 15px 32px 0 rgba(0, 0, 0, 0.25),
    "inner": inset 0 0 2px 2px rgba(0,0,0,0.15),
    "none": none,
) !default;
```


### Text shadow default

Default text shadow for `.shadow-text` is stored in `$text-shadow-default`:

```scss
$text-shadow-default: 0px 3px 4px rgba(0,0,0,0.25) !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `shadows` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("shadows");
```
