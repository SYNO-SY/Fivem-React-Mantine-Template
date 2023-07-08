
## Requirements
* [Node > v10.6](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/getting-started/install) (Preferred but not required)

*A basic understanding of the modern web development workflow. If you don't 
know this yet, React might not be for you just yet.*

## Getting Started

First clone the repository or use the template option and place
it within your `resources` folder

### Installation

*The boilerplate was made using `yarn` but is still compatible with
`npm`.*

Install dependencies by navigating to the `web` folder within
a terminal of your choice and type `npm i` or `yarn`.



**Hot Builds In-Game**

When developing in-game, you can use the hot build system by
running the `start:game` script. This is essentially the start
script but it writes to disk. Meaning all that is required is a
resource restart to update the game script

**Usage**
```sh
# yarn
yarn start:game
# npm
npm run start:game
```

**Production Builds**

When you are done with development phase for your resource. You
must create a production build that is optimized and minimized.

You can do this by running the following:

```sh
npm run build
yarn build 
```
This is purely not my stuff  
credits:- https://github.com/project-error/fivem-react-boilerplate-lua
