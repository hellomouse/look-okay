# **Flexbox** <span class="important-badge">!important</span>

<p class="m-0 mt-md">Flexbox utility classes.</p>

---

## Getting started

To make an element `display: flex`, add the `.flex` class.


## Flex direction

Use the flex direction classes to change the direction items are rendered:

<!-- tabs:start -->

#### ** Row **

Use `.flex-row` to render items in a row:

<div class="demo">
    <div class="flex flex-row p-sm">
        <div class="bg-blue p-md border-radius m-sm white">1</div>
        <div class="bg-blue p-md border-radius m-sm white">2</div>
        <div class="bg-blue p-md border-radius m-sm white">3</div>
    </div>
</div>

```html
<div class="flex flex-row ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Row reverse **

Use `.flex-row-reverse` to render items in a row in reverse order:

<div class="demo">
    <div class="flex flex-row-reverse p-sm">
        <div class="bg-pink p-md border-radius m-sm white">1</div>
        <div class="bg-pink p-md border-radius m-sm white">2</div>
        <div class="bg-pink p-md border-radius m-sm white">3</div>
    </div>
</div>

```html
<div class="flex flex-row-reverse ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

### ** Column **

Use `.flex-column` to render items in a column:

<div class="demo">
    <div class="flex flex-column p-sm">
        <div class="bg-blue p-md border-radius m-sm white">1</div>
        <div class="bg-blue p-md border-radius m-sm white">2</div>
        <div class="bg-blue p-md border-radius m-sm white">3</div>
    </div>
</div>

```html
<div class="flex flex-column ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

### ** Column reverse **

Use `.flex-column-reverse` to render items in a column in reverse order:

<div class="demo">
    <div class="flex flex-column-reverse p-sm">
        <div class="bg-pink p-md border-radius m-sm white">1</div>
        <div class="bg-pink p-md border-radius m-sm white">2</div>
        <div class="bg-pink p-md border-radius m-sm white">3</div>
    </div>
</div>

```html
<div class="flex flex-column-reverse ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.flex-row | flex-direction: row
.flex-row-reverse | flex-direction: row-reverse
.flex-column | flex-direction: column
.flex-column-reverse | flex-direction: column-reverse
</cssprops>


## Flex wrap

Use the flex-wrap classes to change wrapping behavior:

<!-- tabs:start -->

#### ** No wrap **

Use `.flex-nowrap` to prevent items from wrapping around:

<div class="demo">
    <div class="flex flex-nowrap p-sm">
        <div class="bg-blue w-40 p-md border-radius m-sm white">1</div>
        <div class="bg-blue w-40 p-md border-radius m-sm white">2</div>
        <div class="bg-blue w-40 p-md border-radius m-sm white">3</div>
    </div>
</div>

```html
<div class="flex flex-nowrap ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

#### ** Wrap **

Use `.flex-wrap` to enable wrapping of items:

<div class="demo">
    <div class="flex flex-wrap p-sm">
        <div class="bg-blue w-40 p-md border-radius m-sm white">1</div>
        <div class="bg-blue w-40 p-md border-radius m-sm white">2</div>
        <div class="bg-blue w-40 p-md border-radius m-sm white">3</div>
    </div>
</div>

```html
<div class="flex flex-wrap ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```


#### ** Wrap reverse **

Use `.flex-wrap-reverse` to wrap items around in the reverse direction:

<div class="demo">
    <div class="flex flex-wrap-reverse p-sm">
        <div class="bg-pink w-40 p-md border-radius m-sm white">1</div>
        <div class="bg-pink w-40 p-md border-radius m-sm white">2</div>
        <div class="bg-pink w-40 p-md border-radius m-sm white">3</div>
    </div>
</div>

```html
<div class="flex flex-wrap-reverse  ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.flex-nowrap | flex-wrap: nowrap
.flex-wrap | flex-wrap: wrap
.flex-wrap-reverse | flex-wrap: wrap-reverse
</cssprops>


## Flex

Use the flex classes to adjust how flex items grow and shrink:

<!-- tabs:start -->

#### ** Auto **

When using `.flex-auto`, flex items will shrink and grow taking account initial size.

<div class="demo text-left p-md mb-md">
    <p class="mb-sm">Before:</p>
    <div class="flex">
        <div class="bg-blue flex-auto p-md border-radius m-sm white">Items can grow / shrink to fill space</div>
        <div class="bg-blue flex-auto p-md border-radius m-sm white">when using <code>.flex-auto</code></div>
    </div>
    <p class="mb-sm">After:</p>
    <div class="flex">
        <div class="bg-blue flex-auto p-md border-radius m-sm white">Items can grow / shrink to fill space</div>
        <div class="bg-blue flex-auto p-md border-radius m-sm white">when using <code>.flex-auto</code></div>
        <div class="bg-blue flex-auto p-md border-radius m-sm white">A long element was inserted, causing the others to shrink</div>
    </div>
</div>

```html
<div class="flex flex-nowrap ...">
    <div class="flex-auto ...">...</div>
    <div class="flex-auto ...">...</div>
    <div class="flex-auto ...">...</div>
</div>
```


#### ** Initial **

When using `.flex-initial`, flex items will only be able to shrink, taking account initial size.

<div class="demo text-left p-md mb-md">
    <p class="mb-sm">Before:</p>
    <div class="flex">
        <div class="bg-pink flex-initial p-md border-radius m-sm white">Items can only shrink</div>
        <div class="bg-pink flex-initial p-md border-radius m-sm white">when using <code>.flex-initial</code></div>
    </div>
    <p class="mb-sm">After:</p>
    <div class="flex">
        <div class="bg-pink flex-initial p-md border-radius m-sm white">Items can only shrink</div>
        <div class="bg-pink flex-initial p-md border-radius m-sm white">when using <code>.flex-initial</code></div>
        <div class="bg-pink flex-initial p-md border-radius m-sm white">A long element was inserted, causing the others to shrink</div>
    </div>
</div>

```html
<div class="flex flex-nowrap ...">
    <div class="flex-initial ...">...</div>
    <div class="flex-initial ...">...</div>
    <div class="flex-initial ...">...</div>
