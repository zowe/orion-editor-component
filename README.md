# orion-editor-component

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zowe_orion-editor-component&metric=alert_status)](https://sonarcloud.io/dashboard?id=zowe_orion-editor-component)

Eclipse Orion based React editor component.

## Component arguments/properties

* content - String - Text content to be displayed
* fullscreen - Boolean - Should the div be set to full width and height
* languageFilesHost - String - URL where language files are located
* syntax - String - Set the languge type
* passContentToParent - Function - Hook to allow parent component to get the modified editor contents

### Example passContentToParent hook
```javascript
getContent = content => {
        this.setState({ currentContent: content });
    }
```

## Build & Publishing
* npm run dev - Starts a webpack dev server that renders the Editor and a debug bar for testing purposes
* npm run lint - *Broken temporarily* Ensures javascript style guidance
* npm run build - Uses babel to produce distribution
* npm publish - Publish to https://gizaartifactory.jfrog.io/gizaartifactory/api/npm/npm-local-release/

A languageFileHost prop is required if the component is to be reused, when developing the editor within this repo language files are served up by webpack from /src/languages