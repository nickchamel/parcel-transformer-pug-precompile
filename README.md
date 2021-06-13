# parcel-transformer-pug-precompile
Plugin for parcel v2. Precompile pug templates into javascript sources exporting their compiling functions.

# Install

```bash
npm install -D parcel-transformer-pug-precompile
```

```bash
yarn add -D parcel-transformer-pug-precompile
```

# Usage

.parcelrc
```
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "*.pug": ["parcel-transformer-pug-precompile"]
  }
}
```

index.html
```html
<!DOCTYPE html>
...
<html>
<body>
  <div id="app"></div>
  <script src="./index.js"></script>
</body>
</html>
```

template.pug
```pug
h1 Hello #{whom}!
```

index.js
```javascript
import compileTemplate from './template.pug';

const app = document.getElementById('app');
app.innerHTML = compileTemplate({ whom: 'World' });
```
