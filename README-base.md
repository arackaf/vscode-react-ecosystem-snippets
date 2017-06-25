# VS Code React Ecosystem Snippets

This is a fork from https://github.com/xabikos/vscode-react. My version modifies the export styles to be inline; adds more React snippets—options for inline (braceless) SFCs, more options for React skeletons without import or export statements; and adds TypeScript and MobX snippets.

---

## Installation

In order to install this extension, just search for `React Ecosystem Snippets` from the extensions pane.

## Snippets pattern

The class component snippets often have multiple versions, covering vanilla React; MobX; and where appropriate, TypeScript. These snippets follow the following pattern.  They all start with `r`, followed by the rest of the command.  If there are MobX versions, there will be an `m` or `mi` immediately after the `r`.  If there's a TypeScript version, there will be a `ts` immediately after the `r`.  If there's a version using both MobX and TypeScript, it'll be `rtsm` or `rtsmi` followed by the rest of the command. 

For example: 

`rcc` generates a vanilla React class component with a default export.
`rmcc` generates the same, but with a MobX `@observer` decorator 
`rmicc` generates the same, but with MobX `@inject` and `@observer` decorators
`rtscc` generates the same, but with TypeScript typings
`rtsmcc` generates the same, but with a MobX `@observer` decorator, and TypeScript typings.
`rtsmicc` generates the same, but with MobX `@inject` and `@observer` decorators, and TypeScript typings.

Of course not all of those permutations exist for all snippets; for example, there are no TypeScript versions for the SFCs.

## Snippets

| Trigger   | Content |
| -------:  | ------- |
| `rcc`     | class component default export skeleton |
| `rmcc`    | MobX observer class component default export skeleton |
| `rmicc`   | MobX inject and observer class component default export skeleton |
| `rtscc`   | TypeScript class component default export skeleton |
| `rtsmcc`  | TypeScript MobX observer class component default export skeleton |
| `rtsmicc` | TypeScript MobX inject and observer class component default export skeleton |
|           | ----------------------------------------------------------------------------------------------- 
| `rjcc`    | class component skeleton without import of default export |
| `rmjcc`   | MobX observer class component skeleton without import or default export |
| `rmijcc`  | MobX inject and observer class component skeleton without import or default export |
| `rtsjcc`  | TypeScript class component skeleton without import of default export |
| `rtsmjcc` | TypeScript MobX observer class component skeleton without import or default export |
| `rtsmijcc`| TypeScript MobX inject and observer class component skeleton without import or default export |
|           | -----------------------------------------------------------------------------------------------
| `rsc`     | inline SFC default export skeleton |
| `rmsc`    | MobX inline SFC default export skeleton |
|           | -----------------------------------------------------------------------------------------------
| `rjsc`    | inline SFC without import or export |
| `rmjsc`   | MobX inline SFC without import or export |
|           | -----------------------------------------------------------------------------------------------
| `rscb`    | SFC with braces default export skeleton |
| `rmscb`   | MobX SFC with braces with default export skeleton |
|           | -----------------------------------------------------------------------------------------------
| `rjscb`   | SFC with braces without import or export |
| `rmjscb`  | MobX SFC without import or export |
|           | -----------------------------------------------------------------------------------------------
| `rcfc`    | class component skeleton that contains all the lifecycle methods |
| `ctor`    | class default constructor with props|
| `cwm`     | componentWillMount method |
| `cdm`     | componentDidMount method |
| `cwr`     | componentWillReceiveProps method |
| `scu`     | shouldComponentUpdate method |
| `cwup`    | componentWillUpdate method |
| `cdup`    | componentDidUpdate method |
| `cwun`    | componentWillUnmount method |
| `ren`     | render method |
| `sst`     | this.setState with object as parameter |
| `sstf`    | this.setState with inline function as parameter |
| `sstff`   | this.setState with function as parameter |
| `danger`  | dangerouslySetInnerHtml template|

The following table lists the supported MobX snippets.
They all begin with ```mob``` so it's easy to explore all available options.

| Trigger   | Content |
| -------:  | ------- |
| `mobimp`  | Basic MobX imports |
| `mobimpf` | Full MobX imports |
| `mobactp` | MobX action property |
| `mobactm` | MobX action method |
| `mobobs`  | MobX observable property |
| `mobcom`  | MobX computed property |


## The Generated Code

This is what the snippets above actually generate. `YourComponentName` and `yourProps` are both prompted for in the generated snippet, and | indicates where your cursor will wind up, when finished providing those values.

