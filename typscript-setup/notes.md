tsc --init

tsc index.ts

tsc -w index.ts -> REconpiles with watch mode!

- Watches for errors in real time

### Working with multiple files

tsc -> will compile any .ts files it comes accross
tsc -w => will watch all files

### Files, Include and Exclude

- In the tsconfig.json
- we can create a files object to tell what files we want to include
- we can use a include object -> The default of include is everything unless you have a file object
- we can use the exclude object ->
- exclude defaults to not including node_modules. If we are changin this we need to explicitly put node_modules back in

### Outdir

- This is were it returns the compiled files

### Target

- The version of JS it compiles to

### strict option

- This defaults to true
- It enables many more strict TypeChecks

- strictNullCheck -> Governs how you tell with null false and undefined

### Compiler options wrap up
