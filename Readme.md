## Requirements

- [Node > v20.11](https://nodejs.org/en/)

_A basic understanding of the modern web development workflow. If you don't
know this yet, React might not be for you just yet._

## Getting Started

First clone the repository or use the template option and place
it within your `resources` folder

### Installation

Install dependencies by navigating to the `web` folder within
a terminal of your choice and type `yarn install`.

**Hot Builds In-Game**

When developing in-game, you can use the hot build system by
running the `yarn run start:game` script. This is essentially the start
script but it writes to disk. Meaning all that is required is a
resource restart to update the game script

**Usage in-web development**

```sh
# yarn
yarn run dev
```

**Production Builds**

When you are done with development phase for your resource. You
must create a production build that is optimized and minimized.

You can do this by running the following:

```sh
yarn run build
```

This is purely not my stuff  
credits:- https://github.com/project-error/fivem-react-boilerplate-lua