</div>
```


#### ** Split **

When using `.flex-split`, flex items can shrink and grow to fill as much space as they can. Initial size is ignored.

<div class="demo text-left p-md mb-md">
    <p class="mb-sm">Before:</p>
    <div class="flex">
        <div class="bg-blue flex-split p-md border-radius m-sm white">Items can grow / shrink</div>
        <div class="bg-blue flex-split p-md border-radius m-sm white">when using <code>.flex-split</code></div>
    </div>
    <p class="mb-sm">After:</p>
    <div class="flex">
        <div class="bg-blue flex-split p-md border-radius m-sm white">Items can grow / shrink</div>
        <div class="bg-blue flex-split p-md border-radius m-sm white">when using <code>.flex-split</code></div>
        <div class="bg-blue flex-split p-md border-radius m-sm white">Initial size is ignored when dividing the space</div>
    </div>
</div>

```html
<div class="flex flex-nowrap ...">
    <div class="flex-split ...">...</div>
    <div class="flex-split ...">...</div>
    <div class="flex-split ...">...</div>
</div>
```


#### ** None **

When using `.flex-none`, flex items will be unable to shrink or grow.

<div class="demo text-left p-md mb-md">
    <h3>Flex None</h3>
    <p class="mb-sm">Before:</p>
    <div class="flex">
        <div class="bg-pink flex-none p-md border-radius m-sm white">Items can't change size</div>
        <div class="bg-pink flex-none p-md border-radius m-sm white">when using <code>.flex-none</code></div>
    </div>
    <p class="mb-sm">After:</p>
    <div class="flex">
        <div class="bg-pink flex-none p-md border-radius m-sm white">Items can't change size</div>
        <div class="bg-pink flex-none p-md border-radius m-sm white">when using <code>.flex-none</code></div>
        <div class="bg-pink flex-none p-md border-radius m-sm white">A long element was inserted, but sizing is the same</div>
    </div>
</div>


```html
<div class="flex flex-nowrap ...">
    <div class="flex-none ...">...</div>
    <div class="flex-none ...">...</div>
    <div class="flex-none ...">...</div>
</div>
```

<!-- tabs:end -->

<cssprops>
.flex-auto | flex: auto
.flex-initial | flex: initial
.flex-split | flex: 1 1 0
.flex-none | flex: none
</cssprops>


## Flex grow / shrink

Use the flex grow and shrink classes to enable or disable flex growing or shrinking:

A suffix of `1` indicates the operation is enabled, (likewise, `0` means disabled).

For example, `.flex-grow-1` means the flex item 
is allowed to grow, and `.flex-shrink-0` means the flex item is not allowed to shrink.


In the example below, the leftmost element (blue) is allowed to grow, but cannot shrink beyond its max-content size.

<div class="demo flex">
    <div class="flex-grow-1 flex-shrink-0 p-md border-radius bg-blue m-sm white">grow-1 shrink-0</div>
    <div class="p-md border-radius bg-pink m-sm white" style="width: 100px">100px</div>
    <div class="p-md border-radius bg-pink m-sm white" style="width: 100px">100px</div>
</div>

```html
<div class="flex">
    <div class="flex-grow-1 flex-shrink-0 ...">grow-1 shrink-0</div>
    <div class="..." style="width: 100px">100px</div>
    <div class="..." style="width: 100px">100px</div>
</div>
```

<cssprops>
.flex-grow-1 | flex-grow: 1
.flex-grow-0 | flex-grow: 0
.flex-shrink-1 | flex-shrink: 1
.flex-shrink-0 | flex-shrink: 0
</cssprops>



## Flex order

Use the order classes to rearrange the order a flex item renders:

The lower the number the higher the priority. For example, `.order-first` has `order: -99999`, meaning it should have higher priority
than any other element:

<div class="demo">
    <div class="flex p-sm">
        <div class="order-3 bg-orange flex-split p-md border-radius m-sm white">1</div>
        <div class="order-2 bg-orange flex-split p-md border-radius m-sm white">2</div>
        <div class="order-1 bg-orange flex-split p-md border-radius m-sm white">3</div>
    </div>
</div>

```html
<div class="flex ...">
    <div class="order-3 flex-split ...">1</div>
    <div class="order-2 flex-split ...">2</div>
    <div class="order-1 flex-split ...">3</div>
</div>
```

<cssprops>
.order-1 | order: 1
.order-2 | order: 2
... | ...
.order-10 | order: 10
.order-first | order: -99999
.order-last | order: 99999
.order-none | order: 0
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Variants

By default only responsive variants for flexbox will be generated, however you can 
add or remove variants from the `$flex-variants` array.

```scss
$flex-variants: ("responsive") !default;
```


### Flex order variants

Add or remove keys to `$flex-order` to add or remove `order-` variants.

The `none` key should be last to give `.order-none` more specificity than the other order classes, as it is 
usually used to remove orderings.

```scss
$flex-order: (
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "first": -99999,
    "last": 99999,
    "none": 0,
) !default;
```


### Disabling the module

If you don't want anything in this module to be loaded, add `flexbox` to `$blacklisted-modules`:

```scss
$blacklisted-modules: ("flexbox");
```
