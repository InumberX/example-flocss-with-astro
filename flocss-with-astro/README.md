# Static Site Generator with Docker astro

## Development with Node.js

Start a shell such as PoworShell and navigate to the root of the project.

### Installing packages

Install the Node.js package.

```shell
yarn install
```

Please enable husky and set up the linter and formatter to run automatically.

```shell
npx husky install
```

### Execution of development tasks

Execute the following command.

```shell
yarn dev --host
```

The following URL will take you to the screen.

http://localhost:3000/

```shell
yarn sass:dev --watch
```

- Press "Ctrl + C" to stop

### Syntax Check

```shell
yarn lint
```

### Formatter

#### Check

```shell
yarn prettier
```

#### Check and Format

```shell
yarn prettier:fix
```

### Formatter (SCSS)

#### Check

```shell
yarn stylelint
```

#### Check and Format

```shell
yarn stylelint:fix
```

### Build

Execute the following command to execute the build.

```shell
yarn build
```

## Development with Docker

Start a shell such as PoworShell and navigate to the root of the project.

### Launching Containers

The container is started by executing the following command.

```shell
docker compose up -d
```

### Installing packages

Install the Node.js package.

```shell
docker compose exec node yarn install
```

### Execution of development tasks

Execute the following command.

```shell
docker compose exec node yarn dev --host
```

The following URL will take you to the screen.

http://localhost:3000/

```shell
docker compose exec node yarn sass:dev --watch
```

- Press "Ctrl + C" to stop

### Syntax Check

```shell
docker compose exec node yarn lint
```

### Formatter

#### Check

```shell
docker compose exec node yarn prettier
```

#### Check and Format

```shell
docker compose exec node yarn prettier:fix
```

### Formatter (SCSS)

#### Check

```shell
docker compose exec node yarn stylelint
```

#### Check and Format

```shell
docker compose exec node yarn stylelint:fix
```

### Build

Execute the following command to execute the build.

```shell
docker compose exec node yarn build
```

### Stopping Containers

Execute the following command to stop the container.

```shell
docker compose down
```
