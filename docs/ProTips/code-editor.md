## Run multi-line script
Press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, or click the "Run" button.

## Exposed ad hoc functions
1. Database: `getItem`, `setItem`, `delItem`, `clearDB`
2. `$load( scriptsURLs )`: `scriptsURLs` can be a string or tuple or array.  
   E.g. load some well-known frameworks:
   - VS Code (Monaco Editor):
     - `$load.presets.VSCode()`
     - `$VSCode()`
     - `$VSCode(lang='julia')`
   - TensorFlow.js: `$load('@tensorflow/tfjs')`
3. Other
   - `$str`: `JSON.stringify` indented with two spaces
   - `$clear`: Clear outputs

## Special marks
- if (code.endsWith('`_?_`')):
  - `_?_` = `//.`: Do not output the return value
  - `_?_` = `//..`: Force output return value (To override the default behavior of not returning the value of the entire program if the program contains `_console.log`)
  - `_?_` = `//.JSON`: JSON.stringify the return value

## Custom tasks
- `setItem('custom:run-after-loading', 'alert("Hi")')`