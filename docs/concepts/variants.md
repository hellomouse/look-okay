# Variants

---

## How to use Variants

Modules can be customized to have variants auto-generated. These variants are used simply 
by placing the name of the variant with a colon before the class, ie `class="hover:red"`.

The following variants can be used (if enabled for the module). Note most of them are not enabled by default:

---

**State variants:**

- hover, focus, active, visited, checked, disabled


**State variants (name doesn't match selector):**
- first (first-child)
- last (last-child)
- even (nth-child(even))
- odd (nth-child(odd))

**Responsive:**

- sm, md, lg, xl


**Reduced-motion Variants**

- reduce-motion
- default-motion


**Enable all variants**

- all

Responsive variants can be combined with other variants, for example `md:hover:classname`.


## Customizing Variants

In `scss/_settings.scss`, you'll find arrays like `$modifier-variants` that store all variants that will be generated for that module. See the individual module pages for what arrays to modify for each module.


## Adding New Variants

Variants are generated using the `_variant-generator` mixin in `scss/util/_variants.scss`. Simply add an `@if` statement to 
generate your variant. Alternatively, you can add variants that follow the existing rules above by modifying the array definitions 
at the top of the same file.
