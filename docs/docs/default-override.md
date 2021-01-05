# **Default Override**

<p class="m-0 mt-md">Default styles to ease UI development process.</p>

---

## Unstyled Headers

This sets `font-weight` and `font-size` properties of all headers to inherit, to avoid the need to override the 
browser's builtin styles.

This is enabled by the `headers` key in `$override-default`, and defaults to `true`.

<cssprops>
h1, h2, h3, h4, h5, h6 | font-size: inherit\nfont-weight: inherit
</cssprops>


## Default Fonts

This applies `$default-header-font` to headers, and `$default-body-font` to all other elements in the body, including 
elements that do not normally inherit the font-family such as buttons and inputs.

This is enabled by the `font` key in `$override-default`, and defaults to `false`.

<cssprops>
h1, h2, h3, h4, h5, h6 | font-family: $default-header-font
body, input, textarea, button | font-family: $default-body-font
</cssprops>



## Remove Default Margins

By default your browser will add margins to certain elements, which can be accidentally relied on and requires effort to override. Enabling this will remove those margins.

This is enabled by the `margins` key in `$override-default`, and defaults to `true`.

<cssprops>
body, blockquote, dl, dd, p,\nfigure, pre, fieldset, menu,\nol, ul, h1, h2, h3, h4, h5, h6, hr | margin: 0
</cssprops>


## No List Style

Lists are often used for UI elements, which requires additional effort to remove the default padding and list-style. Enabling this 
resets the list style by default.

This is enabled by the `list-style` key in `$override-default`, and defaults to `true`.

<cssprops>
ol, ul | padding: 0\nlist-style: none
</cssprops>


## Image Block

Enabling this will force images and other image-like elements such as videos, iframes, etc... to be `display: block` by default, which is often a more common use case.

This is enabled by the `image-block` key in `$override-default`, and defaults to `true`.

<cssprops>
img, svg, video, canvas,\naudio, iframe, embed, object | display: block
</cssprops>


## Customizing

The following variables can be found in `_settings.scss`.

---

### Default override settings

Modify the `$override-default` map to enable or disable any of the overrides above.

```scss
$override-default: (
    "headers"     : true,
    "font"        : false,
    "margins"     : true,
    "list-style"  : true,
    "image-block" : true
) !default;
```


### Default fonts

The following variable contain the default fonts for the `font` override:

```scss
$default-header-font: Arial 16pt !default;
$default-body-font: Arial 10pt !default;
```

These defaults merely serve as an example and should not be used for your project.
