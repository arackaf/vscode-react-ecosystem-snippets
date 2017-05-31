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

rjsc:

```javascript
const YourComponentName = (yourProps) => (
    <div>
        |
    </div>
);
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

rmjsc:

```javascript
const YourComponentName = observer((yourProps) => (
    <div>
        |
    </div>
));
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
this.setState(|);
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