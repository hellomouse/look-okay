# **Grid** <span class="important-badge">!important</span>

<p class="m-0 mt-md">Grid utility classes.</p>

---

## Getting started

To make an element `display: grid`, add the `.grid` class.


## Columns

Use the `grid-cols` classes to fix the number of columns. The general format is `.grid-cols-[num]`, where num is 1 through 16 inclusive, or `none`:

<div class="demo grid gap-sm grid-cols-5">
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
</div>

```html
<div class="grid grid-cols-5 gap-sm">
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
</div>
```

<cssprops>
.grid-cols-1 | grid-template-columns: repeat(1, minmax(0, 1fr))
.grid-cols-2 | grid-template-columns: repeat(2, minmax(0, 1fr))
... | ...
.grid-cols-16 | grid-template-columns: repeat(16, minmax(0, 1fr))
.grid-cols-none | grid-template-columns: none
</cssprops>


## Rows

Use the `.grid-rows` classes to fix the number of rows. The general format is `grid-rows-[num]`,
where num can be from 1 through 8 inclusive, or `none`.

The below example uses `.grid-flow-col` to place items column by column, allowing the number of columns to be automatically determined.

<div class="demo grid gap-sm grid-rows-3 grid-flow-col">
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
    <div class="bg-light-blue p-lg border-radius"></div>
</div>

```html
<div class="grid grid-rows-3 grid-flow-col ...">
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
    <div class="bg-light-blue p-lg ..."></div>
</div>
```

<cssprops>
.grid-rows-1 | grid-template-rows: repeat(1, minmax(0, 1fr))
.grid-rows-2 | grid-template-rows: repeat(2, minmax(0, 1fr))
... | ...
.grid-rows-8 | grid-template-rows: repeat(8, minmax(0, 1fr))
.grid-rows-none | grid-template-rows: none
</cssprops>


## Column Span

Use the `col-span` classes to adjust how many columns an item spans.

The general format is `.col-span-[num]`, where num can be 1 through 16 inclusive, in addition to `.col-auto` and `.col-full`.

<div class="demo grid gap-sm grid-cols-5">
    <div class="bg-lightest-red p-lg border-radius"></div>
    <div class="bg-light-red col-span-3 p-lg border-radius white">.col-span-3</div>
    <div class="bg-lightest-red p-lg border-radius"></div>
</div>

```html
<div class="grid grid-cols-5 ...">
    <div class="..."></div>
    <div class="col-span-3 ...">.col-span-3</div>
    <div class="..."></div>
</div>
```

<cssprops>
.col-span-1 | grid-column: span 1 / span 1
...
.col-span-16 | grid-column: span 16 / span 16
.col-auto | grid-column: auto
.col-full | grid-column: 1 / -1
</cssprops>


## Column Start / End

Use `.col-start-[num]` and `.col-end-[num]`, as well as `.col-start-auto` and `.col-end-auto` to specify start and ending columns.

In this case, num can be 1 through *17* inclusive, as start and end are aligned to grid lines.

For example, for a grid with 16 columns, grid line 1 is the leftmost 
side of the grid, and grid line 17 is the rightmost side of the grid, so an item that has 
`.col-start-1` and `.col-end-17` would span the entire row, with width 17 - 1 = 16.

<div class="demo grid gap-sm grid-cols-11">
    <div class="bg-lightest-green p-lg border-radius"></div>
    <div class="bg-light-green col-start-2 col-end-5 p-lg border-radius white">start-2 end-5</div>
    <div class="bg-lightest-green p-lg border-radius"></div>
    <div class="bg-light-green col-start-6 col-span-4 p-lg border-radius white">start-6 span-4</div>
    <div class="bg-lightest-green col-span-2 p-lg border-radius"></div>
</div>

```html
<div class="grid gap-sm grid-cols-11">
    <div class="col-start-2 col-end-5 ...">start-2 end-5</div>
    <div class="col-start-6 col-span-4 ...">start-6 span-4</div>
</div>
```

<cssprops>
.col-start-1 | grid-column-start: 1
... | ...
.col-start-17 | grid-column-start: 17
.col-start-auto | grid-column-start: auto
.col-end-1 | grid-column-end: 1
... | ...
col-end-17 | grid-column-end: 17
.col-end-auto | grid-column-end: auto
</cssprops>


## Row Span

Use `.row-span-[num]`, where num can be 1 through 8 inclusive, `.row-none` and `.row-full` to adjust how many 
rows an item spans:

