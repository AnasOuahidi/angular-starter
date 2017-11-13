## Angular starter based on cli with server-side-rendering
- [Make sure you have node 6 installed](#step1)
- [Clone the project](#step2)
- [Install the global dependencies](#step3)
- [Install the project dependencies](#step4)
- [The commands](#step5)
- [With npm](#step5.1)
- [With yarn](#step5.2)

### <a name="step1"></a> Step 1: Make sure you have node 6 installed
```
node -v // v6.12.0 it's okey if it's not exactly the same version
npm -v // 3.10.10 it's okey if it's not exactly the same version
```
### <a name="step2"></a> Step 2: Clone the project
```
git clone git@github.com:AnasOuahidi/angular-starter.git myApp
cd myApp
```
### <a name="step3"></a> Step 3: Install the global dependencies
```
npm i -g yarn@latest
npm i -g typescript@latest
npm i -g @angular/cli@latest
npm i -g protractor@latest
npm i -g webpack@latest
npm i -g webpack-dev-server@latest
```
### <a name="step4"></a> Step 4: Install the project dependencies
```
npm i
```
OR
```
yarn
```
### <a name="step5"></a> Step 5: The commands
##### <a name="step5.1"></a> With npm 
```
npm start // Serve locally and open the browser
npm run start:hmr // Serve locally with hot module replacement
npm run start:aot // Serve locally with ahead of time compilation
npm run start:hmr:aot // Serve locally with both hot module replacement and ahead of time compilation
npm run lint // Lint the typescript code
npm run test // Run unit tests with karma
npm run e2e // Run end to end tests with protractor
npm run build:prerender // Build the project without server side rendering
npm run build:ssr // Build the project with server side rendering
npm run serve:prerender // Serve for production without server side rendering
npm run serve:ssr // Serve for production with server side rendering
```
##### <a name="step5.2"></a> With yarn 
```
yarn start // Serve locally and open the browser
yarn start:hmr // Serve locally with hot module replacement
yarn start:aot // Serve locally with ahead of time compilation
yarn start:hmr:aot // Serve locally with both hot module replacement and ahead of time compilation
yarn lint // Lint the typescript code
yarn test // Run unit tests with karma
yarn e2e // Run end to end tests with protractor
yarn build:prerender // Build the project without server side rendering
yarn build:ssr // Build the project with server side rendering
yarn serve:prerender // Serve for production without server side rendering
yarn serve:ssr // Serve for production with server side rendering
```
##### <a name="step6"></a> To do
Docker Integration
