Optimizing the Benjamin Moore Paints API to Improve Lookup Time

O(n) --> O(log n) --> O(1)

I took the Benjamin Moore Paints API, took it apart, and refactored it by
re-keying the nested objects so that when you're searching for a color,
it's able to go from O(n) in the original API to O(1) in the new API --
from linear to constant time.

While I use binary search to demonstrate the improved efficiency of lookups on
this refactored API: e.g. ~ 8 operations to find 'EFEEE5'('Dove White'),
vs. ~3500 on the original API ...lookups using JavaScript's 
hash table data structure are O(1) / constant time.

I chose each paint color's hex code to use as they key because it's
guaranteed to be both a.) unique, and b.) descriptive of the color it represents.
