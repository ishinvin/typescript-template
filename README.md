# TypeScript Project Template

A simple typescript project template for scaffolding Node.js library with preconfigured tools for development, linting, testing, and bundling. This scaffold is designed to quickly start a new TypeScript project with minimal setup.

### Preconfigured in This Template

- **TypeScript** for Node.js
- **ESLint** with TypeScript support
- **Jest** for testing (with ts-jest)
- **tsup** for bundling TypeScript to CJS/ESM
- **Rimraf** for removing build directories
- **npm scripts**: `build`, `test`, `lint`, `clean`

### Quick Commands (pnpm)

- **Check TypeScript types**

```bash
pnpm run check
```

- **Build project**

```bash
pnpm run build
```

- **Run tests**

```bash
pnpm run test
```

- **Clean build folder**

```bash
pnpm run clean
```

- **Clean build + node_modules**

```bash
pnpm run clean:all
```

- **Lint code**

```bash
pnpm run lint
```

- **Lint & fix code**

```bash
pnpm run lint:fix
```
