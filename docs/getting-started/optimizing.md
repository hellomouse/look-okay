# Optimizing

---

## Sizes

You may notice the build output sizes are quite large. This is normal, as many variants are generated, and while 
you need them, it's unlikely that you would use *all* of them.

---

|Uncompressed*|Minified|Gzip|
|---|---|---|
|5082 kB|1278 kB|81 kB|

*Uncompressed includes comments

---

We recommend using automated tools like [PurgeCSS](https://github.com/FullHuman/purgecss) or [PurifyCSS](https://github.com/purifycss/purifycss) to automatically remove unused classes
from your final project.


## Trimmed Version
