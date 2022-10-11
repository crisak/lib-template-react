# ⚙️ Technical documentation

## 🐳 Install dependencies

```bash
$ yarn install
```

> 💡 Note, if you are going to add new dependencies, you should add the names these dependencies to `vite.config.ts` in `build.rollupOptions.external`. This is done to avoid creating re bundles on the libraries externals such as `react`, `bootstrap`, `styled-component` etc.

<details>
<summary>View example in <code>vite.config.ts</code></summary>

```typescript
export default defineConfig({
  ...,
  build: {
    ...,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
      ],
      ...
    }
  }
}
```

</details>

## 🚀 Publish library

**Local machine**

<details>
<summary>Setup credentials on Windows</summary>

- Install <a href="https://www.npmjs.com/package/vsts-npm-auth" target="_blank">vsts-npm-auth</a> as global dependency

  ```bash
  $ npm install -g vsts-npm-auth
  ```

- Then, run vsts-npm-auth to get an Azure Artifacts token added to your user-level .npmrc file

  ```bash
    $ vsts-npm-auth
  ```

</details>
<details>
<summary>Setup credentials on Linux or macOS</summary>

- **Step 1**

  Copy the code below to your user `~/.npmrc` file

  ```js
  registry=https://registry.npmjs.org/
  ; begin auth token
  //pkgs.dev.azure.com/LineaDirectaDevOps/FabricaLegacy/_packaging/{AZURE_ARTIFACTS}/npm/registry/:username={YOUR_USERNAME}
  //pkgs.dev.azure.com/LineaDirectaDevOps/FabricaLegacy/_packaging/{AZURE_ARTIFACTS}/npm/registry/:_password={YOUR_TOKEN_IN_BASE_64}
  //pkgs.dev.azure.com/LineaDirectaDevOps/FabricaLegacy/_packaging/{AZURE_ARTIFACTS}/npm/registry/:email={YOUR_EMAIL}
  //pkgs.dev.azure.com/LineaDirectaDevOps/FabricaLegacy/_packaging/{AZURE_ARTIFACTS}/npm/:username={YOUR_USERNAME}
  //pkgs.dev.azure.com/LineaDirectaDevOps/FabricaLegacy/_packaging/{AZURE_ARTIFACTS}/npm/:_password={YOUR_TOKEN_IN_BASE_64}
  //pkgs.dev.azure.com/LineaDirectaDevOps/FabricaLegacy/_packaging/{AZURE_ARTIFACTS}/npm/:email={YOUR_EMAIL}
  ; end auth token
  ```

- **Step 2**

  Generate a <a href="https://dev.azure.com/LineaDirectaDevOps/FabricaLegacy/_artifacts/feed/npm-feed-test-1/connect/npm#:~:text=Generate%20a-,Personal%20Access%20Token,-with%20Packaging%20read" target="_blank">Personal Access Token</a> with `Packaging read` & `write scopes`.

- **Step 3**

  Base64 encode the personal access token from Step 2.

  One safe and secure method of Base64 encoding a string is to:

  - From a command/shell prompt run:

    ```bash
    node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
    ```

  - Paste your personal access token value and press Enter/Return
  - Copy the Base64 encoded value

- **Step 4**

  Replace both `{YOUR_TOKEN_IN_BASE_64}` values in your user `~/.npmrc` file with your personal access token from Step 3.

- **Step 5**

  Replace all `{AZURE_ARTIFACTS}` values in your user `~/.npmrc` file with the name of Feed configuration in Azure Artifacts.

  Replace both `{YOUR_USERNAME}` values in your user `~/.npmrc` file with your username

  Replace both `{YOUR_EMAIL}` values in your user `~/.npmrc` file with your email

</details>

Run for publish

```bash
$ npm publish
```

## 🧪 Scripts available

### Run storybook locally

Runs the app in development mode. Open http://localhost:6006 to view it in the browser.

```bash
$ yarn storybook
```

### Build storybook

Creates a `storybook-static` directory in root of project.

```bash
$ yarn storybook:build
```

### Deploy storybook

This deployed app in [purge.sh](https://surge.sh/). Important that when try deploy app, Purge will request the next credentials.

- Email: `rexif49573@pahed.com`
- Password: `rexif4******hed.com`

Open https://ld-ui.surge.sh/ to view it in the browser

```bash
$ yarn storybook:deploy
```

### Run tests

```bash
$ yarn test
```

### Run coverage test

Creates a `coverage` directory in root of project.

```bash
$ yarn coverage
```

### Build library

Creates a `dist` directory with a production build of your app.

```bash
$ yarn build
```

## 🗑 Guide for remove all dependencies of Storybook

> 💡 This only applies if Storybook is not going to be used

If you want remove Storybook, these are all dependencies that should remove

```bash
$ yarn remove @storybook/addon-actions @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/builder-vite @storybook/testing-library babel-loader @storybook/react @babel/core
```

**Remove scripts of `package.json`**

- `storybook`
- `storybook:build`
- `storybook:deploy`

Remove folder `.storybook`

## 📄 File naming conventions

This helps us visually identify what task each file is going to do and allows us to perform more efficient searches when developing, this help us the development experience

> Use PascalCase for all components

- `ModalBody.tsx` for create components

  - `ModalBody.test.tsx` for create components with test

  - `ModalBody.stories.tsx` for create components with storybook
  - `ModalBody.modules.css` or `*.modules.scss` for use css modules, click <a href="https://github.com/css-modules/css-modules">here</a> for more info
  - `ModalBody.style.tsx` for create css in js with `styled-components`

- `useFetch.ts` for create custom hooks
- `withSearch.ts` for create HOC

- `measures.util.ts` for create utilities files

  - `map-values.util.ts`

- `users.service.ts` for create utilities files

## 🎯 Architecture of directories

```bash
├── README.md
├── package.json
├── src
│   ├── components
│   │   ├── index.ts
│   │   └── input
│   │       ├── Input.stories.tsx
│   │       ├── Input.styles.ts
│   │       ├── Input.test.tsx
│   │       ├── Input.tsx
│   │       └── index.ts
│   ├── hooks
│   │   ├── index.ts
│   ├── main.tsx
│   ├── styles
│   │   ├── bootstrap-custom.scss
│   │   ├── index.ts
│   │   └── variables.ts
│   ├── utils
│   │   ├── index.ts
│   │   └── measures.util.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

Used tools

<img src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmRDcnaB6bZV7QDUmp6b3pGCHxTS3k7lP6SIVMX1tv137i5KS_PhwpI1CYVGJQLsJ4ItnudcN-Y=w1698-h1444" alt="Used tools" />

## 🗂 External libraries

- <a href="https://reactdatepicker.com/" target="_blank">Date picker</a>
- <a href="https://react-bootstrap.github.io/" target="_blank">React bootstrap</a>
- <a href="https://react-select.com/home" target="_blank">React select</a>
- <a href="https://www.npmjs.com/package/react-bootstrap-icons" target="_blank">React bootstrap icons</a>

## 🌎 References

- Configuration Vitejs for mode library. Click next link for more info <a href="https://vitejs.dev/guide/build.html#library-mode" target="_blank">here.</a>

- Create import absolutes `@/components`, `@/utils`. Click next link for more info <a href="https://vitejs.dev/config/shared-options.html#resolve-alias" target="_blank">here</a>

- <a target="_blank" href="https://storybook.js.org/blog/storybook-for-vite/">Install Storybook with Vite</a>
