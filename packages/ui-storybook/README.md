This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn lerna run [PROJECT_NAME:ENVIRONMENT] -[OPTION]`

`ex: yarn lerna run storybook:dev --stream`

Storybook will be prompted in the default explorer at http://localhost:9009

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn storybook:test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn storybook:lint`

Prompts the typos based on the projects configuration in order to estandarice code writing.

 * **Be careful with the .tslint configuration, tests and lint tasks are performed every commit.**

       "eofline": true,
           "semicolon": true,
           "whitespace": true,
           "quotemark": [true, "single"],
           "no-empty": [
             true,
             "allow-empty-functions"
           ]


# Definitions

## Design language

Aligning the React design principles and focusing in the term Composition we are using Atomic design as common language to provide granularity, reusability and consistency at the development of new components so:
 
 * Atoms: Are the smallest reusable elements such inputs (buttons, selectors, checkboxes)  or global vars as (fonts, colors) that are no functional and with not a lot of states.
 * Molecules: Uses and order different (component, atoms) as a composition into a layout or superior component, it performs functionality managing its properties by the interaction with the atoms.
 * Organisms: At this level the components are convention of atoms and molecule, but, the element have to be portable and reusable enough, it has a final shape to be deployed.
 * Templates: It is not supposed to be a composition of other components, it defines de relations between then in terms of placement, position and page patterns.
 * Pages: Final composition between templates and components, are supposed to be navigated and it can be used to determine if its elements are decomposed or reusable enough.	
	

## Storybook

This is the component’s gallery that serves as repository to store all visual elements developed by the team, it enables organization to respect and share the design language and code consistency. Think it as a showroom, where we are giving visibility of all designed elements without the need of a specific application or page.


# Code style guide 

The repository is orchestrated with Lerna that facilitates the use of dependency between different applications by consuming domains (https://lerna.js.org/)

 * All component has to ve tested and include at least call back, props and snapshot. 

## Components path structure
 
* Take a look at [Panel component](https://github.com/AdelanteFinancialHoldings/platform/tree/master/ui/src/apps/ui-storybook/src/components/panel), it is a brief example developed following the folder structure and guidelines shown below.

* Do not forget to export all components at `./src/components/index.ts` in order to be included at `dist package`. Then run `yarn` to build all workspaces. 

      ./src/components/[ComponentName]
      --- [components] <- folder contains the base styles
         --- ComponentName.Styled.tsx
         // ...
         // Component variation styles
         // ...
         ——— index.ts
      --- [types] <- folder contains the properties definition
         --- ComponentName.prop-types.ts
         // ...
         // Component properties 
         // ...
         ——— index.d.ts <-- exports, composes and infers default properties from base props declaration on each properties definition
      --- [constants] <- folder contains constants definitions WARNING use only if are local to Component, instead use ~/src/utils to place global constants
         --- ConstantName.ts      
         ——— index.ts
      --- ComponentName.tsx <- base component
      --- ComponentVariationName.tsx <- defines a variation of main component
      // ...
      // Component variation files
      // ...
      --- component.stories.tsx
      --- Component.test.js
      --- index.tsx