<div class="demo grid gap-sm grid-rows-5 grid-cols-2 grid-flow-col">
    <div class="bg-lightest-purple p-lg border-radius"></div>
    <div class="bg-light-purple row-span-3 p-lg border-radius flex justify-center align-items-center white">.row-span-3</div>
    <div class="bg-lightest-purple p-lg border-radius"></div>
    <div class="bg-light-purple p-lg border-radius row-span-5 flex justify-center align-items-center white">.row-span-5</div>
</div>

```html
<div class="grid grid-rows-5 grid-cols-2 ...">
    <div class="row-span-3 ...">.row-span-3</div>
    <div class="row-span-5 ...">.row-span-5</div>
</div>
```

<cssprops>
.row-span-1 | grid-row: span 1 / span 1
... | ...
.row-span-8 | grid-row: span 8 / span 8
.row-auto | grid-row: auto
.row-full | grid-row: 1 / -1
</cssprops>


## Row Start / End

You can also use `.row-start-[num]` and `.row-end-[num]`, as well as `.row-start-auto` and `.row-end-auto` to specify start and ending rows.

In this case, num can be 1 through *9* inclusive, as start and end are aligned to grid lines.

For example, for a grid with 8 rows, grid line 1 is the topmost 
side of the grid, and grid line 9 is the bottommost side of the grid, so an item that has 
`.row-start-1` and `.row-end-9` would span the entire column, with height 9 - 1 = 8.

<div class="demo grid gap-sm grid-rows-6 grid-cols-3 grid-flow-col">
    <div class="bg-lightest-pink p-lg border-radius"></div>
    <div class="bg-light-pink row-start-2 row-end-5 p-lg border-radius flex justify-center align-items-center white">start-2 end-5</div>
    <div class="bg-lightest-pink p-lg border-radius row-span-2"></div>
    <div class="bg-lightest-pink p-lg col-start-2 border-radius row-span-2"></div>
    <div class="bg-light-pink row-start-3 row-span-4 p-lg border-radius flex justify-center align-items-center white">start-3 span-4</div>
    <div class="bg-light-pink row-end-4 col-start-3 row-span-3 p-lg border-radius flex justify-center align-items-center white">end-4 span-3</div>
    <div class="bg-lightest-pink p-lg col-start-3 border-radius row-span-3"></div>
</div>

```html
<div class="grid grid-rows-6 grid-cols-2 ...">
    <div class="row-start-2 row-end-5 ...">start-2 end-5</div>
    <div class="row-start-3 row-span-4 ...">start-3 span-4</div>
    <div class="row-end-4 row-span-3 ...">end-4 span-3</div>
</div>
```

<cssprops>
.row-start-1 | grid-row-start: 1
... | ...
.row-start-9 | grid-row-start: 9
.row-start-auto | grid-row-start: auto
---
.row-end-1 | grid-row-end: 1
... | ...
.row-end-9 | grid-row-end: 9
.row-end-auto | grid-row-end: auto
</cssprops>



## Auto Flow

Use `.grid-flow-row`, `.grid-flow-col`, `.grid-flow-row-dense`, and `.grid-flow-col-dense` to adjust how items 
are placed into a grid.

<!-- tabs:start -->

#### ** Flow row **

When using `.grid-flow-row`, items are placed in row by row:

<div class="demo grid gap-sm grid-cols-3 grid-flow-row">
    <div class="bg-light-blue p-md border-radius white">1</div>
    <div class="bg-light-blue p-md border-radius white">2</div>
    <div class="bg-light-blue p-md border-radius white">3</div>
    <div class="bg-light-blue p-md border-radius white">4</div>
    <div class="bg-light-blue p-md border-radius white">5</div>
    <div class="bg-light-blue p-md border-radius white">6</div>
</div>

```html
<div class="grid grid-cols-3 grid-flow-row ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```


#### ** Flow col **

When using `.grid-flow-col`, items are placed in column by column:

<div class="demo grid gap-sm grid-rows-3 grid-cols-3 grid-flow-col">
    <div class="bg-light-blue p-md border-radius white">1</div>
    <div class="bg-light-blue p-md border-radius white">2</div>
    <div class="bg-light-blue p-md border-radius white">3</div>
    <div class="bg-light-blue p-md border-radius white">4</div>
    <div class="bg-light-blue p-md border-radius white">5</div>
    <div class="bg-light-blue p-md border-radius white">6</div>
</div>

