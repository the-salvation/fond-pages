# ADDING NEW PAGE:

1. Add page content to the _store.js_
2. Add a new case to the _narcotics-reducer_
3. Add a new NavLink to the _Nav.js_

# BUILDING PROD FOR GH-PAGES:

1. Make sure you've changed in _package.json_, **"homepage":** value to **"homepage": "https://noachase.github.io/fond-pages/"**,
2. Run: ```gh-pages -d build```

# BUILDING PROD FOR CP PANEL/ HOSTING:

1. Make sure you've changed in the _package.json_, **"homepage":** value to **"homepage": "http://www.fondnn.org.ua"**,
2. Run: ```npm run build```