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
| `sstf`    | this.setState with function as parameter |
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

rcc:

```javascript
import React, {Component} from 'react';

export default class YourComponentName extends Component {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rmcc:

```javascript
import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class YourComponentName extends Component {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rmicc:

```javascript
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('injectedProps')
@observer
export default class YourComponentName extends Component {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rtscc:

```javascript
import React, {Component} from 'react';

export default class YourComponentName extends Component<propType, stateType> {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rtsmcc:

```javascript
import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class YourComponentName extends Component<propType, stateType> {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rtsmicc:

```javascript
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('injectedProps')
@observer
export default class YourComponentName extends Component<stateType, ${4:any}> {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rjcc:

```javascript
class YourComponentName extends Component {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rmjcc:

```javascript
@observer
class YourComponentName extends Component {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rmijcc:

```javascript
@inject('injectedProps')
@observer
class YourComponentName extends Component {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rtsjcc:

```javascript
class YourComponentName extends Component<propType, stateType> {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rtsmjcc:

```javascript
@observer
class YourComponentName extends Component<propType, stateType> {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rtsmijcc:

```javascript
@inject('injectedProps')
@observer
class YourComponentName extends Component<stateType, ${4:any}> {
    render() {
        return (
            <div>
                |
            </div>
        );
    }
}
```
---

rsc:

```javascript
import React from 'react';

export default (yourProps) => (
    <div>
        |
    </div>
);
```
---

rmsc:

```javascript
import React from 'react';
import {observer} from 'mobx-react';

export default observer((yourProps) => (
    <div>
        |
    </div>
));
```
---

rjsc:

```javascript
const YourComponentName = (yourProps) => (
    <div>
        |
    </div>
);
```
---

rmjsc:

```javascript
const YourComponentName = observer((yourProps) => (
    <div>
        |
    </div>
));
```
---

rscb:

```javascript
import React from 'react';

export default (yourProps) => {
    return (
        <div>
            |
        </div>
    );
};
```
---

rmscb:

```javascript
import React from 'react';
import {observer} from 'mobx-react';

export default observer((yourProps) => {
    return (
        <div>
            |
        </div>
    );
});
```
---

rjscb:

```javascript
const YourComponentName = (yourProps) => {
    return (
        <div>
            |
        </div>
    );
};
```
---

rmjscb:

```javascript
const YourComponentName = observer((yourProps) => {
    return (
        <div>
            |
        </div>
    );
});
```
---

rcfc:

```javascript
import React, {Component} from 'react';

export default class YourComponentName extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
```
---

ctor:

```javascript
constructor(props) {
    super(props);
    |
}
```
---

cwm:

```javascript
componentWillMount() {
    |
}
```
---

cdm:

```javascript
componentDidMount() {
    |
}
```
---

cwr:

```javascript
componentWillReceiveProps(nextProps) {
    |
}
```
---

scu:

```javascript
shouldComponentUpdate(nextProps, nextState) {
    |
}
```
---

cwup:

```javascript
componentWillUpdate(nextProps, nextState) {
    |
}
```
---

cdup:

```javascript
componentDidUpdate(prevProps, prevState) {
    |
}
```
---

cwun:

```javascript
componentWillUnmount() {
    |
}
```
---

ren:

```javascript
render() {
    return (
        <div>
            |
        </div>
    );
}
```
---

sst:

```javascript
this.setState({|});
```
---

sstf:

```javascript
this.setState((state, props) => { return { | }});
```
---

danger:

```javascript
dangerouslySetInnerHTML={{__html: |}}
```
---

mobimp:

```javascript
import {action, observable, computed} from 'mobx';
```
---

mobimpf:

```javascript
import {action, observable, computed, autorun, reaction, when, observe, intercept, runInAction, untracked, extendObservable, isObservable, toJS} from 'mobx';
```
---

mobrimp:

```javascript
import {observer} from 'mobx-react';
```
---

mobrimpf:

```javascript
import {observer, Provider, inject} from 'mobx-react';
```
---

mobactp:

```javascript
@action methodName = yourProps => |;
```
---

mobactm:

```javascript
@action
methodName(yourProps) {
    |
}
```
---

mobobs:

```javascript
@observable propertyName = |;
```
---

mobcom:

```javascript
@computed get propertyName() { return |; }
```
---