```html
<div class="grid grid-rows-3 grid-cols-3 grid-flow-col ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

#### ** Dense packing **

The dense versions (`.grid-flow-row-dense` and `.grid-flow-col-dense`) try to fill in holes earlier in the grid if a smaller element can fit, which can cause items to be added out of order.

The default non-dense algorithm will only add elements moving forward, and never backtrack to fill holes.

In the example below, element 2 is inserted before element 1 because there is a gap it can fit and it is using dense packing.

<div class="demo grid gap-sm grid-cols-4 grid-flow-col-dense">
    <div class="bg-lighter-blue p-md col-start-2 border-radius white">1</div>
    <div class="bg-blue p-md border-radius white">2</div>
    <div class="bg-lighter-blue p-md border-radius white">3</div>
    <div class="bg-lighter-blue p-md border-radius white">4</div>
</div>

```html
<div class="grid grid-cols-4 grid-flow-col-dense ...">
    <div class="col-start-2 ...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
    <div class="...">4</div>
    <div class="...">5</div>
    <div class="...">6</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.grid-flow-row | grid-auto-flow: row
.grid-flow-col | grid-auto-flow: column
.grid-flow-row-dense | grid-auto-flow: row dense
.grid-flow-col-dense | grid-auto-flow: column dense
</cssprops>


## Auto Rows & Columns

Use `.auto-cols-[prop]` or `.auto-rows-[prop]` to adjust automatic sizing of implicitly created rows or columns.
Prop can be of `auto`, `min`, `max`, `fr`.

<div class="demo grid gap-sm grid-flow-col auto-cols-min">
    <div class="p-md bg-light-red white">Some text A</div>
    <div class="p-md bg-light-red white">Some text B</div>
    <div class="p-md bg-light-red white">Some text C</div>
</div>

```html
<div class="grid grid-flow-col auto-cols-min ...">
  <div class="...">Some text A</div>
  <div class="...">Some text B</div>
  <div class="...">Some text C</div>
</div>
```

<cssprops>
.auto-cols-auto | grid-auto-columns: auto
.auto-cols-min | grid-auto-columns: min-content
.auto-cols-max | grid-auto-columns: max-content
.auto-cols-fr | grid-auto-columns: minmax(0, 1fr)
---
.auto-rows-auto | grid-auto-rows: auto
.auto-rows-min | grid-auto-rows: min-content
.auto-rows-max | grid-auto-rows: max-content
.auto-rows-fr | grid-auto-rows: minmax(0, 1fr)
</cssprops>


## Gap

Use `.gap-[size]` to set the gap size between items in a grid. Size can be of `none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`.

You can also specify a gap along an axis using the `.gap-x-` or `.gap-y-` prefix:

<div class="demo grid gap-lg grid-cols-3 grid-flow-row white">
    <div class="bg-light-green p-md border-radius">1</div>
    <div class="bg-light-green p-md border-radius">2</div>
    <div class="bg-light-green p-md border-radius">3</div>
    <div class="bg-light-green p-md border-radius">4</div>
    <div class="bg-light-green p-md border-radius">5</div>
    <div class="bg-light-green p-md border-radius">6</div>
</div>

```html
<div class="grid gap-lg ...">
    <div class="...">1</div>
    ...
</div>
```

<cssprops>
.gap-none | gap: 0
.gap-xs | gap: 0.125em
.gap-sm | gap: 0.25em
.gap-md | gap: 0.5em
.gap-lg | gap: 0.75em
.gap-xl | gap: 1em
.gap-2xl | gap: 1.5em
.gap-3xl | gap: 2em
---
.gap-x-none | column-gap: 0
.gap-x-xs | column-gap: 0.125em
... | ...
---
.gap-y-none | row-gap: 0
.gap-y-xs | row-gap: 0.125em
... | ...
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for grid will be generated, however you can 
add or remove variants from the `$grid-variants` array.

```scss
$grid-variants: ("responsive") !default;
```


### Grid prefix

To replace the `grid-` prefix, change `$grid-prefix`. All classes that are prefixed with `grid-` will use the new prefix when changed.

```scss
$grid-prefix: "grid-" !default;
```


### Max grid size

To specify the max number of rows and columns to generate util classes like `col-span-` for, change `$grid-cols` and `$grid-rows`:

```scss
$grid-cols: 16 !default;
$grid-rows: 8 !default;
```


### Gap sizes

A map of size suffix to value is stored in `$gap-sizes`. Add or remove keys to add or remove gap size variants:

```scss
$gap-sizes: (
    "none": 0,
    "xs":   0.125em,
    "sm":   0.25em,
    "md":   0.5em,
    "lg":   0.75em,
    "xl":   1em,
    "2xl":  1.5em,
    "3xl":  2em
) !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `grid` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("grid");
```
