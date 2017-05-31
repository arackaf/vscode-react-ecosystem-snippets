# VS Code React Ecosystem Snippets

This is a fork from https://github.com/xabikos/vscode-react. My version modifies the export styles to be inline; adds more React snippets—options for inline (braceless) SFCs, more options for React skeletons without import or export statements, more options for React components with prop types; and begins to add snippets for the surrounding React ecosystem, for now just MobX, with Redux coming soon.

---

## Installation

In order to install this extension, just search for `React Ecosystem Snippets` from the extensions pane.


## Snippets

Below is a list of all available snippets and the triggers of each one. The **⇥** means the `TAB` key.

| Trigger   | Content |
| -------:  | ------- |
| `rcc→`    | class component default export skeleton |
| `rjcc→`   | class component skeleton without import of default export |
| `rmcc→`   | mobx class component default export skeleton |
| `rmjcc→`  | mobx class component skeleton without import or default export |
| `rsc→`    | inline SFC default export skeleton |
| `rscb→`   | SFC default export skeleton |
| `rjsc→`   | inline SFC without import or export |
| `rjscb→`  | SFC without import or export |
| `rmsc→`   | mobx inline SFC default export skeleton |
| `rmscb→`  | mobx SFC default export skeleton |
| `rmjsc→`  | mobx inline SFC without import or export |
| `rmjscb→` | mobx SFC without import or export |
| `rcfc→`   | class component skeleton that contains all the lifecycle methods |
| `ctor→`   | class default constructor with props|
| `cwm→`    | componentWillMount method |
| `cdm→`    | componentDidMount method |
| `cwr→`    | componentWillReceiveProps method |
| `scu→`    | shouldComponentUpdate method |
| `cwup→`   | componentWillUpdate method |
| `cdup→`   | componentDidUpdate method |
| `cwun→`   | componentWillUnmount method |
| `ren→`    | render method |
| `sst→`    | this.setState with object as parameter |
| `sstf→`   | this.setState with function as parameter |
| `danger→` | dangerouslySetInnerHtml template|

The following table lists the supported MobX snippets.
They all begin with ```mob``` so it's easy to explore all available options.

| Trigger   | Content |
| -------:  | ------- |
| `mobimp→` | Basic MobX imports |
| `mobimpf→`| Full MobX imports |
| `mobactp→`| MobX action property |
| `mobactm→`| MobX action method |
| `mobobs→` | MobX observable property |
| `mobcom→` | MobX computed property |


## The Generated Code

This is what the snippets above actually generate. `YourComponentName` and `yourProps` are both prompted for in the generated snippet, and | indicates where your cursor will wind up, when finished providing those values.

