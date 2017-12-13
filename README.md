# Pig Latin Translator

## Installation

### Prerequsites

#### Required

##### Git

`git` can be installed via Homebrew.

```bash
                brew install git
```

##### Node.js 8.9

The recommended way to install `node` is via `nvm`.

```bash
                curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

or

```bash
                wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

Once you have installed `nvm`, you need to either start a new `bash` session or execute the `nvm` initalization script in the current session.

```bash
                . $HOME/.nvm/nvm.sh
```

Now use `nvm` to install `node` v8.9

```bash
                nvm install 8.9
```

Then version 8.9 as the default version of `node`.

```bash
                nvm alias default 8.9
```

#### Optional

##### Yarn

`yarn` can be installed via Homebrew.

```bash
                brew install yarn
```

### Getting the project code

```bash
                git clone https://github.com/mutsys/for-michael-and-phil.git
```

## Running the project

### Enter the project directory

```bash
                cd for-michael-and-phil
```

### Install the `npm` packages

#### via `npm`

```bash
                npm install
```

#### via `yarn`

```bash
                yarn install
```

### Run the tests

The verification of the Pig Latin Translator has been implemented as functional test using `cucumber`.

#### via `npm`

```bash
                npm run test
```

#### via `yarn`

```bash
                yarn run test
```

Once the test has been run, the test results are available as both a machine-readable `json` file and a human-readable `html` file in the top level project directory.

#### View the `json` report

```bash
                more test-results.json
```

#### View the `html` report

```bash
                open test-results.html
```
